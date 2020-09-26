import { Transaction } from '../table-footer-row/table-footer-row-example';
import * as i0 from "@angular/core";
/**
 * @title Table with multiple header and footer rows
 */
export declare class TableMultipleHeaderFooterExample {
    displayedColumns: string[];
    transactions: Transaction[];
    /** Gets the total cost of all transactions. */
    getTotalCost(): number;
    static ɵfac: i0.ɵɵFactoryDef<TableMultipleHeaderFooterExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableMultipleHeaderFooterExample, "table-multiple-header-footer-example", never, {}, {}, never, never>;
}
