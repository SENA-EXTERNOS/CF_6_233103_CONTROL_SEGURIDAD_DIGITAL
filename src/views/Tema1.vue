<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Documentación de incidentes en la Ciberseguridad

    .row.justify-content-around.align-items-center
      .col-lg-7
        p(data-aos="fade-down").mt-3 Los procesos que permiten gestionar y dar tratamiento a los incidentes de la ciberseguridad se rigen bajo la familia de las normas ISO/IEC 27000. Estas normas describen lineamientos para el seguimiento de eventos, incidentes y acciones que lleguen a impactar en el desempeño de los sistemas de seguridad de la información en las empresas.

        p(data-aos="fade-down") En Colombia, está contemplado dentro del marco de gobierno digital el Modelo de Seguridad y Privacidad de la Información – MSPI. Este modelo está basado en un ciclo de operación que incluye 5 fases:

        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Diagnóstico.

          li 
            i.fas.fa-check
            | Planificación.

          li 
            i.fas.fa-check
            | Implementación.

          li 
            i.fas.fa-check
            | Evaluación de desempeño.

          li 
            i.fas.fa-check
            | Mejora continua.

      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img1.svg', alt='Texto que describa la imagen')  
    p.mb-5 En la siguiente figura, se puede observar el ciclo de operación y las fases.  
    .row
      .col-lg-2
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          p(data-aos="fade-down").mb-0 #[i Ciclo de operación del Modelo de Seguridad y Privacidad de la Información]
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img2.png', alt='Texto que describa la imagen')  
          figcaption.mt-3 #[b Nota.] Tomada de MinTIC, 2016, p. 20.
      .col-lg-2

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img3.svg', alt='Texto que describa la imagen')  

      .col-lg-7
        p(data-aos="fade-down").mt-3 Estas fases, logran que las entidades que implementan el MSPI gestionen de manera adecuada la seguridad y privacidad de los activos digitales, de este modo, la Estrategia de Gobierno en línea, permite centrarse en los componentes de Tecnología de la Información y Comunicaciones TIC para gestionar aportes que incluyen la formulación, gestión e implementación de un modelo de seguridad enfocado en salvaguardar la disponibilidad, integridad, transparencia y confidencialidad de los activos y datos digitales, mediante buenas prácticas de documentación de eventos e incidentes, dando cumplimiento a los objetivos y misión de la entidad.

        p(data-aos="fade-down").mt-3 Los sistemas de gestión sostenibles adoptados por las entidades, generan la percepción y aceptación de un estado más transparente, abierto al público, participativo y colaborativo, garantizando que la información entregada al ciudadano cuenta con controles y criterios de seguridad, documentado cada incidente que altere o modifique algún dato dentro del universo de información almacenada.

    separador

    #t_1_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.1 Informes de operación de red de datos

    .row
      p(data-aos="fade-down") De acuerdo a las etapas del MSPI en su fase de diagnóstico se identifica la operatividad de la red de datos según procedimientos técnicos y marcos de referencia; Es así que se describe el estado de la entidad, el nivel de madurez y el levantamiento de información, teniendo en cuenta los requerimientos, metas y resultados.

      p(data-aos="fade-down") En esta etapa, al generar los informes de operación de la red de datos, se debe describir las metas, los resultados e instrumentos utilizados, tal como se describe en la siguiente en la figura 2 y la tabla 1:

    .row.mt-5
      .col-lg-2
      .col-lg-8.mt-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 2
          p(data-aos="fade-down").mb-0 #[i Fase de diagnóstico MSPI.]
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img4.png', alt='Texto que describa la imagen')  
          figcaption.mt-3 #[b Nota.] Tomada de MinTIC, 2016, p. 21. 

    
    .row 
      .col-lg-1
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 1
          p(data-aos="fade-down").mb-0 #[i Fase de diagnóstico]
        .tabla-a.color-acento-contenido.mt-5
           table
            caption #[b Nota.] Tomada y adaptada de MinTIC, 2016, p. 22.
            thead
              tr
               th Metas
                th Resultado
                th INSTRUMENTOS MSPI
            tbody
              tr
                td Establecer el estado actual de la entidad en la gestión de seguridad y privacidad de la información – SPI
                td Herramienta diligenciada y documentada
                td Herramienta de diagnóstico

              tr
                td Identificar el nivel de madurez de SPI en la Entidad
                td Herramienta diligenciada y nivel de madurez identificado
                td Herramienta de diagnóstico

              tr
                td Identificar vulnerabilidades técnicas y administrativas, las cuales serán los insumos para la planificación
                td Informe con los hallazgos obtenidos de las pruebas de vulnerabilidad
                td Herramienta de diagnóstico
      .col-lg-1
    
    .row.mt-5
      p(data-aos="fade-down") Para el desarrollo eficiente de esta fase, las entidades necesitan seguir estos pasos:

    .tarjeta.tarjeta--gris.p-5
      PasosB.color-acento-botones
        .row(titulo="").p-5
          .col-md-8.mb-4.mb-md-0
            p(data-aos="fade-down") Recolectar la información a través de la herramienta de diagnóstico. 

          .col-md-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img5.svg', alt='Texto que describa la imagen')

        .row(titulo="").p-5
          .col-md-8.mb-4.mb-md-0.
             Implementar las pruebas de efectividad.

          .col-md-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img6.svg', alt='Texto que describa la imagen')

        .row(titulo="").p-5
          .col-md-8.mb-4.mb-md-0
            p(data-aos="fade-down") Documentar el resultado del diagnóstico.

          .col-md-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img7.svg', alt='Texto que describa la imagen')

        .row(titulo="").p-5
          .col-md-8.mb-4.mb-md-0
            p(data-aos="fade-down") Determinar el nivel de madurez.

          .col-md-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img8.svg', alt='Texto que describa la imagen')

        .row(titulo="").p-5
          .col-md-8.mb-4.mb-md-0
            p(data-aos="fade-down") Éstos resultados necesitan ser revisados y divulgados por todas las personas que intervienen en el proceso para iniciar con la siguiente fase. 

          .col-md-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema1/img9.svg', alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center.mt-5.background-full
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img10.svg', alt='Texto que describa la imagen').imagen-full-tema-1
      .col-lg-8
        p(data-aos="fade-down") En la #[b fase de planificación], se utilizan como insumos los resultados de la etapa de diagnóstico para elaborar los informes con el método de SPI, con el objetivo de determinar los procesos que se deben implementar a nivel de SPI, mediante la estructura de gestión del riesgo en la operación de la red de datos.

        p(data-aos="fade-down") La Entidad es la encargada de limitar los procesos a ejecutar para la implementación de SPI. Estos procesos deben ser universales y abarcar todos los departamentos de la entidad; Es preciso que el alcance y limitantes impacten el cumplimiento de los objetivos, protegiendo la calidad de la información y los servicios, sobre todo la documentación de acuerdo a los informes de la operatividad en la red de datos.

    .row.mt-5
      p(data-aos="fade-down") A continuación, se detalla el proceso de la etapa de planificación y las partes que debe contener un informe de gestión, junto con sus metas, resultados e instrumentos para el MSPI en una entidad.

      p(data-aos="fade-down") Como se puede observar, la fase de planificación contiene 4 subprocesos: Contexto, liderazgo, planeación y soporte.        

    .row.mt-5
      .col-lg-2
      .col-lg-8.mt-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 3
          p(data-aos="fade-down").mb-0 #[i Fase de planificación MSPI]
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img11.png', alt='Texto que describa la imagen')  
          figcaption.mt-3 #[b Nota.] Tomada de MinTIC.
      .col-lg-2 

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-7
        
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris")
          .row(titulo="Contexto:")
            .col-12
              p(data-aos="fade-down").color-acordeon-blanco Se debe conocer, investigar y hallar oportunidades de mejora dentro del MSPI, para determinar los alcances del mismo.

          .row(titulo="Liderazgo:")
            .col-12
              p(data-aos="fade-down").color-acordeon-blanco En el marco de apropiación del MSPI, los líderes y directores de las entidades deben propender porque todos los funcionarios acaten y sientan el compromiso de dar fiel cumplimiento a la normatividad, asignando roles y responsabilidades en cada uno de los aspectos a tratar.

          .row(titulo="Planeación:")
            .col-12
              p(data-aos="fade-down").color-acordeon-blanco Plantear acciones y objetivos, de tal manera que se cree la hoja de ruta para abordaje de eventos e incidentes.

          .row(titulo="Soporte:")
            .col-12
              p(data-aos="fade-down").color-acordeon-blanco Documentar la entrega de recursos y competencias a cada área de manera oficial, mediante sensibilizaciones y comunicaciones.


      .col-lg-5.d-none.d-lg-flex
        figure(data-aos="zoom-in")
          img(src="@/assets/curso/temas/tema1/img12.png", alt="alt").m-auto
              

    separador

    #t_1_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.2 Documentación de implementación

    .row
      p(data-aos="fade-down") En este ítem se aborda la etapa de implementación del MSPI, donde se logrará llevar acabo la implementación de lo planificado en los informes de operación de red de datos. Esta etapa contiene 3 subprocesos como son: Control y planeación operacional, plan de tratamiento de riesgos de seguridad y privacidad de la información, y la definición de indicadores de gestión.

    .row.mt-5
      .col-lg-2
      .col-lg-8.mt-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 4
          p(data-aos="fade-down").mb-0 #[i Fase de implementación MSPI]
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img13.png', alt='Texto que describa la imagen')  
          figcaption.mt-3 #[b Nota.] Tomada de MinTIC.
      .col-lg-2 

    .row.justify-content-around.align-items-center.mt-5
      .col-lg-1
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img14.svg', alt='Texto que describa la imagen') 
      .col-lg-7
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Control y planeación operacional:")
            .col-md-12.mb-4.mb-md-0
              p La entidad planifica, implementa y controla todos los procesos indispensables que permitan cumplir con todas las condiciones necesarias de SPI. Es indispensable, que toda esta información sea documentada para llevar un control de acciones en búsqueda de la mitigación de riesgos que puedan presentarse.

          .row(numero="2" titulo="Plan de tratamiento de riesgos de SPI:")
            .col-md-12.mb-4.mb-md-0
              p Es indispensable la implementación del plan de tratamiento de riesgos, en donde se debe identificar los controles aplicar para que éstos lleguen a un nivel aceptable.
              
          .row(numero="3" titulo="Definición de indicadores de gestión:")
            .col-md-12.mb-4.mb-md-0
              p Los indicadores sirven para medir la eficiencia y efectividad en las acciones implementadas en SPI y lograr una mejora continua.   
      .col-lg-1

    .row.mt-5
      .col-lg-1
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img15.svg', alt='Texto que describa la imagen') 
      .col-lg-11
        p(data-aos="fade-down") Por otro lado, es importante definir las actividades a realizar para la migración de los protocolos IPv4 a IPv6, cabe recordar que las Ipv son las conexiones de internet, siendo la IPv4 más antigua y vulnerable, a partir del 2020 se migró a la IPv6. En esta fase se realizan actividades de direccionamiento, diseño, montaje, ejecución y corrección de pruebas, activación de políticas de SPI, validación de funcionalidad, a continuación, se describen metas, entregables e instrumentos para la migración de Ipv4 a Ipv6.
        p(data-aos="fade-down") La siguiente tabla describe la meta, el resultado y el instrumento para la migración de Ipv4 a Ipv6. 
    .row 
      .col-lg-1
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 2
          p(data-aos="fade-down").mb-0 #[i Migración Ipv4-Ipv6]
        .tabla-a.color-acento-contenido.mt-5
           table
            caption #[b Nota.] Tomada de MinTIC, 2016, p. 30.
            thead
              tr
                th Metas
                th Resultado
                th INSTRUMENTOS MSPI
            tbody
              tr
                td Implementar la estrategia de migración IPv4 a IPv6.
                td Informe para implementar la estrategia de migración de IPv4 a IPv6
                td Guía Transición de IPv4 a IPv6 para Colombia
      .col-lg-1   

    
    separador

    #t_1_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 1.3 Informes de operación de herramientas de protección

    .row.mt-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img16.svg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p(data-aos="fade-down") Existen herramientas de protección que permiten la operación continua de la entidad, es indispensable documentar cada etapa del proceso y generar informes, este aspecto hace parte del MSPI en las etapas de evaluación de desempeño y mejora continua.

          p(data-aos="fade-down") En la etapa de evaluación de desempeño se realiza el seguimiento al MSPI, de acuerdo a los resultados obtenidos en la etapa de implementación. Este proceso permite verificar la eficiencia de todas las acciones que se implementan.
    .row.mt-5
      p La figura 5 muestra la fase de evaluación de desempeño MSPI.

      .col-lg-2
      .col-lg-8.mt-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 5
          p(data-aos="fade-down").mb-0 #[i Fase de evaluación de desempeño MSPI]
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img17.png', alt='Texto que describa la imagen')  
          figcaption.mt-3 #[b Nota.] Tomada de MinTic, 2016, p. 31. 
      .col-lg-2 

    .row.mt-5
      p Como se puede observar, la etapa de evaluación de desempeño contiene 3 fases a su vez actividades, metas y resultados que permite la consolidación de los indicadores.
    
    .row.justify-content-center.mb-5.mt-5
      .col-lg-9.position-relative
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-lg-auto.col-xs-12
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema1/img18.svg", alt="alt").img100
            .col.left-text
              h5.color-white Actividades
              
              .row
                .col-lg-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Revisar actividad de controles.

                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Revisar evaluación por nivel de riesgo.

                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Hacer seguimiento a las actividades ejecutadas.

                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Hacer seguimiento a la implementación del MSPI.

                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Hacer seguimiento a los registros.
                
                .col-lg-6
                  ul.lista-ul--color
                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Medir indicadores de gestión.

                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Hacer revisión a los planes de mejora.

                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Especificar frecuencia, métodos, y responsables.

                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Planificar y elaborar informes.

                    li 
                      i.fas.fa-check
                      p.color-white.mb-0 Conservar información documentada en los informes.
    
        
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center
            .col-lg-auto.col-xs-12
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema1/img19.svg", alt="alt").img100
            .col.left-text
              h5 Metas

              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.color-nefg.mb-0 Informe plan de revisión y seguimiento.

                li 
                  i.fas.fa-check
                  p.mb-0 Informe de auditorías.

        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center
            .col-lg-auto.col-xs-12
              figure(data-aos="zoom-in")
                img(src="@/assets/curso/temas/tema1/img20.svg", alt="alt").img100
            .col.left-text
              h5.color-white Resultados

              ul.lista-ul--color
                li 
                  i.fas.fa-check
                  p.color-white.mb-0 Documento con plan de seguimiento.

                li 
                  i.fas.fa-check
                  p.color-white.mb-0 Documento con el plan de auditorías.

    .row.justify-content-around.align-items-center.mt-5.background-full
      .col-lg-8
        p Para finalizar con las etapas, se procede con la de mejora continua, que consolida los resultados de la fase de evaluación de desempeño, en busca del plan de mejoramiento continuo de SPI. Para ello se ejecutan acciones previas dirigidas a mitigar los efectos de los incidentes que se presenten.
      .col-lg-4
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img21.svg', alt='Texto que describa la imagen').imagen-full2-tema-1
     

    .row.mt-5
      .col-lg-2
      .col-lg-8.mt-5
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          p.mb-0 #[i Fase de mejoramiento continuo MSPI.]
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema1/img22.png', alt='Texto que describa la imagen') 
          figcaption.mt-3 #[b Nota.] Tomada de MinTIC, 2016, p. 33. 

    .row.mt-5
      p Como se puede observar, la etapa de mejoramiento continuo consta de 2 fases que son: Acciones correctivas y mejora continua; cada una de estas fases contiene metas, resultados e instrumentos.
      p La tabla 3 describe las metas, resultados e instrumentos de la fase de mejoramiento continuo.     
    .row 
      .col-lg-1
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mt-5
          h5 Tabla 3
          p.mb-0 #[i Mejoramiento continuo]
        .tabla-a.color-acento-contenido.mt-5
           table
            caption #[b Nota.] Tomada de MinTIC, 2016, p. 34.
            thead
              tr
                th Metas
                th Resultado
                th INSTRUMENTOS MSPI
            tbody
              tr
                td 
                  p Realizar el plan de mejora.
                  p Analizar los resultados del seguimiento.
                  p Analizar los resultados de las auditorías.
                td
                  p Informe con plan de mejora
                  p Informe con plan de divulgación
                td 
                  p Guía de mejora continua
      .col-lg-1   

      
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
