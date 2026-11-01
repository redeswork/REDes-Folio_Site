import { useEffect } from "react";
import { useLocation } from "react-router";
import { getPageSeo } from "../../pages/pageIndex";

function setMetaContent(selector: string, content: string) {
    let element = document.head.querySelector<HTMLMetaElement>(selector);

    if (!element) {
        element = document.createElement("meta");
        const [attribute, value] = selector.match(/\[(name|property)="([^"]+)"\]/)?.slice(1) ?? [];

        if (attribute && value) {
            element.setAttribute(attribute, value);
        }

        document.head.appendChild(element);
    }

    element.content = content;
}

export function PageMetadata() {
    const location = useLocation();

    useEffect(() => {
        const seo = getPageSeo(location.pathname);

        document.title = seo.title;
        setMetaContent('meta[name="description"]', seo.description);
        setMetaContent('meta[property="og:type"]', "website");
        setMetaContent('meta[property="og:title"]', seo.title);
        setMetaContent('meta[property="og:description"]', seo.description);

        const existingRobots = document.head.querySelector<HTMLMetaElement>(
            'meta[name="robots"]'
        );

        if (seo.noIndex) {
            setMetaContent('meta[name="robots"]', "noindex,follow");
        } else {
            existingRobots?.remove();
        }

        const canonical = document.head.querySelector<HTMLLinkElement>(
            'link[rel="canonical"]'
        );

        if (canonical) {
            canonical.href = new URL(location.pathname, canonical.href).href;
        }

        const ogUrl = document.head.querySelector<HTMLMetaElement>(
            'meta[property="og:url"]'
        );

        if (ogUrl && canonical) {
            ogUrl.content = canonical.href;
        }
    }, [location.pathname]);

    return null;
}
