import { HostListener, Directive } from "@angular/core";
import { MdDialog } from "@angular/material";

import { AddWidgetDialogComponent } from "./add-widget-dialog.component";
import { IWidgetTypeData } from "../widget-manager/i-widget-type-data";
import { AddWidgetSettingsDialogComponent } from "./add-widget-settings-dialog.component";
import { WidgetModel } from "./widget.model";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";

@Directive({
    selector: '[widget-add-widget-button]'
})
export class AddWidgetButtonDirective {

    constructor(
        private _dialog: MdDialog,
        private _widgetManagerService: WidgetManagerService
    ){}
    
    @HostListener('click', ['$event'])
    onClick(button: any) {
        let selectWidgetTypeDialog = this._dialog.open(AddWidgetDialogComponent, {
            width: '270px'
        });

        selectWidgetTypeDialog.componentInstance.onWidgetTypeSelected.subscribe((data: IWidgetTypeData) => {
            // close all modal first
            selectWidgetTypeDialog.close();

            // Initialize settings modal
            let widgetTypeSettingsDialog = this._dialog.open(AddWidgetSettingsDialogComponent, {
                width: '270px'
            });

            // Assign widget type to modal
            widgetTypeSettingsDialog.componentInstance.widgetType = data;

            // Event when the dialog is submitted or added
            widgetTypeSettingsDialog.componentInstance.onWidgetAdded.subscribe((widget: WidgetModel) => {
                this._widgetManagerService
                    .addWidget(widget)
                    .subscribe();
                this._dialog.closeAll();
            });
        });
    }
}