import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sidenav";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function SidenavAutosizeExample_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p");
    i0.ɵɵtext(1, "Lorem, ipsum dolor sit amet consectetur.");
    i0.ɵɵelementEnd();
} }
/**
 * @title Autosize sidenav
 */
export class SidenavAutosizeExample {
    constructor() {
        this.showFiller = false;
    }
}
SidenavAutosizeExample.ɵfac = function SidenavAutosizeExample_Factory(t) { return new (t || SidenavAutosizeExample)(); };
SidenavAutosizeExample.ɵcmp = i0.ɵɵdefineComponent({ type: SidenavAutosizeExample, selectors: [["sidenav-autosize-example"]], decls: 11, vars: 1, consts: [["autosize", "", 1, "example-container"], ["mode", "side", 1, "example-sidenav"], ["drawer", ""], [4, "ngIf"], ["mat-raised-button", "", 3, "click"], [1, "example-sidenav-content"], ["type", "button", "mat-button", "", 3, "click"]], template: function SidenavAutosizeExample_Template(rf, ctx) { if (rf & 1) {
        const _r2 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "mat-drawer-container", 0);
        i0.ɵɵelementStart(1, "mat-drawer", 1, 2);
        i0.ɵɵelementStart(3, "p");
        i0.ɵɵtext(4, "Auto-resizing sidenav");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, SidenavAutosizeExample_p_5_Template, 2, 0, "p", 3);
        i0.ɵɵelementStart(6, "button", 4);
        i0.ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_6_listener() { return ctx.showFiller = !ctx.showFiller; });
        i0.ɵɵtext(7, " Toggle extra text ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "div", 5);
        i0.ɵɵelementStart(9, "button", 6);
        i0.ɵɵlistener("click", function SidenavAutosizeExample_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r2); const _r0 = i0.ɵɵreference(2); return _r0.toggle(); });
        i0.ɵɵtext(10, " Toggle sidenav ");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", ctx.showFiller);
    } }, directives: [i1.MatDrawerContainer, i1.MatDrawer, i2.NgIf, i3.MatButton], styles: [".example-container[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 300px;\n  border: 1px solid rgba(0, 0, 0, 0.5);\n}\n\n.example-sidenav-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n}\n\n.example-sidenav[_ngcontent-%COMP%] {\n  padding: 20px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SidenavAutosizeExample, [{
        type: Component,
        args: [{
                selector: 'sidenav-autosize-example',
                templateUrl: 'sidenav-autosize-example.html',
                styleUrls: ['sidenav-autosize-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2lkZW5hdi9zaWRlbmF2LWF1dG9zaXplL3NpZGVuYXYtYXV0b3NpemUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NpZGVuYXYvc2lkZW5hdi1hdXRvc2l6ZS9zaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNHcEMseUJBQXNCO0lBQUEsd0RBQXdDO0lBQUEsaUJBQUk7O0FERHRFOztHQUVHO0FBTUgsTUFBTSxPQUFPLHNCQUFzQjtJQUxuQztRQU1FLGVBQVUsR0FBRyxLQUFLLENBQUM7S0FDcEI7OzRGQUZZLHNCQUFzQjsyREFBdEIsc0JBQXNCOztRQ1ZuQywrQ0FDRTtRQUFBLHdDQUNFO1FBQUEseUJBQUc7UUFBQSxxQ0FBcUI7UUFBQSxpQkFBSTtRQUM1QixtRUFBc0I7UUFDdEIsaUNBQ0U7UUFETSx1SUFBa0M7UUFDeEMsbUNBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFhO1FBRWIsOEJBQ0U7UUFBQSxpQ0FDRTtRQUQrQix5SkFBUyxZQUFlLElBQUM7UUFDeEQsaUNBQ0Y7UUFBQSxpQkFBUztRQUNYLGlCQUFNO1FBRVIsaUJBQXVCOztRQVpoQixlQUFrQjtRQUFsQixxQ0FBa0I7O2tERE9aLHNCQUFzQjtjQUxsQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7YUFDNUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEF1dG9zaXplIHNpZGVuYXZcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZW5hdi1hdXRvc2l6ZS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydzaWRlbmF2LWF1dG9zaXplLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVuYXZBdXRvc2l6ZUV4YW1wbGUge1xuICBzaG93RmlsbGVyID0gZmFsc2U7XG59XG4iLCI8bWF0LWRyYXdlci1jb250YWluZXIgY2xhc3M9XCJleGFtcGxlLWNvbnRhaW5lclwiIGF1dG9zaXplPlxuICA8bWF0LWRyYXdlciAjZHJhd2VyIGNsYXNzPVwiZXhhbXBsZS1zaWRlbmF2XCIgbW9kZT1cInNpZGVcIj5cbiAgICA8cD5BdXRvLXJlc2l6aW5nIHNpZGVuYXY8L3A+XG4gICAgPHAgKm5nSWY9XCJzaG93RmlsbGVyXCI+TG9yZW0sIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyLjwvcD5cbiAgICA8YnV0dG9uIChjbGljayk9XCJzaG93RmlsbGVyID0gIXNob3dGaWxsZXJcIiBtYXQtcmFpc2VkLWJ1dHRvbj5cbiAgICAgIFRvZ2dsZSBleHRyYSB0ZXh0XG4gICAgPC9idXR0b24+XG4gIDwvbWF0LWRyYXdlcj5cblxuICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnRcIj5cbiAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBtYXQtYnV0dG9uIChjbGljayk9XCJkcmF3ZXIudG9nZ2xlKClcIj5cbiAgICAgIFRvZ2dsZSBzaWRlbmF2XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuXG48L21hdC1kcmF3ZXItY29udGFpbmVyPlxuIl19