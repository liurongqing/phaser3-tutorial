(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('@angular/material/button'), require('@angular/material/dialog'), require('@angular/material/input'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/material/dialog', ['exports', '@angular/common', '@angular/core', '@angular/forms', '@angular/material/button', '@angular/material/dialog', '@angular/material/input', '@angular/material/form-field'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.material = global.ng.componentsExamples.material || {}, global.ng.componentsExamples.material.dialog = {}), global.ng.common, global.ng.core, global.ng.forms, global.ng.material.button, global.ng.material.dialog, global.ng.material.input, global.ng.material.formField));
}(this, (function (exports, i3, i0, i4, i2, i1, i3$1, i2$1) { 'use strict';

    /**
     * @title Dialog with header, scrollable content and actions
     */
    var DialogContentExample = /** @class */ (function () {
        function DialogContentExample(dialog) {
            this.dialog = dialog;
        }
        DialogContentExample.prototype.openDialog = function () {
            var dialogRef = this.dialog.open(DialogContentExampleDialog);
            dialogRef.afterClosed().subscribe(function (result) {
                console.log("Dialog result: " + result);
            });
        };
        return DialogContentExample;
    }());
    DialogContentExample.ɵfac = function DialogContentExample_Factory(t) { return new (t || DialogContentExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
    DialogContentExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogContentExample, selectors: [["dialog-content-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogContentExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function DialogContentExample_Template_button_click_0_listener() { return ctx.openDialog(); });
                i0.ɵɵtext(1, "Open dialog");
                i0.ɵɵelementEnd();
            }
        }, directives: [i2.MatButton], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogContentExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-content-example',
                        templateUrl: 'dialog-content-example.html',
                    }]
            }], function () { return [{ type: i1.MatDialog }]; }, null);
    })();
    var DialogContentExampleDialog = /** @class */ (function () {
        function DialogContentExampleDialog() {
        }
        return DialogContentExampleDialog;
    }());
    DialogContentExampleDialog.ɵfac = function DialogContentExampleDialog_Factory(t) { return new (t || DialogContentExampleDialog)(); };
    DialogContentExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogContentExampleDialog, selectors: [["dialog-content-example-dialog"]], decls: 46, vars: 1, consts: [["mat-dialog-title", ""], [1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogContentExampleDialog_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h2", 0);
                i0.ɵɵtext(1, "Install Angular");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mat-dialog-content", 1);
                i0.ɵɵelementStart(3, "h3");
                i0.ɵɵtext(4, "Develop across all platforms");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "p");
                i0.ɵɵtext(6, "Learn one way to build applications with Angular and reuse your code and abilities to build apps for any deployment target. For web, mobile web, native mobile and native desktop.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "h3");
                i0.ɵɵtext(8, "Speed & Performance");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "p");
                i0.ɵɵtext(10, "Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering. Angular puts you in control over scalability. Meet huge data requirements by building data models on RxJS, Immutable.js or another push-model.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "h3");
                i0.ɵɵtext(12, "Incredible tooling");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(13, "p");
                i0.ɵɵtext(14, "Build features quickly with simple, declarative templates. Extend the template language with your own components and use a wide array of existing components. Get immediate Angular-specific help and feedback with nearly every IDE and editor. All this comes together so you can focus on building amazing apps rather than trying to make the code work.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(15, "h3");
                i0.ɵɵtext(16, "Loved by millions");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(17, "p");
                i0.ɵɵtext(18, "From prototype through global deployment, Angular delivers the productivity and scalable infrastructure that supports Google's largest applications.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(19, "h3");
                i0.ɵɵtext(20, "What is Angular?");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(21, "p");
                i0.ɵɵtext(22, "Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. Angular empowers developers to build applications that live on the web, mobile, or the desktop");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(23, "h3");
                i0.ɵɵtext(24, "Architecture overview");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(25, "p");
                i0.ɵɵtext(26, "Angular is a platform and framework for building client applications in HTML and TypeScript. Angular is itself written in TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your apps.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(27, "p");
                i0.ɵɵtext(28, "The basic building blocks of an Angular application are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(29, "p");
                i0.ɵɵtext(30, "Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data. Every app has at least a root component.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(31, "p");
                i0.ɵɵtext(32, "Components use services, which provide specific functionality not directly related to views. Service providers can be injected into components as dependencies, making your code modular, reusable, and efficient.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(33, "p");
                i0.ɵɵtext(34, "Both components and services are simply classes, with decorators that mark their type and provide metadata that tells Angular how to use them.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(35, "p");
                i0.ɵɵtext(36, "The metadata for a component class associates it with a template that defines a view. A template combines ordinary HTML with Angular directives and binding markup that allow Angular to modify the HTML before rendering it for display.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(37, "p");
                i0.ɵɵtext(38, "The metadata for a service class provides the information Angular needs to make it available to components through Dependency Injection (DI).");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(39, "p");
                i0.ɵɵtext(40, "An app's components typically define many views, arranged hierarchically. Angular provides the Router service to help you define navigation paths among views. The router provides sophisticated in-browser navigational capabilities.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(41, "mat-dialog-actions", 2);
                i0.ɵɵelementStart(42, "button", 3);
                i0.ɵɵtext(43, "Cancel");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(44, "button", 4);
                i0.ɵɵtext(45, "Install");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(44);
                i0.ɵɵproperty("mat-dialog-close", true);
            }
        }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogContentExampleDialog, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-content-example-dialog',
                        templateUrl: 'dialog-content-example-dialog.html',
                    }]
            }], null, null);
    })();

    function DialogDataExampleDialog_span_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u2713");
            i0.ɵɵelementEnd();
        }
    }
    function DialogDataExampleDialog_span_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u2713");
            i0.ɵɵelementEnd();
        }
    }
    function DialogDataExampleDialog_span_12_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span");
            i0.ɵɵtext(1, "\u2713");
            i0.ɵɵelementEnd();
        }
    }
    /**
     * @title Injecting data when opening a dialog
     */
    var DialogDataExample = /** @class */ (function () {
        function DialogDataExample(dialog) {
            this.dialog = dialog;
        }
        DialogDataExample.prototype.openDialog = function () {
            this.dialog.open(DialogDataExampleDialog, {
                data: {
                    animal: 'panda'
                }
            });
        };
        return DialogDataExample;
    }());
    DialogDataExample.ɵfac = function DialogDataExample_Factory(t) { return new (t || DialogDataExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
    DialogDataExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogDataExample, selectors: [["dialog-data-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogDataExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function DialogDataExample_Template_button_click_0_listener() { return ctx.openDialog(); });
                i0.ɵɵtext(1, "Open dialog");
                i0.ɵɵelementEnd();
            }
        }, directives: [i2.MatButton], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogDataExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-data-example',
                        templateUrl: 'dialog-data-example.html',
                    }]
            }], function () { return [{ type: i1.MatDialog }]; }, null);
    })();
    var DialogDataExampleDialog = /** @class */ (function () {
        function DialogDataExampleDialog(data) {
            this.data = data;
        }
        return DialogDataExampleDialog;
    }());
    DialogDataExampleDialog.ɵfac = function DialogDataExampleDialog_Factory(t) { return new (t || DialogDataExampleDialog)(i0.ɵɵdirectiveInject(i1.MAT_DIALOG_DATA)); };
    DialogDataExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogDataExampleDialog, selectors: [["dialog-data-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], [4, "ngIf"]], template: function DialogDataExampleDialog_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h1", 0);
                i0.ɵɵtext(1, "Favorite Animal");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵtext(3, " My favorite animal is: ");
                i0.ɵɵelementStart(4, "ul");
                i0.ɵɵelementStart(5, "li");
                i0.ɵɵtemplate(6, DialogDataExampleDialog_span_6_Template, 2, 0, "span", 2);
                i0.ɵɵtext(7, " Panda ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "li");
                i0.ɵɵtemplate(9, DialogDataExampleDialog_span_9_Template, 2, 0, "span", 2);
                i0.ɵɵtext(10, " Unicorn ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(11, "li");
                i0.ɵɵtemplate(12, DialogDataExampleDialog_span_12_Template, 2, 0, "span", 2);
                i0.ɵɵtext(13, " Lion ");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(6);
                i0.ɵɵproperty("ngIf", ctx.data.animal === "panda");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.data.animal === "unicorn");
                i0.ɵɵadvance(3);
                i0.ɵɵproperty("ngIf", ctx.data.animal === "lion");
            }
        }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i3.NgIf], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogDataExampleDialog, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-data-example-dialog',
                        templateUrl: 'dialog-data-example-dialog.html',
                    }]
            }], function () {
            return [{ type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    /**
     * @title Dialog elements
     */
    var DialogElementsExample = /** @class */ (function () {
        function DialogElementsExample(dialog) {
            this.dialog = dialog;
        }
        DialogElementsExample.prototype.openDialog = function () {
            this.dialog.open(DialogElementsExampleDialog);
        };
        return DialogElementsExample;
    }());
    DialogElementsExample.ɵfac = function DialogElementsExample_Factory(t) { return new (t || DialogElementsExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
    DialogElementsExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogElementsExample, selectors: [["dialog-elements-example"]], decls: 2, vars: 0, consts: [["mat-button", "", 3, "click"]], template: function DialogElementsExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "button", 0);
                i0.ɵɵlistener("click", function DialogElementsExample_Template_button_click_0_listener() { return ctx.openDialog(); });
                i0.ɵɵtext(1, "Launch dialog");
                i0.ɵɵelementEnd();
            }
        }, directives: [i2.MatButton], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogElementsExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-elements-example',
                        templateUrl: 'dialog-elements-example.html',
                    }]
            }], function () { return [{ type: i1.MatDialog }]; }, null);
    })();
    var DialogElementsExampleDialog = /** @class */ (function () {
        function DialogElementsExampleDialog() {
        }
        return DialogElementsExampleDialog;
    }());
    DialogElementsExampleDialog.ɵfac = function DialogElementsExampleDialog_Factory(t) { return new (t || DialogElementsExampleDialog)(); };
    DialogElementsExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogElementsExampleDialog, selectors: [["dialog-elements-example-dialog"]], decls: 7, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", "mat-dialog-close", ""]], template: function DialogElementsExampleDialog_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h1", 0);
                i0.ɵɵtext(1, "Dialog with elements");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵtext(3, "This dialog showcases the title, close, content and actions elements.");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(4, "div", 2);
                i0.ɵɵelementStart(5, "button", 3);
                i0.ɵɵtext(6, "Close");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogElementsExampleDialog, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-elements-example-dialog',
                        templateUrl: 'dialog-elements-example-dialog.html',
                    }]
            }], null, null);
    })();

    function DialogOverviewExample_li_9_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "li");
            i0.ɵɵtext(1, " You chose: ");
            i0.ɵɵelementStart(2, "i");
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵtextInterpolate(ctx_r0.animal);
        }
    }
    /**
     * @title Dialog Overview
     */
    var DialogOverviewExample = /** @class */ (function () {
        function DialogOverviewExample(dialog) {
            this.dialog = dialog;
        }
        DialogOverviewExample.prototype.openDialog = function () {
            var _this = this;
            var dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
                width: '250px',
                data: { name: this.name, animal: this.animal }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                console.log('The dialog was closed');
                _this.animal = result;
            });
        };
        return DialogOverviewExample;
    }());
    DialogOverviewExample.ɵfac = function DialogOverviewExample_Factory(t) { return new (t || DialogOverviewExample)(i0.ɵɵdirectiveInject(i1.MatDialog)); };
    DialogOverviewExample.ɵcmp = i0.ɵɵdefineComponent({ type: DialogOverviewExample, selectors: [["dialog-overview-example"]], decls: 10, vars: 2, consts: [["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"]], template: function DialogOverviewExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "ol");
                i0.ɵɵelementStart(1, "li");
                i0.ɵɵelementStart(2, "mat-form-field");
                i0.ɵɵelementStart(3, "mat-label");
                i0.ɵɵtext(4, "What's your name?");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "input", 0);
                i0.ɵɵlistener("ngModelChange", function DialogOverviewExample_Template_input_ngModelChange_5_listener($event) { return ctx.name = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "li");
                i0.ɵɵelementStart(7, "button", 1);
                i0.ɵɵlistener("click", function DialogOverviewExample_Template_button_click_7_listener() { return ctx.openDialog(); });
                i0.ɵɵtext(8, "Pick one");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(9, DialogOverviewExample_li_9_Template, 4, 1, "li", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(5);
                i0.ɵɵproperty("ngModel", ctx.name);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngIf", ctx.animal);
            }
        }, directives: [i2$1.MatFormField, i2$1.MatLabel, i3$1.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i2.MatButton, i3.NgIf], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogOverviewExample, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-overview-example',
                        templateUrl: 'dialog-overview-example.html',
                    }]
            }], function () { return [{ type: i1.MatDialog }]; }, null);
    })();
    var DialogOverviewExampleDialog = /** @class */ (function () {
        function DialogOverviewExampleDialog(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        DialogOverviewExampleDialog.prototype.onNoClick = function () {
            this.dialogRef.close();
        };
        return DialogOverviewExampleDialog;
    }());
    DialogOverviewExampleDialog.ɵfac = function DialogOverviewExampleDialog_Factory(t) { return new (t || DialogOverviewExampleDialog)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(i1.MAT_DIALOG_DATA)); };
    DialogOverviewExampleDialog.ɵcmp = i0.ɵɵdefineComponent({ type: DialogOverviewExampleDialog, selectors: [["dialog-overview-example-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function DialogOverviewExampleDialog_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "h1", 0);
                i0.ɵɵtext(1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "div", 1);
                i0.ɵɵelementStart(3, "p");
                i0.ɵɵtext(4, "What's your favorite animal?");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "mat-form-field");
                i0.ɵɵelementStart(6, "mat-label");
                i0.ɵɵtext(7, "Favorite Animal");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(8, "input", 2);
                i0.ɵɵlistener("ngModelChange", function DialogOverviewExampleDialog_Template_input_ngModelChange_8_listener($event) { return ctx.data.animal = $event; });
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(9, "div", 3);
                i0.ɵɵelementStart(10, "button", 4);
                i0.ɵɵlistener("click", function DialogOverviewExampleDialog_Template_button_click_10_listener() { return ctx.onNoClick(); });
                i0.ɵɵtext(11, "No Thanks");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(12, "button", 5);
                i0.ɵɵtext(13, "Ok");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1("Hi ", ctx.data.name, "");
                i0.ɵɵadvance(7);
                i0.ɵɵproperty("ngModel", ctx.data.animal);
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("mat-dialog-close", ctx.data.animal);
            }
        }, directives: [i1.MatDialogTitle, i1.MatDialogContent, i2$1.MatFormField, i2$1.MatLabel, i3$1.MatInput, i4.DefaultValueAccessor, i4.NgControlStatus, i4.NgModel, i1.MatDialogActions, i2.MatButton, i1.MatDialogClose], encapsulation: 2 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogOverviewExampleDialog, [{
                type: i0.Component,
                args: [{
                        selector: 'dialog-overview-example-dialog',
                        templateUrl: 'dialog-overview-example-dialog.html',
                    }]
            }], function () {
            return [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [i1.MAT_DIALOG_DATA]
                        }] }];
        }, null);
    })();

    var EXAMPLES = [
        DialogContentExample,
        DialogContentExampleDialog,
        DialogDataExample,
        DialogDataExampleDialog,
        DialogElementsExample,
        DialogElementsExampleDialog,
        DialogOverviewExample,
        DialogOverviewExampleDialog,
    ];
    var DialogExamplesModule = /** @class */ (function () {
        function DialogExamplesModule() {
        }
        return DialogExamplesModule;
    }());
    DialogExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: DialogExamplesModule });
    DialogExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function DialogExamplesModule_Factory(t) { return new (t || DialogExamplesModule)(); }, imports: [[
                i3.CommonModule,
                i2.MatButtonModule,
                i1.MatDialogModule,
                i3$1.MatInputModule,
                i4.FormsModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(DialogExamplesModule, { declarations: [DialogContentExample,
                DialogContentExampleDialog,
                DialogDataExample,
                DialogDataExampleDialog,
                DialogElementsExample,
                DialogElementsExampleDialog,
                DialogOverviewExample,
                DialogOverviewExampleDialog], imports: [i3.CommonModule,
                i2.MatButtonModule,
                i1.MatDialogModule,
                i3$1.MatInputModule,
                i4.FormsModule], exports: [DialogContentExample,
                DialogContentExampleDialog,
                DialogDataExample,
                DialogDataExampleDialog,
                DialogElementsExample,
                DialogElementsExampleDialog,
                DialogOverviewExample,
                DialogOverviewExampleDialog] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(DialogExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i3.CommonModule,
                            i2.MatButtonModule,
                            i1.MatDialogModule,
                            i3$1.MatInputModule,
                            i4.FormsModule,
                        ],
                        declarations: EXAMPLES,
                        exports: EXAMPLES,
                        entryComponents: EXAMPLES,
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DialogContentExample = DialogContentExample;
    exports.DialogContentExampleDialog = DialogContentExampleDialog;
    exports.DialogDataExample = DialogDataExample;
    exports.DialogDataExampleDialog = DialogDataExampleDialog;
    exports.DialogElementsExample = DialogElementsExample;
    exports.DialogElementsExampleDialog = DialogElementsExampleDialog;
    exports.DialogExamplesModule = DialogExamplesModule;
    exports.DialogOverviewExample = DialogOverviewExample;
    exports.DialogOverviewExampleDialog = DialogOverviewExampleDialog;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-material-dialog.umd.js.map
