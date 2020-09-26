import { DataSource } from '@angular/cdk/collections';
import { AfterContentInit, AfterViewInit, QueryList } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatColumnDef, MatHeaderRowDef, MatRowDef, MatTable, MatTableDataSource } from '@angular/material/table';
import * as i0 from "@angular/core";
export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}
/**
 * @title Table example that shows how to wrap a table component for definition and behavior reuse.
 */
export declare class TableWrappedExample implements AfterViewInit {
    displayedColumns: string[];
    dataSource: MatTableDataSource<PeriodicElement>;
    sort: MatSort;
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<TableWrappedExample, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<TableWrappedExample, "table-wrapped-example", never, {}, {}, never, never>;
}
/**
 * Table component that accepts column and row definitions in its content to be registered to the
 * table.
 */
export declare class WrapperTable<T> implements AfterContentInit {
    headerRowDefs: QueryList<MatHeaderRowDef>;
    rowDefs: QueryList<MatRowDef<T>>;
    columnDefs: QueryList<MatColumnDef>;
    table: MatTable<T>;
    columns: string[];
    dataSource: DataSource<T>;
    ngAfterContentInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<WrapperTable<any>, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<WrapperTable<any>, "wrapper-table", never, { "columns": "columns"; "dataSource": "dataSource"; }, {}, ["headerRowDefs", "rowDefs", "columnDefs"], ["*"]>;
}
