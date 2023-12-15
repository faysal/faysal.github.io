import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://farshed.me',
  compressHTML: true,
  integrations: [mdx(), sitemap(), react()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, {
      target: ['_blank']
    }]],
    shikiConfig: {
      theme: 'dracula',
      langs: ['js', 'rs']
    }
  }
});