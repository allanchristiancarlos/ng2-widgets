import { WidgetTypeType } from './widget.enum';

export interface WidgetType {
    type: WidgetTypeType;
    label: string;
}

export interface Widget {
    id?: string;
    type: WidgetTypeType;
    data?: any;
    title?: string;
    size?: {
        width: number,
        height: number
    },
    position?: {
        x: number,
        y: number
    }
}
