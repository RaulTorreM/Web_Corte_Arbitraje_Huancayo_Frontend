import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormHelperText,
  Grid,
  MenuItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import PageMeta from "../../components/common/PageMeta";
import PageHero from "../../components/common/PageHero";
import SectionHeading from "../../components/common/SectionHeading";
import CtaBand from "../../components/common/CtaBand";
import FormSuccess from "../../components/forms/FormSuccess";
import { fadeUp, staggerContainer, viewportOnce } from "../../utils/animations";
import { brand } from "../../theme/brand";

const denunciaSchema = z
  .object({
    tipo: z.string().min(1, "Selecciona el tipo de conducta"),
    relacion: z.string().min(1, "Indica la vinculación con la Corte"),
    denunciado: z
      .string()
      .trim()
      .min(3, "Identifica a la persona denunciada")
      .max(160, "Máximo 160 caracteres"),
    rolDenunciado: z.string().min(1, "Selecciona el rol de la persona denunciada"),
    norma: z.string().trim().max(400, "Máximo 400 caracteres").optional(),
    anonima: z.boolean(),
    nombre: z.string().trim().max(100, "Máximo 100 caracteres").optional(),
    email: z.string().trim().optional(),
    telefono: z.string().trim().optional(),
    descripcion: z
      .string()
      .trim()
      .min(40, "Describe los hechos con al menos 40 caracteres")
      .max(2000, "Máximo 2000 caracteres"),
    referencias: z.string().trim().max(600, "Máximo 600 caracteres").optional(),
    acepta: z
      .boolean()
      .refine((value) => value, "Debes confirmar que la información es veraz"),
  })
  .superRefine((data, ctx) => {
    if (data.anonima) return;

    if (!data.nombre || data.nombre.length < 3) {
      ctx.addIssue({
        code: "custom",
        path: ["nombre"],
        message: "Ingresa tu nombre o un seudónimo de contacto",
      });
    }

    if (
      !data.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["email"],
        message: "Ingresa un correo válido para darte seguimiento",
      });
    }
  });

type DenunciaValues = z.infer<typeof denunciaSchema>;

const TIPOS = [
  "Incumplimiento de la Ley de Arbitraje o del Reglamento",
  "Conducta contraria a las Reglas de Ética",
  "Falta al deber de confidencialidad",
  "Inasistencia reiterada a actuaciones arbitrales",
  "Demora injustificada en la conducción del arbitraje",
  "Recusación manifiestamente maliciosa o dilatoria",
  "Mala fe en el desarrollo del arbitraje",
  "Incumplimiento de mandatos del Consejo",
  "Otra conducta contraria al Código de Ética",
];

const RELACIONES = [
  "Parte del procedimiento",
  "Abogado o representante",
  "Árbitro o adjudicador",
  "Personal de la Corte",
  "Proveedor o contratista",
  "Tercero o ciudadano",
];

const ROLES_DENUNCIADO = [
  "Árbitro",
  "Adjudicador",
  "Abogado o asesor",
  "Secretario arbitral",
  "Personal de la Corte",
  "Otro",
];

const SANCIONES = [
  { sancion: "Exhortación", alcance: "Llamado de atención. No se publica." },
  { sancion: "Amonestación escrita", alcance: "Constancia en el registro. No se publica." },
  { sancion: "Suspensión", alcance: "Temporal o definitiva para ser elegido árbitro o adjudicador." },
  { sancion: "Separación del Registro", alcance: "Definitiva." },
  { sancion: "Multa", alcance: "Hasta 50 UIT." },
  { sancion: "Pérdida o devolución de honorarios", alcance: "Total o parcial." },
];

const GARANTIAS = [
  {
    icon: LockOutlinedIcon,
    title: "Confidencialidad",
    text: "La identidad del denunciante y el contenido de la denuncia se conocen solo por el órgano competente.",
  },
  {
    icon: ShieldOutlinedIcon,
    title: "Protección",
    text: "No se admiten represalias contra quien denuncia de buena fe. Cada caso se evalúa con independencia.",
  },
  {
    icon: VisibilityOutlinedIcon,
    title: "Seguimiento",
    text: "Recibirás un código para dar seguimiento al estado de la evaluación, sin exponer los detalles del caso.",
  },
];

