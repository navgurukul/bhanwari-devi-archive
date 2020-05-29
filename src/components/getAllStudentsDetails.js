import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
// import { red } from '@material-ui/core/colors';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import axios from "axios";
import { Grid } from "@material-ui/core";

const useStyles = (theme) => ({
  root: {
    maxWidth: 989,
    marginTop: 80,
    margin: theme.spacing(2),
  },

  papers: {
    display: "grid",
    gridTemplateColumns: "20% 20% 20%",
    justifyContent: "center",
  },

  media: {
    height: 140,
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
                <AccountCircleIcon
                  style={{ height: 100, width: 100, color: "gray" }}
                />
              </center>
              <CardContent>
                <Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    
                  >
                    Name e{filteredItem.name}
                  </Typography>

                  {/* <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ textAlign: "center" }}
                  >
                    Email {filteredItem.email}
                  </Typography> */}
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    
                  >
                    Parents Name {filteredItem.parents_name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    
                  >
                    City {filteredItem.city}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                   
                  >
                    State {filteredItem.state}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                   
                  >
                    PIN {filteredItem.pin_code}
                  </Typography>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Paper>
        ))}
      </Grid>
     
    );
  }
}
export default withStyles(useStyles)(GetAllStudentsDetails);

// import React, { Component } from "react";
// import axios from "axios";
// import Card from "@material-ui/core/Card";
// // import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import Typography from "@material-ui/core/Typography";
// import { Grid } from "@material-ui/core/";
// import { withStyles } from "@material-ui/core/styles";
// import AccountCircleIcon from "@material-ui/icons/AccountCircle";

// import Container from "@material-ui/core/Container";

// const useStyles = (theme) => ({
//   root: {
//     minWidth: 275,
//     marginTop: "20px",
//   },

//   papers: {
//     display: "grid",
//     gridTemplateColumns: "20% 20% 20%",
//     justifyContent: "center",
//   },
//   root1: {
//     // flexGrow: 1,

//     display: "flex",
//     // marginTop: theme.spacing(4),
//     marginLeft: theme.spacing(4),
//   },
//   title: {
//     flexGrow: 1,
//   },

//   card: {
//     width: "1100%",
//     // margin: theme.spacing(2),
//     marginTop: "30%",
//   },
// });
// export class GetAllStudentsDetails extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       studentsDetails: [],
//     };
//   }
//   componentDidMount() {
//     axios
//       .get("http://localhost:3000/students/details", {
//         headers: {
//           Authorization: localStorage.getItem("jwt"),
//         },
//       })
//       .then((response) => {
//         this.setState({
//           studentsDetails: response.data.data,
//         });
//       })
//       .catch((error) => {
//         console.log(error, "error");
//       });
//   }
//   render() {
//     console.log(this.state.studentsDetails);
//     const { classes } = this.props;
//     return (
//       <React.Fragment>
//         <Grid className={classes.papers} style={{ backgroundColor: "#F0F0F0" }}>
//           {this.state.studentsDetails.map((filteredItem, index) => (
//             <Container key={index}>
//               <div className={classes.root1}>
//                 <Card className={classes.card}>
//                   <CardContent>
//                     <Grid container spacing={1}>
//                       <Grid item xs={12}>
//                         <center>
//                           <AccountCircleIcon
//                             style={{ height: 100, width: 100, color: "gray" }}
//                           />
//                         </center>

//                       </Grid>
//                       <Grid item xs={12}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                           Name {filteredItem.name}
//                         </Typography>

//                       </Grid>
//                       <Grid item xs={12}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                           Email {filteredItem.email}
//                         </Typography>

//                       </Grid>
//                       <Grid item xs={12}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                           Parents Name {filteredItem.parents_name}
//                         </Typography>

//                       </Grid>
//                       <Grid item xs={12}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                           City {filteredItem.city}
//                         </Typography>

//                       </Grid>
//                       <Grid item xs={12}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                           State {filteredItem.state}
//                         </Typography>

//                       </Grid>
//                       <Grid item xs={12}>
//                         <Typography gutterBottom variant="h5" component="h2">
//                           PIN :-{filteredItem.pin_code}
//                         </Typography>

//                       </Grid>
//                     </Grid>
//                   </CardContent>
//                 </Card>
//               </div>
//             </Container>
//           ))}
//         </Grid>
//       </React.Fragment>
//     );
//   }
// }

// export default withStyles(useStyles)(GetAllStudentsDetails);

// import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
// import ButtonBase from "@material-ui/core/ButtonBase";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     margin: "auto",
//     maxWidth: 500,
//     marginTop: 120,
//   },
//   // image: {
//   //   width: 128,
//   //   height: 128,
//   // },
//   // img: {
//   //   margin: 'auto',
//   //   display: 'block',
//   //   maxWidth: '100%',
//   //   maxHeight: '100%',
//   // },
// }));

// export default function ComplexGrid() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <Paper className={classes.paper}>
//         <Grid container spacing={2} style={{ backgroundColor: "red" }}>
//           {/* <Grid item>
//             <ButtonBase className={classes.image}>
//               <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg" />
//             </ButtonBase>
//           </Grid> */}
//           <Grid item xs={12} sm container>
//             <Grid item xs container direction="column" spacing={2}>
//               <Grid item xs>
//                 <Typography gutterBottom variant="subtitle1">
//                   Standard license
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Full resolution 1920x1080 • JPEG
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary">
//                   ID: 1030114
//                 </Typography>
//               </Grid>
//               <Grid item>
//                 <Typography variant="body2" style={{ cursor: "pointer" }}>
//                   Remove
//                 </Typography>
//               </Grid>
//             </Grid>
//             <Grid item>
//               <Typography variant="subtitle1">$19.00</Typography>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Paper>
//     </div>
//   );
// }
