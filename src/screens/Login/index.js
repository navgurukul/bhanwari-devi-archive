import React from 'react';
import GoogleLogin from "react-google-login";
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Image from 'material-ui-image';
import logo from "../../assets/images/students.jpg";
import NgFetch from "../../utils/gadFetch"

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state =  {
      token:''
    }
  }
 
  responseGoogle = async (response) => {
    const opts = {
        "data": {
            idToken: response.tokenObj.id_token
        }
    }
    const { history } = this.props;
    console.log(history,"history");
    
    const res = await NgFetch('students/login/google', "POST", opts);
    console.log(res,"swathgjhtrj");
    
    localStorage.setItem('jwt', res.data.userToken)
    history.push('/addressForm')
  }
  render() {
    return <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      width="0%"
      style={{ minHeight: '100vh' }}
    >
      <Card>
        <Image
          src={logo}
          color="inherit"
          style={{ height: 250, width: 450, paddingTop: 0, flex: 1 }}
          imageStyle={{ height: 250, width: 450 }}
        />
        <Grid
          container
          spacing={1}
          alignItems="center"
          justify="center"
          style={{ minHeight: '20vh' }}
        >
          <Typography variant="body2" color="textSecondary" component="p">
            <GoogleLogin
              clientId="883673891408-gp177goh98bcut8mp4nt8d9bcqe8vg3b.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={this.responseGoogle}
              onFailure={this.responseGoogle} ></GoogleLogin>
          </Typography>
        </Grid>
        <Typography variant="h6" component="h6" style={{ textAlign: "center" }}>
          Phela Kadam Sapno ki aur Navgurukul ke saath
        </Typography>

      </Card>
    </Grid>
  }
};