import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyTableComponent } from './my-table/my-table.component';
import { ResumeMainComponent } from './resume-main/resume-main/resume-main.component';

const routes: Routes = [
  {
    path: '',
    component: ResumeMainComponent
  },
  {
    path: 'test',
    component: MyTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
