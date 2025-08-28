import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogs = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/pages/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        tags: z.string().array(),
    }),
});

export const collections = { blogs };
