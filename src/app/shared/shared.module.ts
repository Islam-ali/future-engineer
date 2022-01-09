import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { FilterImagePipe } from './pipe/filter-image.pipe';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  declarations: [
    FilterImagePipe,
  ],
  imports: [
    CommonModule,
    SwiperModule,
    NgxMasonryModule,
    
  ],
  exports:[
    SwiperModule,
    FilterImagePipe,
    NgxMasonryModule,
  ]
})
export class SharedModule { }
