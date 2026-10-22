import { Box, Button, Stack, Typography } from "@mui/material";
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
  institucional: <DescriptionOutlinedIcon sx={{ fontSize: 20 }} />,
  arbitraje: <GavelOutlinedIcon sx={{ fontSize: 20 }} />,
  jprd: <InsertDriveFileOutlinedIcon sx={{ fontSize: 20 }} />,
  certificacion: <VerifiedOutlinedIcon sx={{ fontSize: 20 }} />,
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
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderTop: `1px solid ${brand.lineStrong}`,
        pt: 2,
        pb: 1,
        transition: "border-color 0.18s ease",
        "&:hover": {
          borderTopColor: brand.gold,
        },
      }}
    >
      <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
        <Box sx={{ color: brand.goldDeep, display: "flex" }}>
          {iconByCategoria[documento.categoria]}
        </Box>
        <Typography
          sx={{
            color: brand.muted,
            fontSize: "0.64rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {documento.tipo}
        </Typography>
      </Stack>

      <Typography
        variant="h4"
        sx={{
          mt: 1.4,
          fontSize: "1.08rem",
          lineHeight: 1.3,
          color: brand.primaryDeep,
        }}
      >
        {documento.titulo}
      </Typography>

      <Typography
        sx={{
          mt: 0.8,
          mb: 2,
          color: brand.muted,
          fontSize: "0.86rem",
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {documento.descripcion}
      </Typography>

      <Stack
        direction="row"
        sx={{ alignItems: "center", justifyContent: "space-between", gap: 1.5 }}
      >
        <Stack direction="row" spacing={1.4} sx={{ alignItems: "center", flexWrap: "wrap" }}>
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <CalendarMonthOutlinedIcon sx={{ fontSize: 14, color: brand.muted }} />
            <Typography sx={{ fontSize: "0.72rem", color: brand.muted }}>
              {formatFecha(documento.fecha)}
            </Typography>
          </Stack>

          <Typography sx={{ fontSize: "0.72rem", color: brand.muted }}>
            {documento.peso}
          </Typography>

          {documento.estado && (
            <Typography
              sx={{
                fontSize: "0.68rem",
                color: documento.estado === "Vigente" ? brand.primary : brand.accent,
                fontWeight: 700,
                letterSpacing: "0.03em",
              }}
            >
              {documento.estado}
            </Typography>
          )}
        </Stack>

        <Button
          component="a"
          href={documento.url}
          download={documento.url !== "#" ? documento.titulo : undefined}
          onClick={handleClick}
          size="small"
          variant="text"
          endIcon={
            documento.url !== "#" ? (
              <DownloadOutlinedIcon sx={{ fontSize: 15 }} />
            ) : undefined
          }
          aria-label={
            documento.url === "#"
              ? `${documento.titulo}: descarga próxima`
              : `Descargar ${documento.titulo}`
          }
          sx={{
            minWidth: 0,
            px: 0,
            py: 0.3,
            color: documento.url === "#" ? brand.muted : brand.primary,
            fontSize: "0.75rem",
            fontWeight: 700,
            whiteSpace: "nowrap",
            "&:hover": {
              backgroundColor: "transparent",
              color: brand.goldDeep,
            },
          }}
        >
          {documento.url === "#" ? "Próximamente" : "Descargar"}
        </Button>
      </Stack>
    </Box>
  );
}
