import logo from "../assets/brand/logo-corte.png";

/**
 * Imágenes del sitio.
 *
 * TEMPORAL: mientras la institución no entregue las fotografías definitivas,
 * todas las claves apuntan al sello institucional. Para reemplazarlas, cambia
 * solo el `src` y el `alt` de cada clave; las páginas consumen este archivo.
 *
 * `fit: "contain"` muestra el sello completo sobre el fondo beige. Cuando se
 * usen fotografías, cambia el fit a "cover" si la imagen lo requiere.
 */
export type MediaAsset = {
  src: string;
  alt: string;
  fit: "cover" | "contain";
};

const sello: MediaAsset = {
  src: logo,
  alt: "Sello de la Corte Superior de Arbitraje de Huancayo",
  fit: "contain",
};

export const MEDIA = {
  hero: sello,
  sede: sello,
  equipo: sello,
  arbitraje: sello,
  conciliacion: sello,
  jprd: sello,
  capacitaciones: sello,
  documentos: sello,
} satisfies Record<string, MediaAsset>;
