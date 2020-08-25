import React from "react";
//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Skeleton from "@material-ui/lab/Skeleton";

//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  section: {
    marginTop: theme.spacing(15),
  },
  mainTitle: {
    marginBottom: theme.spacing(3),
    display: "flex",
  },
  firstFont: {
    fontWeight: "lighter",
    marginRight: theme.spacing(1),
  },
  secondFont: {
    fontWeight: "bolder",
  },
  am: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
    },
    "& .image": {
      width: 380,
      height: 380,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "10%",
    },
  },
}));

const AboutMe = (props) => {
  const classes = useStyles();
  const {
    profile: { user_detail },
    loading,
  } = props;
  return (
    <div className={classes.section} id="about">
      <Grid container spacing={3}>
        <Grid item sm={6}>
          {loading ? (
            <Skeleton variant="rect" height={400} />
          ) : (
            <div className={classes.am}>
              <div className="image-wrapper">
                <img
                  src={user_detail.image}
                  alt="profile_pic"
                  className="image"
                />
              </div>
            </div>
          )}
        </Grid>
        <Grid item sm={6}>
          <div className={classes.mainTitle}>
            <Typography variant="h4" className={classes.firstFont}>
              About
            </Typography>
            <Typography variant="h4" className={classes.secondFont}>
              Me
            </Typography>
          </div>
          {loading ? (
            <Typography variant="body1">
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton width="60%" />
            </Typography>
          ) : (
            <Typography>{user_detail.description}</Typography>
          )}
        </Grid>
      </Grid>
    </div>
  );
};

AboutMe.propTypes = {
  profile: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.data.profile,
  loading: state.data.loading,
});

export default connect(mapStateToProps)(AboutMe);
