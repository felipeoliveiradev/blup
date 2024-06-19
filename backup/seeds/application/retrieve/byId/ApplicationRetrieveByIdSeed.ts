import { ISeedChild, ISeedTreatmentReport } from "../../../../../src/packages/system/seeds/ISeed"

export class ApplicationRetrieveByIdSeed implements ISeedChild {
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
      template: 'modules/application/retrieve/byId/Output.java.ejs',
      target: `${target}/retrieve/byId/${moduleName}Output.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/retrieve/byId/ByIdUseCase.java.ejs',
      target: `${target}/retrieve/byId/${moduleName}ByIdUseCase.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/retrieve/byId/DefaultByIdUseCase.java.ejs',
      target: `${target}/retrieve/byId/Default${moduleName}ByIdUseCase.java`,
      props,
    })
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
