import {Component, Input, OnInit} from '@angular/core';
import { WidgetTypeType } from './widget.enum';
import { Widget } from "./widget.model";

@Component({
    selector: 'app-widget-chart-pie',
    template: '<div [ng2-highcharts]="data" class="graph"></div>'
})
export class WidgetChartPie implements OnInit {

	@Input()
	widget: Widget;

    @Input()
    data: any = {
		chart:{
			plotBackgroundColor:null,
			plotBorderWidth:0,
			plotShadow:false,
			height:280
		},
		title:{
			text:'Browser<br>shares<br>2015',
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

    ngOnInit() {
        
    }
}