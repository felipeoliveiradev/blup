package com.project.trello.modules.Auth.modules.Token.application.create;

import com.project.trello.modules.Flup.system.required.helpers.UseCase;
import com.project.trello.modules.Flup.system.validation.handlers.Notification;
import io.vavr.control.Either;

public abstract class CreateTokenUseCase extends UseCase<CreateTokenCommand, Either<Notification, CreateTokenOutput>> {

}
