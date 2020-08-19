import React, { useState } from "react";
//MUI
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
//Component
// React-Scroll
import { Link as ScrolLink } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  appbar: {
    alignItems: "center",
    background: "transparent",
  },
  appbarActive: {
    alignItems: "center",
    background: theme.palette.primary,
  },
  btn: {
    marginRight: theme.spacing(2),
  },
}));

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const changBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changBackground);
  const classes = useStyles();
  return (
    <div>
      <Hidden smDown>
        <AppBar
          position="fixed"
          className={navbar ? classes.appbarActive : classes.appbar}
          elevation={0}
        >
          <Toolbar>
            <ScrolLink
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button color="inherit" className={classes.btn}>
                Home
              </Button>
            </ScrolLink>
            <ScrolLink
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button color="inherit" className={classes.btn}>
                Projects
              </Button>
            </ScrolLink>
            <ScrolLink
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button color="inherit" className={classes.btn}>
                Resume
              </Button>
            </ScrolLink>
            <ScrolLink
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button color="inherit" className={classes.btn}>
                About
              </Button>
            </ScrolLink>
            <ScrolLink
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button color="inherit" className={classes.btn}>
                Skills
              </Button>
            </ScrolLink>
            <ScrolLink
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <Button color="inherit">Contact</Button>
            </ScrolLink>
          </Toolbar>
        </AppBar>
      </Hidden>
    </div>
  );
}

export default Navbar;
