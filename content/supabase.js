// Supabase module — 5 lessons
export default [
  // Lesson 1: El problema que resuelve
  {
    title: 'El problema que resuelve Supabase',
    sections: [
      { type: 'text', content: 'Tu IA puede generar una interfaz hermosa — botones, formularios, animaciones. Pero cuando un usuario se registra, donde se guarda su cuenta? Cuando llenan un formulario, a donde van los datos? Ahi es donde entra <strong>Supabase</strong>.' },
      {
        type: 'analogy',
        content: 'Imagina que construiste una <strong>tienda fisica increible</strong>: vitrinas hermosas, iluminacion perfecta, musica ambiental. Pero no tienes <strong>almacen</strong>, no tienes <strong>caja registradora</strong>, y no hay <strong>sistema de inventario</strong>. La tienda se ve genial pero no puede operar. Supabase es tu almacen, tu caja y tu inventario — todo en uno.'
      },
      { type: 'heading', content: 'Frontend vs Backend' },
      {
        type: 'table',
        headers: ['', 'Frontend (lo que se ve)', 'Backend (lo que no se ve)'],
        rows: [
          ['Que es', 'Botones, paginas, formularios, colores', 'Base de datos, logins, logica del servidor'],
          ['Quien lo hace', 'Tu IA genera esto facilmente', 'Normalmente requiere un desarrollador backend'],
          ['Con Supabase', 'Tu IA sigue haciendolo', 'Supabase lo resuelve sin codigo extra'],
        ]
      },
      {
        type: 'key-point',
        content: 'Supabase te da un backend completo <strong>sin necesidad de programar un servidor</strong>. Tu IA genera el frontend, Supabase maneja todo lo demas.'
      },
      {
        type: 'quiz',
        question: 'Que problema resuelve Supabase?',
        options: [
          'A) Genera codigo con IA',
          'B) Te da un backend (base de datos, logins, almacenamiento) sin programar servidor',
          'C) Disena interfaces bonitas',
          'D) Reemplaza a GitHub'
        ],
        correct: 1
      }
    ]
  },

  // Lesson 2: Qué te da Supabase
  {
    title: 'Que te da Supabase',
    sections: [
      { type: 'text', content: 'Supabase es como una navaja suiza para tu backend. Con un solo servicio obtienes todo lo que una app moderna necesita para funcionar.' },
      { type: 'heading', content: 'Los 5 superpoderes de Supabase' },
      {
        type: 'list',
        items: [
          '<strong>Base de datos (PostgreSQL)</strong> — Donde guardas la informacion. Piensa en una hoja de Excel super potente: tablas con filas y columnas para usuarios, productos, pedidos, etc.',
          '<strong>Autenticacion (Auth)</strong> — Sistema de login listo para usar. Login con Google, email/contrasena, GitHub, y mas. En minutos, no semanas.',
          '<strong>Almacenamiento (Storage)</strong> — Para subir archivos: fotos de perfil, documentos, imagenes de productos. Como un Google Drive privado para tu app.',
          '<strong>Realtime</strong> — Actualizaciones en vivo. Si alguien agrega un mensaje en un chat, todos los demas lo ven al instante. Como WhatsApp.',
          '<strong>Edge Functions</strong> — Mini-programas que corren en el servidor. Para cosas como enviar emails, procesar pagos, o conectar con otras APIs.'
        ]
      },
      {
        type: 'diagram',
        content: '  Tu App (Frontend)\n    |\n    |--- Auth --------→ Login con Google, email, etc.\n    |--- Database ----→ Guardar/leer datos (usuarios, productos)\n    |--- Storage -----→ Subir/descargar archivos\n    |--- Realtime ----→ Actualizaciones en vivo\n    |--- Functions ---→ Logica del servidor\n    |\n  Supabase (Backend)'
      },
      {
        type: 'key-point',
        content: 'Lo mejor: tu IA (Cursor, Claude) sabe como conectar tu app con Supabase. Le dices "agrega login con Google usando Supabase" y genera el codigo necesario.'
      },
      {
        type: 'quiz',
        question: 'Cual de estos NO es un servicio de Supabase?',
        options: [
          'A) Base de datos',
          'B) Autenticacion (login)',
          'C) Generacion de codigo con IA',
          'D) Almacenamiento de archivos'
        ],
        correct: 2
      }
    ]
  },

  // Lesson 3: Supabase vs Firebase vs propio
  {
    title: 'Supabase vs alternativas',
    sections: [
      { type: 'text', content: 'Supabase no es la unica opcion para tu backend, pero hay razones claras por las que es la mejor eleccion para vibe coding.' },
      {
        type: 'table',
        headers: ['', 'Supabase', 'Firebase (Google)', 'Backend propio'],
        rows: [
          ['Costo inicial', 'Gratis generoso', 'Gratis limitado', 'Servidor: $5-20/mes'],
          ['Base de datos', 'PostgreSQL (SQL)', 'NoSQL (Firestore)', 'Tu eliges'],
          ['Open source', 'Si', 'No', 'Depende'],
          ['IA lo entiende', 'Muy bien (SQL estandar)', 'Bien', 'Variable'],
          ['Dificultad', 'Baja', 'Baja-Media', 'Alta'],
          ['Vendor lock-in', 'Bajo (puedes migrar)', 'Alto (ecosistema Google)', 'Ninguno'],
          ['Ideal para', 'Vibe coding, startups', 'Apps moviles Google', 'Equipos con devs'],
        ]
      },
      { type: 'heading', content: 'Por que Supabase es ideal para vibe coding' },
      {
        type: 'list',
        items: [
          '<strong>SQL es universal</strong> — Las IAs entienden SQL perfectamente porque es un lenguaje con 50 anos de historia. Cuando le pides a Claude "crea una tabla de usuarios", genera SQL impecable.',
          '<strong>API automatica</strong> — Supabase genera automaticamente una API para cada tabla que creas. No necesitas programar endpoints.',
          '<strong>Dashboard visual</strong> — Puedes ver y editar tus datos desde el navegador, como una hoja de calculo.',
          '<strong>Plan gratuito generoso</strong> — 500 MB de base de datos, 1 GB de almacenamiento, 50,000 usuarios activos mensuales. Suficiente para empezar y validar tu idea.'
        ]
      },
      {
        type: 'key-point',
        content: 'Para un vibe coder, Supabase es la opcion mas practica: tu IA genera el codigo de conexion automaticamente, el plan gratis es generoso, y si tu proyecto crece, puedes escalar sin cambiarte de plataforma.'
      }
    ]
  },

  // Lesson 4: Supabase en tu stack
  {
    title: 'Supabase en tu stack de vibe coding',
    sections: [
      { type: 'text', content: 'Veamos como encaja Supabase en el flujo completo de crear una app con IA.' },
      { type: 'heading', content: 'El stack completo del vibe coder' },
      {
        type: 'diagram',
        content: '  ┌─────────────────────────────────────────┐\n  │            TU (Product Manager)          │\n  │  Describes lo que quieres en espanol     │\n  └──────────────────┬──────────────────────┘\n                     │\n                     v\n  ┌─────────────────────────────────────────┐\n  │         IA (Tu equipo de desarrollo)     │\n  │  Cursor / Claude / Copilot              │\n  │  Genera frontend + conexion a Supabase  │\n  └──────────────────┬──────────────────────┘\n                     │\n            ┌────────┴────────┐\n            v                 v\n  ┌──────────────┐  ┌──────────────────┐\n  │   GitHub     │  │    Supabase      │\n  │  Guarda el   │  │  Base de datos   │\n  │   codigo     │  │  Auth, Storage   │\n  └──────┬───────┘  └──────────────────┘\n         │\n         v\n  ┌──────────────┐\n  │ Vercel       │\n  │ Publica la   │\n  │ app en vivo  │\n  └──────────────┘'
      },
      { type: 'heading', content: 'Ejemplo practico' },
      { type: 'text', content: 'Quieres crear una app donde clientes reserven citas para tu consultoria:' },
      {
        type: 'list',
        ordered: true,
        items: [
          '<strong>Le dices a tu IA</strong>: "Crea una app de reservas con calendario, formulario de datos del cliente, y panel de admin para ver las citas"',
          '<strong>La IA genera</strong>: El frontend (paginas, botones, calendario visual)',
          '<strong>Conecta con Supabase</strong>: La IA crea una tabla <code>reservas</code> con columnas: nombre, email, fecha, hora, servicio',
          '<strong>Auth de Supabase</strong>: Login con Google para que los clientes accedan a su historial',
          '<strong>Storage de Supabase</strong>: Los clientes pueden subir documentos si es necesario',
          '<strong>Lo publicas</strong>: Push a GitHub → Vercel lo despliega automaticamente'
        ]
      },
      {
        type: 'key-point',
        content: 'Tu no programas nada directamente. Tu rol es <strong>dirigir</strong>: decides que hace la app, la IA la construye, Supabase maneja los datos, y GitHub + Vercel la publican.'
      }
    ]
  },

  // Lesson 5: Getting Started
  {
    title: 'Empezando con Supabase',
    sections: [
      { type: 'text', content: 'Veamos los pasos basicos para crear tu primer proyecto en Supabase. No necesitas escribir codigo — todo se hace desde el dashboard web.' },
      { type: 'heading', content: 'Paso 1: Crear una cuenta' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ve a <strong>supabase.com</strong>',
          'Clic en "Start your project"',
          'Inicia sesion con tu cuenta de <strong>GitHub</strong> (si, se conectan!)',
          'Ya tienes cuenta de Supabase'
        ]
      },
      { type: 'heading', content: 'Paso 2: Crear un proyecto' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Clic en "New Project"',
          'Nombre: <strong>mi-primera-app</strong>',
          'Contrasena de base de datos: <strong>genera una segura</strong> (guardala!)',
          'Region: la mas cercana a tus usuarios',
          'Clic en "Create new project" — toma ~2 minutos'
        ]
      },
      { type: 'heading', content: 'Paso 3: Crear una tabla' },
      { type: 'text', content: 'Una tabla es como una hoja de Excel. Vamos a crear una para guardar contactos:' },
      {
        type: 'code',
        title: 'SQL Editor en Supabase',
        content: '<span class="keyword">CREATE TABLE</span> <span class="accent">contactos</span> (\n  <span class="accent">id</span>        <span class="command">SERIAL PRIMARY KEY</span>,\n  <span class="accent">nombre</span>    <span class="command">TEXT</span> <span class="keyword">NOT NULL</span>,\n  <span class="accent">email</span>     <span class="command">TEXT</span> <span class="keyword">NOT NULL</span>,\n  <span class="accent">mensaje</span>   <span class="command">TEXT</span>,\n  <span class="accent">creado</span>    <span class="command">TIMESTAMP</span> <span class="keyword">DEFAULT NOW</span>()\n);\n\n<span class="comment">-- Insertar un contacto de prueba:</span>\n<span class="keyword">INSERT INTO</span> <span class="accent">contactos</span> (nombre, email, mensaje)\n<span class="keyword">VALUES</span> (<span class="string">\'Maria Garcia\'</span>, <span class="string">\'maria@email.com\'</span>, <span class="string">\'Hola, quiero info\'</span>);'
      },
      { type: 'heading', content: 'Paso 4: Conectar desde tu app' },
      { type: 'text', content: 'Supabase te da una URL y una clave API. Tu IA los usa para conectar tu frontend:' },
      {
        type: 'code',
        title: 'JavaScript (generado por tu IA)',
        content: '<span class="keyword">import</span> { createClient } <span class="keyword">from</span> <span class="string">\'@supabase/supabase-js\'</span>\n\n<span class="keyword">const</span> supabase = createClient(\n  <span class="string">\'https://tu-proyecto.supabase.co\'</span>,\n  <span class="string">\'tu-clave-publica\'</span>\n)\n\n<span class="comment">// Leer todos los contactos:</span>\n<span class="keyword">const</span> { data } = <span class="keyword">await</span> supabase\n  .from(<span class="string">\'contactos\'</span>)\n  .select(<span class="string">\'*\'</span>)\n\n<span class="comment">// data = [{nombre: "Maria", email: "maria@...", ...}]</span>'
      },
      {
        type: 'key-point',
        content: 'No necesitas escribir este codigo tu mismo. Le dices a tu IA "conecta el formulario de contacto con Supabase" y ella genera todo esto automaticamente. Tu solo necesitas copiar la URL y la clave de tu dashboard.'
      },
      {
        type: 'quiz',
        question: 'Que necesitas de Supabase para conectar tu app?',
        options: [
          'A) Solo la contrasena de la base de datos',
          'B) La URL del proyecto y la clave API publica',
          'C) Un servidor propio donde instalar Supabase',
          'D) Saber programar en SQL avanzado'
        ],
        correct: 1
      }
    ]
  }
];
