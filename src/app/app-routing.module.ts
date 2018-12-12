import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CodeTestComponent } from './components/code-test/code-test.component';
import { ViewFilesComponent } from './components/view-files/view-files.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'upload', component: CodeTestComponent },
  { path: 'view-files', component: ViewFilesComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
