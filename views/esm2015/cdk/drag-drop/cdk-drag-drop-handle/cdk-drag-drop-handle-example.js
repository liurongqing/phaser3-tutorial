import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * @title Drag&Drop with a handle
 */
export class CdkDragDropHandleExample {
}
CdkDragDropHandleExample.ɵfac = function CdkDragDropHandleExample_Factory(t) { return new (t || CdkDragDropHandleExample)(); };
CdkDragDropHandleExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropHandleExample, selectors: [["cdk-drag-drop-handle-example"]], decls: 6, vars: 0, consts: [["cdkDrag", "", 1, "example-box"], ["cdkDragHandle", "", 1, "example-handle"], ["width", "24px", "fill", "currentColor", "viewBox", "0 0 24 24"], ["d", "M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"], ["d", "M0 0h24v24H0z", "fill", "none"]], template: function CdkDragDropHandleExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, " I can only be dragged using the handle ");
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵnamespaceSVG();
        i0.ɵɵelementStart(3, "svg", 2);
        i0.ɵɵelement(4, "path", 3);
        i0.ɵɵelement(5, "path", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.CdkDrag, i1.CdkDragHandle], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  padding: 10px;\n  box-sizing: border-box;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.example-handle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  color: #ccc;\n  cursor: move;\n  width: 24px;\n  height: 24px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropHandleExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-handle-example',
                templateUrl: 'cdk-drag-drop-handle-example.html',
                styleUrls: ['cdk-drag-drop-handle-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1oYW5kbGUvY2RrLWRyYWctZHJvcC1oYW5kbGUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7NkRBQXhCLHdCQUF3QjtRQ1ZyQyw4QkFDRTtRQUFBLHdEQUVBO1FBQUEsOEJBQ0U7UUFBQSxtQkFDRTtRQURGLDhCQUNFO1FBQUEsMEJBQTJIO1FBQzNILDBCQUEyQztRQUM3QyxpQkFBTTtRQUNSLGlCQUFNO1FBQ1IsaUJBQU07O2tERENPLHdCQUF3QjtjQUxwQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDhCQUE4QjtnQkFDeEMsV0FBVyxFQUFFLG1DQUFtQztnQkFDaEQsU0FBUyxFQUFFLENBQUMsa0NBQWtDLENBQUM7YUFDaEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCB3aXRoIGEgaGFuZGxlXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtaGFuZGxlLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtaGFuZGxlLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWhhbmRsZS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEhhbmRsZUV4YW1wbGUge31cbiIsIjxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiIGNka0RyYWc+XG4gIEkgY2FuIG9ubHkgYmUgZHJhZ2dlZCB1c2luZyB0aGUgaGFuZGxlXG5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtaGFuZGxlXCIgY2RrRHJhZ0hhbmRsZT5cbiAgICA8c3ZnIHdpZHRoPVwiMjRweFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICA8cGF0aCBkPVwiTTEwIDloNFY2aDNsLTUtNS01IDVoM3Yzem0tMSAxSDZWN2wtNSA1IDUgNXYtM2gzdi00em0xNCAybC01LTV2M2gtM3Y0aDN2M2w1LTV6bS05IDNoLTR2M0g3bDUgNSA1LTVoLTN2LTN6XCI+PC9wYXRoPlxuICAgICAgPHBhdGggZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiPjwvcGF0aD5cbiAgICA8L3N2Zz5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==