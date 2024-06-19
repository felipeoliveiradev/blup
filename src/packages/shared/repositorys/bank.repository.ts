import { Bank } from "../../../core/packages/banks/domains/bank.entity";
import { IBankRepository } from "../../../core/packages/banks/infra/bank.repository";

export class BankRepositoryPackage implements IBankRepository<any, any> {
  async create(prop: any): Promise<any> {
    return new Bank(prop).create();
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