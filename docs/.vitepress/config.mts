import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ims-ui",
  description: "ims-ui docs",
  lastUpdated: true,
  vite: {
    server: {
      port: 5772,
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/examples/index" },
      { text: "Components", link: "/components/index" },
    ],

    sidebar: {
      "/components/": [
        {
          text: "Overview",
          link: "/components/button/index",
        },
        {
          text: "General",
          items: [
            { text: "Button", link: "/components/button/index" },
            { text: "Icon", link: "/components/icon/index" },
          ],
        },
        {
          text: "Layout",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
        {
          text: "Data Entry",
          items: [
            { text: "Input", link: "/components/input/index" },
            { text: "Select", link: "/components/select/index" },
            { text: "RowList", link: "/components/row-list/index" },
          ],
        },
      ],
      "/examples/": [
        {
          text: "Examples",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
        {
          text: "Components",
          items: [
            { text: "Button", link: "/components/button/index" },
            { text: "Input", link: "/components/input/index" },
            { text: "Select", link: "/components/select/index" },
            { text: "Button1", link: "/components/button/index" },
            { text: "Input2", link: "/components/input/index" },
            { text: "Select3", link: "/components/select/index" },
          ],
        },
        {
          text: "Data Entry",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
        {
          text: "Layout",
          items: [
            { text: "Markdown Examples", link: "/markdown-examples" },
            { text: "Runtime API Examples", link: "/api-examples" },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
