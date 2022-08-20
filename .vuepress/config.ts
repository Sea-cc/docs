import { defineUserConfig } from 'vuepress';
import theme from './theme';
import vuepressPluginDemoblockPlus from 'vuepress-plugin-demoblock-plus';
export default defineUserConfig({
	lang: 'zh-CN',
	title: 'Kiyan-a',
	head: [
		['link', { rel: 'icon', type: 'svg', href: '/logo.svg' }],
	] /* 自定义网站图标 */,
	description: '记录成长,相信过程 🗺️',

	base: '/',

	theme,
	plugins: [[vuepressPluginDemoblockPlus]],
});
