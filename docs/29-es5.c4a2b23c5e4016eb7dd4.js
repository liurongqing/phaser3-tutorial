!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function i(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=l(e);if(t){var o=l(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return c(this,n)}}function c(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?s(e):t}function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{Q2Ze:function(t,n,r){"use strict";r.d(n,"a",(function(){return x})),r.d(n,"b",(function(){return m})),r.d(n,"c",(function(){return R})),r.d(n,"d",(function(){return y})),r.d(n,"e",(function(){return S})),r.d(n,"f",(function(){return C})),r.d(n,"g",(function(){return j})),r.d(n,"h",(function(){return M})),r.d(n,"i",(function(){return w})),r.d(n,"j",(function(){return O})),r.d(n,"k",(function(){return v}));var c=r("fXoL"),s=r("FKr1"),l=r("8LU1"),h=r("XNiG"),d=r("VRyK"),f=r("xgIS"),_=r("JX91"),p=r("1G5W"),g=r("IzEk");r("R0Ic");var b=0,m=function e(){u(this,e),this.id="mat-error-"+b++},y=function e(){u(this,e)};function O(e){return Error("A hint was already declared for 'align=\"".concat(e,"\"'."))}function v(){return Error("mat-form-field must contain a MatFormFieldControl.")}var k=0,C=function e(){u(this,e),this.align="start",this.id="mat-hint-"+k++},j=function e(){u(this,e)},M=function e(){u(this,e)},w=function e(){u(this,e)},I=0,F=Object(s.v)((function e(t){u(this,e),this._elementRef=t}),"primary"),x=new c.w("MatFormField"),R=function(t){o(r,t);var n=a(r);function r(e,t,i,o,a,c,s,l){var d;return u(this,r),(d=n.call(this,e))._elementRef=e,d._changeDetectorRef=t,d._dir=o,d._defaults=a,d._platform=c,d._ngZone=s,d._outlineGapCalculationNeededImmediately=!1,d._outlineGapCalculationNeededOnStable=!1,d._destroyed=new h.a,d._showAlwaysAnimate=!1,d._subscriptAnimationState="",d._hintLabel="",d._hintLabelId="mat-hint-"+I++,d._labelId="mat-form-field-label-"+I++,d._labelOptions=i||{},d.floatLabel=d._getDefaultFloatLabelState(),d._animationsEnabled="NoopAnimations"!==l,d.appearance=a&&a.appearance?a.appearance:"legacy",d._hideRequiredMarker=!(!a||null==a.hideRequiredMarker)&&a.hideRequiredMarker,d}return i(r,[{key:"_shouldAlwaysFloat",value:function(){return"always"===this.floatLabel&&!this._showAlwaysAnimate}},{key:"_canLabelFloat",value:function(){return"never"!==this.floatLabel}},{key:"getLabelId",value:function(){return this._hasFloatingLabel()?this._labelId:null}},{key:"getConnectedOverlayOrigin",value:function(){return this._connectionContainerRef||this._elementRef}},{key:"ngAfterContentInit",value:function(){var e=this;this._validateControlChild();var t=this._control;t.controlType&&this._elementRef.nativeElement.classList.add("mat-form-field-type-"+t.controlType),t.stateChanges.pipe(Object(_.a)(null)).subscribe((function(){e._validatePlaceholders(),e._syncDescribedByIds(),e._changeDetectorRef.markForCheck()})),t.ngControl&&t.ngControl.valueChanges&&t.ngControl.valueChanges.pipe(Object(p.a)(this._destroyed)).subscribe((function(){return e._changeDetectorRef.markForCheck()})),this._ngZone.runOutsideAngular((function(){e._ngZone.onStable.pipe(Object(p.a)(e._destroyed)).subscribe((function(){e._outlineGapCalculationNeededOnStable&&e.updateOutlineGap()}))})),Object(d.a)(this._prefixChildren.changes,this._suffixChildren.changes).subscribe((function(){e._outlineGapCalculationNeededOnStable=!0,e._changeDetectorRef.markForCheck()})),this._hintChildren.changes.pipe(Object(_.a)(null)).subscribe((function(){e._processHints(),e._changeDetectorRef.markForCheck()})),this._errorChildren.changes.pipe(Object(_.a)(null)).subscribe((function(){e._syncDescribedByIds(),e._changeDetectorRef.markForCheck()})),this._dir&&this._dir.change.pipe(Object(p.a)(this._destroyed)).subscribe((function(){"function"==typeof requestAnimationFrame?e._ngZone.runOutsideAngular((function(){requestAnimationFrame((function(){return e.updateOutlineGap()}))})):e.updateOutlineGap()}))}},{key:"ngAfterContentChecked",value:function(){this._validateControlChild(),this._outlineGapCalculationNeededImmediately&&this.updateOutlineGap()}},{key:"ngAfterViewInit",value:function(){this._subscriptAnimationState="enter",this._changeDetectorRef.detectChanges()}},{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}},{key:"_shouldForward",value:function(e){var t=this._control?this._control.ngControl:null;return t&&t[e]}},{key:"_hasPlaceholder",value:function(){return!!(this._control&&this._control.placeholder||this._placeholderChild)}},{key:"_hasLabel",value:function(){return!(!this._labelChildNonStatic&&!this._labelChildStatic)}},{key:"_shouldLabelFloat",value:function(){return this._canLabelFloat()&&(this._control&&this._control.shouldLabelFloat||this._shouldAlwaysFloat())}},{key:"_hideControlPlaceholder",value:function(){return"legacy"===this.appearance&&!this._hasLabel()||this._hasLabel()&&!this._shouldLabelFloat()}},{key:"_hasFloatingLabel",value:function(){return this._hasLabel()||"legacy"===this.appearance&&this._hasPlaceholder()}},{key:"_getDisplayedMessages",value:function(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}},{key:"_animateAndLockLabel",value:function(){var e=this;this._hasFloatingLabel()&&this._canLabelFloat()&&(this._animationsEnabled&&this._label&&(this._showAlwaysAnimate=!0,Object(f.a)(this._label.nativeElement,"transitionend").pipe(Object(g.a)(1)).subscribe((function(){e._showAlwaysAnimate=!1}))),this.floatLabel="always",this._changeDetectorRef.markForCheck())}},{key:"_validatePlaceholders",value:function(){}},{key:"_processHints",value:function(){this._validateHints(),this._syncDescribedByIds()}},{key:"_validateHints",value:function(){}},{key:"_getDefaultFloatLabelState",value:function(){return this._defaults&&this._defaults.floatLabel||this._labelOptions.float||"auto"}},{key:"_syncDescribedByIds",value:function(){if(this._control){var t=[];if(this._control.userAriaDescribedBy&&"string"==typeof this._control.userAriaDescribedBy&&t.push.apply(t,e(this._control.userAriaDescribedBy.split(" "))),"hint"===this._getDisplayedMessages()){var n=this._hintChildren?this._hintChildren.find((function(e){return"start"===e.align})):null,i=this._hintChildren?this._hintChildren.find((function(e){return"end"===e.align})):null;n?t.push(n.id):this._hintLabel&&t.push(this._hintLabelId),i&&t.push(i.id)}else this._errorChildren&&t.push.apply(t,e(this._errorChildren.map((function(e){return e.id}))));this._control.setDescribedByIds(t)}}},{key:"_validateControlChild",value:function(){}},{key:"updateOutlineGap",value:function(){var e=this._label?this._label.nativeElement:null;if("outline"===this.appearance&&e&&e.children.length&&e.textContent.trim()&&this._platform.isBrowser)if(this._isAttachedToDOM()){var t=0,n=0,i=this._connectionContainerRef.nativeElement,o=i.querySelectorAll(".mat-form-field-outline-start"),r=i.querySelectorAll(".mat-form-field-outline-gap");if(this._label&&this._label.nativeElement.children.length){var a=i.getBoundingClientRect();if(0===a.width&&0===a.height)return this._outlineGapCalculationNeededOnStable=!0,void(this._outlineGapCalculationNeededImmediately=!1);for(var c=this._getStartEnd(a),s=e.children,l=this._getStartEnd(s[0].getBoundingClientRect()),u=0,h=0;h<s.length;h++)u+=s[h].offsetWidth;t=Math.abs(l-c)-5,n=u>0?.75*u+10:0}for(var d=0;d<o.length;d++)o[d].style.width=t+"px";for(var f=0;f<r.length;f++)r[f].style.width=n+"px";this._outlineGapCalculationNeededOnStable=this._outlineGapCalculationNeededImmediately=!1}else this._outlineGapCalculationNeededImmediately=!0}},{key:"_getStartEnd",value:function(e){return this._dir&&"rtl"===this._dir.value?e.right:e.left}},{key:"_isAttachedToDOM",value:function(){var e=this._elementRef.nativeElement;if(e.getRootNode){var t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}},{key:"appearance",get:function(){return this._appearance},set:function(e){var t=this._appearance;this._appearance=e||this._defaults&&this._defaults.appearance||"legacy","outline"===this._appearance&&t!==e&&(this._outlineGapCalculationNeededOnStable=!0)}},{key:"hideRequiredMarker",get:function(){return this._hideRequiredMarker},set:function(e){this._hideRequiredMarker=Object(l.c)(e)}},{key:"hintLabel",get:function(){return this._hintLabel},set:function(e){this._hintLabel=e,this._processHints()}},{key:"floatLabel",get:function(){return"legacy"!==this.appearance&&"never"===this._floatLabel?"auto":this._floatLabel},set:function(e){e!==this._floatLabel&&(this._floatLabel=e||this._getDefaultFloatLabelState(),this._changeDetectorRef.markForCheck())}},{key:"_control",get:function(){return this._explicitFormFieldControl||this._controlNonStatic||this._controlStatic},set:function(e){this._explicitFormFieldControl=e}}]),r}(F),S=function e(){u(this,e)}},"ZTz/":function(t,n,r){"use strict";r.d(n,"a",(function(){return x})),r.d(n,"b",(function(){return R})),r.d(n,"c",(function(){return F})),r("rDax");var c=r("fXoL"),l=r("FKr1"),h=r("u47x"),d=r("8LU1"),f=r("0EQZ"),_=r("FtGj"),p=r("XNiG"),g=r("NXyV"),b=r("VRyK"),m=r("JX91"),y=r("eIep"),O=r("IzEk"),v=r("pLZG"),k=r("lJxs"),C=r("/uUt"),j=r("1G5W");r("R0Ic");var M=0,w=function e(t,n){u(this,e),this.source=t,this.value=n},I=Object(l.w)(Object(l.A)(Object(l.x)(Object(l.y)((function e(t,n,i,o,r){u(this,e),this._elementRef=t,this._defaultErrorStateMatcher=n,this._parentForm=i,this._parentFormGroup=o,this.ngControl=r}))))),F=function e(){u(this,e)},x=function(t){o(r,t);var n=a(r);function r(t,i,o,a,l,h,d,f,_,C,j,w,I,F){var x;return u(this,r),(x=n.call(this,l,a,d,f,C))._viewportRuler=t,x._changeDetectorRef=i,x._ngZone=o,x._dir=h,x._parentFormField=_,x.ngControl=C,x._liveAnnouncer=I,x._panelOpen=!1,x._required=!1,x._scrollTop=0,x._multiple=!1,x._compareWith=function(e,t){return e===t},x._uid="mat-select-"+M++,x._triggerAriaLabelledBy=null,x._destroy=new p.a,x._triggerFontSize=0,x._onChange=function(){},x._onTouched=function(){},x._valueId="mat-select-value-"+M++,x._transformOrigin="top",x._panelDoneAnimatingStream=new p.a,x._offsetY=0,x._positions=[{originX:"start",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"start",overlayY:"bottom"}],x._disableOptionCentering=!1,x._focused=!1,x.controlType="mat-select",x.ariaLabel="",x.optionSelectionChanges=Object(g.a)((function(){var t=x.options;return t?t.changes.pipe(Object(m.a)(t),Object(y.a)((function(){return Object(b.a).apply(void 0,e(t.map((function(e){return e.onSelectionChange}))))}))):x._ngZone.onStable.pipe(Object(O.a)(1),Object(y.a)((function(){return x.optionSelectionChanges})))})),x.openedChange=new c.r,x._openedStream=x.openedChange.pipe(Object(v.a)((function(e){return e})),Object(k.a)((function(){}))),x._closedStream=x.openedChange.pipe(Object(v.a)((function(e){return!e})),Object(k.a)((function(){}))),x.selectionChange=new c.r,x.valueChange=new c.r,x.ngControl&&(x.ngControl.valueAccessor=s(x)),x._scrollStrategyFactory=w,x._scrollStrategy=x._scrollStrategyFactory(),x.tabIndex=parseInt(j)||0,x.id=x.id,F&&(null!=F.disableOptionCentering&&(x.disableOptionCentering=F.disableOptionCentering),null!=F.typeaheadDebounceInterval&&(x.typeaheadDebounceInterval=F.typeaheadDebounceInterval)),x}return i(r,[{key:"ngOnInit",value:function(){var e=this;this._selectionModel=new f.c(this.multiple),this.stateChanges.next(),this._panelDoneAnimatingStream.pipe(Object(C.a)(),Object(j.a)(this._destroy)).subscribe((function(){e.panelOpen?(e._scrollTop=0,e.openedChange.emit(!0)):(e.openedChange.emit(!1),e.overlayDir.offsetX=0,e._changeDetectorRef.markForCheck())})),this._viewportRuler.change().pipe(Object(j.a)(this._destroy)).subscribe((function(){e._panelOpen&&(e._triggerRect=e.trigger.nativeElement.getBoundingClientRect(),e._changeDetectorRef.markForCheck())}))}},{key:"ngAfterContentInit",value:function(){var e=this;this._initKeyManager(),this._selectionModel.changed.pipe(Object(j.a)(this._destroy)).subscribe((function(e){e.added.forEach((function(e){return e.select()})),e.removed.forEach((function(e){return e.deselect()}))})),this.options.changes.pipe(Object(m.a)(null),Object(j.a)(this._destroy)).subscribe((function(){e._resetOptions(),e._initializeSelection()}))}},{key:"ngDoCheck",value:function(){var e=this._getTriggerAriaLabelledby();if(e!==this._triggerAriaLabelledBy){var t=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?t.setAttribute("aria-labelledby",e):t.removeAttribute("aria-labelledby")}this.ngControl&&this.updateErrorState()}},{key:"ngOnChanges",value:function(e){e.disabled&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this._typeaheadDebounceInterval)}},{key:"ngOnDestroy",value:function(){this._destroy.next(),this._destroy.complete(),this.stateChanges.complete()}},{key:"toggle",value:function(){this.panelOpen?this.close():this.open()}},{key:"open",value:function(){var e=this;!this.disabled&&this.options&&this.options.length&&!this._panelOpen&&(this._triggerRect=this.trigger.nativeElement.getBoundingClientRect(),this._triggerFontSize=parseInt(getComputedStyle(this.trigger.nativeElement).fontSize||"0"),this._panelOpen=!0,this._keyManager.withHorizontalOrientation(null),this._calculateOverlayPosition(),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this._ngZone.onStable.pipe(Object(O.a)(1)).subscribe((function(){e._triggerFontSize&&e.overlayDir.overlayRef&&e.overlayDir.overlayRef.overlayElement&&(e.overlayDir.overlayRef.overlayElement.style.fontSize=e._triggerFontSize+"px")})))}},{key:"close",value:function(){this._panelOpen&&(this._panelOpen=!1,this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched())}},{key:"writeValue",value:function(e){this.value=e}},{key:"registerOnChange",value:function(e){this._onChange=e}},{key:"registerOnTouched",value:function(e){this._onTouched=e}},{key:"setDisabledState",value:function(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}},{key:"_isRtl",value:function(){return!!this._dir&&"rtl"===this._dir.value}},{key:"_handleKeydown",value:function(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}},{key:"_handleClosedKeydown",value:function(e){var t=e.keyCode,n=t===_.e||t===_.q||t===_.j||t===_.n,i=t===_.g||t===_.o,o=this._keyManager;if(!o.isTyping()&&i&&!Object(_.t)(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){var r=this.selected;o.onKeydown(e);var a=this.selected;a&&r!==a&&this._liveAnnouncer.announce(a.viewValue,1e4)}}},{key:"_handleOpenKeydown",value:function(e){var t=this._keyManager,n=e.keyCode,i=n===_.e||n===_.q,o=t.isTyping();if(i&&e.altKey)e.preventDefault(),this.close();else if(o||n!==_.g&&n!==_.o||!t.activeItem||Object(_.t)(e))if(!o&&this._multiple&&n===_.a&&e.ctrlKey){e.preventDefault();var r=this.options.some((function(e){return!e.disabled&&!e.selected}));this.options.forEach((function(e){e.disabled||(r?e.select():e.deselect())}))}else{var a=t.activeItemIndex;t.onKeydown(e),this._multiple&&i&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==a&&t.activeItem._selectViaInteraction()}else e.preventDefault(),t.activeItem._selectViaInteraction()}},{key:"_onFocus",value:function(){this.disabled||(this._focused=!0,this.stateChanges.next())}},{key:"_onBlur",value:function(){this._focused=!1,this.disabled||this.panelOpen||(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}},{key:"_onAttached",value:function(){var e=this;this.overlayDir.positionChange.pipe(Object(O.a)(1)).subscribe((function(){e._changeDetectorRef.detectChanges(),e._calculateOverlayOffsetX(),e.panel.nativeElement.scrollTop=e._scrollTop}))}},{key:"_getPanelTheme",value:function(){return this._parentFormField?"mat-"+this._parentFormField.color:""}},{key:"_initializeSelection",value:function(){var e=this;Promise.resolve().then((function(){e._setSelectionByValue(e.ngControl?e.ngControl.value:e._value),e.stateChanges.next()}))}},{key:"_setSelectionByValue",value:function(e){var t=this;if(this.multiple&&e)Array.isArray(e),this._selectionModel.clear(),e.forEach((function(e){return t._selectValue(e)})),this._sortValues();else{this._selectionModel.clear();var n=this._selectValue(e);n?this._keyManager.updateActiveItem(n):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}},{key:"_selectValue",value:function(e){var t=this,n=this.options.find((function(n){try{return null!=n.value&&t._compareWith(n.value,e)}catch(i){return!1}}));return n&&this._selectionModel.select(n),n}},{key:"_initKeyManager",value:function(){var e=this;this._keyManager=new h.b(this.options).withTypeAhead(this._typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withAllowedModifierKeys(["shiftKey"]),this._keyManager.tabOut.pipe(Object(j.a)(this._destroy)).subscribe((function(){e.panelOpen&&(!e.multiple&&e._keyManager.activeItem&&e._keyManager.activeItem._selectViaInteraction(),e.focus(),e.close())})),this._keyManager.change.pipe(Object(j.a)(this._destroy)).subscribe((function(){e._panelOpen&&e.panel?e._scrollActiveOptionIntoView():e._panelOpen||e.multiple||!e._keyManager.activeItem||e._keyManager.activeItem._selectViaInteraction()}))}},{key:"_resetOptions",value:function(){var t=this,n=Object(b.a)(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(Object(j.a)(n)).subscribe((function(e){t._onSelect(e.source,e.isUserInput),e.isUserInput&&!t.multiple&&t._panelOpen&&(t.close(),t.focus())})),Object(b.a).apply(void 0,e(this.options.map((function(e){return e._stateChanges})))).pipe(Object(j.a)(n)).subscribe((function(){t._changeDetectorRef.markForCheck(),t.stateChanges.next()}))}},{key:"_onSelect",value:function(e,t){var n=this._selectionModel.isSelected(e);null!=e.value||this._multiple?(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())):(e.deselect(),this._selectionModel.clear(),null!=this.value&&this._propagateChanges(e.value)),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}},{key:"_sortValues",value:function(){var e=this;if(this.multiple){var t=this.options.toArray();this._selectionModel.sort((function(n,i){return e.sortComparator?e.sortComparator(n,i,t):t.indexOf(n)-t.indexOf(i)})),this.stateChanges.next()}}},{key:"_propagateChanges",value:function(e){var t;t=this.multiple?this.selected.map((function(e){return e.value})):this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(new w(this,t)),this._changeDetectorRef.markForCheck()}},{key:"_highlightCorrectOption",value:function(){this._keyManager&&(this.empty?this._keyManager.setFirstItemActive():this._keyManager.setActiveItem(this._selectionModel.selected[0]))}},{key:"_scrollActiveOptionIntoView",value:function(){var e=this._keyManager.activeItemIndex||0,t=Object(l.t)(e,this.options,this.optionGroups),n=this._getItemHeight();this.panel.nativeElement.scrollTop=Object(l.u)((e+t)*n,n,this.panel.nativeElement.scrollTop,256)}},{key:"focus",value:function(e){this._elementRef.nativeElement.focus(e)}},{key:"_getOptionIndex",value:function(e){return this.options.reduce((function(t,n,i){return void 0!==t?t:e===n?i:void 0}),void 0)}},{key:"_calculateOverlayPosition",value:function(){var e=this._getItemHeight(),t=this._getItemCount(),n=Math.min(t*e,256),i=t*e-n,o=this.empty?0:this._getOptionIndex(this._selectionModel.selected[0]);o+=Object(l.t)(o,this.options,this.optionGroups);var r=n/2;this._scrollTop=this._calculateOverlayScroll(o,r,i),this._offsetY=this._calculateOverlayOffsetY(o,r,i),this._checkOverlayWithinViewport(i)}},{key:"_calculateOverlayScroll",value:function(e,t,n){var i=this._getItemHeight();return Math.min(Math.max(0,i*e-t+i/2),n)}},{key:"_getPanelAriaLabelledby",value:function(){if(this.ariaLabel)return null;var e=this._getLabelId();return this.ariaLabelledby?e+" "+this.ariaLabelledby:e}},{key:"_getAriaActiveDescendant",value:function(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}},{key:"_getLabelId",value:function(){var e;return(null===(e=this._parentFormField)||void 0===e?void 0:e.getLabelId())||""}},{key:"_calculateOverlayOffsetX",value:function(){var e,t=this.overlayDir.overlayRef.overlayElement.getBoundingClientRect(),n=this._viewportRuler.getViewportSize(),i=this._isRtl(),o=this.multiple?56:32;if(this.multiple)e=40;else{var r=this._selectionModel.selected[0]||this.options.first;e=r&&r.group?32:16}i||(e*=-1);var a=0-(t.left+e-(i?o:0)),c=t.right+e-n.width+(i?0:o);a>0?e+=a+8:c>0&&(e-=c+8),this.overlayDir.offsetX=Math.round(e),this.overlayDir.overlayRef.updatePosition()}},{key:"_calculateOverlayOffsetY",value:function(e,t,n){var i,o=this._getItemHeight(),r=(o-this._triggerRect.height)/2,a=Math.floor(256/o);return this._disableOptionCentering?0:(i=0===this._scrollTop?e*o:this._scrollTop===n?(e-(this._getItemCount()-a))*o+(o-(this._getItemCount()*o-256)%o):t-o/2,Math.round(-1*i-r))}},{key:"_checkOverlayWithinViewport",value:function(e){var t=this._getItemHeight(),n=this._viewportRuler.getViewportSize(),i=this._triggerRect.top-8,o=n.height-this._triggerRect.bottom-8,r=Math.abs(this._offsetY),a=Math.min(this._getItemCount()*t,256)-r-this._triggerRect.height;a>o?this._adjustPanelUp(a,o):r>i?this._adjustPanelDown(r,i,e):this._transformOrigin=this._getOriginBasedOnOption()}},{key:"_adjustPanelUp",value:function(e,t){var n=Math.round(e-t);this._scrollTop-=n,this._offsetY-=n,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop<=0&&(this._scrollTop=0,this._offsetY=0,this._transformOrigin="50% bottom 0px")}},{key:"_adjustPanelDown",value:function(e,t,n){var i=Math.round(e-t);if(this._scrollTop+=i,this._offsetY+=i,this._transformOrigin=this._getOriginBasedOnOption(),this._scrollTop>=n)return this._scrollTop=n,this._offsetY=0,void(this._transformOrigin="50% top 0px")}},{key:"_getOriginBasedOnOption",value:function(){var e=this._getItemHeight(),t=(e-this._triggerRect.height)/2;return"50% ".concat(Math.abs(this._offsetY)-t+e/2,"px 0px")}},{key:"_getItemCount",value:function(){return this.options.length+this.optionGroups.length}},{key:"_getItemHeight",value:function(){return 3*this._triggerFontSize}},{key:"_getTriggerAriaLabelledby",value:function(){if(this.ariaLabel)return null;var e=this._getLabelId()+" "+this._valueId;return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e}},{key:"setDescribedByIds",value:function(e){this._ariaDescribedby=e.join(" ")}},{key:"onContainerClick",value:function(){this.focus(),this.open()}},{key:"focused",get:function(){return this._focused||this._panelOpen}},{key:"placeholder",get:function(){return this._placeholder},set:function(e){this._placeholder=e,this.stateChanges.next()}},{key:"required",get:function(){return this._required},set:function(e){this._required=Object(d.c)(e),this.stateChanges.next()}},{key:"multiple",get:function(){return this._multiple},set:function(e){this._multiple=Object(d.c)(e)}},{key:"disableOptionCentering",get:function(){return this._disableOptionCentering},set:function(e){this._disableOptionCentering=Object(d.c)(e)}},{key:"compareWith",get:function(){return this._compareWith},set:function(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}},{key:"value",get:function(){return this._value},set:function(e){e!==this._value&&(this.options&&this._setSelectionByValue(e),this._value=e)}},{key:"typeaheadDebounceInterval",get:function(){return this._typeaheadDebounceInterval},set:function(e){this._typeaheadDebounceInterval=Object(d.f)(e)}},{key:"id",get:function(){return this._id},set:function(e){this._id=e||this._uid,this.stateChanges.next()}},{key:"panelOpen",get:function(){return this._panelOpen}},{key:"selected",get:function(){return this.multiple?this._selectionModel.selected:this._selectionModel.selected[0]}},{key:"triggerValue",get:function(){if(this.empty)return"";if(this._multiple){var e=this._selectionModel.selected.map((function(e){return e.viewValue}));return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}},{key:"empty",get:function(){return!this._selectionModel||this._selectionModel.isEmpty()}},{key:"shouldLabelFloat",get:function(){return this._panelOpen||!this.empty}}]),r}(I),R=function e(){u(this,e)}},onAg:function(e,t,n){"use strict";n.r(t),n.d(t,"CdkA11yExamplesModule",(function(){return g})),n.d(t,"FocusMonitorDirectivesExample",(function(){return l})),n.d(t,"FocusMonitorFocusViaExample",(function(){return d})),n.d(t,"FocusMonitorOverviewExample",(function(){return p}));var o=n("u47x"),r=n("fXoL"),a=n("ZTz/"),c=n("Q2Ze"),s=n("FKr1"),l=function(){var e=function(){function e(t,n){u(this,e),this._ngZone=t,this._cdr=n,this.elementOrigin=this.formatOrigin(null),this.subtreeOrigin=this.formatOrigin(null)}return i(e,[{key:"formatOrigin",value:function(e){return e?e+" focused":"blurred"}},{key:"markForCheck",value:function(){var e=this;this._ngZone.run((function(){return e._cdr.markForCheck()}))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(Object(r.Xb)(r.H),Object(r.Xb)(r.i))},e.\u0275cmp=Object(r.Rb)({type:e,selectors:[["focus-monitor-directives-example"]],decls:11,vars:2,consts:[[1,"example-focus-monitor"],["cdkMonitorSubtreeFocus","",3,"cdkFocusChange"]],template:function(e,t){1&e&&(Object(r.dc)(0,"div",0),Object(r.dc)(1,"button",1),Object(r.kc)("cdkFocusChange",(function(e){return t.elementOrigin=t.formatOrigin(e),t.markForCheck()})),Object(r.Qc)(2),Object(r.cc)(),Object(r.cc)(),Object(r.dc)(3,"div",0),Object(r.dc)(4,"div",1),Object(r.kc)("cdkFocusChange",(function(e){return t.subtreeOrigin=t.formatOrigin(e),t.markForCheck()})),Object(r.dc)(5,"p"),Object(r.Qc)(6),Object(r.cc)(),Object(r.dc)(7,"button"),Object(r.Qc)(8,"Child Button 1"),Object(r.cc)(),Object(r.dc)(9,"button"),Object(r.Qc)(10,"Child Button 2"),Object(r.cc)(),Object(r.cc)(),Object(r.cc)()),2&e&&(Object(r.Lb)(2),Object(r.Sc)(" Focus Monitored Element (",t.elementOrigin,") "),Object(r.Lb)(4),Object(r.Sc)("Focus Monitored Subtree (",t.subtreeOrigin,")"))},directives:[o.d],styles:[".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),e}(),h=["monitored"],d=function(){var e=function(){function e(t,n,i){u(this,e),this.focusMonitor=t,this._cdr=n,this._ngZone=i,this.origin=this.formatOrigin(null)}return i(e,[{key:"ngAfterViewInit",value:function(){var e=this;this.focusMonitor.monitor(this.monitoredEl).subscribe((function(t){return e._ngZone.run((function(){e.origin=e.formatOrigin(t),e._cdr.markForCheck()}))}))}},{key:"ngOnDestroy",value:function(){this.focusMonitor.stopMonitoring(this.monitoredEl)}},{key:"formatOrigin",value:function(e){return e?e+" focused":"blurred"}}]),e}();return e.\u0275fac=function(t){return new(t||e)(Object(r.Xb)(o.f),Object(r.Xb)(r.i),Object(r.Xb)(r.H))},e.\u0275cmp=Object(r.Rb)({type:e,selectors:[["focus-monitor-focus-via-example"]],viewQuery:function(e,t){var n;1&e&&Object(r.Uc)(h,!0),2&e&&Object(r.Ac)(n=Object(r.lc)())&&(t.monitoredEl=n.first)},decls:24,vars:1,consts:[[1,"example-focus-monitor"],["monitored",""],["unmonitored",""],["value","mouse"],["simulatedOrigin",""],["value","keyboard"],["value","touch"],["value","program"],[3,"click"]],template:function(e,t){if(1&e){var n=Object(r.ec)();Object(r.dc)(0,"div",0),Object(r.dc)(1,"button",null,1),Object(r.Qc)(3),Object(r.cc)(),Object(r.dc)(4,"button",null,2),Object(r.Qc)(6,"2. Not Monitored"),Object(r.cc)(),Object(r.cc)(),Object(r.dc)(7,"mat-form-field"),Object(r.dc)(8,"mat-label"),Object(r.Qc)(9,"Simulated focus origin"),Object(r.cc)(),Object(r.dc)(10,"mat-select",3,4),Object(r.dc)(12,"mat-option",3),Object(r.Qc)(13,"Mouse"),Object(r.cc)(),Object(r.dc)(14,"mat-option",5),Object(r.Qc)(15,"Keyboard"),Object(r.cc)(),Object(r.dc)(16,"mat-option",6),Object(r.Qc)(17,"Touch"),Object(r.cc)(),Object(r.dc)(18,"mat-option",7),Object(r.Qc)(19,"Programmatic"),Object(r.cc)(),Object(r.cc)(),Object(r.cc)(),Object(r.dc)(20,"button",8),Object(r.kc)("click",(function(){Object(r.Ec)(n);var e=Object(r.Bc)(2),i=Object(r.Bc)(11);return t.focusMonitor.focusVia(e,i.value)})),Object(r.Qc)(21," Focus button #1\n"),Object(r.cc)(),Object(r.dc)(22,"button",8),Object(r.kc)("click",(function(){Object(r.Ec)(n);var e=Object(r.Bc)(5),i=Object(r.Bc)(11);return t.focusMonitor.focusVia(e,i.value)})),Object(r.Qc)(23," Focus button #2\n"),Object(r.cc)()}2&e&&(Object(r.Lb)(3),Object(r.Sc)("1. Focus Monitored Element (",t.origin,")"))},directives:[c.c,c.g,a.a,s.l],styles:[".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 30px cyan;\n}\n\nmat-form-field[_ngcontent-%COMP%], button[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),e}(),f=["element"],_=["subtree"],p=function(){var e=function(){function e(t,n,i){u(this,e),this._focusMonitor=t,this._cdr=n,this._ngZone=i,this.elementOrigin=this.formatOrigin(null),this.subtreeOrigin=this.formatOrigin(null)}return i(e,[{key:"ngAfterViewInit",value:function(){var e=this;this._focusMonitor.monitor(this.element).subscribe((function(t){return e._ngZone.run((function(){e.elementOrigin=e.formatOrigin(t),e._cdr.markForCheck()}))})),this._focusMonitor.monitor(this.subtree,!0).subscribe((function(t){return e._ngZone.run((function(){e.subtreeOrigin=e.formatOrigin(t),e._cdr.markForCheck()}))}))}},{key:"ngOnDestroy",value:function(){this._focusMonitor.stopMonitoring(this.element),this._focusMonitor.stopMonitoring(this.subtree)}},{key:"formatOrigin",value:function(e){return e?e+" focused":"blurred"}}]),e}();return e.\u0275fac=function(t){return new(t||e)(Object(r.Xb)(o.f),Object(r.Xb)(r.i),Object(r.Xb)(r.H))},e.\u0275cmp=Object(r.Rb)({type:e,selectors:[["focus-monitor-overview-example"]],viewQuery:function(e,t){var n;1&e&&(Object(r.Uc)(f,!0),Object(r.Uc)(_,!0)),2&e&&(Object(r.Ac)(n=Object(r.lc)())&&(t.element=n.first),Object(r.Ac)(n=Object(r.lc)())&&(t.subtree=n.first))},decls:13,vars:2,consts:[[1,"example-focus-monitor"],["element",""],["subtree",""]],template:function(e,t){1&e&&(Object(r.dc)(0,"div",0),Object(r.dc)(1,"button",null,1),Object(r.Qc)(3),Object(r.cc)(),Object(r.cc)(),Object(r.dc)(4,"div",0),Object(r.dc)(5,"div",null,2),Object(r.dc)(7,"p"),Object(r.Qc)(8),Object(r.cc)(),Object(r.dc)(9,"button"),Object(r.Qc)(10,"Child Button 1"),Object(r.cc)(),Object(r.dc)(11,"button"),Object(r.Qc)(12,"Child Button 2"),Object(r.cc)(),Object(r.cc)(),Object(r.cc)()),2&e&&(Object(r.Lb)(3),Object(r.Sc)("Focus Monitored Element (",t.elementOrigin,")"),Object(r.Lb)(5),Object(r.Sc)("Focus Monitored Subtree (",t.subtreeOrigin,")"))},styles:[".example-focus-monitor[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-mouse-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-keyboard-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-touch-focused[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 255, 0.5);\n}\n\n.example-focus-monitor[_ngcontent-%COMP%]   .cdk-program-focused[_ngcontent-%COMP%] {\n  background: rgba(255, 0, 255, 0.5);\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}"]}),e}(),g=function(){var e=function e(){u(this,e)};return e.\u0275mod=Object(r.Vb)({type:e}),e.\u0275inj=Object(r.Ub)({factory:function(t){return new(t||e)},imports:[[o.a,a.b]]}),e}()}}])}();