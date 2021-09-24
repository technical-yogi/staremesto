import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import { Typography } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import WhiteSidebarLogo from "../Core Assessment/Sidebar/WhiteSidebarLogo";
import { useAppDispatch } from "../../redux/store";
import arrowRight from "../../assets/arrowRight.svg";
import DetailPage from "./DetailPage";
import { getAllDomainsRequest } from "../../redux/slices/getAllDomainsSlice";

const drawerWidth = 303;

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
  settingsDiv: {
    display: "flex",
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#1071BA",
    "&::-webkit-scrollbar": { display: "inherit" },
  },

  profileContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    // marginRight: 100,
    // marginLeft: 100,
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
  number: {
    color: "#fff",
    fontSize: 16,
  },
  numberSelected: {
    color: "#1071BA",
    fontSize: 16,
  },
  rightSide: {
    width: "100%",
  },
  content: {
    margin: "10px",
  },
  circle: {
    border: "1px solid #1071BA",
    borderRadius: "50%",
    height: 22,
    width: 22,
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    background: "#fff",
  },
}));

const theme = createMuiTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});

const HumanResourceSecurity = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const [sideBarIndex, setSideBarIndex] = useState(0);
  const [selectedDomain, setSelectedDomain] = useState("");
  const domains = useSelector(
    (state: RootState) => state.allDomains.get_all_domains
  );
  useEffect(() => {
    const token = localStorage.getItem("Access_Token");
    if (token) {
      dispatch(getAllDomainsRequest({ access_token: token }));
    }
  }, []);

  const handleSideBar = (value: any, index: number) => {
    setSelectedDomain(value);
    setSideBarIndex(index);
  };

  console.log("fdsfsdd",domains)

  const newDomain =[
    "Information security policies",
    "Organization of information security",
    "Human resource security",
    "Asset management",
    "Access control",
    "Cryptography",
    "Physical and environmental security",
    "Operations security",
    "Communication security",
    "System acquisition, development and maintenance",
    "Supplier relationships",
    "Information security aspects of business continuity management",
    "Compliance",
   
]

  return (
    <>
      <ThemeProvider theme={theme}>
        <div>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper,
            }}
          >
            <WhiteSidebarLogo />
            <div style={{ marginTop: "15%" }}>
              {newDomain &&
                newDomain.map((value, index): any => {
                  return (
                    <div key={index}>
                      <div
                        className={
                          sideBarIndex === index
                            ? classes.optionDivSelected
                            : classes.optionDiv
                        }
                        onClick={() => handleSideBar(value, index)}
                      > <span className={classes.circle}>{index+1}</span>
                       
                        <span>
                          <Typography
                            className={
                              sideBarIndex === index
                                ? classes.numberSelected
                                : classes.number
                            }
                          ></Typography>
                        </span>
                        <div style={{ flex: 1 }}>
                          <Typography
                            className={
                              sideBarIndex === index
                                ? classes.optionTextSelected
                                : classes.optionText
                            }
                          >
                            {value}
                          </Typography>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: 15,
                          }}
                        >
                          <img
                            style={{ height: 12 }}
                            src={arrowRight}
                            alt="arrow"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </Drawer>
          <div style={{ marginLeft: "20.5%" }}>
            <DetailPage domain={selectedDomain} />
          </div>
        </div>
      </ThemeProvider>
    </>
  );
};

export default HumanResourceSecurity;
