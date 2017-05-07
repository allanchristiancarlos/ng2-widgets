import { Type, Injectable } from "@angular/core";
import { WidgetManagerWidgetTypesService } from "./widget-manager-widget-types.service";

@Injectable()
export class WidgetManagerComponentTypeResolver {
    constructor(
        public _widgetTypesService: WidgetManagerWidgetTypesService
    ) {}
    
    resolve(type: string) : Type<any> {
        return this._widgetTypesService.getAll()
            .find(widgetType => widgetType.type === type).component;
    }
}