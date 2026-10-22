import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { MotionConfig } from "framer-motion";

import "@fontsource/source-serif-4/latin-400.css";
import "@fontsource/source-serif-4/latin-600.css";
import "@fontsource/source-serif-4/latin-600-italic.css";
import "@fontsource/source-serif-4/latin-700.css";
import "@fontsource/public-sans/latin-400.css";
import "@fontsource/public-sans/latin-500.css";
import "@fontsource/public-sans/latin-600.css";
import "@fontsource/public-sans/latin-700.css";

import "./index.css";
import AppRouter from "./routes/AppRouter";
import { theme } from "./theme/theme";

const container = document.getElementById("root");

if (!container) {
  throw new Error("No se encontró el elemento raíz #root");
}

createRoot(container).render(
  <StrictMode>
    <MotionConfig reducedMotion="user">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </ThemeProvider>
    </MotionConfig>
  </StrictMode>
);
