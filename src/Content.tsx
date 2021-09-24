import { useState, useEffect } from "react";
import { Grid, Typography, TextField, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { useAppDispatch } from "../../redux/store";
import AddDialog from "../UsersProfile/AddDialog";
import { usersListFetch } from "../../redux/slices/usersListSlice";
import AddUserDialog from "../UsersProfile/AddUserDialog";
import { getAllSoaUsers } from "../../redux/slices/getSoaUserSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 13,
    width: "135px",
    cursor: "pointer",
    borderBottom: "1px solid #e5e5e5",
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
  },
  gridContainer: {
    margin: "30px 0",
  },
  gridTitle: {
    margin: "0px 0",
  },
  sectionTitle: {
    fontSize: "16px",
    fontWeight: "bold",
  },
  select: {
    marginTop: "-1%",
  },
}));

const Content = ({ content }: any) => {
  const classes = useStyles();
  const [state, setState] = useState(0);
  const [editState, setEditState] = useState(false);
  const [applicability, setApplicability] = useState("");
  const [inclusion, setInclusion] = useState("");
  const [controlOwner, setControlOwner] = useState("");
  const access_token = localStorage.getItem("Access_Token"); 
  const dispatch = useAppDispatch();

  const [controlStatus, setControlStatus] = useState("");

  useEffect(() => {
    dispatch(getAllSoaUsers({ access_token }));
    let obj: any = {};

    content.map((i: any, index: any) => {
      obj["impStatus"] = i.implementation_status;
      obj["Applicability"] = i.applicability;
      obj["inclusion"] = i.source_for_inclusion;
    });
    setControlStatus(obj.impStatus);
    setApplicability(obj.Applicability);
    setInclusion(obj.inclusion);
  }, [content]);

  const userList = useSelector((state: RootState) => state.SoaUserList.get_soa_users);

  console.log(userList, "userlllllist");

  const handleChange = (event: any) => {
    setApplicability(event.target.value);
  };

  const handleChangeControlStatus = (event: any) => {
    setControlStatus(event.target.value);
  };
  const handleInclusionStatus = (event: any) => {
    setInclusion(event.target.value);
  };
  const handleControlOwnerStatus = (event: any) => {
    if (event.target.value === "Add New Control Owner") {
      setControlOwner(event.target.value);
      setEditState(true);
    } else {
      setControlOwner(event.target.value);
    }
  };

  const handleSelectControlOwner = (event: any) => {
    if (event?.target?.innerText === "Add New Control Owner") {
      setEditState(true);
    }
  };

  return (
    <div>
      <hr />
      <Grid container className={classes.gridContainer} spacing={2}>
        <Grid xs={3} container>
          <div className={classes.down}>
            <div>
              {content.map((item: any, index: any) => {
                return (
                  <div
                    className={
                      state === index ? classes.selectedBtn : classes.btn
                    }
                    onClick={(e) => setState(index)}
                  >
                    <Typography>{item.control_id}</Typography>
                  </div>
                );
              })}
            </div>
          </div>
        </Grid>

        {content.map((item: any, index: any) => {
          if (state === index) {
            return (
              <Grid xs={9} container>
                <Grid container spacing={1} className={classes.gridTitle}>
                  <Grid item xs={3}>
                    <Typography className={classes.sectionTitle}>
                      Control Title:
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography>{item.control_name}</Typography>
                  </Grid>
                </Grid>

                <Grid container className={classes.gridContainer} spacing={2}>
                  <Grid item xs={3}>
                    <Typography className={classes.sectionTitle}>
                      Control Description:
                    </Typography>
                  </Grid>
                  <Grid item xs={9}>
                    <Typography>{item.control_description}</Typography>
                  </Grid>
                </Grid>

                <Grid container className={classes.gridContainer} spacing={1}>
                  <Grid item xs={3}>
                    <Typography className={classes.sectionTitle}>
                      Applicability
                    </Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.select}>
                    <FormControl fullWidth>
                      <InputLabel>Applicability</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={applicability}
                        label="Applicability"
                        onChange={handleChange}
                      >
                        <MenuItem value={"Applicable"}>Applicable</MenuItem>
                        <MenuItem value={"Not Applicable"}>
                          Not Applicable
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={2} style={{ marginLeft: "6%" }}>
                    <Typography className={classes.sectionTitle}>
                      Control status
                    </Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.select}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Control status
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={item.implementation_status}
                        value={controlStatus}
                        label="Control status"
                        onChange={handleChangeControlStatus}
                      >
                        <MenuItem value={"Implemented"}>Implemented</MenuItem>
                        <MenuItem value={"Not Implemented"}>
                          Not Implemented
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container className={classes.gridContainer} spacing={1}>
                  <Grid item xs={3}>
                    <Typography className={classes.sectionTitle}>
                      Justification
                    </Typography>
                  </Grid>
                  <Grid item xs={9} className={classes.select}>
                    <TextField
                      id="standard-multiline-static"
                      multiline
                      rows={4}
                      value={item.justification}
                      variant="outlined"
                      fullWidth
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.gridContainer} spacing={1}>
                  <Grid item xs={3}>
                    <Typography className={classes.sectionTitle}>
                      Applicable document
                    </Typography>
                  </Grid>
                  <Grid item xs={9} className={classes.select}>
                    <TextField
                      id="standard-multiline-static"
                      multiline
                      value={item.applicable_documents}
                      rows={4}
                      variant="outlined"
                      fullWidth
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                </Grid>
                <Grid container className={classes.gridContainer} spacing={1}>
                  <Grid item xs={3}>
                    <Typography className={classes.sectionTitle}>
                      Source for Inclusion
                    </Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.select}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Source for Inclusion
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={inclusion}
                        label="Source for Inclusion"
                        onChange={handleInclusionStatus}
                      >
                        <MenuItem value={"Legal Requirement"} selected>
                          Legal Requirement
                        </MenuItem>
                        <MenuItem value={"Contractual Requirement"}>
                          Contractual Requirement
                        </MenuItem>
                        <MenuItem value={"Business Requirement"}>
                          Business Requirement
                        </MenuItem>
                        <MenuItem value={"Best Practice"}>
                          Best Practice
                        </MenuItem>
                        <MenuItem value={"Following Risk Assessment"}>
                          Following Risk Assessment
                        </MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={2} style={{ marginLeft: "6%" }}>
                    <Typography className={classes.sectionTitle}>
                      Control Owner
                    </Typography>
                  </Grid>
                  <Grid item xs={3} className={classes.select}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Control Owner
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={controlOwner}
                        label="Control Owner"
                        onChange={handleControlOwnerStatus}
                        onClick={handleSelectControlOwner}
                      >
                        <MenuItem value="Add New Control Owner">
                          Add New Control Owner
                        </MenuItem>
                        {userList?.map((user:any, index:any) => (
                          <MenuItem value={`${user.id}`} key={index}>
                            {user.first_name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid container className={classes.gridContainer} spacing={1}>
                  <Grid item xs={3}>
                    <Typography className={classes.sectionTitle}>
                      Comments
                    </Typography>
                  </Grid>
                  <Grid item xs={9} className={classes.select}>
                    <TextField
                      id="standard-multiline-static"
                      multiline
                      rows={4}
                      value={item.comments}
                      variant="outlined"
                      fullWidth
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                </Grid>
              </Grid>
            );
          }
        })}
      </Grid>
      <AddUserDialog
        setEditState={setEditState}
        editState={editState}
        addNewRiskOwner={false}
      />
    </div>
  );
};

export default Content;
