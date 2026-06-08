// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
      title: 'TKVSC',
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/TKVSC-Team/totk-vscode' }],
      sidebar: [
          {
              label: 'Guides',
              items: [
                  { label: 'Game Dump Guide', slug: 'guides/game-dump-guide' },
                  { label: 'Setup Guide', slug: 'guides/setup-guide'},
                  { label: 'Simple Attribute Mod Guide', slug: 'guides/simple-attribute-mod'},

              ],
          },
          {
              label: 'Reference',
              items: [{ autogenerate: { directory: 'reference' } }],
          },
      ],
      }), react()],

  vite: {
    plugins: [tailwindcss()],
  },
});