import { Module } from "../../../../../../core/packages/modules/domains/module.entity";
import { ISeed } from "../../../../../system/seeds/ISeed";
import { PropsSeed, Seed } from "../../../../../system/seeds/Seed";

export class ListApplicationSeed extends Seed implements ISeed {
  private item: Module;

  constructor(item: Module, props: PropsSeed, toolbox: any) {
    super(toolbox, props);
    this.item = item;
    this.converter();
  }

  exec(): void {
    throw new Error("Method not implemented.");
  }

  async generations(): Promise<void> {
    const{ toolbox, props} = this;
    const { template } = toolbox;
    
    await template.generate({
      template: 'modules/application/retrieve/list/ListOutput.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/retrieve/list/List${this.props?.name.plural}Output.java`,
      props
    })
    await template.generate({
      template: 'modules/application/retrieve/list/ListUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/retrieve/list/List${this.props?.name.plural}UseCase.java`,
      props
    })
    await template.generate({
      template: 'modules/application/retrieve/list/DefaultListUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/retrieve/list/DefaultList${this.props?.name.plural}UseCase.java`,
      props
    })
  }
  
  treatments() {
    throw new Error("Method not implemented.");
  }
}