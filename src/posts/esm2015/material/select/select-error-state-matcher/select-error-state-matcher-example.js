import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/forms";
import * as i4 from "@angular/material/core";
import * as i5 from "@angular/common";
import * as i6 from "@angular/material/input";
function SelectErrorStateMatcherExample_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "You must make a selection");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Your selection is invalid ");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, "You must make a selection");
    i0.ɵɵelementEnd();
} }
function SelectErrorStateMatcherExample_mat_error_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-error");
    i0.ɵɵtext(1, " Your selection is invalid ");
    i0.ɵɵelementEnd();
} }
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher {
    isErrorState(control, form) {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
/** @title Select with a custom ErrorStateMatcher */
export class SelectErrorStateMatcherExample {
    constructor() {
        this.selected = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.selectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.nativeSelectFormControl = new FormControl('valid', [
            Validators.required,
            Validators.pattern('valid'),
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
}
SelectErrorStateMatcherExample.ɵfac = function SelectErrorStateMatcherExample_Factory(t) { return new (t || SelectErrorStateMatcherExample)(); };
SelectErrorStateMatcherExample.ɵcmp = i0.ɵɵdefineComponent({ type: SelectErrorStateMatcherExample, selectors: [["select-error-state-matcher-example"]], decls: 29, vars: 8, consts: [["appearance", "fill"], [3, "formControl", "errorStateMatcher"], ["value", "valid"], ["value", "invalid"], [4, "ngIf"], ["appearance", "fill", 1, "demo-full-width"], ["matNativeControl", "", 3, "formControl", "errorStateMatcher"], ["value", ""], ["value", "valid", "selected", ""]], template: function SelectErrorStateMatcherExample_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.NgControlStatus, i3.FormControlDirective, i4.MatOption, i1.MatHint, i5.NgIf, i6.MatInput, i3.SelectControlValueAccessor, i3.NgSelectOption, i3.ɵangular_packages_forms_forms_x, i1.MatError], encapsulation: 2 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SelectErrorStateMatcherExample, [{
        type: Component,
        args: [{
                selector: 'select-error-state-matcher-example',
                templateUrl: 'select-error-state-matcher-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0LWVycm9yLXN0YXRlLW1hdGNoZXItZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NlbGVjdC9zZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci9zZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc2VsZWN0L3NlbGVjdC1lcnJvci1zdGF0ZS1tYXRjaGVyL3NlbGVjdC1lcnJvci1zdGF0ZS1tYXRjaGVyLWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hDLE9BQU8sRUFBQyxXQUFXLEVBQThCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7SUNRakYsaUNBQWlEO0lBQUEseUNBQXlCO0lBQUEsaUJBQVk7OztJQUN0RixpQ0FDRTtJQUFBLDJDQUNGO0lBQUEsaUJBQVk7OztJQVdaLGlDQUFnRTtJQUFBLHlDQUF5QjtJQUFBLGlCQUFZOzs7SUFDckcsaUNBQ0U7SUFBQSwyQ0FDRjtJQUFBLGlCQUFZOztBRHRCZCxrRUFBa0U7QUFDbEUsTUFBTSxPQUFPLG1CQUFtQjtJQUM5QixZQUFZLENBQUMsT0FBMkIsRUFBRSxJQUF3QztRQUNoRixNQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMzQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztDQUNGO0FBRUQsb0RBQW9EO0FBS3BELE1BQU0sT0FBTyw4QkFBOEI7SUFKM0M7UUFLRSxhQUFRLEdBQUcsSUFBSSxXQUFXLENBQUMsT0FBTyxFQUFFO1lBQ2xDLFVBQVUsQ0FBQyxRQUFRO1lBQ25CLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQzVCLENBQUMsQ0FBQztRQUVILHNCQUFpQixHQUFHLElBQUksV0FBVyxDQUFDLE9BQU8sRUFBRTtZQUMzQyxVQUFVLENBQUMsUUFBUTtZQUNuQixVQUFVLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUM1QixDQUFDLENBQUM7UUFFSCw0QkFBdUIsR0FBRyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUU7WUFDakQsVUFBVSxDQUFDLFFBQVE7WUFDbkIsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDNUIsQ0FBQyxDQUFDO1FBRUgsWUFBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztLQUNyQzs7NEdBakJZLDhCQUE4QjttRUFBOUIsOEJBQThCO1FDakIzQywwQkFBSTtRQUFBLDBCQUFVO1FBQUEsaUJBQUs7UUFDbkIseUNBQ0U7UUFBQSxpQ0FBVztRQUFBLDBCQUFVO1FBQUEsaUJBQVk7UUFDakMscUNBQ0U7UUFBQSxrQ0FBWTtRQUFBLHFCQUFLO1FBQUEsaUJBQWE7UUFDOUIscUNBQTBCO1FBQUEsNEJBQVk7UUFBQSxpQkFBYTtRQUNuRCxzQ0FBNEI7UUFBQSwrQkFBYztRQUFBLGlCQUFhO1FBQ3pELGlCQUFhO1FBQ2IsaUNBQVU7UUFBQSx5Q0FBd0I7UUFBQSxpQkFBVztRQUM3Qyw2RkFBaUQ7UUFDakQsNkZBQ0U7UUFFSixpQkFBaUI7UUFFakIsMkJBQUk7UUFBQSxtQ0FBa0I7UUFBQSxpQkFBSztRQUMzQiwwQ0FDRTtRQUFBLGtDQUFXO1FBQUEsMkJBQVU7UUFBQSxpQkFBWTtRQUNqQyxrQ0FDRTtRQUFBLDZCQUEwQjtRQUMxQixrQ0FBK0I7UUFBQSw2QkFBWTtRQUFBLGlCQUFTO1FBQ3BELGtDQUF3QjtRQUFBLCtCQUFjO1FBQUEsaUJBQVM7UUFDakQsaUJBQVM7UUFDVCw2RkFBZ0U7UUFDaEUsNkZBQ0U7UUFFSixpQkFBaUI7O1FBeEJILGVBQXdCO1FBQXhCLDBDQUF3QixrQ0FBQTtRQU16QixlQUFxQztRQUFyQyx3REFBcUM7UUFDckMsZUFBc0U7UUFBdEUsNkZBQXNFO1FBUXhELGVBQXVDO1FBQXZDLHlEQUF1QyxrQ0FBQTtRQUtyRCxlQUFvRDtRQUFwRCx1RUFBb0Q7UUFDcEQsZUFBb0c7UUFBcEcsMkhBQW9HOztrRERQcEcsOEJBQThCO2NBSjFDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsb0NBQW9DO2dCQUM5QyxXQUFXLEVBQUUseUNBQXlDO2FBQ3ZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtGb3JtQ29udHJvbCwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0sIFZhbGlkYXRvcnN9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuXG4vKiogRXJyb3Igd2hlbiBpbnZhbGlkIGNvbnRyb2wgaXMgZGlydHksIHRvdWNoZWQsIG9yIHN1Ym1pdHRlZC4gKi9cbmV4cG9ydCBjbGFzcyBNeUVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xuICBpc0Vycm9yU3RhdGUoY29udHJvbDogRm9ybUNvbnRyb2wgfCBudWxsLCBmb3JtOiBGb3JtR3JvdXBEaXJlY3RpdmUgfCBOZ0Zvcm0gfCBudWxsKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNTdWJtaXR0ZWQgPSBmb3JtICYmIGZvcm0uc3VibWl0dGVkO1xuICAgIHJldHVybiAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQgfHwgaXNTdWJtaXR0ZWQpKTtcbiAgfVxufVxuXG4vKiogQHRpdGxlIFNlbGVjdCB3aXRoIGEgY3VzdG9tIEVycm9yU3RhdGVNYXRjaGVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICdzZWxlY3QtZXJyb3Itc3RhdGUtbWF0Y2hlci1leGFtcGxlLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RFcnJvclN0YXRlTWF0Y2hlckV4YW1wbGUge1xuICBzZWxlY3RlZCA9IG5ldyBGb3JtQ29udHJvbCgndmFsaWQnLCBbXG4gICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcbiAgICBWYWxpZGF0b3JzLnBhdHRlcm4oJ3ZhbGlkJyksXG4gIF0pO1xuXG4gIHNlbGVjdEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCd2YWxpZCcsIFtcbiAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxuICAgIFZhbGlkYXRvcnMucGF0dGVybigndmFsaWQnKSxcbiAgXSk7XG5cbiAgbmF0aXZlU2VsZWN0Rm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJ3ZhbGlkJywgW1xuICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXG4gICAgVmFsaWRhdG9ycy5wYXR0ZXJuKCd2YWxpZCcpLFxuICBdKTtcblxuICBtYXRjaGVyID0gbmV3IE15RXJyb3JTdGF0ZU1hdGNoZXIoKTtcbn1cbiIsIjxoND5tYXQtc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBhcHBlYXJhbmNlPVwiZmlsbFwiPlxuICA8bWF0LWxhYmVsPkNob29zZSBvbmU8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgW2Zvcm1Db250cm9sXT1cInNlbGVjdGVkXCIgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj5cbiAgICA8bWF0LW9wdGlvbj5DbGVhcjwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cInZhbGlkXCI+VmFsaWQgb3B0aW9uPC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiaW52YWxpZFwiPkludmFsaWQgb3B0aW9uPC9tYXQtb3B0aW9uPlxuICA8L21hdC1zZWxlY3Q+XG4gIDxtYXQtaGludD5FcnJvcnMgYXBwZWFyIGluc3RhbnRseSE8L21hdC1oaW50PlxuICA8bWF0LWVycm9yICpuZ0lmPVwic2VsZWN0ZWQuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5Zb3UgbXVzdCBtYWtlIGEgc2VsZWN0aW9uPC9tYXQtZXJyb3I+XG4gIDxtYXQtZXJyb3IgKm5nSWY9XCJzZWxlY3RlZC5oYXNFcnJvcigncGF0dGVybicpICYmICFzZWxlY3RlZC5oYXNFcnJvcigncmVxdWlyZWQnKVwiPlxuICAgIFlvdXIgc2VsZWN0aW9uIGlzIGludmFsaWRcbiAgPC9tYXQtZXJyb3I+XG48L21hdC1mb3JtLWZpZWxkPlxuXG48aDQ+bmF0aXZlIGh0bWwgc2VsZWN0PC9oND5cbjxtYXQtZm9ybS1maWVsZCBjbGFzcz1cImRlbW8tZnVsbC13aWR0aFwiIGFwcGVhcmFuY2U9XCJmaWxsXCI+XG4gIDxtYXQtbGFiZWw+Q2hvb3NlIG9uZTwvbWF0LWxhYmVsPlxuICA8c2VsZWN0IG1hdE5hdGl2ZUNvbnRyb2wgW2Zvcm1Db250cm9sXT1cIm5hdGl2ZVNlbGVjdEZvcm1Db250cm9sXCIgW2Vycm9yU3RhdGVNYXRjaGVyXT1cIm1hdGNoZXJcIj5cbiAgICA8b3B0aW9uIHZhbHVlPVwiXCI+PC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cInZhbGlkXCIgc2VsZWN0ZWQ+VmFsaWQgb3B0aW9uPC9vcHRpb24+XG4gICAgPG9wdGlvbiB2YWx1ZT1cImludmFsaWRcIj5JbnZhbGlkIG9wdGlvbjwvb3B0aW9uPlxuICA8L3NlbGVjdD5cbiAgPG1hdC1lcnJvciAqbmdJZj1cIm5hdGl2ZVNlbGVjdEZvcm1Db250cm9sLmhhc0Vycm9yKCdyZXF1aXJlZCcpXCI+WW91IG11c3QgbWFrZSBhIHNlbGVjdGlvbjwvbWF0LWVycm9yPlxuICA8bWF0LWVycm9yICpuZ0lmPVwibmF0aXZlU2VsZWN0Rm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3BhdHRlcm4nKSAmJiAhbmF0aXZlU2VsZWN0Rm9ybUNvbnRyb2wuaGFzRXJyb3IoJ3JlcXVpcmVkJylcIj5cbiAgICBZb3VyIHNlbGVjdGlvbiBpcyBpbnZhbGlkXG4gIDwvbWF0LWVycm9yPlxuPC9tYXQtZm9ybS1maWVsZD5cbiJdfQ==