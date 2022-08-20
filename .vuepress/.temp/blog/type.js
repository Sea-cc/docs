export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-119f7804","v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-7a368342","v-7881aaa3","v-76ccd204","v-7517f965","v-736320c6","v-71ae4827","v-6ff96f88","v-6e4496e9","v-39c3df5e","v-4c863446","v-bf720700","v-ead46506","v-0978b044","v-fffb8e28","v-0a064057","v-5edf520c","v-57b4c6b8","v-41180b34"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-119f7804","v-0a064057","v-5edf520c","v-57b4c6b8","v-41180b34"]}},"slide":{"/":{"path":"/slide/","keys":["v-39c3df5e"]}},"star":{"/":{"path":"/star/","keys":["v-119f7804","v-5deafbd7","v-76ccd204","v-6ff96f88"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-5deafbd7","v-5c362338","v-5a814a99","v-7beb5be1","v-7a368342","v-7881aaa3","v-76ccd204","v-7517f965","v-736320c6","v-71ae4827","v-6ff96f88","v-6e4496e9","v-119f7804"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
