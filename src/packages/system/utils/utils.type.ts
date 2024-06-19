export type IUtilsDownload = {
  url: string
  file: string,
  path: string
}

export type IUtilsExtract = {
  file?: string
  origin?: string
  final?: string
  finalPath?: string
}

export type IUtilsMove = {
  file?: string
  origin?: string
  final?: string
  finalPath?: string
  exclude?: Array<string>
}

export type IUtilsRemoveFiles = {
  file?: string
  origin?: string
  internal?: boolean
  final?: string
  finalPath?: string
  exclude?: Array<string>
}

export type IUtilsEditFiles = {
  path: string,
  inputRegex: RegExp,
  outputRegex: string,
  exclude?: Array<string>
}