export type Profesional = {
  id: string;
  nombre: string;
  profesion: string;
  especialidades: string[];
  rna: boolean;
  tipo: "arbitro" | "adjudicador";
  rol?: "presidente" | "integrante";
};

/**
 * Datos de demostración. Reemplazar por la nómina oficial cuando
 * la institución entregue el listado definitivo o se conecte la API.
 */
export const PROFESIONALES: Profesional[] = [
  {
    id: "a-01",
    nombre: "Ana Lucía Rojas Camarena",
    profesion: "Abogada",
    especialidades: ["Contrataciones del Estado", "Derecho administrativo", "Arbitraje"],
    rna: true,
    tipo: "arbitro",
    rol: "presidente",
  },
  {
    id: "a-02",
    nombre: "Carlos Alberto Mendoza Paredes",
    profesion: "Abogado",
    especialidades: ["Derecho civil y comercial", "Contratos", "Arbitraje"],
    rna: true,
    tipo: "arbitro",
    rol: "presidente",
  },
  {
    id: "a-03",
    nombre: "Verónica Isabel Salazar Núñez",
    profesion: "Abogada",
    especialidades: ["Derecho de la construcción", "Contrataciones del Estado"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-04",
    nombre: "Jorge Luis Villanueva Soto",
    profesion: "Ingeniero civil",
    especialidades: ["Valorizaciones", "Ampliaciones de plazo", "Peritajes técnicos"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-05",
    nombre: "María Elena Quispe Huamán",
    profesion: "Abogada",
    especialidades: ["Derecho laboral", "Derecho administrativo", "Arbitraje"],
    rna: true,
    tipo: "arbitro",
    rol: "presidente",
  },
  {
    id: "a-06",
    nombre: "Ricardo Antonio Baldeón Ferrer",
    profesion: "Abogado",
    especialidades: ["Derecho societario", "Contratos comerciales"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-07",
    nombre: "Patricia Roxana Cárdenas León",
    profesion: "Contadora pública",
    especialidades: ["Tributación", "Peritajes contables", "Valorización de empresas"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-08",
    nombre: "Fernando Augusto Nakaya Torres",
    profesion: "Abogado",
    especialidades: ["Arbitraje comercial", "Derecho corporativo", "Protección de datos"],
    rna: true,
    tipo: "arbitro",
    rol: "presidente",
  },
  {
    id: "a-09",
    nombre: "Silvia Margarita Alayza Ríos",
    profesion: "Abogada",
    especialidades: ["Contrataciones del Estado", "Derecho administrativo sancionador"],
    rna: true,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-10",
    nombre: "Hugo Enrique Díaz Campos",
    profesion: "Ingeniero civil",
    especialidades: ["Obras públicas", "Metrados y presupuestos", "Resolución de disputas"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-11",
    nombre: "Gabriela Fernanda Torres Ríos",
    profesion: "Abogada",
    especialidades: ["Derecho inmobiliario", "Saneamiento legal", "Contratos"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-12",
    nombre: "Luis Alberto Camposano Vera",
    profesion: "Abogado",
    especialidades: ["Derecho de la construcción", "Juntas de resolución de disputas"],
    rna: true,
    tipo: "arbitro",
    rol: "presidente",
  },
  {
    id: "a-13",
    nombre: "Rosa Amelia Suárez Ponce",
    profesion: "Abogada",
    especialidades: ["Derecho civil", "Familia patrimonial", "Conciliación"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-14",
    nombre: "Miguel Ángel Poma Yupanqui",
    profesion: "Ingeniero industrial",
    especialidades: ["Gestión de proyectos", "Cadena de suministro", "Peritajes"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-15",
    nombre: "Claudia Beatriz Espinoza Rojas",
    profesion: "Abogada",
    especialidades: ["Contrataciones del Estado", "Derecho penal económico"],
    rna: true,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-16",
    nombre: "Óscar David Meza Huaringa",
    profesion: "Abogado",
    especialidades: ["Arbitraje comercial", "Derecho marítimo", "Seguros"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-17",
    nombre: "Elena Sofía Bravo Quintana",
    profesion: "Arquitecta",
    especialidades: ["Diseño y supervisión de obras", "Patologías constructivas"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-18",
    nombre: "Javier Ernesto Loayza Medina",
    profesion: "Abogado",
    especialidades: ["Derecho minero", "Derecho ambiental", "Arbitraje"],
    rna: true,
    tipo: "arbitro",
    rol: "presidente",
  },
  {
    id: "a-19",
    nombre: "Carmen Julia Paredes Ayala",
    profesion: "Abogada",
    especialidades: ["Contrataciones del Estado", "Derecho municipal"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "a-20",
    nombre: "Andrés Felipe Guerra Salinas",
    profesion: "Economista",
    especialidades: ["Valorización económica", "Regulación de servicios públicos"],
    rna: false,
    tipo: "arbitro",
    rol: "integrante",
  },
  {
    id: "j-01",
    nombre: "Mónica Patricia Zevallos Ruiz",
    profesion: "Abogada",
    especialidades: ["Juntas de resolución de disputas", "Contrataciones del Estado"],
    rna: true,
    tipo: "adjudicador",
    rol: "presidente",
  },
  {
    id: "j-02",
    nombre: "Roberto Carlos Chávez Landeo",
    profesion: "Ingeniero civil",
    especialidades: ["Contratos NEC", "Obras públicas", "Dispute boards"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
  {
    id: "j-03",
    nombre: "Lucía Fernanda Arana Pacheco",
    profesion: "Abogada",
    especialidades: ["Derecho de la construcción", "Arbitraje", "JRD"],
    rna: true,
    tipo: "adjudicador",
    rol: "presidente",
  },
  {
    id: "j-04",
    nombre: "Víctor Hugo Salgado Mejía",
    profesion: "Ingeniero civil",
    especialidades: ["Programación de obra", "Valorizaciones", "Ampliaciones de plazo"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
  {
    id: "j-05",
    nombre: "Diana Carolina Flores Vega",
    profesion: "Abogada",
    especialidades: ["Contratación pública", "Derecho administrativo"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
  {
    id: "j-06",
    nombre: "Pedro Antonio Ríos Gamarra",
    profesion: "Ingeniero mecánico",
    especialidades: ["Equipamiento", "Metrados", "Peritajes técnicos"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
  {
    id: "j-07",
    nombre: "Isabel Cristina Muñoz Tello",
    profesion: "Abogada",
    especialidades: ["Resolución de conflictos", "Negociación", "JRD"],
    rna: true,
    tipo: "adjudicador",
    rol: "presidente",
  },
  {
    id: "j-08",
    nombre: "Raúl Eduardo Ccanto Paucar",
    profesion: "Ingeniero civil",
    especialidades: ["Infraestructura vial", "Saneamiento", "Obras públicas"],
    rna: false,
    tipo: "adjudicador",
    rol: "integrante",
  },
];

export const ARBITROS = PROFESIONALES.filter((p) => p.tipo === "arbitro");
export const ADJUDICADORES = PROFESIONALES.filter((p) => p.tipo === "adjudicador");

export const PROFESIONES = Array.from(
  new Set(PROFESIONALES.map((p) => p.profesion))
).sort((a, b) => a.localeCompare(b, "es"));

export const ESPECIALIDADES = Array.from(
  new Set(PROFESIONALES.flatMap((p) => p.especialidades))
).sort((a, b) => a.localeCompare(b, "es"));
