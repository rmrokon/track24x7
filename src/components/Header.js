import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography, Button, useMediaQuery, useTheme, IconButton, Grid } from '@mui/material';
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
    alignItems: 'center'
}

export default function Header() {
    const [value, setValue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const isDashboard = location.pathname.includes('dashboard');

    const pages = ["Home", "About Us", "Contact Us", "dashboard"];

    const handleLogOut = () => {
        signOut(auth);
    }


    const dashboardDrawer = isDashboard ? <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={() => dispatch(toggleDrawer())}
        sx={{ mr: 2, display: { sm: 'none', float: 'right' } }}
    >
        <ExitToAppTwoToneIcon />
    </IconButton> : "";

    const responsiveNavBar = isMatch ? (<Grid sx={mobileNavBarStyles}>
        <Grid display={'flex'}>
            <MobileMenu></MobileMenu>
            <TimelineIcon sx={{ fontSize: "48px" }} color="primary"></TimelineIcon>
        </Grid >

        <Grid>{dashboardDrawer}</Grid >
    </Grid >
    )
        : (<>
            <TimelineIcon sx={{ fontSize: "48px" }} color='primary'></TimelineIcon>
            <Typography sx={{ fontSize: "32px", marginRight: '50px' }} color='primary'>TRACKit</Typography>


            <Tabs

                value={value}
                indicatorColor="primary"
                onChange={(e, value) => setValue(value)}
            >
                {
                    pages.map((page, index) => <Tab
                        sx={{ color: "white", fontSize: "18px" }}
                        key={index}
                        component={Link}
                        to={`/${page.split(' ').join('-')}`}
                        label={page}

                    />)
                }
            </Tabs>

            {
                user ?
                    <Button
                        onClick={handleLogOut}
                        LinkComponent={Link}
                        to="/login"
                        sx={{ marginLeft: "auto", fontSize: "18px" }}
                        variant="outlined"
                        color="primary">Logout
                    </Button>

                    :

                    <Button
                        LinkComponent={Link}
                        to="/login"
                        sx={{ marginLeft: "auto", fontSize: "18px" }}
                        variant="outlined"
                        color="primary">Login
                    </Button>
            }

            {
                !user &&

                <Button
                    LinkComponent={Link}
                    to="/signup"
                    sx={{ marginLeft: "10px", fontSize: "18px" }}
                    variant="outlined"
                    color="primary">Sign Up
                </Button>
            }</>)


    return (

        <AppBar position='static' sx={{ bgcolor: 'secondary.dark', height: '10vh' }}>
            <Toolbar>

                {
                    responsiveNavBar
                }

            </Toolbar>
        </AppBar>

    )
}
