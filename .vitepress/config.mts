import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: 'src',

  title: '翻贝',
  description: '英译中技术文档共享',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/gavinliu6/fanbei' },
    ],

    externalLinkIcon: true,

    outline: {
      level: [2, 4],
      label: '本页目录',
    },

    footer: {
      copyright:
        'Copyright © 2024-present <a href="https://gavinliu.me" target="_blank">Gavin Liu</a>',
    },
  },
})
