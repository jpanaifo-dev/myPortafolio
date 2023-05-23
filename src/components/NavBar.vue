<script lang="ts" setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<template>
  <nav>
    <div>

      <el-menu 
      :default-active="activeIndex" 
      mode="horizontal" 
      background-color="#171718" 
      active-text-color="#47D16E"
      text-color="#fff" 
      style="font-family: Roboto; font-weight: 600;" 
      :ellipsis="false" 
      @select="handleSelect"
      >

        <el-menu-item index="0" style="font-size: 1.5rem; font-weight: bold; font-family: Poppins;">
          Mi portafolio
        </el-menu-item>

        <div class="flex-grow" />
        <el-menu-item index="0">
          <RouterLink to="/">Inicio</RouterLink>
        </el-menu-item>


        <el-menu-item index="1">
          <RouterLink to="/about">About me</RouterLink>
        </el-menu-item>

        <el-menu-item index="2">
          <RouterLink to="/projects">Projects</RouterLink>
        </el-menu-item>
      </el-menu>
    </div>
  </nav>
</template>
  

  
<style>
.flex-grow {
  flex-grow: 1;
}
</style>
  