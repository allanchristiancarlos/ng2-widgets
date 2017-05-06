import { AfterViewInit, ViewChild, Input, ComponentFactoryResolver, Component, HostBinding } from "@angular/core";
import { WidgetComponent } from "./widget.component";
import { WidgetDirective } from "./widget.directive";
import { WidgetModel } from "./widget.model";

@Component({
    selector: 'widget',
    templateUrl: 'src/components/widget/widget-loader.component.html'
})
export class WidgetLoaderComponent implements AfterViewInit {
    @HostBinding() class = "widget";

    @Input()
    title: string;

    @Input()
    widget: WidgetModel;

    @ViewChild(WidgetDirective)
    widgetRef: WidgetDirective;

    constructor(private _componentFactoryResolver: ComponentFactoryResolver) { }

    ngAfterViewInit() {
        this.loadWidget();
    }

    loadWidget() {
        let viewContainerRef = this.widgetRef.viewContainerRef;
        let widget = this.widget;

        let factory = this._componentFactoryResolver.resolveComponentFactory(widget.component);
        let component: WidgetComponent = viewContainerRef.createComponent(factory).instance;
        
        component.widget = widget;

        this.title = this.title || widget.title || component.title;
    }
}