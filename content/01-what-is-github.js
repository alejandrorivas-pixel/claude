export const lesson = {
  id: 1,
  title: '¿Qué es GitHub?',
  sections: [
    { type: 'prompt', text: 'lesson start "¿Qué es GitHub?"' },

    { type: 'heading', text: '¿Qué es GitHub?' },

    { type: 'body', text: 'Imagina Google Drive, pero diseñado específicamente para proyectos de software.' },

    { type: 'spacer' },

    { type: 'body', text: 'Así como en Google Drive guardas documentos y puedes ver quién editó qué y cuándo, en GitHub guardas código y se registra cada cambio que cualquier persona hace.' },

    { type: 'separator' },

    { type: 'subheading', text: 'La analogía del Google Drive' },

    { type: 'diagram', text: '  Google Drive                    GitHub\n  ─────────────                   ──────\n  📁 Carpetas                     📁 Repositories (repos)\n  📄 Documentos                   📄 Archivos de código\n  📝 Historial de edición         📝 Commits (historial)\n  👥 Compartir con personas       👥 Colaboradores\n  🔗 Links para compartir         🔗 URLs públicas o privadas' },

    { type: 'spacer' },

    { type: 'body', text: 'La diferencia principal: GitHub no solo guarda archivos, sino que lleva un registro perfecto de CADA cambio, línea por línea, desde el primer día del proyecto.' },

    { type: 'separator' },

    { type: 'subheading', text: '¿Por qué te importa como empresario?' },

    { type: 'body', text: 'Aunque la IA escriba todo tu código, necesitas un lugar para:' },

    { type: 'body-instant', text: '  1. Guardarlo de forma segura (backup)' },
    { type: 'body-instant', text: '  2. Ver qué cambió y cuándo (historial)' },
    { type: 'body-instant', text: '  3. Volver atrás si algo se rompe (versiones)' },
    { type: 'body-instant', text: '  4. Compartirlo con tu equipo o colaboradores' },
    { type: 'body-instant', text: '  5. Conectarlo con herramientas de deployment (publicar tu app)' },

    { type: 'spacer' },

    { type: 'highlight', text: 'GitHub es ese lugar. Es el estándar de la industria.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Vocabulario clave' },

    { type: 'body-instant', text: '  • Repository (repo) — El "folder" de tu proyecto en GitHub' },
    { type: 'body-instant', text: '  • Commit — Un "guardado" con descripción de qué cambió' },
    { type: 'body-instant', text: '  • Branch — Una "copia paralela" para experimentar sin riesgo' },
    { type: 'body-instant', text: '  • Pull Request (PR) — Una "propuesta" de cambios para revisar' },

    { type: 'spacer' },

    { type: 'tip', text: 'No te preocupes si estos términos no te quedan claros aún. Cada uno tiene su propia lección más adelante.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Dato extra: GitHub como red social' },

    { type: 'body', text: 'GitHub también funciona como una red social para desarrolladores. Tiene perfiles, seguidores, "stars" (como likes), y puedes explorar proyectos de otros. Muchas herramientas de IA que usas (como Claude, Cursor, Copilot) tienen su código publicado en GitHub.' },

    { type: 'separator' },

    { type: 'quiz',
      question: 'GitHub es más parecido a:',
      options: [
        'Un servicio de email',
        'Un almacén de código con control de versiones',
        'Una red social exclusivamente',
        'Un editor de texto'
      ],
      correct: 1,
      explanation: 'GitHub almacena código y registra cada cambio (control de versiones). También tiene funciones sociales como perfiles y stars, ¡pero su función principal es gestionar código!'
    },
  ]
};
