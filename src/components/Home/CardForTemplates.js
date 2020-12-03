import React from "react";
import { makeStyles } from "@material-ui/core";

import {
  CardTemplate,
  CardTemplateFooter,
  CardTemplateFooterCaption,
  CardTemplateFooterActions,
  CardTemplateBg,
} from "./CardForTemplates.styles";
import { Typography, Button } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

export const useStyles = makeStyles((theme) => ({
  title: {
    lineHeight: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
}));

const CardForTemplates = ({ title, description }) => {
  const classes = useStyles();

  return (
    <CardTemplate
      style={{
        backgroundImage: `url(https://picsum.photos/300/200)`,
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
            {title}
          </Typography>
          <Typography variant="caption" display="block" gutterBottom>
            {description}
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
  );
};

export default CardForTemplates;
