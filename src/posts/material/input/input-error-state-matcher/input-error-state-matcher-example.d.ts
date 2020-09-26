import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as i0 from "@angular/core";
/** Error when invalid control is dirty, touched, or submitted. */
export declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
/** @title Input with a custom ErrorStateMatcher */
export declare class InputErrorStateMatcherExample {
    emailFormControl: FormControl;
    matcher: MyErrorStateMatcher;
    static ɵfac: i0.ɵɵFactoryDef<InputErrorStateMatcherExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<InputErrorStateMatcherExample, "input-error-state-matcher-example", never, {}, {}, never, never>;
}
