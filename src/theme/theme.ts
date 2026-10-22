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
      paper: brand.whiteSoft,
    },
    text: {
      primary: brand.ink,
      secondary: brand.muted,
    },
    divider: brand.line,
    success: {
      main: "#2F6B52",
    },
    warning: {
      main: "#8A5A16",
    },
    error: {
      main: brand.accent,
    },
  },
  typography: {
    fontFamily: fonts.body,
    h1: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "clamp(2.7rem, 5.4vw, 4.6rem)",
      lineHeight: 0.98,
      letterSpacing: "-0.025em",
      textWrap: "balance",
    },
    h2: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "clamp(2rem, 3.4vw, 3rem)",
      lineHeight: 1.04,
      letterSpacing: "-0.02em",
      textWrap: "balance",
    },
    h3: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "clamp(1.45rem, 2.2vw, 1.95rem)",
      lineHeight: 1.16,
      letterSpacing: "-0.012em",
    },
    h4: {
      fontFamily: fonts.display,
      fontWeight: 600,
      fontSize: "clamp(1.2rem, 1.6vw, 1.42rem)",
      lineHeight: 1.24,
    },
    h5: {
      fontFamily: fonts.body,
      fontWeight: 700,
      fontSize: "1.02rem",
      lineHeight: 1.38,
    },
    h6: {
      fontFamily: fonts.body,
      fontWeight: 700,
      fontSize: "0.88rem",
      lineHeight: 1.4,
    },
    subtitle1: {
      fontSize: "1.06rem",
      lineHeight: 1.72,
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "0.92rem",
      lineHeight: 1.6,
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.76,
    },
    body2: {
      fontSize: "0.9rem",
      lineHeight: 1.66,
    },
    caption: {
      fontSize: "0.76rem",
      lineHeight: 1.5,
    },
    overline: {
      fontSize: "0.7rem",
      fontWeight: 700,
      letterSpacing: "0.14em",
      lineHeight: 1.4,
      textTransform: "uppercase",
    },
    button: {
      textTransform: "none",
      fontWeight: 700,
      letterSpacing: "0.005em",
      fontSize: "0.86rem",
    },
  },
  shape: {
    borderRadius: 0,
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
          backgroundColor: brand.goldSoft,
          color: brand.primaryDeep,
        },
        ":focus-visible": {
          outline: `2px solid ${brand.goldDeep}`,
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
          maxWidth: 1240,
          paddingLeft: "clamp(20px, 5vw, 48px)",
          paddingRight: "clamp(20px, 5vw, 48px)",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          minHeight: 44,
          paddingInline: "1.35rem",
          paddingBlock: "0.72rem",
          transition:
            "background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease",
        },
        outlined: {
          borderColor: brand.primary,
          color: brand.primary,
          borderWidth: 1,
          "&:hover": {
            borderWidth: 1,
            borderColor: brand.primaryDeep,
            backgroundColor: brand.primaryDeep,
            color: brand.white,
          },
        },
        text: {
          paddingInline: "0.35rem",
          minHeight: 36,
          color: brand.primary,
          "&:hover": {
            backgroundColor: "transparent",
            color: brand.goldDeep,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          transition: "color 0.18s ease",
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
          height: 26,
          fontWeight: 700,
          fontSize: "0.68rem",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
        },
        outlined: {
          borderColor: brand.lineStrong,
        },
      },
    },
    MuiAccordion: {
      defaultProps: {
        disableGutters: true,
        elevation: 0,
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: 0,
          borderTop: `1px solid ${brand.line}`,
          backgroundColor: "transparent",
          "&::before": {
            display: "none",
          },
          "&:last-of-type": {
            borderBottom: `1px solid ${brand.line}`,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          paddingLeft: 0,
          paddingRight: 0,
          minHeight: 60,
        },
        content: {
          margin: "16px 0",
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "0 0 22px",
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
          fontWeight: 700,
          fontSize: "0.82rem",
          minHeight: 44,
          paddingLeft: 0,
          paddingRight: 0,
          marginRight: 28,
          color: brand.muted,
          "&.Mui-selected": {
            color: brand.primary,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 2,
          backgroundColor: brand.gold,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          borderColor: brand.line,
          padding: "14px 16px",
          fontSize: "0.9rem",
        },
        head: {
          backgroundColor: brand.paper,
          color: brand.ink,
          fontWeight: 700,
          fontSize: "0.7rem",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          borderBottom: `2px solid ${brand.primary}`,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          "&:last-child td": {
            borderBottom: 0,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: brand.white,
          "& fieldset": {
            borderColor: brand.lineStrong,
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
          fontSize: "0.9rem",
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: brand.primaryDeep,
          fontSize: "0.76rem",
          borderRadius: 2,
        },
      },
    },
  },
});
