import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsCourseRoutingModule } from './details-course-routing.module';
import { DetailsCourseComponent } from './details-course.component';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    DetailsCourseComponent
  ],
  imports: [
    CommonModule,
    DetailsCourseRoutingModule,
    TranslateModule,
    HeaderModule,
  ],
  exports:[
    DetailsCourseComponent
  ]
})
export class DetailsCourseModule { }
