import { Grid, Typography, Paper, Drawer, IconButton, Box, Tabs, Tab } from '@mui/material'
import React, { useState } from 'react';
import { Link as RouterLink, Outlet } from "react-router-dom";
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import { toggleDrawer } from '../../redux';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';



// const dashboardMenuStyles = {
//     padding: "50px",
//     height: "70vh",
//     width: "280px",
//     margin: "40px auto",
//     backgroundColor: "cyan"
// };

const outletStyle = {
    width: '100%',
}

const drawerWidth = 240;


function Dashboard() {
    const drawerOpen = useSelector(state => state.drawerOpen);
    const dispatch = useDispatch();
    const [value, setvalue] = useState(0);

    return (
        <Box>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => dispatch(toggleDrawer())}
                sx={{ mr: 2, display: { sm: 'none', float: 'right' } }}
            >
                <ExitToAppTwoToneIcon />
            </IconButton>
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
                            indicatorColor="white"
                            orientation='vertical'
                            onChange={(e, value) => setvalue(value)}>

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
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '13vh' },
                        }}
                        open
                    >
                        <Tabs
                            textColor="white"
                            value={value}
                            indicatorColor="white"
                            orientation='vertical'
                            onChange={(e, value) => setvalue(value)}>

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

// const mapStateToProps = state => {
//     return {
//         drawerOpen: state.drawerOpen
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         toggleDrawer: () => dispatch(toggleDrawer())
//     }
// }
// In this method we need to use the connect method to send the mapStateToProps and mapDispatchToProps as props of Dashboard component.

export default Dashboard;
