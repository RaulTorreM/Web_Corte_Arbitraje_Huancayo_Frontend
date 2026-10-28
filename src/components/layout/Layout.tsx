import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Box, Link } from "@mui/material";
import Header from "./Header";
import BreadcrumbBar from "./BreadcrumbBar";
import Footer from "./Footer";
import PageNavigator from "./PageNavigator";
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
      <BreadcrumbBar />

      <Box
        component="main"
        id="contenido"
        tabIndex={-1}
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Suspense fallback={<PageFallback />}>
          <Outlet />
        </Suspense>
      </Box>

      <PageNavigator />

      <Footer />
    </Box>
  );
}
