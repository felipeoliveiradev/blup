import { GluegunToolbox } from 'gluegun'
import { FlupRoot, Project } from '../../../packages/shared/types/flup.type'
import { exit } from 'process'
import { ConverterService } from './convert.service'

export class Service <T = GluegunToolbox>{
  [x: string]: any
  protected toolbox: GluegunToolbox
  protected project: Project | null
  protected file: FlupRoot 

  constructor(toolbox: GluegunToolbox, flupRoot: FlupRoot = null) {
    this.toolbox = toolbox
    this.file = flupRoot;
    this.project = flupRoot ? flupRoot.project : null
  }


  public async converter() {
    this.file = new ConverterService(this.toolbox as GluegunToolbox).flupConfigToObject()
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
          (this.toolbox as GluegunToolbox).print.success('Modules created!')
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
}
