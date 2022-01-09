import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-details-course',
  templateUrl: './details-course.component.html',
})
export class DetailsCourseComponent implements OnInit {
  data:any

  constructor(private translate:TranslateService,private content:ContentService,private _ActivatedRoute:ActivatedRoute) { 
  }
  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(param => {
      let x =param['id']
      this.content.currentLan$.subscribe((data)=>{
        this.translate.getTranslation(data).subscribe((res) =>{
        this.data = res.data.details_courses.filter((d:any) => d.name.startsWith(x))[0]
        })
      })
    })
  }
}
