<script setup lang="ts">
import { ref } from 'vue'
import sjJson from '../assets/js.json'
defineProps<{ msg: string }>()
console.log('调试地图组件的内容',sjJson)
</script>

<template>
   <div>
    调试首页的代码
   </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
