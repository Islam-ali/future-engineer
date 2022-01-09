import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCoursesComponent } from './all-courses.component';
import { TranslateModule } from '@ngx-translate/core';
import { AllCoursesRoutingModule } from './all-courses-routing.module';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AllCoursesRoutingModule,
    TranslateModule,
  ],
  exports:[
    
  ]
})
export class AllCoursesModule { }
