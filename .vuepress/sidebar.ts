import { sidebar } from 'vuepress-theme-hope';

export default sidebar([
	'/',
	{
		text: '▶️ 幻灯片',
		prefix: '/exhibition',
		link: '/exhibition',
	},
	{
		text: '💡 指南',
		prefix: '/guide/',
		link: '/guide/',
		collapsable: true,
		children: 'structure',
	},
	{
		text: '📁 组件',
		prefix: '/posts/',
		collapsable: true,
		children: 'structure',
	},
	{
		text: '🔒 加密文档',
		prefix: '/secret/',
		collapsable: true,
		children: 'structure',
	},
]);
