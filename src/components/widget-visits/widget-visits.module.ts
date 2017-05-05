import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { WidgetVisitsComponent } from "./widget-visits.component";

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
    
}