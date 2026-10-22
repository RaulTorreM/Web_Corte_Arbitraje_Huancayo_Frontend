import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { motion } from "framer-motion";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import CtaBand from "../../components/common/CtaBand";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animations";
import { brand, fonts } from "../../theme/brand";
import { SITE } from "../../data/site";
import { MEDIA } from "../../data/media";

const GARANTIAS = [
  {
    icon: LockOutlinedIcon,
    title: "Confidencialidad",
    text: "La identidad del denunciante y el contenido de la denuncia se conocen solo por el órgano competente.",
  },
  {
    icon: ShieldOutlinedIcon,
    title: "Protección",
    text: "No se admiten represalias contra quien denuncia de buena fe. Cada caso se evalúa con independencia.",
  },
  {
    icon: VisibilityOutlinedIcon,
    title: "Seguimiento",
    text: "Cuando corresponda, la Secretaría asigna un código para consultar el estado de la evaluación.",
  },
];

const ALCANCE = [
  "Incumplimiento de la Ley de Arbitraje o del Reglamento.",
  "Conductas contrarias al Código de Ética.",
  "Faltas al deber de confidencialidad.",
  "Inasistencia reiterada a actuaciones arbitrales.",
  "Demoras injustificadas en la conducción del arbitraje.",
  "Recusaciones manifiestamente maliciosas o dilatorias.",
  "Mala fe en el desarrollo del arbitraje.",
];

const TRATAMIENTO = [
  {
    title: "Presentación",
    text: "La denuncia se envía a la Secretaría General con los hechos y las pruebas disponibles. La identidad del denunciante se mantiene reservada.",
  },
  {
    title: "Traslado y descargos",
    text: "La denuncia se pone en conocimiento del denunciado, que tiene cinco días hábiles para formular sus descargos y presentar documentación.",
  },
  {
    title: "Evaluación",
    text: "El Consejo evalúa los argumentos y documentos de ambas partes. Puede disponer una audiencia con presencia del denunciante y del denunciado.",
  },
  {
    title: "Decisión motivada",
    text: "El Consejo resuelve de manera motivada y definitiva sobre la sanción aplicable. Las sanciones se registran en el Libro de Sanciones.",
  },
];

const SANCIONES = [
  { sancion: "Exhortación", alcance: "Llamado de atención. No se publica." },
  { sancion: "Amonestación escrita", alcance: "Constancia en el registro. No se publica." },
  { sancion: "Suspensión", alcance: "Temporal o definitiva para ser elegido árbitro o adjudicador." },
  { sancion: "Separación del Registro", alcance: "Definitiva." },
  { sancion: "Multa", alcance: "Hasta 50 UIT." },
  { sancion: "Pérdida o devolución de honorarios", alcance: "Total o parcial." },
];

