import { Service } from "../../packages/system/service/service.interface";
import { UtilsService } from "../../packages/system/utils/utils.service";
import { VerifyService } from "../system/service/verify.service";
import { renameSync } from "fs";
export class ProjectService extends Service {
  async preSetup(){
    this.converter()
    const {filesystem} = this.toolbox
    const path = `/src/main/java/${this.file?.project.info.package.replace(/\./g, "/")}`
    const pathName = '/flup-java-default-master'
    const verifyService = new VerifyService(this.toolbox)
    const resultFlupMainZip =verifyService.flupMainZip()
    const resultScaffold = verifyService.flupPath(pathName)
    const utils = new UtilsService(this.toolbox, this.file);
    await cases(resultFlupMainZip, resultScaffold, utils);
    await utils.sleep(10000)
    await utils.extractFile({file: "/master.zip", finalPath: "/"})
    await utils.sleep(5000)
    await utils.moveFiles({file: pathName, finalPath: "/"})
    await utils.sleep(5000)
    await this.addApplication(filesystem.cwd() + "/src/main/java")
    await utils.sleep(5000)
    await this.addApplicationProperties(filesystem.cwd() + "/src/main/resources")
    await utils.sleep(5000)
    await this.addBuild(filesystem.cwd() + "/")
    await utils.sleep(5000)
    await utils.downloadFile({ url: "https://github.com/felipeoliveiradev/flup-modules/archive", file: "main.zip", path });
    await utils.sleep(5000)
    await utils.extractFile({file: path + "/main.zip", finalPath: path})
    await utils.sleep(5000)
    await renameSync(`${filesystem.cwd() +  path}/flup-modules-main`, `${filesystem.cwd() + path}/modules`);
    await utils.sleep(5000)
    await utils.removeFiles({file: pathName })
    await utils.sleep(5000)
    filesystem.remove(filesystem.cwd() + pathName)
    filesystem.remove(`${filesystem.cwd() +  path}/main.zip`)
    filesystem.remove(`${filesystem.cwd()}/master.zip`)
  }

  async renameFiles(path: string){
    const utils = new UtilsService(this.toolbox, this.file);
    await utils.editFiles({path, inputRegex: /com.modulo.base/g, outputRegex: this.project?.info.package as string})
  }

  async addApplication(path: string){
    await this.toolbox.template.generate({
      template: 'Application.java.ejs',
      target: `${path}/${this.file?.project.info.package.replace(/\./g, "/")}/Application.java`,
      props: { 
        project: this.file?.project,
        toolbox: this.toolbox
      },
    })
  }

  async addApplicationProperties(path: string){
    await this.toolbox.template.generate({
      template: 'resources/application-development.yml.ejs',
      target: `${path}/application-development.yml`,
      props: { 
        username: this.file?.configs.databases[0].username,
        password: this.file?.configs.databases[0].password,
        url: this.file?.configs.databases[0].url,
        schema: this.file?.configs.databases[0].database
      },
    })
    await this.toolbox.template.generate({
      template: 'resources/application-test.yml.ejs',
      target: `${path}/application-test.yml`,
      props: { 
        username: this.file?.configs.databases[0].username,
        password: this.file?.configs.databases[0].password,
        url: this.file?.configs.databases[0].url,
        schema: this.file?.configs.databases[0].database
      },
    })
  }

  async addBuild(path: string){
    await this.toolbox.template.generate({
      template: 'build.gradle.ejs',
      target: `${path}/build.gradle`,
      props: { 
        package: this.file?.project.info.package,
        version: this.file?.project.info.version,
        username: this.file?.configs.databases[0].username,
        password: this.file?.configs.databases[0].password,
        url: this.file?.configs.databases[0].url,
        schema: this.file?.configs.databases[0].database
      },
    })
  }
}

async function cases(resultFlupMainZip: boolean, resultScaffold: boolean, utils: UtilsService) {
  if (resultFlupMainZip || resultScaffold) { await utils.removeFiles({ file: "/", exclude: ["flup.json", "master.zip"] }); }
  else if (!resultFlupMainZip) { await utils.downloadFile({ url: "https://github.com/felipeoliveiradev/flup-java-default/archive", file: "master.zip", path: ""}); }
}
