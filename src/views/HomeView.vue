<script>
import { Delete, Edit, Search, Share, DocumentRemove } from '@element-plus/icons-vue'

import cardSkill from '../components/CardSkill.vue'
import CardProject from '../components/CardProject.vue';

import IconFacebook from '../components/icons/IconFacebook.vue';
import IconGit from '../components/icons/IconGit.vue';
import IconLinkedin from '../components/icons/IconLinkedin.vue';

</script>

<template>

  <el-row :gutter="20">
    <el-col :span="16" :offset="4"
    >
    
   <div class="portfolio-container">
    <div class="portfolio-section">
      <div class="left-column">
        <div class="profile-picture">
          <img src="../assets/images/profile.jpg" alt="Mi foto">
        </div>
        <div class="greeting">
            <h2 style="display: inline;">Hola, </h2><h2 style="display: inline; color: #47D16E;" > soy Jeff</h2>
        </div>
        <div class="social-icons">
              <i><IconFacebook/></i>
              <i><IconLinkedin/></i>
              <i><IconGit/></i>
        </div>

      </div>
      <div class="right-column">
        <h3 style="font-size: 32px;">Bienvenido a mi portafolio :)</h3>
        <p>Este es mi portafolio y CV hecho en Figma, acá puedes 
            ver mi estilo de prototipado a la hora de diseñar interfaces.
           ¡Espero te guste!</p>

        <div class="download-buttons" >
            <el-button
            type="success"
            size="large"
            style="font-weight: 600;"
            background-color="#47D16E"
            >  
            Ver proyectos  <el-icon  class="el-icon--right"><FolderOpened /></el-icon>
            </el-button>

            <el-button
            type="success"
            size="large"
            style="font-weight: 600; border: 2px solid #47D16E;"  

            plain>
                Descargar CV
                <el-icon  class="el-icon--right"><Download />
                </el-icon>
            </el-button>

        </div>

      </div>
    </div>
    </div>
    </el-col>

    <el-col :span="20" :offset="3">
        <div class="skill-container">
          <h1>Skills</h1>
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
          <h1>Projects</h1>

            <cardSkill 
            title="Pothoshop"
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

        <div class="skill-container">
          <h1>More projects</h1>
            <cardSkill 
            title="Pothoshop"
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
    </el-col>

  </el-row>

</template>

<style>
@media screen and (max-width: 380px) {
  .portfolio-section {
    flex-direction: column;
  }

  .left-column,
  .right-column {
    margin-right: 0;
  }
}


.portfolio-container {
  display: flex;
  justify-content: center;
}

.portfolio-section {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px;
}

.left-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 64px;
}

/* Imagen de perfil */
.profile-picture {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 8px;
}

.profile-picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.greeting {
  margin-bottom: 8px;
  font-size: 24px;

}

.social-icons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;
}

.right-column {
  flex-grow: 1;
  text-align: center;
}

.download-buttons {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}

.btn {
  margin-right: 16px;
}

/* modify */
.skill-container {
  display: inline-block;
  margin: 24px;
}

.card-skill {
  width: 354px;
  height: 308px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin-right: 24px; /* Agregamos la separación entre los componentes */
}

.card-skill:last-child {
  margin-right: 0; /* Quitamos la separación en el último componente */
}

.button-container {
  display: flex;
  justify-content: center;
  margin: 24px;
}

</style>