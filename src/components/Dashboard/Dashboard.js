import { Drawer, Box, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react';
import { Link as RouterLink, Outlet } from "react-router-dom";

import { toggleDrawer } from '../../redux';

import { useSelector, useDispatch } from 'react-redux';



const outletStyle = {
    width: '100%',
    // backgroundColor: 'gray',
}

const drawerWidth = 240;


function Dashboard() {
    const drawerOpen = useSelector(state => state.drawerOpen);
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    return (
        <Box>
            <Box display={'flex'}>

                <Box sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
                    <Drawer

                        variant="temporary"
                        open={drawerOpen}
                        onClose={() => dispatch(toggleDrawer())}
                        ModalProps={{
                            keepMounted: true,
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <Tabs
                            textColor="white"
                            value={value}
                            indicatorColor="primary"
                            orientation='vertical'
                            onChange={(e, value) => setValue(value)}>

                            <Tab component={RouterLink} to="/dashboard/addClient" label="Add New Client" />
                            <Tab component={RouterLink} to="/dashboard/issues" label="Issues" />
                            <Tab component={RouterLink} to="/dashboard/reports" label="Reports" />
                            <Tab component={RouterLink} to="/dashboard/addIssue" label="Add Issue" />
                        </Tabs>

                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '11vh', backgroundColor: 'orangered' },
                        }}
                        open
                    >
                        <Tabs
                            textColor="white"
                            value={value}
                            indicatorColor="primary"
                            orientation='vertical'
                            onChange={(e, value) => setValue(value)}>

                            <Tab component={RouterLink} to="/dashboard/addClient" label="Add New Client" />
                            <Tab component={RouterLink} to="/dashboard/issues" label="Issues" />
                            <Tab component={RouterLink} to="/dashboard/reports" label="Reports" />
                            <Tab component={RouterLink} to="/dashboard/addIssue" label="Add Issue" />
                        </Tabs>
                    </Drawer>
                </Box>

                <Box style={outletStyle}>
                    <Outlet></Outlet>
                </Box>

            </Box>
        </Box>
    )
};

export default Dashboard;
