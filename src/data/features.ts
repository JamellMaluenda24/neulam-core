export interface Feature {
  icon: string;
  title: string;
  desc: string;
  free: boolean;
}

export const features: Feature[] = [
  { icon: '🔥', title: 'Rachas y consistencia', desc: 'El sistema de rachas te mantiene comprometido. Perder una es doloroso — de eso se trata.', free: true },
  { icon: '🎖️', title: 'Rangos y XP', desc: 'Gana experiencia con cada hábito y sube por 8 niveles de disciplina. Desbloquea logros con base científica a medida que progresas.', free: true },
  { icon: '🛡️', title: 'Escudos de racha', desc: 'Un mal día no debería borrar semanas de esfuerzo. Los escudos protegen tu racha cuando la vida se interpone.', free: false },
  { icon: '🌴', title: 'Pase de vacaciones', desc: 'Congela todas tus rachas durante un viaje o descanso. Vuelves justo donde lo dejaste, sin penalización.', free: false },
  { icon: '🧠', title: 'Ánimo y reflexión', desc: 'Registra cómo te sientes cada día y descubre cómo tus hábitos y tu estado de ánimo se influyen mutuamente.', free: true },
  { icon: '📈', title: 'Insights avanzados', desc: 'Discipline Score, tendencias, correlaciones y proyecciones. Saber cuándo fallas es tan valioso como saber cuándo aciertas.', free: false },
  { icon: '📄', title: 'Exporta tu progreso', desc: 'Genera reportes PDF detallados de tu evolución para guardarlos o compartirlos.', free: false },
  { icon: '☁️', title: 'Offline-first + nube', desc: 'Funciona sin conexión y sincroniza en segundo plano. Tus datos viven cifrados en tu dispositivo (AES-256).', free: true },
  { icon: '🌙', title: 'Dark mode nativo', desc: 'Interfaz oscura pensada para el bienestar visual. Tus ojos lo agradecerán a las 11pm.', free: true },
];
