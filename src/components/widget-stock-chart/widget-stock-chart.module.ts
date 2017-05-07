import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { WidgetStockChartComponent } from "./widget-stock-chart.component";
import { HttpModule } from "@angular/http";
import { WidgetStockChartService } from "./widget-stock-chart.service";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        Ng2HighchartsModule
    ],
    declarations: [
        WidgetStockChartComponent
    ],
    providers: [
        WidgetStockChartService
    ],
    entryComponents: [
        WidgetStockChartComponent
    ]
})
export class WidgetStockChartModule {
    constructor(
        private _widgetManagerSerivce: WidgetManagerService
    ) {
        this._widgetManagerSerivce.registerWidgetType({
            name: 'Stock Chart',
            type: 'stock_chart',
            component: WidgetStockChartComponent
        });
    }
}