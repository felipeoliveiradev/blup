import { ValidatorRules } from '../../../../core/common/validations/rules.va';

export class BankRule {
  private list: Array<any> = [];
  name(input: string) {
    const va = new ValidatorRules(input, "name").required().string().name().validate();
    if (va) {this.list.push(va)};
  }
  
  type(input: string) {
    const va = new ValidatorRules(input, "type").required().string().customOptions(["MYSQL"]).validate();
    if (va) this.list.push(va);
  }

  username(input: string) {
    const va = new ValidatorRules(input, "username").required().string().username().validate();
    if (va) this.list.push(va);
  }

  password(input: string) {
    const va = new ValidatorRules(input, "password").required().string().validate();
    if (va) this.list.push(va);
  }

  database(input: string) {
    const va = new ValidatorRules(input, "database").required().string().minLength(3).validate();
    if (va) this.list.push(va);
  }

  url(input: string) {
    const va = new ValidatorRules(input, "url").required().string().validate();
    if (va) this.list.push(va);
  }

  check(){
    
    if(this.list.length > 0) throw this.list;
  }
}
type BankValidatorConstructorType = {
  name:     string;
  type:     string;
  username: string;
  password: string;
  database: string;
  url:      string;
}
export class BankValidator {
  private name: string;
  private type: string;
  private username: string;
  private password: string;
  private database: string;
  private url: string;

  constructor(props: BankValidatorConstructorType) {
    this.name     = props.name;
    this.type     = props.type;
    this.username = props.username;
    this.password = props.password;
    this.database = props.database;
    this.url      = props.url;
  }
  rules() {
    const va = new BankRule();
    va.name(this.name) ;
    va.type(this.type);
    va.username(this.username);
    va.password(this.password);
    va.database(this.database);
    va.url(this.url);
    return va.check()
  }
}


