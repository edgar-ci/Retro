import React, { useState } from "react";
import { Grid, Typography, Button, Paper, Container } from "@material-ui/core";
import ModalNewBoard from "../components/Home/ModalNewBoard";
import { makeStyles } from "@material-ui/core";

const Boards = [
  {
    title: "Start Stop Continue",
    date: "01/01/2020",
    countUsers: 6,
    duration: "25:00",
  },
  {
    title: "Sailboat",
    date: "01/12/2020",
    countUsers: 6,
    duration: "15:00",
  },
  {
    title: "4Ls Retrospective - Liked, Learned, Lacked, & Longed For",
    date: "16/08/2020",
    countUsers: 9,
    duration: "18:04",
  },
];

const Boards2 = [];

const useStyles = makeStyles((theme) => ({
  card: {
    height: "100%",
    padding: "15px 10px",
  },
  title: {
    lineHeight: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  container: {
    height: 450,
  },
  containerFull: {
    height: "calc(100vh - 55px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "3px dashed #ddd",
    marginTop: "25px",
    borderRadius: "10px",
  },
  empty: {
    width: "300px",
    marginTop: "25px",
    height: "200px",
  },
}));

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  return (
    <Container>
      <Grid
        container
        className={Boards2.length ? classes.container : classes.containerFull}
        direction="row"
        justify="flex-start"
        alignItems="stretch"
        spacing={2}
      >
        {Boards2.length === 0 ? (
          <Button
            className={classes.empty}
            color="primary"
            variant="contained"
            onClick={() => setShowModal(true)}
          >
            Crear tablero
          </Button>
        ) : (
          Boards.map((el, index) => (
            <Grid item xs={3} key={index.toString()}>
              <Paper className={classes.card}>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  className={classes.title}
                >
                  {el.title}
                </Typography>
                <hr />
                <Typography variant="caption" display="block" gutterBottom>
                  {el.duration}min
                </Typography>
                <Typography variant="caption" display="block" gutterBottom>
                  {el.date}
                </Typography>
                <Button size="small" color="primary">
                  Ver
                </Button>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
      <ModalNewBoard
        showModal={showModal}
        onClose={() => setShowModal(false)}
      />
    </Container>
  );
};

export default Home;
