import { Component, Input, HostBinding, AfterViewInit, ElementRef } from "@angular/core";
import { WidgetModel } from "./widget.model";
import { WidgetManagerService } from "../widget-manager/widget-manager.service";

@Component({
    selector: 'widgets',
    templateUrl: 'src/components/widget/widgets.component.html'
})
export class WidgetsComponent implements AfterViewInit {
    @HostBinding()
    class = 'grid-stack';

    @Input()
    widgets: WidgetModel[];

    constructor(
        private el: ElementRef,
        private _widgetManagerService: WidgetManagerService
    ) {}

    ngAfterViewInit(): void {
        this._initializeGridstack();
        this._updateWidgetSizeAndPosition();
    }

    onWidgetDelete(widget: WidgetModel) {
        this._widgetManagerService.deleteByWidgetId(widget.id)
            .subscribe(
                success => {
                    // remove widget from the UI
                    this.widgets.splice(this.widgets.indexOf(widget), 1);
                }
            )
    }

    private _initializeGridstack() {
        $(this.el.nativeElement).gridstack({
            width: 12,
            minWidth: 420,
            cellHeight: 100,
            handle: '.widget__action-handle'
        });
    }

    private _updateWidgetSizeAndPosition() {
        $(this.el.nativeElement).on('change', (event, items: any[]) => {
            items.map((item) => {
                // find widget by id in the data-widget-id attribute
                let widgetId = parseInt(item.el[0].dataset.widgetId);
                let widget = this.widgets.find(w => w.id == widgetId);
                widget.size.width = item.width;
                widget.size.height = item.height;
                widget.position.x = item.x;
                widget.position.y = item.y;

                this._widgetManagerService.updateWidget(widget.id, widget)
                    .subscribe(
                        success => console.log(success)
                    );
            });            
        });
    }
}