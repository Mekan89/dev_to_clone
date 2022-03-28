import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#3e4adb",
    },
    background: {
      default: "#eff0f1",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "initial",
        },
        textPrimary: {
          color: "#4d5760",
          "&:hover": { color: "#3e4adb" },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
