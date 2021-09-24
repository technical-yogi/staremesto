import { useState,useEffect} from "react";
import { makeStyles, withStyles, Theme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import arrowRight from "../images/arrowRight.svg";
import WhiteSidebarLogo from "../Sidebar/WhiteSidebarLogo";
import Hrs from "./hrs";
import {apiRequest} from "../action/index"
import {useDispatch} from "react-redux";


const drawerWidth = 303;

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    margin: 0,
    padding: 0,
  },
  settingsDiv: {
    display: "flex",
    // marginTop: 10,
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#1071BA",
  },
  optionDiv: {
    display: "flex",
    padding: 10,
    "&:hover": {
      cursor: "pointer",
    },
  },
  optionDivSelected: {
    display: "flex",
    background: "#fff",
    padding: 10,
    "&:hover": {
      cursor: "pointer",
    },
  },
  optionText: {
    color: "#fff",
    marginLeft: 15,
    fontSize: 16,
  },
  optionTextSelected: {
    color: "#1071BA",
    marginLeft: 15,
    fontSize: 16,
  },
  circle: {
    marginLeft: 46,
  },
  number: {
    color: "#fff",
    fontSize: 16,
  },
  numberSelected:{
    color: "#1071BA",
    fontSize: 16,
  },
  rightSide: {
    width: "100%",
  },
  content: {
    margin: "10px",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const HumanResourceSecurity = () => {
  const classes = useStyles();
  const [sideBarIndex, setSideBarIndex] = useState(0);
  const dispatch = useDispatch();
  const call = () => {
    dispatch(apiRequest());
  };
  useEffect(() => {
    dispatch(apiRequest());
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}  
          >
            <WhiteSidebarLogo />
            <div style={{ marginTop:20}}>
              <div
                className={
                  sideBarIndex === 0
                    ? classes.optionDivSelected
                    : classes.optionDiv
                }
                onClick={() => setSideBarIndex(0)}
              >
                <span>
                  <Typography className={sideBarIndex === 0 ? classes.numberSelected :classes.number}>A.5</Typography>
                </span>
                <div style={{ flex: 1 }}>
                  <Typography
                    className={
                      sideBarIndex === 0
                        ? classes.optionTextSelected
                        : classes.optionText
                    }
                  >
                    Information security policies and xyz
                  </Typography>
                </div>
                <div style={{display:"flex", alignItems:"center",marginLeft:15}}>
                  <img style={{ height: 12 }} src={arrowRight} alt="arrow" />
                </div>
              </div>

              <div
                className={
                  sideBarIndex === 1
                    ? classes.optionDivSelected
                    : classes.optionDiv
                }
                onClick={() => setSideBarIndex(1)}
              >
                <span>
                  <Typography className={sideBarIndex === 1 ? classes.numberSelected :classes.number}>A.5</Typography>
                </span>
                <div style={{flex: 1}}>
                  <Typography
                    className={
                      sideBarIndex === 1
                        ? classes.optionTextSelected
                        : classes.optionText
                    }
                  >
                    Information
                  </Typography>
                </div>
                <div style={{display:"flex", alignItems:"center",marginLeft:15}}>
                  <img style={{ height: 12 }} src={arrowRight} alt="arrow" />
                </div>
              </div>
            </div>
          </Drawer>
          {sideBarIndex === 0 && (
            <div style={{ marginLeft: "20.5%" }}>
              {" "}
              <Hrs />{" "}
            </div>
          )} 
        </div>
      </ThemeProvider>
    </>
  );
};

export default HumanResourceSecurity;
