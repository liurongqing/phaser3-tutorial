import { MatChipInputEvent } from '@angular/material/chips';
import * as i0 from "@angular/core";
export interface Fruit {
    name: string;
}
/**
 * @title Chips with input
 */
export declare class ChipsInputExample {
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    readonly separatorKeysCodes: number[];
    fruits: Fruit[];
    add(event: MatChipInputEvent): void;
    remove(fruit: Fruit): void;
    static ɵfac: i0.ɵɵFactoryDef<ChipsInputExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChipsInputExample, "chips-input-example", never, {}, {}, never, never>;
}
