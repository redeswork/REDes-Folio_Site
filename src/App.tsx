import * as React from "react";
import {
    BrowserRouter,
    Navigate,
    useLocation,
    useRoutes,
} from "react-router";

import "./App.scss";

import { pages } from "./pages/pageIndex";
import { WebsiteProject } from "./pages/work/websites/websiteTemplate";


const routes = [
    ...Object.entries(pages)
        .filter(([path]) => !path.startsWith("/work/websites/"))
        .map(([path, page]) => {
            const Page = page.component;

            return {
                path,
                element: <Page />,
            };
        }),

    {
        path: "/work/websites/:slug",
        element: <WebsiteProject />,
    },

    {
        path: "*",
        element: <Navigate to="/" replace />,
    },
];


type TransitionRouterProps = {
    routes: typeof routes;
    config: unknown;
};

declare global {
    interface Window {
        __CONFIG__?: unknown;
        __RE_TRANSITIONS__?: {
            createReactTransitionRouter: (options: {
                React: typeof React;
                router: {
                    useLocation: typeof useLocation;
                    useRoutes: typeof useRoutes;
                };
            }) => React.ComponentType<TransitionRouterProps>;

            initPage?: () => void;
        };
    }
}

function AppRoutes() {
    const [runtimeReady, setRuntimeReady] = React.useState(
        Boolean(
            window.__RE_TRANSITIONS__?.createReactTransitionRouter
        )
    );

    React.useEffect(() => {
        if (runtimeReady) return;

        const checkRuntime = window.setInterval(() => {
            if (
                window.__RE_TRANSITIONS__?.createReactTransitionRouter
            ) {
                window.clearInterval(checkRuntime);
                setRuntimeReady(true);
            }
        }, 50);

        return () => window.clearInterval(checkRuntime);
    }, [runtimeReady]);

    const TransitionController = React.useMemo(() => {
        if (!runtimeReady) return null;

        return window.__RE_TRANSITIONS__?.createReactTransitionRouter({
            React,
            router: {
                useLocation,
                useRoutes,
            },
        }) ?? null;
    }, [runtimeReady]);

    const initCalled = React.useRef(false);

    React.useEffect(() => {
        if (!runtimeReady || !TransitionController || initCalled.current) {
            return;
        }

        initCalled.current = true;

        requestAnimationFrame(() => {
            window.__RE_TRANSITIONS__?.initPage?.();
        });
    }, [runtimeReady, TransitionController]);

    if (!runtimeReady || !TransitionController) {
        return useRoutes(routes);
    }

    return (
        <TransitionController
            routes={routes}
            config={window.__CONFIG__}
        />
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}
