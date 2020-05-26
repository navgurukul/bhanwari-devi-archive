import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button'

const styles = theme => ({

  paper: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(15),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
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

  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(55),
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
  };
  submit = () => {
    //Add the logic for validation
    //if data is valid
    if(this.state.email.length  > 0 && this.state.name.length > 0 && this.state.parents_name.length > 0 && this.state.address.length > 0 && this.state.city.length > 0  && this.state.state.length > 0 && this.state.pin_code > 0 ){
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
          console.log(Response,"swati");
          
          if (Response.data){
            this.props.enqueueSnackbar('Details succesfuly sended', {
              variant: 'success', anchorOrigin: {
                vertical: 'bottom',
                horizontal: 'left',
              }
            });
            this.setState({
            name: "",
            email: "",
            parents_name: "",
            address: "",
            city: "",
            state: "",
            pin_code: "",
  
          })
          const { history } = this.props;
          history.push('/getAllStudentsDetails')
  
          }
        })
    }else{
        this.props.enqueueSnackbar('First fill all the fields!', {
          variant: 'error', anchorOrigin: {
            vertical: "bottom",
            horizontal: 'left',
          }
        });
    }

      // .catch(error => {
      //   this.props.enqueueSnackbar('Something went wrong, Please try again!', {
      //     variant: 'error', anchorOrigin: {
      //       vertical: "bottom",
      //       horizontal: 'left',
      //     }
      //   });
      // })

      //if it's invalid , display error
  }
  render() {
    const { classes } = this.props;
    const states = [
      {label: 'Choose State'},
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
        <main className={classes.layout}>
          <Paper className={classes.paper}>
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
                <TextField required
                  id="Email"
                  name="email"
                  label="Email of student"
                  value={this.state.email}
                  onChange={(e) => this.onChange(e)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField required
                  id="parents"
                  name="parents_name"
                  label="Name of parents"
                  value={this.state.parents_name}
                  onChange={(e) => this.onChange(e)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField required
                  id="address"
                  name="address"
                  label="Address"
                  value={this.state.address}
                  onChange={(e) => this.onChange(e)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>

                <TextField required
                  id="city"
                  name="city"
                  label="City"
                  value={this.state.city}
                  onChange={(e) => this.onChange(e)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>

                <Autocomplete
                  id="combo-box-demo"
                  label="state"
                  options={states}
                  getOptionLabel={(option) => option.label}
                  onChange={(event, value) => this.setState({ state: value.label })}
                  renderInput={(params) => <TextField required {...params} label={"State"} />}
                />

              </Grid>

              <Grid item xs={12}>
                <TextField required
                  id="zip"
                  name="pin_code"
                  label="PIN"
                  value={this.state.pin_code}
                  onChange={(e) => this.onChange(e)}
                  fullWidth
                />
              </Grid>
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={this.submit}
                  className={classes.button}
                >
                  submit
          </Button>
              </div>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(withSnackbar(addressForm));