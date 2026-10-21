import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brand } from "../../../theme/brand";
import { DOCUMENTOS } from "../../../data/documentos";
import SectionHeading from "../../../components/common/SectionHeading";
import { Stagger } from "../../../components/common/Reveal";
import DocumentCard from "../../../components/common/DocumentCard";

const IDS = ["d-05", "d-06", "d-08", "d-09"];

export default function DocumentosSection() {
  const documentos = IDS.map((id) => DOCUMENTOS.find((doc) => doc.id === id)).filter(
    (doc): doc is (typeof DOCUMENTOS)[number] => Boolean(doc)
  );

  return (
    <Box
      component="section"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: brand.paper,
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            alignItems: { xs: "flex-start", md: "flex-end" },
            justifyContent: "space-between",
            mb: { xs: 4.5, md: 6 },
          }}
        >
          <SectionHeading
            kicker="Documentos de consulta"
            title="Información clara, disponible para todos"
            subtitle="Consulta los reglamentos, tarifas, directivas y formatos que rigen nuestros procedimientos."
            sx={{ mb: 0 }}
          />

          <Button
            component={RouterLink}
            to="/documentos"
            variant="outlined"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "1rem" }} />}
            sx={{ flexShrink: 0 }}
          >
            Ver todos los documentos
          </Button>
        </Stack>

        <Stagger>
          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {documentos.map((documento) => (
              <Grid key={documento.id} size={{ xs: 12, sm: 6, lg: 3 }}>
                <DocumentCard documento={documento} />
              </Grid>
            ))}
          </Grid>
        </Stagger>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{
            mt: 4,
            px: { xs: 2.5, md: 3 },
            py: 2,
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            backgroundColor: brand.white,
            border: `1px solid ${brand.line}`,
            borderLeft: `3px solid ${brand.gold}`,
          }}
        >
          <Typography sx={{ color: brand.muted, fontSize: "0.86rem" }}>
            ¿Buscas un documento específico? Explora el repositorio completo por
            categoría.
          </Typography>

          <Typography
            component={RouterLink}
            to="/documentos"
            sx={{
              color: brand.primary,
              fontSize: "0.84rem",
              fontWeight: 700,
              textDecoration: "none",
              whiteSpace: "nowrap",
              "&:hover": { color: brand.goldDeep },
            }}
          >
            Ir al repositorio →
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
}
