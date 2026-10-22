export type Persona = {
  id: string;
  nombre: string;
  cargo: string;
  bio: string;
  destacado?: boolean;
  foto?: string;
};

/**
 * Perfiles del Consejo Superior de Arbitraje.
 *
 * FALTAN DATOS REALES: el nombre de cada persona se muestra como
 * "[Nombre]" hasta que la Cámara publique la composición
 * oficial. Reemplazar ese texto por los consejeros designados.
 * El Estatuto permite hasta siete titulares.
 */

// const fototest = "../src/assets/brand/logo-corte.png"

// FALTAN DATOS REALES: el campo `nombre` usa un texto de ejemplo para
// identificar que la composición oficial aún no se ha publicado.
export const CONSEJO: Persona[] = [
  {
    id: "c-01",
    nombre: "[Nombre]",
    cargo: "Presidenta del Consejo Superior",
    bio: "Abogada con maestría en Derecho Administrativo y 18 años de experiencia en arbitraje y contratación pública.",
    destacado: true,
    // foto: fototest
  },
  {
    id: "c-02",
    nombre: "[Nombre]",
    cargo: "Vicepresidente",
    bio: "Ingeniero civil especialista en contratos FIDIC, JPRD y dispute boards, con 15 años de experiencia.",
  },
  {
    id: "c-03",
    nombre: "[Nombre]",
    cargo: "Consejera",
    bio: "Árbitra registrada en materia comercial y societaria, con 12 años de experiencia.",
  },
  {
    id: "c-04",
    nombre: "[Nombre]",
    cargo: "Consejero",
    bio: "Ingeniero civil y perito en valorizaciones y ampliaciones de plazo, con 20 años de experiencia.",
  },
  {
    id: "c-05",
    nombre: "[Nombre]",
    cargo: "Consejera",
    bio: "Abogada especializada en derecho laboral y seguridad social; árbitra única en arbitraje social.",
  },
  {
    id: "c-06",
    nombre: "[Nombre]",
    cargo: "Consejero",
    bio: "Abogado especialista en contrataciones del Estado y arbitraje de emergencia.",
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
