import { Author } from "core/packages/authors/domains/author.entity";

export type DeleteInfoInput = {
  name: string;
  version: string;
  author: Author;
  package: string;
};
