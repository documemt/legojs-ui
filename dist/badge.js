(function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{},id:n,loaded:false};e[n].call(o.exports,o,o.exports,r);o.loaded=true;return o.exports}r.m=e;r.c=t;r.p="./";return r(0)})([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();var o=a(["<div>\n          ","\n        </div>"],["<div>\n          ","\n        </div>"]),i=a(['<a id="','" href="#/home" style="display:block;">',"</a>\n"],['<a id="','" href="#/home" style="display:block;">',"</a>\\n"]);r(1);function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function u(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function f(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function c(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var l=function(e){c(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};u(this,t);var r={events:{"click #400":"theClick"}};$.extend(true,r,e);return f(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,r))}n(t,[{key:"render",value:function e(){var t=this.data.list||[];var r=hx(o,t.map(function(e,t){return hx(i,e.first,e.first)}));return r}},{key:"theClick",value:function e(t){t.stopPropagation();Lego.trigger("data_update",{aa:1})}}]);return t}(Lego.View);t.default=l},function(e,t){}]);