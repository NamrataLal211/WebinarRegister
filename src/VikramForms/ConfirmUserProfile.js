import React,{useContext, useState} from "react";
import {useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Grid,Paper,  TextField, Button, Typography,Link } from '@mui/material';
import VectorNew from "./VectorNew.png"
import { Context } from "../App";




const ConfirmUserProfile=() =>  {
    const {authState,setAuthState}=useContext(Context);

    const paperStyle={padding :20,height:'80vh',width:"max-content", margin:"20px auto"}


    const navigate = useNavigate();
    const [password,setPassword]=useState("");
    const location = useLocation();
   if(location.state!=null){
    console.log(location.state.user)
   }


   const onSubmit=event=>{
    event.preventDefault();
    console.log("2")
    console.log(location.state.user)
    console.log(password);
    axios({
        url:'https://po.keewesolutions.com/user/confirmUpdate',
        method:'POST',
        data:{
        username:location.state.user,
        password:password
        }
    })
    .then(
        (response) => {
        if(response.data==="InvalidPassword"){
            alert('Password is incorrect')
        }
        else if(response.status===200){
            console.log(authState);
            if(response.data.accessToken !== undefined){
                localStorage.setItem("PO",JSON.stringify(response.data))
                let userData = response.data
                console.log(response.data)
                let newUserContext={
                  authenticated: true,
                  user: {},
                }
                let newUser = {
                  id: userData.idToken.payload['cognito:username'],
                  email: userData.idToken.payload.email,
                  website:userData.idToken.payload.website,
                  idToken: userData.idToken.jwtToken,
                  refreshToken: userData.refreshToken
                }
                newUserContext.user = newUser
                setAuthState(newUserContext)
                
                let localStorageObject = JSON.stringify({
                  isAuthenticated: true,
                  user: newUser
                })
                localStorage.setItem("keewe.PO", localStorageObject)
                // if(userData.idToken.payload.website!="done"){
                //   navigate("/payment");
    
                // }else{
                navigate('/')
                // }
              }
            window.reload();
        }
        }
    )
    console.log("#");
   }
    return(
        <Paper elevation={10} style={paperStyle}>
            <form onSubmit={onSubmit}>
            <Grid align='center'>
               
                
                <div align="center">
                <img src={VectorNew} alt="image" style={{width: "-webkit-fill-available"}}/>
                </div>
                <h2>Verification</h2>
                <h6>Enter Password</h6>
            </Grid>
            <TextField 
            value={password}
            onChange={event=>setPassword(event.target.value)}
            variant="outlined" label='Password' fullWidth required/>
            <Button type='submit'  variant="contained" style={{backgroundColor:"#630000", color:"white", height:"56px",fontSize:"20px", marginTop:"10px", marginBottom:"10px"}} fullWidth>Submit</Button>
            <Grid align="center" >
            </Grid>
            </form>
        </Paper>
)
}

export default ConfirmUserProfile;
    