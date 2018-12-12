import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SvgJamesComponent } from './shared/svg-james/svg-james.component';
import { CodeTestComponent } from './components/code-test/code-test.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewFilesComponent } from './components/view-files/view-files.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SvgJamesComponent,
    CodeTestComponent,
    ViewFilesComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
