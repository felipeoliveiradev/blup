import {
    ISeedChild,
    ISeedTreatmentReport,
} from '../../../../../shared/seeds/ISeed'

export class ApplicationCreateSeed implements ISeedChild {
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
      template: 'modules/application/create/CreateCommand.java.ejs',
      target: `${target}/create/Create${moduleName}Command.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/create/CreateOutput.java.ejs',
      target: `${target}/create/Create${moduleName}Output.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/create/CreateUseCase.java.ejs',
      target: `${target}/create/Create${moduleName}UseCase.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/create/DefaultCreateUseCase.java.ejs',
      target: `${target}/create/DefaultCreate${moduleName}UseCase.java`,
      props,
    })
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
