import { GluegunToolbox } from "gluegun";
import { VerifyService }  from "./verify.service";
import { FlupRoot }       from "../../../packages/shared/types/flup.type";
export class ConverterService{
  private toolbox: GluegunToolbox
  
  constructor(toolbox: GluegunToolbox){
    this.toolbox = toolbox
  }
  flupConfigToObject(){
    try {
      new VerifyService(this.toolbox).flupConfigFile();
      const result = this.toolbox.filesystem.read("./flup.json") as string
      return JSON.parse(result) as FlupRoot
    } catch (error) {
      this.toolbox.print.error(error)
      throw ''
    }
  }
}