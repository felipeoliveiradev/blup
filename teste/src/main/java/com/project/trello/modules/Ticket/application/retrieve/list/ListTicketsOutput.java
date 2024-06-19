package com.project.trello.modules.Ticket.application.retrieve.list;


import com.project.trello.modules.Ticket.domain.Ticket;
import com.project.trello.modules.Ticket.domain.TicketID;

import java.time.Instant;

public record ListTicketsOutput(
        TicketID id,
        String name,
        Integer age,
        boolean isActive,
        Instant createdAt,
        Instant updatedAt,
        Instant deletedAt
) {
    public static ListTicketsOutput from(final Ticket aTicket){
        return new ListTicketsOutput(
                aTicket.getId(),
                aTicket.getName(),
                aTicket.getAge(),
                aTicket.isActive(),
                aTicket.getUpdatedAt(),
                aTicket.getCreatedAt(),
                aTicket.getDeletedAt()
        );
    }
}
