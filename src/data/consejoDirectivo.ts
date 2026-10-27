export type Directivo = {
  id: string;
  nombre: string;
  cargo: string;
  foto: string;
};

/**
 * Consejo Directivo de la Cámara de Comercio de Huancayo.
 *
 * Datos y fotografías reutilizados de la página institucional de la Cámara.
 * El primer registro es la presidencia y se presenta destacado.
 */
export const CONSEJO_DIRECTIVO: Directivo[] = [
  {
    id: "cd-01",
    nombre: "José Luis García Terrazos",
    cargo: "Presidente",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_01.webp",
  },
  {
    id: "cd-02",
    nombre: "Mariluz Alania Flores",
    cargo: "Vicepresidenta",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_02.webp",
  },
  {
    id: "cd-03",
    nombre: "Gerardo Zenón Porras Dolorier",
    cargo: "Director Secretario",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_03.webp",
  },
  {
    id: "cd-04",
    nombre: "Felipe Neri Huaroto Sairitupac",
    cargo: "Director de Economía y Finanzas",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_04.webp",
  },
  {
    id: "cd-05",
    nombre: "Dante William Alarcón Baltazar",
    cargo: "Director de Servicios, Asesoría y Defensa Empresarial",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_05.webp",
  },
  {
    id: "cd-06",
    nombre: "Jesús Antonio Ortiz Contreras",
    cargo: "Director de Desarrollo Sectorial y Empresarial",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_06.webp",
  },
  {
    id: "cd-07",
    nombre: "Julio Néstor Roca Acevedo",
    cargo: "Director de Cultura, Relaciones Públicas y Comunicaciones",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_07.webp",
  },
  {
    id: "cd-08",
    nombre: "Humberto Velásquez Salaverry",
    cargo: "Director de Vigilancia",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_08.webp",
  },
  {
    id: "cd-09",
    nombre: "Fanny Galván Muñico",
    cargo: "Directora Past Presidenta Inmediata",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_09.webp",
  },
];
