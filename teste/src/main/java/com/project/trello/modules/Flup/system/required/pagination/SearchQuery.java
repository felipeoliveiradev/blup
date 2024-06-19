package com.project.trello.modules.Flup.system.required.pagination;

public record SearchQuery(
        int page,
        int perPage,
        String terms,
        String sort,
        String direction
) {
}
