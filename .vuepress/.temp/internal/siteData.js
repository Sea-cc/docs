export const siteData = JSON.parse("{\"base\":\"/docs/\",\"lang\":\"zh-CN\",\"title\":\"K\",\"description\":\"记录成长,相信过程...\",\"head\":[[\"link\",{\"rel\":\"icon\",\"type\":\"svg\",\"href\":\"/logo.svg\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
