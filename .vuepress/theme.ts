import { hopeTheme } from 'vuepress-theme-hope';
import navbar from './navbar';
import sidebar from './sidebar';

export default hopeTheme({
	hostname: 'https://kiyan-a.github.io/sev/',
	themeColor: {
		green: '#67c23a',
		red: '#f26d6d',
		red_: '#dd1370',
		yellow: '#e3eca8',
		orange: '#fb9b5f',
		orange_: '#ff897d',
	} /* 主题色 */,
	toc: true /* 根据需要可在页面配置 */,
	fullscreen: true /* 全屏 */,
	copyright: false /* 页面页脚(不是主页) */,
	editLink: false /* 是否底部显示编辑此页功能 */,
	author: {
		name: '📦',
		url: 'https://github.com/Kiyan-a',
	},
	navbarLayout: {
		/* 顶部导航栏布局 */ left: ['Brand'],
		center: ['Search'],
		right: ['Links', 'Language', 'Outlook', 'Repo'],
	},
	iconAssets: '//at.alicdn.com/t/c/font_3624762_dxgkw1v19.js',

	logo: '/logo.svg',

	repo: 'https://github.com/Kiyan-a',

	docsDir: 'https://kiyan-a.github.io/sev/',

	/* 顶部导航栏 */
	navbar: navbar,

	/* 侧边栏 */
	sidebar: sidebar,
	// 配置侧边栏自动生成
	// sidebar: {
	// 	'/docs/': 'structure',
	// 	'/components/': 'structure',
	// },

	// footer: '默认页脚',

	displayFooter: false,

	pageInfo: false,

	encrypt: {
		config: {
			'/secret': ['web-docs'],
		},
	} /* 加密功能 */,

	plugins: {
		blog: {
			autoExcerpt: true,
		},

		mdEnhance: {
			enableAll: true,
			presentation: {
				plugins: ['highlight', 'math', 'search', 'notes', 'zoom'],
			},
		},
	},
});
