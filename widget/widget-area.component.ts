import { Component, HostBinding, AfterViewInit, ElementRef, Input } from '@angular/core';
import { Widget } from "./widget.model";
import { WidgetTypeType } from "./widget.enum";

@Component({
  selector: '[app-widget-area]',
  templateUrl: 'src/widget/widget-area.component.html'
})
export class WidgetAreaComponent implements AfterViewInit {
  @HostBinding('class') classes = 'grid-stack';
  
  widgetType = WidgetTypeType;

  @Input()
  widgets: Widget[] = [];

  @Input()
  width: number = 12;
  
  constructor(
    private el: ElementRef
  ) {}
  
  ngAfterViewInit() {
    $(this.el.nativeElement).gridstack({
      width: this.width,
      minWidth: 420,
      cellHeight: 100,
      handle: '.widget__handle'
    });
  }
}