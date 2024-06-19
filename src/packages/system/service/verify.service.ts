import { Service } from "./service.interface";

export class VerifyService extends Service {
  flupConfigFile(){
    const { filesystem, print } = this.toolbox
    const file = filesystem.exists(filesystem.cwd() + '/flup.json')
    if(!file){
      print.error("Please run the command 'flup init'")
      throw ''
    }
  }
  flupMainZip(){
    const { filesystem } = this.toolbox
    const file = filesystem.exists(filesystem.cwd() + '/main.zip')
    return file ? true :  false
  }

  flupPath(path: string){
    const { filesystem } = this.toolbox
    const file = filesystem.exists(filesystem.cwd() + "/" + path) 
    return file ? true :  false
  }
}
