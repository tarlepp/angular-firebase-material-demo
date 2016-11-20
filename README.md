# Angular2/Firebase/Material - Demo
[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Build Status](https://travis-ci.org/tarlepp/angular2-firebase-material-demo.png?branch=master)](https://travis-ci.org/tarlepp/angular2-firebase-material-demo)
[![codecov](https://codecov.io/gh/tarlepp/angular2-firebase-material-demo/branch/master/graph/badge.svg)](https://codecov.io/gh/tarlepp/angular2-firebase-material-demo)
[![Dependency Status](https://david-dm.org/tarlepp/angular2-firebase-material-demo.svg)](https://david-dm.org/tarlepp/angular2-firebase-material-demo)
[![devDependency Status](https://david-dm.org/tarlepp/angular2-firebase-material-demo/dev-status.svg)](https://david-dm.org/tarlepp/angular2-firebase-material-demo#info=devDependencies)

## Table of Contents
* [What is this](#what-is-this)
* [Demo](#demo)
* [Used libraries, guides, etc.](#used-libraries-guides-etc)
  * [Libraries](#libraries)
  * [Guides](#guides)
  * [Other resources](#other-resources)
* [Installation](#installation)
  * [Configuration](#configuration)
  * [Firebase](#firebase)
* [Development](#development)
* [Tests](#tests)
  * [Unit tests](#unit-tests)
  * [e2e tests](#e2e-tests)
* [Build](#build)
* [Deploying to Github Pages](#deploying-to-github-pages)
* [Author](#author)
* [License](#license)

## What is this
Just a small demo to show how to use [Angular2](https://angular.io/) + [Firebase](https://firebase.google.com/) + 
[Google Material Design](https://www.google.com/design/spec/material-design/introduction.html) together. Currently
this demo application contains following features:
 * Social media login (Facebook, Twitter, Google+ and GitHub)
 * Personal 'Todo' item list
 * Chat with other users
 
## Demo
Demo of this application can be found from [https://fir-todo-v3.firebaseapp.com/](https://fir-todo-v3.firebaseapp.com/).

![QR code to demo application](https://raw.github.com/tarlepp/angular2-firebase-material-demo/master/qrcode.png)

## Used libraries, guides, etc.

### Libraries
 * [Angular 2](https://github.com/angular/angular)
 * [Material Design for Angular 2](https://github.com/angular/material2)
 * [AngularFire2](https://github.com/angular/angularfire2)
 * [angular2-moment](https://github.com/urish/angular2-moment)
 * [Angular-CLI](https://github.com/angular/angular-cli)
 
### Guides
 * [Angular 2 style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
 
### Other resources
 * [Firebase](https://firebase.google.com/)
 * [Material design](https://www.google.com/design/spec/material-design/)

## Installation
First of all you have to install <code>npm</code> and <code>node.js</code> to your box. Installation instructions can
be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). 

Also note that ```node.js 6.x``` is required.

```bash
$ git clone https://github.com/tarlepp/angular2-firebase-material-demo.git
$ cd angular2-firebase-material-demo

# install the project's dependencies
$ npm install

# fast install (via Yarn, https://yarnpkg.com)
$ yarn install  # or yarn
```

### Configuration
See ```/src/app/config/config.ts_example``` file and copy it to ```/src/app/config/config.ts``` file and make
necessary changes to it. Note that you need a Firebase account to get all necessary config values.

### Firebase
To get Firebase running as it should first you need to make new Firebase application. Which you can create easily from
their website [https://firebase.google.com/](https://firebase.google.com/).

After you have created new application you need to make some [security rules](https://firebase.google.com/docs/database/security/quickstart) 
for the used data storage. Below is configuration that this demo application uses, so you can use the same within your 
application.

```
{
    "rules": {
      "messages": {
          ".write": "auth !== null",
          ".read": "auth !== null"
      },
      "todos": {
        "$uid": {
          // grants write access to the owner of this user account whose uid must exactly match the key ($uid)
          ".write": "auth !== null && auth.uid === $uid",
          // grants read access to any user who is logged in with Facebook
          ".read": "auth !== null && auth.uid === $uid"
        }
      }
    }
}
```

These rules ensure that 'todo' items are show only to user who made those. Also chat messages requires that user is
logged in to read / write those.

## Development
To start developing in the project run:

```bash
npm start
``` 
OR
```bash
ng serve
```

Then head to `http://localhost:4200` in your browser.

## Tests

### Unit tests
To run tests run:
```bash
ng test
```

### e2e tests
To run tests run:
```bash
ng e2e
```

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Author
Tarmo Leppänen

## License
[The MIT License (MIT)](LICENSE)

Copyright (c) 2016 Tarmo Leppänen
