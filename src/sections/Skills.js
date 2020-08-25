import React from "react";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Skeleton from "@material-ui/lab/Skeleton";
import Avatar from "@material-ui/core/Avatar";

//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

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
  const {
    profile: { skills },
    loading,
  } = props;
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
            {loading
              ? [...Array(5)].map((a, i) => (
                  <Grid item sm={2} key={i}>
                    <Skeleton variant="circle">
                      <Avatar className="image" />
                    </Skeleton>
                  </Grid>
                ))
              : skills.map((skill, i) => (
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
  profile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.data.profile,
  loading: state.data.loading,
});

export default connect(mapStateToProps)(Skills);
