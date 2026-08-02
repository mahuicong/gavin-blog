import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  base: '/gavin-blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    //配置目录显示级为2至4
    outline:[2,4],
    logo:"/logo.svg",
    nav: [
      { text: 'Home', items:[
        {text:"首页",link: '/'},
        {text:"markdonw 示例",link: '/markdonw-examples'}
      ]},
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    //配置底部
    footer:{
      copyright:"Copyright@ 2026 Gavin Ma",
    },
    
    //设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonArialLabel: "搜索文档"
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换"
            }
          }
        }
      }
    }
  }
})
