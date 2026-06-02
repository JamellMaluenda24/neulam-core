export interface Feature {
  icon: string;
  title: string;
  desc: string;
  free: boolean;
}

export const features: Feature[] = [
  { icon: '🔥', title: 'Rachas y consistencia', desc: 'El sistema de rachas te mantiene comprometido. Perder una es doloroso — de eso se trata.', free: true },
  { icon: '🧠', title: 'Diseñado con psicología', desc: 'Basado en el loop hábito-recompensa. Notificaciones no invasivas, progreso visible y pequeños logros.', free: true },
  { icon: '📅', title: 'Estadísticas avanzadas', desc: 'Vista semanal, mensual y tendencias detalladas. Saber cuándo fallas es tan valioso como saber cuándo aciertas.', free: false },
  { icon: '🎯', title: 'Freemium honesto', desc: 'Lo esencial es gratis para siempre. El plan Premium desbloquea funciones avanzadas para quienes quieren ir más lejos — sin sorpresas.', free: true },
  { icon: '🌙', title: 'Dark mode nativo', desc: 'Interfaz oscura pensada para el bienestar visual. Tus ojos lo agradecerán a las 11pm.', free: true },
];
