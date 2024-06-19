import { FlupRoot } from "../../../../packages/shared/types/flup.type";
import { ConverterService } from "../../../../packages/system/service/convert.service";
import { UtilsService } from "../../../../packages/system/utils/utils.service";
import { GluegunToolbox } from "gluegun";
import { exit } from 'process';

export class Controller {
  [x: string]: any
  private _toolbox: GluegunToolbox | undefined;
  private _file: any
  private _utils?: UtilsService
  constructor(toolbox: GluegunToolbox) {
    this.toolbox = toolbox;
    this.utils = new UtilsService(toolbox, this.file)
    // this.converter()
  }

  
  public async converter() {
    this.file = new ConverterService(this.toolbox).flupConfigToObject()
   
  }

  public getModulePath(): string {
    const packagesReplace = this.file?.project.info.package.replace(/\./gi, '/')
    const directory = `./src/main/java/${packagesReplace}/modules`
    return directory
  }

  async asyncForLoop<T>(arr: Array<T>) {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
       await this.item(element).finally(() => {
        if (i === arr.length - 1) {
          this.toolbox.print.success('Modules created!')
        }
      })
    } 
    exit(0);
  }
  public getProjectPath(): string {
    return './'
  }

  public getProjectResourcesPath(): string {
    return `./src/main/resources/`
  }

  public get toolbox(): GluegunToolbox {
    return this._toolbox as GluegunToolbox
  }
  public set toolbox(value: GluegunToolbox) {
    this._toolbox = value
  }

  public get file(): FlupRoot {
    return this._file
  }
  public set file(value: FlupRoot) {
    this._file = value
  }

  public get utils(): UtilsService {
    return this._utils as UtilsService
  }
  public set utils(value: UtilsService) {
    this._utils = value
  }
}
