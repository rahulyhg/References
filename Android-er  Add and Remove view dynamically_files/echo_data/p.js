if(!window.__adrta__aait){__adrta__aait=""}if(!window.__adrta__aasi){__adrta__aasi=""}if(!window.__adrta__aast){__adrta__aast=""}if(!window.__adrta__aavi){__adrta__aavi=""}if(!window.__adrta__aavt){__adrta__aavt=""}if(!window.__adrta__aadb){__adrta__aadb=""}if(!window.__adrta__aasm){__adrta__aasm=0}var swfobject=function(){var C="undefined",q="object",T="Shockwave Flash",Z="ShockwaveFlash.ShockwaveFlash",p="application/x-shockwave-flash",S="SWFObjectExprInst",w="onreadystatechange",Q=window,h=document,s=navigator,V=false,X=[],n=[],P=[],K=[],H,o,D,A,L=false,a=false,l,F,j=true,J=false,O=function(){var ad=typeof h.getElementById!==C&&typeof h.getElementsByTagName!==C&&typeof h.createElement!==C,ak=s.userAgent.toLowerCase(),ab=s.platform.toLowerCase(),ah=ab?/win/.test(ab):/win/.test(ak),af=ab?/mac/.test(ab):/mac/.test(ak),ai=/webkit/.test(ak)?parseFloat(ak.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,aa=s.appName==="Microsoft Internet Explorer",aj=[0,0,0],ae=null;if(typeof s.plugins!==C&&typeof s.plugins[T]===q){ae=s.plugins[T].description;if(ae&&(typeof s.mimeTypes!==C&&s.mimeTypes[p]&&s.mimeTypes[p].enabledPlugin)){V=true;aa=false;ae=ae.replace(/^.*\s+(\S+\s+\S+$)/,"$1");aj[0]=m(ae.replace(/^(.*)\..*$/,"$1"));aj[1]=m(ae.replace(/^.*\.(.*)\s.*$/,"$1"));aj[2]=/[a-zA-Z]/.test(ae)?m(ae.replace(/^.*[a-zA-Z]+(.*)$/,"$1")):0}}else{if(typeof Q.ActiveXObject!==C){try{var ag=new ActiveXObject(Z);if(ag){ae=ag.GetVariable("$version");if(ae){aa=true;ae=ae.split(" ")[1].split(",");aj=[m(ae[0]),m(ae[1]),m(ae[2])]}}}catch(ac){}}}return{w3:ad,pv:aj,wk:ai,ie:aa,win:ah,mac:af}}(),i=function(){if(!O.w3){return}if((typeof h.readyState!==C&&(h.readyState==="complete"||h.readyState==="interactive"))||(typeof h.readyState===C&&(h.getElementsByTagName("body")[0]||h.body))){f()}if(!L){if(typeof h.addEventListener!==C){h.addEventListener("DOMContentLoaded",f,false)}if(O.ie){h.attachEvent(w,function aa(){if(h.readyState==="complete"){h.detachEvent(w,aa);f()}});if(Q==top){(function ac(){if(L){return}try{h.documentElement.doScroll("left")}catch(ad){setTimeout(ac,0);return}f()}())}}if(O.wk){(function ab(){if(L){return}if(!/loaded|complete/.test(h.readyState)){setTimeout(ab,0);return}f()}())}}}();function f(){if(L||!document.getElementsByTagName("body")[0]){return}try{var ac,ad=B("span");ad.style.display="none";ac=h.getElementsByTagName("body")[0].appendChild(ad);ac.parentNode.removeChild(ac);ac=null;ad=null}catch(ae){return}L=true;var aa=X.length;for(var ab=0;ab<aa;ab++){X[ab]()}}function M(aa){if(L){aa()}else{X[X.length]=aa}}function r(ab){if(typeof Q.addEventListener!==C){Q.addEventListener("load",ab,false)}else{if(typeof h.addEventListener!==C){h.addEventListener("load",ab,false)}else{if(typeof Q.attachEvent!==C){g(Q,"onload",ab)}else{if(typeof Q.onload==="function"){var aa=Q.onload;Q.onload=function(){aa();ab()}}else{Q.onload=ab}}}}}function Y(){var aa=h.getElementsByTagName("body")[0];var ae=B(q);ae.setAttribute("style","visibility: hidden;");ae.setAttribute("type",p);var ad=aa.appendChild(ae);if(ad){var ac=0;(function ab(){if(typeof ad.GetVariable!==C){try{var ag=ad.GetVariable("$version");if(ag){ag=ag.split(" ")[1].split(",");O.pv=[m(ag[0]),m(ag[1]),m(ag[2])]}}catch(af){O.pv=[8,0,0]}}else{if(ac<10){ac++;setTimeout(ab,10);return}}aa.removeChild(ae);ad=null;G()}())}else{G()}}function G(){var aj=n.length;if(aj>0){for(var ai=0;ai<aj;ai++){var ab=n[ai].id;var ae=n[ai].callbackFn;var ad={success:false,id:ab};if(O.pv[0]>0){var ah=c(ab);if(ah){if(E(n[ai].swfVersion)&&!(O.wk&&O.wk<312)){v(ab,true);if(ae){ad.success=true;ad.ref=y(ab);ad.id=ab;ae(ad)}}else{if(n[ai].expressInstall&&z()){var al={};al.data=n[ai].expressInstall;al.width=ah.getAttribute("width")||"0";al.height=ah.getAttribute("height")||"0";if(ah.getAttribute("class")){al.styleclass=ah.getAttribute("class")}if(ah.getAttribute("align")){al.align=ah.getAttribute("align")}var ak={};var aa=ah.getElementsByTagName("param");var af=aa.length;for(var ag=0;ag<af;ag++){if(aa[ag].getAttribute("name").toLowerCase()!=="movie"){ak[aa[ag].getAttribute("name")]=aa[ag].getAttribute("value")}}R(al,ak,ab,ae)}else{b(ah);if(ae){ae(ad)}}}}}else{v(ab,true);if(ae){var ac=y(ab);if(ac&&typeof ac.SetVariable!==C){ad.success=true;ad.ref=ac;ad.id=ac.id}ae(ad)}}}}}X[0]=function(){if(V){Y()}else{G()}};function y(ac){var aa=null,ab=c(ac);if(ab&&ab.nodeName.toUpperCase()==="OBJECT"){if(typeof ab.SetVariable!==C){aa=ab}else{aa=ab.getElementsByTagName(q)[0]||ab}}return aa}function z(){return !a&&E("6.0.65")&&(O.win||O.mac)&&!(O.wk&&O.wk<312)}function R(ad,ae,aa,ac){var ah=c(aa);aa=W(aa);a=true;D=ac||null;A={success:false,id:aa};if(ah){if(ah.nodeName.toUpperCase()==="OBJECT"){H=I(ah);o=null}else{H=ah;o=aa}ad.id=S;if(typeof ad.width===C||(!/%$/.test(ad.width)&&m(ad.width)<310)){ad.width="310"}if(typeof ad.height===C||(!/%$/.test(ad.height)&&m(ad.height)<137)){ad.height="137"}var ag=O.ie?"ActiveX":"PlugIn",af="MMredirectURL="+encodeURIComponent(Q.location.toString().replace(/&/g,"%26"))+"&MMplayerType="+ag+"&MMdoctitle="+encodeURIComponent(h.title.slice(0,47)+" - Flash Player Installation");if(typeof ae.flashvars!==C){ae.flashvars+="&"+af}else{ae.flashvars=af}if(O.ie&&ah.readyState!=4){var ab=B("div");aa+="SWFObjectNew";ab.setAttribute("id",aa);ah.parentNode.insertBefore(ab,ah);ah.style.display="none";x(ah)}t(ad,ae,aa)}}function b(ab){if(O.ie&&ab.readyState!=4){ab.style.display="none";var aa=B("div");ab.parentNode.insertBefore(aa,ab);aa.parentNode.replaceChild(I(ab),aa);x(ab)}else{ab.parentNode.replaceChild(I(ab),ab)}}function I(af){var ae=B("div");if(O.win&&O.ie){ae.innerHTML=af.innerHTML}else{var ab=af.getElementsByTagName(q)[0];if(ab){var ag=ab.childNodes;if(ag){var aa=ag.length;for(var ad=0;ad<aa;ad++){if(!(ag[ad].nodeType==1&&ag[ad].nodeName==="PARAM")&&!(ag[ad].nodeType==8)){ae.appendChild(ag[ad].cloneNode(true))}}}}}return ae}function k(aa,ab){var ac=B("div");ac.innerHTML="<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'><param name='movie' value='"+aa+"'>"+ab+"</object>";return ac.firstChild}function t(ai,ah,ab){var aa,ae=c(ab);ab=W(ab);if(O.wk&&O.wk<312){return aa}if(ae){var ad=(O.ie)?B("div"):B(q),ag,ac,af;if(typeof ai.id===C){ai.id=ab}for(af in ah){if(ah.hasOwnProperty(af)&&af.toLowerCase()!=="movie"){e(ad,af,ah[af])}}if(O.ie){ad=k(ai.data,ad.innerHTML)}for(ag in ai){if(ai.hasOwnProperty(ag)){ac=ag.toLowerCase();if(ac==="styleclass"){ad.setAttribute("class",ai[ag])}else{if(ac!=="classid"&&ac!=="data"){ad.setAttribute(ag,ai[ag])}}}}if(O.ie){P[P.length]=ai.id}else{ad.setAttribute("type",p);ad.setAttribute("data",ai.data)}ae.parentNode.insertBefore(ad,ae);aa=ad}return aa}function e(ac,aa,ab){var ad=B("param");ad.setAttribute("name",aa);ad.setAttribute("value",ab);ac.appendChild(ad)}function x(ac){var ab=c(ac);if(ab&&ab.nodeName.toUpperCase()==="OBJECT"){if(O.ie){ab.style.display="none";(function aa(){if(ab.readyState==4){for(var ad in ab){if(typeof ab[ad]==="function"){ab[ad]=null}}ab.parentNode.removeChild(ab)}else{setTimeout(aa,10)}}())}else{ab.parentNode.removeChild(ab)}}}function U(aa){return(aa&&aa.nodeType&&aa.nodeType===1)}function W(aa){return(U(aa))?aa.id:aa}function c(ac){if(U(ac)){return ac}var aa=null;try{aa=h.getElementById(ac)}catch(ab){}return aa}function B(aa){return h.createElement(aa)}function m(aa){return parseInt(aa,10)}function g(ac,aa,ab){ac.attachEvent(aa,ab);K[K.length]=[ac,aa,ab]}function E(ac){ac+="";var ab=O.pv,aa=ac.split(".");aa[0]=m(aa[0]);aa[1]=m(aa[1])||0;aa[2]=m(aa[2])||0;return(ab[0]>aa[0]||(ab[0]==aa[0]&&ab[1]>aa[1])||(ab[0]==aa[0]&&ab[1]==aa[1]&&ab[2]>=aa[2]))?true:false}function u(af,ab,ag,ae){var ad=h.getElementsByTagName("head")[0];if(!ad){return}var aa=(typeof ag==="string")?ag:"screen";if(ae){l=null;F=null}if(!l||F!=aa){var ac=B("style");ac.setAttribute("type","text/css");ac.setAttribute("media",aa);l=ad.appendChild(ac);if(O.ie&&typeof h.styleSheets!==C&&h.styleSheets.length>0){l=h.styleSheets[h.styleSheets.length-1]}F=aa}if(l){if(typeof l.addRule!==C){l.addRule(af,ab)}else{if(typeof h.createTextNode!==C){l.appendChild(h.createTextNode(af+" {"+ab+"}"))}}}}function v(ad,aa){if(!j){return}var ab=aa?"visible":"hidden",ac=c(ad);if(L&&ac){ac.style.visibility=ab}else{if(typeof ad==="string"){u("#"+ad,"visibility:"+ab)}}}function N(ab){var ac=/[\\\"<>\.;]/;var aa=ac.exec(ab)!==null;return aa&&typeof encodeURIComponent!==C?encodeURIComponent(ab):ab}var d=function(){if(O.ie){window.attachEvent("onunload",function(){var af=K.length;for(var ae=0;ae<af;ae++){K[ae][0].detachEvent(K[ae][1],K[ae][2])}var ac=P.length;for(var ad=0;ad<ac;ad++){x(P[ad])}for(var ab in O){O[ab]=null}O=null;for(var aa in swfobject){swfobject[aa]=null}swfobject=null})}}();return{registerObject:function(ae,aa,ad,ac){if(O.w3&&ae&&aa){var ab={};ab.id=ae;ab.swfVersion=aa;ab.expressInstall=ad;ab.callbackFn=ac;n[n.length]=ab;v(ae,false)}else{if(ac){ac({success:false,id:ae})}}},getObjectById:function(aa){if(O.w3){return y(aa)}},embedSWF:function(af,al,ai,ak,ab,ae,ad,ah,aj,ag){var ac=W(al),aa={success:false,id:ac};if(O.w3&&!(O.wk&&O.wk<312)&&af&&al&&ai&&ak&&ab){v(ac,false);M(function(){ai+="";ak+="";var an={};if(aj&&typeof aj===q){for(var aq in aj){an[aq]=aj[aq]}}an.data=af;an.width=ai;an.height=ak;var ar={};if(ah&&typeof ah===q){for(var ao in ah){ar[ao]=ah[ao]}}if(ad&&typeof ad===q){for(var am in ad){if(ad.hasOwnProperty(am)){var ap=(J)?encodeURIComponent(am):am,at=(J)?encodeURIComponent(ad[am]):ad[am];if(typeof ar.flashvars!==C){ar.flashvars+="&"+ap+"="+at}else{ar.flashvars=ap+"="+at}}}}if(E(ab)){var au=t(an,ar,al);if(an.id==ac){v(ac,true)}aa.success=true;aa.ref=au;aa.id=au.id}else{if(ae&&z()){an.data=ae;R(an,ar,al,ag);return}else{v(ac,true)}}if(ag){ag(aa)}})}else{if(ag){ag(aa)}}},switchOffAutoHideShow:function(){j=false},enableUriEncoding:function(aa){J=(typeof aa===C)?true:aa},ua:O,getFlashPlayerVersion:function(){return{major:O.pv[0],minor:O.pv[1],release:O.pv[2]}},hasFlashPlayerVersion:E,createSWF:function(ac,ab,aa){if(O.w3){return t(ac,ab,aa)}else{return undefined}},showExpressInstall:function(ac,ad,aa,ab){if(O.w3&&z()){R(ac,ad,aa,ab)}},removeSWF:function(aa){if(O.w3){x(aa)}},createCSS:function(ad,ac,ab,aa){if(O.w3){u(ad,ac,ab,aa)}},addDomLoadEvent:M,addLoadEvent:r,getQueryParamValue:function(ad){var ac=h.location.search||h.location.hash;if(ac){if(/\?/.test(ac)){ac=ac.split("?")[1]}if(!ad){return N(ac)}var ab=ac.split("&");for(var aa=0;aa<ab.length;aa++){if(ab[aa].substring(0,ab[aa].indexOf("="))==ad){return N(ab[aa].substring((ab[aa].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var aa=c(S);if(aa&&H){aa.parentNode.replaceChild(H,aa);if(o){v(o,true);if(O.ie){H.style.display="block"}}if(D){D(A)}}a=false}},version:"2.3"}}();this["Pixalate"+39650841777518092]=(function(){var aH="1475068265354";var F=false;var aI=false;var al=39650841777518092;var X="1402158563378710067";var aN="115.249.229.49, 10.2.1.74";var V="13.5";var q=/(http)?(s)?(:)?\/\/(cdn|js|q).(adrta|rta247).com\/(s\/[a-zA-Z]*\/)?(aa|ap|aanf|at|ca|p|pnf).js(\?|#).*/;var u=/(?:\?([^#]*))/;var N=/https?:\/\/\w.*[\w]/;var E=/(\w+):\/{2}([^\/:]+)(?:\:(\d+))?(\/(?:[^?]+\/)?)?([^\?#]+)?(?:\?([^#]*))?(\#.*)?$/;var ar=",88x31,120x20,120x240,120x60,120x600,120x90,125x125,160x600,168x28,168x42,168X42,180x150,192x53,200x200,216x36,216x54,234x60,240x400,250x250,250x970,300x100,300x1050,300x150,300x250,300x50,300x600,300x75,320x50,320x100,320x480,336x280,400x300,468x60,480x320,550x480,640x480,700x500,720x300,728x90,768x1024,850x30,950x90,970x250,970x90,970x66,1024x768,";var s=[15000,15000,30000,30000,60000,60000];var B=[15000,15000,30000,30000,60000,60000];var aZ=0;var aE=100;var ay=0.5;var am=242500;var x=511;var aM=2047;var aQ=9000000000000000;var at=false;var d=[];var aq=false;var l=false;var ak=false;var aL=new Date().getTimezoneOffset();var L=(navigator.userAgent.indexOf("Opera Mini")!=-1);var aY=(navigator.userAgent.indexOf("MSIE")!=-1);var au=window.location.protocol;if(au.indexOf("http")!=0){au="http:"}d.push(al);var aj=0;var G=null;try{G=document.currentScript}catch(ag){}if(!G){aj=1;var ap=document.getElementsByTagName("script");var I=[];for(var ad=0;ad<ap.length;++ad){I[ad]=ap[ad]}G=I[I.length-1];for(var aa=I.length-1;aa>=0;--aa){var Z=I[aa];if(Z&&Z.src&&q.test(Z.src)){G=Z;aj=0;break}}}var aV=G.src.substring(G.src.indexOf("#")+1).replace(/%%/g,"%25%25").split(";");var T=aV.shift();if(T.indexOf("=")!=-1||T.length==0||G.src.indexOf("#")==-1){T="px"}var o=[];for(var ac=0;ac<aV.length;++ac){if(aV[ac].indexOf("blocked")!=-1){at=true}if(N.test(aV[ac])){aV[ac]=aV[ac].replace(E,"$1://$2$4$5")}if(aV[ac].indexOf("kv2=")!=-1){o.push(aV.splice(ac,1))}}var aO="__aaci="+T;if(aV.length>0){aO+="&"+aV.join("&")}var aP=aO.indexOf("&__aa__=");if(aP!=-1){aO=aO.substring(0,aP)}__adrta__aadb=aI||__adrta__aadb||(("&"+aO+"&").indexOf("&debug=true&")!=-1);var v=true;var k=0;var aD="";var af="";var aC=window;try{var R=window;for(var ad=0;ad<16;++ad){v=true;try{aD=R.location.href.replace(u,"").substring(0,x);if(aD=="undefined"){aD=R.location.href.substring(0,x)}af=R.document.referrer.replace(u,"").substring(0,x);if(af=="undefined"){af=R.document.referrer.substring(0,x)}aC=R}catch(ag){if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0){af=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]}v=false}if(R==window.top){break}R=R.parent;++k}}catch(ag){v=false;if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0){af=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]}}if(window.location.ancestorOrigins&&window.location.ancestorOrigins.length>0){var J=window.location.ancestorOrigins[window.location.ancestorOrigins.length-1]}var h=false;var ah=(document.hasFocus&&document.hasFocus())||(aC.document.hasFocus&&aC.document.hasFocus());if(v){var aF=null;if(aY){aF=aC.document.onfocusin;aC.document.onfocusin=function(){ah=true;if(aF){try{aF()}catch(i){}}}}else{aF=aC.onfocus;aC.onfocus=function(){ah=true;if(aF){aF()}}}var U=null;var az=null;if(aY){U=aC.document.onfocusout;aC.document.onfocusout=function(){if(az!=aC.document.activeElement){az=aC.document.activeElement}else{ah=false;if(U){try{U()}catch(i){}}}}}else{U=aC.onblur;aC.onblur=function(){ah=false;if(U){U()}}}}var av=0;var aS=0;var D=function(){if(aS!=0){var i=new Date().getTime();av+=i-aS;aS=i}var e=av;av=0;return e};var f=function(){var i=function(){aS=new Date().getTime()};var e=function(){if(aS!=0){av+=new Date().getTime()-aS;aS=0}};if(aR.addEventListener){aR.addEventListener("mouseover",i,false);aR.addEventListener("mouseout",e,false)}else{if(aR.attachEvent){aR.attachEvent("mouseover",i);aR.attachEvent("mouseout",e)}}};var aR=null;var a3=false;var t=0;var aw=0;var a0=0;var aA=new Date().getTime();var aU=function(e,i){return(ar.indexOf(","+e+"x"+i+",")!=-1)};var ax=function(e){if(e.getAttribute("height")){return parseInt(e.getAttribute("height"))}if((e.style)&&(e.style.height)&&(e.style.height.indexOf("%")==-1)){return parseInt(e.style.height)}return e.offsetHeight};var ae=function(e){if(e.getAttribute("width")){return parseInt(e.getAttribute("width"))}if((e.style)&&(e.style.width)&&(e.style.height.indexOf("%")==-1)){return parseInt(e.style.width)}return e.offsetWidth};var aB=function(j){if(!j){return j}if(j.nodeType!=1){return aB(j.nextSibling)}if(j.tagName=="SCRIPT"){return aB(j.nextSibling)}var e=ae(j);var n=ax(j);if(aU(e,n)){t=e;aw=n;return j}if(j.tagName=="IMG"){return aB(j.nextSibling)}if(!j.firstChild){return aB(j.nextSibling)}var i=aB(j.firstChild);if(i){return i}return aB(j.nextSibling)};var aJ=function(){aR=aB(G.parentNode.firstChild);if(!aR&&(window!=top)){aR=aB(document.body)}if(aR){a3=true;a0=new Date().getTime()-aA;if(a0<1){a0=1}f();if(t!=0&&aw!=0){if((t*aw)>=am){ay=0.3}}}};aJ();if(a3&&v){aq=true;l=true}var a=false;var p=0;var m=0;var M=0;var Y=0;var c=false;var aK=new Date().getTime();var a2=false;var aT=0;var K=0;var W=[0,0,0,0,0,0,0];var ao=function(){var i=new Date().getTime();var e=i-aK;aK=i;return e};var a1=function(e){var j=0;var i=0;if(e.offsetParent){do{if(e.style.position=="fixed"){j=e.getBoundingClientRect().left;i=e.getBoundingClientRect().top;break}j+=e.offsetLeft;j-=e.scrollLeft;i+=e.offsetTop;i-=e.scrollTop}while((e=e.offsetParent)&&(e.tagName!="BODY"))}return[j,i]};var C=function(j){try{var a4=j.parent.document.getElementsByTagName("IFRAME");for(var n=0;n<a4.length;n++){if(a4[n].contentWindow==j){return a4[n]}}}catch(w){}return null};var Q=function(){var i=0;var e=0;if(typeof(aC.innerWidth)=="number"){i=aC.innerWidth;e=aC.innerHeight}else{if(aC.document.documentElement&&(aC.document.documentElement.clientWidth||aC.document.documentElement.clientHeight)){i=aC.document.documentElement.clientWidth;e=aC.document.documentElement.clientHeight}}return[i,e]};var S=function(){var i=0;var e=0;if(typeof(aC.pageYOffset)=="number"){e=aC.pageYOffset;i=aC.pageXOffset}else{if(aC.document.body&&(aC.document.body.scrollLeft||aC.document.body.scrollTop)){e=aC.document.body.scrollTop;i=aC.document.body.scrollLeft}else{if(aC.document.documentElement&&(aC.document.documentElement.scrollLeft||aC.document.documentElement.scrollTop)){e=aC.document.documentElement.scrollTop;i=aC.document.documentElement.scrollLeft}}}return[i,e]};var O=false;var y=function(){a2=true;++K;if(ah){h=true;if(v){var bn=0;var bl=0;var bh=window;for(var bq=0;bq<16;++bq){try{var bc=C(bh);if(bc){var a8=a1(bc);bn+=a8[0];bl+=a8[1]}}catch(bs){}if(bh==window.top){break}bh=bh.parent}var a4=S();var bj=a4[1];var bu=a4[0];var bk=Q();var n=bj+bk[1];var br=bu+bk[0];var a5=Math.max(aC.document.documentElement.clientHeight,aC.document.body.scrollHeight,aC.document.documentElement.scrollHeight,aC.document.body.offsetHeight,aC.document.documentElement.offsetHeight);var a7=Math.max(aC.document.documentElement.clientWidth,aC.document.body.scrollWidth,aC.document.documentElement.scrollWidth,aC.document.body.offsetWidth,aC.document.documentElement.offsetWidth);W[0]+=a5;W[1]+=a7;var be=a5*0.2;var j=0;for(var bq=2;bq<7;++bq){var bf=j+be;var bd=bf-j;if(bd<0){j=bf;continue}if(j<bj){j=bj}if(bf>n){bf=n}var bw=bf-j;j=bf;if(bw<=0){continue}W[bq]+=Math.floor((bw/bd)*1000)/1000}++aT;var a8=a1(aR);var bv=a8[1]+bl;var bp=a8[0]+bn;var a9=bv+aR.offsetHeight;var bi=bp+aR.offsetWidth;var bg=(bv<bj)?bj:bv;var a6=(bp<bu)?bu:bp;var bo=(a9>n)?n:a9;var bm=(bi>br)?br:bi;var bb=(a9-bv)*(bi-bp);if(bb<0){bb=0}var bt=(bo-bg)*(bm-a6);if(bt<0){bt=0}p=bp;m=bv;var ba=0;if(L){ba=1}else{if(bb>0){ba=Math.floor((bt/bb)*1000)/1000}if(!O){if((bv+((a9-bv)/2)<=bk[1])&&(bp+((bi-bp)/2)<=bk[0])){a=true}O=true}}if(ba>=ay){M+=ba;++Y}if(M>=10){c=true}}}};var g=function(ba,w,a9){var j="";var a5="";var i="";j+="cb="+Math.floor(Math.random()*90000000);if(ba){for(var a8 in ba){j+="&"+a8+"="+encodeURIComponent(ba[a8])}}if(w){for(var a6 in w){if(a6!="__aaam"){a5+="&"+a6+"="+encodeURIComponent(w[a6])}}if(w.__aaam){i+="&__aaam="+encodeURIComponent(w.__aaam)}}var a4=document.createElement("script");a4.setAttribute("type","text/javascript");var e=(au+"//adrta.com/i?");e+=j;e+="&"+aO;if(o.length>0){e+="&"+o.join("")}e+=a5;e+=i;e=e.substring(0,aM);a4.setAttribute("src",e);if(a4.readyState){a4.onreadystatechange=function(){if(a4.readyState=="loaded"||a4.readyState=="complete"){a4.onreadystatechange=null;a4.parentNode.removeChild(a4);if(a9){a9()}}}}else{a4.onload=function(){a4.onload=null;a4.parentNode.removeChild(a4);if(a9){a9()}}}document.getElementsByTagName("head")[0].appendChild(a4);if(F){var a7=document.createElement("script");a7.setAttribute("type","text/javascript");var n=(au+"//testbed.pixalate.net/i?");n+=j;n+="&"+aO;if(o.length>0){n+="&"+o.join("")}n+=a5;n+=i;n=n.substring(0,aM);a7.setAttribute("src",n);if(a7.readyState){a7.onreadystatechange=function(){if(a7.readyState=="loaded"||a7.readyState=="complete"){a7.onreadystatechange=null;a7.parentNode.removeChild(a7);if(a9){a9()}}}}else{a7.onload=function(){a7.onload=null;a7.parentNode.removeChild(a7);if(a9){a9()}}}document.getElementsByTagName("head")[0].appendChild(a7)}};var ab=function(a6){var a5="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";var j="";var be,bb,a9,bd,ba,a8,a7;var w=0;a6=a6.replace(/\r\n/g,"\n");var bc="";for(var e=0;e<a6.length;e++){var a4=a6.charCodeAt(e);if(a4<128){bc+=String.fromCharCode(a4)}else{if((a4>127)&&(a4<2048)){bc+=String.fromCharCode((a4>>6)|192);bc+=String.fromCharCode((a4&63)|128)}else{bc+=String.fromCharCode((a4>>12)|224);bc+=String.fromCharCode(((a4>>6)&63)|128);bc+=String.fromCharCode((a4&63)|128)}}}a6=bc;while(w<a6.length){be=a6.charCodeAt(w++);bb=a6.charCodeAt(w++);a9=a6.charCodeAt(w++);bd=be>>2;ba=((be&3)<<4)|(bb>>4);a8=((bb&15)<<2)|(a9>>6);a7=a9&63;if(isNaN(bb)){a8=a7=64}else{if(isNaN(a9)){a7=64}}j=j+a5.charAt(bd)+a5.charAt(ba)+a5.charAt(a8)+a5.charAt(a7)}return j};var r=0;var aX=false;var P=function(w){r++;var i={};var e={};i.__aasv=V;i.__aaii=al;i.__aait=aH;if(__adrta__aasi.length>0){i.__aasi=__adrta__aasi;i.__aast=__adrta__aast}if(__adrta__aavi.length>0){i.__aavi=__adrta__aavi;i.__aavt=__adrta__aavt}i.__aavz=aL;i.__aaib=(((k>0)&&v)?1:0);i.__aaai=((k>0)?1:0);i.__aaaa=(a?1:0);i.__aafl=(v)?aC.innerHeight||aC.document.documentElement.clientHeight:0;i.__aaaf=(a3?1:0);i.__aaag=a0;i.__aaax=Math.floor(p);i.__aaay=Math.floor(m);if((t!=0)||(aw!=0)){i.__aasz=t+"x"+aw}i.__aapf=(h?1:0);if(aj!=0){i.__aaec=aj}if(!a2){i.__aaae=0;i.__aaat=0;i.__aaav=0;i.__aaas=0;i.__aaah=0;i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}else{i.__aaup=r;h=false;if(Y==0){i.__aaat=0;i.__aaae=0}else{i.__aaat=Y*aE;i.__aaae=Math.round((M/Y)*1000)/1000;if(i.__aaat<=0||i.__aaae<=0){i.__aaat=0;i.__aaae=0}}i.__aaav=(c?1:0);M=0;Y=0;i.__aaas=ao();i.__aaah=D();if(i.__aaas<0){i.__aaas=0}if(i.__aaah<0){i.__aaah=0}if(i.__aaat>i.__aaas){i.__aaat=i.__aaas}if(i.__aaah>i.__aaas){i.__aaah=i.__aaas}if(K>0){i.__aapc=K*aE;K=0}if(aT>0){i.__aaph=Math.ceil(W[0]/aT);i.__aapw=Math.ceil(W[1]/aT);i.__aap1=Math.round((W[2]/aT)*1000)/1000;i.__aap2=Math.round((W[3]/aT)*1000)/1000;i.__aap3=Math.round((W[4]/aT)*1000)/1000;i.__aap4=Math.round((W[5]/aT)*1000)/1000;i.__aap5=Math.round((W[6]/aT)*1000)/1000;for(var j=0;j<7;++j){W[j]=0}aT=0}else{i.__aaph=0;i.__aapw=0;i.__aapc=0;i.__aap1=0;i.__aap2=0;i.__aap3=0;i.__aap4=0;i.__aap5=0}}if(at){i.__aaab=1}if(screen&&screen.width&&screen.height){i.__aass=screen.width+"x"+screen.height}if(aq){i.__aaim=1}if(l){i.__aawm=1}if(ak){i.__aanf=1}if(X){i.__aacb=X}if(aN!=""&&aN!="<%=ip%>"){i.__aaxf=aN}e.__aapu=aD;e.__aapr=af;if(J&&J.indexOf("applewebdata://")==-1){e.__aatu=J}if(__adrta__aadb){i.__aadb=1;if(!aX){e.__aaam=ab(G.parentNode.innerHTML);aX=true}}g(i,e,w)};var H=s[aZ++];var b=new Date().getTime()+H;var ai=false;if(swfobject.hasFlashPlayerVersion("9.0.0")){ak=true}function an(){}an.tag=function(i){var e=/\$\{PXL8_CLICK}/g;return i.replace(e,an.getClickURL())};an.getClickURL=function(){var e=aV.join("&");if(o.length>0){e+="&"+o.join("")}return"http://adrta.com/c?clid="+T+"&"+e+"&__aaii="+al+"&redirect="};an.updateVisibility=function(e){c=e;if(!ai&&c&&(__adrta__aasi.length>0)&&(__adrta__aast>0)&&(__adrta__aavi.length>0)&&(__adrta__aavt>0)){P();ai=true}};an.isReady=function(){aq=true;l=true;return true};var aW=false;var aG=function(){if(a3&&!aW){aW=true;if(ak&&(k>0)&&!((k>0)&&v)){var e=document.createElement("DIV");e.id="__adrta__pp_"+al;e.style.width="1px";e.style.height="1px";e.style.top=aw*ay+"px";e.style.left="10px";e.style.position="absolute";document.body.insertBefore(e,document.body.firstChild);var i=("https:"==document.location.protocol?"https://":"http://");swfobject.embedSWF(i+"pix.adrta.com/pp.pix","__adrta__pp_"+al,"1","1","8","",{scriptId:al},{swliveconnect:"true",allowscriptaccess:"always",wmode:"transparent"},{style:"top: "+aw*ay+"px; left: 10px; position: absolute;"});aq=true}}};aG();var z=function(){try{var i=new Date().getTime();if(!a3){aJ()}aG();if(a3&&(__adrta__aasi.length>0)&&(__adrta__aast>0)&&(__adrta__aavi.length>0)&&(__adrta__aavt>0)){y();if(v){l=true;aq=true}if(!ai&&c){P();ai=true;b=i+H}else{if((h||(M>0))&&(b<=i)){P();if((k>0)&&!((k>0)&&v)){H=s[aZ++]}else{H=s[aZ++]}b=i+H}}}}catch(j){}if(H){window.setTimeout(z,aE)}};var A=function(i){document.removeEventListener("webkitvisibilitychange",A);if(window.__adrta__aasm==1){window.setTimeout(P,1000);window.setTimeout(z,100+aE)}else{window.__adrta__aasm=1;P();window.setTimeout(z,aE)}};if((typeof document.webkitVisibilityState=="undefined")||(typeof document.webkitVisibilityState!="undefined"&&document.webkitVisibilityState!="prerender")){if(window.__adrta__aasm==1){window.setTimeout(P,1000);window.setTimeout(z,100+aE)}else{window.__adrta__aasm=1;P();window.setTimeout(z,aE)}}else{if(typeof document.webkitVisibilityState!="undefined"&&document.webkitVisibilityState=="prerender"){document.addEventListener("webkitvisibilitychange",A,false)}}return an})();