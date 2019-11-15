# UI Framework

## CSS Vars

### Spacing [Prototype](https://xd.adobe.com/view/ef5f390e-0609-48ab-7a98-c2dbd762bac0-996e/screen/db4b8038-c3de-4d2a-9af3-a9c738b3d7c1/DS-Grid)
* `var(--spacing)`
* `var(--spacing-big)`
* `var(--spacing-small)`

### Colors [Prototype](https://xd.adobe.com/view/ef5f390e-0609-48ab-7a98-c2dbd762bac0-996e/screen/e2911572-13df-4292-b30d-476697df7025/DS-Colors)
* `var(--c-{color}-{modifier})`

### Font Sizes [Prototype](https://xd.adobe.com/view/ef5f390e-0609-48ab-7a98-c2dbd762bac0-996e/screen/f32cc20b-3ff3-4443-8fc6-9ed418612f0c/DS-Typography)
* `var(--fs-h{1-6})`

## Grid [Prototype](https://xd.adobe.com/view/ef5f390e-0609-48ab-7a98-c2dbd762bac0-996e/screen/db4b8038-c3de-4d2a-9af3-a9c738b3d7c1/DS-Grid)
* App Screen mit entsprechenden Sections (evtl. Sidebar?)
* Tech Flexbox

## Components

### General
* Icon (SVG Wrapper)
* Bild (evtl. Parallax)

### Layout
* Menu (responsive)
* MenuToggler

### Card
* Card
* CardImage
* CardControls

### Formular [Prototype](https://xd.adobe.com/view/ef5f390e-0609-48ab-7a98-c2dbd762bac0-996e/screen/48ee72cc-d05f-4507-a193-272209a4735b/Form-Elements) and [Buttons](https://xd.adobe.com/view/ef5f390e-0609-48ab-7a98-c2dbd762bac0-996e/screen/5f72d32b-4190-4026-aefc-46740719aa9d/DS-Links-and-Buttons)
* TextInput
* TextArea
* Select
* Radio
* Checkbox
* Button (variationen)

## Assets
* Bilder
* Logo / YB Branding
* SVG (Icons)

## Charts
* TODO: Chart Lib evaluieren

# Getting Started

## Installation
This App uses [nodeJS](https://nodejs.org/en/) (min v. 8.10) and [Node Package Manager](https://www.npmjs.com/get-npm) (min v. 6.9).  
If both are installed you can use `npm install` to install all dependencies.

## Build
* `npm start`: starts the development build process, the file watcher and the DevServer
* `npm prod`: runs the production build

## Serve
```
$ npm run serve
```
This will launch a Webpack DevServer on localhost Port 1898 (I hope you know why 😉) and will open the App inside the browser.

### localhost SSL
The App can optionally be served over HTTPS on localhost. All you need to do is to add the path to the Certs as an env var:  
```bash
//.env

SSL_KEY=./../ssl/localhost.key
SSL_CRT=./../ssl/localhost.crt
SSL_PEM=./../ssl/localhost_CA.pem
```

# Workflow

## JavaScript / Flow
This App uses es6 syntax and [flowJS](https://flow.org/) for static typing.

## Code formatting
The Build process uses [eslint](https://eslint.org/) and [stylelint](https://stylelint.io/) to provide a clean workflow and also [prettier](https://prettier.io/) is implemented. I'd recommend to use prettier directly inside your IDE.

## Testing
There are two commands (`npm run eslint` and `npm run stylelint`) that will run the linters. `npm run lint` will start both.

## Git
There is a Pre-Commit Hook (using [Husky](https://github.com/typicode/husky)) that will ensure that only code can be committed that pass the linter.
