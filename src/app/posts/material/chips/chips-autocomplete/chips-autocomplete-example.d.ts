import { ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @title Chips Autocomplete
 */
export declare class ChipsAutocompleteExample {
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    separatorKeysCodes: number[];
    fruitCtrl: FormControl;
    filteredFruits: Observable<string[]>;
    fruits: string[];
    allFruits: string[];
    fruitInput: ElementRef<HTMLInputElement>;
    matAutocomplete: MatAutocomplete;
    constructor();
    add(event: MatChipInputEvent): void;
    remove(fruit: string): void;
    selected(event: MatAutocompleteSelectedEvent): void;
    private _filter;
    static ɵfac: i0.ɵɵFactoryDef<ChipsAutocompleteExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ChipsAutocompleteExample, "chips-autocomplete-example", never, {}, {}, never, never>;
}
