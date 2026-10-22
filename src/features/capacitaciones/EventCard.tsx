import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brand, fonts } from "../../theme/brand";
import { formatFecha, type Evento } from "../../data/eventos";

const fechaPartes = (iso: string) => {
  const date = new Date(`${iso}T12:00:00`);
  return {
    dia: date.toLocaleDateString("es-PE", { day: "2-digit" }),
    mes: date
      .toLocaleDateString("es-PE", { month: "short" })
      .replace(".", "")
      .toUpperCase(),
    anio: date.toLocaleDateString("es-PE", { year: "numeric" }),
  };
};

export default function EventCard({ evento }: { evento: Evento }) {
  const [open, setOpen] = useState(false);
  const fecha = fechaPartes(evento.fecha);
  const esProximo = evento.estado === "proximo";

  return (
    <>
      <Box
        component="article"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "82px minmax(0, 1fr) 170px" },
          gap: { xs: 2, sm: 3 },
          py: { xs: 3, md: 3.4 },
          borderTop: `1px solid ${brand.line}`,
          transition: "border-color 0.18s ease",
          "&:hover": { borderTopColor: brand.gold },
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: fonts.display,
              color: brand.primaryDeep,
              fontSize: "2rem",
              lineHeight: 1,
            }}
          >
            {fecha.dia}
          </Typography>
          <Typography
            sx={{
              mt: 0.4,
              color: brand.goldDeep,
              fontSize: "0.64rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
            }}
          >
            {fecha.mes} {fecha.anio}
          </Typography>
        </Box>

        <Box>
          <Stack direction="row" spacing={1.2} sx={{ alignItems: "center", flexWrap: "wrap" }}>
            <Typography
              sx={{
                color: esProximo ? brand.goldDeep : brand.muted,
                fontSize: "0.62rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {esProximo ? "Próxima actividad" : "Actividad realizada"}
            </Typography>
            <Typography sx={{ color: brand.line, fontSize: "0.7rem" }}>·</Typography>
            <Typography
              sx={{
                color: brand.muted,
                fontSize: "0.64rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {evento.modalidad}
            </Typography>
          </Stack>

          <Typography
            variant="h3"
            sx={{
              mt: 1,
              color: brand.primaryDeep,
              fontSize: { xs: "1.2rem", md: "1.35rem" },
              lineHeight: 1.35,
            }}
          >
            {evento.titulo}
          </Typography>

          <Typography
            sx={{
              mt: 0.8,
              color: brand.muted,
              fontSize: "0.86rem",
              lineHeight: 1.65,
              maxWidth: 620,
            }}
          >
            {evento.descripcion}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 0.6, sm: 2 }}
            sx={{ mt: 1.4, flexWrap: "wrap" }}
          >
            <Stack direction="row" spacing={0.7} sx={{ alignItems: "center" }}>
              <CalendarMonthOutlinedIcon sx={{ fontSize: 15, color: brand.goldDeep }} />
              <Typography sx={{ fontSize: "0.76rem", color: brand.muted }}>
                {formatFecha(evento.fecha)}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.7} sx={{ alignItems: "center" }}>
              <ScheduleOutlinedIcon sx={{ fontSize: 15, color: brand.goldDeep }} />
              <Typography sx={{ fontSize: "0.76rem", color: brand.muted }}>
                {evento.hora}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={0.7} sx={{ alignItems: "center" }}>
              <PlaceOutlinedIcon sx={{ fontSize: 15, color: brand.goldDeep }} />
              <Typography sx={{ fontSize: "0.76rem", color: brand.muted }}>
                {evento.lugar}
              </Typography>
            </Stack>
          </Stack>

          <Button
            onClick={() => setOpen(true)}
            variant="text"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 15 }} />}
            sx={{ mt: 1.2, px: 0, fontSize: "0.78rem" }}
          >
            Ver programa
          </Button>
        </Box>

        <Box
          component="img"
          src={evento.imagen}
          alt={evento.titulo}
          loading="lazy"
          sx={{
            display: "block",
            width: "100%",
            aspectRatio: { xs: "16 / 7", sm: "4 / 3" },
            objectFit: "cover",
            alignSelf: "start",
          }}
        />
      </Box>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 0,
              borderTop: `3px solid ${brand.gold}`,
              backgroundColor: brand.white,
            },
          },
        }}
      >
        <DialogContent sx={{ px: { xs: 2.5, sm: 4 }, pt: { xs: 3, sm: 4 } }}>
          <Stack
            direction="row"
            spacing={2}
            sx={{ alignItems: "flex-start", justifyContent: "space-between", mb: 1.5 }}
          >
            <Stack direction="row" spacing={1.2} sx={{ alignItems: "center", flexWrap: "wrap" }}>
              <Typography
                sx={{
                  color: brand.goldDeep,
                  fontSize: "0.62rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {esProximo ? "Próxima actividad" : "Actividad realizada"}
              </Typography>
              <Typography sx={{ color: brand.line, fontSize: "0.7rem" }}>·</Typography>
              <Typography
                sx={{
                  color: brand.muted,
                  fontSize: "0.64rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {evento.modalidad}
              </Typography>
            </Stack>

            <IconButton aria-label="Cerrar" onClick={() => setOpen(false)} sx={{ mt: -0.8, mr: -0.8 }}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Stack>

          <Typography variant="h3" sx={{ color: brand.primaryDeep, fontSize: "1.6rem", mb: 1.8 }}>
            {evento.titulo}
          </Typography>

          <Typography sx={{ color: brand.muted, fontSize: "0.92rem", lineHeight: 1.75, mb: 2.5 }}>
            {evento.descripcion}
          </Typography>

          <Stack sx={{ borderTop: `1px solid ${brand.line}` }}>
            <Stack
              direction="row"
              spacing={1.2}
              sx={{ py: 1.2, alignItems: "center", borderBottom: `1px solid ${brand.line}` }}
            >
              <CalendarMonthOutlinedIcon sx={{ color: brand.goldDeep, fontSize: 18 }} />
              <Typography sx={{ fontSize: "0.86rem", color: brand.ink }}>
                {formatFecha(evento.fecha)}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1.2}
              sx={{ py: 1.2, alignItems: "center", borderBottom: `1px solid ${brand.line}` }}
            >
              <ScheduleOutlinedIcon sx={{ color: brand.goldDeep, fontSize: 18 }} />
              <Typography sx={{ fontSize: "0.86rem", color: brand.ink }}>{evento.hora}</Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1.2}
              sx={{ py: 1.2, alignItems: "center", borderBottom: `1px solid ${brand.line}` }}
            >
              <PlaceOutlinedIcon sx={{ color: brand.goldDeep, fontSize: 18 }} />
              <Typography sx={{ fontSize: "0.86rem", color: brand.ink }}>{evento.lugar}</Typography>
            </Stack>
          </Stack>

          <Typography sx={{ mt: 2.2, color: brand.muted, fontSize: "0.8rem", lineHeight: 1.65 }}>
            La inscripción es de carácter referencial en esta versión del sitio.
            Para confirmar tu participación, escribe a la Corte o llama a la
            Secretaría General.
          </Typography>
        </DialogContent>

        <DialogActions sx={{ px: { xs: 2.5, sm: 4 }, pb: 3, pt: 1, gap: 1 }}>
          <Button onClick={() => setOpen(false)} variant="text" color="primary">
            Cerrar
          </Button>

          <Button
            component={RouterLink}
            to="/contacto"
            variant="contained"
            onClick={() => setOpen(false)}
            endIcon={<ArrowForwardIcon sx={{ fontSize: 17 }} />}
          >
            Solicitar información
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
