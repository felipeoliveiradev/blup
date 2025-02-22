package com.project.trello.modules.Flup.system.validation;

import com.project.trello.modules.Flup.system.validation.handlers.ValidationHandler;

public abstract class Validator {
    private final ValidationHandler handler;

    protected Validator(final ValidationHandler aHandler) {
        this.handler = aHandler;
    }

    public abstract void validate();

    protected ValidationHandler validationHandler() {
        return this.handler;
    }
}

