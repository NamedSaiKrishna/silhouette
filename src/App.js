import React from "react";

//MUI
import CssBaseline from "@material-ui/core/CssBaseline";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";

//Components
import {
  Footer,
  Contact,
  Skills,
  AboutMe,
  Resume,
  Projects,
  Intro,
  Navbar,
} from "./sections";
import Sidebar from "./components/Sidebar";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

const white = "#FFFFFF";
const black = "#000000";
const lightYellow = "#febf63";
const darkYellow = "#b22a00";
const lightBlue = "#2196f3";
const darkBlue = "#5f85db";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? "dark" : "light",
          black,
          white,
          primary: {
            contrastText: white,
            main: prefersDarkMode ? darkBlue : lightBlue,
          },
          secondary: {
            contrastText: black,
            main: prefersDarkMode ? lightYellow : darkYellow,
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <Navbar />
        <Intro />
        <Container maxWidth="md">
          <Projects />
          <Resume />
          <AboutMe />
          <Skills />
          <Contact />
          <Footer />
          <Hidden mdUp>
            <Sidebar />
          </Hidden>
        </Container>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
