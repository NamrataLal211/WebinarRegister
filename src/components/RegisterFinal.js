import React from 'react';
import {Grid, Typography} from '@mui/material';
import RegisterTab from './Register';

export default function RegisterFinal(){
    return(
        <Grid container>
            <Grid item xs={12} lg={6}
            sx={{height:'792px', width:'770px', backgroundImage:'linear-gradient(112deg, #112B3C 70%, white 60.5%)'}}
            >
                
            </Grid>
            <Grid item xs={12} lg={6}>
               <RegisterTab/>
            </Grid>
        </Grid>
    )
}