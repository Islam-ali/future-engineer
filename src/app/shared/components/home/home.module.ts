import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TranslateModule } from '@ngx-translate/core';
import { CoursesModule } from '../courses/courses.module';
import { BanarComponent } from '../banar/banar.component';

@NgModule({
  declarations: [
    HomeComponent,
    BanarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    CoursesModule
    ]
})
export class HomeModule { }
