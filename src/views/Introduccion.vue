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
        p Apreciado aprendiz, bienvenido a este componente formativo, donde encontrará los requerimientos asociados a la documentación de incidentes en ciberseguridad. Esta es necesaria para registrar operaciones de redes de datos; obtener la información destinada a elaborar informes y reportes relacionados con las herramientas de protección, y minimizar riesgos a los que puede verse expuesta la información.
    p.mt-5 En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo. 
    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/ZfXemnyC8Sk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
               

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
