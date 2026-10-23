import { Box, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logoCamara from "../../assets/brand/logo-camara-comercio.png";
import logoCorte from "../../assets/brand/logo-corte.png";
import { brand, fonts } from "../../theme/brand";

type BrandMarkProps = {
  light?: boolean;
  compact?: boolean;
  onClick?: () => void;
};

/**
 * Firma institucional:
 *
 *   [Cámara de Comercio] │ CORTE SUPERIOR / de Arbitraje / Huancayo · Junín │ [sello de arbitraje]
 *
 * El logo de la Cámara vive siempre en el extremo izquierdo y no se encoge
 * (`flexShrink: 0`), de modo que se mantiene visible en cualquier resolución;
 * el bloque de texto es el que cede espacio cuando el header se estrecha.
 */
export default function BrandMark({
  light = false,
  compact = false,
  onClick,
}: BrandMarkProps) {
  return (
    <Stack
      component={RouterLink}
      to="/"
      onClick={onClick}
      direction="row"
      spacing={compact ? 0.75 : { xs: 0.7, sm: 0.9, md: 1.1 }}
      sx={{
        alignItems: "center",
        textDecoration: "none",
        color: "inherit",
        flexShrink: 0,
        minWidth: 0,
      }}
    >
      {/* Cámara de Comercio — extremo izquierdo, fijo en todas las resoluciones */}

      <Box
        component="img"
        src={logoCamara}
        alt="Cámara de Comercio de Huancayo"
        sx={{
          width: compact ? 46 : { xs: 40, sm: 48, md: 56 },
          height: compact ? 46 : { xs: 40, sm: 48, md: 56 },
          objectFit: "contain",
          display: "block",
          flexShrink: 0,
        }}
      />
      {/* Sello de la Corte Superior de Arbitraje — cierre a la derecha */}

      <Box
        component="img"
        src={logoCorte}
        alt="Sello de la Corte Superior de Arbitraje de Huancayo"
        sx={{
          width: compact ? 42 : { xs: 36, sm: 44, md: 52 },
          height: compact ? 42 : { xs: 36, sm: 44, md: 52 },
          objectFit: "contain",
          display: "block",
          flexShrink: 0,
        }}
      />

      
      <Box
        aria-hidden="true"
        sx={{
          width: "1px",
          alignSelf: "stretch",
          my: compact ? 0.35 : { xs: 0.5, sm: 0.6, md: 0.75 },
          backgroundColor: light ? "rgba(255,255,255,0.22)" : brand.line,
          flexShrink: 0,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1,
          minWidth: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: compact ? "0.53rem" : { xs: "0.52rem", md: "0.6rem" },
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: { xs: "0.12em", md: "0.17em" },
            color: light ? brand.goldSoft : brand.goldDeep,
            textTransform: "uppercase",
            mb: compact ? 0.35 : { xs: 0.3, md: 0.4 },
            whiteSpace: "nowrap",
          }}
        >
          Corte Superior
        </Typography>

        <Typography
          sx={{
            fontFamily: fonts.display,
            fontSize: compact ? "1rem" : { xs: "1rem", sm: "1.08rem", md: "1.24rem" },
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.012em",
            color: light ? brand.white : brand.primaryDark,
            whiteSpace: "nowrap",
          }}
        >
          de Arbitraje
        </Typography>

        <Typography
          sx={{
            fontFamily: fonts.body,
            fontSize: compact ? "0.53rem" : { xs: "0.52rem", md: "0.6rem" },
            fontWeight: 600,
            lineHeight: 1.1,
            letterSpacing: { xs: "0.1em", md: "0.15em" },
            color: light ? "rgba(255,255,255,0.66)" : brand.muted,
            textTransform: "uppercase",
            mt: compact ? 0.35 : { xs: 0.3, md: 0.4 },
            whiteSpace: "nowrap",
          }}
        >
          Huancayo · Junín
        </Typography>
      </Box>
    </Stack>
  );
}
