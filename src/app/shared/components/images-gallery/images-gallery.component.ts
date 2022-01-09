import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
})
export class ImagesGalleryComponent implements OnInit {
  data: any = [];
  // catImage: string = '';
  // btn_active: string = 'all';
  currentImg!:number;
  toggle_btn:boolean=false
  constructor(
    private translate: TranslateService
    , private content: ContentService
  ) {
    this.content.currentLan$.subscribe((data) => {
      this.translate.getTranslation(data).subscribe((res) => {
        this.data = res.data.gallery
      })
    })
   }

  ngOnInit(): void {
  }
  // active
  // active(name: string) {
  //   this.btn_active = name
  // }
  // filtter
  // filtterImg(cat: any) {
  //   this.btn_active = cat
  //   if (cat == 'all') {
  //     this.catImage = ''
  //   }
  //   else {
  //     this.catImage = cat
  //   }
  // }
  open(index:any){
    this.toggle_btn = true
    this.currentImg = index
  }
  close(){
    this.toggle_btn = false
  }
  next()
  {
    if(this.currentImg < this.data.images.length - 1  )
    {
      this.currentImg = this.currentImg + 1
    }
  }
  prev()
  {
    if(this.currentImg < 0 )
    {
      this.currentImg = this.data.images.length
    }
    else{
      this.currentImg = this.currentImg - 1
    }
  }
}
