import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Link } from "@mui/material";
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
      }}
    >
      <Link
        href="#contenido"
        sx={{
          position: "fixed",
          left: -9999,
          top: 8,
          zIndex: 2000,
          backgroundColor: brand.primaryDeep,
          color: brand.white,
          px: 2,
          py: 1.2,
          fontSize: "0.82rem",
          fontWeight: 700,
          textDecoration: "none",
          "&:focus": { left: 8 },
        }}
      >
        Saltar al contenido
      </Link>

      <Header />

      <Box component="main" id="contenido" tabIndex={-1} sx={{ flex: 1 }}>
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </Box>
  );
}
