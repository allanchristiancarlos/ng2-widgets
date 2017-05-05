import { Component, Input, HostBinding, AfterViewInit, ElementRef } from "@angular/core";
import { Widget } from "./widget";

@Component({
    selector: 'widgets',
    templateUrl: 'src/components/widget/widgets.component.html'
})
export class WidgetsComponent implements AfterViewInit {
    @HostBinding()
    class = 'grid-stack';

    @Input()
    widgets: Widget[];

    constructor(
        private el: ElementRef
    ) {}

    ngAfterViewInit(): void {
        $(this.el.nativeElement).gridstack({
            width: 12,
            minWidth: 420,
            cellHeight: 100,
            handle: '.widget__handle'
        });
    }
}