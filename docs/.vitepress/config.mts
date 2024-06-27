import { defineConfig } from "vitepress";

// 导入主题的配置
import { blogTheme } from "./blog-theme";

// 导入导航栏
import toNav from "./toNav/index";

// 修改默认的Foot版权信息
// import { fileURLToPath, URL } from "node:url";

// 如果使用 GitHub/Gitee Pages 等公共平台部署
// 通常需要修改 base 路径，通常为“/仓库名/”
const base = '/luoyangblog/'
// 如果项目名已经为 name.github.io 域名，则不需要修改！
// const base = process.env.GITHUB_ACTIONS === 'true'
//   ? '/vitepress-blog-sugar-template/'
//   : '/'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  // 继承博客主题(@sugarat/theme)
  extends: blogTheme,
  base,
  lang: "zh-cn",
  title: "luoyang",
  description: "luoyangblog，基于 vitepress 实现",
  lastUpdated: true,
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    // 配置网站的图标（显示在浏览器的 tab 上）
    // ['link', { rel: 'icon', href: `${base}favicon.ico` }], // 修改了 base 这里也需要同步修改
    ["link", { rel: "icon", href: "/luoyangblog/favicon.ico" }],
  ],
  // 修改默认的Foot版权信息VPFooter
  // vite: {
  //   resolve: {
  //     alias: [
  //       {
  //         find: /^.*\/VPFooter\.vue$/,
  //         replacement: fileURLToPath(
  //           new URL("./components/Footer.vue", import.meta.url)
  //         ),
  //       },
  //     ],
  //   },
  // },
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: "目录",
    },
    // 默认文案修改
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "相关文章",
    lastUpdatedText: "上次更新于",

    // 设置logo
    logo: "/logo.png",
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
    nav: toNav,
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/vuejs/vitepress",
      },
    ],
    footer: {
      message: 'Released under the <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">MIT License</a>.',
      copyright: `Copyright © 2019-${new Date().getFullYear()} <a href="https://github.com/luoyang88" target="_blank">Luo Yang</a>`
    }
  },
});
