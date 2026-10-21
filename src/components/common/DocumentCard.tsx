import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { motion } from "framer-motion";
import { brand } from "../../theme/brand";
import { fadeUp } from "../../utils/animations";
import type { Documento } from "../../data/documentos";

const iconByCategoria = {
  institucional: <DescriptionOutlinedIcon />,
  arbitraje: <GavelOutlinedIcon />,
  jprd: <InsertDriveFileOutlinedIcon />,
  certificacion: <VerifiedOutlinedIcon />,
};

const formatFecha = (iso: string) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("es-PE", {
    month: "short",
    year: "numeric",
  });

export default function DocumentCard({
  documento,
}: {
  documento: Documento;
}) {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (documento.url === "#") {
      event.preventDefault();
    }
  };

  return (
    <Box
      component={motion.article}
      variants={fadeUp}
      sx={{
        position: "relative",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: brand.white,
        border: `1px solid ${brand.line}`,
        borderLeft: `3px solid ${brand.line}`,
        p: { xs: 2.5, md: 3 },
        transition:
          "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        "&:hover": {
          transform: "translateY(-3px)",
          borderLeftColor: brand.gold,
          boxShadow: "0 16px 36px rgba(18,35,61,0.09)",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{ alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}
      >
        <Box
          sx={{
            width: 42,
            height: 42,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: brand.skySoft,
            color: brand.primary,
            flexShrink: 0,
          }}
        >
          {iconByCategoria[documento.categoria]}
        </Box>

        <Chip
          label={documento.tipo}
          size="small"
          sx={{
            backgroundColor: "rgba(45,73,121,0.07)",
            color: brand.primary,
          }}
        />
      </Stack>

      <Typography
        variant="h4"
        sx={{
          mt: 2.2,
          fontSize: "1.06rem",
          lineHeight: 1.35,
          color: brand.primaryDark,
        }}
      >
        {documento.titulo}
      </Typography>

      <Typography
        sx={{
          mt: 1,
          mb: 2.5,
          color: brand.muted,
          fontSize: "0.88rem",
          lineHeight: 1.65,
          flex: 1,
        }}
      >
        {documento.descripcion}
      </Typography>

      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between", gap: 1 }}
      >
        <Stack direction="row" spacing={1.4} sx={{ alignItems: "center" }}>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <CalendarMonthOutlinedIcon
              sx={{ fontSize: "0.95rem", color: brand.muted }}
            />
            <Typography sx={{ fontSize: "0.74rem", color: brand.muted }}>
              {formatFecha(documento.fecha)}
            </Typography>
          </Stack>

          <Typography sx={{ fontSize: "0.74rem", color: brand.muted }}>
            {documento.peso}
          </Typography>
        </Stack>

        <Button
          component="a"
          href={documento.url}
          onClick={handleClick}
          size="small"
          variant="text"
          endIcon={<DownloadOutlinedIcon sx={{ fontSize: "1rem" }} />}
          aria-label={`Descargar ${documento.titulo}`}
          sx={{
            minWidth: 0,
            px: 0.5,
            py: 0.4,
            color: brand.primary,
            fontSize: "0.78rem",
            "&:hover": {
              backgroundColor: "transparent",
              color: brand.goldDeep,
              transform: "none",
            },
          }}
        >
          Descargar
        </Button>
      </Stack>
    </Box>
  );
}
