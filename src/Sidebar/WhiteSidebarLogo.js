import React from "react";
import white_logo from "../images/whiteLogo.svg";
import white_company_text from "../images/WhiteCompanyText.svg";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) =>
  createStyles({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    logoContainer: {
      marginTop: theme.spacing(5),
      marginLeft: theme.spacing(5),
    },
    image: {
      maxHeight: theme.spacing(11),
      maxWidth: theme.spacing(11),
      cursor: "pointer",
    },
    logoText: {
      maxHeight: theme.spacing(10),
      maxWidth: theme.spacing(16),
      marginLeft: theme.spacing(1),
      cursor: "pointer",
    },
  })
);
const WhiteSidebarLogo = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.toolbar}>
      <div className={classes.logoContainer}>
        <img src={white_logo} alt="Logo" className={classes.image} onClick={()=>history.push("/")} />
        <img src={white_company_text} alt="Logo" className={classes.logoText} onClick={()=>history.push("/")} />
      </div>
    </div>
  );
};
export default WhiteSidebarLogo;
