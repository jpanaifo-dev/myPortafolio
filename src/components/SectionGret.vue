<template>
    <div class="centered">
        <el-row class="container">
                <el-col :offset="0" :justify="center" class="centered">
                    <div class="container">
                        <div style="" class="title-font">
                            Soy <h1 class="text-font-secondary">Nombre</h1> estudiante
                        </div>

                        <div class="description-font">
                        <p> Este es mi portafolio y CV hecho en Figma, acá puedes ver mi estilo de prototipado a la hora de diseñar interfaces.
                            ¡Espero te guste!
                        </p>
                        </div>
                    </div>
                    <div>
                        <div class="flex">
                            <el-button 
                            style="font-family: Roboto; font-weight: 600;"
                            size="large"
                            type="success"
                            >
                            Ver portafolio
                            </el-button>

                            <el-button 
                            style="font-family: Roboto; font-weight: 600"
                            color= "#47D16E"
                            size="large"
                            plain>
                            Descargar CV
                            </el-button>
                        </div>
                    </div>
                </el-col>
        </el-row>
    </div>
</template>

<script setup>

</script>

<style>


.container {
    flex-direction: column; 
    justify-content: center;
    width: 544px;
    height: 409px;

}

.centered{
    text-align: center;
    padding: 0px 0px;
}


.title-font{
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 16px;
}

.text-font-secondary{
    font-size: 60px;
    font-weight: bold;
    display: inline-block;
    margin-bottom: 16px;
    color: #47D16E;
}


.description-font{
    font-size: 24px;
    font-weight: 500;
}




</style>