const ALCANCE = [
  "Incumplimiento de los requisitos y procedimientos de la Ley de Arbitraje y del Reglamento.",
  "Conductas contrarias a las Reglas de Ética.",
  "Faltas al deber de confidencialidad.",
  "Inasistencia reiterada a las actuaciones arbitrales sin causa justificada.",
  "Demoras injustificadas en la conducción del arbitraje.",
  "Recusaciones manifiestamente maliciosas o dilatorias.",
  "Mala fe en el desarrollo del arbitraje.",
  "Incumplimiento de los mandatos impuestos por el Consejo.",
];

const TRATAMIENTO = [
  {
    title: "Presentación",
    text: "La denuncia se envía a la Secretaría General con los hechos y las pruebas. La identidad del denunciante se mantiene reservada.",
  },
  {
    title: "Traslado y descargos",
    text: "La denuncia se pone en conocimiento del denunciado, que tiene cinco días hábiles para formular sus descargos y presentar documentación.",
  },
  {
    title: "Evaluación",
    text: "El Consejo evalúa los argumentos y documentos de ambas partes. Puede disponer una audiencia con presencia del denunciante y del denunciado.",
  },
  {
    title: "Decisión motivada",
    text: "El Consejo resuelve de manera motivada y definitiva sobre la sanción aplicable. Las sanciones se registran en el Libro de Sanciones.",
  },
];

