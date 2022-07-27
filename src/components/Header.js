import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Toolbar, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import MobileMenu from './MobileMenu';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';

export default function Header() {
    const [value, setvalue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth);
    }


    return (
        <Box>
            <AppBar position='static' sx={{ background: "#e16404" }}>
                <Toolbar>

                    {
                        isMatch ? (<>
                            <MobileMenu></MobileMenu>
                            <TimelineIcon sx={{ fontSize: "48px" }}></TimelineIcon>
                            <Typography sx={{ fontSize: "24px" }}>track24x7</Typography>
                        </>
                        )
                            : (<>
                                <TimelineIcon sx={{ fontSize: "48px" }}></TimelineIcon>
                                <Typography sx={{ fontSize: "48px" }}>track24x7</Typography>

                                <Tabs
                                    textColor="white"
                                    value={value}
                                    indicatorColor="white"
                                    onChange={(e, value) => setvalue(value)}>

                                    <Tab component={Link} to="/home" label="Home" />
                                    <Tab component={Link} to="/about" label="About Us" />
                                    <Tab component={Link} to="/contact" label="Contact Us" />
                                    <Tab component={Link} to="/dashboard" label="Dashboard" />


                                </Tabs>

                                {
                                    user ? <Button onClick={handleLogOut} LinkComponent={Link} to="/login" sx={{ marginLeft: "auto" }} variant="outlined" color="inherit">Logout</Button>

                                        :

                                        <Button LinkComponent={Link} to="/login" sx={{ marginLeft: "auto" }} variant="outlined" color="inherit">Login</Button>
                                }



                                <Button LinkComponent={Link} to="/signup" sx={{ marginLeft: "10px" }} variant="outlined" color="inherit">Sign Up</Button></>)
                    }

                </Toolbar>

            </AppBar>
        </Box>
    )
}
