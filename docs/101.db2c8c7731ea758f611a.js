/*! For license information please see 101.db2c8c7731ea758f611a.js.LICENSE.txt */
(self.webpackChunkyanxiaolazy_github_io=self.webpackChunkyanxiaolazy_github_io||[]).push([[101],{5666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",a=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function c(t,e,r,n){var i=e&&e.prototype instanceof g?e:g,o=Object.create(i.prototype),a=new L(n||[]);return o._invoke=function(t,e,r){var n=l;return function(i,o){if(n===d)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return T()}for(r.method=i,r.arg=o;;){var a=r.delegate;if(a){var s=E(a,r);if(s){if(s===b)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===b)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}(t,r,a),o}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",b={};function g(){}function v(){}function _(){}var y={};y[o]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(R([])));w&&w!==r&&n.call(w,o)&&(y=w);var x=_.prototype=g.prototype=Object.create(y);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function A(t,e){function r(i,o,a,s){var u=f(t[i],t,o);if("throw"!==u.type){var c=u.arg,l=c.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(l).then((function(t){c.value=t,a(c)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}var i;this._invoke=function(t,n){function o(){return new e((function(e,i){r(t,n,e,i)}))}return i=i?i.then(o,o):o()}}function E(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,E(t,r),"throw"===r.method))return b;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return b}var i=f(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,b;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,b):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,b)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function R(t){if(t){var r=t[o];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var i=-1,a=function r(){for(;++i<t.length;)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return v.prototype=x.constructor=_,_.constructor=v,v.displayName=u(_,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,u(t,s,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},k(A.prototype),A.prototype[a]=function(){return this},t.AsyncIterator=A,t.async=function(e,r,n,i,o){void 0===o&&(o=Promise);var a=new A(c(e,r,n,i),o);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),u(x,s,"Generator"),x[o]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=R,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(u&&c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return i(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;S(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:R(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}},1033:(t,e,r)=>{"use strict";r.d(e,{Z:()=>k});var n=function(){if("undefined"!=typeof Map)return Map;function t(t,e){var r=-1;return t.some((function(t,n){return t[0]===e&&(r=n,!0)})),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(e){var r=t(this.__entries__,e),n=this.__entries__[r];return n&&n[1]},e.prototype.set=function(e,r){var n=t(this.__entries__,e);~n?this.__entries__[n][1]=r:this.__entries__.push([e,r])},e.prototype.delete=function(e){var r=this.__entries__,n=t(r,e);~n&&r.splice(n,1)},e.prototype.has=function(e){return!!~t(this.__entries__,e)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(t,e){void 0===e&&(e=null);for(var r=0,n=this.__entries__;r<n.length;r++){var i=n[r];t.call(e,i[1],i[0])}},e}()}(),i="undefined"!=typeof window&&"undefined"!=typeof document&&window.document===document,o=void 0!==r.g&&r.g.Math===Math?r.g:"undefined"!=typeof self&&self.Math===Math?self:"undefined"!=typeof window&&window.Math===Math?window:Function("return this")(),a="function"==typeof requestAnimationFrame?requestAnimationFrame.bind(o):function(t){return setTimeout((function(){return t(Date.now())}),1e3/60)},s=["top","right","bottom","left","width","height","size","weight"],u="undefined"!=typeof MutationObserver,c=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=function(t,e){var r=!1,n=!1,i=0;function o(){r&&(r=!1,t()),n&&u()}function s(){a(o)}function u(){var t=Date.now();if(r){if(t-i<2)return;n=!0}else r=!0,n=!1,setTimeout(s,20);i=t}return u}(this.refresh.bind(this))}return t.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},t.prototype.removeObserver=function(t){var e=this.observers_,r=e.indexOf(t);~r&&e.splice(r,1),!e.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){this.updateObservers_()&&this.refresh()},t.prototype.updateObservers_=function(){var t=this.observers_.filter((function(t){return t.gatherActive(),t.hasActive()}));return t.forEach((function(t){return t.broadcastActive()})),t.length>0},t.prototype.connect_=function(){i&&!this.connected_&&(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),u?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){i&&this.connected_&&(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(t){var e=t.propertyName,r=void 0===e?"":e;s.some((function(t){return!!~r.indexOf(t)}))&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),f=function(t,e){for(var r=0,n=Object.keys(e);r<n.length;r++){var i=n[r];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},l=function(t){return t&&t.ownerDocument&&t.ownerDocument.defaultView||o},h=v(0,0,0,0);function d(t){return parseFloat(t)||0}function p(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return e.reduce((function(e,r){return e+d(t["border-"+r+"-width"])}),0)}var b="undefined"!=typeof SVGGraphicsElement?function(t){return t instanceof l(t).SVGGraphicsElement}:function(t){return t instanceof l(t).SVGElement&&"function"==typeof t.getBBox};function g(t){return i?b(t)?function(t){var e=t.getBBox();return v(0,0,e.width,e.height)}(t):function(t){var e=t.clientWidth,r=t.clientHeight;if(!e&&!r)return h;var n=l(t).getComputedStyle(t),i=function(t){for(var e={},r=0,n=["top","right","bottom","left"];r<n.length;r++){var i=n[r],o=t["padding-"+i];e[i]=d(o)}return e}(n),o=i.left+i.right,a=i.top+i.bottom,s=d(n.width),u=d(n.height);if("border-box"===n.boxSizing&&(Math.round(s+o)!==e&&(s-=p(n,"left","right")+o),Math.round(u+a)!==r&&(u-=p(n,"top","bottom")+a)),!function(t){return t===l(t).document.documentElement}(t)){var c=Math.round(s+o)-e,f=Math.round(u+a)-r;1!==Math.abs(c)&&(s-=c),1!==Math.abs(f)&&(u-=f)}return v(i.left,i.top,s,u)}(t):h}function v(t,e,r,n){return{x:t,y:e,width:r,height:n}}var _=function(){function t(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=v(0,0,0,0),this.target=t}return t.prototype.isActive=function(){var t=g(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},t}(),y=function(t,e){var r,n,i,o,a,s,u,c=(n=(r=e).x,i=r.y,o=r.width,a=r.height,s="undefined"!=typeof DOMRectReadOnly?DOMRectReadOnly:Object,u=Object.create(s.prototype),f(u,{x:n,y:i,width:o,height:a,top:i,right:n+o,bottom:a+i,left:n}),u);f(this,{target:t,contentRect:c})},m=function(){function t(t,e,r){if(this.activeObservations_=[],this.observations_=new n,"function"!=typeof t)throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=e,this.callbackCtx_=r}return t.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)||(e.set(t,new _(t)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if("undefined"!=typeof Element&&Element instanceof Object){if(!(t instanceof l(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var e=this.observations_;e.has(t)&&(e.delete(t),e.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach((function(e){e.isActive()&&t.activeObservations_.push(e)}))},t.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,e=this.activeObservations_.map((function(t){return new y(t.target,t.broadcastRect())}));this.callback_.call(t,e,t),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),w="undefined"!=typeof WeakMap?new WeakMap:new n,x=function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var r=c.getInstance(),n=new m(e,r,this);w.set(this,n)};["observe","unobserve","disconnect"].forEach((function(t){x.prototype[t]=function(){var e;return(e=w.get(this))[t].apply(e,arguments)}}));const k=void 0!==o.ResizeObserver?o.ResizeObserver:x},8273:(t,e,r)=>{"use strict";function n(t){return"/"===t.charAt(0)}function i(t,e){for(var r=e,n=r+1,i=t.length;n<i;r+=1,n+=1)t[r]=t[n];t.pop()}r.d(e,{Z:()=>o});const o=function(t,e){void 0===e&&(e="");var r,o=t&&t.split("/")||[],a=e&&e.split("/")||[],s=t&&n(t),u=e&&n(e),c=s||u;if(t&&n(t)?a=o:o.length&&(a.pop(),a=a.concat(o)),!a.length)return"/";if(a.length){var f=a[a.length-1];r="."===f||".."===f||""===f}else r=!1;for(var l=0,h=a.length;h>=0;h--){var d=a[h];"."===d?i(a,h):".."===d?(i(a,h),l++):l&&(i(a,h),l--)}if(!c)for(;l--;l)a.unshift("..");!c||""===a[0]||a[0]&&n(a[0])||a.unshift("");var p=a.join("/");return r&&"/"!==p.substr(-1)&&(p+="/"),p}},53:(t,e)=>{"use strict";var r,n,i,o;if("object"==typeof performance&&"function"==typeof performance.now){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,u=s.now();e.unstable_now=function(){return s.now()-u}}if("undefined"==typeof window||"function"!=typeof MessageChannel){var c=null,f=null,l=function(){if(null!==c)try{var t=e.unstable_now();c(!0,t),c=null}catch(t){throw setTimeout(l,0),t}};r=function(t){null!==c?setTimeout(r,0,t):(c=t,setTimeout(l,0))},n=function(t,e){f=setTimeout(t,e)},i=function(){clearTimeout(f)},e.unstable_shouldYield=function(){return!1},o=e.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if("undefined"!=typeof console){var p=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),"function"!=typeof p&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var b=!1,g=null,v=-1,_=5,y=0;e.unstable_shouldYield=function(){return e.unstable_now()>=y},o=function(){},e.unstable_forceFrameRate=function(t){0>t||125<t?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<t?Math.floor(1e3/t):5};var m=new MessageChannel,w=m.port2;m.port1.onmessage=function(){if(null!==g){var t=e.unstable_now();y=t+_;try{g(!0,t)?w.postMessage(null):(b=!1,g=null)}catch(t){throw w.postMessage(null),t}}else b=!1},r=function(t){g=t,b||(b=!0,w.postMessage(null))},n=function(t,r){v=h((function(){t(e.unstable_now())}),r)},i=function(){d(v),v=-1}}function x(t,e){var r=t.length;t.push(e);t:for(;;){var n=r-1>>>1,i=t[n];if(!(void 0!==i&&0<E(i,e)))break t;t[n]=e,t[r]=i,r=n}}function k(t){return void 0===(t=t[0])?null:t}function A(t){var e=t[0];if(void 0!==e){var r=t.pop();if(r!==e){t[0]=r;t:for(var n=0,i=t.length;n<i;){var o=2*(n+1)-1,a=t[o],s=o+1,u=t[s];if(void 0!==a&&0>E(a,r))void 0!==u&&0>E(u,a)?(t[n]=u,t[s]=r,n=s):(t[n]=a,t[o]=r,n=o);else{if(!(void 0!==u&&0>E(u,r)))break t;t[n]=u,t[s]=r,n=s}}}return e}return null}function E(t,e){var r=t.sortIndex-e.sortIndex;return 0!==r?r:t.id-e.id}var O=[],S=[],L=1,R=null,T=3,M=!1,F=!1,j=!1;function H(t){for(var e=k(S);null!==e;){if(null===e.callback)A(S);else{if(!(e.startTime<=t))break;A(S),e.sortIndex=e.expirationTime,x(O,e)}e=k(S)}}function C(t){if(j=!1,H(t),!F)if(null!==k(O))F=!0,r(P);else{var e=k(S);null!==e&&n(C,e.startTime-t)}}function P(t,r){F=!1,j&&(j=!1,i()),M=!0;var o=T;try{for(H(r),R=k(O);null!==R&&(!(R.expirationTime>r)||t&&!e.unstable_shouldYield());){var a=R.callback;if("function"==typeof a){R.callback=null,T=R.priorityLevel;var s=a(R.expirationTime<=r);r=e.unstable_now(),"function"==typeof s?R.callback=s:R===k(O)&&A(O),H(r)}else A(O);R=k(O)}if(null!==R)var u=!0;else{var c=k(S);null!==c&&n(C,c.startTime-r),u=!1}return u}finally{R=null,T=o,M=!1}}var I=o;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(t){t.callback=null},e.unstable_continueExecution=function(){F||M||(F=!0,r(P))},e.unstable_getCurrentPriorityLevel=function(){return T},e.unstable_getFirstCallbackNode=function(){return k(O)},e.unstable_next=function(t){switch(T){case 1:case 2:case 3:var e=3;break;default:e=T}var r=T;T=e;try{return t()}finally{T=r}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=I,e.unstable_runWithPriority=function(t,e){switch(t){case 1:case 2:case 3:case 4:case 5:break;default:t=3}var r=T;T=t;try{return e()}finally{T=r}},e.unstable_scheduleCallback=function(t,o,a){var s=e.unstable_now();switch(a="object"==typeof a&&null!==a&&"number"==typeof(a=a.delay)&&0<a?s+a:s,t){case 1:var u=-1;break;case 2:u=250;break;case 5:u=1073741823;break;case 4:u=1e4;break;default:u=5e3}return t={id:L++,callback:o,priorityLevel:t,startTime:a,expirationTime:u=a+u,sortIndex:-1},a>s?(t.sortIndex=a,x(S,t),null===k(O)&&t===k(S)&&(j?i():j=!0,n(C,a-s))):(t.sortIndex=u,x(O,t),F||M||(F=!0,r(P))),t},e.unstable_wrapCallback=function(t){var e=T;return function(){var r=T;T=e;try{return t.apply(this,arguments)}finally{T=r}}}},3840:(t,e,r)=>{"use strict";t.exports=r(53)},6774:t=>{t.exports=function(t,e,r,n){var i=r?r.call(n,t,e):void 0;if(void 0!==i)return!!i;if(t===e)return!0;if("object"!=typeof t||!t||"object"!=typeof e||!e)return!1;var o=Object.keys(t),a=Object.keys(e);if(o.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(e),u=0;u<o.length;u++){var c=o[u];if(!s(c))return!1;var f=t[c],l=e[c];if(!1===(i=r?r.call(n,f,l,c):void 0)||void 0===i&&f!==l)return!1}return!0}},2177:(t,e,r)=>{"use strict";r.d(e,{Z:()=>n});const n=function(t,e){if(!t)throw new Error("Invariant failed")}},7621:(t,e,r)=>{var n;!function(i){var o=/^\s+/,a=/\s+$/,s=0,u=i.round,c=i.min,f=i.max,l=i.random;function h(t,e){if(e=e||{},(t=t||"")instanceof h)return t;if(!(this instanceof h))return new h(t,e);var r=function(t){var e,r,n,s={r:0,g:0,b:0},u=1,l=null,h=null,d=null,p=!1,b=!1;return"string"==typeof t&&(t=function(t){t=t.replace(o,"").replace(a,"").toLowerCase();var e,r=!1;if(T[t])t=T[t],r=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(e=B.rgb.exec(t))?{r:e[1],g:e[2],b:e[3]}:(e=B.rgba.exec(t))?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=B.hsl.exec(t))?{h:e[1],s:e[2],l:e[3]}:(e=B.hsla.exec(t))?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=B.hsv.exec(t))?{h:e[1],s:e[2],v:e[3]}:(e=B.hsva.exec(t))?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=B.hex8.exec(t))?{r:C(e[1]),g:C(e[2]),b:C(e[3]),a:q(e[4]),format:r?"name":"hex8"}:(e=B.hex6.exec(t))?{r:C(e[1]),g:C(e[2]),b:C(e[3]),format:r?"name":"hex"}:(e=B.hex4.exec(t))?{r:C(e[1]+""+e[1]),g:C(e[2]+""+e[2]),b:C(e[3]+""+e[3]),a:q(e[4]+""+e[4]),format:r?"name":"hex8"}:!!(e=B.hex3.exec(t))&&{r:C(e[1]+""+e[1]),g:C(e[2]+""+e[2]),b:C(e[3]+""+e[3]),format:r?"name":"hex"}}(t)),"object"==typeof t&&(W(t.r)&&W(t.g)&&W(t.b)?(e=t.r,r=t.g,n=t.b,s={r:255*j(e,255),g:255*j(r,255),b:255*j(n,255)},p=!0,b="%"===String(t.r).substr(-1)?"prgb":"rgb"):W(t.h)&&W(t.s)&&W(t.v)?(l=I(t.s),h=I(t.v),s=function(t,e,r){t=6*j(t,360),e=j(e,100),r=j(r,100);var n=i.floor(t),o=t-n,a=r*(1-e),s=r*(1-o*e),u=r*(1-(1-o)*e),c=n%6;return{r:255*[r,s,a,a,u,r][c],g:255*[u,r,r,s,a,a][c],b:255*[a,a,u,r,r,s][c]}}(t.h,l,h),p=!0,b="hsv"):W(t.h)&&W(t.s)&&W(t.l)&&(l=I(t.s),d=I(t.l),s=function(t,e,r){var n,i,o;function a(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}if(t=j(t,360),e=j(e,100),r=j(r,100),0===e)n=i=o=r;else{var s=r<.5?r*(1+e):r+e-r*e,u=2*r-s;n=a(u,s,t+1/3),i=a(u,s,t),o=a(u,s,t-1/3)}return{r:255*n,g:255*i,b:255*o}}(t.h,l,d),p=!0,b="hsl"),t.hasOwnProperty("a")&&(u=t.a)),u=F(u),{ok:p,format:t.format||b,r:c(255,f(s.r,0)),g:c(255,f(s.g,0)),b:c(255,f(s.b,0)),a:u}}(t);this._originalInput=t,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=u(100*this._a)/100,this._format=e.format||r.format,this._gradientType=e.gradientType,this._r<1&&(this._r=u(this._r)),this._g<1&&(this._g=u(this._g)),this._b<1&&(this._b=u(this._b)),this._ok=r.ok,this._tc_id=s++}function d(t,e,r){t=j(t,255),e=j(e,255),r=j(r,255);var n,i,o=f(t,e,r),a=c(t,e,r),s=(o+a)/2;if(o==a)n=i=0;else{var u=o-a;switch(i=s>.5?u/(2-o-a):u/(o+a),o){case t:n=(e-r)/u+(e<r?6:0);break;case e:n=(r-t)/u+2;break;case r:n=(t-e)/u+4}n/=6}return{h:n,s:i,l:s}}function p(t,e,r){t=j(t,255),e=j(e,255),r=j(r,255);var n,i,o=f(t,e,r),a=c(t,e,r),s=o,u=o-a;if(i=0===o?0:u/o,o==a)n=0;else{switch(o){case t:n=(e-r)/u+(e<r?6:0);break;case e:n=(r-t)/u+2;break;case r:n=(t-e)/u+4}n/=6}return{h:n,s:i,v:s}}function b(t,e,r,n){var i=[P(u(t).toString(16)),P(u(e).toString(16)),P(u(r).toString(16))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function g(t,e,r,n){return[P(N(n)),P(u(t).toString(16)),P(u(e).toString(16)),P(u(r).toString(16))].join("")}function v(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.s-=e/100,r.s=H(r.s),h(r)}function _(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.s+=e/100,r.s=H(r.s),h(r)}function y(t){return h(t).desaturate(100)}function m(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.l+=e/100,r.l=H(r.l),h(r)}function w(t,e){e=0===e?0:e||10;var r=h(t).toRgb();return r.r=f(0,c(255,r.r-u(-e/100*255))),r.g=f(0,c(255,r.g-u(-e/100*255))),r.b=f(0,c(255,r.b-u(-e/100*255))),h(r)}function x(t,e){e=0===e?0:e||10;var r=h(t).toHsl();return r.l-=e/100,r.l=H(r.l),h(r)}function k(t,e){var r=h(t).toHsl(),n=(r.h+e)%360;return r.h=n<0?360+n:n,h(r)}function A(t){var e=h(t).toHsl();return e.h=(e.h+180)%360,h(e)}function E(t){var e=h(t).toHsl(),r=e.h;return[h(t),h({h:(r+120)%360,s:e.s,l:e.l}),h({h:(r+240)%360,s:e.s,l:e.l})]}function O(t){var e=h(t).toHsl(),r=e.h;return[h(t),h({h:(r+90)%360,s:e.s,l:e.l}),h({h:(r+180)%360,s:e.s,l:e.l}),h({h:(r+270)%360,s:e.s,l:e.l})]}function S(t){var e=h(t).toHsl(),r=e.h;return[h(t),h({h:(r+72)%360,s:e.s,l:e.l}),h({h:(r+216)%360,s:e.s,l:e.l})]}function L(t,e,r){e=e||6,r=r||30;var n=h(t).toHsl(),i=360/r,o=[h(t)];for(n.h=(n.h-(i*e>>1)+720)%360;--e;)n.h=(n.h+i)%360,o.push(h(n));return o}function R(t,e){e=e||6;for(var r=h(t).toHsv(),n=r.h,i=r.s,o=r.v,a=[],s=1/e;e--;)a.push(h({h:n,s:i,v:o})),o=(o+s)%1;return a}h.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,e,r,n=this.toRgb();return t=n.r/255,e=n.g/255,r=n.b/255,.2126*(t<=.03928?t/12.92:i.pow((t+.055)/1.055,2.4))+.7152*(e<=.03928?e/12.92:i.pow((e+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:i.pow((r+.055)/1.055,2.4))},setAlpha:function(t){return this._a=F(t),this._roundA=u(100*this._a)/100,this},toHsv:function(){var t=p(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=p(this._r,this._g,this._b),e=u(360*t.h),r=u(100*t.s),n=u(100*t.v);return 1==this._a?"hsv("+e+", "+r+"%, "+n+"%)":"hsva("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var t=d(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=d(this._r,this._g,this._b),e=u(360*t.h),r=u(100*t.s),n=u(100*t.l);return 1==this._a?"hsl("+e+", "+r+"%, "+n+"%)":"hsla("+e+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(t){return b(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,e,r,n,i){var o=[P(u(t).toString(16)),P(u(e).toString(16)),P(u(r).toString(16)),P(N(n))];return i&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:u(this._r),g:u(this._g),b:u(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+u(this._r)+", "+u(this._g)+", "+u(this._b)+")":"rgba("+u(this._r)+", "+u(this._g)+", "+u(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:u(100*j(this._r,255))+"%",g:u(100*j(this._g,255))+"%",b:u(100*j(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+u(100*j(this._r,255))+"%, "+u(100*j(this._g,255))+"%, "+u(100*j(this._b,255))+"%)":"rgba("+u(100*j(this._r,255))+"%, "+u(100*j(this._g,255))+"%, "+u(100*j(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(M[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var e="#"+g(this._r,this._g,this._b,this._a),r=e,n=this._gradientType?"GradientType = 1, ":"";if(t){var i=h(t);r="#"+g(i._r,i._g,i._b,i._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+e+",endColorstr="+r+")"},toString:function(t){var e=!!t;t=t||this._format;var r=!1,n=this._a<1&&this._a>=0;return e||!n||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(r=this.toRgbString()),"prgb"===t&&(r=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(r=this.toHexString()),"hex3"===t&&(r=this.toHexString(!0)),"hex4"===t&&(r=this.toHex8String(!0)),"hex8"===t&&(r=this.toHex8String()),"name"===t&&(r=this.toName()),"hsl"===t&&(r=this.toHslString()),"hsv"===t&&(r=this.toHsvString()),r||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return h(this.toString())},_applyModification:function(t,e){var r=t.apply(null,[this].concat([].slice.call(e)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(m,arguments)},brighten:function(){return this._applyModification(w,arguments)},darken:function(){return this._applyModification(x,arguments)},desaturate:function(){return this._applyModification(v,arguments)},saturate:function(){return this._applyModification(_,arguments)},greyscale:function(){return this._applyModification(y,arguments)},spin:function(){return this._applyModification(k,arguments)},_applyCombination:function(t,e){return t.apply(null,[this].concat([].slice.call(e)))},analogous:function(){return this._applyCombination(L,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(R,arguments)},splitcomplement:function(){return this._applyCombination(S,arguments)},triad:function(){return this._applyCombination(E,arguments)},tetrad:function(){return this._applyCombination(O,arguments)}},h.fromRatio=function(t,e){if("object"==typeof t){var r={};for(var n in t)t.hasOwnProperty(n)&&(r[n]="a"===n?t[n]:I(t[n]));t=r}return h(t,e)},h.equals=function(t,e){return!(!t||!e)&&h(t).toRgbString()==h(e).toRgbString()},h.random=function(){return h.fromRatio({r:l(),g:l(),b:l()})},h.mix=function(t,e,r){r=0===r?0:r||50;var n=h(t).toRgb(),i=h(e).toRgb(),o=r/100;return h({r:(i.r-n.r)*o+n.r,g:(i.g-n.g)*o+n.g,b:(i.b-n.b)*o+n.b,a:(i.a-n.a)*o+n.a})},h.readability=function(t,e){var r=h(t),n=h(e);return(i.max(r.getLuminance(),n.getLuminance())+.05)/(i.min(r.getLuminance(),n.getLuminance())+.05)},h.isReadable=function(t,e,r){var n,i,o,a,s,u=h.readability(t,e);switch(i=!1,(o=r,"AA"!==(a=((o=o||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==a&&(a="AA"),"small"!==(s=(o.size||"small").toLowerCase())&&"large"!==s&&(s="small"),n={level:a,size:s}).level+n.size){case"AAsmall":case"AAAlarge":i=u>=4.5;break;case"AAlarge":i=u>=3;break;case"AAAsmall":i=u>=7}return i},h.mostReadable=function(t,e,r){var n,i,o,a,s=null,u=0;i=(r=r||{}).includeFallbackColors,o=r.level,a=r.size;for(var c=0;c<e.length;c++)(n=h.readability(t,e[c]))>u&&(u=n,s=h(e[c]));return h.isReadable(t,s,{level:o,size:a})||!i?s:(r.includeFallbackColors=!1,h.mostReadable(t,["#fff","#000"],r))};var T=h.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},M=h.hexNames=function(t){var e={};for(var r in t)t.hasOwnProperty(r)&&(e[t[r]]=r);return e}(T);function F(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function j(t,e){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var r=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=c(e,f(0,parseFloat(t))),r&&(t=parseInt(t*e,10)/100),i.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function H(t){return c(1,f(0,t))}function C(t){return parseInt(t,16)}function P(t){return 1==t.length?"0"+t:""+t}function I(t){return t<=1&&(t=100*t+"%"),t}function N(t){return i.round(255*parseFloat(t)).toString(16)}function q(t){return C(t)/255}var z,G,D,B=(G="[\\s|\\(]+("+(z="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+z+")[,|\\s]+("+z+")\\s*\\)?",D="[\\s|\\(]+("+z+")[,|\\s]+("+z+")[,|\\s]+("+z+")[,|\\s]+("+z+")\\s*\\)?",{CSS_UNIT:new RegExp(z),rgb:new RegExp("rgb"+G),rgba:new RegExp("rgba"+D),hsl:new RegExp("hsl"+G),hsla:new RegExp("hsla"+D),hsv:new RegExp("hsv"+G),hsva:new RegExp("hsva"+D),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function W(t){return!!B.CSS_UNIT.exec(t)}t.exports?t.exports=h:void 0===(n=function(){return h}.call(e,r,e,t))||(t.exports=n)}(Math)}}]);