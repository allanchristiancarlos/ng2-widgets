import { Component, OnInit } from "@angular/core";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";
import { IWidgetTypeData } from "../widget-manager/i-widget-type-data";

@Component({
    selector: 'widget-add-widget-dialog',
    template: `
        <ul>
            <li *ngFor="let widgetType of widgetTypes">{{widgetType.name}}</li>
        </ul>
    `
})
export class AddWidgetDialogComponent implements OnInit {
    widgetTypes: IWidgetTypeData[];

    constructor(
        private _widgetManagerSerivce: WidgetManagerService
    ) {
        
    }

    ngOnInit() {
        this.widgetTypes = this._widgetManagerSerivce.getWidgetTypes();
    }
}