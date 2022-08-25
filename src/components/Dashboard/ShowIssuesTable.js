import { Button, TableCell, TableRow, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchTickets } from '../../redux';
import axios from 'axios';
import UpdateTicketModal from './UpdateTicketModal';
import { useTheme } from '@emotion/react';

function ShowIssuesTable({ ticket, fetchTickets, index }) {
    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const { clientName, description, ticketId, status, _id } = ticket;

    const handleCloseTicket = (id) => {

        axios.patch(`https://trackit24x7.herokuapp.com/closeTicket/${id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount === 1) {
                    alert("Ticket has been closed");
                    fetchTickets();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleUpdateTicket = () => {
        setOpen(true);
    }

    return (
        <TableRow
            key={_id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell component="th" scope="row">
                {index + 1}
            </TableCell>
            <TableCell align="center" component="th" scope="row">
                {clientName}
            </TableCell>
            <TableCell align="center">{description}</TableCell>
            <TableCell align="center">{ticketId}</TableCell>
            <TableCell align="center">{status}</TableCell>
            <TableCell align="center">
                <Button
                    onClick={() => handleCloseTicket(_id)}
                    sx={{
                        marginLeft: "auto",
                        marginRight: `${!isMatch ? "10px" : ""}`,
                        marginBottom: `${isMatch ? "10px" : ""}`
                    }}
                    variant="outlined"
                    color="secondary"
                    disabled={status === "Solved" && true}
                >Close</Button>

                <Button
                    onClick={() => handleUpdateTicket(_id)}
                    sx={{ marginLeft: "auto" }}
                    variant="outlined"
                    color="secondary"
                    disabled={status === "Solved" && true}
                >Update</Button>

            </TableCell>
            <UpdateTicketModal
                handleUpdateTicket={handleUpdateTicket}
                open={open}
                setOpen={setOpen}
                ticket={ticket}
                fetchTickets={fetchTickets}
            />
        </TableRow>
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