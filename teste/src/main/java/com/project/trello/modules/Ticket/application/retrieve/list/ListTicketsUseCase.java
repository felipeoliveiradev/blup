package com.project.trello.modules.Ticket.application.retrieve.list;

import com.project.trello.modules.Flup.system.required.helpers.UseCase;
import com.project.trello.modules.Flup.system.required.pagination.Pagination;
import com.project.trello.modules.Flup.system.required.pagination.SearchQuery;

public abstract class ListTicketsUseCase extends UseCase<SearchQuery, Pagination<ListTicketsOutput>> {

}
