import {Component, OnInit} from '@angular/core';

import { Widget } from "./components/widget/widget";
import { WidgetVisitsComponent } from "./components/widget-visits/widget-visits.component";
import { WidgetPieChartComponent } from "./components/widget-pie-chart/widget-pie-chart.component";
import { WidgetStockChartComponent } from "./components/widget-stock-chart/widget-stock-chart.component";
import { WidgetHeatmapComponent } from "./components/widget-heatmap/widget-heatmap.component";

@Component({
    selector: 'app',
    templateUrl: 'src/app.component.html'
})
export class AppComponent {
    widgets: Widget[] = [

        new Widget(WidgetPieChartComponent, {
            chart: {
                title: 'Top Browsers 2015'
            }
        }, {x: 0}, {height: 3, width: 4}),

        new Widget(WidgetPieChartComponent, {
            chart: {
                title: 'Top OS 2015'
            }
        }, {x: 4}, {height: 3, width: 4}),

        new Widget(WidgetPieChartComponent, {
            chart: {
                title: 'Top Users 2015'
            }
        }, {x: 8}, {height: 3, width: 4}),

        new Widget(WidgetStockChartComponent, {stockCode: 'AAPL'}, {x: 0, y: 3}, {height: 3, width: 6}),
        new Widget(WidgetStockChartComponent, {stockCode: 'MEG'}, {x: 6, y: 3}, {height: 3, width: 6}),
        new Widget(WidgetHeatmapComponent, {chart: {title: 'Sales per employee'}}, {x: 0, y: 6}, {height: 4, width: 12})
    ];
}




