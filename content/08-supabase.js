export const lesson = {
  id: 8,
  title: 'Supabase',
  sections: [
    { type: 'prompt', text: 'lesson start "Supabase"' },

    { type: 'heading', text: 'Supabase: Tu Backend en una Caja' },

    { type: 'body', text: 'Cada app necesita un "backend" — el lugar donde se guardan datos, se manejan usuarios, y se ejecuta lógica que el usuario no ve. Supabase te da todo eso listo para usar, sin escribir backend manualmente.' },

    { type: 'separator' },

    { type: 'subheading', text: 'La analogía del restaurante' },

    { type: 'body', text: 'Tu app es un restaurante:' },

    { type: 'body-instant', text: '  • Frontend = El salón (lo que ven los clientes: menú, decoración, mesas)' },
    { type: 'body-instant', text: '  • Backend  = La cocina (donde se prepara todo, el cliente no la ve)' },
    { type: 'body-instant', text: '  • Supabase = La cocina ya equipada y con chef incluido' },

    { type: 'spacer' },

    { type: 'body', text: 'Sin Supabase, tendrías que construir la cocina desde cero: comprar estufas, contratar chef, diseñar el menú interno. Con Supabase, llegas y la cocina ya está lista. Solo le dices qué platos quieres servir.' },

    { type: 'separator' },

    { type: 'subheading', text: '¿Qué te da Supabase?' },

    { type: 'spacer' },

    { type: 'highlight', text: '1. Database (Base de datos) — PostgreSQL' },
    { type: 'body', text: 'Piensa en una hoja de Excel muy poderosa. Guardas usuarios, productos, órdenes, lo que sea. Pero a diferencia de Excel, puede manejar millones de registros de forma rápida y segura.' },

    { type: 'spacer' },

    { type: 'highlight', text: '2. Authentication (Autenticación)' },
    { type: 'body', text: 'Login y registro resueltos. Tus usuarios pueden entrar con email, Google, Apple, o magic links (un link que llega al email y los loguea automáticamente). Tú no programas nada de esto.' },

    { type: 'spacer' },

    { type: 'highlight', text: '3. Storage (Almacenamiento de archivos)' },
    { type: 'body', text: 'Un Google Drive para tu app. Tus usuarios pueden subir fotos de perfil, PDFs, documentos — todo se guarda en Supabase Storage.' },

    { type: 'spacer' },

    { type: 'highlight', text: '4. Realtime (Tiempo real)' },
    { type: 'body', text: 'Cambios instantáneos. Si un usuario actualiza algo, todos los demás lo ven al momento. Como un chat en vivo o las notificaciones de WhatsApp.' },

    { type: 'spacer' },

    { type: 'highlight', text: '5. Edge Functions (Funciones en la nube)' },
    { type: 'body', text: 'Pequeñas piezas de lógica que corren en los servidores de Supabase. Por ejemplo: "cuando alguien hace un pedido, enviar un email de confirmación".' },

    { type: 'separator' },

    { type: 'subheading', text: '¿Por qué Supabase para vibe coding?' },

    { type: 'body', text: 'Supabase y la IA se llevan excepcionalmente bien:' },

    { type: 'body-instant', text: '  • Documentación clara que la IA entiende perfectamente' },
    { type: 'body-instant', text: '  • Puedes decirle a la IA: "Conecta con Supabase y trae todos los productos"' },
    { type: 'body-instant', text: '  • La IA genera el código de conexión automáticamente' },
    { type: 'body-instant', text: '  • No necesitas entender SQL ni configuración de servidores' },

    { type: 'spacer' },

    { type: 'tip', text: 'Supabase tiene un plan gratuito generoso. Puedes crear tu primer proyecto sin pagar nada.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Supabase vs Firebase' },

    { type: 'body', text: 'Firebase es la alternativa de Google. Ambos resuelven problemas similares, pero:' },

    { type: 'diagram', text: '  Supabase                         Firebase\n  ────────                         ────────\n  ✅ Open source (código abierto)  ❌ Cerrado (propiedad de Google)\n  ✅ Usa PostgreSQL (estándar)     ❌ Base de datos propietaria\n  ✅ Puedes migrar tus datos       ❌ Más difícil de migrar\n  ✅ SQL (lenguaje universal)      ❌ NoSQL (diferente paradigma)\n  ✅ Pricing predecible            ⚠️  Puede escalar costos rápido' },

    { type: 'spacer' },

    { type: 'body', text: 'Supabase usa PostgreSQL, la base de datos más popular del mundo. Si algún día quieres cambiar de plataforma, tus datos se mueven fácilmente porque PostgreSQL es un estándar.' },

    { type: 'separator' },

    { type: 'subheading', text: 'Ejemplo: App de delivery con Supabase' },

    { type: 'code', text: '  Lo que tú necesitas:           Lo que Supabase te da:\n  ─────────────────────          ────────────────────────\n  Guardar restaurantes           → Database (tabla "restaurantes")\n  Login de usuarios              → Authentication (Google, email)\n  Fotos de platillos             → Storage (bucket de imágenes)\n  Pedidos en tiempo real         → Realtime (actualizaciones live)\n  Enviar confirmación por email  → Edge Functions (trigger automático)' },

    { type: 'separator' },

    { type: 'quiz',
      question: '¿Qué problema principal resuelve Supabase?',
      options: [
        'Diseñar la interfaz visual de tu app',
        'Darte un backend completo (base de datos, auth, storage) sin programar servidor',
        'Reemplazar GitHub para guardar código',
        'Crear inteligencia artificial para tu app'
      ],
      correct: 1,
      explanation: 'Supabase es un "backend as a service": te da base de datos, autenticación, almacenamiento de archivos y más, todo listo para usar. Tú te enfocas en el frontend (lo que ve el usuario).'
    },
  ]
};
