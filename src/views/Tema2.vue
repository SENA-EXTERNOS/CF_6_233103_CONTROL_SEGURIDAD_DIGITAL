<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Reportes de incidente de la ciberseguridad

    .cajonAmarillo.bgr-tarjeta-tema1.p-4
        p(data-aos="fade-down") Los reportes de incidentes permiten identificar, evaluar, y responder a eventos del sistema de información. Éstos manejan un nivel de madurez que busca establecer criterios de valoración y determina el estado de la SI en las entidades. Existen 6 niveles de madurez y abarca desde la inexistencia hasta la optimización.
    .row
      .col-lg-6
        .row
          .col-lg-12.mt-5
            .titulo-sexto.color-acento-contenido
              h5 Figura 7
              p(data-aos="fade-down").mb-0 #[i Nivel de madurez]
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/img1.png', alt='Texto que describa la imagen')  
              figcaption.mt-3 #[b Nota:] Tomada de MinTIC, 2016, p. 35. 

      .col-lg-6
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta clr--gris").mt-5
          .row(titulo="Inexistencia")
            .col-12
              ul.lista-ul--color
                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 NNo se implementa control de infraestructura del SI, física, y de recursos humanos.
                
                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 No se reconoce la información como un activo digital sensible e importante.

          .row(titulo="Inicio")
            .col-12
              ul.lista-ul--color
                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Se hace una aproximación a las debilidades y falencias de SI.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Los incidentes son tratados de manera reactiva.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Se detecta la necesidad de implementar el MSPI.

          .row(titulo="Repetición")
            .col-12
              ul.lista-ul--color
                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Se identifica y clasifica a manera general los activos de información.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Se crea la cultura de conciencia de SI entre los funcionarios.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Todo lo relacionado con SPI es tratado en comités de gestión.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 La entidad hace la migración de Ipv4 a Ipv6 y cuenta con una planeación.

          .row(titulo="Definición")
            .col-12
              ul.lista-ul--color
                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Diagnóstico del estado del SI.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Determinación de objetivos, acciones y alcances del SI.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Establecimiento de políticas, procedimientos, roles y responsabilidades del SI y divulgación en toda la entidad.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Inventario de activos de información.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Implementación de un plan de tratamiento de riesgo.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Migración de Ipv4 a Ipv6y y documentación del plan de transición.


          .row(titulo="Administración ")
            .col-12
              ul.lista-ul--color
                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Revisión y monitoreo periódico de activos de información.
                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Uso de indicadores KPI para cumplimiento de políticas de SPI.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Evaluación de la efectividad de las acciones orientadas a disminuir incidentes, evitando repeticiones futuras.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Prueba constante del uso del Ipv6.

          .row(titulo="Optimización")
            .col-12
              ul.lista-ul--color
                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 La seguridad como valor agregado para el cumplimento de metas en la entidad.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 La información como un valor único e inalterable.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 La información con criterios de transparencia, claridad, oportunidad, integridad y disponibilidad.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Uso de indicadores para mejorar compromisos misionales.

                li 
                 i.fas.fa-check
                 p.color-acordeon-blanco.mb-0 Tráfico Ipv6.
               
    separador

    #t_2_1

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.1 Auditorias

    .row.justify-content-around.align-items-center
      .col-lg-5
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img2.svg', alt='Texto que describa la imagen')  

      .col-lg-7
        p(data-aos="fade-down").mt-3 En muchas oportunidades no se aprecia el alto grado de exposición a vulnerabilidades en ciberseguridad que enfrentan las entidades día tras día, es por ello, que lo más idóneo es realizar una auditoría. Estas acciones que van enmarcadas a través de buenas prácticas normalizadas por ISO 27000, permite detectar, enlistar y documentar aquellas incidencias y vulnerabilidades en la infraestructura TIC de la entidad. Los objetivos de las auditorías son:
        
        ul.lista-ul--color
          li 
            i.fas.fa-check
            | Analizar situación actual de la entidad y rendimiento de la productividad.

          li 
            i.fas.fa-check
            | Realizar una propuesta de seguridad física perimetral.

          li 
            i.fas.fa-check
            | Analizar y planear la mejora técnica de la red interna.

          li 
            i.fas.fa-check
            p.mb-0 Analizar el #[i hardware, software], y comunicaciones que ayude a generar las políticas de actualización y vulnerabilidades de la entidad.

          li 
            i.fas.fa-check
            p.mb-0 Enlistar las recomendaciones de mejora continua y buenas prácticas en la configuración y acceso al #[i hardware].

          li 
            i.fas.fa-check
            p.mb-0 Realizar pruebas de huella externa (Fase #[i External Footprinting] - FEF).

          li 
            i.fas.fa-check
            p.mb-0 Realizar pruebas de ficheros remotos RFI.

          li 
            i.fas.fa-check
            p.mb-0 Probar los servidores, #[i firewall] y PC’s, mediante escáner y pruebas manuales de autenticación.

          li 
            i.fas.fa-check
            p.mb-0 Analizar red inalámbrica (#[i Wireless]) con el fin de saber, que operación realiza una persona que acceda a esta red.

          li 
            i.fas.fa-check
            p.mb-0 Realizar un documento que describa las medidas a implementar y las acciones preventivas de mantenimiento en #[i hardware] y #[i software].

    .row.mt-5
      p El objetivo de las auditorías no es el de realizar actividades puntuales, sino acciones continuas que logran disminuir, minimizar y bloquear las amenazas latentes que están en continua transformación. De este modo, la entidad estaría preparada para actuar o prevenir consecuencias que se puedan presentar y así mejorar continuamente la seguridad y privacidad de los datos. Entre los tipos de auditorías más populares encontramos:

    .tarjeta.tarjeta--gris.p-4
      LineaTiempoC.color-secundario(text-small)
        .row(titulo="<i>Hacking ético</i>")
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img3.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p #[b #[i Hacking ético]]

            p Se realiza una serie de ciberataques para detectar la vulnerabilidad de la entidad.

        .row(titulo="Auditoría <em>web</em>")
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img4.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p #[b Auditoría de la red]

            p El objetivo es detectar la seguridad del servidor y la página #[i web] de la entidad.

           
        .row(titulo="Auditoría de la red")
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img5.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p #[b Auditoría de la red]

             p Actualizar el #[i firmware] de los sistemas operativos y dispositivos. Revisar proceso de conexión a internet y mapa de conexiones de la entidad.

        .row(titulo="Auditoría de código")
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img6.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p #[b Auditoría de código]

            p Realizar pruebas de código a las App que se usan en la entidad.

        .row(titulo="Auditoría de código II")
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/img7.svg', alt='Texto que describa la imagen')

          .col-md-8.mb-4.mb-md-0
            p #[b Auditoría de código II]

            p Hacer pruebas de conexión y navegabilidad de los dispositivos conectados a la red inalámbrica.

    .row.mt-5
      p Todas las entidades, sin importar su tamaño, requieren de auditorías de ciberseguridad. Mantener operativa y segura la infraestructura tecnológica produce confianza en los usuarios y elevan los niveles de calidad y productividad dentro de esta. A continuación, se presentan las acciones que no pueden faltar en las auditorías de ciberseguridad.


    .row.mt-5
      .col-lg-1
      .col-lg-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img8.png', alt='Texto que describa la imagen')  
      .col-lg-1

    .row.mt-5
      p En conclusión, una auditoría en ciberseguridad sirve para tener conocimiento e identificar algunos factores al interior de la entidad, tales como:

    .row.mt-5
      .col-lg-1
      .col-lg-10
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img9.png', alt='Texto que describa la imagen')  
      .col-lg-1

    separador
    
    #t_2_2

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.2 Marco Jurídico y Marco Legal

    .row
      p En la actualidad, existen diversos instrumentos Normativos de Ciberseguridad, con los cuales, el gobierno busca regular y controlar los ciberataques y los ciberdelincuentes; Entre los decretos, leyes y artículos se destacan:

    .row.justify-content-around.align-items-center
      .col-lg-9
        .tarjeta.tarjeta--gris.p-4
          LineaTiempoC.color-secundario(text-small)
            .row(titulo="CONPES 3701 DE 2011")
              .col-md-12.mb-4.mb-md-0
                p #[b CONPES 3701 DE 2011]

                p Lineamientos de política para la Ciberseguridad y Ciberdefensa. En este documento se generan los lineamientos que permiten desarrollar estrategias del orden nacional para contrarrestar las amenazas informáticas.

            .row(titulo="Ley 527 de 1999")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 527 de 1999]

                p Validez jurídica y probatoria de la información electrónica. Ley donde se reglamenta el acceso y uso a los mensajes de datos, del comercio electrónico y de las firmas digitales, y se establecen las entidades de certificación y se dictan otras disposiciones.
           
            .row(titulo="Ley 594 de 2000")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 594 de 2000]

                p Ley General de Archivos. El objetivo de esta ley es establecer las reglas y principios generales que regulan la función archivística del Estado.

            .row(titulo="Ley 679 de 2001")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 679 de 2001]

                p Prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores. El objeto de esta ley es la protección contra la explotación, la pornografía, el turismo sexual y demás formas de abuso sexual con menores de edad, mediante el establecimiento de normas de carácter preventivo y sancionatorio.

            .row(titulo="Ley 962 de 2005")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 962 de 2005]

                p Simplificación y Racionalización de Trámites y procedimientos administrativos. Esta ley permite facilitar las relaciones de los particulares con la Administración Pública.

            .row(titulo="Ley 1150 de 2007")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 1150 de 2007]

                p Seguridad de la información en contratación pública. El objeto de la presente ley es la modificación en la Ley 80 de 1993, y dictar otras disposiciones generales aplicables a toda contratación con recursos públicos.

            .row(titulo="Ley 1266 de 2008")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 1266 de 2008]

                p Habeas data. Desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bancos de datos.

            .row(titulo="Ley 1273 de 2009")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 1273 de 2009]

                p Protección de información de los datos. Crea el marco contra los atentados a la confidencialidad, integridad y disponibilidad de los datos.

            .row(titulo="Ley 1341 de 2009")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 1341 de 2009]

                p Principios y conceptos sobre la sociedad de la información y la organización de las TIC. Determina el marco general para la formulación de las políticas públicas que regirán el sector de las TIC y su ordenamiento general.

            .row(titulo="Ley 1437 de 2011")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 1437 de 2011]

                p Procedimiento Administrativo y de lo Contencioso Administrativo. Proteger y garantizar los derechos y libertades de las personas, la primacía de los intereses generales, la sujeción de las autoridades a la Constitución y demás preceptos del ordenamiento jurídico.


            .row(titulo="Ley 1480 de 2011")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 1480 de 2011]

                p Estatuto del consumidor. Por la cual se protege al consumidor de medios o mercado electrónico.

            .row(titulo="Decreto Ley 019 de 2012")
              .col-md-12.mb-4.mb-md-0
                p #[b Decreto Ley 019 de 2012]

                p Racionalizar trámites a través de medios electrónicos. Suprimir o reformar regulaciones, procedimientos y trámites innecesarios existentes en la Administración Pública.

            .row(titulo="Ley 1581 de 2012")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 1581 de 2012]

                p Protección de datos personales. Desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos.

            .row(titulo="Ley 1712 de 2014")
              .col-md-12.mb-4.mb-md-0
                p #[b Ley 1712 de 2014]

                p Transparencia y derecho al acceso a la información pública nacional. Regular el derecho de acceso a la información pública, los procedimientos para el ejercicio y garantía del derecho y las excepciones a la publicidad de información.

            .row(titulo="Decreto 2364 de 2012")
              .col-md-12.mb-4.mb-md-0
                p #[b Decreto 2364 de 2012]

                p Firma electrónica. Representa un medio de identificación electrónico flexible y tecnológicamente neutro que se adecúa a las necesidades de la sociedad.

            .row(titulo="Decreto 2609 de 2012")
              .col-md-12.mb-4.mb-md-0
                p #[b Decreto 2609 de 2012]

                p Expediente electrónico. Fortalecer de los archivos públicos del país, para garantizar la eficacia de la gestión del Estado y la conservación del patrimonio documental.

            .row(titulo="Decreto 2693 de 2012")
              .col-md-12.mb-4.mb-md-0
                p #[b Decreto 2693 de 2012]

                p Gobierno en línea. Lineamientos, plazos y términos para garantizar el máximo aprovechamiento de las Tecnologías de la Información y las Comunicaciones, con el fin de contribuir con la construcción de un Estado más eficiente, más transparente y participativo.

            .row(titulo="Decreto 1377 de 2013")
              .col-md-12.mb-4.mb-md-0
                p #[b Decreto 1377 de 2013]

                p Protección de datos. Reglamentar parcialmente la Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales.

            .row(titulo="Decreto 1510 de 2013")
              .col-md-12.mb-4.mb-md-0
                p #[b Decreto 1510 de 2013]

                p Sistema de compras y contratación Pública. Las Entidades Estatales deben procurar el logro de los objetivos del sistema de compras y contratación pública definidos por Colombia Compra Eficiente.

            .row(titulo="Decreto 333 de 2014")
              .col-md-12.mb-4.mb-md-0
                p #[b Decreto 333 de 2014]

                p Entidades de certificación. Definir el régimen de acreditación de las entidades de certificación.
            
      .col-lg-3
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema2/img10.svg', alt='Texto que describa la imagen').width-card-tema2 



    .row.mt-5
      .col-lg-2
      .col-lg-8
        p Para ampliar la información y a manera de ejemplo, se puede referir a los anexos:
        .tarjeta.color-secundario.p-3.mb-5.mt-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo 1
                  p.text-small MARCO JURIDICO CIBERSEGURIDAD PONAL.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo1.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  
      .col-lg-2 

    .row
      .col-lg-2
      .col-lg-8
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema2/img11.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Anexo 2
                  p.text-small Convenio sobre la Ciberdelincuencia - LEY 1928 DE JULIO 24 DE 2018
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo2.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download  
      .col-lg-2  

    separador   

    #t_2_3

    .titulo-segundo.color-acento-contenido.mt-5(data-aos="zoom-in-left")
      h2 2.3 Herramientas de gestión y manual de funcionamiento

    .row
      p Para que los sistemas no sufran consecuencias tras los ataques de ciberseguridad, es importante contar con herramientas de protección y, además, que los encargados de éstas cuenten con las habilidades y conocimientos para su óptimo funcionamiento:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="<i>Software</i> antivirus")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/1.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura #[i Software antivirus]
            p Estos programas permiten contar con medidas de protección efectivas cuando el equipo se encuentre expuestos a #[i software] malicioso o cualquier otro tipo de #[i malware]; Estos programas ofrecen la oportunidad de eliminarlo por completo o poner en estado de cuarentena.
            .row
              .col-10
                a.anexo.mb-4.mb-lg-0(href="https://latam.kaspersky.com/antivirus" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[i #[b Software antivirus]]. Para conocer la herramienta y su manual de funcionamiento, se puede remitir a este enlace.

      .py-3.py-md-4(titulo="<i>Firewall</i>")
        .row.justify-content-center  
          .col-lg-5
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/2.png', alt='').img400.m-auto    

          .col-lg-7
            h4.txt--purpura #[i Firewall]
            p Sistema para prevenir y proteger la red privada de ataques de otras redes. Su funcionamiento es sencillo: escanea los paquetes de red, permitiéndoles o bloqueándolos según las reglas definidas por un administrador.
            .row
              .col-10
                a.anexo.mb-4.mb-lg-0(href="https://www.mcafee.com/support/?page=shell&shell=article-view&locale=es-ES&articleId=TS100887" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[i #[b Firewall]]. Para conocer la herramienta y su manual de funcionamiento, se puede remitir a este enlace.

      .py-3.py-md-4(titulo="<i>Proxy</i>")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/3.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura #[i Proxy]
            p Programa o dispositivo físico, que actúa de intermediario entre conexiones del navegador e internet, filtrando todos los paquetes entre ambos.
            .row
              .col-10
                a.anexo.mb-4.mb-lg-0(href="https://www.avast.com/es-es/c-topic-proxy" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[i #[b Proxy]]. Para conocer la herramienta y su manual de funcionamiento, se puede remitir a este enlace.

      .py-3.py-md-4(titulo="<i>PKI - Public Key Infrastructure</i>")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/4.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura #[i PKI - Public Key Infrastructure]
            p Herramienta que permite el intercambio de datos en forma segura a través de Internet, y a su vez, verifica la identidad de la otra parte.

      .py-3.py-md-4(titulo="<i>MDR – Managed Detection and Response</i>")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/5.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura #[i MDR – Managed Detection and Response]
            p Es un servicio en seguridad avanzado, donde se proporciona la búsqueda de amenazas, y monitoreo inteligente de las mismas.
            .row
              .col-10
                a.anexo.mb-4.mb-lg-0(href="https://latam.kaspersky.com/antivirus" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[i #[b MDR – Managed Detection and Response]]. Para conocer la herramienta y su manual de funcionamiento, se puede remitir a este enlace.

      .py-3.py-md-4(titulo="<i>Pentesting</i>")
        .row.justify-content-center
          .col-lg-5.order-2.order-lg-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/tema2/6.png', alt='').img400.m-auto
          .col-lg-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura #[i Pentesting]
            p Son pruebas que realizan los expertos mediante técnicas avanzadas para detectar posibles amenazas o áreas con puntos débiles que los piratas informáticos pueden aprovechar.
            .row
              .col-10
                a.anexo.mb-4.mb-lg-0(href="https://pentest-tools.com/" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-link.svg")
                  .anexo__texto
                    p #[i #[b Pentesting]]. Para conocer la herramienta y su manual de funcionamiento, se puede remitir a este enlace.
    h4 Documentación de los procesos

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        .cajonAmarillo.bgr-tarjeta-tema1.p-4
            p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema2',
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
