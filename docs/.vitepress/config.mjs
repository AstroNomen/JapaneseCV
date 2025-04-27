import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Japanese CV",
  description: "日本声优一览表",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/'},
      {
        text: '年代',
        items: [
          { text: '1900-1930', link: '/1900-1930' },
          { text: '1930 世代', link: '/1930' },
          { text: '1940 世代', link: '/1940' },
          { text: '1950 世代', link: '/1950' },
          { text: '1960 世代', link: '/1960' },
          { text: '1970 世代', link: '/1970' },
          { text: '1980 世代', link: '/1980' },
          { text: '1990 世代', link: '/1990' },
          { text: '2000 世代', link: '/2000' },
          { text: '2010 世代', link: '/2010' },
        ]
      },
      {
        text: '信息不详',
        items: [
          { text: '年份未知', link: '/Year Unknown' },
          { text: '信息未知', link: '/Unknown' }
        ]
      },
      { text: '关于', link: '/about'},
    ],

    sidebar: [
      {
        text: '年代',
        items: [
          { text: '1900-1930', link: '/1900-1930' },
          { text: '1930 世代', link: '/1930' },
          { text: '1940 世代', link: '/1940' },
          { text: '1950 世代', link: '/1950' },
          { text: '1960 世代', link: '/1960' },
          { text: '1970 世代', link: '/1970' },
          { text: '1980 世代', link: '/1980' },
          { text: '1990 世代', link: '/1990' },
          { text: '2000 世代', link: '/2000' },
          { text: '2010 世代', link: '/2010' }
        ]
      },
      {
        text: '信息不详',
        items: [
          { text: '年份未知', link: '/Year Unknown' },
          { text: '信息未知', link: '/Unknown' }
        ]
      },
      { text: '关于',
        items: [{text: '关于', link: '/about'}]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AstroNomen/JapaneseCV' }
    ],
    
    footer: {
        copyright: "Content licensed under CC BY-NC-SA 4.0 | Copyright © 2024 Sakura & Aki",
        message: "Proudly Powered by VitePress"
      },
      search: {
        provider: 'local'
      }
  }
})
