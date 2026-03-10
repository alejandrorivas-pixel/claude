// GitHub module — 8 lessons
export default [
  // Lesson 1: ¿Qué es GitHub?
  {
    title: 'Que es GitHub?',
    sections: [
      { type: 'text', content: 'Si usas IA para generar codigo (vibe coding), necesitas un lugar seguro donde guardarlo. Ese lugar es <strong>GitHub</strong>.' },
      {
        type: 'analogy',
        content: 'Piensa en <strong>Google Drive, pero para codigo</strong>. Asi como guardas documentos en Drive y los compartes con tu equipo, GitHub guarda codigo y permite que varias personas (o IAs) colaboren en el.'
      },
      { type: 'heading', content: 'Por que importa para ti' },
      {
        type: 'list',
        items: [
          '<strong>Seguridad</strong> — Tu codigo no vive solo en tu computadora. Si se te dana el disco duro, tu proyecto sigue vivo en GitHub.',
          '<strong>Historial</strong> — GitHub recuerda cada cambio que haces. Puedes regresar a cualquier version anterior.',
          '<strong>Colaboracion</strong> — Puedes compartir tu proyecto con otros (o con diferentes herramientas de IA).',
          '<strong>Despliegue</strong> — Servicios como Vercel y Netlify se conectan directo a GitHub para publicar tu app.'
        ]
      },
      {
        type: 'key-point',
        content: 'NO necesitas saber programar para usar GitHub. Es donde vive el codigo que tu IA genera. Tu rol es organizarlo y gestionarlo.'
      },
      {
        type: 'diagram',
        content: '  Tu idea\n    |\n    v\n  IA genera codigo  -->  GitHub lo guarda  -->  Vercel lo publica\n    (Cursor, Claude)        (repositorio)         (tu app en vivo)'
      },
      {
        type: 'quiz',
        question: 'Cual es la mejor analogia para GitHub?',
        options: [
          'A) Una red social para programadores',
          'B) Google Drive para codigo — guarda, versiona y comparte',
          'C) Un editor de texto en la nube',
          'D) Un servicio de hosting web'
        ],
        correct: 1
      }
    ]
  },

  // Lesson 2: Repositorios
  {
    title: 'Repositorios',
    sections: [
      { type: 'text', content: 'Un <strong>repositorio</strong> (o "repo") es simplemente una carpeta de proyecto en GitHub. Contiene todos los archivos de tu aplicacion, mas un historial completo de cada cambio.' },
      {
        type: 'analogy',
        content: 'Imagina un <strong>archivero magico</strong>. Cada vez que agregas o modificas un documento, el archivero automaticamente guarda una copia de como estaba antes. Puedes abrir cualquier cajon y ver el estado del proyecto en cualquier momento del pasado.'
      },
      { type: 'heading', content: 'Que hay dentro de un repositorio' },
      {
        type: 'code',
        title: 'Estructura tipica de un repo',
        content: '<span class="command">mi-app/</span>\n  <span class="accent">README.md</span>        <span class="comment"># Descripcion del proyecto</span>\n  <span class="accent">index.html</span>       <span class="comment"># Pagina principal</span>\n  <span class="accent">styles.css</span>       <span class="comment"># Estilos visuales</span>\n  <span class="accent">app.js</span>           <span class="comment"># Logica de la app</span>\n  <span class="accent">package.json</span>     <span class="comment"># Dependencias</span>\n  <span class="accent">.gitignore</span>       <span class="comment"># Archivos a ignorar</span>'
      },
      { type: 'heading', content: 'Publico vs Privado' },
      {
        type: 'table',
        headers: ['', 'Publico', 'Privado'],
        rows: [
          ['Quien lo ve', 'Cualquier persona', 'Solo tu y quienes invites'],
          ['Costo', 'Gratis', 'Gratis (plan basico)'],
          ['Ideal para', 'Proyectos open source, portafolio', 'Proyectos de negocio, ideas en desarrollo'],
        ]
      },
      {
        type: 'key-point',
        content: 'Para tus proyectos de negocio, usa repositorios <strong>privados</strong>. Son gratis y nadie mas puede ver tu codigo.'
      },
      {
        type: 'quiz',
        question: 'Que tipo de repositorio es mejor para un proyecto de negocio?',
        options: [
          'A) Publico — para que todos vean tu trabajo',
          'B) Privado — solo tu y tu equipo tienen acceso',
          'C) No importa, ambos funcionan igual'
        ],
        correct: 1
      }
    ]
  },

  // Lesson 3: Commits
  {
    title: 'Commits',
    sections: [
      { type: 'text', content: 'Un <strong>commit</strong> es una "foto" del estado de tu proyecto en un momento dado. Cada vez que haces un commit, GitHub guarda exactamente como se veian todos tus archivos en ese instante.' },
      {
        type: 'analogy',
        content: 'Es como <strong>guardar partida en un videojuego</strong>. Cada commit es un save point. Si algo sale mal mas adelante, puedes regresar a cualquier save point anterior y tu proyecto vuelve a ese estado exacto.'
      },
      { type: 'heading', content: 'Anatomia de un commit' },
      {
        type: 'code',
        title: 'Ejemplo de commit',
        content: '<span class="command">commit</span> <span class="string">a7f3bc2</span>\n<span class="accent">Autor:</span>  Maria Garcia\n<span class="accent">Fecha:</span>  10 marzo 2025, 3:45 PM\n<span class="accent">Mensaje:</span> "Agregar formulario de contacto"\n\n<span class="comment"># Archivos cambiados:</span>\n<span class="string">+ contact.html</span>    <span class="comment">(archivo nuevo)</span>\n<span class="accent">~ styles.css</span>      <span class="comment">(modificado: 12 lineas)</span>'
      },
      { type: 'heading', content: 'Buenos mensajes de commit' },
      { type: 'text', content: 'El mensaje de commit describe <em>que</em> cambio y <em>por que</em>. Es como dejar una nota para tu yo del futuro.' },
      {
        type: 'table',
        headers: ['Mal mensaje', 'Buen mensaje'],
        rows: [
          ['cambios', 'Agregar pagina de precios con 3 planes'],
          ['fix', 'Corregir boton de login que no respondia en mobile'],
          ['update', 'Actualizar colores del header segun nuevo branding'],
          ['asdf', 'Conectar formulario de contacto con Supabase'],
        ]
      },
      {
        type: 'key-point',
        content: 'Cuando una IA genera codigo por ti, revisa el mensaje de commit que sugiere. Un buen historial de commits hace tu proyecto mucho mas facil de mantener.'
      },
      {
        type: 'quiz',
        question: 'Cual de estos es el mejor mensaje de commit?',
        options: [
          'A) "cambios varios"',
          'B) "update"',
          'C) "Agregar sistema de autenticacion con Google OAuth"',
          'D) "fix stuff"'
        ],
        correct: 2
      }
    ]
  },

  // Lesson 4: Branches
  {
    title: 'Branches',
    sections: [
      { type: 'text', content: 'Un <strong>branch</strong> (rama) es una copia paralela de tu proyecto donde puedes hacer cambios sin afectar la version principal.' },
      {
        type: 'analogy',
        content: 'Imagina que estas escribiendo un <strong>plan de negocios</strong>. El documento principal es tu version oficial (branch <code>main</code>). Ahora quieres probar una idea loca — en lugar de editar el original, haces una <strong>copia</strong>. Si la idea funciona, la fusionas con el original. Si no funciona, simplemente borras la copia. Cero riesgo.'
      },
      { type: 'heading', content: 'Como funciona' },
      {
        type: 'diagram',
        content: '  main:     A --- B --- C ----------- F (merge)\n                         \\           /\n  feature:                D --- E ---\n\n  A-C = tu proyecto estable\n  D-E = cambios experimentales\n  F   = todo junto, si funciona'
      },
      { type: 'heading', content: 'Branches comunes' },
      {
        type: 'list',
        items: [
          '<code>main</code> — La version estable y oficial de tu proyecto. Lo que tus usuarios ven.',
          '<code>feature/nueva-pagina</code> — Para desarrollar algo nuevo sin riesgo.',
          '<code>fix/error-login</code> — Para corregir un bug especifico.',
          '<code>dev</code> — Una version de pruebas donde se combinan features antes de ir a main.'
        ]
      },
      {
        type: 'key-point',
        content: 'Cuando tu IA (Cursor, Claude) trabaja en un cambio grande, lo ideal es que lo haga en un <strong>branch separado</strong>. Asi tu version principal siempre funciona.'
      },
      {
        type: 'quiz',
        question: 'Para que sirve un branch?',
        options: [
          'A) Para borrar archivos del proyecto',
          'B) Para hacer cambios sin afectar la version principal',
          'C) Para publicar tu app en internet',
          'D) Para guardar contrasenas'
        ],
        correct: 1
      }
    ]
  },

  // Lesson 5: Pull Requests
  {
    title: 'Pull Requests',
    sections: [
      { type: 'text', content: 'Un <strong>Pull Request</strong> (PR) es una solicitud para fusionar los cambios de un branch en otro (generalmente en <code>main</code>). Es el punto donde los cambios se revisan antes de ir a produccion.' },
      {
        type: 'analogy',
        content: 'Es como enviar una <strong>propuesta de proyecto</strong> a tu jefe. No se aplica automaticamente — alguien (o tu mismo) la revisa, puede pedir cambios, y finalmente la aprueba. Solo cuando se aprueba, los cambios se fusionan.'
      },
      { type: 'heading', content: 'El flujo de un Pull Request' },
      {
        type: 'diagram',
        content: '  1. Creas un branch          →  feature/checkout\n  2. Haces cambios (commits)  →  3 archivos modificados\n  3. Abres un Pull Request    →  "Agregar flujo de checkout"\n  4. Revision                 →  Tu equipo/tu mismo lo revisa\n  5. Aprobacion               →  Todo se ve bien!\n  6. Merge                    →  Los cambios van a main'
      },
      { type: 'heading', content: 'Que contiene un Pull Request' },
      {
        type: 'list',
        items: [
          '<strong>Titulo</strong> — Que hace este cambio (ej: "Agregar pagina de precios")',
          '<strong>Descripcion</strong> — Contexto, por que se hizo, que probar',
          '<strong>Cambios</strong> — Lista de archivos modificados con lineas agregadas/eliminadas',
          '<strong>Comentarios</strong> — Discusion sobre los cambios',
          '<strong>Estado</strong> — Abierto, aprobado, fusionado o cerrado'
        ]
      },
      {
        type: 'key-point',
        content: 'Aunque trabajes solo, los Pull Requests son utiles. Te obligan a revisar los cambios antes de fusionarlos, reduciendo bugs. Cuando una IA genera codigo, el PR es donde <strong>tu</strong> verificas que todo tiene sentido.'
      },
      {
        type: 'quiz',
        question: 'Que es un Pull Request?',
        options: [
          'A) Una forma de descargar codigo de internet',
          'B) Una solicitud para fusionar cambios despues de revisarlos',
          'C) Una herramienta para escribir codigo',
          'D) Una copia de seguridad del proyecto'
        ],
        correct: 1
      }
    ]
  },

  // Lesson 6: GitHub + Vibe Coding
  {
    title: 'GitHub + Vibe Coding',
    sections: [
      { type: 'text', content: 'El <strong>vibe coding</strong> es usar IA para generar codigo a partir de instrucciones en lenguaje natural. Tu describes lo que quieres, la IA lo construye, y GitHub es donde todo se guarda y gestiona.' },
      { type: 'heading', content: 'El flujo del vibe coder' },
      {
        type: 'diagram',
        content: '  1. TU IDEA\n     "Quiero una landing page con formulario de contacto"\n           |\n           v\n  2. IA GENERA CODIGO\n     Cursor / Claude / Copilot escriben los archivos\n           |\n           v\n  3. GITHUB LO GUARDA\n     git add → git commit → git push\n           |\n           v\n  4. SE PUBLICA\n     Vercel/Netlify detectan el push y despliegan automaticamente\n           |\n           v\n  5. TU APP ESTA EN VIVO\n     tuapp.vercel.app'
      },
      { type: 'heading', content: 'Herramientas que se conectan con GitHub' },
      {
        type: 'table',
        headers: ['Herramienta', 'Que hace', 'Como usa GitHub'],
        rows: [
          ['Cursor', 'Editor de codigo con IA integrada', 'Push/pull directo desde el editor'],
          ['Claude Code', 'IA que programa en tu terminal', 'Crea commits y branches automaticamente'],
          ['GitHub Copilot', 'Autocompletado inteligente', 'Integrado nativamente en GitHub'],
          ['Vercel', 'Publica tu app', 'Se conecta a tu repo y despliega cada push'],
          ['v0 / bolt.new', 'Genera UI con IA', 'Exporta codigo que subes a tu repo'],
        ]
      },
      {
        type: 'key-point',
        content: 'GitHub es el <strong>puente</strong> entre lo que la IA crea y lo que tus usuarios ven. Sin GitHub, tu codigo vive aislado en tu computadora.'
      },
      {
        type: 'quiz',
        question: 'En el flujo de vibe coding, cual es el rol de GitHub?',
        options: [
          'A) Generar el codigo con IA',
          'B) Disenar la interfaz de usuario',
          'C) Guardar, versionar y conectar el codigo con servicios de despliegue',
          'D) Comprar el dominio web'
        ],
        correct: 2
      }
    ]
  },

  // Lesson 7: Tu primer workflow
  {
    title: 'Tu primer workflow',
    sections: [
      { type: 'text', content: 'Vamos a simular el flujo completo que seguirias para crear un proyecto, subirlo a GitHub y publicarlo. No necesitas ejecutar nada — solo entiende los pasos.' },
      { type: 'heading', content: 'Paso 1: Crear el repositorio' },
      {
        type: 'code',
        title: 'En GitHub.com',
        content: '<span class="comment"># 1. Ve a github.com y haz clic en "New repository"</span>\n<span class="comment"># 2. Nombre: mi-landing-page</span>\n<span class="comment"># 3. Selecciona "Private"</span>\n<span class="comment"># 4. Marca "Add a README file"</span>\n<span class="comment"># 5. Clic en "Create repository"</span>\n\n<span class="output">✓ Repositorio creado: github.com/tu-usuario/mi-landing-page</span>'
      },
      { type: 'heading', content: 'Paso 2: Clonar en tu computadora' },
      {
        type: 'code',
        title: 'Terminal',
        content: '<span class="command">$</span> git clone https://github.com/tu-usuario/mi-landing-page.git\n<span class="output">Cloning into \'mi-landing-page\'...</span>\n<span class="output">done.</span>\n\n<span class="command">$</span> cd mi-landing-page'
      },
      { type: 'heading', content: 'Paso 3: La IA genera tu codigo' },
      {
        type: 'code',
        title: 'En Cursor o Claude',
        content: '<span class="comment"># Le dices a la IA:</span>\n<span class="string">"Crea una landing page profesional para una consultoria</span>\n<span class="string"> de marketing digital. Incluye hero section, servicios,</span>\n<span class="string"> testimonios y formulario de contacto."</span>\n\n<span class="comment"># La IA genera: index.html, styles.css, app.js</span>'
      },
      { type: 'heading', content: 'Paso 4: Guardar y subir (commit + push)' },
      {
        type: 'code',
        title: 'Terminal',
        content: '<span class="command">$</span> git add .\n<span class="command">$</span> git commit -m "Crear landing page con hero, servicios y contacto"\n<span class="output">[main a3f8b12] Crear landing page con hero, servicios y contacto</span>\n<span class="output"> 3 files changed, 284 insertions(+)</span>\n\n<span class="command">$</span> git push\n<span class="output">Everything up-to-date → github.com/tu-usuario/mi-landing-page</span>'
      },
      { type: 'heading', content: 'Paso 5: Publicar con Vercel' },
      {
        type: 'list',
        ordered: true,
        items: [
          'Ve a <strong>vercel.com</strong> e inicia sesion con tu cuenta de GitHub',
          'Clic en "Import Project" y selecciona <strong>mi-landing-page</strong>',
          'Clic en "Deploy"',
          'En 30 segundos tu app esta en vivo en <strong>mi-landing-page.vercel.app</strong>'
        ]
      },
      {
        type: 'key-point',
        content: 'Cada vez que hagas <code>git push</code>, Vercel automaticamente actualiza tu sitio. No necesitas hacer nada mas — el flujo es: editar → commit → push → tu sitio se actualiza solo.'
      }
    ]
  },

  // Lesson 8: Cheat Sheet
  {
    title: 'GitHub Cheat Sheet',
    sections: [
      { type: 'text', content: 'Referencia rapida de los terminos mas importantes de GitHub. Guarda esta pagina para consultarla cuando lo necesites.' },
      {
        type: 'table',
        headers: ['Termino', 'Que es', 'Analogia'],
        rows: [
          ['<strong>Repository</strong>', 'Carpeta de proyecto en GitHub', 'Un archivero con historial'],
          ['<strong>Commit</strong>', 'Guardar el estado actual del proyecto', 'Save point en videojuego'],
          ['<strong>Branch</strong>', 'Copia paralela para experimentar', 'Borrador de un documento'],
          ['<strong>Pull Request</strong>', 'Solicitud para fusionar cambios', 'Propuesta que necesita aprobacion'],
          ['<strong>Merge</strong>', 'Combinar un branch con otro', 'Incorporar el borrador al original'],
          ['<strong>Clone</strong>', 'Descargar un repo a tu computadora', 'Descargar archivo de Drive'],
          ['<strong>Push</strong>', 'Subir cambios locales a GitHub', 'Subir archivo a Drive'],
          ['<strong>Pull</strong>', 'Descargar cambios de GitHub', 'Sincronizar desde Drive'],
          ['<strong>Fork</strong>', 'Copiar el repo de alguien a tu cuenta', 'Hacer tu propia version de un documento compartido'],
          ['<strong>Issue</strong>', 'Reporte de bug o solicitud de feature', 'Ticket de soporte'],
          ['<strong>Actions</strong>', 'Automatizacion (tests, deploys)', 'Robot que hace tareas repetitivas'],
          ['<strong>Pages</strong>', 'Hosting gratuito de sitios estaticos', 'Publicar directo desde GitHub'],
        ]
      },
      { type: 'heading', content: 'Comandos esenciales de Git' },
      {
        type: 'code',
        title: 'Los 6 comandos que mas usaras',
        content: '<span class="command">git clone [url]</span>      <span class="comment"># Descargar un proyecto</span>\n<span class="command">git add .</span>             <span class="comment"># Preparar todos los cambios</span>\n<span class="command">git commit -m "msg"</span>   <span class="comment"># Guardar con un mensaje</span>\n<span class="command">git push</span>              <span class="comment"># Subir a GitHub</span>\n<span class="command">git pull</span>              <span class="comment"># Descargar ultimos cambios</span>\n<span class="command">git status</span>            <span class="comment"># Ver que archivos cambiaron</span>'
      },
      {
        type: 'key-point',
        content: 'No necesitas memorizar todo esto. Las herramientas de IA como Cursor y Claude manejan git por ti. Pero entender los conceptos te ayuda a tomar mejores decisiones.'
      }
    ]
  }
];