export default function DenunciasPage() {
  const [sent, setSent] = useState(false);
  const [codigo, setCodigo] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<DenunciaValues>({
    resolver: zodResolver(denunciaSchema),
    defaultValues: {
      tipo: "",
      relacion: "",
      denunciado: "",
      rolDenunciado: "",
      norma: "",
      anonima: false,
      nombre: "",
      email: "",
      telefono: "",
      descripcion: "",
      referencias: "",
      acepta: false,
    },
  });

  const anonima = useWatch({ control, name: "anonima" });

  const onSubmit = async () => {
    await new Promise((resolve) => window.setTimeout(resolve, 950));
    setCodigo("DN-2026-0042");
    setSent(true);
    reset();
  };

  return (
    <>
      <PageMeta
        title="Denuncias y ética"
        description="Canal para denunciar incumplimientos del Código de Ética por parte de árbitros, adjudicadores, abogados y asesores de la Corte Superior de Arbitraje de Huancayo."
      />

      <PageHero
        kicker="Integridad institucional"
        title="Canal de denuncias de ética"
        subtitle="Cualquier persona natural o jurídica que tenga conocimiento de una violación al Código de Ética puede denunciarla ante el Consejo Superior de Arbitraje, a través de la Secretaría General. La denuncia se tramita de forma reservada."
        crumbs={[{ label: "Canal de denuncias" }]}
        image="/images/ARBITRAJE_IMG_02-03.jpg"
      />

      <Box
        component="section"
        sx={{ py: { xs: 6, md: 8 }, backgroundColor: brand.white }}
      >
        <Container>
          <Stack
            component={motion.div}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 2, md: 3 }}
          >
            {GARANTIAS.map((garantia) => {
              const Icon = garantia.icon;

              return (
                <Stack
                  key={garantia.title}
                  component={motion.div}
                  variants={fadeUp}
                  direction="row"
                  spacing={1.8}
                  sx={{
                    flex: 1,
                    alignItems: "flex-start",
                    p: 2.6,
                    backgroundColor: brand.paper,
                    border: `1px solid ${brand.line}`,
                    borderLeft: `3px solid ${brand.gold}`,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 44,
                      height: 44,
                      flexShrink: 0,
                      borderRadius: "50%",
                      backgroundColor: "rgba(45,73,121,0.08)",
                      color: brand.primary,
                    }}
                  >
                    <Icon sx={{ fontSize: "1.3rem" }} />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        color: brand.primaryDark,
                        fontWeight: 750,
                        fontSize: "0.95rem",
                        mb: 0.5,
                      }}
                    >
                      {garantia.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: brand.muted,
                        fontSize: "0.8rem",
                        lineHeight: 1.65,
                      }}
                    >
                      {garantia.text}
                    </Typography>
                  </Box>
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Box>

      <Box
        component="section"
        sx={{
          py: { xs: 7, md: 10 },
          backgroundColor: brand.paper,
          borderTop: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <Grid
            container
            spacing={{ xs: 5, md: 7 }}
            sx={{ alignItems: "flex-start" }}
          >
            <Grid size={{ xs: 12, md: 7 }}>
              {sent ? (
                <FormSuccess
                  title="Denuncia registrada"
                  text="Hemos recibido tu comunicación de manera referencial. Guarda el código de seguimiento: en esta versión del sitio el envío es simulado y no se ha remitido información a ningún servidor."
                  code={codigo}
                  onReset={() => setSent(false)}
                  resetLabel="Registrar otra denuncia"
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
                    Formulario reservado
                  </Typography>

                  <Typography
                    variant="h3"
                    sx={{
                      color: brand.primaryDark,
                      fontSize: { xs: "1.6rem", md: "2rem" },
                    }}
                  >
                    Reporta una conducta indebida
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1.2,
                      mb: 3,
                      color: brand.muted,
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                    }}
                  >
                    Describe los hechos con la mayor precisión posible: fechas,
                    personas involucradas y documentos o mensajes que puedas
                    referenciar. Evita incluir datos sensibles que no sean
                    necesarios para la evaluación.
                  </Typography>

                  <Alert
                    severity="warning"
                    icon={<WarningAmberOutlinedIcon />}
                    sx={{ mb: 3, fontSize: "0.8rem", lineHeight: 1.6 }}
                  >
                    Este canal no atiende consultas sobre el estado de un
                    expediente ni reemplaza los remedios procesales. Para esos
                    casos usa la Secretaría General o el canal de contacto.
                  </Alert>

                  <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                  >
                    <Grid container spacing={2.2}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          label="Tipo de conducta *"
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

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          select
                          label="Vinculación con la Corte *"
                          fullWidth
                          {...register("relacion")}
                          error={!!errors.relacion}
                          helperText={errors.relacion?.message}
                        >
                          <MenuItem value="" disabled sx={{ display: "none" }} />
                          {RELACIONES.map((relacion) => (
                            <MenuItem key={relacion} value={relacion}>
                              {relacion}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 8 }}>
                        <TextField
                          label="Persona denunciada *"
                          fullWidth
                          {...register("denunciado")}
                          error={!!errors.denunciado}
                          helperText={
                            errors.denunciado?.message ??
                            "Nombre de la persona o identificación suficiente para individualizarla."
                          }
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 4 }}>
                        <TextField
                          select
                          label="Rol del denunciado *"
                          fullWidth
                          {...register("rolDenunciado")}
                          error={!!errors.rolDenunciado}
                          helperText={errors.rolDenunciado?.message}
                        >
                          <MenuItem value="" disabled sx={{ display: "none" }} />
                          {ROLES_DENUNCIADO.map((rol) => (
                            <MenuItem key={rol} value={rol}>
                              {rol}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Norma o deber infringido"
                          fullWidth
                          {...register("norma")}
                          error={!!errors.norma}
                          helperText={
                            errors.norma?.message ??
                            "Si no conoces la norma exacta, describe el deber que consideras incumplido."
                          }
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <FormControlLabel
                          control={<Checkbox {...register("anonima")} />}
                          label={
                            <Typography
                              sx={{
                                color: brand.ink,
                                fontSize: "0.86rem",
                                fontWeight: 600,
                              }}
                            >
                              Deseo presentar la denuncia de forma anónima
                            </Typography>
                          }
                          sx={{ alignItems: "flex-start", m: 0 }}
                        />

                        <Typography
                          sx={{
                            color: brand.muted,
                            fontSize: "0.76rem",
                            lineHeight: 1.6,
                            ml: 4,
                          }}
                        >
                          Si no marcas esta opción, tus datos de contacto solo se
                          usarán para comunicarte el resultado de la evaluación.
                        </Typography>
                      </Grid>

                      {!anonima && (
                        <>
                          <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                              label="Nombre o seudónimo *"
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
                              helperText="Opcional. Se usa solo si autorizas contacto telefónico."
                            />
                          </Grid>
                        </>
                      )}

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Descripción de los hechos *"
                          fullWidth
                          multiline
                          minRows={6}
                          {...register("descripcion")}
                          error={!!errors.descripcion}
                          helperText={
                            errors.descripcion?.message ??
                            "Incluye fechas aproximadas, número de expediente (si corresponde) y cómo tomaste conocimiento de los hechos."
                          }
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          label="Referencias o enlaces"
                          fullWidth
                          multiline
                          minRows={2}
                          {...register("referencias")}
                          error={!!errors.referencias}
                          helperText={
                            errors.referencias?.message ??
                            "Puedes mencionar documentos, correos o enlaces. No adjuntes archivos en esta versión."
                          }
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <FormControlLabel
                          control={<Checkbox {...register("acepta")} />}
                          label={
                            <Typography
                              sx={{
                                color: brand.muted,
                                fontSize: "0.83rem",
                                lineHeight: 1.6,
                              }}
                            >
                              Declaro que la información proporcionada es veraz
                              y autorizo su tratamiento para la evaluación de la
                              denuncia.
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
                            endIcon={
                              <SendOutlinedIcon sx={{ fontSize: "1rem" }} />
                            }
                          >
                            {isSubmitting
                              ? "Registrando..."
                              : "Registrar denuncia"}
                          </Button>

                          <Typography
                            sx={{ color: brand.muted, fontSize: "0.76rem" }}
                          >
                            El registro es simulado en esta versión del sitio.
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
                    Qué puedes reportar
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{ color: brand.white, fontSize: "1.3rem", mb: 2 }}
                  >
                    Conductas dentro de nuestro alcance
                  </Typography>

                  <Stack spacing={1.4}>
                    {ALCANCE.map((item) => (
                      <Stack
                        key={item}
                        direction="row"
                        spacing={1.2}
                        sx={{ alignItems: "flex-start" }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            backgroundColor: brand.goldBright,
                            mt: "7px",
                            flexShrink: 0,
                          }}
                        />

                        <Typography
                          sx={{
                            color: "rgba(255,255,255,0.78)",
                            fontSize: "0.82rem",
                            lineHeight: 1.65,
                          }}
                        >
                          {item}
                        </Typography>
                      </Stack>
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
                  <Typography
                    sx={{
                      color: brand.primaryDark,
                      fontWeight: 750,
                      fontSize: "0.95rem",
                      mb: 2,
                    }}
                  >
                    Cómo tratamos tu denuncia
                  </Typography>

                  <Stack spacing={2}>
                    {TRATAMIENTO.map((paso, index) => (
                      <Stack
                        key={paso.title}
                        direction="row"
                        spacing={1.6}
                        sx={{ alignItems: "flex-start" }}
                      >
                        <Box
                          sx={{
                            flexShrink: 0,
                            width: 30,
                            height: 30,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            border: `1px solid ${brand.goldSoft}`,
                            color: brand.goldDeep,
                            fontSize: "0.72rem",
                            fontWeight: 750,
                          }}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </Box>

                        <Box>
                          <Typography
                            sx={{
                              color: brand.primaryDark,
                              fontWeight: 700,
                              fontSize: "0.84rem",
                              mb: 0.3,
                            }}
                          >
                            {paso.title}
                          </Typography>

                          <Typography
                            sx={{
                              color: brand.muted,
                              fontSize: "0.78rem",
                              lineHeight: 1.6,
                            }}
                          >
                            {paso.text}
                          </Typography>
                        </Box>
                      </Stack>
                    ))}
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
                    Denuncias urgentes
                  </Typography>

                  <Typography
                    sx={{
                      color: brand.muted,
                      fontSize: "0.8rem",
                      lineHeight: 1.65,
                    }}
                  >
                    Si existe un riesgo inmediato para personas o bienes,
                    comunícate también con las autoridades competentes. Este
                    formulario no sustituye una denuncia penal o administrativa.
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        component="section"
        id="sancionados"
        sx={{
          py: { xs: 8, md: 10 },
          backgroundColor: brand.paper,
          borderTop: `1px solid ${brand.line}`,
        }}
      >
        <Container>
          <Grid container spacing={{ xs: 4, md: 6 }} sx={{ alignItems: "flex-start" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeading
                kicker="Régimen sancionador"
                title="Sanciones aplicables"
                subtitle="El Consejo resuelve de manera motivada y definitiva. Las sanciones se registran en el Libro de Sanciones a cargo de la Secretaría General."
                sx={{ mb: 0 }}
              />

              <Stack
                direction="row"
                spacing={1.2}
                sx={{ mt: 2.5, alignItems: "flex-start" }}
              >
                <InfoOutlinedIcon sx={{ color: brand.primary, fontSize: "1.05rem", mt: "2px" }} />
                <Typography sx={{ color: brand.muted, fontSize: "0.8rem", lineHeight: 1.65 }}>
                  Se publican las sanciones salvo los casos de exhortación y
                  amonestación escrita. La publicación incluye el motivo y la
                  vigencia.
                </Typography>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <TableContainer sx={{ border: `1px solid ${brand.line}`, backgroundColor: brand.white }}>
                <Table aria-label="Sanciones aplicables" sx={{ minWidth: 480 }}>
                  <TableHead>
                    <TableRow sx={{ backgroundColor: brand.primaryDark }}>
                      <TableCell sx={{ color: brand.white, fontWeight: 700, fontSize: "0.78rem" }}>
                        Sanción
                      </TableCell>
                      <TableCell sx={{ color: brand.white, fontWeight: 700, fontSize: "0.78rem" }}>
                        Alcance
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {SANCIONES.map((row) => (
                      <TableRow
                        key={row.sancion}
                        sx={{ "&:nth-of-type(odd)": { backgroundColor: "rgba(234,242,251,0.35)" } }}
                      >
                        <TableCell sx={{ fontSize: "0.82rem", py: 1.1, fontWeight: 700, color: brand.primaryDark }}>
                          {row.sancion}
                        </TableCell>
                        <TableCell sx={{ fontSize: "0.82rem", py: 1.1, color: brand.muted }}>
                          {row.alcance}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>

          <Box
            sx={{
              mt: { xs: 5, md: 6 },
              p: { xs: 3, md: 4 },
              textAlign: "center",
              backgroundColor: brand.white,
              border: `1px solid ${brand.line}`,
              borderTop: `3px solid ${brand.gold}`,
            }}
          >
            <Typography
              sx={{
                color: brand.primaryDark,
                fontWeight: 750,
                fontSize: "0.95rem",
              }}
            >
              Relación de sancionados
            </Typography>
            <Typography sx={{ mt: 1, color: brand.muted, fontSize: "0.86rem", lineHeight: 1.7 }}>
              No hay sanciones publicadas a la fecha. Cuando existan, se
              publicarán el nombre, el rol, el motivo, la sanción y su vigencia,
              salvo las excepciones de ley.
            </Typography>
          </Box>
        </Container>
      </Box>

      <CtaBand
        title="¿Necesitas orientación sobre un procedimiento?"
        subtitle="La Secretaría General atiende consultas sobre expedientes, requisitos y trámites. Para reportar conductas indebidas usa el formulario de esta página."
        showPrimary={false}
        secondaryLabel="Ir a Contacto"
        secondaryTo="/contacto"
      />
    </>
  );
}
