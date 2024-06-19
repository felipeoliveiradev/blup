import { DeclarationType } from '../../../src/packages/system/declarationType/DeclarationType'
import { ISeed, ISeedTreatmentReport } from '../../../src/packages/system/seeds/ISeed'
import { Seed } from '../../../src/packages/system/seeds/Seed'
import { LettersCases } from '../../../src/packages/system/utils/lettersCases/LetterCases'
import { InfraSeedRoot } from './InfraSeedRoot'
import { InfraFrameworkSpringDatabaseMysqlSeed } from './frameworks/spring/Databases/InfraFrameworkSpringDatabaseMysqlSeed'
import { InfraRequestSeed } from './http/request/InfraRequestSeed'
import { InfraResponseSeed } from './http/response/InfraResponseSeed'

export class InfraSeed extends Seed implements ISeed {
  exec(): void {
    this.generations()
  }

  generations(): void {
    const infraSeedRoot = new InfraSeedRoot(this.generate, this.treatments())
    infraSeedRoot.exec()

    const infraRequestSeed = new InfraRequestSeed(this.generate, this.treatments())
    infraRequestSeed.exec()

    const infraResponseSeed = new InfraResponseSeed(this.generate, this.treatments())
    infraResponseSeed.exec()

    if (this.module.configs.bank) {
      const infraFrameworkSpringDatabaseMysqlSeed = new InfraFrameworkSpringDatabaseMysqlSeed(
        this.generate,
        this.treatments()
      )
      infraFrameworkSpringDatabaseMysqlSeed.exec()
    }
  }

  treatments(): ISeedTreatmentReport {
    const declarationType = DeclarationType
    const target = `${this.path}/infra`

    const props = {
      entity: this.module.entity.getListEntity(),
      declarationType,
      bank: this.module.configs.bank,
      lettersCases: LettersCases,
      package: this.info.project.info.package,
      packageName: this.module.getName(),
      plural: this.module.getNamePlural(),
      columns: this.module.entity.getColumns(),
      extraField: this.parseLike(),
    }

    const moduleName = this.module.getNameCapitalize()
    return { props, target, moduleName }
  }

  parseLike() {
    const listCreate: string[] = []
    const list: string[] = []

    this.module.entity.getListEntity().forEach((item: any) => {
      if (item.request === undefined || (item.request.search !== undefined && item.request.search)) {
        list.push(`${item.name}Like`)
        if (item.request === undefined) {
          listCreate.push(
            `final Specification<${this.module.getNameCapitalize()}DataEntity> ${
              item.name
            }Like = like("${item.name}", str);`
          )
        }
      }
    })

    const finalReturnResult = list.join('.or(')

    return `
      ${listCreate.join('\n      ')}
      
      return ${finalReturnResult};

    `
  }
}
