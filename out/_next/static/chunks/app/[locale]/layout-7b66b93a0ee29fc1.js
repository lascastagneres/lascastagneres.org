(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[450],{1523:(e,t,r)=>{Promise.resolve().then(r.bind(r,3401)),Promise.resolve().then(r.bind(r,8193)),Promise.resolve().then(r.bind(r,8379)),Promise.resolve().then(r.bind(r,3145)),Promise.resolve().then(r.t.bind(r,5786,23)),Promise.resolve().then(r.t.bind(r,6098,23))},1535:(e,t,r)=>{"use strict";function a(e,t){var r=t&&t.cache?t.cache:c,a=t&&t.serializer?t.serializer:o;return(t&&t.strategy?t.strategy:function(e,t){var r,a,o=1===e.length?n:l;return r=t.cache.create(),a=t.serializer,o.bind(this,e,r,a)})(e,{cache:r,serializer:a})}function n(e,t,r,a){var n=null==a||"number"==typeof a||"boolean"==typeof a?a:r(a),l=t.get(n);return void 0===l&&(l=e.call(this,a),t.set(n,l)),l}function l(e,t,r){var a=Array.prototype.slice.call(arguments,3),n=r(a),l=t.get(n);return void 0===l&&(l=e.apply(this,a),t.set(n,l)),l}r.r(t),r.d(t,{memoize:()=>a,strategies:()=>u});var o=function(){return JSON.stringify(arguments)},i=function(){function e(){this.cache=Object.create(null)}return e.prototype.get=function(e){return this.cache[e]},e.prototype.set=function(e,t){this.cache[e]=t},e}(),c={create:function(){return new i}},u={variadic:function(e,t){var r,a;return r=t.cache.create(),a=t.serializer,l.bind(this,e,r,a)},monadic:function(e,t){var r,a;return r=t.cache.create(),a=t.serializer,n.bind(this,e,r,a)}}},8379:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});var a=r(7481),n=r(2115),l=r(7878);function o(e){let{locale:t,...r}=e;if(!t)throw Error("Failed to determine locale in `NextIntlClientProvider`, please provide the `locale` prop explicitly.\n\nSee https://next-intl.dev/docs/configuration#locale");return n.createElement(l.D,(0,a._)({locale:t},r))}},8175:(e,t)=>{"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)({}).hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(null,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.extends=r},1182:(e,t,r)=>{"use strict";var a=r(3142),n=r(1662),l=r(796);a.default,n.default,t.xp=l.default},477:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(8175),n=r(2115),l=r(7430),o=r(1070),i=r(9472),c=function(e){return e&&e.__esModule?e:{default:e}}(n);let u=n.forwardRef(function(e,t){let{locale:r,localePrefix:n,...u}=e,f=l.default(),s=r||f,d=o.getLocalePrefix(s,n);return c.default.createElement(i.default,a.extends({ref:t,locale:s,localePrefixMode:n.mode,prefix:d},u))});u.displayName="ClientLink",t.default=u},1662:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(8175),n=r(2115),l=r(7430),o=r(9860),i=r(5923),c=r(477),u=r(5559),f=r(532),s=r(897),d=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){let t=o.receiveRoutingConfig(e),r=o.receiveLocaleCookie(e.localeCookie);function m(){let e=l.default();if(!t.locales.includes(e))throw Error(void 0);return e}let h=n.forwardRef(function(e,n){let{href:l,locale:o,...u}=e,f=m(),s=o||f;return d.default.createElement(c.default,a.extends({ref:n,href:i.compileLocalizedPathname({locale:s,pathname:l,params:"object"==typeof l?l.params:void 0,pathnames:t.pathnames}),locale:o,localeCookie:r,localePrefix:t.localePrefix},u))});function p(e){let{href:r,locale:a}=e;return i.compileLocalizedPathname({...i.normalizeNameOrNameWithParams(r),locale:a,pathnames:t.pathnames})}return h.displayName="Link",{Link:h,redirect:function(e){let r=p({href:e,locale:m()});for(var a=arguments.length,n=Array(a>1?a-1:0),l=1;l<a;l++)n[l-1]=arguments[l];return u.clientRedirect({pathname:r,localePrefix:t.localePrefix},...n)},permanentRedirect:function(e){let r=p({href:e,locale:m()});for(var a=arguments.length,n=Array(a>1?a-1:0),l=1;l<a;l++)n[l-1]=arguments[l];return u.clientPermanentRedirect({pathname:r,localePrefix:t.localePrefix},...n)},usePathname:function(){let e=f.default(t),r=m();return n.useMemo(()=>e?i.getRoute(r,e,t.pathnames):e,[r,e])},useRouter:function(){let e=s.default(t.localePrefix,r),a=m();return n.useMemo(()=>({...e,push(t){for(var r,n=arguments.length,l=Array(n>1?n-1:0),o=1;o<n;o++)l[o-1]=arguments[o];let i=p({href:t,locale:(null===(r=l[0])||void 0===r?void 0:r.locale)||a});return e.push(i,...l)},replace(t){for(var r,n=arguments.length,l=Array(n>1?n-1:0),o=1;o<n;o++)l[o-1]=arguments[o];let i=p({href:t,locale:(null===(r=l[0])||void 0===r?void 0:r.locale)||a});return e.replace(i,...l)},prefetch(t){for(var r,n=arguments.length,l=Array(n>1?n-1:0),o=1;o<n;o++)l[o-1]=arguments[o];let i=p({href:t,locale:(null===(r=l[0])||void 0===r?void 0:r.locale)||a});return e.prefetch(i,...l)}}),[e,a])},getPathname:p}}},796:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(6046),n=r(2115),l=r(7430),o=r(4126),i=r(7657),c=r(5923),u=r(532);t.default=function(e){function t(){return l.default()}let{Link:r,config:f,getPathname:s,...d}=o.default(t,e);return{...d,Link:r,usePathname:function(){let e=u.default(f),r=t();return n.useMemo(()=>e&&f.pathnames?c.getRoute(r,e,f.pathnames):e,[r,e])},useRouter:function(){let e=a.useRouter(),r=t(),l=a.usePathname();return n.useMemo(()=>{function t(e){return function(t,a){let{locale:n,...o}=a||{},c=[s({href:t,locale:n||r,domain:window.location.host})];Object.keys(o).length>0&&c.push(o),e(...c),i.default(f.localeCookie,l,r,n)}}return{...e,push:t(e.push),replace:t(e.replace),prefetch:t(e.prefetch)}},[r,l,e])},getPathname:s}}},3142:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(8175),n=r(2115),l=r(9860),o=r(477),i=r(5559),c=r(532),u=r(897),f=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default=function(e){let t=l.receiveLocalePrefixConfig(null==e?void 0:e.localePrefix),r=l.receiveLocaleCookie(null==e?void 0:e.localeCookie),s=n.forwardRef(function(e,n){return f.default.createElement(o.default,a.extends({ref:n,localeCookie:r,localePrefix:t},e))});return s.displayName="Link",{Link:s,redirect:function(e){for(var r=arguments.length,a=Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return i.clientRedirect({pathname:e,localePrefix:t},...a)},permanentRedirect:function(e){for(var r=arguments.length,a=Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return i.clientPermanentRedirect({pathname:e,localePrefix:t},...a)},usePathname:function(){return c.default({localePrefix:t,defaultLocale:null==e?void 0:e.defaultLocale})},useRouter:function(){return u.default(t,r)}}}},5559:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(7430),n=r(4487);function l(e){return function(t){let r;try{r=a.default()}catch(e){throw e}for(var n=arguments.length,l=Array(n>1?n-1:0),o=1;o<n;o++)l[o-1]=arguments[o];return e({...t,locale:r},...l)}}let o=l(n.baseRedirect),i=l(n.basePermanentRedirect);t.clientPermanentRedirect=i,t.clientRedirect=o},532:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(6046),n=r(2115),l=r(7430),o=r(1070);t.default=function(e){let t=a.usePathname(),r=l.default();return n.useMemo(()=>{if(!t)return t;let a=t,n=o.getLocalePrefix(r,e.localePrefix);if(o.hasPathnamePrefixed(n,t))a=o.unprefixPathname(t,n);else if("as-needed"===e.localePrefix.mode&&e.localePrefix.prefixes){let e=o.getLocaleAsPrefix(r);o.hasPathnamePrefixed(e,t)&&(a=o.unprefixPathname(t,e))}return a},[e.localePrefix,r,t])}},897:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(6046),n=r(2115),l=r(7430),o=r(1070),i=r(7657),c=r(5923);t.default=function(e,t){let r=a.useRouter(),u=l.default(),f=a.usePathname();return n.useMemo(()=>{function a(r){return function(a,n){let{locale:l,...s}=n||{};i.default(t,f,u,l);let d=[function(t,r){let a=window.location.pathname,n=c.getBasePath(f);n&&(a=a.replace(n,""));let l=r||u,i=o.getLocalePrefix(l,e);return o.localizeHref(t,l,u,a,i)}(a,l)];return Object.keys(s).length>0&&d.push(s),r(...d)}}return{...r,push:a(r.push),replace:a(r.replace),prefetch:a(r.prefetch)}},[u,t,e,f,r])}},4095:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(8175),n=r(8173),l=r(6046),o=r(2115),i=r(7430),c=r(7657);function u(e){return e&&e.__esModule?e:{default:e}}var f=u(n),s=u(o),d=o.forwardRef(function(e,t){let{defaultLocale:r,href:n,locale:u,localeCookie:d,onClick:m,prefetch:h,unprefixed:p,...v}=e,g=i.default(),P=null!=u&&u!==g,y=u||g,x=function(){let[e,t]=o.useState();return o.useEffect(()=>{t(window.location.host)},[]),e}(),b=x&&p&&(p.domains[x]===y||!Object.keys(p.domains).includes(x)&&g===r&&!u)?p.pathname:n,_=l.usePathname();return P&&(h=!1),s.default.createElement(f.default,a.extends({ref:t,href:b,hrefLang:P?u:void 0,onClick:function(e){c.default(d,_,g,u),m&&m(e)},prefetch:h},v))});t.default=d},9472:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(8175),n=r(6046),l=r(2115),o=r(7430),i=r(1070),c=r(4095),u=function(e){return e&&e.__esModule?e:{default:e}}(l);let f=l.forwardRef(function(e,t){let{href:r,locale:f,localeCookie:s,localePrefixMode:d,prefix:m,...h}=e,p=n.usePathname(),v=o.default(),g=f!==v,[P,y]=l.useState(()=>i.isLocalizableHref(r)&&("never"!==d||g)?i.prefixHref(r,m):r);return l.useEffect(()=>{p&&y(i.localizeHref(r,f,v,p,m))},[v,r,f,p,m]),u.default.createElement(c.default,a.extends({ref:t,href:P,locale:f,localeCookie:s},h))});f.displayName="ClientLink",t.default=f},4126:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(8175),n=r(6046),l=r(2115),o=r(9860),i=r(1070),c=r(4095),u=r(5923),f=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=function(e,t){let r=o.receiveRoutingConfig(t||{}),s=r.pathnames,d="as-needed"===r.localePrefix.mode&&r.domains||void 0,m=l.forwardRef(function(t,n){let o,u,{href:m,locale:p,...v}=t;"object"==typeof m?(o=m.pathname,u=m.params):o=m;let g=i.isLocalizableHref(m),P=e(),y=P instanceof Promise?l.use(P):P,x=g?h({locale:p||y,href:null==s?o:{pathname:o,params:u}},null!=p||d||void 0):o;return f.default.createElement(c.default,a.extends({ref:n,defaultLocale:r.defaultLocale,href:"object"==typeof m?{...m,pathname:x}:x,locale:p,localeCookie:r.localeCookie,unprefixed:d&&g?{domains:r.domains.reduce((e,t)=>(e[t.domain]=t.defaultLocale,e),{}),pathname:h({locale:y,href:null==s?o:{pathname:o,params:u}},!1)}:void 0},v))});function h(e,t){let a;let{href:n,locale:l}=e;return null==s?"object"==typeof n?(a=n.pathname,n.query&&(a+=u.serializeSearchParams(n.query))):a=n:a=u.compileLocalizedPathname({locale:l,...u.normalizeNameOrNameWithParams(n),pathnames:r.pathnames}),u.applyPathnamePrefix(a,l,r,e.domain,t)}function p(e){return function(t){for(var r=arguments.length,a=Array(r>1?r-1:0),n=1;n<r;n++)a[n-1]=arguments[n];return e(h(t,t.domain?void 0:d),...a)}}return{config:r,Link:m,redirect:p(n.redirect),permanentRedirect:p(n.permanentRedirect),getPathname:h}}},4487:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(6046),n=r(1070);function l(e){return function(t){let r=n.getLocalePrefix(t.locale,t.localePrefix),a="never"!==t.localePrefix.mode&&n.isLocalizableHref(t.pathname)?n.prefixPathname(r,t.pathname):t.pathname;for(var l=arguments.length,o=Array(l>1?l-1:0),i=1;i<l;i++)o[i-1]=arguments[i];return e(a,...o)}}let o=l(a.redirect),i=l(a.permanentRedirect);t.basePermanentRedirect=i,t.baseRedirect=o},7657:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(5923);t.default=function(e,t,r,n){if(!e||!(n!==r&&null!=n)||!t)return;let l=a.getBasePath(t),{name:o,...i}=e;i.path||(i.path=""!==l?l:"/");let c="".concat(o,"=").concat(n,";");for(let[e,t]of Object.entries(i))c+="".concat("maxAge"===e?"max-age":e),"boolean"!=typeof t&&(c+="="+t),c+=";";document.cookie=c}},5923:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(1070);function n(e){let t=new URLSearchParams;for(let[r,a]of Object.entries(e))Array.isArray(a)?a.forEach(e=>{t.append(r,String(e))}):t.set(r,String(a));return"?"+t.toString()}t.applyPathnamePrefix=function(e,t,r,n,l){let o;let{mode:i}=r.localePrefix;if(void 0!==l)o=l;else if(a.isLocalizableHref(e)){if("always"===i)o=!0;else if("as-needed"===i){let e=r.defaultLocale;if(r.domains){let t=r.domains.find(e=>e.domain===n);t&&(e=t.defaultLocale)}o=e!==t}}return o?a.prefixPathname(a.getLocalePrefix(t,r.localePrefix),e):e},t.compileLocalizedPathname=function(e){let{pathname:t,locale:r,params:l,pathnames:o,query:i}=e;function c(e){let t=o[e];return t||(t=e),t}function u(e){let t="string"==typeof e?e:e[r];return l&&Object.entries(l).forEach(e=>{let r,a,[n,l]=e;Array.isArray(l)?(r="(\\[)?\\[...".concat(n,"\\](\\])?"),a=l.map(e=>String(e)).join("/")):(r="\\[".concat(n,"\\]"),a=String(l)),t=t.replace(RegExp(r,"g"),a)}),t=t.replace(/\[\[\.\.\..+\]\]/g,""),t=a.normalizeTrailingSlash(t),i&&(t+=n(i)),t}if("string"==typeof t)return u(c(t));{let{pathname:e,...r}=t;return{...r,pathname:u(c(e))}}},t.getBasePath=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.pathname;return"/"===e?t:t.replace(e,"")},t.getRoute=function(e,t,r){let n=a.getSortedPathnames(Object.keys(r)),l=decodeURI(t);for(let t of n){let n=r[t];if("string"==typeof n){if(a.matchesPathname(n,l))return t}else if(a.matchesPathname(n[e],l))return t}return t},t.normalizeNameOrNameWithParams=function(e){return"string"==typeof e?{pathname:e}:e},t.serializeSearchParams=n},7430:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(6046),n=r(2343),l=r(3582);t.default=function(){let e;let t=a.useParams();try{e=n.useLocale()}catch(r){if("string"!=typeof(null==t?void 0:t[l.LOCALE_SEGMENT_NAME]))throw r;e=t[l.LOCALE_SEGMENT_NAME]}return e}},5433:(e,t,r)=>{"use strict";var a=r(7645);t.o=a.default},9860:(e,t)=>{"use strict";function r(e){return!(null!=e&&!e)&&{name:"NEXT_LOCALE",maxAge:31536e3,sameSite:"lax",..."object"==typeof e&&e}}function a(e){return"object"==typeof e?e:{mode:e||"always"}}Object.defineProperty(t,"__esModule",{value:!0}),t.receiveLocaleCookie=r,t.receiveLocalePrefixConfig=a,t.receiveRoutingConfig=function(e){var t,n;return{...e,localePrefix:a(e.localePrefix),localeCookie:r(e.localeCookie),localeDetection:null===(t=e.localeDetection)||void 0===t||t,alternateLinks:null===(n=e.alternateLinks)||void 0===n||n}}},7645:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e}},3582:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.HEADER_LOCALE_NAME="X-NEXT-INTL-LOCALE",t.LOCALE_SEGMENT_NAME="locale"},1070:(e,t,r)=>{"use strict";var a=r(2818);function n(e){return("object"==typeof e?null==e.host&&null==e.hostname:!/^[a-z]+:/i.test(e))&&!function(e){let t="object"==typeof e?e.pathname:e;return null!=t&&!t.startsWith("/")}(e)}function l(e,t){let r;return"string"==typeof e?r=o(t,e):(r={...e},e.pathname&&(r.pathname=o(t,e.pathname))),r}function o(e,t){let r=e;return/^\/(\?.*)?$/.test(t)&&(t=t.slice(1)),r+=t}function i(e,t){return t===e||t.startsWith("".concat(e,"/"))}function c(e){let t=function(){try{return"true"===a.env._next_intl_trailing_slash}catch(e){return!1}}();if("/"!==e){let r=e.endsWith("/");t&&!r?e+="/":!t&&r&&(e=e.slice(0,-1))}return e}function u(e){return"/"+e}function f(e){let t=e.replace(/\[\[(\.\.\.[^\]]+)\]\]/g,"?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g,"(.+)").replace(/\[([^\]]+)\]/g,"([^/]+)");return new RegExp("^".concat(t,"$"))}function s(e){return e.includes("[[...")}function d(e){return e.includes("[...")}function m(e){return e.includes("[")}function h(e,t){let r=e.split("/"),a=t.split("/"),n=Math.max(r.length,a.length);for(let e=0;e<n;e++){let t=r[e],n=a[e];if(!t&&n)return -1;if(t&&!n)return 1;if(t||n){if(!m(t)&&m(n))return -1;if(m(t)&&!m(n))return 1;if(!d(t)&&d(n))return -1;if(d(t)&&!d(n))return 1;if(!s(t)&&s(n))return -1;if(s(t)&&!s(n))return 1}}return 0}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocaleAsPrefix=u,t.getLocalePrefix=function(e,t){var r;return"never"!==t.mode&&(null===(r=t.prefixes)||void 0===r?void 0:r[e])||u(e)},t.getSortedPathnames=function(e){return e.sort(h)},t.hasPathnamePrefixed=i,t.isLocalizableHref=n,t.localizeHref=function(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t,a=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;if(!n(e))return e;let c=i(o,a);return(t!==r||c)&&null!=o?l(e,o):e},t.matchesPathname=function(e,t){let r=c(e),a=c(t);return f(r).test(a)},t.normalizeTrailingSlash=c,t.prefixHref=l,t.prefixPathname=o,t.templateToRegex=f,t.unprefixPathname=function(e,t){return e.replace(new RegExp("^".concat(t)),"")||"/"}},2343:(e,t,r)=>{"use strict";e.exports=r(985)},7878:(e,t,r)=>{"use strict";var a=r(2115),n=r(3398),l=r(3351);r(1535);var o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.D=function(e){let{children:t,defaultTranslationValues:r,formats:i,getMessageFallback:c,locale:u,messages:f,now:s,onError:d,timeZone:m}=e,h=a.useMemo(()=>n.createCache(),[u]),p=a.useMemo(()=>n.createIntlFormatters(h),[h]),v=a.useMemo(()=>({...n.initializeConfig({locale:u,defaultTranslationValues:r,formats:i,getMessageFallback:c,messages:f,now:s,onError:d,timeZone:m}),formatters:p,cache:h}),[h,r,i,p,c,u,f,s,d,m]);return o.default.createElement(l.IntlContext.Provider,{value:v},t)}},3398:(e,t,r)=>{"use strict";var a=r(1535);function n(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(Boolean).join(".")}function l(e){return n(e.namespace,e.key)}function o(e){console.error(e)}function i(e,t){return a.memoize(e,{cache:{create:()=>({get:e=>t[e],set(e,r){t[e]=r}})},strategy:a.strategies.variadic})}function c(e,t){return i(function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];return new e(...r)},t)}t.createCache=function(){return{dateTime:{},number:{},message:{},relativeTime:{},pluralRules:{},list:{},displayNames:{}}},t.createIntlFormatters=function(e){return{getDateTimeFormat:c(Intl.DateTimeFormat,e.dateTime),getNumberFormat:c(Intl.NumberFormat,e.number),getPluralRules:c(Intl.PluralRules,e.pluralRules),getRelativeTimeFormat:c(Intl.RelativeTimeFormat,e.relativeTime),getListFormat:c(Intl.ListFormat,e.list),getDisplayNames:c(Intl.DisplayNames,e.displayNames)}},t.defaultGetMessageFallback=l,t.defaultOnError=o,t.initializeConfig=function(e){let{getMessageFallback:t,messages:r,onError:a,...n}=e;return{...n,messages:r,onError:a||o,getMessageFallback:t||l}},t.joinPath=n,t.memoFn=i},3145:(e,t,r)=>{"use strict";r.d(t,{default:()=>d});var a=r(5155),n=r(1182);let l=(0,r(5433).o)({locales:["en","es","it","fr"],defaultLocale:"fr"}),{Link:o,redirect:i,usePathname:c,useRouter:u}=(0,n.xp)(l);var f=r(6046),s=r(2115);let d=()=>{var e;let[t,r]=(0,s.useState)(!1),n=null===(e=(0,f.usePathname)().split("/")[1])||void 0===e?void 0:e.toUpperCase();return(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)("button",{onClick:()=>r(!t),className:"w-16 h-16 border border-gray-300 bg-white text-black font-semibold shadow-md hover:bg-gray-100",children:n}),t&&(0,a.jsx)("div",{className:"absolute right-0 mt-2 w-16 bg-white border border-gray-300 shadow-lg",children:(0,a.jsx)("ul",{className:"text-center text-sm",children:["fr","en","es","it"].map(e=>(0,a.jsx)("li",{children:(0,a.jsx)(o,{href:"/",locale:e,className:"block py-2 hover:bg-gray-100",onClick:()=>r(!1),children:e.toUpperCase()})}))})})]})}},5786:()=>{},6098:e=>{e.exports={style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"},className:"__className_a685e7"}}},e=>{var t=t=>e(e.s=t);e.O(0,[789,193,441,517,358],()=>t(1523)),_N_E=e.O()}]);