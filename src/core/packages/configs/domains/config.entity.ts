type ConfigConstructor = {
  bank: "MYSQL" | "POSTGRES";
};

export class Config {
  private _bank: "MYSQL" | "POSTGRES";

  constructor(prop: ConfigConstructor) {
    this._bank = prop.bank;
  }

  public get bank(): "MYSQL" | "POSTGRES" {
    return this._bank;
  }

  public set bank(value: "MYSQL" | "POSTGRES") {
    this._bank = value;
  }
}
