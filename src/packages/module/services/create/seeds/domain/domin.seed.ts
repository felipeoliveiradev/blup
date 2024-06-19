import { Module } from "../../../../../../core/packages/modules/domains/module.entity";
import { DeclarationType } from "../../../../../system/declarationType/DeclarationType";
import { ISeed } from "../../../../../system/seeds/ISeed";
import { Seed } from "../../../../../system/seeds/Seed";

export class DomainSeed extends Seed implements ISeed {
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
    const { template, strings: { startCase, singular } } = this.toolbox;
    const name = startCase(singular(this.item.getInfo.toJSON().name as string))

    const props = {
      name,
      package: this.file?.project.info.package,
      entity: this.item.toJson().entity,
      declarationType: DeclarationType
    }

    await template.generate({
      template: 'modules/domain/Entity.java.ejs',
      target: `./src/main/java/${this.file?.project.info.package.replace(/\./g, "/")}/modules/${singular(name)}/domain/${name}.java`,
      props
    })
    await template.generate({
      template: 'modules/domain/Gateway.java.ejs',
      target: `./src/main/java/${this.file?.project.info.package.replace(/\./g, "/")}/modules/${singular(name)}/domain/${name}Gateway.java`,
      props
    })
    await template.generate({
      template: 'modules/domain/ID.java.ejs',
      target: `./src/main/java/${this.file?.project.info.package.replace(/\./g, "/")}/modules/${singular(name)}/domain/${name}ID.java`,
      props
    })
    await template.generate({
      template: 'modules/domain/SearchQuery.java.ejs',
      target: `./src/main/java/${this.file?.project.info.package.replace(/\./g, "/")}/modules/${singular(name)}/domain/${name}SearchQuery.java`,
      props
    })
     await template.generate({
      template: 'modules/domain/Validator.java.ejs',
      target: `./src/main/java/${this.file?.project.info.package.replace(/\./g, "/")}/modules/${singular(name)}/domain/${name}Validator.java`,
      props
    })



  }
  treatments() {
    throw new Error("Method not implemented.");
  }
}