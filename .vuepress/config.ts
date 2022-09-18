import { defineUserConfig } from 'vuepress';
import theme from './theme';
import vuepressPluginDemoblockPlus from 'vuepress-plugin-demoblock-plus';
export default defineUserConfig({
	lang: 'zh-CN',
	title: 'K',
	head: [['link', { rel: 'icon', type: 'svg', href: '/logo.svg' }]],
	description: '记录成长,相信过程...',
	base: '/docs/',
	theme,
	plugins: [[vuepressPluginDemoblockPlus]],
});
