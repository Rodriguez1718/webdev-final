import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const templates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/templates' }),
  schema: z.object({
    title: z.string(),
    trade: z.enum(['Plumbing', 'HVAC', 'Electrical', 'General Contracting']),
    description: z.string(),
    thumbnail: z.string().optional(),
    liveDemoUrl: z.string().url().optional(),
    mainSiteUrl: z.string().url().optional(),
    category: z.enum(['Landing Page', 'Service Page', 'Portfolio', 'About Page', 'Contact Page']),
  }),
});

export const collections = {
  templates,
};