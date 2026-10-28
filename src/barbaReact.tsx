
import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import { flushSync } from "react-dom";

import "./App.scss";

import { pages } from "./pages/pageIndex";

const roots = new WeakMap<HTMLElement, Root>();

function mountPage(container: HTMLElement) {
    // Always resolve the actual Barba container.
    const barbaContainer =
        container.matches('[data-barba="container"]')
            ? container
            : container.closest<HTMLElement>('[data-barba="container"]');

    if (!barbaContainer) {
        console.error(
            "[REACT BARBA] Could not find Barba container",
            container
        );
        return;
    }

    const pageName = barbaContainer.dataset.page;

    const page = pageName
        ? pages[pageName as keyof typeof pages]
        : undefined;

    const Page = page?.component;

    const rootElement =
        barbaContainer.querySelector<HTMLElement>("#root");

    if (!Page || !rootElement) {
        console.error("[REACT BARBA] Could not find page or #root", {
            pageName,
            barbaContainer,
            rootElement,
        });
        return;
    }

    // Prevent mounting the same Barba container twice.
    if (roots.has(barbaContainer)) return;

    const root = createRoot(rootElement);
    roots.set(barbaContainer, root);

    flushSync(() => {
        root.render(
            <StrictMode>
                <Page />
            </StrictMode>
        );
    });

    console.log("[REACT BARBA] Mounted:", pageName);
}

function unmountPage(container: HTMLElement) {
    const barbaContainer =
        container.matches('[data-barba="container"]')
            ? container
            : container.closest<HTMLElement>('[data-barba="container"]');

    if (!barbaContainer) return;

    const root = roots.get(barbaContainer);

    if (!root) return;

    flushSync(() => {
        root.unmount();
    });

    roots.delete(barbaContainer);

    console.log(
        "[REACT BARBA] Unmounted:",
        barbaContainer.dataset.page
    );
}

declare global {
    interface Window {
        __REACT_BARBA__?: {
            mount: (container: HTMLElement) => void;
            unmount: (container: HTMLElement) => void;
        };
    }
}

export function registerReactBarba() {
    window.__REACT_BARBA__ = {
        mount: mountPage,
        unmount: unmountPage,
    };

    // Mount the initial page once.
    const initialContainer =
        document.querySelector<HTMLElement>(
            '[data-barba="container"]'
        );

    if (initialContainer) {
        mountPage(initialContainer);
    }
}
