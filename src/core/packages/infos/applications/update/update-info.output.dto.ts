import { Author } from "core/packages/authors/domains/author.entity";

export type UpdateInfoInput = {
  name: string;
  version: string;
  author: Author;
  package: string;
};
