import { GluegunToolbox } from "gluegun";
import { Service } from "../../../system/service/service.interface";
import { entityQuestions, infos } from "../../../shared/prompts";
import { CreateEntityInput } from "../../../../core/packages/entities/applications/create/create-entity.input.dto";
import { CreateEntityUseCase } from "../../../../core/packages/entities/applications/create/create-entity.useCase";
import { CreateInfoInput } from "../../../../core/packages/infos/applications/create/create-info.output.dto";
import { CreateInfoUseCase } from "../../../../core/packages/infos/applications/create/create-info.useCase";
import { ModuleHeadComponent } from "../../components/module-head.component";
import { ModulePrompt } from "../../prompts /module.prompt";
import { EntityRepositoryPackage } from "../../../shared/repositorys/entity.repository";
import { InfoRepositoryPackage } from "../../../shared/repositorys/info.repository";
import { Module } from "../../../../core/packages/modules/domains/module.entity";
import { Info } from "../../../../core/packages/infos/domains/info.entity";
import { Entity } from "../../../../core/packages/entities/domains/entity.entity";
import { DomainSeed } from "./seeds/domain/domin.seed";
import { ApplicationSeed } from "./seeds/application/application.seed";

export class CreateModuleService extends Service<GluegunToolbox>{

  protected moduleHeadComponent: ModuleHeadComponent;
  protected createInfoUseCase: CreateInfoUseCase;
  protected createEntityUseCase: CreateEntityUseCase;
  
  constructor(
     toolbox: GluegunToolbox
  ) {
    super(toolbox);
    this.moduleHeadComponent = new ModuleHeadComponent(toolbox);
    const entityRepositoryPackage = new EntityRepositoryPackage();
    const infoRepositoryPackage =  new InfoRepositoryPackage();
    this.moduleHeadComponent = new ModuleHeadComponent(toolbox);
    this.createInfoUseCase = new CreateInfoUseCase(infoRepositoryPackage);
    this.createEntityUseCase = new CreateEntityUseCase(entityRepositoryPackage)
  }
  async exec() {
    this.moduleHeadComponent.handle();
    const info = await this.info() as unknown as Info;
    const moduleQuestions = await this.toolbox.prompt.ask(ModulePrompt)
    const entity = await this.entity(parseInt(moduleQuestions.entityQuantity)) as unknown as Entity;
    const treatments = await this.treatments(new Module({info, entity}));
    await this.item(new Module({info, entity}));
    // await this.asyncForLoop<any | Array<any>>(treatments.modules);
    this.toolbox.filesystem.write("flup.json", JSON.stringify(treatments, null, 2));
  }

async  treatments(module: Module) {
  const { filesystem, print } = this.toolbox;
 
  try {
    const data = await filesystem.readAsync("flup.json");
    const result = JSON.parse(data as string);
    const existingModule = result.modules?.filter((item: any) => item.info.name === module.getInfo.getName);
    if (existingModule.length > 0) {
      throw new Error("Sorry, a module with this name already exists.");
    }
    result.modules.push(module);
    return result;
  } catch (error: any) {
    print.error(error.message); // Informative error message
    throw error; // Re-throw for potential handling further up
  }
}

  async info() {
    const { prompt, print, strings: {startCase, plural, singular, lowerCase}, parameters } = this.toolbox;
    try {
      delete infos[0]
      delete infos[4]
      const info = await prompt.ask(infos)
      info.name =  plural(startCase(parameters.second || ""));
      info.keywords = `[${info.keywords.split(", ")}]`;
      info.author["name"] =  startCase(info.author["name"]);
      info.package = `flup.module.${lowerCase(singular(parameters.second || ""))}`;
      return this.createInfoUseCase.execute(info as unknown as CreateInfoInput);
    } catch (ex: any) {
      print.error(ex);
    }
  }

  async entity(times: number) {
    const { prompt, print, strings: {camelCase} } = this.toolbox;
    const list: Array<any> = []
    let tentativas = 0;
    while (tentativas < times) {
      try {
        let entity: any = []
        entity = await prompt.ask(entityQuestions)
        entity.name = camelCase(entity.name);
        console.log(entity.name)
        if (list.length > 0 && list.filter((item) => item.name === entity.name).length > 0) {
          this.toolbox.print.error("This field exist please put another name")
          throw null;
        }
        const result = await this.createEntityUseCase.execute(entity as unknown as CreateEntityInput);
        list.push(result);
        tentativas++;
      } catch (ex: any) {
        print.error(ex);
      }
    }
    return list;
  }

  async item(item: Module): Promise<any> {
    return new Promise(async (resolve, rejects) => {
      try {
        const { strings: { startCase }} = this.toolbox
        // await new DomainSeed(
        //   item,
        //   `${this.getModulePath()}/${startCase(item.info.name)}`,
        //   this.toolbox,
        //   this.file
        // ).exec()
        await new DomainSeed(
          item,
          this.toolbox
        ).generations()
        await new ApplicationSeed(
          item,
          this.toolbox
        ).generations()
        // await new InfraSeed(
        //   item,
        //   `${this.getModulePath()}/${name.Capitalizer()}`,
        //   this.toolbox,
        //   this.file
        // ).exec()
        // await new SQLSeed(
        //   item,
        //   `${this.getProjectResourcesPath()}`,
        //   this.toolbox,
        //   this.file
        // ).exec()
        return resolve(this.toolbox.print.success(`Module ${startCase(this.file?.project.info.name as string)} created!`))
        
      } catch (error) {
        return rejects(error)
      }
    }
    );
  }
}