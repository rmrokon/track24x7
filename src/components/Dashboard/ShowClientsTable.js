import { Button, TableCell, TableRow } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';


function ShowClientsTable({ client }) {
    return (<TableRow
        key={client._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">
            {client.clientName}
        </TableCell>
        <TableCell align="center">{client.address}</TableCell>
        <TableCell align="center">{client.monthlyBill}</TableCell>
        <TableCell align="center">
            <Box>
                <Button LinkComponent={Link} to="/dashboard/create-ticket" sx={{ marginLeft: "auto", marginRight: "10px" }} variant="outlined" color="secondary">Create Ticket</Button>
                <Button LinkComponent={Link} to="/dashboard/create-ticket" sx={{ marginLeft: "auto" }} variant="outlined" color="secondary">Update Client</Button>
            </Box>
        </TableCell>

    </TableRow>

    )
}

export default ShowClientsTable