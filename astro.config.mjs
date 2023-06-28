import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  site: 'https://farshed.me',
  compressHTML: true,
  integrations: [mdx(), sitemap()],
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, { target: ['_blank'] }]]
  }
});
