<template>
    <el-pagination
        v-bind="$attrs"
        :page-sizes="[10, 25, 50, 100, 200]"
        background
        small
        layout="total, sizes, prev, pager, next, jumper"
    />
</template>

<script lang="ts" setup>
import { reactive, ref, defineProps, defineEmits, computed, watch, provide } from 'vue'
</script>
<style lang="scss" scoped>
.el-pagination {
    margin-top: 12px;
    float: right;
}
</style>
