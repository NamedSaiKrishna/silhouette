import React from "react";
//MUI
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  contact: {
    marginTop: theme.spacing(5),
  },
}));

const Contact = () => {
  const classes = useStyles();
  return (
    <div className={classes.contact}>
      <Grid container spacing={3}>
        <Grid item xs={8}>
          <form>
            <TextField label="Name" variant="outlined" fullWidth size="small" />
          </form>
        </Grid>
        <Grid item xs={4}></Grid>
      </Grid>
    </div>
  );
};

export default Contact;
