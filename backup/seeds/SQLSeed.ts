import * as fs from 'fs'
import * as path from 'path'
import { DeclarationType } from '../../src/packages/system/declarationType/DeclarationType'
import { ISeed, ISeedTreatmentReport } from '../../src/packages/system/seeds/ISeed'
import { Seed } from '../../src/packages/system/seeds/Seed'
import { LettersCases } from '../../src/packages/system/utils/lettersCases/LetterCases'
import glob = require('glob')

export class SQLSeed extends Seed implements ISeed {
  exec(): void {
    this.validation()
    this.generations()
  }
  async generations() {
    const fileSearch = this.file()
    let file = 0
    if (this.file()) {

      if (fileSearch && fileSearch !== null) {
        const containsInitial = fileSearch.includes("initial.txt");
        const match = fileSearch.match(/\d+/);

        if (!(containsInitial && match && match.length === 1)) {
          const nextNumber = match ? parseInt(match[0]) + 1 : 0;
          file = nextNumber;
        }
      }
    }
    await this.generate({
      template: 'data.sql.ejs',
      target: `${this.path}db/migration/V${file ? file : 1
        }__${this.module.getName()}.sql`,
      props: {
        nameTable: this.module.getName(),
        sql: this.module.entity.getSQL(),
      },
    })
  }

  validation() {
    try {
      glob(
        `${this.path}db/migration/**${this.module.getName()}**`,
        (er, files) => {
          for (const file of files) {
            this.toolbox.filesystem.remove(file)
          }
        }
      )
    } catch (err: any) {
      throw err
    }
  }
  treatments(): ISeedTreatmentReport {
    const declarationType = DeclarationType
    const target = `${this.path}/infra`

    const props = {
      entity: this.module.entity.getListEntity(),
      declarationType,
      lettersCases: LettersCases,
      package: this.info.project.info.package,
      packageName: this.module.getName(),
      plural: this.module.getNamePlural(),
    }
    const moduleName = this.module.getNameCapitalize()
    return { props, target, moduleName }
  }
  file() {
    return this.getDirectories(`${this.path}db/migration`)
  }

  getDirectories(source) {
    const getMostRecentFile = (dir) => {
      const files = orderReccentFiles(dir)
      return files.length ? files[0] : undefined
    }

    const orderReccentFiles = (dir) => {
      return fs
        .readdirSync(dir)
        .filter((file) => fs.lstatSync(path.join(dir, file)).isFile())
        .map((file) => ({
          file,
          mtime: fs.lstatSync(path.join(dir, file)).mtime,
        }))
        .sort((a, b) => b.mtime.getTime() - a.mtime.getTime())
    }

    const mostRecentFile = getMostRecentFile(source);
    if (mostRecentFile !== undefined && mostRecentFile !== null) {
        return mostRecentFile.file;
    }
    return null;
  }
}
