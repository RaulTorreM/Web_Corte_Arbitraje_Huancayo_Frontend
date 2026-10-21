import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { brand, fonts } from "../../theme/brand";
import { fadeUp } from "../../utils/animations";

export type PersonaView = {
  nombre: string;
  cargo: string;
  bio: string;
  foto?: string;
  destacado?: boolean;
};

const initials = (nombre: string) =>
  nombre
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export default function PersonCard({
  persona,
}: {
  persona: PersonaView;
}) {
  const featured = persona.destacado;

  return (
    <Stack
      component={motion.article}
      variants={fadeUp}
      spacing={1.8}
      sx={{
        alignItems: "center",
        textAlign: "center",
        height: "100%",
        p: { xs: 2.5, md: 3 },
        border: `1px solid ${featured ? "rgba(186,153,7,0.42)" : brand.line}`,
        backgroundColor: featured ? "rgba(234,242,251,0.55)" : brand.white,
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "rgba(186,153,7,0.5)",
          boxShadow: "0 16px 38px rgba(18,35,61,0.10)",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: featured ? 104 : 92,
          height: featured ? 104 : 92,
          flexShrink: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -5,
            right: -5,
            width: 30,
            height: 30,
            borderTop: `2px solid ${brand.gold}`,
            borderRight: `2px solid ${brand.gold}`,
          }}
        />

        {persona.foto ? (
          <Box
            component="img"
            src={persona.foto}
            alt={`Fotografía de ${persona.nombre}`}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 12%",
              display: "block",
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: `linear-gradient(145deg, ${brand.primary} 0%, ${brand.primaryDeep} 100%)`,
              color: brand.sky,
              fontFamily: fonts.display,
              fontSize: featured ? "2rem" : "1.75rem",
              fontWeight: 600,
            }}
          >
            {initials(persona.nombre)}
          </Box>
        )}

        <Box
          sx={{
            position: "absolute",
            left: "14%",
            right: "14%",
            bottom: -3,
            height: 3,
            backgroundColor: brand.gold,
          }}
        />
      </Box>

      <Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: featured ? "1.15rem" : "1.02rem",
            lineHeight: 1.35,
            color: brand.primaryDark,
          }}
        >
          {persona.nombre}
        </Typography>

        <Typography
          sx={{
            mt: 0.8,
            color: brand.goldDeep,
            fontSize: "0.68rem",
            fontWeight: 750,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {persona.cargo}
        </Typography>
      </Box>

      <Typography
        sx={{
          color: brand.muted,
          fontSize: "0.85rem",
          lineHeight: 1.65,
        }}
      >
        {persona.bio}
      </Typography>
    </Stack>
  );
}
