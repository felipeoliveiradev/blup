import { EntityValidator } from "./entity.va";

type EntityConstructor = {
  name: string;
  type: string;
  bank: Object;
  validations: Object;
};

export class Entity {
  protected name!: string;
  protected type!: string;
  protected bank!: Object;
  protected validations!: Object;

  constructor(prop: EntityConstructor) {
    this.name = prop.name;
    this.bank = prop.bank;
    this.type = prop.type;
    this.validations = prop.validations;
  }

  public create() {
    try {
      const info = new Entity({
        name: this.name,
        bank: this.bank,
        type: this.type,
        validations: this.validations,
      });
      info.validate();
      return info;
    } catch (error) {
      throw error;
    }
  }

  public validate() {
    const validator = new EntityValidator({
      name: this.name,
      bank: this.bank,
      type: this.type,
      validations: this.validations,
    });
    validator.rules();
  }

  public get getName(): string {
    return this.name;
  }

  public set setName(value: string) {
    this.name = value;
  }

  public get getType(): string {
    return this.type;
  }

  public set setType(value: string) {
    this.type = value;
  }

  public get getBank(): Object {
    return this.bank;
  }

  public set setBank(value: Object) {
    this.bank = value;
  }

  public get getValidations(): Object {
    return this.validations;
  }

  public set setValidations(value: Object) {
    this.validations = value;
  }

  public toJson(){
    return {
      name: this.name,
      type: this.type,
      bank: this.bank,
      validations: this.validations
    }
  }
}
