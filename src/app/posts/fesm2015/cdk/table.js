import { CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow, CdkTableModule } from '@angular/cdk/table';
import { ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, ɵɵelement, ɵɵdefineComponent, ɵɵelementContainerStart, ɵɵtemplate, ɵɵelementContainerEnd, ɵɵproperty, ɵsetClassMetadata, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject } from 'rxjs';

function CdkTableFlexBasicExample_cdk_header_cell_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-header-cell");
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function CdkTableFlexBasicExample_cdk_cell_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function CdkTableFlexBasicExample_cdk_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-header-cell");
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function CdkTableFlexBasicExample_cdk_cell_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function CdkTableFlexBasicExample_cdk_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-header-cell");
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function CdkTableFlexBasicExample_cdk_cell_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function CdkTableFlexBasicExample_cdk_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-header-cell");
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function CdkTableFlexBasicExample_cdk_cell_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "cdk-cell");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function CdkTableFlexBasicExample_cdk_header_row_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "cdk-header-row");
} }
function CdkTableFlexBasicExample_cdk_row_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "cdk-row");
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
];
/**
 * @title Basic use of `<cdk-table>` (uses display flex)
 */
class CdkTableFlexBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource();
    }
}
CdkTableFlexBasicExample.ɵfac = function CdkTableFlexBasicExample_Factory(t) { return new (t || CdkTableFlexBasicExample)(); };
CdkTableFlexBasicExample.ɵcmp = ɵɵdefineComponent({ type: CdkTableFlexBasicExample, selectors: [["cdk-table-flex-basic-example"]], decls: 15, vars: 3, consts: [[3, "dataSource"], ["cdkColumnDef", "position"], [4, "cdkHeaderCellDef"], [4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], [4, "cdkHeaderRowDef"], [4, "cdkRowDef", "cdkRowDefColumns"]], template: function CdkTableFlexBasicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "cdk-table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, CdkTableFlexBasicExample_cdk_header_cell_2_Template, 2, 0, "cdk-header-cell", 2);
        ɵɵtemplate(3, CdkTableFlexBasicExample_cdk_cell_3_Template, 2, 1, "cdk-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, CdkTableFlexBasicExample_cdk_header_cell_5_Template, 2, 0, "cdk-header-cell", 2);
        ɵɵtemplate(6, CdkTableFlexBasicExample_cdk_cell_6_Template, 2, 1, "cdk-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 5);
        ɵɵtemplate(8, CdkTableFlexBasicExample_cdk_header_cell_8_Template, 2, 0, "cdk-header-cell", 2);
        ɵɵtemplate(9, CdkTableFlexBasicExample_cdk_cell_9_Template, 2, 1, "cdk-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 6);
        ɵɵtemplate(11, CdkTableFlexBasicExample_cdk_header_cell_11_Template, 2, 0, "cdk-header-cell", 2);
        ɵɵtemplate(12, CdkTableFlexBasicExample_cdk_cell_12_Template, 2, 1, "cdk-cell", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(13, CdkTableFlexBasicExample_cdk_header_row_13_Template, 1, 0, "cdk-header-row", 7);
        ɵɵtemplate(14, CdkTableFlexBasicExample_cdk_row_14_Template, 1, 0, "cdk-row", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
    } }, directives: [CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow], styles: ["cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\ncdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTableFlexBasicExample, [{
        type: Component,
        args: [{
                selector: 'cdk-table-flex-basic-example',
                styleUrls: ['cdk-table-flex-basic-example.css'],
                templateUrl: 'cdk-table-flex-basic-example.html',
            }]
    }], null, null); })();
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource extends DataSource {
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

function CdkTableBasicExample_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function CdkTableBasicExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function CdkTableBasicExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function CdkTableBasicExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function CdkTableBasicExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function CdkTableBasicExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function CdkTableBasicExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function CdkTableBasicExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function CdkTableBasicExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 11);
} }
function CdkTableBasicExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 12);
} }
const ELEMENT_DATA$1 = [
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
];
/**
 * @title Basic CDK data-table
 */
class CdkTableBasicExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$1();
    }
}
CdkTableBasicExample.ɵfac = function CdkTableBasicExample_Factory(t) { return new (t || CdkTableBasicExample)(); };
CdkTableBasicExample.ɵcmp = ɵɵdefineComponent({ type: CdkTableBasicExample, selectors: [["cdk-table-basic-example"]], decls: 15, vars: 3, consts: [["cdk-table", "", 3, "dataSource"], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkTableBasicExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, CdkTableBasicExample_th_2_Template, 2, 0, "th", 2);
        ɵɵtemplate(3, CdkTableBasicExample_td_3_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, CdkTableBasicExample_th_5_Template, 2, 0, "th", 2);
        ɵɵtemplate(6, CdkTableBasicExample_td_6_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 5);
        ɵɵtemplate(8, CdkTableBasicExample_th_8_Template, 2, 0, "th", 2);
        ɵɵtemplate(9, CdkTableBasicExample_td_9_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 6);
        ɵɵtemplate(11, CdkTableBasicExample_th_11_Template, 2, 0, "th", 2);
        ɵɵtemplate(12, CdkTableBasicExample_td_12_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(13, CdkTableBasicExample_tr_13_Template, 1, 0, "tr", 7);
        ɵɵtemplate(14, CdkTableBasicExample_tr_14_Template, 1, 0, "tr", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
    } }, directives: [CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTableBasicExample, [{
        type: Component,
        args: [{
                selector: 'cdk-table-basic-example',
                styleUrls: ['cdk-table-basic-example.css'],
                templateUrl: 'cdk-table-basic-example.html',
            }]
    }], null, null); })();
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$1 extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA$1);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}

