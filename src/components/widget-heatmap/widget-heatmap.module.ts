import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Ng2HighchartsModule } from 'ng2-highcharts';
import { WidgetHeatmapComponent } from "./widget-heatmap.component";
import { HttpModule } from "@angular/http";
import { WidgetHeatmapService } from "./widget-heatmap.service";

@NgModule({
    imports: [
        HttpModule,
        BrowserModule,
        Ng2HighchartsModule
    ],
    declarations: [
        WidgetHeatmapComponent
    ],
    providers: [
        WidgetHeatmapService
    ],
    entryComponents: [
        WidgetHeatmapComponent
    ]
})
export class WidgetHeatmapModule {
    
}