import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const projectDir = path.resolve(scriptDir, "..");
const distDir = path.join(projectDir, "dist");
const serverEntry = path.join(projectDir, "dist-server", "entry-server.js");

const template = await readFile(path.join(distDir, "index.html"), "utf8");
const { render, getPageSeo, prerenderPaths } = await import(
    pathToFileURL(serverEntry).href
);

const siteUrl = process.env.SITE_URL?.replace(/\/$/, "");

function escapeHtml(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function buildHead(seo, routePath) {
    const title = escapeHtml(seo.title);
    const description = escapeHtml(seo.description);
    const canonical = siteUrl && routePath !== "/__not-found__"
        ? `<link rel="canonical" href="${escapeHtml(`${siteUrl}${routePath === "/" ? "/" : routePath}`)}" />`
        : "";
    const robots = seo.noIndex
        ? '<meta name="robots" content="noindex,follow" />'
        : "";
    const ogUrl = siteUrl && routePath !== "/__not-found__"
        ? `<meta property="og:url" content="${escapeHtml(`${siteUrl}${routePath === "/" ? "/" : routePath}`)}" />`
        : "";

    return [
        `<title>${title}</title>`,
        `<meta name="description" content="${description}" />`,
        canonical,
        robots,
        `<meta property="og:type" content="website" />`,
        `<meta property="og:title" content="${title}" />`,
        `<meta property="og:description" content="${description}" />`,
        ogUrl,
    ].filter(Boolean).join("\n    ");
}

function renderDocument(routePath) {
    const seo = getPageSeo(routePath);
    const markup = render(routePath);
    const rootMarkup = `<div id="root">${markup}</div>`;

    const rootPattern = /<div id="root">\s*<\/div>/;

    if (!rootPattern.test(template)) {
        throw new Error('Could not find the empty #root element in dist/index.html');
    }

    return template
        .replace(rootPattern, rootMarkup)
        .replace(/<title>.*?<\/title>/s, buildHead(seo, routePath));
}

for (const routePath of prerenderPaths) {
    const html = renderDocument(routePath);
    const outputPath = routePath === "/"
        ? path.join(distDir, "index.html")
        : path.join(distDir, routePath.slice(1), "index.html");

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, "utf8");
    console.log(`[prerender] ${routePath} -> ${path.relative(projectDir, outputPath)}`);
}

// Cloudflare Pages uses a root-level 404.html for unmatched paths.
const notFoundHtml = renderDocument("/__not-found__");
await writeFile(path.join(distDir, "404.html"), notFoundHtml, "utf8");
console.log("[prerender] /404 -> dist/404.html");

// A sitemap needs an absolute public origin. Set SITE_URL in the build
// environment once the custom domain points to this Cloudflare Pages project.
if (siteUrl) {
    const sitemapUrls = prerenderPaths
        .filter((routePath) => !getPageSeo(routePath).noIndex)
        .map((routePath) => {
            const location = `${siteUrl}${routePath === "/" ? "/" : routePath}`;
            return `  <url><loc>${escapeHtml(location)}</loc></url>`;
        })
        .join("\n");

    const sitemap = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
        sitemapUrls,
        '</urlset>',
        '',
    ].join("\n");

    await writeFile(path.join(distDir, "sitemap.xml"), sitemap, "utf8");
    await writeFile(
        path.join(distDir, "robots.txt"),
        `User-agent: *\nAllow: /\nSitemap: ${siteUrl}/sitemap.xml\n`,
        "utf8"
    );

    console.log("[prerender] dist/sitemap.xml");
    console.log("[prerender] dist/robots.txt");
} else {
    console.warn("[prerender] SITE_URL is not set; canonical URLs and sitemap.xml were skipped.");
}
