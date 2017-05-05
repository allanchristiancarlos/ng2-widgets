import {Component, HostBinding, Input} from '@angular/core';

@Component({
  selector: '[app-widget]',
  template: `
  <div class="grid-stack-item-content">
    <div class="widget">
      <h3 class="widget__title" *ngIf="hasTitle">{{title}} <span class="widget__handle material-icons">open_with</span></h3>
      <div class="widget__body">
        <ng-content></ng-content>
      </div>
    </div>
  </div>
  `
})
export class WidgetComponent {
  @HostBinding('class') classes = 'grid-stack-item';
  
  @Input()
  title: string = "";

  @Input()
  hasTitle: boolean = true;
}