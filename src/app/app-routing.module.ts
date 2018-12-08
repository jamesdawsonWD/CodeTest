import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CodeTestComponent } from './components/code-test/code-test.component';
import { CodeReviewComponent } from './components/code-review/code-review.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
  },
  { path: 'code-test', component: CodeTestComponent },
  { path: 'code-review', component: CodeReviewComponent },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
