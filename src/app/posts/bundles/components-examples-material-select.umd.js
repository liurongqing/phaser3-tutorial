(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/checkbox'), require('@angular/material/input'), require('@angular/material/select'), require('@angular/material/form-field'), require('@angular/material/core')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/select', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/checkbox', '@angular/material/input', '@angular/material/select', '@angular/material/form-field', '@angular/material/core'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.select = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.checkbox, global.ng.material.input, global.ng.material.select, global.ng.material.formField, global.ng.material.core));
}(this, (function (exports, i4, i0, i3, i1, i6, i2, i1$1, i4$1) { 'use strict';

    function SelectCustomTriggerExample_span_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 4);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate2(" (+", ctx_r0.toppings.value.length - 1, " ", (ctx_r0.toppings.value == null ? null : ctx_r0.toppings.value.length) === 2 ? "other" : "others", ") ");
        }
    }
    function SelectCustomTriggerExample_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var topping_r2 = ctx.$implicit;
            i0.ɵɵproperty("value", topping_r2);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(topping_r2);
        }
    }
    /** @title Select with custom trigger text */
    var SelectCustomTriggerExample = /** @class */ (function () {
        function SelectCustomTriggerExample() {
            this.toppings = new i3.FormControl();
            this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        }
        return SelectCustomTriggerExample;
    }());
    SelectCustomTriggerExample.ɵfac = function SelectCustomTriggerExample_Factory(t) { return new (t || SelectCustomTriggerExample)(); };
    SelectCustomTriggerExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectCustomTriggerExample, selectors: [["select-custom-trigger-example"]], decls: 8, vars: 4, consts: [["appearance", "fill"], ["multiple", "", 3, "formControl"], ["class", "example-additional-selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "example-additional-selection"], [3, "value"]], template: function SelectCustomTriggerExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Toppings");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-select", 1);
                i0.ɵɵelementStart(4, "mat-select-trigger");
                i0.ɵɵtext(5);
                i0.ɵɵtemplate(6, SelectCustomTriggerExample_span_6_Template, 2, 2, "span", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(7, SelectCustomTriggerExample_mat_option_7_Template, 2, 2, "mat-option", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formControl", ctx.toppings);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" ", ctx.toppings.value ? ctx.toppings.value[0] : "", " ");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", (ctx.toppings.value == null ? null : ctx.toppings.value.length) > 1);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.toppingList);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i2.MatSelectTrigger, i4.NgIf, i4.NgForOf, i4$1.MatOption], styles: [".example-additional-selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectCustomTriggerExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-custom-trigger-example',
                        templateUrl: 'select-custom-trigger-example.html',
                        styleUrls: ['select-custom-trigger-example.css'],
                    }]
            }], null, null);
    })();

    /** @title Disabled select */
    var SelectDisabledExample = /** @class */ (function () {
        function SelectDisabledExample() {
            this.disableSelect = new i3.FormControl(false);
        }
        return SelectDisabledExample;
    }());
    SelectDisabledExample.ɵfac = function SelectDisabledExample_Factory(t) { return new (t || SelectDisabledExample)(); };
    SelectDisabledExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectDisabledExample, selectors: [["select-disabled-example"]], decls: 30, vars: 3, consts: [[3, "formControl"], ["appearance", "fill"], [3, "disabled"], ["value", "option1"], ["value", "option2", "disabled", ""], ["value", "option3"], ["matNativeControl", "", 3, "disabled"], ["value", "", "selected", ""], ["value", "volvo"], ["value", "saab", "disabled", ""], ["value", "mercedes"], ["value", "audi"]], template: function SelectDisabledExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "p");
                i0.ɵɵelementStart(1, "mat-checkbox", 0);
                i0.ɵɵtext(2, "Disable select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "h4");
                i0.ɵɵtext(4, "mat-select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-form-field", 1);
                i0.ɵɵelementStart(6, "mat-label");
                i0.ɵɵtext(7, "Choose an option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-select", 2);
                i0.ɵɵelementStart(9, "mat-option", 3);
                i0.ɵɵtext(10, "Option 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-option", 4);
                i0.ɵɵtext(12, "Option 2 (disabled)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "mat-option", 5);
                i0.ɵɵtext(14, "Option 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "h4");
                i0.ɵɵtext(16, "native html select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "mat-form-field", 1);
                i0.ɵɵelementStart(18, "mat-label");
                i0.ɵɵtext(19, "Choose an option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "select", 6);
                i0.ɵɵelement(21, "option", 7);
                i0.ɵɵelementStart(22, "option", 8);
                i0.ɵɵtext(23, "Volvo");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(24, "option", 9);
                i0.ɵɵtext(25, "Saab");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(26, "option", 10);
                i0.ɵɵtext(27, "Mercedes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(28, "option", 11);
                i0.ɵɵtext(29, "Audi");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("formControl", ctx.disableSelect);
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("disabled", ctx.disableSelect.value);
                i0.ɵɵadvance(12);
                i0.ɵɵproperty("disabled", ctx.disableSelect.value);
            }
        }, directives: [i1.MatCheckbox, i3.NgControlStatus, i3.FormControlDirective, i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i4$1.MatOption, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectDisabledExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-disabled-example',
                        templateUrl: 'select-disabled-example.html',
                    }]
            }], null, null);
    })();

    function SelectErrorStateMatcherExample_mat_error_14_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, "You must make a selection");
            i0.ɵɵelementEnd();
        }
    }
    function SelectErrorStateMatcherExample_mat_error_15_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, " Your selection is invalid ");
            i0.ɵɵelementEnd();
        }
    }
    function SelectErrorStateMatcherExample_mat_error_27_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, "You must make a selection");
            i0.ɵɵelementEnd();
        }
    }
    function SelectErrorStateMatcherExample_mat_error_28_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, " Your selection is invalid ");
            i0.ɵɵelementEnd();
        }
    }
    /** Error when invalid control is dirty, touched, or submitted. */
    var MyErrorStateMatcher = /** @class */ (function () {
        function MyErrorStateMatcher() {
        }
        MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
            var isSubmitted = form && form.submitted;
            return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        };
        return MyErrorStateMatcher;
    }());
    /** @title Select with a custom ErrorStateMatcher */
    var SelectErrorStateMatcherExample = /** @class */ (function () {
        function SelectErrorStateMatcherExample() {
            this.selected = new i3.FormControl('valid', [
                i3.Validators.required,
                i3.Validators.pattern('valid'),
            ]);
            this.selectFormControl = new i3.FormControl('valid', [
                i3.Validators.required,
                i3.Validators.pattern('valid'),
            ]);
            this.nativeSelectFormControl = new i3.FormControl('valid', [
                i3.Validators.required,
                i3.Validators.pattern('valid'),
            ]);
            this.matcher = new MyErrorStateMatcher();
        }
        return SelectErrorStateMatcherExample;
    }());
    SelectErrorStateMatcherExample.ɵfac = function SelectErrorStateMatcherExample_Factory(t) { return new (t || SelectErrorStateMatcherExample)(); };
    SelectErrorStateMatcherExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectErrorStateMatcherExample, selectors: [["select-error-state-matcher-example"]], decls: 29, vars: 8, consts: [["appearance", "fill"], [3, "formControl", "errorStateMatcher"], ["value", "valid"], ["value", "invalid"], [4, "ngIf"], ["appearance", "fill", 1, "demo-full-width"], ["matNativeControl", "", 3, "formControl", "errorStateMatcher"], ["value", ""], ["value", "valid", "selected", ""]], template: function SelectErrorStateMatcherExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h4");
                i0.ɵɵtext(1, "mat-select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-form-field", 0);
                i0.ɵɵelementStart(3, "mat-label");
                i0.ɵɵtext(4, "Choose one");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-select", 1);
                i0.ɵɵelementStart(6, "mat-option");
                i0.ɵɵtext(7, "Clear");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-option", 2);
                i0.ɵɵtext(9, "Valid option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-option", 3);
                i0.ɵɵtext(11, "Invalid option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-hint");
                i0.ɵɵtext(13, "Errors appear instantly!");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(14, SelectErrorStateMatcherExample_mat_error_14_Template, 2, 0, "mat-error", 4);
                i0.ɵɵtemplate(15, SelectErrorStateMatcherExample_mat_error_15_Template, 2, 0, "mat-error", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(16, "h4");
                i0.ɵɵtext(17, "native html select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "mat-form-field", 5);
                i0.ɵɵelementStart(19, "mat-label");
                i0.ɵɵtext(20, "Choose one");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "select", 6);
                i0.ɵɵelement(22, "option", 7);
                i0.ɵɵelementStart(23, "option", 8);
                i0.ɵɵtext(24, "Valid option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "option", 3);
                i0.ɵɵtext(26, "Invalid option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(27, SelectErrorStateMatcherExample_mat_error_27_Template, 2, 0, "mat-error", 4);
                i0.ɵɵtemplate(28, SelectErrorStateMatcherExample_mat_error_28_Template, 2, 0, "mat-error", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("formControl", ctx.selected)("errorStateMatcher", ctx.matcher);
                i0.ɵɵadvance(9);
                i0.ɵɵproperty("ngIf", ctx.selected.hasError("required"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.selected.hasError("pattern") && !ctx.selected.hasError("required"));
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("formControl", ctx.nativeSelectFormControl)("errorStateMatcher", ctx.matcher);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("required"));
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.nativeSelectFormControl.hasError("pattern") && !ctx.nativeSelectFormControl.hasError("required"));
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption, i1$1.MatHint, i4.NgIf, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i1$1.MatError], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectErrorStateMatcherExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-error-state-matcher-example',
                        templateUrl: 'select-error-state-matcher-example.html',
                    }]
            }], null, null);
    })();

    function SelectFormExample_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var food_r2 = ctx.$implicit;
            i0.ɵɵproperty("value", food_r2.value);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
        }
    }
    function SelectFormExample_option_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "option", 5);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var car_r3 = ctx.$implicit;
            i0.ɵɵproperty("value", car_r3.value);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", car_r3.viewValue, " ");
        }
    }
    /**
     * @title Select in a form
     */
    var SelectFormExample = /** @class */ (function () {
        function SelectFormExample() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ];
            this.cars = [
                { value: 'volvo', viewValue: 'Volvo' },
                { value: 'saab', viewValue: 'Saab' },
                { value: 'mercedes', viewValue: 'Mercedes' }
            ];
        }
        return SelectFormExample;
    }());
    SelectFormExample.ɵfac = function SelectFormExample_Factory(t) { return new (t || SelectFormExample)(); };
    SelectFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectFormExample, selectors: [["select-form-example"]], decls: 20, vars: 6, consts: [["appearance", "fill"], ["name", "food", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "ngModel", "ngModelChange"], ["value", "", "selected", ""], [3, "value"]], template: function SelectFormExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form");
                i0.ɵɵelementStart(1, "h4");
                i0.ɵɵtext(2, "mat-select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-form-field", 0);
                i0.ɵɵelementStart(4, "mat-label");
                i0.ɵɵtext(5, "Favorite food");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-select", 1);
                i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_mat_select_ngModelChange_6_listener($event) { return ctx.selectedValue = $event; });
                i0.ɵɵtemplate(7, SelectFormExample_mat_option_7_Template, 2, 2, "mat-option", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "p");
                i0.ɵɵtext(9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "h4");
                i0.ɵɵtext(11, "native html select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-form-field", 0);
                i0.ɵɵelementStart(13, "mat-label");
                i0.ɵɵtext(14, "Favorite car");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "select", 3);
                i0.ɵɵlistener("ngModelChange", function SelectFormExample_Template_select_ngModelChange_15_listener($event) { return ctx.selectedCar = $event; });
                i0.ɵɵelement(16, "option", 4);
                i0.ɵɵtemplate(17, SelectFormExample_option_17_Template, 2, 2, "option", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "p");
                i0.ɵɵtext(19);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngModel", ctx.selectedValue);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.foods);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" Selected food: ", ctx.selectedValue, " ");
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngModel", ctx.selectedCar);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.cars);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1(" Selected car: ", ctx.selectedCar, " ");
            }
        }, directives: [i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.NgForm, i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.NgModel, i4.NgForOf, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i4$1.MatOption], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectFormExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-form-example',
                        templateUrl: 'select-form-example.html',
                    }]
            }], null, null);
    })();

    function SelectHintErrorExample_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 9);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var animal_r3 = ctx.$implicit;
            i0.ɵɵproperty("value", animal_r3);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", animal_r3.name, " ");
        }
    }
    function SelectHintErrorExample_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, "Please choose an animal");
            i0.ɵɵelementEnd();
        }
    }
    function SelectHintErrorExample_mat_error_25_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-error");
            i0.ɵɵtext(1, " This field is required ");
            i0.ɵɵelementEnd();
        }
    }
    /** @title Select with form field features */
    var SelectHintErrorExample = /** @class */ (function () {
        function SelectHintErrorExample() {
            this.animalControl = new i3.FormControl('', i3.Validators.required);
            this.selectFormControl = new i3.FormControl('', i3.Validators.required);
            this.animals = [
                { name: 'Dog', sound: 'Woof!' },
                { name: 'Cat', sound: 'Meow!' },
                { name: 'Cow', sound: 'Moo!' },
                { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
            ];
        }
        return SelectHintErrorExample;
    }());
    SelectHintErrorExample.ɵfac = function SelectHintErrorExample_Factory(t) { return new (t || SelectHintErrorExample)(); };
    SelectHintErrorExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectHintErrorExample, selectors: [["select-hint-error-example"]], decls: 28, vars: 6, consts: [["appearance", "fill"], ["required", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matNativeControl", "", "required", "", 3, "formControl"], ["label", "--select something --"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectHintErrorExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h4");
                i0.ɵɵtext(1, "mat select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-form-field", 0);
                i0.ɵɵelementStart(3, "mat-label");
                i0.ɵɵtext(4, "Favorite animal");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-select", 1);
                i0.ɵɵelementStart(6, "mat-option");
                i0.ɵɵtext(7, "--");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, SelectHintErrorExample_mat_option_8_Template, 2, 2, "mat-option", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, SelectHintErrorExample_mat_error_9_Template, 2, 0, "mat-error", 3);
                i0.ɵɵelementStart(10, "mat-hint");
                i0.ɵɵtext(11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "h4");
                i0.ɵɵtext(13, "native html select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-form-field", 0);
                i0.ɵɵelementStart(15, "mat-label");
                i0.ɵɵtext(16, "Select your car (required)");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "select", 4);
                i0.ɵɵelement(18, "option", 5);
                i0.ɵɵelementStart(19, "option", 6);
                i0.ɵɵtext(20, "Saab");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "option", 7);
                i0.ɵɵtext(22, "Mercedes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "option", 8);
                i0.ɵɵtext(24, "Audi");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(25, SelectHintErrorExample_mat_error_25_Template, 2, 0, "mat-error", 3);
                i0.ɵɵelementStart(26, "mat-hint");
                i0.ɵɵtext(27, "You can pick up your favorite car here");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("formControl", ctx.animalControl);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.animals);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.animalControl.hasError("required"));
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate(ctx.animalControl.value == null ? null : ctx.animalControl.value.sound);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("formControl", ctx.selectFormControl);
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("ngIf", ctx.selectFormControl.hasError("required"));
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i3.RequiredValidator, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption, i4.NgForOf, i4.NgIf, i1$1.MatHint, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i1$1.MatError], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectHintErrorExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-hint-error-example',
                        templateUrl: 'select-hint-error-example.html',
                    }]
            }], null, null);
    })();

    function SelectMultipleExample_mat_option_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 3);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var topping_r1 = ctx.$implicit;
            i0.ɵɵproperty("value", topping_r1);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(topping_r1);
        }
    }
    /** @title Select with multiple selection */
    var SelectMultipleExample = /** @class */ (function () {
        function SelectMultipleExample() {
            this.toppings = new i3.FormControl();
            this.toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
        }
        return SelectMultipleExample;
    }());
    SelectMultipleExample.ɵfac = function SelectMultipleExample_Factory(t) { return new (t || SelectMultipleExample)(); };
    SelectMultipleExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectMultipleExample, selectors: [["select-multiple-example"]], decls: 5, vars: 2, consts: [["appearance", "fill"], ["multiple", "", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectMultipleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Toppings");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-select", 1);
                i0.ɵɵtemplate(4, SelectMultipleExample_mat_option_4_Template, 2, 2, "mat-option", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("formControl", ctx.toppings);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngForOf", ctx.toppingList);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.NgForOf, i4$1.MatOption], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectMultipleExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-multiple-example',
                        templateUrl: 'select-multiple-example.html',
                    }]
            }], null, null);
    })();

    /** @title Select with no option ripple */
    var SelectNoRippleExample = /** @class */ (function () {
        function SelectNoRippleExample() {
        }
        return SelectNoRippleExample;
    }());
    SelectNoRippleExample.ɵfac = function SelectNoRippleExample_Factory(t) { return new (t || SelectNoRippleExample)(); };
    SelectNoRippleExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectNoRippleExample, selectors: [["select-no-ripple-example"]], decls: 10, vars: 0, consts: [["appearance", "fill"], ["disableRipple", ""], ["value", "1"], ["value", "2"], ["value", "3"]], template: function SelectNoRippleExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Select an option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-select", 1);
                i0.ɵɵelementStart(4, "mat-option", 2);
                i0.ɵɵtext(5, "Option 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-option", 3);
                i0.ɵɵtext(7, "Option 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-option", 4);
                i0.ɵɵtext(9, "Option 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i4$1.MatOption], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectNoRippleExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-no-ripple-example',
                        templateUrl: 'select-no-ripple-example.html',
                    }]
            }], null, null);
    })();

    function SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 12);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var pokemon_r3 = ctx.$implicit;
            i0.ɵɵproperty("value", pokemon_r3.value);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", pokemon_r3.viewValue, " ");
        }
    }
    function SelectOptgroupExample_mat_optgroup_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-optgroup", 10);
            i0.ɵɵtemplate(1, SelectOptgroupExample_mat_optgroup_8_mat_option_1_Template, 2, 2, "mat-option", 11);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var group_r1 = ctx.$implicit;
            i0.ɵɵproperty("label", group_r1.name)("disabled", group_r1.disabled);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", group_r1.pokemon);
        }
    }
    /** @title Select with option groups */
    var SelectOptgroupExample = /** @class */ (function () {
        function SelectOptgroupExample() {
            this.pokemonControl = new i3.FormControl();
            this.pokemonGroups = [
                {
                    name: 'Grass',
                    pokemon: [
                        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
                        { value: 'oddish-1', viewValue: 'Oddish' },
                        { value: 'bellsprout-2', viewValue: 'Bellsprout' }
                    ]
                },
                {
                    name: 'Water',
                    pokemon: [
                        { value: 'squirtle-3', viewValue: 'Squirtle' },
                        { value: 'psyduck-4', viewValue: 'Psyduck' },
                        { value: 'horsea-5', viewValue: 'Horsea' }
                    ]
                },
                {
                    name: 'Fire',
                    disabled: true,
                    pokemon: [
                        { value: 'charmander-6', viewValue: 'Charmander' },
                        { value: 'vulpix-7', viewValue: 'Vulpix' },
                        { value: 'flareon-8', viewValue: 'Flareon' }
                    ]
                },
                {
                    name: 'Psychic',
                    pokemon: [
                        { value: 'mew-9', viewValue: 'Mew' },
                        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
                    ]
                }
            ];
        }
        return SelectOptgroupExample;
    }());
    SelectOptgroupExample.ɵfac = function SelectOptgroupExample_Factory(t) { return new (t || SelectOptgroupExample)(); };
    SelectOptgroupExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectOptgroupExample, selectors: [["select-optgroup-example"]], decls: 25, vars: 2, consts: [["appearance", "fill"], [3, "formControl"], [3, "label", "disabled", 4, "ngFor", "ngForOf"], ["matNativeControl", ""], ["label", "Swedish Cars"], ["value", "volvo"], ["value", "saab"], ["label", "German Cars"], ["value", "mercedes"], ["value", "audi"], [3, "label", "disabled"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function SelectOptgroupExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h4");
                i0.ɵɵtext(1, "mat-select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-form-field", 0);
                i0.ɵɵelementStart(3, "mat-label");
                i0.ɵɵtext(4, "Pokemon");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-select", 1);
                i0.ɵɵelementStart(6, "mat-option");
                i0.ɵɵtext(7, "-- None --");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, SelectOptgroupExample_mat_optgroup_8_Template, 2, 3, "mat-optgroup", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "h4");
                i0.ɵɵtext(10, "native html select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-form-field", 0);
                i0.ɵɵelementStart(12, "mat-label");
                i0.ɵɵtext(13, "Cars");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "select", 3);
                i0.ɵɵelementStart(15, "optgroup", 4);
                i0.ɵɵelementStart(16, "option", 5);
                i0.ɵɵtext(17, "volvo");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "option", 6);
                i0.ɵɵtext(19, "Saab");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "optgroup", 7);
                i0.ɵɵelementStart(21, "option", 8);
                i0.ɵɵtext(22, "Mercedes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "option", 9);
                i0.ɵɵtext(24, "Audi");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("formControl", ctx.pokemonControl);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.pokemonGroups);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption, i4.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i4$1.MatOptgroup], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectOptgroupExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-optgroup-example',
                        templateUrl: 'select-optgroup-example.html',
                    }]
            }], null, null);
    })();

    function SelectOverviewExample_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 7);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var food_r1 = ctx.$implicit;
            i0.ɵɵproperty("value", food_r1.value);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", food_r1.viewValue, " ");
        }
    }
    /**
     * @title Basic select
     */
    var SelectOverviewExample = /** @class */ (function () {
        function SelectOverviewExample() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ];
        }
        return SelectOverviewExample;
    }());
    SelectOverviewExample.ɵfac = function SelectOverviewExample_Factory(t) { return new (t || SelectOverviewExample)(); };
    SelectOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectOverviewExample, selectors: [["select-overview-example"]], decls: 21, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "required", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h4");
                i0.ɵɵtext(1, "Basic mat-select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-form-field", 0);
                i0.ɵɵelementStart(3, "mat-label");
                i0.ɵɵtext(4, "Favorite food");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-select");
                i0.ɵɵtemplate(6, SelectOverviewExample_mat_option_6_Template, 2, 2, "mat-option", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "h4");
                i0.ɵɵtext(8, "Basic native select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "mat-form-field", 0);
                i0.ɵɵelementStart(10, "mat-label");
                i0.ɵɵtext(11, "Cars");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "select", 2);
                i0.ɵɵelementStart(13, "option", 3);
                i0.ɵɵtext(14, "Volvo");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "option", 4);
                i0.ɵɵtext(16, "Saab");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "option", 5);
                i0.ɵɵtext(18, "Mercedes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "option", 6);
                i0.ɵɵtext(20, "Audi");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngForOf", ctx.foods);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i4.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i4$1.MatOption], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-overview-example',
                        templateUrl: 'select-overview-example.html',
                    }]
            }], null, null);
    })();

    /**
     * @title Select with custom panel styling
     */
    var SelectPanelClassExample = /** @class */ (function () {
        function SelectPanelClassExample() {
            this.panelColor = new i3.FormControl('red');
        }
        return SelectPanelClassExample;
    }());
    SelectPanelClassExample.ɵfac = function SelectPanelClassExample_Factory(t) { return new (t || SelectPanelClassExample)(); };
    SelectPanelClassExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectPanelClassExample, selectors: [["select-panel-class-example"]], decls: 10, vars: 2, consts: [["appearance", "fill"], [3, "formControl", "panelClass"], ["value", "red"], ["value", "green"], ["value", "blue"]], template: function SelectPanelClassExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Panel color");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-select", 1);
                i0.ɵɵelementStart(4, "mat-option", 2);
                i0.ɵɵtext(5, "Red");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-option", 3);
                i0.ɵɵtext(7, "Green");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-option", 4);
                i0.ɵɵtext(9, "Blue");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵpropertyInterpolate1("panelClass", "example-panel-", ctx.panelColor.value, "");
                i0.ɵɵproperty("formControl", ctx.panelColor);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption], styles: [".example-panel-red.mat-select-panel {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-panel-green.mat-select-panel {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-panel-blue.mat-select-panel {\n  background: rgba(0, 0, 255, 0.5);\n}\n"], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectPanelClassExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-panel-class-example',
                        templateUrl: 'select-panel-class-example.html',
                        styleUrls: ['select-panel-class-example.css'],
                        // Encapsulation has to be disabled in order for the
                        // component style to apply to the select panel.
                        encapsulation: i0.ViewEncapsulation.None,
                    }]
            }], null, null);
    })();

    function SelectResetExample_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 8);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var state_r1 = ctx.$implicit;
            i0.ɵɵproperty("value", state_r1);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(state_r1);
        }
    }
    /** @title Select with reset option */
    var SelectResetExample = /** @class */ (function () {
        function SelectResetExample() {
            this.states = [
                'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
                'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
                'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
                'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
                'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
            ];
        }
        return SelectResetExample;
    }());
    SelectResetExample.ɵfac = function SelectResetExample_Factory(t) { return new (t || SelectResetExample)(); };
    SelectResetExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectResetExample, selectors: [["select-reset-example"]], decls: 24, vars: 1, consts: [["appearance", "fill"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "id", "mySelectId"], ["value", "", "disabled", "", "selected", ""], ["value", "volvo"], ["value", "saab"], ["value", "mercedes"], ["value", "audi"], [3, "value"]], template: function SelectResetExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h4");
                i0.ɵɵtext(1, "mat-select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-form-field", 0);
                i0.ɵɵelementStart(3, "mat-label");
                i0.ɵɵtext(4, "State");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-select");
                i0.ɵɵelementStart(6, "mat-option");
                i0.ɵɵtext(7, "None");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(8, SelectResetExample_mat_option_8_Template, 2, 2, "mat-option", 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "h4");
                i0.ɵɵtext(10, "native html select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "mat-form-field", 0);
                i0.ɵɵelementStart(12, "mat-label");
                i0.ɵɵtext(13, "Select your car");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "select", 2);
                i0.ɵɵelement(15, "option", 3);
                i0.ɵɵelementStart(16, "option", 4);
                i0.ɵɵtext(17, "Volvo");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "option", 5);
                i0.ɵɵtext(19, "Saab");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(20, "option", 6);
                i0.ɵɵtext(21, "Mercedes");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(22, "option", 7);
                i0.ɵɵtext(23, "Audi");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("ngForOf", ctx.states);
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i4$1.MatOption, i4.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectResetExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-reset-example',
                        templateUrl: 'select-reset-example.html',
                    }]
            }], null, null);
    })();

    /** @title Select with 2-way value binding */
    var SelectValueBindingExample = /** @class */ (function () {
        function SelectValueBindingExample() {
            this.selected = 'option2';
        }
        return SelectValueBindingExample;
    }());
    SelectValueBindingExample.ɵfac = function SelectValueBindingExample_Factory(t) { return new (t || SelectValueBindingExample)(); };
    SelectValueBindingExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectValueBindingExample, selectors: [["select-value-binding-example"]], decls: 14, vars: 2, consts: [["appearance", "fill"], [3, "value", "valueChange"], ["value", "option1"], ["value", "option2"], ["value", "option3"]], template: function SelectValueBindingExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mat-form-field", 0);
                i0.ɵɵelementStart(1, "mat-label");
                i0.ɵɵtext(2, "Select an option");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-select", 1);
                i0.ɵɵlistener("valueChange", function SelectValueBindingExample_Template_mat_select_valueChange_3_listener($event) { return ctx.selected = $event; });
                i0.ɵɵelementStart(4, "mat-option");
                i0.ɵɵtext(5, "None");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-option", 2);
                i0.ɵɵtext(7, "Option 1");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "mat-option", 3);
                i0.ɵɵtext(9, "Option 2");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "mat-option", 4);
                i0.ɵɵtext(11, "Option 3");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "p");
                i0.ɵɵtext(13);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("value", ctx.selected);
                i0.ɵɵadvance(10);
                i0.ɵɵtextInterpolate1("You selected: ", ctx.selected, "");
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i4$1.MatOption], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectValueBindingExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-value-binding-example',
                        templateUrl: 'select-value-binding-example.html',
                    }]
            }], null, null);
    })();

    function SelectReactiveFormExample_mat_option_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 6);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var food_r2 = ctx.$implicit;
            i0.ɵɵproperty("value", food_r2.value);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", food_r2.viewValue, " ");
        }
    }
    function SelectReactiveFormExample_option_20_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "option", 6);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var car_r3 = ctx.$implicit;
            i0.ɵɵproperty("value", car_r3.value);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", car_r3.viewValue, " ");
        }
    }
    /**
     * @title Select in a reactive form
     */
    var SelectReactiveFormExample = /** @class */ (function () {
        function SelectReactiveFormExample() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ];
            this.cars = [
                { value: 'volvo', viewValue: 'Volvo' },
                { value: 'saab', viewValue: 'Saab' },
                { value: 'mercedes', viewValue: 'Mercedes' }
            ];
            this.foodControl = new i3.FormControl(this.foods[2].value);
            this.carControl = new i3.FormControl(this.cars[1].value);
            this.form = new i3.FormGroup({
                food: this.foodControl,
                car: this.carControl
            });
        }
        return SelectReactiveFormExample;
    }());
    SelectReactiveFormExample.ɵfac = function SelectReactiveFormExample_Factory(t) { return new (t || SelectReactiveFormExample)(); };
    SelectReactiveFormExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectReactiveFormExample, selectors: [["select-reactive-form-example"]], decls: 23, vars: 7, consts: [[3, "formGroup"], ["appearance", "fill"], ["name", "food", 3, "formControl"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", "name", "car", 3, "formControl"], ["value", ""], [3, "value"]], template: function SelectReactiveFormExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "form", 0);
                i0.ɵɵelementStart(1, "h4");
                i0.ɵɵtext(2, "mat-select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "mat-form-field", 1);
                i0.ɵɵelementStart(4, "mat-label");
                i0.ɵɵtext(5, "Favorite Food");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "mat-select", 2);
                i0.ɵɵelementStart(7, "mat-option");
                i0.ɵɵtext(8, "None");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, SelectReactiveFormExample_mat_option_9_Template, 2, 2, "mat-option", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "p");
                i0.ɵɵtext(11);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "h4");
                i0.ɵɵtext(13, "Native select");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(14, "mat-form-field", 1);
                i0.ɵɵelementStart(15, "mat-label");
                i0.ɵɵtext(16, "Favorite Car");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "select", 4);
                i0.ɵɵelementStart(18, "option", 5);
                i0.ɵɵtext(19, "None");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(20, SelectReactiveFormExample_option_20_Template, 2, 2, "option", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "p");
                i0.ɵɵtext(22);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("formGroup", ctx.form);
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("formControl", ctx.foodControl);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.foods);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Selected: ", ctx.foodControl.value, "");
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("formControl", ctx.carControl);
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngForOf", ctx.cars);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("Selected: ", ctx.carControl.value, "");
            }
        }, directives: [i3.ɵangular_packages_forms_forms_y, i3.NgControlStatusGroup, i3.FormGroupDirective, i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4$1.MatOption, i4.NgForOf, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectReactiveFormExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-reactive-form-example',
                        templateUrl: 'select-reactive-form-example.html',
                    }]
            }], function () { return []; }, null);
    })();

    function SelectInitialValueExample_mat_option_7_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "mat-option", 6);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r2 = ctx.$implicit;
            i0.ɵɵproperty("value", option_r2.value);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(option_r2.viewValue);
        }
    }
    function SelectInitialValueExample_option_17_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "option", 7);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var option_r3 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("value", option_r3.value)("selected", ctx_r1.selectedCar === option_r3.value);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(option_r3.viewValue);
        }
    }
    /**
     * @title Basic select with initial value and no form
     */
    var SelectInitialValueExample = /** @class */ (function () {
        function SelectInitialValueExample() {
            this.foods = [
                { value: 'steak-0', viewValue: 'Steak' },
                { value: 'pizza-1', viewValue: 'Pizza' },
                { value: 'tacos-2', viewValue: 'Tacos' }
            ];
            this.cars = [
                { value: 'ford', viewValue: 'Ford' },
                { value: 'chevrolet', viewValue: 'Chevrolet' },
                { value: 'dodge', viewValue: 'Dodge' }
            ];
            this.selectedFood = this.foods[2].value;
            this.selectedCar = this.cars[0].value;
        }
        SelectInitialValueExample.prototype.selectCar = function (event) {
            this.selectedCar = event.target.value;
        };
        return SelectInitialValueExample;
    }());
    SelectInitialValueExample.ɵfac = function SelectInitialValueExample_Factory(t) { return new (t || SelectInitialValueExample)(); };
    SelectInitialValueExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectInitialValueExample, selectors: [["select-initial-value-example"]], decls: 20, vars: 5, consts: [["appearance", "fill"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], ["matNativeControl", "", 3, "change"], ["value", ""], [3, "value", "selected", 4, "ngFor", "ngForOf"], [3, "value"], [3, "value", "selected"]], template: function SelectInitialValueExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h4");
                i0.ɵɵtext(1, "Basic mat-select with initial value");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-form-field", 0);
                i0.ɵɵelementStart(3, "mat-label");
                i0.ɵɵtext(4, "Favorite Food");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-select", 1);
                i0.ɵɵlistener("valueChange", function SelectInitialValueExample_Template_mat_select_valueChange_5_listener($event) { return ctx.selectedFood = $event; });
                i0.ɵɵelement(6, "mat-option");
                i0.ɵɵtemplate(7, SelectInitialValueExample_mat_option_7_Template, 2, 2, "mat-option", 2);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "p");
                i0.ɵɵtext(9);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(10, "h4");
                i0.ɵɵtext(11, "Basic native select with initial value");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "mat-form-field", 0);
                i0.ɵɵelementStart(13, "mat-label");
                i0.ɵɵtext(14, "Favorite Car");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "select", 3);
                i0.ɵɵlistener("change", function SelectInitialValueExample_Template_select_change_15_listener($event) { return ctx.selectCar($event); });
                i0.ɵɵelement(16, "option", 4);
                i0.ɵɵtemplate(17, SelectInitialValueExample_option_17_Template, 2, 3, "option", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(18, "p");
                i0.ɵɵtext(19);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("value", ctx.selectedFood);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.foods);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("You selected: ", ctx.selectedFood, "");
                i0.ɵɵadvance(8);
                i0.ɵɵproperty("ngForOf", ctx.cars);
                i0.ɵɵadvance(2);
                i0.ɵɵtextInterpolate1("You selected: ", ctx.selectedCar, "");
            }
        }, directives: [i1$1.MatFormField, i1$1.MatLabel, i2.MatSelect, i4$1.MatOption, i4.NgForOf, i6.MatInput, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectInitialValueExample, [{
                type: i0.Component,
                args: [{
                        selector: 'select-initial-value-example',
                        templateUrl: 'select-initial-value-example.html',
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        SelectCustomTriggerExample,
        SelectDisabledExample,
        SelectErrorStateMatcherExample,
        SelectFormExample,
        SelectHintErrorExample,
        SelectInitialValueExample,
        SelectMultipleExample,
        SelectNoRippleExample,
        SelectOptgroupExample,
        SelectOverviewExample,
        SelectPanelClassExample,
        SelectReactiveFormExample,
        SelectResetExample,
        SelectValueBindingExample,
    ];
    var SelectExamplesModule = /** @class */ (function () {
        function SelectExamplesModule() {
        }
        return SelectExamplesModule;
    }());
    SelectExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: SelectExamplesModule });
    SelectExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function SelectExamplesModule_Factory(t) { return new (t || SelectExamplesModule)(); }, imports: [[
                i4.CommonModule,
                i3.FormsModule,
                i1.MatCheckboxModule,
                i6.MatInputModule,
                i2.MatSelectModule,
                i3.ReactiveFormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SelectExamplesModule, { declarations: [SelectCustomTriggerExample,
                SelectDisabledExample,
                SelectErrorStateMatcherExample,
                SelectFormExample,
                SelectHintErrorExample,
                SelectInitialValueExample,
                SelectMultipleExample,
                SelectNoRippleExample,
                SelectOptgroupExample,
                SelectOverviewExample,
                SelectPanelClassExample,
                SelectReactiveFormExample,
                SelectResetExample,
                SelectValueBindingExample], imports: [i4.CommonModule,
                i3.FormsModule,
                i1.MatCheckboxModule,
                i6.MatInputModule,
                i2.MatSelectModule,
                i3.ReactiveFormsModule], exports: [SelectCustomTriggerExample,
                SelectDisabledExample,
                SelectErrorStateMatcherExample,
                SelectFormExample,
                SelectHintErrorExample,
                SelectInitialValueExample,
                SelectMultipleExample,
                SelectNoRippleExample,
                SelectOptgroupExample,
                SelectOverviewExample,
                SelectPanelClassExample,
                SelectReactiveFormExample,
                SelectResetExample,
                SelectValueBindingExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(SelectExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i4.CommonModule,
                            i3.FormsModule,
                            i1.MatCheckboxModule,
                            i6.MatInputModule,
                            i2.MatSelectModule,
                            i3.ReactiveFormsModule,
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

    exports.SelectCustomTriggerExample = SelectCustomTriggerExample;
    exports.SelectDisabledExample = SelectDisabledExample;
    exports.SelectErrorStateMatcherExample = SelectErrorStateMatcherExample;
    exports.SelectExamplesModule = SelectExamplesModule;
    exports.SelectFormExample = SelectFormExample;
    exports.SelectHintErrorExample = SelectHintErrorExample;
    exports.SelectInitialValueExample = SelectInitialValueExample;
    exports.SelectMultipleExample = SelectMultipleExample;
    exports.SelectNoRippleExample = SelectNoRippleExample;
    exports.SelectOptgroupExample = SelectOptgroupExample;
    exports.SelectOverviewExample = SelectOverviewExample;
    exports.SelectPanelClassExample = SelectPanelClassExample;
    exports.SelectReactiveFormExample = SelectReactiveFormExample;
    exports.SelectResetExample = SelectResetExample;
    exports.SelectValueBindingExample = SelectValueBindingExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-select.umd.js.map
