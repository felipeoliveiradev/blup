package com.project.trello.modules.Ticket.application.create;
import com.project.trello.modules.Flup.system.required.helpers.UseCase;
import com.project.trello.modules.Flup.system.validation.handlers.Notification;
import io.vavr.control.Either;

public abstract  class CreateTicketUseCase extends UseCase<CreateTicketCommand, Either<Notification, CreateTicketOutput>> {

}
