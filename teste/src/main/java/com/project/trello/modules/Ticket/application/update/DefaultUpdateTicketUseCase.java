package com.project.trello.modules.Ticket.application.update;

import com.project.trello.modules.Ticket.domain.Ticket;
import com.project.trello.modules.Ticket.domain.TicketGateway;
import com.project.trello.modules.Ticket.domain.TicketID;
import com.project.trello.modules.Flup.system.validation.Exceptions.DomainException;
import com.project.trello.modules.Flup.system.validation.Exceptions.NotFoundException;
import com.project.trello.modules.Flup.system.validation.handlers.Notification;
import io.vavr.control.Either;

import java.util.Objects;
import java.util.function.Supplier;

import static io.vavr.API.Left;
import static io.vavr.API.Try;

public class DefaultUpdateTicketUseCase extends UpdateTicketUseCase {

    private final TicketGateway Gateway;

    public DefaultUpdateTicketUseCase(final TicketGateway Gateway) {
        this.Gateway = Objects.requireNonNull(Gateway);
    }

    @Override
    public Either<Notification, UpdateTicketOutput> execute(final UpdateTicketCommand aCommand) {
        final TicketID anId = TicketID.from(aCommand.id());
        final String nameField  = aCommand.name();
        final Integer ageField  = aCommand.age();
        final boolean isActive = aCommand.isActive();

        final Ticket aTicket = this.Gateway.findById(anId)
                .orElseThrow(NotFound(anId));

        final Notification notificationHandler = Notification.create();
        aTicket.update(
                nameField,
                ageField,
                isActive
            ).validate(notificationHandler);

        return notificationHandler.hasError() ? Left(notificationHandler) : update(aTicket);
    }

    private Either<Notification, UpdateTicketOutput> update(final Ticket aTicket){
        return Try(() -> this.Gateway.update(aTicket))
                .toEither()
                .bimap(Notification::create, UpdateTicketOutput::from);
    }

    private static Supplier<DomainException> NotFound(final TicketID anId) {
        return () -> NotFoundException.with(Ticket.class, TicketID.from(anId.getValue()));
    }
}
