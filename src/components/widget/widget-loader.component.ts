import { AfterViewInit, ViewChild, Input, ComponentFactoryResolver, Component, HostBinding } from "@angular/core";
import { Widget } from "./widget";
import { WidgetDirective } from "./widget.directive";
import { WidgetComponent } from "./widget.component";

@Component({
    selector: 'widget',
    templateUrl: 'src/components/widget/widget-loader.component.html'
})
export class WidgetLoaderComponent implements AfterViewInit {
    @HostBinding() class = "widget";

    @Input()
    title: string;

    @Input()
    widget: Widget;

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
        let componentRef = viewContainerRef.createComponent(factory);
        let component: WidgetComponent = componentRef.instance;
        component.data = widget.data;
        this.title = this.title || component.title;
    }
}