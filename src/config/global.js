export default {
  global: {
    componenteFormativo: 'Ciberseguridad y documentación de incidentes',
    descripcionCurso:
      'Las empresas pueden verse expuestas a eventos e incidentes de seguridad que arriesgan los activos digitales, una forma de minimizar estos riesgos, es mediante buenas prácticas organizacionales, que conlleve a la creación de estándares y modelos de referencia que permitan documentar procesos dentro del sistema de gestión de seguridad de la información, realizar auditorías y trazabilidad de seguridad informática.',
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
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Documentación de los procesos',
            hash: 't_2_4',
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
      tema: 'Glosario ISO 27000',
      referencia:
        'International Organization for Standardization. Glosario ISO 27000. 2009. Web.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_virtualprovpro4391',
    },
    {
      tema:
        'Metodología para la implementación de un Sistema de Gestión de Seguridad de la Información basado en la familia de normas ISO/IEC 27000',
      referencia:
        'Javier Valencia-Duque, Francisco, and Mauricio Orozco-Alzate. "Metodología Para La Implementación De Un Sistema De Gestión De Seguridad De La Información Basado En La Familia De Normas ISO/IEC 27000." RISTI : Revista Ibérica De Sistemas E Tecnologias De Informação 22 (2017): 73-88. Web.',
      tipo: 'Artículo',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1i756fj/TN_cdi_scielo_journals_S1646_98952017000200006',
    },
    {
      tema:
        'Seguridad en informática : seguridad, auditoría, cortafuegos, ingeniería social, ISO 27000',
      referencia:
        'Catellanos H, Luis R. Seguridad En Informática : Seguridad, Auditoría, Cortafuegos, Ingeniería Social, ISO 27000. Saarbrücken, Alemania: Editorial Académica Española, 2012. Print.',
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
        'Planificación	Etapa en la que se determinan los procesos que se deben implementar a nivel de SPI, mediante la estructura de gestión del riesgo en la operación de la red de datos.',
    },
    {
      termino: 'Sistema de gestión sostenible',
      significado:
        'generan la percepción y aceptación de un estado más transparente, abierto al público, participativo y colaborativo, garantizando que la información entregada al ciudadano cuenta con controles y criterios de seguridad, documentado cada incidente que altere o modifique algún dato dentro del universo de información almacenada.',
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
        'Asobancaria, 2020. Guía de buenas prácticas para auditar la ciberseguridad. Recuperado de:',
      link:
        'https://www.asobancaria.com/wp-content/uploads/2020/09/Gui%CC%81a-de-Buenas-Pra%CC%81cticas-para-Auditar-la-CiberseguridadV4_compressed.pdf',
    },
    {
      referencia:
        'CONPES, 2011. Lineamientos de política para la Ciberseguridad y Ciberdefensa. Recuperado de: ',
      link:
        'https://tic.bogota.gov.co/sites/default/files/marco-legal/CONPES%203701%20DE%202011.pdf',
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
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
    },
    {
      referencia: '',
      link: '',
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
