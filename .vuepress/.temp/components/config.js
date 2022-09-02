import { useScriptTag } from "D:/Material/项目源码/docs/node_modules/vuepress-plugin-components/lib/client/composables";
import { h } from "vue";
import { defineClientConfig } from "@vuepress/client";
import Badge from "D:/Material/项目源码/docs/node_modules/vuepress-plugin-components/lib/client/components/Badge";
import FontIcon from "D:/Material/项目源码/docs/node_modules/vuepress-plugin-components/lib/client/components/FontIcon";
import BackToTop from "D:/Material/项目源码/docs/node_modules/vuepress-plugin-components/lib/client/components/BackToTop";


export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", Badge);
    app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(`//at.alicdn.com/t/c/font_3624762_dxgkw1v19.js`);
    
  },
  rootComponents: [
    () => h(BackToTop, { threshold: 300 }),
    
  ],
});