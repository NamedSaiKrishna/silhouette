import React from "react";
//MUI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Skeleton from "@material-ui/lab/Skeleton";

//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

//Component
import ProjectCard from "../components/ProjectCard";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(15),
  },
  mainTitle: {
    marginBottom: theme.spacing(6),
    justifyContent: "center",
    display: "flex",
  },
  firstFont: {
    fontWeight: "lighter",
    marginRight: theme.spacing(1),
  },
  secondFont: {
    fontWeight: "bolder",
  },
}));

const Projects = (props) => {
  const classes = useStyles();
  const {
    profile: { projects },
    loading,
  } = props;
  return (
    <div className={classes.section} id="projects">
      <div className={classes.mainTitle}>
        <Typography variant="h4" className={classes.firstFont}>
          Featured
        </Typography>
        <Typography variant="h4" className={classes.secondFont}>
          Projects
        </Typography>
      </div>
      <Grid container spacing={3}>
        {loading
          ? [...Array(3)].map((sk, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Skeleton variant="rect" height={200} />
              </Grid>
            ))
          : projects.map((project, i) => (
              <Grid item xs={12} md={4} key={i}>
                <ProjectCard project={project} />
              </Grid>
            ))}
      </Grid>
    </div>
  );
};

Projects.propTypes = {
  profile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.data.profile,
  loading: state.data.loading,
});

export default connect(mapStateToProps)(Projects);
