<template>
    <el-carousel :interval="4000" type="card" height="360px" class="carousel" >
      <el-carousel-item v-for="item in 6" :key="item" :style="{borderRadius: '16px'}">
        <img class="carousel-image" src="../assets/images/banner.jpg" alt="image-project.jpg" srcset="">
      </el-carousel-item>
    </el-carousel>
  </template>
  
  <style scoped>
  .carousel{
    width: 140vh;
  }

  .carousel-image{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
    text-align: center;    
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>
  