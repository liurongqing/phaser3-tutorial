(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{GXRp:function(e,t,s){"use strict";s.d(t,"a",(function(){return p})),s.d(t,"b",(function(){return d})),s.d(t,"c",(function(){return w})),s.d(t,"d",(function(){return O})),s.d(t,"e",(function(){return f})),s.d(t,"f",(function(){return N})),s.d(t,"g",(function(){return j})),s.d(t,"h",(function(){return y})),s.d(t,"i",(function(){return u})),s.d(t,"j",(function(){return E})),s.d(t,"k",(function(){return k})),s.d(t,"l",(function(){return T})),s.d(t,"m",(function(){return H})),s.d(t,"n",(function(){return v})),s.d(t,"o",(function(){return I})),s.d(t,"p",(function(){return P})),s.d(t,"q",(function(){return M}));var o=s("8LU1"),c=s("0EQZ"),i=(s("fXoL"),s("XNiG")),n=(s("Cfvw"),s("2Vo4")),r=s("7+OI"),a=s("LRne"),l=s("1G5W");function h(e){return class extends e{constructor(...e){super(...e),this._sticky=!1,this._hasStickyChanged=!1}get sticky(){return this._sticky}set sticky(e){const t=this._sticky;this._sticky=Object(o.c)(e),this._hasStickyChanged=t!==this._sticky}hasStickyChanged(){const e=this._hasStickyChanged;return this._hasStickyChanged=!1,e}resetStickyChanged(){this._hasStickyChanged=!1}}}s("IzEk");class d{constructor(e){this.template=e}}class u{constructor(e){this.template=e}}class f{constructor(e){this.template=e}}class m{}const _=h(m);class w extends _{constructor(e){super(),this._table=e,this._stickyEnd=!1}get name(){return this._name}set name(e){this._setNameInput(e)}get stickyEnd(){return this._stickyEnd}set stickyEnd(e){const t=this._stickyEnd;this._stickyEnd=Object(o.c)(e),this._hasStickyChanged=t!==this._stickyEnd}_updateColumnCssClassName(){this._columnCssClassName=["cdk-column-"+this.cssClassFriendlyName]}_setNameInput(e){e&&(this._name=e,this.cssClassFriendlyName=e.replace(/[^a-z0-9_-]/gi,"-"),this._updateColumnCssClassName())}}class b{constructor(e,t){const s=t.nativeElement.classList;for(const o of e._columnCssClassName)s.add(o)}}class y extends b{constructor(e,t){super(e,t)}}class O extends b{constructor(e,t){super(e,t)}}class p extends b{constructor(e,t){super(e,t)}}class g{constructor(e,t){this.template=e,this._differs=t}ngOnChanges(e){if(!this._columnsDiffer){const t=e.columns&&e.columns.currentValue||[];this._columnsDiffer=this._differs.find(t).create(),this._columnsDiffer.diff(t)}}getColumnsDiff(){return this._columnsDiffer.diff(this.columns)}extractCellTemplate(e){return this instanceof k?e.headerCell.template:this instanceof j?e.footerCell.template:e.cell.template}}class R extends g{}const C=h(R);class k extends C{constructor(e,t,s){super(e,t),this._table=s}ngOnChanges(e){super.ngOnChanges(e)}}class D extends g{}const S=h(D);class j extends S{constructor(e,t,s){super(e,t),this._table=s}ngOnChanges(e){super.ngOnChanges(e)}}class v extends g{constructor(e,t,s){super(e,t),this._table=s}}let x=(()=>{class e{constructor(t){this._viewContainer=t,e.mostRecentCellOutlet=this}ngOnDestroy(){e.mostRecentCellOutlet===this&&(e.mostRecentCellOutlet=null)}}return e.mostRecentCellOutlet=null,e})();class E{}class N{}class H{}class T{constructor(e){this.templateRef=e}}const B=["top","bottom","left","right"];class F{constructor(e,t,s,o,c=!0,i=!0){this._isNativeHtmlTable=e,this._stickCellCss=t,this.direction=s,this._coalescedStyleScheduler=o,this._isBrowser=c,this._needsPositionStickyOnElement=i}clearStickyPositioning(e,t){const s=[];for(const o of e)if(o.nodeType===o.ELEMENT_NODE){s.push(o);for(let e=0;e<o.children.length;e++)s.push(o.children[e])}this._scheduleStyleChanges(()=>{for(const e of s)this._removeStickyStyle(e,t)})}updateStickyColumns(e,t,s){if(!e.length||!this._isBrowser||!t.some(e=>e)&&!s.some(e=>e))return;const o=e[0],c=o.children.length,i=this._getCellWidths(o),n=this._getStickyStartColumnPositions(i,t),r=this._getStickyEndColumnPositions(i,s);this._scheduleStyleChanges(()=>{const o="rtl"===this.direction,i=o?"right":"left",a=o?"left":"right";for(const l of e)for(let e=0;e<c;e++){const o=l.children[e];t[e]&&this._addStickyStyle(o,i,n[e]),s[e]&&this._addStickyStyle(o,a,r[e])}})}stickRows(e,t,s){if(!this._isBrowser)return;const o="bottom"===s?e.slice().reverse():e,c="bottom"===s?t.slice().reverse():t,i=[],n=[];for(let r=0,a=0;r<o.length;r++){if(i[r]=a,!c[r])continue;const e=o[r];n[r]=this._isNativeHtmlTable?Array.from(e.children):[e],r!==o.length-1&&(a+=e.getBoundingClientRect().height)}this._scheduleStyleChanges(()=>{for(let e=0;e<o.length;e++){if(!c[e])continue;const t=i[e];for(const o of n[e])this._addStickyStyle(o,s,t)}})}updateStickyFooterContainer(e,t){if(!this._isNativeHtmlTable)return;const s=e.querySelector("tfoot");this._scheduleStyleChanges(()=>{t.some(e=>!e)?this._removeStickyStyle(s,["bottom"]):this._addStickyStyle(s,"bottom",0)})}_removeStickyStyle(e,t){for(const s of t)e.style[s]="";B.some(s=>-1===t.indexOf(s)&&e.style[s])?e.style.zIndex=this._getCalculatedZIndex(e):(e.style.zIndex="",this._needsPositionStickyOnElement&&(e.style.position=""),e.classList.remove(this._stickCellCss))}_addStickyStyle(e,t,s){e.classList.add(this._stickCellCss),e.style[t]=s+"px",e.style.zIndex=this._getCalculatedZIndex(e),this._needsPositionStickyOnElement&&(e.style.cssText+="position: -webkit-sticky; position: sticky; ")}_getCalculatedZIndex(e){const t={top:100,bottom:10,left:1,right:1};let s=0;for(const o of B)e.style[o]&&(s+=t[o]);return s?""+s:""}_getCellWidths(e){const t=[],s=e.children;for(let o=0;o<s.length;o++)t.push(s[o].getBoundingClientRect().width);return t}_getStickyStartColumnPositions(e,t){const s=[];let o=0;for(let c=0;c<e.length;c++)t[c]&&(s[c]=o,o+=e[c]);return s}_getStickyEndColumnPositions(e,t){const s=[];let o=0;for(let c=e.length;c>0;c--)t[c]&&(s[c]=o,o+=e[c]);return s}_scheduleStyleChanges(e){this._coalescedStyleScheduler?this._coalescedStyleScheduler.schedule(e):e()}}class I{constructor(e,t,s,o,c,r,a,l,h){this._differs=e,this._changeDetectorRef=t,this._elementRef=s,this._dir=c,this._platform=a,this._viewRepeater=l,this._coalescedStyleScheduler=h,this._onDestroy=new i.a,this._columnDefsByName=new Map,this._customColumnDefs=new Set,this._customRowDefs=new Set,this._customHeaderRowDefs=new Set,this._customFooterRowDefs=new Set,this._headerRowDefChanged=!0,this._footerRowDefChanged=!0,this._cachedRenderRowsMap=new Map,this.stickyCssClass="cdk-table-sticky",this.needsPositionStickyOnElement=!0,this._isShowingNoDataRow=!1,this._multiTemplateDataRows=!1,this.viewChange=new n.a({start:0,end:Number.MAX_VALUE}),o||this._elementRef.nativeElement.setAttribute("role","grid"),this._document=r,this._isNativeHtmlTable="TABLE"===this._elementRef.nativeElement.nodeName}get trackBy(){return this._trackByFn}set trackBy(e){this._trackByFn=e}get dataSource(){return this._dataSource}set dataSource(e){this._dataSource!==e&&this._switchDataSource(e)}get multiTemplateDataRows(){return this._multiTemplateDataRows}set multiTemplateDataRows(e){this._multiTemplateDataRows=Object(o.c)(e),this._rowOutlet&&this._rowOutlet.viewContainer.length&&(this._forceRenderDataRows(),this.updateStickyColumnStyles())}ngOnInit(){this._setupStickyStyler(),this._isNativeHtmlTable&&this._applyNativeTableSections(),this._dataDiffer=this._differs.find([]).create((e,t)=>this.trackBy?this.trackBy(t.dataIndex,t.data):t)}ngAfterContentChecked(){this._cacheRowDefs(),this._cacheColumnDefs();const e=this._renderUpdatedColumns()||this._headerRowDefChanged||this._footerRowDefChanged;this._headerRowDefChanged&&(this._forceRenderHeaderRows(),this._headerRowDefChanged=!1),this._footerRowDefChanged&&(this._forceRenderFooterRows(),this._footerRowDefChanged=!1),this.dataSource&&this._rowDefs.length>0&&!this._renderChangeSubscription?this._observeRenderChanges():e&&this.updateStickyColumnStyles(),this._checkStickyStates()}ngOnDestroy(){this._rowOutlet.viewContainer.clear(),this._noDataRowOutlet.viewContainer.clear(),this._headerRowOutlet.viewContainer.clear(),this._footerRowOutlet.viewContainer.clear(),this._cachedRenderRowsMap.clear(),this._onDestroy.next(),this._onDestroy.complete(),Object(c.g)(this.dataSource)&&this.dataSource.disconnect(this)}renderRows(){var e;this._renderRows=this._getAllRenderRows();const t=this._dataDiffer.diff(this._renderRows);if(!t)return void this._updateNoDataRow();const s=this._rowOutlet.viewContainer;null===(e=this._viewRepeater)||void 0===e||e.applyChanges(t,s,(e,t,s)=>this._getEmbeddedViewArgs(e.item,s),e=>e.item.data,e=>{1===e.operation&&e.context&&this._renderCellTemplateForItem(e.record.item.rowDef,e.context)}),this._updateRowIndexContext(),t.forEachIdentityChange(e=>{s.get(e.currentIndex).context.$implicit=e.item.data}),this._updateNoDataRow(),this.updateStickyColumnStyles()}addColumnDef(e){this._customColumnDefs.add(e)}removeColumnDef(e){this._customColumnDefs.delete(e)}addRowDef(e){this._customRowDefs.add(e)}removeRowDef(e){this._customRowDefs.delete(e)}addHeaderRowDef(e){this._customHeaderRowDefs.add(e),this._headerRowDefChanged=!0}removeHeaderRowDef(e){this._customHeaderRowDefs.delete(e),this._headerRowDefChanged=!0}addFooterRowDef(e){this._customFooterRowDefs.add(e),this._footerRowDefChanged=!0}removeFooterRowDef(e){this._customFooterRowDefs.delete(e),this._footerRowDefChanged=!0}updateStickyHeaderRowStyles(){const e=this._getRenderedRows(this._headerRowOutlet),t=this._elementRef.nativeElement.querySelector("thead");t&&(t.style.display=e.length?"":"none");const s=this._headerRowDefs.map(e=>e.sticky);this._stickyStyler.clearStickyPositioning(e,["top"]),this._stickyStyler.stickRows(e,s,"top"),this._headerRowDefs.forEach(e=>e.resetStickyChanged())}updateStickyFooterRowStyles(){const e=this._getRenderedRows(this._footerRowOutlet),t=this._elementRef.nativeElement.querySelector("tfoot");t&&(t.style.display=e.length?"":"none");const s=this._footerRowDefs.map(e=>e.sticky);this._stickyStyler.clearStickyPositioning(e,["bottom"]),this._stickyStyler.stickRows(e,s,"bottom"),this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement,s),this._footerRowDefs.forEach(e=>e.resetStickyChanged())}updateStickyColumnStyles(){const e=this._getRenderedRows(this._headerRowOutlet),t=this._getRenderedRows(this._rowOutlet),s=this._getRenderedRows(this._footerRowOutlet);this._stickyStyler.clearStickyPositioning([...e,...t,...s],["left","right"]),e.forEach((e,t)=>{this._addStickyColumnStyles([e],this._headerRowDefs[t])}),this._rowDefs.forEach(e=>{const s=[];for(let o=0;o<t.length;o++)this._renderRows[o].rowDef===e&&s.push(t[o]);this._addStickyColumnStyles(s,e)}),s.forEach((e,t)=>{this._addStickyColumnStyles([e],this._footerRowDefs[t])}),Array.from(this._columnDefsByName.values()).forEach(e=>e.resetStickyChanged())}_getAllRenderRows(){const e=[],t=this._cachedRenderRowsMap;this._cachedRenderRowsMap=new Map;for(let s=0;s<this._data.length;s++){let o=this._data[s];const c=this._getRenderRowsForData(o,s,t.get(o));this._cachedRenderRowsMap.has(o)||this._cachedRenderRowsMap.set(o,new WeakMap);for(let t=0;t<c.length;t++){let s=c[t];const o=this._cachedRenderRowsMap.get(s.data);o.has(s.rowDef)?o.get(s.rowDef).push(s):o.set(s.rowDef,[s]),e.push(s)}}return e}_getRenderRowsForData(e,t,s){return this._getRowDefs(e,t).map(o=>{const c=s&&s.has(o)?s.get(o):[];if(c.length){const e=c.shift();return e.dataIndex=t,e}return{data:e,rowDef:o,dataIndex:t}})}_cacheColumnDefs(){this._columnDefsByName.clear(),L(this._getOwnDefs(this._contentColumnDefs),this._customColumnDefs).forEach(e=>{this._columnDefsByName.has(e.name),this._columnDefsByName.set(e.name,e)})}_cacheRowDefs(){this._headerRowDefs=L(this._getOwnDefs(this._contentHeaderRowDefs),this._customHeaderRowDefs),this._footerRowDefs=L(this._getOwnDefs(this._contentFooterRowDefs),this._customFooterRowDefs),this._rowDefs=L(this._getOwnDefs(this._contentRowDefs),this._customRowDefs);const e=this._rowDefs.filter(e=>!e.when);this._defaultRowDef=e[0]}_renderUpdatedColumns(){const e=(e,t)=>e||!!t.getColumnsDiff(),t=this._rowDefs.reduce(e,!1);t&&this._forceRenderDataRows();const s=this._headerRowDefs.reduce(e,!1);s&&this._forceRenderHeaderRows();const o=this._footerRowDefs.reduce(e,!1);return o&&this._forceRenderFooterRows(),t||s||o}_switchDataSource(e){this._data=[],Object(c.g)(this.dataSource)&&this.dataSource.disconnect(this),this._renderChangeSubscription&&(this._renderChangeSubscription.unsubscribe(),this._renderChangeSubscription=null),e||(this._dataDiffer&&this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear()),this._dataSource=e}_observeRenderChanges(){if(!this.dataSource)return;let e;Object(c.g)(this.dataSource)?e=this.dataSource.connect(this):Object(r.a)(this.dataSource)?e=this.dataSource:Array.isArray(this.dataSource)&&(e=Object(a.a)(this.dataSource)),this._renderChangeSubscription=e.pipe(Object(l.a)(this._onDestroy)).subscribe(e=>{this._data=e||[],this.renderRows()})}_forceRenderHeaderRows(){this._headerRowOutlet.viewContainer.length>0&&this._headerRowOutlet.viewContainer.clear(),this._headerRowDefs.forEach((e,t)=>this._renderRow(this._headerRowOutlet,e,t)),this.updateStickyHeaderRowStyles()}_forceRenderFooterRows(){this._footerRowOutlet.viewContainer.length>0&&this._footerRowOutlet.viewContainer.clear(),this._footerRowDefs.forEach((e,t)=>this._renderRow(this._footerRowOutlet,e,t)),this.updateStickyFooterRowStyles()}_addStickyColumnStyles(e,t){const s=Array.from(t.columns||[]).map(e=>this._columnDefsByName.get(e)),o=s.map(e=>e.sticky),c=s.map(e=>e.stickyEnd);this._stickyStyler.updateStickyColumns(e,o,c)}_getRenderedRows(e){const t=[];for(let s=0;s<e.viewContainer.length;s++){const o=e.viewContainer.get(s);t.push(o.rootNodes[0])}return t}_getRowDefs(e,t){if(1==this._rowDefs.length)return[this._rowDefs[0]];let s=[];if(this.multiTemplateDataRows)s=this._rowDefs.filter(s=>!s.when||s.when(t,e));else{let o=this._rowDefs.find(s=>s.when&&s.when(t,e))||this._defaultRowDef;o&&s.push(o)}return s}_getEmbeddedViewArgs(e,t){return{templateRef:e.rowDef.template,context:{$implicit:e.data},index:t}}_renderRow(e,t,s,o={}){const c=e.viewContainer.createEmbeddedView(t.template,o,s);return this._renderCellTemplateForItem(t,o),c}_renderCellTemplateForItem(e,t){for(let s of this._getCellTemplates(e))x.mostRecentCellOutlet&&x.mostRecentCellOutlet._viewContainer.createEmbeddedView(s,t);this._changeDetectorRef.markForCheck()}_updateRowIndexContext(){const e=this._rowOutlet.viewContainer;for(let t=0,s=e.length;t<s;t++){const o=e.get(t).context;o.count=s,o.first=0===t,o.last=t===s-1,o.even=t%2==0,o.odd=!o.even,this.multiTemplateDataRows?(o.dataIndex=this._renderRows[t].dataIndex,o.renderIndex=t):o.index=this._renderRows[t].dataIndex}}_getCellTemplates(e){return e&&e.columns?Array.from(e.columns,t=>{const s=this._columnDefsByName.get(t);return e.extractCellTemplate(s)}):[]}_applyNativeTableSections(){const e=this._document.createDocumentFragment(),t=[{tag:"thead",outlets:[this._headerRowOutlet]},{tag:"tbody",outlets:[this._rowOutlet,this._noDataRowOutlet]},{tag:"tfoot",outlets:[this._footerRowOutlet]}];for(const s of t){const t=this._document.createElement(s.tag);t.setAttribute("role","rowgroup");for(const e of s.outlets)t.appendChild(e.elementRef.nativeElement);e.appendChild(t)}this._elementRef.nativeElement.appendChild(e)}_forceRenderDataRows(){this._dataDiffer.diff([]),this._rowOutlet.viewContainer.clear(),this.renderRows()}_checkStickyStates(){const e=(e,t)=>e||t.hasStickyChanged();this._headerRowDefs.reduce(e,!1)&&this.updateStickyHeaderRowStyles(),this._footerRowDefs.reduce(e,!1)&&this.updateStickyFooterRowStyles(),Array.from(this._columnDefsByName.values()).reduce(e,!1)&&this.updateStickyColumnStyles()}_setupStickyStyler(){this._stickyStyler=new F(this._isNativeHtmlTable,this.stickyCssClass,this._dir?this._dir.value:"ltr",this._coalescedStyleScheduler,this._platform.isBrowser,this.needsPositionStickyOnElement),(this._dir?this._dir.change:Object(a.a)()).pipe(Object(l.a)(this._onDestroy)).subscribe(e=>{this._stickyStyler.direction=e,this.updateStickyColumnStyles()})}_getOwnDefs(e){return e.filter(e=>!e._table||e._table===this)}_updateNoDataRow(){if(this._noDataRow){const e=0===this._rowOutlet.viewContainer.length;if(e!==this._isShowingNoDataRow){const t=this._noDataRowOutlet.viewContainer;e?t.createEmbeddedView(this._noDataRow.templateRef):t.clear(),this._isShowingNoDataRow=e}}}}function L(e,t){return e.concat(Array.from(t))}class M{constructor(e,t){this._table=e,this._options=t,this.justify="start",this._options=t||{}}get name(){return this._name}set name(e){this._name=e,this._syncColumnDefName()}ngOnInit(){this._syncColumnDefName(),void 0===this.headerText&&(this.headerText=this._createDefaultHeaderText()),this.dataAccessor||(this.dataAccessor=this._options.defaultDataAccessor||((e,t)=>e[t])),this._table&&(this.columnDef.cell=this.cell,this.columnDef.headerCell=this.headerCell,this._table.addColumnDef(this.columnDef))}ngOnDestroy(){this._table&&this._table.removeColumnDef(this.columnDef)}_createDefaultHeaderText(){const e=this.name;return this._options&&this._options.defaultHeaderTextTransform?this._options.defaultHeaderTextTransform(e):e[0].toUpperCase()+e.slice(1)}_syncColumnDefName(){this.columnDef&&(this.columnDef.name=this.name)}}class P{}},d10P:function(e,t,s){"use strict";s.r(t),s.d(t,"CdkTableBasicExample",(function(){return N})),s.d(t,"CdkTableExamplesModule",(function(){return T})),s.d(t,"CdkTableFlexBasicExample",(function(){return y}));var o=s("GXRp"),c=s("fXoL"),i=s("0EQZ"),n=s("2Vo4");function r(e,t){1&e&&(Object(c.dc)(0,"cdk-header-cell"),Object(c.Qc)(1," No. "),Object(c.cc)())}function a(e,t){if(1&e&&(Object(c.dc)(0,"cdk-cell"),Object(c.Qc)(1),Object(c.cc)()),2&e){const e=t.$implicit;Object(c.Lb)(1),Object(c.Sc)(" ",e.position," ")}}function l(e,t){1&e&&(Object(c.dc)(0,"cdk-header-cell"),Object(c.Qc)(1," Name "),Object(c.cc)())}function h(e,t){if(1&e&&(Object(c.dc)(0,"cdk-cell"),Object(c.Qc)(1),Object(c.cc)()),2&e){const e=t.$implicit;Object(c.Lb)(1),Object(c.Sc)(" ",e.name," ")}}function d(e,t){1&e&&(Object(c.dc)(0,"cdk-header-cell"),Object(c.Qc)(1," Weight "),Object(c.cc)())}function u(e,t){if(1&e&&(Object(c.dc)(0,"cdk-cell"),Object(c.Qc)(1),Object(c.cc)()),2&e){const e=t.$implicit;Object(c.Lb)(1),Object(c.Sc)(" ",e.weight," ")}}function f(e,t){1&e&&(Object(c.dc)(0,"cdk-header-cell"),Object(c.Qc)(1," Symbol "),Object(c.cc)())}function m(e,t){if(1&e&&(Object(c.dc)(0,"cdk-cell"),Object(c.Qc)(1),Object(c.cc)()),2&e){const e=t.$implicit;Object(c.Lb)(1),Object(c.Sc)(" ",e.symbol," ")}}function _(e,t){1&e&&Object(c.Yb)(0,"cdk-header-row")}function w(e,t){1&e&&Object(c.Yb)(0,"cdk-row")}const b=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}];let y=(()=>{class e{constructor(){this.displayedColumns=["position","name","weight","symbol"],this.dataSource=new O}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(c.Rb)({type:e,selectors:[["cdk-table-flex-basic-example"]],decls:15,vars:3,consts:[[3,"dataSource"],["cdkColumnDef","position"],[4,"cdkHeaderCellDef"],[4,"cdkCellDef"],["cdkColumnDef","name"],["cdkColumnDef","weight"],["cdkColumnDef","symbol"],[4,"cdkHeaderRowDef"],[4,"cdkRowDef","cdkRowDefColumns"]],template:function(e,t){1&e&&(Object(c.dc)(0,"cdk-table",0),Object(c.bc)(1,1),Object(c.Oc)(2,r,2,0,"cdk-header-cell",2),Object(c.Oc)(3,a,2,1,"cdk-cell",3),Object(c.ac)(),Object(c.bc)(4,4),Object(c.Oc)(5,l,2,0,"cdk-header-cell",2),Object(c.Oc)(6,h,2,1,"cdk-cell",3),Object(c.ac)(),Object(c.bc)(7,5),Object(c.Oc)(8,d,2,0,"cdk-header-cell",2),Object(c.Oc)(9,u,2,1,"cdk-cell",3),Object(c.ac)(),Object(c.bc)(10,6),Object(c.Oc)(11,f,2,0,"cdk-header-cell",2),Object(c.Oc)(12,m,2,1,"cdk-cell",3),Object(c.ac)(),Object(c.Oc)(13,_,1,0,"cdk-header-row",7),Object(c.Oc)(14,w,1,0,"cdk-row",8),Object(c.cc)()),2&e&&(Object(c.uc)("dataSource",t.dataSource),Object(c.Lb)(13),Object(c.uc)("cdkHeaderRowDef",t.displayedColumns),Object(c.Lb)(1),Object(c.uc)("cdkRowDefColumns",t.displayedColumns))},directives:[o.o,o.c,o.i,o.b,o.k,o.n,o.h,o.a,o.j,o.m],styles:["cdk-row[_ngcontent-%COMP%], cdk-header-row[_ngcontent-%COMP%], cdk-footer-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\ncdk-cell[_ngcontent-%COMP%], cdk-header-cell[_ngcontent-%COMP%], cdk-footer-cell[_ngcontent-%COMP%] {\n  flex: 1;\n}"]}),e})();class O extends i.b{constructor(){super(...arguments),this.data=new n.a(b)}connect(){return this.data}disconnect(){}}function p(e,t){1&e&&(Object(c.dc)(0,"th",9),Object(c.Qc)(1," No. "),Object(c.cc)())}function g(e,t){if(1&e&&(Object(c.dc)(0,"td",10),Object(c.Qc)(1),Object(c.cc)()),2&e){const e=t.$implicit;Object(c.Lb)(1),Object(c.Sc)(" ",e.position," ")}}function R(e,t){1&e&&(Object(c.dc)(0,"th",9),Object(c.Qc)(1," Name "),Object(c.cc)())}function C(e,t){if(1&e&&(Object(c.dc)(0,"td",10),Object(c.Qc)(1),Object(c.cc)()),2&e){const e=t.$implicit;Object(c.Lb)(1),Object(c.Sc)(" ",e.name," ")}}function k(e,t){1&e&&(Object(c.dc)(0,"th",9),Object(c.Qc)(1," Weight "),Object(c.cc)())}function D(e,t){if(1&e&&(Object(c.dc)(0,"td",10),Object(c.Qc)(1),Object(c.cc)()),2&e){const e=t.$implicit;Object(c.Lb)(1),Object(c.Sc)(" ",e.weight," ")}}function S(e,t){1&e&&(Object(c.dc)(0,"th",9),Object(c.Qc)(1," Symbol "),Object(c.cc)())}function j(e,t){if(1&e&&(Object(c.dc)(0,"td",10),Object(c.Qc)(1),Object(c.cc)()),2&e){const e=t.$implicit;Object(c.Lb)(1),Object(c.Sc)(" ",e.symbol," ")}}function v(e,t){1&e&&Object(c.Yb)(0,"tr",11)}function x(e,t){1&e&&Object(c.Yb)(0,"tr",12)}const E=[{position:1,name:"Hydrogen",weight:1.0079,symbol:"H"},{position:2,name:"Helium",weight:4.0026,symbol:"He"},{position:3,name:"Lithium",weight:6.941,symbol:"Li"},{position:4,name:"Beryllium",weight:9.0122,symbol:"Be"},{position:5,name:"Boron",weight:10.811,symbol:"B"},{position:6,name:"Carbon",weight:12.0107,symbol:"C"},{position:7,name:"Nitrogen",weight:14.0067,symbol:"N"},{position:8,name:"Oxygen",weight:15.9994,symbol:"O"},{position:9,name:"Fluorine",weight:18.9984,symbol:"F"},{position:10,name:"Neon",weight:20.1797,symbol:"Ne"}];let N=(()=>{class e{constructor(){this.displayedColumns=["position","name","weight","symbol"],this.dataSource=new H}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=Object(c.Rb)({type:e,selectors:[["cdk-table-basic-example"]],decls:15,vars:3,consts:[["cdk-table","",3,"dataSource"],["cdkColumnDef","position"],["cdk-header-cell","",4,"cdkHeaderCellDef"],["cdk-cell","",4,"cdkCellDef"],["cdkColumnDef","name"],["cdkColumnDef","weight"],["cdkColumnDef","symbol"],["cdk-header-row","",4,"cdkHeaderRowDef"],["cdk-row","",4,"cdkRowDef","cdkRowDefColumns"],["cdk-header-cell",""],["cdk-cell",""],["cdk-header-row",""],["cdk-row",""]],template:function(e,t){1&e&&(Object(c.dc)(0,"table",0),Object(c.bc)(1,1),Object(c.Oc)(2,p,2,0,"th",2),Object(c.Oc)(3,g,2,1,"td",3),Object(c.ac)(),Object(c.bc)(4,4),Object(c.Oc)(5,R,2,0,"th",2),Object(c.Oc)(6,C,2,1,"td",3),Object(c.ac)(),Object(c.bc)(7,5),Object(c.Oc)(8,k,2,0,"th",2),Object(c.Oc)(9,D,2,1,"td",3),Object(c.ac)(),Object(c.bc)(10,6),Object(c.Oc)(11,S,2,0,"th",2),Object(c.Oc)(12,j,2,1,"td",3),Object(c.ac)(),Object(c.Oc)(13,v,1,0,"tr",7),Object(c.Oc)(14,x,1,0,"tr",8),Object(c.cc)()),2&e&&(Object(c.uc)("dataSource",t.dataSource),Object(c.Lb)(13),Object(c.uc)("cdkHeaderRowDef",t.displayedColumns),Object(c.Lb)(1),Object(c.uc)("cdkRowDefColumns",t.displayedColumns))},directives:[o.o,o.c,o.i,o.b,o.k,o.n,o.h,o.a,o.j,o.m],styles:["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nth[_ngcontent-%COMP%] {\n  text-align: left;\n}"]}),e})();class H extends i.b{constructor(){super(...arguments),this.data=new n.a(E)}connect(){return this.data}disconnect(){}}let T=(()=>{class e{}return e.\u0275mod=Object(c.Vb)({type:e}),e.\u0275inj=Object(c.Ub)({factory:function(t){return new(t||e)},imports:[[o.p]]}),e})()}}]);