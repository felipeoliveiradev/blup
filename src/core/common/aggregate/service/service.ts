import { Getter, Setter } from "tslombok";

type ServiceConstructor<T> = {
  toolbox: T
}
export class Services<T> {
  @Getter
  @Setter
  protected toolbox: T

  constructor({toolbox}: ServiceConstructor<T>) {
    this.toolbox = toolbox
  }
}
