import { Type } from "@angular/core";
import { WidgetComponent } from "../widget/widget.component";

export interface IWidgetTypeData {
    name: string;
    type: string;
    icon?: string;
    component: Type<WidgetComponent>;
}