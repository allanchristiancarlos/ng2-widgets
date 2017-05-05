import {Component, Input, OnInit} from '@angular/core';
import { WidgetTypeType } from './widget.enum';
import { ChartService } from "./widget.service";

@Component({
    selector: 'app-widget-chart-stock',
    template: '<div [ng2-highcharts]="chartSetup" class="graph"></div>'
})
export class WidgetChartStock implements OnInit {
	@Input()
	widget: Widget;

	chartSetup = {};

	constructor(
		private service: ChartService
	) {}

    ngOnInit() {
		this.service.getChartStock()
			.subscribe(
				data => {
					this.chartSetup = {
						chart: {
							height:280
						},
						rangeSelector: {
							selected: 1
						},
						title: {
							text: 'AAPL Stock Price'
						},
						series: [{
							data: data,
							name: 'AAPL',
							tooltip: {
								valueDecimals: 2
							}
						}]
					};
				}
			);
    }
}