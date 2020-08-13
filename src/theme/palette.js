import { colors, rgba } from "@material-ui/core";

const white = "#FFFFFF";
const black = "#000000";

export default {
  black,
  white,
  primary: {
    contrastText: black,
    dark: "#2e2e2e",
    main: white,
    light: white,
  },
  secondary: {
    contrastText: black,
    dark: "#6480ad",
    main: "#90b8f8",
    light: "#a6c6f9",
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400],
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400],
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400],
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  background: {
    default: "#F4F6F8",
    paper: white,
  },
  icon: "#65646c",
  divider: colors.grey[200],
  title: "#5f6368",
  text: {
    primary: white,
    secondary: white,
    disabled: "rgba(0, 0, 0, 0.38)",
    hint: "rgba(0, 0, 0, 0.38)",
  },
  action: {
    active: "rgba(0, 0, 0, 0.54)",
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: "0.04",
  },
};
