import React from "react";
import { Grid, Typography, Button, Modal, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import CardForTemplates from "./CardForTemplates";
import { Link } from "react-router-dom";
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
const useStyles = makeStyles((theme) => ({
  title: {
    lineHeight: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  paper: {
    width: "calc(100vw - 90px)",
    height: "calc(100vh - 70px)",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #dfdfdf",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: "4px",
    appearance: "none",
    outline: "none",
    overflow: "auto",
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center",
  },
  headerButtons: {
    width: "200px",
    display: "flex",
    justifyContent: "space-between",
  },
}));

const ModalNewBoard = ({ showModal, onClose }) => {
  const classes = useStyles();

  return (
    <Modal
      open={showModal}
      onClose={onClose}
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
            <Button color="secondary" variant="text" onClick={onClose}>
              Cancelar
            </Button>
            <Link
              to="/board-edit"
              component={Button}
              color="primary"
              variant="contained"
            >
              Nuevo
            </Link>
          </div>
        </Grid>
        <br />
        <Divider variant="middle" />
        <br />

        <Grid container spacing={2}>
          {templates.map((template, index) => (
            <Grid xs={4} item key={index.toString()}>
              <CardForTemplates
                title={template.title}
                description={template.description}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    </Modal>
  );
};

export default ModalNewBoard;
