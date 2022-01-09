import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsCourseComponent } from './details-course.component';

const routes: Routes = [
  {
    path:"",component:DetailsCourseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsCourseRoutingModule { }
