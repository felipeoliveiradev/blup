export type FlupRoot  = {
  project: Project
  configs: Configs
  modules: Module[]
} | null

export type CaseFunctions = {
  [key: string]: () => void;
}

export type Project = {
  info: Info
}

export type Info = {
  name: string
  version: string
  keywords: string
  author: Author
  package: string
}

export type Author = {
  name: string
  github: string
  email: string
}

export type Configs = {
  databases: Database[]
}

export type Database = {
  name: string
  type: string
  username: string
  password: string
  database: string
  url: string
}

export type Module = {
  info: Info2
  configs: Configs2
  entity: Entity[]
}

export type Info2 = {
  name: string
  version: string
  description: string
  keywords?: string
  author: Author2
  keyword?: string
}

export type Author2 = {
  name: string
  github: string
  email: string
}

export type Configs2 = {
  bank?: Bank
}

export type Bank = {
  connections: Connection[]
}

export type Connection = {
  name: string
}

export type Entity = {
  name: string
  type: string
  bank?: Bank2
  validations?: Validations
}

export type Bank2 = {
  props: Props
}

export type Props = {
  size: number
  required?: boolean
}

export type Validations = {
  maxLength?: number
  minLength?: number
  name?: boolean
  username?: boolean
  password?: boolean
}
