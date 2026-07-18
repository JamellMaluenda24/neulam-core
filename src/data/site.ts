/**
 * Fuente única de verdad para URLs, metadatos y Schema.org.
 * Cambiar el dominio o el ID de Play aquí actualiza toda la web.
 */

export const SITE = {
  name: 'Neulam Core',
  appName: 'Auctus',
  url: 'https://neulam-core.vercel.app',
  ogImage: '/og-image.png', // 1200×630 — generado con scripts/generate-og.mjs
  email: 'neulam.core@gmail.com',
  author: 'Jamell Maluenda',
  github: 'https://github.com/JamellMaluenda24',
} as const;

export const ANDROID_PACKAGE = 'com.neulamcore.auctus';

export const PLAY_STORE_URL = `https://play.google.com/store/apps/details?id=${ANDROID_PACKAGE}`;

/** Schema.org — ficha de la app móvil. */
export const appJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  '@id': `${SITE.url}/#auctus`,
  name: 'Auctus — Habit Tracker',
  alternateName: 'Auctus Habit Tracker',
  description:
    'App de seguimiento de hábitos para construir disciplina diaria. Rachas, rangos y XP, recordatorios inteligentes, estadísticas de progreso e insights personalizados. Funciona offline.',
  applicationCategory: 'LifestyleApplication',
  applicationSubCategory: 'Productividad y hábitos',
  operatingSystem: 'Android 5.0+',
  installUrl: PLAY_STORE_URL,
  downloadUrl: PLAY_STORE_URL,
  url: `${SITE.url}/#app`,
  image: `${SITE.url}/logo.png`,
  inLanguage: 'es',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'CLP',
    availability: 'https://schema.org/InStock',
    description: 'Gratis para empezar, con suscripción Premium opcional.',
  },
  featureList: [
    'Seguimiento de hábitos diarios',
    'Rachas y escudos de racha',
    'Sistema de rangos y XP',
    'Recordatorios inteligentes',
    'Estadísticas y análisis de progreso',
    'Insights personalizados y Discipline Score',
    'Registro de ánimo y reflexión',
    'Funciona sin conexión con sincronización en la nube',
    'Exportación de progreso en PDF',
  ],
  author: {
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.url,
  },
  publisher: { '@id': `${SITE.url}/#organization` },
};

/** Schema.org — organización que publica la app. */
export const orgJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/logo.png`,
  description:
    'Organización indie chilena de software enfocada en herramientas de productividad y bienestar personal.',
  foundingLocation: { '@type': 'Place', name: 'Chile' },
  sameAs: [SITE.github],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    email: SITE.email,
    availableLanguage: ['es', 'en'],
  },
};
