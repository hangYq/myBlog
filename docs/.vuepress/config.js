const path = require("path");
const filehelper = require("../../util/getFilenames");

const sidebars = filehelper.getSidebar();

module.exports = {
    base: "/myBlog/",
    title: "my blog",
    description: "",
    head: [
        // 注入到当前页面的 HTML <head> 中的标签
        ["link", { rel: "icon", href: "/logo.jpg" }] // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: "/", // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        repo: "https://github.com/yuhang04210/myBlog",
        nav: [
            // 导航栏配置
            // { text: "前端基础", link: "/accumulate/" },
            // { text: "算法题库", link: "/algorithm/" },
            // { text: "微博", link: "https://baidu.com" }
        ],
        sidebar: sidebars
        // sidebarDepth: 6 // 侧边栏显示2级
    }
};
