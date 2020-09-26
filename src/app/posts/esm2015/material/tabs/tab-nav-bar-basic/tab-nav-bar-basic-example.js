import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/tabs";
import * as i2 from "@angular/common";
import * as i3 from "@angular/material/button";
function TabNavBarBasicExample_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 4);
    i0.ɵɵlistener("click", function TabNavBarBasicExample_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r3); const link_r1 = ctx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.activeLink = link_r1; });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("active", ctx_r0.activeLink == link_r1);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", link_r1, " ");
} }
/**
 * @title Basic use of the tab nav bar
 */
export class TabNavBarBasicExample {
    constructor() {
        this.links = ['First', 'Second', 'Third'];
        this.activeLink = this.links[0];
        this.background = undefined;
    }
    toggleBackground() {
        this.background = this.background ? undefined : 'primary';
    }
    addLink() {
        this.links.push(`Link ${this.links.length + 1}`);
    }
}
TabNavBarBasicExample.ɵfac = function TabNavBarBasicExample_Factory(t) { return new (t || TabNavBarBasicExample)(); };
TabNavBarBasicExample.ɵcmp = i0.ɵɵdefineComponent({ type: TabNavBarBasicExample, selectors: [["tab-nav-bar-basic-example"]], decls: 8, vars: 2, consts: [["mat-tab-nav-bar", "", 3, "backgroundColor"], ["mat-tab-link", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", "disabled", ""], ["mat-raised-button", "", 1, "example-action-button", 3, "click"], ["mat-tab-link", "", 3, "active", "click"]], template: function TabNavBarBasicExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "nav", 0);
        i0.ɵɵtemplate(1, TabNavBarBasicExample_a_1_Template, 2, 2, "a", 1);
        i0.ɵɵelementStart(2, "a", 2);
        i0.ɵɵtext(3, "Disabled Link");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "button", 3);
        i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_4_listener() { return ctx.toggleBackground(); });
        i0.ɵɵtext(5, " Toggle background\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "button", 3);
        i0.ɵɵlistener("click", function TabNavBarBasicExample_Template_button_click_6_listener() { return ctx.addLink(); });
        i0.ɵɵtext(7, " Add link\n");
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("backgroundColor", ctx.background);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.links);
    } }, directives: [i1.MatTabNav, i2.NgForOf, i1.MatTabLink, i3.MatButton], styles: [".example-action-button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-right: 8px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TabNavBarBasicExample, [{
        type: Component,
        args: [{
                selector: 'tab-nav-bar-basic-example',
                templateUrl: 'tab-nav-bar-basic-example.html',
                styleUrls: ['tab-nav-bar-basic-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3RhYnMvdGFiLW5hdi1iYXItYmFzaWMvdGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNFdEMsNEJBRWtDO0lBRC9CLHlOQUEyQjtJQUNJLFlBQVM7SUFBQSxpQkFBSTs7OztJQUE1QyxxREFBNkI7SUFBRSxlQUFTO0lBQVQsd0NBQVM7O0FERDdDOztHQUVHO0FBTUgsTUFBTSxPQUFPLHFCQUFxQjtJQUxsQztRQU1FLFVBQUssR0FBRyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDckMsZUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsZUFBVSxHQUFpQixTQUFTLENBQUM7S0FTdEM7SUFQQyxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzVELENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OzBGQVhVLHFCQUFxQjswREFBckIscUJBQXFCO1FDVmxDLDhCQUNFO1FBQUEsa0VBRWtDO1FBQ2xDLDRCQUF5QjtRQUFBLDZCQUFhO1FBQUEsaUJBQUk7UUFDNUMsaUJBQU07UUFHTixpQ0FDRTtRQURzRCxrR0FBUyxzQkFBa0IsSUFBQztRQUNsRixvQ0FDRjtRQUFBLGlCQUFTO1FBQ1QsaUNBQ0U7UUFEc0Qsa0dBQVMsYUFBUyxJQUFDO1FBQ3pFLDJCQUNGO1FBQUEsaUJBQVM7O1FBYlksZ0RBQThCO1FBQ2pDLGVBQTBCO1FBQTFCLG1DQUEwQjs7a0REUy9CLHFCQUFxQjtjQUxqQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsV0FBVyxFQUFFLGdDQUFnQztnQkFDN0MsU0FBUyxFQUFFLENBQUMsK0JBQStCLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1RoZW1lUGFsZXR0ZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIEJhc2ljIHVzZSBvZiB0aGUgdGFiIG5hdiBiYXJcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZScsXG4gIHRlbXBsYXRlVXJsOiAndGFiLW5hdi1iYXItYmFzaWMtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3RhYi1uYXYtYmFyLWJhc2ljLWV4YW1wbGUuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFRhYk5hdkJhckJhc2ljRXhhbXBsZSB7XG4gIGxpbmtzID0gWydGaXJzdCcsICdTZWNvbmQnLCAnVGhpcmQnXTtcbiAgYWN0aXZlTGluayA9IHRoaXMubGlua3NbMF07XG4gIGJhY2tncm91bmQ6IFRoZW1lUGFsZXR0ZSA9IHVuZGVmaW5lZDtcblxuICB0b2dnbGVCYWNrZ3JvdW5kKCkge1xuICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuYmFja2dyb3VuZCA/IHVuZGVmaW5lZCA6ICdwcmltYXJ5JztcbiAgfVxuXG4gIGFkZExpbmsoKSB7XG4gICAgdGhpcy5saW5rcy5wdXNoKGBMaW5rICR7dGhpcy5saW5rcy5sZW5ndGggKyAxfWApO1xuICB9XG59XG4iLCI8IS0tICNkb2NyZWdpb24gbWF0LXRhYi1uYXYgLS0+XG48bmF2IG1hdC10YWItbmF2LWJhciBbYmFja2dyb3VuZENvbG9yXT1cImJhY2tncm91bmRcIj5cbiAgPGEgbWF0LXRhYi1saW5rICpuZ0Zvcj1cImxldCBsaW5rIG9mIGxpbmtzXCJcbiAgICAgKGNsaWNrKT1cImFjdGl2ZUxpbmsgPSBsaW5rXCJcbiAgICAgW2FjdGl2ZV09XCJhY3RpdmVMaW5rID09IGxpbmtcIj4ge3tsaW5rfX0gPC9hPlxuICA8YSBtYXQtdGFiLWxpbmsgZGlzYWJsZWQ+RGlzYWJsZWQgTGluazwvYT5cbjwvbmF2PlxuPCEtLSAjZW5kZG9jcmVnaW9uIG1hdC10YWItbmF2IC0tPlxuXG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCIgKGNsaWNrKT1cInRvZ2dsZUJhY2tncm91bmQoKVwiPlxuICBUb2dnbGUgYmFja2dyb3VuZFxuPC9idXR0b24+XG48YnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIGNsYXNzPVwiZXhhbXBsZS1hY3Rpb24tYnV0dG9uXCIgKGNsaWNrKT1cImFkZExpbmsoKVwiPlxuICBBZGQgbGlua1xuPC9idXR0b24+XG4iXX0=