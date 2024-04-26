# siteheader

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

# Get Started  

1. Run npm install sitemainheader or yarn add sitemainheader.

2. Import HeaderModule in app.module.ts as below:

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from 'sitemainheader';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

3. Header tag <lib-header></lib-header> need to be placed where we need header.

4. Also you need to add event listener `navigation` for header tag as <lib-header (navigation)="routingdata($event)"></lib-header>, with this when we click on links in header we will get that link info through routingdata method.


## Code scaffolding

Run `ng generate component component-name --project header` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project header`.
> Note: Don't forget to add `--project header` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build header` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build header`, go to the dist folder `cd dist/header` and run `npm publish`.

## Running unit tests

Run `ng test header` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
