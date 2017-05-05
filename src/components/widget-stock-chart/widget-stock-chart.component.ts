import { Component, AfterViewInit, OnInit } from "@angular/core";
import { WidgetComponent } from "../widget/widget.component";
import { WidgetStockChartService } from "./widget-stock-chart.service";

@Component({
    template: '<div [ng2-highcharts]="chart" class="graph"></div>'
})
export class WidgetStockChartComponent implements WidgetComponent, OnInit {
	data: any;
	chart: object;
    title = "Stock Chart";

	constructor(
		private _service: WidgetStockChartService
	) {}

    ngOnInit(): void {

		let stockCode = this.data.stockCode;
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