// angular
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

// 3rd party
import { MaterialModule } from "@angular/material";

// app
import { WidgetDirective } from "./widget.directive";
import { WidgetLoaderComponent } from "./widget-loader.component";
import { WidgetsComponent } from "./widgets.component";
import { AddWidgetButtonDirective } from "./add-widget-button.directive";
import { AddWidgetDialogComponent } from "./add-widget-dialog.component";
import { AddWidgetSettingsDialogComponent } from "./add-widget-settings-dialog.component";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        WidgetDirective,
        WidgetLoaderComponent,
        WidgetsComponent,
        AddWidgetButtonDirective,
        AddWidgetDialogComponent,
        AddWidgetSettingsDialogComponent
    ],
    exports: [
        MaterialModule,
        WidgetDirective,
        WidgetsComponent,
        AddWidgetButtonDirective
    ],
    entryComponents: [
        AddWidgetDialogComponent,
        AddWidgetSettingsDialogComponent
    ]
})
export class WidgetModule {
    
}