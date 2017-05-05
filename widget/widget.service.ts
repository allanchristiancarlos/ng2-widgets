import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http} from '@angular/http';
import {WidgetTypeType, WIDGET_TYPES} from './widget.enum';
import {WidgetType, Widget} from './widget.model';

import 'rxjs/add/operator/map';

@Injectable()
export class WidgetService {

    getWidgets() : Observable<WidgetModel[]> {
        return new Observable(observer => {
            observer.next([])
        });
    }

    getWidgetTypes() : Observable<WidgetType[]> {
        return new Observable(observer => {
            observer.next(WIDGET_TYPES);
        });
    }

    getWidgetTypeByType(type: WidgetTypeType) : Observable<WidgetType> {
        return this.getWidgetTypes()
            .find(widget => widget.type === type);
    }
}

@Injectable()
export class ChartService {

    constructor(
        private http: Http
    ) {}

    getChartStock() : Observable<any> {
        return this.http.get('/data.json')
            .map((response) => <string[]> response.json());
    }

    getChartMap() : Observable<any> {
        return this.http.get('/geo.json')
            .map((response) => <string[]> response.json());
    }
}