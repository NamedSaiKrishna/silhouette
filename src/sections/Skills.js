import React, { useEffect } from "react";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getSkills } from "../redux/DataActions";

//Component
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(15),
  },
  mainTitle: {
    justifyContent: "center",
    display: "flex",
    marginBottom: theme.spacing(6),
  },
  firstFont: {
    fontWeight: "lighter",
    marginRight: theme.spacing(1),
  },
  secondFont: {
    fontWeight: "bolder",
  },
  heading: {
    alignItems: "center",
  },
  skill: {
    padding: theme.spacing(4),
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
    },
    "& .image": {
      width: 110,
      height: 110,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
    },
  },
}));

const Skills = (props) => {
  const classes = useStyles();
  const { getSkills, skills } = props;
  useEffect(() => {
    getSkills();
  }, [getSkills]);
  return (
    <div className={classes.section} id="skills">
      <div className={classes.mainTitle}>
        <Typography variant="h4" className={classes.firstFont}>
          My
        </Typography>
        <Typography variant="h4" className={classes.secondFont}>
          Skills
        </Typography>
      </div>
      <Paper className={classes.paper}>
        <div className={classes.skill}>
          <Grid container justify="center" spacing={3}>
            {skills.map((skill, i) => (
              <Grid item sm={2} key={i}>
                <div className="image-wrapper">
                  <img src={skill.image} alt="pic" className="image" />
                  <Typography>{skill.name}</Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </div>
      </Paper>
    </div>
  );
};
Skills.propTypes = {
  skills: PropTypes.array.isRequired,
  getSkills: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  skills: state.data.skills,
});
const mapDispatchToProps = {
  getSkills,
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
