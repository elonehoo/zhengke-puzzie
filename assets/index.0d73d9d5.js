import{d as Kd,r as Zi,e as Zd,o as Jd,c as Qd,a as he,b as tp,f as ep}from"./index.75fd1fa4.js";function rp(r){var e=this.constructor;return this.then(function(t){return e.resolve(r()).then(function(){return t})},function(t){return e.resolve(r()).then(function(){return e.reject(t)})})}function ip(r){var e=this;return new e(function(t,i){if(!(r&&typeof r.length!="undefined"))return i(new TypeError(typeof r+" "+r+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var n=Array.prototype.slice.call(r);if(n.length===0)return t([]);var o=n.length;function s(u,h){if(h&&(typeof h=="object"||typeof h=="function")){var l=h.then;if(typeof l=="function"){l.call(h,function(c){s(u,c)},function(c){n[u]={status:"rejected",reason:c},--o===0&&t(n)});return}}n[u]={status:"fulfilled",value:h},--o===0&&t(n)}for(var a=0;a<n.length;a++)s(a,n[a])})}var np=setTimeout;function uf(r){return Boolean(r&&typeof r.length!="undefined")}function op(){}function sp(r,e){return function(){r.apply(e,arguments)}}function vt(r){if(!(this instanceof vt))throw new TypeError("Promises must be constructed via new");if(typeof r!="function")throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],lf(r,this)}function hf(r,e){for(;r._state===3;)r=r._value;if(r._state===0){r._deferreds.push(e);return}r._handled=!0,vt._immediateFn(function(){var t=r._state===1?e.onFulfilled:e.onRejected;if(t===null){(r._state===1?zo:bi)(e.promise,r._value);return}var i;try{i=t(r._value)}catch(n){bi(e.promise,n);return}zo(e.promise,i)})}function zo(r,e){try{if(e===r)throw new TypeError("A promise cannot be resolved with itself.");if(e&&(typeof e=="object"||typeof e=="function")){var t=e.then;if(e instanceof vt){r._state=3,r._value=e,Xo(r);return}else if(typeof t=="function"){lf(sp(t,e),r);return}}r._state=1,r._value=e,Xo(r)}catch(i){bi(r,i)}}function bi(r,e){r._state=2,r._value=e,Xo(r)}function Xo(r){r._state===2&&r._deferreds.length===0&&vt._immediateFn(function(){r._handled||vt._unhandledRejectionFn(r._value)});for(var e=0,t=r._deferreds.length;e<t;e++)hf(r,r._deferreds[e]);r._deferreds=null}function ap(r,e,t){this.onFulfilled=typeof r=="function"?r:null,this.onRejected=typeof e=="function"?e:null,this.promise=t}function lf(r,e){var t=!1;try{r(function(i){t||(t=!0,zo(e,i))},function(i){t||(t=!0,bi(e,i))})}catch(i){if(t)return;t=!0,bi(e,i)}}vt.prototype.catch=function(r){return this.then(null,r)};vt.prototype.then=function(r,e){var t=new this.constructor(op);return hf(this,new ap(r,e,t)),t};vt.prototype.finally=rp;vt.all=function(r){return new vt(function(e,t){if(!uf(r))return t(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(r);if(i.length===0)return e([]);var n=i.length;function o(a,u){try{if(u&&(typeof u=="object"||typeof u=="function")){var h=u.then;if(typeof h=="function"){h.call(u,function(l){o(a,l)},t);return}}i[a]=u,--n===0&&e(i)}catch(l){t(l)}}for(var s=0;s<i.length;s++)o(s,i[s])})};vt.allSettled=ip;vt.resolve=function(r){return r&&typeof r=="object"&&r.constructor===vt?r:new vt(function(e){e(r)})};vt.reject=function(r){return new vt(function(e,t){t(r)})};vt.race=function(r){return new vt(function(e,t){if(!uf(r))return t(new TypeError("Promise.race accepts an array"));for(var i=0,n=r.length;i<n;i++)vt.resolve(r[i]).then(e,t)})};vt._immediateFn=typeof setImmediate=="function"&&function(r){setImmediate(r)}||function(r){np(r,0)};vt._unhandledRejectionFn=function(e){typeof console!="undefined"&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var io=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Uu=Object.getOwnPropertySymbols,up=Object.prototype.hasOwnProperty,hp=Object.prototype.propertyIsEnumerable;function lp(r){if(r==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function fp(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de",Object.getOwnPropertyNames(r)[0]==="5")return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;var i=Object.getOwnPropertyNames(e).map(function(o){return e[o]});if(i.join("")!=="0123456789")return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach(function(o){n[o]=o}),Object.keys(Object.assign({},n)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var cp=fp()?Object.assign:function(r,e){for(var t,i=lp(r),n,o=1;o<arguments.length;o++){t=Object(arguments[o]);for(var s in t)up.call(t,s)&&(i[s]=t[s]);if(Uu){n=Uu(t);for(var a=0;a<n.length;a++)hp.call(t,n[a])&&(i[n[a]]=t[n[a]])}}return i};/*!
 * @pixi/polyfill - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/polyfill is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */typeof globalThis=="undefined"&&(typeof self!="undefined"?self.globalThis=self:typeof global!="undefined"&&(global.globalThis=global));globalThis.Promise||(globalThis.Promise=vt);Object.assign||(Object.assign=cp);var dp=16;Date.now&&Date.prototype.getTime||(Date.now=function(){return new Date().getTime()});if(!(globalThis.performance&&globalThis.performance.now)){var pp=Date.now();globalThis.performance||(globalThis.performance={}),globalThis.performance.now=function(){return Date.now()-pp}}var no=Date.now(),Lu=["ms","moz","webkit","o"];for(var oo=0;oo<Lu.length&&!globalThis.requestAnimationFrame;++oo){var so=Lu[oo];globalThis.requestAnimationFrame=globalThis[so+"RequestAnimationFrame"],globalThis.cancelAnimationFrame=globalThis[so+"CancelAnimationFrame"]||globalThis[so+"CancelRequestAnimationFrame"]}globalThis.requestAnimationFrame||(globalThis.requestAnimationFrame=function(r){if(typeof r!="function")throw new TypeError(r+"is not a function");var e=Date.now(),t=dp+no-e;return t<0&&(t=0),no=e,globalThis.self.setTimeout(function(){no=Date.now(),r(performance.now())},t)});globalThis.cancelAnimationFrame||(globalThis.cancelAnimationFrame=function(r){return clearTimeout(r)});Math.sign||(Math.sign=function(e){return e=Number(e),e===0||isNaN(e)?e:e>0?1:-1});Number.isInteger||(Number.isInteger=function(e){return typeof e=="number"&&isFinite(e)&&Math.floor(e)===e});globalThis.ArrayBuffer||(globalThis.ArrayBuffer=Array);globalThis.Float32Array||(globalThis.Float32Array=Array);globalThis.Uint32Array||(globalThis.Uint32Array=Array);globalThis.Uint16Array||(globalThis.Uint16Array=Array);globalThis.Uint8Array||(globalThis.Uint8Array=Array);globalThis.Int32Array||(globalThis.Int32Array=Array);var ao=/iPhone/i,Mu=/iPod/i,Bu=/iPad/i,Gu=/\biOS-universal(?:.+)Mac\b/i,uo=/\bAndroid(?:.+)Mobile\b/i,Du=/Android/i,Or=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,Ji=/Silk/i,Ee=/Windows Phone/i,ku=/\bWindows(?:.+)ARM\b/i,zu=/BlackBerry/i,Xu=/BB10/i,ju=/Opera Mini/i,Hu=/\b(CriOS|Chrome)(?:.+)Mobile/i,Vu=/Mobile(?:.+)Firefox\b/i,Wu=function(r){return typeof r!="undefined"&&r.platform==="MacIntel"&&typeof r.maxTouchPoints=="number"&&r.maxTouchPoints>1&&typeof MSStream=="undefined"};function vp(r){return function(e){return e.test(r)}}function _p(r){var e={userAgent:"",platform:"",maxTouchPoints:0};!r&&typeof navigator!="undefined"?e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof r=="string"?e.userAgent=r:r&&r.userAgent&&(e={userAgent:r.userAgent,platform:r.platform,maxTouchPoints:r.maxTouchPoints||0});var t=e.userAgent,i=t.split("[FBAN");typeof i[1]!="undefined"&&(t=i[0]),i=t.split("Twitter"),typeof i[1]!="undefined"&&(t=i[0]);var n=vp(t),o={apple:{phone:n(ao)&&!n(Ee),ipod:n(Mu),tablet:!n(ao)&&(n(Bu)||Wu(e))&&!n(Ee),universal:n(Gu),device:(n(ao)||n(Mu)||n(Bu)||n(Gu)||Wu(e))&&!n(Ee)},amazon:{phone:n(Or),tablet:!n(Or)&&n(Ji),device:n(Or)||n(Ji)},android:{phone:!n(Ee)&&n(Or)||!n(Ee)&&n(uo),tablet:!n(Ee)&&!n(Or)&&!n(uo)&&(n(Ji)||n(Du)),device:!n(Ee)&&(n(Or)||n(Ji)||n(uo)||n(Du))||n(/\bokhttp\b/i)},windows:{phone:n(Ee),tablet:n(ku),device:n(Ee)||n(ku)},other:{blackberry:n(zu),blackberry10:n(Xu),opera:n(ju),firefox:n(Vu),chrome:n(Hu),device:n(zu)||n(Xu)||n(ju)||n(Vu)||n(Hu)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}/*!
 * @pixi/settings - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/settings is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Kt=_p(globalThis.navigator);function mp(r){var e=!0;if(Kt.tablet||Kt.phone){if(Kt.apple.device){var t=navigator.userAgent.match(/OS (\d+)_(\d+)?/);if(t){var i=parseInt(t[1],10);i<11&&(e=!1)}}if(Kt.android.device){var t=navigator.userAgent.match(/Android\s([0-9.]*)/);if(t){var i=parseInt(t[1],10);i<7&&(e=!1)}}}return e?r:4}function gp(){return!Kt.apple.device}/*!
 * @pixi/constants - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Yu;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(Yu||(Yu={}));var $u;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})($u||($u={}));var qu;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(qu||(qu={}));var Ku;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(Ku||(Ku={}));var Zu;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Zu||(Zu={}));var Ju;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Ju||(Ju={}));var Qu;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Qu||(Qu={}));var th;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(th||(th={}));var eh;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(eh||(eh={}));var jo;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(jo||(jo={}));var Ho;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Ho||(Ho={}));var Vo;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(Vo||(Vo={}));var rh;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(rh||(rh={}));var ih;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(ih||(ih={}));var Wo;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(Wo||(Wo={}));var _i;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(_i||(_i={}));var nh;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(nh||(nh={}));var Yo;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(Yo||(Yo={}));var oh;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(oh||(oh={}));var U={MIPMAP_TEXTURES:Vo.POW2,ANISOTROPIC_LEVEL:0,RESOLUTION:1,FILTER_RESOLUTION:1,FILTER_MULTISAMPLE:Yo.NONE,SPRITE_MAX_TEXTURES:mp(32),SPRITE_BATCH_SIZE:4096,RENDER_OPTIONS:{view:null,antialias:!1,autoDensity:!1,backgroundColor:0,backgroundAlpha:1,useContextAlpha:!0,clearBeforeRender:!0,preserveDrawingBuffer:!1,width:800,height:600,legacy:!1},GC_MODE:Wo.AUTO,GC_MAX_IDLE:60*60,GC_MAX_CHECK_COUNT:60*10,WRAP_MODE:Ho.CLAMP,SCALE_MODE:jo.LINEAR,PRECISION_VERTEX:_i.HIGH,PRECISION_FRAGMENT:Kt.apple.device?_i.HIGH:_i.MEDIUM,CAN_UPLOAD_SAME_BUFFER:gp(),CREATE_IMAGE_BITMAP:!1,ROUND_PIXELS:!1},ff={exports:{}};(function(r){var e=Object.prototype.hasOwnProperty,t="~";function i(){}Object.create&&(i.prototype=Object.create(null),new i().__proto__||(t=!1));function n(u,h,l){this.fn=u,this.context=h,this.once=l||!1}function o(u,h,l,c,f){if(typeof l!="function")throw new TypeError("The listener must be a function");var d=new n(l,c||u,f),v=t?t+h:h;return u._events[v]?u._events[v].fn?u._events[v]=[u._events[v],d]:u._events[v].push(d):(u._events[v]=d,u._eventsCount++),u}function s(u,h){--u._eventsCount===0?u._events=new i:delete u._events[h]}function a(){this._events=new i,this._eventsCount=0}a.prototype.eventNames=function(){var h=[],l,c;if(this._eventsCount===0)return h;for(c in l=this._events)e.call(l,c)&&h.push(t?c.slice(1):c);return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(l)):h},a.prototype.listeners=function(h){var l=t?t+h:h,c=this._events[l];if(!c)return[];if(c.fn)return[c.fn];for(var f=0,d=c.length,v=new Array(d);f<d;f++)v[f]=c[f].fn;return v},a.prototype.listenerCount=function(h){var l=t?t+h:h,c=this._events[l];return c?c.fn?1:c.length:0},a.prototype.emit=function(h,l,c,f,d,v){var p=t?t+h:h;if(!this._events[p])return!1;var _=this._events[p],m=arguments.length,y,b;if(_.fn){switch(_.once&&this.removeListener(h,_.fn,void 0,!0),m){case 1:return _.fn.call(_.context),!0;case 2:return _.fn.call(_.context,l),!0;case 3:return _.fn.call(_.context,l,c),!0;case 4:return _.fn.call(_.context,l,c,f),!0;case 5:return _.fn.call(_.context,l,c,f,d),!0;case 6:return _.fn.call(_.context,l,c,f,d,v),!0}for(b=1,y=new Array(m-1);b<m;b++)y[b-1]=arguments[b];_.fn.apply(_.context,y)}else{var C=_.length,x;for(b=0;b<C;b++)switch(_[b].once&&this.removeListener(h,_[b].fn,void 0,!0),m){case 1:_[b].fn.call(_[b].context);break;case 2:_[b].fn.call(_[b].context,l);break;case 3:_[b].fn.call(_[b].context,l,c);break;case 4:_[b].fn.call(_[b].context,l,c,f);break;default:if(!y)for(x=1,y=new Array(m-1);x<m;x++)y[x-1]=arguments[x];_[b].fn.apply(_[b].context,y)}}return!0},a.prototype.on=function(h,l,c){return o(this,h,l,c,!1)},a.prototype.once=function(h,l,c){return o(this,h,l,c,!0)},a.prototype.removeListener=function(h,l,c,f){var d=t?t+h:h;if(!this._events[d])return this;if(!l)return s(this,d),this;var v=this._events[d];if(v.fn)v.fn===l&&(!f||v.once)&&(!c||v.context===c)&&s(this,d);else{for(var p=0,_=[],m=v.length;p<m;p++)(v[p].fn!==l||f&&!v[p].once||c&&v[p].context!==c)&&_.push(v[p]);_.length?this._events[d]=_.length===1?_[0]:_:s(this,d)}return this},a.prototype.removeAllListeners=function(h){var l;return h?(l=t?t+h:h,this._events[l]&&s(this,l)):(this._events=new i,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=t,a.EventEmitter=a,r.exports=a})(ff);var ti=ff.exports,Ra={exports:{}};Ra.exports=Hn;Ra.exports.default=Hn;function Hn(r,e,t){t=t||2;var i=e&&e.length,n=i?e[0]*t:r.length,o=cf(r,0,n,t,!0),s=[];if(!o||o.next===o.prev)return s;var a,u,h,l,c,f,d;if(i&&(o=Cp(r,e,o,t)),r.length>80*t){a=h=r[0],u=l=r[1];for(var v=t;v<n;v+=t)c=r[v],f=r[v+1],c<a&&(a=c),f<u&&(u=f),c>h&&(h=c),f>l&&(l=f);d=Math.max(h-a,l-u),d=d!==0?1/d:0}return Ti(o,s,t,a,u,d),s}function cf(r,e,t,i,n){var o,s;if(n===Ko(r,e,t,i)>0)for(o=e;o<t;o+=i)s=sh(o,r[o],r[o+1],s);else for(o=t-i;o>=e;o-=i)s=sh(o,r[o],r[o+1],s);return s&&Vn(s,s.next)&&(Ei(s),s=s.next),s}function Ke(r,e){if(!r)return r;e||(e=r);var t=r,i;do if(i=!1,!t.steiner&&(Vn(t,t.next)||ft(t.prev,t,t.next)===0)){if(Ei(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ti(r,e,t,i,n,o,s){if(!!r){!s&&o&&Ip(r,i,n,o);for(var a=r,u,h;r.prev!==r.next;){if(u=r.prev,h=r.next,o?xp(r,i,n,o):yp(r)){e.push(u.i/t),e.push(r.i/t),e.push(h.i/t),Ei(r),r=h.next,a=h.next;continue}if(r=h,r===a){s?s===1?(r=bp(Ke(r),e,t),Ti(r,e,t,i,n,o,2)):s===2&&Tp(r,e,t,i,n,o):Ti(Ke(r),e,t,i,n,o,1);break}}}}function yp(r){var e=r.prev,t=r,i=r.next;if(ft(e,t,i)>=0)return!1;for(var n=r.next.next;n!==r.prev;){if(Mr(e.x,e.y,t.x,t.y,i.x,i.y,n.x,n.y)&&ft(n.prev,n,n.next)>=0)return!1;n=n.next}return!0}function xp(r,e,t,i){var n=r.prev,o=r,s=r.next;if(ft(n,o,s)>=0)return!1;for(var a=n.x<o.x?n.x<s.x?n.x:s.x:o.x<s.x?o.x:s.x,u=n.y<o.y?n.y<s.y?n.y:s.y:o.y<s.y?o.y:s.y,h=n.x>o.x?n.x>s.x?n.x:s.x:o.x>s.x?o.x:s.x,l=n.y>o.y?n.y>s.y?n.y:s.y:o.y>s.y?o.y:s.y,c=$o(a,u,e,t,i),f=$o(h,l,e,t,i),d=r.prevZ,v=r.nextZ;d&&d.z>=c&&v&&v.z<=f;){if(d!==r.prev&&d!==r.next&&Mr(n.x,n.y,o.x,o.y,s.x,s.y,d.x,d.y)&&ft(d.prev,d,d.next)>=0||(d=d.prevZ,v!==r.prev&&v!==r.next&&Mr(n.x,n.y,o.x,o.y,s.x,s.y,v.x,v.y)&&ft(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;d&&d.z>=c;){if(d!==r.prev&&d!==r.next&&Mr(n.x,n.y,o.x,o.y,s.x,s.y,d.x,d.y)&&ft(d.prev,d,d.next)>=0)return!1;d=d.prevZ}for(;v&&v.z<=f;){if(v!==r.prev&&v!==r.next&&Mr(n.x,n.y,o.x,o.y,s.x,s.y,v.x,v.y)&&ft(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function bp(r,e,t){var i=r;do{var n=i.prev,o=i.next.next;!Vn(n,o)&&df(n,i,i.next,o)&&Ci(n,o)&&Ci(o,n)&&(e.push(n.i/t),e.push(i.i/t),e.push(o.i/t),Ei(i),Ei(i.next),i=r=o),i=i.next}while(i!==r);return Ke(i)}function Tp(r,e,t,i,n,o){var s=r;do{for(var a=s.next.next;a!==s.prev;){if(s.i!==a.i&&Op(s,a)){var u=pf(s,a);s=Ke(s,s.next),u=Ke(u,u.next),Ti(s,e,t,i,n,o),Ti(u,e,t,i,n,o);return}a=a.next}s=s.next}while(s!==r)}function Cp(r,e,t,i){var n=[],o,s,a,u,h;for(o=0,s=e.length;o<s;o++)a=e[o]*i,u=o<s-1?e[o+1]*i:r.length,h=cf(r,a,u,i,!1),h===h.next&&(h.steiner=!0),n.push(Sp(h));for(n.sort(Ep),o=0;o<n.length;o++)t=wp(n[o],t),t=Ke(t,t.next);return t}function Ep(r,e){return r.x-e.x}function wp(r,e){var t=Ap(r,e);if(!t)return e;var i=pf(t,r),n=Ke(t,t.next);return Ke(i,i.next),e===t?n:e}function Ap(r,e){var t=e,i=r.x,n=r.y,o=-1/0,s;do{if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){var a=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(a<=i&&a>o){if(o=a,a===i){if(n===t.y)return t;if(n===t.next.y)return t.next}s=t.x<t.next.x?t:t.next}}t=t.next}while(t!==e);if(!s)return null;if(i===o)return s;var u=s,h=s.x,l=s.y,c=1/0,f;t=s;do i>=t.x&&t.x>=h&&i!==t.x&&Mr(n<l?i:o,n,h,l,n<l?o:i,n,t.x,t.y)&&(f=Math.abs(n-t.y)/(i-t.x),Ci(t,r)&&(f<c||f===c&&(t.x>s.x||t.x===s.x&&Pp(s,t)))&&(s=t,c=f)),t=t.next;while(t!==u);return s}function Pp(r,e){return ft(r.prev,r,e.prev)<0&&ft(e.next,r,r.next)<0}function Ip(r,e,t,i){var n=r;do n.z===null&&(n.z=$o(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,Rp(n)}function Rp(r){var e,t,i,n,o,s,a,u,h=1;do{for(t=r,r=null,o=null,s=0;t;){for(s++,i=t,a=0,e=0;e<h&&(a++,i=i.nextZ,!!i);e++);for(u=h;a>0||u>0&&i;)a!==0&&(u===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,a--):(n=i,i=i.nextZ,u--),o?o.nextZ=n:r=n,n.prevZ=o,o=n;t=i}o.nextZ=null,h*=2}while(s>1);return r}function $o(r,e,t,i,n){return r=32767*(r-t)*n,e=32767*(e-i)*n,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function Sp(r){var e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function Mr(r,e,t,i,n,o,s,a){return(n-s)*(e-a)-(r-s)*(o-a)>=0&&(r-s)*(i-a)-(t-s)*(e-a)>=0&&(t-s)*(o-a)-(n-s)*(i-a)>=0}function Op(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!Np(r,e)&&(Ci(r,e)&&Ci(e,r)&&Fp(r,e)&&(ft(r.prev,r,e.prev)||ft(r,e.prev,e))||Vn(r,e)&&ft(r.prev,r,r.next)>0&&ft(e.prev,e,e.next)>0)}function ft(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Vn(r,e){return r.x===e.x&&r.y===e.y}function df(r,e,t,i){var n=tn(ft(r,e,t)),o=tn(ft(r,e,i)),s=tn(ft(t,i,r)),a=tn(ft(t,i,e));return!!(n!==o&&s!==a||n===0&&Qi(r,t,e)||o===0&&Qi(r,i,e)||s===0&&Qi(t,r,i)||a===0&&Qi(t,e,i))}function Qi(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function tn(r){return r>0?1:r<0?-1:0}function Np(r,e){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&df(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function Ci(r,e){return ft(r.prev,r,r.next)<0?ft(r,e,r.next)>=0&&ft(r,r.prev,e)>=0:ft(r,e,r.prev)<0||ft(r,r.next,e)<0}function Fp(r,e){var t=r,i=!1,n=(r.x+e.x)/2,o=(r.y+e.y)/2;do t.y>o!=t.next.y>o&&t.next.y!==t.y&&n<(t.next.x-t.x)*(o-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function pf(r,e){var t=new qo(r.i,r.x,r.y),i=new qo(e.i,e.x,e.y),n=r.next,o=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,o.next=i,i.prev=o,i}function sh(r,e,t,i){var n=new qo(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Ei(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function qo(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}Hn.deviation=function(r,e,t,i){var n=e&&e.length,o=n?e[0]*t:r.length,s=Math.abs(Ko(r,0,o,t));if(n)for(var a=0,u=e.length;a<u;a++){var h=e[a]*t,l=a<u-1?e[a+1]*t:r.length;s-=Math.abs(Ko(r,h,l,t))}var c=0;for(a=0;a<i.length;a+=3){var f=i[a]*t,d=i[a+1]*t,v=i[a+2]*t;c+=Math.abs((r[f]-r[v])*(r[d+1]-r[f+1])-(r[f]-r[d])*(r[v+1]-r[f+1]))}return s===0&&c===0?0:Math.abs((c-s)/s)};function Ko(r,e,t,i){for(var n=0,o=e,s=t-i;o<t;o+=i)n+=(r[s]-r[o])*(r[o+1]+r[s+1]),s=o;return n}Hn.flatten=function(r){for(var e=r[0][0].length,t={vertices:[],holes:[],dimensions:e},i=0,n=0;n<r.length;n++){for(var o=0;o<r[n].length;o++)for(var s=0;s<e;s++)t.vertices.push(r[n][o][s]);n>0&&(i+=r[n-1].length,t.holes.push(i))}return t};var Sa=Ra.exports,Zo={exports:{}};/*! https://mths.be/punycode v1.3.2 by @mathias */(function(r,e){(function(t){var i=e&&!e.nodeType&&e,n=r&&!r.nodeType&&r,o=typeof io=="object"&&io;(o.global===o||o.window===o||o.self===o)&&(t=o);var s,a=2147483647,u=36,h=1,l=26,c=38,f=700,d=72,v=128,p="-",_=/^xn--/,m=/[^\x20-\x7E]/,y=/[\x2E\u3002\uFF0E\uFF61]/g,b={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},C=u-h,x=Math.floor,g=String.fromCharCode,E;function w(P){throw RangeError(b[P])}function T(P,L){for(var X=P.length,j=[];X--;)j[X]=L(P[X]);return j}function A(P,L){var X=P.split("@"),j="";X.length>1&&(j=X[0]+"@",P=X[1]),P=P.replace(y,".");var $=P.split("."),dt=T($,L).join(".");return j+dt}function O(P){for(var L=[],X=0,j=P.length,$,dt;X<j;)$=P.charCodeAt(X++),$>=55296&&$<=56319&&X<j?(dt=P.charCodeAt(X++),(dt&64512)==56320?L.push((($&1023)<<10)+(dt&1023)+65536):(L.push($),X--)):L.push($);return L}function N(P){return T(P,function(L){var X="";return L>65535&&(L-=65536,X+=g(L>>>10&1023|55296),L=56320|L&1023),X+=g(L),X}).join("")}function F(P){return P-48<10?P-22:P-65<26?P-65:P-97<26?P-97:u}function D(P,L){return P+22+75*(P<26)-((L!=0)<<5)}function S(P,L,X){var j=0;for(P=X?x(P/f):P>>1,P+=x(P/L);P>C*l>>1;j+=u)P=x(P/C);return x(j+(C+1)*P/(P+c))}function I(P){var L=[],X=P.length,j,$=0,dt=v,et=d,xt,Ct,pt,mt,tt,st,W,Lt,Et;for(xt=P.lastIndexOf(p),xt<0&&(xt=0),Ct=0;Ct<xt;++Ct)P.charCodeAt(Ct)>=128&&w("not-basic"),L.push(P.charCodeAt(Ct));for(pt=xt>0?xt+1:0;pt<X;){for(mt=$,tt=1,st=u;pt>=X&&w("invalid-input"),W=F(P.charCodeAt(pt++)),(W>=u||W>x((a-$)/tt))&&w("overflow"),$+=W*tt,Lt=st<=et?h:st>=et+l?l:st-et,!(W<Lt);st+=u)Et=u-Lt,tt>x(a/Et)&&w("overflow"),tt*=Et;j=L.length+1,et=S($-mt,j,mt==0),x($/j)>a-dt&&w("overflow"),dt+=x($/j),$%=j,L.splice($++,0,dt)}return N(L)}function M(P){var L,X,j,$,dt,et,xt,Ct,pt,mt,tt,st=[],W,Lt,Et,J;for(P=O(P),W=P.length,L=v,X=0,dt=d,et=0;et<W;++et)tt=P[et],tt<128&&st.push(g(tt));for(j=$=st.length,$&&st.push(p);j<W;){for(xt=a,et=0;et<W;++et)tt=P[et],tt>=L&&tt<xt&&(xt=tt);for(Lt=j+1,xt-L>x((a-X)/Lt)&&w("overflow"),X+=(xt-L)*Lt,L=xt,et=0;et<W;++et)if(tt=P[et],tt<L&&++X>a&&w("overflow"),tt==L){for(Ct=X,pt=u;mt=pt<=dt?h:pt>=dt+l?l:pt-dt,!(Ct<mt);pt+=u)J=Ct-mt,Et=u-mt,st.push(g(D(mt+J%Et,0))),Ct=x(J/Et);st.push(g(D(Ct,0))),dt=S(X,Lt,j==$),X=0,++j}++X,++L}return st.join("")}function V(P){return A(P,function(L){return _.test(L)?I(L.slice(4).toLowerCase()):L})}function Q(P){return A(P,function(L){return m.test(L)?"xn--"+M(L):L})}if(s={version:"1.3.2",ucs2:{decode:O,encode:N},decode:I,encode:M,toASCII:Q,toUnicode:V},i&&n)if(r.exports==i)n.exports=s;else for(E in s)s.hasOwnProperty(E)&&(i[E]=s[E]);else t.punycode=s})(io)})(Zo,Zo.exports);var Up={isString:function(r){return typeof r=="string"},isObject:function(r){return typeof r=="object"&&r!==null},isNull:function(r){return r===null},isNullOrUndefined:function(r){return r==null}},wi={};function Lp(r,e){return Object.prototype.hasOwnProperty.call(r,e)}var Mp=function(r,e,t,i){e=e||"&",t=t||"=";var n={};if(typeof r!="string"||r.length===0)return n;var o=/\+/g;r=r.split(e);var s=1e3;i&&typeof i.maxKeys=="number"&&(s=i.maxKeys);var a=r.length;s>0&&a>s&&(a=s);for(var u=0;u<a;++u){var h=r[u].replace(o,"%20"),l=h.indexOf(t),c,f,d,v;l>=0?(c=h.substr(0,l),f=h.substr(l+1)):(c=h,f=""),d=decodeURIComponent(c),v=decodeURIComponent(f),Lp(n,d)?Array.isArray(n[d])?n[d].push(v):n[d]=[n[d],v]:n[d]=v}return n},ni=function(r){switch(typeof r){case"string":return r;case"boolean":return r?"true":"false";case"number":return isFinite(r)?r:"";default:return""}},Bp=function(r,e,t,i){return e=e||"&",t=t||"=",r===null&&(r=void 0),typeof r=="object"?Object.keys(r).map(function(n){var o=encodeURIComponent(ni(n))+t;return Array.isArray(r[n])?r[n].map(function(s){return o+encodeURIComponent(ni(s))}).join(e):o+encodeURIComponent(ni(r[n]))}).join(e):i?encodeURIComponent(ni(i))+t+encodeURIComponent(ni(r)):""};wi.decode=wi.parse=Mp;wi.encode=wi.stringify=Bp;var Gp=Zo.exports,ge=Up,Dp=Wn,kp=Zp,zp=Kp;function fe(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var Xp=/^([a-z0-9.+-]+:)/i,jp=/:[0-9]*$/,Hp=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,Vp=["<",">",'"',"`"," ","\r",`
`,"	"],Wp=["{","}","|","\\","^","`"].concat(Vp),Jo=["'"].concat(Wp),ah=["%","/","?",";","#"].concat(Jo),uh=["/","?","#"],Yp=255,hh=/^[+a-z0-9A-Z_-]{0,63}$/,$p=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,qp={javascript:!0,"javascript:":!0},Qo={javascript:!0,"javascript:":!0},Dr={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},ts=wi;function Wn(r,e,t){if(r&&ge.isObject(r)&&r instanceof fe)return r;var i=new fe;return i.parse(r,e,t),i}fe.prototype.parse=function(r,e,t){if(!ge.isString(r))throw new TypeError("Parameter 'url' must be a string, not "+typeof r);var i=r.indexOf("?"),n=i!==-1&&i<r.indexOf("#")?"?":"#",o=r.split(n),s=/\\/g;o[0]=o[0].replace(s,"/"),r=o.join(n);var a=r;if(a=a.trim(),!t&&r.split("#").length===1){var u=Hp.exec(a);if(u)return this.path=a,this.href=a,this.pathname=u[1],u[2]?(this.search=u[2],e?this.query=ts.parse(this.search.substr(1)):this.query=this.search.substr(1)):e&&(this.search="",this.query={}),this}var h=Xp.exec(a);if(h){h=h[0];var l=h.toLowerCase();this.protocol=l,a=a.substr(h.length)}if(t||h||a.match(/^\/\/[^@\/]+@[^@\/]+/)){var c=a.substr(0,2)==="//";c&&!(h&&Qo[h])&&(a=a.substr(2),this.slashes=!0)}if(!Qo[h]&&(c||h&&!Dr[h])){for(var f=-1,d=0;d<uh.length;d++){var v=a.indexOf(uh[d]);v!==-1&&(f===-1||v<f)&&(f=v)}var p,_;f===-1?_=a.lastIndexOf("@"):_=a.lastIndexOf("@",f),_!==-1&&(p=a.slice(0,_),a=a.slice(_+1),this.auth=decodeURIComponent(p)),f=-1;for(var d=0;d<ah.length;d++){var v=a.indexOf(ah[d]);v!==-1&&(f===-1||v<f)&&(f=v)}f===-1&&(f=a.length),this.host=a.slice(0,f),a=a.slice(f),this.parseHost(),this.hostname=this.hostname||"";var m=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!m)for(var y=this.hostname.split(/\./),d=0,b=y.length;d<b;d++){var C=y[d];if(!!C&&!C.match(hh)){for(var x="",g=0,E=C.length;g<E;g++)C.charCodeAt(g)>127?x+="x":x+=C[g];if(!x.match(hh)){var w=y.slice(0,d),T=y.slice(d+1),A=C.match($p);A&&(w.push(A[1]),T.unshift(A[2])),T.length&&(a="/"+T.join(".")+a),this.hostname=w.join(".");break}}}this.hostname.length>Yp?this.hostname="":this.hostname=this.hostname.toLowerCase(),m||(this.hostname=Gp.toASCII(this.hostname));var O=this.port?":"+this.port:"",N=this.hostname||"";this.host=N+O,this.href+=this.host,m&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),a[0]!=="/"&&(a="/"+a))}if(!qp[l])for(var d=0,b=Jo.length;d<b;d++){var F=Jo[d];if(a.indexOf(F)!==-1){var D=encodeURIComponent(F);D===F&&(D=escape(F)),a=a.split(F).join(D)}}var S=a.indexOf("#");S!==-1&&(this.hash=a.substr(S),a=a.slice(0,S));var I=a.indexOf("?");if(I!==-1?(this.search=a.substr(I),this.query=a.substr(I+1),e&&(this.query=ts.parse(this.query)),a=a.slice(0,I)):e&&(this.search="",this.query={}),a&&(this.pathname=a),Dr[l]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){var O=this.pathname||"",M=this.search||"";this.path=O+M}return this.href=this.format(),this};function Kp(r){return ge.isString(r)&&(r=Wn(r)),r instanceof fe?r.format():fe.prototype.format.call(r)}fe.prototype.format=function(){var r=this.auth||"";r&&(r=encodeURIComponent(r),r=r.replace(/%3A/i,":"),r+="@");var e=this.protocol||"",t=this.pathname||"",i=this.hash||"",n=!1,o="";this.host?n=r+this.host:this.hostname&&(n=r+(this.hostname.indexOf(":")===-1?this.hostname:"["+this.hostname+"]"),this.port&&(n+=":"+this.port)),this.query&&ge.isObject(this.query)&&Object.keys(this.query).length&&(o=ts.stringify(this.query));var s=this.search||o&&"?"+o||"";return e&&e.substr(-1)!==":"&&(e+=":"),this.slashes||(!e||Dr[e])&&n!==!1?(n="//"+(n||""),t&&t.charAt(0)!=="/"&&(t="/"+t)):n||(n=""),i&&i.charAt(0)!=="#"&&(i="#"+i),s&&s.charAt(0)!=="?"&&(s="?"+s),t=t.replace(/[?#]/g,function(a){return encodeURIComponent(a)}),s=s.replace("#","%23"),e+n+t+s+i};function Zp(r,e){return Wn(r,!1,!0).resolve(e)}fe.prototype.resolve=function(r){return this.resolveObject(Wn(r,!1,!0)).format()};fe.prototype.resolveObject=function(r){if(ge.isString(r)){var e=new fe;e.parse(r,!1,!0),r=e}for(var t=new fe,i=Object.keys(this),n=0;n<i.length;n++){var o=i[n];t[o]=this[o]}if(t.hash=r.hash,r.href==="")return t.href=t.format(),t;if(r.slashes&&!r.protocol){for(var s=Object.keys(r),a=0;a<s.length;a++){var u=s[a];u!=="protocol"&&(t[u]=r[u])}return Dr[t.protocol]&&t.hostname&&!t.pathname&&(t.path=t.pathname="/"),t.href=t.format(),t}if(r.protocol&&r.protocol!==t.protocol){if(!Dr[r.protocol]){for(var h=Object.keys(r),l=0;l<h.length;l++){var c=h[l];t[c]=r[c]}return t.href=t.format(),t}if(t.protocol=r.protocol,!r.host&&!Qo[r.protocol]){for(var b=(r.pathname||"").split("/");b.length&&!(r.host=b.shift()););r.host||(r.host=""),r.hostname||(r.hostname=""),b[0]!==""&&b.unshift(""),b.length<2&&b.unshift(""),t.pathname=b.join("/")}else t.pathname=r.pathname;if(t.search=r.search,t.query=r.query,t.host=r.host||"",t.auth=r.auth,t.hostname=r.hostname||r.host,t.port=r.port,t.pathname||t.search){var f=t.pathname||"",d=t.search||"";t.path=f+d}return t.slashes=t.slashes||r.slashes,t.href=t.format(),t}var v=t.pathname&&t.pathname.charAt(0)==="/",p=r.host||r.pathname&&r.pathname.charAt(0)==="/",_=p||v||t.host&&r.pathname,m=_,y=t.pathname&&t.pathname.split("/")||[],b=r.pathname&&r.pathname.split("/")||[],C=t.protocol&&!Dr[t.protocol];if(C&&(t.hostname="",t.port=null,t.host&&(y[0]===""?y[0]=t.host:y.unshift(t.host)),t.host="",r.protocol&&(r.hostname=null,r.port=null,r.host&&(b[0]===""?b[0]=r.host:b.unshift(r.host)),r.host=null),_=_&&(b[0]===""||y[0]==="")),p)t.host=r.host||r.host===""?r.host:t.host,t.hostname=r.hostname||r.hostname===""?r.hostname:t.hostname,t.search=r.search,t.query=r.query,y=b;else if(b.length)y||(y=[]),y.pop(),y=y.concat(b),t.search=r.search,t.query=r.query;else if(!ge.isNullOrUndefined(r.search)){if(C){t.hostname=t.host=y.shift();var x=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;x&&(t.auth=x.shift(),t.host=t.hostname=x.shift())}return t.search=r.search,t.query=r.query,(!ge.isNull(t.pathname)||!ge.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.href=t.format(),t}if(!y.length)return t.pathname=null,t.search?t.path="/"+t.search:t.path=null,t.href=t.format(),t;for(var g=y.slice(-1)[0],E=(t.host||r.host||y.length>1)&&(g==="."||g==="..")||g==="",w=0,T=y.length;T>=0;T--)g=y[T],g==="."?y.splice(T,1):g===".."?(y.splice(T,1),w++):w&&(y.splice(T,1),w--);if(!_&&!m)for(;w--;w)y.unshift("..");_&&y[0]!==""&&(!y[0]||y[0].charAt(0)!=="/")&&y.unshift(""),E&&y.join("/").substr(-1)!=="/"&&y.push("");var A=y[0]===""||y[0]&&y[0].charAt(0)==="/";if(C){t.hostname=t.host=A?"":y.length?y.shift():"";var x=t.host&&t.host.indexOf("@")>0?t.host.split("@"):!1;x&&(t.auth=x.shift(),t.host=t.hostname=x.shift())}return _=_||t.host&&y.length,_&&!A&&y.unshift(""),y.length?t.pathname=y.join("/"):(t.pathname=null,t.path=null),(!ge.isNull(t.pathname)||!ge.isNull(t.search))&&(t.path=(t.pathname?t.pathname:"")+(t.search?t.search:"")),t.auth=r.auth||t.auth,t.slashes=t.slashes||r.slashes,t.href=t.format(),t};fe.prototype.parseHost=function(){var r=this.host,e=jp.exec(r);e&&(e=e[0],e!==":"&&(this.port=e.substr(1)),r=r.substr(0,r.length-e.length)),r&&(this.hostname=r)};/*!
 * @pixi/constants - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var be;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(be||(be={}));var jr;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(jr||(jr={}));var Ai;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(Ai||(Ai={}));var B;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(B||(B={}));var Zt;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Zt||(Zt={}));var R;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(R||(R={}));var We;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(We||(We={}));var G;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(G||(G={}));var Pi;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(Pi||(Pi={}));var Vt;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(Vt||(Vt={}));var xe;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(xe||(xe={}));var ee;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(ee||(ee={}));var re;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(re||(re={}));var Pe;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(Pe||(Pe={}));var In;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(In||(In={}));var le;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(le||(le={}));var Ot;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Ot||(Ot={}));var yt;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(yt||(yt={}));var ce;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(ce||(ce={}));/*!
 * @pixi/utils - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/utils is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var mr={parse:Dp,format:zp,resolve:kp};U.RETINA_PREFIX=/@([0-9\.]+)x/;U.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT=!1;var es=!1,lh="6.3.2";function vf(){es=!0}function _f(r){var e;if(!es){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){var t=[`
 %c %c %c PixiJS `+lh+" - \u2730 "+r+` \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 

`,"background: #ff66a5; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff66a5; background: #030307; padding:5px 0;","background: #ff66a5; padding:5px 0;","background: #ffc3dc; padding:5px 0;","background: #ff66a5; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;","color: #ff2424; background: #fff; padding:5px 0;"];(e=globalThis.console).log.apply(e,t)}else globalThis.console&&globalThis.console.log("PixiJS "+lh+" - "+r+" - http://www.pixijs.com/");es=!0}}var ho;function mf(){return typeof ho=="undefined"&&(ho=function(){var e={stencil:!0,failIfMajorPerformanceCaveat:U.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT};try{if(!globalThis.WebGLRenderingContext)return!1;var t=document.createElement("canvas"),i=t.getContext("webgl",e)||t.getContext("experimental-webgl",e),n=!!(i&&i.getContextAttributes().stencil);if(i){var o=i.getExtension("WEBGL_lose_context");o&&o.loseContext()}return i=null,n}catch{return!1}}()),ho}var Jp="#f0f8ff",Qp="#faebd7",tv="#00ffff",ev="#7fffd4",rv="#f0ffff",iv="#f5f5dc",nv="#ffe4c4",ov="#000000",sv="#ffebcd",av="#0000ff",uv="#8a2be2",hv="#a52a2a",lv="#deb887",fv="#5f9ea0",cv="#7fff00",dv="#d2691e",pv="#ff7f50",vv="#6495ed",_v="#fff8dc",mv="#dc143c",gv="#00ffff",yv="#00008b",xv="#008b8b",bv="#b8860b",Tv="#a9a9a9",Cv="#006400",Ev="#a9a9a9",wv="#bdb76b",Av="#8b008b",Pv="#556b2f",Iv="#ff8c00",Rv="#9932cc",Sv="#8b0000",Ov="#e9967a",Nv="#8fbc8f",Fv="#483d8b",Uv="#2f4f4f",Lv="#2f4f4f",Mv="#00ced1",Bv="#9400d3",Gv="#ff1493",Dv="#00bfff",kv="#696969",zv="#696969",Xv="#1e90ff",jv="#b22222",Hv="#fffaf0",Vv="#228b22",Wv="#ff00ff",Yv="#dcdcdc",$v="#f8f8ff",qv="#daa520",Kv="#ffd700",Zv="#808080",Jv="#008000",Qv="#adff2f",t_="#808080",e_="#f0fff0",r_="#ff69b4",i_="#cd5c5c",n_="#4b0082",o_="#fffff0",s_="#f0e68c",a_="#fff0f5",u_="#e6e6fa",h_="#7cfc00",l_="#fffacd",f_="#add8e6",c_="#f08080",d_="#e0ffff",p_="#fafad2",v_="#d3d3d3",__="#90ee90",m_="#d3d3d3",g_="#ffb6c1",y_="#ffa07a",x_="#20b2aa",b_="#87cefa",T_="#778899",C_="#778899",E_="#b0c4de",w_="#ffffe0",A_="#00ff00",P_="#32cd32",I_="#faf0e6",R_="#ff00ff",S_="#800000",O_="#66cdaa",N_="#0000cd",F_="#ba55d3",U_="#9370db",L_="#3cb371",M_="#7b68ee",B_="#00fa9a",G_="#48d1cc",D_="#c71585",k_="#191970",z_="#f5fffa",X_="#ffe4e1",j_="#ffe4b5",H_="#ffdead",V_="#000080",W_="#fdf5e6",Y_="#808000",$_="#6b8e23",q_="#ffa500",K_="#ff4500",Z_="#da70d6",J_="#eee8aa",Q_="#98fb98",tm="#afeeee",em="#db7093",rm="#ffefd5",im="#ffdab9",nm="#cd853f",om="#ffc0cb",sm="#dda0dd",am="#b0e0e6",um="#800080",hm="#663399",lm="#ff0000",fm="#bc8f8f",cm="#4169e1",dm="#8b4513",pm="#fa8072",vm="#f4a460",_m="#2e8b57",mm="#fff5ee",gm="#a0522d",ym="#c0c0c0",xm="#87ceeb",bm="#6a5acd",Tm="#708090",Cm="#708090",Em="#fffafa",wm="#00ff7f",Am="#4682b4",Pm="#d2b48c",Im="#008080",Rm="#d8bfd8",Sm="#ff6347",Om="#40e0d0",Nm="#ee82ee",Fm="#f5deb3",Um="#ffffff",Lm="#f5f5f5",Mm="#ffff00",Bm="#9acd32",Gm={aliceblue:Jp,antiquewhite:Qp,aqua:tv,aquamarine:ev,azure:rv,beige:iv,bisque:nv,black:ov,blanchedalmond:sv,blue:av,blueviolet:uv,brown:hv,burlywood:lv,cadetblue:fv,chartreuse:cv,chocolate:dv,coral:pv,cornflowerblue:vv,cornsilk:_v,crimson:mv,cyan:gv,darkblue:yv,darkcyan:xv,darkgoldenrod:bv,darkgray:Tv,darkgreen:Cv,darkgrey:Ev,darkkhaki:wv,darkmagenta:Av,darkolivegreen:Pv,darkorange:Iv,darkorchid:Rv,darkred:Sv,darksalmon:Ov,darkseagreen:Nv,darkslateblue:Fv,darkslategray:Uv,darkslategrey:Lv,darkturquoise:Mv,darkviolet:Bv,deeppink:Gv,deepskyblue:Dv,dimgray:kv,dimgrey:zv,dodgerblue:Xv,firebrick:jv,floralwhite:Hv,forestgreen:Vv,fuchsia:Wv,gainsboro:Yv,ghostwhite:$v,goldenrod:qv,gold:Kv,gray:Zv,green:Jv,greenyellow:Qv,grey:t_,honeydew:e_,hotpink:r_,indianred:i_,indigo:n_,ivory:o_,khaki:s_,lavenderblush:a_,lavender:u_,lawngreen:h_,lemonchiffon:l_,lightblue:f_,lightcoral:c_,lightcyan:d_,lightgoldenrodyellow:p_,lightgray:v_,lightgreen:__,lightgrey:m_,lightpink:g_,lightsalmon:y_,lightseagreen:x_,lightskyblue:b_,lightslategray:T_,lightslategrey:C_,lightsteelblue:E_,lightyellow:w_,lime:A_,limegreen:P_,linen:I_,magenta:R_,maroon:S_,mediumaquamarine:O_,mediumblue:N_,mediumorchid:F_,mediumpurple:U_,mediumseagreen:L_,mediumslateblue:M_,mediumspringgreen:B_,mediumturquoise:G_,mediumvioletred:D_,midnightblue:k_,mintcream:z_,mistyrose:X_,moccasin:j_,navajowhite:H_,navy:V_,oldlace:W_,olive:Y_,olivedrab:$_,orange:q_,orangered:K_,orchid:Z_,palegoldenrod:J_,palegreen:Q_,paleturquoise:tm,palevioletred:em,papayawhip:rm,peachpuff:im,peru:nm,pink:om,plum:sm,powderblue:am,purple:um,rebeccapurple:hm,red:lm,rosybrown:fm,royalblue:cm,saddlebrown:dm,salmon:pm,sandybrown:vm,seagreen:_m,seashell:mm,sienna:gm,silver:ym,skyblue:xm,slateblue:bm,slategray:Tm,slategrey:Cm,snow:Em,springgreen:wm,steelblue:Am,tan:Pm,teal:Im,thistle:Rm,tomato:Sm,turquoise:Om,violet:Nm,wheat:Fm,white:Um,whitesmoke:Lm,yellow:Mm,yellowgreen:Bm};function Rt(r,e){return e===void 0&&(e=[]),e[0]=(r>>16&255)/255,e[1]=(r>>8&255)/255,e[2]=(r&255)/255,e}function Oa(r){var e=r.toString(16);return e="000000".substring(0,6-e.length)+e,"#"+e}function Na(r){return typeof r=="string"&&(r=Gm[r.toLowerCase()]||r,r[0]==="#"&&(r=r.slice(1))),parseInt(r,16)}function ie(r){return(r[0]*255<<16)+(r[1]*255<<8)+(r[2]*255|0)}function Dm(){for(var r=[],e=[],t=0;t<32;t++)r[t]=t,e[t]=t;r[B.NORMAL_NPM]=B.NORMAL,r[B.ADD_NPM]=B.ADD,r[B.SCREEN_NPM]=B.SCREEN,e[B.NORMAL]=B.NORMAL_NPM,e[B.ADD]=B.ADD_NPM,e[B.SCREEN]=B.SCREEN_NPM;var i=[];return i.push(e),i.push(r),i}var Fa=Dm();function Ua(r,e){return Fa[e?1:0][r]}function gf(r,e,t,i){return t=t||new Float32Array(4),i||i===void 0?(t[0]=r[0]*e,t[1]=r[1]*e,t[2]=r[2]*e):(t[0]=r[0],t[1]=r[1],t[2]=r[2]),t[3]=e,t}function Yn(r,e){if(e===1)return(e*255<<24)+r;if(e===0)return 0;var t=r>>16&255,i=r>>8&255,n=r&255;return t=t*e+.5|0,i=i*e+.5|0,n=n*e+.5|0,(e*255<<24)+(t<<16)+(i<<8)+n}function La(r,e,t,i){return t=t||new Float32Array(4),t[0]=(r>>16&255)/255,t[1]=(r>>8&255)/255,t[2]=(r&255)/255,(i||i===void 0)&&(t[0]*=e,t[1]*=e,t[2]*=e),t[3]=e,t}function yf(r,e){e===void 0&&(e=null);var t=r*6;if(e=e||new Uint16Array(t),e.length!==t)throw new Error("Out buffer length is incorrect, got "+e.length+" and expected "+t);for(var i=0,n=0;i<t;i+=6,n+=4)e[i+0]=n+0,e[i+1]=n+1,e[i+2]=n+2,e[i+3]=n+0,e[i+4]=n+2,e[i+5]=n+3;return e}function $n(r){if(r.BYTES_PER_ELEMENT===4)return r instanceof Float32Array?"Float32Array":r instanceof Uint32Array?"Uint32Array":"Int32Array";if(r.BYTES_PER_ELEMENT===2){if(r instanceof Uint16Array)return"Uint16Array"}else if(r.BYTES_PER_ELEMENT===1&&r instanceof Uint8Array)return"Uint8Array";return null}var km={Float32Array,Uint32Array,Int32Array,Uint8Array};function zm(r,e){for(var t=0,i=0,n={},o=0;o<r.length;o++)i+=e[o],t+=r[o].length;for(var s=new ArrayBuffer(t*4),a=null,u=0,o=0;o<r.length;o++){var h=e[o],l=r[o],c=$n(l);n[c]||(n[c]=new km[c](s)),a=n[c];for(var f=0;f<l.length;f++){var d=(f/h|0)*i+u,v=f%h;a[d+v]=l[f]}u+=h}return new Float32Array(s)}function Ii(r){return r+=r===0?1:0,--r,r|=r>>>1,r|=r>>>2,r|=r>>>4,r|=r>>>8,r|=r>>>16,r+1}function rs(r){return!(r&r-1)&&!!r}function is(r){var e=(r>65535?1:0)<<4;r>>>=e;var t=(r>255?1:0)<<3;return r>>>=t,e|=t,t=(r>15?1:0)<<2,r>>>=t,e|=t,t=(r>3?1:0)<<1,r>>>=t,e|=t,e|r>>1}function xr(r,e,t){var i=r.length,n;if(!(e>=i||t===0)){t=e+t>i?i-e:t;var o=i-t;for(n=e;n<o;++n)r[n]=r[n+t];r.length=o}}function gr(r){return r===0?0:r<0?-1:1}var Xm=0;function Ze(){return++Xm}var fh={};function Le(r,e,t){if(t===void 0&&(t=3),!fh[e]){var i=new Error().stack;typeof i=="undefined"?console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r):(i=i.split(`
`).splice(t).join(`
`),console.groupCollapsed?(console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s","color:#614108;background:#fffbe6","font-weight:normal;color:#614108;background:#fffbe6",e+`
Deprecated since v`+r),console.warn(i),console.groupEnd()):(console.warn("PixiJS Deprecation Warning: ",e+`
Deprecated since v`+r),console.warn(i))),fh[e]=!0}}var ns={},bt=Object.create(null),qt=Object.create(null);function xf(){var r;for(r in bt)bt[r].destroy();for(r in qt)qt[r].destroy()}function jm(){var r;for(r in bt)delete bt[r];for(r in qt)delete qt[r]}var os=function(){function r(e,t,i){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),this.resolution=i||U.RESOLUTION,this.resize(e,t)}return r.prototype.clear=function(){this.context.setTransform(1,0,0,1,0,0),this.context.clearRect(0,0,this.canvas.width,this.canvas.height)},r.prototype.resize=function(e,t){this.canvas.width=Math.round(e*this.resolution),this.canvas.height=Math.round(t*this.resolution)},r.prototype.destroy=function(){this.context=null,this.canvas=null},Object.defineProperty(r.prototype,"width",{get:function(){return this.canvas.width},set:function(e){this.canvas.width=Math.round(e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this.canvas.height},set:function(e){this.canvas.height=Math.round(e)},enumerable:!1,configurable:!0}),r}();function bf(r){var e=r.width,t=r.height,i=r.getContext("2d"),n=i.getImageData(0,0,e,t),o=n.data,s=o.length,a={top:null,left:null,right:null,bottom:null},u=null,h,l,c;for(h=0;h<s;h+=4)o[h+3]!==0&&(l=h/4%e,c=~~(h/4/e),a.top===null&&(a.top=c),(a.left===null||l<a.left)&&(a.left=l),(a.right===null||a.right<l)&&(a.right=l+1),(a.bottom===null||a.bottom<c)&&(a.bottom=c));return a.top!==null&&(e=a.right-a.left,t=a.bottom-a.top+1,u=i.getImageData(a.left,a.top,e,t)),{height:t,width:e,data:u}}var Tf=/^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;function Hm(r){var e=Tf.exec(r);if(e)return{mediaType:e[1]?e[1].toLowerCase():void 0,subType:e[2]?e[2].toLowerCase():void 0,charset:e[3]?e[3].toLowerCase():void 0,encoding:e[4]?e[4].toLowerCase():void 0,data:e[5]}}var en;function Cf(r,e){if(e===void 0&&(e=globalThis.location),r.indexOf("data:")===0)return"";e=e||globalThis.location,en||(en=document.createElement("a")),en.href=r;var t=mr.parse(en.href),i=!t.port&&e.port===""||t.port===e.port;return t.hostname!==e.hostname||!i||t.protocol!==e.protocol?"anonymous":""}function Ri(r,e){var t=U.RETINA_PREFIX.exec(r);return t?parseFloat(t[1]):e!==void 0?e:1}var Vm=Object.freeze(Object.defineProperty({__proto__:null,BaseTextureCache:qt,CanvasRenderTarget:os,DATA_URI:Tf,ProgramCache:ns,TextureCache:bt,clearTextureCache:jm,correctBlendMode:Ua,createIndicesForQuads:yf,decomposeDataUri:Hm,deprecation:Le,destroyTextureCache:xf,determineCrossOrigin:Cf,getBufferType:$n,getResolutionOfUrl:Ri,hex2rgb:Rt,hex2string:Oa,interleaveTypedArrays:zm,isPow2:rs,isWebGLSupported:mf,log2:is,nextPow2:Ii,premultiplyBlendMode:Fa,premultiplyRgba:gf,premultiplyTint:Yn,premultiplyTintToRgba:La,removeItems:xr,rgb2hex:ie,sayHello:_f,sign:gr,skipHello:vf,string2hex:Na,trimCanvas:bf,uid:Ze,url:mr,isMobile:Kt,EventEmitter:ti,earcut:Sa},Symbol.toStringTag,{value:"Module"}));/*!
 * @pixi/math - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/math is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Si=Math.PI*2,Ef=180/Math.PI,Je=Math.PI/180,ut;(function(r){r[r.POLY=0]="POLY",r[r.RECT=1]="RECT",r[r.CIRC=2]="CIRC",r[r.ELIP=3]="ELIP",r[r.RREC=4]="RREC"})(ut||(ut={}));var Y=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this.x=0,this.y=0,this.x=e,this.y=t}return r.prototype.clone=function(){return new r(this.x,this.y)},r.prototype.copyFrom=function(e){return this.set(e.x,e.y),this},r.prototype.copyTo=function(e){return e.set(this.x,this.y),e},r.prototype.equals=function(e){return e.x===this.x&&e.y===this.y},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x=e,this.y=t,this},r.prototype.toString=function(){return"[@pixi/math:Point x="+this.x+" y="+this.y+"]"},r}(),rn=[new Y,new Y,new Y,new Y],K=function(){function r(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=0),this.x=Number(e),this.y=Number(t),this.width=Number(i),this.height=Number(n),this.type=ut.RECT}return Object.defineProperty(r.prototype,"left",{get:function(){return this.x},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"right",{get:function(){return this.x+this.width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"top",{get:function(){return this.y},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"bottom",{get:function(){return this.y+this.height},enumerable:!1,configurable:!0}),Object.defineProperty(r,"EMPTY",{get:function(){return new r(0,0,0,0)},enumerable:!1,configurable:!0}),r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.copyFrom=function(e){return this.x=e.x,this.y=e.y,this.width=e.width,this.height=e.height,this},r.prototype.copyTo=function(e){return e.x=this.x,e.y=this.y,e.width=this.width,e.height=this.height,e},r.prototype.contains=function(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height},r.prototype.intersects=function(e,t){if(!t){var i=this.x<e.x?e.x:this.x,n=this.right>e.right?e.right:this.right;if(n<=i)return!1;var o=this.y<e.y?e.y:this.y,s=this.bottom>e.bottom?e.bottom:this.bottom;return s>o}var a=this.left,u=this.right,h=this.top,l=this.bottom;if(u<=a||l<=h)return!1;var c=rn[0].set(e.left,e.top),f=rn[1].set(e.left,e.bottom),d=rn[2].set(e.right,e.top),v=rn[3].set(e.right,e.bottom);if(d.x<=c.x||f.y<=c.y)return!1;var p=Math.sign(t.a*t.d-t.b*t.c);if(p===0||(t.apply(c,c),t.apply(f,f),t.apply(d,d),t.apply(v,v),Math.max(c.x,f.x,d.x,v.x)<=a||Math.min(c.x,f.x,d.x,v.x)>=u||Math.max(c.y,f.y,d.y,v.y)<=h||Math.min(c.y,f.y,d.y,v.y)>=l))return!1;var _=p*(f.y-c.y),m=p*(c.x-f.x),y=_*a+m*h,b=_*u+m*h,C=_*a+m*l,x=_*u+m*l;if(Math.max(y,b,C,x)<=_*c.x+m*c.y||Math.min(y,b,C,x)>=_*v.x+m*v.y)return!1;var g=p*(c.y-d.y),E=p*(d.x-c.x),w=g*a+E*h,T=g*u+E*h,A=g*a+E*l,O=g*u+E*l;return!(Math.max(w,T,A,O)<=g*c.x+E*c.y||Math.min(w,T,A,O)>=g*v.x+E*v.y)},r.prototype.pad=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),this.x-=e,this.y-=t,this.width+=e*2,this.height+=t*2,this},r.prototype.fit=function(e){var t=Math.max(this.x,e.x),i=Math.min(this.x+this.width,e.x+e.width),n=Math.max(this.y,e.y),o=Math.min(this.y+this.height,e.y+e.height);return this.x=t,this.width=Math.max(i-t,0),this.y=n,this.height=Math.max(o-n,0),this},r.prototype.ceil=function(e,t){e===void 0&&(e=1),t===void 0&&(t=.001);var i=Math.ceil((this.x+this.width-t)*e)/e,n=Math.ceil((this.y+this.height-t)*e)/e;return this.x=Math.floor((this.x+t)*e)/e,this.y=Math.floor((this.y+t)*e)/e,this.width=i-this.x,this.height=n-this.y,this},r.prototype.enlarge=function(e){var t=Math.min(this.x,e.x),i=Math.max(this.x+this.width,e.x+e.width),n=Math.min(this.y,e.y),o=Math.max(this.y+this.height,e.y+e.height);return this.x=t,this.width=i-t,this.y=n,this.height=o-n,this},r.prototype.toString=function(){return"[@pixi/math:Rectangle x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),wf=function(){function r(e,t,i){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),this.x=e,this.y=t,this.radius=i,this.type=ut.CIRC}return r.prototype.clone=function(){return new r(this.x,this.y,this.radius)},r.prototype.contains=function(e,t){if(this.radius<=0)return!1;var i=this.radius*this.radius,n=this.x-e,o=this.y-t;return n*=n,o*=o,n+o<=i},r.prototype.getBounds=function(){return new K(this.x-this.radius,this.y-this.radius,this.radius*2,this.radius*2)},r.prototype.toString=function(){return"[@pixi/math:Circle x="+this.x+" y="+this.y+" radius="+this.radius+"]"},r}(),Af=function(){function r(e,t,i,n){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=0),this.x=e,this.y=t,this.width=i,this.height=n,this.type=ut.ELIP}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;var i=(e-this.x)/this.width,n=(t-this.y)/this.height;return i*=i,n*=n,i+n<=1},r.prototype.getBounds=function(){return new K(this.x-this.width,this.y-this.height,this.width,this.height)},r.prototype.toString=function(){return"[@pixi/math:Ellipse x="+this.x+" y="+this.y+" width="+this.width+" height="+this.height+"]"},r}(),mi=function(){function r(){for(var e=arguments,t=[],i=0;i<arguments.length;i++)t[i]=e[i];var n=Array.isArray(t[0])?t[0]:t;if(typeof n[0]!="number"){for(var o=[],s=0,a=n.length;s<a;s++)o.push(n[s].x,n[s].y);n=o}this.points=n,this.type=ut.POLY,this.closeStroke=!0}return r.prototype.clone=function(){var e=this.points.slice(),t=new r(e);return t.closeStroke=this.closeStroke,t},r.prototype.contains=function(e,t){for(var i=!1,n=this.points.length/2,o=0,s=n-1;o<n;s=o++){var a=this.points[o*2],u=this.points[o*2+1],h=this.points[s*2],l=this.points[s*2+1],c=u>t!=l>t&&e<(h-a)*((t-u)/(l-u))+a;c&&(i=!i)}return i},r.prototype.toString=function(){return"[@pixi/math:Polygon"+("closeStroke="+this.closeStroke)+("points="+this.points.reduce(function(e,t){return e+", "+t},"")+"]")},r}(),Pf=function(){function r(e,t,i,n,o){e===void 0&&(e=0),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=0),o===void 0&&(o=20),this.x=e,this.y=t,this.width=i,this.height=n,this.radius=o,this.type=ut.RREC}return r.prototype.clone=function(){return new r(this.x,this.y,this.width,this.height,this.radius)},r.prototype.contains=function(e,t){if(this.width<=0||this.height<=0)return!1;if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){var i=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+i&&t<=this.y+this.height-i||e>=this.x+i&&e<=this.x+this.width-i)return!0;var n=e-(this.x+i),o=t-(this.y+i),s=i*i;if(n*n+o*o<=s||(n=e-(this.x+this.width-i),n*n+o*o<=s)||(o=t-(this.y+this.height-i),n*n+o*o<=s)||(n=e-(this.x+i),n*n+o*o<=s))return!0}return!1},r.prototype.toString=function(){return"[@pixi/math:RoundedRectangle x="+this.x+" y="+this.y+("width="+this.width+" height="+this.height+" radius="+this.radius+"]")},r}(),ze=function(){function r(e,t,i,n){i===void 0&&(i=0),n===void 0&&(n=0),this._x=i,this._y=n,this.cb=e,this.scope=t}return r.prototype.clone=function(e,t){return e===void 0&&(e=this.cb),t===void 0&&(t=this.scope),new r(e,t,this._x,this._y)},r.prototype.set=function(e,t){return e===void 0&&(e=0),t===void 0&&(t=e),(this._x!==e||this._y!==t)&&(this._x=e,this._y=t,this.cb.call(this.scope)),this},r.prototype.copyFrom=function(e){return(this._x!==e.x||this._y!==e.y)&&(this._x=e.x,this._y=e.y,this.cb.call(this.scope)),this},r.prototype.copyTo=function(e){return e.set(this._x,this._y),e},r.prototype.equals=function(e){return e.x===this._x&&e.y===this._y},r.prototype.toString=function(){return"[@pixi/math:ObservablePoint x="+0+" y="+0+" scope="+this.scope+"]"},Object.defineProperty(r.prototype,"x",{get:function(){return this._x},set:function(e){this._x!==e&&(this._x=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"y",{get:function(){return this._y},set:function(e){this._y!==e&&(this._y=e,this.cb.call(this.scope))},enumerable:!1,configurable:!0}),r}(),_t=function(){function r(e,t,i,n,o,s){e===void 0&&(e=1),t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=0),s===void 0&&(s=0),this.array=null,this.a=e,this.b=t,this.c=i,this.d=n,this.tx=o,this.ty=s}return r.prototype.fromArray=function(e){this.a=e[0],this.b=e[1],this.c=e[3],this.d=e[4],this.tx=e[2],this.ty=e[5]},r.prototype.set=function(e,t,i,n,o,s){return this.a=e,this.b=t,this.c=i,this.d=n,this.tx=o,this.ty=s,this},r.prototype.toArray=function(e,t){this.array||(this.array=new Float32Array(9));var i=t||this.array;return e?(i[0]=this.a,i[1]=this.b,i[2]=0,i[3]=this.c,i[4]=this.d,i[5]=0,i[6]=this.tx,i[7]=this.ty,i[8]=1):(i[0]=this.a,i[1]=this.c,i[2]=this.tx,i[3]=this.b,i[4]=this.d,i[5]=this.ty,i[6]=0,i[7]=0,i[8]=1),i},r.prototype.apply=function(e,t){t=t||new Y;var i=e.x,n=e.y;return t.x=this.a*i+this.c*n+this.tx,t.y=this.b*i+this.d*n+this.ty,t},r.prototype.applyInverse=function(e,t){t=t||new Y;var i=1/(this.a*this.d+this.c*-this.b),n=e.x,o=e.y;return t.x=this.d*i*n+-this.c*i*o+(this.ty*this.c-this.tx*this.d)*i,t.y=this.a*i*o+-this.b*i*n+(-this.ty*this.a+this.tx*this.b)*i,t},r.prototype.translate=function(e,t){return this.tx+=e,this.ty+=t,this},r.prototype.scale=function(e,t){return this.a*=e,this.d*=t,this.c*=e,this.b*=t,this.tx*=e,this.ty*=t,this},r.prototype.rotate=function(e){var t=Math.cos(e),i=Math.sin(e),n=this.a,o=this.c,s=this.tx;return this.a=n*t-this.b*i,this.b=n*i+this.b*t,this.c=o*t-this.d*i,this.d=o*i+this.d*t,this.tx=s*t-this.ty*i,this.ty=s*i+this.ty*t,this},r.prototype.append=function(e){var t=this.a,i=this.b,n=this.c,o=this.d;return this.a=e.a*t+e.b*n,this.b=e.a*i+e.b*o,this.c=e.c*t+e.d*n,this.d=e.c*i+e.d*o,this.tx=e.tx*t+e.ty*n+this.tx,this.ty=e.tx*i+e.ty*o+this.ty,this},r.prototype.setTransform=function(e,t,i,n,o,s,a,u,h){return this.a=Math.cos(a+h)*o,this.b=Math.sin(a+h)*o,this.c=-Math.sin(a-u)*s,this.d=Math.cos(a-u)*s,this.tx=e-(i*this.a+n*this.c),this.ty=t-(i*this.b+n*this.d),this},r.prototype.prepend=function(e){var t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){var i=this.a,n=this.c;this.a=i*e.a+this.b*e.c,this.b=i*e.b+this.b*e.d,this.c=n*e.a+this.d*e.c,this.d=n*e.b+this.d*e.d}return this.tx=t*e.a+this.ty*e.c+e.tx,this.ty=t*e.b+this.ty*e.d+e.ty,this},r.prototype.decompose=function(e){var t=this.a,i=this.b,n=this.c,o=this.d,s=e.pivot,a=-Math.atan2(-n,o),u=Math.atan2(i,t),h=Math.abs(a+u);return h<1e-5||Math.abs(Si-h)<1e-5?(e.rotation=u,e.skew.x=e.skew.y=0):(e.rotation=0,e.skew.x=a,e.skew.y=u),e.scale.x=Math.sqrt(t*t+i*i),e.scale.y=Math.sqrt(n*n+o*o),e.position.x=this.tx+(s.x*t+s.y*n),e.position.y=this.ty+(s.x*i+s.y*o),e},r.prototype.invert=function(){var e=this.a,t=this.b,i=this.c,n=this.d,o=this.tx,s=e*n-t*i;return this.a=n/s,this.b=-t/s,this.c=-i/s,this.d=e/s,this.tx=(i*this.ty-n*o)/s,this.ty=-(e*this.ty-t*o)/s,this},r.prototype.identity=function(){return this.a=1,this.b=0,this.c=0,this.d=1,this.tx=0,this.ty=0,this},r.prototype.clone=function(){var e=new r;return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyTo=function(e){return e.a=this.a,e.b=this.b,e.c=this.c,e.d=this.d,e.tx=this.tx,e.ty=this.ty,e},r.prototype.copyFrom=function(e){return this.a=e.a,this.b=e.b,this.c=e.c,this.d=e.d,this.tx=e.tx,this.ty=e.ty,this},r.prototype.toString=function(){return"[@pixi/math:Matrix a="+this.a+" b="+this.b+" c="+this.c+" d="+this.d+" tx="+this.tx+" ty="+this.ty+"]"},Object.defineProperty(r,"IDENTITY",{get:function(){return new r},enumerable:!1,configurable:!0}),Object.defineProperty(r,"TEMP_MATRIX",{get:function(){return new r},enumerable:!1,configurable:!0}),r}(),lr=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1],fr=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1],cr=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1],dr=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1],ss=[],If=[],nn=Math.sign;function Wm(){for(var r=0;r<16;r++){var e=[];ss.push(e);for(var t=0;t<16;t++)for(var i=nn(lr[r]*lr[t]+cr[r]*fr[t]),n=nn(fr[r]*lr[t]+dr[r]*fr[t]),o=nn(lr[r]*cr[t]+cr[r]*dr[t]),s=nn(fr[r]*cr[t]+dr[r]*dr[t]),a=0;a<16;a++)if(lr[a]===i&&fr[a]===n&&cr[a]===o&&dr[a]===s){e.push(a);break}}for(var r=0;r<16;r++){var u=new _t;u.set(lr[r],fr[r],cr[r],dr[r],0,0),If.push(u)}}Wm();var at={E:0,SE:1,S:2,SW:3,W:4,NW:5,N:6,NE:7,MIRROR_VERTICAL:8,MAIN_DIAGONAL:10,MIRROR_HORIZONTAL:12,REVERSE_DIAGONAL:14,uX:function(r){return lr[r]},uY:function(r){return fr[r]},vX:function(r){return cr[r]},vY:function(r){return dr[r]},inv:function(r){return r&8?r&15:-r&7},add:function(r,e){return ss[r][e]},sub:function(r,e){return ss[r][at.inv(e)]},rotate180:function(r){return r^4},isVertical:function(r){return(r&3)===2},byDirection:function(r,e){return Math.abs(r)*2<=Math.abs(e)?e>=0?at.S:at.N:Math.abs(e)*2<=Math.abs(r)?r>0?at.E:at.W:e>0?r>0?at.SE:at.SW:r>0?at.NE:at.NW},matrixAppendRotationInv:function(r,e,t,i){t===void 0&&(t=0),i===void 0&&(i=0);var n=If[at.inv(e)];n.tx=t,n.ty=i,r.append(n)}},Ma=function(){function r(){this.worldTransform=new _t,this.localTransform=new _t,this.position=new ze(this.onChange,this,0,0),this.scale=new ze(this.onChange,this,1,1),this.pivot=new ze(this.onChange,this,0,0),this.skew=new ze(this.updateSkew,this,0,0),this._rotation=0,this._cx=1,this._sx=0,this._cy=0,this._sy=1,this._localID=0,this._currentLocalID=0,this._worldID=0,this._parentID=0}return r.prototype.onChange=function(){this._localID++},r.prototype.updateSkew=function(){this._cx=Math.cos(this._rotation+this.skew.y),this._sx=Math.sin(this._rotation+this.skew.y),this._cy=-Math.sin(this._rotation-this.skew.x),this._sy=Math.cos(this._rotation-this.skew.x),this._localID++},r.prototype.toString=function(){return"[@pixi/math:Transform "+("position=("+this.position.x+", "+this.position.y+") ")+("rotation="+this.rotation+" ")+("scale=("+this.scale.x+", "+this.scale.y+") ")+("skew=("+this.skew.x+", "+this.skew.y+") ")+"]"},r.prototype.updateLocalTransform=function(){var e=this.localTransform;this._localID!==this._currentLocalID&&(e.a=this._cx*this.scale.x,e.b=this._sx*this.scale.x,e.c=this._cy*this.scale.y,e.d=this._sy*this.scale.y,e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c),e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d),this._currentLocalID=this._localID,this._parentID=-1)},r.prototype.updateTransform=function(e){var t=this.localTransform;if(this._localID!==this._currentLocalID&&(t.a=this._cx*this.scale.x,t.b=this._sx*this.scale.x,t.c=this._cy*this.scale.y,t.d=this._sy*this.scale.y,t.tx=this.position.x-(this.pivot.x*t.a+this.pivot.y*t.c),t.ty=this.position.y-(this.pivot.x*t.b+this.pivot.y*t.d),this._currentLocalID=this._localID,this._parentID=-1),this._parentID!==e._worldID){var i=e.worldTransform,n=this.worldTransform;n.a=t.a*i.a+t.b*i.c,n.b=t.a*i.b+t.b*i.d,n.c=t.c*i.a+t.d*i.c,n.d=t.c*i.b+t.d*i.d,n.tx=t.tx*i.a+t.ty*i.c+i.tx,n.ty=t.tx*i.b+t.ty*i.d+i.ty,this._parentID=e._worldID,this._worldID++}},r.prototype.setFromMatrix=function(e){e.decompose(this),this._localID++},Object.defineProperty(r.prototype,"rotation",{get:function(){return this._rotation},set:function(e){this._rotation!==e&&(this._rotation=e,this.updateSkew())},enumerable:!1,configurable:!0}),r.IDENTITY=new r,r}();/*!
 * @pixi/display - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/display is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */U.SORTABLE_CHILDREN=!1;var Hr=function(){function r(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0,this.rect=null,this.updateID=-1}return r.prototype.isEmpty=function(){return this.minX>this.maxX||this.minY>this.maxY},r.prototype.clear=function(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0},r.prototype.getRectangle=function(e){return this.minX>this.maxX||this.minY>this.maxY?K.EMPTY:(e=e||new K(0,0,1,1),e.x=this.minX,e.y=this.minY,e.width=this.maxX-this.minX,e.height=this.maxY-this.minY,e)},r.prototype.addPoint=function(e){this.minX=Math.min(this.minX,e.x),this.maxX=Math.max(this.maxX,e.x),this.minY=Math.min(this.minY,e.y),this.maxY=Math.max(this.maxY,e.y)},r.prototype.addPointMatrix=function(e,t){var i=e.a,n=e.b,o=e.c,s=e.d,a=e.tx,u=e.ty,h=i*t.x+o*t.y+a,l=n*t.x+s*t.y+u;this.minX=Math.min(this.minX,h),this.maxX=Math.max(this.maxX,h),this.minY=Math.min(this.minY,l),this.maxY=Math.max(this.maxY,l)},r.prototype.addQuad=function(e){var t=this.minX,i=this.minY,n=this.maxX,o=this.maxY,s=e[0],a=e[1];t=s<t?s:t,i=a<i?a:i,n=s>n?s:n,o=a>o?a:o,s=e[2],a=e[3],t=s<t?s:t,i=a<i?a:i,n=s>n?s:n,o=a>o?a:o,s=e[4],a=e[5],t=s<t?s:t,i=a<i?a:i,n=s>n?s:n,o=a>o?a:o,s=e[6],a=e[7],t=s<t?s:t,i=a<i?a:i,n=s>n?s:n,o=a>o?a:o,this.minX=t,this.minY=i,this.maxX=n,this.maxY=o},r.prototype.addFrame=function(e,t,i,n,o){this.addFrameMatrix(e.worldTransform,t,i,n,o)},r.prototype.addFrameMatrix=function(e,t,i,n,o){var s=e.a,a=e.b,u=e.c,h=e.d,l=e.tx,c=e.ty,f=this.minX,d=this.minY,v=this.maxX,p=this.maxY,_=s*t+u*i+l,m=a*t+h*i+c;f=_<f?_:f,d=m<d?m:d,v=_>v?_:v,p=m>p?m:p,_=s*n+u*i+l,m=a*n+h*i+c,f=_<f?_:f,d=m<d?m:d,v=_>v?_:v,p=m>p?m:p,_=s*t+u*o+l,m=a*t+h*o+c,f=_<f?_:f,d=m<d?m:d,v=_>v?_:v,p=m>p?m:p,_=s*n+u*o+l,m=a*n+h*o+c,f=_<f?_:f,d=m<d?m:d,v=_>v?_:v,p=m>p?m:p,this.minX=f,this.minY=d,this.maxX=v,this.maxY=p},r.prototype.addVertexData=function(e,t,i){for(var n=this.minX,o=this.minY,s=this.maxX,a=this.maxY,u=t;u<i;u+=2){var h=e[u],l=e[u+1];n=h<n?h:n,o=l<o?l:o,s=h>s?h:s,a=l>a?l:a}this.minX=n,this.minY=o,this.maxX=s,this.maxY=a},r.prototype.addVertices=function(e,t,i,n){this.addVerticesMatrix(e.worldTransform,t,i,n)},r.prototype.addVerticesMatrix=function(e,t,i,n,o,s){o===void 0&&(o=0),s===void 0&&(s=o);for(var a=e.a,u=e.b,h=e.c,l=e.d,c=e.tx,f=e.ty,d=this.minX,v=this.minY,p=this.maxX,_=this.maxY,m=i;m<n;m+=2){var y=t[m],b=t[m+1],C=a*y+h*b+c,x=l*b+u*y+f;d=Math.min(d,C-o),p=Math.max(p,C+o),v=Math.min(v,x-s),_=Math.max(_,x+s)}this.minX=d,this.minY=v,this.maxX=p,this.maxY=_},r.prototype.addBounds=function(e){var t=this.minX,i=this.minY,n=this.maxX,o=this.maxY;this.minX=e.minX<t?e.minX:t,this.minY=e.minY<i?e.minY:i,this.maxX=e.maxX>n?e.maxX:n,this.maxY=e.maxY>o?e.maxY:o},r.prototype.addBoundsMask=function(e,t){var i=e.minX>t.minX?e.minX:t.minX,n=e.minY>t.minY?e.minY:t.minY,o=e.maxX<t.maxX?e.maxX:t.maxX,s=e.maxY<t.maxY?e.maxY:t.maxY;if(i<=o&&n<=s){var a=this.minX,u=this.minY,h=this.maxX,l=this.maxY;this.minX=i<a?i:a,this.minY=n<u?n:u,this.maxX=o>h?o:h,this.maxY=s>l?s:l}},r.prototype.addBoundsMatrix=function(e,t){this.addFrameMatrix(t,e.minX,e.minY,e.maxX,e.maxY)},r.prototype.addBoundsArea=function(e,t){var i=e.minX>t.x?e.minX:t.x,n=e.minY>t.y?e.minY:t.y,o=e.maxX<t.x+t.width?e.maxX:t.x+t.width,s=e.maxY<t.y+t.height?e.maxY:t.y+t.height;if(i<=o&&n<=s){var a=this.minX,u=this.minY,h=this.maxX,l=this.maxY;this.minX=i<a?i:a,this.minY=n<u?n:u,this.maxX=o>h?o:h,this.maxY=s>l?s:l}},r.prototype.pad=function(e,t){e===void 0&&(e=0),t===void 0&&(t=e),this.isEmpty()||(this.minX-=e,this.maxX+=e,this.minY-=t,this.maxY+=t)},r.prototype.addFramePad=function(e,t,i,n,o,s){e-=o,t-=s,i+=o,n+=s,this.minX=this.minX<e?this.minX:e,this.maxX=this.maxX>i?this.maxX:i,this.minY=this.minY<t?this.minY:t,this.maxY=this.maxY>n?this.maxY:n},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var as=function(r,e){return as=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},as(r,e)};function Ba(r,e){as(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ht=function(r){Ba(e,r);function e(){var t=r.call(this)||this;return t.tempDisplayObjectParent=null,t.transform=new Ma,t.alpha=1,t.visible=!0,t.renderable=!0,t.cullable=!1,t.cullArea=null,t.parent=null,t.worldAlpha=1,t._lastSortedIndex=0,t._zIndex=0,t.filterArea=null,t.filters=null,t._enabledFilters=null,t._bounds=new Hr,t._localBounds=null,t._boundsID=0,t._boundsRect=null,t._localBoundsRect=null,t._mask=null,t._maskRefCount=0,t._destroyed=!1,t.isSprite=!1,t.isMask=!1,t}return e.mixin=function(t){for(var i=Object.keys(t),n=0;n<i.length;++n){var o=i[n];Object.defineProperty(e.prototype,o,Object.getOwnPropertyDescriptor(t,o))}},Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),e.prototype._recursivePostUpdateTransform=function(){this.parent?(this.parent._recursivePostUpdateTransform(),this.transform.updateTransform(this.parent.transform)):this.transform.updateTransform(this._tempDisplayObjectParent.transform)},e.prototype.updateTransform=function(){this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha},e.prototype.getBounds=function(t,i){return t||(this.parent?(this._recursivePostUpdateTransform(),this.updateTransform()):(this.parent=this._tempDisplayObjectParent,this.updateTransform(),this.parent=null)),this._bounds.updateID!==this._boundsID&&(this.calculateBounds(),this._bounds.updateID=this._boundsID),i||(this._boundsRect||(this._boundsRect=new K),i=this._boundsRect),this._bounds.getRectangle(i)},e.prototype.getLocalBounds=function(t){t||(this._localBoundsRect||(this._localBoundsRect=new K),t=this._localBoundsRect),this._localBounds||(this._localBounds=new Hr);var i=this.transform,n=this.parent;this.parent=null,this.transform=this._tempDisplayObjectParent.transform;var o=this._bounds,s=this._boundsID;this._bounds=this._localBounds;var a=this.getBounds(!1,t);return this.parent=n,this.transform=i,this._bounds=o,this._bounds.updateID+=this._boundsID-s,a},e.prototype.toGlobal=function(t,i,n){return n===void 0&&(n=!1),n||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.apply(t,i)},e.prototype.toLocal=function(t,i,n,o){return i&&(t=i.toGlobal(t,n,o)),o||(this._recursivePostUpdateTransform(),this.parent?this.displayObjectUpdateTransform():(this.parent=this._tempDisplayObjectParent,this.displayObjectUpdateTransform(),this.parent=null)),this.worldTransform.applyInverse(t,n)},e.prototype.setParent=function(t){if(!t||!t.addChild)throw new Error("setParent: Argument must be a Container");return t.addChild(this),t},e.prototype.setTransform=function(t,i,n,o,s,a,u,h,l){return t===void 0&&(t=0),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=1),s===void 0&&(s=0),a===void 0&&(a=0),u===void 0&&(u=0),h===void 0&&(h=0),l===void 0&&(l=0),this.position.x=t,this.position.y=i,this.scale.x=n||1,this.scale.y=o||1,this.rotation=s,this.skew.x=a,this.skew.y=u,this.pivot.x=h,this.pivot.y=l,this},e.prototype.destroy=function(t){this.parent&&this.parent.removeChild(this),this.emit("destroyed"),this.removeAllListeners(),this.transform=null,this.parent=null,this._bounds=null,this.mask=null,this.cullArea=null,this.filters=null,this.filterArea=null,this.hitArea=null,this.interactive=!1,this.interactiveChildren=!1,this._destroyed=!0},Object.defineProperty(e.prototype,"_tempDisplayObjectParent",{get:function(){return this.tempDisplayObjectParent===null&&(this.tempDisplayObjectParent=new Ga),this.tempDisplayObjectParent},enumerable:!1,configurable:!0}),e.prototype.enableTempParent=function(){var t=this.parent;return this.parent=this._tempDisplayObjectParent,t},e.prototype.disableTempParent=function(t){this.parent=t},Object.defineProperty(e.prototype,"x",{get:function(){return this.position.x},set:function(t){this.transform.position.x=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"y",{get:function(){return this.position.y},set:function(t){this.transform.position.y=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldTransform",{get:function(){return this.transform.worldTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"localTransform",{get:function(){return this.transform.localTransform},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"position",{get:function(){return this.transform.position},set:function(t){this.transform.position.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scale",{get:function(){return this.transform.scale},set:function(t){this.transform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pivot",{get:function(){return this.transform.pivot},set:function(t){this.transform.pivot.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"skew",{get:function(){return this.transform.skew},set:function(t){this.transform.skew.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.transform.rotation},set:function(t){this.transform.rotation=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.transform.rotation*Ef},set:function(t){this.transform.rotation=t*Je},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"zIndex",{get:function(){return this._zIndex},set:function(t){this._zIndex=t,this.parent&&(this.parent.sortDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"worldVisible",{get:function(){var t=this;do{if(!t.visible)return!1;t=t.parent}while(t);return!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mask",{get:function(){return this._mask},set:function(t){if(this._mask!==t){if(this._mask){var i=this._mask.maskObject||this._mask;i._maskRefCount--,i._maskRefCount===0&&(i.renderable=!0,i.isMask=!1)}if(this._mask=t,this._mask){var i=this._mask.maskObject||this._mask;i._maskRefCount===0&&(i.renderable=!1,i.isMask=!0),i._maskRefCount++}}},enumerable:!1,configurable:!0}),e}(ti),Ga=function(r){Ba(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.sortDirty=null,t}return e}(ht);ht.prototype.displayObjectUpdateTransform=ht.prototype.updateTransform;/*!
 * @pixi/constants - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var ch;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(ch||(ch={}));var dh;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(dh||(dh={}));var ph;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(ph||(ph={}));var vh;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(vh||(vh={}));var _h;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(_h||(_h={}));var mh;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(mh||(mh={}));var gh;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(gh||(gh={}));var yh;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(yh||(yh={}));var xh;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(xh||(xh={}));var bh;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(bh||(bh={}));var Th;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Th||(Th={}));var Ch;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(Ch||(Ch={}));var Eh;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Eh||(Eh={}));var wh;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(wh||(wh={}));var Ah;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(Ah||(Ah={}));var Ph;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(Ph||(Ph={}));var us;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(us||(us={}));var Ih;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(Ih||(Ih={}));var Rh;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Rh||(Rh={}));function Ym(r,e){return r.zIndex===e.zIndex?r._lastSortedIndex-e._lastSortedIndex:r.zIndex-e.zIndex}var It=function(r){Ba(e,r);function e(){var t=r.call(this)||this;return t.children=[],t.sortableChildren=U.SORTABLE_CHILDREN,t.sortDirty=!1,t}return e.prototype.onChildrenChange=function(t){},e.prototype.addChild=function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];if(i.length>1)for(var o=0;o<i.length;o++)this.addChild(i[o]);else{var s=i[0];s.parent&&s.parent.removeChild(s),s.parent=this,this.sortDirty=!0,s.transform._parentID=-1,this.children.push(s),this._boundsID++,this.onChildrenChange(this.children.length-1),this.emit("childAdded",s,this,this.children.length-1),s.emit("added",this)}return i[0]},e.prototype.addChildAt=function(t,i){if(i<0||i>this.children.length)throw new Error(t+"addChildAt: The index "+i+" supplied is out of bounds "+this.children.length);return t.parent&&t.parent.removeChild(t),t.parent=this,this.sortDirty=!0,t.transform._parentID=-1,this.children.splice(i,0,t),this._boundsID++,this.onChildrenChange(i),t.emit("added",this),this.emit("childAdded",t,this,i),t},e.prototype.swapChildren=function(t,i){if(t!==i){var n=this.getChildIndex(t),o=this.getChildIndex(i);this.children[n]=i,this.children[o]=t,this.onChildrenChange(n<o?n:o)}},e.prototype.getChildIndex=function(t){var i=this.children.indexOf(t);if(i===-1)throw new Error("The supplied DisplayObject must be a child of the caller");return i},e.prototype.setChildIndex=function(t,i){if(i<0||i>=this.children.length)throw new Error("The index "+i+" supplied is out of bounds "+this.children.length);var n=this.getChildIndex(t);xr(this.children,n,1),this.children.splice(i,0,t),this.onChildrenChange(i)},e.prototype.getChildAt=function(t){if(t<0||t>=this.children.length)throw new Error("getChildAt: Index ("+t+") does not exist.");return this.children[t]},e.prototype.removeChild=function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];if(i.length>1)for(var o=0;o<i.length;o++)this.removeChild(i[o]);else{var s=i[0],a=this.children.indexOf(s);if(a===-1)return null;s.parent=null,s.transform._parentID=-1,xr(this.children,a,1),this._boundsID++,this.onChildrenChange(a),s.emit("removed",this),this.emit("childRemoved",s,this,a)}return i[0]},e.prototype.removeChildAt=function(t){var i=this.getChildAt(t);return i.parent=null,i.transform._parentID=-1,xr(this.children,t,1),this._boundsID++,this.onChildrenChange(t),i.emit("removed",this),this.emit("childRemoved",i,this,t),i},e.prototype.removeChildren=function(t,i){t===void 0&&(t=0),i===void 0&&(i=this.children.length);var n=t,o=i,s=o-n,a;if(s>0&&s<=o){a=this.children.splice(n,s);for(var u=0;u<a.length;++u)a[u].parent=null,a[u].transform&&(a[u].transform._parentID=-1);this._boundsID++,this.onChildrenChange(t);for(var u=0;u<a.length;++u)a[u].emit("removed",this),this.emit("childRemoved",a[u],this,u);return a}else if(s===0&&this.children.length===0)return[];throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},e.prototype.sortChildren=function(){for(var t=!1,i=0,n=this.children.length;i<n;++i){var o=this.children[i];o._lastSortedIndex=i,!t&&o.zIndex!==0&&(t=!0)}t&&this.children.length>1&&this.children.sort(Ym),this.sortDirty=!1},e.prototype.updateTransform=function(){this.sortableChildren&&this.sortDirty&&this.sortChildren(),this._boundsID++,this.transform.updateTransform(this.parent.transform),this.worldAlpha=this.alpha*this.parent.worldAlpha;for(var t=0,i=this.children.length;t<i;++t){var n=this.children[t];n.visible&&n.updateTransform()}},e.prototype.calculateBounds=function(){this._bounds.clear(),this._calculateBounds();for(var t=0;t<this.children.length;t++){var i=this.children[t];if(!(!i.visible||!i.renderable))if(i.calculateBounds(),i._mask){var n=i._mask.maskObject||i._mask;n.calculateBounds(),this._bounds.addBoundsMask(i._bounds,n._bounds)}else i.filterArea?this._bounds.addBoundsArea(i._bounds,i.filterArea):this._bounds.addBounds(i._bounds)}this._bounds.updateID=this._boundsID},e.prototype.getLocalBounds=function(t,i){i===void 0&&(i=!1);var n=r.prototype.getLocalBounds.call(this,t);if(!i)for(var o=0,s=this.children.length;o<s;++o){var a=this.children[o];a.visible&&a.updateTransform()}return n},e.prototype._calculateBounds=function(){},e.prototype._renderWithCulling=function(t){var i=t.renderTexture.sourceFrame;if(i.width>0&&i.height>0){var n,o;if(this.cullArea?(n=this.cullArea,o=this.worldTransform):this._render!==e.prototype._render&&(n=this.getBounds(!0)),n&&i.intersects(n,o))this._render(t);else if(this.cullArea)return;for(var s=0,a=this.children.length;s<a;++s){var u=this.children[s],h=u.cullable;u.cullable=h||!this.cullArea,u.render(t),u.cullable=h}}},e.prototype.render=function(t){if(!(!this.visible||this.worldAlpha<=0||!this.renderable))if(this._mask||this.filters&&this.filters.length)this.renderAdvanced(t);else if(this.cullable)this._renderWithCulling(t);else{this._render(t);for(var i=0,n=this.children.length;i<n;++i)this.children[i].render(t)}},e.prototype.renderAdvanced=function(t){var i=this.filters,n=this._mask;if(i){this._enabledFilters||(this._enabledFilters=[]),this._enabledFilters.length=0;for(var o=0;o<i.length;o++)i[o].enabled&&this._enabledFilters.push(i[o])}var s=i&&this._enabledFilters&&this._enabledFilters.length||n&&(!n.isMaskData||n.enabled&&(n.autoDetect||n.type!==us.NONE));if(s&&t.batch.flush(),i&&this._enabledFilters&&this._enabledFilters.length&&t.filter.push(this,this._enabledFilters),n&&t.mask.push(this,this._mask),this.cullable)this._renderWithCulling(t);else{this._render(t);for(var o=0,a=this.children.length;o<a;++o)this.children[o].render(t)}s&&t.batch.flush(),n&&t.mask.pop(this),i&&this._enabledFilters&&this._enabledFilters.length&&t.filter.pop()},e.prototype._render=function(t){},e.prototype.destroy=function(t){r.prototype.destroy.call(this),this.sortDirty=!1;var i=typeof t=="boolean"?t:t&&t.children,n=this.removeChildren(0,this.children.length);if(i)for(var o=0;o<n.length;++o)n[o].destroy(t)},Object.defineProperty(e.prototype,"width",{get:function(){return this.scale.x*this.getLocalBounds().width},set:function(t){var i=this.getLocalBounds().width;i!==0?this.scale.x=t/i:this.scale.x=1,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.scale.y*this.getLocalBounds().height},set:function(t){var i=this.getLocalBounds().height;i!==0?this.scale.y=t/i:this.scale.y=1,this._height=t},enumerable:!1,configurable:!0}),e}(ht);It.prototype.containerUpdateTransform=It.prototype.updateTransform;/*!
 * @pixi/accessibility - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/accessibility is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Rf={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessiblePointerEvents:"auto",accessibleChildren:!0,renderId:-1};ht.mixin(Rf);var $m=9,on=100,qm=0,Km=0,Sh=2,Oh=1,Zm=-1e3,Jm=-1e3,Qm=2,Sf=function(){function r(e){this.debug=!1,this._isActive=!1,this._isMobileAccessibility=!1,this.pool=[],this.renderId=0,this.children=[],this.androidUpdateCount=0,this.androidUpdateFrequency=500,this._hookDiv=null,(Kt.tablet||Kt.phone)&&this.createTouchHook();var t=document.createElement("div");t.style.width=on+"px",t.style.height=on+"px",t.style.position="absolute",t.style.top=qm+"px",t.style.left=Km+"px",t.style.zIndex=Sh.toString(),this.div=t,this.renderer=e,this._onKeyDown=this._onKeyDown.bind(this),this._onMouseMove=this._onMouseMove.bind(this),globalThis.addEventListener("keydown",this._onKeyDown,!1)}return Object.defineProperty(r.prototype,"isActive",{get:function(){return this._isActive},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isMobileAccessibility",{get:function(){return this._isMobileAccessibility},enumerable:!1,configurable:!0}),r.prototype.createTouchHook=function(){var e=this,t=document.createElement("button");t.style.width=Oh+"px",t.style.height=Oh+"px",t.style.position="absolute",t.style.top=Zm+"px",t.style.left=Jm+"px",t.style.zIndex=Qm.toString(),t.style.backgroundColor="#FF0000",t.title="select to enable accessibility for this content",t.addEventListener("focus",function(){e._isMobileAccessibility=!0,e.activate(),e.destroyTouchHook()}),document.body.appendChild(t),this._hookDiv=t},r.prototype.destroyTouchHook=function(){!this._hookDiv||(document.body.removeChild(this._hookDiv),this._hookDiv=null)},r.prototype.activate=function(){var e;this._isActive||(this._isActive=!0,globalThis.document.addEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown,!1),this.renderer.on("postrender",this.update,this),(e=this.renderer.view.parentNode)===null||e===void 0||e.appendChild(this.div))},r.prototype.deactivate=function(){var e;!this._isActive||this._isMobileAccessibility||(this._isActive=!1,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.addEventListener("keydown",this._onKeyDown,!1),this.renderer.off("postrender",this.update),(e=this.div.parentNode)===null||e===void 0||e.removeChild(this.div))},r.prototype.updateAccessibleObjects=function(e){if(!(!e.visible||!e.accessibleChildren)){e.accessible&&e.interactive&&(e._accessibleActive||this.addChild(e),e.renderId=this.renderId);var t=e.children;if(t)for(var i=0;i<t.length;i++)this.updateAccessibleObjects(t[i])}},r.prototype.update=function(){var e=performance.now();if(!(Kt.android.device&&e<this.androidUpdateCount)&&(this.androidUpdateCount=e+this.androidUpdateFrequency,!!this.renderer.renderingToScreen)){this.renderer._lastObjectRendered&&this.updateAccessibleObjects(this.renderer._lastObjectRendered);var t=this.renderer.view.getBoundingClientRect(),i=t.left,n=t.top,o=t.width,s=t.height,a=this.renderer,u=a.width,h=a.height,l=a.resolution,c=o/u*l,f=s/h*l,d=this.div;d.style.left=i+"px",d.style.top=n+"px",d.style.width=u+"px",d.style.height=h+"px";for(var v=0;v<this.children.length;v++){var p=this.children[v];if(p.renderId!==this.renderId)p._accessibleActive=!1,xr(this.children,v,1),this.div.removeChild(p._accessibleDiv),this.pool.push(p._accessibleDiv),p._accessibleDiv=null,v--;else{d=p._accessibleDiv;var _=p.hitArea,m=p.worldTransform;p.hitArea?(d.style.left=(m.tx+_.x*m.a)*c+"px",d.style.top=(m.ty+_.y*m.d)*f+"px",d.style.width=_.width*m.a*c+"px",d.style.height=_.height*m.d*f+"px"):(_=p.getBounds(),this.capHitArea(_),d.style.left=_.x*c+"px",d.style.top=_.y*f+"px",d.style.width=_.width*c+"px",d.style.height=_.height*f+"px",d.title!==p.accessibleTitle&&p.accessibleTitle!==null&&(d.title=p.accessibleTitle),d.getAttribute("aria-label")!==p.accessibleHint&&p.accessibleHint!==null&&d.setAttribute("aria-label",p.accessibleHint)),(p.accessibleTitle!==d.title||p.tabIndex!==d.tabIndex)&&(d.title=p.accessibleTitle,d.tabIndex=p.tabIndex,this.debug&&this.updateDebugHTML(d))}}this.renderId++}},r.prototype.updateDebugHTML=function(e){e.innerHTML="type: "+e.type+"</br> title : "+e.title+"</br> tabIndex: "+e.tabIndex},r.prototype.capHitArea=function(e){e.x<0&&(e.width+=e.x,e.x=0),e.y<0&&(e.height+=e.y,e.y=0);var t=this.renderer,i=t.width,n=t.height;e.x+e.width>i&&(e.width=i-e.x),e.y+e.height>n&&(e.height=n-e.y)},r.prototype.addChild=function(e){var t=this.pool.pop();t||(t=document.createElement("button"),t.style.width=on+"px",t.style.height=on+"px",t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent",t.style.position="absolute",t.style.zIndex=Sh.toString(),t.style.borderStyle="none",navigator.userAgent.toLowerCase().indexOf("chrome")>-1?t.setAttribute("aria-live","off"):t.setAttribute("aria-live","polite"),navigator.userAgent.match(/rv:.*Gecko\//)?t.setAttribute("aria-relevant","additions"):t.setAttribute("aria-relevant","text"),t.addEventListener("click",this._onClick.bind(this)),t.addEventListener("focus",this._onFocus.bind(this)),t.addEventListener("focusout",this._onFocusOut.bind(this))),t.style.pointerEvents=e.accessiblePointerEvents,t.type=e.accessibleType,e.accessibleTitle&&e.accessibleTitle!==null?t.title=e.accessibleTitle:(!e.accessibleHint||e.accessibleHint===null)&&(t.title="displayObject "+e.tabIndex),e.accessibleHint&&e.accessibleHint!==null&&t.setAttribute("aria-label",e.accessibleHint),this.debug&&this.updateDebugHTML(t),e._accessibleActive=!0,e._accessibleDiv=t,t.displayObject=e,this.children.push(e),this.div.appendChild(e._accessibleDiv),e._accessibleDiv.tabIndex=e.tabIndex},r.prototype._onClick=function(e){var t=this.renderer.plugins.interaction,i=e.target.displayObject,n=t.eventData;t.dispatchEvent(i,"click",n),t.dispatchEvent(i,"pointertap",n),t.dispatchEvent(i,"tap",n)},r.prototype._onFocus=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","assertive");var t=this.renderer.plugins.interaction,i=e.target.displayObject,n=t.eventData;t.dispatchEvent(i,"mouseover",n)},r.prototype._onFocusOut=function(e){e.target.getAttribute("aria-live")||e.target.setAttribute("aria-live","polite");var t=this.renderer.plugins.interaction,i=e.target.displayObject,n=t.eventData;t.dispatchEvent(i,"mouseout",n)},r.prototype._onKeyDown=function(e){e.keyCode===$m&&this.activate()},r.prototype._onMouseMove=function(e){e.movementX===0&&e.movementY===0||this.deactivate()},r.prototype.destroy=function(){this.destroyTouchHook(),this.div=null,globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0),globalThis.removeEventListener("keydown",this._onKeyDown),this.pool=null,this.children=null,this.renderer=null},r}();/*!
 * @pixi/ticker - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/ticker is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */U.TARGET_FPMS=.06;var Te;(function(r){r[r.INTERACTION=50]="INTERACTION",r[r.HIGH=25]="HIGH",r[r.NORMAL=0]="NORMAL",r[r.LOW=-25]="LOW",r[r.UTILITY=-50]="UTILITY"})(Te||(Te={}));var lo=function(){function r(e,t,i,n){t===void 0&&(t=null),i===void 0&&(i=0),n===void 0&&(n=!1),this.next=null,this.previous=null,this._destroyed=!1,this.fn=e,this.context=t,this.priority=i,this.once=n}return r.prototype.match=function(e,t){return t===void 0&&(t=null),this.fn===e&&this.context===t},r.prototype.emit=function(e){this.fn&&(this.context?this.fn.call(this.context,e):this.fn(e));var t=this.next;return this.once&&this.destroy(!0),this._destroyed&&(this.next=null),t},r.prototype.connect=function(e){this.previous=e,e.next&&(e.next.previous=this),this.next=e.next,e.next=this},r.prototype.destroy=function(e){e===void 0&&(e=!1),this._destroyed=!0,this.fn=null,this.context=null,this.previous&&(this.previous.next=this.next),this.next&&(this.next.previous=this.previous);var t=this.next;return this.next=e?null:t,this.previous=null,t},r}(),At=function(){function r(){var e=this;this.autoStart=!1,this.deltaTime=1,this.lastTime=-1,this.speed=1,this.started=!1,this._requestId=null,this._maxElapsedMS=100,this._minElapsedMS=0,this._protected=!1,this._lastFrame=-1,this._head=new lo(null,null,1/0),this.deltaMS=1/U.TARGET_FPMS,this.elapsedMS=1/U.TARGET_FPMS,this._tick=function(t){e._requestId=null,e.started&&(e.update(t),e.started&&e._requestId===null&&e._head.next&&(e._requestId=requestAnimationFrame(e._tick)))}}return r.prototype._requestIfNeeded=function(){this._requestId===null&&this._head.next&&(this.lastTime=performance.now(),this._lastFrame=this.lastTime,this._requestId=requestAnimationFrame(this._tick))},r.prototype._cancelIfNeeded=function(){this._requestId!==null&&(cancelAnimationFrame(this._requestId),this._requestId=null)},r.prototype._startIfPossible=function(){this.started?this._requestIfNeeded():this.autoStart&&this.start()},r.prototype.add=function(e,t,i){return i===void 0&&(i=Te.NORMAL),this._addListener(new lo(e,t,i))},r.prototype.addOnce=function(e,t,i){return i===void 0&&(i=Te.NORMAL),this._addListener(new lo(e,t,i,!0))},r.prototype._addListener=function(e){var t=this._head.next,i=this._head;if(!t)e.connect(i);else{for(;t;){if(e.priority>t.priority){e.connect(i);break}i=t,t=t.next}e.previous||e.connect(i)}return this._startIfPossible(),this},r.prototype.remove=function(e,t){for(var i=this._head.next;i;)i.match(e,t)?i=i.destroy():i=i.next;return this._head.next||this._cancelIfNeeded(),this},Object.defineProperty(r.prototype,"count",{get:function(){if(!this._head)return 0;for(var e=0,t=this._head;t=t.next;)e++;return e},enumerable:!1,configurable:!0}),r.prototype.start=function(){this.started||(this.started=!0,this._requestIfNeeded())},r.prototype.stop=function(){this.started&&(this.started=!1,this._cancelIfNeeded())},r.prototype.destroy=function(){if(!this._protected){this.stop();for(var e=this._head.next;e;)e=e.destroy(!0);this._head.destroy(),this._head=null}},r.prototype.update=function(e){e===void 0&&(e=performance.now());var t;if(e>this.lastTime){if(t=this.elapsedMS=e-this.lastTime,t>this._maxElapsedMS&&(t=this._maxElapsedMS),t*=this.speed,this._minElapsedMS){var i=e-this._lastFrame|0;if(i<this._minElapsedMS)return;this._lastFrame=e-i%this._minElapsedMS}this.deltaMS=t,this.deltaTime=this.deltaMS*U.TARGET_FPMS;for(var n=this._head,o=n.next;o;)o=o.emit(this.deltaTime);n.next||this._cancelIfNeeded()}else this.deltaTime=this.deltaMS=this.elapsedMS=0;this.lastTime=e},Object.defineProperty(r.prototype,"FPS",{get:function(){return 1e3/this.elapsedMS},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"minFPS",{get:function(){return 1e3/this._maxElapsedMS},set:function(e){var t=Math.min(this.maxFPS,e),i=Math.min(Math.max(0,t)/1e3,U.TARGET_FPMS);this._maxElapsedMS=1/i},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"maxFPS",{get:function(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0},set:function(e){if(e===0)this._minElapsedMS=0;else{var t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}},enumerable:!1,configurable:!0}),Object.defineProperty(r,"shared",{get:function(){if(!r._shared){var e=r._shared=new r;e.autoStart=!0,e._protected=!0}return r._shared},enumerable:!1,configurable:!0}),Object.defineProperty(r,"system",{get:function(){if(!r._system){var e=r._system=new r;e.autoStart=!0,e._protected=!0}return r._system},enumerable:!1,configurable:!0}),r}(),Of=function(){function r(){}return r.init=function(e){var t=this;e=Object.assign({autoStart:!0,sharedTicker:!1},e),Object.defineProperty(this,"ticker",{set:function(i){this._ticker&&this._ticker.remove(this.render,this),this._ticker=i,i&&i.add(this.render,this,Te.LOW)},get:function(){return this._ticker}}),this.stop=function(){t._ticker.stop()},this.start=function(){t._ticker.start()},this._ticker=null,this.ticker=e.sharedTicker?At.shared:new At,e.autoStart&&this.start()},r.destroy=function(){if(this._ticker){var e=this._ticker;this.ticker=null,e.destroy()}},r}();/*!
 * @pixi/interaction - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/interaction is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var hs=function(){function r(){this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0,this.global=new Y,this.target=null,this.originalEvent=null,this.identifier=null,this.isPrimary=!1,this.button=0,this.buttons=0,this.width=0,this.height=0,this.tiltX=0,this.tiltY=0,this.pointerType=null,this.pressure=0,this.rotationAngle=0,this.twist=0,this.tangentialPressure=0}return Object.defineProperty(r.prototype,"pointerId",{get:function(){return this.identifier},enumerable:!1,configurable:!0}),r.prototype.getLocalPosition=function(e,t,i){return e.worldTransform.applyInverse(i||this.global,t)},r.prototype.copyEvent=function(e){"isPrimary"in e&&e.isPrimary&&(this.isPrimary=!0),this.button="button"in e&&e.button;var t="buttons"in e&&e.buttons;this.buttons=Number.isInteger(t)?t:"which"in e&&e.which,this.width="width"in e&&e.width,this.height="height"in e&&e.height,this.tiltX="tiltX"in e&&e.tiltX,this.tiltY="tiltY"in e&&e.tiltY,this.pointerType="pointerType"in e&&e.pointerType,this.pressure="pressure"in e&&e.pressure,this.rotationAngle="rotationAngle"in e&&e.rotationAngle,this.twist="twist"in e&&e.twist||0,this.tangentialPressure="tangentialPressure"in e&&e.tangentialPressure||0},r.prototype.reset=function(){this.isPrimary=!1},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ls=function(r,e){return ls=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},ls(r,e)};function tg(r,e){ls(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Nf=function(){function r(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.target=null,this.currentTarget=null,this.type=null,this.data=null}return r.prototype.stopPropagation=function(){this.stopped=!0,this.stopPropagationHint=!0,this.stopsPropagatingAt=this.currentTarget},r.prototype.reset=function(){this.stopped=!1,this.stopsPropagatingAt=null,this.stopPropagationHint=!1,this.currentTarget=null,this.target=null},r}(),Cn=function(){function r(e){this._pointerId=e,this._flags=r.FLAGS.NONE}return r.prototype._doSet=function(e,t){t?this._flags=this._flags|e:this._flags=this._flags&~e},Object.defineProperty(r.prototype,"pointerId",{get:function(){return this._pointerId},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"flags",{get:function(){return this._flags},set:function(e){this._flags=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"none",{get:function(){return this._flags===r.FLAGS.NONE},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"over",{get:function(){return(this._flags&r.FLAGS.OVER)!==0},set:function(e){this._doSet(r.FLAGS.OVER,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"rightDown",{get:function(){return(this._flags&r.FLAGS.RIGHT_DOWN)!==0},set:function(e){this._doSet(r.FLAGS.RIGHT_DOWN,e)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leftDown",{get:function(){return(this._flags&r.FLAGS.LEFT_DOWN)!==0},set:function(e){this._doSet(r.FLAGS.LEFT_DOWN,e)},enumerable:!1,configurable:!0}),r.FLAGS=Object.freeze({NONE:0,OVER:1<<0,LEFT_DOWN:1<<1,RIGHT_DOWN:1<<2}),r}(),eg=function(){function r(){this._tempPoint=new Y}return r.prototype.recursiveFindHit=function(e,t,i,n,o){if(!t||!t.visible)return!1;var s=e.data.global;o=t.interactive||o;var a=!1,u=o,h=!0;if(t.hitArea?(n&&(t.worldTransform.applyInverse(s,this._tempPoint),t.hitArea.contains(this._tempPoint.x,this._tempPoint.y)?a=!0:(n=!1,h=!1)),u=!1):t._mask&&n&&(t._mask.containsPoint&&t._mask.containsPoint(s)||(n=!1)),h&&t.interactiveChildren&&t.children)for(var l=t.children,c=l.length-1;c>=0;c--){var f=l[c],d=this.recursiveFindHit(e,f,i,n,u);if(d){if(!f.parent)continue;u=!1,d&&(e.target&&(n=!1),a=!0)}}return o&&(n&&!e.target&&!t.hitArea&&t.containsPoint&&t.containsPoint(s)&&(a=!0),t.interactive&&(a&&!e.target&&(e.target=t),i&&i(e,t,!!a))),a},r.prototype.findHit=function(e,t,i,n){this.recursiveFindHit(e,t,i,n,!1)},r}(),Ff={interactive:!1,interactiveChildren:!0,hitArea:null,get buttonMode(){return this.cursor==="pointer"},set buttonMode(r){r?this.cursor="pointer":this.cursor==="pointer"&&(this.cursor=null)},cursor:null,get trackedPointers(){return this._trackedPointers===void 0&&(this._trackedPointers={}),this._trackedPointers},_trackedPointers:void 0};ht.mixin(Ff);var sn=1,an={target:null,data:{global:null}},Uf=function(r){tg(e,r);function e(t,i){var n=r.call(this)||this;return i=i||{},n.renderer=t,n.autoPreventDefault=i.autoPreventDefault!==void 0?i.autoPreventDefault:!0,n.interactionFrequency=i.interactionFrequency||10,n.mouse=new hs,n.mouse.identifier=sn,n.mouse.global.set(-999999),n.activeInteractionData={},n.activeInteractionData[sn]=n.mouse,n.interactionDataPool=[],n.eventData=new Nf,n.interactionDOMElement=null,n.moveWhenInside=!1,n.eventsAdded=!1,n.tickerAdded=!1,n.mouseOverRenderer=!("PointerEvent"in globalThis),n.supportsTouchEvents="ontouchstart"in globalThis,n.supportsPointerEvents=!!globalThis.PointerEvent,n.onPointerUp=n.onPointerUp.bind(n),n.processPointerUp=n.processPointerUp.bind(n),n.onPointerCancel=n.onPointerCancel.bind(n),n.processPointerCancel=n.processPointerCancel.bind(n),n.onPointerDown=n.onPointerDown.bind(n),n.processPointerDown=n.processPointerDown.bind(n),n.onPointerMove=n.onPointerMove.bind(n),n.processPointerMove=n.processPointerMove.bind(n),n.onPointerOut=n.onPointerOut.bind(n),n.processPointerOverOut=n.processPointerOverOut.bind(n),n.onPointerOver=n.onPointerOver.bind(n),n.cursorStyles={default:"inherit",pointer:"pointer"},n.currentCursorMode=null,n.cursor=null,n.resolution=1,n.delayedEvents=[],n.search=new eg,n._tempDisplayObject=new Ga,n._eventListenerOptions={capture:!0,passive:!1},n._useSystemTicker=i.useSystemTicker!==void 0?i.useSystemTicker:!0,n.setTargetElement(n.renderer.view,n.renderer.resolution),n}return Object.defineProperty(e.prototype,"useSystemTicker",{get:function(){return this._useSystemTicker},set:function(t){this._useSystemTicker=t,t?this.addTickerListener():this.removeTickerListener()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lastObjectRendered",{get:function(){return this.renderer._lastObjectRendered||this._tempDisplayObject},enumerable:!1,configurable:!0}),e.prototype.hitTest=function(t,i){return an.target=null,an.data.global=t,i||(i=this.lastObjectRendered),this.processInteractive(an,i,null,!0),an.target},e.prototype.setTargetElement=function(t,i){i===void 0&&(i=1),this.removeTickerListener(),this.removeEvents(),this.interactionDOMElement=t,this.resolution=i,this.addEvents(),this.addTickerListener()},e.prototype.addTickerListener=function(){this.tickerAdded||!this.interactionDOMElement||!this._useSystemTicker||(At.system.add(this.tickerUpdate,this,Te.INTERACTION),this.tickerAdded=!0)},e.prototype.removeTickerListener=function(){!this.tickerAdded||(At.system.remove(this.tickerUpdate,this),this.tickerAdded=!1)},e.prototype.addEvents=function(){if(!(this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="none",t.msTouchAction="none"):this.supportsPointerEvents&&(t.touchAction="none"),this.supportsPointerEvents?(globalThis.document.addEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.addEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.addEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.addEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.addEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.addEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.addEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.eventsAdded=!0}},e.prototype.removeEvents=function(){if(!(!this.eventsAdded||!this.interactionDOMElement)){var t=this.interactionDOMElement.style;globalThis.navigator.msPointerEnabled?(t.msContentZooming="",t.msTouchAction=""):this.supportsPointerEvents&&(t.touchAction=""),this.supportsPointerEvents?(globalThis.document.removeEventListener("pointermove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerdown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerleave",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("pointerover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("pointercancel",this.onPointerCancel,this._eventListenerOptions),globalThis.removeEventListener("pointerup",this.onPointerUp,this._eventListenerOptions)):(globalThis.document.removeEventListener("mousemove",this.onPointerMove,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mousedown",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseout",this.onPointerOut,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("mouseover",this.onPointerOver,this._eventListenerOptions),globalThis.removeEventListener("mouseup",this.onPointerUp,this._eventListenerOptions)),this.supportsTouchEvents&&(this.interactionDOMElement.removeEventListener("touchstart",this.onPointerDown,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchcancel",this.onPointerCancel,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchend",this.onPointerUp,this._eventListenerOptions),this.interactionDOMElement.removeEventListener("touchmove",this.onPointerMove,this._eventListenerOptions)),this.interactionDOMElement=null,this.eventsAdded=!1}},e.prototype.tickerUpdate=function(t){this._deltaTime+=t,!(this._deltaTime<this.interactionFrequency)&&(this._deltaTime=0,this.update())},e.prototype.update=function(){if(!!this.interactionDOMElement){if(this._didMove){this._didMove=!1;return}this.cursor=null;for(var t in this.activeInteractionData)if(this.activeInteractionData.hasOwnProperty(t)){var i=this.activeInteractionData[t];if(i.originalEvent&&i.pointerType!=="touch"){var n=this.configureInteractionEventForDOMEvent(this.eventData,i.originalEvent,i);this.processInteractive(n,this.lastObjectRendered,this.processPointerOverOut,!0)}}this.setCursorMode(this.cursor)}},e.prototype.setCursorMode=function(t){t=t||"default";var i=!0;if(globalThis.OffscreenCanvas&&this.interactionDOMElement instanceof OffscreenCanvas&&(i=!1),this.currentCursorMode!==t){this.currentCursorMode=t;var n=this.cursorStyles[t];if(n)switch(typeof n){case"string":i&&(this.interactionDOMElement.style.cursor=n);break;case"function":n(t);break;case"object":i&&Object.assign(this.interactionDOMElement.style,n);break}else i&&typeof t=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,t)&&(this.interactionDOMElement.style.cursor=t)}},e.prototype.dispatchEvent=function(t,i,n){(!n.stopPropagationHint||t===n.stopsPropagatingAt)&&(n.currentTarget=t,n.type=i,t.emit(i,n),t[i]&&t[i](n))},e.prototype.delayDispatchEvent=function(t,i,n){this.delayedEvents.push({displayObject:t,eventString:i,eventData:n})},e.prototype.mapPositionToPoint=function(t,i,n){var o;this.interactionDOMElement.parentElement?o=this.interactionDOMElement.getBoundingClientRect():o={x:0,y:0,width:this.interactionDOMElement.width,height:this.interactionDOMElement.height,left:0,top:0};var s=1/this.resolution;t.x=(i-o.left)*(this.interactionDOMElement.width/o.width)*s,t.y=(n-o.top)*(this.interactionDOMElement.height/o.height)*s},e.prototype.processInteractive=function(t,i,n,o){var s=this.search.findHit(t,i,n,o),a=this.delayedEvents;if(!a.length)return s;t.stopPropagationHint=!1;var u=a.length;this.delayedEvents=[];for(var h=0;h<u;h++){var l=a[h],c=l.displayObject,f=l.eventString,d=l.eventData;d.stopsPropagatingAt===c&&(d.stopPropagationHint=!0),this.dispatchEvent(c,f,d)}return s},e.prototype.onPointerDown=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var i=this.normalizeToPointerData(t);if(this.autoPreventDefault&&i[0].isNormalized){var n=t.cancelable||!("cancelable"in t);n&&t.preventDefault()}for(var o=i.length,s=0;s<o;s++){var a=i[s],u=this.getInteractionDataForPointerId(a),h=this.configureInteractionEventForDOMEvent(this.eventData,a,u);if(h.data.originalEvent=t,this.processInteractive(h,this.lastObjectRendered,this.processPointerDown,!0),this.emit("pointerdown",h),a.pointerType==="touch")this.emit("touchstart",h);else if(a.pointerType==="mouse"||a.pointerType==="pen"){var l=a.button===2;this.emit(l?"rightdown":"mousedown",this.eventData)}}}},e.prototype.processPointerDown=function(t,i,n){var o=t.data,s=t.data.identifier;if(n){if(i.trackedPointers[s]||(i.trackedPointers[s]=new Cn(s)),this.dispatchEvent(i,"pointerdown",t),o.pointerType==="touch")this.dispatchEvent(i,"touchstart",t);else if(o.pointerType==="mouse"||o.pointerType==="pen"){var a=o.button===2;a?i.trackedPointers[s].rightDown=!0:i.trackedPointers[s].leftDown=!0,this.dispatchEvent(i,a?"rightdown":"mousedown",t)}}},e.prototype.onPointerComplete=function(t,i,n){for(var o=this.normalizeToPointerData(t),s=o.length,a=t.target!==this.interactionDOMElement?"outside":"",u=0;u<s;u++){var h=o[u],l=this.getInteractionDataForPointerId(h),c=this.configureInteractionEventForDOMEvent(this.eventData,h,l);if(c.data.originalEvent=t,this.processInteractive(c,this.lastObjectRendered,n,i||!a),this.emit(i?"pointercancel":"pointerup"+a,c),h.pointerType==="mouse"||h.pointerType==="pen"){var f=h.button===2;this.emit(f?"rightup"+a:"mouseup"+a,c)}else h.pointerType==="touch"&&(this.emit(i?"touchcancel":"touchend"+a,c),this.releaseInteractionDataForPointerId(h.pointerId))}},e.prototype.onPointerCancel=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!0,this.processPointerCancel)},e.prototype.processPointerCancel=function(t,i){var n=t.data,o=t.data.identifier;i.trackedPointers[o]!==void 0&&(delete i.trackedPointers[o],this.dispatchEvent(i,"pointercancel",t),n.pointerType==="touch"&&this.dispatchEvent(i,"touchcancel",t))},e.prototype.onPointerUp=function(t){this.supportsTouchEvents&&t.pointerType==="touch"||this.onPointerComplete(t,!1,this.processPointerUp)},e.prototype.processPointerUp=function(t,i,n){var o=t.data,s=t.data.identifier,a=i.trackedPointers[s],u=o.pointerType==="touch",h=o.pointerType==="mouse"||o.pointerType==="pen",l=!1;if(h){var c=o.button===2,f=Cn.FLAGS,d=c?f.RIGHT_DOWN:f.LEFT_DOWN,v=a!==void 0&&a.flags&d;n?(this.dispatchEvent(i,c?"rightup":"mouseup",t),v&&(this.dispatchEvent(i,c?"rightclick":"click",t),l=!0)):v&&this.dispatchEvent(i,c?"rightupoutside":"mouseupoutside",t),a&&(c?a.rightDown=!1:a.leftDown=!1)}n?(this.dispatchEvent(i,"pointerup",t),u&&this.dispatchEvent(i,"touchend",t),a&&((!h||l)&&this.dispatchEvent(i,"pointertap",t),u&&(this.dispatchEvent(i,"tap",t),a.over=!1))):a&&(this.dispatchEvent(i,"pointerupoutside",t),u&&this.dispatchEvent(i,"touchendoutside",t)),a&&a.none&&delete i.trackedPointers[s]},e.prototype.onPointerMove=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var i=this.normalizeToPointerData(t);(i[0].pointerType==="mouse"||i[0].pointerType==="pen")&&(this._didMove=!0,this.cursor=null);for(var n=i.length,o=0;o<n;o++){var s=i[o],a=this.getInteractionDataForPointerId(s),u=this.configureInteractionEventForDOMEvent(this.eventData,s,a);u.data.originalEvent=t,this.processInteractive(u,this.lastObjectRendered,this.processPointerMove,!0),this.emit("pointermove",u),s.pointerType==="touch"&&this.emit("touchmove",u),(s.pointerType==="mouse"||s.pointerType==="pen")&&this.emit("mousemove",u)}i[0].pointerType==="mouse"&&this.setCursorMode(this.cursor)}},e.prototype.processPointerMove=function(t,i,n){var o=t.data,s=o.pointerType==="touch",a=o.pointerType==="mouse"||o.pointerType==="pen";a&&this.processPointerOverOut(t,i,n),(!this.moveWhenInside||n)&&(this.dispatchEvent(i,"pointermove",t),s&&this.dispatchEvent(i,"touchmove",t),a&&this.dispatchEvent(i,"mousemove",t))},e.prototype.onPointerOut=function(t){if(!(this.supportsTouchEvents&&t.pointerType==="touch")){var i=this.normalizeToPointerData(t),n=i[0];n.pointerType==="mouse"&&(this.mouseOverRenderer=!1,this.setCursorMode(null));var o=this.getInteractionDataForPointerId(n),s=this.configureInteractionEventForDOMEvent(this.eventData,n,o);s.data.originalEvent=n,this.processInteractive(s,this.lastObjectRendered,this.processPointerOverOut,!1),this.emit("pointerout",s),n.pointerType==="mouse"||n.pointerType==="pen"?this.emit("mouseout",s):this.releaseInteractionDataForPointerId(o.identifier)}},e.prototype.processPointerOverOut=function(t,i,n){var o=t.data,s=t.data.identifier,a=o.pointerType==="mouse"||o.pointerType==="pen",u=i.trackedPointers[s];n&&!u&&(u=i.trackedPointers[s]=new Cn(s)),u!==void 0&&(n&&this.mouseOverRenderer?(u.over||(u.over=!0,this.delayDispatchEvent(i,"pointerover",t),a&&this.delayDispatchEvent(i,"mouseover",t)),a&&this.cursor===null&&(this.cursor=i.cursor)):u.over&&(u.over=!1,this.dispatchEvent(i,"pointerout",this.eventData),a&&this.dispatchEvent(i,"mouseout",t),u.none&&delete i.trackedPointers[s]))},e.prototype.onPointerOver=function(t){var i=this.normalizeToPointerData(t),n=i[0],o=this.getInteractionDataForPointerId(n),s=this.configureInteractionEventForDOMEvent(this.eventData,n,o);s.data.originalEvent=n,n.pointerType==="mouse"&&(this.mouseOverRenderer=!0),this.emit("pointerover",s),(n.pointerType==="mouse"||n.pointerType==="pen")&&this.emit("mouseover",s)},e.prototype.getInteractionDataForPointerId=function(t){var i=t.pointerId,n;return i===sn||t.pointerType==="mouse"?n=this.mouse:this.activeInteractionData[i]?n=this.activeInteractionData[i]:(n=this.interactionDataPool.pop()||new hs,n.identifier=i,this.activeInteractionData[i]=n),n.copyEvent(t),n},e.prototype.releaseInteractionDataForPointerId=function(t){var i=this.activeInteractionData[t];i&&(delete this.activeInteractionData[t],i.reset(),this.interactionDataPool.push(i))},e.prototype.configureInteractionEventForDOMEvent=function(t,i,n){return t.data=n,this.mapPositionToPoint(n.global,i.clientX,i.clientY),i.pointerType==="touch"&&(i.globalX=n.global.x,i.globalY=n.global.y),n.originalEvent=i,t.reset(),t},e.prototype.normalizeToPointerData=function(t){var i=[];if(this.supportsTouchEvents&&t instanceof TouchEvent)for(var n=0,o=t.changedTouches.length;n<o;n++){var s=t.changedTouches[n];typeof s.button=="undefined"&&(s.button=t.touches.length?1:0),typeof s.buttons=="undefined"&&(s.buttons=t.touches.length?1:0),typeof s.isPrimary=="undefined"&&(s.isPrimary=t.touches.length===1&&t.type==="touchstart"),typeof s.width=="undefined"&&(s.width=s.radiusX||1),typeof s.height=="undefined"&&(s.height=s.radiusY||1),typeof s.tiltX=="undefined"&&(s.tiltX=0),typeof s.tiltY=="undefined"&&(s.tiltY=0),typeof s.pointerType=="undefined"&&(s.pointerType="touch"),typeof s.pointerId=="undefined"&&(s.pointerId=s.identifier||0),typeof s.pressure=="undefined"&&(s.pressure=s.force||.5),typeof s.twist=="undefined"&&(s.twist=0),typeof s.tangentialPressure=="undefined"&&(s.tangentialPressure=0),typeof s.layerX=="undefined"&&(s.layerX=s.offsetX=s.clientX),typeof s.layerY=="undefined"&&(s.layerY=s.offsetY=s.clientY),s.isNormalized=!0,i.push(s)}else if(!globalThis.MouseEvent||t instanceof MouseEvent&&(!this.supportsPointerEvents||!(t instanceof globalThis.PointerEvent))){var a=t;typeof a.isPrimary=="undefined"&&(a.isPrimary=!0),typeof a.width=="undefined"&&(a.width=1),typeof a.height=="undefined"&&(a.height=1),typeof a.tiltX=="undefined"&&(a.tiltX=0),typeof a.tiltY=="undefined"&&(a.tiltY=0),typeof a.pointerType=="undefined"&&(a.pointerType="mouse"),typeof a.pointerId=="undefined"&&(a.pointerId=sn),typeof a.pressure=="undefined"&&(a.pressure=.5),typeof a.twist=="undefined"&&(a.twist=0),typeof a.tangentialPressure=="undefined"&&(a.tangentialPressure=0),a.isNormalized=!0,i.push(a)}else i.push(t);return i},e.prototype.destroy=function(){this.removeEvents(),this.removeTickerListener(),this.removeAllListeners(),this.renderer=null,this.mouse=null,this.eventData=null,this.interactionDOMElement=null,this.onPointerDown=null,this.processPointerDown=null,this.onPointerUp=null,this.processPointerUp=null,this.onPointerCancel=null,this.processPointerCancel=null,this.onPointerMove=null,this.processPointerMove=null,this.onPointerOut=null,this.processPointerOverOut=null,this.onPointerOver=null,this.search=null},e}(ti);/*!
 * @pixi/runner - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/runner is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Nt=function(){function r(e){this.items=[],this._name=e,this._aliasCount=0}return r.prototype.emit=function(e,t,i,n,o,s,a,u){if(arguments.length>8)throw new Error("max arguments reached");var h=this,l=h.name,c=h.items;this._aliasCount++;for(var f=0,d=c.length;f<d;f++)c[f][l](e,t,i,n,o,s,a,u);return c===this.items&&this._aliasCount--,this},r.prototype.ensureNonAliasedItems=function(){this._aliasCount>0&&this.items.length>1&&(this._aliasCount=0,this.items=this.items.slice(0))},r.prototype.add=function(e){return e[this._name]&&(this.ensureNonAliasedItems(),this.remove(e),this.items.push(e)),this},r.prototype.remove=function(e){var t=this.items.indexOf(e);return t!==-1&&(this.ensureNonAliasedItems(),this.items.splice(t,1)),this},r.prototype.contains=function(e){return this.items.indexOf(e)!==-1},r.prototype.removeAll=function(){return this.ensureNonAliasedItems(),this.items.length=0,this},r.prototype.destroy=function(){this.removeAll(),this.items=null,this._name=null},Object.defineProperty(r.prototype,"empty",{get:function(){return this.items.length===0},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"name",{get:function(){return this._name},enumerable:!1,configurable:!0}),r}();Object.defineProperties(Nt.prototype,{dispatch:{value:Nt.prototype.emit},run:{value:Nt.prototype.emit}});/*!
 * @pixi/core - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/core is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */U.PREFER_ENV=Kt.any?be.WEBGL:be.WEBGL2;U.STRICT_TEXTURE_CACHE=!1;var Oi=[];function qn(r,e){if(!r)return null;var t="";if(typeof r=="string"){var i=/\.(\w{3,4})(?:$|\?|#)/i.exec(r);i&&(t=i[1].toLowerCase())}for(var n=Oi.length-1;n>=0;--n){var o=Oi[n];if(o.test&&o.test(r,t))return new o(r,e)}throw new Error("Unrecognized source type to auto-detect Resource")}/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var fs=function(r,e){return fs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},fs(r,e)};function ot(r,e){fs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var cs=function(){return cs=Object.assign||function(e){for(var t=arguments,i,n=1,o=arguments.length;n<o;n++){i=t[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},cs.apply(this,arguments)};function rg(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(r);n<i.length;n++)e.indexOf(i[n])<0&&(t[i[n]]=r[i[n]]);return t}var wr=function(){function r(e,t){e===void 0&&(e=0),t===void 0&&(t=0),this._width=e,this._height=t,this.destroyed=!1,this.internal=!1,this.onResize=new Nt("setRealSize"),this.onUpdate=new Nt("update"),this.onError=new Nt("onError")}return r.prototype.bind=function(e){this.onResize.add(e),this.onUpdate.add(e),this.onError.add(e),(this._width||this._height)&&this.onResize.emit(this._width,this._height)},r.prototype.unbind=function(e){this.onResize.remove(e),this.onUpdate.remove(e),this.onError.remove(e)},r.prototype.resize=function(e,t){(e!==this._width||t!==this._height)&&(this._width=e,this._height=t,this.onResize.emit(e,t))},Object.defineProperty(r.prototype,"valid",{get:function(){return!!this._width&&!!this._height},enumerable:!1,configurable:!0}),r.prototype.update=function(){this.destroyed||this.onUpdate.emit()},r.prototype.load=function(){return Promise.resolve(this)},Object.defineProperty(r.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"height",{get:function(){return this._height},enumerable:!1,configurable:!0}),r.prototype.style=function(e,t,i){return!1},r.prototype.dispose=function(){},r.prototype.destroy=function(){this.destroyed||(this.destroyed=!0,this.dispose(),this.onError.removeAll(),this.onError=null,this.onResize.removeAll(),this.onResize=null,this.onUpdate.removeAll(),this.onUpdate=null)},r.test=function(e,t){return!1},r}(),Ir=function(r){ot(e,r);function e(t,i){var n=this,o=i||{},s=o.width,a=o.height;if(!s||!a)throw new Error("BufferResource width or height invalid");return n=r.call(this,s,a)||this,n.data=t,n}return e.prototype.upload=function(t,i,n){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===re.UNPACK);var s=i.realWidth,a=i.realHeight;return n.width===s&&n.height===a?o.texSubImage2D(i.target,0,0,0,s,a,i.format,n.type,this.data):(n.width=s,n.height=a,o.texImage2D(i.target,0,n.internalFormat,s,a,0,i.format,n.type,this.data)),!0},e.prototype.dispose=function(){this.data=null},e.test=function(t){return t instanceof Float32Array||t instanceof Uint8Array||t instanceof Uint32Array},e}(wr),ig={scaleMode:Vt.NEAREST,format:R.RGBA,alphaMode:re.NPM},q=function(r){ot(e,r);function e(t,i){t===void 0&&(t=null),i===void 0&&(i=null);var n=r.call(this)||this;i=i||{};var o=i.alphaMode,s=i.mipmap,a=i.anisotropicLevel,u=i.scaleMode,h=i.width,l=i.height,c=i.wrapMode,f=i.format,d=i.type,v=i.target,p=i.resolution,_=i.resourceOptions;return t&&!(t instanceof wr)&&(t=qn(t,_),t.internal=!0),n.resolution=p||U.RESOLUTION,n.width=Math.round((h||0)*n.resolution)/n.resolution,n.height=Math.round((l||0)*n.resolution)/n.resolution,n._mipmap=s!==void 0?s:U.MIPMAP_TEXTURES,n.anisotropicLevel=a!==void 0?a:U.ANISOTROPIC_LEVEL,n._wrapMode=c||U.WRAP_MODE,n._scaleMode=u!==void 0?u:U.SCALE_MODE,n.format=f||R.RGBA,n.type=d||G.UNSIGNED_BYTE,n.target=v||We.TEXTURE_2D,n.alphaMode=o!==void 0?o:re.UNPACK,n.uid=Ze(),n.touched=0,n.isPowerOfTwo=!1,n._refreshPOT(),n._glTextures={},n.dirtyId=0,n.dirtyStyleId=0,n.cacheId=null,n.valid=h>0&&l>0,n.textureCacheIds=[],n.destroyed=!1,n.resource=null,n._batchEnabled=0,n._batchLocation=0,n.parentTextureArray=null,n.setResource(t),n}return Object.defineProperty(e.prototype,"realWidth",{get:function(){return Math.round(this.width*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"realHeight",{get:function(){return Math.round(this.height*this.resolution)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"mipmap",{get:function(){return this._mipmap},set:function(t){this._mipmap!==t&&(this._mipmap=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scaleMode",{get:function(){return this._scaleMode},set:function(t){this._scaleMode!==t&&(this._scaleMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wrapMode",{get:function(){return this._wrapMode},set:function(t){this._wrapMode!==t&&(this._wrapMode=t,this.dirtyStyleId++)},enumerable:!1,configurable:!0}),e.prototype.setStyle=function(t,i){var n;return t!==void 0&&t!==this.scaleMode&&(this.scaleMode=t,n=!0),i!==void 0&&i!==this.mipmap&&(this.mipmap=i,n=!0),n&&this.dirtyStyleId++,this},e.prototype.setSize=function(t,i,n){return n=n||this.resolution,this.setRealSize(t*n,i*n,n)},e.prototype.setRealSize=function(t,i,n){return this.resolution=n||this.resolution,this.width=Math.round(t)/this.resolution,this.height=Math.round(i)/this.resolution,this._refreshPOT(),this.update(),this},e.prototype._refreshPOT=function(){this.isPowerOfTwo=rs(this.realWidth)&&rs(this.realHeight)},e.prototype.setResolution=function(t){var i=this.resolution;return i===t?this:(this.resolution=t,this.valid&&(this.width=Math.round(this.width*i)/t,this.height=Math.round(this.height*i)/t,this.emit("update",this)),this._refreshPOT(),this)},e.prototype.setResource=function(t){if(this.resource===t)return this;if(this.resource)throw new Error("Resource can be set only once");return t.bind(this),this.resource=t,this},e.prototype.update=function(){this.valid?(this.dirtyId++,this.dirtyStyleId++,this.emit("update",this)):this.width>0&&this.height>0&&(this.valid=!0,this.emit("loaded",this),this.emit("update",this))},e.prototype.onError=function(t){this.emit("error",this,t)},e.prototype.destroy=function(){this.resource&&(this.resource.unbind(this),this.resource.internal&&this.resource.destroy(),this.resource=null),this.cacheId&&(delete qt[this.cacheId],delete bt[this.cacheId],this.cacheId=null),this.dispose(),e.removeFromCache(this),this.textureCacheIds=null,this.destroyed=!0},e.prototype.dispose=function(){this.emit("dispose",this)},e.prototype.castToBaseTexture=function(){return this},e.from=function(t,i,n){n===void 0&&(n=U.STRICT_TEXTURE_CACHE);var o=typeof t=="string",s=null;if(o)s=t;else{if(!t._pixiId){var a=i&&i.pixiIdPrefix||"pixiid";t._pixiId=a+"_"+Ze()}s=t._pixiId}var u=qt[s];if(o&&n&&!u)throw new Error('The cacheId "'+s+'" does not exist in BaseTextureCache.');return u||(u=new e(t,i),u.cacheId=s,e.addToCache(u,s)),u},e.fromBuffer=function(t,i,n,o){t=t||new Float32Array(i*n*4);var s=new Ir(t,{width:i,height:n}),a=t instanceof Float32Array?G.FLOAT:G.UNSIGNED_BYTE;return new e(s,Object.assign(ig,o||{width:i,height:n,type:a}))},e.addToCache=function(t,i){i&&(t.textureCacheIds.indexOf(i)===-1&&t.textureCacheIds.push(i),qt[i]&&console.warn("BaseTexture added to the cache with an id ["+i+"] that already had an entry"),qt[i]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var i=qt[t];if(i){var n=i.textureCacheIds.indexOf(t);return n>-1&&i.textureCacheIds.splice(n,1),delete qt[t],i}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)delete qt[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},e._globalBatch=0,e}(ti),Kn=function(r){ot(e,r);function e(t,i){var n=this,o=i||{},s=o.width,a=o.height;n=r.call(this,s,a)||this,n.items=[],n.itemDirtyIds=[];for(var u=0;u<t;u++){var h=new q;n.items.push(h),n.itemDirtyIds.push(-2)}return n.length=t,n._load=null,n.baseTexture=null,n}return e.prototype.initFromArray=function(t,i){for(var n=0;n<this.length;n++)!t[n]||(t[n].castToBaseTexture?this.addBaseTextureAt(t[n].castToBaseTexture(),n):t[n]instanceof wr?this.addResourceAt(t[n],n):this.addResourceAt(qn(t[n],i),n))},e.prototype.dispose=function(){for(var t=0,i=this.length;t<i;t++)this.items[t].destroy();this.items=null,this.itemDirtyIds=null,this._load=null},e.prototype.addResourceAt=function(t,i){if(!this.items[i])throw new Error("Index "+i+" is out of bounds");return t.valid&&!this.valid&&this.resize(t.width,t.height),this.items[i].setResource(t),this},e.prototype.bind=function(t){if(this.baseTexture!==null)throw new Error("Only one base texture per TextureArray is allowed");r.prototype.bind.call(this,t);for(var i=0;i<this.length;i++)this.items[i].parentTextureArray=t,this.items[i].on("update",t.update,t)},e.prototype.unbind=function(t){r.prototype.unbind.call(this,t);for(var i=0;i<this.length;i++)this.items[i].parentTextureArray=null,this.items[i].off("update",t.update,t)},e.prototype.load=function(){var t=this;if(this._load)return this._load;var i=this.items.map(function(o){return o.resource}).filter(function(o){return o}),n=i.map(function(o){return o.load()});return this._load=Promise.all(n).then(function(){var o=t.items[0],s=o.realWidth,a=o.realHeight;return t.resize(s,a),Promise.resolve(t)}),this._load},e}(wr),Da=function(r){ot(e,r);function e(t,i){var n=this,o=i||{},s=o.width,a=o.height,u,h;return Array.isArray(t)?(u=t,h=t.length):h=t,n=r.call(this,h,{width:s,height:a})||this,u&&n.initFromArray(u,i),n}return e.prototype.addBaseTextureAt=function(t,i){if(t.resource)this.addResourceAt(t.resource,i);else throw new Error("ArrayResource does not support RenderTexture");return this},e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=We.TEXTURE_2D_ARRAY},e.prototype.upload=function(t,i,n){var o=this,s=o.length,a=o.itemDirtyIds,u=o.items,h=t.gl;n.dirtyId<0&&h.texImage3D(h.TEXTURE_2D_ARRAY,0,n.internalFormat,this._width,this._height,s,0,i.format,n.type,null);for(var l=0;l<s;l++){var c=u[l];a[l]<c.dirtyId&&(a[l]=c.dirtyId,c.valid&&h.texSubImage3D(h.TEXTURE_2D_ARRAY,0,0,0,l,c.resource.width,c.resource.height,1,i.format,n.type,c.resource.source))}return!0},e}(Kn),Ce=function(r){ot(e,r);function e(t){var i=this,n=t,o=n.naturalWidth||n.videoWidth||n.width,s=n.naturalHeight||n.videoHeight||n.height;return i=r.call(this,o,s)||this,i.source=t,i.noSubImage=!1,i}return e.crossOrigin=function(t,i,n){n===void 0&&i.indexOf("data:")!==0?t.crossOrigin=Cf(i):n!==!1&&(t.crossOrigin=typeof n=="string"?n:"anonymous")},e.prototype.upload=function(t,i,n,o){var s=t.gl,a=i.realWidth,u=i.realHeight;if(o=o||this.source,o instanceof HTMLImageElement){if(!o.complete||o.naturalWidth===0)return!1}else if(o instanceof HTMLVideoElement&&o.readyState<=1)return!1;return s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===re.UNPACK),!this.noSubImage&&i.target===s.TEXTURE_2D&&n.width===a&&n.height===u?s.texSubImage2D(s.TEXTURE_2D,0,0,0,i.format,n.type,o):(n.width=a,n.height=u,s.texImage2D(i.target,0,n.internalFormat,i.format,n.type,o)),!0},e.prototype.update=function(){if(!this.destroyed){var t=this.source,i=t.naturalWidth||t.videoWidth||t.width,n=t.naturalHeight||t.videoHeight||t.height;this.resize(i,n),r.prototype.update.call(this)}},e.prototype.dispose=function(){this.source=null},e}(wr),Zn=function(r){ot(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){var i=globalThis.OffscreenCanvas;return i&&t instanceof i?!0:globalThis.HTMLCanvasElement&&t instanceof HTMLCanvasElement},e}(Ce),ka=function(r){ot(e,r);function e(t,i){var n=this,o=i||{},s=o.width,a=o.height,u=o.autoLoad,h=o.linkBaseTexture;if(t&&t.length!==e.SIDES)throw new Error("Invalid length. Got "+t.length+", expected 6");n=r.call(this,6,{width:s,height:a})||this;for(var l=0;l<e.SIDES;l++)n.items[l].target=We.TEXTURE_CUBE_MAP_POSITIVE_X+l;return n.linkBaseTexture=h!==!1,t&&n.initFromArray(t,i),u!==!1&&n.load(),n}return e.prototype.bind=function(t){r.prototype.bind.call(this,t),t.target=We.TEXTURE_CUBE_MAP},e.prototype.addBaseTextureAt=function(t,i,n){if(!this.items[i])throw new Error("Index "+i+" is out of bounds");if(!this.linkBaseTexture||t.parentTextureArray||Object.keys(t._glTextures).length>0)if(t.resource)this.addResourceAt(t.resource,i);else throw new Error("CubeResource does not support copying of renderTexture.");else t.target=We.TEXTURE_CUBE_MAP_POSITIVE_X+i,t.parentTextureArray=this.baseTexture,this.items[i]=t;return t.valid&&!this.valid&&this.resize(t.realWidth,t.realHeight),this.items[i]=t,this},e.prototype.upload=function(t,i,n){for(var o=this.itemDirtyIds,s=0;s<e.SIDES;s++){var a=this.items[s];o[s]<a.dirtyId&&(a.valid&&a.resource?(a.resource.upload(t,a,n),o[s]=a.dirtyId):o[s]<-1&&(t.gl.texImage2D(a.target,0,n.internalFormat,i.realWidth,i.realHeight,0,i.format,n.type,null),o[s]=-1))}return!0},e.test=function(t){return Array.isArray(t)&&t.length===e.SIDES},e.SIDES=6,e}(Kn),Jn=function(r){ot(e,r);function e(t,i){var n=this;if(i=i||{},!(t instanceof HTMLImageElement)){var o=new Image;Ce.crossOrigin(o,t,i.crossorigin),o.src=t,t=o}return n=r.call(this,t)||this,!t.complete&&!!n._width&&!!n._height&&(n._width=0,n._height=0),n.url=t.src,n._process=null,n.preserveBitmap=!1,n.createBitmap=(i.createBitmap!==void 0?i.createBitmap:U.CREATE_IMAGE_BITMAP)&&!!globalThis.createImageBitmap,n.alphaMode=typeof i.alphaMode=="number"?i.alphaMode:null,n.bitmap=null,n._load=null,i.autoLoad!==!1&&n.load(),n}return e.prototype.load=function(t){var i=this;return this._load?this._load:(t!==void 0&&(this.createBitmap=t),this._load=new Promise(function(n,o){var s=i.source;i.url=s.src;var a=function(){i.destroyed||(s.onload=null,s.onerror=null,i.resize(s.width,s.height),i._load=null,i.createBitmap?n(i.process()):n(i))};s.complete&&s.src?a():(s.onload=a,s.onerror=function(u){o(u),i.onError.emit(u)})}),this._load)},e.prototype.process=function(){var t=this,i=this.source;if(this._process!==null)return this._process;if(this.bitmap!==null||!globalThis.createImageBitmap)return Promise.resolve(this);var n=globalThis.createImageBitmap,o=!i.crossOrigin||i.crossOrigin==="anonymous";return this._process=fetch(i.src,{mode:o?"cors":"no-cors"}).then(function(s){return s.blob()}).then(function(s){return n(s,0,0,i.width,i.height,{premultiplyAlpha:t.alphaMode===re.UNPACK?"premultiply":"none"})}).then(function(s){return t.destroyed?Promise.reject():(t.bitmap=s,t.update(),t._process=null,Promise.resolve(t))}),this._process},e.prototype.upload=function(t,i,n){if(typeof this.alphaMode=="number"&&(i.alphaMode=this.alphaMode),!this.createBitmap)return r.prototype.upload.call(this,t,i,n);if(!this.bitmap&&(this.process(),!this.bitmap))return!1;if(r.prototype.upload.call(this,t,i,n,this.bitmap),!this.preserveBitmap){var o=!0,s=i._glTextures;for(var a in s){var u=s[a];if(u!==n&&u.dirtyId!==i.dirtyId){o=!1;break}}o&&(this.bitmap.close&&this.bitmap.close(),this.bitmap=null)}return!0},e.prototype.dispose=function(){this.source.onload=null,this.source.onerror=null,r.prototype.dispose.call(this),this.bitmap&&(this.bitmap.close(),this.bitmap=null),this._process=null,this._load=null},e.test=function(t){return typeof t=="string"||t instanceof HTMLImageElement},e}(Ce),za=function(r){ot(e,r);function e(t,i){var n=this;return i=i||{},n=r.call(this,document.createElement("canvas"))||this,n._width=0,n._height=0,n.svg=t,n.scale=i.scale||1,n._overrideWidth=i.width,n._overrideHeight=i.height,n._resolve=null,n._crossorigin=i.crossorigin,n._load=null,i.autoLoad!==!1&&n.load(),n}return e.prototype.load=function(){var t=this;return this._load?this._load:(this._load=new Promise(function(i){if(t._resolve=function(){t.resize(t.source.width,t.source.height),i(t)},e.SVG_XML.test(t.svg.trim())){if(!btoa)throw new Error("Your browser doesn't support base64 conversions.");t.svg="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t.svg)))}t._loadSvg()}),this._load)},e.prototype._loadSvg=function(){var t=this,i=new Image;Ce.crossOrigin(i,this.svg,this._crossorigin),i.src=this.svg,i.onerror=function(n){!t._resolve||(i.onerror=null,t.onError.emit(n))},i.onload=function(){if(!!t._resolve){var n=i.width,o=i.height;if(!n||!o)throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");var s=n*t.scale,a=o*t.scale;(t._overrideWidth||t._overrideHeight)&&(s=t._overrideWidth||t._overrideHeight/o*n,a=t._overrideHeight||t._overrideWidth/n*o),s=Math.round(s),a=Math.round(a);var u=t.source;u.width=s,u.height=a,u._pixiId="canvas_"+Ze(),u.getContext("2d").drawImage(i,0,0,n,o,0,0,s,a),t._resolve(),t._resolve=null}}},e.getSize=function(t){var i=e.SVG_SIZE.exec(t),n={};return i&&(n[i[1]]=Math.round(parseFloat(i[3])),n[i[5]]=Math.round(parseFloat(i[7]))),n},e.prototype.dispose=function(){r.prototype.dispose.call(this),this._resolve=null,this._crossorigin=null},e.test=function(t,i){return i==="svg"||typeof t=="string"&&/^data:image\/svg\+xml(;(charset=utf8|utf8))?;base64/.test(t)||typeof t=="string"&&e.SVG_XML.test(t)},e.SVG_XML=/^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m,e.SVG_SIZE=/<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i,e}(Ce),Xa=function(r){ot(e,r);function e(t,i){var n=this;if(i=i||{},!(t instanceof HTMLVideoElement)){var o=document.createElement("video");o.setAttribute("preload","auto"),o.setAttribute("webkit-playsinline",""),o.setAttribute("playsinline",""),typeof t=="string"&&(t=[t]);var s=t[0].src||t[0];Ce.crossOrigin(o,s,i.crossorigin);for(var a=0;a<t.length;++a){var u=document.createElement("source"),h=t[a],l=h.src,c=h.mime;l=l||t[a];var f=l.split("?").shift().toLowerCase(),d=f.slice(f.lastIndexOf(".")+1);c=c||e.MIME_TYPES[d]||"video/"+d,u.src=l,u.type=c,o.appendChild(u)}t=o}return n=r.call(this,t)||this,n.noSubImage=!0,n._autoUpdate=!0,n._isConnectedToTicker=!1,n._updateFPS=i.updateFPS||0,n._msToNextUpdate=0,n.autoPlay=i.autoPlay!==!1,n._load=null,n._resolve=null,n._onCanPlay=n._onCanPlay.bind(n),n._onError=n._onError.bind(n),i.autoLoad!==!1&&n.load(),n}return e.prototype.update=function(t){if(!this.destroyed){var i=At.shared.elapsedMS*this.source.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-i),(!this._updateFPS||this._msToNextUpdate<=0)&&(r.prototype.update.call(this),this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0)}},e.prototype.load=function(){var t=this;if(this._load)return this._load;var i=this.source;return(i.readyState===i.HAVE_ENOUGH_DATA||i.readyState===i.HAVE_FUTURE_DATA)&&i.width&&i.height&&(i.complete=!0),i.addEventListener("play",this._onPlayStart.bind(this)),i.addEventListener("pause",this._onPlayStop.bind(this)),this._isSourceReady()?this._onCanPlay():(i.addEventListener("canplay",this._onCanPlay),i.addEventListener("canplaythrough",this._onCanPlay),i.addEventListener("error",this._onError,!0)),this._load=new Promise(function(n){t.valid?n(t):(t._resolve=n,i.load())}),this._load},e.prototype._onError=function(t){this.source.removeEventListener("error",this._onError,!0),this.onError.emit(t)},e.prototype._isSourcePlaying=function(){var t=this.source;return t.currentTime>0&&t.paused===!1&&t.ended===!1&&t.readyState>2},e.prototype._isSourceReady=function(){var t=this.source;return t.readyState===3||t.readyState===4},e.prototype._onPlayStart=function(){this.valid||this._onCanPlay(),this.autoUpdate&&!this._isConnectedToTicker&&(At.shared.add(this.update,this),this._isConnectedToTicker=!0)},e.prototype._onPlayStop=function(){this._isConnectedToTicker&&(At.shared.remove(this.update,this),this._isConnectedToTicker=!1)},e.prototype._onCanPlay=function(){var t=this.source;t.removeEventListener("canplay",this._onCanPlay),t.removeEventListener("canplaythrough",this._onCanPlay);var i=this.valid;this.resize(t.videoWidth,t.videoHeight),!i&&this._resolve&&(this._resolve(this),this._resolve=null),this._isSourcePlaying()?this._onPlayStart():this.autoPlay&&t.play()},e.prototype.dispose=function(){this._isConnectedToTicker&&(At.shared.remove(this.update,this),this._isConnectedToTicker=!1);var t=this.source;t&&(t.removeEventListener("error",this._onError,!0),t.pause(),t.src="",t.load()),r.prototype.dispose.call(this)},Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(At.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._isSourcePlaying()&&(At.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"updateFPS",{get:function(){return this._updateFPS},set:function(t){t!==this._updateFPS&&(this._updateFPS=t)},enumerable:!1,configurable:!0}),e.test=function(t,i){return globalThis.HTMLVideoElement&&t instanceof HTMLVideoElement||e.TYPES.indexOf(i)>-1},e.TYPES=["mp4","m4v","webm","ogg","ogv","h264","avi","mov"],e.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"},e}(Ce),ja=function(r){ot(e,r);function e(t){return r.call(this,t)||this}return e.test=function(t){return!!globalThis.createImageBitmap&&t instanceof ImageBitmap},e}(Ce);Oi.push(Jn,ja,Zn,Xa,za,Ir,ka,Da);var Lf={__proto__:null,Resource:wr,BaseImageResource:Ce,INSTALLED:Oi,autoDetectResource:qn,AbstractMultiResource:Kn,ArrayResource:Da,BufferResource:Ir,CanvasResource:Zn,CubeResource:ka,ImageResource:Jn,SVGResource:za,VideoResource:Xa,ImageBitmapResource:ja},ng=function(r){ot(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.upload=function(t,i,n){var o=t.gl;o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,i.alphaMode===re.UNPACK);var s=i.realWidth,a=i.realHeight;return n.width===s&&n.height===a?o.texSubImage2D(i.target,0,0,0,s,a,i.format,n.type,this.data):(n.width=s,n.height=a,o.texImage2D(i.target,0,n.internalFormat,s,a,0,i.format,n.type,this.data)),!0},e}(Ir),Rn=function(){function r(e,t){this.width=Math.round(e||100),this.height=Math.round(t||100),this.stencil=!1,this.depth=!1,this.dirtyId=0,this.dirtyFormat=0,this.dirtySize=0,this.depthTexture=null,this.colorTextures=[],this.glFramebuffers={},this.disposeRunner=new Nt("disposeFramebuffer"),this.multisample=yt.NONE}return Object.defineProperty(r.prototype,"colorTexture",{get:function(){return this.colorTextures[0]},enumerable:!1,configurable:!0}),r.prototype.addColorTexture=function(e,t){return e===void 0&&(e=0),this.colorTextures[e]=t||new q(null,{scaleMode:Vt.NEAREST,resolution:1,mipmap:ee.OFF,width:this.width,height:this.height}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.addDepthTexture=function(e){return this.depthTexture=e||new q(new ng(null,{width:this.width,height:this.height}),{scaleMode:Vt.NEAREST,resolution:1,width:this.width,height:this.height,mipmap:ee.OFF,format:R.DEPTH_COMPONENT,type:G.UNSIGNED_SHORT}),this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableDepth=function(){return this.depth=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.enableStencil=function(){return this.stencil=!0,this.dirtyId++,this.dirtyFormat++,this},r.prototype.resize=function(e,t){if(e=Math.round(e),t=Math.round(t),!(e===this.width&&t===this.height)){this.width=e,this.height=t,this.dirtyId++,this.dirtySize++;for(var i=0;i<this.colorTextures.length;i++){var n=this.colorTextures[i],o=n.resolution;n.setSize(e/o,t/o)}if(this.depthTexture){var o=this.depthTexture.resolution;this.depthTexture.setSize(e/o,t/o)}}},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroyDepthTexture=function(){this.depthTexture&&(this.depthTexture.destroy(),this.depthTexture=null,++this.dirtyId,++this.dirtyFormat)},r}(),Ha=function(r){ot(e,r);function e(t){t===void 0&&(t={});var i=this;if(typeof t=="number"){var n=arguments[0],o=arguments[1],s=arguments[2],a=arguments[3];t={width:n,height:o,scaleMode:s,resolution:a}}return t.width=t.width||100,t.height=t.height||100,t.multisample=t.multisample!==void 0?t.multisample:yt.NONE,i=r.call(this,null,t)||this,i.mipmap=ee.OFF,i.valid=!0,i.clearColor=[0,0,0,0],i.framebuffer=new Rn(i.realWidth,i.realHeight).addColorTexture(0,i),i.framebuffer.multisample=t.multisample,i.maskStack=[],i.filterStack=[{}],i}return e.prototype.resize=function(t,i){this.framebuffer.resize(t*this.resolution,i*this.resolution),this.setRealSize(this.framebuffer.width,this.framebuffer.height)},e.prototype.dispose=function(){this.framebuffer.dispose(),r.prototype.dispose.call(this)},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.framebuffer.destroyDepthTexture(),this.framebuffer=null},e}(q),Va=function(){function r(){this.x0=0,this.y0=0,this.x1=1,this.y1=0,this.x2=1,this.y2=1,this.x3=0,this.y3=1,this.uvsFloat32=new Float32Array(8)}return r.prototype.set=function(e,t,i){var n=t.width,o=t.height;if(i){var s=e.width/2/n,a=e.height/2/o,u=e.x/n+s,h=e.y/o+a;i=at.add(i,at.NW),this.x0=u+s*at.uX(i),this.y0=h+a*at.uY(i),i=at.add(i,2),this.x1=u+s*at.uX(i),this.y1=h+a*at.uY(i),i=at.add(i,2),this.x2=u+s*at.uX(i),this.y2=h+a*at.uY(i),i=at.add(i,2),this.x3=u+s*at.uX(i),this.y3=h+a*at.uY(i)}else this.x0=e.x/n,this.y0=e.y/o,this.x1=(e.x+e.width)/n,this.y1=e.y/o,this.x2=(e.x+e.width)/n,this.y2=(e.y+e.height)/o,this.x3=e.x/n,this.y3=(e.y+e.height)/o;this.uvsFloat32[0]=this.x0,this.uvsFloat32[1]=this.y0,this.uvsFloat32[2]=this.x1,this.uvsFloat32[3]=this.y1,this.uvsFloat32[4]=this.x2,this.uvsFloat32[5]=this.y2,this.uvsFloat32[6]=this.x3,this.uvsFloat32[7]=this.y3},r.prototype.toString=function(){return"[@pixi/core:TextureUvs "+("x0="+this.x0+" y0="+this.y0+" ")+("x1="+this.x1+" y1="+this.y1+" x2="+this.x2+" ")+("y2="+this.y2+" x3="+this.x3+" y3="+this.y3)+"]"},r}(),Nh=new Va;function un(r){r.destroy=function(){},r.on=function(){},r.once=function(){},r.emit=function(){}}var k=function(r){ot(e,r);function e(t,i,n,o,s,a){var u=r.call(this)||this;if(u.noFrame=!1,i||(u.noFrame=!0,i=new K(0,0,1,1)),t instanceof e&&(t=t.baseTexture),u.baseTexture=t,u._frame=i,u.trim=o,u.valid=!1,u._uvs=Nh,u.uvMatrix=null,u.orig=n||i,u._rotate=Number(s||0),s===!0)u._rotate=2;else if(u._rotate%2!==0)throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");return u.defaultAnchor=a?new Y(a.x,a.y):new Y(0,0),u._updateID=0,u.textureCacheIds=[],t.valid?u.noFrame?t.valid&&u.onBaseTextureUpdated(t):u.frame=i:t.once("loaded",u.onBaseTextureUpdated,u),u.noFrame&&t.on("update",u.onBaseTextureUpdated,u),u}return e.prototype.update=function(){this.baseTexture.resource&&this.baseTexture.resource.update()},e.prototype.onBaseTextureUpdated=function(t){if(this.noFrame){if(!this.baseTexture.valid)return;this._frame.width=t.width,this._frame.height=t.height,this.valid=!0,this.updateUvs()}else this.frame=this._frame;this.emit("update",this)},e.prototype.destroy=function(t){if(this.baseTexture){if(t){var i=this.baseTexture.resource;i&&i.url&&bt[i.url]&&e.removeFromCache(i.url),this.baseTexture.destroy()}this.baseTexture.off("loaded",this.onBaseTextureUpdated,this),this.baseTexture.off("update",this.onBaseTextureUpdated,this),this.baseTexture=null}this._frame=null,this._uvs=null,this.trim=null,this.orig=null,this.valid=!1,e.removeFromCache(this),this.textureCacheIds=null},e.prototype.clone=function(){var t=this._frame.clone(),i=this._frame===this.orig?t:this.orig.clone(),n=new e(this.baseTexture,!this.noFrame&&t,i,this.trim&&this.trim.clone(),this.rotate,this.defaultAnchor);return this.noFrame&&(n._frame=t),n},e.prototype.updateUvs=function(){this._uvs===Nh&&(this._uvs=new Va),this._uvs.set(this._frame,this.baseTexture,this.rotate),this._updateID++},e.from=function(t,i,n){i===void 0&&(i={}),n===void 0&&(n=U.STRICT_TEXTURE_CACHE);var o=typeof t=="string",s=null;if(o)s=t;else if(t instanceof q){if(!t.cacheId){var a=i&&i.pixiIdPrefix||"pixiid";t.cacheId=a+"-"+Ze(),q.addToCache(t,t.cacheId)}s=t.cacheId}else{if(!t._pixiId){var a=i&&i.pixiIdPrefix||"pixiid";t._pixiId=a+"_"+Ze()}s=t._pixiId}var u=bt[s];if(o&&n&&!u)throw new Error('The cacheId "'+s+'" does not exist in TextureCache.');return!u&&!(t instanceof q)?(i.resolution||(i.resolution=Ri(t)),u=new e(new q(t,i)),u.baseTexture.cacheId=s,q.addToCache(u.baseTexture,s),e.addToCache(u,s)):!u&&t instanceof q&&(u=new e(t),e.addToCache(u,s)),u},e.fromURL=function(t,i){var n=Object.assign({autoLoad:!1},i==null?void 0:i.resourceOptions),o=e.from(t,Object.assign({resourceOptions:n},i),!1),s=o.baseTexture.resource;return o.baseTexture.valid?Promise.resolve(o):s.load().then(function(){return Promise.resolve(o)})},e.fromBuffer=function(t,i,n,o){return new e(q.fromBuffer(t,i,n,o))},e.fromLoader=function(t,i,n,o){var s=new q(t,Object.assign({scaleMode:U.SCALE_MODE,resolution:Ri(i)},o)),a=s.resource;a instanceof Jn&&(a.url=i);var u=new e(s);return n||(n=i),q.addToCache(u.baseTexture,n),e.addToCache(u,n),n!==i&&(q.addToCache(u.baseTexture,i),e.addToCache(u,i)),u.baseTexture.valid?Promise.resolve(u):new Promise(function(h){u.baseTexture.once("loaded",function(){return h(u)})})},e.addToCache=function(t,i){i&&(t.textureCacheIds.indexOf(i)===-1&&t.textureCacheIds.push(i),bt[i]&&console.warn("Texture added to the cache with an id ["+i+"] that already had an entry"),bt[i]=t)},e.removeFromCache=function(t){if(typeof t=="string"){var i=bt[t];if(i){var n=i.textureCacheIds.indexOf(t);return n>-1&&i.textureCacheIds.splice(n,1),delete bt[t],i}}else if(t&&t.textureCacheIds){for(var o=0;o<t.textureCacheIds.length;++o)bt[t.textureCacheIds[o]]===t&&delete bt[t.textureCacheIds[o]];return t.textureCacheIds.length=0,t}return null},Object.defineProperty(e.prototype,"resolution",{get:function(){return this.baseTexture.resolution},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"frame",{get:function(){return this._frame},set:function(t){this._frame=t,this.noFrame=!1;var i=t.x,n=t.y,o=t.width,s=t.height,a=i+o>this.baseTexture.width,u=n+s>this.baseTexture.height;if(a||u){var h=a&&u?"and":"or",l="X: "+i+" + "+o+" = "+(i+o)+" > "+this.baseTexture.width,c="Y: "+n+" + "+s+" = "+(n+s)+" > "+this.baseTexture.height;throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: "+(l+" "+h+" "+c))}this.valid=o&&s&&this.baseTexture.valid,!this.trim&&!this.rotate&&(this.orig=t),this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotate",{get:function(){return this._rotate},set:function(t){this._rotate=t,this.valid&&this.updateUvs()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return this.orig.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.orig.height},enumerable:!1,configurable:!0}),e.prototype.castToBaseTexture=function(){return this.baseTexture},Object.defineProperty(e,"EMPTY",{get:function(){return e._EMPTY||(e._EMPTY=new e(new q),un(e._EMPTY),un(e._EMPTY.baseTexture)),e._EMPTY},enumerable:!1,configurable:!0}),Object.defineProperty(e,"WHITE",{get:function(){if(!e._WHITE){var t=document.createElement("canvas"),i=t.getContext("2d");t.width=16,t.height=16,i.fillStyle="white",i.fillRect(0,0,16,16),e._WHITE=new e(new q(new Zn(t))),un(e._WHITE),un(e._WHITE.baseTexture)}return e._WHITE},enumerable:!1,configurable:!0}),e}(ti),Me=function(r){ot(e,r);function e(t,i){var n=r.call(this,t,i)||this;return n.valid=!0,n.filterFrame=null,n.filterPoolKey=null,n.updateUvs(),n}return Object.defineProperty(e.prototype,"framebuffer",{get:function(){return this.baseTexture.framebuffer},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"multisample",{get:function(){return this.framebuffer.multisample},set:function(t){this.framebuffer.multisample=t},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,i,n){n===void 0&&(n=!0);var o=this.baseTexture.resolution,s=Math.round(t*o)/o,a=Math.round(i*o)/o;this.valid=s>0&&a>0,this._frame.width=this.orig.width=s,this._frame.height=this.orig.height=a,n&&this.baseTexture.resize(s,a),this.updateUvs()},e.prototype.setResolution=function(t){var i=this.baseTexture;i.resolution!==t&&(i.setResolution(t),this.resize(i.width,i.height,!1))},e.create=function(t){for(var i=arguments,n=[],o=1;o<arguments.length;o++)n[o-1]=i[o];return typeof t=="number"&&(Le("6.0.0","Arguments (width, height, scaleMode, resolution) have been deprecated."),t={width:t,height:n[0],scaleMode:n[1],resolution:n[2]}),new e(new Ha(t))},e}(k),Mf=function(){function r(e){this.texturePool={},this.textureOptions=e||{},this.enableFullScreen=!1,this._pixelsWidth=0,this._pixelsHeight=0}return r.prototype.createTexture=function(e,t,i){i===void 0&&(i=yt.NONE);var n=new Ha(Object.assign({width:e,height:t,resolution:1,multisample:i},this.textureOptions));return new Me(n)},r.prototype.getOptimalTexture=function(e,t,i,n){i===void 0&&(i=1),n===void 0&&(n=yt.NONE);var o;e=Math.ceil(e*i-1e-6),t=Math.ceil(t*i-1e-6),!this.enableFullScreen||e!==this._pixelsWidth||t!==this._pixelsHeight?(e=Ii(e),t=Ii(t),o=((e&65535)<<16|t&65535)>>>0,n>1&&(o+=n*4294967296)):o=n>1?-n:-1,this.texturePool[o]||(this.texturePool[o]=[]);var s=this.texturePool[o].pop();return s||(s=this.createTexture(e,t,n)),s.filterPoolKey=o,s.setResolution(i),s},r.prototype.getFilterTexture=function(e,t,i){var n=this.getOptimalTexture(e.width,e.height,t||e.resolution,i||yt.NONE);return n.filterFrame=e.filterFrame,n},r.prototype.returnTexture=function(e){var t=e.filterPoolKey;e.filterFrame=null,this.texturePool[t].push(e)},r.prototype.returnFilterTexture=function(e){this.returnTexture(e)},r.prototype.clear=function(e){if(e=e!==!1,e)for(var t in this.texturePool){var i=this.texturePool[t];if(i)for(var n=0;n<i.length;n++)i[n].destroy(!0)}this.texturePool={}},r.prototype.setScreenSize=function(e){if(!(e.width===this._pixelsWidth&&e.height===this._pixelsHeight)){this.enableFullScreen=e.width>0&&e.height>0;for(var t in this.texturePool)if(Number(t)<0){var i=this.texturePool[t];if(i)for(var n=0;n<i.length;n++)i[n].destroy(!0);this.texturePool[t]=[]}this._pixelsWidth=e.width,this._pixelsHeight=e.height}},r.SCREEN_KEY=-1,r}(),ds=function(){function r(e,t,i,n,o,s,a){t===void 0&&(t=0),i===void 0&&(i=!1),n===void 0&&(n=G.FLOAT),this.buffer=e,this.size=t,this.normalized=i,this.type=n,this.stride=o,this.start=s,this.instance=a}return r.prototype.destroy=function(){this.buffer=null},r.from=function(e,t,i,n,o){return new r(e,t,i,n,o)},r}(),og=0,Tt=function(){function r(e,t,i){t===void 0&&(t=!0),i===void 0&&(i=!1),this.data=e||new Float32Array(1),this._glBuffers={},this._updateID=0,this.index=i,this.static=t,this.id=og++,this.disposeRunner=new Nt("disposeBuffer")}return r.prototype.update=function(e){e instanceof Array&&(e=new Float32Array(e)),this.data=e||this.data,this._updateID++},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.data=null},Object.defineProperty(r.prototype,"index",{get:function(){return this.type===ce.ELEMENT_ARRAY_BUFFER},set:function(e){this.type=e?ce.ELEMENT_ARRAY_BUFFER:ce.ARRAY_BUFFER},enumerable:!1,configurable:!0}),r.from=function(e){return e instanceof Array&&(e=new Float32Array(e)),new r(e)},r}(),sg={Float32Array,Uint32Array,Int32Array,Uint8Array};function ag(r,e){for(var t=0,i=0,n={},o=0;o<r.length;o++)i+=e[o],t+=r[o].length;for(var s=new ArrayBuffer(t*4),a=null,u=0,o=0;o<r.length;o++){var h=e[o],l=r[o],c=$n(l);n[c]||(n[c]=new sg[c](s)),a=n[c];for(var f=0;f<l.length;f++){var d=(f/h|0)*i+u,v=f%h;a[d+v]=l[f]}u+=h}return new Float32Array(s)}var Fh={5126:4,5123:2,5121:1},ug=0,hg={Float32Array,Uint32Array,Int32Array,Uint8Array,Uint16Array},ei=function(){function r(e,t){e===void 0&&(e=[]),t===void 0&&(t={}),this.buffers=e,this.indexBuffer=null,this.attributes=t,this.glVertexArrayObjects={},this.id=ug++,this.instanced=!1,this.instanceCount=1,this.disposeRunner=new Nt("disposeGeometry"),this.refCount=0}return r.prototype.addAttribute=function(e,t,i,n,o,s,a,u){if(i===void 0&&(i=0),n===void 0&&(n=!1),u===void 0&&(u=!1),!t)throw new Error("You must pass a buffer when creating an attribute");t instanceof Tt||(t instanceof Array&&(t=new Float32Array(t)),t=new Tt(t));var h=e.split("|");if(h.length>1){for(var l=0;l<h.length;l++)this.addAttribute(h[l],t,i,n,o);return this}var c=this.buffers.indexOf(t);return c===-1&&(this.buffers.push(t),c=this.buffers.length-1),this.attributes[e]=new ds(c,i,n,o,s,a,u),this.instanced=this.instanced||u,this},r.prototype.getAttribute=function(e){return this.attributes[e]},r.prototype.getBuffer=function(e){return this.buffers[this.getAttribute(e).buffer]},r.prototype.addIndex=function(e){return e instanceof Tt||(e instanceof Array&&(e=new Uint16Array(e)),e=new Tt(e)),e.type=ce.ELEMENT_ARRAY_BUFFER,this.indexBuffer=e,this.buffers.indexOf(e)===-1&&this.buffers.push(e),this},r.prototype.getIndex=function(){return this.indexBuffer},r.prototype.interleave=function(){if(this.buffers.length===1||this.buffers.length===2&&this.indexBuffer)return this;var e=[],t=[],i=new Tt,n;for(n in this.attributes){var o=this.attributes[n],s=this.buffers[o.buffer];e.push(s.data),t.push(o.size*Fh[o.type]/4),o.buffer=0}for(i.data=ag(e,t),n=0;n<this.buffers.length;n++)this.buffers[n]!==this.indexBuffer&&this.buffers[n].destroy();return this.buffers=[i],this.indexBuffer&&this.buffers.push(this.indexBuffer),this},r.prototype.getSize=function(){for(var e in this.attributes){var t=this.attributes[e],i=this.buffers[t.buffer];return i.data.length/(t.stride/4||t.size)}return 0},r.prototype.dispose=function(){this.disposeRunner.emit(this,!1)},r.prototype.destroy=function(){this.dispose(),this.buffers=null,this.indexBuffer=null,this.attributes=null},r.prototype.clone=function(){for(var e=new r,t=0;t<this.buffers.length;t++)e.buffers[t]=new Tt(this.buffers[t].data.slice(0));for(var t in this.attributes){var i=this.attributes[t];e.attributes[t]=new ds(i.buffer,i.size,i.normalized,i.type,i.stride,i.start,i.instance)}return this.indexBuffer&&(e.indexBuffer=e.buffers[this.buffers.indexOf(this.indexBuffer)],e.indexBuffer.type=ce.ELEMENT_ARRAY_BUFFER),e},r.merge=function(e){for(var t=new r,i=[],n=[],o=[],s,a=0;a<e.length;a++){s=e[a];for(var u=0;u<s.buffers.length;u++)n[u]=n[u]||0,n[u]+=s.buffers[u].data.length,o[u]=0}for(var a=0;a<s.buffers.length;a++)i[a]=new hg[$n(s.buffers[a].data)](n[a]),t.buffers[a]=new Tt(i[a]);for(var a=0;a<e.length;a++){s=e[a];for(var u=0;u<s.buffers.length;u++)i[u].set(s.buffers[u].data,o[u]),o[u]+=s.buffers[u].data.length}if(t.attributes=s.attributes,s.indexBuffer){t.indexBuffer=t.buffers[s.buffers.indexOf(s.indexBuffer)],t.indexBuffer.type=ce.ELEMENT_ARRAY_BUFFER;for(var h=0,l=0,c=0,f=0,a=0;a<s.buffers.length;a++)if(s.buffers[a]!==s.indexBuffer){f=a;break}for(var a in s.attributes){var d=s.attributes[a];(d.buffer|0)===f&&(l+=d.size*Fh[d.type]/4)}for(var a=0;a<e.length;a++){for(var v=e[a].indexBuffer.data,u=0;u<v.length;u++)t.indexBuffer.data[u+c]+=h;h+=e[a].buffers[f].data.length/l,c+=v.length}}return t},r}(),Bf=function(r){ot(e,r);function e(){var t=r.call(this)||this;return t.addAttribute("aVertexPosition",new Float32Array([0,0,1,0,1,1,0,1])).addIndex([0,1,3,2]),t}return e}(ei),Wa=function(r){ot(e,r);function e(){var t=r.call(this)||this;return t.vertices=new Float32Array([-1,-1,1,-1,1,1,-1,1]),t.uvs=new Float32Array([0,0,1,0,1,1,0,1]),t.vertexBuffer=new Tt(t.vertices),t.uvBuffer=new Tt(t.uvs),t.addAttribute("aVertexPosition",t.vertexBuffer).addAttribute("aTextureCoord",t.uvBuffer).addIndex([0,1,2,0,2,3]),t}return e.prototype.map=function(t,i){var n=0,o=0;return this.uvs[0]=n,this.uvs[1]=o,this.uvs[2]=n+i.width/t.width,this.uvs[3]=o,this.uvs[4]=n+i.width/t.width,this.uvs[5]=o+i.height/t.height,this.uvs[6]=n,this.uvs[7]=o+i.height/t.height,n=i.x,o=i.y,this.vertices[0]=n,this.vertices[1]=o,this.vertices[2]=n+i.width,this.vertices[3]=o,this.vertices[4]=n+i.width,this.vertices[5]=o+i.height,this.vertices[6]=n,this.vertices[7]=o+i.height,this.invalidate(),this},e.prototype.invalidate=function(){return this.vertexBuffer._updateID++,this.uvBuffer._updateID++,this},e}(ei),lg=0,Ye=function(){function r(e,t,i){this.group=!0,this.syncUniforms={},this.dirtyId=0,this.id=lg++,this.static=!!t,this.ubo=!!i,e instanceof Tt?(this.buffer=e,this.buffer.type=ce.UNIFORM_BUFFER,this.autoManage=!1,this.ubo=!0):(this.uniforms=e,this.ubo&&(this.buffer=new Tt(new Float32Array(1)),this.buffer.type=ce.UNIFORM_BUFFER,this.autoManage=!0))}return r.prototype.update=function(){this.dirtyId++,!this.autoManage&&this.buffer&&this.buffer.update()},r.prototype.add=function(e,t,i){if(!this.ubo)this.uniforms[e]=new r(t,i);else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")},r.from=function(e,t,i){return new r(e,t,i)},r.uboFrom=function(e,t){return new r(e,t!=null?t:!0,!0)},r}(),Gf=function(){function r(){this.renderTexture=null,this.target=null,this.legacy=!1,this.resolution=1,this.multisample=yt.NONE,this.sourceFrame=new K,this.destinationFrame=new K,this.bindingSourceFrame=new K,this.bindingDestinationFrame=new K,this.filters=[],this.transform=null}return r.prototype.clear=function(){this.target=null,this.filters=null,this.renderTexture=null},r}(),hn=[new Y,new Y,new Y,new Y],fo=new _t,Ya=function(){function r(e){this.renderer=e,this.defaultFilterStack=[{}],this.texturePool=new Mf,this.texturePool.setScreenSize(e.view),this.statePool=[],this.quad=new Bf,this.quadUv=new Wa,this.tempRect=new K,this.activeState={},this.globalUniforms=new Ye({outputFrame:new K,inputSize:new Float32Array(4),inputPixel:new Float32Array(4),inputClamp:new Float32Array(4),resolution:1,filterArea:new Float32Array(4),filterClamp:new Float32Array(4)},!0),this.forceClear=!1,this.useMaxPadding=!1}return r.prototype.push=function(e,t){for(var i,n,o=this.renderer,s=this.defaultFilterStack,a=this.statePool.pop()||new Gf,u=this.renderer.renderTexture,h=t[0].resolution,l=t[0].multisample,c=t[0].padding,f=t[0].autoFit,d=(i=t[0].legacy)!==null&&i!==void 0?i:!0,v=1;v<t.length;v++){var p=t[v];h=Math.min(h,p.resolution),l=Math.min(l,p.multisample),c=this.useMaxPadding?Math.max(c,p.padding):c+p.padding,f=f&&p.autoFit,d=d||((n=p.legacy)!==null&&n!==void 0?n:!0)}s.length===1&&(this.defaultFilterStack[0].renderTexture=u.current),s.push(a),a.resolution=h,a.multisample=l,a.legacy=d,a.target=e,a.sourceFrame.copyFrom(e.filterArea||e.getBounds(!0)),a.sourceFrame.pad(c);var _=this.tempRect.copyFrom(u.sourceFrame);o.projection.transform&&this.transformAABB(fo.copyFrom(o.projection.transform).invert(),_),f?(a.sourceFrame.fit(_),(a.sourceFrame.width<=0||a.sourceFrame.height<=0)&&(a.sourceFrame.width=0,a.sourceFrame.height=0)):a.sourceFrame.intersects(_)||(a.sourceFrame.width=0,a.sourceFrame.height=0),this.roundFrame(a.sourceFrame,u.current?u.current.resolution:o.resolution,u.sourceFrame,u.destinationFrame,o.projection.transform),a.renderTexture=this.getOptimalFilterTexture(a.sourceFrame.width,a.sourceFrame.height,h,l),a.filters=t,a.destinationFrame.width=a.renderTexture.width,a.destinationFrame.height=a.renderTexture.height;var m=this.tempRect;m.x=0,m.y=0,m.width=a.sourceFrame.width,m.height=a.sourceFrame.height,a.renderTexture.filterFrame=a.sourceFrame,a.bindingSourceFrame.copyFrom(u.sourceFrame),a.bindingDestinationFrame.copyFrom(u.destinationFrame),a.transform=o.projection.transform,o.projection.transform=null,u.bind(a.renderTexture,a.sourceFrame,m),o.framebuffer.clear(0,0,0,0)},r.prototype.pop=function(){var e=this.defaultFilterStack,t=e.pop(),i=t.filters;this.activeState=t;var n=this.globalUniforms.uniforms;n.outputFrame=t.sourceFrame,n.resolution=t.resolution;var o=n.inputSize,s=n.inputPixel,a=n.inputClamp;if(o[0]=t.destinationFrame.width,o[1]=t.destinationFrame.height,o[2]=1/o[0],o[3]=1/o[1],s[0]=Math.round(o[0]*t.resolution),s[1]=Math.round(o[1]*t.resolution),s[2]=1/s[0],s[3]=1/s[1],a[0]=.5*s[2],a[1]=.5*s[3],a[2]=t.sourceFrame.width*o[2]-.5*s[2],a[3]=t.sourceFrame.height*o[3]-.5*s[3],t.legacy){var u=n.filterArea;u[0]=t.destinationFrame.width,u[1]=t.destinationFrame.height,u[2]=t.sourceFrame.x,u[3]=t.sourceFrame.y,n.filterClamp=n.inputClamp}this.globalUniforms.update();var h=e[e.length-1];if(this.renderer.framebuffer.blit(),i.length===1)i[0].apply(this,t.renderTexture,h.renderTexture,Pe.BLEND,t),this.returnFilterTexture(t.renderTexture);else{var l=t.renderTexture,c=this.getOptimalFilterTexture(l.width,l.height,t.resolution);c.filterFrame=l.filterFrame;var f=0;for(f=0;f<i.length-1;++f){f===1&&t.multisample>1&&(c=this.getOptimalFilterTexture(l.width,l.height,t.resolution),c.filterFrame=l.filterFrame),i[f].apply(this,l,c,Pe.CLEAR,t);var d=l;l=c,c=d}i[f].apply(this,l,h.renderTexture,Pe.BLEND,t),f>1&&t.multisample>1&&this.returnFilterTexture(t.renderTexture),this.returnFilterTexture(l),this.returnFilterTexture(c)}t.clear(),this.statePool.push(t)},r.prototype.bindAndClear=function(e,t){t===void 0&&(t=Pe.CLEAR);var i=this.renderer,n=i.renderTexture,o=i.state;if(e===this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?this.renderer.projection.transform=this.activeState.transform:this.renderer.projection.transform=null,e&&e.filterFrame){var s=this.tempRect;s.x=0,s.y=0,s.width=e.filterFrame.width,s.height=e.filterFrame.height,n.bind(e,e.filterFrame,s)}else e!==this.defaultFilterStack[this.defaultFilterStack.length-1].renderTexture?n.bind(e):this.renderer.renderTexture.bind(e,this.activeState.bindingSourceFrame,this.activeState.bindingDestinationFrame);var a=o.stateId&1||this.forceClear;(t===Pe.CLEAR||t===Pe.BLIT&&a)&&this.renderer.framebuffer.clear(0,0,0,0)},r.prototype.applyFilter=function(e,t,i,n){var o=this.renderer;o.state.set(e.state),this.bindAndClear(i,n),e.uniforms.uSampler=t,e.uniforms.filterGlobals=this.globalUniforms,o.shader.bind(e),e.legacy=!!e.program.attributeData.aTextureCoord,e.legacy?(this.quadUv.map(t._frame,t.filterFrame),o.geometry.bind(this.quadUv),o.geometry.draw(Zt.TRIANGLES)):(o.geometry.bind(this.quad),o.geometry.draw(Zt.TRIANGLE_STRIP))},r.prototype.calculateSpriteMatrix=function(e,t){var i=this.activeState,n=i.sourceFrame,o=i.destinationFrame,s=t._texture.orig,a=e.set(o.width,0,0,o.height,n.x,n.y),u=t.worldTransform.copyTo(_t.TEMP_MATRIX);return u.invert(),a.prepend(u),a.scale(1/s.width,1/s.height),a.translate(t.anchor.x,t.anchor.y),a},r.prototype.destroy=function(){this.renderer=null,this.texturePool.clear(!1)},r.prototype.getOptimalFilterTexture=function(e,t,i,n){return i===void 0&&(i=1),n===void 0&&(n=yt.NONE),this.texturePool.getOptimalTexture(e,t,i,n)},r.prototype.getFilterTexture=function(e,t,i){if(typeof e=="number"){var n=e;e=t,t=n}e=e||this.activeState.renderTexture;var o=this.texturePool.getOptimalTexture(e.width,e.height,t||e.resolution,i||yt.NONE);return o.filterFrame=e.filterFrame,o},r.prototype.returnFilterTexture=function(e){this.texturePool.returnTexture(e)},r.prototype.emptyPool=function(){this.texturePool.clear(!0)},r.prototype.resize=function(){this.texturePool.setScreenSize(this.renderer.view)},r.prototype.transformAABB=function(e,t){var i=hn[0],n=hn[1],o=hn[2],s=hn[3];i.set(t.left,t.top),n.set(t.left,t.bottom),o.set(t.right,t.top),s.set(t.right,t.bottom),e.apply(i,i),e.apply(n,n),e.apply(o,o),e.apply(s,s);var a=Math.min(i.x,n.x,o.x,s.x),u=Math.min(i.y,n.y,o.y,s.y),h=Math.max(i.x,n.x,o.x,s.x),l=Math.max(i.y,n.y,o.y,s.y);t.x=a,t.y=u,t.width=h-a,t.height=l-u},r.prototype.roundFrame=function(e,t,i,n,o){if(!(e.width<=0||e.height<=0||i.width<=0||i.height<=0)){if(o){var s=o.a,a=o.b,u=o.c,h=o.d;if((Math.abs(a)>1e-4||Math.abs(u)>1e-4)&&(Math.abs(s)>1e-4||Math.abs(h)>1e-4))return}o=o?fo.copyFrom(o):fo.identity(),o.translate(-i.x,-i.y).scale(n.width/i.width,n.height/i.height).translate(n.x,n.y),this.transformAABB(o,e),e.ceil(t),this.transformAABB(o.invert(),e)}},r}(),Wi=function(){function r(e){this.renderer=e}return r.prototype.flush=function(){},r.prototype.destroy=function(){this.renderer=null},r.prototype.start=function(){},r.prototype.stop=function(){this.flush()},r.prototype.render=function(e){},r}(),$a=function(){function r(e){this.renderer=e,this.emptyRenderer=new Wi(e),this.currentRenderer=this.emptyRenderer}return r.prototype.setObjectRenderer=function(e){this.currentRenderer!==e&&(this.currentRenderer.stop(),this.currentRenderer=e,this.currentRenderer.start())},r.prototype.flush=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.reset=function(){this.setObjectRenderer(this.emptyRenderer)},r.prototype.copyBoundTextures=function(e,t){for(var i=this.renderer.texture.boundTextures,n=t-1;n>=0;--n)e[n]=i[n]||null,e[n]&&(e[n]._batchLocation=n)},r.prototype.boundArray=function(e,t,i,n){for(var o=e.elements,s=e.ids,a=e.count,u=0,h=0;h<a;h++){var l=o[h],c=l._batchLocation;if(c>=0&&c<n&&t[c]===l){s[h]=c;continue}for(;u<n;){var f=t[u];if(f&&f._batchEnabled===i&&f._batchLocation===u){u++;continue}s[h]=u,l._batchLocation=u,t[u]=l;break}}},r.prototype.destroy=function(){this.renderer=null},r}(),Uh=0,qa=function(){function r(e){this.renderer=e,this.webGLVersion=1,this.extensions={},this.supports={uint32Indices:!1},this.handleContextLost=this.handleContextLost.bind(this),this.handleContextRestored=this.handleContextRestored.bind(this),e.view.addEventListener("webglcontextlost",this.handleContextLost,!1),e.view.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}return Object.defineProperty(r.prototype,"isLost",{get:function(){return!this.gl||this.gl.isContextLost()},enumerable:!1,configurable:!0}),r.prototype.contextChange=function(e){this.gl=e,this.renderer.gl=e,this.renderer.CONTEXT_UID=Uh++,e.isContextLost()&&e.getExtension("WEBGL_lose_context")&&e.getExtension("WEBGL_lose_context").restoreContext()},r.prototype.initFromContext=function(e){this.gl=e,this.validateContext(e),this.renderer.gl=e,this.renderer.CONTEXT_UID=Uh++,this.renderer.runners.contextChange.emit(e)},r.prototype.initFromOptions=function(e){var t=this.createContext(this.renderer.view,e);this.initFromContext(t)},r.prototype.createContext=function(e,t){var i;if(U.PREFER_ENV>=be.WEBGL2&&(i=e.getContext("webgl2",t)),i)this.webGLVersion=2;else if(this.webGLVersion=1,i=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!i)throw new Error("This browser does not support WebGL. Try using the canvas renderer");return this.gl=i,this.getExtensions(),this.gl},r.prototype.getExtensions=function(){var e=this.gl,t={anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc")};this.webGLVersion===1?Object.assign(this.extensions,t,{drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),loseContext:e.getExtension("WEBGL_lose_context"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear")}):this.webGLVersion===2&&Object.assign(this.extensions,t,{colorBufferFloat:e.getExtension("EXT_color_buffer_float")})},r.prototype.handleContextLost=function(e){e.preventDefault()},r.prototype.handleContextRestored=function(){this.renderer.runners.contextChange.emit(this.gl)},r.prototype.destroy=function(){var e=this.renderer.view;this.renderer=null,e.removeEventListener("webglcontextlost",this.handleContextLost),e.removeEventListener("webglcontextrestored",this.handleContextRestored),this.gl.useProgram(null),this.extensions.loseContext&&this.extensions.loseContext.loseContext()},r.prototype.postrender=function(){this.renderer.renderingToScreen&&this.gl.flush()},r.prototype.validateContext=function(e){var t=e.getContextAttributes(),i="WebGL2RenderingContext"in globalThis&&e instanceof globalThis.WebGL2RenderingContext;i&&(this.webGLVersion=2),t.stencil||console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");var n=i||!!e.getExtension("OES_element_index_uint");this.supports.uint32Indices=n,n||console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")},r}(),Df=function(){function r(e){this.framebuffer=e,this.stencil=null,this.dirtyId=-1,this.dirtyFormat=-1,this.dirtySize=-1,this.multisample=yt.NONE,this.msaaBuffer=null,this.blitFramebuffer=null,this.mipLevel=0}return r}(),fg=new K,Ka=function(){function r(e){this.renderer=e,this.managedFramebuffers=[],this.unknownFramebuffer=new Rn(10,10),this.msaaSamples=null}return r.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.current=this.unknownFramebuffer,this.viewport=new K,this.hasMRT=!0,this.writeDepthTexture=!0,this.disposeAll(!0),this.renderer.context.webGLVersion===1){var t=this.renderer.context.extensions.drawBuffers,i=this.renderer.context.extensions.depthTexture;U.PREFER_ENV===be.WEBGL_LEGACY&&(t=null,i=null),t?e.drawBuffers=function(n){return t.drawBuffersWEBGL(n)}:(this.hasMRT=!1,e.drawBuffers=function(){}),i||(this.writeDepthTexture=!1)}else this.msaaSamples=e.getInternalformatParameter(e.RENDERBUFFER,e.RGBA8,e.SAMPLES)},r.prototype.bind=function(e,t,i){i===void 0&&(i=0);var n=this.gl;if(e){var o=e.glFramebuffers[this.CONTEXT_UID]||this.initFramebuffer(e);this.current!==e&&(this.current=e,n.bindFramebuffer(n.FRAMEBUFFER,o.framebuffer)),o.mipLevel!==i&&(e.dirtyId++,e.dirtyFormat++,o.mipLevel=i),o.dirtyId!==e.dirtyId&&(o.dirtyId=e.dirtyId,o.dirtyFormat!==e.dirtyFormat?(o.dirtyFormat=e.dirtyFormat,o.dirtySize=e.dirtySize,this.updateFramebuffer(e,i)):o.dirtySize!==e.dirtySize&&(o.dirtySize=e.dirtySize,this.resizeFramebuffer(e)));for(var s=0;s<e.colorTextures.length;s++){var a=e.colorTextures[s];this.renderer.texture.unbind(a.parentTextureArray||a)}if(e.depthTexture&&this.renderer.texture.unbind(e.depthTexture),t){var u=t.width>>i,h=t.height>>i,l=u/t.width;this.setViewport(t.x*l,t.y*l,u,h)}else{var u=e.width>>i,h=e.height>>i;this.setViewport(0,0,u,h)}}else this.current&&(this.current=null,n.bindFramebuffer(n.FRAMEBUFFER,null)),t?this.setViewport(t.x,t.y,t.width,t.height):this.setViewport(0,0,this.renderer.width,this.renderer.height)},r.prototype.setViewport=function(e,t,i,n){var o=this.viewport;e=Math.round(e),t=Math.round(t),i=Math.round(i),n=Math.round(n),(o.width!==i||o.height!==n||o.x!==e||o.y!==t)&&(o.x=e,o.y=t,o.width=i,o.height=n,this.gl.viewport(e,t,i,n))},Object.defineProperty(r.prototype,"size",{get:function(){return this.current?{x:0,y:0,width:this.current.width,height:this.current.height}:{x:0,y:0,width:this.renderer.width,height:this.renderer.height}},enumerable:!1,configurable:!0}),r.prototype.clear=function(e,t,i,n,o){o===void 0&&(o=Ai.COLOR|Ai.DEPTH);var s=this.gl;s.clearColor(e,t,i,n),s.clear(o)},r.prototype.initFramebuffer=function(e){var t=this.gl,i=new Df(t.createFramebuffer());return i.multisample=this.detectSamples(e.multisample),e.glFramebuffers[this.CONTEXT_UID]=i,this.managedFramebuffers.push(e),e.disposeRunner.add(this),i},r.prototype.resizeFramebuffer=function(e){var t=this.gl,i=e.glFramebuffers[this.CONTEXT_UID];i.msaaBuffer&&(t.bindRenderbuffer(t.RENDERBUFFER,i.msaaBuffer),t.renderbufferStorageMultisample(t.RENDERBUFFER,i.multisample,t.RGBA8,e.width,e.height)),i.stencil&&(t.bindRenderbuffer(t.RENDERBUFFER,i.stencil),i.msaaBuffer?t.renderbufferStorageMultisample(t.RENDERBUFFER,i.multisample,t.DEPTH24_STENCIL8,e.width,e.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,e.width,e.height));var n=e.colorTextures,o=n.length;t.drawBuffers||(o=Math.min(o,1));for(var s=0;s<o;s++){var a=n[s],u=a.parentTextureArray||a;this.renderer.texture.bind(u,0)}e.depthTexture&&this.writeDepthTexture&&this.renderer.texture.bind(e.depthTexture,0)},r.prototype.updateFramebuffer=function(e,t){var i=this.gl,n=e.glFramebuffers[this.CONTEXT_UID],o=e.colorTextures,s=o.length;i.drawBuffers||(s=Math.min(s,1)),n.multisample>1&&this.canMultisampleFramebuffer(e)?(n.msaaBuffer=n.msaaBuffer||i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,n.msaaBuffer),i.renderbufferStorageMultisample(i.RENDERBUFFER,n.multisample,i.RGBA8,e.width,e.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,n.msaaBuffer)):n.msaaBuffer&&(i.deleteRenderbuffer(n.msaaBuffer),n.msaaBuffer=null,n.blitFramebuffer&&(n.blitFramebuffer.dispose(),n.blitFramebuffer=null));for(var a=[],u=0;u<s;u++){var h=o[u],l=h.parentTextureArray||h;this.renderer.texture.bind(l,0),!(u===0&&n.msaaBuffer)&&(i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+u,h.target,l._glTextures[this.CONTEXT_UID].texture,t),a.push(i.COLOR_ATTACHMENT0+u))}if(a.length>1&&i.drawBuffers(a),e.depthTexture){var c=this.writeDepthTexture;if(c){var f=e.depthTexture;this.renderer.texture.bind(f,0),i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,f._glTextures[this.CONTEXT_UID].texture,t)}}(e.stencil||e.depth)&&!(e.depthTexture&&this.writeDepthTexture)?(n.stencil=n.stencil||i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,n.stencil),n.msaaBuffer?i.renderbufferStorageMultisample(i.RENDERBUFFER,n.multisample,i.DEPTH24_STENCIL8,e.width,e.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,e.width,e.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,n.stencil)):n.stencil&&(i.deleteRenderbuffer(n.stencil),n.stencil=null)},r.prototype.canMultisampleFramebuffer=function(e){return this.renderer.context.webGLVersion!==1&&e.colorTextures.length<=1&&!e.depthTexture},r.prototype.detectSamples=function(e){var t=this.msaaSamples,i=yt.NONE;if(e<=1||t===null)return i;for(var n=0;n<t.length;n++)if(t[n]<=e){i=t[n];break}return i===1&&(i=yt.NONE),i},r.prototype.blit=function(e,t,i){var n=this,o=n.current,s=n.renderer,a=n.gl,u=n.CONTEXT_UID;if(s.context.webGLVersion===2&&!!o){var h=o.glFramebuffers[u];if(!!h){if(!e){if(!h.msaaBuffer)return;var l=o.colorTextures[0];if(!l)return;h.blitFramebuffer||(h.blitFramebuffer=new Rn(o.width,o.height),h.blitFramebuffer.addColorTexture(0,l)),e=h.blitFramebuffer,e.colorTextures[0]!==l&&(e.colorTextures[0]=l,e.dirtyId++,e.dirtyFormat++),(e.width!==o.width||e.height!==o.height)&&(e.width=o.width,e.height=o.height,e.dirtyId++,e.dirtySize++)}t||(t=fg,t.width=o.width,t.height=o.height),i||(i=t);var c=t.width===i.width&&t.height===i.height;this.bind(e),a.bindFramebuffer(a.READ_FRAMEBUFFER,h.framebuffer),a.blitFramebuffer(t.left,t.top,t.right,t.bottom,i.left,i.top,i.right,i.bottom,a.COLOR_BUFFER_BIT,c?a.NEAREST:a.LINEAR)}}},r.prototype.disposeFramebuffer=function(e,t){var i=e.glFramebuffers[this.CONTEXT_UID],n=this.gl;if(!!i){delete e.glFramebuffers[this.CONTEXT_UID];var o=this.managedFramebuffers.indexOf(e);o>=0&&this.managedFramebuffers.splice(o,1),e.disposeRunner.remove(this),t||(n.deleteFramebuffer(i.framebuffer),i.msaaBuffer&&n.deleteRenderbuffer(i.msaaBuffer),i.stencil&&n.deleteRenderbuffer(i.stencil)),i.blitFramebuffer&&i.blitFramebuffer.dispose()}},r.prototype.disposeAll=function(e){var t=this.managedFramebuffers;this.managedFramebuffers=[];for(var i=0;i<t.length;i++)this.disposeFramebuffer(t[i],e)},r.prototype.forceStencil=function(){var e=this.current;if(!!e){var t=e.glFramebuffers[this.CONTEXT_UID];if(!(!t||t.stencil)){e.stencil=!0;var i=e.width,n=e.height,o=this.gl,s=o.createRenderbuffer();o.bindRenderbuffer(o.RENDERBUFFER,s),t.msaaBuffer?o.renderbufferStorageMultisample(o.RENDERBUFFER,t.multisample,o.DEPTH24_STENCIL8,i,n):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,i,n),t.stencil=s,o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,s)}}},r.prototype.reset=function(){this.current=this.unknownFramebuffer,this.viewport=new K},r.prototype.destroy=function(){this.renderer=null},r}(),co={5126:4,5123:2,5121:1},Za=function(){function r(e){this.renderer=e,this._activeGeometry=null,this._activeVao=null,this.hasVao=!0,this.hasInstance=!0,this.canUseUInt32ElementIndex=!1,this.managedGeometries={}}return r.prototype.contextChange=function(){this.disposeAll(!0);var e=this.gl=this.renderer.gl,t=this.renderer.context;if(this.CONTEXT_UID=this.renderer.CONTEXT_UID,t.webGLVersion!==2){var i=this.renderer.context.extensions.vertexArrayObject;U.PREFER_ENV===be.WEBGL_LEGACY&&(i=null),i?(e.createVertexArray=function(){return i.createVertexArrayOES()},e.bindVertexArray=function(o){return i.bindVertexArrayOES(o)},e.deleteVertexArray=function(o){return i.deleteVertexArrayOES(o)}):(this.hasVao=!1,e.createVertexArray=function(){return null},e.bindVertexArray=function(){return null},e.deleteVertexArray=function(){return null})}if(t.webGLVersion!==2){var n=e.getExtension("ANGLE_instanced_arrays");n?(e.vertexAttribDivisor=function(o,s){return n.vertexAttribDivisorANGLE(o,s)},e.drawElementsInstanced=function(o,s,a,u,h){return n.drawElementsInstancedANGLE(o,s,a,u,h)},e.drawArraysInstanced=function(o,s,a,u){return n.drawArraysInstancedANGLE(o,s,a,u)}):this.hasInstance=!1}this.canUseUInt32ElementIndex=t.webGLVersion===2||!!t.extensions.uint32ElementIndex},r.prototype.bind=function(e,t){t=t||this.renderer.shader.shader;var i=this.gl,n=e.glVertexArrayObjects[this.CONTEXT_UID],o=!1;n||(this.managedGeometries[e.id]=e,e.disposeRunner.add(this),e.glVertexArrayObjects[this.CONTEXT_UID]=n={},o=!0);var s=n[t.program.id]||this.initGeometryVao(e,t,o);this._activeGeometry=e,this._activeVao!==s&&(this._activeVao=s,this.hasVao?i.bindVertexArray(s):this.activateVao(e,t.program)),this.updateBuffers()},r.prototype.reset=function(){this.unbind()},r.prototype.updateBuffers=function(){for(var e=this._activeGeometry,t=this.renderer.buffer,i=0;i<e.buffers.length;i++){var n=e.buffers[i];t.update(n)}},r.prototype.checkCompatibility=function(e,t){var i=e.attributes,n=t.attributeData;for(var o in n)if(!i[o])throw new Error('shader and geometry incompatible, geometry missing the "'+o+'" attribute')},r.prototype.getSignature=function(e,t){var i=e.attributes,n=t.attributeData,o=["g",e.id];for(var s in i)n[s]&&o.push(s,n[s].location);return o.join("-")},r.prototype.initGeometryVao=function(e,t,i){i===void 0&&(i=!0);var n=this.gl,o=this.CONTEXT_UID,s=this.renderer.buffer,a=t.program;a.glPrograms[o]||this.renderer.shader.generateProgram(t),this.checkCompatibility(e,a);var u=this.getSignature(e,a),h=e.glVertexArrayObjects[this.CONTEXT_UID],l=h[u];if(l)return h[a.id]=l,l;var c=e.buffers,f=e.attributes,d={},v={};for(var p in c)d[p]=0,v[p]=0;for(var p in f)!f[p].size&&a.attributeData[p]?f[p].size=a.attributeData[p].size:f[p].size||console.warn("PIXI Geometry attribute '"+p+"' size cannot be determined (likely the bound shader does not have the attribute)"),d[f[p].buffer]+=f[p].size*co[f[p].type];for(var p in f){var _=f[p],m=_.size;_.stride===void 0&&(d[_.buffer]===m*co[_.type]?_.stride=0:_.stride=d[_.buffer]),_.start===void 0&&(_.start=v[_.buffer],v[_.buffer]+=m*co[_.type])}l=n.createVertexArray(),n.bindVertexArray(l);for(var y=0;y<c.length;y++){var b=c[y];s.bind(b),i&&b._glBuffers[o].refCount++}return this.activateVao(e,a),this._activeVao=l,h[a.id]=l,h[u]=l,l},r.prototype.disposeGeometry=function(e,t){var i;if(!!this.managedGeometries[e.id]){delete this.managedGeometries[e.id];var n=e.glVertexArrayObjects[this.CONTEXT_UID],o=this.gl,s=e.buffers,a=(i=this.renderer)===null||i===void 0?void 0:i.buffer;if(e.disposeRunner.remove(this),!!n){if(a)for(var u=0;u<s.length;u++){var h=s[u]._glBuffers[this.CONTEXT_UID];h&&(h.refCount--,h.refCount===0&&!t&&a.dispose(s[u],t))}if(!t){for(var l in n)if(l[0]==="g"){var c=n[l];this._activeVao===c&&this.unbind(),o.deleteVertexArray(c)}}delete e.glVertexArrayObjects[this.CONTEXT_UID]}}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedGeometries),i=0;i<t.length;i++)this.disposeGeometry(this.managedGeometries[t[i]],e)},r.prototype.activateVao=function(e,t){var i=this.gl,n=this.CONTEXT_UID,o=this.renderer.buffer,s=e.buffers,a=e.attributes;e.indexBuffer&&o.bind(e.indexBuffer);var u=null;for(var h in a){var l=a[h],c=s[l.buffer],f=c._glBuffers[n];if(t.attributeData[h]){u!==f&&(o.bind(c),u=f);var d=t.attributeData[h].location;if(i.enableVertexAttribArray(d),i.vertexAttribPointer(d,l.size,l.type||i.FLOAT,l.normalized,l.stride,l.start),l.instance)if(this.hasInstance)i.vertexAttribDivisor(d,1);else throw new Error("geometry error, GPU Instancing is not supported on this device")}}},r.prototype.draw=function(e,t,i,n){var o=this.gl,s=this._activeGeometry;if(s.indexBuffer){var a=s.indexBuffer.data.BYTES_PER_ELEMENT,u=a===2?o.UNSIGNED_SHORT:o.UNSIGNED_INT;a===2||a===4&&this.canUseUInt32ElementIndex?s.instanced?o.drawElementsInstanced(e,t||s.indexBuffer.data.length,u,(i||0)*a,n||1):o.drawElements(e,t||s.indexBuffer.data.length,u,(i||0)*a):console.warn("unsupported index buffer type: uint32")}else s.instanced?o.drawArraysInstanced(e,i,t||s.getSize(),n||1):o.drawArrays(e,i,t||s.getSize());return this},r.prototype.unbind=function(){this.gl.bindVertexArray(null),this._activeVao=null,this._activeGeometry=null},r.prototype.destroy=function(){this.renderer=null},r}(),kf=function(){function r(e){e===void 0&&(e=null),this.type=Ot.NONE,this.autoDetect=!0,this.maskObject=e||null,this.pooled=!1,this.isMaskData=!0,this.resolution=null,this.multisample=U.FILTER_MULTISAMPLE,this.enabled=!0,this._filters=null,this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null,this._scissorRectLocal=null,this._target=null}return Object.defineProperty(r.prototype,"filter",{get:function(){return this._filters?this._filters[0]:null},set:function(e){e?this._filters?this._filters[0]=e:this._filters=[e]:this._filters=null},enumerable:!1,configurable:!0}),r.prototype.reset=function(){this.pooled&&(this.maskObject=null,this.type=Ot.NONE,this.autoDetect=!0),this._target=null,this._scissorRectLocal=null},r.prototype.copyCountersOrReset=function(e){e?(this._stencilCounter=e._stencilCounter,this._scissorCounter=e._scissorCounter,this._scissorRect=e._scissorRect):(this._stencilCounter=0,this._scissorCounter=0,this._scissorRect=null)},r}();function Lh(r,e,t){var i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}function Mh(r,e){var t=r.getShaderSource(e).split(`
`).map(function(h,l){return l+": "+h}),i=r.getShaderInfoLog(e),n=i.split(`
`),o={},s=n.map(function(h){return parseFloat(h.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))}).filter(function(h){return h&&!o[h]?(o[h]=!0,!0):!1}),a=[""];s.forEach(function(h){t[h-1]="%c"+t[h-1]+"%c",a.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});var u=t.join(`
`);a[0]=u,console.error(i),console.groupCollapsed("click to view full shader code"),console.warn.apply(console,a),console.groupEnd()}function cg(r,e,t,i){r.getProgramParameter(e,r.LINK_STATUS)||(r.getShaderParameter(t,r.COMPILE_STATUS)||Mh(r,t),r.getShaderParameter(i,r.COMPILE_STATUS)||Mh(r,i),console.error("PixiJS Error: Could not initialize shader."),r.getProgramInfoLog(e)!==""&&console.warn("PixiJS Warning: gl.getProgramInfoLog()",r.getProgramInfoLog(e)))}function po(r){for(var e=new Array(r),t=0;t<e.length;t++)e[t]=!1;return e}function zf(r,e){switch(r){case"float":return 0;case"vec2":return new Float32Array(2*e);case"vec3":return new Float32Array(3*e);case"vec4":return new Float32Array(4*e);case"int":case"uint":case"sampler2D":case"sampler2DArray":return 0;case"ivec2":return new Int32Array(2*e);case"ivec3":return new Int32Array(3*e);case"ivec4":return new Int32Array(4*e);case"uvec2":return new Uint32Array(2*e);case"uvec3":return new Uint32Array(3*e);case"uvec4":return new Uint32Array(4*e);case"bool":return!1;case"bvec2":return po(2*e);case"bvec3":return po(3*e);case"bvec4":return po(4*e);case"mat2":return new Float32Array([1,0,0,1]);case"mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case"mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}return null}var Xf={},oi=Xf;function jf(){if(oi===Xf||oi&&oi.isContextLost()){var r=document.createElement("canvas"),e=void 0;U.PREFER_ENV>=be.WEBGL2&&(e=r.getContext("webgl2",{})),e||(e=r.getContext("webgl",{})||r.getContext("experimental-webgl",{}),e?e.getExtension("WEBGL_draw_buffers"):e=null),oi=e}return oi}var ln;function dg(){if(!ln){ln=le.MEDIUM;var r=jf();if(r&&r.getShaderPrecisionFormat){var e=r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT);ln=e.precision?le.HIGH:le.MEDIUM}}return ln}function Bh(r,e,t){if(r.substring(0,9)!=="precision"){var i=e;return e===le.HIGH&&t!==le.HIGH&&(i=le.MEDIUM),"precision "+i+` float;
`+r}else if(t!==le.HIGH&&r.substring(0,15)==="precision highp")return r.replace("precision highp","precision mediump");return r}var pg={float:1,vec2:2,vec3:3,vec4:4,int:1,ivec2:2,ivec3:3,ivec4:4,uint:1,uvec2:2,uvec3:3,uvec4:4,bool:1,bvec2:2,bvec3:3,bvec4:4,mat2:4,mat3:9,mat4:16,sampler2D:1};function Hf(r){return pg[r]}var fn=null,Gh={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};function Vf(r,e){if(!fn){var t=Object.keys(Gh);fn={};for(var i=0;i<t.length;++i){var n=t[i];fn[r[n]]=Gh[n]}}return fn[e]}var br=[{test:function(r){return r.type==="float"&&r.size===1},code:function(r){return`
            if(uv["`+r+'"] !== ud["'+r+`"].value)
            {
                ud["`+r+'"].value = uv["'+r+`"]
                gl.uniform1f(ud["`+r+'"].location, uv["'+r+`"])
            }
            `}},{test:function(r){return(r.type==="sampler2D"||r.type==="samplerCube"||r.type==="sampler2DArray")&&r.size===1&&!r.isArray},code:function(r){return`t = syncData.textureCount++;

            renderer.texture.bind(uv["`+r+`"], t);

            if(ud["`+r+`"].value !== t)
            {
                ud["`+r+`"].value = t;
                gl.uniform1i(ud["`+r+`"].location, t);
; // eslint-disable-line max-len
            }`}},{test:function(r,e){return r.type==="mat3"&&r.size===1&&e.a!==void 0},code:function(r){return`
            gl.uniformMatrix3fv(ud["`+r+'"].location, false, uv["'+r+`"].toArray(true));
            `},codeUbo:function(r){return`
                var `+r+"_matrix = uv."+r+`.toArray(true);

                data[offset] = `+r+`_matrix[0];
                data[offset+1] = `+r+`_matrix[1];
                data[offset+2] = `+r+`_matrix[2];
        
                data[offset + 4] = `+r+`_matrix[3];
                data[offset + 5] = `+r+`_matrix[4];
                data[offset + 6] = `+r+`_matrix[5];
        
                data[offset + 8] = `+r+`_matrix[6];
                data[offset + 9] = `+r+`_matrix[7];
                data[offset + 10] = `+r+`_matrix[8];
            `}},{test:function(r,e){return r.type==="vec2"&&r.size===1&&e.x!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    gl.uniform2f(ud["`+r+`"].location, v.x, v.y);
                }`},codeUbo:function(r){return`
                v = uv.`+r+`;

                data[offset] = v.x;
                data[offset+1] = v.y;
            `}},{test:function(r){return r.type==="vec2"&&r.size===1},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    gl.uniform2f(ud["`+r+`"].location, v[0], v[1]);
                }
            `}},{test:function(r,e){return r.type==="vec4"&&r.size===1&&e.width!==void 0},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                {
                    cv[0] = v.x;
                    cv[1] = v.y;
                    cv[2] = v.width;
                    cv[3] = v.height;
                    gl.uniform4f(ud["`+r+`"].location, v.x, v.y, v.width, v.height)
                }`},codeUbo:function(r){return`
                    v = uv.`+r+`;

                    data[offset] = v.x;
                    data[offset+1] = v.y;
                    data[offset+2] = v.width;
                    data[offset+3] = v.height;
                `}},{test:function(r){return r.type==="vec4"&&r.size===1},code:function(r){return`
                cv = ud["`+r+`"].value;
                v = uv["`+r+`"];

                if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                {
                    cv[0] = v[0];
                    cv[1] = v[1];
                    cv[2] = v[2];
                    cv[3] = v[3];

                    gl.uniform4f(ud["`+r+`"].location, v[0], v[1], v[2], v[3])
                }`}}],vg={float:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1f(location, v);
    }`,vec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2f(location, v[0], v[1])
    }`,vec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3f(location, v[0], v[1], v[2])
    }`,vec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4f(location, v[0], v[1], v[2], v[3]);
    }`,int:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1i(location, v);
    }`,ivec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,ivec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,ivec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,uint:`
    if (cv !== v)
    {
        cu.value = v;

        gl.uniform1ui(location, v);
    }`,uvec2:`
    if (cv[0] !== v[0] || cv[1] !== v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2ui(location, v[0], v[1]);
    }`,uvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3ui(location, v[0], v[1], v[2]);
    }`,uvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
    }`,bool:`
    if (cv !== v)
    {
        cu.value = v;
        gl.uniform1i(location, v);
    }`,bvec2:`
    if (cv[0] != v[0] || cv[1] != v[1])
    {
        cv[0] = v[0];
        cv[1] = v[1];

        gl.uniform2i(location, v[0], v[1]);
    }`,bvec3:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];

        gl.uniform3i(location, v[0], v[1], v[2]);
    }`,bvec4:`
    if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
    {
        cv[0] = v[0];
        cv[1] = v[1];
        cv[2] = v[2];
        cv[3] = v[3];

        gl.uniform4i(location, v[0], v[1], v[2], v[3]);
    }`,mat2:"gl.uniformMatrix2fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",sampler2D:"gl.uniform1i(location, v)",samplerCube:"gl.uniform1i(location, v)",sampler2DArray:"gl.uniform1i(location, v)"},_g={float:"gl.uniform1fv(location, v)",vec2:"gl.uniform2fv(location, v)",vec3:"gl.uniform3fv(location, v)",vec4:"gl.uniform4fv(location, v)",mat4:"gl.uniformMatrix4fv(location, false, v)",mat3:"gl.uniformMatrix3fv(location, false, v)",mat2:"gl.uniformMatrix2fv(location, false, v)",int:"gl.uniform1iv(location, v)",ivec2:"gl.uniform2iv(location, v)",ivec3:"gl.uniform3iv(location, v)",ivec4:"gl.uniform4iv(location, v)",uint:"gl.uniform1uiv(location, v)",uvec2:"gl.uniform2uiv(location, v)",uvec3:"gl.uniform3uiv(location, v)",uvec4:"gl.uniform4uiv(location, v)",bool:"gl.uniform1iv(location, v)",bvec2:"gl.uniform2iv(location, v)",bvec3:"gl.uniform3iv(location, v)",bvec4:"gl.uniform4iv(location, v)",sampler2D:"gl.uniform1iv(location, v)",samplerCube:"gl.uniform1iv(location, v)",sampler2DArray:"gl.uniform1iv(location, v)"};function mg(r,e){var t,i=[`
        var v = null;
        var cv = null;
        var cu = null;
        var t = 0;
        var gl = renderer.gl;
    `];for(var n in r.uniforms){var o=e[n];if(!o){!((t=r.uniforms[n])===null||t===void 0)&&t.group&&(r.uniforms[n].ubo?i.push(`
                        renderer.shader.syncUniformBufferGroup(uv.`+n+", '"+n+`');
                    `):i.push(`
                        renderer.shader.syncUniformGroup(uv.`+n+`, syncData);
                    `));continue}for(var s=r.uniforms[n],a=!1,u=0;u<br.length;u++)if(br[u].test(o,s)){i.push(br[u].code(n,s)),a=!0;break}if(!a){var h=o.size===1?vg:_g,l=h[o.type].replace("location",'ud["'+n+'"].location');i.push(`
            cu = ud["`+n+`"];
            cv = cu.value;
            v = uv["`+n+`"];
            `+l+";")}}return new Function("ud","uv","renderer","syncData",i.join(`
`))}var gg=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function yg(r){for(var e="",t=0;t<r;++t)t>0&&(e+=`
else `),t<r-1&&(e+="if(test == "+t+".0){}");return e}function Wf(r,e){if(r===0)throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");for(var t=e.createShader(e.FRAGMENT_SHADER);;){var i=gg.replace(/%forloop%/gi,yg(r));if(e.shaderSource(t,i),e.compileShader(t),!e.getShaderParameter(t,e.COMPILE_STATUS))r=r/2|0;else break}return r}var si;function xg(){if(typeof si=="boolean")return si;try{var r=new Function("param1","param2","param3","return param1[param2] === param3;");si=r({a:"b"},"a","b")===!0}catch{si=!1}return si}var bg=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor *= texture2D(uSampler, vTextureCoord);
}`,Tg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void){
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vTextureCoord = aTextureCoord;
}
`,Cg=0,cn={},ri=function(){function r(e,t,i){i===void 0&&(i="pixi-shader"),this.id=Cg++,this.vertexSrc=e||r.defaultVertexSrc,this.fragmentSrc=t||r.defaultFragmentSrc,this.vertexSrc=this.vertexSrc.trim(),this.fragmentSrc=this.fragmentSrc.trim(),this.vertexSrc.substring(0,8)!=="#version"&&(i=i.replace(/\s+/g,"-"),cn[i]?(cn[i]++,i+="-"+cn[i]):cn[i]=1,this.vertexSrc="#define SHADER_NAME "+i+`
`+this.vertexSrc,this.fragmentSrc="#define SHADER_NAME "+i+`
`+this.fragmentSrc,this.vertexSrc=Bh(this.vertexSrc,U.PRECISION_VERTEX,le.HIGH),this.fragmentSrc=Bh(this.fragmentSrc,U.PRECISION_FRAGMENT,dg())),this.glPrograms={},this.syncUniforms=null}return Object.defineProperty(r,"defaultVertexSrc",{get:function(){return Tg},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentSrc",{get:function(){return bg},enumerable:!1,configurable:!0}),r.from=function(e,t,i){var n=e+t,o=ns[n];return o||(ns[n]=o=new r(e,t,i)),o},r}(),Oe=function(){function r(e,t){this.uniformBindCount=0,this.program=e,t?t instanceof Ye?this.uniformGroup=t:this.uniformGroup=new Ye(t):this.uniformGroup=new Ye({})}return r.prototype.checkUniformExists=function(e,t){if(t.uniforms[e])return!0;for(var i in t.uniforms){var n=t.uniforms[i];if(n.group&&this.checkUniformExists(e,n))return!0}return!1},r.prototype.destroy=function(){this.uniformGroup=null},Object.defineProperty(r.prototype,"uniforms",{get:function(){return this.uniformGroup.uniforms},enumerable:!1,configurable:!0}),r.from=function(e,t,i){var n=ri.from(e,t);return new r(n,i)},r}(),vo=0,_o=1,mo=2,go=3,yo=4,xo=5,rr=function(){function r(){this.data=0,this.blendMode=B.NORMAL,this.polygonOffset=0,this.blend=!0,this.depthMask=!0}return Object.defineProperty(r.prototype,"blend",{get:function(){return!!(this.data&1<<vo)},set:function(e){!!(this.data&1<<vo)!==e&&(this.data^=1<<vo)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"offsets",{get:function(){return!!(this.data&1<<_o)},set:function(e){!!(this.data&1<<_o)!==e&&(this.data^=1<<_o)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"culling",{get:function(){return!!(this.data&1<<mo)},set:function(e){!!(this.data&1<<mo)!==e&&(this.data^=1<<mo)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthTest",{get:function(){return!!(this.data&1<<go)},set:function(e){!!(this.data&1<<go)!==e&&(this.data^=1<<go)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"depthMask",{get:function(){return!!(this.data&1<<xo)},set:function(e){!!(this.data&1<<xo)!==e&&(this.data^=1<<xo)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"clockwiseFrontFace",{get:function(){return!!(this.data&1<<yo)},set:function(e){!!(this.data&1<<yo)!==e&&(this.data^=1<<yo)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"blendMode",{get:function(){return this._blendMode},set:function(e){this.blend=e!==B.NONE,this._blendMode=e},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"polygonOffset",{get:function(){return this._polygonOffset},set:function(e){this.offsets=!!e,this._polygonOffset=e},enumerable:!1,configurable:!0}),r.prototype.toString=function(){return"[@pixi/core:State "+("blendMode="+this.blendMode+" ")+("clockwiseFrontFace="+this.clockwiseFrontFace+" ")+("culling="+this.culling+" ")+("depthMask="+this.depthMask+" ")+("polygonOffset="+this.polygonOffset)+"]"},r.for2d=function(){var e=new r;return e.depthTest=!1,e.blend=!0,e},r}(),Eg=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,wg=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void){
   gl_FragColor = texture2D(uSampler, vTextureCoord);
}
`,z=function(r){ot(e,r);function e(t,i,n){var o=this,s=ri.from(t||e.defaultVertexSrc,i||e.defaultFragmentSrc);return o=r.call(this,s,n)||this,o.padding=0,o.resolution=U.FILTER_RESOLUTION,o.multisample=U.FILTER_MULTISAMPLE,o.enabled=!0,o.autoFit=!0,o.state=new rr,o}return e.prototype.apply=function(t,i,n,o,s){t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultVertexSrc",{get:function(){return Eg},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultFragmentSrc",{get:function(){return wg},enumerable:!1,configurable:!0}),e}(Oe),Ag=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`,Pg=`varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform float npmAlpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);
    float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

    original *= (alphaMul * masky.r * alpha * clip);

    gl_FragColor = original;
}
`,Dh=new _t,Qn=function(){function r(e,t){this._texture=e,this.mapCoord=new _t,this.uClampFrame=new Float32Array(4),this.uClampOffset=new Float32Array(2),this._textureID=-1,this._updateID=0,this.clampOffset=0,this.clampMargin=typeof t=="undefined"?.5:t,this.isSimple=!1}return Object.defineProperty(r.prototype,"texture",{get:function(){return this._texture},set:function(e){this._texture=e,this._textureID=-1},enumerable:!1,configurable:!0}),r.prototype.multiplyUvs=function(e,t){t===void 0&&(t=e);for(var i=this.mapCoord,n=0;n<e.length;n+=2){var o=e[n],s=e[n+1];t[n]=o*i.a+s*i.c+i.tx,t[n+1]=o*i.b+s*i.d+i.ty}return t},r.prototype.update=function(e){var t=this._texture;if(!t||!t.valid||!e&&this._textureID===t._updateID)return!1;this._textureID=t._updateID,this._updateID++;var i=t._uvs;this.mapCoord.set(i.x1-i.x0,i.y1-i.y0,i.x3-i.x0,i.y3-i.y0,i.x0,i.y0);var n=t.orig,o=t.trim;o&&(Dh.set(n.width/o.width,0,0,n.height/o.height,-o.x/o.width,-o.y/o.height),this.mapCoord.append(Dh));var s=t.baseTexture,a=this.uClampFrame,u=this.clampMargin/s.resolution,h=this.clampOffset;return a[0]=(t._frame.x+u+h)/s.width,a[1]=(t._frame.y+u+h)/s.height,a[2]=(t._frame.x+t._frame.width-u+h)/s.width,a[3]=(t._frame.y+t._frame.height-u+h)/s.height,this.uClampOffset[0]=h/s.realWidth,this.uClampOffset[1]=h/s.realHeight,this.isSimple=t._frame.width===s.width&&t._frame.height===s.height&&t.rotate===0,!0},r}(),Yf=function(r){ot(e,r);function e(t,i,n){var o=this,s=null;return typeof t!="string"&&i===void 0&&n===void 0&&(s=t,t=void 0,i=void 0,n=void 0),o=r.call(this,t||Ag,i||Pg,n)||this,o.maskSprite=s,o.maskMatrix=new _t,o}return Object.defineProperty(e.prototype,"maskSprite",{get:function(){return this._maskSprite},set:function(t){this._maskSprite=t,this._maskSprite&&(this._maskSprite.renderable=!1)},enumerable:!1,configurable:!0}),e.prototype.apply=function(t,i,n,o){var s=this._maskSprite,a=s._texture;!a.valid||(a.uvMatrix||(a.uvMatrix=new Qn(a,0)),a.uvMatrix.update(),this.uniforms.npmAlpha=a.baseTexture.alphaMode?0:1,this.uniforms.mask=a,this.uniforms.otherMatrix=t.calculateSpriteMatrix(this.maskMatrix,s).prepend(a.uvMatrix.mapCoord),this.uniforms.alpha=s.worldAlpha,this.uniforms.maskClamp=a.uvMatrix.uClampFrame,t.applyFilter(this,i,n,o))},e}(z),Ja=function(){function r(e){this.renderer=e,this.enableScissor=!0,this.alphaMaskPool=[],this.maskDataPool=[],this.maskStack=[],this.alphaMaskIndex=0}return r.prototype.setMaskStack=function(e){this.maskStack=e,this.renderer.scissor.setMaskStack(e),this.renderer.stencil.setMaskStack(e)},r.prototype.push=function(e,t){var i=t;if(!i.isMaskData){var n=this.maskDataPool.pop()||new kf;n.pooled=!0,n.maskObject=t,i=n}var o=this.maskStack.length!==0?this.maskStack[this.maskStack.length-1]:null;if(i.copyCountersOrReset(o),i.autoDetect&&this.detect(i),i._target=e,i.type!==Ot.SPRITE&&this.maskStack.push(i),i.enabled)switch(i.type){case Ot.SCISSOR:this.renderer.scissor.push(i);break;case Ot.STENCIL:this.renderer.stencil.push(i);break;case Ot.SPRITE:i.copyCountersOrReset(null),this.pushSpriteMask(i);break}i.type===Ot.SPRITE&&this.maskStack.push(i)},r.prototype.pop=function(e){var t=this.maskStack.pop();if(!(!t||t._target!==e)){if(t.enabled)switch(t.type){case Ot.SCISSOR:this.renderer.scissor.pop();break;case Ot.STENCIL:this.renderer.stencil.pop(t.maskObject);break;case Ot.SPRITE:this.popSpriteMask(t);break}if(t.reset(),t.pooled&&this.maskDataPool.push(t),this.maskStack.length!==0){var i=this.maskStack[this.maskStack.length-1];i.type===Ot.SPRITE&&i._filters&&(i._filters[0].maskSprite=i.maskObject)}}},r.prototype.detect=function(e){var t=e.maskObject;t.isSprite?e.type=Ot.SPRITE:this.enableScissor&&this.renderer.scissor.testScissor(e)?e.type=Ot.SCISSOR:e.type=Ot.STENCIL},r.prototype.pushSpriteMask=function(e){var t,i,n=e.maskObject,o=e._target,s=e._filters;s||(s=this.alphaMaskPool[this.alphaMaskIndex],s||(s=this.alphaMaskPool[this.alphaMaskIndex]=[new Yf]));var a=this.renderer,u=a.renderTexture,h,l;if(u.current){var c=u.current;h=e.resolution||c.resolution,l=(t=e.multisample)!==null&&t!==void 0?t:c.multisample}else h=e.resolution||a.resolution,l=(i=e.multisample)!==null&&i!==void 0?i:a.multisample;s[0].resolution=h,s[0].multisample=l,s[0].maskSprite=n;var f=o.filterArea;o.filterArea=n.getBounds(!0),a.filter.push(o,s),o.filterArea=f,e._filters||this.alphaMaskIndex++},r.prototype.popSpriteMask=function(e){this.renderer.filter.pop(),e._filters?e._filters[0].maskSprite=null:(this.alphaMaskIndex--,this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite=null)},r.prototype.destroy=function(){this.renderer=null},r}(),$f=function(){function r(e){this.renderer=e,this.maskStack=[],this.glConst=0}return r.prototype.getStackLength=function(){return this.maskStack.length},r.prototype.setMaskStack=function(e){var t=this.renderer.gl,i=this.getStackLength();this.maskStack=e;var n=this.getStackLength();n!==i&&(n===0?t.disable(this.glConst):(t.enable(this.glConst),this._useCurrent()))},r.prototype._useCurrent=function(){},r.prototype.destroy=function(){this.renderer=null,this.maskStack=null},r}(),kh=new _t,Qa=function(r){ot(e,r);function e(t){var i=r.call(this,t)||this;return i.glConst=WebGLRenderingContext.SCISSOR_TEST,i}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._scissorCounter:0},e.prototype.calcScissorRect=function(t){if(!t._scissorRectLocal){var i=t._scissorRect,n=t.maskObject,o=this.renderer,s=o.renderTexture;n.renderable=!0;var a=n.getBounds();this.roundFrameToPixels(a,s.current?s.current.resolution:o.resolution,s.sourceFrame,s.destinationFrame,o.projection.transform),n.renderable=!1,i&&a.fit(i),t._scissorRectLocal=a}},e.isMatrixRotated=function(t){if(!t)return!1;var i=t.a,n=t.b,o=t.c,s=t.d;return(Math.abs(n)>1e-4||Math.abs(o)>1e-4)&&(Math.abs(i)>1e-4||Math.abs(s)>1e-4)},e.prototype.testScissor=function(t){var i=t.maskObject;if(!i.isFastRect||!i.isFastRect()||e.isMatrixRotated(i.worldTransform)||e.isMatrixRotated(this.renderer.projection.transform))return!1;this.calcScissorRect(t);var n=t._scissorRectLocal;return n.width>0&&n.height>0},e.prototype.roundFrameToPixels=function(t,i,n,o,s){e.isMatrixRotated(s)||(s=s?kh.copyFrom(s):kh.identity(),s.translate(-n.x,-n.y).scale(o.width/n.width,o.height/n.height).translate(o.x,o.y),this.renderer.filter.transformAABB(s,t),t.fit(o),t.x=Math.round(t.x*i),t.y=Math.round(t.y*i),t.width=Math.round(t.width*i),t.height=Math.round(t.height*i))},e.prototype.push=function(t){t._scissorRectLocal||this.calcScissorRect(t);var i=this.renderer.gl;t._scissorRect||i.enable(i.SCISSOR_TEST),t._scissorCounter++,t._scissorRect=t._scissorRectLocal,this._useCurrent()},e.prototype.pop=function(){var t=this.renderer.gl;this.getStackLength()>0?this._useCurrent():t.disable(t.SCISSOR_TEST)},e.prototype._useCurrent=function(){var t=this.maskStack[this.maskStack.length-1]._scissorRect,i;this.renderer.renderTexture.current?i=t.y:i=this.renderer.height-t.height-t.y,this.renderer.gl.scissor(t.x,i,t.width,t.height)},e}($f),tu=function(r){ot(e,r);function e(t){var i=r.call(this,t)||this;return i.glConst=WebGLRenderingContext.STENCIL_TEST,i}return e.prototype.getStackLength=function(){var t=this.maskStack[this.maskStack.length-1];return t?t._stencilCounter:0},e.prototype.push=function(t){var i=t.maskObject,n=this.renderer.gl,o=t._stencilCounter;o===0&&(this.renderer.framebuffer.forceStencil(),n.clearStencil(0),n.clear(n.STENCIL_BUFFER_BIT),n.enable(n.STENCIL_TEST)),t._stencilCounter++,n.colorMask(!1,!1,!1,!1),n.stencilFunc(n.EQUAL,o,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.INCR),i.renderable=!0,i.render(this.renderer),this.renderer.batch.flush(),i.renderable=!1,this._useCurrent()},e.prototype.pop=function(t){var i=this.renderer.gl;this.getStackLength()===0?i.disable(i.STENCIL_TEST):(i.colorMask(!1,!1,!1,!1),i.stencilOp(i.KEEP,i.KEEP,i.DECR),t.renderable=!0,t.render(this.renderer),this.renderer.batch.flush(),t.renderable=!1,this._useCurrent())},e.prototype._useCurrent=function(){var t=this.renderer.gl;t.colorMask(!0,!0,!0,!0),t.stencilFunc(t.EQUAL,this.getStackLength(),4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP)},e}($f),eu=function(){function r(e){this.renderer=e,this.destinationFrame=null,this.sourceFrame=null,this.defaultFrame=null,this.projectionMatrix=new _t,this.transform=null}return r.prototype.update=function(e,t,i,n){this.destinationFrame=e||this.destinationFrame||this.defaultFrame,this.sourceFrame=t||this.sourceFrame||e,this.calculateProjection(this.destinationFrame,this.sourceFrame,i,n),this.transform&&this.projectionMatrix.append(this.transform);var o=this.renderer;o.globalUniforms.uniforms.projectionMatrix=this.projectionMatrix,o.globalUniforms.update(),o.shader.shader&&o.shader.syncUniformGroup(o.shader.shader.uniforms.globals)},r.prototype.calculateProjection=function(e,t,i,n){var o=this.projectionMatrix,s=n?-1:1;o.identity(),o.a=1/t.width*2,o.d=s*(1/t.height*2),o.tx=-1-t.x*o.a,o.ty=-s-t.y*o.d},r.prototype.setTransform=function(e){},r.prototype.destroy=function(){this.renderer=null},r}(),nr=new K,ai=new K,ru=function(){function r(e){this.renderer=e,this.clearColor=e._backgroundColorRgba,this.defaultMaskStack=[],this.current=null,this.sourceFrame=new K,this.destinationFrame=new K,this.viewportFrame=new K}return r.prototype.bind=function(e,t,i){e===void 0&&(e=null);var n=this.renderer;this.current=e;var o,s,a;e?(o=e.baseTexture,a=o.resolution,t||(nr.width=e.frame.width,nr.height=e.frame.height,t=nr),i||(ai.x=e.frame.x,ai.y=e.frame.y,ai.width=t.width,ai.height=t.height,i=ai),s=o.framebuffer):(a=n.resolution,t||(nr.width=n.screen.width,nr.height=n.screen.height,t=nr),i||(i=nr,i.width=t.width,i.height=t.height));var u=this.viewportFrame;u.x=i.x*a,u.y=i.y*a,u.width=i.width*a,u.height=i.height*a,e||(u.y=n.view.height-(u.y+u.height)),u.ceil(),this.renderer.framebuffer.bind(s,u),this.renderer.projection.update(i,t,a,!s),e?this.renderer.mask.setMaskStack(o.maskStack):this.renderer.mask.setMaskStack(this.defaultMaskStack),this.sourceFrame.copyFrom(t),this.destinationFrame.copyFrom(i)},r.prototype.clear=function(e,t){this.current?e=e||this.current.baseTexture.clearColor:e=e||this.clearColor;var i=this.destinationFrame,n=this.current?this.current.baseTexture:this.renderer.screen,o=i.width!==n.width||i.height!==n.height;if(o){var s=this.viewportFrame,a=s.x,u=s.y,h=s.width,l=s.height;a=Math.round(a),u=Math.round(u),h=Math.round(h),l=Math.round(l),this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST),this.renderer.gl.scissor(a,u,h,l)}this.renderer.framebuffer.clear(e[0],e[1],e[2],e[3],t),o&&this.renderer.scissor.pop()},r.prototype.resize=function(){this.bind(null)},r.prototype.reset=function(){this.bind(null)},r.prototype.destroy=function(){this.renderer=null},r}();function Ig(r,e,t,i,n){t.buffer.update(n)}var Rg={float:`
        data[offset] = v;
    `,vec2:`
        data[offset] = v[0];
        data[offset+1] = v[1];
    `,vec3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

    `,vec4:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];
        data[offset+3] = v[3];
    `,mat2:`
        data[offset] = v[0];
        data[offset+1] = v[1];

        data[offset+4] = v[2];
        data[offset+5] = v[3];
    `,mat3:`
        data[offset] = v[0];
        data[offset+1] = v[1];
        data[offset+2] = v[2];

        data[offset + 4] = v[3];
        data[offset + 5] = v[4];
        data[offset + 6] = v[5];

        data[offset + 8] = v[6];
        data[offset + 9] = v[7];
        data[offset + 10] = v[8];
    `,mat4:`
        for(var i = 0; i < 16; i++)
        {
            data[offset + i] = v[i];
        }
    `},qf={float:4,vec2:8,vec3:12,vec4:16,int:4,ivec2:8,ivec3:12,ivec4:16,uint:4,uvec2:8,uvec3:12,uvec4:16,bool:4,bvec2:8,bvec3:12,bvec4:16,mat2:16*2,mat3:16*3,mat4:16*4};function Kf(r){for(var e=r.map(function(u){return{data:u,offset:0,dataLen:0,dirty:0}}),t=0,i=0,n=0,o=0;o<e.length;o++){var s=e[o];if(t=qf[s.data.type],s.data.size>1&&(t=Math.max(t,16)*s.data.size),s.dataLen=t,i%t!==0&&i<16){var a=i%t%16;i+=a,n+=a}i+t>16?(n=Math.ceil(n/16)*16,s.offset=n,n+=t,i=t):(s.offset=n,i+=t,n+=t)}return n=Math.ceil(n/16)*16,{uboElements:e,size:n}}function Zf(r,e){var t=[];for(var i in r)e[i]&&t.push(e[i]);return t.sort(function(n,o){return n.index-o.index}),t}function Jf(r,e){if(!r.autoManage)return{size:0,syncFunc:Ig};for(var t=Zf(r.uniforms,e),i=Kf(t),n=i.uboElements,o=i.size,s=[`
    var v = null;
    var v2 = null;
    var cv = null;
    var t = 0;
    var gl = renderer.gl
    var index = 0;
    var data = buffer.data;
    `],a=0;a<n.length;a++){for(var u=n[a],h=r.uniforms[u.data.name],l=u.data.name,c=!1,f=0;f<br.length;f++){var d=br[f];if(d.codeUbo&&d.test(u.data,h)){s.push("offset = "+u.offset/4+";",br[f].codeUbo(u.data.name,h)),c=!0;break}}if(!c)if(u.data.size>1){var v=Hf(u.data.type),p=Math.max(qf[u.data.type]/16,1),_=v/p,m=(4-_%4)%4;s.push(`
                cv = ud.`+l+`.value;
                v = uv.`+l+`;
                offset = `+u.offset/4+`;

                t = 0;

                for(var i=0; i < `+u.data.size*p+`; i++)
                {
                    for(var j = 0; j < `+_+`; j++)
                    {
                        data[offset++] = v[t++];
                    }
                    offset += `+m+`;
                }

                `)}else{var y=Rg[u.data.type];s.push(`
                cv = ud.`+l+`.value;
                v = uv.`+l+`;
                offset = `+u.offset/4+`;
                `+y+`;
                `)}}return s.push(`
       renderer.buffer.update(buffer);
    `),{size:o,syncFunc:new Function("ud","uv","renderer","syncData","buffer",s.join(`
`))}}var Sg=function(){function r(){}return r}(),Qf=function(){function r(e,t){this.program=e,this.uniformData=t,this.uniformGroups={},this.uniformDirtyGroups={},this.uniformBufferBindings={}}return r.prototype.destroy=function(){this.uniformData=null,this.uniformGroups=null,this.uniformDirtyGroups=null,this.uniformBufferBindings=null,this.program=null},r}();function Og(r,e){for(var t={},i=e.getProgramParameter(r,e.ACTIVE_ATTRIBUTES),n=0;n<i;n++){var o=e.getActiveAttrib(r,n);if(o.name.indexOf("gl_")!==0){var s=Vf(e,o.type),a={type:s,name:o.name,size:Hf(s),location:e.getAttribLocation(r,o.name)};t[o.name]=a}}return t}function Ng(r,e){for(var t={},i=e.getProgramParameter(r,e.ACTIVE_UNIFORMS),n=0;n<i;n++){var o=e.getActiveUniform(r,n),s=o.name.replace(/\[.*?\]$/,""),a=!!o.name.match(/\[.*?\]$/),u=Vf(e,o.type);t[s]={name:s,index:n,type:u,size:o.size,isArray:a,value:zf(u,o.size)}}return t}function tc(r,e){var t=Lh(r,r.VERTEX_SHADER,e.vertexSrc),i=Lh(r,r.FRAGMENT_SHADER,e.fragmentSrc),n=r.createProgram();if(r.attachShader(n,t),r.attachShader(n,i),r.linkProgram(n),r.getProgramParameter(n,r.LINK_STATUS)||cg(r,n,t,i),e.attributeData=Og(n,r),e.uniformData=Ng(n,r),!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertexSrc)){var o=Object.keys(e.attributeData);o.sort(function(l,c){return l>c?1:-1});for(var s=0;s<o.length;s++)e.attributeData[o[s]].location=s,r.bindAttribLocation(n,s,o[s]);r.linkProgram(n)}r.deleteShader(t),r.deleteShader(i);var a={};for(var s in e.uniformData){var u=e.uniformData[s];a[s]={location:r.getUniformLocation(n,s),value:zf(u.type,u.size)}}var h=new Qf(n,a);return h}var Fg=0,dn={textureCount:0,uboCount:0},iu=function(){function r(e){this.destroyed=!1,this.renderer=e,this.systemCheck(),this.gl=null,this.shader=null,this.program=null,this.cache={},this._uboCache={},this.id=Fg++}return r.prototype.systemCheck=function(){if(!xg())throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")},r.prototype.contextChange=function(e){this.gl=e,this.reset()},r.prototype.bind=function(e,t){e.uniforms.globals=this.renderer.globalUniforms;var i=e.program,n=i.glPrograms[this.renderer.CONTEXT_UID]||this.generateProgram(e);return this.shader=e,this.program!==i&&(this.program=i,this.gl.useProgram(n.program)),t||(dn.textureCount=0,dn.uboCount=0,this.syncUniformGroup(e.uniformGroup,dn)),n},r.prototype.setUniforms=function(e){var t=this.shader.program,i=t.glPrograms[this.renderer.CONTEXT_UID];t.syncUniforms(i.uniformData,e,this.renderer)},r.prototype.syncUniformGroup=function(e,t){var i=this.getGlProgram();(!e.static||e.dirtyId!==i.uniformDirtyGroups[e.id])&&(i.uniformDirtyGroups[e.id]=e.dirtyId,this.syncUniforms(e,i,t))},r.prototype.syncUniforms=function(e,t,i){var n=e.syncUniforms[this.shader.program.id]||this.createSyncGroups(e);n(t.uniformData,e.uniforms,this.renderer,i)},r.prototype.createSyncGroups=function(e){var t=this.getSignature(e,this.shader.program.uniformData,"u");return this.cache[t]||(this.cache[t]=mg(e,this.shader.program.uniformData)),e.syncUniforms[this.shader.program.id]=this.cache[t],e.syncUniforms[this.shader.program.id]},r.prototype.syncUniformBufferGroup=function(e,t){var i=this.getGlProgram();if(!e.static||e.dirtyId!==0||!i.uniformGroups[e.id]){e.dirtyId=0;var n=i.uniformGroups[e.id]||this.createSyncBufferGroup(e,i,t);e.buffer.update(),n(i.uniformData,e.uniforms,this.renderer,dn,e.buffer)}this.renderer.buffer.bindBufferBase(e.buffer,i.uniformBufferBindings[t])},r.prototype.createSyncBufferGroup=function(e,t,i){var n=this.renderer.gl;this.renderer.buffer.bind(e.buffer);var o=this.gl.getUniformBlockIndex(t.program,i);t.uniformBufferBindings[i]=this.shader.uniformBindCount,n.uniformBlockBinding(t.program,o,this.shader.uniformBindCount),this.shader.uniformBindCount++;var s=this.getSignature(e,this.shader.program.uniformData,"ubo"),a=this._uboCache[s];if(a||(a=this._uboCache[s]=Jf(e,this.shader.program.uniformData)),e.autoManage){var u=new Float32Array(a.size/4);e.buffer.update(u)}return t.uniformGroups[e.id]=a.syncFunc,t.uniformGroups[e.id]},r.prototype.getSignature=function(e,t,i){var n=e.uniforms,o=[i+"-"];for(var s in n)o.push(s),t[s]&&o.push(t[s].type);return o.join("-")},r.prototype.getGlProgram=function(){return this.shader?this.shader.program.glPrograms[this.renderer.CONTEXT_UID]:null},r.prototype.generateProgram=function(e){var t=this.gl,i=e.program,n=tc(t,i);return i.glPrograms[this.renderer.CONTEXT_UID]=n,n},r.prototype.reset=function(){this.program=null,this.shader=null},r.prototype.destroy=function(){this.renderer=null,this.destroyed=!0},r}();function Ug(r,e){return e===void 0&&(e=[]),e[B.NORMAL]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.ADD]=[r.ONE,r.ONE],e[B.MULTIPLY]=[r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.SCREEN]=[r.ONE,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.OVERLAY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.DARKEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.LIGHTEN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.COLOR_DODGE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.COLOR_BURN]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.HARD_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.SOFT_LIGHT]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.DIFFERENCE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.EXCLUSION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.HUE]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.SATURATION]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.COLOR]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.LUMINOSITY]=[r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.NONE]=[0,0],e[B.NORMAL_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.ADD_NPM]=[r.SRC_ALPHA,r.ONE,r.ONE,r.ONE],e[B.SCREEN_NPM]=[r.SRC_ALPHA,r.ONE_MINUS_SRC_COLOR,r.ONE,r.ONE_MINUS_SRC_ALPHA],e[B.SRC_IN]=[r.DST_ALPHA,r.ZERO],e[B.SRC_OUT]=[r.ONE_MINUS_DST_ALPHA,r.ZERO],e[B.SRC_ATOP]=[r.DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[B.DST_OVER]=[r.ONE_MINUS_DST_ALPHA,r.ONE],e[B.DST_IN]=[r.ZERO,r.SRC_ALPHA],e[B.DST_OUT]=[r.ZERO,r.ONE_MINUS_SRC_ALPHA],e[B.DST_ATOP]=[r.ONE_MINUS_DST_ALPHA,r.SRC_ALPHA],e[B.XOR]=[r.ONE_MINUS_DST_ALPHA,r.ONE_MINUS_SRC_ALPHA],e[B.SUBTRACT]=[r.ONE,r.ONE,r.ONE,r.ONE,r.FUNC_REVERSE_SUBTRACT,r.FUNC_ADD],e}var Lg=0,Mg=1,Bg=2,Gg=3,Dg=4,kg=5,nu=function(){function r(){this.gl=null,this.stateId=0,this.polygonOffset=0,this.blendMode=B.NONE,this._blendEq=!1,this.map=[],this.map[Lg]=this.setBlend,this.map[Mg]=this.setOffset,this.map[Bg]=this.setCullFace,this.map[Gg]=this.setDepthTest,this.map[Dg]=this.setFrontFace,this.map[kg]=this.setDepthMask,this.checks=[],this.defaultState=new rr,this.defaultState.blend=!0}return r.prototype.contextChange=function(e){this.gl=e,this.blendModes=Ug(e),this.set(this.defaultState),this.reset()},r.prototype.set=function(e){if(e=e||this.defaultState,this.stateId!==e.data){for(var t=this.stateId^e.data,i=0;t;)t&1&&this.map[i].call(this,!!(e.data&1<<i)),t=t>>1,i++;this.stateId=e.data}for(var i=0;i<this.checks.length;i++)this.checks[i](this,e)},r.prototype.forceState=function(e){e=e||this.defaultState;for(var t=0;t<this.map.length;t++)this.map[t].call(this,!!(e.data&1<<t));for(var t=0;t<this.checks.length;t++)this.checks[t](this,e);this.stateId=e.data},r.prototype.setBlend=function(e){this.updateCheck(r.checkBlendMode,e),this.gl[e?"enable":"disable"](this.gl.BLEND)},r.prototype.setOffset=function(e){this.updateCheck(r.checkPolygonOffset,e),this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)},r.prototype.setDepthTest=function(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)},r.prototype.setDepthMask=function(e){this.gl.depthMask(e)},r.prototype.setCullFace=function(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)},r.prototype.setFrontFace=function(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])},r.prototype.setBlendMode=function(e){if(e!==this.blendMode){this.blendMode=e;var t=this.blendModes[e],i=this.gl;t.length===2?i.blendFunc(t[0],t[1]):i.blendFuncSeparate(t[0],t[1],t[2],t[3]),t.length===6?(this._blendEq=!0,i.blendEquationSeparate(t[4],t[5])):this._blendEq&&(this._blendEq=!1,i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD))}},r.prototype.setPolygonOffset=function(e,t){this.gl.polygonOffset(e,t)},r.prototype.reset=function(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1),this.forceState(this.defaultState),this._blendEq=!0,this.blendMode=-1,this.setBlendMode(0)},r.prototype.updateCheck=function(e,t){var i=this.checks.indexOf(e);t&&i===-1?this.checks.push(e):!t&&i!==-1&&this.checks.splice(i,1)},r.checkBlendMode=function(e,t){e.setBlendMode(t.blendMode)},r.checkPolygonOffset=function(e,t){e.setPolygonOffset(1,t.polygonOffset)},r.prototype.destroy=function(){this.gl=null},r}(),ou=function(){function r(e){this.renderer=e,this.count=0,this.checkCount=0,this.maxIdle=U.GC_MAX_IDLE,this.checkCountMax=U.GC_MAX_CHECK_COUNT,this.mode=U.GC_MODE}return r.prototype.postrender=function(){!this.renderer.renderingToScreen||(this.count++,this.mode!==In.MANUAL&&(this.checkCount++,this.checkCount>this.checkCountMax&&(this.checkCount=0,this.run())))},r.prototype.run=function(){for(var e=this.renderer.texture,t=e.managedTextures,i=!1,n=0;n<t.length;n++){var o=t[n];!o.framebuffer&&this.count-o.touched>this.maxIdle&&(e.destroyTexture(o,!0),t[n]=null,i=!0)}if(i){for(var s=0,n=0;n<t.length;n++)t[n]!==null&&(t[s++]=t[n]);t.length=s}},r.prototype.unload=function(e){var t=this.renderer.texture,i=e._texture;i&&!i.framebuffer&&t.destroyTexture(i);for(var n=e.children.length-1;n>=0;n--)this.unload(e.children[n])},r.prototype.destroy=function(){this.renderer=null},r}();function zg(r){var e,t,i,n,o,s,a,u,h,l,c,f,d,v,p,_,m,y,b,C,x,g,E;return"WebGL2RenderingContext"in globalThis&&r instanceof globalThis.WebGL2RenderingContext?E=(e={},e[G.UNSIGNED_BYTE]=(t={},t[R.RGBA]=r.RGBA8,t[R.RGB]=r.RGB8,t[R.RG]=r.RG8,t[R.RED]=r.R8,t[R.RGBA_INTEGER]=r.RGBA8UI,t[R.RGB_INTEGER]=r.RGB8UI,t[R.RG_INTEGER]=r.RG8UI,t[R.RED_INTEGER]=r.R8UI,t[R.ALPHA]=r.ALPHA,t[R.LUMINANCE]=r.LUMINANCE,t[R.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,t),e[G.BYTE]=(i={},i[R.RGBA]=r.RGBA8_SNORM,i[R.RGB]=r.RGB8_SNORM,i[R.RG]=r.RG8_SNORM,i[R.RED]=r.R8_SNORM,i[R.RGBA_INTEGER]=r.RGBA8I,i[R.RGB_INTEGER]=r.RGB8I,i[R.RG_INTEGER]=r.RG8I,i[R.RED_INTEGER]=r.R8I,i),e[G.UNSIGNED_SHORT]=(n={},n[R.RGBA_INTEGER]=r.RGBA16UI,n[R.RGB_INTEGER]=r.RGB16UI,n[R.RG_INTEGER]=r.RG16UI,n[R.RED_INTEGER]=r.R16UI,n[R.DEPTH_COMPONENT]=r.DEPTH_COMPONENT16,n),e[G.SHORT]=(o={},o[R.RGBA_INTEGER]=r.RGBA16I,o[R.RGB_INTEGER]=r.RGB16I,o[R.RG_INTEGER]=r.RG16I,o[R.RED_INTEGER]=r.R16I,o),e[G.UNSIGNED_INT]=(s={},s[R.RGBA_INTEGER]=r.RGBA32UI,s[R.RGB_INTEGER]=r.RGB32UI,s[R.RG_INTEGER]=r.RG32UI,s[R.RED_INTEGER]=r.R32UI,s[R.DEPTH_COMPONENT]=r.DEPTH_COMPONENT24,s),e[G.INT]=(a={},a[R.RGBA_INTEGER]=r.RGBA32I,a[R.RGB_INTEGER]=r.RGB32I,a[R.RG_INTEGER]=r.RG32I,a[R.RED_INTEGER]=r.R32I,a),e[G.FLOAT]=(u={},u[R.RGBA]=r.RGBA32F,u[R.RGB]=r.RGB32F,u[R.RG]=r.RG32F,u[R.RED]=r.R32F,u[R.DEPTH_COMPONENT]=r.DEPTH_COMPONENT32F,u),e[G.HALF_FLOAT]=(h={},h[R.RGBA]=r.RGBA16F,h[R.RGB]=r.RGB16F,h[R.RG]=r.RG16F,h[R.RED]=r.R16F,h),e[G.UNSIGNED_SHORT_5_6_5]=(l={},l[R.RGB]=r.RGB565,l),e[G.UNSIGNED_SHORT_4_4_4_4]=(c={},c[R.RGBA]=r.RGBA4,c),e[G.UNSIGNED_SHORT_5_5_5_1]=(f={},f[R.RGBA]=r.RGB5_A1,f),e[G.UNSIGNED_INT_2_10_10_10_REV]=(d={},d[R.RGBA]=r.RGB10_A2,d[R.RGBA_INTEGER]=r.RGB10_A2UI,d),e[G.UNSIGNED_INT_10F_11F_11F_REV]=(v={},v[R.RGB]=r.R11F_G11F_B10F,v),e[G.UNSIGNED_INT_5_9_9_9_REV]=(p={},p[R.RGB]=r.RGB9_E5,p),e[G.UNSIGNED_INT_24_8]=(_={},_[R.DEPTH_STENCIL]=r.DEPTH24_STENCIL8,_),e[G.FLOAT_32_UNSIGNED_INT_24_8_REV]=(m={},m[R.DEPTH_STENCIL]=r.DEPTH32F_STENCIL8,m),e):E=(y={},y[G.UNSIGNED_BYTE]=(b={},b[R.RGBA]=r.RGBA,b[R.RGB]=r.RGB,b[R.ALPHA]=r.ALPHA,b[R.LUMINANCE]=r.LUMINANCE,b[R.LUMINANCE_ALPHA]=r.LUMINANCE_ALPHA,b),y[G.UNSIGNED_SHORT_5_6_5]=(C={},C[R.RGB]=r.RGB,C),y[G.UNSIGNED_SHORT_4_4_4_4]=(x={},x[R.RGBA]=r.RGBA,x),y[G.UNSIGNED_SHORT_5_5_5_1]=(g={},g[R.RGBA]=r.RGBA,g),y),E}var En=function(){function r(e){this.texture=e,this.width=-1,this.height=-1,this.dirtyId=-1,this.dirtyStyleId=-1,this.mipmap=!1,this.wrapMode=33071,this.type=G.UNSIGNED_BYTE,this.internalFormat=R.RGBA,this.samplerType=0}return r}(),su=function(){function r(e){this.renderer=e,this.boundTextures=[],this.currentLocation=-1,this.managedTextures=[],this._unknownBoundTextures=!1,this.unknownTexture=new q,this.hasIntegerTextures=!1}return r.prototype.contextChange=function(){var e=this.gl=this.renderer.gl;this.CONTEXT_UID=this.renderer.CONTEXT_UID,this.webGLVersion=this.renderer.context.webGLVersion,this.internalFormats=zg(e);var t=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);this.boundTextures.length=t;for(var i=0;i<t;i++)this.boundTextures[i]=null;this.emptyTextures={};var n=new En(e.createTexture());e.bindTexture(e.TEXTURE_2D,n.texture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(4)),this.emptyTextures[e.TEXTURE_2D]=n,this.emptyTextures[e.TEXTURE_CUBE_MAP]=new En(e.createTexture()),e.bindTexture(e.TEXTURE_CUBE_MAP,this.emptyTextures[e.TEXTURE_CUBE_MAP].texture);for(var i=0;i<6;i++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,null);e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MIN_FILTER,e.LINEAR);for(var i=0;i<this.boundTextures.length;i++)this.bind(null,i)},r.prototype.bind=function(e,t){t===void 0&&(t=0);var i=this.gl;if(e=e==null?void 0:e.castToBaseTexture(),e&&e.valid&&!e.parentTextureArray){e.touched=this.renderer.textureGC.count;var n=e._glTextures[this.CONTEXT_UID]||this.initTexture(e);this.boundTextures[t]!==e&&(this.currentLocation!==t&&(this.currentLocation=t,i.activeTexture(i.TEXTURE0+t)),i.bindTexture(e.target,n.texture)),n.dirtyId!==e.dirtyId&&(this.currentLocation!==t&&(this.currentLocation=t,i.activeTexture(i.TEXTURE0+t)),this.updateTexture(e)),this.boundTextures[t]=e}else this.currentLocation!==t&&(this.currentLocation=t,i.activeTexture(i.TEXTURE0+t)),i.bindTexture(i.TEXTURE_2D,this.emptyTextures[i.TEXTURE_2D].texture),this.boundTextures[t]=null},r.prototype.reset=function(){this._unknownBoundTextures=!0,this.hasIntegerTextures=!1,this.currentLocation=-1;for(var e=0;e<this.boundTextures.length;e++)this.boundTextures[e]=this.unknownTexture},r.prototype.unbind=function(e){var t=this,i=t.gl,n=t.boundTextures;if(this._unknownBoundTextures){this._unknownBoundTextures=!1;for(var o=0;o<n.length;o++)n[o]===this.unknownTexture&&this.bind(null,o)}for(var o=0;o<n.length;o++)n[o]===e&&(this.currentLocation!==o&&(i.activeTexture(i.TEXTURE0+o),this.currentLocation=o),i.bindTexture(e.target,this.emptyTextures[e.target].texture),n[o]=null)},r.prototype.ensureSamplerType=function(e){var t=this,i=t.boundTextures,n=t.hasIntegerTextures,o=t.CONTEXT_UID;if(!!n)for(var s=e-1;s>=0;--s){var a=i[s];if(a){var u=a._glTextures[o];u.samplerType!==Pi.FLOAT&&this.renderer.texture.unbind(a)}}},r.prototype.initTexture=function(e){var t=new En(this.gl.createTexture());return t.dirtyId=-1,e._glTextures[this.CONTEXT_UID]=t,this.managedTextures.push(e),e.on("dispose",this.destroyTexture,this),t},r.prototype.initTextureType=function(e,t){var i,n;t.internalFormat=(n=(i=this.internalFormats[e.type])===null||i===void 0?void 0:i[e.format])!==null&&n!==void 0?n:e.format,this.webGLVersion===2&&e.type===G.HALF_FLOAT?t.type=this.gl.HALF_FLOAT:t.type=e.type},r.prototype.updateTexture=function(e){var t=e._glTextures[this.CONTEXT_UID];if(!!t){var i=this.renderer;if(this.initTextureType(e,t),e.resource&&e.resource.upload(i,e,t))t.samplerType!==Pi.FLOAT&&(this.hasIntegerTextures=!0);else{var n=e.realWidth,o=e.realHeight,s=i.gl;(t.width!==n||t.height!==o||t.dirtyId<0)&&(t.width=n,t.height=o,s.texImage2D(e.target,0,t.internalFormat,n,o,0,e.format,t.type,null))}e.dirtyStyleId!==t.dirtyStyleId&&this.updateTextureStyle(e),t.dirtyId=e.dirtyId}},r.prototype.destroyTexture=function(e,t){var i=this.gl;if(e=e.castToBaseTexture(),e._glTextures[this.CONTEXT_UID]&&(this.unbind(e),i.deleteTexture(e._glTextures[this.CONTEXT_UID].texture),e.off("dispose",this.destroyTexture,this),delete e._glTextures[this.CONTEXT_UID],!t)){var n=this.managedTextures.indexOf(e);n!==-1&&xr(this.managedTextures,n,1)}},r.prototype.updateTextureStyle=function(e){var t=e._glTextures[this.CONTEXT_UID];!t||((e.mipmap===ee.POW2||this.webGLVersion!==2)&&!e.isPowerOfTwo?t.mipmap=!1:t.mipmap=e.mipmap>=1,this.webGLVersion!==2&&!e.isPowerOfTwo?t.wrapMode=xe.CLAMP:t.wrapMode=e.wrapMode,e.resource&&e.resource.style(this.renderer,e,t)||this.setStyle(e,t),t.dirtyStyleId=e.dirtyStyleId)},r.prototype.setStyle=function(e,t){var i=this.gl;if(t.mipmap&&e.mipmap!==ee.ON_MANUAL&&i.generateMipmap(e.target),i.texParameteri(e.target,i.TEXTURE_WRAP_S,t.wrapMode),i.texParameteri(e.target,i.TEXTURE_WRAP_T,t.wrapMode),t.mipmap){i.texParameteri(e.target,i.TEXTURE_MIN_FILTER,e.scaleMode===Vt.LINEAR?i.LINEAR_MIPMAP_LINEAR:i.NEAREST_MIPMAP_NEAREST);var n=this.renderer.context.extensions.anisotropicFiltering;if(n&&e.anisotropicLevel>0&&e.scaleMode===Vt.LINEAR){var o=Math.min(e.anisotropicLevel,i.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT));i.texParameterf(e.target,n.TEXTURE_MAX_ANISOTROPY_EXT,o)}}else i.texParameteri(e.target,i.TEXTURE_MIN_FILTER,e.scaleMode===Vt.LINEAR?i.LINEAR:i.NEAREST);i.texParameteri(e.target,i.TEXTURE_MAG_FILTER,e.scaleMode===Vt.LINEAR?i.LINEAR:i.NEAREST)},r.prototype.destroy=function(){this.renderer=null},r}(),ec={__proto__:null,FilterSystem:Ya,BatchSystem:$a,ContextSystem:qa,FramebufferSystem:Ka,GeometrySystem:Za,MaskSystem:Ja,ScissorSystem:Qa,StencilSystem:tu,ProjectionSystem:eu,RenderTextureSystem:ru,ShaderSystem:iu,StateSystem:nu,TextureGCSystem:ou,TextureSystem:su},bo=new _t,rc=function(r){ot(e,r);function e(t,i){t===void 0&&(t=jr.UNKNOWN);var n=r.call(this)||this;return i=Object.assign({},U.RENDER_OPTIONS,i),n.options=i,n.type=t,n.screen=new K(0,0,i.width,i.height),n.view=i.view||document.createElement("canvas"),n.resolution=i.resolution||U.RESOLUTION,n.useContextAlpha=i.useContextAlpha,n.autoDensity=!!i.autoDensity,n.preserveDrawingBuffer=i.preserveDrawingBuffer,n.clearBeforeRender=i.clearBeforeRender,n._backgroundColor=0,n._backgroundColorRgba=[0,0,0,1],n._backgroundColorString="#000000",n.backgroundColor=i.backgroundColor||n._backgroundColor,n.backgroundAlpha=i.backgroundAlpha,i.transparent!==void 0&&(Le("6.0.0","Option transparent is deprecated, please use backgroundAlpha instead."),n.useContextAlpha=i.transparent,n.backgroundAlpha=i.transparent?0:1),n._lastObjectRendered=null,n.plugins={},n}return e.prototype.initPlugins=function(t){for(var i in t)this.plugins[i]=new t[i](this)},Object.defineProperty(e.prototype,"width",{get:function(){return this.view.width},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.view.height},enumerable:!1,configurable:!0}),e.prototype.resize=function(t,i){this.view.width=Math.round(t*this.resolution),this.view.height=Math.round(i*this.resolution);var n=this.view.width/this.resolution,o=this.view.height/this.resolution;this.screen.width=n,this.screen.height=o,this.autoDensity&&(this.view.style.width=n+"px",this.view.style.height=o+"px"),this.emit("resize",n,o)},e.prototype.generateTexture=function(t,i,n,o){i===void 0&&(i={}),typeof i=="number"&&(Le("6.1.0","generateTexture options (scaleMode, resolution, region) are now object options."),i={scaleMode:i,resolution:n,region:o});var s=i.region,a=rg(i,["region"]);o=s||t.getLocalBounds(null,!0),o.width===0&&(o.width=1),o.height===0&&(o.height=1);var u=Me.create(cs({width:o.width,height:o.height},a));return bo.tx=-o.x,bo.ty=-o.y,this.render(t,{renderTexture:u,clear:!1,transform:bo,skipUpdateTransform:!!t.parent}),u},e.prototype.destroy=function(t){for(var i in this.plugins)this.plugins[i].destroy(),this.plugins[i]=null;t&&this.view.parentNode&&this.view.parentNode.removeChild(this.view);var n=this;n.plugins=null,n.type=jr.UNKNOWN,n.view=null,n.screen=null,n._tempDisplayObjectParent=null,n.options=null,this._backgroundColorRgba=null,this._backgroundColorString=null,this._lastObjectRendered=null},Object.defineProperty(e.prototype,"backgroundColor",{get:function(){return this._backgroundColor},set:function(t){this._backgroundColor=t,this._backgroundColorString=Oa(t),Rt(t,this._backgroundColorRgba)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"backgroundAlpha",{get:function(){return this._backgroundColorRgba[3]},set:function(t){this._backgroundColorRgba[3]=t},enumerable:!1,configurable:!0}),e}(ti),Xg=function(){function r(e){this.buffer=e||null,this.updateID=-1,this.byteLength=-1,this.refCount=0}return r}(),jg=function(){function r(e){this.renderer=e,this.managedBuffers={},this.boundBufferBases={}}return r.prototype.destroy=function(){this.renderer=null},r.prototype.contextChange=function(){this.disposeAll(!0),this.gl=this.renderer.gl,this.CONTEXT_UID=this.renderer.CONTEXT_UID},r.prototype.bind=function(e){var t=this,i=t.gl,n=t.CONTEXT_UID,o=e._glBuffers[n]||this.createGLBuffer(e);i.bindBuffer(e.type,o.buffer)},r.prototype.bindBufferBase=function(e,t){var i=this,n=i.gl,o=i.CONTEXT_UID;if(this.boundBufferBases[t]!==e){var s=e._glBuffers[o]||this.createGLBuffer(e);this.boundBufferBases[t]=e,n.bindBufferBase(n.UNIFORM_BUFFER,t,s.buffer)}},r.prototype.bindBufferRange=function(e,t,i){var n=this,o=n.gl,s=n.CONTEXT_UID;i=i||0;var a=e._glBuffers[s]||this.createGLBuffer(e);o.bindBufferRange(o.UNIFORM_BUFFER,t||0,a.buffer,i*256,256)},r.prototype.update=function(e){var t=this,i=t.gl,n=t.CONTEXT_UID,o=e._glBuffers[n];if(e._updateID!==o.updateID)if(o.updateID=e._updateID,i.bindBuffer(e.type,o.buffer),o.byteLength>=e.data.byteLength)i.bufferSubData(e.type,0,e.data);else{var s=e.static?i.STATIC_DRAW:i.DYNAMIC_DRAW;o.byteLength=e.data.byteLength,i.bufferData(e.type,e.data,s)}},r.prototype.dispose=function(e,t){if(!!this.managedBuffers[e.id]){delete this.managedBuffers[e.id];var i=e._glBuffers[this.CONTEXT_UID],n=this.gl;e.disposeRunner.remove(this),i&&(t||n.deleteBuffer(i.buffer),delete e._glBuffers[this.CONTEXT_UID])}},r.prototype.disposeAll=function(e){for(var t=Object.keys(this.managedBuffers),i=0;i<t.length;i++)this.dispose(this.managedBuffers[t[i]],e)},r.prototype.createGLBuffer=function(e){var t=this,i=t.CONTEXT_UID,n=t.gl;return e._glBuffers[i]=new Xg(n.createBuffer()),this.managedBuffers[e.id]=e,e.disposeRunner.add(this),e._glBuffers[i]},r}(),De=function(r){ot(e,r);function e(t){var i=r.call(this,jr.WEBGL,t)||this;return t=i.options,i.gl=null,i.CONTEXT_UID=0,i.runners={destroy:new Nt("destroy"),contextChange:new Nt("contextChange"),reset:new Nt("reset"),update:new Nt("update"),postrender:new Nt("postrender"),prerender:new Nt("prerender"),resize:new Nt("resize")},i.runners.contextChange.add(i),i.globalUniforms=new Ye({projectionMatrix:new _t},!0),i.addSystem(Ja,"mask").addSystem(qa,"context").addSystem(nu,"state").addSystem(iu,"shader").addSystem(su,"texture").addSystem(jg,"buffer").addSystem(Za,"geometry").addSystem(Ka,"framebuffer").addSystem(Qa,"scissor").addSystem(tu,"stencil").addSystem(eu,"projection").addSystem(ou,"textureGC").addSystem(Ya,"filter").addSystem(ru,"renderTexture").addSystem($a,"batch"),i.initPlugins(e.__plugins),i.multisample=void 0,t.context?i.context.initFromContext(t.context):i.context.initFromOptions({alpha:!!i.useContextAlpha,antialias:t.antialias,premultipliedAlpha:i.useContextAlpha&&i.useContextAlpha!=="notMultiplied",stencil:!0,preserveDrawingBuffer:t.preserveDrawingBuffer,powerPreference:i.options.powerPreference}),i.renderingToScreen=!0,_f(i.context.webGLVersion===2?"WebGL 2":"WebGL 1"),i.resize(i.options.width,i.options.height),i}return e.create=function(t){if(mf())return new e(t);throw new Error('WebGL unsupported in this browser, use "pixi.js-legacy" for fallback canvas2d support.')},e.prototype.contextChange=function(){var t=this.gl,i;if(this.context.webGLVersion===1){var n=t.getParameter(t.FRAMEBUFFER_BINDING);t.bindFramebuffer(t.FRAMEBUFFER,null),i=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.FRAMEBUFFER,n)}else{var n=t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),i=t.getParameter(t.SAMPLES),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,n)}i>=yt.HIGH?this.multisample=yt.HIGH:i>=yt.MEDIUM?this.multisample=yt.MEDIUM:i>=yt.LOW?this.multisample=yt.LOW:this.multisample=yt.NONE},e.prototype.addSystem=function(t,i){var n=new t(this);if(this[i])throw new Error('Whoops! The name "'+i+'" is already in use');this[i]=n;for(var o in this.runners)this.runners[o].add(n);return this},e.prototype.render=function(t,i){var n,o,s,a;if(i&&(i instanceof Me?(Le("6.0.0","Renderer#render arguments changed, use options instead."),n=i,o=arguments[2],s=arguments[3],a=arguments[4]):(n=i.renderTexture,o=i.clear,s=i.transform,a=i.skipUpdateTransform)),this.renderingToScreen=!n,this.runners.prerender.emit(),this.emit("prerender"),this.projection.transform=s,!this.context.isLost){if(n||(this._lastObjectRendered=t),!a){var u=t.enableTempParent();t.updateTransform(),t.disableTempParent(u)}this.renderTexture.bind(n),this.batch.currentRenderer.start(),(o!==void 0?o:this.clearBeforeRender)&&this.renderTexture.clear(),t.render(this),this.batch.currentRenderer.flush(),n&&n.baseTexture.update(),this.runners.postrender.emit(),this.projection.transform=null,this.emit("postrender")}},e.prototype.generateTexture=function(t,i,n,o){i===void 0&&(i={});var s=r.prototype.generateTexture.call(this,t,i,n,o);return this.framebuffer.blit(),s},e.prototype.resize=function(t,i){r.prototype.resize.call(this,t,i),this.runners.resize.emit(this.screen.height,this.screen.width)},e.prototype.reset=function(){return this.runners.reset.emit(),this},e.prototype.clear=function(){this.renderTexture.bind(),this.renderTexture.clear()},e.prototype.destroy=function(t){this.runners.destroy.emit();for(var i in this.runners)this.runners[i].destroy();r.prototype.destroy.call(this,t),this.gl=null},Object.defineProperty(e.prototype,"extract",{get:function(){return Le("6.0.0","Renderer#extract has been deprecated, please use Renderer#plugins.extract instead."),this.plugins.extract},enumerable:!1,configurable:!0}),e.registerPlugin=function(t,i){e.__plugins=e.__plugins||{},e.__plugins[t]=i},e}(rc);function ic(r){return De.create(r)}var Hg=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Vg=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
    gl_Position = filterVertexPosition();
    vTextureCoord = filterTextureCoord();
}
`,nc=Hg,au=Vg,Wg=function(){function r(e){Le("6.1.0","System class is deprecated, implemement ISystem interface instead."),this.renderer=e}return r.prototype.destroy=function(){this.renderer=null},r}(),Sn=function(){function r(){this.texArray=null,this.blend=0,this.type=Zt.TRIANGLES,this.start=0,this.size=0,this.data=null}return r}(),On=function(){function r(){this.elements=[],this.ids=[],this.count=0}return r.prototype.clear=function(){for(var e=0;e<this.count;e++)this.elements[e]=null;this.count=0},r}(),Nn=function(){function r(e){typeof e=="number"?this.rawBinaryData=new ArrayBuffer(e):e instanceof Uint8Array?this.rawBinaryData=e.buffer:this.rawBinaryData=e,this.uint32View=new Uint32Array(this.rawBinaryData),this.float32View=new Float32Array(this.rawBinaryData)}return Object.defineProperty(r.prototype,"int8View",{get:function(){return this._int8View||(this._int8View=new Int8Array(this.rawBinaryData)),this._int8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint8View",{get:function(){return this._uint8View||(this._uint8View=new Uint8Array(this.rawBinaryData)),this._uint8View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int16View",{get:function(){return this._int16View||(this._int16View=new Int16Array(this.rawBinaryData)),this._int16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"uint16View",{get:function(){return this._uint16View||(this._uint16View=new Uint16Array(this.rawBinaryData)),this._uint16View},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"int32View",{get:function(){return this._int32View||(this._int32View=new Int32Array(this.rawBinaryData)),this._int32View},enumerable:!1,configurable:!0}),r.prototype.view=function(e){return this[e+"View"]},r.prototype.destroy=function(){this.rawBinaryData=null,this._int8View=null,this._uint8View=null,this._int16View=null,this._uint16View=null,this._int32View=null,this.uint32View=null,this.float32View=null},r.sizeOf=function(e){switch(e){case"int8":case"uint8":return 1;case"int16":case"uint16":return 2;case"int32":case"uint32":case"float32":return 4;default:throw new Error(e+" isn't a valid view type")}},r}(),oc=function(r){ot(e,r);function e(t){var i=r.call(this,t)||this;return i.shaderGenerator=null,i.geometryClass=null,i.vertexSize=null,i.state=rr.for2d(),i.size=U.SPRITE_BATCH_SIZE*4,i._vertexCount=0,i._indexCount=0,i._bufferedElements=[],i._bufferedTextures=[],i._bufferSize=0,i._shader=null,i._packedGeometries=[],i._packedGeometryPoolSize=2,i._flushId=0,i._aBuffers={},i._iBuffers={},i.MAX_TEXTURES=1,i.renderer.on("prerender",i.onPrerender,i),t.runners.contextChange.add(i),i._dcIndex=0,i._aIndex=0,i._iIndex=0,i._attributeBuffer=null,i._indexBuffer=null,i._tempBoundTextures=[],i}return e.prototype.contextChange=function(){var t=this.renderer.gl;U.PREFER_ENV===be.WEBGL_LEGACY?this.MAX_TEXTURES=1:(this.MAX_TEXTURES=Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),U.SPRITE_MAX_TEXTURES),this.MAX_TEXTURES=Wf(this.MAX_TEXTURES,t)),this._shader=this.shaderGenerator.generateShader(this.MAX_TEXTURES);for(var i=0;i<this._packedGeometryPoolSize;i++)this._packedGeometries[i]=new this.geometryClass;this.initFlushBuffers()},e.prototype.initFlushBuffers=function(){for(var t=e._drawCallPool,i=e._textureArrayPool,n=this.size/4,o=Math.floor(n/this.MAX_TEXTURES)+1;t.length<n;)t.push(new Sn);for(;i.length<o;)i.push(new On);for(var s=0;s<this.MAX_TEXTURES;s++)this._tempBoundTextures[s]=null},e.prototype.onPrerender=function(){this._flushId=0},e.prototype.render=function(t){!t._texture.valid||(this._vertexCount+t.vertexData.length/2>this.size&&this.flush(),this._vertexCount+=t.vertexData.length/2,this._indexCount+=t.indices.length,this._bufferedTextures[this._bufferSize]=t._texture.baseTexture,this._bufferedElements[this._bufferSize++]=t)},e.prototype.buildTexturesAndDrawCalls=function(){var t=this,i=t._bufferedTextures,n=t.MAX_TEXTURES,o=e._textureArrayPool,s=this.renderer.batch,a=this._tempBoundTextures,u=this.renderer.textureGC.count,h=++q._globalBatch,l=0,c=o[0],f=0;s.copyBoundTextures(a,n);for(var d=0;d<this._bufferSize;++d){var v=i[d];i[d]=null,v._batchEnabled!==h&&(c.count>=n&&(s.boundArray(c,a,h,n),this.buildDrawCalls(c,f,d),f=d,c=o[++l],++h),v._batchEnabled=h,v.touched=u,c.elements[c.count++]=v)}c.count>0&&(s.boundArray(c,a,h,n),this.buildDrawCalls(c,f,this._bufferSize),++l,++h);for(var d=0;d<a.length;d++)a[d]=null;q._globalBatch=h},e.prototype.buildDrawCalls=function(t,i,n){var o=this,s=o._bufferedElements,a=o._attributeBuffer,u=o._indexBuffer,h=o.vertexSize,l=e._drawCallPool,c=this._dcIndex,f=this._aIndex,d=this._iIndex,v=l[c];v.start=this._iIndex,v.texArray=t;for(var p=i;p<n;++p){var _=s[p],m=_._texture.baseTexture,y=Fa[m.alphaMode?1:0][_.blendMode];s[p]=null,i<p&&v.blend!==y&&(v.size=d-v.start,i=p,v=l[++c],v.texArray=t,v.start=d),this.packInterleavedGeometry(_,a,u,f,d),f+=_.vertexData.length/2*h,d+=_.indices.length,v.blend=y}i<n&&(v.size=d-v.start,++c),this._dcIndex=c,this._aIndex=f,this._iIndex=d},e.prototype.bindAndClearTexArray=function(t){for(var i=this.renderer.texture,n=0;n<t.count;n++)i.bind(t.elements[n],t.ids[n]),t.elements[n]=null;t.count=0},e.prototype.updateGeometry=function(){var t=this,i=t._packedGeometries,n=t._attributeBuffer,o=t._indexBuffer;U.CAN_UPLOAD_SAME_BUFFER?(i[this._flushId]._buffer.update(n.rawBinaryData),i[this._flushId]._indexBuffer.update(o),this.renderer.geometry.updateBuffers()):(this._packedGeometryPoolSize<=this._flushId&&(this._packedGeometryPoolSize++,i[this._flushId]=new this.geometryClass),i[this._flushId]._buffer.update(n.rawBinaryData),i[this._flushId]._indexBuffer.update(o),this.renderer.geometry.bind(i[this._flushId]),this.renderer.geometry.updateBuffers(),this._flushId++)},e.prototype.drawBatches=function(){for(var t=this._dcIndex,i=this.renderer,n=i.gl,o=i.state,s=e._drawCallPool,a=null,u=0;u<t;u++){var h=s[u],l=h.texArray,c=h.type,f=h.size,d=h.start,v=h.blend;a!==l&&(a=l,this.bindAndClearTexArray(l)),this.state.blendMode=v,o.set(this.state),n.drawElements(c,f,n.UNSIGNED_SHORT,d*2)}},e.prototype.flush=function(){this._vertexCount!==0&&(this._attributeBuffer=this.getAttributeBuffer(this._vertexCount),this._indexBuffer=this.getIndexBuffer(this._indexCount),this._aIndex=0,this._iIndex=0,this._dcIndex=0,this.buildTexturesAndDrawCalls(),this.updateGeometry(),this.drawBatches(),this._bufferSize=0,this._vertexCount=0,this._indexCount=0)},e.prototype.start=function(){this.renderer.state.set(this.state),this.renderer.texture.ensureSamplerType(this.MAX_TEXTURES),this.renderer.shader.bind(this._shader),U.CAN_UPLOAD_SAME_BUFFER&&this.renderer.geometry.bind(this._packedGeometries[this._flushId])},e.prototype.stop=function(){this.flush()},e.prototype.destroy=function(){for(var t=0;t<this._packedGeometryPoolSize;t++)this._packedGeometries[t]&&this._packedGeometries[t].destroy();this.renderer.off("prerender",this.onPrerender,this),this._aBuffers=null,this._iBuffers=null,this._packedGeometries=null,this._attributeBuffer=null,this._indexBuffer=null,this._shader&&(this._shader.destroy(),this._shader=null),r.prototype.destroy.call(this)},e.prototype.getAttributeBuffer=function(t){var i=Ii(Math.ceil(t/8)),n=is(i),o=i*8;this._aBuffers.length<=n&&(this._iBuffers.length=n+1);var s=this._aBuffers[o];return s||(this._aBuffers[o]=s=new Nn(o*this.vertexSize*4)),s},e.prototype.getIndexBuffer=function(t){var i=Ii(Math.ceil(t/12)),n=is(i),o=i*12;this._iBuffers.length<=n&&(this._iBuffers.length=n+1);var s=this._iBuffers[n];return s||(this._iBuffers[n]=s=new Uint16Array(o)),s},e.prototype.packInterleavedGeometry=function(t,i,n,o,s){for(var a=i.uint32View,u=i.float32View,h=o/this.vertexSize,l=t.uvs,c=t.indices,f=t.vertexData,d=t._texture.baseTexture._batchLocation,v=Math.min(t.worldAlpha,1),p=v<1&&t._texture.baseTexture.alphaMode?Yn(t._tintRGB,v):t._tintRGB+(v*255<<24),_=0;_<f.length;_+=2)u[o++]=f[_],u[o++]=f[_+1],u[o++]=l[_],u[o++]=l[_+1],a[o++]=p,u[o++]=d;for(var _=0;_<c.length;_++)n[s++]=h+c[_]},e._drawCallPool=[],e._textureArrayPool=[],e}(Wi),sc=function(){function r(e,t){if(this.vertexSrc=e,this.fragTemplate=t,this.programCache={},this.defaultGroupCache={},t.indexOf("%count%")<0)throw new Error('Fragment template must contain "%count%".');if(t.indexOf("%forloop%")<0)throw new Error('Fragment template must contain "%forloop%".')}return r.prototype.generateShader=function(e){if(!this.programCache[e]){for(var t=new Int32Array(e),i=0;i<e;i++)t[i]=i;this.defaultGroupCache[e]=Ye.from({uSamplers:t},!0);var n=this.fragTemplate;n=n.replace(/%count%/gi,""+e),n=n.replace(/%forloop%/gi,this.generateSampleSrc(e)),this.programCache[e]=new ri(this.vertexSrc,n)}var o={tint:new Float32Array([1,1,1,1]),translationMatrix:new _t,default:this.defaultGroupCache[e]};return new Oe(this.programCache[e],o)},r.prototype.generateSampleSrc=function(e){var t="";t+=`
`,t+=`
`;for(var i=0;i<e;i++)i>0&&(t+=`
else `),i<e-1&&(t+="if(vTextureId < "+i+".5)"),t+=`
{`,t+=`
	color = texture2D(uSamplers[`+i+"], vTextureCoord);",t+=`
}`;return t+=`
`,t+=`
`,t},r}(),uu=function(r){ot(e,r);function e(t){t===void 0&&(t=!1);var i=r.call(this)||this;return i._buffer=new Tt(null,t,!1),i._indexBuffer=new Tt(null,t,!0),i.addAttribute("aVertexPosition",i._buffer,2,!1,G.FLOAT).addAttribute("aTextureCoord",i._buffer,2,!1,G.FLOAT).addAttribute("aColor",i._buffer,4,!0,G.UNSIGNED_BYTE).addAttribute("aTextureId",i._buffer,1,!0,G.FLOAT).addIndex(i._indexBuffer),i}return e}(ei),zh=`precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform vec4 tint;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor * tint;
}
`,Xh=`varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;
uniform sampler2D uSamplers[%count%];

void main(void){
    vec4 color;
    %forloop%
    gl_FragColor = color * vColor;
}
`,ac=function(){function r(){}return r.create=function(e){var t=Object.assign({vertex:zh,fragment:Xh,geometryClass:uu,vertexSize:6},e),i=t.vertex,n=t.fragment,o=t.vertexSize,s=t.geometryClass;return function(a){ot(u,a);function u(h){var l=a.call(this,h)||this;return l.shaderGenerator=new sc(i,n),l.geometryClass=s,l.vertexSize=o,l}return u}(oc)},Object.defineProperty(r,"defaultVertexSrc",{get:function(){return zh},enumerable:!1,configurable:!0}),Object.defineProperty(r,"defaultFragmentTemplate",{get:function(){return Xh},enumerable:!1,configurable:!0}),r}(),uc=ac.create(),hc={},Yg=function(r){Object.defineProperty(hc,r,{get:function(){return Le("6.0.0","PIXI.systems."+r+" has moved to PIXI."+r),Lf[r]}})};for(var hu in Lf)Yg(hu);var lc={},$g=function(r){Object.defineProperty(lc,r,{get:function(){return Le("6.0.0","PIXI.resources."+r+" has moved to PIXI."+r),ec[r]}})};for(var hu in ec)$g(hu);/*!
 * @pixi/app - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/app is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Yi=function(){function r(e){var t=this;this.stage=new It,e=Object.assign({forceCanvas:!1},e),this.renderer=ic(e),r._plugins.forEach(function(i){i.init.call(t,e)})}return r.registerPlugin=function(e){r._plugins.push(e)},r.prototype.render=function(){this.renderer.render(this.stage)},Object.defineProperty(r.prototype,"view",{get:function(){return this.renderer.view},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"screen",{get:function(){return this.renderer.screen},enumerable:!1,configurable:!0}),r.prototype.destroy=function(e,t){var i=this,n=r._plugins.slice(0);n.reverse(),n.forEach(function(o){o.destroy.call(i)}),this.stage.destroy(t),this.stage=null,this.renderer.destroy(e),this.renderer=null},r._plugins=[],r}(),qg=function(){function r(){}return r.init=function(e){var t=this;Object.defineProperty(this,"resizeTo",{set:function(i){globalThis.removeEventListener("resize",this.queueResize),this._resizeTo=i,i&&(globalThis.addEventListener("resize",this.queueResize),this.resize())},get:function(){return this._resizeTo}}),this.queueResize=function(){!t._resizeTo||(t.cancelResize(),t._resizeId=requestAnimationFrame(function(){return t.resize()}))},this.cancelResize=function(){t._resizeId&&(cancelAnimationFrame(t._resizeId),t._resizeId=null)},this.resize=function(){if(!!t._resizeTo){t.cancelResize();var i,n;if(t._resizeTo===globalThis.window)i=globalThis.innerWidth,n=globalThis.innerHeight;else{var o=t._resizeTo,s=o.clientWidth,a=o.clientHeight;i=s,n=a}t.renderer.resize(i,n)}},this._resizeId=null,this._resizeTo=null,this.resizeTo=e.resizeTo||null},r.destroy=function(){globalThis.removeEventListener("resize",this.queueResize),this.cancelResize(),this.cancelResize=null,this.queueResize=null,this.resizeTo=null,this.resize=null},r}();Yi.registerPlugin(qg);/*!
 * @pixi/extract - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/extract is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var jh=new K,Hh=4,fc=function(){function r(e){this.renderer=e}return r.prototype.image=function(e,t,i){var n=new Image;return n.src=this.base64(e,t,i),n},r.prototype.base64=function(e,t,i){return this.canvas(e).toDataURL(t,i)},r.prototype.canvas=function(e){var t=this.renderer,i,n,o=!1,s,a=!1;e&&(e instanceof Me?s=e:(s=this.renderer.generateTexture(e),a=!0)),s?(i=s.baseTexture.resolution,n=s.frame,o=!1,t.renderTexture.bind(s)):(i=this.renderer.resolution,o=!0,n=jh,n.width=this.renderer.width,n.height=this.renderer.height,t.renderTexture.bind(null));var u=Math.floor(n.width*i+1e-4),h=Math.floor(n.height*i+1e-4),l=new os(u,h,1),c=new Uint8Array(Hh*u*h),f=t.gl;f.readPixels(n.x*i,n.y*i,u,h,f.RGBA,f.UNSIGNED_BYTE,c);var d=l.context.getImageData(0,0,u,h);if(r.arrayPostDivide(c,d.data),l.context.putImageData(d,0,0),o){var v=new os(l.width,l.height,1);v.context.scale(1,-1),v.context.drawImage(l.canvas,0,-h),l.destroy(),l=v}return a&&s.destroy(!0),l.canvas},r.prototype.pixels=function(e){var t=this.renderer,i,n,o,s=!1;e&&(e instanceof Me?o=e:(o=this.renderer.generateTexture(e),s=!0)),o?(i=o.baseTexture.resolution,n=o.frame,t.renderTexture.bind(o)):(i=t.resolution,n=jh,n.width=t.width,n.height=t.height,t.renderTexture.bind(null));var a=n.width*i,u=n.height*i,h=new Uint8Array(Hh*a*u),l=t.gl;return l.readPixels(n.x*i,n.y*i,a,u,l.RGBA,l.UNSIGNED_BYTE,h),s&&o.destroy(!0),r.arrayPostDivide(h,h),h},r.prototype.destroy=function(){this.renderer=null},r.arrayPostDivide=function(e,t){for(var i=0;i<e.length;i+=4){var n=t[i+3]=e[i+3];n!==0?(t[i]=Math.round(Math.min(e[i]*255/n,255)),t[i+1]=Math.round(Math.min(e[i+1]*255/n,255)),t[i+2]=Math.round(Math.min(e[i+2]*255/n,255))):(t[i]=e[i],t[i+1]=e[i+1],t[i+2]=e[i+2])}},r}();/*!
 * @pixi/loaders - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/loaders is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var pn=function(){function r(e,t,i){t===void 0&&(t=!1),this._fn=e,this._once=t,this._thisArg=i,this._next=this._prev=this._owner=null}return r.prototype.detach=function(){return this._owner===null?!1:(this._owner.detach(this),!0)},r}();function Vh(r,e){return r._head?(r._tail._next=e,e._prev=r._tail,r._tail=e):(r._head=e,r._tail=e),e._owner=r,e}var Ie=function(){function r(){this._head=this._tail=void 0}return r.prototype.handlers=function(e){e===void 0&&(e=!1);var t=this._head;if(e)return!!t;for(var i=[];t;)i.push(t),t=t._next;return i},r.prototype.has=function(e){if(!(e instanceof pn))throw new Error("MiniSignal#has(): First arg must be a SignalBinding object.");return e._owner===this},r.prototype.dispatch=function(){for(var e=arguments,t=[],i=0;i<arguments.length;i++)t[i]=e[i];var n=this._head;if(!n)return!1;for(;n;)n._once&&this.detach(n),n._fn.apply(n._thisArg,t),n=n._next;return!0},r.prototype.add=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#add(): First arg must be a Function.");return Vh(this,new pn(e,!1,t))},r.prototype.once=function(e,t){if(t===void 0&&(t=null),typeof e!="function")throw new Error("MiniSignal#once(): First arg must be a Function.");return Vh(this,new pn(e,!0,t))},r.prototype.detach=function(e){if(!(e instanceof pn))throw new Error("MiniSignal#detach(): First arg must be a SignalBinding object.");return e._owner!==this?this:(e._prev&&(e._prev._next=e._next),e._next&&(e._next._prev=e._prev),e===this._head?(this._head=e._next,e._next===null&&(this._tail=null)):e===this._tail&&(this._tail=e._prev,this._tail._next=null),e._owner=null,this)},r.prototype.detachAll=function(){var e=this._head;if(!e)return this;for(this._head=this._tail=null;e;)e._owner=null,e=e._next;return this},r}();function cc(r,e){e=e||{};for(var t={key:["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],q:{name:"queryKey",parser:/(?:^|&)([^&=]*)=?([^&]*)/g},parser:{strict:/^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,loose:/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/}},i=t.parser[e.strictMode?"strict":"loose"].exec(r),n={},o=14;o--;)n[t.key[o]]=i[o]||"";return n[t.q.name]={},n[t.key[12]].replace(t.q.parser,function(s,a,u){a&&(n[t.q.name][a]=u)}),n}var To,vn=null,Kg=0,Wh=200,Zg=204,Jg=1223,Qg=2;function Yh(){}function $h(r,e,t){e&&e.indexOf(".")===0&&(e=e.substring(1)),e&&(r[e]=t)}function Co(r){return r.toString().replace("object ","")}var ct=function(){function r(e,t,i){if(this._dequeue=Yh,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=null,this._boundOnError=null,this._boundOnProgress=null,this._boundOnTimeout=null,this._boundXhrOnError=null,this._boundXhrOnTimeout=null,this._boundXhrOnAbort=null,this._boundXhrOnLoad=null,typeof e!="string"||typeof t!="string")throw new Error("Both name and url are required for constructing a resource.");i=i||{},this._flags=0,this._setFlag(r.STATUS_FLAGS.DATA_URL,t.indexOf("data:")===0),this.name=e,this.url=t,this.extension=this._getExtension(),this.data=null,this.crossOrigin=i.crossOrigin===!0?"anonymous":i.crossOrigin,this.timeout=i.timeout||0,this.loadType=i.loadType||this._determineLoadType(),this.xhrType=i.xhrType,this.metadata=i.metadata||{},this.error=null,this.xhr=null,this.children=[],this.type=r.TYPE.UNKNOWN,this.progressChunk=0,this._dequeue=Yh,this._onLoadBinding=null,this._elementTimer=0,this._boundComplete=this.complete.bind(this),this._boundOnError=this._onError.bind(this),this._boundOnProgress=this._onProgress.bind(this),this._boundOnTimeout=this._onTimeout.bind(this),this._boundXhrOnError=this._xhrOnError.bind(this),this._boundXhrOnTimeout=this._xhrOnTimeout.bind(this),this._boundXhrOnAbort=this._xhrOnAbort.bind(this),this._boundXhrOnLoad=this._xhrOnLoad.bind(this),this.onStart=new Ie,this.onProgress=new Ie,this.onComplete=new Ie,this.onAfterMiddleware=new Ie}return r.setExtensionLoadType=function(e,t){$h(r._loadTypeMap,e,t)},r.setExtensionXhrType=function(e,t){$h(r._xhrTypeMap,e,t)},Object.defineProperty(r.prototype,"isDataUrl",{get:function(){return this._hasFlag(r.STATUS_FLAGS.DATA_URL)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isComplete",{get:function(){return this._hasFlag(r.STATUS_FLAGS.COMPLETE)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"isLoading",{get:function(){return this._hasFlag(r.STATUS_FLAGS.LOADING)},enumerable:!1,configurable:!0}),r.prototype.complete=function(){this._clearEvents(),this._finish()},r.prototype.abort=function(e){if(!this.error){if(this.error=new Error(e),this._clearEvents(),this.xhr)this.xhr.abort();else if(this.xdr)this.xdr.abort();else if(this.data)if(this.data.src)this.data.src=r.EMPTY_GIF;else for(;this.data.firstChild;)this.data.removeChild(this.data.firstChild);this._finish()}},r.prototype.load=function(e){var t=this;if(!this.isLoading){if(this.isComplete){e&&setTimeout(function(){return e(t)},1);return}else e&&this.onComplete.once(e);switch(this._setFlag(r.STATUS_FLAGS.LOADING,!0),this.onStart.dispatch(this),(this.crossOrigin===!1||typeof this.crossOrigin!="string")&&(this.crossOrigin=this._determineCrossOrigin(this.url)),this.loadType){case r.LOAD_TYPE.IMAGE:this.type=r.TYPE.IMAGE,this._loadElement("image");break;case r.LOAD_TYPE.AUDIO:this.type=r.TYPE.AUDIO,this._loadSourceElement("audio");break;case r.LOAD_TYPE.VIDEO:this.type=r.TYPE.VIDEO,this._loadSourceElement("video");break;case r.LOAD_TYPE.XHR:default:typeof To=="undefined"&&(To=!!(globalThis.XDomainRequest&&!("withCredentials"in new XMLHttpRequest))),To&&this.crossOrigin?this._loadXdr():this._loadXhr();break}}},r.prototype._hasFlag=function(e){return(this._flags&e)!==0},r.prototype._setFlag=function(e,t){this._flags=t?this._flags|e:this._flags&~e},r.prototype._clearEvents=function(){clearTimeout(this._elementTimer),this.data&&this.data.removeEventListener&&(this.data.removeEventListener("error",this._boundOnError,!1),this.data.removeEventListener("load",this._boundComplete,!1),this.data.removeEventListener("progress",this._boundOnProgress,!1),this.data.removeEventListener("canplaythrough",this._boundComplete,!1)),this.xhr&&(this.xhr.removeEventListener?(this.xhr.removeEventListener("error",this._boundXhrOnError,!1),this.xhr.removeEventListener("timeout",this._boundXhrOnTimeout,!1),this.xhr.removeEventListener("abort",this._boundXhrOnAbort,!1),this.xhr.removeEventListener("progress",this._boundOnProgress,!1),this.xhr.removeEventListener("load",this._boundXhrOnLoad,!1)):(this.xhr.onerror=null,this.xhr.ontimeout=null,this.xhr.onprogress=null,this.xhr.onload=null))},r.prototype._finish=function(){if(this.isComplete)throw new Error("Complete called again for an already completed resource.");this._setFlag(r.STATUS_FLAGS.COMPLETE,!0),this._setFlag(r.STATUS_FLAGS.LOADING,!1),this.onComplete.dispatch(this)},r.prototype._loadElement=function(e){this.metadata.loadElement?this.data=this.metadata.loadElement:e==="image"&&typeof globalThis.Image!="undefined"?this.data=new Image:this.data=document.createElement(e),this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),this.metadata.skipSource||(this.data.src=this.url),this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadSourceElement=function(e){if(this.metadata.loadElement?this.data=this.metadata.loadElement:e==="audio"&&typeof globalThis.Audio!="undefined"?this.data=new Audio:this.data=document.createElement(e),this.data===null){this.abort("Unsupported element: "+e);return}if(this.crossOrigin&&(this.data.crossOrigin=this.crossOrigin),!this.metadata.skipSource)if(navigator.isCocoonJS)this.data.src=Array.isArray(this.url)?this.url[0]:this.url;else if(Array.isArray(this.url))for(var t=this.metadata.mimeType,i=0;i<this.url.length;++i)this.data.appendChild(this._createSource(e,this.url[i],Array.isArray(t)?t[i]:t));else{var t=this.metadata.mimeType;this.data.appendChild(this._createSource(e,this.url,Array.isArray(t)?t[0]:t))}this.data.addEventListener("error",this._boundOnError,!1),this.data.addEventListener("load",this._boundComplete,!1),this.data.addEventListener("progress",this._boundOnProgress,!1),this.data.addEventListener("canplaythrough",this._boundComplete,!1),this.data.load(),this.timeout&&(this._elementTimer=setTimeout(this._boundOnTimeout,this.timeout))},r.prototype._loadXhr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new XMLHttpRequest;this.crossOrigin==="use-credentials"&&(e.withCredentials=!0),e.open("GET",this.url,!0),e.timeout=this.timeout,this.xhrType===r.XHR_RESPONSE_TYPE.JSON||this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT?e.responseType=r.XHR_RESPONSE_TYPE.TEXT:e.responseType=this.xhrType,e.addEventListener("error",this._boundXhrOnError,!1),e.addEventListener("timeout",this._boundXhrOnTimeout,!1),e.addEventListener("abort",this._boundXhrOnAbort,!1),e.addEventListener("progress",this._boundOnProgress,!1),e.addEventListener("load",this._boundXhrOnLoad,!1),e.send()},r.prototype._loadXdr=function(){typeof this.xhrType!="string"&&(this.xhrType=this._determineXhrType());var e=this.xhr=new globalThis.XDomainRequest;e.timeout=this.timeout||5e3,e.onerror=this._boundXhrOnError,e.ontimeout=this._boundXhrOnTimeout,e.onprogress=this._boundOnProgress,e.onload=this._boundXhrOnLoad,e.open("GET",this.url,!0),setTimeout(function(){return e.send()},1)},r.prototype._createSource=function(e,t,i){i||(i=e+"/"+this._getExtension(t));var n=document.createElement("source");return n.src=t,n.type=i,n},r.prototype._onError=function(e){this.abort("Failed to load element using: "+e.target.nodeName)},r.prototype._onProgress=function(e){e&&e.lengthComputable&&this.onProgress.dispatch(this,e.loaded/e.total)},r.prototype._onTimeout=function(){this.abort("Load timed out.")},r.prototype._xhrOnError=function(){var e=this.xhr;this.abort(Co(e)+" Request failed. Status: "+e.status+', text: "'+e.statusText+'"')},r.prototype._xhrOnTimeout=function(){var e=this.xhr;this.abort(Co(e)+" Request timed out.")},r.prototype._xhrOnAbort=function(){var e=this.xhr;this.abort(Co(e)+" Request was aborted by the user.")},r.prototype._xhrOnLoad=function(){var e=this.xhr,t="",i=typeof e.status=="undefined"?Wh:e.status;(e.responseType===""||e.responseType==="text"||typeof e.responseType=="undefined")&&(t=e.responseText),i===Kg&&(t.length>0||e.responseType===r.XHR_RESPONSE_TYPE.BUFFER)?i=Wh:i===Jg&&(i=Zg);var n=i/100|0;if(n===Qg)if(this.xhrType===r.XHR_RESPONSE_TYPE.TEXT)this.data=t,this.type=r.TYPE.TEXT;else if(this.xhrType===r.XHR_RESPONSE_TYPE.JSON)try{this.data=JSON.parse(t),this.type=r.TYPE.JSON}catch(a){this.abort("Error trying to parse loaded json: "+a);return}else if(this.xhrType===r.XHR_RESPONSE_TYPE.DOCUMENT)try{if(globalThis.DOMParser){var o=new DOMParser;this.data=o.parseFromString(t,"text/xml")}else{var s=document.createElement("div");s.innerHTML=t,this.data=s}this.type=r.TYPE.XML}catch(a){this.abort("Error trying to parse loaded xml: "+a);return}else this.data=e.response||t;else{this.abort("["+e.status+"] "+e.statusText+": "+e.responseURL);return}this.complete()},r.prototype._determineCrossOrigin=function(e,t){if(e.indexOf("data:")===0)return"";if(globalThis.origin!==globalThis.location.origin)return"anonymous";t=t||globalThis.location,vn||(vn=document.createElement("a")),vn.href=e;var i=cc(vn.href,{strictMode:!0}),n=!i.port&&t.port===""||i.port===t.port,o=i.protocol?i.protocol+":":"";return i.host!==t.hostname||!n||o!==t.protocol?"anonymous":""},r.prototype._determineXhrType=function(){return r._xhrTypeMap[this.extension]||r.XHR_RESPONSE_TYPE.TEXT},r.prototype._determineLoadType=function(){return r._loadTypeMap[this.extension]||r.LOAD_TYPE.XHR},r.prototype._getExtension=function(e){e===void 0&&(e=this.url);var t="";if(this.isDataUrl){var i=e.indexOf("/");t=e.substring(i+1,e.indexOf(";",i))}else{var n=e.indexOf("?"),o=e.indexOf("#"),s=Math.min(n>-1?n:e.length,o>-1?o:e.length);e=e.substring(0,s),t=e.substring(e.lastIndexOf(".")+1)}return t.toLowerCase()},r.prototype._getMimeFromXhrType=function(e){switch(e){case r.XHR_RESPONSE_TYPE.BUFFER:return"application/octet-binary";case r.XHR_RESPONSE_TYPE.BLOB:return"application/blob";case r.XHR_RESPONSE_TYPE.DOCUMENT:return"application/xml";case r.XHR_RESPONSE_TYPE.JSON:return"application/json";case r.XHR_RESPONSE_TYPE.DEFAULT:case r.XHR_RESPONSE_TYPE.TEXT:default:return"text/plain"}},r}();(function(r){(function(e){e[e.NONE=0]="NONE",e[e.DATA_URL=1]="DATA_URL",e[e.COMPLETE=2]="COMPLETE",e[e.LOADING=4]="LOADING"})(r.STATUS_FLAGS||(r.STATUS_FLAGS={})),function(e){e[e.UNKNOWN=0]="UNKNOWN",e[e.JSON=1]="JSON",e[e.XML=2]="XML",e[e.IMAGE=3]="IMAGE",e[e.AUDIO=4]="AUDIO",e[e.VIDEO=5]="VIDEO",e[e.TEXT=6]="TEXT"}(r.TYPE||(r.TYPE={})),function(e){e[e.XHR=1]="XHR",e[e.IMAGE=2]="IMAGE",e[e.AUDIO=3]="AUDIO",e[e.VIDEO=4]="VIDEO"}(r.LOAD_TYPE||(r.LOAD_TYPE={})),function(e){e.DEFAULT="text",e.BUFFER="arraybuffer",e.BLOB="blob",e.DOCUMENT="document",e.JSON="json",e.TEXT="text"}(r.XHR_RESPONSE_TYPE||(r.XHR_RESPONSE_TYPE={})),r._loadTypeMap={gif:r.LOAD_TYPE.IMAGE,png:r.LOAD_TYPE.IMAGE,bmp:r.LOAD_TYPE.IMAGE,jpg:r.LOAD_TYPE.IMAGE,jpeg:r.LOAD_TYPE.IMAGE,tif:r.LOAD_TYPE.IMAGE,tiff:r.LOAD_TYPE.IMAGE,webp:r.LOAD_TYPE.IMAGE,tga:r.LOAD_TYPE.IMAGE,svg:r.LOAD_TYPE.IMAGE,"svg+xml":r.LOAD_TYPE.IMAGE,mp3:r.LOAD_TYPE.AUDIO,ogg:r.LOAD_TYPE.AUDIO,wav:r.LOAD_TYPE.AUDIO,mp4:r.LOAD_TYPE.VIDEO,webm:r.LOAD_TYPE.VIDEO},r._xhrTypeMap={xhtml:r.XHR_RESPONSE_TYPE.DOCUMENT,html:r.XHR_RESPONSE_TYPE.DOCUMENT,htm:r.XHR_RESPONSE_TYPE.DOCUMENT,xml:r.XHR_RESPONSE_TYPE.DOCUMENT,tmx:r.XHR_RESPONSE_TYPE.DOCUMENT,svg:r.XHR_RESPONSE_TYPE.DOCUMENT,tsx:r.XHR_RESPONSE_TYPE.DOCUMENT,gif:r.XHR_RESPONSE_TYPE.BLOB,png:r.XHR_RESPONSE_TYPE.BLOB,bmp:r.XHR_RESPONSE_TYPE.BLOB,jpg:r.XHR_RESPONSE_TYPE.BLOB,jpeg:r.XHR_RESPONSE_TYPE.BLOB,tif:r.XHR_RESPONSE_TYPE.BLOB,tiff:r.XHR_RESPONSE_TYPE.BLOB,webp:r.XHR_RESPONSE_TYPE.BLOB,tga:r.XHR_RESPONSE_TYPE.BLOB,json:r.XHR_RESPONSE_TYPE.JSON,text:r.XHR_RESPONSE_TYPE.TEXT,txt:r.XHR_RESPONSE_TYPE.TEXT,ttf:r.XHR_RESPONSE_TYPE.BUFFER,otf:r.XHR_RESPONSE_TYPE.BUFFER},r.EMPTY_GIF="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="})(ct||(ct={}));function or(){}function t0(r){return function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];if(r===null)throw new Error("Callback was already called.");var o=r;r=null,o.apply(this,i)}}var e0=function(){function r(e,t){this.data=e,this.callback=t}return r}(),Eo=function(){function r(e,t){var i=this;if(t===void 0&&(t=1),this.workers=0,this.saturated=or,this.unsaturated=or,this.empty=or,this.drain=or,this.error=or,this.started=!1,this.paused=!1,this._tasks=[],this._insert=function(n,o,s){if(s&&typeof s!="function")throw new Error("task callback must be a function");if(i.started=!0,n==null&&i.idle()){setTimeout(function(){return i.drain()},1);return}var a=new e0(n,typeof s=="function"?s:or);o?i._tasks.unshift(a):i._tasks.push(a),setTimeout(i.process,1)},this.process=function(){for(;!i.paused&&i.workers<i.concurrency&&i._tasks.length;){var n=i._tasks.shift();i._tasks.length===0&&i.empty(),i.workers+=1,i.workers===i.concurrency&&i.saturated(),i._worker(n.data,t0(i._next(n)))}},this._worker=e,t===0)throw new Error("Concurrency must not be zero");this.concurrency=t,this.buffer=t/4}return r.prototype._next=function(e){var t=this;return function(){for(var i=arguments,n=[],o=0;o<arguments.length;o++)n[o]=i[o];t.workers-=1,e.callback.apply(e,n),n[0]!=null&&t.error(n[0],e.data),t.workers<=t.concurrency-t.buffer&&t.unsaturated(),t.idle()&&t.drain(),t.process()}},r.prototype.push=function(e,t){this._insert(e,!1,t)},r.prototype.kill=function(){this.workers=0,this.drain=or,this.started=!1,this._tasks=[]},r.prototype.unshift=function(e,t){this._insert(e,!0,t)},r.prototype.length=function(){return this._tasks.length},r.prototype.running=function(){return this.workers},r.prototype.idle=function(){return this._tasks.length+this.workers===0},r.prototype.pause=function(){this.paused!==!0&&(this.paused=!0)},r.prototype.resume=function(){if(this.paused!==!1){this.paused=!1;for(var e=1;e<=this.concurrency;e++)this.process()}},r.eachSeries=function(e,t,i,n){var o=0,s=e.length;function a(u){if(u||o===s){i&&i(u);return}n?setTimeout(function(){t(e[o++],a)},1):t(e[o++],a)}a()},r.queue=function(e,t){return new r(e,t)},r}(),wo=100,r0=/(#[\w-]+)?$/,ne=function(){function r(e,t){var i=this;e===void 0&&(e=""),t===void 0&&(t=10),this.progress=0,this.loading=!1,this.defaultQueryString="",this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,h){return i._loadResource(u,h)},this.resources={},this.baseUrl=e,this._beforeMiddleware=[],this._afterMiddleware=[],this._resourcesParsing=[],this._boundLoadResource=function(u,h){return i._loadResource(u,h)},this._queue=Eo.queue(this._boundLoadResource,t),this._queue.pause(),this.resources={},this.onProgress=new Ie,this.onError=new Ie,this.onLoad=new Ie,this.onStart=new Ie,this.onComplete=new Ie;for(var n=0;n<r._plugins.length;++n){var o=r._plugins[n],s=o.pre,a=o.use;s&&this.pre(s),a&&this.use(a)}this._protected=!1}return r.prototype._add=function(e,t,i,n){if(this.loading&&(!i||!i.parentResource))throw new Error("Cannot add resources while the loader is running.");if(this.resources[e])throw new Error('Resource named "'+e+'" already exists.');if(t=this._prepareUrl(t),this.resources[e]=new ct(e,t,i),typeof n=="function"&&this.resources[e].onAfterMiddleware.once(n),this.loading){for(var o=i.parentResource,s=[],a=0;a<o.children.length;++a)o.children[a].isComplete||s.push(o.children[a]);var u=o.progressChunk*(s.length+1),h=u/(s.length+2);o.children.push(this.resources[e]),o.progressChunk=h;for(var a=0;a<s.length;++a)s[a].progressChunk=h;this.resources[e].progressChunk=h}return this._queue.push(this.resources[e]),this},r.prototype.pre=function(e){return this._beforeMiddleware.push(e),this},r.prototype.use=function(e){return this._afterMiddleware.push(e),this},r.prototype.reset=function(){this.progress=0,this.loading=!1,this._queue.kill(),this._queue.pause();for(var e in this.resources){var t=this.resources[e];t._onLoadBinding&&t._onLoadBinding.detach(),t.isLoading&&t.abort("loader reset")}return this.resources={},this},r.prototype.load=function(e){if(typeof e=="function"&&this.onComplete.once(e),this.loading)return this;if(this._queue.idle())this._onStart(),this._onComplete();else{for(var t=this._queue._tasks.length,i=wo/t,n=0;n<this._queue._tasks.length;++n)this._queue._tasks[n].data.progressChunk=i;this._onStart(),this._queue.resume()}return this},Object.defineProperty(r.prototype,"concurrency",{get:function(){return this._queue.concurrency},set:function(e){this._queue.concurrency=e},enumerable:!1,configurable:!0}),r.prototype._prepareUrl=function(e){var t=cc(e,{strictMode:!0}),i;if(t.protocol||!t.path||e.indexOf("//")===0?i=e:this.baseUrl.length&&this.baseUrl.lastIndexOf("/")!==this.baseUrl.length-1&&e.charAt(0)!=="/"?i=this.baseUrl+"/"+e:i=this.baseUrl+e,this.defaultQueryString){var n=r0.exec(i)[0];i=i.slice(0,i.length-n.length),i.indexOf("?")!==-1?i+="&"+this.defaultQueryString:i+="?"+this.defaultQueryString,i+=n}return i},r.prototype._loadResource=function(e,t){var i=this;e._dequeue=t,Eo.eachSeries(this._beforeMiddleware,function(n,o){n.call(i,e,function(){o(e.isComplete?{}:null)})},function(){e.isComplete?i._onLoad(e):(e._onLoadBinding=e.onComplete.once(i._onLoad,i),e.load())},!0)},r.prototype._onStart=function(){this.progress=0,this.loading=!0,this.onStart.dispatch(this)},r.prototype._onComplete=function(){this.progress=wo,this.loading=!1,this.onComplete.dispatch(this,this.resources)},r.prototype._onLoad=function(e){var t=this;e._onLoadBinding=null,this._resourcesParsing.push(e),e._dequeue(),Eo.eachSeries(this._afterMiddleware,function(i,n){i.call(t,e,n)},function(){e.onAfterMiddleware.dispatch(e),t.progress=Math.min(wo,t.progress+e.progressChunk),t.onProgress.dispatch(t,e),e.error?t.onError.dispatch(e.error,t,e):t.onLoad.dispatch(t,e),t._resourcesParsing.splice(t._resourcesParsing.indexOf(e),1),t._queue.idle()&&t._resourcesParsing.length===0&&t._onComplete()},!0)},r.prototype.destroy=function(){this._protected||this.reset()},Object.defineProperty(r,"shared",{get:function(){var e=r._shared;return e||(e=new r,e._protected=!0,r._shared=e),e},enumerable:!1,configurable:!0}),r.registerPlugin=function(e){return r._plugins.push(e),e.add&&e.add(),r},r._plugins=[],r}();ne.prototype.add=function(e,t,i,n){if(Array.isArray(e)){for(var o=0;o<e.length;++o)this.add(e[o]);return this}if(typeof e=="object"&&(i=e,n=t||i.callback||i.onComplete,t=i.url,e=i.name||i.key||i.url),typeof t!="string"&&(n=i,i=t,t=e),typeof t!="string")throw new Error("No url passed to add resource to loader.");return typeof i=="function"&&(n=i,i=null),this._add(e,t,i,n)};var dc=function(){function r(){}return r.init=function(e){e=Object.assign({sharedLoader:!1},e),this.loader=e.sharedLoader?ne.shared:new ne},r.destroy=function(){this.loader&&(this.loader.destroy(),this.loader=null)},r}(),pc=function(){function r(){}return r.add=function(){ct.setExtensionLoadType("svg",ct.LOAD_TYPE.XHR),ct.setExtensionXhrType("svg",ct.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){if(e.data&&(e.type===ct.TYPE.IMAGE||e.extension==="svg")){var i=e.data,n=e.url,o=e.name,s=e.metadata;k.fromLoader(i,n,o,s).then(function(a){e.texture=a,t()}).catch(t)}else t()},r}(),i0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function n0(r){for(var e="",t=0;t<r.length;){for(var i=[0,0,0],n=[0,0,0,0],o=0;o<i.length;++o)t<r.length?i[o]=r.charCodeAt(t++)&255:i[o]=0;n[0]=i[0]>>2,n[1]=(i[0]&3)<<4|i[1]>>4,n[2]=(i[1]&15)<<2|i[2]>>6,n[3]=i[2]&63;var s=t-(r.length-1);switch(s){case 2:n[3]=64,n[2]=64;break;case 1:n[3]=64;break}for(var o=0;o<n.length;++o)e+=i0.charAt(n[o])}return e}function o0(r,e){if(!r.data){e();return}if(r.xhr&&r.xhrType===ct.XHR_RESPONSE_TYPE.BLOB){if(!self.Blob||typeof r.data=="string"){var t=r.xhr.getResponseHeader("content-type");if(t&&t.indexOf("image")===0){r.data=new Image,r.data.src="data:"+t+";base64,"+n0(r.xhr.responseText),r.type=ct.TYPE.IMAGE,r.data.onload=function(){r.data.onload=null,e()};return}}else if(r.data.type.indexOf("image")===0){var i=globalThis.URL||globalThis.webkitURL,n=i.createObjectURL(r.data);r.blob=r.data,r.data=new Image,r.data.src=n,r.type=ct.TYPE.IMAGE,r.data.onload=function(){i.revokeObjectURL(n),r.data.onload=null,e()};return}}e()}ne.registerPlugin({use:o0});ne.registerPlugin(pc);/*!
 * @pixi/compressed-textures - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/compressed-textures is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var rt,H;(function(r){r[r.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",r[r.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",r[r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",r[r.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",r[r.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",r[r.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",r[r.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",r[r.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",r[r.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",r[r.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",r[r.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",r[r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",r[r.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",r[r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG=35840]="COMPRESSED_RGB_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG=35842]="COMPRESSED_RGBA_PVRTC_4BPPV1_IMG",r[r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG=35841]="COMPRESSED_RGB_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG=35843]="COMPRESSED_RGBA_PVRTC_2BPPV1_IMG",r[r.COMPRESSED_RGB_ETC1_WEBGL=36196]="COMPRESSED_RGB_ETC1_WEBGL",r[r.COMPRESSED_RGB_ATC_WEBGL=35986]="COMPRESSED_RGB_ATC_WEBGL",r[r.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL=35986]="COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL",r[r.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL=34798]="COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL"})(H||(H={}));var Ni=(rt={},rt[H.COMPRESSED_RGB_S3TC_DXT1_EXT]=.5,rt[H.COMPRESSED_RGBA_S3TC_DXT1_EXT]=.5,rt[H.COMPRESSED_RGBA_S3TC_DXT3_EXT]=1,rt[H.COMPRESSED_RGBA_S3TC_DXT5_EXT]=1,rt[H.COMPRESSED_SRGB_S3TC_DXT1_EXT]=.5,rt[H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT]=.5,rt[H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT]=1,rt[H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT]=1,rt[H.COMPRESSED_R11_EAC]=.5,rt[H.COMPRESSED_SIGNED_R11_EAC]=.5,rt[H.COMPRESSED_RG11_EAC]=1,rt[H.COMPRESSED_SIGNED_RG11_EAC]=1,rt[H.COMPRESSED_RGB8_ETC2]=.5,rt[H.COMPRESSED_RGBA8_ETC2_EAC]=1,rt[H.COMPRESSED_SRGB8_ETC2]=.5,rt[H.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC]=1,rt[H.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,rt[H.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2]=.5,rt[H.COMPRESSED_RGB_PVRTC_4BPPV1_IMG]=.5,rt[H.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG]=.5,rt[H.COMPRESSED_RGB_PVRTC_2BPPV1_IMG]=.25,rt[H.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG]=.25,rt[H.COMPRESSED_RGB_ETC1_WEBGL]=.5,rt[H.COMPRESSED_RGB_ATC_WEBGL]=.5,rt[H.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL]=1,rt[H.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL]=1,rt);/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ps=function(r,e){return ps=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},ps(r,e)};function vc(r,e){ps(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function s0(r,e,t,i){return new(t||(t=Promise))(function(n,o){function s(h){try{u(i.next(h))}catch(l){o(l)}}function a(h){try{u(i.throw(h))}catch(l){o(l)}}function u(h){h.done?n(h.value):new t(function(l){l(h.value)}).then(s,a)}u((i=i.apply(r,e||[])).next())})}function a0(r,e){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},i,n,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(h){return function(l){return u([h,l])}}function u(h){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,n&&(o=h[0]&2?n.return:h[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,h[1])).done)return o;switch(n=0,o&&(h=[h[0]&2,o.value]),h[0]){case 0:case 1:o=h;break;case 4:return t.label++,{value:h[1],done:!1};case 5:t.label++,n=h[1],h=[0];continue;case 7:h=t.ops.pop(),t.trys.pop();continue;default:if(o=t.trys,!(o=o.length>0&&o[o.length-1])&&(h[0]===6||h[0]===2)){t=0;continue}if(h[0]===3&&(!o||h[1]>o[0]&&h[1]<o[3])){t.label=h[1];break}if(h[0]===6&&t.label<o[1]){t.label=o[1],o=h;break}if(o&&t.label<o[2]){t.label=o[2],t.ops.push(h);break}o[2]&&t.ops.pop(),t.trys.pop();continue}h=e.call(r,t)}catch(l){h=[6,l],n=0}finally{i=o=0}if(h[0]&5)throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}}var _c=function(r){vc(e,r);function e(t,i){i===void 0&&(i={width:1,height:1,autoLoad:!0});var n=this,o,s;return typeof t=="string"?(o=t,s=new Uint8Array):(o=null,s=t),n=r.call(this,s,i)||this,n.origin=o,n.buffer=s?new Nn(s):null,n.origin&&i.autoLoad!==!1&&n.load(),s&&s.length&&(n.loaded=!0,n.onBlobLoaded(n.buffer.rawBinaryData)),n}return e.prototype.onBlobLoaded=function(t){},e.prototype.load=function(){return s0(this,void 0,Promise,function(){var t,i,n;return a0(this,function(o){switch(o.label){case 0:return[4,fetch(this.origin)];case 1:return t=o.sent(),[4,t.blob()];case 2:return i=o.sent(),[4,i.arrayBuffer()];case 3:return n=o.sent(),this.data=new Uint32Array(n),this.buffer=new Nn(n),this.loaded=!0,this.onBlobLoaded(n),this.update(),[2,this]}})})},e}(Ir),Fn=function(r){vc(e,r);function e(t,i){var n=r.call(this,t,i)||this;return n.format=i.format,n.levels=i.levels||1,n._width=i.width,n._height=i.height,n._extension=e._formatToExtension(n.format),(i.levelBuffers||n.buffer)&&(n._levelBuffers=i.levelBuffers||e._createLevelBuffers(t instanceof Uint8Array?t:n.buffer.uint8View,n.format,n.levels,4,4,n.width,n.height)),n}return e.prototype.upload=function(t,i,n){var o=t.gl,s=t.context.extensions[this._extension];if(!s)throw new Error(this._extension+" textures are not supported on the current machine");if(!this._levelBuffers)return!1;for(var a=0,u=this.levels;a<u;a++){var h=this._levelBuffers[a],l=h.levelID,c=h.levelWidth,f=h.levelHeight,d=h.levelBuffer;o.compressedTexImage2D(o.TEXTURE_2D,l,this.format,c,f,0,d)}return!0},e.prototype.onBlobLoaded=function(){this._levelBuffers=e._createLevelBuffers(this.buffer.uint8View,this.format,this.levels,4,4,this.width,this.height)},e._formatToExtension=function(t){if(t>=33776&&t<=33779)return"s3tc";if(t>=37488&&t<=37497)return"etc";if(t>=35840&&t<=35843)return"pvrtc";if(t>=36196)return"etc1";if(t>=35986&&t<=34798)return"atc";throw new Error("Invalid (compressed) texture format given!")},e._createLevelBuffers=function(t,i,n,o,s,a,u){for(var h=new Array(n),l=t.byteOffset,c=a,f=u,d=c+o-1&~(o-1),v=f+s-1&~(s-1),p=d*v*Ni[i],_=0;_<n;_++)h[_]={levelID:_,levelWidth:n>1?c:d,levelHeight:n>1?f:v,levelBuffer:new Uint8Array(t.buffer,l,p)},l+=p,c=c>>1||1,f=f>>1||1,d=c+o-1&~(o-1),v=f+s-1&~(s-1),p=d*v*Ni[i];return h},e}(_c),mc=function(){function r(){}return r.use=function(e,t){var i=e.data,n=this;if(e.type===ct.TYPE.JSON&&i&&i.cacheID&&i.textures){for(var o=i.textures,s=void 0,a=void 0,u=0,h=o.length;u<h;u++){var l=o[u],c=l.src,f=l.format;if(f||(a=c),r.textureFormats[f]){s=c;break}}if(s=s||a,!s){t(new Error("Cannot load compressed-textures in "+e.url+", make sure you provide a fallback"));return}if(s===e.url){t(new Error("URL of compressed texture cannot be the same as the manifest's URL"));return}var d={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},v=mr.resolve(e.url.replace(n.baseUrl,""),s),p=i.cacheID;n.add(p,v,d,function(_){if(_.error){t(_.error);return}var m=_.texture,y=m===void 0?null:m,b=_.textures,C=b===void 0?{}:b;Object.assign(e,{texture:y,textures:C}),t()})}else t()},Object.defineProperty(r,"textureExtensions",{get:function(){if(!r._textureExtensions){var e=document.createElement("canvas"),t=e.getContext("webgl");if(!t)return console.warn("WebGL not available for compressed textures. Silently failing."),{};var i={s3tc:t.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:t.getExtension("WEBGL_compressed_texture_etc"),etc1:t.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:t.getExtension("WEBGL_compressed_texture_atc"),astc:t.getExtension("WEBGL_compressed_texture_astc")};r._textureExtensions=i}return r._textureExtensions},enumerable:!1,configurable:!0}),Object.defineProperty(r,"textureFormats",{get:function(){if(!r._textureFormats){var e=r.textureExtensions;r._textureFormats={};for(var t in e){var i=e[t];!i||Object.assign(r._textureFormats,Object.getPrototypeOf(i))}}return r._textureFormats},enumerable:!1,configurable:!0}),r}();function gc(r,e,t){var i={textures:{},texture:null};if(!e)return i;var n=e.map(function(o){return new k(new q(o,Object.assign({mipmap:ee.OFF,alphaMode:re.NO_PREMULTIPLIED_ALPHA},t)))});return n.forEach(function(o,s){var a=o.baseTexture,u=r+"-"+(s+1);q.addToCache(a,u),k.addToCache(o,u),s===0&&(q.addToCache(a,r),k.addToCache(o,r),i.texture=o),i.textures[u]=o}),i}var ui,se;ct.setExtensionXhrType("dds",ct.XHR_RESPONSE_TYPE.BUFFER);var Ao=4,_n=124,u0=32,qh=20,h0=542327876,mn={SIZE:1,FLAGS:2,HEIGHT:3,WIDTH:4,MIPMAP_COUNT:7,PIXEL_FORMAT:19},l0={SIZE:0,FLAGS:1,FOURCC:2,RGB_BITCOUNT:3,R_BIT_MASK:4,G_BIT_MASK:5,B_BIT_MASK:6,A_BIT_MASK:7},gn={DXGI_FORMAT:0,RESOURCE_DIMENSION:1,MISC_FLAG:2,ARRAY_SIZE:3,MISC_FLAGS2:4},ue;(function(r){r[r.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",r[r.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",r[r.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",r[r.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",r[r.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",r[r.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",r[r.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",r[r.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",r[r.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",r[r.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",r[r.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",r[r.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",r[r.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",r[r.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",r[r.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",r[r.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",r[r.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",r[r.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",r[r.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",r[r.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",r[r.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",r[r.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",r[r.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",r[r.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",r[r.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",r[r.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",r[r.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",r[r.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",r[r.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",r[r.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",r[r.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",r[r.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",r[r.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",r[r.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",r[r.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",r[r.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",r[r.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",r[r.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",r[r.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",r[r.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",r[r.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",r[r.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",r[r.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",r[r.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",r[r.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",r[r.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",r[r.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",r[r.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",r[r.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",r[r.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",r[r.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",r[r.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",r[r.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",r[r.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",r[r.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",r[r.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",r[r.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",r[r.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",r[r.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",r[r.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",r[r.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",r[r.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",r[r.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",r[r.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",r[r.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",r[r.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",r[r.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",r[r.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",r[r.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",r[r.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",r[r.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",r[r.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",r[r.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",r[r.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",r[r.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",r[r.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",r[r.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",r[r.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",r[r.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",r[r.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",r[r.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",r[r.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",r[r.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",r[r.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",r[r.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",r[r.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",r[r.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",r[r.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",r[r.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",r[r.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",r[r.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",r[r.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",r[r.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",r[r.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",r[r.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",r[r.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",r[r.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",r[r.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",r[r.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",r[r.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",r[r.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",r[r.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",r[r.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",r[r.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",r[r.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",r[r.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",r[r.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",r[r.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",r[r.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",r[r.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",r[r.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",r[r.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",r[r.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",r[r.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",r[r.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",r[r.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",r[r.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT"})(ue||(ue={}));var vs;(function(r){r[r.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",r[r.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",r[r.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D"})(vs||(vs={}));var f0=1,c0=2,d0=4,p0=64,v0=512,_0=131072,m0=827611204,g0=861165636,y0=894720068,x0=808540228,b0=4,T0=(ui={},ui[m0]=H.COMPRESSED_RGBA_S3TC_DXT1_EXT,ui[g0]=H.COMPRESSED_RGBA_S3TC_DXT3_EXT,ui[y0]=H.COMPRESSED_RGBA_S3TC_DXT5_EXT,ui),C0=(se={},se[ue.DXGI_FORMAT_BC1_TYPELESS]=H.COMPRESSED_RGBA_S3TC_DXT1_EXT,se[ue.DXGI_FORMAT_BC1_UNORM]=H.COMPRESSED_RGBA_S3TC_DXT1_EXT,se[ue.DXGI_FORMAT_BC2_TYPELESS]=H.COMPRESSED_RGBA_S3TC_DXT3_EXT,se[ue.DXGI_FORMAT_BC2_UNORM]=H.COMPRESSED_RGBA_S3TC_DXT3_EXT,se[ue.DXGI_FORMAT_BC3_TYPELESS]=H.COMPRESSED_RGBA_S3TC_DXT5_EXT,se[ue.DXGI_FORMAT_BC3_UNORM]=H.COMPRESSED_RGBA_S3TC_DXT5_EXT,se[ue.DXGI_FORMAT_BC1_UNORM_SRGB]=H.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,se[ue.DXGI_FORMAT_BC2_UNORM_SRGB]=H.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,se[ue.DXGI_FORMAT_BC3_UNORM_SRGB]=H.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT,se),yc=function(){function r(){}return r.use=function(e,t){if(e.extension==="dds"&&e.data)try{Object.assign(e,gc(e.name||e.url,r.parse(e.data),e.metadata))}catch(i){t(i);return}t()},r.parse=function(e){var t=new Uint32Array(e),i=t[0];if(i!==h0)throw new Error("Invalid DDS file magic word");var n=new Uint32Array(e,0,_n/Uint32Array.BYTES_PER_ELEMENT),o=n[mn.HEIGHT],s=n[mn.WIDTH],a=n[mn.MIPMAP_COUNT],u=new Uint32Array(e,mn.PIXEL_FORMAT*Uint32Array.BYTES_PER_ELEMENT,u0/Uint32Array.BYTES_PER_ELEMENT),h=u[f0];if(h&d0){var l=u[l0.FOURCC];if(l!==x0){var c=T0[l],f=Ao+_n,d=new Uint8Array(e,f),v=new Fn(d,{format:c,width:s,height:o,levels:a});return[v]}var p=Ao+_n,_=new Uint32Array(t.buffer,p,qh/Uint32Array.BYTES_PER_ELEMENT),m=_[gn.DXGI_FORMAT],y=_[gn.RESOURCE_DIMENSION],b=_[gn.MISC_FLAG],C=_[gn.ARRAY_SIZE],x=C0[m];if(x===void 0)throw new Error("DDSLoader cannot parse texture data with DXGI format "+m);if(b===b0)throw new Error("DDSLoader does not support cubemap textures");if(y===vs.DDS_DIMENSION_TEXTURE3D)throw new Error("DDSLoader does not supported 3D texture data");var g=new Array,E=Ao+_n+qh;if(C===1)g.push(new Uint8Array(e,E));else{for(var w=Ni[x],T=0,A=s,O=o,N=0;N<a;N++){var F=Math.max(1,A+3&-4),D=Math.max(1,O+3&-4),S=F*D*w;T+=S,A=A>>>1,O=O>>>1}for(var I=E,N=0;N<C;N++)g.push(new Uint8Array(e,I,T)),I+=T}return g.map(function(M){return new Fn(M,{format:x,width:s,height:o,levels:a})})}throw h&p0?new Error("DDSLoader does not support uncompressed texture data."):h&v0?new Error("DDSLoader does not supported YUV uncompressed texture data."):h&_0?new Error("DDSLoader does not support single-channel (lumninance) texture data!"):h&c0?new Error("DDSLoader does not support single-channel (alpha) texture data!"):new Error("DDSLoader failed to load a texture file due to an unknown reason!")},r}(),ke,we,hi;ct.setExtensionXhrType("ktx",ct.XHR_RESPONSE_TYPE.BUFFER);var Kh=[171,75,84,88,32,49,49,187,13,10,26,10],E0=67305985,ae={FILE_IDENTIFIER:0,ENDIANNESS:12,GL_TYPE:16,GL_TYPE_SIZE:20,GL_FORMAT:24,GL_INTERNAL_FORMAT:28,GL_BASE_INTERNAL_FORMAT:32,PIXEL_WIDTH:36,PIXEL_HEIGHT:40,PIXEL_DEPTH:44,NUMBER_OF_ARRAY_ELEMENTS:48,NUMBER_OF_FACES:52,NUMBER_OF_MIPMAP_LEVELS:56,BYTES_OF_KEY_VALUE_DATA:60},w0=64,_s=(ke={},ke[G.UNSIGNED_BYTE]=1,ke[G.UNSIGNED_SHORT]=2,ke[G.INT]=4,ke[G.UNSIGNED_INT]=4,ke[G.FLOAT]=4,ke[G.HALF_FLOAT]=8,ke),xc=(we={},we[R.RGBA]=4,we[R.RGB]=3,we[R.RG]=2,we[R.RED]=1,we[R.LUMINANCE]=1,we[R.LUMINANCE_ALPHA]=2,we[R.ALPHA]=1,we),bc=(hi={},hi[G.UNSIGNED_SHORT_4_4_4_4]=2,hi[G.UNSIGNED_SHORT_5_5_5_1]=2,hi[G.UNSIGNED_SHORT_5_6_5]=2,hi),Tc=function(){function r(){}return r.use=function(e,t){if(e.extension==="ktx"&&e.data)try{var i=e.name||e.url,n=r.parse(i,e.data),o=n.compressed,s=n.uncompressed;if(o)Object.assign(e,gc(i,o,e.metadata));else if(s){var a={};s.forEach(function(u,h){var l=new k(new q(u.resource,{mipmap:ee.OFF,alphaMode:re.NO_PREMULTIPLIED_ALPHA,type:u.type,format:u.format})),c=i+"-"+(h+1);q.addToCache(l.baseTexture,c),k.addToCache(l,c),h===0&&(a[i]=l,q.addToCache(l.baseTexture,i),k.addToCache(l,i)),a[c]=l}),Object.assign(e,{textures:a})}}catch(u){t(u);return}t()},r.parse=function(e,t){var i=new DataView(t);if(!r.validate(e,i))return null;var n=i.getUint32(ae.ENDIANNESS,!0)===E0,o=i.getUint32(ae.GL_TYPE,n),s=i.getUint32(ae.GL_FORMAT,n),a=i.getUint32(ae.GL_INTERNAL_FORMAT,n),u=i.getUint32(ae.PIXEL_WIDTH,n),h=i.getUint32(ae.PIXEL_HEIGHT,n)||1,l=i.getUint32(ae.PIXEL_DEPTH,n)||1,c=i.getUint32(ae.NUMBER_OF_ARRAY_ELEMENTS,n)||1,f=i.getUint32(ae.NUMBER_OF_FACES,n),d=i.getUint32(ae.NUMBER_OF_MIPMAP_LEVELS,n),v=i.getUint32(ae.BYTES_OF_KEY_VALUE_DATA,n);if(h===0||l!==1)throw new Error("Only 2D textures are supported");if(f!==1)throw new Error("CubeTextures are not supported by KTXLoader yet!");if(c!==1)throw new Error("WebGL does not support array textures");var p=4,_=4,m=u+3&-4,y=h+3&-4,b=new Array(c),C=u*h;o===0&&(C=m*y);var x;if(o!==0?_s[o]?x=_s[o]*xc[s]:x=bc[o]:x=Ni[a],x===void 0)throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");for(var g=C*x,E=g,w=u,T=h,A=m,O=y,N=w0+v,F=0;F<d;F++){for(var D=i.getUint32(N,n),S=N+4,I=0;I<c;I++){var M=b[I];M||(M=b[I]=new Array(d)),M[F]={levelID:F,levelWidth:d>1||o!==0?w:A,levelHeight:d>1||o!==0?T:O,levelBuffer:new Uint8Array(t,S,E)},S+=E}N+=D+4,N=N%4!==0?N+4-N%4:N,w=w>>1||1,T=T>>1||1,A=w+p-1&~(p-1),O=T+_-1&~(_-1),E=A*O*x}return o!==0?{uncompressed:b.map(function(V){var Q=V[0].levelBuffer,P=!1;return o===G.FLOAT?Q=new Float32Array(V[0].levelBuffer.buffer,V[0].levelBuffer.byteOffset,V[0].levelBuffer.byteLength/4):o===G.UNSIGNED_INT?(P=!0,Q=new Uint32Array(V[0].levelBuffer.buffer,V[0].levelBuffer.byteOffset,V[0].levelBuffer.byteLength/4)):o===G.INT&&(P=!0,Q=new Int32Array(V[0].levelBuffer.buffer,V[0].levelBuffer.byteOffset,V[0].levelBuffer.byteLength/4)),{resource:new Ir(Q,{width:V[0].levelWidth,height:V[0].levelHeight}),type:o,format:P?r.convertFormatToInteger(s):s}})}:{compressed:b.map(function(V){return new Fn(null,{format:a,width:u,height:h,levels:d,levelBuffers:V})})}},r.validate=function(e,t){for(var i=0;i<Kh.length;i++)if(t.getUint8(i)!==Kh[i])return console.error(e+" is not a valid *.ktx file!"),!1;return!0},r.convertFormatToInteger=function(e){switch(e){case R.RGBA:return R.RGBA_INTEGER;case R.RGB:return R.RGB_INTEGER;case R.RG:return R.RG_INTEGER;case R.RED:return R.RED_INTEGER;default:return e}},r}();/*!
 * @pixi/particle-container - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/particle-container is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ms=function(r,e){return ms=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},ms(r,e)};function Cc(r,e){ms(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var A0=function(r){Cc(e,r);function e(t,i,n,o){t===void 0&&(t=1500),n===void 0&&(n=16384),o===void 0&&(o=!1);var s=r.call(this)||this,a=16384;return n>a&&(n=a),s._properties=[!1,!0,!1,!1,!1],s._maxSize=t,s._batchSize=n,s._buffers=null,s._bufferUpdateIDs=[],s._updateID=0,s.interactiveChildren=!1,s.blendMode=B.NORMAL,s.autoResize=o,s.roundPixels=!0,s.baseTexture=null,s.setProperties(i),s._tint=0,s.tintRgb=new Float32Array(4),s.tint=16777215,s}return e.prototype.setProperties=function(t){t&&(this._properties[0]="vertices"in t||"scale"in t?!!t.vertices||!!t.scale:this._properties[0],this._properties[1]="position"in t?!!t.position:this._properties[1],this._properties[2]="rotation"in t?!!t.rotation:this._properties[2],this._properties[3]="uvs"in t?!!t.uvs:this._properties[3],this._properties[4]="tint"in t||"alpha"in t?!!t.tint||!!t.alpha:this._properties[4])},e.prototype.updateTransform=function(){this.displayObjectUpdateTransform()},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,Rt(t,this.tintRgb)},enumerable:!1,configurable:!0}),e.prototype.render=function(t){var i=this;!this.visible||this.worldAlpha<=0||!this.children.length||!this.renderable||(this.baseTexture||(this.baseTexture=this.children[0]._texture.baseTexture,this.baseTexture.valid||this.baseTexture.once("update",function(){return i.onChildrenChange(0)})),t.batch.setObjectRenderer(t.plugins.particle),t.plugins.particle.render(this))},e.prototype.onChildrenChange=function(t){for(var i=Math.floor(t/this._batchSize);this._bufferUpdateIDs.length<i;)this._bufferUpdateIDs.push(0);this._bufferUpdateIDs[i]=++this._updateID},e.prototype.dispose=function(){if(this._buffers){for(var t=0;t<this._buffers.length;++t)this._buffers[t].destroy();this._buffers=null}},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.dispose(),this._properties=null,this._buffers=null,this._bufferUpdateIDs=null},e}(It),Zh=function(){function r(e,t,i){this.geometry=new ei,this.indexBuffer=null,this.size=i,this.dynamicProperties=[],this.staticProperties=[];for(var n=0;n<e.length;++n){var o=e[n];o={attributeName:o.attributeName,size:o.size,uploadFunction:o.uploadFunction,type:o.type||G.FLOAT,offset:o.offset},t[n]?this.dynamicProperties.push(o):this.staticProperties.push(o)}this.staticStride=0,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.dynamicStride=0,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this._updateID=0,this.initBuffers()}return r.prototype.initBuffers=function(){var e=this.geometry,t=0;this.indexBuffer=new Tt(yf(this.size),!0,!0),e.addIndex(this.indexBuffer),this.dynamicStride=0;for(var i=0;i<this.dynamicProperties.length;++i){var n=this.dynamicProperties[i];n.offset=t,t+=n.size,this.dynamicStride+=n.size}var o=new ArrayBuffer(this.size*this.dynamicStride*4*4);this.dynamicData=new Float32Array(o),this.dynamicDataUint32=new Uint32Array(o),this.dynamicBuffer=new Tt(this.dynamicData,!1,!1);var s=0;this.staticStride=0;for(var i=0;i<this.staticProperties.length;++i){var n=this.staticProperties[i];n.offset=s,s+=n.size,this.staticStride+=n.size}var a=new ArrayBuffer(this.size*this.staticStride*4*4);this.staticData=new Float32Array(a),this.staticDataUint32=new Uint32Array(a),this.staticBuffer=new Tt(this.staticData,!0,!1);for(var i=0;i<this.dynamicProperties.length;++i){var n=this.dynamicProperties[i];e.addAttribute(n.attributeName,this.dynamicBuffer,0,n.type===G.UNSIGNED_BYTE,n.type,this.dynamicStride*4,n.offset*4)}for(var i=0;i<this.staticProperties.length;++i){var n=this.staticProperties[i];e.addAttribute(n.attributeName,this.staticBuffer,0,n.type===G.UNSIGNED_BYTE,n.type,this.staticStride*4,n.offset*4)}},r.prototype.uploadDynamic=function(e,t,i){for(var n=0;n<this.dynamicProperties.length;n++){var o=this.dynamicProperties[n];o.uploadFunction(e,t,i,o.type===G.UNSIGNED_BYTE?this.dynamicDataUint32:this.dynamicData,this.dynamicStride,o.offset)}this.dynamicBuffer._updateID++},r.prototype.uploadStatic=function(e,t,i){for(var n=0;n<this.staticProperties.length;n++){var o=this.staticProperties[n];o.uploadFunction(e,t,i,o.type===G.UNSIGNED_BYTE?this.staticDataUint32:this.staticData,this.staticStride,o.offset)}this.staticBuffer._updateID++},r.prototype.destroy=function(){this.indexBuffer=null,this.dynamicProperties=null,this.dynamicBuffer=null,this.dynamicData=null,this.dynamicDataUint32=null,this.staticProperties=null,this.staticBuffer=null,this.staticData=null,this.staticDataUint32=null,this.geometry.destroy()},r}(),P0=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void){
    vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
    gl_FragColor = color;
}`,I0=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;

attribute vec2 aPositionCoord;
attribute float aRotation;

uniform mat3 translationMatrix;
uniform vec4 uColor;

varying vec2 vTextureCoord;
varying vec4 vColor;

void main(void){
    float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
    float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);

    vec2 v = vec2(x, y);
    v = v + aPositionCoord;

    gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vColor = aColor * uColor;
}
`,Ec=function(r){Cc(e,r);function e(t){var i=r.call(this,t)||this;return i.shader=null,i.properties=null,i.tempMatrix=new _t,i.properties=[{attributeName:"aVertexPosition",size:2,uploadFunction:i.uploadVertices,offset:0},{attributeName:"aPositionCoord",size:2,uploadFunction:i.uploadPosition,offset:0},{attributeName:"aRotation",size:1,uploadFunction:i.uploadRotation,offset:0},{attributeName:"aTextureCoord",size:2,uploadFunction:i.uploadUvs,offset:0},{attributeName:"aColor",size:1,type:G.UNSIGNED_BYTE,uploadFunction:i.uploadTint,offset:0}],i.shader=Oe.from(I0,P0,{}),i.state=rr.for2d(),i}return e.prototype.render=function(t){var i=t.children,n=t._maxSize,o=t._batchSize,s=this.renderer,a=i.length;if(a!==0){a>n&&!t.autoResize&&(a=n);var u=t._buffers;u||(u=t._buffers=this.generateBuffers(t));var h=i[0]._texture.baseTexture;this.state.blendMode=Ua(t.blendMode,h.alphaMode),s.state.set(this.state);var l=s.gl,c=t.worldTransform.copyTo(this.tempMatrix);c.prepend(s.globalUniforms.uniforms.projectionMatrix),this.shader.uniforms.translationMatrix=c.toArray(!0),this.shader.uniforms.uColor=gf(t.tintRgb,t.worldAlpha,this.shader.uniforms.uColor,h.alphaMode),this.shader.uniforms.uSampler=h,this.renderer.shader.bind(this.shader);for(var f=!1,d=0,v=0;d<a;d+=o,v+=1){var p=a-d;p>o&&(p=o),v>=u.length&&u.push(this._generateOneMoreBuffer(t));var _=u[v];_.uploadDynamic(i,d,p);var m=t._bufferUpdateIDs[v]||0;f=f||_._updateID<m,f&&(_._updateID=t._updateID,_.uploadStatic(i,d,p)),s.geometry.bind(_.geometry),l.drawElements(l.TRIANGLES,p*6,l.UNSIGNED_SHORT,0)}}},e.prototype.generateBuffers=function(t){for(var i=[],n=t._maxSize,o=t._batchSize,s=t._properties,a=0;a<n;a+=o)i.push(new Zh(this.properties,s,o));return i},e.prototype._generateOneMoreBuffer=function(t){var i=t._batchSize,n=t._properties;return new Zh(this.properties,n,i)},e.prototype.uploadVertices=function(t,i,n,o,s,a){for(var u=0,h=0,l=0,c=0,f=0;f<n;++f){var d=t[i+f],v=d._texture,p=d.scale.x,_=d.scale.y,m=v.trim,y=v.orig;m?(h=m.x-d.anchor.x*y.width,u=h+m.width,c=m.y-d.anchor.y*y.height,l=c+m.height):(u=y.width*(1-d.anchor.x),h=y.width*-d.anchor.x,l=y.height*(1-d.anchor.y),c=y.height*-d.anchor.y),o[a]=h*p,o[a+1]=c*_,o[a+s]=u*p,o[a+s+1]=c*_,o[a+s*2]=u*p,o[a+s*2+1]=l*_,o[a+s*3]=h*p,o[a+s*3+1]=l*_,a+=s*4}},e.prototype.uploadPosition=function(t,i,n,o,s,a){for(var u=0;u<n;u++){var h=t[i+u].position;o[a]=h.x,o[a+1]=h.y,o[a+s]=h.x,o[a+s+1]=h.y,o[a+s*2]=h.x,o[a+s*2+1]=h.y,o[a+s*3]=h.x,o[a+s*3+1]=h.y,a+=s*4}},e.prototype.uploadRotation=function(t,i,n,o,s,a){for(var u=0;u<n;u++){var h=t[i+u].rotation;o[a]=h,o[a+s]=h,o[a+s*2]=h,o[a+s*3]=h,a+=s*4}},e.prototype.uploadUvs=function(t,i,n,o,s,a){for(var u=0;u<n;++u){var h=t[i+u]._texture._uvs;h?(o[a]=h.x0,o[a+1]=h.y0,o[a+s]=h.x1,o[a+s+1]=h.y1,o[a+s*2]=h.x2,o[a+s*2+1]=h.y2,o[a+s*3]=h.x3,o[a+s*3+1]=h.y3,a+=s*4):(o[a]=0,o[a+1]=0,o[a+s]=0,o[a+s+1]=0,o[a+s*2]=0,o[a+s*2+1]=0,o[a+s*3]=0,o[a+s*3+1]=0,a+=s*4)}},e.prototype.uploadTint=function(t,i,n,o,s,a){for(var u=0;u<n;++u){var h=t[i+u],l=h._texture.baseTexture.alphaMode>0,c=h.alpha,f=c<1&&l?Yn(h._tintRGB,c):h._tintRGB+(c*255<<24);o[a]=f,o[a+s]=f,o[a+s*2]=f,o[a+s*3]=f,a+=s*4}},e.prototype.destroy=function(){r.prototype.destroy.call(this),this.shader&&(this.shader.destroy(),this.shader=null),this.tempMatrix=null},e}(Wi);/*!
 * @pixi/graphics - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/graphics is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Re;(function(r){r.MITER="miter",r.BEVEL="bevel",r.ROUND="round"})(Re||(Re={}));var Se;(function(r){r.BUTT="butt",r.ROUND="round",r.SQUARE="square"})(Se||(Se={}));var Vr={adaptive:!0,maxLength:10,minSegments:8,maxSegments:2048,epsilon:1e-4,_segmentsCount:function(r,e){if(e===void 0&&(e=20),!this.adaptive||!r||isNaN(r))return e;var t=Math.ceil(r/this.maxLength);return t<this.minSegments?t=this.minSegments:t>this.maxSegments&&(t=this.maxSegments),t}},lu=function(){function r(){this.color=16777215,this.alpha=1,this.texture=k.WHITE,this.matrix=null,this.visible=!1,this.reset()}return r.prototype.clone=function(){var e=new r;return e.color=this.color,e.alpha=this.alpha,e.texture=this.texture,e.matrix=this.matrix,e.visible=this.visible,e},r.prototype.reset=function(){this.color=16777215,this.alpha=1,this.texture=k.WHITE,this.matrix=null,this.visible=!1},r.prototype.destroy=function(){this.texture=null,this.matrix=null},r}();/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var gs=function(r,e){return gs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},gs(r,e)};function fu(r,e){gs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Jh(r,e){var t,i;e===void 0&&(e=!1);var n=r.length;if(!(n<6)){for(var o=0,s=0,a=r[n-2],u=r[n-1];s<n;s+=2){var h=r[s],l=r[s+1];o+=(h-a)*(l+u),a=h,u=l}if(!e&&o>0||e&&o<=0)for(var c=n/2,s=c+c%2;s<n;s+=2){var f=n-s-2,d=n-s-1,v=s,p=s+1;t=[r[v],r[f]],r[f]=t[0],r[v]=t[1],i=[r[p],r[d]],r[d]=i[0],r[p]=i[1]}}}var cu={build:function(r){r.points=r.shape.points.slice()},triangulate:function(r,e){var t=r.points,i=r.holes,n=e.points,o=e.indices;if(t.length>=6){Jh(t,!1);for(var s=[],a=0;a<i.length;a++){var u=i[a];Jh(u.points,!0),s.push(t.length/2),t=t.concat(u.points)}var h=Sa(t,s,2);if(!h)return;for(var l=n.length/2,a=0;a<h.length;a+=3)o.push(h[a]+l),o.push(h[a+1]+l),o.push(h[a+2]+l);for(var a=0;a<t.length;a++)n.push(t[a])}}},Fi={build:function(r){var e=r.points,t,i,n,o,s,a;if(r.type===ut.CIRC){var u=r.shape;t=u.x,i=u.y,s=a=u.radius,n=o=0}else if(r.type===ut.ELIP){var h=r.shape;t=h.x,i=h.y,s=h.width,a=h.height,n=o=0}else{var l=r.shape,c=l.width/2,f=l.height/2;t=l.x+c,i=l.y+f,s=a=Math.max(0,Math.min(l.radius,Math.min(c,f))),n=c-s,o=f-a}var d=Math.ceil(2.3*Math.sqrt(s+a)),v=d*8+(n?4:0)+(o?4:0);if(e.length=v,v!==0){if(d===0){e.length=8,e[0]=e[6]=t+n,e[1]=e[3]=i+o,e[2]=e[4]=t-n,e[5]=e[7]=i-o;return}var p=0,_=d*4+(n?2:0)+2,m=_,y=v;{var b=n+s,C=o,x=t+b,g=t-b,E=i+C;if(e[p++]=x,e[p++]=E,e[--_]=E,e[--_]=g,o){var w=i-C;e[m++]=g,e[m++]=w,e[--y]=w,e[--y]=x}}for(var T=1;T<d;T++){var A=Math.PI/2*(T/d),b=n+Math.cos(A)*s,C=o+Math.sin(A)*a,x=t+b,g=t-b,E=i+C,w=i-C;e[p++]=x,e[p++]=E,e[--_]=E,e[--_]=g,e[m++]=g,e[m++]=w,e[--y]=w,e[--y]=x}{var b=n,C=o+a,x=t+b,g=t-b,E=i+C,w=i-C;e[p++]=x,e[p++]=E,e[--y]=w,e[--y]=x,n&&(e[p++]=g,e[p++]=E,e[--y]=w,e[--y]=g)}}},triangulate:function(r,e){var t=r.points,i=e.points,n=e.indices,o=i.length/2,s=o,a,u;if(r.type!==ut.RREC){var h=r.shape;a=h.x,u=h.y}else{var l=r.shape;a=l.x+l.width/2,u=l.y+l.height/2}var c=r.matrix;i.push(r.matrix?c.a*a+c.c*u+c.tx:a,r.matrix?c.b*a+c.d*u+c.ty:u),o++,i.push(t[0],t[1]);for(var f=2;f<t.length;f+=2)i.push(t[f],t[f+1]),n.push(o++,s,o);n.push(s+1,s,o)}},wc={build:function(r){var e=r.shape,t=e.x,i=e.y,n=e.width,o=e.height,s=r.points;s.length=0,s.push(t,i,t+n,i,t+n,i+o,t,i+o)},triangulate:function(r,e){var t=r.points,i=e.points,n=i.length/2;i.push(t[0],t[1],t[2],t[3],t[6],t[7],t[4],t[5]),e.indices.push(n,n+1,n+2,n+1,n+2,n+3)}};function Nr(r,e,t){var i=e-r;return r+i*t}function yn(r,e,t,i,n,o,s){s===void 0&&(s=[]);for(var a=20,u=s,h=0,l=0,c=0,f=0,d=0,v=0,p=0,_=0;p<=a;++p)_=p/a,h=Nr(r,t,_),l=Nr(e,i,_),c=Nr(t,n,_),f=Nr(i,o,_),d=Nr(h,c,_),v=Nr(l,f,_),!(p===0&&u[u.length-2]===d&&u[u.length-1]===v)&&u.push(d,v);return u}var Ac={build:function(r){if(Ne.nextRoundedRectBehavior){Fi.build(r);return}var e=r.shape,t=r.points,i=e.x,n=e.y,o=e.width,s=e.height,a=Math.max(0,Math.min(e.radius,Math.min(o,s)/2));t.length=0,a?(yn(i,n+a,i,n,i+a,n,t),yn(i+o-a,n,i+o,n,i+o,n+a,t),yn(i+o,n+s-a,i+o,n+s,i+o-a,n+s,t),yn(i+a,n+s,i,n+s,i,n+s-a,t)):t.push(i,n,i+o,n,i+o,n+s,i,n+s)},triangulate:function(r,e){if(Ne.nextRoundedRectBehavior){Fi.triangulate(r,e);return}for(var t=r.points,i=e.points,n=e.indices,o=i.length/2,s=Sa(t,null,2),a=0,u=s.length;a<u;a+=3)n.push(s[a]+o),n.push(s[a+1]+o),n.push(s[a+2]+o);for(var a=0,u=t.length;a<u;a++)i.push(t[a],t[++a])}};function Qh(r,e,t,i,n,o,s,a){var u=r-t*n,h=e-i*n,l=r+t*o,c=e+i*o,f,d;s?(f=i,d=-t):(f=-i,d=t);var v=u+f,p=h+d,_=l+f,m=c+d;return a.push(v,p),a.push(_,m),2}function Fr(r,e,t,i,n,o,s,a){var u=t-r,h=i-e,l=Math.atan2(u,h),c=Math.atan2(n-r,o-e);a&&l<c?l+=Math.PI*2:!a&&l>c&&(c+=Math.PI*2);var f=l,d=c-l,v=Math.abs(d),p=Math.sqrt(u*u+h*h),_=(15*v*Math.sqrt(p)/Math.PI>>0)+1,m=d/_;if(f+=m,a){s.push(r,e),s.push(t,i);for(var y=1,b=f;y<_;y++,b+=m)s.push(r,e),s.push(r+Math.sin(b)*p,e+Math.cos(b)*p);s.push(r,e),s.push(n,o)}else{s.push(t,i),s.push(r,e);for(var y=1,b=f;y<_;y++,b+=m)s.push(r+Math.sin(b)*p,e+Math.cos(b)*p),s.push(r,e);s.push(n,o),s.push(r,e)}return _*2}function R0(r,e){var t=r.shape,i=r.points||t.points.slice(),n=e.closePointEps;if(i.length!==0){var o=r.lineStyle,s=new Y(i[0],i[1]),a=new Y(i[i.length-2],i[i.length-1]),u=t.type!==ut.POLY||t.closeStroke,h=Math.abs(s.x-a.x)<n&&Math.abs(s.y-a.y)<n;if(u){i=i.slice(),h&&(i.pop(),i.pop(),a.set(i[i.length-2],i[i.length-1]));var l=(s.x+a.x)*.5,c=(a.y+s.y)*.5;i.unshift(l,c),i.push(l,c)}var f=e.points,d=i.length/2,v=i.length,p=f.length/2,_=o.width/2,m=_*_,y=o.miterLimit*o.miterLimit,b=i[0],C=i[1],x=i[2],g=i[3],E=0,w=0,T=-(C-g),A=b-x,O=0,N=0,F=Math.sqrt(T*T+A*A);T/=F,A/=F,T*=_,A*=_;var D=o.alignment,S=(1-D)*2,I=D*2;u||(o.cap===Se.ROUND?v+=Fr(b-T*(S-I)*.5,C-A*(S-I)*.5,b-T*S,C-A*S,b+T*I,C+A*I,f,!0)+2:o.cap===Se.SQUARE&&(v+=Qh(b,C,T,A,S,I,!0,f))),f.push(b-T*S,C-A*S),f.push(b+T*I,C+A*I);for(var M=1;M<d-1;++M){b=i[(M-1)*2],C=i[(M-1)*2+1],x=i[M*2],g=i[M*2+1],E=i[(M+1)*2],w=i[(M+1)*2+1],T=-(C-g),A=b-x,F=Math.sqrt(T*T+A*A),T/=F,A/=F,T*=_,A*=_,O=-(g-w),N=x-E,F=Math.sqrt(O*O+N*N),O/=F,N/=F,O*=_,N*=_;var V=x-b,Q=C-g,P=x-E,L=w-g,X=Q*P-L*V,j=X<0;if(Math.abs(X)<.1){f.push(x-T*S,g-A*S),f.push(x+T*I,g+A*I);continue}var $=(-T+b)*(-A+g)-(-T+x)*(-A+C),dt=(-O+E)*(-N+g)-(-O+x)*(-N+w),et=(V*dt-P*$)/X,xt=(L*$-Q*dt)/X,Ct=(et-x)*(et-x)+(xt-g)*(xt-g),pt=x+(et-x)*S,mt=g+(xt-g)*S,tt=x-(et-x)*I,st=g-(xt-g)*I,W=Math.min(V*V+Q*Q,P*P+L*L),Lt=j?S:I,Et=W+Lt*Lt*m,J=Ct<=Et;J?o.join===Re.BEVEL||Ct/m>y?(j?(f.push(pt,mt),f.push(x+T*I,g+A*I),f.push(pt,mt),f.push(x+O*I,g+N*I)):(f.push(x-T*S,g-A*S),f.push(tt,st),f.push(x-O*S,g-N*S),f.push(tt,st)),v+=2):o.join===Re.ROUND?j?(f.push(pt,mt),f.push(x+T*I,g+A*I),v+=Fr(x,g,x+T*I,g+A*I,x+O*I,g+N*I,f,!0)+4,f.push(pt,mt),f.push(x+O*I,g+N*I)):(f.push(x-T*S,g-A*S),f.push(tt,st),v+=Fr(x,g,x-T*S,g-A*S,x-O*S,g-N*S,f,!1)+4,f.push(x-O*S,g-N*S),f.push(tt,st)):(f.push(pt,mt),f.push(tt,st)):(f.push(x-T*S,g-A*S),f.push(x+T*I,g+A*I),o.join===Re.BEVEL||Ct/m>y||(o.join===Re.ROUND?j?v+=Fr(x,g,x+T*I,g+A*I,x+O*I,g+N*I,f,!0)+2:v+=Fr(x,g,x-T*S,g-A*S,x-O*S,g-N*S,f,!1)+2:(j?(f.push(tt,st),f.push(tt,st)):(f.push(pt,mt),f.push(pt,mt)),v+=2)),f.push(x-O*S,g-N*S),f.push(x+O*I,g+N*I),v+=2)}b=i[(d-2)*2],C=i[(d-2)*2+1],x=i[(d-1)*2],g=i[(d-1)*2+1],T=-(C-g),A=b-x,F=Math.sqrt(T*T+A*A),T/=F,A/=F,T*=_,A*=_,f.push(x-T*S,g-A*S),f.push(x+T*I,g+A*I),u||(o.cap===Se.ROUND?v+=Fr(x-T*(S-I)*.5,g-A*(S-I)*.5,x-T*S,g-A*S,x+T*I,g+A*I,f,!1)+2:o.cap===Se.SQUARE&&(v+=Qh(x,g,T,A,S,I,!1,f)));for(var ve=e.indices,Sr=Vr.epsilon*Vr.epsilon,M=p;M<v+p-2;++M)b=f[M*2],C=f[M*2+1],x=f[(M+1)*2],g=f[(M+1)*2+1],E=f[(M+2)*2],w=f[(M+2)*2+1],!(Math.abs(b*(g-w)+x*(w-C)+E*(C-g))<Sr)&&ve.push(M,M+1,M+2)}}function S0(r,e){var t=0,i=r.shape,n=r.points||i.points,o=i.type!==ut.POLY||i.closeStroke;if(n.length!==0){var s=e.points,a=e.indices,u=n.length/2,h=s.length/2,l=h;for(s.push(n[0],n[1]),t=1;t<u;t++)s.push(n[t*2],n[t*2+1]),a.push(l,l+1),l++;o&&a.push(l,h)}}function ys(r,e){r.lineStyle.native?S0(r,e):R0(r,e)}var xs=function(){function r(){}return r.curveTo=function(e,t,i,n,o,s){var a=s[s.length-2],u=s[s.length-1],h=u-t,l=a-e,c=n-t,f=i-e,d=Math.abs(h*f-l*c);if(d<1e-8||o===0)return(s[s.length-2]!==e||s[s.length-1]!==t)&&s.push(e,t),null;var v=h*h+l*l,p=c*c+f*f,_=h*c+l*f,m=o*Math.sqrt(v)/d,y=o*Math.sqrt(p)/d,b=m*_/v,C=y*_/p,x=m*f+y*l,g=m*c+y*h,E=l*(y+b),w=h*(y+b),T=f*(m+C),A=c*(m+C),O=Math.atan2(w-g,E-x),N=Math.atan2(A-g,T-x);return{cx:x+e,cy:g+t,radius:o,startAngle:O,endAngle:N,anticlockwise:l*c>f*h}},r.arc=function(e,t,i,n,o,s,a,u,h){for(var l=a-s,c=Vr._segmentsCount(Math.abs(l)*o,Math.ceil(Math.abs(l)/Si)*40),f=l/(c*2),d=f*2,v=Math.cos(f),p=Math.sin(f),_=c-1,m=_%1/_,y=0;y<=_;++y){var b=y+m*y,C=f+s+d*b,x=Math.cos(C),g=-Math.sin(C);h.push((v*x+p*g)*o+i,(v*-g+p*x)*o+n)}},r}(),Pc=function(){function r(){}return r.curveLength=function(e,t,i,n,o,s,a,u){for(var h=10,l=0,c=0,f=0,d=0,v=0,p=0,_=0,m=0,y=0,b=0,C=0,x=e,g=t,E=1;E<=h;++E)c=E/h,f=c*c,d=f*c,v=1-c,p=v*v,_=p*v,m=_*e+3*p*c*i+3*v*f*o+d*a,y=_*t+3*p*c*n+3*v*f*s+d*u,b=x-m,C=g-y,x=m,g=y,l+=Math.sqrt(b*b+C*C);return l},r.curveTo=function(e,t,i,n,o,s,a){var u=a[a.length-2],h=a[a.length-1];a.length-=2;var l=Vr._segmentsCount(r.curveLength(u,h,e,t,i,n,o,s)),c=0,f=0,d=0,v=0,p=0;a.push(u,h);for(var _=1,m=0;_<=l;++_)m=_/l,c=1-m,f=c*c,d=f*c,v=m*m,p=v*m,a.push(d*u+3*f*m*e+3*c*v*i+p*o,d*h+3*f*m*t+3*c*v*n+p*s)},r}(),Ic=function(){function r(){}return r.curveLength=function(e,t,i,n,o,s){var a=e-2*i+o,u=t-2*n+s,h=2*i-2*e,l=2*n-2*t,c=4*(a*a+u*u),f=4*(a*h+u*l),d=h*h+l*l,v=2*Math.sqrt(c+f+d),p=Math.sqrt(c),_=2*c*p,m=2*Math.sqrt(d),y=f/p;return(_*v+p*f*(v-m)+(4*d*c-f*f)*Math.log((2*p+y+v)/(y+m)))/(4*_)},r.curveTo=function(e,t,i,n,o){for(var s=o[o.length-2],a=o[o.length-1],u=Vr._segmentsCount(r.curveLength(s,a,e,t,i,n)),h=0,l=0,c=1;c<=u;++c){var f=c/u;h=s+(e-s)*f,l=a+(t-a)*f,o.push(h+(e+(i-e)*f-h)*f,l+(t+(n-t)*f-l)*f)}},r}(),Rc=function(){function r(){this.reset()}return r.prototype.begin=function(e,t,i){this.reset(),this.style=e,this.start=t,this.attribStart=i},r.prototype.end=function(e,t){this.attribSize=t-this.attribStart,this.size=e-this.start},r.prototype.reset=function(){this.style=null,this.size=0,this.start=0,this.attribStart=0,this.attribSize=0},r}(),sr,wn=(sr={},sr[ut.POLY]=cu,sr[ut.CIRC]=Fi,sr[ut.ELIP]=Fi,sr[ut.RECT]=wc,sr[ut.RREC]=Ac,sr),bs=[],di=[],Ts=function(){function r(e,t,i,n){t===void 0&&(t=null),i===void 0&&(i=null),n===void 0&&(n=null),this.points=[],this.holes=[],this.shape=e,this.lineStyle=i,this.fillStyle=t,this.matrix=n,this.type=e.type}return r.prototype.clone=function(){return new r(this.shape,this.fillStyle,this.lineStyle,this.matrix)},r.prototype.destroy=function(){this.shape=null,this.holes.length=0,this.holes=null,this.points.length=0,this.points=null,this.lineStyle=null,this.fillStyle=null},r}(),Ur=new Y,O0=new Hr,Sc=function(r){fu(e,r);function e(){var t=r.call(this)||this;return t.closePointEps=1e-4,t.boundsPadding=0,t.uvsFloat32=null,t.indicesUint16=null,t.batchable=!1,t.points=[],t.colors=[],t.uvs=[],t.indices=[],t.textureIds=[],t.graphicsData=[],t.drawCalls=[],t.batchDirty=-1,t.batches=[],t.dirty=0,t.cacheDirty=-1,t.clearDirty=0,t.shapeIndex=0,t._bounds=new Hr,t.boundsDirty=-1,t}return Object.defineProperty(e.prototype,"bounds",{get:function(){return this.boundsDirty!==this.dirty&&(this.boundsDirty=this.dirty,this.calculateBounds()),this._bounds},enumerable:!1,configurable:!0}),e.prototype.invalidate=function(){this.boundsDirty=-1,this.dirty++,this.batchDirty++,this.shapeIndex=0,this.points.length=0,this.colors.length=0,this.uvs.length=0,this.indices.length=0,this.textureIds.length=0;for(var t=0;t<this.drawCalls.length;t++)this.drawCalls[t].texArray.clear(),di.push(this.drawCalls[t]);this.drawCalls.length=0;for(var t=0;t<this.batches.length;t++){var i=this.batches[t];i.reset(),bs.push(i)}this.batches.length=0},e.prototype.clear=function(){return this.graphicsData.length>0&&(this.invalidate(),this.clearDirty++,this.graphicsData.length=0),this},e.prototype.drawShape=function(t,i,n,o){i===void 0&&(i=null),n===void 0&&(n=null),o===void 0&&(o=null);var s=new Ts(t,i,n,o);return this.graphicsData.push(s),this.dirty++,this},e.prototype.drawHole=function(t,i){if(i===void 0&&(i=null),!this.graphicsData.length)return null;var n=new Ts(t,null,null,i),o=this.graphicsData[this.graphicsData.length-1];return n.lineStyle=o.lineStyle,o.holes.push(n),this.dirty++,this},e.prototype.destroy=function(){r.prototype.destroy.call(this);for(var t=0;t<this.graphicsData.length;++t)this.graphicsData[t].destroy();this.points.length=0,this.points=null,this.colors.length=0,this.colors=null,this.uvs.length=0,this.uvs=null,this.indices.length=0,this.indices=null,this.indexBuffer.destroy(),this.indexBuffer=null,this.graphicsData.length=0,this.graphicsData=null,this.drawCalls.length=0,this.drawCalls=null,this.batches.length=0,this.batches=null,this._bounds=null},e.prototype.containsPoint=function(t){for(var i=this.graphicsData,n=0;n<i.length;++n){var o=i[n];if(!!o.fillStyle.visible&&o.shape&&(o.matrix?o.matrix.applyInverse(t,Ur):Ur.copyFrom(t),o.shape.contains(Ur.x,Ur.y))){var s=!1;if(o.holes)for(var a=0;a<o.holes.length;a++){var u=o.holes[a];if(u.shape.contains(Ur.x,Ur.y)){s=!0;break}}if(!s)return!0}}return!1},e.prototype.updateBatches=function(t){if(!this.graphicsData.length){this.batchable=!0;return}if(!!this.validateBatching()){this.cacheDirty=this.dirty;var i=this.uvs,n=this.graphicsData,o=null,s=null;this.batches.length>0&&(o=this.batches[this.batches.length-1],s=o.style);for(var a=this.shapeIndex;a<n.length;a++){this.shapeIndex++;var u=n[a],h=u.fillStyle,l=u.lineStyle,c=wn[u.type];c.build(u),u.matrix&&this.transformPoints(u.points,u.matrix),(h.visible||l.visible)&&this.processHoles(u.holes);for(var f=0;f<2;f++){var d=f===0?h:l;if(!!d.visible){var v=d.texture.baseTexture,p=this.indices.length,_=this.points.length/2;v.wrapMode=xe.REPEAT,f===0?this.processFill(u):this.processLine(u);var m=this.points.length/2-_;m!==0&&(o&&!this._compareStyles(s,d)&&(o.end(p,_),o=null),o||(o=bs.pop()||new Rc,o.begin(d,p,_),this.batches.push(o),s=d),this.addUvs(this.points,i,d.texture,_,m,d.matrix))}}}var y=this.indices.length,b=this.points.length/2;if(o&&o.end(y,b),this.batches.length===0){this.batchable=!0;return}if(this.indicesUint16&&this.indices.length===this.indicesUint16.length)this.indicesUint16.set(this.indices);else{var C=b>65535&&t;this.indicesUint16=C?new Uint32Array(this.indices):new Uint16Array(this.indices)}this.batchable=this.isBatchable(),this.batchable?this.packBatches():this.buildDrawCalls()}},e.prototype._compareStyles=function(t,i){return!(!t||!i||t.texture.baseTexture!==i.texture.baseTexture||t.color+t.alpha!==i.color+i.alpha||!!t.native!=!!i.native)},e.prototype.validateBatching=function(){if(this.dirty===this.cacheDirty||!this.graphicsData.length)return!1;for(var t=0,i=this.graphicsData.length;t<i;t++){var n=this.graphicsData[t],o=n.fillStyle,s=n.lineStyle;if(o&&!o.texture.baseTexture.valid||s&&!s.texture.baseTexture.valid)return!1}return!0},e.prototype.packBatches=function(){this.batchDirty++,this.uvsFloat32=new Float32Array(this.uvs);for(var t=this.batches,i=0,n=t.length;i<n;i++)for(var o=t[i],s=0;s<o.size;s++){var a=o.start+s;this.indicesUint16[a]=this.indicesUint16[a]-o.attribStart}},e.prototype.isBatchable=function(){if(this.points.length>65535*2)return!1;for(var t=this.batches,i=0;i<t.length;i++)if(t[i].style.native)return!1;return this.points.length<e.BATCHABLE_SIZE*2},e.prototype.buildDrawCalls=function(){for(var t=++q._globalBatch,i=0;i<this.drawCalls.length;i++)this.drawCalls[i].texArray.clear(),di.push(this.drawCalls[i]);this.drawCalls.length=0;var n=this.colors,o=this.textureIds,s=di.pop();s||(s=new Sn,s.texArray=new On),s.texArray.count=0,s.start=0,s.size=0,s.type=Zt.TRIANGLES;var a=0,u=null,h=0,l=!1,c=Zt.TRIANGLES,f=0;this.drawCalls.push(s);for(var i=0;i<this.batches.length;i++){var d=this.batches[i],v=8,p=d.style,_=p.texture.baseTexture;l!==!!p.native&&(l=!!p.native,c=l?Zt.LINES:Zt.TRIANGLES,u=null,a=v,t++),u!==_&&(u=_,_._batchEnabled!==t&&(a===v&&(t++,a=0,s.size>0&&(s=di.pop(),s||(s=new Sn,s.texArray=new On),this.drawCalls.push(s)),s.start=f,s.size=0,s.texArray.count=0,s.type=c),_.touched=1,_._batchEnabled=t,_._batchLocation=a,_.wrapMode=xe.REPEAT,s.texArray.elements[s.texArray.count++]=_,a++)),s.size+=d.size,f+=d.size,h=_._batchLocation,this.addColors(n,p.color,p.alpha,d.attribSize,d.attribStart),this.addTextureIds(o,h,d.attribSize,d.attribStart)}q._globalBatch=t,this.packAttributes()},e.prototype.packAttributes=function(){for(var t=this.points,i=this.uvs,n=this.colors,o=this.textureIds,s=new ArrayBuffer(t.length*3*4),a=new Float32Array(s),u=new Uint32Array(s),h=0,l=0;l<t.length/2;l++)a[h++]=t[l*2],a[h++]=t[l*2+1],a[h++]=i[l*2],a[h++]=i[l*2+1],u[h++]=n[l],a[h++]=o[l];this._buffer.update(s),this._indexBuffer.update(this.indicesUint16)},e.prototype.processFill=function(t){if(t.holes.length)cu.triangulate(t,this);else{var i=wn[t.type];i.triangulate(t,this)}},e.prototype.processLine=function(t){ys(t,this);for(var i=0;i<t.holes.length;i++)ys(t.holes[i],this)},e.prototype.processHoles=function(t){for(var i=0;i<t.length;i++){var n=t[i],o=wn[n.type];o.build(n),n.matrix&&this.transformPoints(n.points,n.matrix)}},e.prototype.calculateBounds=function(){var t=this._bounds,i=O0,n=_t.IDENTITY;this._bounds.clear(),i.clear();for(var o=0;o<this.graphicsData.length;o++){var s=this.graphicsData[o],a=s.shape,u=s.type,h=s.lineStyle,l=s.matrix||_t.IDENTITY,c=0;if(h&&h.visible&&(c=h.width,u!==ut.POLY||s.fillStyle.visible?c*=Math.max(0,h.alignment):c*=Math.max(h.alignment,1-h.alignment)),n!==l&&(i.isEmpty()||(t.addBoundsMatrix(i,n),i.clear()),n=l),u===ut.RECT||u===ut.RREC){var f=a;i.addFramePad(f.x,f.y,f.x+f.width,f.y+f.height,c,c)}else if(u===ut.CIRC){var d=a;i.addFramePad(d.x,d.y,d.x,d.y,d.radius+c,d.radius+c)}else if(u===ut.ELIP){var v=a;i.addFramePad(v.x,v.y,v.x,v.y,v.width+c,v.height+c)}else{var p=a;t.addVerticesMatrix(n,p.points,0,p.points.length,c,c)}}i.isEmpty()||t.addBoundsMatrix(i,n),t.pad(this.boundsPadding,this.boundsPadding)},e.prototype.transformPoints=function(t,i){for(var n=0;n<t.length/2;n++){var o=t[n*2],s=t[n*2+1];t[n*2]=i.a*o+i.c*s+i.tx,t[n*2+1]=i.b*o+i.d*s+i.ty}},e.prototype.addColors=function(t,i,n,o,s){s===void 0&&(s=0);var a=(i>>16)+(i&65280)+((i&255)<<16),u=Yn(a,n);t.length=Math.max(t.length,s+o);for(var h=0;h<o;h++)t[s+h]=u},e.prototype.addTextureIds=function(t,i,n,o){o===void 0&&(o=0),t.length=Math.max(t.length,o+n);for(var s=0;s<n;s++)t[o+s]=i},e.prototype.addUvs=function(t,i,n,o,s,a){a===void 0&&(a=null);for(var u=0,h=i.length,l=n.frame;u<s;){var c=t[(o+u)*2],f=t[(o+u)*2+1];if(a){var d=a.a*c+a.c*f+a.tx;f=a.b*c+a.d*f+a.ty,c=d}u++,i.push(c/l.width,f/l.height)}var v=n.baseTexture;(l.width<v.width||l.height<v.height)&&this.adjustUvs(i,n,h,s)},e.prototype.adjustUvs=function(t,i,n,o){for(var s=i.baseTexture,a=1e-6,u=n+o*2,h=i.frame,l=h.width/s.width,c=h.height/s.height,f=h.x/h.width,d=h.y/h.height,v=Math.floor(t[n]+a),p=Math.floor(t[n+1]+a),_=n+2;_<u;_+=2)v=Math.min(v,Math.floor(t[_]+a)),p=Math.min(p,Math.floor(t[_+1]+a));f-=v,d-=p;for(var _=n;_<u;_+=2)t[_]=(t[_]+f)*l,t[_+1]=(t[_+1]+d)*c},e.BATCHABLE_SIZE=100,e}(uu),Oc=function(r){fu(e,r);function e(){var t=r!==null&&r.apply(this,arguments)||this;return t.width=0,t.alignment=.5,t.native=!1,t.cap=Se.BUTT,t.join=Re.MITER,t.miterLimit=10,t}return e.prototype.clone=function(){var t=new e;return t.color=this.color,t.alpha=this.alpha,t.texture=this.texture,t.matrix=this.matrix,t.visible=this.visible,t.width=this.width,t.alignment=this.alignment,t.native=this.native,t.cap=this.cap,t.join=this.join,t.miterLimit=this.miterLimit,t},e.prototype.reset=function(){r.prototype.reset.call(this),this.color=0,this.alignment=.5,this.width=0,this.native=!1},e}(lu),N0=new Float32Array(3),Po={},Ne=function(r){fu(e,r);function e(t){t===void 0&&(t=null);var i=r.call(this)||this;return i.shader=null,i.pluginName="batch",i.currentPath=null,i.batches=[],i.batchTint=-1,i.batchDirty=-1,i.vertexData=null,i._fillStyle=new lu,i._lineStyle=new Oc,i._matrix=null,i._holeMode=!1,i.state=rr.for2d(),i._geometry=t||new Sc,i._geometry.refCount++,i._transformID=-1,i.tint=16777215,i.blendMode=B.NORMAL,i}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},enumerable:!1,configurable:!0}),e.prototype.clone=function(){return this.finishPoly(),new e(this._geometry)},Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fill",{get:function(){return this._fillStyle},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"line",{get:function(){return this._lineStyle},enumerable:!1,configurable:!0}),e.prototype.lineStyle=function(t,i,n,o,s){return t===void 0&&(t=null),i===void 0&&(i=0),n===void 0&&(n=1),o===void 0&&(o=.5),s===void 0&&(s=!1),typeof t=="number"&&(t={width:t,color:i,alpha:n,alignment:o,native:s}),this.lineTextureStyle(t)},e.prototype.lineTextureStyle=function(t){t=Object.assign({width:0,texture:k.WHITE,color:t&&t.texture?16777215:0,alpha:1,matrix:null,alignment:.5,native:!1,cap:Se.BUTT,join:Re.MITER,miterLimit:10},t),this.currentPath&&this.startPoly();var i=t.width>0&&t.alpha>0;return i?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._lineStyle,{visible:i},t)):this._lineStyle.reset(),this},e.prototype.startPoly=function(){if(this.currentPath){var t=this.currentPath.points,i=this.currentPath.points.length;i>2&&(this.drawShape(this.currentPath),this.currentPath=new mi,this.currentPath.closeStroke=!1,this.currentPath.points.push(t[i-2],t[i-1]))}else this.currentPath=new mi,this.currentPath.closeStroke=!1},e.prototype.finishPoly=function(){this.currentPath&&(this.currentPath.points.length>2?(this.drawShape(this.currentPath),this.currentPath=null):this.currentPath.points.length=0)},e.prototype.moveTo=function(t,i){return this.startPoly(),this.currentPath.points[0]=t,this.currentPath.points[1]=i,this},e.prototype.lineTo=function(t,i){this.currentPath||this.moveTo(0,0);var n=this.currentPath.points,o=n[n.length-2],s=n[n.length-1];return(o!==t||s!==i)&&n.push(t,i),this},e.prototype._initCurve=function(t,i){t===void 0&&(t=0),i===void 0&&(i=0),this.currentPath?this.currentPath.points.length===0&&(this.currentPath.points=[t,i]):this.moveTo(t,i)},e.prototype.quadraticCurveTo=function(t,i,n,o){this._initCurve();var s=this.currentPath.points;return s.length===0&&this.moveTo(0,0),Ic.curveTo(t,i,n,o,s),this},e.prototype.bezierCurveTo=function(t,i,n,o,s,a){return this._initCurve(),Pc.curveTo(t,i,n,o,s,a,this.currentPath.points),this},e.prototype.arcTo=function(t,i,n,o,s){this._initCurve(t,i);var a=this.currentPath.points,u=xs.curveTo(t,i,n,o,s,a);if(u){var h=u.cx,l=u.cy,c=u.radius,f=u.startAngle,d=u.endAngle,v=u.anticlockwise;this.arc(h,l,c,f,d,v)}return this},e.prototype.arc=function(t,i,n,o,s,a){if(a===void 0&&(a=!1),o===s)return this;!a&&s<=o?s+=Si:a&&o<=s&&(o+=Si);var u=s-o;if(u===0)return this;var h=t+Math.cos(o)*n,l=i+Math.sin(o)*n,c=this._geometry.closePointEps,f=this.currentPath?this.currentPath.points:null;if(f){var d=Math.abs(f[f.length-2]-h),v=Math.abs(f[f.length-1]-l);d<c&&v<c||f.push(h,l)}else this.moveTo(h,l),f=this.currentPath.points;return xs.arc(h,l,t,i,n,o,s,a,f),this},e.prototype.beginFill=function(t,i){return t===void 0&&(t=0),i===void 0&&(i=1),this.beginTextureFill({texture:k.WHITE,color:t,alpha:i})},e.prototype.beginTextureFill=function(t){t=Object.assign({texture:k.WHITE,color:16777215,alpha:1,matrix:null},t),this.currentPath&&this.startPoly();var i=t.alpha>0;return i?(t.matrix&&(t.matrix=t.matrix.clone(),t.matrix.invert()),Object.assign(this._fillStyle,{visible:i},t)):this._fillStyle.reset(),this},e.prototype.endFill=function(){return this.finishPoly(),this._fillStyle.reset(),this},e.prototype.drawRect=function(t,i,n,o){return this.drawShape(new K(t,i,n,o))},e.prototype.drawRoundedRect=function(t,i,n,o,s){return this.drawShape(new Pf(t,i,n,o,s))},e.prototype.drawCircle=function(t,i,n){return this.drawShape(new wf(t,i,n))},e.prototype.drawEllipse=function(t,i,n,o){return this.drawShape(new Af(t,i,n,o))},e.prototype.drawPolygon=function(){for(var t=arguments,i=[],n=0;n<arguments.length;n++)i[n]=t[n];var o,s=!0,a=i[0];a.points?(s=a.closeStroke,o=a.points):Array.isArray(i[0])?o=i[0]:o=i;var u=new mi(o);return u.closeStroke=s,this.drawShape(u),this},e.prototype.drawShape=function(t){return this._holeMode?this._geometry.drawHole(t,this._matrix):this._geometry.drawShape(t,this._fillStyle.clone(),this._lineStyle.clone(),this._matrix),this},e.prototype.clear=function(){return this._geometry.clear(),this._lineStyle.reset(),this._fillStyle.reset(),this._boundsID++,this._matrix=null,this._holeMode=!1,this.currentPath=null,this},e.prototype.isFastRect=function(){var t=this._geometry.graphicsData;return t.length===1&&t[0].shape.type===ut.RECT&&!t[0].matrix&&!t[0].holes.length&&!(t[0].lineStyle.visible&&t[0].lineStyle.width)},e.prototype._render=function(t){this.finishPoly();var i=this._geometry,n=t.context.supports.uint32Indices;i.updateBatches(n),i.batchable?(this.batchDirty!==i.batchDirty&&this._populateBatches(),this._renderBatched(t)):(t.batch.flush(),this._renderDirect(t))},e.prototype._populateBatches=function(){var t=this._geometry,i=this.blendMode,n=t.batches.length;this.batchTint=-1,this._transformID=-1,this.batchDirty=t.batchDirty,this.batches.length=n,this.vertexData=new Float32Array(t.points);for(var o=0;o<n;o++){var s=t.batches[o],a=s.style.color,u=new Float32Array(this.vertexData.buffer,s.attribStart*4*2,s.attribSize*2),h=new Float32Array(t.uvsFloat32.buffer,s.attribStart*4*2,s.attribSize*2),l=new Uint16Array(t.indicesUint16.buffer,s.start*2,s.size),c={vertexData:u,blendMode:i,indices:l,uvs:h,_batchRGB:Rt(a),_tintRGB:a,_texture:s.style.texture,alpha:s.style.alpha,worldAlpha:1};this.batches[o]=c}},e.prototype._renderBatched=function(t){if(!!this.batches.length){t.batch.setObjectRenderer(t.plugins[this.pluginName]),this.calculateVertices(),this.calculateTints();for(var i=0,n=this.batches.length;i<n;i++){var o=this.batches[i];o.worldAlpha=this.worldAlpha*o.alpha,t.plugins[this.pluginName].render(o)}}},e.prototype._renderDirect=function(t){var i=this._resolveDirectShader(t),n=this._geometry,o=this.tint,s=this.worldAlpha,a=i.uniforms,u=n.drawCalls;a.translationMatrix=this.transform.worldTransform,a.tint[0]=(o>>16&255)/255*s,a.tint[1]=(o>>8&255)/255*s,a.tint[2]=(o&255)/255*s,a.tint[3]=s,t.shader.bind(i),t.geometry.bind(n,i),t.state.set(this.state);for(var h=0,l=u.length;h<l;h++)this._renderDrawCallDirect(t,n.drawCalls[h])},e.prototype._renderDrawCallDirect=function(t,i){for(var n=i.texArray,o=i.type,s=i.size,a=i.start,u=n.count,h=0;h<u;h++)t.texture.bind(n.elements[h],h);t.geometry.draw(o,s,a)},e.prototype._resolveDirectShader=function(t){var i=this.shader,n=this.pluginName;if(!i){if(!Po[n]){for(var o=t.plugins[n].MAX_TEXTURES,s=new Int32Array(o),a=0;a<o;a++)s[a]=a;var u={tint:new Float32Array([1,1,1,1]),translationMatrix:new _t,default:Ye.from({uSamplers:s},!0)},h=t.plugins[n]._shader.program;Po[n]=new Oe(h,u)}i=Po[n]}return i},e.prototype._calculateBounds=function(){this.finishPoly();var t=this._geometry;if(!!t.graphicsData.length){var i=t.bounds,n=i.minX,o=i.minY,s=i.maxX,a=i.maxY;this._bounds.addFrame(this.transform,n,o,s,a)}},e.prototype.containsPoint=function(t){return this.worldTransform.applyInverse(t,e._TEMP_POINT),this._geometry.containsPoint(e._TEMP_POINT)},e.prototype.calculateTints=function(){if(this.batchTint!==this.tint){this.batchTint=this.tint;for(var t=Rt(this.tint,N0),i=0;i<this.batches.length;i++){var n=this.batches[i],o=n._batchRGB,s=t[0]*o[0]*255,a=t[1]*o[1]*255,u=t[2]*o[2]*255,h=(s<<16)+(a<<8)+(u|0);n._tintRGB=(h>>16)+(h&65280)+((h&255)<<16)}}},e.prototype.calculateVertices=function(){var t=this.transform._worldID;if(this._transformID!==t){this._transformID=t;for(var i=this.transform.worldTransform,n=i.a,o=i.b,s=i.c,a=i.d,u=i.tx,h=i.ty,l=this._geometry.points,c=this.vertexData,f=0,d=0;d<l.length;d+=2){var v=l[d],p=l[d+1];c[f++]=n*v+s*p+u,c[f++]=a*p+o*v+h}}},e.prototype.closePath=function(){var t=this.currentPath;return t&&(t.closeStroke=!0,this.finishPoly()),this},e.prototype.setMatrix=function(t){return this._matrix=t,this},e.prototype.beginHole=function(){return this.finishPoly(),this._holeMode=!0,this},e.prototype.endHole=function(){return this.finishPoly(),this._holeMode=!1,this},e.prototype.destroy=function(t){this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose(),this._matrix=null,this.currentPath=null,this._lineStyle.destroy(),this._lineStyle=null,this._fillStyle.destroy(),this._fillStyle=null,this._geometry=null,this.shader=null,this.vertexData=null,this.batches.length=0,this.batches=null,r.prototype.destroy.call(this,t)},e.nextRoundedRectBehavior=!1,e._TEMP_POINT=new Y,e}(It),F0={buildPoly:cu,buildCircle:Fi,buildRectangle:wc,buildRoundedRectangle:Ac,buildLine:ys,ArcUtils:xs,BezierUtils:Pc,QuadraticUtils:Ic,BatchPart:Rc,FILL_COMMANDS:wn,BATCH_POOL:bs,DRAW_CALL_POOL:di};/*!
 * @pixi/sprite - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/sprite is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Cs=function(r,e){return Cs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Cs(r,e)};function U0(r,e){Cs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var li=new Y,L0=new Uint16Array([0,1,2,0,2,3]),Mt=function(r){U0(e,r);function e(t){var i=r.call(this)||this;return i._anchor=new ze(i._onAnchorUpdate,i,t?t.defaultAnchor.x:0,t?t.defaultAnchor.y:0),i._texture=null,i._width=0,i._height=0,i._tint=null,i._tintRGB=null,i.tint=16777215,i.blendMode=B.NORMAL,i._cachedTint=16777215,i.uvs=null,i.texture=t||k.EMPTY,i.vertexData=new Float32Array(8),i.vertexTrimmedData=null,i._transformID=-1,i._textureID=-1,i._transformTrimmedID=-1,i._textureTrimmedID=-1,i.indices=L0,i.pluginName="batch",i.isSprite=!0,i._roundPixels=U.ROUND_PIXELS,i}return e.prototype._onTextureUpdate=function(){this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this._width&&(this.scale.x=gr(this.scale.x)*this._width/this._texture.orig.width),this._height&&(this.scale.y=gr(this.scale.y)*this._height/this._texture.orig.height)},e.prototype._onAnchorUpdate=function(){this._transformID=-1,this._transformTrimmedID=-1},e.prototype.calculateVertices=function(){var t=this._texture;if(!(this._transformID===this.transform._worldID&&this._textureID===t._updateID)){this._textureID!==t._updateID&&(this.uvs=this._texture._uvs.uvsFloat32),this._transformID=this.transform._worldID,this._textureID=t._updateID;var i=this.transform.worldTransform,n=i.a,o=i.b,s=i.c,a=i.d,u=i.tx,h=i.ty,l=this.vertexData,c=t.trim,f=t.orig,d=this._anchor,v=0,p=0,_=0,m=0;if(c?(p=c.x-d._x*f.width,v=p+c.width,m=c.y-d._y*f.height,_=m+c.height):(p=-d._x*f.width,v=p+f.width,m=-d._y*f.height,_=m+f.height),l[0]=n*p+s*m+u,l[1]=a*m+o*p+h,l[2]=n*v+s*m+u,l[3]=a*m+o*v+h,l[4]=n*v+s*_+u,l[5]=a*_+o*v+h,l[6]=n*p+s*_+u,l[7]=a*_+o*p+h,this._roundPixels)for(var y=U.RESOLUTION,b=0;b<l.length;++b)l[b]=Math.round((l[b]*y|0)/y)}},e.prototype.calculateTrimmedVertices=function(){if(!this.vertexTrimmedData)this.vertexTrimmedData=new Float32Array(8);else if(this._transformTrimmedID===this.transform._worldID&&this._textureTrimmedID===this._texture._updateID)return;this._transformTrimmedID=this.transform._worldID,this._textureTrimmedID=this._texture._updateID;var t=this._texture,i=this.vertexTrimmedData,n=t.orig,o=this._anchor,s=this.transform.worldTransform,a=s.a,u=s.b,h=s.c,l=s.d,c=s.tx,f=s.ty,d=-o._x*n.width,v=d+n.width,p=-o._y*n.height,_=p+n.height;i[0]=a*d+h*p+c,i[1]=l*p+u*d+f,i[2]=a*v+h*p+c,i[3]=l*p+u*v+f,i[4]=a*v+h*_+c,i[5]=l*_+u*v+f,i[6]=a*d+h*_+c,i[7]=l*_+u*d+f},e.prototype._render=function(t){this.calculateVertices(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this)},e.prototype._calculateBounds=function(){var t=this._texture.trim,i=this._texture.orig;!t||t.width===i.width&&t.height===i.height?(this.calculateVertices(),this._bounds.addQuad(this.vertexData)):(this.calculateTrimmedVertices(),this._bounds.addQuad(this.vertexTrimmedData))},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._localBounds||(this._localBounds=new Hr),this._localBounds.minX=this._texture.orig.width*-this._anchor._x,this._localBounds.minY=this._texture.orig.height*-this._anchor._y,this._localBounds.maxX=this._texture.orig.width*(1-this._anchor._x),this._localBounds.maxY=this._texture.orig.height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new K),t=this._localBoundsRect),this._localBounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,li);var i=this._texture.orig.width,n=this._texture.orig.height,o=-i*this.anchor.x,s=0;return li.x>=o&&li.x<o+i&&(s=-n*this.anchor.y,li.y>=s&&li.y<s+n)},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this._texture.off("update",this._onTextureUpdate,this),this._anchor=null;var i=typeof t=="boolean"?t:t&&t.texture;if(i){var n=typeof t=="boolean"?t:t&&t.baseTexture;this._texture.destroy(!!n)}this._texture=null},e.from=function(t,i){var n=t instanceof k?t:k.from(t,i);return new e(n)},Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){var i=gr(this.scale.x)||1;this.scale.x=i*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){var i=gr(this.scale.y)||1;this.scale.y=i*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return this._texture},set:function(t){this._texture!==t&&(this._texture&&this._texture.off("update",this._onTextureUpdate,this),this._texture=t||k.EMPTY,this._cachedTint=16777215,this._textureID=-1,this._textureTrimmedID=-1,t&&(t.baseTexture.valid?this._onTextureUpdate():t.once("update",this._onTextureUpdate,this)))},enumerable:!1,configurable:!0}),e}(It);/*!
 * @pixi/text - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/text is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Es=function(r,e){return Es=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Es(r,e)};function M0(r,e){Es(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Wr;(function(r){r[r.LINEAR_VERTICAL=0]="LINEAR_VERTICAL",r[r.LINEAR_HORIZONTAL=1]="LINEAR_HORIZONTAL"})(Wr||(Wr={}));var Io={align:"left",breakWords:!1,dropShadow:!1,dropShadowAlpha:1,dropShadowAngle:Math.PI/6,dropShadowBlur:0,dropShadowColor:"black",dropShadowDistance:5,fill:"black",fillGradientType:Wr.LINEAR_VERTICAL,fillGradientStops:[],fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",letterSpacing:0,lineHeight:0,lineJoin:"miter",miterLimit:10,padding:0,stroke:"black",strokeThickness:0,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100,leading:0},B0=["serif","sans-serif","monospace","cursive","fantasy","system-ui"],Ar=function(){function r(e){this.styleID=0,this.reset(),So(this,e,e)}return r.prototype.clone=function(){var e={};return So(e,this,Io),new r(e)},r.prototype.reset=function(){So(this,Io,Io)},Object.defineProperty(r.prototype,"align",{get:function(){return this._align},set:function(e){this._align!==e&&(this._align=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"breakWords",{get:function(){return this._breakWords},set:function(e){this._breakWords!==e&&(this._breakWords=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadow",{get:function(){return this._dropShadow},set:function(e){this._dropShadow!==e&&(this._dropShadow=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAlpha",{get:function(){return this._dropShadowAlpha},set:function(e){this._dropShadowAlpha!==e&&(this._dropShadowAlpha=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowAngle",{get:function(){return this._dropShadowAngle},set:function(e){this._dropShadowAngle!==e&&(this._dropShadowAngle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowBlur",{get:function(){return this._dropShadowBlur},set:function(e){this._dropShadowBlur!==e&&(this._dropShadowBlur=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowColor",{get:function(){return this._dropShadowColor},set:function(e){var t=Ro(e);this._dropShadowColor!==t&&(this._dropShadowColor=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"dropShadowDistance",{get:function(){return this._dropShadowDistance},set:function(e){this._dropShadowDistance!==e&&(this._dropShadowDistance=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fill",{get:function(){return this._fill},set:function(e){var t=Ro(e);this._fill!==t&&(this._fill=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientType",{get:function(){return this._fillGradientType},set:function(e){this._fillGradientType!==e&&(this._fillGradientType=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fillGradientStops",{get:function(){return this._fillGradientStops},set:function(e){G0(this._fillGradientStops,e)||(this._fillGradientStops=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontFamily",{get:function(){return this._fontFamily},set:function(e){this.fontFamily!==e&&(this._fontFamily=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontSize",{get:function(){return this._fontSize},set:function(e){this._fontSize!==e&&(this._fontSize=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontStyle",{get:function(){return this._fontStyle},set:function(e){this._fontStyle!==e&&(this._fontStyle=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontVariant",{get:function(){return this._fontVariant},set:function(e){this._fontVariant!==e&&(this._fontVariant=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"fontWeight",{get:function(){return this._fontWeight},set:function(e){this._fontWeight!==e&&(this._fontWeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(e){this._letterSpacing!==e&&(this._letterSpacing=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineHeight",{get:function(){return this._lineHeight},set:function(e){this._lineHeight!==e&&(this._lineHeight=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"leading",{get:function(){return this._leading},set:function(e){this._leading!==e&&(this._leading=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"lineJoin",{get:function(){return this._lineJoin},set:function(e){this._lineJoin!==e&&(this._lineJoin=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"miterLimit",{get:function(){return this._miterLimit},set:function(e){this._miterLimit!==e&&(this._miterLimit=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"padding",{get:function(){return this._padding},set:function(e){this._padding!==e&&(this._padding=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"stroke",{get:function(){return this._stroke},set:function(e){var t=Ro(e);this._stroke!==t&&(this._stroke=t,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"strokeThickness",{get:function(){return this._strokeThickness},set:function(e){this._strokeThickness!==e&&(this._strokeThickness=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"textBaseline",{get:function(){return this._textBaseline},set:function(e){this._textBaseline!==e&&(this._textBaseline=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"trim",{get:function(){return this._trim},set:function(e){this._trim!==e&&(this._trim=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"whiteSpace",{get:function(){return this._whiteSpace},set:function(e){this._whiteSpace!==e&&(this._whiteSpace=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrap",{get:function(){return this._wordWrap},set:function(e){this._wordWrap!==e&&(this._wordWrap=e,this.styleID++)},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"wordWrapWidth",{get:function(){return this._wordWrapWidth},set:function(e){this._wordWrapWidth!==e&&(this._wordWrapWidth=e,this.styleID++)},enumerable:!1,configurable:!0}),r.prototype.toFontString=function(){var e=typeof this.fontSize=="number"?this.fontSize+"px":this.fontSize,t=this.fontFamily;Array.isArray(this.fontFamily)||(t=this.fontFamily.split(","));for(var i=t.length-1;i>=0;i--){var n=t[i].trim();!/([\"\'])[^\'\"]+\1/.test(n)&&B0.indexOf(n)<0&&(n='"'+n+'"'),t[i]=n}return this.fontStyle+" "+this.fontVariant+" "+this.fontWeight+" "+e+" "+t.join(",")},r}();function tl(r){return typeof r=="number"?Oa(r):(typeof r=="string"&&r.indexOf("0x")===0&&(r=r.replace("0x","#")),r)}function Ro(r){if(Array.isArray(r)){for(var e=0;e<r.length;++e)r[e]=tl(r[e]);return r}else return tl(r)}function G0(r,e){if(!Array.isArray(r)||!Array.isArray(e)||r.length!==e.length)return!1;for(var t=0;t<r.length;++t)if(r[t]!==e[t])return!1;return!0}function So(r,e,t){for(var i in t)Array.isArray(e[i])?r[i]=e[i].slice():r[i]=e[i]}var pe=function(){function r(e,t,i,n,o,s,a,u,h){this.text=e,this.style=t,this.width=i,this.height=n,this.lines=o,this.lineWidths=s,this.lineHeight=a,this.maxLineWidth=u,this.fontProperties=h}return r.measureText=function(e,t,i,n){n===void 0&&(n=r._canvas),i=i==null?t.wordWrap:i;var o=t.toFontString(),s=r.measureFont(o);s.fontSize===0&&(s.fontSize=t.fontSize,s.ascent=t.fontSize);var a=n.getContext("2d");a.font=o;for(var u=i?r.wordWrap(e,t,n):e,h=u.split(/(?:\r\n|\r|\n)/),l=new Array(h.length),c=0,f=0;f<h.length;f++){var d=a.measureText(h[f]).width+(h[f].length-1)*t.letterSpacing;l[f]=d,c=Math.max(c,d)}var v=c+t.strokeThickness;t.dropShadow&&(v+=t.dropShadowDistance);var p=t.lineHeight||s.fontSize+t.strokeThickness,_=Math.max(p,s.fontSize+t.strokeThickness)+(h.length-1)*(p+t.leading);return t.dropShadow&&(_+=t.dropShadowDistance),new r(e,t,v,_,h,l,p+t.leading,c,s)},r.wordWrap=function(e,t,i){i===void 0&&(i=r._canvas);for(var n=i.getContext("2d"),o=0,s="",a="",u=Object.create(null),h=t.letterSpacing,l=t.whiteSpace,c=r.collapseSpaces(l),f=r.collapseNewlines(l),d=!c,v=t.wordWrapWidth+h,p=r.tokenize(e),_=0;_<p.length;_++){var m=p[_];if(r.isNewline(m)){if(!f){a+=r.addLine(s),d=!c,s="",o=0;continue}m=" "}if(c){var y=r.isBreakingSpace(m),b=r.isBreakingSpace(s[s.length-1]);if(y&&b)continue}var C=r.getFromCache(m,h,u,n);if(C>v)if(s!==""&&(a+=r.addLine(s),s="",o=0),r.canBreakWords(m,t.breakWords))for(var x=r.wordWrapSplit(m),g=0;g<x.length;g++){for(var E=x[g],w=1;x[g+w];){var T=x[g+w],A=E[E.length-1];if(!r.canBreakChars(A,T,m,g,t.breakWords))E+=T;else break;w++}g+=E.length-1;var O=r.getFromCache(E,h,u,n);O+o>v&&(a+=r.addLine(s),d=!1,s="",o=0),s+=E,o+=O}else{s.length>0&&(a+=r.addLine(s),s="",o=0);var N=_===p.length-1;a+=r.addLine(m,!N),d=!1,s="",o=0}else C+o>v&&(d=!1,a+=r.addLine(s),s="",o=0),(s.length>0||!r.isBreakingSpace(m)||d)&&(s+=m,o+=C)}return a+=r.addLine(s,!1),a},r.addLine=function(e,t){return t===void 0&&(t=!0),e=r.trimRight(e),e=t?e+`
`:e,e},r.getFromCache=function(e,t,i,n){var o=i[e];if(typeof o!="number"){var s=e.length*t;o=n.measureText(e).width+s,i[e]=o}return o},r.collapseSpaces=function(e){return e==="normal"||e==="pre-line"},r.collapseNewlines=function(e){return e==="normal"},r.trimRight=function(e){if(typeof e!="string")return"";for(var t=e.length-1;t>=0;t--){var i=e[t];if(!r.isBreakingSpace(i))break;e=e.slice(0,-1)}return e},r.isNewline=function(e){return typeof e!="string"?!1:r._newlines.indexOf(e.charCodeAt(0))>=0},r.isBreakingSpace=function(e,t){return typeof e!="string"?!1:r._breakingSpaces.indexOf(e.charCodeAt(0))>=0},r.tokenize=function(e){var t=[],i="";if(typeof e!="string")return t;for(var n=0;n<e.length;n++){var o=e[n],s=e[n+1];if(r.isBreakingSpace(o,s)||r.isNewline(o)){i!==""&&(t.push(i),i=""),t.push(o);continue}i+=o}return i!==""&&t.push(i),t},r.canBreakWords=function(e,t){return t},r.canBreakChars=function(e,t,i,n,o){return!0},r.wordWrapSplit=function(e){return e.split("")},r.measureFont=function(e){if(r._fonts[e])return r._fonts[e];var t={ascent:0,descent:0,fontSize:0},i=r._canvas,n=r._context;n.font=e;var o=r.METRICS_STRING+r.BASELINE_SYMBOL,s=Math.ceil(n.measureText(o).width),a=Math.ceil(n.measureText(r.BASELINE_SYMBOL).width),u=Math.ceil(r.HEIGHT_MULTIPLIER*a);a=a*r.BASELINE_MULTIPLIER|0,i.width=s,i.height=u,n.fillStyle="#f00",n.fillRect(0,0,s,u),n.font=e,n.textBaseline="alphabetic",n.fillStyle="#000",n.fillText(o,0,a);var h=n.getImageData(0,0,s,u).data,l=h.length,c=s*4,f=0,d=0,v=!1;for(f=0;f<a;++f){for(var p=0;p<c;p+=4)if(h[d+p]!==255){v=!0;break}if(!v)d+=c;else break}for(t.ascent=a-f,d=l-c,v=!1,f=u;f>a;--f){for(var p=0;p<c;p+=4)if(h[d+p]!==255){v=!0;break}if(!v)d-=c;else break}return t.descent=f-a,t.fontSize=t.ascent+t.descent,r._fonts[e]=t,t},r.clearMetrics=function(e){e===void 0&&(e=""),e?delete r._fonts[e]:r._fonts={}},Object.defineProperty(r,"_canvas",{get:function(){if(!r.__canvas){var e=void 0;try{var t=new OffscreenCanvas(0,0),i=t.getContext("2d");if(i&&i.measureText)return r.__canvas=t,t;e=document.createElement("canvas")}catch{e=document.createElement("canvas")}e.width=e.height=10,r.__canvas=e}return r.__canvas},enumerable:!1,configurable:!0}),Object.defineProperty(r,"_context",{get:function(){return r.__context||(r.__context=r._canvas.getContext("2d")),r.__context},enumerable:!1,configurable:!0}),r}();pe._fonts={};pe.METRICS_STRING="|\xC9q\xC5";pe.BASELINE_SYMBOL="M";pe.BASELINE_MULTIPLIER=1.4;pe.HEIGHT_MULTIPLIER=2;pe._newlines=[10,13];pe._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];var D0={texture:!0,children:!1,baseTexture:!0},du=function(r){M0(e,r);function e(t,i,n){var o=this,s=!1;n||(n=document.createElement("canvas"),s=!0),n.width=3,n.height=3;var a=k.from(n);return a.orig=new K,a.trim=new K,o=r.call(this,a)||this,o._ownCanvas=s,o.canvas=n,o.context=o.canvas.getContext("2d"),o._resolution=U.RESOLUTION,o._autoResolution=!0,o._text=null,o._style=null,o._styleListener=null,o._font="",o.text=t,o.style=i,o.localStyleID=-1,o}return e.prototype.updateText=function(t){var i=this._style;if(this.localStyleID!==i.styleID&&(this.dirty=!0,this.localStyleID=i.styleID),!(!this.dirty&&t)){this._font=this._style.toFontString();var n=this.context,o=pe.measureText(this._text||" ",this._style,this._style.wordWrap,this.canvas),s=o.width,a=o.height,u=o.lines,h=o.lineHeight,l=o.lineWidths,c=o.maxLineWidth,f=o.fontProperties;this.canvas.width=Math.ceil(Math.ceil(Math.max(1,s)+i.padding*2)*this._resolution),this.canvas.height=Math.ceil(Math.ceil(Math.max(1,a)+i.padding*2)*this._resolution),n.scale(this._resolution,this._resolution),n.clearRect(0,0,this.canvas.width,this.canvas.height),n.font=this._font,n.lineWidth=i.strokeThickness,n.textBaseline=i.textBaseline,n.lineJoin=i.lineJoin,n.miterLimit=i.miterLimit;for(var d,v,p=i.dropShadow?2:1,_=0;_<p;++_){var m=i.dropShadow&&_===0,y=m?Math.ceil(Math.max(1,a)+i.padding*2):0,b=y*this._resolution;if(m){n.fillStyle="black",n.strokeStyle="black";var C=i.dropShadowColor,x=Rt(typeof C=="number"?C:Na(C)),g=i.dropShadowBlur*this._resolution,E=i.dropShadowDistance*this._resolution;n.shadowColor="rgba("+x[0]*255+","+x[1]*255+","+x[2]*255+","+i.dropShadowAlpha+")",n.shadowBlur=g,n.shadowOffsetX=Math.cos(i.dropShadowAngle)*E,n.shadowOffsetY=Math.sin(i.dropShadowAngle)*E+b}else n.fillStyle=this._generateFillStyle(i,u,o),n.strokeStyle=i.stroke,n.shadowColor="black",n.shadowBlur=0,n.shadowOffsetX=0,n.shadowOffsetY=0;var w=(h-f.fontSize)/2;(!e.nextLineHeightBehavior||h-f.fontSize<0)&&(w=0);for(var T=0;T<u.length;T++)d=i.strokeThickness/2,v=i.strokeThickness/2+T*h+f.ascent+w,i.align==="right"?d+=c-l[T]:i.align==="center"&&(d+=(c-l[T])/2),i.stroke&&i.strokeThickness&&this.drawLetterSpacing(u[T],d+i.padding,v+i.padding-y,!0),i.fill&&this.drawLetterSpacing(u[T],d+i.padding,v+i.padding-y)}this.updateTexture()}},e.prototype.drawLetterSpacing=function(t,i,n,o){o===void 0&&(o=!1);var s=this._style,a=s.letterSpacing,u=e.experimentalLetterSpacing&&("letterSpacing"in CanvasRenderingContext2D.prototype||"textLetterSpacing"in CanvasRenderingContext2D.prototype);if(a===0||u){u&&(this.context.letterSpacing=a,this.context.textLetterSpacing=a),o?this.context.strokeText(t,i,n):this.context.fillText(t,i,n);return}for(var h=i,l=Array.from?Array.from(t):t.split(""),c=this.context.measureText(t).width,f=0,d=0;d<l.length;++d){var v=l[d];o?this.context.strokeText(v,h,n):this.context.fillText(v,h,n);for(var p="",_=d+1;_<l.length;++_)p+=l[_];f=this.context.measureText(p).width,h+=c-f+a,c=f}},e.prototype.updateTexture=function(){var t=this.canvas;if(this._style.trim){var i=bf(t);i.data&&(t.width=i.width,t.height=i.height,this.context.putImageData(i.data,0,0))}var n=this._texture,o=this._style,s=o.trim?0:o.padding,a=n.baseTexture;n.trim.width=n._frame.width=t.width/this._resolution,n.trim.height=n._frame.height=t.height/this._resolution,n.trim.x=-s,n.trim.y=-s,n.orig.width=n._frame.width-s*2,n.orig.height=n._frame.height-s*2,this._onTextureUpdate(),a.setRealSize(t.width,t.height,this._resolution),n.updateUvs(),this._recursivePostUpdateTransform(),this.dirty=!1},e.prototype._render=function(t){this._autoResolution&&this._resolution!==t.resolution&&(this._resolution=t.resolution,this.dirty=!0),this.updateText(!0),r.prototype._render.call(this,t)},e.prototype.getLocalBounds=function(t){return this.updateText(!0),r.prototype.getLocalBounds.call(this,t)},e.prototype._calculateBounds=function(){this.updateText(!0),this.calculateVertices(),this._bounds.addQuad(this.vertexData)},e.prototype._generateFillStyle=function(t,i,n){var o=t.fill;if(Array.isArray(o)){if(o.length===1)return o[0]}else return o;var s,a=t.dropShadow?t.dropShadowDistance:0,u=t.padding||0,h=this.canvas.width/this._resolution-a-u*2,l=this.canvas.height/this._resolution-a-u*2,c=o.slice(),f=t.fillGradientStops.slice();if(!f.length)for(var d=c.length+1,v=1;v<d;++v)f.push(v/d);if(c.unshift(o[0]),f.unshift(0),c.push(o[o.length-1]),f.push(1),t.fillGradientType===Wr.LINEAR_VERTICAL){s=this.context.createLinearGradient(h/2,u,h/2,l+u);for(var p=n.fontProperties.fontSize+t.strokeThickness,v=0;v<i.length;v++){var _=n.lineHeight*(v-1)+p,m=n.lineHeight*v,y=m;v>0&&_>m&&(y=(m+_)/2);var b=m+p,C=n.lineHeight*(v+1),x=b;v+1<i.length&&C<b&&(x=(b+C)/2);for(var g=(x-y)/l,E=0;E<c.length;E++){var w=0;typeof f[E]=="number"?w=f[E]:w=E/c.length;var T=Math.min(1,Math.max(0,y/l+w*g));T=Number(T.toFixed(5)),s.addColorStop(T,c[E])}}}else{s=this.context.createLinearGradient(u,l/2,h+u,l/2);for(var A=c.length+1,O=1,v=0;v<c.length;v++){var N=void 0;typeof f[v]=="number"?N=f[v]:N=O/A,s.addColorStop(N,c[v]),O++}}return s},e.prototype.destroy=function(t){typeof t=="boolean"&&(t={children:t}),t=Object.assign({},D0,t),r.prototype.destroy.call(this,t),this._ownCanvas&&(this.canvas.height=this.canvas.width=0),this.context=null,this.canvas=null,this._style=null},Object.defineProperty(e.prototype,"width",{get:function(){return this.updateText(!0),Math.abs(this.scale.x)*this._texture.orig.width},set:function(t){this.updateText(!0);var i=gr(this.scale.x)||1;this.scale.x=i*t/this._texture.orig.width,this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this.updateText(!0),Math.abs(this.scale.y)*this._texture.orig.height},set:function(t){this.updateText(!0);var i=gr(this.scale.y)||1;this.scale.y=i*t/this._texture.orig.height,this._height=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"style",{get:function(){return this._style},set:function(t){t=t||{},t instanceof Ar?this._style=t:this._style=new Ar(t),this.localStyleID=-1,this.dirty=!0},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._autoResolution=!1,this._resolution!==t&&(this._resolution=t,this.dirty=!0)},enumerable:!1,configurable:!0}),e.nextLineHeightBehavior=!1,e.experimentalLetterSpacing=!1,e}(Mt);/*!
 * @pixi/prepare - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/prepare is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */U.UPLOADS_PER_FRAME=4;/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var ws=function(r,e){return ws=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},ws(r,e)};function k0(r,e){ws(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Nc=function(){function r(e){this.maxItemsPerFrame=e,this.itemsLeft=0}return r.prototype.beginFrame=function(){this.itemsLeft=this.maxItemsPerFrame},r.prototype.allowedToUpload=function(){return this.itemsLeft-- >0},r}();function z0(r,e){var t=!1;if(r&&r._textures&&r._textures.length){for(var i=0;i<r._textures.length;i++)if(r._textures[i]instanceof k){var n=r._textures[i].baseTexture;e.indexOf(n)===-1&&(e.push(n),t=!0)}}return t}function X0(r,e){if(r.baseTexture instanceof q){var t=r.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function j0(r,e){if(r._texture&&r._texture instanceof k){var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function H0(r,e){return e instanceof du?(e.updateText(!0),!0):!1}function V0(r,e){if(e instanceof Ar){var t=e.toFontString();return pe.measureFont(t),!0}return!1}function W0(r,e){if(r instanceof du){e.indexOf(r.style)===-1&&e.push(r.style),e.indexOf(r)===-1&&e.push(r);var t=r._texture.baseTexture;return e.indexOf(t)===-1&&e.push(t),!0}return!1}function Y0(r,e){return r instanceof Ar?(e.indexOf(r)===-1&&e.push(r),!0):!1}var Fc=function(){function r(e){var t=this;this.limiter=new Nc(U.UPLOADS_PER_FRAME),this.renderer=e,this.uploadHookHelper=null,this.queue=[],this.addHooks=[],this.uploadHooks=[],this.completes=[],this.ticking=!1,this.delayedTick=function(){!t.queue||t.prepareItems()},this.registerFindHook(W0),this.registerFindHook(Y0),this.registerFindHook(z0),this.registerFindHook(X0),this.registerFindHook(j0),this.registerUploadHook(H0),this.registerUploadHook(V0)}return r.prototype.upload=function(e,t){typeof e=="function"&&(t=e,e=null),e&&this.add(e),this.queue.length?(t&&this.completes.push(t),this.ticking||(this.ticking=!0,At.system.addOnce(this.tick,this,Te.UTILITY))):t&&t()},r.prototype.tick=function(){setTimeout(this.delayedTick,0)},r.prototype.prepareItems=function(){for(this.limiter.beginFrame();this.queue.length&&this.limiter.allowedToUpload();){var e=this.queue[0],t=!1;if(e&&!e._destroyed){for(var i=0,n=this.uploadHooks.length;i<n;i++)if(this.uploadHooks[i](this.uploadHookHelper,e)){this.queue.shift(),t=!0;break}}t||this.queue.shift()}if(this.queue.length)At.system.addOnce(this.tick,this,Te.UTILITY);else{this.ticking=!1;var o=this.completes.slice(0);this.completes.length=0;for(var i=0,n=o.length;i<n;i++)o[i]()}},r.prototype.registerFindHook=function(e){return e&&this.addHooks.push(e),this},r.prototype.registerUploadHook=function(e){return e&&this.uploadHooks.push(e),this},r.prototype.add=function(e){for(var t=0,i=this.addHooks.length;t<i&&!this.addHooks[t](e,this.queue);t++);if(e instanceof It)for(var t=e.children.length-1;t>=0;t--)this.add(e.children[t]);return this},r.prototype.destroy=function(){this.ticking&&At.system.remove(this.tick,this),this.ticking=!1,this.addHooks=null,this.uploadHooks=null,this.renderer=null,this.completes=null,this.queue=null,this.limiter=null,this.uploadHookHelper=null},r}();function Uc(r,e){return e instanceof q?(e._glTextures[r.CONTEXT_UID]||r.texture.bind(e),!0):!1}function $0(r,e){if(!(e instanceof Ne))return!1;var t=e.geometry;e.finishPoly(),t.updateBatches();for(var i=t.batches,n=0;n<i.length;n++){var o=i[n].style.texture;o&&Uc(r,o.baseTexture)}return t.batchable||r.geometry.bind(t,e._resolveDirectShader(r)),!0}function q0(r,e){return r instanceof Ne?(e.push(r),!0):!1}var Lc=function(r){k0(e,r);function e(t){var i=r.call(this,t)||this;return i.uploadHookHelper=i.renderer,i.registerFindHook(q0),i.registerUploadHook(Uc),i.registerUploadHook($0),i}return e}(Fc),K0=function(){function r(e){this.maxMilliseconds=e,this.frameStart=0}return r.prototype.beginFrame=function(){this.frameStart=Date.now()},r.prototype.allowedToUpload=function(){return Date.now()-this.frameStart<this.maxMilliseconds},r}();/*!
 * @pixi/spritesheet - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/spritesheet is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Mc=function(){function r(e,t,i){i===void 0&&(i=null),this._texture=e instanceof k?e:null,this.baseTexture=e instanceof q?e:this._texture.baseTexture,this.textures={},this.animations={},this.data=t;var n=this.baseTexture.resource;this.resolution=this._updateResolution(i||(n?n.url:null)),this._frames=this.data.frames,this._frameKeys=Object.keys(this._frames),this._batchIndex=0,this._callback=null}return r.prototype._updateResolution=function(e){e===void 0&&(e=null);var t=this.data.meta.scale,i=Ri(e,null);return i===null&&(i=t!==void 0?parseFloat(t):1),i!==1&&this.baseTexture.setResolution(i),i},r.prototype.parse=function(e){this._batchIndex=0,this._callback=e,this._frameKeys.length<=r.BATCH_SIZE?(this._processFrames(0),this._processAnimations(),this._parseComplete()):this._nextBatch()},r.prototype._processFrames=function(e){for(var t=e,i=r.BATCH_SIZE;t-e<i&&t<this._frameKeys.length;){var n=this._frameKeys[t],o=this._frames[n],s=o.frame;if(s){var a=null,u=null,h=o.trimmed!==!1&&o.sourceSize?o.sourceSize:o.frame,l=new K(0,0,Math.floor(h.w)/this.resolution,Math.floor(h.h)/this.resolution);o.rotated?a=new K(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.h)/this.resolution,Math.floor(s.w)/this.resolution):a=new K(Math.floor(s.x)/this.resolution,Math.floor(s.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution),o.trimmed!==!1&&o.spriteSourceSize&&(u=new K(Math.floor(o.spriteSourceSize.x)/this.resolution,Math.floor(o.spriteSourceSize.y)/this.resolution,Math.floor(s.w)/this.resolution,Math.floor(s.h)/this.resolution)),this.textures[n]=new k(this.baseTexture,a,l,u,o.rotated?2:0,o.anchor),k.addToCache(this.textures[n],n)}t++}},r.prototype._processAnimations=function(){var e=this.data.animations||{};for(var t in e){this.animations[t]=[];for(var i=0;i<e[t].length;i++){var n=e[t][i];this.animations[t].push(this.textures[n])}}},r.prototype._parseComplete=function(){var e=this._callback;this._callback=null,this._batchIndex=0,e.call(this,this.textures)},r.prototype._nextBatch=function(){var e=this;this._processFrames(this._batchIndex*r.BATCH_SIZE),this._batchIndex++,setTimeout(function(){e._batchIndex*r.BATCH_SIZE<e._frameKeys.length?e._nextBatch():(e._processAnimations(),e._parseComplete())},0)},r.prototype.destroy=function(e){var t;e===void 0&&(e=!1);for(var i in this.textures)this.textures[i].destroy();this._frames=null,this._frameKeys=null,this.data=null,this.textures=null,e&&((t=this._texture)===null||t===void 0||t.destroy(),this.baseTexture.destroy()),this._texture=null,this.baseTexture=null},r.BATCH_SIZE=1e3,r}(),Bc=function(){function r(){}return r.use=function(e,t){var i,n,o=this,s=e.name+"_image";if(!e.data||e.type!==ct.TYPE.JSON||!e.data.frames||o.resources[s]){t();return}var a=(n=(i=e.data)===null||i===void 0?void 0:i.meta)===null||n===void 0?void 0:n.related_multi_packs;if(Array.isArray(a))for(var u=function(v){if(typeof v!="string")return"continue";var p=v.replace(".json",""),_=mr.resolve(e.url.replace(o.baseUrl,""),v);if(o.resources[p]||Object.values(o.resources).some(function(y){return mr.format(mr.parse(y.url))===_}))return"continue";var m={crossOrigin:e.crossOrigin,loadType:ct.LOAD_TYPE.XHR,xhrType:ct.XHR_RESPONSE_TYPE.JSON,parentResource:e,metadata:e.metadata};o.add(p,_,m)},h=0,l=a;h<l.length;h++){var c=l[h];u(c)}var f={crossOrigin:e.crossOrigin,metadata:e.metadata.imageMetadata,parentResource:e},d=r.getResourcePath(e,o.baseUrl);o.add(s,d,f,function(p){if(p.error){t(p.error);return}var _=new Mc(p.texture,e.data,e.url);_.parse(function(){e.spritesheet=_,e.textures=_.textures,t()})})},r.getResourcePath=function(e,t){return e.isDataUrl?e.data.meta.image:mr.resolve(e.url.replace(t,""),e.data.meta.image)},r}();/*!
 * @pixi/sprite-tiling - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/sprite-tiling is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var As=function(r,e){return As=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},As(r,e)};function Gc(r,e){As(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var fi=new Y,Z0=function(r){Gc(e,r);function e(t,i,n){i===void 0&&(i=100),n===void 0&&(n=100);var o=r.call(this,t)||this;return o.tileTransform=new Ma,o._width=i,o._height=n,o.uvMatrix=o.texture.uvMatrix||new Qn(t),o.pluginName="tilingSprite",o.uvRespectAnchor=!1,o}return Object.defineProperty(e.prototype,"clampMargin",{get:function(){return this.uvMatrix.clampMargin},set:function(t){this.uvMatrix.clampMargin=t,this.uvMatrix.update(!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tileScale",{get:function(){return this.tileTransform.scale},set:function(t){this.tileTransform.scale.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tilePosition",{get:function(){return this.tileTransform.position},set:function(t){this.tileTransform.position.copyFrom(t)},enumerable:!1,configurable:!0}),e.prototype._onTextureUpdate=function(){this.uvMatrix&&(this.uvMatrix.texture=this._texture),this._cachedTint=16777215},e.prototype._render=function(t){var i=this._texture;!i||!i.valid||(this.tileTransform.updateLocalTransform(),this.uvMatrix.update(),t.batch.setObjectRenderer(t.plugins[this.pluginName]),t.plugins[this.pluginName].render(this))},e.prototype._calculateBounds=function(){var t=this._width*-this._anchor._x,i=this._height*-this._anchor._y,n=this._width*(1-this._anchor._x),o=this._height*(1-this._anchor._y);this._bounds.addFrame(this.transform,t,i,n,o)},e.prototype.getLocalBounds=function(t){return this.children.length===0?(this._bounds.minX=this._width*-this._anchor._x,this._bounds.minY=this._height*-this._anchor._y,this._bounds.maxX=this._width*(1-this._anchor._x),this._bounds.maxY=this._height*(1-this._anchor._y),t||(this._localBoundsRect||(this._localBoundsRect=new K),t=this._localBoundsRect),this._bounds.getRectangle(t)):r.prototype.getLocalBounds.call(this,t)},e.prototype.containsPoint=function(t){this.worldTransform.applyInverse(t,fi);var i=this._width,n=this._height,o=-i*this.anchor._x;if(fi.x>=o&&fi.x<o+i){var s=-n*this.anchor._y;if(fi.y>=s&&fi.y<s+n)return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this.tileTransform=null,this.uvMatrix=null},e.from=function(t,i){var n=t instanceof k?t:k.from(t,i);return new e(n,i.width,i.height)},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t},enumerable:!1,configurable:!0}),e}(Mt),J0=`#version 100
#define SHADER_NAME Tiling-Sprite-Simple-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 texSample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = texSample * uColor;
}
`,el=`#version 100
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,Q0=`#version 100
#ifdef GL_EXT_shader_texture_lod
    #extension GL_EXT_shader_texture_lod : enable
#endif
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    #ifdef GL_EXT_shader_texture_lod
        vec4 texSample = unclamped == coord
            ? texture2D(uSampler, coord) 
            : texture2DLodEXT(uSampler, coord, 0);
    #else
        vec4 texSample = texture2D(uSampler, coord);
    #endif

    gl_FragColor = texSample * uColor;
}
`,ty=`#version 300 es
#define SHADER_NAME Tiling-Sprite-300

precision lowp float;

in vec2 aVertexPosition;
in vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

out vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`,ey=`#version 300 es
#define SHADER_NAME Tiling-Sprite-100

precision lowp float;

in vec2 vTextureCoord;

out vec4 fragmentColor;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    vec2 unclamped = coord;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0

    fragmentColor = texSample * uColor;
}
`,xn=new _t,Dc=function(r){Gc(e,r);function e(t){var i=r.call(this,t)||this;return t.runners.contextChange.add(i),i.quad=new Wa,i.state=rr.for2d(),i}return e.prototype.contextChange=function(){var t=this.renderer,i={globals:t.globalUniforms};this.simpleShader=Oe.from(el,J0,i),this.shader=t.context.webGLVersion>1?Oe.from(ty,ey,i):Oe.from(el,Q0,i)},e.prototype.render=function(t){var i=this.renderer,n=this.quad,o=n.vertices;o[0]=o[6]=t._width*-t.anchor.x,o[1]=o[3]=t._height*-t.anchor.y,o[2]=o[4]=t._width*(1-t.anchor.x),o[5]=o[7]=t._height*(1-t.anchor.y);var s=t.uvRespectAnchor?t.anchor.x:0,a=t.uvRespectAnchor?t.anchor.y:0;o=n.uvs,o[0]=o[6]=-s,o[1]=o[3]=-a,o[2]=o[4]=1-s,o[5]=o[7]=1-a,n.invalidate();var u=t._texture,h=u.baseTexture,l=t.tileTransform.localTransform,c=t.uvMatrix,f=h.isPowerOfTwo&&u.frame.width===h.width&&u.frame.height===h.height;f&&(h._glTextures[i.CONTEXT_UID]?f=h.wrapMode!==xe.CLAMP:h.wrapMode===xe.CLAMP&&(h.wrapMode=xe.REPEAT));var d=f?this.simpleShader:this.shader,v=u.width,p=u.height,_=t._width,m=t._height;xn.set(l.a*v/_,l.b*v/m,l.c*p/_,l.d*p/m,l.tx/_,l.ty/m),xn.invert(),f?xn.prepend(c.mapCoord):(d.uniforms.uMapCoord=c.mapCoord.toArray(!0),d.uniforms.uClampFrame=c.uClampFrame,d.uniforms.uClampOffset=c.uClampOffset),d.uniforms.uTransform=xn.toArray(!0),d.uniforms.uColor=La(t.tint,t.worldAlpha,d.uniforms.uColor,h.alphaMode),d.uniforms.translationMatrix=t.transform.worldTransform.toArray(!0),d.uniforms.uSampler=u,i.shader.bind(d),i.geometry.bind(n),this.state.blendMode=Ua(t.blendMode,h.alphaMode),i.state.set(this.state),i.geometry.draw(this.renderer.gl.TRIANGLES,6,0)},e}(Wi);/*!
 * @pixi/mesh - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/mesh is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ps=function(r,e){return Ps=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ps(r,e)};function pu(r,e){Ps(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var kc=function(){function r(e,t){this.uvBuffer=e,this.uvMatrix=t,this.data=null,this._bufferUpdateId=-1,this._textureUpdateId=-1,this._updateID=0}return r.prototype.update=function(e){if(!(!e&&this._bufferUpdateId===this.uvBuffer._updateID&&this._textureUpdateId===this.uvMatrix._updateID)){this._bufferUpdateId=this.uvBuffer._updateID,this._textureUpdateId=this.uvMatrix._updateID;var t=this.uvBuffer.data;(!this.data||this.data.length!==t.length)&&(this.data=new Float32Array(t.length)),this.uvMatrix.multiplyUvs(t,this.data),this._updateID++}},r}(),Oo=new Y,rl=new mi,Yr=function(r){pu(e,r);function e(t,i,n,o){o===void 0&&(o=Zt.TRIANGLES);var s=r.call(this)||this;return s.geometry=t,s.shader=i,s.state=n||rr.for2d(),s.drawMode=o,s.start=0,s.size=0,s.uvs=null,s.indices=null,s.vertexData=new Float32Array(1),s.vertexDirty=-1,s._transformID=-1,s._roundPixels=U.ROUND_PIXELS,s.batchUvs=null,s}return Object.defineProperty(e.prototype,"geometry",{get:function(){return this._geometry},set:function(t){this._geometry!==t&&(this._geometry&&(this._geometry.refCount--,this._geometry.refCount===0&&this._geometry.dispose()),this._geometry=t,this._geometry&&this._geometry.refCount++,this.vertexDirty=-1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"uvBuffer",{get:function(){return this.geometry.buffers[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticesBuffer",{get:function(){return this.geometry.buffers[0]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"material",{get:function(){return this.shader},set:function(t){this.shader=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.state.blendMode},set:function(t){this.state.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){this._roundPixels!==t&&(this._transformID=-1),this._roundPixels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return"tint"in this.shader?this.shader.tint:null},set:function(t){this.shader.tint=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"texture",{get:function(){return"texture"in this.shader?this.shader.texture:null},set:function(t){this.shader.texture=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){var i=this.geometry.buffers[0].data,n=this.shader;n.batchable&&this.drawMode===Zt.TRIANGLES&&i.length<e.BATCHABLE_SIZE*2?this._renderToBatch(t):this._renderDefault(t)},e.prototype._renderDefault=function(t){var i=this.shader;i.alpha=this.worldAlpha,i.update&&i.update(),t.batch.flush(),i.uniforms.translationMatrix=this.transform.worldTransform.toArray(!0),t.shader.bind(i),t.state.set(this.state),t.geometry.bind(this.geometry,i),t.geometry.draw(this.drawMode,this.size,this.start,this.geometry.instanceCount)},e.prototype._renderToBatch=function(t){var i=this.geometry,n=this.shader;n.uvMatrix&&(n.uvMatrix.update(),this.calculateUvs()),this.calculateVertices(),this.indices=i.indexBuffer.data,this._tintRGB=n._tintRGB,this._texture=n.texture;var o=this.material.pluginName;t.batch.setObjectRenderer(t.plugins[o]),t.plugins[o].render(this)},e.prototype.calculateVertices=function(){var t=this.geometry,i=t.buffers[0],n=i.data,o=i._updateID;if(!(o===this.vertexDirty&&this._transformID===this.transform._worldID)){this._transformID=this.transform._worldID,this.vertexData.length!==n.length&&(this.vertexData=new Float32Array(n.length));for(var s=this.transform.worldTransform,a=s.a,u=s.b,h=s.c,l=s.d,c=s.tx,f=s.ty,d=this.vertexData,v=0;v<d.length/2;v++){var p=n[v*2],_=n[v*2+1];d[v*2]=a*p+h*_+c,d[v*2+1]=u*p+l*_+f}if(this._roundPixels)for(var m=U.RESOLUTION,v=0;v<d.length;++v)d[v]=Math.round((d[v]*m|0)/m);this.vertexDirty=o}},e.prototype.calculateUvs=function(){var t=this.geometry.buffers[1],i=this.shader;i.uvMatrix.isSimple?this.uvs=t.data:(this.batchUvs||(this.batchUvs=new kc(t,i.uvMatrix)),this.batchUvs.update(),this.uvs=this.batchUvs.data)},e.prototype._calculateBounds=function(){this.calculateVertices(),this._bounds.addVertexData(this.vertexData,0,this.vertexData.length)},e.prototype.containsPoint=function(t){if(!this.getBounds().contains(t.x,t.y))return!1;this.worldTransform.applyInverse(t,Oo);for(var i=this.geometry.getBuffer("aVertexPosition").data,n=rl.points,o=this.geometry.getIndex().data,s=o.length,a=this.drawMode===4?3:1,u=0;u+2<s;u+=a){var h=o[u]*2,l=o[u+1]*2,c=o[u+2]*2;if(n[0]=i[h],n[1]=i[h+1],n[2]=i[l],n[3]=i[l+1],n[4]=i[c],n[5]=i[c+1],rl.contains(Oo.x,Oo.y))return!0}return!1},e.prototype.destroy=function(t){r.prototype.destroy.call(this,t),this._cachedTexture&&(this._cachedTexture.destroy(),this._cachedTexture=null),this.geometry=null,this.shader=null,this.state=null,this.uvs=null,this.indices=null,this.vertexData=null},e.BATCHABLE_SIZE=100,e}(It),ry=`varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`,iy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTextureMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
}
`,$r=function(r){pu(e,r);function e(t,i){var n=this,o={uSampler:t,alpha:1,uTextureMatrix:_t.IDENTITY,uColor:new Float32Array([1,1,1,1])};return i=Object.assign({tint:16777215,alpha:1,pluginName:"batch"},i),i.uniforms&&Object.assign(o,i.uniforms),n=r.call(this,i.program||ri.from(iy,ry),o)||this,n._colorDirty=!1,n.uvMatrix=new Qn(t),n.batchable=i.program===void 0,n.pluginName=i.pluginName,n.tint=i.tint,n.alpha=i.alpha,n}return Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uSampler},set:function(t){this.uniforms.uSampler!==t&&(this.uniforms.uSampler=t,this.uvMatrix.texture=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){t!==this._alpha&&(this._alpha=t,this._colorDirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){t!==this._tint&&(this._tint=t,this._tintRGB=(t>>16)+(t&65280)+((t&255)<<16),this._colorDirty=!0)},enumerable:!1,configurable:!0}),e.prototype.update=function(){if(this._colorDirty){this._colorDirty=!1;var t=this.texture.baseTexture;La(this._tint,this._alpha,this.uniforms.uColor,t.alphaMode)}this.uvMatrix.update()&&(this.uniforms.uTextureMatrix=this.uvMatrix.mapCoord)},e}(Oe),$i=function(r){pu(e,r);function e(t,i,n){var o=r.call(this)||this,s=new Tt(t),a=new Tt(i,!0),u=new Tt(n,!0,!0);return o.addAttribute("aVertexPosition",s,2,!1,G.FLOAT).addAttribute("aTextureCoord",a,2,!1,G.FLOAT).addIndex(u),o._updateId=-1,o}return Object.defineProperty(e.prototype,"vertexDirtyId",{get:function(){return this.buffers[0]._updateID},enumerable:!1,configurable:!0}),e}(ei);/*!
 * @pixi/text-bitmap - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/text-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Is=function(r,e){return Is=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Is(r,e)};function ny(r,e){Is(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ui=function(){function r(){this.info=[],this.common=[],this.page=[],this.char=[],this.kerning=[],this.distanceField=[]}return r}(),oy=function(){function r(){}return r.test=function(e){return typeof e=="string"&&e.indexOf("info face=")===0},r.parse=function(e){var t=e.match(/^[a-z]+\s+.+$/gm),i={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(var n in t){var o=t[n].match(/^[a-z]+/gm)[0],s=t[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),a={};for(var u in s){var h=s[u].split("="),l=h[0],c=h[1].replace(/"/gm,""),f=parseFloat(c),d=isNaN(f)?c:f;a[l]=d}i[o].push(a)}var v=new Ui;return i.info.forEach(function(p){return v.info.push({face:p.face,size:parseInt(p.size,10)})}),i.common.forEach(function(p){return v.common.push({lineHeight:parseInt(p.lineHeight,10)})}),i.page.forEach(function(p){return v.page.push({id:parseInt(p.id,10),file:p.file})}),i.char.forEach(function(p){return v.char.push({id:parseInt(p.id,10),page:parseInt(p.page,10),x:parseInt(p.x,10),y:parseInt(p.y,10),width:parseInt(p.width,10),height:parseInt(p.height,10),xoffset:parseInt(p.xoffset,10),yoffset:parseInt(p.yoffset,10),xadvance:parseInt(p.xadvance,10)})}),i.kerning.forEach(function(p){return v.kerning.push({first:parseInt(p.first,10),second:parseInt(p.second,10),amount:parseInt(p.amount,10)})}),i.distanceField.forEach(function(p){return v.distanceField.push({distanceRange:parseInt(p.distanceRange,10),fieldType:p.fieldType})}),v},r}(),Rs=function(){function r(){}return r.test=function(e){return e instanceof XMLDocument&&e.getElementsByTagName("page").length&&e.getElementsByTagName("info")[0].getAttribute("face")!==null},r.parse=function(e){for(var t=new Ui,i=e.getElementsByTagName("info"),n=e.getElementsByTagName("common"),o=e.getElementsByTagName("page"),s=e.getElementsByTagName("char"),a=e.getElementsByTagName("kerning"),u=e.getElementsByTagName("distanceField"),h=0;h<i.length;h++)t.info.push({face:i[h].getAttribute("face"),size:parseInt(i[h].getAttribute("size"),10)});for(var h=0;h<n.length;h++)t.common.push({lineHeight:parseInt(n[h].getAttribute("lineHeight"),10)});for(var h=0;h<o.length;h++)t.page.push({id:parseInt(o[h].getAttribute("id"),10)||0,file:o[h].getAttribute("file")});for(var h=0;h<s.length;h++){var l=s[h];t.char.push({id:parseInt(l.getAttribute("id"),10),page:parseInt(l.getAttribute("page"),10)||0,x:parseInt(l.getAttribute("x"),10),y:parseInt(l.getAttribute("y"),10),width:parseInt(l.getAttribute("width"),10),height:parseInt(l.getAttribute("height"),10),xoffset:parseInt(l.getAttribute("xoffset"),10),yoffset:parseInt(l.getAttribute("yoffset"),10),xadvance:parseInt(l.getAttribute("xadvance"),10)})}for(var h=0;h<a.length;h++)t.kerning.push({first:parseInt(a[h].getAttribute("first"),10),second:parseInt(a[h].getAttribute("second"),10),amount:parseInt(a[h].getAttribute("amount"),10)});for(var h=0;h<u.length;h++)t.distanceField.push({fieldType:u[h].getAttribute("fieldType"),distanceRange:parseInt(u[h].getAttribute("distanceRange"),10)});return t},r}(),sy=function(){function r(){}return r.test=function(e){if(typeof e=="string"&&e.indexOf("<font>")>-1){var t=new globalThis.DOMParser().parseFromString(e,"text/xml");return Rs.test(t)}return!1},r.parse=function(e){var t=new globalThis.DOMParser().parseFromString(e,"text/xml");return Rs.parse(t)},r}(),No=[oy,Rs,sy];function zc(r){for(var e=0;e<No.length;e++)if(No[e].test(r))return No[e];return null}function ay(r,e,t,i,n,o){var s=t.fill;if(Array.isArray(s)){if(s.length===1)return s[0]}else return s;var a,u=t.dropShadow?t.dropShadowDistance:0,h=t.padding||0,l=r.width/i-u-h*2,c=r.height/i-u-h*2,f=s.slice(),d=t.fillGradientStops.slice();if(!d.length)for(var v=f.length+1,p=1;p<v;++p)d.push(p/v);if(f.unshift(s[0]),d.unshift(0),f.push(s[s.length-1]),d.push(1),t.fillGradientType===Wr.LINEAR_VERTICAL){a=e.createLinearGradient(l/2,h,l/2,c+h);for(var _=0,m=o.fontProperties.fontSize+t.strokeThickness,y=m/c,p=0;p<n.length;p++)for(var b=o.lineHeight*p,C=0;C<f.length;C++){var x=0;typeof d[C]=="number"?x=d[C]:x=C/f.length;var g=b/c+x*y,E=Math.max(_,g);E=Math.min(E,1),a.addColorStop(E,f[C]),_=E}}else{a=e.createLinearGradient(h,c/2,l+h,c/2);for(var w=f.length+1,T=1,p=0;p<f.length;p++){var A=void 0;typeof d[p]=="number"?A=d[p]:A=T/w,a.addColorStop(A,f[p]),T++}}return a}function uy(r,e,t,i,n,o,s){var a=t.text,u=t.fontProperties;e.translate(i,n),e.scale(o,o);var h=s.strokeThickness/2,l=-(s.strokeThickness/2);if(e.font=s.toFontString(),e.lineWidth=s.strokeThickness,e.textBaseline=s.textBaseline,e.lineJoin=s.lineJoin,e.miterLimit=s.miterLimit,e.fillStyle=ay(r,e,s,o,[a],t),e.strokeStyle=s.stroke,s.dropShadow){var c=s.dropShadowColor,f=Rt(typeof c=="number"?c:Na(c)),d=s.dropShadowBlur*o,v=s.dropShadowDistance*o;e.shadowColor="rgba("+f[0]*255+","+f[1]*255+","+f[2]*255+","+s.dropShadowAlpha+")",e.shadowBlur=d,e.shadowOffsetX=Math.cos(s.dropShadowAngle)*v,e.shadowOffsetY=Math.sin(s.dropShadowAngle)*v}else e.shadowColor="black",e.shadowBlur=0,e.shadowOffsetX=0,e.shadowOffsetY=0;s.stroke&&s.strokeThickness&&e.strokeText(a,h,l+t.lineHeight-u.descent),s.fill&&e.fillText(a,h,l+t.lineHeight-u.descent),e.setTransform(1,0,0,1,0,0),e.fillStyle="rgba(0, 0, 0, 0)"}function Xc(r){return Array.from?Array.from(r):r.split("")}function hy(r){typeof r=="string"&&(r=[r]);for(var e=[],t=0,i=r.length;t<i;t++){var n=r[t];if(Array.isArray(n)){if(n.length!==2)throw new Error("[BitmapFont]: Invalid character range length, expecting 2 got "+n.length+".");var o=n[0].charCodeAt(0),s=n[1].charCodeAt(0);if(s<o)throw new Error("[BitmapFont]: Invalid character range.");for(var a=o,u=s;a<=u;a++)e.push(String.fromCharCode(a))}else e.push.apply(e,Xc(n))}if(e.length===0)throw new Error("[BitmapFont]: Empty set when resolving characters.");return e}function An(r){return r.codePointAt?r.codePointAt(0):r.charCodeAt(0)}var _r=function(){function r(e,t,i){var n,o,s=e.info[0],a=e.common[0],u=e.page[0],h=e.distanceField[0],l=Ri(u.file),c={};this._ownsTextures=i,this.font=s.face,this.size=s.size,this.lineHeight=a.lineHeight/l,this.chars={},this.pageTextures=c;for(var f=0;f<e.page.length;f++){var d=e.page[f],v=d.id,p=d.file;c[v]=t instanceof Array?t[f]:t[p],(h==null?void 0:h.fieldType)&&h.fieldType!=="none"&&(c[v].baseTexture.alphaMode=re.NO_PREMULTIPLIED_ALPHA)}for(var f=0;f<e.char.length;f++){var _=e.char[f],v=_.id,m=_.page,y=e.char[f],b=y.x,C=y.y,x=y.width,g=y.height,E=y.xoffset,w=y.yoffset,T=y.xadvance;b/=l,C/=l,x/=l,g/=l,E/=l,w/=l,T/=l;var A=new K(b+c[m].frame.x/l,C+c[m].frame.y/l,x,g);this.chars[v]={xOffset:E,yOffset:w,xAdvance:T,kerning:{},texture:new k(c[m].baseTexture,A),page:m}}for(var f=0;f<e.kerning.length;f++){var O=e.kerning[f],N=O.first,F=O.second,D=O.amount;N/=l,F/=l,D/=l,this.chars[F]&&(this.chars[F].kerning[N]=D)}this.distanceFieldRange=h==null?void 0:h.distanceRange,this.distanceFieldType=(o=(n=h==null?void 0:h.fieldType)===null||n===void 0?void 0:n.toLowerCase())!==null&&o!==void 0?o:"none"}return r.prototype.destroy=function(){for(var e in this.chars)this.chars[e].texture.destroy(),this.chars[e].texture=null;for(var e in this.pageTextures)this._ownsTextures&&this.pageTextures[e].destroy(!0),this.pageTextures[e]=null;this.chars=null,this.pageTextures=null},r.install=function(e,t,i){var n;if(e instanceof Ui)n=e;else{var o=zc(e);if(!o)throw new Error("Unrecognized data format for font.");n=o.parse(e)}t instanceof k&&(t=[t]);var s=new r(n,t,i);return r.available[s.font]=s,s},r.uninstall=function(e){var t=r.available[e];if(!t)throw new Error("No font found named '"+e+"'");t.destroy(),delete r.available[e]},r.from=function(e,t,i){if(!e)throw new Error("[BitmapFont] Property `name` is required.");var n=Object.assign({},r.defaultOptions,i),o=n.chars,s=n.padding,a=n.resolution,u=n.textureWidth,h=n.textureHeight,l=hy(o),c=t instanceof Ar?t:new Ar(t),f=u,d=new Ui;d.info[0]={face:c.fontFamily,size:c.fontSize},d.common[0]={lineHeight:c.fontSize};for(var v=0,p=0,_,m,y,b=0,C=[],x=0;x<l.length;x++){_||(_=document.createElement("canvas"),_.width=u,_.height=h,m=_.getContext("2d"),y=new q(_,{resolution:a}),C.push(new k(y)),d.page.push({id:C.length-1,file:""}));var g=pe.measureText(l[x],c,!1,_),E=g.width,w=Math.ceil(g.height),T=Math.ceil((c.fontStyle==="italic"?2:1)*E);if(p>=h-w*a){if(p===0)throw new Error("[BitmapFont] textureHeight "+h+"px is "+("too small for "+c.fontSize+"px fonts"));--x,_=null,m=null,y=null,p=0,v=0,b=0;continue}if(b=Math.max(w+g.fontProperties.descent,b),T*a+v>=f){--x,p+=b*a,p=Math.ceil(p),v=0,b=0;continue}uy(_,m,g,v,p,a,c);var A=An(g.text);d.char.push({id:A,page:C.length-1,x:v/a,y:p/a,width:T,height:w,xoffset:0,yoffset:0,xadvance:Math.ceil(E-(c.dropShadow?c.dropShadowDistance:0)-(c.stroke?c.strokeThickness:0))}),v+=(T+2*s)*a,v=Math.ceil(v)}for(var x=0,O=l.length;x<O;x++)for(var N=l[x],F=0;F<O;F++){var D=l[F],S=m.measureText(N).width,I=m.measureText(D).width,M=m.measureText(N+D).width,V=M-(S+I);V&&d.kerning.push({first:An(N),second:An(D),amount:V})}var Q=new r(d,C,!0);return r.available[e]!==void 0&&r.uninstall(e),r.available[e]=Q,Q},r.ALPHA=[["a","z"],["A","Z"]," "],r.NUMERIC=[["0","9"]],r.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "],r.ASCII=[[" ","~"]],r.defaultOptions={resolution:1,textureWidth:512,textureHeight:512,padding:4,chars:r.ALPHANUMERIC},r.available={},r}(),ly=`// Pixi texture info\r
varying vec2 vTextureCoord;\r
uniform sampler2D uSampler;\r
\r
// Tint\r
uniform vec4 uColor;\r
\r
// on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
uniform float uFWidth;\r
\r
void main(void) {\r
\r
  // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
  vec4 texColor = texture2D(uSampler, vTextureCoord);\r
\r
  // MSDF\r
  float median = texColor.r + texColor.g + texColor.b -\r
                  min(texColor.r, min(texColor.g, texColor.b)) -\r
                  max(texColor.r, max(texColor.g, texColor.b));\r
  // SDF\r
  median = min(median, texColor.a);\r
\r
  float screenPxDistance = uFWidth * (median - 0.5);\r
  float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
\r
  // NPM Textures, NPM outputs\r
  gl_FragColor = vec4(uColor.rgb, uColor.a * alpha);\r
\r
}\r
`,fy=`// Mesh material default fragment\r
attribute vec2 aVertexPosition;\r
attribute vec2 aTextureCoord;\r
\r
uniform mat3 projectionMatrix;\r
uniform mat3 translationMatrix;\r
uniform mat3 uTextureMatrix;\r
\r
varying vec2 vTextureCoord;\r
\r
void main(void)\r
{\r
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
\r
    vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
}\r
`,cy=[],dy=[],il=[],py=function(r){ny(e,r);function e(t,i){i===void 0&&(i={});var n=r.call(this)||this;n._tint=16777215;var o=Object.assign({},e.styleDefaults,i),s=o.align,a=o.tint,u=o.maxWidth,h=o.letterSpacing,l=o.fontName,c=o.fontSize;if(!_r.available[l])throw new Error('Missing BitmapFont "'+l+'"');return n._activePagesMeshData=[],n._textWidth=0,n._textHeight=0,n._align=s,n._tint=a,n._fontName=l,n._fontSize=c||_r.available[l].size,n.text=t,n._maxWidth=u,n._maxLineHeight=0,n._letterSpacing=h,n._anchor=new ze(function(){n.dirty=!0},n,0,0),n._roundPixels=U.ROUND_PIXELS,n.dirty=!0,n._textureCache={},n}return e.prototype.updateText=function(){for(var t,i=_r.available[this._fontName],n=this._fontSize/i.size,o=new Y,s=[],a=[],u=[],h=this._text.replace(/(?:\r\n|\r)/g,`
`)||" ",l=Xc(h),c=this._maxWidth*i.size/this._fontSize,f=i.distanceFieldType==="none"?cy:dy,d=null,v=0,p=0,_=0,m=-1,y=0,b=0,C=0,x=0,g=0;g<l.length;g++){var E=l[g],w=An(E);if(/(?:\s)/.test(E)&&(m=g,y=v,x++),E==="\r"||E===`
`){a.push(v),u.push(-1),p=Math.max(p,v),++_,++b,o.x=0,o.y+=i.lineHeight,d=null,x=0;continue}var T=i.chars[w];if(!!T){d&&T.kerning[d]&&(o.x+=T.kerning[d]);var A=il.pop()||{texture:k.EMPTY,line:0,charCode:0,prevSpaces:0,position:new Y};A.texture=T.texture,A.line=_,A.charCode=w,A.position.x=o.x+T.xOffset+this._letterSpacing/2,A.position.y=o.y+T.yOffset,A.prevSpaces=x,s.push(A),v=A.position.x+Math.max(T.xAdvance,T.texture.orig.width),o.x+=T.xAdvance+this._letterSpacing,C=Math.max(C,T.yOffset+T.texture.height),d=w,m!==-1&&c>0&&o.x>c&&(++b,xr(s,1+m-b,1+g-m),g=m,m=-1,a.push(y),u.push(s.length>0?s[s.length-1].prevSpaces:0),p=Math.max(p,y),_++,o.x=0,o.y+=i.lineHeight,d=null,x=0)}}var O=l[l.length-1];O!=="\r"&&O!==`
`&&(/(?:\s)/.test(O)&&(v=y),a.push(v),p=Math.max(p,v),u.push(-1));for(var N=[],g=0;g<=_;g++){var F=0;this._align==="right"?F=p-a[g]:this._align==="center"?F=(p-a[g])/2:this._align==="justify"&&(F=u[g]<0?0:(p-a[g])/u[g]),N.push(F)}for(var D=s.length,S={},I=[],M=this._activePagesMeshData,g=0;g<M.length;g++)f.push(M[g]);for(var g=0;g<D;g++){var V=s[g].texture,Q=V.baseTexture.uid;if(!S[Q]){var P=f.pop();if(!P){var L=new $i,X=void 0,j=void 0;i.distanceFieldType==="none"?(X=new $r(k.EMPTY),j=B.NORMAL):(X=new $r(k.EMPTY,{program:ri.from(fy,ly),uniforms:{uFWidth:0}}),j=B.NORMAL_NPM);var $=new Yr(L,X);$.blendMode=j,P={index:0,indexCount:0,vertexCount:0,uvsCount:0,total:0,mesh:$,vertices:null,uvs:null,indices:null}}P.index=0,P.indexCount=0,P.vertexCount=0,P.uvsCount=0,P.total=0;var dt=this._textureCache;dt[Q]=dt[Q]||new k(V.baseTexture),P.mesh.texture=dt[Q],P.mesh.tint=this._tint,I.push(P),S[Q]=P}S[Q].total++}for(var g=0;g<M.length;g++)I.indexOf(M[g])===-1&&this.removeChild(M[g].mesh);for(var g=0;g<I.length;g++)I[g].mesh.parent!==this&&this.addChild(I[g].mesh);this._activePagesMeshData=I;for(var g in S){var P=S[g],et=P.total;if(!(((t=P.indices)===null||t===void 0?void 0:t.length)>6*et)||P.vertices.length<Yr.BATCHABLE_SIZE*2)P.vertices=new Float32Array(4*2*et),P.uvs=new Float32Array(4*2*et),P.indices=new Uint16Array(6*et);else for(var xt=P.total,Ct=P.vertices,pt=xt*4*2;pt<Ct.length;pt++)Ct[pt]=0;P.mesh.size=6*et}for(var g=0;g<D;g++){var E=s[g],mt=E.position.x+N[E.line]*(this._align==="justify"?E.prevSpaces:1);this._roundPixels&&(mt=Math.round(mt));var tt=mt*n,st=E.position.y*n,V=E.texture,W=S[V.baseTexture.uid],Lt=V.frame,Et=V._uvs,J=W.index++;W.indices[J*6+0]=0+J*4,W.indices[J*6+1]=1+J*4,W.indices[J*6+2]=2+J*4,W.indices[J*6+3]=0+J*4,W.indices[J*6+4]=2+J*4,W.indices[J*6+5]=3+J*4,W.vertices[J*8+0]=tt,W.vertices[J*8+1]=st,W.vertices[J*8+2]=tt+Lt.width*n,W.vertices[J*8+3]=st,W.vertices[J*8+4]=tt+Lt.width*n,W.vertices[J*8+5]=st+Lt.height*n,W.vertices[J*8+6]=tt,W.vertices[J*8+7]=st+Lt.height*n,W.uvs[J*8+0]=Et.x0,W.uvs[J*8+1]=Et.y0,W.uvs[J*8+2]=Et.x1,W.uvs[J*8+3]=Et.y1,W.uvs[J*8+4]=Et.x2,W.uvs[J*8+5]=Et.y2,W.uvs[J*8+6]=Et.x3,W.uvs[J*8+7]=Et.y3}this._textWidth=p*n,this._textHeight=(o.y+i.lineHeight)*n;for(var g in S){var P=S[g];if(this.anchor.x!==0||this.anchor.y!==0)for(var ve=0,Sr=this._textWidth*this.anchor.x,Ki=this._textHeight*this.anchor.y,Su=0;Su<P.total;Su++)P.vertices[ve++]-=Sr,P.vertices[ve++]-=Ki,P.vertices[ve++]-=Sr,P.vertices[ve++]-=Ki,P.vertices[ve++]-=Sr,P.vertices[ve++]-=Ki,P.vertices[ve++]-=Sr,P.vertices[ve++]-=Ki;this._maxLineHeight=C*n;var Ou=P.mesh.geometry.getBuffer("aVertexPosition"),Nu=P.mesh.geometry.getBuffer("aTextureCoord"),Fu=P.mesh.geometry.getIndex();Ou.data=P.vertices,Nu.data=P.uvs,Fu.data=P.indices,Ou.update(),Nu.update(),Fu.update()}for(var g=0;g<s.length;g++)il.push(s[g])},e.prototype.updateTransform=function(){this.validate(),this.containerUpdateTransform()},e.prototype._render=function(t){var i=_r.available[this._fontName],n=i.distanceFieldRange,o=i.distanceFieldType,s=i.size;if(o!=="none")for(var a=this.worldTransform,u=a.a,h=a.b,l=a.c,c=a.d,f=Math.sqrt(u*u+h*h),d=Math.sqrt(l*l+c*c),v=(Math.abs(f)+Math.abs(d))/2,p=this._fontSize/s,_=0,m=this._activePagesMeshData;_<m.length;_++){var y=m[_];y.mesh.shader.uniforms.uFWidth=v*n*p*t.resolution}r.prototype._render.call(this,t)},e.prototype.getLocalBounds=function(){return this.validate(),r.prototype.getLocalBounds.call(this)},e.prototype.validate=function(){this.dirty&&(this.updateText(),this.dirty=!1)},Object.defineProperty(e.prototype,"tint",{get:function(){return this._tint},set:function(t){if(this._tint!==t){this._tint=t;for(var i=0;i<this._activePagesMeshData.length;i++)this._activePagesMeshData[i].mesh.tint=t}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"align",{get:function(){return this._align},set:function(t){this._align!==t&&(this._align=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontName",{get:function(){return this._fontName},set:function(t){if(!_r.available[t])throw new Error('Missing BitmapFont "'+t+'"');this._fontName!==t&&(this._fontName=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fontSize",{get:function(){return this._fontSize},set:function(t){this._fontSize!==t&&(this._fontSize=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"anchor",{get:function(){return this._anchor},set:function(t){typeof t=="number"?this._anchor.set(t):this._anchor.copyFrom(t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"text",{get:function(){return this._text},set:function(t){t=String(t==null?"":t),this._text!==t&&(this._text=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxWidth",{get:function(){return this._maxWidth},set:function(t){this._maxWidth!==t&&(this._maxWidth=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"maxLineHeight",{get:function(){return this.validate(),this._maxLineHeight},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textWidth",{get:function(){return this.validate(),this._textWidth},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"letterSpacing",{get:function(){return this._letterSpacing},set:function(t){this._letterSpacing!==t&&(this._letterSpacing=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundPixels",{get:function(){return this._roundPixels},set:function(t){t!==this._roundPixels&&(this._roundPixels=t,this.dirty=!0)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textHeight",{get:function(){return this.validate(),this._textHeight},enumerable:!1,configurable:!0}),e.prototype.destroy=function(t){var i=this._textureCache;for(var n in i){var o=i[n];o.destroy(),delete i[n]}this._textureCache=null,r.prototype.destroy.call(this,t)},e.styleDefaults={align:"left",tint:16777215,maxWidth:0,letterSpacing:0},e}(It),jc=function(){function r(){}return r.add=function(){ct.setExtensionXhrType("fnt",ct.XHR_RESPONSE_TYPE.TEXT)},r.use=function(e,t){var i=zc(e.data);if(!i){t();return}for(var n=r.getBaseUrl(this,e),o=i.parse(e.data),s={},a=function(p){s[p.metadata.pageFile]=p.texture,Object.keys(s).length===o.page.length&&(e.bitmapFont=_r.install(o,s,!0),t())},u=0;u<o.page.length;++u){var h=o.page[u].file,l=n+h,c=!1;for(var f in this.resources){var d=this.resources[f];if(d.url===l){d.metadata.pageFile=h,d.texture?a(d):d.onAfterMiddleware.add(a),c=!0;break}}if(!c){var v={crossOrigin:e.crossOrigin,loadType:ct.LOAD_TYPE.IMAGE,metadata:Object.assign({pageFile:h},e.metadata.imageMetadata),parentResource:e};this.add(l,v,a)}}},r.getBaseUrl=function(e,t){var i=t.isDataUrl?"":r.dirname(t.url);return t.isDataUrl&&(i==="."&&(i=""),e.baseUrl&&i&&e.baseUrl.charAt(e.baseUrl.length-1)==="/"&&(i+="/")),i=i.replace(e.baseUrl,""),i&&i.charAt(i.length-1)!=="/"&&(i+="/"),i},r.dirname=function(e){var t=e.replace(/\\/g,"/").replace(/\/$/,"").replace(/\/[^\/]*$/,"");return t===e?".":t===""?"/":t},r}();/*!
 * @pixi/filter-alpha - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/filter-alpha is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ss=function(r,e){return Ss=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ss(r,e)};function vy(r,e){Ss(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var _y=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`,Hc=function(r){vy(e,r);function e(t){t===void 0&&(t=1);var i=r.call(this,nc,_y,{uAlpha:1})||this;return i.alpha=t,i}return Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(z);/*!
 * @pixi/filter-blur - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/filter-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Os=function(r,e){return Os=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Os(r,e)};function Vc(r,e){Os(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var my=`
    attribute vec2 aVertexPosition;

    uniform mat3 projectionMatrix;

    uniform float strength;

    varying vec2 vBlurTexCoords[%size%];

    uniform vec4 inputSize;
    uniform vec4 outputFrame;

    vec4 filterVertexPosition( void )
    {
        vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

        return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
    }

    vec2 filterTextureCoord( void )
    {
        return aVertexPosition * (outputFrame.zw * inputSize.zw);
    }

    void main(void)
    {
        gl_Position = filterVertexPosition();

        vec2 textureCoord = filterTextureCoord();
        %blur%
    }`;function gy(r,e){var t=Math.ceil(r/2),i=my,n="",o;e?o="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);":o="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";for(var s=0;s<r;s++){var a=o.replace("%index%",s.toString());a=a.replace("%sampleIndex%",s-(t-1)+".0"),n+=a,n+=`
`}return i=i.replace("%blur%",n),i=i.replace("%size%",r.toString()),i}var yy={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]},xy=["varying vec2 vBlurTexCoords[%size%];","uniform sampler2D uSampler;","void main(void)","{","    gl_FragColor = vec4(0.0);","    %blur%","}"].join(`
`);function by(r){for(var e=yy[r],t=e.length,i=xy,n="",o="gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;",s,a=0;a<r;a++){var u=o.replace("%index%",a.toString());s=a,a>=t&&(s=r-a-1),u=u.replace("%value%",e[s].toString()),n+=u,n+=`
`}return i=i.replace("%blur%",n),i=i.replace("%size%",r.toString()),i}/*!
 * @pixi/constants - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var nl;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(nl||(nl={}));var ol;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(ol||(ol={}));var sl;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(sl||(sl={}));var al;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(al||(al={}));var ul;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(ul||(ul={}));var hl;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(hl||(hl={}));var ll;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(ll||(ll={}));var fl;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(fl||(fl={}));var cl;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(cl||(cl={}));var dl;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(dl||(dl={}));var pl;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(pl||(pl={}));var vl;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(vl||(vl={}));var _l;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(_l||(_l={}));var Li;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(Li||(Li={}));var ml;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(ml||(ml={}));var gl;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(gl||(gl={}));var yl;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(yl||(yl={}));var xl;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(xl||(xl={}));var bl;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(bl||(bl={}));var Mi=function(r){Vc(e,r);function e(t,i,n,o,s){i===void 0&&(i=8),n===void 0&&(n=4),o===void 0&&(o=U.FILTER_RESOLUTION),s===void 0&&(s=5);var a=this,u=gy(s,t),h=by(s);return a=r.call(this,u,h)||this,a.horizontal=t,a.resolution=o,a._quality=0,a.quality=n,a.blur=i,a}return e.prototype.apply=function(t,i,n,o){if(n?this.horizontal?this.uniforms.strength=1/n.width*(n.width/i.width):this.uniforms.strength=1/n.height*(n.height/i.height):this.horizontal?this.uniforms.strength=1/t.renderer.width*(t.renderer.width/i.width):this.uniforms.strength=1/t.renderer.height*(t.renderer.height/i.height),this.uniforms.strength*=this.strength,this.uniforms.strength/=this.passes,this.passes===1)t.applyFilter(this,i,n,o);else{var s=t.getFilterTexture(),a=t.renderer,u=i,h=s;this.state.blend=!1,t.applyFilter(this,u,h,Li.CLEAR);for(var l=1;l<this.passes-1;l++){t.bindAndClear(u,Li.BLIT),this.uniforms.uSampler=h;var c=h;h=u,u=c,a.shader.bind(this),a.geometry.draw(5)}this.state.blend=!0,t.applyFilter(this,h,n,o),t.returnFilterTexture(s)}},Object.defineProperty(e.prototype,"blur",{get:function(){return this.strength},set:function(t){this.padding=1+Math.abs(t)*2,this.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=t,this.passes=t},enumerable:!1,configurable:!0}),e}(z),Ty=function(r){Vc(e,r);function e(t,i,n,o){t===void 0&&(t=8),i===void 0&&(i=4),n===void 0&&(n=U.FILTER_RESOLUTION),o===void 0&&(o=5);var s=r.call(this)||this;return s.blurXFilter=new Mi(!0,t,i,n,o),s.blurYFilter=new Mi(!1,t,i,n,o),s.resolution=n,s.quality=i,s.blur=t,s.repeatEdgePixels=!1,s}return e.prototype.apply=function(t,i,n,o){var s=Math.abs(this.blurXFilter.strength),a=Math.abs(this.blurYFilter.strength);if(s&&a){var u=t.getFilterTexture();this.blurXFilter.apply(t,i,u,Li.CLEAR),this.blurYFilter.apply(t,u,n,o),t.returnFilterTexture(u)}else a?this.blurYFilter.apply(t,i,n,o):this.blurXFilter.apply(t,i,n,o)},e.prototype.updatePadding=function(){this._repeatEdgePixels?this.padding=0:this.padding=Math.max(Math.abs(this.blurXFilter.strength),Math.abs(this.blurYFilter.strength))*2},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this.blurXFilter.quality},set:function(t){this.blurXFilter.quality=this.blurYFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t,this.updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blendMode",{get:function(){return this.blurYFilter.blendMode},set:function(t){this.blurYFilter.blendMode=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"repeatEdgePixels",{get:function(){return this._repeatEdgePixels},set:function(t){this._repeatEdgePixels=t,this.updatePadding()},enumerable:!1,configurable:!0}),e}(z);/*!
 * @pixi/filter-color-matrix - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/filter-color-matrix is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ns=function(r,e){return Ns=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ns(r,e)};function Cy(r,e){Ns(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ey=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`,Fs=function(r){Cy(e,r);function e(){var t=this,i={m:new Float32Array([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0]),uAlpha:1};return t=r.call(this,au,Ey,i)||this,t.alpha=1,t}return e.prototype._loadMatrix=function(t,i){i===void 0&&(i=!1);var n=t;i&&(this._multiply(n,this.uniforms.m,t),n=this._colorMatrix(n)),this.uniforms.m=n},e.prototype._multiply=function(t,i,n){return t[0]=i[0]*n[0]+i[1]*n[5]+i[2]*n[10]+i[3]*n[15],t[1]=i[0]*n[1]+i[1]*n[6]+i[2]*n[11]+i[3]*n[16],t[2]=i[0]*n[2]+i[1]*n[7]+i[2]*n[12]+i[3]*n[17],t[3]=i[0]*n[3]+i[1]*n[8]+i[2]*n[13]+i[3]*n[18],t[4]=i[0]*n[4]+i[1]*n[9]+i[2]*n[14]+i[3]*n[19]+i[4],t[5]=i[5]*n[0]+i[6]*n[5]+i[7]*n[10]+i[8]*n[15],t[6]=i[5]*n[1]+i[6]*n[6]+i[7]*n[11]+i[8]*n[16],t[7]=i[5]*n[2]+i[6]*n[7]+i[7]*n[12]+i[8]*n[17],t[8]=i[5]*n[3]+i[6]*n[8]+i[7]*n[13]+i[8]*n[18],t[9]=i[5]*n[4]+i[6]*n[9]+i[7]*n[14]+i[8]*n[19]+i[9],t[10]=i[10]*n[0]+i[11]*n[5]+i[12]*n[10]+i[13]*n[15],t[11]=i[10]*n[1]+i[11]*n[6]+i[12]*n[11]+i[13]*n[16],t[12]=i[10]*n[2]+i[11]*n[7]+i[12]*n[12]+i[13]*n[17],t[13]=i[10]*n[3]+i[11]*n[8]+i[12]*n[13]+i[13]*n[18],t[14]=i[10]*n[4]+i[11]*n[9]+i[12]*n[14]+i[13]*n[19]+i[14],t[15]=i[15]*n[0]+i[16]*n[5]+i[17]*n[10]+i[18]*n[15],t[16]=i[15]*n[1]+i[16]*n[6]+i[17]*n[11]+i[18]*n[16],t[17]=i[15]*n[2]+i[16]*n[7]+i[17]*n[12]+i[18]*n[17],t[18]=i[15]*n[3]+i[16]*n[8]+i[17]*n[13]+i[18]*n[18],t[19]=i[15]*n[4]+i[16]*n[9]+i[17]*n[14]+i[18]*n[19]+i[19],t},e.prototype._colorMatrix=function(t){var i=new Float32Array(t);return i[4]/=255,i[9]/=255,i[14]/=255,i[19]/=255,i},e.prototype.brightness=function(t,i){var n=[t,0,0,0,0,0,t,0,0,0,0,0,t,0,0,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.tint=function(t,i){var n=t>>16&255,o=t>>8&255,s=t&255,a=[n/255,0,0,0,0,0,o/255,0,0,0,0,0,s/255,0,0,0,0,0,1,0];this._loadMatrix(a,i)},e.prototype.greyscale=function(t,i){var n=[t,t,t,0,0,t,t,t,0,0,t,t,t,0,0,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.blackAndWhite=function(t){var i=[.3,.6,.1,0,0,.3,.6,.1,0,0,.3,.6,.1,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.hue=function(t,i){t=(t||0)/180*Math.PI;var n=Math.cos(t),o=Math.sin(t),s=Math.sqrt,a=1/3,u=s(a),h=n+(1-n)*a,l=a*(1-n)-u*o,c=a*(1-n)+u*o,f=a*(1-n)+u*o,d=n+a*(1-n),v=a*(1-n)-u*o,p=a*(1-n)-u*o,_=a*(1-n)+u*o,m=n+a*(1-n),y=[h,l,c,0,0,f,d,v,0,0,p,_,m,0,0,0,0,0,1,0];this._loadMatrix(y,i)},e.prototype.contrast=function(t,i){var n=(t||0)+1,o=-.5*(n-1),s=[n,0,0,0,o,0,n,0,0,o,0,0,n,0,o,0,0,0,1,0];this._loadMatrix(s,i)},e.prototype.saturate=function(t,i){t===void 0&&(t=0);var n=t*2/3+1,o=(n-1)*-.5,s=[n,o,o,0,0,o,n,o,0,0,o,o,n,0,0,0,0,0,1,0];this._loadMatrix(s,i)},e.prototype.desaturate=function(){this.saturate(-1)},e.prototype.negative=function(t){var i=[-1,0,0,1,0,0,-1,0,1,0,0,0,-1,1,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.sepia=function(t){var i=[.393,.7689999,.18899999,0,0,.349,.6859999,.16799999,0,0,.272,.5339999,.13099999,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.technicolor=function(t){var i=[1.9125277891456083,-.8545344976951645,-.09155508482755585,0,11.793603434377337,-.3087833385928097,1.7658908555458428,-.10601743074722245,0,-70.35205161461398,-.231103377548616,-.7501899197440212,1.847597816108189,0,30.950940869491138,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.polaroid=function(t){var i=[1.438,-.062,-.062,0,0,-.122,1.378,-.122,0,0,-.016,-.016,1.483,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.toBGR=function(t){var i=[0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.kodachrome=function(t){var i=[1.1285582396593525,-.3967382283601348,-.03992559172921793,0,63.72958762196502,-.16404339962244616,1.0835251566291304,-.05498805115633132,0,24.732407896706203,-.16786010706155763,-.5603416277695248,1.6014850761964943,0,35.62982807460946,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.browni=function(t){var i=[.5997023498159715,.34553243048391263,-.2708298674538042,0,47.43192855600873,-.037703249837783157,.8609577587992641,.15059552388459913,0,-36.96841498319127,.24113635128153335,-.07441037908422492,.44972182064877153,0,-7.562075277591283,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.vintage=function(t){var i=[.6279345635605994,.3202183420819367,-.03965408211312453,0,9.651285835294123,.02578397704808868,.6441188644374771,.03259127616149294,0,7.462829176470591,.0466055556782719,-.0851232987247891,.5241648018700465,0,5.159190588235296,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.colorTone=function(t,i,n,o,s){t=t||.2,i=i||.15,n=n||16770432,o=o||3375104;var a=(n>>16&255)/255,u=(n>>8&255)/255,h=(n&255)/255,l=(o>>16&255)/255,c=(o>>8&255)/255,f=(o&255)/255,d=[.3,.59,.11,0,0,a,u,h,t,0,l,c,f,i,0,a-l,u-c,h-f,0,0];this._loadMatrix(d,s)},e.prototype.night=function(t,i){t=t||.1;var n=[t*-2,-t,0,0,0,-t,0,t,0,0,0,t,t*2,0,0,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.predator=function(t,i){var n=[11.224130630493164*t,-4.794486999511719*t,-2.8746118545532227*t,0*t,.40342438220977783*t,-3.6330697536468506*t,9.193157196044922*t,-2.951810836791992*t,0*t,-1.316135048866272*t,-3.2184197902679443*t,-4.2375030517578125*t,7.476448059082031*t,0*t,.8044459223747253*t,0,0,0,1,0];this._loadMatrix(n,i)},e.prototype.lsd=function(t){var i=[2,-.4,.5,0,0,-.5,2,-.4,0,0,-.4,-.5,3,0,0,0,0,0,1,0];this._loadMatrix(i,t)},e.prototype.reset=function(){var t=[1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0];this._loadMatrix(t,!1)},Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.m},set:function(t){this.uniforms.m=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.uAlpha},set:function(t){this.uniforms.uAlpha=t},enumerable:!1,configurable:!0}),e}(z);Fs.prototype.grayscale=Fs.prototype.greyscale;/*!
 * @pixi/filter-displacement - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/filter-displacement is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Us=function(r,e){return Us=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Us(r,e)};function wy(r,e){Us(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ay=`varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;
uniform mat2 rotation;
uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform highp vec4 inputSize;
uniform vec4 inputClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy = scale * inputSize.zw * (rotation * map.xy);

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
}
`,Py=`attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
    return aVertexPosition * (outputFrame.zw * inputSize.zw);
}

void main(void)
{
	gl_Position = filterVertexPosition();
	vTextureCoord = filterTextureCoord();
	vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
}
`,Iy=function(r){wy(e,r);function e(t,i){var n=this,o=new _t;return t.renderable=!1,n=r.call(this,Py,Ay,{mapSampler:t._texture,filterMatrix:o,scale:{x:1,y:1},rotation:new Float32Array([1,0,0,1])})||this,n.maskSprite=t,n.maskMatrix=o,i==null&&(i=20),n.scale=new Y(i,i),n}return e.prototype.apply=function(t,i,n,o){this.uniforms.filterMatrix=t.calculateSpriteMatrix(this.maskMatrix,this.maskSprite),this.uniforms.scale.x=this.scale.x,this.uniforms.scale.y=this.scale.y;var s=this.maskSprite.worldTransform,a=Math.sqrt(s.a*s.a+s.b*s.b),u=Math.sqrt(s.c*s.c+s.d*s.d);a!==0&&u!==0&&(this.uniforms.rotation[0]=s.a/a,this.uniforms.rotation[1]=s.b/a,this.uniforms.rotation[2]=s.c/u,this.uniforms.rotation[3]=s.d/u),t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"map",{get:function(){return this.uniforms.mapSampler},set:function(t){this.uniforms.mapSampler=t},enumerable:!1,configurable:!0}),e}(z);/*!
 * @pixi/filter-fxaa - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/filter-fxaa is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ls=function(r,e){return Ls=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ls(r,e)};function Ry(r,e){Ls(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Sy=`
attribute vec2 aVertexPosition;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;

uniform vec4 inputSize;
uniform vec4 outputFrame;

vec4 filterVertexPosition( void )
{
    vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;

    return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
}

void texcoords(vec2 fragCoord, vec2 inverseVP,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = filterVertexPosition();

   vFragCoord = aVertexPosition * outputFrame.zw;

   texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}
`,Oy=`varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vFragCoord;
uniform sampler2D uSampler;
uniform highp vec4 inputSize;


/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.

 --

 From:
 https://github.com/mitsuhiko/webgl-meincraft

 Copyright (c) 2011 by Armin Ronacher.

 Some rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:

 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.

 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.

 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));

    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));

    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);

    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;

    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);

    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec4 color;

      color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`,Ny=function(r){Ry(e,r);function e(){return r.call(this,Sy,Oy)||this}return e}(z);/*!
 * @pixi/filter-noise - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/filter-noise is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ms=function(r,e){return Ms=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ms(r,e)};function Fy(r,e){Ms(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Uy=`precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`,Ly=function(r){Fy(e,r);function e(t,i){t===void 0&&(t=.5),i===void 0&&(i=Math.random());var n=r.call(this,au,Uy,{uNoise:0,uSeed:0})||this;return n.noise=t,n.seed=i,n}return Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.uNoise},set:function(t){this.uniforms.uNoise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"seed",{get:function(){return this.uniforms.uSeed},set:function(t){this.uniforms.uSeed=t},enumerable:!1,configurable:!0}),e}(z);/*!
 * @pixi/mixin-cache-as-bitmap - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/mixin-cache-as-bitmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*!
 * @pixi/constants - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/constants is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */var Tl;(function(r){r[r.WEBGL_LEGACY=0]="WEBGL_LEGACY",r[r.WEBGL=1]="WEBGL",r[r.WEBGL2=2]="WEBGL2"})(Tl||(Tl={}));var Cl;(function(r){r[r.UNKNOWN=0]="UNKNOWN",r[r.WEBGL=1]="WEBGL",r[r.CANVAS=2]="CANVAS"})(Cl||(Cl={}));var El;(function(r){r[r.COLOR=16384]="COLOR",r[r.DEPTH=256]="DEPTH",r[r.STENCIL=1024]="STENCIL"})(El||(El={}));var wl;(function(r){r[r.NORMAL=0]="NORMAL",r[r.ADD=1]="ADD",r[r.MULTIPLY=2]="MULTIPLY",r[r.SCREEN=3]="SCREEN",r[r.OVERLAY=4]="OVERLAY",r[r.DARKEN=5]="DARKEN",r[r.LIGHTEN=6]="LIGHTEN",r[r.COLOR_DODGE=7]="COLOR_DODGE",r[r.COLOR_BURN=8]="COLOR_BURN",r[r.HARD_LIGHT=9]="HARD_LIGHT",r[r.SOFT_LIGHT=10]="SOFT_LIGHT",r[r.DIFFERENCE=11]="DIFFERENCE",r[r.EXCLUSION=12]="EXCLUSION",r[r.HUE=13]="HUE",r[r.SATURATION=14]="SATURATION",r[r.COLOR=15]="COLOR",r[r.LUMINOSITY=16]="LUMINOSITY",r[r.NORMAL_NPM=17]="NORMAL_NPM",r[r.ADD_NPM=18]="ADD_NPM",r[r.SCREEN_NPM=19]="SCREEN_NPM",r[r.NONE=20]="NONE",r[r.SRC_OVER=0]="SRC_OVER",r[r.SRC_IN=21]="SRC_IN",r[r.SRC_OUT=22]="SRC_OUT",r[r.SRC_ATOP=23]="SRC_ATOP",r[r.DST_OVER=24]="DST_OVER",r[r.DST_IN=25]="DST_IN",r[r.DST_OUT=26]="DST_OUT",r[r.DST_ATOP=27]="DST_ATOP",r[r.ERASE=26]="ERASE",r[r.SUBTRACT=28]="SUBTRACT",r[r.XOR=29]="XOR"})(wl||(wl={}));var Al;(function(r){r[r.POINTS=0]="POINTS",r[r.LINES=1]="LINES",r[r.LINE_LOOP=2]="LINE_LOOP",r[r.LINE_STRIP=3]="LINE_STRIP",r[r.TRIANGLES=4]="TRIANGLES",r[r.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",r[r.TRIANGLE_FAN=6]="TRIANGLE_FAN"})(Al||(Al={}));var Pl;(function(r){r[r.RGBA=6408]="RGBA",r[r.RGB=6407]="RGB",r[r.RG=33319]="RG",r[r.RED=6403]="RED",r[r.RGBA_INTEGER=36249]="RGBA_INTEGER",r[r.RGB_INTEGER=36248]="RGB_INTEGER",r[r.RG_INTEGER=33320]="RG_INTEGER",r[r.RED_INTEGER=36244]="RED_INTEGER",r[r.ALPHA=6406]="ALPHA",r[r.LUMINANCE=6409]="LUMINANCE",r[r.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",r[r.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",r[r.DEPTH_STENCIL=34041]="DEPTH_STENCIL"})(Pl||(Pl={}));var Il;(function(r){r[r.TEXTURE_2D=3553]="TEXTURE_2D",r[r.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",r[r.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",r[r.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",r[r.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",r[r.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",r[r.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",r[r.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"})(Il||(Il={}));var Rl;(function(r){r[r.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",r[r.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",r[r.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",r[r.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",r[r.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",r[r.UNSIGNED_INT=5125]="UNSIGNED_INT",r[r.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",r[r.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",r[r.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",r[r.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",r[r.BYTE=5120]="BYTE",r[r.SHORT=5122]="SHORT",r[r.INT=5124]="INT",r[r.FLOAT=5126]="FLOAT",r[r.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",r[r.HALF_FLOAT=36193]="HALF_FLOAT"})(Rl||(Rl={}));var Sl;(function(r){r[r.FLOAT=0]="FLOAT",r[r.INT=1]="INT",r[r.UINT=2]="UINT"})(Sl||(Sl={}));var Ol;(function(r){r[r.NEAREST=0]="NEAREST",r[r.LINEAR=1]="LINEAR"})(Ol||(Ol={}));var Nl;(function(r){r[r.CLAMP=33071]="CLAMP",r[r.REPEAT=10497]="REPEAT",r[r.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"})(Nl||(Nl={}));var Fl;(function(r){r[r.OFF=0]="OFF",r[r.POW2=1]="POW2",r[r.ON=2]="ON",r[r.ON_MANUAL=3]="ON_MANUAL"})(Fl||(Fl={}));var Ul;(function(r){r[r.NPM=0]="NPM",r[r.UNPACK=1]="UNPACK",r[r.PMA=2]="PMA",r[r.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",r[r.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",r[r.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA",r[r.PREMULTIPLIED_ALPHA=2]="PREMULTIPLIED_ALPHA"})(Ul||(Ul={}));var Ll;(function(r){r[r.NO=0]="NO",r[r.YES=1]="YES",r[r.AUTO=2]="AUTO",r[r.BLEND=0]="BLEND",r[r.CLEAR=1]="CLEAR",r[r.BLIT=2]="BLIT"})(Ll||(Ll={}));var Ml;(function(r){r[r.AUTO=0]="AUTO",r[r.MANUAL=1]="MANUAL"})(Ml||(Ml={}));var Bl;(function(r){r.LOW="lowp",r.MEDIUM="mediump",r.HIGH="highp"})(Bl||(Bl={}));var Gl;(function(r){r[r.NONE=0]="NONE",r[r.SCISSOR=1]="SCISSOR",r[r.STENCIL=2]="STENCIL",r[r.SPRITE=3]="SPRITE"})(Gl||(Gl={}));var Bs;(function(r){r[r.NONE=0]="NONE",r[r.LOW=2]="LOW",r[r.MEDIUM=4]="MEDIUM",r[r.HIGH=8]="HIGH"})(Bs||(Bs={}));var Dl;(function(r){r[r.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",r[r.ARRAY_BUFFER=34962]="ARRAY_BUFFER",r[r.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER"})(Dl||(Dl={}));var Wc=new _t;ht.prototype._cacheAsBitmap=!1;ht.prototype._cacheData=null;ht.prototype._cacheAsBitmapResolution=null;ht.prototype._cacheAsBitmapMultisample=Bs.NONE;var My=function(){function r(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null}return r}();Object.defineProperties(ht.prototype,{cacheAsBitmapResolution:{get:function(){return this._cacheAsBitmapResolution},set:function(r){r!==this._cacheAsBitmapResolution&&(this._cacheAsBitmapResolution=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmapMultisample:{get:function(){return this._cacheAsBitmapMultisample},set:function(r){r!==this._cacheAsBitmapMultisample&&(this._cacheAsBitmapMultisample=r,this.cacheAsBitmap&&(this.cacheAsBitmap=!1,this.cacheAsBitmap=!0))}},cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(r){if(this._cacheAsBitmap!==r){this._cacheAsBitmap=r;var e;r?(this._cacheData||(this._cacheData=new My),e=this._cacheData,e.originalRender=this.render,e.originalRenderCanvas=this.renderCanvas,e.originalUpdateTransform=this.updateTransform,e.originalCalculateBounds=this.calculateBounds,e.originalGetLocalBounds=this.getLocalBounds,e.originalDestroy=this.destroy,e.originalContainsPoint=this.containsPoint,e.originalMask=this._mask,e.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):(e=this._cacheData,e.sprite&&this._destroyCachedDisplayObject(),this.render=e.originalRender,this.renderCanvas=e.originalRenderCanvas,this.calculateBounds=e.originalCalculateBounds,this.getLocalBounds=e.originalGetLocalBounds,this.destroy=e.originalDestroy,this.updateTransform=e.originalUpdateTransform,this.containsPoint=e.originalContainsPoint,this._mask=e.originalMask,this.filterArea=e.originalFilterArea)}}}});ht.prototype._renderCached=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(e),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(e))};ht.prototype._initCachedDisplayObject=function(e){var t;if(!(this._cacheData&&this._cacheData.sprite)){var i=this.alpha;this.alpha=1,e.batch.flush();var n=this.getLocalBounds(null,!0).clone();if(this.filters&&this.filters.length){var o=this.filters[0].padding;n.pad(o)}n.ceil(U.RESOLUTION);var s=e.renderTexture.current,a=e.renderTexture.sourceFrame.clone(),u=e.renderTexture.destinationFrame.clone(),h=e.projection.transform,l=Me.create({width:n.width,height:n.height,resolution:this.cacheAsBitmapResolution||e.resolution,multisample:(t=this.cacheAsBitmapMultisample)!==null&&t!==void 0?t:e.multisample}),c="cacheAsBitmap_"+Ze();this._cacheData.textureCacheId=c,q.addToCache(l.baseTexture,c),k.addToCache(l,c);var f=this.transform.localTransform.copyTo(Wc).invert().translate(-n.x,-n.y);this.render=this._cacheData.originalRender,e.render(this,{renderTexture:l,clear:!0,transform:f,skipUpdateTransform:!1}),e.framebuffer.blit(),e.projection.transform=h,e.renderTexture.bind(s,a,u),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=i;var d=new Mt(l);d.transform.worldTransform=this.transform.worldTransform,d.anchor.x=-(n.x/n.width),d.anchor.y=-(n.y/n.height),d.alpha=i,d._bounds=this._bounds,this._cacheData.sprite=d,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=d.containsPoint.bind(d)}};ht.prototype._renderCachedCanvas=function(e){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(e),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(e))};ht.prototype._initCachedDisplayObjectCanvas=function(e){if(!(this._cacheData&&this._cacheData.sprite)){var t=this.getLocalBounds(null,!0),i=this.alpha;this.alpha=1;var n=e.context,o=e._projTransform;t.ceil(U.RESOLUTION);var s=Me.create({width:t.width,height:t.height}),a="cacheAsBitmap_"+Ze();this._cacheData.textureCacheId=a,q.addToCache(s.baseTexture,a),k.addToCache(s,a);var u=Wc;this.transform.localTransform.copyTo(u),u.invert(),u.tx-=t.x,u.ty-=t.y,this.renderCanvas=this._cacheData.originalRenderCanvas,e.render(this,{renderTexture:s,clear:!0,transform:u,skipUpdateTransform:!1}),e.context=n,e._projTransform=o,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null,this.alpha=i;var h=new Mt(s);h.transform.worldTransform=this.transform.worldTransform,h.anchor.x=-(t.x/t.width),h.anchor.y=-(t.y/t.height),h.alpha=i,h._bounds=this._bounds,this._cacheData.sprite=h,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=e._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=h.containsPoint.bind(h)}};ht.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID};ht.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)};ht.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,q.removeFromCache(this._cacheData.textureCacheId),k.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null};ht.prototype._cacheAsBitmapDestroy=function(e){this.cacheAsBitmap=!1,this.destroy(e)};/*!
 * @pixi/mixin-get-child-by-name - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/mixin-get-child-by-name is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ht.prototype.name=null;It.prototype.getChildByName=function(e,t){for(var i=0,n=this.children.length;i<n;i++)if(this.children[i].name===e)return this.children[i];if(t)for(var i=0,n=this.children.length;i<n;i++){var o=this.children[i];if(!!o.getChildByName){var s=this.children[i].getChildByName(e,!0);if(s)return s}}return null};/*!
 * @pixi/mixin-get-global-position - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/mixin-get-global-position is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */ht.prototype.getGlobalPosition=function(e,t){return e===void 0&&(e=new Y),t===void 0&&(t=!1),this.parent?this.parent.toGlobal(this.position,e,t):(e.x=this.position.x,e.y=this.position.y),e};/*!
 * @pixi/mesh-extras - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/mesh-extras is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Gs=function(r,e){return Gs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Gs(r,e)};function ii(r,e){Gs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Yc=function(r){ii(e,r);function e(t,i,n,o){t===void 0&&(t=100),i===void 0&&(i=100),n===void 0&&(n=10),o===void 0&&(o=10);var s=r.call(this)||this;return s.segWidth=n,s.segHeight=o,s.width=t,s.height=i,s.build(),s}return e.prototype.build=function(){for(var t=this.segWidth*this.segHeight,i=[],n=[],o=[],s=this.segWidth-1,a=this.segHeight-1,u=this.width/s,h=this.height/a,l=0;l<t;l++){var c=l%this.segWidth,f=l/this.segWidth|0;i.push(c*u,f*h),n.push(c/s,f/a)}for(var d=s*a,l=0;l<d;l++){var v=l%s,p=l/s|0,_=p*this.segWidth+v,m=p*this.segWidth+v+1,y=(p+1)*this.segWidth+v,b=(p+1)*this.segWidth+v+1;o.push(_,m,y,m,b,y)}this.buffers[0].data=new Float32Array(i),this.buffers[1].data=new Float32Array(n),this.indexBuffer.data=new Uint16Array(o),this.buffers[0].update(),this.buffers[1].update(),this.indexBuffer.update()},e}($i),$c=function(r){ii(e,r);function e(t,i,n){t===void 0&&(t=200),n===void 0&&(n=0);var o=r.call(this,new Float32Array(i.length*4),new Float32Array(i.length*4),new Uint16Array((i.length-1)*6))||this;return o.points=i,o._width=t,o.textureScale=n,o.build(),o}return Object.defineProperty(e.prototype,"width",{get:function(){return this._width},enumerable:!1,configurable:!0}),e.prototype.build=function(){var t=this.points;if(!!t){var i=this.getBuffer("aVertexPosition"),n=this.getBuffer("aTextureCoord"),o=this.getIndex();if(!(t.length<1)){i.data.length/4!==t.length&&(i.data=new Float32Array(t.length*4),n.data=new Float32Array(t.length*4),o.data=new Uint16Array((t.length-1)*6));var s=n.data,a=o.data;s[0]=0,s[1]=0,s[2]=0,s[3]=1;for(var u=0,h=t[0],l=this._width*this.textureScale,c=t.length,f=0;f<c;f++){var d=f*4;if(this.textureScale>0){var v=h.x-t[f].x,p=h.y-t[f].y,_=Math.sqrt(v*v+p*p);h=t[f],u+=_/l}else u=f/(c-1);s[d]=u,s[d+1]=0,s[d+2]=u,s[d+3]=1}for(var m=0,f=0;f<c-1;f++){var d=f*2;a[m++]=d,a[m++]=d+1,a[m++]=d+2,a[m++]=d+2,a[m++]=d+1,a[m++]=d+3}n.update(),o.update(),this.updateVertices()}}},e.prototype.updateVertices=function(){var t=this.points;if(!(t.length<1)){for(var i=t[0],n,o=0,s=0,a=this.buffers[0].data,u=t.length,h=0;h<u;h++){var l=t[h],c=h*4;h<t.length-1?n=t[h+1]:n=l,s=-(n.x-i.x),o=n.y-i.y;var f=Math.sqrt(o*o+s*s),d=this.textureScale>0?this.textureScale*this._width/2:this._width/2;o/=f,s/=f,o*=d,s*=d,a[c]=l.x+o,a[c+1]=l.y+s,a[c+2]=l.x-o,a[c+3]=l.y-s,i=l}this.buffers[0].update()}},e.prototype.update=function(){this.textureScale>0?this.build():this.updateVertices()},e}($i),By=function(r){ii(e,r);function e(t,i,n){n===void 0&&(n=0);var o=this,s=new $c(t.height,i,n),a=new $r(t);return n>0&&(t.baseTexture.wrapMode=xe.REPEAT),o=r.call(this,s,a)||this,o.autoUpdate=!0,o}return e.prototype._render=function(t){var i=this.geometry;(this.autoUpdate||i._width!==this.shader.texture.height)&&(i._width=this.shader.texture.height,i.update()),r.prototype._render.call(this,t)},e}(Yr),qc=function(r){ii(e,r);function e(t,i,n){var o=this,s=new Yc(t.width,t.height,i,n),a=new $r(k.WHITE);return o=r.call(this,s,a)||this,o.texture=t,o.autoResize=!0,o}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID;var t=this.geometry,i=this.shader.texture,n=i.width,o=i.height;this.autoResize&&(t.width!==n||t.height!==o)&&(t.width=this.shader.texture.width,t.height=this.shader.texture.height,t.build())},Object.defineProperty(e.prototype,"texture",{get:function(){return this.shader.texture},set:function(t){this.shader.texture!==t&&(this.shader.texture=t,this._textureID=-1,t.baseTexture.valid?this.textureUpdated():t.once("update",this.textureUpdated,this))},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this._textureID!==this.shader.texture._updateID&&this.textureUpdated(),r.prototype._render.call(this,t)},e.prototype.destroy=function(t){this.shader.texture.off("update",this.textureUpdated,this),r.prototype.destroy.call(this,t)},e}(Yr),Gy=function(r){ii(e,r);function e(t,i,n,o,s){t===void 0&&(t=k.EMPTY);var a=this,u=new $i(i,n,o);u.getBuffer("aVertexPosition").static=!1;var h=new $r(t);return a=r.call(this,u,h,null,s)||this,a.autoUpdate=!0,a}return Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype._render=function(t){this.autoUpdate&&this.geometry.getBuffer("aVertexPosition").update(),r.prototype._render.call(this,t)},e}(Yr),bn=10,Dy=function(r){ii(e,r);function e(t,i,n,o,s){i===void 0&&(i=bn),n===void 0&&(n=bn),o===void 0&&(o=bn),s===void 0&&(s=bn);var a=r.call(this,k.WHITE,4,4)||this;return a._origWidth=t.orig.width,a._origHeight=t.orig.height,a._width=a._origWidth,a._height=a._origHeight,a._leftWidth=i,a._rightWidth=o,a._topHeight=n,a._bottomHeight=s,a.texture=t,a}return e.prototype.textureUpdated=function(){this._textureID=this.shader.texture._updateID,this._refresh()},Object.defineProperty(e.prototype,"vertices",{get:function(){return this.geometry.getBuffer("aVertexPosition").data},set:function(t){this.geometry.getBuffer("aVertexPosition").data=t},enumerable:!1,configurable:!0}),e.prototype.updateHorizontalVertices=function(){var t=this.vertices,i=this._getMinScale();t[9]=t[11]=t[13]=t[15]=this._topHeight*i,t[17]=t[19]=t[21]=t[23]=this._height-this._bottomHeight*i,t[25]=t[27]=t[29]=t[31]=this._height},e.prototype.updateVerticalVertices=function(){var t=this.vertices,i=this._getMinScale();t[2]=t[10]=t[18]=t[26]=this._leftWidth*i,t[4]=t[12]=t[20]=t[28]=this._width-this._rightWidth*i,t[6]=t[14]=t[22]=t[30]=this._width},e.prototype._getMinScale=function(){var t=this._leftWidth+this._rightWidth,i=this._width>t?1:this._width/t,n=this._topHeight+this._bottomHeight,o=this._height>n?1:this._height/n,s=Math.min(i,o);return s},Object.defineProperty(e.prototype,"width",{get:function(){return this._width},set:function(t){this._width=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return this._height},set:function(t){this._height=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"leftWidth",{get:function(){return this._leftWidth},set:function(t){this._leftWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rightWidth",{get:function(){return this._rightWidth},set:function(t){this._rightWidth=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"topHeight",{get:function(){return this._topHeight},set:function(t){this._topHeight=t,this._refresh()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bottomHeight",{get:function(){return this._bottomHeight},set:function(t){this._bottomHeight=t,this._refresh()},enumerable:!1,configurable:!0}),e.prototype._refresh=function(){var t=this.texture,i=this.geometry.buffers[1].data;this._origWidth=t.orig.width,this._origHeight=t.orig.height;var n=1/this._origWidth,o=1/this._origHeight;i[0]=i[8]=i[16]=i[24]=0,i[1]=i[3]=i[5]=i[7]=0,i[6]=i[14]=i[22]=i[30]=1,i[25]=i[27]=i[29]=i[31]=1,i[2]=i[10]=i[18]=i[26]=n*this._leftWidth,i[4]=i[12]=i[20]=i[28]=1-n*this._rightWidth,i[9]=i[11]=i[13]=i[15]=o*this._topHeight,i[17]=i[19]=i[21]=i[23]=1-o*this._bottomHeight,this.updateHorizontalVertices(),this.updateVerticalVertices(),this.geometry.buffers[0].update(),this.geometry.buffers[1].update()},e}(qc);/*!
 * @pixi/sprite-animated - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * @pixi/sprite-animated is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */var Ds=function(r,e){return Ds=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)i.hasOwnProperty(n)&&(t[n]=i[n])},Ds(r,e)};function ky(r,e){Ds(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var zy=function(r){ky(e,r);function e(t,i){i===void 0&&(i=!0);var n=r.call(this,t[0]instanceof k?t[0]:t[0].texture)||this;return n._textures=null,n._durations=null,n._autoUpdate=i,n._isConnectedToTicker=!1,n.animationSpeed=1,n.loop=!0,n.updateAnchor=!1,n.onComplete=null,n.onFrameChange=null,n.onLoop=null,n._currentTime=0,n._playing=!1,n._previousFrame=null,n.textures=t,n}return e.prototype.stop=function(){!this._playing||(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(At.shared.remove(this.update,this),this._isConnectedToTicker=!1))},e.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(At.shared.add(this.update,this,Te.HIGH),this._isConnectedToTicker=!0))},e.prototype.gotoAndStop=function(t){this.stop();var i=this.currentFrame;this._currentTime=t,i!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var i=this.currentFrame;this._currentTime=t,i!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){if(!!this._playing){var i=this.animationSpeed*t,n=this.currentFrame;if(this._durations!==null){var o=this._currentTime%1*this._durations[this.currentFrame];for(o+=i/60*1e3;o<0;)this._currentTime--,o+=this._durations[this.currentFrame];var s=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);o>=this._durations[this.currentFrame];)o-=this._durations[this.currentFrame]*s,this._currentTime+=s;this._currentTime+=o/this._durations[this.currentFrame]}else this._currentTime+=i;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):n!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<n?this.onLoop():this.animationSpeed<0&&this.currentFrame>n&&this.onLoop()),this.updateTexture())}},e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(t){this.stop(),r.prototype.destroy.call(this,t),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},e.fromFrames=function(t){for(var i=[],n=0;n<t.length;++n)i.push(k.from(t[n]));return new e(i)},e.fromImages=function(t){for(var i=[],n=0;n<t.length;++n)i.push(k.from(t[n]));return new e(i)},Object.defineProperty(e.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof k)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var i=0;i<t.length;i++)this._textures.push(t[i].texture),this._durations.push(t[i].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(At.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(At.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),e}(Mt);/*!
 * pixi.js - v6.3.2
 * Compiled Wed, 04 May 2022 17:49:13 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */De.registerPlugin("accessibility",Sf);De.registerPlugin("extract",fc);De.registerPlugin("interaction",Uf);De.registerPlugin("particle",Ec);De.registerPlugin("prepare",Lc);De.registerPlugin("batch",uc);De.registerPlugin("tilingSprite",Dc);ne.registerPlugin(jc);ne.registerPlugin(mc);ne.registerPlugin(yc);ne.registerPlugin(Tc);ne.registerPlugin(Bc);Yi.registerPlugin(Of);Yi.registerPlugin(dc);var Xy="6.3.2",jy={AlphaFilter:Hc,BlurFilter:Ty,BlurFilterPass:Mi,ColorMatrixFilter:Fs,DisplacementFilter:Iy,FXAAFilter:Ny,NoiseFilter:Ly},Hy=Object.freeze(Object.defineProperty({__proto__:null,utils:Vm,VERSION:Xy,filters:jy,AccessibilityManager:Sf,accessibleTarget:Rf,InteractionData:hs,InteractionEvent:Nf,InteractionManager:Uf,InteractionTrackingData:Cn,interactiveTarget:Ff,Application:Yi,AbstractBatchRenderer:oc,AbstractMultiResource:Kn,AbstractRenderer:rc,ArrayResource:Da,Attribute:ds,BaseImageResource:Ce,BaseRenderTexture:Ha,BaseTexture:q,BatchDrawCall:Sn,BatchGeometry:uu,BatchPluginFactory:ac,BatchRenderer:uc,BatchShaderGenerator:sc,BatchSystem:$a,BatchTextureArray:On,Buffer:Tt,BufferResource:Ir,CanvasResource:Zn,ContextSystem:qa,CubeResource:ka,Filter:z,FilterState:Gf,FilterSystem:Ya,Framebuffer:Rn,FramebufferSystem:Ka,GLFramebuffer:Df,GLProgram:Qf,GLTexture:En,Geometry:ei,GeometrySystem:Za,IGLUniformData:Sg,INSTALLED:Oi,ImageBitmapResource:ja,ImageResource:Jn,MaskData:kf,MaskSystem:Ja,ObjectRenderer:Wi,Program:ri,ProjectionSystem:eu,Quad:Bf,QuadUv:Wa,RenderTexture:Me,RenderTexturePool:Mf,RenderTextureSystem:ru,Renderer:De,Resource:wr,SVGResource:za,ScissorSystem:Qa,Shader:Oe,ShaderSystem:iu,SpriteMaskFilter:Yf,State:rr,StateSystem:nu,StencilSystem:tu,System:Wg,Texture:k,TextureGCSystem:ou,TextureMatrix:Qn,TextureSystem:su,TextureUvs:Va,UniformGroup:Ye,VideoResource:Xa,ViewableBuffer:Nn,autoDetectRenderer:ic,autoDetectResource:qn,checkMaxIfStatementsInShader:Wf,createUBOElements:Kf,defaultFilterVertex:au,defaultVertex:nc,generateProgram:tc,generateUniformBufferSync:Jf,getTestContext:jf,getUBOData:Zf,resources:hc,systems:lc,uniformParsers:br,Extract:fc,AppLoaderPlugin:dc,Loader:ne,get LoaderResource(){return ct},TextureLoader:pc,BlobResource:_c,CompressedTextureLoader:mc,CompressedTextureResource:Fn,DDSLoader:yc,FORMATS_TO_COMPONENTS:xc,get INTERNAL_FORMATS(){return H},INTERNAL_FORMAT_TO_BYTES_PER_PIXEL:Ni,KTXLoader:Tc,TYPES_TO_BYTES_PER_COMPONENT:_s,TYPES_TO_BYTES_PER_PIXEL:bc,ParticleContainer:A0,ParticleRenderer:Ec,BasePrepare:Fc,CountLimiter:Nc,Prepare:Lc,TimeLimiter:K0,Spritesheet:Mc,SpritesheetLoader:Bc,TilingSprite:Z0,TilingSpriteRenderer:Dc,BitmapFont:_r,BitmapFontData:Ui,BitmapFontLoader:jc,BitmapText:py,Ticker:At,TickerPlugin:Of,get UPDATE_PRIORITY(){return Te},get ALPHA_MODES(){return re},get BLEND_MODES(){return B},get BUFFER_BITS(){return Ai},get BUFFER_TYPE(){return ce},get CLEAR_MODES(){return Pe},get DRAW_MODES(){return Zt},get ENV(){return be},get FORMATS(){return R},get GC_MODES(){return In},get MASK_TYPES(){return Ot},get MIPMAP_MODES(){return ee},get MSAA_QUALITY(){return yt},get PRECISION(){return le},get RENDERER_TYPE(){return jr},get SAMPLER_TYPES(){return Pi},get SCALE_MODES(){return Vt},get TARGETS(){return We},get TYPES(){return G},get WRAP_MODES(){return xe},Bounds:Hr,Container:It,DisplayObject:ht,TemporaryDisplayObject:Ga,FillStyle:lu,GRAPHICS_CURVES:Vr,Graphics:Ne,GraphicsData:Ts,GraphicsGeometry:Sc,get LINE_CAP(){return Se},get LINE_JOIN(){return Re},LineStyle:Oc,graphicsUtils:F0,Circle:wf,DEG_TO_RAD:Je,Ellipse:Af,Matrix:_t,ObservablePoint:ze,PI_2:Si,Point:Y,Polygon:mi,RAD_TO_DEG:Ef,Rectangle:K,RoundedRectangle:Pf,get SHAPES(){return ut},Transform:Ma,groupD8:at,Mesh:Yr,MeshBatchUvs:kc,MeshGeometry:$i,MeshMaterial:$r,NineSlicePlane:Dy,PlaneGeometry:Yc,RopeGeometry:$c,SimpleMesh:Gy,SimplePlane:qc,SimpleRope:By,Runner:Nt,Sprite:Mt,AnimatedSprite:zy,get TEXT_GRADIENT(){return Wr},Text:du,TextMetrics:pe,TextStyle:Ar,isMobile:Kt,settings:U},Symbol.toStringTag,{value:"Module"}));/*!
 * @pixi/filter-adjustment - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-adjustment is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ks=function(r,e){return ks=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ks(r,e)};function Vy(r,e){ks(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Wy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Yy=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float gamma;
uniform float contrast;
uniform float saturation;
uniform float brightness;
uniform float red;
uniform float green;
uniform float blue;
uniform float alpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (c.a > 0.0) {
        c.rgb /= c.a;

        vec3 rgb = pow(c.rgb, vec3(1. / gamma));
        rgb = mix(vec3(.5), mix(vec3(dot(vec3(.2125, .7154, .0721), rgb)), rgb, saturation), contrast);
        rgb.r *= red;
        rgb.g *= green;
        rgb.b *= blue;
        c.rgb = rgb * brightness;

        c.rgb *= c.a;
    }

    gl_FragColor = c * alpha;
}
`;(function(r){Vy(e,r);function e(t){var i=r.call(this,Wy,Yy)||this;return i.gamma=1,i.saturation=1,i.contrast=1,i.brightness=1,i.red=1,i.green=1,i.blue=1,i.alpha=1,Object.assign(i,t),i}return e.prototype.apply=function(t,i,n,o){this.uniforms.gamma=Math.max(this.gamma,1e-4),this.uniforms.saturation=this.saturation,this.uniforms.contrast=this.contrast,this.uniforms.brightness=this.brightness,this.uniforms.red=this.red,this.uniforms.green=this.green,this.uniforms.blue=this.blue,this.uniforms.alpha=this.alpha,t.applyFilter(this,i,n,o)},e})(z);/*!
 * @pixi/filter-kawase-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-kawase-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zs=function(r,e){return zs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},zs(r,e)};function $y(r,e){zs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var qy=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ky=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample top right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y));

    // Sample bottom right pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y));

    // Sample bottom left pixel
    color += texture2D(uSampler, vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}`,Zy=`
varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 uOffset;
uniform vec4 filterClamp;

void main(void)
{
    vec4 color = vec4(0.0);

    // Sample top left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample top right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y + uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom right pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x + uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Sample bottom left pixel
    color += texture2D(uSampler, clamp(vec2(vTextureCoord.x - uOffset.x, vTextureCoord.y - uOffset.y), filterClamp.xy, filterClamp.zw));

    // Average
    color *= 0.25;

    gl_FragColor = color;
}
`,Un=function(r){$y(e,r);function e(t,i,n){t===void 0&&(t=4),i===void 0&&(i=3),n===void 0&&(n=!1);var o=r.call(this,qy,n?Zy:Ky)||this;return o._kernels=[],o._blur=4,o._quality=3,o.uniforms.uOffset=new Float32Array(2),o._pixelSize=new Y,o.pixelSize=1,o._clamp=n,Array.isArray(t)?o.kernels=t:(o._blur=t,o.quality=i),o}return e.prototype.apply=function(t,i,n,o){var s=this._pixelSize.x/i._frame.width,a=this._pixelSize.y/i._frame.height,u;if(this._quality===1||this._blur===0)u=this._kernels[0]+.5,this.uniforms.uOffset[0]=u*s,this.uniforms.uOffset[1]=u*a,t.applyFilter(this,i,n,o);else{for(var h=t.getFilterTexture(),l=i,c=h,f=void 0,d=this._quality-1,v=0;v<d;v++)u=this._kernels[v]+.5,this.uniforms.uOffset[0]=u*s,this.uniforms.uOffset[1]=u*a,t.applyFilter(this,l,c,1),f=l,l=c,c=f;u=this._kernels[d]+.5,this.uniforms.uOffset[0]=u*s,this.uniforms.uOffset[1]=u*a,t.applyFilter(this,l,n,o),t.returnFilterTexture(h)}},e.prototype._updatePadding=function(){this.padding=Math.ceil(this._kernels.reduce(function(t,i){return t+i+.5},0))},e.prototype._generateKernels=function(){var t=this._blur,i=this._quality,n=[t];if(t>0)for(var o=t,s=t/i,a=1;a<i;a++)o-=s,n.push(o);this._kernels=n,this._updatePadding()},Object.defineProperty(e.prototype,"kernels",{get:function(){return this._kernels},set:function(t){Array.isArray(t)&&t.length>0?(this._kernels=t,this._quality=t.length,this._blur=Math.max.apply(Math,t)):(this._kernels=[0],this._quality=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"clamp",{get:function(){return this._clamp},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._pixelSize},set:function(t){typeof t=="number"?(this._pixelSize.x=t,this._pixelSize.y=t):Array.isArray(t)?(this._pixelSize.x=t[0],this._pixelSize.y=t[1]):t instanceof Y?(this._pixelSize.x=t.x,this._pixelSize.y=t.y):(this._pixelSize.x=1,this._pixelSize.y=1)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._quality},set:function(t){this._quality=Math.max(1,Math.round(t)),this._generateKernels()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blur},set:function(t){this._blur=t,this._generateKernels()},enumerable:!1,configurable:!0}),e}(z);/*!
 * @pixi/filter-advanced-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-advanced-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Xs=function(r,e){return Xs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Xs(r,e)};function Kc(r,e){Xs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Zc=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Jy=`
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform float threshold;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);

    // A simple & fast algorithm for getting brightness.
    // It's inaccuracy , but good enought for this feature.
    float _max = max(max(color.r, color.g), color.b);
    float _min = min(min(color.r, color.g), color.b);
    float brightness = (_max + _min) * 0.5;

    if(brightness > threshold) {
        gl_FragColor = color;
    } else {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,Qy=function(r){Kc(e,r);function e(t){t===void 0&&(t=.5);var i=r.call(this,Zc,Jy)||this;return i.threshold=t,i}return Object.defineProperty(e.prototype,"threshold",{get:function(){return this.uniforms.threshold},set:function(t){this.uniforms.threshold=t},enumerable:!1,configurable:!0}),e}(z),tx=`uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform sampler2D bloomTexture;
uniform float bloomScale;
uniform float brightness;

void main() {
    vec4 color = texture2D(uSampler, vTextureCoord);
    color.rgb *= brightness;
    vec4 bloomColor = vec4(texture2D(bloomTexture, vTextureCoord).rgb, 0.0);
    bloomColor.rgb *= bloomScale;
    gl_FragColor = color + bloomColor;
}
`;(function(r){Kc(e,r);function e(t){var i=r.call(this,Zc,tx)||this;i.bloomScale=1,i.brightness=1,i._resolution=U.FILTER_RESOLUTION,typeof t=="number"&&(t={threshold:t});var n=Object.assign(e.defaults,t);i.bloomScale=n.bloomScale,i.brightness=n.brightness;var o=n.kernels,s=n.blur,a=n.quality,u=n.pixelSize,h=n.resolution;return i._extractFilter=new Qy(n.threshold),i._extractFilter.resolution=h,i._blurFilter=o?new Un(o):new Un(s,a),i.pixelSize=u,i.resolution=h,i}return e.prototype.apply=function(t,i,n,o,s){var a=t.getFilterTexture();this._extractFilter.apply(t,i,a,1,s);var u=t.getFilterTexture();this._blurFilter.apply(t,a,u,1),this.uniforms.bloomScale=this.bloomScale,this.uniforms.brightness=this.brightness,this.uniforms.bloomTexture=u,t.applyFilter(this,i,n,o),t.returnFilterTexture(u),t.returnFilterTexture(a)},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._extractFilter&&(this._extractFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"threshold",{get:function(){return this._extractFilter.threshold},set:function(t){this._extractFilter.threshold=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={threshold:.5,bloomScale:1,brightness:1,kernels:null,blur:8,quality:4,pixelSize:1,resolution:U.FILTER_RESOLUTION},e})(z);/*!
 * @pixi/filter-ascii - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-ascii is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var js=function(r,e){return js=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},js(r,e)};function ex(r,e){js(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var rx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ix=`varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform float pixelSize;
uniform sampler2D uSampler;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
    return floor( coord / size ) * size;
}

vec2 getMod(vec2 coord, vec2 size)
{
    return mod( coord , size) / size;
}

float character(float n, vec2 p)
{
    p = floor(p*vec2(4.0, -4.0) + 2.5);

    if (clamp(p.x, 0.0, 4.0) == p.x)
    {
        if (clamp(p.y, 0.0, 4.0) == p.y)
        {
            if (int(mod(n/exp2(p.x + 5.0*p.y), 2.0)) == 1) return 1.0;
        }
    }
    return 0.0;
}

void main()
{
    vec2 coord = mapCoord(vTextureCoord);

    // get the rounded color..
    vec2 pixCoord = pixelate(coord, vec2(pixelSize));
    pixCoord = unmapCoord(pixCoord);

    vec4 color = texture2D(uSampler, pixCoord);

    // determine the character to use
    float gray = (color.r + color.g + color.b) / 3.0;

    float n =  65536.0;             // .
    if (gray > 0.2) n = 65600.0;    // :
    if (gray > 0.3) n = 332772.0;   // *
    if (gray > 0.4) n = 15255086.0; // o
    if (gray > 0.5) n = 23385164.0; // &
    if (gray > 0.6) n = 15252014.0; // 8
    if (gray > 0.7) n = 13199452.0; // @
    if (gray > 0.8) n = 11512810.0; // #

    // get the mod..
    vec2 modd = getMod(coord, vec2(pixelSize));

    gl_FragColor = color * character( n, vec2(-1.0) + modd * 2.0);

}
`;(function(r){ex(e,r);function e(t){t===void 0&&(t=8);var i=r.call(this,rx,ix)||this;return i.size=t,i}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.pixelSize},set:function(t){this.uniforms.pixelSize=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-bevel - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bevel is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Hs=function(r,e){return Hs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Hs(r,e)};function nx(r,e){Hs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ox=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,sx=`precision mediump float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float transformX;
uniform float transformY;
uniform vec3 lightColor;
uniform float lightAlpha;
uniform vec3 shadowColor;
uniform float shadowAlpha;

void main(void) {
    vec2 transform = vec2(1.0 / filterArea) * vec2(transformX, transformY);
    vec4 color = texture2D(uSampler, vTextureCoord);
    float light = texture2D(uSampler, vTextureCoord - transform).a;
    float shadow = texture2D(uSampler, vTextureCoord + transform).a;

    color.rgb = mix(color.rgb, lightColor, clamp((color.a - light) * lightAlpha, 0.0, 1.0));
    color.rgb = mix(color.rgb, shadowColor, clamp((color.a - shadow) * shadowAlpha, 0.0, 1.0));
    gl_FragColor = vec4(color.rgb * color.a, color.a);
}
`;(function(r){nx(e,r);function e(t){var i=r.call(this,ox,sx)||this;return i._thickness=2,i._angle=0,i.uniforms.lightColor=new Float32Array(3),i.uniforms.shadowColor=new Float32Array(3),Object.assign(i,{rotation:45,thickness:2,lightColor:16777215,lightAlpha:.7,shadowColor:0,shadowAlpha:.7},t),i.padding=1,i}return e.prototype._updateTransform=function(){this.uniforms.transformX=this._thickness*Math.cos(this._angle),this.uniforms.transformY=this._thickness*Math.sin(this._angle)},Object.defineProperty(e.prototype,"rotation",{get:function(){return this._angle/Je},set:function(t){this._angle=t*Je,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this._updateTransform()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightColor",{get:function(){return ie(this.uniforms.lightColor)},set:function(t){Rt(t,this.uniforms.lightColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lightAlpha",{get:function(){return this.uniforms.lightAlpha},set:function(t){this.uniforms.lightAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowColor",{get:function(){return ie(this.uniforms.shadowColor)},set:function(t){Rt(t,this.uniforms.shadowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"shadowAlpha",{get:function(){return this.uniforms.shadowAlpha},set:function(t){this.uniforms.shadowAlpha=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-bloom - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bloom is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Vs=function(r,e){return Vs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Vs(r,e)};function ax(r,e){Vs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}(function(r){ax(e,r);function e(t,i,n,o){t===void 0&&(t=2),i===void 0&&(i=4),n===void 0&&(n=U.FILTER_RESOLUTION),o===void 0&&(o=5);var s=r.call(this)||this,a,u;return typeof t=="number"?(a=t,u=t):t instanceof Y?(a=t.x,u=t.y):Array.isArray(t)&&(a=t[0],u=t[1]),s.blurXFilter=new Mi(!0,a,i,n,o),s.blurYFilter=new Mi(!1,u,i,n,o),s.blurYFilter.blendMode=B.SCREEN,s.defaultFilter=new Hc,s}return e.prototype.apply=function(t,i,n,o){var s=t.getFilterTexture();this.defaultFilter.apply(t,i,n,o),this.blurXFilter.apply(t,i,s,1),this.blurYFilter.apply(t,s,n,0),t.returnFilterTexture(s)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurX",{get:function(){return this.blurXFilter.blur},set:function(t){this.blurXFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blurY",{get:function(){return this.blurYFilter.blur},set:function(t){this.blurYFilter.blur=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-bulge-pinch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-bulge-pinch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ws=function(r,e){return Ws=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ws(r,e)};function ux(r,e){Ws(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var hx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,lx=`uniform float radius;
uniform float strength;
uniform vec2 center;
uniform sampler2D uSampler;
varying vec2 vTextureCoord;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

void main()
{
    vec2 coord = vTextureCoord * filterArea.xy;
    coord -= center * dimensions.xy;
    float distance = length(coord);
    if (distance < radius) {
        float percent = distance / radius;
        if (strength > 0.0) {
            coord *= mix(1.0, smoothstep(0.0, radius / distance, percent), strength * 0.75);
        } else {
            coord *= mix(1.0, pow(percent, 1.0 + strength * 0.75) * radius / distance, 1.0 - percent);
        }
    }
    coord += center * dimensions.xy;
    coord /= filterArea.xy;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    gl_FragColor = color;
}
`;(function(r){ux(e,r);function e(t){var i=r.call(this,hx,lx)||this;return i.uniforms.dimensions=new Float32Array(2),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var s=i.filterFrame,a=s.width,u=s.height;this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=u,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),e.defaults={center:[.5,.5],radius:100,strength:1},e})(z);/*!
 * @pixi/filter-color-map - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-map is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ys=function(r,e){return Ys=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ys(r,e)};function fx(r,e){Ys(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var cx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,dx=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D colorMap;
uniform float _mix;
uniform float _size;
uniform float _sliceSize;
uniform float _slicePixelSize;
uniform float _sliceInnerSize;
void main() {
    vec4 color = texture2D(uSampler, vTextureCoord.xy);

    vec4 adjusted;
    if (color.a > 0.0) {
        color.rgb /= color.a;
        float innerWidth = _size - 1.0;
        float zSlice0 = min(floor(color.b * innerWidth), innerWidth);
        float zSlice1 = min(zSlice0 + 1.0, innerWidth);
        float xOffset = _slicePixelSize * 0.5 + color.r * _sliceInnerSize;
        float s0 = xOffset + (zSlice0 * _sliceSize);
        float s1 = xOffset + (zSlice1 * _sliceSize);
        float yOffset = _sliceSize * 0.5 + color.g * (1.0 - _sliceSize);
        vec4 slice0Color = texture2D(colorMap, vec2(s0,yOffset));
        vec4 slice1Color = texture2D(colorMap, vec2(s1,yOffset));
        float zOffset = fract(color.b * innerWidth);
        adjusted = mix(slice0Color, slice1Color, zOffset);

        color.rgb *= color.a;
    }
    gl_FragColor = vec4(mix(color, adjusted, _mix).rgb, color.a);

}`;(function(r){fx(e,r);function e(t,i,n){i===void 0&&(i=!1),n===void 0&&(n=1);var o=r.call(this,cx,dx)||this;return o.mix=1,o._size=0,o._sliceSize=0,o._slicePixelSize=0,o._sliceInnerSize=0,o._nearest=!1,o._scaleMode=null,o._colorMap=null,o._scaleMode=null,o.nearest=i,o.mix=n,o.colorMap=t,o}return e.prototype.apply=function(t,i,n,o){this.uniforms._mix=this.mix,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"colorSize",{get:function(){return this._size},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"colorMap",{get:function(){return this._colorMap},set:function(t){var i;!t||(t instanceof k||(t=k.from(t)),!((i=t)===null||i===void 0)&&i.baseTexture&&(t.baseTexture.scaleMode=this._scaleMode,t.baseTexture.mipmap=ee.OFF,this._size=t.height,this._sliceSize=1/this._size,this._slicePixelSize=this._sliceSize/this._size,this._sliceInnerSize=this._slicePixelSize*(this._size-1),this.uniforms._size=this._size,this.uniforms._sliceSize=this._sliceSize,this.uniforms._slicePixelSize=this._slicePixelSize,this.uniforms._sliceInnerSize=this._sliceInnerSize,this.uniforms.colorMap=t),this._colorMap=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nearest",{get:function(){return this._nearest},set:function(t){this._nearest=t,this._scaleMode=t?Vt.NEAREST:Vt.LINEAR;var i=this._colorMap;i&&i.baseTexture&&(i.baseTexture._glTextures={},i.baseTexture.scaleMode=this._scaleMode,i.baseTexture.mipmap=ee.OFF,i._updateID++,i.baseTexture.emit("update",i.baseTexture))},enumerable:!1,configurable:!0}),e.prototype.updateColorMap=function(){var t=this._colorMap;t&&t.baseTexture&&(t._updateID++,t.baseTexture.emit("update",t.baseTexture),this.colorMap=t)},e.prototype.destroy=function(t){t===void 0&&(t=!1),this._colorMap&&this._colorMap.destroy(t),r.prototype.destroy.call(this)},e})(z);/*!
 * @pixi/filter-color-overlay - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-overlay is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var $s=function(r,e){return $s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},$s(r,e)};function px(r,e){$s(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var vx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,_x=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 color;
uniform float alpha;

void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    gl_FragColor = vec4(mix(currentColor.rgb, color.rgb, currentColor.a * alpha), currentColor.a);
}
`;(function(r){px(e,r);function e(t,i){t===void 0&&(t=0),i===void 0&&(i=1);var n=r.call(this,vx,_x)||this;return n._color=0,n._alpha=1,n.uniforms.color=new Float32Array(3),n.color=t,n.alpha=i,n}return Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var i=this.uniforms.color;typeof t=="number"?(Rt(t,i),this._color=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],this._color=ie(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._alpha},set:function(t){this.uniforms.alpha=t,this._alpha=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var qs=function(r,e){return qs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},qs(r,e)};function mx(r,e){qs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var gx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,yx=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec3 originalColor;
uniform vec3 newColor;
uniform float epsilon;
void main(void) {
    vec4 currentColor = texture2D(uSampler, vTextureCoord);
    vec3 colorDiff = originalColor - (currentColor.rgb / max(currentColor.a, 0.0000000001));
    float colorDistance = length(colorDiff);
    float doReplace = step(colorDistance, epsilon);
    gl_FragColor = vec4(mix(currentColor.rgb, (newColor + colorDiff) * currentColor.a, doReplace), currentColor.a);
}
`;(function(r){mx(e,r);function e(t,i,n){t===void 0&&(t=16711680),i===void 0&&(i=0),n===void 0&&(n=.4);var o=r.call(this,gx,yx)||this;return o._originalColor=16711680,o._newColor=0,o.uniforms.originalColor=new Float32Array(3),o.uniforms.newColor=new Float32Array(3),o.originalColor=t,o.newColor=i,o.epsilon=n,o}return Object.defineProperty(e.prototype,"originalColor",{get:function(){return this._originalColor},set:function(t){var i=this.uniforms.originalColor;typeof t=="number"?(Rt(t,i),this._originalColor=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],this._originalColor=ie(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"newColor",{get:function(){return this._newColor},set:function(t){var i=this.uniforms.newColor;typeof t=="number"?(Rt(t,i),this._newColor=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],this._newColor=ie(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-convolution - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-convolution is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Ks=function(r,e){return Ks=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Ks(r,e)};function xx(r,e){Ks(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var bx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Tx=`precision mediump float;

varying mediump vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec2 texelSize;
uniform float matrix[9];

void main(void)
{
   vec4 c11 = texture2D(uSampler, vTextureCoord - texelSize); // top left
   vec4 c12 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - texelSize.y)); // top center
   vec4 c13 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y - texelSize.y)); // top right

   vec4 c21 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y)); // mid left
   vec4 c22 = texture2D(uSampler, vTextureCoord); // mid center
   vec4 c23 = texture2D(uSampler, vec2(vTextureCoord.x + texelSize.x, vTextureCoord.y)); // mid right

   vec4 c31 = texture2D(uSampler, vec2(vTextureCoord.x - texelSize.x, vTextureCoord.y + texelSize.y)); // bottom left
   vec4 c32 = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + texelSize.y)); // bottom center
   vec4 c33 = texture2D(uSampler, vTextureCoord + texelSize); // bottom right

   gl_FragColor =
       c11 * matrix[0] + c12 * matrix[1] + c13 * matrix[2] +
       c21 * matrix[3] + c22 * matrix[4] + c23 * matrix[5] +
       c31 * matrix[6] + c32 * matrix[7] + c33 * matrix[8];

   gl_FragColor.a = c22.a;
}
`;(function(r){xx(e,r);function e(t,i,n){i===void 0&&(i=200),n===void 0&&(n=200);var o=r.call(this,bx,Tx)||this;return o.uniforms.texelSize=new Float32Array(2),o.uniforms.matrix=new Float32Array(9),t!==void 0&&(o.matrix=t),o.width=i,o.height=n,o}return Object.defineProperty(e.prototype,"matrix",{get:function(){return this.uniforms.matrix},set:function(t){var i=this;t.forEach(function(n,o){i.uniforms.matrix[o]=n})},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"width",{get:function(){return 1/this.uniforms.texelSize[0]},set:function(t){this.uniforms.texelSize[0]=1/t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"height",{get:function(){return 1/this.uniforms.texelSize[1]},set:function(t){this.uniforms.texelSize[1]=1/t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-cross-hatch - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-cross-hatch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Zs=function(r,e){return Zs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Zs(r,e)};function Cx(r,e){Zs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ex=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,wx=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void)
{
    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);

    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);

    if (lum < 1.00)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.75)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.50)
    {
        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }

    if (lum < 0.3)
    {
        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0)
        {
            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
        }
    }
}
`;(function(r){Cx(e,r);function e(){return r.call(this,Ex,wx)||this}return e})(z);/*!
 * @pixi/filter-crt - v4.1.6
 * Compiled Thu, 03 Feb 2022 14:30:04 UTC
 *
 * @pixi/filter-crt is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Js=function(r,e){return Js=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Js(r,e)};function Ax(r,e){Js(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Px=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ix=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec2 dimensions;

const float SQRT_2 = 1.414213;

const float light = 1.0;

uniform float curvature;
uniform float lineWidth;
uniform float lineContrast;
uniform bool verticalLine;
uniform float noise;
uniform float noiseSize;

uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;

uniform float seed;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 dir = vec2(vTextureCoord.xy * filterArea.xy / dimensions - vec2(0.5, 0.5));
    
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 rgb = gl_FragColor.rgb;

    if (noise > 0.0 && noiseSize > 0.0)
    {
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        rgb += _noise * noise;
    }

    if (lineWidth > 0.0)
    {
        float _c = curvature > 0. ? curvature : 1.;
        float k = curvature > 0. ?(length(dir * dir) * 0.25 * _c * _c + 0.935 * _c) : 1.;
        vec2 uv = dir * k;

        float v = (verticalLine ? uv.x * dimensions.x : uv.y * dimensions.y) * min(1.0, 2.0 / lineWidth ) / _c;
        float j = 1. + cos(v * 1.2 - time) * 0.5 * lineContrast;
        rgb *= j;
        float segment = verticalLine ? mod((dir.x + .5) * dimensions.x, 4.) : mod((dir.y + .5) * dimensions.y, 4.);
        rgb *= 0.99 + ceil(segment) * 0.015;
    }

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    gl_FragColor.rgb = rgb;
}
`;(function(r){Ax(e,r);function e(t){var i=r.call(this,Px,Ix)||this;return i.time=0,i.seed=0,i.uniforms.dimensions=new Float32Array(2),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var s=i.filterFrame,a=s.width,u=s.height;this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=u,this.uniforms.seed=this.seed,this.uniforms.time=this.time,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"curvature",{get:function(){return this.uniforms.curvature},set:function(t){this.uniforms.curvature=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineWidth",{get:function(){return this.uniforms.lineWidth},set:function(t){this.uniforms.lineWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lineContrast",{get:function(){return this.uniforms.lineContrast},set:function(t){this.uniforms.lineContrast=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"verticalLine",{get:function(){return this.uniforms.verticalLine},set:function(t){this.uniforms.verticalLine=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={curvature:1,lineWidth:1,lineContrast:.25,verticalLine:!1,noise:0,noiseSize:1,seed:0,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3,time:0},e})(z);/*!
 * @pixi/filter-dot - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-dot is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Qs=function(r,e){return Qs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},Qs(r,e)};function Rx(r,e){Qs(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Sx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ox=`precision mediump float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform vec4 filterArea;
uniform sampler2D uSampler;

uniform float angle;
uniform float scale;

float pattern()
{
   float s = sin(angle), c = cos(angle);
   vec2 tex = vTextureCoord * filterArea.xy;
   vec2 point = vec2(
       c * tex.x - s * tex.y,
       s * tex.x + c * tex.y
   ) * scale;
   return (sin(point.x) * sin(point.y)) * 4.0;
}

void main()
{
   vec4 color = texture2D(uSampler, vTextureCoord);
   float average = (color.r + color.g + color.b) / 3.0;
   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);
}
`;(function(r){Rx(e,r);function e(t,i){t===void 0&&(t=1),i===void 0&&(i=5);var n=r.call(this,Sx,Ox)||this;return n.scale=t,n.angle=i,n}return Object.defineProperty(e.prototype,"scale",{get:function(){return this.uniforms.scale},set:function(t){this.uniforms.scale=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-drop-shadow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-drop-shadow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ta=function(r,e){return ta=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ta(r,e)};function Nx(r,e){ta(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Ln=function(){return Ln=Object.assign||function(e){for(var t=arguments,i,n=1,o=arguments.length;n<o;n++){i=t[n];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},Ln.apply(this,arguments)},Fx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ux=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float alpha;
uniform vec3 color;

uniform vec2 shift;
uniform vec4 inputSize;

void main(void){
    vec4 sample = texture2D(uSampler, vTextureCoord - shift * inputSize.zw);

    // Premultiply alpha
    sample.rgb = color.rgb * sample.a;

    // alpha user alpha
    sample *= alpha;

    gl_FragColor = sample;
}`;(function(r){Nx(e,r);function e(t){var i=r.call(this)||this;i.angle=45,i._distance=5,i._resolution=U.FILTER_RESOLUTION;var n=t?Ln(Ln({},e.defaults),t):e.defaults,o=n.kernels,s=n.blur,a=n.quality,u=n.pixelSize,h=n.resolution;i._tintFilter=new z(Fx,Ux),i._tintFilter.uniforms.color=new Float32Array(4),i._tintFilter.uniforms.shift=new Y,i._tintFilter.resolution=h,i._blurFilter=o?new Un(o):new Un(s,a),i.pixelSize=u,i.resolution=h;var l=n.shadowOnly,c=n.rotation,f=n.distance,d=n.alpha,v=n.color;return i.shadowOnly=l,i.rotation=c,i.distance=f,i.alpha=d,i.color=v,i._updatePadding(),i}return e.prototype.apply=function(t,i,n,o){var s=t.getFilterTexture();this._tintFilter.apply(t,i,s,1),this._blurFilter.apply(t,s,n,o),this.shadowOnly!==!0&&t.applyFilter(this,i,n,0),t.returnFilterTexture(s)},e.prototype._updatePadding=function(){this.padding=this.distance+this.blur*2},e.prototype._updateShift=function(){this._tintFilter.uniforms.shift.set(this.distance*Math.cos(this.angle),this.distance*Math.sin(this.angle))},Object.defineProperty(e.prototype,"resolution",{get:function(){return this._resolution},set:function(t){this._resolution=t,this._tintFilter&&(this._tintFilter.resolution=t),this._blurFilter&&(this._blurFilter.resolution=t)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"distance",{get:function(){return this._distance},set:function(t){this._distance=t,this._updatePadding(),this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"rotation",{get:function(){return this.angle/Je},set:function(t){this.angle=t*Je,this._updateShift()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this._tintFilter.uniforms.alpha},set:function(t){this._tintFilter.uniforms.alpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return ie(this._tintFilter.uniforms.color)},set:function(t){Rt(t,this._tintFilter.uniforms.color)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"kernels",{get:function(){return this._blurFilter.kernels},set:function(t){this._blurFilter.kernels=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blur",{get:function(){return this._blurFilter.blur},set:function(t){this._blurFilter.blur=t,this._updatePadding()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"quality",{get:function(){return this._blurFilter.quality},set:function(t){this._blurFilter.quality=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"pixelSize",{get:function(){return this._blurFilter.pixelSize},set:function(t){this._blurFilter.pixelSize=t},enumerable:!1,configurable:!0}),e.defaults={rotation:45,distance:5,color:0,alpha:.5,shadowOnly:!1,kernels:null,blur:2,quality:3,pixelSize:1,resolution:U.FILTER_RESOLUTION},e})(z);/*!
 * @pixi/filter-emboss - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-emboss is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ea=function(r,e){return ea=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ea(r,e)};function Lx(r,e){ea(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Mx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Bx=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float strength;
uniform vec4 filterArea;


void main(void)
{
	vec2 onePixel = vec2(1.0 / filterArea);

	vec4 color;

	color.rgb = vec3(0.5);

	color -= texture2D(uSampler, vTextureCoord - onePixel) * strength;
	color += texture2D(uSampler, vTextureCoord + onePixel) * strength;

	color.rgb = vec3((color.r + color.g + color.b) / 3.0);

	float alpha = texture2D(uSampler, vTextureCoord).a;

	gl_FragColor = vec4(color.rgb * alpha, alpha);
}
`;(function(r){Lx(e,r);function e(t){t===void 0&&(t=5);var i=r.call(this,Mx,Bx)||this;return i.strength=t,i}return Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.strength},set:function(t){this.uniforms.strength=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-glitch - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glitch is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ra=function(r,e){return ra=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ra(r,e)};function Gx(r,e){ra(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Dx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,kx=`// precision highp float;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;
uniform float aspect;

uniform sampler2D displacementMap;
uniform float offset;
uniform float sinDir;
uniform float cosDir;
uniform int fillMode;

uniform float seed;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

const int TRANSPARENT = 0;
const int ORIGINAL = 1;
const int LOOP = 2;
const int CLAMP = 3;
const int MIRROR = 4;

void main(void)
{
    vec2 coord = (vTextureCoord * filterArea.xy) / dimensions;

    if (coord.x > 1.0 || coord.y > 1.0) {
        return;
    }

    float cx = coord.x - 0.5;
    float cy = (coord.y - 0.5) * aspect;
    float ny = (-sinDir * cx + cosDir * cy) / aspect + 0.5;

    // displacementMap: repeat
    // ny = ny > 1.0 ? ny - 1.0 : (ny < 0.0 ? 1.0 + ny : ny);

    // displacementMap: mirror
    ny = ny > 1.0 ? 2.0 - ny : (ny < 0.0 ? -ny : ny);

    vec4 dc = texture2D(displacementMap, vec2(0.5, ny));

    float displacement = (dc.r - dc.g) * (offset / filterArea.x);

    coord = vTextureCoord + vec2(cosDir * displacement, sinDir * displacement * aspect);

    if (fillMode == CLAMP) {
        coord = clamp(coord, filterClamp.xy, filterClamp.zw);
    } else {
        if( coord.x > filterClamp.z ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x -= filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x = filterClamp.z * 2.0 - coord.x;
            }
        } else if( coord.x < filterClamp.x ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.x += filterClamp.z;
            } else if (fillMode == MIRROR) {
                coord.x *= -filterClamp.z;
            }
        }

        if( coord.y > filterClamp.w ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y -= filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y = filterClamp.w * 2.0 - coord.y;
            }
        } else if( coord.y < filterClamp.y ) {
            if (fillMode == TRANSPARENT) {
                discard;
            } else if (fillMode == LOOP) {
                coord.y += filterClamp.w;
            } else if (fillMode == MIRROR) {
                coord.y *= -filterClamp.w;
            }
        }
    }

    gl_FragColor.r = texture2D(uSampler, coord + red * (1.0 - seed * 0.4) / filterArea.xy).r;
    gl_FragColor.g = texture2D(uSampler, coord + green * (1.0 - seed * 0.3) / filterArea.xy).g;
    gl_FragColor.b = texture2D(uSampler, coord + blue * (1.0 - seed * 0.2) / filterArea.xy).b;
    gl_FragColor.a = texture2D(uSampler, coord).a;
}
`;(function(r){Gx(e,r);function e(t){var i=r.call(this,Dx,kx)||this;return i.offset=100,i.fillMode=e.TRANSPARENT,i.average=!1,i.seed=0,i.minSize=8,i.sampleSize=512,i._slices=0,i._offsets=new Float32Array(1),i._sizes=new Float32Array(1),i._direction=-1,i.uniforms.dimensions=new Float32Array(2),i._canvas=document.createElement("canvas"),i._canvas.width=4,i._canvas.height=i.sampleSize,i.texture=k.from(i._canvas,{scaleMode:Vt.NEAREST}),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var s=i.filterFrame,a=s.width,u=s.height;this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/a,this.uniforms.seed=this.seed,this.uniforms.offset=this.offset,this.uniforms.fillMode=this.fillMode,t.applyFilter(this,i,n,o)},e.prototype._randomizeSizes=function(){var t=this._sizes,i=this._slices-1,n=this.sampleSize,o=Math.min(this.minSize/n,.9/this._slices);if(this.average){for(var s=this._slices,a=1,u=0;u<i;u++){var h=a/(s-u),l=Math.max(h*(1-Math.random()*.6),o);t[u]=l,a-=l}t[i]=a}else{for(var a=1,c=Math.sqrt(1/this._slices),u=0;u<i;u++){var l=Math.max(c*a*Math.random(),o);t[u]=l,a-=l}t[i]=a}this.shuffle()},e.prototype.shuffle=function(){for(var t=this._sizes,i=this._slices-1,n=i;n>0;n--){var o=Math.random()*n>>0,s=t[n];t[n]=t[o],t[o]=s}},e.prototype._randomizeOffsets=function(){for(var t=0;t<this._slices;t++)this._offsets[t]=Math.random()*(Math.random()<.5?-1:1)},e.prototype.refresh=function(){this._randomizeSizes(),this._randomizeOffsets(),this.redraw()},e.prototype.redraw=function(){var t=this.sampleSize,i=this.texture,n=this._canvas.getContext("2d");n.clearRect(0,0,8,t);for(var o,s=0,a=0;a<this._slices;a++){o=Math.floor(this._offsets[a]*256);var u=this._sizes[a]*t,h=o>0?o:0,l=o<0?-o:0;n.fillStyle="rgba("+h+", "+l+", 0, 1)",n.fillRect(0,s>>0,t,u+1>>0),s+=u}i.baseTexture.update(),this.uniforms.displacementMap=i},Object.defineProperty(e.prototype,"sizes",{get:function(){return this._sizes},set:function(t){for(var i=Math.min(this._slices,t.length),n=0;n<i;n++)this._sizes[n]=t[n]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"offsets",{get:function(){return this._offsets},set:function(t){for(var i=Math.min(this._slices,t.length),n=0;n<i;n++)this._offsets[n]=t[n]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"slices",{get:function(){return this._slices},set:function(t){this._slices!==t&&(this._slices=t,this.uniforms.slices=t,this._sizes=this.uniforms.slicesWidth=new Float32Array(t),this._offsets=this.uniforms.slicesOffset=new Float32Array(t),this.refresh())},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"direction",{get:function(){return this._direction},set:function(t){if(this._direction!==t){this._direction=t;var i=t*Je;this.uniforms.sinDir=Math.sin(i),this.uniforms.cosDir=Math.cos(i)}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){var t;(t=this.texture)===null||t===void 0||t.destroy(!0),this.texture=this._canvas=this.red=this.green=this.blue=this._sizes=this._offsets=null},e.defaults={slices:5,offset:100,direction:0,fillMode:0,average:!1,seed:0,red:[0,0],green:[0,0],blue:[0,0],minSize:8,sampleSize:512},e.TRANSPARENT=0,e.ORIGINAL=1,e.LOOP=2,e.CLAMP=3,e.MIRROR=4,e})(z);/*!
 * @pixi/filter-glow - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-glow is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ia=function(r,e){return ia=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ia(r,e)};function zx(r,e){ia(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Xx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,jx=`varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

uniform float outerStrength;
uniform float innerStrength;

uniform vec4 glowColor;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform bool knockout;

const float PI = 3.14159265358979323846264;

const float DIST = __DIST__;
const float ANGLE_STEP_SIZE = min(__ANGLE_STEP_SIZE__, PI * 2.0);
const float ANGLE_STEP_NUM = ceil(PI * 2.0 / ANGLE_STEP_SIZE);

const float MAX_TOTAL_ALPHA = ANGLE_STEP_NUM * DIST * (DIST + 1.0) / 2.0;

void main(void) {
    vec2 px = vec2(1.0 / filterArea.x, 1.0 / filterArea.y);

    float totalAlpha = 0.0;

    vec2 direction;
    vec2 displaced;
    vec4 curColor;

    for (float angle = 0.0; angle < PI * 2.0; angle += ANGLE_STEP_SIZE) {
       direction = vec2(cos(angle), sin(angle)) * px;

       for (float curDistance = 0.0; curDistance < DIST; curDistance++) {
           displaced = clamp(vTextureCoord + direction * 
                   (curDistance + 1.0), filterClamp.xy, filterClamp.zw);

           curColor = texture2D(uSampler, displaced);

           totalAlpha += (DIST - curDistance) * curColor.a;
       }
    }
    
    curColor = texture2D(uSampler, vTextureCoord);

    float alphaRatio = (totalAlpha / MAX_TOTAL_ALPHA);

    float innerGlowAlpha = (1.0 - alphaRatio) * innerStrength * curColor.a;
    float innerGlowStrength = min(1.0, innerGlowAlpha);
    
    vec4 innerColor = mix(curColor, glowColor, innerGlowStrength);

    float outerGlowAlpha = alphaRatio * outerStrength * (1. - curColor.a);
    float outerGlowStrength = min(1.0 - innerColor.a, outerGlowAlpha);

    vec4 outerGlowColor = outerGlowStrength * glowColor.rgba;
    
    if (knockout) {
      float resultAlpha = outerGlowAlpha + innerGlowAlpha;
      gl_FragColor = vec4(glowColor.rgb * resultAlpha, resultAlpha);
    }
    else {
      gl_FragColor = innerColor + outerGlowColor;
    }
}
`,Hx=function(r){zx(e,r);function e(t){var i=this,n=Object.assign({},e.defaults,t),o=n.outerStrength,s=n.innerStrength,a=n.color,u=n.knockout,h=n.quality,l=Math.round(n.distance);return i=r.call(this,Xx,jx.replace(/__ANGLE_STEP_SIZE__/gi,""+(1/h/l).toFixed(7)).replace(/__DIST__/gi,l.toFixed(0)+".0"))||this,i.uniforms.glowColor=new Float32Array([0,0,0,1]),Object.assign(i,{color:a,outerStrength:o,innerStrength:s,padding:l,knockout:u}),i}return Object.defineProperty(e.prototype,"color",{get:function(){return ie(this.uniforms.glowColor)},set:function(t){Rt(t,this.uniforms.glowColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"outerStrength",{get:function(){return this.uniforms.outerStrength},set:function(t){this.uniforms.outerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerStrength",{get:function(){return this.uniforms.innerStrength},set:function(t){this.uniforms.innerStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"knockout",{get:function(){return this.uniforms.knockout},set:function(t){this.uniforms.knockout=t},enumerable:!1,configurable:!0}),e.defaults={distance:10,outerStrength:4,innerStrength:0,color:16777215,quality:.1,knockout:!1},e}(z);/*!
 * @pixi/filter-godray - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-godray is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var na=function(r,e){return na=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},na(r,e)};function Vx(r,e){na(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Wx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Yx=`vec3 mod289(vec3 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 mod289(vec4 x)
{
    return x - floor(x * (1.0 / 289.0)) * 289.0;
}
vec4 permute(vec4 x)
{
    return mod289(((x * 34.0) + 1.0) * x);
}
vec4 taylorInvSqrt(vec4 r)
{
    return 1.79284291400159 - 0.85373472095314 * r;
}
vec3 fade(vec3 t)
{
    return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);
}
// Classic Perlin noise, periodic variant
float pnoise(vec3 P, vec3 rep)
{
    vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
    vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
    Pi0 = mod289(Pi0);
    Pi1 = mod289(Pi1);
    vec3 Pf0 = fract(P); // Fractional part for interpolation
    vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
    vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
    vec4 iy = vec4(Pi0.yy, Pi1.yy);
    vec4 iz0 = Pi0.zzzz;
    vec4 iz1 = Pi1.zzzz;
    vec4 ixy = permute(permute(ix) + iy);
    vec4 ixy0 = permute(ixy + iz0);
    vec4 ixy1 = permute(ixy + iz1);
    vec4 gx0 = ixy0 * (1.0 / 7.0);
    vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
    gx0 = fract(gx0);
    vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
    vec4 sz0 = step(gz0, vec4(0.0));
    gx0 -= sz0 * (step(0.0, gx0) - 0.5);
    gy0 -= sz0 * (step(0.0, gy0) - 0.5);
    vec4 gx1 = ixy1 * (1.0 / 7.0);
    vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
    gx1 = fract(gx1);
    vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
    vec4 sz1 = step(gz1, vec4(0.0));
    gx1 -= sz1 * (step(0.0, gx1) - 0.5);
    gy1 -= sz1 * (step(0.0, gy1) - 0.5);
    vec3 g000 = vec3(gx0.x, gy0.x, gz0.x);
    vec3 g100 = vec3(gx0.y, gy0.y, gz0.y);
    vec3 g010 = vec3(gx0.z, gy0.z, gz0.z);
    vec3 g110 = vec3(gx0.w, gy0.w, gz0.w);
    vec3 g001 = vec3(gx1.x, gy1.x, gz1.x);
    vec3 g101 = vec3(gx1.y, gy1.y, gz1.y);
    vec3 g011 = vec3(gx1.z, gy1.z, gz1.z);
    vec3 g111 = vec3(gx1.w, gy1.w, gz1.w);
    vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
    g000 *= norm0.x;
    g010 *= norm0.y;
    g100 *= norm0.z;
    g110 *= norm0.w;
    vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
    g001 *= norm1.x;
    g011 *= norm1.y;
    g101 *= norm1.z;
    g111 *= norm1.w;
    float n000 = dot(g000, Pf0);
    float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
    float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
    float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
    float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
    float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
    float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
    float n111 = dot(g111, Pf1);
    vec3 fade_xyz = fade(Pf0);
    vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
    vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
    float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
    return 2.2 * n_xyz;
}
float turb(vec3 P, vec3 rep, float lacunarity, float gain)
{
    float sum = 0.0;
    float sc = 1.0;
    float totalgain = 1.0;
    for (float i = 0.0; i < 6.0; i++)
    {
        sum += totalgain * pnoise(P * sc, rep);
        sc *= lacunarity;
        totalgain *= gain;
    }
    return abs(sum);
}
`,$x=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform vec2 light;
uniform bool parallel;
uniform float aspect;

uniform float gain;
uniform float lacunarity;
uniform float time;
uniform float alpha;

\${perlin}

void main(void) {
    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    float d;

    if (parallel) {
        float _cos = light.x;
        float _sin = light.y;
        d = (_cos * coord.x) + (_sin * coord.y * aspect);
    } else {
        float dx = coord.x - light.x / dimensions.x;
        float dy = (coord.y - light.y / dimensions.y) * aspect;
        float dis = sqrt(dx * dx + dy * dy) + 0.00001;
        d = dy / dis;
    }

    vec3 dir = vec3(d, d, 0.0);

    float noise = turb(dir + vec3(time, 0.0, 62.1 + time) * 0.05, vec3(480.0, 320.0, 480.0), lacunarity, gain);
    noise = mix(noise, 0.0, 0.3);
    //fade vertically.
    vec4 mist = vec4(noise, noise, noise, 1.0) * (1.0 - coord.y);
    mist.a = 1.0;
    // apply user alpha
    mist *= alpha;

    gl_FragColor = texture2D(uSampler, vTextureCoord) + mist;

}
`;(function(r){Vx(e,r);function e(t){var i=r.call(this,Wx,$x.replace("${perlin}",Yx))||this;i.parallel=!0,i.time=0,i._angle=0,i.uniforms.dimensions=new Float32Array(2);var n=Object.assign(e.defaults,t);return i._angleLight=new Y,i.angle=n.angle,i.gain=n.gain,i.lacunarity=n.lacunarity,i.alpha=n.alpha,i.parallel=n.parallel,i.center=n.center,i.time=n.time,i}return e.prototype.apply=function(t,i,n,o){var s=i.filterFrame,a=s.width,u=s.height;this.uniforms.light=this.parallel?this._angleLight:this.center,this.uniforms.parallel=this.parallel,this.uniforms.dimensions[0]=a,this.uniforms.dimensions[1]=u,this.uniforms.aspect=u/a,this.uniforms.time=this.time,this.uniforms.alpha=this.alpha,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t;var i=t*Je;this._angleLight.x=Math.cos(i),this._angleLight.y=Math.sin(i)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gain",{get:function(){return this.uniforms.gain},set:function(t){this.uniforms.gain=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"lacunarity",{get:function(){return this.uniforms.lacunarity},set:function(t){this.uniforms.lacunarity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha=t},enumerable:!1,configurable:!0}),e.defaults={angle:30,gain:.5,lacunarity:2.5,time:0,parallel:!0,center:[0,0],alpha:1},e})(z);/*!
 * @pixi/filter-motion-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-motion-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var oa=function(r,e){return oa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},oa(r,e)};function qx(r,e){oa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Kx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Zx=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uVelocity;
uniform int uKernelSize;
uniform float uOffset;

const int MAX_KERNEL_SIZE = 2048;

// Notice:
// the perfect way:
//    int kernelSize = min(uKernelSize, MAX_KERNELSIZE);
// BUT in real use-case , uKernelSize < MAX_KERNELSIZE almost always.
// So use uKernelSize directly.

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    vec2 velocity = uVelocity / filterArea.xy;
    float offset = -uOffset / length(uVelocity) - 0.5;
    int k = uKernelSize - 1;

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }
        vec2 bias = velocity * (float(i) / float(k) + offset);
        color += texture2D(uSampler, vTextureCoord + bias);
    }
    gl_FragColor = color / float(uKernelSize);
}
`;(function(r){qx(e,r);function e(t,i,n){t===void 0&&(t=[0,0]),i===void 0&&(i=5),n===void 0&&(n=0);var o=r.call(this,Kx,Zx)||this;return o.kernelSize=5,o.uniforms.uVelocity=new Float32Array(2),o._velocity=new ze(o.velocityChanged,o),o.setVelocity(t),o.kernelSize=i,o.offset=n,o}return e.prototype.apply=function(t,i,n,o){var s=this.velocity,a=s.x,u=s.y;this.uniforms.uKernelSize=a!==0||u!==0?this.kernelSize:0,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"velocity",{get:function(){return this._velocity},set:function(t){this.setVelocity(t)},enumerable:!1,configurable:!0}),e.prototype.setVelocity=function(t){if(Array.isArray(t)){var i=t[0],n=t[1];this._velocity.set(i,n)}else this._velocity.copyFrom(t)},e.prototype.velocityChanged=function(){this.uniforms.uVelocity[0]=this._velocity.x,this.uniforms.uVelocity[1]=this._velocity.y,this.padding=(Math.max(Math.abs(this._velocity.x),Math.abs(this._velocity.y))>>0)+1},Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.uOffset},set:function(t){this.uniforms.uOffset=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-multi-color-replace - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-multi-color-replace is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var sa=function(r,e){return sa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},sa(r,e)};function Jx(r,e){sa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Qx=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,tb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform float epsilon;

const int MAX_COLORS = %maxColors%;

uniform vec3 originalColors[MAX_COLORS];
uniform vec3 targetColors[MAX_COLORS];

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);

    float alpha = gl_FragColor.a;
    if (alpha < 0.0001)
    {
      return;
    }

    vec3 color = gl_FragColor.rgb / alpha;

    for(int i = 0; i < MAX_COLORS; i++)
    {
      vec3 origColor = originalColors[i];
      if (origColor.r < 0.0)
      {
        break;
      }
      vec3 colorDiff = origColor - color;
      if (length(colorDiff) < epsilon)
      {
        vec3 targetColor = targetColors[i];
        gl_FragColor = vec4((targetColor + colorDiff) * alpha, alpha);
        return;
      }
    }
}
`;(function(r){Jx(e,r);function e(t,i,n){i===void 0&&(i=.05),n===void 0&&(n=t.length);var o=r.call(this,Qx,tb.replace(/%maxColors%/g,n.toFixed(0)))||this;return o._replacements=[],o._maxColors=0,o.epsilon=i,o._maxColors=n,o.uniforms.originalColors=new Float32Array(n*3),o.uniforms.targetColors=new Float32Array(n*3),o.replacements=t,o}return Object.defineProperty(e.prototype,"replacements",{get:function(){return this._replacements},set:function(t){var i=this.uniforms.originalColors,n=this.uniforms.targetColors,o=t.length;if(o>this._maxColors)throw new Error("Length of replacements ("+o+") exceeds the maximum colors length ("+this._maxColors+")");i[o*3]=-1;for(var s=0;s<o;s++){var a=t[s],u=a[0];typeof u=="number"?u=Rt(u):a[0]=ie(u),i[s*3]=u[0],i[s*3+1]=u[1],i[s*3+2]=u[2];var h=a[1];typeof h=="number"?h=Rt(h):a[1]=ie(h),n[s*3]=h[0],n[s*3+1]=h[1],n[s*3+2]=h[2]}this._replacements=t},enumerable:!1,configurable:!0}),e.prototype.refresh=function(){this.replacements=this._replacements},Object.defineProperty(e.prototype,"maxColors",{get:function(){return this._maxColors},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"epsilon",{get:function(){return this.uniforms.epsilon},set:function(t){this.uniforms.epsilon=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-old-film - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-old-film is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var aa=function(r,e){return aa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},aa(r,e)};function eb(r,e){aa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var rb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,ib=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 dimensions;

uniform float sepia;
uniform float noise;
uniform float noiseSize;
uniform float scratch;
uniform float scratchDensity;
uniform float scratchWidth;
uniform float vignetting;
uniform float vignettingAlpha;
uniform float vignettingBlur;
uniform float seed;

const float SQRT_2 = 1.414213;
const vec3 SEPIA_RGB = vec3(112.0 / 255.0, 66.0 / 255.0, 20.0 / 255.0);

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

vec3 Overlay(vec3 src, vec3 dst)
{
    // if (dst <= 0.5) then: 2 * src * dst
    // if (dst > 0.5) then: 1 - 2 * (1 - dst) * (1 - src)
    return vec3((dst.x <= 0.5) ? (2.0 * src.x * dst.x) : (1.0 - 2.0 * (1.0 - dst.x) * (1.0 - src.x)),
                (dst.y <= 0.5) ? (2.0 * src.y * dst.y) : (1.0 - 2.0 * (1.0 - dst.y) * (1.0 - src.y)),
                (dst.z <= 0.5) ? (2.0 * src.z * dst.z) : (1.0 - 2.0 * (1.0 - dst.z) * (1.0 - src.z)));
}


void main()
{
    gl_FragColor = texture2D(uSampler, vTextureCoord);
    vec3 color = gl_FragColor.rgb;

    if (sepia > 0.0)
    {
        float gray = (color.x + color.y + color.z) / 3.0;
        vec3 grayscale = vec3(gray);

        color = Overlay(SEPIA_RGB, grayscale);

        color = grayscale + sepia * (color - grayscale);
    }

    vec2 coord = vTextureCoord * filterArea.xy / dimensions.xy;

    if (vignetting > 0.0)
    {
        float outter = SQRT_2 - vignetting * SQRT_2;
        vec2 dir = vec2(vec2(0.5, 0.5) - coord);
        dir.y *= dimensions.y / dimensions.x;
        float darker = clamp((outter - length(dir) * SQRT_2) / ( 0.00001 + vignettingBlur * SQRT_2), 0.0, 1.0);
        color.rgb *= darker + (1.0 - darker) * (1.0 - vignettingAlpha);
    }

    if (scratchDensity > seed && scratch != 0.0)
    {
        float phase = seed * 256.0;
        float s = mod(floor(phase), 2.0);
        float dist = 1.0 / scratchDensity;
        float d = distance(coord, vec2(seed * dist, abs(s - seed * dist)));
        if (d < seed * 0.6 + 0.4)
        {
            highp float period = scratchDensity * 10.0;

            float xx = coord.x * period + phase;
            float aa = abs(mod(xx, 0.5) * 4.0);
            float bb = mod(floor(xx / 0.5), 2.0);
            float yy = (1.0 - bb) * aa + bb * (2.0 - aa);

            float kk = 2.0 * period;
            float dw = scratchWidth / dimensions.x * (0.75 + seed);
            float dh = dw * kk;

            float tine = (yy - (2.0 - dh));

            if (tine > 0.0) {
                float _sign = sign(scratch);

                tine = s * tine / period + scratch + 0.1;
                tine = clamp(tine + 1.0, 0.5 + _sign * 0.5, 1.5 + _sign * 0.5);

                color.rgb *= tine;
            }
        }
    }

    if (noise > 0.0 && noiseSize > 0.0)
    {
        vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
        pixelCoord.x = floor(pixelCoord.x / noiseSize);
        pixelCoord.y = floor(pixelCoord.y / noiseSize);
        // vec2 d = pixelCoord * noiseSize * vec2(1024.0 + seed * 512.0, 1024.0 - seed * 512.0);
        // float _noise = snoise(d) * 0.5;
        float _noise = rand(pixelCoord * noiseSize * seed) - 0.5;
        color += _noise * noise;
    }

    gl_FragColor.rgb = color;
}
`;(function(r){eb(e,r);function e(t,i){i===void 0&&(i=0);var n=r.call(this,rb,ib)||this;return n.seed=0,n.uniforms.dimensions=new Float32Array(2),typeof t=="number"?(n.seed=t,t=void 0):n.seed=i,Object.assign(n,e.defaults,t),n}return e.prototype.apply=function(t,i,n,o){var s,a;this.uniforms.dimensions[0]=(s=i.filterFrame)===null||s===void 0?void 0:s.width,this.uniforms.dimensions[1]=(a=i.filterFrame)===null||a===void 0?void 0:a.height,this.uniforms.seed=this.seed,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"sepia",{get:function(){return this.uniforms.sepia},set:function(t){this.uniforms.sepia=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noise",{get:function(){return this.uniforms.noise},set:function(t){this.uniforms.noise=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"noiseSize",{get:function(){return this.uniforms.noiseSize},set:function(t){this.uniforms.noiseSize=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratch",{get:function(){return this.uniforms.scratch},set:function(t){this.uniforms.scratch=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchDensity",{get:function(){return this.uniforms.scratchDensity},set:function(t){this.uniforms.scratchDensity=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scratchWidth",{get:function(){return this.uniforms.scratchWidth},set:function(t){this.uniforms.scratchWidth=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignetting",{get:function(){return this.uniforms.vignetting},set:function(t){this.uniforms.vignetting=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingAlpha",{get:function(){return this.uniforms.vignettingAlpha},set:function(t){this.uniforms.vignettingAlpha=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"vignettingBlur",{get:function(){return this.uniforms.vignettingBlur},set:function(t){this.uniforms.vignettingBlur=t},enumerable:!1,configurable:!0}),e.defaults={sepia:.3,noise:.3,noiseSize:1,scratch:.5,scratchDensity:.3,scratchWidth:1,vignetting:.3,vignettingAlpha:1,vignettingBlur:.3},e})(z);/*!
 * @pixi/filter-outline - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-outline is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ua=function(r,e){return ua=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ua(r,e)};function nb(r,e){ua(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ob=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,sb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec2 thickness;
uniform vec4 outlineColor;
uniform vec4 filterClamp;

const float DOUBLE_PI = 3.14159265358979323846264 * 2.;

void main(void) {
    vec4 ownColor = texture2D(uSampler, vTextureCoord);
    vec4 curColor;
    float maxAlpha = 0.;
    vec2 displaced;
    for (float angle = 0.; angle <= DOUBLE_PI; angle += \${angleStep}) {
        displaced.x = vTextureCoord.x + thickness.x * cos(angle);
        displaced.y = vTextureCoord.y + thickness.y * sin(angle);
        curColor = texture2D(uSampler, clamp(displaced, filterClamp.xy, filterClamp.zw));
        maxAlpha = max(maxAlpha, curColor.a);
    }
    float resultAlpha = max(maxAlpha, ownColor.a);
    gl_FragColor = vec4((ownColor.rgb + outlineColor.rgb * (1. - ownColor.a)) * resultAlpha, resultAlpha);
}
`;(function(r){nb(e,r);function e(t,i,n){t===void 0&&(t=1),i===void 0&&(i=0),n===void 0&&(n=.1);var o=r.call(this,ob,sb.replace(/\$\{angleStep\}/,e.getAngleStep(n)))||this;return o._thickness=1,o.uniforms.thickness=new Float32Array([0,0]),o.uniforms.outlineColor=new Float32Array([0,0,0,1]),Object.assign(o,{thickness:t,color:i,quality:n}),o}return e.getAngleStep=function(t){var i=Math.max(t*e.MAX_SAMPLES,e.MIN_SAMPLES);return(Math.PI*2/i).toFixed(7)},e.prototype.apply=function(t,i,n,o){this.uniforms.thickness[0]=this._thickness/i._frame.width,this.uniforms.thickness[1]=this._thickness/i._frame.height,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"color",{get:function(){return ie(this.uniforms.outlineColor)},set:function(t){Rt(t,this.uniforms.outlineColor)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"thickness",{get:function(){return this._thickness},set:function(t){this._thickness=t,this.padding=t},enumerable:!1,configurable:!0}),e.MIN_SAMPLES=1,e.MAX_SAMPLES=100,e})(z);/*!
 * @pixi/filter-pixelate - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-pixelate is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ha=function(r,e){return ha=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ha(r,e)};function ab(r,e){ha(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var ub=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,hb=`precision mediump float;

varying vec2 vTextureCoord;

uniform vec2 size;
uniform sampler2D uSampler;

uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 pixelate(vec2 coord, vec2 size)
{
	return floor( coord / size ) * size;
}

void main(void)
{
    vec2 coord = mapCoord(vTextureCoord);

    coord = pixelate(coord, size);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord);
}
`;(function(r){ab(e,r);function e(t){t===void 0&&(t=10);var i=r.call(this,ub,hb)||this;return i.size=t,i}return Object.defineProperty(e.prototype,"size",{get:function(){return this.uniforms.size},set:function(t){typeof t=="number"&&(t=[t,t]),this.uniforms.size=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-radial-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-radial-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var la=function(r,e){return la=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},la(r,e)};function lb(r,e){la(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var fb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,cb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform float uRadian;
uniform vec2 uCenter;
uniform float uRadius;
uniform int uKernelSize;

const int MAX_KERNEL_SIZE = 2048;

void main(void)
{
    vec4 color = texture2D(uSampler, vTextureCoord);

    if (uKernelSize == 0)
    {
        gl_FragColor = color;
        return;
    }

    float aspect = filterArea.y / filterArea.x;
    vec2 center = uCenter.xy / filterArea.xy;
    float gradient = uRadius / filterArea.x * 0.3;
    float radius = uRadius / filterArea.x - gradient * 0.5;
    int k = uKernelSize - 1;

    vec2 coord = vTextureCoord;
    vec2 dir = vec2(center - coord);
    float dist = length(vec2(dir.x, dir.y * aspect));

    float radianStep = uRadian;
    if (radius >= 0.0 && dist > radius) {
        float delta = dist - radius;
        float gap = gradient;
        float scale = 1.0 - abs(delta / gap);
        if (scale <= 0.0) {
            gl_FragColor = color;
            return;
        }
        radianStep *= scale;
    }
    radianStep /= float(k);

    float s = sin(radianStep);
    float c = cos(radianStep);
    mat2 rotationMatrix = mat2(vec2(c, -s), vec2(s, c));

    for(int i = 0; i < MAX_KERNEL_SIZE - 1; i++) {
        if (i == k) {
            break;
        }

        coord -= center;
        coord.y *= aspect;
        coord = rotationMatrix * coord;
        coord.y /= aspect;
        coord += center;

        vec4 sample = texture2D(uSampler, coord);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample;
    }

    gl_FragColor = color / float(uKernelSize);
}
`;(function(r){lb(e,r);function e(t,i,n,o){t===void 0&&(t=0),i===void 0&&(i=[0,0]),n===void 0&&(n=5),o===void 0&&(o=-1);var s=r.call(this,fb,cb)||this;return s._angle=0,s.angle=t,s.center=i,s.kernelSize=n,s.radius=o,s}return e.prototype.apply=function(t,i,n,o){this.uniforms.uKernelSize=this._angle!==0?this.kernelSize:0,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"angle",{get:function(){return this._angle},set:function(t){this._angle=t,this.uniforms.uRadian=t*Math.PI/180},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-reflection - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-reflection is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var fa=function(r,e){return fa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},fa(r,e)};function db(r,e){fa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var pb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,vb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;
uniform vec2 dimensions;

uniform bool mirror;
uniform float boundary;
uniform vec2 amplitude;
uniform vec2 waveLength;
uniform vec2 alpha;
uniform float time;

float rand(vec2 co) {
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void)
{
    vec2 pixelCoord = vTextureCoord.xy * filterArea.xy;
    vec2 coord = pixelCoord / dimensions;

    if (coord.y < boundary) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    float k = (coord.y - boundary) / (1. - boundary + 0.0001);
    float areaY = boundary * dimensions.y / filterArea.y;
    float v = areaY + areaY - vTextureCoord.y;
    float y = mirror ? v : vTextureCoord.y;

    float _amplitude = ((amplitude.y - amplitude.x) * k + amplitude.x ) / filterArea.x;
    float _waveLength = ((waveLength.y - waveLength.x) * k + waveLength.x) / filterArea.y;
    float _alpha = (alpha.y - alpha.x) * k + alpha.x;

    float x = vTextureCoord.x + cos(v * 6.28 / _waveLength - time) * _amplitude;
    x = clamp(x, filterClamp.x, filterClamp.z);

    vec4 color = texture2D(uSampler, vec2(x, y));

    gl_FragColor = color * _alpha;
}
`;(function(r){db(e,r);function e(t){var i=r.call(this,pb,vb)||this;return i.time=0,i.uniforms.amplitude=new Float32Array(2),i.uniforms.waveLength=new Float32Array(2),i.uniforms.alpha=new Float32Array(2),i.uniforms.dimensions=new Float32Array(2),Object.assign(i,e.defaults,t),i}return e.prototype.apply=function(t,i,n,o){var s,a;this.uniforms.dimensions[0]=(s=i.filterFrame)===null||s===void 0?void 0:s.width,this.uniforms.dimensions[1]=(a=i.filterFrame)===null||a===void 0?void 0:a.height,this.uniforms.time=this.time,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"mirror",{get:function(){return this.uniforms.mirror},set:function(t){this.uniforms.mirror=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"boundary",{get:function(){return this.uniforms.boundary},set:function(t){this.uniforms.boundary=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude[0]=t[0],this.uniforms.amplitude[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"waveLength",{get:function(){return this.uniforms.waveLength},set:function(t){this.uniforms.waveLength[0]=t[0],this.uniforms.waveLength[1]=t[1]},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.alpha},set:function(t){this.uniforms.alpha[0]=t[0],this.uniforms.alpha[1]=t[1]},enumerable:!1,configurable:!0}),e.defaults={mirror:!0,boundary:.5,amplitude:[0,20],waveLength:[30,100],alpha:[1,1],time:0},e})(z);/*!
 * @pixi/filter-rgb-split - v4.1.3
 * Compiled Thu, 17 Jun 2021 19:33:56 UTC
 *
 * @pixi/filter-rgb-split is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ca=function(r,e){return ca=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ca(r,e)};function _b(r,e){ca(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var mb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,gb=`precision mediump float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec2 red;
uniform vec2 green;
uniform vec2 blue;

void main(void)
{
   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/filterArea.xy).r;
   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/filterArea.xy).g;
   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/filterArea.xy).b;
   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;
}
`;(function(r){_b(e,r);function e(t,i,n){t===void 0&&(t=[-10,0]),i===void 0&&(i=[0,10]),n===void 0&&(n=[0,0]);var o=r.call(this,mb,gb)||this;return o.red=t,o.green=i,o.blue=n,o}return Object.defineProperty(e.prototype,"red",{get:function(){return this.uniforms.red},set:function(t){this.uniforms.red=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"green",{get:function(){return this.uniforms.green},set:function(t){this.uniforms.green=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"blue",{get:function(){return this.uniforms.blue},set:function(t){this.uniforms.blue=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-shockwave - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-shockwave is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var da=function(r,e){return da=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},da(r,e)};function yb(r,e){da(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var xb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,bb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;
uniform vec4 filterClamp;

uniform vec2 center;

uniform float amplitude;
uniform float wavelength;
// uniform float power;
uniform float brightness;
uniform float speed;
uniform float radius;

uniform float time;

const float PI = 3.14159;

void main()
{
    float halfWavelength = wavelength * 0.5 / filterArea.x;
    float maxRadius = radius / filterArea.x;
    float currentRadius = time * speed / filterArea.x;

    float fade = 1.0;

    if (maxRadius > 0.0) {
        if (currentRadius > maxRadius) {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
        fade = 1.0 - pow(currentRadius / maxRadius, 2.0);
    }

    vec2 dir = vec2(vTextureCoord - center / filterArea.xy);
    dir.y *= filterArea.y / filterArea.x;
    float dist = length(dir);

    if (dist <= 0.0 || dist < currentRadius - halfWavelength || dist > currentRadius + halfWavelength) {
        gl_FragColor = texture2D(uSampler, vTextureCoord);
        return;
    }

    vec2 diffUV = normalize(dir);

    float diff = (dist - currentRadius) / halfWavelength;

    float p = 1.0 - pow(abs(diff), 2.0);

    // float powDiff = diff * pow(p, 2.0) * ( amplitude * fade );
    float powDiff = 1.25 * sin(diff * PI) * p * ( amplitude * fade );

    vec2 offset = diffUV * powDiff / filterArea.xy;

    // Do clamp :
    vec2 coord = vTextureCoord + offset;
    vec2 clampedCoord = clamp(coord, filterClamp.xy, filterClamp.zw);
    vec4 color = texture2D(uSampler, clampedCoord);
    if (coord != clampedCoord) {
        color *= max(0.0, 1.0 - length(coord - clampedCoord));
    }

    // No clamp :
    // gl_FragColor = texture2D(uSampler, vTextureCoord + offset);

    color.rgb *= 1.0 + (brightness - 1.0) * p * fade;

    gl_FragColor = color;
}
`;(function(r){yb(e,r);function e(t,i,n){t===void 0&&(t=[0,0]),n===void 0&&(n=0);var o=r.call(this,xb,bb)||this;return o.center=t,Object.assign(o,e.defaults,i),o.time=n,o}return e.prototype.apply=function(t,i,n,o){this.uniforms.time=this.time,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.center},set:function(t){this.uniforms.center=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"amplitude",{get:function(){return this.uniforms.amplitude},set:function(t){this.uniforms.amplitude=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"wavelength",{get:function(){return this.uniforms.wavelength},set:function(t){this.uniforms.wavelength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"brightness",{get:function(){return this.uniforms.brightness},set:function(t){this.uniforms.brightness=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"speed",{get:function(){return this.uniforms.speed},set:function(t){this.uniforms.speed=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),e.defaults={amplitude:30,wavelength:160,brightness:1,speed:500,radius:-1},e})(z);/*!
 * @pixi/filter-simple-lightmap - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-simple-lightmap is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var pa=function(r,e){return pa=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},pa(r,e)};function Tb(r,e){pa(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Cb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Eb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform sampler2D uLightmap;
uniform vec4 filterArea;
uniform vec2 dimensions;
uniform vec4 ambientColor;
void main() {
    vec4 diffuseColor = texture2D(uSampler, vTextureCoord);
    vec2 lightCoord = (vTextureCoord * filterArea.xy) / dimensions;
    vec4 light = texture2D(uLightmap, lightCoord);
    vec3 ambient = ambientColor.rgb * ambientColor.a;
    vec3 intensity = ambient + light.rgb;
    vec3 finalColor = diffuseColor.rgb * intensity;
    gl_FragColor = vec4(finalColor, diffuseColor.a);
}
`;(function(r){Tb(e,r);function e(t,i,n){i===void 0&&(i=0),n===void 0&&(n=1);var o=r.call(this,Cb,Eb)||this;return o._color=0,o.uniforms.dimensions=new Float32Array(2),o.uniforms.ambientColor=new Float32Array([0,0,0,n]),o.texture=t,o.color=i,o}return e.prototype.apply=function(t,i,n,o){var s,a;this.uniforms.dimensions[0]=(s=i.filterFrame)===null||s===void 0?void 0:s.width,this.uniforms.dimensions[1]=(a=i.filterFrame)===null||a===void 0?void 0:a.height,t.applyFilter(this,i,n,o)},Object.defineProperty(e.prototype,"texture",{get:function(){return this.uniforms.uLightmap},set:function(t){this.uniforms.uLightmap=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"color",{get:function(){return this._color},set:function(t){var i=this.uniforms.ambientColor;typeof t=="number"?(Rt(t,i),this._color=t):(i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],this._color=ie(i))},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"alpha",{get:function(){return this.uniforms.ambientColor[3]},set:function(t){this.uniforms.ambientColor[3]=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-tilt-shift - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-tilt-shift is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var va=function(r,e){return va=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},va(r,e)};function to(r,e){va(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var wb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ab=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float blur;
uniform float gradientBlur;
uniform vec2 start;
uniform vec2 end;
uniform vec2 delta;
uniform vec2 texSize;

float random(vec3 scale, float seed)
{
    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);
}

void main(void)
{
    vec4 color = vec4(0.0);
    float total = 0.0;

    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);
    vec2 normal = normalize(vec2(start.y - end.y, end.x - start.x));
    float radius = smoothstep(0.0, 1.0, abs(dot(vTextureCoord * texSize - start, normal)) / gradientBlur) * blur;

    for (float t = -30.0; t <= 30.0; t++)
    {
        float percent = (t + offset - 0.5) / 30.0;
        float weight = 1.0 - abs(percent);
        vec4 sample = texture2D(uSampler, vTextureCoord + delta / texSize * percent * radius);
        sample.rgb *= sample.a;
        color += sample * weight;
        total += weight;
    }

    color /= total;
    color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`,Jc=function(r){to(e,r);function e(t,i,n,o){t===void 0&&(t=100),i===void 0&&(i=600);var s=r.call(this,wb,Ab)||this;return s.uniforms.blur=t,s.uniforms.gradientBlur=i,s.uniforms.start=n||new Y(0,window.innerHeight/2),s.uniforms.end=o||new Y(600,window.innerHeight/2),s.uniforms.delta=new Y(30,30),s.uniforms.texSize=new Y(window.innerWidth,window.innerHeight),s.updateDelta(),s}return e.prototype.updateDelta=function(){this.uniforms.delta.x=0,this.uniforms.delta.y=0},Object.defineProperty(e.prototype,"blur",{get:function(){return this.uniforms.blur},set:function(t){this.uniforms.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.uniforms.gradientBlur},set:function(t){this.uniforms.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.uniforms.start},set:function(t){this.uniforms.start=t,this.updateDelta()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.uniforms.end},set:function(t){this.uniforms.end=t,this.updateDelta()},enumerable:!1,configurable:!0}),e}(z),Pb=function(r){to(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,i=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(t*t+i*i);this.uniforms.delta.x=t/n,this.uniforms.delta.y=i/n},e}(Jc),Ib=function(r){to(e,r);function e(){return r!==null&&r.apply(this,arguments)||this}return e.prototype.updateDelta=function(){var t=this.uniforms.end.x-this.uniforms.start.x,i=this.uniforms.end.y-this.uniforms.start.y,n=Math.sqrt(t*t+i*i);this.uniforms.delta.x=-i/n,this.uniforms.delta.y=t/n},e}(Jc);(function(r){to(e,r);function e(t,i,n,o){t===void 0&&(t=100),i===void 0&&(i=600);var s=r.call(this)||this;return s.tiltShiftXFilter=new Pb(t,i,n,o),s.tiltShiftYFilter=new Ib(t,i,n,o),s}return e.prototype.apply=function(t,i,n,o){var s=t.getFilterTexture();this.tiltShiftXFilter.apply(t,i,s,1),this.tiltShiftYFilter.apply(t,s,n,o),t.returnFilterTexture(s)},Object.defineProperty(e.prototype,"blur",{get:function(){return this.tiltShiftXFilter.blur},set:function(t){this.tiltShiftXFilter.blur=this.tiltShiftYFilter.blur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"gradientBlur",{get:function(){return this.tiltShiftXFilter.gradientBlur},set:function(t){this.tiltShiftXFilter.gradientBlur=this.tiltShiftYFilter.gradientBlur=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"start",{get:function(){return this.tiltShiftXFilter.start},set:function(t){this.tiltShiftXFilter.start=this.tiltShiftYFilter.start=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"end",{get:function(){return this.tiltShiftXFilter.end},set:function(t){this.tiltShiftXFilter.end=this.tiltShiftYFilter.end=t},enumerable:!1,configurable:!0}),e})(z);/*!
 * @pixi/filter-twist - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-twist is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var _a=function(r,e){return _a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},_a(r,e)};function Rb(r,e){_a(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var Sb=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Ob=`varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float radius;
uniform float angle;
uniform vec2 offset;
uniform vec4 filterArea;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

vec2 twist(vec2 coord)
{
    coord -= offset;

    float dist = length(coord);

    if (dist < radius)
    {
        float ratioDist = (radius - dist) / radius;
        float angleMod = ratioDist * ratioDist * angle;
        float s = sin(angleMod);
        float c = cos(angleMod);
        coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);
    }

    coord += offset;

    return coord;
}

void main(void)
{

    vec2 coord = mapCoord(vTextureCoord);

    coord = twist(coord);

    coord = unmapCoord(coord);

    gl_FragColor = texture2D(uSampler, coord );

}
`;(function(r){Rb(e,r);function e(t){var i=r.call(this,Sb,Ob)||this;return Object.assign(i,e.defaults,t),i}return Object.defineProperty(e.prototype,"offset",{get:function(){return this.uniforms.offset},set:function(t){this.uniforms.offset=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.radius},set:function(t){this.uniforms.radius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"angle",{get:function(){return this.uniforms.angle},set:function(t){this.uniforms.angle=t},enumerable:!1,configurable:!0}),e.defaults={radius:200,angle:4,padding:20,offset:new Y},e})(z);/*!
 * @pixi/filter-zoom-blur - v4.1.5
 * Compiled Wed, 29 Sep 2021 14:05:57 UTC
 *
 * @pixi/filter-zoom-blur is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 *//*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var ma=function(r,e){return ma=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,i){t.__proto__=i}||function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])},ma(r,e)};function Nb(r,e){ma(r,e);function t(){this.constructor=r}r.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}function Fb(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,i=Object.getOwnPropertySymbols(r);n<i.length;n++)e.indexOf(i[n])<0&&Object.prototype.propertyIsEnumerable.call(r,i[n])&&(t[i[n]]=r[i[n]]);return t}var Ub=`attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`,Lb=`varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

uniform vec2 uCenter;
uniform float uStrength;
uniform float uInnerRadius;
uniform float uRadius;

const float MAX_KERNEL_SIZE = \${maxKernelSize};

// author: http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
highp float rand(vec2 co, float seed) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(co + seed, vec2(a, b)), sn = mod(dt, 3.14159);
    return fract(sin(sn) * c + seed);
}

void main() {

    float minGradient = uInnerRadius * 0.3;
    float innerRadius = (uInnerRadius + minGradient * 0.5) / filterArea.x;

    float gradient = uRadius * 0.3;
    float radius = (uRadius - gradient * 0.5) / filterArea.x;

    float countLimit = MAX_KERNEL_SIZE;

    vec2 dir = vec2(uCenter.xy / filterArea.xy - vTextureCoord);
    float dist = length(vec2(dir.x, dir.y * filterArea.y / filterArea.x));

    float strength = uStrength;

    float delta = 0.0;
    float gap;
    if (dist < innerRadius) {
        delta = innerRadius - dist;
        gap = minGradient;
    } else if (radius >= 0.0 && dist > radius) { // radius < 0 means it's infinity
        delta = dist - radius;
        gap = gradient;
    }

    if (delta > 0.0) {
        float normalCount = gap / filterArea.x;
        delta = (normalCount - delta) / normalCount;
        countLimit *= delta;
        strength *= delta;
        if (countLimit < 1.0)
        {
            gl_FragColor = texture2D(uSampler, vTextureCoord);
            return;
        }
    }

    // randomize the lookup values to hide the fixed number of samples
    float offset = rand(vTextureCoord, 0.0);

    float total = 0.0;
    vec4 color = vec4(0.0);

    dir *= strength;

    for (float t = 0.0; t < MAX_KERNEL_SIZE; t++) {
        float percent = (t + offset) / MAX_KERNEL_SIZE;
        float weight = 4.0 * (percent - percent * percent);
        vec2 p = vTextureCoord + dir * percent;
        vec4 sample = texture2D(uSampler, p);

        // switch to pre-multiplied alpha to correctly blur transparent images
        // sample.rgb *= sample.a;

        color += sample * weight;
        total += weight;

        if (t > countLimit){
            break;
        }
    }

    color /= total;
    // switch back from pre-multiplied alpha
    // color.rgb /= color.a + 0.00001;

    gl_FragColor = color;
}
`;(function(r){Nb(e,r);function e(t){var i=this,n=Object.assign(e.defaults,t),o=n.maxKernelSize,s=Fb(n,["maxKernelSize"]);return i=r.call(this,Ub,Lb.replace("${maxKernelSize}",o.toFixed(1)))||this,Object.assign(i,s),i}return Object.defineProperty(e.prototype,"center",{get:function(){return this.uniforms.uCenter},set:function(t){this.uniforms.uCenter=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"strength",{get:function(){return this.uniforms.uStrength},set:function(t){this.uniforms.uStrength=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"innerRadius",{get:function(){return this.uniforms.uInnerRadius},set:function(t){this.uniforms.uInnerRadius=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"radius",{get:function(){return this.uniforms.uRadius},set:function(t){(t<0||t===1/0)&&(t=-1),this.uniforms.uRadius=t},enumerable:!1,configurable:!0}),e.defaults={strength:.1,center:[0,0],innerRadius:0,radius:-1,maxKernelSize:32},e})(z);function Ae(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Qc(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wt={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qr={duration:.5,overwrite:!1,delay:0},vu,Jt=1e8,nt=1/Jt,ga=Math.PI*2,Mb=ga/4,Bb=0,td=Math.sqrt,Gb=Math.cos,Db=Math.sin,St=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},Be=function(e){return typeof e=="number"},_u=function(e){return typeof e=="undefined"},Ge=function(e){return typeof e=="object"},kt=function(e){return e!==!1},ed=function(){return typeof window!="undefined"},Tn=function(e){return Pt(e)||St(e)},rd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dt=Array.isArray,ya=/(?:-?\.?\d|\.)+/gi,id=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Br=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Fo=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nd=/[+-]=-?[.\d]+/,od=/[^,'"\[\]\s]+/gi,kb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,_e,xa,mu,Yt={},Mn={},sd,ad=function(e){return(Mn=Pr(e,Yt))&&de},gu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Bn=function(e,t){return!t&&console.warn(e)},ud=function(e,t){return e&&(Yt[e]=t)&&Mn&&(Mn[e]=t)||Yt},Bi=function(){return 0},yu={},$e=[],ba={},hd,jt={},Uo={},kl=30,Pn=[],xu="",bu=function(e){var t=e[0],i,n;if(Ge(t)||Pt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Pn.length;n--&&!Pn[n].targetTest(t););i=Pn[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Od(e[n],i)))||e.splice(n,1);return e},Tr=function(e){return e._gsap||bu(Qt(e))[0]._gsap},ld=function(e,t,i){return(i=e[t])&&Pt(i)?e[t]():_u(i)&&e.getAttribute&&e.getAttribute(t)||i},zt=function(e,t){return(e=e.split(",")).forEach(t)||e},gt=function(e){return Math.round(e*1e5)/1e5||0},Bt=function(e){return Math.round(e*1e7)/1e7||0},kr=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},zb=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},Gn=function(){var e=$e.length,t=$e.slice(0),i,n;for(ba={},$e.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},fd=function(e,t,i,n){$e.length&&Gn(),e.render(t,i,n),$e.length&&Gn()},cd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(od).length<2?t:St(e)?e.trim():e},dd=function(e){return e},oe=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Xb=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Pr=function(e,t){for(var i in t)e[i]=t[i];return e},zl=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ge(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},Dn=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},gi=function(e){var t=e.parent||lt,i=e.keyframes?Xb(Dt(e.keyframes)):oe;if(kt(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},jb=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},pd=function(e,t,i,n,o){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=e[n],a;if(o)for(a=t[o];s&&s[o]>a;)s=s._prev;return s?(t._next=s._next,s._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=s,t.parent=t._dp=e,t},eo=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=t._prev,s=t._next;o?o._next=s:e[i]===t&&(e[i]=s),s?s._prev=o:e[n]===t&&(e[n]=o),t._next=t._prev=t.parent=null},Fe=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Cr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},Hb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Vb=function r(e){return!e||e._ts&&r(e.parent)},Xl=function(e){return e._repeat?Kr(e._tTime,e=e.duration()+e._rDelay)*e:0},Kr=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},kn=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ro=function(e){return e._end=Bt(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},Tu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Bt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ro(e),i._dirty||Cr(i,e)),e},vd=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=kn(e.rawTime(),t),(!t._dur||qi(0,t.totalDuration(),i)-t._tTime>nt)&&t.render(i,!0)),Cr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-nt}},ye=function(e,t,i,n){return t.parent&&Fe(t),t._start=Bt((Be(i)?i:i||e!==lt?$t(e,i,t):e._time)+t._delay),t._end=Bt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),pd(e,t,"_first","_last",e._sort?"_start":0),Ta(t)||(e._recent=t),n||vd(e,t),e},_d=function(e,t){return(Yt.ScrollTrigger||gu("scrollTrigger",t))&&Yt.ScrollTrigger.create(t,e)},md=function(e,t,i,n){if(Eu(e,t),!e._initted)return 1;if(!i&&e._pt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&hd!==Ht.frame)return $e.push(e),e._lazy=[t,n],1},Wb=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ta=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Yb=function(e,t,i,n){var o=e.ratio,s=t<0||!t&&(!e._start&&Wb(e)&&!(!e._initted&&Ta(e))||(e._ts<0||e._dp._ts<0)&&!Ta(e))?0:1,a=e._rDelay,u=0,h,l,c;if(a&&e._repeat&&(u=qi(0,e._tDur,t),l=Kr(u,a),e._yoyo&&l&1&&(s=1-s),l!==Kr(e._tTime,a)&&(o=1-s,e.vars.repeatRefresh&&e._initted&&e.invalidate())),s!==o||n||e._zTime===nt||!t&&e._zTime){if(!e._initted&&md(e,t,n,i))return;for(c=e._zTime,e._zTime=t||(i?nt:0),i||(i=t&&!c),e.ratio=s,e._from&&(s=1-s),e._time=0,e._tTime=u,h=e._pt;h;)h.r(s,h.d),h=h._next;e._startAt&&t<0&&e._startAt.render(t,!0,!0),e._onUpdate&&!i&&te(e,"onUpdate"),u&&e._repeat&&!i&&e.parent&&te(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===s&&(s&&Fe(e,1),i||(te(e,s?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},$b=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},Zr=function(e,t,i,n){var o=e._repeat,s=Bt(t)||0,a=e._tTime/e._tDur;return a&&!n&&(e._time*=s/e._dur),e._dur=s,e._tDur=o?o<0?1e10:Bt(s*(o+1)+e._rDelay*o):s,a>0&&!n?Tu(e,e._tTime=e._tDur*a):e.parent&&ro(e),i||Cr(e.parent,e),e},jl=function(e){return e instanceof Ft?Cr(e):Zr(e,e._dur)},qb={_start:0,endTime:Bi,totalDuration:Bi},$t=function r(e,t,i){var n=e.labels,o=e._recent||qb,s=e.duration()>=Jt?o.endTime(!1):e._dur,a,u,h;return St(t)&&(isNaN(t)||t in n)?(u=t.charAt(0),h=t.substr(-1)==="%",a=t.indexOf("="),u==="<"||u===">"?(a>=0&&(t=t.replace(/=/,"")),(u==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(a<0?o:i).totalDuration()/100:1)):a<0?(t in n||(n[t]=s),n[t]):(u=parseFloat(t.charAt(a-1)+t.substr(a+1)),h&&i&&(u=u/100*(Dt(i)?i[0]:i).totalDuration()),a>1?r(e,t.substr(0,a-1),i)+u:s+u)):t==null?s:+t},yi=function(e,t,i){var n=Be(t[1]),o=(n?2:1)+(e<2?0:1),s=t[o],a,u;if(n&&(s.duration=t[1]),s.parent=i,e){for(a=s,u=i;u&&!("immediateRender"in a);)a=u.vars.defaults||{},u=kt(u.vars.inherit)&&u.parent;s.immediateRender=kt(a.immediateRender),e<2?s.runBackwards=1:s.startAt=t[o-1]}return new wt(t[0],s,t[o+1])},ir=function(e,t){return e||e===0?t(e):t},qi=function(e,t,i){return i<e?e:i>t?t:i},Gt=function(e,t){return!St(e)||!(t=kb.exec(e))?"":t[1]},Kb=function(e,t,i){return ir(i,function(n){return qi(e,t,n)})},Ca=[].slice,gd=function(e,t){return e&&Ge(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ge(e[0]))&&!e.nodeType&&e!==_e},Zb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var o;return St(n)&&!t||gd(n,1)?(o=i).push.apply(o,Qt(n)):i.push(n)})||i},Qt=function(e,t,i){return St(e)&&!i&&(xa||!Jr())?Ca.call((t||mu).querySelectorAll(e),0):Dt(e)?Zb(e,i):gd(e)?Ca.call(e,0):e?[e]:[]},Jb=function(e){return e=Qt(e)[0]||Bn("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Qt(t,i.querySelectorAll?i:i===e?Bn("Invalid scope")||mu.createElement("div"):e)}},yd=function(e){return e.sort(function(){return .5-Math.random()})},xd=function(e){if(Pt(e))return e;var t=Ge(e)?e:{each:e},i=Er(t.ease),n=t.from||0,o=parseFloat(t.base)||0,s={},a=n>0&&n<1,u=isNaN(n)||a,h=t.axis,l=n,c=n;return St(n)?l=c={center:.5,edges:.5,end:1}[n]||0:!a&&u&&(l=n[0],c=n[1]),function(f,d,v){var p=(v||t).length,_=s[p],m,y,b,C,x,g,E,w,T;if(!_){if(T=t.grid==="auto"?0:(t.grid||[1,Jt])[1],!T){for(E=-Jt;E<(E=v[T++].getBoundingClientRect().left)&&T<p;);T--}for(_=s[p]=[],m=u?Math.min(T,p)*l-.5:n%T,y=T===Jt?0:u?p*c/T-.5:n/T|0,E=0,w=Jt,g=0;g<p;g++)b=g%T-m,C=y-(g/T|0),_[g]=x=h?Math.abs(h==="y"?C:b):td(b*b+C*C),x>E&&(E=x),x<w&&(w=x);n==="random"&&yd(_),_.max=E-w,_.min=w,_.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(T>p?p-1:h?h==="y"?p/T:T:Math.max(T,p/T))||0)*(n==="edges"?-1:1),_.b=p<0?o-p:o,_.u=Gt(t.amount||t.each)||0,i=i&&p<0?Id(i):i}return p=(_[f]-_.min)/_.max||0,Bt(_.b+(i?i(p):p)*_.v)+_.u}},Ea=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=Math.round(parseFloat(i)/e)*e*t;return(n-n%1)/t+(Be(i)?0:Gt(i))}},bd=function(e,t){var i=Dt(e),n,o;return!i&&Ge(e)&&(n=i=e.radius||Jt,e.values?(e=Qt(e.values),(o=!Be(e[0]))&&(n*=n)):e=Ea(e.increment)),ir(t,i?Pt(e)?function(s){return o=e(s),Math.abs(o-s)<=n?o:s}:function(s){for(var a=parseFloat(o?s.x:s),u=parseFloat(o?s.y:0),h=Jt,l=0,c=e.length,f,d;c--;)o?(f=e[c].x-a,d=e[c].y-u,f=f*f+d*d):f=Math.abs(e[c]-a),f<h&&(h=f,l=c);return l=!n||h<=n?e[l]:s,o||l===s||Be(s)?l:l+Gt(s)}:Ea(e))},Td=function(e,t,i,n){return ir(Dt(e)?!t:i===!0?!!(i=0):!n,function(){return Dt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},Qb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(o,s){return s(o)},n)}},tT=function(e,t){return function(i){return e(parseFloat(i))+(t||Gt(i))}},eT=function(e,t,i){return Ed(e,t,0,1,i)},Cd=function(e,t,i){return ir(i,function(n){return e[~~t(n)]})},rT=function r(e,t,i){var n=t-e;return Dt(e)?Cd(e,r(0,e.length),t):ir(i,function(o){return(n+(o-e)%n)%n+e})},iT=function r(e,t,i){var n=t-e,o=n*2;return Dt(e)?Cd(e,r(0,e.length-1),t):ir(i,function(s){return s=(o+(s-e)%o)%o||0,e+(s>n?o-s:s)})},Gi=function(e){for(var t=0,i="",n,o,s,a;~(n=e.indexOf("random(",t));)s=e.indexOf(")",n),a=e.charAt(n+7)==="[",o=e.substr(n+7,s-n-7).match(a?od:ya),i+=e.substr(t,n-t)+Td(a?o:+o[0],a?0:+o[1],+o[2]||1e-5),t=s+1;return i+e.substr(t,e.length-t)},Ed=function(e,t,i,n,o){var s=t-e,a=n-i;return ir(o,function(u){return i+((u-e)/s*a||0)})},nT=function r(e,t,i,n){var o=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!o){var s=St(e),a={},u,h,l,c,f;if(i===!0&&(n=1)&&(i=null),s)e={p:e},t={p:t};else if(Dt(e)&&!Dt(t)){for(l=[],c=e.length,f=c-2,h=1;h<c;h++)l.push(r(e[h-1],e[h]));c--,o=function(v){v*=c;var p=Math.min(f,~~v);return l[p](v-p)},i=t}else n||(e=Pr(Dt(e)?[]:{},e));if(!l){for(u in t)Cu.call(a,e,u,"get",t[u]);o=function(v){return Pu(v,a)||(s?e.p:e)}}}return ir(i,o)},Hl=function(e,t,i){var n=e.labels,o=Jt,s,a,u;for(s in n)a=n[s]-t,a<0==!!i&&a&&o>(a=Math.abs(a))&&(u=s,o=a);return u},te=function(e,t,i){var n=e.vars,o=n[t],s,a;if(!!o)return s=n[t+"Params"],a=n.callbackScope||e,i&&$e.length&&Gn(),s?o.apply(a,s):o.call(a)},pi=function(e){return Fe(e),e.scrollTrigger&&e.scrollTrigger.kill(!1),e.progress()<1&&te(e,"onInterrupt"),e},Gr,oT=function(e){e=!e.name&&e.default||e;var t=e.name,i=Pt(e),n=t&&!i&&e.init?function(){this._props=[]}:e,o={init:Bi,render:Pu,add:Cu,kill:bT,modifier:xT,rawVars:0},s={targetTest:0,get:0,getSetter:Au,aliases:{},register:0};if(Jr(),e!==n){if(jt[t])return;oe(n,oe(Dn(e,o),s)),Pr(n.prototype,Pr(o,Dn(e,s))),jt[n.prop=t]=n,e.targetTest&&(Pn.push(n),yu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}ud(t,n),e.register&&e.register(de,n,Xt)},it=255,vi={aqua:[0,it,it],lime:[0,it,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,it],navy:[0,0,128],white:[it,it,it],olive:[128,128,0],yellow:[it,it,0],orange:[it,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[it,0,0],pink:[it,192,203],cyan:[0,it,it],transparent:[it,it,it,0]},Lo=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*it+.5|0},wd=function(e,t,i){var n=e?Be(e)?[e>>16,e>>8&it,e&it]:0:vi.black,o,s,a,u,h,l,c,f,d,v;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),vi[e])n=vi[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),s=e.charAt(2),a=e.charAt(3),e="#"+o+o+s+s+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&it,n&it,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&it,e&it]}else if(e.substr(0,3)==="hsl"){if(n=v=e.match(ya),!t)u=+n[0]%360/360,h=+n[1]/100,l=+n[2]/100,s=l<=.5?l*(h+1):l+h-l*h,o=l*2-s,n.length>3&&(n[3]*=1),n[0]=Lo(u+1/3,o,s),n[1]=Lo(u,o,s),n[2]=Lo(u-1/3,o,s);else if(~e.indexOf("="))return n=e.match(id),i&&n.length<4&&(n[3]=1),n}else n=e.match(ya)||vi.transparent;n=n.map(Number)}return t&&!v&&(o=n[0]/it,s=n[1]/it,a=n[2]/it,c=Math.max(o,s,a),f=Math.min(o,s,a),l=(c+f)/2,c===f?u=h=0:(d=c-f,h=l>.5?d/(2-c-f):d/(c+f),u=c===o?(s-a)/d+(s<a?6:0):c===s?(a-o)/d+2:(o-s)/d+4,u*=60),n[0]=~~(u+.5),n[1]=~~(h*100+.5),n[2]=~~(l*100+.5)),i&&n.length<4&&(n[3]=1),n},Ad=function(e){var t=[],i=[],n=-1;return e.split(qe).forEach(function(o){var s=o.match(Br)||[];t.push.apply(t,s),i.push(n+=s.length+1)}),t.c=i,t},Vl=function(e,t,i){var n="",o=(e+n).match(qe),s=t?"hsla(":"rgba(",a=0,u,h,l,c;if(!o)return e;if(o=o.map(function(f){return(f=wd(f,t,1))&&s+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),i&&(l=Ad(e),u=i.c,u.join(n)!==l.c.join(n)))for(h=e.replace(qe,"1").split(Br),c=h.length-1;a<c;a++)n+=h[a]+(~u.indexOf(a)?o.shift()||s+"0,0,0,0)":(l.length?l:o.length?o:i).shift());if(!h)for(h=e.split(qe),c=h.length-1;a<c;a++)n+=h[a]+o[a];return n+h[c]},qe=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in vi)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),sT=/hsl[a]?\(/,Pd=function(e){var t=e.join(" "),i;if(qe.lastIndex=0,qe.test(t))return i=sT.test(t),e[1]=Vl(e[1],i),e[0]=Vl(e[0],i,Ad(e[1])),!0},Di,Ht=function(){var r=Date.now,e=500,t=33,i=r(),n=i,o=1e3/240,s=o,a=[],u,h,l,c,f,d,v=function p(_){var m=r()-n,y=_===!0,b,C,x,g;if(m>e&&(i+=m-t),n+=m,x=n-i,b=x-s,(b>0||y)&&(g=++c.frame,f=x-c.time*1e3,c.time=x=x/1e3,s+=b+(b>=o?4:o-b),C=1),y||(u=h(p)),C)for(d=0;d<a.length;d++)a[d](x,f,g,_)};return c={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){sd&&(!xa&&ed()&&(_e=xa=window,mu=_e.document||{},Yt.gsap=de,(_e.gsapVersions||(_e.gsapVersions=[])).push(de.version),ad(Mn||_e.GreenSockGlobals||!_e.gsap&&_e||{}),l=_e.requestAnimationFrame),u&&c.sleep(),h=l||function(_){return setTimeout(_,s-c.time*1e3+1|0)},Di=1,v(2))},sleep:function(){(l?_e.cancelAnimationFrame:clearTimeout)(u),Di=0,h=Bi},lagSmoothing:function(_,m){e=_||1/nt,t=Math.min(m,e,0)},fps:function(_){o=1e3/(_||240),s=c.time*1e3+o},add:function(_,m,y){var b=m?function(C,x,g,E){_(C,x,g,E),c.remove(b)}:_;return c.remove(_),a[y?"unshift":"push"](b),Jr(),b},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},c}(),Jr=function(){return!Di&&Ht.wake()},Z={},aT=/^[\d.\-M][\d.\-,\s]/,uT=/["']/g,hT=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],o=1,s=i.length,a,u,h;o<s;o++)u=i[o],a=o!==s-1?u.lastIndexOf(","):u.length,h=u.substr(0,a),t[n]=isNaN(h)?h.replace(uT,"").trim():+h,n=u.substr(a+1).trim();return t},lT=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},fT=function(e){var t=(e+"").split("("),i=Z[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[hT(t[1])]:lT(e).split(",").map(cd)):Z._CE&&aT.test(e)?Z._CE("",e):i},Id=function(e){return function(t){return 1-e(1-t)}},Rd=function r(e,t){for(var i=e._first,n;i;)i instanceof Ft?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},Er=function(e,t){return e&&(Pt(e)?e:Z[e]||fT(e))||t},Rr=function(e,t,i,n){i===void 0&&(i=function(u){return 1-t(1-u)}),n===void 0&&(n=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var o={easeIn:t,easeOut:i,easeInOut:n},s;return zt(e,function(a){Z[a]=Yt[a]=o,Z[s=a.toLowerCase()]=i;for(var u in o)Z[s+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=Z[a+"."+u]=o[u]}),o},Sd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Mo=function r(e,t,i){var n=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),s=o/ga*(Math.asin(1/n)||0),a=function(l){return l===1?1:n*Math.pow(2,-10*l)*Db((l-s)*o)+1},u=e==="out"?a:e==="in"?function(h){return 1-a(1-h)}:Sd(a);return o=ga/o,u.config=function(h,l){return r(e,h,l)},u},Bo=function r(e,t){t===void 0&&(t=1.70158);var i=function(s){return s?--s*s*((t+1)*s+t)+1:0},n=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:Sd(i);return n.config=function(o){return r(e,o)},n};zt("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Rr(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Z.Linear.easeNone=Z.none=Z.Linear.easeIn;Rr("Elastic",Mo("in"),Mo("out"),Mo());(function(r,e){var t=1/e,i=2*t,n=2.5*t,o=function(a){return a<t?r*a*a:a<i?r*Math.pow(a-1.5/e,2)+.75:a<n?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Rr("Bounce",function(s){return 1-o(1-s)},o)})(7.5625,2.75);Rr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Rr("Circ",function(r){return-(td(1-r*r)-1)});Rr("Sine",function(r){return r===1?1:-Gb(r*Mb)+1});Rr("Back",Bo("in"),Bo("out"),Bo());Z.SteppedEase=Z.steps=Yt.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),o=t?1:0,s=1-nt;return function(a){return((n*qi(0,s,a)|0)+o)*i}}};qr.ease=Z["quad.out"];zt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return xu+=r+","+r+"Params,"});var Od=function(e,t){this.id=Bb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ld,this.set=t?t.getSetter:Au},ki=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Zr(this,+t.duration,1,1),this.data=t.data,Di||Ht.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Zr(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(Jr(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Tu(this,i),!o._dp||o.parent||vd(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ye(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===nt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),fd(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Xl(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Xl(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,n){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,n):this._repeat?Kr(this._tTime,o)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?kn(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-nt?0:this._rts,this.totalTime(qi(-this._delay,this._tDur,n),!0),ro(this),Hb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Jr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ye(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(kt(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?kn(n.rawTime(i),this):this._tTime:this._tTime},e.globalTime=function(i){for(var n=this,o=arguments.length?i:n.rawTime();n;)o=n._start+o/(n._ts||1),n=n._dp;return o},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,jl(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,jl(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime($t(this,i),kt(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,kt(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=n&&o<this.endTime(!0)-nt)},e.eventCallback=function(i,n,o){var s=this.vars;return arguments.length>1?(n?(s[i]=n,o&&(s[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=n)):delete s[i],this):s[i]},e.then=function(i){var n=this;return new Promise(function(o){var s=Pt(i)?i:dd,a=function(){var h=n.then;n.then=null,Pt(s)&&(s=s(n))&&(s.then||s===n)&&(n.then=h),o(s),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?a():n._prom=a})},e.kill=function(){pi(this)},r}();oe(ki.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var Ft=function(r){Qc(e,r);function e(i,n){var o;return i===void 0&&(i={}),o=r.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=kt(i.sortChildren),lt&&ye(i.parent||lt,Ae(o),n),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&_d(Ae(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(n,o,s){return yi(0,arguments,this),this},t.from=function(n,o,s){return yi(1,arguments,this),this},t.fromTo=function(n,o,s,a){return yi(2,arguments,this),this},t.set=function(n,o,s){return o.duration=0,o.parent=this,gi(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new wt(n,o,$t(this,s),1),this},t.call=function(n,o,s){return ye(this,wt.delayedCall(0,n,o),s)},t.staggerTo=function(n,o,s,a,u,h,l){return s.duration=o,s.stagger=s.stagger||a,s.onComplete=h,s.onCompleteParams=l,s.parent=this,new wt(n,s,$t(this,u)),this},t.staggerFrom=function(n,o,s,a,u,h,l){return s.runBackwards=1,gi(s).immediateRender=kt(s.immediateRender),this.staggerTo(n,o,s,a,u,h,l)},t.staggerFromTo=function(n,o,s,a,u,h,l,c){return a.startAt=s,gi(a).immediateRender=kt(a.immediateRender),this.staggerTo(n,o,a,u,h,l,c)},t.render=function(n,o,s){var a=this._time,u=this._dirty?this.totalDuration():this._tDur,h=this._dur,l=n<=0?0:Bt(n),c=this._zTime<0!=n<0&&(this._initted||!h),f,d,v,p,_,m,y,b,C,x,g,E;if(this!==lt&&l>u&&n>=0&&(l=u),l!==this._tTime||s||c){if(a!==this._time&&h&&(l+=this._time-a,n+=this._time-a),f=l,C=this._start,b=this._ts,m=!b,c&&(h||(a=this._zTime),(n||!o)&&(this._zTime=n)),this._repeat){if(g=this._yoyo,_=h+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,o,s);if(f=Bt(l%_),l===u?(p=this._repeat,f=h):(p=~~(l/_),p&&p===l/_&&(f=h,p--),f>h&&(f=h)),x=Kr(this._tTime,_),!a&&this._tTime&&x!==p&&(x=p),g&&p&1&&(f=h-f,E=1),p!==x&&!this._lock){var w=g&&x&1,T=w===(g&&p&1);if(p<x&&(w=!w),a=w?0:h,this._lock=1,this.render(a||(E?0:Bt(p*_)),o,!h)._lock=0,this._tTime=l,!o&&this.parent&&te(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,u=this._tDur,T&&(this._lock=2,a=w?h:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;Rd(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=$b(this,Bt(a),Bt(f)),y&&(l-=f-(f=y._start))),this._tTime=l,this._time=f,this._act=!b,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,a=0),!a&&f&&!o&&(te(this,"onStart"),this._tTime!==l))return this;if(f>=a&&n>=0)for(d=this._first;d;){if(v=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,o,s);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,o,s),f!==this._time||!this._ts&&!m){y=0,v&&(l+=this._zTime=-nt);break}}d=v}else{d=this._last;for(var A=n<0?n:f;d;){if(v=d._prev,(d._act||A<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(n,o,s);if(d.render(d._ts>0?(A-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(A-d._start)*d._ts,o,s),f!==this._time||!this._ts&&!m){y=0,v&&(l+=this._zTime=A?-nt:nt);break}}d=v}}if(y&&!o&&(this.pause(),y.render(f>=a?0:-nt)._zTime=f>=a?1:-1,this._ts))return this._start=C,ro(this),this.render(n,o,s);this._onUpdate&&!o&&te(this,"onUpdate",!0),(l===u&&this._tTime>=this.totalDuration()||!l&&a)&&(C===this._start||Math.abs(b)!==Math.abs(this._ts))&&(this._lock||((n||!h)&&(l===u&&this._ts>0||!l&&this._ts<0)&&Fe(this,1),!o&&!(n<0&&!a)&&(l||a||!u)&&(te(this,l===u&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(l<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,o){var s=this;if(Be(o)||(o=$t(this,o,n)),!(n instanceof ki)){if(Dt(n))return n.forEach(function(a){return s.add(a,o)}),this;if(St(n))return this.addLabel(n,o);if(Pt(n))n=wt.delayedCall(0,n);else return this}return this!==n?ye(this,n,o):this},t.getChildren=function(n,o,s,a){n===void 0&&(n=!0),o===void 0&&(o=!0),s===void 0&&(s=!0),a===void 0&&(a=-Jt);for(var u=[],h=this._first;h;)h._start>=a&&(h instanceof wt?o&&u.push(h):(s&&u.push(h),n&&u.push.apply(u,h.getChildren(!0,o,s)))),h=h._next;return u},t.getById=function(n){for(var o=this.getChildren(1,1,1),s=o.length;s--;)if(o[s].vars.id===n)return o[s]},t.remove=function(n){return St(n)?this.removeLabel(n):Pt(n)?this.killTweensOf(n):(eo(this,n),n===this._recent&&(this._recent=this._last),Cr(this))},t.totalTime=function(n,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Bt(Ht.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,o),this._forcing=0,this):this._tTime},t.addLabel=function(n,o){return this.labels[n]=$t(this,o),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,o,s){var a=wt.delayedCall(0,o||Bi,s);return a.data="isPause",this._hasPause=1,ye(this,a,$t(this,n))},t.removePause=function(n){var o=this._first;for(n=$t(this,n);o;)o._start===n&&o.data==="isPause"&&Fe(o),o=o._next},t.killTweensOf=function(n,o,s){for(var a=this.getTweensOf(n,s),u=a.length;u--;)Xe!==a[u]&&a[u].kill(n,o);return this},t.getTweensOf=function(n,o){for(var s=[],a=Qt(n),u=this._first,h=Be(o),l;u;)u instanceof wt?zb(u._targets,a)&&(h?(!Xe||u._initted&&u._ts)&&u.globalTime(0)<=o&&u.globalTime(u.totalDuration())>o:!o||u.isActive())&&s.push(u):(l=u.getTweensOf(a,o)).length&&s.push.apply(s,l),u=u._next;return s},t.tweenTo=function(n,o){o=o||{};var s=this,a=$t(s,n),u=o,h=u.startAt,l=u.onStart,c=u.onStartParams,f=u.immediateRender,d,v=wt.to(s,oe({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:o.duration||Math.abs((a-(h&&"time"in h?h.time:s._time))/s.timeScale())||nt,onStart:function(){if(s.pause(),!d){var _=o.duration||Math.abs((a-(h&&"time"in h?h.time:s._time))/s.timeScale());v._dur!==_&&Zr(v,_,0,1).render(v._time,!0,!0),d=1}l&&l.apply(v,c||[])}},o));return f?v.render(0):v},t.tweenFromTo=function(n,o,s){return this.tweenTo(o,oe({startAt:{time:$t(this,n)}},s))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Hl(this,$t(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Hl(this,$t(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(n,o,s){s===void 0&&(s=0);for(var a=this._first,u=this.labels,h;a;)a._start>=s&&(a._start+=n,a._end+=n),a=a._next;if(o)for(h in u)u[h]>=s&&(u[h]+=n);return Cr(this)},t.invalidate=function(){var n=this._first;for(this._lock=0;n;)n.invalidate(),n=n._next;return r.prototype.invalidate.call(this)},t.clear=function(n){n===void 0&&(n=!0);for(var o=this._first,s;o;)s=o._next,this.remove(o),o=s;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Cr(this)},t.totalDuration=function(n){var o=0,s=this,a=s._last,u=Jt,h,l,c;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-n:n));if(s._dirty){for(c=s.parent;a;)h=a._prev,a._dirty&&a.totalDuration(),l=a._start,l>u&&s._sort&&a._ts&&!s._lock?(s._lock=1,ye(s,a,l-a._delay,1)._lock=0):u=l,l<0&&a._ts&&(o-=l,(!c&&!s._dp||c&&c.smoothChildTiming)&&(s._start+=l/s._ts,s._time-=l,s._tTime-=l),s.shiftChildren(-l,!1,-1/0),u=0),a._end>o&&a._ts&&(o=a._end),a=h;Zr(s,s===lt&&s._time>o?s._time:o,1,1),s._dirty=0}return s._tDur},e.updateRoot=function(n){if(lt._ts&&(fd(lt,kn(n,lt)),hd=Ht.frame),Ht.frame>=kl){kl+=Wt.autoSleep||120;var o=lt._first;if((!o||!o._ts)&&Wt.autoSleep&&Ht._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||Ht.sleep()}}},e}(ki);oe(Ft.prototype,{_lock:0,_hasPause:0,_forcing:0});var cT=function(e,t,i,n,o,s,a){var u=new Xt(this._pt,e,t,0,1,Bd,null,o),h=0,l=0,c,f,d,v,p,_,m,y;for(u.b=i,u.e=n,i+="",n+="",(m=~n.indexOf("random("))&&(n=Gi(n)),s&&(y=[i,n],s(y,e,t),i=y[0],n=y[1]),f=i.match(Fo)||[];c=Fo.exec(n);)v=c[0],p=n.substring(h,c.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),v!==f[l++]&&(_=parseFloat(f[l-1])||0,u._pt={_next:u._pt,p:p||l===1?p:",",s:_,c:v.charAt(1)==="="?kr(_,v)-_:parseFloat(v)-_,m:d&&d<4?Math.round:0},h=Fo.lastIndex);return u.c=h<n.length?n.substring(h,n.length):"",u.fp=a,(nd.test(n)||m)&&(u.e=0),this._pt=u,u},Cu=function(e,t,i,n,o,s,a,u,h){Pt(n)&&(n=n(o||0,e,s));var l=e[t],c=i!=="get"?i:Pt(l)?h?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():l,f=Pt(l)?h?mT:Ld:wu,d;if(St(n)&&(~n.indexOf("random(")&&(n=Gi(n)),n.charAt(1)==="="&&(d=kr(c,n)+(Gt(c)||0),(d||d===0)&&(n=d))),c!==n||wa)return!isNaN(c*n)&&n!==""?(d=new Xt(this._pt,e,t,+c||0,n-(c||0),typeof l=="boolean"?yT:Md,0,f),h&&(d.fp=h),a&&d.modifier(a,this,e),this._pt=d):(!l&&!(t in e)&&gu(t,n),cT.call(this,e,t,c,n,f,u||Wt.stringFilter,h))},dT=function(e,t,i,n,o){if(Pt(e)&&(e=xi(e,o,t,i,n)),!Ge(e)||e.style&&e.nodeType||Dt(e)||rd(e))return St(e)?xi(e,o,t,i,n):e;var s={},a;for(a in e)s[a]=xi(e[a],o,t,i,n);return s},Nd=function(e,t,i,n,o,s){var a,u,h,l;if(jt[e]&&(a=new jt[e]).init(o,a.rawVars?t[e]:dT(t[e],n,o,s,i),i,n,s)!==!1&&(i._pt=u=new Xt(i._pt,o,e,0,1,a.render,a,0,a.priority),i!==Gr))for(h=i._ptLookup[i._targets.indexOf(o)],l=a._props.length;l--;)h[a._props[l]]=u;return a},Xe,wa,Eu=function r(e,t){var i=e.vars,n=i.ease,o=i.startAt,s=i.immediateRender,a=i.lazy,u=i.onUpdate,h=i.onUpdateParams,l=i.callbackScope,c=i.runBackwards,f=i.yoyoEase,d=i.keyframes,v=i.autoRevert,p=e._dur,_=e._startAt,m=e._targets,y=e.parent,b=y&&y.data==="nested"?y.parent._targets:m,C=e._overwrite==="auto"&&!vu,x=e.timeline,g,E,w,T,A,O,N,F,D,S,I,M,V;if(x&&(!d||!n)&&(n="none"),e._ease=Er(n,qr.ease),e._yEase=f?Id(Er(f===!0?n:f,qr.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!x&&!!i.runBackwards,!x||d&&!i.stagger){if(F=m[0]?Tr(m[0]).harness:0,M=F&&i[F.prop],g=Dn(i,yu),_&&(Fe(_.render(-1,!0)),_._lazy=0),o)if(Fe(e._startAt=wt.set(m,oe({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:kt(a),startAt:null,delay:0,onUpdate:u,onUpdateParams:h,callbackScope:l,stagger:0},o))),t<0&&!s&&!v&&e._startAt.render(-1,!0),s){if(t>0&&!v&&(e._startAt=0),p&&t<=0){t&&(e._zTime=t);return}}else v===!1&&(e._startAt=0);else if(c&&p){if(_)!v&&(e._startAt=0);else if(t&&(s=!1),w=oe({overwrite:!1,data:"isFromStart",lazy:s&&kt(a),immediateRender:s,stagger:0,parent:y},g),M&&(w[F.prop]=M),Fe(e._startAt=wt.set(m,w)),t<0&&e._startAt.render(-1,!0),e._zTime=t,!s)r(e._startAt,nt);else if(!t)return}for(e._pt=e._ptCache=0,a=p&&kt(a)||a&&!p,E=0;E<m.length;E++){if(A=m[E],N=A._gsap||bu(m)[E]._gsap,e._ptLookup[E]=S={},ba[N.id]&&$e.length&&Gn(),I=b===m?E:b.indexOf(A),F&&(D=new F).init(A,M||g,e,I,b)!==!1&&(e._pt=T=new Xt(e._pt,A,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(Q){S[Q]=T}),D.priority&&(O=1)),!F||M)for(w in g)jt[w]&&(D=Nd(w,g,e,I,A,b))?D.priority&&(O=1):S[w]=T=Cu.call(e,A,w,"get",g[w],I,b,0,i.stringFilter);e._op&&e._op[E]&&e.kill(A,e._op[E]),C&&e._pt&&(Xe=e,lt.killTweensOf(A,S,e.globalTime(t)),V=!e.parent,Xe=0),e._pt&&a&&(ba[N.id]=1)}O&&Gd(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!V,d&&t<=0&&x.render(Jt,!0,!0)},pT=function(e,t,i,n,o,s,a){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,l,c;if(!u)for(u=e._ptCache[t]=[],l=e._ptLookup,c=e._targets.length;c--;){if(h=l[c][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t;)h=h._next;if(!h)return wa=1,e.vars[t]="+=0",Eu(e,a),wa=0,1;u.push(h)}for(c=u.length;c--;)h=u[c],h.s=(n||n===0)&&!o?n:h.s+(n||0)+s*h.c,h.c=i-h.s,h.e&&(h.e=gt(i)+Gt(h.e)),h.b&&(h.b=h.s+Gt(h.b))},vT=function(e,t){var i=e[0]?Tr(e[0]).harness:0,n=i&&i.aliases,o,s,a,u;if(!n)return t;o=Pr({},t);for(s in n)if(s in o)for(u=n[s].split(","),a=u.length;a--;)o[u[a]]=o[s];return o},_T=function(e,t,i,n){var o=t.ease||n||"power1.inOut",s,a;if(Dt(t))a=i[e]||(i[e]=[]),t.forEach(function(u,h){return a.push({t:h/(t.length-1)*100,v:u,e:o})});else for(s in t)a=i[s]||(i[s]=[]),s==="ease"||a.push({t:parseFloat(e),v:t[s],e:o})},xi=function(e,t,i,n,o){return Pt(e)?e.call(t,i,n,o):St(e)&&~e.indexOf("random(")?Gi(e):e},Fd=xu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ud={};zt(Fd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Ud[r]=1});var wt=function(r){Qc(e,r);function e(i,n,o,s){var a;typeof n=="number"&&(o.duration=n,n=o,o=null),a=r.call(this,s?n:gi(n))||this;var u=a.vars,h=u.duration,l=u.delay,c=u.immediateRender,f=u.stagger,d=u.overwrite,v=u.keyframes,p=u.defaults,_=u.scrollTrigger,m=u.yoyoEase,y=n.parent||lt,b=(Dt(i)||rd(i)?Be(i[0]):"length"in n)?[i]:Qt(i),C,x,g,E,w,T,A,O;if(a._targets=b.length?bu(b):Bn("GSAP target "+i+" not found. https://greensock.com",!Wt.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,v||f||Tn(h)||Tn(l)){if(n=a.vars,C=a.timeline=new Ft({data:"nested",defaults:p||{}}),C.kill(),C.parent=C._dp=Ae(a),C._start=0,f||Tn(h)||Tn(l)){if(E=b.length,A=f&&xd(f),Ge(f))for(w in f)~Fd.indexOf(w)&&(O||(O={}),O[w]=f[w]);for(x=0;x<E;x++)g=Dn(n,Ud),g.stagger=0,m&&(g.yoyoEase=m),O&&Pr(g,O),T=b[x],g.duration=+xi(h,Ae(a),x,T,b),g.delay=(+xi(l,Ae(a),x,T,b)||0)-a._delay,!f&&E===1&&g.delay&&(a._delay=l=g.delay,a._start+=l,g.delay=0),C.to(T,g,A?A(x,T,b):0),C._ease=Z.none;C.duration()?h=l=0:a.timeline=0}else if(v){gi(oe(C.vars.defaults,{ease:"none"})),C._ease=Er(v.ease||n.ease||"none");var N=0,F,D,S;if(Dt(v))v.forEach(function(I){return C.to(b,I,">")});else{g={};for(w in v)w==="ease"||w==="easeEach"||_T(w,v[w],g,v.easeEach);for(w in g)for(F=g[w].sort(function(I,M){return I.t-M.t}),N=0,x=0;x<F.length;x++)D=F[x],S={ease:D.e,duration:(D.t-(x?F[x-1].t:0))/100*h},S[w]=D.v,C.to(b,S,N),N+=S.duration;C.duration()<h&&C.to({},{duration:h-C.duration()})}}h||a.duration(h=C.duration())}else a.timeline=0;return d===!0&&!vu&&(Xe=Ae(a),lt.killTweensOf(b),Xe=0),ye(y,Ae(a),o),n.reversed&&a.reverse(),n.paused&&a.paused(!0),(c||!h&&!v&&a._start===Bt(y._time)&&kt(c)&&Vb(Ae(a))&&y.data!=="nested")&&(a._tTime=-nt,a.render(Math.max(0,-l))),_&&_d(Ae(a),_),a}var t=e.prototype;return t.render=function(n,o,s){var a=this._time,u=this._tDur,h=this._dur,l=n>u-nt&&n>=0?u:n<nt?0:n,c,f,d,v,p,_,m,y,b;if(!h)Yb(this,n,o,s);else if(l!==this._tTime||!n||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=n<0){if(c=l,y=this.timeline,this._repeat){if(v=h+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(v*100+n,o,s);if(c=Bt(l%v),l===u?(d=this._repeat,c=h):(d=~~(l/v),d&&d===l/v&&(c=h,d--),c>h&&(c=h)),_=this._yoyo&&d&1,_&&(b=this._yEase,c=h-c),p=Kr(this._tTime,v),c===a&&!s&&this._initted)return this._tTime=l,this;d!==p&&(y&&this._yEase&&Rd(y,_),this.vars.repeatRefresh&&!_&&!this._lock&&(this._lock=s=1,this.render(Bt(v*d),!0).invalidate()._lock=0))}if(!this._initted){if(md(this,n<0?n:c,s,o))return this._tTime=0,this;if(a!==this._time)return this;if(h!==this._dur)return this.render(n,o,s)}if(this._tTime=l,this._time=c,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=m=(b||this._ease)(c/h),this._from&&(this.ratio=m=1-m),c&&!a&&!o&&(te(this,"onStart"),this._tTime!==l))return this;for(f=this._pt;f;)f.r(m,f.d),f=f._next;y&&y.render(n<0?n:!c&&_?-nt:y._dur*y._ease(c/this._dur),o,s)||this._startAt&&(this._zTime=n),this._onUpdate&&!o&&(n<0&&this._startAt&&this._startAt.render(n,!0,s),te(this,"onUpdate")),this._repeat&&d!==p&&this.vars.onRepeat&&!o&&this.parent&&te(this,"onRepeat"),(l===this._tDur||!l)&&this._tTime===l&&(n<0&&this._startAt&&!this._onUpdate&&this._startAt.render(n,!0,!0),(n||!h)&&(l===this._tDur&&this._ts>0||!l&&this._ts<0)&&Fe(this,1),!o&&!(n<0&&!a)&&(l||a)&&(te(this,l===u?"onComplete":"onReverseComplete",!0),this._prom&&!(l<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(){return this._pt=this._op=this._startAt=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),r.prototype.invalidate.call(this)},t.resetTo=function(n,o,s,a){Di||Ht.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Eu(this,u),h=this._ease(u/this._dur),pT(this,n,o,s,a,h,u)?this.resetTo(n,o,s,a):(Tu(this,0),this.parent||pd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,o){if(o===void 0&&(o="all"),!n&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?pi(this):this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(n,o,Xe&&Xe.vars.overwrite!==!0)._first||pi(this),this.parent&&s!==this.timeline.totalDuration()&&Zr(this,this._dur*this.timeline._tDur/s,0,1),this}var a=this._targets,u=n?Qt(n):a,h=this._ptLookup,l=this._pt,c,f,d,v,p,_,m;if((!o||o==="all")&&jb(a,u))return o==="all"&&(this._pt=0),pi(this);for(c=this._op=this._op||[],o!=="all"&&(St(o)&&(p={},zt(o,function(y){return p[y]=1}),o=p),o=vT(a,o)),m=a.length;m--;)if(~u.indexOf(a[m])){f=h[m],o==="all"?(c[m]=o,v=f,d={}):(d=c[m]=c[m]||{},v=o);for(p in v)_=f&&f[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&eo(this,_,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&l&&pi(this),this},e.to=function(n,o){return new e(n,o,arguments[2])},e.from=function(n,o){return yi(1,arguments)},e.delayedCall=function(n,o,s,a){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:o,onReverseComplete:o,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:a})},e.fromTo=function(n,o,s){return yi(2,arguments)},e.set=function(n,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(n,o)},e.killTweensOf=function(n,o,s){return lt.killTweensOf(n,o,s)},e}(ki);oe(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zt("staggerTo,staggerFrom,staggerFromTo",function(r){wt[r]=function(){var e=new Ft,t=Ca.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var wu=function(e,t,i){return e[t]=i},Ld=function(e,t,i){return e[t](i)},mT=function(e,t,i,n){return e[t](n.fp,i)},gT=function(e,t,i){return e.setAttribute(t,i)},Au=function(e,t){return Pt(e[t])?Ld:_u(e[t])&&e.setAttribute?gT:wu},Md=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},yT=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Bd=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},Pu=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},xT=function(e,t,i,n){for(var o=this._pt,s;o;)s=o._next,o.p===n&&o.modifier(e,t,i),o=s},bT=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?eo(this,t,"_pt"):t.dep||(i=1),t=n;return!i},TT=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},Gd=function(e){for(var t=e._pt,i,n,o,s;t;){for(i=t._next,n=o;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:s)?t._prev._next=t:o=t,(t._next=n)?n._prev=t:s=t,t=i}e._pt=o},Xt=function(){function r(t,i,n,o,s,a,u,h,l){this.t=i,this.s=o,this.c=s,this.p=n,this.r=a||Md,this.d=u||this,this.set=h||wu,this.pr=l||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,o){this.mSet=this.mSet||this.set,this.set=TT,this.m=i,this.mt=o,this.tween=n},r}();zt(xu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return yu[r]=1});Yt.TweenMax=Yt.TweenLite=wt;Yt.TimelineLite=Yt.TimelineMax=Ft;lt=new Ft({sortChildren:!1,defaults:qr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wt.stringFilter=Pd;var zn={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return oT(n)})},timeline:function(e){return new Ft(e)},getTweensOf:function(e,t){return lt.getTweensOf(e,t)},getProperty:function(e,t,i,n){St(e)&&(e=Qt(e)[0]);var o=Tr(e||{}).get,s=i?dd:cd;return i==="native"&&(i=""),e&&(t?s((jt[t]&&jt[t].get||o)(e,t,i,n)):function(a,u,h){return s((jt[a]&&jt[a].get||o)(e,a,u,h))})},quickSetter:function(e,t,i){if(e=Qt(e),e.length>1){var n=e.map(function(l){return de.quickSetter(l,t,i)}),o=n.length;return function(l){for(var c=o;c--;)n[c](l)}}e=e[0]||{};var s=jt[t],a=Tr(e),u=a.harness&&(a.harness.aliases||{})[t]||t,h=s?function(l){var c=new s;Gr._pt=0,c.init(e,i?l+i:l,Gr,0,[e]),c.render(1,c),Gr._pt&&Pu(1,Gr)}:a.set(e,u);return s?h:function(l){return h(e,u,i?l+i:l,a,1)}},quickTo:function(e,t,i){var n,o=de.to(e,Pr((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),s=function(u,h,l){return o.resetTo(t,u,h,l)};return s.tween=o,s},isTweening:function(e){return lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Er(e.ease,qr.ease)),zl(qr,e||{})},config:function(e){return zl(Wt,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,o=e.defaults,s=e.extendTimeline;(n||"").split(",").forEach(function(a){return a&&!jt[a]&&!Yt[a]&&Bn(t+" effect requires "+a+" plugin.")}),Uo[t]=function(a,u,h){return i(Qt(a),oe(u||{},o),h)},s&&(Ft.prototype[t]=function(a,u,h){return this.add(Uo[t](a,Ge(u)?u:(h=u)&&{},this),h)})},registerEase:function(e,t){Z[e]=Er(t)},parseEase:function(e,t){return arguments.length?Er(e,t):Z},getById:function(e){return lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Ft(e),n,o;for(i.smoothChildTiming=kt(e.smoothChildTiming),lt.remove(i),i._dp=0,i._time=i._tTime=lt._time,n=lt._first;n;)o=n._next,(t||!(!n._dur&&n instanceof wt&&n.vars.onComplete===n._targets[0]))&&ye(i,n,n._start-n._delay),n=o;return ye(lt,i,0),i},utils:{wrap:rT,wrapYoyo:iT,distribute:xd,random:Td,snap:bd,normalize:eT,getUnit:Gt,clamp:Kb,splitColor:wd,toArray:Qt,selector:Jb,mapRange:Ed,pipe:Qb,unitize:tT,interpolate:nT,shuffle:yd},install:ad,effects:Uo,ticker:Ht,updateRoot:Ft.updateRoot,plugins:jt,globalTimeline:lt,core:{PropTween:Xt,globals:ud,Tween:wt,Timeline:Ft,Animation:ki,getCache:Tr,_removeLinkedListItem:eo,suppressOverwrites:function(e){return vu=e}}};zt("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return zn[r]=wt[r]});Ht.add(Ft.updateRoot);Gr=zn.to({},{duration:0});var CT=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},ET=function(e,t){var i=e._targets,n,o,s;for(n in t)for(o=i.length;o--;)s=e._ptLookup[o][n],s&&(s=s.d)&&(s._pt&&(s=CT(s,n)),s&&s.modifier&&s.modifier(t[n],e,i[o],n))},Go=function(e,t){return{name:e,rawVars:1,init:function(n,o,s){s._onInit=function(a){var u,h;if(St(o)&&(u={},zt(o,function(l){return u[l]=1}),o=u),t){u={};for(h in o)u[h]=t(o[h]);o=u}ET(a,o)}}}},de=zn.registerPlugin({name:"attr",init:function(e,t,i,n,o){var s,a;for(s in t)a=this.add(e,"setAttribute",(e.getAttribute(s)||0)+"",t[s],n,o,0,0,s),a&&(a.op=s),this._props.push(s)}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i])}},Go("roundProps",Ea),Go("modifiers"),Go("snap",bd))||zn;wt.version=Ft.version=de.version="3.10.4";sd=1;ed()&&Jr();Z.Power0;Z.Power1;Z.Power2;Z.Power3;Z.Power4;var wT=Z.Linear;Z.Quad;Z.Cubic;Z.Quart;Z.Quint;Z.Strong;Z.Elastic;Z.Back;Z.SteppedEase;Z.Bounce;Z.Sine;Z.Expo;Z.Circ;/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Wl,je,zr,Iu,yr,Yl,AT=function(){return typeof window!="undefined"},Qe={},pr=180/Math.PI,Xr=Math.PI/180,Lr=Math.atan2,$l=1e8,Dd=/([A-Z])/g,PT=/(left|right|width|margin|padding|x)/i,IT=/[\s,\(]\S/,He={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},RT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ST=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},OT=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},zd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Xd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},NT=function(e,t,i){return e.style[t]=i},FT=function(e,t,i){return e.style.setProperty(t,i)},UT=function(e,t,i){return e._gsap[t]=i},LT=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},MT=function(e,t,i,n,o){var s=e._gsap;s.scaleX=s.scaleY=i,s.renderTransform(o,s)},BT=function(e,t,i,n,o){var s=e._gsap;s[t]=i,s.renderTransform(o,s)},Ut="transform",tr=Ut+"Origin",jd,Aa=function(e,t){var i=je.createElementNS?je.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):je.createElement(e);return i.style?i:je.createElement(e)},Ue=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Dd,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,Qr(t)||t,1)||""},ql="O,Moz,ms,Ms,Webkit".split(","),Qr=function(e,t,i){var n=t||yr,o=n.style,s=5;if(e in o&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);s--&&!(ql[s]+e in o););return s<0?null:(s===3?"ms":s>=0?ql[s]:"")+e},Pa=function(){AT()&&window.document&&(Wl=window,je=Wl.document,zr=je.documentElement,yr=Aa("div")||{style:{}},Aa("div"),Ut=Qr(Ut),tr=Ut+"Origin",yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",jd=!!Qr("perspective"),Iu=1)},Do=function r(e){var t=Aa("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,o=this.style.cssText,s;if(zr.appendChild(t),t.appendChild(this),this.style.display="block",e)try{s=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(s=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),zr.removeChild(t),this.style.cssText=o,s},Kl=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Hd=function(e){var t;try{t=e.getBBox()}catch{t=Do.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Do||(t=Do.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Kl(e,["x","cx","x1"])||0,y:+Kl(e,["y","cy","y1"])||0,width:0,height:0}:t},Vd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Hd(e))},zi=function(e,t){if(t){var i=e.style;t in Qe&&t!==tr&&(t=Ut),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Dd,"-$1").toLowerCase())):i.removeAttribute(t)}},Ve=function(e,t,i,n,o,s){var a=new Xt(e._pt,t,i,0,1,s?Xd:zd);return e._pt=a,a.b=n,a.e=o,e._props.push(i),a},Zl={deg:1,rad:1,turn:1},er=function r(e,t,i,n){var o=parseFloat(i)||0,s=(i+"").trim().substr((o+"").length)||"px",a=yr.style,u=PT.test(t),h=e.tagName.toLowerCase()==="svg",l=(h?"client":"offset")+(u?"Width":"Height"),c=100,f=n==="px",d=n==="%",v,p,_,m;return n===s||!o||Zl[n]||Zl[s]?o:(s!=="px"&&!f&&(o=r(e,t,i,"px")),m=e.getCTM&&Vd(e),(d||s==="%")&&(Qe[t]||~t.indexOf("adius"))?(v=m?e.getBBox()[u?"width":"height"]:e[l],gt(d?o/v*c:o/100*v)):(a[u?"width":"height"]=c+(f?s:n),p=~t.indexOf("adius")||n==="em"&&e.appendChild&&!h?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===je||!p.appendChild)&&(p=je.body),_=p._gsap,_&&d&&_.width&&u&&_.time===Ht.time?gt(o/_.width*c):((d||s==="%")&&(a.position=Ue(e,"position")),p===e&&(a.position="static"),p.appendChild(yr),v=yr[l],p.removeChild(yr),a.position="absolute",u&&d&&(_=Tr(p),_.time=Ht.time,_.width=p[l]),gt(f?v*o/c:v&&o?c/v*o:0))))},vr=function(e,t,i,n){var o;return Iu||Pa(),t in He&&t!=="transform"&&(t=He[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qe[t]&&t!=="transform"?(o=ji(e,n),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:jn(Ue(e,tr))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||n||~(o+"").indexOf("calc("))&&(o=Xn[t]&&Xn[t](e,t,i)||Ue(e,t)||ld(e,t)||(t==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?er(e,t,o,i)+i:o},GT=function(e,t,i,n){if(!i||i==="none"){var o=Qr(t,e,1),s=o&&Ue(e,o,1);s&&s!==i?(t=o,i=s):t==="borderColor"&&(i=Ue(e,"borderTopColor"))}var a=new Xt(this._pt,e.style,t,0,1,Bd),u=0,h=0,l,c,f,d,v,p,_,m,y,b,C,x;if(a.b=i,a.e=n,i+="",n+="",n==="auto"&&(e.style[t]=n,n=Ue(e,t)||n,e.style[t]=i),l=[i,n],Pd(l),i=l[0],n=l[1],f=i.match(Br)||[],x=n.match(Br)||[],x.length){for(;c=Br.exec(n);)_=c[0],y=n.substring(u,c.index),v?v=(v+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(v=1),_!==(p=f[h++]||"")&&(d=parseFloat(p)||0,C=p.substr((d+"").length),_.charAt(1)==="="&&(_=kr(d,_)+C),m=parseFloat(_),b=_.substr((m+"").length),u=Br.lastIndex-b.length,b||(b=b||Wt.units[t]||C,u===n.length&&(n+=b,a.e+=b)),C!==b&&(d=er(e,t,p,b)||0),a._pt={_next:a._pt,p:y||h===1?y:",",s:d,c:m-d,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=u<n.length?n.substring(u,n.length):""}else a.r=t==="display"&&n==="none"?Xd:zd;return nd.test(n)&&(a.e=0),this._pt=a,a},Jl={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},DT=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=Jl[i]||i,t[1]=Jl[n]||n,t.join(" ")},kT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,o=t.u,s=i._gsap,a,u,h;if(o==="all"||o===!0)n.cssText="",u=1;else for(o=o.split(","),h=o.length;--h>-1;)a=o[h],Qe[a]&&(u=1,a=a==="transformOrigin"?tr:Ut),zi(i,a);u&&(zi(i,Ut),s&&(s.svg&&i.removeAttribute("transform"),ji(i,1),s.uncache=1))}},Xn={clearProps:function(e,t,i,n,o){if(o.data!=="isFromStart"){var s=e._pt=new Xt(e._pt,t,i,0,0,kT);return s.u=n,s.pr=-10,s.tween=o,e._props.push(i),1}}},Xi=[1,0,0,1,0,0],Wd={},Yd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ql=function(e){var t=Ue(e,Ut);return Yd(t)?Xi:t.substr(7).match(id).map(gt)},Ru=function(e,t){var i=e._gsap||Tr(e),n=e.style,o=Ql(e),s,a,u,h;return i.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,o=[u.a,u.b,u.c,u.d,u.e,u.f],o.join(",")==="1,0,0,1,0,0"?Xi:o):(o===Xi&&!e.offsetParent&&e!==zr&&!i.svg&&(u=n.display,n.display="block",s=e.parentNode,(!s||!e.offsetParent)&&(h=1,a=e.nextSibling,zr.appendChild(e)),o=Ql(e),u?n.display=u:zi(e,"display"),h&&(a?s.insertBefore(e,a):s?s.appendChild(e):zr.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},Ia=function(e,t,i,n,o,s){var a=e._gsap,u=o||Ru(e,!0),h=a.xOrigin||0,l=a.yOrigin||0,c=a.xOffset||0,f=a.yOffset||0,d=u[0],v=u[1],p=u[2],_=u[3],m=u[4],y=u[5],b=t.split(" "),C=parseFloat(b[0])||0,x=parseFloat(b[1])||0,g,E,w,T;i?u!==Xi&&(E=d*_-v*p)&&(w=C*(_/E)+x*(-p/E)+(p*y-_*m)/E,T=C*(-v/E)+x*(d/E)-(d*y-v*m)/E,C=w,x=T):(g=Hd(e),C=g.x+(~b[0].indexOf("%")?C/100*g.width:C),x=g.y+(~(b[1]||b[0]).indexOf("%")?x/100*g.height:x)),n||n!==!1&&a.smooth?(m=C-h,y=x-l,a.xOffset=c+(m*d+y*p)-m,a.yOffset=f+(m*v+y*_)-y):a.xOffset=a.yOffset=0,a.xOrigin=C,a.yOrigin=x,a.smooth=!!n,a.origin=t,a.originIsAbsolute=!!i,e.style[tr]="0px 0px",s&&(Ve(s,a,"xOrigin",h,C),Ve(s,a,"yOrigin",l,x),Ve(s,a,"xOffset",c,a.xOffset),Ve(s,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",C+" "+x)},ji=function(e,t){var i=e._gsap||new Od(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,o=i.scaleX<0,s="px",a="deg",u=Ue(e,tr)||"0",h,l,c,f,d,v,p,_,m,y,b,C,x,g,E,w,T,A,O,N,F,D,S,I,M,V,Q,P,L,X,j,$;return h=l=c=v=p=_=m=y=b=0,f=d=1,i.svg=!!(e.getCTM&&Vd(e)),g=Ru(e,i.svg),i.svg&&(I=(!i.uncache||u==="0px 0px")&&!t&&e.getAttribute("data-svg-origin"),Ia(e,I||u,!!I||i.originIsAbsolute,i.smooth!==!1,g)),C=i.xOrigin||0,x=i.yOrigin||0,g!==Xi&&(A=g[0],O=g[1],N=g[2],F=g[3],h=D=g[4],l=S=g[5],g.length===6?(f=Math.sqrt(A*A+O*O),d=Math.sqrt(F*F+N*N),v=A||O?Lr(O,A)*pr:0,m=N||F?Lr(N,F)*pr+v:0,m&&(d*=Math.abs(Math.cos(m*Xr))),i.svg&&(h-=C-(C*A+x*N),l-=x-(C*O+x*F))):($=g[6],X=g[7],Q=g[8],P=g[9],L=g[10],j=g[11],h=g[12],l=g[13],c=g[14],E=Lr($,L),p=E*pr,E&&(w=Math.cos(-E),T=Math.sin(-E),I=D*w+Q*T,M=S*w+P*T,V=$*w+L*T,Q=D*-T+Q*w,P=S*-T+P*w,L=$*-T+L*w,j=X*-T+j*w,D=I,S=M,$=V),E=Lr(-N,L),_=E*pr,E&&(w=Math.cos(-E),T=Math.sin(-E),I=A*w-Q*T,M=O*w-P*T,V=N*w-L*T,j=F*T+j*w,A=I,O=M,N=V),E=Lr(O,A),v=E*pr,E&&(w=Math.cos(E),T=Math.sin(E),I=A*w+O*T,M=D*w+S*T,O=O*w-A*T,S=S*w-D*T,A=I,D=M),p&&Math.abs(p)+Math.abs(v)>359.9&&(p=v=0,_=180-_),f=gt(Math.sqrt(A*A+O*O+N*N)),d=gt(Math.sqrt(S*S+$*$)),E=Lr(D,S),m=Math.abs(E)>2e-4?E*pr:0,b=j?1/(j<0?-j:j):0),i.svg&&(I=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Yd(Ue(e,Ut)),I&&e.setAttribute("transform",I))),Math.abs(m)>90&&Math.abs(m)<270&&(o?(f*=-1,m+=v<=0?180:-180,v+=v<=0?180:-180):(d*=-1,m+=m<=0?180:-180)),t=t||i.uncache,i.x=h-((i.xPercent=h&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+s,i.y=l-((i.yPercent=l&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-l)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+s,i.z=c+s,i.scaleX=gt(f),i.scaleY=gt(d),i.rotation=gt(v)+a,i.rotationX=gt(p)+a,i.rotationY=gt(_)+a,i.skewX=m+a,i.skewY=y+a,i.transformPerspective=b+s,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(n[tr]=jn(u)),i.xOffset=i.yOffset=0,i.force3D=Wt.force3D,i.renderTransform=i.svg?XT:jd?$d:zT,i.uncache=0,i},jn=function(e){return(e=e.split(" "))[0]+" "+e[1]},ko=function(e,t,i){var n=Gt(t);return gt(parseFloat(t)+parseFloat(er(e,"x",i+"px",n)))+n},zT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,$d(e,t)},ar="0deg",ci="0px",ur=") ",$d=function(e,t){var i=t||this,n=i.xPercent,o=i.yPercent,s=i.x,a=i.y,u=i.z,h=i.rotation,l=i.rotationY,c=i.rotationX,f=i.skewX,d=i.skewY,v=i.scaleX,p=i.scaleY,_=i.transformPerspective,m=i.force3D,y=i.target,b=i.zOrigin,C="",x=m==="auto"&&e&&e!==1||m===!0;if(b&&(c!==ar||l!==ar)){var g=parseFloat(l)*Xr,E=Math.sin(g),w=Math.cos(g),T;g=parseFloat(c)*Xr,T=Math.cos(g),s=ko(y,s,E*T*-b),a=ko(y,a,-Math.sin(g)*-b),u=ko(y,u,w*T*-b+b)}_!==ci&&(C+="perspective("+_+ur),(n||o)&&(C+="translate("+n+"%, "+o+"%) "),(x||s!==ci||a!==ci||u!==ci)&&(C+=u!==ci||x?"translate3d("+s+", "+a+", "+u+") ":"translate("+s+", "+a+ur),h!==ar&&(C+="rotate("+h+ur),l!==ar&&(C+="rotateY("+l+ur),c!==ar&&(C+="rotateX("+c+ur),(f!==ar||d!==ar)&&(C+="skew("+f+", "+d+ur),(v!==1||p!==1)&&(C+="scale("+v+", "+p+ur),y.style[Ut]=C||"translate(0, 0)"},XT=function(e,t){var i=t||this,n=i.xPercent,o=i.yPercent,s=i.x,a=i.y,u=i.rotation,h=i.skewX,l=i.skewY,c=i.scaleX,f=i.scaleY,d=i.target,v=i.xOrigin,p=i.yOrigin,_=i.xOffset,m=i.yOffset,y=i.forceCSS,b=parseFloat(s),C=parseFloat(a),x,g,E,w,T;u=parseFloat(u),h=parseFloat(h),l=parseFloat(l),l&&(l=parseFloat(l),h+=l,u+=l),u||h?(u*=Xr,h*=Xr,x=Math.cos(u)*c,g=Math.sin(u)*c,E=Math.sin(u-h)*-f,w=Math.cos(u-h)*f,h&&(l*=Xr,T=Math.tan(h-l),T=Math.sqrt(1+T*T),E*=T,w*=T,l&&(T=Math.tan(l),T=Math.sqrt(1+T*T),x*=T,g*=T)),x=gt(x),g=gt(g),E=gt(E),w=gt(w)):(x=c,w=f,g=E=0),(b&&!~(s+"").indexOf("px")||C&&!~(a+"").indexOf("px"))&&(b=er(d,"x",s,"px"),C=er(d,"y",a,"px")),(v||p||_||m)&&(b=gt(b+v-(v*x+p*E)+_),C=gt(C+p-(v*g+p*w)+m)),(n||o)&&(T=d.getBBox(),b=gt(b+n/100*T.width),C=gt(C+o/100*T.height)),T="matrix("+x+","+g+","+E+","+w+","+b+","+C+")",d.setAttribute("transform",T),y&&(d.style[Ut]=T)},jT=function(e,t,i,n,o){var s=360,a=St(o),u=parseFloat(o)*(a&&~o.indexOf("rad")?pr:1),h=u-n,l=n+h+"deg",c,f;return a&&(c=o.split("_")[1],c==="short"&&(h%=s,h!==h%(s/2)&&(h+=h<0?s:-s)),c==="cw"&&h<0?h=(h+s*$l)%s-~~(h/s)*s:c==="ccw"&&h>0&&(h=(h-s*$l)%s-~~(h/s)*s)),e._pt=f=new Xt(e._pt,t,i,n,h,RT),f.e=l,f.u="deg",e._props.push(i),f},tf=function(e,t){for(var i in t)e[i]=t[i];return e},HT=function(e,t,i){var n=tf({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",s=i.style,a,u,h,l,c,f,d,v;n.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),s[Ut]=t,a=ji(i,1),zi(i,Ut),i.setAttribute("transform",h)):(h=getComputedStyle(i)[Ut],s[Ut]=t,a=ji(i,1),s[Ut]=h);for(u in Qe)h=n[u],l=a[u],h!==l&&o.indexOf(u)<0&&(d=Gt(h),v=Gt(l),c=d!==v?er(i,u,h,v):parseFloat(h),f=parseFloat(l),e._pt=new Xt(e._pt,a,u,c,f-c,kd),e._pt.u=v||0,e._props.push(u));tf(a,n)};zt("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",o="Left",s=(e<3?[t,i,n,o]:[t+o,t+i,n+i,n+o]).map(function(a){return e<2?r+a:"border"+a+r});Xn[e>1?"border"+r:r]=function(a,u,h,l,c){var f,d;if(arguments.length<4)return f=s.map(function(v){return vr(a,v,h)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(l+"").split(" "),d={},s.forEach(function(v,p){return d[v]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(u,d,c)}});var qd={name:"css",register:Pa,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,o){var s=this._props,a=e.style,u=i.vars.startAt,h,l,c,f,d,v,p,_,m,y,b,C,x,g,E;Iu||Pa();for(p in t)if(p!=="autoRound"&&(l=t[p],!(jt[p]&&Nd(p,t,i,n,e,o)))){if(d=typeof l,v=Xn[p],d==="function"&&(l=l.call(i,n,e,o),d=typeof l),d==="string"&&~l.indexOf("random(")&&(l=Gi(l)),v)v(this,e,p,l,i)&&(E=1);else if(p.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(p)+"").trim(),l+="",qe.lastIndex=0,qe.test(h)||(_=Gt(h),m=Gt(l)),m?_!==m&&(h=er(e,p,h,m)+m):_&&(l+=_),this.add(a,"setProperty",h,l,n,o,0,0,p),s.push(p);else if(d!=="undefined"){if(u&&p in u?(h=typeof u[p]=="function"?u[p].call(i,n,e,o):u[p],St(h)&&~h.indexOf("random(")&&(h=Gi(h)),Gt(h+"")||(h+=Wt.units[p]||Gt(vr(e,p))||""),(h+"").charAt(1)==="="&&(h=vr(e,p))):h=vr(e,p),f=parseFloat(h),y=d==="string"&&l.charAt(1)==="="&&l.substr(0,2),y&&(l=l.substr(2)),c=parseFloat(l),p in He&&(p==="autoAlpha"&&(f===1&&vr(e,"visibility")==="hidden"&&c&&(f=0),Ve(this,a,"visibility",f?"inherit":"hidden",c?"inherit":"hidden",!c)),p!=="scale"&&p!=="transform"&&(p=He[p],~p.indexOf(",")&&(p=p.split(",")[0]))),b=p in Qe,b){if(C||(x=e._gsap,x.renderTransform&&!t.parseTransform||ji(e,t.parseTransform),g=t.smoothOrigin!==!1&&x.smooth,C=this._pt=new Xt(this._pt,a,Ut,0,1,x.renderTransform,x,0,-1),C.dep=1),p==="scale")this._pt=new Xt(this._pt,x,"scaleY",x.scaleY,(y?kr(x.scaleY,y+c):c)-x.scaleY||0),s.push("scaleY",p),p+="X";else if(p==="transformOrigin"){l=DT(l),x.svg?Ia(e,l,0,g,0,this):(m=parseFloat(l.split(" ")[2])||0,m!==x.zOrigin&&Ve(this,x,"zOrigin",x.zOrigin,m),Ve(this,a,p,jn(h),jn(l)));continue}else if(p==="svgOrigin"){Ia(e,l,1,g,0,this);continue}else if(p in Wd){jT(this,x,p,f,y?kr(f,y+l):l);continue}else if(p==="smoothOrigin"){Ve(this,x,"smooth",x.smooth,l);continue}else if(p==="force3D"){x[p]=l;continue}else if(p==="transform"){HT(this,l,e);continue}}else p in a||(p=Qr(p)||p);if(b||(c||c===0)&&(f||f===0)&&!IT.test(l)&&p in a)_=(h+"").substr((f+"").length),c||(c=0),m=Gt(l)||(p in Wt.units?Wt.units[p]:_),_!==m&&(f=er(e,p,h,m)),this._pt=new Xt(this._pt,b?x:a,p,f,(y?kr(f,y+c):c)-f,!b&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?OT:kd),this._pt.u=m||0,_!==m&&m!=="%"&&(this._pt.b=h,this._pt.r=ST);else if(p in a)GT.call(this,e,p,h,y?y+l:l);else if(p in e)this.add(e,p,h||e[p],y?y+l:l,n,o);else{gu(p,l);continue}s.push(p)}}E&&Gd(this)},get:vr,aliases:He,getSetter:function(e,t,i){var n=He[t];return n&&n.indexOf(",")<0&&(t=n),t in Qe&&t!==tr&&(e._gsap.x||vr(e,"x"))?i&&Yl===i?t==="scale"?LT:UT:(Yl=i||{})&&(t==="scale"?MT:BT):e.style&&!_u(e.style[t])?NT:~t.indexOf("-")?FT:Au(e,t)},core:{_removeProperty:zi,_getMatrix:Ru}};de.utils.checkPrefix=Qr;(function(r,e,t,i){var n=zt(r+","+e+","+t,function(o){Qe[o]=1});zt(e,function(o){Wt.units[o]="deg",Wd[o]=1}),He[n[13]]=r+","+e,zt(i,function(o){var s=o.split(":");He[s[1]]=n[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wt.units[r]="px"});de.registerPlugin(qd);var VT=de.registerPlugin(qd)||de,hr=VT.core.Tween;const Hi=ht.prototype;Hi.set=function(r){for(let e in r)this[e]=r[e]};Hi.offsetX=Hi.offsetY=0;Object.defineProperties(Hi,{scaleX:{set:function(r){this.scale.x!==r&&(this.scale.x=r)},get:function(){return this.scale.x}},scaleY:{set:function(r){this.scale.y!==r&&(this.scale.y=r)},get:function(){return this.scale.y}},skewX:{set:function(r){this.skew.x!==r&&(this.skew.x=r)},get:function(){return this.skew.x}},skewY:{set:function(r){this.skew.y!==r&&(this.skew.y=r)},get:function(){return this.skew.y}},rotate:{set:function(r){this.rotation!==r&&(this.rotation=r)},get:function(){return this.rotation}},pivotX:{set:function(r){this.pivot.x=r},get:function(){return this.pivot.x}},pivotY:{set:function(r){this.pivot.y=r},get:function(){return this.pivot.y}},anchorX:{set:function(r){this.anchor.x=r},get:function(){return this.anchor.x}},anchorY:{set:function(r){this.anchor.y=r},get:function(){return this.anchor.y}},origin:{get:function(){return[this.pivot.x,this.pivot.y]},set:function(r){let e=this.parent||this._tempDisplayObjectParent,t={x:this._left,y:this._top},i=e.toLocal(new Y(r[0],r[1]),this);this.boxOffsetX=i.x-(t.x+r[0]),this.boxOffsetY=i.y-(t.y+r[1]),this.offsetX=i.x-t.x-this.boxOffsetX,this.offsetY=i.y-t.y-this.boxOffsetY,this.x=this._left+this.offsetX,this.y=this._top+this.offsetY,this.pivot.set(r[0],r[1])}},left:{get:function(){return this._left},set:function(r){this._left=r,this.x=r+this.offsetX}},right:{get:function(){return this._right},set:function(r){r!==void 0&&(this._right=r,this.left=this.parent.width-this.width-r)}},top:{get:function(){return this._top},set:function(r){this._top=r,this.y=r+this.offsetY}},bottom:{get:function(){return this._bottom},set:function(r){r!==void 0&&(this._bottom=r,this.top=this.parent.height-this.height-r)}},time:{set:function(r){let e=r-this._t||r;this._t=r;let{velocityX:t,velocityY:i,accelerationX:n,accelerationY:o}=this;this.velocityX+=e*n,this.velocityY+=e*o,this.x+=(this.velocityX+t)*e/2,this.y+=(this.velocityY+i)*e/2},get:function(){return this._t}},index:{set:function(r){this._index!==r&&(this._index=r,this.parent.setChildIndex(this,r))},get:()=>globalThis._index}});Object.assign(Hi,{velocityX:0,velocityY:0,accelerationX:0,accelerationY:0,_top:0,_left:0});var WT=It.prototype.addChild;It.prototype.addChild=function(){var r=arguments.length;if(r!==0){WT.apply(this,arguments);for(var e=0;e<r;++e){var t=arguments[e];t.right=t._right,t.bottom=t._bottom}}};var YT=It.prototype.addChildAt;It.prototype.addChildAt=function(r,e){YT.call(this,r,e),r.right=r._right,r.bottom=r._bottom};{let r=Symbol("dirty"),e=function(){if(this[r]==this.dirty)return;this[r]=this.dirty;let t=this.clone(),i=t.graphicsData;for(let n of i)n.lineWidth=0;this._cwidth=t.width,this._cheight=t.height};Object.defineProperties(Ne.prototype,{_cwidth:{writable:!0,value:0},_cheight:{writable:!0,value:0},cwidth:{get:function(){return e.call(this),this._cwidth}},cheight:{get:function(){return e.call(this),this._cheight}}})}ht.prototype.generateCanvasTexture=function(r){let e=this.getBounds(),t=Me.create(e.width,e.height);return this.setTransform(),r.render(this,t),t};document.addEventListener("qbrowserVisibilityChange",function(r){var e=document.createEvent("HTMLEvents");e.initEvent("visibilitychange",!1,!1),e.hidden=r.hidden,document.dispatchEvent(e)},!0);document.addEventListener("visibilitychange",function(r){r.hidden=r.hidden===void 0?document.hidden:r.hidden},!0);class ef{constructor(...e){this.init(...e)}init({width:e,height:t,cell:i={width:10},rectangles:n=[]}){e=e>>0,t=t>>0,i.height===void 0&&(i.height=i.width);let o=e/i.width>>0,s=t/i.height>>0;[i.width,i.height]=[e/o,t/s],this.grid=new Array(o*s);for(let a=0;a<s;++a)for(let u=0;u<o;++u){let h=a*o+u;this.grid[h]={index:h,x:i.width*u,y:i.height*a,width:i.width,height:i.height}}Object.assign(this,{row:s,col:o,width:e,height:t,cell:i}),this.trim(n)}reset(...e){this.init(...e)}_shuffle(e){for(let t=e.length;t;t--){let i=Math.floor(Math.random()*t);[e[t-1],e[i]]=[e[i],e[t-1]]}return e}trim(e){e.forEach(({x:t,y:i,width:n,height:o})=>{let s=t/this.cell.width>>0,a=i/this.cell.height>>0,u=(t+n)/this.cell.width>>0,h=(i+o)/this.cell.height>>0;for(let l=a;l<=h;++l)for(let c=s;c<=u;++c){let f=l*this.col+c;this.grid[f].isRemoved=!0}}),this.cells=this.grid.filter(t=>!t.isRemoved),this.shuffleCells=this._shuffle(this.cells.concat([]))}pick(e){return e>this.shuffleCells.length?[]:this.shuffleCells.slice(0,e)}}class Vi{constructor(){this.paused=!0,this.queue=new Map,this.usingRAF=!1,Reflect.defineProperty(this,"useRAF",{set:function(e){Reflect.set(this,"usingRAF",e),e?Vi.RAF.enable():Vi.RAF.disable()}})}setTimeout(e,t,i=Symbol("timeoutID")){return this.queue.set(i,{fn:e,type:0,paused:0,elapsed:0,delay:t}),i}clearTimeout(e){return this.delete(e)}setInterval(e,t,i=Symbol("intervalID")){return this.queue.set(i,{fn:e,type:1,paused:0,elapsed:0,delay:t}),i}clearInterval(e){return this.delete(e)}set(e,t={}){let i=this.queue.get(e)||{};for(let n in t)i[n]=t[n];return!0}delete(e){return this.queue.delete(e)}pause(e){return e===void 0?this.pauseAll():this.queue.get(e).paused=1,!0}resume(e){return this.play(e)}play(e){return e===void 0?this.playAll():this.queue.get(e).paused=0,!0}clean(){return this.queue=new Map,!0}pauseAll(){return this.queue.forEach(e=>e.paused=1),!0}playAll(){return this.queue.forEach(e=>e.paused=0),!0}tick(e){this.paused||this.updateQueue(e)}updateQueue(e){this.queue.forEach((t,i)=>{t.paused!==1&&(t.elapsed+=e,t.elapsed>=t.delay&&(t.fn(),t.type===0?this.delete(i):t.elapsed=0))})}update(){this.useRAF=!1,this.update=e=>{this.usingRAF||this.tick(e)}}}class $T{constructor(){this.time=0,this.auto=this.auto.bind(this)}auto(e){me.tick(e-this.time),this.time=e,this.id=requestAnimationFrame(this.auto)}enable(){me.paused=!1,this.id=requestAnimationFrame(this.auto)}disable(){cancelAnimationFrame(this.id)}}Vi.RAF=new $T;let me=new Vi;me.useRAF=!0;class qT{constructor(){this.defineEvent={}}register(e,t){this.defineEvent[e]?this.defineEvent[e].push(t):this.defineEvent[e]=[t]}dispatch(e,t){if(this.defineEvent[e])for(let i=0,n=this.defineEvent[e].length;i<n;++i)this.defineEvent[e][i]&&this.defineEvent[e][i](t)}on(e,t){return this.register(e,t)}off(e,t){if(this.defineEvent[e]){if(typeof t=="undefined")delete this.defineEvent[e];else for(let i=0,n=this.defineEvent[e].length;i<n;++i)if(t==this.defineEvent[e][i]){this.defineEvent[e][i]=null,setTimeout(()=>this.defineEvent[e].splice(i,1),0);break}}}once(e,t){let i=()=>{t&&t(),this.off(e,i)};this.register(e,i)}clean(){this.defineEvent={}}}var KT="/assets/shade.d85b2b10.jpg",ZT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAEsCAMAAABOo35HAAAAYFBMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzP/AAAyMjJLKyvsBAR4ISFoJCTjBgbDDg5bKCjQCwvaCAiNHByqFRW3ERGgFxeDHh6XGhqASF45AAAAD3RSTlMA7lMONtYfRcJ4qJiJabVbt+rWAAANn0lEQVR42uzbCY6jMBCFYYzZIfgZsy+d+99yYnqk1qxyJWQ0sus7wq/gWFQR/StSZklc1lWRpsJK07SoyzjJpIzYD6GSuGkfkfCzR7Siam45J/sks7guBL7o7/BFpG0TJ6H3sqVSgZOezHrs47wMD8uyzOO2mukrmmjLkHvJpElx0uYYh079xjDvx0evcRJFmYXZS+aVOEP197lTfzeMh9Gw0joPL5dMPlP1x6zcDPvH2UtUoeXKGptKm7FTBMPW6+ByyVtqU62zIpvXM1eTRYHIagHAzOopy5mriMP4cSUFgH5UT5sNAFGGUCtPAaydesU+Aaj8fxRtK72rFw0GQOF7LdtqmtXr7v7XSq5pZe0aaH2uJSuHVpRatcenfCKgR3WVDRBJ5K0SMOo6BmgiX2UFsKvrjEDq7amVC0yduk43AXHkqRJY1ZUOf494WQG7utIMFJ7GylLoRV2pm7z9P0wcjiwi4+2hlQj06lorcIu89IZYd6CMvJQJ6EFdavU2lnS4kxL1EJ6eWVEJTIviK7zr3QH9hbWWyd9LaRTFAtDHoK4xTkDq6TXrQcbCYQbmZjSAvyeWJfP2+yB6Ua9Yth4Pqc+tHmRcnLm02Tv1nG43GoGMWmVep7CmrXtqyDrBSpswNpBkFlfizLU/N4+GqG4BLR/JpExBn7Zu2pYqgltrk9nN5jIdcbQqqkDWHH7dEKHU6myrNqR1ox/IUgAH4eWVaEJNddYC9OI+JrwF3OpRq3UdYgwTEPLvysoFdKccbN4vgri95BqVg97bN8gEjdtzuGh/X125i4XT/sMOVIGfWO5jjM3nJRBnmds08fB2NEGOFfKEkCLhWKSLVh/0OPUNe0i7z4McV7J1m7zOfIGPotxxpt9Nfo9yXNdMV9cdkDbs51DWzq9oFg0E8XHTn2Q1gM19vUiE+UbZkkkLwkpuZ0L5cO53qRrh3soaekBUoQ12bKlbZVPpjfzhnPh/v7/P8vh6ZV0IWGZWJN39c27YxG+RZ9FLKnE9fNIfoyKbjYYl3uLFuwneRJttUU+Z1wnvIpJXY5mrfdy3cVDP68a7eQf9eiw9qDB0/QWxOhUIjsWxThyLgGMRcCwCjkXAsQg4FgHHIuBYBByLgGMRcCwCjkXAsQg4FgHHIuBYBByLgGMRcCwCjkXw/8USHItjcSyO9Ucci4BjEXAsAo5FwLEIOBYBxyLgWAQci4BjEXCsb+yd25KbMAxAC8bcCXJMuARC/v8vW2dbLwnBoNBuRxudx50kM3tGlmVxEQKWtYv9siKW9WWy3uehAZbFsj5gWQhYFgKWhYBlIWBZCFgWApaFgGUhYFkIWBYCloWAZSFgWQhYFgKWhYBlIWBZCFgWApaFgGUhYFkIWBYCloWAZSFgWQhYFgKWhYBlIaAp69jWbfsNlH6BrHZsFACo6loTv+1tgywR+EnhR6F4TdZFgaW5dCVhVmUJ/+CBQR6SQOBlnQHAiw+HWN5+Ro2Eda3JErkHFi/1Q6SsHgDSSPwijPKbr6YtqbIiS+QmGvT5PFYKDLIQGFmnZjpnycwdp2xrRVbhAfxeON0wGl9eIhCyLg9jloQvCdtyywrl3cCN7tJYW5tkndRsylJkbBHNW25ZOTxMyzvpR1sSVOsMLPFjbkuXJNFGliuwhtlsm/tgiQFq3ABe/zZ0nCIjgL+csQCqYzm3JYMflhSgdwyGk+HzoeN1SZAzQOIaltc/3eAO4XT64Oj48WcjB0UKUFEs5nuAzDHf89lMs1pNx6ZHy0NAj83CGg8kzYVYz1PwNGj0gmAvmua1hQw/LP52AaAI7ojH5fEoIl4aWakn861FZqqLpY8lyz99LumhZxvW+gJrbfnkmmzZOsbU+B7J0Opna8UZMjZzx+EkSnp3/M0RKcnQMkV2tJTe2+UvQTFJQM3pWcZylXA+zQ7r2QbALLD0ptI8jJ9VD8fK7pkzbDySwyagWcaC2h2PzpJ8tAXpcsFb0uN8V5JPwkW7v5SJaR/nei9zBPDMQnUepQh2Hzpbkn8Spu5KyG519tOg688l2DfgWIR2mV9LepiSPA7E4+DYYVvJYW2p6lK3XVv3o1HluV2ZxUtyHd56v9J22EWQS1g9j/R3+4JIPDAopeCGXJ1RHEpQBNdhWfbK/H9pUthxqKuDY7v7klMEmYQ/eHESbhinTfOAWJZtBXfoFl36i9DPDnEcH7IksKpc+GSbgMdBK/iNGm262rYOLcLwYyMB5ZeNdMP1PG4fh9opU0jtQMQkiwcstlsV7JKVkSziX2M0SWsPhTkmvQm9LeJfJCJaab3eZN1BSDnDIzntzvCSZAfwP2X4FIDkJbFX0Ka3s4f8jbbD2TVHLAnNxsOOa447KEg24l9jADjskuW/UaFlaoddsiKP6lEaT6tA7pIVvFFValpaLGsjJ5aFlMWHw+2yOMFvpGNZKFlyX53Fsrgo/Sd1VvJGx50aQHLXAXE25H7WRi47uw4ifp9OaTkCJNyD3/7cj8+nnb/Qg//eNzu8eHWHu8qI64Z8+f5rrkiL+I0qh+vezVCSvBX+NTSAz90sxGbIJ0ML+mY2IQTisPNG+X0ASMXDW1iyNMuTIvj483e9W9kurZcv3oso9VA3K5uU1VA97ByHq25UU+mx7/AvOQg+VdkXi6yQk01Z5gESi6qGbZ2/0IaVNF/T16Ee+qtW8Iss/K5VVvuhypOeBzd0t6U/IyaPhamz/cppqAAgddsKaD5wWJaDiQWZ+0EYBFGR3sKkXl2F4E8epm/qu0C9wkp5L3Ki/fef7Z2LmpsgEEaLKDHxksF618T3f8t20KiNxki1XwU8D7DrdxaUBeYfdOUEbPis+ThS8rULBxbOpMs8YHn/hjlqzsJcFIX9QMbvoGxxkjTDwiGYNVsuF2daauZgRDGAy2ZiKp5flu/WMEaq+eSs68LrXc0qpwrAucym66QLM3cQfP0wRmocWprVk0c4AmTryfH1fv0SlRHFnyswaKjmvl/Vj5HpREyXTgzthQyMITFCqwwMEXEl/W0XMQTDQlwmMQJhrpoDSywBZDKOkHpUrz/MwrkPov/p75Ap+MZqSywlt1CSDAfW98y/9MMr/kJQsIJgHZxETMV0CQXAo+X1xXQSqnoEFgOxJTecUo4OxrIWV67TEatmeFYnSy6mohA5rRNZa0OhqK9q4t9nWYg1tz0XxeLtvkoWnmn49N2Vmmv3b7LY3JfuKZKeVspK32OhmAfK7vktyJr/TyZCVwFdKwuHljvazri66ErBf6BXyGLvqY/Fz0nIDMr6sqNxoYhteQ6oPK6msqapj/UwqZ68dbVeltgrI67n3VwCSKby6deyLPGZL/PoHiVpE0MX2i0jC2318J+1slNwUdbwjgeeZRkHhIQW/SEhCylK3pl6KH1MuCxLwEbHgY5voyopWUiU13WqSXcU+0sPi5tDCHFCf77lB5h1LxRlLUGZbbNW1CkLZa3glHXKOmW1nLIkOGVJcMqS4JQlwSlLglOWBKcsCYyXFSVFntbpb/K8+PaLzZVVpFX5M+N8COrlPMYM2gVnRsrKqzLm8AGexWWVzz6EcbKitMl6UcRx3PCGhKHrEjLehX1M+uOaJisvs5em0LtauFfUwxgWdYRO7ywr33yZJOsVJU6c2/XC6MfttkvguaTz1RT3HoNkdYUMxPVR1DLtSZsQxodmGubIqoUqx0NTq+j7CUOvyxBZ+U/4jYuNNWTAfsKjChEzZD04tIUM0lDbQ138gU9lgqwEhxXxx6rkdcW5EbLSDABu/QSUh15CHFy1AbJS3t4S2AINROsg7WWlvG1xtBFb3G7SXFball1tR7TkarSWVUxcbYpvgYfOspr2xuputniur6zp1fmtOXmlvrL60rzNDFVY2soSraf3Q3R+1VVWwjc9znxJja6yZvPLtmYwJprKarDobk9oCFBrKkt08tkVH6DRVFY8V/t6nGDwQ8mazy87TuT8oWTNP81xOj8cS9Z8Xe1hgmOPJavae+lAPX1f8AUH8Pe0ZROAVFNZIhzJY/u5wtp1XVfw4q0FzpXtMroY7i3zXF9Z97I9WrW2+qJMlM3yVN8tmt+kcXdob9MNpiyRLwdxrvNOqbgOEgNCwoD9nSq7O8bPqkjrPfiWvMkAcQMqr8oKhSkeV5H2R2EtUfrkQpfkZKQXtx1UDU5AQ2T9Jnng8CJSg4v5qIo/u0tt5si636MHl7PFQlTV32czStb9nscAxJJy9RypMkuWuFDjMIlzwuo+wjBZfbLZCizyfpZjmqwuwnMFzJ0cqRonS0Q4rhtYkyRB82S98sH/f8C8ArIweZ4eoo2PArIiDoQdoqedArLEMx6ip50isi6HaB2slaxJvLGZsuxzZEn0UTxE6zEFZPX3kORvF5kn6wngH6Nd4vFl5WtvA/rTM0LTZEVxn2YtffpsmqzoufpiPPXe+/8YJiv5KVH0xByA+A9bRsmqszZydyUWeevDZY6spIpBrpiOoq3xJrwZsqKixnND2WI6ajnjVOIjyiqiKOkoOvKOdKB+UfU8OhpB+eL5jDMOiCNd+mt75JUfUiTRviTZdlnA54GNEDeQuEoz7XfKdwe2yiKwP4RgRogtbWrI6CfwL9gsyyfih4xwxrg9IXLr8Tr8F9cXQRBYNtvUKJ7awc11yP6uPLrF1S95QmMhXWKM1AAAAABJRU5ErkJggg==",JT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAV1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///+dnZ2Pj4/U1NTCwsK5ubnJycmlpaVwcHDz8/Pf39+LB5XRAAAAEXRSTlMA7NqJeBTMml6/s2lRLadBI1JdWJ4AAAFeSURBVFjD3dfLdoQgEATQAgTBd2WSTGaS///ORLLQE8EHvcvdsbAUxKZFju2qOmj1Q4e66iZc0pvAP5wZcVbrmORaixMqxSxV4YjX3KVa7LEND4UJWZ3iGT47e55kkFTztAEJAy9oJPePhuz8C9dh5GUeK5YFLBaBBdxqA7HIsqsVyyxvoJBZHkD0CJ4barjPboxe4+DJrQozza3Hy+yT0Vcc3LmlYv1jwmu85o3RexzcmDACMJKAGoCTBGjAUhLACZ0swKOSBRjUsoAGQRbgoGUBGkoWoP5DgHQRxa9RvJHEW1n8MUk/515aUOQlTV5U5WUdLbeeH7MHo1sc5A8WsJgVHq618HhfehTPIqvO27GAljZZE1Y6SYcUGV5UJ1plYbPc8IIgbNcbJJni+V/cUC2ypsBDrseeVnEm+HO0Zi/CWByzlWaSrixOGo3bXF2PuKT3pnG/v/+uMT67ct/P6tYBTlA0IQAAAABJRU5ErkJggg==",QT="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAWlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///9hYWEaGhqDg4MODg7v7+/m5ua8vLyysrJ4eHhKSkpAQEDT09PjVCJTAAAAEHRSTlMA7ojcvWzQqZUfEV4sQFF7nFyAdQAAAYdJREFUWMPF19tuhSAQBdBhQAS8jUd7b///N3tSm5C0DhvpQ9e7O7MRFUkTZ+6dNXfW9TxHumRiLz94nqhS6ryc8l2iCmxEZRhGdEaKTEcl0QnkRlINUmVQ20ulQKd6qdaD6zEHrsd6tX/jOswCgHuRpEGkzLUEeLCBsLyrjbShb4uc2XAA00FO7R8PMCEdT7Ccuq1P7yhg+QqwWsC6voIAQ3ej6AHrC6gxERGXAnINfUP7UgCqYYmilAJgjUgzCAA1BmIQAGow9SAA1HDkQACo4cmCAFDDkgEBoIapCMhu/xzwvJ1VqF/EXVlEVxfw+KbcRrCRlPEzV7eVd9EweJjy+IoBPM55fMVIZEHALgUWvNLy+IoAXqp5fMUEXuu7lJnihyWPr+Lyp20TJJWON9uFY44AYAB1FeoPGOSlgaUstgREfMzGBbIgFwVw1G04LLum6/EM+PosNPe/uKE6Uo1OID/+9bcPSFyK4ERYWqyy+ZdIlabwK8OGiS4ZB3b++P33jgd15T4BTH/JS5JtY1gAAAAASUVORK5CYII=";vf();class t1{constructor(){this.width=375,this.height=603,console.log(Hy),window.hasOwnProperty("ontouchstart")===!0?(this.touchstart="touchstart",this.touchmove="touchmove",this.touchend="touchend",this.tap="tap"):(this.touchstart="mousedown",this.touchmove="mousemove",this.touchend="mouseup",this.tap="click");let{clientWidth:e,clientHeight:t}=document.body,i=e/t;i<this.width/this.height?this.height=this.width/i:this.width=this.height*i,this.imageWidth=300*.88>>0,this.imageHeight=450*.88>>0,this.imageRatio=this.imageWidth/this.width,this.app=new Yi({width:this.width,height:this.height,transparent:!0,view:document.getElementById("puzzleGame"),antialias:!0}),this.stage=this.app.stage,this.renderer=this.app.renderer,this.ticker=this.app.ticker,this.app.view.addEventListener(this.touchstart,n=>n.preventDefault()),this.event=new qT,this.totalTime=60,document.addEventListener("visibilitychange",n=>{n.hidden===!0?this.pause():this.isOff!==!0&&this.resume()},!0)}get difficulty(){return this._difficulty}set difficulty(e){this._difficulty!==e&&(this._difficulty=e,this.setDifficulty())}init(){this.puzzle=new It,this.puzzle.set({x:this.width/2,y:this.height/2,pivotX:this.imageWidth/2,pivotY:this.imageHeight/2}),this.stage.addChild(this.puzzle),this.fireworksContainer=new It,this.cliparts=[],new ne().add([{name:"shade",url:KT},{name:"clipart",url:ZT},{name:"pause",url:JT},{name:"play",url:QT}]).load(()=>{let t=new Mt(bt.shade);t.set({alpha:.99,width:this.width,height:this.height}),this.stage.addChildAt(t,0),this.on=bt.play,this.off=bt.pause,this.switch.texture=this.paused===!0?this.on:this.off,this.loaded=!0,this.fireworks=[];for(let i=0;i<24;++i){let n=new Ne,o=Math.random()*255|0,s=Math.random()*255|0,a=Math.random()*255|0,u=80,h=80,l=new Mt(bt.clipart);l.set({width:u,height:h}),n.beginFill((o<<16)+(s<<8)+a,1).drawRect(0,0,u,h);let c=new Mt(n.generateCanvasTexture());c.mask=l,c.addChild(l);let f=new Mt(c.generateCanvasTexture(this.renderer));this.fireworks[i]=f}}),this.timeProgressBack=new Ne,this.timeProgressBack.beginFill(6394087,1).drawRect(0,0,this.width,5),this.timeProgressFront=new Ne,this.timeProgressFront.beginFill(7388993,1).drawRect(0,0,this.width,5),this.timeProgressFront.scaleX=0,this.timeProgressBack.addChild(this.timeProgressFront),this.stage.addChild(this.timeProgressBack),this.switch=new Mt,this.switch.set({width:32,height:32,y:6,x:this.width-36}),this.stage.addChild(this.switch),this.switch.interactive=!0,this.switch.on(this.tap,t=>this.paused===!0?this.turnOn():this.turnOff())}turnOn(){this.resume(),this.switch.texture=this.off,this.event.dispatch("resume"),this.isOff=!1,this.renderer.render(this.stage)}turnOff(){this.pause(),this.switch.texture=this.on,this.event.dispatch("pause"),this.isOff=!0,this.renderer.render(this.stage)}set timeProgress(e){let t=(this.totalTime-e)/this.totalTime;this.timeProgressFront.scaleX=t>1?1:t}enter(e){if(this.loaded!==!0){setTimeout(()=>this.enter(e,difficulty),100);return}this.destroyCliparts(),me.delete(this.timer),this.currentTime=this.totalTime,this.timeProgressFront.scaleX=0,hr.killAll(),this.isOff===!0&&this.turnOn(),this.showLoading();let t=()=>{let i=new Mt(bt[e]);i.set({width:this.imageWidth,height:this.imageHeight}),this.base=i.generateCanvasTexture(this.renderer),this.negative=new Mt(this.base),this.negative.set({x:this.puzzle.x,y:this.puzzle.y,pivotX:this.puzzle.pivotX,pivotY:this.puzzle.pivotY,alpha:.2,visible:!1}),this.stage.addChildAt(this.negative,1),this.clip(),this.hideLoading(),hr.fromTo(this.puzzle,1,{scaleX:1/this.imageRatio,scaleY:1/this.imageRatio},{scaleX:1,scaleY:1,onComplete:()=>this.break().then(n=>this.countdown())})};(void 0)[e]?t():(void 0)(e).load(t)}setDifficulty(){this.col=this.difficulty*2,this.row=this.difficulty*3,this.total=this.col*this.row,this.clipart={};const e=this.imageWidth/(this.col*235/300-65*2/300)>>0,t=e*65/300>>0;Object.assign(this.clipart,{width:e,height:e,clipWidth:t})}showLoading(){}hideLoading(){}clip(){this.cliparts=[],this.cliparts=[];let e=0,t=0;for(let i=0;i<this.row;++i){e=0;for(let n=0;n<this.col;++n){let o={index:i*this.col+n,width:this.clipart.width,height:this.clipart.height,x:e,y:t},s=new Mt(bt.clipart);this.stage.addChild(s),s.width=s.height=this.clipart.width,i===0&&(o.height-=this.clipart.clipWidth,s.y=-this.clipart.clipWidth),n===0&&(o.width-=this.clipart.clipWidth,s.x=-this.clipart.clipWidth);{let a=o.x,u=o.y,h=o.width,l=o.height;a+h>this.base.width&&(h=this.base.width-a),u+l>this.base.height&&(l=this.base.height-u),o.sprite=new Mt(new k(this.base,new K(a,u,h,l))),o.selected=new Mt(o.sprite.texture)}this.cliparts.push(o),o.sprite.set({left:e,top:t,mask:s,cacheAsBitmap:!0}),o.selected.set({mask:s,filters:[new Hx(10,1.5,1.5,3355443,.3)],cacheAsBitmap:!0}),this.puzzle.addChild(o.sprite),e+=o.width-this.clipart.clipWidth,n===this.col-1&&(t+=o.height-this.clipart.clipWidth)}}}break(){let e=this.puzzle.getBounds(),[t,i]=[e.x,e.y];this.gridProps={width:this.width,height:this.height,cell:{width:this.clipart.width*.8},rectangles:[{x:this.width-36,y:0,width:36,height:36},{x:(this.width-this.imageWidth)/2,y:(this.height-this.imageHeight)/2,width:this.imageWidth,height:this.imageHeight}]};let n=new ef(this.gridProps),o=n.pick(this.cliparts.length),s=0,a=this.gridProps.cell.width;for(;o.length===0&&++s<10;)a=a*.8,this.gridProps.cell.width=a,n.reset(this.gridProps),o=n.pick(this.cliparts.length);this.negative.visible=!0;let u=[],h=[];this.stage.interactive=!0,this.stage.on(this.touchmove,({data:f,data:{global:d,identifier:v}})=>{const p=u[v]||null,_=h[v]||null;if(p!==null&&_!==null){--p.negativeCount>=0&&(p.rotate+=p.negativeRotate);let m=p.x0+d.x-_.x,y=p.y0+d.y-_.y;if(m<-this.puzzle.x){l({data:f});return}p.selected.set({rotate:p.rotate,left:m,top:y})}});let l=({data:{identifier:f}})=>{const d=u[f]||null;if(d===null)return;Math.abs(d.x-d.selected.left)<=15&&Math.abs(d.y-d.selected.top)<=15&&(d.selected.rotate=0,d.selected.left=d.x,d.selected.top=d.y,d.lock=!0),d.x0=d.selected.left,d.y0=d.selected.top,d.sprite.set({top:d.selected.top,left:d.selected.left,rotate:d.selected.rotate});let v=d.selected.parent.getChildIndex(d.selected);this.puzzle.removeChild(d.selected),d.lock===!0?this.fit(d):this.puzzle.addChildAt(d.sprite,v),delete u[f],delete h[f]};this.stage.on(this.touchend,l);let c=[];return this.cliparts.forEach((f,d)=>{let v=f.sprite,p=f.selected;v.interactive=!0,v.on(this.touchstart,({data:{global:m,identifier:y}})=>{if(this.paused===!0)return;if(f.lock===!0){v.interactive=!1;return}let b=v.parent;b.removeChild(v);let C=Math.max(b.children.length-1,0);if(b.addChildAt(p,C),p.rotate!==0){p.needFitRotation=!0;let{x,y:g}=p.toLocal(m);p.origin=v.origin=[x,g],f.x0+=p.boxOffsetX,f.y0+=p.boxOffsetY,p.set({left:f.x0,top:f.y0})}u[y]=f,h[y]={x:m.x,y:m.y}}),f.rotate=(Math.random()-.5)*Math.PI/4,f.x0=o[d].x-t,f.y0=o[d].y-i,f.negativeCount=10,f.negativeRotate=-f.rotate/f.negativeCount;let _={left:f.x0,top:f.y0,rotate:f.rotate};c.push(hr.to(v,.3,_)),p.set(_)}),new Promise(f=>{new Ft().add(c,0,"start",.01).call(()=>f())})}fit(e){let t=e.index,i=t%this.col===0?{lock:!1}:this.cliparts[t-1],n=t%this.col===this.col-1?{lock:!1}:this.cliparts[t+1],o=t<this.col?{lock:!1}:this.cliparts[t-this.col],s=t/this.col>>0===this.row-1?{lock:!1}:this.cliparts[t+this.col],a=null;if(i.lock===!0&&(a=i.sprite.parent),n.lock===!0)if(a===null)a=n.sprite.parent;else{let u=n.sprite.parent;if(u===null&&console.log("\u62A5\u9519\u4E86",n,n.sprite,n.selected),a!==u){let h=u.children;for(;h.length>0;)a.addChild(h[0]);u.destroy()}}if(o.lock===!0)if(a===null)a=o.sprite.parent;else{let u=o.sprite.parent;if(u===null&&console.log("\u62A5\u9519\u4E86",o,o.sprite,o.selected),a!==u){let h=u.children;for(;h.length>0;)a.addChild(h[0]);u.destroy()}}if(s.lock===!0)if(a===null)a=s.sprite.parent;else{let u=s.sprite.parent;if(u===null&&console.log("\u62A5\u9519\u4E86",s,s.sprite,s.selected),a!==u){let h=u.children;for(;h.length>0;)a.addChild(h[0]);u.destroy()}}a===null&&(a=new It,a.set({x:this.puzzle.x,y:this.puzzle.y,pivotX:this.puzzle.pivotX,pivotY:this.puzzle.pivotY,scaleX:this.puzzle.scaleX,scaleY:this.puzzle.scaleY}),this.stage.addChildAt(a,2)),a.addChild(e.sprite),a.tween&&a.tween.kill(),a.tween=hr.fromTo(a,.6,{alpha:.4},{alpha:1,ease:wT.easeNone}),this.puzzle.children.length===0&&this.pass()}pass(){me.delete(this.timer),this.displayShell().then(e=>this.event.dispatch("pass","\u901A\u5173"))}displayShell(){if(this.stage.addChild(this.fireworksContainer),this.shellTimeline===void 0){this.gridProps.cell.width=12;let t=new ef(this.gridProps).pick(this.fireworks.length).map(({x:i,y:n},o)=>{let s=this.fireworks[o];s.set({scaleX:1,scaleY:1,anchorX:.5,anchorY:.5,top:90,left:90}),this.fireworksContainer.addChild(s);let a=new Ft;return a.fromTo(s,.6,{rotation:0,left:i,top:n,scaleX:0,scaleY:0,alpha:0},{rotation:Math.PI,scaleX:1,scaleY:1,alpha:.5}).to(s,1.2,{top:"+=560",left:(Math.random()>.5?"+":"-")+"=80",rotation:0,alpha:0}),a});this.shellTimeline=new Ft,this.shellTimeline.pause(),this.shellTimeline.add(t,0,"start",.03)}return new Promise((e,t)=>{this.shellTimeline.restart().call(i=>this.stage.removeChild(this.fireworksContainer)&e())})}destroy(){me.clean(),hr.killAll(),this.destroyChildren(this.stage),this.stage.off(this.touchmove),this.stage.off(this.touchend),xf(),(void 0)(),this.loaded=!1,delete this.shellTimeline}destroyChildren(e){let t=e.children;for(;t.length>0;){let i=t[0];e.removeChild(i),this.destroyChildren(i),i.destroy()}}destroyCliparts(){this.cliparts.forEach(e=>{let{sprite:t,selected:i,sprite:{parent:n},selected:{parent:o}}=e;t.destroy(),i.destroy(),n!==null&&n!==this.puzzle&&n.destroy(),o!==null&&o!==this.puzzle&&o.destroy()}),this.negative&&this.negative.destroy()}countdown(){this.timer=me.setInterval(e=>{this.currentTime-=.1,this.currentTime>0?this.timeProgress=this.currentTime:(this.pause(),me.delete(this.timer),this.event.dispatch("gameover","\u8D85\u65F6"))},100)}pause(){this.paused=!0,hr.pauseAll(),this.ticker.stop(),me.pause()}resume(){this.paused=!1,hr.resumeAll(),this.ticker.start(),me.resume()}}var rf="/assets/a.0c5235aa.jpg",nf="/assets/b.fb8ec29b.jpg",of="/assets/c.191b02f9.jpg",sf="/assets/d.d4d52039.jpg",af="/assets/e.cec31152.jpg";const e1=he("div",{class:"puzzle_map_head"},[he("a",{class:"puzzle_map_back",href:"javascript:hidePuzzleMap();"}),tp(" \u9009\u62E9\u5173\u5361 ")],-1),r1=ep('<div class="puzzle_map_footer"> \u96BE\u5EA6\uFF1A <input type="radio" value="1" name="difficulty" class="puzzle_difficulty"><input type="radio" value="2" name="difficulty" class="puzzle_difficulty"><input type="radio" value="3" name="difficulty" class="puzzle_difficulty"><input type="radio" value="4" name="difficulty" class="puzzle_difficulty"><input type="radio" value="5" name="difficulty" class="puzzle_difficulty"><input type="radio" value="6" name="difficulty" class="puzzle_difficulty"><input type="radio" value="7" name="difficulty" class="puzzle_difficulty"><input type="radio" value="8" name="difficulty" class="puzzle_difficulty"><input type="radio" value="9" name="difficulty" class="puzzle_difficulty"><input type="radio" value="10" name="difficulty" class="puzzle_difficulty"></div>',1),i1=he("div",{class:"puzzle_ad_main"},[he("a",{href:"//jd.com"},[he("div",{class:"puzzle_ad_img"})]),he("div",{class:"puzzle_ad_close",onclick:"puzzle.turnOn()"})],-1),n1=he("div",{class:"puzzle_ad_back",onclick:"back()"},null,-1),o1=[i1,n1],s1=Kd({setup(r){const e=[{picture:rf,thumb:rf,instr:"\u79CB\u5929\u7684\u94F6\u674F\u6811",free:!0},{picture:nf,thumb:nf,instr:"\u6BD5\u52A0\u7D22\u7684\u753B ---- \u5C11\u5973",free:!0},{picture:of,thumb:of,instr:"\u6BD5\u52A0\u7D22\u7684\u753B ---- \u6811",free:!0},{picture:sf,thumb:sf,instr:"\u6BD5\u52A0\u7D22\u7684\u753B ---- \u6865",free:!0},{picture:af,thumb:af,instr:"\u4E0D\u77E5\u9053\u54EA\u91CC\u6765\u7684\u7F8E\u5973",free:!0}],t=JSON.parse(localStorage.getItem("puzzle-record"))||{level:-1,difficulty:2},i=Zi(),n=Zi(),o=Zi(),s=Zi();return Zd(()=>{i.value.innerHTML=e.map((f,d)=>`
      <li
        onclick="this.className === 'puzzle_lock' || selectLevel(${d})"
        ${t.level<d&&f.free!==!0?'class="puzzle_lock"':""}
      >
        <span class="puzzle_map_thumb">
          <img src="${f.thumb}">
        </span>
        <span class="puzzle_map_instr">
          ${f.instr}<br>
          <b>${f.free===!0?"\u514D\u8D39":"\u89E3\u9501\u53EF\u73A9"}</b>
        </span>
      </li>
    `).join(`
`);const a=i.value.querySelectorAll("li");global.showPuzzleMap=function(){n.value.className="puzzle_map show"},global.hidePuzzleMap=function(){n.value.className="puzzle_map"},global.selectLevel=function(f){o.value.className="puzzle_game show",setTimeout(function(){l.enter(e[f].picture),t.level=f,u()},600)},global.back=function(){s.value.style.display="none",o.value.className="puzzle_game"};const u=function(){localStorage.setItem("puzzle-record",JSON.stringify(t))},h=function(f){f=f|0,f=f>1?f:1,c[f-1].checked="checked",l.difficulty=f,l.totalTime=f*120},l=new t1;l.init(),l.totalTime=60,l.event.on("pass",function(){t.level<e.length-1?(a[++t.level].className="",l.enter(e[t.level].picture),u()):alert("\u6E38\u620F\u7ED3\u675F")}),l.event.on("gameover",function(){alert("\u8D85\u65F6\u4E86")}),l.event.on("pause",function(){s.value.style.display="block"}),l.event.on("resume",function(){s.value.style.display="none"});const c=document.querySelectorAll(".puzzle_difficulty");c.forEach(function(f){f.addEventListener("click",function(){t.difficulty=this.value,l.difficulty=this.value,u()})}),h(t.difficulty),global.puzzle=l}),(a,u)=>(Jd(),Qd("div",null,[he("div",{class:"puzzle_map",id:"puzzleMap",ref_key:"puzzleMap",ref:n},[e1,he("ul",{class:"puzzle_map_body",id:"puzzleList",ref_key:"puzzleList",ref:i},null,512),r1],512),he("canvas",{class:"puzzle_game",id:"puzzleGame",ref_key:"puzzleGame",ref:o},null,512),he("div",{class:"puzzle_ad",id:"puzzleAd",ref_key:"puzzleAd",ref:s},o1,512)]))}});var u1=s1;export{u1 as default};
