import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      type: 'page',
      source: '*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
      }),
    }),
    work: defineCollection({
      type: 'page',
      source: 'work/*.md',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        color: z.string(),
        preview_image: z.string(),
        preview_alt: z.string(),
        heading: z.string(),
        text: z.string(),
        date: z.string(),
      }),
    }),
  },
})
