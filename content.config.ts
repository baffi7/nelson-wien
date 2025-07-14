import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    page: defineCollection({
      type: 'page',
      source: 'pages/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        preview_image: z.string(),
        preview_alt: z.string(),
      }),
    }),
  },
})
