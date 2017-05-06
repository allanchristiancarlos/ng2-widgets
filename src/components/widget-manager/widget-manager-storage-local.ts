import { IWidgetManagerStorage } from "./i-widget-manager-storage";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { WidgetModel } from "../widget/widget.model";
import { Observer } from "rxjs/Observer";

let WIDGET_MANAGER_DEFAULT_WIDGETS: WidgetModel[] = [
    {id: 1, title: "My Pie Chart", type: 'pie_chart', data: {chart: {title: 'Top Browsers 2015' }}, position: {x: 0}, size: {height: 3, width: 4}},
    {id: 2, type: 'pie_chart', data: {chart: {title: 'Top OS 2015'}}, position: {x: 4}, size: {height: 3, width: 4}},
    {id: 3, type: 'pie_chart', data:{ chart: {title: 'Top Users 2015'} }, position:{x: 8}, size:{height: 3, width: 4}},
    {id: 4, type: 'stock_chart', data:{stockCode: 'AAPL'}, position:{x: 0, y: 3}, size:{height: 3, width: 6}},
    {id: 5, type: 'stock_chart', data:{stockCode: 'MEG'}, position:{x: 6, y: 3}, size:{height: 3, width: 6}},
    {id: 6, type: 'heatmap', data:{chart: {title: 'Sales per employee'}}, position:{x: 0, y: 6}, size:{height: 4, width: 12}}
];

@Injectable()
export class WidgetManagerStorageLocal implements IWidgetManagerStorage {

    getAllWidgets(): Observable<WidgetModel[]> {
        return new Observable((observer: Observer<any>) => {
            observer.next(WIDGET_MANAGER_DEFAULT_WIDGETS);
        });
    }

    addWidget(widget: WidgetModel): Observable<boolean> {
        return new Observable((observer: Observer<any>) => {
            WIDGET_MANAGER_DEFAULT_WIDGETS.push(widget);
            observer.next(true);
        });
    }

    deleteByWidgetId(widgetId: number): Observable<boolean> {
        return new Observable((observer: Observer<any>) => {
            this.getAllWidgets()
                .subscribe(
                    widgets => {
                        WIDGET_MANAGER_DEFAULT_WIDGETS = widgets.filter(widget => widget.id !== widgetId);
                        observer.next(true);
                    },
                    error => {
                        observer.next(false);
                    }
                );
        });
    }
}