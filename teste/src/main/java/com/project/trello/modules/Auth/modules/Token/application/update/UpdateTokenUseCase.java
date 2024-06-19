package com.project.trello.modules.Auth.modules.Token.application.update;

import com.project.trello.modules.Flup.system.required.helpers.UseCase;
import com.project.trello.modules.Flup.system.validation.handlers.Notification;
import io.vavr.control.Either;

public abstract class UpdateTokenUseCase extends UseCase<UpdateTokenCommand, Either<Notification, UpdateTokenOutput>> {

}
