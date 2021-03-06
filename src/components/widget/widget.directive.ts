import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[widget]'
})
export class WidgetDirective {
    constructor(
        public viewContainerRef: ViewContainerRef
    ) {}
}