import { createTheme } from "@mui/material/styles";
import { brand, fonts } from "./brand";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: brand.primary,
      dark: brand.primaryDark,
      light: brand.primaryLight,
      contrastText: brand.white,
    },
    secondary: {
      main: brand.gold,
      light: brand.goldSoft,
      dark: brand.goldDeep,
      contrastText: brand.primaryDeep,
    },
    background: {
      default: brand.paper,
      paper: brand.white,
    },
    text: {
      primary: brand.ink,
      secondary: brand.muted,
    },
    divider: brand.line,
    success: {
      main: "#2E7D5B",
    },
    error: {
      main: "#A63A3A",
    },
  },
  typography: {
    fontFamily: fonts.body,
    h1: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "clamp(2.4rem, 5vw, 3.9rem)",
      lineHeight: 1.05,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "clamp(1.9rem, 3.2vw, 2.6rem)",
      lineHeight: 1.13,
      letterSpacing: "-0.015em",
    },
    h3: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "clamp(1.45rem, 2vw, 1.8rem)",
      lineHeight: 1.22,
    },
    h4: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "1.3rem",
      lineHeight: 1.3,
    },
    h5: {
      fontFamily: fonts.body,
      fontWeight: 700,
      fontSize: "1.08rem",
      lineHeight: 1.35,
    },
    h6: {
      fontFamily: fonts.body,
      fontWeight: 700,
      fontSize: "0.95rem",
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: "1.08rem",
      lineHeight: 1.7,
      fontWeight: 500,
    },
    body1: {
      fontSize: "1.02rem",
      lineHeight: 1.78,
    },
    body2: {
      fontSize: "0.93rem",
      lineHeight: 1.68,
    },
    caption: {
      fontSize: "0.78rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: "none",
      fontWeight: 650,
      letterSpacing: "0.01em",
    },
  },
  shape: {
    borderRadius: 4,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: brand.paper,
          color: brand.ink,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "::selection": {
          backgroundColor: brand.sky,
          color: brand.primaryDeep,
        },
        ":focus-visible": {
          outline: `2px solid ${brand.gold}`,
          outlineOffset: 3,
        },
        "img, svg": {
          maxWidth: "100%",
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
      styleOverrides: {
        root: {
          paddingLeft: "clamp(20px, 5vw, 40px)",
          paddingRight: "clamp(20px, 5vw, 40px)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 3,
          paddingInline: "1.6rem",
          paddingBlock: "0.78rem",
          fontSize: "0.88rem",
          transition:
            "transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease",
          "&:hover": {
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          borderWidth: 1,
          "&:hover": {
            borderWidth: 1,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          backgroundColor: brand.white,
          "& fieldset": {
            borderColor: brand.line,
          },
          "&:hover fieldset": {
            borderColor: brand.primaryLight,
          },
          "&.Mui-focused fieldset": {
            borderColor: brand.primary,
            borderWidth: 1.5,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "0.92rem",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: "color 0.2s ease",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          fontWeight: 600,
          fontSize: "0.72rem",
          letterSpacing: "0.02em",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: `1px solid ${brand.line}`,
          "&::before": {
            display: "none",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: brand.line,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 650,
          fontSize: "0.86rem",
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: brand.line,
        },
        head: {
          backgroundColor: brand.primaryDark,
          color: brand.white,
          fontWeight: 650,
          fontSize: "0.78rem",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        },
      },
    },
  },
});
