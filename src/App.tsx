import * as React from "react";
import {
    BrowserRouter,
    useLocation,
    useRoutes,
} from "react-router";

import "./App.scss";

import { pages } from "./pages/pageIndex";
import { WebsiteProject } from "./pages/work/websites/websiteTemplate";
import { TransitionMask } from "./components/global/TransitionMask";
import { Navbar } from "./components/Navbar";
import { PageMetadata } from "./components/seo/PageMetadata";

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
        element: (
            <main className="page-content">
                <section className="section light min-100 top">
                    <div className="wrapper">
                        <h1>Page not found</h1>
                        <p>The page you're looking for doesn't exist or may have moved.</p>
                    </div>
                </section>
            </main>
        ),
    },
];

type TransitionRouterProps = {
    routes: typeof routes;
    config: unknown;
};

type TransitionRuntime = {
    createReactTransitionRouter: (options: {
        React: typeof React;
        router: {
            useLocation: typeof useLocation;
            useRoutes: typeof useRoutes;
        };
    }) => React.ComponentType<TransitionRouterProps>;
    initPage?: () => void;
};

declare global {
    interface Window {
        __CONFIG__?: unknown;
        __RE_TRANSITIONS__?: TransitionRuntime;
    }
}

function AppRoutes() {
    const runtimeAttached = React.useRef(false);
    const [transitionRuntime, setTransitionRuntime] = React.useState<{
        Component: React.ComponentType<TransitionRouterProps>;
        config: unknown;
    } | null>(null);

    React.useEffect(() => {
        let intervalId: number | undefined;

        const attachRuntime = () => {
            if (runtimeAttached.current) {
                return true;
            }

            const runtime = window.__RE_TRANSITIONS__;

            if (!runtime?.createReactTransitionRouter) {
                return false;
            }

            const Component = runtime.createReactTransitionRouter({
                React,
                router: {
                    useLocation,
                    useRoutes,
                },
            });

            runtimeAttached.current = true;
            setTransitionRuntime({
                Component,
                config: window.__CONFIG__,
            });

            return true;
        };

        if (!attachRuntime()) {
            intervalId = window.setInterval(() => {
                if (attachRuntime() && intervalId !== undefined) {
                    window.clearInterval(intervalId);
                }
            }, 50);
        }

        return () => {
            if (intervalId !== undefined) {
                window.clearInterval(intervalId);
            }
        };
    }, []);

    const initCalled = React.useRef(false);

    React.useEffect(() => {
        if (!transitionRuntime || initCalled.current) {
            return;
        }

        const frame = window.requestAnimationFrame(() => {
            if (initCalled.current) {
                return;
            }

            initCalled.current = true;
            window.__RE_TRANSITIONS__?.initPage?.();
        });

        return () => window.cancelAnimationFrame(frame);
    }, [transitionRuntime]);

    const defaultRouteElement = useRoutes(routes);

    if (!transitionRuntime) {
        return defaultRouteElement;
    }

    const TransitionController = transitionRuntime.Component;

    return (
        <TransitionController
            routes={routes}
            config={transitionRuntime.config}
        />
    );
}

/**
 * Shared application tree used by both the browser router and the
 * StaticRouter used during the prerender build.
 */
export function AppContent() {
    return (
        <>
            <PageMetadata />
            <Navbar />
            <TransitionMask />
            <div className="smooth-wrapper">
                <div className="smooth-content">
                    <AppRoutes />
                </div>
            </div>
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    );
}
