// angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// Third party
import { MdDialogModule } from '@angular/material';

// App
import { WidgetManagerService } from "./widget-manager.service";
import { WidgetManagerStorageLocal } from "./widget-manager-storage-local";
import { WidgetManagerComponentTypeResolver } from "./widget-manager-component-type-resolver";
import { WidgetManagerWidgetTypesService } from "./widget-manager-widget-types.service";

@NgModule({
    imports: [
        BrowserModule,
        MdDialogModule,
        BrowserAnimationsModule
    ],
    providers: [
        WidgetManagerService,
        WidgetManagerStorageLocal,
        WidgetManagerComponentTypeResolver,
        WidgetManagerWidgetTypesService
    ]
})
export class WidgetManagerModule {

}