import { Box, Button, Stack, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import { brand, fonts } from "../../theme/brand";
import type { Evento } from "../../data/eventos";

type EventCardProps = {
  evento: Evento;
  first?: boolean;
  onOpenEvidence: () => void;
};

export default function EventCard({
  evento,
  first = false,
  onOpenEvidence,
}: EventCardProps) {
  const meta: { label: string; value: string }[] = [
    { label: "Fechas", value: evento.fechaLarga },
    ...(evento.modalidad
      ? [{ label: "Modalidad", value: evento.modalidad }]
      : []),
    ...(evento.lugar ? [{ label: "Lugar", value: evento.lugar }] : []),
    ...(evento.horas ? [{ label: "Horas académicas", value: evento.horas }] : []),
    { label: "Organizan", value: evento.organiza },
  ];

  return (
    <Box
      component="article"
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "minmax(0, 0.86fr) minmax(0, 1.14fr)",
        },
        gap: { xs: 3.5, md: 6 },
        py: { xs: 7, md: 9 },
        borderTop: first
          ? `2px solid ${brand.primaryDeep}`
          : `1px solid ${brand.line}`,
      }}
    >
      <Box>
        <Box
          component="button"
          type="button"
          onClick={onOpenEvidence}
          aria-label={`Ver evidencias de ${evento.titulo}`}
          sx={{
            display: "block",
            width: "100%",
            p: 0,
            border: `1px solid ${brand.line}`,
            backgroundColor: brand.paperAlt,
            cursor: "pointer",
            transition: "border-color 0.18s ease",
            "&:hover": { borderColor: brand.gold },
            "&:focus-visible": {
              outline: `2px solid ${brand.goldDeep}`,
              outlineOffset: 3,
            },
          }}
        >
          <Box
            component="img"
            src={evento.cover}
            alt={evento.coverAlt}
            loading="lazy"
            decoding="async"
            sx={{
              display: "block",
              width: "100%",
              aspectRatio: "4 / 5",
              objectFit: evento.coverFit ?? "contain",
              objectPosition: evento.coverPosition ?? "center",
              p: { xs: 1.5, md: 2 },
            }}
          />
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0.6, sm: 1.5 }}
          sx={{
            mt: 1.2,
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            sx={{
              color: brand.muted,
              fontSize: "0.75rem",
              lineHeight: 1.5,
            }}
          >
            {evento.coverLabel}
          </Typography>

          <Button
            onClick={onOpenEvidence}
            variant="text"
            size="small"
            sx={{
              minWidth: 0,
              p: 0,
              color: brand.primary,
              fontSize: "0.75rem",
              fontWeight: 700,
              whiteSpace: "nowrap",
            }}
          >
            Ver evidencias
          </Button>
        </Stack>
      </Box>

      <Box>
        <Typography
          sx={{
            color: brand.goldInk,
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {evento.fechaLabel}
        </Typography>

        <Typography
          component="h2"
          sx={{
            mt: 1,
            color: brand.primaryDeep,
            fontFamily: fonts.display,
            fontSize: { xs: "1.7rem", md: "2.05rem" },
            fontWeight: 600,
            lineHeight: 1.18,
            textWrap: "balance",
          }}
        >
          {evento.titulo}
        </Typography>

        <Typography
          sx={{
            mt: 1.5,
            maxWidth: 640,
            color: brand.muted,
            fontSize: "0.94rem",
            lineHeight: 1.75,
            textWrap: "pretty",
          }}
        >
          {evento.descripcion}
        </Typography>

        <Box
          sx={{
            mt: 3,
            pt: 1.5,
            borderTop: `1px solid ${brand.line}`,
          }}
        >
          {meta.map((row) => (
            <Box
              key={row.label}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "126px minmax(0, 1fr)",
                },
                gap: { xs: 0.2, sm: 1.2 },
                py: 0.65,
              }}
            >
              <Typography
                sx={{
                  color: brand.muted,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.03em",
                }}
              >
                {row.label}
              </Typography>
              <Typography
                sx={{
                  color: brand.ink,
                  fontSize: "0.84rem",
                  lineHeight: 1.55,
                }}
              >
                {row.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={1.5}
          sx={{
            mt: 3,
            alignItems: { xs: "stretch", sm: "center" },
          }}
        >
          <Button
            onClick={onOpenEvidence}
            variant="contained"
            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
            sx={{ width: { xs: "100%", sm: "auto" } }}
          >
            Ver programa y evidencias
          </Button>

          {evento.pdf && (
            <Button
              component="a"
              href={evento.pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              variant="text"
              endIcon={<OpenInNewOutlinedIcon sx={{ fontSize: 15 }} />}
              sx={{
                minWidth: 0,
                px: { xs: 0, sm: 1 },
                color: brand.primary,
                fontSize: "0.78rem",
                fontWeight: 700,
              }}
            >
              {evento.pdf.label}
            </Button>
          )}
        </Stack>
      </Box>
    </Box>
  );
}
