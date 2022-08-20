export const categoryMap = {"category":{"/":{"path":"/category/","map":{"幻灯片":{"path":"/category/%E5%B9%BB%E7%81%AF%E7%89%87/","keys":["v-39c3df5e"]},"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-119f7804","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28","v-0a064057","v-5edf520c","v-57b4c6b8","v-41180b34"]},"CategoryA":{"path":"/category/categorya/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-7a368342","v-7881aaa3","v-76ccd204","v-7517f965","v-736320c6","v-71ae4827","v-6ff96f88","v-6e4496e9"]},"CategoryB":{"path":"/category/categoryb/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-7a368342","v-7881aaa3","v-76ccd204","v-7517f965","v-736320c6","v-71ae4827"]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","keys":["v-4c863446","v-0a064057"]},"文章加密":{"path":"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-bf720700","v-5edf520c"]},"Markdown":{"path":"/tag/markdown/","keys":["v-0978b044","v-57b4c6b8"]},"tag A":{"path":"/tag/tag-a/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-7a368342","v-7881aaa3","v-76ccd204","v-7517f965","v-736320c6","v-71ae4827","v-6ff96f88","v-6e4496e9"]},"tag B":{"path":"/tag/tag-b/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-7a368342","v-7881aaa3","v-76ccd204","v-7517f965","v-736320c6","v-71ae4827","v-6ff96f88","v-6e4496e9"]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-119f7804"]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-119f7804"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}
