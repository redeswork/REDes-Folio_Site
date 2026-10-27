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

            },
        },
    },
})