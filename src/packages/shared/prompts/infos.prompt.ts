export const infos =  [
  {
    type: 'input',
    name: 'name',
    message: `What name ?`,
    required: true,
  },
  {
    type: 'input',
    name: 'version',
    message: `What version ?(Ex: 1.0.0)`,
    required: true,
  },
  {
    type: 'input',
    name: 'description',
    message: `What description ?`,
    required: true,
  },
  {
    type: 'input',
    name: 'keywords',
    message: `What package keywords?(Ex: flup, cli)`,
    required: true,
  },
  {
    type: 'input',
    name: 'package',
    message: `What package name ?(Ex: flup.package(module).util)`,
    required: true,
  },
  {
    type: 'input',
    name: 'author.name',
    require: true,
    message: 'What name of author?',
  },
  {
    type: 'input',
    name: 'author.email',
    require: true,
    message: 'What email of author?',
  },
  {
    type: 'input',
    name: 'author.github',
    require: true,
    message: 'What github of author?',
  },
]
