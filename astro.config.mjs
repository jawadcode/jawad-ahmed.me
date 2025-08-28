// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";

import remarkMath from "remark-math";
import remarkDirective from "remark-directive";
// @ts-ignore
import remarkCalloutDirectives from "@microflash/remark-callout-directives";
import remarkToc from "remark-toc";

// https://astro.build/config
export default defineConfig({
    // site: "https://jawad-ahmed.me",
    // base: "/",
    markdown: {
        // @ts-ignore
        remarkPlugins: [
            remarkToc,
            remarkMath,
            remarkDirective,
            remarkCalloutDirectives,
        ],
        rehypePlugins: [
            [rehypeKatex, {}],
            rehypeSlug,
            [
                rehypeAutolinkHeadings,
                { behavior: "append", content: { type: "text", value: "🔗" } },
            ],
        ],
        shikiConfig: {
            themes: {
                light: "light-plus",
                dark: "dark-plus",
            },
            wrap: true,
        },
    },
    integrations: [sitemap()],
});
