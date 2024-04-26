# Sitejobapplication

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

# Get Started

1. Run npm install Sitejobapplication or yarn add Sitejobapplication.

2. Import SitejobapplicationModule in app.module.ts as below:

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitejobapplicationModule } from 'sitejobapplication';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SitejobapplicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

3. sitejobapplication form tag <lib-sitejobapplication></lib-sitejobapplication> need to be placed where we need sitejobapplication form.

4. Also you need to add event listener `jobformsubmitted` for sitejobapplication form tag as <lib-sitejobapplication (jobformsubmitted) = "jobappdata($event)"> </lib-sitejobapplication>, with this when we click on submit button in sitejobapplication form we will get the form data through jobappdata method.



## Code scaffolding

Run `ng generate component component-name --project sitejobapplication` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project sitejobapplication`.
> Note: Don't forget to add `--project sitejobapplication` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build sitejobapplication` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build sitejobapplication`, go to the dist folder `cd dist/sitejobapplication` and run `npm publish`.

## Running unit tests

Run `ng test sitejobapplication` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
