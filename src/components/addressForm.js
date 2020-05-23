import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import NgFetch from "../utils/gadFetch";
import axios from 'axios';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button'

const styles = theme => ({

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
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 100,
      fontSize: 18,
    },
  },
});

export class addressForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      parents_name: "",
      address: "",
      city: "",
      state: "",
      pin_code: "",
    }
  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state)
  };
  submit = async () => {
    // by using NgFetch --
    // axios({
    //   url: "urlname",
    //   method: "POST",
    //   data: {

    //   },
    //   headers: {
    //     "Authorization": "JWt"
    //   }
    // })
    // by using axios--
    // axios.post("url", {}, {headers: {"Authentication": "toen"}})

    // const token = localStorage.getItem("token");
    // console.log(token,"Swati");
    // const res = await NgFetch('students/details', "POST", { data: {
    //     email: this.state.email,
    //     name: this.state.name,
    //     parents_name: this.state.parents_name,
    //     address: this.state.address,
    //     city: this.state.city,
    //     state: this.state.state,
    //     pin_code: this.state.pin_code,
    //   },
    // });
    // console.log(res, "I am Swati") 

    axios.post(
      "http://localhost:3000/students/details", {
      email: this.state.email,
      name: this.state.name,
      parents_name: this.state.parents_name,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      pin_code: this.state.pin_code,
    },
      {
        headers: {
          'Authorization': localStorage.getItem("jwt")
        }
      })
      .then(Response => {
        console.log(Response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }
  render() {
    const { classes } = this.props;
    const states = [
      { label: 'Andhra Pradesh' },
      { label: 'Arunachal Pradesh' },
      { label: 'Assam' },
      { label: 'Bihar' },
      { label: 'Chhattisgarh' },
      { label: 'Goa' },
      { label: 'Gujarat' },
      { label: 'Himachal Pradesh' },
      { label: 'Jharkhand' },
      { label: 'Karnataka' },
      { label: 'Kerala' },
      { label: 'Madhya Pradesh' },
      { label: 'Maharashtra	' },
      { label: 'Manipur' },
      { label: 'Meghalaya' },
      { label: 'Mizoram' },
      { label: 'Nagaland' },
      { label: 'Odisha' },
      { label: 'Punjab' },
      { label: 'Rajasthan' },
      { label: 'Sikkim' },
      { label: 'Tamil Nadu' },
      { label: 'Telangana' },
      { label: 'Tripura' },
      { label: 'Uttar Pradesh	' },
      { label: 'Uttarakhand' },
      { label: 'West Bengal' },  
    ];
    return (
      <React.Fragment>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            NavGurukul
           </Typography>
          <Typography colour="primary" variant="h6" gutterBottom>
            Welcome to Navgurukul
      </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="Name"
                name="name"
                label="Name of student"
                value={this.state.name}
                onChange={(e) => this.onChange(e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="Email"
                name="email"
                label="Email of student"
                value={this.state.email}
                onChange={(e) => this.onChange(e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="parents"
                name="parents_name"
                label="Name of parents"
                value={this.state.parents_name}
                onChange={(e) => this.onChange(e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address"
                name="address"
                label="Address"
                value={this.state.address}
                onChange={(e) => this.onChange(e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>

              <TextField
                id="city"
                name="city"
                label="City"
                city={this.state.city}
                onChange={(e) => this.onChange(e)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Autocomplete
                id="state-select"
                options={states}
                classes={{
                  option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option.label}


                renderInput={(params) => (
                <Grid item xs={12}>

                <TextField
                {...params}
                id="state"
                name="state"
                label="State"
                value={this.state.state}
                onChange={(e) => this.onChange(e)}
                fullWidth
              />
              </Grid>
              
      )}
    /> 
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="zip"
                name="pin_code"
                label="PIN"
                value={this.state.pin_code}
                onChange={(e) => this.onChange(e)}
                fullWidth
              />
            </Grid>

            <Button
              variant="contained"
              color="primary"
              onClick={this.submit}
            >
              submit
          </Button>

          </Grid>
        </Paper>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(addressForm);