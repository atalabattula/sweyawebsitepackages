# sitefooter

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.0.

# Get Started

1. Run npm install sitefooter or yarn add sitefooter.

2. Import FooterModule in app.module.ts as below:

```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from 'sitefooter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

3. Footer tag <lib-footer></lib-footer> need to be placed where we need footer.

4. Also you need to add event listener `footernavigationlinks` for footer tag as <lib-footer (footernavigationlinks) = "footerroutingdata($event)"></lib-footer>, with this when we click on link in footer we will get that link info through footerroutingdata method.



## Code scaffolding

Run `ng generate component component-name --project footer` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project footer`.
> Note: Don't forget to add `--project footer` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build footer` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build footer`, go to the dist folder `cd dist/footer` and run `npm publish`.

## Running unit tests

Run `ng test footer` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
