import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import EditIcon from "@material-ui/icons/Edit";
import { Grid, Button } from "@material-ui/core";
import AddressForm from "./addressForm";
import EmailIcon from '@material-ui/icons/Email';
import RoomSharpIcon from '@material-ui/icons/RoomSharp';
import DeleteIcon from '@material-ui/icons/Delete';
import Navbar from './navbar';
import NgFetch from "../utils/ngFetch"

const useStyles = theme => ({
  media: {
    width: 60,
    height: 60,
    borderRadius: 100,
    float: 'left',
    padding: 10
  },
  root: {
    flexGrow: 1,
    height: '100%',
    width: '100%',
    marginTop: '12%',
    [theme.breakpoints.up(1000 + theme.spacing(2) * 2)]: {
      width: 1000,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: '12%',


    },
    backgroundColor: '#DCDCDC',

  },
  paper: {
    padding: 4,
    textAlign: 'center',


  },

  padd: {
    padding: 20,
  },
  edit: {
    float: 'left',
    marginTop: -18,
    marginLeft: -20,
    '&:hover': {
      color: '#f05f40'
    }
  },
  name: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    fontWeight: 500,
    lineHeight: "1.2em",
    textTransform: 'capitalize',
    margin: 20,
    textAlign: 'center'
  },
  icons: {
    float: 'left',
    padding: 5,
    fontSize: 30,
    color: '#f05f40',
    paddingLeft: '5%',


  },
  email: {
    padding: '4% 0% 0% 7%',
    overflow: "hidden",
    textOverflow: "ellipsis",
    width: '17rem',
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,


  },
  location: {
    lineHeight: 1.6,
    textTransform: 'capitalize',
    width: '17rem',
    padding: '3% 0% 5% 19%',
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,

  },
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#f05f40",
    float: 'right',
    '&:hover': {
      backgroundColor: "#f05f40"
    }

  },

});

export class GetAllStudentsDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentsDetails: [],
      showForm: false,
    };
  }
  async componentDidMount() {
      await NgFetch("students/details",'GET', true)
      .then(response => {
        this.setState({
          studentsDetails: response.data.data
        });
      })
      .catch(error => {
        console.log(error, "error");
      });
  }

  submit = (studentData) => {
    this.setState({
      student: studentData,
      showForm: true,
    });
  };

  deleteCards = async (data,index ) => { 
    const Email = {
        email: data.email
      } 
    await NgFetch("students/details", "DELETE", Email, true)
    .then(res => {
        console.log(res, "delete")
      }).catch(error => {
        console.log(error, 'errrrrrrr')
      }) 
      const l = this.state.studentsDetails.splice(index,1)
      this.setState({
          studentsDetails:this.state.studentsDetails
      })
    }

  render() {
    const { classes } = this.props;

    if (this.state.showForm) {
      return <AddressForm student={this.state.student} />;
    } else {
      return (
      <>
          <Navbar />

          <div className={classes.root}>
            <Grid container spacing={24}>
              {this.state.studentsDetails.map((filteredItem, index) => {
                console.log(filteredItem.deleted,"DEERTR")
                if(filteredItem.deleted){
                  console.log(filteredItem.deleted)
                  return null
                }
                return (<Grid item xs={12} sm={6} key={index} className={classes.padd}>
                  <Paper className={classes.paper}>
                    <CardActionArea>
                      <img
                        className={classes.media}
                        src={filteredItem.profile_pic}

                      />

                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className={classes.name}

                      >
                        {filteredItem.name}
                      </Typography>
                      <p className={classes.edit}

                        onClick={() => this.submit(filteredItem)}
                      >
                        {" "}
                        <EditIcon />
                      </p>
                    </CardActionArea>
                    <div >
                      <CardActionArea >
                        <Typography className={classes.icons}>
                          <EmailIcon />
                        </Typography>
                        <Typography

                          className={classes.email}>

                          {filteredItem.email}
                        </Typography>
                      </CardActionArea>

                      <CardActionArea>
                        <Typography className={classes.icons}>
                          <RoomSharpIcon />
                        </Typography>
                        <Typography className={classes.location}>
                          {filteredItem.address}   {filteredItem.city} , {filteredItem.state}, {filteredItem.pin_code}
                        </Typography>
                      </CardActionArea>   
                    </div>
                    <CardActionArea >
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={() =>this.deleteCards(filteredItem,index)}
                      >
                        Delete
                      </Button>

                    </CardActionArea>

                  </Paper>
                </Grid>)
    })}

            </Grid>


          </div>

        </>





      );
    }
  }
}

export default withStyles(useStyles)(GetAllStudentsDetails);
