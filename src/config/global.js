export default {
  global: {
    componenteFormativo: 'Ciberseguridad y documentación de incidentes',
    descripcionCurso:
      'Las empresas pueden verse expuestas a eventos e incidentes de seguridad que pueden poner en riesgo sus activos digitales. Una forma de minimizar esos riesgos es implementar buenas prácticas organizacionales, que lleven a crear estándares y modelos de referencia orientados a documentar procesos dentro del sistema de gestión de seguridad de la información, realizar auditorías y lograr trazabilidad informática.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-9'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-9.svg'),
      },
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.svg'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.svg'),
      },
      {
        clases: ['banner-principal-decorativo-7'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-7.svg'),
      },
      {
        clases: ['banner-principal-decorativo-8'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-8.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Documentación de incidentes en la Ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Informes de operación de red de datos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Documentación de implementación',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Informes de operación de herramientas de protección',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Reportes de incidente de la ciberseguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Auditorias',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Marco Jurídico y Marco Legal',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Herramientas de gestión y manual de funcionamiento',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Documentación de incidentes en la ciberseguridad',
      referencia:
        'International Organization for Standardization. (2009).<i> Glosario ISO 27000.</i>',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_virtualprovpro4391',
    },
    {
      tema: 'Documentación de incidentes en la ciberseguridad',
      referencia:
        'Valencia-Duque, F. y Orozco-Alzate, M. (2017). Metodología para la implementación de un sistema de gestión de seguridad de la información basado en la familia de normas ISO/IEC 27000. <i>RISTI: Revista Ibérica de Sistemas e Tecnologias de Informação </i>(22), p. 73-88.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_scielo_journals_S1646_98952017000200006',
    },
    {
      tema: 'Documentación de incidentes en la ciberseguridad',
      referencia:
        'Castellanos, L. (2012). <i>Seguridad en informática: seguridad, auditoría, cortafuegos, ingeniería social, ISO 27000</i>. Editorial Académica Española.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_aleph000083567',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría',
      significado:
        'acciones que van enmarcadas a través de buenas prácticas normalizadas por ISO 27000, permite detectar, enlistar y documentar aquellas incidencias y vulnerabilidades en la infraestructura TIC de la entidad.',
    },
    {
      termino: 'Control y planeación operacional',
      significado:
        'la entidad planifica, implementa y controla todos los procesos indispensables que permitan cumplir con todas las condiciones necesarias de SPI. ',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'identifica la operatividad de la red de datos según procedimientos técnicos y marcos de referencia.',
    },
    {
      termino: 'Gobierno en línea',
      significado:
        'permite centrarse en los componentes de Tecnología de la Información y Comunicaciones TIC para gestionar aportes que incluyen la formulación, gestión  e implementación de un modelo de seguridad enfocado en salvaguardar la disponibilidad, integridad, transparencia y confidencialidad de los activos y datos digitales.',
    },
    {
      termino: 'Indicadores de gestión',
      significado:
        'medición de eficiencia y efectividad en las acciones implementadas en SPI. Los indicadores permiten medir eficiencia, efectividad, y mejora continua.',
    },
    {
      termino: 'Norma',
      significado:
        'describen lineamientos para el seguimiento de eventos, incidentes y acciones que lleguen a impactar en el desempeño de los sistemas de seguridad de la información en las empresas.',
    },
    {
      termino: 'Plan de tratamiento de riesgos de SPI',
      significado:
        'Se identifican los controles que se deben aplicar en la gestión de los riesgos, para que éstos lleguen a un nivel aceptable.',
    },
    {
      termino: 'Planeación',
      significado:
        'plantear acciones y objetivos, de tal manera que se cree la hoja de ruta para abordaje de eventos e incidentes.',
    },
    {
      termino: 'Planificación',
      significado:
        'Etapa en la que se determinan los procesos que se deben implementar a nivel de SPI, mediante la estructura de gestión del riesgo en la operación de la red de datos.',
    },
    {
      termino: 'Sistema de gestión sostenible',
      significado:
        'generan la percepción y aceptación de un estado más transparente, abierto al público, participativo y colaborativo, garantizando que la información entregada al ciudadano cuenta con controles y criterios de seguridad, documentando cada incidente que altere o modifique algún dato dentro del universo de información almacenada.',
    },
    {
      termino: 'Soporte',
      significado:
        'medio de apoyo que documenta la entrega de recursos y competencias a cada área de manera oficial, mediante sensibilizaciones y comunicaciones.',
    },
  ],
  referencias: [
    {
      referencia:
        'Asobancaria (2020). <i>Guía de buenas prácticas para auditar la ciberseguridad</i>. Asobancaria.',
      link:
        'https://www.asobancaria.com/wp-content/uploads/2020/09/Gui%CC%81a-de-Buenas-Pra%CC%81cticas-para-Auditar-la-CiberseguridadV4_compressed.pdf',
    },
    {
      referencia:
        'Avast Academy (2022). <i>¿Qué es un servidor proxy y cómo funciona?</i> ',
      link: 'https://www.avast.com/es-es/c-topic-proxy',
    },
    {
      referencia:
        'Colombia, Departamento Nacional de Planeación [DNP]-Consejo Nacional de Política Económica y Social [CONPES]. (2011). <i>Documento CONPES 3701. Lineamientos de política para la ciberseguridad y ciberdefensa</i>. DNP-CONPES.',
      link:
        'https://tic.bogota.gov.co/sites/default/files/marco-legal/CONPES%203701%20DE%202011.pdf',
    },
    {
      referencia:
        'Colombia, Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC]. (2016). <i>Modelo de Seguridad y Privacidad de la Información</i>. MinTIC:',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_Modelo_de_Seguridad_Privacidad.pdf',
    },
    {
      referencia:
        'Colombia, Ministerio de Tecnologías de la Información y las Comunicaciones [MinTIC] (2018). <i>Manual de gobierno digital. Implementación de la Política de Gobierno Digital</i>. MinTIC.',
      link:
        'https://gobiernodigital.mintic.gov.co/692/channels-594_manual_gd.pdf',
    },
    {
      referencia:
        'Congreso de Colombia (2018, 24 de julio). Ley 1928 de 2018, “por medio de la cual se aprueba el ‘Convenio sobre la Ciberdelincuencia’, adoptado el 23 de noviembre de 2001, en Budapest. D. O. 50664 Legis.',
      link:
        'http://www.lexbase.co/lexdocs/indice/2018/l1928de2018#:~:text=%22%20LEY%201928%20DE%202018%20(julio,noviembre%20de%202001%2C%20en%20Budapest.',
    },
    {
      referencia:
        'EALDE Business School. (2021). <i>Consejos para hacer una auditoría de seguridad informática para evitar riesgos digitales.</i>',
      link: 'https://www.ealde.es/auditoria-de-seguridad-informatica/',
    },
    {
      referencia:
        'Kaspersky (2022).<i> Protección esencial contra virus para la PC</i>.',
      link: 'https://latam.kaspersky.com/antivirus',
    },
    {
      referencia:
        'Mcafee .(2022). <i>Cómo abrir un puerto en McAfee Firewall.</i>',
      link:
        'https://www.mcafee.com/support/?page=shell&shell=article-view&locale=es-ES&articleId=TS100887',
    },
    {
      referencia:
        'MDR. (2022). <i>Virus detected warning alert message on computer screen, vector internet cyber security background. Hacking attack and virus detection spyware or digital antivirus malware for internet data fraud</i>.',
      link:
        'https://stock.adobe.com/es/images/virus-detected-warning-alert-message-on-computer-screen-vector-internet-cyber-security-background-hacking-attack-and-virus-detection-spyware-or-digital-antivirus-malware-for-internet-data-fraud/459612836',
    },
    {
      referencia:
        'Pentest Tools. (2022).<i> Your pentesting arsenal, ready to go</i>.',
      link: 'https://pentest-tools.com/',
    },
    {
      referencia:
        'Policía Nacional de Colombia. (2014).<i> Ciberseguridad. Entorno colombiano.</i>',
      link: 'https://www.oas.org/juridico/spanish/cyber/cyb8_col.pdf',
    },
    {
      referencia:
        'Decreto 1510 de 2013. Sistema de compras y contratación Pública. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53776',
    },
    {
      referencia: 'Decreto 2364 de 2012. Firma electrónica. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=50583',
    },
    {
      referencia:
        'Decreto 2609 de 2012. Expediente electrónico. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=50958',
    },
    {
      referencia: 'Decreto 2693 de 2012. Gobierno en línea. Recuperado de: ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=51198',
    },
    {
      referencia:
        'Decreto 333 de 2014. Entidades de certificación. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56767',
    },
    {
      referencia:
        'Decreto Ley 019 de 2012. Racionalizar trámites a través de medios electrónicos. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=45322',
    },
    {
      referencia:
        'Ley 1150 de 2007. Seguridad de la información en contratación pública. Recuperado de:',
      link: 'http://www.oas.org/juridico/spanish/mesicic3_col_ley1150.pdf',
    },
    {
      referencia: 'Ley 1266 de 2008. Habeas data. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=34488#:~:text=HABEAS%20DATA&text=Dicta%20las%20disposiciones%20generales%20del,la%20proveniente%20de%20terceros%20pa%C3%ADses',
    },
    {
      referencia:
        'Ley 1273 de 2009. Protección de información de los datos. Recuperado de: ',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Ley_1273_2009.pdf',
    },
    {
      referencia:
        'Ley 1341 de 2009. Principios y conceptos sobre la sociedad de la información y la organización de las TIC.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=36913',
    },
    {
      referencia: 'Decreto 1377 de 2013. Protección de datos. Recuperado de: ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=53646',
    },
    {
      referencia:
        'Ley 1437 de 2011. Procedimiento Administrativo y de lo Contencioso Administrativo. Recuperado de:',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=41249',
    },
    {
      referencia: 'Ley 1480 de 2011. Estatuto del consumidor. Recuperado de:',
      link:
        'https://www.sic.gov.co/recursos_user/documentos/normatividad/Leyes/2011/Ley_1480_Estatuto_Consumidor.pdf',
    },
    {
      referencia:
        'Ley 1581 de 2012. Protección de datos personales. Recuperado de: ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=49981',
    },
    {
      referencia:
        'Ley 1712 de 2014. Transparencia y derecho al acceso a la información pública nacional. Recuperado de: ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=56882',
    },
    {
      referencia:
        'LEY 1928 de 2018 [CONGRESO DE COLOMBIA]. Por medio de la cual se aprueba el Convenio sobre la Ciberdelincuencia, adoptado el 23 de noviembre de 2001, en Budapest. Diario oficial 50664 DE JULIO 24 DE 2018, 24 de julio de 2018. COLECCIÓN DE LEGISLACIÓN COLOMBIANA. Legis Editores.',
      link:
        'http://www.lexbase.co/lexdocs/indice/2018/l1928de2018#:~:text=%22%20LEY%201928%20DE%202018%20(julio,noviembre%20de%202001%2C%20en%20Budapest',
    },
    {
      referencia:
        'Ley 527 de 1999. Validez jurídica y probatoria de la información electrónica. Recuperado de: ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0527_1999.html',
    },
    {
      referencia: 'Ley 594 de 2000. Ley General de Archivos. Recuperado de:',
      link: 'https://normativa.archivogeneral.gov.co/ley-594-de-2000/',
    },
    {
      referencia:
        'Ley 679 de 2001. Prevenir y contrarrestar la explotación, la pornografía y el turismo sexual con menores. Recuperado de:',
      link: 'http://www.oas.org/juridico/spanish/cyb_col_ley_679_2001.pdf',
    },
    {
      referencia:
        'Ley 962 de 2005.Simplificación y Racionalización de Trámites y procedimientos administrativos. Recuperado de: ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=17004#:~:text=%E2%80%9CPor%20la%20cual%20se%20dictan,p%C3%BAblicas%20o%20prestan%20servicios%20p%C3%BAblicos.%E2%80%9D',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
