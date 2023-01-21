import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
// 导入本地搜索插件
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  plugins: [
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
      // 为分类和标签添加索引
      // customFields: [
      //   {
      //     getter: (page) => page.frontmatter.category,
      //     formatter: "分类：$content",
      //   },
      //   {
      //     getter: (page) => page.frontmatter.tag,
      //     formatter: "标签：$content",
      //   },
      // ],
    }),
  ],

  base: "/",

  locales: {
    // "/": {
    //   lang: "en-US",
    //   title: "Docs Demo",
    //   description: "A docs demo for vuepress-theme-hope",
    // },
    "/": {
      lang: "zh-CN",
      title: "旋元佑进阶文法及笔记",
      description: "旋元佑进阶文法及笔记",
    },
  },
  //lang:'zh-CN',
  theme:hopeTheme({
    
  
    hotReload:true,
    displayFooter:true,
    //copyright:'uuuuu',
    //footer:'1',
    pure: true,
    // navbar: ["/zh/guide/README.md", "/zh/config/README.md", "/zh/faq.md"],
    sidebar: {
      "/": "structure",

      "/guid/": "structure",

      // fallback
      // "/": [
      //   "" /* / */,
      //   // "contact" /* /contact.html */,
      //   // "about" /* /about.html */,
      //   "/demo/"
      // ],
    },
  }),

  

  shouldPrefetch: false,
});
