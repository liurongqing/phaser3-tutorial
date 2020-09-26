import { ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵsetClassMetadata, Component, ɵɵdirectiveInject, ɵɵelement, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { MatIcon, MatIconRegistry, MatIconModule } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @title Basic icons
 */
class IconOverviewExample {
}
IconOverviewExample.ɵfac = function IconOverviewExample_Factory(t) { return new (t || IconOverviewExample)(); };
IconOverviewExample.ɵcmp = ɵɵdefineComponent({ type: IconOverviewExample, selectors: [["icon-overview-example"]], decls: 2, vars: 0, consts: [["aria-hidden", "false", "aria-label", "Example home icon"]], template: function IconOverviewExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mat-icon", 0);
        ɵɵtext(1, "home");
        ɵɵelementEnd();
    } }, directives: [MatIcon], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconOverviewExample, [{
        type: Component,
        args: [{
                selector: 'icon-overview-example',
                templateUrl: 'icon-overview-example.html',
            }]
    }], null, null); })();

/**
 * @title SVG icons
 */
class IconSvgExample {
    constructor(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
    }
}
IconSvgExample.ɵfac = function IconSvgExample_Factory(t) { return new (t || IconSvgExample)(ɵɵdirectiveInject(MatIconRegistry), ɵɵdirectiveInject(DomSanitizer)); };
IconSvgExample.ɵcmp = ɵɵdefineComponent({ type: IconSvgExample, selectors: [["icon-svg-example"]], decls: 1, vars: 0, consts: [["svgIcon", "thumbs-up", "aria-hidden", "false", "aria-label", "Example thumbs up SVG icon"]], template: function IconSvgExample_Template(rf, ctx) { if (rf & 1) {
        ɵɵelement(0, "mat-icon", 0);
    } }, directives: [MatIcon], encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconSvgExample, [{
        type: Component,
        args: [{
                selector: 'icon-svg-example',
                templateUrl: 'icon-svg-example.html',
            }]
    }], function () { return [{ type: MatIconRegistry }, { type: DomSanitizer }]; }, null); })();

const EXAMPLES = [
    IconOverviewExample,
    IconSvgExample,
];
class IconExamplesModule {
}
IconExamplesModule.ɵmod = ɵɵdefineNgModule({ type: IconExamplesModule });
IconExamplesModule.ɵinj = ɵɵdefineInjector({ factory: function IconExamplesModule_Factory(t) { return new (t || IconExamplesModule)(); }, imports: [[
            MatIconModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(IconExamplesModule, { declarations: [IconOverviewExample,
        IconSvgExample], imports: [MatIconModule], exports: [IconOverviewExample,
        IconSvgExample] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(IconExamplesModule, [{
        type: NgModule,
        args: [{
                imports: [
                    MatIconModule,
                ],
                declarations: EXAMPLES,
                exports: EXAMPLES,
                entryComponents: EXAMPLES,
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { IconExamplesModule, IconOverviewExample, IconSvgExample };
//# sourceMappingURL=icon.js.map
