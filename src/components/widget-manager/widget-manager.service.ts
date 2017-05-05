import { Widget } from "../widget/widget";
import { WidgetPieChartComponent } from "../widget-pie-chart/widget-pie-chart.component";
import { WidgetStockChartComponent } from "../widget-stock-chart/widget-stock-chart.component";
import { WidgetHeatmapComponent } from "../widget-heatmap/widget-heatmap.component";
import { WidgetManagerWidgetModel } from "./widget.model";
import { Type } from "@angular/core";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

const WIDGET_MANAGER_DEFAULT_WIDGETS: WidgetManagerWidgetModel[] = [
    {type: 'pie_chart', data: {chart: {title: 'Top Browsers 2015' }}, position: {x: 0}, size: {height: 3, width: 4}},
    {type: 'pie_chart', data: {chart: {title: 'Top OS 2015'}}, position: {x: 4}, size: {height: 3, width: 4}},
    {type: 'pie_chart', data:{ chart: {title: 'Top Users 2015'} }, position:{x: 8}, size:{height: 3, width: 4}},
    {type: 'stock_chart', data:{stockCode: 'AAPL'}, position:{x: 0, y: 3}, size:{height: 3, width: 6}},
    {type: 'stock_chart', data:{stockCode: 'MEG'}, position:{x: 6, y: 3}, size:{height: 3, width: 6}},
    {type: 'heatmap', data:{chart: {title: 'Sales per employee'}}, position:{x: 0, y: 6}, size:{height: 4, width: 12}}
];

@Injectable()
export class WidgetManagerService {
    
    addNewUserWidget(widget: WidgetManagerWidgetModel) {
        WIDGET_MANAGER_DEFAULT_WIDGETS.push(widget);
    }

    getWidgetComponentByType(type: string) : Type<any> {
        switch(type) {
            case 'pie_chart':
                return WidgetPieChartComponent;
            case 'stock_chart':
                return WidgetStockChartComponent;
            case 'heatmap':
                return WidgetHeatmapComponent;
        }
    }

    getWidgetsFromStorage() : Observable<WidgetManagerWidgetModel[]> {
        return new Observable((observer: Observer<any>) => {
            observer.next(WIDGET_MANAGER_DEFAULT_WIDGETS);
        });
    }

    getUserWidgets() : Observable<Widget[]> {
        return this.getWidgetsFromStorage()
            .map((widgets) => {
                return widgets.map((widget) => {
                    return new Widget(this.getWidgetComponentByType(widget.type), widget.data, widget.position, widget.size);
                })
            });
    }

    getWidgets() : Widget[] {
        return [

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
}