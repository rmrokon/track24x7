import { Drawer, Box, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react';
import { Link as RouterLink, Outlet } from "react-router-dom";
import { toggleDrawer } from '../../redux';
import { useSelector, useDispatch } from 'react-redux';



const outletStyle = {
    width: '100%',
}

const drawerWidth = 240;

const dashboardMenuItems = [
    "Issues", "Add Client", "Reports", "Create Ticket", "Clients"
];


function Dashboard() {
    const drawerOpen = useSelector(state => state.drawer.drawerOpen);
    const dispatch = useDispatch();
    const [value, setValue] = useState(0);

    const dashboardMenu = dashboardMenuItems.map((page, index) =>
        <Tab
            onClick={() => dispatch(toggleDrawer())}
            key={index} component={RouterLink}
            to={`/dashboard/${page.split(' ').join('-')}`}
            label={`${page}`} />);

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
                            textColor='secondary'
                            value={value}
                            indicatorColor="primary"
                            orientation='vertical'
                            onChange={(e, value) => setValue(value)}>

                            {dashboardMenu}

                        </Tabs>

                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '10vh', bgcolor: 'primary.light' },
                        }}
                        open
                    >
                        <Tabs
                            textColor='secondary'
                            value={value}
                            indicatorColor="primary"
                            orientation='vertical'
                            onChange={(e, value) => setValue(value)}>

                            {dashboardMenu}

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
