import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { ContentService } from '../../services/content.service';
import { PLATFORM_ID } 
from '@angular/core';
import { isPlatformBrowser }
from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  currentLang:string;
  links:any;
  toggle:boolean = false;
  rLink:string[]=["home","about","courses","gallery"]
  isBrowser: boolean;
  lang = new BehaviorSubject<string>('en')
  constructor(public translate:TranslateService,private content:ContentService,@Inject(PLATFORM_ID) platformId: Object){
    this.isBrowser = isPlatformBrowser(platformId);
    this.content.currentLan$.subscribe((lang) => {
      this.translate.getTranslation(lang).subscribe((res) => {
        this.links = res.data.home
      })
    })
    this.currentLang = localStorage.getItem('currentLang') || 'en'
    this.translate.use(this.currentLang)
  }
  ngOnInit(): void {
    if(this.isBrowser){
      this.changeCurrentLang(this.currentLang);
      /*******************slide down navbar*****************/
      window.addEventListener("scroll", function () {
        let header = this.document.getElementById("header");
        let boxWhatsapp = this.document.getElementById("box-contact");

        boxWhatsapp?.classList.toggle("d-block", window.scrollY > 500)
        header?.classList.toggle("i-bg-color-rgba", window.scrollY > 50)
      })
    }else{
      
    }
  }
  // translate
  changeCurrentLang(lang:string){
    this.content.currentLang(lang)
    this.lang.next(lang)
  }
   open_menu(){
     this.toggle = true
   }
   close_menu(){
     this.toggle = false
   }

  
}
