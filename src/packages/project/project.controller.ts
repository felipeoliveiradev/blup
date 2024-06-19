import { GluegunToolbox } from "gluegun";
import { Controller } from "../../core/common/aggregate/controller/controller";
import { ControllerInterface } from "../../core/common/aggregate/controller/controller.interface";
import { ModuleHeadComponent } from "./components/project-head.component";
import { CreateEntityUseCase } from "../../core/packages/entities/applications/create/create-entity.useCase";
import { CreateInfoUseCase } from "../../core/packages/infos/applications/create/create-info.useCase";
import { ProjectService } from "./project.service";
import { UtilsService } from "../system/utils/utils.service";
import { ModuleController } from "../module";

export class ProjectController extends Controller implements ControllerInterface {

  protected moduleHeadComponent: ModuleHeadComponent;
  protected createInfoUseCase: CreateInfoUseCase;
  protected createEntityUseCase: CreateEntityUseCase;
  constructor(
    toolbox: GluegunToolbox,
    createInfoUseCase: CreateInfoUseCase,
    createEntityUseCase: CreateEntityUseCase,
  ) {
    super(toolbox);
    this.moduleHeadComponent = new ModuleHeadComponent(toolbox);
    this.createInfoUseCase = createInfoUseCase;
    this.createEntityUseCase = createEntityUseCase;
    this.converter()
  }

  async exec() {
    await this.treatments()
  }

  async treatments() {
    const projectService = new ProjectService(this.toolbox, this.file)
    const utils  = new UtilsService(this.toolbox)
    await projectService.preSetup()
    utils.sleep(5000)
    await projectService.renameFiles("/")
    utils.sleep(5000)
    if(this.file && this.file.modules.length > 0){
      new ModuleController(this.toolbox).exec();
    }
  } 

  item(): void {
    throw new Error("Method not implemented.");
  }

  validate(): void {
    throw new Error("Method not implemented.");
  }

}