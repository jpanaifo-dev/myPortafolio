<template>
    <div class="landing">
      <div class="overlay" v-show="showOverlay"></div>
      <div class="image-container">
        <img :src="imageUrl"/>
      </div>
    </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: 'src/assets/images/banner.png',
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
  .landing {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
  }
  
  .image-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  img {
    width: 100%;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease-in-out;
  }
  
  </style>
  