import { useTheme } from '@emotion/react';
import { Button, TableCell, TableRow, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UpdateClientModal from './UpdateClientModal';


function ShowClientsTable({ client, fetchClients, index }) {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);
    const { clientName, monthlyBill, address } = client;


    const handleUpdateClient = () => {
        setOpen(true);
    }
    return (<TableRow
        key={client._id}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
        <TableCell component="th" scope="row">
            {index + 1}
        </TableCell>
        <TableCell component="th" scope="row">
            {clientName}
        </TableCell>
        <TableCell align="right">{address}</TableCell>
        <TableCell align="right">{monthlyBill}</TableCell>
        <TableCell align="center">
            <Box>
                <Button
                    LinkComponent={Link}
                    to={`/dashboard/create-ticket/${clientName}`}
                    sx={{
                        marginLeft: "auto",
                        marginBottom: `${isMatch ? "10px" : ""}`,
                        marginRight: `${!isMatch ? "10px" : ""}`
                    }}
                    variant="outlined"
                    color="secondary">Create Ticket</Button>

                <Button
                    onClick={handleUpdateClient}
                    sx={{ marginLeft: "auto" }}
                    variant="outlined"
                    color="secondary">Update Client</Button>
            </Box>
        </TableCell>
        <UpdateClientModal
            handleUpdateTicket={handleUpdateClient}
            open={open}
            setOpen={setOpen}
            client={client}
            fetchClients={fetchClients}
        />
    </TableRow>

    )
}

export default ShowClientsTable