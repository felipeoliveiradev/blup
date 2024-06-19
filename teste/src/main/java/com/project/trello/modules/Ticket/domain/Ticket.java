package com.project.trello.modules.Ticket.domain;


import com.project.trello.modules.Ticket.domain.TicketID;
import com.project.trello.modules.Flup.system.required.helpers.AggregateRoot;
import com.project.trello.modules.Flup.system.required.utils.InstantUtils;
import com.project.trello.modules.Flup.system.validation.handlers.ValidationHandler;

import java.time.Instant;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

public class Ticket extends AggregateRoot<TicketID> implements Cloneable {
    private String name;
    private Integer age;
    private boolean active;
    private final Instant createdAt;
    private Instant updatedAt;
    private Instant deletedAt;

    private Ticket(
            final TicketID anId,
            final String nameField,
            final Integer ageField,
            final boolean isActive,
            final Instant createdDateField,
            final Instant updatedDateField,
            final Instant deletedDateField
    ) {
        super(anId);
        this.name  =  nameField;
        this.age  =  ageField;
        this.active = isActive;
        this.createdAt = Objects.requireNonNull(createdDateField, "'createdAt' should not be null");
        this.updatedAt = Objects.requireNonNull(updatedDateField, "'updatedAt' should not be null");
        this.deletedAt = deletedDateField;
    }

    public static Ticket newTicket(
            final String nameField,
            final Integer ageField,
            final boolean isActive
    ) {
        final var id = TicketID.unique();
        final var now = Instant.now();
        final var deletedAt = isActive ? null : now;
        return new Ticket(
                id,
                nameField,
                ageField,
                isActive,
                now,
                now,
                deletedAt
        );
    }

    public static Ticket with(
            final Ticket aTicket
    ) {
        return with(
                aTicket.id,
                aTicket.name,
                aTicket.age,
                aTicket.active,
                aTicket.createdAt,
                aTicket.updatedAt,
                aTicket.deletedAt
        );
    }

    public static Ticket with(
            final TicketID anId,
            final String name,
            final Integer age,
            final boolean active,
            final Instant createdAt,
            final Instant updatedAt,
            final Instant deletedAt
    ) {
        return new Ticket(
                anId,
                name,
                age,
                active,
                createdAt,
                updatedAt,
                deletedAt

        );
    }

    @Override
    public void validate(final ValidationHandler handler) {
        new TicketValidator(this, handler).validate();
    }

    public void deactivate() {
        if (getDeletedAt() == null) {
            this.deletedAt = Instant.now();
        }
        this.active = false;
        this.updatedAt = Instant.now();
    }

    public void activate() {
        this.deletedAt = null;
        this.active = true;
        this.updatedAt = Instant.now();
    }


    public Ticket update(
        final String nameField,
        final Integer ageField,
        final boolean isActive
        ) {
        if (isActive) {
            this.activate();
        } else {
            this.deactivate();
        }
        this.name  =  nameField;
        this.age  =  ageField;
        this.updatedAt = Instant.now();
        return this;
    }

    public TicketID getId() {
        return id;
    }

    public String getName(){
        return name;
    }
    public Integer getAge(){
        return age;
    }
    public boolean isActive() {
        return active;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }

    public Instant getDeletedAt() {
        return deletedAt;
    }

    @Override
    public Ticket clone() {
        try {
            return (Ticket) super.clone();
        } catch (CloneNotSupportedException e) {
            throw new AssertionError();
        }
    }

}
