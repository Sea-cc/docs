import { navbar } from 'vuepress-theme-hope';
export default navbar([
	{ text: '🎉文档', link: '/docs/about' },
	{
		text: '🪂组件',
		prefix: '/components/',
		children: [
			{ text: '文章 1', icon: 'edit', link: 'article1' },
			{ text: '文章 2', icon: 'edit', link: 'article2' },
		],
	},
	{ text: '🪵更新日志', link: '/log/README.md' },
]);
