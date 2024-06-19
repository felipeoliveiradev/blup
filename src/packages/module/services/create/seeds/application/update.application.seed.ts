import { Module } from "../../../../../../core/packages/modules/domains/module.entity";
import { ISeed } from "../../../../../system/seeds/ISeed";
import { PropsSeed, Seed } from "../../../../../system/seeds/Seed";

export class UpdateApplicationSeed extends Seed implements ISeed {
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
      template: 'modules/application/update/UpdateCommand.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/update/Update${this.props?.name.singular}Command.java`,
      props
    })
    await template.generate({
      template: 'modules/application/update/UpdateOutput.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/update/Update${this.props?.name.singular}Output.java`,
      props
    })
    await template.generate({
      template: 'modules/application/update/UpdateUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/update/Update${this.props?.name.singular}UseCase.java`,
      props
    })
    await template.generate({
      template: 'modules/application/update/DefaultUpdateUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/update/DefaultUpdate${this.props?.name.singular}UseCase.java`,
      props
    })
  }
  
  treatments() {
    throw new Error("Method not implemented.");
  }
}