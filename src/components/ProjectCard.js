import React from "react";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import LaunchIcon from "@material-ui/icons/Launch";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    position: "relative",
  },
}));

const ProjectCard = (props) => {
  const classes = useStyles();
  const { project } = props;
  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {project.used_languages}
          </Typography>
          <Typography variant="body2" component="p">
            {project.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {project.github_repo !== "" ? (
            <IconButton
              aria-label="Visit GitHub Repo"
              color="primary"
              href={project.github_repo}
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          ) : (
            ""
          )}
          {project.site_link !== "" ? (
            <IconButton
              aria-label="Visit GitHub Repo"
              color="primary"
              href={project.site_link}
              target="_blank"
            >
              <LaunchIcon />
            </IconButton>
          ) : (
            ""
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default ProjectCard;
