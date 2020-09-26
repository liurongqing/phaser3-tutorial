import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/sort";
import * as i2 from "@angular/common";
function SortOverviewExample_tr_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵelementStart(1, "td");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "td");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "td");
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "td");
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "td");
    i0.ɵɵtext(10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dessert_r1 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.name);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.calories);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.fat);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.carbs);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dessert_r1.protein);
} }
/**
 * @title Sorting overview
 */
export class SortOverviewExample {
    constructor() {
        this.desserts = [
            { name: 'Frozen yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
            { name: 'Ice cream sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
            { name: 'Eclair', calories: 262, fat: 16, carbs: 24, protein: 6 },
            { name: 'Cupcake', calories: 305, fat: 4, carbs: 67, protein: 4 },
            { name: 'Gingerbread', calories: 356, fat: 16, carbs: 49, protein: 4 },
        ];
        this.sortedData = this.desserts.slice();
    }
    sortData(sort) {
        const data = this.desserts.slice();
        if (!sort.active || sort.direction === '') {
            this.sortedData = data;
            return;
        }
        this.sortedData = data.sort((a, b) => {
            const isAsc = sort.direction === 'asc';
            switch (sort.active) {
                case 'name': return compare(a.name, b.name, isAsc);
                case 'calories': return compare(a.calories, b.calories, isAsc);
                case 'fat': return compare(a.fat, b.fat, isAsc);
                case 'carbs': return compare(a.carbs, b.carbs, isAsc);
                case 'protein': return compare(a.protein, b.protein, isAsc);
                default: return 0;
            }
        });
    }
}
SortOverviewExample.ɵfac = function SortOverviewExample_Factory(t) { return new (t || SortOverviewExample)(); };
SortOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: SortOverviewExample, selectors: [["sort-overview-example"]], decls: 13, vars: 1, consts: [["matSort", "", 3, "matSortChange"], ["mat-sort-header", "name"], ["mat-sort-header", "calories"], ["mat-sort-header", "fat"], ["mat-sort-header", "carbs"], ["mat-sort-header", "protein"], [4, "ngFor", "ngForOf"]], template: function SortOverviewExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table", 0);
        i0.ɵɵlistener("matSortChange", function SortOverviewExample_Template_table_matSortChange_0_listener($event) { return ctx.sortData($event); });
        i0.ɵɵelementStart(1, "tr");
        i0.ɵɵelementStart(2, "th", 1);
        i0.ɵɵtext(3, "Dessert (100g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "th", 2);
        i0.ɵɵtext(5, "Calories");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "th", 3);
        i0.ɵɵtext(7, "Fat (g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(8, "th", 4);
        i0.ɵɵtext(9, "Carbs (g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(10, "th", 5);
        i0.ɵɵtext(11, "Protein (g)");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(12, SortOverviewExample_tr_12_Template, 11, 5, "tr", 6);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(12);
        i0.ɵɵproperty("ngForOf", ctx.sortedData);
    } }, directives: [i1.MatSort, i1.MatSortHeader, i2.NgForOf], styles: [".mat-sort-header-container[_ngcontent-%COMP%] {\n  align-items: center;\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(SortOverviewExample, [{
        type: Component,
        args: [{
                selector: 'sort-overview-example',
                templateUrl: 'sort-overview-example.html',
                styleUrls: ['sort-overview-example.css'],
            }]
    }], function () { return []; }, null); })();
