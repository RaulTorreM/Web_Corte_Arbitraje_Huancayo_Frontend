import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
// import PictureAsPdfOutlinedIcon from "@mui/icons-mate?rial/PictureAsPdfOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import PdfViewerDialog from "../../components/common/PdfViewerDialog";
import { brand, fonts } from "../../theme/brand";
import { QUIENES_SUBNAV } from "../../data/navigation";
import { LICENCIA_FUNCIONAMIENTO_URL } from "../../data/documentos";

const CERTIFICACIONES = [
  {
    codigo: "9001",
    anio: "2015",
    titulo: "Gestión de la calidad",
    texto:
      "Procesos documentados, seguimiento de la satisfacción de las partes y mejora continua de la gestión institucional.",
    estado: "Certificación vigente",
  },
  {
    codigo: "37001",
    anio: "2016",
    titulo: "Gestión antisoborno",
    texto:
      "Debida diligencia de terceros, canal de denuncias confidencial y una cultura institucional de integridad.",
    estado: "Certificación vigente",
  },
  {
    codigo: "27001",
    anio: "2022",
    titulo: "Seguridad de la información",
    texto:
      "Protección de la información de las partes, controles de acceso y continuidad de los servicios arbitrales.",
    estado: "En implementación",
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
        subtitle="Certificaciones internacionales y licencia de funcionamiento de la Cámara de Comercio y Producción de Huancayo."
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
          <SectionHeading
            kicker="Respaldo institucional"
            title="Certificaciones y licencia de funcionamiento"
            subtitle="La Corte sustenta su gestión en certificaciones internacionales y en la licencia de funcionamiento de la Cámara de Comercio y Producción de Huancayo."
            sx={{ mb: { xs: 3.5, md: 4.5 } }}
          />

          <Grid
            container
            spacing={{ xs: 4, md: 4.5 }}
            sx={{ alignItems: "stretch" }}
          >
            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  height: "100%",
                  backgroundColor: brand.white,
                  border: `1px solid ${brand.line}`,
                  borderTop: `3px solid ${brand.gold}`,
                }}
              >
                <Box
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    borderBottom: `1px solid ${brand.line}`,
                  }}
                >
                  <Typography
                    sx={{
                      color: brand.goldInk,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "0.13em",
                      textTransform: "uppercase",
                    }}
                  >
                    Cámara de Comercio y Producción de Huancayo
                  </Typography>

                  <Typography
                    component="h3"
                    sx={{
                      mt: 1,
                      color: brand.primaryDeep,
                      fontFamily: fonts.display,
                      fontWeight: 600,
                      fontSize: { xs: "1.35rem", md: "1.55rem" },
                      lineHeight: 1.2,
                      textWrap: "balance",
                    }}
                  >
                    Licencia de funcionamiento
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      color: brand.muted,
                      fontSize: "0.86rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Documento que acredita el funcionamiento del local
                    institucional de la Cámara.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    minHeight: { xs: 380, md: 460 },
                    p: { xs: 1.2, md: 1.5 },
                    backgroundColor: brand.paperAlt,
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
                        minHeight: { xs: 356, md: 436 },
                        border: 0,
                        backgroundColor: brand.white,
                      }}
                    />
                  ) : (
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        height: "100%",
                        minHeight: { xs: 356, md: 436 },
                        p: { xs: 3, md: 4 },
                        textAlign: "center",
                        backgroundColor: brand.white,
                        border: `1px solid ${brand.line}`,
                      }}
                    >
                      

                      <Typography
                        sx={{
                          color: brand.goldInk,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                        }}
                      >
                        Documento institucional
                      </Typography>

                      <Typography
                        sx={{
                          mt: 1.2,
                          color: brand.primaryDeep,
                          fontFamily: fonts.display,
                          fontSize: { xs: "1.15rem", md: "1.3rem" },
                          fontWeight: 600,
                          lineHeight: 1.25,
                        }}
                      >
                        Licencia de funcionamiento
                      </Typography>

                    </Box>
                  )}
                </Box>

                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={1.2}
                  sx={{
                    p: { xs: 2, md: 2.5 },
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
                    {licenciaDisponible
                      ? "PDF · Documento oficial"
                      : "Documento en incorporación"}
                  </Typography>

                  {licenciaDisponible && (
                    <Stack direction="row" spacing={1}>
                      <Button
                        component="a"
                        href={LICENCIA_FUNCIONAMIENTO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                        variant="text"
                        endIcon={<OpenInNewOutlinedIcon sx={{ fontSize: 15 }} />}
                        sx={{ color: brand.primary, fontSize: "0.75rem" }}
                      >
                        Abrir PDF
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        startIcon={
                          <DescriptionOutlinedIcon sx={{ fontSize: 15 }} />
                        }
                        onClick={() => setLicenciaOpen(true)}
                        sx={{ fontSize: "0.75rem", whiteSpace: "nowrap" }}
                      >
                        Ver documento
                      </Button>
                    </Stack>
                  )}
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
              <Stack
                spacing={2}
                sx={{
                  width: "100%",
                  height: "100%",
                }}
              >
                {CERTIFICACIONES.map((certificacion) => (
                  <Box
                    key={certificacion.codigo}
                    sx={{
                      flex: 1,
                      display: "flex",
                      alignItems: "flex-start",
                      gap: { xs: 2, md: 2.5 },
                      p: { xs: 2.2, md: 2.8 },
                      backgroundColor: brand.white,
                      border: `1px solid ${brand.line}`,
                      borderTop: `2px solid ${brand.gold}`,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        width: { xs: 58, md: 70 },
                        height: { xs: 58, md: 70 },
                        border: `1px solid ${brand.lineStrong}`,
                        backgroundColor: brand.whiteSoft,
                      }}
                    >
                      <Typography
                        sx={{
                          color: brand.goldInk,
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                        }}
                      >
                        ISO
                      </Typography>
                      <Typography
                        sx={{
                          color: brand.primaryDeep,
                          fontFamily: fonts.display,
                          fontSize: { xs: "1.05rem", md: "1.18rem" },
                          fontWeight: 600,
                          lineHeight: 1.1,
                        }}
                      >
                        {certificacion.codigo}
                      </Typography>
                      <Typography
                        sx={{
                          color: brand.muted,
                          fontSize: "0.7rem",
                          lineHeight: 1.2,
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
                        sx={{
                          color: brand.primaryDeep,
                          fontFamily: fonts.display,
                          fontSize: { xs: "1.06rem", md: "1.18rem" },
                          fontWeight: 600,
                          lineHeight: 1.25,
                        }}
                      >
                        {certificacion.titulo}
                      </Typography>

                      <Typography
                        sx={{
                          mt: 0.8,
                          color: brand.muted,
                          fontSize: { xs: "0.82rem", md: "0.86rem" },
                          lineHeight: 1.6,
                        }}
                      >
                        {certificacion.texto}
                      </Typography>

                      <Typography
                        sx={{
                          mt: "auto",
                          pt: 1.2,
                          color:
                            certificacion.estado === "En implementación"
                              ? brand.accent
                              : brand.goldInk,
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
                ))}
              </Stack>
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
