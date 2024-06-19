package com.project.trello.modules.Auth.modules.Token.infra.frameworks.spring;

import com.project.trello.modules.Auth.modules.Token.application.create.CreateTokenCommand;
import com.project.trello.modules.Auth.modules.Token.application.create.CreateTokenOutput;
import com.project.trello.modules.Auth.modules.Token.application.create.CreateTokenUseCase;
import com.project.trello.modules.Auth.modules.Token.application.update.UpdateTokenCommand;
import com.project.trello.modules.Auth.modules.Token.application.update.UpdateTokenOutput;
import com.project.trello.modules.Auth.modules.Token.application.update.UpdateTokenUseCase;
import com.project.trello.modules.Auth.modules.Token.infra.http.request.CreateTokenRequest;
import com.project.trello.modules.Flup.system.validation.handlers.Notification;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.Objects;
import java.util.function.Function;

@RestController
public class TokenController implements TokenAPI {

    private final CreateTokenUseCase tokenUseCase;
    private final UpdateTokenUseCase updateTokenUseCase;

    public TokenController(
            final CreateTokenUseCase tokenUseCase,
            final UpdateTokenUseCase updateTokenUseCase) {
        this.tokenUseCase = Objects.requireNonNull(tokenUseCase);
        this.updateTokenUseCase = updateTokenUseCase;
    }

    @Override
    public ResponseEntity createToken(final CreateTokenRequest input) {

        final CreateTokenCommand aCommand = CreateTokenCommand.with(
                input.username(),
                input.password());

        final Function<Notification, ResponseEntity<Notification>> onError = ResponseEntity.unprocessableEntity()::body;
        final Function<CreateTokenOutput, ResponseEntity<CreateTokenOutput>> onSuccess = output -> ResponseEntity
                .created(URI.create("/Tokens/")).body(output);
        return this.tokenUseCase.execute(aCommand).fold(onError, onSuccess);
    }

    @Override
    public ResponseEntity<?> updateByToken(final String token) {
        final UpdateTokenCommand aCommand = UpdateTokenCommand.with(
                token);

        final Function<Notification, ResponseEntity<?>> onError = ResponseEntity.unprocessableEntity()::body;
        final Function<UpdateTokenOutput, ResponseEntity<?>> onSuccess = ResponseEntity::ok;
        return this.updateTokenUseCase.execute(aCommand).fold(onError, onSuccess);
    }
}
