import React from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const Home = () => {
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
        </Grid>
        <Grid container justify="center" spacing={2}>
          HOME
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
