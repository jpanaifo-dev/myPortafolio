<script setup>
import NavBar from '../components/NavBar.vue';
import Landing from '../components/LandingPage.vue';
import Aboutme from '../components/SectionAboutme.vue';
import Gret from '../components/SectionGret.vue';

</script>

<template>
    <div class="common-layout" >
      <el-container
      style="font-family: Roboto; font-weight: 600;"
      >
        <el-header
        height="auto"
        >
          <NavBar/> 
          <Landing/>        
        </el-header>

        <el-main class="body">
        <Aboutme/>
        <Gret/> 
        </el-main>

        <el-footer>
          <h1>Aquí va el footer</h1>
        </el-footer>
      </el-container>
    </div>
</template>

<style>
.common-layout{
    position: absolute;
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
    background-color: #171718;
    color: white;
}

.el-container{
    margin: 0;
}



.body{
/* width: 100%;
min-width: 320px;
min-height: 100vh; */
}
</style>
