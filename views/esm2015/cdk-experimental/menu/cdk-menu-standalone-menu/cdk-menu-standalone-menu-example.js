import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk-experimental/menu";
function CdkMenuStandaloneMenuExample_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3);
    i0.ɵɵelementStart(1, "button", 4);
    i0.ɵɵtext(2, "Refresh");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 4);
    i0.ɵɵtext(4, "Settings");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 4);
    i0.ɵɵtext(6, "Help");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 4);
    i0.ɵɵtext(8, "Sign out");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(3);
    i0.ɵɵproperty("cdkMenuPanel", _r0);
} }
/** @title Menu with Standalone Trigger. */
export class CdkMenuStandaloneMenuExample {
}
CdkMenuStandaloneMenuExample.ɵfac = function CdkMenuStandaloneMenuExample_Factory(t) { return new (t || CdkMenuStandaloneMenuExample)(); };
CdkMenuStandaloneMenuExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkMenuStandaloneMenuExample, selectors: [["cdk-menu-standalone-menu-example"]], decls: 4, vars: 1, consts: [["cdkMenuItem", "", 1, "example-standalone-item", 3, "cdkMenuTriggerFor"], ["cdkMenuPanel", ""], ["menu", "cdkMenuPanel"], ["cdkMenu", "", 1, "example-menu", 3, "cdkMenuPanel"], ["cdkMenuItem", "", 1, "example-menu-item"]], template: function CdkMenuStandaloneMenuExample_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵtext(1, "Click me!");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(2, CdkMenuStandaloneMenuExample_ng_template_2_Template, 9, 1, "ng-template", 1, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r0 = i0.ɵɵreference(3);
        i0.ɵɵproperty("cdkMenuTriggerFor", _r0);
    } }, directives: [i1.CdkMenuItem, i1.CdkMenuItemTrigger, i1.CdkMenuPanel, i1.CdkMenu], styles: [".example-menu[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  min-width: 180px;\n  max-width: 280px;\n  background-color: rgba(255, 255, 255);\n  padding: 6px 0;\n}\n\n.example-menu-item[_ngcontent-%COMP%], .example-standalone-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  cursor: pointer;\n  outline: none;\n  border: none;\n\n  user-select: none;\n  min-width: 64px;\n  line-height: 36px;\n  padding: 0 16px;\n\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n  flex: 1;\n}\n\n.example-menu-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n\n.example-menu-item[_ngcontent-%COMP%]:active {\n  background-color: rgb(170, 170, 170);\n}\n\n.example-standalone-item[_ngcontent-%COMP%] {\n  background-color: rgb(239, 239, 239);\n}\n.example-standalone-item[_ngcontent-%COMP%]:hover {\n  background-color: rgb(208, 208, 208);\n}\n.example-standalone-item[aria-expanded='true'][_ngcontent-%COMP%] {\n  background-color: rgb(208, 208, 208);\n}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(CdkMenuStandaloneMenuExample, [{
        type: Component,
        args: [{
                selector: 'cdk-menu-standalone-menu-example',
                styleUrls: ['cdk-menu-standalone-menu-example.css'],
                templateUrl: 'cdk-menu-standalone-menu-example.html',
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY29tcG9uZW50cy1leGFtcGxlcy9jZGstZXhwZXJpbWVudGFsL21lbnUvY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS1leGFtcGxlLnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMtZXhhbXBsZXMvY2RrLWV4cGVyaW1lbnRhbC9tZW51L2Nkay1tZW51LXN0YW5kYWxvbmUtbWVudS9jZGstbWVudS1zdGFuZGFsb25lLW1lbnUtZXhhbXBsZS5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7SUNHdEMsOEJBQ0U7SUFBQSxpQ0FBOEM7SUFBQSx1QkFBTztJQUFBLGlCQUFTO0lBQzlELGlDQUE4QztJQUFBLHdCQUFRO0lBQUEsaUJBQVM7SUFDL0QsaUNBQThDO0lBQUEsb0JBQUk7SUFBQSxpQkFBUztJQUMzRCxpQ0FBOEM7SUFBQSx3QkFBUTtJQUFBLGlCQUFTO0lBQ2pFLGlCQUFNOzs7O0lBTDRCLGtDQUFxQjs7QUREekQsMkNBQTJDO0FBTTNDLE1BQU0sT0FBTyw0QkFBNEI7O3dHQUE1Qiw0QkFBNEI7aUVBQTVCLDRCQUE0QjtRQ1J6QyxpQ0FBK0U7UUFBQSx5QkFBUztRQUFBLGlCQUFTO1FBRWpHLDJIQUNFOzs7UUFIa0IsdUNBQTBCOztrRERRakMsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2dCQUM1QyxTQUFTLEVBQUUsQ0FBQyxzQ0FBc0MsQ0FBQztnQkFDbkQsV0FBVyxFQUFFLHVDQUF1QzthQUNyRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIEB0aXRsZSBNZW51IHdpdGggU3RhbmRhbG9uZSBUcmlnZ2VyLiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUnLFxuICBzdHlsZVVybHM6IFsnY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUuY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnY2RrLW1lbnUtc3RhbmRhbG9uZS1tZW51LWV4YW1wbGUuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENka01lbnVTdGFuZGFsb25lTWVudUV4YW1wbGUge31cbiIsIjxidXR0b24gY2RrTWVudUl0ZW0gW2Nka01lbnVUcmlnZ2VyRm9yXT1cIm1lbnVcIiBjbGFzcz1cImV4YW1wbGUtc3RhbmRhbG9uZS1pdGVtXCI+Q2xpY2sgbWUhPC9idXR0b24+XG5cbjxuZy10ZW1wbGF0ZSBjZGtNZW51UGFuZWwgI21lbnU9XCJjZGtNZW51UGFuZWxcIj5cbiAgPGRpdiBjbGFzcz1cImV4YW1wbGUtbWVudVwiIGNka01lbnUgW2Nka01lbnVQYW5lbF09XCJtZW51XCI+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+UmVmcmVzaDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlNldHRpbmdzPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0+SGVscDwvYnV0dG9uPlxuICAgIDxidXR0b24gY2xhc3M9XCJleGFtcGxlLW1lbnUtaXRlbVwiIGNka01lbnVJdGVtPlNpZ24gb3V0PC9idXR0b24+XG4gIDwvZGl2PlxuPC9uZy10ZW1wbGF0ZT5cbiJdfQ==