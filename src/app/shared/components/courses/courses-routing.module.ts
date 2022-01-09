import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses.component';

const routes: Routes = [
  {
    path:"",component:CoursesComponent
  },
  {
    path:":id",loadChildren: () => import('../details-course/details-course.module').then(
      module => module.DetailsCourseModule
    )
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