export default function DenunciasPage() {
  const mailto = `mailto:${SITE.contact.email}?subject=${encodeURIComponent("Denuncia de ética")}`;

  return (
    <>
      <PageMeta
        title="Denuncias y ética"
        description="Canal para denunciar incumplimientos del Código de Ética por parte de árbitros, adjudicadores, abogados y personal de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Integridad institucional"
        title="Canal de denuncias de ética"
        subtitle="Cualquier persona natural o jurídica que tenga conocimiento de una violación al Código de Ética puede denunciarla ante el Consejo Superior, a través de la Secretaría General. La denuncia se tramita de forma reservada."
        crumbs={[{ label: "Canal de denuncias" }]}
        image={MEDIA.sede}
      >
        <Stack direction={{ xs: "column", sm: "row" }} spacing={1.2}>
          <Button href={mailto} variant="contained" startIcon={<MailOutlinedIcon />}>
            Escribir a la Secretaría
          </Button>
          <Button href={SITE.contact.phoneHref} variant="outlined" startIcon={<PhoneOutlinedIcon />}>
            Llamar
          </Button>
        </Stack>
      </PageHero>

      <Box component="section" sx={{ py: { xs: 6, md: 8 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Stack
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 3, md: 3 }}
          >
            {GARANTIAS.map((garantia) => {
              const Icon = garantia.icon;

              return (
                <Stack
                  key={garantia.title}
                  component={motion.div}
                  variants={fadeUp}
                  direction="row"
                  spacing={1.6}
                  sx={{
                    flex: 1,
                    alignItems: "flex-start",
                    pt: 2,
                    borderTop: `1px solid ${brand.lineStrong}`,
                  }}
                >
                  <Icon sx={{ fontSize: 20, color: brand.goldDeep, mt: "2px", flexShrink: 0 }} />
                  <Box>
                    <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem", mb: 0.5 }}>
                      {garantia.title}
                    </Typography>
                    <Typography sx={{ color: brand.muted, fontSize: "0.82rem", lineHeight: 1.6 }}>
                      {garantia.text}
                    </Typography>
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Procedimiento"
                title="Cómo presentar una denuncia"
                subtitle="No hay un formulario con envío simulado. Reúne la información y remítela directamente a la Secretaría General."
                sx={{ mb: { xs: 3.5, md: 4.5 } }}
              />

              <Box
                sx={{
                  p: { xs: 2.5, md: 3 },
                  backgroundColor: brand.whiteSoft,
                  borderTop: `2px solid ${brand.gold}`,
                  borderBottom: `1px solid ${brand.line}`,
                }}
              >
                <Typography
                  sx={{
                    color: brand.goldDeep,
                    fontSize: "0.64rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    mb: 1.2,
                  }}
                >
                  Enviar a
                </Typography>

                <Stack spacing={1.4}>
                  <Box
                    component="a"
                    href={mailto}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: brand.primaryDeep,
                      textDecoration: "none",
                      fontSize: "0.94rem",
                      fontWeight: 700,
                      "&:hover": { color: brand.goldDeep },
                    }}
                  >
                    <MailOutlinedIcon sx={{ fontSize: 18, color: brand.goldDeep }} />
                    {SITE.contact.email}
                  </Box>

                  <Box
                    component="a"
                    href={SITE.contact.phoneHref}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      color: brand.primaryDeep,
                      textDecoration: "none",
                      fontSize: "0.94rem",
                      fontWeight: 700,
                      "&:hover": { color: brand.goldDeep },
                    }}
                  >
                    <PhoneOutlinedIcon sx={{ fontSize: 18, color: brand.goldDeep }} />
                    {SITE.contact.phone}
                  </Box>
                </Stack>

                <Typography sx={{ mt: 1.8, color: brand.muted, fontSize: "0.8rem", lineHeight: 1.65 }}>
                  Usa el asunto <strong>“Denuncia de ética”</strong>. Incluye los hechos,
                  las fechas aproximadas, las personas involucradas y los documentos
                  que puedas referenciar. Si deseas reservar tu identidad, indícalo
                  expresamente.
                </Typography>
              </Box>

              <Box sx={{ mt: 4 }}>
                {TRATAMIENTO.map((paso, index) => (
                  <Box
                    key={paso.title}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "34px 1fr",
                      gap: 1.6,
                      py: 2,
                      borderTop: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fonts.display,
                        color: brand.goldDeep,
                        fontSize: "1rem",
                        lineHeight: 1.5,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Box>
                      <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                        {paso.title}
                      </Typography>
                      <Typography sx={{ mt: 0.4, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.62 }}>
                        {paso.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ borderTop: `2px solid ${brand.primary}`, pt: 2.2 }}>
                <Typography variant="h3" sx={{ color: brand.primaryDeep, fontSize: "1.5rem" }}>
                  Qué puedes reportar
                </Typography>

                <Stack sx={{ mt: 1.8 }}>
                  {ALCANCE.map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        py: 1,
                        borderTop: `1px solid ${brand.line}`,
                        color: brand.muted,
                        fontSize: "0.84rem",
                        lineHeight: 1.55,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>

                <Stack direction="row" spacing={1.2} sx={{ mt: 2.5, alignItems: "flex-start" }}>
                  <InfoOutlinedIcon sx={{ color: brand.accent, fontSize: 18, mt: "2px" }} />
                  <Typography sx={{ color: brand.muted, fontSize: "0.8rem", lineHeight: 1.65 }}>
                    Este canal no atiende consultas sobre el estado de un expediente
                    ni reemplaza los remedios procesales. Si existe un riesgo inmediato
                    para personas o bienes, comunícate también con las autoridades
                    competentes.
                  </Typography>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        id="sancionados"
        sx={{
          py: { xs: 7, md: 10 },
          backgroundColor: brand.whiteSoft,
          borderTop: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeading
                kicker="Régimen sancionador"
                title="Sanciones aplicables"
                subtitle="El Consejo resuelve de manera motivada y definitiva. Las sanciones se registran en el Libro de Sanciones a cargo de la Secretaría General."
                stacked
                sx={{ mb: 0 }}
              />

              <Typography sx={{ mt: 2.2, color: brand.muted, fontSize: "0.8rem", lineHeight: 1.65 }}>
                Se publican las sanciones salvo los casos de exhortación y amonestación
                escrita. La publicación incluye el motivo y la vigencia.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <TableContainer sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
                <Table aria-label="Sanciones aplicables" sx={{ minWidth: 480 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Sanción</TableCell>
                      <TableCell>Alcance</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {SANCIONES.map((row) => (
                      <TableRow key={row.sancion}>
                        <TableCell sx={{ fontSize: "0.82rem", py: 1.1, fontWeight: 700, color: brand.primaryDeep }}>
                          {row.sancion}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.82rem", py: 1.1, color: brand.muted }}>
                          {row.alcance}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: { xs: 5, md: 6 },
              py: 2.5,
              borderTop: `1px solid ${brand.line}`,
              borderBottom: `1px solid ${brand.line}`,
            }}
          >
            <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
              Relación de sancionados
            </Typography>
            <Typography sx={{ mt: 0.7, color: brand.muted, fontSize: "0.84rem", lineHeight: 1.65 }}>
              No hay sanciones publicadas a la fecha. Cuando existan, se publicarán
              el nombre, el rol, el motivo, la sanción y su vigencia, salvo las
              excepciones de ley.
            </Typography>
          </Box>
        </Container>
      </Box>

      <CtaBand
        title="¿Necesitas orientación sobre un procedimiento?"
        subtitle="La Secretaría General atiende consultas sobre expedientes, requisitos y trámites. Para reportar conductas indebidas usa los canales de esta página."
        showPrimary={false}
        secondaryLabel="Ir a Contacto"
        secondaryTo="/contacto"
      />
    </>
  );
}
