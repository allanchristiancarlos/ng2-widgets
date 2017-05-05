import { Type } from "@angular/core";
import { WidgetComponent } from "./widget.component";

export class Widget {
    constructor(
        public component: Type<any>,
        public data: any,
        public position?: {
            x?: number,
            y?: number
        },
        public size?: {
            height?: number,
            width?: number
        }
    ) {}
}