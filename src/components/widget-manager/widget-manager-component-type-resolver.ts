import { Type, Injectable } from "@angular/core";
import { WidgetManagerWidgetTypesService } from "./widget-manager-widget-types.service";
import { IWidgetTypeData } from "./i-widget-type-data";

@Injectable()
export class WidgetManagerComponentTypeResolver {
    constructor(
        public _widgetTypesService: WidgetManagerWidgetTypesService
    ) {}
    
    getWidgetType(type: string) : IWidgetTypeData {
        return this._widgetTypesService.getAll()
            .find(widgetType => widgetType.type === type);
    }
}