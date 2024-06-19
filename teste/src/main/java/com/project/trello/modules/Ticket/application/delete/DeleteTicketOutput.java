package com.project.trello.modules.Ticket.application.delete;

import com.project.trello.modules.Ticket.domain.Ticket;
import com.project.trello.modules.Ticket.domain.TicketID;

public record DeleteTicketOutput(
        TicketID id
) {
    public static DeleteTicketOutput from(final Ticket aTicket){
        return new DeleteTicketOutput(
                aTicket.getId()
        );
    }
}
