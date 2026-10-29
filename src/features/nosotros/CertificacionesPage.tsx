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

const CERTIFICACIONES = [
  {
    codigo: "9001",
    anio: "",
    titulo: "Gestión de la calidad",
    texto:
      "Procesos documentados, seguimiento de la satisfacción de las partes y mejora continua de la gestión institucional.",
    estado: "",
  },
  {
    codigo: "37001",
    anio: "",
    titulo: "Gestión antisoborno",
    texto:
      "Debida diligencia de terceros, canal de denuncias confidencial y una cultura institucional de integridad.",
    estado: "",
  },
  {
    codigo: "27001",
    anio: "",
    titulo: "Seguridad de la información",
    texto:
      "Protección de la información de las partes, controles de acceso y continuidad de los servicios arbitrales.",
    estado: "",
  },
];

export default function CertificacionesPage() {
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
        title="Certificaciones"
        description="Licencia de funcionamiento de la Cámara de Comercio y Producción de Huancayo y certificaciones ISO de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Calidad e integridad"
        title="Certificaciones"
        subtitle="Licencia de funcionamiento de la Cámara y certificaciones internacionales de la Corte."
        crumbs={[
          { label: "Quiénes somos", to: "/quienes-somos" },
          { label: "Certificaciones" },
        ]}
      />

      <SectionSubnav
        items={QUIENES_SUBNAV}
        ariaLabel="Secciones de Quiénes somos"
      />

      <Box
        component="section"
        sx={{
          py: { xs: 7, md: 10 },
          backgroundColor: brand.whiteSoft,
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 5, md: 7 }}
            sx={{
              alignItems: "stretch",
              position: "relative",
              "&::before": {
                content: '""',
                display: { xs: "none", md: "block" },
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                width: "1px",
                backgroundColor: brand.line,
                transform: "translateX(-50%)",
                pointerEvents: "none",
              },
            }}
          >
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    pb: 2,
                    borderBottom: `2px solid ${brand.primaryDeep}`,
                  }}
                >
                  <Typography
                    component="h2"
                    sx={{
                      color: brand.primaryDeep,
                      fontFamily: fonts.display,
                      fontSize: { xs: "1.55rem", md: "1.9rem" },
                      fontWeight: 600,
                      lineHeight: 1.15,
                      textWrap: "balance",
                    }}
                  >
                    Licencia de funcionamiento
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    mt: 2,
                    color: brand.muted,
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                  }}
                >
                  Cámara de Comercio y Producción de Huancayo
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    flex: 1,
                    mt: 3,
                    minHeight: { xs: 430, md: 520 },
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
                        minHeight: { xs: 406, md: 496 },
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
                        minHeight: { xs: 406, md: 496 },
                        p: { xs: 3, md: 4 },
                        backgroundColor: brand.white,
                      }}
                    >
                      <Box>
                        {/* <Typography
                          sx={{
                            color: brand.muted,
                            fontFamily: fonts.display,
                            fontSize: "0.8rem",
                            lineHeight: 1.4,
                          }}
                        >
                          Cámara de Comercio y Producción de Huancayo
                        </Typography> */}
                        <Box
                          aria-hidden="true"
                          sx={{
                            width: 44,
                            height: 2,
                            mt: 1.5,
                            backgroundColor: brand.gold,
                          }}
                        />
                      </Box>

                      <Box>
                        <Typography
                          component="h3"
                          sx={{
                            maxWidth: 320,
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
                        
                      </Box>

                     
                    </Box>
                  )}
                </Box>

                {licenciaDisponible && (
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={1.2}
                    sx={{
                      mt: 2.5,
                      pt: 1.5,
                      alignItems: { xs: "flex-start", sm: "center" },
                      justifyContent: "space-between",
                      borderTop: `1px solid ${brand.line}`,
                    }}
                  >
                    <Typography
                      sx={{
                        color: brand.muted,
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      PDF · Documento oficial
                    </Typography>

                    <Stack direction="row" spacing={2}>
                      <Button
                        component="a"
                        href={LICENCIA_FUNCIONAMIENTO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        variant="text"
                        endIcon={
                          <OpenInNewOutlinedIcon sx={{ fontSize: 14 }} />
                        }
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
                  </Stack>
                )}
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    pb: 2,
                    borderBottom: `2px solid ${brand.primaryDeep}`,
                  }}
                >
                  <Typography
                    component="h2"
                    sx={{
                      color: brand.primaryDeep,
                      fontFamily: fonts.display,
                      fontSize: { xs: "1.55rem", md: "1.9rem" },
                      fontWeight: 600,
                      lineHeight: 1.15,
                    }}
                  >
                    Certificaciones ISO
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    mt: 2,
                    maxWidth: 470,
                    color: brand.muted,
                    fontSize: "0.88rem",
                    lineHeight: 1.65,
                  }}
                >
                  Tres estándares internacionales orientan la calidad, la
                  integridad y la seguridad de la información en la Corte.
                </Typography>

                <Stack sx={{ flex: 1, mt: 3 }}>
                  {CERTIFICACIONES.map((certificacion) => {
                    const enImplementacion =
                      certificacion.estado === "En implementación";
                    const statusColor = enImplementacion
                      ? brand.accent
                      : brand.goldInk;

                    return (
                      <Box
                        key={certificacion.codigo}
                        sx={{
                          flex: 1,
                          display: "grid",
                          gridTemplateColumns: {
                            xs: "70px minmax(0, 1fr)",
                            md: "92px minmax(0, 1fr)",
                          },
                          gap: { xs: 2, md: 3 },
                          pt: 2.2,
                          pb: 2.2,
                          borderTop: `1px solid ${brand.line}`,
                        }}
                      >
                        <Box>
                          <Typography
                            sx={{
                              color: brand.primaryDeep,
                              fontFamily: fonts.display,
                              fontSize: { xs: "1.8rem", md: "2.15rem" },
                              fontWeight: 600,
                              lineHeight: 0.9,
                              letterSpacing: "-0.04em",
                            }}
                          >
                            {certificacion.codigo}
                          </Typography>
                          <Typography
                            sx={{
                              mt: 0.9,
                              color: brand.muted,
                              fontSize: "0.7rem",
                              letterSpacing: "0.12em",
                            }}
                          >
                            {certificacion.anio}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 0,
                            height: "100%",
                          }}
                        >
                          <Typography
                            component="h3"
                            sx={{
                              color: brand.primaryDeep,
                              fontFamily: fonts.display,
                              fontSize: { xs: "1.04rem", md: "1.16rem" },
                              fontWeight: 600,
                              lineHeight: 1.25,
                              textWrap: "balance",
                            }}
                          >
                            {certificacion.titulo}
                          </Typography>

                          <Typography
                            sx={{
                              mt: 0.7,
                              color: brand.muted,
                              fontSize: { xs: "0.82rem", md: "0.86rem" },
                              lineHeight: 1.6,
                            }}
                          >
                            {certificacion.texto}
                          </Typography>

                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 0.8,
                              mt: "auto",
                              pt: 1.2,
                            }}
                          >
                            <Box
                              aria-hidden="true"
                              sx={{
                                width: 16,
                                height: 1,
                                backgroundColor: statusColor,
                              }}
                            />
                            <Typography
                              sx={{
                                color: statusColor,
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                              }}
                            >
                              {certificacion.estado}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Stack>
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
