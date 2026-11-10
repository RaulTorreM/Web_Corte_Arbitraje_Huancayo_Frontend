import { useEffect, useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import PdfViewerDialog from "../../components/common/PdfViewerDialog";
import { brand, fonts } from "../../theme/brand";
import { QUIENES_SUBNAV } from "../../data/navigation";
import { LICENCIA_FUNCIONAMIENTO_URL } from "../../data/documentos";

export default function LicenciaFuncionamientoPage() {
  const [licenciaDisponible, setLicenciaDisponible] = useState<boolean | null>(
    null
  );
  const [licenciaOpen, setLicenciaOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const checkLicencia = async () => {
      try {
        const response = await fetch(LICENCIA_FUNCIONAMIENTO_URL, {
          method: "HEAD",
        });
        const contentType = response.headers.get("content-type") ?? "";
        if (!cancelled) {
          setLicenciaDisponible(
            response.ok &&
              !contentType.toLowerCase().includes("text/html")
          );
        }
      } catch {
        if (!cancelled) setLicenciaDisponible(false);
      }
    };

    void checkLicencia();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <>
      <PageMeta
        title="Licencia de funcionamiento"
        description="Licencia de funcionamiento de la Cámara de Comercio y Producción de Huancayo."
      />

      <PageHero
        kicker="Habilitación institucional"
        title="Licencia de funcionamiento"
        subtitle="Documento oficial de la Cámara de Comercio y Producción de Huancayo."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Certificaciones", to: "/quienes-somos/certificaciones" },
          { label: "Licencia de funcionamiento" },
        ]}
      />

      <SectionSubnav
        items={QUIENES_SUBNAV}
        ariaLabel="Secciones de Quiénes somos"
      />

      <Box
        component="section"
        sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.whiteSoft }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            sx={{ alignItems: "stretch" }}
          >
            <Grid size={{ xs: 12, md: 4 }}>
              <Stack
                spacing={2.5}
                sx={{
                  height: "100%",
                  pt: 2,
                  borderTop: `2px solid ${brand.primaryDeep}`,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: brand.goldInk,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.13em",
                      textTransform: "uppercase",
                      mb: 1.2,
                    }}
                  >
                    Documento oficial
                  </Typography>
                  <Typography
                    sx={{
                      color: brand.muted,
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    La licencia acredita el funcionamiento de la Cámara de
                    Comercio y Producción de Huancayo.
                  </Typography>
                </Box>

                {licenciaDisponible ? (
                  <Stack direction="row" spacing={2} sx={{ pt: 1 }}>
                    <Button
                      component="a"
                      href={LICENCIA_FUNCIONAMIENTO_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      size="small"
                      variant="text"
                      endIcon={<OpenInNewOutlinedIcon sx={{ fontSize: 14 }} />}
                      sx={{
                        minWidth: 0,
                        p: 0,
                        color: brand.primary,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      Abrir PDF
                    </Button>

                    <Button
                      size="small"
                      variant="text"
                      endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
                      onClick={() => setLicenciaOpen(true)}
                      sx={{
                        minWidth: 0,
                        p: 0,
                        color: brand.primary,
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      Ver documento
                    </Button>
                  </Stack>
                ) : (
                  <Typography
                    sx={{
                      pt: 1,
                      color: brand.goldInk,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {/* Documento en proceso de publicación */}
                  </Typography>
                )}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 8 }}>
              <Box
                sx={{
                  display: "flex",
                  minHeight: { xs: 430, md: 560 },
                  p: { xs: 1.2, md: 1.5 },
                  backgroundColor: brand.paperAlt,
                  border: `1px solid ${brand.line}`,
                }}
              >
                {licenciaDisponible ? (
                  <Box
                    component="iframe"
                    title="Licencia de funcionamiento de la Cámara de Comercio y Producción de Huancayo"
                    src={LICENCIA_FUNCIONAMIENTO_URL}
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "100%",
                      minHeight: { xs: 406, md: 536 },
                      border: 0,
                      backgroundColor: brand.white,
                    }}
                  />
                ) : (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: "100%",
                      minHeight: { xs: 406, md: 536 },
                      p: { xs: 3, md: 4 },
                      backgroundColor: brand.white,
                    }}
                  >
                    <Box
                      aria-hidden="true"
                      sx={{
                        width: 44,
                        height: 2,
                        backgroundColor: brand.gold,
                      }}
                    />

                    <Box>
                      <Typography
                        component="h2"
                        sx={{
                          maxWidth: 420,
                          color: brand.primaryDeep,
                          fontFamily: fonts.display,
                          fontSize: { xs: "1.45rem", md: "1.8rem" },
                          fontWeight: 600,
                          lineHeight: 1.15,
                          textWrap: "balance",
                        }}
                      >
                        Licencia de funcionamiento
                      </Typography>
                      <Typography
                        sx={{
                          mt: 1.2,
                          maxWidth: 420,
                          color: brand.muted,
                          fontSize: "0.84rem",
                          lineHeight: 1.65,
                        }}
                      >
                        {/* El documento oficial se habilitará en este espacio. */}
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PdfViewerDialog
        open={licenciaOpen}
        title="Licencia de funcionamiento"
        url={LICENCIA_FUNCIONAMIENTO_URL}
        onClose={() => setLicenciaOpen(false)}
      />
    </>
  );
}
