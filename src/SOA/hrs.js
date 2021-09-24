import { useState } from "react";
import { makeStyles, withStyles, Theme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import arrowRight from "../images/arrowRight.svg";
import arrowRightLight from "../images/arrowRightLight.svg";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Height } from "@material-ui/icons";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { findByLabelText } from "@testing-library/react";
import Divider from "@mui/material/Divider";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AccordianDetaill from "./AccordianDetaill";
import jsondata from "./dummy _json";

const useStyles = makeStyles((theme) => ({
  root: {
   
    margin: 0,
    padding: 0,
  },
  settingsDiv: {
    display: "flex",
  },
  content: {
    marginTop: "69px",
    marginRight: "60px",
    marginLeft: "55px",
  },
  titleColor: {
    color: "#1071BA",
    // fontSize: "36px",
  },
  subtitle: {
    marginTop: "29px",
    display: "flex",
    flexDirection: "row",
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 13,
    width: "135px",
    cursor: "pointer",
  },
  selectedBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    padding: 13,
    width: "135px",
    backgroundColor: "#1071BA",
    color: "#FFFFFF",
    cursor: "pointer",
  },
  down: {
    display: "flex",
    marginTop: "46px",
  },
  down2: {
    display: "none",
  },
  showbox: {
    display: "block",
    padding: "80px 0 !important",
  },
  showbox2: {
    display: "none",
  },
  right: {
    marginLeft: "50px",
    border: "1px solid grey",
  },
  div1: {
    display: "flex",
    // alignItems:"center",
    marginLeft: "10px",
    paddingBottom: "23px",
    marginTop: 40,
  },
  lc: {
    minWidth: "220px",
  },
  rc: {
    //   marginLeft:"68px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  rcb: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    border: "1px solid #D2D2D2",
    // height: "109px",
  },
  sel: {
    borderRadius: 8,
  },
  dropdown: {
    width: "177px",
    color: "#1071BA",
    [`& fieldset`]: {
      borderRadius: 8,
    },
  },
  hr: {
    color: "#D2D2D2",
    marginBottom: "24px",
  },
  icon: {
    color: "#1071BA",
  },
  tittle: {
    display: "none",
  },
  tittle2: {
    display: "blcok",
  },
  left: {},
  r2: {
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "bold",
  },
  r3: {},
  InclusionDropdown: {
    width: "30%",
  },
}));
const Hrs = () => {
  const classes = useStyles();
  const tabbar = ["A.7.1", "A.7.2", "A.7.3", "A.7.4", "A.7.5"];
  const [content, setcontent] = useState(false);
  const [boxcontent, setboxcontent] = useState(false);
  const dummydata = jsondata;

  const [data, setData] = useState({
    Applicability: "",
    controlStatus: "",
    justification: "",
    ApplicableDocument: "",
    sourceForInclusion: "",
    controlowner: "",
    comments: " ",
  });

  const storeData = (e, key) => {
    setData({ ...data, [key]: e.target.value });
  };

  const [btnselect, setbtnselect] = useState(0);

  const btnClicked = (index) => {
    setbtnselect(index);
    setboxcontent(!boxcontent);
  };

  const changeState = (e, key) => {
    setcontent(!content);
  };
  return (
    <div className={classes.content}>
      <Typography variant="h3" className={classes.titleColor}>
         {dummydata.domaintitle}
      </Typography>
         {
         dummydata.data.map((accordianValue,index) =>
         {
           return(
            <Accordion
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {/* {content ? (
                  <ArrowDropUpIcon style={{ color: "#1071BA" }} />
                ) : (
                  <ArrowDropDownIcon style={{ color: "#1071BA" }} />
                )} */}
                <Typography
                  style={{ marginLeft: "14px", fontSize: 18, fontWeight: 600 }}
                >
                  {accordianValue.subtitleKey}
                </Typography>
                <Typography
                  style={{ marginLeft: "14px", fontSize: 18, fontWeight: 600 }}
                >
                  {accordianValue.subtitleValue}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <AccordianDetaill acrdata={accordianValue.data}/>
              </AccordionDetails>
            </Accordion>         
           )
         }
         )}            
    </div>
  );
};
export default Hrs;
