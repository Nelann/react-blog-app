import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";

// for more information on configuration, visit:
// https://www.content-collections.dev/docs/configuration

const posts = defineCollection({
  name: "posts",
  directory: "content/posts",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    cover: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    slug: z.string().optional(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document);
    const slug = document.slug ?? document._meta.path;
    return {
      ...document,
      mdx,
      slug,
    };
  },
});

export default defineConfig({
  collections: [posts],
});
