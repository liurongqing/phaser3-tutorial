import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/drag-drop";
/**
 * @title Drag&Drop position locking
 */
export class CdkDragDropAxisLockExample {
}
CdkDragDropAxisLockExample.ɵfac = function CdkDragDropAxisLockExample_Factory(t) { return new (t || CdkDragDropAxisLockExample)(); };
CdkDragDropAxisLockExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkDragDropAxisLockExample, selectors: [["cdk-drag-drop-axis-lock-example"]], decls: 4, vars: 0, consts: [["cdkDragLockAxis", "y", "cdkDrag", "", 1, "example-box"], ["cdkDragLockAxis", "x", "cdkDrag", "", 1, "example-box"]], template: function CdkDragDropAxisLockExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtext(1, " I can only be dragged up/down\n");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtext(3, " I can only be dragged left/right\n");
        i0.ɵɵelementEnd();
    } }, directives: [i1.CdkDrag], styles: [".example-box[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n  border: solid 1px #ccc;\n  color: rgba(0, 0, 0, 0.87);\n  cursor: move;\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  background: #fff;\n  border-radius: 4px;\n  margin-right: 25px;\n  position: relative;\n  z-index: 1;\n  transition: box-shadow 200ms cubic-bezier(0, 0, 0.2, 1);\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),\n              0 2px 2px 0 rgba(0, 0, 0, 0.14),\n              0 1px 5px 0 rgba(0, 0, 0, 0.12);\n}\n\n.example-box[_ngcontent-%COMP%]:active {\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkDragDropAxisLockExample, [{
        type: Component,
        args: [{
                selector: 'cdk-drag-drop-axis-lock-example',
                templateUrl: 'cdk-drag-drop-axis-lock-example.html',
                styleUrls: ['cdk-drag-drop-axis-lock-example.css'],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWRyYWctZHJvcC1heGlzLWxvY2stZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1heGlzLWxvY2svY2RrLWRyYWctZHJvcC1heGlzLWxvY2stZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay9kcmFnLWRyb3AvY2RrLWRyYWctZHJvcC1heGlzLWxvY2svY2RrLWRyYWctZHJvcC1heGlzLWxvY2stZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQUV4Qzs7R0FFRztBQU1ILE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7K0RBQTFCLDBCQUEwQjtRQ1Z2Qyw4QkFDRTtRQUFBLGdEQUNGO1FBQUEsaUJBQU07UUFFTiw4QkFDRTtRQUFBLG1EQUNGO1FBQUEsaUJBQU07O2tERElPLDBCQUEwQjtjQUx0QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQztnQkFDM0MsV0FBVyxFQUFFLHNDQUFzQztnQkFDbkQsU0FBUyxFQUFFLENBQUMscUNBQXFDLENBQUM7YUFDbkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogQHRpdGxlIERyYWcmRHJvcCBwb3NpdGlvbiBsb2NraW5nXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrLWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1kcmFnLWRyb3AtYXhpcy1sb2NrLWV4YW1wbGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjZGstZHJhZy1kcm9wLWF4aXMtbG9jay1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBDZGtEcmFnRHJvcEF4aXNMb2NrRXhhbXBsZSB7fVxuIiwiPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgY2RrRHJhZ0xvY2tBeGlzPVwieVwiIGNka0RyYWc+XG4gIEkgY2FuIG9ubHkgYmUgZHJhZ2dlZCB1cC9kb3duXG48L2Rpdj5cblxuPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgY2RrRHJhZ0xvY2tBeGlzPVwieFwiIGNka0RyYWc+XG4gIEkgY2FuIG9ubHkgYmUgZHJhZ2dlZCBsZWZ0L3JpZ2h0XG48L2Rpdj5cbiJdfQ==