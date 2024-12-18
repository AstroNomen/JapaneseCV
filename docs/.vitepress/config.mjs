import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Japanese CV",
  description: "日本声优一览表",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '年代', link: '/1900-1930' },
      { text: '信息不详', link: '/Year Unknown' }
    ],

    sidebar: [
      {
        text: '年代',
        items: [
          { text: '1900-1930', link: '/1900-1930' },
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
      {
        text: 'Example',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AstroNomen/JapaneseCV' }
    ]
  }
})
