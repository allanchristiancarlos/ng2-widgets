import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { WidgetDirective } from "./widget.directive";
import { WidgetLoaderComponent } from "./widget-loader.component";
import { WidgetsComponent } from "./widgets.component";


@NgModule({
    imports: [
        BrowserModule,
        CommonModule
    ],
    declarations: [
        WidgetDirective,
        WidgetLoaderComponent,
        WidgetsComponent
    ],
    exports: [
        WidgetDirective,
        WidgetLoaderComponent,
        WidgetsComponent
    ]
})
export class WidgetModule {
    
}