import React, { Component } from 'react'
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core/';
import { withStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';

const useStyles = (theme => ({
    root: {
        maxWidth: 250,
        height: 250
    },
    media: {
        height: 150,
        width: 150,
        marginLeft: 45
    },
    paper: {
        marginTop: theme.spacing(7),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    root1: {
        flexGrow: 1,
        // padding: theme.spacing(2),
        marginTop: theme.spacing(8)
    },
    title: {
        flexGrow: 1,
    },
}));
export class GetAllStudentsDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentsDetails: []
        }
    }
    componentDidMount() {
        axios.get(
            "http://localhost:3000/students/details",
            {
                headers: {
                    'Authorization': localStorage.getItem("jwt")
                }
            })
            .then((response) => {
                this.setState({
                    studentsDetails: response.data.data
                })
            })
            .catch(error => {
                console.log(error, "error")
            })
    }
    render() {
        console.log(this.state.studentsDetails, "qwertyuiuoop")
        const { classes } = this.props;
        return (
            <div className={classes.paper}>
                {this.state.studentsDetails.map(filteredItem => (
                    <Container>
                        <div className={classes.root1}>
                            <Grid
                                container
                                spacing={2}
                                direction="row"
                                justify="flex-start"
                                alignItems="flex-start"
                            >
                                <Grid item xs={12} sm={6} md={3} spacing={5}>

                                    <Card style={{ padding: 15, background: "salmon" }}>
                                        <CardActionArea style={{ background: "lightsalmon", }}>
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Name {filteredItem.name}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Email {filteredItem.email}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    Parents Name {filteredItem.parents_name}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    City {filteredItem.city}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    State {filteredItem.state}
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    PIN {filteredItem.pin_code}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            </Grid>
                        </div>
                    </Container>
                ))
                }
            </div>
        )
    }
}

export default withStyles(useStyles)(GetAllStudentsDetails);