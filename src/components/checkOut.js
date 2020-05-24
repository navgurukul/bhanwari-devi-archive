import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressForm from "./addressForm";
import axios from "axios";
// import jwt_decode from "jwt-decode";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = (theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
});

const steps = ["First address", "Basic details", "Indemnity form"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    // case 1:
    //   return <AddressForm />;
    // case 2:
    //   return <Review />;
    // case 3:
    //   return<State/>
    default:
      throw new Error("Unknown step");
  }
}
export class Checkout extends Component {
  constructor() {
    super();
    this.state = {
      activeStep: 0,
      name: "",
      parents_name: "",
      address: "",
      city: "",
      state: "",
      pin_code: ""
    };
  }

  handleNext = (e) => {
    e.preventDefault();
    // const token = localStorage.getItem("token");
    // console.log(localStorage.getItem("token"), "tokan is ..");
    // const decoded = jwt_decode(token);
    // console.log(decoded, "decode.. lll");
    const token = localStorage.getItem("idToken");
    console.log("inside handleNext");
    console.log(token);
    console.log(this.state);
    const newUser = axios
    .post(
      "http://localhost:3000/students/details",
      {
        params:{
          name: this.state.name,
            parents_name: this.state.parents_name,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            pin_code: this.state.pin_code,
        },
        headers: {
          'Authorization': `Basic ${token}`
        }
      }
      )
    
    .then(Response => {
      console.log(Response,'kkkkk')
  })

  console.log(newUser)

  .catch(error =>{
      console.log(error,"komal")
  })

    this.setState({
      activeStep: this.state.activeStep + 1,
    });
  };

  handleBack = () => {
    this.setState({
      activeStep: activeStep - 1,
    });
  };

 



  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap></Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              NavGurukul
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button
                        onClick={this.handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? "Place order" : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
          <Copyright />
        </main>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(Checkout);