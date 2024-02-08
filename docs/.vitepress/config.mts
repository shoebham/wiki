import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';


// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/wiki/",
  title: "shubham's wiki",
  description: "personal wiki",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],
    sidebar: generateSidebar({
  documentRootPath: 'docs',
  useTitleFromFileHeading: true,
  hyphenToSpace: true,
}),
socialLinks: [
      { icon: 'github', link: 'https://github.com/shoebham' }
    ],
   search: {
	      provider: 'local'
	},

  }
})

