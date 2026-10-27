export type Persona = {
  id: string;
  nombre: string;
  cargo: string;
  bio: string;
  destacado?: boolean;
  foto?: string;
};

/**
 * Composición del Consejo Superior de Arbitraje.
 *
 * Los seis miembros titulares fueron proporcionados por la institución. Las
 * fotografías quedan pendientes; PersonCard muestra las iniciales mientras
 * tanto. El DNI no se publica en el sitio.
 */
export const CONSEJO: Persona[] = [
  {
    id: "c-01",
    nombre: "José Luis García Terrazos",
    cargo: "Consejero",
    bio: "Economista",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_01.webp"
  },
  {
    id: "c-02",
    nombre: "Fanny Galván Muñico",
    cargo: "Consejera",
    bio: "Ingeniero",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_09.webp"
   
  },
  {
    id: "c-03",
    nombre: "Gerardo Zenón Porras Doloirier",
    cargo: "Consejero",
    bio: "Abogado",
    foto: "/consejo-directivo/CONSEJO_DIRECTIVO_IMG_03.webp"
   
  },
  {
    id: "c-04",
    nombre: "Diego Fernando García Vizcarra",
    cargo: "Consejero",
    bio: "Abogado",
  },
  {
    id: "c-05",
     nombre: "Emerson Edson Francisco Lizárraga Peña",
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
  },
  {
    id: "e-05",
    nombre: "Alejandro Chuquimantari Mucha",
    cargo: "Asistencia de Secretaría",
    bio: "Brinda apoyo administrativo y documental a la Secretaría, seguimiento y adecuada tramitación de los procedimientos arbitrales",
  },
  {
    id: "e-06",
    nombre: "Omar Paolo Huaman Cordova",
    cargo: "Asistencia de Secretaría",
    bio: "Brinda apoyo administrativo y documental a la Secretaría, seguimiento y adecuada tramitación de los procedimientos arbitrales",
  },
  {
    id: "e-07",
    nombre: "Guisel",
    cargo: "Asistencia de Secretaría",
    bio: "Brinda apoyo administrativo y documental a la Secretaría, seguimiento y adecuada tramitación de los procedimientos arbitrales",
  },
];
