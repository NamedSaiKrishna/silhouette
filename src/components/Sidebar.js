import React from "react";
//MUI
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/styles";
import Fab from "@material-ui/core/Fab";

//MUI Icons
import MenuIcon from "@material-ui/icons/Menu";
// React-Scroll
import { Link as ScrolLink } from "react-scroll";

const sections = [
  { name: "Home", section: "home" },
  { name: "Projects", section: "projects" },
  { name: "Resume", section: "resume" },
  { name: "About", section: "about" },
  { name: "Skills", section: "skills" },
  { name: "Contact", section: "contact" },
];

const useStyles = makeStyles((theme) => ({
  button: {
    padding: "10px 8px",
    justifyContent: "center",
    textTransform: "none",
    letterSpacing: 0,
    width: "100%",
    fontWeight: theme.typography.fontWeightMedium,
  },
  mBtn: {
    color: "white",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };
  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };
  const classes = useStyles();
  return (
    <div>
      <Fab className={classes.fab} color="primary" onClick={handleSidebarOpen}>
        <MenuIcon className={classes.mBtn} />
      </Fab>
      <Drawer anchor="bottom" onClose={handleSidebarClose} open={openSidebar}>
        <List>
          {sections.map((page, i) => (
            <ScrolLink
              to={page.section}
              smooth={true}
              offset={-100}
              duration={500}
              key={i}
            >
              <ListItem disableGutters>
                <Button onClick={handleSidebarClose} className={classes.button}>
                  {page.name}
                </Button>
              </ListItem>
            </ScrolLink>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
