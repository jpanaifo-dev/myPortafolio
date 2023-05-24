<template>
    <el-row>
      <el-col
        :span="6"
      >
        <el-card 
        :body-style="{ padding: '0px' }"
        :style="{borderRadius: '16px'}"
        >
          <div class="container-image">
            <img
            src="../assets/images/projects-default.png"
            class="image"
            />
          </div>
          
          <div class="bottom" style="margin: 0px">
              <span>{{title}}</span>
               <el-button
                 color="#000000"
                 :style="{color: '#000'}"
                 size="medium"
                 circle>
                <el-icon  class="el-icon--right" 
                color="#fff" 
                size="large"
                ><ArrowRight />
                </el-icon>
            </el-button>
            </div>
        </el-card>

      </el-col>
    </el-row>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'

  defineProps({
    logo:{

    },
    title:{
        type: String,
        default: 'Name projects'
    }

  })
  </script>
  
  <style>
  .el-card{
  width: 330px;
  display: inline-block;
  position: relative;
  }

  .container-image {
  overflow: hidden; /* Oculta el contenido que excede el tamaño del contenedor */
  }

  .container-image img {
  transition: transform 0.3s ease; /* Agrega una transición suave al hacer el zoom */
  }
  .container-image:hover img{
    transform: scale(1.2); /* Aplica un aumento de escala al hacer hover */
  }


  .bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 16px;
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.7);
    
    display: flex;
    width: 91%;
    align-items: center;
    justify-content: space-between;
  }
  
  .button {
    padding: 0;
    margin: auto;
    min-height: auto;
  }
  
  .image {
    width: 100%;
    height: auto;
    display: block;
  }


  </style>
  