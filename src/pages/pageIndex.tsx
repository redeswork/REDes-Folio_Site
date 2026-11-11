import { HomePage } from "./home/Home";
import { HomeNew } from "./homeNew/HomeNew";
import { Websites } from "./work/websites/websites";
import { TestPage } from "./testPage/TestPage";
import { Work } from "./work/portfolio";
import { websiteProjects } from "./work/websites/projects/websiteData";
import { WebsiteProject } from "./work/websites/websiteTemplate";
import { Logopage } from "./logo";
import { About } from "./about/About";
import { Playground } from "./playground/Playground";

export type PageSeo = {
    title: string;
    description: string;
    noIndex?: boolean;
};

export const pages = {
    "/": {
        component: HomePage,
        label: "Home",
        seo: {
            title: "RE Design | Website Coming Soon",
            description: "RE Design by Robbie Eason, freelance Webflow developer. Website coming soon.",
        },
    },
    "/about": {
        component: About,
        label: "About",
        seo: {
            title: "About | RE Design",
            description: "Lorem ipsum dolor.",
            noIndex: true
        },
    },
    "/test-page": {
        component: TestPage,
        label: "Test Page",
        seo: {
            title: "Test Page | RE Design",
            description: "A test page for RE Design website development.",
            noIndex: true,
        },
    },
    "/home-dev": {
        component: HomeNew,
        label: "Home",
        seo: {
            title: "Freelance Website Developer | RE Design",
            description: "Bespoke websites for theatre and entertainment businesses.",
            noIndex: true,
        },
    },
    "/work": {
        component: Work,
        label: "Work",
        seo: {
            title: "Website Design & Development Work | RE Design",
            description: "A selection of bespoke website design and development projects for businesses, creative professionals and entertainment clients.",
        },
    },
    "/work/websites": {
        component: Websites,
        label: "Websites",
        seo: {
            title: "Website Projects | RE Design",
            description: "A selection of website design and development projects by RE Design.",
        },
    },
    "/logo": {
        component: Logopage,
        label: "Logo",
        seo: {
            title: "RE Design Logo",
            description: "RE Design visual identity.",
        },
    },
    "/playground": {
        component: Playground,
        label: "Playground",
        seo: {
            title: "Playground",
            description: "lorem",
            noIndex: false
        },
    },


    ...Object.fromEntries(
        websiteProjects.map((project) => [
            `/work/websites/${project.slug}`,
            {
                component: WebsiteProject,
                label: project.title,
                seo: {
                    title: `${project.title} | RE Design`,
                    description: `${project.title}, a website project for ${project.clientName} by RE Design.`,
                },
            },
        ])
    ),
};

export function getPageSeo(pathname: string): PageSeo {
    const normalizedPath = pathname.length > 1
        ? pathname.replace(/\/+$/, "")
        : pathname;
    const page = pages[normalizedPath as keyof typeof pages];

    if (page?.seo) {
        return page.seo;
    }

    return {
        title: "Page not found | RE Design",
        description: "The page you're looking for doesn't exist or may have moved.",
        noIndex: true,
    };
}

export const prerenderPaths = Object.keys(pages);
