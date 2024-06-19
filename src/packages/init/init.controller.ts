import { GluegunToolbox } from "gluegun";
import { Controller } from "../../core/common/aggregate/controller/controller";
import { ControllerInterface } from "../../core/common/aggregate/controller/controller.interface";
import { databaseQuestions } from "../shared/prompts/database.prompt";
import { InitialHeadComponent } from "./components/initial-head.component";
import { infos } from "../shared/prompts/infos.prompt";
import { CreateInfoUseCase } from "../../core/packages/infos/applications/create/create-info.useCase";
import { CreateInfoInput } from "../../core/packages/infos/applications/create/create-info.output.dto";
import { CreateDatabaseUseCase } from "../../core/packages/databases/applications/create/create-database.useCase";
import { CreateDatabaseInput } from "../../core/packages/databases/applications/create/create-database.input.dto";
import { CreateDatabaseOutput } from "../../core/packages/databases/applications/create/create-database.output.dto";
import { CreateInfoOutput } from "../../core/packages/infos/applications/create/create-info.input.dto";
import { DatabaseHeadComponent } from "../../packages/shared/components/database-head.component";

export class InitController extends Controller implements ControllerInterface{
  protected initialHeadComponent: InitialHeadComponent;
  protected databaseHeadComponent: DatabaseHeadComponent;
  protected createInfoUseCase: CreateInfoUseCase;
  protected createDatabaseUseCase: CreateDatabaseUseCase;
  constructor(
      toolbox: GluegunToolbox, 
      createInfoUseCase: CreateInfoUseCase,
      createDatabaseUseCase: CreateDatabaseUseCase,
    ) {
    super(toolbox);
    this.initialHeadComponent = new InitialHeadComponent(toolbox);
    this.databaseHeadComponent = new DatabaseHeadComponent(toolbox);
    this.createInfoUseCase = createInfoUseCase;
    this.createDatabaseUseCase = createDatabaseUseCase;
  }
  async exec() {
    const{parameters, print} = this.toolbox
    if(!parameters.first) {
      print.error("You need to pass the project name")
      return null
    }
    this.initialHeadComponent.handle();
    const info = await this.info();
    const databases = await this.mysql();
    const treatment = this.treatments({ info, databases })
    this.toolbox.filesystem.write("flup.json", treatment);
  }

  async info() {
    const{ prompt, print, parameters, strings: {plural, startCase, lowerCase, singular} } = this.toolbox;
    try{
      delete infos[0]
      delete infos[4]
      const info = await prompt.ask(infos)
      info.name =  plural(startCase(parameters.first || ""));
      info.keywords = `[${info.keywords.split(", ")}]`;
      info.author["name"] =  startCase(info.author["name"]);
      info.package = `com.project.${lowerCase(singular(parameters.first || ""))}`;
      return this.createInfoUseCase.execute(info as unknown as CreateInfoInput);
    } catch(ex: any){
      print.error(ex);
    }
  }

  async mysql(){
    const { prompt, print } = this.toolbox;
    try{
      this.databaseHeadComponent.handle();
      const database = await prompt.ask(databaseQuestions);
      return this.createDatabaseUseCase.execute([database] as unknown as CreateDatabaseInput);
    } catch(ex: any){
      print.error(ex);
    }
  }
  
  treatments({info, databases}: {info: CreateInfoOutput | undefined, databases: CreateDatabaseOutput | undefined}): string {
    return JSON.stringify({project:{ info } , configs: {databases}, modules: [] }, null, 2)
  }
  
  item(): void {
    throw new Error("Method not implemented.");
  }
  
  validate(): void {
    throw new Error("Method not implemented.");
  }
  
}