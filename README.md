# Angular Universal Boilerplate

This is a angular universal boilerplate application. Use it to kickstart your project. 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. Please be aware that this is only the client part of the application the server sided part can only be served by creating a distribution build.  

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Build with server sided rendering

Run `npm run build:ssr` to build the project plus the express server. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Run with server sided rendering

To run with server sided rendering we first need to create a build. First run `npm run build:ssr` and after it's completed run `npm run serve:ssr`. 

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
