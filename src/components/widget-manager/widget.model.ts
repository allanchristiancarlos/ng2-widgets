
export interface WidgetManagerWidgetModel {
    type: string;
    data: any;
    position?: {
        x?: number,
        y?: number
    },
    size?: {
        height?: number,
        width?: number
    }
}
