// Angular
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Ng2HighchartsModule } from "ng2-highcharts";
import { MaterialModule } from "@angular/material";

// App
import { AppComponent } from './app.component';
import { WidgetModule } from "../widget/widget.module";
import { WidgetPieChartModule } from "../widget-pie-chart/widget-pie-chart.module";
import { WidgetVisitsModule } from "../widget-visits/widget-visits.module";
import { WidgetStockChartModule } from "../widget-stock-chart/widget-stock-chart.module";
import { WidgetHeatmapModule } from "../widget-heatmap/widget-heatmap.module";
import { WidgetManagerModule } from "../widget-manager/widget-manager.module";

@NgModule({
  imports: [  
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng2HighchartsModule,
    MaterialModule,
    WidgetModule,
    WidgetManagerModule,
    WidgetVisitsModule,
    WidgetPieChartModule,
    WidgetStockChartModule,
    WidgetHeatmapModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}