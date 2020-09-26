import { MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table with filtering
 */
export declare class TableFilteringExample {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    applyFilter(event: Event): void;
    static ɵfac: i0.ɵɵFactoryDef<TableFilteringExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableFilteringExample, "table-filtering-example", never, {}, {}, never, never>;
}
