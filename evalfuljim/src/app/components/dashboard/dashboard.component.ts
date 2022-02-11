import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ModuleDirective } from 'src/app/directives/common/module.directive';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  @ViewChild(ModuleDirective, { static: true }) viewContainer!: ModuleDirective;
  constructor(private componentFactoryResolver : ComponentFactoryResolver) { }

  ngOnInit(): void {
  }
selectItem($event:any)
{
if($event == 1)
{
  this.setComponent(this.viewContainer.viewContainerRef,ProductComponent)
}
}
public setComponent(viewContainerRef: ViewContainerRef, component: any, data?: Array<[ElementRef: any, value: any]>) {
  let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
  viewContainerRef.clear();
  const componentRef = viewContainerRef.createComponent<any>(componentFactory);
  if (data) {
    data.forEach(obj => {
      componentRef.instance[obj[0]] = obj[1];
    })
  }
}
}

