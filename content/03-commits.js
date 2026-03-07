export const lesson = {
  id: 3,
  title: 'Commits',
  sections: [
    { type: 'prompt', text: 'lesson start "Commits"' },

    { type: 'heading', text: 'Commits (Guardar Cambios)' },

    { type: 'body', text: 'Un commit es como guardar tu partida en un videojuego. Capturas una foto exacta de tu proyecto en ese momento. Si algo sale mal después, puedes volver a cualquier guardado anterior.' },

    { type: 'separator' },

    { type: 'subheading', text: 'La analogía del videojuego' },

    { type: 'diagram', text: '  🎮 Videojuego                     💻 GitHub\n  ─────────────                     ──────\n  "Guardar partida"                 "Hacer un commit"\n  "Cargar partida anterior"         "Revertir a un commit anterior"\n  "Punto de control"                "Cada commit es un checkpoint"\n  "Notas del guardado"              "Commit message (mensaje)"' },

    { type: 'spacer' },

    { type: 'body', text: 'Cada vez que haces un commit, le pones un mensaje que describe QUÉ cambió. Esto es crucial porque cuando necesites buscar un cambio específico, el mensaje te dice exactamente qué pasó.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Ejemplo real de commits' },

    { type: 'body', text: 'Así se ve un historial de commits (git log) de un proyecto real:' },

    { type: 'code', text: '  a3f2d1c  Agregar página de pagos con Stripe        (hace 2 horas)\n  b7e4a92  Corregir error en formulario de login       (hace 1 día)\n  c1d8f35  Diseñar nueva landing page                  (hace 3 días)\n  d4a9b67  Configurar base de datos con Supabase       (hace 1 semana)\n  e2c3f78  Commit inicial: crear proyecto               (hace 2 semanas)' },

    { type: 'spacer' },

    { type: 'body', text: 'Cada línea es un commit. El código alfanumérico al inicio (como a3f2d1c) es el ID único de ese commit — como un número de serie.' },

    { type: 'separator' },

    { type: 'subheading', text: '¿Por qué es vital para vibe coding?' },

    { type: 'body', text: 'Cuando usas IA para escribir código, el flujo es así:' },

    { type: 'body-instant', text: '  1. Le pides a la IA que cree una función nueva' },
    { type: 'body-instant', text: '  2. La IA escribe el código' },
    { type: 'body-instant', text: '  3. Tú verificas que funciona' },
    { type: 'body-instant', text: '  4. Haces COMMIT → "Agregar función de búsqueda"' },
    { type: 'body-instant', text: '  5. Pides otro cambio a la IA...' },
    { type: 'body-instant', text: '  6. ¡La IA rompe algo! 😱' },
    { type: 'body-instant', text: '  7. Vuelves al commit anterior → todo funciona de nuevo ✅' },

    { type: 'spacer' },

    { type: 'highlight', text: 'Sin commits, si la IA rompe tu código, no hay manera fácil de volver atrás. Con commits, siempre tienes un punto seguro al cual regresar.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Buenos mensajes de commit' },

    { type: 'body', text: 'Un buen commit message describe QUÉ hiciste y POR QUÉ:' },

    { type: 'code', text: '  ✅ Buenos mensajes:\n  "Agregar botón de checkout en página de carrito"\n  "Corregir error: usuarios no podían subir fotos"\n  "Actualizar precios en el catálogo de productos"\n\n  ❌ Malos mensajes:\n  "Cambios"\n  "asdfg"\n  "fix"\n  "update"' },

    { type: 'spacer' },

    { type: 'tip', text: 'Tip: Si usas herramientas como Claude Code, la IA puede generar mensajes de commit descriptivos por ti automáticamente.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Commit vs Push' },

    { type: 'body', text: 'Un detalle importante: hacer commit guarda los cambios en TU computadora. Para que lleguen a GitHub (la nube), necesitas hacer push (empujar). Piensa en commit como "guardar en tu USB" y push como "subir a Google Drive".' },

    { type: 'diagram', text: '  Tu computadora          GitHub (la nube)\n  ───────────────          ────────────────\n  \n  [Editar código]\n       ↓\n  [git commit]  →  Guardado local ✓\n       ↓\n  [git push]    →  ──────────→  Guardado en GitHub ✓' },

    { type: 'separator' },

    { type: 'quiz',
      question: '¿Qué pasa si la IA rompe tu código y NO habías hecho commit antes?',
      options: [
        'Puedes pedirle a GitHub que lo arregle automáticamente',
        'Pierdes los cambios que funcionaban — no hay punto seguro al cual volver',
        'La IA siempre puede corregir sus errores',
        'No importa, el código se guarda automáticamente'
      ],
      correct: 1,
      explanation: 'Sin un commit previo, no tienes un "checkpoint" al cual regresar. Por eso es importante hacer commits frecuentes, especialmente antes de pedir cambios grandes a la IA.'
    },
  ]
};
