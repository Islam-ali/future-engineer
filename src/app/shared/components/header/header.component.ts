import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '' ;
  @Input() description: string = '' ;

  constructor() { }

  ngOnInit(): void {
  }

}
