<script setup>

import cardSkill from '../components/CardSkill.vue'
</script>

<template>
  <el-row :gutter="20">
    <el-col :span="16" :offset="4">
        <h1>Projects</h1>
        <div class="skill-container">
            <cardSkill
            title="Photoshop"
            description="Uso photoshop desde tiempos memoriales, mis conocimientos son profundos."
            />

            <cardSkill
            title="Figma"
            description="Manejo a la perdección Figma, es una de mis herramientas de diseño preferidas."
            />

            <cardSkill
            title="Adobe XD"
            description="Está bien para maquetar el boceto, luego nos pasaos a figma ¿Si?"
            />
            
        </div>
        <div class="skill-container">
            <cardSkill
            title="Photoshop"
            description="Uso photoshop desde tiempos memoriales, mis conocimientos son profundos."
            />

            <cardSkill
            title="Figma"
            description="Manejo a la perdección Figma, es una de mis herramientas de diseño preferidas."
            />

            <cardSkill
            title="Adobe XD"
            description="Está bien para maquetar el boceto, luego nos pasaos a figma ¿Si?"
            />
            
        </div>
        
        <div class="button-container">
            <el-button 
            
            link>
                Ver más
                <el-icon  class="el-icon--right"><ArrowRight /></el-icon>
            </el-button>
        </div>
    </el-col>
  </el-row>

</template>