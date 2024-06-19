package com.project.trello.modules.Ticket.domain;

public record TicketSearchQuery(
        int page,
        int perPage,
        String terms,
        String sort,
        String direction
) {
}
