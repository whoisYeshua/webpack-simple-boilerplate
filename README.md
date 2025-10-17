# Simple Webpack 5 Boilerplate and more

I made a simple template for myself, but maybe it could be helpful for others.

## ✨ This template Features:

### [Webpack](https://webpack.js.org/)

- [`webpack`](https://www.npmjs.com/package/webpack) - Module and asset bundler
- [`webpack-cli`](https://www.npmjs.com/package/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://www.npmjs.com/package/webpack-dev-server) - Development server for webpack with live reloading
- [`webpack-merge`](https://www.npmjs.com/package/webpack-merge) - Combines a common configuration with a specific one for development or production

#### [Loaders](https://webpack.js.org/loaders/)

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - This loader allows transpiling JavaScript files using Babel and webpack
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load Sass/SCSS and compile it to CSS
  - [`sass`](https://www.npmjs.com/package/sass) - is a pure JavaScript implementation of Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Loader to process CSS with PostCSS
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports & CSS modules
- [`style-loader`](https://www.npmjs.com/package/style-loader) - Inject CSS into the DOM
- [`@svgr/webpack`](https://www.npmjs.com/package/style-loader) - Webpack loader for SVG

#### [Plugins](https://webpack.js.org/plugins/)

- [`html-webpack-plugin`](https://webpack.js.org/plugins/html-webpack-plugin/) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://webpack.js.org/plugins/mini-css-extract-plugin/) - Extract CSS into separate files
- [`ProgressPlugin`](https://webpack.js.org/plugins/progress-plugin/) - This plugin provides a way to customize how progress is reported during a compilation. (You do not need to install this plugin. _Webpack_ comes with this plugin out of the box.). You can also replace this plugin with [`webpackbar`](https://www.npmjs.com/package/webpackbar) which has more friendly UI.
- [`EnvironmentPlugin`](https://webpack.js.org/plugins/environment-plugin/) - inject `process.env` variables in your output code. (You do not need to install this plugin. _Webpack_ comes with this plugin out of the box.). You can also replace this plugin with [`webpack.DefinePlugin`](https://webpack.js.org/plugins/define-plugin) if you need more control over inserted values.
- [`copy-webpack-plugin`](https://webpack.js.org/plugins/copy-webpack-plugin/) - Copies individual files or entire directories, which already exist, to the build directory _(Only in production mode)_
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets _(Only in production mode)_
- [`terser-webpack-plugin`](https://webpack.js.org/plugins/terser-webpack-plugin/) - This plugin uses terser to minify your JavaScript (You do not need to install this plugin. _Webpack v5_ comes with the latest terser-webpack-plugin out of the box.) _(Only in production mode)_
- [`@rsdoctor/webpack-plugin`](https://rsdoctor.rs/) - Visualize the building process _(Only in production mode)_
- [`@sentry/webpack-plugin`](https://www.npmjs.com/package/@sentry/webpack-plugin) - Automatically upload source maps to Sentry and create releases for error tracking and performance monitoring _(Only in production mode)_
- [`eslint-webpack-plugin`](https://webpack.js.org/plugins/eslint-webpack-plugin/) - is an ESLint plugin for webpack _(Only in development mode)_
- [`fork-ts-checker-webpack-plugin`](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) - Webpack plugin that runs typescript type checker on a separate process _(Only in development mode)_
- [`@pmmmwh/react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - enable "Fast Refresh" (also previously known as Hot Reloading) for React components. Work closely together with [`react-refresh`](https://www.npmjs.com/package/react-refresh) _(Only in development mode)_

### [Babel](https://babeljs.io/)

- [`@babel/core`](https://babeljs.io/docs/babel-core) - Babel compiler core
- [`core-js`](https://www.npmjs.com/package/core-js) - Modular standard library for JavaScript. Includes polyfills for ECMAScript
- [`@babel/runtime`](https://babeljs.io/docs/babel-runtime) - is a library that contains Babel modular runtime helpers _(such as createClass, regeneratorRuntime and other)_. Work closely together with [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/babel-plugin-transform-runtime)

#### [Presets](https://babeljs.io/docs/en/presets)

- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). Interacts with [`.browserslistrc`](./.browserslistrc):

  ```
  last 2 chrome versions
  last 2 firefox versions
  last 2 safari versions
  ```

- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - Preset for React
- [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) - Preset for TypeScript

#### [Plugins](https://babeljs.io/docs/en/plugins)

- [`react-refresh/babel`](https://www.npmjs.com/package/react-refresh) - This package implements the wiring necessary to integrate Fast Refresh (HMR) into Babel. Work closely together with [`@pmmmwh/react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) _(Only in development mode)_
- [`@babel/plugin-transform-runtime`](https://babeljs.io/docs/babel-plugin-transform-runtime) - A plugin that enables the re-use of Babel's injected helper code (replace the direct function insertion into the code with imports from [`@babel/runtime`](https://babeljs.io/docs/babel-runtime)) to save on codesize.

### [PostCSS](https://postcss.org/)

- [`postcss`](https://www.npmjs.com/package/postcss) - is a tool for transforming styles with JS plugins
- [`autoprefixer`](https://www.npmjs.com/package/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.If you need more you can replace it with [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) which includes autoprefixer

### [EditorConfig](https://editorconfig.org/)

- [`.editorconfig`](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties) - is helper for maintain consistent coding styles across various editors and IDEs.

### [Prettier](https://prettier.io/)

- [`prettier`](https://www.npmjs.com/package/prettier) - is an code formatter. Also parse some [EditorConfig rules](https://prettier.io/docs/en/configuration.html#editorconfig)

### [ESLint](https://eslint.org/)

- [`eslint`](https://www.npmjs.com/package/eslint) - is a static code analysis tool for identifying problematic patterns.
- [`typescript-eslint`](https://www.npmjs.com/package/@typescript-eslint/parser) - allow ESLint to lint TypeScript files.

#### [Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)

- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier

#### [Plugins](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser)

- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
  - [`eslint-import-resolver-typescript`](https://www.npmjs.com/package/eslint-import-resolver-typescript) - This resolver plugin adds TypeScript support to `eslint-plugin-import`
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint. I am also extends `react/jsx-runtime` for support [new JSX transform from React 17](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports).
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - This ESLint plugin enforces the Rules of Hooks.
- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - Static AST checker for accessibility rules on JSX elements.
- [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn) - Various awesome ESLint rules.

### [Stylelint](https://stylelint.io/)

- [`stylelint`](https://www.npmjs.com/package/stylelint) - is a CSS linter

#### [Configurations](https://stylelint.io/user-guide/configure#extends)

- [`stylelint-config-standard-scss`](https://www.npmjs.com/package/stylelint-config-standard-scss) - Turns on SCSS support & some SCSS rules. By default extends `stylelint-config-standard` and `stylelint-config-recommended-scss`.
- [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard) - Turns on additional rules to enforce the common stylistic conventions found within a handful of CSS styleguides.
  > [!NOTE]
  > Since the `stylelint-config-standard-scss` package extends the `stylelint-config-standard` package, using both may be redundant and problematic. It could result in having two versions of the same dependency in your project, which can cause issues if you update only one of them. However, it can still be useful to have access to new rules provided by this package. Make sure to pay attention to this in your project.
- [`stylelint-config-recess-order`](https://www.npmjs.com/package/stylelint-config-recess-order) - Config that sorts related property declarations by grouping together in the rational order

### CI

- [`husky`](https://typicode.github.io/husky/#/) - Enable Git hooks, like `pre-commit`, `commit-msg` etc

- [`lint-staged`](https://github.com/okonet/lint-staged) - Run linters on git staged files. Work closely together with `husky` `pre-commit` hook. It has its own config, which is located in [`.lintstagedrc.json`](./.lintstagedrc.json)

- [`commitlint`](https://commitlint.js.org/#/) - Lint commit messages. Work closely together with `husky` `commit-msg` hook. It has its own config, which is located in [`.commitlintrc.json`](./.commitlintrc.json)

  Expanded by [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional) - Shareable `commitlint` config enforcing [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

- [`commitizen`](http://commitizen.github.io/cz-cli/) - is a tool designed to define a standard way of committing rules. It has its own config, which is located in [`.czrc`](./.czrc). You can use it with `npm run cm`

  Expanded by [`cz-conventional-changelog`](https://www.npmjs.com/package/cz-conventional-changelog) - A commitizen propmpts adapter for the Angular version of [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)

- #### [`semantic-release`](https://semantic-release.gitbook.io/semantic-release/)

  Automates the whole package release workflow including: determining the next version number, generating the release notes, and upgrading the package version. It has its own config, which is located in [`.releaserc.json`](./.releaserc.json) - [config description](https://semantic-release.gitbook.io/semantic-release/usage/configuration). This package is primarily used in a [CI environment](./.github/workflows/release.yml)

  ##### Plugins

  - [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer) - plugin to analyze commits with conventional-changelog. _(You do not need to install this plugin. semantic-release comes with this plugin out of the box)_. Expanded by `conventional-changelog-conventionalcommits`
    > [!NOTE]
    > Since this is project-specific, I've decided to label the "chore" type as a patch release (`{ "type": "chore", "release": "patch" }`), which is typically used for updating packages To allow for the possibility of "chore" breaking releases, add the following rule above (`{ "type": "chore", "release": "patch" }`) for correct rule applies. If you want to use default preset settings, you could delete this two lines.
  - [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator) - plugin to generate changelog content with conventional-changelog _(You do not need to install this plugin. semantic-release comes with this plugin out of the box)_. Expanded by `conventional-changelog-conventionalcommits`
  - [`@semantic-release/changelog`](https://github.com/semantic-release/changelog) - plugin to create or update a changelog file
  - [`@semantic-release/npm`](https://github.com/semantic-release/npm) - plugin to publish a npm package and bump version in `package.json`

    > [!NOTE]
    > Since this project is not a package for publication. This plugin is only needed to update the version in package.json ([this is regulated by `private: true` in package.json](https://github.com/semantic-release/npm#options))

  - [`@semantic-release/github`](https://github.com/semantic-release/github) - plugin to publish a GitHub release and comment on released Pull Requests/Issues. _(You do not need to install this plugin. semantic-release comes with this plugin out of the box)_
  - [`@semantic-release/git`](https://github.com/semantic-release/git) - plugin to commit release assets \ tag version to the project's git repository

  ##### Preset

  - [`conventional-changelog-conventionalcommits`](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits) - same preset that used for `commitizen` (`cz-conventional-changelog`) and `commitlint` (`@commitlint/config-conventional`). Since I have overridden the angular preset used by semantic-release by default, it must be declared in direct dependencies.

### [Plop](https://plopjs.com/)

- [`plop`](https://www.npmjs.com/package/plop) - micro-generator framework that makes it easy to create files

## ⚠️ Requirements ⚠️

Since some Webpack, ESLint plugins or other dev tools like (`stylelint-config-recess-order`) require `Node.js` version ≥ `20.19`. you need [`Node.js 20.19 and above`](https://nodejs.org/en/) to prepare for future changes. Check recommended version in [.nvmrc](./.nvmrc). You also may need [Docker](https://www.docker.com/get-started/), if you want run production build

## ⏬ Installation

1. Clone or download the repo
2. Browse the downloaded directory
3. Install dependencies through `npm`
   ```bash
    npm i
   ```

## 🔧 Sentry Configuration (Optional)

This template includes [Sentry](https://sentry.io/) integration for error tracking and performance monitoring in production builds. The DSN is now read from environment variables (no hardcoded DSN in the repo). To enable Sentry features, configure the following:

### Setup Steps

1. **Create a Sentry account** and project at [sentry.io](https://sentry.io/)

2. **_Local step_. Create environment configuration file**. Rename [`.env.example`](./.env.example) to `.env` in the project root
  
  + **Fill your Sentry configuration values:**

    - **`SENTRY_AUTH_TOKEN`**: Create an auth token at `https://sentry.io/orgredirect/organizations/:orgslug/settings/auth-tokens/` with "Project: Read & Write" and "Release: Admin" permissions
    - **`SENTRY_ORG`**: Your organization slug (found in your Sentry URL)
    - **`SENTRY_PROJECT`**: Your project slug (found in your Sentry project settings)
    - **`SENTRY_DSN`**: Project DSN (from Project Settings → Client Keys)
    
  + Add `.env` file to build pipe, like: `"build": "node --env-file=.env ./node_modules/webpack-cli/bin/cli.js --config-node-env production --config config/webpack/webpack.production.js",` or pass values directly `SENTRY_AUTH_TOKEN=yourtoken SENTRY_ORG=yourorg SENTRY_PROJECT=yourproj SENTRY_DSN=yourdsn npm run build` (Unix example)
3. **Configure GitHub Actions (Optional)**: If you want Sentry integration to work in your CI/CD pipeline:
   - Go to your repository **Settings** → **Secrets and variables** → **Actions**
   - Add the following **Repository secrets**:
     - `SENTRY_AUTH_TOKEN`: Your Sentry auth token
   - Add the following **Repository variables**:
     - `SENTRY_ORG`: Your organization slug
     - `SENTRY_PROJECT`: Your project slug
     - `SENTRY_DSN`: Your Sentry DSN
   - The GitHub [Deploy Action workflow](.github/workflows/deploy.yml) will use these secret & values during production builds

## ⏩ Commands

### Development environment

One-time development build:

```bash
  npm run dev
```

Watcher (will update the build after each change):

```bash
  npm run watch
```

⭐ Dev Server (provides you with a simple web server and the ability to use HMR):

```bash
  npm start
```

### Production environment

⭐ One-time production build with Bundle Analazer stats:

```bash
  npm run build
```

Run production build inside docker on http://localhost/ (you might need start Docker before run this command):

```bash
  docker compose up -d --build
```

### Formatting & Linting commands

Format & fix the code by ESLint, Prettier, and Stylelint:

```bash
  npm run format
```

Only checks the code for compliance with rules by ESLint, Prettier, and Stylelint:

```bash
  npm run lint
```

You can also use a specific formatter

```bash
  npm run lint:prettier # check for compliance with Prettier rules
  # or
  npm run lint:stylelint # check for compliance with Stylelint rules
  # or
  npm run format:eslint # format & fix the code with ESLint rules
```

Check out more commands at [`package.json` scripts section](./package.json#L7).

### Misc

Debug result ESLint config (output `eslint-output-config.json`):

```bash
  npm run debug:eslint
```

Debug result Stylelint config (output `stylelint-output-config.json`):

```bash
  npm run debug:stylelint
```

Debug result Prettier config (cli output):

```bash
  npm run debug:prettier
```

Generate React component:

```bash
npm run generate
```

Locally check your next release:

```bash
npm run semantic-release:local-check
```

It may be necessary to temporarily remove `@semantic-release/github` plugin from
[`.releaserc.json`](./.releaserc.json)

> If you want to get a more relevant check (with sync to your GitHub repository state), you could run this:
>
> ```bash
> GH_TOKEN=<YOUR_TOKEN> npx semantic-release --dry-run --no-ci
> ```
>
> [Getting GH_TOKEN instruction](https://docs.github.com/en/enterprise-server@3.6/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

Create conventional commit:

```bash
  npm run cm
```

Because husky is used in the project, this creates a certain restriction on the naming of scripts, [described here](https://github.com/commitizen/cz-cli#optional-install-and-run-commitizen-locally).

I personally prefer use [this VS Code Extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) for creating conventional commits.

## Environment comparison

- **Common** - [`webpack.config.js`](./webpack.config.js)
- **Development** - [`webpack.development.js`](./config/webpack/webpack.development.js)
- **Production** - [`webpack.production.js`](./config/webpack/webpack.production.js)

Both environments use [`webpack.config.js`](./webpack.config.js), but each environment has its own features:

| Features                  | Development                    | Production                  |
| ------------------------- | ------------------------------ | --------------------------- |
| devtool                   | ✅ - `inline-nosources-cheap-source-map`\* | ❌ - `source-map`\*\*       |
| devServer                 | ✅                             | ❌                          |
| historyApiFallback        | ✅                             | ❌                          |
| stats configuration       | ✅ - minimal                  | ❌                          |
| ESLint                    | ✅                             | ❌                          |
| TS checks                 | ✅                             | ❌                          |
| CSS implementation\*\*\*  | ✅ - `style-loader`            | ✅ - `MiniCssExtractPlugin` |
| Proxy backend requests    | ✅ - `Webpack devServer.proxy` | ✅ - `NGINX proxy_pass`     |
| ReactRefreshWebpackPlugin | ✅                             | ❌                          |
| TerserPlugin              | ❌                             | ✅                          |
| CssMinimizerPlugin        | ❌                             | ✅                          |
| HtmlWebpackPlugin minify  | ❌                             | ✅                          |
| BundleAnalyzerPlugin      | ❌                             | ✅                          |
| SentryWebpackPlugin       | ❌                             | ✅                          |
| CopyWebpackPlugin         | ❌                             | ✅                          |
| Output files name         | Default                        | Contenthash with .bundle/.chunk suffixes |
| Favicon\*\*\*\*           | 🤔                             | ✅                          |

\* You can set `eval` or `false` options to increase build speed, but in this case, you [should manually](https://webpack.js.org/loaders/css-loader/#sourcemap) set `sourceMap` to `true` in `css-loader`, `scss-loader`, and `postcss-loader`.

\*\* Source maps are deleted after uploading to the Sentry server, so they are not included in the final bundle

\*\*\* `mini-css-extract-plugin` is more often used in **production** mode to get separate css files. For **development** mode (including `webpack-dev-server`) we use `style-loader`, because it injects CSS into the DOM using multiple `style` tags and works faster.

\*\*\*\* In previous commits, I refused to use the clean-webpack-output plugin because I noticed the presence of a native function that appeared in Webpack _5.20+_ `output.clean`. Unfortunately, it has certain [problems](https://github.com/jantimon/html-webpack-plugin/issues/1639) with the favicon. ~~Therefore, if this bug is not fixed soon, I will return to the previous version (especially since this plugin [was updated recently](https://github.com/johnagan/clean-webpack-plugin/releases/tag/v4.0.0)).~~

## Source

**HTML** - `public/index.html`

**JS/TS** - `src/`

**Global CSS** - `src/styles`

**Assets** - `src/assets` _- all assets that used directly in target code_

> **Fonts** - `src/assets/fonts`
>
> **Images/SVG** - `src/assets/images`
>
> **Other Assets** - `src/assets/*`

**Static files** - `public/static` _- files in this folder will be copied to the `dist` root as is (without any processing) during production builds only. During development, `devServer` will look at the `public/static` folder. E.g., `robots.txt`._

## Useful tips 💡

- SVG import

  To import SVG as a React component, use default svg extension:

  ```js
  import SvgComponent from '@assets/images/example.svg' // props => React.createElement("svg",...
  ```

  to import SVG as an asset (url), add resource query (`?url`) to svg extension:

  in _TSX/JSX/JS/TS_ files:

  ```js
  import svgSrc from '@assets/images/example.svg?url' // data:image/svg+xml;base64,PHN2ZyB4bW...
  ```

  in _CSS/SCSS_ files:

  ```css
  .svg {
    background-image: url('@assets/images/example.svg?url'); /* data:image/svg+xml;base64,PHN2ZyB4bW...*/
  }
  ```

- [`babel.config.cjs`](./babel.config.cjs)

  I set `useBuiltIns: 'usage'` which automatically detects the polyfills needed to be based on the language features used in your source code. This ensures only the minimum amount of polyfills are included in your final bundle. Additionaly i set [`proposals: true`](https://babeljs.io/docs/babel-preset-env#corejs), for `Object.groupBy`, since not all major browsers currently support it _(31.10.2023)_.

  ```js
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: { version: '3.33', proposals: true }, // The version string can be any supported core-js versions
      },
    ],
  ]
  ```

- [`webpack.production.js`](./config/webpack.production.js)

  Set these options in `TerserPlugin` to remove comments from code and prevent `LICENSE.txt` files creation.

  ```js
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      })
    ],
  },
  ```

  - [`webpack.config.js`](./webpack.config.js)

  In production mode eg `HTMLWebpackPlugin` minify your HTML code by default

  I'm decide to remove [`context`](https://webpack.js.org/configuration/entry-context/#context) field from config, since [`@pmmmwh/react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) & [`fork-ts-checker-webpack-plugin`](https://github.com/TypeStrong/fork-ts-checker-webpack-plugin) incorrectly infer root directory, while set context to `src` folder.

  - **Formatting & Linting commands**

  _ESLint_ & _Prettier_ & _Stylelint_ formatting works separately. So, when you run `npm run format:eslint` it will only fix _ESLint_ rules, but not apply Prettier rules formatting. If you want both run `npm run format:eslint && npm run format:prettier` or `npm run format`, which also includes _Stylelint_ formatting.

  To understand which extensions are used in each command, check out [`package.json` scripts section](./package.json#L7).

  - **CI**

  If you wish to make a prerelease, you can begin working in the `alpha` or `beta` branches.

  If you need to bypass the git commit hooks, use the `-n` or `--no-verify` option. For example:

  ```bash
  git commit -n -m "message" # or git commit --no-verify -m "message"
  ```

  If you need to bypass `husky` checks, pass the environment variable `HUSKY=0`. For example (macOS/Linux):

  ```bash
  HUSKY=0 git commit -m "message" # or for Windows: cross-env HUSKY=0 git commit -m "message"
  ```

  If you want to skip `semantic-release` checks for commit, you could add scope - `no-release`. For example:

  ```bash
  git commit -m "chore(no-release): message"
  ```

  If you want to skip [`release job`](<(./.github/workflows/release.yml)>) for commit, you could add `[skip ci]` text in your commit message. For example:

  ```bash
  git commit -m "chore: message [skip ci]"
  ```

  If you want ti skip all above:

  ```bash
  git commit -n -m "chore(no-release): message [skip ci]"
  ```

## 📝 To Do

- [x] - Add React Hot Reloading support - [`react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin/)

- [x] - Upgrade `stylelint` to `15.0.0`

- [x] - Add runtime tsc checks

- [x] - Add SVG loader

- [x] - Add [`semantic-release`](https://semantic-release.gitbook.io/semantic-release/)

- [x] - Add env webpack plugin

## In addition

This template is based on the migration of [this example](https://www.youtube.com/watch?v=eSaF8NXeNsA&t=9554s) to Webpack 5 and also from these sources:

- [webpack Boilerplate](https://github.com/taniarascia/webpack-boilerplate) - Sensible webpack 5 boilerplate using Babel, PostCSS, and Sass with a hot dev server and an optimized production build.
- [Webpack 5 Boilerplate Template](https://github.com/WeAreAthlon/frontend-webpack-boilerplate) - Simple starter webpack 5 project template supporting SASS/PostCSS, Babel ES7, browser syncing, code linting. Easy project setup having multiple features and developer-friendly tools.
- [Create App](https://createapp.dev/) - Frontend build config generator
