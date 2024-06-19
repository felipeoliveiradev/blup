import { DeclarationType } from '../../../src/packages/system/declarationType/DeclarationType'
import { LettersCases } from '../../../src/packages/system/utils/lettersCases/LetterCases'
import { ApplicationDeleteSeed } from './delete/ApplicationDeleteSeed'
eveListSeed'
ationUpdateSeed'

exec()
    new ApplicationDeleteSeed(this.generate, this.singular()).exec()
    new ApplicationUpdateSeed(this.generate, this.singular()).exec()
    new ApplicationRetrieveListSeed(this.generate, this.plural()).exec()
    new ApplicationRetrieveByIdSeed(this.generate, this.singular()).exec()
  }

  treatments() {}

  singular(): ISeedTreatmentReport {
    const declarationType = DeclarationType
    const target = `${this.path}/application`

    const props = {
      entity: this.module?.entity.getListEntity(),
      declarationType,
      lettersCases: LettersCases,
      package: this.info.project.info.package,
      packageName: this.module?.info.package,
      normalCase: this.module?.info.name,
    }
    const moduleName = this.module.getNameCapitalize()
    return { props, target, moduleName }
  }
  plural(): ISeedTreatmentReport {
    const declarationType = DeclarationType
    const target = `${this.path}/application`

    const props = {
      entity: this.module.entity.getListEntity(),
      declarationType,
      lettersCases: LettersCases,
      package: this.info.project.info.package,
      packageName: this.module.getName(),
      plural: this.module.getNamePlural(),
    }
    const moduleName = this.module.getNamePluralCapitalize()
    return { props, target, moduleName }
  }
}
