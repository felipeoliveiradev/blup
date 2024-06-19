import { Author } from "core/packages/authors/domains/author.entity";

export type FindByNameInfoOutput = {
  name: string;
  version: string;
  author: Author;
  package: string;
};
