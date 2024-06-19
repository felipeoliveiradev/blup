import { Module } from "../../../../../../core/packages/modules/domains/module.entity";
import { ISeed } from "../../../../../system/seeds/ISeed";
import { PropsSeed, Seed } from "../../../../../system/seeds/Seed";

export class CreateApplicationSeed extends Seed implements ISeed {
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
    const { template } = this.toolbox;

    await template.generate({
      template: 'modules/application/create/CreateCommand.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/create/Create${this.props?.name.singular}Command.java`,
      props: this.props
    })
    await template.generate({
      template: 'modules/application/create/CreateOutput.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/create/Create${this.props?.name.singular}Output.java`,
      props: this.props
    })
    await template.generate({
      template: 'modules/application/create/CreateUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/create/Create${this.props?.name.singular}UseCase.java`,
      props: this.props
    })
    await template.generate({
      template: 'modules/application/create/DefaultCreateUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/create/DefaultCreate${this.props?.name.singular}UseCase.java`,
      props: this.props
    })
  }
  
  treatments() {
    throw new Error("Method not implemented.");
  }
}