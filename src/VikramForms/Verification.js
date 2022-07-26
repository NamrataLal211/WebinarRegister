import React,{useState} from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper,  TextField, Button, Typography,Link } from '@mui/material';
import VectorNew from "./VectorNew.png"




const Verification=() =>  {

    const paperStyle={padding :20,height:'80vh',width:"max-content", margin:"20px auto"}


    const navigate = useNavigate();
    const [code,setCode]=useState("");
    const location = useLocation();
   if(location.state!=null){
    console.log(location.state.user)
   }

   const handleResendCode =()=>{
    axios({
        url:'https://po.keewesolutions.com/user/resendconfirmationcode',
        method:'POST',
        data:{
        username:location.state.user
        }
    })
    }


   const onSubmit=event=>{
    event.preventDefault();
    axios({
        url:'https://po.keewesolutions.com/user/confirm',
        method:'POST',
        data:{
        username:location.state.user,
        code:code
        }
    })
    .then(
        (response) => {
        if(response.data==="CodeMismatchException"){
            alert('Verification Code is incorrect')
        }
        else if(response.data==="SUCCESS"){
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
                <h2>Verification</h2>
                <h6>Verification Code send on Email</h6>
            </Grid>
            <TextField 
            value={code}
            onChange={event=>setCode(event.target.value)}
            variant="outlined" label='Verify OTP' fullWidth required/>
            <Button type='submit'  variant="contained" style={{backgroundColor:"#630000", color:"white", height:"56px",fontSize:"20px", marginTop:"10px", marginBottom:"10px"}} fullWidth>VERIFY</Button>
            <Grid align="center" >
            <Typography > Didn't receive OTP?
                 <Button onClick={handleResendCode} >
                    Resend Again
                 </Button>
            </Typography>
            </Grid>
            </form>
        </Paper>
)
}

export default Verification
    