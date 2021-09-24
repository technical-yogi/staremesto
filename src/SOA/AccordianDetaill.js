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
import jsondata from "./dummy _json";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
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

const AccordianDetaill = ({ acrdata }) => {
  console.log(acrdata, "newprops");

  const dummydata = jsondata;
  //   console.log(dummydata.domaintitle);
  const classes = useStyles();
  const tabbar = ["A.7.1", "A.7.2", "A.7.3", "A.7.4", "A.7.5"];
  const [boxcontent, setboxcontent] = useState(false);

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
  const [citem,setcitem] = useState([null]);

  const btnClicked = (index,clickeditem) => {
    setbtnselect(index);
    setboxcontent(!boxcontent);
     setcitem({clickeditem});
  };

  return (
    <div>
      <Divider style={{ marginTop: 5 }} />
      <div className={classes.down}>
        <div className={classes.left}>
          {acrdata.map((item, index) => {
           
            return (
              <div
                className={
                  btnselect === index ? classes.selectedBtn : classes.btn
                }
                onClick={() => btnClicked(index,item.data)}
              >
                <Typography>{item.key}</Typography>
                <img
                  src={btnselect === index ? arrowRightLight : arrowRight}
                  alt="arrow"
                />{" "}
              </div>
            );
          })}
        </div>
       {
         acrdata.map((item,index) =>
         {
           if(btnselect ===index)
           {
              item.data.map((con,index) =>
             {
               console.log(con,'itemmmmm')
             return(

              <Paper
              component={Box}
              ml="35px"
              p="20px 41px 20px 10px"
              height="941px"
              className={classes.showbox}
            >
              <div className={classes.div1}>
                <div className={classes.lc}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Control Title: 
                  </Typography>
                </div>
                <div className={classes.rc}>
                  <Typography style={{ fontWeight: 400, fontSize: 16 }}>
                  {con.content}
                  </Typography>
                </div>
              </div>
    
              <div className={classes.div1}>
                <div className={classes.lc}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Control Description:
                  </Typography>
                </div>
                <div className={classes.rc}>
                  <Typography style={{ fontWeight: 400, fontSize: 16 }}>
                    Background verification checks on all candidates for employment
                    shall be carried out in accordance with relevant laws,
                    regulations and ethics and shall be proportional to the business
                    requirements, the classification of the information to be
                    accessed and the perceived risks.
                  </Typography>
                </div>
              </div>
              <Divider />
              <div className={classes.div1}>
                <div className={classes.lc}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Applicability
                  </Typography>
                </div>
    
                <div className={classes.rc}>
                  <div className={classes.InclusionDropdown}>
                    <FormControl variant="outlined" className={classes.dropdown}>
                      <InputLabel>Applicability</InputLabel>
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        required
                        
                        onChange={(e) => storeData(e, "Applicability")}
                        value={{ label: "Active", value: "Active" }}
                        className={classes.sel}
                        placeholder="Applicability"
                      >
                        <MenuItem value={"Applicable"}>Applicable</MenuItem>
                        <MenuItem value={"Not Applicable"}>Not Applicable</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className={classes.r2}>Control Status</div>
                  <div className={classes.r3}>
                    <FormControl variant="outlined" className={classes.dropdown}>
                     
                      <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        required
                        
                        onChange={(e) => storeData(e, "controlStatus")}
                        className={classes.sel}
                        placeholder="Control Status"
                      >
                        <MenuItem value={"implemented"}>implemented</MenuItem>
                        <MenuItem value={"not implemented"}>
                          not Implemented
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </div>
              <Divider />
              <div className={classes.div1}>
                <div className={classes.lc}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Justification
                  </Typography>
                </div>
                
                <TextField
                  style={{ flex: 1 }}
                  id="outlined-required"
                  label="Comments"
                  variant="outlined"
                  multiline
                  rows={3.7}
                  onChange={(e) => storeData(e, "justification")}
                />
                
              </div>
              <div className={classes.div1}>
                <div className={classes.lc}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Applicable document
                  </Typography>
                </div>
                
                <TextField
                  style={{ flex: 1 }}
                  id="outlined-required"
                  placeholder="Enter your text"
                  variant="outlined"
                  multiline
                  rows={3.7}
                  onChange={(e) => storeData(e, "ApplicableDocument")}
                />
                
              </div>
              <div className={classes.div1}>
                <div className={classes.lc}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Source for Inclusion
                  </Typography>
                </div>
                <div className={classes.rc}>
                  <div className={classes.InclusionDropdown}>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="asd"
                      className={classes.sel}
                      fullWidth
                      onChange={(e) => storeData(e, "sourceForInclusion")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Implemented"}>Implemented</MenuItem>
                      <MenuItem value={"not Implemented"}>not Implemented</MenuItem>
                    </Select>
                  </div>
                  <div className={classes.r2}>Control owner</div>
                  <div className={classes.InclusionDropdown}>
                    <Select
                      labelId="demo-simple-select-helper-label"
                      id="demo-simple-select-helper"
                      label="asd"
                      className={classes.sel}
                      fullWidth
                      onChange={(e) => storeData(e, "controlowner")}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"risabh"}>risabh</MenuItem>
                      <MenuItem value={"aman"}>aman</MenuItem>
                      <MenuItem value={"niketan"}>niketan</MenuItem>
                    </Select>
                  </div>
                </div>
              </div>
              <div className={classes.div1}>
                <div className={classes.lc}>
                  <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                    Comments
                  </Typography>
                </div>
                <div className={classes.rcb}>
                  <TextField
                    style={{ flex: 1 }}
                    id="outlined-required"
                    label="Comments"
                    variant="outlined"
                    multiline
                    rows={3.7}
                    value={
                      "To preserve of information confidentiality, integrity and availability and meet interested parties expectation, Company shall screen employees, contractors in accordance with legalization requirements."
                    }
                    onChange={(e) => storeData(e, "comments")}
                  />
                  
                </div>
              </div>
            </Paper>

             )
                  })
           }
         })
       }
          
  
          
         

         {/* <Paper
          component={Box}
          ml="35px"
          p="20px 41px 20px 10px"
          height="941px"
          className={boxcontent ? classes.showbox : classes.showbox2}
        >
          <div className={classes.div1}>
            <div className={classes.lc}>
              <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                Control Title:
              </Typography>
            </div>
            <div className={classes.rc}>
              <Typography style={{ fontWeight: 400, fontSize: 16 }}>
                Screening
              </Typography>
            </div>
          </div>

          <div className={classes.div1}>
            <div className={classes.lc}>
              <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                Control Description:
              </Typography>
            </div>
            <div className={classes.rc}>
              <Typography style={{ fontWeight: 400, fontSize: 16 }}>
                Background verification checks on all candidates for employment
                shall be carried out in accordance with relevant laws,
                regulations and ethics and shall be proportional to the business
                requirements, the classification of the information to be
                accessed and the perceived risks.
              </Typography>
            </div>
          </div>
          <Divider />
          <div className={classes.div1}>
            <div className={classes.lc}>
              <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                Applicability
              </Typography>
            </div>

            <div className={classes.rc}>
              <div className={classes.InclusionDropdown}>
                <FormControl variant="outlined" className={classes.dropdown}>
                  <InputLabel>Applicability</InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    required
                    
                    onChange={(e) => storeData(e, "Applicability")}
                    value={{ label: "Active", value: "Active" }}
                    className={classes.sel}
                    placeholder="Applicability"
                  >
                    <MenuItem value={"Applicable"}>Applicable</MenuItem>
                    <MenuItem value={"Not Applicable"}>Not Applicable</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <div className={classes.r2}>Control Status</div>
              <div className={classes.r3}>
                <FormControl variant="outlined" className={classes.dropdown}>
                 
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    required
                    
                    onChange={(e) => storeData(e, "controlStatus")}
                    className={classes.sel}
                    placeholder="Control Status"
                  >
                    <MenuItem value={"implemented"}>implemented</MenuItem>
                    <MenuItem value={"not implemented"}>
                      not Implemented
                    </MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>
          </div>
          <Divider />
          <div className={classes.div1}>
            <div className={classes.lc}>
              <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                Justification
              </Typography>
            </div>
            
            <TextField
              style={{ flex: 1 }}
              id="outlined-required"
              label="Comments"
              variant="outlined"
              multiline
              rows={3.7}
              onChange={(e) => storeData(e, "justification")}
            />
            
          </div>
          <div className={classes.div1}>
            <div className={classes.lc}>
              <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                Applicable document
              </Typography>
            </div>
            
            <TextField
              style={{ flex: 1 }}
              id="outlined-required"
              placeholder="Enter your text"
              variant="outlined"
              multiline
              rows={3.7}
              onChange={(e) => storeData(e, "ApplicableDocument")}
            />
            
          </div>
          <div className={classes.div1}>
            <div className={classes.lc}>
              <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                Source for Inclusion
              </Typography>
            </div>
            <div className={classes.rc}>
              <div className={classes.InclusionDropdown}>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="asd"
                  className={classes.sel}
                  fullWidth
                  onChange={(e) => storeData(e, "sourceForInclusion")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Implemented"}>Implemented</MenuItem>
                  <MenuItem value={"not Implemented"}>not Implemented</MenuItem>
                </Select>
              </div>
              <div className={classes.r2}>Control owner</div>
              <div className={classes.InclusionDropdown}>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="asd"
                  className={classes.sel}
                  fullWidth
                  onChange={(e) => storeData(e, "controlowner")}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"risabh"}>risabh</MenuItem>
                  <MenuItem value={"aman"}>aman</MenuItem>
                  <MenuItem value={"niketan"}>niketan</MenuItem>
                </Select>
              </div>
            </div>
          </div>
          <div className={classes.div1}>
            <div className={classes.lc}>
              <Typography style={{ fontWeight: "bold", fontSize: 16 }}>
                Comments
              </Typography>
            </div>
            <div className={classes.rcb}>
              <TextField
                style={{ flex: 1 }}
                id="outlined-required"
                label="Comments"
                variant="outlined"
                multiline
                rows={3.7}
                value={
                  "To preserve of information confidentiality, integrity and availability and meet interested parties expectation, Company shall screen employees, contractors in accordance with legalization requirements."
                }
                onChange={(e) => storeData(e, "comments")}
              />
              
            </div>
          </div>
        </Paper>  */}
      </div>
    </div>
  );
};
export default AccordianDetaill;
