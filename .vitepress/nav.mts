import { DefaultTheme } from 'vitepress'

const nav: DefaultTheme.NavItem[] = [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '文档目录',
    activeMatch: '^/(makefiletutorial)/',
    items: [
      {
        text: 'Makefile 教程',
        link: 'https://gavinliu6.github.io/Makefile-Tutorial-zh-CN/',
      },
      {
        text: 'Git 内部结构',
        link: 'https://gavinliu6.github.io/Git-Internals-zh_CN/',
      },
    ],
  },
  {
    text: '单篇译文',
    link: '/articles/',
  },
]

export default nav
