import{a as st}from"./chunk-72366VXS.js";import{a as Lt,c as Ao,d as Io}from"./chunk-TIANUBEM.js";import{d as Mo,p as Eo,s as Xi,w as Zi}from"./chunk-YWTJVZ4N.js";import{a as Ro}from"./chunk-FUZX3THS.js";import{a as Tt,b as Ot,c as qn,d as At,e as hn,f as It,h as fn,i as Rt,k as Pt,m as gn,n as So,o as To,p as Oo,q as Ft,r as Xn,t as Vt}from"./chunk-AKRADPCE.js";import"./chunk-24ZBP5DY.js";import{$ as Ui,$b as vo,A as nt,Aa as ve,B as ji,C as Qa,Ca as ro,D as Yi,Da as qe,Db as mo,E as Wi,Ea as Ki,Eb as oe,F as jn,Fa as S,Fb as uo,G as Re,Ga as z,Gb as mn,H as Yn,Ha as N,Hb as un,I as ae,Ia as We,Ib as po,J as Ja,Ja as Xe,Jb as ho,K as eo,Ka as ft,Lb as Gn,Ma as ln,Na as Y,Nb as ot,O as it,Ob as pn,P as T,Pa as h,Pb as fo,Q as B,Qa as so,R as k,Ra as f,Rb as J,S as to,Sa as Ve,Sb as w,T as s,Ta as Le,Tb as gt,Ua as y,Ub as go,Va as l,Vb as Kn,W as St,Wa as d,Xa as H,Xb as _o,Y as _,Ya as M,Yb as bo,Z as b,Za as D,_ as Pe,_a as ke,a as ee,aa as Q,ac as yo,b as Nn,ba as $,bb as K,bc as rt,cb as de,cc as xo,d as se,da as v,db as x,e as Et,ea as F,eb as Ne,f as E,fb as u,g as Bn,ga as j,gb as ce,hb as U,ia as ht,ib as at,ic as Co,j as Xa,jb as me,ka as ge,kb as R,la as rn,lb as P,lc as wo,ma as I,mb as lo,mc as ko,na as Gi,nb as co,o as tt,oa as Wn,ob as qi,oc as Do,pa as no,pb as De,q as Ie,qa as Un,qb as dn,r as zn,ra as io,rb as O,s as Za,sa as ao,sb as Me,t as $a,tb as m,ua as oo,ub as V,v as Ye,va as c,vb as te,w as we,wb as cn,x as Hi,xa as Fe,xb as q,ya as sn,yb as X,z as Hn,za as Ee,zb as Z}from"./chunk-6DM576LM.js";var $i=new k("MAT_DATE_LOCALE",{providedIn:"root",factory:()=>s(ho)}),Nt="Method not implemented",Ce=class{locale;_localeChanges=new E;localeChanges=this._localeChanges;setTime(a,e,t,n){throw new Error(Nt)}getHours(a){throw new Error(Nt)}getMinutes(a){throw new Error(Nt)}getSeconds(a){throw new Error(Nt)}parseTime(a,e){throw new Error(Nt)}addSeconds(a,e){throw new Error(Nt)}getValidDateOrNull(a){return this.isDateInstance(a)&&this.isValid(a)?a:null}deserialize(a){return a==null||this.isDateInstance(a)&&this.isValid(a)?a:this.invalid()}setLocale(a){this.locale=a,this._localeChanges.next()}compareDate(a,e){return this.getYear(a)-this.getYear(e)||this.getMonth(a)-this.getMonth(e)||this.getDate(a)-this.getDate(e)}compareTime(a,e){return this.getHours(a)-this.getHours(e)||this.getMinutes(a)-this.getMinutes(e)||this.getSeconds(a)-this.getSeconds(e)}sameDate(a,e){if(a&&e){let t=this.isValid(a),n=this.isValid(e);return t&&n?!this.compareDate(a,e):t==n}return a==e}sameTime(a,e){if(a&&e){let t=this.isValid(a),n=this.isValid(e);return t&&n?!this.compareTime(a,e):t==n}return a==e}clampDate(a,e,t){return e&&this.compareDate(a,e)<0?e:t&&this.compareDate(a,t)>0?t:a}},lt=new k("mat-date-formats");function _n(i){return i.buttons===0||i.detail===0}function bn(i){let a=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!a&&a.identifier===-1&&(a.radiusX==null||a.radiusX===1)&&(a.radiusY==null||a.radiusY===1)}var Qi;function Po(){if(Qi==null){let i=typeof document<"u"?document.head:null;Qi=!!(i&&(i.createShadowRoot||i.attachShadow))}return Qi}function Ji(i){if(Po()){let a=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&a instanceof ShadowRoot)return a}return null}function Bt(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let a=i.shadowRoot.activeElement;if(a===i)break;i=a}return i}function ye(i){return i.composedPath?i.composedPath()[0]:i.target}var ea;try{ea=typeof Intl<"u"&&Intl.v8BreakIterator}catch{ea=!1}var G=(()=>{class i{_platformId=s(no);isBrowser=this._platformId?xo(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||ea)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vn;function Fo(){if(vn==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>vn=!0}))}finally{vn=vn||!1}return vn}function zt(i){return Fo()?i:!!i.capture}function Ht(i,a=0){return Vo(i)?Number(i):arguments.length===2?a:0}function Vo(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Se(i){return i instanceof I?i.nativeElement:i}var Lo=new k("cdk-input-modality-detector-options"),No={ignoreKeys:[18,17,224,91,16]},Bo=650,ta={passive:!0,capture:!0},zo=(()=>{class i{_platform=s(G);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new Bn(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(t=>t===e.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=ye(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<Bo||(this._modality.next(_n(e)?"keyboard":"mouse"),this._mostRecentTarget=ye(e))};_onTouchstart=e=>{if(bn(e)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=ye(e)};constructor(){let e=s(F),t=s($),n=s(Lo,{optional:!0});if(this._options=ee(ee({},No),n),this.modalityDetected=this._modality.pipe(jn(1)),this.modalityChanged=this.modalityDetected.pipe(ji()),this._platform.isBrowser){let o=s(Ee).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[o.listen(t,"keydown",this._onKeydown,ta),o.listen(t,"mousedown",this._onMousedown,ta),o.listen(t,"touchstart",this._onTouchstart,ta)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),yn=(function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i})(yn||{}),Ho=new k("cdk-focus-monitor-default-options"),Zn=zt({passive:!0,capture:!0}),Ue=(()=>{class i{_ngZone=s(F);_platform=s(G);_inputModalityDetector=s(zo);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=s($);_stopInputModalityDetector=new E;constructor(){let e=s(Ho,{optional:!0});this._detectionMode=e?.detectionMode||yn.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let t=ye(e);for(let n=t;n;n=n.parentElement)e.type==="focus"?this._onFocus(e,n):this._onBlur(e,n)};monitor(e,t=!1){let n=Se(e);if(!this._platform.isBrowser||n.nodeType!==1)return tt();let o=Ji(n)||this._document,r=this._elementInfo.get(n);if(r)return t&&(r.checkChildren=!0),r.subject;let p={checkChildren:t,subject:new E,rootNode:o};return this._elementInfo.set(n,p),this._registerGlobalListeners(p),p.subject}stopMonitoring(e){let t=Se(e),n=this._elementInfo.get(t);n&&(n.subject.complete(),this._setClasses(t),this._elementInfo.delete(t),this._removeGlobalListeners(n))}focusVia(e,t,n){let o=Se(e),r=this._document.activeElement;o===r?this._getClosestElementsInfo(o).forEach(([p,g])=>this._originChanged(p,t,g)):(this._setOrigin(t),typeof o.focus=="function"&&o.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,t)=>this.stopMonitoring(t))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===yn.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,t){e.classList.toggle("cdk-focused",!!t),e.classList.toggle("cdk-touch-focused",t==="touch"),e.classList.toggle("cdk-keyboard-focused",t==="keyboard"),e.classList.toggle("cdk-mouse-focused",t==="mouse"),e.classList.toggle("cdk-program-focused",t==="program")}_setOrigin(e,t=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&t,this._detectionMode===yn.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?Bo:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,t){let n=this._elementInfo.get(t),o=ye(e);!n||!n.checkChildren&&t!==o||this._originChanged(t,this._getFocusOrigin(o),n)}_onBlur(e,t){let n=this._elementInfo.get(t);!n||n.checkChildren&&e.relatedTarget instanceof Node&&t.contains(e.relatedTarget)||(this._setClasses(t),this._emitOrigin(n,null))}_emitOrigin(e,t){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(t))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let t=e.rootNode,n=this._rootNodeFocusListenerCount.get(t)||0;n||this._ngZone.runOutsideAngular(()=>{t.addEventListener("focus",this._rootNodeFocusAndBlurListener,Zn),t.addEventListener("blur",this._rootNodeFocusAndBlurListener,Zn)}),this._rootNodeFocusListenerCount.set(t,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(ae(this._stopInputModalityDetector)).subscribe(o=>{this._setOrigin(o,!0)}))}_removeGlobalListeners(e){let t=e.rootNode;if(this._rootNodeFocusListenerCount.has(t)){let n=this._rootNodeFocusListenerCount.get(t);n>1?this._rootNodeFocusListenerCount.set(t,n-1):(t.removeEventListener("focus",this._rootNodeFocusAndBlurListener,Zn),t.removeEventListener("blur",this._rootNodeFocusAndBlurListener,Zn),this._rootNodeFocusListenerCount.delete(t))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,t,n){this._setClasses(e,t),this._emitOrigin(n,t),this._lastFocusOrigin=t}_getClosestElementsInfo(e){let t=[];return this._elementInfo.forEach((n,o)=>{(o===e||n.checkChildren&&o.contains(e))&&t.push([o,n])}),t}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:t,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!t||t===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let o=e.labels;if(o){for(let r=0;r<o.length;r++)if(o[r].contains(t))return!0}return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),na=(()=>{class i{_elementRef=s(I);_focusMonitor=s(Ue);_monitorSubscription;_focusOrigin=null;cdkFocusChange=new v;constructor(){}get focusOrigin(){return this._focusOrigin}ngAfterViewInit(){let e=this._elementRef.nativeElement;this._monitorSubscription=this._focusMonitor.monitor(e,e.nodeType===1&&e.hasAttribute("cdkMonitorSubtreeFocus")).subscribe(t=>{this._focusOrigin=t,this.cdkFocusChange.emit(t)})}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef),this._monitorSubscription?.unsubscribe()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","cdkMonitorElementFocus",""],["","cdkMonitorSubtreeFocus",""]],outputs:{cdkFocusChange:"cdkFocusChange"},exportAs:["cdkMonitorFocus"]})}return i})();var $n=new WeakMap,ne=(()=>{class i{_appRef;_injector=s(Q);_environmentInjector=s(St);load(e){let t=this._appRef=this._appRef||this._injector.get(ln),n=$n.get(t);n||(n={loaders:new Set,refs:[]},$n.set(t,n),t.onDestroy(()=>{$n.get(t)?.refs.forEach(o=>o.destroy()),$n.delete(t)})),n.loaders.has(e)||(n.loaders.add(e),n.refs.push(Kn(e,{environmentInjector:this._environmentInjector})))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Ge=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],exportAs:["cdkVisuallyHidden"],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})(),Qn;function Es(){if(Qn===void 0&&(Qn=null,typeof window<"u")){let i=window;i.trustedTypes!==void 0&&(Qn=i.trustedTypes.createPolicy("angular#components",{createHTML:a=>a}))}return Qn}function Ss(i){return Es()?.createHTML(i)||i}function jo(i,a,e){let t=e.sanitize(ao.HTML,a);i.innerHTML=Ss(t||"")}function jt(i){return Array.isArray(i)?i:[i]}var Yo=new Set,_t,Yt=(()=>{class i{_platform=s(G);_nonce=s(io,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Os}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Ts(e,this._nonce),this._matchMedia(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Ts(i,a){if(!Yo.has(i))try{_t||(_t=document.createElement("style"),a&&_t.setAttribute("nonce",a),_t.setAttribute("type","text/css"),document.head.appendChild(_t)),_t.sheet&&(_t.sheet.insertRule(`@media ${i} {body{ }}`,0),Yo.add(i))}catch(e){console.error(e)}}function Os(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var ia=(()=>{class i{_mediaMatcher=s(Yt);_zone=s(F);_queries=new Map;_destroySubject=new E;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Wo(jt(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=Wo(jt(e)).map(r=>this._registerQuery(r).observable),o=zn(n);return o=Za(o.pipe(nt(1)),o.pipe(jn(1),Hn(0))),o.pipe(Ie(r=>{let p={matches:!1,breakpoints:{}};return r.forEach(({matches:g,query:A})=>{p.matches=p.matches||g,p.breakpoints[A]=g}),p}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let t=this._mediaMatcher.matchMedia(e),o={observable:new Et(r=>{let p=g=>this._zone.run(()=>r.next(g));return t.addListener(p),()=>{t.removeListener(p)}}).pipe(Re(t),Ie(({matches:r})=>({query:e,matches:r})),ae(this._destroySubject)),mql:t};return this._queries.set(e,o),o}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Wo(i){return i.map(a=>a.split(",")).reduce((a,e)=>a.concat(e)).map(a=>a.trim())}var As=(()=>{class i{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Jn=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({providers:[As]})}return i})();var Is=(()=>{class i{_platform=s(G);constructor(){}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Ps(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let t=Rs(js(e));if(t&&(Uo(t)===-1||!this.isVisible(t)))return!1;let n=e.nodeName.toLowerCase(),o=Uo(e);return e.hasAttribute("contenteditable")?o!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!zs(e)?!1:n==="audio"?e.hasAttribute("controls")?o!==-1:!1:n==="video"?o===-1?!1:o!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,t){return Hs(e)&&!this.isDisabled(e)&&(t?.ignoreVisibility||this.isVisible(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function Rs(i){try{return i.frameElement}catch{return null}}function Ps(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function Fs(i){let a=i.nodeName.toLowerCase();return a==="input"||a==="select"||a==="button"||a==="textarea"}function Vs(i){return Ns(i)&&i.type=="hidden"}function Ls(i){return Bs(i)&&i.hasAttribute("href")}function Ns(i){return i.nodeName.toLowerCase()=="input"}function Bs(i){return i.nodeName.toLowerCase()=="a"}function qo(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let a=i.getAttribute("tabindex");return!!(a&&!isNaN(parseInt(a,10)))}function Uo(i){if(!qo(i))return null;let a=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(a)?-1:a}function zs(i){let a=i.nodeName.toLowerCase(),e=a==="input"&&i.type;return e==="text"||e==="password"||a==="select"||a==="textarea"}function Hs(i){return Vs(i)?!1:Fs(i)||Ls(i)||i.hasAttribute("contenteditable")||qo(i)}function js(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var oa=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>this.focusLastTabbableElement();endAnchorListener=()=>this.focusFirstTabbableElement();get enabled(){return this._enabled}set enabled(a){this._enabled=a,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_enabled=!0;constructor(a,e,t,n,o=!1,r){this._element=a,this._checker=e,this._ngZone=t,this._document=n,this._injector=r,o||this.attachAnchors()}destroy(){let a=this._startAnchor,e=this._endAnchor;a&&(a.removeEventListener("focus",this.startAnchorListener),a.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(a){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(a)))})}focusFirstTabbableElementWhenReady(a){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(a)))})}focusLastTabbableElementWhenReady(a){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(a)))})}_getRegionBoundary(a){let e=this._element.querySelectorAll(`[cdk-focus-region-${a}], [cdkFocusRegion${a}], [cdk-focus-${a}]`);return a=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(a){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let t=this._getFirstTabbableElement(e);return t?.focus(a),!!t}return e.focus(a),!0}return this.focusFirstTabbableElement(a)}focusFirstTabbableElement(a){let e=this._getRegionBoundary("start");return e&&e.focus(a),!!e}focusLastTabbableElement(a){let e=this._getRegionBoundary("end");return e&&e.focus(a),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let e=a.children;for(let t=0;t<e.length;t++){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[t]):null;if(n)return n}return null}_getLastTabbableElement(a){if(this._checker.isFocusable(a)&&this._checker.isTabbable(a))return a;let e=a.children;for(let t=e.length-1;t>=0;t--){let n=e[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[t]):null;if(n)return n}return null}_createAnchor(){let a=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,a),a.classList.add("cdk-visually-hidden"),a.classList.add("cdk-focus-trap-anchor"),a.setAttribute("aria-hidden","true"),a}_toggleAnchorTabIndex(a,e){a?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(a){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(a,this._startAnchor),this._toggleAnchorTabIndex(a,this._endAnchor))}_executeOnStable(a){this._injector?Fe(a,{injector:this._injector}):setTimeout(a)}},Xo=(()=>{class i{_checker=s(Is);_ngZone=s(F);_document=s($);_injector=s(Q);constructor(){s(ne).load(Ge)}create(e,t=!1){return new oa(e,this._checker,this._ngZone,this._document,t,this._injector)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ra=(()=>{class i{_elementRef=s(I);_focusTrapFactory=s(Xo);focusTrap=void 0;_previouslyFocusedElement=null;get enabled(){return this.focusTrap?.enabled||!1}set enabled(e){this.focusTrap&&(this.focusTrap.enabled=e)}autoCapture=!1;constructor(){s(G).isBrowser&&(this.focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement,!0))}ngOnDestroy(){this.focusTrap?.destroy(),this._previouslyFocusedElement&&(this._previouslyFocusedElement.focus(),this._previouslyFocusedElement=null)}ngAfterContentInit(){this.focusTrap?.attachAnchors(),this.autoCapture&&this._captureFocus()}ngDoCheck(){this.focusTrap&&!this.focusTrap.hasAttached()&&this.focusTrap.attachAnchors()}ngOnChanges(e){let t=e.autoCapture;t&&!t.firstChange&&this.autoCapture&&this.focusTrap?.hasAttached()&&this._captureFocus()}_captureFocus(){this._previouslyFocusedElement=Bt(),this.focusTrap?.focusInitialElementWhenReady()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","cdkTrapFocus",""]],inputs:{enabled:[2,"cdkTrapFocus","enabled",w],autoCapture:[2,"cdkTrapFocusAutoCapture","autoCapture",w]},exportAs:["cdkTrapFocus"],features:[ge]})}return i})(),Zo=new k("liveAnnouncerElement",{providedIn:"root",factory:()=>null}),$o=new k("LIVE_ANNOUNCER_DEFAULT_OPTIONS"),Ys=0,sa=(()=>{class i{_ngZone=s(F);_defaultOptions=s($o,{optional:!0});_liveElement;_document=s($);_sanitizer=s(Co);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=s(Zo,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...t){let n=this._defaultOptions,o,r;return t.length===1&&typeof t[0]=="number"?r=t[0]:[o,r]=t,this.clear(),clearTimeout(this._previousTimeout),o||(o=n&&n.politeness?n.politeness:"polite"),r==null&&n&&(r=n.duration),this._liveElement.setAttribute("aria-live",o),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(p=>this._currentResolve=p)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e=="string"?this._liveElement.textContent=e:jo(this._liveElement,e,this._sanitizer),typeof r=="number"&&(this._previousTimeout=setTimeout(()=>this.clear(),r)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent="")}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e="cdk-live-announcer-element",t=this._document.getElementsByClassName(e),n=this._document.createElement("div");for(let o=0;o<t.length;o++)t[o].remove();return n.classList.add(e),n.classList.add("cdk-visually-hidden"),n.setAttribute("aria-atomic","true"),n.setAttribute("aria-live","polite"),n.id=`cdk-live-announcer-${Ys++}`,this._document.body.appendChild(n),n}_exposeAnnouncerToModals(e){let t=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<t.length;n++){let o=t[n],r=o.getAttribute("aria-owns");r?r.indexOf(e)===-1&&o.setAttribute("aria-owns",r+" "+e):o.setAttribute("aria-owns",e)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var dt=(function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i})(dt||{}),Go="cdk-high-contrast-black-on-white",Ko="cdk-high-contrast-white-on-black",aa="cdk-high-contrast-active",Qo=(()=>{class i{_platform=s(G);_hasCheckedHighContrastMode=!1;_document=s($);_breakpointSubscription;constructor(){this._breakpointSubscription=s(ia).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return dt.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let t=this._document.defaultView||window,n=t&&t.getComputedStyle?t.getComputedStyle(e):null,o=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),o){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return dt.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return dt.BLACK_ON_WHITE}return dt.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(aa,Go,Ko),this._hasCheckedHighContrastMode=!0;let t=this.getHighContrastMode();t===dt.BLACK_ON_WHITE?e.add(aa,Go):t===dt.WHITE_ON_BLACK&&e.add(aa,Ko)}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),la=(()=>{class i{constructor(){s(Qo)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[Jn]})}return i})();var Ws=200,ei=class{_letterKeyStream=new E;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new E;selectedItem=this._selectedItem;constructor(a,e){let t=typeof e?.debounceInterval=="number"?e.debounceInterval:Ws;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(a),this._setupKeyHandler(t)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(a){this._selectedItemIndex=a}setItems(a){this._items=a}handleKey(a){let e=a.keyCode;a.key&&a.key.length===1?this._letterKeyStream.next(a.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(a){this._letterKeyStream.pipe(eo(e=>this._pressedLetters.push(e)),Hn(a),we(()=>this._pressedLetters.length>0),Ie(()=>this._pressedLetters.join("").toLocaleUpperCase())).subscribe(e=>{for(let t=1;t<this._items.length+1;t++){let n=(this._selectedItemIndex+t)%this._items.length,o=this._items[n];if(!this._skipPredicateFn?.(o)&&o.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(o);break}}this._pressedLetters=[]})}};function ue(i,...a){return a.length?a.some(e=>i[e]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}var ti=class{_items;_activeItemIndex=j(-1);_activeItem=j(null);_wrap=!1;_typeaheadSubscription=se.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=a=>a.disabled;constructor(a,e){this._items=a,a instanceof Gi?this._itemChangesSubscription=a.changes.subscribe(t=>this._itemsChanged(t.toArray())):ft(a)&&(this._effectRef=ht(()=>this._itemsChanged(a()),{injector:e}))}tabOut=new E;change=new E;skipPredicate(a){return this._skipPredicateFn=a,this}withWrap(a=!0){return this._wrap=a,this}withVerticalOrientation(a=!0){return this._vertical=a,this}withHorizontalOrientation(a){return this._horizontal=a,this}withAllowedModifierKeys(a){return this._allowedModifierKeys=a,this}withTypeAhead(a=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new ei(e,{debounceInterval:typeof a=="number"?a:void 0,skipPredicate:t=>this._skipPredicateFn(t)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(t=>{this.setActiveItem(t)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(a=!0){return this._homeAndEnd=a,this}withPageUpDown(a=!0,e=10){return this._pageUpAndDown={enabled:a,delta:e},this}setActiveItem(a){let e=this._activeItem();this.updateActiveItem(a),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(a){let e=a.keyCode,n=["altKey","ctrlKey","metaKey","shiftKey"].every(o=>!a[o]||this._allowedModifierKeys.indexOf(o)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&n){this.setNextItemActive();break}else return;case 38:if(this._vertical&&n){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&n){this._horizontal==="rtl"?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&n){this._horizontal==="rtl"?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&n){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&n){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&n){let o=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(o>0?o:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&n){let o=this._activeItemIndex()+this._pageUpAndDown.delta,r=this._getItemsArray().length;this._setActiveItemByIndex(o<r?o:r-1,-1);break}else return;default:(n||ue(a,"shiftKey"))&&this._typeahead?.handleKey(a);return}this._typeahead?.reset(),a.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(a){let e=this._getItemsArray(),t=typeof a=="number"?a:e.indexOf(a),n=e[t];this._activeItem.set(n??null),this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(a){this._wrap?this._setActiveInWrapMode(a):this._setActiveInDefaultMode(a)}_setActiveInWrapMode(a){let e=this._getItemsArray();for(let t=1;t<=e.length;t++){let n=(this._activeItemIndex()+a*t+e.length)%e.length,o=e[n];if(!this._skipPredicateFn(o)){this.setActiveItem(n);return}}}_setActiveInDefaultMode(a){this._setActiveItemByIndex(this._activeItemIndex()+a,a)}_setActiveItemByIndex(a,e){let t=this._getItemsArray();if(t[a]){for(;this._skipPredicateFn(t[a]);)if(a+=e,!t[a])return;this.setActiveItem(a)}}_getItemsArray(){return ft(this._items)?this._items():this._items instanceof Gi?this._items.toArray():this._items}_itemsChanged(a){this._typeahead?.setItems(a);let e=this._activeItem();if(e){let t=a.indexOf(e);t>-1&&t!==this._activeItemIndex()&&(this._activeItemIndex.set(t),this._typeahead?.setCurrentSelectedItemIndex(t))}}};var wn=class extends ti{setActiveItem(a){this.activeItem&&this.activeItem.setInactiveStyles(),super.setActiveItem(a),this.activeItem&&this.activeItem.setActiveStyles()}};var da={},re=class i{_appId=s(Wn);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(a,e=!1){return this._appId!=="ng"&&(a+=this._appId),da.hasOwnProperty(a)||(da[a]=0),`${a}${e?i._infix+"-":""}${da[a]++}`}static \u0275fac=function(e){return new(e||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})};var tr=" ";function ua(i,a,e){let t=oi(i,a);e=e.trim(),!t.some(n=>n.trim()===e)&&(t.push(e),i.setAttribute(a,t.join(tr)))}function ri(i,a,e){let t=oi(i,a);e=e.trim();let n=t.filter(o=>o!==e);n.length?i.setAttribute(a,n.join(tr)):i.removeAttribute(a)}function oi(i,a){return i.getAttribute(a)?.match(/\S+/g)??[]}var nr="cdk-describedby-message",ai="cdk-describedby-host",ma=0,ir=(()=>{class i{_platform=s(G);_document=s($);_messageRegistry=new Map;_messagesContainer=null;_id=`${ma++}`;constructor(){s(ne).load(Ge),this._id=s(Wn)+"-"+ma++}describe(e,t,n){if(!this._canBeDescribed(e,t))return;let o=ca(t,n);typeof t!="string"?(er(t,this._id),this._messageRegistry.set(o,{messageElement:t,referenceCount:0})):this._messageRegistry.has(o)||this._createMessageElement(t,n),this._isElementDescribedByMessage(e,o)||this._addMessageReference(e,o)}removeDescription(e,t,n){if(!t||!this._isElementNode(e))return;let o=ca(t,n);if(this._isElementDescribedByMessage(e,o)&&this._removeMessageReference(e,o),typeof t=="string"){let r=this._messageRegistry.get(o);r&&r.referenceCount===0&&this._deleteMessageElement(o)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${ai}="${this._id}"]`);for(let t=0;t<e.length;t++)this._removeCdkDescribedByReferenceIds(e[t]),e[t].removeAttribute(ai);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,t){let n=this._document.createElement("div");er(n,this._id),n.textContent=e,t&&n.setAttribute("role",t),this._createMessagesContainer(),this._messagesContainer.appendChild(n),this._messageRegistry.set(ca(e,t),{messageElement:n,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e="cdk-describedby-message-container",t=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let o=0;o<t.length;o++)t[o].remove();let n=this._document.createElement("div");n.style.visibility="hidden",n.classList.add(e),n.classList.add("cdk-visually-hidden"),this._platform.isBrowser||n.setAttribute("platform","server"),this._document.body.appendChild(n),this._messagesContainer=n}_removeCdkDescribedByReferenceIds(e){let t=oi(e,"aria-describedby").filter(n=>n.indexOf(nr)!=0);e.setAttribute("aria-describedby",t.join(" "))}_addMessageReference(e,t){let n=this._messageRegistry.get(t);ua(e,"aria-describedby",n.messageElement.id),e.setAttribute(ai,this._id),n.referenceCount++}_removeMessageReference(e,t){let n=this._messageRegistry.get(t);n.referenceCount--,ri(e,"aria-describedby",n.messageElement.id),e.removeAttribute(ai)}_isElementDescribedByMessage(e,t){let n=oi(e,"aria-describedby"),o=this._messageRegistry.get(t),r=o&&o.messageElement.id;return!!r&&n.indexOf(r)!=-1}_canBeDescribed(e,t){if(!this._isElementNode(e))return!1;if(t&&typeof t=="object")return!0;let n=t==null?"":`${t}`.trim(),o=e.getAttribute("aria-label");return n?!o||o.trim()!==n:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function ca(i,a){return typeof i=="string"?`${a||""}/${i}`:i}function er(i,a){i.id||(i.id=`${nr}-${a}-${ma++}`)}var Us=new k("cdk-dir-doc",{providedIn:"root",factory:()=>s($)}),Gs=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ar(i){let a=i?.toLowerCase()||"";return a==="auto"&&typeof navigator<"u"&&navigator?.language?Gs.test(navigator.language)?"rtl":"ltr":a==="rtl"?"rtl":"ltr"}var xe=(()=>{class i{get value(){return this.valueSignal()}valueSignal=j("ltr");change=new v;constructor(){let e=s(Us,{optional:!0});if(e){let t=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ar(t||n||"ltr"))}}ngOnDestroy(){this.change.complete()}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var ie=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({})}return i})();function pe(i){return i==null?"":typeof i=="string"?i:`${i}px`}function Qe(i){return i!=null&&`${i}`!="false"}function or(i,a=/\s+/){let e=[];if(i!=null){let t=Array.isArray(i)?i:`${i}`.split(a);for(let n of t){let o=`${n}`.trim();o&&e.push(o)}}return e}function pa(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}var bt;function rr(){if(bt==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return bt=!1,bt;if(document.documentElement?.style&&"scrollBehavior"in document.documentElement.style)bt=!0;else{let i=Element.prototype.scrollTo;i?bt=!/\{\s*\[native code\]\s*\}/.test(i.toString()):bt=!1}}return bt}var Ks=20,Wt=(()=>{class i{_ngZone=s(F);_platform=s(G);_renderer=s(Ee).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new E;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=Ks){return this._platform.isBrowser?new Et(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let n=e>0?this._scrolled.pipe(Hi(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):tt()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let n=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(we(o=>!o||n.indexOf(o)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((n,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_scrollableContainsElement(e,t){let n=Se(t),o=e.getElementRef().nativeElement;do if(n==o)return!0;while(n=n.parentElement);return!1}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var qs=20,ct=(()=>{class i{_platform=s(G);_listeners;_viewportSize=null;_change=new E;_document=s($);constructor(){let e=s(F),t=s(Ee).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let n=o=>this._change.next(o);this._listeners=[t.listen("window","resize",n),t.listen("window","orientationchange",n)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+t,height:n,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),n=e.documentElement,o=n.getBoundingClientRect(),r=-o.top||e.body?.scrollTop||t.scrollY||n.scrollTop||0,p=-o.left||e.body?.scrollLeft||t.scrollX||n.scrollLeft||0;return{top:r,left:p}}change(e=qs){return e>0?this._change.pipe(Hi(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var vt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({})}return i})(),ha=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[ie,vt,ie,vt]})}return i})();var kn=class{_attachedHost=null;attach(a){return this._attachedHost=a,a.attach(this)}detach(){let a=this._attachedHost;a!=null&&(this._attachedHost=null,a.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(a){this._attachedHost=a}},mt=class extends kn{component;viewContainerRef;injector;projectableNodes;bindings;constructor(a,e,t,n,o){super(),this.component=a,this.viewContainerRef=e,this.injector=t,this.projectableNodes=n,this.bindings=o||null}},Ut=class extends kn{templateRef;viewContainerRef;context;injector;constructor(a,e,t,n){super(),this.templateRef=a,this.viewContainerRef=e,this.context=t,this.injector=n}get origin(){return this.templateRef.elementRef}attach(a,e=this.context){return this.context=e,super.attach(a)}detach(){return this.context=void 0,super.detach()}},fa=class extends kn{element;constructor(a){super(),this.element=a instanceof I?a.nativeElement:a}},si=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(a){if(a instanceof mt)return this._attachedPortal=a,this.attachComponentPortal(a);if(a instanceof Ut)return this._attachedPortal=a,this.attachTemplatePortal(a);if(this.attachDomPortal&&a instanceof fa)return this._attachedPortal=a,this.attachDomPortal(a)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(a){this._disposeFn=a}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}},li=class extends si{outletElement;_appRef;_defaultInjector;constructor(a,e,t){super(),this.outletElement=a,this._appRef=e,this._defaultInjector=t}attachComponentPortal(a){let e;if(a.viewContainerRef){let t=a.injector||a.viewContainerRef.injector,n=t.get(Ki,null,{optional:!0})||void 0;e=a.viewContainerRef.createComponent(a.component,{index:a.viewContainerRef.length,injector:t,ngModuleRef:n,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0}),this.setDisposeFn(()=>e.destroy())}else{let t=this._appRef,n=a.injector||this._defaultInjector||Q.NULL,o=n.get(St,t.injector);e=Kn(a.component,{elementInjector:n,environmentInjector:o,projectableNodes:a.projectableNodes||void 0,bindings:a.bindings||void 0}),t.attachView(e.hostView),this.setDisposeFn(()=>{t.viewCount>0&&t.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=a,e}attachTemplatePortal(a){let e=a.viewContainerRef,t=e.createEmbeddedView(a.templateRef,a.context,{injector:a.injector});return t.rootNodes.forEach(n=>this.outletElement.appendChild(n)),t.detectChanges(),this.setDisposeFn(()=>{let n=e.indexOf(t);n!==-1&&e.remove(n)}),this._attachedPortal=a,t}attachDomPortal=a=>{let e=a.element;e.parentNode;let t=this.outletElement.ownerDocument.createComment("dom-portal");e.parentNode.insertBefore(t,e),this.outletElement.appendChild(e),this._attachedPortal=a,super.setDisposeFn(()=>{t.parentNode&&t.parentNode.replaceChild(e,t)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(a){return a.hostView.rootNodes[0]}};var ga=(()=>{class i extends si{_moduleRef=s(Ki,{optional:!0});_document=s($);_viewContainerRef=s(qe);_isInitialized=!1;_attachedRef=null;constructor(){super()}get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new v;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let t=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,n=t.createComponent(e.component,{index:t.length,injector:e.injector||t.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0});return t!==this._viewContainerRef&&this._getRootNode().appendChild(n.hostView.rootNodes[0]),super.setDisposeFn(()=>n.destroy()),this._attachedPortal=e,this._attachedRef=n,this.attached.emit(n),n}attachTemplatePortal(e){e.setAttachedHost(this);let t=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=t,this.attached.emit(t),t}attachDomPortal=e=>{let t=e.element;t.parentNode;let n=this._document.createComment("dom-portal");e.setAttachedHost(this),t.parentNode.insertBefore(n,t),this._getRootNode().appendChild(t),this._attachedPortal=e,super.setDisposeFn(()=>{n.parentNode&&n.parentNode.replaceChild(t,n)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","cdkPortalOutlet",""]],inputs:{portal:[0,"cdkPortalOutlet","portal"]},outputs:{attached:"attached"},exportAs:["cdkPortalOutlet"],features:[We]})}return i})(),di=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({})}return i})();var sr=rr();function gi(i){return new ci(i.get(ct),i.get($))}var ci=class{_viewportRuler;_previousHTMLStyles={top:"",left:""};_previousScrollPosition;_isEnabled=!1;_document;constructor(a,e){this._viewportRuler=a,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let a=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=a.style.left||"",this._previousHTMLStyles.top=a.style.top||"",a.style.left=pe(-this._previousScrollPosition.left),a.style.top=pe(-this._previousScrollPosition.top),a.classList.add("cdk-global-scrollblock"),this._isEnabled=!0}}disable(){if(this._isEnabled){let a=this._document.documentElement,e=this._document.body,t=a.style,n=e.style,o=t.scrollBehavior||"",r=n.scrollBehavior||"";this._isEnabled=!1,t.left=this._previousHTMLStyles.left,t.top=this._previousHTMLStyles.top,a.classList.remove("cdk-global-scrollblock"),sr&&(t.scrollBehavior=n.scrollBehavior="auto"),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),sr&&(t.scrollBehavior=o,n.scrollBehavior=r)}}_canBeEnabled(){if(this._document.documentElement.classList.contains("cdk-global-scrollblock")||this._isEnabled)return!1;let e=this._document.documentElement,t=this._viewportRuler.getViewportSize();return e.scrollHeight>t.height||e.scrollWidth>t.width}};function hr(i,a){return new mi(i.get(Wt),i.get(F),i.get(ct),a)}var mi=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(a,e,t,n){this._scrollDispatcher=a,this._ngZone=e,this._viewportRuler=t,this._config=n}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(this._scrollSubscription)return;let a=this._scrollDispatcher.scrolled(0).pipe(we(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=a.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=a.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var Dn=class{enable(){}disable(){}attach(){}};function _a(i,a){return a.some(e=>{let t=i.bottom<e.top,n=i.top>e.bottom,o=i.right<e.left,r=i.left>e.right;return t||n||o||r})}function lr(i,a){return a.some(e=>{let t=i.top<e.top,n=i.bottom>e.bottom,o=i.left<e.left,r=i.right>e.right;return t||n||o||r})}function Je(i,a){return new ui(i.get(Wt),i.get(ct),i.get(F),a)}var ui=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(a,e,t,n){this._scrollDispatcher=a,this._viewportRuler=e,this._ngZone=t,this._config=n}attach(a){this._overlayRef,this._overlayRef=a}enable(){if(!this._scrollSubscription){let a=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(a).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:t,height:n}=this._viewportRuler.getViewportSize();_a(e,[{width:t,height:n,bottom:n,right:t,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}},fr=(()=>{class i{_injector=s(Q);constructor(){}noop=()=>new Dn;close=e=>hr(this._injector,e);block=()=>gi(this._injector);reposition=e=>Je(this._injector,e);static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),xt=class{positionStrategy;scrollStrategy=new Dn;panelClass="";hasBackdrop=!1;backdropClass="cdk-overlay-dark-backdrop";disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(a){if(a){let e=Object.keys(a);for(let t of e)a[t]!==void 0&&(this[t]=a[t])}}};var pi=class{connectionPair;scrollableViewProperties;constructor(a,e){this.connectionPair=a,this.scrollableViewProperties=e}};var gr=(()=>{class i{_attachedOverlays=[];_document=s($);_isAttached=!1;constructor(){}ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let t=this._attachedOverlays.indexOf(e);t>-1&&this._attachedOverlays.splice(t,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,t,n){return n.observers.length<1?!1:e.eventPredicate?e.eventPredicate(t):!0}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),_r=(()=>{class i extends gr{_ngZone=s(F);_renderer=s(Ee).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen("body","keydown",this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let t=this._attachedOverlays;for(let n=t.length-1;n>-1;n--){let o=t[n];if(this.canReceiveEvent(o,e,o._keydownEvents)){this._ngZone.run(()=>o._keydownEvents.next(e));break}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=rn(i)))(n||i)}})();static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),br=(()=>{class i extends gr{_platform=s(G);_ngZone=s(F);_renderer=s(Ee).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let t=this._document.body,n={capture:!0},o=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[o.listen(t,"pointerdown",this._pointerDownListener,n),o.listen(t,"click",this._clickListener,n),o.listen(t,"auxclick",this._clickListener,n),o.listen(t,"contextmenu",this._clickListener,n)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=t.style.cursor,t.style.cursor="pointer",this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=ye(e)};_clickListener=e=>{let t=ye(e),n=e.type==="click"&&this._pointerDownEventTarget?this._pointerDownEventTarget:t;this._pointerDownEventTarget=null;let o=this._attachedOverlays.slice();for(let r=o.length-1;r>-1;r--){let p=o[r],g=p._outsidePointerEvents;if(!(!p.hasAttached()||!this.canReceiveEvent(p,e,g))){if(dr(p.overlayElement,t)||dr(p.overlayElement,n))break;this._ngZone?this._ngZone.run(()=>g.next(e)):g.next(e)}}};static \u0275fac=(()=>{let e;return function(n){return(e||(e=rn(i)))(n||i)}})();static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();function dr(i,a){let e=typeof ShadowRoot<"u"&&ShadowRoot,t=a;for(;t;){if(t===i)return!0;t=e&&t instanceof ShadowRoot?t.host:t.parentNode}return!1}var vr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-overlay-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2,changeDetection:0})}return i})(),yr=(()=>{class i{_platform=s(G);_containerElement;_document=s($);_styleLoader=s(ne);constructor(){}ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e="cdk-overlay-container";if(this._platform.isBrowser||pa()){let n=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let o=0;o<n.length;o++)n[o].remove()}let t=this._document.createElement("div");t.classList.add(e),pa()?t.setAttribute("platform","test"):this._platform.isBrowser||t.setAttribute("platform","server"),this._document.body.appendChild(t),this._containerElement=t}_loadStyles(){this._styleLoader.load(vr)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ba=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(a,e,t,n){this._renderer=e,this._ngZone=t,this.element=a.createElement("div"),this.element.classList.add("cdk-overlay-backdrop"),this._cleanupClick=e.listen(this.element,"click",n)}detach(){this._ngZone.runOutsideAngular(()=>{let a=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(a,"transitionend",this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),a.style.pointerEvents="none",a.classList.remove("cdk-overlay-backdrop-showing")})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function va(i){return i&&i.nodeType===1}var hi=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new E;_attachments=new E;_detachments=new E;_positionStrategy;_scrollStrategy;_locationChanges=se.EMPTY;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new E;_outsidePointerEvents=new E;_afterNextRenderRef;constructor(a,e,t,n,o,r,p,g,A,C=!1,W,_e){this._portalOutlet=a,this._host=e,this._pane=t,this._config=n,this._ngZone=o,this._keyboardDispatcher=r,this._document=p,this._location=g,this._outsideClickDispatcher=A,this._animationsDisabled=C,this._injector=W,this._renderer=_e,n.scrollStrategy&&(this._scrollStrategy=n.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=n.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(a){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(a);return this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=Fe(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation&&(this._locationChanges=this._location.subscribe(()=>this.dispose())),this._outsideClickDispatcher.add(this),typeof e?.onDestroy=="function"&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let a=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges.unsubscribe(),this._outsideClickDispatcher.remove(this),a}dispose(){if(this._disposed)return;let a=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges.unsubscribe(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,a&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(a){a!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=a,this.hasAttached()&&(a.attach(this),this.updatePosition()))}updateSize(a){this._config=ee(ee({},this._config),a),this._updateElementSize()}setDirection(a){this._config=Nn(ee({},this._config),{direction:a}),this._updateElementDirection()}addPanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!0)}removePanelClass(a){this._pane&&this._toggleClasses(this._pane,a,!1)}getDirection(){let a=this._config.direction;return a?typeof a=="string"?a:a.value:"ltr"}updateScrollStrategy(a){a!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=a,this.hasAttached()&&(a.attach(this),a.enable()))}_updateElementDirection(){this._host.setAttribute("dir",this.getDirection())}_updateElementSize(){if(!this._pane)return;let a=this._pane.style;a.width=pe(this._config.width),a.height=pe(this._config.height),a.minWidth=pe(this._config.minWidth),a.minHeight=pe(this._config.minHeight),a.maxWidth=pe(this._config.maxWidth),a.maxHeight=pe(this._config.maxHeight)}_togglePointerEvents(a){this._pane.style.pointerEvents=a?"":"none"}_attachHost(){if(!this._host.parentElement){let a=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;va(a)?a.after(this._host):a?.type==="parent"?a.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let a="cdk-overlay-backdrop-showing";this._backdropRef?.dispose(),this._backdropRef=new ba(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add("cdk-overlay-backdrop-noop-animation"),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<"u"?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(a))}):this._backdropRef.element.classList.add(a)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(a,e,t){let n=jt(e||[]).filter(o=>!!o);n.length&&(t?a.classList.add(...n):a.classList.remove(...n))}_detachContentWhenEmpty(){let a=!1;try{this._detachContentAfterRenderRef=Fe(()=>{a=!0,this._detachContent()},{injector:this._injector})}catch(e){if(a)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let a=this._scrollStrategy;a?.disable(),a?.detach?.()}},cr="cdk-overlay-connected-position-bounding-box",Xs=/([A-Za-z%]+)$/;function wt(i,a){return new Gt(a,i.get(ct),i.get($),i.get(G),i.get(yr))}var Gt=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new E;_resizeSubscription=se.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation="global";positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(a,e,t,n,o){this._viewportRuler=e,this._document=t,this._platform=n,this._overlayContainer=o,this.setOrigin(a)}attach(a){this._overlayRef&&this._overlayRef,this._validatePositions(),a.hostElement.classList.add(cr),this._overlayRef=a,this._boundingBox=a.hostElement,this._pane=a.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let a=this._originRect,e=this._overlayRect,t=this._viewportRect,n=this._containerRect,o=[],r;for(let p of this._preferredPositions){let g=this._getOriginPoint(a,n,p),A=this._getOverlayPoint(g,e,p),C=this._getOverlayFit(A,e,t,p);if(C.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(p,g);return}if(this._canFitWithFlexibleDimensions(C,A,t)){o.push({position:p,origin:g,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(g,p)});continue}(!r||r.overlayFit.visibleArea<C.visibleArea)&&(r={overlayFit:C,overlayPoint:A,originPoint:g,position:p,overlayRect:e})}if(o.length){let p=null,g=-1;for(let A of o){let C=A.boundingBoxRect.width*A.boundingBoxRect.height*(A.position.weight||1);C>g&&(g=C,p=A)}this._isPushed=!1,this._applyPosition(p.position,p.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(r.position,r.originPoint);return}this._applyPosition(r.position,r.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&yt(this._boundingBox.style,{top:"",left:"",right:"",bottom:"",height:"",width:"",alignItems:"",justifyContent:""}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(cr),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let a=this._lastPosition;a?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(a,this._getOriginPoint(this._originRect,this._containerRect,a))):this.apply()}withScrollableContainers(a){return this._scrollables=a,this}withPositions(a){return this._preferredPositions=a,a.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(a){return this._viewportMargin=a,this}withFlexibleDimensions(a=!0){return this._hasFlexibleDimensions=a,this}withGrowAfterOpen(a=!0){return this._growAfterOpen=a,this}withPush(a=!0){return this._canPush=a,this}withLockedPosition(a=!0){return this._positionLocked=a,this}setOrigin(a){return this._origin=a,this}withDefaultOffsetX(a){return this._offsetX=a,this}withDefaultOffsetY(a){return this._offsetY=a,this}withTransformOriginOn(a){return this._transformOriginSelector=a,this}withPopoverLocation(a){return this._popoverLocation=a,this}getPopoverInsertionPoint(){return this._popoverLocation==="global"?null:this._popoverLocation!=="inline"?this._popoverLocation:this._origin instanceof I?this._origin.nativeElement:va(this._origin)?this._origin:null}_getOriginPoint(a,e,t){let n;if(t.originX=="center")n=a.left+a.width/2;else{let r=this._isRtl()?a.right:a.left,p=this._isRtl()?a.left:a.right;n=t.originX=="start"?r:p}e.left<0&&(n-=e.left);let o;return t.originY=="center"?o=a.top+a.height/2:o=t.originY=="top"?a.top:a.bottom,e.top<0&&(o-=e.top),{x:n,y:o}}_getOverlayPoint(a,e,t){let n;t.overlayX=="center"?n=-e.width/2:t.overlayX==="start"?n=this._isRtl()?-e.width:0:n=this._isRtl()?0:-e.width;let o;return t.overlayY=="center"?o=-e.height/2:o=t.overlayY=="top"?0:-e.height,{x:a.x+n,y:a.y+o}}_getOverlayFit(a,e,t,n){let o=ur(e),{x:r,y:p}=a,g=this._getOffset(n,"x"),A=this._getOffset(n,"y");g&&(r+=g),A&&(p+=A);let C=0-r,W=r+o.width-t.width,_e=0-p,be=p+o.height-t.height,fe=this._subtractOverflows(o.width,C,W),he=this._subtractOverflows(o.height,_e,be),pt=fe*he;return{visibleArea:pt,isCompletelyWithinViewport:o.width*o.height===pt,fitsInViewportVertically:he===o.height,fitsInViewportHorizontally:fe==o.width}}_canFitWithFlexibleDimensions(a,e,t){if(this._hasFlexibleDimensions){let n=t.bottom-e.y,o=t.right-e.x,r=mr(this._overlayRef.getConfig().minHeight),p=mr(this._overlayRef.getConfig().minWidth),g=a.fitsInViewportVertically||r!=null&&r<=n,A=a.fitsInViewportHorizontally||p!=null&&p<=o;return g&&A}return!1}_pushOverlayOnScreen(a,e,t){if(this._previousPushAmount&&this._positionLocked)return{x:a.x+this._previousPushAmount.x,y:a.y+this._previousPushAmount.y};let n=ur(e),o=this._viewportRect,r=Math.max(a.x+n.width-o.width,0),p=Math.max(a.y+n.height-o.height,0),g=Math.max(o.top-t.top-a.y,0),A=Math.max(o.left-t.left-a.x,0),C=0,W=0;return n.width<=o.width?C=A||-r:C=a.x<this._getViewportMarginStart()?o.left-t.left-a.x:0,n.height<=o.height?W=g||-p:W=a.y<this._getViewportMarginTop()?o.top-t.top-a.y:0,this._previousPushAmount={x:C,y:W},{x:a.x+C,y:a.y+W}}_applyPosition(a,e){if(this._setTransformOrigin(a),this._setOverlayElementStyles(e,a),this._setBoundingBoxStyles(e,a),a.panelClass&&this._addPanelClasses(a.panelClass),this._positionChanges.observers.length){let t=this._getScrollVisibility();if(a!==this._lastPosition||!this._lastScrollVisibility||!Zs(this._lastScrollVisibility,t)){let n=new pi(a,t);this._positionChanges.next(n)}this._lastScrollVisibility=t}this._lastPosition=a,this._isInitialRender=!1}_setTransformOrigin(a){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),t,n=a.overlayY;a.overlayX==="center"?t="center":this._isRtl()?t=a.overlayX==="start"?"right":"left":t=a.overlayX==="start"?"left":"right";for(let o=0;o<e.length;o++)e[o].style.transformOrigin=`${t} ${n}`}_calculateBoundingBoxRect(a,e){let t=this._viewportRect,n=this._isRtl(),o,r,p;if(e.overlayY==="top")r=a.y,o=t.height-r+this._getViewportMarginBottom();else if(e.overlayY==="bottom")p=t.height-a.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),o=t.height-p+this._getViewportMarginTop();else{let be=Math.min(t.bottom-a.y+t.top,a.y),fe=this._lastBoundingBoxSize.height;o=be*2,r=a.y-be,o>fe&&!this._isInitialRender&&!this._growAfterOpen&&(r=a.y-fe/2)}let g=e.overlayX==="start"&&!n||e.overlayX==="end"&&n,A=e.overlayX==="end"&&!n||e.overlayX==="start"&&n,C,W,_e;if(A)_e=t.width-a.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),C=a.x-this._getViewportMarginStart();else if(g)W=a.x,C=t.right-a.x-this._getViewportMarginEnd();else{let be=Math.min(t.right-a.x+t.left,a.x),fe=this._lastBoundingBoxSize.width;C=be*2,W=a.x-be,C>fe&&!this._isInitialRender&&!this._growAfterOpen&&(W=a.x-fe/2)}return{top:r,left:W,bottom:p,right:_e,width:C,height:o}}_setBoundingBoxStyles(a,e){let t=this._calculateBoundingBoxRect(a,e);!this._isInitialRender&&!this._growAfterOpen&&(t.height=Math.min(t.height,this._lastBoundingBoxSize.height),t.width=Math.min(t.width,this._lastBoundingBoxSize.width));let n={};if(this._hasExactPosition())n.top=n.left="0",n.bottom=n.right="auto",n.maxHeight=n.maxWidth="",n.width=n.height="100%";else{let o=this._overlayRef.getConfig().maxHeight,r=this._overlayRef.getConfig().maxWidth;n.width=pe(t.width),n.height=pe(t.height),n.top=pe(t.top)||"auto",n.bottom=pe(t.bottom)||"auto",n.left=pe(t.left)||"auto",n.right=pe(t.right)||"auto",e.overlayX==="center"?n.alignItems="center":n.alignItems=e.overlayX==="end"?"flex-end":"flex-start",e.overlayY==="center"?n.justifyContent="center":n.justifyContent=e.overlayY==="bottom"?"flex-end":"flex-start",o&&(n.maxHeight=pe(o)),r&&(n.maxWidth=pe(r))}this._lastBoundingBoxSize=t,yt(this._boundingBox.style,n)}_resetBoundingBoxStyles(){yt(this._boundingBox.style,{top:"0",left:"0",right:"0",bottom:"0",height:"",width:"",alignItems:"",justifyContent:""})}_resetOverlayElementStyles(){yt(this._pane.style,{top:"",left:"",bottom:"",right:"",position:"",transform:""})}_setOverlayElementStyles(a,e){let t={},n=this._hasExactPosition(),o=this._hasFlexibleDimensions,r=this._overlayRef.getConfig();if(n){let C=this._viewportRuler.getViewportScrollPosition();yt(t,this._getExactOverlayY(e,a,C)),yt(t,this._getExactOverlayX(e,a,C))}else t.position="static";let p="",g=this._getOffset(e,"x"),A=this._getOffset(e,"y");g&&(p+=`translateX(${g}px) `),A&&(p+=`translateY(${A}px)`),t.transform=p.trim(),r.maxHeight&&(n?t.maxHeight=pe(r.maxHeight):o&&(t.maxHeight="")),r.maxWidth&&(n?t.maxWidth=pe(r.maxWidth):o&&(t.maxWidth="")),yt(this._pane.style,t)}_getExactOverlayY(a,e,t){let n={top:"",bottom:""},o=this._getOverlayPoint(e,this._overlayRect,a);if(this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t)),a.overlayY==="bottom"){let r=this._document.documentElement.clientHeight;n.bottom=`${r-(o.y+this._overlayRect.height)}px`}else n.top=pe(o.y);return n}_getExactOverlayX(a,e,t){let n={left:"",right:""},o=this._getOverlayPoint(e,this._overlayRect,a);this._isPushed&&(o=this._pushOverlayOnScreen(o,this._overlayRect,t));let r;if(this._isRtl()?r=a.overlayX==="end"?"left":"right":r=a.overlayX==="end"?"right":"left",r==="right"){let p=this._document.documentElement.clientWidth;n.right=`${p-(o.x+this._overlayRect.width)}px`}else n.left=pe(o.x);return n}_getScrollVisibility(){let a=this._getOriginRect(),e=this._pane.getBoundingClientRect(),t=this._scrollables.map(n=>n.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:lr(a,t),isOriginOutsideView:_a(a,t),isOverlayClipped:lr(e,t),isOverlayOutsideView:_a(e,t)}}_subtractOverflows(a,...e){return e.reduce((t,n)=>t-Math.max(n,0),a)}_getNarrowedViewportRect(){let a=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,t=this._viewportRuler.getViewportScrollPosition();return{top:t.top+this._getViewportMarginTop(),left:t.left+this._getViewportMarginStart(),right:t.left+a-this._getViewportMarginEnd(),bottom:t.top+e-this._getViewportMarginBottom(),width:a-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()==="rtl"}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(a,e){return e==="x"?a.offsetX==null?this._offsetX:a.offsetX:a.offsetY==null?this._offsetY:a.offsetY}_validatePositions(){}_addPanelClasses(a){this._pane&&jt(a).forEach(e=>{e!==""&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(a=>{this._pane.classList.remove(a)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin=="number"?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let a=this._origin;if(a instanceof I)return a.nativeElement.getBoundingClientRect();if(a instanceof Element)return a.getBoundingClientRect();let e=a.width||0,t=a.height||0;return{top:a.y,bottom:a.y+t,left:a.x,right:a.x+e,height:t,width:e}}_getContainerRect(){let a=this._overlayRef.getConfig().usePopover&&this._popoverLocation!=="global",e=this._overlayContainer.getContainerElement();a&&(e.style.display="block");let t=e.getBoundingClientRect();return a&&(e.style.display=""),t}};function yt(i,a){for(let e in a)a.hasOwnProperty(e)&&(i[e]=a[e]);return i}function mr(i){if(typeof i!="number"&&i!=null){let[a,e]=i.split(Xs);return!e||e==="px"?parseFloat(a):null}return i||null}function ur(i){return{top:Math.floor(i.top),right:Math.floor(i.right),bottom:Math.floor(i.bottom),left:Math.floor(i.left),width:Math.floor(i.width),height:Math.floor(i.height)}}function Zs(i,a){return i===a?!0:i.isOriginClipped===a.isOriginClipped&&i.isOriginOutsideView===a.isOriginOutsideView&&i.isOverlayClipped===a.isOverlayClipped&&i.isOverlayOutsideView===a.isOverlayOutsideView}var pr="cdk-global-overlay-wrapper";function _i(i){return new fi}var fi=class{_overlayRef;_cssPosition="static";_topOffset="";_bottomOffset="";_alignItems="";_xPosition="";_xOffset="";_width="";_height="";_isDisposed=!1;attach(a){let e=a.getConfig();this._overlayRef=a,this._width&&!e.width&&a.updateSize({width:this._width}),this._height&&!e.height&&a.updateSize({height:this._height}),a.hostElement.classList.add(pr),this._isDisposed=!1}top(a=""){return this._bottomOffset="",this._topOffset=a,this._alignItems="flex-start",this}left(a=""){return this._xOffset=a,this._xPosition="left",this}bottom(a=""){return this._topOffset="",this._bottomOffset=a,this._alignItems="flex-end",this}right(a=""){return this._xOffset=a,this._xPosition="right",this}start(a=""){return this._xOffset=a,this._xPosition="start",this}end(a=""){return this._xOffset=a,this._xPosition="end",this}width(a=""){return this._overlayRef?this._overlayRef.updateSize({width:a}):this._width=a,this}height(a=""){return this._overlayRef?this._overlayRef.updateSize({height:a}):this._height=a,this}centerHorizontally(a=""){return this.left(a),this._xPosition="center",this}centerVertically(a=""){return this.top(a),this._alignItems="center",this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,t=this._overlayRef.getConfig(),{width:n,height:o,maxWidth:r,maxHeight:p}=t,g=(n==="100%"||n==="100vw")&&(!r||r==="100%"||r==="100vw"),A=(o==="100%"||o==="100vh")&&(!p||p==="100%"||p==="100vh"),C=this._xPosition,W=this._xOffset,_e=this._overlayRef.getConfig().direction==="rtl",be="",fe="",he="";g?he="flex-start":C==="center"?(he="center",_e?fe=W:be=W):_e?C==="left"||C==="end"?(he="flex-end",be=W):(C==="right"||C==="start")&&(he="flex-start",fe=W):C==="left"||C==="start"?(he="flex-start",be=W):(C==="right"||C==="end")&&(he="flex-end",fe=W),a.position=this._cssPosition,a.marginLeft=g?"0":be,a.marginTop=A?"0":this._topOffset,a.marginBottom=this._bottomOffset,a.marginRight=g?"0":fe,e.justifyContent=he,e.alignItems=A?"flex-start":this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let a=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,t=e.style;e.classList.remove(pr),t.justifyContent=t.alignItems=a.marginTop=a.marginBottom=a.marginLeft=a.marginRight=a.position="",this._overlayRef=null,this._isDisposed=!0}},xr=(()=>{class i{_injector=s(Q);constructor(){}global(){return _i()}flexibleConnectedTo(e){return wt(this._injector,e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Mn=new k("OVERLAY_DEFAULT_CONFIG");function kt(i,a){i.get(ne).load(vr);let e=i.get(yr),t=i.get($),n=i.get(re),o=i.get(ln),r=i.get(xe),p=i.get(ve,null,{optional:!0})||i.get(Ee).createRenderer(null,null),g=new xt(a),A=i.get(Mn,null,{optional:!0})?.usePopover??!0;g.direction=g.direction||r.value,"showPopover"in t.body?g.usePopover=a?.usePopover??A:g.usePopover=!1;let C=t.createElement("div"),W=t.createElement("div");C.id=n.getId("cdk-overlay-"),C.classList.add("cdk-overlay-pane"),W.appendChild(C),g.usePopover&&(W.setAttribute("popover","manual"),W.classList.add("cdk-overlay-popover"));let _e=g.usePopover?g.positionStrategy?.getPopoverInsertionPoint?.():null;return va(_e)?_e.after(W):_e?.type==="parent"?_e.element.appendChild(W):e.getContainerElement().appendChild(W),new hi(new li(C,o,i),W,C,g,i.get(F),i.get(_r),t,i.get(_o),i.get(br),a?.disableAnimations??i.get(Un,null,{optional:!0})==="NoopAnimations",i.get(St),p)}var Cr=(()=>{class i{scrollStrategies=s(fr);_positionBuilder=s(xr);_injector=s(Q);constructor(){}create(e){return kt(this._injector,e)}position(){return this._positionBuilder}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),$s=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"}],Qs=new k("cdk-connected-overlay-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(Q);return()=>Je(i)}}),Kt=(()=>{class i{elementRef=s(I);constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","cdk-overlay-origin",""],["","overlay-origin",""],["","cdkOverlayOrigin",""]],exportAs:["cdkOverlayOrigin"]})}return i})(),wr=new k("cdk-connected-overlay-default-config"),bi=(()=>{class i{_dir=s(xe,{optional:!0});_injector=s(Q);_overlayRef;_templatePortal;_backdropSubscription=se.EMPTY;_attachSubscription=se.EMPTY;_detachSubscription=se.EMPTY;_positionSubscription=se.EMPTY;_offsetX;_offsetY;_position;_scrollStrategyFactory=s(Qs);_ngZone=s(F);origin;positions;positionStrategy;get offsetX(){return this._offsetX}set offsetX(e){this._offsetX=e,this._position&&this._updatePositionStrategy(this._position)}get offsetY(){return this._offsetY}set offsetY(e){this._offsetY=e,this._position&&this._updatePositionStrategy(this._position)}width;height;minWidth;minHeight;backdropClass;panelClass;viewportMargin=0;scrollStrategy;open=!1;disableClose=!1;transformOriginSelector;hasBackdrop=!1;lockPosition=!1;flexibleDimensions=!1;growAfterOpen=!1;push=!1;disposeOnNavigation=!1;usePopover;matchWidth=!1;set _config(e){typeof e!="string"&&this._assignConfig(e)}backdropClick=new v;positionChange=new v;attach=new v;detach=new v;overlayKeydown=new v;overlayOutsideClick=new v;constructor(){let e=s(sn),t=s(qe),n=s(wr,{optional:!0}),o=s(Mn,{optional:!0});this.usePopover=o?.usePopover===!1?null:"global",this._templatePortal=new Ut(e,t),this.scrollStrategy=this._scrollStrategyFactory(),n&&this._assignConfig(n)}get overlayRef(){return this._overlayRef}get dir(){return this._dir?this._dir.value:"ltr"}ngOnDestroy(){this._attachSubscription.unsubscribe(),this._detachSubscription.unsubscribe(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this._overlayRef?.dispose()}ngOnChanges(e){this._position&&(this._updatePositionStrategy(this._position),this._overlayRef?.updateSize({width:this._getWidth(),minWidth:this.minWidth,height:this.height,minHeight:this.minHeight}),e.origin&&this.open&&this._position.apply()),e.open&&(this.open?this.attachOverlay():this.detachOverlay())}_createOverlay(){(!this.positions||!this.positions.length)&&(this.positions=$s);let e=this._overlayRef=kt(this._injector,this._buildConfig());this._attachSubscription=e.attachments().subscribe(()=>this.attach.emit()),this._detachSubscription=e.detachments().subscribe(()=>this.detach.emit()),e.keydownEvents().subscribe(t=>{this.overlayKeydown.next(t),t.keyCode===27&&!this.disableClose&&!ue(t)&&(t.preventDefault(),this.detachOverlay())}),this._overlayRef.outsidePointerEvents().subscribe(t=>{let n=this._getOriginElement(),o=ye(t);(!n||n!==o&&!n.contains(o))&&this.overlayOutsideClick.next(t)})}_buildConfig(){let e=this._position=this.positionStrategy||this._createPositionStrategy(),t=new xt({direction:this._dir||"ltr",positionStrategy:e,scrollStrategy:this.scrollStrategy,hasBackdrop:this.hasBackdrop,disposeOnNavigation:this.disposeOnNavigation,usePopover:!!this.usePopover});return(this.height||this.height===0)&&(t.height=this.height),(this.minWidth||this.minWidth===0)&&(t.minWidth=this.minWidth),(this.minHeight||this.minHeight===0)&&(t.minHeight=this.minHeight),this.backdropClass&&(t.backdropClass=this.backdropClass),this.panelClass&&(t.panelClass=this.panelClass),t}_updatePositionStrategy(e){let t=this.positions.map(n=>({originX:n.originX,originY:n.originY,overlayX:n.overlayX,overlayY:n.overlayY,offsetX:n.offsetX||this.offsetX,offsetY:n.offsetY||this.offsetY,panelClass:n.panelClass||void 0}));return e.setOrigin(this._getOrigin()).withPositions(t).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector).withPopoverLocation(this.usePopover===null?"global":this.usePopover)}_createPositionStrategy(){let e=wt(this._injector,this._getOrigin());return this._updatePositionStrategy(e),e}_getOrigin(){return this.origin instanceof Kt?this.origin.elementRef:this.origin}_getOriginElement(){return this.origin instanceof Kt?this.origin.elementRef.nativeElement:this.origin instanceof I?this.origin.nativeElement:typeof Element<"u"&&this.origin instanceof Element?this.origin:null}_getWidth(){return this.width?this.width:this.matchWidth?this._getOriginElement()?.getBoundingClientRect?.().width:void 0}attachOverlay(){this._overlayRef||this._createOverlay();let e=this._overlayRef;e.getConfig().hasBackdrop=this.hasBackdrop,e.updateSize({width:this._getWidth()}),e.hasAttached()||e.attach(this._templatePortal),this.hasBackdrop?this._backdropSubscription=e.backdropClick().subscribe(t=>this.backdropClick.emit(t)):this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.positionChange.observers.length>0&&(this._positionSubscription=this._position.positionChanges.pipe(Ja(()=>this.positionChange.observers.length>0)).subscribe(t=>{this._ngZone.run(()=>this.positionChange.emit(t)),this.positionChange.observers.length===0&&this._positionSubscription.unsubscribe()})),this.open=!0}detachOverlay(){this._overlayRef?.detach(),this._backdropSubscription.unsubscribe(),this._positionSubscription.unsubscribe(),this.open=!1}_assignConfig(e){this.origin=e.origin??this.origin,this.positions=e.positions??this.positions,this.positionStrategy=e.positionStrategy??this.positionStrategy,this.offsetX=e.offsetX??this.offsetX,this.offsetY=e.offsetY??this.offsetY,this.width=e.width??this.width,this.height=e.height??this.height,this.minWidth=e.minWidth??this.minWidth,this.minHeight=e.minHeight??this.minHeight,this.backdropClass=e.backdropClass??this.backdropClass,this.panelClass=e.panelClass??this.panelClass,this.viewportMargin=e.viewportMargin??this.viewportMargin,this.scrollStrategy=e.scrollStrategy??this.scrollStrategy,this.disableClose=e.disableClose??this.disableClose,this.transformOriginSelector=e.transformOriginSelector??this.transformOriginSelector,this.hasBackdrop=e.hasBackdrop??this.hasBackdrop,this.lockPosition=e.lockPosition??this.lockPosition,this.flexibleDimensions=e.flexibleDimensions??this.flexibleDimensions,this.growAfterOpen=e.growAfterOpen??this.growAfterOpen,this.push=e.push??this.push,this.disposeOnNavigation=e.disposeOnNavigation??this.disposeOnNavigation,this.usePopover=e.usePopover??this.usePopover,this.matchWidth=e.matchWidth??this.matchWidth}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","cdk-connected-overlay",""],["","connected-overlay",""],["","cdkConnectedOverlay",""]],inputs:{origin:[0,"cdkConnectedOverlayOrigin","origin"],positions:[0,"cdkConnectedOverlayPositions","positions"],positionStrategy:[0,"cdkConnectedOverlayPositionStrategy","positionStrategy"],offsetX:[0,"cdkConnectedOverlayOffsetX","offsetX"],offsetY:[0,"cdkConnectedOverlayOffsetY","offsetY"],width:[0,"cdkConnectedOverlayWidth","width"],height:[0,"cdkConnectedOverlayHeight","height"],minWidth:[0,"cdkConnectedOverlayMinWidth","minWidth"],minHeight:[0,"cdkConnectedOverlayMinHeight","minHeight"],backdropClass:[0,"cdkConnectedOverlayBackdropClass","backdropClass"],panelClass:[0,"cdkConnectedOverlayPanelClass","panelClass"],viewportMargin:[0,"cdkConnectedOverlayViewportMargin","viewportMargin"],scrollStrategy:[0,"cdkConnectedOverlayScrollStrategy","scrollStrategy"],open:[0,"cdkConnectedOverlayOpen","open"],disableClose:[0,"cdkConnectedOverlayDisableClose","disableClose"],transformOriginSelector:[0,"cdkConnectedOverlayTransformOriginOn","transformOriginSelector"],hasBackdrop:[2,"cdkConnectedOverlayHasBackdrop","hasBackdrop",w],lockPosition:[2,"cdkConnectedOverlayLockPosition","lockPosition",w],flexibleDimensions:[2,"cdkConnectedOverlayFlexibleDimensions","flexibleDimensions",w],growAfterOpen:[2,"cdkConnectedOverlayGrowAfterOpen","growAfterOpen",w],push:[2,"cdkConnectedOverlayPush","push",w],disposeOnNavigation:[2,"cdkConnectedOverlayDisposeOnNavigation","disposeOnNavigation",w],usePopover:[0,"cdkConnectedOverlayUsePopover","usePopover"],matchWidth:[2,"cdkConnectedOverlayMatchWidth","matchWidth",w],_config:[0,"cdkConnectedOverlay","_config"]},outputs:{backdropClick:"backdropClick",positionChange:"positionChange",attach:"attach",detach:"detach",overlayKeydown:"overlayKeydown",overlayOutsideClick:"overlayOutsideClick"},exportAs:["cdkConnectedOverlay"],features:[ge]})}return i})(),En=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({providers:[Cr],imports:[ie,di,ha,ha]})}return i})();var qt,kr=["color","button","checkbox","date","datetime-local","email","file","hidden","image","month","number","password","radio","range","reset","search","submit","tel","text","time","url","week"];function ya(){if(qt)return qt;if(typeof document!="object"||!document)return qt=new Set(kr),qt;let i=document.createElement("input");return qt=new Set(kr.filter(a=>(i.setAttribute("type",a),i.type===a))),qt}var Ke=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["structural-styles"]],decls:0,vars:0,template:function(t,n){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--mat-focus-indicator-display, none);
  border-width: var(--mat-focus-indicator-border-width, 3px);
  border-style: var(--mat-focus-indicator-border-style, solid);
  border-color: var(--mat-focus-indicator-border-color, transparent);
  border-radius: var(--mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --mat-focus-indicator-display: block;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Js=new k("MATERIAL_ANIMATIONS"),Dr=null;function el(){return s(Js,{optional:!0})?.animationsDisabled||s(Un,{optional:!0})==="NoopAnimations"?"di-disabled":(Dr??=s(Yt).matchMedia("(prefers-reduced-motion)").matches,Dr?"reduced-motion":"enabled")}function le(){return el()!=="enabled"}var Be=(function(i){return i[i.FADING_IN=0]="FADING_IN",i[i.VISIBLE=1]="VISIBLE",i[i.FADING_OUT=2]="FADING_OUT",i[i.HIDDEN=3]="HIDDEN",i})(Be||{}),xa=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=Be.HIDDEN;constructor(a,e,t,n=!1){this._renderer=a,this.element=e,this.config=t,this._animationForciblyDisabledThroughCss=n}fadeOut(){this._renderer.fadeOutRipple(this)}},Mr=zt({passive:!0,capture:!0}),Ca=class{_events=new Map;addHandler(a,e,t,n){let o=this._events.get(e);if(o){let r=o.get(t);r?r.add(n):o.set(t,new Set([n]))}else this._events.set(e,new Map([[t,new Set([n])]])),a.runOutsideAngular(()=>{document.addEventListener(e,this._delegateEventHandler,Mr)})}removeHandler(a,e,t){let n=this._events.get(a);if(!n)return;let o=n.get(e);o&&(o.delete(t),o.size===0&&n.delete(e),n.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,Mr)))}_delegateEventHandler=a=>{let e=ye(a);e&&this._events.get(a.type)?.forEach((t,n)=>{(n===e||n.contains(e))&&t.forEach(o=>o.handleEvent(a))})}},Sn={enterDuration:225,exitDuration:150},tl=800,Er=zt({passive:!0,capture:!0}),Sr=["mousedown","touchstart"],Tr=["mouseup","mouseleave","touchend","touchcancel"],nl=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["mat-ripple-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--mat-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2,changeDetection:0})}return i})(),Tn=class i{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new Ca;constructor(a,e,t,n,o){this._target=a,this._ngZone=e,this._platform=n,n.isBrowser&&(this._containerElement=Se(t)),o&&o.get(ne).load(nl)}fadeInRipple(a,e,t={}){let n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o=ee(ee({},Sn),t.animation);t.centered&&(a=n.left+n.width/2,e=n.top+n.height/2);let r=t.radius||il(a,e,n),p=a-n.left,g=e-n.top,A=o.enterDuration,C=document.createElement("div");C.classList.add("mat-ripple-element"),C.style.left=`${p-r}px`,C.style.top=`${g-r}px`,C.style.height=`${r*2}px`,C.style.width=`${r*2}px`,t.color!=null&&(C.style.backgroundColor=t.color),C.style.transitionDuration=`${A}ms`,this._containerElement.appendChild(C);let W=window.getComputedStyle(C),_e=W.transitionProperty,be=W.transitionDuration,fe=_e==="none"||be==="0s"||be==="0s, 0s"||n.width===0&&n.height===0,he=new xa(this,C,t,fe);C.style.transform="scale3d(1, 1, 1)",he.state=Be.FADING_IN,t.persistent||(this._mostRecentTransientRipple=he);let pt=null;return!fe&&(A||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let Ka=()=>{pt&&(pt.fallbackTimer=null),clearTimeout(qa),this._finishRippleTransition(he)},zi=()=>this._destroyRipple(he),qa=setTimeout(zi,A+100);C.addEventListener("transitionend",Ka),C.addEventListener("transitioncancel",zi),pt={onTransitionEnd:Ka,onTransitionCancel:zi,fallbackTimer:qa}}),this._activeRipples.set(he,pt),(fe||!A)&&this._finishRippleTransition(he),he}fadeOutRipple(a){if(a.state===Be.FADING_OUT||a.state===Be.HIDDEN)return;let e=a.element,t=ee(ee({},Sn),a.config.animation);e.style.transitionDuration=`${t.exitDuration}ms`,e.style.opacity="0",a.state=Be.FADING_OUT,(a._animationForciblyDisabledThroughCss||!t.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let e=Se(a);!this._platform.isBrowser||!e||e===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=e,Sr.forEach(t=>{i._eventManager.addHandler(this._ngZone,t,e,this)}))}handleEvent(a){a.type==="mousedown"?this._onMousedown(a):a.type==="touchstart"?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Tr.forEach(e=>{this._triggerElement.addEventListener(e,this,Er)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===Be.FADING_IN?this._startFadeOutTransition(a):a.state===Be.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let e=a===this._mostRecentTransientRipple,{persistent:t}=a.config;a.state=Be.VISIBLE,!t&&(!e||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let e=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=Be.HIDDEN,e!==null&&(a.element.removeEventListener("transitionend",e.onTransitionEnd),a.element.removeEventListener("transitioncancel",e.onTransitionCancel),e.fallbackTimer!==null&&clearTimeout(e.fallbackTimer)),a.element.remove()}_onMousedown(a){let e=_n(a),t=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+tl;!this._target.rippleDisabled&&!e&&!t&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!bn(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let e=a.changedTouches;if(e)for(let t=0;t<e.length;t++)this.fadeInRipple(e[t].clientX,e[t].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let e=a.state===Be.VISIBLE||a.config.terminateOnPointerUp&&a.state===Be.FADING_IN;!a.config.persistent&&e&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(Sr.forEach(e=>i._eventManager.removeHandler(e,a,this)),this._pointerUpEventsRegistered&&(Tr.forEach(e=>a.removeEventListener(e,this,Er)),this._pointerUpEventsRegistered=!1))}};function il(i,a,e){let t=Math.max(Math.abs(i-e.left),Math.abs(i-e.right)),n=Math.max(Math.abs(a-e.top),Math.abs(a-e.bottom));return Math.sqrt(t*t+n*n)}var wa=new k("mat-ripple-global-options"),Xt=(()=>{class i{_elementRef=s(I);_animationsDisabled=le();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let e=s(F),t=s(G),n=s(wa,{optional:!0}),o=s(Q);this._globalOptions=n||{},this._rippleRenderer=new Tn(this,e,this._elementRef,t,o)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:ee(ee(ee({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(e,t=0,n){return typeof e=="number"?this._rippleRenderer.fadeInRipple(e,t,ee(ee({},this.rippleConfig),n)):this._rippleRenderer.fadeInRipple(0,0,ee(ee({},this.rippleConfig),e))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","mat-ripple",""],["","matRipple",""]],hostAttrs:[1,"mat-ripple"],hostVars:2,hostBindings:function(t,n){t&2&&O("mat-ripple-unbounded",n.unbounded)},inputs:{color:[0,"matRippleColor","color"],unbounded:[0,"matRippleUnbounded","unbounded"],centered:[0,"matRippleCentered","centered"],radius:[0,"matRippleRadius","radius"],animation:[0,"matRippleAnimation","animation"],disabled:[0,"matRippleDisabled","disabled"],trigger:[0,"matRippleTrigger","trigger"]},exportAs:["matRipple"]})}return i})();var al={capture:!0},ol=["focus","mousedown","mouseenter","touchstart"],ka="mat-ripple-loader-uninitialized",Da="mat-ripple-loader-class-name",Or="mat-ripple-loader-centered",vi="mat-ripple-loader-disabled",Ar=(()=>{class i{_document=s($);_animationsDisabled=le();_globalRippleOptions=s(wa,{optional:!0});_platform=s(G);_ngZone=s(F);_injector=s(Q);_eventCleanups;_hosts=new Map;constructor(){let e=s(Ee).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>ol.map(t=>e.listen(this._document,t,this._onInteraction,al)))}ngOnDestroy(){let e=this._hosts.keys();for(let t of e)this.destroyRipple(t);this._eventCleanups.forEach(t=>t())}configureRipple(e,t){e.setAttribute(ka,this._globalRippleOptions?.namespace??""),(t.className||!e.hasAttribute(Da))&&e.setAttribute(Da,t.className||""),t.centered&&e.setAttribute(Or,""),t.disabled&&e.setAttribute(vi,"")}setDisabled(e,t){let n=this._hosts.get(e);n?(n.target.rippleDisabled=t,!t&&!n.hasSetUpEvents&&(n.hasSetUpEvents=!0,n.renderer.setupTriggerEvents(e))):t?e.setAttribute(vi,""):e.removeAttribute(vi)}_onInteraction=e=>{let t=ye(e);if(t instanceof HTMLElement){let n=t.closest(`[${ka}="${this._globalRippleOptions?.namespace??""}"]`);n&&this._createRipple(n)}};_createRipple(e){if(!this._document||this._hosts.has(e))return;e.querySelector(".mat-ripple")?.remove();let t=this._document.createElement("span");t.classList.add("mat-ripple",e.getAttribute(Da)),e.append(t);let n=this._globalRippleOptions,o=this._animationsDisabled?0:n?.animation?.enterDuration??Sn.enterDuration,r=this._animationsDisabled?0:n?.animation?.exitDuration??Sn.exitDuration,p={rippleDisabled:this._animationsDisabled||n?.disabled||e.hasAttribute(vi),rippleConfig:{centered:e.hasAttribute(Or),terminateOnPointerUp:n?.terminateOnPointerUp,animation:{enterDuration:o,exitDuration:r}}},g=new Tn(p,this._ngZone,t,this._platform,this._injector),A=!p.rippleDisabled;A&&g.setupTriggerEvents(e),this._hosts.set(e,{target:p,renderer:g,hasSetUpEvents:A}),e.removeAttribute(ka)}destroyRipple(e){let t=this._hosts.get(e);t&&(t.renderer._removeTriggerEvents(),this._hosts.delete(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var rl=["mat-icon-button",""],sl=["*"],ll=new k("MAT_BUTTON_CONFIG");function Ir(i){return i==null?void 0:gt(i)}var Ma=(()=>{class i{_elementRef=s(I);_ngZone=s(F);_animationsDisabled=le();_config=s(ll,{optional:!0});_focusMonitor=s(Ue);_cleanupClick;_renderer=s(ve);_rippleLoader=s(Ar);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(e){this._disableRipple=e,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(e){this.tabIndex=e}constructor(){s(ne).load(Ke);let e=this._elementRef.nativeElement;this._isAnchor=e.tagName==="A",this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(e,{className:"mat-mdc-button-ripple"})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(e="program",t){e?this._focusMonitor.focusVia(this._elementRef.nativeElement,e,t):this._elementRef.nativeElement.focus(t)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,"click",e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,hostAttrs:[1,"mat-mdc-button-base"],hostVars:13,hostBindings:function(t,n){t&2&&(Y("disabled",n._getDisabledAttribute())("aria-disabled",n._getAriaDisabled())("tabindex",n._getTabIndex()),Me(n.color?"mat-"+n.color:""),O("mat-mdc-button-disabled",n.disabled)("mat-mdc-button-disabled-interactive",n.disabledInteractive)("mat-unthemed",!n.color)("_mat-animation-noopable",n._animationsDisabled))},inputs:{color:"color",disableRipple:[2,"disableRipple","disableRipple",w],disabled:[2,"disabled","disabled",w],ariaDisabled:[2,"aria-disabled","ariaDisabled",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w],tabIndex:[2,"tabIndex","tabIndex",Ir],_tabindex:[2,"tabindex","_tabindex",Ir]}})}return i})(),yi=(()=>{class i extends Ma{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["button","mat-icon-button",""],["a","mat-icon-button",""],["button","matIconButton",""],["a","matIconButton",""]],hostAttrs:[1,"mdc-icon-button","mat-mdc-icon-button"],exportAs:["matButton","matAnchor"],features:[We],attrs:rl,ngContentSelectors:sl,decls:4,vars:0,consts:[[1,"mat-mdc-button-persistent-ripple","mdc-icon-button__ripple"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(ce(),ke(0,"span",0),U(1),ke(2,"span",1)(3,"span",2))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--mat-icon-button-state-layer-size, 40px);
  height: var(--mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--mat-icon-button-state-layer-size, 40px) - var(--mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--mat-icon-button-icon-size, 24px);
  color: var(--mat-icon-button-icon-color, var(--mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--mat-icon-button-ripple-color, color-mix(in srgb, var(--mat-sys-on-surface-variant) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-icon-button-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-icon-button-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-icon-button-touch-target-size, 48px);
  display: var(--mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--mat-icon-button-icon-size, 24px);
  height: var(--mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--mat-icon-button-container-shape, var(--mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Zt=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[ie]})}return i})();var dl=["matButton",""],cl=[[["",8,"material-icons",3,"iconPositionEnd",""],["mat-icon",3,"iconPositionEnd",""],["","matButtonIcon","",3,"iconPositionEnd",""]],"*",[["","iconPositionEnd","",8,"material-icons"],["mat-icon","iconPositionEnd",""],["","matButtonIcon","","iconPositionEnd",""]]],ml=[".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])","*",".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"];var Rr=new Map([["text",["mat-mdc-button"]],["filled",["mdc-button--unelevated","mat-mdc-unelevated-button"]],["elevated",["mdc-button--raised","mat-mdc-raised-button"]],["outlined",["mdc-button--outlined","mat-mdc-outlined-button"]],["tonal",["mat-tonal-button"]]]),Ea=(()=>{class i extends Ma{get appearance(){return this._appearance}set appearance(e){this.setAppearance(e||this._config?.defaultAppearance||"text")}_appearance=null;constructor(){super();let e=ul(this._elementRef.nativeElement);e&&this.setAppearance(e)}setAppearance(e){if(e===this._appearance)return;let t=this._elementRef.nativeElement.classList,n=this._appearance?Rr.get(this._appearance):null,o=Rr.get(e);n&&t.remove(...n),t.add(...o),this._appearance=e}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["button","matButton",""],["a","matButton",""],["button","mat-button",""],["button","mat-raised-button",""],["button","mat-flat-button",""],["button","mat-stroked-button",""],["a","mat-button",""],["a","mat-raised-button",""],["a","mat-flat-button",""],["a","mat-stroked-button",""]],hostAttrs:[1,"mdc-button"],inputs:{appearance:[0,"matButton","appearance"]},exportAs:["matButton","matAnchor"],features:[We],attrs:dl,ngContentSelectors:ml,decls:7,vars:4,consts:[[1,"mat-mdc-button-persistent-ripple"],[1,"mdc-button__label"],[1,"mat-focus-indicator"],[1,"mat-mdc-button-touch-target"]],template:function(t,n){t&1&&(ce(cl),ke(0,"span",0),U(1),M(2,"span",1),U(3,1),D(),U(4,2),ke(5,"span",2)(6,"span",3)),t&2&&O("mdc-button__ripple",!n._isFab)("mdc-fab__ripple",n._isFab)},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--mat-button-text-horizontal-padding, 12px);
  height: var(--mat-button-text-container-height, 40px);
  font-family: var(--mat-button-text-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-text-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-text-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-text-label-text-transform);
  font-weight: var(--mat-button-text-label-text-weight, var(--mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--mat-button-text-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--mat-button-text-label-text-color, var(--mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, mat-icon, [matButtonIcon]) {
  padding: 0 var(--mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-offset, -4px);
  margin-left: var(--mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-text-icon-spacing, 8px);
  margin-left: var(--mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--mat-button-text-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-text-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-text-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-text-touch-target-size, 48px);
  display: var(--mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-filled-container-height, 40px);
  font-family: var(--mat-button-filled-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-filled-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-filled-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-filled-label-text-transform);
  font-weight: var(--mat-button-filled-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-offset, -8px);
  margin-left: var(--mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-filled-icon-spacing, 8px);
  margin-left: var(--mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--mat-button-filled-ripple-color, color-mix(in srgb, var(--mat-sys-on-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-state-layer-color, var(--mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-filled-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-filled-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-filled-touch-target-size, 48px);
  display: var(--mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--mat-button-filled-label-text-color, var(--mat-sys-on-primary));
  background-color: var(--mat-button-filled-container-color, var(--mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--mat-button-filled-container-shape, var(--mat-sys-corner-full));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--mat-button-protected-container-elevation-shadow, var(--mat-sys-level1));
  height: var(--mat-button-protected-container-height, 40px);
  font-family: var(--mat-button-protected-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-protected-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-protected-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-protected-label-text-transform);
  font-weight: var(--mat-button-protected-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-offset, -8px);
  margin-left: var(--mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-protected-icon-spacing, 8px);
  margin-left: var(--mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--mat-button-protected-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-protected-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-protected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-protected-touch-target-size, 48px);
  display: var(--mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--mat-button-protected-label-text-color, var(--mat-sys-primary));
  background-color: var(--mat-button-protected-container-color, var(--mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--mat-button-protected-container-shape, var(--mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--mat-button-protected-hover-container-elevation-shadow, var(--mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--mat-button-protected-focus-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--mat-button-protected-pressed-container-elevation-shadow, var(--mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-protected-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--mat-button-protected-disabled-container-elevation-shadow, var(--mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-outlined-container-height, 40px);
  font-family: var(--mat-button-outlined-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-outlined-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-outlined-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-outlined-label-text-transform);
  font-weight: var(--mat-button-outlined-label-text-weight, var(--mat-sys-label-large-weight));
  border-radius: var(--mat-button-outlined-container-shape, var(--mat-sys-corner-full));
  border-width: var(--mat-button-outlined-outline-width, 1px);
  padding: 0 var(--mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-offset, -8px);
  margin-left: var(--mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--mat-button-outlined-ripple-color, color-mix(in srgb, var(--mat-sys-primary) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-state-layer-color, var(--mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-outlined-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-outlined-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-outlined-touch-target-size, 48px);
  display: var(--mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--mat-button-outlined-label-text-color, var(--mat-sys-primary));
  border-color: var(--mat-button-outlined-outline-color, var(--mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  border-color: var(--mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--mat-button-tonal-container-height, 40px);
  font-family: var(--mat-button-tonal-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-tonal-label-text-size, var(--mat-sys-label-large-size));
  letter-spacing: var(--mat-button-tonal-label-text-tracking, var(--mat-sys-label-large-tracking));
  text-transform: var(--mat-button-tonal-label-text-transform);
  font-weight: var(--mat-button-tonal-label-text-weight, var(--mat-sys-label-large-weight));
  padding: 0 var(--mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--mat-button-tonal-label-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-tonal-container-color, var(--mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--mat-button-tonal-container-shape, var(--mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-offset, -8px);
  margin-left: var(--mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--mat-button-tonal-ripple-color, color-mix(in srgb, var(--mat-sys-on-secondary-container) calc(var(--mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-state-layer-color, var(--mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--mat-button-tonal-disabled-state-layer-color, var(--mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--mat-button-tonal-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--mat-button-tonal-touch-target-size, 48px);
  display: var(--mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function ul(i){return i.hasAttribute("mat-raised-button")?"elevated":i.hasAttribute("mat-stroked-button")?"outlined":i.hasAttribute("mat-flat-button")?"filled":i.hasAttribute("mat-button")?"text":null}var Pr=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[Zt,ie]})}return i})();var pl=["tooltip"],hl=20;var fl=new k("mat-tooltip-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(Q);return()=>Je(i,{scrollThrottle:hl})}}),gl=new k("mat-tooltip-default-options",{providedIn:"root",factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Fr="tooltip-panel",_l={passive:!0},bl=8,vl=8,yl=24,xl=200,Vr=(()=>{class i{_elementRef=s(I);_ngZone=s(F);_platform=s(G);_ariaDescriber=s(ir);_focusMonitor=s(Ue);_dir=s(xe);_injector=s(Q);_viewContainerRef=s(qe);_mediaMatcher=s(Yt);_document=s($);_renderer=s(ve);_animationsDisabled=le();_defaultOptions=s(gl,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position="below";_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Cl;_viewportMargin=8;_currentPosition;_cssClassPrefix="mat-mdc";_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=Qe(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=Qe(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=Ht(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=Ht(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures="auto";get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():"",!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message="";get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new E;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=bl}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(ae(this._destroyed)).subscribe(e=>{e?e==="keyboard"&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,"tooltip"),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new mt(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=n.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(ae(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof I)return this._overlayRef;this._detach()}let t=this._injector.get(Wt).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${Fr}`,o=wt(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation("global");return o.positionChanges.pipe(ae(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=kt(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(fl)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(ae(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(ae(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(ae(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(ae(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(ee(ee({},n.main),o.main)),this._addOffset(ee(ee({},n.fallback),o.fallback))])}_addOffset(e){let t=vl,n=!this._dir||this._dir.value=="ltr";return e.originY==="top"?e.offsetY=-t:e.originY==="bottom"?e.offsetY=t:e.originX==="start"?e.offsetX=n?-t:t:e.originX==="end"&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"||t=="below"?n={originX:"center",originY:t=="above"?"top":"bottom"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={originX:"start",originY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={originX:"end",originY:"center"});let{x:o,y:r}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value=="ltr",t=this.position,n;t=="above"?n={overlayX:"center",overlayY:"bottom"}:t=="below"?n={overlayX:"center",overlayY:"top"}:t=="before"||t=="left"&&e||t=="right"&&!e?n={overlayX:"end",overlayY:"center"}:(t=="after"||t=="right"&&e||t=="left"&&!e)&&(n={overlayX:"start",overlayY:"center"});let{x:o,y:r}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Fe(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position==="above"||this.position==="below"?t==="top"?t="bottom":t==="bottom"&&(t="top"):e==="end"?e="start":e==="start"&&(e="end"),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:o}=e,r;if(t==="center"?this._dir&&this._dir.value==="rtl"?r=n==="end"?"left":"right":r=n==="start"?"left":"right":r=t==="bottom"&&o==="top"?"above":"below",r!==this._currentPosition){let p=this._overlayRef;if(p){let g=`${this._cssClassPrefix}-${Fr}-`;p.removePanelClass(g+this._currentPosition),p.addPanelClass(g+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!=="off"&&(this._disableNativeGesturesIfNecessary(),this._addListener("touchstart",e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener("mouseenter",e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener("mouseleave",e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener("wheel",e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!=="off"){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener("touchend",e),this._addListener("touchcancel",e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,_l))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e=="function"?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia("(any-hover: none)").matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!=="off"){let t=this._elementRef.nativeElement,n=t.style;(e==="on"||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA")&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect="none"),(e==="on"||!t.draggable)&&(n.webkitUserDrag="none"),n.touchAction="none",n.webkitTapHighlightColor="transparent"}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,"tooltip"),this._isDestroyed||Fe({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,"tooltip")}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type==="keydown"?this._isTooltipVisible()&&e.keyCode===27&&!ue(e):!0;static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","matTooltip",""]],hostAttrs:[1,"mat-mdc-tooltip-trigger"],hostVars:2,hostBindings:function(t,n){t&2&&O("mat-mdc-tooltip-disabled",n.disabled)},inputs:{position:[0,"matTooltipPosition","position"],positionAtOrigin:[0,"matTooltipPositionAtOrigin","positionAtOrigin"],disabled:[0,"matTooltipDisabled","disabled"],showDelay:[0,"matTooltipShowDelay","showDelay"],hideDelay:[0,"matTooltipHideDelay","hideDelay"],touchGestures:[0,"matTooltipTouchGestures","touchGestures"],message:[0,"matTooltip","message"],tooltipClass:[0,"matTooltipClass","tooltipClass"]},exportAs:["matTooltip"]})}return i})(),Cl=(()=>{class i{_changeDetectorRef=s(J);_elementRef=s(I);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=le();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new E;_showAnimation="mat-mdc-tooltip-show";_hideAnimation="mat-mdc-tooltip-hide";constructor(){}show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>yl&&e.width>=xl}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:n),t.classList.add(e?n:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle=="function"){let r=getComputedStyle(t);(r.getPropertyValue("animation-duration")==="0s"||r.getPropertyValue("animation-name")==="none")&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add("_mat-animation-noopable"),this._finalizeAnimation(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-tooltip-component"]],viewQuery:function(t,n){if(t&1&&me(pl,7),t&2){let o;R(o=P())&&(n._tooltip=o.first)}},hostAttrs:["aria-hidden","true"],hostBindings:function(t,n){t&1&&x("mouseleave",function(r){return n._handleMouseLeave(r)})},decls:4,vars:5,consts:[["tooltip",""],[1,"mdc-tooltip","mat-mdc-tooltip",3,"animationend"],[1,"mat-mdc-tooltip-surface","mdc-tooltip__surface"]],template:function(t,n){t&1&&(M(0,"div",1,0),Ne("animationend",function(r){return n._handleAnimationEnd(r)}),M(2,"div",2),m(3),D()()),t&2&&(Me(n.tooltipClass),O("mdc-tooltip--multiline",n._isMultiline),c(3),V(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--mat-tooltip-container-color, var(--mat-sys-inverse-surface));
  color: var(--mat-tooltip-supporting-text-color, var(--mat-sys-inverse-on-surface));
  border-radius: var(--mat-tooltip-container-shape, var(--mat-sys-corner-extra-small));
  font-family: var(--mat-tooltip-supporting-text-font, var(--mat-sys-body-small-font));
  font-size: var(--mat-tooltip-supporting-text-size, var(--mat-sys-body-small-size));
  font-weight: var(--mat-tooltip-supporting-text-weight, var(--mat-sys-body-small-weight));
  line-height: var(--mat-tooltip-supporting-text-line-height, var(--mat-sys-body-small-line-height));
  letter-spacing: var(--mat-tooltip-supporting-text-tracking, var(--mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2,changeDetection:0})}return i})();var xi=new k("MAT_INPUT_VALUE_ACCESSOR");var Sa=class{_box;_destroyed=new E;_resizeSubject=new E;_resizeObserver;_elementObservables=new Map;constructor(a){this._box=a,typeof ResizeObserver<"u"&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(a){return this._elementObservables.has(a)||this._elementObservables.set(a,new Et(e=>{let t=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(a,{box:this._box}),()=>{this._resizeObserver?.unobserve(a),t.unsubscribe(),this._elementObservables.delete(a)}}).pipe(we(e=>e.some(t=>t.target===a)),Wi({bufferSize:1,refCount:!0}),ae(this._destroyed))),this._elementObservables.get(a)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}},Lr=(()=>{class i{_cleanupErrorListener;_observers=new Map;_ngZone=s(F);constructor(){typeof ResizeObserver<"u"}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,t){let n=t?.box||"content-box";return this._observers.has(n)||this._observers.set(n,new Sa(n)),this._observers.get(n).observe(e)}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var wl=["notch"],kl=["matFormFieldNotchedOutline",""],Dl=["*"],Nr=["iconPrefixContainer"],Br=["textPrefixContainer"],zr=["iconSuffixContainer"],Hr=["textSuffixContainer"],Ml=["textField"],El=["*",[["mat-label"]],[["","matPrefix",""],["","matIconPrefix",""]],[["","matTextPrefix",""]],[["","matTextSuffix",""]],[["","matSuffix",""],["","matIconSuffix",""]],[["mat-error"],["","matError",""]],[["mat-hint",3,"align","end"]],[["mat-hint","align","end"]]],Sl=["*","mat-label","[matPrefix], [matIconPrefix]","[matTextPrefix]","[matTextSuffix]","[matSuffix], [matIconSuffix]","mat-error, [matError]","mat-hint:not([align='end'])","mat-hint[align='end']"];function Tl(i,a){i&1&&H(0,"span",21)}function Ol(i,a){if(i&1&&(l(0,"label",20),U(1,1),h(2,Tl,1,0,"span",21),d()),i&2){let e=u(2);y("floating",e._shouldLabelFloat())("monitorResize",e._hasOutline())("id",e._labelId),Y("for",e._control.disableAutomaticLabeling?null:e._control.id),c(2),f(!e.hideRequiredMarker&&e._control.required?2:-1)}}function Al(i,a){if(i&1&&h(0,Ol,3,5,"label",20),i&2){let e=u();f(e._hasFloatingLabel()?0:-1)}}function Il(i,a){i&1&&H(0,"div",7)}function Rl(i,a){}function Pl(i,a){if(i&1&&Xe(0,Rl,0,0,"ng-template",13),i&2){u(2);let e=De(1);y("ngTemplateOutlet",e)}}function Fl(i,a){if(i&1&&(l(0,"div",9),h(1,Pl,1,1,null,13),d()),i&2){let e=u();y("matFormFieldNotchedOutlineOpen",e._shouldLabelFloat()),c(),f(e._forceDisplayInfixLabel()?-1:1)}}function Vl(i,a){i&1&&(l(0,"div",10,2),U(2,2),d())}function Ll(i,a){i&1&&(l(0,"div",11,3),U(2,3),d())}function Nl(i,a){}function Bl(i,a){if(i&1&&Xe(0,Nl,0,0,"ng-template",13),i&2){u();let e=De(1);y("ngTemplateOutlet",e)}}function zl(i,a){i&1&&(l(0,"div",14,4),U(2,4),d())}function Hl(i,a){i&1&&(l(0,"div",15,5),U(2,5),d())}function jl(i,a){i&1&&H(0,"div",16)}function Yl(i,a){i&1&&(l(0,"div",18),U(1,6),d())}function Wl(i,a){if(i&1&&(l(0,"mat-hint",22),m(1),d()),i&2){let e=u(2);y("id",e._hintLabelId),c(),V(e.hintLabel)}}function Ul(i,a){if(i&1&&(l(0,"div",19),h(1,Wl,2,2,"mat-hint",22),U(2,7),H(3,"div",23),U(4,8),d()),i&2){let e=u();c(),f(e.hintLabel?1:-1)}}var Ta=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["mat-label"]]})}return i})(),Gl=new k("MatError");var Oa=(()=>{class i{align="start";id=s(re).getId("mat-mdc-hint-");static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["mat-hint"]],hostAttrs:[1,"mat-mdc-form-field-hint","mat-mdc-form-field-bottom-align"],hostVars:4,hostBindings:function(t,n){t&2&&(de("id",n.id),Y("align",null),O("mat-mdc-form-field-hint-end",n.align==="end"))},inputs:{align:"align",id:"id"}})}return i})(),qr=new k("MatPrefix"),On=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","matPrefix",""],["","matIconPrefix",""],["","matTextPrefix",""]],inputs:{_isTextSelector:[0,"matTextPrefix","_isTextSelector"]},features:[oe([{provide:qr,useExisting:i}])]})}return i})(),Xr=new k("MatSuffix"),An=(()=>{class i{set _isTextSelector(e){this._isText=!0}_isText=!1;static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","matSuffix",""],["","matIconSuffix",""],["","matTextSuffix",""]],inputs:{_isTextSelector:[0,"matTextSuffix","_isTextSelector"]},features:[oe([{provide:Xr,useExisting:i}])]})}return i})(),Zr=new k("FloatingLabelParent"),jr=(()=>{class i{_elementRef=s(I);get floating(){return this._floating}set floating(e){this._floating=e,this.monitorResize&&this._handleResize()}_floating=!1;get monitorResize(){return this._monitorResize}set monitorResize(e){this._monitorResize=e,this._monitorResize?this._subscribeToResize():this._resizeSubscription.unsubscribe()}_monitorResize=!1;_resizeObserver=s(Lr);_ngZone=s(F);_parent=s(Zr);_resizeSubscription=new se;constructor(){}ngOnDestroy(){this._resizeSubscription.unsubscribe()}getWidth(){return Kl(this._elementRef.nativeElement)}get element(){return this._elementRef.nativeElement}_handleResize(){setTimeout(()=>this._parent._handleLabelResized())}_subscribeToResize(){this._resizeSubscription.unsubscribe(),this._ngZone.runOutsideAngular(()=>{this._resizeSubscription=this._resizeObserver.observe(this._elementRef.nativeElement,{box:"border-box"}).subscribe(()=>this._handleResize())})}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["label","matFormFieldFloatingLabel",""]],hostAttrs:[1,"mdc-floating-label","mat-mdc-floating-label"],hostVars:2,hostBindings:function(t,n){t&2&&O("mdc-floating-label--float-above",n.floating)},inputs:{floating:"floating",monitorResize:"monitorResize"}})}return i})();function Kl(i){let a=i;if(a.offsetParent!==null)return a.scrollWidth;let e=a.cloneNode(!0);e.style.setProperty("position","absolute"),e.style.setProperty("transform","translate(-9999px, -9999px)"),document.documentElement.appendChild(e);let t=e.scrollWidth;return e.remove(),t}var Yr="mdc-line-ripple--active",Ci="mdc-line-ripple--deactivating",Wr=(()=>{class i{_elementRef=s(I);_cleanupTransitionEnd;constructor(){let e=s(F),t=s(ve);e.runOutsideAngular(()=>{this._cleanupTransitionEnd=t.listen(this._elementRef.nativeElement,"transitionend",this._handleTransitionEnd)})}activate(){let e=this._elementRef.nativeElement.classList;e.remove(Ci),e.add(Yr)}deactivate(){this._elementRef.nativeElement.classList.add(Ci)}_handleTransitionEnd=e=>{let t=this._elementRef.nativeElement.classList,n=t.contains(Ci);e.propertyName==="opacity"&&n&&t.remove(Yr,Ci)};ngOnDestroy(){this._cleanupTransitionEnd()}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["div","matFormFieldLineRipple",""]],hostAttrs:[1,"mdc-line-ripple"]})}return i})(),Ur=(()=>{class i{_elementRef=s(I);_ngZone=s(F);open=!1;_notch;ngAfterViewInit(){let e=this._elementRef.nativeElement,t=e.querySelector(".mdc-floating-label");t?(e.classList.add("mdc-notched-outline--upgraded"),typeof requestAnimationFrame=="function"&&(t.style.transitionDuration="0s",this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>t.style.transitionDuration="")}))):e.classList.add("mdc-notched-outline--no-label")}_setNotchWidth(e){let t=this._notch.nativeElement;!this.open||!e?t.style.width="":t.style.width=`calc(${e}px * var(--mat-mdc-form-field-floating-label-scale, 0.75) + 9px)`}_setMaxWidth(e){this._notch.nativeElement.style.setProperty("--mat-form-field-notch-max-width",`calc(100% - ${e}px)`)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["div","matFormFieldNotchedOutline",""]],viewQuery:function(t,n){if(t&1&&me(wl,5),t&2){let o;R(o=P())&&(n._notch=o.first)}},hostAttrs:[1,"mdc-notched-outline"],hostVars:2,hostBindings:function(t,n){t&2&&O("mdc-notched-outline--notched",n.open)},inputs:{open:[0,"matFormFieldNotchedOutlineOpen","open"]},attrs:kl,ngContentSelectors:Dl,decls:5,vars:0,consts:[["notch",""],[1,"mat-mdc-notch-piece","mdc-notched-outline__leading"],[1,"mat-mdc-notch-piece","mdc-notched-outline__notch"],[1,"mat-mdc-notch-piece","mdc-notched-outline__trailing"]],template:function(t,n){t&1&&(ce(),ke(0,"div",1),M(1,"div",2,0),U(3),D(),ke(4,"div",3))},encapsulation:2,changeDetection:0})}return i})(),$t=(()=>{class i{value=null;stateChanges;id;placeholder;ngControl=null;focused=!1;empty=!1;shouldLabelFloat=!1;required=!1;disabled=!1;errorState=!1;controlType;autofilled;userAriaDescribedBy;disableAutomaticLabeling;describedByIds;static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i})}return i})();var Dt=new k("MatFormField"),ql=new k("MAT_FORM_FIELD_DEFAULT_OPTIONS"),Gr="fill",Xl="auto",Kr="fixed",Zl="translateY(-50%)",Qt=(()=>{class i{_elementRef=s(I);_changeDetectorRef=s(J);_platform=s(G);_idGenerator=s(re);_ngZone=s(F);_defaults=s(ql,{optional:!0});_currentDirection;_textField;_iconPrefixContainer;_textPrefixContainer;_iconSuffixContainer;_textSuffixContainer;_floatingLabel;_notchedOutline;_lineRipple;_iconPrefixContainerSignal=pn("iconPrefixContainer");_textPrefixContainerSignal=pn("textPrefixContainer");_iconSuffixContainerSignal=pn("iconSuffixContainer");_textSuffixContainerSignal=pn("textSuffixContainer");_prefixSuffixContainers=Gn(()=>[this._iconPrefixContainerSignal(),this._textPrefixContainerSignal(),this._iconSuffixContainerSignal(),this._textSuffixContainerSignal()].map(e=>e?.nativeElement).filter(e=>e!==void 0));_formFieldControl;_prefixChildren;_suffixChildren;_errorChildren;_hintChildren;_labelChild=fo(Ta);get hideRequiredMarker(){return this._hideRequiredMarker}set hideRequiredMarker(e){this._hideRequiredMarker=Qe(e)}_hideRequiredMarker=!1;color="primary";get floatLabel(){return this._floatLabel||this._defaults?.floatLabel||Xl}set floatLabel(e){e!==this._floatLabel&&(this._floatLabel=e,this._changeDetectorRef.markForCheck())}_floatLabel;get appearance(){return this._appearanceSignal()}set appearance(e){let t=e||this._defaults?.appearance||Gr;this._appearanceSignal.set(t)}_appearanceSignal=j(Gr);get subscriptSizing(){return this._subscriptSizing||this._defaults?.subscriptSizing||Kr}set subscriptSizing(e){this._subscriptSizing=e||this._defaults?.subscriptSizing||Kr}_subscriptSizing=null;get hintLabel(){return this._hintLabel}set hintLabel(e){this._hintLabel=e,this._processHints()}_hintLabel="";_hasIconPrefix=!1;_hasTextPrefix=!1;_hasIconSuffix=!1;_hasTextSuffix=!1;_labelId=this._idGenerator.getId("mat-mdc-form-field-label-");_hintLabelId=this._idGenerator.getId("mat-mdc-hint-");_describedByIds;get _control(){return this._explicitFormFieldControl||this._formFieldControl}set _control(e){this._explicitFormFieldControl=e}_destroyed=new E;_isFocused=null;_explicitFormFieldControl;_previousControl=null;_previousControlValidatorFn=null;_stateChanges;_valueChanges;_describedByChanges;_outlineLabelOffsetResizeObserver=null;_animationsDisabled=le();constructor(){let e=this._defaults,t=s(xe);e&&(e.appearance&&(this.appearance=e.appearance),this._hideRequiredMarker=!!e?.hideRequiredMarker,e.color&&(this.color=e.color)),ht(()=>this._currentDirection=t.valueSignal()),this._syncOutlineLabelOffset()}ngAfterViewInit(){this._updateFocusState(),this._animationsDisabled||this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._elementRef.nativeElement.classList.add("mat-form-field-animations-enabled")},300)}),this._changeDetectorRef.detectChanges()}ngAfterContentInit(){this._assertFormFieldControl(),this._initializeSubscript(),this._initializePrefixAndSuffix()}ngAfterContentChecked(){this._assertFormFieldControl(),this._control!==this._previousControl&&(this._initializeControl(this._previousControl),this._control.ngControl&&this._control.ngControl.control&&(this._previousControlValidatorFn=this._control.ngControl.control.validator),this._previousControl=this._control),this._control.ngControl&&this._control.ngControl.control&&this._control.ngControl.control.validator!==this._previousControlValidatorFn&&this._changeDetectorRef.markForCheck()}ngOnDestroy(){this._outlineLabelOffsetResizeObserver?.disconnect(),this._stateChanges?.unsubscribe(),this._valueChanges?.unsubscribe(),this._describedByChanges?.unsubscribe(),this._destroyed.next(),this._destroyed.complete()}getLabelId=Gn(()=>this._hasFloatingLabel()?this._labelId:null);getConnectedOverlayOrigin(){return this._textField||this._elementRef}_animateAndLockLabel(){this._hasFloatingLabel()&&(this.floatLabel="always")}_initializeControl(e){let t=this._control,n="mat-mdc-form-field-type-";e&&this._elementRef.nativeElement.classList.remove(n+e.controlType),t.controlType&&this._elementRef.nativeElement.classList.add(n+t.controlType),this._stateChanges?.unsubscribe(),this._stateChanges=t.stateChanges.subscribe(()=>{this._updateFocusState(),this._changeDetectorRef.markForCheck()}),this._describedByChanges?.unsubscribe(),this._describedByChanges=t.stateChanges.pipe(Re([void 0,void 0]),Ie(()=>[t.errorState,t.userAriaDescribedBy]),Yi(),we(([[o,r],[p,g]])=>o!==p||r!==g)).subscribe(()=>this._syncDescribedByIds()),this._valueChanges?.unsubscribe(),t.ngControl&&t.ngControl.valueChanges&&(this._valueChanges=t.ngControl.valueChanges.pipe(ae(this._destroyed)).subscribe(()=>this._changeDetectorRef.markForCheck()))}_checkPrefixAndSuffixTypes(){this._hasIconPrefix=!!this._prefixChildren.find(e=>!e._isText),this._hasTextPrefix=!!this._prefixChildren.find(e=>e._isText),this._hasIconSuffix=!!this._suffixChildren.find(e=>!e._isText),this._hasTextSuffix=!!this._suffixChildren.find(e=>e._isText)}_initializePrefixAndSuffix(){this._checkPrefixAndSuffixTypes(),Ye(this._prefixChildren.changes,this._suffixChildren.changes).subscribe(()=>{this._checkPrefixAndSuffixTypes(),this._changeDetectorRef.markForCheck()})}_initializeSubscript(){this._hintChildren.changes.subscribe(()=>{this._processHints(),this._changeDetectorRef.markForCheck()}),this._errorChildren.changes.subscribe(()=>{this._syncDescribedByIds(),this._changeDetectorRef.markForCheck()}),this._validateHints(),this._syncDescribedByIds()}_assertFormFieldControl(){this._control}_updateFocusState(){let e=this._control.focused;e&&!this._isFocused?(this._isFocused=!0,this._lineRipple?.activate()):!e&&(this._isFocused||this._isFocused===null)&&(this._isFocused=!1,this._lineRipple?.deactivate()),this._elementRef.nativeElement.classList.toggle("mat-focused",e),this._textField?.nativeElement.classList.toggle("mdc-text-field--focused",e)}_syncOutlineLabelOffset(){go({earlyRead:()=>{if(this._appearanceSignal()!=="outline")return this._outlineLabelOffsetResizeObserver?.disconnect(),null;if(globalThis.ResizeObserver){this._outlineLabelOffsetResizeObserver||=new globalThis.ResizeObserver(()=>{this._writeOutlinedLabelStyles(this._getOutlinedLabelOffset())});for(let e of this._prefixSuffixContainers())this._outlineLabelOffsetResizeObserver.observe(e,{box:"border-box"})}return this._getOutlinedLabelOffset()},write:e=>this._writeOutlinedLabelStyles(e())})}_shouldAlwaysFloat(){return this.floatLabel==="always"}_hasOutline(){return this.appearance==="outline"}_forceDisplayInfixLabel(){return!this._platform.isBrowser&&this._prefixChildren.length&&!this._shouldLabelFloat()}_hasFloatingLabel=Gn(()=>!!this._labelChild());_shouldLabelFloat(){return this._hasFloatingLabel()?this._control.shouldLabelFloat||this._shouldAlwaysFloat():!1}_shouldForward(e){let t=this._control?this._control.ngControl:null;return t&&t[e]}_getSubscriptMessageType(){return this._errorChildren&&this._errorChildren.length>0&&this._control.errorState?"error":"hint"}_handleLabelResized(){this._refreshOutlineNotchWidth()}_refreshOutlineNotchWidth(){!this._hasOutline()||!this._floatingLabel||!this._shouldLabelFloat()?this._notchedOutline?._setNotchWidth(0):this._notchedOutline?._setNotchWidth(this._floatingLabel.getWidth())}_processHints(){this._validateHints(),this._syncDescribedByIds()}_validateHints(){this._hintChildren}_syncDescribedByIds(){if(this._control){let e=[];if(this._control.userAriaDescribedBy&&typeof this._control.userAriaDescribedBy=="string"&&e.push(...this._control.userAriaDescribedBy.split(" ")),this._getSubscriptMessageType()==="hint"){let o=this._hintChildren?this._hintChildren.find(p=>p.align==="start"):null,r=this._hintChildren?this._hintChildren.find(p=>p.align==="end"):null;o?e.push(o.id):this._hintLabel&&e.push(this._hintLabelId),r&&e.push(r.id)}else this._errorChildren&&e.push(...this._errorChildren.map(o=>o.id));let t=this._control.describedByIds,n;if(t){let o=this._describedByIds||e;n=e.concat(t.filter(r=>r&&!o.includes(r)))}else n=e;this._control.setDescribedByIds(n),this._describedByIds=e}}_getOutlinedLabelOffset(){if(!this._hasOutline()||!this._floatingLabel)return null;if(!this._iconPrefixContainer&&!this._textPrefixContainer)return["",null];if(!this._isAttachedToDom())return null;let e=this._iconPrefixContainer?.nativeElement,t=this._textPrefixContainer?.nativeElement,n=this._iconSuffixContainer?.nativeElement,o=this._textSuffixContainer?.nativeElement,r=e?.getBoundingClientRect().width??0,p=t?.getBoundingClientRect().width??0,g=n?.getBoundingClientRect().width??0,A=o?.getBoundingClientRect().width??0,C=this._currentDirection==="rtl"?"-1":"1",W=`${r+p}px`,be=`calc(${C} * (${W} + var(--mat-mdc-form-field-label-offset-x, 0px)))`,fe=`var(--mat-mdc-form-field-label-transform, ${Zl} translateX(${be}))`,he=r+p+g+A;return[fe,he]}_writeOutlinedLabelStyles(e){if(e!==null){let[t,n]=e;this._floatingLabel&&(this._floatingLabel.element.style.transform=t),n!==null&&this._notchedOutline?._setMaxWidth(n)}}_isAttachedToDom(){let e=this._elementRef.nativeElement;if(e.getRootNode){let t=e.getRootNode();return t&&t!==e}return document.documentElement.contains(e)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-form-field"]],contentQueries:function(t,n,o){if(t&1&&(lo(o,n._labelChild,Ta,5),at(o,$t,5)(o,qr,5)(o,Xr,5)(o,Gl,5)(o,Oa,5)),t&2){qi();let r;R(r=P())&&(n._formFieldControl=r.first),R(r=P())&&(n._prefixChildren=r),R(r=P())&&(n._suffixChildren=r),R(r=P())&&(n._errorChildren=r),R(r=P())&&(n._hintChildren=r)}},viewQuery:function(t,n){if(t&1&&(co(n._iconPrefixContainerSignal,Nr,5)(n._textPrefixContainerSignal,Br,5)(n._iconSuffixContainerSignal,zr,5)(n._textSuffixContainerSignal,Hr,5),me(Ml,5)(Nr,5)(Br,5)(zr,5)(Hr,5)(jr,5)(Ur,5)(Wr,5)),t&2){qi(4);let o;R(o=P())&&(n._textField=o.first),R(o=P())&&(n._iconPrefixContainer=o.first),R(o=P())&&(n._textPrefixContainer=o.first),R(o=P())&&(n._iconSuffixContainer=o.first),R(o=P())&&(n._textSuffixContainer=o.first),R(o=P())&&(n._floatingLabel=o.first),R(o=P())&&(n._notchedOutline=o.first),R(o=P())&&(n._lineRipple=o.first)}},hostAttrs:[1,"mat-mdc-form-field"],hostVars:38,hostBindings:function(t,n){t&2&&O("mat-mdc-form-field-label-always-float",n._shouldAlwaysFloat())("mat-mdc-form-field-has-icon-prefix",n._hasIconPrefix)("mat-mdc-form-field-has-icon-suffix",n._hasIconSuffix)("mat-form-field-invalid",n._control.errorState)("mat-form-field-disabled",n._control.disabled)("mat-form-field-autofilled",n._control.autofilled)("mat-form-field-appearance-fill",n.appearance=="fill")("mat-form-field-appearance-outline",n.appearance=="outline")("mat-form-field-hide-placeholder",n._hasFloatingLabel()&&!n._shouldLabelFloat())("mat-primary",n.color!=="accent"&&n.color!=="warn")("mat-accent",n.color==="accent")("mat-warn",n.color==="warn")("ng-untouched",n._shouldForward("untouched"))("ng-touched",n._shouldForward("touched"))("ng-pristine",n._shouldForward("pristine"))("ng-dirty",n._shouldForward("dirty"))("ng-valid",n._shouldForward("valid"))("ng-invalid",n._shouldForward("invalid"))("ng-pending",n._shouldForward("pending"))},inputs:{hideRequiredMarker:"hideRequiredMarker",color:"color",floatLabel:"floatLabel",appearance:"appearance",subscriptSizing:"subscriptSizing",hintLabel:"hintLabel"},exportAs:["matFormField"],features:[oe([{provide:Dt,useExisting:i},{provide:Zr,useExisting:i}])],ngContentSelectors:Sl,decls:18,vars:21,consts:[["labelTemplate",""],["textField",""],["iconPrefixContainer",""],["textPrefixContainer",""],["textSuffixContainer",""],["iconSuffixContainer",""],[1,"mat-mdc-text-field-wrapper","mdc-text-field",3,"click"],[1,"mat-mdc-form-field-focus-overlay"],[1,"mat-mdc-form-field-flex"],["matFormFieldNotchedOutline","",3,"matFormFieldNotchedOutlineOpen"],[1,"mat-mdc-form-field-icon-prefix"],[1,"mat-mdc-form-field-text-prefix"],[1,"mat-mdc-form-field-infix"],[3,"ngTemplateOutlet"],[1,"mat-mdc-form-field-text-suffix"],[1,"mat-mdc-form-field-icon-suffix"],["matFormFieldLineRipple",""],["aria-atomic","true","aria-live","polite",1,"mat-mdc-form-field-subscript-wrapper","mat-mdc-form-field-bottom-align"],[1,"mat-mdc-form-field-error-wrapper"],[1,"mat-mdc-form-field-hint-wrapper"],["matFormFieldFloatingLabel","",3,"floating","monitorResize","id"],["aria-hidden","true",1,"mat-mdc-form-field-required-marker","mdc-floating-label--required"],[3,"id"],[1,"mat-mdc-form-field-hint-spacer"]],template:function(t,n){if(t&1&&(ce(El),Xe(0,Al,1,1,"ng-template",null,0,po),l(2,"div",6,1),x("click",function(r){return n._control.onContainerClick(r)}),h(4,Il,1,0,"div",7),l(5,"div",8),h(6,Fl,2,2,"div",9),h(7,Vl,3,0,"div",10),h(8,Ll,3,0,"div",11),l(9,"div",12),h(10,Bl,1,1,null,13),U(11),d(),h(12,zl,3,0,"div",14),h(13,Hl,3,0,"div",15),d(),h(14,jl,1,0,"div",16),d(),l(15,"div",17),h(16,Yl,2,0,"div",18)(17,Ul,5,1,"div",19),d()),t&2){let o;c(2),O("mdc-text-field--filled",!n._hasOutline())("mdc-text-field--outlined",n._hasOutline())("mdc-text-field--no-label",!n._hasFloatingLabel())("mdc-text-field--disabled",n._control.disabled)("mdc-text-field--invalid",n._control.errorState),c(2),f(!n._hasOutline()&&!n._control.disabled?4:-1),c(2),f(n._hasOutline()?6:-1),c(),f(n._hasIconPrefix?7:-1),c(),f(n._hasTextPrefix?8:-1),c(2),f(!n._hasOutline()||n._forceDisplayInfixLabel()?10:-1),c(2),f(n._hasTextSuffix?12:-1),c(),f(n._hasIconSuffix?13:-1),c(),f(n._hasOutline()?-1:14),c(),O("mat-mdc-form-field-subscript-dynamic-size",n.subscriptSizing==="dynamic");let r=n._getSubscriptMessageType();c(),f((o=r)==="error"?16:o==="hint"?17:-1)}},dependencies:[jr,Ur,vo,Wr,Oa],styles:[`.mdc-text-field {
  display: inline-flex;
  align-items: baseline;
  padding: 0 16px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  will-change: opacity, transform, color;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.mdc-text-field__input {
  width: 100%;
  min-width: 0;
  border: none;
  border-radius: 0;
  background: none;
  padding: 0;
  -moz-appearance: none;
  -webkit-appearance: none;
  height: 28px;
}
.mdc-text-field__input::-webkit-calendar-picker-indicator, .mdc-text-field__input::-webkit-search-cancel-button {
  display: none;
}
.mdc-text-field__input::-ms-clear {
  display: none;
}
.mdc-text-field__input:focus {
  outline: none;
}
.mdc-text-field__input:invalid {
  box-shadow: none;
}
.mdc-text-field__input::placeholder {
  opacity: 0;
}
.mdc-text-field__input::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field__input::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field__input:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mdc-text-field--focused .mdc-text-field__input::placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  opacity: 1;
}
.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  opacity: 1;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-moz-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive::-webkit-input-placeholder {
  opacity: 0;
}
.mdc-text-field--disabled:not(.mdc-text-field--no-label) .mdc-text-field__input.mat-mdc-input-disabled-interactive:-ms-input-placeholder {
  opacity: 0;
}
.mdc-text-field--outlined .mdc-text-field__input, .mdc-text-field--filled.mdc-text-field--no-label .mdc-text-field__input {
  height: 100%;
}
.mdc-text-field--outlined .mdc-text-field__input {
  display: flex;
  border: none !important;
  background-color: transparent;
}
.mdc-text-field--disabled .mdc-text-field__input {
  pointer-events: auto;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-filled-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-filled-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-filled-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input {
  color: var(--mat-form-field-outlined-input-text-color, var(--mat-sys-on-surface));
  caret-color: var(--mat-form-field-outlined-caret-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-outlined-input-text-placeholder-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-filled-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input {
  caret-color: var(--mat-form-field-outlined-error-caret-color, var(--mat-sys-error));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-filled-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input {
  color: var(--mat-form-field-outlined-disabled-input-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-text-field__input {
    background-color: Window;
  }
}

.mdc-text-field--filled {
  height: 56px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
  border-top-right-radius: var(--mat-form-field-filled-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) {
  background-color: var(--mat-form-field-filled-container-color, var(--mat-sys-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled {
  background-color: var(--mat-form-field-filled-disabled-container-color, color-mix(in srgb, var(--mat-sys-on-surface) 4%, transparent));
}

.mdc-text-field--outlined {
  height: 56px;
  overflow: visible;
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
}
[dir=rtl] .mdc-text-field--outlined {
  padding-right: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)) + 4px);
  padding-left: max(16px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}

.mdc-floating-label {
  position: absolute;
  left: 0;
  transform-origin: left top;
  line-height: 1.15rem;
  text-align: left;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: text;
  overflow: hidden;
  will-change: transform;
}
[dir=rtl] .mdc-floating-label {
  right: 0;
  left: auto;
  transform-origin: right top;
  text-align: right;
}
.mdc-text-field .mdc-floating-label {
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}
.mdc-notched-outline .mdc-floating-label {
  display: inline-block;
  position: relative;
  max-width: 100%;
}
.mdc-text-field--outlined .mdc-floating-label {
  left: 4px;
  right: auto;
}
[dir=rtl] .mdc-text-field--outlined .mdc-floating-label {
  left: auto;
  right: 4px;
}
.mdc-text-field--filled .mdc-floating-label {
  left: 16px;
  right: auto;
}
[dir=rtl] .mdc-text-field--filled .mdc-floating-label {
  left: auto;
  right: 16px;
}
.mdc-text-field--disabled .mdc-floating-label {
  cursor: default;
}
@media (forced-colors: active) {
  .mdc-text-field--disabled .mdc-floating-label {
    z-index: 1;
  }
}
.mdc-text-field--filled.mdc-text-field--no-label .mdc-floating-label {
  display: none;
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-filled-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-hover-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-filled-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-filled-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-filled-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-filled-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--filled .mdc-floating-label {
  font-family: var(--mat-form-field-filled-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-filled-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-filled-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-filled-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-floating-label {
  color: var(--mat-form-field-outlined-label-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-focus-label-text-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mdc-floating-label {
  color: var(--mat-form-field-outlined-disabled-label-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-focus-label-text-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-floating-label {
  color: var(--mat-form-field-outlined-error-hover-label-text-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined .mdc-floating-label {
  font-family: var(--mat-form-field-outlined-label-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-form-field-outlined-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-form-field-outlined-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-form-field-outlined-label-text-tracking, var(--mat-sys-body-large-tracking));
}

.mdc-floating-label--float-above {
  cursor: auto;
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--filled .mdc-floating-label--float-above {
  transform: translateY(-106%) scale(0.75);
}
.mdc-text-field--outlined .mdc-floating-label--float-above {
  transform: translateY(-37.25px) scale(1);
  font-size: 0.75rem;
}
.mdc-notched-outline .mdc-floating-label--float-above {
  text-overflow: clip;
}
.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: 133.3333333333%;
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  transform: translateY(-34.75px) scale(0.75);
}
.mdc-text-field--outlined.mdc-notched-outline--upgraded .mdc-floating-label--float-above, .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: 1rem;
}

.mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 1px;
  margin-right: 0;
  content: "*";
}
[dir=rtl] .mdc-floating-label--required:not(.mdc-floating-label--hide-required-marker)::after {
  margin-left: 0;
  margin-right: 1px;
}

.mdc-notched-outline {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: 100%;
  text-align: left;
  pointer-events: none;
}
[dir=rtl] .mdc-notched-outline {
  text-align: right;
}
.mdc-text-field--outlined .mdc-notched-outline {
  z-index: 1;
}

.mat-mdc-notch-piece {
  box-sizing: border-box;
  height: 100%;
  pointer-events: none;
  border: none;
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.mdc-text-field--focused .mat-mdc-notch-piece {
  border-width: 2px;
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-outline-color, var(--mat-sys-outline));
  border-width: var(--mat-form-field-outlined-outline-width, 1px);
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-hover-outline-color, var(--mat-sys-on-surface));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-focus-outline-color, var(--mat-sys-primary));
}
.mdc-text-field--outlined.mdc-text-field--disabled .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-disabled-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-notched-outline .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-hover-outline-color, var(--mat-sys-on-error-container));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--invalid.mdc-text-field--focused .mat-mdc-notch-piece {
  border-color: var(--mat-form-field-outlined-error-focus-outline-color, var(--mat-sys-error));
}
.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline .mat-mdc-notch-piece {
  border-width: var(--mat-form-field-outlined-focus-outline-width, 2px);
}

.mdc-notched-outline__leading {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__leading {
  width: max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small)));
}
[dir=rtl] .mdc-notched-outline__leading {
  border-left: none;
  border-right: 1px solid;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__trailing {
  flex-grow: 1;
  border-left: none;
  border-right: 1px solid;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-right-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}
[dir=rtl] .mdc-notched-outline__trailing {
  border-left: 1px solid;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
  border-bottom-left-radius: var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small));
}

.mdc-notched-outline__notch {
  flex: 0 0 auto;
  width: auto;
}
.mdc-text-field--outlined .mdc-notched-outline .mdc-notched-outline__notch {
  max-width: min(var(--mat-form-field-notch-max-width, 100%), calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  max-width: min(100%, calc(100% - max(12px, var(--mat-form-field-outlined-container-shape, var(--mat-sys-corner-extra-small))) * 2));
}
.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 1px;
}
.mdc-text-field--focused.mdc-text-field--outlined .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-top: 2px;
}
.mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 0;
  padding-right: 8px;
  border-top: none;
}
[dir=rtl] .mdc-notched-outline--notched .mdc-notched-outline__notch {
  padding-left: 8px;
  padding-right: 0;
}
.mdc-notched-outline--no-label .mdc-notched-outline__notch {
  display: none;
}

.mdc-line-ripple::before, .mdc-line-ripple::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-bottom-style: solid;
  content: "";
}
.mdc-line-ripple::before {
  z-index: 1;
  border-bottom-width: var(--mat-form-field-filled-active-indicator-height, 1px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-active-indicator-color, var(--mat-sys-on-surface-variant));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled):not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-hover-active-indicator-color, var(--mat-sys-on-surface));
}
.mdc-text-field--filled.mdc-text-field--disabled .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-disabled-active-indicator-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-active-indicator-color, var(--mat-sys-error));
}
.mdc-text-field--filled:not(.mdc-text-field--disabled).mdc-text-field--invalid:not(.mdc-text-field--focused):hover .mdc-line-ripple::before {
  border-bottom-color: var(--mat-form-field-filled-error-hover-active-indicator-color, var(--mat-sys-on-error-container));
}
.mdc-line-ripple::after {
  transform: scaleX(0);
  opacity: 0;
  z-index: 2;
}
.mdc-text-field--filled .mdc-line-ripple::after {
  border-bottom-width: var(--mat-form-field-filled-focus-active-indicator-height, 2px);
}
.mdc-text-field--filled:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-focus-active-indicator-color, var(--mat-sys-primary));
}
.mdc-text-field--filled.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple::after {
  border-bottom-color: var(--mat-form-field-filled-error-focus-active-indicator-color, var(--mat-sys-error));
}

.mdc-line-ripple--active::after {
  transform: scaleX(1);
  opacity: 1;
}

.mdc-line-ripple--deactivating::after {
  opacity: 0;
}

.mdc-text-field--disabled {
  pointer-events: none;
}

.mat-mdc-form-field-textarea-control {
  vertical-align: middle;
  resize: vertical;
  box-sizing: border-box;
  height: auto;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
}

.mat-mdc-form-field-input-control.mat-mdc-form-field-input-control {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  letter-spacing: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  border: none;
}

.mat-mdc-form-field .mat-mdc-floating-label.mdc-floating-label {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  line-height: normal;
  pointer-events: all;
  will-change: auto;
}

.mat-mdc-form-field:not(.mat-form-field-disabled) .mat-mdc-floating-label.mdc-floating-label {
  cursor: inherit;
}

.mdc-text-field--no-label:not(.mdc-text-field--textarea) .mat-mdc-form-field-input-control.mdc-text-field__input,
.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control {
  height: auto;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-input-control.mdc-text-field__input[type=color] {
  height: 23px;
}

.mat-mdc-text-field-wrapper {
  height: auto;
  flex: auto;
  will-change: auto;
}

.mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-left: 0;
  --mat-mdc-form-field-label-offset-x: -16px;
}

.mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

[dir=rtl] .mat-mdc-text-field-wrapper {
  padding-left: 16px;
  padding-right: 16px;
}
[dir=rtl] .mat-mdc-form-field-has-icon-suffix .mat-mdc-text-field-wrapper {
  padding-left: 0;
}
[dir=rtl] .mat-mdc-form-field-has-icon-prefix .mat-mdc-text-field-wrapper {
  padding-right: 0;
}

.mat-form-field-disabled .mdc-text-field__input::placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-moz-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input::-webkit-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-disabled .mdc-text-field__input:-ms-input-placeholder {
  color: var(--mat-form-field-disabled-input-text-placeholder-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-label-always-float .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
  opacity: 1;
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-infix .mat-mdc-floating-label {
  left: auto;
  right: auto;
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-text-field__input {
  display: inline-block;
}

.mat-mdc-form-field .mat-mdc-text-field-wrapper.mdc-text-field .mdc-notched-outline__notch {
  padding-top: 0;
}

.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: 1px solid transparent;
}

[dir=rtl] .mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field.mat-mdc-form-field .mdc-notched-outline__notch {
  border-left: none;
  border-right: 1px solid transparent;
}

.mat-mdc-form-field-infix {
  min-height: var(--mat-form-field-container-height, 56px);
  padding-top: var(--mat-form-field-filled-with-label-container-padding-top, 24px);
  padding-bottom: var(--mat-form-field-filled-with-label-container-padding-bottom, 8px);
}
.mdc-text-field--outlined .mat-mdc-form-field-infix, .mdc-text-field--no-label .mat-mdc-form-field-infix {
  padding-top: var(--mat-form-field-container-vertical-padding, 16px);
  padding-bottom: var(--mat-form-field-container-vertical-padding, 16px);
}

.mat-mdc-text-field-wrapper .mat-mdc-form-field-flex .mat-mdc-floating-label {
  top: calc(var(--mat-form-field-container-height, 56px) / 2);
}

.mdc-text-field--filled .mat-mdc-floating-label {
  display: var(--mat-form-field-filled-label-display, block);
}

.mat-mdc-text-field-wrapper.mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  --mat-mdc-form-field-label-transform: translateY(calc(calc(6.75px + var(--mat-form-field-container-height, 56px) / 2) * -1))
    scale(var(--mat-mdc-form-field-floating-label-scale, 0.75));
  transform: var(--mat-mdc-form-field-label-transform);
}

@keyframes _mat-form-field-subscript-animation {
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.mat-mdc-form-field-subscript-wrapper {
  box-sizing: border-box;
  width: 100%;
  position: relative;
}

.mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-error-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 0 16px;
  opacity: 1;
  transform: translateY(0);
  animation: _mat-form-field-subscript-animation 0ms cubic-bezier(0.55, 0, 0.55, 0.2);
}

.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field-subscript-dynamic-size .mat-mdc-form-field-error-wrapper {
  position: static;
}

.mat-mdc-form-field-bottom-align::before {
  content: "";
  display: inline-block;
  height: 16px;
}

.mat-mdc-form-field-bottom-align.mat-mdc-form-field-subscript-dynamic-size::before {
  content: unset;
}

.mat-mdc-form-field-hint-end {
  order: 1;
}

.mat-mdc-form-field-hint-wrapper {
  display: flex;
}

.mat-mdc-form-field-hint-spacer {
  flex: 1 0 1em;
}

.mat-mdc-form-field-error {
  display: block;
  color: var(--mat-form-field-error-text-color, var(--mat-sys-error));
}

.mat-mdc-form-field-subscript-wrapper,
.mat-mdc-form-field-bottom-align::before {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-subscript-text-font, var(--mat-sys-body-small-font));
  line-height: var(--mat-form-field-subscript-text-line-height, var(--mat-sys-body-small-line-height));
  font-size: var(--mat-form-field-subscript-text-size, var(--mat-sys-body-small-size));
  letter-spacing: var(--mat-form-field-subscript-text-tracking, var(--mat-sys-body-small-tracking));
  font-weight: var(--mat-form-field-subscript-text-weight, var(--mat-sys-body-small-weight));
}

.mat-mdc-form-field-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  opacity: 0;
  pointer-events: none;
  background-color: var(--mat-form-field-state-layer-color, var(--mat-sys-on-surface));
}
.mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-mdc-form-field.mat-focused .mat-mdc-form-field-focus-overlay {
  opacity: var(--mat-form-field-focus-state-layer-opacity, 0);
}

select.mat-mdc-form-field-input-control {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: transparent;
  display: inline-flex;
  box-sizing: border-box;
}
select.mat-mdc-form-field-input-control:not(:disabled) {
  cursor: pointer;
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option {
  color: var(--mat-form-field-select-option-text-color, var(--mat-sys-neutral10));
}
select.mat-mdc-form-field-input-control:not(.mat-mdc-native-select-inline) option:disabled {
  color: var(--mat-form-field-select-disabled-option-text-color, color-mix(in srgb, var(--mat-sys-neutral10) 38%, transparent));
}

.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  content: "";
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid;
  position: absolute;
  right: 0;
  top: 50%;
  margin-top: -2.5px;
  pointer-events: none;
  color: var(--mat-form-field-enabled-select-arrow-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-infix::after {
  right: auto;
  left: 0;
}
.mat-mdc-form-field-type-mat-native-select.mat-focused .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-focus-select-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field-type-mat-native-select.mat-form-field-disabled .mat-mdc-form-field-infix::after {
  color: var(--mat-form-field-disabled-select-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 15px;
}
[dir=rtl] .mat-mdc-form-field-type-mat-native-select .mat-mdc-form-field-input-control {
  padding-right: 0;
  padding-left: 15px;
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill .mat-mdc-text-field-wrapper {
    outline: solid 1px;
  }
}
@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-form-field-disabled .mat-mdc-text-field-wrapper {
    outline-color: GrayText;
  }
}

@media (forced-colors: active) {
  .mat-form-field-appearance-fill.mat-focused .mat-mdc-text-field-wrapper {
    outline: dashed 3px;
  }
}

@media (forced-colors: active) {
  .mat-mdc-form-field.mat-focused .mdc-notched-outline {
    border: dashed 3px;
  }
}

.mat-mdc-form-field-input-control[type=date], .mat-mdc-form-field-input-control[type=datetime], .mat-mdc-form-field-input-control[type=datetime-local], .mat-mdc-form-field-input-control[type=month], .mat-mdc-form-field-input-control[type=week], .mat-mdc-form-field-input-control[type=time] {
  line-height: 1;
}
.mat-mdc-form-field-input-control::-webkit-datetime-edit {
  line-height: 1;
  padding: 0;
  margin-bottom: -2px;
}

.mat-mdc-form-field {
  --mat-mdc-form-field-floating-label-scale: 0.75;
  display: inline-flex;
  flex-direction: column;
  min-width: 0;
  text-align: left;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: var(--mat-form-field-container-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-form-field-container-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-form-field-container-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-form-field-container-text-tracking, var(--mat-sys-body-large-tracking));
  font-weight: var(--mat-form-field-container-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-floating-label--float-above {
  font-size: calc(var(--mat-form-field-outlined-label-text-populated-size) * var(--mat-mdc-form-field-floating-label-scale));
}
.mat-mdc-form-field .mdc-text-field--outlined .mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  font-size: var(--mat-form-field-outlined-label-text-populated-size);
}
[dir=rtl] .mat-mdc-form-field {
  text-align: right;
}

.mat-mdc-form-field-flex {
  display: inline-flex;
  align-items: baseline;
  box-sizing: border-box;
  width: 100%;
}

.mat-mdc-text-field-wrapper {
  width: 100%;
  z-index: 0;
}

.mat-mdc-form-field-icon-prefix,
.mat-mdc-form-field-icon-suffix {
  align-self: center;
  line-height: 0;
  pointer-events: auto;
  position: relative;
  z-index: 1;
}
.mat-mdc-form-field-icon-prefix > .mat-icon,
.mat-mdc-form-field-icon-suffix > .mat-icon {
  padding: 0 12px;
  box-sizing: content-box;
}

.mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-leading-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-prefix {
  color: var(--mat-form-field-disabled-leading-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-trailing-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-form-field-disabled .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-disabled-trailing-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-form-field-invalid .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-trailing-icon-color, var(--mat-sys-error));
}
.mat-form-field-invalid:not(.mat-focused):not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper:hover .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-hover-trailing-icon-color, var(--mat-sys-on-error-container));
}
.mat-form-field-invalid.mat-focused .mat-mdc-text-field-wrapper .mat-mdc-form-field-icon-suffix {
  color: var(--mat-form-field-error-focus-trailing-icon-color, var(--mat-sys-error));
}

.mat-mdc-form-field-icon-prefix,
[dir=rtl] .mat-mdc-form-field-icon-suffix {
  padding: 0 4px 0 0;
}

.mat-mdc-form-field-icon-suffix,
[dir=rtl] .mat-mdc-form-field-icon-prefix {
  padding: 0 0 0 4px;
}

.mat-mdc-form-field-subscript-wrapper .mat-icon,
.mat-mdc-form-field label .mat-icon {
  width: 1em;
  height: 1em;
  font-size: inherit;
}

.mat-mdc-form-field-infix {
  flex: auto;
  min-width: 0;
  width: 180px;
  position: relative;
  box-sizing: border-box;
}
.mat-mdc-form-field-infix:has(textarea[cols]) {
  width: auto;
}

.mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: -1px;
  -webkit-clip-path: inset(-9em -999em -9em 1px);
  clip-path: inset(-9em -999em -9em 1px);
}
[dir=rtl] .mat-mdc-form-field .mdc-notched-outline__notch {
  margin-left: 0;
  margin-right: -1px;
  -webkit-clip-path: inset(-9em 1px -9em -999em);
  clip-path: inset(-9em 1px -9em -999em);
}

.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-floating-label {
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input {
  transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-moz-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input::-webkit-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field__input:-ms-input-placeholder {
  transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-moz-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-moz-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input::-webkit-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input::-webkit-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--no-label .mdc-text-field__input:-ms-input-placeholder, .mat-mdc-form-field.mat-form-field-animations-enabled.mdc-text-field--focused .mdc-text-field__input:-ms-input-placeholder {
  transition-delay: 40ms;
  transition-duration: 110ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-text-field--filled:not(.mdc-ripple-upgraded):focus .mdc-text-field__ripple::before {
  transition-duration: 75ms;
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mdc-line-ripple::after {
  transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1), opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-hint-wrapper,
.mat-mdc-form-field.mat-form-field-animations-enabled .mat-mdc-form-field-error-wrapper {
  animation-duration: 300ms;
}

.mdc-notched-outline .mdc-floating-label {
  max-width: calc(100% + 1px);
}

.mdc-notched-outline--upgraded .mdc-floating-label--float-above {
  max-width: calc(133.3333333333% + 1px);
}
`],encapsulation:2,changeDetection:0})}return i})();var wi=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var Jt=class{_defaultMatcher;ngControl;_parentFormGroup;_parentForm;_stateChanges;errorState=!1;matcher;constructor(a,e,t,n,o){this._defaultMatcher=a,this.ngControl=e,this._parentFormGroup=t,this._parentForm=n,this._stateChanges=o}updateErrorState(){let a=this.errorState,e=this._parentFormGroup||this._parentForm,t=this.matcher||this._defaultMatcher,n=this.ngControl?this.ngControl.control:null,o=t?.isErrorState(n,e)??!1;o!==a&&(this.errorState=o,this._stateChanges.next())}};var $l=["mat-calendar-body",""];function Ql(i,a){return this._trackRow(a)}var is=(i,a)=>a.id;function Jl(i,a){if(i&1&&(M(0,"tr",0)(1,"td",3),m(2),D()()),i&2){let e=u();c(),dn("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Y("colspan",e.numCols),c(),te(" ",e.label," ")}}function ed(i,a){if(i&1&&(M(0,"td",3),m(1),D()),i&2){let e=u(2);dn("padding-top",e._cellPadding)("padding-bottom",e._cellPadding),Y("colspan",e._firstRowOffset),c(),te(" ",e._firstRowOffset>=e.labelMinRequiredCells?e.label:""," ")}}function td(i,a){if(i&1){let e=K();M(0,"td",6)(1,"button",7),Ne("click",function(n){let o=_(e).$implicit,r=u(2);return b(r._cellClicked(o,n))})("focus",function(n){let o=_(e).$implicit,r=u(2);return b(r._emitActiveDateChange(o,n))}),M(2,"span",8),m(3),D(),ke(4,"span",9),D()()}if(i&2){let e=a.$implicit,t=a.$index,n=u().$index,o=u();dn("width",o._cellWidth)("padding-top",o._cellPadding)("padding-bottom",o._cellPadding),Y("data-mat-row",n)("data-mat-col",t),c(),Me(e.cssClasses),O("mat-calendar-body-disabled",!e.enabled)("mat-calendar-body-active",o._isActiveCell(n,t))("mat-calendar-body-range-start",o._isRangeStart(e.compareValue))("mat-calendar-body-range-end",o._isRangeEnd(e.compareValue))("mat-calendar-body-in-range",o._isInRange(e.compareValue))("mat-calendar-body-comparison-bridge-start",o._isComparisonBridgeStart(e.compareValue,n,t))("mat-calendar-body-comparison-bridge-end",o._isComparisonBridgeEnd(e.compareValue,n,t))("mat-calendar-body-comparison-start",o._isComparisonStart(e.compareValue))("mat-calendar-body-comparison-end",o._isComparisonEnd(e.compareValue))("mat-calendar-body-in-comparison-range",o._isInComparisonRange(e.compareValue))("mat-calendar-body-preview-start",o._isPreviewStart(e.compareValue))("mat-calendar-body-preview-end",o._isPreviewEnd(e.compareValue))("mat-calendar-body-in-preview",o._isInPreview(e.compareValue)),de("tabIndex",o._isActiveCell(n,t)?0:-1),Y("aria-label",e.ariaLabel)("aria-disabled",!e.enabled||null)("aria-pressed",o._isSelected(e.compareValue))("aria-current",o.todayValue===e.compareValue?"date":null)("aria-describedby",o._getDescribedby(e.compareValue)),c(),O("mat-calendar-body-selected",o._isSelected(e.compareValue))("mat-calendar-body-comparison-identical",o._isComparisonIdentical(e.compareValue))("mat-calendar-body-today",o.todayValue===e.compareValue),c(),te(" ",e.displayValue," ")}}function nd(i,a){if(i&1&&(M(0,"tr",1),h(1,ed,2,6,"td",4),Ve(2,td,5,49,"td",5,is),D()),i&2){let e=a.$implicit,t=a.$index,n=u();c(),f(t===0&&n._firstRowOffset?1:-1),c(),Le(e)}}function id(i,a){if(i&1&&(l(0,"th",2)(1,"span",6),m(2),d(),l(3,"span",3),m(4),d()()),i&2){let e=a.$implicit;c(2),V(e.long),c(2),V(e.narrow)}}var ad=["*"];function od(i,a){}function rd(i,a){if(i&1){let e=K();l(0,"mat-month-view",4),Z("activeDateChange",function(n){_(e);let o=u();return X(o.activeDate,n)||(o.activeDate=n),b(n)}),x("_userSelection",function(n){_(e);let o=u();return b(o._dateSelected(n))})("dragStarted",function(n){_(e);let o=u();return b(o._dragStarted(n))})("dragEnded",function(n){_(e);let o=u();return b(o._dragEnded(n))}),d()}if(i&2){let e=u();q("activeDate",e.activeDate),y("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)("comparisonStart",e.comparisonStart)("comparisonEnd",e.comparisonEnd)("startDateAccessibleName",e.startDateAccessibleName)("endDateAccessibleName",e.endDateAccessibleName)("activeDrag",e._activeDrag)}}function sd(i,a){if(i&1){let e=K();l(0,"mat-year-view",5),Z("activeDateChange",function(n){_(e);let o=u();return X(o.activeDate,n)||(o.activeDate=n),b(n)}),x("monthSelected",function(n){_(e);let o=u();return b(o._monthSelectedInYearView(n))})("selectedChange",function(n){_(e);let o=u();return b(o._goToDateInView(n,"month"))}),d()}if(i&2){let e=u();q("activeDate",e.activeDate),y("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function ld(i,a){if(i&1){let e=K();l(0,"mat-multi-year-view",6),Z("activeDateChange",function(n){_(e);let o=u();return X(o.activeDate,n)||(o.activeDate=n),b(n)}),x("yearSelected",function(n){_(e);let o=u();return b(o._yearSelectedInMultiYearView(n))})("selectedChange",function(n){_(e);let o=u();return b(o._goToDateInView(n,"year"))}),d()}if(i&2){let e=u();q("activeDate",e.activeDate),y("selected",e.selected)("dateFilter",e.dateFilter)("maxDate",e.maxDate)("minDate",e.minDate)("dateClass",e.dateClass)}}function dd(i,a){}var cd=["button"],md=[[["","matDatepickerToggleIcon",""]]],ud=["[matDatepickerToggleIcon]"];function pd(i,a){i&1&&(Pe(),l(0,"svg",2),H(1,"path",3),d())}var nn=(()=>{class i{changes=new E;calendarLabel="Calendar";openCalendarLabel="Open calendar";closeCalendarLabel="Close calendar";prevMonthLabel="Previous month";nextMonthLabel="Next month";prevYearLabel="Previous year";nextYearLabel="Next year";prevMultiYearLabel="Previous 24 years";nextMultiYearLabel="Next 24 years";switchToMonthViewLabel="Choose date";switchToMultiYearViewLabel="Choose month and year";startDateLabel="Start date";endDateLabel="End date";comparisonDateLabel="Comparison range";formatYearRange(e,t){return`${e} \u2013 ${t}`}formatYearRangeLabel(e,t){return`${e} to ${t}`}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),hd=0,Rn=class{value;displayValue;ariaLabel;enabled;compareValue;rawValue;id=hd++;cssClasses;constructor(a,e,t,n,o,r=a,p){this.value=a,this.displayValue=e,this.ariaLabel=t,this.enabled=n,this.compareValue=r,this.rawValue=p,this.cssClasses=o instanceof Set?Array.from(o):o}},fd={passive:!1,capture:!0},ki={passive:!0,capture:!0},$r={passive:!0},tn=(()=>{class i{_elementRef=s(I);_ngZone=s(F);_platform=s(G);_intl=s(nn);_eventCleanups;_skipNextFocus=!1;_focusActiveCellAfterViewChecked=!1;label;rows;todayValue;startValue;endValue;labelMinRequiredCells;numCols=7;activeCell=0;ngAfterViewChecked(){this._focusActiveCellAfterViewChecked&&(this._focusActiveCell(),this._focusActiveCellAfterViewChecked=!1)}isRange=!1;cellAspectRatio=1;comparisonStart=null;comparisonEnd=null;previewStart=null;previewEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedValueChange=new v;previewChange=new v;activeDateChange=new v;dragStarted=new v;dragEnded=new v;_firstRowOffset;_cellPadding;_cellWidth;_startDateLabelId;_endDateLabelId;_comparisonStartDateLabelId;_comparisonEndDateLabelId;_didDragSinceMouseDown=!1;_injector=s(Q);comparisonDateAccessibleName=this._intl.comparisonDateLabel;_trackRow=e=>e;constructor(){let e=s(ve),t=s(re);this._startDateLabelId=t.getId("mat-calendar-body-start-"),this._endDateLabelId=t.getId("mat-calendar-body-end-"),this._comparisonStartDateLabelId=t.getId("mat-calendar-body-comparison-start-"),this._comparisonEndDateLabelId=t.getId("mat-calendar-body-comparison-end-"),s(ne).load(Ke),this._ngZone.runOutsideAngular(()=>{let n=this._elementRef.nativeElement,o=[e.listen(n,"touchmove",this._touchmoveHandler,fd),e.listen(n,"mouseenter",this._enterHandler,ki),e.listen(n,"focus",this._enterHandler,ki),e.listen(n,"mouseleave",this._leaveHandler,ki),e.listen(n,"blur",this._leaveHandler,ki),e.listen(n,"mousedown",this._mousedownHandler,$r),e.listen(n,"touchstart",this._mousedownHandler,$r)];this._platform.isBrowser&&o.push(e.listen("window","mouseup",this._mouseupHandler),e.listen("window","touchend",this._touchendHandler)),this._eventCleanups=o})}_cellClicked(e,t){this._didDragSinceMouseDown||e.enabled&&this.selectedValueChange.emit({value:e.value,event:t})}_emitActiveDateChange(e,t){e.enabled&&this.activeDateChange.emit({value:e.value,event:t})}_isSelected(e){return this.startValue===e||this.endValue===e}ngOnChanges(e){let t=e.numCols,{rows:n,numCols:o}=this;(e.rows||t)&&(this._firstRowOffset=n&&n.length&&n[0].length?o-n[0].length:0),(e.cellAspectRatio||t||!this._cellPadding)&&(this._cellPadding=`${50*this.cellAspectRatio/o}%`),(t||!this._cellWidth)&&(this._cellWidth=`${100/o}%`)}ngOnDestroy(){this._eventCleanups.forEach(e=>e())}_isActiveCell(e,t){let n=e*this.numCols+t;return e&&(n-=this._firstRowOffset),n==this.activeCell}_focusActiveCell(e=!0){Fe(()=>{setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector(".mat-calendar-body-active");t&&(e||(this._skipNextFocus=!0),t.focus())})},{injector:this._injector})}_scheduleFocusActiveCellAfterViewChecked(){this._focusActiveCellAfterViewChecked=!0}_isRangeStart(e){return Ra(e,this.startValue,this.endValue)}_isRangeEnd(e){return Pa(e,this.startValue,this.endValue)}_isInRange(e){return Fa(e,this.startValue,this.endValue,this.isRange)}_isComparisonStart(e){return Ra(e,this.comparisonStart,this.comparisonEnd)}_isComparisonBridgeStart(e,t,n){if(!this._isComparisonStart(e)||this._isRangeStart(e)||!this._isInRange(e))return!1;let o=this.rows[t][n-1];if(!o){let r=this.rows[t-1];o=r&&r[r.length-1]}return o&&!this._isRangeEnd(o.compareValue)}_isComparisonBridgeEnd(e,t,n){if(!this._isComparisonEnd(e)||this._isRangeEnd(e)||!this._isInRange(e))return!1;let o=this.rows[t][n+1];if(!o){let r=this.rows[t+1];o=r&&r[0]}return o&&!this._isRangeStart(o.compareValue)}_isComparisonEnd(e){return Pa(e,this.comparisonStart,this.comparisonEnd)}_isInComparisonRange(e){return Fa(e,this.comparisonStart,this.comparisonEnd,this.isRange)}_isComparisonIdentical(e){return this.comparisonStart===this.comparisonEnd&&e===this.comparisonStart}_isPreviewStart(e){return Ra(e,this.previewStart,this.previewEnd)}_isPreviewEnd(e){return Pa(e,this.previewStart,this.previewEnd)}_isInPreview(e){return Fa(e,this.previewStart,this.previewEnd,this.isRange)}_getDescribedby(e){if(!this.isRange)return null;if(this.startValue===e&&this.endValue===e)return`${this._startDateLabelId} ${this._endDateLabelId}`;if(this.startValue===e)return this._startDateLabelId;if(this.endValue===e)return this._endDateLabelId;if(this.comparisonStart!==null&&this.comparisonEnd!==null){if(e===this.comparisonStart&&e===this.comparisonEnd)return`${this._comparisonStartDateLabelId} ${this._comparisonEndDateLabelId}`;if(e===this.comparisonStart)return this._comparisonStartDateLabelId;if(e===this.comparisonEnd)return this._comparisonEndDateLabelId}return null}_enterHandler=e=>{if(this._skipNextFocus&&e.type==="focus"){this._skipNextFocus=!1;return}if(e.target&&this.isRange){let t=this._getCellFromElement(e.target);t&&this._ngZone.run(()=>this.previewChange.emit({value:t.enabled?t:null,event:e}))}};_touchmoveHandler=e=>{if(!this.isRange)return;let t=Qr(e),n=t?this._getCellFromElement(t):null;t!==e.target&&(this._didDragSinceMouseDown=!0),Ia(e.target)&&e.preventDefault(),this._ngZone.run(()=>this.previewChange.emit({value:n?.enabled?n:null,event:e}))};_leaveHandler=e=>{this.previewEnd!==null&&this.isRange&&(e.type!=="blur"&&(this._didDragSinceMouseDown=!0),e.target&&this._getCellFromElement(e.target)&&!(e.relatedTarget&&this._getCellFromElement(e.relatedTarget))&&this._ngZone.run(()=>this.previewChange.emit({value:null,event:e})))};_mousedownHandler=e=>{if(!this.isRange)return;this._didDragSinceMouseDown=!1;let t=e.target&&this._getCellFromElement(e.target);!t||!this._isInRange(t.compareValue)||this._ngZone.run(()=>{this.dragStarted.emit({value:t.rawValue,event:e})})};_mouseupHandler=e=>{if(!this.isRange)return;let t=Ia(e.target);if(!t){this._ngZone.run(()=>{this.dragEnded.emit({value:null,event:e})});return}t.closest(".mat-calendar-body")===this._elementRef.nativeElement&&this._ngZone.run(()=>{let n=this._getCellFromElement(t);this.dragEnded.emit({value:n?.rawValue??null,event:e})})};_touchendHandler=e=>{let t=Qr(e);t&&this._mouseupHandler({target:t})};_getCellFromElement(e){let t=Ia(e);if(t){let n=t.getAttribute("data-mat-row"),o=t.getAttribute("data-mat-col");if(n&&o)return this.rows[parseInt(n)]?.[parseInt(o)]||null}return null}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["","mat-calendar-body",""]],hostAttrs:[1,"mat-calendar-body"],inputs:{label:"label",rows:"rows",todayValue:"todayValue",startValue:"startValue",endValue:"endValue",labelMinRequiredCells:"labelMinRequiredCells",numCols:"numCols",activeCell:"activeCell",isRange:"isRange",cellAspectRatio:"cellAspectRatio",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",previewStart:"previewStart",previewEnd:"previewEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedValueChange:"selectedValueChange",previewChange:"previewChange",activeDateChange:"activeDateChange",dragStarted:"dragStarted",dragEnded:"dragEnded"},exportAs:["matCalendarBody"],features:[ge],attrs:$l,decls:11,vars:11,consts:[["aria-hidden","true"],["role","row"],[1,"mat-calendar-body-hidden-label",3,"id"],[1,"mat-calendar-body-label"],[1,"mat-calendar-body-label",3,"paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container",3,"width","paddingTop","paddingBottom"],["role","gridcell",1,"mat-calendar-body-cell-container"],["type","button",1,"mat-calendar-body-cell",3,"click","focus","tabindex"],[1,"mat-calendar-body-cell-content","mat-focus-indicator"],["aria-hidden","true",1,"mat-calendar-body-cell-preview"]],template:function(t,n){t&1&&(h(0,Jl,3,6,"tr",0),Ve(1,nd,4,1,"tr",1,Ql,!0),M(3,"span",2),m(4),D(),M(5,"span",2),m(6),D(),M(7,"span",2),m(8),D(),M(9,"span",2),m(10),D()),t&2&&(f(n._firstRowOffset<n.labelMinRequiredCells?0:-1),c(),Le(n.rows),c(2),de("id",n._startDateLabelId),c(),te(" ",n.startDateAccessibleName,`
`),c(),de("id",n._endDateLabelId),c(),te(" ",n.endDateAccessibleName,`
`),c(),de("id",n._comparisonStartDateLabelId),c(),cn(" ",n.comparisonDateAccessibleName," ",n.startDateAccessibleName,`
`),c(),de("id",n._comparisonEndDateLabelId),c(),cn(" ",n.comparisonDateAccessibleName," ",n.endDateAccessibleName,`
`))},styles:[`.mat-calendar-body {
  min-width: 224px;
}

.mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-label {
  height: 0;
  line-height: 0;
  text-align: start;
  padding-left: 4.7142857143%;
  padding-right: 4.7142857143%;
  font-size: var(--mat-datepicker-calendar-body-label-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-body-label-text-weight, var(--mat-sys-title-small-weight));
  color: var(--mat-datepicker-calendar-body-label-text-color, var(--mat-sys-on-surface));
}

.mat-calendar-body-hidden-label {
  display: none;
}

.mat-calendar-body-cell-container {
  position: relative;
  height: 0;
  line-height: 0;
}

.mat-calendar-body-cell {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: none;
  text-align: center;
  outline: none;
  margin: 0;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-calendar-body-cell::-moz-focus-inner {
  border: 0;
}

.mat-calendar-body-cell::before,
.mat-calendar-body-cell::after,
.mat-calendar-body-cell-preview {
  content: "";
  position: absolute;
  top: 5%;
  left: 0;
  z-index: 0;
  box-sizing: border-box;
  display: block;
  height: 90%;
  width: 100%;
}

.mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-start::after,
.mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
.mat-calendar-body-comparison-start::after,
.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 5%;
  width: 95%;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-start:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-start:not(.mat-calendar-body-comparison-bridge-start)::before,
[dir=rtl] .mat-calendar-body-comparison-start::after,
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  left: 0;
  border-radius: 0;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
.mat-calendar-body-comparison-end::after,
.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}
[dir=rtl] .mat-calendar-body-range-end:not(.mat-calendar-body-in-comparison-range)::before,
[dir=rtl] .mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-end:not(.mat-calendar-body-comparison-bridge-end)::before,
[dir=rtl] .mat-calendar-body-comparison-end::after,
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  left: 5%;
  border-radius: 0;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
}

[dir=rtl] .mat-calendar-body-comparison-bridge-start.mat-calendar-body-range-end::after,
[dir=rtl] .mat-calendar-body-comparison-bridge-end.mat-calendar-body-range-start::after {
  width: 95%;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;
}

.mat-calendar-body-comparison-start.mat-calendar-body-range-end::after, [dir=rtl] .mat-calendar-body-comparison-start.mat-calendar-body-range-end::after,
.mat-calendar-body-comparison-end.mat-calendar-body-range-start::after,
[dir=rtl] .mat-calendar-body-comparison-end.mat-calendar-body-range-start::after {
  width: 90%;
}

.mat-calendar-body-in-preview {
  color: var(--mat-datepicker-calendar-date-preview-state-outline-color, var(--mat-sys-primary));
}
.mat-calendar-body-in-preview .mat-calendar-body-cell-preview {
  border-top: dashed 1px;
  border-bottom: dashed 1px;
}

.mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-start .mat-calendar-body-cell-preview {
  border-left: 0;
  border-right: dashed 1px;
}

.mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: dashed 1px;
}
[dir=rtl] .mat-calendar-body-preview-end .mat-calendar-body-cell-preview {
  border-right: 0;
  border-left: dashed 1px;
}

.mat-calendar-body-disabled {
  cursor: default;
}
.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  color: var(--mat-datepicker-calendar-date-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  border-color: var(--mat-datepicker-calendar-date-today-disabled-state-outline-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-calendar-body-disabled {
    opacity: 0.5;
  }
}

.mat-calendar-body-cell-content {
  top: 5%;
  left: 5%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 90%;
  height: 90%;
  line-height: 1;
  border-width: 1px;
  border-style: solid;
  border-radius: 999px;
  color: var(--mat-datepicker-calendar-date-text-color, var(--mat-sys-on-surface));
  border-color: var(--mat-datepicker-calendar-date-outline-color, transparent);
}
.mat-calendar-body-cell-content.mat-focus-indicator {
  position: absolute;
}
@media (forced-colors: active) {
  .mat-calendar-body-cell-content {
    border: none;
  }
}

.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical), .cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
  background-color: var(--mat-datepicker-calendar-date-focus-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}

@media (hover: hover) {
  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected):not(.mat-calendar-body-comparison-identical) {
    background-color: var(--mat-datepicker-calendar-date-hover-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
  }
}
.mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-state-background-color, var(--mat-sys-primary));
  color: var(--mat-datepicker-calendar-date-selected-state-text-color, var(--mat-sys-on-primary));
}
.mat-calendar-body-disabled > .mat-calendar-body-selected {
  background-color: var(--mat-datepicker-calendar-date-selected-disabled-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-calendar-body-selected.mat-calendar-body-today {
  box-shadow: inset 0 0 0 1px var(--mat-datepicker-calendar-date-today-selected-state-outline-color, var(--mat-sys-primary));
}

.mat-calendar-body-in-range::before {
  background: var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range::before {
  background: var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container));
}

.mat-calendar-body-comparison-bridge-start::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-end::before {
  background: linear-gradient(to right, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-comparison-bridge-end::before,
[dir=rtl] .mat-calendar-body-comparison-bridge-start::before {
  background: linear-gradient(to left, var(--mat-datepicker-calendar-date-in-range-state-background-color, var(--mat-sys-primary-container)) 50%, var(--mat-datepicker-calendar-date-in-comparison-range-state-background-color, var(--mat-sys-tertiary-container)) 50%);
}

.mat-calendar-body-in-range > .mat-calendar-body-comparison-identical,
.mat-calendar-body-in-comparison-range.mat-calendar-body-in-range::after {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-state-background-color, var(--mat-sys-secondary-container));
}

.mat-calendar-body-comparison-identical.mat-calendar-body-selected,
.mat-calendar-body-in-comparison-range > .mat-calendar-body-selected {
  background: var(--mat-datepicker-calendar-date-in-overlap-range-selected-state-background-color, var(--mat-sys-secondary));
}

@media (forced-colors: active) {
  .mat-datepicker-popup:not(:empty),
  .mat-calendar-body-cell:not(.mat-calendar-body-in-range) .mat-calendar-body-selected {
    outline: solid 1px;
  }
  .mat-calendar-body-today {
    outline: dotted 1px;
  }
  .mat-calendar-body-cell::before,
  .mat-calendar-body-cell::after,
  .mat-calendar-body-selected {
    background: none;
  }
  .mat-calendar-body-in-range::before,
  .mat-calendar-body-comparison-bridge-start::before,
  .mat-calendar-body-comparison-bridge-end::before {
    border-top: solid 1px;
    border-bottom: solid 1px;
  }
  .mat-calendar-body-range-start::before {
    border-left: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-start::before {
    border-left: 0;
    border-right: solid 1px;
  }
  .mat-calendar-body-range-end::before {
    border-right: solid 1px;
  }
  [dir=rtl] .mat-calendar-body-range-end::before {
    border-right: 0;
    border-left: solid 1px;
  }
  .mat-calendar-body-in-comparison-range::before {
    border-top: dashed 1px;
    border-bottom: dashed 1px;
  }
  .mat-calendar-body-comparison-start::before {
    border-left: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-start::before {
    border-left: 0;
    border-right: dashed 1px;
  }
  .mat-calendar-body-comparison-end::before {
    border-right: dashed 1px;
  }
  [dir=rtl] .mat-calendar-body-comparison-end::before {
    border-right: 0;
    border-left: dashed 1px;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();function Aa(i){return i?.nodeName==="TD"}function Ia(i){let a;return Aa(i)?a=i:Aa(i.parentNode)?a=i.parentNode:Aa(i.parentNode?.parentNode)&&(a=i.parentNode.parentNode),a?.getAttribute("data-mat-row")!=null?a:null}function Ra(i,a,e){return e!==null&&a!==e&&i<e&&i===a}function Pa(i,a,e){return a!==null&&a!==e&&i>=a&&i===e}function Fa(i,a,e,t){return t&&a!==null&&e!==null&&a!==e&&i>=a&&i<=e}function Qr(i){let a=i.changedTouches[0];return document.elementFromPoint(a.clientX,a.clientY)}var ze=class{start;end;_disableStructuralEquivalency;constructor(a,e){this.start=a,this.end=e}},Pn=(()=>{class i{selection;_adapter;_selectionChanged=new E;selectionChanged=this._selectionChanged;constructor(e,t){this.selection=e,this._adapter=t,this.selection=e}updateSelection(e,t){let n=this.selection;this.selection=e,this._selectionChanged.next({selection:e,source:t,oldValue:n})}ngOnDestroy(){this._selectionChanged.complete()}_isValidDateInstance(e){return this._adapter.isDateInstance(e)&&this._adapter.isValid(e)}static \u0275fac=function(t){ro()};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})(),gd=(()=>{class i extends Pn{constructor(e){super(null,e)}add(e){super.updateSelection(e,this)}isValid(){return this.selection!=null&&this._isValidDateInstance(this.selection)}isComplete(){return this.selection!=null}clone(){let e=new i(this._adapter);return e.updateSelection(this.selection,this),e}static \u0275fac=function(t){return new(t||i)(to(Ce))};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();var as={provide:Pn,useFactory:()=>s(Pn,{optional:!0,skipSelf:!0})||new gd(s(Ce))};var os=new k("MAT_DATE_RANGE_SELECTION_STRATEGY");var Va=7,_d=0,Jr=(()=>{class i{_changeDetectorRef=s(J);_dateFormats=s(lt,{optional:!0});_dateAdapter=s(Ce,{optional:!0});_dir=s(xe,{optional:!0});_rangeStrategy=s(os,{optional:!0});_rerenderSubscription=se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._hasSameMonthAndYear(t,this._activeDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ze?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setRanges(this._selected)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;activeDrag=null;selectedChange=new v;_userSelection=new v;dragStarted=new v;dragEnded=new v;activeDateChange=new v;_matCalendarBody;_monthLabel=j("");_weeks=j([]);_firstWeekOffset=j(0);_rangeStart=j(null);_rangeEnd=j(null);_comparisonRangeStart=j(null);_comparisonRangeEnd=j(null);_previewStart=j(null);_previewEnd=j(null);_isRange=j(!1);_todayDate=j(null);_weekdays=j([]);constructor(){s(ne).load(Ge),this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Re(null)).subscribe(()=>this._init())}ngOnChanges(e){let t=e.comparisonStart||e.comparisonEnd;t&&!t.firstChange&&this._setRanges(this.selected),e.activeDrag&&!this.activeDrag&&this._clearPreview()}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_dateSelected(e){let t=e.value,n=this._getDateFromDayOfMonth(t),o,r;this._selected instanceof ze?(o=this._getDateInCurrentMonth(this._selected.start),r=this._getDateInCurrentMonth(this._selected.end)):o=r=this._getDateInCurrentMonth(this._selected),(o!==t||r!==t)&&this.selectedChange.emit(n),this._userSelection.emit({value:n,event:e.event}),this._clearPreview(),this._changeDetectorRef.markForCheck()}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromDayOfMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this._activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,-7);break;case 40:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,7);break;case 36:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,1-this._dateAdapter.getDate(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarDays(this._activeDate,this._dateAdapter.getNumDaysInMonth(this._activeDate)-this._dateAdapter.getDate(this._activeDate));break;case 33:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,-1):this._dateAdapter.addCalendarMonths(this._activeDate,-1);break;case 34:this.activeDate=e.altKey?this._dateAdapter.addCalendarYears(this._activeDate,1):this._dateAdapter.addCalendarMonths(this._activeDate,1);break;case 13:case 32:this._selectionKeyPressed=!0,this._canSelect(this._activeDate)&&e.preventDefault();return;case 27:this._previewEnd()!=null&&!ue(e)&&(this._clearPreview(),this.activeDrag?this.dragEnded.emit({value:null,event:e}):(this.selectedChange.emit(null),this._userSelection.emit({value:null,event:e})),e.preventDefault(),e.stopPropagation());return;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._canSelect(this._activeDate)&&this._dateSelected({value:this._dateAdapter.getDate(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setRanges(this.selected),this._todayDate.set(this._getCellCompareValue(this._dateAdapter.today())),this._monthLabel.set(this._dateFormats.display.monthLabel?this._dateAdapter.format(this.activeDate,this._dateFormats.display.monthLabel):this._dateAdapter.getMonthNames("short")[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase());let e=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),1);this._firstWeekOffset.set((Va+this._dateAdapter.getDayOfWeek(e)-this._dateAdapter.getFirstDayOfWeek())%Va),this._initWeekdays(),this._createWeekCells(),this._changeDetectorRef.markForCheck()}_focusActiveCell(e){this._matCalendarBody._focusActiveCell(e)}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_previewChanged({event:e,value:t}){if(this._rangeStrategy){let n=t?t.rawValue:null,o=this._rangeStrategy.createPreview(n,this.selected,e);if(this._previewStart.set(this._getCellCompareValue(o.start)),this._previewEnd.set(this._getCellCompareValue(o.end)),this.activeDrag&&n){let r=this._rangeStrategy.createDrag?.(this.activeDrag.value,this.selected,n,e);r&&(this._previewStart.set(this._getCellCompareValue(r.start)),this._previewEnd.set(this._getCellCompareValue(r.end)))}}}_dragEnded(e){if(this.activeDrag)if(e.value){let t=this._rangeStrategy?.createDrag?.(this.activeDrag.value,this.selected,e.value,e.event);this.dragEnded.emit({value:t??null,event:e.event})}else this.dragEnded.emit({value:null,event:e.event})}_getDateFromDayOfMonth(e){return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),e)}_initWeekdays(){let e=this._dateAdapter.getFirstDayOfWeek(),t=this._dateAdapter.getDayOfWeekNames("narrow"),o=this._dateAdapter.getDayOfWeekNames("long").map((r,p)=>({long:r,narrow:t[p],id:_d++}));this._weekdays.set(o.slice(e).concat(o.slice(0,e)))}_createWeekCells(){let e=this._dateAdapter.getNumDaysInMonth(this.activeDate),t=this._dateAdapter.getDateNames(),n=[[]];for(let o=0,r=this._firstWeekOffset();o<e;o++,r++){r==Va&&(n.push([]),r=0);let p=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),this._dateAdapter.getMonth(this.activeDate),o+1),g=this._shouldEnableDate(p),A=this._dateAdapter.format(p,this._dateFormats.display.dateA11yLabel),C=this.dateClass?this.dateClass(p,"month"):void 0;n[n.length-1].push(new Rn(o+1,t[o],A,g,C,this._getCellCompareValue(p),p))}this._weeks.set(n)}_shouldEnableDate(e){return!!e&&(!this.minDate||this._dateAdapter.compareDate(e,this.minDate)>=0)&&(!this.maxDate||this._dateAdapter.compareDate(e,this.maxDate)<=0)&&(!this.dateFilter||this.dateFilter(e))}_getDateInCurrentMonth(e){return e&&this._hasSameMonthAndYear(e,this.activeDate)?this._dateAdapter.getDate(e):null}_hasSameMonthAndYear(e,t){return!!(e&&t&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t)&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t))}_getCellCompareValue(e){if(e){let t=this._dateAdapter.getYear(e),n=this._dateAdapter.getMonth(e),o=this._dateAdapter.getDate(e);return new Date(t,n,o).getTime()}return null}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setRanges(e){e instanceof ze?(this._rangeStart.set(this._getCellCompareValue(e.start)),this._rangeEnd.set(this._getCellCompareValue(e.end)),this._isRange.set(!0)):(this._rangeStart.set(this._getCellCompareValue(e)),this._rangeEnd.set(this._rangeStart()),this._isRange.set(!1)),this._comparisonRangeStart.set(this._getCellCompareValue(this.comparisonStart)),this._comparisonRangeEnd.set(this._getCellCompareValue(this.comparisonEnd))}_canSelect(e){return!this.dateFilter||this.dateFilter(e)}_clearPreview(){this._previewStart.set(null),this._previewEnd.set(null)}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-month-view"]],viewQuery:function(t,n){if(t&1&&me(tn,5),t&2){let o;R(o=P())&&(n._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName",activeDrag:"activeDrag"},outputs:{selectedChange:"selectedChange",_userSelection:"_userSelection",dragStarted:"dragStarted",dragEnded:"dragEnded",activeDateChange:"activeDateChange"},exportAs:["matMonthView"],features:[ge],decls:8,vars:14,consts:[["role","grid",1,"mat-calendar-table"],[1,"mat-calendar-table-header"],["scope","col"],["aria-hidden","true"],["colspan","7",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","previewChange","dragStarted","dragEnded","keyup","keydown","label","rows","todayValue","startValue","endValue","comparisonStart","comparisonEnd","previewStart","previewEnd","isRange","labelMinRequiredCells","activeCell","startDateAccessibleName","endDateAccessibleName"],[1,"cdk-visually-hidden"]],template:function(t,n){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),Ve(3,id,5,2,"th",2,is),d(),l(5,"tr",3),H(6,"th",4),d()(),l(7,"tbody",5),x("selectedValueChange",function(r){return n._dateSelected(r)})("activeDateChange",function(r){return n._updateActiveDate(r)})("previewChange",function(r){return n._previewChanged(r)})("dragStarted",function(r){return n.dragStarted.emit(r)})("dragEnded",function(r){return n._dragEnded(r)})("keyup",function(r){return n._handleCalendarBodyKeyup(r)})("keydown",function(r){return n._handleCalendarBodyKeydown(r)}),d()()),t&2&&(c(3),Le(n._weekdays()),c(4),y("label",n._monthLabel())("rows",n._weeks())("todayValue",n._todayDate())("startValue",n._rangeStart())("endValue",n._rangeEnd())("comparisonStart",n._comparisonRangeStart())("comparisonEnd",n._comparisonRangeEnd())("previewStart",n._previewStart())("previewEnd",n._previewEnd())("isRange",n._isRange())("labelMinRequiredCells",3)("activeCell",n._dateAdapter.getDate(n.activeDate)-1)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName))},dependencies:[tn],encapsulation:2,changeDetection:0})}return i})(),Te=24,La=4,es=(()=>{class i{_changeDetectorRef=s(J);_dateAdapter=s(Ce,{optional:!0});_dir=s(xe,{optional:!0});_rerenderSubscription=se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),rs(this._dateAdapter,t,this._activeDate,this.minDate,this.maxDate)||this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ze?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedYear(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new v;yearSelected=new v;activeDateChange=new v;_matCalendarBody;_years=j([]);_todayYear=j(0);_selectedYear=j(null);constructor(){this._dateAdapter,this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Re(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_init(){this._todayYear.set(this._dateAdapter.getYear(this._dateAdapter.today()));let t=this._dateAdapter.getYear(this._activeDate)-In(this._dateAdapter,this.activeDate,this.minDate,this.maxDate),n=[];for(let o=0,r=[];o<Te;o++)r.push(t+o),r.length==La&&(n.push(r.map(p=>this._createCellForYear(p))),r=[]);this._years.set(n),this._changeDetectorRef.markForCheck()}_yearSelected(e){let t=e.value,n=this._dateAdapter.createDate(t,0,1),o=this._getDateFromYear(t);this.yearSelected.emit(n),this.selectedChange.emit(o)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromYear(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-La);break;case 40:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,La);break;case 36:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,-In(this._dateAdapter,this.activeDate,this.minDate,this.maxDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,Te-In(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)-1);break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-Te*10:-Te);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?Te*10:Te);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked(),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._yearSelected({value:this._dateAdapter.getYear(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_getActiveCell(){return In(this._dateAdapter,this.activeDate,this.minDate,this.maxDate)}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getDateFromYear(e){let t=this._dateAdapter.getMonth(this.activeDate),n=this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(e,t,1));return this._dateAdapter.createDate(e,t,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForYear(e){let t=this._dateAdapter.createDate(e,0,1),n=this._dateAdapter.getYearName(t),o=this.dateClass?this.dateClass(t,"multi-year"):void 0;return new Rn(e,n,n,this._shouldEnableYear(e),o)}_shouldEnableYear(e){if(e==null||this.maxDate&&e>this._dateAdapter.getYear(this.maxDate)||this.minDate&&e<this._dateAdapter.getYear(this.minDate))return!1;if(!this.dateFilter)return!0;let t=this._dateAdapter.createDate(e,0,1);for(let n=t;this._dateAdapter.getYear(n)==e;n=this._dateAdapter.addCalendarDays(n,1))if(this.dateFilter(n))return!0;return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedYear(e){if(this._selectedYear.set(null),e instanceof ze){let t=e.start||e.end;t&&this._selectedYear.set(this._dateAdapter.getYear(t))}else e&&this._selectedYear.set(this._dateAdapter.getYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-multi-year-view"]],viewQuery:function(t,n){if(t&1&&me(tn,5),t&2){let o;R(o=P())&&(n._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",activeDateChange:"activeDateChange"},exportAs:["matMultiYearView"],decls:5,vars:7,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","rows","todayValue","startValue","endValue","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),H(3,"th",2),d()(),l(4,"tbody",3),x("selectedValueChange",function(r){return n._yearSelected(r)})("activeDateChange",function(r){return n._updateActiveDate(r)})("keyup",function(r){return n._handleCalendarBodyKeyup(r)})("keydown",function(r){return n._handleCalendarBodyKeydown(r)}),d()()),t&2&&(c(4),y("rows",n._years())("todayValue",n._todayYear())("startValue",n._selectedYear())("endValue",n._selectedYear())("numCols",4)("cellAspectRatio",4/7)("activeCell",n._getActiveCell()))},dependencies:[tn],encapsulation:2,changeDetection:0})}return i})();function rs(i,a,e,t,n){let o=i.getYear(a),r=i.getYear(e),p=ss(i,t,n);return Math.floor((o-p)/Te)===Math.floor((r-p)/Te)}function In(i,a,e,t){let n=i.getYear(a);return bd(n-ss(i,e,t),Te)}function ss(i,a,e){let t=0;return e?t=i.getYear(e)-Te+1:a&&(t=i.getYear(a)),t}function bd(i,a){return(i%a+a)%a}var ts=(()=>{class i{_changeDetectorRef=s(J);_dateFormats=s(lt,{optional:!0});_dateAdapter=s(Ce,{optional:!0});_dir=s(xe,{optional:!0});_rerenderSubscription=se.EMPTY;_selectionKeyPressed=!1;get activeDate(){return this._activeDate}set activeDate(e){let t=this._activeDate,n=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))||this._dateAdapter.today();this._activeDate=this._dateAdapter.clampDate(n,this.minDate,this.maxDate),this._dateAdapter.getYear(t)!==this._dateAdapter.getYear(this._activeDate)&&this._init()}_activeDate;get selected(){return this._selected}set selected(e){e instanceof ze?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e)),this._setSelectedMonth(e)}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;selectedChange=new v;monthSelected=new v;activeDateChange=new v;_matCalendarBody;_months=j([]);_yearLabel=j("");_todayMonth=j(null);_selectedMonth=j(null);constructor(){this._activeDate=this._dateAdapter.today()}ngAfterContentInit(){this._rerenderSubscription=this._dateAdapter.localeChanges.pipe(Re(null)).subscribe(()=>this._init())}ngOnDestroy(){this._rerenderSubscription.unsubscribe()}_monthSelected(e){let t=e.value,n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),t,1);this.monthSelected.emit(n);let o=this._getDateFromMonth(t);this.selectedChange.emit(o)}_updateActiveDate(e){let t=e.value,n=this._activeDate;this.activeDate=this._getDateFromMonth(t),this._dateAdapter.compareDate(n,this.activeDate)&&this.activeDateChange.emit(this.activeDate)}_handleCalendarBodyKeydown(e){let t=this._activeDate,n=this._isRtl();switch(e.keyCode){case 37:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?1:-1);break;case 39:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,n?-1:1);break;case 38:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-4);break;case 40:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,4);break;case 36:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,-this._dateAdapter.getMonth(this._activeDate));break;case 35:this.activeDate=this._dateAdapter.addCalendarMonths(this._activeDate,11-this._dateAdapter.getMonth(this._activeDate));break;case 33:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?-10:-1);break;case 34:this.activeDate=this._dateAdapter.addCalendarYears(this._activeDate,e.altKey?10:1);break;case 13:case 32:this._selectionKeyPressed=!0;break;default:return}this._dateAdapter.compareDate(t,this.activeDate)&&(this.activeDateChange.emit(this.activeDate),this._focusActiveCellAfterViewChecked()),e.preventDefault()}_handleCalendarBodyKeyup(e){(e.keyCode===32||e.keyCode===13)&&(this._selectionKeyPressed&&this._monthSelected({value:this._dateAdapter.getMonth(this._activeDate),event:e}),this._selectionKeyPressed=!1)}_init(){this._setSelectedMonth(this.selected),this._todayMonth.set(this._getMonthInCurrentYear(this._dateAdapter.today())),this._yearLabel.set(this._dateAdapter.getYearName(this.activeDate));let e=this._dateAdapter.getMonthNames("short");this._months.set([[0,1,2,3],[4,5,6,7],[8,9,10,11]].map(t=>t.map(n=>this._createCellForMonth(n,e[n])))),this._changeDetectorRef.markForCheck()}_focusActiveCell(){this._matCalendarBody._focusActiveCell()}_focusActiveCellAfterViewChecked(){this._matCalendarBody._scheduleFocusActiveCellAfterViewChecked()}_getMonthInCurrentYear(e){return e&&this._dateAdapter.getYear(e)==this._dateAdapter.getYear(this.activeDate)?this._dateAdapter.getMonth(e):null}_getDateFromMonth(e){let t=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),n=this._dateAdapter.getNumDaysInMonth(t);return this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,Math.min(this._dateAdapter.getDate(this.activeDate),n))}_createCellForMonth(e,t){let n=this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate),e,1),o=this._dateAdapter.format(n,this._dateFormats.display.monthYearA11yLabel),r=this.dateClass?this.dateClass(n,"year"):void 0;return new Rn(e,t.toLocaleUpperCase(),o,this._shouldEnableMonth(e),r)}_shouldEnableMonth(e){let t=this._dateAdapter.getYear(this.activeDate);if(e==null||this._isYearAndMonthAfterMaxDate(t,e)||this._isYearAndMonthBeforeMinDate(t,e))return!1;if(!this.dateFilter)return!0;let n=this._dateAdapter.createDate(t,e,1);for(let o=n;this._dateAdapter.getMonth(o)==e;o=this._dateAdapter.addCalendarDays(o,1))if(this.dateFilter(o))return!0;return!1}_isYearAndMonthAfterMaxDate(e,t){if(this.maxDate){let n=this._dateAdapter.getYear(this.maxDate),o=this._dateAdapter.getMonth(this.maxDate);return e>n||e===n&&t>o}return!1}_isYearAndMonthBeforeMinDate(e,t){if(this.minDate){let n=this._dateAdapter.getYear(this.minDate),o=this._dateAdapter.getMonth(this.minDate);return e<n||e===n&&t<o}return!1}_isRtl(){return this._dir&&this._dir.value==="rtl"}_setSelectedMonth(e){e instanceof ze?this._selectedMonth.set(this._getMonthInCurrentYear(e.start)||this._getMonthInCurrentYear(e.end)):this._selectedMonth.set(this._getMonthInCurrentYear(e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-year-view"]],viewQuery:function(t,n){if(t&1&&me(tn,5),t&2){let o;R(o=P())&&(n._matCalendarBody=o.first)}},inputs:{activeDate:"activeDate",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass"},outputs:{selectedChange:"selectedChange",monthSelected:"monthSelected",activeDateChange:"activeDateChange"},exportAs:["matYearView"],decls:5,vars:9,consts:[["role","grid",1,"mat-calendar-table"],["aria-hidden","true",1,"mat-calendar-table-header"],["colspan","4",1,"mat-calendar-table-header-divider"],["mat-calendar-body","",3,"selectedValueChange","activeDateChange","keyup","keydown","label","rows","todayValue","startValue","endValue","labelMinRequiredCells","numCols","cellAspectRatio","activeCell"]],template:function(t,n){t&1&&(l(0,"table",0)(1,"thead",1)(2,"tr"),H(3,"th",2),d()(),l(4,"tbody",3),x("selectedValueChange",function(r){return n._monthSelected(r)})("activeDateChange",function(r){return n._updateActiveDate(r)})("keyup",function(r){return n._handleCalendarBodyKeyup(r)})("keydown",function(r){return n._handleCalendarBodyKeydown(r)}),d()()),t&2&&(c(4),y("label",n._yearLabel())("rows",n._months())("todayValue",n._todayMonth())("startValue",n._selectedMonth())("endValue",n._selectedMonth())("labelMinRequiredCells",2)("numCols",4)("cellAspectRatio",4/7)("activeCell",n._dateAdapter.getMonth(n.activeDate)))},dependencies:[tn],encapsulation:2,changeDetection:0})}return i})(),ls=(()=>{class i{_intl=s(nn);calendar=s(Na);_dateAdapter=s(Ce,{optional:!0});_dateFormats=s(lt,{optional:!0});_periodButtonText;_periodButtonDescription;_periodButtonLabel;_prevButtonLabel;_nextButtonLabel;constructor(){s(ne).load(Ge);let e=s(J);this._updateLabels(),this.calendar.stateChanges.subscribe(()=>{this._updateLabels(),e.markForCheck()})}get periodButtonText(){return this._periodButtonText}get periodButtonDescription(){return this._periodButtonDescription}get periodButtonLabel(){return this._periodButtonLabel}get prevButtonLabel(){return this._prevButtonLabel}get nextButtonLabel(){return this._nextButtonLabel}currentPeriodClicked(){this.calendar.currentView=this.calendar.currentView=="month"?"multi-year":"month"}previousClicked(){this.previousEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,-1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?-1:-Te))}nextClicked(){this.nextEnabled()&&(this.calendar.activeDate=this.calendar.currentView=="month"?this._dateAdapter.addCalendarMonths(this.calendar.activeDate,1):this._dateAdapter.addCalendarYears(this.calendar.activeDate,this.calendar.currentView=="year"?1:Te))}previousEnabled(){return this.calendar.minDate?!this.calendar.minDate||!this._isSameView(this.calendar.activeDate,this.calendar.minDate):!0}nextEnabled(){return!this.calendar.maxDate||!this._isSameView(this.calendar.activeDate,this.calendar.maxDate)}_updateLabels(){let e=this.calendar,t=this._intl,n=this._dateAdapter;e.currentView==="month"?(this._periodButtonText=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonDescription=n.format(e.activeDate,this._dateFormats.display.monthYearLabel).toLocaleUpperCase(),this._periodButtonLabel=t.switchToMultiYearViewLabel,this._prevButtonLabel=t.prevMonthLabel,this._nextButtonLabel=t.nextMonthLabel):e.currentView==="year"?(this._periodButtonText=n.getYearName(e.activeDate),this._periodButtonDescription=n.getYearName(e.activeDate),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevYearLabel,this._nextButtonLabel=t.nextYearLabel):(this._periodButtonText=t.formatYearRange(...this._formatMinAndMaxYearLabels()),this._periodButtonDescription=t.formatYearRangeLabel(...this._formatMinAndMaxYearLabels()),this._periodButtonLabel=t.switchToMonthViewLabel,this._prevButtonLabel=t.prevMultiYearLabel,this._nextButtonLabel=t.nextMultiYearLabel)}_isSameView(e,t){return this.calendar.currentView=="month"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t)&&this._dateAdapter.getMonth(e)==this._dateAdapter.getMonth(t):this.calendar.currentView=="year"?this._dateAdapter.getYear(e)==this._dateAdapter.getYear(t):rs(this._dateAdapter,e,t,this.calendar.minDate,this.calendar.maxDate)}_formatMinAndMaxYearLabels(){let t=this._dateAdapter.getYear(this.calendar.activeDate)-In(this._dateAdapter,this.calendar.activeDate,this.calendar.minDate,this.calendar.maxDate),n=t+Te-1,o=this._dateAdapter.getYearName(this._dateAdapter.createDate(t,0,1)),r=this._dateAdapter.getYearName(this._dateAdapter.createDate(n,0,1));return[o,r]}_periodButtonLabelId=s(re).getId("mat-calendar-period-label-");static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-calendar-header"]],exportAs:["matCalendarHeader"],ngContentSelectors:ad,decls:17,vars:13,consts:[[1,"mat-calendar-header"],[1,"mat-calendar-controls"],["aria-live","polite",1,"cdk-visually-hidden",3,"id"],["matButton","","type","button",1,"mat-calendar-period-button",3,"click"],["aria-hidden","true"],["viewBox","0 0 10 5","focusable","false","aria-hidden","true",1,"mat-calendar-arrow"],["points","0,0 5,5 10,0"],[1,"mat-calendar-spacer"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-previous-button",3,"click","disabled","matTooltip"],["viewBox","0 0 24 24","focusable","false","aria-hidden","true"],["d","M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"],["matIconButton","","type","button","disabledInteractive","",1,"mat-calendar-next-button",3,"click","disabled","matTooltip"],["d","M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"]],template:function(t,n){t&1&&(ce(),l(0,"div",0)(1,"div",1)(2,"span",2),m(3),d(),l(4,"button",3),x("click",function(){return n.currentPeriodClicked()}),l(5,"span",4),m(6),d(),Pe(),l(7,"svg",5),H(8,"polygon",6),d()(),Ui(),H(9,"div",7),U(10),l(11,"button",8),x("click",function(){return n.previousClicked()}),Pe(),l(12,"svg",9),H(13,"path",10),d()(),Ui(),l(14,"button",11),x("click",function(){return n.nextClicked()}),Pe(),l(15,"svg",9),H(16,"path",12),d()()()()),t&2&&(c(2),y("id",n._periodButtonLabelId),c(),V(n.periodButtonDescription),c(),Y("aria-label",n.periodButtonLabel)("aria-describedby",n._periodButtonLabelId),c(2),V(n.periodButtonText),c(),O("mat-calendar-invert",n.calendar.currentView!=="month"),c(4),y("disabled",!n.previousEnabled())("matTooltip",n.prevButtonLabel),Y("aria-label",n.prevButtonLabel),c(3),y("disabled",!n.nextEnabled())("matTooltip",n.nextButtonLabel),Y("aria-label",n.nextButtonLabel))},dependencies:[Ea,yi,Vr],encapsulation:2,changeDetection:0})}return i})(),Na=(()=>{class i{_dateAdapter=s(Ce,{optional:!0});_dateFormats=s(lt,{optional:!0});_changeDetectorRef=s(J);_elementRef=s(I);headerComponent;_calendarHeaderPortal;_intlChanges;_moveFocusOnNextTick=!1;get startAt(){return this._startAt}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get selected(){return this._selected}set selected(e){e instanceof ze?this._selected=e:this._selected=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_selected=null;get minDate(){return this._minDate}set minDate(e){this._minDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_minDate=null;get maxDate(){return this._maxDate}set maxDate(e){this._maxDate=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_maxDate=null;dateFilter;dateClass;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;selectedChange=new v;yearSelected=new v;monthSelected=new v;viewChanged=new v(!0);_userSelection=new v;_userDragDrop=new v;monthView;yearView;multiYearView;get activeDate(){return this._clampedActiveDate}set activeDate(e){this._clampedActiveDate=this._dateAdapter.clampDate(e,this.minDate,this.maxDate),this.stateChanges.next(),this._changeDetectorRef.markForCheck()}_clampedActiveDate;get currentView(){return this._currentView}set currentView(e){let t=this._currentView!==e?e:null;this._currentView=e,this._moveFocusOnNextTick=!0,this._changeDetectorRef.markForCheck(),t&&(this.stateChanges.next(),this.viewChanged.emit(t))}_currentView;_activeDrag=null;stateChanges=new E;constructor(){this._intlChanges=s(nn).changes.subscribe(()=>{this._changeDetectorRef.markForCheck(),this.stateChanges.next()})}ngAfterContentInit(){this._calendarHeaderPortal=new mt(this.headerComponent||ls),this.activeDate=this.startAt||this._dateAdapter.today(),this._currentView=this.startView}ngAfterViewChecked(){this._moveFocusOnNextTick&&(this._moveFocusOnNextTick=!1,this.focusActiveCell())}ngOnDestroy(){this._intlChanges.unsubscribe(),this.stateChanges.complete()}ngOnChanges(e){let t=e.minDate&&!this._dateAdapter.sameDate(e.minDate.previousValue,e.minDate.currentValue)?e.minDate:void 0,n=e.maxDate&&!this._dateAdapter.sameDate(e.maxDate.previousValue,e.maxDate.currentValue)?e.maxDate:void 0,o=t||n||e.dateFilter;if(o&&!o.firstChange){let r=this._getCurrentViewComponent();r&&(this._elementRef.nativeElement.contains(Bt())&&(this._moveFocusOnNextTick=!0),this._changeDetectorRef.detectChanges(),r._init())}this.stateChanges.next()}focusActiveCell(){this._getCurrentViewComponent()?._focusActiveCell(!1)}updateTodaysDate(){this._getCurrentViewComponent()?._init()}_dateSelected(e){let t=e.value;(this.selected instanceof ze||t&&!this._dateAdapter.sameDate(t,this.selected))&&this.selectedChange.emit(t),this._userSelection.emit(e)}_yearSelectedInMultiYearView(e){this.yearSelected.emit(e)}_monthSelectedInYearView(e){this.monthSelected.emit(e)}_goToDateInView(e,t){this.activeDate=e,this.currentView=t}_dragStarted(e){this._activeDrag=e}_dragEnded(e){this._activeDrag&&(e.value&&this._userDragDrop.emit(e),this._activeDrag=null)}_getCurrentViewComponent(){return this.monthView||this.yearView||this.multiYearView}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-calendar"]],viewQuery:function(t,n){if(t&1&&me(Jr,5)(ts,5)(es,5),t&2){let o;R(o=P())&&(n.monthView=o.first),R(o=P())&&(n.yearView=o.first),R(o=P())&&(n.multiYearView=o.first)}},hostAttrs:[1,"mat-calendar"],inputs:{headerComponent:"headerComponent",startAt:"startAt",startView:"startView",selected:"selected",minDate:"minDate",maxDate:"maxDate",dateFilter:"dateFilter",dateClass:"dateClass",comparisonStart:"comparisonStart",comparisonEnd:"comparisonEnd",startDateAccessibleName:"startDateAccessibleName",endDateAccessibleName:"endDateAccessibleName"},outputs:{selectedChange:"selectedChange",yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",_userSelection:"_userSelection",_userDragDrop:"_userDragDrop"},exportAs:["matCalendar"],features:[oe([as]),ge],decls:5,vars:2,consts:[[3,"cdkPortalOutlet"],["cdkMonitorSubtreeFocus","","tabindex","-1",1,"mat-calendar-content"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","_userSelection","dragStarted","dragEnded","activeDate","selected","dateFilter","maxDate","minDate","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName","activeDrag"],[3,"activeDateChange","monthSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"],[3,"activeDateChange","yearSelected","selectedChange","activeDate","selected","dateFilter","maxDate","minDate","dateClass"]],template:function(t,n){if(t&1&&(Xe(0,od,0,0,"ng-template",0),l(1,"div",1),h(2,rd,1,11,"mat-month-view",2)(3,sd,1,6,"mat-year-view",3)(4,ld,1,6,"mat-multi-year-view",3),d()),t&2){let o;y("cdkPortalOutlet",n._calendarHeaderPortal),c(2),f((o=n.currentView)==="month"?2:o==="year"?3:o==="multi-year"?4:-1)}},dependencies:[ga,na,Jr,ts,es],styles:[`.mat-calendar {
  display: block;
  line-height: normal;
  font-family: var(--mat-datepicker-calendar-text-font, var(--mat-sys-body-medium-font));
  font-size: var(--mat-datepicker-calendar-text-size, var(--mat-sys-body-medium-size));
}

.mat-calendar-header {
  padding: 8px 8px 0 8px;
}

.mat-calendar-content {
  padding: 0 8px 8px 8px;
  outline: none;
}

.mat-calendar-controls {
  display: flex;
  align-items: center;
  margin: 5% calc(4.7142857143% - 16px);
}

.mat-calendar-spacer {
  flex: 1 1 auto;
}

.mat-calendar-period-button {
  min-width: 0;
  margin: 0 8px;
  font-size: var(--mat-datepicker-calendar-period-button-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-period-button-text-weight, var(--mat-sys-title-small-weight));
  --mat-button-text-label-text-color: var(--mat-datepicker-calendar-period-button-text-color, var(--mat-sys-on-surface-variant));
}

.mat-calendar-arrow {
  display: inline-block;
  width: 10px;
  height: 5px;
  margin: 0 0 0 5px;
  vertical-align: middle;
  fill: var(--mat-datepicker-calendar-period-button-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-calendar-arrow.mat-calendar-invert {
  transform: rotate(180deg);
}
[dir=rtl] .mat-calendar-arrow {
  margin: 0 5px 0 0;
}
@media (forced-colors: active) {
  .mat-calendar-arrow {
    fill: CanvasText;
  }
}

.mat-datepicker-content .mat-calendar-previous-button:not(.mat-mdc-button-disabled),
.mat-datepicker-content .mat-calendar-next-button:not(.mat-mdc-button-disabled) {
  color: var(--mat-datepicker-calendar-navigation-button-icon-color, var(--mat-sys-on-surface-variant));
}
[dir=rtl] .mat-calendar-previous-button,
[dir=rtl] .mat-calendar-next-button {
  transform: rotate(180deg);
}

.mat-calendar-table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

.mat-calendar-table-header th {
  text-align: center;
  padding: 0 0 8px 0;
  color: var(--mat-datepicker-calendar-header-text-color, var(--mat-sys-on-surface-variant));
  font-size: var(--mat-datepicker-calendar-header-text-size, var(--mat-sys-title-small-size));
  font-weight: var(--mat-datepicker-calendar-header-text-weight, var(--mat-sys-title-small-weight));
}

.mat-calendar-table-header-divider {
  position: relative;
  height: 1px;
}
.mat-calendar-table-header-divider::after {
  content: "";
  position: absolute;
  top: 0;
  left: -8px;
  right: -8px;
  height: 1px;
  background: var(--mat-datepicker-calendar-header-divider-color, transparent);
}

.mat-calendar-body-cell-content::before {
  margin: calc(calc(var(--mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-calendar-body-cell:focus-visible .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})(),vd=new k("mat-datepicker-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(Q);return()=>Je(i)}}),ds=(()=>{class i{_elementRef=s(I);_animationsDisabled=le();_changeDetectorRef=s(J);_globalModel=s(Pn);_dateAdapter=s(Ce);_ngZone=s(F);_rangeSelectionStrategy=s(os,{optional:!0});_stateChanges;_model;_eventCleanups;_animationFallback;_calendar;color;datepicker;comparisonStart=null;comparisonEnd=null;startDateAccessibleName=null;endDateAccessibleName=null;_isAbove=!1;_animationDone=new E;_isAnimating=!1;_closeButtonText;_closeButtonFocused=!1;_actionsPortal=null;_dialogLabelId=null;constructor(){if(s(ne).load(Ge),this._closeButtonText=s(nn).closeCalendarLabel,!this._animationsDisabled){let e=this._elementRef.nativeElement,t=s(ve);this._eventCleanups=this._ngZone.runOutsideAngular(()=>[t.listen(e,"animationstart",this._handleAnimationEvent),t.listen(e,"animationend",this._handleAnimationEvent),t.listen(e,"animationcancel",this._handleAnimationEvent)])}}ngAfterViewInit(){this._stateChanges=this.datepicker.stateChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()}),this._calendar.focusActiveCell()}ngOnDestroy(){clearTimeout(this._animationFallback),this._eventCleanups?.forEach(e=>e()),this._stateChanges?.unsubscribe(),this._animationDone.complete()}_handleUserSelection(e){let t=this._model.selection,n=e.value,o=t instanceof ze;if(o&&this._rangeSelectionStrategy){let r=this._rangeSelectionStrategy.selectionFinished(n,t,e.event);this._model.updateSelection(r,this)}else n&&(o||!this._dateAdapter.sameDate(n,t))&&this._model.add(n);(!this._model||this._model.isComplete())&&!this._actionsPortal&&this.datepicker.close()}_handleUserDragDrop(e){this._model.updateSelection(e.value,this)}_startExitAnimation(){this._elementRef.nativeElement.classList.add("mat-datepicker-content-exit"),this._animationsDisabled?this._animationDone.next():(clearTimeout(this._animationFallback),this._animationFallback=setTimeout(()=>{this._isAnimating||this._animationDone.next()},200))}_handleAnimationEvent=e=>{let t=this._elementRef.nativeElement;e.target!==t||!e.animationName.startsWith("_mat-datepicker-content")||(clearTimeout(this._animationFallback),this._isAnimating=e.type==="animationstart",t.classList.toggle("mat-datepicker-content-animating",this._isAnimating),this._isAnimating||this._animationDone.next())};_getSelected(){return this._model.selection}_applyPendingSelection(){this._model!==this._globalModel&&this._globalModel.updateSelection(this._model.selection,this)}_assignActions(e,t){this._model=e?this._globalModel.clone():this._globalModel,this._actionsPortal=e,t&&this._changeDetectorRef.detectChanges()}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-datepicker-content"]],viewQuery:function(t,n){if(t&1&&me(Na,5),t&2){let o;R(o=P())&&(n._calendar=o.first)}},hostAttrs:[1,"mat-datepicker-content"],hostVars:6,hostBindings:function(t,n){t&2&&(Me(n.color?"mat-"+n.color:""),O("mat-datepicker-content-touch",n.datepicker.touchUi)("mat-datepicker-content-animations-enabled",!n._animationsDisabled))},inputs:{color:"color"},exportAs:["matDatepickerContent"],decls:5,vars:26,consts:[["cdkTrapFocus","","role","dialog",1,"mat-datepicker-content-container"],[3,"yearSelected","monthSelected","viewChanged","_userSelection","_userDragDrop","id","startAt","startView","minDate","maxDate","dateFilter","headerComponent","selected","dateClass","comparisonStart","comparisonEnd","startDateAccessibleName","endDateAccessibleName"],[3,"cdkPortalOutlet"],["type","button","matButton","elevated",1,"mat-datepicker-close-button",3,"focus","blur","click","color"]],template:function(t,n){t&1&&(l(0,"div",0)(1,"mat-calendar",1),x("yearSelected",function(r){return n.datepicker._selectYear(r)})("monthSelected",function(r){return n.datepicker._selectMonth(r)})("viewChanged",function(r){return n.datepicker._viewChanged(r)})("_userSelection",function(r){return n._handleUserSelection(r)})("_userDragDrop",function(r){return n._handleUserDragDrop(r)}),d(),Xe(2,dd,0,0,"ng-template",2),l(3,"button",3),x("focus",function(){return n._closeButtonFocused=!0})("blur",function(){return n._closeButtonFocused=!1})("click",function(){return n.datepicker.close()}),m(4),d()()),t&2&&(O("mat-datepicker-content-container-with-custom-header",n.datepicker.calendarHeaderComponent)("mat-datepicker-content-container-with-actions",n._actionsPortal),Y("aria-modal",!0)("aria-labelledby",n._dialogLabelId??void 0),c(),Me(n.datepicker.panelClass),y("id",n.datepicker.id)("startAt",n.datepicker.startAt)("startView",n.datepicker.startView)("minDate",n.datepicker._getMinDate())("maxDate",n.datepicker._getMaxDate())("dateFilter",n.datepicker._getDateFilter())("headerComponent",n.datepicker.calendarHeaderComponent)("selected",n._getSelected())("dateClass",n.datepicker.dateClass)("comparisonStart",n.comparisonStart)("comparisonEnd",n.comparisonEnd)("startDateAccessibleName",n.startDateAccessibleName)("endDateAccessibleName",n.endDateAccessibleName),c(),y("cdkPortalOutlet",n._actionsPortal),c(),O("cdk-visually-hidden",!n._closeButtonFocused),y("color",n.color||"primary"),c(),V(n._closeButtonText))},dependencies:[ra,Na,ga,Ea],styles:[`@keyframes _mat-datepicker-content-dropdown-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-dialog-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-datepicker-content-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-datepicker-content {
  display: block;
  background-color: var(--mat-datepicker-calendar-container-background-color, var(--mat-sys-surface-container-high));
  color: var(--mat-datepicker-calendar-container-text-color, var(--mat-sys-on-surface));
  box-shadow: var(--mat-datepicker-calendar-container-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-shape, var(--mat-sys-corner-large));
}
.mat-datepicker-content.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dropdown-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content .mat-calendar {
  width: 296px;
  height: 354px;
}
.mat-datepicker-content .mat-datepicker-content-container-with-custom-header .mat-calendar {
  height: auto;
}
.mat-datepicker-content .mat-datepicker-close-button {
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 8px;
}
.mat-datepicker-content-animating .mat-datepicker-content .mat-datepicker-close-button {
  display: none;
}

.mat-datepicker-content-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mat-datepicker-content-touch {
  display: block;
  max-height: 80vh;
  box-shadow: var(--mat-datepicker-calendar-container-touch-elevation-shadow, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12));
  border-radius: var(--mat-datepicker-calendar-container-touch-shape, var(--mat-sys-corner-extra-large));
  position: relative;
  overflow: visible;
}
.mat-datepicker-content-touch.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-dialog-enter 150ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-datepicker-content-touch .mat-datepicker-content-container {
  min-height: 312px;
  max-height: 788px;
  min-width: 250px;
  max-width: 750px;
}
.mat-datepicker-content-touch .mat-calendar {
  width: 100%;
  height: auto;
}

.mat-datepicker-content-exit.mat-datepicker-content-animations-enabled {
  animation: _mat-datepicker-content-exit 100ms linear;
}

@media all and (orientation: landscape) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 64vh;
    height: 80vh;
  }
}
@media all and (orientation: portrait) {
  .mat-datepicker-content-touch .mat-datepicker-content-container {
    width: 80vw;
    height: 100vw;
  }
  .mat-datepicker-content-touch .mat-datepicker-content-container-with-actions {
    height: 115vw;
  }
}
`],encapsulation:2,changeDetection:0})}return i})(),ns=(()=>{class i{_injector=s(Q);_viewContainerRef=s(qe);_dateAdapter=s(Ce,{optional:!0});_dir=s(xe,{optional:!0});_model=s(Pn);_animationsDisabled=le();_scrollStrategy=s(vd);_inputStateChanges=se.EMPTY;_document=s($);calendarHeaderComponent;get startAt(){return this._startAt||(this.datepickerInput?this.datepickerInput.getStartValue():null)}set startAt(e){this._startAt=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e))}_startAt=null;startView="month";get color(){return this._color||(this.datepickerInput?this.datepickerInput.getThemePalette():void 0)}set color(e){this._color=e}_color;touchUi=!1;get disabled(){return this._disabled===void 0&&this.datepickerInput?this.datepickerInput.disabled:!!this._disabled}set disabled(e){e!==this._disabled&&(this._disabled=e,this.stateChanges.next(void 0))}_disabled;xPosition="start";yPosition="below";restoreFocus=!0;yearSelected=new v;monthSelected=new v;viewChanged=new v(!0);dateClass;openedStream=new v;closedStream=new v;get panelClass(){return this._panelClass}set panelClass(e){this._panelClass=or(e)}_panelClass;get opened(){return this._opened}set opened(e){e?this.open():this.close()}_opened=!1;id=s(re).getId("mat-datepicker-");_getMinDate(){return this.datepickerInput&&this.datepickerInput.min}_getMaxDate(){return this.datepickerInput&&this.datepickerInput.max}_getDateFilter(){return this.datepickerInput&&this.datepickerInput.dateFilter}_overlayRef=null;_componentRef=null;_focusedElementBeforeOpen=null;_backdropHarnessClass=`${this.id}-backdrop`;_actionsPortal=null;datepickerInput;stateChanges=new E;_changeDetectorRef=s(J);constructor(){this._dateAdapter,this._model.selectionChanged.subscribe(()=>{this._changeDetectorRef.markForCheck()})}ngOnChanges(e){let t=e.xPosition||e.yPosition;if(t&&!t.firstChange&&this._overlayRef){let n=this._overlayRef.getConfig().positionStrategy;n instanceof Gt&&(this._setConnectedPositions(n),this.opened&&this._overlayRef.updatePosition())}this.stateChanges.next(void 0)}ngOnDestroy(){this._destroyOverlay(),this.close(),this._inputStateChanges.unsubscribe(),this.stateChanges.complete()}select(e){this._model.add(e)}_selectYear(e){this.yearSelected.emit(e)}_selectMonth(e){this.monthSelected.emit(e)}_viewChanged(e){this.viewChanged.emit(e)}registerInput(e){return this.datepickerInput,this._inputStateChanges.unsubscribe(),this.datepickerInput=e,this._inputStateChanges=e.stateChanges.subscribe(()=>this.stateChanges.next(void 0)),this._model}registerActions(e){this._actionsPortal,this._actionsPortal=e,this._componentRef?.instance._assignActions(e,!0)}removeActions(e){e===this._actionsPortal&&(this._actionsPortal=null,this._componentRef?.instance._assignActions(null,!0))}open(){this._opened||this.disabled||this._componentRef?.instance._isAnimating||(this.datepickerInput,this._focusedElementBeforeOpen=Bt(),this._openOverlay(),this._opened=!0,this.openedStream.emit())}close(){if(!this._opened||this._componentRef?.instance._isAnimating)return;let e=this.restoreFocus&&this._focusedElementBeforeOpen&&typeof this._focusedElementBeforeOpen.focus=="function",t=()=>{this._opened&&(this._opened=!1,this.closedStream.emit())};if(this._componentRef){let{instance:n,location:o}=this._componentRef;n._animationDone.pipe(nt(1)).subscribe(()=>{let r=this._document.activeElement;e&&(!r||r===this._document.activeElement||o.nativeElement.contains(r))&&this._focusedElementBeforeOpen.focus(),this._focusedElementBeforeOpen=null,this._destroyOverlay()}),n._startExitAnimation()}e?setTimeout(t):t()}_applyPendingSelection(){this._componentRef?.instance?._applyPendingSelection()}_forwardContentValues(e){e.datepicker=this,e.color=this.color,e._dialogLabelId=this.datepickerInput.getOverlayLabelId(),e._assignActions(this._actionsPortal,!1)}_openOverlay(){this._destroyOverlay();let e=this.touchUi,t=new mt(ds,this._viewContainerRef),n=this._overlayRef=kt(this._injector,new xt({positionStrategy:e?this._getDialogStrategy():this._getDropdownStrategy(),hasBackdrop:!0,backdropClass:[e?"cdk-overlay-dark-backdrop":"mat-overlay-transparent-backdrop",this._backdropHarnessClass],direction:this._dir||"ltr",scrollStrategy:e?gi(this._injector):this._scrollStrategy(),panelClass:`mat-datepicker-${e?"dialog":"popup"}`,disableAnimations:this._animationsDisabled}));this._getCloseStream(n).subscribe(o=>{o&&o.preventDefault(),this.close()}),n.keydownEvents().subscribe(o=>{let r=o.keyCode;(r===38||r===40||r===37||r===39||r===33||r===34)&&o.preventDefault()}),this._componentRef=n.attach(t),this._forwardContentValues(this._componentRef.instance),e||Fe(()=>{n.updatePosition()},{injector:this._injector})}_destroyOverlay(){this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=this._componentRef=null)}_getDialogStrategy(){return _i(this._injector).centerHorizontally().centerVertically()}_getDropdownStrategy(){let e=wt(this._injector,this.datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn(".mat-datepicker-content").withFlexibleDimensions(!1).withViewportMargin(8).withLockedPosition();return this._setConnectedPositions(e)}_setConnectedPositions(e){let t=this.xPosition==="end"?"end":"start",n=t==="start"?"end":"start",o=this.yPosition==="above"?"bottom":"top",r=o==="top"?"bottom":"top";return e.withPositions([{originX:t,originY:r,overlayX:t,overlayY:o},{originX:t,originY:o,overlayX:t,overlayY:r},{originX:n,originY:r,overlayX:n,overlayY:o},{originX:n,originY:o,overlayX:n,overlayY:r}])}_getCloseStream(e){let t=["ctrlKey","shiftKey","metaKey"];return Ye(e.backdropClick(),e.detachments(),e.keydownEvents().pipe(we(n=>n.keyCode===27&&!ue(n)||this.datepickerInput&&ue(n,"altKey")&&n.keyCode===38&&t.every(o=>!ue(n,o)))))}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,inputs:{calendarHeaderComponent:"calendarHeaderComponent",startAt:"startAt",startView:"startView",color:"color",touchUi:[2,"touchUi","touchUi",w],disabled:[2,"disabled","disabled",w],xPosition:"xPosition",yPosition:"yPosition",restoreFocus:[2,"restoreFocus","restoreFocus",w],dateClass:"dateClass",panelClass:"panelClass",opened:[2,"opened","opened",w]},outputs:{yearSelected:"yearSelected",monthSelected:"monthSelected",viewChanged:"viewChanged",openedStream:"opened",closedStream:"closed"},features:[ge]})}return i})(),Di=(()=>{class i extends ns{static \u0275fac=(()=>{let e;return function(n){return(e||(e=rn(i)))(n||i)}})();static \u0275cmp=S({type:i,selectors:[["mat-datepicker"]],exportAs:["matDatepicker"],features:[oe([as,{provide:ns,useExisting:i}]),We],decls:0,vars:0,template:function(t,n){},encapsulation:2,changeDetection:0})}return i})(),en=class{target;targetElement;value=null;constructor(a,e){this.target=a,this.targetElement=e,this.value=this.target.value}},yd=(()=>{class i{_elementRef=s(I);_dateAdapter=s(Ce,{optional:!0});_dateFormats=s(lt,{optional:!0});_isInitialized=!1;get value(){return this._model?this._getValueFromModel(this._model.selection):this._pendingValue}set value(e){this._assignValueProgrammatically(e,!0)}_model;get disabled(){return!!this._disabled||this._parentDisabled()}set disabled(e){let t=e,n=this._elementRef.nativeElement;this._disabled!==t&&(this._disabled=t,this.stateChanges.next(void 0)),t&&this._isInitialized&&n.blur&&n.blur()}_disabled;dateChange=new v;dateInput=new v;stateChanges=new E;_onTouched=()=>{};_validatorOnChange=()=>{};_cvaOnChange=()=>{};_valueChangesSubscription=se.EMPTY;_localeSubscription=se.EMPTY;_pendingValue=null;_parseValidator=()=>this._lastValueValid?null:{matDatepickerParse:{text:this._elementRef.nativeElement.value}};_filterValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value));return!t||this._matchesFilter(t)?null:{matDatepickerFilter:!0}};_minValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._getMinDate();return!n||!t||this._dateAdapter.compareDate(n,t)<=0?null:{matDatepickerMin:{min:n,actual:t}}};_maxValidator=e=>{let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e.value)),n=this._getMaxDate();return!n||!t||this._dateAdapter.compareDate(n,t)>=0?null:{matDatepickerMax:{max:n,actual:t}}};_getValidators(){return[this._parseValidator,this._minValidator,this._maxValidator,this._filterValidator]}_registerModel(e){this._model=e,this._valueChangesSubscription.unsubscribe(),this._pendingValue&&this._assignValue(this._pendingValue),this._valueChangesSubscription=this._model.selectionChanged.subscribe(t=>{if(this._shouldHandleChangeEvent(t)){let n=this._getValueFromModel(t.selection);this._lastValueValid=this._isValidValue(n),this._cvaOnChange(n),this._onTouched(),this._formatValue(n),this.dateInput.emit(new en(this,this._elementRef.nativeElement)),this.dateChange.emit(new en(this,this._elementRef.nativeElement))}})}_lastValueValid=!1;constructor(){this._localeSubscription=this._dateAdapter.localeChanges.subscribe(()=>{this._assignValueProgrammatically(this.value,!0)})}ngAfterViewInit(){this._isInitialized=!0}ngOnChanges(e){xd(e,this._dateAdapter)&&this.stateChanges.next(void 0)}ngOnDestroy(){this._valueChangesSubscription.unsubscribe(),this._localeSubscription.unsubscribe(),this.stateChanges.complete()}registerOnValidatorChange(e){this._validatorOnChange=e}validate(e){return this._validator?this._validator(e):null}writeValue(e){this._assignValueProgrammatically(e,e!==this.value)}registerOnChange(e){this._cvaOnChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_onKeydown(e){let t=["ctrlKey","shiftKey","metaKey"];ue(e,"altKey")&&e.keyCode===40&&t.every(o=>!ue(e,o))&&!this._elementRef.nativeElement.readOnly&&(this._openPopup(),e.preventDefault())}_onInput(e){let t=e.target.value,n=this._lastValueValid,o=this._dateAdapter.parse(t,this._dateFormats.parse.dateInput);this._lastValueValid=this._isValidValue(o),o=this._dateAdapter.getValidDateOrNull(o);let r=!this._dateAdapter.sameDate(o,this.value);!o||r?this._cvaOnChange(o):(t&&!this.value&&this._cvaOnChange(o),n!==this._lastValueValid&&this._validatorOnChange()),r&&(this._assignValue(o),this.dateInput.emit(new en(this,this._elementRef.nativeElement)))}_onChange(){this.dateChange.emit(new en(this,this._elementRef.nativeElement))}_onBlur(){this.value&&this._formatValue(this.value),this._onTouched()}_formatValue(e){this._elementRef.nativeElement.value=e!=null?this._dateAdapter.format(e,this._dateFormats.display.dateInput):""}_assignValue(e){this._model?(this._assignValueToModel(e),this._pendingValue=null):this._pendingValue=e}_isValidValue(e){return!e||this._dateAdapter.isValid(e)}_parentDisabled(){return!1}_assignValueProgrammatically(e,t){e=this._dateAdapter.deserialize(e),this._lastValueValid=this._isValidValue(e),e=this._dateAdapter.getValidDateOrNull(e),this._assignValue(e),t&&this._formatValue(e)}_matchesFilter(e){let t=this._getDateFilter();return!t||t(e)}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,inputs:{value:"value",disabled:[2,"disabled","disabled",w]},outputs:{dateChange:"dateChange",dateInput:"dateInput"},features:[ge]})}return i})();function xd(i,a){let e=Object.keys(i);for(let t of e){let{previousValue:n,currentValue:o}=i[t];if(a.isDateInstance(n)&&a.isDateInstance(o)){if(!a.sameDate(n,o))return!0}else return!0}return!1}var Cd={provide:Tt,useExisting:it(()=>an),multi:!0},wd={provide:qn,useExisting:it(()=>an),multi:!0},an=(()=>{class i extends yd{_formField=s(Dt,{optional:!0});_closedSubscription=se.EMPTY;_openedSubscription=se.EMPTY;set matDatepicker(e){e&&(this._datepicker=e,this._ariaOwns.set(e.opened?e.id:null),this._closedSubscription=e.closedStream.subscribe(()=>{this._onTouched(),this._ariaOwns.set(null)}),this._openedSubscription=e.openedStream.subscribe(()=>{this._ariaOwns.set(e.id)}),this._registerModel(e.registerInput(this)))}_datepicker;_ariaOwns=j(null);get min(){return this._min}set min(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._min)||(this._min=t,this._validatorOnChange())}_min=null;get max(){return this._max}set max(e){let t=this._dateAdapter.getValidDateOrNull(this._dateAdapter.deserialize(e));this._dateAdapter.sameDate(t,this._max)||(this._max=t,this._validatorOnChange())}_max=null;get dateFilter(){return this._dateFilter}set dateFilter(e){let t=this._matchesFilter(this.value);this._dateFilter=e,this._matchesFilter(this.value)!==t&&this._validatorOnChange()}_dateFilter;_validator=null;constructor(){super(),this._validator=At.compose(super._getValidators())}getConnectedOverlayOrigin(){return this._formField?this._formField.getConnectedOverlayOrigin():this._elementRef}getOverlayLabelId(){return this._formField?this._formField.getLabelId():this._elementRef.nativeElement.getAttribute("aria-labelledby")}getThemePalette(){return this._formField?this._formField.color:void 0}getStartValue(){return this.value}ngOnDestroy(){super.ngOnDestroy(),this._closedSubscription.unsubscribe(),this._openedSubscription.unsubscribe()}_openPopup(){this._datepicker&&this._datepicker.open()}_getValueFromModel(e){return e}_assignValueToModel(e){this._model&&this._model.updateSelection(e,this)}_getMinDate(){return this._min}_getMaxDate(){return this._max}_getDateFilter(){return this._dateFilter}_shouldHandleChangeEvent(e){return e.source!==this}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["input","matDatepicker",""]],hostAttrs:[1,"mat-datepicker-input"],hostVars:6,hostBindings:function(t,n){t&1&&x("input",function(r){return n._onInput(r)})("change",function(){return n._onChange()})("blur",function(){return n._onBlur()})("keydown",function(r){return n._onKeydown(r)}),t&2&&(de("disabled",n.disabled),Y("aria-haspopup",n._datepicker?"dialog":null)("aria-owns",n._ariaOwns())("min",n.min?n._dateAdapter.toIso8601(n.min):null)("max",n.max?n._dateAdapter.toIso8601(n.max):null)("data-mat-calendar",n._datepicker?n._datepicker.id:null))},inputs:{matDatepicker:"matDatepicker",min:"min",max:"max",dateFilter:[0,"matDatepickerFilter","dateFilter"]},exportAs:["matDatepickerInput"],features:[oe([Cd,wd,{provide:xi,useExisting:i}]),We]})}return i})(),kd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["","matDatepickerToggleIcon",""]]})}return i})(),Fn=(()=>{class i{_intl=s(nn);_changeDetectorRef=s(J);_stateChanges=se.EMPTY;datepicker;tabIndex=null;ariaLabel;get disabled(){return this._disabled===void 0&&this.datepicker?this.datepicker.disabled:!!this._disabled}set disabled(e){this._disabled=e}_disabled;disableRipple=!1;_customIcon;_button;constructor(){let e=s(new ot("tabindex"),{optional:!0}),t=Number(e);this.tabIndex=t||t===0?t:null}ngOnChanges(e){e.datepicker&&this._watchStateChanges()}ngOnDestroy(){this._stateChanges.unsubscribe()}ngAfterContentInit(){this._watchStateChanges()}_open(e){this.datepicker&&!this.disabled&&(this.datepicker.open(),e.stopPropagation())}_watchStateChanges(){let e=this.datepicker?this.datepicker.stateChanges:tt(),t=this.datepicker&&this.datepicker.datepickerInput?this.datepicker.datepickerInput.stateChanges:tt(),n=this.datepicker?Ye(this.datepicker.openedStream,this.datepicker.closedStream):tt();this._stateChanges.unsubscribe(),this._stateChanges=Ye(this._intl.changes,e,t,n).subscribe(()=>this._changeDetectorRef.markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-datepicker-toggle"]],contentQueries:function(t,n,o){if(t&1&&at(o,kd,5),t&2){let r;R(r=P())&&(n._customIcon=r.first)}},viewQuery:function(t,n){if(t&1&&me(cd,5),t&2){let o;R(o=P())&&(n._button=o.first)}},hostAttrs:[1,"mat-datepicker-toggle"],hostVars:8,hostBindings:function(t,n){t&1&&x("click",function(r){return n._open(r)}),t&2&&(Y("tabindex",null)("data-mat-calendar",n.datepicker?n.datepicker.id:null),O("mat-datepicker-toggle-active",n.datepicker&&n.datepicker.opened)("mat-accent",n.datepicker&&n.datepicker.color==="accent")("mat-warn",n.datepicker&&n.datepicker.color==="warn"))},inputs:{datepicker:[0,"for","datepicker"],tabIndex:"tabIndex",ariaLabel:[0,"aria-label","ariaLabel"],disabled:[2,"disabled","disabled",w],disableRipple:"disableRipple"},exportAs:["matDatepickerToggle"],features:[ge],ngContentSelectors:ud,decls:4,vars:7,consts:[["button",""],["matIconButton","","type","button",3,"tabIndex","disabled","disableRipple"],["viewBox","0 0 24 24","width","24px","height","24px","fill","currentColor","focusable","false","aria-hidden","true",1,"mat-datepicker-toggle-default-icon"],["d","M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"]],template:function(t,n){t&1&&(ce(md),l(0,"button",1,0),h(2,pd,2,0,":svg:svg",2),U(3),d()),t&2&&(y("tabIndex",n.disabled?-1:n.tabIndex)("disabled",n.disabled)("disableRipple",n.disableRipple),Y("aria-haspopup",n.datepicker?"dialog":null)("aria-label",n.ariaLabel||n._intl.openCalendarLabel)("aria-expanded",n.datepicker?n.datepicker.opened:null),c(2),f(n._customIcon?-1:2))},dependencies:[yi],styles:[`.mat-datepicker-toggle {
  pointer-events: auto;
  color: var(--mat-datepicker-toggle-icon-color, var(--mat-sys-on-surface-variant));
}
.mat-datepicker-toggle button {
  color: inherit;
}

.mat-datepicker-toggle-active {
  color: var(--mat-datepicker-toggle-active-state-icon-color, var(--mat-sys-primary));
}

@media (forced-colors: active) {
  .mat-datepicker-toggle-default-icon {
    color: CanvasText;
  }
}
`],encapsulation:2,changeDetection:0})}return i})();var Mi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({providers:[nn],imports:[Pr,En,la,di,ds,Fn,ls,ie,vt]})}return i})();var Dd=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["ng-component"]],hostAttrs:["cdk-text-field-style-loader",""],decls:0,vars:0,template:function(t,n){},styles:[`textarea.cdk-textarea-autosize {
  resize: none;
}

textarea.cdk-textarea-autosize-measuring {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: auto !important;
  overflow: hidden !important;
}

textarea.cdk-textarea-autosize-measuring-firefox {
  padding: 2px 0 !important;
  box-sizing: content-box !important;
  height: 0 !important;
}

@keyframes cdk-text-field-autofill-start { /*!*/ }
@keyframes cdk-text-field-autofill-end { /*!*/ }
.cdk-text-field-autofill-monitored:-webkit-autofill {
  animation: cdk-text-field-autofill-start 0s 1ms;
}

.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {
  animation: cdk-text-field-autofill-end 0s 1ms;
}
`],encapsulation:2,changeDetection:0})}return i})(),Md={passive:!0},ms=(()=>{class i{_platform=s(G);_ngZone=s(F);_renderer=s(Ee).createRenderer(null,null);_styleLoader=s(ne);_monitoredElements=new Map;constructor(){}monitor(e){if(!this._platform.isBrowser)return Xa;this._styleLoader.load(Dd);let t=Se(e),n=this._monitoredElements.get(t);if(n)return n.subject;let o=new E,r="cdk-text-field-autofilled",p=A=>{A.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(r)?(t.classList.add(r),this._ngZone.run(()=>o.next({target:A.target,isAutofilled:!0}))):A.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(r)&&(t.classList.remove(r),this._ngZone.run(()=>o.next({target:A.target,isAutofilled:!1})))},g=this._ngZone.runOutsideAngular(()=>(t.classList.add("cdk-text-field-autofill-monitored"),this._renderer.listen(t,"animationstart",p,Md)));return this._monitoredElements.set(t,{subject:o,unlisten:g}),o}stopMonitoring(e){let t=Se(e),n=this._monitoredElements.get(t);n&&(n.unlisten(),n.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var us=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({})}return i})();var et=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[Jn,Qt,ie]})}return i})();var Ed=["button","checkbox","file","hidden","image","radio","range","reset","submit"],Sd=new k("MAT_INPUT_CONFIG"),Ei=(()=>{class i{_elementRef=s(I);_platform=s(G);ngControl=s(hn,{optional:!0,self:!0});_autofillMonitor=s(ms);_ngZone=s(F);_formField=s(Dt,{optional:!0});_renderer=s(ve);_uid=s(re).getId("mat-input-");_previousNativeValue;_inputValueAccessor;_signalBasedValueAccessor;_previousPlaceholder=null;_errorStateTracker;_config=s(Sd,{optional:!0});_cleanupIosKeyup;_cleanupWebkitWheel;_isServer=!1;_isNativeSelect=!1;_isTextarea=!1;_isInFormField=!1;focused=!1;stateChanges=new E;controlType="mat-input";autofilled=!1;get disabled(){return this._disabled}set disabled(e){this._disabled=Qe(e),this.focused&&(this.focused=!1,this.stateChanges.next())}_disabled=!1;get id(){return this._id}set id(e){this._id=e||this._uid}_id;placeholder;name;get required(){return this._required??this.ngControl?.control?.hasValidator(At.required)??!1}set required(e){this._required=Qe(e)}_required;get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&ya().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}_type="text";get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}userAriaDescribedBy;get value(){return this._signalBasedValueAccessor?this._signalBasedValueAccessor.value():this._inputValueAccessor.value}set value(e){e!==this.value&&(this._signalBasedValueAccessor?this._signalBasedValueAccessor.value.set(e):this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=Qe(e)}_readonly=!1;disabledInteractive;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}_neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(e=>ya().has(e));constructor(){let e=s(fn,{optional:!0}),t=s(gn,{optional:!0}),n=s(wi),o=s(xi,{optional:!0,self:!0}),r=this._elementRef.nativeElement,p=r.nodeName.toLowerCase();o?ft(o.value)?this._signalBasedValueAccessor=o:this._inputValueAccessor=o:this._inputValueAccessor=r,this._previousNativeValue=this.value,this.id=this.id,this._platform.IOS&&this._ngZone.runOutsideAngular(()=>{this._cleanupIosKeyup=this._renderer.listen(r,"keyup",this._iOSKeyupListener)}),this._errorStateTracker=new Jt(n,this.ngControl,t,e,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=p==="select",this._isTextarea=p==="textarea",this._isInFormField=!!this._formField,this.disabledInteractive=this._config?.disabledInteractive||!1,this._isNativeSelect&&(this.controlType=r.multiple?"mat-native-select-multiple":"mat-native-select"),this._signalBasedValueAccessor&&ht(()=>{this._signalBasedValueAccessor.value(),this.stateChanges.next()})}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._cleanupIosKeyup?.(),this._cleanupWebkitWheel?.()}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){if(e!==this.focused){if(!this._isNativeSelect&&e&&this.disabled&&this.disabledInteractive){let t=this._elementRef.nativeElement;t.type==="number"?(t.type="text",t.setSelectionRange(0,0),t.type="number"):t.setSelectionRange(0,0)}this.focused=e,this.stateChanges.next()}}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){Ed.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused&&!this.disabled||!this.empty}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}_iOSKeyupListener=e=>{let t=e.target;!t.value&&t.selectionStart===0&&t.selectionEnd===0&&(t.setSelectionRange(1,1),t.setSelectionRange(0,0))};_getReadonlyAttribute(){return this._isNativeSelect?null:this.readonly||this.disabled&&this.disabledInteractive?"true":null}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:21,hostBindings:function(t,n){t&1&&x("focus",function(){return n._focusChanged(!0)})("blur",function(){return n._focusChanged(!1)})("input",function(){return n._onInput()}),t&2&&(de("id",n.id)("disabled",n.disabled&&!n.disabledInteractive)("required",n.required),Y("name",n.name||null)("readonly",n._getReadonlyAttribute())("aria-disabled",n.disabled&&n.disabledInteractive?"true":null)("aria-invalid",n.empty&&n.required?null:n.errorState)("aria-required",n.required)("id",n.id),O("mat-input-server",n._isServer)("mat-mdc-form-field-textarea-control",n._isInFormField&&n._isTextarea)("mat-mdc-form-field-input-control",n._isInFormField)("mat-mdc-input-disabled-interactive",n.disabledInteractive)("mdc-text-field__input",n._isInFormField)("mat-mdc-native-select-inline",n._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly",disabledInteractive:[2,"disabledInteractive","disabledInteractive",w]},exportAs:["matInput"],features:[oe([{provide:$t,useExisting:i}]),ge]})}return i})(),Si=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[et,et,us,ie]})}return i})();var Mt=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new E;constructor(a=!1,e,t=!0,n){this._multiple=a,this._emitChanges=t,this.compareWith=n,e&&e.length&&(a?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}deselect(...a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}setSelection(...a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(o=>this._getConcreteValue(o)));a.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var Ti=(()=>{class i{_animationsDisabled=le();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,n){t&2&&O("mat-pseudo-checkbox-indeterminate",n.state==="indeterminate")("mat-pseudo-checkbox-checked",n.state==="checked")("mat-pseudo-checkbox-disabled",n.disabled)("mat-pseudo-checkbox-minimal",n.appearance==="minimal")("mat-pseudo-checkbox-full",n.appearance==="full")("_mat-animation-noopable",n._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return i})();var Td=["text"],Od=[[["mat-icon"]],"*"],Ad=["mat-icon","*"];function Id(i,a){if(i&1&&H(0,"mat-pseudo-checkbox",1),i&2){let e=u();y("disabled",e.disabled)("state",e.selected?"checked":"unchecked")}}function Rd(i,a){if(i&1&&H(0,"mat-pseudo-checkbox",3),i&2){let e=u();y("disabled",e.disabled)}}function Pd(i,a){if(i&1&&(l(0,"span",4),m(1),d()),i&2){let e=u();c(),te("(",e.group.label,")")}}var za=new k("MAT_OPTION_PARENT_COMPONENT"),Ha=new k("MatOptgroup");var Ba=class{source;isUserInput;constructor(a,e=!1){this.source=a,this.isUserInput=e}},ut=(()=>{class i{_element=s(I);_changeDetectorRef=s(J);_parent=s(za,{optional:!0});group=s(Ha,{optional:!0});_signalDisableRipple=!1;_selected=!1;_active=!1;_mostRecentViewValue="";get multiple(){return this._parent&&this._parent.multiple}get selected(){return this._selected}value;id=s(re).getId("mat-option-");get disabled(){return this.group&&this.group.disabled||this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=j(!1);get disableRipple(){return this._signalDisableRipple?this._parent.disableRipple():!!this._parent?.disableRipple}get hideSingleSelectionIndicator(){return!!(this._parent&&this._parent.hideSingleSelectionIndicator)}onSelectionChange=new v;_text;_stateChanges=new E;constructor(){let e=s(ne);e.load(Ke),e.load(Ge),this._signalDisableRipple=!!this._parent&&ft(this._parent.disableRipple)}get active(){return this._active}get viewValue(){return(this._text?.nativeElement.textContent||"").trim()}select(e=!0){this._selected||(this._selected=!0,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}deselect(e=!0){this._selected&&(this._selected=!1,this._changeDetectorRef.markForCheck(),e&&this._emitSelectionChangeEvent())}focus(e,t){let n=this._getHostElement();typeof n.focus=="function"&&n.focus(t)}setActiveStyles(){this._active||(this._active=!0,this._changeDetectorRef.markForCheck())}setInactiveStyles(){this._active&&(this._active=!1,this._changeDetectorRef.markForCheck())}getLabel(){return this.viewValue}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!ue(e)&&(this._selectViaInteraction(),e.preventDefault())}_selectViaInteraction(){this.disabled||(this._selected=this.multiple?!this._selected:!0,this._changeDetectorRef.markForCheck(),this._emitSelectionChangeEvent(!0))}_getTabIndex(){return this.disabled?"-1":"0"}_getHostElement(){return this._element.nativeElement}ngAfterViewChecked(){if(this._selected){let e=this.viewValue;e!==this._mostRecentViewValue&&(this._mostRecentViewValue&&this._stateChanges.next(),this._mostRecentViewValue=e)}}ngOnDestroy(){this._stateChanges.complete()}_emitSelectionChangeEvent(e=!1){this.onSelectionChange.emit(new Ba(this,e))}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-option"]],viewQuery:function(t,n){if(t&1&&me(Td,7),t&2){let o;R(o=P())&&(n._text=o.first)}},hostAttrs:["role","option",1,"mat-mdc-option","mdc-list-item"],hostVars:11,hostBindings:function(t,n){t&1&&x("click",function(){return n._selectViaInteraction()})("keydown",function(r){return n._handleKeydown(r)}),t&2&&(de("id",n.id),Y("aria-selected",n.selected)("aria-disabled",n.disabled.toString()),O("mdc-list-item--selected",n.selected)("mat-mdc-option-multiple",n.multiple)("mat-mdc-option-active",n.active)("mdc-list-item--disabled",n.disabled))},inputs:{value:"value",id:"id",disabled:[2,"disabled","disabled",w]},outputs:{onSelectionChange:"onSelectionChange"},exportAs:["matOption"],ngContentSelectors:Ad,decls:8,vars:5,consts:[["text",""],["aria-hidden","true",1,"mat-mdc-option-pseudo-checkbox",3,"disabled","state"],[1,"mdc-list-item__primary-text"],["state","checked","aria-hidden","true","appearance","minimal",1,"mat-mdc-option-pseudo-checkbox",3,"disabled"],[1,"cdk-visually-hidden"],["aria-hidden","true","mat-ripple","",1,"mat-mdc-option-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled"]],template:function(t,n){t&1&&(ce(Od),h(0,Id,1,2,"mat-pseudo-checkbox",1),U(1),l(2,"span",2,0),U(4,1),d(),h(5,Rd,1,1,"mat-pseudo-checkbox",3),h(6,Pd,2,1,"span",4),H(7,"div",5)),t&2&&(f(n.multiple?0:-1),c(5),f(!n.multiple&&n.selected&&!n.hideSingleSelectionIndicator?5:-1),c(),f(n.group&&n.group._inert?6:-1),c(),y("matRippleTrigger",n._getHostElement())("matRippleDisabled",n.disabled||n.disableRipple))},dependencies:[Ti,Xt],styles:[`.mat-mdc-option {
  -webkit-user-select: none;
  user-select: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  min-height: 48px;
  padding: 0 16px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  color: var(--mat-option-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-option-label-text-font, var(--mat-sys-label-large-font));
  line-height: var(--mat-option-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-size: var(--mat-option-label-text-size, var(--mat-sys-body-large-size));
  letter-spacing: var(--mat-option-label-text-tracking, var(--mat-sys-label-large-tracking));
  font-weight: var(--mat-option-label-text-weight, var(--mat-sys-body-large-weight));
}
.mat-mdc-option:hover:not(.mdc-list-item--disabled) {
  background-color: var(--mat-option-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-option:focus.mdc-list-item, .mat-mdc-option.mat-mdc-option-active.mdc-list-item {
  background-color: var(--mat-option-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
  outline: 0;
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) {
  background-color: var(--mat-option-selected-state-layer-color, var(--mat-sys-secondary-container));
}
.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-active, .mat-mdc-option-multiple, :focus, :hover) .mdc-list-item__primary-text {
  color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-option-selected-state-label-text-color, var(--mat-sys-on-secondary-container));
}
.mat-mdc-option.mdc-list-item {
  align-items: center;
  background: transparent;
}
.mat-mdc-option.mdc-list-item--disabled {
  cursor: default;
  pointer-events: none;
}
.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox, .mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text, .mat-mdc-option.mdc-list-item--disabled > mat-icon {
  opacity: 0.38;
}
.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 32px;
}
[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple) {
  padding-left: 16px;
  padding-right: 32px;
}
.mat-mdc-option .mat-icon,
.mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-icon,
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full {
  margin-right: 0;
  margin-left: 16px;
}
.mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-left: 16px;
  flex-shrink: 0;
}
[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal {
  margin-right: 16px;
  margin-left: 0;
}
.mat-mdc-option .mat-mdc-option-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-option .mdc-list-item__primary-text {
  white-space: normal;
  font-size: inherit;
  font-weight: inherit;
  letter-spacing: inherit;
  line-height: inherit;
  font-family: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  margin-right: auto;
}
[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text {
  margin-right: 0;
  margin-left: auto;
}
@media (forced-colors: active) {
  .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  [dir=rtl] .mat-mdc-option.mdc-list-item--selected:not(:has(.mat-mdc-option-pseudo-checkbox))::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-option-multiple {
  --mat-list-list-item-selected-container-color: var(--mat-list-list-item-container-color, transparent);
}

.mat-mdc-option-active .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2,changeDetection:0})}return i})();function fs(i,a,e){if(e.length){let t=a.toArray(),n=e.toArray(),o=0;for(let r=0;r<i+1;r++)t[r].group&&t[r].group===n[o]&&o++;return o}return 0}function gs(i,a,e,t){return i<e?i:i+a>e+t?Math.max(0,i-t+a):e}var _s=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[ie]})}return i})();var ja=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[Zt,_s,ut,ie]})}return i})();var Fd=["trigger"],Vd=["panel"],Ld=[[["mat-select-trigger"]],"*"],Nd=["mat-select-trigger","*"];function Bd(i,a){if(i&1&&(l(0,"span",4),m(1),d()),i&2){let e=u();c(),V(e.placeholder)}}function zd(i,a){i&1&&U(0)}function Hd(i,a){if(i&1&&(l(0,"span",11),m(1),d()),i&2){let e=u(2);c(),V(e.triggerValue)}}function jd(i,a){if(i&1&&(l(0,"span",5),h(1,zd,1,0)(2,Hd,2,1,"span",11),d()),i&2){let e=u();c(),f(e.customTrigger?1:2)}}function Yd(i,a){if(i&1){let e=K();l(0,"div",12,1),x("keydown",function(n){_(e);let o=u();return b(o._handleKeydown(n))}),U(2,1),d()}if(i&2){let e=u();Me(e.panelClass),O("mat-select-panel-animations-enabled",!e._animationsDisabled)("mat-primary",(e._parentFormField==null?null:e._parentFormField.color)==="primary")("mat-accent",(e._parentFormField==null?null:e._parentFormField.color)==="accent")("mat-warn",(e._parentFormField==null?null:e._parentFormField.color)==="warn")("mat-undefined",!(e._parentFormField!=null&&e._parentFormField.color)),Y("id",e.id+"-panel")("aria-multiselectable",e.multiple)("aria-label",e.ariaLabel||null)("aria-labelledby",e._getPanelAriaLabelledby())}}var Wd=new k("mat-select-scroll-strategy",{providedIn:"root",factory:()=>{let i=s(Q);return()=>Je(i)}}),Ud=new k("MAT_SELECT_CONFIG"),Gd=new k("MatSelectTrigger"),Ya=class{source;value;constructor(a,e){this.source=a,this.value=e}},Oi=(()=>{class i{_viewportRuler=s(ct);_changeDetectorRef=s(J);_elementRef=s(I);_dir=s(xe,{optional:!0});_idGenerator=s(re);_renderer=s(ve);_parentFormField=s(Dt,{optional:!0});ngControl=s(hn,{self:!0,optional:!0});_liveAnnouncer=s(sa);_defaultOptions=s(Ud,{optional:!0});_animationsDisabled=le();_popoverLocation;_initialized=new E;_cleanupDetach;options;optionGroups;customTrigger;_positions=[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom",panelClass:"mat-mdc-select-panel-above"}];_scrollOptionIntoView(e){let t=this.options.toArray()[e];if(t){let n=this.panel.nativeElement,o=fs(e,this.options,this.optionGroups),r=t._getHostElement();e===0&&o===1?n.scrollTop=0:n.scrollTop=gs(r.offsetTop,r.offsetHeight,n.scrollTop,n.offsetHeight)}}_positioningSettled(){this._scrollOptionIntoView(this._keyManager.activeItemIndex||0)}_getChangeEvent(e){return new Ya(this,e)}_scrollStrategyFactory=s(Wd);_panelOpen=!1;_compareWith=(e,t)=>e===t;_uid=this._idGenerator.getId("mat-select-");_triggerAriaLabelledBy=null;_previousControl;_destroy=new E;_errorStateTracker;stateChanges=new E;disableAutomaticLabeling=!0;userAriaDescribedBy;_selectionModel;_keyManager;_preferredOverlayOrigin;_overlayWidth;_onChange=()=>{};_onTouched=()=>{};_valueId=this._idGenerator.getId("mat-select-value-");_scrollStrategy;_overlayPanelClass=this._defaultOptions?.overlayPanelClass||"";get focused(){return this._focused||this._panelOpen}_focused=!1;controlType="mat-select";trigger;panel;_overlayDir;panelClass;disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(e){this._disableRipple.set(e)}_disableRipple=j(!1);tabIndex=0;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncParentProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get placeholder(){return this._placeholder}set placeholder(e){this._placeholder=e,this.stateChanges.next()}_placeholder;get required(){return this._required??this.ngControl?.control?.hasValidator(At.required)??!1}set required(e){this._required=e,this.stateChanges.next()}_required;get multiple(){return this._multiple}set multiple(e){this._selectionModel,this._multiple=e}_multiple=!1;disableOptionCentering=this._defaultOptions?.disableOptionCentering??!1;get compareWith(){return this._compareWith}set compareWith(e){this._compareWith=e,this._selectionModel&&this._initializeSelection()}get value(){return this._value}set value(e){this._assignValue(e)&&this._onChange(e)}_value;ariaLabel="";ariaLabelledby;get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}typeaheadDebounceInterval;sortComparator;get id(){return this._id}set id(e){this._id=e||this._uid,this.stateChanges.next()}_id;get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}panelWidth=this._defaultOptions&&typeof this._defaultOptions.panelWidth<"u"?this._defaultOptions.panelWidth:"auto";canSelectNullableOptions=this._defaultOptions?.canSelectNullableOptions??!1;optionSelectionChanges=$a(()=>{let e=this.options;return e?e.changes.pipe(Re(e),Yn(()=>Ye(...e.map(t=>t.onSelectionChange)))):this._initialized.pipe(Yn(()=>this.optionSelectionChanges))});openedChange=new v;_openedStream=this.openedChange.pipe(we(e=>e),Ie(()=>{}));_closedStream=this.openedChange.pipe(we(e=>!e),Ie(()=>{}));selectionChange=new v;valueChange=new v;constructor(){let e=s(wi),t=s(fn,{optional:!0}),n=s(gn,{optional:!0}),o=s(new ot("tabindex"),{optional:!0}),r=s(Mn,{optional:!0});this.ngControl&&(this.ngControl.valueAccessor=this),this._defaultOptions?.typeaheadDebounceInterval!=null&&(this.typeaheadDebounceInterval=this._defaultOptions.typeaheadDebounceInterval),this._errorStateTracker=new Jt(e,this.ngControl,n,t,this.stateChanges),this._scrollStrategy=this._scrollStrategyFactory(),this.tabIndex=o==null?0:parseInt(o)||0,this._popoverLocation=r?.usePopover===!1?null:"inline",this.id=this.id}ngOnInit(){this._selectionModel=new Mt(this.multiple),this.stateChanges.next(),this._viewportRuler.change().pipe(ae(this._destroy)).subscribe(()=>{this.panelOpen&&(this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._changeDetectorRef.detectChanges())})}ngAfterContentInit(){this._initialized.next(),this._initialized.complete(),this._initKeyManager(),this._selectionModel.changed.pipe(ae(this._destroy)).subscribe(e=>{e.added.forEach(t=>t.select()),e.removed.forEach(t=>t.deselect())}),this.options.changes.pipe(Re(null),ae(this._destroy)).subscribe(()=>{this._resetOptions(),this._initializeSelection()})}ngDoCheck(){let e=this._getTriggerAriaLabelledby(),t=this.ngControl;if(e!==this._triggerAriaLabelledBy){let n=this._elementRef.nativeElement;this._triggerAriaLabelledBy=e,e?n.setAttribute("aria-labelledby",e):n.removeAttribute("aria-labelledby")}t&&(this._previousControl!==t.control&&(this._previousControl!==void 0&&t.disabled!==null&&t.disabled!==this.disabled&&(this.disabled=t.disabled),this._previousControl=t.control),this.updateErrorState())}ngOnChanges(e){(e.disabled||e.userAriaDescribedBy)&&this.stateChanges.next(),e.typeaheadDebounceInterval&&this._keyManager&&this._keyManager.withTypeAhead(this.typeaheadDebounceInterval),e.panelClass&&this.panelClass instanceof Set&&(this.panelClass=Array.from(this.panelClass))}ngOnDestroy(){this._cleanupDetach?.(),this._keyManager?.destroy(),this._destroy.next(),this._destroy.complete(),this.stateChanges.complete(),this._clearFromModal()}toggle(){this.panelOpen?this.close():this.open()}open(){this._canOpen()&&(this._parentFormField&&(this._preferredOverlayOrigin=this._parentFormField.getConnectedOverlayOrigin()),this._cleanupDetach?.(),this._overlayWidth=this._getOverlayWidth(this._preferredOverlayOrigin),this._applyModalPanelOwnership(),this._panelOpen=!0,this._overlayDir.positionChange.pipe(nt(1)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this._positioningSettled()}),this._overlayDir.attachOverlay(),this._keyManager.withHorizontalOrientation(null),this._highlightCorrectOption(),this._changeDetectorRef.markForCheck(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!0)))}_trackedModal=null;_applyModalPanelOwnership(){let e=this._elementRef.nativeElement.closest('body > .cdk-overlay-container [aria-modal="true"]');if(!e)return;let t=`${this.id}-panel`;this._trackedModal&&ri(this._trackedModal,"aria-owns",t),ua(e,"aria-owns",t),this._trackedModal=e}_clearFromModal(){if(!this._trackedModal)return;let e=`${this.id}-panel`;ri(this._trackedModal,"aria-owns",e),this._trackedModal=null}close(){this._panelOpen&&(this._panelOpen=!1,this._exitAndDetach(),this._keyManager.withHorizontalOrientation(this._isRtl()?"rtl":"ltr"),this._changeDetectorRef.markForCheck(),this._onTouched(),this.stateChanges.next(),Promise.resolve().then(()=>this.openedChange.emit(!1)))}_exitAndDetach(){if(this._animationsDisabled||!this.panel){this._detachOverlay();return}this._cleanupDetach?.(),this._cleanupDetach=()=>{t(),clearTimeout(n),this._cleanupDetach=void 0};let e=this.panel.nativeElement,t=this._renderer.listen(e,"animationend",o=>{o.animationName==="_mat-select-exit"&&(this._cleanupDetach?.(),this._detachOverlay())}),n=setTimeout(()=>{this._cleanupDetach?.(),this._detachOverlay()},200);e.classList.add("mat-select-panel-exit")}_detachOverlay(){this._overlayDir.detachOverlay(),this._changeDetectorRef.markForCheck()}writeValue(e){this._assignValue(e)}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck(),this.stateChanges.next()}get panelOpen(){return this._panelOpen}get selected(){return this.multiple?this._selectionModel?.selected||[]:this._selectionModel?.selected[0]}get triggerValue(){if(this.empty)return"";if(this._multiple){let e=this._selectionModel.selected.map(t=>t.viewValue);return this._isRtl()&&e.reverse(),e.join(", ")}return this._selectionModel.selected[0].viewValue}updateErrorState(){this._errorStateTracker.updateErrorState()}_isRtl(){return this._dir?this._dir.value==="rtl":!1}_handleKeydown(e){this.disabled||(this.panelOpen?this._handleOpenKeydown(e):this._handleClosedKeydown(e))}_handleClosedKeydown(e){let t=e.keyCode,n=t===40||t===38||t===37||t===39,o=t===13||t===32,r=this._keyManager;if(!r.isTyping()&&o&&!ue(e)||(this.multiple||e.altKey)&&n)e.preventDefault(),this.open();else if(!this.multiple){let p=this.selected;r.onKeydown(e);let g=this.selected;g&&p!==g&&this._liveAnnouncer.announce(g.viewValue,1e4)}}_handleOpenKeydown(e){let t=this._keyManager,n=e.keyCode,o=n===40||n===38,r=t.isTyping();if(o&&e.altKey)e.preventDefault(),this.close();else if(!r&&(n===13||n===32)&&t.activeItem&&!ue(e))e.preventDefault(),t.activeItem._selectViaInteraction();else if(!r&&this._multiple&&n===65&&e.ctrlKey){e.preventDefault();let p=this.options.some(g=>!g.disabled&&!g.selected);this.options.forEach(g=>{g.disabled||(p?g.select():g.deselect())})}else{let p=t.activeItemIndex;t.onKeydown(e),this._multiple&&o&&e.shiftKey&&t.activeItem&&t.activeItemIndex!==p&&t.activeItem._selectViaInteraction()}}_handleOverlayKeydown(e){e.keyCode===27&&!ue(e)&&(e.preventDefault(),this.close())}_onFocus(){this.disabled||(this._focused=!0,this.stateChanges.next())}_onBlur(){this._focused=!1,this._keyManager?.cancelTypeahead(),!this.disabled&&!this.panelOpen&&(this._onTouched(),this._changeDetectorRef.markForCheck(),this.stateChanges.next())}get empty(){return!this._selectionModel||this._selectionModel.isEmpty()}_initializeSelection(){Promise.resolve().then(()=>{this.ngControl&&(this._value=this.ngControl.value),this._setSelectionByValue(this._value),this.stateChanges.next()})}_setSelectionByValue(e){if(this.options.forEach(t=>t.setInactiveStyles()),this._selectionModel.clear(),this.multiple&&e)Array.isArray(e),e.forEach(t=>this._selectOptionByValue(t)),this._sortValues();else{let t=this._selectOptionByValue(e);t?this._keyManager.updateActiveItem(t):this.panelOpen||this._keyManager.updateActiveItem(-1)}this._changeDetectorRef.markForCheck()}_selectOptionByValue(e){let t=this.options.find(n=>{if(this._selectionModel.isSelected(n))return!1;try{return(n.value!=null||this.canSelectNullableOptions)&&this._compareWith(n.value,e)}catch{return!1}});return t&&this._selectionModel.select(t),t}_assignValue(e){return e!==this._value||this._multiple&&Array.isArray(e)?(this.options&&this._setSelectionByValue(e),this._value=e,!0):!1}_skipPredicate=e=>this.panelOpen?!1:e.disabled;_getOverlayWidth(e){return this.panelWidth==="auto"?(e instanceof Kt?e.elementRef:e||this._elementRef).nativeElement.getBoundingClientRect().width:this.panelWidth===null?"":this.panelWidth}_syncParentProperties(){if(this.options)for(let e of this.options)e._changeDetectorRef.markForCheck()}_initKeyManager(){this._keyManager=new wn(this.options).withTypeAhead(this.typeaheadDebounceInterval).withVerticalOrientation().withHorizontalOrientation(this._isRtl()?"rtl":"ltr").withHomeAndEnd().withPageUpDown().withAllowedModifierKeys(["shiftKey"]).skipPredicate(this._skipPredicate),this._keyManager.tabOut.subscribe(()=>{this.panelOpen&&(!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction(),this.focus(),this.close())}),this._keyManager.change.subscribe(()=>{this._panelOpen&&this.panel?this._scrollOptionIntoView(this._keyManager.activeItemIndex||0):!this._panelOpen&&!this.multiple&&this._keyManager.activeItem&&this._keyManager.activeItem._selectViaInteraction()})}_resetOptions(){let e=Ye(this.options.changes,this._destroy);this.optionSelectionChanges.pipe(ae(e)).subscribe(t=>{this._onSelect(t.source,t.isUserInput),t.isUserInput&&!this.multiple&&this._panelOpen&&(this.close(),this.focus())}),Ye(...this.options.map(t=>t._stateChanges)).pipe(ae(e)).subscribe(()=>{this._changeDetectorRef.detectChanges(),this.stateChanges.next()})}_onSelect(e,t){let n=this._selectionModel.isSelected(e);!this.canSelectNullableOptions&&e.value==null&&!this._multiple?(e.deselect(),this._selectionModel.clear(),this.value!=null&&this._propagateChanges(e.value)):(n!==e.selected&&(e.selected?this._selectionModel.select(e):this._selectionModel.deselect(e)),t&&this._keyManager.setActiveItem(e),this.multiple&&(this._sortValues(),t&&this.focus())),n!==this._selectionModel.isSelected(e)&&this._propagateChanges(),this.stateChanges.next()}_sortValues(){if(this.multiple){let e=this.options.toArray();this._selectionModel.sort((t,n)=>this.sortComparator?this.sortComparator(t,n,e):e.indexOf(t)-e.indexOf(n)),this.stateChanges.next()}}_propagateChanges(e){let t;this.multiple?t=this.selected.map(n=>n.value):t=this.selected?this.selected.value:e,this._value=t,this.valueChange.emit(t),this._onChange(t),this.selectionChange.emit(this._getChangeEvent(t)),this._changeDetectorRef.markForCheck()}_highlightCorrectOption(){if(this._keyManager)if(this.empty){let e=-1;for(let t=0;t<this.options.length;t++)if(!this.options.get(t).disabled){e=t;break}this._keyManager.setActiveItem(e)}else this._keyManager.setActiveItem(this._selectionModel.selected[0])}_canOpen(){return!this._panelOpen&&!this.disabled&&this.options?.length>0&&!!this._overlayDir}focus(e){this._elementRef.nativeElement.focus(e)}_getPanelAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||null,t=e?e+" ":"";return this.ariaLabelledby?t+this.ariaLabelledby:e}_getAriaActiveDescendant(){return this.panelOpen&&this._keyManager&&this._keyManager.activeItem?this._keyManager.activeItem.id:null}_getTriggerAriaLabelledby(){if(this.ariaLabel)return null;let e=this._parentFormField?.getLabelId()||"";return this.ariaLabelledby&&(e+=" "+this.ariaLabelledby),e||(e=this._valueId),e}get describedByIds(){return this._elementRef.nativeElement.getAttribute("aria-describedby")?.split(" ")||[]}setDescribedByIds(e){let t=this._elementRef.nativeElement;e.length?t.setAttribute("aria-describedby",e.join(" ")):t.removeAttribute("aria-describedby")}onContainerClick(e){let t=ye(e);t&&(t.tagName==="MAT-OPTION"||t.classList.contains("cdk-overlay-backdrop")||t.closest(".mat-mdc-select-panel"))||(this.focus(),this.open())}get shouldLabelFloat(){return this.panelOpen||!this.empty||this.focused&&!!this.placeholder}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-select"]],contentQueries:function(t,n,o){if(t&1&&at(o,Gd,5)(o,ut,5)(o,Ha,5),t&2){let r;R(r=P())&&(n.customTrigger=r.first),R(r=P())&&(n.options=r),R(r=P())&&(n.optionGroups=r)}},viewQuery:function(t,n){if(t&1&&me(Fd,5)(Vd,5)(bi,5),t&2){let o;R(o=P())&&(n.trigger=o.first),R(o=P())&&(n.panel=o.first),R(o=P())&&(n._overlayDir=o.first)}},hostAttrs:["role","combobox","aria-haspopup","listbox",1,"mat-mdc-select"],hostVars:21,hostBindings:function(t,n){t&1&&x("keydown",function(r){return n._handleKeydown(r)})("focus",function(){return n._onFocus()})("blur",function(){return n._onBlur()}),t&2&&(Y("id",n.id)("tabindex",n.disabled?-1:n.tabIndex)("aria-controls",n.panelOpen?n.id+"-panel":null)("aria-expanded",n.panelOpen)("aria-label",n.ariaLabel||null)("aria-required",n.required.toString())("aria-disabled",n.disabled.toString())("aria-invalid",n.errorState)("aria-activedescendant",n._getAriaActiveDescendant()),O("mat-mdc-select-disabled",n.disabled)("mat-mdc-select-invalid",n.errorState)("mat-mdc-select-required",n.required)("mat-mdc-select-empty",n.empty)("mat-mdc-select-multiple",n.multiple)("mat-select-open",n.panelOpen))},inputs:{userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],panelClass:"panelClass",disabled:[2,"disabled","disabled",w],disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:gt(e)],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",w],placeholder:"placeholder",required:[2,"required","required",w],multiple:[2,"multiple","multiple",w],disableOptionCentering:[2,"disableOptionCentering","disableOptionCentering",w],compareWith:"compareWith",value:"value",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],errorStateMatcher:"errorStateMatcher",typeaheadDebounceInterval:[2,"typeaheadDebounceInterval","typeaheadDebounceInterval",gt],sortComparator:"sortComparator",id:"id",panelWidth:"panelWidth",canSelectNullableOptions:[2,"canSelectNullableOptions","canSelectNullableOptions",w]},outputs:{openedChange:"openedChange",_openedStream:"opened",_closedStream:"closed",selectionChange:"selectionChange",valueChange:"valueChange"},exportAs:["matSelect"],features:[oe([{provide:$t,useExisting:i},{provide:za,useExisting:i}]),ge],ngContentSelectors:Nd,decls:11,vars:10,consts:[["fallbackOverlayOrigin","cdkOverlayOrigin","trigger",""],["panel",""],["cdk-overlay-origin","",1,"mat-mdc-select-trigger",3,"click"],[1,"mat-mdc-select-value"],[1,"mat-mdc-select-placeholder","mat-mdc-select-min-line"],[1,"mat-mdc-select-value-text"],[1,"mat-mdc-select-arrow-wrapper"],[1,"mat-mdc-select-arrow"],["viewBox","0 0 24 24","width","24px","height","24px","focusable","false","aria-hidden","true"],["d","M7 10l5 5 5-5z"],["cdk-connected-overlay","","cdkConnectedOverlayHasBackdrop","","cdkConnectedOverlayBackdropClass","cdk-overlay-transparent-backdrop",3,"detach","backdropClick","overlayKeydown","cdkConnectedOverlayDisableClose","cdkConnectedOverlayPanelClass","cdkConnectedOverlayScrollStrategy","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayWidth","cdkConnectedOverlayFlexibleDimensions","cdkConnectedOverlayUsePopover"],[1,"mat-mdc-select-min-line"],["role","listbox","tabindex","-1",1,"mat-mdc-select-panel","mdc-menu-surface","mdc-menu-surface--open",3,"keydown"]],template:function(t,n){if(t&1&&(ce(Ld),l(0,"div",2,0),x("click",function(){return n.open()}),l(3,"div",3),h(4,Bd,2,1,"span",4)(5,jd,3,1,"span",5),d(),l(6,"div",6)(7,"div",7),Pe(),l(8,"svg",8),H(9,"path",9),d()()()(),Xe(10,Yd,3,16,"ng-template",10),x("detach",function(){return n.close()})("backdropClick",function(){return n.close()})("overlayKeydown",function(r){return n._handleOverlayKeydown(r)})),t&2){let o=De(1);c(3),Y("id",n._valueId),c(),f(n.empty?4:5),c(6),y("cdkConnectedOverlayDisableClose",!0)("cdkConnectedOverlayPanelClass",n._overlayPanelClass)("cdkConnectedOverlayScrollStrategy",n._scrollStrategy)("cdkConnectedOverlayOrigin",n._preferredOverlayOrigin||o)("cdkConnectedOverlayPositions",n._positions)("cdkConnectedOverlayWidth",n._overlayWidth)("cdkConnectedOverlayFlexibleDimensions",!0)("cdkConnectedOverlayUsePopover",n._popoverLocation)}},dependencies:[Kt,bi],styles:[`@keyframes _mat-select-enter {
  from {
    opacity: 0;
    transform: scaleY(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-select-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-select {
  display: inline-block;
  width: 100%;
  outline: none;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  color: var(--mat-select-enabled-trigger-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-select-trigger-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-select-trigger-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-select-trigger-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-select-trigger-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-select-trigger-text-tracking, var(--mat-sys-body-large-tracking));
}

div.mat-mdc-select-panel {
  box-shadow: var(--mat-select-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}

.mat-mdc-select-disabled {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-select-disabled .mat-mdc-select-placeholder {
  color: var(--mat-select-disabled-trigger-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-mdc-select-trigger {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  box-sizing: border-box;
  width: 100%;
}
.mat-mdc-select-disabled .mat-mdc-select-trigger {
  -webkit-user-select: none;
  user-select: none;
  cursor: default;
}

.mat-mdc-select-value {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.mat-mdc-select-value-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mat-mdc-select-arrow-wrapper {
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
}
.mat-form-field-appearance-fill .mdc-text-field--no-label .mat-mdc-select-arrow-wrapper {
  transform: none;
}

.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-invalid .mat-mdc-select-arrow,
.mat-form-field-invalid:not(.mat-form-field-disabled) .mat-mdc-form-field-infix::after {
  color: var(--mat-select-invalid-arrow-color, var(--mat-sys-error));
}

.mat-mdc-select-arrow {
  width: 10px;
  height: 5px;
  position: relative;
  color: var(--mat-select-enabled-arrow-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field.mat-focused .mat-mdc-select-arrow {
  color: var(--mat-select-focused-arrow-color, var(--mat-sys-primary));
}
.mat-mdc-form-field .mat-mdc-select.mat-mdc-select-disabled .mat-mdc-select-arrow {
  color: var(--mat-select-disabled-arrow-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-select-open .mat-mdc-select-arrow {
  transform: rotate(180deg);
}
.mat-form-field-animations-enabled .mat-mdc-select-arrow {
  transition: transform 80ms linear;
}
.mat-mdc-select-arrow svg {
  fill: currentColor;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media (forced-colors: active) {
  .mat-mdc-select-arrow svg {
    fill: CanvasText;
  }
  .mat-mdc-select-disabled .mat-mdc-select-arrow svg {
    fill: GrayText;
  }
}

div.mat-mdc-select-panel {
  width: 100%;
  max-height: 275px;
  outline: 0;
  overflow: auto;
  padding: 8px 0;
  box-sizing: border-box;
  transform-origin: top center;
  border-radius: 0 0 4px 4px;
  position: relative;
  background-color: var(--mat-select-panel-background-color, var(--mat-sys-surface-container));
}
.mat-mdc-select-panel-above div.mat-mdc-select-panel {
  border-radius: 4px 4px 0 0;
  transform-origin: bottom center;
}
@media (forced-colors: active) {
  div.mat-mdc-select-panel {
    outline: solid 1px;
  }
}

.mat-select-panel-animations-enabled {
  animation: _mat-select-enter 120ms cubic-bezier(0, 0, 0.2, 1);
}
.mat-select-panel-animations-enabled.mat-select-panel-exit {
  animation: _mat-select-exit 100ms linear;
}

.mat-mdc-select-placeholder {
  transition: color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1);
  color: var(--mat-select-placeholder-text-color, var(--mat-sys-on-surface-variant));
}
.mat-mdc-form-field:not(.mat-form-field-animations-enabled) .mat-mdc-select-placeholder, ._mat-animation-noopable .mat-mdc-select-placeholder {
  transition: none;
}
.mat-form-field-hide-placeholder .mat-mdc-select-placeholder {
  color: transparent;
  -webkit-text-fill-color: transparent;
  transition: none;
  display: block;
}

.mat-mdc-form-field-type-mat-select:not(.mat-form-field-disabled) .mat-mdc-text-field-wrapper {
  cursor: pointer;
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mat-mdc-floating-label {
  max-width: calc(100% - 18px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-fill .mdc-floating-label--float-above {
  max-width: calc(100% / 0.75 - 24px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-notched-outline__notch {
  max-width: calc(100% - 60px);
}
.mat-mdc-form-field-type-mat-select.mat-form-field-appearance-outline .mdc-text-field--label-floating .mdc-notched-outline__notch {
  max-width: calc(100% - 24px);
}

.mat-mdc-select-min-line:empty::before {
  content: " ";
  white-space: pre;
  width: 1px;
  display: inline-block;
  visibility: hidden;
}

.mat-form-field-appearance-fill .mat-mdc-select-arrow-wrapper {
  transform: var(--mat-select-arrow-transform, translateY(-8px));
}
`],encapsulation:2,changeDetection:0})}return i})();var Ai=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[En,ja,ie,vt,et,ja]})}return i})();var Kd=["button"],qd=["*"];function Xd(i,a){if(i&1&&(l(0,"div",2),H(1,"mat-pseudo-checkbox",6),d()),i&2){let e=u();c(),y("disabled",e.disabled)}}var vs=new k("MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS",{providedIn:"root",factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})}),ys=new k("MatButtonToggleGroup"),Zd={provide:Tt,useExisting:it(()=>Vn),multi:!0},Ii=class{source;value;constructor(a,e){this.source=a,this.value=e}},Vn=(()=>{class i{_changeDetector=s(J);_dir=s(xe,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=s(re).getId("mat-button-toggle-group-");vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new v;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value==="rtl"?"rtl":"ltr"}change=new v;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=s(vs,{optional:!0});this.appearance=e&&e.appearance?e.appearance:"standard",this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new Mt(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||ue(e))return;let n=e.target.id,o=this._buttonToggles.toArray().findIndex(p=>p.buttonId===n),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(o)||null;break;case 38:r=this._getNextButton(o,-1);break;case 37:r=this._getNextButton(o,this.dir==="ltr"?-1:1);break;case 40:r=this._getNextButton(o,1);break;case 39:r=this._getNextButton(o,this.dir==="ltr"?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new Ii(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>"u"?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let o=1;o<=n.length;o++){let r=(e+t*o+n.length)%n.length,p=n.get(r);if(p&&!p.disabled)return p}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(Array.isArray(e),this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static \u0275fac=function(t){return new(t||i)};static \u0275dir=N({type:i,selectors:[["mat-button-toggle-group"]],contentQueries:function(t,n,o){if(t&1&&at(o,on,5),t&2){let r;R(r=P())&&(n._buttonToggles=r)}},hostAttrs:[1,"mat-button-toggle-group"],hostVars:6,hostBindings:function(t,n){t&1&&x("keydown",function(r){return n._keydown(r)}),t&2&&(Y("role",n.multiple?"group":"radiogroup")("aria-disabled",n.disabled),O("mat-button-toggle-vertical",n.vertical)("mat-button-toggle-group-appearance-standard",n.appearance==="standard"))},inputs:{appearance:"appearance",name:"name",vertical:[2,"vertical","vertical",w],value:"value",multiple:[2,"multiple","multiple",w],disabled:[2,"disabled","disabled",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w],hideSingleSelectionIndicator:[2,"hideSingleSelectionIndicator","hideSingleSelectionIndicator",w],hideMultipleSelectionIndicator:[2,"hideMultipleSelectionIndicator","hideMultipleSelectionIndicator",w]},outputs:{valueChange:"valueChange",change:"change"},exportAs:["matButtonToggleGroup"],features:[oe([Zd,{provide:ys,useExisting:i}])]})}return i})(),on=(()=>{class i{_changeDetectorRef=s(J);_elementRef=s(I);_focusMonitor=s(Ue);_idGenerator=s(re);_animationDisabled=le();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new v;constructor(){s(ne).load(Ke);let e=s(ys,{optional:!0}),t=s(new ot("tabindex"),{optional:!0})||"",n=s(vs,{optional:!0});this._tabIndex=j(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:"standard",this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId("mat-button-toggle-"),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add("mat-button-toggle-animations-enabled"),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new Ii(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-button-toggle"]],viewQuery:function(t,n){if(t&1&&me(Kd,5),t&2){let o;R(o=P())&&(n._buttonElement=o.first)}},hostAttrs:["role","presentation",1,"mat-button-toggle"],hostVars:14,hostBindings:function(t,n){t&1&&x("focus",function(){return n.focus()}),t&2&&(Y("aria-label",null)("aria-labelledby",null)("id",n.id)("name",null),O("mat-button-toggle-standalone",!n.buttonToggleGroup)("mat-button-toggle-checked",n.checked)("mat-button-toggle-disabled",n.disabled)("mat-button-toggle-disabled-interactive",n.disabledInteractive)("mat-button-toggle-appearance-standard",n.appearance==="standard"))},inputs:{ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],id:"id",name:"name",value:"value",tabIndex:"tabIndex",disableRipple:[2,"disableRipple","disableRipple",w],appearance:"appearance",checked:[2,"checked","checked",w],disabled:[2,"disabled","disabled",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w]},outputs:{change:"change"},exportAs:["matButtonToggle"],ngContentSelectors:qd,decls:7,vars:13,consts:[["button",""],["type","button",1,"mat-button-toggle-button","mat-focus-indicator",3,"click","id","disabled"],[1,"mat-button-toggle-checkbox-wrapper"],[1,"mat-button-toggle-label-content"],[1,"mat-button-toggle-focus-overlay"],["matRipple","",1,"mat-button-toggle-ripple",3,"matRippleTrigger","matRippleDisabled"],["state","checked","aria-hidden","true","appearance","minimal",3,"disabled"]],template:function(t,n){if(t&1&&(ce(),l(0,"button",1,0),x("click",function(){return n._onButtonClick()}),h(2,Xd,2,1,"div",2),l(3,"span",3),U(4),d()(),H(5,"span",4)(6,"span",5)),t&2){let o=De(1);y("id",n.buttonId)("disabled",n.disabled&&!n.disabledInteractive||null),Y("role",n.isSingleSelector()?"radio":"button")("tabindex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("aria-pressed",n.isSingleSelector()?null:n.checked)("aria-checked",n.isSingleSelector()?n.checked:null)("name",n._getButtonName())("aria-label",n.ariaLabel)("aria-labelledby",n.ariaLabelledby)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),c(2),f(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),c(4),y("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)}},dependencies:[Xt,Ti],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--mat-button-toggle-legacy-text-color);
  font-family: var(--mat-button-toggle-legacy-label-text-font);
  font-size: var(--mat-button-toggle-legacy-label-text-size);
  line-height: var(--mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--mat-button-toggle-legacy-label-text-tracking);
  --mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--mat-button-toggle-legacy-disabled-state-background-color);
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--mat-button-toggle-text-color, var(--mat-sys-on-surface));
  background-color: var(--mat-button-toggle-background-color, transparent);
  font-family: var(--mat-button-toggle-label-text-font, var(--mat-sys-label-large-font));
  font-size: var(--mat-button-toggle-label-text-size, var(--mat-sys-label-large-size));
  line-height: var(--mat-button-toggle-label-text-line-height, var(--mat-sys-label-large-line-height));
  font-weight: var(--mat-button-toggle-label-text-weight, var(--mat-sys-label-large-weight));
  letter-spacing: var(--mat-button-toggle-label-text-tracking, var(--mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--mat-button-toggle-divider-color, var(--mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--mat-button-toggle-selected-state-text-color, var(--mat-sys-on-secondary-container));
  background-color: var(--mat-button-toggle-selected-state-background-color, var(--mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
  background-color: var(--mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--mat-button-toggle-state-layer-color, var(--mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--mat-button-toggle-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --mat-focus-indicator-border-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
  border-top-left-radius: var(--mat-button-toggle-shape, var(--mat-sys-corner-extra-large));
}
`],encapsulation:2,changeDetection:0})}return i})(),Ri=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[Zt,on,ie]})}return i})();var $d=["mat-internal-form-field",""],Qd=["*"],Cs=(()=>{class i{labelPosition="after";static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["div","mat-internal-form-field",""]],hostAttrs:[1,"mdc-form-field","mat-internal-form-field"],hostVars:2,hostBindings:function(t,n){t&2&&O("mdc-form-field--align-end",n.labelPosition==="before")},inputs:{labelPosition:"labelPosition"},attrs:$d,ngContentSelectors:Qd,decls:1,vars:0,template:function(t,n){t&1&&(ce(),U(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2,changeDetection:0})}return i})();var Jd=["switch"],ec=["*"];function tc(i,a){i&1&&(l(0,"span",11),Pe(),l(1,"svg",13),H(2,"path",14),d(),l(3,"svg",15),H(4,"path",16),d()())}var nc=new k("mat-slide-toggle-default-options",{providedIn:"root",factory:()=>({disableToggleValue:!1,hideIcon:!1,disabledInteractive:!1})}),Pi=class{source;checked;constructor(a,e){this.source=a,this.checked=e}},Ln=(()=>{class i{_elementRef=s(I);_focusMonitor=s(Ue);_changeDetectorRef=s(J);defaults=s(nc);_onChange=e=>{};_onTouched=()=>{};_validatorOnChange=()=>{};_uniqueId;_checked=!1;_createChangeEvent(e){return new Pi(this,e)}_labelId;get buttonId(){return`${this.id||this._uniqueId}-button`}_switchElement;focus(){this._switchElement.nativeElement.focus()}_noopAnimations=le();_focused=!1;name=null;id;labelPosition="after";ariaLabel=null;ariaLabelledby=null;ariaDescribedby;required=!1;color;disabled=!1;disableRipple=!1;tabIndex=0;get checked(){return this._checked}set checked(e){this._checked=e,this._changeDetectorRef.markForCheck()}hideIcon;disabledInteractive;change=new v;toggleChange=new v;get inputId(){return`${this.id||this._uniqueId}-input`}constructor(){s(ne).load(Ke);let e=s(new ot("tabindex"),{optional:!0}),t=this.defaults;this.tabIndex=e==null?0:parseInt(e)||0,this.color=t.color||"accent",this.id=this._uniqueId=s(re).getId("mat-mdc-slide-toggle-"),this.hideIcon=t.hideIcon??!1,this.disabledInteractive=t.disabledInteractive??!1,this._labelId=this._uniqueId+"-label"}ngAfterContentInit(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{e==="keyboard"||e==="program"?(this._focused=!0,this._changeDetectorRef.markForCheck()):e||Promise.resolve().then(()=>{this._focused=!1,this._onTouched(),this._changeDetectorRef.markForCheck()})})}ngOnChanges(e){e.required&&this._validatorOnChange()}ngOnDestroy(){this._focusMonitor.stopMonitoring(this._elementRef)}writeValue(e){this.checked=!!e}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorOnChange=e}setDisabledState(e){this.disabled=e,this._changeDetectorRef.markForCheck()}toggle(){this.checked=!this.checked,this._onChange(this.checked)}_emitChangeEvent(){this._onChange(this.checked),this.change.emit(this._createChangeEvent(this.checked))}_handleClick(){this.disabled||(this.toggleChange.emit(),this.defaults.disableToggleValue||(this.checked=!this.checked,this._onChange(this.checked),this.change.emit(new Pi(this,this.checked))))}_getAriaLabelledBy(){return this.ariaLabelledby?this.ariaLabelledby:this.ariaLabel?null:this._labelId}static \u0275fac=function(t){return new(t||i)};static \u0275cmp=S({type:i,selectors:[["mat-slide-toggle"]],viewQuery:function(t,n){if(t&1&&me(Jd,5),t&2){let o;R(o=P())&&(n._switchElement=o.first)}},hostAttrs:[1,"mat-mdc-slide-toggle"],hostVars:13,hostBindings:function(t,n){t&2&&(de("id",n.id),Y("tabindex",null)("aria-label",null)("name",null)("aria-labelledby",null),Me(n.color?"mat-"+n.color:""),O("mat-mdc-slide-toggle-focused",n._focused)("mat-mdc-slide-toggle-checked",n.checked)("_mat-animation-noopable",n._noopAnimations))},inputs:{name:"name",id:"id",labelPosition:"labelPosition",ariaLabel:[0,"aria-label","ariaLabel"],ariaLabelledby:[0,"aria-labelledby","ariaLabelledby"],ariaDescribedby:[0,"aria-describedby","ariaDescribedby"],required:[2,"required","required",w],color:"color",disabled:[2,"disabled","disabled",w],disableRipple:[2,"disableRipple","disableRipple",w],tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:gt(e)],checked:[2,"checked","checked",w],hideIcon:[2,"hideIcon","hideIcon",w],disabledInteractive:[2,"disabledInteractive","disabledInteractive",w]},outputs:{change:"change",toggleChange:"toggleChange"},exportAs:["matSlideToggle"],features:[oe([{provide:Tt,useExisting:it(()=>i),multi:!0},{provide:qn,useExisting:i,multi:!0}]),ge],ngContentSelectors:ec,decls:14,vars:27,consts:[["switch",""],["mat-internal-form-field","",3,"labelPosition"],["role","switch","type","button",1,"mdc-switch",3,"click","tabIndex","disabled"],[1,"mat-mdc-slide-toggle-touch-target"],[1,"mdc-switch__track"],[1,"mdc-switch__handle-track"],[1,"mdc-switch__handle"],[1,"mdc-switch__shadow"],[1,"mdc-elevation-overlay"],[1,"mdc-switch__ripple"],["mat-ripple","",1,"mat-mdc-slide-toggle-ripple","mat-focus-indicator",3,"matRippleTrigger","matRippleDisabled","matRippleCentered"],[1,"mdc-switch__icons"],[1,"mdc-label",3,"click","for"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--on"],["d","M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"],["viewBox","0 0 24 24","aria-hidden","true",1,"mdc-switch__icon","mdc-switch__icon--off"],["d","M20 13H4v-2h16v2z"]],template:function(t,n){if(t&1&&(ce(),l(0,"div",1)(1,"button",2,0),x("click",function(){return n._handleClick()}),H(3,"div",3)(4,"span",4),l(5,"span",5)(6,"span",6)(7,"span",7),H(8,"span",8),d(),l(9,"span",9),H(10,"span",10),d(),h(11,tc,5,0,"span",11),d()()(),l(12,"label",12),x("click",function(r){return r.stopPropagation()}),U(13),d()()),t&2){let o=De(2);y("labelPosition",n.labelPosition),c(),O("mdc-switch--selected",n.checked)("mdc-switch--unselected",!n.checked)("mdc-switch--checked",n.checked)("mdc-switch--disabled",n.disabled)("mat-mdc-slide-toggle-disabled-interactive",n.disabledInteractive),y("tabIndex",n.disabled&&!n.disabledInteractive?-1:n.tabIndex)("disabled",n.disabled&&!n.disabledInteractive),Y("id",n.buttonId)("name",n.name)("aria-label",n.ariaLabel)("aria-labelledby",n._getAriaLabelledBy())("aria-describedby",n.ariaDescribedby)("aria-required",n.required||null)("aria-checked",n.checked)("aria-disabled",n.disabled&&n.disabledInteractive?"true":null),c(9),y("matRippleTrigger",o)("matRippleDisabled",n.disableRipple||n.disabled)("matRippleCentered",!0),c(),f(n.hideIcon?-1:11),c(),y("for",n.buttonId),Y("id",n._labelId)}},dependencies:[Xt,Cs],styles:[`.mdc-switch {
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  margin: 0;
  outline: none;
  overflow: visible;
  padding: 0;
  position: relative;
  width: var(--mat-slide-toggle-track-width, 52px);
}
.mdc-switch.mdc-switch--disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {
  pointer-events: auto;
}

.mdc-switch__track {
  overflow: hidden;
  position: relative;
  width: 100%;
  height: var(--mat-slide-toggle-track-height, 32px);
  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));
}
.mdc-switch--disabled.mdc-switch .mdc-switch__track {
  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);
}
.mdc-switch__track::before, .mdc-switch__track::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  border-width: var(--mat-slide-toggle-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));
}
.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);
}
.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {
  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);
  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));
}
@media (forced-colors: active) {
  .mdc-switch__track {
    border-color: currentColor;
  }
}
.mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: translateX(0);
  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__track::before {
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {
  transform: translateX(-100%);
}
.mdc-switch--selected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::before {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch:enabled:active .mdc-switch__track::before {
  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {
  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));
}
.mdc-switch__track::after {
  transform: translateX(-100%);
  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));
}
[dir=rtl] .mdc-switch__track::after {
  transform: translateX(100%);
}
.mdc-switch--selected .mdc-switch__track::after {
  transform: translateX(0);
}
.mdc-switch--selected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);
  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);
}
.mdc-switch--unselected .mdc-switch__track::after {
  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);
  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);
}
.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));
}
.mdc-switch:enabled:active .mdc-switch__track::after {
  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {
  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));
}

.mdc-switch__handle-track {
  height: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  left: 0;
  right: auto;
  transform: translateX(0);
  width: calc(100% - var(--mat-slide-toggle-handle-width));
}
[dir=rtl] .mdc-switch__handle-track {
  left: auto;
  right: 0;
}
.mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(100%);
}
[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {
  transform: translateX(-100%);
}

.mdc-switch__handle {
  display: flex;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: auto;
  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);
  width: var(--mat-slide-toggle-handle-width);
  height: var(--mat-slide-toggle-handle-height);
  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));
}
[dir=rtl] .mdc-switch__handle {
  left: auto;
  right: 0;
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {
  width: var(--mat-slide-toggle-unselected-handle-size, 16px);
  height: var(--mat-slide-toggle-unselected-handle-size, 16px);
  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {
  width: var(--mat-slide-toggle-selected-handle-size, 24px);
  height: var(--mat-slide-toggle-selected-handle-size, 24px);
  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {
  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);
}
.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {
  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);
  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);
}
.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  width: var(--mat-slide-toggle-pressed-handle-size, 28px);
  height: var(--mat-slide-toggle-pressed-handle-size, 28px);
}
.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);
}
.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {
  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {
  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);
}
.mdc-switch__handle::before, .mdc-switch__handle::after {
  border: 1px solid transparent;
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  width: 100%;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  z-index: -1;
}
@media (forced-colors: active) {
  .mdc-switch__handle::before, .mdc-switch__handle::after {
    border-color: currentColor;
  }
}
.mdc-switch--selected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));
}
.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));
}
.mdc-switch--selected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));
}
.mdc-switch--unselected:enabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));
}
.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {
  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));
}
.mdc-switch__handle::before {
  background: var(--mat-slide-toggle-handle-surface-color);
}

.mdc-switch__shadow {
  border-radius: inherit;
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}
.mdc-switch:enabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {
  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);
}

.mdc-switch__ripple {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: var(--mat-slide-toggle-state-layer-size, 40px);
  height: var(--mat-slide-toggle-state-layer-size, 40px);
}
.mdc-switch__ripple::after {
  content: "";
  opacity: 0;
}
.mdc-switch--disabled .mdc-switch__ripple::after {
  display: none;
}
.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {
  display: block;
}
.mdc-switch:hover .mdc-switch__ripple::after {
  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);
}
.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}
.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}
.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}
.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {
  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));
  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));
  transition: opacity 75ms linear;
}

.mdc-switch__icons {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 1;
  transform: translateZ(0);
}
.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);
}
.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {
  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);
}

.mdc-switch__icon {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);
}
.mdc-switch--unselected .mdc-switch__icon {
  width: var(--mat-slide-toggle-unselected-icon-size, 16px);
  height: var(--mat-slide-toggle-unselected-icon-size, 16px);
  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));
}
.mdc-switch--selected .mdc-switch__icon {
  width: var(--mat-slide-toggle-selected-icon-size, 16px);
  height: var(--mat-slide-toggle-selected-icon-size, 16px);
  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));
}
.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {
  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));
}

.mdc-switch--selected .mdc-switch__icon--on,
.mdc-switch--unselected .mdc-switch__icon--off {
  opacity: 1;
  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);
}

.mat-mdc-slide-toggle {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  -webkit-tap-highlight-color: transparent;
  outline: 0;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,
.mat-mdc-slide-toggle .mdc-switch__ripple::after {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),
.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {
  transform: translateZ(0);
}
.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {
  content: "";
}
.mat-mdc-slide-toggle .mat-internal-form-field {
  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));
  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));
  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));
}
.mat-mdc-slide-toggle .mat-ripple-element {
  opacity: 0.12;
}
.mat-mdc-slide-toggle .mat-focus-indicator::before {
  border-radius: 50%;
}
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,
.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {
  transition: none;
}
.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {
  cursor: pointer;
}
.mat-mdc-slide-toggle .mdc-switch--disabled + label {
  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));
}
.mat-mdc-slide-toggle label:empty {
  display: none;
}

.mat-mdc-slide-toggle-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--mat-slide-toggle-touch-target-size, 48px);
  width: 100%;
  transform: translate(-50%, -50%);
  display: var(--mat-slide-toggle-touch-target-display, block);
}
[dir=rtl] .mat-mdc-slide-toggle-touch-target {
  left: auto;
  right: 50%;
  transform: translate(50%, -50%);
}
`],encapsulation:2,changeDetection:0})}return i})(),Fi=(()=>{class i{static \u0275fac=function(t){return new(t||i)};static \u0275mod=z({type:i});static \u0275inj=B({imports:[Ln,ie]})}return i})();var ic=/^\d{4}-\d{2}-\d{2}(?:T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|(?:(?:\+|-)\d{2}:\d{2}))?)?$/,ac=/^(\d?\d)[:.](\d?\d)(?:[:.](\d?\d))?\s*(AM|PM)?$/i;function Wa(i,a){let e=Array(i);for(let t=0;t<i;t++)e[t]=a(t);return e}var oc=(()=>{class i extends Ce{_matDateLocale=s($i,{optional:!0});constructor(){super();let e=s($i,{optional:!0});e!==void 0&&(this._matDateLocale=e),super.setLocale(this._matDateLocale)}getYear(e){return e.getFullYear()}getMonth(e){return e.getMonth()}getDate(e){return e.getDate()}getDayOfWeek(e){return e.getDay()}getMonthNames(e){let t=new Intl.DateTimeFormat(this.locale,{month:e,timeZone:"utc"});return Wa(12,n=>this._format(t,new Date(2017,n,1)))}getDateNames(){let e=new Intl.DateTimeFormat(this.locale,{day:"numeric",timeZone:"utc"});return Wa(31,t=>this._format(e,new Date(2017,0,t+1)))}getDayOfWeekNames(e){let t=new Intl.DateTimeFormat(this.locale,{weekday:e,timeZone:"utc"});return Wa(7,n=>this._format(t,new Date(2017,0,n+1)))}getYearName(e){let t=new Intl.DateTimeFormat(this.locale,{year:"numeric",timeZone:"utc"});return this._format(t,e)}getFirstDayOfWeek(){if(typeof Intl<"u"&&Intl.Locale){let e=new Intl.Locale(this.locale),t=(e.getWeekInfo?.()||e.weekInfo)?.firstDay??0;return t===7?0:t}return 0}getNumDaysInMonth(e){return this.getDate(this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+1,0))}clone(e){return new Date(e.getTime())}createDate(e,t,n){let o=this._createDateWithOverflow(e,t,n);return o.getMonth()!=t,o}today(){return new Date}parse(e,t){return typeof e=="number"?new Date(e):e?new Date(Date.parse(e)):null}format(e,t){if(!this.isValid(e))throw Error("NativeDateAdapter: Cannot format invalid date.");let n=new Intl.DateTimeFormat(this.locale,Nn(ee({},t),{timeZone:"utc"}));return this._format(n,e)}addCalendarYears(e,t){return this.addCalendarMonths(e,t*12)}addCalendarMonths(e,t){let n=this._createDateWithOverflow(this.getYear(e),this.getMonth(e)+t,this.getDate(e));return this.getMonth(n)!=((this.getMonth(e)+t)%12+12)%12&&(n=this._createDateWithOverflow(this.getYear(n),this.getMonth(n),0)),n}addCalendarDays(e,t){return this._createDateWithOverflow(this.getYear(e),this.getMonth(e),this.getDate(e)+t)}toIso8601(e){return[e.getUTCFullYear(),this._2digit(e.getUTCMonth()+1),this._2digit(e.getUTCDate())].join("-")}deserialize(e){if(typeof e=="string"){if(!e)return null;if(ic.test(e)){let t=new Date(e);if(this.isValid(t))return t}}return super.deserialize(e)}isDateInstance(e){return e instanceof Date}isValid(e){return!isNaN(e.getTime())}invalid(){return new Date(NaN)}setTime(e,t,n,o){let r=this.clone(e);return r.setHours(t,n,o,0),r}getHours(e){return e.getHours()}getMinutes(e){return e.getMinutes()}getSeconds(e){return e.getSeconds()}parseTime(e,t){if(typeof e!="string")return e instanceof Date?new Date(e.getTime()):null;let n=e.trim();if(n.length===0)return null;let o=this._parseTimeString(n);if(o===null){let r=n.replace(/[^0-9:(AM|PM)]/gi,"").trim();r.length>0&&(o=this._parseTimeString(r))}return o||this.invalid()}addSeconds(e,t){return new Date(e.getTime()+t*1e3)}_createDateWithOverflow(e,t,n){let o=new Date;return o.setFullYear(e,t,n),o.setHours(0,0,0,0),o}_2digit(e){return("00"+e).slice(-2)}_format(e,t){let n=new Date;return n.setUTCFullYear(t.getFullYear(),t.getMonth(),t.getDate()),n.setUTCHours(t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()),e.format(n)}_parseTimeString(e){let t=e.toUpperCase().match(ac);if(t){let n=parseInt(t[1]),o=parseInt(t[2]),r=t[3]==null?void 0:parseInt(t[3]),p=t[4];if(n===12?n=p==="AM"?0:n:p==="PM"&&(n+=12),Ua(n,0,23)&&Ua(o,0,59)&&(r==null||Ua(r,0,59)))return this.setTime(this.today(),n,o,r||0)}return null}static \u0275fac=function(t){return new(t||i)};static \u0275prov=T({token:i,factory:i.\u0275fac})}return i})();function Ua(i,a,e){return!isNaN(i)&&i>=a&&i<=e}var rc={parse:{dateInput:null,timeInput:null},display:{dateInput:{year:"numeric",month:"numeric",day:"numeric"},timeInput:{hour:"numeric",minute:"numeric"},monthYearLabel:{year:"numeric",month:"short"},dateA11yLabel:{year:"numeric",month:"long",day:"numeric"},monthYearA11yLabel:{year:"numeric",month:"long"},timeOptionLabel:{hour:"numeric",minute:"numeric"}}};function Vi(i=rc){return[{provide:Ce,useClass:oc},{provide:lt,useValue:i}]}var sc=(i,a)=>a.id;function lc(i,a){if(i&1&&(l(0,"div",6),m(1),d()),i&2){let e=u();c(),V(e.errorMessage)}}function dc(i,a){i&1&&(l(0,"p",11),m(1,"Task title is required."),d())}function cc(i,a){if(i&1&&(l(0,"mat-option",17),m(1),d()),i&2){let e=a.$implicit;y("value",e.id),c(),V(e.display_name)}}function mc(i,a){i&1&&(l(0,"p",11),m(1,"Please assign this task to a member."),d())}function uc(i,a){i&1&&(l(0,"p",11),m(1,"Please select a valid due date (today or later)."),d())}function pc(i,a){i&1&&(l(0,"p",11),m(1,"Please select a difficulty level."),d())}function hc(i,a){if(i&1&&(l(0,"p",11),m(1),d()),i&2){let e=u();c(),V(e.getPointsErrorMessage())}}function fc(i,a){i&1&&(l(0,"p",30),m(1,"Points awarded to the member when they complete this task."),d())}function gc(i,a){if(i&1&&(l(0,"p",11),m(1),d()),i&2){let e=u(2);c(),V(e.getRecurrenceErrorMessage())}}function _c(i,a){if(i&1){let e=K();l(0,"div",39)(1,"span",40),m(2,"Repeat every"),d(),l(3,"mat-form-field",41)(4,"input",42),Z("ngModelChange",function(n){_(e);let o=u();return X(o.recurrence_interval_days,n)||(o.recurrence_interval_days=n),b(n)}),d()(),l(5,"span",40),m(6,"day(s)"),d()(),h(7,gc,2,1,"p",11)}if(i&2){let e=u();c(4),q("ngModel",e.recurrence_interval_days),c(3),f(e.showValidationErrors&&e.getRecurrenceErrorMessage()!==null?7:-1)}}function bc(i,a){i&1&&m(0," Creating... ")}function vc(i,a){i&1&&m(0," Create Task ")}var Li=class i{taskService=s(st);members=[];template=null;closed=new v;taskCreated=new v;title="";description="";assigned_to="";due_date="";difficulty="Easy";points=10;is_recurring=!1;recurrence_interval_days=7;isSubmitting=!1;errorMessage="";showValidationErrors=!1;minDate=(()=>{let a=new Date;return a.setHours(0,0,0,0),a})();ngOnInit(){this.due_date=new Date,this.template&&(this.template.title&&(this.title=this.template.title),this.template.description&&(this.description=this.template.description),this.template.difficulty&&(this.difficulty=this.template.difficulty),this.template.points&&(this.points=this.template.points),this.template.assigned_to&&this.members.some(e=>e.id===this.template.assigned_to)&&(this.assigned_to=this.template.assigned_to))}getLocalDateString(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}getNormalizedPoints(){let a=this.points;return a===null||!Number.isFinite(a)||!Number.isInteger(a)||a<0?null:a}getNormalizedTitle(){let a=this.title.trim();return a.length>0?a:null}getNormalizedAssignedTo(){if(typeof this.assigned_to!="string")return null;let a=this.assigned_to.trim();return a.length>0?a:null}getNormalizedDifficulty(){return this.difficulty==="Easy"||this.difficulty==="Medium"||this.difficulty==="Hard"?this.difficulty:null}getNormalizedDueDate(){if(this.due_date instanceof Date){let a=new Date;a.setHours(0,0,0,0);let e=new Date(this.due_date);return e.setHours(0,0,0,0),e<a?null:this.getLocalDateString(this.due_date)}return typeof this.due_date=="string"&&this.due_date.trim().length>0?this.due_date:null}getNormalizedRecurrenceInterval(){if(!this.is_recurring)return null;let a=this.recurrence_interval_days;return a===null||!Number.isFinite(a)||!Number.isInteger(a)||a<1?null:a}getPointsErrorMessage(){return this.points===null?"Points are required.":this.points<0?"Points cannot be negative.":Number.isInteger(this.points)?null:"Points must be a whole number (no decimals)."}getRecurrenceErrorMessage(){if(!this.is_recurring)return null;let a=this.recurrence_interval_days;return a===null?"Recurrence interval is required.":!Number.isInteger(a)||a<1?"Interval must be a whole number of at least 1.":null}get isFormValid(){let a=!this.is_recurring||this.getNormalizedRecurrenceInterval()!==null;return this.getNormalizedTitle()!==null&&this.getNormalizedAssignedTo()!==null&&this.getNormalizedDifficulty()!==null&&this.getNormalizedDueDate()!==null&&this.getNormalizedPoints()!==null&&a}submit(){if(!this.isFormValid){this.showValidationErrors=!0;return}if(this.isSubmitting)return;this.isSubmitting=!0,this.errorMessage="";let a={title:this.getNormalizedTitle(),description:this.description.trim()||void 0,assigned_to:this.getNormalizedAssignedTo(),due_date:this.getNormalizedDueDate(),difficulty:this.getNormalizedDifficulty(),points:this.getNormalizedPoints(),is_recurring:this.is_recurring,recurrence_interval_days:this.is_recurring?this.getNormalizedRecurrenceInterval():null};this.taskService.createTask(a).subscribe({next:()=>{this.isSubmitting=!1,this.taskCreated.emit(),this.close()},error:e=>{this.isSubmitting=!1,this.errorMessage=e.message}})}close(){this.closed.emit()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-create-task"]],inputs:{members:"members",template:"template"},outputs:{closed:"closed",taskCreated:"taskCreated"},features:[oe([Vi()])],decls:74,vars:20,consts:[["picker",""],[1,"modal-backdrop",3,"click"],["role","dialog","aria-modal","true","aria-labelledby","create-task-title",1,"modal-card","card",3,"click"],[1,"modal-header"],["id","create-task-title"],[1,"modal-body"],[1,"error-banner"],[1,"form-group"],["for","task-title"],["appearance","outline",1,"material-field","no-floating-label"],["matInput","","id","task-title","type","text","placeholder","e.g. Take out trash","maxlength","100",1,"material-field",3,"ngModelChange","ngModel"],[1,"field-error-text"],["for","task-description"],[1,"optional-label"],["matInput","","id","task-description","placeholder","Add details or instructions for this chore...","rows","3","maxlength","500",3,"ngModelChange","ngModel"],["for","task-assignee"],["id","task-assignee","panelClass","custom-select-panel","placeholder","Select a member...",1,"material-field",3,"ngModelChange","ngModel"],[3,"value"],["for","task-due"],["matInput","","id","task-due","readonly","",1,"material-field",3,"ngModelChange","click","matDatepicker","min","ngModel"],["matSuffix","",3,"for"],["name","difficulty","aria-label","Task difficulty",1,"difficulty-toggle-group",3,"ngModelChange","ngModel"],["value","Easy",1,"easy-toggle"],["value","Medium",1,"medium-toggle"],["value","Hard",1,"hard-toggle"],["for","task-points"],["appearance","outline",1,"material-field","points-field","no-floating-label"],["matPrefix","",1,"points-prefix"],["matInput","","id","task-points","type","number","min","0","step","1","placeholder","e.g. 10",1,"material-field",3,"ngModelChange","ngModel"],["matSuffix","",1,"points-suffix"],[1,"form-hint"],[1,"form-group","recurring-group"],[1,"recurring-toggle-row"],[1,"recurring-label-block"],[1,"form-group-label"],["color","primary","aria-label","Toggle recurring task",3,"ngModelChange","ngModel"],[1,"modal-footer"],[1,"btn","btn--outline",3,"click","disabled"],[1,"btn","btn--primary",3,"click","disabled"],[1,"recurrence-interval-row"],[1,"recurring-interval-text"],["appearance","outline",1,"material-field","interval-field","no-floating-label"],["matInput","","type","number","min","1","step","1","placeholder","7",1,"material-field",3,"ngModelChange","ngModel"]],template:function(e,t){if(e&1){let n=K();l(0,"div",1),x("click",function(){return t.close()}),l(1,"div",2),x("click",function(r){return r.stopPropagation()}),l(2,"div",3)(3,"h3",4),m(4,"Create New Task"),d()(),l(5,"div",5),h(6,lc,2,1,"div",6),l(7,"div",7)(8,"label",8),m(9,"Task Title"),d(),l(10,"mat-form-field",9)(11,"input",10),Z("ngModelChange",function(r){return _(n),X(t.title,r)||(t.title=r),b(r)}),d()(),h(12,dc,2,0,"p",11),d(),l(13,"div",7)(14,"label",12),m(15,"Description "),l(16,"span",13),m(17,"(optional)"),d()(),l(18,"mat-form-field",9)(19,"textarea",14),Z("ngModelChange",function(r){return _(n),X(t.description,r)||(t.description=r),b(r)}),d()()(),l(20,"div",7)(21,"label",15),m(22,"Assign To"),d(),l(23,"mat-form-field",9)(24,"mat-select",16),Z("ngModelChange",function(r){return _(n),X(t.assigned_to,r)||(t.assigned_to=r),b(r)}),Ve(25,cc,2,2,"mat-option",17,sc),d()(),h(27,mc,2,0,"p",11),d(),l(28,"div",7)(29,"label",18),m(30,"Due Date"),d(),l(31,"mat-form-field",9)(32,"input",19),Z("ngModelChange",function(r){return _(n),X(t.due_date,r)||(t.due_date=r),b(r)}),x("click",function(){_(n);let r=De(35);return b(r.open())}),d(),H(33,"mat-datepicker-toggle",20)(34,"mat-datepicker",null,0),d(),h(36,uc,2,0,"p",11),d(),l(37,"div",7)(38,"label"),m(39,"Difficulty"),d(),l(40,"mat-button-toggle-group",21),Z("ngModelChange",function(r){return _(n),X(t.difficulty,r)||(t.difficulty=r),b(r)}),l(41,"mat-button-toggle",22),m(42,"Easy"),d(),l(43,"mat-button-toggle",23),m(44,"Medium"),d(),l(45,"mat-button-toggle",24),m(46,"Hard"),d()(),h(47,pc,2,0,"p",11),d(),l(48,"div",7)(49,"label",25),m(50,"Point Value"),d(),l(51,"mat-form-field",26)(52,"span",27),m(53,"\u2B50"),d(),l(54,"input",28),Z("ngModelChange",function(r){return _(n),X(t.points,r)||(t.points=r),b(r)}),d(),l(55,"span",29),m(56,"pts"),d()(),h(57,hc,2,1,"p",11)(58,fc,2,0,"p",30),d(),l(59,"div",31)(60,"div",32)(61,"div",33)(62,"span",34),m(63,"Recurring Task"),d(),l(64,"span",30),m(65,"Task resets automatically after completion"),d()(),l(66,"mat-slide-toggle",35),Z("ngModelChange",function(r){return _(n),X(t.is_recurring,r)||(t.is_recurring=r),b(r)}),d()(),h(67,_c,8,2),d()(),l(68,"div",36)(69,"button",37),x("click",function(){return t.close()}),m(70,"Cancel"),d(),l(71,"button",38),x("click",function(){return t.submit()}),h(72,bc,1,0)(73,vc,1,0),d()()()()}if(e&2){let n=De(35);c(6),f(t.errorMessage?6:-1),c(5),q("ngModel",t.title),c(),f(t.showValidationErrors&&t.getNormalizedTitle()===null?12:-1),c(7),q("ngModel",t.description),c(5),q("ngModel",t.assigned_to),c(),Le(t.members),c(2),f(t.showValidationErrors&&t.getNormalizedAssignedTo()===null?27:-1),c(5),y("matDatepicker",n)("min",t.minDate),q("ngModel",t.due_date),c(),y("for",n),c(3),f(t.showValidationErrors&&t.getNormalizedDueDate()===null?36:-1),c(4),q("ngModel",t.difficulty),c(7),f(t.showValidationErrors&&t.getNormalizedDifficulty()===null?47:-1),c(7),q("ngModel",t.points),c(3),f(t.showValidationErrors&&t.getPointsErrorMessage()!==null?57:58),c(9),q("ngModel",t.is_recurring),c(),f(t.is_recurring?67:-1),c(2),y("disabled",t.isSubmitting),c(2),y("disabled",t.isSubmitting),c(),f(t.isSubmitting?72:73)}},dependencies:[rt,Vt,Ot,Pt,It,Xn,Ft,Rt,et,Qt,On,An,Si,Ei,Mi,Di,an,Fn,Ai,Oi,ut,Ri,Vn,on,Fi,Ln],styles:[".modal-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;background:#00000073;display:flex;align-items:center;justify-content:center;z-index:100;padding:1rem}.modal-card[_ngcontent-%COMP%]{width:100%;max-width:560px;padding:0;overflow:hidden;background:linear-gradient(180deg,#fff,#fbfbff);border-radius:.75rem;box-shadow:0 20px 40px #10182826}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem 1.25rem;border-bottom:1px solid var(--gray-200)}.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1rem;font-weight:700;color:#1f2937}.close-btn[_ngcontent-%COMP%]{background:none;border:none;font-size:1rem;color:var(--gray-500);cursor:pointer;padding:.25rem;line-height:1}.close-btn[_ngcontent-%COMP%]:hover{color:#1f2937}.modal-body[_ngcontent-%COMP%]{padding:1.25rem;display:flex;flex-direction:column;gap:.875rem;max-height:75vh;overflow-y:auto}.error-banner[_ngcontent-%COMP%]{background:var(--red-100);color:#b91c1c;border-radius:.5rem;padding:.6rem .875rem;font-size:.85rem;font-weight:500}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.3rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600;color:var(--gray-700);letter-spacing:.02em}.field-error-text[_ngcontent-%COMP%]{color:#b91c1c;font-size:.75rem;font-weight:600;margin:0}.form-hint[_ngcontent-%COMP%]{margin:0;font-size:.75rem;color:var(--gray-400)}.optional-label[_ngcontent-%COMP%]{font-weight:400;color:var(--gray-400);text-transform:none;letter-spacing:0}.material-field[_ngcontent-%COMP%]{width:100%}  .material-field .mat-mdc-form-field-subscript-wrapper{display:none!important}  .no-floating-label .mdc-notched-outline__notch{border-right:none!important}  .material-field .mat-mdc-text-field-wrapper{background:#fff;border-radius:.5rem}  .mdc-text-field{padding:0 8px!important}  .material-field .mat-mdc-form-field-infix{padding:.6rem .5rem!important;min-height:auto!important}  .material-field .mdc-notched-outline__leading,   .material-field .mdc-notched-outline__notch,   .material-field .mdc-notched-outline__trailing{border-color:var(--gray-300)!important}  .material-field.mat-focused .mdc-notched-outline__leading,   .material-field.mat-focused .mdc-notched-outline__notch,   .material-field.mat-focused .mdc-notched-outline__trailing{border-color:var(--indigo-600)!important}  .material-field .mat-mdc-input-element,   .material-field .mat-mdc-select-value{color:#1f2937;font-size:.9rem}  .material-field .mat-mdc-select-arrow,   .material-field .mat-datepicker-toggle-default-icon{color:var(--gray-500)}  .material-field .mat-mdc-input-element::placeholder,   .material-field .mat-mdc-select-placeholder{color:var(--gray-400)!important;-webkit-text-fill-color:var(--gray-400)!important;font-weight:400!important;opacity:1!important}.points-prefix[_ngcontent-%COMP%]{font-size:1rem;line-height:1;margin-left:.375rem}.points-suffix[_ngcontent-%COMP%]{font-size:.85rem;color:var(--gray-500);font-weight:600;margin:0 .375rem}  .points-field input[type=number]{appearance:textfield}  .points-field input[type=number]::-webkit-inner-spin-button,   .points-field input[type=number]::-webkit-outer-spin-button{display:none}  .custom-select-panel{border-radius:.5rem!important;box-shadow:0 10px 25px #00000026!important;margin-top:4px!important;background-color:#fff!important}  .mat-datepicker-content{background-color:#fff!important;box-shadow:0 10px 25px #0003!important;border-radius:.75rem!important;border:1px solid var(--gray-200)!important;padding:0!important;margin:0!important}  .cdk-overlay-pane{z-index:9999!important;padding:0!important}  .mat-calendar{color:var(--gray-700)!important;background-color:#fff!important;height:fit-content!important}  .mat-calendar-body-selected{background-color:var(--indigo-600)!important;color:#fff!important}  .mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:var(--indigo-600)!important}  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:#4f46e51a!important}  .mat-calendar-period-button{color:var(--gray-700)!important;font-weight:700!important}.difficulty-toggle-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem}  .mat-button-toggle-group{border:0!important}  .difficulty-toggle-group .mat-button-toggle{border:none!important;border-radius:.5rem!important;overflow:hidden;background:#f9fafb!important}  .difficulty-toggle-group .mat-button-toggle-label-content{line-height:2.25rem;padding:0;font-size:.8rem;font-weight:600}  .difficulty-toggle-group .mat-button-toggle-checked.easy-toggle{background:var(--emerald-100)!important}  .difficulty-toggle-group .mat-button-toggle-checked.medium-toggle{background:#fef3c7!important}  .difficulty-toggle-group .mat-button-toggle-checked.hard-toggle{background:var(--red-100)!important}  .difficulty-toggle-group .mat-button-toggle-checked.easy-toggle .mat-button-toggle-label-content{color:#065f46!important}  .difficulty-toggle-group .mat-button-toggle-checked.medium-toggle .mat-button-toggle-label-content{color:#92400e!important}  .difficulty-toggle-group .mat-button-toggle-checked.hard-toggle .mat-button-toggle-label-content{color:#b91c1c!important}  .difficulty-toggle-group .easy-toggle.mat-button-toggle-checked .mat-pseudo-checkbox:after{border-color:var(--emerald-500)!important}  .difficulty-toggle-group .medium-toggle.mat-button-toggle-checked .mat-pseudo-checkbox:after{border-color:#f59e0b!important}  .difficulty-toggle-group .hard-toggle.mat-button-toggle-checked .mat-pseudo-checkbox:after{border-color:var(--red-500)!important}.recurring-group[_ngcontent-%COMP%]{border:1px solid var(--gray-200);border-radius:.6rem;padding:.875rem 1rem;background:#fafafa;gap:.625rem}.recurring-toggle-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.recurring-label-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.2rem}  .recurring-group .mdc-switch--selected .mdc-switch__track{background-color:var(--indigo-600)!important}  .recurring-group .mdc-switch--selected .mdc-switch__handle:after{background-color:#fff!important}  .recurring-group .mdc-switch--selected .mdc-switch__icon{fill:var(--indigo-600)!important}.recurrence-interval-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.625rem;margin-top:.5rem}.recurring-interval-text[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600;color:var(--gray-700);white-space:nowrap}.interval-field[_ngcontent-%COMP%]{width:80px!important;flex-shrink:0}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:.75rem;padding:1rem 1.25rem;border-top:1px solid var(--gray-200)}.btn[_ngcontent-%COMP%]{padding:.5rem 1.25rem;border-radius:.5rem;font-weight:600;font-size:.875rem;cursor:pointer;border:none;transition:opacity .15s,background-color .15s}.btn[_ngcontent-%COMP%]:disabled{opacity:1;cursor:not-allowed}.btn--primary[_ngcontent-%COMP%]{background:var(--indigo-600);color:#fff}.btn--primary[_ngcontent-%COMP%]:disabled{background:#a5a1f6;color:#f5f3ff}.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled){background:#4338ca}.btn--outline[_ngcontent-%COMP%]{background:transparent;color:var(--gray-700);border:1px solid var(--gray-300)}.btn--outline[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--gray-100)}"]})};var yc=(i,a)=>a.id;function xc(i,a){if(i&1){let e=K();M(0,"button",6),Ne("click",function(){_(e);let n=u();return b(n.onOpenCreateTask())}),m(1,"\uFF0B Create Task"),D()}}function Cc(i,a){if(i&1&&(M(0,"div",3),m(1),D()),i&2){let e=u();c(),V(e.tasksLoadError)}}function wc(i,a){i&1&&(m(0," Hit "),M(1,"strong"),m(2,"Create Task"),D(),m(3," to assign the first one! "))}function kc(i,a){i&1&&m(0," Your admin hasn't assigned any tasks yet. ")}function Dc(i,a){if(i&1&&(M(0,"div",4)(1,"p"),m(2," No tasks yet. "),h(3,wc,4,0)(4,kc,1,0),D()()),i&2){let e=u();c(3),f(e.isAdmin?3:4)}}function Mc(i,a){i&1&&(M(0,"span",20),m(1,"Due today"),D())}function Ec(i,a){i&1&&(M(0,"span",21),m(1,"OVERDUE"),D())}function Sc(i,a){if(i&1&&(h(0,Mc,2,0,"span",20),h(1,Ec,2,0,"span",21)),i&2){let e=u(2).$implicit,t=u(2);f(t.getUrgency(t.getDisplayDueDate(e),e.status)==="Due today"?0:-1),c(),f(t.getUrgency(t.getDisplayDueDate(e),e.status)==="OVERDUE"?1:-1)}}function Tc(i,a){if(i&1&&(M(0,"span",18),m(1),D()),i&2){let e=u(2).$implicit;c(),te("+",e.points," pts")}}function Oc(i,a){if(i&1&&(M(0,"span",19),m(1),D()),i&2){let e=u(2).$implicit;c(),te(" \u{1F501} ",e.recurrence_interval_days===1?"Daily":"Every "+e.recurrence_interval_days+" days"," ")}}function Ac(i,a){if(i&1&&(M(0,"div",12),h(1,Sc,2,2),M(2,"span",17),m(3),D(),h(4,Tc,2,1,"span",18),h(5,Oc,2,1,"span",19),D()),i&2){let e=u().$implicit,t=u(2);c(),f(t.isCooldown(e)?-1:1),c(2),V(e.difficulty),c(),f(e.points>0?4:-1),c(),f(e.is_recurring&&e.recurrence_interval_days?5:-1)}}function Ic(i,a){if(i&1&&(M(0,"span",21),m(1),D()),i&2){let e=u(2).$implicit;c(),te("Late! \u2212",e.points_deducted," pts")}}function Rc(i,a){if(i&1&&(M(0,"span",22),m(1),D()),i&2){let e=u(2).$implicit;c(),te(" +",e.points-(e.points_deducted??0)," pts earned ")}}function Pc(i,a){if(i&1&&(M(0,"div",12),h(1,Ic,2,1,"span",21),h(2,Rc,2,1,"span",22),D()),i&2){let e=u().$implicit;c(),f(e.was_late?1:-1),c(),f(e.points>0?2:-1)}}function Fc(i,a){i&1&&(M(0,"button",26),m(1,"Done"),D())}function Vc(i,a){if(i&1){let e=K();M(0,"button",29),Ne("click",function(){_(e);let n=u(2).$implicit,o=u(2);return b(o.onComplete(n.id))}),m(1),D()}if(i&2){let e=u(2).$implicit,t=u(2);O("btn-complete--locked",t.isCooldown(e)||t.isFutureLocked(e)),de("disabled",t.processingTaskIds.has(e.id)||t.isCooldown(e)||t.isFutureLocked(e)),c(),te(" ",t.processingTaskIds.has(e.id)?"Completing...":t.isCooldown(e)||t.isFutureLocked(e)?"Not Due Yet":"Complete"," ")}}function Lc(i,a){i&1&&(M(0,"button",28),m(1,"Locked"),D())}function Nc(i,a){if(i&1){let e=K();M(0,"div",16)(1,"button",23),Ne("click",function(){_(e);let n=u().$implicit,o=u(2);return b(o.onEditTask(n))}),Pe(),M(2,"svg",24),ke(3,"path",25),D()(),h(4,Fc,2,0,"button",26)(5,Vc,2,4,"button",27)(6,Lc,2,0,"button",28),D()}if(i&2){let e=u().$implicit,t=u(2);c(),de("disabled",t.processingTaskIds.has(e.id)),c(3),f(t.isCompleted(e)?4:t.isAssignedToMe(e.assigned_to)?5:6)}}function Bc(i,a){i&1&&(M(0,"button",26),m(1,"Done"),D())}function zc(i,a){if(i&1){let e=K();M(0,"button",29),Ne("click",function(){_(e);let n=u(2).$implicit,o=u(2);return b(o.onComplete(n.id))}),m(1),D()}if(i&2){let e=u(2).$implicit,t=u(2);O("btn-complete--locked",t.isCooldown(e)||t.isFutureLocked(e)),de("disabled",t.processingTaskIds.has(e.id)||t.isCooldown(e)||t.isFutureLocked(e)),c(),te(" ",t.processingTaskIds.has(e.id)?"Completing...":t.isCooldown(e)||t.isFutureLocked(e)?"Not Due Yet":"Complete"," ")}}function Hc(i,a){i&1&&(M(0,"button",28),m(1,"Locked"),D())}function jc(i,a){if(i&1){let e=K();M(0,"div",16)(1,"button",30),Ne("click",function(){_(e);let n=u().$implicit,o=u(2);return b(o.onEditTask(n))}),Pe(),M(2,"svg",24),ke(3,"path",31)(4,"path",32),D()(),h(5,Bc,2,0,"button",26)(6,zc,2,4,"button",27)(7,Hc,2,0,"button",28),D()}if(i&2){let e=u().$implicit,t=u(2);c(),de("disabled",t.processingTaskIds.has(e.id)),c(4),f(t.isCompleted(e)?5:t.isAssignedToMe(e.assigned_to)?6:7)}}function Yc(i,a){if(i&1){let e=K();M(0,"div")(1,"div",8)(2,"input",9),Ne("change",function(){let n=_(e).$implicit,o=u(2);return b(o.onComplete(n.id))}),D()(),M(3,"div",10),Ne("click",function(){let n=_(e).$implicit,o=u(2);return b(o.onEditTask(n))}),M(4,"h4"),m(5),D(),M(6,"p",11),m(7),D(),h(8,Ac,6,4,"div",12)(9,Pc,3,2,"div",12),M(10,"div",13)(11,"div",14),m(12),D(),M(13,"span",15),m(14),D()()(),h(15,Nc,7,2,"div",16)(16,jc,8,2,"div",16),D()}if(i&2){let e=a.$implicit,t=u(2);Me(mo("task-card card task--",t.isCompleted(e)?"done":t.getUrgency(e.due_date,e.status)==="OVERDUE"?"overdue":"normal")),c(2),de("checked",t.isCompleted(e)||t.isCooldown(e))("disabled",!t.currentUserUid||t.isCompleted(e)||!t.isAssignedToMe(e.assigned_to)||t.processingTaskIds.has(e.id)||t.isCooldown(e)||t.isFutureLocked(e)),c(2),O("strike",t.isCompleted(e)||t.isCooldown(e)),c(),te(" ",e.title," "),c(2),V(t.formatDueDate(t.getDisplayDueDate(e))),c(),f(t.isCompleted(e)?9:8),c(4),te(" ",t.getMemberName(e.assigned_to).charAt(0).toUpperCase()," "),c(2),V(t.getMemberName(e.assigned_to)),c(),f(t.isAdmin||t.household&&t.household.admin_id===t.currentUserUid?15:16)}}function Wc(i,a){if(i&1&&(M(0,"div",5),Ve(1,Yc,17,13,"div",7,yc),D()),i&2){let e=u();c(),Le(e.tasks)}}var Ni=class i{tasks=[];household;currentUserUid="";isAdmin=!1;tasksLoadError="";processingTaskIds=new Set;memberStatsMap=new Map;openCreateTask=new v;editTask=new v;completeTask=new v;taskService=s(st);toastr=s(Lt);isAssignedToMe(a){return a===this.currentUserUid}isCompleted(a){return a.status==="completed"}isTooEarly(a,e){if(!a||!e)return!1;let t=new Date(a),n=new Date;if(n.setHours(0,0,0,0),t.setHours(0,0,0,0),e===1)return t.getTime()>n.getTime();let o=new Date(t);return o.setDate(t.getDate()-e),n.getTime()<o.getTime()}isCooldown(a){return this.isTooEarly(a.due_date,a.recurrence_interval_days)&&!!a.completed_at}isFutureLocked(a){return this.isTooEarly(a.due_date,a.recurrence_interval_days)&&!a.completed_at}getMemberName(a){if(!this.household?.members)return"Unknown";let e=this.household.members.find(t=>t.id===a);return e?e.display_name:"Unknown"}getMemberStats(a){return this.memberStatsMap.get(a)??null}formatDueDate(a){if(!a)return"No due date";let e=new Date(a);if(isNaN(e.getTime()))return"Invalid date";let t=new Date;t.setHours(0,0,0,0),e.setHours(0,0,0,0);let n=(e.getTime()-t.getTime())/(1e3*60*60*24);return n<0?`Was due: ${e.toLocaleDateString("en-US",{month:"short",day:"numeric"})}`:n===0?"Today":n===1?"Tomorrow":e.toLocaleDateString("en-US",{month:"short",day:"numeric"})}getDisplayDueDate(a){if(!a.due_date)return null;if(this.isCooldown(a)&&a.recurrence_interval_days){let e=new Date(a.due_date);return e.setDate(e.getDate()-a.recurrence_interval_days),e.toISOString()}return a.due_date}getUrgency(a,e){if(e==="completed"||!a)return"";let t=new Date(a);if(isNaN(t.getTime()))return"";let n=new Date;n.setHours(0,0,0,0),t.setHours(0,0,0,0);let o=(t.getTime()-n.getTime())/(1e3*60*60*24);return o<0?"OVERDUE":o===0?"Due today":""}onComplete(a){if(this.processingTaskIds.has(a))return;let t=this.tasks.find(n=>n.id===a)?.due_date??"";this.processingTaskIds.add(a),this.taskService.completeTask(a,t).subscribe({next:n=>{this.processingTaskIds.delete(a),n.was_late?this.toastr.warning(`\u2212${n.points_deducted} pt late penalty applied. You still earned ${n.points_awarded} pts!`,"\u23F0 Better late than never!",{enableHtml:!0,timeOut:6e3}):n.points_awarded>0?this.toastr.success(`+${n.points_awarded} pts added to your score`,"\u{1F3C6} Quest complete!",{enableHtml:!0}):this.toastr.success("Chore cleared from the board.","Done!",{enableHtml:!0})},error:n=>{this.processingTaskIds.delete(a),this.toastr.error(n.message,"Something went wrong",{enableHtml:!0,timeOut:5e3})}})}onOpenCreateTask(){this.openCreateTask.emit()}onEditTask(a){this.editTask.emit(a)}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-task-list"]],inputs:{tasks:"tasks",household:"household",currentUserUid:"currentUserUid",isAdmin:"isAdmin",tasksLoadError:"tasksLoadError",processingTaskIds:"processingTaskIds",memberStatsMap:"memberStatsMap"},outputs:{openCreateTask:"openCreateTask",editTask:"editTask",completeTask:"completeTask"},decls:8,vars:3,consts:[[1,"section"],[1,"section-header"],[1,"btn-create-task"],[1,"error-banner","card"],[1,"empty-tasks","card"],[1,"task-list"],[1,"btn-create-task",3,"click"],[3,"class"],[1,"task-checkbox"],["type","checkbox",3,"change","checked","disabled"],[1,"task-details","task-details--clickable",3,"click"],[1,"task-meta"],[1,"task-tags"],[1,"assignee-badge"],[1,"assignee-avatar"],[1,"assignee-name"],[1,"task-actions"],[1,"tag","tag--neutral"],[1,"tag","tag--points"],[1,"tag","tag--recurring"],[1,"tag","tag--warning"],[1,"tag","tag--danger"],[1,"tag","tag--points-earned"],["title","Edit Task",1,"btn-icon","btn-edit",3,"click","disabled"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 0 20 20","fill","currentColor"],["d","M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"],["disabled","",1,"btn-complete"],[1,"btn-complete",3,"btn-complete--locked","disabled"],["disabled","",1,"btn-complete","btn-complete--locked"],[1,"btn-complete",3,"click","disabled"],["title","View Task Details",1,"btn-icon","btn-view",3,"click","disabled"],["d","M10 12a2 2 0 100-4 2 2 0 000 4z"],["fill-rule","evenodd","d","M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clip-rule","evenodd"]],template:function(e,t){e&1&&(M(0,"section",0)(1,"div",1)(2,"h3"),m(3,"HOUSEHOLD TASKS"),D(),h(4,xc,2,0,"button",2),D(),h(5,Cc,2,1,"div",3),h(6,Dc,5,1,"div",4)(7,Wc,3,0,"div",5),D()),e&2&&(c(4),f(t.isAdmin?4:-1),c(),f(t.tasksLoadError?5:-1),c(),f(!t.tasksLoadError&&t.tasks.length===0?6:7))},dependencies:[rt],styles:[".section[_ngcontent-%COMP%]{width:100%;margin-bottom:1.5rem;box-sizing:border-box}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-left:.875rem;padding-right:.875rem;margin-bottom:.75rem;width:100%}.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--gray-400);margin:0}.btn-create-task[_ngcontent-%COMP%]{padding:.35rem .875rem;border-radius:.4rem;border:none;background:#7c3aed;color:#fff;font-size:.8125rem;font-weight:700;cursor:pointer}.btn-create-task[_ngcontent-%COMP%]:hover{background:#6d28d9}.task-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.625rem;width:100%}.task-card[_ngcontent-%COMP%]{display:grid;grid-template-columns:min-content 1fr;gap:.75rem 1rem;padding:1rem 1.25rem;border:1px solid var(--gray-200, #e5e7eb);border-radius:.875rem;background:#fff;box-shadow:0 1px 3px #0000000d;transition:all .2s ease;width:100%;box-sizing:border-box}.task--overdue[_ngcontent-%COMP%]{border-color:var(--red-300, #fca5a5);background:#ef444405}.task--done[_ngcontent-%COMP%]{opacity:.55}.task--overdue[_ngcontent-%COMP%]   .task-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{color:#1a1a2e!important}.task--overdue[_ngcontent-%COMP%]   .task-meta[_ngcontent-%COMP%]{color:#4a4a6a!important}.task-checkbox[_ngcontent-%COMP%]{grid-column:1;grid-row:1;display:flex;align-items:flex-start;padding-top:.15rem}.task-details[_ngcontent-%COMP%]{grid-column:2;grid-row:1;display:flex;flex-direction:column;justify-content:center;min-width:0}.task-details--clickable[_ngcontent-%COMP%]{cursor:pointer}.task-details--clickable[_ngcontent-%COMP%]:hover   h4[_ngcontent-%COMP%]{color:var(--indigo-600, #4f46e5)!important}.task-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.9375rem;font-weight:600;margin:0 0 .2rem;color:#1a1a2e!important;white-space:normal;line-height:1.3}.strike[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--gray-500)!important}.task-meta[_ngcontent-%COMP%]{font-size:.75rem;color:#4a4a6a!important;margin:0 0 .3rem}.task-tags[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.375rem;margin-top:.25rem}.tag[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:.125rem .5rem;border-radius:9999px;font-size:.6875rem;font-weight:700;text-transform:uppercase;letter-spacing:.03em}.tag--warning[_ngcontent-%COMP%]{background:#facc151f;color:#d97706;border:1px solid rgba(250,204,21,.3)}.tag--danger[_ngcontent-%COMP%]{background:#ef444426;color:#dc2626;border:1px solid rgba(239,68,68,.35)}.tag--neutral[_ngcontent-%COMP%]{background:#6366f126;color:var(--indigo-600);border:1px solid rgba(99,102,241,.3)}.tag--points[_ngcontent-%COMP%]{background:#8b5cf626;color:#7c3aed;border:1px solid rgba(139,92,246,.3)}.tag--points-earned[_ngcontent-%COMP%]{background:#22c55e1f;color:#16a34a;border:1px solid rgba(34,197,94,.3)}.tag--recurring[_ngcontent-%COMP%]{background:#0ea5e91f;color:#0369a1;border:1px solid rgba(14,165,233,.3);text-transform:none;letter-spacing:.01em}.assignee-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;margin-top:.75rem;padding:.25rem .6rem .25rem .25rem;background:var(--gray-50, #f9fafb);border:1px solid var(--gray-200, #e5e7eb);border-radius:2rem;width:fit-content}.assignee-avatar[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;border-radius:50%;background:var(--indigo-100, #e0e7ff);color:var(--indigo-700, #4338ca);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700}.assignee-name[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;color:var(--gray-600, #4b5563)}.task-actions[_ngcontent-%COMP%]{grid-column:1 / -1;grid-row:2;justify-self:flex-end;display:flex;flex-direction:row;align-items:center;gap:.5rem;margin-top:.75rem;background:linear-gradient(135deg,var(--gray-50, #f8fafc),var(--gray-100, #f3f4f6));border:1px solid var(--gray-200, #e2e8f0);padding:.4rem .5rem .4rem .75rem;border-radius:999px;box-shadow:0 2px 4px #0000000a}.btn-complete[_ngcontent-%COMP%]{padding:.4rem 1.2rem;border-radius:999px;border:none;background:linear-gradient(180deg,#22c55e,#16a34a);color:#fff;font-size:.8125rem;font-weight:700;cursor:pointer;white-space:nowrap;margin:0;box-shadow:0 2px 4px #22c55e33;transition:all .2s ease}.btn-complete[_ngcontent-%COMP%]:hover:not(:disabled){background:linear-gradient(180deg,#16a34a,#15803d);transform:translateY(-1px);box-shadow:0 4px 8px #22c55e4d}.btn-complete[_ngcontent-%COMP%]:disabled{opacity:.6;cursor:default}.btn-complete--locked[_ngcontent-%COMP%]{background:var(--gray-300, #d1d5db);color:var(--gray-500, #6b7280);box-shadow:0 2px 4px #0000000a}.btn-complete--locked[_ngcontent-%COMP%]:hover{background:var(--gray-300, #d1d5db);box-shadow:0 2px 4px #0000000a;transform:none}.btn-icon.btn-view[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--teal-100, #ccfbf1);color:var(--teal-600, #0d9488)}.btn-icon[_ngcontent-%COMP%]{background:transparent;border:none;color:var(--gray-500, #6b7280);width:1.875rem;height:1.875rem;border-radius:50%;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;transition:all .2s ease-in-out;padding:0}.btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:1rem;height:1rem}.btn-icon[_ngcontent-%COMP%]:hover:not(:disabled){background-color:var(--indigo-100, #e0e7ff);color:var(--indigo-600, #4f46e5);transform:scale(1.05)}.btn-icon[_ngcontent-%COMP%]:disabled{opacity:.4;cursor:not-allowed}.empty-tasks[_ngcontent-%COMP%]{text-align:center;padding:2rem 1rem;color:var(--gray-500);width:100%;box-sizing:border-box}.error-banner[_ngcontent-%COMP%]{background:#ef44441a;border:1px solid rgba(239,68,68,.35);color:#dc2626;padding:.75rem 1rem;border-radius:.5rem;margin-bottom:.75rem;font-size:.875rem;width:100%;box-sizing:border-box}@media(min-width:641px){.section-header[_ngcontent-%COMP%]{padding-left:1.25rem;padding-right:1.25rem}.task-card[_ngcontent-%COMP%]{grid-template-columns:min-content 1fr auto;padding:1rem 1.25rem;align-items:center}.task-checkbox[_ngcontent-%COMP%]{padding-top:0;align-items:center}.task-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.task-actions[_ngcontent-%COMP%]{grid-column:3;grid-row:1;justify-self:auto;margin-top:0}.tag--recurrence[_ngcontent-%COMP%]{background:#0ea5e91f;color:#0284c7;border:1px solid rgba(14,165,233,.3)}.assignee-streak[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;color:#d97706;margin-left:.25rem;white-space:nowrap}.assignee-badge-icon[_ngcontent-%COMP%]{font-size:.85rem;margin-left:.2rem;cursor:default;line-height:1}}"]})};var Gc=(i,a)=>a.id;function Kc(i,a){i&1&&(l(0,"div",3)(1,"h3",8),m(2,"Edit Task"),d()())}function qc(i,a){if(i&1&&(l(0,"div",9),m(1),d()),i&2){let e=u(2);c(),V(e.errorMessage)}}function Xc(i,a){i&1&&(l(0,"div",10)(1,"span",40),m(2,"\u{1F512}"),d(),l(3,"span"),m(4,"This task is completed and locked. You can reopen it or create a copy."),d()())}function Zc(i,a){i&1&&(l(0,"p",15),m(1,"Task title is required."),d())}function $c(i,a){if(i&1&&(l(0,"mat-option",21),m(1),d()),i&2){let e=a.$implicit;y("value",e.id),c(),V(e.display_name)}}function Qc(i,a){i&1&&(l(0,"p",15),m(1,"Please assign this task to a member."),d())}function Jc(i,a){i&1&&(l(0,"p",15),m(1,"Please select a valid due date (today or later)."),d())}function em(i,a){i&1&&(l(0,"p",15),m(1,"Please select a difficulty level."),d())}function tm(i,a){if(i&1&&(l(0,"p",15),m(1),d()),i&2){let e=u(2);c(),V(e.getPointsErrorMessage())}}function nm(i,a){i&1&&(l(0,"p",34),m(1,"Points awarded to the member when they complete this task."),d())}function im(i,a){if(i&1&&(l(0,"p",15),m(1),d()),i&2){let e=u(3);c(),V(e.getRecurrenceErrorMessage())}}function am(i,a){if(i&1){let e=K();l(0,"div",41)(1,"span",42),m(2,"Repeat every"),d(),l(3,"mat-form-field",43)(4,"input",44),Z("ngModelChange",function(n){_(e);let o=u(2);return X(o.recurrence_interval_days,n)||(o.recurrence_interval_days=n),b(n)}),d()(),l(5,"span",42),m(6,"day(s)"),d()(),h(7,im,2,1,"p",15)}if(i&2){let e=u(2);c(4),q("ngModel",e.recurrence_interval_days),y("readonly",e.isLocked),c(3),f(e.showValidationErrors&&e.getRecurrenceErrorMessage()!==null?7:-1)}}function om(i,a){if(i&1){let e=K();h(0,qc,2,1,"div",9),h(1,Xc,5,0,"div",10),l(2,"div",11)(3,"label",12),m(4,"Task Title"),d(),l(5,"mat-form-field",13)(6,"input",14),Z("ngModelChange",function(n){_(e);let o=u();return X(o.title,n)||(o.title=n),b(n)}),d()(),h(7,Zc,2,0,"p",15),d(),l(8,"div",11)(9,"label",16),m(10,"Description "),l(11,"span",17),m(12,"(optional)"),d()(),l(13,"mat-form-field",13)(14,"textarea",18),Z("ngModelChange",function(n){_(e);let o=u();return X(o.description,n)||(o.description=n),b(n)}),d()()(),l(15,"div",11)(16,"label",19),m(17,"Assign To"),d(),l(18,"mat-form-field",13)(19,"mat-select",20),Z("ngModelChange",function(n){_(e);let o=u();return X(o.assigned_to,n)||(o.assigned_to=n),b(n)}),Ve(20,$c,2,2,"mat-option",21,Gc),d()(),h(22,Qc,2,0,"p",15),d(),l(23,"div",11)(24,"label",22),m(25,"Due Date"),d(),l(26,"mat-form-field",13)(27,"input",23),Z("ngModelChange",function(n){_(e);let o=u();return X(o.due_date,n)||(o.due_date=n),b(n)}),x("click",function(){_(e);let n=De(30),o=u();return b(!o.isLocked&&n.open())}),d(),H(28,"mat-datepicker-toggle",24)(29,"mat-datepicker",null,0),d(),h(31,Jc,2,0,"p",15),d(),l(32,"div",11)(33,"label"),m(34,"Difficulty"),d(),l(35,"mat-button-toggle-group",25),Z("ngModelChange",function(n){_(e);let o=u();return X(o.difficulty,n)||(o.difficulty=n),b(n)}),l(36,"mat-button-toggle",26),m(37,"Easy"),d(),l(38,"mat-button-toggle",27),m(39,"Medium"),d(),l(40,"mat-button-toggle",28),m(41,"Hard"),d()(),h(42,em,2,0,"p",15),d(),l(43,"div",11)(44,"label",29),m(45,"Point Value"),d(),l(46,"mat-form-field",30)(47,"span",31),m(48,"\u2B50"),d(),l(49,"input",32),Z("ngModelChange",function(n){_(e);let o=u();return X(o.points,n)||(o.points=n),b(n)}),d(),l(50,"span",33),m(51,"pts"),d()(),h(52,tm,2,1,"p",15)(53,nm,2,0,"p",34),d(),l(54,"div",35)(55,"div",36)(56,"div",37)(57,"span",38),m(58,"Recurring Task"),d(),l(59,"span",34),m(60,"Task resets automatically after completion"),d()(),l(61,"mat-slide-toggle",39),Z("ngModelChange",function(n){_(e);let o=u();return X(o.is_recurring,n)||(o.is_recurring=n),b(n)}),d()(),h(62,am,8,3),d()}if(i&2){let e=De(30),t=u();f(t.errorMessage?0:-1),c(),f(t.isLocked?1:-1),c(5),q("ngModel",t.title),y("readonly",t.isLocked),c(),f(t.showValidationErrors&&t.getNormalizedTitle()===null?7:-1),c(7),q("ngModel",t.description),y("readonly",t.isLocked),c(5),q("ngModel",t.assigned_to),y("disabled",t.isLocked),c(),Le(t.members),c(2),f(t.showValidationErrors&&t.getNormalizedAssignedTo()===null?22:-1),c(5),y("matDatepicker",e)("min",t.minDate),q("ngModel",t.due_date),c(),y("for",e)("disabled",t.isLocked),c(3),f(t.showValidationErrors&&t.getNormalizedDueDate()===null?31:-1),c(4),q("ngModel",t.difficulty),y("disabled",t.isLocked),c(7),f(t.showValidationErrors&&t.getNormalizedDifficulty()===null?42:-1),c(7),q("ngModel",t.points),y("readonly",t.isLocked),c(3),f(t.showValidationErrors&&t.getPointsErrorMessage()!==null?52:53),c(9),q("ngModel",t.is_recurring),y("disabled",t.isLocked),c(),f(t.is_recurring?62:-1)}}function rm(i,a){if(i&1&&(l(0,"div",48),m(1),d()),i&2){let e=u(2);c(),te("\u{1F501} Recurring \xB7 ",e.task.recurrence_interval_days===7?"Weekly":e.task.recurrence_interval_days===1?"Daily":e.task.recurrence_interval_days+" days")}}function sm(i,a){if(i&1&&(l(0,"div",50)(1,"div",51),m(2,"Status"),d(),l(3,"div",61)(4,"span",62),m(5),d()()()),i&2){let e=u(2);c(4),y("ngClass",e.getStatusClass(e.task)),c(),V(e.getStatusText(e.task))}}function lm(i,a){if(i&1&&(l(0,"div",58)(1,"div",63),m(2,"Description"),d(),l(3,"p",64),m(4),d()()),i&2){let e=u(2);c(4),V(e.task.description)}}function dm(i,a){if(i&1){let e=K();l(0,"button",65),x("click",function(){_(e);let n=u(2);return b(n.markAsComplete())}),m(1),d(),l(2,"div",66),m(3),d()}if(i&2){let e=u(2);y("disabled",e.isCompleting),c(),te(" ",e.isCompleting?"Completing...":"\u2713 Mark as Complete"," "),c(2),te("+",e.task.points," pts will be added to your score")}}function cm(i,a){i&1&&(l(0,"div",60),m(1,"This task is already completed."),d())}function mm(i,a){if(i&1&&(l(0,"div",5)(1,"div",45)(2,"div",46)(3,"h3",8),m(4),d(),l(5,"span",47),m(6),d()(),h(7,rm,2,1,"div",48),d(),l(8,"div",49)(9,"div",50)(10,"div",51),m(11,"Assigned to"),d(),l(12,"div",52)(13,"div",53),m(14),d(),l(15,"span",54),m(16),d()()(),l(17,"div",50)(18,"div",51),m(19,"Due date"),d(),l(20,"div",55),m(21),d()(),h(22,sm,6,2,"div",50),d(),l(23,"div",56)(24,"div",50)(25,"div",51),m(26,"Point Value"),d(),l(27,"div",57),m(28),d()(),l(29,"div",50)(30,"div",51),m(31,"Difficulty"),d(),l(32,"div",57),m(33),d()()(),h(34,lm,5,1,"div",58),l(35,"div",59),h(36,dm,4,3)(37,cm,2,0,"div",60),d()()),i&2){let e=u();c(4),V(e.task.title),c(2),V(e.task.difficulty),c(),f(e.task.is_recurring&&e.task.recurrence_interval_days?7:-1),c(7),V(e.getMemberName(e.task.assigned_to).charAt(0).toUpperCase()),c(2),V(e.getMemberName(e.task.assigned_to)),c(5),V(e.formatDueDate(e.task.due_date)),c(),f(e.isAdmin?-1:22),c(6),te("",e.task.points," pts"),c(5),V(e.task.difficulty),c(),f(e.task.description?34:-1),c(2),f(e.task.status!=="completed"?36:37)}}function um(i,a){if(i&1){let e=K();l(0,"button",73),x("click",function(){_(e);let n=u(2);return b(n.onReopen())}),m(1),d()}if(i&2){let e=u(2);y("disabled",e.isBusy),c(),te(" ",e.isReopening?"Reopening...":"\u21A9 Reopen Task"," ")}}function pm(i,a){if(i&1){let e=K();l(0,"button",73),x("click",function(){_(e);let n=u(2);return b(n.onReopen())}),m(1),d(),l(2,"button",74),x("click",function(){_(e);let n=u(2);return b(n.onCopy())}),m(3," Copy Task "),d()}if(i&2){let e=u(2);y("disabled",e.isBusy),c(),te(" ",e.isReopening?"Reopening...":"\u21A9 Reopen Task"," "),c(),y("disabled",e.isBusy)}}function hm(i,a){if(i&1){let e=K();l(0,"button",74),x("click",function(){_(e);let n=u(2);return b(n.submit())}),m(1),d()}if(i&2){let e=u(2);y("disabled",e.isBusy),c(),te(" ",e.isSubmitting?"Saving...":"Save Changes"," ")}}function fm(i,a){if(i&1){let e=K();l(0,"div",67)(1,"button",68),x("click",function(){_(e);let n=u();return b(n.deleteTask())}),m(2),d(),h(3,um,2,2,"button",69),d(),l(4,"div",70)(5,"button",71),x("click",function(){_(e);let n=u();return b(n.close())}),m(6,"Cancel"),d(),h(7,pm,4,3)(8,hm,2,2,"button",72),d()}if(i&2){let e=u();c(),y("disabled",e.isBusy),c(),te(" ",e.isDeleting?"Deleting...":"Delete Task"," "),c(),f(e.task.status==="completed"&&!e.isLocked?3:-1),c(2),y("disabled",e.isBusy),c(2),f(e.isLocked?7:8)}}function gm(i,a){if(i&1){let e=K();l(0,"button",75),x("click",function(){_(e);let n=u();return b(n.close())}),m(1,"Close"),d()}}var Bi=class i{taskService=s(st);cdr=s(J);toastr=s(Lt);task;members=[];isAdmin=!0;closed=new v;taskUpdated=new v;taskCopied=new v;title="";description="";assigned_to="";due_date="";difficulty="Easy";points=10;is_recurring=!1;recurrence_interval_days=7;minDate=new Date;isSubmitting=!1;isDeleting=!1;isReopening=!1;isCompleting=!1;errorMessage="";showValidationErrors=!1;ngOnInit(){if(this.task)if(this.title=this.task.title,this.description=this.task.description||"",this.assigned_to=this.task.assigned_to,this.difficulty=this.task.difficulty,this.points=this.task.points,this.is_recurring=this.task.is_recurring,this.recurrence_interval_days=this.task.recurrence_interval_days||7,this.task.due_date){let a=this.task.due_date.split("T")[0],[e,t,n]=a.split("-").map(Number);this.due_date=new Date(e,t-1,n)}else this.due_date=new Date}getLocalDateString(a){let e=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");return`${e}-${t}-${n}`}getNormalizedPoints(){let a=this.points;return a===null||!Number.isFinite(a)||!Number.isInteger(a)||a<0?null:a}getNormalizedTitle(){let a=this.title.trim();return a.length>0?a:null}getNormalizedAssignedTo(){if(typeof this.assigned_to!="string")return null;let a=this.assigned_to.trim();return a.length>0?a:null}getNormalizedDifficulty(){return this.difficulty==="Easy"||this.difficulty==="Medium"||this.difficulty==="Hard"?this.difficulty:null}getNormalizedDueDate(){if(this.due_date instanceof Date){let a=new Date;a.setHours(0,0,0,0);let e=new Date(this.due_date);return e.setHours(0,0,0,0),e.getTime()<a.getTime()?null:this.getLocalDateString(this.due_date)}if(typeof this.due_date=="string"&&this.due_date.trim().length>0){let a=new Date(this.due_date.split("T")[0]);a.setHours(0,0,0,0);let e=new Date;return e.setHours(0,0,0,0),a.getTime()<e.getTime()?null:this.due_date}return null}getNormalizedRecurrenceInterval(){if(!this.is_recurring)return null;let a=this.recurrence_interval_days;return a===null||!Number.isFinite(a)||!Number.isInteger(a)||a<1?null:a}getPointsErrorMessage(){return this.points===null?"Points are required.":this.points<0?"Points cannot be negative.":Number.isInteger(this.points)?null:"Points must be a whole number (no decimals)."}getRecurrenceErrorMessage(){if(!this.is_recurring)return null;let a=this.recurrence_interval_days;return a===null?"Recurrence interval is required.":!Number.isInteger(a)||a<1?"Interval must be a whole number of at least 1.":null}get isFormValid(){let a=!this.is_recurring||this.getNormalizedRecurrenceInterval()!==null;return this.getNormalizedTitle()!==null&&this.getNormalizedAssignedTo()!==null&&this.getNormalizedDifficulty()!==null&&this.getNormalizedDueDate()!==null&&this.getNormalizedPoints()!==null&&a}get isBusy(){return this.isSubmitting||this.isDeleting||this.isReopening}get isLocked(){return this.task.status==="completed"&&!this.task.is_recurring}onCopy(){this.taskCopied.emit({title:this.title,description:this.description,difficulty:this.difficulty,points:this.points||void 0,assigned_to:this.assigned_to||void 0}),this.close()}deleteTask(){this.isBusy||confirm("Are you sure you want to delete this task? This cannot be undone.")&&(this.isDeleting=!0,this.errorMessage="",this.cdr.detectChanges(),this.taskService.deleteTask(this.task.id).subscribe({next:()=>{this.isDeleting=!1,this.toastr.error(`"${this.task.title}" has been permanently deleted.`,"\u{1F5D1}\uFE0F Task Deleted",{timeOut:4e3}),this.close()},error:a=>{this.isDeleting=!1,this.errorMessage=a.message||"A network error occurred.",this.cdr.detectChanges()}}))}onReopen(){this.isBusy||(this.isReopening=!0,this.errorMessage="",this.cdr.detectChanges(),this.taskService.reopenTask(this.task.id).subscribe({next:()=>{this.isReopening=!1,this.toastr.success(`"${this.task.title}" is back in the queue.`,"\u{1F504} Task Reopened",{timeOut:4e3}),this.taskUpdated.emit(),this.close()},error:a=>{this.isReopening=!1,this.errorMessage=a.message,this.cdr.detectChanges()}}))}markAsComplete(){if(this.isCompleting||this.task.status==="completed")return;this.isCompleting=!0,this.errorMessage="",this.cdr.detectChanges();let a=this.task.due_date||"";this.taskService.completeTask(this.task.id,a).subscribe({next:()=>{this.isCompleting=!1,this.toastr.success(`Great! "${this.task.title}" was marked complete.`,"Task Completed",{timeOut:3500}),this.taskUpdated.emit(),this.close()},error:e=>{this.isCompleting=!1,this.errorMessage=e.message||"A network error occurred.",this.cdr.detectChanges()}})}submit(){if(!this.isFormValid){this.showValidationErrors=!0;return}if(this.isBusy)return;this.isSubmitting=!0,this.errorMessage="";let a=this.getNormalizedTitle(),e=this.getNormalizedAssignedTo(),t=this.getNormalizedDueDate(),n=this.getNormalizedDifficulty(),o=this.getNormalizedPoints(),r={title:a,description:this.description.trim()||void 0,assigned_to:e,due_date:t,difficulty:n,points:o,is_recurring:this.is_recurring,recurrence_interval_days:this.is_recurring?this.getNormalizedRecurrenceInterval():null};this.taskService.updateTask(this.task.id,r).subscribe({next:()=>{this.isSubmitting=!1,this.toastr.success("Task details have been updated.","Changes Saved",{timeOut:3500}),this.taskUpdated.emit(),this.close()},error:p=>{this.isSubmitting=!1,this.errorMessage=p.message,this.cdr.detectChanges()}})}getMemberName(a){let e=this.members.find(t=>t.id===a);return e?e.display_name:"Unknown"}formatDueDate(a){if(!a)return"No due date";let e=new Date(a);if(isNaN(e.getTime()))return"Invalid date";let t=new Date;t.setHours(0,0,0,0),e.setHours(0,0,0,0);let n=(e.getTime()-t.getTime())/(1e3*60*60*24);return n<0?`Was due: ${e.toLocaleDateString("en-US",{month:"short",day:"numeric"})}`:n===0?"Today":n===1?"Tomorrow":e.toLocaleDateString("en-US",{month:"short",day:"numeric"})}isTooEarly(a,e){if(!a||!e)return!1;let t=new Date(a),n=new Date;if(n.setHours(0,0,0,0),t.setHours(0,0,0,0),e===1)return t.getTime()>n.getTime();let o=new Date(t);return o.setDate(t.getDate()-e),n.getTime()<o.getTime()}isCooldown(a){return this.isTooEarly(a.due_date,a.recurrence_interval_days)&&!!a.completed_at}isOverdue(a){if(!a.due_date||a.status==="completed")return!1;let e=new Date(a.due_date),t=new Date;return t.setHours(0,0,0,0),e.setHours(0,0,0,0),(e.getTime()-t.getTime())/(1e3*60*60*24)<0}getStatusText(a){return a.status==="completed"?"Completed":this.isOverdue(a)?"Overdue":this.isCooldown(a)?"Not Due Yet":"Active"}getStatusClass(a){return a.status==="completed"?"status-badge--completed":this.isOverdue(a)?"status-badge--overdue":this.isCooldown(a)?"status-badge--not-due":"status-badge--active"}close(){this.closed.emit()}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-edit-task"]],inputs:{task:"task",members:"members",isAdmin:"isAdmin"},outputs:{closed:"closed",taskUpdated:"taskUpdated",taskCopied:"taskCopied"},features:[oe([Vi()])],decls:9,vars:5,consts:[["picker",""],[1,"modal-backdrop",3,"click"],["role","dialog","aria-modal","true","aria-labelledby","task-modal-title",1,"modal-card","card",3,"click"],[1,"modal-header"],[1,"modal-body"],[1,"detail-view","detail-wireframe"],[1,"modal-footer"],[1,"btn","btn--outline"],["id","task-modal-title"],[1,"error-banner"],[1,"locked-form-banner"],[1,"form-group"],["for","task-title"],["appearance","outline",1,"material-field","no-floating-label"],["matInput","","id","task-title","type","text","placeholder","e.g. Take out trash","maxlength","100",1,"material-field",3,"ngModelChange","ngModel","readonly"],[1,"field-error-text"],["for","task-description"],[1,"optional-label"],["matInput","","id","task-description","placeholder","Add details or instructions for this chore...","rows","3","maxlength","500",3,"ngModelChange","ngModel","readonly"],["for","task-assignee"],["id","task-assignee","panelClass","custom-select-panel","placeholder","Select a member...",1,"material-field",3,"ngModelChange","ngModel","disabled"],[3,"value"],["for","task-due"],["matInput","","id","task-due","readonly","",1,"material-field",3,"ngModelChange","click","matDatepicker","min","ngModel"],["matSuffix","",3,"for","disabled"],["name","difficulty","aria-label","Task difficulty",1,"difficulty-toggle-group",3,"ngModelChange","ngModel","disabled"],["value","Easy",1,"easy-toggle"],["value","Medium",1,"medium-toggle"],["value","Hard",1,"hard-toggle"],["for","task-points"],["appearance","outline",1,"material-field","points-field","no-floating-label"],["matPrefix","",1,"points-prefix"],["matInput","","id","task-points","type","number","min","0","step","1","placeholder","e.g. 10",1,"material-field",3,"ngModelChange","ngModel","readonly"],["matSuffix","",1,"points-suffix"],[1,"form-hint"],[1,"form-group","recurring-group"],[1,"recurring-toggle-row"],[1,"recurring-label-block"],[1,"form-group-label"],["color","primary","aria-label","Toggle recurring task",3,"ngModelChange","ngModel","disabled"],[1,"locked-icon"],[1,"recurrence-interval-row"],[1,"recurring-interval-text"],["appearance","outline",1,"material-field","interval-field","no-floating-label"],["matInput","","type","number","min","1","step","1","placeholder","7",1,"material-field",3,"ngModelChange","ngModel","readonly"],[1,"detail-top"],[1,"title-row"],[1,"pill","difficulty-pill"],[1,"recurring-pill"],[1,"stat-cards"],[1,"stat-card"],[1,"stat-label"],[1,"assignee-badge"],[1,"assignee-avatar"],[1,"assignee-name"],[1,"due-value"],[1,"stat-cards","pt-0"],[1,"stat-value"],[1,"description-box"],[1,"detail-actions"],[1,"completed-note"],[1,"status-value"],[1,"status-badge",3,"ngClass"],[1,"desc-label"],[1,"desc-text"],[1,"btn","btn--primary","btn--complete-large",3,"click","disabled"],[1,"points-note"],[1,"footer-left"],[1,"btn","btn--danger",3,"click","disabled"],[1,"btn","btn--reopen",3,"disabled"],[1,"footer-actions"],[1,"btn","btn--outline",3,"click","disabled"],[1,"btn","btn--primary",3,"disabled"],[1,"btn","btn--reopen",3,"click","disabled"],[1,"btn","btn--primary",3,"click","disabled"],[1,"btn","btn--outline",3,"click"]],template:function(e,t){e&1&&(l(0,"div",1),x("click",function(){return t.close()}),l(1,"div",2),x("click",function(o){return o.stopPropagation()}),h(2,Kc,3,0,"div",3),l(3,"div",4),h(4,om,63,25)(5,mm,38,11,"div",5),d(),l(6,"div",6),h(7,fm,9,5)(8,gm,2,0,"button",7),d()()()),e&2&&(c(2),f(t.isAdmin?2:-1),c(),O("locked-form",t.isLocked),c(),f(t.isAdmin?4:5),c(3),f(t.isAdmin?7:8))},dependencies:[rt,bo,Vt,Ot,Pt,It,Xn,Ft,Rt,et,Qt,On,An,Si,Ei,Mi,Di,an,Fn,Ai,Oi,ut,Ri,Vn,on,Fi,Ln],styles:[".modal-backdrop[_ngcontent-%COMP%]{position:fixed;inset:0;background:#00000073;display:flex;align-items:center;justify-content:center;z-index:100;padding:1rem}.modal-card[_ngcontent-%COMP%]{width:100%;max-width:560px;padding:0;overflow:hidden;background:linear-gradient(180deg,#fff,#fbfbff);border-radius:.75rem;box-shadow:0 20px 40px #10182826}.modal-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:1rem 1.25rem;border-bottom:1px solid rgba(229,231,235,.8);background:#fff}.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.125rem;font-weight:800;color:#111827}.status-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:.15rem .5rem;border-radius:9999px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em;color:#fff;width:fit-content}.status-badge--overdue[_ngcontent-%COMP%]{background:#ef44441f;color:#dc2626;border:1px solid rgba(239,68,68,.3)}.status-badge--not-due[_ngcontent-%COMP%]{background:#6366f11a;color:#4338ca;border:1px solid rgba(99,102,241,.18)}.status-badge--active[_ngcontent-%COMP%]{background:#6366f11f;color:#4f46e5;border:1px solid rgba(99,102,241,.24)}.close-btn[_ngcontent-%COMP%]{background:none;border:none;font-size:1rem;color:var(--gray-500);cursor:pointer;padding:.25rem;line-height:1}.close-btn[_ngcontent-%COMP%]:hover{color:#1f2937}.modal-body[_ngcontent-%COMP%]{padding:1.25rem;display:flex;flex-direction:column;gap:1.25rem;max-height:75vh;overflow-y:auto}.error-banner[_ngcontent-%COMP%]{background:var(--red-100);color:#b91c1c;border-radius:.5rem;padding:.6rem .875rem;font-size:.85rem;font-weight:500}.locked-form-banner[_ngcontent-%COMP%]{background:#f59e0b1a;color:#b45309;border:1px solid rgba(245,158,11,.3);padding:.75rem 1rem;border-radius:.5rem;font-size:.85rem;font-weight:600;display:flex;align-items:center;gap:.5rem}.locked-icon[_ngcontent-%COMP%]{font-size:1rem}.locked-form[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%], .locked-form[_ngcontent-%COMP%]   .recurring-group[_ngcontent-%COMP%], .locked-form[_ngcontent-%COMP%]   .difficulty-toggle-group[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]:not(.mat-button-toggle-checked){background-color:#f3f4f6!important;opacity:.8}.locked-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .locked-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .locked-form[_ngcontent-%COMP%]   .mat-mdc-select-value-text[_ngcontent-%COMP%], .locked-form[_ngcontent-%COMP%]   .difficulty-toggle-group[_ngcontent-%COMP%]   .mat-button-toggle[_ngcontent-%COMP%]:not(.mat-button-toggle-checked)   .mat-button-toggle-label-content[_ngcontent-%COMP%]{color:#6b7280!important}.form-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.3rem}.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .form-group-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600;color:var(--gray-700);letter-spacing:.02em}.field-error-text[_ngcontent-%COMP%]{color:#b91c1c;font-size:.75rem;font-weight:600;margin:0}.form-hint[_ngcontent-%COMP%]{margin:0;font-size:.75rem;color:var(--gray-400)}.optional-label[_ngcontent-%COMP%]{font-weight:400;color:var(--gray-400);text-transform:none;letter-spacing:0}.status-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;padding:.2rem .65rem;border-radius:9999px;font-size:.7rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;width:fit-content;max-width:100%}.status-badge--completed[_ngcontent-%COMP%]{background:#22c55e1f;color:#16a34a;border:1px solid rgba(34,197,94,.3)}.status-badge--active[_ngcontent-%COMP%]{background:#6366f126;color:#4f46e5;border:1px solid rgba(99,102,241,.3)}.detail-header-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.4rem}.detail-view[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.1rem}.detail-wireframe[_ngcontent-%COMP%]{gap:.75rem}.detail-row[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.3rem}.detail-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:700;color:var(--gray-400);text-transform:uppercase;letter-spacing:.07em}.detail-value[_ngcontent-%COMP%]{font-size:.9rem;font-weight:500;color:#1f2937}.detail-text[_ngcontent-%COMP%]{font-size:.875rem;color:#374151;line-height:1.55;margin:0;white-space:pre-wrap}.detail-difficulty[_ngcontent-%COMP%]{display:inline-flex;padding:.2rem .65rem;border-radius:9999px;font-size:.72rem;font-weight:700;text-transform:uppercase;letter-spacing:.04em;width:fit-content}.detail-difficulty--easy[_ngcontent-%COMP%]{background:#22c55e1f;color:#16a34a;border:1px solid rgba(34,197,94,.3)}.detail-difficulty--medium[_ngcontent-%COMP%]{background:#facc151f;color:#d97706;border:1px solid rgba(250,204,21,.3)}.detail-difficulty--hard[_ngcontent-%COMP%]{background:#ef444426;color:#dc2626;border:1px solid rgba(239,68,68,.35)}.detail-late[_ngcontent-%COMP%]{color:#dc2626;font-weight:600}.assignee-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.25rem .6rem .25rem .25rem;background:var(--gray-50, #f9fafb);border:1px solid var(--gray-200, #e5e7eb);border-radius:2rem;width:fit-content}.assignee-avatar[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem;border-radius:50%;background:var(--indigo-100, #e0e7ff);color:var(--indigo-700, #4338ca);display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700}.assignee-name[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;color:var(--gray-600, #4b5563)}.material-field[_ngcontent-%COMP%]{width:100%}  .material-field .mat-mdc-form-field-subscript-wrapper{display:none!important}  .no-floating-label .mdc-notched-outline__notch{border-right:none!important}  .material-field .mat-mdc-text-field-wrapper{background:#fff;border-radius:.5rem}  .mdc-text-field{padding:0 8px!important}  .material-field .mat-mdc-form-field-infix{padding:.6rem .5rem!important;min-height:auto!important}  .material-field .mdc-notched-outline__leading,   .material-field .mdc-notched-outline__notch,   .material-field .mdc-notched-outline__trailing{border-color:var(--gray-300)!important}  .material-field.mat-focused .mdc-notched-outline__leading,   .material-field.mat-focused .mdc-notched-outline__notch,   .material-field.mat-focused .mdc-notched-outline__trailing{border-color:var(--indigo-600)!important}  .material-field .mat-mdc-input-element,   .material-field .mat-mdc-select-value{color:#1f2937;font-size:.9rem}  .material-field .mat-mdc-select-arrow,   .material-field .mat-datepicker-toggle-default-icon{color:var(--gray-500)}  .material-field .mat-mdc-input-element::placeholder,   .material-field .mat-mdc-select-placeholder{color:var(--gray-400)!important;-webkit-text-fill-color:var(--gray-400)!important;font-weight:400!important;opacity:1!important}.points-prefix[_ngcontent-%COMP%]{font-size:1rem;line-height:1;margin-left:.375rem}.points-suffix[_ngcontent-%COMP%]{font-size:.85rem;color:var(--gray-500);font-weight:600;margin:0 .375rem}  .points-field input[type=number]{appearance:textfield}  .points-field input[type=number]::-webkit-inner-spin-button,   .points-field input[type=number]::-webkit-outer-spin-button{display:none}  .custom-select-panel{border-radius:.5rem!important;box-shadow:0 10px 25px #00000026!important;margin-top:4px!important;background-color:#fff!important}  .mat-datepicker-content{background-color:#fff!important;box-shadow:0 10px 25px #0003!important;border-radius:.75rem!important;border:1px solid var(--gray-200)!important;padding:0!important;margin:0!important}  .cdk-overlay-pane{z-index:9999!important;padding:0!important}  .mat-calendar{color:var(--gray-700)!important;background-color:#fff!important;height:fit-content!important}  .mat-calendar-body-selected{background-color:var(--indigo-600)!important;color:#fff!important}  .mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:var(--indigo-600)!important}  .mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:#4f46e51a!important}  .mat-calendar-period-button{color:var(--gray-700)!important;font-weight:700!important}.difficulty-toggle-group[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:.5rem}  .mat-button-toggle-group{border:0!important}  .difficulty-toggle-group .mat-button-toggle{border:none!important;border-radius:.5rem!important;overflow:hidden;background:#f9fafb!important}  .difficulty-toggle-group .mat-button-toggle-label-content{line-height:2.25rem;padding:0;font-size:.8rem;font-weight:600}  .difficulty-toggle-group .mat-button-toggle-checked.easy-toggle{background:var(--emerald-100)!important}  .difficulty-toggle-group .mat-button-toggle-checked.medium-toggle{background:#fef3c7!important}  .difficulty-toggle-group .mat-button-toggle-checked.hard-toggle{background:var(--red-100)!important}  .difficulty-toggle-group .mat-button-toggle-checked.easy-toggle .mat-button-toggle-label-content{color:#065f46!important}  .difficulty-toggle-group .mat-button-toggle-checked.medium-toggle .mat-button-toggle-label-content{color:#92400e!important}  .difficulty-toggle-group .mat-button-toggle-checked.hard-toggle .mat-button-toggle-label-content{color:#b91c1c!important}  .difficulty-toggle-group .easy-toggle.mat-button-toggle-checked .mat-pseudo-checkbox:after{border-color:var(--emerald-500)!important}  .difficulty-toggle-group .medium-toggle.mat-button-toggle-checked .mat-pseudo-checkbox:after{border-color:#f59e0b!important}  .difficulty-toggle-group .hard-toggle.mat-button-toggle-checked .mat-pseudo-checkbox:after{border-color:var(--red-500)!important}.recurring-group[_ngcontent-%COMP%]{border:1px solid var(--gray-200);border-radius:.6rem;padding:.875rem 1rem;background:#fafafa;gap:.625rem}.recurring-toggle-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem}.recurring-label-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.2rem}  .recurring-group .mdc-switch--selected .mdc-switch__track{background-color:var(--indigo-600)!important}  .recurring-group .mdc-switch--selected .mdc-switch__handle:after{background-color:#fff!important}  .recurring-group .mdc-switch--selected .mdc-switch__icon{fill:var(--indigo-600)!important}.recurrence-interval-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.625rem;margin-top:.5rem}.recurring-interval-text[_ngcontent-%COMP%]{font-size:.8rem;font-weight:600;color:var(--gray-700);white-space:nowrap}.interval-field[_ngcontent-%COMP%]{width:80px!important;flex-shrink:0}.status-badge[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:.2rem .6rem;border-radius:999px;width:fit-content;max-width:100%}.status-badge--completed[_ngcontent-%COMP%]{background:var(--emerald-100);color:var(--emerald-600)}.detail-actions[_ngcontent-%COMP%]{padding:0 1.25rem 1rem;display:flex;flex-direction:column;align-items:center;gap:.35rem}.btn--complete-large[_ngcontent-%COMP%]{width:100%;max-width:520px;padding:.9rem 1.1rem;font-size:1.05rem;font-weight:800;background:linear-gradient(90deg,#10b981,#059669);color:#fff;border-radius:12px;border:none;box-shadow:0 10px 30px #065f461f;cursor:pointer}.btn--complete-large[_ngcontent-%COMP%]:disabled{opacity:.7;cursor:not-allowed}.completed-note[_ngcontent-%COMP%]{color:var(--gray-600);font-weight:600}.detail-wireframe[_ngcontent-%COMP%]   .detail-top[_ngcontent-%COMP%]{padding:0 1.25rem .75rem;border-bottom:1px solid var(--gray-100)}.title-row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;gap:.75rem;margin-bottom:.5rem}.title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:800;color:#111827}.pill[_ngcontent-%COMP%]{display:inline-flex;padding:.25rem .6rem;border-radius:999px;font-weight:700;font-size:.8rem}.difficulty-pill[_ngcontent-%COMP%]{background:#fff7ed;color:#92400e;border:1px solid rgba(245,158,11,.12)}.recurring-pill[_ngcontent-%COMP%]{display:inline-block;margin:.5rem 0 .75rem;padding:.35rem .75rem;background:#ecf2ffa6;color:#4f46e5;border-radius:999px;font-weight:700;font-size:.82rem}.due-value[_ngcontent-%COMP%]{color:#dc2626;font-weight:700;font-size:.9rem}.status-value[_ngcontent-%COMP%]{margin-top:-.1rem}.stat-cards[_ngcontent-%COMP%]{display:flex;gap:.75rem;padding:1rem 1.25rem}.pt-0[_ngcontent-%COMP%]{padding-top:0!important}.stat-card[_ngcontent-%COMP%]{flex:1 1 0;background:#fff;border:1px solid var(--gray-200);border-radius:.5rem;padding:.9rem;text-align:left}.stat-label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--gray-400);font-weight:700;margin-bottom:.35rem}.stat-value[_ngcontent-%COMP%]{font-size:1.125rem;font-weight:800;color:#1f2937}.description-box[_ngcontent-%COMP%]{margin:.5rem 1.25rem .75rem;padding:.9rem;background:#fff;border:1px solid var(--gray-200);border-radius:.5rem}.desc-label[_ngcontent-%COMP%]{font-size:.75rem;color:var(--gray-400);font-weight:700;margin-bottom:.4rem}.desc-text[_ngcontent-%COMP%]{margin:0;font-size:.95rem;color:#374151;line-height:1.45}.points-note[_ngcontent-%COMP%]{text-align:center;font-size:.82rem;color:var(--gray-400);line-height:1.2}.modal-footer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end;padding:1rem 1.25rem;border-top:1px solid var(--gray-200);gap:.75rem}.footer-left[_ngcontent-%COMP%]{display:flex;gap:.5rem}.footer-actions[_ngcontent-%COMP%]{display:flex;gap:.75rem}.btn[_ngcontent-%COMP%]{padding:.5rem 1.25rem;border-radius:.5rem;font-weight:600;font-size:.875rem;cursor:pointer;border:none;transition:opacity .15s,background-color .15s}.btn[_ngcontent-%COMP%]:disabled{opacity:1;cursor:not-allowed}.btn--primary[_ngcontent-%COMP%]{background:var(--indigo-600);color:#fff}.btn--primary[_ngcontent-%COMP%]:disabled{background:#a5a1f6;color:#f5f3ff}.btn--primary[_ngcontent-%COMP%]:hover:not(:disabled){background:#4338ca}.btn--outline[_ngcontent-%COMP%]{background:transparent;color:var(--gray-700);border:1px solid var(--gray-300)}.btn--outline[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--gray-100)}.btn--danger[_ngcontent-%COMP%]{background:transparent;color:#dc2626;border:1px solid #fca5a5}.btn--danger[_ngcontent-%COMP%]:hover:not(:disabled){background:#fef2f2}.btn--reopen[_ngcontent-%COMP%]{background:transparent;color:var(--indigo-600);border:1px solid var(--indigo-200)}.btn--reopen[_ngcontent-%COMP%]:hover:not(:disabled){background:var(--indigo-100)}"]})};function Ds(i){let a=i.streak??0,e=i.points??0,t=i.total_tasks_completed??0;return{uid:i.uid??"",streak:a,badges:Ao(t,e),streakDisplay:Io(a)}}var _m=()=>[],bm=(i,a)=>a.id;function vm(i,a){i&1&&(l(0,"div",1),H(1,"div",2),l(2,"p"),m(3,"Syncing with ChoreQuest..."),d()())}function ym(i,a){if(i&1){let e=K();l(0,"div",36),x("click",function(){_(e);let n=u(),o=u(2);return b(o.copyInviteCode(n.invite_code))}),l(1,"span",37),m(2,"INVITE CODE"),d(),l(3,"span",38),m(4),d(),l(5,"span",39),m(6,"\u{1F4CB} Tap to copy & send"),d()()}if(i&2){let e=u();c(4),V(e.invite_code)}}function xm(i,a){i&1&&(l(0,"div",8),m(1,"Group is Full (6/6)"),d())}function Cm(i,a){if(i&1&&(l(0,"option",17),m(1),d()),i&2){let e=u().$implicit;y("value",e.id),c(),V(e.display_name)}}function wm(i,a){if(i&1&&h(0,Cm,2,2,"option",17),i&2){let e=a.$implicit,t=u(3);f(e.id!==(t.currentUser==null?null:t.currentUser.uid)?0:-1)}}function km(i,a){i&1&&(l(0,"span",26),m(1,"Max must be \u2265 Min"),d())}function Dm(i,a){if(i&1){let e=K();l(0,"div",4)(1,"div",5)(2,"h2"),m(3),d(),l(4,"p"),m(5),d()(),l(6,"div",6),h(7,ym,7,1,"div",7)(8,xm,2,0,"div",8),d()(),l(9,"div",9)(10,"div",10)(11,"label"),m(12,"Status"),d(),l(13,"select",11),Z("ngModelChange",function(n){_(e);let o=u(2);return X(o.filterState.status,n)||(o.filterState.status=n),b(n)}),x("change",function(){_(e);let n=u(2);return b(n.onFilterChange())}),l(14,"option",12),m(15,"Any"),d(),l(16,"option",13),m(17,"Active"),d(),l(18,"option",14),m(19,"Pending (On Time)"),d(),l(20,"option",15),m(21,"Overdue \u26A0\uFE0F"),d(),l(22,"option",16),m(23,"Completed"),d()()(),l(24,"div",10)(25,"label"),m(26,"Assignee"),d(),l(27,"select",11),Z("ngModelChange",function(n){_(e);let o=u(2);return X(o.filterState.assignee,n)||(o.filterState.assignee=n),b(n)}),x("change",function(){_(e);let n=u(2);return b(n.onFilterChange())}),l(28,"option",12),m(29,"Everyone"),d(),l(30,"option",17),m(31,"Assigned to Me"),d(),Ve(32,wm,1,1,null,null,bm),d()(),l(34,"div",10)(35,"label"),m(36,"Difficulty"),d(),l(37,"select",11),Z("ngModelChange",function(n){_(e);let o=u(2);return X(o.filterState.difficulty,n)||(o.filterState.difficulty=n),b(n)}),x("change",function(){_(e);let n=u(2);return b(n.onFilterChange())}),l(38,"option",12),m(39,"Any"),d(),l(40,"option",18),m(41,"Easy"),d(),l(42,"option",19),m(43,"Medium"),d(),l(44,"option",20),m(45,"Hard"),d()()(),l(46,"div",21)(47,"label"),m(48,"Points Range"),d(),l(49,"div",22)(50,"input",23),Z("ngModelChange",function(n){_(e);let o=u(2);return X(o.filterState.pointsMin,n)||(o.filterState.pointsMin=n),b(n)}),x("ngModelChange",function(){_(e);let n=u(2);return b(n.onFilterChange())}),d(),l(51,"span",24),m(52,"-"),d(),l(53,"input",25),Z("ngModelChange",function(n){_(e);let o=u(2);return X(o.filterState.pointsMax,n)||(o.filterState.pointsMax=n),b(n)}),x("ngModelChange",function(){_(e);let n=u(2);return b(n.onFilterChange())}),d()(),h(54,km,2,0,"span",26),d(),l(55,"div",10)(56,"label"),m(57,"Recurring"),d(),l(58,"select",11),Z("ngModelChange",function(n){_(e);let o=u(2);return X(o.filterState.recurring,n)||(o.filterState.recurring=n),b(n)}),x("change",function(){_(e);let n=u(2);return b(n.onFilterChange())}),l(59,"option",12),m(60,"Any"),d(),l(61,"option",27),m(62,"Recurring"),d(),l(63,"option",28),m(64,"One-time"),d()()(),H(65,"div",29),l(66,"div",10)(67,"label"),m(68,"Sort By"),d(),l(69,"select",11),Z("ngModelChange",function(n){_(e);let o=u(2);return X(o.filterState.sortBy,n)||(o.filterState.sortBy=n),b(n)}),x("change",function(){_(e);let n=u(2);return b(n.onFilterChange())}),l(70,"option",30),m(71,"Due Date"),d(),l(72,"option",31),m(73,"Difficulty"),d(),l(74,"option",32),m(75,"Points"),d()()(),l(76,"div",10)(77,"label"),m(78,"Direction"),d(),l(79,"select",11),Z("ngModelChange",function(n){_(e);let o=u(2);return X(o.filterState.sortDir,n)||(o.filterState.sortDir=n),b(n)}),x("change",function(){_(e);let n=u(2);return b(n.onFilterChange())}),l(80,"option",33),m(81,"Ascending \u2B06\uFE0F"),d(),l(82,"option",34),m(83,"Descending \u2B07\uFE0F"),d()()()(),l(84,"app-task-list",35),mn(85,"async"),x("completeTask",function(n){_(e);let o=u(2);return b(o.completeTask(n))})("openCreateTask",function(){_(e);let n=u(2);return b(n.openCreateTask())})("editTask",function(n){_(e);let o=u(2);return b(o.openEditTask(n))}),d()}if(i&2){let e=a,t=u(2);c(3),V(e.name),c(2),cn(" ",e.member_count," ",e.member_count===1?"member":"members"," "),c(2),f(e.is_full?8:7),c(6),q("ngModel",t.filterState.status),c(14),q("ngModel",t.filterState.assignee),c(3),y("value",t.currentUser==null?null:t.currentUser.uid),c(2),Le(e.members),c(5),q("ngModel",t.filterState.difficulty),c(13),q("ngModel",t.filterState.pointsMin),c(3),q("ngModel",t.filterState.pointsMax),c(),f(t.filterState.pointsMin!==null&&t.filterState.pointsMax!==null&&t.filterState.pointsMin>t.filterState.pointsMax?54:-1),c(4),q("ngModel",t.filterState.recurring),c(11),q("ngModel",t.filterState.sortBy),c(10),q("ngModel",t.filterState.sortDir),c(5),y("tasks",un(85,21,t.filteredTasks$)??uo(23,_m))("household",e)("currentUserUid",(t.currentUser==null?null:t.currentUser.uid)??"")("isAdmin",t.isAdmin(e))("tasksLoadError",t.tasksLoadError)("processingTaskIds",t.processingTaskIds)("memberStatsMap",t.memberStatsMap)}}function Mm(i,a){i&1&&(l(0,"div",3)(1,"h2"),m(2,"You need a Household"),d(),l(3,"p"),m(4,"Join an existing household or create a new one to get started."),d(),l(5,"div",40)(6,"button",41),m(7,"Create"),d(),l(8,"button",42),m(9,"Join"),d()()())}function Em(i,a){if(i&1&&(h(0,Dm,86,24),mn(1,"async"),so(2,Mm,10,0,"div",3)),i&2){let e,t=u();f((e=un(1,1,t.household$))?0:2,e)}}function Sm(i,a){if(i&1){let e=K();l(0,"app-create-task",44),x("closed",function(){_(e);let n=u(2);return b(n.closeCreateTask())})("taskCreated",function(){_(e);let n=u(2);return b(n.onTaskCreated())}),d()}if(i&2){let e=u(2);y("members",e.getMembers(a))("template",e.taskTemplate)}}function Tm(i,a){if(i&1&&(h(0,Sm,1,2,"app-create-task",43),mn(1,"async")),i&2){let e,t=u();f((e=un(1,1,t.household$))?0:-1,e)}}function Om(i,a){if(i&1){let e=K();l(0,"app-edit-task",46),x("closed",function(){_(e);let n=u(2);return b(n.closeEditTask())})("taskUpdated",function(){_(e);let n=u(2);return b(n.onTaskUpdated())})("taskCopied",function(n){_(e);let o=u(2);return b(o.onTaskCopied(n))}),d()}if(i&2){let e=a,t=u(2);y("task",t.taskToEdit)("members",t.getMembers(e))("isAdmin",t.isAdmin(e))}}function Am(i,a){if(i&1&&(h(0,Om,1,3,"app-edit-task",45),mn(1,"async")),i&2){let e,t=u();f((e=un(1,1,t.household$))?0:-1,e)}}var Ms=class i{auth=s(Mo);router=s(wo);householdService=s(Ro);taskService=s(st);cdr=s(J);firestore=s(Eo);toastr=s(Lt);household$=this.householdService.household$;filterState={status:"Active",assignee:"All",difficulty:"All",pointsMin:null,pointsMax:null,recurring:"All",sortBy:"dueDate",sortDir:"asc"};filters$=new Bn(this.filterState);allTasks$=this.taskService.tasks$;filteredTasks$=zn([this.taskService.tasks$,this.filters$]).pipe(Ie(([a,e])=>a.filter(n=>{if(e.status!=="All"){let o=n.status==="completed",r=!1;if(!o&&n.due_date){let p=new Date(n.due_date),g=new Date;g.setHours(0,0,0,0),p.setHours(0,0,0,0),r=p.getTime()<g.getTime()}if(e.status==="Active"&&o||e.status==="Completed"&&!o||e.status==="Overdue"&&!r||e.status==="Pending"&&(o||r))return!1}return!(e.assignee!=="All"&&n.assigned_to!==e.assignee||e.difficulty!=="All"&&n.difficulty!==e.difficulty||e.recurring==="Yes"&&!n.is_recurring||e.recurring==="No"&&n.is_recurring||e.pointsMin!==null&&n.points<e.pointsMin||e.pointsMax!==null&&n.points>e.pointsMax&&(e.pointsMin===null||e.pointsMax>=e.pointsMin))}).sort((n,o)=>{let r=0;if(e.sortBy==="points")r=n.points-o.points;else if(e.sortBy==="difficulty"){let p={Easy:1,Medium:2,Hard:3};r=(p[n.difficulty]||0)-(p[o.difficulty]||0)}else if(e.sortBy==="dueDate"){let p=n.due_date?new Date(n.due_date).getTime():1/0,g=o.due_date?new Date(o.due_date).getTime():1/0;r=p-g}if(e.sortDir==="desc"&&(r*=-1),r===0&&e.sortBy!=="dueDate"){let p=n.due_date?new Date(n.due_date).getTime():1/0,g=o.due_date?new Date(o.due_date).getTime():1/0;r=p-g}return r})));isInitialLoading=!0;isCreateTaskOpen=!1;isEditTaskOpen=!1;isProfileMenuOpen=!1;tasksLoadError="";taskTemplate=null;taskToEdit=null;currentHouseholdId="";currentUser=null;currentUserPoints=0;currentUserName=null;processingTaskIds=new Set;memberStatsMap=new Map;authUnsubscribe=null;pointsUnsubscribe=null;memberStatsUnsubscribes=[];onFilterChange(){this.filters$.next(this.filterState)}toggleProfileMenu(){this.isProfileMenuOpen=!this.isProfileMenuOpen}onDocumentClick(a){if(!this.isProfileMenuOpen)return;let e=a.target;e&&(e.closest(".profile-menu-container")||(this.isProfileMenuOpen=!1,this.cdr.detectChanges()))}isAdmin(a){return a.admin_id===this.currentUser?.uid}getMembers(a){return a.members}copyInviteCode(a){navigator.clipboard.writeText(a).then(()=>{this.toastr.info("Invite code copied to clipboard!","Copied")}).catch(e=>{console.error("Failed to copy text: ",e),this.toastr.error("Failed to copy code to clipboard.","Error")})}getMemberName(a,e){let t=e.members.find(n=>n.id===a);return t?t.display_name:"Unknown"}getMyPendingTaskCount(a){return this.currentUser?a.filter(e=>e.assigned_to===this.currentUser.uid&&e.status!=="completed").length:0}getMyOverdueTaskCount(a){if(!this.currentUser)return 0;let e=new Date;return e.setHours(0,0,0,0),a.filter(t=>{if(t.assigned_to!==this.currentUser.uid||t.status==="completed"||!t.due_date)return!1;let n=new Date(t.due_date);return n.setHours(0,0,0,0),n.getTime()<e.getTime()}).length}openCreateTask(a){this.taskTemplate=a||null,this.isCreateTaskOpen=!0}closeCreateTask(){this.isCreateTaskOpen=!1,this.taskTemplate=null}onTaskCreated(){this.reloadHouseholdTasks()}openEditTask(a){this.taskToEdit=a,this.isEditTaskOpen=!0}closeEditTask(){this.isEditTaskOpen=!1,this.taskToEdit=null}onTaskUpdated(){this.reloadHouseholdTasks(),this.closeEditTask()}onTaskCopied(a){this.closeEditTask(),this.openCreateTask(a)}completeTask(a){this.processingTaskIds.add(a),this.allTasks$.pipe(nt(1)).subscribe(e=>{let n=e.find(o=>o.id===a)?.due_date||"";this.taskService.completeTask(a,n).pipe(Qa(()=>{this.processingTaskIds.delete(a),this.cdr.detectChanges()})).subscribe({next:()=>{},error:o=>this.toastr.error(o.message,"Error")})})}reloadHouseholdTasks(){this.tasksLoadError="",this.taskService.loadHouseholdTasks().subscribe({next:()=>this.cdr.detectChanges(),error:a=>{console.error("Failed to load tasks:",a),this.tasksLoadError=a.message,this.cdr.detectChanges()}})}subscribeToUserPoints(a){this.pointsUnsubscribe&&this.pointsUnsubscribe();let e=Xi(this.firestore,`users/${a}`);this.pointsUnsubscribe=Zi(e,t=>{if(t.exists()){let n=t.data();this.currentUserPoints=n.points??0,this.currentUserName=n.display_name||null,this.cdr.detectChanges()}})}subscribeMemberStats(a){this.memberStatsUnsubscribes.forEach(e=>e()),this.memberStatsUnsubscribes=[],this.memberStatsMap=new Map;for(let e of a){let t=Xi(this.firestore,`users/${e}`),n=Zi(t,o=>{if(o.exists()){let r=Ds(o.data()),p=new Map(this.memberStatsMap);p.set(e,r),this.memberStatsMap=p,this.cdr.detectChanges()}});this.memberStatsUnsubscribes.push(n)}}ngOnInit(){this.authUnsubscribe=this.auth.onAuthStateChanged(a=>{if(this.currentUser=a,!a){this.router.navigate(["/login"]);return}this.subscribeToUserPoints(a.uid),this.householdService.loadMyHousehold().subscribe({next:e=>{if(this.isInitialLoading=!1,e){this.reloadHouseholdTasks();let t=e.members.map(n=>n.id??n);this.subscribeMemberStats(t)}this.cdr.detectChanges()},error:()=>{this.isInitialLoading=!1,this.cdr.detectChanges()}})})}ngOnDestroy(){this.authUnsubscribe&&this.authUnsubscribe(),this.pointsUnsubscribe&&this.pointsUnsubscribe(),this.memberStatsUnsubscribes.forEach(a=>a())}async logout(){try{await this.auth.signOut(),this.householdService.clearHousehold(),this.taskService.clearTasks(),this.router.navigate(["/login"])}catch(a){console.error("Error logging out:",a)}}static \u0275fac=function(e){return new(e||i)};static \u0275cmp=S({type:i,selectors:[["app-dashboard"]],hostBindings:function(e,t){e&1&&x("click",function(o){return t.onDocumentClick(o)},oo)},decls:5,vars:3,consts:[[1,"main-content"],[1,"loading-state"],[1,"spinner-large"],[1,"empty-state","card"],[1,"household-header","card"],[1,"hh-info"],[1,"invite-section"],["title","Click to copy",1,"invite-box"],[1,"badge","badge--danger","full-badge"],[1,"filter-toolbar","card"],[1,"filter-group"],[1,"filter-select",3,"ngModelChange","change","ngModel"],["value","All"],["value","Active"],["value","Pending"],["value","Overdue"],["value","Completed"],[3,"value"],["value","Easy"],["value","Medium"],["value","Hard"],[1,"filter-group","points-range-group"],[1,"range-inputs"],["type","number","placeholder","Min","min","0",1,"filter-input",3,"ngModelChange","ngModel"],[1,"range-separator"],["type","number","placeholder","Max","min","0",1,"filter-input",3,"ngModelChange","ngModel"],[1,"filter-error"],["value","Yes"],["value","No"],[1,"divider"],["value","dueDate"],["value","difficulty"],["value","points"],["value","asc"],["value","desc"],[3,"completeTask","openCreateTask","editTask","tasks","household","currentUserUid","isAdmin","tasksLoadError","processingTaskIds","memberStatsMap"],["title","Click to copy",1,"invite-box",3,"click"],[1,"invite-label"],[1,"invite-code"],[1,"copy-hint"],[1,"action-buttons"],["routerLink","/household/create",1,"btn","btn--primary"],["routerLink","/household/join",1,"btn","btn--outline-primary"],[3,"members","template"],[3,"closed","taskCreated","members","template"],[3,"task","members","isAdmin"],[3,"closed","taskUpdated","taskCopied","task","members","isAdmin"]],template:function(e,t){e&1&&(l(0,"main",0),h(1,vm,4,0,"div",1)(2,Em,3,3),h(3,Tm,2,3),h(4,Am,2,3),d()),e&2&&(c(),f(t.isInitialLoading?1:2),c(2),f(t.isCreateTaskOpen?3:-1),c(),f(t.isEditTaskOpen&&t.taskToEdit?4:-1))},dependencies:[rt,Vt,To,Oo,Ot,Pt,So,It,Ft,Rt,ko,Do,Li,Ni,Bi,yo],styles:["[_nghost-%COMP%]{--bg-color: #f4f4f5;--surface-color: #ffffff;--header-bg: #1e1b4b;--text-main: #1f2937;--text-muted: var(--gray-500);--primary: var(--indigo-600);--success: var(--emerald-500);--warning: #d97706;--danger: var(--red-500);--border: var(--gray-200)}.app-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;height:100vh;background-color:var(--bg-color);font-family:system-ui,-apple-system,sans-serif}.app-header[_ngcontent-%COMP%]{background-color:var(--header-bg);color:#fff;display:flex;justify-content:space-between;align-items:center;padding:1rem;position:sticky;top:0;z-index:10}.logo-text[_ngcontent-%COMP%]{margin:0;font-size:1.25rem;font-weight:700}.header-center[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.5rem;justify-content:center}.badge--success[_ngcontent-%COMP%]{background:var(--emerald-400);color:#064e3b;padding:.5rem 1rem;border-radius:1rem;font-size:.75rem;font-weight:700}.badge--warning[_ngcontent-%COMP%]{background:#ef4444;color:#fff;padding:.5rem 1rem;border-radius:1rem;font-size:.75rem;font-weight:700}.header-right[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem}.points-counter[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem;background:#ffffff1f;border:1px solid rgba(255,255,255,.2);border-radius:1rem;padding:.25rem .65rem;cursor:default;transition:background .2s}.points-counter[_ngcontent-%COMP%]:hover{background:#ffffff2e}.points-star[_ngcontent-%COMP%]{font-size:.8rem;line-height:1}.points-value[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:#fff;min-width:16px;text-align:center}.avatar[_ngcontent-%COMP%]{background:var(--indigo-500);width:32px;height:32px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:.8rem;font-weight:700;cursor:pointer}@media(max-width:480px){.app-header[_ngcontent-%COMP%]{padding:.6rem .5rem;flex-wrap:wrap;gap:.5rem}.header-left[_ngcontent-%COMP%]{flex:1;min-width:0}.logo-text[_ngcontent-%COMP%]{font-size:1.1rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.header-center[_ngcontent-%COMP%]{order:3;width:100%}.header-right[_ngcontent-%COMP%]{gap:.4rem;flex-shrink:0}.points-counter[_ngcontent-%COMP%]{padding:.2rem .4rem;gap:.15rem}.points-star[_ngcontent-%COMP%]{font-size:.75rem}.points-value[_ngcontent-%COMP%]{font-size:.75rem;min-width:auto}.avatar[_ngcontent-%COMP%]{width:28px;height:28px;font-size:.75rem}}.main-content[_ngcontent-%COMP%]{flex:1;overflow-y:auto;padding:1rem;padding-bottom:80px}@media(max-width:640px){.main-content[_ngcontent-%COMP%]{padding:.75rem;padding-bottom:80px}}.card[_ngcontent-%COMP%]{background:var(--surface-color);border-radius:.75rem;padding:1rem;box-shadow:0 1px 3px #0000001a;border:1px solid var(--border)}.app-container[_ngcontent-%COMP%]{position:relative}.household-header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center;margin-bottom:1.5rem}@media(max-width:640px){.household-header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;gap:1rem}}.hh-info[_ngcontent-%COMP%]{display:flex;flex-direction:column}.household-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:1.25rem;color:var(--text-main)}.household-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0;font-size:.85rem;color:var(--text-muted)}.loading-state[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:60vh;color:var(--text-muted)}.spinner-large[_ngcontent-%COMP%]{width:48px;height:48px;border:4px solid rgba(79,70,229,.1);border-left-color:var(--primary);border-radius:50%;animation:_ngcontent-%COMP%_spin 1s linear infinite;margin-bottom:1rem}@keyframes _ngcontent-%COMP%_spin{to{transform:rotate(360deg)}}.btn[_ngcontent-%COMP%]{padding:.5rem 1rem;border-radius:.5rem;font-weight:600;cursor:pointer;border:none}.btn--primary[_ngcontent-%COMP%]{background:var(--primary);color:#fff}.btn--outline-primary[_ngcontent-%COMP%]{background:transparent;color:var(--primary);border:1px solid rgba(79,70,229,.3);background-color:#4f46e50d}.section[_ngcontent-%COMP%]{margin-bottom:1.5rem}.section-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;margin-bottom:.75rem}.section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;font-size:.8rem;color:var(--text-muted);letter-spacing:.05em}.btn-create-task[_ngcontent-%COMP%]{background:var(--primary);color:#fff;border:none;border-radius:.375rem;padding:.3rem .75rem;font-size:.78rem;font-weight:700;cursor:pointer;transition:background .15s}.btn-create-task[_ngcontent-%COMP%]:hover{background:#4338ca}.empty-tasks[_ngcontent-%COMP%]{text-align:center;padding:2rem 1rem;color:var(--text-muted);font-size:.9rem}.task-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.75rem}.task-card[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem;align-items:center;padding:1rem}.task--overdue[_ngcontent-%COMP%]{border-color:#ef444480;background-color:#ef444405}.task--done[_ngcontent-%COMP%]{opacity:.6;background-color:#f9fafb}.task-checkbox[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.task-checkbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;margin:0;accent-color:var(--success)}.task-details[_ngcontent-%COMP%]{flex:1;display:flex;flex-direction:column}.task-details[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0 0 .25rem;font-size:1rem;color:var(--text-main)}.task-details[_ngcontent-%COMP%]   h4.strike[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--text-muted)}.task-meta[_ngcontent-%COMP%]{margin:0 0 .5rem;font-size:.75rem;color:var(--text-muted)}.task-tags[_ngcontent-%COMP%]{display:flex;gap:.5rem;flex-wrap:wrap}.tag[_ngcontent-%COMP%]{font-size:.7rem;padding:.15rem .5rem;border-radius:1rem;font-weight:600}.tag--warning[_ngcontent-%COMP%]{background:#fef3c7;color:#92400e}.tag--danger[_ngcontent-%COMP%]{background:var(--red-100);color:#b91c1c}.tag--neutral[_ngcontent-%COMP%]{background:var(--gray-100);color:var(--gray-700)}.tag--easy[_ngcontent-%COMP%]{background:var(--emerald-100);color:#065f46}.tag--points[_ngcontent-%COMP%]{background:var(--indigo-100);color:#3730a3}.tag--points-earned[_ngcontent-%COMP%]{background:var(--emerald-100);color:#065f46}.task-actions[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;gap:.25rem;min-width:80px}.btn-complete[_ngcontent-%COMP%]{background:var(--emerald-400);color:#fff;border:none;padding:.4rem .75rem;border-radius:.25rem;font-size:.75rem;font-weight:700;cursor:pointer}.btn-complete[_ngcontent-%COMP%]:disabled{background:var(--gray-200);color:var(--gray-400);cursor:not-allowed}.btn-complete--locked[_ngcontent-%COMP%]{background:var(--gray-200)!important;color:var(--gray-400)!important;font-style:italic}.assignee[_ngcontent-%COMP%]{font-size:.75rem;color:var(--text-muted)}.error-banner[_ngcontent-%COMP%]{background:var(--red-100);color:#b91c1c;margin-bottom:1rem;font-size:.875rem}.empty-state[_ngcontent-%COMP%]{text-align:center;padding:3rem 1rem}.empty-state[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:1rem;margin-top:1.5rem}.bottom-nav[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;right:0;background:#fff;display:flex;justify-content:space-around;padding:.75rem 0;border-top:1px solid var(--border);z-index:10}.nav-item[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;color:var(--text-muted);font-size:.7rem;gap:.25rem;cursor:pointer;text-decoration:none;transition:color .2s}.nav-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{font-size:1.25rem}.nav-item.active[_ngcontent-%COMP%]{color:var(--primary);font-weight:600}.nav-item[_ngcontent-%COMP%]:not(.active):hover{color:var(--text-main)}.invite-section[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;flex:1}@media(max-width:640px){.invite-section[_ngcontent-%COMP%]{flex:none;justify-content:flex-start}}.invite-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;background:#4f46e50d;border:2px dashed rgba(79,70,229,.4);border-radius:.5rem;padding:.5rem 1rem;cursor:pointer;transition:all .2s ease}@media(max-width:640px){.invite-box[_ngcontent-%COMP%]{padding:.75rem 1rem;width:100%}}.invite-box[_ngcontent-%COMP%]:hover, .invite-box[_ngcontent-%COMP%]:active{background:#4f46e51a;border-color:var(--primary)}.invite-label[_ngcontent-%COMP%]{font-size:.65rem;font-weight:700;color:var(--text-muted);letter-spacing:.05em}.invite-code[_ngcontent-%COMP%]{font-size:1.25rem;font-weight:800;color:var(--primary);letter-spacing:.1em;margin:.15rem 0}.copy-hint[_ngcontent-%COMP%]{font-size:.7rem;color:var(--text-muted)}.full-badge[_ngcontent-%COMP%]{padding:.5rem 1rem;font-size:.85rem;background:var(--red-100);color:#b91c1c;border-radius:.5rem;font-weight:700}.profile-menu-container[_ngcontent-%COMP%]{position:relative}.profile-dropdown[_ngcontent-%COMP%]{position:absolute;top:calc(100% + .5rem);right:0;width:220px;background:var(--surface-color);padding:.5rem 0;box-shadow:0 10px 15px -3px #0003;z-index:50}.dropdown-header[_ngcontent-%COMP%]{padding:.5rem 1rem;color:var(--text-main);font-size:.85rem}.dropdown-points[_ngcontent-%COMP%]{margin:.25rem 0 0;font-size:.8rem;color:var(--text-muted);font-weight:600}.dropdown-divider[_ngcontent-%COMP%]{border:none;border-top:1px solid var(--border);margin:.5rem 0}.dropdown-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.dropdown-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;padding:.5rem 1rem;color:var(--text-main);text-decoration:none;font-size:.85rem;cursor:pointer;transition:background-color .2s}.dropdown-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--bg-color)}.dropdown-list[_ngcontent-%COMP%]   a.text-danger[_ngcontent-%COMP%]{color:var(--danger);font-weight:600}.dropdown-list[_ngcontent-%COMP%]   a.text-danger[_ngcontent-%COMP%]:hover{background-color:#ef44441a}.filter-toolbar[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;align-items:center;gap:1rem;padding:1rem 1.25rem;margin-bottom:1.5rem;background:#fff;border-radius:.75rem;box-shadow:0 1px 3px #00000014}.filter-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.35rem;flex:1 1 auto;min-width:110px}.filter-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:.7rem;font-weight:700;text-transform:uppercase;color:var(--gray-500);letter-spacing:.05em}.filter-select[_ngcontent-%COMP%]{padding:.4rem .5rem;border-radius:.375rem;border:1px solid var(--gray-300);background-color:var(--gray-50);font-size:.85rem;color:var(--gray-700);font-weight:500;cursor:pointer;outline:none;width:100%;transition:border-color .2s,box-shadow .2s}.filter-select[_ngcontent-%COMP%]:focus, .filter-select[_ngcontent-%COMP%]:hover{border-color:var(--indigo-500);background-color:#fff}.divider[_ngcontent-%COMP%]{width:1px;height:2.5rem;background-color:var(--gray-200);margin:0 .25rem}@media(max-width:768px){.filter-toolbar[_ngcontent-%COMP%]{gap:.75rem;padding:.75rem}.filter-group[_ngcontent-%COMP%]{min-width:calc(50% - .5rem)}.divider[_ngcontent-%COMP%]{display:none}}@media(max-width:640px){.filter-toolbar[_ngcontent-%COMP%]{flex-direction:column;gap:.75rem;padding:.75rem;margin-bottom:1rem}.filter-group[_ngcontent-%COMP%]{min-width:100%;flex:1 1 100%}.points-range-group[_ngcontent-%COMP%]{min-width:100%}}.points-range-group[_ngcontent-%COMP%]{min-width:140px}.range-inputs[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.5rem;width:100%}.filter-input[_ngcontent-%COMP%]{width:100%;min-width:0;padding:.4rem .5rem;border-radius:.375rem;border:1px solid var(--gray-300);background-color:var(--gray-50);font-size:.85rem;color:var(--gray-700);font-weight:500;outline:none;transition:border-color .2s,box-shadow .2s}.filter-input[_ngcontent-%COMP%]:focus, .filter-input[_ngcontent-%COMP%]:hover{border-color:var(--indigo-500);background-color:#fff}.filter-input[_ngcontent-%COMP%]::-webkit-outer-spin-button, .filter-input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.filter-input[type=number][_ngcontent-%COMP%]{appearance:textfield}.range-separator[_ngcontent-%COMP%]{color:var(--gray-400);font-weight:700}.filter-error[_ngcontent-%COMP%]{color:#dc2626;font-size:.65rem;font-weight:700;margin-top:.2rem;animation:_ngcontent-%COMP%_fadeIn .2s ease-in}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-2px)}to{opacity:1;transform:translateY(0)}}"]})};export{Ms as DashboardComponent};
