// Angular
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { Ng2HighchartsModule } from "ng2-highcharts";

// App
import { AppComponent } from './app.component';
import { WidgetModule } from "./components/widget/widget.module";
import { WidgetPieChartModule } from "./components/widget-pie-chart/widget-pie-chart.module";
import { WidgetVisitsModule } from "./components/widget-visits/widget-visits.module";
import { WidgetStockChartModule } from "./components/widget-stock-chart/widget-stock-chart.module";
import { WidgetHeatmapModule } from "./components/widget-heatmap/widget-heatmap.module";

@NgModule({
  imports: [  
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    Ng2HighchartsModule,
    WidgetModule,
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