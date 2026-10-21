export type Persona = {
  id: string;
  nombre: string;
  cargo: string;
  bio: string;
  destacado?: boolean;
};

export const CONSEJO: Persona[] = [
  {
    id: "c-01",
    nombre: "Luis Amílcar Ruiz Vigo",
    cargo: "Presidente del Consejo Directivo",
    bio: "Abogado con especialización en arbitraje y contratación pública. Dirige la política institucional de la Corte.",
    destacado: true,
  },
  {
    id: "c-02",
    nombre: "Esperanza León Deza",
    cargo: "Vicepresidenta",
    bio: "Abogada especialista en derecho civil y comercial, con amplia experiencia en administración de controversias.",
  },
  {
    id: "c-03",
    nombre: "Fernando Nakaya Vargas",
    cargo: "Consejero",
    bio: "Árbitro y docente de derecho corporativo. Coordina la actualización de la nómina institucional.",
  },
  {
    id: "c-04",
    nombre: "María Isabel Pimentel Tello",
    cargo: "Consejera",
    bio: "Abogada especializada en derecho procesal y arbitraje, con trayectoria en el sector público.",
  },
  {
    id: "c-05",
    nombre: "Raúl Escobedo Medina",
    cargo: "Consejero",
    bio: "Contador público y especialista en tributación, aporta la mirada económica a la gestión de la Corte.",
  },
  {
    id: "c-06",
    nombre: "Silvia V. Alayza Gaona",
    cargo: "Secretaria General",
    bio: "Abogada responsable de la administración de expedientes, notificaciones y atención a los usuarios.",
  },
];

export const EQUIPO: Persona[] = [
  {
    id: "e-01",
    nombre: "Silvia V. Alayza Gaona",
    cargo: "Secretaría General",
    bio: "Conduce la gestión administrativa y el registro de actuaciones de la Corte.",
    destacado: true,
  },
  {
    id: "e-02",
    nombre: "Diana Lucero Campos",
    cargo: "Coordinación de Expedientes",
    bio: "Supervisa la recepción, calificación y seguimiento de las solicitudes de arbitraje.",
  },
  {
    id: "e-03",
    nombre: "Marco Antonio Rivas",
    cargo: "Asesoría Legal",
    bio: "Brinda soporte normativo y revisa la consistencia de las decisiones administrativas.",
  },
  {
    id: "e-04",
    nombre: "Rocío del Pilar Tunque",
    cargo: "Atención al Usuario",
    bio: "Orienta a las partes y a los profesionales sobre requisitos, plazos y canales de contacto.",
  },
];
