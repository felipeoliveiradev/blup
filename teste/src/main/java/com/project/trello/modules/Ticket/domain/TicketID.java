
package com.project.trello.modules.Ticket.domain;


import com.project.trello.modules.Flup.system.required.helpers.Identifier;

import java.util.Objects;
import java.util.UUID;

public class TicketID extends Identifier {

    private final String value;


    public TicketID(final String value) {
        Objects.requireNonNull(value);
        this.value = value;
    }

    public static TicketID unique(){
        return  TicketID.from(UUID.randomUUID());
    }

    public static  TicketID from (final String anID){
        return new TicketID(anID);
    }

    public static TicketID from(final UUID anID){
        return  new TicketID(anID.toString().toLowerCase());
    }

    @Override
    public String getValue() {
        return value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        final TicketID that = (TicketID) o;
        return Objects.equals(getValue(), that.getValue());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getValue());
    }
}
