import * as i0 from "@angular/core";
export interface Transaction {
    item: string;
    cost: number;
}
/**
 * @title Table with a sticky footer
 */
export declare class TableStickyFooterExample {
    displayedColumns: string[];
    transactions: Transaction[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ɵfac: i0.ɵɵFactoryDef<TableStickyFooterExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableStickyFooterExample, "table-sticky-footer-example", never, {}, {}, never, never>;
}
