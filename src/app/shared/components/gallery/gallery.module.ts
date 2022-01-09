import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryComponent } from './gallery.component';
import { SharedModule } from '../../shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderModule } from '../header/header.module';
import { ImagesGalleryComponent } from '../images-gallery/images-gallery.component';
import { LazyLoadImagesModule } from 'ngx-lazy-load-images';
@NgModule({
  declarations: [
    GalleryComponent,
    ImagesGalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    SharedModule,
    TranslateModule,
    HeaderModule,
    LazyLoadImagesModule
  ],
})
export class GalleryModule { }
