export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-119f7804","v-2fe2e5c6","v-334c9704","v-39c3df5e","v-3b1675a7","v-32ee03ae","v-c3080642","v-a5369728","v-365d88e8","v-c6d4a9a2","v-744993e4","v-0a064057","v-5edf520c","v-57b4c6b8","v-41180b34"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-119f7804","v-0a064057","v-5edf520c","v-57b4c6b8","v-41180b34"]}},"slide":{"/":{"path":"/slide/","keys":["v-39c3df5e"]}},"star":{"/":{"path":"/star/","keys":["v-119f7804","v-2fe2e5c6"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-2fe2e5c6","v-334c9704","v-119f7804"]}}}

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
