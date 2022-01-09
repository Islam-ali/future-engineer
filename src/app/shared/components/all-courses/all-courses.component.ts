import { Component, OnInit ,Input, Inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ContentService } from '../../services/content.service';
import { PLATFORM_ID } 
from '@angular/core';
import { isPlatformBrowser }
from '@angular/common';
@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
})
export class AllCoursesComponent implements OnInit {
  @Input() n:any;
  data:any []=[];
  isBrowser: boolean;

  constructor(private translate:TranslateService,private content:ContentService,@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

  }

  ngOnInit(): void {
    if(this.isBrowser)
    {
      this.content.currentLan$.subscribe((data)=>{
        this.translate.getTranslation(data).subscribe((res) =>{
        this.data = res.data.courses.details;
        })
    })
    }
  }
}
