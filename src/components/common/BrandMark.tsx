import { Box, Stack } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import logoCamara from "../../assets/brand/logo-camara-comercio.png";
import logoCorte from "../../assets/brand/logo-corte.png";

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
  const logoSize = compact
    ? 69
    : { xs: 66, sm: 21, md: 82 };

  return (
    <Stack
      component={RouterLink}
      to="/"
      onClick={onClick}
      direction="row"
      spacing={compact ? 1 : { xs: 1, sm: 1.4, md: 1.8 }}
      sx={{
        alignItems: "center",
        justifyContent: "flex-start",
        textDecoration: "none",
        color: "inherit",
        flexShrink: 0,
        minWidth: 0,
      }}
    >
      <Box
        component="img"
        src={logoCamara}
        alt="Cámara de Comercio de Huancayo"
        sx={{
          width: logoSize,
          height: logoSize,
          objectFit: "contain",
          display: "block",
          flexShrink: 0,
          filter: light
            ? "drop-shadow(0 1px 3px rgba(255,255,255,0.12))"
            : "none",
          transition: "filter 200ms ease",
        }}
      />

      <Box
        component="img"
        src={logoCorte}
        alt="Corte Superior de Arbitraje de Huancayo"
        sx={{
          width: logoSize,
          height: logoSize,
          objectFit: "contain",
          display: "block",
          flexShrink: 0,
          filter: light
            ? "drop-shadow(0 1px 3px rgba(255,255,255,0.12))"
            : "none",
          transition: "filter 200ms ease",
        }}
      />
      
    </Stack>
  );
}

