export const lesson = {
  id: 6,
  title: 'Vibe Coding + GitHub',
  sections: [
    { type: 'prompt', text: 'lesson start "Vibe Coding + GitHub"' },

    { type: 'heading', text: 'Vibe Coding: Programar sin Programar' },

    { type: 'body', text: '"Vibe coding" significa describir lo que quieres en español (o inglés), y dejar que la inteligencia artificial escriba el código por ti. Tú diriges, la IA ejecuta.' },

    { type: 'separator' },

    { type: 'subheading', text: 'La analogía del director de orquesta' },

    { type: 'body', text: 'Un director de orquesta no toca cada instrumento — pero sabe exactamente cómo debe sonar la pieza completa. Le indica a cada músico qué hacer, cuándo entrar, qué tono usar. Tú eres el director. La IA es la orquesta.' },

    { type: 'separator' },

    { type: 'subheading', text: 'El flujo completo de vibe coding con GitHub' },

    { type: 'diagram', text: '  ┌──────────────────────────────────────────────┐\n  │                                                │\n  │  1. CREAR REPO en GitHub                       │\n  │     ↓                                          │\n  │  2. ABRIR en herramienta de IA                 │\n  │     (Cursor, Claude Code, Copilot, Windsurf)   │\n  │     ↓                                          │\n  │  3. DESCRIBIR lo que quieres                   │\n  │     "Quiero una página de login con Google"    │\n  │     ↓                                          │\n  │  4. LA IA ESCRIBE el código                    │\n  │     ↓                                          │\n  │  5. TÚ REVISAS: ¿funciona? ¿se ve bien?       │\n  │     ↓                                          │\n  │  6. COMMIT → "Agregar login con Google"        │\n  │     ↓                                          │\n  │  7. PUSH → Los cambios suben a GitHub          │\n  │     ↓                                          │\n  │  8. REPETIR desde el paso 3                    │\n  │                                                │\n  └──────────────────────────────────────────────┘' },

    { type: 'separator' },

    { type: 'subheading', text: 'Herramientas de vibe coding' },

    { type: 'spacer' },

    { type: 'highlight', text: 'Claude Code (Anthropic)' },
    { type: 'body', text: 'Funciona directamente en la terminal. Le describes lo que quieres y modifica tu código, crea commits, y puede hasta crear Pull Requests. Ideal para quienes quieren máximo control.' },

    { type: 'spacer' },

    { type: 'highlight', text: 'Cursor' },
    { type: 'body', text: 'Un editor de código (como VS Code) con IA integrada. Le hablas en un chat lateral y la IA edita tu código en tiempo real. Muy visual e intuitivo.' },

    { type: 'spacer' },

    { type: 'highlight', text: 'GitHub Copilot' },
    { type: 'body', text: 'La herramienta de IA de GitHub mismo. Se integra en VS Code y sugiere código mientras escribes. Como un autocompletado superinteligente.' },

    { type: 'spacer' },

    { type: 'highlight', text: 'Windsurf' },
    { type: 'body', text: 'Similar a Cursor, un editor con IA. Se enfoca en entender todo tu proyecto para dar mejores sugerencias.' },

    { type: 'spacer' },

    { type: 'highlight', text: 'Replit' },
    { type: 'body', text: 'Todo en el navegador: editor, IA, y hosting. No necesitas instalar nada. Ideal para prototipos rápidos.' },

    { type: 'separator' },

    { type: 'subheading', text: 'El principio fundamental del vibe coding' },

    { type: 'body', text: 'No necesitas entender cada línea de código.' },

    { type: 'spacer' },

    { type: 'highlight', text: 'PERO sí necesitas entender:' },
    { type: 'body-instant', text: '  • Qué DEBERÍA hacer el código (el objetivo)' },
    { type: 'body-instant', text: '  • Si ESTÁ haciendo lo correcto (verificar resultados)' },
    { type: 'body-instant', text: '  • Cómo ORGANIZAR tu proyecto (GitHub, branches, commits)' },
    { type: 'body-instant', text: '  • Cuándo GUARDAR un punto seguro (commits frecuentes)' },

    { type: 'separator' },

    { type: 'subheading', text: 'Errores comunes en vibe coding' },

    { type: 'body-instant', text: '  ❌ No hacer commits frecuentes (pierdes puntos de retorno)' },
    { type: 'body-instant', text: '  ❌ Aceptar TODO lo que la IA genera sin probar' },
    { type: 'body-instant', text: '  ❌ Pedir cambios demasiado grandes de una vez' },
    { type: 'body-instant', text: '  ❌ No usar branches para funciones nuevas' },
    { type: 'body-instant', text: '  ❌ Ignorar errores y seguir pidiendo más cambios' },

    { type: 'spacer' },

    { type: 'tip', text: 'Regla práctica: Pide cambios pequeños y específicos. Prueba. Haz commit. Repite. Esto es mucho más efectivo que pedir "haz toda la app de una vez".' },

    { type: 'separator' },

    { type: 'quiz',
      question: 'En vibe coding, ¿cuál es tu rol principal?',
      options: [
        'Escribir código línea por línea',
        'Dirigir a la IA, verificar resultados y organizar el proyecto',
        'Solo dar la idea inicial y no intervenir más',
        'Memorizar todos los lenguajes de programación'
      ],
      correct: 1,
      explanation: 'En vibe coding, tú eres el director: describes lo que quieres, verificas que funcione, y organizas tu proyecto con GitHub. La IA escribe el código, pero tú tomas las decisiones.'
    },
  ]
};
