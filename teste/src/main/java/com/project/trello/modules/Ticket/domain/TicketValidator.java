package com.project.trello.modules.Ticket.domain;

import com.project.trello.modules.Flup.system.validation.ValidationField;
import com.project.trello.modules.Flup.system.validation.Validator;
import com.project.trello.modules.Flup.system.validation.handlers.ValidationHandler;
import com.project.trello.modules.Flup.system.validation.Error;

public class TicketValidator  extends Validator {
    private final Ticket Ticket;

    public TicketValidator(final Ticket aTicket, final ValidationHandler aHandler) {
        super(aHandler);
        this.Ticket = aTicket;
    }

    @Override
    public void validate() {
    }
}
