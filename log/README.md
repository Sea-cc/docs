---
sidebar: false
toc: false
---

# ð æ´æ°æ¥å¿

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
    title:'ææ¡£åå§åå®æ,åå¸çæ¬V1.0.0',
    content:[
      'ð æ°çä¸­å½é£ Logo',
      'ð æ°çç½ç«ä¸»é¢è²ä¿®æ¹éç½®,è¯¦æè®¾ç½®æ¥çå³ä¸è§éè²æ¿',
      'ð æ°çææ¡£ãJS ç²¾åº¦é®é¢ã',
      'ð ä¿®å¤ææ¡£å¼å¥ Vue èªå®ä¹ç»ä»¶ä¸æ­£ç¡®çBug',
      'ð ï¸ ä¿®æ¹ææ¡£æ æç Github å°å',
      'ð ï¸ ä¼åé¡µé¢è¿æ¸¡ææ',
      'ð¡ æªæ¥åå¸åºäºã Vue3 + typescript + Webpack + Express + MongoDBãå¼åå±ç¤ºææ¡£'
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
