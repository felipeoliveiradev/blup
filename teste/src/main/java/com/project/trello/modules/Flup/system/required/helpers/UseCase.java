package com.project.trello.modules.Flup.system.required.helpers;

public abstract class UseCase<IN, OUT> {
    public abstract OUT execute(IN anIn);
}
