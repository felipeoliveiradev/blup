import { ISeedChild, ISeedTreatmentReport } from "../../../../../../src/packages/system/seeds/ISeed"


export class InfraFrameworkSpringDatabaseMysqlSeed implements ISeedChild {
  private props: ISeedTreatmentReport
  private generate: any

  constructor(generate: any, props: ISeedTreatmentReport) {
    this.props = props
    this.generate = generate
  }
  exec(): void {
    if(this.props)
    this.generations()
  }
  async generations() {
    const { props, target, moduleName } = this.props

      await this.generate({
        template: `modules/infra/frameworks/spring/Databases/MySQLGateway.java.ejs`,
        target: `${target}/frameworks/spring/Databases/${moduleName}MySQLGateway.java`,
        props})
  }
  treatments() {
    throw new Error('Method not implemented.')
  }
}
