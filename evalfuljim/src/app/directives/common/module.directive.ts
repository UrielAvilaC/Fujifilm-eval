import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[Module]'
})
export class ModuleDirective {

  constructor(public viewContainerRef : ViewContainerRef) { }

}
