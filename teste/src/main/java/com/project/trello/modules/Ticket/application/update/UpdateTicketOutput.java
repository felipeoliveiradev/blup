package com.project.trello.modules.Ticket.application.update;


import com.project.trello.modules.Ticket.domain.Ticket;

public record UpdateTicketOutput(
        String id
) {

    public static UpdateTicketOutput from(final String anId){
        return new UpdateTicketOutput(anId);
    }
    public static UpdateTicketOutput from(final Ticket aTicket){
        return new UpdateTicketOutput(aTicket.getId().getValue());
    }
}
