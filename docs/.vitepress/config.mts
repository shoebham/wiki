import { defineConfig } from 'vitepress'
import { getSidebar } from 'vitepress-plugin-auto-sidebar'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "abc",
  description: "def",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: getSidebar({ contentRoot: '/', contentDirs: ['docs'], collapsible: true, collapsed: true }),
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
   search: {
	      provider: 'local'
	},
	base: '/wiki'
  }
})
