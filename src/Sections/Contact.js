import React from "react";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  contact: {
    marginTop: theme.spacing(5),
  },
  textField: {
    marginTop: theme.spacing(2),
  },
  mainTitle: {
    textAlign: "center",
  },
}));

const details = [
  {
    label: "EMAIL",
    details: "saikrishna.k495@gmail.com",
  },
  {
    label: "ADDRESS",
    details: "Hasmathpet, Old Bowenpally, Secunderabad, Telangana - 500009",
  },
];

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <Typography className={classes.mainTitle}>Get In Touch</Typography>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <Typography>Get In Touch</Typography>
          <form>
            <TextField
              label="Name"
              variant="filled"
              fullWidth
              size="small"
              className={classes.textField}
            />
            <TextField
              label="email"
              variant="filled"
              fullWidth
              size="small"
              className={classes.textField}
            />
            <TextField
              label="Write a Message"
              variant="filled"
              fullWidth
              multiline
              rows={5}
              size="small"
              className={classes.textField}
            />
            <Button
              variant="contained"
              color="primary"
              className={classes.textField}
            >
              Submit
            </Button>
          </form>
        </Grid>
        <Grid item xs={4}>
          <Typography>My Contact Details</Typography>
          {details.map((detail) => (
            <div>
              <Typography className={classes.textField}>
                {detail.label}
              </Typography>
              <Typography>{detail.details}</Typography>
            </div>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
