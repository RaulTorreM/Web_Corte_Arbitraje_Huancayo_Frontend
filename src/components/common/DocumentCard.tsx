import { Box, Button, Stack, Typography } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import { motion } from "framer-motion";
import { brand, fonts } from "../../theme/brand";
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

type DocumentCardProps = {
  documento: Documento;
  onOpen?: (documento: Documento) => void;
};

export default function DocumentCard({
  documento,
  onOpen,
}: DocumentCardProps) {
  const isAvailable =
    documento.url !== "#" && documento.disponible !== false;
  const isReadable = Boolean(onOpen && isAvailable);
  const hasCoverAction = Boolean(isReadable && documento.portada);

  const handleDownloadClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (documento.url === "#") {
      event.preventDefault();
    }
  };

  const genericCoverSx = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: 250,
    mx: "auto",
    mb: 2.4,
    aspectRatio: "5 / 7",
    p: 3,
    textAlign: "center",
    backgroundColor: brand.primaryDeep,
    border: `1px solid ${brand.line}`,
    color: "inherit",
    font: "inherit",
  } as const;

  const genericCover = (
    <>
      <DescriptionOutlinedIcon
        sx={{ fontSize: 30, color: brand.goldSoft, mb: 1.5 }}
      />
      <Typography
        sx={{
          color: brand.goldSoft,
          fontSize: "0.7rem",
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}
      >
        {documento.tipo}
      </Typography>
      <Box
        aria-hidden="true"
        sx={{ width: 32, height: 2, backgroundColor: brand.gold, my: 1.5 }}
      />
      <Typography
        sx={{
          color: brand.white,
          fontFamily: fonts.display,
          fontWeight: 600,
          fontSize: "1.05rem",
          lineHeight: 1.25,
          textWrap: "balance",
        }}
      >
        {documento.titulo}
      </Typography>

      {isReadable && (
        <Stack
          className="cover-open"
          direction="row"
          spacing={0.5}
          sx={{
            mt: 2,
            alignItems: "center",
            color: brand.goldSoft,
            opacity: 0.75,
            transition: "opacity 0.18s ease",
          }}
        >
          <MenuBookOutlinedIcon sx={{ fontSize: 15 }} />
          <Typography
            sx={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Abrir documento
          </Typography>
        </Stack>
      )}
    </>
  );

  return (
    <Box
      component={motion.article}
      variants={fadeUp}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: brand.white,
        border: `1px solid ${brand.line}`,
        borderTop: `2px solid ${brand.gold}`,
        p: { xs: 2, md: 2.5 },
        transition: "border-color 0.18s ease, transform 0.18s ease",
        "&:hover": {
          borderColor: brand.goldSoft,
          transform: { md: "translateY(-2px)" },
        },
      }}
    >
      {documento.portada ? (
        hasCoverAction ? (
          <Box
            component="button"
            type="button"
            onClick={() => onOpen?.(documento)}
            aria-label={`Abrir ${documento.titulo}`}
            sx={{
              display: "block",
              width: "100%",
              maxWidth: 250,
              mx: "auto",
              mb: 2.4,
              p: 0,
              border: `1px solid ${brand.line}`,
              backgroundColor: brand.white,
              cursor: "pointer",
              overflow: "hidden",
              "& img": { transition: "opacity 0.18s ease" },
              "&:hover img": { opacity: 0.9 },
              "&:focus-visible": {
                outline: `2px solid ${brand.goldDeep}`,
                outlineOffset: 3,
              },
            }}
          >
            <Box
              component="img"
              src={documento.portada}
              alt={`Portada de ${documento.titulo}`}
              loading="lazy"
              decoding="async"
              sx={{
                display: "block",
                width: "100%",
                aspectRatio: "5 / 7",
                objectFit: "cover",
              }}
            />
          </Box>
        ) : (
          <Box
            component="img"
            src={documento.portada}
            alt={`Portada de ${documento.titulo}`}
            loading="lazy"
            decoding="async"
            sx={{
              display: "block",
              width: "100%",
              maxWidth: 250,
              aspectRatio: "5 / 7",
              objectFit: "cover",
              mx: "auto",
              mb: 2.4,
              border: `1px solid ${brand.line}`,
              backgroundColor: brand.white,
            }}
          />
        )
      ) : isReadable ? (
        <Box
          component="button"
          type="button"
          onClick={() => onOpen?.(documento)}
          aria-label={`Abrir ${documento.titulo}`}
          sx={{
            ...genericCoverSx,
            cursor: "pointer",
            "&:hover": {
              borderColor: brand.goldSoft,
              "& .cover-open": { opacity: 1 },
            },
            "&:focus-visible": {
              outline: `2px solid ${brand.goldDeep}`,
              outlineOffset: 3,
            },
          }}
        >
          {genericCover}
        </Box>
      ) : (
        <Box sx={genericCoverSx}>{genericCover}</Box>
      )}

      <Stack direction="row" spacing={1.2} sx={{ alignItems: "center" }}>
        <Box sx={{ color: brand.goldDeep, display: "flex" }}>
          {iconByCategoria[documento.categoria]}
        </Box>
        <Typography
          sx={{
            color: brand.muted,
            fontSize: "0.7rem",
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          {documento.tipo}
        </Typography>
      </Stack>

      <Typography
        component="h3"
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

      <Stack spacing={1.2} sx={{ alignItems: "flex-start" }}>
        <Stack
          direction="row"
          spacing={1.4}
          sx={{ alignItems: "center", flexWrap: "wrap" }}
        >
          <Stack direction="row" spacing={0.5} sx={{ alignItems: "center" }}>
            <CalendarMonthOutlinedIcon
              sx={{ fontSize: 14, color: brand.muted }}
            />
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
                fontSize: "0.72rem",
                color:
                  documento.estado === "Vigente"
                    ? brand.primary
                    : brand.accent,
                fontWeight: 700,
                letterSpacing: "0.03em",
              }}
            >
              {documento.estado}
            </Typography>
          )}
        </Stack>

        {!isReadable &&
          (isAvailable ? (
            <Button
              component="a"
              href={documento.url}
              download={documento.titulo}
              onClick={handleDownloadClick}
              size="small"
              variant="text"
              endIcon={<DownloadOutlinedIcon sx={{ fontSize: 15 }} />}
              aria-label={`Descargar ${documento.titulo}`}
              sx={{
                minWidth: 0,
                px: 0,
                py: 0.3,
                color: brand.primary,
                fontSize: "0.75rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: "transparent",
                  color: brand.goldDeep,
                },
              }}
            >
              Descargar
            </Button>
          ) : (
            <Button
              component="span"
              aria-disabled="true"
              size="small"
              variant="text"
              sx={{
                minWidth: 0,
                px: 0,
                py: 0.3,
                color: brand.muted,
                fontSize: "0.75rem",
                fontWeight: 700,
                whiteSpace: "nowrap",
                cursor: "default",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              Próximamente
            </Button>
          ))}
      </Stack>
    </Box>
  );
}
