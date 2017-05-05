import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import {WidgetService} from './widget.service';

@Component({
    selector: 'app-add-widget-button',
    template: '<button md-button md-raised-button color="primary" (click)="openDialog()">{{title}}</button> {{selectedOption}}'
})
export class AddWidgetButtonComponent {
    @Input()
    title: string = "New Widget";

    selectedOption: string;
    
    @Output()
    selectedWidgetTypeEvent = new EventEmitter();

    constructor(
        public dialog: MdDialog
    ){}

    openDialog() {
        let dialogRef = this.dialog.open(AddWidgetDialogComponent);
        dialogRef.afterClosed().subscribe(result => {
            if (!result) return;
            this.selectedWidgetTypeEvent.emit(result);
        });
    }
}

@Component({
    selector: 'app-add-widget-dialog',
    templateUrl: 'src/widget/add-widget.dialog.html'
})
export class AddWidgetDialogComponent implements OnInit {
    options: any[];

    constructor(
        private dialogRef: MdDialogRef<AddWidgetDialogComponent>,
        private service: WidgetService
    ) {}

    ngOnInit() {
        this.service.getWidgetTypes()
            .subscribe(
                widgets => this.options = widgets
            )
    }
}