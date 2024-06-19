
import { GluegunCommand, GluegunToolbox } from 'gluegun';
import { InitController } from '../../packages/init/init.controller';
import { InfoRepositoryPackage } from '../../packages/shared/repositorys/info.repository';
import { CreateInfoUseCase } from '../../core/packages/infos/applications/create/create-info.useCase';
import { DatabaseRepositoryPackage } from '../../packages/shared/repositorys/database.repository';
import { CreateDatabaseUseCase } from '../../core/packages/databases/applications/create/create-database.useCase';

const command: GluegunCommand = {
  name: 'init',
  alias: ['i'],
  run: async (toolbox: GluegunToolbox) => {
    const infoRepositoryPackage = new InfoRepositoryPackage();
    const databaseRepositoryPackage = new DatabaseRepositoryPackage();
    
    new InitController(toolbox, 
      new CreateInfoUseCase(infoRepositoryPackage),
      new CreateDatabaseUseCase(databaseRepositoryPackage)
      ).exec();
  },
}

module.exports = command