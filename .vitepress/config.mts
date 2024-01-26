import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mts'
import process from 'node:process'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    [
      'script',
      {},
      process.env.NODE_ENV === 'production'
        ? `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?553d8ebeeacbc45ac892d53a0bc35716";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();`
        : '',
    ],
  ],

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
