import { useState } from "react";
import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { brand, fonts } from "../../theme/brand";
import { fadeUp } from "../../utils/animations";
import { formatFecha, type Evento } from "../../data/eventos";

const fechaBadge = (iso: string) => {
  const date = new Date(`${iso}T12:00:00`);
  return {
    dia: date.toLocaleDateString("es-PE", { day: "2-digit" }),
    mes: date
      .toLocaleDateString("es-PE", { month: "short" })
      .replace(".", "")
      .toUpperCase(),
  };
};

export default function EventCard({ evento }: { evento: Evento }) {
  const [open, setOpen] = useState(false);
  const badge = fechaBadge(evento.fecha);

  return (
    <>
      <Stack
        component={motion.article}
        variants={fadeUp}
        sx={{
          height: "100%",
          backgroundColor: brand.white,
          border: `1px solid ${brand.line}`,
          overflow: "hidden",
          transition:
            "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
          "&:hover": {
            transform: "translateY(-4px)",
            borderColor: "rgba(186,153,7,0.45)",
            boxShadow: "0 18px 40px rgba(18,35,61,0.11)",
            "& .event-image": { transform: "scale(1.04)" },
          },
        }}
      >
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <Box
            className="event-image"
            component="img"
            src={evento.imagen}
            alt={evento.titulo}
            loading="lazy"
            sx={{
              display: "block",
              width: "100%",
              height: 190,
              objectFit: "cover",
              transition: "transform 0.6s ease",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(18,35,61,0.55), transparent 55%)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              left: 16,
              bottom: 16,
              minWidth: 58,
              py: 0.7,
              backgroundColor: brand.white,
              textAlign: "center",
              borderBottom: `3px solid ${brand.gold}`,
              boxShadow: "0 8px 18px rgba(18,35,61,0.22)",
            }}
          >
            <Typography
              sx={{
                fontFamily: fonts.display,
                fontSize: "1.4rem",
                fontWeight: 600,
                color: brand.primaryDark,
                lineHeight: 1,
              }}
            >
              {badge.dia}
            </Typography>
            <Typography
              sx={{
                fontSize: "0.6rem",
                fontWeight: 750,
                letterSpacing: "0.1em",
                color: brand.goldDeep,
                mt: 0.3,
              }}
            >
              {badge.mes}
            </Typography>
          </Box>

          <Chip
            label={evento.modalidad}
            size="small"
            sx={{
              position: "absolute",
              top: 14,
              right: 14,
              backgroundColor:
                evento.estado === "proximo"
                  ? "rgba(255,255,255,0.94)"
                  : "rgba(18,35,61,0.82)",
              color:
                evento.estado === "proximo" ? brand.primary : brand.white,
              fontWeight: 700,
            }}
          />
        </Box>

        <Stack sx={{ p: { xs: 2.4, md: 3 }, flex: 1 }}>
          <Typography
            sx={{
              color: brand.goldDeep,
              fontSize: "0.66rem",
              fontWeight: 750,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              mb: 1.1,
            }}
          >
            {evento.estado === "proximo" ? "Próxima actividad" : "Actividad realizada"}
          </Typography>

          <Typography
            variant="h4"
            sx={{
              color: brand.primaryDark,
              fontSize: "1.06rem",
              lineHeight: 1.4,
              mb: 1.2,
            }}
          >
            {evento.titulo}
          </Typography>

          <Typography
            sx={{
              color: brand.muted,
              fontSize: "0.86rem",
              lineHeight: 1.65,
              mb: 2,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              flex: 1,
            }}
          >
            {evento.descripcion}
          </Typography>

          <Stack spacing={0.9} sx={{ mb: 2.2 }}>
            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <CalendarMonthOutlinedIcon
                sx={{ fontSize: "1rem", color: brand.goldDeep }}
              />
              <Typography sx={{ fontSize: "0.78rem", color: brand.muted }}>
                {formatFecha(evento.fecha)}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <ScheduleOutlinedIcon
                sx={{ fontSize: "1rem", color: brand.goldDeep }}
              />
              <Typography sx={{ fontSize: "0.78rem", color: brand.muted }}>
                {evento.hora}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              sx={{ alignItems: "flex-start" }}
            >
              <PlaceOutlinedIcon
                sx={{ fontSize: "1rem", color: brand.goldDeep, mt: "2px" }}
              />
              <Typography
                sx={{ fontSize: "0.78rem", color: brand.muted, lineHeight: 1.5 }}
              >
                {evento.lugar}
              </Typography>
            </Stack>
          </Stack>

          <Button
            onClick={() => setOpen(true)}
            variant="outlined"
            endIcon={<ArrowForwardIcon sx={{ fontSize: "0.95rem" }} />}
            sx={{
              alignSelf: "flex-start",
              fontSize: "0.78rem",
              py: 0.7,
              px: 1.6,
            }}
          >
            Ver programa
          </Button>
        </Stack>
      </Stack>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
        slotProps={{
          paper: {
            sx: {
              borderRadius: 0,
              borderTop: `4px solid ${brand.gold}`,
              backgroundColor: brand.white,
            },
          },
        }}
      >
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src={evento.imagen}
            alt={evento.titulo}
            sx={{ width: "100%", height: 210, objectFit: "cover" }}
          />

          <IconButton
            aria-label="Cerrar"
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "rgba(255,255,255,0.92)",
              "&:hover": { backgroundColor: brand.white },
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <DialogContent sx={{ px: { xs: 2.5, sm: 4 }, pt: 3.5 }}>
          <Stack direction="row" spacing={1} sx={{ mb: 1.5, flexWrap: "wrap", gap: 1 }}>
            <Chip
              label={evento.modalidad}
              size="small"
              sx={{ backgroundColor: brand.skySoft, color: brand.primary }}
            />
            {evento.cupos && (
              <Chip
                label={evento.cupos}
                size="small"
                icon={<GroupsOutlinedIcon />}
                sx={{
                  backgroundColor: "rgba(186,153,7,0.12)",
                  color: brand.goldDeep,
                  "& .MuiChip-icon": { color: brand.goldDeep, fontSize: "1rem" },
                }}
              />
            )}
          </Stack>

          <Typography
            variant="h3"
            sx={{ color: brand.primaryDark, fontSize: "1.6rem", mb: 2 }}
          >
            {evento.titulo}
          </Typography>

          <Typography
            sx={{ color: brand.muted, fontSize: "0.95rem", lineHeight: 1.8, mb: 3 }}
          >
            {evento.descripcion}
          </Typography>

          <Stack spacing={1.6}>
            <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
              <CalendarMonthOutlinedIcon sx={{ color: brand.goldDeep }} />
              <Typography sx={{ fontSize: "0.9rem" }}>
                {formatFecha(evento.fecha)}
              </Typography>
            </Stack>

            <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
              <ScheduleOutlinedIcon sx={{ color: brand.goldDeep }} />
              <Typography sx={{ fontSize: "0.9rem" }}>{evento.hora}</Typography>
            </Stack>

            <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
              <PlaceOutlinedIcon sx={{ color: brand.goldDeep }} />
              <Typography sx={{ fontSize: "0.9rem" }}>{evento.lugar}</Typography>
            </Stack>
          </Stack>

          <Typography
            sx={{
              mt: 3,
              p: 2,
              backgroundColor: brand.skySoft,
              borderLeft: `3px solid ${brand.gold}`,
              fontSize: "0.82rem",
              color: brand.primary,
              lineHeight: 1.6,
            }}
          >
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
            endIcon={<ArrowForwardIcon />}
          >
            Solicitar información
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
