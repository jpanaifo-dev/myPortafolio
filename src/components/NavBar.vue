<template>
    <el-menu
      :default-active="activeIndex"
      background-color="#171718"
      active-text-color="#47D16E"
      text-color="#fff"
      mode="horizontal"
      style="font-family: Roboto; font-weight: 600;"
      :ellipsis="false"
      class="flex-grow"
      @select="handleSelect"
    >
      <el-menu-item index="0"      
      style="font-size: 1.5rem; font-weight: bold; font-family: Poppins;"
      >
      Mi portafolio
      </el-menu-item>
      
      <div class="flex-grow" />
      <el-menu-item index="0">Home</el-menu-item>
      <el-menu-item index="1">About me</el-menu-item>
      <el-menu-item index="2">Projects</el-menu-item>
    </el-menu>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  const activeIndex = ref('0')
  const handleSelect = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .flex-grow {
    position: absolute;
    flex-grow: 1;
  }
  </style>
  