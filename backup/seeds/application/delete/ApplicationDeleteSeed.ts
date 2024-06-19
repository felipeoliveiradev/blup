import {
    ISeedChild,
    ISeedTreatmentReport,
} from '../../../../src/packages/system/seeds/ISeed'

export class ApplicationDeleteSeed implements ISeedChild {
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
      template: 'modules/application/delete/DeleteOutput.java.ejs',
      target: `${target}/delete/Delete${moduleName}Output.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/delete/DeleteUseCase.java.ejs',
      target: `${target}/delete/Delete${moduleName}UseCase.java`,
      props,
    })

    await this.generate({
      template: 'modules/application/delete/DefaultDeleteUseCase.java.ejs',
      target: `${target}/delete/DefaultDelete${moduleName}UseCase.java`,
      props: props,
    })
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
