import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.getElementById("root");

if (!rootElement) {
    throw new Error("Could not find the React root element.");
}

const app = (
    <StrictMode>
        <App />
    </StrictMode>
);

// In production, prerendered HTML is already inside #root and should be
// hydrated. In Vite development, #root is empty, so use normal client render.
if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, app);
} else {
    createRoot(rootElement).render(app);
}
