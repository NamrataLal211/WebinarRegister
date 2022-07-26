import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
// import Ards from './fullpage';
import Ardss from './Address';
import Register from "./Register";
import logo from './MRSSPTU.png';
import TabComponent from './TabComponent';
import axios from 'axios';

export default function RegisterCard(props) {

  return (
        <Grid container sx={{height:"100vh",width:"100%", backgroundColor: '#fff'}}>
            <Grid item xs={12} md={4} lg={5}>
                <Ardss />
            </Grid>
            <Grid item md={1} lg={1} sx={{backgroundImage:"linear-gradient(to bottom right, #06213F 50%,white 50%)"}}>
            </Grid>
            <Grid item md={0.5} lg={0.5} />

            <Grid item xs={12} md={5} lg={5}>
                  <TabComponent id={props.id}/>  
            </Grid  >

            </Grid>
  );
}
