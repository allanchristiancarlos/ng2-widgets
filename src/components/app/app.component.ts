// Angular
import { Component, OnInit } from '@angular/core';

// App
import { WidgetModel } from "../widget/widget.model";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";

@Component({
    selector: 'app',
    templateUrl: 'src/components/app/app.component.html'
})
export class AppComponent implements OnInit {
    widgets: WidgetModel[];

    constructor(
        private _widgetManagerService: WidgetManagerService
    ) {}

    ngOnInit() {
        this._widgetManagerService.getWidgets()
            .subscribe(
                widgets => this.widgets = widgets
            );
    }
}




