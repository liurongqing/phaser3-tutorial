(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/form-field'), require('rxjs'), require('rxjs/operators'), require('@angular/material-moment-adapter'), require('moment')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/datepicker', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/core', '@angular/material/datepicker', '@angular/material/icon', '@angular/material/input', '@angular/material/form-field', 'rxjs', 'rxjs/operators', '@angular/material-moment-adapter', 'moment'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.datepicker = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.core, global.ng.material.datepicker, global.ng.material.icon, global.ng.material.input, global.ng.material.formField, global.rxjs, global.rxjs.operators, global.ng.materialMomentAdapter, global.moment));
}(this, (function (exports, i4, i0, i4$1, i5, i1, i3, i6, i2, i1$1, rxjs, operators, materialMomentAdapter, _rollupMoment) { 'use strict';

    var _rollupMoment__default = 'default' in _rollupMoment ? _rollupMoment['default'] : _rollupMoment;

    /** @title Datepicker open method */
    var DatepickerApiExample = /** @class */ (function () {
        function DatepickerApiExample() {
        }
        return DatepickerApiExample;
    }());
    DatepickerApiExample.ɵfac = function DatepickerApiExample_Factory(t) { return new (t || DatepickerApiExample)(); };
    DatepickerApiExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerApiExample, selectors: [["datepicker-api-example"]], decls: 8, vars: 1, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["picker", ""], ["mat-raised-button", "", 3, "click"]], template: function DatepickerApiExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Choose a date");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker", null, 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 3);
                i0.ɵɵlistener("click", function DatepickerApiExample_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1_1); var _r0 = i0.ɵɵreference(5); return _r0.open(); });
                i0.ɵɵtext(7, "Open");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(5);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepicker, i5.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerApiExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-api-example',
                        templateUrl: 'datepicker-api-example.html',
                        styleUrls: ['datepicker-api-example.css'],
                    }]
            }], null, null);
    })();

    /** @title Datepicker palette colors */
    var DatepickerColorExample = /** @class */ (function () {
        function DatepickerColorExample() {
        }
        return DatepickerColorExample;
    }());
    DatepickerColorExample.ɵfac = function DatepickerColorExample_Factory(t) { return new (t || DatepickerColorExample)(); };
    DatepickerColorExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerColorExample, selectors: [["datepicker-color-example"]], decls: 14, vars: 4, consts: [["color", "accent", "appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["color", "primary"], ["picker2", ""]], template: function DatepickerColorExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Inherited calendar color");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-form-field", 0);
                i0.ɵɵelementStart(8, "mat-label");
                i0.ɵɵtext(9, "Custom calendar color");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 1);
                i0.ɵɵelement(11, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(12, "mat-datepicker", 4, 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                var _r1 = i0.ɵɵreference(13);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("matDatepicker", _r1);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r1);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerColorExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-color-example',
                        templateUrl: 'datepicker-color-example.html',
                        styleUrls: ['datepicker-color-example.css'],
                    }]
            }], null, null);
    })();

    /** @title Datepicker with custom calendar header */
    var DatepickerCustomHeaderExample = /** @class */ (function () {
        function DatepickerCustomHeaderExample() {
            this.exampleHeader = ExampleHeader;
        }
        return DatepickerCustomHeaderExample;
    }());
    DatepickerCustomHeaderExample.ɵfac = function DatepickerCustomHeaderExample_Factory(t) { return new (t || DatepickerCustomHeaderExample)(); };
    DatepickerCustomHeaderExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerCustomHeaderExample, selectors: [["datepicker-custom-header-example"]], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "calendarHeaderComponent"], ["picker", ""]], template: function DatepickerCustomHeaderExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Custom calendar header");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", 3, 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("calendarHeaderComponent", ctx.exampleHeader);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerCustomHeaderExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-custom-header-example',
                        templateUrl: 'datepicker-custom-header-example.html',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], null, null);
    })();
    /** Custom header component for datepicker. */
    var ExampleHeader = /** @class */ (function () {
        function ExampleHeader(_calendar, _dateAdapter, _dateFormats, cdr) {
            this._calendar = _calendar;
            this._dateAdapter = _dateAdapter;
            this._dateFormats = _dateFormats;
            this._destroyed = new rxjs.Subject();
            _calendar.stateChanges
                .pipe(operators.takeUntil(this._destroyed))
                .subscribe(function () { return cdr.markForCheck(); });
        }
        ExampleHeader.prototype.ngOnDestroy = function () {
            this._destroyed.next();
            this._destroyed.complete();
        };
        Object.defineProperty(ExampleHeader.prototype, "periodLabel", {
            get: function () {
                return this._dateAdapter
                    .format(this._calendar.activeDate, this._dateFormats.display.monthYearLabel)
                    .toLocaleUpperCase();
            },
            enumerable: false,
            configurable: true
        });
        ExampleHeader.prototype.previousClicked = function (mode) {
            this._calendar.activeDate = mode === 'month' ?
                this._dateAdapter.addCalendarMonths(this._calendar.activeDate, -1) :
                this._dateAdapter.addCalendarYears(this._calendar.activeDate, -1);
        };
        ExampleHeader.prototype.nextClicked = function (mode) {
            this._calendar.activeDate = mode === 'month' ?
                this._dateAdapter.addCalendarMonths(this._calendar.activeDate, 1) :
                this._dateAdapter.addCalendarYears(this._calendar.activeDate, 1);
        };
        return ExampleHeader;
    }());
    ExampleHeader.ɵfac = function ExampleHeader_Factory(t) { return new (t || ExampleHeader)(i0.ɵɵdirectiveInject(i3.MatCalendar), i0.ɵɵdirectiveInject(i1.DateAdapter), i0.ɵɵdirectiveInject(i1.MAT_DATE_FORMATS), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    ExampleHeader.ɵcmp = i0.ɵɵdefineComponent({ type: ExampleHeader, selectors: [["example-header"]], decls: 19, vars: 1, consts: [[1, "example-header"], ["mat-icon-button", "", 1, "example-double-arrow", 3, "click"], ["mat-icon-button", "", 3, "click"], [1, "example-header-label"]], template: function ExampleHeader_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵlistener("click", function ExampleHeader_Template_button_click_1_listener() { return ctx.previousClicked("year"); });
                i0.ɵɵelementStart(2, "mat-icon");
                i0.ɵɵtext(3, "keyboard_arrow_left");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "mat-icon");
                i0.ɵɵtext(5, "keyboard_arrow_left");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "button", 2);
                i0.ɵɵlistener("click", function ExampleHeader_Template_button_click_6_listener() { return ctx.previousClicked("month"); });
                i0.ɵɵelementStart(7, "mat-icon");
                i0.ɵɵtext(8, "keyboard_arrow_left");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "span", 3);
                i0.ɵɵtext(10);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "button", 2);
                i0.ɵɵlistener("click", function ExampleHeader_Template_button_click_11_listener() { return ctx.nextClicked("month"); });
                i0.ɵɵelementStart(12, "mat-icon");
                i0.ɵɵtext(13, "keyboard_arrow_right");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "button", 1);
                i0.ɵɵlistener("click", function ExampleHeader_Template_button_click_14_listener() { return ctx.nextClicked("year"); });
                i0.ɵɵelementStart(15, "mat-icon");
                i0.ɵɵtext(16, "keyboard_arrow_right");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "mat-icon");
                i0.ɵɵtext(18, "keyboard_arrow_right");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(10);
                i0.ɵɵtextInterpolate(ctx.periodLabel);
            }
        }, directives: [i5.MatButton, i6.MatIcon], styles: [".example-header[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label[_ngcontent-%COMP%] {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n      margin: -22%;\n    }"], changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(ExampleHeader, [{
                type: i0.Component,
                args: [{
                        selector: 'example-header',
                        styles: ["\n    .example-header {\n      display: flex;\n      align-items: center;\n      padding: 0.5em;\n    }\n\n    .example-header-label {\n      flex: 1;\n      height: 1em;\n      font-weight: 500;\n      text-align: center;\n    }\n\n    .example-double-arrow .mat-icon {\n      margin: -22%;\n    }\n  "],
                        template: "\n    <div class=\"example-header\">\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"previousClicked('year')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <button mat-icon-button (click)=\"previousClicked('month')\">\n        <mat-icon>keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"example-header-label\">{{periodLabel}}</span>\n      <button mat-icon-button (click)=\"nextClicked('month')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n      <button mat-icon-button class=\"example-double-arrow\" (click)=\"nextClicked('year')\">\n        <mat-icon>keyboard_arrow_right</mat-icon>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n  ",
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    }]
            }], function () {
            return [{ type: i3.MatCalendar }, { type: i1.DateAdapter }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DATE_FORMATS]
                        }] }, { type: i0.ChangeDetectorRef }];
        }, null);
    })();

    /** @title Datepicker with custom icon */
    var DatepickerCustomIconExample = /** @class */ (function () {
        function DatepickerCustomIconExample() {
        }
        return DatepickerCustomIconExample;
    }());
    DatepickerCustomIconExample.ɵfac = function DatepickerCustomIconExample_Factory(t) { return new (t || DatepickerCustomIconExample)(); };
    DatepickerCustomIconExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerCustomIconExample, selectors: [["datepicker-custom-icon-example"]], decls: 9, vars: 2, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["matDatepickerToggleIcon", ""], ["picker", ""]], template: function DatepickerCustomIconExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Choose a date");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelementStart(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelementStart(5, "mat-icon", 3);
                i0.ɵɵtext(6, "keyboard_arrow_down");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(7, "mat-datepicker", null, 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(8);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i6.MatIcon, i3.MatDatepickerToggleIcon, i3.MatDatepicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerCustomIconExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-custom-icon-example',
                        templateUrl: 'datepicker-custom-icon-example.html',
                    }]
            }], null, null);
    })();

    /** @title Datepicker with custom date classes */
    var DatepickerDateClassExample = /** @class */ (function () {
        function DatepickerDateClassExample() {
            this.dateClass = function (cellDate, view) {
                // Only highligh dates inside the month view.
                if (view === 'month') {
                    var date = cellDate.getDate();
                    // Highlight the 1st and 20th day of each month.
                    return (date === 1 || date === 20) ? 'example-custom-date-class' : '';
                }
                return '';
            };
        }
        return DatepickerDateClassExample;
    }());
    DatepickerDateClassExample.ɵfac = function DatepickerDateClassExample_Factory(t) { return new (t || DatepickerDateClassExample)(); };
    DatepickerDateClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDateClassExample, selectors: [["datepicker-date-class-example"]], decls: 7, vars: 3, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], [3, "dateClass"], ["picker", ""]], template: function DatepickerDateClassExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Choose a date");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", 3, 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("dateClass", ctx.dateClass);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], styles: [".example-custom-date-class {\n  background: orange;\n  border-radius: 100%;\n}\n"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerDateClassExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-date-class-example',
                        templateUrl: 'datepicker-date-class-example.html',
                        styleUrls: ['datepicker-date-class-example.css'],
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, null);
    })();

    /** @title Disabled datepicker */
    var DatepickerDisabledExample = /** @class */ (function () {
        function DatepickerDisabledExample() {
        }
        return DatepickerDisabledExample;
    }());
    DatepickerDisabledExample.ɵfac = function DatepickerDisabledExample_Factory(t) { return new (t || DatepickerDisabledExample)(); };
    DatepickerDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerDisabledExample, selectors: [["datepicker-disabled-example"]], decls: 24, vars: 6, consts: [["appearance", "fill"], ["matInput", "", "disabled", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp1", ""], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", "disabled", "", 3, "for"], ["dp2", ""], ["disabled", "false"], ["dp3", ""]], template: function DatepickerDisabledExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵelementStart(1, "mat-form-field", 0);
                i0.ɵɵelementStart(2, "mat-label");
                i0.ɵɵtext(3, "Completely disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "input", 1);
                i0.ɵɵelement(5, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(6, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "p");
                i0.ɵɵelementStart(9, "mat-form-field", 0);
                i0.ɵɵelementStart(10, "mat-label");
                i0.ɵɵtext(11, "Popup disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(12, "input", 4);
                i0.ɵɵelement(13, "mat-datepicker-toggle", 5);
                i0.ɵɵelement(14, "mat-datepicker", null, 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "p");
                i0.ɵɵelementStart(17, "mat-form-field", 0);
                i0.ɵɵelementStart(18, "mat-label");
                i0.ɵɵtext(19, "Input disabled");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(20, "input", 1);
                i0.ɵɵelement(21, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(22, "mat-datepicker", 7, 8);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(7);
                var _r1 = i0.ɵɵreference(15);
                var _r2 = i0.ɵɵreference(23);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("matDatepicker", _r1);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r1);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("matDatepicker", _r2);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r2);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerDisabledExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-disabled-example',
                        templateUrl: 'datepicker-disabled-example.html',
                    }]
            }], null, null);
    })();

    function DatepickerEventsExample_div_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var e_r2 = ctx.$implicit;
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(e_r2);
        }
    }
    /** @title Datepicker input and change events */
    var DatepickerEventsExample = /** @class */ (function () {
        function DatepickerEventsExample() {
            this.events = [];
        }
        DatepickerEventsExample.prototype.addEvent = function (type, event) {
            this.events.push(type + ": " + event.value);
        };
        return DatepickerEventsExample;
    }());
    DatepickerEventsExample.ɵfac = function DatepickerEventsExample_Factory(t) { return new (t || DatepickerEventsExample)(); };
    DatepickerEventsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerEventsExample, selectors: [["datepicker-events-example"]], decls: 9, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "dateInput", "dateChange"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "example-events"], [4, "ngFor", "ngForOf"]], template: function DatepickerEventsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Input & change events");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "input", 1);
                i0.ɵɵlistener("dateInput", function DatepickerEventsExample_Template_input_dateInput_3_listener($event) { return ctx.addEvent("input", $event); })("dateChange", function DatepickerEventsExample_Template_input_dateChange_3_listener($event) { return ctx.addEvent("change", $event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "div", 4);
                i0.ɵɵtemplate(8, DatepickerEventsExample_div_8_Template, 2, 1, "div", 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.events);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker, i4.NgForOf], styles: [".example-events[_ngcontent-%COMP%] {\n  height: 200px;\n  border: 1px solid #555;\n  overflow: auto;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerEventsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-events-example',
                        templateUrl: 'datepicker-events-example.html',
                        styleUrls: ['datepicker-events-example.css'],
                    }]
            }], null, null);
    })();

    /** @title Datepicker with filter validation */
    var DatepickerFilterExample = /** @class */ (function () {
        function DatepickerFilterExample() {
            this.myFilter = function (d) {
                var day = (d || new Date()).getDay();
                // Prevent Saturday and Sunday from being selected.
                return day !== 0 && day !== 6;
            };
        }
        return DatepickerFilterExample;
    }());
    DatepickerFilterExample.ɵfac = function DatepickerFilterExample_Factory(t) { return new (t || DatepickerFilterExample)(); };
    DatepickerFilterExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFilterExample, selectors: [["datepicker-filter-example"]], decls: 7, vars: 3, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepickerFilter", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerFilterExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Choose a date");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepickerFilter", ctx.myFilter)("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerFilterExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-filter-example',
                        templateUrl: 'datepicker-filter-example.html',
                    }]
            }], null, null);
    })();

    var moment = _rollupMoment__default || _rollupMoment;
    // See the Moment.js docs for the meaning of these formats:
    // https://momentjs.com/docs/#/displaying/format/
    var MY_FORMATS = {
        parse: {
            dateInput: 'LL',
        },
        display: {
            dateInput: 'LL',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };
    /** @title Datepicker with custom formats */
    var DatepickerFormatsExample = /** @class */ (function () {
        function DatepickerFormatsExample() {
            this.date = new i4$1.FormControl(moment());
        }
        return DatepickerFormatsExample;
    }());
    DatepickerFormatsExample.ɵfac = function DatepickerFormatsExample_Factory(t) { return new (t || DatepickerFormatsExample)(); };
    DatepickerFormatsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerFormatsExample, selectors: [["datepicker-formats-example"]], features: [i0.ɵɵProvidersFeature([
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: i1.DateAdapter,
                    useClass: materialMomentAdapter.MomentDateAdapter,
                    deps: [i1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: i1.MAT_DATE_FORMATS, useValue: MY_FORMATS },
            ])], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerFormatsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Verbose datepicker");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlDirective, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerFormatsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-formats-example',
                        templateUrl: 'datepicker-formats-example.html',
                        providers: [
                            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                            // application's root module. We provide it at the component level here, due to limitations of
                            // our example generation script.
                            {
                                provide: i1.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: i1.MAT_DATE_FORMATS, useValue: MY_FORMATS },
                        ],
                    }]
            }], null, null);
    })();

    /** @title Datepicker with different locale */
    var DatepickerLocaleExample = /** @class */ (function () {
        function DatepickerLocaleExample(_adapter) {
            this._adapter = _adapter;
        }
        DatepickerLocaleExample.prototype.french = function () {
            this._adapter.setLocale('fr');
        };
        return DatepickerLocaleExample;
    }());
    DatepickerLocaleExample.ɵfac = function DatepickerLocaleExample_Factory(t) { return new (t || DatepickerLocaleExample)(i0.ɵɵdirectiveInject(i1.DateAdapter)); };
    DatepickerLocaleExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerLocaleExample, selectors: [["datepicker-locale-example"]], features: [i0.ɵɵProvidersFeature([
                // The locale would typically be provided on the root module of your application. We do it at
                // the component level here, due to limitations of our example generation script.
                { provide: i1.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                {
                    provide: i1.DateAdapter,
                    useClass: materialMomentAdapter.MomentDateAdapter,
                    deps: [i1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: i1.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
            ])], decls: 9, vars: 2, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["dp", ""], ["mat-button", "", 3, "click"]], template: function DatepickerLocaleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Different locale");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "button", 4);
                i0.ɵɵlistener("click", function DatepickerLocaleExample_Template_button_click_7_listener() { return ctx.french(); });
                i0.ɵɵtext(8, "Dynamically switch to French");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker, i5.MatButton], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerLocaleExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-locale-example',
                        templateUrl: 'datepicker-locale-example.html',
                        styleUrls: ['datepicker-locale-example.css'],
                        providers: [
                            // The locale would typically be provided on the root module of your application. We do it at
                            // the component level here, due to limitations of our example generation script.
                            { provide: i1.MAT_DATE_LOCALE, useValue: 'ja-JP' },
                            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                            // `MatMomentDateModule` in your applications root module. We provide it at the component level
                            // here, due to limitations of our example generation script.
                            {
                                provide: i1.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: i1.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                        ],
                    }]
            }], function () { return [{ type: i1.DateAdapter }]; }, null);
    })();

    /** @title Datepicker with min & max validation */
    var DatepickerMinMaxExample = /** @class */ (function () {
        function DatepickerMinMaxExample() {
            // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
            var currentYear = new Date().getFullYear();
            this.minDate = new Date(currentYear - 20, 0, 1);
            this.maxDate = new Date(currentYear + 1, 11, 31);
        }
        return DatepickerMinMaxExample;
    }());
    DatepickerMinMaxExample.ɵfac = function DatepickerMinMaxExample_Factory(t) { return new (t || DatepickerMinMaxExample)(); };
    DatepickerMinMaxExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerMinMaxExample, selectors: [["datepicker-min-max-example"]], decls: 7, vars: 4, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "min", "max", "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerMinMaxExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Choose a date");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("min", ctx.minDate)("max", ctx.maxDate)("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerMinMaxExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-min-max-example',
                        templateUrl: 'datepicker-min-max-example.html',
                    }]
            }], function () { return []; }, null);
    })();

    var moment$1 = _rollupMoment__default || _rollupMoment;
    /** @title Datepicker that uses Moment.js dates */
    var DatepickerMomentExample = /** @class */ (function () {
        function DatepickerMomentExample() {
            // Datepicker takes `Moment` objects instead of `Date` objects.
            this.date = new i4$1.FormControl(moment$1([2017, 0, 1]));
        }
        return DatepickerMomentExample;
    }());
    DatepickerMomentExample.ɵfac = function DatepickerMomentExample_Factory(t) { return new (t || DatepickerMomentExample)(); };
    DatepickerMomentExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerMomentExample, selectors: [["datepicker-moment-example"]], features: [i0.ɵɵProvidersFeature([
                // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                // `MatMomentDateModule` in your applications root module. We provide it at the component level
                // here, due to limitations of our example generation script.
                { provide: i1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [i1.MAT_DATE_LOCALE] },
                { provide: i1.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
            ])], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["dp", ""]], template: function DatepickerMomentExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Moment.js datepicker");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlDirective, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerMomentExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-moment-example',
                        templateUrl: 'datepicker-moment-example.html',
                        providers: [
                            // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
                            // `MatMomentDateModule` in your applications root module. We provide it at the component level
                            // here, due to limitations of our example generation script.
                            { provide: i1.DateAdapter, useClass: materialMomentAdapter.MomentDateAdapter, deps: [i1.MAT_DATE_LOCALE] },
                            { provide: i1.MAT_DATE_FORMATS, useValue: materialMomentAdapter.MAT_MOMENT_DATE_FORMATS },
                        ],
                    }]
            }], null, null);
    })();

    /** @title Basic datepicker */
    var DatepickerOverviewExample = /** @class */ (function () {
        function DatepickerOverviewExample() {
        }
        return DatepickerOverviewExample;
    }());
    DatepickerOverviewExample.ɵfac = function DatepickerOverviewExample_Factory(t) { return new (t || DatepickerOverviewExample)(); };
    DatepickerOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerOverviewExample, selectors: [["datepicker-overview-example"]], decls: 7, vars: 2, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DatepickerOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Choose a date");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-overview-example',
                        templateUrl: 'datepicker-overview-example.html',
                    }]
            }], null, null);
    })();

    /** @title Datepicker start date */
    var DatepickerStartViewExample = /** @class */ (function () {
        function DatepickerStartViewExample() {
            this.startDate = new Date(1990, 0, 1);
        }
        return DatepickerStartViewExample;
    }());
    DatepickerStartViewExample.ɵfac = function DatepickerStartViewExample_Factory(t) { return new (t || DatepickerStartViewExample)(); };
    DatepickerStartViewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerStartViewExample, selectors: [["datepicker-start-view-example"]], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startView", "year", 3, "startAt"], ["picker", ""]], template: function DatepickerStartViewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Choose a date");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", 3, 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("startAt", ctx.startDate);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerStartViewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-start-view-example',
                        templateUrl: 'datepicker-start-view-example.html',
                    }]
            }], null, null);
    })();

    /** @title Datepicker touch UI */
    var DatepickerTouchExample = /** @class */ (function () {
        function DatepickerTouchExample() {
        }
        return DatepickerTouchExample;
    }());
    DatepickerTouchExample.ɵfac = function DatepickerTouchExample_Factory(t) { return new (t || DatepickerTouchExample)(); };
    DatepickerTouchExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerTouchExample, selectors: [["datepicker-touch-example"]], decls: 7, vars: 2, consts: [["appearance", "fill", 1, "example-full-width"], ["matInput", "", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["touchUi", ""], ["picker", ""]], template: function DatepickerTouchExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Choose a date");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", 3, 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerTouchExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-touch-example',
                        templateUrl: 'datepicker-touch-example.html',
                    }]
            }], null, null);
    })();

    /** @title Datepicker selected value */
    var DatepickerValueExample = /** @class */ (function () {
        function DatepickerValueExample() {
            this.date = new i4$1.FormControl(new Date());
            this.serializedDate = new i4$1.FormControl((new Date()).toISOString());
        }
        return DatepickerValueExample;
    }());
    DatepickerValueExample.ɵfac = function DatepickerValueExample_Factory(t) { return new (t || DatepickerValueExample)(); };
    DatepickerValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerValueExample, selectors: [["datepicker-value-example"]], decls: 21, vars: 9, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["picker1", ""], ["picker2", ""], ["matInput", "", 3, "matDatepicker", "value"], ["picker3", ""]], template: function DatepickerValueExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Angular forms");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(5, "mat-datepicker", null, 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "mat-form-field", 0);
                i0.ɵɵelementStart(8, "mat-label");
                i0.ɵɵtext(9, "Angular forms (w/ deserialization)");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(10, "input", 1);
                i0.ɵɵelement(11, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(12, "mat-datepicker", null, 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-form-field", 0);
                i0.ɵɵelementStart(15, "mat-label");
                i0.ɵɵtext(16, "Value binding");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(17, "input", 5);
                i0.ɵɵelement(18, "mat-datepicker-toggle", 2);
                i0.ɵɵelement(19, "mat-datepicker", null, 6);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                var _r1 = i0.ɵɵreference(13);
                var _r2 = i0.ɵɵreference(20);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("matDatepicker", _r1)("formControl", ctx.serializedDate);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r1);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("matDatepicker", _r2)("value", ctx.date.value);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r2);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlDirective, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerValueExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-value-example',
                        templateUrl: 'datepicker-value-example.html',
                        styleUrls: ['datepicker-value-example.css'],
                    }]
            }], null, null);
    })();

    var moment$2 = _rollupMoment__default || _rollupMoment;
    // See the Moment.js docs for the meaning of these formats:
    // https://momentjs.com/docs/#/displaying/format/
    var MY_FORMATS$1 = {
        parse: {
            dateInput: 'MM/YYYY',
        },
        display: {
            dateInput: 'MM/YYYY',
            monthYearLabel: 'MMM YYYY',
            dateA11yLabel: 'LL',
            monthYearA11yLabel: 'MMMM YYYY',
        },
    };
    /** @title Datepicker emulating a Year and month picker */
    var DatepickerViewsSelectionExample = /** @class */ (function () {
        function DatepickerViewsSelectionExample() {
            this.date = new i4$1.FormControl(moment$2());
        }
        DatepickerViewsSelectionExample.prototype.chosenYearHandler = function (normalizedYear) {
            var ctrlValue = this.date.value;
            ctrlValue.year(normalizedYear.year());
            this.date.setValue(ctrlValue);
        };
        DatepickerViewsSelectionExample.prototype.chosenMonthHandler = function (normalizedMonth, datepicker) {
            var ctrlValue = this.date.value;
            ctrlValue.month(normalizedMonth.month());
            this.date.setValue(ctrlValue);
            datepicker.close();
        };
        return DatepickerViewsSelectionExample;
    }());
    DatepickerViewsSelectionExample.ɵfac = function DatepickerViewsSelectionExample_Factory(t) { return new (t || DatepickerViewsSelectionExample)(); };
    DatepickerViewsSelectionExample.ɵcmp = i0.ɵɵdefineComponent({ type: DatepickerViewsSelectionExample, selectors: [["datepicker-views-selection-example"]], features: [i0.ɵɵProvidersFeature([
                // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                // application's root module. We provide it at the component level here, due to limitations of
                // our example generation script.
                {
                    provide: i1.DateAdapter,
                    useClass: materialMomentAdapter.MomentDateAdapter,
                    deps: [i1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                },
                { provide: i1.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
            ])], decls: 7, vars: 3, consts: [["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "formControl"], ["matSuffix", "", 3, "for"], ["startView", "multi-year", "panelClass", "example-month-picker", 3, "yearSelected", "monthSelected"], ["dp", ""]], template: function DatepickerViewsSelectionExample_Template(rf, ctx) {
            if (rf & 1) {
                var _r1_1 = i0.ɵɵgetCurrentView();
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Month and Year");
                i0.ɵɵelementEnd();
                i0.ɵɵelement(3, "input", 1);
                i0.ɵɵelement(4, "mat-datepicker-toggle", 2);
                i0.ɵɵelementStart(5, "mat-datepicker", 3, 4);
                i0.ɵɵlistener("yearSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_yearSelected_5_listener($event) { return ctx.chosenYearHandler($event); })("monthSelected", function DatepickerViewsSelectionExample_Template_mat_datepicker_monthSelected_5_listener($event) { i0.ɵɵrestoreView(_r1_1); var _r0 = i0.ɵɵreference(6); return ctx.chosenMonthHandler($event, _r0); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(6);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("matDatepicker", _r0)("formControl", ctx.date);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatInput, i3.MatDatepickerInput, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlDirective, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDatepicker], styles: [".example-month-picker[_ngcontent-%COMP%]   .mat-calendar-period-button[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n\n.example-month-picker[_ngcontent-%COMP%]   .mat-calendar-arrow[_ngcontent-%COMP%] {\n  display: none;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerViewsSelectionExample, [{
                type: i0.Component,
                args: [{
                        selector: 'datepicker-views-selection-example',
                        templateUrl: 'datepicker-views-selection-example.html',
                        styleUrls: ['datepicker-views-selection-example.css'],
                        providers: [
                            // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
                            // application's root module. We provide it at the component level here, due to limitations of
                            // our example generation script.
                            {
                                provide: i1.DateAdapter,
                                useClass: materialMomentAdapter.MomentDateAdapter,
                                deps: [i1.MAT_DATE_LOCALE, materialMomentAdapter.MAT_MOMENT_DATE_ADAPTER_OPTIONS]
                            },
                            { provide: i1.MAT_DATE_FORMATS, useValue: MY_FORMATS$1 },
                        ],
                    }]
            }], null, null);
    })();

    /** @title Basic date range picker */
    var DateRangePickerOverviewExample = /** @class */ (function () {
        function DateRangePickerOverviewExample() {
        }
        return DateRangePickerOverviewExample;
    }());
    DateRangePickerOverviewExample.ɵfac = function DateRangePickerOverviewExample_Factory(t) { return new (t || DateRangePickerOverviewExample)(); };
    DateRangePickerOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerOverviewExample, selectors: [["date-range-picker-overview-example"]], decls: 9, vars: 2, consts: [["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateRangePickerOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Enter a date range");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-date-range-input", 1);
                i0.ɵɵelement(4, "input", 2);
                i0.ɵɵelement(5, "input", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "mat-datepicker-toggle", 4);
                i0.ɵɵelement(7, "mat-date-range-picker", null, 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(8);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("rangePicker", _r0);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i3.MatDateRangeInput, i3.MatStartDate, i3.MatEndDate, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDateRangePicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DateRangePickerOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'date-range-picker-overview-example',
                        templateUrl: 'date-range-picker-overview-example.html',
                    }]
            }], null, null);
    })();

    function DateRangePickerFormsExample_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, "Invalid start date");
            i0.ɵɵelementEnd();
        }
    }
    function DateRangePickerFormsExample_mat_error_10_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, "Invalid end date");
            i0.ɵɵelementEnd();
        }
    }
    /** @title Date range picker forms integration */
    var DateRangePickerFormsExample = /** @class */ (function () {
        function DateRangePickerFormsExample() {
            this.range = new i4$1.FormGroup({
                start: new i4$1.FormControl(),
                end: new i4$1.FormControl()
            });
        }
        return DateRangePickerFormsExample;
    }());
    DateRangePickerFormsExample.ɵfac = function DateRangePickerFormsExample_Factory(t) { return new (t || DateRangePickerFormsExample)(); };
    DateRangePickerFormsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerFormsExample, selectors: [["date-range-picker-forms-example"]], decls: 14, vars: 8, consts: [["appearance", "fill"], [3, "formGroup", "rangePicker"], ["matStartDate", "", "formControlName", "start", "placeholder", "Start date"], ["matEndDate", "", "formControlName", "end", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""], [4, "ngIf"]], template: function DateRangePickerFormsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Enter a date range");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-date-range-input", 1);
                i0.ɵɵelement(4, "input", 2);
                i0.ɵɵelement(5, "input", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "mat-datepicker-toggle", 4);
                i0.ɵɵelement(7, "mat-date-range-picker", null, 5);
                i0.ɵɵtemplate(9, DateRangePickerFormsExample_mat_error_9_Template, 2, 0, "mat-error", 6);
                i0.ɵɵtemplate(10, DateRangePickerFormsExample_mat_error_10_Template, 2, 0, "mat-error", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "p");
                i0.ɵɵtext(12);
                i0.ɵɵpipe(13, "json");
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(8);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formGroup", ctx.range)("rangePicker", _r0);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("for", _r0);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.range.controls.start.hasError("matStartDateInvalid"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.range.controls.end.hasError("matEndDateInvalid"));
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Selected range: ", i0.ɵɵpipeBind1(13, 6, ctx.range.value), "");
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i3.MatDateRangeInput, i4$1.NgControlStatusGroup, i4$1.FormGroupDirective, i3.MatStartDate, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlName, i3.MatEndDate, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDateRangePicker, i4.NgIf, i1$1.MatError], pipes: [i4.JsonPipe], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DateRangePickerFormsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'date-range-picker-forms-example',
                        templateUrl: 'date-range-picker-forms-example.html',
                    }]
            }], null, null);
    })();

    /** @title Date range picker comparison ranges */
    var DateRangePickerComparisonExample = /** @class */ (function () {
        function DateRangePickerComparisonExample() {
            var today = new Date();
            var month = today.getMonth();
            var year = today.getFullYear();
            this.campaignOne = new i4$1.FormGroup({
                start: new i4$1.FormControl(new Date(year, month, 13)),
                end: new i4$1.FormControl(new Date(year, month, 16))
            });
            this.campaignTwo = new i4$1.FormGroup({
                start: new i4$1.FormControl(new Date(year, month, 15)),
                end: new i4$1.FormControl(new Date(year, month, 19))
            });
        }
        return DateRangePickerComparisonExample;
    }());
    DateRangePickerComparisonExample.ɵfac = function DateRangePickerComparisonExample_Factory(t) { return new (t || DateRangePickerComparisonExample)(); };
    DateRangePickerComparisonExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerComparisonExample, selectors: [["date-range-picker-comparison-example"]], decls: 18, vars: 10, consts: [["appearance", "fill", 1, "example-form-field"], [3, "formGroup", "rangePicker", "comparisonStart", "comparisonEnd"], ["matStartDate", "", "placeholder", "Start date", "formControlName", "start"], ["matEndDate", "", "placeholder", "End date", "formControlName", "end"], ["matSuffix", "", 3, "for"], ["campaignOnePicker", ""], ["campaignTwoPicker", ""]], template: function DateRangePickerComparisonExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "First campaign");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-date-range-input", 1);
                i0.ɵɵelement(4, "input", 2);
                i0.ɵɵelement(5, "input", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "mat-datepicker-toggle", 4);
                i0.ɵɵelement(7, "mat-date-range-picker", null, 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-form-field", 0);
                i0.ɵɵelementStart(10, "mat-label");
                i0.ɵɵtext(11, "Second campaign");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-date-range-input", 1);
                i0.ɵɵelement(13, "input", 2);
                i0.ɵɵelement(14, "input", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(15, "mat-datepicker-toggle", 4);
                i0.ɵɵelement(16, "mat-date-range-picker", null, 6);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(8);
                var _r1 = i0.ɵɵreference(17);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formGroup", ctx.campaignOne)("rangePicker", _r0)("comparisonStart", ctx.campaignTwo.value.start)("comparisonEnd", ctx.campaignTwo.value.end);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("for", _r0);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("formGroup", ctx.campaignTwo)("rangePicker", _r1)("comparisonStart", ctx.campaignOne.value.start)("comparisonEnd", ctx.campaignOne.value.end);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("for", _r1);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i3.MatDateRangeInput, i4$1.NgControlStatusGroup, i4$1.FormGroupDirective, i3.MatStartDate, i4$1.DefaultValueAccessor, i4$1.NgControlStatus, i4$1.FormControlName, i3.MatEndDate, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDateRangePicker], styles: [".example-form-field[_ngcontent-%COMP%] {\n  margin: 0 8px 16px 0;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DateRangePickerComparisonExample, [{
                type: i0.Component,
                args: [{
                        selector: 'date-range-picker-comparison-example',
                        templateUrl: 'date-range-picker-comparison-example.html',
                        styleUrls: ['date-range-picker-comparison-example.css'],
                    }]
            }], function () { return []; }, null);
    })();

    var FiveDayRangeSelectionStrategy = /** @class */ (function () {
        function FiveDayRangeSelectionStrategy(_dateAdapter) {
            this._dateAdapter = _dateAdapter;
        }
        FiveDayRangeSelectionStrategy.prototype.selectionFinished = function (date) {
            return this._createFiveDayRange(date);
        };
        FiveDayRangeSelectionStrategy.prototype.createPreview = function (activeDate) {
            return this._createFiveDayRange(activeDate);
        };
        FiveDayRangeSelectionStrategy.prototype._createFiveDayRange = function (date) {
            if (date) {
                var start = this._dateAdapter.addCalendarDays(date, -2);
                var end = this._dateAdapter.addCalendarDays(date, 2);
                return new i3.DateRange(start, end);
            }
            return new i3.DateRange(null, null);
        };
        return FiveDayRangeSelectionStrategy;
    }());
    FiveDayRangeSelectionStrategy.ɵfac = function FiveDayRangeSelectionStrategy_Factory(t) { return new (t || FiveDayRangeSelectionStrategy)(i0.ɵɵinject(i1.DateAdapter)); };
    FiveDayRangeSelectionStrategy.ɵprov = i0.ɵɵdefineInjectable({ token: FiveDayRangeSelectionStrategy, factory: FiveDayRangeSelectionStrategy.ɵfac });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(FiveDayRangeSelectionStrategy, [{
                type: i0.Injectable
            }], function () { return [{ type: i1.DateAdapter }]; }, null);
    })();
    /** @title Date range picker with custom a selection strategy */
    var DateRangePickerSelectionStrategyExample = /** @class */ (function () {
        function DateRangePickerSelectionStrategyExample() {
        }
        return DateRangePickerSelectionStrategyExample;
    }());
    DateRangePickerSelectionStrategyExample.ɵfac = function DateRangePickerSelectionStrategyExample_Factory(t) { return new (t || DateRangePickerSelectionStrategyExample)(); };
    DateRangePickerSelectionStrategyExample.ɵcmp = i0.ɵɵdefineComponent({ type: DateRangePickerSelectionStrategyExample, selectors: [["date-range-picker-selection-strategy-example"]], features: [i0.ɵɵProvidersFeature([{
                    provide: i3.MAT_DATE_RANGE_SELECTION_STRATEGY,
                    useClass: FiveDayRangeSelectionStrategy
                }])], decls: 9, vars: 2, consts: [["appearance", "fill"], [3, "rangePicker"], ["matStartDate", "", "placeholder", "Start date"], ["matEndDate", "", "placeholder", "End date"], ["matSuffix", "", 3, "for"], ["picker", ""]], template: function DateRangePickerSelectionStrategyExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Enter a date range");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-date-range-input", 1);
                i0.ɵɵelement(4, "input", 2);
                i0.ɵɵelement(5, "input", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(6, "mat-datepicker-toggle", 4);
                i0.ɵɵelement(7, "mat-date-range-picker", null, 5);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                var _r0 = i0.ɵɵreference(8);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("rangePicker", _r0);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("for", _r0);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i3.MatDateRangeInput, i3.MatStartDate, i3.MatEndDate, i3.MatDatepickerToggle, i1$1.MatSuffix, i3.MatDateRangePicker], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DateRangePickerSelectionStrategyExample, [{
                type: i0.Component,
                args: [{
                        selector: 'date-range-picker-selection-strategy-example',
                        templateUrl: 'date-range-picker-selection-strategy-example.html',
                        providers: [{
                                provide: i3.MAT_DATE_RANGE_SELECTION_STRATEGY,
                                useClass: FiveDayRangeSelectionStrategy
                            }]
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        DatepickerApiExample,
        DatepickerColorExample,
        DatepickerCustomHeaderExample,
        DatepickerCustomIconExample,
        DatepickerDateClassExample,
        DatepickerDisabledExample,
        DatepickerEventsExample,
        DatepickerFilterExample,
        DatepickerFormatsExample,
        DatepickerLocaleExample,
        DatepickerMinMaxExample,
        DatepickerMomentExample,
        DatepickerOverviewExample,
        DatepickerStartViewExample,
        DatepickerTouchExample,
        DatepickerValueExample,
        DatepickerViewsSelectionExample,
        DateRangePickerOverviewExample,
        DateRangePickerFormsExample,
        DateRangePickerComparisonExample,
        DateRangePickerSelectionStrategyExample,
        ExampleHeader,
    ];
    var DatepickerExamplesModule = /** @class */ (function () {
        function DatepickerExamplesModule() {
        }
        return DatepickerExamplesModule;
    }());
    DatepickerExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: DatepickerExamplesModule });
    DatepickerExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DatepickerExamplesModule_Factory(t) { return new (t || DatepickerExamplesModule)(); }, imports: [[
                i4.CommonModule,
                i5.MatButtonModule,
                i3.MatDatepickerModule,
                i2.MatInputModule,
                i6.MatIconModule,
                i1.MatNativeDateModule,
                i4$1.ReactiveFormsModule,
                i4$1.FormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DatepickerExamplesModule, { declarations: [DatepickerApiExample,
                DatepickerColorExample,
                DatepickerCustomHeaderExample,
                DatepickerCustomIconExample,
                DatepickerDateClassExample,
                DatepickerDisabledExample,
                DatepickerEventsExample,
                DatepickerFilterExample,
                DatepickerFormatsExample,
                DatepickerLocaleExample,
                DatepickerMinMaxExample,
                DatepickerMomentExample,
                DatepickerOverviewExample,
                DatepickerStartViewExample,
                DatepickerTouchExample,
                DatepickerValueExample,
                DatepickerViewsSelectionExample,
                DateRangePickerOverviewExample,
                DateRangePickerFormsExample,
                DateRangePickerComparisonExample,
                DateRangePickerSelectionStrategyExample,
                ExampleHeader], imports: [i4.CommonModule,
                i5.MatButtonModule,
                i3.MatDatepickerModule,
                i2.MatInputModule,
                i6.MatIconModule,
                i1.MatNativeDateModule,
                i4$1.ReactiveFormsModule,
                i4$1.FormsModule], exports: [DatepickerApiExample,
                DatepickerColorExample,
                DatepickerCustomHeaderExample,
                DatepickerCustomIconExample,
                DatepickerDateClassExample,
                DatepickerDisabledExample,
                DatepickerEventsExample,
                DatepickerFilterExample,
                DatepickerFormatsExample,
                DatepickerLocaleExample,
                DatepickerMinMaxExample,
                DatepickerMomentExample,
                DatepickerOverviewExample,
                DatepickerStartViewExample,
                DatepickerTouchExample,
                DatepickerValueExample,
                DatepickerViewsSelectionExample,
                DateRangePickerOverviewExample,
                DateRangePickerFormsExample,
                DateRangePickerComparisonExample,
                DateRangePickerSelectionStrategyExample,
                ExampleHeader] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DatepickerExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i5.MatButtonModule,
                            i3.MatDatepickerModule,
                            i2.MatInputModule,
                            i6.MatIconModule,
                            i1.MatNativeDateModule,
                            i4$1.ReactiveFormsModule,
                            i4$1.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DateRangePickerComparisonExample = DateRangePickerComparisonExample;
    exports.DateRangePickerFormsExample = DateRangePickerFormsExample;
    exports.DateRangePickerOverviewExample = DateRangePickerOverviewExample;
    exports.DateRangePickerSelectionStrategyExample = DateRangePickerSelectionStrategyExample;
    exports.DatepickerApiExample = DatepickerApiExample;
    exports.DatepickerColorExample = DatepickerColorExample;
    exports.DatepickerCustomHeaderExample = DatepickerCustomHeaderExample;
    exports.DatepickerCustomIconExample = DatepickerCustomIconExample;
    exports.DatepickerDateClassExample = DatepickerDateClassExample;
    exports.DatepickerDisabledExample = DatepickerDisabledExample;
    exports.DatepickerEventsExample = DatepickerEventsExample;
    exports.DatepickerExamplesModule = DatepickerExamplesModule;
    exports.DatepickerFilterExample = DatepickerFilterExample;
    exports.DatepickerFormatsExample = DatepickerFormatsExample;
    exports.DatepickerLocaleExample = DatepickerLocaleExample;
    exports.DatepickerMinMaxExample = DatepickerMinMaxExample;
    exports.DatepickerMomentExample = DatepickerMomentExample;
    exports.DatepickerOverviewExample = DatepickerOverviewExample;
    exports.DatepickerStartViewExample = DatepickerStartViewExample;
    exports.DatepickerTouchExample = DatepickerTouchExample;
    exports.DatepickerValueExample = DatepickerValueExample;
    exports.DatepickerViewsSelectionExample = DatepickerViewsSelectionExample;
    exports.ExampleHeader = ExampleHeader;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-datepicker.umd.js.map
