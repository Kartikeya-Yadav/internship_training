import { Component, viewChild, ViewContainerRef } from '@angular/core';
import { DynamiccomponentDirective } from '../dynamiccomponent.directive';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: false,
  
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @viewChild (DynamiccomponentDirective, { static: true}) dynamicHost!: DynamiccomponentDirective;

  loadComponent(){
    const viewContainerRef: ViewContainerRef = this.dynamicHost.viewContainerRef;

    viewContainerRef.clear();
    viewContainerRef.createComponent(ChildComponent);
  }

  clearComponent(){
    this.dynamicHost.viewContainerRef.clear();
  }
}
