package com.project.trello.modules.Ticket.application.create;

import com.project.trello.modules.Ticket.domain.Ticket;

public record CreateTicketOutput(
        String id
) {
    public static CreateTicketOutput from(final String anId){
        return new CreateTicketOutput(anId);
    }

    public static CreateTicketOutput from(final Ticket aTicket){
        return new CreateTicketOutput(aTicket.getId().getValue());
    }
}
