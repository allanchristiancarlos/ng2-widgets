import { Type } from "@angular/core";
import { WidgetModel } from "./widget.model";

export interface WidgetComponent {
    title: string;
    type: string;

    widget?: WidgetModel;

    position: {
        x: number,
        y: number
    };
    
    size: {
        height: number,
        width: number
    };
}