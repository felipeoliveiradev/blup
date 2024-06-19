import { Entity } from "../../../common/aggregate/entity/entity.interface";
import { Data } from "node-lombok";
import { BankValidator } from "./bank.va";

type BankConstructor = {
  name:     string;
  type:     string;
  username: string;
  password: string;
  database: string;
  url:      string;
};

@Data()
export class Bank extends Entity{
  private name: string;
  private type: string;
  private username: string;
  private password: string;
  private database: string;
  private url: string;

  constructor(prop: BankConstructor) {
    super()
    this.name     =  prop.name;
    this.type     = prop.type;
    this.username = prop.username;
    this.password = prop.password;
    this.database = prop.database;
    this.url      = prop.url;
  }
  
  create() {
    try {
      const bank = new Bank({
        name     : this.name,
        type     : this.type,
        username : this.username,
        password : this.password,
        database : this.database,
        url      : this.url
      })
      bank.validate()
      return bank
    } catch (error) {
      throw error;
    }
  }

  validate() {
    const validator = new BankValidator({
      name     : this.name,
      type     : this.type,
      username : this.username,
      password : this.password,
      database : this.database,
      url      : this.url
    });
    validator.rules();
  }

  toJSON() {
    return {
      name     : this.name,
      type     : this.type,
      username : this.username,
      password : this.password,
      database : this.database,
      url      : this.url
    }
  }
}
