import { ISeedChild, ISeedTreatmentReport } from "../../../src/packages/system/seeds/ISeed"


export class DomainGenerateSeed implements ISeedChild {
  private props: ISeedTreatmentReport
  private generate: any

  constructor(generate: any, props: ISeedTreatmentReport) {
    this.props = props
    this.generate = generate
  }
  exec(): void {
    this.generations()
  }
  async generations() {
    const { props, target, moduleName } = this.props

    await this.generate({
        template: 'modules/domain/Entity.java.ejs',
        target: `${target}/${moduleName}.java`,
        props,
      })
  
      await this.generate({
        template: 'modules/domain/Gateway.java.ejs',
        target: `${target}/${moduleName}Gateway.java`,
        props,
      })
  
      await this.generate({
        template: 'modules/domain/ID.java.ejs',
        target: `${target}/${moduleName}ID.java`,
        props,
      })
  
      await this.generate({
        template: 'modules/domain/SearchQuery.java.ejs',
        target: `${target}/${moduleName}SearchQuery.java`,
        props,
      })
      await this.generate({
        template: 'modules/domain/Validator.java.ejs',
        target: `${target}/${moduleName}Validator.java`,
        props,
      })
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
