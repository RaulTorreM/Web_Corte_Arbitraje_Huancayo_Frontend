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
      spacing={1.5}
      sx={{
        height: "100%",
        pt: 1.5,
        borderTop: `2px solid ${featured ? brand.gold : brand.lineStrong}`,
      }}
    >
      <Box
        sx={{
          width: "100%",
          aspectRatio: "4 / 5",
          overflow: "hidden",
          backgroundColor: brand.primaryDeep,
        }}
      >
        {persona.foto ? (
          <Box
            component="img"
            src={persona.foto}
            alt={`Fotografía de ${persona.nombre}`}
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 12%",
              display: "block",
              transition: "opacity 0.2s ease",
              "&:hover": { opacity: 0.9 },
            }}
          />
        ) : (
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 1.2,
              backgroundColor: brand.paperAlt,
              border: `1px solid ${brand.line}`,
              color: brand.primaryDeep,
            }}
          >
            <Box
              component="span"
              sx={{
                fontFamily: fonts.display,
                fontSize: "2.1rem",
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {initials(persona.nombre)}
            </Box>

            <Box sx={{ width: 26, height: "1px", backgroundColor: brand.gold }} />

            <Typography
              sx={{
                px: 1.5,
                color: brand.muted,
                fontSize: "0.54rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                lineHeight: 1.4,
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Fotografía no disponible
            </Typography>
          </Box>
        )}
      </Box>

      <Box>
        <Typography
          variant="h4"
          sx={{
            fontSize: featured ? "1.18rem" : "1.06rem",
            lineHeight: 1.25,
            color: brand.primaryDeep,
          }}
        >
          {persona.nombre}
        </Typography>

        <Typography
          sx={{
            mt: 0.6,
            color: brand.goldDeep,
            fontSize: "0.64rem",
            fontWeight: 700,
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
          fontSize: "0.84rem",
          lineHeight: 1.62,
        }}
      >
        {persona.bio}
      </Typography>
    </Stack>
  );
}
