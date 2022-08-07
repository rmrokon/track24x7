import { Grid, Typography, Paper, Drawer, IconButton, Box } from '@mui/material'
import React from 'react';
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
    const dispatch = useDispatch()

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
                        <ul>
                            <li><RouterLink to='/dashboard/addClient'>Add New Client</RouterLink></li>
                            <li><RouterLink to='/dashboard/issues'>Issues</RouterLink></li>
                            <li><RouterLink to='/dashboard/reports'>Reports</RouterLink></li>
                        </ul>

                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '13vh' },
                        }}
                        open
                    >
                        <ul>
                            <li><RouterLink to='/dashboard/addClient'>Add New Client</RouterLink></li>
                            <li><RouterLink to='/dashboard/issues'>Issues</RouterLink></li>
                            <li><RouterLink to='/dashboard/reports'>Reports</RouterLink></li>
                        </ul>
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
