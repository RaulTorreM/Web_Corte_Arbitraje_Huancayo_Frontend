import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import { brand } from "../../theme/brand";
import { SITE } from "../../data/site";

type MesaDePartesButtonProps = {
  fullWidth?: boolean;
  sx?: SxProps<Theme>;
};

export default function MesaDePartesButton({
  fullWidth = false,
  sx,
}: MesaDePartesButtonProps) {
  return (
    <Box
      component="a"
      href={SITE.mesaDePartesUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Mesa de Partes, se abre en una nueva pestaña"
      title="Mesa de Partes"
      sx={[
        {
          display: "inline-flex",
          alignItems: "stretch",
          width: fullWidth ? "100%" : "auto",
          minHeight: 44,
          border: `1px solid ${brand.gold}`,
          backgroundColor: brand.gold,
          color: brand.primaryDeep,
          textDecoration: "none",
          boxShadow: "3px 3px 0 rgba(7,31,58,0.3)",
          transition:
            "transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease",
          "&:hover": {
            backgroundColor: brand.goldSoft,
            transform: "translate(-1px, -1px)",
            boxShadow: "5px 5px 0 rgba(7,31,58,0.26)",
            "& .mesa-partes-icon": {
              backgroundColor: brand.primaryDark,
            },
          },
          "&:focus-visible": {
            outline: "2px solid #F7D875",
            outlineOffset: "3px",
          },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: fullWidth ? 1 : "initial",
          px: 2,
          py: 1.1,
          fontSize: "0.72rem",
          fontWeight: 800,
          letterSpacing: "0.09em",
          lineHeight: 1.2,
          textTransform: "uppercase",
          whiteSpace: "nowrap",
        }}
      >
        Mesa de Partes
      </Box>

      <Box
        component="span"
        className="mesa-partes-icon"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minWidth: 40,
          px: fullWidth ? 1.4 : 1.1,
          backgroundColor: brand.primaryDeep,
          color: brand.gold,
          transition: "background-color 180ms ease",
        }}
      >
        <NorthEastIcon sx={{ fontSize: 18 }} />
      </Box>
    </Box>
  );
}
