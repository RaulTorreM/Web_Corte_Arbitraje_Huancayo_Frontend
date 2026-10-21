import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import CtaBand from "../../components/common/CtaBand";
import FormSuccess from "../../components/forms/FormSuccess";
import { viewportOnce } from "../../utils/animations";
import { brand } from "../../theme/brand";
import { SITE } from "../../data/site";

const reclamacionSchema = z.object({
  nombre: z
    .string()
    .trim()
    .min(3, "Ingresa tu nombre completo")
    .max(120, "Máximo 120 caracteres"),
  documento: z
    .string()
    .trim()
    .min(6, "Ingresa tu DNI, carné de extranjería o RUC")
    .max(15, "Máximo 15 caracteres")
    .regex(/^[0-9A-Za-z-]+$/, "Usa solo números o letras"),
  email: z
    .string()
    .trim()
    .min(1, "Ingresa tu correo electrónico")
    .email("Ingresa un correo válido"),
  telefono: z
    .string()
    .trim()
    .min(6, "Ingresa un teléfono de contacto")
    .regex(/^[0-9+()\s-]{6,20}$/, "Ingresa un teléfono válido"),
  direccion: z
    .string()
    .trim()
    .min(8, "Ingresa tu domicilio completo")
    .max(180, "Máximo 180 caracteres"),
  tipo: z.string().min(1, "Selecciona si es reclamo o queja"),
  servicio: z.string().min(1, "Selecciona el servicio relacionado"),
  monto: z.string().trim().optional(),
  detalle: z
    .string()
    .trim()
    .min(30, "Describe lo ocurrido con al menos 30 caracteres")
    .max(2000, "Máximo 2000 caracteres"),
  pedido: z
    .string()
    .trim()
    .min(15, "Indica qué solución esperas")
    .max(1000, "Máximo 1000 caracteres"),
  acepta: z
    .boolean()
    .refine((value) => value, "Debes aceptar la declaración para continuar"),
});

type ReclamacionValues = z.infer<typeof reclamacionSchema>;

const SERVICIOS = [
  "Administración de arbitraje",
  "Junta de Prevención y Resolución de Disputas",
  "Capacitaciones y eventos",
  "Certificaciones y documentos",
  "Atención en Secretaría General",
  "Otro servicio",
];

const TIPOS = [
  {
    value: "Reclamo",
    label: "Reclamo",
    text: "Disconformidad relacionada directamente con el servicio recibido.",
  },
  {
    value: "Queja",
    label: "Queja",
    text: "Malestar respecto de la atención o del trato recibido, sin relación directa con el servicio.",
  },
];

const ALCANCE = [
  "La presente hoja corresponde a un libro de reclamaciones virtual de carácter referencial.",
  "El plazo máximo de atención es de quince (15) días hábiles, conforme al Código de Protección y Defensa del Consumidor.",
  "La formulación de un reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para denunciar ante una autoridad.",
  "En esta versión del sitio el envío es simulado: no se almacena ni transmite información personal.",
];

