export const lesson = {
  id: 7,
  title: 'Flujo de Trabajo',
  sections: [
    { type: 'prompt', text: 'lesson start "Flujo de Trabajo con GitHub"' },

    { type: 'heading', text: 'Tu Flujo de Trabajo con GitHub' },

    { type: 'body', text: 'Esta lección junta todo lo que has aprendido en un flujo práctico, paso a paso, que puedes seguir desde hoy.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Paso 1: Crear tu cuenta de GitHub' },

    { type: 'body', text: 'Ve a github.com y crea una cuenta gratuita. Usa un email profesional. Tu nombre de usuario será tu identidad en el mundo del desarrollo — elige algo profesional.' },

    { type: 'spacer' },

    { type: 'tip', text: 'GitHub es gratis para repos públicos y privados. No necesitas plan de pago para empezar.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Paso 2: Instalar GitHub Desktop' },

    { type: 'body', text: 'GitHub Desktop es la versión visual de Git. En lugar de escribir comandos en la terminal, usas botones y menús. Es como usar un control remoto en vez de escribir comandos.' },

    { type: 'diagram', text: '  Terminal (línea de comandos)     GitHub Desktop (visual)\n  ───────────────────────────     ─────────────────────────\n  git add .                       [Botón: Stage All]\n  git commit -m "mensaje"         [Campo de texto + Botón: Commit]\n  git push                        [Botón: Push]\n  git checkout -b feature/x       [Menú: New Branch]' },

    { type: 'spacer' },

    { type: 'body', text: 'Ambos hacen exactamente lo mismo. GitHub Desktop es más amigable para empezar.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Paso 3: Crear tu primer repo' },

    { type: 'body-instant', text: '  En GitHub.com:' },
    { type: 'body-instant', text: '  1. Haz clic en "+" → "New repository"' },
    { type: 'body-instant', text: '  2. Nombre: el nombre de tu proyecto (ej: "mi-app-delivery")' },
    { type: 'body-instant', text: '  3. Descripción: una línea sobre qué es el proyecto' },
    { type: 'body-instant', text: '  4. Visibilidad: Private (privado)' },
    { type: 'body-instant', text: '  5. Marca "Add a README file"' },
    { type: 'body-instant', text: '  6. Clic en "Create repository"' },

    { type: 'spacer' },

    { type: 'highlight', text: '¡Listo! Ya tienes un repo. Fue así de sencillo.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Paso 4: Conectar con tu herramienta de IA' },

    { type: 'body', text: 'Dependiendo de qué herramienta uses:' },

    { type: 'spacer' },

    { type: 'body-instant', text: '  Cursor / VS Code:' },
    { type: 'body-instant', text: '  → Clonar el repo desde GitHub Desktop o con "git clone"' },
    { type: 'body-instant', text: '  → Abrir la carpeta en Cursor' },

    { type: 'spacer' },

    { type: 'body-instant', text: '  Claude Code:' },
    { type: 'body-instant', text: '  → Abrir la terminal en la carpeta del repo' },
    { type: 'body-instant', text: '  → Ejecutar "claude" y empezar a describir tu proyecto' },

    { type: 'spacer' },

    { type: 'body-instant', text: '  Replit:' },
    { type: 'body-instant', text: '  → Importar el repo directamente desde GitHub' },
    { type: 'body-instant', text: '  → Todo funciona en el navegador' },

    { type: 'separator' },

    { type: 'subheading', text: 'Paso 5: El ciclo de trabajo diario' },

    { type: 'diagram', text: '  ┌──────────────────────────────────────┐\n  │                                        │\n  │  🌅 Inicio del día                     │\n  │  └→ Abrir tu proyecto                  │\n  │                                        │\n  │  🔀 Crear branch para nueva tarea      │\n  │  └→ "feature/lo-que-voy-a-hacer"       │\n  │                                        │\n  │  🤖 Trabajar con la IA                 │\n  │  └→ Pedir cambios pequeños             │\n  │  └→ Probar que funcionen               │\n  │  └→ Commit cada cambio que funcione    │\n  │                                        │\n  │  📤 Push al final del día              │\n  │  └→ Subir todo a GitHub                │\n  │                                        │\n  │  📋 Pull Request cuando esté listo     │\n  │  └→ Revisar → Merge → Hecho ✓         │\n  │                                        │\n  └──────────────────────────────────────┘' },

    { type: 'separator' },

    { type: 'subheading', text: 'Errores comunes y cómo evitarlos' },

    { type: 'spacer' },

    { type: 'body-instant', text: '  ❌ Olvidar hacer commit → Haz commits frecuentes, mínimo cada función nueva' },
    { type: 'body-instant', text: '  ❌ Trabajar en main → Siempre crea un branch nuevo' },
    { type: 'body-instant', text: '  ❌ Mensajes vagos → Escribe qué cambiaste: "Agregar login con Google"' },
    { type: 'body-instant', text: '  ❌ Nunca hacer push → Push al menos al final del día como backup' },
    { type: 'body-instant', text: '  ❌ No revisar PRs → Aunque trabajes solo, mira los cambios antes de merge' },

    { type: 'separator' },

    { type: 'subheading', text: 'Tu setup recomendado para empezar' },

    { type: 'code', text: '  ✅ Cuenta de GitHub (gratis)\n  ✅ GitHub Desktop (interfaz visual)\n  ✅ Una herramienta de IA:\n     → Cursor (más visual, recomendado para empezar)\n     → Claude Code (más potente, ideal si te gusta la terminal)\n     → Replit (todo en el navegador, cero instalación)' },

    { type: 'separator' },

    { type: 'quiz',
      question: '¿Cuál es el orden correcto del flujo de trabajo?',
      options: [
        'Push → Commit → Branch → Merge',
        'Branch → Trabajar → Commit → Push → PR → Merge',
        'Commit → Branch → PR → Push',
        'Merge → Push → Commit → Branch'
      ],
      correct: 1,
      explanation: 'El flujo es: crear un Branch para tu tarea, Trabajar con la IA, hacer Commit de tus cambios, Push para subirlos a GitHub, crear un PR para revisión, y finalmente Merge para aplicar los cambios a main.'
    },
  ]
};
