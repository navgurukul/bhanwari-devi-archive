import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import { withSnackbar } from 'notistack';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Button from '@material-ui/core/Button'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { connect } from 'react-redux';
import { changeFetching } from '../store/actions/auth';
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
      profile_pic: "",
      indemnity_form: "",
      fileType: "",
    }
  }

  fileChangedHandler = async (event) => {
    if (event.target.files[0].type === "application/pdf") {
      this.setState({
        fileType: "indemnityForm"
      })
    } else {
      this.setState({
        fileType: "profilePic"
      })
    }
    await this.UpdateProfileData(event.target.files[0])
  }

  UpdateProfileData = async (file) => {
    const formData = new FormData();
    formData.append('file', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    this.props.fetchingStart()
    axios.post('http://localhost:3000/students/details/upload_file/profilePic', formData, config)
      .then((res) => {
        if (this.state.fileType === "profilePic") {
          this.setState({
            profile_pic: res.data.fileUrl,
          })
          this.props.fetchingFinish()
        } else {
          this.setState({
            indemnity_form: res.data.fileUrl
          })
          this.props.fetchingFinish()
        }
      })

  }

  onChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  submit = () => {
    //Add the logic for validation
    //if data is valid
    const { email, name, parents_name, address, city, state, pin_code, profile_pic, indemnity_form } = this.state;
    if (email && name && parents_name && address && city && state && pin_code && profile_pic && indemnity_form) {
      delete this.state.fileType;
      console.log("What is the problam ? are you made?")
      axios.post(
        "http://localhost:3000/students/details", this.state,
        {
          headers: {
            'Authorization': localStorage.getItem("jwt")
          }
        })
        .then(Response => {
          console.log(Response, "swati");
          localStorage.setItem("user", JSON.stringify(Response.data.data[0]))
          if (Response.data) {
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
              profile_pic: "",
              indemnity_form: "",
              fileType: "",
            })
            const { history } = this.props;
            history.push('/getAllStudentsDetails')
          }
        })
    } else {
      this.props.enqueueSnackbar('First fill all the fields!', {
        variant: 'error', anchorOrigin: {
          vertical: "bottom",
          horizontal: 'left',
        }
      });
    }



    //if it's invalid , display error
  }

  fileUpload = () => <input id="file-upload" type="file" onChange={this.fileChangedHandler} />

  render() {

    const { classes } = this.props;
    const states = [
      { label: 'Choose State' },
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
            {this.state.profile_pic ? <center><img style={{ height: 150, width: 150, borderRadius: 100 }} src={this.state.profile_pic} /></center> : <center><AccountCircleIcon style={{ height: 100, width: 100, color: "gray" }} /></center>}
            <center>
              <label for="file-upload" className="file-upload"> Upload Profile</label>
              {this.fileUpload()}
            </center>
            <center>
              <Typography colour="primary" variant="h6" gutterBottom>
                Welcome to Navgurukul
            </Typography>
            </center>
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
                  renderInput={(params) => <TextField {...params} label={"State"} />}
                />

              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="zip"
                  name="pin_code"
                  type="number"
                  label="PIN"
                  maxlength="6"
                  value={this.state.pin_code}
                  placeholder="Integer"
                  onChange={(e) => this.onChange(e)}
                  fullWidth
                />
              </Grid>
              {this.state.indemnity_form &&
                <center><iframe
                  src={this.state.indemnity_form}
                  style={{ width: 570, height: 500, marginTop: 25, marginBottom: 25 }}
                  frameborder="0">
                </iframe></center>
              }
              <Grid item xs={12} xs={6}>
                <label for="file-upload" className="file-upload"> Upload Indemnity Form</label>
                {this.fileUpload()}
              </Grid>
              <Grid item xs={12} xs={6}>
                <div className={classes.buttons}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.submit}
                  >
                    submit
          </Button>
                </div>

              </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchingStart: () => dispatch(changeFetching(true)),
  fetchingFinish: () => dispatch(changeFetching(false))
});

export default connect(undefined, mapDispatchToProps)(withStyles(styles)(withSnackbar(addressForm)));