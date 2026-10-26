import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import { brand, fonts } from "../../theme/brand";
import { SITE } from "../../data/site";
import { MEDIA } from "../../data/media";

const TIPOS = [
  {
    label: "Reclamo",
    text: "Disconformidad relacionada directamente con el servicio recibido.",
  },
  {
    label: "Queja",
    text: "Malestar respecto de la atención o del trato recibido, sin relación directa con el servicio.",
  },
];

const DATOS = [
  "Nombre completo y documento de identidad (DNI, CE o RUC).",
  "Correo electrónico, teléfono y domicilio.",
  "Servicio relacionado y, si corresponde, número de expediente o comprobante.",
  "Detalle de lo ocurrido y la solución que esperas.",
];

const PASOS = [
  {
    title: "Reúne la información",
    text: "Identifica si se trata de un reclamo o una queja y prepara los datos de la lista.",
  },
  {
    title: "Preséntala por un canal oficial",
    text: "Escríbenos con el asunto “Libro de reclamaciones” o solicita la hoja física en la Secretaría General.",
  },
  {
    title: "Recibe la respuesta",
    text: "La Corte evalúa la hoja y comunica su respuesta al correo indicado dentro del plazo legal.",
  },
];

export default function ReclamacionesPage() {
  const mailto = `mailto:${SITE.contact.email}?subject=${encodeURIComponent("Libro de reclamaciones")}`;

  return (
    <>
      <PageMeta
        title="Libro de reclamaciones"
        description="Libro de reclamaciones de la Corte Superior de Arbitraje de Huancayo. Canales para registrar un reclamo o queja sobre los servicios."
      />

      <PageHero
        kicker="Protección al consumidor"
        title="Libro de reclamaciones"
        subtitle="Registra un reclamo o queja sobre los servicios de la Corte. La Secretaría General evalúa cada hoja y responde dentro del plazo legal."
        crumbs={[{ label: "Libro de reclamaciones" }]}
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

      <Box component="section" sx={{ py: { xs: 5, md: 6 }, backgroundColor: brand.whiteSoft }}>
        <Container>
          <Stack
            direction="row"
            spacing={1.4}
            sx={{
              alignItems: "flex-start",
              py: 2,
              borderTop: `2px solid ${brand.gold}`,
              borderBottom: `1px solid ${brand.line}`,
            }}
          >
            <InfoOutlinedIcon sx={{ color: brand.goldDeep, fontSize: 19, mt: "2px" }} />
            <Typography sx={{ color: brand.muted, fontSize: "0.84rem", lineHeight: 1.7 }}>
              <Box component="strong" sx={{ color: brand.primaryDeep }}>
                Hoja de reclamación virtual.
              </Box>{" "}
              Conforme al Código de Protección y Defensa del Consumidor (Ley N.° 29571),
              la Corte pone a tu disposición este libro de reclamaciones. El plazo máximo
              de respuesta es de quince (15) días hábiles.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }}>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                kicker="Registro"
                title="Cómo registrar tu hoja"
                subtitle="No hay un formulario con envío simulado. La hoja se presenta por correo o en la Secretaría General, con los datos completos."
                sx={{ mb: { xs: 3.5, md: 4.5 } }}
              />

              <Stack sx={{ borderTop: `1px solid ${brand.lineStrong}` }}>
                {PASOS.map((paso, index) => (
                  <Box
                    key={paso.title}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "34px 1fr",
                      gap: 1.6,
                      py: 2.2,
                      borderBottom: `1px solid ${brand.line}`,
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
                      <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
                        {paso.title}
                      </Typography>
                      <Typography sx={{ mt: 0.45, color: brand.muted, fontSize: "0.84rem", lineHeight: 1.65 }}>
                        {paso.text}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>

              <Box sx={{ mt: 4 }}>
                <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.92rem" }}>
                  Datos que debe incluir la hoja
                </Typography>

                <Stack sx={{ mt: 1.2 }}>
                  {DATOS.map((dato) => (
                    <Typography
                      key={dato}
                      sx={{
                        py: 0.95,
                        borderTop: `1px solid ${brand.line}`,
                        color: brand.muted,
                        fontSize: "0.83rem",
                        lineHeight: 1.55,
                      }}
                    >
                      {dato}
                    </Typography>
                  ))}
                </Stack>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box sx={{ borderTop: `2px solid ${brand.primary}`, pt: 2.2 }}>
                <Typography variant="h3" sx={{ color: brand.primaryDeep, fontSize: "1.5rem" }}>
                  ¿Reclamo o queja?
                </Typography>

                <Stack spacing={2} sx={{ mt: 1.8 }}>
                  {TIPOS.map((tipo) => (
                    <Box key={tipo.label}>
                      <Typography sx={{ color: brand.goldDeep, fontWeight: 700, fontSize: "0.84rem" }}>
                        {tipo.label}
                      </Typography>
                      <Typography sx={{ mt: 0.35, color: brand.muted, fontSize: "0.83rem", lineHeight: 1.65 }}>
                        {tipo.text}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Box sx={{ mt: 3, pt: 2.2, borderTop: `1px solid ${brand.line}` }}>
                  <Stack direction="row" spacing={1.1} sx={{ alignItems: "center", mb: 1.2 }}>
                    <ScheduleOutlinedIcon sx={{ color: brand.goldDeep, fontSize: 18 }} />
                    <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.88rem" }}>
                      Seguimiento
                    </Typography>
                  </Stack>
                  <Typography sx={{ color: brand.muted, fontSize: "0.83rem", lineHeight: 1.68 }}>
                    Conserva el correo de confirmación para consultar el estado de tu hoja.
                  </Typography>
                </Box>

                <Box sx={{ mt: 3, pt: 2.2, borderTop: `1px solid ${brand.line}` }}>
                  <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.88rem", mb: 1.2 }}>
                    Canales
                  </Typography>

                  <Stack spacing={1.2}>
                    <Box
                      component="a"
                      href={mailto}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: brand.muted,
                        textDecoration: "none",
                        fontSize: "0.82rem",
                        "&:hover": { color: brand.primary },
                      }}
                    >
                      <MailOutlinedIcon sx={{ fontSize: 17, color: brand.goldDeep }} />
                      {SITE.contact.email}
                    </Box>

                    <Box
                      component="a"
                      href={SITE.contact.phoneHref}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        color: brand.muted,
                        textDecoration: "none",
                        fontSize: "0.82rem",
                        "&:hover": { color: brand.primary },
                      }}
                    >
                      <PhoneOutlinedIcon sx={{ fontSize: 17, color: brand.goldDeep }} />
                      {SITE.contact.phone}
                    </Box>

                    <Stack direction="row" spacing={1} sx={{ alignItems: "flex-start" }}>
                      <PlaceOutlinedIcon sx={{ fontSize: 17, color: brand.goldDeep, mt: "2px" }} />
                      <Typography sx={{ color: brand.muted, fontSize: "0.82rem", lineHeight: 1.55 }}>
                        {SITE.contact.address}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: { xs: 5, md: 6 },
              pt: 2.2,
              borderTop: `1px solid ${brand.line}`,
            }}
          >
            <Typography sx={{ color: brand.primaryDeep, fontWeight: 700, fontSize: "0.88rem", mb: 1 }}>
              Información importante
            </Typography>

            <Stack spacing={0.8}>
              {[
                "La formulación de un reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para denunciar ante una autoridad.",
                "La información se usa únicamente para atender la hoja de reclamación y se trata conforme a la normativa de protección de datos personales.",
                "Si prefieres presentar la hoja en físico, solicítala en la Secretaría General de la Corte.",
              ].map((item) => (
                <Typography
                  key={item}
                  sx={{ color: brand.muted, fontSize: "0.8rem", lineHeight: 1.65 }}
                >
                  {item}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

    </>
  );
}
