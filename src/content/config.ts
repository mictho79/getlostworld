import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    cluster: z.enum(['country-comparisons', 'world-geography', 'travel-planning', 'country-deep-dives']),
    countries: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const countries = defineCollection({
  type: 'content',
  schema: z.object({
    name:          z.string(),
    officialName:  z.string().optional(),
    type: z.enum([
      'standard',
      'island-archipelago',
      'microstate',
      'landlocked',
      'superpower',
      'postcolonial-emerging',
      'conflict-zone',
    ]).default('standard'),
    region:        z.string(),
    subregion:     z.string().optional(),
    capital:       z.string().optional(),
    population:    z.string().optional(),
    populationYear: z.number().optional(),
    area:          z.number().optional(),
    languages:     z.array(z.string()).default([]),
    currency:      z.string().optional(),
    flagEmoji:     z.string().optional(),
    timezone:      z.string().optional(),
    callingCode:   z.string().optional(),
    drivesOn:      z.enum(['left', 'right']).optional(),
    hero: z.object({
      src:       z.string(),
      credit:    z.string().optional(),
      creditUrl: z.string().optional(),
      alt:       z.string(),
      caption:   z.string().optional(),
    }).optional(),
    author:      z.string().default('mike'),
    pubDate:     z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    noindex:     z.boolean().default(false),
    sources: z.array(z.object({
      label: z.string(),
      url:   z.string().url(),
    })).default([]),
  }),
});

export const collections = { blog, countries };
