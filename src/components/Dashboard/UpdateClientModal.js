import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { InputLabel, TextField, useMediaQuery } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../../redux';
import { useTheme } from '@emotion/react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const marginYsmall = {
    margin: "16px 0",
};

function UpdateClientModal({ open, setOpen, client, fetchClients }) {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const handleClose = () => setOpen(false);
    const [clientName, setClientName] = useState(client.clientName);
    const [monthlyBill, setMonthlyBill] = useState(client.monthlyBill);
    const [address, setAddress] = useState(client.address);

    const handleUpdateClient = (e) => {
        e.preventDefault();
        const updatedClient = {
            clientName,
            monthlyBill,
            address
        };
        console.log(updatedClient);
        axios.patch(`https://trackit24x7.herokuapp.com/updateClient/${client._id}`, updatedClient)
            .then(res => {

                if (res?.data?.modifiedCount === 1) {
                    alert("Client has been updated");
                    fetchClients();
                    setOpen(false);
                }
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return (

        <Modal
            aria-labelledby="handleUpdateClient-modal-title"
            aria-describedby="handleUpdateClient-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Box sx={{ ...style, width: `${isMatch ? "90%" : "25%"}` }}>

                    <form action="" onSubmit={handleUpdateClient}>

                        <div style={marginYsmall}>
                            <InputLabel id="updateClientModal">Client Name</InputLabel>

                            <TextField
                                id="updateClientModal"
                                variant="outlined"
                                type="text"
                                name='client'
                                value={clientName}
                                onChange={(e) => setClientName(e.target.value)}
                                fullWidth
                                required
                            />
                        </div>

                        <div style={marginYsmall}>
                            <InputLabel id="updateClientModal">Monthly Bill</InputLabel>

                            <TextField
                                variant="outlined"
                                type="number"
                                value={monthlyBill}
                                onChange={(e) => setMonthlyBill(e.target.value)}
                                name='bill'
                                fullWidth
                                required
                            />
                        </div>

                        <div style={marginYsmall}>
                            <InputLabel id="updateClientModal">Monthly Bill</InputLabel>

                            <TextField
                                variant="outlined"
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                fullWidth
                                multiline
                                rows={4}
                                required
                                name='address'
                            />
                        </div>

                        <Button
                            style={{ ...marginYsmall, fontSize: "16px", color: "white" }}
                            variant="contained"
                            type="submit"
                            color="secondary"
                            fullWidth>Update Client</Button>
                    </form>

                </Box>
            </Fade>
        </Modal>

    );
}

const mapStateToProps = state => {
    return {
        clientData: state.clients
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchClients: () => dispatch(fetchClients())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateClientModal)
