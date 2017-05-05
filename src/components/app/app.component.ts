import {Component, OnInit} from '@angular/core';

import { Widget } from "../widget/widget";
import { WidgetVisitsComponent } from "../widget-visits/widget-visits.component";
import { WidgetPieChartComponent } from "../widget-pie-chart/widget-pie-chart.component";
import { WidgetStockChartComponent } from "../widget-stock-chart/widget-stock-chart.component";
import { WidgetHeatmapComponent } from "../widget-heatmap/widget-heatmap.component";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";

@Component({
    selector: 'app',
    templateUrl: 'src/components/app/app.component.html'
})
export class AppComponent implements OnInit {
    widgets: Widget[];

    constructor(
        private widgetManagerService: WidgetManagerService
    ) {}

    ngOnInit() {
        this.widgetManagerService   
            .addNewUserWidget({type: 'pie_chart', data:{chart: {title: 'Sales per employee'}}, position:{x: 0, y: 10}, size:{height: 4, width: 12}});
        this.widgetManagerService
            .getUserWidgets()
            .subscribe(widgets => {
                this.widgets = widgets;
            })
    }
}




