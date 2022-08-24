import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchClients } from '../../redux';
import ShowClientsTable from './ShowClientsTable';

function AllClients({ clientData, fetchClients }) {
    useEffect(() => {
        fetchClients();
    }, []);

    if (clientData.loading) {
        return <h2>Loading</h2>;
    }

    if (clientData.error) {
        return <h2>{clientData.error}</h2>;
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Client Name</TableCell>
                        <TableCell align="right">Address</TableCell>
                        <TableCell align="right">Monthly Bill (BDT)</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clientData?.clients?.map(client => <ShowClientsTable key={client._id} fetchClients={fetchClients} client={client} />)}
                </TableBody>
            </Table>
        </TableContainer>)
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

export default connect(mapStateToProps, mapDispatchToProps)(AllClients)
