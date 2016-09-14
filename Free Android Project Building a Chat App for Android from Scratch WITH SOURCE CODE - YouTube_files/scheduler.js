(function(){var f=this;function g(a){a=a.split(".");for(var b=f,c;c=a.shift();)if(null!=b[c])b=b[c];else return null;return b}
function h(a,b,c){return a.call.apply(a.bind,arguments)}
function k(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function l(a,b,c){l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?h:k;return l.apply(null,arguments)}
var m=Date.now||function(){return+new Date};
function n(a,b){var c=a.split("."),d=f;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]?d=d[e]:d=d[e]={}:d[e]=b}
;var p=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};n("yt.config_",p);n("yt.tokens_",window.yt&&window.yt.tokens_||{});var r=window.yt&&window.yt.msgs_||g("window.ytcfg.msgs")||{};n("yt.msgs_",r);function t(){this.g=this.g;this.j=this.j}
t.prototype.g=!1;t.prototype.isDisposed=function(){return this.g};
t.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
t.prototype.m=function(){if(this.j)for(;this.j.length;)this.j.shift()()};function u(a){t.call(this);this.a=[];this.a[4]=[];this.a[3]=[];this.a[2]=[];this.a[1]=[];this.a[0]=[];a=a||{};this.D=a.timeout||1;this.c={};this.i=u.a;this.v=this.b=this.h=0;this.o=this.l=!1;this.f=[];this.u=l(this.G,this);this.C=l(this.I,this);this.A=l(this.F,this);this.B=l(this.H,this);this.w=!!window.requestIdleCallback;(this.s=!!a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.u)}
(function(){var a=u;function b(){}
b.prototype=t.prototype;a.K=t.prototype;a.prototype=new b;a.prototype.constructor=a;a.L=function(a,b,e){for(var c=Array(arguments.length-2),d=2;d<arguments.length;d++)c[d-2]=arguments[d];return t.prototype[b].apply(a,c)}})();
u.b=1E3/60;u.c=3E3;u.f=300;u.g=3;u.a=u.b-3;function v(a,b,c,d){++a.v;var e=a.v;a.c[e]=b;a.l&&!d?a.f.push({id:e,J:c}):(a.a[c].push(e),a.o||a.l||(0!=a.b&&w(a)!=a.h&&x(a),z(a)));return e}
function A(a){a.f.length=0;for(var b=4;0<=b;b--)a.a[b].length=0;a.c={};x(a)}
function w(a){for(var b=4;1<=b;b--)if(0<a.a[b].length)return!document.hidden&&a.s?3:2;return 1}
function B(a){try{a()}catch(b){(a=g("yt.logging.errors.log"))&&a(b)}}
u.prototype.F=function(a){var b=void 0;a&&(b=m()+a.timeRemaining());D(this,b)};
u.prototype.I=function(){D(this)};
u.prototype.H=function(){D(this)};
u.prototype.G=function(){this.b&&(x(this),z(this))};
function D(a,b){x(a);a.l=!0;for(var c=m()+(b?b:a.i),d=a.a[4];d.length;){var e=d.shift(),q=a.c[e];delete a.c[e];q&&B(q)}if(!(m()>=c)){do{a:{d=a;for(e=3;0<=e;e--)for(q=d.a[e];q.length;){var y=q.shift(),C=d.c[y];delete d.c[y];if(C){d=C;break a}}d=null}d&&B(d)}while(d&&m()<c)}a.l=!1;c=0;for(d=a.f.length;c<d;c++)e=a.f[c],a.a[e.J].push(e.id);a.i=u.a;a:{for(c=3;0<=c;c--)if(a.a[c].length){c=!0;break a}c=!1}(c||a.f.length)&&z(a);a.f.length=0}
function z(a){a.o=!1;if(0==a.b)switch(a.h=w(a),a.h){case 1:var b;b=a.A;b=a.w?window.requestIdleCallback(b,{timeout:3E3}):window.setTimeout(b,300);a.b=b;break;case 2:a.b=window.setTimeout(a.C,a.D);break;case 3:a.b=window.requestAnimationFrame(a.B)}}
function x(a){if(a.b){switch(a.h){case 1:var b=a.b;a.w?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:window.clearTimeout(a.b);break;case 3:window.cancelAnimationFrame(a.b)}a.b=0}}
u.prototype.m=function(){A(this);x(this);this.s&&document.removeEventListener("visibilitychange",this.u);u.K.m.call(this)};function E(){var a=g("yt.scheduler.instance.instance_");if(!a||a.isDisposed())a=new u(("scheduler"in p?p.scheduler:void 0)||{}),n("yt.scheduler.instance.instance_",a);return a}
function F(){var a=g("yt.scheduler.instance.instance_");a&&(a&&"function"==typeof a.dispose&&a.dispose(),n("yt.scheduler.instance.instance_",null))}
function G(){A(E())}
var H=g("yt.scheduler.instance.timerIdMap_")||{};function I(a,b,c){if(0==c||void 0===c)return c=void 0===c,-v(E(),a,b,c);var d=window.setTimeout(function(){var c=v(E(),a,b);H[d]=c},c);
return d}
function J(a){var b=E(),c=m();B(a);a=m()-c;b.i-=a}
function K(a){var b=E();if(0>a)delete b.c[-a];else{var c=H[a];c?(delete b.c[c],delete H[a]):window.clearTimeout(a)}}
function L(){z(E())}
function M(){var a=E();x(a);a.o=!0}
;g("yt.scheduler.initialized")||(n("yt.scheduler.instance.dispose",F),n("yt.scheduler.instance.addJob",I),n("yt.scheduler.instance.addImmediateJob",J),n("yt.scheduler.instance.cancelJob",K),n("yt.scheduler.instance.cancelAllJobs",G),n("yt.scheduler.instance.start",L),n("yt.scheduler.instance.pause",M),n("yt.scheduler.initialized",!0));})();
