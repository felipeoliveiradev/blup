package com.project.trello.modules.Ticket.application.retrieve.byId;


import com.project.trello.modules.Ticket.domain.Ticket;

import java.time.Instant;

public record TicketByIdOutput(
        String id,
        String name,
        Integer age,
        boolean isActive,
        Instant createdAt,
        Instant updatedAt,
        Instant deletedAt
) {
    public static TicketByIdOutput from(final Ticket aTicket){
        return new TicketByIdOutput(
                aTicket.getId().getValue(),
                aTicket.getName(),
                aTicket.getAge(),
                aTicket.isActive(),
                aTicket.getCreatedAt(),
                aTicket.getUpdatedAt(),
                aTicket.getDeletedAt()
        );
    }
}
