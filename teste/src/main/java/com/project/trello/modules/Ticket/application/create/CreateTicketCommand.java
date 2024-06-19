package com.project.trello.modules.Ticket.application.create;

public record CreateTicketCommand(
        String name,
        Integer age,
        boolean isActive
) {
    public static CreateTicketCommand with(
        final String nameField,
        final Integer ageField,
        final boolean isActive
    ) {
        return new CreateTicketCommand(
        nameField,
        ageField,
        isActive);
    }
}
