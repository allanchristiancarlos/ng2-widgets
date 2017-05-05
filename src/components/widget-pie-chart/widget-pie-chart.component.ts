import { Component, AfterViewInit, OnInit } from "@angular/core";
import { WidgetComponent } from "../widget/widget.component";

@Component({
    template: '<div [ng2-highcharts]="chart" class="graph"></div>'
})
export class WidgetPieChartComponent implements WidgetComponent, OnInit {
	type = "pie_chart";
	data: any;
	chart: object;
    title = "Pie Chart";

    ngOnInit(): void {
		this.chart = {
			chart:{
				plotBorderWidth:0,
				plotShadow:false,
				height: 220
			},
			title:{
				text: this.data.chart.title || "",
				align:'center',
				verticalAlign:'middle',
				y:40
			},
			tooltip:{
				pointFormat:'{series.name}: <b>{point.percentage:.1f}%</b>'
			},
			plotOptions:{
				pie:{
					dataLabels:{
						enabled:true,
						distance:-50,
						style:{
						fontWeight:'bold',
						color:'white'
						}
					},
					startAngle:-90,
					endAngle:90,
					center:[
						'50%',
						'75%'
					]
				}
			},
			series:[
				{
					type:'pie',
					name:'Browser share',
					innerSize:'50%',
					data:[
						[
						'Firefox',
						10.38
						],
						[
						'IE',
						56.33
						],
						[
						'Chrome',
						24.03
						],
						[
						'Safari',
						4.77
						],
						[
						'Opera',
						0.91
						],
						{
						name:'Proprietary or Undetectable',
						y:0.2,
						dataLabels:{
							enabled:false
						}
						}
					]
				}
			]
		};
    }
}