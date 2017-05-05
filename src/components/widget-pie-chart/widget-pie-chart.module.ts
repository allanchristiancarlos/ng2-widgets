import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { WidgetPieChartComponent } from "./widget-pie-chart.component";

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
    
}