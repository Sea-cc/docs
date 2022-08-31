import * as Icons from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

import { defineClientConfig } from '@vuepress/client';

export default defineClientConfig({
	enhance({ app, router, siteData }) {
		app.use(ElementPlus);
		// icon
		for (const icon in Icons) {
			// eslint-disable-next-line import/namespace
			app.component('ElIcon' + icon, Icons[icon]);
		}
	},
	setup() {},
	rootComponents: [],
});
