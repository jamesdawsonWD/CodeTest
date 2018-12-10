import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { SvgJamesComponent } from './shared/svg-james/svg-james.component';
import { CodeReviewComponent } from './components/code-review/code-review.component';
import { CodeTestComponent } from './components/code-test/code-test.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; 
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SvgJamesComponent,
    CodeReviewComponent,
    CodeTestComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
