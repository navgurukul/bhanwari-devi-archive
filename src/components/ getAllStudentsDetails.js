import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import axios from "axios";
import { Grid } from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    maxWidth: 1500,
    marginTop: 80,
    margin: theme.spacing(2),
    borderRadius:16,
   
  },

  papers: {
    display: "grid",
    gridTemplateColumns: "30% 30% 30%",
    justifyContent: "center",
  },

  media: {
    height: 140,
  },
  a: {
    display: "inline-block",
    paddingLeft: "20px",
    width: "180px",
    
  },
});

export class GetAllStudentsDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      studentsDetails: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3000/students/details", {
        headers: {
          Authorization: localStorage.getItem("jwt"),
        },
      })
      .then((response) => {
        this.setState({
          studentsDetails: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }

  render() {
    console.log(this.state.studentsDetails);
    const { classes } = this.props;

    return (
      <Grid className={classes.papers} style={{ backgroundColor: "#F0F0F0" }}>
        {this.state.studentsDetails.map((filteredItem, index) => (
          <Paper className={classes.root}>
            <CardActionArea>
            <center>
                <img
                   style={{ height: 130, width: 130, borderRadius: 100 ,marginTop:"20px"}}
                  src={filteredItem.profile_pic}
                />
              </center>
              {/* <center>
                <AccountCircleIcon 
                  style={{
                    height: 100,
                    width: 100,
                    color: "gray",
                    marginTop: "20px",
                  }}
                  
                />
              </center> */}

              <CardContent style={{ marginLeft: "20px" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a} style={{color:"#000000"}}
                >
                  Name:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a} style={{color:"#686868"}}
                >
                  {filteredItem.name}
                </Typography>
                <br />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a}
                  style={{ width: "180px", color:"#000000"}} 
                >
                  Parents Name:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a}style={{color:"#686868"}}
                >
                  {filteredItem.parents_name}
                </Typography>
                <br />
                {/* <Typography gutterBottom variant="h5" component="h2" className={classes.a}>
                  Email :
                </Typography>
                <Typography gutterBottom variant="h5" component="h2" className={classes.a}>
                  {filteredItem.email}
                </Typography> */}
                {/* <br/> */}
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a} style={{color:"#000000"}}
                >
                  Address :
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a}style={{color:"#686868"}}
                >
                  {filteredItem.address}
                </Typography>
                <br />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a} style={{color:"#000000"}}
                >
                  City:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a}style={{color:"#686868"}}
                >
                  {filteredItem.city}
                </Typography>
                <br />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a} style={{color:"#000000"}}
                >
                  State:
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a}style={{color:"#686868"}}
                >
                  {filteredItem.state}
                </Typography>
                <br />
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a} style={{color:"#000000"}}
                >
                  PIN :
                </Typography>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
                  className={classes.a}style={{color:"#686868"}}
                >
                  {filteredItem.pin_code}
                </Typography>
                {/* </div> */}
              </CardContent>
            </CardActionArea>
          </Paper>
        ))}
      </Grid>
    );
  }
}
export default withStyles(useStyles)(GetAllStudentsDetails);