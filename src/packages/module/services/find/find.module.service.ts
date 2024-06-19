import { GluegunToolbox } from "gluegun";
import { Service } from "../../../system/service/service.interface";
import { ModuleHeadComponent } from "../../components/module-head.component";

export class FindModuleService extends Service<GluegunToolbox>{

  protected moduleHeadComponent: ModuleHeadComponent;
  
  constructor(
     toolbox: GluegunToolbox
  ) {
    super(toolbox);
    this.moduleHeadComponent = new ModuleHeadComponent(toolbox);
  }
  async exec() {
    this.moduleHeadComponent.handle();
    await this.treatments()
  }

async  treatments() {
  const { filesystem, print, parameters, strings } = this.toolbox;

  try {
    const data = await filesystem.readAsync("flup.json");
    const result = JSON.parse(data as string);
    const existingModule = result.modules.filter((item: any) => item.info.name === strings.startCase(strings.plural(parameters.second as string)));
    if (existingModule.length > 0) {
      this.toolbox.print.success(JSON.stringify(existingModule, null, 2));
      return result; 
    } 
    this.toolbox.print.error("Module not found");
  } catch (error: any) {
    print.error(error.message); // Informative error message
    throw error; // Re-throw for potential handling further up
  }
}
}