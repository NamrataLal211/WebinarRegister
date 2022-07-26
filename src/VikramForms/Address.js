import React from "react";
import Typography from '@mui/material/Typography';
import { Paper, Grid } from "@mui/material";
import logo from './mrsptu.png';
import LogoCBell from './LogoCBell.png'
import { Link } from "react-router-dom";
import "./Address.css";



export default function Address() {
    return (
        <Grid container sx={{ background: "#06213F", height: "100%", padding: '12% 0 0 12%' }}>
            <Grid container item xs={12} lg={12}>

                <Grid item xs={12} lg={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <img src={logo} alt="as" className="logo" style={{

                        padding: "0px",

                        width: "28%"

                    }} />
                    <Grid marginTop='30px' >
                        <Typography sx={{ fontSize: '40px', color: 'white', lineHeight: '1.2', }} fontWeight={"bold"} fontFamily={"'Poppins', sans-serif"}>Partnered Organization</Typography>
                        <Typography paddingTop={'1%'} alignSelf="center" color={"white"} fontWeight={"bold"} fontSize={"22px"} fontFamily={"'Poppins', sans-serif"}>
                            for MRSPTU Online Certification Courses

                        </Typography>
                        <Typography alignSelf="center" color={"white"} fontSize={"22px"} fontFamily={"'Poppins', sans-serif"}>
                            <a style={{ color: 'white', fontSize: '18px' }} href='https://www.mrsptuonline.com' target="_blank" >www.mrsptuonline.com</a>

                        </Typography>
                    </Grid>
                    {/* <Grid display={'flex'} height={'80px'} marginTop='30px'>
                        <Typography alignSelf="center" color={"white"} fontSize={"28px"} fontFamily={"'Poppins', sans-serif"}>
                            Powered By -

                        </Typography>
                        <Typography padding={'2%'} className='hide' alignSelf="center" color={"white"} fontWeight={"bold"} fontSize={"50px"} fontFamily={"'Poppins', sans-serif"}>KEEWE</Typography>

                    </Grid> */}

                </Grid>

                <Grid item sx={{ height: '30px' }} xs={12} lg={12} />

                <Grid item xs={12} lg={12} height='50px' sx={{ display: 'flex' }}>

                    <Typography alignSelf="center" color={"white"} marginBottom={'10px'} fontSize={"1.05rem"} fontFamily={"'Poppins', sans-serif"} >
                        Technological & Marketing Partner- <a href="https://www.mrsptuonline.com" style={{ textDecoration: 'none', color: "#fff" }}><span className="addrs" style={{ fontSize: '28px', textDecoration: 'underline' }}>Crest<p style={{ display: "inline-block", color: "#62f4b9", margin: '0', textDecoration: 'underline' }}>Bell</p></span></a>
                        {/* <Typography color={'white'} fontSize={'50px'}>with Crest<span style={{ color: '#5feeb5', fontWeight: 'bold', fontSize: '50px', fontFamily: 'Poppins' }}>Bell</span></Typography>
                     */}
                        {/* <img src={LogoCBell} alt="as" className="logo" style={{
                        // position: "unset",
                        top: 0,
                        bottom: 0,
                        padding: "0px",
                        // height: "fit-content",
                        width: "22%", marginLeft: '7px'

                    }} /> */}
                    </Typography>
                </Grid>
            </Grid>


        </Grid>
    );
}

