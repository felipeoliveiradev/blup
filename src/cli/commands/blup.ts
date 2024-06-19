import { GluegunCommand } from 'gluegun';

const command: GluegunCommand = {
  name: 'blup',
  run: async (toolbox) => {
    const { print } = toolbox;
    print.success("Welcome to Blup!")
  },
}

module.exports = command
