import { Component, Inject, Renderer2 } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NgwWowService } from 'ngx-wow';
import { ContentService } from './shared/services/content.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'future-engineer';
  isBrowser: boolean;
  textDir: string = 'ltr'
  constructor(private _ContentService: ContentService, private renderer: Renderer2, @Inject(PLATFORM_ID) platformId: Object, private wow: NgwWowService) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      this.wow.init();
      const body = document.getElementsByTagName("body");
      this._ContentService.currentLan$.subscribe((lang) => {
        if (lang == 'en') {
          body[0].setAttribute('dir', 'ltr')
        }
        else {
          body[0].setAttribute('dir', 'rtl')
        }
      })
    }
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      let loader = this.renderer.selectRootElement('#loader')
      this.renderer.setStyle(loader, 'display', 'none')
      const body = document.getElementsByTagName("body");
      body[0].style.overflowY = 'scroll'

    }
  }
}