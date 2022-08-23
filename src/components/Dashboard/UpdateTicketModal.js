import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import axios from 'axios';

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

    const handleClose = () => setOpen(false);

    const handleUpdateTicket = (e) => {
        e.preventDefault();
        const updatedDescription = {
            description: e.target.description.value
        };
        axios.patch(`http://localhost:5000/updateTicket/${ticket._id}`, updatedDescription)
            .then(res => {
                if (res?.data?.modifiedCount === 1) {
                    fetchTickets();
                    setOpen(false);
                }
            })
            .catch(error => {
                console.log(error.message)
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
                    <Box sx={style}>
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
                            <Button style={{ ...marginYsmall, fontSize: "16px" }} variant="contained" type="submit" color="warning" fullWidth>Update Ticket</Button>
                        </form>

                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
