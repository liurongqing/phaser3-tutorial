(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/tree'), require('@angular/core'), require('@angular/material/button'), require('@angular/material/icon'), require('@angular/cdk/collections')) :
    typeof define === 'function' && define.amd ? define('@angular/components-examples/cdk/tree', ['exports', '@angular/cdk/tree', '@angular/core', '@angular/material/button', '@angular/material/icon', '@angular/cdk/collections'], factory) :
    (global = global || self, factory((global.ng = global.ng || {}, global.ng.componentsExamples = global.ng.componentsExamples || {}, global.ng.componentsExamples.cdk = global.ng.componentsExamples.cdk || {}, global.ng.componentsExamples.cdk.tree = {}), global.ng.cdk.tree, global.ng.core, global.ng.material.button, global.ng.material.icon, global.ng.cdk.collections));
}(this, (function (exports, i1, i0, i2, i3, collections) { 'use strict';

    function CdkTreeFlatExample_cdk_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "cdk-tree-node", 3);
            i0.ɵɵelement(1, "button", 4);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r2 = ctx.$implicit;
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("display", ctx_r0.shouldRender(node_r2) ? "flex" : "none");
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", node_r2.name, " ");
        }
    }
    function CdkTreeFlatExample_cdk_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "cdk-tree-node", 3);
            i0.ɵɵelementStart(1, "button", 5);
            i0.ɵɵlistener("click", function CdkTreeFlatExample_cdk_tree_node_2_Template_button_click_1_listener() { var node_r3 = ctx.$implicit; return node_r3.isExpanded = !node_r3.isExpanded; });
            i0.ɵɵelementStart(2, "mat-icon", 6);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵstyleProp("display", ctx_r1.shouldRender(node_r3) ? "flex" : "none");
            i0.ɵɵadvance(1);
            i0.ɵɵstyleProp("visibility", node_r3.expandable ? "visible" : "hidden");
            i0.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
        }
    }
    var TREE_DATA = [
        {
            name: 'Fruit',
            expandable: true,
            level: 0,
        }, {
            name: 'Apple',
            expandable: false,
            level: 1,
        }, {
            name: 'Banana',
            expandable: false,
            level: 1,
        }, {
            name: 'Fruit loops',
            expandable: false,
            level: 1,
        }, {
            name: 'Vegetables',
            expandable: true,
            level: 0,
        }, {
            name: 'Green',
            expandable: true,
            level: 1,
        }, {
            name: 'Broccoli',
            expandable: false,
            level: 2,
        }, {
            name: 'Brussels sprouts',
            expandable: false,
            level: 2,
        }, {
            name: 'Orange',
            expandable: true,
            level: 1,
        }, {
            name: 'Pumpkins',
            expandable: false,
            level: 2,
        }, {
            name: 'Carrots',
            expandable: false,
            level: 2,
        }
    ];
    /**
     * @title Tree with flat nodes
     */
    var CdkTreeFlatExample = /** @class */ (function () {
        function CdkTreeFlatExample() {
            this.treeControl = new i1.FlatTreeControl(function (node) { return node.level; }, function (node) { return node.expandable; });
            this.dataSource = new collections.ArrayDataSource(TREE_DATA);
            this.hasChild = function (_, node) { return node.expandable; };
        }
        CdkTreeFlatExample.prototype.getParentNode = function (node) {
            var nodeIndex = TREE_DATA.indexOf(node);
            for (var i = nodeIndex - 1; i >= 0; i--) {
                if (TREE_DATA[i].level === node.level - 1) {
                    return TREE_DATA[i];
                }
            }
            return null;
        };
        CdkTreeFlatExample.prototype.shouldRender = function (node) {
            var parent = this.getParentNode(node);
            return !parent || parent.isExpanded;
        };
        return CdkTreeFlatExample;
    }());
    CdkTreeFlatExample.ɵfac = function CdkTreeFlatExample_Factory(t) { return new (t || CdkTreeFlatExample)(); };
    CdkTreeFlatExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTreeFlatExample, selectors: [["cdk-tree-flat-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef"], ["cdkTreeNodePadding", "", "class", "example-tree-node", 3, "display", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], ["cdkTreeNodePadding", "", 1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", "", 3, "click"], [1, "mat-icon-rtl-mirror"]], template: function CdkTreeFlatExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-tree", 0);
                i0.ɵɵtemplate(1, CdkTreeFlatExample_cdk_tree_node_1_Template, 3, 3, "cdk-tree-node", 1);
                i0.ɵɵtemplate(2, CdkTreeFlatExample_cdk_tree_node_2_Template, 5, 7, "cdk-tree-node", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
            }
        }, directives: [i1.CdkTree, i1.CdkTreeNodeDef, i1.CdkTreeNode, i1.CdkTreeNodePadding, i2.MatButton, i1.CdkTreeNodeToggle, i3.MatIcon], styles: [".example-tree-node[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CdkTreeFlatExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-tree-flat-example',
                        templateUrl: 'cdk-tree-flat-example.html',
                        styleUrls: ['cdk-tree-flat-example.css'],
                    }]
            }], null, null);
    })();

    function CdkTreeNestedExample_cdk_nested_tree_node_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "cdk-nested-tree-node", 3);
            i0.ɵɵelement(1, "button", 4);
            i0.ɵɵtext(2);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r2 = ctx.$implicit;
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", node_r2.name, " ");
        }
    }
    function CdkTreeNestedExample_cdk_nested_tree_node_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "cdk-nested-tree-node", 3);
            i0.ɵɵelementStart(1, "button", 5);
            i0.ɵɵelementStart(2, "mat-icon", 6);
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtext(4);
            i0.ɵɵelementStart(5, "div");
            i0.ɵɵelementContainer(6, 7);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var node_r3 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵattribute("aria-label", "Toggle " + node_r3.name);
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate1(" ", ctx_r1.treeControl.isExpanded(node_r3) ? "expand_more" : "chevron_right", " ");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", node_r3.name, " ");
            i0.ɵɵadvance(1);
            i0.ɵɵclassProp("example-tree-invisible", !ctx_r1.treeControl.isExpanded(node_r3));
        }
    }
    var TREE_DATA$1 = [
        {
            name: 'Fruit',
            children: [
                { name: 'Apple' },
                { name: 'Banana' },
                { name: 'Fruit loops' },
            ]
        }, {
            name: 'Vegetables',
            children: [
                {
                    name: 'Green',
                    children: [
                        { name: 'Broccoli' },
                        { name: 'Brussels sprouts' },
                    ]
                }, {
                    name: 'Orange',
                    children: [
                        { name: 'Pumpkins' },
                        { name: 'Carrots' },
                    ]
                },
            ]
        },
    ];
    /**
     * @title Tree with nested nodes
     */
    var CdkTreeNestedExample = /** @class */ (function () {
        function CdkTreeNestedExample() {
            this.treeControl = new i1.NestedTreeControl(function (node) { return node.children; });
            this.dataSource = new collections.ArrayDataSource(TREE_DATA$1);
            this.hasChild = function (_, node) { return !!node.children && node.children.length > 0; };
        }
        return CdkTreeNestedExample;
    }());
    CdkTreeNestedExample.ɵfac = function CdkTreeNestedExample_Factory(t) { return new (t || CdkTreeNestedExample)(); };
    CdkTreeNestedExample.ɵcmp = i0.ɵɵdefineComponent({ type: CdkTreeNestedExample, selectors: [["cdk-tree-nested-example"]], decls: 3, vars: 3, consts: [[3, "dataSource", "treeControl"], ["class", "example-tree-node", 4, "cdkTreeNodeDef"], ["class", "example-tree-node", 4, "cdkTreeNodeDef", "cdkTreeNodeDefWhen"], [1, "example-tree-node"], ["mat-icon-button", "", "disabled", ""], ["mat-icon-button", "", "cdkTreeNodeToggle", ""], [1, "mat-icon-rtl-mirror"], ["cdkTreeNodeOutlet", ""]], template: function CdkTreeNestedExample_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "cdk-tree", 0);
                i0.ɵɵtemplate(1, CdkTreeNestedExample_cdk_nested_tree_node_1_Template, 3, 1, "cdk-nested-tree-node", 1);
                i0.ɵɵtemplate(2, CdkTreeNestedExample_cdk_nested_tree_node_2_Template, 7, 5, "cdk-nested-tree-node", 2);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("dataSource", ctx.dataSource)("treeControl", ctx.treeControl);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("cdkTreeNodeDefWhen", ctx.hasChild);
            }
        }, directives: [i1.CdkTree, i1.CdkTreeNodeDef, i1.CdkNestedTreeNode, i2.MatButton, i1.CdkTreeNodeToggle, i3.MatIcon, i1.CdkTreeNodeOutlet], styles: [".example-tree-invisible[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.example-tree[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], .example-tree[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n  list-style-type: none;\n}\n.example-tree-node[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.example-tree-node[_ngcontent-%COMP%]   .example-tree-node[_ngcontent-%COMP%] {\n  padding-left: 40px;\n}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CdkTreeNestedExample, [{
                type: i0.Component,
                args: [{
                        selector: 'cdk-tree-nested-example',
                        templateUrl: 'cdk-tree-nested-example.html',
                        styleUrls: ['cdk-tree-nested-example.css'],
                    }]
            }], null, null);
    })();

    var EXAMPLES = [
        CdkTreeFlatExample,
        CdkTreeNestedExample,
    ];
    var CdkTreeExamplesModule = /** @class */ (function () {
        function CdkTreeExamplesModule() {
        }
        return CdkTreeExamplesModule;
    }());
    CdkTreeExamplesModule.ɵmod = i0.ɵɵdefineNgModule({ type: CdkTreeExamplesModule });
    CdkTreeExamplesModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CdkTreeExamplesModule_Factory(t) { return new (t || CdkTreeExamplesModule)(); }, imports: [[
                i1.CdkTreeModule,
                i2.MatButtonModule,
                i3.MatIconModule,
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CdkTreeExamplesModule, { declarations: [CdkTreeFlatExample,
                CdkTreeNestedExample], imports: [i1.CdkTreeModule,
                i2.MatButtonModule,
                i3.MatIconModule], exports: [CdkTreeFlatExample,
                CdkTreeNestedExample] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(CdkTreeExamplesModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [
                            i1.CdkTreeModule,
                            i2.MatButtonModule,
                            i3.MatIconModule,
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

    exports.CdkTreeExamplesModule = CdkTreeExamplesModule;
    exports.CdkTreeFlatExample = CdkTreeFlatExample;
    exports.CdkTreeNestedExample = CdkTreeNestedExample;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=components-examples-cdk-tree.umd.js.map
