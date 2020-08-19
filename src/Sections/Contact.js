import React, { useEffect } from "react";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

//Redux
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUserDetails, postResponses, closeForm } from "../redux/DataActions";

const useStyles = makeStyles((theme) => ({
  element: {
    marginBottom: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(2),
    fontWeight: "lighter",
  },
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
}));

const Contact = (props) => {
  const classes = useStyles();
  const {
    getUserDetails,
    user_detail,
    postResponses,
    errors,
    form_submitted,
    closeForm,
  } = props;
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const body = {
      name: name,
      email: email,
      message: message,
    };
    postResponses(body);
  };
  useEffect(() => {
    getUserDetails();
  }, [getUserDetails]);
  return (
    <div className={classes.section} id="contact">
      <div className={classes.mainTitle}>
        <Typography variant="h4" className={classes.firstFont}>
          Get
        </Typography>
        <Typography variant="h4" className={classes.secondFont}>
          In Touch
        </Typography>
      </div>
      <Grid container spacing={3}>
        <Grid item sm={8}>
          <Typography variant="h6" className={classes.title}>
            Get In Touch
          </Typography>
          {form_submitted === false ? (
            <form onSubmit={handleSubmit} noValidate>
              <TextField
                id="name"
                label="Name"
                variant="filled"
                fullWidth
                size="small"
                className={classes.element}
                onChange={(e) => setName(e.target.value)}
                helperText={errors ? errors.name : false}
                error={errors ? (errors.name ? true : false) : false}
                value={name}
              />
              <TextField
                label="email"
                variant="filled"
                fullWidth
                size="small"
                className={classes.element}
                onChange={(e) => setEmail(e.target.value)}
                helperText={errors ? errors.email : false}
                error={errors ? (errors.email ? true : false) : false}
                value={email}
              />
              <TextField
                helperText={errors ? errors.message : false}
                error={errors ? (errors.message ? true : false) : false}
                label="Write a Message"
                variant="filled"
                fullWidth
                multiline
                rows={5}
                size="small"
                className={classes.element}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
              <Button
                variant="contained"
                color="primary"
                className={classes.element}
                type="submit"
              >
                Submit
              </Button>
            </form>
          ) : (
            <Alert
              severity="success"
              onClose={() => {
                closeForm();
                setName("");
                setEmail("");
                setMessage("");
              }}
            >
              <AlertTitle>Success</AlertTitle>
              Thank You, I'll Get back to you soon!!
            </Alert>
          )}
        </Grid>
        <Grid item sm={4}>
          <Typography variant="h6" className={classes.title}>
            My Contact Details
          </Typography>
          <Typography variant="caption" color="secondary">
            EMAIL
          </Typography>
          <Typography variant="body1" className={classes.element}>
            {user_detail.email}
          </Typography>
          <Typography variant="caption" color="secondary">
            ADDRESS
          </Typography>
          <Typography variant="body1" className={classes.element}>
            {user_detail.address}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Contact.propTypes = {
  user_detail: PropTypes.object.isRequired,
  getUserDetails: PropTypes.func.isRequired,
  postResponses: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user_detail: state.data.user_detail,
  errors: state.data.errors,
  form_submitted: state.data.form_submitted,
});
const mapDispatchToProps = {
  getUserDetails,
  postResponses,
  closeForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
