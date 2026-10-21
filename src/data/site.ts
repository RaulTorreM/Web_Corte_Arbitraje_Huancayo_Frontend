/**
 * Datos centrales del sitio. Cambia aquí el nombre, la URL del sistema
 * externo y los datos de contacto; el resto de la página los consume.
 */
export const SITE = {
  name: "Corte Superior de Arbitraje de Huancayo",
  shortName: "Corte de Arbitraje",
  legalName:
    "Corte Superior de Arbitraje de la Cámara de Comercio y Producción de Huancayo y de la Región Junín",
  description:
    "Administramos arbitrajes y juntas de prevención y resolución de disputas con independencia, transparencia y excelencia técnica en la región Junín.",
  url: "https://arbitraje.camarahuancayo.com.pe",
  mainSiteUrl: "https://camarahuancayo.com.pe",
  mainSiteLabel: "Cámara de Comercio de Huancayo",

  /**
   * TODO: reemplazar por la URL real del sistema de arbitraje.
   * Se usa en el botón principal del header, del hero y del footer.
   */
  systemUrl: "https://sistema-arbitraje.example.com",
  systemLabel: "Sistema de Arbitraje",

  contact: {
    address: "Av. Giráldez N° 634, Huancayo, Perú",
    phone: "915 236 568",
    phoneHref: "tel:+51915236568",
    whatsapp: "51915236568",
    email: "arbitraje@camarahuancayo.com.pe",
    emailSecondary: "secretaria@cch.org.pe",
    schedule: [
      "Lunes a viernes: 8:30 a. m. – 1:00 p. m.",
      "Lunes a viernes: 2:30 p. m. – 6:00 p. m.",
      "Sábados: 9:00 a. m. – 12:00 m.",
    ],
    mapQuery: "Cámara de Comercio de Huancayo",
  },

  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/camarahyo",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/camaradecomerciohyooficial/",
      icon: "instagram",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@cch_hyooficial",
      icon: "tiktok",
    },
  ],
} as const;

export const STATS = [
  { value: 25, suffix: "+", label: "Años de trayectoria institucional" },
  { value: 120, suffix: "+", label: "Árbitros y adjudicadores acreditados" },
  { value: 900, suffix: "+", label: "Controversias administradas" },
  { value: 100, suffix: "%", label: "Confidencialidad garantizada" },
] as const;

export const VALORES = [
  {
    title: "Independencia",
    text: "La Corte actúa con autonomía de las partes, de los árbitros y de cualquier órgano de la Cámara.",
  },
  {
    title: "Imparcialidad",
    text: "Garantizamos igualdad de trato y ausencia de conflictos de interés en cada actuación.",
  },
  {
    title: "Transparencia",
    text: "Publicamos reglamentos, tarifas, nóminas y decisiones para un acceso pleno a la información.",
  },
  {
    title: "Celeridad",
    text: "Procesos administrados con plazos claros y seguimiento permanente de la Secretaría.",
  },
] as const;

export const FUNCIONES = [
  "Designar y confirmar árbitros, de oficio o a propuesta de las partes, conforme al reglamento vigente.",
  "Resolver recusaciones y garantizar la independencia e idoneidad de los profesionales intervinientes.",
  "Administrar el desarrollo del procedimiento arbitral y el flujo documentario de cada expediente.",
  "Gestionar renuncias, remociones y devolución de honorarios con criterios uniformes y motivados.",
  "Aprobar y actualizar anualmente las nóminas de árbitros y adjudicadores de la institución.",
  "Supervisar el cumplimiento del Código de Ética y adoptar las medidas disciplinarias que correspondan.",
] as const;

export const PASOS_ARBITRAJE = [
  {
    title: "Verifica la cláusula arbitral",
    text: "Revisa que tu contrato contenga una cláusula que someta las controversias a la Corte Superior de Arbitraje de Huancayo.",
  },
  {
    title: "Presenta la solicitud",
    text: "Ingresa al Sistema de Arbitraje y registra la solicitud con los datos de las partes y la documentación del contrato.",
  },
  {
    title: "Pago de derechos",
    text: "La Secretaría emite la liquidación de gastos administrativos y honorarios según la cuantía de la controversia.",
  },
  {
    title: "Instalación del tribunal",
    text: "Designado el árbitro único o el tribunal arbitral, se notifica la instalación y se fija el calendario procesal.",
  },
] as const;

export const REQUISITOS = [
  "Copia del contrato o documento que contiene la cláusula arbitral.",
  "Identificación de las partes y de sus representantes legales.",
  "Descripción clara de la controversia y de la pretensión.",
  "Medios probatorios que se ofrecen y su ubicación.",
  "Comprobante de pago de los derechos de administración.",
] as const;
