import * as fs   from "fs";
import * as path from "path";

export class FileEditor {

  constructor(private searchRegex: RegExp, private replaceValue: string) {}

  private walkDirectory(dir: string): string[] {
    try {
      const results: string[] = [];
      const list = fs.readdirSync(dir);

      for (const file of list) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
          results.push(...this.walkDirectory(filePath));
        } else {
          results.push(filePath);
        }
      }
      return results;
    } catch (error) {
      console.error(`Error when walking dir ${dir}`, error);
      return [];
    }
  }

  private editFile(filePath: string,searchRegex: any, replaceValue: any ) {
    const oldContent = fs.readFileSync(filePath, { encoding: "utf8" });
    const newContent = oldContent.replace(searchRegex, replaceValue);
    fs.writeFileSync(filePath, newContent, { encoding: "utf-8" });
  }

  public processDirectory(path: string) {
    const filePaths = this.walkDirectory(path);
    filePaths.forEach((item) => this.editFile(item, this.searchRegex, this.replaceValue));
  }
}
