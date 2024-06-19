import { Database }            from "../../../core/packages/databases/domains/database.entity";
import { IDatabaseRepository } from "../../../core/packages/databases/infra/database.repository";

export class DatabaseRepositoryPackage implements IDatabaseRepository<any, any> {
  async create(prop: any): Promise<any> {
    const result = new Database(prop).create();
    return result;
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