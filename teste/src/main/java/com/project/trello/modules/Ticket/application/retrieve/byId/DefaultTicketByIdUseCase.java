package com.project.trello.modules.Ticket.application.retrieve.byId;


import com.project.trello.modules.Ticket.domain.Ticket;
import com.project.trello.modules.Ticket.domain.TicketGateway;
import com.project.trello.modules.Ticket.domain.TicketID;
import com.project.trello.modules.Flup.system.validation.Exceptions.NotFoundException;

import java.util.Objects;
import java.util.function.Supplier;

public class DefaultTicketByIdUseCase extends TicketByIdUseCase {

    private final TicketGateway Gateway;

    public DefaultTicketByIdUseCase(final TicketGateway Gateway) {
        this.Gateway = Objects.requireNonNull(Gateway);
    }

    @Override
    public TicketByIdOutput execute(final String anIn) {
        final var aTicketId = TicketID.from(anIn);
        return this.Gateway.findById(aTicketId)
                .map(TicketByIdOutput::from)
                .orElseThrow(NotFound(aTicketId));
    }

    private static Supplier<NotFoundException> NotFound(final TicketID anId) {
        return () -> NotFoundException.with(Ticket.class, anId);
    }
}
