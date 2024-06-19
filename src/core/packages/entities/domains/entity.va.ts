import { ValidatorRules } from '../../../../core/common/validations/rules.va';

export class EntityRule {
  private list: Array<any> = [];
  name(input: string) {
    const va = new ValidatorRules(input, "name").required().string().validate();
    if (va) {this.list.push(va)};
  }
  
  type(input: string) {
    const va = new ValidatorRules(input, "type").required().string().validate();
    if (va) this.list.push(va);
  }

  bank(input: Object) {
    const va = new ValidatorRules(input, "bank").object().validate();
    if (va) this.list.push(va);
  }

  validations(input: Object) {
    const va = new ValidatorRules(input, "validations").object().validate();
    if (va) this.list.push(va);
  }

  check(){
    if(this.list.length > 0) throw this.list;
  }
}
type EntityValidatorConstructorType = {
  name: string;
  type: string;
  bank: Object;
  validations: Object;
}
export class EntityValidator {
  private name: string;
  private type: string;
  private bank: Object;
  private validations: Object;
  constructor(props: EntityValidatorConstructorType) {
    this.name = props.name;
    this.type = props.type;
    this.bank = props.bank;
    this.validations = props.validations;
  }
  rules() {
    const va = new EntityRule();
    va.name(this.name) ;
    va.type(this.type);
    va.bank(this.bank);
    va.validations(this.validations);
    return va.check()
  }
}


