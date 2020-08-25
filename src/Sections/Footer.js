import React from "react";
//MUI
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
//MUI Icons
import LaunchIcon from "@material-ui/icons/Launch";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

function Copyright() {
  return (
    <Typography variant="body2">
      {"Copyright © "}
      {new Date().getFullYear()}
      {" All rights reserved | "}
      <Link color="inherit" href="https://namedsaikrishna.github.io/silhouette">
        Sai Krishna Konda.
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  element: {
    marginBottom: theme.spacing(2),
  },
}));

function iconFunc(h) {
  switch (h.name) {
    case "twitter": {
      return <TwitterIcon fontSize="large" color="primary" />;
    }
    case "github": {
      return <GitHubIcon fontSize="large" color="primary" />;
    }
    case "instagram": {
      return <InstagramIcon fontSize="large" color="primary" />;
    }
    case "linkedin": {
      return <LinkedInIcon fontSize="large" color="primary" />;
    }
    default: {
      return <LaunchIcon fontSize="large" color="primary" />;
    }
  }
}

const Footer = (props) => {
  const {
    profile: { handles },
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.element}>
        <Copyright />
      </div>
      {handles.map((handle, i) => (
        <IconButton href={handle.site_link} target="_blank" key={i}>
          {iconFunc(handle)}
        </IconButton>
      ))}
    </div>
  );
};

Footer.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.data.profile,
});

export default connect(mapStateToProps)(Footer);
