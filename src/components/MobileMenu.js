import React, { useState } from 'react';
import { Box, Drawer, List, IconButton, Button, Tabs, Tab } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import { signOut } from 'firebase/auth';



const pages = ["Home", "About Us", "Contact Us", "dashboard"];



export default function MobileMenu() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [value, setvalue] = useState(0);
    const [user] = useAuthState(auth);

    const loginLogout = user ? <Button onClick={() => signOut()} LinkComponent={Link} to="/login" sx={{ width: "95%", alignSelf: "center", marginBottom: "15px" }} variant="contained">Logout</Button>
        :
        <>
            <Button LinkComponent={Link} to="/login" sx={{ width: "95%", alignSelf: "center", marginBottom: "15px" }} variant="contained">Login</Button>
            <Button LinkComponent={Link} to="/signup" sx={{ width: "95%", alignSelf: "center" }} variant="contained">Sign Up</Button>
        </>;

    return (
        <Box>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Tabs
                    textColor="secondary"
                    value={value}
                    indicatorColor="primary"
                    orientation='vertical'
                    onChange={(e, value) => setvalue(value)}
                >
                    {
                        pages.map((page, index) => <Tab
                            key={index}
                            onClick={() => setOpenDrawer(false)}
                            component={Link}
                            to={`/${page.split(' ').join('-')}`}
                            label={page}

                        />)
                    }
                </Tabs>
                {loginLogout}
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon color="primary" />
            </IconButton>
        </Box>)
}
