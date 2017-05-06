import { Type, Injectable } from "@angular/core";
import { WidgetPieChartComponent } from "../widget-pie-chart/widget-pie-chart.component";
import { WidgetStockChartComponent } from "../widget-stock-chart/widget-stock-chart.component";
import { WidgetHeatmapComponent } from "../widget-heatmap/widget-heatmap.component";

@Injectable()
export class WidgetManagerComponentTypeResolver {
    resolve(type: string) : Type<any> {
        switch(type) {
            case 'pie_chart':
                return WidgetPieChartComponent;
            case 'stock_chart':
                return WidgetStockChartComponent;
            case 'heatmap':
                return WidgetHeatmapComponent;
        }
    }
}