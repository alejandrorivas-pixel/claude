export const lesson = {
  id: 2,
  title: 'Repositories',
  sections: [
    { type: 'prompt', text: 'lesson start "Repositories"' },

    { type: 'heading', text: 'Repositories (Repositorios)' },

    { type: 'body', text: 'Un repository (o "repo") es como un archivero para UN proyecto. Todo lo relacionado con ese proyecto — código, imágenes, documentación — vive dentro de un solo repo.' },

    { type: 'separator' },

    { type: 'subheading', text: 'La analogía del archivero' },

    { type: 'diagram', text: '  Tu empresa\n  └── 📁 Archivero: "Mi App de Delivery"\n      ├── 📄 Código del frontend (lo que ve el usuario)\n      ├── 📄 Código del backend (la lógica interna)\n      ├── 📄 Base de datos (configuración)\n      ├── 🖼️ Imágenes y logos\n      ├── 📋 README.md (la portada/explicación del proyecto)\n      └── ⚙️ Archivos de configuración' },

    { type: 'spacer' },

    { type: 'body', text: 'Cada proyecto que crees tendrá su propio repo. Si tienes una app de delivery y un sitio web corporativo, serán DOS repos separados.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Public vs Private (Público vs Privado)' },

    { type: 'body', text: 'Cuando creas un repo, decides quién puede verlo:' },

    { type: 'spacer' },

    { type: 'highlight', text: '🔓 Public (Público)' },
    { type: 'body', text: 'Como un aparador: cualquier persona en internet puede ver tu código. Se usa para proyectos open source (código abierto) o portafolios.' },

    { type: 'spacer' },

    { type: 'highlight', text: '🔒 Private (Privado)' },
    { type: 'body', text: 'Como tu oficina: solo las personas que tú invites pueden ver el código. Se usa para proyectos de tu empresa o clientes.' },

    { type: 'spacer' },

    { type: 'tip', text: 'Como empresario, la mayoría de tus repos serán Private. Tus proyectos son tu propiedad intelectual.' },

    { type: 'separator' },

    { type: 'subheading', text: 'El README.md — La portada de tu proyecto' },

    { type: 'body', text: 'Cada repo tiene (o debería tener) un archivo llamado README.md. Es la primera página que ves cuando entras al repo. Piensa en él como la portada de un libro: explica qué es el proyecto, cómo usarlo, y qué necesitas para ejecutarlo.' },

    { type: 'spacer' },

    { type: 'body', text: 'El ".md" significa Markdown — un formato simple para dar formato a texto (negritas, listas, títulos) sin necesidad de un editor visual.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Tu repo ahora mismo' },

    { type: 'body', text: 'Este tutorial que estás leyendo está dentro de un repo llamado "magno". Es un repo real en GitHub. Cada archivo que ves aquí — el HTML, el CSS, el JavaScript — vive dentro de ese repo.' },

    { type: 'code', text: '  magno/\n  ├── index.html          ← La página principal\n  ├── css/terminal.css    ← Los estilos visuales\n  ├── js/app.js           ← La lógica de la app\n  ├── content/            ← Las lecciones (¡esta!)\n  └── .git/               ← La carpeta oculta que registra todo' },

    { type: 'spacer' },

    { type: 'tip', text: 'La carpeta .git/ es invisible normalmente. Es donde GitHub guarda TODO el historial de cambios. Nunca la toques manualmente.' },

    { type: 'separator' },

    { type: 'quiz',
      question: '¿Cuál es la diferencia entre un repo Public y uno Private?',
      options: [
        'Public es gratis y Private cuesta dinero',
        'Public es visible para todos, Private solo para personas invitadas',
        'Public tiene más funciones que Private',
        'No hay diferencia real'
      ],
      correct: 1,
      explanation: 'La diferencia es la visibilidad. Public lo puede ver cualquiera, Private solo quienes tú invites. Ambos son gratuitos en GitHub para repos personales.'
    },
  ]
};
