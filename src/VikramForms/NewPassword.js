import React,{useState} from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper,  TextField, Button, Typography,Link, IconButton, FormControl, InputLabel } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import VectorNew from "./VectorNew.png"




const NewPassword=() =>  {

    const [password,setPassword]=useState("");
    const [showPassword, setShowPassword] = React.useState(false);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    
   


    const paperStyle={padding :50,height:'80vh',width:"min-content", margin:"20px auto"}


    const navigate = useNavigate();
    const [code,setCode]=useState("");
    const [newpassword,setNewpassword]=useState("");
    const location = useLocation();
   if(location.state!=null){
    console.log(location.state.user)
   }

   const onSubmit=event=>{
    event.preventDefault();
    axios({
        url:'https://po.keewesolutions.com/user/forgotpasswordchange',
        method:'POST',
        data:{
        username:location.state.user,
        code:code,
        newPassword:newpassword
        }
    })
    .then(
        (response) => {
            console.log(response)
        if(response.data==="SUCCESS"){
            navigate('/');
        }
        }
    );
    }
    return(
        <Paper elevation={10} style={paperStyle}>
            <form onSubmit={onSubmit}>
            <Grid align='center'>
               
                
                <div align="center">
                <img src={VectorNew} alt="image" style={{width: "-webkit-fill-available"}}/>
                </div>
                <h2>New Password</h2>
                <h6>Set new password for your account</h6>
            </Grid>
            <TextField 
            value={code}
            onChange={event=>setCode(event.target.value)}
            variant="outlined" label='Verify OTP' fullWidth required/>
            <FormControl fullWidth variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            label="password"
            onChange={event=>setNewpassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            value={newpassword}
            
            
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={()=>{setShowPassword(true)}}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            
          />
          </FormControl>
            <Button type='submit'  variant="contained" style={{backgroundColor:"#630000", color:"white", height:"56px",fontSize:"20px", marginTop:"10px", marginBottom:"10px"}} fullWidth>CONFIRM</Button>
            </form>
        </Paper>
)
}

export default NewPassword
    