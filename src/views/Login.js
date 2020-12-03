import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className="container-main"
    >
      <Grid item xs={9}>
        <Grid container justify="center">
          <Typography variant="h6" gutterBottom>
            Ingresa el código que se te envió al correo
          </Typography>
          <br />
          <br />
          <br />
        </Grid>
        <Grid container justify="center" spacing={2}>
          <Grid item xs={1}>
            <TextField id="outlined-basic" label="" variant="outlined" />
          </Grid>
          <Grid item xs={1}>
            <TextField id="outlined-basic" label="" variant="outlined" />
          </Grid>
          <Grid item xs={1}>
            <TextField id="outlined-basic" label="" variant="outlined" />
          </Grid>
          <Grid item xs={1}>
            <TextField id="outlined-basic" label="" variant="outlined" />
          </Grid>
          <Grid item xs={1}>
            <TextField id="outlined-basic" label="" variant="outlined" />
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container justify="center" spacing={2}>
          <Link as></Link>
          <Link
            to="/home"
            component={Button}
            variant="contained"
            color="primary"
          >
            Ingresar
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
