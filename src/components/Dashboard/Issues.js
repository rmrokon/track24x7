import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ShowIssuesTable from './ShowIssuesTable';
import { fetchTickets } from '../../redux';
import Loading from '../Loading';


function Issues({ ticketData, fetchTickets }) {
    useEffect(() => {
        fetchTickets();
    }, []);

    if (ticketData?.loading) {
        return <Loading />;
    }

    if (ticketData?.error) {
        alert(ticketData?.error);
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>No.</TableCell>
                        <TableCell align="center">Client Name</TableCell>
                        <TableCell align="center">Description</TableCell>
                        <TableCell align="center">Ticket ID</TableCell>
                        <TableCell align="center">Status</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ticketData?.tickets?.map((ticket, index) => <ShowIssuesTable key={ticket._id} ticket={ticket} index={index} />)}
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
