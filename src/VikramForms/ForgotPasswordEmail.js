import React,{useState} from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper,  TextField, Button, Typography,Link } from '@mui/material';
import VectorNew from "./VectorNew.png"





const ForgotPassword=() =>  {

    const paperStyle={padding :20,height:'80vh',width:"max-content", margin:"20px auto"}


    const navigate = useNavigate();
    const [email,setEmail]=useState("");
    const location = useLocation();
   if(location.state!=null){
    console.log(location.state.user)
   }

   const onSubmit=event=>{
    event.preventDefault();
    console.log(email);
    axios({
        url:'https://po.keewesolutions.com/user/forgotpassword',
        method:'POST',
        data:{
        username:email,
        }
    })
    .then(
        (response) => {
            // console.log(response.data)
            navigate('/changepassword',{state:{user:email}});
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
                <h2>Forgot Password</h2>
                <h6>Verification Code will be sent on Email</h6>
            </Grid>
            <TextField 
            value={email}
            onChange={event=>setEmail(event.target.value)}
            variant="outlined" label='Enter Email' fullWidth required/>
            <Button type='submit'  variant="contained" style={{backgroundColor: "rgb(6, 33, 63)", color:"white", height:"56px",fontSize:"20px", marginTop:"10px", marginBottom:"10px"}} fullWidth>SEND CODE</Button>
            </form>
        </Paper>
)
}

export default ForgotPassword
    