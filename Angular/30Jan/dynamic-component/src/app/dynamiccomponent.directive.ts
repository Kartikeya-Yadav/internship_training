import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDynamiccomponent]',
  standalone: false
})
export class DynamiccomponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
