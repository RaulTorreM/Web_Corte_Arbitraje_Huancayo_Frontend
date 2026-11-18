import { useState } from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionSubnav from "../../components/common/SectionSubnav";
import SectionHeading from "../../components/common/SectionHeading";
import PdfViewerDialog from "../../components/common/PdfViewerDialog";
import { brand, fonts } from "../../theme/brand";
import { QUIENES_SUBNAV } from "../../data/navigation";

type Certificado = {
  id: string;
  codigo: string;
  norma: string;
  titulo: string;
  texto: string;
  preview: string;
  documentos: {
    label: string;
    url: string;
  }[];
};

const CERTIFICADOS: Certificado[] = [
  {
    id: "iso-27001",
    codigo: "27001",
    norma: "ISO/IEC 27001:2022",
    titulo: "Seguridad de la información",
    texto:
      "Protección de la información de las partes, controles de acceso y continuidad de los servicios arbitrales.",
    preview: "/certificados/ISO_27001_2022.webp",
    documentos: [
      { label: "Español", url: "/certificados/ISO_27001_2022_ES.pdf" },
      { label: "English", url: "/certificados/ISO_27001_2022_EN.pdf" },
    ],
  },
  {
    id: "iso-37001",
    codigo: "37001",
    norma: "ISO 37001:2025",
    titulo: "Gestión antisoborno",
    texto:
      "Debida diligencia de terceros, canal de denuncias confidencial y una cultura institucional de integridad.",
    preview: "/certificados/ISO_37001_2025.webp",
    documentos: [
      { label: "Ver certificado", url: "/certificados/ISO_37001_2025.pdf" },
    ],
  },
  {
    id: "iso-9001",
    codigo: "9001",
    norma: "ISO 9001:2015",
    titulo: "Gestión de la calidad",
    texto:
      "Procesos documentados, seguimiento de la satisfacción de las partes y mejora continua de la gestión institucional.",
    preview: "/certificados/ISO_9001_2015.webp",
    documentos: [
      { label: "Ver certificado", url: "/certificados/ISO_9001_2015.pdf" },
    ],
  },
];

const kickerSx = {
  color: brand.goldInk,
  fontSize: "0.7rem",
  fontWeight: 700,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
} as const;

