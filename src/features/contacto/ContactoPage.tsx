import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  Link,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import FormSuccess from "../../components/forms/FormSuccess";
import { viewportOnce } from "../../utils/animations";
import { brand } from "../../theme/brand";
import { SITE } from "../../data/site";

const contactoSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(3, "Ingresa tu nombre completo")
    .max(100, "Máximo 100 caracteres"),
  email: z
    .string()
    .trim()
    .min(1, "Ingresa tu correo electrónico")
    .email("Ingresa un correo válido"),
  telefono: z
    .string()
    .trim()
    .optional()
    .refine(
      (value) => !value || /^[0-9+()\s-]{6,20}$/.test(value),
      "Ingresa un teléfono válido"
    ),
  tipo: z.string().min(1, "Selecciona un motivo de consulta"),
  mensaje: z
    .string()
    .trim()
    .min(20, "Cuéntanos un poco más (mínimo 20 caracteres)")
    .max(1200, "Máximo 1200 caracteres"),
  acepta: z
    .boolean()
    .refine((value) => value, "Debes aceptar el tratamiento de datos"),
});

type ContactoValues = z.infer<typeof contactoSchema>;

const TIPOS = [
  "Consulta general",
  "Arbitraje",
  "JPRD (en implementación)",
  "Capacitaciones",
  "Documentos y certificaciones",
  "Otro",
];

const CANALES = [
  {
    icon: PhoneOutlinedIcon,
    label: "Teléfono",
    value: SITE.contact.phone,
    href: SITE.contact.phoneHref,
  },
  {
    icon: MailOutlinedIcon,
    label: "Correo institucional",
    value: SITE.contact.email,
    href: `mailto:${SITE.contact.email}`,
  },
];

