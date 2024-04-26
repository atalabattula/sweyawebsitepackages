# Sitecontactform

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

# Get Started 

1. Run npm install sitecontactform or yarn add sitecontactform.

2. Import SitecontactformModule in app.module.ts as below:

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SitecontactformModule } from 'sitecontactform';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SitecontactformModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

3. contact form tag <lib-sitecontactform></lib-sitecontactform> need to be placed where we need contact form.

4. Also you need to add event listener `formSubmitted` for contact form tag as <lib-sitecontactform (formSubmitted)="onFormSubmitted($event)"></lib-sitecontactform>, with this when we click on submit button in contact form we will get the form data through onFormSubmitted method.



## Code scaffolding

Run `ng generate component component-name --project sitecontactform` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project sitecontactform`.
> Note: Don't forget to add `--project sitecontactform` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build sitecontactform` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build sitecontactform`, go to the dist folder `cd dist/sitecontactform` and run `npm publish`.

## Running unit tests

Run `ng test sitecontactform` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
