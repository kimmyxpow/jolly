// @bun
var a=Object.create;var{getPrototypeOf:i,defineProperty:F,getOwnPropertyNames:o}=Object;var s=Object.prototype.hasOwnProperty;var XJ=(q,J,V)=>{V=q!=null?a(i(q)):{};const z=J||!q||!q.__esModule?F(V,"default",{value:q,enumerable:!0}):V;for(let D of o(q))if(!s.call(z,D))F(z,D,{get:()=>q[D],enumerable:!0});return z};var ZJ=(q,J)=>()=>(J||q((J={exports:{}}).exports,J),J.exports);var $J=(q,J)=>{for(var V in J)F(q,V,{get:J[V],enumerable:!0,configurable:!0,set:(z)=>J[V]=()=>z})};var OJ=(q,J)=>()=>(q&&(J=q(q=0)),J);var T={fun:"function",lock:"const",free:"let",fam:"class",loopy:"for",aslong:"while",when:"if",maybe:"else if",meh:"else",yay:"return",pls:"await",call:"new"};function r(){const q=new Map;for(let[J,V]of Object.entries(K)){for(let[z,D]of Object.entries(V))K[z]={open:`\x1B[${D[0]}m`,close:`\x1B[${D[1]}m`},V[z]=K[z],q.set(D[0],D[1]);Object.defineProperty(K,J,{value:V,enumerable:!1})}return Object.defineProperty(K,"codes",{value:q,enumerable:!1}),K.color.close="\x1B[39m",K.bgColor.close="\x1B[49m",K.color.ansi=f(),K.color.ansi256=b(),K.color.ansi16m=C(),K.bgColor.ansi=f(10),K.bgColor.ansi256=b(10),K.bgColor.ansi16m=C(10),Object.defineProperties(K,{rgbToAnsi256:{value(J,V,z){if(J===V&&V===z){if(J<8)return 16;if(J>248)return 231;return Math.round((J-8)/247*24)+232}return 16+36*Math.round(J/255*5)+6*Math.round(V/255*5)+Math.round(z/255*5)},enumerable:!1},hexToRgb:{value(J){const V=/[a-f\d]{6}|[a-f\d]{3}/i.exec(J.toString(16));if(!V)return[0,0,0];let[z]=V;if(z.length===3)z=[...z].map((H)=>H+H).join("");const D=Number.parseInt(z,16);return[D>>16&255,D>>8&255,D&255]},enumerable:!1},hexToAnsi256:{value:(J)=>K.rgbToAnsi256(...K.hexToRgb(J)),enumerable:!1},ansi256ToAnsi:{value(J){if(J<8)return 30+J;if(J<16)return 90+(J-8);let V,z,D;if(J>=232)V=((J-232)*10+8)/255,z=V,D=V;else{J-=16;const $=J%36;V=Math.floor(J/36)/5,z=Math.floor($/6)/5,D=$%6/5}const H=Math.max(V,z,D)*2;if(H===0)return 30;let Q=30+(Math.round(D)<<2|Math.round(z)<<1|Math.round(V));if(H===2)Q+=60;return Q},enumerable:!1},rgbToAnsi:{value:(J,V,z)=>K.ansi256ToAnsi(K.rgbToAnsi256(J,V,z)),enumerable:!1},hexToAnsi:{value:(J)=>K.ansi256ToAnsi(K.hexToAnsi256(J)),enumerable:!1}}),K}var f=(q=0)=>(J)=>`\x1B[${J+q}m`,b=(q=0)=>(J)=>`\x1B[${38+q};5;${J}m`,C=(q=0)=>(J,V,z)=>`\x1B[${38+q};2;${J};${V};${z}m`,K={modifier:{reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],overline:[53,55],inverse:[7,27],hidden:[8,28],strikethrough:[9,29]},color:{black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],blackBright:[90,39],gray:[90,39],grey:[90,39],redBright:[91,39],greenBright:[92,39],yellowBright:[93,39],blueBright:[94,39],magentaBright:[95,39],cyanBright:[96,39],whiteBright:[97,39]},bgColor:{bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],bgBlackBright:[100,49],bgGray:[100,49],bgGrey:[100,49],bgRedBright:[101,49],bgGreenBright:[102,49],bgYellowBright:[103,49],bgBlueBright:[104,49],bgMagentaBright:[105,49],bgCyanBright:[106,49],bgWhiteBright:[107,49]}},jJ=Object.keys(K.modifier),n=Object.keys(K.color),t=Object.keys(K.bgColor),YJ=[...n,...t],l=r(),Z=l;import _ from"process";import e from"os";import v from"tty";function W(q,J=globalThis.Deno?globalThis.Deno.args:_.argv){const V=q.startsWith("-")?"":q.length===1?"-":"--",z=J.indexOf(V+q),D=J.indexOf("--");return z!==-1&&(D===-1||z<D)}function JJ(){if("FORCE_COLOR"in U){if(U.FORCE_COLOR==="true")return 1;if(U.FORCE_COLOR==="false")return 0;return U.FORCE_COLOR.length===0?1:Math.min(Number.parseInt(U.FORCE_COLOR,10),3)}}function qJ(q){if(q===0)return!1;return{level:q,hasBasic:!0,has256:q>=2,has16m:q>=3}}function VJ(q,{streamIsTTY:J,sniffFlags:V=!0}={}){const z=JJ();if(z!==void 0)x=z;const D=V?x:z;if(D===0)return 0;if(V){if(W("color=16m")||W("color=full")||W("color=truecolor"))return 3;if(W("color=256"))return 2}if("TF_BUILD"in U&&"AGENT_NAME"in U)return 1;if(q&&!J&&D===void 0)return 0;const H=D||0;if(U.TERM==="dumb")return H;if(_.platform==="win32"){const Q=e.release().split(".");if(Number(Q[0])>=10&&Number(Q[2])>=10586)return Number(Q[2])>=14931?3:2;return 1}if("CI"in U){if("GITHUB_ACTIONS"in U||"GITEA_ACTIONS"in U)return 3;if(["TRAVIS","CIRCLECI","APPVEYOR","GITLAB_CI","BUILDKITE","DRONE"].some((Q)=>(Q in U))||U.CI_NAME==="codeship")return 1;return H}if("TEAMCITY_VERSION"in U)return/^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(U.TEAMCITY_VERSION)?1:0;if(U.COLORTERM==="truecolor")return 3;if(U.TERM==="xterm-kitty")return 3;if("TERM_PROGRAM"in U){const Q=Number.parseInt((U.TERM_PROGRAM_VERSION||"").split(".")[0],10);switch(U.TERM_PROGRAM){case"iTerm.app":return Q>=3?3:2;case"Apple_Terminal":return 2}}if(/-256(color)?$/i.test(U.TERM))return 2;if(/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(U.TERM))return 1;if("COLORTERM"in U)return 1;return H}function h(q,J={}){const V=VJ(q,{streamIsTTY:q&&q.isTTY,...J});return qJ(V)}var{env:U}=_,x;if(W("no-color")||W("no-colors")||W("color=false")||W("color=never"))x=0;else if(W("color")||W("colors")||W("color=true")||W("color=always"))x=1;var zJ={stdout:h({isTTY:v.isatty(1)}),stderr:h({isTTY:v.isatty(2)})},y=zJ;function u(q,J,V){let z=q.indexOf(J);if(z===-1)return q;const D=J.length;let H=0,Q="";do Q+=q.slice(H,z)+J+V,H=z+D,z=q.indexOf(J,H);while(z!==-1);return Q+=q.slice(H),Q}function p(q,J,V,z){let D=0,H="";do{const Q=q[z-1]==="\r";H+=q.slice(D,Q?z-1:z)+J+(Q?"\r\n":"\n")+V,D=z+1,z=q.indexOf("\n",D)}while(z!==-1);return H+=q.slice(D),H}function A(q){return HJ(q)}var{stdout:c,stderr:g}=y,E=Symbol("GENERATOR"),j=Symbol("STYLER"),I=Symbol("IS_EMPTY"),d=["ansi","ansi","ansi256","ansi16m"],Y=Object.create(null),DJ=(q,J={})=>{if(J.level&&!(Number.isInteger(J.level)&&J.level>=0&&J.level<=3))throw new Error("The `level` option should be an integer from 0 to 3");const V=c?c.level:0;q.level=J.level===void 0?V:J.level};var HJ=(q)=>{const J=(...V)=>V.join(" ");return DJ(J,q),Object.setPrototypeOf(J,A.prototype),J};Object.setPrototypeOf(A.prototype,Function.prototype);for(let[q,J]of Object.entries(Z))Y[q]={get(){const V=M(this,S(J.open,J.close,this[j]),this[I]);return Object.defineProperty(this,q,{value:V}),V}};Y.visible={get(){const q=M(this,this[j],!0);return Object.defineProperty(this,"visible",{value:q}),q}};var N=(q,J,V,...z)=>{if(q==="rgb"){if(J==="ansi16m")return Z[V].ansi16m(...z);if(J==="ansi256")return Z[V].ansi256(Z.rgbToAnsi256(...z));return Z[V].ansi(Z.rgbToAnsi(...z))}if(q==="hex")return N("rgb",J,V,...Z.hexToRgb(...z));return Z[V][q](...z)},KJ=["rgb","hex","ansi256"];for(let q of KJ){Y[q]={get(){const{level:V}=this;return function(...z){const D=S(N(q,d[V],"color",...z),Z.color.close,this[j]);return M(this,D,this[I])}}};const J="bg"+q[0].toUpperCase()+q.slice(1);Y[J]={get(){const{level:V}=this;return function(...z){const D=S(N(q,d[V],"bgColor",...z),Z.bgColor.close,this[j]);return M(this,D,this[I])}}}}var QJ=Object.defineProperties(()=>{},{...Y,level:{enumerable:!0,get(){return this[E].level},set(q){this[E].level=q}}}),S=(q,J,V)=>{let z,D;if(V===void 0)z=q,D=J;else z=V.openAll+q,D=J+V.closeAll;return{open:q,close:J,openAll:z,closeAll:D,parent:V}},M=(q,J,V)=>{const z=(...D)=>UJ(z,D.length===1?""+D[0]:D.join(" "));return Object.setPrototypeOf(z,QJ),z[E]=q,z[j]=J,z[I]=V,z},UJ=(q,J)=>{if(q.level<=0||!J)return q[I]?"":J;let V=q[j];if(V===void 0)return J;const{openAll:z,closeAll:D}=V;if(J.includes("\x1B"))while(V!==void 0)J=u(J,V.close,V.open),V=V.parent;const H=J.indexOf("\n");if(H!==-1)J=p(J,D,z,H);return z+J+D};Object.defineProperties(A.prototype,Y);var WJ=A(),FJ=A({level:g?g.level:0});var R=WJ;class w extends Error{constructor(q,J,V,z,D){const H=R.red.bold(D),Q=z.replace(new RegExp(`\\b${D}\\b`,"g"),H),$=`
${R.red("Compiler Error")}: ${q}
File: ${R.cyan(J)}
Line: ${R.yellow(V)}

Problematic Code:
  ${Q}

Hint: Ensure the keyword "${R.blue(D)}" is used in the correct context.
`;super($);this.name="CompilerError"}}class m{reservedKeywords;constructor(){this.reservedKeywords=Object.keys(T)}compile(q,J){const V=q.split("\n"),z=[];let D=!1;return V.forEach((H,Q)=>{if(!D)this.validateLine(H,J,Q+1);const $=H.indexOf("//"),B=H.indexOf("/*"),X=H.indexOf("*/");let O=H,G="";if(D)if(X!==-1)D=!1,G=H.slice(0,X+2),O=H.slice(X+2);else{z.push(H);return}else if(B!==-1&&X===-1)D=!0,G=H.slice(B),O=H.slice(0,B);else if(B!==-1&&X!==-1)G=H.slice(B,X+2),O=H.slice(0,B)+H.slice(X+2);else if($!==-1)O=H.slice(0,$),G=H.slice($);const P=new RegExp(`\\b(${Object.keys(T).join("|")})\\b`,"g"),L=O.replace(P,(k)=>T[k]||k);z.push(L+G)}),z.join("\n")}validateLine(q,J,V){const z=q.trim();if(!z||z.startsWith("//"))return;const D={when:/^\s*when\s*\(/,maybe:/^\s*\}\s*maybe\s*\(/,meh:/^\s*\}\s*meh\s*\{/,loopy:/^\s*loopy\s*\(/,aslong:/^\s*aslong\s*\(/};for(let[L,k]of Object.entries(D))if(k.test(z))return;const H=new RegExp(`\\b(${this.reservedKeywords.join("|")})\\b\\s*=`),Q=new RegExp(`\\b(${this.reservedKeywords.join("|")})\\b\\s*\\(`),$=new RegExp(`\\.(${this.reservedKeywords.join("|")})\\b`),B=new RegExp(`\\b(${this.reservedKeywords.join("|")})\\b\\s*:`),X=H.exec(q);if(X)throw new w(`The keyword "${X[1]}" cannot be used as a variable name.`,J,V,q,X[1]);const O=Q.exec(q);if(O)throw new w(`The keyword "${O[1]}" cannot be used as a function name.`,J,V,q,O[1]);const G=$.exec(q);if(G)throw new w(`The keyword "${G[1]}" cannot be used as a property name.`,J,V,q,G[1]);const P=B.exec(q);if(P)throw new w(`The keyword "${P[1]}" cannot be used as a property name in an object literal.`,J,V,q,P[1])}}export{T as keywordMapping,m as JollyCompiler};

//# debugId=3DAC0461BBB2276D64756E2164756E21
//# sourceMappingURL=index.js.map
