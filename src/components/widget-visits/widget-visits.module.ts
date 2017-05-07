import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { WidgetVisitsComponent } from "./widget-visits.component";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";

@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        WidgetVisitsComponent
    ],
    entryComponents: [WidgetVisitsComponent]
})
export class WidgetVisitsModule {
    constructor(
        private _widgetManagerSerivce: WidgetManagerService
    ) {
        this._widgetManagerSerivce.registerWidgetType({
            name: 'Visits',
            type: 'visits',
            component: WidgetVisitsComponent
        });
    }
}