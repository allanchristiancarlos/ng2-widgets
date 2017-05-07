import { IWidgetTypeData } from "./i-widget-type-data";

const WIDGET_MANAGER_WIDGET_TYPES: IWidgetTypeData[] = [];

export class WidgetManagerWidgetTypesService {
    register(data: IWidgetTypeData) : void {
        WIDGET_MANAGER_WIDGET_TYPES.push(data);
    }

    /**
     * Return and sort widget types by name
     */
    getAll() : IWidgetTypeData[] {
        return WIDGET_MANAGER_WIDGET_TYPES.sort((data1, data2) => {
            let name1 = data1.name.toUpperCase();
            let name2 = data2.name.toUpperCase();
            if (name1 < name2) {
                return -1;
            }
            if (name1 > name2) {
                return 1;
            }

            return 0;
        });
    }
}