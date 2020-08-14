import React from "react";
//MUI
import { ThemeProvider } from "@material-ui/styles";
import Container from "@material-ui/core/Container";
import theme from "./theme";
//Components
import { Navbar, Footer, Contact } from "./Sections";

const App = () => {
  return (
    <div>
      <Navbar />
      <Container maxWidth="md">
        <Contact />
        <Footer />
      </Container>
    </div>
  );
};

export default App;
