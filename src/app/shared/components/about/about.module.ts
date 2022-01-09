import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { TranslateModule } from '@ngx-translate/core';
import { NgwWowModule } from 'ngx-wow';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    AboutComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    TranslateModule,
    NgwWowModule,
    HeaderModule,
  ]
})
export class AboutModule { }
