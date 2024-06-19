import { Bank } from "core/packages/banks/domains/bank.entity";
import { Getter, Setter } from "tslombok";

type SetupConstructor = {
  bank: Bank[]
};

export class Setup {
  @Getter
  @Setter
  private bank: Bank[];

  constructor(prop: SetupConstructor) {
    this.bank = prop.bank;
  }
}
