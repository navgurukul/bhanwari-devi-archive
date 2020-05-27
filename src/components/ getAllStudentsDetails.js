import React, { Component } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core/";
import { withStyles } from "@material-ui/core/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Container from "@material-ui/core/Container";

const useStyles = (theme) => ({
    root: {
        minWidth: 275,
        marginTop: "20px",
    },

    papers: {
        display: "grid",
        gridTemplateColumns: "20% 20% 20%",
        justifyContent: "center",
    },
    root1: {
        // flexGrow: 1,

        display: "flex",
        // marginTop: theme.spacing(4),
        marginLeft: theme.spacing(4),
    },
    title: {
        flexGrow: 1,
    },

    card: {
        width: "600%",
        // margin: theme.spacing(2),
        marginTop: "30%"
       

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
            <React.Fragment>
                
                <Grid className={classes.papers} style={{ backgroundColor: '#F0F0F0'}}>
                    {this.state.studentsDetails.map((filteredItem, index) => (
                        <Container key={index} >
                            <div className={classes.root1} >
                                <Card className={classes.card} >
                                    <CardContent>

                                        <Grid container spacing={1}>
                                            <Grid item xs={12}>
                                                <center><AccountCircleIcon style={{ height: 100, width: 100, color: "gray" }} /></center>
                                                <hr></hr>
                                            </Grid>
                                            <Grid item xs={12}>

                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Name {filteredItem.name}
                                                </Typography>
                                                <hr></hr>
                                            </Grid>
                                            <Grid item xs={12}>

                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Email {filteredItem.email}
                                                </Typography>
                                                <hr></hr>
                                            </Grid>
                                            <Grid item xs={12}>

                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Parents Name {filteredItem.parents_name}
                                                </Typography>
                                                <hr></hr>
                                            </Grid>
                                            <Grid item xs={12}>

                                                <Typography gutterBottom variant="h5" component="h2">
                                                    City {filteredItem.city}
                                                </Typography>
                                                <hr></hr>
                                            </Grid>
                                            <Grid item xs={12}>

                                                <Typography gutterBottom variant="h5" component="h2">
                                                    State {filteredItem.state}
                                                </Typography>
                                                <hr></hr>
                                            </Grid>
                                            <Grid item xs={12}>

                                                <Typography gutterBottom variant="h5" component="h2">
                                                    PIN {filteredItem.pin_code}
                                                </Typography>
                                                <hr></hr>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </div>
                        </Container>
                    ))}
                </Grid>
                
                </React.Fragment>
        );
    }
}

export default withStyles(useStyles)(GetAllStudentsDetails);