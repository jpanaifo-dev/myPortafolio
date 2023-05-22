<template>
    <el-row class="section">
        <el-col class="left-col" :span="12">
            <img class="centered-image" :src="imageUrl" />
        </el-col>

        <el-col :span="12">
        <div class="centered-text">
            <h1 class="title">Soy Mi nombre</h1>
            <p class="description">
                Soy Diseñador UI, actualmente vivo en Bogotá, Colombia.
                Me agrada la idea de trabajar en equipo, pienso que es una manera de conectar con nuevas habilidades y de brindar mi conocimiento al equipo con el fin de mejorar la productividad en el desarrollo de algun producto digital. Me gusta descubrir cosas nuevas a diario y ser un activo valioso en cualquier equipo en el que me desarrolle, por lo que estoy aprendiendo constantemente e investigando acerca de las nuevas tendencias.
                Trato de buscar todo el Feedback posible en los proyectos, con el fin de mejorar y poder hacer diseños que no solo sean atractivos esteticamente sino que sean accesibles y funcionales por lo que me gusta trabajar muy de la mano con los stakeholders.
                Hablemos!
            </p>
            <div class="social-media-icons">
                <!-- iconos de las redes sociales -->
            </div>
        </div>
        </el-col>
    </el-row>
  </template>

<script>
export default {
  data() {
    return {
      imageUrl: 'src/assets/images/image1.jpg',
      showOverlay: false,
    };
  },
  methods: {
    changeImage() {
      // Lógica para cambiar la imagen
      // Puedes implementar una función que actualice la propiedad 'imageUrl' con una nueva URL de imagen
    }
  }
};
</script>
  

  <style>
  .section{
    padding: 64px 142px 128px;

  }

  .centered-image {
    display: block;
    margin: 0 auto;
    max-width: 100%;
    max-height: 100%;
    width: 448px;
    height: 547px;
    top: 64px;
    left: 142px;
    border-radius: 8px;
  }

  .centered-text
  {
    width: 560px;
    height: 547px;
  }
  
  .title {
    font-family: 'DM Sans', sans-serif;
    font-size: 60px;
    font-weight: bold;
  }
  
  .description {
    font-family: 'DM Sans', sans-serif;
    font-size: 16px;
  }
  
  .social-media-icons {
    /* Estilos para los logos de las redes sociales */
  }
  </style>