/**
 * Preguntas frecuentes. Alimentan tanto la sección visible como el
 * bloque FAQPage de Schema.org (elegible para rich results en Google).
 * Regla de Google: toda pregunta del schema debe ser visible en la página.
 */
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: '¿Qué es Auctus y para qué sirve?',
    a: 'Auctus es una app de seguimiento de hábitos para Android que te ayuda a construir disciplina diaria y sostener tu rutina. Creas los hábitos que quieres consolidar, los marcas cada día y la app mide tu constancia con rachas, rangos, XP y estadísticas de progreso.',
  },
  {
    q: '¿Auctus es gratis?',
    a: 'Sí. Puedes crear hábitos, marcarlos a diario, mantener rachas, subir de rango y ver tus estadísticas básicas sin pagar nada y sin anuncios. Existe una suscripción Premium opcional que añade escudos de racha, pase de vacaciones, insights avanzados y exportación de tu progreso en PDF.',
  },
  {
    q: '¿Cómo descargo la app de hábitos Auctus?',
    a: 'Auctus está disponible en Google Play para dispositivos Android. Busca "Auctus" en Play Store o entra desde el botón de descarga de esta página. La instalación es gratuita.',
  },
  {
    q: '¿Funciona sin conexión a internet?',
    a: 'Sí. Auctus es una aplicación offline-first: todos tus hábitos y registros se guardan cifrados en tu dispositivo y funcionan sin internet. Cuando recuperas la conexión, la app sincroniza tus datos en la nube automáticamente en segundo plano.',
  },
  {
    q: '¿Cuántos días se necesitan para crear un hábito?',
    a: 'La cifra popular son 21 días, aunque la investigación en psicología del comportamiento apunta a que la automatización de un hábito tarda en promedio unos dos meses y varía mucho según la persona y la conducta. Por eso Auctus mide la constancia a largo plazo con rachas y rangos, en lugar de prometerte un número mágico.',
  },
  {
    q: '¿Qué son las rachas y los escudos de racha?',
    a: 'La racha son los días consecutivos que cumples un hábito: es tu principal señal de consistencia. Los escudos de racha son una función Premium que protege esa racha cuando fallas un día puntual, para que un imprevisto no borre semanas de esfuerzo.',
  },
  {
    q: '¿Cómo funciona el sistema de rangos y XP?',
    a: 'Cada hábito completado te da puntos de experiencia (XP). Al acumular XP subes por ocho niveles de disciplina y desbloqueas logros basados en principios de formación de hábitos. Es una forma de hacer visible el progreso que normalmente no se nota día a día.',
  },
  {
    q: '¿Qué datos recopila Auctus y son seguros?',
    a: 'Auctus recopila el mínimo necesario para funcionar y sincronizar tu cuenta. Tus datos se almacenan cifrados con AES-256 en tu dispositivo y se transmiten cifrados. No vendemos datos a terceros. Puedes revisar el detalle completo en la política de privacidad y en la declaración de permisos de esta web.',
  },
  {
    q: '¿Cómo elimino mi cuenta y mis datos?',
    a: 'Puedes solicitar la eliminación de tu cuenta y de todos los datos asociados desde la propia app o desde la página de eliminación de cuenta de esta web. El proceso borra tus hábitos, registros y datos de perfil de forma permanente.',
  },
  {
    q: '¿Cómo cancelo la suscripción Premium?',
    a: 'La suscripción Premium se gestiona a través de Google Play. Puedes cancelarla en cualquier momento desde Play Store, en Pagos y suscripciones. Mantendrás el acceso Premium hasta el final del período que ya pagaste y no se te cobrará de nuevo.',
  },
];
