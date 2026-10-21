import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import GavelOutlinedIcon from "@mui/icons-material/GavelOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { brand } from "../../../theme/brand";
import { MATERIAS, type Materia } from "../../../data/materias";
import SectionHeading from "../../../components/common/SectionHeading";
import { Stagger } from "../../../components/common/Reveal";
import { fadeUp } from "../../../utils/animations";

const ICONS: Record<Materia["icon"], typeof GavelOutlinedIcon> = {
  gavel: GavelOutlinedIcon,
  contract: DescriptionOutlinedIcon,
  payments: PaymentsOutlinedIcon,
  construction: ConstructionOutlinedIcon,
  business: BusinessOutlinedIcon,
  balance: AccountBalanceOutlinedIcon,
};

export default function MateriasSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 8, md: 11 },
        backgroundColor: brand.skySoft,
        borderBottom: `1px solid ${brand.skyMid}`,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: -120,
          right: -120,
          width: 420,
          height: 420,
          borderRadius: "50%",
          border: `1px solid ${brand.skyMid}`,
          opacity: 0.85,
        }}
      />

      <Box
        aria-hidden
        sx={{
          position: "absolute",
          bottom: -160,
          left: -140,
          width: 380,
          height: 380,
          borderRadius: "50%",
          border: `1px solid ${brand.skyMid}`,
          opacity: 0.7,
        }}
      />

      <Container sx={{ position: "relative" }}>
        <SectionHeading
          kicker="Competencia"
          title="Materias que resolvemos"
          subtitle="Atendemos controversias patrimoniales de libre disposición derivadas de relaciones comerciales, contractuales y societarias."
          centered
        />

        <Stagger>
          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {MATERIAS.map((materia, index) => {
              const Icon = ICONS[materia.icon];

              return (
                <Grid key={materia.title} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Stack
                    component={motion.article}
                    variants={fadeUp}
                    sx={{
                      position: "relative",
                      height: "100%",
                      p: { xs: 3, md: 3.4 },
                      backgroundColor: brand.white,
                      border: `1px solid ${brand.skyMid}`,
                      borderTop: "3px solid transparent",
                      transition:
                        "transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        borderTopColor: brand.gold,
                        borderColor: brand.line,
                        boxShadow: "0 18px 40px rgba(18,35,61,0.11)",
                        "& .materia-arrow": {
                          opacity: 1,
                          transform: "translate(0, 0)",
                        },
                      },
                    }}
                  >
                    <Stack
                      direction="row"
                      sx={{ justifyContent: "space-between", alignItems: "flex-start" }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(45,73,121,0.07)",
                          color: brand.primary,
                        }}
                      >
                        <Icon sx={{ fontSize: "1.45rem" }} />
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: '"Fraunces", Georgia, serif',
                          fontSize: "1.2rem",
                          fontWeight: 600,
                          color: brand.skyMid,
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </Typography>
                    </Stack>

                    <Typography
                      variant="h4"
                      sx={{
                        mt: 2.4,
                        color: brand.primaryDark,
                        fontSize: "1.12rem",
                        lineHeight: 1.35,
                      }}
                    >
                      {materia.title}
                    </Typography>

                    <Typography
                      sx={{
                        mt: 1.2,
                        color: brand.muted,
                        fontSize: "0.88rem",
                        lineHeight: 1.7,
                        flex: 1,
                      }}
                    >
                      {materia.text}
                    </Typography>

                    <Box
                      className="materia-arrow"
                      sx={{
                        mt: 2.5,
                        display: "flex",
                        justifyContent: "flex-end",
                        color: brand.goldDeep,
                        opacity: 0,
                        transform: "translate(-4px, 4px)",
                        transition: "opacity 0.25s ease, transform 0.25s ease",
                      }}
                    >
                      <ArrowOutwardIcon sx={{ fontSize: "1.2rem" }} />
                    </Box>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stagger>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          sx={{
            mt: { xs: 4.5, md: 5.5 },
            alignItems: { sm: "center" },
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: brand.primary,
              fontSize: "0.9rem",
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            ¿Tienes dudas sobre si tu controversia es arbitrable?
          </Typography>

          <Button
            component={RouterLink}
            to="/contacto"
            variant="outlined"
            size="small"
            sx={{
              borderColor: brand.primary,
              color: brand.primary,
              "&:hover": {
                borderColor: brand.goldDeep,
                color: brand.goldDeep,
              },
            }}
          >
            Consulta con la Corte
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
