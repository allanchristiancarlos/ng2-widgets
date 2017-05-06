import { Type } from "@angular/core";

export class WidgetModel {
    id: number;
    title?: string;
    type: string;
    data: any; 
    component?: Type<any>;
    position?: {
        x?: number,
        y?: number
    };
    
    size?: {
        height?: number,
        width?: number
    };
}