export default function ContactoPage() {
  const [sent, setSent] = useState(false);
  const [nombre, setNombre] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactoValues>({
    resolver: zodResolver(contactoSchema),
    defaultValues: {
      nombre: "",
      email: "",
      telefono: "",
      tipo: "",
      mensaje: "",
      acepta: false,
    },
  });

  const onSubmit = async (values: ContactoValues) => {
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setNombre(values.nombre.split(" ")[0]);
    setSent(true);
    reset();
  };

  return (
    <>
      <PageMeta
        title="Contacto"
        description="Comunícate con la Corte Superior de Arbitraje de la Cámara de Comercio de Huancayo: dirección, teléfonos, correo institucional, horarios y formulario de contacto."
      />

      <PageHero
        kicker="Estamos para orientarte"
        title="Contacto"
        subtitle="Escríbenos, llámanos o visítanos. La Secretaría General atiende consultas sobre arbitraje, documentación institucional y capacitaciones. La JPRD se encuentra en implementación, por lo que aún no se reciben solicitudes para administrar juntas."
        crumbs={[{ label: "Contacto" }]}
        image="/images/ARBITRAJE_IMG_02-01.jpg"
      />

      <Box component="section" sx={{ py: { xs: 7, md: 10 }, backgroundColor: brand.paper }}>
        <Container>
          <Grid container spacing={{ xs: 5, md: 7 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 7 }}>
              {sent ? (
                <FormSuccess
                  title={`Gracias, ${nombre || "por escribirnos"}`}
                  text="Hemos registrado tu consulta de manera referencial. En esta versión del sitio el envío es simulado; cuando el canal esté habilitado, la Secretaría General te responderá al correo indicado."
                  code="CT-2026-0042"
                  onReset={() => setSent(false)}
                  resetLabel="Enviar otra consulta"
                />
              ) : (
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6 }}
                  sx={{
                    p: { xs: 2.5, md: 4 },
                    backgroundColor: brand.white,
                    border: `1px solid ${brand.line}`,
                    borderTop: `4px solid ${brand.gold}`,
                  }}
                >
                  <Typography
                    sx={{
                      color: brand.goldDeep,
                      fontSize: "0.7rem",
                      fontWeight: 750,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      mb: 1.2,
                    }}
                  >
                    Formulario de contacto
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{ color: brand.primaryDark, fontSize: { xs: "1.6rem", md: "2rem" } }}
                  >
                    Cuéntanos cómo podemos ayudarte
                  </Typography>

                  <Typography sx={{ mt: 1.2, mb: 3, color: brand.muted, fontSize: "0.9rem", lineHeight: 1.7 }}>
                    Completa los datos y describe tu consulta. Los campos marcados
                    con <Box component="span" sx={{ color: "#A63A3A" }}>*</Box> son obligatorios.
                  </Typography>

                  <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <Grid container spacing={2.2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Nombre completo *"
                          fullWidth
                          autoComplete="name"
                          {...register("nombre")}
                          error={!!errors.nombre}
                          helperText={errors.nombre?.message}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Correo electrónico *"
                          type="email"
                          fullWidth
                          autoComplete="email"
                          {...register("email")}
                          error={!!errors.email}
                          helperText={errors.email?.message}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Teléfono o celular"
                          fullWidth
                          autoComplete="tel"
                          {...register("telefono")}
                          error={!!errors.telefono}
                          helperText={errors.telefono?.message}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          label="Motivo de consulta *"
                          fullWidth
                          {...register("tipo")}
                          error={!!errors.tipo}
                          helperText={errors.tipo?.message}
                        >
                          <MenuItem value="" disabled sx={{ display: "none" }} />
                          {TIPOS.map((tipo) => (
                            <MenuItem key={tipo} value={tipo}>
                              {tipo}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Mensaje *"
                          fullWidth
                          multiline
                          minRows={5}
                          {...register("mensaje")}
                          error={!!errors.mensaje}
                          helperText={
                            errors.mensaje?.message ??
                            "No incluyas datos sensibles de terceros ni información confidencial del expediente."
                          }
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <FormControlLabel
                          control={<Checkbox {...register("acepta")} />}
                          label={
                            <Typography sx={{ color: brand.muted, fontSize: "0.83rem", lineHeight: 1.6 }}>
                              Acepto el tratamiento de mis datos personales para
                              atender esta consulta, conforme a la normativa de
                              protección de datos personales.
                            </Typography>
                          }
                          sx={{ alignItems: "flex-start", m: 0 }}
                        />

                        {errors.acepta && (
                          <FormHelperText error sx={{ ml: 0 }}>
                            {errors.acepta.message}
                          </FormHelperText>
                        )}
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={2}
                          sx={{ alignItems: { sm: "center" }, mt: 0.5 }}
                        >
                          <Button
                            type="submit"
                            variant="contained"
                            disabled={isSubmitting}
                            endIcon={<SendOutlinedIcon sx={{ fontSize: "1rem" }} />}
                          >
                            {isSubmitting ? "Enviando..." : "Enviar consulta"}
                          </Button>

                          <Typography sx={{ color: brand.muted, fontSize: "0.76rem" }}>
                            El envío es simulado en esta versión del sitio.
                          </Typography>
                        </Stack>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              )}
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Stack spacing={2.5}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.6 }}
                  sx={{
                    p: { xs: 2.8, md: 3.2 },
                    backgroundColor: brand.primaryDark,
                    color: brand.white,
                    borderTop: `4px solid ${brand.gold}`,
                  }}
                >
                  <Typography
                    sx={{
                      color: brand.goldSoft,
                      fontSize: "0.68rem",
                      fontWeight: 750,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      mb: 1,
                    }}
                  >
                    Atención institucional
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{ color: brand.white, fontSize: "1.3rem", mb: 2.5 }}
                  >
                    Secretaría General
                  </Typography>

                  <Stack spacing={2.2}>
                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                      <PlaceOutlinedIcon sx={{ color: brand.goldSoft, mt: "2px" }} />
                      <Box>
                        <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          Dirección
                        </Typography>
                        <Typography sx={{ color: "rgba(255,255,255,0.8)", fontSize: "0.86rem", lineHeight: 1.55, mt: 0.3 }}>
                          {SITE.contact.address}
                        </Typography>
                      </Box>
                    </Stack>

                    {CANALES.map((canal) => {
                      const Icon = canal.icon;

                      return (
                        <Stack key={canal.label} direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                          <Icon sx={{ color: brand.goldSoft, mt: "2px" }} />
                          <Box>
                            <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                              {canal.label}
                            </Typography>
                            <Link
                              href={canal.href}
                              underline="none"
                              sx={{
                                display: "block",
                                mt: 0.3,
                                color: "rgba(255,255,255,0.86)",
                                fontSize: "0.86rem",
                                wordBreak: "break-word",
                                "&:hover": { color: brand.goldSoft },
                              }}
                            >
                              {canal.value}
                            </Link>
                          </Box>
                        </Stack>
                      );
                    })}

                    <Stack direction="row" spacing={1.5} sx={{ alignItems: "flex-start" }}>
                      <AccessTimeOutlinedIcon sx={{ color: brand.goldSoft, mt: "2px" }} />
                      <Box>
                        <Typography sx={{ color: "rgba(255,255,255,0.55)", fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                          Horario de atención
                        </Typography>
                        {SITE.contact.schedule.map((line) => (
                          <Typography
                            key={line}
                            sx={{ color: "rgba(255,255,255,0.76)", fontSize: "0.8rem", lineHeight: 1.55, mt: 0.35 }}
                          >
                            {line}
                          </Typography>
                        ))}
                      </Box>
                    </Stack>
                  </Stack>

                  <Divider sx={{ my: 2.5, borderColor: "rgba(255,255,255,0.12)" }} />

                  <Button
                    href={`https://wa.me/${SITE.contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="secondary"
                    startIcon={<WhatsAppIcon />}
                    fullWidth
                  >
                    Escribir por WhatsApp
                  </Button>
                </Box>

                <Box
                  sx={{
                    p: 2.8,
                    backgroundColor: brand.white,
                    border: `1px solid ${brand.line}`,
                    borderLeft: `4px solid ${brand.gold}`,
                  }}
                >
                  <Typography sx={{ color: brand.primaryDark, fontWeight: 750, fontSize: "0.92rem" }}>
                    Antes de escribirnos
                  </Typography>

                  <Stack spacing={1.2} sx={{ mt: 1.5 }}>
                    {[
                      "Revisa los requisitos y documentos de la sección correspondiente.",
                      "Indica el número de expediente si tu consulta está vinculada a un caso.",
                      "No compartas datos confidenciales por canales no oficiales.",
                    ].map((item) => (
                      <Stack key={item} direction="row" spacing={1.1} sx={{ alignItems: "flex-start" }}>
                        <Box sx={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: brand.goldDeep, mt: "7px", flexShrink: 0 }} />
                        <Typography sx={{ color: brand.muted, fontSize: "0.82rem", lineHeight: 1.6 }}>
                          {item}
                        </Typography>
                      </Stack>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 7, md: 9 },
          backgroundColor: brand.white,
          borderTop: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{ alignItems: { sm: "flex-end" }, justifyContent: "space-between", mb: 3 }}
          >
            <Box>
              <Typography
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.7rem",
                  fontWeight: 750,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  mb: 1,
                }}
              >
                Nuestra ubicación
              </Typography>

              <Typography
                variant="h2"
                sx={{ color: brand.primaryDark, fontSize: { xs: "1.8rem", md: "2.2rem" } }}
              >
                Visítanos en Huancayo
              </Typography>

              <Typography sx={{ color: brand.muted, fontSize: "0.92rem", mt: 1 }}>
                {SITE.contact.address}
              </Typography>
            </Box>

            <Button
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${SITE.contact.mapQuery}, Huancayo, Perú`)}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              endIcon={<OpenInNewIcon sx={{ fontSize: "1rem" }} />}
              sx={{ flexShrink: 0 }}
            >
              Abrir en Google Maps
            </Button>
          </Stack>

          <Box
            sx={{
              border: `1px solid ${brand.line}`,
              borderTop: `3px solid ${brand.gold}`,
              overflow: "hidden",
              "& iframe": { display: "block", width: "100%", border: 0 },
            }}
          >
            <Box
              component="iframe"
              title="Mapa de ubicación de la Corte Superior de Arbitraje de Huancayo"
              src={`https://www.google.com/maps?q=${encodeURIComponent(`${SITE.contact.mapQuery}, Huancayo, Perú`)}&output=embed`}
              height="430"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Box>

          <Typography sx={{ mt: 1.5, color: brand.muted, fontSize: "0.74rem", lineHeight: 1.6 }}>
            El mapa se muestra con fines referenciales. Confirma la ubicación exacta
            y el horario de atención antes de tu visita.
          </Typography>
        </Container>
      </Box>

      <CtaBand
        title="¿Ya cuentas con una cláusula arbitral?"
        subtitle="Revisa los requisitos, los plazos y el derecho de presentación antes de acudir a la Secretaría General."
        primaryLabel="Cómo iniciar un arbitraje"
        primaryTo="/arbitraje/inicio"
        secondaryLabel="Revisar mi cláusula"
        secondaryTo="/arbitraje/clausula"
      />
    </>
  );
}
