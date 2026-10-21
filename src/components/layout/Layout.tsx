import { Suspense } from "react";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { Box, Link } from "@mui/material";
import Topbar from "./Topbar";
import Header from "./Header";
import Footer from "./Footer";
import PageFallback from "../common/PageFallback";
import { brand } from "../../theme/brand";

export default function Layout() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: brand.paper,
        backgroundImage:
          "radial-gradient(rgba(45,73,121,0.045) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      <Link
        component={RouterLink}
        to="#contenido"
        sx={{
          position: "absolute",
          left: -9999,
          top: 0,
          zIndex: 2000,
          backgroundColor: brand.primaryDark,
          color: brand.white,
          px: 2,
          py: 1,
          "&:focus": { left: 8, top: 8 },
        }}
      >
        Saltar al contenido
      </Link>

      <Topbar />
      <Header />

      <Box component="main" id="contenido" sx={{ flex: 1 }}>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </Box>
  );
}