function CdkTableFixedLayoutExample_th_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " No. ");
    ɵɵelementEnd();
} }
function CdkTableFixedLayoutExample_td_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r10.position, " ");
} }
function CdkTableFixedLayoutExample_th_5_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Name ");
    ɵɵelementEnd();
} }
function CdkTableFixedLayoutExample_td_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r11.name, " ");
} }
function CdkTableFixedLayoutExample_th_8_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Weight ");
    ɵɵelementEnd();
} }
function CdkTableFixedLayoutExample_td_9_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r12.weight, " ");
} }
function CdkTableFixedLayoutExample_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "th", 9);
    ɵɵtext(1, " Symbol ");
    ɵɵelementEnd();
} }
function CdkTableFixedLayoutExample_td_12_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "td", 10);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const element_r13 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
} }
function CdkTableFixedLayoutExample_tr_13_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 11);
} }
function CdkTableFixedLayoutExample_tr_14_Template(rf, ctx) { if (rf & 1) {
    ɵɵelement(0, "tr", 12);
} }
const ELEMENT_DATA$2 = [
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
];
/**
 * @title CDK table with a fixed layout.
 */
class CdkTableFixedLayoutExample {
    constructor() {
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = new ExampleDataSource$2();
    }
}
CdkTableFixedLayoutExample.ɵfac = function CdkTableFixedLayoutExample_Factory(t) { return new (t || CdkTableFixedLayoutExample)(); };
CdkTableFixedLayoutExample.ɵcmp = ɵɵdefineComponent({ type: CdkTableFixedLayoutExample, selectors: [["cdk-table-fixed-layout-example"]], decls: 15, vars: 3, consts: [["cdk-table", "", "fixedLayout", "", 3, "dataSource"], ["cdkColumnDef", "position"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdkColumnDef", "name"], ["cdkColumnDef", "weight"], ["cdkColumnDef", "symbol"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]], template: function CdkTableFixedLayoutExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "table", 0);
        ɵɵelementContainerStart(1, 1);
        ɵɵtemplate(2, CdkTableFixedLayoutExample_th_2_Template, 2, 0, "th", 2);
        ɵɵtemplate(3, CdkTableFixedLayoutExample_td_3_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(4, 4);
        ɵɵtemplate(5, CdkTableFixedLayoutExample_th_5_Template, 2, 0, "th", 2);
        ɵɵtemplate(6, CdkTableFixedLayoutExample_td_6_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(7, 5);
        ɵɵtemplate(8, CdkTableFixedLayoutExample_th_8_Template, 2, 0, "th", 2);
        ɵɵtemplate(9, CdkTableFixedLayoutExample_td_9_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵelementContainerStart(10, 6);
        ɵɵtemplate(11, CdkTableFixedLayoutExample_th_11_Template, 2, 0, "th", 2);
        ɵɵtemplate(12, CdkTableFixedLayoutExample_td_12_Template, 2, 1, "td", 3);
        ɵɵelementContainerEnd();
        ɵɵtemplate(13, CdkTableFixedLayoutExample_tr_13_Template, 1, 0, "tr", 7);
        ɵɵtemplate(14, CdkTableFixedLayoutExample_tr_14_Template, 1, 0, "tr", 8);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("dataSource", ctx.dataSource);
        ɵɵadvance(13);
        ɵɵproperty("cdkHeaderRowDef", ctx.displayedColumns);
        ɵɵadvance(1);
        ɵɵproperty("cdkRowDefColumns", ctx.displayedColumns);
    } }, directives: [CdkTable, CdkColumnDef, CdkHeaderCellDef, CdkCellDef, CdkHeaderRowDef, CdkRowDef, CdkHeaderCell, CdkCell, CdkHeaderRow, CdkRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTableFixedLayoutExample, [{
        type: Component,
        args: [{
                selector: 'cdk-table-fixed-layout-example',
                styleUrls: ['cdk-table-fixed-layout-example.css'],
                templateUrl: 'cdk-table-fixed-layout-example.html',
            }]
    }], null, null); })();
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
class ExampleDataSource$2 extends DataSource {
    constructor() {
        super(...arguments);
        /** Stream of data that is provided to the table. */
        this.data = new BehaviorSubject(ELEMENT_DATA$2);
    }
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect() {
        return this.data;
    }
    disconnect() { }
}

const EXAMPLES = [
    CdkTableBasicExample,
    CdkTableFlexBasicExample,
    CdkTableFixedLayoutExample,
];
class CdkTableExamplesModule {
}
CdkTableExamplesModule.ɵmod = ɵɵdefineNgModule({ type: CdkTableExamplesModule });
CdkTableExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function CdkTableExamplesModule_Factory(t) { return new (t || CdkTableExamplesModule)(); }, imports: [[
            CdkTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(CdkTableExamplesModule, { declarations: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample], imports: [CdkTableModule], exports: [CdkTableBasicExample,
        CdkTableFlexBasicExample,
        CdkTableFixedLayoutExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(CdkTableExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CdkTableModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CdkTableBasicExample, CdkTableExamplesModule, CdkTableFixedLayoutExample, CdkTableFlexBasicExample };
//# sourceMappingURL=table.js.map
