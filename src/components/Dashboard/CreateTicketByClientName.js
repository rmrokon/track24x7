import React from 'react'
import { useParams } from 'react-router'
import CreateTicket from './CreateTicket';

function CreateTicketByClientName() {
    const { ticketForClient } = useParams();
    return (
        <div>
            <CreateTicket ticketForClient={ticketForClient} />
        </div>
    )
}

export default CreateTicketByClientName