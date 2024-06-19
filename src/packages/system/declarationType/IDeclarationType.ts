import { Entity } from "../../../core/packages/entities/domains/entity.entity"
import { Module } from "../../../core/packages/modules/domains/module.entity"

export interface IDeclarationType {
  module?: Module
  entity: Entity
}
