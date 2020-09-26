import { ChangeDetectionStrategy, Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/scrolling";
function CdkVirtualScrollContextExample_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 2);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 2);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 2);
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "div", 2);
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(11, "div", 2);
    i0.ɵɵtext(12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(13, "div", 2);
    i0.ɵɵtext(14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    const count_r3 = ctx.count;
    const first_r4 = ctx.first;
    const last_r5 = ctx.last;
    const even_r6 = ctx.even;
    const odd_r7 = ctx.odd;
    i0.ɵɵclassProp("example-alternate", odd_r7);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Item: ", item_r1, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Index: ", index_r2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Count: ", count_r3, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("First: ", first_r4 ? "Yes" : "No", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Last: ", last_r5 ? "Yes" : "No", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Even: ", even_r6 ? "Yes" : "No", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1("Odd: ", odd_r7 ? "Yes" : "No", "");
} }
/** @title Virtual scroll context variables */
export class CdkVirtualScrollContextExample {
    constructor() {
        this.items = Array.from({ length: 100000 }).map((_, i) => `Item #${i}`);
    }
}
CdkVirtualScrollContextExample.ɵfac = function CdkVirtualScrollContextExample_Factory(t) { return new (t || CdkVirtualScrollContextExample)(); };
CdkVirtualScrollContextExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkVirtualScrollContextExample, selectors: [["cdk-virtual-scroll-context-example"]], decls: 2, vars: 2, consts: [[1, "example-viewport", 3, "itemSize"], [3, "example-alternate", 4, "cdkVirtualFor", "cdkVirtualForOf"], [1, "example-item-detail"]], template: function CdkVirtualScrollContextExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cdk-virtual-scroll-viewport", 0);
        i0.ɵɵtemplate(1, CdkVirtualScrollContextExample_div_1_Template, 15, 9, "div", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("itemSize", 18 * 7);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkVirtualForOf", ctx.items);
    } }, directives: [i1.CdkVirtualScrollViewport, i1.CdkFixedSizeVirtualScroll, i1.CdkVirtualForOf], styles: [".example-viewport[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 200px;\n  border: 1px solid black;\n}\n\n.example-item-detail[_ngcontent-%COMP%] {\n  height: 18px;\n}\n\n.example-alternate[_ngcontent-%COMP%] {\n  background: rgba(127, 127, 127, 0.3);\n}"], changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkVirtualScrollContextExample, [{
        type: Component,
        args: [{
                selector: 'cdk-virtual-scroll-context-example',
                styleUrls: ['cdk-virtual-scroll-context-example.css'],
                templateUrl: 'cdk-virtual-scroll-context-example.html',
                changeDetection: ChangeDetectionStrategy.OnPush,
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9zY3JvbGxpbmcvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQvY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7SUNDL0QsMkJBT0U7SUFBQSw4QkFBaUM7SUFBQSxZQUFjO0lBQUEsaUJBQU07SUFDckQsOEJBQWlDO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTTtJQUN2RCw4QkFBaUM7SUFBQSxZQUFnQjtJQUFBLGlCQUFNO0lBQ3ZELDhCQUFpQztJQUFBLFlBQStCO0lBQUEsaUJBQU07SUFDdEUsOEJBQWlDO0lBQUEsYUFBNkI7SUFBQSxpQkFBTTtJQUNwRSwrQkFBaUM7SUFBQSxhQUE2QjtJQUFBLGlCQUFNO0lBQ3BFLCtCQUFpQztJQUFBLGFBQTJCO0lBQUEsaUJBQU07SUFDcEUsaUJBQU07Ozs7Ozs7OztJQVIrQiwyQ0FBK0I7SUFDakMsZUFBYztJQUFkLDRDQUFjO0lBQ2QsZUFBZ0I7SUFBaEIsOENBQWdCO0lBQ2hCLGVBQWdCO0lBQWhCLDhDQUFnQjtJQUNoQixlQUErQjtJQUEvQiw2REFBK0I7SUFDL0IsZUFBNkI7SUFBN0IsMkRBQTZCO0lBQzdCLGVBQTZCO0lBQTdCLDJEQUE2QjtJQUM3QixlQUEyQjtJQUEzQix5REFBMkI7O0FEWmhFLDhDQUE4QztBQU85QyxNQUFNLE9BQU8sOEJBQThCO0lBTjNDO1FBT0UsVUFBSyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDbEU7OzRHQUZZLDhCQUE4QjttRUFBOUIsOEJBQThCO1FDVDNDLHNEQUNFO1FBQUEsZ0ZBT0U7UUFRSixpQkFBOEI7O1FBaEJELGlDQUFtQjtRQUN6QyxlQU0rQjtRQU4vQiwyQ0FNK0I7O2tEREV6Qiw4QkFBOEI7Y0FOMUMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxvQ0FBb0M7Z0JBQzlDLFNBQVMsRUFBRSxDQUFDLHdDQUF3QyxDQUFDO2dCQUNyRCxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKiBAdGl0bGUgVmlydHVhbCBzY3JvbGwgY29udGV4dCB2YXJpYWJsZXMgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay12aXJ0dWFsLXNjcm9sbC1jb250ZXh0LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLXZpcnR1YWwtc2Nyb2xsLWNvbnRleHQtZXhhbXBsZS5jc3MnXSxcbiAgdGVtcGxhdGVVcmw6ICdjZGstdmlydHVhbC1zY3JvbGwtY29udGV4dC1leGFtcGxlLmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2RrVmlydHVhbFNjcm9sbENvbnRleHRFeGFtcGxlIHtcbiAgaXRlbXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6IDEwMDAwMH0pLm1hcCgoXywgaSkgPT4gYEl0ZW0gIyR7aX1gKTtcbn1cbiIsIjxjZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQgW2l0ZW1TaXplXT1cIjE4ICogN1wiIGNsYXNzPVwiZXhhbXBsZS12aWV3cG9ydFwiPlxuICA8ZGl2ICpjZGtWaXJ0dWFsRm9yPVwibGV0IGl0ZW0gb2YgaXRlbXM7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICAgICBsZXQgY291bnQgPSBjb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IGZpcnN0ID0gZmlyc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgIGxldCBsYXN0ID0gbGFzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW4gPSBldmVuO1xuICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2RkID0gb2RkO1wiIFtjbGFzcy5leGFtcGxlLWFsdGVybmF0ZV09XCJvZGRcIj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pdGVtLWRldGFpbFwiPkl0ZW06IHt7aXRlbX19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaXRlbS1kZXRhaWxcIj5JbmRleDoge3tpbmRleH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaXRlbS1kZXRhaWxcIj5Db3VudDoge3tjb3VudH19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaXRlbS1kZXRhaWxcIj5GaXJzdDoge3tmaXJzdCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaXRlbS1kZXRhaWxcIj5MYXN0OiB7e2xhc3QgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWl0ZW0tZGV0YWlsXCI+RXZlbjoge3tldmVuID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1pdGVtLWRldGFpbFwiPk9kZDoge3tvZGQgPyAnWWVzJyA6ICdObyd9fTwvZGl2PlxuICA8L2Rpdj5cbjwvY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0PlxuIl19