export interface WidgetComponent {
    data: any;
    title?: string;
    size?: {
        height?: number,
        width?: number
    },
    type: string;
}