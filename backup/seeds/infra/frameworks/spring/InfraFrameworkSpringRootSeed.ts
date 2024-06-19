import { ISeedChild, ISeedTreatmentReport } from "../../../../../src/packages/system/seeds/ISeed"



export class InfraFrameworkSpringRootSeed implements ISeedChild {
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
      template: `modules/infra/frameworks/spring/API.java.ejs`,
      target: `${target}/frameworks/spring/${moduleName}API.java`,
      props,
    })
    await this.generate({
      template: `modules/infra/frameworks/spring/Controller.java.ejs`,
      target: `${target}/frameworks/spring/${moduleName}Controller.java`,
      props,
    })

    await this.generate({
      template: `modules/infra/frameworks/spring/Repository.java.ejs`,
      target: `${target}/frameworks/spring/${moduleName}Repository.java`,
      props})
    await this.generate({
      template: `modules/infra/frameworks/spring/UseCaseConfig.java.ejs`,
      target: `${target}/frameworks/spring/${moduleName}UseCaseConfig.java`,
      props,})
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
