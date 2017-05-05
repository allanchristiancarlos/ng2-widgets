import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http } from "@angular/http";

import 'rxjs/add/operator/map';

@Injectable()
export class WidgetStockChartService {
    constructor(
        private http: Http 
    ) {}

    getStock(stockCode: string) : Observable<any> {
        return this.http.get('data.json')
            .map(response => <string[]>response.json());
    }
}