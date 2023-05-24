<script setup>

import cardSkill from '../components/CardSkill.vue'
import carousel from '../components/CarouselView.vue'
</script>

<template>
    <el-col :span="20" :offset="4">
        <h1>Skills</h1>
        <el-space wrap>
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
        </el-space>
        <h1>Projects</h1>
        <carousel/>

        <h3>More projects</h3>
        <el-space wrap>
            <div
            v-for="i in 9" :key="i"
            >
                 <cardProject/>
            </div>
        </el-space>
    </el-col>




</template>
<style>

</style>