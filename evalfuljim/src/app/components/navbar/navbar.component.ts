import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit,AfterViewInit {

@Output('selectItem') selectitem = new EventEmitter<number>();
  constructor() { }
  ngAfterViewInit(): void {
    this.onSelectItem(1);
  }

  ngOnInit(): void {
  }
onSelectItem($event:number)
{
  this.selectitem.next($event);
}
}
