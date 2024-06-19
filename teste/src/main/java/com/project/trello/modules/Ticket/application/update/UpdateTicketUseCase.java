package com.project.trello.modules.Ticket.application.update;

import com.project.trello.modules.Flup.system.required.helpers.UseCase;
import com.project.trello.modules.Flup.system.validation.handlers.Notification;
import io.vavr.control.Either;

public abstract  class UpdateTicketUseCase extends UseCase<UpdateTicketCommand, Either<Notification, UpdateTicketOutput>> {

}
