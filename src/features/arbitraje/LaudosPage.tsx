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

const celda = { fontSize: "0.8rem", py: 1.2, px: 1.3 };

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
        imageAlt="Sede de la Corte Superior de Arbitraje en Huancayo"
      />

      <SectionSubnav items={ARBITRAJE_SUBNAV} ariaLabel="Secciones de arbitraje" />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <SectionHeading
            kicker="Cómo se emite"
            title="De la deliberación a la notificación"
            subtitle="El tribunal decide; la Corte administra el trámite y notifica. Estos son los hitos que siguen al cierre de actuaciones."
          />

          <Grid container spacing={{ xs: 0, md: 5 }}>
            {EMISION.map((paso, index) => (
              <Grid key={paso.title} size={{ xs: 12, md: 6 }}>
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: "34px 1fr",
                    gap: 1.6,
                    py: 1.8,
                    borderTop: `1px solid ${brand.line}`,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fonts.display,
                      color: brand.goldDeep,
                      fontSize: "0.9rem",
                      lineHeight: 1.6,
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                  <Box>
                    <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.9rem" }}>
                      {paso.title}
                    </Typography>
                    <Typography sx={{ mt: 0.35, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.62 }}>
                      {paso.text}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>

          <Stack
            direction="row"
            spacing={1.3}
            sx={{
              mt: 4,
              py: 2.2,
              alignItems: "flex-start",
              borderTop: `1px solid ${brand.line}`,
              borderBottom: `1px solid ${brand.line}`,
            }}
          >
            <Box sx={{ width: 5, height: 5, backgroundColor: brand.goldDeep, mt: "8px", flexShrink: 0 }} />
            <Typography sx={{ color: brand.muted, fontSize: "0.82rem", lineHeight: 1.65 }}>
              La Corte no revisa el fondo de la decisión. El escrutinio es una
              revisión formal opcional y no convierte a la institución en
              instancia jurisdiccional.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.paper }}>
        <Container>
          <SectionHeading
            kicker="Después del laudo"
            title="Correcciones y aclaraciones"
            subtitle="Dentro de los quince días siguientes a la notificación, cualquiera de las partes puede solicitar una actuación posterior. El tribunal también puede corregir de oficio en los diez días siguientes."
          />

          <TableContainer sx={{ borderTop: `1px solid ${brand.lineStrong}`, overflowX: "auto" }}>
            <Table aria-label="Plazos posteriores al laudo" sx={{ minWidth: 620 }}>
              <TableHead>
                <TableRow>
                  {["Solicitud", "Plazo para pedir", "Comentarios de la otra parte", "Plazo de resolución"].map(
                    (header) => (
                      <TableCell key={header}>{header}</TableCell>
                    )
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {POSTERIORES.map((row) => (
                  <TableRow key={row.solicitud}>
                    <TableCell sx={{ ...celda, fontWeight: 700, color: brand.primaryDeep }}>
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

      <Box component="section" sx={{ py: { xs: 7, md: 9 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderTop: `2px solid ${brand.primary}`, pt: 2 }}>
                <Typography variant="h3" sx={{ color: brand.primaryDeep, fontSize: "1.5rem" }}>
                  Cumplimiento del laudo
                </Typography>
                <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.9rem", lineHeight: 1.72 }}>
                  En arbitrajes nacionales, el tribunal puede realizar actos de
                  requerimiento de cumplimiento a solicitud de la parte interesada,
                  dentro de los treinta días posteriores a la notificación. Para la
                  ejecución forzosa se acude al Poder Judicial.
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ borderTop: `2px solid ${brand.gold}`, pt: 2 }}>
                <Typography variant="h3" sx={{ color: brand.primaryDeep, fontSize: "1.5rem" }}>
                  Publicación de laudos
                </Typography>
                <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.88rem", lineHeight: 1.72 }}>
                  Se publican laudos y decisiones anonimizados, previa disociación
                  de datos personales, nombres de partes, montos y cualquier
                  elemento identificable. No se publican casos en trámite, datos de
                  menores ni información protegida por ley.
                </Typography>
                <Typography sx={{ mt: 1.2, color: brand.muted, fontSize: "0.88rem", lineHeight: 1.72 }}>
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
          py: { xs: 7, md: 9 },
          backgroundColor: brand.paper,
          borderTop: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Buscador de laudos"
            title="Repositorio referencial"
            subtitle="Los registros que aparecen a continuación son datos de ejemplo. El repositorio oficial se habilitará cuando la institución publique los laudos anonimizados."
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
