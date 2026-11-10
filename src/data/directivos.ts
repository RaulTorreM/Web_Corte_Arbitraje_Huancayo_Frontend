export type Persona = {
  id: string;
  nombre: string;
  cargo: string;
  bio: string;
  destacado?: boolean;
  foto?: string;
  /** Aplica el filtro que iguala el tono de los ternos. */
  uniformSuit?: boolean;
  /** Intensifica el contraste del terno sin oscurecer el fondo. */
  photoTreatment?: "deep" | "deepest";
};

/**
 * Composición del Consejo Superior de Arbitraje.
 *
 * Los seis miembros titulares fueron proporcionados por la institución. Algunas
 * fotografías quedan pendientes; PersonCard muestra las iniciales mientras
 * tanto. El DNI no se publica en el sitio.
 */
export const CONSEJO: Persona[] = [
  {
    id: "c-01",
    nombre: "Emerson Edson Francisco Lizárraga Peña",
    cargo: "Consejero",
    bio: "Abogado",
    foto: "/consejo-superior/CONSEJO_SUPERIOR_IMG_05.webp",
    uniformSuit: true
    
  },
  {
    id: "c-02",
    nombre: "José Luis García Terrazos",
    cargo: "Consejero",
    bio: "Economista",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_01.webp",
    uniformSuit: true
    
   
  },
  {
    id: "c-03",
    nombre: "Gerardo Zenón Porras Doloirier",
    cargo: "Consejero",
    bio: "Abogado",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_03.webp",
    uniformSuit: true,
    photoTreatment: "deep"
   
  },
  {
    id: "c-04",
    nombre: "Fanny Galván Muñico",
    cargo: "Consejera",
    bio: "Ingeniero",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_09.webp"
    
  },
  {
    id: "c-05",
    nombre: "Diego Fernando García Vizcarra",
    cargo: "Consejero",
    bio: "Abogado",
  },
  {
    id: "c-06",
     nombre: "Alicia Eugenia Peña Olano",
    cargo: "Consejera",
    bio: "Abogada",
  },
];


// FALTAN DATOS REALES: el campo `nombre` usa un texto de ejemplo para
// identificar que la composición oficial aún no se ha publicado.
export const EQUIPO: Persona[] = [
  {
    id: "e-01",
    nombre: "Patricia Palomino Cortijo",
    cargo: "Secretario General",
    bio: "Conduce la operación diaria de los casos, las liquidaciones de gastos y las notificaciones.",
    destacado: true,
  },
  {
    id: "e-02",
    nombre: "Luis Enrique Ramos Vivas",
    cargo: "Encargado de Secretaría de Consejo",
    bio: "Coordina las sesiones del Consejo Superior, lleva las actas y verifica el cumplimiento de sus decisiones.",
  },
  {
    id: "e-03",
    nombre: "Klaus Castro Pimentel",
    cargo: "Coordinación Administrativa",
    bio: "Coordina la gestión administrativa y operativa de la Corte, velando por el adecuado desarrollo de los procedimientos arbitrales.",
  },
  {
    id: "e-04",
    nombre: "Teresa Moale Espíritu",
    cargo: "Asistencia de Secretaría",
    bio: "Brinda apoyo administrativo y documental a la Secretaría, seguimiento y adecuada tramitación de los procedimientos arbitrales",
    foto: "/equipo/TERESA_MOALE_ESPIRITU.webp",
  },
  {
    id: "e-05",
    nombre: "Alejandro Chuquimantari Mucha",
    cargo: "Asistencia de Secretaría",
    bio: "Brinda apoyo administrativo y documental a la Secretaría, seguimiento y adecuada tramitación de los procedimientos arbitrales",
    foto: "/equipo/ALEJANDRO_CHUQUIMANTARI_MUCHA.webp",
  },
  {
    id: "e-06",
    nombre: "Omar Paolo Huaman Cordova",
    cargo: "Asistencia de Secretaría",
    bio: "Brinda apoyo administrativo y documental a la Secretaría, seguimiento y adecuada tramitación de los procedimientos arbitrales",
    foto: "/equipo/OMAR_PAOLO_HUAMAN_CORDOVA.webp",
  },
  {
    id: "e-07",
    nombre: "Guissell Phaula Abregu Torres",
    cargo: "Asistencia de Secretaría",
    bio: "Brinda apoyo administrativo y documental a la Secretaría, seguimiento y adecuada tramitación de los procedimientos arbitrales",
    foto: "/equipo/GUISSELL_PHAULA_ABREGU_TORRES.webp",
  },
];
