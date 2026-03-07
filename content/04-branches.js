export const lesson = {
  id: 4,
  title: 'Branches',
  sections: [
    { type: 'prompt', text: 'lesson start "Branches"' },

    { type: 'heading', text: 'Branches (Ramas)' },

    { type: 'body', text: 'Un branch es como crear un universo paralelo de tu proyecto. Puedes experimentar libremente en ese universo sin afectar el original. Si el experimento funciona, lo fusionas de vuelta. Si no, simplemente lo borras.' },

    { type: 'separator' },

    { type: 'subheading', text: 'La analogía del universo paralelo' },

    { type: 'diagram', text: '  main (principal) ──●──●──●──●──●──●──●──→  (versión estable)\n                          │              ↗\n                          └──●──●──●──●──   (branch: "nuevo-diseño")\n                             Experimentas aquí\n                             sin riesgo' },

    { type: 'spacer' },

    { type: 'body', text: 'En este diagrama, la línea de arriba es tu proyecto principal (branch "main"). La línea de abajo es un branch donde experimentas con un nuevo diseño. Cuando estás contento con el resultado, lo "fusionas" (merge) de vuelta a main.' },

    { type: 'separator' },

    { type: 'subheading', text: 'El branch "main"' },

    { type: 'body', text: 'Cada repo tiene un branch principal llamado "main" (antes se llamaba "master"). Este es tu versión de producción — la versión real, la que funciona, la que tus usuarios ven.' },

    { type: 'spacer' },

    { type: 'highlight', text: 'Regla de oro: NUNCA experimentes directamente en main. Siempre crea un branch nuevo para cambios.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Escenario práctico con vibe coding' },

    { type: 'body', text: 'Imagina que tu app de delivery funciona perfectamente. Quieres agregar un sistema de cupones de descuento:' },

    { type: 'body-instant', text: '  1. Creas un branch: "feature/cupones-descuento"' },
    { type: 'body-instant', text: '  2. Le pides a la IA que implemente los cupones en ese branch' },
    { type: 'body-instant', text: '  3. Pruebas que todo funcione' },
    { type: 'body-instant', text: '  4. Si funciona → merge (fusionar) al branch main' },
    { type: 'body-instant', text: '  5. Si no funciona → borras el branch, main sigue intacto' },

    { type: 'spacer' },

    { type: 'body', text: 'Mientras tanto, tu app de delivery sigue funcionando sin problemas en main. Tus usuarios nunca se ven afectados por tus experimentos.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Nombres comunes de branches' },

    { type: 'code', text: '  main                  →  Versión de producción\n  develop               →  Versión de desarrollo\n  feature/nueva-función  →  Para agregar algo nuevo\n  fix/corregir-bug       →  Para arreglar un error\n  hotfix/urgente         →  Para correcciones urgentes' },

    { type: 'spacer' },

    { type: 'tip', text: 'Herramientas como Claude Code y Cursor crean branches automáticamente cuando trabajas en nuevas funciones. ¡No tienes que recordar los comandos!' },

    { type: 'separator' },

    { type: 'subheading', text: 'Múltiples branches al mismo tiempo' },

    { type: 'diagram', text: '  main ──●──●──●──●──●──●──●──●──●──●──→\n              │         │       ↗\n              │         └──●──●──  branch: "pagos-stripe"\n              │\n              └──●──●──●──●──●──→  branch: "rediseño-landing"\n                                   (aún en progreso)' },

    { type: 'spacer' },

    { type: 'body', text: 'Puedes tener varios branches activos al mismo tiempo. Por ejemplo, uno para pagos y otro para rediseño, trabajándose en paralelo sin conflictos.' },

    { type: 'separator' },

    { type: 'quiz',
      question: '¿Por qué NO deberías trabajar directamente en el branch "main"?',
      options: [
        'Porque main no permite hacer cambios',
        'Porque si algo se rompe, afectas la versión de producción que usan tus usuarios',
        'Porque main es solo para leer código, no para editarlo',
        'No hay ninguna razón, puedes trabajar en main sin problema'
      ],
      correct: 1,
      explanation: 'Main es tu versión de producción. Si experimentas directamente ahí y algo se rompe, tus usuarios se ven afectados. Usar branches te protege de esto.'
    },
  ]
};
