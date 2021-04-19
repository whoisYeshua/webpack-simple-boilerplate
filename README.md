# Simple Webpack 5 Boilerplate and more

A simple template that I made for myself, but maybe it will be useful to someone.

## This template Features:

[`cross-env`](https://www.npmjs.com/package/cross-env) - run scripts that set and use environment variables across platforms. Used to indicate a build in developer mode

### [Webpack](https://webpack.js.org/)

- [`webpack`](https://www.npmjs.com/package/webpack) - Module and asset bundler
- [`webpack-cli`](https://www.npmjs.com/package/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://www.npmjs.com/package/webpack-dev-server) - Development server for webpack with live reloading (not for react currenty in my template)
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

- [`clean-webpack-plugin`](https://www.npmjs.com/package/clean-webpack-plugin) - is a webpack plugin to remove/clean your build folder(s)
- [`copy-webpack-plugin`](https://webpack.js.org/plugins/copy-webpack-plugin/) - Copies individual files or entire directories, which already exist, to the build directory
- [`html-webpack-plugin`](https://webpack.js.org/plugins/html-webpack-plugin/) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://webpack.js.org/plugins/mini-css-extract-plugin/) - Extract CSS into separate files
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/) - Optimize and minimize CSS assets _(Only in production mode)_
- [`terser-webpack-plugin`](https://webpack.js.org/plugins/terser-webpack-plugin/) - This plugin uses terser to minify your JavaScript (You do not need to install this plugin. _Webpack v5_ comes with the latest terser-webpack-plugin out of the box.) _(Only in production mode)_
- [`eslint-webpack-plugin`](https://webpack.js.org/plugins/eslint-webpack-plugin/) - is a ESLint plugin for webpack _(Only in development mode)_
- [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer) - Visualize size of webpack output files with an interactive zoomable treemap _(Only in production mode)_

### [Babel](https://babeljs.io/)

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Babel compiler core
- [`core-js`](https://www.npmjs.com/package/core-js) - Modular standard library for JavaScript. Includes polyfills for ECMAScript up to 2021

#### [Presets](https://babeljs.io/docs/en/presets)

- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - is a smart preset that allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). Interacts with browserslist target in `package.json`:

  ```json
  "browserslist": "> 1%, not dead"
  ```

- [`@babel/preset-typescript`](https://babeljs.io/docs/en/babel-preset-typescript) - Preset for TypeScript
- [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - Preset for React

#### [Plugins](https://babeljs.io/docs/en/plugins)

- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - This plugin transforms static class properties as well as properties declared with the property initializer syntax, [currently Stage 3 TC39](https://tc39.es/proposal-class-fields/unified.html) (You do not need to install this plugin. This plugin is included in _@babel/preset-env_)

### [PostCSS](https://postcss.org/)

- [`PostCSS`](https://www.npmjs.com/package/postcss) - is a tool for transforming styles with JS plugins
- [`Autoprefixer`](https://www.npmjs.com/package/autoprefixer) - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.If you need more you can replace it with [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) which includes autoprefixer

### [Prettier](https://prettier.io/)

- [`Prettier`](https://www.npmjs.com/package/prettier) - is an opinionated code formatter

### [ESlint](https://eslint.org/)

- [`ESLint`](https://www.npmjs.com/package/eslint) - is a static code analysis tool for identifying problematic patterns.

#### [Configuration Files](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files)

- [`eslint-config-airbnb`](https://www.npmjs.com/package/eslint-config-airbnb) - This package provides Airbnb's .eslintrc as an extensible shared config. It requires:

  - [`eslint-plugin-import`](https://www.npmjs.com/package/eslint-plugin-import) - This plugin intends to support linting of ES2015+ (ES6+) import/export syntax, and prevent issues with misspelling of file paths and import names.
  - [`eslint-plugin-react`](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint
  - [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks) - This ESLint plugin enforces the Rules of Hooks.
  - [`eslint-plugin-jsx-a11y`](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - Static AST checker for accessibility rules on JSX elements

- [`eslint-config-prettier`](https://www.npmjs.com/package/eslint-config-prettier) - urns off all rules that are unnecessary or might conflict with Prettier

#### [Plugins](https://eslint.org/docs/user-guide/configuring/plugins#specifying-parser)

- [`@babel/eslint-parser`](https://www.npmjs.com/package/@babel/eslint-parser) - is a wrapper around the Babel parser that makes it compatible with ESLint. Needed for analysis code at webpack
- [`eslint-plugin-unicorn`](https://www.npmjs.com/package/eslint-plugin-unicorn) - Various awesome ESLint rules
- [`eslint-plugin-prettier`](https://www.npmjs.com/package/eslint-plugin-prettier) - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues

#### [Import issues](https://stackoverflow.com/questions/41769880/how-to-manually-add-a-path-to-be-resolved-in-eslintrc/42498220#42498220)

- [`eslint-import-resolver-webpack`](https://www.npmjs.com/package/eslint-import-resolver-webpack) - Webpack-literate module resolution plugin for `eslint-plugin-import`

### [Stylelint](https://stylelint.io/)

- [`stylelint`](https://www.npmjs.com/package/stylelint) - is a CSS linter

#### [Configurations](https://stylelint.io/user-guide/configure#extends)

- [`stylelint-config-standard`](https://www.npmjs.com/package/stylelint-config-standard) - Turns on additional rules to enforce the common stylistic conventions found within a handful of CSS styleguides
- [`stylelint-config-rational-order`](https://www.npmjs.com/package/stylelint-config-rational-order) - Config that sorts related property declarations by grouping together in the rational order
- [`stylelint-config-prettier`](https://www.npmjs.com/package/stylelint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.

#### [Plugins](https://stylelint.io/user-guide/configure#plugins)

- [`stylelint-scss`](https://www.npmjs.com/package/stylelint-scss) - is a collection of SCSS specific linting rules
- [`stylelint-order`](https://www.npmjs.com/package/stylelint-order) - is a plugin pack of order-related linting rules
- [`stylelint-prettier`](https://www.npmjs.com/package/stylelint-prettier) - Runs Prettier as a Stylelint rule and reports differences as individual Stylelint issues.

## Installation

1. Clone or download the repo
2. Browse the downloaded directory
3. Install dependencies through `npm`
   ```bash
    npm i
   ```

## Commands

### Development environment

One-time development build:

```bash
  npm run dev
```

Watcher (will update the build after each change):

```bash
  npm run watch
```

Dev Server (provides you with a simple web server and the ability to use live reloading):

```bash
  npm start
```

### Production environment

One-time production build:

```bash
  npm run build
```

## Environment comparison

- **Common** - [webpack.config.js](https://github.com/whoisYeshua/webpack-simple-boilerplate/blob/master/webpack.config.js)
- **Development** - [webpack.development.js](https://github.com/whoisYeshua/webpack-simple-boilerplate/blob/master/config/webpack.development.js)
- **Production** - [webpack.production.js](https://github.com/whoisYeshua/webpack-simple-boilerplate/blob/master/config/webpack.production.js)

Both environments use `webpack.config.js`, but each environment has its own features:

| Features                 | Development         | Production                  |
| ------------------------ | ------------------- | --------------------------- |
| Devtool                  | ✅ - `source-map`\* | ❌                          |
| Target\*\*               | ✅ - `web `         | ✅ - `browserslist `        |
| devServer                | ✅                  | ❌                          |
| ESLint                   | ✅                  | ❌                          |
| CSS implementation\*\*\* | ✅ - `style-loader` | ✅ - `MiniCssExtractPlugin` |
| TerserPlugin             | ❌                  | ✅                          |
| CssMinimizerPlugin       | ❌                  | ✅                          |
| HtmlWebpackPlugin minify | ❌                  | ✅                          |
| BundleAnalyzerPlugin     | ❌                  | ✅                          |
| Output files name        | Default             | Contenthash                 |

\* You can set `eval-source-map` or other options to increase build speed, but in this case you should manualy set `sourceMap` to `true` in `css-loader`, `scss-loader` and `postcss-loader`.

\*\* Due HMR/Live Reloading [broken](https://github.com/webpack/webpack-dev-server/issues/2758) with usage `browserslist`. Should be resolved in `webpack-dev-server@4.0.0`

\*\*\* `mini-css-extract-plugin` is more often used in **production** mode to get separate css files. For **development** mode (including `webpack-dev-server`) we use `style-loader`, because it injects CSS into the DOM using multiple `style` tags and works faster.

## Source

**HTML** - `src/`

**CSS** - `src/styles`

**JS** - `src/`

**Fonts** - `src/assets/fonts`

**Other Assets**- `src/assets`

## Useful tips

- `.babelrc.json`

  I set `useBuiltIns: 'usage'` which automatically detects the polyfills needed based on the language features used in your source code. This ensures only the minimum amount of polyfills are included in your final bundle.

  ```js
  "presets": [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.10', // The version string can be any supported core-js versions
      }
    ]
  ]
  ```

- `webpack.production.js`

  Set this options in `TerserPlugin` to remove comments from code and prevent `*LICENSE.txt` files creation.

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

## To Do

⬜ - Add React Hot Reloading support - [`react-refresh-webpack-plugin`](https://github.com/pmmmwh/react-refresh-webpack-plugin/)

## In addition

This template is based on the migration of [this example](https://www.youtube.com/watch?v=eSaF8NXeNsA&t=9554s) to Webpack 5 and also from these sources:

- [webpack Boilerplate](https://github.com/taniarascia/webpack-boilerplate) - Sensible webpack 5 boilerplate using Babel, PostCSS and Sass with a hot dev server and an optimized production build.
- [Webpack 5 Boilerplate Template](https://github.com/WeAreAthlon/frontend-webpack-boilerplate) - Simple starter webpack 5 project template supporting SASS/PostCSS, Babel ES7, browser syncing, code linting. Easy project setup having multiple features and developer friendly tools.
- [Create App](https://createapp.dev/) - Frontend build config generator
