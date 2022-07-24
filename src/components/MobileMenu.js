import React, { useState } from 'react';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const pages = ["Home", "About Us", "Contact Us"];

export default function MobileMenu() {
    const [openDrawer, setOpenDrawer] = useState(false)
    return (
        <Box>
            <Drawer open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <List>
                    {
                        pages.map((page, index) => (
                            <ListItemButton
                                onClick={() => setOpenDrawer(false)}
                                key={index}>
                                <ListItemIcon>
                                    <ListItemText>{page}</ListItemText>
                                </ListItemIcon>
                            </ListItemButton>
                        ))
                    }

                </List>

                <Button sx={{ width: "95%", alignSelf: "center", marginBottom: "15px" }} variant="contained">Login</Button>
                <Button sx={{ width: "95%", alignSelf: "center" }} variant="contained">Sign Up</Button>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ color: "white" }} />
            </IconButton>
        </Box>)
}
