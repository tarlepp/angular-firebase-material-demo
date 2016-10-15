# Angular2/Firebase/Material - Demo
============
[![Dependency Status](https://david-dm.org/tarlepp/angular2-firebase-material-demo.svg)](https://david-dm.org/tarlepp/angular2-firebase-material-demo)
[![devDependency Status](https://david-dm.org/tarlepp/angular2-firebase-material-demo/dev-status.svg)](https://david-dm.org/tarlepp/angular2-firebase-material-demo#info=devDependencies)

## What is this
Just a small demo to show how to use [Angular2(https://angular.io/) + [Firebase](https://firebase.google.com/) + 
[Google Material Design](https://www.google.com/design/spec/material-design/introduction.html) together. Currently
this demo application contains following features:
 * Social media login (Facebook, Twitter, Google+ and GitHub)
 * Personal 'Todo' item list
 * Chat with other users
 
## Demo
This is coming later...

## Used libraries, guides, etc.

### Libraries
 * [Angular 2](https://github.com/angular/angular)
 * [Material Design for Angular 2](https://github.com/angular/material2)
 * [AngularFire2](https://github.com/angular/angularfire2)
 * [angular2-moment](https://github.com/urish/angular2-moment)
 
### Guides
 * [Angular 2 style guide](https://angular.io/docs/ts/latest/guide/style-guide.html)
 
### Other resources
 * [Firebase](https://firebase.google.com/)
 * [Material design](https://www.google.com/design/spec/material-design/)

## Installation
First of all you have to install <code>npm</code> and <code>node.js</code> to your box. Installation instructions can
be found [here](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager). 

Also note that ```node.js 6.x``` is required.

### Configuration
See ```/src/app/config/config.ts_example``` file and copy it to ```/src/app/config/config.ts``` file and make
necessary changes to it. Note that you need a Firebase account to get all necessary config values.

### Firebase
To get Firebase running as it should first you need to make new Firebase application. Which you can create easily from
their website [https://firebase.google.com/](https://firebase.google.com/).

After you have created new application you need to make some [security rules](https://firebase.google.com/docs/database/security/quickstart) 
for the used data storage. Below is configuration that my demo application uses, so you can use the same within your 
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
npm run start
``` OR
```bash
ng serve
```

Then head to `http://localhost:3000` in your browser.

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

## Deploying to Github Pages
Run `ng github-pages:deploy` to deploy to Github Pages.

## Author
Tarmo Leppänen

## License
The MIT License (MIT)

Copyright (c) 2016 Tarmo Leppänen
