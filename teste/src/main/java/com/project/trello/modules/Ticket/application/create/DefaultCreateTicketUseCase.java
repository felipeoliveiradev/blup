package com.project.trello.modules.Ticket.application.create;

import com.project.trello.modules.Ticket.domain.Ticket;
import com.project.trello.modules.Ticket.domain.TicketGateway;
import com.project.trello.modules.Flup.system.validation.handlers.Notification;
import io.vavr.control.Either;

import java.util.Objects;

import static io.vavr.API.Left;
import static io.vavr.API.Try;

public class DefaultCreateTicketUseCase  extends CreateTicketUseCase{

    private final TicketGateway Gateway;

    public DefaultCreateTicketUseCase(final TicketGateway Gateway) {
        this.Gateway = Objects.requireNonNull(Gateway);
    }

    @Override
    public Either<Notification, CreateTicketOutput> execute(final CreateTicketCommand aCommand) {
        final String nameField  = aCommand.name();
        final Integer ageField  = aCommand.age();
        final var isActive = aCommand.isActive();

        final var notificationHandler = Notification.create();

        final var aTicket = Ticket.newTicket(
            nameField,
            ageField,
            isActive
        );
        aTicket.validate(notificationHandler);

        return notificationHandler.hasError() ? Left(notificationHandler) : create(aTicket);
    }

    private Either<Notification, CreateTicketOutput> create(final Ticket aTicket){
        return Try(() -> this.Gateway.create(aTicket))
                .toEither()
                .bimap(Notification::create, CreateTicketOutput::from);
    }
}
