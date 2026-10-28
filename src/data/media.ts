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

const fotoConsejoDirectivo: MediaAsset = {
  src: "/images/CONSEJODIRECTIVO_IMG_01.jpeg",
  alt: "Consejo Directivo de la Cámara de Comercio de Huancayo",
  fit: "cover",
};

const fotoSede: MediaAsset = {
  src: "/images/ARBITRAJE_IMG_02-01.jpg",
  alt: "Fachada de la sede de la Corte Superior de Arbitraje en Huancayo",
  fit: "cover",
};

const fotoSesion: MediaAsset = {
  src: "/images/ARBITRAJE_IMG_02-03.jpg",
  alt: "Sala de sesiones de la Corte con la bandera institucional",
  fit: "cover",
};

const fotoEncuentro: MediaAsset = {
  src: "/images/ARBITRAJE_IMG_02-04.jpg",
  alt: "Encuentro institucional de la Cámara de Comercio de Huancayo con profesionales invitados",
  fit: "cover",
};

const fotoCivica: MediaAsset = {
  src: "/images/ARBITRAJE_IMG_02-02.jpg",
  alt: "Acto cívico de la Cámara de Comercio de Huancayo en el centro de la ciudad",
  fit: "cover",
};

export const MEDIA = {
  hero: sello,
  sede: sello,
  consejoDirectivo: fotoConsejoDirectivo,
  equipo: sello,
  arbitraje: sello,
  conciliacion: sello,
  jprd: sello,
  capacitaciones: sello,
  documentos: sello,

  // TEMPORAL: fotos de la sede usadas en el inicio mientras la institución
  // no entregue imágenes específicas por servicio. Reemplazar el src y el alt.
  heroSede: fotoSede,
  servicioArbitraje: fotoSesion,
  servicioJprd: fotoEncuentro,
  servicioConciliacion: fotoCivica,
  quienesSede: fotoSede,
} satisfies Record<string, MediaAsset>;
