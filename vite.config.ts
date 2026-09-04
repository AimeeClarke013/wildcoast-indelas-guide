// Built on @lovable.dev/vite-tanstack-config, which bundles the TanStack Start,
// React, Tailwind and path-alias plugins. Do not add those again here.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Static output for GitHub Pages: every route is pre-rendered to plain HTML.
  nitro: false,
  vite: { preview: { host: "127.0.0.1" } },
  tanstackStart: {
    server: { entry: "server" },
    prerender: { enabled: true, crawlLinks: true },
  },
});
