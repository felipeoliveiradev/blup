package com.project.trello.modules.Ticket.application.retrieve.list;


import com.project.trello.modules.Ticket.domain.TicketGateway;
import com.project.trello.modules.Flup.system.required.pagination.Pagination;
import com.project.trello.modules.Flup.system.required.pagination.SearchQuery;

import java.util.Objects;

public class DefaultListTicketsUseCase extends ListTicketsUseCase{

    private final TicketGateway Gateway;

    public DefaultListTicketsUseCase(final TicketGateway Gateway) {
        this.Gateway = Objects.requireNonNull(Gateway);
    }
    @Override
    public Pagination<ListTicketsOutput> execute(final SearchQuery aQuery) {
        return this.Gateway.findAll(aQuery).map(ListTicketsOutput::from);
    }

}
