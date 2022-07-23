import React from 'react';
import {Grid, TextField, Typography,FormControlLabel, FormGroup, FormControl, Checkbox, Button } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function RegisterTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Register" {...a11yProps(0)} />
          <Tab label="Sign In" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Register/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignIn/>
      </TabPanel>
    
    </Box>
  );
}


// Register page section

function Register(){
  return(
    <Grid container>
       <Grid item xs={12} marginBottom='2%'>
       <Typography variant='h7' fontFamily='sans-serif'><b>Full Name</b></Typography>
       <div><TextField id="outlined-basic" label="Fullname" variant="outlined" sx={{width:'70%'}}/></div>
       
     
       </Grid>
       <Grid item xs={12} marginBottom='2%'>
       <Typography variant='h7' fontFamily='sans-serif'><b>Email</b></Typography>
       <div><TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'70%'}}/></div>
     
       </Grid>
       <Grid item xs={12} marginBottom='2%'>
       <Typography variant='h7' fontFamily='sans-serif'><b>Password</b></Typography>
       <InputAdornments/>
     
       </Grid>
       <Grid item xs={12} marginBottom='2%'>
       <Typography variant='h7' fontFamily='sans-serif'><b>Contact</b></Typography>
       <div><TextField id="outlined-basic" label="10 digit phone number" variant="outlined" sx={{width:'70%'}}/></div>
     
       </Grid>
       <Grid item lg={8} xs={8} sm={8} md={8}>
          <FormControlLabelPosition />
        </Grid>
        
        <Grid item lg={8} xs={8} sm={8} md={8} sx={{ textAlign: 'justify' }}>
          <Typography sx={{ fontSize: "12px", marginBottom: "10px", textAlign: 'justify',fontFamily:'sans-serif' }}>
            By creating an account you agree to honour the code and terms of service. MRSPTU has rights to process your personal data as per the Privacy Policy.
          </Typography>
        </Grid>

        <Grid item lg={8} xs={8} sm={8} md={8} >
          <Button variant='contained' sx={{borderRadius:'0px', fontFamily:'sans-serif', fontSize:'16px', fontWeight:'bold', backgroundColor:'#1A3C40'}}>
            Create Account
          </Button>
        </Grid>
    </Grid>
  )
}




// Checkbox component



function FormControlLabelPosition() {
  return (
    <FormControl component="fieldset" sx={{ marginTop: "10px" }}>
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="end"
          control={<Checkbox />}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "18px",
              fontFamily:'sans-serif'
            }
          }}
          label="I agree to abide by all the terms and conditions."
          labelPlacement="I agree to abide by all the terms and conditions."
        />
      </FormGroup>
    </FormControl>
  );
}


function InputAdornments() {
  const [values, setValues] = React.useState({
   
    password: '',
    
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <Grid container>
      
        <Grid item xs={12}>
        <FormControl sx={{ width: '70%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        </Grid>
      </Grid>
      
      
    </Box>
  );
}

// sign in page section


function SignIn(){
  return(
    <Grid container>
    
    <Grid item xs={12} marginBottom='2%'>
    <Typography variant='h7' fontFamily='sans-serif'><b>Email</b></Typography>
    <div><TextField id="outlined-basic" label="Email" variant="outlined" sx={{width:'70%'}}/></div>
  
    </Grid>
    <Grid item xs={12} marginBottom='2%'>
    <Typography variant='h7' fontFamily='sans-serif ' ><b>Password</b></Typography>
    <InputAdornments/>
  
    </Grid>

    <Grid item lg={8} xs={8} sm={8} md={8} marginTop='2%'>
          <Button variant='contained' sx={{borderRadius:'0px', fontFamily:'sans-serif', fontSize:'16px', fontWeight:'bold', backgroundColor:'#1A3C40', marginRight:'1%'}}>
            Sign In 
          </Button>
          <Typography variant='h7' fontFamily='sans-serif'>Forgot Password ?</Typography>
        </Grid>
    </Grid>
  )
}