import { Info } from "core/packages/infos/domains/info.entity";
import { Data } from "node-lombok";

type ProjectConstructor = {
  info: Info;
};

@Data()
export class Project {
  private info: Info;

  constructor(prop: ProjectConstructor) {
    this.info = prop.info;
  }
}
