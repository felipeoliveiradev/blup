
export interface ISeed {
  exec(): void
  generations(): Promise<void>
  treatments(): any
}

export interface ISeedChild {
  exec(): void
  generations(): void
  treatments(): any
}

export interface ISeedTreatmentReport {
  props: ISeedTreatmentReportProps
  target: string
  moduleName: string
}
export interface ISeedTreatmentReportProps {
  declarationType: any
  // validations?: IValidationsClass
  lettersCases: any
  packageName: string
  normalCase?: string
  columns?: string
  // entity: IEntity[]
  plural?: string
  extraField?: any
}
