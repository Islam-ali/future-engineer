import { Injectable } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  // direction content
  // textDir = new BehaviorSubject<string>('ltr');
  // currenttextDir$ = this.textDir.asObservable();
  // language content
  lang = new BehaviorSubject<string>('en');
  currentLan$ = this.lang.asObservable();
  constructor(public translate: TranslateService) { }
  currentLang(langService:any){
    this.lang.next(langService);
    this.translate.use(langService)
    localStorage.setItem('currentLang',langService)

    }
}
