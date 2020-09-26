(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/table'), require('@angular/material-experimental/column-resize')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material-experimental/column-resize', ['exports', '@angular/core', '@angular/material/table', '@angular/material-experimental/column-resize'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.materialExperimental = global.ng.componentsExamples.materialExperimental || {}, global.ng.componentsExamples.materialExperimental.columnResize = {}), global.ng.core, global.ng.material.table, global.ng.materialExperimental.columnResize));
}(this, (function (exports, i0, i2, i1) { 'use strict';

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function DefaultEnabledColumnResizeFlexExample_mat_header_cell_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-header-cell", 12);
            i0.ɵɵtext(1, " No. ");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("matResizableMaxWidthPx", 100);
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_cell_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-cell");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_header_cell_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-header-cell", 13);
            i0.ɵɵtext(1, " Name ");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("matResizableMinWidthPx", 150);
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_cell_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-cell");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_header_cell_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-header-cell", 14);
            i0.ɵɵtext(1, " Weight (Not resizable) ");
            i0.ɵɵelementEnd();
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_cell_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-cell");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_header_cell_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-header-cell");
            i0.ɵɵtext(1, " Symbol ");
            i0.ɵɵelementEnd();
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_cell_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-cell");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_header_row_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "mat-header-row");
        }
    }
    function DefaultEnabledColumnResizeFlexExample_mat_row_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "mat-row");
        }
    }
    var ELEMENT_DATA = [
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
     * @title Default-enabled column resize with a flex-based mat-table.
     */
    var DefaultEnabledColumnResizeFlexExample = /** @class */ (function () {
        function DefaultEnabledColumnResizeFlexExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA;
        }
        return DefaultEnabledColumnResizeFlexExample;
    }());
    DefaultEnabledColumnResizeFlexExample.ɵfac = function DefaultEnabledColumnResizeFlexExample_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexExample)(); };
    DefaultEnabledColumnResizeFlexExample.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultEnabledColumnResizeFlexExample, selectors: [["default-enabled-column-resize-flex-example"]], decls: 15, vars: 3, consts: [[1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position", "sticky", ""], [3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "name", "sticky", ""], [3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], [4, "matHeaderCellDef"], [4, "matHeaderRowDef"], [4, "matRowDef", "matRowDefColumns"], [3, "matResizableMaxWidthPx"], [3, "matResizableMinWidthPx"], ["disableResize", ""]], template: function DefaultEnabledColumnResizeFlexExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, DefaultEnabledColumnResizeFlexExample_mat_header_cell_2_Template, 2, 1, "mat-header-cell", 2);
                i0.ɵɵtemplate(3, DefaultEnabledColumnResizeFlexExample_mat_cell_3_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, DefaultEnabledColumnResizeFlexExample_mat_header_cell_5_Template, 2, 1, "mat-header-cell", 5);
                i0.ɵɵtemplate(6, DefaultEnabledColumnResizeFlexExample_mat_cell_6_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 6);
                i0.ɵɵtemplate(8, DefaultEnabledColumnResizeFlexExample_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 7);
                i0.ɵɵtemplate(9, DefaultEnabledColumnResizeFlexExample_mat_cell_9_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 8);
                i0.ɵɵtemplate(11, DefaultEnabledColumnResizeFlexExample_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 9);
                i0.ɵɵtemplate(12, DefaultEnabledColumnResizeFlexExample_mat_cell_12_Template, 2, 1, "mat-cell", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, DefaultEnabledColumnResizeFlexExample_mat_header_row_13_Template, 1, 0, "mat-header-row", 10);
                i0.ɵɵtemplate(14, DefaultEnabledColumnResizeFlexExample_mat_row_14_Template, 1, 0, "mat-row", 11);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1.MatDefaultEnabledColumnResizeFlex, i2.MatTable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i1.MatDefaultResizable, i2.MatHeaderCell, i2.MatCell, i2.MatHeaderRow, i2.MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexExample, [{
                type: i0.Component,
                args: [{
                        selector: 'default-enabled-column-resize-flex-example',
                        templateUrl: 'default-enabled-column-resize-flex-example.html',
                        styleUrls: ['default-enabled-column-resize-flex-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DefaultEnabledColumnResizeFlexExampleModule = /** @class */ (function () {
        function DefaultEnabledColumnResizeFlexExampleModule() {
        }
        return DefaultEnabledColumnResizeFlexExampleModule;
    }());
    DefaultEnabledColumnResizeFlexExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeFlexExampleModule });
    DefaultEnabledColumnResizeFlexExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeFlexExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeFlexExampleModule)(); }, imports: [[
                i1.MatDefaultEnabledColumnResizeModule,
                i2.MatTableModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeFlexExampleModule, { declarations: [DefaultEnabledColumnResizeFlexExample], imports: [i1.MatDefaultEnabledColumnResizeModule,
                i2.MatTableModule], exports: [DefaultEnabledColumnResizeFlexExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DefaultEnabledColumnResizeFlexExampleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatDefaultEnabledColumnResizeModule,
                            i2.MatTableModule,
                        ],
                        declarations: [DefaultEnabledColumnResizeFlexExample],
                        exports: [DefaultEnabledColumnResizeFlexExample],
                    }]
            }], null, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function DefaultEnabledColumnResizeExample_th_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 12);
            i0.ɵɵtext(1, " No. ");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("matResizableMaxWidthPx", 100);
        }
    }
    function DefaultEnabledColumnResizeExample_td_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function DefaultEnabledColumnResizeExample_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 14);
            i0.ɵɵtext(1, " Name ");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("matResizableMinWidthPx", 150);
        }
    }
    function DefaultEnabledColumnResizeExample_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function DefaultEnabledColumnResizeExample_th_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 15);
            i0.ɵɵtext(1, " Weight (Not resizable) ");
            i0.ɵɵelementEnd();
        }
    }
    function DefaultEnabledColumnResizeExample_td_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function DefaultEnabledColumnResizeExample_th_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 16);
            i0.ɵɵtext(1, " Symbol ");
            i0.ɵɵelementEnd();
        }
    }
    function DefaultEnabledColumnResizeExample_td_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function DefaultEnabledColumnResizeExample_tr_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 17);
        }
    }
    function DefaultEnabledColumnResizeExample_tr_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 18);
        }
    }
    var ELEMENT_DATA$1 = [
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
     * @title Default-enabled column resize with a table-based mat-table.
     */
    var DefaultEnabledColumnResizeExample = /** @class */ (function () {
        function DefaultEnabledColumnResizeExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$1;
        }
        return DefaultEnabledColumnResizeExample;
    }());
    DefaultEnabledColumnResizeExample.ɵfac = function DefaultEnabledColumnResizeExample_Factory(t) { return new (t || DefaultEnabledColumnResizeExample)(); };
    DefaultEnabledColumnResizeExample.ɵcmp = i0.ɵɵdefineComponent({ type: DefaultEnabledColumnResizeExample, selectors: [["default-enabled-column-resize-example"]], decls: 15, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position", "sticky", ""], ["mat-header-cell", "", 3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", 3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", "disableResize", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", 3, "matResizableMaxWidthPx"], ["mat-cell", ""], ["mat-header-cell", "", 3, "matResizableMinWidthPx"], ["mat-header-cell", "", "disableResize", ""], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function DefaultEnabledColumnResizeExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, DefaultEnabledColumnResizeExample_th_2_Template, 2, 1, "th", 2);
                i0.ɵɵtemplate(3, DefaultEnabledColumnResizeExample_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, DefaultEnabledColumnResizeExample_th_5_Template, 2, 1, "th", 5);
                i0.ɵɵtemplate(6, DefaultEnabledColumnResizeExample_td_6_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 6);
                i0.ɵɵtemplate(8, DefaultEnabledColumnResizeExample_th_8_Template, 2, 0, "th", 7);
                i0.ɵɵtemplate(9, DefaultEnabledColumnResizeExample_td_9_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 8);
                i0.ɵɵtemplate(11, DefaultEnabledColumnResizeExample_th_11_Template, 2, 0, "th", 9);
                i0.ɵɵtemplate(12, DefaultEnabledColumnResizeExample_td_12_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, DefaultEnabledColumnResizeExample_tr_13_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(14, DefaultEnabledColumnResizeExample_tr_14_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i1.MatDefaultEnabledColumnResize, i2.MatTable, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i1.MatDefaultResizable, i2.MatHeaderCell, i2.MatCell, i2.MatHeaderRow, i2.MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DefaultEnabledColumnResizeExample, [{
                type: i0.Component,
                args: [{
                        selector: 'default-enabled-column-resize-example',
                        templateUrl: 'default-enabled-column-resize-example.html',
                        styleUrls: ['default-enabled-column-resize-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var DefaultEnabledColumnResizeExampleModule = /** @class */ (function () {
        function DefaultEnabledColumnResizeExampleModule() {
        }
        return DefaultEnabledColumnResizeExampleModule;
    }());
    DefaultEnabledColumnResizeExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeExampleModule });
    DefaultEnabledColumnResizeExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeExampleModule)(); }, imports: [[
                i1.MatDefaultEnabledColumnResizeModule,
                i2.MatTableModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeExampleModule, { declarations: [DefaultEnabledColumnResizeExample], imports: [i1.MatDefaultEnabledColumnResizeModule,
                i2.MatTableModule], exports: [DefaultEnabledColumnResizeExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DefaultEnabledColumnResizeExampleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatDefaultEnabledColumnResizeModule,
                            i2.MatTableModule,
                        ],
                        declarations: [DefaultEnabledColumnResizeExample],
                        exports: [DefaultEnabledColumnResizeExample],
                    }]
            }], null, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    function OptInColumnResizeExample_th_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 12);
            i0.ɵɵtext(1, " No. ");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("matResizableMaxWidthPx", 100);
        }
    }
    function OptInColumnResizeExample_td_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r10 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r10.position, " ");
        }
    }
    function OptInColumnResizeExample_th_5_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 14);
            i0.ɵɵtext(1, " Name ");
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("matResizableMinWidthPx", 150);
        }
    }
    function OptInColumnResizeExample_td_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r11 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r11.name, " ");
        }
    }
    function OptInColumnResizeExample_th_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 15);
            i0.ɵɵtext(1, " Weight (Not resizable) ");
            i0.ɵɵelementEnd();
        }
    }
    function OptInColumnResizeExample_td_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r12 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r12.weight, " ");
        }
    }
    function OptInColumnResizeExample_th_11_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "th", 16);
            i0.ɵɵtext(1, " Symbol ");
            i0.ɵɵelementEnd();
        }
    }
    function OptInColumnResizeExample_td_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "td", 13);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var element_r13 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", element_r13.symbol, " ");
        }
    }
    function OptInColumnResizeExample_tr_13_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 17);
        }
    }
    function OptInColumnResizeExample_tr_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelement(0, "tr", 18);
        }
    }
    var ELEMENT_DATA$2 = [
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
     * @title Opt-in column resize with a table-based mat-table.
     */
    var OptInColumnResizeExample = /** @class */ (function () {
        function OptInColumnResizeExample() {
            this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
            this.dataSource = ELEMENT_DATA$2;
        }
        return OptInColumnResizeExample;
    }());
    OptInColumnResizeExample.ɵfac = function OptInColumnResizeExample_Factory(t) { return new (t || OptInColumnResizeExample)(); };
    OptInColumnResizeExample.ɵcmp = i0.ɵɵdefineComponent({ type: OptInColumnResizeExample, selectors: [["opt-in-column-resize-example"]], decls: 15, vars: 3, consts: [["mat-table", "", "columnResize", "", 1, "mat-elevation-z8", "example-table", 3, "dataSource"], ["matColumnDef", "position", "sticky", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMaxWidthPx", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name", "sticky", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMinWidthPx", 4, "matHeaderCellDef"], ["matColumnDef", "weight"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["matColumnDef", "symbol"], ["mat-header-cell", "", "resizable", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "resizable", "", 3, "matResizableMaxWidthPx"], ["mat-cell", ""], ["mat-header-cell", "", "resizable", "", 3, "matResizableMinWidthPx"], ["mat-header-cell", ""], ["mat-header-cell", "", "resizable", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function OptInColumnResizeExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "table", 0);
                i0.ɵɵelementContainerStart(1, 1);
                i0.ɵɵtemplate(2, OptInColumnResizeExample_th_2_Template, 2, 1, "th", 2);
                i0.ɵɵtemplate(3, OptInColumnResizeExample_td_3_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(4, 4);
                i0.ɵɵtemplate(5, OptInColumnResizeExample_th_5_Template, 2, 1, "th", 5);
                i0.ɵɵtemplate(6, OptInColumnResizeExample_td_6_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(7, 6);
                i0.ɵɵtemplate(8, OptInColumnResizeExample_th_8_Template, 2, 0, "th", 7);
                i0.ɵɵtemplate(9, OptInColumnResizeExample_td_9_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵelementContainerStart(10, 8);
                i0.ɵɵtemplate(11, OptInColumnResizeExample_th_11_Template, 2, 0, "th", 9);
                i0.ɵɵtemplate(12, OptInColumnResizeExample_td_12_Template, 2, 1, "td", 3);
                i0.ɵɵelementContainerEnd();
                i0.ɵɵtemplate(13, OptInColumnResizeExample_tr_13_Template, 1, 0, "tr", 10);
                i0.ɵɵtemplate(14, OptInColumnResizeExample_tr_14_Template, 1, 0, "tr", 11);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource);
                i0.ɵɵadvance(13);
                i0.ɵɵproperty("matHeaderRowDef", ctx.displayedColumns);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("matRowDefColumns", ctx.displayedColumns);
            }
        }, directives: [i2.MatTable, i1.MatColumnResize, i2.MatColumnDef, i2.MatHeaderCellDef, i2.MatCellDef, i2.MatHeaderRowDef, i2.MatRowDef, i2.MatHeaderCell, i1.MatResizable, i2.MatCell, i2.MatHeaderRow, i2.MatRow], styles: ["[_nghost-%COMP%] {\n  display: block;\n  overflow: auto;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OptInColumnResizeExample, [{
                type: i0.Component,
                args: [{
                        selector: 'opt-in-column-resize-example',
                        templateUrl: 'opt-in-column-resize-example.html',
                        styleUrls: ['opt-in-column-resize-example.css'],
                    }]
            }], null, null);
    })();

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */
    var OptInColumnResizeExampleModule = /** @class */ (function () {
        function OptInColumnResizeExampleModule() {
        }
        return OptInColumnResizeExampleModule;
    }());
    OptInColumnResizeExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: OptInColumnResizeExampleModule });
    OptInColumnResizeExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function OptInColumnResizeExampleModule_Factory(t) { return new (t || OptInColumnResizeExampleModule)(); }, imports: [[
                i1.MatColumnResizeModule,
                i2.MatTableModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(OptInColumnResizeExampleModule, { declarations: [OptInColumnResizeExample], imports: [i1.MatColumnResizeModule,
                i2.MatTableModule], exports: [OptInColumnResizeExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(OptInColumnResizeExampleModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.MatColumnResizeModule,
                            i2.MatTableModule,
                        ],
                        declarations: [OptInColumnResizeExample],
                        exports: [OptInColumnResizeExample],
                    }]
            }], null, null);
    })();

    var ColumnResizeExamplesModule = /** @class */ (function () {
        function ColumnResizeExamplesModule() {
        }
        return ColumnResizeExamplesModule;
    }());
    ColumnResizeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: ColumnResizeExamplesModule });
    ColumnResizeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ColumnResizeExamplesModule_Factory(t) { return new (t || ColumnResizeExamplesModule)(); }, imports: [DefaultEnabledColumnResizeExampleModule,
            DefaultEnabledColumnResizeFlexExampleModule,
            OptInColumnResizeExampleModule] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ColumnResizeExamplesModule, { exports: [DefaultEnabledColumnResizeExampleModule,
                DefaultEnabledColumnResizeFlexExampleModule,
                OptInColumnResizeExampleModule] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ColumnResizeExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        exports: [
                            DefaultEnabledColumnResizeExampleModule,
                            DefaultEnabledColumnResizeFlexExampleModule,
                            OptInColumnResizeExampleModule,
                        ],
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.ColumnResizeExamplesModule = ColumnResizeExamplesModule;
    exports.DefaultEnabledColumnResizeExample = DefaultEnabledColumnResizeExample;
    exports.DefaultEnabledColumnResizeExampleModule = DefaultEnabledColumnResizeExampleModule;
    exports.DefaultEnabledColumnResizeFlexExample = DefaultEnabledColumnResizeFlexExample;
    exports.DefaultEnabledColumnResizeFlexExampleModule = DefaultEnabledColumnResizeFlexExampleModule;
    exports.OptInColumnResizeExample = OptInColumnResizeExample;
    exports.OptInColumnResizeExampleModule = OptInColumnResizeExampleModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-experimental-column-resize.umd.js.map
