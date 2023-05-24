<script setup>
import {RouterView} from 'vue-router';
import NavBar from '../components/NavBar.vue';
import FooterView from '../components/FooterView.vue';


</script>

<template>
    <div class="common-layout" >
      <el-container
      style="font-family: Roboto; font-weight: 600;"
      >
        <!-- <el-header  style="background-color: #171718; padding: 0px; height: 0px; "
        > -->
        <el-header style="background-color: #171718; padding: 0px; height: 60px;" >
          <NavBar/>
          <!-- <Landing/> -->
        </el-header>

        
        <el-main>
          <RouterView/>
        </el-main>

        <el-footer>
          <FooterView/>
        </el-footer>
      </el-container>
    </div>
</template>

<style>

.common-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  min-width: 100vh;
  background-color: #171718;
  color: #fff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