function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1vdmVydmlldy1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvbWF0ZXJpYWwvc29ydC9zb3J0LW92ZXJ2aWV3L3NvcnQtb3ZlcnZpZXctZXhhbXBsZS50cyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzLWV4YW1wbGVzL21hdGVyaWFsL3NvcnQvc29ydC1vdmVydmlldy9zb3J0LW92ZXJ2aWV3LWV4YW1wbGUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ1N0QywwQkFDRTtJQUFBLDBCQUFJO0lBQUEsWUFBZ0I7SUFBQSxpQkFBSztJQUN6QiwwQkFBSTtJQUFBLFlBQW9CO0lBQUEsaUJBQUs7SUFDN0IsMEJBQUk7SUFBQSxZQUFlO0lBQUEsaUJBQUs7SUFDeEIsMEJBQUk7SUFBQSxZQUFpQjtJQUFBLGlCQUFLO0lBQzFCLDBCQUFJO0lBQUEsYUFBbUI7SUFBQSxpQkFBSztJQUM5QixpQkFBSzs7O0lBTEMsZUFBZ0I7SUFBaEIscUNBQWdCO0lBQ2hCLGVBQW9CO0lBQXBCLHlDQUFvQjtJQUNwQixlQUFlO0lBQWYsb0NBQWU7SUFDZixlQUFpQjtJQUFqQixzQ0FBaUI7SUFDakIsZUFBbUI7SUFBbkIsd0NBQW1COztBREgzQjs7R0FFRztBQU1ILE1BQU0sT0FBTyxtQkFBbUI7SUFXOUI7UUFWQSxhQUFRLEdBQWM7WUFDcEIsRUFBQyxJQUFJLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUM7WUFDckUsRUFBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxF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QXFDRCxTQUFTLE9BQU8sQ0FBQyxDQUFrQixFQUFFLENBQWtCLEVBQUUsS0FBYztJQUNyRSxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7U29ydH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGVzc2VydCB7XG4gIGNhbG9yaWVzOiBudW1iZXI7XG4gIGNhcmJzOiBudW1iZXI7XG4gIGZhdDogbnVtYmVyO1xuICBuYW1lOiBzdHJpbmc7XG4gIHByb3RlaW46IG51bWJlcjtcbn1cblxuLyoqXG4gKiBAdGl0bGUgU29ydGluZyBvdmVydmlld1xuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzb3J0LW92ZXJ2aWV3LWV4YW1wbGUnLFxuICB0ZW1wbGF0ZVVybDogJ3NvcnQtb3ZlcnZpZXctZXhhbXBsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJ3NvcnQtb3ZlcnZpZXctZXhhbXBsZS5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU29ydE92ZXJ2aWV3RXhhbXBsZSB7XG4gIGRlc3NlcnRzOiBEZXNzZXJ0W10gPSBbXG4gICAge25hbWU6ICdGcm96ZW4geW9ndXJ0JywgY2Fsb3JpZXM6IDE1OSwgZmF0OiA2LCBjYXJiczogMjQsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnSWNlIGNyZWFtIHNhbmR3aWNoJywgY2Fsb3JpZXM6IDIzNywgZmF0OiA5LCBjYXJiczogMzcsIHByb3RlaW46IDR9LFxuICAgIHtuYW1lOiAnRWNsYWlyJywgY2Fsb3JpZXM6IDI2MiwgZmF0OiAxNiwgY2FyYnM6IDI0LCBwcm90ZWluOiA2fSxcbiAgICB7bmFtZTogJ0N1cGNha2UnLCBjYWxvcmllczogMzA1LCBmYXQ6IDQsIGNhcmJzOiA2NywgcHJvdGVpbjogNH0sXG4gICAge25hbWU6ICdHaW5nZXJicmVhZCcsIGNhbG9yaWVzOiAzNTYsIGZhdDogMTYsIGNhcmJzOiA0OSwgcHJvdGVpbjogNH0sXG4gIF07XG5cbiAgc29ydGVkRGF0YTogRGVzc2VydFtdO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuc29ydGVkRGF0YSA9IHRoaXMuZGVzc2VydHMuc2xpY2UoKTtcbiAgfVxuXG4gIHNvcnREYXRhKHNvcnQ6IFNvcnQpIHtcbiAgICBjb25zdCBkYXRhID0gdGhpcy5kZXNzZXJ0cy5zbGljZSgpO1xuICAgIGlmICghc29ydC5hY3RpdmUgfHwgc29ydC5kaXJlY3Rpb24gPT09ICcnKSB7XG4gICAgICB0aGlzLnNvcnRlZERhdGEgPSBkYXRhO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc29ydGVkRGF0YSA9IGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgICAgY29uc3QgaXNBc2MgPSBzb3J0LmRpcmVjdGlvbiA9PT0gJ2FzYyc7XG4gICAgICBzd2l0Y2ggKHNvcnQuYWN0aXZlKSB7XG4gICAgICAgIGNhc2UgJ25hbWUnOiByZXR1cm4gY29tcGFyZShhLm5hbWUsIGIubmFtZSwgaXNBc2MpO1xuICAgICAgICBjYXNlICdjYWxvcmllcyc6IHJldHVybiBjb21wYXJlKGEuY2Fsb3JpZXMsIGIuY2Fsb3JpZXMsIGlzQXNjKTtcbiAgICAgICAgY2FzZSAnZmF0JzogcmV0dXJuIGNvbXBhcmUoYS5mYXQsIGIuZmF0LCBpc0FzYyk7XG4gICAgICAgIGNhc2UgJ2NhcmJzJzogcmV0dXJuIGNvbXBhcmUoYS5jYXJicywgYi5jYXJicywgaXNBc2MpO1xuICAgICAgICBjYXNlICdwcm90ZWluJzogcmV0dXJuIGNvbXBhcmUoYS5wcm90ZWluLCBiLnByb3RlaW4sIGlzQXNjKTtcbiAgICAgICAgZGVmYXVsdDogcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZShhOiBudW1iZXIgfCBzdHJpbmcsIGI6IG51bWJlciB8IHN0cmluZywgaXNBc2M6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIChhIDwgYiA/IC0xIDogMSkgKiAoaXNBc2MgPyAxIDogLTEpO1xufVxuIiwiPHRhYmxlIG1hdFNvcnQgKG1hdFNvcnRDaGFuZ2UpPVwic29ydERhdGEoJGV2ZW50KVwiPlxuICA8dHI+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cIm5hbWVcIj5EZXNzZXJ0ICgxMDBnKTwvdGg+XG4gICAgPHRoIG1hdC1zb3J0LWhlYWRlcj1cImNhbG9yaWVzXCI+Q2Fsb3JpZXM8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJmYXRcIj5GYXQgKGcpPC90aD5cbiAgICA8dGggbWF0LXNvcnQtaGVhZGVyPVwiY2FyYnNcIj5DYXJicyAoZyk8L3RoPlxuICAgIDx0aCBtYXQtc29ydC1oZWFkZXI9XCJwcm90ZWluXCI+UHJvdGVpbiAoZyk8L3RoPlxuICA8L3RyPlxuXG4gIDx0ciAqbmdGb3I9XCJsZXQgZGVzc2VydCBvZiBzb3J0ZWREYXRhXCI+XG4gICAgPHRkPnt7ZGVzc2VydC5uYW1lfX08L3RkPlxuICAgIDx0ZD57e2Rlc3NlcnQuY2Fsb3JpZXN9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5mYXR9fTwvdGQ+XG4gICAgPHRkPnt7ZGVzc2VydC5jYXJic319PC90ZD5cbiAgICA8dGQ+e3tkZXNzZXJ0LnByb3RlaW59fTwvdGQ+XG4gIDwvdHI+XG48L3RhYmxlPlxuIl19