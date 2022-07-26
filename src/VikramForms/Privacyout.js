import { Button, Grid, List, ListItem, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import GoToTop from "../Components/Gototop.js";


export default function Privacout() {
    return (
        <Grid container >

            <Grid item xs={12} lg={12} padding='20px' marginTop='40px'>
                <Grid>
                    <Typography variant='h3' sx={{ textalign: 'center' }}>
                        Privacy Policy
                    </Typography>
                </Grid>
                <Grid marginTop={'20px'}>
                    <List >
                        <ListItem >
                            <Typography sx={{ fontSize: '20px' }}>
                                1. By Registering on <a href="https://www.po.mrsptuonline.in" > www.po.mrsptuonline.in </a>, I hereby
                                accept all the Terms and conditions and Privacy Policies.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{ fontSize: '20px' }}>

                                2. Partners associated with MRSPTU Online will get an
                                access by registering at www.po.mrsptuonline.in
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{ fontSize: '20px' }}>
                                3. Product training to partners associated with MRSPTU
                                Online will be provided by the MRSPTU Online.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{ fontSize: '20px' }}>
                                4. These will act as employer and can create their own
                                profile on our partnered organization platform available
                                at <a href="https://www.po.mrsptuonline.in" > www.po.mrsptuonline.in </a>
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{ fontSize: '20px' }}>
                                5. They can perform various functions such as posting jobs,
                                operate resumes of job seekers at MRSPTU Online and
                                can manage their organization profile.
                            </Typography>
                        </ListItem>
                        <ListItem sx={{}}>
                            <div style={{ display: 'flex' }}>
                                <Typography sx={{ fontSize: '20px' }}>6.</Typography>
                                <Typography sx={{ fontSize: '20px', marginLeft: '9px' }}>
                                    MRSPTU Online reserves the right to removal or deletion
                                    of any account of Partnered Organization without giving
                                    any information or notice if it violates any third party
                                    Copyrights, Trademarks, Intellectual Property Right.
                                </Typography>
                            </div>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{ fontSize: '20px' }}>
                                7. MRSPTU Online has right to terminate access in case of
                                infringement/non-compliance.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{ fontSize: '20px' }}>
                                8. MRSPTU Online reserves the right to restrict/change the
                                nature of profiles of its partnered organization.
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{ fontSize: '20px' }}>
                                9. MRSPTU Online has the right to initiate proceedings
                                against the non-compliance or offending of law.
                            </Typography>
                        </ListItem>
                    </List>

                </Grid>
                <NavLink to={'/register'} style={{ textdecoration: 'none' }}> <Button>Back</Button></NavLink>
            </Grid>
            <GoToTop />

        </Grid>
    )
} 