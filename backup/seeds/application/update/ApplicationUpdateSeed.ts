import { ISeedChild, ISeedTreatmentReport } from '../../../../../shared/seeds/ISeed'

export class ApplicationUpdateSeed implements ISeedChild {
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
      template: 'modules/application/update/UpdateCommand.java.ejs',
      target: `${target}/update/Update${moduleName}Command.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/update/UpdateOutput.java.ejs',
      target: `${target}/update/Update${moduleName}Output.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/update/UpdateUseCase.java.ejs',
      target: `${target}/update/Update${moduleName}UseCase.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/update/DefaultUpdateUseCase.java.ejs',
      target: `${target}/update/DefaultUpdate${moduleName}UseCase.java`,
      props,
    })
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
