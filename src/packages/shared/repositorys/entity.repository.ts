import { IEntityRepository } from "../../../core/packages/entities/infra/entity.repository";
import { Entity }            from "../../../core/packages/entities/domains/entity.entity";

export class EntityRepositoryPackage implements IEntityRepository<any, any> {
  async create(prop: any): Promise<any> {
    return new Entity(prop).create();
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