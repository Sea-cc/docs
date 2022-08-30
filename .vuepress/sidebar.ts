import { sidebar } from 'vuepress-theme-hope';

export default sidebar([
	{
		text: '🎉文档',
		prefix: '/docs/',
		link: '/docs/',
		collapsable: true,
		children: 'structure',
	},
	{
		text: '🪂组件',
		prefix: '/components/',
		collapsable: true,
		children: 'structure',
	},
	{
		text: '幻灯片',
		prefix: '/exhibition',
		link: '/exhibition',
	},
]);
