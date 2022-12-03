(function e(t,n){if(typeof exports==="object"&&typeof module==="object")module.exports=n();else if(typeof define==="function"&&define.amd)define([],n);else if(typeof exports==="object")exports["SwupScrollPlugin"]=n();else t["SwupScrollPlugin"]=n()})(window,function(){return function(e){var t={};function n(o){if(t[o]){return t[o].exports}var r=t[o]={i:o,l:false,exports:{}};e[o].call(r.exports,r,r.exports,n);r.l=true;return r.exports}n.m=e;n.c=t;n.d=function(e,t,o){if(!n.o(e,t)){Object.defineProperty(e,t,{enumerable:true,get:o})}};n.r=function(e){if(typeof Symbol!=="undefined"&&Symbol.toStringTag){Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}Object.defineProperty(e,"__esModule",{value:true})};n.t=function(e,t){if(t&1)e=n(e);if(t&8)return e;if(t&4&&typeof e==="object"&&e&&e.__esModule)return e;var o=Object.create(null);n.r(o);Object.defineProperty(o,"default",{enumerable:true,value:e});if(t&2&&typeof e!="string")for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="";return n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=t.query=function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof t!=="string"){return t}return n.querySelector(t)};var r=t.queryAll=function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:document;if(typeof t!=="string"){return t}return Array.prototype.slice.call(n.querySelectorAll(t))};var i=t.escapeCssIdentifier=function e(t){if(window.CSS&&window.CSS.escape){return CSS.escape(t)}else{return t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}return function(t,n,o){if(n)e(t.prototype,n);if(o)e(t,o);return t}}();function r(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var i=function(){function e(t){r(this,e);if(t instanceof Element||t instanceof SVGElement){this.link=t}else{this.link=document.createElement("a");this.link.href=t}}o(e,[{key:"getPath",value:function e(){var t=this.link.pathname;if(t[0]!=="/"){t="/"+t}return t}},{key:"getAddress",value:function e(){var t=this.link.pathname+this.link.search;if(this.link.getAttribute("xlink:href")){t=this.link.getAttribute("xlink:href")}if(t[0]!=="/"){t="/"+t}return t}},{key:"getHash",value:function e(){return this.link.hash}}]);return e}();t.default=i},function(e,t,n){"use strict";var o=n(3);var r=i(o);function i(e){return e&&e.__esModule?e:{default:e}}e.exports=r.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){if(Object.prototype.hasOwnProperty.call(n,o)){e[o]=n[o]}}}return e};var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}return function(t,n,o){if(n)e(t.prototype,n);if(o)e(t,o);return t}}();var i=n(4);var a=f(i);var l=n(5);var s=f(l);var u=n(6);var c=n(0);function f(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function p(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function h(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var v=function(e){h(t,e);function t(e){d(this,t);var n=p(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));n.name="ScrollPlugin";n.getAnchorElement=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:"";if(typeof n.options.getAnchorElement==="function"){return n.options.getAnchorElement(e)}if(typeof n.swup.getAnchorElement==="function"){return n.swup.getAnchorElement(e)}return document.querySelector(e)};n.getOffset=function(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:null;if(typeof n.options.offset==="function"){return parseInt(n.options.offset(e),10)}return parseInt(n.options.offset,10)};n.onSamePage=function(){n.swup.scrollTo(0,n.shouldAnimate("samePage"))};n.onSamePageWithHash=function(e){var t=e.delegateTarget;n.maybeScrollToAnchor(t.hash,"samePageWithHash")};n.onTransitionStart=function(e){if(n.options.doScrollingRightAway&&!n.swup.scrollToElement){n.doScrollingBetweenPages(e)}};n.onContentReplaced=function(e){if(!n.options.doScrollingRightAway||n.swup.scrollToElement){n.doScrollingBetweenPages(e)}n.restoreScrollContainers(e)};n.doScrollingBetweenPages=function(e){var t=n.swup;if(e&&!t.options.animateHistoryBrowsing){return}if(n.maybeScrollToAnchor(t.scrollToElement,"betweenPages")){t.scrollToElement=null;return}var o=n.getStoredScrollPositions(n.getCurrentCacheKey())||{};var r=o.window&&o.window.top||0;requestAnimationFrame(function(){return t.scrollTo(r,n.shouldAnimate("betweenPages"))})};n.onWillReplaceContent=function(){n.storeScrollPositions(n.currentCacheKey);n.currentCacheKey=n.getCurrentCacheKey()};n.onClickLink=function(e){n.maybeResetScrollPositions(e.delegateTarget)};var r={doScrollingRightAway:false,animateScroll:{betweenPages:true,samePageWithHash:true,samePage:true},scrollFriction:.3,scrollAcceleration:.04,getAnchorElement:null,offset:0,scrollContainers:"[data-swup-scroll-container]",shouldResetScrollPosition:function e(t){return true}};n.options=o({},r,e);return n}r(t,[{key:"mount",value:function e(){var t=this;var n=this.swup;n._handlers.scrollDone=[];n._handlers.scrollStart=[];this.scrl=new s.default({onStart:function e(){return n.triggerEvent("scrollStart")},onEnd:function e(){return n.triggerEvent("scrollDone")},onCancel:function e(){return n.triggerEvent("scrollDone")},friction:this.options.scrollFriction,acceleration:this.options.scrollAcceleration});n.scrollTo=function(e){var o=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(o){t.scrl.scrollTo(e)}else{n.triggerEvent("scrollStart");window.scrollTo(0,e);n.triggerEvent("scrollDone")}};this.scrollPositionsStore={};this.currentCacheKey=this.getCurrentCacheKey();this.previousScrollRestoration=window.history.scrollRestoration;if(n.options.animateHistoryBrowsing){window.history.scrollRestoration="manual"}n.on("samePage",this.onSamePage);n.on("samePageWithHash",this.onSamePageWithHash);n.on("transitionStart",this.onTransitionStart);n.on("contentReplaced",this.onContentReplaced);n.on("willReplaceContent",this.onWillReplaceContent);n.on("clickLink",this.onClickLink)}},{key:"unmount",value:function e(){var t=this.swup;t.scrollTo=null;delete this.scrl;this.scrl=null;t.off("samePage",this.onSamePage);t.off("samePageWithHash",this.onSamePageWithHash);t.off("transitionStart",this.onTransitionStart);t.off("contentReplaced",this.onContentReplaced);t.off("willReplaceContent",this.onWillReplaceContent);t.off("clickLink",this.onClickLink);t._handlers.scrollDone=null;t._handlers.scrollStart=null;window.history.scrollRestoration=this.previousScrollRestoration}},{key:"shouldAnimate",value:function e(t){if(typeof this.options.animateScroll==="boolean"){return this.options.animateScroll}return this.options.animateScroll[t]}},{key:"maybeScrollToAnchor",value:function e(t,n){if(t==null){return false}var o=this.getAnchorElement(t);if(!o){console.warn("Element "+t+" not found");return false}if(!(o instanceof Element)){console.warn("Element "+t+" is not a DOM node");return false}var r=o.getBoundingClientRect().top+window.pageYOffset-this.getOffset(o);this.swup.scrollTo(r,this.shouldAnimate(n));return true}},{key:"maybeResetScrollPositions",value:function e(t){if(!this.options.shouldResetScrollPosition(t)){return}var n=new u.Link(t).getAddress();this.resetScrollPositions(n)}},{key:"storeScrollPositions",value:function e(t){var n=(0,c.queryAll)(this.options.scrollContainers).map(function(e){return{top:e.scrollTop,left:e.scrollLeft}});this.scrollPositionsStore[t]={window:{top:window.scrollY,left:window.scrollX},containers:n}}},{key:"resetScrollPositions",value:function e(t){delete this.scrollPositionsStore[t];this.scrollPositionsStore[t]=null}},{key:"getStoredScrollPositions",value:function e(t){return this.scrollPositionsStore[t]}},{key:"restoreScrollContainers",value:function e(t){var n=this.getStoredScrollPositions(this.getCurrentCacheKey())||{};if(n.containers==null){return}(0,c.queryAll)(this.options.scrollContainers).forEach(function(e,t){var o=n.containers[t];if(o==null)return;e.scrollTop=o.top;e.scrollLeft=o.left})}},{key:"getCurrentCacheKey",value:function e(){var t=(0,u.getCurrentUrl)();if(typeof this.swup.resolvePath==="function"){return this.swup.resolvePath(t)}return t}}]);return t}(a.default);t.default=v},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||false;o.configurable=true;if("value"in o)o.writable=true;Object.defineProperty(e,o.key,o)}}return function(t,n,o){if(n)e(t.prototype,n);if(o)e(t,o);return t}}();function r(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var i=function(){function e(){r(this,e);this.isSwupPlugin=true}o(e,[{key:"mount",value:function e(){}},{key:"unmount",value:function e(){}},{key:"_beforeMount",value:function e(){}},{key:"_afterUnmount",value:function e(){}}]);return e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){if(Object.prototype.hasOwnProperty.call(n,o)){e[o]=n[o]}}}return e};function r(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}var i=function e(t){var n=this;r(this,e);this._raf=null;this._positionY=0;this._velocityY=0;this._targetPositionY=0;this._targetPositionYWithOffset=0;this._direction=0;this.scrollTo=function(e){if(e&&e.nodeType){n._targetPositionY=Math.round(e.getBoundingClientRect().top+window.pageYOffset)}else if(parseInt(n._targetPositionY)===n._targetPositionY){n._targetPositionY=Math.round(e)}else{console.error("Argument must be a number or an element.");return}if(n._targetPositionY>document.documentElement.scrollHeight-window.innerHeight){n._targetPositionY=document.documentElement.scrollHeight-window.innerHeight}n._positionY=document.body.scrollTop||document.documentElement.scrollTop;n._direction=n._positionY>n._targetPositionY?-1:1;n._targetPositionYWithOffset=n._targetPositionY+n._direction;n._velocityY=0;if(n._positionY!==n._targetPositionY){n.options.onStart();n._animate()}else{n.options.onAlreadyAtPositions()}};this._animate=function(){var e=n._update();n._render();if(n._direction===1&&n._targetPositionY>n._positionY||n._direction===-1&&n._targetPositionY<n._positionY){n._raf=requestAnimationFrame(n._animate);n.options.onTick()}else{n._positionY=n._targetPositionY;n._render();n._raf=null;n.options.onTick();n.options.onEnd()}};this._update=function(){var e=n._targetPositionYWithOffset-n._positionY;var t=e*n.options.acceleration;n._velocityY+=t;n._velocityY*=n.options.friction;n._positionY+=n._velocityY;return Math.abs(e)};this._render=function(){window.scrollTo(0,n._positionY)};var i={onAlreadyAtPositions:function e(){},onCancel:function e(){},onEnd:function e(){},onStart:function e(){},onTick:function e(){},friction:.7,acceleration:.04};this.options=o({},i,t);if(t&&t.friction){this.options.friction=1-t.friction}window.addEventListener("mousewheel",function(e){if(n._raf){n.options.onCancel();cancelAnimationFrame(n._raf);n._raf=null}},{passive:true})};t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});t.cleanupAnimationClasses=t.Link=t.markSwupElements=t.normalizeUrl=t.getCurrentUrl=t.transitionProperty=t.transitionEnd=t.fetch=t.getDataFromHtml=t.createHistoryRecord=t.classify=undefined;var o=n(7);var r=E(o);var i=n(8);var a=E(i);var l=n(9);var s=E(l);var u=n(10);var c=E(u);var f=n(11);var d=E(f);var p=n(12);var h=E(p);var v=n(13);var g=E(v);var y=n(14);var m=E(y);var w=n(15);var _=E(w);var P=n(1);var b=E(P);var S=n(16);var k=E(S);function E(e){return e&&e.__esModule?e:{default:e}}var C=t.classify=r.default;var O=t.createHistoryRecord=a.default;var A=t.getDataFromHtml=s.default;var T=t.fetch=c.default;var j=t.transitionEnd=d.default;var M=t.transitionProperty=h.default;var Y=t.getCurrentUrl=g.default;var R=t.normalizeUrl=m.default;var H=t.markSwupElements=_.default;var q=t.Link=b.default;var L=t.cleanupAnimationClasses=k.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function e(t){var n=t.toString().toLowerCase().replace(/\s+/g,"-").replace(/\//g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");if(n[0]==="/")n=n.splice(1);if(n==="")n="homepage";return n};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function e(t){window.history.pushState({url:t||window.location.href.split(window.location.hostname)[1],random:Math.random(),source:"swup"},document.getElementsByTagName("title")[0].innerText,t||window.location.href.split(window.location.hostname)[1])};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n(0);var r=function e(t,n){var r=document.createElement("html");r.innerHTML=t;var i=[];n.forEach(function(e){if((0,o.query)(e,r)==null){console.error("Container "+e+" not found on page.");return null}else{if((0,o.queryAll)(e).length!==(0,o.queryAll)(e,r).length){console.warn("Mismatched number of containers found on new page.")}(0,o.queryAll)(e).forEach(function(t,n){(0,o.queryAll)(e,r)[n].setAttribute("data-swup",i.length);i.push((0,o.queryAll)(e,r)[n].outerHTML)})}});var a={title:r.querySelector("title").innerText,pageClass:r.querySelector("body").className,originalContent:t,blocks:i};r.innerHTML="";r=null;return a};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n){if(Object.prototype.hasOwnProperty.call(n,o)){e[o]=n[o]}}}return e};var r=function e(t){var n=arguments.length>1&&arguments[1]!==undefined?arguments[1]:false;var r={url:window.location.pathname+window.location.search,method:"GET",data:null,headers:{}};var i=o({},r,t);var a=new XMLHttpRequest;a.onreadystatechange=function(){if(a.readyState===4){if(a.status!==500){n(a)}else{n(a)}}};a.open(i.method,i.url,true);Object.keys(i.headers).forEach(function(e){a.setRequestHeader(e,i.headers[e])});a.send(i.data);return a};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function e(){if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){return"webkitTransitionEnd"}else{return"transitionend"}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function e(){if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){return"WebkitTransition"}else{return"transition"}};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function e(){return window.location.pathname+window.location.search};t.default=o},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n(1);var r=i(o);function i(e){return e&&e.__esModule?e:{default:e}}var a=function e(t){return new r.default(t).getAddress()};t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=n(0);var r=function e(t,n){var r=0;n.forEach(function(e){if((0,o.query)(e,t)==null){console.error("Container "+e+" not found on page.")}else{(0,o.queryAll)(e).forEach(function(n,i){(0,o.queryAll)(e,t)[i].setAttribute("data-swup",r);r++})}})};t.default=r},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var o=function e(){document.documentElement.className.split(" ").forEach(function(e){if(new RegExp("^to-").test(e)||e==="is-changing"||e==="is-rendering"||e==="is-popstate"){document.documentElement.classList.remove(e)}})};t.default=o}])});