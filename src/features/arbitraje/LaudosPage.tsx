import {
  Box,
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
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import RegistryBrowser from "../../components/common/RegistryBrowser";
import CtaBand from "../../components/common/CtaBand";
import { brand, fonts } from "../../theme/brand";
import { ARBITRAJE_SUBNAV } from "../../data/navigation";
import { LAUDOS } from "../../data/registros";

const EMISION = [
  {
    title: "Deliberación",
    text: "Con tres árbitros se decide por mayoría. Si no hay mayoría, puede laudar el presidente dejando constancia.",
  },
  {
    title: "Contenido",
    text: "El laudo consta por escrito, está motivado, firmado y contiene la sede y la fecha.",
  },
  {
    title: "Plazo",
    text: "Cuarenta días desde el cierre de actuaciones, prorrogables automáticamente por diez días más.",
  },
  {
    title: "Escrutinio",
    text: "Es opcional. La Corte revisa la forma y puede sugerir sobre el fondo, sin afectar la libertad del tribunal.",
  },
  {
    title: "Notificación",
    text: "La Secretaría notifica el laudo autenticado dentro de los cinco días de recibido, con los gastos pagados.",
  },
];

const POSTERIORES = [
  { solicitud: "Rectificación", pedir: "15 días", comentarios: "10 días", resolver: "15 días (+5)" },
  { solicitud: "Interpretación", pedir: "15 días", comentarios: "10 días", resolver: "15 días (+5)" },
  { solicitud: "Integración", pedir: "15 días", comentarios: "10 días", resolver: "15 días (+5)" },
  { solicitud: "Exclusión", pedir: "15 días", comentarios: "10 días", resolver: "15 días (+5)" },
];

const celda = { fontSize: "0.82rem", py: 1.2, px: 1.3 };

export default function LaudosPage() {
  return (
    <>
      <PageMeta
        title="Laudos y transparencia"
        description="Política de publicación de laudos, escrutinio y solicitudes de rectificación, interpretación, integración y exclusión de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Decisión y transparencia"
        title="Laudos: decisión, notificación y transparencia"
        subtitle="El laudo es definitivo y vinculante desde su notificación. La Corte lo custodia, lo notifica y, cuando corresponde, publica versiones anonimizadas con fines académicos y de transparencia."
        crumbs={[
          { label: "Arbitraje", to: "/arbitraje" },
          { label: "Laudos" },
        ]}
        image="/images/ARBITRAJE_IMG_02-04.jpg"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <SectionHeading
            kicker="Cómo se emite"
            title="De la deliberación a la notificación"
            subtitle="El tribunal decide; la Corte administra el trámite y notifica. Estos son los hitos que siguen al cierre de actuaciones."
            centered
          />

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {EMISION.map((paso, index) => (
              <Grid key={paso.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <Box
                  sx={{
                    height: "100%",
                    p: 3,
                    backgroundColor: brand.paper,
                    border: `1px solid ${brand.line}`,
                    borderTop: `3px solid ${brand.gold}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      fontSize: "1.9rem",
                      fontWeight: 600,
                      color: brand.skyMid,
                      lineHeight: 1,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Typography variant="h4" sx={{ mt: 1.6, color: brand.primaryDark, fontSize: "1rem" }}>
                    {paso.title}
                  </Typography>
                  <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.85rem", lineHeight: 1.7 }}>
                    {paso.text}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Stack
            direction="row"
            spacing={1.3}
            sx={{
              mt: 4,
              p: 2.4,
              alignItems: "flex-start",
              backgroundColor: brand.skySoft,
              border: `1px solid ${brand.skyMid}`,
              borderLeft: `4px solid ${brand.gold}`,
            }}
          >
            <InfoOutlinedIcon sx={{ color: brand.primary, fontSize: "1.1rem", mt: "1px" }} />
            <Typography sx={{ color: brand.primary, fontSize: "0.83rem", lineHeight: 1.65 }}>
              La Corte no revisa el fondo de la decisión. El escrutinio es una
              revisión formal opcional y no convierte a la institución en
              instancia jurisdiccional.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: brand.paper,
          borderTop: `1px solid ${brand.line}`,
          borderBottom: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Después del laudo"
            title="Correcciones y aclaraciones"
            subtitle="Dentro de los quince días siguientes a la notificación, cualquiera de las partes puede solicitar una actuación posterior. El tribunal también puede corregir de oficio en los diez días siguientes."
          />

          <TableContainer sx={{ border: `1px solid ${brand.line}`, backgroundColor: brand.white }}>
            <Table aria-label="Plazos posteriores al laudo" sx={{ minWidth: 620 }}>
              <TableHead>
                <TableRow sx={{ backgroundColor: brand.primaryDark }}>
                  {["Solicitud", "Plazo para pedir", "Comentarios de la otra parte", "Plazo de resolución"].map(
                    (header) => (
                      <TableCell key={header} sx={{ color: brand.white, fontWeight: 700, fontSize: "0.78rem" }}>
                        {header}
                      </TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {POSTERIORES.map((row) => (
                  <TableRow
                    key={row.solicitud}
                    sx={{ "&:nth-of-type(odd)": { backgroundColor: "rgba(234,242,251,0.35)" } }}
                  >
                    <TableCell sx={{ ...celda, fontWeight: 750, color: brand.primaryDark }}>
                      {row.solicitud}
                    </TableCell>
                    <TableCell sx={{ ...celda, color: brand.primary }}>{row.pedir}</TableCell>
                    <TableCell sx={{ ...celda, color: brand.primary }}>{row.comentarios}</TableCell>
                    <TableCell sx={{ ...celda, color: brand.primary }}>{row.resolver}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <Typography sx={{ mt: 2.2, color: brand.muted, fontSize: "0.8rem", lineHeight: 1.65, maxWidth: 900 }}>
            Estas decisiones forman parte del laudo, no generan honorarios
            adicionales y no admiten recurso. La solicitud de anulación se
            tramita ante el Poder Judicial conforme a la Ley de Arbitraje.
          </Typography>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: brand.white }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 5 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionHeading
                kicker="Ejecución"
                title="Cumplimiento del laudo"
                subtitle="En arbitrajes nacionales, el tribunal puede realizar actos de requerimiento de cumplimiento a solicitud de la parte interesada, dentro de los treinta días posteriores a la notificación. Para la ejecución forzosa se acude al Poder Judicial."
                sx={{ mb: 0 }}
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ p: 3, backgroundColor: brand.paper, border: `1px solid ${brand.line}`, borderLeft: `4px solid ${brand.gold}` }}>
                <Stack direction="row" spacing={1.2} sx={{ alignItems: "center", mb: 1.4 }}>
                  <GavelOutlinedIcon sx={{ color: brand.goldDeep, fontSize: "1.3rem" }} />
                  <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.95rem" }}>
                    Publicación de laudos
                  </Typography>
                </Stack>

                <Typography sx={{ color: brand.muted, fontSize: "0.84rem", lineHeight: 1.7 }}>
                  Se publican laudos y decisiones anonimizados, previa disociación
                  de datos personales, nombres de partes, montos y cualquier
                  elemento identificable. No se publican casos en trámite, datos
                  de menores ni información protegida por ley.
                </Typography>

                <Typography sx={{ mt: 1.4, color: brand.muted, fontSize: "0.84rem", lineHeight: 1.7 }}>
                  La confidencialidad alcanza a las partes, sus abogados,
                  representantes, testigos, peritos y personal de la Corte. Los
                  trabajos académicos requieren autorización y medidas de reserva.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: brand.paper,
          borderTop: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Buscador de laudos"
            title="Repositorio de demostración"
            subtitle="Los registros que aparecen a continuación son datos de ejemplo. El repositorio oficial se habilitará cuando la institución publique los laudos anonimizados."
            centered
          />

          <RegistryBrowser
            registros={LAUDOS}
            searchPlaceholder="Buscar por expediente, materia o palabra clave"
            expedienteLabel="Expediente"
          />

          <Typography sx={{ mt: 3, color: brand.muted, fontSize: "0.78rem", lineHeight: 1.65, maxWidth: 820 }}>
            La publicación de un laudo no implica la identificación de las partes
            ni la divulgación de información protegida. La publicación no
            constituye precedente vinculante ni opinión de la Corte sobre casos
            futuros: cada controversia se resuelve según sus propios hechos y
            pruebas. Para solicitar una copia certificada, dirígete a la
            Secretaría General.
          </Typography>
        </Container>
      </Box>

      <CtaBand
        title="¿Necesitas una copia certificada?"
        subtitle="La Secretaría General puede orientarte sobre el expediente, los costos de copia y el estado de una solicitud posterior al laudo."
        primaryLabel="Contactar a la Corte"
        primaryTo="/contacto"
        secondaryLabel="Ver reglamentos"
        secondaryTo="/arbitraje/reglamentos"
      />
    </>
  );
}
