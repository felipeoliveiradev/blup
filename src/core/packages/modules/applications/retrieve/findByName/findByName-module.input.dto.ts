import { Config } from "core/packages/configs/domains/config.entity";
import { Entity } from "core/packages/entities/domains/entity.entity";
import { Info } from "core/packages/infos/domains/info.entity";

export type FindByNameModuleInput = {
  info: Info;
  config: Config;
  entity: Entity;
};
