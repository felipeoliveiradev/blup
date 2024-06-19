import { Entity } from "../../../common/aggregate/entity/entity.interface";
import { Data } from "node-lombok";
import { Bank } from "../../../../core/packages/banks/domains/bank.entity";

type DatabaseConstructor = Array<Bank>

@Data()
export class Database extends Entity{
  private bank: Array<Bank>;
  constructor(prop: DatabaseConstructor) {
    super();
    this.bank = prop;
  }

  create() {
    try {
    for (let index = 0; index < this.bank.length; index++) {
      new Bank(this.bank[index] as any).validate();
    }
    const database = new Database(this.bank)
    return database;
  } catch (error) {
    throw error;
  }
  }
  
  validate() {}

  toJSON() {
    return this.bank
  }
}
