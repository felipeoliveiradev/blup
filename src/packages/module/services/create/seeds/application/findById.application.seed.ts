import { Module } from "../../../../../../core/packages/modules/domains/module.entity";
import { ISeed } from "../../../../../system/seeds/ISeed";
import { PropsSeed, Seed } from "../../../../../system/seeds/Seed";

export class FindByIDApplicationSeed extends Seed implements ISeed {
  private item: Module;

  constructor(item: Module, props:PropsSeed, toolbox: any) {
    super(toolbox, props);
    this.item = item;
    this.converter();
  }

  exec(): void {
    throw new Error("Method not implemented.");
  }

  async generations(): Promise<void> {
    const { toolbox, props } = this
    const { template } = toolbox;

    await template.generate({
      template: 'modules/application/retrieve/byId/Output.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/retrieve/byId/${this.props?.name.singular}ByIdOutput.java`,
      props
    })
    await template.generate({
      template: 'modules/application/retrieve/byId/ByIdUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/retrieve/byId/${this.props?.name.singular}ByIdUseCase.java`,
      props
    })
    await template.generate({
      template: 'modules/application/retrieve/byId/DefaultByIdUseCase.java.ejs',
      target: `./src/main/java/${this.props?.packagePath}/modules/${this.props?.name.singular}/application/retrieve/byId/Default${this.props?.name.singular}ByIdUseCase.java`,
      props
    })
  }
  
  treatments() {
    throw new Error("Method not implemented.");
  }
}