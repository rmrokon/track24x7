import { Button, TableCell, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchTickets } from '../../redux';
import axios from 'axios';
import UpdateTicketModal from './UpdateTicketModal';

function ShowIssuesTable({ ticket, fetchTickets }) {
    const [open, setOpen] = useState(false);

    const handleCloseTicket = (id) => {

        axios.patch(`http://localhost:5000/closeTicket/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount === 1) {
                    fetchTickets();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleUpdateTicket = (id) => {
        setOpen(true);
    }

    return (
        <>
            <TableRow
                key={ticket._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="center" component="th" scope="row">
                    {ticket.clientName}
                </TableCell>
                <TableCell align="center">{ticket.description}</TableCell>
                <TableCell align="center">{ticket.ticketId}</TableCell>
                <TableCell align="center">{ticket.status}</TableCell>
                <TableCell align="center">
                    <Box>
                        <Button onClick={() => handleCloseTicket(ticket._id)} sx={{ marginLeft: "auto", marginRight: "10px" }} variant="outlined" color="secondary">Close</Button>
                        <Button onClick={() => handleUpdateTicket(ticket._id)} sx={{ marginLeft: "auto" }} variant="outlined" color="secondary">Update</Button>
                    </Box>
                </TableCell>

            </TableRow>
            <UpdateTicketModal
                handleUpdateTicket={handleUpdateTicket}
                open={open}
                setOpen={setOpen}
                ticket={ticket}
                fetchTickets={fetchTickets}
            />
        </>
    )
}

const mapStateToProps = state => {
    return {
        ticketData: state.tickets
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchTickets: () => dispatch(fetchTickets())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowIssuesTable);