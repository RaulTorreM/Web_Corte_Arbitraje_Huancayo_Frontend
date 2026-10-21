import { Box, Container, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { brand } from "../../theme/brand";
import { SITE } from "../../data/site";
import { UTILITY_LINKS } from "../../data/navigation";

export default function Topbar() {
  return (
    <Box
      sx={{
        backgroundColor: brand.primaryDeep,
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        color: "rgba(255,255,255,0.72)",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1320 }}>
        <Stack
          direction="row"
          sx={{
            minHeight: 38,
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 2.5 }}
            sx={{ alignItems: "center", minWidth: 0 }}
          >
            <Stack
              direction="row"
              spacing={0.7}
              sx={{ alignItems: "center", display: { xs: "none", sm: "flex" } }}
            >
              <PlaceOutlinedIcon sx={{ fontSize: "0.95rem", color: brand.goldSoft }} />
              <Typography sx={{ fontSize: "0.7rem", letterSpacing: "0.02em" }}>
                {SITE.contact.address}
              </Typography>
            </Stack>

            <Link
              href={SITE.contact.phoneHref}
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.7,
                color: "inherit",
                fontSize: "0.7rem",
                "&:hover": { color: brand.goldSoft },
              }}
            >
              <PhoneOutlinedIcon sx={{ fontSize: "0.95rem", color: brand.goldSoft }} />
              {SITE.contact.phone}
            </Link>

            <Link
              href={`mailto:${SITE.contact.email}`}
              underline="none"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                alignItems: "center",
                gap: 0.7,
                color: "inherit",
                fontSize: "0.7rem",
                "&:hover": { color: brand.goldSoft },
              }}
            >
              <MailOutlinedIcon sx={{ fontSize: "0.95rem", color: brand.goldSoft }} />
              {SITE.contact.email}
            </Link>
          </Stack>

          <Stack
            direction="row"
            spacing={{ xs: 1.5, md: 2.2 }}
            sx={{ alignItems: "center", flexShrink: 0 }}
          >
            {UTILITY_LINKS.map((item) => (
              <Link
                key={item.to}
                component={RouterLink}
                to={item.to}
                underline="none"
                sx={{
                  display: { xs: "none", sm: "inline" },
                  color: "rgba(255,255,255,0.68)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  transition: "color 0.2s ease",
                  "&:hover": { color: brand.goldSoft },
                }}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href={SITE.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
                color: brand.goldSoft,
                fontSize: "0.7rem",
                fontWeight: 650,
                whiteSpace: "nowrap",
                "&:hover": { color: brand.white },
              }}
            >
              Web Cámara
              <OpenInNewIcon sx={{ fontSize: "0.75rem" }} />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
