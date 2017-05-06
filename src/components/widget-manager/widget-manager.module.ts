import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { WidgetManagerService } from "./widget-manager.service";
import { WidgetManagerStorageLocal } from "./widget-manager-storage-local";
import { WidgetManagerComponentTypeResolver } from "./widget-manager-component-type-resolver";

@NgModule({
    imports: [
        BrowserModule
    ],
    providers: [
        WidgetManagerService,
        WidgetManagerStorageLocal,
        WidgetManagerComponentTypeResolver
    ]
})
export class WidgetManagerModule {

}