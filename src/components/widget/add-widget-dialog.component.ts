import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";
import { IWidgetTypeData } from "../widget-manager/i-widget-type-data";
import { MdDialog } from "@angular/material";
import { AddWidgetSettingsDialogComponent } from "./add-widget-settings-dialog.component";

@Component({
    selector: 'widget-add-widget-dialog',
    template: `
        <h2 md-dialog-title class="text-center">Select Widget Type</h2>
            <a  *ngFor="let widgetType of widgetTypes" href="#" md-button class="btn-block" (click)="onSelect(widgetType, $event)">{{widgetType.name}}</a>
    `
})
export class AddWidgetDialogComponent implements OnInit {
    @Output()
    onWidgetTypeSelected: EventEmitter<IWidgetTypeData> = new EventEmitter();

    widgetTypes: IWidgetTypeData[];

    constructor(
        private _widgetManagerSerivce: WidgetManagerService,
        private _dialog: MdDialog
    ) {
        
    }

    ngOnInit() {
        this.widgetTypes = this._widgetManagerSerivce.getWidgetTypes();
    }
    
    onSelect(widgetType: IWidgetTypeData) {
        this.onWidgetTypeSelected.emit(widgetType);
    }
}