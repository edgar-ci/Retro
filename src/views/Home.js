import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  Paper,
  Container,
  Modal,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  useStyles,
  CardTemplate,
  CardTemplateFooter,
  CardTemplateFooterCaption,
  CardTemplateFooterActions,
  CardTemplateBg,
} from "./Home.styles";
import VisibilityIcon from "@material-ui/icons/Visibility";

const templates = [
  {
    title: "Went Well - To Improve - Action Items",
    description: "is defined but never top was clearde",
  },
  {
    title: "Start Stop Continue Retrospective",
    description: "is defined but never top was clearde",
  },
  {
    title: "Sailboat Retrospective",
    description: "is defined but never top was clearde",
  },
  {
    title: "Liked, Learned, Lacked, & Longed For",
    description: "is defined but never top was clearde",
  },
  { title: "Original 4", description: "is defined but never top was clearde" },
  {
    title: "Thumbs up, Thumbs down, new ideas and recognition",
    description: "is defined but never top was clearde",
  },
  {
    title: "Happy - Meh - Sad",
    description: "is defined but never top was clearde",
  },
  {
    title: "Speed Car Retrospective",
    description: "is defined but never top was clearde",
  },
  {
    title: "Retro Básica",
    description: "is defined but never top was clearde",
  },
  {
    title: "KALM Retrospective",
    description: "is defined but never top was clearde",
  },
  {
    title: "Love - Want - Hate - Learn",
    description: "is defined but never top was clearde",
  },
];
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
const body = (
  <div>
    <h2 id="simple-modal-title">Text in a modal</h2>
    <p id="simple-modal-description">
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </p>
  </div>
);
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
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.modal}
      >
        <div className={classes.paper}>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Typography
              variant="subtitle1"
              gutterBottom
              className={classes.title}
            >
              Templates
            </Typography>
            <div className={classes.headerButtons}>
              <Button
                color="secondary"
                variant="text"
                onClick={() => setShowModal(false)}
              >
                Cancelar
              </Button>
              <Button color="primary" variant="contained">
                Nuevo
              </Button>
            </div>
          </Grid>
          <br />
          <Divider variant="middle" />
          <br />

          <Grid container spacing={2}>
            {templates.map((template, index) => (
              <Grid xs={4} item key={index.toString()}>
                <CardTemplate
                  style={{
                    backgroundImage: `url(https://picsum.photos/${
                      400 + index
                    }/200)`,
                  }}
                >
                  <CardTemplateBg />
                  <CardTemplateFooter>
                    <CardTemplateFooterCaption>
                      <Typography
                        variant="subtitle2"
                        gutterBottom
                        className={classes.title}
                      >
                        {template.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                      >
                        {template.description}
                      </Typography>
                    </CardTemplateFooterCaption>
                    <CardTemplateFooterActions>
                      <Button
                        color="primary"
                        variant="outlined"
                        size="small"
                        startIcon={<VisibilityIcon />}
                      >
                        Vista previa
                      </Button>
                      <Button color="primary" variant="contained" size="small">
                        Seleccionar
                      </Button>
                    </CardTemplateFooterActions>
                  </CardTemplateFooter>
                </CardTemplate>
              </Grid>
            ))}
          </Grid>
        </div>
      </Modal>
    </Container>
  );
};

export default Home;
