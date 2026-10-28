import { useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import DocumentCard from "../../components/common/DocumentCard";
import PdfViewerDialog from "../../components/common/PdfViewerDialog";
import { brand, fonts } from "../../theme/brand";
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
        title="Documentos Institucionales"
        description="Estatuto, Reglamento de Arbitraje y Código de Ética de la Corte Superior de Arbitraje de Huancayo, disponibles para lectura y descarga."
      />

      <PageHero
        kicker="Repositorio institucional"
        title="Documentos Institucionales"
        subtitle="Estatuto, Reglamento de Arbitraje y Código de Ética para consulta y descarga."
        crumbs={[{ label: "Documentos Institucionales" }]}
        image={MEDIA.documentos}
      />

      <Box
        component="section"
        sx={{ py: { xs: 6, md: 9 }, backgroundColor: brand.whiteSoft }}
      >
        <Container>
          <Typography
            component="h2"
            sx={{
              position: "absolute",
              width: "1px",
              height: "1px",
              p: 0,
              m: "-1px",
              overflow: "hidden",
              clip: "rect(0 0 0 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          >
            Documentos institucionales disponibles
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
              },
              gap: { xs: 2.5, md: 6 },
              alignItems: "end",
              borderTop: `1px solid ${brand.lineStrong}`,
              pt: 2.5,
              mb: 4.5,
            }}
          >
            <Box>
              <Box
                aria-hidden="true"
                sx={{
                  width: 54,
                  height: 3,
                  mb: 1.8,
                  backgroundColor: brand.gold,
                }}
              />
              <Typography
                sx={{
                  color: brand.primaryDeep,
                  fontFamily: fonts.display,
                  fontWeight: 600,
                  fontSize: { xs: "1.5rem", md: "1.8rem" },
                  lineHeight: 1.2,
                  textWrap: "balance",
                }}
              >
                Documentos para consultar y descargar
              </Typography>
            </Box>

            <Typography
              sx={{
                color: brand.muted,
                fontSize: "0.84rem",
                lineHeight: 1.65,
                textWrap: "pretty",
              }}
            >
              Haz clic en la portada de cada documento para leerlo sin salir de
              la página. También puedes descargarlo en formato PDF.
            </Typography>
          </Box>

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
