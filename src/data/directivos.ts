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
    nombre: "Diego Fernando García Vizcarra",
    cargo: "Consejero",
    bio: "Abogado",
  },
  {
    id: "c-02",
    nombre: "Emerson Edson Francisco Lizárraga Peña",
    cargo: "Consejero",
    bio: "Abogado",
  },
  {
    id: "c-03",
    nombre: "Alicia Eugenia Peña Olano",
    cargo: "Consejera",
    bio: "Abogada",
  },
  {
    id: "c-04",
    nombre: "José Luis García Terrazos",
    cargo: "Consejero",
    bio: "Economista",
  },
  {
    id: "c-05",
    nombre: "Fanny Galván Muñico",
    cargo: "Consejera",
    bio: "Ingeniero",
  },
  {
    id: "c-06",
    nombre: "Gerardo Zenón Porras Doloirier",
    cargo: "Consejero",
    bio: "Abogado",
  },
];


// FALTAN DATOS REALES: el campo `nombre` usa un texto de ejemplo para
// identificar que la composición oficial aún no se ha publicado.
export const EQUIPO: Persona[] = [
  {
    id: "e-01",
    nombre: "[Nombre]",
    cargo: "Secretario General",
    bio: "Conduce la operación diaria de los casos, las liquidaciones de gastos y las notificaciones.",
    destacado: true,
  },
  {
    id: "e-02",
    nombre: "[Nombre]",
    cargo: "Secretaria del Consejo",
    bio: "Coordina las sesiones del Consejo Superior, lleva las actas y verifica el cumplimiento de sus decisiones.",
  },
  {
    id: "e-03",
    nombre: "[Nombre]",
    cargo: "Secretario Arbitral Senior",
    bio: "Acompaña los casos ordinarios y coordina la constitución de los tribunales arbitrales.",
  },
  {
    id: "e-04",
    nombre: "[Nombre]",
    cargo: "Secretaria Arbitral",
    bio: "Gestiona los casos acelerados y sociales, y el flujo documentario de cada expediente.",
  },
  {
    id: "e-05",
    nombre: "[Nombre]",
    cargo: "Coordinadora administrativa",
    bio: "Administra liquidaciones, pagos y la atención de requerimientos de las partes.",
  },
];
