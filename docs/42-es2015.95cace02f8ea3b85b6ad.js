(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{Dh3D:function(t,e,r){"use strict";r.d(e,"a",(function(){return j})),r.d(e,"b",(function(){return D})),r.d(e,"c",(function(){return x}));var i=r("fXoL"),a=r("8LU1"),s=r("FKr1"),o=r("FtGj"),c=r("XNiG"),n=r("VRyK"),d=r("R0Ic"),h=r("ofXK"),b=r("u47x");const l=["mat-sort-header",""];function m(t,e){if(1&t){const t=i.dc();i.cc(0,"div",3),i.jc("@arrowPosition.start",(function(){return i.Ec(t),i.nc()._disableViewStateAnimation=!0}))("@arrowPosition.done",(function(){return i.Ec(t),i.nc()._disableViewStateAnimation=!1})),i.Xb(1,"div",4),i.cc(2,"div",5),i.Xb(3,"div",6),i.Xb(4,"div",7),i.Xb(5,"div",8),i.bc(),i.bc()}if(2&t){const t=i.nc();i.tc("@arrowOpacity",t._getArrowViewState())("@arrowPosition",t._getArrowViewState())("@allowChildren",t._getArrowDirectionState()),i.Lb(2),i.tc("@indicator",t._getArrowDirectionState()),i.Lb(1),i.tc("@leftPointer",t._getArrowDirectionState()),i.Lb(1),i.tc("@rightPointer",t._getArrowDirectionState())}}const O=["*"];class u{}const f=Object(s.E)(Object(s.C)(u));let j=(()=>{class t extends f{constructor(){super(...arguments),this.sortables=new Map,this._stateChanges=new c.a,this.start="asc",this._direction="",this.sortChange=new i.r}get direction(){return this._direction}set direction(t){this._direction=t}get disableClear(){return this._disableClear}set disableClear(t){this._disableClear=Object(a.c)(t)}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){if(!t)return"";let e=function(t,e){let r=["asc","desc"];return"desc"==t&&r.reverse(),e||r.push(""),r}(t.start||this.start,null!=t.disableClear?t.disableClear:this.disableClear),r=e.indexOf(this.direction)+1;return r>=e.length&&(r=0),e[r]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return t.\u0275fac=function(e){return _(e||t)},t.\u0275dir=i.Rb({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"],active:["matSortActive","active"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[i.Ib,i.Jb]}),t})();const _=i.ec(j),p=s.b.ENTERING+" "+s.a.STANDARD_CURVE,g={indicator:Object(d.n)("indicator",[Object(d.k)("active-asc, asc",Object(d.l)({transform:"translateY(0px)"})),Object(d.k)("active-desc, desc",Object(d.l)({transform:"translateY(10px)"})),Object(d.m)("active-asc <=> active-desc",Object(d.e)(p))]),leftPointer:Object(d.n)("leftPointer",[Object(d.k)("active-asc, asc",Object(d.l)({transform:"rotate(-45deg)"})),Object(d.k)("active-desc, desc",Object(d.l)({transform:"rotate(45deg)"})),Object(d.m)("active-asc <=> active-desc",Object(d.e)(p))]),rightPointer:Object(d.n)("rightPointer",[Object(d.k)("active-asc, asc",Object(d.l)({transform:"rotate(45deg)"})),Object(d.k)("active-desc, desc",Object(d.l)({transform:"rotate(-45deg)"})),Object(d.m)("active-asc <=> active-desc",Object(d.e)(p))]),arrowOpacity:Object(d.n)("arrowOpacity",[Object(d.k)("desc-to-active, asc-to-active, active",Object(d.l)({opacity:1})),Object(d.k)("desc-to-hint, asc-to-hint, hint",Object(d.l)({opacity:.54})),Object(d.k)("hint-to-desc, active-to-desc, desc, hint-to-asc, active-to-asc, asc, void",Object(d.l)({opacity:0})),Object(d.m)("* => asc, * => desc, * => active, * => hint, * => void",Object(d.e)("0ms")),Object(d.m)("* <=> *",Object(d.e)(p))]),arrowPosition:Object(d.n)("arrowPosition",[Object(d.m)("* => desc-to-hint, * => desc-to-active",Object(d.e)(p,Object(d.h)([Object(d.l)({transform:"translateY(-25%)"}),Object(d.l)({transform:"translateY(0)"})]))),Object(d.m)("* => hint-to-desc, * => active-to-desc",Object(d.e)(p,Object(d.h)([Object(d.l)({transform:"translateY(0)"}),Object(d.l)({transform:"translateY(25%)"})]))),Object(d.m)("* => asc-to-hint, * => asc-to-active",Object(d.e)(p,Object(d.h)([Object(d.l)({transform:"translateY(25%)"}),Object(d.l)({transform:"translateY(0)"})]))),Object(d.m)("* => hint-to-asc, * => active-to-asc",Object(d.e)(p,Object(d.h)([Object(d.l)({transform:"translateY(0)"}),Object(d.l)({transform:"translateY(-25%)"})]))),Object(d.k)("desc-to-hint, asc-to-hint, hint, desc-to-active, asc-to-active, active",Object(d.l)({transform:"translateY(0)"})),Object(d.k)("hint-to-desc, active-to-desc, desc",Object(d.l)({transform:"translateY(-25%)"})),Object(d.k)("hint-to-asc, active-to-asc, asc",Object(d.l)({transform:"translateY(25%)"}))]),allowChildren:Object(d.n)("allowChildren",[Object(d.m)("* <=> *",[Object(d.i)("@*",Object(d.f)(),{optional:!0})])])};let w=(()=>{class t{constructor(){this.changes=new c.a,this.sortButtonLabel=t=>"Change sorting for "+t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=Object(i.Sb)({factory:function(){return new t},token:t,providedIn:"root"}),t})();const v={provide:w,deps:[[new i.I,new i.S,w]],useFactory:function(t){return t||new w}};class S{}const C=Object(s.C)(S);let D=(()=>{class t extends C{constructor(t,e,r,i,a,s){super(),this._intl=t,this._sort=r,this._columnDef=i,this._focusMonitor=a,this._elementRef=s,this._showIndicatorHint=!1,this._arrowDirection="",this._disableViewStateAnimation=!1,this.arrowPosition="after",this._rerenderSubscription=Object(n.a)(r.sortChange,r._stateChanges,t.changes).subscribe(()=>{this._isSorted()&&this._updateArrowDirection(),!this._isSorted()&&this._viewState&&"active"===this._viewState.toState&&(this._disableViewStateAnimation=!1,this._setAnimationTransitionState({fromState:"active",toState:this._arrowDirection})),e.markForCheck()})}get disableClear(){return this._disableClear}set disableClear(t){this._disableClear=Object(a.c)(t)}ngOnInit(){!this.id&&this._columnDef&&(this.id=this._columnDef.name),this._updateArrowDirection(),this._setAnimationTransitionState({toState:this._isSorted()?"active":this._arrowDirection}),this._sort.register(this)}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(t=>this._setIndicatorHintVisible(!!t))}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._sort.deregister(this),this._rerenderSubscription.unsubscribe()}_setIndicatorHintVisible(t){this._isDisabled()&&t||(this._showIndicatorHint=t,this._isSorted()||(this._updateArrowDirection(),this._setAnimationTransitionState(this._showIndicatorHint?{fromState:this._arrowDirection,toState:"hint"}:{fromState:"hint",toState:this._arrowDirection})))}_setAnimationTransitionState(t){this._viewState=t,this._disableViewStateAnimation&&(this._viewState={toState:t.toState})}_toggleOnInteraction(){this._sort.sort(this),"hint"!==this._viewState.toState&&"active"!==this._viewState.toState||(this._disableViewStateAnimation=!0);const t=this._isSorted()?{fromState:this._arrowDirection,toState:"active"}:{fromState:"active",toState:this._arrowDirection};this._setAnimationTransitionState(t),this._showIndicatorHint=!1}_handleClick(){this._isDisabled()||this._toggleOnInteraction()}_handleKeydown(t){this._isDisabled()||t.keyCode!==o.o&&t.keyCode!==o.g||(t.preventDefault(),this._toggleOnInteraction())}_isSorted(){return this._sort.active==this.id&&("asc"===this._sort.direction||"desc"===this._sort.direction)}_getArrowDirectionState(){return`${this._isSorted()?"active-":""}${this._arrowDirection}`}_getArrowViewState(){const t=this._viewState.fromState;return(t?t+"-to-":"")+this._viewState.toState}_updateArrowDirection(){this._arrowDirection=this._isSorted()?this._sort.direction:this.start||this._sort.start}_isDisabled(){return this._sort.disabled||this.disabled}_getAriaSortAttribute(){return this._isSorted()?"asc"==this._sort.direction?"ascending":"descending":"none"}_renderArrow(){return!this._isDisabled()||this._isSorted()}}return t.\u0275fac=function(e){return new(e||t)(i.Wb(w),i.Wb(i.i),i.Wb(j,8),i.Wb("MAT_SORT_HEADER_COLUMN_DEF",8),i.Wb(b.h),i.Wb(i.o))},t.\u0275cmp=i.Qb({type:t,selectors:[["","mat-sort-header",""]],hostAttrs:[1,"mat-sort-header"],hostVars:3,hostBindings:function(t,e){1&t&&i.jc("click",(function(){return e._handleClick()}))("keydown",(function(t){return e._handleKeydown(t)}))("mouseenter",(function(){return e._setIndicatorHintVisible(!0)}))("mouseleave",(function(){return e._setIndicatorHintVisible(!1)})),2&t&&(i.Mb("aria-sort",e._getAriaSortAttribute()),i.Ob("mat-sort-header-disabled",e._isDisabled()))},inputs:{disabled:"disabled",arrowPosition:"arrowPosition",disableClear:"disableClear",id:["mat-sort-header","id"],start:"start"},exportAs:["matSortHeader"],features:[i.Ib],attrs:l,ngContentSelectors:O,decls:4,vars:6,consts:[["role","button",1,"mat-sort-header-container","mat-focus-indicator"],[1,"mat-sort-header-content"],["class","mat-sort-header-arrow",4,"ngIf"],[1,"mat-sort-header-arrow"],[1,"mat-sort-header-stem"],[1,"mat-sort-header-indicator"],[1,"mat-sort-header-pointer-left"],[1,"mat-sort-header-pointer-right"],[1,"mat-sort-header-pointer-middle"]],template:function(t,e){1&t&&(i.sc(),i.cc(0,"div",0),i.cc(1,"div",1),i.rc(2),i.bc(),i.Oc(3,m,6,6,"div",2),i.bc()),2&t&&(i.Ob("mat-sort-header-sorted",e._isSorted())("mat-sort-header-position-before","before"==e.arrowPosition),i.Mb("tabindex",e._isDisabled()?null:0),i.Lb(3),i.tc("ngIf",e._renderArrow()))},directives:[h.t],styles:[".mat-sort-header-container{display:flex;cursor:pointer;align-items:center;letter-spacing:normal;outline:0}[mat-sort-header].cdk-keyboard-focused .mat-sort-header-container,[mat-sort-header].cdk-program-focused .mat-sort-header-container{border-bottom:solid 1px currentColor}.mat-sort-header-disabled .mat-sort-header-container{cursor:default}.mat-sort-header-content{text-align:center;display:flex;align-items:center}.mat-sort-header-position-before{flex-direction:row-reverse}.mat-sort-header-arrow{height:12px;width:12px;min-width:12px;position:relative;display:flex;opacity:0}.mat-sort-header-arrow,[dir=rtl] .mat-sort-header-position-before .mat-sort-header-arrow{margin:0 0 0 6px}.mat-sort-header-position-before .mat-sort-header-arrow,[dir=rtl] .mat-sort-header-arrow{margin:0 6px 0 0}.mat-sort-header-stem{background:currentColor;height:10px;width:2px;margin:auto;display:flex;align-items:center}.cdk-high-contrast-active .mat-sort-header-stem{width:0;border-left:solid 2px}.mat-sort-header-indicator{width:100%;height:2px;display:flex;align-items:center;position:absolute;top:0;left:0}.mat-sort-header-pointer-middle{margin:auto;height:2px;width:2px;background:currentColor;transform:rotate(45deg)}.cdk-high-contrast-active .mat-sort-header-pointer-middle{width:0;height:0;border-top:solid 2px;border-left:solid 2px}.mat-sort-header-pointer-left,.mat-sort-header-pointer-right{background:currentColor;width:6px;height:2px;position:absolute;top:0}.cdk-high-contrast-active .mat-sort-header-pointer-left,.cdk-high-contrast-active .mat-sort-header-pointer-right{width:0;height:0;border-left:solid 6px;border-top:solid 2px}.mat-sort-header-pointer-left{transform-origin:right;left:0}.mat-sort-header-pointer-right{transform-origin:left;right:0}\n"],encapsulation:2,data:{animation:[g.indicator,g.leftPointer,g.rightPointer,g.arrowOpacity,g.arrowPosition,g.allowChildren]},changeDetection:0}),t})(),x=(()=>{class t{}return t.\u0275mod=i.Ub({type:t}),t.\u0275inj=i.Tb({factory:function(e){return new(e||t)},providers:[v],imports:[[h.c]]}),t})()},jtK4:function(t,e,r){"use strict";r.r(e),r.d(e,"SortExamplesModule",(function(){return d})),r.d(e,"SortOverviewExample",(function(){return c}));var i=r("ofXK"),a=r("fXoL"),s=r("Dh3D");function o(t,e){if(1&t&&(Object(a.cc)(0,"tr"),Object(a.cc)(1,"td"),Object(a.Qc)(2),Object(a.bc)(),Object(a.cc)(3,"td"),Object(a.Qc)(4),Object(a.bc)(),Object(a.cc)(5,"td"),Object(a.Qc)(6),Object(a.bc)(),Object(a.cc)(7,"td"),Object(a.Qc)(8),Object(a.bc)(),Object(a.cc)(9,"td"),Object(a.Qc)(10),Object(a.bc)(),Object(a.bc)()),2&t){const t=e.$implicit;Object(a.Lb)(2),Object(a.Rc)(t.name),Object(a.Lb)(2),Object(a.Rc)(t.calories),Object(a.Lb)(2),Object(a.Rc)(t.fat),Object(a.Lb)(2),Object(a.Rc)(t.carbs),Object(a.Lb)(2),Object(a.Rc)(t.protein)}}let c=(()=>{class t{constructor(){this.desserts=[{name:"Frozen yogurt",calories:159,fat:6,carbs:24,protein:4},{name:"Ice cream sandwich",calories:237,fat:9,carbs:37,protein:4},{name:"Eclair",calories:262,fat:16,carbs:24,protein:6},{name:"Cupcake",calories:305,fat:4,carbs:67,protein:4},{name:"Gingerbread",calories:356,fat:16,carbs:49,protein:4}],this.sortedData=this.desserts.slice()}sortData(t){const e=this.desserts.slice();this.sortedData=t.active&&""!==t.direction?e.sort((e,r)=>{const i="asc"===t.direction;switch(t.active){case"name":return n(e.name,r.name,i);case"calories":return n(e.calories,r.calories,i);case"fat":return n(e.fat,r.fat,i);case"carbs":return n(e.carbs,r.carbs,i);case"protein":return n(e.protein,r.protein,i);default:return 0}}):e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=Object(a.Qb)({type:t,selectors:[["sort-overview-example"]],decls:13,vars:1,consts:[["matSort","",3,"matSortChange"],["mat-sort-header","name"],["mat-sort-header","calories"],["mat-sort-header","fat"],["mat-sort-header","carbs"],["mat-sort-header","protein"],[4,"ngFor","ngForOf"]],template:function(t,e){1&t&&(Object(a.cc)(0,"table",0),Object(a.jc)("matSortChange",(function(t){return e.sortData(t)})),Object(a.cc)(1,"tr"),Object(a.cc)(2,"th",1),Object(a.Qc)(3,"Dessert (100g)"),Object(a.bc)(),Object(a.cc)(4,"th",2),Object(a.Qc)(5,"Calories"),Object(a.bc)(),Object(a.cc)(6,"th",3),Object(a.Qc)(7,"Fat (g)"),Object(a.bc)(),Object(a.cc)(8,"th",4),Object(a.Qc)(9,"Carbs (g)"),Object(a.bc)(),Object(a.cc)(10,"th",5),Object(a.Qc)(11,"Protein (g)"),Object(a.bc)(),Object(a.bc)(),Object(a.Oc)(12,o,11,5,"tr",6),Object(a.bc)()),2&t&&(Object(a.Lb)(12),Object(a.tc)("ngForOf",e.sortedData))},directives:[s.a,s.b,i.s],styles:[".mat-sort-header-container[_ngcontent-%COMP%] {\n  align-items: center;\n}"]}),t})();function n(t,e,r){return(t<e?-1:1)*(r?1:-1)}let d=(()=>{class t{}return t.\u0275mod=Object(a.Ub)({type:t}),t.\u0275inj=Object(a.Tb)({factory:function(e){return new(e||t)},imports:[[i.c,s.c]]}),t})()}}]);