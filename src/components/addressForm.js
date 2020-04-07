import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    '& > span': {
      marginRight: 100,
      fontSize: 18,
    },
  },
});


export default function AddressForm() {
  const classes = useStyles();
  return (
    <React.Fragment>
    
 
      <Typography colour ="primary" variant="h6"gutterBottom>
        Welcome to Navgurukul
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            id="Name"
            name="Name"
            label="Name of student"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="parents"
            name="parents"
            label="Name of parents"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>

        <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <Autocomplete
      id="state-select"
      options={countries}
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
        />
          </Grid>
      )}
    />
        </Grid>

        <Grid item xs={12}>
          <TextField
            id="zip"
            name="zip"
            label="PIN"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );

}
const countries = [
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