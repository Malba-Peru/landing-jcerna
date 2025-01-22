import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify/functions";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ],
    build: {
        inlineStylesheets: "always",
    },
    compressHTML: true,
    prefetch: true,
    output: "server",
    adapter: netlify(),
});