import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import { AppContent } from "./App";
import { getPageSeo, prerenderPaths } from "./pages/pageIndex";

export function render(url: string) {
    return renderToString(
        <StrictMode>
            <StaticRouter location={url}>
                <AppContent />
            </StaticRouter>
        </StrictMode>
    );
}

export { getPageSeo, prerenderPaths };
