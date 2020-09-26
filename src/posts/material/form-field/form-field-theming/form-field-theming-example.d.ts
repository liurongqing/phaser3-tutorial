import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
/** @title Form field theming */
export declare class FormFieldThemingExample {
    options: FormGroup;
    colorControl: FormControl;
    fontSizeControl: FormControl;
    constructor(fb: FormBuilder);
    getFontSize(): number;
    static ɵfac: i0.ɵɵFactoryDef<FormFieldThemingExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<FormFieldThemingExample, "form-field-theming-example", never, {}, {}, never, never>;
}
