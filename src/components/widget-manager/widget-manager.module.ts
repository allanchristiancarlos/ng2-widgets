import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WidgetManagerService } from "./widget-manager.service";

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
        WidgetManagerService
    ]
})
export class WidgetManagerModule {

}