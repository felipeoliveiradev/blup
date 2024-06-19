import { Config } from "../../configs/domains/config.entity";
import { Entity } from "../../entities/domains/entity.entity";
import { Info } from "../../infos/domains/info.entity";

type ModuleConstructor = {
  info: Info;
  config?: Config;
  entity: Entity;
};

export class Module {
  protected info!: Info;
  protected config: any;
  protected entity!: Entity;

  constructor(prop: ModuleConstructor) {
    this.setInfo = prop.info;
    this.setConfig = prop.config || [];
    this.setEntity = prop.entity;
  }

  public get getInfo(): Info {
    return this.info;
  }

  public set setInfo(value: Info) {
    this.info = value;
  }

  public get getConfig(): Config {
    return this.config;
  }

  public set setConfig(value: any) {
    this.config = value;
  }

  public get getEntity(): Entity {
    return this.entity;
  }

  public set setEntity(value: Entity) {
    this.entity = value;
  }

  public toJson() {
    return {
      info: this.info,
      config: this.config,
      entity: this.entity,
    }
  }
}
