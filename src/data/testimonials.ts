/**
 * TESTIMONIOS REALES DE USUARIOS.
 *
 * ⚠️ IMPORTANTE — LEE ESTO ANTES DE AÑADIR NADA:
 *
 * Este array está VACÍO a propósito. Publicar testimonios inventados es
 * publicidad engañosa: infringe las políticas de Google Play (Comportamiento
 * engañoso / Tergiversación — justo las secciones 04 y 05 que esta misma web
 * declara cumplir) y las normas de reseñas de la mayoría de jurisdicciones.
 *
 * Rellena este array SOLO con reseñas reales, por ejemplo copiando reseñas
 * públicas de la ficha de Google Play (con el nombre tal y como aparece allí)
 * o con permiso explícito del usuario.
 *
 * Mientras esté vacío, la sección de testimonios no se renderiza y en su lugar
 * se muestran señales de confianza verificables. La web funciona igual.
 *
 * Formato:
 *   { quote: 'Texto literal de la reseña.', author: 'Nombre', role: 'Usuario desde 2026', rating: 5 }
 */
export interface Testimonial {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
}

export const testimonials: Testimonial[] = [];
