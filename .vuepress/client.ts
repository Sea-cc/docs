import * as Icons from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';
// import './public/iconfont.js';
import { defineClientConfig } from '@vuepress/client';
import vSvg from './components/vSvg.vue';
import dataPage from './components/table/dataPage.vue';
export default defineClientConfig({
	enhance({ app, router, siteData }) {
		app.use(ElementPlus);
		app.component('vSvg', vSvg);
		app.component('dataPage', dataPage);
		// icon
		for (const icon in Icons) {
			// eslint-disable-next-line import/namespace
			app.component('ElIcon' + icon, Icons[icon]);
		}
	},
	setup() {},
	rootComponents: [],
});
