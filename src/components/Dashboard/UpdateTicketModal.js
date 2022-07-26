import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField, useMediaQuery } from '@mui/material';
import axios from 'axios';
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

export default function UpdateTicketModal({ open, setOpen, ticket, fetchTickets }) {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));

    const handleClose = () => setOpen(false);

    const handleUpdateTicket = (e) => {
        e.preventDefault();
        const updatedDescription = {
            description: e.target.description.value
        };
        axios.patch(`https://trackit24x7.herokuapp.com/updateTicket/${ticket._id}`, updatedDescription)
            .then(res => {
                if (res?.data?.modifiedCount === 1) {
                    alert("Ticket Updated")
                    fetchTickets();
                    setOpen(false);
                }
            })
            .catch(error => {
                alert(error.message);
            })
    }

    return (
        <div>
            <Modal
                aria-labelledby="UpdateTicketModal-modal-title"
                aria-describedby="UpdateTicketModal-modal-description"
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
                        <Typography id="UpdateTicketModal-modal-title" variant="h6" component="h2">
                            Update Ticket: {ticket?.ticketId}
                        </Typography>
                        <Typography id="UpdateTicketModal-modal-title" variant="h6" component="h2">
                            Client Name: {ticket?.clientName}
                        </Typography>
                        <form action="" onSubmit={handleUpdateTicket}>
                            <TextField
                                style={marginYsmall}
                                variant="outlined"
                                type="text"
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                                required
                                name='description'
                            />
                            <Button
                                style={{ ...marginYsmall, fontSize: "16px", color: "white" }}
                                variant="contained"
                                type="submit"
                                color="secondary"
                                fullWidth>Update Ticket</Button>
                        </form>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
