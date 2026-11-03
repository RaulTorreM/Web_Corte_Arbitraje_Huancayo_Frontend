import type { ReactNode } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { brand } from "../../theme/brand";
import type { MediaAsset } from "../../data/media";
import { MEDIA } from "../../data/media";
import type { Crumb } from "./Breadcrumbs";
import PageHeader from "./PageHeader";
import SectionHero from "./SectionHero";

type PageHeroProps = {
  kicker: string;
  title: string;
  subtitle?: string;
  crumbs: Crumb[];
  image?: MediaAsset;
  imageAlt?: string;
  imagePosition?: string;
  imageInset?: false | "strong" | "soft";
  children?: ReactNode;
};

export default function PageHero({
  kicker,
  title,
  subtitle,
  crumbs,
  image,
  imageAlt = "",
  imagePosition = "center 34%",
  imageInset = false,
  children,
}: PageHeroProps) {
  const { pathname } = useLocation();

  if (!pathname.startsWith("/quienes-somos")) {
    if (pathname === "/arbitraje" || pathname.startsWith("/arbitraje/")) {
      return (
        <SectionHero
          title={title}
          subtitle={subtitle}
          crumbs={crumbs}
          image={MEDIA.servicioArbitraje}
          imageAlt={MEDIA.servicioArbitraje.alt}
          children={children}
        />
      );
    }

    if (pathname === "/jprd" || pathname.startsWith("/jprd/")) {
      return (
        <SectionHero
          title={title}
          subtitle={subtitle}
          crumbs={crumbs}
          image={MEDIA.servicioJprd}
          imageAlt={MEDIA.servicioJprd.alt}
          children={children}
        />
      );
    }

    if (
      pathname === "/conciliacion" ||
      pathname.startsWith("/conciliacion/")
    ) {
      return (
        <SectionHero
          title={title}
          subtitle={subtitle}
          crumbs={crumbs}
          image={MEDIA.servicioConciliacion}
          imageAlt={MEDIA.servicioConciliacion.alt}
          children={children}
        />
      );
    }

    return (
      <PageHeader title={title} subtitle={subtitle}>
        {children}
      </PageHeader>
    );
  }

  if (image) {
    return (
      <SectionHero
        title={title}
        subtitle={subtitle}
        kicker={kicker}
        crumbs={crumbs}
        image={image}
        imageAlt={imageAlt || image.alt}
        imagePosition={imagePosition}
        imageInset={imageInset}
        align="center"
        children={children}
      />
    );
  }

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: brand.paper,
        borderBottom: `1px solid ${brand.line}`,
        minHeight: { xs: 340, sm: 380, md: 440 },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          width: "100%",
          pt: { xs: 2.5, md: 3 },
          pb: { xs: 4, md: 5 },
        }}
      >        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: 2,
            flexWrap: "wrap",
            mb: { xs: 3, md: 4 },
          }}
        >
          <Typography
            sx={{
              color: brand.goldInk,
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {kicker}
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{
            alignItems: "center",
            height: { xs: "auto", md: 240 },
          }}
        >
          <Grid size={12}>
            <Typography
              component="h1"
              variant="h1"
              sx={{
                fontSize: {
                  xs: "clamp(2.1rem, 9.4vw, 2.9rem)",
                  md: "clamp(2.4rem, 4vw, 3.4rem)",
                },
                maxWidth: 760,
                color: brand.primaryDeep,
                textWrap: "balance",
              }}
            >
              {title}
            </Typography>

            {subtitle && (
              <Typography
                sx={{
                  mt: 2,
                  maxWidth: 620,
                  color: brand.muted,
                  fontSize: { xs: "0.96rem", md: "1.02rem" },
                  lineHeight: 1.66,
                  textWrap: "pretty",
                }}
              >
                {subtitle}
              </Typography>
            )}

            {children && <Box sx={{ mt: 3 }}>{children}</Box>}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
