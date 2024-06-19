import { ISeedChild, ISeedTreatmentReport } from "../../../../../src/packages/system/seeds/ISeed"

export class ApplicationRetrieveListSeed implements ISeedChild {
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
      template: 'modules/application/retrieve/list/ListOutput.java.ejs',
      target: `${target}/retrieve/list/List${moduleName}Output.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/retrieve/list/ListUseCase.java.ejs',
      target: `${target}/retrieve/list/List${moduleName}UseCase.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/retrieve/list/DefaultListUseCase.java.ejs',
      target: `${target}/retrieve/list/DefaultList${moduleName}UseCase.java`,
      props,
    })
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
