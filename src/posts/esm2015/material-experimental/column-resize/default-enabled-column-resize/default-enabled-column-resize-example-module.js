/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatDefaultEnabledColumnResizeModule } from '@angular/material-experimental/column-resize';
import { DefaultEnabledColumnResizeExample } from './default-enabled-column-resize-example';
import * as i0 from "@angular/core";
export class DefaultEnabledColumnResizeExampleModule {
}
DefaultEnabledColumnResizeExampleModule.ɵmod = i0.ɵɵdefineNgModule({ type: DefaultEnabledColumnResizeExampleModule });
DefaultEnabledColumnResizeExampleModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DefaultEnabledColumnResizeExampleModule_Factory(t) { return new (t || DefaultEnabledColumnResizeExampleModule)(); }, imports: [[
            MatDefaultEnabledColumnResizeModule,
            MatTableModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DefaultEnabledColumnResizeExampleModule, { declarations: [DefaultEnabledColumnResizeExample], imports: [MatDefaultEnabledColumnResizeModule,
        MatTableModule], exports: [DefaultEnabledColumnResizeExample] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(DefaultEnabledColumnResizeExampleModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatDefaultEnabledColumnResizeModule,
                    MatTableModule,
                ],
                declarations: [DefaultEnabledColumnResizeExample],
                exports: [DefaultEnabledColumnResizeExample],
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1lbmFibGVkLWNvbHVtbi1yZXNpemUtZXhhbXBsZS1tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS9kZWZhdWx0LWVuYWJsZWQtY29sdW1uLXJlc2l6ZS1leGFtcGxlLW1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsbUNBQW1DLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQztBQUVqRyxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQzs7QUFVMUYsTUFBTSxPQUFPLHVDQUF1Qzs7MkVBQXZDLHVDQUF1Qzs2SkFBdkMsdUNBQXVDLGtCQVB6QztZQUNQLG1DQUFtQztZQUNuQyxjQUFjO1NBQ2Y7d0ZBSVUsdUNBQXVDLG1CQUhuQyxpQ0FBaUMsYUFIOUMsbUNBQW1DO1FBQ25DLGNBQWMsYUFHTixpQ0FBaUM7a0RBRWhDLHVDQUF1QztjQVJuRCxRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLG1DQUFtQztvQkFDbkMsY0FBYztpQkFDZjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztnQkFDakQsT0FBTyxFQUFFLENBQUMsaUNBQWlDLENBQUM7YUFDN0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge01hdFRhYmxlTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XG5pbXBvcnQge01hdERlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1leHBlcmltZW50YWwvY29sdW1uLXJlc2l6ZSc7XG5cbmltcG9ydCB7RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVFeGFtcGxlfSBmcm9tICcuL2RlZmF1bHQtZW5hYmxlZC1jb2x1bW4tcmVzaXplLWV4YW1wbGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWF0RGVmYXVsdEVuYWJsZWRDb2x1bW5SZXNpemVNb2R1bGUsXG4gICAgTWF0VGFibGVNb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0RlZmF1bHRFbmFibGVkQ29sdW1uUmVzaXplRXhhbXBsZV0sXG4gIGV4cG9ydHM6IFtEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUV4YW1wbGVdLFxufSlcbmV4cG9ydCBjbGFzcyBEZWZhdWx0RW5hYmxlZENvbHVtblJlc2l6ZUV4YW1wbGVNb2R1bGUge1xufVxuIl19