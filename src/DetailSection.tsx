import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, makeStyles } from "@material-ui/core";
import Content from "./Content";
import { RootState } from "../../redux/rootReducer";
import { useSelector } from "react-redux";

export const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(10),
  },
  header: {
    fontWeight: "bold",
    fontSize: "36px",
    color: "#1071BA",
  },
  accordianRoot: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(1),
    boxShadow: "none !important",
  },
  accordians: {
    paddingTop: theme.spacing(10),
  },
  gridContainer: {
    margin: "30px 0",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  summary: {},
}));

const DetailSection = ({ domain }: any) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("");
  const [name, setName] = React.useState(" ");
  const state = useSelector(
    (state: RootState) => state.statementData.get_statement
  );

  const handleChange = (panel: string) => {
    setExpanded(expanded !== panel ? panel : "");
  };

  const controleName = (controls: any) => {
    const [name] = controls;
    return name.control_name || "";
  };
  console.log("sssssssssssssss", state);

  return (
    <div>
      {state &&
        state.map((value: any, index) => {
          console.log("domainnnn",domain, value.domainTitle)
          if (domain === value.domainTitle) {
          
            return (
              <div key={index}>
                {value.data.data.map((item: any, count: any) => {
                  console.log("itemmmmmmmm", item.data.data);
                  return (
                    <Accordion
                      expanded={expanded === `panel1${count}`}
                      onChange={() => handleChange(`panel1${count}`)}
                      className={classes.accordianRoot}
                    >
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                        className={classes.summary}
                      >
                        <Typography
                          variant="h5"
                          className={classes.sectionTitle}
                        >
                        {item.sectionTitle}  
                        
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Content content={item.data.data} />
                      </AccordionDetails>
                    </Accordion>
                  );
                })}
              </div>
            );
          }
        })}
    </div>
  );
};

export default DetailSection;
