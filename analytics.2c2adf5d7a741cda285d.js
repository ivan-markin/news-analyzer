!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=144)}([function(t,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return f})),e.d(n,"m",(function(){return s})),e.d(n,"n",(function(){return l})),e.d(n,"w",(function(){return p})),e.d(n,"e",(function(){return v})),e.d(n,"s",(function(){return y})),e.d(n,"k",(function(){return d})),e.d(n,"f",(function(){return g})),e.d(n,"d",(function(){return E})),e.d(n,"r",(function(){return w})),e.d(n,"p",(function(){return _})),e.d(n,"u",(function(){return x})),e.d(n,"o",(function(){return h})),e.d(n,"g",(function(){return m})),e.d(n,"y",(function(){return r})),e.d(n,"q",(function(){return o})),e.d(n,"i",(function(){return c})),e.d(n,"x",(function(){return i})),e.d(n,"j",(function(){return O})),e.d(n,"h",(function(){return R})),e.d(n,"l",(function(){return j})),e.d(n,"v",(function(){return b})),e.d(n,"t",(function(){return S}));let r={year:"numeric"},o={day:"numeric",month:"long"},i={weekday:"short"},c={day:"numeric"};const u="9cead7682b1d41998768f1d8b169fc12",a=new Date(Date.now()-5184e5).toISOString().slice(0,10),f=new Date(Date.now()).toISOString().slice(0,10),s=document.querySelector(".header-form"),l=document.querySelector(".header-form__input"),p=document.querySelector(".header-form__button"),d=document.querySelector(".error-bubble"),v=document.querySelector(".search-results__cards"),y=document.querySelector(".search-results__not-found"),g=document.querySelector(".search-results__results"),h=document.querySelector(".search-results__preloader-block"),x=document.querySelector(".search-results__show-more-button"),S=document.querySelector(".search-results__server-error"),m=document.querySelector(".main-carousel"),b=document.querySelectorAll(".main-carousel__side-fade"),E=document.querySelector(".head-keyword"),w=document.querySelector(".news-all"),_=document.querySelector(".news-titles"),O=Array.from(document.querySelectorAll(".analytics-table-diagrams__diagram")),R=Array.from(document.querySelectorAll(".analytics-table-diagrams__date")),j=document.querySelector(".error-element")},function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e(47))},function(t,n,e){var r=e(1),o=e(33),i=e(4),c=e(34),u=e(36),a=e(55),f=o("wks"),s=r.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,n,e){var r=e(3);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,n,e){var r=e(7),o=e(9),i=e(20);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(7),o=e(31),i=e(6),c=e(30),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(1),o=e(8),i=e(4),c=e(15),u=e(22),a=e(23),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,p=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(a?!p&&t[n]&&(f=!0):delete t[n],f?t[n]=e:o(t,n,e)):f?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},function(t,n,e){var r=e(51),o=e(1),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},function(t,n,e){var r=e(39),o=e(21);t.exports=function(t){return r(o(t))}},function(t,n){t.exports=!1},function(t,n,e){var r=e(1),o=e(8);t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},,function(t,n,e){var r=e(1),o=e(19).f,i=e(8),c=e(11),u=e(15),a=e(40),f=e(35);t.exports=function(t,n){var e,s,l,p,d,v=t.target,y=t.global,g=t.stat;if(e=y?r:g?r[v]||u(v,{}):(r[v]||{}).prototype)for(s in n){if(p=n[s],l=t.noTargetGet?(d=o(e,s))&&d.value:e[s],!f(y?s:v+(g?".":"#")+s,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;a(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),c(e,s,p,t)}}},function(t,n,e){var r=e(7),o=e(48),i=e(20),c=e(13),u=e(30),a=e(4),f=e(31),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(t){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,n,e){var r=e(32),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,n,e){var r,o,i,c=e(49),u=e(1),a=e(5),f=e(8),s=e(4),l=e(27),p=e(24),d=u.WeakMap;if(c){var v=new d,y=v.get,g=v.has,h=v.set;r=function(t,n){return h.call(v,t,n),n},o=function(t){return y.call(v,t)||{}},i=function(t){return g.call(v,t)}}else{var x=l("state");p[x]=!0,r=function(t,n){return f(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!a(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},function(t,n){t.exports={}},function(t,n,e){var r=e(28),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(1),o=e(5),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},function(t,n,e){var r=e(33),o=e(34),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(7),o=e(3),i=e(26);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,n,e){var r=e(1),o=e(15),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,n,e){var r=e(14),o=e(32);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},function(t,n,e){var r=e(3),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==f||e!=a&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},function(t,n,e){var r=e(3);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,n,e){var r=e(16);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},,function(t,n,e){var r=e(3),o=e(10),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,n,e){var r=e(4),o=e(50),i=e(19),c=e(9);t.exports=function(t,n){for(var e=o(n),u=c.f,a=i.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||u(t,s,a(n,s))}}},function(t,n,e){var r=e(4),o=e(13),i=e(52).indexOf,c=e(24);t.exports=function(t,n){var e,u=o(t),a=0,f=[];for(e in u)!r(c,e)&&r(u,e)&&f.push(e);for(;n.length>a;)r(u,e=n[a++])&&(~i(f,e)||f.push(e));return f}},,,function(t,n,e){var r=e(41),o=e(29).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,n,e){var r=e(21);t.exports=function(t){return Object(r(t))}},function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},function(t,n,e){var r=e(1),o=e(22),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,n,e){var r=e(12),o=e(44),i=e(54),c=e(6);t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},function(t,n,e){var r=e(1);t.exports=r},function(t,n,e){var r=e(13),o=e(25),i=e(53),c=function(t){return function(n,e,c){var u,a=r(n),f=o(a.length),s=i(c,f);if(t&&e!=e){for(;f>s;)if((u=a[s++])!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},function(t,n,e){var r=e(28),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(36);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,n,e){"use strict";var r=e(12),o=e(9),i=e(2),c=e(7),u=i("species");t.exports=function(t){var n=r(t),e=o.f;c&&n&&!n[u]&&e(n,u,{configurable:!0,get:function(){return this}})}},,,,,,,,,,function(t,n,e){var r=e(6),o=e(67);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,i){return r(e),o(i),n?t.call(e,i):e.__proto__=i,e}}():void 0)},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));class r{addData(t){localStorage.setItem("articles",JSON.stringify(t))}getData(){if(localStorage.articles&&"undefined"!==localStorage.articles)return JSON.parse(localStorage.getItem("articles"))}}},,,,,,,,,,,,,,,,,,,function(t,n,e){"use strict";var r=e(18),o=e(7),i=e(1),c=e(4),u=e(5),a=e(9).f,f=e(40),s=i.Symbol;if(o&&"function"==typeof s&&(!("description"in s.prototype)||void 0!==s().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof p?new s(t):void 0===t?s():s(t);return""===t&&(l[n]=!0),n};f(p,s);var d=p.prototype=s.prototype;d.constructor=p;var v=d.toString,y="Symbol(test)"==String(s("test")),g=/^Symbol\((.*)\)[^)]+$/;a(d,"description",{configurable:!0,get:function(){var t=u(this)?this.valueOf():this,n=v.call(t);if(c(l,t))return"";var e=y?n.slice(7,-1):n.replace(g,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:p})}},,,,,,,,function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){},function(t,n,e){var r=e(1),o=e(46),i=e(101),c=e(8);for(var u in o){var a=r[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(t){f.forEach=i}}},function(t,n,e){"use strict";var r=e(102).forEach,o=e(105),i=e(106),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,n,e){var r=e(37),o=e(39),i=e(45),c=e(25),u=e(103),a=[].push,f=function(t){var n=1==t,e=2==t,f=3==t,s=4==t,l=6==t,p=5==t||l;return function(d,v,y,g){for(var h,x,S=i(d),m=o(S),b=r(v,y,3),E=c(m.length),w=0,_=g||u,O=n?_(d,E):e?_(d,0):void 0;E>w;w++)if((p||w in m)&&(x=b(h=m[w],w,S),t))if(n)O[w]=x;else if(x)switch(t){case 3:return!0;case 5:return h;case 6:return w;case 2:a.call(O,h)}else if(s)return!1;return l?-1:f||s?s:O}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},function(t,n,e){var r=e(5),o=e(104),i=e(2)("species");t.exports=function(t,n){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)?r(e)&&null===(e=e[i])&&(e=void 0):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},function(t,n,e){var r=e(10);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){"use strict";var r=e(3);t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},function(t,n,e){var r=e(7),o=e(3),i=e(4),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,e.call(t,s,l)}))}},,,function(t,n,e){"use strict";var r=e(6);t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},function(t,n,e){"use strict";var r,o,i=e(109),c=e(112),u=RegExp.prototype.exec,a=String.prototype.replace,f=u,s=(r=/a/,o=/b*/g,u.call(r,"a"),u.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=c.UNSUPPORTED_Y||c.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(s||p||l)&&(f=function(t){var n,e,r,o,c=this,f=l&&c.sticky,d=i.call(c),v=c.source,y=0,g=t;return f&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),g=String(t).slice(c.lastIndex),c.lastIndex>0&&(!c.multiline||c.multiline&&"\n"!==t[c.lastIndex-1])&&(v="(?: "+v+")",g=" "+g,y++),e=new RegExp("^(?:"+v+")",d)),p&&(e=new RegExp("^"+v+"$(?!\\s)",d)),s&&(n=c.lastIndex),r=u.call(f?e:c,g),f?r?(r.input=r.input.slice(y),r[0]=r[0].slice(y),r.index=c.lastIndex,c.lastIndex+=r[0].length):c.lastIndex=0:s&&r&&(c.lastIndex=c.global?r.index+r[0].length:n),p&&r&&r.length>1&&a.call(r[0],e,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=f},,function(t,n,e){"use strict";var r=e(3);function o(t,n){return RegExp(t,n)}n.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),n.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},,,,,,,,,,,,,,,,,,,function(t,n,e){},function(t,n,e){var r=e(7),o=e(1),i=e(35),c=e(133),u=e(9).f,a=e(44).f,f=e(134),s=e(109),l=e(112),p=e(11),d=e(3),v=e(23).set,y=e(56),g=e(2)("match"),h=o.RegExp,x=h.prototype,S=/a/g,m=/a/g,b=new h(S)!==S,E=l.UNSUPPORTED_Y;if(r&&i("RegExp",!b||E||d((function(){return m[g]=!1,h(S)!=S||h(m)==m||"/a/i"!=h(S,"i")})))){for(var w=function(t,n){var e,r=this instanceof w,o=f(t),i=void 0===n;if(!r&&o&&t.constructor===w&&i)return t;b?o&&!i&&(t=t.source):t instanceof w&&(i&&(n=s.call(t)),t=t.source),E&&(e=!!n&&n.indexOf("y")>-1)&&(n=n.replace(/y/g,""));var u=c(b?new h(t,n):h(t,n),r?this:x,w);return E&&e&&v(u,{sticky:e}),u},_=function(t){t in w||u(w,t,{configurable:!0,get:function(){return h[t]},set:function(n){h[t]=n}})},O=a(h),R=0;O.length>R;)_(O[R++]);x.constructor=w,w.prototype=x,p(o,"RegExp",w)}y("RegExp")},function(t,n,e){var r=e(5),o=e(66);t.exports=function(t,n,e){var i,c;return o&&"function"==typeof(i=n.constructor)&&i!==e&&r(c=i.prototype)&&c!==e.prototype&&o(t,c),t}},function(t,n,e){var r=e(5),o=e(10),i=e(2)("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[i])?!!n:"RegExp"==o(t))}},function(t,n,e){"use strict";var r=e(11),o=e(6),i=e(3),c=e(109),u=RegExp.prototype,a=u.toString,f=i((function(){return"/a/b"!=a.call({source:"a",flags:"b"})})),s="toString"!=a.name;(f||s)&&r(RegExp.prototype,"toString",(function(){var t=o(this),n=String(t.source),e=t.flags;return"/"+n+"/"+String(void 0===e&&t instanceof RegExp&&!("flags"in u)?c.call(t):e)}),{unsafe:!0})},function(t,n,e){"use strict";var r=e(137),o=e(6),i=e(25),c=e(21),u=e(139),a=e(141);r("match",1,(function(t,n,e){return[function(n){var e=c(this),r=null==n?void 0:n[t];return void 0!==r?r.call(n,e):new RegExp(n)[t](String(e))},function(t){var r=e(n,t,this);if(r.done)return r.value;var c=o(t),f=String(this);if(!c.global)return a(c,f);var s=c.unicode;c.lastIndex=0;for(var l,p=[],d=0;null!==(l=a(c,f));){var v=String(l[0]);p[d]=v,""===v&&(c.lastIndex=u(f,i(c.lastIndex),s)),d++}return 0===d?null:p}]}))},function(t,n,e){"use strict";e(138);var r=e(11),o=e(3),i=e(2),c=e(110),u=e(8),a=i("species"),f=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),s="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),d=!o((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,n,e,l){var v=i(t),y=!o((function(){var n={};return n[v]=function(){return 7},7!=""[t](n)})),g=y&&!o((function(){var n=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[a]=function(){return e},e.flags="",e[v]=/./[v]),e.exec=function(){return n=!0,null},e[v](""),!n}));if(!y||!g||"replace"===t&&(!f||!s||p)||"split"===t&&!d){var h=/./[v],x=e(v,""[t],(function(t,n,e,r,o){return n.exec===c?y&&!o?{done:!0,value:h.call(n,e,r)}:{done:!0,value:t.call(e,n,r)}:{done:!1}}),{REPLACE_KEEPS_$0:s,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),S=x[0],m=x[1];r(String.prototype,t,S),r(RegExp.prototype,v,2==n?function(t,n){return m.call(t,this,n)}:function(t){return m.call(t,this)})}l&&u(RegExp.prototype[v],"sham",!0)}},function(t,n,e){"use strict";var r=e(18),o=e(110);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,n,e){"use strict";var r=e(140).charAt;t.exports=function(t,n,e){return n+(e?r(t,n).length:1)}},function(t,n,e){var r=e(28),o=e(21),i=function(t){return function(n,e){var i,c,u=String(o(n)),a=r(e),f=u.length;return a<0||a>=f?t?"":void 0:(i=u.charCodeAt(a))<55296||i>56319||a+1===f||(c=u.charCodeAt(a+1))<56320||c>57343?t?u.charAt(a):i:t?u.slice(a,a+2):c-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,n,e){var r=e(10),o=e(110);t.exports=function(t,n){var e=t.exec;if("function"==typeof e){var i=e.call(t,n);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,n)}},,,function(t,n,e){"use strict";e.r(n);e(131),e(95),e(96),e(97),e(98),e(99),e(87),e(132),e(135),e(136),e(100);var r=e(0);const o=new(e(68).a),i=new class{constructor(t){this.data=t.articles,this.oneDay=864e5}setDate(){r.h.reverse().forEach((t,n)=>{let e=new Date(Date.now()-this.oneDay*n);t.textContent=`${e.toLocaleDateString("ru",r.x)+", "+e.toLocaleDateString("ru",r.i)}`})}buildDiagrams(){r.j.reverse().forEach((t,n)=>{const e=this.data.filter(t=>{let e=new Date(Date.now()-this.oneDay*n);return t.publishedAt.slice(0,10)===e.toISOString().slice(0,10)}).filter(t=>{let n=new RegExp(localStorage.getItem("keyword"),"ig");return t.title.match(n)&&t.description.match(n)?t.title.match(n).concat(t.description.match(n)):t.title.match(n)?t.title.match(n):t.description.match(n)?t.description.match(n):[]});t.style.width=`${e.length}%`,t.textContent=`${e.length}`})}setHeaderData(){let t=new RegExp(localStorage.getItem("keyword"),"i");const n=this.data.filter(n=>n.title.match(t));r.d.textContent=localStorage.getItem("keyword"),r.r.textContent=this.data.length,r.p.textContent=n.length}}(o.getData());i.setHeaderData(),i.setDate(),i.buildDiagrams()}]);