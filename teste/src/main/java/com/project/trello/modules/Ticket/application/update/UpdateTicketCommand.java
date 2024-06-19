package com.project.trello.modules.Ticket.application.update;

public record UpdateTicketCommand(
        String id,
        String name,
        Integer age,
        boolean isActive
) {
    public static UpdateTicketCommand with(
            final String aID,
            final String nameField,
            final Integer ageField,
            final boolean isActive
    ) {
        return new UpdateTicketCommand(
            aID, 
            nameField,
            ageField,
            isActive);
    }
}
