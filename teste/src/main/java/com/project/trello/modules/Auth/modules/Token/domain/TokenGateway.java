package com.project.trello.modules.Auth.modules.Token.domain;

public interface TokenGateway {
    Token create(String username, String password);

    Token update(String aToken);
}
