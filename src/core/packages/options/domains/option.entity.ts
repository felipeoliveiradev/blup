import { Getter, Setter } from "tslombok";

type OptionConstructor<T> = {
  name: string;
  type: T;
  default: string;
  rule: string;
  custom: boolean;
  active: boolean;
};

export class Option<T> {
  @Getter
  @Setter
  private name: string;
  @Getter
  @Setter
  private type: T;
  @Getter
  @Setter
  private rule: string;
  @Getter
  @Setter
  private default: string;
  @Getter
  @Setter
  private custom: boolean;
  @Getter
  @Setter
  private active: boolean;

  constructor(prop: OptionConstructor<T>) {
    this.name = prop.name;
    this.type = prop.type;
    this.rule = prop.rule;
    this.default = prop.default;
    this.custom = prop.custom;
    this.active = prop.active;
  }
}
