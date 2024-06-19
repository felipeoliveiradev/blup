import { ISeedChild, ISeedTreatmentReport } from "../../../src/packages/system/seeds/ISeed"


export class InfraSeedRoot implements ISeedChild {
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
        template: `modules/infra/APIPresenter.java.ejs`,
        target: `${target}/${moduleName}APIPresenter.java`,
        props,
      })
  
      await this.generate({
        template: `modules/infra/DataEntity.java.ejs`,
        target: `${target}/${moduleName}DataEntity.java`,
        props,
      })
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
