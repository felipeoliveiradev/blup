import { Module } from "../../../../../../core/packages/modules/domains/module.entity";
import { DeclarationType } from "../../../../../system/declarationType/DeclarationType";
import { ISeed } from "../../../../../system/seeds/ISeed";
import { Seed } from "../../../../../system/seeds/Seed";
import { CreateApplicationSeed } from "./create.application.seed";
import { DeleteApplicationSeed } from "./delete.application.seed";
import { FindByIDApplicationSeed } from "./findById.application.seed";
import { ListApplicationSeed } from "./findList.application.seed";
import { UpdateApplicationSeed } from "./update.application.seed";


export class ApplicationSeed extends Seed implements ISeed {
  private item: Module;

  constructor(item: Module, toolbox: any) {
    super(toolbox);
    this.item = item;
    this.converter();
  }

  exec(): void {
    throw new Error("Method not implemented.");
  }

  async generations(): Promise<void> {
    const { toolbox } = this;
    const { strings: { startCase, singular } } = this.toolbox;
    const props = {
      name: {
        singular: startCase(singular(this.item.getInfo.toJSON().name as string)),
        plural: this.item.getInfo.toJSON().name
      },
      packagePath: this.file?.project.info.package.replace(/\./g, "/"), 
      package: this.file?.project.info.package,
      entity: this.item.toJson().entity,
      declarationType: DeclarationType
    }    
    new CreateApplicationSeed(this.item, props, toolbox).generations();
    new DeleteApplicationSeed(this.item, props, toolbox).generations();
    new UpdateApplicationSeed(this.item, props, toolbox).generations();
    new FindByIDApplicationSeed(this.item, props, toolbox).generations();
    new ListApplicationSeed(this.item, props, toolbox).generations();

  }
  treatments() {
    throw new Error("Method not implemented.");
  }
}