import { Component, AfterViewInit, OnInit } from "@angular/core";
import { WidgetModel } from "../widget/widget.model";
import { WidgetStockChartService } from "./widget-stock-chart.service";
import { WidgetComponent } from "../widget/widget.component";

@Component({
    template: '<div [ng2-highcharts]="chart" class="graph"></div>'
})
export class WidgetStockChartComponent implements WidgetComponent, OnInit {
	widget: WidgetModel;
	position: { x: number; y: number; };
	size: { height: number; width: number; };
	chart: object;
	type: string;
    title = "Stock Chart";

	constructor(
		private _service: WidgetStockChartService
	) {}

    ngOnInit(): void {

		let stockCode = this.widget.data.stockCode;
		this._service.getStock(stockCode)
			.subscribe(
				data => {
					this.chart = {
						chart: {
							height: 220
						},
						rangeSelector: {
							selected: 1
						},
						title: {
							text: `${stockCode} Stock Price`
						},
						series: [{
							data: data,
							name: stockCode,
							tooltip: {
								valueDecimals: 2
							}
						}]
					}
				}
			);
    }
}