export default function ReclamacionesPage() {
  const [sent, setSent] = useState(false);
  const [codigo, setCodigo] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ReclamacionValues>({
    resolver: zodResolver(reclamacionSchema),
    defaultValues: {
      nombre: "",
      documento: "",
      email: "",
      telefono: "",
      direccion: "",
      tipo: "",
      servicio: "",
      monto: "",
      detalle: "",
      pedido: "",
      acepta: false,
    },
  });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 950));
    setCodigo("LR-2026-0042");
    setSent(true);
    reset();
  };

  return (
    <>
      <PageMeta
        title="Libro de reclamaciones"
        description="Libro de reclamaciones virtual de la Corte Superior de Arbitraje de Huancayo. Registra un reclamo o queja sobre nuestros servicios."
      />

      <PageHero
        kicker="Protección al consumidor"
        title="Libro de reclamaciones"
        subtitle="Registra un reclamo o queja sobre los servicios de la Corte. Tu comunicación será evaluada por la Secretaría General conforme a los plazos legales."
        crumbs={[{ label: "Libro de reclamaciones" }]}
        image="/images/ARBITRAJE_IMG_02-01.jpg"
      />

      <Box
        component="section"
        sx={{ py: { xs: 5, md: 7 }, backgroundColor: brand.white }}
      >
        <Container>
          <Alert
            severity="info"
            icon={<InfoOutlinedIcon />}
            sx={{
              fontSize: "0.84rem",
              lineHeight: 1.7,
              border: `1px solid ${brand.skyMid}`,
              backgroundColor: brand.skySoft,
              color: brand.primaryDark,
            }}
          >
            <strong>Hoja de reclamación virtual.</strong> Conforme al Código de
            Protección y Defensa del Consumidor (Ley N.° 29571), la Corte pone a
            tu disposición este libro de reclamaciones. El plazo máximo de
            respuesta es de quince (15) días hábiles.
          </Alert>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          pb: { xs: 8, md: 11 },
          backgroundColor: brand.white,
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 5, md: 6 }}
            sx={{ alignItems: "flex-start" }}
          >
            <Grid size={{ xs: 12, md: 8 }}>
              {sent ? (
                <FormSuccess
                  title="Hoja de reclamación registrada"
                  text="Tu hoja fue registrada de manera referencial. Conserva el código de seguimiento para futuras comunicaciones. Recuerda que en esta versión del sitio el envío es simulado."
                  code={codigo}
                  onReset={() => setSent(false)}
                  resetLabel="Registrar otra hoja"
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
                    backgroundColor: brand.paper,
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
                    Hoja de reclamación
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      color: brand.primaryDark,
                      fontSize: { xs: "1.6rem", md: "2rem" },
                    }}
                  >
                    Datos de la reclamación
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.2,
                      color: brand.muted,
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Los campos marcados con{" "}
                    <Box component="span" sx={{ color: "#A63A3A" }}>
                      *
                    </Box>{" "}
                    son obligatorios. La información se usa únicamente para
                    atender tu solicitud.
                  </Typography>

                  <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    sx={{ mt: 3 }}
                  >
                    <Typography
                      sx={{
                        color: brand.primaryDark,
                        fontWeight: 750,
                        fontSize: "0.9rem",
                        mb: 1.8,
                      }}
                    >
                      1. Identificación del consumidor
                    </Typography>

                    <Grid container spacing={2.2}>
                      <Grid size={{ xs: 12, sm: 7 }}>
                        <TextField
                          label="Nombre completo *"
                          fullWidth
                          autoComplete="name"
                          {...register("nombre")}
                          error={!!errors.nombre}
                          helperText={errors.nombre?.message}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 5 }}>
                        <TextField
                          label="DNI, CE o RUC *"
                          fullWidth
                          autoComplete="off"
                          {...register("documento")}
                          error={!!errors.documento}
                          helperText={errors.documento?.message}
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
                          label="Teléfono de contacto *"
                          fullWidth
                          autoComplete="tel"
                          {...register("telefono")}
                          error={!!errors.telefono}
                          helperText={errors.telefono?.message}
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Domicilio completo *"
                          fullWidth
                          autoComplete="street-address"
                          {...register("direccion")}
                          error={!!errors.direccion}
                          helperText={errors.direccion?.message}
                        />
                      </Grid>
                    </Grid>

                    <Divider sx={{ my: 3.5 }} />

                    <Typography
                      sx={{
                        color: brand.primaryDark,
                        fontWeight: 750,
                        fontSize: "0.9rem",
                        mb: 1.8,
                      }}
                    >
                      2. Identificación del servicio
                    </Typography>

                    <Grid container spacing={2.2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          label="Tipo de solicitud *"
                          fullWidth
                          {...register("tipo")}
                          error={!!errors.tipo}
                          helperText={errors.tipo?.message}
                        >
                          <MenuItem value="" disabled sx={{ display: "none" }} />
                          {TIPOS.map((tipo) => (
                            <MenuItem key={tipo.value} value={tipo.value}>
                              {tipo.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          label="Servicio relacionado *"
                          fullWidth
                          {...register("servicio")}
                          error={!!errors.servicio}
                          helperText={errors.servicio?.message}
                        >
                          <MenuItem value="" disabled sx={{ display: "none" }} />
                          {SERVICIOS.map((servicio) => (
                            <MenuItem key={servicio} value={servicio}>
                              {servicio}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          label="Monto involucrado (opcional)"
                          fullWidth
                          {...register("monto")}
                          helperText="Indícalo solo si corresponde a un pago o cobro."
                        />
                      </Grid>
                    </Grid>

                    <Divider sx={{ my: 3.5 }} />

                    <Typography
                      sx={{
                        color: brand.primaryDark,
                        fontWeight: 750,
                        fontSize: "0.9rem",
                        mb: 1.8,
                      }}
                    >
                      3. Detalle de la reclamación
                    </Typography>

                    <Grid container spacing={2.2}>
                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Detalle de lo ocurrido *"
                          fullWidth
                          multiline
                          minRows={5}
                          {...register("detalle")}
                          error={!!errors.detalle}
                          helperText={
                            errors.detalle?.message ??
                            "Incluye fechas, número de expediente o comprobante y cualquier dato que permita evaluar tu caso."
                          }
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Pedido o solución esperada *"
                          fullWidth
                          multiline
                          minRows={3}
                          {...register("pedido")}
                          error={!!errors.pedido}
                          helperText={errors.pedido?.message}
                        />
                      </Grid>
                    </Grid>

                    <Divider sx={{ my: 3.5 }} />

                    <Typography
                      sx={{
                        color: brand.primaryDark,
                        fontWeight: 750,
                        fontSize: "0.9rem",
                        mb: 1.8,
                      }}
                    >
                      4. Declaración
                    </Typography>

                    <FormControlLabel
                      control={<Checkbox {...register("acepta")} />}
                      label={
                        <Typography
                          sx={{
                            color: brand.muted,
                            fontSize: "0.83rem",
                            lineHeight: 1.65,
                          }}
                        >
                          Declaro que la información proporcionada es veraz y
                          autorizo su tratamiento para atender esta hoja de
                          reclamación, conforme a la normativa de protección de
                          datos personales.
                        </Typography>
                      }
                      sx={{ alignItems: "flex-start", m: 0 }}
                    />

                    {errors.acepta && (
                      <FormHelperText error sx={{ ml: 0 }}>
                        {errors.acepta.message}
                      </FormHelperText>
                    )}

                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      spacing={2}
                      sx={{ alignItems: { sm: "center" }, mt: 3 }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        endIcon={<SendOutlinedIcon sx={{ fontSize: "1rem" }} />}
                      >
                        {isSubmitting ? "Registrando..." : "Registrar hoja"}
                      </Button>

                      <Typography
                        sx={{ color: brand.muted, fontSize: "0.76rem" }}
                      >
                        El registro es simulado en esta versión del sitio.
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              )}
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Stack spacing={2.5}>
                <Box
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
                    Antes de registrar
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{ color: brand.white, fontSize: "1.25rem", mb: 2 }}
                  >
                    ¿Reclamo o queja?
                  </Typography>

                  <Stack spacing={2}>
                    {TIPOS.map((tipo) => (
                      <Box key={tipo.value}>
                        <Typography
                          sx={{
                            color: brand.goldSoft,
                            fontWeight: 700,
                            fontSize: "0.82rem",
                            mb: 0.4,
                          }}
                        >
                          {tipo.label}
                        </Typography>

                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.76)",
                            fontSize: "0.8rem",
                            lineHeight: 1.65,
                          }}
                        >
                          {tipo.text}
                        </Typography>
                      </Box>
                    ))}
                  </Stack>
                </Box>

                <Box
                  sx={{
                    p: { xs: 2.8, md: 3.2 },
                    backgroundColor: brand.white,
                    border: `1px solid ${brand.line}`,
                  }}
                >
                  <Stack
                    direction="row"
                    spacing={1.2}
                    sx={{ alignItems: "center", mb: 1.5 }}
                  >
                    <ScheduleOutlinedIcon
                      sx={{ color: brand.goldDeep, fontSize: "1.2rem" }}
                    />

                    <Typography
                      sx={{
                        color: brand.primaryDark,
                        fontWeight: 750,
                        fontSize: "0.92rem",
                      }}
                    >
                      Plazo y seguimiento
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{
                      color: brand.muted,
                      fontSize: "0.82rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Recibirás un código de seguimiento al registrar la hoja. La
                    respuesta se comunicará al correo indicado dentro del plazo
                    legal de quince (15) días hábiles.
                  </Typography>

                  <Divider sx={{ my: 2.2 }} />

                  <Typography
                    sx={{
                      color: brand.primaryDark,
                      fontWeight: 750,
                      fontSize: "0.86rem",
                      mb: 1,
                    }}
                  >
                    Canales alternativos
                  </Typography>

                  <Stack spacing={1.1}>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      <PhoneOutlinedIcon
                        sx={{ color: brand.primary, fontSize: "1rem" }}
                      />

                      <Typography
                        sx={{ color: brand.muted, fontSize: "0.8rem" }}
                      >
                        {SITE.contact.phone}
                      </Typography>
                    </Stack>

                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ alignItems: "center" }}
                    >
                      <MailOutlinedIcon
                        sx={{ color: brand.primary, fontSize: "1rem" }}
                      />

                      <Typography
                        sx={{
                          color: brand.muted,
                          fontSize: "0.8rem",
                          wordBreak: "break-word",
                        }}
                      >
                        {SITE.contact.email}
                      </Typography>
                    </Stack>
                  </Stack>
                </Box>

                <Box
                  sx={{
                    p: 2.5,
                    backgroundColor: "rgba(186,153,7,0.08)",
                    border: "1px solid rgba(186,153,7,0.28)",
                    borderLeft: `4px solid ${brand.gold}`,
                  }}
                >
                  <Typography
                    sx={{
                      color: brand.goldDeep,
                      fontWeight: 750,
                      fontSize: "0.84rem",
                      mb: 0.8,
                    }}
                  >
                    Formato físico
                  </Typography>

                  <Typography
                    sx={{
                      color: brand.muted,
                      fontSize: "0.8rem",
                      lineHeight: 1.65,
                    }}
                  >
                    Si prefieres presentar la hoja en físico, solicítala en la
                    Secretaría General de la Corte, en {SITE.contact.address}.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: { xs: 5, md: 6 },
              p: { xs: 2.5, md: 3 },
              backgroundColor: brand.skySoft,
              border: `1px solid ${brand.skyMid}`,
            }}
          >
            <Typography
              sx={{
                color: brand.primaryDark,
                fontWeight: 750,
                fontSize: "0.86rem",
                mb: 1.2,
              }}
            >
              Información importante
            </Typography>

            <Stack spacing={0.8}>
              {ALCANCE.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.1}
                  sx={{ alignItems: "flex-start" }}
                >
                  <Box
                    sx={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      backgroundColor: brand.primary,
                      mt: "7px",
                      flexShrink: 0,
                    }}
                  />

                  <Typography
                    sx={{
                      color: brand.muted,
                      fontSize: "0.78rem",
                      lineHeight: 1.65,
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <CtaBand
        title="¿Tu consulta no es un reclamo?"
        subtitle="Para consultas sobre requisitos, expedientes o capacitaciones, usa el canal de contacto. Te orientaremos hacia el área correspondiente."
        showPrimary={false}
        secondaryLabel="Ir a Contacto"
        secondaryTo="/contacto"
      />
    </>
  );
}
