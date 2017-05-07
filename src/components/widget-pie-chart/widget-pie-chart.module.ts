import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { WidgetPieChartComponent } from "./widget-pie-chart.component";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";

@NgModule({
    imports: [
        BrowserModule,
        Ng2HighchartsModule
    ],
    declarations: [
        WidgetPieChartComponent
    ],
    entryComponents: [
        WidgetPieChartComponent
    ]
})
export class WidgetPieChartModule {
    constructor(
        private _widgetManagerSerivce: WidgetManagerService
    ) {
        this._widgetManagerSerivce.registerWidgetType({
            name: 'Pie Chart',
            type: 'pie_chart',
            component: WidgetPieChartComponent
        });
    }
}