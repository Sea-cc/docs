const e=JSON.parse('{"key":"v-c4244c1e","path":"/docs/vue3.html","title":"\u{1F4D6} Vue 3","lang":"zh-CN","frontmatter":{"summary":"\u{1F4D6} Vue 3 \\" setup\u662F\u6240\u6709Composition API\u7684\u5BB9\u5668\uFF0C\u503C\u4E3A\u4E00\u4E2A\u51FD\u6570\u3002\u7EC4\u4EF6\u4E2D\u6240\u7528\u5230\u7684\u6570\u636E\u3001\u65B9\u6CD5\u7B49\u7B49\uFF0C\u5747\u8981\u914D\u7F6E\u5728setup\u4E2D\uFF0C\u5B83\u4F1A\u5728beforeCreate\u4E4B\u524D\u6267\u884C\u4E00\u6B21\uFF0C\u6CE8\u610F\uFF1AV3\u91CCthis\u4E0D\u518D\u662F\u6307\u5411Vue\u5B9E\u4F8B\uFF0C\u8BBF\u95EEthis\u4F1A\u662Fundefined\\" \\"\\" \\" VUE2\u914D\u7F6E\u3010data\u3001methos\u3001computed...\u3011\u4E2D\u53EF\u4EE5\u8BBF\u95EE\u5230setu","head":[["meta",{"property":"og:url","content":"https://kiyan-a.github.io/sev/docs/docs/vue3.html"}],["meta",{"property":"og:site_name","content":"K"}],["meta",{"property":"og:title","content":"\u{1F4D6} Vue 3"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-09-18T12:32:10.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-09-18T12:32:10.000Z"}]]},"excerpt":"","headers":[{"level":3,"title":"setup \u7684\u53C2\u6570","slug":"setup-\u7684\u53C2\u6570","children":[]},{"level":3,"title":"v-bind","slug":"v-bind","children":[]},{"level":3,"title":"Node API \u652F\u6301","slug":"node-api-\u652F\u6301","children":[]},{"level":3,"title":"\u7EC4\u4EF6\u4F20\u53C2","slug":"\u7EC4\u4EF6\u4F20\u53C2","children":[]},{"level":3,"title":"useSlots and useAttrs \u5728 setup \u8BED\u6CD5\u7CD6\u4E2D\u7684\u4F7F\u7528(no \u7F16\u8BD1\u5668\u5B8F)","slug":"useslots-and-useattrs-\u5728-setup-\u8BED\u6CD5\u7CD6\u4E2D\u7684\u4F7F\u7528-no-\u7F16\u8BD1\u5668\u5B8F","children":[]},{"level":3,"title":"defineExpose","slug":"defineexpose","children":[]},{"level":2,"title":"v-for \u4E2D\u7684\u6A21\u677F\u5F15\u7528#","slug":"v-for-\u4E2D\u7684\u6A21\u677F\u5F15\u7528","children":[{"level":3,"title":"toRef","slug":"toref","children":[]},{"level":3,"title":"ref","slug":"ref","children":[]},{"level":3,"title":"reactive","slug":"reactive","children":[]},{"level":3,"title":"await \u7684\u652F\u6301","slug":"await-\u7684\u652F\u6301","children":[]},{"level":3,"title":"Vue-router4.X","slug":"vue-router4-x","children":[]},{"level":3,"title":"watch","slug":"watch","children":[]},{"level":3,"title":"watchEffect \u76D1\u542C\u56DE\u8C03","slug":"watcheffect-\u76D1\u542C\u56DE\u8C03","children":[]}]},{"level":2,"title":"\u505C\u6B62\u4FA6\u542C\u5668","slug":"\u505C\u6B62\u4FA6\u542C\u5668","children":[{"level":3,"title":"isRef","slug":"isref","children":[]},{"level":3,"title":"isReactive","slug":"isreactive","children":[]},{"level":3,"title":"isProxy","slug":"isproxy","children":[]},{"level":3,"title":"hook \u751F\u547D\u5468\u671F\u4E8B\u4EF6","slug":"hook-\u751F\u547D\u5468\u671F\u4E8B\u4EF6","children":[]},{"level":3,"title":"\u4E3A provide / inject \u6807\u6CE8\u7C7B\u578B#","slug":"\u4E3A-provide-inject-\u6807\u6CE8\u7C7B\u578B","children":[]},{"level":3,"title":"\u4E3A\u6A21\u677F\u5F15\u7528\u6807\u6CE8\u7C7B\u578B","slug":"\u4E3A\u6A21\u677F\u5F15\u7528\u6807\u6CE8\u7C7B\u578B","children":[]},{"level":3,"title":"v-if \u548C v-for","slug":"v-if-\u548C-v-for","children":[]},{"level":3,"title":"\u52A8\u6001\u7EC4\u4EF6","slug":"\u52A8\u6001\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u4F9D\u8D56\u6CE8\u5165","slug":"\u4F9D\u8D56\u6CE8\u5165","children":[]}]},{"level":2,"title":"\u7EC4\u5408\u5F0F\u51FD\u6570(hook)","slug":"\u7EC4\u5408\u5F0F\u51FD\u6570-hook","children":[{"level":3,"title":"\u4EC0\u4E48\u662F\u201C\u7EC4\u5408\u5F0F\u51FD\u6570\u201D\uFF1F","slug":"\u4EC0\u4E48\u662F-\u7EC4\u5408\u5F0F\u51FD\u6570","children":[]},{"level":3,"title":"Vue \u4E2D\u91CD\u7528\u4EE3\u7801\u7684\u65B9\u5F0F","slug":"vue-\u4E2D\u91CD\u7528\u4EE3\u7801\u7684\u65B9\u5F0F","children":[]},{"level":3,"title":"\u81EA\u5B9A\u4E49\u6307\u4EE4","slug":"\u81EA\u5B9A\u4E49\u6307\u4EE4","children":[]},{"level":3,"title":"\u63D2\u4EF6 Vue.use","slug":"\u63D2\u4EF6-vue-use","children":[]},{"level":3,"title":"TS \u6269\u5C55\u5168\u5C40\u5C5E\u6027","slug":"ts-\u6269\u5C55\u5168\u5C40\u5C5E\u6027","children":[]},{"level":3,"title":"<Transition> \u7EC4\u4EF6","slug":"transition-\u7EC4\u4EF6","children":[]},{"level":3,"title":"\u7528\u54CD\u5E94\u5F0F API \u505A\u7B80\u5355\u72B6\u6001\u7BA1\u7406","slug":"\u7528\u54CD\u5E94\u5F0F-api-\u505A\u7B80\u5355\u72B6\u6001\u7BA1\u7406","children":[]},{"level":3,"title":"\u6A21\u677F vs. \u6E32\u67D3\u51FD\u6570","slug":"\u6A21\u677F-vs-\u6E32\u67D3\u51FD\u6570","children":[]},{"level":3,"title":"\u53D6\u6D88 .native \u4FEE\u9970\u7B26","slug":"\u53D6\u6D88-native-\u4FEE\u9970\u7B26","children":[]}]}],"git":{"createdTime":1663504330000,"updatedTime":1663504330000,"contributors":[{"name":"\u674E\u96E8\u950B","email":"liyufeng@gz-yibo.com","commits":1}]},"readingTime":{"minutes":33.94,"words":10182},"filePathRelative":"docs/vue3.md","localizedDate":"2022\u5E749\u670818\u65E5"}');export{e as data};
