
const RUNTIME_ENTRY =
    "https://re-codebase.pages.dev/entry.js";

async function loadRuntime() {
    try {
        await import(RUNTIME_ENTRY);

        console.log("[RE] External runtime loaded");

    } catch (error) {
        console.error("[RE] Failed to load external runtime:", error);
    }
}

loadRuntime();
