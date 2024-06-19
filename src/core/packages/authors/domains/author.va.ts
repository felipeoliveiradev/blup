import { ValidatorRules } from '../../../../core/common/validations/rules.va';

export class AuthorRule {
  private list: Array<any> = [];
  name(input: string) {
    const va = new ValidatorRules(input, "name").required().string().name().validate();
    if (va) {this.list.push(va)};
  }
  
  email(input: string) {
    const va = new ValidatorRules(input, "email").required().string().email().validate();
    if (va) this.list.push(va);
  }

  github(input: string) {
    const va = new ValidatorRules(input, "github").required().string().url().validate();
    if (va) this.list.push(va);
  }

  check(){
    if(this.list.length > 0) throw this.list;
  }
}
type AuthorValidatorConstructorType = {
  name:      string;
  email:     string;
  github:    string;
}
export class AuthorValidator {
  private name: string;
  private email: string;
  private github: string;

  constructor(props: AuthorValidatorConstructorType) {
    this.name     = props.name;
    this.email     = props.email;
    this.github = props.github;
  }
  
  rules() {
    const va = new AuthorRule();
    va.name(this.name) ;
    va.email(this.email);
    va.github(this.github);
    return va.check()
  }
}


