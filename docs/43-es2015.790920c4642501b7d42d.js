(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{"/t3+":function(c,t,e){"use strict";e.d(t,"a",(function(){return j})),e.d(t,"b",(function(){return p})),e.d(t,"c",(function(){return O}));var b=e("FKr1"),o=e("ofXK"),a=e("fXoL"),n=e("nLfN");const r=["*",[["mat-toolbar-row"]]],i=["*","mat-toolbar-row"];class l{constructor(c){this._elementRef=c}}const s=Object(b.A)(l);let O=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275dir=a.Rb({type:c,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),c})(),j=(()=>{class c extends s{constructor(c,t,e){super(c),this._platform=t,this._document=e}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return c.\u0275fac=function(t){return new(t||c)(a.Wb(a.o),a.Wb(n.a),a.Wb(o.e))},c.\u0275cmp=a.Qb({type:c,selectors:[["mat-toolbar"]],contentQueries:function(c,t,e){var b;1&c&&a.Pb(e,O,!0),2&c&&a.zc(b=a.kc())&&(t._toolbarRows=b)},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(c,t){2&c&&a.Ob("mat-toolbar-multiple-rows",t._toolbarRows.length>0)("mat-toolbar-single-row",0===t._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[a.Ib],ngContentSelectors:i,decls:2,vars:0,template:function(c,t){1&c&&(a.sc(r),a.rc(0),a.rc(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}\n"],encapsulation:2,changeDetection:0}),c})(),p=(()=>{class c{}return c.\u0275mod=a.Ub({type:c}),c.\u0275inj=a.Tb({factory:function(t){return new(t||c)},imports:[[b.k],b.k]}),c})()},gENG:function(c,t,e){"use strict";e.r(t),e.d(t,"ToolbarBasicExample",(function(){return r})),e.d(t,"ToolbarExamplesModule",(function(){return s})),e.d(t,"ToolbarMultirowExample",(function(){return i})),e.d(t,"ToolbarOverviewExample",(function(){return l}));var b=e("fXoL"),o=e("bTqV"),a=e("NFeN"),n=e("/t3+");let r=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=Object(b.Qb)({type:c,selectors:[["toolbar-basic-example"]],decls:13,vars:0,consts:[["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"]],template:function(c,t){1&c&&(Object(b.cc)(0,"mat-toolbar"),Object(b.cc)(1,"button",0),Object(b.cc)(2,"mat-icon"),Object(b.Qc)(3,"menu"),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(4,"span"),Object(b.Qc)(5,"My App"),Object(b.bc)(),Object(b.Xb)(6,"span",1),Object(b.cc)(7,"button",2),Object(b.cc)(8,"mat-icon"),Object(b.Qc)(9,"favorite"),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(10,"button",3),Object(b.cc)(11,"mat-icon"),Object(b.Qc)(12,"share"),Object(b.bc)(),Object(b.bc)(),Object(b.bc)())},directives:[n.a,o.b,a.a],styles:[".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"]}),c})(),i=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=Object(b.Qb)({type:c,selectors:[["toolbar-multirow-example"]],decls:18,vars:0,consts:[["color","primary"],[1,"example-spacer"],["aria-hidden","false","aria-label","Example user verified icon",1,"example-icon"],["aria-hidden","false","aria-label","Example heart icon",1,"example-icon"],["aria-hidden","false","aria-label","Example delete icon",1,"example-icon"]],template:function(c,t){1&c&&(Object(b.cc)(0,"mat-toolbar",0),Object(b.cc)(1,"mat-toolbar-row"),Object(b.cc)(2,"span"),Object(b.Qc)(3,"Custom Toolbar"),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(4,"mat-toolbar-row"),Object(b.cc)(5,"span"),Object(b.Qc)(6,"Second Line"),Object(b.bc)(),Object(b.Xb)(7,"span",1),Object(b.cc)(8,"mat-icon",2),Object(b.Qc)(9,"verified_user"),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(10,"mat-toolbar-row"),Object(b.cc)(11,"span"),Object(b.Qc)(12,"Third Line"),Object(b.bc)(),Object(b.Xb)(13,"span",1),Object(b.cc)(14,"mat-icon",3),Object(b.Qc)(15,"favorite"),Object(b.bc)(),Object(b.cc)(16,"mat-icon",4),Object(b.Qc)(17,"delete"),Object(b.bc)(),Object(b.bc)(),Object(b.bc)())},directives:[n.a,n.c,a.a],styles:[".example-icon[_ngcontent-%COMP%] {\n  padding: 0 14px;\n}\n\n.example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"]}),c})(),l=(()=>{class c{}return c.\u0275fac=function(t){return new(t||c)},c.\u0275cmp=Object(b.Qb)({type:c,selectors:[["toolbar-overview-example"]],decls:51,vars:0,consts:[["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],[1,"example-spacer"],["mat-icon-button","","aria-label","Example icon-button with heart icon",1,"example-icon","favorite-icon"],["mat-icon-button","","aria-label","Example icon-button with share icon",1,"example-icon"],["color","primary"]],template:function(c,t){1&c&&(Object(b.cc)(0,"p"),Object(b.cc)(1,"mat-toolbar"),Object(b.cc)(2,"span"),Object(b.Qc)(3,"My Application"),Object(b.bc)(),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(4,"p"),Object(b.cc)(5,"mat-toolbar"),Object(b.cc)(6,"button",0),Object(b.cc)(7,"mat-icon"),Object(b.Qc)(8,"menu"),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(9,"span"),Object(b.Qc)(10,"My App"),Object(b.bc)(),Object(b.Xb)(11,"span",1),Object(b.cc)(12,"button",2),Object(b.cc)(13,"mat-icon"),Object(b.Qc)(14,"favorite"),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(15,"button",3),Object(b.cc)(16,"mat-icon"),Object(b.Qc)(17,"share"),Object(b.bc)(),Object(b.bc)(),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(18,"p"),Object(b.cc)(19,"mat-toolbar",4),Object(b.cc)(20,"button",0),Object(b.cc)(21,"mat-icon"),Object(b.Qc)(22,"menu"),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(23,"span"),Object(b.Qc)(24,"My App"),Object(b.bc)(),Object(b.Xb)(25,"span",1),Object(b.cc)(26,"button",2),Object(b.cc)(27,"mat-icon"),Object(b.Qc)(28,"favorite"),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(29,"button",3),Object(b.cc)(30,"mat-icon"),Object(b.Qc)(31,"share"),Object(b.bc)(),Object(b.bc)(),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(32,"p"),Object(b.cc)(33,"mat-toolbar",4),Object(b.cc)(34,"mat-toolbar-row"),Object(b.cc)(35,"span"),Object(b.Qc)(36,"My App"),Object(b.bc)(),Object(b.Xb)(37,"span",1),Object(b.cc)(38,"button",0),Object(b.cc)(39,"mat-icon"),Object(b.Qc)(40,"menu"),Object(b.bc)(),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(41,"mat-toolbar-row"),Object(b.cc)(42,"span"),Object(b.Qc)(43,"Second Line"),Object(b.bc)(),Object(b.Xb)(44,"span",1),Object(b.cc)(45,"button",2),Object(b.cc)(46,"mat-icon"),Object(b.Qc)(47,"favorite"),Object(b.bc)(),Object(b.bc)(),Object(b.cc)(48,"button",3),Object(b.cc)(49,"mat-icon"),Object(b.Qc)(50,"share"),Object(b.bc)(),Object(b.bc)(),Object(b.bc)(),Object(b.bc)(),Object(b.bc)())},directives:[n.a,o.b,a.a,n.c],styles:[".example-spacer[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}"]}),c})(),s=(()=>{class c{}return c.\u0275mod=Object(b.Ub)({type:c}),c.\u0275inj=Object(b.Tb)({factory:function(t){return new(t||c)},imports:[[o.c,a.b,n.b]]}),c})()}}]);