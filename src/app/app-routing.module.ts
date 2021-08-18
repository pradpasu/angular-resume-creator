import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResumeMainComponent } from './resume-main/resume-main/resume-main.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
