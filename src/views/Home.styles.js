import { makeStyles } from "@material-ui/core";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
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

export const CardTemplateFooter = styled.footer`
  width: 100%;
  overflow: hidden;
  position: absolute;
  transform: translateY(140px);
  transition: transform 150ms ease-in-out;

  > span {
    background-color: #fff;
  }
`;

export const CardTemplateFooterCaption = styled.span`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  background-color: rgba(255, 255, 255, 1);
  padding: 10px;
  transition: all 100ms ease-in-out;
`;

export const CardTemplateFooterActions = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 1);
  padding: 10px;
`;

export const CardTemplateBg = styled.i`
  background-color: rgba(77, 77, 89, 0.7);
  box-shadow: inset 0 0 80px 30px rgba(77, 77, 89, 0.8);
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 150ms ease-in-out;
  top: -10px;
`;

export const CardTemplate = styled.div`
  box-shadow: 0 1px 4px -1px rgba(51, 51, 51, 0.25);
  background-color: #fff;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-size: contain;
  &:hover {
    ${CardTemplateFooterCaption} {
      color: #fff;
      background-color: rgba(255, 255, 255, 0);
    }

    ${CardTemplateFooter} {
      transform: translateY(88px);
    }
    ${CardTemplateBg} {
      opacity: 1;
    }
  }
`;
