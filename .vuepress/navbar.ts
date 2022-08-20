import { navbar } from 'vuepress-theme-hope';

export default navbar([
	'/',
	{ text: '💡 指南', link: '/guide/' },
	{
		text: '📁 组件',
		prefix: '/posts/',
		children: [
			{ text: '文章 1', icon: 'edit', link: 'article1' },
			{ text: '文章 2', icon: 'edit', link: 'article2' },
			'article3',
			'article4',
		],
	},
	/* {
		text: '博客',
		icon: 'view',
		link: 'https://kiyan-a.github.io/sev',
	}, */
]);
