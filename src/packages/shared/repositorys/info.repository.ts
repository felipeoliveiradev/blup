import { Info } from "../../../core/packages/infos/domains/info.entity";
import { IInfoRepository } from "../../../core/packages/infos/infra/info.repository";

export class InfoRepositoryPackage implements IInfoRepository<any, any> {
  async create(prop: any): Promise<any> {
    return new Info(prop).create();
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