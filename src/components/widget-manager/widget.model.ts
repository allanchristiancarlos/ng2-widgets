
export interface WidgetManagerWidgetModel {
    id: number;
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
