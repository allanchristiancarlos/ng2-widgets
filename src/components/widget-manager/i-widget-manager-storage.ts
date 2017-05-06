import { Observable } from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import { WidgetManagerWidgetModel } from "./widget.model";


export interface IWidgetManagerStorage {
    getAllWidgets() : Observable<WidgetManagerWidgetModel[]>;
    addWidget(widget: WidgetManagerWidgetModel) : Observable<boolean>;
    deleteByWidgetId(widgetId: number) : Observable<boolean>;
}