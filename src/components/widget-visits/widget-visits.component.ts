import { Component, AfterViewInit } from "@angular/core";
import { WidgetComponent } from "../widget/widget.component";
import { WidgetModel } from "../widget/widget.model";

@Component({
    template: 'visit templates'
})
export class WidgetVisitsComponent implements WidgetComponent, AfterViewInit {
    type: string;
    widget: WidgetModel;
    position: { x: number; y: number; };
    size: { height: number; width: number; };
    title = "Visits";

    

    ngAfterViewInit(): void {
    }
}