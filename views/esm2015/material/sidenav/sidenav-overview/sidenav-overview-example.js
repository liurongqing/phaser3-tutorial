import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/sidenav";
function SidenavOverviewExample_mat_sidenav_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-sidenav-container", 2);
    i0.ɵɵelementStart(1, "mat-sidenav", 3);
    i0.ɵɵtext(2, "Sidenav content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "mat-sidenav-content");
    i0.ɵɵtext(4, "Main content");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function SidenavOverviewExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1, "Please open on Stackblitz to see result");
    i0.ɵɵelementEnd();
} }
/** @title Basic sidenav */
export class SidenavOverviewExample {
    constructor() {
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
    }
}
SidenavOverviewExample.ɵfac = function SidenavOverviewExample_Factory(t) { return new (t || SidenavOverviewExample)(); };
SidenavOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavOverviewExample, selectors: [["sidenav-overview-example"]], decls: 2, vars: 2, consts: [["class", "example-container", 4, "ngIf"], [4, "ngIf"], [1, "example-container"], ["mode", "side", "opened", ""]], template: function SidenavOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, SidenavOverviewExample_mat_sidenav_container_0_Template, 5, 0, "mat-sidenav-container", 0);
        i0.ɵɵtemplate(1, SidenavOverviewExample_div_1_Template, 2, 0, "div", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.shouldRun);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx.shouldRun);
    } }, directives: [i1.NgIf, i2.MatSidenavContainer, i2.MatSidenav, i2.MatSidenavContent], styles: [".example-container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #eee;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-overview-example',
                templateUrl: 'sidenav-overview-example.html',
                styleUrls: ['sidenav-overview-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LW92ZXJ2aWV3L3NpZGVuYXYtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1vdmVydmlldy9zaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ0F4QyxnREFDRTtJQUFBLHNDQUFnQztJQUFBLCtCQUFlO0lBQUEsaUJBQWM7SUFDN0QsMkNBQXFCO0lBQUEsNEJBQVk7SUFBQSxpQkFBc0I7SUFDekQsaUJBQXdCOzs7SUFFeEIsMkJBQXdCO0lBQUEsdURBQXVDO0lBQUEsaUJBQU07O0FESHJFLDJCQUEyQjtBQU0zQixNQUFNLE9BQU8sc0JBQXNCO0lBTG5DO1FBTUUsY0FBUyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNuRzs7NEZBRlksc0JBQXNCOzJEQUF0QixzQkFBc0I7UUNSbkMsMkdBQ0U7UUFJRix1RUFBd0I7O1FBTHlCLG9DQUFpQjtRQUs3RCxlQUFrQjtRQUFsQixxQ0FBa0I7O2tEREdWLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgQmFzaWMgc2lkZW5hdiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1vdmVydmlldy1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LW92ZXJ2aWV3LWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZPdmVydmlld0V4YW1wbGUge1xuICBzaG91bGRSdW4gPSBbLyhefFxcLilwbG5rclxcLmNvJC8sIC8oXnxcXC4pc3RhY2tibGl0elxcLmlvJC9dLnNvbWUoaCA9PiBoLnRlc3Qod2luZG93LmxvY2F0aW9uLmhvc3QpKTtcbn1cbiIsIjxtYXQtc2lkZW5hdi1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvdWxkUnVuXCI+XG4gIDxtYXQtc2lkZW5hdiBtb2RlPVwic2lkZVwiIG9wZW5lZD5TaWRlbmF2IGNvbnRlbnQ8L21hdC1zaWRlbmF2PlxuICA8bWF0LXNpZGVuYXYtY29udGVudD5NYWluIGNvbnRlbnQ8L21hdC1zaWRlbmF2LWNvbnRlbnQ+XG48L21hdC1zaWRlbmF2LWNvbnRhaW5lcj5cblxuPGRpdiAqbmdJZj1cIiFzaG91bGRSdW5cIj5QbGVhc2Ugb3BlbiBvbiBTdGFja2JsaXR6IHRvIHNlZSByZXN1bHQ8L2Rpdj5cbiJdfQ==