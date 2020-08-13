import React from "react";
//MUI
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
//MUI Icons
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function Copyright() {
  return (
    <div>
      {"Copyright © "}
      {new Date().getFullYear()}
      {" All rights reserved | "}
      <Link color="inherit" href="https://namedsaikrishna.github.io/silhouette">
        Sai Krishna Konda.
      </Link>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    textAlign: "center",
    marginTop: theme.spacing(5),
  },
  typo: {
    color: "white",
  },
  icon: {
    color: "white",
  },
}));

const pages = [
  {
    href: "https://twitter.com/namedsaikrishna",
    icon: <TwitterIcon fontSize="large" />,
  },
  {
    href: "https://github.com/namedsaikrishna",
    icon: <GitHubIcon fontSize="large" />,
  },
  {
    href: "https://www.instagram.com/namedsaikrishna",
    icon: <InstagramIcon fontSize="large" />,
  },
  {
    href: "#",
    icon: <LinkedInIcon fontSize="large" />,
  },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Typography variant="body2" className={classes.typo}>
        <Copyright />
      </Typography>
      {pages.map((page) => (
        <IconButton href={page.href} className={classes.icon} target="_blank">
          {page.icon}
        </IconButton>
      ))}
    </div>
  );
};

export default Footer;
