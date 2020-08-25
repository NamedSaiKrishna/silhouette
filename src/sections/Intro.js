import React, { useEffect } from "react";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import "../index.css";
import Skeleton from "@material-ui/lab/Skeleton";

//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserDetails, getBackgroundPicture } from "../redux/DataActions";

const useStyles = makeStyles((theme) => ({
  heroImage: {
    minHeight: "100vh",
    backgroundImage: "",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
  },
  heroText: {
    textAlign: "center",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    color: "white",
  },
  firstFont: {
    fontWeight: "lighter",
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      fontSize: 25,
    },
  },
  secondFont: {
    fontWeight: "bolder",
    [theme.breakpoints.down("xs")]: {
      fontSize: 35,
    },
  },
}));

const Intro = (props) => {
  const classes = useStyles();
  const {
    getUserDetails,
    getBackgroundPicture,
    user_detail,
    background_picture,
    loading,
  } = props;
  useEffect(() => {
    getUserDetails();
    getBackgroundPicture();
  }, [getUserDetails, getBackgroundPicture]);
  return (
    <div>
      {loading ? (
        <Skeleton variant="rect" className={classes.heroImage} />
      ) : (
        <div
          id="home"
          className={classes.heroImage}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)),url(${background_picture.image})`,
          }}
        >
          <div className={classes.heroText}>
            <Typography variant="h3" className={classes.firstFont}>
              Hello, I'm
            </Typography>
            <Typography variant="h2" className={classes.secondFont}>
              {user_detail.name}
            </Typography>
          </div>
        </div>
      )}
    </div>
  );
};
Intro.propTypes = {
  user_detail: PropTypes.object.isRequired,
  background_picture: PropTypes.object.isRequired,
  getBackgroundPicture: PropTypes.func.isRequired,
  getUserDetails: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user_detail: state.data.user_detail,
  background_picture: state.data.bacground_picture,
  loading: state.data.loading,
});
const mapDispatchToProps = {
  getBackgroundPicture,
  getUserDetails,
};
export default connect(mapStateToProps, mapDispatchToProps)(Intro);
