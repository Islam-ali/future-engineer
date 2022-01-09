import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  data:any;
  constructor(private translate:TranslateService,private content:ContentService) {     
  }

  ngOnInit(): void {
      this.content.currentLan$.subscribe((data)=>{
        this.translate.getTranslation(data).subscribe((res) =>{
        this.data = res.data.about
        })
    })
  }

}
