# Simple Webpack 5 Boilerplate and more

I made a simple template for myself, but maybe it will be helpful to someone.

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
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://www.npmjs.com/package/style-loader) - Inject CSS into the DOM.
- [`csv-loader`](https://www.npmjs.com/package/csv-loader) - The loader will translate csv files into JSON
- [`xml-loader`](https://www.npmjs.com/package/xml-loader) - The loader will translate xml files into JSON

#### [Plugins](https://webpack.js.org/plugins/)

- [`copy-webpack-plugin`](https://webpack.js.org/plugins/copy-webpack-plugin/) - Copies individual files or entire directories, which already exist, to the build directory
- [`html-webpack-plugin`](https://webpack.js.org/plugins/html-webpack-plugin/) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://webpack.js.org/plugins/mini-css-extract-plugin/) - Extract CSS into separate files
- [`ProgressPlugin`](https://webpack.js.org/plugins/progress-plugin/) - This plugin provides a way to customize how progress is reported during a compilation. (You do not need to install this plugin. _Webpack_ comes with this plugin out of the box.)
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets _(Only in production mode)_
- [`terser-webpack-plugin`](https://webpack.js.org/plugins/terser-webpack-plugin/) - This plugin uses terser to minify your JavaScript (You do not need to install this plugin. _Webpack v5_ comes with the latest terser-webpack-plugin out of the box.) _(Only in production mode)_
- [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer) - Visualize the size of webpack output files with an interactive zoomable treemap _(Only in production mode)_
- [`eslint-webpack-plugin`](https://webpack.js.org/plugins/eslint-webpack-plugin/) - is an ESLint plugin for webpack _(Only in development mode)_
- [`@pmmmwh/react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) - enable "Fast Refresh" (also previously known as Hot Reloading) for React components. Work closely together with [`react-refresh`](https://www.npmjs.com/package/react-refresh) _(Only in development mode)_

### [Babel](https://babeljs.io/)

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Babel compiler core
- [`core-js`](https://www.npmjs.com/package/core-js) - Modular standard library for JavaScript. Includes polyfills for ECMAScript up to 2021

#### [Presets](https://babeljs.io/docs/en/presets)

- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). Interacts with `.browserslistrc`:

  ```
  last 2 chrome versions
  last 2 firefox versions
  last 2 safari versions
  ```

- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - Preset for React
- [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) - Preset for TypeScript

#### [Plugins](https://babeljs.io/docs/en/plugins)

- [`react-refresh/babel`](https://www.npmjs.com/package/react-refresh) - This package implements the wiring necessary to integrate Fast Refresh (HMR) into Babel. Work closely together with [`@pmmmwh/react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin) _(Only in development mode)_

### [PostCSS](https://postcss.org/)

- [`PostCSS`](https://www.npmjs.com/package/postcss) - is a tool for transforming styles with JS plugins
- [`Autoprefixer`](https://www.npmjs.com/package/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.If you need more you can replace it with [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) which includes autoprefixer

### [EditorConfig](https://editorconfig.org/)

- [`EditorConfig`](https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties) - is helper for maintain consistent coding styles across various editors and IDEs.

### [Prettier](https://prettier.io/)

- [`Prettier`](https://www.npmjs.com/package/prettier) - is an code formatter. Parse some [EditorConfig rules](https://prettier.io/docs/en/configuration.html#editorconfig)

### [ESLint](https://eslint.org/)

- [`ESLint`](https://www.npmjs.com/package/eslint) - is a static code analysis tool for identifying problematic patterns.
- [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser) - is a wrapper around the Babel parser that makes it compatible with ESLint. Needed for analysis code at webpack

#### [Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)

- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier

#### [Plugins](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser)

- [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
- [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint. I am also extends `react/jsx-runtime` for support [new JSX transform from React 17](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#removing-unused-react-imports).
- [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - This ESLint plugin enforces the Rules of Hooks.
- [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - Static AST checker for accessibility rules on JSX elements
- [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn) - Various awesome ESLint rules

#### [Import issues](https://stackoverflow.com/questions/41769880/how-to-manually-add-a-path-to-be-resolved-in-eslintrc/42498220#42498220)

- [`eslint-import-resolver-alias`](https://www.npmjs.com/package/eslint-import-resolver-alias) - Allows you to manually register aliases for paths, work as `import\resolver` for [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import). _I decided to get rid of [eslint-import-resolver-webpack](https://www.npmjs.com/package/eslint-import-resolver-webpack) since it didn't support ESM webpack config. In the future, I hope to be able to remove this dirty hack when aliases would be defined in `tsconfig.json` for webpack.config and for `eslint-plugin-import`_

### [Stylelint](https://stylelint.io/)

- [`stylelint`](https://www.npmjs.com/package/stylelint) - is a CSS linter

#### [Configurations](https://stylelint.io/user-guide/configure#extends)

- [`stylelint-config-standard-scss`](https://www.npmjs.com/package/stylelint-config-standard-scss) - Turns on SCSS support & some SCSS rules. By default extends `stylelint-config-standard` and `stylelint-config-recommended-scss`. _(At the moment, it does not use the most modern version of `stylelint-config-standard`, so it goes before `stylelint-config-standard`, for the possibility of redefinition)_
- [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard) - Turns on additional rules to enforce the common stylistic conventions found within a handful of CSS styleguides
- [`stylelint-config-rational-order`](https://www.npmjs.com/package/stylelint-config-rational-order) - Config that sorts related property declarations by grouping together in the rational order
- [`stylelint-config-prettier`](https://www.npmjs.com/package/stylelint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier. _Enabled with [`stylelint-prettier`](https://www.npmjs.com/package/stylelint-prettier)_

#### [Plugins](https://stylelint.io/user-guide/configure#plugins)

- [`stylelint-order`](https://www.npmjs.com/package/stylelint-order) - is a plugin pack of order-related linting rules. _Enabled with [`stylelint-config-rational-order`](https://www.npmjs.com/package/stylelint-config-rational-order)_
- [`stylelint-prettier`](https://www.npmjs.com/package/stylelint-prettier) - Runs Prettier as a Stylelint rule and reports differences as individual Stylelint issues.

## ⚠️ Requirements ⚠️

Since some Webpack plugins supported `Node.js` version > `14.15`, you need [`16`](https://nodejs.org/en/) and higher to prepare for future changes.

## ⏬ Installation

1. Clone or download the repo
2. Browse the downloaded directory
3. Install dependencies through `npm`
   ```bash
    npm i
   ```

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

Dev Server (provides you with a simple web server and the ability to use HMR):

```bash
  npm start
```

### Production environment

One-time production build:

```bash
  npm run build
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

Check out more commands at [`package.json` scripts section](https://github.com/whoisYeshua/webpack-simple-boilerplate/blob/master/package.json#L7).

## Environment comparison

- **Common** - [webpack.config.js](https://github.com/whoisYeshua/webpack-simple-boilerplate/blob/master/webpack.config.js)
- **Development** - [webpack.development.js](https://github.com/whoisYeshua/webpack-simple-boilerplate/blob/master/config/webpack.development.js)
- **Production** - [webpack.production.js](https://github.com/whoisYeshua/webpack-simple-boilerplate/blob/master/config/webpack.production.js)

Both environments use `webpack.config.js`, but each environment has its own features:

| Features                  | Development         | Production                  |
| ------------------------- | ------------------- | --------------------------- |
| Devtool                   | ✅ - `source-map`\* | ❌                          |
| devServer                 | ✅                  | ❌                          |
| ESLint                    | ✅                  | ❌                          |
| CSS implementation\*\*    | ✅ - `style-loader` | ✅ - `MiniCssExtractPlugin` |
| ReactRefreshWebpackPlugin | ✅                  | ❌                          |
| TerserPlugin              | ❌                  | ✅                          |
| CssMinimizerPlugin        | ❌                  | ✅                          |
| HtmlWebpackPlugin minify  | ❌                  | ✅                          |
| BundleAnalyzerPlugin      | ❌                  | ✅                          |
| Output files name         | Default             | Contenthash                 |
| Favicon\*\*\*             | ❌                  | ✅                          |

\* You can set `eval-source-map` or other options to increase build speed, but in this case, you should manually set `sourceMap` to `true` in `css-loader`, `scss-loader`, and `postcss-loader`.

\*\* `mini-css-extract-plugin` is more often used in **production** mode to get separate css files. For **development** mode (including `webpack-dev-server`) we use `style-loader`, because it injects CSS into the DOM using multiple `style` tags and works faster.

\*\*\* In previous commits, I refused to use the clean-webpack-output plugin because I noticed the presence of a native function that appeared in Webpack _5.20+_ `output.clean`. Unfortunately, it has certain [problems](https://github.com/jantimon/html-webpack-plugin/issues/1639) with the favicon. Therefore, if this bug is not fixed soon, I will return to the previous version (especially since this plugin [was updated recently](https://github.com/johnagan/clean-webpack-plugin/releases/tag/v4.0.0)).

## Source

**HTML** - `public/`

**CSS** - `src/styles`

**JS** - `src/`

**Fonts** - `public/assets/fonts`

**Other Assets**- `public/assets`

## Useful tips 💡

- `babel.config.cjs`

  I set `useBuiltIns: 'usage'` which automatically detects the polyfills needed to be based on the language features used in your source code. This ensures only the minimum amount of polyfills are included in your final bundle.

  ```js
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.23', // The version string can be any supported core-js versions
      },
    ],
  ]
  ```

- `webpack.production.js`

  Set these options in `TerserPlugin` to remove comments from code and prevent `*LICENSE.txt` files creation.

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

  - `webpack.config.js`

  In production mode eg `HTMLWebpackPlugin` minify your HTML code by default

  - **Formatting & Linting commands**

  _ESLint_ & _Prettier_ formatting works separately. So, when you run `npm run format:eslint` it will only fix _ESLint_ rules, but not apply Prettier rules formatting. If you want both run `npm run format:eslint && npm run format:prettier` or `npm run format`, which also includes _Stylelint_ formatting.

  _Stylelint_ & _Prettier_ formatting works together. So, when you run `npm run fromat:stylelint` it will run _Stylelint_ rules check and fix and then run _Prettier_ formatting _(It works thanks to [`stylelint-prettier`](https://www.npmjs.com/package/stylelint-prettier))_. _Note: `npm run format:prettier` will not affect `css` or `scss` files, my Stylelint build uses Prettier under the hood as mentioned above._

  To understand which extensions are used in each command, check out [`package.json` scripts section](https://github.com/whoisYeshua/webpack-simple-boilerplate/blob/master/package.json#L7).

## 📝 To Do

- [x] - Add React Hot Reloading support - [`react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin/)

## In addition

This template is based on the migration of [this example](https://www.youtube.com/watch?v=eSaF8NXeNsA&t=9554s) to Webpack 5 and also from these sources:

- [webpack Boilerplate](https://github.com/taniarascia/webpack-boilerplate) - Sensible webpack 5 boilerplate using Babel, PostCSS, and Sass with a hot dev server and an optimized production build.
- [Webpack 5 Boilerplate Template](https://github.com/WeAreAthlon/frontend-webpack-boilerplate) - Simple starter webpack 5 project template supporting SASS/PostCSS, Babel ES7, browser syncing, code linting. Easy project setup having multiple features and developer-friendly tools.
- [Create App](https://createapp.dev/) - Frontend build config generator
