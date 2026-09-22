/* ============================================================
   PLAN DE ESTUDIOS — VISITADOR MÉDICO
   Fuente académica:
   https://www.iesrp.edu.pe/visitador-medico/

   La web oficial organiza la malla en 4 módulos.
   Los "bloques" usados aquí son únicamente agrupaciones
   visuales para replicar el diseño de la landing.
   ============================================================ */

function initVisitadorCurriculum() {

  const root = document.querySelector("[data-study-plan]");

  if (!root) {
    return;
  }


  /* ==========================================================
     INFORMACIÓN OFICIAL DE LA MALLA CURRICULAR
     ========================================================== */

  const modules = {

    /* ========================================================
       MÓDULO 01
       MARKETING COMERCIAL
       ======================================================== */

    1: {

      badge:
        "MÓDULO 01 · MARKETING COMERCIAL",

      tab:
        "Marketing Comercial",

      title:
        "Marketing Comercial",

      description:
        "Formación especializada en fundamentos, estrategias y gestión del marketing comercial.",

      featureTitle:
        "Enfoque comercial",

      featureText:
        "Conoce el mercado, el consumidor, la comunicación, el precio, la marca y las estrategias de marketing.",

      detailTitle:
        "Temario de Marketing Comercial",

      detailText:
        "Este módulo desarrolla fundamentos de marketing, comportamiento del consumidor, comunicación comercial, gestión, marca, merchandising y responsabilidad profesional.",

      topics: [

        "El Marketing Comercial, Definiciones y principales Teorías",

        "Evolución del Marketing, Visión y objetivos",

        "Las 4 P del marketing",

        "Las empresas y el marketing como herramienta de crecimiento / P1",

        "Estrategias de Marketing / P2",

        "Necesidades del mercado y comportamiento del consumidor",

        "Introducción a la Venta",

        "El Cliente / P3",

        "Mercados objetivos y posicionamiento en el nuevo concepto del marketing moderno",

        "La comunicación. Elementos básicos. Comunicación verbal y no verbal / P4",

        "La asertividad como habilidad social y comunicativa. Tipos de comportamientos",

        "La Comunicación Comercial",

        "El Precio y su importancia en el Marketing Comercial como valor monetario / P5",

        "Gestión del Marketing Comercial",

        "El plan de Marketing",

        "El desarrollo de productos. Servicios y Marcas / P6",

        "La Marca en el contexto del Marketing Comercial",

        "Trabajo Grupal",

        "Merchandising en el punto de venta / P7",

        "Ética y Responsabilidad Social en Marketing",

        "El nuevo panorama del Marketing Comercial"

      ]
    },


    /* ========================================================
       MÓDULO 02
       CIENCIAS MÉDICAS
       ======================================================== */

    2: {

      badge:
        "MÓDULO 02 · CIENCIAS MÉDICAS",

      tab:
        "Ciencias Médicas",

      title:
        "Ciencias Médicas",

      description:
        "Fundamentos de anatomía, fisiología, farmacología y principales patologías.",

      featureTitle:
        "Base científica",

      featureText:
        "Comprende conceptos médicos y farmacológicos indispensables para desenvolverte profesionalmente en el sector salud.",

      detailTitle:
        "Temario de Ciencias Médicas",

      detailText:
        "El módulo aborda anatomía, fisiología, farmacología, infecciones, enfermedades neoplásicas y terapia farmacológica de distintas patologías.",

      topics: [

        "Anatomía humana: Definición, Ramas, Posición anatómica, planos y cavidades corporales",

        "Anatomía humana: Revisión de los principales aparatos y sistemas",

        "Fisiología general: El organismo: Composición, niveles de organización. Homeostasis y tejidos",

        "Fisiología general: Tejidos fundamentales del organismo: Epitelial, Conectivo, Muscular y Nervioso",

        "Farmacología: Definición, ramas y origen de los medicamentos",

        "Farmacocinética y Farmacodinámica: liberación, absorción, distribución, metabolismo y eliminación",

        "Formas farmacéuticas, Posología, RAM e interacciones farmacológicas",

        "Infecciones bacterianas: Clasificación. Características. Principales enfermedades que producen",

        "Infecciones virales: Clasificación. Características. Principales enfermedades que producen",

        "Infecciones bacterianas: Clasificación. Características. Principales enfermedades que producen",

        "Enfermedades neoplásicas: Definición, Clasificación, Factores de riesgo, Marcadores tumorales",

        "Terapia farmacológica de las principales patologías del sistema gastrointestinal: Gastritis, Dispepsia, Úlcera y Reflujo gastroesofágico",

        "Terapia farmacológica de las patologías hepáticas y biliares",

        "Cardiopatía isquémica: Angina de pecho e Infarto de Miocardio Agudo: Definición, etiología, clínica, diagnóstico y tratamiento",

        "Hipertensión Arterial: Definición, etiología, clasificación, clínica, diagnóstico y tratamiento",

        "Insuficiencia venosa: Várices. Definición, tipos, etiología, clínica, diagnóstico y tratamiento",

        "Infecciones respiratorias agudas: Rinofaringitis, Amigdalitis, Bronquitis",

        "EPOC, Asma Bronquial. Definición, etiología, clínica, diagnóstico y tratamiento",

        "TBC y Neumonías. Definición, etiología, clínica, diagnóstico y tratamiento",

        "Terapia farmacológica de las patologías urinarias: Infecciones del tracto urinario y Prostatitis",

        "Litiasis urinaria y Hemodiálisis",

        "Diabetes mellitus: insulina e hipoglicemiantes orales",

        "Patología tiroidea: Hiper e hipotiroidismo"

      ]
    },


    /* ========================================================
       MÓDULO 03
       MARKETING FARMACÉUTICO
       ======================================================== */

    3: {

      badge:
        "MÓDULO 03 · MARKETING FARMACÉUTICO",

      tab:
        "Marketing Farmacéutico",

      title:
        "Marketing Farmacéutico",

      description:
        "Preparación comercial especializada para desenvolverte dentro de la industria farmacéutica.",

      featureTitle:
        "Visita médica aplicada",

      featureText:
        "Desarrolla técnicas de representación, sondeo, promoción, presentación de beneficios, cierre y clínica de ventas.",

      detailTitle:
        "Temario de Marketing Farmacéutico",

      detailText:
        "Incluye fundamentos del marketing farmacéutico, segmentación, representación profesional, visita médica, técnicas comerciales y promoción.",

      topics: [

        "Fundamentos del M.K.F.",

        "Características del M.K.F.",

        "Certificación de la Calidad de los medicamentos",

        "Propiedad Industrial",

        "Segmentación del mercado farmacéutico",

        "Cómo ser un Representante Profesional",

        "Los estilos del comportamiento del médico",

        "Preparándose para ser un representante exitoso y cómo traspasar la sala de espera de un consultorio",

        "La visita tipo",

        "Características y beneficios de los productos farmacéuticos, cómo utilizarlas en el campo farmacéutico",

        "Técnicas de sondeo, cómo saber escuchar, técnicas de cierre",

        "Entrega del material para el desarrollo de la parte práctica",

        "Clínica de ventas",

        "Elaboración de documentos, clínica de ventas, pasantía",

        "Promoción en clínicas, hospitales y farmacias, sus objetivos y sus obligaciones"

      ]
    },


    /* ========================================================
       MÓDULO 04
       COMUNICACIÓN EFECTIVA
       ======================================================== */

    4: {

      badge:
        "MÓDULO 04 · COMUNICACIÓN EFECTIVA",

      tab:
        "Comunicación Efectiva",

      title:
        "Comunicación Efectiva",

      description:
        "Competencias comunicacionales y humanas para desenvolverte con seguridad y profesionalismo.",

      featureTitle:
        "Habilidades comunicativas",

      featureText:
        "Fortalece expresión oral, asertividad, inteligencia emocional, negociación, liderazgo y relaciones humanas.",

      detailTitle:
        "Temario de Comunicación Efectiva",

      detailText:
        "El módulo trabaja comunicación verbal y no verbal, oratoria, habilidades sociales, negociación, liderazgo, resiliencia y manejo del estrés.",

      topics: [

        "La comunicación. Elementos básicos. Comunicación verbal y no verbal",

        "El lenguaje, funciones, pensamiento",

        "El dialecto y el sociolecto",

        "La oratoria. Características",

        "Clases de discursos y cualidades del orador",

        "Pautas y recomendaciones para una comunicación efectiva",

        "La inhibición, el miedo escénico, la falta de escucha activa, las muletillas o bastoncillos, etc.",

        "La asertividad como habilidad social y comunicativa. Tipos de comportamientos",

        "El discurso. Definición, partes e importancia. Estructura del discurso, cómo elaborarlo",

        "El movimiento de manos, mirada, postura, desplazamiento y exposición",

        "Cualidades y defectos del orador. Obstáculos y cómo vencerlos",

        "La inteligencia emocional y su relación con la comunicación efectiva",

        "La autoestima, características e importancia",

        "El conflicto, su clasificación y estrategias del manejo del conflicto",

        "La resiliencia, importancia y características",

        "La negociación, importancia, el negociador y sus características",

        "El liderazgo, importancia, características y tipos de liderazgo",

        "Técnicas de expresión en público y manejo de la expresión oral",

        "Diferentes tipos de intervenciones orales",

        "La conferencia, el seminario, el simposio, el foro, el panel, la mesa redonda y el debate",

        "La conferencia: partes y características, desarrollo y exposición de un tema",

        "La entrevista, importancia, características y tipos de entrevista",

        "Las habilidades sociales, características",

        "Relaciones humanas, características e importancia",

        "El estrés laboral, características y estrategias para el buen manejo del estrés laboral"

      ]
    }

  };


  /* ==========================================================
     ELEMENTOS DOM
     ========================================================== */

  const tabs =
    Array.from(
      root.querySelectorAll(
        ".study-plan__tab"
      )
    );


  const panel =
    root.querySelector(
      ".study-plan__panel"
    );


  const badge =
    root.querySelector(
      "[data-module-badge]"
    );


  const title =
    root.querySelector(
      "[data-module-title]"
    );


  const blocksContainer =
    root.querySelector(
      "[data-cycles]"
    );


  const topicCount =
    root.querySelector(
      "[data-topic-count]"
    );


  const description =
    root.querySelector(
      "[data-module-description]"
    );


  const featureTitle =
    root.querySelector(
      "[data-feature-title]"
    );


  const featureText =
    root.querySelector(
      "[data-feature-text]"
    );


  const detailButton =
    root.querySelector(
      "[data-detail-button]"
    );


  const detailBox =
    root.querySelector(
      "[data-module-detail]"
    );


  const detailTitle =
    root.querySelector(
      "[data-detail-title]"
    );


  const detailText =
    root.querySelector(
      "[data-detail-text]"
    );


  /* ==========================================================
     DIVIDIR EL TEMARIO EN 2 BLOQUES VISUALES
     ========================================================== */

  function splitTopics(topics) {

    const middle =
      Math.ceil(
        topics.length / 2
      );


    return [
      topics.slice(
        0,
        middle
      ),

      topics.slice(
        middle
      )
    ];

  }


  /* ==========================================================
     CREAR BLOQUE VISUAL
     ========================================================== */

  function createBlock(
    topics,
    index,
    totalTopics
  ) {

    const article =
      document.createElement(
        "article"
      );


    article.className =
      "study-plan__cycle";


    const header =
      document.createElement(
        "header"
      );


    header.className =
      "study-plan__cycle-header";


    const roman =
      document.createElement(
        "span"
      );


    roman.className =
      "study-plan__cycle-roman";


    roman.textContent =
      index === 0
        ? "I"
        : "II";


    const heading =
      document.createElement(
        "div"
      );


    heading.className =
      "study-plan__cycle-heading";


    const strong =
      document.createElement(
        "strong"
      );


    strong.textContent =
      `Bloque ${index + 1}`;


    const total =
      document.createElement(
        "span"
      );


    total.textContent =
      `${topics.length} temas`;


    heading.append(
      strong,
      total
    );


    header.append(
      roman,
      heading
    );


    const list =
      document.createElement(
        "ul"
      );


    list.className =
      "study-plan__courses";


    topics.forEach(
      (topic) => {

        const item =
          document.createElement(
            "li"
          );


        item.className =
          "study-plan__course";


        item.textContent =
          topic;


        list.appendChild(
          item
        );

      }
    );


    article.append(
      header,
      list
    );


    return article;
  }


  /* ==========================================================
     ACTUALIZAR TAB
     ========================================================== */

  function updateTabs(
    moduleNumber
  ) {

    tabs.forEach(
      (tab) => {

        const isActive =
          Number(
            tab.dataset.module
          ) === moduleNumber;


        tab.classList.toggle(
          "is-active",
          isActive
        );


        tab.setAttribute(
          "aria-selected",
          String(isActive)
        );


        tab.tabIndex =
          isActive
            ? 0
            : -1;

      }
    );

  }


  /* ==========================================================
     RENDERIZAR MÓDULO
     ========================================================== */

  function renderModule(
    moduleNumber,
    updateHash = true
  ) {

    const data =
      modules[moduleNumber];


    if (!data) {
      return;
    }


    panel.classList.add(
      "is-changing"
    );


    window.setTimeout(
      () => {

        /* ------------------------------------------
           Tabs
           ------------------------------------------ */

        updateTabs(
          moduleNumber
        );


        /* ------------------------------------------
           Contenido principal
           ------------------------------------------ */

        badge.textContent =
          data.badge;


        title.textContent =
          data.title;


        topicCount.textContent =
          data.topics.length;


        description.textContent =
          data.description;


        featureTitle.textContent =
          data.featureTitle;


        featureText.textContent =
          data.featureText;


        detailTitle.textContent =
          data.detailTitle;


        detailText.textContent =
          data.detailText;


        /* ------------------------------------------
           Generar los dos bloques
           ------------------------------------------ */

        blocksContainer.innerHTML =
          "";


        const topicBlocks =
          splitTopics(
            data.topics
          );


        topicBlocks.forEach(
          (topics, index) => {

            blocksContainer.appendChild(
              createBlock(
                topics,
                index,
                data.topics.length
              )
            );

          }
        );


        /* ------------------------------------------
           Accesibilidad
           ------------------------------------------ */

        panel.setAttribute(
          "aria-labelledby",
          `study-tab-${moduleNumber}`
        );


        /* ------------------------------------------
           Cerrar detalle cuando cambia módulo
           ------------------------------------------ */

        detailBox.hidden =
          true;


        detailButton.setAttribute(
          "aria-expanded",
          "false"
        );


        const buttonLabel =
          detailButton.querySelector(
            "span"
          );


        if (buttonLabel) {

          buttonLabel.textContent =
            "Ver detalle del módulo";

        }


        /* ------------------------------------------
           Hash
           ------------------------------------------ */

        if (updateHash) {

          history.replaceState(
            null,
            "",
            `#modulo-${moduleNumber}`
          );

        }


        /* ------------------------------------------
           Entrada
           ------------------------------------------ */

        requestAnimationFrame(
          () => {

            panel.classList.remove(
              "is-changing"
            );

          }
        );

      },
      130
    );

  }


  /* ==========================================================
     EVENTOS CLICK
     ========================================================== */

  tabs.forEach(
    (tab) => {

      tab.addEventListener(
        "click",
        () => {

          renderModule(
            Number(
              tab.dataset.module
            )
          );

        }
      );

    }
  );


  /* ==========================================================
     NAVEGACIÓN CON TECLADO
     ========================================================== */

  tabs.forEach(
    (tab, index) => {

      tab.addEventListener(
        "keydown",
        (event) => {

          let nextIndex = null;


          switch (
            event.key
          ) {

            case "ArrowRight":
            case "ArrowDown":

              nextIndex =
                (
                  index + 1
                ) % tabs.length;

              break;


            case "ArrowLeft":
            case "ArrowUp":

              nextIndex =
                (
                  index -
                  1 +
                  tabs.length
                ) % tabs.length;

              break;


            case "Home":

              nextIndex = 0;

              break;


            case "End":

              nextIndex =
                tabs.length - 1;

              break;


            default:

              return;

          }


          event.preventDefault();


          const nextTab =
            tabs[nextIndex];


          nextTab.focus();


          renderModule(
            Number(
              nextTab.dataset.module
            )
          );

        }
      );

    }
  );


  /* ==========================================================
     DETALLE EXPANDIBLE
     ========================================================== */

  detailButton.addEventListener(
    "click",
    () => {

      const isExpanded =
        detailButton.getAttribute(
          "aria-expanded"
        ) === "true";


      const nextState =
        !isExpanded;


      detailButton.setAttribute(
        "aria-expanded",
        String(nextState)
      );


      detailBox.hidden =
        !nextState;


      const label =
        detailButton.querySelector(
          "span"
        );


      if (label) {

        label.textContent =
          nextState
            ? "Ocultar detalle"
            : "Ver detalle del módulo";

      }

    }
  );


  /* ==========================================================
     HASH INICIAL
     ========================================================== */

  const match =
    window.location.hash.match(
      /^#modulo-([1-4])$/
    );


  if (match) {

    renderModule(
      Number(
        match[1]
      ),
      false
    );

  } else {

    renderModule(
      1,
      false
    );

  }

}