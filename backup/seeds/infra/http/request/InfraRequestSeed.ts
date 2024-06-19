import { ISeedChild, ISeedTreatmentReport } from "../../../../../src/packages/system/seeds/ISeed"


export class InfraRequestSeed implements ISeedChild {
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
        template: `modules/infra/http/request/CreateRequest.java.ejs`,
        target: `${target}/http/request/Create${moduleName}Request.java`,
        props,
      })
  
      await this.generate({
        template: `modules/infra/http/request/UpdateRequest.java.ejs`,
        target: `${target}/http/request/Update${moduleName}Request.java`,
        props,
      })
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
