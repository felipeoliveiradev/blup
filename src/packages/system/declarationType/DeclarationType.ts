import { LettersCases } from '../utils/lettersCases/letterCases';
import { IDeclarationType } from './IDeclarationType';

export class DeclarationType{
  private entity: any
  private list: Array<string>

  constructor({ entity }: IDeclarationType) {
    this.entity = entity
    this.list = []
  }

  exec(): string {
    return this.list.join(" ")
  }

  getPrefix(key:string){
    this.list.push(`${key}${new LettersCases(this.entity.name).Capitalizer()}`)
    return this  
  }

  getSuffix(key:string){
    this.list.push(`${new LettersCases(this.entity.name).Capitalizer()}${key}`)
    return this  
  }
  getCustom(custom:string){
    this.list.push(custom)
    return this  
  }
  getPrefixSuffix(pre:string, suf: string){
    this.list.push(`${pre}${new LettersCases(this.entity.name).Capitalizer()}${suf}`)
    return this  
  }


  getFinal(){
    this.list.push('final')
    return this  
  }
  getPrivate(){
    this.list.push('private')
    return this
  }

  getType(){
    this.list.push(this.entity.type)
    return this
  }

  getField(){
    this.list.push(this.entity.name + 'Field')
    return this
  }
  getKey(){
    this.list.push(this.entity.name)
    return this
  }

  getThis(){
    this.list.push(`this.${this.entity.name}`)
    return this
  }
  getSpace(){
    this.list.push(` `)
    return this
  }
  getEqual(){
    this.list.push(` = `)
    return this
  }
  getExtraKey(nameKey: string, key: string){
    this.list.push(` = ${nameKey}.${key}`)
    return this
  }
}
