import { useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import DocumentCard from "../../components/common/DocumentCard";
import PdfViewerDialog from "../../components/common/PdfViewerDialog";
import { brand } from "../../theme/brand";
import {
  DOCUMENTOS_INSTITUCIONALES,
  type Documento,
} from "../../data/documentos";
import { MEDIA } from "../../data/media";

export default function DocumentosPage() {
  const [selected, setSelected] = useState<Documento | null>(null);

  return (
    <>
      <PageMeta
        title="Documentos institucionales"
        description="Estatuto, Reglamento de Arbitraje y Código de Ética de la Corte Superior de Arbitraje de Huancayo, disponibles para lectura y descarga."
      />

      <PageHero
        kicker="Repositorio institucional"
        title="Documentos institucionales"
        subtitle="Estatuto, Reglamento de Arbitraje y Código de Ética de la Corte, disponibles para lectura y descarga."
        crumbs={[{ label: "Documentos institucionales" }]}
        image={MEDIA.documentos}
      />

      <Box
        component="section"
        sx={{ py: { xs: 6, md: 9 }, backgroundColor: brand.paper }}
      >
        <Container>
          <Stack
            direction="row"
            spacing={1.4}
            sx={{
              mb: 5,
              py: 2,
              alignItems: "flex-start",
              borderTop: `1px solid ${brand.lineStrong}`,
              borderBottom: `1px solid ${brand.line}`,
            }}
          >
            <Box
              sx={{
                width: 5,
                height: 5,
                backgroundColor: brand.goldDeep,
                mt: "8px",
                flexShrink: 0,
              }}
            />
            <Typography
              sx={{ color: brand.muted, fontSize: "0.84rem", lineHeight: 1.65 }}
            >
              Haz clic en «Leer documento» para abrirlo sin salir de la página.
              También puedes descargar cada archivo en formato PDF.
            </Typography>
          </Stack>

          <Typography
            component="h2"
            variant="h3"
            sx={{ mb: 3.5, color: brand.primaryDeep }}
          >
            Documentos disponibles
          </Typography>

          <Grid container spacing={{ xs: 4, md: 5 }}>
            {DOCUMENTOS_INSTITUCIONALES.map((documento) => (
              <Grid key={documento.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <DocumentCard documento={documento} onOpen={setSelected} />
              </Grid>
            ))}
          </Grid>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={1.5}
            sx={{
              mt: 6,
              py: 2.2,
              alignItems: { xs: "flex-start", sm: "center" },
              justifyContent: "space-between",
              borderTop: `1px solid ${brand.lineStrong}`,
            }}
          >
            <Typography
              sx={{ color: brand.muted, fontSize: "0.85rem", lineHeight: 1.6 }}
            >
              ¿Necesitas otra versión o un documento anterior? La Secretaría
              General puede orientarte.
            </Typography>

            <Button
              component={RouterLink}
              to="/contacto"
              variant="text"
              size="small"
              sx={{
                color: brand.primary,
                flexShrink: 0,
                fontSize: "0.8rem",
                px: 0,
              }}
            >
              Contactar a la Corte
            </Button>
          </Stack>
        </Container>
      </Box>

      <PdfViewerDialog
        open={Boolean(selected)}
        title={selected?.titulo ?? ""}
        url={selected?.url ?? ""}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
