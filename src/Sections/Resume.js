import React, { useEffect } from "react";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getEducation, getExperience } from "../redux/DataActions";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "lighter",
  },
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
  di: {
    padding: theme.spacing(3),
  },
  sectionDivider: {
    marginBottom: theme.spacing(2),
  },
  list: {
    marginTop: theme.spacing(2),
    marginButtom: theme.spacing(2),
  },
}));

const Resume = (props) => {
  const classes = useStyles();
  const { getEducation, getExperience, education, experience } = props;
  useEffect(() => {
    getExperience();
    getEducation();
  }, [getEducation, getExperience]);
  return (
    <div className={classes.section} id="resume">
      <div className={classes.mainTitle}>
        <Typography variant="h4" className={classes.firstFont}>
          My
        </Typography>
        <Typography variant="h4" className={classes.secondFont}>
          Resume
        </Typography>
      </div>
      <div className={classes.sectionDivider}>
        <Typography variant="h6" className={classes.title}>
          Education
        </Typography>
        <div>
          <Grid container spacing={3}>
            {education.map((edu, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Paper className={classes.di}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {edu.location}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="inherit">
                    {edu.degree.name}
                  </Typography>
                  <div className={classes.list}>
                    <Typography
                      component={Link}
                      variant="subtitle1"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href={edu.college_link}
                    >
                      {edu.college_name}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <div>
        <Typography variant="h6" className={classes.title}>
          Experience
        </Typography>
        <div>
          <Grid container spacing={3}>
            {experience.map((exp, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Paper className={classes.di}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    gutterBottom
                  >
                    {exp.location}
                  </Typography>
                  <Typography variant="h6" gutterBottom color="inherit">
                    {exp.designation.name}
                  </Typography>
                  <div className={classes.list}>
                    <Typography
                      component={Link}
                      variant="body1"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                      href={exp.company_link}
                    >
                      {exp.company_name}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

Resume.propTypes = {
  getEducation: PropTypes.func.isRequired,
  getExperience: PropTypes.func.isRequired,
  education: PropTypes.array.isRequired,
  experience: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  education: state.data.education,
  experience: state.data.experience,
});
const mapDispatchToProps = {
  getEducation,
  getExperience,
};

export default connect(mapStateToProps, mapDispatchToProps)(Resume);
