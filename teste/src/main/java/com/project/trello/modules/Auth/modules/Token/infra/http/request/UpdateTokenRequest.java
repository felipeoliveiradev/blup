package com.project.trello.modules.Auth.modules.Token.infra.http.request;

import com.fasterxml.jackson.annotation.JsonProperty;

public record UpdateTokenRequest(
                @JsonProperty("refresh_token") String refreshToken) {
}
