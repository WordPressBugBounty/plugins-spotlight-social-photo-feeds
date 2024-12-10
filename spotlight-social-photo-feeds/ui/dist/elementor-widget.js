/*! For license information please see elementor-widget.js.LICENSE.txt */
var Spotlight=(window.webpackJsonpSpotlight=window.webpackJsonpSpotlight||[]).push([[12],{0:function(t,r){t.exports=React},123:function(t,r,e){"use strict";r.byteLength=function(t){var r=a(t),e=r[0],n=r[1];return 3*(e+n)/4-n},r.toByteArray=function(t){var r,e,n=a(t),s=n[0],u=n[1],f=new o(function(t,r,e){return 3*(r+e)/4-e}(0,s,u)),h=0,c=u>0?s-4:s;for(e=0;e<c;e+=4)r=i[t.charCodeAt(e)]<<18|i[t.charCodeAt(e+1)]<<12|i[t.charCodeAt(e+2)]<<6|i[t.charCodeAt(e+3)],f[h++]=r>>16&255,f[h++]=r>>8&255,f[h++]=255&r;return 2===u&&(r=i[t.charCodeAt(e)]<<2|i[t.charCodeAt(e+1)]>>4,f[h++]=255&r),1===u&&(r=i[t.charCodeAt(e)]<<10|i[t.charCodeAt(e+1)]<<4|i[t.charCodeAt(e+2)]>>2,f[h++]=r>>8&255,f[h++]=255&r),f},r.fromByteArray=function(t){for(var r,e=t.length,i=e%3,o=[],s=0,u=e-i;s<u;s+=16383)o.push(h(t,s,s+16383>u?u:s+16383));return 1===i?(r=t[e-1],o.push(n[r>>2]+n[r<<4&63]+"==")):2===i&&(r=(t[e-2]<<8)+t[e-1],o.push(n[r>>10]+n[r>>4&63]+n[r<<2&63]+"=")),o.join("")};for(var n=[],i=[],o="undefined"!=typeof Uint8Array?Uint8Array:Array,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,f=s.length;u<f;++u)n[u]=s[u],i[s.charCodeAt(u)]=u;function a(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var e=t.indexOf("=");return-1===e&&(e=r),[e,e===r?0:4-e%4]}function h(t,r,e){for(var i,o,s=[],u=r;u<e;u+=3)i=(t[u]<<16&16711680)+(t[u+1]<<8&65280)+(255&t[u+2]),s.push(n[(o=i)>>18&63]+n[o>>12&63]+n[o>>6&63]+n[63&o]);return s.join("")}i["-".charCodeAt(0)]=62,i["_".charCodeAt(0)]=63},124:function(t,r){r.read=function(t,r,e,n,i){var o,s,u=8*i-n-1,f=(1<<u)-1,a=f>>1,h=-7,c=e?i-1:0,l=e?-1:1,p=t[r+c];for(c+=l,o=p&(1<<-h)-1,p>>=-h,h+=u;h>0;o=256*o+t[r+c],c+=l,h-=8);for(s=o&(1<<-h)-1,o>>=-h,h+=n;h>0;s=256*s+t[r+c],c+=l,h-=8);if(0===o)o=1-a;else{if(o===f)return s?NaN:1/0*(p?-1:1);s+=Math.pow(2,n),o-=a}return(p?-1:1)*s*Math.pow(2,o-n)},r.write=function(t,r,e,n,i,o){var s,u,f,a=8*o-i-1,h=(1<<a)-1,c=h>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,g=n?1:-1,d=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,s=h):(s=Math.floor(Math.log(r)/Math.LN2),r*(f=Math.pow(2,-s))<1&&(s--,f*=2),(r+=s+c>=1?l/f:l*Math.pow(2,1-c))*f>=2&&(s++,f/=2),s+c>=h?(u=0,s=h):s+c>=1?(u=(r*f-1)*Math.pow(2,i),s+=c):(u=r*Math.pow(2,c-1)*Math.pow(2,i),s=0));i>=8;t[e+p]=255&u,p+=g,u/=256,i-=8);for(s=s<<i|u,a+=i;a>0;t[e+p]=255&s,p+=g,s/=256,a-=8);t[e+p-g]|=128*d}},1240:function(t,r,e){"use strict";e.r(r);var n=e(414),i=e(868),o=e.n(i);class s extends elementorModules.frontend.handlers.Base{getDefaultSettings(){return{}}getDefaultElements(){return{$feed:this.$element.find("div.spotlight-instagram-feed")}}bindEvents(){this.elements.$feed.length>0&&Object(n.a)(this.elements.$feed.get(0),{silent:!0})}}o()(window).on("elementor/frontend/init",()=>{elementorFrontend.hooks.addAction("frontend/element_ready/sl-insta-feed.default",t=>{elementorFrontend.elementsHandler.addHandler(s,{$element:t})})})},125:function(t,r){var e={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==e.call(t)}},126:function(t,r,e){"use strict";var n=e(127);function i(){}function o(){}o.resetWarningCache=i,t.exports=function(){function t(t,r,e,i,o,s){if(s!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function r(){return t}t.isRequired=t;var e={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:r,element:t,elementType:t,instanceOf:r,node:t,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:i};return e.PropTypes=e,e}},127:function(t,r,e){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},251:function(t,r,e){"use strict";(function(t){var n=e(123),i=e(124),o=e(125);function s(){return f.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function u(t,r){if(s()<r)throw new RangeError("Invalid typed array length");return f.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r)).__proto__=f.prototype:(null===t&&(t=new f(r)),t.length=r),t}function f(t,r,e){if(!(f.TYPED_ARRAY_SUPPORT||this instanceof f))return new f(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return c(this,t)}return a(this,t,r,e)}function a(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?function(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),f.TYPED_ARRAY_SUPPORT?(t=r).__proto__=f.prototype:t=l(t,r),t}(t,r,e,n):"string"==typeof r?function(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!f.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|g(r,e),i=(t=u(t,n)).write(r,e);return i!==n&&(t=t.slice(0,i)),t}(t,r,e):function(t,r){if(f.isBuffer(r)){var e=0|p(r.length);return 0===(t=u(t,e)).length||r.copy(t,0,0,e),t}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||(n=r.length)!=n?u(t,0):l(t,r);if("Buffer"===r.type&&o(r.data))return l(t,r.data)}var n;throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}(t,r)}function h(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,r){if(h(r),t=u(t,r<0?0:0|p(r)),!f.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function l(t,r){var e=r.length<0?0:0|p(r.length);t=u(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function p(t){if(t>=s())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+s().toString(16)+" bytes");return 0|t}function g(t,r){if(f.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return N(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return j(t).length;default:if(n)return N(t).length;r=(""+r).toLowerCase(),n=!0}}function d(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if((e>>>=0)<=(r>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return U(this,r,e);case"utf8":case"utf-8":return S(this,r,e);case"ascii":return T(this,r,e);case"latin1":case"binary":return B(this,r,e);case"base64":return P(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return I(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function y(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function w(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=f.from(r,n)),f.isBuffer(r))return 0===r.length?-1:v(t,r,e,n,i);if("number"==typeof r)return r&=255,f.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):v(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function v(t,r,e,n,i){var o,s=1,u=t.length,f=r.length;if(void 0!==n&&("ucs2"===(n=String(n).toLowerCase())||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;s=2,u/=2,f/=2,e/=2}function a(t,r){return 1===s?t[r]:t.readUInt16BE(r*s)}if(i){var h=-1;for(o=e;o<u;o++)if(a(t,o)===a(r,-1===h?0:o-h)){if(-1===h&&(h=o),o-h+1===f)return h*s}else-1!==h&&(o-=o-h),h=-1}else for(e+f>u&&(e=u-f),o=e;o>=0;o--){for(var c=!0,l=0;l<f;l++)if(a(t,o+l)!==a(r,l)){c=!1;break}if(c)return o}return-1}function b(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n))>i&&(n=i):n=i;var o=r.length;if(o%2!=0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var s=0;s<n;++s){var u=parseInt(r.substr(2*s,2),16);if(isNaN(u))return s;t[e+s]=u}return s}function m(t,r,e,n){return F(N(r,t.length-e),t,e,n)}function A(t,r,e,n){return F(function(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}(r),t,e,n)}function E(t,r,e,n){return A(t,r,e,n)}function _(t,r,e,n){return F(j(r),t,e,n)}function R(t,r,e,n){return F(function(t,r){for(var e,n,i,o=[],s=0;s<t.length&&!((r-=2)<0);++s)n=(e=t.charCodeAt(s))>>8,i=e%256,o.push(i),o.push(n);return o}(r,t.length-e),t,e,n)}function P(t,r,e){return 0===r&&e===t.length?n.fromByteArray(t):n.fromByteArray(t.slice(r,e))}function S(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o,s,u,f,a=t[i],h=null,c=a>239?4:a>223?3:a>191?2:1;if(i+c<=e)switch(c){case 1:a<128&&(h=a);break;case 2:128==(192&(o=t[i+1]))&&(f=(31&a)<<6|63&o)>127&&(h=f);break;case 3:o=t[i+1],s=t[i+2],128==(192&o)&&128==(192&s)&&(f=(15&a)<<12|(63&o)<<6|63&s)>2047&&(f<55296||f>57343)&&(h=f);break;case 4:o=t[i+1],s=t[i+2],u=t[i+3],128==(192&o)&&128==(192&s)&&128==(192&u)&&(f=(15&a)<<18|(63&o)<<12|(63&s)<<6|63&u)>65535&&f<1114112&&(h=f)}null===h?(h=65533,c=1):h>65535&&(h-=65536,n.push(h>>>10&1023|55296),h=56320|1023&h),n.push(h),i+=c}return function(t){var r=t.length;if(r<=4096)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=4096));return e}(n)}function T(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function B(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function U(t,r,e){var n,i=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>i)&&(e=i);for(var o="",s=r;s<e;++s)o+=(n=t[s])<16?"0"+n.toString(16):n.toString(16);return o}function I(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function O(t,r,e){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function Y(t,r,e,n,i,o){if(!f.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function C(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function x(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function M(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function D(t,r,e,n,o){return o||M(t,0,e,4),i.write(t,r,e,n,23,4),e+4}function L(t,r,e,n,o){return o||M(t,0,e,8),i.write(t,r,e,n,52,8),e+8}r.Buffer=f,r.SlowBuffer=function(t){return+t!=t&&(t=0),f.alloc(+t)},r.INSPECT_MAX_BYTES=50,f.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),r.kMaxLength=s(),f.poolSize=8192,f._augment=function(t){return t.__proto__=f.prototype,t},f.from=function(t,r,e){return a(null,t,r,e)},f.TYPED_ARRAY_SUPPORT&&(f.prototype.__proto__=Uint8Array.prototype,f.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&f[Symbol.species]===f&&Object.defineProperty(f,Symbol.species,{value:null,configurable:!0})),f.alloc=function(t,r,e){return function(t,r,e,n){return h(r),r<=0?u(null,r):void 0!==e?"string"==typeof n?u(null,r).fill(e,n):u(null,r).fill(e):u(null,r)}(0,t,r,e)},f.allocUnsafe=function(t){return c(null,t)},f.allocUnsafeSlow=function(t){return c(null,t)},f.isBuffer=function(t){return!(null==t||!t._isBuffer)},f.compare=function(t,r){if(!f.isBuffer(t)||!f.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},f.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},f.concat=function(t,r){if(!o(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return f.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=f.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var s=t[e];if(!f.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(n,i),i+=s.length}return n},f.byteLength=g,f.prototype._isBuffer=!0,f.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)y(this,r,r+1);return this},f.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)y(this,r,r+3),y(this,r+1,r+2);return this},f.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)y(this,r,r+7),y(this,r+1,r+6),y(this,r+2,r+5),y(this,r+3,r+4);return this},f.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?S(this,0,t):d.apply(this,arguments)},f.prototype.equals=function(t){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===f.compare(this,t)},f.prototype.inspect=function(){var t="",e=r.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,e).match(/.{2}/g).join(" "),this.length>e&&(t+=" ... ")),"<Buffer "+t+">"},f.prototype.compare=function(t,r,e,n,i){if(!f.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(this===t)return 0;for(var o=(i>>>=0)-(n>>>=0),s=(e>>>=0)-(r>>>=0),u=Math.min(o,s),a=this.slice(n,i),h=t.slice(r,e),c=0;c<u;++c)if(a[c]!==h[c]){o=a[c],s=h[c];break}return o<s?-1:s<o?1:0},f.prototype.includes=function(t,r,e){return-1!==this.indexOf(t,r,e)},f.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},f.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},f.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r|=0,isFinite(e)?(e|=0,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return b(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":return A(this,t,r,e);case"latin1":case"binary":return E(this,t,r,e);case"base64":return _(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return R(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},f.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},f.prototype.slice=function(t,r){var e,n=this.length;if((t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(r=void 0===r?n:~~r)<0?(r+=n)<0&&(r=0):r>n&&(r=n),r<t&&(r=t),f.TYPED_ARRAY_SUPPORT)(e=this.subarray(t,r)).__proto__=f.prototype;else{var i=r-t;e=new f(i,void 0);for(var o=0;o<i;++o)e[o]=this[o+t]}return e},f.prototype.readUIntLE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},f.prototype.readUIntBE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},f.prototype.readUInt8=function(t,r){return r||O(t,1,this.length),this[t]},f.prototype.readUInt16LE=function(t,r){return r||O(t,2,this.length),this[t]|this[t+1]<<8},f.prototype.readUInt16BE=function(t,r){return r||O(t,2,this.length),this[t]<<8|this[t+1]},f.prototype.readUInt32LE=function(t,r){return r||O(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},f.prototype.readUInt32BE=function(t,r){return r||O(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},f.prototype.readIntLE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n>=(i*=128)&&(n-=Math.pow(2,8*r)),n},f.prototype.readIntBE=function(t,r,e){t|=0,r|=0,e||O(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return o>=(i*=128)&&(o-=Math.pow(2,8*r)),o},f.prototype.readInt8=function(t,r){return r||O(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},f.prototype.readInt16LE=function(t,r){r||O(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt16BE=function(t,r){r||O(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},f.prototype.readInt32LE=function(t,r){return r||O(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},f.prototype.readInt32BE=function(t,r){return r||O(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},f.prototype.readFloatLE=function(t,r){return r||O(t,4,this.length),i.read(this,t,!0,23,4)},f.prototype.readFloatBE=function(t,r){return r||O(t,4,this.length),i.read(this,t,!1,23,4)},f.prototype.readDoubleLE=function(t,r){return r||O(t,8,this.length),i.read(this,t,!0,52,8)},f.prototype.readDoubleBE=function(t,r){return r||O(t,8,this.length),i.read(this,t,!1,52,8)},f.prototype.writeUIntLE=function(t,r,e,n){t=+t,r|=0,e|=0,n||Y(this,t,r,e,Math.pow(2,8*e)-1,0);var i=1,o=0;for(this[r]=255&t;++o<e&&(i*=256);)this[r+o]=t/i&255;return r+e},f.prototype.writeUIntBE=function(t,r,e,n){t=+t,r|=0,e|=0,n||Y(this,t,r,e,Math.pow(2,8*e)-1,0);var i=e-1,o=1;for(this[r+i]=255&t;--i>=0&&(o*=256);)this[r+i]=t/o&255;return r+e},f.prototype.writeUInt8=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,1,255,0),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},f.prototype.writeUInt16LE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):C(this,t,r,!0),r+2},f.prototype.writeUInt16BE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,2,65535,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):C(this,t,r,!1),r+2},f.prototype.writeUInt32LE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):x(this,t,r,!0),r+4},f.prototype.writeUInt32BE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,4,4294967295,0),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):x(this,t,r,!1),r+4},f.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);Y(this,t,r,e,i-1,-i)}var o=0,s=1,u=0;for(this[r]=255&t;++o<e&&(s*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/s>>0)-u&255;return r+e},f.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r|=0,!n){var i=Math.pow(2,8*e-1);Y(this,t,r,e,i-1,-i)}var o=e-1,s=1,u=0;for(this[r+o]=255&t;--o>=0&&(s*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/s>>0)-u&255;return r+e},f.prototype.writeInt8=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,1,127,-128),f.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},f.prototype.writeInt16LE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):C(this,t,r,!0),r+2},f.prototype.writeInt16BE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,2,32767,-32768),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):C(this,t,r,!1),r+2},f.prototype.writeInt32LE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,4,2147483647,-2147483648),f.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):x(this,t,r,!0),r+4},f.prototype.writeInt32BE=function(t,r,e){return t=+t,r|=0,e||Y(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),f.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):x(this,t,r,!1),r+4},f.prototype.writeFloatLE=function(t,r,e){return D(this,t,r,!0,e)},f.prototype.writeFloatBE=function(t,r,e){return D(this,t,r,!1,e)},f.prototype.writeDoubleLE=function(t,r,e){return L(this,t,r,!0,e)},f.prototype.writeDoubleBE=function(t,r,e){return L(this,t,r,!1,e)},f.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!f.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},f.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!f.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t&=255);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;var o;if(r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0),"number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var s=f.isBuffer(t)?t:N(new f(t,n).toString()),u=s.length;for(o=0;o<e-r;++o)this[o+r]=s[o%u]}return this};var k=/[^+\/0-9A-Za-z-_]/g;function N(t,r){var e;r=r||1/0;for(var n=t.length,i=null,o=[],s=0;s<n;++s){if((e=t.charCodeAt(s))>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(s+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=65536+(i-55296<<10|e-56320)}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function j(t){return n.toByteArray(function(t){if((t=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}(t).replace(k,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function F(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}}).call(this,e(76))},32:function(t,r,e){t.exports=e(126)()},329:function(t,r,e){"use strict";t.exports=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)}},335:function(t,r,e){"use strict";var n=e(53);r.createRoot=n.createRoot,r.hydrateRoot=n.hydrateRoot},414:function(t,r,e){"use strict";e.d(r,"b",(function(){return p})),e.d(r,"a",(function(){return g}));var n=e(0),i=e.n(n),o=e(200),s=e(7),u=e(208),f=(e(629),e(234));function a({id:t,feedState:r}){const[e,o]=Object(n.useState)(r);return i.a.createElement("div",{className:"spotlight-instagram-app"},i.a.createElement(f.a,{id:t,state:e,onUpdateState:o,autoDevice:!0,autoLoad:!0}))}var h=e(19),c=e(367),l=e(199);function p(t={}){const r=document.getElementsByClassName("spotlight-instagram-feed");for(let e=0,n=r.length||0;e<n;++e){const n=g(r[e],t);n&&(window.SpotlightInstagram.instances[e]=n)}}function g(t,r={}){const e=t.getAttribute("data-feed-var"),n="1"===t.getAttribute("data-analytics"),f=parseInt(t.getAttribute("data-instance")),p=y[g=e]=y.hasOwnProperty(g)?y[g]:d("sli__f__"+g);var g;const b=function(t){return w[t]=w.hasOwnProperty(t)?w[t]:d("sli__a__"+t)}(e),m=function(t){return v[t]=v.hasOwnProperty(t)?v[t]:d("sli__m__"+t)}(e);if(e&&"object"==typeof p&&Array.isArray(b)){if(t.children.length>0)if(r.reInit){const r=t.cloneNode();t.parentNode.append(r),t.remove(),t=r}else if(!r.silent)return console.warn("A Spotlight Instagram feed could not be created because its DOM node is not empty"),null;const g=h.b.getDevice(Object(u.b)()),d=s.b.forFrontApp(b);let y=new s.e(p,g,d,n,f);Object(c.a)(m)||([y]=y.load(m));const w={run(){const r=i.a.createElement(a,{id:"sli-feed-"+e,feedState:y});Object(l.a)(r,t)}};return Object(o.b)(()=>w.run()),w}return null}function d(t){const r=document.getElementById(t);return r&&r.hasAttribute("data-json")?JSON.parse(r.getAttribute("data-json")):null}window.SliFrontCtx||(window.SliFrontCtx={}),window.SliAccountInfo||(window.SliAccountInfo={}),window.SliPreloadedMedia||(window.SliPreloadedMedia={}),window.SpotlightInstagram||(window.SpotlightInstagram={instances:[],init:p,feed:g});const y=window.SliFrontCtx,w=window.SliAccountInfo,v=window.SliPreloadedMedia},53:function(t,r){t.exports=ReactDOM},629:function(t,r,e){t.exports={"spotlight-instagram-app":"spotlight-instagram-app"}},76:function(t,r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},868:function(t,r){t.exports=jQuery}},[[1240,3,1,2,0]]]);