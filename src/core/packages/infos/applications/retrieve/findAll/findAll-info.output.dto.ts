import { Author } from "core/packages/authors/domains/author.entity";

export type FindAllInfoInput = {
  name: string;
  version: string;
  author: Author;
  package: string;
};