export default function CertificacionesPage() {
  const [selected, setSelected] = useState<{ title: string; url: string } | null>(
    null
  );

  const openCertificado = (
    certificado: Certificado,
    documento: Certificado["documentos"][number]
  ) => {
    setSelected({
      title:
        documento.label === "Ver certificado"
          ? certificado.norma
          : `${certificado.norma} · ${documento.label}`,
      url: documento.url,
    });
  };

  return (
    <>
      <PageMeta
        title="Certificaciones"
        description="Licencia de funcionamiento y certificaciones ISO de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Calidad e integridad"
        title="Certificaciones"
        subtitle="Licencia de funcionamiento y certificaciones internacionales de la Corte."
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
          py: { xs: 6, md: 8 },
          backgroundColor: brand.whiteSoft,
        }}
      >
        <Container>
          <SectionHeading
            kicker="Registro institucional"
            title="Certificaciones y habilitación"
            subtitle="Certificados ISO de calidad, antisoborno y seguridad de la información disponibles para consulta."
          />

          <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "stretch" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  height: "100%",
                  pt: 2,
                  borderTop: `2px solid ${brand.primaryDeep}`,
                }}
              >
                <Typography sx={{ ...kickerSx, mb: 1.2 }}>
                  Sistema de Gestión Integrada
                </Typography>

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
                  Políticas de Sistema de Gestión Integrada
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    maxWidth: 520,
                    color: brand.muted,
                    fontSize: "0.9rem",
                    lineHeight: 1.7,
                  }}
                >
                  Este espacio reunirá las políticas aprobadas del Sistema de
                  Gestión Integrada de la Corte.
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: brand.goldInk,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {/* Documentos en proceso de publicación */}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  height: "100%",
                  pt: 2,
                  borderTop: `2px solid ${brand.gold}`,
                }}
              >
                <Typography sx={{ ...kickerSx, mb: 1.2 }}>
                  Certificaciones ISO
                </Typography>

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
                  Nuestras certificaciones ISO
                </Typography>

                <Box sx={{ mt: 2.5, borderTop: `1px solid ${brand.lineStrong}` }}>
                  {CERTIFICADOS.map((certificado) => (
                    <Box
                      key={certificado.id}
                      sx={{
                        py: { xs: 2.5, sm: 2.7 },
                        borderBottom: `1px solid ${brand.line}`,
                      }}
                    >
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={{ xs: 2, sm: 2.4 }}
                        sx={{ alignItems: "flex-start" }}
                      >
                        <Box
                          component="button"
                          type="button"
                          onClick={() =>
                            openCertificado(
                              certificado,
                              certificado.documentos[0]
                            )
                          }
                          aria-label={`Ver certificado ${certificado.norma}`}
                          sx={{
                            flexShrink: 0,
                            width: { xs: "100%", sm: 176 },
                            maxWidth: { xs: 230, sm: 176 },
                            p: 0,
                            border: 0,
                            background: "none",
                            cursor: "pointer",
                            textAlign: "left",
                            "&:hover .certificado-preview": {
                              transform: "translateY(-3px)",
                              boxShadow: "0 12px 24px rgba(9,35,84,0.22)",
                            },
                            "&:focus-visible": {
                              outline: `2px solid ${brand.gold}`,
                              outlineOffset: 4,
                            },
                          }}
                        >
                          <Box
                            className="certificado-preview"
                            sx={{
                              position: "relative",
                              overflow: "hidden",
                              p: { xs: 1, sm: 1.2 },
                              backgroundColor: brand.paperAlt,
                              border: `1px solid ${brand.lineStrong}`,
                              boxShadow: "0 8px 20px rgba(9,35,84,0.16)",
                              transition:
                                "transform 220ms ease, box-shadow 220ms ease",
                              "&::before": {
                                content: '""',
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: 3,
                                zIndex: 3,
                                backgroundColor: brand.gold,
                              },
                            }}
                          >
                            <Box
                              component="img"
                              src={certificado.preview}
                              alt={`Certificado ${certificado.norma}`}
                              loading="lazy"
                              sx={{
                                display: "block",
                                width: "100%",
                                aspectRatio: "1 / 1.414",
                                objectFit: "cover",
                                objectPosition: "top",
                              }}
                            />
                            <Box
                              aria-hidden="true"
                              sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(180deg, transparent 68%, rgba(9,35,84,0.8) 100%)",
                              }}
                            />
                            <Box
                              sx={{
                                position: "absolute",
                                top: { xs: 8, sm: 10 },
                                right: { xs: 8, sm: 10 },
                                zIndex: 3,
                                backgroundColor: brand.primaryDeep,
                                color: brand.goldSoft,
                                px: 0.75,
                                py: 0.35,
                                fontSize: "0.55rem",
                                fontWeight: 800,
                                letterSpacing: "0.1em",
                                lineHeight: 1,
                              }}
                            >
                              PDF
                            </Box>
                            <Stack
                              direction="row"
                              spacing={0.6}
                              sx={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                bottom: 0,
                                p: 1,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {/* <PictureAsPdfOutlinedIcon
                                sx={{ fontSize: 14, color: brand.goldSoft }}
                              /> */}
                              <Typography
                                sx={{
                                  color: brand.white,
                                  fontSize: "0.6rem",
                                  fontWeight: 700,
                                  letterSpacing: "0.09em",
                                  lineHeight: 1.3,
                                  textTransform: "uppercase",
                                }}
                              >
                                Ver certificado
                              </Typography>
                            </Stack>
                          </Box>
                        </Box>

                        <Box sx={{ minWidth: 0 }}>
                          <Typography sx={{ ...kickerSx, mb: 0.7 }}>
                            {certificado.norma}
                          </Typography>

                          <Typography
                            component="h3"
                            sx={{
                              color: brand.primaryDeep,
                              fontFamily: fonts.display,
                              fontSize: { xs: "1.2rem", sm: "1.3rem" },
                              fontWeight: 600,
                              lineHeight: 1.2,
                            }}
                          >
                            {certificado.titulo}
                          </Typography>

                          <Typography
                            sx={{
                              mt: 0.7,
                              color: brand.muted,
                              fontSize: "0.84rem",
                              lineHeight: 1.65,
                            }}
                          >
                            {certificado.texto}
                          </Typography>

                          <Stack
                            direction="row"
                            spacing={0.8}
                            sx={{ mt: 1.6, flexWrap: "wrap", rowGap: 0.8 }}
                          >
                            {certificado.documentos.map((documento) => (
                              <Button
                                key={documento.url}
                                size="small"
                                variant="outlined"
                                startIcon={
                                  <PictureAsPdfOutlinedIcon
                                    sx={{ fontSize: 16 }}
                                  />
                                }
                                onClick={() =>
                                  openCertificado(certificado, documento)
                                }
                                sx={{
                                  borderColor: brand.lineStrong,
                                  color: brand.primary,
                                  fontSize: "0.72rem",
                                  fontWeight: 700,
                                  textTransform: "none",
                                  "&:hover": {
                                    borderColor: brand.gold,
                                    backgroundColor:
                                      "rgba(243,187,57,0.08)",
                                  },
                                }}
                              >
                                {documento.label}
                              </Button>
                            ))}
                          </Stack>
                        </Box>
                      </Stack>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <PdfViewerDialog
        open={Boolean(selected)}
        title={selected?.title ?? ""}
        url={selected?.url ?? ""}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
