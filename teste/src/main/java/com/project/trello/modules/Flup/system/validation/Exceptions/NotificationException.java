package com.project.trello.modules.Flup.system.validation.Exceptions;

import com.project.trello.modules.Flup.system.validation.handlers.Notification;

public class NotificationException extends DomainException {
    public NotificationException(final String aMessage, final Notification notification) {
        super(aMessage, notification.getErrors());
    }
}
