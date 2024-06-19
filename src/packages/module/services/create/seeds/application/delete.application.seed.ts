import { Module } from "../../../../../../core/packages/modules/domains/module.entity";
import { ISeed } from "../../../../../system/seeds/ISeed";
import { PropsSeed, Seed } from "../../../../../system/seeds/Seed";

export class DeleteApplicationSeed extends Seed implements ISeed {
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

    // await template.generate({
    //   template: 'modules/application/delete/DeleteCommand.java.ejs',
    //   target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/delete/Delete${this.props?.name.singular}Command.java`,
    //   props
    // })
    await template.generate({
      template: 'modules/application/delete/DeleteOutput.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/delete/Delete${this.props?.name.singular}Output.java`,
      props
    })
    await template.generate({
      template: 'modules/application/delete/DeleteUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/delete/Delete${this.props?.name.singular}UseCase.java`,
      props
    })
    await template.generate({
      template: 'modules/application/delete/DefaultDeleteUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/delete/DefaultDelete${this.props?.name.singular}UseCase.java`,
      props
    })
  }
  
  treatments() {
    throw new Error("Method not implemented.");
  }
}