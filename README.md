# Shopify theme

## Requirements

- [Node v16+](https://nodejs.org/en/)
- [Shopify CLI v2.17.0+](https://shopify.dev/themes/tools/cli)

Note: Please refer to [Install Shopify CLI](https://shopify.dev/themes/tools/cli/installation) if you haven't installed Shopify CLI yet.

[📖 Upgrade or uninstall Shopify CLI](https://shopify.dev/themes/tools/cli/upgrade-uninstall)
## Section structure

Sections a placed in

- `src/shopify/sections`
- `src/shopify/sections-general` (must have for all theme)

1 section has:

section-name
  - `en.schema.json`
  - `section-name.liquid` - main liquid code
  - `section-name.script-external.ts` - will generate a `section-name.js` in `shopify/assets` folder
  - `section-name.script-global.ts` - will be embed in `shopify/assets/main.js`
  - `section-name.script-internal.ts` - will be added in section liquid code, in side `{% javascript %}` tag
  - `section-section-name.scss` - will generate `shopify/assets/section-section-name.css`
  - `schema.js`

## How to use

Clone this repository and install dependencies.

```bash
npm install
```

### Authenticate

Connect Shopify CLI with the store that you want to work on.

```bash
shopify login --store neo-test-theme1.myshopify.com
```

### Create a new theme

Use `newTheme` command to create a new theme from scratch. This command creates a copy of Dawn.

```bash
yarn newTheme
```

[📖 Theme commands - init](https://shopify.dev/themes/tools/cli/theme-commands#init)

### Customize an existing theme

Use `pull:new` command to customize an existing theme.

```bash
yarn pull:new
```



## Available Commands

Recommend you to check out these commands before you get started.

### Start command

Start your project in development mode.

```bash
yarn start
```

### Build command

Build your project for production.

```bash
yarn build
```

Build your project for development.

```bash
yarn build:dev
```

<details>
<summary>Other support commands</summary>

### Pull command

Retrieve theme files from Shopify without deleting local files.

```bash
yarn pull
```

### Push command

Upload your local theme files to Shopify without deleting remote files.

```bash
yarn push
```

Push to your development theme. If you don't have a development theme, then one is created.

```bash
yarn push:dev
```

Upload the theme to the theme library as a new unpublished theme.

```bash
yarn push:upload
```

### Deploy command

Build your local files and upload them to Shopify as production.

```bash
yarn deploy
```

Build your local files and upload them to Shopify as development.

```bash
yarn deploy:dev
```

### Preview command
Returns links that let you preview the specified theme.

```bash
yarn preview
```

### Cheat command

Open Shopify Cheat Sheet.

```bash
yarn cheat
```

[Shopify Cheat Sheet](https://www.shopify.com/partners/shopify-cheat-sheet)

### Lint command

Lint this project code.

```bash
yarn lint
```

Fix this project code.

```bash
yarn lint:fix
```

### Test command

Run End-to-end testing and unit testing.

```bash
yarn test
```

Run unit testing.

```bash
yarn unit
```

```bash
yarn unit:watch
```

Run End-to-end testing in a headless.

```bash
yarn e2e
```

Run End-to-end testing with headed browser.

```bash
yarn e2e:headed
```

Generate End-to-end test code.

```bash
yarn e2e:codegen
```

### Share command
Uploads your theme as a new, unpublished theme in your theme library.

```bash
yarn share
```

### Package command
Packages your local theme files into a ZIP file that can be uploaded to Shopify.

```bash
yarn package
```

### Products command
Creates products in your store. Products are created with a title and a price.

```bash
yarn products
```

### Customers command
Creates customers in your store. Customers are created with a name only.

```bash
yarn customers
```

### Draft orders command
Creates draft orders in your store. Draft orders are created with one custom item.

```bash
yarn draftorders
```

### Store command
Displays the store that you're currently connected to.

```bash
yarn store
```

### PostInstall command

Install missing TypeScript typings.

```bash
yarn postInstall
```

</details>

## End-to-end test
Please create an env file and run this command if you want to do an End-to-end test.

Install supported browsers.

```bash
yarn e2e:install
```
## SVG sprite
You can manage SVG sprites with [svg-sprite-loader](https://www.npmjs.com/package/svg-sprite-loader).

Add SVG images into `sprite-image` folder.

```
src/ts/sprite-image/*.svg
```

Import SVG images at entrypoint.

```ts
// Import SVG Sprite Images
import './sprite-image/bag.svg';
```

The way of Using SVG Sprites in HTML and Liquid.

```html
<svg>
  <use xlink:href="#bag"></use>
</svg>
```

## Recommended IDE

[Visual Studio Code](https://code.visualstudio.com/)
