export enum WidgetTypeType {
    PieChartWidgetType = 1,
    StockChartWidgetType,
    HeatMapWidgetType
}

export const WIDGET_TYPES = [
    {
        label: 'Pie Chart',
        type: WidgetTypeType.PieChartWidgetType
    },
    {
        label: 'Stock Chart',
        type: WidgetTypeType.StockChartWidgetType
    },
    {
        label: 'Heat Map',
        type: WidgetTypeType.HeatMapWidgetType
    }
]