// @ts-check

const requireField = (/** @type {string} */ fieldName) => (/** @type {string} */ value) => {
  if (String(value).length === 0) {
    return fieldName + ' is required'
  }
  return true
}

/**
 * Plop configuration
 *
 * @see https://plopjs.com/documentation/#plopfile-api
 * @param {import('node-plop').NodePlopAPI} plop
 */
const plopfile = plop => {
  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
      {
        type: 'list',
        name: 'componentSyntax',
        message: 'What is your component syntax?',
        choices: ['TSX', 'JSX'],
        default: 'TSX',
      },
      {
        type: 'list',
        name: 'styleSyntax',
        message: 'What is your style syntax?',
        choices: ['CSS', 'SCSS'],
        default: 'CSS',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.{{lowerCase componentSyntax}}',
        templateFile: 'config/plop-templates/Component/Component.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.module.{{lowerCase styleSyntax}}',
        templateFile: 'config/plop-templates/Component/Component.module.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'config/plop-templates/Component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/index.ts',
        templateFile: 'config/plop-templates/injectable-index.ts.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import {{pascalCase name}} from './{{pascalCase name}}';`,
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `\t{{pascalCase name}},`,
      },
    ],
  })
}

export default plopfile
