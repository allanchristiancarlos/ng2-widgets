import { Component, AfterViewInit } from "@angular/core";
import { WidgetComponent } from "../widget/widget.component";

@Component({
    template: 'visit templates'
})
export class WidgetVisitsComponent implements WidgetComponent, AfterViewInit {
    data: any;
    title = "Visits";

    ngAfterViewInit(): void {
    }
}