import { Box, Container, Stack, Typography } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { brand } from "../../theme/brand";

type PreliminaryNoticeProps = {
  title?: string;
  text?: string;
  contained?: boolean;
};

/**
 * Aviso visible para todo contenido de la JPRD. La JPRD se anuncia en el
 * Estatuto, pero aún no tiene reglamento, aranceles ni cláusulas aprobadas.
 */
export default function PreliminaryNotice({
  title = "Servicio en implementación",
  text = "La Junta de Prevención y Resolución de Disputas se encuentra en implementación. No cuenta aún con reglamento ni aranceles aprobados. Los documentos y montos de esta sección son preliminares y no deben presentarse como normativa vigente.",
  contained = true,
}: PreliminaryNoticeProps) {
  const content = (
    <Stack
      direction="row"
      spacing={1.4}
      sx={{
        p: { xs: 2.2, md: 2.6 },
        alignItems: "flex-start",
        backgroundColor: brand.skySoft,
        border: `1px solid ${brand.skyMid}`,
        borderLeft: `4px solid ${brand.gold}`,
      }}
    >
      <InfoOutlinedIcon sx={{ color: brand.primary, fontSize: "1.15rem", mt: "2px" }} />
      <Box>
        <Typography
          sx={{
            color: brand.primaryDark,
            fontWeight: 750,
            fontSize: "0.82rem",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </Typography>
        <Typography sx={{ mt: 0.5, color: brand.primary, fontSize: "0.82rem", lineHeight: 1.65 }}>
          {text}
        </Typography>
      </Box>
    </Stack>
  );

  if (!contained) return content;

  return (
    <Box component="section" sx={{ pt: { xs: 3, md: 3.5 }, backgroundColor: brand.white }}>
      <Container>{content}</Container>
    </Box>
  );
}
