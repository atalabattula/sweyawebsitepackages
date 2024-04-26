import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BacktotopbuttonModule } from '../../projects/backtotopbutton/src/public-api';
import { HeaderModule } from '../../projects/header/src/public-api';
import { FooterModule } from '../../projects/footer/src/public-api';
import { SitecontactformModule } from '../../projects/sitecontactform/src/public-api';
import { SitejobapplicationModule } from '../../projects/sitejobapplication/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BacktotopbuttonModule,
    HeaderModule,
    FooterModule,
    SitecontactformModule,
    SitejobapplicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
