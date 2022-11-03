<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/introduccion/img1.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p Estimado Aprendiz, bienvenido a este componente formativo que presenta los requerimientos asociados a la documentación de incidentes en la ciberseguridad, necesaria para registrar las operaciones de redes de datos y obtener la información para generar informes y reportes de operación en relación con las herramientas de protección y minimizar riesgos a los que puede verse expuesta la información.

        p Con diferentes contenidos audiovisuales puede apropiarse de la valiosa información que está aquí dispuesta, como parte del proceso de aprendizaje que adelanta y para continuar con los demás temas de estudio venideros. 

        p #[b Le invitamos a explorar el contenido y estudie a detalle todos los temas y al final realice la actividad de repaso.] 
    
    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
               

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
