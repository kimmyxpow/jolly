// @bun
var c1=Object.create;var{getPrototypeOf:u1,defineProperty:n,getOwnPropertyNames:h1}=Object;var p1=Object.prototype.hasOwnProperty;var a1=($,X,G)=>{G=$!=null?c1(u1($)):{};const z=X||!$||!$.__esModule?n(G,"default",{value:$,enumerable:!0}):G;for(let Y of h1($))if(!p1.call(z,Y))n(z,Y,{get:()=>$[Y],enumerable:!0});return z};var P1=($,X)=>()=>(X||$((X={exports:{}}).exports,X),X.exports);var HJ=($,X)=>{for(var G in X)n($,G,{get:X[G],enumerable:!0,configurable:!0,set:(z)=>X[G]=()=>z})};var VJ=($,X)=>()=>($&&(X=$($=0)),X);var L1=P1((bJ,p)=>{var $J=(()=>{const Y={},W={font:"Standard",fontPath:"./fonts"};function E(K,Q){let J={},q,U,Z,M,H=[[16384,"vLayout",2],[8192,"vLayout",1],[4096,"vRule5",!0],[2048,"vRule4",!0],[1024,"vRule3",!0],[512,"vRule2",!0],[256,"vRule1",!0],[128,"hLayout",2],[64,"hLayout",1],[32,"hRule6",!0],[16,"hRule5",!0],[8,"hRule4",!0],[4,"hRule3",!0],[2,"hRule2",!0],[1,"hRule1",!0]];q=Q!==null?Q:K,U=0,Z=H.length;while(U<Z){if(M=H[U],q>=M[0])q=q-M[0],J[M[1]]=typeof J[M[1]]==="undefined"?M[2]:J[M[1]];else if(M[1]!=="vLayout"&&M[1]!=="hLayout")J[M[1]]=!1;U++}if(typeof J.hLayout==="undefined")if(K===0)J.hLayout=1;else if(K===-1)J.hLayout=0;else if(J.hRule1||J.hRule2||J.hRule3||J.hRule4||J.hRule5||J.hRule6)J.hLayout=3;else J.hLayout=2;else if(J.hLayout===2){if(J.hRule1||J.hRule2||J.hRule3||J.hRule4||J.hRule5||J.hRule6)J.hLayout=3}if(typeof J.vLayout==="undefined")if(J.vRule1||J.vRule2||J.vRule3||J.vRule4||J.vRule5)J.vLayout=3;else J.vLayout=0;else if(J.vLayout===2){if(J.vRule1||J.vRule2||J.vRule3||J.vRule4||J.vRule5)J.vLayout=3}return J}function C(K,Q,J){if(K===Q&&K!==J)return K;return!1}function q1(K,Q){let J="|/\\[]{}()<>";if(K==="_"){if(J.indexOf(Q)!==-1)return Q}else if(Q==="_"){if(J.indexOf(K)!==-1)return K}return!1}function K1(K,Q){let J="| /\\ [] {} () <>",q=J.indexOf(K),U=J.indexOf(Q);if(q!==-1&&U!==-1){if(q!==U&&Math.abs(q-U)!==1){const Z=Math.max(q,U),M=Z+1;return J.substring(Z,M)}}return!1}function Q1(K,Q){let J="[] {} ()",q=J.indexOf(K),U=J.indexOf(Q);if(q!==-1&&U!==-1){if(Math.abs(q-U)<=1)return"|"}return!1}function U1(K,Q){let J="/\\ \\/ ><",q={0:"|",3:"Y",6:"X"},U=J.indexOf(K),Z=J.indexOf(Q);if(U!==-1&&Z!==-1){if(Z-U===1)return q[U]}return!1}function X1(K,Q,J){if(K===J&&Q===J)return J;return!1}function Z1(K,Q){if(K===Q)return K;return!1}function $1(K,Q){let J="|/\\[]{}()<>";if(K==="_"){if(J.indexOf(Q)!==-1)return Q}else if(Q==="_"){if(J.indexOf(K)!==-1)return K}return!1}function H1(K,Q){let J="| /\\ [] {} () <>",q=J.indexOf(K),U=J.indexOf(Q);if(q!==-1&&U!==-1){if(q!==U&&Math.abs(q-U)!==1){const Z=Math.max(q,U),M=Z+1;return J.substring(Z,M)}}return!1}function V1(K,Q){if(K==="-"&&Q==="_"||K==="_"&&Q==="-")return"=";return!1}function G1(K,Q){if(K==="|"&&Q==="|")return"|";return!1}function F(K,Q,J){if(Q===" "||Q==="")return K;else if(Q===J&&K!==" ")return K;else return Q}function C1(K,Q,J){if(J.fittingRules.vLayout===0)return"invalid";let q,U=Math.min(K.length,Q.length),Z,M,H=!1,V;if(U===0)return"invalid";for(q=0;q<U;q++)if(Z=K.substring(q,q+1),M=Q.substring(q,q+1),Z!==" "&&M!==" ")if(J.fittingRules.vLayout===1)return"invalid";else if(J.fittingRules.vLayout===2)return"end";else{if(G1(Z,M)){H=H||!1;continue}if(V=!1,V=J.fittingRules.vRule1?Z1(Z,M):V,V=!V&&J.fittingRules.vRule2?$1(Z,M):V,V=!V&&J.fittingRules.vRule3?H1(Z,M):V,V=!V&&J.fittingRules.vRule4?V1(Z,M):V,H=!0,!V)return"invalid"}if(H)return"end";else return"valid"}function F1(K,Q,J){let{length:q,length:U}=K,Z=Q.length,M,H,V,I=1,O,w,P;while(I<=q){M=K.slice(Math.max(0,U-I),U),H=Q.slice(0,Math.min(q,I)),V=H.length,P="";for(O=0;O<V;O++)if(w=C1(M[O],H[O],J),w==="end")P=w;else if(w==="invalid"){P=w;break}else if(P==="")P="valid";if(P==="invalid"){I--;break}if(P==="end")break;if(P==="valid")I++}return Math.min(q,I)}function y1(K,Q,J){let q,U=Math.min(K.length,Q.length),Z,M,H="",V;for(q=0;q<U;q++)if(Z=K.substring(q,q+1),M=Q.substring(q,q+1),Z!==" "&&M!==" ")if(J.fittingRules.vLayout===1)H+=F(Z,M);else if(J.fittingRules.vLayout===2)H+=F(Z,M);else V=!1,V=J.fittingRules.vRule5?G1(Z,M):V,V=!V&&J.fittingRules.vRule1?Z1(Z,M):V,V=!V&&J.fittingRules.vRule2?$1(Z,M):V,V=!V&&J.fittingRules.vRule3?H1(Z,M):V,V=!V&&J.fittingRules.vRule4?V1(Z,M):V,H+=V;else H+=F(Z,M);return H}function S1(K,Q,J,q){let U=K.length,Z=Q.length,M=K.slice(0,Math.max(0,U-J)),H=K.slice(Math.max(0,U-J),U),V=Q.slice(0,Math.min(J,Z)),I,O,w,P=[],B,L=[];O=H.length;for(I=0;I<O;I++){if(I>=Z)w=H[I];else w=y1(H[I],V[I],q);P.push(w)}return B=Q.slice(Math.min(J,Z),Z),L.concat(M,P,B)}function z1(K,Q){let J,q=K.length,U="";for(J=0;J<Q;J++)U+=" ";for(J=0;J<q;J++)K[J]+=U}function v1(K,Q,J){let q=K[0].length,U=Q[0].length,Z;if(q>U)z1(Q,q-U);else if(U>q)z1(K,U-q);return Z=F1(K,Q,J),S1(K,Q,Z,J)}function f1(K,Q,J){if(J.fittingRules.hLayout===0)return 0;let q,U=K.length,Z=Q.length,M=U,H=1,V=!1,I=!1,O,w,P,B;if(U===0)return 0;J:while(H<=M){const L=U-H;O=K.substring(L,L+H),w=Q.substring(0,Math.min(H,Z));for(q=0;q<Math.min(H,Z);q++)if(P=O.substring(q,q+1),B=w.substring(q,q+1),P!==" "&&B!==" "){if(J.fittingRules.hLayout===1){H=H-1;break J}else if(J.fittingRules.hLayout===2){if(P===J.hardBlank||B===J.hardBlank)H=H-1;break J}else if(V=!0,I=!1,I=J.fittingRules.hRule1?C(P,B,J.hardBlank):I,I=!I&&J.fittingRules.hRule2?q1(P,B,J.hardBlank):I,I=!I&&J.fittingRules.hRule3?K1(P,B,J.hardBlank):I,I=!I&&J.fittingRules.hRule4?Q1(P,B,J.hardBlank):I,I=!I&&J.fittingRules.hRule5?U1(P,B,J.hardBlank):I,I=!I&&J.fittingRules.hRule6?X1(P,B,J.hardBlank):I,!I){H=H-1;break J}}if(V)break;H++}return Math.min(M,H)}function r(K,Q,J,q){let U,Z,M=[],H,V,I,O,w,P,B,L;for(U=0;U<q.height;U++){B=K[U],L=Q[U],w=B.length,P=L.length,H=w-J,V=B.substr(0,Math.max(0,H)),I="";const I1=Math.max(0,w-J);var S=B.substring(I1,I1+J),c=L.substring(0,Math.min(J,P));for(Z=0;Z<J;Z++){var b=Z<w?S.substring(Z,Z+1):" ",R=Z<P?c.substring(Z,Z+1):" ";if(b!==" "&&R!==" ")if(q.fittingRules.hLayout===1)I+=F(b,R,q.hardBlank);else if(q.fittingRules.hLayout===2)I+=F(b,R,q.hardBlank);else{var A="";A=!A&&q.fittingRules.hRule1?C(b,R,q.hardBlank):A,A=!A&&q.fittingRules.hRule2?q1(b,R,q.hardBlank):A,A=!A&&q.fittingRules.hRule3?K1(b,R,q.hardBlank):A,A=!A&&q.fittingRules.hRule4?Q1(b,R,q.hardBlank):A,A=!A&&q.fittingRules.hRule5?U1(b,R,q.hardBlank):A,A=!A&&q.fittingRules.hRule6?X1(b,R,q.hardBlank):A,A=A||F(b,R,q.hardBlank),I+=A}else I+=F(b,R,q.hardBlank)}if(J>=P)O="";else O=L.substring(J,J+Math.max(0,P-J));M[U]=V+I+O}return M}function x(K){let Q=[],J;for(J=0;J<K;J++)Q[J]="";return Q}const d=function(K){return Math.max.apply(Math,K.map(function(Q,J){return Q.length}))};function y(K,Q,J){return K.reduce(function(q,U){return r(q,U.fig,U.overlap,J)},x(Q))}function x1(K,Q,J){const q={};for(let U=K.length;--U;){let Z=y(K.slice(0,U),Q,J);if(d(Z)<=J.width){if(q.outputFigText=Z,U<K.length)q.chars=K.slice(U);else q.chars=[];break}}return q}function d1(K,Q,J){let q,U,Z=0,M,H,V,I=J.height,O=[],w,P,B=[],L,S,c,b,R;if(H=x(I),J.width>0&&J.whitespaceBreak)P={chars:[],overlap:Z};if(J.printDirection===1)K=K.split("").reverse().join("");V=K.length;for(q=0;q<V;q++)if(L=K.substring(q,q+1),S=L.match(/\s/),U=Q[L.charCodeAt(0)],b=null,U){if(J.fittingRules.hLayout!==0){Z=1e4;for(M=0;M<J.height;M++)Z=Math.min(Z,f1(H[M],U[M],J));Z=Z===1e4?0:Z}if(J.width>0){if(J.whitespaceBreak)c=y(P.chars.concat([{fig:U,overlap:Z}]),I,J),b=y(B.concat([{fig:c,overlap:P.overlap}]),I,J),w=d(b);else b=r(H,U,Z,J),w=d(b);if(w>=J.width&&q>0)if(J.whitespaceBreak){if(H=y(B.slice(0,-1),I,J),B.length>1)O.push(H),H=x(I);B=[]}else O.push(H),H=x(I)}if(J.width>0&&J.whitespaceBreak){if(!S||q===V-1)P.chars.push({fig:U,overlap:Z});if(S||q===V-1){R=null;while(!0)if(b=y(P.chars,I,J),w=d(b),w>=J.width)R=x1(P.chars,I,J),P={chars:R.chars},O.push(R.outputFigText);else break;if(w>0)if(R)B.push({fig:b,overlap:1});else B.push({fig:b,overlap:P.overlap});if(S)B.push({fig:U,overlap:Z}),H=x(I);if(q===V-1)H=y(B,I,J);P={chars:[],overlap:Z};continue}}H=r(H,U,Z,J)}if(d(H)>0)O.push(H);if(J.showHardBlanks!==!0)O.forEach(function(A){V=A.length;for(M=0;M<V;M++)A[M]=A[M].replace(new RegExp("\\"+J.hardBlank,"g")," ")});return O}const g1=function(K,Q){let J=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],q={},U;if(K==="default")for(U=0;U<J.length;U++)q[J[U]]=Q.fittingRules[J[U]];else if(K==="full")q={hLayout:0,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(K==="fitted")q={hLayout:1,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else if(K==="controlled smushing")q={hLayout:3,hRule1:!0,hRule2:!0,hRule3:!0,hRule4:!0,hRule5:!0,hRule6:!0};else if(K==="universal smushing")q={hLayout:2,hRule1:!1,hRule2:!1,hRule3:!1,hRule4:!1,hRule5:!1,hRule6:!1};else return;return q},m1=function(K,Q){let J=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],q={},U;if(K==="default")for(U=0;U<J.length;U++)q[J[U]]=Q.fittingRules[J[U]];else if(K==="full")q={vLayout:0,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(K==="fitted")q={vLayout:1,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else if(K==="controlled smushing")q={vLayout:3,vRule1:!0,vRule2:!0,vRule3:!0,vRule4:!0,vRule5:!0};else if(K==="universal smushing")q={vLayout:2,vRule1:!1,vRule2:!1,vRule3:!1,vRule4:!1,vRule5:!1};else return;return q},M1=function(K,Q,J){J=J.replace(/\r\n/g,"\n").replace(/\r/g,"\n");let q=J.split("\n"),U=[],Z,M,H;M=q.length;for(Z=0;Z<M;Z++)U=U.concat(d1(q[Z],Y[K],Q));M=U.length,H=U[0];for(Z=1;Z<M;Z++)H=v1(H,U[Z],Q);return H?H.join("\n"):""};function Y1(K,Q){let J=JSON.parse(JSON.stringify(K)),q,U;if(typeof Q.horizontalLayout!=="undefined"){q=g1(Q.horizontalLayout,K);for(U in q)if(q.hasOwnProperty(U))J.fittingRules[U]=q[U]}if(typeof Q.verticalLayout!=="undefined"){q=m1(Q.verticalLayout,K);for(U in q)if(q.hasOwnProperty(U))J.fittingRules[U]=q[U]}return J.printDirection=typeof Q.printDirection!=="undefined"?Q.printDirection:K.printDirection,J.showHardBlanks=Q.showHardBlanks||!1,J.width=Q.width||-1,J.whitespaceBreak=Q.whitespaceBreak||!1,J}const T=function(K,Q,J){return T.text(K,Q,J)};return T.text=async function(K,Q,J){let q="";if(K=K+"",typeof arguments[1]==="function")J=Q,Q={},Q.font=W.font;if(typeof Q==="string")q=Q,Q={};else Q=Q||{},q=Q.font||W.font;return await new Promise((U,Z)=>{T.loadFont(q,function(M,H){if(M){if(Z(M),J)J(M);return}const V=M1(q,Y1(H,Q),K);if(U(V),J)J(null,V)})})},T.textSync=function(K,Q){let J="";if(K=K+"",typeof Q==="string")J=Q,Q={};else Q=Q||{},J=Q.font||W.font;var q=Y1(T.loadFontSync(J),Q);return M1(J,q,K)},T.metadata=function(K,Q){return K=K+"",new Promise(function(J,q){T.loadFont(K,function(U,Z){if(U){if(Q)Q(U);q(U);return}if(Q)Q(null,Z,Y[K].comment);J([Z,Y[K].comment])})})},T.defaults=function(K){if(typeof K==="object"&&K!==null){for(var Q in K)if(K.hasOwnProperty(Q))W[Q]=K[Q]}return JSON.parse(JSON.stringify(W))},T.parseFont=function(K,Q){Q=Q.replace(/\r\n/g,"\n").replace(/\r/g,"\n"),Y[K]={};var J=Q.split("\n"),q=J.splice(0,1)[0].split(" "),U=Y[K],Z={};if(Z.hardBlank=q[0].substr(5,1),Z.height=parseInt(q[1],10),Z.baseline=parseInt(q[2],10),Z.maxLength=parseInt(q[3],10),Z.oldLayout=parseInt(q[4],10),Z.numCommentLines=parseInt(q[5],10),Z.printDirection=q.length>=6?parseInt(q[6],10):0,Z.fullLayout=q.length>=7?parseInt(q[7],10):null,Z.codeTagCount=q.length>=8?parseInt(q[8],10):null,Z.fittingRules=E(Z.oldLayout,Z.fullLayout),U.options=Z,Z.hardBlank.length!==1||isNaN(Z.height)||isNaN(Z.baseline)||isNaN(Z.maxLength)||isNaN(Z.oldLayout)||isNaN(Z.numCommentLines))throw new Error("FIGlet header contains invalid values.");let M=[],H;for(H=32;H<=126;H++)M.push(H);if(M=M.concat(196,214,220,228,246,252,223),J.length<Z.numCommentLines+Z.height*M.length)throw new Error("FIGlet file is missing data.");let V,I,O=!1;U.comment=J.splice(0,Z.numCommentLines).join("\n"),U.numChars=0;while(J.length>0&&U.numChars<M.length){V=M[U.numChars],U[V]=J.splice(0,Z.height);for(H=0;H<Z.height;H++)if(typeof U[V][H]==="undefined")U[V][H]="";else I=new RegExp("\\"+U[V][H].substr(U[V][H].length-1,1)+"+$"),U[V][H]=U[V][H].replace(I,"");U.numChars++}while(J.length>0){if(V=J.splice(0,1)[0].split(" ")[0],/^0[xX][0-9a-fA-F]+$/.test(V))V=parseInt(V,16);else if(/^0[0-7]+$/.test(V))V=parseInt(V,8);else if(/^[0-9]+$/.test(V))V=parseInt(V,10);else if(/^-0[xX][0-9a-fA-F]+$/.test(V))V=parseInt(V,16);else{if(V==="")break;console.log("Invalid data:"+V),O=!0;break}U[V]=J.splice(0,Z.height);for(H=0;H<Z.height;H++)if(typeof U[V][H]==="undefined")U[V][H]="";else I=new RegExp("\\"+U[V][H].substr(U[V][H].length-1,1)+"+$"),U[V][H]=U[V][H].replace(I,"");U.numChars++}if(O===!0)throw new Error("Error parsing data.");return Z},T.loadFont=function(K,Q){if(Y[K]){if(Q)Q(null,Y[K].options);return Promise.resolve()}if(typeof fetch!=="function")throw console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch"),new Error("fetch is required for figlet.js to work.");return fetch(W.fontPath+"/"+K+".flf").then(function(J){if(J.ok)return J.text();throw console.log("Unexpected response",J),new Error("Network response was not ok.")}).then(function(J){if(Q)Q(null,T.parseFont(K,J))}).catch(Q)},T.loadFontSync=function(K){if(Y[K])return Y[K].options;throw new Error("synchronous font loading is not implemented for the browser")},T.preloadFonts=function(K,Q){let J=[];return K.reduce(function(q,U){return q.then(function(){return fetch(W.fontPath+"/"+U+".flf").then((Z)=>{return Z.text()}).then(function(Z){J.push(Z)})})},Promise.resolve()).then(function(q){for(var U in K)if(K.hasOwnProperty(U))T.parseFont(K[U],J[U]);if(Q)Q()})},T.figFonts=Y,T})();if(typeof p!=="undefined"){if(typeof p.exports!=="undefined")p.exports=$J}});var N1=P1((RJ,D1)=>{var __dirname="/Users/abinovalfauzi/Documents/projects/js/jolly/node_modules/figlet/lib",N=L1(),a=import.meta.require("fs"),J1=import.meta.require("path"),l=J1.join(__dirname,"/../fonts/");N.loadFont=function($,X){return new Promise(function(G,z){if(N.figFonts[$]){X&&X(null,N.figFonts[$].options),G(N.figFonts[$].options);return}a.readFile(J1.join(l,$+".flf"),{encoding:"utf-8"},function(Y,W){if(Y){X&&X(Y),z(Y);return}W=W+"";try{var E=N.parseFont($,W);X&&X(null,E),G(E)}catch(C){X&&X(C),z(C)}})})};N.loadFontSync=function($){if(N.figFonts[$])return N.figFonts[$].options;var X=a.readFileSync(J1.join(l,$+".flf"),{encoding:"utf-8"});return X=X+"",N.parseFont($,X)};N.fonts=function($){return new Promise(function(X,G){var z=[];a.readdir(l,function(Y,W){if(Y){$&&$(Y),G(Y);return}W.forEach(function(E){if(/\.flf$/.test(E))z.push(E.replace(/\.flf$/,""))}),$&&$(null,z),X(z)})})};N.fontsSync=function(){var $=[];return a.readdirSync(l).forEach(function(X){if(/\.flf$/.test(X))$.push(X.replace(/\.flf$/,""))}),$};D1.exports=N});function n1(){const $=new Map;for(let[X,G]of Object.entries(k)){for(let[z,Y]of Object.entries(G))k[z]={open:`\x1B[${Y[0]}m`,close:`\x1B[${Y[1]}m`},G[z]=k[z],$.set(Y[0],Y[1]);Object.defineProperty(k,X,{value:G,enumerable:!1})}return Object.defineProperty(k,"codes",{value:$,enumerable:!1}),k.color.close="\x1B[39m",k.bgColor.close="\x1B[49m",k.color.ansi=W1(),k.color.ansi256=B1(),k.color.ansi16m=E1(),k.bgColor.ansi=W1(10),k.bgColor.ansi256=B1(10),k.bgColor.ansi16m=E1(10),Object.defineProperties(k,{rgbToAnsi256:{value(X,G,z){if(X===G&&G===z){if(X<8)return 16;if(X>248)return 231;return Math.round((X-8)/247*24)+232}return 16+36*Math.round(X/255*5)+6*Math.round(G/255*5)+Math.round(z/255*5)},enumerable:!1},hexToRgb:{value(X){const G=/[a-f\d]{6}|[a-f\d]{3}/i.exec(X.toString(16));if(!G)return[0,0,0];let[z]=G;if(z.length===3)z=[...z].map((W)=>W+W).join("");const Y=Number.parseInt(z,16);return[Y>>16&255,Y>>8&255,Y&255]},enumerable:!1},hexToAnsi256:{value:(X)=>k.rgbToAnsi256(...k.hexToRgb(X)),enumerable:!1},ansi256ToAnsi:{value(X){if(X<8)return 30+X;if(X<16)return 90+(X-8);let G,z,Y;if(X>=232)G=((X-232)*10+8)/255,z=G,Y=G;else{X-=16;const C=X%36;G=Math.floor(X/36)/5,z=Math.floor(C/6)/5,Y=C%6/5}const W=Math.max(G,z,Y)*2;if(W===0)return 30;let E=30+(Math.round(Y)<<2|Math.round(z)<<1|Math.round(G));if(W===2)E+=60;return E},enumerable:!1},rgbToAnsi:{value:(X,G,z)=>k.ansi256ToAnsi(k.rgbToAnsi256(X,G,z)),enumerable:!1},hexToAnsi:{value:(X)=>k.ansi256ToAnsi(k.hexToAnsi256(X)),enumerable:!1}}),k}var W1=($=0)=>(X)=>`\x1B[${X+$}m`,B1=($=0)=>(X)=>`\x1B[${38+$};5;${X}m`,E1=($=0)=>(X,G,z)=>`\x1B[${38+$};2;${X};${G};${z}m`,k={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}},zJ=Object.keys(k.modifier),l1=Object.keys(k.color),r1=Object.keys(k.bgColor),MJ=[...l1,...r1],i1=n1(),_=i1;import i from"process";import o1 from"os";import O1 from"tty";function D($,X=globalThis.Deno?globalThis.Deno.args:i.argv){const G=$.startsWith("-")?"":$.length===1?"-":"--",z=X.indexOf(G+$),Y=X.indexOf("--");return z!==-1&&(Y===-1||z<Y)}function s1(){if("FORCE_COLOR"in j){if(j.FORCE_COLOR==="true")return 1;if(j.FORCE_COLOR==="false")return 0;return j.FORCE_COLOR.length===0?1:Math.min(Number.parseInt(j.FORCE_COLOR,10),3)}}function t1($){if($===0)return!1;return{level:$,hasBasic:!0,has256:$>=2,has16m:$>=3}}function e1($,{streamIsTTY:X,sniffFlags:G=!0}={}){const z=s1();if(z!==void 0)u=z;const Y=G?u:z;if(Y===0)return 0;if(G){if(D("color=16m")||D("color=full")||D("color=truecolor"))return 3;if(D("color=256"))return 2}if("TF_BUILD"in j&&"AGENT_NAME"in j)return 1;if($&&!X&&Y===void 0)return 0;const W=Y||0;if(j.TERM==="dumb")return W;if(i.platform==="win32"){const E=o1.release().split(".");if(Number(E[0])>=10&&Number(E[2])>=10586)return Number(E[2])>=14931?3:2;return 1}if("CI"in j){if("GITHUB_ACTIONS"in j||"GITEA_ACTIONS"in j)return 3;if(["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","BUILDKITE","DRONE"].some((E)=>(E in j))||j.CI_NAME==="codeship")return 1;return W}if("TEAMCITY_VERSION"in j)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(j.TEAMCITY_VERSION)?1:0;if(j.COLORTERM==="truecolor")return 3;if(j.TERM==="xterm-kitty")return 3;if("TERM_PROGRAM"in j){const E=Number.parseInt((j.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(j.TERM_PROGRAM){case"iTerm.app":return E>=3?3:2;case"Apple_Terminal":return 2}}if(/-256(color)?$/i.test(j.TERM))return 2;if(/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(j.TERM))return 1;if("COLORTERM"in j)return 1;return W}function A1($,X={}){const G=e1($,{streamIsTTY:$&&$.isTTY,...X});return t1(G)}var{env:j}=i,u;if(D("no-color")||D("no-colors")||D("color=false")||D("color=never"))u=0;else if(D("color")||D("colors")||D("color=true")||D("color=always"))u=1;var JJ={stdout:A1({isTTY:O1.isatty(1)}),stderr:A1({isTTY:O1.isatty(2)})},w1=JJ;function k1($,X,G){let z=$.indexOf(X);if(z===-1)return $;const Y=X.length;let W=0,E="";do E+=$.slice(W,z)+X+G,W=z+Y,z=$.indexOf(X,W);while(z!==-1);return E+=$.slice(W),E}function j1($,X,G,z){let Y=0,W="";do{const E=$[z-1]==="\r";W+=$.slice(Y,E?z-1:z)+X+(E?"\r\n":"\n")+G,Y=z+1,z=$.indexOf("\n",Y)}while(z!==-1);return W+=$.slice(Y),W}function m($){return KJ($)}var{stdout:b1,stderr:R1}=w1,o=Symbol("GENERATOR"),v=Symbol("STYLER"),g=Symbol("IS_EMPTY"),T1=["ansi","ansi","ansi256","ansi16m"],f=Object.create(null),qJ=($,X={})=>{if(X.level&&!(Number.isInteger(X.level)&&X.level>=0&&X.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const G=b1?b1.level:0;$.level=X.level===void 0?G:X.level};var KJ=($)=>{const X=(...G)=>G.join(" ");return qJ(X,$),Object.setPrototypeOf(X,m.prototype),X};Object.setPrototypeOf(m.prototype,Function.prototype);for(let[$,X]of Object.entries(_))f[$]={get(){const G=h(this,t(X.open,X.close,this[v]),this[g]);return Object.defineProperty(this,$,{value:G}),G}};f.visible={get(){const $=h(this,this[v],!0);return Object.defineProperty(this,"visible",{value:$}),$}};var s=($,X,G,...z)=>{if($==="rgb"){if(X==="ansi16m")return _[G].ansi16m(...z);if(X==="ansi256")return _[G].ansi256(_.rgbToAnsi256(...z));return _[G].ansi(_.rgbToAnsi(...z))}if($==="hex")return s("rgb",X,G,..._.hexToRgb(...z));return _[G][$](...z)},QJ=["rgb","hex","ansi256"];for(let $ of QJ){f[$]={get(){const{level:G}=this;return function(...z){const Y=t(s($,T1[G],"color",...z),_.color.close,this[v]);return h(this,Y,this[g])}}};const X="bg"+$[0].toUpperCase()+$.slice(1);f[X]={get(){const{level:G}=this;return function(...z){const Y=t(s($,T1[G],"bgColor",...z),_.bgColor.close,this[v]);return h(this,Y,this[g])}}}}var UJ=Object.defineProperties(()=>{},{...f,level:{enumerable:!0,get(){return this[o].level},set($){this[o].level=$}}}),t=($,X,G)=>{let z,Y;if(G===void 0)z=$,Y=X;else z=G.openAll+$,Y=X+G.closeAll;return{open:$,close:X,openAll:z,closeAll:Y,parent:G}},h=($,X,G)=>{const z=(...Y)=>XJ(z,Y.length===1?""+Y[0]:Y.join(" "));return Object.setPrototypeOf(z,UJ),z[o]=$,z[v]=X,z[g]=G,z},XJ=($,X)=>{if($.level<=0||!X)return $[g]?"":X;let G=$[v];if(G===void 0)return X;const{openAll:z,closeAll:Y}=G;if(X.includes("\x1B"))while(G!==void 0)X=k1(X,G.close,G.open),G=G.parent;const W=X.indexOf("\n");if(W!==-1)X=j1(X,Y,z,W);return z+X+Y};Object.defineProperties(m.prototype,f);var ZJ=m(),kJ=m({level:R1?R1.level:0});var e=ZJ;var _1=a1(N1(),1);function LJ(){console.log(e.cyan(_1.default.textSync("Jolly CLI",{horizontalLayout:"fitted"}))),console.log(e.green(`

\u2728 Welcome to the Jolly Compiler! \u2728
`))}export{LJ as printHeader};

//# debugId=A4564C010EA06F9B64756E2164756E21
//# sourceMappingURL=header.js.map
