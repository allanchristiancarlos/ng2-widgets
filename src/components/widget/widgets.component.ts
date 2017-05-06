import { Component, Input, HostBinding, AfterViewInit, ElementRef } from "@angular/core";
import { WidgetModel } from "./widget.model";

@Component({
    selector: 'widgets',
    templateUrl: 'src/components/widget/widgets.component.html'
})
export class WidgetsComponent implements AfterViewInit {
    @HostBinding()
    class = 'grid-stack';

    @Input()
    widgets: WidgetModel[];

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