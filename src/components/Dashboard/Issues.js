import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ShowIssuesTable from './ShowIssuesTable';
import { fetchTickets } from '../../redux';


function Issues({ ticketData, fetchTickets }) {
    useEffect(() => {
        fetchTickets();
    }, []);

    if (ticketData?.loading) {
        return <h2>Loading</h2>;
    }

    if (ticketData?.error) {
        return <h2>{ticketData?.error}</h2>;
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Client Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Ticket ID</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ticketData?.tickets?.map(ticket => <ShowIssuesTable key={ticket._id} ticket={ticket} />)}
                </TableBody>
            </Table>
        </TableContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(Issues);
