import { Observable } from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import { WidgetModel } from "../widget/widget.model";


export interface IWidgetManagerStorage {
    getAllWidgets() : Observable<WidgetModel[]>;
    addWidget(widget: WidgetModel) : Observable<boolean>;
    updateWidget(widget: number) : Observable<boolean>;
    deleteByWidgetId(widgetId: number) : Observable<boolean>;
}