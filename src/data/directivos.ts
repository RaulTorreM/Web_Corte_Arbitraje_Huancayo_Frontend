export type Persona = {
  id: string;
  nombre: string;
  cargo: string;
  bio: string;
  destacado?: boolean;
};

/**
 * Perfiles de demostración del Consejo Superior de Arbitraje.
 * Reemplazar por los consejeros designados cuando la Cámara publique
 * la composición oficial. El Estatuto permite hasta siete titulares.
 */
export const CONSEJO: Persona[] = [
  {
    id: "c-01",
    nombre: "María Elena Quispe Rojas",
    cargo: "Presidenta del Consejo Superior",
    bio: "Abogada con maestría en Derecho Administrativo y 18 años de experiencia en arbitraje y contratación pública.",
    destacado: true,
  },
  {
    id: "c-02",
    nombre: "Carlos Alberto Unsihuay León",
    cargo: "Vicepresidente",
    bio: "Ingeniero civil especialista en contratos FIDIC, JPRD y dispute boards, con 15 años de experiencia.",
  },
  {
    id: "c-03",
    nombre: "Patricia Salomé Andrade Vílchez",
    cargo: "Consejera",
    bio: "Árbitra registrada en materia comercial y societaria, con 12 años de experiencia.",
  },
  {
    id: "c-04",
    nombre: "Jorge Luis Matos Paredes",
    cargo: "Consejero",
    bio: "Ingeniero civil y perito en valorizaciones y ampliaciones de plazo, con 20 años de experiencia.",
  },
  {
    id: "c-05",
    nombre: "Rosa Amelia Cárdenas Yupanqui",
    cargo: "Consejera",
    bio: "Abogada especializada en derecho laboral y seguridad social; árbitra única en arbitraje social.",
  },
  {
    id: "c-06",
    nombre: "Fernando Chávez Gutiérrez",
    cargo: "Consejero",
    bio: "Abogado especialista en contrataciones del Estado y arbitraje de emergencia.",
  },
  {
    id: "c-07",
    nombre: "Lucía Fernanda Torres Baldeón",
    cargo: "Consejera",
    bio: "Árbitra internacional y miembro extranjero del Consejo, con 16 años de experiencia.",
  },
];

export const EQUIPO: Persona[] = [
  {
    id: "e-01",
    nombre: "Diego Armando Ríos Campos",
    cargo: "Secretario General",
    bio: "Conduce la operación diaria de los casos, las liquidaciones de gastos y las notificaciones.",
    destacado: true,
  },
  {
    id: "e-02",
    nombre: "Valeria Nicole Poma Huamán",
    cargo: "Secretaria del Consejo",
    bio: "Coordina las sesiones del Consejo Superior, lleva las actas y verifica el cumplimiento de sus decisiones.",
  },
  {
    id: "e-03",
    nombre: "Renzo Sebastián Aliaga Torres",
    cargo: "Secretario Arbitral Senior",
    bio: "Acompaña los casos ordinarios y coordina la constitución de los tribunales arbitrales.",
  },
  {
    id: "e-04",
    nombre: "Camila Alejandra Muñoz Vera",
    cargo: "Secretaria Arbitral",
    bio: "Gestiona los casos acelerados y sociales, y el flujo documentario de cada expediente.",
  },
  {
    id: "e-05",
    nombre: "Janet Rocío Campos Lazo",
    cargo: "Coordinadora administrativa",
    bio: "Administra liquidaciones, pagos y la atención de requerimientos de las partes.",
  },
];
