import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Daily Updates",
  description: "Daily Updates that are hour by hour!",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '12 Week Years',
        items: [
          { text: 'March 2025 (12 JAN - 18 JAN)', link: '/2025/march'},
          { text: 'February 2025 (05 JAN - 11 JAN)', link: '/2025/feb'},
          { text: 'January 2025 (29 DEC - 4 JAN)', link: '/2025/jan' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
