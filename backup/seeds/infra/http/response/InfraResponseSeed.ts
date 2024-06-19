import { ISeedChild, ISeedTreatmentReport } from "../../../../../src/packages/system/seeds/ISeed"


export class InfraResponseSeed implements ISeedChild {
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
      template: `modules/infra/http/response/Response.java.ejs`,
      target: `${target}/http/response/${moduleName}Response.java`,
      props,
    })

    await this.generate({
      template: `modules/infra/http/response/ListResponse.java.ejs`,
      target: `${target}/http/response/List${new this.props.props.lettersCases(this.props.props.plural).Capitalizer()}Response.java`,
      props,
    })
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
