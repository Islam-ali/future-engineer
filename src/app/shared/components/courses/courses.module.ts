import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../header/header.module';
import { AllCoursesComponent } from '../all-courses/all-courses.component';


@NgModule({
  declarations: [
    CoursesComponent,
    AllCoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    TranslateModule,
    HeaderModule,
  ],
  exports:[
    AllCoursesComponent
  ]
})
export class CoursesModule { }
