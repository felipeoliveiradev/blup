import { GluegunCommand }          from 'gluegun';
import { EntityRepositoryPackage } from '../../packages/shared/repositorys/entity.repository';
import { CreateEntityUseCase }     from '../../core/packages/entities/applications/create/create-entity.useCase';
import { InfoRepositoryPackage }   from '../../packages/shared/repositorys/info.repository';
import { CreateInfoUseCase }       from '../../core/packages/infos/applications/create/create-info.useCase';
import { ProjectController }       from '../../packages/project';

const command: GluegunCommand = {
  name: 'project',
  alias: ['p'],
  run: async (toolbox) => {
    const entityRepositoryPackage = new EntityRepositoryPackage();
    const infoRepositoryPackage =  new InfoRepositoryPackage();
    
    new ProjectController(toolbox, 
      new CreateInfoUseCase(infoRepositoryPackage),
      new CreateEntityUseCase(entityRepositoryPackage)
      ).exec();
  },
}

module.exports = command
