(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{Cet0:function(e,t,c){"use strict";c.r(t),c.d(t,"ButtonToggleAppearanceExample",(function(){return i})),c.d(t,"ButtonToggleExamplesModule",(function(){return r})),c.d(t,"ButtonToggleExclusiveExample",(function(){return o})),c.d(t,"ButtonToggleOverviewExample",(function(){return a}));var l=c("fXoL"),n=c("Ynp+"),s=c("NFeN");let i=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(l.Rb)({type:e,selectors:[["button-toggle-appearance-example"]],decls:18,vars:0,consts:[["name","fontStyle","aria-label","Font Style"],["value","bold"],["value","italic"],["value","underline"],["appearance","legacy","name","fontStyle","aria-label","Font Style"]],template:function(e,t){1&e&&(Object(l.dc)(0,"p"),Object(l.Qc)(1," Default appearance: "),Object(l.dc)(2,"mat-button-toggle-group",0),Object(l.dc)(3,"mat-button-toggle",1),Object(l.Qc)(4,"Bold"),Object(l.cc)(),Object(l.dc)(5,"mat-button-toggle",2),Object(l.Qc)(6,"Italic"),Object(l.cc)(),Object(l.dc)(7,"mat-button-toggle",3),Object(l.Qc)(8,"Underline"),Object(l.cc)(),Object(l.cc)(),Object(l.cc)(),Object(l.dc)(9,"p"),Object(l.Qc)(10," Legacy appearance: "),Object(l.dc)(11,"mat-button-toggle-group",4),Object(l.dc)(12,"mat-button-toggle",1),Object(l.Qc)(13,"Bold"),Object(l.cc)(),Object(l.dc)(14,"mat-button-toggle",2),Object(l.Qc)(15,"Italic"),Object(l.cc)(),Object(l.dc)(16,"mat-button-toggle",3),Object(l.Qc)(17,"Underline"),Object(l.cc)(),Object(l.cc)(),Object(l.cc)())},directives:[n.b,n.a],styles:["mat-button-toggle-group[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}"]}),e})(),o=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(l.Rb)({type:e,selectors:[["button-toggle-exclusive-example"]],decls:16,vars:1,consts:[["group","matButtonToggleGroup"],["value","left","aria-label","Text align left"],["value","center","aria-label","Text align center"],["value","right","aria-label","Text align right"],["value","justify","disabled","","aria-label","Text align justify"],[1,"example-selected-value"]],template:function(e,t){if(1&e&&(Object(l.dc)(0,"mat-button-toggle-group",null,0),Object(l.dc)(2,"mat-button-toggle",1),Object(l.dc)(3,"mat-icon"),Object(l.Qc)(4,"format_align_left"),Object(l.cc)(),Object(l.cc)(),Object(l.dc)(5,"mat-button-toggle",2),Object(l.dc)(6,"mat-icon"),Object(l.Qc)(7,"format_align_center"),Object(l.cc)(),Object(l.cc)(),Object(l.dc)(8,"mat-button-toggle",3),Object(l.dc)(9,"mat-icon"),Object(l.Qc)(10,"format_align_right"),Object(l.cc)(),Object(l.cc)(),Object(l.dc)(11,"mat-button-toggle",4),Object(l.dc)(12,"mat-icon"),Object(l.Qc)(13,"format_align_justify"),Object(l.cc)(),Object(l.cc)(),Object(l.cc)(),Object(l.dc)(14,"div",5),Object(l.Qc)(15),Object(l.cc)()),2&e){const e=Object(l.Bc)(1);Object(l.Lb)(15),Object(l.Sc)("Selected value: ",e.value,"")}},directives:[n.b,n.a,s.a],styles:[".example-selected-value[_ngcontent-%COMP%] {\n  margin: 15px 0;\n}"]}),e})(),a=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(l.Rb)({type:e,selectors:[["button-toggle-overview-example"]],decls:7,vars:0,consts:[["name","fontStyle","aria-label","Font Style"],["value","bold"],["value","italic"],["value","underline"]],template:function(e,t){1&e&&(Object(l.dc)(0,"mat-button-toggle-group",0),Object(l.dc)(1,"mat-button-toggle",1),Object(l.Qc)(2,"Bold"),Object(l.cc)(),Object(l.dc)(3,"mat-button-toggle",2),Object(l.Qc)(4,"Italic"),Object(l.cc)(),Object(l.dc)(5,"mat-button-toggle",3),Object(l.Qc)(6,"Underline"),Object(l.cc)(),Object(l.cc)())},directives:[n.b,n.a],encapsulation:2}),e})(),r=(()=>{class e{}return e.\u0275mod=Object(l.Vb)({type:e}),e.\u0275inj=Object(l.Ub)({factory:function(t){return new(t||e)},imports:[[n.c,s.b]]}),e})()},"Ynp+":function(e,t,c){"use strict";c.d(t,"a",(function(){return g})),c.d(t,"b",(function(){return r})),c.d(t,"c",(function(){return b}));var l=c("8LU1"),n=c("0EQZ"),s=c("fXoL"),i=(c("3Pt+"),c("FKr1"));let o=0;class a{constructor(e,t){this.source=e,this.value=t}}class r{constructor(e,t){this._changeDetector=e,this._vertical=!1,this._multiple=!1,this._disabled=!1,this._controlValueAccessorChangeFn=()=>{},this._onTouched=()=>{},this._name="mat-button-toggle-group-"+o++,this.valueChange=new s.r,this.change=new s.r,this.appearance=t&&t.appearance?t.appearance:"standard"}get name(){return this._name}set name(e){this._name=e,this._buttonToggles&&this._buttonToggles.forEach(e=>{e.name=this._name,e._markForCheck()})}get vertical(){return this._vertical}set vertical(e){this._vertical=Object(l.c)(e)}get value(){const e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(e=>e.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}get selected(){const e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=Object(l.c)(e)}get disabled(){return this._disabled}set disabled(e){this._disabled=Object(l.c)(e),this._buttonToggles&&this._buttonToggles.forEach(e=>e._markForCheck())}ngOnInit(){this._selectionModel=new n.c(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked))}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_emitChangeEvent(){const e=this.selected,t=Array.isArray(e)?e[e.length-1]:e,c=new a(t,this.value);this._controlValueAccessorChangeFn(c.value),this.change.emit(c)}_syncButtonToggle(e,t,c=!1,l=!1){this.multiple||!this.selected||e.checked||(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):l=!0,l?Promise.resolve().then(()=>this._updateModelValue(c)):this._updateModelValue(c)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return void 0!==this._rawValue&&(this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>null!=e.value&&t===e.value):e.value===this._rawValue)}_setSelectionByValue(e){this._rawValue=e,this._buttonToggles&&(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(e=>this._selectValue(e))):(this._clearSelection(),this._selectValue(e)))}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>e.checked=!1)}_selectValue(e){const t=this._buttonToggles.find(t=>null!=t.value&&t.value===e);t&&(t.checked=!0,this._selectionModel.select(t))}_updateModelValue(e){e&&this._emitChangeEvent(),this.valueChange.emit(this.value)}}class u{}const h=Object(i.w)(u);class g extends h{constructor(e,t,c,l,n,i){super(),this._changeDetectorRef=t,this._elementRef=c,this._focusMonitor=l,this._isSingleSelector=!1,this._checked=!1,this.ariaLabelledby=null,this._disabled=!1,this.change=new s.r;const o=Number(n);this.tabIndex=o||0===o?o:null,this.buttonToggleGroup=e,this.appearance=i&&i.appearance?i.appearance:"standard"}get buttonId(){return this.id+"-button"}get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){const t=Object(l.c)(e);t!==this._checked&&(this._checked=t,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=Object(l.c)(e)}ngOnInit(){const e=this.buttonToggleGroup;this._isSingleSelector=e&&!e.multiple,this.id=this.id||"mat-button-toggle-"+o++,this._isSingleSelector&&(this.name=e.name),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){const e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){const e=!!this._isSingleSelector||!this._checked;e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.change.emit(new a(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}}class b{}}}]);