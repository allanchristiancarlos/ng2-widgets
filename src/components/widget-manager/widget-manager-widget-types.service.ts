import { IWidgetTypeData } from "./i-widget-type-data";

const WIDGET_MANAGER_WIDGET_TYPES: IWidgetTypeData[] = [];

export class WidgetManagerWidgetTypesService {
    register(data: IWidgetTypeData) : void {
        WIDGET_MANAGER_WIDGET_TYPES.push(data);
    }

    getAll() : IWidgetTypeData[] {
        return WIDGET_MANAGER_WIDGET_TYPES;
    }
}