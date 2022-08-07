import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Toolbar, Typography, Button, useMediaQuery, useTheme, IconButton, Grid } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import MobileMenu from './MobileMenu';
import { Link, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import { useDispatch } from 'react-redux';
import { toggleDrawer } from '../redux';

const mobileNavBarStyles = {
    width: "100%",
    display: 'flex',
    justifyContent: 'space-between',
}

export default function Header() {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const isDashboard = location.pathname.includes('dashboard');



    const handleLogOut = () => {
        signOut(auth);
    }


    const dashboardDrawer = isDashboard ? <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={() => dispatch(toggleDrawer())}
        sx={{ mr: 2, display: { sm: 'none', float: 'right' } }}
    >
        <ExitToAppTwoToneIcon />
    </IconButton> : "";

    const responsiveNavBar = isMatch ? (<Grid sx={mobileNavBarStyles}>
        <Grid display={'flex'}><MobileMenu></MobileMenu>
            <TimelineIcon sx={{ fontSize: "48px" }}></TimelineIcon></Grid >

        <Grid>{dashboardDrawer}</Grid >

    </Grid >
    )
        : (<>
            <TimelineIcon sx={{ fontSize: "48px" }}></TimelineIcon>
            <Typography sx={{ fontSize: "48px" }}>track24x7</Typography>

            <Tabs
                textColor="white"
                value={value}
                indicatorColor="secondary"
                onChange={(e, value) => setValue(value)}>

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

            {
                !user && <Button LinkComponent={Link} to="/signup" sx={{ marginLeft: "10px" }} variant="outlined" color="inherit">Sign Up</Button>
            }</>)


    return (
        <Box>
            <AppBar position='static' sx={{ background: "#e16404" }}>
                <Toolbar>

                    {
                        responsiveNavBar
                    }

                </Toolbar>

            </AppBar>
        </Box>
    )
}
