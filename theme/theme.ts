import { createTheme, responsiveFontSizes } from "@mui/material";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      // main: "#DE6A0A",
    },
    secondary: {
      // main: "#0BDE7D",
    },
    background: {
      default: "#fff",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
