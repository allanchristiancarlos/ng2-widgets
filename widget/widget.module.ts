// Angular
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpModule} from '@angular/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// 3rd Party
import {MaterialModule} from '@angular/material';
import {Ng2HighchartsModule} from 'ng2-highcharts';


// App 
import {AddWidgetDialogComponent, AddWidgetButtonComponent} from './add-widget.dialog';
import {WidgetComponent} from './widget.component';
import {WidgetAreaComponent} from './widget-area.component';
import {WidgetService, ChartService} from './widget.service';
import {WidgetChartPie} from './widget-chart-pie';
import {WidgetChartStock} from './widget-chart-stock';
import {WidgetChartHeatMap} from './widget-chart-heatmap';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        Ng2HighchartsModule,
        ReactiveFormsModule,
        MaterialModule,
    ],
    declarations: [
        WidgetComponent,
        WidgetAreaComponent,
        AddWidgetDialogComponent,
        AddWidgetButtonComponent,
        WidgetChartPie,
        WidgetChartStock,
        WidgetChartHeatMap
    ],
    exports: [
        BrowserAnimationsModule,
        MaterialModule,
        Ng2HighchartsModule,
        WidgetComponent,
        WidgetAreaComponent,
        AddWidgetDialogComponent,
        AddWidgetButtonComponent,
        WidgetChartPie,
        WidgetChartStock,
        WidgetChartHeatMap
    ],
    entryComponents: [
        AddWidgetDialogComponent
    ],
    providers: [
        WidgetService,
        ChartService
    ]
})
export class AppWidgetModule {

}