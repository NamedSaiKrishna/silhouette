import React, { useEffect } from "react";
//MUI
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserDetails } from "../redux/DataActions";

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
  const { getUserDetails, user_detail } = props;
  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);
  return (
    <div className={classes.section} id="about">
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <div className={classes.am}>
            <div className="image-wrapper">
              <img
                src={user_detail.image}
                alt="profile_pic"
                className="image"
              />
            </div>
          </div>
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
          <Typography>{user_detail.description}</Typography>
        </Grid>
      </Grid>
    </div>
  );
};

AboutMe.propTypes = {
  user_detail: PropTypes.object.isRequired,
  getUserDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user_detail: state.data.user_detail,
});
const mapDispatchToProps = {
  getUserDetails,
};

export default connect(mapStateToProps, mapDispatchToProps)(AboutMe);
