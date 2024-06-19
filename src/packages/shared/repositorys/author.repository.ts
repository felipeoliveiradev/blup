import { Author } from "../../../core/packages/authors/domains/author.entity";
import { IAuthorRepository } from "../../../core/packages/authors/infra/author.repository";

export class AuthorRepositoryPackage implements IAuthorRepository<any, any> {
  async create(prop: any): Promise<any> {
    return new Author(prop).create();
  }
  delete(prop: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findByName(prop: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findAll(prop: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  update(prop: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  
}