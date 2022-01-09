import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentService } from '../../services/content.service';

// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs, Autoplay, EffectCoverflow, Pagination } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Thumbs, Autoplay, EffectCoverflow, Pagination]);
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  data: any = [];
  chek: boolean = false

  constructor(
    private translate: TranslateService
    , private content: ContentService,
  ) {

  }

  ngOnInit(): void {
    this.content.currentLan$.subscribe((data) => {
      this.translate.getTranslation(data).subscribe((res) => {
        this.data = res.data.gallery
      })
    })

  }




}
