import * as fs from "fs";
import axios from "axios";
import { Service } from "../service/service.interface";
import { IUtilsDownload, IUtilsEditFiles, IUtilsExtract, IUtilsMove, IUtilsRemoveFiles } from "./utils.type";
import { FileEditor } from "../fileEditor/file/file.editor";
const AdmZip = require('adm-zip');
export class UtilsService extends Service {

  async downloadFile(props: IUtilsDownload) {
    const { url, file, path } = props
    const source = `${url}/${file}`
    const finalDist = this.toolbox.filesystem.cwd() + path + "/" + file
    try {      
      await axios({
        url: source,
        method: "get",
        responseType: "stream"
      })
      .then((response) => {
        let totalBytes = 0;
        response.data.on('data', (chunk) => {
            totalBytes += chunk.length;
            // console.log(`Downloaded ${totalBytes} bytes`);
        });
        response.data.pipe(fs.createWriteStream(finalDist,{ flags: 'a', highWaterMark: 64 * 1024 }));
        response.data.on('end', () => {
          console.log('File downloaded successfully!');
        });
      })
      .catch((error) => {
        console.error('Error downloading file:', error);
      });
    } catch (error) {
      console.log("Download failed", error);
    }
  }
  
  async extractFile(props: IUtilsExtract) {
    const {file, origin, final, finalPath } = props
    const init = file ? this.toolbox.filesystem.cwd() + file : origin
    const finalDist = finalPath ? this.toolbox.filesystem.cwd() + finalPath : final
    try {
      const zip = new AdmZip(init);
      zip.extractAllTo(finalDist, true);
      console.log('Extraction complete')
    } catch (err) {
      console.log(err)
      // handle any errors
    }
  }


  async moveFiles(props: IUtilsMove) {
    const {file, origin, final, finalPath, exclude = [] } = props
    const { filesystem } = this.toolbox
    const files = file ? filesystem.cwd() + file : origin
    const finalDist = finalPath ? filesystem.cwd() + finalPath : final
    const result = await filesystem.inspectTreeAsync(files as string)
    if(filesystem.exists(finalDist as string))
      if (result && result.children && result.children.length > 0)
        result.children.map((index: any) => {
          if(!exclude.includes(`${index.name}`)) filesystem.move(files + "/" + index.name, finalDist + "/" + index.name)
        })
  }

  async removeFiles(props: IUtilsRemoveFiles) {
    const {file, origin, exclude = [] } = props
    const { filesystem } = this.toolbox
    const files = file ? filesystem.cwd() : origin
    const result = await filesystem.inspectTreeAsync(files as string + file)
    if (result && result.children && result.children.length > 0){
      result.children.map((index: any) => {
        if(!exclude.includes(`${index.name}`)) filesystem.remove(files + "/" + index.name)
      })
    }
  }

  editFiles(props: IUtilsEditFiles) {
    try{
    const {path, outputRegex} = props
    const { filesystem } = this.toolbox
    const paths = path ? filesystem.cwd() : origin
    const editor = new FileEditor(/com.modulo.base/g, outputRegex);
    editor.processDirectory(paths);
    } catch (err) {
      this.toolbox.print.error(err);
      throw ''
    }
  }
  
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}