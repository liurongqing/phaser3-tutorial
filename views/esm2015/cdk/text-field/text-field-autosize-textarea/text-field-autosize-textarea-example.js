import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { Component, NgZone, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/form-field";
import * as i2 from "@angular/material/select";
import * as i3 from "@angular/material/core";
import * as i4 from "@angular/material/input";
import * as i5 from "@angular/cdk/text-field";
const _c0 = ["autosize"];
/** @title Auto-resizing textarea */
export class TextFieldAutosizeTextareaExample {
    constructor(_ngZone) {
        this._ngZone = _ngZone;
    }
    triggerResize() {
        // Wait for changes to be applied, then trigger textarea resize.
        this._ngZone.onStable.pipe(take(1))
            .subscribe(() => this.autosize.resizeToFitContent(true));
    }
}
TextFieldAutosizeTextareaExample.ɵfac = function TextFieldAutosizeTextareaExample_Factory(t) { return new (t || TextFieldAutosizeTextareaExample)(i0.ɵɵdirectiveInject(i0.NgZone)); };
TextFieldAutosizeTextareaExample.ɵcmp = i0.ɵɵdefineComponent({ type: TextFieldAutosizeTextareaExample, selectors: [["text-field-autosize-textarea-example"]], viewQuery: function TextFieldAutosizeTextareaExample_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.autosize = _t.first);
    } }, decls: 22, vars: 2, consts: [["value", "16px", 3, "selectionChange"], ["fontSize", ""], ["value", "10px"], ["value", "12px"], ["value", "14px"], ["value", "16px"], ["value", "18px"], ["value", "20px"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"]], template: function TextFieldAutosizeTextareaExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mat-form-field");
        i0.ɵɵelementStart(1, "mat-label");
        i0.ɵɵtext(2, "Font size");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "mat-select", 0, 1);
        i0.ɵɵlistener("selectionChange", function TextFieldAutosizeTextareaExample_Template_mat_select_selectionChange_3_listener() { return ctx.triggerResize(); });
        i0.ɵɵelementStart(5, "mat-option", 2);
        i0.ɵɵtext(6, "10px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "mat-option", 3);
        i0.ɵɵtext(8, "12px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(9, "mat-option", 4);
        i0.ɵɵtext(10, "14px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(11, "mat-option", 5);
        i0.ɵɵtext(12, "16px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "mat-option", 6);
        i0.ɵɵtext(14, "18px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(15, "mat-option", 7);
        i0.ɵɵtext(16, "20px");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(17, "mat-form-field");
        i0.ɵɵelementStart(18, "mat-label");
        i0.ɵɵtext(19, "Autosize textarea");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(20, "textarea", 8, 9);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(4);
        i0.ɵɵadvance(17);
        i0.ɵɵstyleProp("font-size", _r0.value);
    } }, directives: [i1.MatFormField, i1.MatLabel, i2.MatSelect, i3.MatOption, i4.MatInput, i5.CdkTextareaAutosize], styles: ["mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(TextFieldAutosizeTextareaExample, [{
        type: Component,
        args: [{
                selector: 'text-field-autosize-textarea-example',
                templateUrl: './text-field-autosize-textarea-example.html',
                styleUrls: ['./text-field-autosize-textarea-example.css'],
            }]
    }], function () { return [{ type: i0.NgZone }]; }, { autosize: [{
            type: ViewChild,
            args: ['autosize']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrL3RleHQtZmllbGQvdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhLWV4YW1wbGUudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGsvdGV4dC1maWVsZC90ZXh0LWZpZWxkLWF1dG9zaXplLXRleHRhcmVhL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxtQkFBbUIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzVELE9BQU8sRUFBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUMzRCxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7O0FBRXBDLG9DQUFvQztBQU1wQyxNQUFNLE9BQU8sZ0NBQWdDO0lBQzNDLFlBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO0lBQUcsQ0FBQztJQUl2QyxhQUFhO1FBQ1gsZ0VBQWdFO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOztnSEFUVSxnQ0FBZ0M7cUVBQWhDLGdDQUFnQzs7Ozs7O1FDVjdDLHNDQUNFO1FBQUEsaUNBQVc7UUFBQSx5QkFBUztRQUFBLGlCQUFZO1FBQ2hDLHdDQUNFO1FBRGlDLHFJQUFtQixtQkFBZSxJQUFDO1FBQ3BFLHFDQUF5QjtRQUFBLG9CQUFJO1FBQUEsaUJBQWE7UUFDMUMscUNBQXlCO1FBQUEsb0JBQUk7UUFBQSxpQkFBYTtRQUMxQyxxQ0FBeUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzFDLHNDQUF5QjtRQUFBLHFCQUFJO1FBQUEsaUJBQWE7UUFDMUMsc0NBQXlCO1FBQUEscUJBQUk7UUFBQSxpQkFBYTtRQUMxQyxzQ0FBeUI7UUFBQSxxQkFBSTtRQUFBLGlCQUFhO1FBQzVDLGlCQUFhO1FBQ2YsaUJBQWlCO1FBRWpCLHVDQUNFO1FBQUEsa0NBQVc7UUFBQSxrQ0FBaUI7UUFBQSxpQkFBWTtRQUN4QyxrQ0FJNEM7UUFDOUMsaUJBQWlCOzs7UUFQRCxnQkFBaUM7UUFBakMsc0NBQWlDOztrRERGcEMsZ0NBQWdDO2NBTDVDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0NBQXNDO2dCQUNoRCxXQUFXLEVBQUUsNkNBQTZDO2dCQUMxRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQzthQUMxRDt5REFJd0IsUUFBUTtrQkFBOUIsU0FBUzttQkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDZGtUZXh0YXJlYUF1dG9zaXplfSBmcm9tICdAYW5ndWxhci9jZGsvdGV4dC1maWVsZCc7XG5pbXBvcnQge0NvbXBvbmVudCwgTmdab25lLCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHt0YWtlfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKiBAdGl0bGUgQXV0by1yZXNpemluZyB0ZXh0YXJlYSAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RleHQtZmllbGQtYXV0b3NpemUtdGV4dGFyZWEtZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdGV4dC1maWVsZC1hdXRvc2l6ZS10ZXh0YXJlYS1leGFtcGxlLmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBUZXh0RmllbGRBdXRvc2l6ZVRleHRhcmVhRXhhbXBsZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX25nWm9uZTogTmdab25lKSB7fVxuXG4gIEBWaWV3Q2hpbGQoJ2F1dG9zaXplJykgYXV0b3NpemU6IENka1RleHRhcmVhQXV0b3NpemU7XG5cbiAgdHJpZ2dlclJlc2l6ZSgpIHtcbiAgICAvLyBXYWl0IGZvciBjaGFuZ2VzIHRvIGJlIGFwcGxpZWQsIHRoZW4gdHJpZ2dlciB0ZXh0YXJlYSByZXNpemUuXG4gICAgdGhpcy5fbmdab25lLm9uU3RhYmxlLnBpcGUodGFrZSgxKSlcbiAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB0aGlzLmF1dG9zaXplLnJlc2l6ZVRvRml0Q29udGVudCh0cnVlKSk7XG4gIH1cbn1cbiIsIjxtYXQtZm9ybS1maWVsZD5cbiAgPG1hdC1sYWJlbD5Gb250IHNpemU8L21hdC1sYWJlbD5cbiAgPG1hdC1zZWxlY3QgI2ZvbnRTaXplIHZhbHVlPVwiMTZweFwiIChzZWxlY3Rpb25DaGFuZ2UpPVwidHJpZ2dlclJlc2l6ZSgpXCI+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxMHB4XCI+MTBweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjEycHhcIj4xMnB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMTRweFwiPjE0cHg8L21hdC1vcHRpb24+XG4gICAgPG1hdC1vcHRpb24gdmFsdWU9XCIxNnB4XCI+MTZweDwvbWF0LW9wdGlvbj5cbiAgICA8bWF0LW9wdGlvbiB2YWx1ZT1cIjE4cHhcIj4xOHB4PC9tYXQtb3B0aW9uPlxuICAgIDxtYXQtb3B0aW9uIHZhbHVlPVwiMjBweFwiPjIwcHg8L21hdC1vcHRpb24+XG4gIDwvbWF0LXNlbGVjdD5cbjwvbWF0LWZvcm0tZmllbGQ+XG5cbjxtYXQtZm9ybS1maWVsZCBbc3R5bGUuZm9udFNpemVdPVwiZm9udFNpemUudmFsdWVcIj5cbiAgPG1hdC1sYWJlbD5BdXRvc2l6ZSB0ZXh0YXJlYTwvbWF0LWxhYmVsPlxuICA8dGV4dGFyZWEgbWF0SW5wdXRcbiAgICAgICAgICAgIGNka1RleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICNhdXRvc2l6ZT1cImNka1RleHRhcmVhQXV0b3NpemVcIlxuICAgICAgICAgICAgY2RrQXV0b3NpemVNaW5Sb3dzPVwiMVwiXG4gICAgICAgICAgICBjZGtBdXRvc2l6ZU1heFJvd3M9XCI1XCI+PC90ZXh0YXJlYT5cbjwvbWF0LWZvcm0tZmllbGQ+XG4iXX0=