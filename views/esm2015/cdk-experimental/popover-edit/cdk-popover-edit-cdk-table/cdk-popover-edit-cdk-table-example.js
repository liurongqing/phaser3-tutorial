import { DataSource } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/table";
import * as i2 from "@angular/cdk-experimental/popover-edit";
import * as i3 from "@angular/forms";
function CdkPopoverEditCdkTableExample_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "form", 13, 14);
    i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableExample_ng_template_1_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r15); const element_r12 = ctx.$implicit; const _r13 = i0.ɵɵreference(2); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onSubmitWeight(element_r12, _r13); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableExample_ng_template_1_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r15); const element_r12 = ctx.$implicit; const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.preservedWeightValues.set(element_r12, $event); });
    i0.ɵɵtext(3, " Edit b: ");
    i0.ɵɵelement(4, "input", 15);
    i0.ɵɵelement(5, "br");
    i0.ɵɵelementStart(6, "button", 16);
    i0.ɵɵtext(7, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 17);
    i0.ɵɵtext(9, "Revert and close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r1.preservedWeightValues.get(element_r12));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", element_r12.weight);
} }
function CdkPopoverEditCdkTableExample_th_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " No. ");
    i0.ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r17.position, " ");
} }
function CdkPopoverEditCdkTableExample_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Name ");
    i0.ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelementStart(1, "form", 13, 14);
    i0.ɵɵlistener("ngSubmit", function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template_form_ngSubmit_1_listener() { i0.ɵɵrestoreView(_r25); const _r22 = i0.ɵɵreference(2); const element_r18 = i0.ɵɵnextContext().$implicit; const ctx_r23 = i0.ɵɵnextContext(); return ctx_r23.onSubmitName(element_r18, _r22); })("cdkEditControlPreservedFormValueChange", function CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template_form_cdkEditControlPreservedFormValueChange_1_listener($event) { i0.ɵɵrestoreView(_r25); const element_r18 = i0.ɵɵnextContext().$implicit; const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.preservedNameValues.set(element_r18, $event); });
    i0.ɵɵtext(3, " Edit a: ");
    i0.ɵɵelement(4, "input", 23);
    i0.ɵɵelement(5, "br");
    i0.ɵɵelementStart(6, "button", 16);
    i0.ɵɵtext(7, "Confirm");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(8, "button", 24);
    i0.ɵɵtext(9, "Revert");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "button", 25);
    i0.ɵɵtext(11, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r18 = i0.ɵɵnextContext().$implicit;
    const ctx_r20 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("cdkEditControlPreservedFormValue", ctx_r20.preservedNameValues.get(element_r18));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngModel", element_r18.name);
} }
function CdkPopoverEditCdkTableExample_td_8_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 26);
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 20);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CdkPopoverEditCdkTableExample_td_8_ng_template_2_Template, 12, 2, "ng-template", null, 21, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵtemplate(4, CdkPopoverEditCdkTableExample_td_8_span_4_Template, 3, 0, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    const _r19 = i0.ɵɵreference(3);
    i0.ɵɵproperty("cdkPopoverEdit", _r19);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r18.name, " ");
} }
function CdkPopoverEditCdkTableExample_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Weight ");
    i0.ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_11_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementStart(1, "button", 26);
    i0.ɵɵtext(2, "Edit");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 27);
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CdkPopoverEditCdkTableExample_td_11_span_2_Template, 3, 0, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r29 = ctx.$implicit;
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵproperty("cdkPopoverEdit", _r0)("cdkPopoverEditContext", element_r29);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r29.weight, " ");
} }
function CdkPopoverEditCdkTableExample_th_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1, " Symbol ");
    i0.ɵɵelementEnd();
} }
function CdkPopoverEditCdkTableExample_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", element_r31.symbol, " ");
} }
function CdkPopoverEditCdkTableExample_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 28);
} }
function CdkPopoverEditCdkTableExample_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 29);
} }
const ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
    { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
    { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
    { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
    { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
    { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
    { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
    { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
    { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
    { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
/**
 * @title CDK Popover Edit on a CDK data-table
 */
export class CdkPopoverEditCdkTableExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
        this.preservedNameValues = new WeakMap();
        this.preservedWeightValues = new WeakMap();
    }
    onSubmitName(element, f) {
        if (!f.valid) {
            return;
        }
        element.name = f.value.name;
    }
    onSubmitWeight(element, f) {
        if (!f.valid) {
            return;
        }
        element.weight = f.value.weight;
    }
}
CdkPopoverEditCdkTableExample.ɵfac = function CdkPopoverEditCdkTableExample_Factory(t) { return new (t || CdkPopoverEditCdkTableExample)(); };
CdkPopoverEditCdkTableExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkPopoverEditCdkTableExample, selectors: [["cdk-popover-edit-cdk-table-example"]], decls: 17, vars: 3, consts: [["cdk-table", "", "editable", "", 1, "example-table", 3, "dataSource"], ["weightEdit", ""], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdk-cell", "", 3, "cdkPopoverEdit", 4, "cdkCellDef"], ["cdkColumnDef", "weight"], ["cdk-cell", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext", 4, "cdkCellDef"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [2, "background-color", "white"], ["cdkEditControl", "", 3, "cdkEditControlPreservedFormValue", "ngSubmit", "cdkEditControlPreservedFormValueChange"], ["f", "ngForm"], ["type", "number", "name", "weight", "required", "", 3, "ngModel"], ["type", "submit"], ["cdkEditRevert", "", "cdkEditClose", ""], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-cell", "", 3, "cdkPopoverEdit"], ["nameEdit", ""], [4, "cdkRowHoverContent"], ["name", "name", "required", "", 3, "ngModel"], ["cdkEditRevert", ""], ["cdkEditClose", ""], ["cdkEditOpen", ""], ["cdk-cell", "", 3, "cdkPopoverEdit", "cdkPopoverEditContext"], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkPopoverEditCdkTableExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵtemplate(1, CdkPopoverEditCdkTableExample_ng_template_1_Template, 10, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementContainerStart(3, 2);
        i0.ɵɵtemplate(4, CdkPopoverEditCdkTableExample_th_4_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(5, CdkPopoverEditCdkTableExample_td_5_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(6, 5);
        i0.ɵɵtemplate(7, CdkPopoverEditCdkTableExample_th_7_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(8, CdkPopoverEditCdkTableExample_td_8_Template, 5, 2, "td", 6);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(9, 7);
        i0.ɵɵtemplate(10, CdkPopoverEditCdkTableExample_th_10_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(11, CdkPopoverEditCdkTableExample_td_11_Template, 3, 3, "td", 8);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementContainerStart(12, 9);
        i0.ɵɵtemplate(13, CdkPopoverEditCdkTableExample_th_13_Template, 2, 0, "th", 3);
        i0.ɵɵtemplate(14, CdkPopoverEditCdkTableExample_td_14_Template, 2, 1, "td", 4);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵtemplate(15, CdkPopoverEditCdkTableExample_tr_15_Template, 1, 0, "tr", 10);
        i0.ɵɵtemplate(16, CdkPopoverEditCdkTableExample_tr_16_Template, 1, 0, "tr", 11);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("dataSource", ctx.dataSource);
        i0.ɵɵadvance(15);
        i0.ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
    } }, directives: [i1.CdkTable, i2.CdkEditable, i1.CdkColumnDef, i1.CdkHeaderCellDef, i1.CdkCellDef, i1.CdkHeaderRowDef, i1.CdkRowDef, i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i2.CdkEditControl, i3.NumberValueAccessor, i3.DefaultValueAccessor, i3.RequiredValidator, i3.NgControlStatus, i3.NgModel, i2.CdkEditRevert, i2.CdkEditClose, i1.CdkHeaderCell, i1.CdkCell, i2.CdkPopoverEdit, i2.CdkRowHoverContent, i2.CdkEditOpen, i1.CdkHeaderRow, i1.CdkRow], styles: [".example-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.example-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .example-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 25%;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkPopoverEditCdkTableExample, [{
        type: Component,
        args: [{
                selector: 'cdk-popover-edit-cdk-table-example',
                styleUrls: ['cdk-popover-edit-cdk-table-example.css'],
                templateUrl: 'cdk-popover-edit-cdk-table-example.html',
            }]
    }], null, null); })();
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL2Nkay1leHBlcmltZW50YWwvcG9wb3Zlci1lZGl0L2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlL2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL3BvcG92ZXItZWRpdC9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS9jZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1leGFtcGxlLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFeEMsT0FBTyxFQUFDLGVBQWUsRUFBYSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztJQ0c3QywrQkFDRTtJQUFBLG9DQUtFO0lBSEUsd1NBQXVDLGdSQUVHLHNEQUEwQyxJQUY3QztJQUd6Qyx5QkFDQTtJQUFBLDRCQUNBO0lBQUEscUJBQ0E7SUFBQSxrQ0FBc0I7SUFBQSx1QkFBTztJQUFBLGlCQUFTO0lBQ3RDLGtDQUFtQztJQUFBLGdDQUFnQjtJQUFBLGlCQUFTO0lBQzlELGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFSQSxlQUF1RTtJQUF2RSxnR0FBdUU7SUFHcEQsZUFBMEI7SUFBMUIsNENBQTBCOzs7SUFVbkQsOEJBQXVDO0lBQUEscUJBQUk7SUFBQSxpQkFBSzs7O0lBQ2hELDhCQUF3QztJQUFBLFlBQXFCO0lBQUEsaUJBQUs7OztJQUExQixlQUFxQjtJQUFyQixxREFBcUI7OztJQUs3RCw4QkFBdUM7SUFBQSxzQkFBSztJQUFBLGlCQUFLOzs7O0lBTzdDLCtCQUNFO0lBQUEsb0NBS0U7SUFIRSwwVEFBcUMsb1NBRUssb0RBQXdDLElBRjdDO0lBR3ZDLHlCQUNBO0lBQUEsNEJBQ0E7SUFBQSxxQkFDQTtJQUFBLGtDQUFzQjtJQUFBLHVCQUFPO0lBQUEsaUJBQVM7SUFDdEMsa0NBQXNCO0lBQUEsc0JBQU07SUFBQSxpQkFBUztJQUNyQyxtQ0FBcUI7SUFBQSxzQkFBSztJQUFBLGlCQUFTO0lBQ3JDLGlCQUFPO0lBQ1QsaUJBQU07Ozs7SUFUQSxlQUFxRTtJQUFyRSwrRkFBcUU7SUFHaEUsZUFBd0I7SUFBeEIsMENBQXdCOzs7SUFTckMsNEJBQ0U7SUFBQSxrQ0FBb0I7SUFBQSxvQkFBSTtJQUFBLGlCQUFTO0lBQ25DLGlCQUFPOzs7SUF4QlQsOEJBRUU7SUFBQSxZQUVBO0lBQ0Esc0lBQ0U7SUFnQkYsc0ZBQ0U7SUFFSixpQkFBSzs7OztJQXhCRCxxQ0FBMkI7SUFDN0IsZUFFQTtJQUZBLGlEQUVBOzs7SUEwQkYsOEJBQXVDO0lBQUEsd0JBQU87SUFBQSxpQkFBSzs7O0lBS2pELDRCQUNFO0lBQUEsa0NBQW9CO0lBQUEsb0JBQUk7SUFBQSxpQkFBUztJQUNuQyxpQkFBTzs7O0lBTlQsOEJBRUU7SUFBQSxZQUVBO0lBQUEsdUZBQ0U7SUFFSixpQkFBSzs7Ozs7SUFORCxvQ0FBNkIsc0NBQUE7SUFDL0IsZUFFQTtJQUZBLG1EQUVBOzs7SUFRRiw4QkFBdUM7SUFBQSx3QkFBTztJQUFBLGlCQUFLOzs7SUFDbkQsOEJBQXdDO0lBQUEsWUFBbUI7SUFBQSxpQkFBSzs7O0lBQXhCLGVBQW1CO0lBQW5CLG1EQUFtQjs7O0lBRzdELHlCQUE0RDs7O0lBQzVELHlCQUFrRTs7QURsRXBFLE1BQU0sWUFBWSxHQUFzQjtJQUN0QyxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDNUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDOUQsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQ3pELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUMzRCxFQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUM7SUFDN0QsRUFBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFDO0lBQzNELEVBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBQztJQUM3RCxFQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUM7SUFDM0QsRUFBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFDO0lBQzdELEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFB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Ozs7OztHQU1HO0FBQ0gsTUFBTSxPQUFPLGlCQUFrQixTQUFRLFVBQTJCO0lBQWxFOztRQUNFLG9EQUFvRDtRQUNwRCxTQUFJLEdBQUcsSUFBSSxlQUFlLENBQW9CLFlBQVksQ0FBQyxDQUFDO0lBUTlELENBQUM7SUFOQyxpR0FBaUc7SUFDakcsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsVUFBVSxLQUFJLENBQUM7Q0FDaEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0RhdGFTb3VyY2V9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nRm9ybX0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGV9IGZyb20gJ3J4anMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7XG4gIG5hbWU6IHN0cmluZztcbiAgcG9zaXRpb246IG51bWJlcjtcbiAgd2VpZ2h0OiBudW1iZXI7XG4gIHN5bWJvbDogc3RyaW5nO1xufVxuXG5jb25zdCBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gW1xuICB7cG9zaXRpb246IDEsIG5hbWU6ICdIeWRyb2dlbicsIHdlaWdodDogMS4wMDc5LCBzeW1ib2w6ICdIJ30sXG4gIHtwb3NpdGlvbjogMiwgbmFtZTogJ0hlbGl1bScsIHdlaWdodDogNC4wMDI2LCBzeW1ib2w6ICdIZSd9LFxuICB7cG9zaXRpb246IDMsIG5hbWU6ICdMaXRoaXVtJywgd2VpZ2h0OiA2Ljk0MSwgc3ltYm9sOiAnTGknfSxcbiAge3Bvc2l0aW9uOiA0LCBuYW1lOiAnQmVyeWxsaXVtJywgd2VpZ2h0OiA5LjAxMjIsIHN5bWJvbDogJ0JlJ30sXG4gIHtwb3NpdGlvbjogNSwgbmFtZTogJ0Jvcm9uJywgd2VpZ2h0OiAxMC44MTEsIHN5bWJvbDogJ0InfSxcbiAge3Bvc2l0aW9uOiA2LCBuYW1lOiAnQ2FyYm9uJywgd2VpZ2h0OiAxMi4wMTA3LCBzeW1ib2w6ICdDJ30sXG4gIHtwb3NpdGlvbjogNywgbmFtZTogJ05pdHJvZ2VuJywgd2VpZ2h0OiAxNC4wMDY3LCBzeW1ib2w6ICdOJ30sXG4gIHtwb3NpdGlvbjogOCwgbmFtZTogJ094eWdlbicsIHdlaWdodDogMTUuOTk5NCwgc3ltYm9sOiAnTyd9LFxuICB7cG9zaXRpb246IDksIG5hbWU6ICdGbHVvcmluZScsIHdlaWdodDogMTguOTk4NCwgc3ltYm9sOiAnRid9LFxuICB7cG9zaXRpb246IDEwLCBuYW1lOiAnTmVvbicsIHdlaWdodDogMjAuMTc5Nywgc3ltYm9sOiAnTmUnfSxcbiAge3Bvc2l0aW9uOiAxMSwgbmFtZTogJ1NvZGl1bScsIHdlaWdodDogMjIuOTg5Nywgc3ltYm9sOiAnTmEnfSxcbiAge3Bvc2l0aW9uOiAxMiwgbmFtZTogJ01hZ25lc2l1bScsIHdlaWdodDogMjQuMzA1LCBzeW1ib2w6ICdNZyd9LFxuICB7cG9zaXRpb246IDEzLCBuYW1lOiAnQWx1bWludW0nLCB3ZWlnaHQ6IDI2Ljk4MTUsIHN5bWJvbDogJ0FsJ30sXG4gIHtwb3NpdGlvbjogMTQsIG5hbWU6ICdTaWxpY29uJywgd2VpZ2h0OiAyOC4wODU1LCBzeW1ib2w6ICdTaSd9LFxuICB7cG9zaXRpb246IDE1LCBuYW1lOiAnUGhvc3Bob3J1cycsIHdlaWdodDogMzAuOTczOCwgc3ltYm9sOiAnUCd9LFxuICB7cG9zaXRpb246IDE2LCBuYW1lOiAnU3VsZnVyJywgd2VpZ2h0OiAzMi4wNjUsIHN5bWJvbDogJ1MnfSxcbiAge3Bvc2l0aW9uOiAxNywgbmFtZTogJ0NobG9yaW5lJywgd2VpZ2h0OiAzNS40NTMsIHN5bWJvbDogJ0NsJ30sXG4gIHtwb3NpdGlvbjogMTgsIG5hbWU6ICdBcmdvbicsIHdlaWdodDogMzkuOTQ4LCBzeW1ib2w6ICdBcid9LFxuICB7cG9zaXRpb246IDE5LCBuYW1lOiAnUG90YXNzaXVtJywgd2VpZ2h0OiAzOS4wOTgzLCBzeW1ib2w6ICdLJ30sXG4gIHtwb3NpdGlvbjogMjAsIG5hbWU6ICdDYWxjaXVtJywgd2VpZ2h0OiA0MC4wNzgsIHN5bWJvbDogJ0NhJ30sXG5dO1xuXG4vKipcbiAqIEB0aXRsZSBDREsgUG9wb3ZlciBFZGl0IG9uIGEgQ0RLIGRhdGEtdGFibGVcbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLXBvcG92ZXItZWRpdC1jZGstdGFibGUtZXhhbXBsZScsXG4gIHN0eWxlVXJsczogWydjZGstcG9wb3Zlci1lZGl0LWNkay10YWJsZS1leGFtcGxlLmNzcyddLFxuICB0ZW1wbGF0ZVVybDogJ2Nkay1wb3BvdmVyLWVkaXQtY2RrLXRhYmxlLWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka1BvcG92ZXJFZGl0Q2RrVGFibGVFeGFtcGxlIHtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbJ3Bvc2l0aW9uJywgJ25hbWUnLCAnd2VpZ2h0JywgJ3N5bWJvbCddO1xuICBkYXRhU291cmNlID0gbmV3IEV4YW1wbGVEYXRhU291cmNlKCk7XG5cbiAgcmVhZG9ubHkgcHJlc2VydmVkTmFtZVZhbHVlcyA9IG5ldyBXZWFrTWFwPFBlcmlvZGljRWxlbWVudCwgYW55PigpO1xuICByZWFkb25seSBwcmVzZXJ2ZWRXZWlnaHRWYWx1ZXMgPSBuZXcgV2Vha01hcDxQZXJpb2RpY0VsZW1lbnQsIGFueT4oKTtcblxuICBvblN1Ym1pdE5hbWUoZWxlbWVudDogUGVyaW9kaWNFbGVtZW50LCBmOiBOZ0Zvcm0pIHtcbiAgICBpZiAoIWYudmFsaWQpIHsgcmV0dXJuOyB9XG5cbiAgICBlbGVtZW50Lm5hbWUgPSBmLnZhbHVlLm5hbWU7XG4gIH1cblxuICBvblN1Ym1pdFdlaWdodChlbGVtZW50OiBQZXJpb2RpY0VsZW1lbnQsIGY6IE5nRm9ybSkge1xuICAgIGlmICghZi52YWxpZCkgeyByZXR1cm47IH1cblxuICAgIGVsZW1lbnQud2VpZ2h0ID0gZi52YWx1ZS53ZWlnaHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBEYXRhIHNvdXJjZSB0byBwcm92aWRlIHdoYXQgZGF0YSBzaG91bGQgYmUgcmVuZGVyZWQgaW4gdGhlIHRhYmxlLiBOb3RlIHRoYXQgdGhlIGRhdGEgc291cmNlXG4gKiBjYW4gcmV0cmlldmUgaXRzIGRhdGEgaW4gYW55IHdheS4gSW4gdGhpcyBjYXNlLCB0aGUgZGF0YSBzb3VyY2UgaXMgcHJvdmlkZWQgYSByZWZlcmVuY2VcbiAqIHRvIGEgY29tbW9uIGRhdGEgYmFzZSwgRXhhbXBsZURhdGFiYXNlLiBJdCBpcyBub3QgdGhlIGRhdGEgc291cmNlJ3MgcmVzcG9uc2liaWxpdHkgdG8gbWFuYWdlXG4gKiB0aGUgdW5kZXJseWluZyBkYXRhLiBJbnN0ZWFkLCBpdCBvbmx5IG5lZWRzIHRvIHRha2UgdGhlIGRhdGEgYW5kIHNlbmQgdGhlIHRhYmxlIGV4YWN0bHkgd2hhdFxuICogc2hvdWxkIGJlIHJlbmRlcmVkLlxuICovXG5leHBvcnQgY2xhc3MgRXhhbXBsZURhdGFTb3VyY2UgZXh0ZW5kcyBEYXRhU291cmNlPFBlcmlvZGljRWxlbWVudD4ge1xuICAvKiogU3RyZWFtIG9mIGRhdGEgdGhhdCBpcyBwcm92aWRlZCB0byB0aGUgdGFibGUuICovXG4gIGRhdGEgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PFBlcmlvZGljRWxlbWVudFtdPihFTEVNRU5UX0RBVEEpO1xuXG4gIC8qKiBDb25uZWN0IGZ1bmN0aW9uIGNhbGxlZCBieSB0aGUgdGFibGUgdG8gcmV0cmlldmUgb25lIHN0cmVhbSBjb250YWluaW5nIHRoZSBkYXRhIHRvIHJlbmRlci4gKi9cbiAgY29ubmVjdCgpOiBPYnNlcnZhYmxlPFBlcmlvZGljRWxlbWVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuZGF0YTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3QoKSB7fVxufVxuIiwiPHRhYmxlIGNsYXNzPVwiZXhhbXBsZS10YWJsZVwiIGNkay10YWJsZSBlZGl0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCI+XG4gIDwhLS1cbiAgICBUaGlzIGVkaXQgbGVucyBpcyBzcGVjaWZpZWQgb3V0c2lkZSBvZiB0aGUgY2VsbCBhbmQgbXVzdCBleHBsaWNpdGx5IGRlY2xhcmVcbiAgICBpdHMgY29udGV4dC4gSXQgY291bGQgYmUgcmV1c2VkIGluIG11bHRpcGxlIGNlbGxzLlxuICAtLT5cbiAgPG5nLXRlbXBsYXRlICN3ZWlnaHRFZGl0IGxldC1lbGVtZW50PlxuICAgIDxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcIj5cbiAgICAgIDxmb3JtICNmPVwibmdGb3JtXCJcbiAgICAgICAgICBjZGtFZGl0Q29udHJvbFxuICAgICAgICAgIChuZ1N1Ym1pdCk9XCJvblN1Ym1pdFdlaWdodChlbGVtZW50LCBmKVwiXG4gICAgICAgICAgW2Nka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZFdlaWdodFZhbHVlcy5nZXQoZWxlbWVudClcIlxuICAgICAgICAgIChjZGtFZGl0Q29udHJvbFByZXNlcnZlZEZvcm1WYWx1ZUNoYW5nZSk9XCJwcmVzZXJ2ZWRXZWlnaHRWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cbiAgICAgICAgRWRpdCBiOlxuICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIFtuZ01vZGVsXT1cImVsZW1lbnQud2VpZ2h0XCIgbmFtZT1cIndlaWdodFwiIHJlcXVpcmVkPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkNvbmZpcm08L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0UmV2ZXJ0IGNka0VkaXRDbG9zZT5SZXZlcnQgYW5kIGNsb3NlPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIDwvbmctdGVtcGxhdGU+XG5cbiAgPCEtLSBQb3NpdGlvbiBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwicG9zaXRpb25cIj5cbiAgICA8dGggY2RrLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPiBOby4gPC90aD5cbiAgICA8dGQgY2RrLWNlbGwgKmNka0NlbGxEZWY9XCJsZXQgZWxlbWVudFwiPiB7e2VsZW1lbnQucG9zaXRpb259fSA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIE5hbWUgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIm5hbWVcIj5cbiAgICA8dGggY2RrLWhlYWRlci1jZWxsICpjZGtIZWFkZXJDZWxsRGVmPiBOYW1lIDwvdGg+XG4gICAgPHRkIGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IGVsZW1lbnRcIlxuICAgICAgICBbY2RrUG9wb3ZlckVkaXRdPVwibmFtZUVkaXRcIj5cbiAgICAgIHt7ZWxlbWVudC5uYW1lfX1cbiAgICAgIFxuICAgICAgPCEtLSBUaGlzIGVkaXQgaXMgZGVmaW5lZCBpbiB0aGUgY2VsbCBhbmQgY2FuIGltcGxpY2l0bHkgYWNjZXNzIGVsZW1lbnQgLS0+XG4gICAgICA8bmctdGVtcGxhdGUgI25hbWVFZGl0PlxuICAgICAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XCI+XG4gICAgICAgICAgPGZvcm0gI2Y9XCJuZ0Zvcm1cIlxuICAgICAgICAgICAgICBjZGtFZGl0Q29udHJvbFxuICAgICAgICAgICAgICAobmdTdWJtaXQpPVwib25TdWJtaXROYW1lKGVsZW1lbnQsIGYpXCJcbiAgICAgICAgICAgICAgW2Nka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlXT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuZ2V0KGVsZW1lbnQpXCJcbiAgICAgICAgICAgICAgKGNka0VkaXRDb250cm9sUHJlc2VydmVkRm9ybVZhbHVlQ2hhbmdlKT1cInByZXNlcnZlZE5hbWVWYWx1ZXMuc2V0KGVsZW1lbnQsICRldmVudClcIj5cbiAgICAgICAgICAgIEVkaXQgYTpcbiAgICAgICAgICAgIDxpbnB1dCBbbmdNb2RlbF09XCJlbGVtZW50Lm5hbWVcIiBuYW1lPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+Q29uZmlybTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0UmV2ZXJ0PlJldmVydDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjZGtFZGl0Q2xvc2U+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgICAgPHNwYW4gKmNka1Jvd0hvdmVyQ29udGVudD5cbiAgICAgICAgPGJ1dHRvbiBjZGtFZGl0T3Blbj5FZGl0PC9idXR0b24+XG4gICAgICA8L3NwYW4+XG4gICAgPC90ZD5cbiAgPC9uZy1jb250YWluZXI+XG5cbiAgPCEtLSBXZWlnaHQgQ29sdW1uIC0tPlxuICA8bmctY29udGFpbmVyIGNka0NvbHVtbkRlZj1cIndlaWdodFwiPlxuICAgIDx0aCBjZGstaGVhZGVyLWNlbGwgKmNka0hlYWRlckNlbGxEZWY+IFdlaWdodCA8L3RoPlxuICAgIDx0ZCBjZGstY2VsbCAqY2RrQ2VsbERlZj1cImxldCBlbGVtZW50XCJcbiAgICAgICAgW2Nka1BvcG92ZXJFZGl0XT1cIndlaWdodEVkaXRcIiBbY2RrUG9wb3ZlckVkaXRDb250ZXh0XT1cImVsZW1lbnRcIj5cbiAgICAgIHt7ZWxlbWVudC53ZWlnaHR9fVxuICAgICAgXG4gICAgICA8c3BhbiAqY2RrUm93SG92ZXJDb250ZW50PlxuICAgICAgICA8YnV0dG9uIGNka0VkaXRPcGVuPkVkaXQ8L2J1dHRvbj5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L3RkPlxuICA8L25nLWNvbnRhaW5lcj5cblxuICA8IS0tIFN5bWJvbCBDb2x1bW4gLS0+XG4gIDxuZy1jb250YWluZXIgY2RrQ29sdW1uRGVmPVwic3ltYm9sXCI+XG4gICAgPHRoIGNkay1oZWFkZXItY2VsbCAqY2RrSGVhZGVyQ2VsbERlZj4gU3ltYm9sIDwvdGg+XG4gICAgPHRkIGNkay1jZWxsICpjZGtDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj4ge3tlbGVtZW50LnN5bWJvbH19IDwvdGQ+XG4gIDwvbmctY29udGFpbmVyPlxuXG4gIDx0ciBjZGstaGVhZGVyLXJvdyAqY2RrSGVhZGVyUm93RGVmPVwiZGlzcGxheWVkQ29sdW1uc1wiPjwvdHI+XG4gIDx0ciBjZGstcm93ICpjZGtSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XG48L3RhYmxlPlxuIl19