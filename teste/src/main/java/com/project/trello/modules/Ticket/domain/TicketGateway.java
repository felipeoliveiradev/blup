package com.project.trello.modules.Ticket.domain;

import com.project.trello.modules.Flup.system.required.pagination.Pagination;
import com.project.trello.modules.Flup.system.required.pagination.SearchQuery;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeoutException;

public interface TicketGateway {
    Ticket create(Ticket aTicket) throws IOException, TimeoutException;
    void deleteById(TicketID anID);
    Optional<Ticket> findById(TicketID anID);
    Ticket update(Ticket aTicket);
    Pagination<Ticket> findAll(SearchQuery aQuery);
    List<Ticket> existsByIds(Iterable<TicketID> ids);
}
