import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "学习算法",
  titleTemplate: '算法学习',
  base: '/vitepress_docs/',
  description: "学习python数据结构与算法分析的笔记",
  lastUpdated: true,

  head: [['link', { rel: 'icon', href: '/vitepress/logo.png' }]],
  //srcDir: './pythonote'
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "算法笔记",//站点标题
    logo: "/ass.svg",//站点logo
    nav: [
      //{ text: '主页', link: '/' },
      { text: '案例', link: '/markdown-examples' },
      { text: '笔记', link: '/pythonote/index' },
      {
        text: '1.0',
        items: [
          {
            text: '更新日志',
            link: '/changelog.md'
          },
          {
            text: '贡献',
            link: 'https://github.com/vuejs/vitepress/blob/main/.github/contributing.md'
          }
        ]
      }
    ],
    sidebar:
    {
      "/pythonote/": {
        base: 'pythonote', items: sidebar_introduction(),
      },

    },

    outlineTitle: '本页目录',
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    darkModeSwitchLabel: '外观',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },

    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present Evan You'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  }
}
)


function sidebar_introduction() {
  return [
    {
      text: '算法和数据',
      collapsed: false,
      items: [
        { text: '导论', link: '/introduction' },
        { text: '算法分析', link: '/algorithm/index' },
      ]
    },

  ]
}
