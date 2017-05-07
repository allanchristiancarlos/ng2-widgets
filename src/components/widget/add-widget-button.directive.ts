import { HostListener, Directive } from "@angular/core";
import { MdDialog } from "@angular/material";

import { AddWidgetDialogComponent } from "./add-widget-dialog.component";

@Directive({
    selector: '[widget-add-widget-button]'
})
export class AddWidgetButtonDirective {

    constructor(
        private _dialog: MdDialog
    ){}
    
    @HostListener('click', ['$event'])
    onClick(button: any) {
        this._dialog.open(AddWidgetDialogComponent);
    }
}