import { useState } from "react";
import {
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { brand, fonts } from "../../theme/brand";
import type { Evento } from "../../data/eventos";

type EventEvidenceDialogProps = {
  evento: Evento;
  onClose: () => void;
};

export default function EventEvidenceDialog({
  evento,
  onClose,
}: EventEvidenceDialogProps) {
  const [active, setActive] = useState(0);
  const evidencia = evento.evidencias[active];

  return (
    <Dialog
      open
      onClose={onClose}
      fullWidth
      maxWidth="md"
      aria-labelledby="event-evidence-title"
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
      <DialogTitle
        id="event-evidence-title"
        sx={{
          position: "relative",
          pr: 7,
          color: brand.primaryDeep,
          fontFamily: fonts.display,
          fontSize: { xs: "1.1rem", sm: "1.3rem" },
          fontWeight: 600,
          lineHeight: 1.3,
        }}
      >
        {evento.titulo}

        <IconButton
          aria-label="Cerrar evidencias"
          onClick={onClose}
          sx={{ position: "absolute", right: 8, top: 8 }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ px: { xs: 2, sm: 3 }, pt: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: { xs: 1, sm: 1.5 },
            border: `1px solid ${brand.line}`,
            backgroundColor: brand.paperAlt,
          }}
        >
          <Box
            component="a"
            href={evidencia.src}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Abrir imagen de ${evidencia.label} en una pestaña nueva`}
            sx={{
              display: "block",
              maxWidth: "100%",
              cursor: "zoom-in",
            }}
          >
            <Box
              component="img"
              src={evidencia.src}
              alt={evidencia.alt}
              sx={{
                display: "block",
                width: "auto",
                height: "auto",
                maxWidth: "100%",
                maxHeight: "64vh",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>

        <Typography
          sx={{
            mt: 1,
            color: brand.muted,
            fontSize: "0.75rem",
            lineHeight: 1.5,
          }}
        >
          {evidencia.label}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 2, overflowX: "auto", pb: 1 }}
        >
          {evento.evidencias.map((item, index) => (
            <ButtonBase
              key={item.src}
              onClick={() => setActive(index)}
              aria-label={`Ver ${item.label}`}
              aria-pressed={index === active}
              sx={{
                flexShrink: 0,
                p: 0.5,
                border:
                  index === active
                    ? `2px solid ${brand.gold}`
                    : `1px solid ${brand.line}`,
                backgroundColor: brand.white,
                "&:focus-visible": {
                  outline: `2px solid ${brand.goldDeep}`,
                  outlineOffset: 2,
                },
              }}
            >
              <Box
                component="img"
                src={item.src}
                alt=""
                loading="lazy"
                sx={{
                  display: "block",
                  width: 78,
                  height: 58,
                  objectFit: "cover",
                }}
              />
            </ButtonBase>
          ))}
        </Stack>
      </DialogContent>

      <DialogActions
        sx={{
          px: { xs: 2, sm: 3 },
          pb: 2.5,
          pt: 0,
          gap: 1,
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <Typography sx={{ color: brand.muted, fontSize: "0.72rem" }}>
          {active + 1} / {evento.evidencias.length}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", rowGap: 1 }}>
          <Button
            component="a"
            href={evidencia.src}
            target="_blank"
            rel="noopener noreferrer"
            variant="text"
            size="small"
            endIcon={<OpenInNewOutlinedIcon sx={{ fontSize: 14 }} />}
            sx={{ color: brand.primary, fontWeight: 700 }}
          >
            Abrir imagen
          </Button>

          {evento.pdf && (
            <Button
              component="a"
              href={evento.pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              size="small"
              sx={{ color: brand.primary, fontWeight: 700 }}
            >
              Abrir PDF
            </Button>
          )}

          <Button onClick={onClose} variant="contained" size="small">
            Cerrar
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
}
