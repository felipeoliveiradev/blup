import { GluegunCommand } from 'gluegun';
import { ModuleController } from '../../packages/module';

const command: GluegunCommand = {
  name: 'module',
  alias: ['m'],
  run: async (toolbox) => {
    new ModuleController(toolbox).exec();
  },
}

module.exports = command
