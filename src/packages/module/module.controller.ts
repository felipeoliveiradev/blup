import { GluegunToolbox } from "gluegun";
import { Controller } from "../../core/common/aggregate/controller/controller";
import { ControllerInterface } from "../../core/common/aggregate/controller/controller.interface";
import { CreateModuleService } from "./services/create/create.module.service";
import { CaseFunctions } from "../../packages/shared/types/flup.type";
import { DeleteModuleService } from "./services/delete/delete.module.service";
import { FindModuleService } from "./services/find/find.module.service";

export class ModuleController extends Controller implements ControllerInterface {
  constructor(
    toolbox: GluegunToolbox,
  ) {
    super(toolbox);
  }
  
  exec() {
    const { parameters } = this.toolbox;
    if(parameters.first) this.treatments(parameters.first);
  }
  
  treatments(props: string) {
  const { strings } = this.toolbox;
    const cases: CaseFunctions = {
      'create': () => {
          new CreateModuleService(this.toolbox).exec();
      },
      'delete': () => {
          new DeleteModuleService(this.toolbox).exec();
      },
      // 'update': () => {
      //     console.log('Executando caso 3');
      // },
      'find': () => {
         new FindModuleService(this.toolbox).exec();
    },
  };
  const caseFunction = cases[strings.lowerCase(props)];
  if (caseFunction) {
    caseFunction();
  } else {
    this.toolbox.print.error('Invalid command');
    return null;
  }
}

  item(): void {
    throw new Error("Method not implemented.");
  }

  validate(): void {
    throw new Error("Method not implemented.");
  }

}