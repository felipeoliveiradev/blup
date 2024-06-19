import { ValidatorRules } from '../../../../core/common/validations/rules.va';

export class InfoRule {
  private list: Array<any> = [];
  name(input: string) {
    const va = new ValidatorRules(input, "name").required().string().name().validate();
    if (va) {this.list.push(va)};
  }
  
  version(input: string) {
    const va = new ValidatorRules(input, "version").required().string().version().validate();
    if (va) this.list.push(va);
  }

  keywords(input: string) {
    const va = new ValidatorRules(input, "keywords").required().string().validate();
    if (va) this.list.push(va);
  }

  description(input: string) {
    const va = new ValidatorRules(input, "name").required().string().minLength(3).maxLength(255).validate();
    if (va) {this.list.push(va)};
  }

  package(input: string) {
    const va = new ValidatorRules(input, "package").required().string().package().validate();
    if (va) this.list.push(va);
  }

  check(){
    if(this.list.length > 0) throw this.list;
  }
}
type InfoValidatorConstructorType = {
  name: string;
  version: string;
  package: string;
  description: string;
  keywords: string;
}
export class InfoValidator {
  private name: string;
  private version: string;
  private package: string;
  private description: string;
  private keywords: string;
  constructor(props: InfoValidatorConstructorType) {
    this.name = props.name;
    this.version = props.version;
    this.package = props.package;
    this.description = props.description;
    this.keywords = props.keywords;
  }
  rules() {
    const va = new InfoRule();
    va.name(this.name) ;
    va.version(this.version);
    va.description(this.description);
    va.package(this.package);
    va.keywords(this.keywords);
    return va.check()
  }
}


