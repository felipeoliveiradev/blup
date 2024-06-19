import { ValidatorRules } from '../../../../core/common/validations/rules.va';

export class DatabaseRule {
  private list: Array<any> = [];
  name(input: string) {
    const va = new ValidatorRules(input, "name").required().string().name().validate();
    if (va) {this.list.push(va)};
  }
  
  version(input: string) {
    const va = new ValidatorRules(input, "version").required().string().version().validate();
    if (va) this.list.push(va);
  }

  package(input: string) {
    const va = new ValidatorRules(input, "package").required().string().package().validate();
    if (va) this.list.push(va);
  }

  check(){
    if(this.list.length > 0) throw this.list;
  }
}
type DatabaseValidatorConstructorType = {
  name: string;
  version: string;
  email: string;
  package: string;
}
export class DatabaseValidator {
  private name: string;
  private version: string;
  private email: string;
  private package: string;
  constructor(props: DatabaseValidatorConstructorType) {
    this.name = props.name;
    this.version = props.version;
    this.email = props.email;
    this.package = props.package;
  }
  rules() {
    const va = new DatabaseRule();
    va.name(this.name) ;
    va.version(this.version);
    va.package(this.package);
    return va.check()
  }
}


