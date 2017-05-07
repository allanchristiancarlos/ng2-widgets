import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { IWidgetTypeData } from "../widget-manager/i-widget-type-data";
import { WidgetModel } from "./widget.model";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";

@Component({
    selector: 'widget-add-widget-settings-dialog',
    template: `
        <h2 md-dialog-title class="text-center">{{widgetType.name}}</h2>
        <md-input-container>
            <input mdInput placeholder="Title" required [(ngModel)]="widget.title">
        </md-input-container>
        <md-dialog-actions>
            <button md-button md-raised-button class="btn-block"
                (click)="onAdd($event)">Add</button>
        </md-dialog-actions>
    `
})
export class AddWidgetSettingsDialogComponent implements OnInit {
    @Output()
    onWidgetAdded: EventEmitter<WidgetModel> = new EventEmitter();
    
    widget: WidgetModel;
    widgetType: IWidgetTypeData;

    constructor(
        private _widgetManagerService: WidgetManagerService
    ) {}

    ngOnInit() {
        this.widget = {
            title: this.widgetType.name,
            type: this.widgetType.type,
            data: {}
        };
    }

    onAdd() {
        this.onWidgetAdded.emit(this.widget);
    }
}