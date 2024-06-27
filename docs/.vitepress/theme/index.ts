import BlogTheme from '@sugarat/theme'

// 自定义样式重载
import './style.scss'

// 自定义主题色
// import './user-theme.css'

// export default BlogTheme

import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import HeroBefore from "../components/HomeBefore.vue";
import Footer from "../components/Footer.vue";

export default {
  extends: BlogTheme,
  Layout: () => {
    return h(BlogTheme.Layout, null, {
      "home-hero-before": () => h(HeroBefore),
      // "layout-bottom": () => h(Footer),
      // "layout-top": () => h(MyLayout),
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;
