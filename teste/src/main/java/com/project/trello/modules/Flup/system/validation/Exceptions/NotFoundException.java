package com.project.trello.modules.Flup.system.validation.Exceptions;

import com.project.trello.modules.Flup.system.required.helpers.AggregateRoot;
import com.project.trello.modules.Flup.system.required.helpers.Identifier;
import com.project.trello.modules.Flup.system.validation.Error;

import java.util.Collections;
import java.util.List;

public class NotFoundException extends DomainException {
    protected NotFoundException(final String aMessage, final List<Error> anErrors) {
        super(aMessage, anErrors);
    }

    public static NotFoundException with(
            final Class<? extends AggregateRoot<?>> anAggragate,
            final Identifier id) {

        final var anError = "%s with ID %s was not found".formatted(anAggragate.getSimpleName(), id.getValue());
        return new NotFoundException(anError, Collections.emptyList());
    }
}