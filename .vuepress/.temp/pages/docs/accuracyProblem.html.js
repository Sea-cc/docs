export const data = JSON.parse("{\"key\":\"v-32ee03ae\",\"path\":\"/docs/accuracyProblem.html\",\"title\":\"JS 精度问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"JS 精度问题 前言： 在和后端接口联调时发现一个细节又很基础的问题：后端返回一个树的id 3068734572459725762，而我在前台接收为 3068734572459726000😅【很奇怪】 按道理说这ID是自动生成的也不可能会改吧，在我百思不得其解时，我的启蒙让我在浏览器控制台输出看一下。三七二十一、0.1+0.2 != 0.3 : 于是我在 \",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://kiyan-a.github.io/sev/docs/accuracyProblem.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Ki\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"JS 精度问题\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":3,\"title\":\"解决方案\",\"slug\":\"解决方案\",\"children\":[]}],\"readingTime\":{\"minutes\":2.1,\"words\":629},\"filePathRelative\":\"docs/accuracyProblem.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
