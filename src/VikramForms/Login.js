import React,{useContext, useState} from "react";
import { Typography,Box, Button, Grid, TextField, Link, InputLabel, OutlinedInput, IconButton, InputAdornment, FormControl } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { Visibility } from "@mui/icons-material";
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import microsoft from './microsoft.svg';
import apple from './apple.svg';
import google from './google.svg';
import facebook from './facebook.svg';
import { Context } from "../App";

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState()
  const [email,setEmail]=useState("");
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

    const handleClick = ()=> {
        alert("path not set")
    }

    const {authState, setAuthState}=React.useContext(Context)
      const LogIn=async ()=>{
        await axios({
          url:'https://po.keewesolutions.com/user/login',
          method:'post',
          data:{
            'username':email,
            'password':password
          }
        }).then((response) => {
          console.log(response)
          if(response.data==="UserNotConfirmedException"){
            navigate("/verify",{state:{user:email}})
          }
          else if(response.data.accessToken !== undefined){
            localStorage.setItem("PO",JSON.stringify(response.data))
            let userData = response.data
            console.log(response.data)
            let newUserContext={
              authenticated: true,
              user: {},
            }
            let newUser = {
              id: userData.idToken.payload['cognito:username'],
              name:userData.idToken.payload.name,
              email: userData.idToken.payload.email,
              phone: userData.idToken.payload.phone_number,
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
          }else{
            alert('Invalid Credentials')
          }
        })
      }
    

        const handleForgotPassword=()=>{
          navigate('/forgotpassword')
        }
    return(

        <Grid container lg={12} xs={12} sm={12} md={12} sx={{width:"auto"}}>
           <Grid item lg={8} xs={8} sm={8} md={8} sx={{marginBottom:"20px"}}>
           <FormControl fullWidth variant="outlined">
           <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            label="Email"
            onChange={event=>setEmail(event.target.value)}
            value={email}
            
          />
             </FormControl>
           </Grid>
           
            {/* <Grid xs={4}/> */}
           <Grid item lg={8} xs={8} sm={8} md={8}>
           <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
          fullWidth
            id="outlined-adornment-password"
            label="password"
            onChange={event=>setPassword(event.target.value)}
            type={showPassword ? 'text' : 'password'}
            value={password}
            
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
           </Grid>
           {/* <Grid xs={4}/> */}
           <Grid  item lg={12} xs={12} sm={12} md={12} sx={{marginTop:"30px", marginBottom:"20px"}}>
             <Box display="flex" >
                <Grid container alignItems={'center'}>
                  <Button 
                  size="medium"
                  type="submit"
                    variant="contained" 
                    sx={{backgroundColor:"#06213F", borderRadius:'4px',textTransform: 'none', marginRight: '5%'}} 
                    onClick={LogIn}>
                      Sign In</Button>
                    <Typography onClick={handleForgotPassword} fullWidth sx={{ "&:hover":{textDecoration: 'underline', cursor: 'pointer'}, color:"#06213F",textTransform: 'none'}}>Forgot Password ?</Typography>
                </Grid>
              </Box>
           </Grid>
           <Grid xs={4} />
           <br/>
           <br/>
          {/* <Grid item xs={12} sx={{ marginBottom: "20px" }}>
            <Link
              sx={{
                color: "#616161",
                fontSize: "0.875rem",
                fontWeight: "bold",
                textDecoration: "none",
                textTransform: 'lowercase'
              }}
            >
              Or sign in with:
            </Link>
          </Grid> */}

          <Grid xs={4} />

          {/* <Grid container item xs={10} rowSpacing={2} columnSpacing={4}>
            <Grid item xs={5}  >
            <NavLink
              to={"/"}
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  "&:hover":{backgroundColor:'#c7c5c5'},
                  backgroundColor: "#c7c5c5",
                  borderRadius: "0px",
                  height: "100%",
                  width: "100%",
                  }}
                  onClick={()=>{
                      handleClick()
                  }}
                ><img src={apple} alt="" width={'25%'} marginRight={'3%'}/>
                <Typography color={'#000'} marginTop={'3%'}>Apple</Typography>
                </Button>
              </NavLink>
            </Grid>

            <Grid item xs={5}  sx={{
              // padding: "4px"
            }}>
              <NavLink
                to={"/"}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    "&:hover":{backgroundColor:'#c7c5c5'},
                    backgroundColor: "#c7c5c5",
                    borderRadius: "0px",
                    height: "100%",
                    width: "100%",
                  }}
                  onClick={()=>{
                      handleClick()
                  }}
                ><img src={facebook} alt="" width={'20%'} marginRight={'3%'}/>
                <Typography color={'#000'} marginTop={'3%'}>Facebook</Typography>
                  
                </Button>
              </NavLink>
            </Grid>

            <Grid item xs={5}  sx={{
              // padding: "4px"
            }}>
              <NavLink
                to={"/"}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    "&:hover":{backgroundColor:'#c7c5c5'},
                    backgroundColor: "#c7c5c5",
                    borderRadius: "0px",
                    height: "100%",
                    width: "100%",
                  }}
                  onClick={()=>{
                      handleClick()
                  }}
                ><img src={google} alt="" width={'20%'} marginRight={'3%'}/>
                <Typography color={'#000'} marginTop={'3%'} >Google</Typography>
                  
                </Button>
              </NavLink>
            </Grid>
            <Grid item xs={5}  sx={{
              // padding: "4px"
            }}>
              <NavLink
                to={"/"}
                style={{
                  textDecoration: "none",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    "&:hover":{backgroundColor:'#c7c5c5'},
                    backgroundColor: "#c7c5c5",
                    borderRadius: "0px",
                    height: "100%",
                    width: "100%",
                  }}
                  onClick={()=>{
                      handleClick()
                  }}
                ><img src={microsoft} alt="" width={'20%'} marginRight={'3%'}/>
                <Typography color={'#000'} marginTop={'3%'}>Microsoft</Typography>
                  
                </Button>
              </NavLink>
            </Grid>
          </Grid> */}
        </Grid>
    )
}