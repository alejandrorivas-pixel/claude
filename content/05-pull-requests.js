export const lesson = {
  id: 5,
  title: 'Pull Requests',
  sections: [
    { type: 'prompt', text: 'lesson start "Pull Requests"' },

    { type: 'heading', text: 'Pull Requests (Solicitudes de Cambio)' },

    { type: 'body', text: 'Un Pull Request (PR) es como enviar una propuesta formal antes de hacer cambios oficiales. Es decir: "Aquí están los cambios que quiero hacer, aquí está por qué, por favor revísalos antes de aprobarlos."' },

    { type: 'separator' },

    { type: 'subheading', text: 'La analogía de la propuesta' },

    { type: 'body', text: 'Imagina que trabajas en una empresa y quieres cambiar el diseño de una presentación importante:' },

    { type: 'body-instant', text: '  1. No cambias la versión final directamente' },
    { type: 'body-instant', text: '  2. Haces una copia, aplicas tus cambios' },
    { type: 'body-instant', text: '  3. Envías la propuesta a tu equipo: "Miren, cambié esto y esto"' },
    { type: 'body-instant', text: '  4. Tu equipo revisa, comenta, sugiere ajustes' },
    { type: 'body-instant', text: '  5. Cuando todos aprueban, se aplican los cambios a la versión final' },

    { type: 'spacer' },

    { type: 'body', text: 'Eso es exactamente un Pull Request en GitHub.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Anatomía de un Pull Request' },

    { type: 'diagram', text: '  ┌─────────────────────────────────────────────────┐\n  │  PR #42: Agregar sistema de cupones              │\n  │                                                   │\n  │  Branch: feature/cupones → main                   │\n  │  Autor: alejandro          Estado: En revisión    │\n  │                                                   │\n  │  Descripción:                                     │\n  │  "Implementé cupones de descuento con validación  │\n  │   de fecha y límite de uso por usuario."          │\n  │                                                   │\n  │  Archivos cambiados: 5    Líneas: +120 / -3       │\n  │                                                   │\n  │  💬 Comentarios: 2                                │\n  │  ✅ Aprobaciones: 1 de 2 necesarias               │\n  └─────────────────────────────────────────────────┘' },

    { type: 'separator' },

    { type: 'subheading', text: 'El flujo de un Pull Request' },

    { type: 'body-instant', text: '  1. Creas un branch y haces tus cambios (o la IA los hace)' },
    { type: 'body-instant', text: '  2. Abres un Pull Request en GitHub' },
    { type: 'body-instant', text: '  3. Describes qué cambiaste y por qué' },
    { type: 'body-instant', text: '  4. Revisores miran el código y dejan comentarios' },
    { type: 'body-instant', text: '  5. Haces ajustes si es necesario' },
    { type: 'body-instant', text: '  6. Cuando se aprueba, haces "Merge" (fusionar)' },
    { type: 'body-instant', text: '  7. Los cambios se aplican al branch main' },

    { type: 'separator' },

    { type: 'subheading', text: '¿PRs cuando trabajo solo?' },

    { type: 'body', text: 'Sí, incluso trabajando solo, los PRs son útiles porque:' },

    { type: 'body-instant', text: '  • Te obligan a revisar lo que la IA escribió antes de fusionar' },
    { type: 'body-instant', text: '  • Crean un registro de qué se cambió y cuándo' },
    { type: 'body-instant', text: '  • Si algo sale mal, sabes exactamente qué PR introdujo el problema' },
    { type: 'body-instant', text: '  • Herramientas de IA como Claude Code crean PRs automáticamente' },

    { type: 'spacer' },

    { type: 'tip', text: 'Muchas herramientas de vibe coding (Claude Code, Cursor) pueden crear Pull Requests por ti con un solo comando. No necesitas hacerlo manualmente.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Merge: fusionar los cambios' },

    { type: 'body', text: '"Merge" es el acto final: tomar los cambios del branch y aplicarlos a main. Es como firmar y ejecutar una propuesta aprobada.' },

    { type: 'diagram', text: '  feature/cupones ──●──●──●──┐\n                             ↓ MERGE\n  main ──●──●──●──●──●──●──●──●──→\n                             ↑\n                       Los cambios ahora\n                       están en producción' },

    { type: 'separator' },

    { type: 'quiz',
      question: '¿Cuál es el principal beneficio de usar Pull Requests?',
      options: [
        'Hacen que el código sea más rápido',
        'Permiten revisar cambios antes de aplicarlos a producción',
        'Son obligatorios para usar GitHub',
        'Eliminan automáticamente los bugs del código'
      ],
      correct: 1,
      explanation: 'Los PRs son un punto de control: te permiten revisar, comentar y aprobar cambios antes de que lleguen a la versión de producción. Son opcionales pero muy recomendados.'
    },
  ]
};
