export const databaseQuestions = [
  {
    type: 'input',
    name: 'name',
    message: 'What name of bank?',
    required: true,
  },
  {
    type: 'select',
    name: 'type',
    message: 'What type of bank?',
    required: true,
    choices: ['MYSQL'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What user of bank?',
    required: true,
  },
  {
    type: 'input',
    name: 'password',
    message: 'What password of bank?',
    required: true,
  },
  {
    type: 'input',
    name: 'database',
    message: 'What name of Database?',
    required: true,
  },
  {
    type: 'input',
    name: 'url',
    message: 'What url of Database?',
    required: true,
  },
]