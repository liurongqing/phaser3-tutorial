(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"1khm":function(t,e,c){"use strict";c.r(e),c.d(e,"CdkPortalExamplesModule",(function(){return s})),c.d(e,"CdkPortalOverviewExample",(function(){return p})),c.d(e,"ComponentPortalExample",(function(){return b}));var n=c("+rOU"),o=c("fXoL");const l=["templatePortalContent"],r=["domPortalContent"];function a(t,e){}function i(t,e){1&t&&Object(o.Qc)(0,"Hello, this is a template portal")}let p=(()=>{class t{constructor(t){this._viewContainerRef=t}ngAfterViewInit(){this.componentPortal=new n.d(b),this.templatePortal=new n.i(this.templatePortalContent,this._viewContainerRef),this.domPortal=new n.e(this.domPortalContent)}}return t.\u0275fac=function(e){return new(e||t)(Object(o.Xb)(o.Z))},t.\u0275cmp=Object(o.Rb)({type:t,selectors:[["cdk-portal-overview-example"]],viewQuery:function(t,e){var c;1&t&&(Object(o.Uc)(l,!0),Object(o.Uc)(r,!0)),2&t&&(Object(o.Ac)(c=Object(o.lc)())&&(e.templatePortalContent=c.first),Object(o.Ac)(c=Object(o.lc)())&&(e.domPortalContent=c.first))},decls:15,vars:1,consts:[[1,"example-portal-outlet"],[3,"cdkPortalOutlet"],["templatePortalContent",""],[3,"click"],["domPortalContent",""]],template:function(t,e){1&t&&(Object(o.dc)(0,"h2"),Object(o.Qc)(1,"The portal outlet is below:"),Object(o.cc)(),Object(o.dc)(2,"div",0),Object(o.Oc)(3,a,0,0,"ng-template",1),Object(o.cc)(),Object(o.Oc)(4,i,1,0,"ng-template",null,2,o.Pc),Object(o.dc)(6,"button",3),Object(o.kc)("click",(function(){return e.selectedPortal=e.componentPortal})),Object(o.Qc)(7,"Render component portal"),Object(o.cc)(),Object(o.dc)(8,"button",3),Object(o.kc)("click",(function(){return e.selectedPortal=e.templatePortal})),Object(o.Qc)(9,"Render template portal"),Object(o.cc)(),Object(o.dc)(10,"button",3),Object(o.kc)("click",(function(){return e.selectedPortal=e.domPortal})),Object(o.Qc)(11,"Render DOM portal"),Object(o.cc)(),Object(o.dc)(12,"div",null,4),Object(o.Qc)(14,"Hello, this is a DOM portal"),Object(o.cc)()),2&t&&(Object(o.Lb)(3),Object(o.uc)("cdkPortalOutlet",e.selectedPortal))},directives:[n.c],styles:[".example-portal-outlet[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  padding: 10px;\n  border: 1px dashed black;\n  width: 250px;\n  height: 250px;\n}"]}),t})(),b=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(o.Rb)({type:t,selectors:[["component-portal-example"]],decls:1,vars:0,template:function(t,e){1&t&&Object(o.Qc)(0,"Hello, this is a component portal")},encapsulation:2}),t})(),s=(()=>{class t{}return t.\u0275mod=Object(o.Vb)({type:t}),t.\u0275inj=Object(o.Ub)({factory:function(e){return new(e||t)},imports:[[n.h]]}),t})()}}]);