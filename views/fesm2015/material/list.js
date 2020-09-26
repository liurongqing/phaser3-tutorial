import { NgForOf, DatePipe, CommonModule } from '@angular/common';
import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵpipe, ɵɵadvance, ɵɵtextInterpolate, ɵɵtextInterpolate1, ɵɵpipeBind1, ɵɵtemplate, ɵɵelement, ɵɵproperty, ɵɵreference, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatList, MatListItem, MatListSubheaderCssMatStyler, MatListIconCssMatStyler, MatSelectionList, MatListOption, MatListModule } from '@angular/material/list';
import { MatDivider } from '@angular/material/divider';
import { MatLine } from '@angular/material/core';

/**
 * @title Basic list
 */
class ListOverviewExample {
}
ListOverviewExample.ɵfac = function ListOverviewExample_Factory(t) { return new (t || ListOverviewExample)(); };
ListOverviewExample.ɵcmp = ɵɵdefineComponent({ type: ListOverviewExample, selectors: [["list-overview-example"]], decls: 7, vars: 0, consts: [["role", "list"], ["role", "listitem"]], template: function ListOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-list", 0);
        ɵɵelementStart(1, "mat-list-item", 1);
        ɵɵtext(2, "Item 1");
        ɵɵelementEnd();
        ɵɵelementStart(3, "mat-list-item", 1);
        ɵɵtext(4, "Item 2");
        ɵɵelementEnd();
        ɵɵelementStart(5, "mat-list-item", 1);
        ɵɵtext(6, "Item 3");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatList, MatListItem], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ListOverviewExample, [{
        type: Component,
        args: [{
                selector: 'list-overview-example',
                templateUrl: 'list-overview-example.html',
            }]
    }], null, null); })();

function ListSectionsExample_mat_list_item_3_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-item");
    ɵɵelementStart(1, "mat-icon", 2);
    ɵɵtext(2, "folder");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 3);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 3);
    ɵɵtext(6);
    ɵɵpipe(7, "date");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const folder_r2 = ctx.$implicit;
    ɵɵadvance(4);
    ɵɵtextInterpolate(folder_r2.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 2, folder_r2.updated), " ");
} }
function ListSectionsExample_mat_list_item_7_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-item");
    ɵɵelementStart(1, "mat-icon", 2);
    ɵɵtext(2, "note");
    ɵɵelementEnd();
    ɵɵelementStart(3, "div", 3);
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "div", 3);
    ɵɵtext(6);
    ɵɵpipe(7, "date");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const note_r3 = ctx.$implicit;
    ɵɵadvance(4);
    ɵɵtextInterpolate(note_r3.name);
    ɵɵadvance(2);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind1(7, 2, note_r3.updated), " ");
} }
/**
 * @title List with sections
 */
class ListSectionsExample {
    constructor() {
        this.folders = [
            {
                name: 'Photos',
                updated: new Date('1/1/16'),
            },
            {
                name: 'Recipes',
                updated: new Date('1/17/16'),
            },
            {
                name: 'Work',
                updated: new Date('1/28/16'),
            }
        ];
        this.notes = [
            {
                name: 'Vacation Itinerary',
                updated: new Date('2/20/16'),
            },
            {
                name: 'Kitchen Remodel',
                updated: new Date('1/18/16'),
            }
        ];
    }
}
ListSectionsExample.ɵfac = function ListSectionsExample_Factory(t) { return new (t || ListSectionsExample)(); };
ListSectionsExample.ɵcmp = ɵɵdefineComponent({ type: ListSectionsExample, selectors: [["list-sections-example"]], decls: 8, vars: 2, consts: [["mat-subheader", ""], [4, "ngFor", "ngForOf"], ["mat-list-icon", ""], ["mat-line", ""]], template: function ListSectionsExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-list");
        ɵɵelementStart(1, "div", 0);
        ɵɵtext(2, "Folders");
        ɵɵelementEnd();
        ɵɵtemplate(3, ListSectionsExample_mat_list_item_3_Template, 8, 4, "mat-list-item", 1);
        ɵɵelement(4, "mat-divider");
        ɵɵelementStart(5, "div", 0);
        ɵɵtext(6, "Notes");
        ɵɵelementEnd();
        ɵɵtemplate(7, ListSectionsExample_mat_list_item_7_Template, 8, 4, "mat-list-item", 1);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.folders);
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.notes);
    } }, directives: [MatList, MatListSubheaderCssMatStyler, NgForOf, MatDivider, MatListItem, MatIcon, MatListIconCssMatStyler, MatLine], pipes: [DatePipe], styles: [".mat-list-icon[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.54);\n}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ListSectionsExample, [{
        type: Component,
        args: [{
                selector: 'list-sections-example',
                styleUrls: ['list-sections-example.css'],
                templateUrl: 'list-sections-example.html',
            }]
    }], null, null); })();

function ListSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-option");
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const shoe_r2 = ctx.$implicit;
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", shoe_r2, " ");
} }
/**
 * @title List with selection
 */
class ListSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSelectionExample.ɵfac = function ListSelectionExample_Factory(t) { return new (t || ListSelectionExample)(); };
ListSelectionExample.ɵcmp = ɵɵdefineComponent({ type: ListSelectionExample, selectors: [["list-selection-example"]], decls: 5, vars: 2, consts: [["shoes", ""], [4, "ngFor", "ngForOf"]], template: function ListSelectionExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-selection-list", null, 0);
        ɵɵtemplate(2, ListSelectionExample_mat_list_option_2_Template, 2, 1, "mat-list-option", 1);
        ɵɵelementEnd();
        ɵɵelementStart(3, "p");
        ɵɵtext(4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.typesOfShoes);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" Options selected: ", _r0.selectedOptions.selected.length, "\n");
    } }, directives: [MatSelectionList, NgForOf, MatListOption], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ListSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-selection-example',
                styleUrls: ['list-selection-example.css'],
                templateUrl: 'list-selection-example.html',
            }]
    }], null, null); })();

function ListSingleSelectionExample_mat_list_option_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "mat-list-option", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const shoe_r2 = ctx.$implicit;
    ɵɵproperty("value", shoe_r2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", shoe_r2, " ");
} }
/**
 * @title List with single selection
 */
class ListSingleSelectionExample {
    constructor() {
        this.typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    }
}
ListSingleSelectionExample.ɵfac = function ListSingleSelectionExample_Factory(t) { return new (t || ListSingleSelectionExample)(); };
ListSingleSelectionExample.ɵcmp = ɵɵdefineComponent({ type: ListSingleSelectionExample, selectors: [["list-single-selection-example"]], decls: 5, vars: 3, consts: [[3, "multiple"], ["shoes", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function ListSingleSelectionExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-selection-list", 0, 1);
        ɵɵtemplate(2, ListSingleSelectionExample_mat_list_option_2_Template, 2, 2, "mat-list-option", 2);
        ɵɵelementEnd();
        ɵɵelementStart(3, "p");
        ɵɵtext(4);
        ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = ɵɵreference(1);
        ɵɵproperty("multiple", false);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.typesOfShoes);
        ɵɵadvance(2);
        ɵɵtextInterpolate1(" Option selected: ", _r0.selectedOptions.selected[0] == null ? null : _r0.selectedOptions.selected[0].value, "\n");
    } }, directives: [MatSelectionList, NgForOf, MatListOption], styles: [""] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(ListSingleSelectionExample, [{
        type: Component,
        args: [{
                selector: 'list-single-selection-example',
                styleUrls: ['list-single-selection-example.css'],
                templateUrl: 'list-single-selection-example.html',
            }]
    }], null, null); })();

const EXAMPLES = [
    ListOverviewExample,
    ListSectionsExample,
    ListSelectionExample,
    ListSingleSelectionExample,
];
class ListExamplesModule {
}
ListExamplesModule.ɵmod = ɵɵdefineNgModule({ type: ListExamplesModule });
ListExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function ListExamplesModule_Factory(t) { return new (t || ListExamplesModule)(); }, imports: [[
            CommonModule,
            MatIconModule,
            MatListModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ListExamplesModule, { declarations: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample], imports: [CommonModule,
        MatIconModule,
        MatListModule], exports: [ListOverviewExample,
        ListSectionsExample,
        ListSelectionExample,
        ListSingleSelectionExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(ListExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    CommonModule,
                    MatIconModule,
                    MatListModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { ListExamplesModule, ListOverviewExample, ListSectionsExample, ListSelectionExample, ListSingleSelectionExample };
//# sourceMappingURL=list.js.map
