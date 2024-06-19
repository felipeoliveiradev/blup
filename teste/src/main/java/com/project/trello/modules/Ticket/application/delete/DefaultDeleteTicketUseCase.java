package com.project.trello.modules.Ticket.application.delete;

import com.project.trello.modules.Ticket.domain.TicketGateway;
import com.project.trello.modules.Ticket.domain.TicketID;
import com.project.trello.modules.Flup.system.validation.Error;
import com.project.trello.modules.Flup.system.validation.Exceptions.DomainException;

import java.util.Objects;
import java.util.function.Supplier;

public class DefaultDeleteTicketUseCase extends DeleteTicketUseCase {

    private final TicketGateway Gateway;

    public DefaultDeleteTicketUseCase(final TicketGateway Gateway) {
        this.Gateway = Objects.requireNonNull(Gateway);
    }

    @Override
    public void execute(final String anIn) {
        final var aTicketId = TicketID.from(anIn);
        this.Gateway.findById(TicketID.from(anIn)).map(DeleteTicketOutput::from).orElseThrow(NotFound(aTicketId));
        this.Gateway.deleteById(TicketID.from(anIn));
    }
    private static Supplier<DomainException> NotFound(final TicketID anId) {
        return () -> DomainException.with(new Error("Ticket with ID %s was not found".formatted(anId.getValue())));
    }
}
