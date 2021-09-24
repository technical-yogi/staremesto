import React, { useEffect } from "react";
import { Typography, makeStyles } from "@material-ui/core";
import DetailSection from "./DetailSection";
import { getStatementRequest } from "../../redux/slices/getStatementSlice";
import { useAppDispatch } from "../../redux/store";
import { DomainDisabled } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(8),
  },
  header: {
    fontWeight: "bold",
    fontSize: "36px",
    color: "#1071BA",
  },
  accordians: {
    paddingTop: theme.spacing(5),
  },
}));

const DetailPage = ({domain}:any) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  useEffect(() => {
      const token = localStorage.getItem("Access_Token")
      if(token){
          dispatch(getStatementRequest({access_token: token}));
      }
  }, [domain]);

  console.log(domain,"domain")

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.header}>
      {domain ? domain : "Information security policies"}
      </Typography>
      <div className={classes.accordians}>
        <DetailSection domain={domain ? domain : "Information security policies"} />
      </div>
    </div>
  )
};

export default DetailPage;
