// AI Models module — 5 lessons
export default [
  // Lesson 1: Timeline
  {
    title: 'La evolucion de los modelos de IA',
    sections: [
      { type: 'text', content: 'Los modelos de IA han cambiado drasticamente en los ultimos dos anos. Entender esta evolucion te ayuda a elegir la herramienta correcta y a entender por que el vibe coding es posible hoy pero no lo era hace poco.' },
      { type: 'heading', content: 'La linea del tiempo que importa' },
      {
        type: 'table',
        headers: ['Periodo', 'Modelos clave', 'Que cambio'],
        rows: [
          ['2023', 'GPT-3.5, GPT-4, Claude 2', 'Buenos escribiendo texto, limitados en codigo largo. Contexto corto (4K-8K tokens).'],
          ['Ene-Jun 2024', 'Claude 3 (Haiku/Sonnet/Opus), GPT-4 Turbo', 'Mucho mejores en codigo. Contexto mas largo (128K-200K tokens). Pueden "ver" proyectos enteros.'],
          ['Sep 2024', 'OpenAI o1', 'Primer modelo de "razonamiento". Piensa paso a paso antes de responder. Salto enorme en programacion compleja.'],
          ['Nov-Dic 2024', 'Claude 3.5 Sonnet, Gemini 2.0', 'Mas rapidos, mas baratos, multimodales. El vibe coding se vuelve practico.'],
          ['2025', 'Claude Opus 4, GPT-4.5, o3, Gemini 2.5', 'Modelos de razonamiento de segunda generacion. Pueden manejar proyectos completos, no solo archivos individuales.'],
        ]
      },
      {
        type: 'key-point',
        content: 'El vibe coding es posible porque los modelos de 2024-2025 pueden entender proyectos enteros (no solo un archivo) y razonar sobre problemas complejos (no solo autocompletar).'
      },
      {
        type: 'quiz',
        question: 'Que hizo especial al modelo o1 de OpenAI?',
        options: [
          'A) Fue el primer modelo gratuito',
          'B) Fue el primer modelo que "razona" paso a paso antes de responder',
          'C) Fue el primero en generar imagenes',
          'D) Fue el mas barato del mercado'
        ],
        correct: 1
      }
    ]
  },

  // Lesson 2: Reasoning models
  {
    title: 'Modelos de razonamiento',
    sections: [
      { type: 'text', content: 'Los modelos de razonamiento representan el avance mas importante para el vibe coding. Entiende que son y por que cambian las reglas del juego.' },
      {
        type: 'analogy',
        content: 'Los modelos anteriores eran como un <strong>estudiante que contesta impulsivamente</strong> — lee la pregunta y escribe lo primero que se le ocurre. Los modelos de razonamiento son como un <strong>estudiante que muestra su trabajo</strong>: lee la pregunta, piensa paso a paso, revisa su logica, detecta errores, y recien entonces da su respuesta.'
      },
      { type: 'heading', content: 'Modelos de razonamiento principales' },
      {
        type: 'table',
        headers: ['Modelo', 'Empresa', 'Fortaleza'],
        rows: [
          ['o1 / o3', 'OpenAI', 'Razonamiento matematico y logico profundo'],
          ['Claude Opus 4', 'Anthropic', 'Codigo complejo, proyectos grandes, razonamiento extenso'],
          ['DeepSeek R1', 'DeepSeek', 'Open source, competitivo con los mejores, mucho mas barato'],
          ['Gemini 2.5 Pro', 'Google', 'Multimodal (texto + imagenes + video), contexto enorme'],
        ]
      },
      { type: 'heading', content: 'Por que esto importa para el vibe coding' },
      {
        type: 'list',
        items: [
          '<strong>Menos bugs</strong> — El modelo piensa antes de escribir codigo, detectando problemas logicos de antemano.',
          '<strong>Mejor arquitectura</strong> — Puede planificar la estructura de tu app antes de generar el codigo.',
          '<strong>Debugging superior</strong> — Cuando algo falla, puede razonar sobre las posibles causas en lugar de adivinar.',
          '<strong>Tareas complejas</strong> — Puede implementar features que involucran multiples archivos y logica interconectada.'
        ]
      },
      {
        type: 'key-point',
        content: 'Para tareas simples, un modelo rapido (como Haiku o GPT-4o mini) es suficiente. Para tareas complejas (disenar la arquitectura de tu app, debuggear un error raro), un modelo de razonamiento marca una diferencia enorme.'
      }
    ]
  },

  // Lesson 3: Context Windows
  {
    title: 'Context windows explicadas',
    sections: [
      { type: 'text', content: 'El <strong>context window</strong> (ventana de contexto) es la cantidad de informacion que un modelo de IA puede "ver" al mismo tiempo. Es uno de los factores mas importantes al elegir un modelo para vibe coding.' },
      {
        type: 'analogy',
        content: 'Imagina que le pides a un consultor que revise tu negocio. Un consultor con <strong>contexto pequeno</strong> (4K tokens) solo puede ver una pagina de tu plan de negocios a la vez — te da consejos fragmentados. Un consultor con <strong>contexto grande</strong> (200K tokens) puede leer tu plan completo, tus finanzas, tu analisis de mercado, todo al mismo tiempo — te da consejos coherentes que consideran el panorama completo.'
      },
      { type: 'heading', content: 'La evolucion del contexto' },
      {
        type: 'table',
        headers: ['Tamano', 'Equivale a', 'Que puede "ver"'],
        rows: [
          ['4K tokens', '~3 paginas', 'Una funcion o fragmento de codigo'],
          ['8K tokens', '~6 paginas', 'Un archivo completo'],
          ['32K tokens', '~24 paginas', 'Varios archivos'],
          ['128K tokens', '~96 paginas', 'Un proyecto mediano entero'],
          ['200K tokens', '~150 paginas', 'Un proyecto grande entero'],
          ['1M+ tokens', '~750 paginas', 'Multiples proyectos o un codebase enorme'],
        ]
      },
      { type: 'heading', content: 'Por que importa para ti' },
      { type: 'text', content: 'Cuando le pides a una IA que modifique tu app, necesita entender <strong>todo el proyecto</strong>, no solo el archivo que quieres cambiar. Si la IA solo ve un archivo, puede crear codigo que no funciona con el resto.' },
      {
        type: 'code',
        title: 'Ejemplo: la diferencia',
        content: '<span class="comment"># Con contexto pequeno (4K):</span>\n<span class="accent">IA ve:</span> solo el archivo login.js\n<span class="accent">Resultado:</span> crea un login que no se conecta con tu sistema\n          de usuarios existente. <span class="output">Bug.</span>\n\n<span class="comment"># Con contexto grande (200K):</span>\n<span class="accent">IA ve:</span> login.js + users.js + database.js + config.js\n<span class="accent">Resultado:</span> crea un login que se integra perfectamente\n          con todo tu proyecto. <span class="string">Funciona!</span>'
      },
      {
        type: 'key-point',
        content: 'Para vibe coding efectivo, necesitas modelos con al menos 128K tokens de contexto. Esto permite que la IA entienda tu proyecto completo y genere codigo que funciona con todo lo demas.'
      },
      {
        type: 'quiz',
        question: 'Por que es importante un context window grande para el vibe coding?',
        options: [
          'A) Porque hace al modelo mas rapido',
          'B) Porque permite que la IA vea todo tu proyecto y genere codigo coherente',
          'C) Porque es mas barato',
          'D) Porque permite generar imagenes'
        ],
        correct: 1
      }
    ]
  },

  // Lesson 4: Choosing the right model
  {
    title: 'Elegir el modelo correcto',
    sections: [
      { type: 'text', content: 'No todos los modelos son iguales, y no siempre necesitas el mas potente. Usar el modelo correcto para cada tarea te ahorra tiempo y dinero.' },
      {
        type: 'analogy',
        content: 'No contratas a un <strong>director financiero</strong> para que conteste el telefono, ni a un <strong>recepcionista</strong> para que disene tu estrategia fiscal. Cada modelo tiene su rol. Usa el correcto para cada tarea.'
      },
      { type: 'heading', content: 'Guia rapida de seleccion' },
      {
        type: 'table',
        headers: ['Tarea', 'Nivel', 'Modelos recomendados'],
        rows: [
          ['Renombrar variables, formatear codigo', 'Basico', 'Haiku, GPT-4o mini, Gemini Flash'],
          ['Escribir una funcion, crear un componente', 'Medio', 'Sonnet 4, GPT-4o, Gemini Pro'],
          ['Disenar la arquitectura de una app', 'Avanzado', 'Opus 4, o3, Gemini 2.5 Pro'],
          ['Debuggear errores complejos', 'Avanzado', 'Opus 4, o3'],
          ['Refactorizar un proyecto entero', 'Avanzado', 'Opus 4 (contexto largo)'],
          ['Explicar que hace un codigo', 'Basico', 'Cualquier modelo funciona'],
        ]
      },
      { type: 'heading', content: 'En la practica: como funcionan las herramientas' },
      {
        type: 'list',
        items: [
          '<strong>Cursor</strong> — Te deja elegir entre modelos. Usa el rapido para autocompletado y cambia al potente para tareas complejas.',
          '<strong>Claude Code</strong> — Usa Sonnet por defecto (rapido y bueno). Puedes cambiar a Opus para tareas dificiles.',
          '<strong>GitHub Copilot</strong> — Usa GPT-4o por defecto. Optimizado para autocompletado rapido.',
          '<strong>ChatGPT / Claude.ai</strong> — Interfaz web donde puedes elegir el modelo directamente.'
        ]
      },
      {
        type: 'key-point',
        content: 'Regla practica: empieza con un modelo rapido y barato (Sonnet, GPT-4o). Si el resultado no es bueno o la tarea es compleja, sube a un modelo de razonamiento (Opus, o3). No desperdicies el modelo potente en tareas simples.'
      },
      {
        type: 'quiz',
        question: 'Para disenar la arquitectura completa de una app, que tipo de modelo usarias?',
        options: [
          'A) El mas rapido y barato disponible',
          'B) Cualquiera, todos dan el mismo resultado',
          'C) Un modelo de razonamiento avanzado como Opus o o3',
          'D) No necesitas IA para esto'
        ],
        correct: 2
      }
    ]
  },

  // Lesson 5: El toolkit del vibe coder
  {
    title: 'El toolkit del vibe coder en 2025',
    sections: [
      { type: 'text', content: 'Vamos a juntar todo lo que aprendiste. Aqui esta el ecosistema completo de herramientas que un vibe coder usa para crear productos reales.' },
      { type: 'heading', content: 'Tu equipo (de herramientas)' },
      {
        type: 'diagram',
        content: '  ┌─────────────────────────────────────────────────────┐\n  │                   TU (CEO / PM)                     │\n  │        Defines que construir y por que               │\n  └───────────────────────┬─────────────────────────────┘\n                          │\n          ┌───────────────┼───────────────┐\n          v               v               v\n  ┌──────────────┐ ┌────────────┐ ┌──────────────┐\n  │   Cursor     │ │   Claude   │ │  v0/bolt.new │\n  │   Editor +   │ │   Code     │ │  Prototipo   │\n  │   IA         │ │   Terminal │ │  de UI       │\n  └──────┬───────┘ └─────┬──────┘ └──────┬───────┘\n         └───────────────┼───────────────┘\n                         v\n                ┌──────────────┐\n                │   GitHub     │\n                │   Codigo     │\n                │   versionado │\n                └───────┬──────┘\n                ┌───────┼───────┐\n                v               v\n        ┌──────────┐    ┌──────────────┐\n        │ Supabase │    │   Vercel     │\n        │ Backend  │    │   Hosting    │\n        └──────────┘    └──────────────┘'
      },
      { type: 'heading', content: 'Resumen de roles' },
      {
        type: 'table',
        headers: ['Herramienta', 'Rol', 'Costo'],
        rows: [
          ['Cursor', 'Tu editor principal — escribes instrucciones, la IA genera codigo', 'Gratis / $20 al mes'],
          ['Claude Code / ChatGPT', 'Para consultas, debugging, y tareas que necesitan razonamiento', 'Gratis / $20 al mes'],
          ['v0 / bolt.new', 'Generar prototipos de UI rapidamente', 'Gratis limitado'],
          ['GitHub', 'Guardar y versionar tu codigo', 'Gratis'],
          ['Supabase', 'Backend: base de datos, auth, storage', 'Gratis (plan generoso)'],
          ['Vercel / Netlify', 'Publicar tu app en internet', 'Gratis (proyectos pequenos)'],
        ]
      },
      { type: 'heading', content: 'Tu nuevo flujo de trabajo' },
      {
        type: 'list',
        ordered: true,
        items: [
          '<strong>Idea</strong> — Defines que quieres construir (ej: "una app de reservas para mi consultoria")',
          '<strong>Prototipo</strong> — Usas v0 o bolt.new para generar un prototipo visual rapido',
          '<strong>Desarrollo</strong> — En Cursor, le das instrucciones a la IA para construir la app completa',
          '<strong>Backend</strong> — Conectas Supabase para base de datos, logins y almacenamiento',
          '<strong>Versionado</strong> — Git push a GitHub para guardar cada avance',
          '<strong>Publicacion</strong> — Vercel se conecta a GitHub y publica automaticamente',
          '<strong>Iteracion</strong> — Recibes feedback, le dices a la IA que mejorar, push, y se actualiza solo'
        ]
      },
      {
        type: 'analogy',
        content: 'Tu eres el <strong>Product Manager</strong>. La IA es tu <strong>equipo de ingenieria</strong>. GitHub es la <strong>oficina</strong> donde se guarda el trabajo. Supabase es la <strong>infraestructura</strong>. Y Vercel es el <strong>canal de distribucion</strong>.'
      },
      {
        type: 'key-point',
        content: 'Todo este stack cuesta <strong>$0 para empezar</strong>. Puedes crear y publicar una app real sin gastar un centavo. Los planes de pago solo importan cuando tu proyecto crece y necesitas mas capacidad.'
      },
      {
        type: 'quiz',
        question: 'En el stack del vibe coder, cual es TU rol principal?',
        options: [
          'A) Escribir codigo manualmente',
          'B) Dirigir: definir que construir, dar instrucciones a la IA, y tomar decisiones de producto',
          'C) Administrar servidores',
          'D) Disenar graficos en Photoshop'
        ],
        correct: 1
      }
    ]
  }
];
