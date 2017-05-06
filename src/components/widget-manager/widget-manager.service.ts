// Angular
import { Type } from "@angular/core";
import { Injectable } from "@angular/core";

// Third party
import { Observable } from "rxjs/Observable";
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

// App
import { WidgetModel } from "../widget/widget.model";
import { WidgetManagerStorageLocal } from "./widget-manager-storage-local";
import { WidgetManagerComponentTypeResolver } from "./widget-manager-component-type-resolver";

@Injectable()
export class WidgetManagerService {

    constructor(
        private _storage: WidgetManagerStorageLocal,
        private _componentTypeResolver: WidgetManagerComponentTypeResolver
    ) {}

    getWidgets(): Observable<WidgetModel[]> {
        return this._storage.getAllWidgets()
                .map(widgets => {
                    if (typeof widgets !== "object") {
                        return [];
                    }
                    
                    return widgets.map((widget) => {
                        widget.component = this._componentTypeResolver.resolve(widget.type);
                        return widget;
                    })
                });
    }

    addWidget(widget: WidgetModel): Observable<boolean> {
        return this._storage.addWidget(widget);
    }

    deleteByWidgetId(widgetId: number): Observable<boolean> {
        return this._storage.deleteByWidgetId(widgetId);
    }
    
    updateWidget(widget: WidgetModel): Observable<boolean> {
        return this._storage.updateWidget(widget);
    }
}