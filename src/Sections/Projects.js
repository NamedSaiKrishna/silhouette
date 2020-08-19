import React, { useEffect } from "react";
//MUI
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProjects } from "../redux/DataActions";

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
  const { getProjects, projects } = props;
  useEffect(() => {
    getProjects();
  }, [getProjects]);
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
        {projects.map((project, i) => (
          <Grid item xs={12} md={4} key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  projects: state.data.projects,
});
const mapDispatchToProps = {
  getProjects,
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
