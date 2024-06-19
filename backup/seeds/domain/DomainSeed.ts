
import { DeclarationType } from "../../../src/packages/system/declarationType/DeclarationType";
import { ISeed, ISeedTreatmentReport } from "../../../src/packages/system/seeds/ISeed";
import { Seed } from "../../../src/packages/system/seeds/Seed";
import { LettersCases } from "../../../src/packages/system/utils/lettersCases/LetterCases";
import { DomainGenerateSeed } from "./DomainGenerateSeed";

export class DomainSeed extends Seed implements ISeed {
    exec(): void {
        this.generations()
    }
    generations(): void {
        new DomainGenerateSeed(this.generate, this.singular()).exec()
    }

    treatments() {
        throw new Error("Method not implemented.");
    }

    singular(): ISeedTreatmentReport {
        const declarationType = DeclarationType
        const target = `${this.path}/domain`
    
        const props = {
          entity: this.module.entity.getListEntity(),
          validations: this.module.entity.getValidations(),
          declarationType,
          lettersCases: LettersCases,
          package: this.info.project.info.package,
          packageName: this.module.getName(),
          normalCase: this.module.getName(),
        }
        const moduleName = this.module.getNameCapitalize()
        return { props, target, moduleName }
      }
      plural(): ISeedTreatmentReport {
        const declarationType = DeclarationType
        const target = `${this.path}/domain`
        const props = {
          entity: this.module.entity.getListEntity(),
          validations: this.module.entity.getValidations(),
          declarationType,
          package: this.info.project.info.package,
          lettersCases: LettersCases,
          packageName: this.module.getName(),
          plural: this.module.getNamePlural()
        }
        const moduleName = this.module.getNamePluralCapitalize()
        return { props, target, moduleName }
      }
    
}