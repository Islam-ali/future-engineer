import { Component, OnInit } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ContentService } from '../../services/content.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit{
  data: any;
  constructor(public translate: TranslateService, private content: ContentService ) {
  }

  ngOnInit(): void {
    this.content.currentLan$.subscribe((lang) => {
      this.translate.getTranslation(lang).subscribe((res) => {
        this.data = res.data.home
      })
    })
  }
}
