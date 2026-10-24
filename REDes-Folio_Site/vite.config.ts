import { resolve } from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
    plugins: [react()],

    server: {
      watch: {
        usePolling: true
      }
    },

    build: {
        rollupOptions: {
            input: {
                home: resolve(import.meta.dirname, "index.html"),
                newHome: resolve(import.meta.dirname, "home-new.html")
                // projects: resolve(import.meta.dirname, "projects.html"),
                // contact: resolve(import.meta.dirname, "contact.html"),
            },
        },
    },
})