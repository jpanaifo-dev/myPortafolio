<template>
    <div class="card-skill">
      <div class="svg-section">
        <!-- Aquí puedes agregar tu SVG -->
        <img class="logo" src="../assets/vue.svg" alt="icono" />

      </div>
      <h3 class="title">{{title}}</h3>
      <p class="description">
        {{description}}
      </p>
    </div>
  </template>
  
  <script setup>

    defineProps({

        logo:{
            type: String,
            default: "'../assets/vue.svg'"
        },

        title: {
            type: String,
            default: 'Sin título'
        },

        description: {
            type: String,
            default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquamvoluptatum, quibusdam.'
        },

        // body: {
        //     type: String,
        //     default: 'Sin descripción'
        // },
    });

  </script>
  
  <style scoped>
  .card-skill {
    display: inline-block;
    width: 300px;
    height: 280px;
    border: 1px solid #ccc;
    border-radius: 16px;
    padding: 16px;
    align-items: center;
    text-align: center;
    transition: 1s;
  }

  .card-skill:hover {
  transform: scale(1.05); /* Aplica un aumento de escala al hacer hover */
  }
  
  .svg-section {
    /* Estilos para la sección del SVG */
    margin-bottom: 16px;
    color: #47D16E;
  }
  
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #47D16E;
  }
  
  .description {
    font-size: 14px;
    color: #888;
  }

  .logo{
    width: 120px;
    height: 120px;
  }
  </style>
  