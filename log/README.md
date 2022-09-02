---
sidebar: false
toc: false
---

# 🌞 更新日志

<div class="block">
  <el-timeline>
    <el-timeline-item v-for="(item,index) in logs" :key="index" :timestamp="item.time" placement="top">
      <el-card>
        <h4>{{item.title}}</h4>
        <p v-for="(text,index) in item.content" :key="index">{{text}}</p>
      </el-card>
    </el-timeline-item>
    </el-timeline>
</div>

<script setup>
import {  ref } from 'vue'
const logs = ref([
  {
    time:'2022-09-01',
    title:'文档初始化完成,发布版本V1.0.0',
    content:[
      '🆕 新的中国风 Logo',
      '🆕 新的网站主题色修改配置,详情设置查看右上角配色板',
      '🆕 新的文档《JS 精度问题》',
      '🐞 修复文档引入 Vue 自定义组件不正确的Bug',
      '🛠️ 修改文档无效的 Github 地址',
      '🛠️ 优化页面过渡效果',
      '💡 未来发布基于《 Vue3 + typescript + Webpack + Express + MongoDB》开发展示文档'
    ]
  }
])
</script>

<style scoped lang="scss">
.el-card__body{
  p{
    font-size:15px;
  }
  h4{
  margin-bottom:10px;
  font-weight:600;
}
}
</style>
