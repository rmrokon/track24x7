import React, { useState } from 'react';
import { AppBar, Box, Tab, Tabs, Toolbar, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import TimelineIcon from '@mui/icons-material/Timeline';
import MobileMenu from './MobileMenu';


export default function Header() {
    const [value, setvalue] = useState(0);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <Box>
            <AppBar sx={{ background: "#FF4500" }}>
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
                                    indicatorColor="primary"
                                    onChange={(e, value) => setvalue(value)}>
                                    <Tab label="Home" />
                                    <Tab label="About Us" />
                                    <Tab label="Contact Us" />
                                </Tabs>

                                <Button variant="contained">Buy Now</Button>
                                <Button sx={{ marginLeft: "auto" }} variant="contained">Login</Button>
                                <Button sx={{ marginLeft: "10px" }} variant="contained">Sign Up</Button></>)
                    }

                </Toolbar>

            </AppBar>
        </Box>
    )
}
