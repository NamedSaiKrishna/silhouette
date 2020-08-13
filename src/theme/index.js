import { createMuiTheme } from "@material-ui/core";

import palette from "./palette";

const theme = createMuiTheme({
  palette,
  shadows: ["none"],
  props: {
    MuiButtonBase: {},
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "none",
      },
    },
  },
});

export default theme;
