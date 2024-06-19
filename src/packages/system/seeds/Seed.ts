import { GluegunToolbox } from 'gluegun';
import { ConverterService } from '../service/convert.service';
import { FlupRoot } from '../../shared/types/flup.type';
import { Entity } from '../../../core/packages/entities/domains/entity.entity';
import { DeclarationType } from '../declarationType/DeclarationType';


export type PropsSeed = {
  name: {
    singular: string;
    plural: string;
  },
  packagePath?: string; 
  package?: string;
  entity: Entity;
  declarationType: typeof DeclarationType
}

export class Seed {
  private _toolbox: GluegunToolbox;
  private _props?: PropsSeed;
  protected file!: FlupRoot

  constructor(toolbox: GluegunToolbox, props?: PropsSeed) {
    this._toolbox = toolbox;
    this._props = props;
  }

  public async converter() {
    this.file = new ConverterService(this._toolbox as GluegunToolbox).flupConfigToObject()
  }

  public get toolbox(): GluegunToolbox {
    return this._toolbox;
  }

  public set toolbox(value: GluegunToolbox) {
    this._toolbox = value;
  }

  public get props(): PropsSeed | undefined {
    return this._props;
  }

  public set props(value: PropsSeed | undefined) {
    this._props = value;
  }
}
