(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ho="171",lu=0,Io=1,cu=2,Kl=1,uu=2,Bn=3,oi=0,$t=1,kn=2,ri=0,si=1,Vi=2,No=3,Uo=4,Ma=5,Hn=100,du=101,hu=102,fu=103,pu=104,mu=200,gu=201,_u=202,vu=203,gr=204,_r=205,xu=206,yu=207,Mu=208,bu=209,Su=210,Eu=211,Tu=212,Au=213,wu=214,ba=0,Sa=1,Ea=2,$i=3,Ta=4,Aa=5,wa=6,Ra=7,Jl=0,Ru=1,Cu=2,ai=0,Pu=1,Lu=2,Du=3,Iu=4,Nu=5,Uu=6,Fu=7,Ql=300,Yi=301,ji=302,Ca=303,Pa=304,Rs=306,La=1e3,xi=1001,Da=1002,Mn=1003,Ou=1004,Pr=1005,Cn=1006,ks=1007,yi=1008,qn=1009,ec=1010,tc=1011,vr=1012,fo=1013,Mi=1014,Vn=1015,Er=1016,po=1017,mo=1018,Zi=1020,nc=35902,ic=1021,rc=1022,yn=1023,sc=1024,ac=1025,Xi=1026,Ki=1027,oc=1028,go=1029,lc=1030,_o=1031,vo=1033,ls=33776,cs=33777,us=33778,ds=33779,Ia=35840,Na=35841,Ua=35842,Fa=35843,Oa=36196,Ba=37492,za=37496,ka=37808,Ha=37809,Va=37810,Ga=37811,Wa=37812,Xa=37813,qa=37814,$a=37815,Ya=37816,ja=37817,Za=37818,Ka=37819,Ja=37820,Qa=37821,hs=36492,eo=36494,to=36495,cc=36283,no=36284,io=36285,ro=36286,Bu=3200,zu=3201,ku=0,Hu=1,ni="",sn="srgb",Ji="srgb-linear",vs="linear",ct="srgb",Ei=7680,Fo=519,Vu=512,Gu=513,Wu=514,uc=515,Xu=516,qu=517,$u=518,Yu=519,Oo=35044,ju=35048,Bo="300 es",Gn=2e3,xs=2001;class er{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zo=1234567;const hr=Math.PI/180,xr=180/Math.PI;function tr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[n&255]+Ot[n>>8&255]+Ot[n>>16&255]+Ot[n>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[t&63|128]+Ot[t>>8&255]+"-"+Ot[t>>16&255]+Ot[t>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function xo(n,e){return(n%e+e)%e}function Zu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function Ku(n,e,t){return n!==e?(t-n)/(e-n):0}function fr(n,e,t){return(1-t)*n+t*e}function Ju(n,e,t,i){return fr(n,e,1-Math.exp(-t*i))}function Qu(n,e=1){return e-Math.abs(xo(n,e*2)-e)}function ed(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function td(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function nd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function id(n,e){return n+Math.random()*(e-n)}function rd(n){return n*(.5-Math.random())}function sd(n){n!==void 0&&(zo=n);let e=zo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ad(n){return n*hr}function od(n){return n*xr}function ld(n){return(n&n-1)===0&&n!==0}function cd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ud(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function dd(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),h=a((e-i)/2),m=s((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*f,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*f,o*c);break;case"ZXZ":n.set(l*f,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*v,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*v,o*c);break;case"ZYZ":n.set(l*v,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ki(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ht(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const yo={DEG2RAD:hr,RAD2DEG:xr,generateUUID:tr,clamp:Je,euclideanModulo:xo,mapLinear:Zu,inverseLerp:Ku,lerp:fr,damp:Ju,pingpong:Qu,smoothstep:ed,smootherstep:td,randInt:nd,randFloat:id,randFloatSpread:rd,seededRandom:sd,degToRad:ad,radToDeg:od,isPowerOfTwo:ld,ceilPowerOfTwo:cd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:dd,normalize:Ht,denormalize:ki};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],v=i[8],g=r[0],p=r[3],d=r[6],w=r[1],A=r[4],_=r[7],C=r[2],T=r[5],P=r[8];return s[0]=a*g+o*w+l*C,s[3]=a*p+o*A+l*T,s[6]=a*d+o*_+l*P,s[1]=c*g+u*w+f*C,s[4]=c*p+u*A+f*T,s[7]=c*d+u*_+f*P,s[2]=h*g+m*w+v*C,s[5]=h*p+m*A+v*T,s[8]=h*d+m*_+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,v=t*f+i*h+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=h*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Hs.makeScale(e,t)),this}rotate(e){return this.premultiply(Hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hs=new We;function dc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ys(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hd(){const n=ys("canvas");return n.style.display="block",n}const ko={};function Hi(n){n in ko||(ko[n]=!0,console.warn(n))}function fd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function pd(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function md(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ho=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vo=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gd(){const n={enabled:!0,workingColorSpace:Ji,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Xn(r.r),r.g=Xn(r.g),r.b=Xn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ni?vs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ji]:{primaries:e,whitePoint:i,transfer:vs,toXYZ:Ho,fromXYZ:Vo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Ho,fromXYZ:Vo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),n}const tt=gd();function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qi(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ti;class _d{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ti===void 0&&(Ti=ys("canvas")),Ti.width=e.width,Ti.height=e.height;const i=Ti.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ti}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ys("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Xn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Xn(t[i]/255)*255):t[i]=Xn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vd=0;class hc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vs(r[a].image)):s.push(Vs(r[a]))}else s=Vs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Vs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?_d.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xd=0;class Yt extends er{constructor(e=Yt.DEFAULT_IMAGE,t=Yt.DEFAULT_MAPPING,i=xi,r=xi,s=Cn,a=yi,o=yn,l=qn,c=Yt.DEFAULT_ANISOTROPY,u=ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=tr(),this.name="",this.source=new hc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ql)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case La:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case La:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yt.DEFAULT_IMAGE=null;Yt.DEFAULT_MAPPING=Ql;Yt.DEFAULT_ANISOTROPY=1;class yt{constructor(e=0,t=0,i=0,r=1){yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],v=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const A=(c+1)/2,_=(m+1)/2,C=(d+1)/2,T=(u+h)/4,P=(f+g)/4,I=(v+p)/4;return A>_&&A>C?A<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(A),r=T/i,s=P/i):_>C?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=I/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=P/s,r=I/s),this.set(i,r,s,t),this}let w=Math.sqrt((p-v)*(p-v)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(p-v)/w,this.y=(f-g)/w,this.z=(h-u)/w,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yd extends er{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new yt(0,0,e,t),this.scissorTest=!1,this.viewport=new yt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Yt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new hc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends yd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class fc extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Md extends Yt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],v=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==h||c!==m||u!==v){let p=1-o;const d=l*h+c*m+u*v+f*g,w=d>=0?1:-1,A=1-d*d;if(A>Number.EPSILON){const C=Math.sqrt(A),T=Math.atan2(C,d*w);p=Math.sin(p*T)/C,o=Math.sin(o*T)/C}const _=o*w;if(l=l*p+h*_,c=c*p+m*_,u=u*p+v*_,f=f*p+g*_,p===1-o){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],v=s[a+3];return e[t]=o*v+u*f+l*m-c*h,e[t+1]=l*v+u*h+c*f-o*m,e[t+2]=c*v+u*m+o*h-l*f,e[t+3]=u*v-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"YXZ":this._x=h*u*f+c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"ZXY":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f-h*m*v;break;case"ZYX":this._x=h*u*f-c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f+h*m*v;break;case"YZX":this._x=h*u*f+c*m*v,this._y=c*m*f+h*u*v,this._z=c*u*v-h*m*f,this._w=c*u*f-h*m*v;break;case"XZY":this._x=h*u*f-c*m*v,this._y=c*m*f-h*u*v,this._z=c*u*v+h*m*f,this._w=c*u*f+h*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Go.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Go.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),f=2*(s*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Gs.copy(this).projectOnVector(e),this.sub(Gs)}reflect(e){return this.sub(Gs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gs=new z,Go=new Tr;class Ar{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(s,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lr.copy(i.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(sr),Dr.subVectors(this.max,sr),Ai.subVectors(e.a,sr),wi.subVectors(e.b,sr),Ri.subVectors(e.c,sr),Zn.subVectors(wi,Ai),Kn.subVectors(Ri,wi),ci.subVectors(Ai,Ri);let t=[0,-Zn.z,Zn.y,0,-Kn.z,Kn.y,0,-ci.z,ci.y,Zn.z,0,-Zn.x,Kn.z,0,-Kn.x,ci.z,0,-ci.x,-Zn.y,Zn.x,0,-Kn.y,Kn.x,0,-ci.y,ci.x,0];return!Ws(t,Ai,wi,Ri,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Ws(t,Ai,wi,Ri,Dr))?!1:(Ir.crossVectors(Zn,Kn),t=[Ir.x,Ir.y,Ir.z],Ws(t,Ai,wi,Ri,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const In=[new z,new z,new z,new z,new z,new z,new z,new z],mn=new z,Lr=new Ar,Ai=new z,wi=new z,Ri=new z,Zn=new z,Kn=new z,ci=new z,sr=new z,Dr=new z,Ir=new z,ui=new z;function Ws(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){ui.fromArray(n,s);const o=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),l=e.dot(ui),c=t.dot(ui),u=i.dot(ui);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const bd=new Ar,ar=new z,Xs=new z;class wr{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):bd.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ar.subVectors(e,this.center);const t=ar.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ar,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ar.copy(e.center).add(Xs)),this.expandByPoint(ar.copy(e.center).sub(Xs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new z,qs=new z,Nr=new z,Jn=new z,$s=new z,Ur=new z,Ys=new z;class Mo{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qs.copy(e).add(t).multiplyScalar(.5),Nr.copy(t).sub(e).normalize(),Jn.copy(this.origin).sub(qs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Nr),o=Jn.dot(this.direction),l=-Jn.dot(Nr),c=Jn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,v;if(u>0)if(f=a*l-o,h=a*o-l,v=s*u,f>=0)if(h>=-v)if(h<=v){const g=1/u;f*=g,h*=g,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-v?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=v?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qs).addScaledVector(Nr,h),m}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,i,r,s){$s.subVectors(t,e),Ur.subVectors(i,e),Ys.crossVectors($s,Ur);let a=this.direction.dot(Ys),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Jn.subVectors(this.origin,e);const l=o*this.direction.dot(Ur.crossVectors(Jn,Ur));if(l<0)return null;const c=o*this.direction.dot($s.cross(Jn));if(c<0||l+c>a)return null;const u=-o*Jn.dot(Ys);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,f,h,m,v,g,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,f,h,m,v,g,p)}set(e,t,i,r,s,a,o,l,c,u,f,h,m,v,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=m,d[7]=v,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ci.setFromMatrixColumn(e,0).length(),s=1/Ci.setFromMatrixColumn(e,1).length(),a=1/Ci.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,v=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,v=c*u,g=c*f;t[0]=h+g*o,t[4]=v*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-v,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,v=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=v+m*o,t[1]=m+v*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,v=o*u,g=o*f;t[0]=l*u,t[4]=v*c-m,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=m*c-v,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=v*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+v,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,m=a*c,v=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=m*f-v,t[2]=v*f-m,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sd,e,Ed)}lookAt(e,t,i){const r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Qn.crossVectors(i,Kt),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Qn.crossVectors(i,Kt)),Qn.normalize(),Fr.crossVectors(Kt,Qn),r[0]=Qn.x,r[4]=Fr.x,r[8]=Kt.x,r[1]=Qn.y,r[5]=Fr.y,r[9]=Kt.y,r[2]=Qn.z,r[6]=Fr.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],v=i[2],g=i[6],p=i[10],d=i[14],w=i[3],A=i[7],_=i[11],C=i[15],T=r[0],P=r[4],I=r[8],E=r[12],M=r[1],D=r[5],Y=r[9],q=r[13],k=r[2],Z=r[6],j=r[10],le=r[14],$=r[3],oe=r[7],he=r[11],ue=r[15];return s[0]=a*T+o*M+l*k+c*$,s[4]=a*P+o*D+l*Z+c*oe,s[8]=a*I+o*Y+l*j+c*he,s[12]=a*E+o*q+l*le+c*ue,s[1]=u*T+f*M+h*k+m*$,s[5]=u*P+f*D+h*Z+m*oe,s[9]=u*I+f*Y+h*j+m*he,s[13]=u*E+f*q+h*le+m*ue,s[2]=v*T+g*M+p*k+d*$,s[6]=v*P+g*D+p*Z+d*oe,s[10]=v*I+g*Y+p*j+d*he,s[14]=v*E+g*q+p*le+d*ue,s[3]=w*T+A*M+_*k+C*$,s[7]=w*P+A*D+_*Z+C*oe,s[11]=w*I+A*Y+_*j+C*he,s[15]=w*E+A*q+_*le+C*ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],v=e[3],g=e[7],p=e[11],d=e[15];return v*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+g*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+d*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],v=e[12],g=e[13],p=e[14],d=e[15],w=f*p*c-g*h*c+g*l*m-o*p*m-f*l*d+o*h*d,A=v*h*c-u*p*c-v*l*m+a*p*m+u*l*d-a*h*d,_=u*g*c-v*f*c+v*o*m-a*g*m-u*o*d+a*f*d,C=v*f*l-u*g*l-v*o*h+a*g*h+u*o*p-a*f*p,T=t*w+i*A+r*_+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return e[0]=w*P,e[1]=(g*h*s-f*p*s-g*r*m+i*p*m+f*r*d-i*h*d)*P,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*d+i*l*d)*P,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*P,e[4]=A*P,e[5]=(u*p*s-v*h*s+v*r*m-t*p*m-u*r*d+t*h*d)*P,e[6]=(v*l*s-a*p*s-v*r*c+t*p*c+a*r*d-t*l*d)*P,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*P,e[8]=_*P,e[9]=(v*f*s-u*g*s-v*i*m+t*g*m+u*i*d-t*f*d)*P,e[10]=(a*g*s-v*o*s+v*i*c-t*g*c-a*i*d+t*o*d)*P,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*P,e[12]=C*P,e[13]=(u*g*r-v*f*r+v*i*h-t*g*h-u*i*p+t*f*p)*P,e[14]=(v*o*r-a*g*r-v*i*l+t*g*l+a*i*p-t*o*p)*P,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*P,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,v=s*f,g=a*u,p=a*f,d=o*f,w=l*c,A=l*u,_=l*f,C=i.x,T=i.y,P=i.z;return r[0]=(1-(g+d))*C,r[1]=(m+_)*C,r[2]=(v-A)*C,r[3]=0,r[4]=(m-_)*T,r[5]=(1-(h+d))*T,r[6]=(p+w)*T,r[7]=0,r[8]=(v+A)*P,r[9]=(p-w)*P,r[10]=(1-(h+g))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ci.set(r[0],r[1],r[2]).length();const a=Ci.set(r[4],r[5],r[6]).length(),o=Ci.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],gn.copy(this);const c=1/s,u=1/a,f=1/o;return gn.elements[0]*=c,gn.elements[1]*=c,gn.elements[2]*=c,gn.elements[4]*=u,gn.elements[5]*=u,gn.elements[6]*=u,gn.elements[8]*=f,gn.elements[9]*=f,gn.elements[10]*=f,t.setFromRotationMatrix(gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=Gn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let m,v;if(o===Gn)m=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===xs)m=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=Gn){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(a-s),h=(t+e)*c,m=(i+r)*u;let v,g;if(o===Gn)v=(a+s)*f,g=-2*f;else if(o===xs)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ci=new z,gn=new _t,Sd=new z(0,0,0),Ed=new z(1,1,1),Qn=new z,Fr=new z,Kt=new z,Wo=new _t,Xo=new Tr;class $n{constructor(e=0,t=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Wo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xo.setFromEuler(this),this.setFromQuaternion(Xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class pc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Td=0;const qo=new z,Pi=new Tr,Un=new _t,Or=new z,or=new z,Ad=new z,wd=new Tr,$o=new z(1,0,0),Yo=new z(0,1,0),jo=new z(0,0,1),Zo={type:"added"},Rd={type:"removed"},Li={type:"childadded",child:null},js={type:"childremoved",child:null};class Wt extends er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new z,t=new $n,i=new Tr,r=new z(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new We}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.multiply(Pi),this}rotateOnWorldAxis(e,t){return Pi.setFromAxisAngle(e,t),this.quaternion.premultiply(Pi),this}rotateX(e){return this.rotateOnAxis($o,e)}rotateY(e){return this.rotateOnAxis(Yo,e)}rotateZ(e){return this.rotateOnAxis(jo,e)}translateOnAxis(e,t){return qo.copy(e).applyQuaternion(this.quaternion),this.position.add(qo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis($o,e)}translateY(e){return this.translateOnAxis(Yo,e)}translateZ(e){return this.translateOnAxis(jo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Or.copy(e):Or.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(or,Or,this.up):Un.lookAt(Or,or,this.up),this.quaternion.setFromRotationMatrix(Un),r&&(Un.extractRotation(r.matrixWorld),Pi.setFromRotationMatrix(Un),this.quaternion.premultiply(Pi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zo),Li.child=e,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rd),js.child=e,this.dispatchEvent(js),js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Un.multiply(e.parent.matrixWorld)),e.applyMatrix4(Un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zo),Li.child=e,this.dispatchEvent(Li),Li.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,Ad),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new z(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new z,Fn=new z,Zs=new z,On=new z,Di=new z,Ii=new z,Ko=new z,Ks=new z,Js=new z,Qs=new z,ea=new yt,ta=new yt,na=new yt;class xn{constructor(e=new z,t=new z,i=new z){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),_n.subVectors(e,t),r.cross(_n);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){_n.subVectors(r,t),Fn.subVectors(i,t),Zs.subVectors(e,t);const a=_n.dot(_n),o=_n.dot(Fn),l=_n.dot(Zs),c=Fn.dot(Fn),u=Fn.dot(Zs),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,m=(c*l-o*u)*h,v=(a*u-o*l)*h;return s.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return ea.setScalar(0),ta.setScalar(0),na.setScalar(0),ea.fromBufferAttribute(e,t),ta.fromBufferAttribute(e,i),na.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ea,s.x),a.addScaledVector(ta,s.y),a.addScaledVector(na,s.z),a}static isFrontFacing(e,t,i,r){return _n.subVectors(i,t),Fn.subVectors(e,t),_n.cross(Fn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),_n.cross(Fn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Di.subVectors(r,i),Ii.subVectors(s,i),Ks.subVectors(e,i);const l=Di.dot(Ks),c=Ii.dot(Ks);if(l<=0&&c<=0)return t.copy(i);Js.subVectors(e,r);const u=Di.dot(Js),f=Ii.dot(Js);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Di,a);Qs.subVectors(e,s);const m=Di.dot(Qs),v=Ii.dot(Qs);if(v>=0&&m<=v)return t.copy(s);const g=m*c-l*v;if(g<=0&&c>=0&&v<=0)return o=c/(c-v),t.copy(i).addScaledVector(Ii,o);const p=u*v-m*f;if(p<=0&&f-u>=0&&m-v>=0)return Ko.subVectors(s,r),o=(f-u)/(f-u+(m-v)),t.copy(r).addScaledVector(Ko,o);const d=1/(p+g+h);return a=g*d,o=h*d,t.copy(i).addScaledVector(Di,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Br={h:0,s:0,l:0};function ia(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class nt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=tt.workingColorSpace){if(e=xo(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=ia(a,s,e+1/3),this.g=ia(a,s,e),this.b=ia(a,s,e-1/3)}return tt.toWorkingColorSpace(this,r),this}setStyle(e,t=sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){const i=mc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xn(e.r),this.g=Xn(e.g),this.b=Xn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return tt.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Je(Bt.r*255,0,255))*65536+Math.round(Je(Bt.g*255,0,255))*256+Math.round(Je(Bt.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Bt.copy(this),t);const i=Bt.r,r=Bt.g,s=Bt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Bt.copy(this),t),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=sn){tt.fromWorkingColorSpace(Bt.copy(this),e);const t=Bt.r,i=Bt.g,r=Bt.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Br);const i=fr(ei.h,Br.h,t),r=fr(ei.s,Br.s,t),s=fr(ei.l,Br.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new nt;nt.NAMES=mc;let Cd=0;class nr extends er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=si,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gr,this.blendDst=_r,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gr&&(i.blendSrc=this.blendSrc),this.blendDst!==_r&&(i.blendDst=this.blendDst),this.blendEquation!==Hn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fo&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gc extends nr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=Jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new z,zr=new ut;class Gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Oo,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ki(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ht(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),i=Ht(i,this.array),r=Ht(r,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Oo&&(e.usage=this.usage),e}}class _c extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class vc extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class bn extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Pd=0;const rn=new _t,ra=new Wt,Ni=new z,Jt=new Ar,lr=new Ar,Lt=new z;class En extends er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dc(e)?vc:_c)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,i){return rn.makeTranslation(e,t,i),this.applyMatrix4(rn),this}scale(e,t,i){return rn.makeScale(e,t,i),this.applyMatrix4(rn),this}lookAt(e){return ra.lookAt(e),ra.updateMatrix(),this.applyMatrix4(ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new bn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];lr.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Jt.min,lr.min),Jt.expandByPoint(Lt),Lt.addVectors(Jt.max,lr.max),Jt.expandByPoint(Lt)):(Jt.expandByPoint(lr.min),Jt.expandByPoint(lr.max))}Jt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Lt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),Lt.add(Ni)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new z,l[I]=new z;const c=new z,u=new z,f=new z,h=new ut,m=new ut,v=new ut,g=new z,p=new z;function d(I,E,M){c.fromBufferAttribute(i,I),u.fromBufferAttribute(i,E),f.fromBufferAttribute(i,M),h.fromBufferAttribute(s,I),m.fromBufferAttribute(s,E),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),m.sub(h),v.sub(h);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(g.copy(u).multiplyScalar(v.y).addScaledVector(f,-m.y).multiplyScalar(D),p.copy(f).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(D),o[I].add(g),o[E].add(g),o[M].add(g),l[I].add(p),l[E].add(p),l[M].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let I=0,E=w.length;I<E;++I){const M=w[I],D=M.start,Y=M.count;for(let q=D,k=D+Y;q<k;q+=3)d(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const A=new z,_=new z,C=new z,T=new z;function P(I){C.fromBufferAttribute(r,I),T.copy(C);const E=o[I];A.copy(E),A.sub(C.multiplyScalar(C.dot(E))).normalize(),_.crossVectors(T,E);const D=_.dot(l[I])<0?-1:1;a.setXYZW(I,A.x,A.y,A.z,D)}for(let I=0,E=w.length;I<E;++I){const M=w[I],D=M.start,Y=M.count;for(let q=D,k=D+Y;q<k;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,c=new z,u=new z,f=new z;if(e)for(let h=0,m=e.count;h<m;h+=3){const v=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,v=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let d=0;d<u;d++)h[v++]=c[m++]}return new Gt(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new En,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jo=new _t,di=new Mo,kr=new wr,Qo=new z,Hr=new z,Vr=new z,Gr=new z,sa=new z,Wr=new z,el=new z,Xr=new z;class Wn extends Wt{constructor(e=new En,t=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Wr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(sa.fromBufferAttribute(f,e),a?Wr.addScaledVector(sa,u):Wr.addScaledVector(sa.sub(t),u))}t.add(Wr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(s),di.copy(e.ray).recast(e.near),!(kr.containsPoint(di.origin)===!1&&(di.intersectSphere(kr,Qo)===null||di.origin.distanceToSquared(Qo)>(e.far-e.near)**2))&&(Jo.copy(s).invert(),di.copy(e.ray).applyMatrix4(Jo),!(i.boundingBox!==null&&di.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,di)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,g=h.length;v<g;v++){const p=h[v],d=a[p.materialIndex],w=Math.max(p.start,m.start),A=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let _=w,C=A;_<C;_+=3){const T=o.getX(_),P=o.getX(_+1),I=o.getX(_+2);r=qr(this,d,e,i,c,u,f,T,P,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=v,d=g;p<d;p+=3){const w=o.getX(p),A=o.getX(p+1),_=o.getX(p+2);r=qr(this,a,e,i,c,u,f,w,A,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,g=h.length;v<g;v++){const p=h[v],d=a[p.materialIndex],w=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let _=w,C=A;_<C;_+=3){const T=_,P=_+1,I=_+2;r=qr(this,d,e,i,c,u,f,T,P,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=v,d=g;p<d;p+=3){const w=p,A=p+1,_=p+2;r=qr(this,a,e,i,c,u,f,w,A,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Ld(n,e,t,i,r,s,a,o){let l;if(e.side===$t?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===oi,o),l===null)return null;Xr.copy(o),Xr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Xr);return c<t.near||c>t.far?null:{distance:c,point:Xr.clone(),object:n}}function qr(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Hr),n.getVertexPosition(l,Vr),n.getVertexPosition(c,Gr);const u=Ld(n,e,t,i,Hr,Vr,Gr,el);if(u){const f=new z;xn.getBarycoord(el,Hr,Vr,Gr,f),r&&(u.uv=xn.getInterpolatedAttribute(r,o,l,c,f,new ut)),s&&(u.uv1=xn.getInterpolatedAttribute(s,o,l,c,f,new ut)),a&&(u.normal=xn.getInterpolatedAttribute(a,o,l,c,f,new z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new z,materialIndex:0};xn.getNormal(Hr,Vr,Gr,h.normal),u.face=h,u.barycoord=f}return u}class Rr extends En{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;v("z","y","x",-1,-1,i,t,e,a,s,0),v("z","y","x",1,-1,i,t,-e,a,s,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new bn(c,3)),this.setAttribute("normal",new bn(u,3)),this.setAttribute("uv",new bn(f,2));function v(g,p,d,w,A,_,C,T,P,I,E){const M=_/P,D=C/I,Y=_/2,q=C/2,k=T/2,Z=P+1,j=I+1;let le=0,$=0;const oe=new z;for(let he=0;he<j;he++){const ue=he*D-q;for(let ke=0;ke<Z;ke++){const je=ke*M-Y;oe[g]=je*w,oe[p]=ue*A,oe[d]=k,c.push(oe.x,oe.y,oe.z),oe[g]=0,oe[p]=0,oe[d]=T>0?1:-1,u.push(oe.x,oe.y,oe.z),f.push(ke/P),f.push(1-he/I),le+=1}}for(let he=0;he<I;he++)for(let ue=0;ue<P;ue++){const ke=h+ue+Z*he,je=h+ue+Z*(he+1),te=h+(ue+1)+Z*(he+1),de=h+(ue+1)+Z*he;l.push(ke,je,de),l.push(je,te,de),$+=6}o.addGroup(m,$,E),m+=$,h+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qi(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Vt(n){const e={};for(let t=0;t<n.length;t++){const i=Qi(n[t]);for(const r in i)e[r]=i[r]}return e}function Dd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function xc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Id={clone:Qi,merge:Vt};var Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ud=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yn extends nr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Ud,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qi(e.uniforms),this.uniformsGroups=Dd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class yc extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ti=new z,tl=new ut,nl=new ut;class on extends yc{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xr*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ti.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ti.x,ti.y).multiplyScalar(-e/ti.z),ti.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ti.x,ti.y).multiplyScalar(-e/ti.z)}getViewSize(e,t){return this.getViewBounds(e,tl,nl),t.subVectors(nl,tl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(hr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Fi=1;class Fd extends Wt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Ui,Fi,e,t);r.layers=this.layers,this.add(r);const s=new on(Ui,Fi,e,t);s.layers=this.layers,this.add(s);const a=new on(Ui,Fi,e,t);a.layers=this.layers,this.add(a);const o=new on(Ui,Fi,e,t);o.layers=this.layers,this.add(o);const l=new on(Ui,Fi,e,t);l.layers=this.layers,this.add(l);const c=new on(Ui,Fi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,h,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Mc extends Yt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Yi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Od extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rr(5,5,5),s=new Yn({name:"CubemapFromEquirect",uniforms:Qi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:ri});s.uniforms.tEquirect.value=t;const a=new Wn(r,s),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=Cn),new Fd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Bd extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const aa=new z,zd=new z,kd=new We;class gi{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=aa.subVectors(i,t).cross(zd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kd.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new wr,$r=new z;class bc{constructor(e=new gi,t=new gi,i=new gi,r=new gi,s=new gi,a=new gi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],m=r[8],v=r[9],g=r[10],p=r[11],d=r[12],w=r[13],A=r[14],_=r[15];if(i[0].setComponents(l-s,h-c,p-m,_-d).normalize(),i[1].setComponents(l+s,h+c,p+m,_+d).normalize(),i[2].setComponents(l+a,h+u,p+v,_+w).normalize(),i[3].setComponents(l-a,h-u,p-v,_-w).normalize(),i[4].setComponents(l-o,h-f,p-g,_-A).normalize(),t===Gn)i[5].setComponents(l+o,h+f,p+g,_+A).normalize();else if(t===xs)i[5].setComponents(o,f,g,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(e){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if($r.x=r.normal.x>0?e.max.x:e.min.x,$r.y=r.normal.y>0?e.max.y:e.min.y,$r.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint($r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sc extends nr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new nt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ms=new z,bs=new z,il=new _t,cr=new Mo,Yr=new wr,oa=new z,rl=new z;class Hd extends Wt{constructor(e=new En,t=new Sc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ms.fromBufferAttribute(t,r-1),bs.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ms.distanceTo(bs);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Yr.copy(i.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;il.copy(r).invert(),cr.copy(e.ray).applyMatrix4(il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),v=Math.min(u.count,a.start+a.count);for(let g=m,p=v-1;g<p;g+=c){const d=u.getX(g),w=u.getX(g+1),A=jr(this,e,cr,l,d,w);A&&t.push(A)}if(this.isLineLoop){const g=u.getX(v-1),p=u.getX(m),d=jr(this,e,cr,l,g,p);d&&t.push(d)}}else{const m=Math.max(0,a.start),v=Math.min(h.count,a.start+a.count);for(let g=m,p=v-1;g<p;g+=c){const d=jr(this,e,cr,l,g,g+1);d&&t.push(d)}if(this.isLineLoop){const g=jr(this,e,cr,l,v-1,m);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function jr(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Ms.fromBufferAttribute(a,r),bs.fromBufferAttribute(a,s),t.distanceSqToSegment(Ms,bs,oa,rl)>i)return;oa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(oa);if(!(l<e.near||l>e.far))return{distance:l,point:rl.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const sl=new z,al=new z;class Vd extends Hd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)sl.fromBufferAttribute(t,r),al.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sl.distanceTo(al);e.setAttribute("lineDistance",new bn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Gd extends nr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ol=new _t,so=new Mo,Zr=new wr,Kr=new z;class Wd extends Wt{constructor(e=new En,t=new Gd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Zr.copy(i.boundingSphere),Zr.applyMatrix4(r),Zr.radius+=s,e.ray.intersectsSphere(Zr)===!1)return;ol.copy(r).invert(),so.copy(e.ray).applyMatrix4(ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=h,g=m;v<g;v++){const p=c.getX(v);Kr.fromBufferAttribute(f,p),ll(Kr,p,l,r,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=h,g=m;v<g;v++)Kr.fromBufferAttribute(f,v),ll(Kr,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function ll(n,e,t,i,r,s,a){const o=so.distanceSqToPoint(n);if(o<t){const l=new z;so.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Jr extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Ec extends Yt{constructor(e,t,i,r,s,a,o,l,c,u=Xi){if(u!==Xi&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Xi&&(i=Mi),i===void 0&&u===Ki&&(i=Zi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Cs extends En{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],v=[],g=[],p=[];for(let d=0;d<u;d++){const w=d*h-a;for(let A=0;A<c;A++){const _=A*f-s;v.push(_,-w,0),g.push(0,0,1),p.push(A/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){const A=w+c*d,_=w+c*(d+1),C=w+1+c*(d+1),T=w+1+c*d;m.push(A,_,T),m.push(_,C,T)}this.setIndex(m),this.setAttribute("position",new bn(v,3)),this.setAttribute("normal",new bn(g,3)),this.setAttribute("uv",new bn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xd extends nr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qd extends nr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Tc extends yc{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $d extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Yd extends Vd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new En;r.setAttribute("position",new bn(t,3)),r.setAttribute("color",new bn(i,3));const s=new Sc({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new nt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function cl(n,e,t,i){const r=jd(i);switch(t){case ic:return n*e;case sc:return n*e;case ac:return n*e*2;case oc:return n*e/r.components*r.byteLength;case go:return n*e/r.components*r.byteLength;case lc:return n*e*2/r.components*r.byteLength;case _o:return n*e*2/r.components*r.byteLength;case rc:return n*e*3/r.components*r.byteLength;case yn:return n*e*4/r.components*r.byteLength;case vo:return n*e*4/r.components*r.byteLength;case ls:case cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case us:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Na:case Fa:return Math.max(n,16)*Math.max(e,8)/4;case Ia:case Ua:return Math.max(n,8)*Math.max(e,8)/2;case Oa:case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Va:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Wa:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Qa:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hs:case eo:case to:return Math.ceil(n/4)*Math.ceil(e/4)*16;case cc:case no:return Math.ceil(n/4)*Math.ceil(e/4)*8;case io:case ro:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function jd(n){switch(n){case qn:case ec:return{byteLength:1,components:1};case vr:case tc:case Er:return{byteLength:2,components:1};case po:case mo:return{byteLength:2,components:4};case Mi:case fo:case Vn:return{byteLength:4,components:1};case nc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ho);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ac(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Zd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((m,v)=>m.start-v.start);let h=0;for(let m=1;m<f.length;m++){const v=f[h],g=f[m];g.start<=v.start+v.count+1?v.count=Math.max(v.count,g.start+g.count-v.start):(++h,f[h]=g)}f.length=h+1;for(let m=0,v=f.length;m<v;m++){const g=f[m];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,th=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ih=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,lh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ch=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,uh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ph=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,_h=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,yh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Mh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Eh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Th=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Rh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ch=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ph=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Dh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ih=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Uh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Fh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Oh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Bh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,kh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Vh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Gh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$h=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Yh=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,jh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Jh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Qh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ef=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,af=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,of=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,cf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,uf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,df=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ff=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Sf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Tf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Af=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,wf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Rf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Cf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Pf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Lf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Df=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,If=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Nf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Uf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ff=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Of=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Bf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Hf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Wf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,$f=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Yf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ap=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Pp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:Kd,alphahash_pars_fragment:Jd,alphamap_fragment:Qd,alphamap_pars_fragment:eh,alphatest_fragment:th,alphatest_pars_fragment:nh,aomap_fragment:ih,aomap_pars_fragment:rh,batching_pars_vertex:sh,batching_vertex:ah,begin_vertex:oh,beginnormal_vertex:lh,bsdfs:ch,iridescence_fragment:uh,bumpmap_pars_fragment:dh,clipping_planes_fragment:hh,clipping_planes_pars_fragment:fh,clipping_planes_pars_vertex:ph,clipping_planes_vertex:mh,color_fragment:gh,color_pars_fragment:_h,color_pars_vertex:vh,color_vertex:xh,common:yh,cube_uv_reflection_fragment:Mh,defaultnormal_vertex:bh,displacementmap_pars_vertex:Sh,displacementmap_vertex:Eh,emissivemap_fragment:Th,emissivemap_pars_fragment:Ah,colorspace_fragment:wh,colorspace_pars_fragment:Rh,envmap_fragment:Ch,envmap_common_pars_fragment:Ph,envmap_pars_fragment:Lh,envmap_pars_vertex:Dh,envmap_physical_pars_fragment:Gh,envmap_vertex:Ih,fog_vertex:Nh,fog_pars_vertex:Uh,fog_fragment:Fh,fog_pars_fragment:Oh,gradientmap_pars_fragment:Bh,lightmap_pars_fragment:zh,lights_lambert_fragment:kh,lights_lambert_pars_fragment:Hh,lights_pars_begin:Vh,lights_toon_fragment:Wh,lights_toon_pars_fragment:Xh,lights_phong_fragment:qh,lights_phong_pars_fragment:$h,lights_physical_fragment:Yh,lights_physical_pars_fragment:jh,lights_fragment_begin:Zh,lights_fragment_maps:Kh,lights_fragment_end:Jh,logdepthbuf_fragment:Qh,logdepthbuf_pars_fragment:ef,logdepthbuf_pars_vertex:tf,logdepthbuf_vertex:nf,map_fragment:rf,map_pars_fragment:sf,map_particle_fragment:af,map_particle_pars_fragment:of,metalnessmap_fragment:lf,metalnessmap_pars_fragment:cf,morphinstance_vertex:uf,morphcolor_vertex:df,morphnormal_vertex:hf,morphtarget_pars_vertex:ff,morphtarget_vertex:pf,normal_fragment_begin:mf,normal_fragment_maps:gf,normal_pars_fragment:_f,normal_pars_vertex:vf,normal_vertex:xf,normalmap_pars_fragment:yf,clearcoat_normal_fragment_begin:Mf,clearcoat_normal_fragment_maps:bf,clearcoat_pars_fragment:Sf,iridescence_pars_fragment:Ef,opaque_fragment:Tf,packing:Af,premultiplied_alpha_fragment:wf,project_vertex:Rf,dithering_fragment:Cf,dithering_pars_fragment:Pf,roughnessmap_fragment:Lf,roughnessmap_pars_fragment:Df,shadowmap_pars_fragment:If,shadowmap_pars_vertex:Nf,shadowmap_vertex:Uf,shadowmask_pars_fragment:Ff,skinbase_vertex:Of,skinning_pars_vertex:Bf,skinning_vertex:zf,skinnormal_vertex:kf,specularmap_fragment:Hf,specularmap_pars_fragment:Vf,tonemapping_fragment:Gf,tonemapping_pars_fragment:Wf,transmission_fragment:Xf,transmission_pars_fragment:qf,uv_pars_fragment:$f,uv_pars_vertex:Yf,uv_vertex:jf,worldpos_vertex:Zf,background_vert:Kf,background_frag:Jf,backgroundCube_vert:Qf,backgroundCube_frag:ep,cube_vert:tp,cube_frag:np,depth_vert:ip,depth_frag:rp,distanceRGBA_vert:sp,distanceRGBA_frag:ap,equirect_vert:op,equirect_frag:lp,linedashed_vert:cp,linedashed_frag:up,meshbasic_vert:dp,meshbasic_frag:hp,meshlambert_vert:fp,meshlambert_frag:pp,meshmatcap_vert:mp,meshmatcap_frag:gp,meshnormal_vert:_p,meshnormal_frag:vp,meshphong_vert:xp,meshphong_frag:yp,meshphysical_vert:Mp,meshphysical_frag:bp,meshtoon_vert:Sp,meshtoon_frag:Ep,points_vert:Tp,points_frag:Ap,shadow_vert:wp,shadow_frag:Rp,sprite_vert:Cp,sprite_frag:Pp},_e={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Rn={basic:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:Vt([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:Vt([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:Vt([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new nt(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:Vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:Vt([_e.points,_e.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:Vt([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:Vt([_e.common,_e.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:Vt([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:Vt([_e.sprite,_e.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:Vt([_e.common,_e.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:Vt([_e.lights,_e.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};Rn.physical={uniforms:Vt([Rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Qr={r:0,b:0,g:0},fi=new $n,Lp=new _t;function Dp(n,e,t,i,r,s,a){const o=new nt(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function v(A){let _=A.isScene===!0?A.background:null;return _&&_.isTexture&&(_=(A.backgroundBlurriness>0?t:e).get(_)),_}function g(A){let _=!1;const C=v(A);C===null?d(o,l):C&&C.isColor&&(d(C,1),_=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?i.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(A,_){const C=v(_);C&&(C.isCubeTexture||C.mapping===Rs)?(u===void 0&&(u=new Wn(new Rr(1,1,1),new Yn({name:"BackgroundCubeMaterial",uniforms:Qi(Rn.backgroundCube.uniforms),vertexShader:Rn.backgroundCube.vertexShader,fragmentShader:Rn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),fi.copy(_.backgroundRotation),fi.x*=-1,fi.y*=-1,fi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Lp.makeRotationFromEuler(fi)),u.material.toneMapped=tt.getTransfer(C.colorSpace)!==ct,(f!==C||h!==C.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=C,h=C.version,m=n.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Wn(new Cs(2,2),new Yn({name:"BackgroundMaterial",uniforms:Qi(Rn.background.uniforms),vertexShader:Rn.background.vertexShader,fragmentShader:Rn.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=tt.getTransfer(C.colorSpace)!==ct,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||h!==C.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=C,h=C.version,m=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function d(A,_){A.getRGB(Qr,xc(n)),i.buffers.color.setClear(Qr.r,Qr.g,Qr.b,_,a)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(A,_=1){o.set(A),l=_,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(o,l)},render:g,addToRenderList:p,dispose:w}}function Ip(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(M,D,Y,q,k){let Z=!1;const j=f(q,Y,D);s!==j&&(s=j,c(s.object)),Z=m(M,q,Y,k),Z&&v(M,q,Y,k),k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,_(M,D,Y,q),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return n.createVertexArray()}function c(M){return n.bindVertexArray(M)}function u(M){return n.deleteVertexArray(M)}function f(M,D,Y){const q=Y.wireframe===!0;let k=i[M.id];k===void 0&&(k={},i[M.id]=k);let Z=k[D.id];Z===void 0&&(Z={},k[D.id]=Z);let j=Z[q];return j===void 0&&(j=h(l()),Z[q]=j),j}function h(M){const D=[],Y=[],q=[];for(let k=0;k<t;k++)D[k]=0,Y[k]=0,q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Y,attributeDivisors:q,object:M,attributes:{},index:null}}function m(M,D,Y,q){const k=s.attributes,Z=D.attributes;let j=0;const le=Y.getAttributes();for(const $ in le)if(le[$].location>=0){const he=k[$];let ue=Z[$];if(ue===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor)),he===void 0||he.attribute!==ue||ue&&he.data!==ue.data)return!0;j++}return s.attributesNum!==j||s.index!==q}function v(M,D,Y,q){const k={},Z=D.attributes;let j=0;const le=Y.getAttributes();for(const $ in le)if(le[$].location>=0){let he=Z[$];he===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(he=M.instanceColor));const ue={};ue.attribute=he,he&&he.data&&(ue.data=he.data),k[$]=ue,j++}s.attributes=k,s.attributesNum=j,s.index=q}function g(){const M=s.newAttributes;for(let D=0,Y=M.length;D<Y;D++)M[D]=0}function p(M){d(M,0)}function d(M,D){const Y=s.newAttributes,q=s.enabledAttributes,k=s.attributeDivisors;Y[M]=1,q[M]===0&&(n.enableVertexAttribArray(M),q[M]=1),k[M]!==D&&(n.vertexAttribDivisor(M,D),k[M]=D)}function w(){const M=s.newAttributes,D=s.enabledAttributes;for(let Y=0,q=D.length;Y<q;Y++)D[Y]!==M[Y]&&(n.disableVertexAttribArray(Y),D[Y]=0)}function A(M,D,Y,q,k,Z,j){j===!0?n.vertexAttribIPointer(M,D,Y,k,Z):n.vertexAttribPointer(M,D,Y,q,k,Z)}function _(M,D,Y,q){g();const k=q.attributes,Z=Y.getAttributes(),j=D.defaultAttributeValues;for(const le in Z){const $=Z[le];if($.location>=0){let oe=k[le];if(oe===void 0&&(le==="instanceMatrix"&&M.instanceMatrix&&(oe=M.instanceMatrix),le==="instanceColor"&&M.instanceColor&&(oe=M.instanceColor)),oe!==void 0){const he=oe.normalized,ue=oe.itemSize,ke=e.get(oe);if(ke===void 0)continue;const je=ke.buffer,te=ke.type,de=ke.bytesPerElement,Te=te===n.INT||te===n.UNSIGNED_INT||oe.gpuType===fo;if(oe.isInterleavedBufferAttribute){const ge=oe.data,Le=ge.stride,Be=oe.offset;if(ge.isInstancedInterleavedBuffer){for(let ze=0;ze<$.locationSize;ze++)d($.location+ze,ge.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ze=0;ze<$.locationSize;ze++)p($.location+ze);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ze=0;ze<$.locationSize;ze++)A($.location+ze,ue/$.locationSize,te,he,Le*de,(Be+ue/$.locationSize*ze)*de,Te)}else{if(oe.isInstancedBufferAttribute){for(let ge=0;ge<$.locationSize;ge++)d($.location+ge,oe.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ge=0;ge<$.locationSize;ge++)p($.location+ge);n.bindBuffer(n.ARRAY_BUFFER,je);for(let ge=0;ge<$.locationSize;ge++)A($.location+ge,ue/$.locationSize,te,he,ue*de,ue/$.locationSize*ge*de,Te)}}else if(j!==void 0){const he=j[le];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv($.location,he);break;case 3:n.vertexAttrib3fv($.location,he);break;case 4:n.vertexAttrib4fv($.location,he);break;default:n.vertexAttrib1fv($.location,he)}}}}w()}function C(){I();for(const M in i){const D=i[M];for(const Y in D){const q=D[Y];for(const k in q)u(q[k].object),delete q[k];delete D[Y]}delete i[M]}}function T(M){if(i[M.id]===void 0)return;const D=i[M.id];for(const Y in D){const q=D[Y];for(const k in q)u(q[k].object),delete q[k];delete D[Y]}delete i[M.id]}function P(M){for(const D in i){const Y=i[D];if(Y[M.id]===void 0)continue;const q=Y[M.id];for(const k in q)u(q[k].object),delete q[k];delete Y[M.id]}}function I(){E(),a=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:E,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:p,disableUnusedAttributes:w}}function Np(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,f){f!==0&&(n.drawArraysInstanced(i,c,u,f),t.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let m=0;for(let v=0;v<f;v++)m+=u[v];t.update(m,i,1)}function l(c,u,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)a(c[v],u[v],h[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let v=0;for(let g=0;g<f;g++)v+=u[g]*h[g];t.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Up(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==yn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const I=P===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==qn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Vn&&!I)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=v>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:v,maxTextureSize:g,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:_,vertexTextures:C,maxSamples:T}}function Fp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new gi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const v=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,d=n.get(f);if(!r||v===null||v.length===0||s&&!p)s?u(null):c();else{const w=s?0:i,A=w*4;let _=d.clippingState||null;l.value=_,_=u(v,h,A,m);for(let C=0;C!==A;++C)_[C]=t[C];d.clippingState=_,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,v){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,v!==!0||p===null){const d=m+g*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<d)&&(p=new Float32Array(d));for(let A=0,_=m;A!==g;++A,_+=4)a.copy(f[A]).applyMatrix4(w,o),a.normal.toArray(p,_),p[_+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Op(n){let e=new WeakMap;function t(a,o){return o===Ca?a.mapping=Yi:o===Pa&&(a.mapping=ji),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ca||o===Pa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Od(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Gi=4,ul=[.125,.215,.35,.446,.526,.582],vi=20,la=new Tc,dl=new nt;let ca=null,ua=0,da=0,ha=!1;const _i=(1+Math.sqrt(5))/2,Oi=1/_i,hl=[new z(-_i,Oi,0),new z(_i,Oi,0),new z(-Oi,0,_i),new z(Oi,0,_i),new z(0,_i,-Oi),new z(0,_i,Oi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class fl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ca,ua,da),this._renderer.xr.enabled=ha,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Yi||e.mapping===ji?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ca=this._renderer.getRenderTarget(),ua=this._renderer.getActiveCubeFace(),da=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:Er,format:yn,colorSpace:Ji,depthBuffer:!1},r=pl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Bp(s)),this._blurMaterial=zp(s,e,t)}return r}_compileMaterial(e){const t=new Wn(this._lodPlanes[0],e);this._renderer.compile(t,la)}_sceneToCubeUV(e,t,i,r){const o=new on(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(dl),u.toneMapping=ai,u.autoClear=!1;const m=new gc({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1}),v=new Wn(new Rr,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(dl),g=!0);for(let d=0;d<6;d++){const w=d%3;w===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):w===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const A=this._cubeSize;es(r,w*A,d>2?A:0,A,A),u.setRenderTarget(r),g&&u.render(v,o),u.render(e,o)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Yi||e.mapping===ji;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ml());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Wn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,la)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=hl[(r-s-1)%hl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Wn(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*vi-1),g=s/v,p=isFinite(s)?1+Math.floor(u*g):vi;p>vi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vi}`);const d=[];let w=0;for(let P=0;P<vi;++P){const I=P/g,E=Math.exp(-I*I/2);d.push(E),P===0?w+=E:P<p&&(w+=2*E)}for(let P=0;P<d.length;P++)d[P]=d[P]/w;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=d,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:A}=this;h.dTheta.value=v,h.mipInt.value=A-i;const _=this._sizeLods[r],C=3*_*(r>A-Gi?r-A+Gi:0),T=4*(this._cubeSize-_);es(t,C,T,3*_,2*_),l.setRenderTarget(t),l.render(f,la)}}function Bp(n){const e=[],t=[],i=[];let r=n;const s=n-Gi+1+ul.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Gi?l=ul[a-n+Gi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,v=6,g=3,p=2,d=1,w=new Float32Array(g*v*m),A=new Float32Array(p*v*m),_=new Float32Array(d*v*m);for(let T=0;T<m;T++){const P=T%3*2/3-1,I=T>2?0:-1,E=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];w.set(E,g*v*T),A.set(h,p*v*T);const M=[T,T,T,T,T,T];_.set(M,d*v*T)}const C=new En;C.setAttribute("position",new Gt(w,g)),C.setAttribute("uv",new Gt(A,p)),C.setAttribute("faceIndex",new Gt(_,d)),e.push(C),r>Gi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pl(n,e,t){const i=new bi(n,e,t);return i.texture.mapping=Rs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function zp(n,e,t){const i=new Float32Array(vi),r=new z(0,1,0);return new Yn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ml(){return new Yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function gl(){return new Yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function bo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ca||l===Pa,u=l===Yi||l===ji;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new fl(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new fl(n)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Hp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Hi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Vp(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const m in h)e.update(h[m],n.ARRAY_BUFFER)}function c(f){const h=[],m=f.index,v=f.attributes.position;let g=0;if(m!==null){const w=m.array;g=m.version;for(let A=0,_=w.length;A<_;A+=3){const C=w[A+0],T=w[A+1],P=w[A+2];h.push(C,T,T,P,P,C)}}else if(v!==void 0){const w=v.array;g=v.version;for(let A=0,_=w.length/3-1;A<_;A+=3){const C=A+0,T=A+1,P=A+2;h.push(C,T,T,P,P,C)}}else return;const p=new(dc(h)?vc:_c)(h,1);p.version=g;const d=s.get(f);d&&e.remove(d),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Gp(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,m){n.drawElements(i,m,s,h*a),t.update(m,i,1)}function c(h,m,v){v!==0&&(n.drawElementsInstanced(i,m,s,h*a,v),t.update(m,i,v))}function u(h,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,h,0,v);let p=0;for(let d=0;d<v;d++)p+=m[d];t.update(p,i,1)}function f(h,m,v,g){if(v===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<h.length;d++)c(h[d]/a,m[d],g[d]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,h,0,g,0,v);let d=0;for(let w=0;w<v;w++)d+=m[w]*g[w];t.update(d,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Wp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Xp(n,e,t){const i=new WeakMap,r=new yt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==f){let E=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",E)};h!==void 0&&h.texture.dispose();const m=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),v===!0&&(A=2),g===!0&&(A=3);let _=o.attributes.position.count*A,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*C*4*f),P=new fc(T,_,C,f);P.type=Vn,P.needsUpdate=!0;const I=A*4;for(let M=0;M<f;M++){const D=p[M],Y=d[M],q=w[M],k=_*C*4*M;for(let Z=0;Z<D.count;Z++){const j=Z*I;m===!0&&(r.fromBufferAttribute(D,Z),T[k+j+0]=r.x,T[k+j+1]=r.y,T[k+j+2]=r.z,T[k+j+3]=0),v===!0&&(r.fromBufferAttribute(Y,Z),T[k+j+4]=r.x,T[k+j+5]=r.y,T[k+j+6]=r.z,T[k+j+7]=0),g===!0&&(r.fromBufferAttribute(q,Z),T[k+j+8]=r.x,T[k+j+9]=r.y,T[k+j+10]=r.z,T[k+j+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new ut(_,C)},i.set(o,h),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const v=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",v),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function qp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const wc=new Yt,_l=new Ec(1,1),Rc=new fc,Cc=new Md,Pc=new Mc,vl=[],xl=[],yl=new Float32Array(16),Ml=new Float32Array(9),bl=new Float32Array(4);function ir(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=vl[r];if(s===void 0&&(s=new Float32Array(r),vl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function At(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ps(n,e){let t=xl[e];t===void 0&&(t=new Int32Array(e),xl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function $p(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Yp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2fv(this.addr,e),wt(t,e)}}function jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(At(t,e))return;n.uniform3fv(this.addr,e),wt(t,e)}}function Zp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4fv(this.addr,e),wt(t,e)}}function Kp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;bl.set(i),n.uniformMatrix2fv(this.addr,!1,bl),wt(t,i)}}function Jp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;Ml.set(i),n.uniformMatrix3fv(this.addr,!1,Ml),wt(t,i)}}function Qp(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(At(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),wt(t,e)}else{if(At(t,i))return;yl.set(i),n.uniformMatrix4fv(this.addr,!1,yl),wt(t,i)}}function em(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function tm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2iv(this.addr,e),wt(t,e)}}function nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3iv(this.addr,e),wt(t,e)}}function im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4iv(this.addr,e),wt(t,e)}}function rm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(At(t,e))return;n.uniform2uiv(this.addr,e),wt(t,e)}}function am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(At(t,e))return;n.uniform3uiv(this.addr,e),wt(t,e)}}function om(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(At(t,e))return;n.uniform4uiv(this.addr,e),wt(t,e)}}function lm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(_l.compareFunction=uc,s=_l):s=wc,t.setTexture2D(e||s,r)}function cm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Cc,r)}function um(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Pc,r)}function dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Rc,r)}function hm(n){switch(n){case 5126:return $p;case 35664:return Yp;case 35665:return jp;case 35666:return Zp;case 35674:return Kp;case 35675:return Jp;case 35676:return Qp;case 5124:case 35670:return em;case 35667:case 35671:return tm;case 35668:case 35672:return nm;case 35669:case 35673:return im;case 5125:return rm;case 36294:return sm;case 36295:return am;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return cm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}function fm(n,e){n.uniform1fv(this.addr,e)}function pm(n,e){const t=ir(e,this.size,2);n.uniform2fv(this.addr,t)}function mm(n,e){const t=ir(e,this.size,3);n.uniform3fv(this.addr,t)}function gm(n,e){const t=ir(e,this.size,4);n.uniform4fv(this.addr,t)}function _m(n,e){const t=ir(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function vm(n,e){const t=ir(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function xm(n,e){const t=ir(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function ym(n,e){n.uniform1iv(this.addr,e)}function Mm(n,e){n.uniform2iv(this.addr,e)}function bm(n,e){n.uniform3iv(this.addr,e)}function Sm(n,e){n.uniform4iv(this.addr,e)}function Em(n,e){n.uniform1uiv(this.addr,e)}function Tm(n,e){n.uniform2uiv(this.addr,e)}function Am(n,e){n.uniform3uiv(this.addr,e)}function wm(n,e){n.uniform4uiv(this.addr,e)}function Rm(n,e,t){const i=this.cache,r=e.length,s=Ps(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||wc,s[a])}function Cm(n,e,t){const i=this.cache,r=e.length,s=Ps(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Cc,s[a])}function Pm(n,e,t){const i=this.cache,r=e.length,s=Ps(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Pc,s[a])}function Lm(n,e,t){const i=this.cache,r=e.length,s=Ps(t,r);At(i,s)||(n.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Rc,s[a])}function Dm(n){switch(n){case 5126:return fm;case 35664:return pm;case 35665:return mm;case 35666:return gm;case 35674:return _m;case 35675:return vm;case 35676:return xm;case 5124:case 35670:return ym;case 35667:case 35671:return Mm;case 35668:case 35672:return bm;case 35669:case 35673:return Sm;case 5125:return Em;case 36294:return Tm;case 36295:return Am;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Pm;case 36289:case 36303:case 36311:case 36292:return Lm}}class Im{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=hm(t.type)}}class Nm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Dm(t.type)}}class Um{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const fa=/(\w+)(\])?(\[|\.)?/g;function Sl(n,e){n.seq.push(e),n.map[e.id]=e}function Fm(n,e,t){const i=n.name,r=i.length;for(fa.lastIndex=0;;){const s=fa.exec(i),a=fa.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Sl(t,c===void 0?new Im(o,n,e):new Nm(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new Um(o),Sl(t,f)),t=f}}}class fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Fm(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function El(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Om=37297;let Bm=0;function zm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Tl=new We;function km(n){tt._getMatrix(Tl,tt.workingColorSpace,n);const e=`mat3( ${Tl.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case vs:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Al(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+zm(n.getShaderSource(e),a)}else return r}function Hm(n,e){const t=km(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Vm(n,e){let t;switch(e){case Pu:t="Linear";break;case Lu:t="Reinhard";break;case Du:t="Cineon";break;case Iu:t="ACESFilmic";break;case Uu:t="AgX";break;case Fu:t="Neutral";break;case Nu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ts=new z;function Gm(){tt.getLuminanceCoefficients(ts);const n=ts.x.toFixed(4),e=ts.y.toFixed(4),t=ts.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Wm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(dr).join(`
`)}function Xm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function qm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function wl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const $m=/^[ \t]*#include +<([\w\d./]+)>/gm;function ao(n){return n.replace($m,jm)}const Ym=new Map;function jm(n,e){let t=qe[e];if(t===void 0){const i=Ym.get(e);if(i!==void 0)t=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ao(t)}const Zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cl(n){return n.replace(Zm,Km)}function Km(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pl(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Jm(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kl?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===uu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Bn&&(e="SHADOWMAP_TYPE_VSM"),e}function Qm(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Yi:case ji:e="ENVMAP_TYPE_CUBE";break;case Rs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eg(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ji:e="ENVMAP_MODE_REFRACTION";break}return e}function tg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Jl:e="ENVMAP_BLENDING_MULTIPLY";break;case Ru:e="ENVMAP_BLENDING_MIX";break;case Cu:e="ENVMAP_BLENDING_ADD";break}return e}function ng(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ig(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Jm(t),c=Qm(t),u=eg(t),f=tg(t),h=ng(t),m=Wm(t),v=Xm(s),g=r.createProgram();let p,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(dr).join(`
`),d.length>0&&(d+=`
`)):(p=[Pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),d=[Pl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?qe.tonemapping_pars_fragment:"",t.toneMapping!==ai?Vm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Hm("linearToOutputTexel",t.outputColorSpace),Gm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=ao(a),a=wl(a,t),a=Rl(a,t),o=ao(o),o=wl(o,t),o=Rl(o,t),a=Cl(a),o=Cl(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Bo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Bo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const A=w+p+a,_=w+d+o,C=El(r,r.VERTEX_SHADER,A),T=El(r,r.FRAGMENT_SHADER,_);r.attachShader(g,C),r.attachShader(g,T),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function P(D){if(n.debug.checkShaderErrors){const Y=r.getProgramInfoLog(g).trim(),q=r.getShaderInfoLog(C).trim(),k=r.getShaderInfoLog(T).trim();let Z=!0,j=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,C,T);else{const le=Al(r,C,"vertex"),$=Al(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+le+`
`+$)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||k==="")&&(j=!1);j&&(D.diagnostics={runnable:Z,programLog:Y,vertexShader:{log:q,prefix:p},fragmentShader:{log:k,prefix:d}})}r.deleteShader(C),r.deleteShader(T),I=new fs(r,g),E=qm(r,g)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(g,Om)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Bm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}let rg=0;class sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ag(e),t.set(e,i)),i}}class ag{constructor(e){this.id=rg++,this.code=e,this.usedTimes=0}}function og(n,e,t,i,r,s,a){const o=new pc,l=new sg,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(E){return c.add(E),E===0?"uv":`uv${E}`}function p(E,M,D,Y,q){const k=Y.fog,Z=q.geometry,j=E.isMeshStandardMaterial?Y.environment:null,le=(E.isMeshStandardMaterial?t:e).get(E.envMap||j),$=le&&le.mapping===Rs?le.image.height:null,oe=v[E.type];E.precision!==null&&(m=r.getMaxPrecision(E.precision),m!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",m,"instead."));const he=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ue=he!==void 0?he.length:0;let ke=0;Z.morphAttributes.position!==void 0&&(ke=1),Z.morphAttributes.normal!==void 0&&(ke=2),Z.morphAttributes.color!==void 0&&(ke=3);let je,te,de,Te;if(oe){const $e=Rn[oe];je=$e.vertexShader,te=$e.fragmentShader}else je=E.vertexShader,te=E.fragmentShader,l.update(E),de=l.getVertexShaderID(E),Te=l.getFragmentShaderID(E);const ge=n.getRenderTarget(),Le=n.state.buffers.depth.getReversed(),Be=q.isInstancedMesh===!0,ze=q.isBatchedMesh===!0,st=!!E.map,Ve=!!E.matcap,at=!!le,L=!!E.aoMap,Et=!!E.lightMap,Ge=!!E.bumpMap,Xe=!!E.normalMap,we=!!E.displacementMap,et=!!E.emissiveMap,Re=!!E.metalnessMap,R=!!E.roughnessMap,x=E.anisotropy>0,H=E.clearcoat>0,ie=E.dispersion>0,re=E.iridescence>0,ne=E.sheen>0,fe=E.transmission>0,pe=x&&!!E.anisotropyMap,ve=H&&!!E.clearcoatMap,Pe=H&&!!E.clearcoatNormalMap,ce=H&&!!E.clearcoatRoughnessMap,ye=re&&!!E.iridescenceMap,Ce=re&&!!E.iridescenceThicknessMap,De=ne&&!!E.sheenColorMap,S=ne&&!!E.sheenRoughnessMap,F=!!E.specularMap,G=!!E.specularColorMap,J=!!E.specularIntensityMap,b=fe&&!!E.transmissionMap,B=fe&&!!E.thicknessMap,N=!!E.gradientMap,X=!!E.alphaMap,ae=E.alphaTest>0,ee=!!E.alphaHash,Ae=!!E.extensions;let Qe=ai;E.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(Qe=n.toneMapping);const dt={shaderID:oe,shaderType:E.type,shaderName:E.name,vertexShader:je,fragmentShader:te,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:Te,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:m,batching:ze,batchingColor:ze&&q._colorsTexture!==null,instancing:Be,instancingColor:Be&&q.instanceColor!==null,instancingMorph:Be&&q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ge===null?n.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:Ji,alphaToCoverage:!!E.alphaToCoverage,map:st,matcap:Ve,envMap:at,envMapMode:at&&le.mapping,envMapCubeUVHeight:$,aoMap:L,lightMap:Et,bumpMap:Ge,normalMap:Xe,displacementMap:h&&we,emissiveMap:et,normalMapObjectSpace:Xe&&E.normalMapType===Hu,normalMapTangentSpace:Xe&&E.normalMapType===ku,metalnessMap:Re,roughnessMap:R,anisotropy:x,anisotropyMap:pe,clearcoat:H,clearcoatMap:ve,clearcoatNormalMap:Pe,clearcoatRoughnessMap:ce,dispersion:ie,iridescence:re,iridescenceMap:ye,iridescenceThicknessMap:Ce,sheen:ne,sheenColorMap:De,sheenRoughnessMap:S,specularMap:F,specularColorMap:G,specularIntensityMap:J,transmission:fe,transmissionMap:b,thicknessMap:B,gradientMap:N,opaque:E.transparent===!1&&E.blending===si&&E.alphaToCoverage===!1,alphaMap:X,alphaTest:ae,alphaHash:ee,combine:E.combine,mapUv:st&&g(E.map.channel),aoMapUv:L&&g(E.aoMap.channel),lightMapUv:Et&&g(E.lightMap.channel),bumpMapUv:Ge&&g(E.bumpMap.channel),normalMapUv:Xe&&g(E.normalMap.channel),displacementMapUv:we&&g(E.displacementMap.channel),emissiveMapUv:et&&g(E.emissiveMap.channel),metalnessMapUv:Re&&g(E.metalnessMap.channel),roughnessMapUv:R&&g(E.roughnessMap.channel),anisotropyMapUv:pe&&g(E.anisotropyMap.channel),clearcoatMapUv:ve&&g(E.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&g(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(E.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&g(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&g(E.sheenColorMap.channel),sheenRoughnessMapUv:S&&g(E.sheenRoughnessMap.channel),specularMapUv:F&&g(E.specularMap.channel),specularColorMapUv:G&&g(E.specularColorMap.channel),specularIntensityMapUv:J&&g(E.specularIntensityMap.channel),transmissionMapUv:b&&g(E.transmissionMap.channel),thicknessMapUv:B&&g(E.thicknessMap.channel),alphaMapUv:X&&g(E.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Xe||x),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Z.attributes.uv&&(st||X),fog:!!k,useFog:E.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Le,skinning:q.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:ke,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Qe,decodeVideoTexture:st&&E.map.isVideoTexture===!0&&tt.getTransfer(E.map.colorSpace)===ct,decodeVideoTextureEmissive:et&&E.emissiveMap.isVideoTexture===!0&&tt.getTransfer(E.emissiveMap.colorSpace)===ct,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===kn,flipSided:E.side===$t,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ae&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&E.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function d(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const D in E.defines)M.push(D),M.push(E.defines[D]);return E.isRawShaderMaterial===!1&&(w(M,E),A(M,E),M.push(n.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function w(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function A(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),E.push(o.mask)}function _(E){const M=v[E.type];let D;if(M){const Y=Rn[M];D=Id.clone(Y.uniforms)}else D=E.uniforms;return D}function C(E,M){let D;for(let Y=0,q=u.length;Y<q;Y++){const k=u[Y];if(k.cacheKey===M){D=k,++D.usedTimes;break}}return D===void 0&&(D=new ig(n,M,E,s),u.push(D)),D}function T(E){if(--E.usedTimes===0){const M=u.indexOf(E);u[M]=u[u.length-1],u.pop(),E.destroy()}}function P(E){l.remove(E)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:_,acquireProgram:C,releaseProgram:T,releaseShaderCache:P,programs:u,dispose:I}}function lg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function cg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ll(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Dl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,v,g,p){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:m,groupOrder:v,renderOrder:f.renderOrder,z:g,group:p},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=m,d.groupOrder=v,d.renderOrder=f.renderOrder,d.z=g,d.group=p),e++,d}function o(f,h,m,v,g,p){const d=a(f,h,m,v,g,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):t.push(d)}function l(f,h,m,v,g,p){const d=a(f,h,m,v,g,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):t.unshift(d)}function c(f,h){t.length>1&&t.sort(f||cg),i.length>1&&i.sort(h||Ll),r.length>1&&r.sort(h||Ll)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function ug(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Dl,n.set(i,[a])):r>=s.length?(a=new Dl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function dg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new nt};break;case"SpotLight":t={position:new z,direction:new z,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new nt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":t={color:new nt,position:new z,halfWidth:new z,halfHeight:new z};break}return n[e.id]=t,t}}}function hg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let fg=0;function pg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mg(n){const e=new dg,t=hg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new z);const r=new z,s=new _t,a=new _t;function o(c){let u=0,f=0,h=0;for(let E=0;E<9;E++)i.probe[E].set(0,0,0);let m=0,v=0,g=0,p=0,d=0,w=0,A=0,_=0,C=0,T=0,P=0;c.sort(pg);for(let E=0,M=c.length;E<M;E++){const D=c[E],Y=D.color,q=D.intensity,k=D.distance,Z=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Y.r*q,f+=Y.g*q,h+=Y.b*q;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],q);P++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const le=D.shadow,$=t.get(D);$.shadowIntensity=le.intensity,$.shadowBias=le.bias,$.shadowNormalBias=le.normalBias,$.shadowRadius=le.radius,$.shadowMapSize=le.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=Z,i.directionalShadowMatrix[m]=D.shadow.matrix,w++}i.directional[m]=j,m++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(Y).multiplyScalar(q),j.distance=k,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[g]=j;const le=D.shadow;if(D.map&&(i.spotLightMap[C]=D.map,C++,le.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[g]=le.matrix,D.castShadow){const $=t.get(D);$.shadowIntensity=le.intensity,$.shadowBias=le.bias,$.shadowNormalBias=le.normalBias,$.shadowRadius=le.radius,$.shadowMapSize=le.mapSize,i.spotShadow[g]=$,i.spotShadowMap[g]=Z,_++}g++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(Y).multiplyScalar(q),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=j,p++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const le=D.shadow,$=t.get(D);$.shadowIntensity=le.intensity,$.shadowBias=le.bias,$.shadowNormalBias=le.normalBias,$.shadowRadius=le.radius,$.shadowMapSize=le.mapSize,$.shadowCameraNear=le.camera.near,$.shadowCameraFar=le.camera.far,i.pointShadow[v]=$,i.pointShadowMap[v]=Z,i.pointShadowMatrix[v]=D.shadow.matrix,A++}i.point[v]=j,v++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(q),j.groundColor.copy(D.groundColor).multiplyScalar(q),i.hemi[d]=j,d++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const I=i.hash;(I.directionalLength!==m||I.pointLength!==v||I.spotLength!==g||I.rectAreaLength!==p||I.hemiLength!==d||I.numDirectionalShadows!==w||I.numPointShadows!==A||I.numSpotShadows!==_||I.numSpotMaps!==C||I.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=_+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,I.directionalLength=m,I.pointLength=v,I.spotLength=g,I.rectAreaLength=p,I.hemiLength=d,I.numDirectionalShadows=w,I.numPointShadows=A,I.numSpotShadows=_,I.numSpotMaps=C,I.numLightProbes=P,i.version=fg++)}function l(c,u){let f=0,h=0,m=0,v=0,g=0;const p=u.matrixWorldInverse;for(let d=0,w=c.length;d<w;d++){const A=c[d];if(A.isDirectionalLight){const _=i.directional[f];_.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),f++}else if(A.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(p),_.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const _=i.rectArea[v];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(p),a.identity(),s.copy(A.matrixWorld),s.premultiply(p),a.extractRotation(s),_.halfWidth.set(A.width*.5,0,0),_.halfHeight.set(0,A.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){const _=i.point[h];_.position.setFromMatrixPosition(A.matrixWorld),_.position.applyMatrix4(p),h++}else if(A.isHemisphereLight){const _=i.hemi[g];_.direction.setFromMatrixPosition(A.matrixWorld),_.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Il(n){const e=new mg(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function gg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Il(n),e.set(r,[o])):s>=a.length?(o=new Il(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const _g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xg(n,e,t){let i=new bc;const r=new ut,s=new ut,a=new yt,o=new Xd({depthPacking:zu}),l=new qd,c={},u=t.maxTextureSize,f={[oi]:$t,[$t]:oi,[kn]:kn},h=new Yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:_g,fragmentShader:vg}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const v=new En;v.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Wn(v,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kl;let d=this.type;this.render=function(T,P,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const E=n.getRenderTarget(),M=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(ri),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const q=d!==Bn&&this.type===Bn,k=d===Bn&&this.type!==Bn;for(let Z=0,j=T.length;Z<j;Z++){const le=T[Z],$=le.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const oe=$.getFrameExtents();if(r.multiply(oe),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/oe.x),r.x=s.x*oe.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/oe.y),r.y=s.y*oe.y,$.mapSize.y=s.y)),$.map===null||q===!0||k===!0){const ue=this.type!==Bn?{minFilter:Mn,magFilter:Mn}:{};$.map!==null&&$.map.dispose(),$.map=new bi(r.x,r.y,ue),$.map.texture.name=le.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const he=$.getViewportCount();for(let ue=0;ue<he;ue++){const ke=$.getViewport(ue);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),Y.viewport(a),$.updateMatrices(le,ue),i=$.getFrustum(),_(P,I,$.camera,le,this.type)}$.isPointLightShadow!==!0&&this.type===Bn&&w($,I),$.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(E,M,D)};function w(T,P){const I=e.update(g);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new bi(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(P,null,I,h,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(P,null,I,m,g,null)}function A(T,P,I,E){let M=null;const D=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(D!==void 0)M=D;else if(M=I.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Y=M.uuid,q=P.uuid;let k=c[Y];k===void 0&&(k={},c[Y]=k);let Z=k[q];Z===void 0&&(Z=M.clone(),k[q]=Z,P.addEventListener("dispose",C)),M=Z}if(M.visible=P.visible,M.wireframe=P.wireframe,E===Bn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Y=n.properties.get(M);Y.light=I}return M}function _(T,P,I,E,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Bn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const q=e.update(T),k=T.material;if(Array.isArray(k)){const Z=q.groups;for(let j=0,le=Z.length;j<le;j++){const $=Z[j],oe=k[$.materialIndex];if(oe&&oe.visible){const he=A(T,oe,E,M);T.onBeforeShadow(n,T,P,I,q,he,$),n.renderBufferDirect(I,null,q,he,T,$),T.onAfterShadow(n,T,P,I,q,he,$)}}}else if(k.visible){const Z=A(T,k,E,M);T.onBeforeShadow(n,T,P,I,q,Z,null),n.renderBufferDirect(I,null,q,Z,T,null),T.onAfterShadow(n,T,P,I,q,Z,null)}}const Y=T.children;for(let q=0,k=Y.length;q<k;q++)_(Y[q],P,I,E,M)}function C(T){T.target.removeEventListener("dispose",C);for(const I in c){const E=c[I],M=T.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}const yg={[ba]:Sa,[Ea]:wa,[Ta]:Ra,[$i]:Aa,[Sa]:ba,[wa]:Ea,[Ra]:Ta,[Aa]:$i};function Mg(n,e){function t(){let b=!1;const B=new yt;let N=null;const X=new yt(0,0,0,0);return{setMask:function(ae){N!==ae&&!b&&(n.colorMask(ae,ae,ae,ae),N=ae)},setLocked:function(ae){b=ae},setClear:function(ae,ee,Ae,Qe,dt){dt===!0&&(ae*=Qe,ee*=Qe,Ae*=Qe),B.set(ae,ee,Ae,Qe),X.equals(B)===!1&&(n.clearColor(ae,ee,Ae,Qe),X.copy(B))},reset:function(){b=!1,N=null,X.set(-1,0,0,0)}}}function i(){let b=!1,B=!1,N=null,X=null,ae=null;return{setReversed:function(ee){if(B!==ee){const Ae=e.get("EXT_clip_control");B?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT);const Qe=ae;ae=null,this.setClear(Qe)}B=ee},getReversed:function(){return B},setTest:function(ee){ee?ge(n.DEPTH_TEST):Le(n.DEPTH_TEST)},setMask:function(ee){N!==ee&&!b&&(n.depthMask(ee),N=ee)},setFunc:function(ee){if(B&&(ee=yg[ee]),X!==ee){switch(ee){case ba:n.depthFunc(n.NEVER);break;case Sa:n.depthFunc(n.ALWAYS);break;case Ea:n.depthFunc(n.LESS);break;case $i:n.depthFunc(n.LEQUAL);break;case Ta:n.depthFunc(n.EQUAL);break;case Aa:n.depthFunc(n.GEQUAL);break;case wa:n.depthFunc(n.GREATER);break;case Ra:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}X=ee}},setLocked:function(ee){b=ee},setClear:function(ee){ae!==ee&&(B&&(ee=1-ee),n.clearDepth(ee),ae=ee)},reset:function(){b=!1,N=null,X=null,ae=null,B=!1}}}function r(){let b=!1,B=null,N=null,X=null,ae=null,ee=null,Ae=null,Qe=null,dt=null;return{setTest:function($e){b||($e?ge(n.STENCIL_TEST):Le(n.STENCIL_TEST))},setMask:function($e){B!==$e&&!b&&(n.stencilMask($e),B=$e)},setFunc:function($e,vt,Rt){(N!==$e||X!==vt||ae!==Rt)&&(n.stencilFunc($e,vt,Rt),N=$e,X=vt,ae=Rt)},setOp:function($e,vt,Rt){(ee!==$e||Ae!==vt||Qe!==Rt)&&(n.stencilOp($e,vt,Rt),ee=$e,Ae=vt,Qe=Rt)},setLocked:function($e){b=$e},setClear:function($e){dt!==$e&&(n.clearStencil($e),dt=$e)},reset:function(){b=!1,B=null,N=null,X=null,ae=null,ee=null,Ae=null,Qe=null,dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},h=new WeakMap,m=[],v=null,g=!1,p=null,d=null,w=null,A=null,_=null,C=null,T=null,P=new nt(0,0,0),I=0,E=!1,M=null,D=null,Y=null,q=null,k=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,le=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec($)[1]),j=le>=1):$.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),j=le>=2);let oe=null,he={};const ue=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),je=new yt().fromArray(ue),te=new yt().fromArray(ke);function de(b,B,N,X){const ae=new Uint8Array(4),ee=n.createTexture();n.bindTexture(b,ee),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<N;Ae++)b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY?n.texImage3D(B,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(B+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return ee}const Te={};Te[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Te[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Te[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Te[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ge(n.DEPTH_TEST),a.setFunc($i),Ge(!1),Xe(Io),ge(n.CULL_FACE),L(ri);function ge(b){u[b]!==!0&&(n.enable(b),u[b]=!0)}function Le(b){u[b]!==!1&&(n.disable(b),u[b]=!1)}function Be(b,B){return f[b]!==B?(n.bindFramebuffer(b,B),f[b]=B,b===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=B),b===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=B),!0):!1}function ze(b,B){let N=m,X=!1;if(b){N=h.get(B),N===void 0&&(N=[],h.set(B,N));const ae=b.textures;if(N.length!==ae.length||N[0]!==n.COLOR_ATTACHMENT0){for(let ee=0,Ae=ae.length;ee<Ae;ee++)N[ee]=n.COLOR_ATTACHMENT0+ee;N.length=ae.length,X=!0}}else N[0]!==n.BACK&&(N[0]=n.BACK,X=!0);X&&n.drawBuffers(N)}function st(b){return v!==b?(n.useProgram(b),v=b,!0):!1}const Ve={[Hn]:n.FUNC_ADD,[du]:n.FUNC_SUBTRACT,[hu]:n.FUNC_REVERSE_SUBTRACT};Ve[fu]=n.MIN,Ve[pu]=n.MAX;const at={[mu]:n.ZERO,[gu]:n.ONE,[_u]:n.SRC_COLOR,[gr]:n.SRC_ALPHA,[Su]:n.SRC_ALPHA_SATURATE,[Mu]:n.DST_COLOR,[xu]:n.DST_ALPHA,[vu]:n.ONE_MINUS_SRC_COLOR,[_r]:n.ONE_MINUS_SRC_ALPHA,[bu]:n.ONE_MINUS_DST_COLOR,[yu]:n.ONE_MINUS_DST_ALPHA,[Eu]:n.CONSTANT_COLOR,[Tu]:n.ONE_MINUS_CONSTANT_COLOR,[Au]:n.CONSTANT_ALPHA,[wu]:n.ONE_MINUS_CONSTANT_ALPHA};function L(b,B,N,X,ae,ee,Ae,Qe,dt,$e){if(b===ri){g===!0&&(Le(n.BLEND),g=!1);return}if(g===!1&&(ge(n.BLEND),g=!0),b!==Ma){if(b!==p||$e!==E){if((d!==Hn||_!==Hn)&&(n.blendEquation(n.FUNC_ADD),d=Hn,_=Hn),$e)switch(b){case si:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.ONE,n.ONE);break;case No:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case si:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Vi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case No:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}w=null,A=null,C=null,T=null,P.set(0,0,0),I=0,p=b,E=$e}return}ae=ae||B,ee=ee||N,Ae=Ae||X,(B!==d||ae!==_)&&(n.blendEquationSeparate(Ve[B],Ve[ae]),d=B,_=ae),(N!==w||X!==A||ee!==C||Ae!==T)&&(n.blendFuncSeparate(at[N],at[X],at[ee],at[Ae]),w=N,A=X,C=ee,T=Ae),(Qe.equals(P)===!1||dt!==I)&&(n.blendColor(Qe.r,Qe.g,Qe.b,dt),P.copy(Qe),I=dt),p=b,E=!1}function Et(b,B){b.side===kn?Le(n.CULL_FACE):ge(n.CULL_FACE);let N=b.side===$t;B&&(N=!N),Ge(N),b.blending===si&&b.transparent===!1?L(ri):L(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),a.setFunc(b.depthFunc),a.setTest(b.depthTest),a.setMask(b.depthWrite),s.setMask(b.colorWrite);const X=b.stencilWrite;o.setTest(X),X&&(o.setMask(b.stencilWriteMask),o.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),o.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),et(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?ge(n.SAMPLE_ALPHA_TO_COVERAGE):Le(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(b){M!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),M=b)}function Xe(b){b!==lu?(ge(n.CULL_FACE),b!==D&&(b===Io?n.cullFace(n.BACK):b===cu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Le(n.CULL_FACE),D=b}function we(b){b!==Y&&(j&&n.lineWidth(b),Y=b)}function et(b,B,N){b?(ge(n.POLYGON_OFFSET_FILL),(q!==B||k!==N)&&(n.polygonOffset(B,N),q=B,k=N)):Le(n.POLYGON_OFFSET_FILL)}function Re(b){b?ge(n.SCISSOR_TEST):Le(n.SCISSOR_TEST)}function R(b){b===void 0&&(b=n.TEXTURE0+Z-1),oe!==b&&(n.activeTexture(b),oe=b)}function x(b,B,N){N===void 0&&(oe===null?N=n.TEXTURE0+Z-1:N=oe);let X=he[N];X===void 0&&(X={type:void 0,texture:void 0},he[N]=X),(X.type!==b||X.texture!==B)&&(oe!==N&&(n.activeTexture(N),oe=N),n.bindTexture(b,B||Te[b]),X.type=b,X.texture=B)}function H(){const b=he[oe];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function re(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Pe(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ce(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function ye(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function De(b){je.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),je.copy(b))}function S(b){te.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),te.copy(b))}function F(b,B){let N=c.get(B);N===void 0&&(N=new WeakMap,c.set(B,N));let X=N.get(b);X===void 0&&(X=n.getUniformBlockIndex(B,b.name),N.set(b,X))}function G(b,B){const X=c.get(B).get(b);l.get(B)!==X&&(n.uniformBlockBinding(B,X,b.__bindingPointIndex),l.set(B,X))}function J(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},oe=null,he={},f={},h=new WeakMap,m=[],v=null,g=!1,p=null,d=null,w=null,A=null,_=null,C=null,T=null,P=new nt(0,0,0),I=0,E=!1,M=null,D=null,Y=null,q=null,k=null,je.set(0,0,n.canvas.width,n.canvas.height),te.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ge,disable:Le,bindFramebuffer:Be,drawBuffers:ze,useProgram:st,setBlending:L,setMaterial:Et,setFlipSided:Ge,setCullFace:Xe,setLineWidth:we,setPolygonOffset:et,setScissorTest:Re,activeTexture:R,bindTexture:x,unbindTexture:H,compressedTexImage2D:ie,compressedTexImage3D:re,texImage2D:ye,texImage3D:Ce,updateUBOMapping:F,uniformBlockBinding:G,texStorage2D:Pe,texStorage3D:ce,texSubImage2D:ne,texSubImage3D:fe,compressedTexSubImage2D:pe,compressedTexSubImage3D:ve,scissor:De,viewport:S,reset:J}}function bg(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,x){return m?new OffscreenCanvas(R,x):ys("canvas")}function g(R,x,H){let ie=1;const re=Re(R);if((re.width>H||re.height>H)&&(ie=H/Math.max(re.width,re.height)),ie<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ne=Math.floor(ie*re.width),fe=Math.floor(ie*re.height);f===void 0&&(f=v(ne,fe));const pe=x?v(ne,fe):f;return pe.width=ne,pe.height=fe,pe.getContext("2d").drawImage(R,0,0,ne,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+ne+"x"+fe+")."),pe}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),R;return R}function p(R){return R.generateMipmaps}function d(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(R,x,H,ie,re=!1){if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=x;if(x===n.RED&&(H===n.FLOAT&&(ne=n.R32F),H===n.HALF_FLOAT&&(ne=n.R16F),H===n.UNSIGNED_BYTE&&(ne=n.R8)),x===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.R8UI),H===n.UNSIGNED_SHORT&&(ne=n.R16UI),H===n.UNSIGNED_INT&&(ne=n.R32UI),H===n.BYTE&&(ne=n.R8I),H===n.SHORT&&(ne=n.R16I),H===n.INT&&(ne=n.R32I)),x===n.RG&&(H===n.FLOAT&&(ne=n.RG32F),H===n.HALF_FLOAT&&(ne=n.RG16F),H===n.UNSIGNED_BYTE&&(ne=n.RG8)),x===n.RG_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RG8UI),H===n.UNSIGNED_SHORT&&(ne=n.RG16UI),H===n.UNSIGNED_INT&&(ne=n.RG32UI),H===n.BYTE&&(ne=n.RG8I),H===n.SHORT&&(ne=n.RG16I),H===n.INT&&(ne=n.RG32I)),x===n.RGB_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),H===n.UNSIGNED_INT&&(ne=n.RGB32UI),H===n.BYTE&&(ne=n.RGB8I),H===n.SHORT&&(ne=n.RGB16I),H===n.INT&&(ne=n.RGB32I)),x===n.RGBA_INTEGER&&(H===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),H===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),H===n.UNSIGNED_INT&&(ne=n.RGBA32UI),H===n.BYTE&&(ne=n.RGBA8I),H===n.SHORT&&(ne=n.RGBA16I),H===n.INT&&(ne=n.RGBA32I)),x===n.RGB&&H===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),x===n.RGBA){const fe=re?vs:tt.getTransfer(ie);H===n.FLOAT&&(ne=n.RGBA32F),H===n.HALF_FLOAT&&(ne=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ne=fe===ct?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function _(R,x){let H;return R?x===null||x===Mi||x===Zi?H=n.DEPTH24_STENCIL8:x===Vn?H=n.DEPTH32F_STENCIL8:x===vr&&(H=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Mi||x===Zi?H=n.DEPTH_COMPONENT24:x===Vn?H=n.DEPTH_COMPONENT32F:x===vr&&(H=n.DEPTH_COMPONENT16),H}function C(R,x){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Mn&&R.minFilter!==Cn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function T(R){const x=R.target;x.removeEventListener("dispose",T),I(x),x.isVideoTexture&&u.delete(x)}function P(R){const x=R.target;x.removeEventListener("dispose",P),M(x)}function I(R){const x=i.get(R);if(x.__webglInit===void 0)return;const H=R.source,ie=h.get(H);if(ie){const re=ie[x.__cacheKey];re.usedTimes--,re.usedTimes===0&&E(R),Object.keys(ie).length===0&&h.delete(H)}i.remove(R)}function E(R){const x=i.get(R);n.deleteTexture(x.__webglTexture);const H=R.source,ie=h.get(H);delete ie[x.__cacheKey],a.memory.textures--}function M(R){const x=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(x.__webglFramebuffer[ie]))for(let re=0;re<x.__webglFramebuffer[ie].length;re++)n.deleteFramebuffer(x.__webglFramebuffer[ie][re]);else n.deleteFramebuffer(x.__webglFramebuffer[ie]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[ie])}else{if(Array.isArray(x.__webglFramebuffer))for(let ie=0;ie<x.__webglFramebuffer.length;ie++)n.deleteFramebuffer(x.__webglFramebuffer[ie]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let ie=0;ie<x.__webglColorRenderbuffer.length;ie++)x.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[ie]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=R.textures;for(let ie=0,re=H.length;ie<re;ie++){const ne=i.get(H[ie]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(H[ie])}i.remove(R)}let D=0;function Y(){D=0}function q(){const R=D;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),D+=1,R}function k(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function Z(R,x){const H=i.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.version>0&&H.__version!==R.version){const ie=R.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(H,R,x);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+x)}function j(R,x){const H=i.get(R);if(R.version>0&&H.__version!==R.version){te(H,R,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+x)}function le(R,x){const H=i.get(R);if(R.version>0&&H.__version!==R.version){te(H,R,x);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+x)}function $(R,x){const H=i.get(R);if(R.version>0&&H.__version!==R.version){de(H,R,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+x)}const oe={[La]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Da]:n.MIRRORED_REPEAT},he={[Mn]:n.NEAREST,[Ou]:n.NEAREST_MIPMAP_NEAREST,[Pr]:n.NEAREST_MIPMAP_LINEAR,[Cn]:n.LINEAR,[ks]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},ue={[Vu]:n.NEVER,[Yu]:n.ALWAYS,[Gu]:n.LESS,[uc]:n.LEQUAL,[Wu]:n.EQUAL,[$u]:n.GEQUAL,[Xu]:n.GREATER,[qu]:n.NOTEQUAL};function ke(R,x){if(x.type===Vn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Cn||x.magFilter===ks||x.magFilter===Pr||x.magFilter===yi||x.minFilter===Cn||x.minFilter===ks||x.minFilter===Pr||x.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,oe[x.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,oe[x.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,oe[x.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,he[x.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Mn||x.minFilter!==Pr&&x.minFilter!==yi||x.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function je(R,x){let H=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",T));const ie=x.source;let re=h.get(ie);re===void 0&&(re={},h.set(ie,re));const ne=k(x);if(ne!==R.__cacheKey){re[ne]===void 0&&(re[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,H=!0),re[ne].usedTimes++;const fe=re[R.__cacheKey];fe!==void 0&&(re[R.__cacheKey].usedTimes--,fe.usedTimes===0&&E(x)),R.__cacheKey=ne,R.__webglTexture=re[ne].texture}return H}function te(R,x,H){let ie=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=n.TEXTURE_3D);const re=je(R,x),ne=x.source;t.bindTexture(ie,R.__webglTexture,n.TEXTURE0+H);const fe=i.get(ne);if(ne.version!==fe.__version||re===!0){t.activeTexture(n.TEXTURE0+H);const pe=tt.getPrimaries(tt.workingColorSpace),ve=x.colorSpace===ni?null:tt.getPrimaries(x.colorSpace),Pe=x.colorSpace===ni||pe===ve?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let ce=g(x.image,!1,r.maxTextureSize);ce=et(x,ce);const ye=s.convert(x.format,x.colorSpace),Ce=s.convert(x.type);let De=A(x.internalFormat,ye,Ce,x.colorSpace,x.isVideoTexture);ke(ie,x);let S;const F=x.mipmaps,G=x.isVideoTexture!==!0,J=fe.__version===void 0||re===!0,b=ne.dataReady,B=C(x,ce);if(x.isDepthTexture)De=_(x.format===Ki,x.type),J&&(G?t.texStorage2D(n.TEXTURE_2D,1,De,ce.width,ce.height):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,ye,Ce,null));else if(x.isDataTexture)if(F.length>0){G&&J&&t.texStorage2D(n.TEXTURE_2D,B,De,F[0].width,F[0].height);for(let N=0,X=F.length;N<X;N++)S=F[N],G?b&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,S.width,S.height,ye,Ce,S.data):t.texImage2D(n.TEXTURE_2D,N,De,S.width,S.height,0,ye,Ce,S.data);x.generateMipmaps=!1}else G?(J&&t.texStorage2D(n.TEXTURE_2D,B,De,ce.width,ce.height),b&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce.width,ce.height,ye,Ce,ce.data)):t.texImage2D(n.TEXTURE_2D,0,De,ce.width,ce.height,0,ye,Ce,ce.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){G&&J&&t.texStorage3D(n.TEXTURE_2D_ARRAY,B,De,F[0].width,F[0].height,ce.depth);for(let N=0,X=F.length;N<X;N++)if(S=F[N],x.format!==yn)if(ye!==null)if(G){if(b)if(x.layerUpdates.size>0){const ae=cl(S.width,S.height,x.format,x.type);for(const ee of x.layerUpdates){const Ae=S.data.subarray(ee*ae/S.data.BYTES_PER_ELEMENT,(ee+1)*ae/S.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,ee,S.width,S.height,1,ye,Ae)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,S.width,S.height,ce.depth,ye,S.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,N,De,S.width,S.height,ce.depth,0,S.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?b&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,N,0,0,0,S.width,S.height,ce.depth,ye,Ce,S.data):t.texImage3D(n.TEXTURE_2D_ARRAY,N,De,S.width,S.height,ce.depth,0,ye,Ce,S.data)}else{G&&J&&t.texStorage2D(n.TEXTURE_2D,B,De,F[0].width,F[0].height);for(let N=0,X=F.length;N<X;N++)S=F[N],x.format!==yn?ye!==null?G?b&&t.compressedTexSubImage2D(n.TEXTURE_2D,N,0,0,S.width,S.height,ye,S.data):t.compressedTexImage2D(n.TEXTURE_2D,N,De,S.width,S.height,0,S.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?b&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,S.width,S.height,ye,Ce,S.data):t.texImage2D(n.TEXTURE_2D,N,De,S.width,S.height,0,ye,Ce,S.data)}else if(x.isDataArrayTexture)if(G){if(J&&t.texStorage3D(n.TEXTURE_2D_ARRAY,B,De,ce.width,ce.height,ce.depth),b)if(x.layerUpdates.size>0){const N=cl(ce.width,ce.height,x.format,x.type);for(const X of x.layerUpdates){const ae=ce.data.subarray(X*N/ce.data.BYTES_PER_ELEMENT,(X+1)*N/ce.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,X,ce.width,ce.height,1,ye,Ce,ae)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ce,ce.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,De,ce.width,ce.height,ce.depth,0,ye,Ce,ce.data);else if(x.isData3DTexture)G?(J&&t.texStorage3D(n.TEXTURE_3D,B,De,ce.width,ce.height,ce.depth),b&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Ce,ce.data)):t.texImage3D(n.TEXTURE_3D,0,De,ce.width,ce.height,ce.depth,0,ye,Ce,ce.data);else if(x.isFramebufferTexture){if(J)if(G)t.texStorage2D(n.TEXTURE_2D,B,De,ce.width,ce.height);else{let N=ce.width,X=ce.height;for(let ae=0;ae<B;ae++)t.texImage2D(n.TEXTURE_2D,ae,De,N,X,0,ye,Ce,null),N>>=1,X>>=1}}else if(F.length>0){if(G&&J){const N=Re(F[0]);t.texStorage2D(n.TEXTURE_2D,B,De,N.width,N.height)}for(let N=0,X=F.length;N<X;N++)S=F[N],G?b&&t.texSubImage2D(n.TEXTURE_2D,N,0,0,ye,Ce,S):t.texImage2D(n.TEXTURE_2D,N,De,ye,Ce,S);x.generateMipmaps=!1}else if(G){if(J){const N=Re(ce);t.texStorage2D(n.TEXTURE_2D,B,De,N.width,N.height)}b&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Ce,ce)}else t.texImage2D(n.TEXTURE_2D,0,De,ye,Ce,ce);p(x)&&d(ie),fe.__version=ne.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function de(R,x,H){if(x.image.length!==6)return;const ie=je(R,x),re=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+H);const ne=i.get(re);if(re.version!==ne.__version||ie===!0){t.activeTexture(n.TEXTURE0+H);const fe=tt.getPrimaries(tt.workingColorSpace),pe=x.colorSpace===ni?null:tt.getPrimaries(x.colorSpace),ve=x.colorSpace===ni||fe===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Pe=x.isCompressedTexture||x.image[0].isCompressedTexture,ce=x.image[0]&&x.image[0].isDataTexture,ye=[];for(let X=0;X<6;X++)!Pe&&!ce?ye[X]=g(x.image[X],!0,r.maxCubemapSize):ye[X]=ce?x.image[X].image:x.image[X],ye[X]=et(x,ye[X]);const Ce=ye[0],De=s.convert(x.format,x.colorSpace),S=s.convert(x.type),F=A(x.internalFormat,De,S,x.colorSpace),G=x.isVideoTexture!==!0,J=ne.__version===void 0||ie===!0,b=re.dataReady;let B=C(x,Ce);ke(n.TEXTURE_CUBE_MAP,x);let N;if(Pe){G&&J&&t.texStorage2D(n.TEXTURE_CUBE_MAP,B,F,Ce.width,Ce.height);for(let X=0;X<6;X++){N=ye[X].mipmaps;for(let ae=0;ae<N.length;ae++){const ee=N[ae];x.format!==yn?De!==null?G?b&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,0,0,ee.width,ee.height,De,ee.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,F,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,0,0,ee.width,ee.height,De,S,ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae,F,ee.width,ee.height,0,De,S,ee.data)}}}else{if(N=x.mipmaps,G&&J){N.length>0&&B++;const X=Re(ye[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,B,F,X.width,X.height)}for(let X=0;X<6;X++)if(ce){G?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ye[X].width,ye[X].height,De,S,ye[X].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,F,ye[X].width,ye[X].height,0,De,S,ye[X].data);for(let ae=0;ae<N.length;ae++){const Ae=N[ae].image[X].image;G?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,0,0,Ae.width,Ae.height,De,S,Ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,F,Ae.width,Ae.height,0,De,S,Ae.data)}}else{G?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,De,S,ye[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,F,De,S,ye[X]);for(let ae=0;ae<N.length;ae++){const ee=N[ae];G?b&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,0,0,De,S,ee.image[X]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,ae+1,F,De,S,ee.image[X])}}}p(x)&&d(n.TEXTURE_CUBE_MAP),ne.__version=re.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function Te(R,x,H,ie,re,ne){const fe=s.convert(H.format,H.colorSpace),pe=s.convert(H.type),ve=A(H.internalFormat,fe,pe,H.colorSpace),Pe=i.get(x),ce=i.get(H);if(ce.__renderTarget=x,!Pe.__hasExternalTextures){const ye=Math.max(1,x.width>>ne),Ce=Math.max(1,x.height>>ne);re===n.TEXTURE_3D||re===n.TEXTURE_2D_ARRAY?t.texImage3D(re,ne,ve,ye,Ce,x.depth,0,fe,pe,null):t.texImage2D(re,ne,ve,ye,Ce,0,fe,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,re,ce.__webglTexture,0,Ge(x)):(re===n.TEXTURE_2D||re>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,re,ce.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(R,x,H){if(n.bindRenderbuffer(n.RENDERBUFFER,R),x.depthBuffer){const ie=x.depthTexture,re=ie&&ie.isDepthTexture?ie.type:null,ne=_(x.stencilBuffer,re),fe=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Ge(x);Xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ne,x.width,x.height):H?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ne,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ne,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,fe,n.RENDERBUFFER,R)}else{const ie=x.textures;for(let re=0;re<ie.length;re++){const ne=ie[re],fe=s.convert(ne.format,ne.colorSpace),pe=s.convert(ne.type),ve=A(ne.internalFormat,fe,pe,ne.colorSpace),Pe=Ge(x);H&&Xe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,ve,x.width,x.height):Xe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,ve,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,ve,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(x.depthTexture);ie.__renderTarget=x,(!ie.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z(x.depthTexture,0);const re=ie.__webglTexture,ne=Ge(x);if(x.depthTexture.format===Xi)Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,re,0);else if(x.depthTexture.format===Ki)Xe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Be(R){const x=i.get(R),H=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const ie=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){const re=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",re)};ie.addEventListener("dispose",re),x.__depthDisposeCallback=re}x.__boundDepthTexture=ie}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Le(x.__webglFramebuffer,R)}else if(H){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=n.createRenderbuffer(),ge(x.__webglDepthbuffer[ie],R,!1);else{const re=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,re,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),ge(x.__webglDepthbuffer,R,!1);else{const ie=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,re)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(R,x,H){const ie=i.get(R);x!==void 0&&Te(ie.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Be(R)}function st(R){const x=R.texture,H=i.get(R),ie=i.get(x);R.addEventListener("dispose",P);const re=R.textures,ne=R.isWebGLCubeRenderTarget===!0,fe=re.length>1;if(fe||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=x.version,a.memory.textures++),ne){H.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[pe]=[];for(let ve=0;ve<x.mipmaps.length;ve++)H.__webglFramebuffer[pe][ve]=n.createFramebuffer()}else H.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)H.__webglFramebuffer[pe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(fe)for(let pe=0,ve=re.length;pe<ve;pe++){const Pe=i.get(re[pe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Xe(R)===!1){H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let pe=0;pe<re.length;pe++){const ve=re[pe];H.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[pe]);const Pe=s.convert(ve.format,ve.colorSpace),ce=s.convert(ve.type),ye=A(ve.internalFormat,Pe,ce,ve.colorSpace,R.isXRRenderTarget===!0),Ce=Ge(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ye,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,H.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),ge(H.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),ke(n.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)Te(H.__webglFramebuffer[pe][ve],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else Te(H.__webglFramebuffer[pe],R,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);p(x)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let pe=0,ve=re.length;pe<ve;pe++){const Pe=re[pe],ce=i.get(Pe);t.bindTexture(n.TEXTURE_2D,ce.__webglTexture),ke(n.TEXTURE_2D,Pe),Te(H.__webglFramebuffer,R,Pe,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),p(Pe)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),ke(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let ve=0;ve<x.mipmaps.length;ve++)Te(H.__webglFramebuffer[ve],R,x,n.COLOR_ATTACHMENT0,pe,ve);else Te(H.__webglFramebuffer,R,x,n.COLOR_ATTACHMENT0,pe,0);p(x)&&d(pe),t.unbindTexture()}R.depthBuffer&&Be(R)}function Ve(R){const x=R.textures;for(let H=0,ie=x.length;H<ie;H++){const re=x[H];if(p(re)){const ne=w(R),fe=i.get(re).__webglTexture;t.bindTexture(ne,fe),d(ne),t.unbindTexture()}}}const at=[],L=[];function Et(R){if(R.samples>0){if(Xe(R)===!1){const x=R.textures,H=R.width,ie=R.height;let re=n.COLOR_BUFFER_BIT;const ne=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=i.get(R),pe=x.length>1;if(pe)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(re|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(re|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const Pe=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pe,0)}n.blitFramebuffer(0,0,H,ie,0,0,H,ie,re,n.NEAREST),l===!0&&(at.length=0,L.length=0,at.push(n.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.resolveDepthBuffer===!1&&(at.push(ne),L.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,L)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.RENDERBUFFER,fe.__webglColorRenderbuffer[ve]);const Pe=i.get(x[ve]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,fe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ve,n.TEXTURE_2D,Pe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Ge(R){return Math.min(r.maxSamples,R.samples)}function Xe(R){const x=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function we(R){const x=a.render.frame;u.get(R)!==x&&(u.set(R,x),R.update())}function et(R,x){const H=R.colorSpace,ie=R.format,re=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||H!==Ji&&H!==ni&&(tt.getTransfer(H)===ct?(ie!==yn||re!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function Re(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=Y,this.setTexture2D=Z,this.setTexture2DArray=j,this.setTexture3D=le,this.setTextureCube=$,this.rebindTextures=ze,this.setupRenderTarget=st,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Xe}function Sg(n,e){function t(i,r=ni){let s;const a=tt.getTransfer(r);if(i===qn)return n.UNSIGNED_BYTE;if(i===po)return n.UNSIGNED_SHORT_4_4_4_4;if(i===mo)return n.UNSIGNED_SHORT_5_5_5_1;if(i===nc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ec)return n.BYTE;if(i===tc)return n.SHORT;if(i===vr)return n.UNSIGNED_SHORT;if(i===fo)return n.INT;if(i===Mi)return n.UNSIGNED_INT;if(i===Vn)return n.FLOAT;if(i===Er)return n.HALF_FLOAT;if(i===ic)return n.ALPHA;if(i===rc)return n.RGB;if(i===yn)return n.RGBA;if(i===sc)return n.LUMINANCE;if(i===ac)return n.LUMINANCE_ALPHA;if(i===Xi)return n.DEPTH_COMPONENT;if(i===Ki)return n.DEPTH_STENCIL;if(i===oc)return n.RED;if(i===go)return n.RED_INTEGER;if(i===lc)return n.RG;if(i===_o)return n.RG_INTEGER;if(i===vo)return n.RGBA_INTEGER;if(i===ls||i===cs||i===us||i===ds)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ia||i===Na||i===Ua||i===Fa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ia)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Na)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ua)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oa||i===Ba||i===za)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oa||i===Ba)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===za)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ka||i===Ha||i===Va||i===Ga||i===Wa||i===Xa||i===qa||i===$a||i===Ya||i===ja||i===Za||i===Ka||i===Ja||i===Qa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ka)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ha)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Va)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ga)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===qa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$a)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ya)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ja)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Za)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ka)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ja)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Qa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hs||i===eo||i===to)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hs)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===eo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===to)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===no||i===io||i===ro)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===no)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ro)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Zi?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Eg={type:"move"};class pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&h>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Eg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Jr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Tg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ag=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new Yt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Yn({vertexShader:Tg,fragmentShader:Ag,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wn(new Cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Rg extends er{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,v=null;const g=new wg,p=t.getContextAttributes();let d=null,w=null;const A=[],_=[],C=new ut;let T=null;const P=new on;P.viewport=new yt;const I=new on;I.viewport=new yt;const E=[P,I],M=new $d;let D=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let de=A[te];return de===void 0&&(de=new pa,A[te]=de),de.getTargetRaySpace()},this.getControllerGrip=function(te){let de=A[te];return de===void 0&&(de=new pa,A[te]=de),de.getGripSpace()},this.getHand=function(te){let de=A[te];return de===void 0&&(de=new pa,A[te]=de),de.getHandSpace()};function q(te){const de=_.indexOf(te.inputSource);if(de===-1)return;const Te=A[de];Te!==void 0&&(Te.update(te.inputSource,te.frame,c||a),Te.dispatchEvent({type:te.type,data:te.inputSource}))}function k(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",Z);for(let te=0;te<A.length;te++){const de=_[te];de!==null&&(_[te]=null,A[te].disconnect(de))}D=null,Y=null,g.reset(),e.setRenderTarget(d),m=null,h=null,f=null,r=null,w=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(te){if(r=te,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",k),r.addEventListener("inputsourceschange",Z),p.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){const de={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,de),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new bi(m.framebufferWidth,m.framebufferHeight,{format:yn,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let de=null,Te=null,ge=null;p.depth&&(ge=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=p.stencil?Ki:Xi,Te=p.stencil?Zi:Mi);const Le={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Le),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),w=new bi(h.textureWidth,h.textureHeight,{format:yn,type:qn,depthTexture:new Ec(h.textureWidth,h.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Z(te){for(let de=0;de<te.removed.length;de++){const Te=te.removed[de],ge=_.indexOf(Te);ge>=0&&(_[ge]=null,A[ge].disconnect(Te))}for(let de=0;de<te.added.length;de++){const Te=te.added[de];let ge=_.indexOf(Te);if(ge===-1){for(let Be=0;Be<A.length;Be++)if(Be>=_.length){_.push(Te),ge=Be;break}else if(_[Be]===null){_[Be]=Te,ge=Be;break}if(ge===-1)break}const Le=A[ge];Le&&Le.connect(Te)}}const j=new z,le=new z;function $(te,de,Te){j.setFromMatrixPosition(de.matrixWorld),le.setFromMatrixPosition(Te.matrixWorld);const ge=j.distanceTo(le),Le=de.projectionMatrix.elements,Be=Te.projectionMatrix.elements,ze=Le[14]/(Le[10]-1),st=Le[14]/(Le[10]+1),Ve=(Le[9]+1)/Le[5],at=(Le[9]-1)/Le[5],L=(Le[8]-1)/Le[0],Et=(Be[8]+1)/Be[0],Ge=ze*L,Xe=ze*Et,we=ge/(-L+Et),et=we*-L;if(de.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(et),te.translateZ(we),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Le[10]===-1)te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Re=ze+we,R=st+we,x=Ge-et,H=Xe+(ge-et),ie=Ve*st/R*Re,re=at*st/R*Re;te.projectionMatrix.makePerspective(x,H,ie,re,Re,R),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function oe(te,de){de===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(de.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(r===null)return;let de=te.near,Te=te.far;g.texture!==null&&(g.depthNear>0&&(de=g.depthNear),g.depthFar>0&&(Te=g.depthFar)),M.near=I.near=P.near=de,M.far=I.far=P.far=Te,(D!==M.near||Y!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),D=M.near,Y=M.far),P.layers.mask=te.layers.mask|2,I.layers.mask=te.layers.mask|4,M.layers.mask=P.layers.mask|I.layers.mask;const ge=te.parent,Le=M.cameras;oe(M,ge);for(let Be=0;Be<Le.length;Be++)oe(Le[Be],ge);Le.length===2?$(M,P,I):M.projectionMatrix.copy(P.projectionMatrix),he(te,M,ge)};function he(te,de,Te){Te===null?te.matrix.copy(de.matrixWorld):(te.matrix.copy(Te.matrixWorld),te.matrix.invert(),te.matrix.multiply(de.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(de.projectionMatrix),te.projectionMatrixInverse.copy(de.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=xr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(te){l=te,h!==null&&(h.fixedFoveation=te),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=te)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(M)};let ue=null;function ke(te,de){if(u=de.getViewerPose(c||a),v=de,u!==null){const Te=u.views;m!==null&&(e.setRenderTargetFramebuffer(w,m.framebuffer),e.setRenderTarget(w));let ge=!1;Te.length!==M.cameras.length&&(M.cameras.length=0,ge=!0);for(let Be=0;Be<Te.length;Be++){const ze=Te[Be];let st=null;if(m!==null)st=m.getViewport(ze);else{const at=f.getViewSubImage(h,ze);st=at.viewport,Be===0&&(e.setRenderTargetTextures(w,at.colorTexture,h.ignoreDepthValues?void 0:at.depthStencilTexture),e.setRenderTarget(w))}let Ve=E[Be];Ve===void 0&&(Ve=new on,Ve.layers.enable(Be),Ve.viewport=new yt,E[Be]=Ve),Ve.matrix.fromArray(ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(st.x,st.y,st.width,st.height),Be===0&&(M.matrix.copy(Ve.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ge===!0&&M.cameras.push(Ve)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Be=f.getDepthInformation(Te[0]);Be&&Be.isValid&&Be.texture&&g.init(e,Be,r.renderState)}}for(let Te=0;Te<A.length;Te++){const ge=_[Te],Le=A[Te];ge!==null&&Le!==void 0&&Le.update(ge,de,c||a)}ue&&ue(te,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),v=null}const je=new Ac;je.setAnimationLoop(ke),this.setAnimationLoop=function(te){ue=te},this.dispose=function(){}}}const pi=new $n,Cg=new _t;function Pg(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,xc(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,w,A,_){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),f(p,d)):d.isMeshPhongMaterial?(s(p,d),u(p,d)):d.isMeshStandardMaterial?(s(p,d),h(p,d),d.isMeshPhysicalMaterial&&m(p,d,_)):d.isMeshMatcapMaterial?(s(p,d),v(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),g(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,w,A):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===$t&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===$t&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const w=e.get(d),A=w.envMap,_=w.envMapRotation;A&&(p.envMap.value=A,pi.copy(_),pi.x*=-1,pi.y*=-1,pi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),p.envMapRotation.value.setFromMatrix4(Cg.makeRotationFromEuler(pi)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,w,A){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*w,p.scale.value=A*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function h(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,w){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const w=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Lg(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const _=A.program;i.uniformBlockBinding(w,_)}function c(w,A){let _=r[w.id];_===void 0&&(v(w),_=u(w),r[w.id]=_,w.addEventListener("dispose",p));const C=A.program;i.updateUBOMapping(w,C);const T=e.render.frame;s[w.id]!==T&&(h(w),s[w.id]=T)}function u(w){const A=f();w.__bindingPointIndex=A;const _=n.createBuffer(),C=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,_),_}function f(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(w){const A=r[w.id],_=w.uniforms,C=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let T=0,P=_.length;T<P;T++){const I=Array.isArray(_[T])?_[T]:[_[T]];for(let E=0,M=I.length;E<M;E++){const D=I[E];if(m(D,T,E,C)===!0){const Y=D.__offset,q=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let Z=0;Z<q.length;Z++){const j=q[Z],le=g(j);typeof j=="number"||typeof j=="boolean"?(D.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,Y+k,D.__data)):j.isMatrix3?(D.__data[0]=j.elements[0],D.__data[1]=j.elements[1],D.__data[2]=j.elements[2],D.__data[3]=0,D.__data[4]=j.elements[3],D.__data[5]=j.elements[4],D.__data[6]=j.elements[5],D.__data[7]=0,D.__data[8]=j.elements[6],D.__data[9]=j.elements[7],D.__data[10]=j.elements[8],D.__data[11]=0):(j.toArray(D.__data,k),k+=le.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,A,_,C){const T=w.value,P=A+"_"+_;if(C[P]===void 0)return typeof T=="number"||typeof T=="boolean"?C[P]=T:C[P]=T.clone(),!0;{const I=C[P];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return C[P]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function v(w){const A=w.uniforms;let _=0;const C=16;for(let P=0,I=A.length;P<I;P++){const E=Array.isArray(A[P])?A[P]:[A[P]];for(let M=0,D=E.length;M<D;M++){const Y=E[M],q=Array.isArray(Y.value)?Y.value:[Y.value];for(let k=0,Z=q.length;k<Z;k++){const j=q[k],le=g(j),$=_%C,oe=$%le.boundary,he=$+oe;_+=oe,he!==0&&C-he<le.storage&&(_+=C-he),Y.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=_,_+=le.storage}}}const T=_%C;return T>0&&(_+=C-T),w.__size=_,w.__cache={},this}function g(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function p(w){const A=w.target;A.removeEventListener("dispose",p);const _=a.indexOf(A.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(r[A.id]),delete r[A.id],delete s[A.id]}function d(){for(const w in r)n.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Lc{constructor(e={}){const{canvas:t=hd(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const v=new Uint32Array(4),g=new Int32Array(4);let p=null,d=null;const w=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sn,this.toneMapping=ai,this.toneMappingExposure=1;const _=this;let C=!1,T=0,P=0,I=null,E=-1,M=null;const D=new yt,Y=new yt;let q=null;const k=new nt(0);let Z=0,j=t.width,le=t.height,$=1,oe=null,he=null;const ue=new yt(0,0,j,le),ke=new yt(0,0,j,le);let je=!1;const te=new bc;let de=!1,Te=!1;const ge=new _t,Le=new _t,Be=new z,ze=new yt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function at(){return I===null?$:1}let L=i;function Et(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ho}`),t.addEventListener("webglcontextlost",X,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",ee,!1),L===null){const U="webgl2";if(L=Et(U,y),L===null)throw Et(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ge,Xe,we,et,Re,R,x,H,ie,re,ne,fe,pe,ve,Pe,ce,ye,Ce,De,S,F,G,J,b;function B(){Ge=new Hp(L),Ge.init(),G=new Sg(L,Ge),Xe=new Up(L,Ge,e,G),we=new Mg(L,Ge),Xe.reverseDepthBuffer&&h&&we.buffers.depth.setReversed(!0),et=new Wp(L),Re=new lg,R=new bg(L,Ge,we,Re,Xe,G,et),x=new Op(_),H=new kp(_),ie=new Zd(L),J=new Ip(L,ie),re=new Vp(L,ie,et,J),ne=new qp(L,re,ie,et),De=new Xp(L,Xe,R),ce=new Fp(Re),fe=new og(_,x,H,Ge,Xe,J,ce),pe=new Pg(_,Re),ve=new ug,Pe=new gg(Ge),Ce=new Dp(_,x,H,we,ne,m,l),ye=new xg(_,ne,Xe),b=new Lg(L,et,Xe,we),S=new Np(L,Ge,et),F=new Gp(L,Ge,et),et.programs=fe.programs,_.capabilities=Xe,_.extensions=Ge,_.properties=Re,_.renderLists=ve,_.shadowMap=ye,_.state=we,_.info=et}B();const N=new Rg(_,L);this.xr=N,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const y=Ge.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ge.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(j,le,!1))},this.getSize=function(y){return y.set(j,le)},this.setSize=function(y,U,V=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=y,le=U,t.width=Math.floor(y*$),t.height=Math.floor(U*$),V===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(j*$,le*$).floor()},this.setDrawingBufferSize=function(y,U,V){j=y,le=U,$=V,t.width=Math.floor(y*V),t.height=Math.floor(U*V),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(D)},this.getViewport=function(y){return y.copy(ue)},this.setViewport=function(y,U,V,W){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,U,V,W),we.viewport(D.copy(ue).multiplyScalar($).round())},this.getScissor=function(y){return y.copy(ke)},this.setScissor=function(y,U,V,W){y.isVector4?ke.set(y.x,y.y,y.z,y.w):ke.set(y,U,V,W),we.scissor(Y.copy(ke).multiplyScalar($).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(y){we.setScissorTest(je=y)},this.setOpaqueSort=function(y){oe=y},this.setTransparentSort=function(y){he=y},this.getClearColor=function(y){return y.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(y=!0,U=!0,V=!0){let W=0;if(y){let O=!1;if(I!==null){const se=I.texture.format;O=se===vo||se===_o||se===go}if(O){const se=I.texture.type,me=se===qn||se===Mi||se===vr||se===Zi||se===po||se===mo,xe=Ce.getClearColor(),Ee=Ce.getClearAlpha(),Oe=xe.r,Ue=xe.g,Q=xe.b;me?(v[0]=Oe,v[1]=Ue,v[2]=Q,v[3]=Ee,L.clearBufferuiv(L.COLOR,0,v)):(g[0]=Oe,g[1]=Ue,g[2]=Q,g[3]=Ee,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}U&&(W|=L.DEPTH_BUFFER_BIT),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",X,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",ee,!1),Ce.dispose(),ve.dispose(),Pe.dispose(),Re.dispose(),x.dispose(),H.dispose(),ne.dispose(),J.dispose(),b.dispose(),fe.dispose(),N.dispose(),N.removeEventListener("sessionstart",zt),N.removeEventListener("sessionend",hn),Tt.stop()};function X(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const y=et.autoReset,U=ye.enabled,V=ye.autoUpdate,W=ye.needsUpdate,O=ye.type;B(),et.autoReset=y,ye.enabled=U,ye.autoUpdate=V,ye.needsUpdate=W,ye.type=O}function ee(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ae(y){const U=y.target;U.removeEventListener("dispose",Ae),Qe(U)}function Qe(y){dt(y),Re.remove(y)}function dt(y){const U=Re.get(y).programs;U!==void 0&&(U.forEach(function(V){fe.releaseProgram(V)}),y.isShaderMaterial&&fe.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,V,W,O,se){U===null&&(U=st);const me=O.isMesh&&O.matrixWorld.determinant()<0,xe=fn(y,U,V,W,O);we.setMaterial(W,me);let Ee=V.index,Oe=1;if(W.wireframe===!0){if(Ee=re.getWireframeAttribute(V),Ee===void 0)return;Oe=2}const Ue=V.drawRange,Q=V.attributes.position;let be=Ue.start*Oe,He=(Ue.start+Ue.count)*Oe;se!==null&&(be=Math.max(be,se.start*Oe),He=Math.min(He,(se.start+se.count)*Oe)),Ee!==null?(be=Math.max(be,0),He=Math.min(He,Ee.count)):Q!=null&&(be=Math.max(be,0),He=Math.min(He,Q.count));const Ye=He-be;if(Ye<0||Ye===1/0)return;J.setup(O,W,xe,V,Ee);let ot,Ke=S;if(Ee!==null&&(ot=ie.get(Ee),Ke=F,Ke.setIndex(ot)),O.isMesh)W.wireframe===!0?(we.setLineWidth(W.wireframeLinewidth*at()),Ke.setMode(L.LINES)):Ke.setMode(L.TRIANGLES);else if(O.isLine){let Ie=W.linewidth;Ie===void 0&&(Ie=1),we.setLineWidth(Ie*at()),O.isLineSegments?Ke.setMode(L.LINES):O.isLineLoop?Ke.setMode(L.LINE_LOOP):Ke.setMode(L.LINE_STRIP)}else O.isPoints?Ke.setMode(L.POINTS):O.isSprite&&Ke.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Ke.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Ge.get("WEBGL_multi_draw"))Ke.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ie=O._multiDrawStarts,Nt=O._multiDrawCounts,rt=O._multiDrawCount,pn=Ee?ie.get(Ee).bytesPerElement:1,Si=Re.get(W).currentProgram.getUniforms();for(let Zt=0;Zt<rt;Zt++)Si.setValue(L,"_gl_DrawID",Zt),Ke.render(Ie[Zt]/pn,Nt[Zt])}else if(O.isInstancedMesh)Ke.renderInstances(be,Ye,O.count);else if(V.isInstancedBufferGeometry){const Ie=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Nt=Math.min(V.instanceCount,Ie);Ke.renderInstances(be,Ye,Nt)}else Ke.render(be,Ye)};function $e(y,U,V){y.transparent===!0&&y.side===kn&&y.forceSinglePass===!1?(y.side=$t,y.needsUpdate=!0,gt(y,U,V),y.side=oi,y.needsUpdate=!0,gt(y,U,V),y.side=kn):gt(y,U,V)}this.compile=function(y,U,V=null){V===null&&(V=y),d=Pe.get(V),d.init(U),A.push(d),V.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),y!==V&&y.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const W=new Set;return y.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const se=O.material;if(se)if(Array.isArray(se))for(let me=0;me<se.length;me++){const xe=se[me];$e(xe,V,O),W.add(xe)}else $e(se,V,O),W.add(se)}),A.pop(),d=null,W},this.compileAsync=function(y,U,V=null){const W=this.compile(y,U,V);return new Promise(O=>{function se(){if(W.forEach(function(me){Re.get(me).currentProgram.isReady()&&W.delete(me)}),W.size===0){O(y);return}setTimeout(se,10)}Ge.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let vt=null;function Rt(y){vt&&vt(y)}function zt(){Tt.stop()}function hn(){Tt.start()}const Tt=new Ac;Tt.setAnimationLoop(Rt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(y){vt=y,N.setAnimationLoop(y),y===null?Tt.stop():Tt.start()},N.addEventListener("sessionstart",zt),N.addEventListener("sessionend",hn),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(U),U=N.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,U,I),d=Pe.get(y,A.length),d.init(U),A.push(d),Le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),te.setFromProjectionMatrix(Le),Te=this.localClippingEnabled,de=ce.init(this.clippingPlanes,Te),p=ve.get(y,w.length),p.init(),w.push(p),N.enabled===!0&&N.isPresenting===!0){const se=_.xr.getDepthSensingMesh();se!==null&&Fe(se,U,-1/0,_.sortObjects)}Fe(y,U,0,_.sortObjects),p.finish(),_.sortObjects===!0&&p.sort(oe,he),Ve=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,Ve&&Ce.addToRenderList(p,y),this.info.render.frame++,de===!0&&ce.beginShadows();const V=d.state.shadowsArray;ye.render(V,y,U),de===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,O=p.transmissive;if(d.setupLights(),U.isArrayCamera){const se=U.cameras;if(O.length>0)for(let me=0,xe=se.length;me<xe;me++){const Ee=se[me];Ct(W,O,y,Ee)}Ve&&Ce.render(y);for(let me=0,xe=se.length;me<xe;me++){const Ee=se[me];xt(p,y,Ee,Ee.viewport)}}else O.length>0&&Ct(W,O,y,U),Ve&&Ce.render(y),xt(p,y,U);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),y.isScene===!0&&y.onAfterRender(_,y,U),J.resetDefaultState(),E=-1,M=null,A.pop(),A.length>0?(d=A[A.length-1],de===!0&&ce.setGlobalState(_.clippingPlanes,d.state.camera)):d=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Fe(y,U,V,W){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)V=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||te.intersectsSprite(y)){W&&ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Le);const me=ne.update(y),xe=y.material;xe.visible&&p.push(y,me,xe,V,ze.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||te.intersectsObject(y))){const me=ne.update(y),xe=y.material;if(W&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),ze.copy(y.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),ze.copy(me.boundingSphere.center)),ze.applyMatrix4(y.matrixWorld).applyMatrix4(Le)),Array.isArray(xe)){const Ee=me.groups;for(let Oe=0,Ue=Ee.length;Oe<Ue;Oe++){const Q=Ee[Oe],be=xe[Q.materialIndex];be&&be.visible&&p.push(y,me,be,V,ze.z,Q)}}else xe.visible&&p.push(y,me,xe,V,ze.z,null)}}const se=y.children;for(let me=0,xe=se.length;me<xe;me++)Fe(se[me],U,V,W)}function xt(y,U,V,W){const O=y.opaque,se=y.transmissive,me=y.transparent;d.setupLightsView(V),de===!0&&ce.setGlobalState(_.clippingPlanes,V),W&&we.viewport(D.copy(W)),O.length>0&&Ut(O,U,V),se.length>0&&Ut(se,U,V),me.length>0&&Ut(me,U,V),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Ct(y,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new bi(1,1,{generateMipmaps:!0,type:Ge.has("EXT_color_buffer_half_float")||Ge.has("EXT_color_buffer_float")?Er:qn,minFilter:yi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const se=d.state.transmissionRenderTarget[W.id],me=W.viewport||D;se.setSize(me.z,me.w);const xe=_.getRenderTarget();_.setRenderTarget(se),_.getClearColor(k),Z=_.getClearAlpha(),Z<1&&_.setClearColor(16777215,.5),_.clear(),Ve&&Ce.render(V);const Ee=_.toneMapping;_.toneMapping=ai;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),de===!0&&ce.setGlobalState(_.clippingPlanes,W),Ut(y,V,W),R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se),Ge.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Q=0,be=U.length;Q<be;Q++){const He=U[Q],Ye=He.object,ot=He.geometry,Ke=He.material,Ie=He.group;if(Ke.side===kn&&Ye.layers.test(W.layers)){const Nt=Ke.side;Ke.side=$t,Ke.needsUpdate=!0,ht(Ye,V,W,ot,Ke,Ie),Ke.side=Nt,Ke.needsUpdate=!0,Ue=!0}}Ue===!0&&(R.updateMultisampleRenderTarget(se),R.updateRenderTargetMipmap(se))}_.setRenderTarget(xe),_.setClearColor(k,Z),Oe!==void 0&&(W.viewport=Oe),_.toneMapping=Ee}function Ut(y,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,se=y.length;O<se;O++){const me=y[O],xe=me.object,Ee=me.geometry,Oe=W===null?me.material:W,Ue=me.group;xe.layers.test(V.layers)&&ht(xe,U,V,Ee,Oe,Ue)}}function ht(y,U,V,W,O,se){y.onBeforeRender(_,U,V,W,O,se),y.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),O.onBeforeRender(_,U,V,W,y,se),O.transparent===!0&&O.side===kn&&O.forceSinglePass===!1?(O.side=$t,O.needsUpdate=!0,_.renderBufferDirect(V,U,W,O,y,se),O.side=oi,O.needsUpdate=!0,_.renderBufferDirect(V,U,W,O,y,se),O.side=kn):_.renderBufferDirect(V,U,W,O,y,se),y.onAfterRender(_,U,V,W,O,se)}function gt(y,U,V){U.isScene!==!0&&(U=st);const W=Re.get(y),O=d.state.lights,se=d.state.shadowsArray,me=O.state.version,xe=fe.getParameters(y,O.state,se,U,V),Ee=fe.getProgramCacheKey(xe);let Oe=W.programs;W.environment=y.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(y.isMeshStandardMaterial?H:x).get(y.envMap||W.environment),W.envMapRotation=W.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,Oe===void 0&&(y.addEventListener("dispose",Ae),Oe=new Map,W.programs=Oe);let Ue=Oe.get(Ee);if(Ue!==void 0){if(W.currentProgram===Ue&&W.lightsStateVersion===me)return Ft(y,xe),Ue}else xe.uniforms=fe.getUniforms(y),y.onBeforeCompile(xe,_),Ue=fe.acquireProgram(xe,Ee),Oe.set(Ee,Ue),W.uniforms=xe.uniforms;const Q=W.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Q.clippingPlanes=ce.uniform),Ft(y,xe),W.needsLights=Ze(y),W.lightsStateVersion=me,W.needsLights&&(Q.ambientLightColor.value=O.state.ambient,Q.lightProbe.value=O.state.probe,Q.directionalLights.value=O.state.directional,Q.directionalLightShadows.value=O.state.directionalShadow,Q.spotLights.value=O.state.spot,Q.spotLightShadows.value=O.state.spotShadow,Q.rectAreaLights.value=O.state.rectArea,Q.ltc_1.value=O.state.rectAreaLTC1,Q.ltc_2.value=O.state.rectAreaLTC2,Q.pointLights.value=O.state.point,Q.pointLightShadows.value=O.state.pointShadow,Q.hemisphereLights.value=O.state.hemi,Q.directionalShadowMap.value=O.state.directionalShadowMap,Q.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Q.spotShadowMap.value=O.state.spotShadowMap,Q.spotLightMatrix.value=O.state.spotLightMatrix,Q.spotLightMap.value=O.state.spotLightMap,Q.pointShadowMap.value=O.state.pointShadowMap,Q.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ue,W.uniformsList=null,Ue}function Ne(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=fs.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Ft(y,U){const V=Re.get(y);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function fn(y,U,V,W,O){U.isScene!==!0&&(U=st),R.resetTextureUnits();const se=U.fog,me=W.isMeshStandardMaterial?U.environment:null,xe=I===null?_.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Ji,Ee=(W.isMeshStandardMaterial?H:x).get(W.envMap||me),Oe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Ue=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Q=!!V.morphAttributes.position,be=!!V.morphAttributes.normal,He=!!V.morphAttributes.color;let Ye=ai;W.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(Ye=_.toneMapping);const ot=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ke=ot!==void 0?ot.length:0,Ie=Re.get(W),Nt=d.state.lights;if(de===!0&&(Te===!0||y!==M)){const kt=y===M&&W.id===E;ce.setState(W,y,kt)}let rt=!1;W.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Nt.state.version||Ie.outputColorSpace!==xe||O.isBatchedMesh&&Ie.batching===!1||!O.isBatchedMesh&&Ie.batching===!0||O.isBatchedMesh&&Ie.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ie.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ie.instancing===!1||!O.isInstancedMesh&&Ie.instancing===!0||O.isSkinnedMesh&&Ie.skinning===!1||!O.isSkinnedMesh&&Ie.skinning===!0||O.isInstancedMesh&&Ie.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ie.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ie.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ie.instancingMorph===!1&&O.morphTexture!==null||Ie.envMap!==Ee||W.fog===!0&&Ie.fog!==se||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ce.numPlanes||Ie.numIntersection!==ce.numIntersection)||Ie.vertexAlphas!==Oe||Ie.vertexTangents!==Ue||Ie.morphTargets!==Q||Ie.morphNormals!==be||Ie.morphColors!==He||Ie.toneMapping!==Ye||Ie.morphTargetsCount!==Ke)&&(rt=!0):(rt=!0,Ie.__version=W.version);let pn=Ie.currentProgram;rt===!0&&(pn=gt(W,U,O));let Si=!1,Zt=!1,rr=!1;const ft=pn.getUniforms(),tn=Ie.uniforms;if(we.useProgram(pn.program)&&(Si=!0,Zt=!0,rr=!0),W.id!==E&&(E=W.id,Zt=!0),Si||M!==y){we.buffers.depth.getReversed()?(ge.copy(y.projectionMatrix),pd(ge),md(ge),ft.setValue(L,"projectionMatrix",ge)):ft.setValue(L,"projectionMatrix",y.projectionMatrix),ft.setValue(L,"viewMatrix",y.matrixWorldInverse);const Xt=ft.map.cameraPosition;Xt!==void 0&&Xt.setValue(L,Be.setFromMatrixPosition(y.matrixWorld)),Xe.logarithmicDepthBuffer&&ft.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ft.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,Zt=!0,rr=!0)}if(O.isSkinnedMesh){ft.setOptional(L,O,"bindMatrix"),ft.setOptional(L,O,"bindMatrixInverse");const kt=O.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),ft.setValue(L,"boneTexture",kt.boneTexture,R))}O.isBatchedMesh&&(ft.setOptional(L,O,"batchingTexture"),ft.setValue(L,"batchingTexture",O._matricesTexture,R),ft.setOptional(L,O,"batchingIdTexture"),ft.setValue(L,"batchingIdTexture",O._indirectTexture,R),ft.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ft.setValue(L,"batchingColorTexture",O._colorsTexture,R));const nn=V.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&De.update(O,V,pn),(Zt||Ie.receiveShadow!==O.receiveShadow)&&(Ie.receiveShadow=O.receiveShadow,ft.setValue(L,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(tn.envMap.value=Ee,tn.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(tn.envMapIntensity.value=U.environmentIntensity),Zt&&(ft.setValue(L,"toneMappingExposure",_.toneMappingExposure),Ie.needsLights&&jt(tn,rr),se&&W.fog===!0&&pe.refreshFogUniforms(tn,se),pe.refreshMaterialUniforms(tn,W,$,le,d.state.transmissionRenderTarget[y.id]),fs.upload(L,Ne(Ie),tn,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(fs.upload(L,Ne(Ie),tn,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ft.setValue(L,"center",O.center),ft.setValue(L,"modelViewMatrix",O.modelViewMatrix),ft.setValue(L,"normalMatrix",O.normalMatrix),ft.setValue(L,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const kt=W.uniformsGroups;for(let Xt=0,zs=kt.length;Xt<zs;Xt++){const li=kt[Xt];b.update(li,pn),b.bind(li,pn)}}return pn}function jt(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Ze(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(y,U,V){Re.get(y.texture).__webglTexture=U,Re.get(y.depthTexture).__webglTexture=V;const W=Re.get(y);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Ge.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const V=Re.get(y);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,V=0){I=y,T=U,P=V;let W=!0,O=null,se=!1,me=!1;if(y){const Ee=Re.get(y);if(Ee.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(Ee.__webglFramebuffer===void 0)R.setupRenderTarget(y);else if(Ee.__hasExternalTextures)R.rebindTextures(y,Re.get(y.texture).__webglTexture,Re.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Q=y.depthTexture;if(Ee.__boundDepthTexture!==Q){if(Q!==null&&Re.has(Q)&&(y.width!==Q.image.width||y.height!==Q.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(y)}}const Oe=y.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(me=!0);const Ue=Re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?O=Ue[U][V]:O=Ue[U],se=!0):y.samples>0&&R.useMultisampledRTT(y)===!1?O=Re.get(y).__webglMultisampledFramebuffer:Array.isArray(Ue)?O=Ue[V]:O=Ue,D.copy(y.viewport),Y.copy(y.scissor),q=y.scissorTest}else D.copy(ue).multiplyScalar($).floor(),Y.copy(ke).multiplyScalar($).floor(),q=je;if(we.bindFramebuffer(L.FRAMEBUFFER,O)&&W&&we.drawBuffers(y,O),we.viewport(D),we.scissor(Y),we.setScissorTest(q),se){const Ee=Re.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ee.__webglTexture,V)}else if(me){const Ee=Re.get(y.texture),Oe=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ee.__webglTexture,V||0,Oe)}E=-1},this.readRenderTargetPixels=function(y,U,V,W,O,se,me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){we.bindFramebuffer(L.FRAMEBUFFER,xe);try{const Ee=y.texture,Oe=Ee.format,Ue=Ee.type;if(!Xe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-W&&V>=0&&V<=y.height-O&&L.readPixels(U,V,W,O,G.convert(Oe),G.convert(Ue),se)}finally{const Ee=I!==null?Re.get(I).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,Ee)}}},this.readRenderTargetPixelsAsync=async function(y,U,V,W,O,se,me){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){const Ee=y.texture,Oe=Ee.format,Ue=Ee.type;if(!Xe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-W&&V>=0&&V<=y.height-O){we.bindFramebuffer(L.FRAMEBUFFER,xe);const Q=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Q),L.bufferData(L.PIXEL_PACK_BUFFER,se.byteLength,L.STREAM_READ),L.readPixels(U,V,W,O,G.convert(Oe),G.convert(Ue),0);const be=I!==null?Re.get(I).__webglFramebuffer:null;we.bindFramebuffer(L.FRAMEBUFFER,be);const He=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await fd(L,He,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Q),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,se),L.deleteBuffer(Q),L.deleteSync(He),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,V=0){y.isTexture!==!0&&(Hi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const W=Math.pow(2,-V),O=Math.floor(y.image.width*W),se=Math.floor(y.image.height*W),me=U!==null?U.x:0,xe=U!==null?U.y:0;R.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,me,xe,O,se),we.unbindTexture()};const Pt=L.createFramebuffer(),An=L.createFramebuffer();this.copyTextureToTexture=function(y,U,V=null,W=null,O=0,se=null){y.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,y=arguments[1],U=arguments[2],se=arguments[3]||0,V=null),se===null&&(O!==0?(Hi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),se=O,O=0):se=0);let me,xe,Ee,Oe,Ue,Q,be,He,Ye;const ot=y.isCompressedTexture?y.mipmaps[se]:y.image;if(V!==null)me=V.max.x-V.min.x,xe=V.max.y-V.min.y,Ee=V.isBox3?V.max.z-V.min.z:1,Oe=V.min.x,Ue=V.min.y,Q=V.isBox3?V.min.z:0;else{const nn=Math.pow(2,-O);me=Math.floor(ot.width*nn),xe=Math.floor(ot.height*nn),y.isDataArrayTexture?Ee=ot.depth:y.isData3DTexture?Ee=Math.floor(ot.depth*nn):Ee=1,Oe=0,Ue=0,Q=0}W!==null?(be=W.x,He=W.y,Ye=W.z):(be=0,He=0,Ye=0);const Ke=G.convert(U.format),Ie=G.convert(U.type);let Nt;U.isData3DTexture?(R.setTexture3D(U,0),Nt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(R.setTexture2DArray(U,0),Nt=L.TEXTURE_2D_ARRAY):(R.setTexture2D(U,0),Nt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);const rt=L.getParameter(L.UNPACK_ROW_LENGTH),pn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Si=L.getParameter(L.UNPACK_SKIP_PIXELS),Zt=L.getParameter(L.UNPACK_SKIP_ROWS),rr=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ot.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ot.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Oe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ue),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Q);const ft=y.isDataArrayTexture||y.isData3DTexture,tn=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){const nn=Re.get(y),kt=Re.get(U),Xt=Re.get(nn.__renderTarget),zs=Re.get(kt.__renderTarget);we.bindFramebuffer(L.READ_FRAMEBUFFER,Xt.__webglFramebuffer),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,zs.__webglFramebuffer);for(let li=0;li<Ee;li++)ft&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(y).__webglTexture,O,Q+li),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Re.get(U).__webglTexture,se,Ye+li)),L.blitFramebuffer(Oe,Ue,me,xe,be,He,me,xe,L.DEPTH_BUFFER_BIT,L.NEAREST);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||y.isRenderTargetTexture||Re.has(y)){const nn=Re.get(y),kt=Re.get(U);we.bindFramebuffer(L.READ_FRAMEBUFFER,Pt),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,An);for(let Xt=0;Xt<Ee;Xt++)ft?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,nn.__webglTexture,O,Q+Xt):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,nn.__webglTexture,O),tn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,se,Ye+Xt):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,se),O!==0?L.blitFramebuffer(Oe,Ue,me,xe,be,He,me,xe,L.COLOR_BUFFER_BIT,L.NEAREST):tn?L.copyTexSubImage3D(Nt,se,be,He,Ye+Xt,Oe,Ue,me,xe):L.copyTexSubImage2D(Nt,se,be,He,Oe,Ue,me,xe);we.bindFramebuffer(L.READ_FRAMEBUFFER,null),we.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tn?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Nt,se,be,He,Ye,me,xe,Ee,Ke,Ie,ot.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Nt,se,be,He,Ye,me,xe,Ee,Ke,ot.data):L.texSubImage3D(Nt,se,be,He,Ye,me,xe,Ee,Ke,Ie,ot):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,se,be,He,me,xe,Ke,Ie,ot.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,se,be,He,ot.width,ot.height,Ke,ot.data):L.texSubImage2D(L.TEXTURE_2D,se,be,He,me,xe,Ke,Ie,ot);L.pixelStorei(L.UNPACK_ROW_LENGTH,rt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,pn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Si),L.pixelStorei(L.UNPACK_SKIP_ROWS,Zt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,rr),se===0&&U.generateMipmaps&&L.generateMipmap(Nt),we.unbindTexture()},this.copyTextureToTexture3D=function(y,U,V=null,W=null,O=0){return y.isTexture!==!0&&(Hi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,y=arguments[2],U=arguments[3],O=arguments[4]||0),Hi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(y,U,V,W,O)},this.initRenderTarget=function(y){Re.get(y).__webglFramebuffer===void 0&&R.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?R.setTextureCube(y,0):y.isData3DTexture?R.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?R.setTexture2DArray(y,0):R.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){T=0,P=0,I=null,we.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const Dg=[{id:"amplitude",type:"number",range:[0,1],category:"base"},{id:"binEnergy",type:"number",range:[0,1],category:"base"},{id:"frequencyHz",type:"number",range:[0,22050],category:"base"},{id:"normFreq",type:"number",range:[0,1],category:"base"},{id:"bass",type:"number",range:[0,1],category:"base"},{id:"mid",type:"number",range:[0,1],category:"base"},{id:"high",type:"number",range:[0,1],category:"base"},{id:"peakFreq",type:"number",range:[0,22050],category:"base"},{id:"pan",type:"number",range:[-1,1],category:"base"},{id:"time",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"base"},{id:"deltaTime",type:"number",range:[0,1],category:"base"},{id:"spectralCentroid",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlux",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlatness",type:"number",range:[0,1],category:"advanced"},{id:"inharmonicity",type:"number",range:[0,1],category:"advanced"},{id:"binMagnitude",type:"number",range:[0,1],category:"advanced"},{id:"binFlux",type:"number",range:[-1,1],category:"advanced"},{id:"binPhaseDeviation",type:"number",range:[0,1],category:"advanced"},{id:"binEnvelope",type:"number",range:[0,3],category:"advanced"},{id:"canvasWidthPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasWidthUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"audioLengthSec",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"}],Ig=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]}],Ng=Object.freeze({r:"red",g:"green",b:"blue",a:"opacity",backgroundRed:"red",backgroundGreen:"green",backgroundBlue:"blue"}),Ug=Object.freeze(new Set(["backgroundRed","backgroundGreen","backgroundBlue"])),Ls=Object.freeze(["spawnedParticles","allParticles","background","camera"]),Dc=Object.freeze(["spawnedOnly","allLivingFrame"]),So=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),Ic=Object.freeze(["always",">",">=","<","<=","==","!="]),Ds=Object.freeze({version:1,entries:Object.freeze(Dg.map(n=>Object.freeze({...n})))}),Is=Object.freeze({version:1,entries:Object.freeze(Ig.map(n=>Object.freeze({...n})))});new Map(Ds.entries.map(n=>[n.id,n]));const Fg=new Map(Is.entries.map(n=>[n.id,n]));function Nc(){return Ds}function Og(){return Is}function Bg(n){return!n||n.type==="always"||n.operator==="always"}function zg(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function Nl(n,e){if(typeof n!="string")return null;const t=n.trim();if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:]+$/.test(t))return"Expression contains unsupported characters.";if(!zg(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","PI","E","true","false"]),r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of r)if(!i.has(s))return`Expression references unknown identifier: ${s}`;return null}function Uc(n){return typeof n!="string"?n:Ng[n]||n}function Eo(n){return Ls.includes(n==null?void 0:n.target)?n.target:(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function kg(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:Ls).includes(e)}function Hg(n,e={input:Ds,output:Is}){var f,h,m,v,g;const t=[],i=[],r=[],s=new Map((((f=e.input)==null?void 0:f.entries)??[]).map(p=>[p.id,p])),a=new Map((((h=e.output)==null?void 0:h.entries)??[]).map(p=>[p.id,p]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};Dc.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=Eo(n);if(Ls.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(m=n.condition)!=null&&m.operator&&!Ic.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((v=n.condition)==null?void 0:v.expression)!==void 0){const p=Nl(n.condition.expression,s);p&&t.push(`Condition expression invalid: ${p}`)}const l=(g=n.condition)==null?void 0:g.input;l&&!s.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],u=new Map;return c.forEach((p,d)=>{const w=Uc(p==null?void 0:p.output);if(!w||!a.has(w)){t.push(`Unknown action output at index ${d}: ${String(w)}`);return}const A=a.get(w);if(kg(A,o)||t.push(`Output ${w} is not valid for target ${o} at index ${d}`),p!=null&&p.operator&&!So.includes(p.operator)&&t.push(`Unknown action operator at index ${d}: ${String(p.operator)}`),A.type==="enum"&&(p==null?void 0:p.value)!==void 0&&!A.values.includes(p.value)&&t.push(`Invalid enum value for ${w} at index ${d}: ${String(p.value)}. Allowed: ${A.values.join("|")}`),(p==null?void 0:p.operator)==="set"){const _=u.get(w);_!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:w,overriddenActionIndex:_,winningActionIndex:d,resolution:"latter-executes"}),i.push(`Contradiction on ${w}: action ${d} overrides action ${_}.`)),u.set(w,d)}if(p!=null&&p.input&&!s.has(p.input)&&t.push(`Unknown action input at index ${d}: ${p.input}`),(p==null?void 0:p.expression)!==void 0){const _=Nl(p.expression,s);_&&t.push(`Action expression invalid at index ${d}: ${_}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function Vg(n){const e=Array.isArray(n)?n:[],t=new Map,i=new Set,r=[];return e.forEach((a,o)=>{if(!(a!=null&&a.enabled))return;const l=a.scope||"spawnedOnly",c=a.id||`rule-${o}`,u=Array.isArray(a.actions)?a.actions:[];Bg(a.condition)&&u.forEach(h=>{if((h==null?void 0:h.operator)!=="set"||!Fg.has(h==null?void 0:h.output))return;const m=Eo(a),v=`${m}:${l}:${h.output}`,g=t.get(v);g&&(i.add(g.ruleId),i.add(c),r.push({color:"red",type:"crossRuleConflict",scope:l,target:m,output:h.output,overriddenRuleId:g.ruleId,winningRuleId:c,resolution:"latter-executes"})),t.set(v,{ruleId:c,index:o})})}),{rules:e.map((a,o)=>{const l=(a==null?void 0:a.id)||`rule-${o}`;return{...a,uiState:i.has(l)?"red":"normal"}}),notes:r,redRuleIds:[...i]}}function Fc(n,e={input:Ds,output:Is}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((s,a)=>{const o={id:typeof(s==null?void 0:s.id)=="string"&&s.id.trim()?s.id.trim():`rule-${a}`,group:typeof(s==null?void 0:s.group)=="string"?s.group:"",subgroup:typeof(s==null?void 0:s.subgroup)=="string"?s.subgroup:"",enabled:(s==null?void 0:s.enabled)!==!1,target:Eo(s),scope:Dc.includes(s==null?void 0:s.scope)?s.scope:"spawnedOnly",condition:s!=null&&s.condition&&typeof s.condition=="object"?{...s.condition}:{operator:"always"},actions:Array.isArray(s==null?void 0:s.actions)?s.actions.map(c=>({...c})):[],order:Number.isFinite(s==null?void 0:s.order)?Number(s.order):a};o.condition.operator||(o.condition.operator="always"),Ic.includes(o.condition.operator)||(o.condition.operator="always"),o.scope=o.target==="spawnedParticles"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(c=>c&&typeof c=="object").map(c=>{const u=c.output;return Ug.has(u)&&!(s!=null&&s.target)&&(o.target="background",o.scope="allLivingFrame"),{operator:So.includes(c.operator)?c.operator:"set",output:Uc(u),value:c.value,input:c.input,expression:c.expression}});const l=Hg(o,e);l.ok?i.push(o):r.push({id:o.id,index:a,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const Ns="http://localhost:8000",Oc="seesound_user_defaults_v4",Bc="seesound_disabled_v4",Ss=1,Gg={logCompilerStatus:!1,logCompilerTiming:!1},Ul=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:Ss}),Fl=[{id:"inputGain",label:"Input"},{id:"geometry",label:"Geometry"},{id:"mixing",label:"Mixing"}],yr=[{key:"inputGain",group:"inputGain",label:"Input Gain",min:0,max:3,step:.01,default:1,unit:"×",desc:"Scales every amplitude value before processing. 1× = unchanged.",canDisable:!1},{key:"amplitudeThreshold",group:"inputGain",label:"Amplitude Threshold",min:-96,max:0,step:1,default:-48,unit:"dB",desc:"Hard noise gate: any bin quieter than this level is hidden.",canDisable:!0},{key:"brightnessFloor",group:"inputGain",label:"Brightness Floor",min:0,max:1,step:.01,default:.2,unit:"",desc:"Minimum particle brightness when signal is present.",canDisable:!1},{key:"amplitudeToBrightness",group:"inputGain",label:"Amp→Brightness",min:0,max:4,step:.01,default:1.25,unit:"×",desc:"How strongly audio amplitude increases particle brightness.",canDisable:!1},{key:"defaultParticleSize",group:"geometry",label:"Particle Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"freqDepthEffect",group:"geometry",label:"Bass→Larger",min:0,max:100,step:1,default:100,unit:"%",desc:"Bass frequencies draw as larger particles. 0% = all bins same size.",canDisable:!0,neutralValue:0},{key:"zDepth",group:"geometry",label:"Z-Axis Depth",min:0,max:100,step:1,default:0,unit:"%",desc:"Recedes higher-frequency particles into the depth axis.",canDisable:!0},{key:"frequencySpread",group:"geometry",label:"Frequency Spread",min:.6,max:2.4,step:.01,default:1.35,unit:"γ",desc:"Vertical remap exponent on log₂ frequency: >1 compresses bass spacing and opens treble spacing.",canDisable:!1},{key:"lowFrequencyCutoff",group:"geometry",label:"Low Freq Cutoff",min:16,max:2e4,step:1,default:16,unit:"Hz",desc:"Only process bins at or above this frequency. This does not alter any other mapping behavior.",canDisable:!1},{key:"highFrequencyCutoff",group:"geometry",label:"High Freq Cutoff",min:16,max:2e4,step:1,default:2e4,unit:"Hz",desc:"Only process bins at or below this frequency. This does not alter any other mapping behavior.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"defaultBackgroundHue",group:"geometry",label:"Default Background Hue",min:0,max:360,step:1,default:0,unit:"deg",desc:"Base background hue used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundSaturation",group:"geometry",label:"Default Background Saturation",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background saturation used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundLightness",group:"geometry",label:"Default Background Lightness",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background lightness used before background rules are applied.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Max Particle Capacity",min:4096,max:8e6,step:1024,default:262144,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particleRenderPercent",group:"geometry",label:"Particle Render %",min:1,max:100,step:1,default:100,unit:"%",desc:"Bin thinning: only this percentage of FFT bins can spawn particles each frame (evenly distributed by bin index).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Alpha",value:"alpha"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Ortho YZ",value:"orthoYZ"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]}];function zc(){try{return JSON.parse(localStorage.getItem(Oc)||"{}")}catch{return{}}}function Wg(){try{return new Set(JSON.parse(localStorage.getItem(Bc)||"[]"))}catch{return new Set}}function Cr(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=Fc(i);return t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:Ul.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):Ul.ruleSchemaVersion,r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function Xg(){const n=Cr(zc()),e={};for(const t of yr)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.tonicHz=n.tonicHz??261.63,e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e}const Me=Xg(),en=Wg(),oo=new Set;function Us(n){return oo.add(n),()=>oo.delete(n)}function Mr(n,e){for(const t of oo)t(Me,n,e)}function vn(n,e){Me[n]=e,Mr(n,e)}function Fs(n){const e=Cr(n);for(const[t,i]of Object.entries(e))Me[t]=i,Mr(t,i);Mr("*",e)}function qg(){for(const n of yr)Me[n.key]=n.default;Me.tonicHz=261.63,Me.ruleBlocks=[],Me.ruleEngineEnabled=!0,Me.ruleSchemaVersion=Ss,Mr("*",null)}function Es(n,e){try{const t=zc();t[n]=e,localStorage.setItem(Oc,JSON.stringify(t))}catch{}}function $g(n){en.has(n)?en.delete(n):en.add(n);try{localStorage.setItem(Bc,JSON.stringify([...en]))}catch{}Mr("disabled",n)}function To(){const n=Cr(Me);return{...Me,...n,_disabled:[...en]}}async function kc(){try{const n=await fetch(`${Ns}/api/presets`,{cache:"no-store"});return n.ok?(await n.json()).presets??[]:[]}catch{return[]}}async function Hc(n,e){const t=Cr(e);return fetch(`${Ns}/api/presets`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,params:t})}).then(i=>i.json())}async function Vc(n){const e=await fetch(`${Ns}/api/presets/${encodeURIComponent(n)}`,{cache:"no-store"});if(!e.ok)return null;const t=await e.json();return t!=null&&t.params?{...t,params:Cr(t.params)}:t}async function Gc(n){return fetch(`${Ns}/api/presets/${encodeURIComponent(n)}`,{method:"DELETE"}).then(e=>e.json())}const Yg=1;function jg(n){let e="";for(let i=0;i<n.length;i+=32768){const r=n.subarray(i,i+32768);e+=String.fromCharCode(...r)}return btoa(e)}function Zg(n){const e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}async function Kg(n){const e=new Uint8Array(await n.arrayBuffer());return`data:${n.type||"application/octet-stream"};base64,${jg(e)}`}function Jg(n,e="audio.bin"){if(typeof n!="string"||!n.startsWith("data:"))throw new Error("Invalid embedded audio payload.");const t=n.indexOf(",");if(t<0)throw new Error("Malformed data URL.");const i=n.slice(0,t),r=n.slice(t+1),s=i.match(/^data:([^;]+);base64$/),a=(s==null?void 0:s[1])||"application/octet-stream",o=Zg(r);return new File([o],e,{type:a})}function Qg({params:n,presetName:e="",audioDataUrl:t="",audioFileName:i=""}){return{schemaVersion:Yg,createdAt:new Date().toISOString(),presetName:String(e||""),params:n&&typeof n=="object"?n:{},audio:t?{fileName:i||"audio.bin",dataUrl:t}:null}}function e_(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return e}function t_(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function K(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:r==="title"?i.title=s:i.setAttribute(r,s);return i}function mi(n,e){return n.isDropdown||n.isToggle||Number.isInteger(n.step)?String(e):Number(e).toFixed(2)}let ur=null;function Ao(n){const e=K("button","cp-info-btn",{text:"ⓘ","aria-label":`Info: ${n.label}`});let t;return n.isDropdown?t=n.dropdownGroups?n.dropdownGroups.flatMap(i=>i.options.map(r=>r.label)).join(", "):(n.dropdownOptions??[]).map(i=>i.label).join(", "):n.isToggle?t=(n.toggleLabels??["Off","On"]).join(" / "):t=`${n.min}–${n.max}${n.unit?" "+n.unit:""}`,e.addEventListener("click",i=>{if(i.stopPropagation(),ur&&(ur.remove(),ur=null),e.classList.contains("active")){e.classList.remove("active");return}const r=K("div","cp-info-popup");r.innerHTML=`
      <div class="cp-info-title">${n.label}</div>
      <div class="cp-info-desc">${n.desc}</div>
      <div class="cp-info-meta">
        ${n.isToggle?"Options":"Range"}: ${t}
        ${!n.isToggle&&n.neutralValue!==void 0?` · Neutral: ${n.neutralValue}`:""}
        ${n.isToggle?"":` · Default: ${n.default}${n.unit?" "+n.unit:""}`}
      </div>`;const s=e.getBoundingClientRect();r.style.top=`${s.bottom+6}px`,r.style.left=`${Math.min(s.left,window.innerWidth-280)}px`,document.body.appendChild(r),e.classList.add("active"),ur=r,r.addEventListener("click",a=>a.stopPropagation()),requestAnimationFrame(()=>{const a=()=>{r.remove(),e.classList.remove("active"),ur=null,document.removeEventListener("click",a),document.removeEventListener("keydown",o)},o=l=>{l.key==="Escape"&&a()};document.addEventListener("click",a),document.addEventListener("keydown",o)})}),e}function wo(n,e){const t=K("button","cp-bypass-btn"),i=()=>{const r=en.has(n.key);t.textContent=r?"○":"●",t.title=r?`${n.label} is bypassed — click to enable`:`Click to bypass ${n.label}`,e.classList.toggle("cp-row-disabled",r)};return i(),t.addEventListener("click",()=>{$g(n.key),i(),n_(n)}),t}const ln=new Map;function n_(n,e){var t;(t=ln.get(n.key))==null||t(Me[n.key])}function i_(n){const e=K("div","cp-row");e.classList.toggle("cp-row-disabled",en.has(n.key)),n.canDisable&&e.appendChild(wo(n,e));const t=K("label","cp-label",{text:n.label,title:n.desc});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=K("div","cp-slider-wrap"),r=K("input","cp-slider",{id:`cp-${n.key}`,type:"range",min:n.min,max:n.max,step:n.step,value:Me[n.key]}),s=K("input","cp-val-input",{type:"number",step:n.step,value:mi(n,Me[n.key]),title:`Current value${n.unit?" ("+n.unit+")":""}`}),a=(()=>{try{return JSON.parse(localStorage.getItem("seesound_user_defaults_v3")||"{}")}catch{return{}}})(),o=K("input","cp-def-input",{type:"number",step:n.step,value:mi(n,a[n.key]??n.default),title:"Saved default — press Enter to save"}),l=K("button","cp-star-btn",{text:"★",title:"Save current value as session default"});return r.addEventListener("input",()=>{const c=parseFloat(r.value);vn(n.key,c),s.value=mi(n,c),updateTrack(c)}),s.addEventListener("change",()=>{const c=parseFloat(s.value);isNaN(c)||(vn(n.key,c),r.value=String(Math.min(n.max,Math.max(n.min,c))),updateTrack(c))}),s.addEventListener("keydown",c=>{c.key==="Escape"&&(s.value=mi(n,Me[n.key]))}),o.addEventListener("keydown",c=>{if(c.key==="Enter"){const u=parseFloat(o.value);isNaN(u)||Es(n.key,u),o.blur()}c.key==="Escape"&&o.blur()}),o.addEventListener("blur",()=>{o.value=mi(n,parseFloat(o.value)||(a[n.key]??n.default))}),l.addEventListener("click",()=>{Es(n.key,Me[n.key]),o.value=mi(n,Me[n.key])}),ln.set(n.key,c=>{r.value=String(Math.min(n.max,Math.max(n.min,c))),s.value=mi(n,c),updateTrack(c),e.classList.toggle("cp-row-disabled",en.has(n.key))}),i.append(r,s,o,l,Ao(n)),e.appendChild(i),e}function r_(n){const e=K("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",en.has(n.key)),n.canDisable&&e.appendChild(wo(n,e));const t=K("label","cp-label",{text:n.label});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=K("select","cp-dropdown",{id:`cp-${n.key}`});if(n.dropdownGroups)for(const s of n.dropdownGroups){const a=K("optgroup","",{label:s.label});for(const o of s.options){const l=K("option","",{value:o.value,text:o.label});String(o.value)===String(Me[n.key])&&(l.selected=!0),a.appendChild(l)}i.appendChild(a)}else for(const s of n.dropdownOptions??[]){const a=K("option","",{value:s.value,text:s.label});String(s.value)===String(Me[n.key])&&(a.selected=!0),i.appendChild(a)}i.addEventListener("change",()=>{const s=i.value,a=Number(s);vn(n.key,s!==""&&!isNaN(a)?a:s)});const r=K("button","cp-star-btn",{text:"★",title:"Save as default"});return r.addEventListener("click",()=>Es(n.key,Me[n.key])),ln.set(n.key,s=>{i.value=String(s),e.classList.toggle("cp-row-disabled",en.has(n.key))}),e.append(i,r,Ao(n)),e}function s_(n){const e=K("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",en.has(n.key)),n.canDisable&&e.appendChild(wo(n,e));const t=K("label","cp-label",{text:n.label,title:n.desc});e.appendChild(t);const i=n.toggleLabels??["Off","On"],r=K("div","cp-seg-group"),s=Number(Me[n.key]),a=i.map((l,c)=>{const u=K("button","cp-seg-btn",{text:l});return s===c&&u.classList.add("active"),u.addEventListener("click",()=>{en.has(n.key)||(vn(n.key,c),a.forEach((f,h)=>f.classList.toggle("active",h===c)))}),u});r.append(...a);const o=K("button","cp-star-btn",{text:"★",title:"Save as default"});return o.addEventListener("click",()=>Es(n.key,Me[n.key])),ln.set(n.key,l=>{const c=Number(l);a.forEach((u,f)=>u.classList.toggle("active",f===c)),e.classList.toggle("cp-row-disabled",en.has(n.key))}),e.append(r,o,Ao(n)),e}function a_(){const n=K("div","cp-preset-bar"),e="rule__";function t(){const _=document.activeElement;_ instanceof HTMLElement&&_.closest(".cp-body")&&_.blur()}const i=K("div","cp-preset-row"),r=K("span","cp-preset-label",{text:"PROJECT"}),s=K("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save project (Ctrl+S / Ctrl+Shift+S)"}),a=K("button","cp-preset-btn",{text:"🗁",title:"Load project"}),o=K("input","",{type:"file",accept:".json,.seesound-project,.seesound-project.json"});o.style.display="none",i.append(r,s,a);const l=K("div","cp-preset-row");K("span","cp-preset-label",{text:"Preset"});const c=K("select","cp-preset-sel"),u=K("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset"}),f=K("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});l.append(c,u,f);const h=K("div","cp-preset-row"),m=K("input","cp-preset-name",{type:"text",placeholder:"preset_title"}),v=K("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save current rule preset (Ctrl+P)"});h.append(m,v),n.append(i,l,h,o);let g=[];async function p(){var E;t();const _=m.value.trim(),C=String(c.value||"").trim(),T=_||C;if(!T)return alert("Enter or select a preset name first."),m.focus(),!1;if(!_&&C&&(m.value=C),g.includes(T)&&!confirm(`Overwrite preset "${T}"?`))return!1;const P=((E=Qt==null?void 0:Qt.serialize)==null?void 0:E.call(Qt))??(Array.isArray(Me.ruleBlocks)?Me.ruleBlocks:[]),I=To();return I.ruleBlocks=P,await Hc(T,I),await d(),c.value=T,!0}async function d(){g=(await kc()).filter(T=>!String(T||"").startsWith(e));const C=c.value;c.innerHTML='<option value="">select preset</option>';for(const T of g){const P=K("option","",{value:T,text:T});c.appendChild(P)}C&&g.includes(C)&&(c.value=C)}c.addEventListener("change",()=>{c.value&&(m.value=c.value)}),u.addEventListener("click",async()=>{var C;if(!c.value)return;const _=await Vc(c.value);if(_!=null&&_.params){Fs(_.params);for(const T of yr)(C=ln.get(T.key))==null||C(Me[T.key]);Qt==null||Qt.replaceFromRuleBlocks(Array.isArray(Me.ruleBlocks)?Me.ruleBlocks:[])}}),f.addEventListener("click",async()=>{c.value&&confirm(`Delete preset "${c.value}"?`)&&(await Gc(c.value),await d(),m.value="")}),v.addEventListener("click",async()=>{await p()}),s.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:project-save-request"))}),a.addEventListener("click",()=>{o.click()}),o.addEventListener("change",async _=>{var T;const C=(T=_.target.files)==null?void 0:T[0];if(C)try{const P=await C.text(),I=e_(P);window.dispatchEvent(new CustomEvent("seesound:project-load-request",{detail:{payload:I,fileName:C.name}}))}catch(P){console.warn("[Project] load parse failed:",P),alert("Failed to load project file.")}finally{o.value=""}}),m.addEventListener("keydown",_=>{_.key==="Enter"&&v.click()});const w=window.__seesoundShortcutAbort;w&&typeof w.abort=="function"&&w.abort();const A=new AbortController;return window.__seesoundShortcutAbort=A,document.addEventListener("keydown",async _=>{if(_.defaultPrevented||_.altKey||!(_.ctrlKey||_.metaKey))return;const C=String(_.key||"").toLowerCase();if(C==="s"){_.preventDefault(),_.stopPropagation(),window.dispatchEvent(new CustomEvent("seesound:project-save-request"));return}C==="p"&&!_.shiftKey&&(_.preventDefault(),_.stopPropagation(),await p())},{signal:A.signal}),d(),n}function o_(){const n=K("div","cp-canvas-size"),e=K("div","cp-canvas-size-title",{text:"Canvas Size"}),t=K("div","cp-canvas-size-row"),i=K("div","cp-canvas-size-row"),r=K("label","cp-canvas-size-label",{text:"↔"}),s=K("input","cp-canvas-size-input",{type:"number",step:"1",min:"160",value:String(Math.max(160,Number(Me.canvasWidth??0)||160))}),a=K("label","cp-canvas-size-label",{text:"↕"}),o=K("input","cp-canvas-size-input",{type:"number",step:"1",min:"120",value:String(Math.max(120,Number(Me.canvasHeight??0)||120))}),l=K("label","cp-canvas-size-label",{text:"%"}),c=K("input","cp-canvas-size-input",{type:"number",step:"1",min:"5",max:"400",value:String(Math.max(5,Math.min(400,Math.floor(Number(Me.canvasScale??100)||100))))}),u=K("button","cp-preset-btn cp-rule-mini",{text:"Apply"}),f=K("div","cp-canvas-size-label",{text:"BG HSL"}),h=K("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"360",value:String(Math.max(0,Math.min(360,Math.floor(Number(Me.defaultBackgroundHue??0)||0))))}),m=K("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"100",value:String(Math.max(0,Math.min(100,Math.floor(Number(Me.defaultBackgroundSaturation??0)||0))))}),v=K("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"100",value:String(Math.max(0,Math.min(100,Math.floor(Number(Me.defaultBackgroundLightness??0)||0))))}),g={w:0,h:0,s:100};function p(_,C,T,P){const I=Number(_);return Number.isFinite(I)?Math.max(C,Math.min(T,Math.floor(I))):P}function d(){const _=Number(Me.canvasWidth),C=Number(Me.canvasHeight),T=Number(Me.canvasScale),P=Number.isFinite(_)&&_>0?_:g.w,I=Number.isFinite(C)&&C>0?C:g.h,E=Number.isFinite(T)&&T>0?T:g.s;document.activeElement!==s&&(s.value=String(Math.max(160,Math.floor(P||160)))),document.activeElement!==o&&(o.value=String(Math.max(120,Math.floor(I||120)))),document.activeElement!==c&&(c.value=String(Math.max(5,Math.min(400,Math.floor(E||100))))),document.activeElement!==h&&(h.value=String(p(Me.defaultBackgroundHue,0,360,0))),document.activeElement!==m&&(m.value=String(p(Me.defaultBackgroundSaturation,0,100,0))),document.activeElement!==v&&(v.value=String(p(Me.defaultBackgroundLightness,0,100,0)))}function w(){const _=Math.max(160,Math.floor(Number(s.value)||160)),C=Math.max(120,Math.floor(Number(o.value)||120)),T=Math.max(5,Math.min(400,Math.floor(Number(c.value)||100)));vn("canvasWidth",_),vn("canvasHeight",C),vn("canvasScale",T)}function A(){vn("defaultBackgroundHue",p(h.value,0,360,0)),vn("defaultBackgroundSaturation",p(m.value,0,100,0)),vn("defaultBackgroundLightness",p(v.value,0,100,0))}return s.addEventListener("change",w),o.addEventListener("change",w),s.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),w(),s.blur())}),o.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),w(),o.blur())}),c.addEventListener("change",w),c.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),w(),c.blur())}),h.addEventListener("change",A),m.addEventListener("change",A),v.addEventListener("change",A),h.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),A(),h.blur())}),m.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),A(),m.blur())}),v.addEventListener("keydown",_=>{_.key==="Enter"&&(_.preventDefault(),A(),v.blur())}),u.addEventListener("click",w),ln.set("canvasWidth",()=>d()),ln.set("canvasHeight",()=>d()),ln.set("canvasScale",()=>d()),ln.set("defaultBackgroundHue",()=>d()),ln.set("defaultBackgroundSaturation",()=>d()),ln.set("defaultBackgroundLightness",()=>d()),Us((_,C)=>{(C==="canvasWidth"||C==="canvasHeight"||C==="canvasScale"||C==="defaultBackgroundHue"||C==="defaultBackgroundSaturation"||C==="defaultBackgroundLightness")&&d()}),window.addEventListener("seesound:canvas-size",_=>{var C,T,P;g.w=Number((C=_==null?void 0:_.detail)==null?void 0:C.w)||g.w,g.h=Number((T=_==null?void 0:_.detail)==null?void 0:T.h)||g.h,g.s=Number((P=_==null?void 0:_.detail)==null?void 0:P.s)||g.s,d()}),t.append(r,s,a,o,l,c,u),i.append(f,h,m,v),n.append(e,t,i),d(),n}function l_(n,e,t){const i=K("div",`cp-group${t?" cp-open":""}`),r=K("button","cp-group-header");r.innerHTML=`<span class="cp-group-chevron">${t?"▾":"▸"}</span><span>${n.label}</span><span class="cp-group-count">${e.length}</span>`;const s=K("div","cp-group-body");s.style.display=t?"":"none";for(const o of e)o.isDropdown?s.appendChild(r_(o)):o.isToggle?s.appendChild(s_(o)):s.appendChild(i_(o));let a=t;return r.setAttribute("aria-expanded",String(a)),r.addEventListener("click",()=>{a=!a,i.classList.toggle("cp-open",a),s.style.display=a?"":"none",r.setAttribute("aria-expanded",String(a));const o=r.querySelector(".cp-group-chevron");o&&(o.textContent=a?"▾":"▸")}),i.append(r,s),i}const Pn=Nc().entries.map(n=>n.id),Wc=Og().entries,c_=Wc.map(n=>n.id),u_=["always",">",">=","<","<=","==","!="],Xc=[...Ls],qc=[...So],d_={spawnedParticles:"spawned particles",allParticles:"all particles",background:"background",camera:"camera"};let Qt=null;function pr(n=0){return`rule-${Math.max(1,Math.floor(n)+1)}`}function $c(){return`rule-ui-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function ma(n=0){return{id:pr(n),group:"",subgroup:"",enabled:!0,target:"spawnedParticles",condition:{operator:"always"},actions:[{operator:"set",output:"opacity",value:1}],strength:1,invert:!1,order:n}}function Yc(n){return n==="shapeType"}function h_(n){const e=typeof(n==null?void 0:n.target)=="string"?n.target:"";return Xc.includes(e)?e:(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function lo(n){return Wc.filter(e=>!Array.isArray(e.targets)||e.targets.includes(n)).map(e=>e.id)}function ns(n){const e=lo(n.target);if(e.length===0){n.actionOutput="opacity";return}e.includes(n.actionOutput)||(n.actionOutput=e[0])}function f_(n){const e=typeof n=="string"?n.trim():"";if(!e)return null;const t=e.match(/^\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)\s*\*\s*(-?\d+(?:\.\d+)?)$/);if(t){const s=t[1],a=Number(t[2]);if(Pn.includes(s)&&Number.isFinite(a))return{input:s,strength:Math.abs(a),invert:a<0}}const i=e.match(/^\(?\s*(-?\d+(?:\.\d+)?)\s*\)?\s*\/\s*max\(\s*1e-6\s*,\s*\(\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)\s*\)$/);if(i){const s=Number(i[1]),a=i[2];if(Pn.includes(a)&&Number.isFinite(s))return{input:a,strength:Math.abs(s),invert:!0}}const r=e.match(/^\(?\s*([A-Za-z_][A-Za-z0-9_]*)\s*\)?$/);if(r){const s=r[1];if(Pn.includes(s))return{input:s,strength:1,invert:!1}}return null}function p_(n,e,t){n.innerHTML="";for(const i of e){const r=K("option","",{value:i.value,text:i.label});String(i.value)===String(t)&&(r.selected=!0),n.appendChild(r)}}function ga(n,e){const t={operator:n.conditionOp};n.conditionOp!=="always"&&(t.input=n.conditionInput,n.conditionRhsMode==="input"?t.valueInput=n.conditionRhsInput:t.value=Number(n.conditionRhsLiteral));const i={operator:n.actionOp,output:n.actionOutput},r=Number.isFinite(Number(n.strength))?Number(n.strength):1;if(Yc(n.actionOutput))i.value=n.actionLiteralShape==="circle"?"circle":"square";else if(n.actionValueMode==="expression")i.expression=n.actionExpression||"0";else if(n.actionValueMode==="input"){const s=n.actionInput||"amplitude";!n.invert&&r===1&&n.actionOp==="set"?i.input=s:n.invert?i.expression=`${r} / max(1e-6, (${s}))`:i.expression=`(${s}) * ${r}`}else{const s=Number(n.actionLiteral);Number.isFinite(s)?i.value=s:i.value=0}return{id:n.id,group:n.group,subgroup:n.subgroup,enabled:!!n.enabled,target:n.target,condition:t,actions:[i],strength:r,invert:!!n.invert,order:e}}function Bi(n,e){var u,f,h,m,v;const t=Array.isArray(n.actions)&&n.actions[0]?n.actions[0]:{operator:"set",output:"opacity",value:1},i=Yc(t.output),r=typeof t.expression=="string"&&t.expression.trim().length>0,s=typeof t.input=="string"&&t.input.trim().length>0,a=r?f_(t.expression):null,o=(a==null?void 0:a.input)||(Pn.includes(t.input)?t.input:"amplitude"),l=a?a.strength:Number.isFinite(Number(n.strength))?Number(n.strength):1,c=a?a.invert:!!n.invert;return{_uid:typeof n._uid=="string"&&n._uid?n._uid:$c(),id:typeof n.id=="string"&&n.id.trim()?n.id.trim():pr(e),group:typeof n.group=="string"?n.group:"",subgroup:typeof n.subgroup=="string"?n.subgroup:"",enabled:n.enabled!==!1,target:h_(n),conditionOp:((u=n.condition)==null?void 0:u.operator)||"always",conditionInput:Pn.includes((f=n.condition)==null?void 0:f.input)?n.condition.input:"amplitude",conditionRhsMode:(h=n.condition)!=null&&h.valueInput?"input":"literal",conditionRhsInput:Pn.includes((m=n.condition)==null?void 0:m.valueInput)?n.condition.valueInput:"amplitude",conditionRhsLiteral:Number.isFinite(Number((v=n.condition)==null?void 0:v.value))?Number(n.condition.value):.5,actionOutput:c_.includes(t.output)?t.output:"opacity",actionOp:qc.includes(t.operator)?t.operator:"set",actionValueMode:i?"shape":a?"input":r?"expression":s?"input":"literal",actionInput:o,actionLiteral:Number.isFinite(Number(t.value))?Number(t.value):1,actionLiteralShape:t.value==="circle"?"circle":"square",actionExpression:r?t.expression:"",strength:l,invert:c,uiState:n.uiState||"normal",order:Number.isFinite(n.order)?Number(n.order):e}}function m_(n){const e=n.conditionOp==="always"?"always":`${n.conditionInput} ${n.conditionOp} ${n.conditionRhsMode==="input"?n.conditionRhsInput:Number(n.conditionRhsLiteral).toFixed(2)}`;let t;return n.actionOutput==="shapeType"?t=n.actionLiteralShape:n.actionValueMode==="expression"?t=n.actionExpression||"0":n.actionValueMode==="input"?n.invert?t=`${Number(n.strength).toFixed(2)} / ${n.actionInput}`:t=`${n.actionInput} × ${Number(n.strength).toFixed(2)}`:t=`${Number(n.actionLiteral).toFixed(2)}`,`When ${e}, ${n.actionOp} ${n.actionOutput} using ${t}`}function wn(n,e,t="cp-rule-input"){const i=K("select",t);for(const r of n){const s=K("option","",{value:r.value,text:r.label});String(r.value)===String(e)&&(s.selected=!0),i.appendChild(s)}return i}function _a(n,e="0.01",t="cp-rule-input cp-rule-num"){return K("input",t,{type:"number",value:String(n),step:e})}function g_(n){if(!n)return null;const e=K("div","cp-rule-section"),t=K("div","cp-rule-header"),i=K("span","cp-rule-title",{text:"Rule Builder"}),r=K("span","cp-rule-status cp-rule-status-stale",{text:"stale"});t.append(i,r);const s=K("div","cp-rule-error"),a=K("div","cp-rule-rows"),o=K("div","cp-rule-preset"),l=K("select","cp-preset-sel"),c=K("input","cp-preset-name",{type:"text",placeholder:"single_rule_preset"}),u=K("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save selected rule as preset"}),f=K("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset (append)"}),h=K("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});o.append(l,f,h,c,u);const m=K("div","cp-rule-actions"),v=K("button","cp-preset-btn cp-rule-add",{text:"+"});m.appendChild(v),e.append(t,s,o,a,m),n.appendChild(e);let g=(Array.isArray(Me.ruleBlocks)?Me.ruleBlocks:[]).map(Bi),p=!1,d=-1,w=[],A="",_=-1;const C=new Map,T=[],P=new Set,I=new Set,E=new Set,M=new Set;let D="",Y=null;const q="rule__";let k=[];function Z(){const S=document.activeElement;S instanceof HTMLElement&&S.closest(".cp-rule-section")&&S.blur()}function j(S){const F=new Set(g.map(b=>String(b.id||"").trim()).filter(Boolean)),G=String(S||"").trim()||pr(g.length);if(!F.has(G))return G;let J=2;for(;F.has(`${G}-${J}`);)J++;return`${G}-${J}`}function le(S){if(S<0||S>=g.length)return;const F=g[S],G={...F,_uid:$c(),id:j(F.id||pr(g.length)),uiState:"normal"};g.splice(S+1,0,G),oe()}function $(S){const F=(S==null?void 0:S.compileStatus)||"stale";r.textContent=F,r.className=`cp-rule-status cp-rule-status-${F.replace(/[^a-z0-9-]/gi,"-")}`,s.textContent=S!=null&&S.compileError?`Compile error: ${S.compileError}${S.compileLine?` (line ${S.compileLine})`:""}`:Array.isArray(S==null?void 0:S.rejected)&&S.rejected.length>0?`Rejected rules: ${S.rejected.map(G=>G.id).join(", ")}`:""}function oe(){const S=new Set(g.map(b=>b._uid));for(const b of[...M])S.has(b)||M.delete(b);for(const b of[...E])S.has(b)||E.delete(b);for(const b of g)ns(b);const F=g.map((b,B)=>ga(b,B)),G=Vg(F),J=new Set(G.redRuleIds);g=g.map(b=>({...b,uiState:J.has(b.id)?"red":"normal"})),p=!0,vn("ruleBlocks",G.rules),p=!1,$({compileStatus:"stale",compileError:null}),Pe()}function he(S){return F=>{S(F)!==!1&&oe()}}function ue(S){return String(S||"").trim()}function ke(S,F){return`${ue(S)}::${ue(F)}`}function je(S,F=""){const G=ue(S);G&&(C.has(G)||C.set(G,new Set),F!==void 0&&C.get(G).add(ue(F)))}function te(){for(const S of g){const F=ue(S.group);F&&(je(F,ue(S.subgroup)),T.includes(F)||T.push(F))}}function de(S){const F=S instanceof Element?S:null;return F?!!F.closest("input,select,button,textarea,label,.cp-rule-slot-add"):!1}function Te(S){S<0||S>=g.length||(M.clear(),M.add(g[S]._uid),_=S,D="",Y=null)}function ge(S){if(S<0||S>=g.length)return;if(_<0||_>=g.length){Te(S);return}const F=Math.min(_,S),G=Math.max(_,S);M.clear();for(let J=F;J<=G;J++)M.add(g[J]._uid);D="",Y=null}function Le(S){if(S<0||S>=g.length)return;const F=g[S]._uid;M.has(F)?M.delete(F):M.add(F),_=S,D="",Y=null}function Be(S,F){if(S<0||S>=g.length)return;const G=!!(F.ctrlKey||F.metaKey);F.shiftKey?ge(S):G?Le(S):Te(S),Pe()}function ze(S,F){const G=[...new Set((S||[]).filter(b=>b>=0&&b<g.length))].sort((b,B)=>b-B);if(G.length===0)return;const J=!!(F!=null&&F.ctrlKey||F!=null&&F.metaKey);if(F!=null&&F.shiftKey&&_>=0&&_<g.length){const b=G[G.length-1],B=Math.min(_,b),N=Math.max(_,b);M.clear();for(let X=B;X<=N;X++)M.add(g[X]._uid);Pe();return}if(J)for(const b of G){const B=g[b]._uid;M.has(B)?M.delete(B):M.add(B)}else{M.clear();for(const b of G)M.add(g[b]._uid)}_=G[G.length-1],Pe()}function st(S){const F=S instanceof Element?S:null;return F?!!F.closest('input,textarea,select,[contenteditable="true"]'):!1}function Ve(S){const F=[...new Set((S||[]).filter(G=>G>=0&&G<g.length))].sort((G,J)=>G-J);if(F.length===0)return!1;for(let G=F.length-1;G>=0;G--)g.splice(F[G],1);return M.clear(),D="",Y=null,!0}function at(){const S=L();if(S.length>0)return Ve(S),oe(),!0;if(Y&&Y.group){const F=Y.group,G=Y.subgroup,J=ke(F,G),b=[];for(let N=0;N<g.length;N++)ue(g[N].group)===F&&ue(g[N].subgroup)===G&&b.push(N);const B=Ve(b);if(C.has(F)){const N=C.get(F);N.delete(G),N.size===0&&C.delete(F)}return I.delete(J),Y=null,D="",B?oe():Pe(),!0}if(D){const F=D,G=[];for(let B=0;B<g.length;B++)ue(g[B].group)===F&&G.push(B);const J=Ve(G);C.delete(F);const b=T.indexOf(F);b>=0&&T.splice(b,1),P.delete(F);for(const B of[...I])B.startsWith(`${F}::`)&&I.delete(B);return D="",Y=null,J?oe():Pe(),!0}return!1}function L(){const S=[];for(let F=0;F<g.length;F++)M.has(g[F]._uid)&&S.push(F);return S}function Et(S){return S.startsWith(q)?S.slice(q.length):S}async function Ge(){k=(await kc()).filter(G=>String(G||"").startsWith(q));const F=String(l.value||"");l.innerHTML='<option value="">rule presets</option>';for(const G of k){const J=K("option","",{value:G,text:Et(G)});l.appendChild(J)}F&&k.includes(F)&&(l.value=F)}async function Xe(){Z();const S=L();if(S.length<1){alert("Select one or more rules to save as a rule preset.");return}const F=String(c.value||Et(String(l.value||""))).trim();if(!F){alert("Enter a single-rule preset name first."),c.focus();return}const G=`${q}${F}`;if(k.includes(G)&&!confirm(`Overwrite single-rule preset "${F}"?`))return;const J=S.map((B,N)=>ga(g[B],N)),b=To();b.ruleBlocks=J,await Hc(G,b),await Ge(),l.value=G,c.value=F}async function we(S){var J;if(!S)return;const F=await Vc(S),G=Array.isArray((J=F==null?void 0:F.params)==null?void 0:J.ruleBlocks)?F.params.ruleBlocks:[];if(G.length===0){alert("Selected rule preset has no rule block.");return}for(const b of G)g.push(Bi(b,g.length));oe()}function et(S,F="",G=""){let J=w.map(ee=>g.findIndex(Ae=>Ae._uid===ee)).filter(ee=>ee>=0).sort((ee,Ae)=>ee-Ae);if(J.length===0&&(J=L()),J.length===0&&d>=0&&d<g.length&&(J=[d]),J.length===0)return;const b=new Set(J);if(S>=0&&S<=g.length){const ee=S-1;if(b.has(S)||ee>=0&&b.has(ee)){d=-1,w=[];return}}const B=J.map(ee=>g[ee]);for(let ee=J.length-1;ee>=0;ee--)g.splice(J[ee],1);let N=Math.max(0,Math.min(g.length,S));for(const ee of J)ee<N&&N--;const X=ue(F),ae=ue(G);for(const ee of B)ee.group=X,ee.subgroup=ae;g.splice(N,0,...B),je(X,ae),M.clear();for(const ee of B)M.add(ee._uid);_=g.findIndex(ee=>ee._uid===B[B.length-1]._uid),d=-1,w=[],oe()}function Re(S){const F=[...S.keys()];for(const G of F)T.includes(G)||T.push(G);for(let G=T.length-1;G>=0;G--)F.includes(T[G])||T.splice(G,1)}function R(){const S=new Map(T.map((F,G)=>[F,G+1]));g=g.map((F,G)=>({row:F,idx:G})).sort((F,G)=>{const J=S.get(ue(F.row.group))??0,b=S.get(ue(G.row.group))??0;return J!==b?J-b:F.idx-G.idx}).map(F=>F.row)}function x(S,F){const G=ue(S),J=ue(F);if(!G||!J||G===J)return;const b=T.indexOf(G),B=T.indexOf(J);if(b<0||B<0)return;T.splice(b,1);const N=T.indexOf(J);T.splice(N<0?T.length:N,0,G),R(),oe()}function H(S,F="",G=""){et(S,F,G)}function ie(S,F="",G=""){const J=Bi(ma(g.length),g.length);J.group=ue(F),J.subgroup=ue(G);const b=Math.max(0,Math.min(g.length,S));g.splice(b,0,J),je(J.group,J.subgroup),oe()}function re(S,F){if(S<0||S>=g.length)return;const G=ue(g[S].group),J=[];for(let X=0;X<g.length;X++)ue(g[X].group)===G&&J.push(X);const b=J.indexOf(S);if(b<0)return;const B=b+F;if(B<0||B>=J.length)return;const N=J[B];[g[S],g[N]]=[g[N],g[S]],oe()}function ne(S,F){const G=M.has(S._uid),J=K("div",`cp-rule-row${S.uiState==="red"?" cp-rule-row-red":""}${G?" cp-rule-row-selected":""}`);J.draggable=!0,J.dataset.ruleIndex=String(F),J.dataset.ruleUid=S._uid,J.addEventListener("click",Q=>{if(de(Q.target))return;const be=Q.target instanceof Element?Q.target:null;!be||!(be===J||be.classList.contains("cp-rule-row-top")||be.classList.contains("cp-rule-body")||be.classList.contains("cp-rule-line"))||Be(F,Q)}),J.addEventListener("dragstart",Q=>{M.has(S._uid)||Te(F),w=L().map(be=>g[be]._uid),d=F,Q.dataTransfer&&(Q.dataTransfer.effectAllowed="move",Q.dataTransfer.setData("text/plain",S._uid)),J.classList.add("cp-rule-row-dragging")}),J.addEventListener("dragend",()=>{d=-1,w=[],J.classList.remove("cp-rule-row-dragging")});const b=K("div","cp-rule-row-top"),B=E.has(S._uid),N=K("button","cp-preset-btn cp-rule-mini cp-rule-fold-btn",{type:"button",text:B?"▸":"▾",title:B?"Expand rule":"Collapse rule"});N.addEventListener("click",Q=>{Q.preventDefault(),Q.stopPropagation(),E.has(S._uid)?E.delete(S._uid):E.add(S._uid),Pe()});const X=K("span","cp-rule-index",{text:`#${F+1}`}),ae=K("input","cp-rule-input cp-rule-name",{type:"text",value:S.id,placeholder:"rule name"}),ee=K("input","cp-rule-toggle",{type:"checkbox"});ee.checked=!!S.enabled,ee.addEventListener("change",he(()=>(S.enabled=ee.checked,!0))),ae.addEventListener("keydown",he(Q=>{if(Q.key!=="Enter")return!1;Q.preventDefault();const be=String(ae.value||"").trim();return S.id=be||pr(F),ae.value=S.id,ae.blur(),!0}));const Ae=wn(Xc.map(Q=>({value:Q,label:d_[Q]||Q})),S.target),Qe=K("button","cp-preset-btn cp-rule-mini",{text:"Move Up"}),dt=K("button","cp-preset-btn cp-rule-mini",{text:"↓"}),$e=K("button","cp-preset-btn cp-rule-mini",{text:"⧉"});$e.title="Duplicate rule";const vt=K("button","cp-preset-btn cp-rule-mini cp-preset-del",{text:"🗙"});Qe.textContent="↑",Qe.addEventListener("click",()=>re(F,-1)),dt.addEventListener("click",()=>re(F,1)),$e.addEventListener("click",()=>le(F)),vt.addEventListener("click",()=>{const Q=L();if(Q.length>1&&M.has(S._uid)){for(let be=Q.length-1;be>=0;be--)g.splice(Q[be],1);M.clear(),oe();return}g.splice(F,1),M.delete(S._uid),E.delete(S._uid),oe()}),b.append(N,X,ae,ee,Ae,Qe,dt,$e,vt);const Rt=K("div","cp-rule-line");Rt.appendChild(K("span","cp-rule-k",{text:"Condition"}));const zt=wn(u_.map(Q=>({value:Q,label:Q})),S.conditionOp),hn=wn(Pn.map(Q=>({value:Q,label:Q})),S.conditionInput),Tt=wn([{value:"literal",label:"literal"},{value:"input",label:"input"}],S.conditionRhsMode),Fe=_a(S.conditionRhsLiteral),xt=wn(Pn.map(Q=>({value:Q,label:Q})),S.conditionRhsInput),Ct=()=>{const Q=zt.value==="always";hn.style.display=Q?"none":"",Tt.style.display=Q?"none":"",Fe.style.display=!Q&&Tt.value==="literal"?"":"none",xt.style.display=!Q&&Tt.value==="input"?"":"none"};zt.addEventListener("change",he(()=>(S.conditionOp=zt.value,Ct(),!0))),hn.addEventListener("change",he(()=>(S.conditionInput=hn.value,!0))),Tt.addEventListener("change",he(()=>(S.conditionRhsMode=Tt.value,Ct(),!0))),Fe.addEventListener("keydown",he(Q=>Q.key!=="Enter"?!1:(Q.preventDefault(),S.conditionRhsLiteral=Number(Fe.value),Fe.blur(),!0))),xt.addEventListener("change",he(()=>(S.conditionRhsInput=xt.value,!0))),Rt.append(zt,hn,Tt,Fe,xt),Ct();const Ut=K("div","cp-rule-line");Ut.appendChild(K("span","cp-rule-k",{text:"Action"})),ns(S);const ht=wn(lo(S.target).map(Q=>({value:Q,label:Q})),S.actionOutput),gt=wn(qc.map(Q=>({value:Q,label:Q})),S.actionOp),Ne=wn([{value:"literal",label:"literal"},{value:"input",label:"input"},{value:"expression",label:"expression"},{value:"shape",label:"shape type"}],S.actionValueMode),Ft=_a(S.actionLiteral),fn=wn(Pn.map(Q=>({value:Q,label:Q})),S.actionInput),jt=K("div","cp-rule-expr-wrap"),Ze=K("textarea","cp-rule-input cp-rule-expr",{placeholder:"amplitude * 0.8"});Ze.value=S.actionExpression||"";const Pt=K("div","cp-rule-expr-suggest");jt.append(Ze,Pt);const An=wn([{value:"square",label:"square"},{value:"circle",label:"circle"}],S.actionLiteralShape),y=_a(S.strength,"0.1"),U=K("label","cp-rule-invert"),V=K("input","",{type:"checkbox"});V.checked=!!S.invert,U.append(V,K("span","",{text:"⇄ invert"}));const W=()=>{ns(S);const Q=lo(S.target).map(Ye=>({value:Ye,label:Ye}));p_(ht,Q,S.actionOutput);const be=ht.value==="shapeType";be&&(Ne.value="shape"),Ne.style.display=be?"none":"",Ft.style.display=!be&&Ne.value==="literal"?"":"none",fn.style.display=!be&&Ne.value==="input"?"":"none",jt.style.display=!be&&Ne.value==="expression"?"":"none",An.style.display=be?"":"none";const He=!be&&Ne.value==="input";y.style.display=He?"":"none",U.style.display=He?"":"none",(be||Ne.value!=="expression")&&(Pt.style.display="none",Pt.innerHTML="")},O=[...new Set([...Pn,"clamp","lerp","smoothstep","pow","min","max","abs","PI","E"])];function se(){const Q=String(Ze.value||""),be=Number.isFinite(Ze.selectionStart)?Ze.selectionStart:Q.length,Ye=Q.slice(0,be).match(/([A-Za-z_][A-Za-z0-9_]*)$/);return{token:Ye?Ye[1]:"",start:Ye?be-Ye[1].length:be,end:be}}function me(Q){const be=String(Ze.value||""),He=se(),Ye=`${be.slice(0,He.start)}${Q}${be.slice(He.end)}`;Ze.value=Ye,S.actionExpression=Ye;const ot=He.start+Q.length;Ze.focus(),Ze.setSelectionRange(ot,ot),xe()}function xe(){if(Ne.value!=="expression"){Pt.style.display="none",Pt.innerHTML="";return}const Q=se(),be=String(Q.token||"").toLowerCase();if(!be){Pt.style.display="none",Pt.innerHTML="";return}const He=O.filter(Ye=>Ye.toLowerCase().startsWith(be)&&Ye.toLowerCase()!==be).slice(0,8);if(He.length===0){Pt.style.display="none",Pt.innerHTML="";return}Pt.innerHTML="";for(const Ye of He){const ot=K("button","cp-rule-expr-suggest-btn",{type:"button",text:Ye});ot.addEventListener("mousedown",Ke=>{Ke.preventDefault()}),ot.addEventListener("click",Ke=>{Ke.preventDefault(),me(Ye)}),Pt.appendChild(ot)}Pt.style.display="flex"}function Ee(){Ze.style.height="auto",Ze.style.height=`${Math.max(24,Ze.scrollHeight)}px`}ht.addEventListener("change",he(()=>(S.actionOutput=ht.value,W(),!0))),Ae.addEventListener("change",he(()=>(S.target=Ae.value,ns(S),W(),!0))),gt.addEventListener("change",he(()=>(S.actionOp=gt.value,!0))),Ne.addEventListener("change",he(()=>(S.actionValueMode=Ne.value,W(),!0))),Ft.addEventListener("keydown",he(Q=>Q.key!=="Enter"?!1:(Q.preventDefault(),S.actionLiteral=Number(Ft.value),Ft.blur(),!0))),fn.addEventListener("change",he(()=>(S.actionInput=fn.value,!0))),Ze.addEventListener("input",()=>{S.actionExpression=Ze.value,Ee(),xe()}),Ze.addEventListener("click",xe),Ze.addEventListener("focus",Ee),Ze.addEventListener("keyup",xe),Ze.addEventListener("keydown",he(Q=>Q.key==="Enter"&&(Q.ctrlKey||Q.metaKey)?(Q.preventDefault(),S.actionExpression=Ze.value,Ze.blur(),!0):!1)),Ze.addEventListener("blur",()=>{S.actionExpression=Ze.value,setTimeout(()=>{Pt.style.display="none"},120),oe()}),An.addEventListener("change",he(()=>(S.actionLiteralShape=An.value,!0))),y.addEventListener("keydown",he(Q=>Q.key!=="Enter"?!1:(Q.preventDefault(),S.strength=Number(y.value),y.blur(),!0))),V.addEventListener("change",he(()=>(S.invert=V.checked,!0))),Ut.append(ht,gt,Ne,Ft,fn,jt,An,y,U),W(),Ee();const Oe=K("div","cp-rule-summary",{text:m_(S)}),Ue=K("div","cp-rule-body");return Ue.append(Rt,Ut,Oe),B&&(Ue.style.display="none"),J.append(b,Ue),J}function fe(S,F="",G=""){const J=K("div","cp-rule-slot"),b=K("button","cp-rule-slot-add",{type:"button",text:"+"});return b.title="Add rule here",b.addEventListener("click",B=>{B.preventDefault(),B.stopPropagation(),ie(S,F,G)}),J.addEventListener("dragover",B=>{B.preventDefault(),J.classList.add("cp-rule-slot-active")}),J.addEventListener("dragleave",()=>{J.classList.remove("cp-rule-slot-active")}),J.addEventListener("drop",B=>{B.preventDefault(),B.stopPropagation(),J.classList.remove("cp-rule-slot-active"),H(S,F,G)}),J.appendChild(b),J}function pe(S,F="",G=""){const J=K("div","cp-rule-lane");if(S.length===0)return J.appendChild(fe(g.length,F,G)),J;J.appendChild(fe(S[0],F,G));for(const b of S)J.appendChild(ne(g[b],b)),J.appendChild(fe(b+1,F,G));return J}function ve(S,F="",G=""){S.addEventListener("dragover",J=>{J.preventDefault(),S.classList.add("cp-rule-dropzone-active")}),S.addEventListener("dragleave",()=>{S.classList.remove("cp-rule-dropzone-active")}),S.addEventListener("drop",J=>{J.preventDefault(),J.stopPropagation(),S.classList.remove("cp-rule-dropzone-active"),H(g.length,F,G)})}function Pe(){a.innerHTML="",te();const S=new Map,F=[];for(let B=0;B<g.length;B++){const N=g[B],X=ue(N.group),ae=ue(N.subgroup);if(!X){F.push(B);continue}S.has(X)||S.set(X,new Map);const ee=S.get(X);ee.has(ae)||ee.set(ae,[]),ee.get(ae).push(B)}for(const[B,N]of C.entries()){S.has(B)||S.set(B,new Map);const X=S.get(B);for(const ae of N)X.has(ae)||X.set(ae,[])}Re(S);const G=K("div","cp-rule-groups"),J=K("div","cp-rule-group cp-rule-ungrouped"),b=K("div","cp-rule-group-header");b.appendChild(K("div","cp-rule-group-title",{text:"Ungrouped"})),J.append(b,pe(F,"","")),G.appendChild(J);for(const B of T){const N=S.get(B);if(!N)continue;const X=[];for(const Fe of N.values())X.push(...Fe);const ae=D===B||X.length>0&&X.every(Fe=>M.has(g[Fe]._uid)),ee=K("div","cp-rule-group");ee.draggable=!0;const Ae=K("div",`cp-rule-group-header${ae?" cp-rule-group-header-selected":""}`),Qe=!P.has(B),dt=K("button","cp-preset-btn cp-rule-mini cp-rule-fold-btn",{type:"button",text:Qe?"▾":"▸"}),$e=K("div","cp-rule-group-title",{text:B}),vt=K("button","cp-preset-btn cp-rule-mini",{type:"button",text:"+ Sub"});dt.title=Qe?"Collapse group":"Expand group",dt.addEventListener("click",Fe=>{Fe.preventDefault(),Fe.stopPropagation(),P.has(B)?P.delete(B):P.add(B),Pe()}),Ae.addEventListener("click",Fe=>{de(Fe.target)||Fe.target===Ae&&(D=B,Y=null,X.length>0?ze(X,Fe):(M.clear(),_=-1,Pe()))}),vt.addEventListener("click",()=>{const Fe=prompt(`Create subgroup inside "${B}"`,"subgroup"),xt=String(Fe||"").trim();xt&&(je(B,xt),Pe())}),vt.addEventListener("click",Fe=>Fe.stopPropagation()),vt.addEventListener("dblclick",Fe=>Fe.stopPropagation()),$e.title="Double-click to rename group",$e.addEventListener("dblclick",Fe=>{Fe.preventDefault(),Fe.stopPropagation();const xt=prompt("Rename group",B),Ct=ue(xt);if(!Ct||Ct===B)return;for(const ht of g)ue(ht.group)===B&&(ht.group=Ct);if(C.has(B)){const ht=C.get(B);C.delete(B),C.set(Ct,ht)}P.delete(B)&&P.add(Ct);const Ut=[...I].filter(ht=>ht.startsWith(`${B}::`));for(const ht of Ut)I.delete(ht),I.add(ht.replace(`${B}::`,`${Ct}::`));oe()}),ee.addEventListener("dragstart",Fe=>{A=B,Fe.dataTransfer&&(Fe.dataTransfer.effectAllowed="move",Fe.dataTransfer.setData("text/plain",`group:${B}`)),ee.classList.add("cp-rule-group-dragging")}),ee.addEventListener("dragend",()=>{A="",ee.classList.remove("cp-rule-group-dragging")}),ee.addEventListener("dragover",Fe=>{A&&(Fe.preventDefault(),ee.classList.add("cp-rule-group-drop-target"))}),ee.addEventListener("dragleave",()=>{ee.classList.remove("cp-rule-group-drop-target")}),ee.addEventListener("drop",Fe=>{A&&(Fe.preventDefault(),ee.classList.remove("cp-rule-group-drop-target"),x(A,B))});const Rt=K("span","cp-rule-group-actions");Rt.appendChild(vt),Ae.append(dt,$e,Rt);const zt=K("div","cp-rule-group-body");Qe||(zt.style.display="none"),ve(zt,B,"");const hn=N.get("")||[];zt.appendChild(pe(hn,B,""));const Tt=K("div","cp-rule-subgroups");for(const[Fe,xt]of N.entries()){if(ue(Fe)==="")continue;const Ct=Y&&Y.group===B&&Y.subgroup===Fe||xt.length>0&&xt.every(Ze=>M.has(g[Ze]._uid)),Ut=K("div","cp-rule-subgroup"),ht=K("div",`cp-rule-subgroup-title${Ct?" cp-rule-subgroup-title-selected":""}`),gt=ke(B,Fe),Ne=!I.has(gt),Ft=K("button","cp-preset-btn cp-rule-mini cp-rule-fold-btn",{type:"button",text:Ne?"▾":"▸"}),fn=K("span","",{text:Fe});Ft.title=Ne?"Collapse subgroup":"Expand subgroup",ht.append(Ft,fn),Ft.addEventListener("click",Ze=>{Ze.preventDefault(),Ze.stopPropagation(),I.has(gt)?I.delete(gt):I.add(gt),Pe()}),ht.addEventListener("click",Ze=>{de(Ze.target)||Ze.target===ht&&(Y={group:B,subgroup:Fe},D="",xt.length>0?ze(xt,Ze):(M.clear(),_=-1,Pe()))});const jt=K("div","cp-rule-subgroup-body");Ne||(jt.style.display="none"),ve(jt,B,Fe),jt.appendChild(pe(xt,B,Fe)),Ut.append(ht,jt),Tt.appendChild(Ut)}zt.appendChild(Tt),ee.append(Ae,zt),G.appendChild(ee)}a.appendChild(G)}v.addEventListener("click",()=>{g.push(Bi(ma(g.length),g.length)),oe()}),l.addEventListener("change",()=>{const S=String(l.value||"");S&&(c.value=Et(S))}),u.addEventListener("click",async()=>{await Xe()}),f.addEventListener("click",async()=>{await we(String(l.value||""))}),h.addEventListener("click",async()=>{const S=String(l.value||"");if(!S)return;const F=Et(S);confirm(`Delete single-rule preset "${F}"?`)&&(await Gc(S),await Ge(),c.value="")});const ce=K("button","cp-preset-btn cp-rule-add-group",{text:"New Group"});ce.addEventListener("click",()=>{const S=prompt("New group name","group"),F=ue(S);F&&(je(F,""),Pe())}),m.appendChild(ce);const ye=K("button","cp-preset-btn cp-rule-add-group",{text:"Group Selection"});ye.addEventListener("click",()=>{const S=L();if(S.length===0){alert("Select one or more rules first.");return}const F=prompt("New group name for selected rules","group"),G=ue(F);if(G){for(const J of S)g[J].group=G,g[J].subgroup="";je(G,""),T.includes(G)||T.push(G),oe()}}),m.appendChild(ye);const Ce=window.__seesoundRuleDeleteAbort;Ce&&typeof Ce.abort=="function"&&Ce.abort();const De=new AbortController;return window.__seesoundRuleDeleteAbort=De,document.addEventListener("keydown",S=>{S.defaultPrevented||(S.key==="Delete"||S.key==="Backspace")&&(st(S.target)||at()&&(S.preventDefault(),S.stopPropagation()))},{signal:De.signal}),Qt={serialize:()=>g.map((S,F)=>ga(S,F)),addRow:S=>{g.push(Bi(S||ma(g.length),g.length)),oe()},replaceFromRuleBlocks:S=>{g=(Array.isArray(S)?S:[]).map(Bi),C.clear(),T.length=0,P.clear(),I.clear(),E.clear(),M.clear(),D="",Y=null,_=-1,d=-1,w=[],A="",te(),Pe(),$({compileStatus:"stale",compileError:null})},renderCompileStatus:$},Us((S,F)=>{F!=="ruleBlocks"||p||Qt==null||Qt.replaceFromRuleBlocks(Array.isArray(Me.ruleBlocks)?Me.ruleBlocks:[])}),Pe(),Ge(),oe(),window.addEventListener("seesound:rule-compile-state",S=>$(S.detail||{})),Qt}function __(n){if(!n){console.warn("[ControlPanel] No container element found.");return}const e=K("div","cp-header"),t=K("button","cp-collapse-btn",{text:"»",title:"Collapse panel"}),i=K("span","cp-title",{text:"Parameters"}),r=K("button","cp-reset-btn",{text:"↺",title:"Reset all to factory defaults"});e.append(t,i,r);const s=K("div","cp-body");s.appendChild(a_()),s.appendChild(o_());for(let o=0;o<Fl.length;o++){const l=Fl[o],c=yr.filter(u=>u.group===l.id&&u.key!=="canvasWidth"&&u.key!=="canvasHeight"&&u.key!=="canvasScale"&&u.key!=="defaultBackgroundHue"&&u.key!=="defaultBackgroundSaturation"&&u.key!=="defaultBackgroundLightness");c.length!==0&&s.appendChild(l_(l,c,o<3))}g_(s),n.append(e,s);let a=!1;t.addEventListener("click",()=>{a=!a,n.classList.toggle("cp-collapsed",a),t.textContent=a?"«":"»",i.style.display=a?"none":"",r.style.display=a?"none":"",s.style.display=a?"none":""}),r.addEventListener("click",()=>{var o;if(confirm("Reset all parameters to factory defaults?")){qg();for(const l of yr)(o=ln.get(l.key))==null||o(Me[l.key])}})}const jc=()=>{},ps=()=>{},v_=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs});function is(n){for(const e of n||[]){const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness")return!0}return!1}function Ol(n,e){for(const t of n||[]){const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const x_=new Set([">",">=","<","<=","==","!="]);let rs={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",requiredInputsByTarget:{spawnedParticles:[],allParticles:[],background:[],camera:[]},requiredInputs:[],applySpawnRules:jc,applyLivingRules:ps}};function Bl(n,e){if(typeof n!="string"||!n.trim())return[];const t=new Set,i=n.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const r of i)e.has(r)&&t.add(r);return[...t]}function ss(n,e){const t=new Set;for(const i of n||[]){if(!(i!=null&&i.enabled))continue;const r=i.condition||{};typeof r.input=="string"&&e.has(r.input)&&t.add(r.input),typeof r.valueInput=="string"&&e.has(r.valueInput)&&t.add(r.valueInput);for(const a of Bl(r.expression,e))t.add(a);const s=Array.isArray(i.actions)?i.actions:[];for(const a of s){typeof(a==null?void 0:a.input)=="string"&&e.has(a.input)&&t.add(a.input);for(const o of Bl(a==null?void 0:a.expression,e))t.add(o)}}return[...t]}function Zc(n){return JSON.stringify(n)}function y_(n){return typeof n.expression=="string"&&n.expression.trim()?`(${n.expression})`:typeof n.input=="string"&&n.input.trim()?n.input:Zc(n.value)}function M_(n){if(!n||n.operator==="always")return"true";if(typeof n.expression=="string"&&n.expression.trim())return`(${n.expression})`;if(!x_.has(n.operator))return"false";const e=typeof n.input=="string"?n.input:"0",t=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Zc(n.value??0);return`((${e}) ${n.operator} (${t}))`}function b_(n){const e=n.output,t=y_(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function Ts(n,e,t,i){const r=[],s=[];r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const a of t)a==="deltaTime"||a==="time"||r.push(`  const ${a} = Number.isFinite(i.${a}) ? i.${a} : 0;`);return e.forEach(a=>{if(!a.enabled)return;const o=M_(a.condition);r.push(`  // rule ${a.id}`),r.push(`  if (${o}) {`),s.push({ruleId:a.id,functionName:n,sourceLine:r.length+1});for(const l of a.actions??[])r.push(`    ${b_(l)}`);r.push("  }")}),r.push("}"),{source:r.join(`
`),lineMap:s}}function S_(n,e){return Ts("applySpawnRules",n,e,!1)}function E_(n,e){return Ts("applyLivingRules",n,e,!0)}function T_(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function zl(n,e){const t=performance.now(),i=Fc(n,e),s=[...i.ruleBlocks].sort((_,C)=>(_.order??0)-(C.order??0)),a=s.filter(_=>_.target==="spawnedParticles"),o=s.filter(_=>_.target==="allParticles"),l=s.filter(_=>_.target==="background"),c=s.filter(_=>_.target==="camera"),u=T_(s);if(rs.hash===u)return rs.result;const f=Nc().entries.map(_=>_.id),h=new Set(f),m={spawnedParticles:ss(a,h),allParticles:ss(o,h),background:ss(l,h),camera:ss(c,h)},v=[...new Set([...m.spawnedParticles,...m.allParticles,...m.background,...m.camera])],g=S_(a,f),p=E_(o,f),d=Ts("applyBackgroundRules",l,f,!0),w=Ts("applyCameraRules",c,f,!0),A=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",g.source,p.source,d.source,w.source,"return { applySpawnRules, applyLivingRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const C=new Function("helpers",A)(v_),T={hash:u,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:is([...a,...o]),usesBackgroundHsb:is(l),usesLivingShapeType:Ol(o,"shapeType"),rejected:i.rejected,requiredInputsByTarget:m,requiredInputs:v,lineMap:[...g.lineMap,...p.lineMap,...d.lineMap,...w.lineMap],source:A,applySpawnRules:typeof C.applySpawnRules=="function"?C.applySpawnRules:jc,applyLivingRules:typeof C.applyLivingRules=="function"?C.applyLivingRules:ps,applyBackgroundRules:typeof C.applyBackgroundRules=="function"?C.applyBackgroundRules:ps,applyCameraRules:typeof C.applyCameraRules=="function"?C.applyCameraRules:ps};return rs={hash:u,result:T},T}catch(_){const C=Number.isFinite(_==null?void 0:_.lineNumber)?Number(_.lineNumber):null;return{...rs.result,hash:u,compileStatus:"error",compileError:(_==null?void 0:_.message)||String(_),compileLine:C,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:is([...a,...o]),usesBackgroundHsb:is(l),usesLivingShapeType:Ol(o,"shapeType"),requiredInputsByTarget:m,requiredInputs:v,lineMap:[...g.lineMap,...p.lineMap,...d.lineMap,...w.lineMap],source:A,rejected:i.rejected}}}function Sn(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function Os(n,e,t=2){const i=Math.max(0,Math.min(e-1,Math.floor(n))),r=Math.max(1,Math.floor(t));return{start:Math.max(0,i-r),end:Math.min(e-1,i+r),center:i}}function A_(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,s=0;for(let a=0;a<t;a++){const o=Math.max(0,n[a]/255),l=a/Math.max(1,t-1)*i;r+=l*o,s+=o}return s<=1e-9?0:r/s}function w_(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const s=Math.max(0,n[r]/255),a=Math.max(0,e[r]/255),o=s-a;o>0&&(i+=o)}return Sn(i/t)}function R_(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let a=0;a<n.length;a++){const o=Math.max(0,n[a]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),s=i/n.length;return Sn(r/Math.max(s,e))}function C_(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,s=[];for(let u=1;u<t-1;u++){const f=n[u];if(!(f<r)&&f>=n[u-1]&&f>=n[u+1]){const h=u/Math.max(1,t-1)*i;s.push({i:u,hz:h,mag:f/255})}}if(s.length<2)return 0;s.sort((u,f)=>f.mag-u.mag);const a=s.slice(0,6),o=Math.max(20,a[0].hz);let l=0,c=0;for(let u=1;u<a.length;u++){const f=a[u],m=Math.max(1,Math.round(f.hz/o))*o,v=Math.abs(f.hz-m)/Math.max(m,1e-9);l+=v*f.mag,c+=f.mag}return c<=1e-9?0:Sn(l/c*2)}function as(n,e,t=.2){const i=Sn(t),r=Number.isFinite(n)?n:0,s=Sn(e);return r+(s-r)*i}function P_(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return Sn((Number.isFinite(n)?n:0)/t)}function L_(n,e,t=3){if(!n||!n.length)return 0;const i=n.length,{start:r,end:s}=Os(e,i,t);let a=0,o=0;for(let l=r;l<=s;l++){const c=Math.max(0,n[l]/255);a+=l*c,o+=c}return o<=1e-9?Sn((Math.floor(e)||0)/Math.max(1,i-1)):Sn(a/o/Math.max(1,i-1))}function D_(n,e,t,i=2){if(!n||!e||!n.length||!e.length)return 0;const r=Math.min(n.length,e.length),{start:s,end:a}=Os(t,r,i);let o=0,l=0;for(let c=s;c<=a;c++){const u=Math.max(0,n[c]/255),f=Math.max(0,e[c]/255),h=u-f;h>0&&(o+=h),l++}return l<=0?0:Sn(o/l)}function I_(n,e,t=3){if(!n||!n.length)return 0;const i=1e-12,{start:r,end:s}=Os(e,n.length,t);let a=0,o=0,l=0;for(let f=r;f<=s;f++){const h=Math.max(0,n[f]/255),m=h*h+i;a+=Math.log(m),o+=m,l++}if(l<=0||o<=0)return 0;const c=Math.exp(a/l),u=o/l;return Sn(c/Math.max(u,i))}function N_(n,e,t=3){if(!n||n.length<3)return 0;const i=n.length,{start:r,end:s}=Os(e,i,t);let a=0,o=0;const l=Math.max(r+1,1),c=Math.min(s-1,i-2);for(let u=l;u<=c;u++){const f=Math.max(0,n[u-1]/255),h=Math.max(0,n[u]/255),m=Math.max(0,n[u+1]/255),v=Math.abs(f-2*h+m);a+=v,o++}return o<=0?0:Sn(a/o*1.5)}const mr=16,ms=2e4,kl=Math.log2(mr),U_=Math.log2(ms);function F_(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,mr))-kl)/(U_-kl)))}function Hl(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function lt(n){return Math.max(0,Math.min(1,n))}function gs(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function os(n,e,t){const i=lt(n),r=lt(e),s=lt(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return{h:c,s:u,v:a}}function va(n,e,t){const i=gs(n)??0,r=lt(e),s=lt(t),a=Math.floor(i*6),o=i*6-a,l=s*(1-r),c=s*(1-o*r),u=s*(1-(1-o)*r);switch(a%6){case 0:return{r:s,g:u,b:l};case 1:return{r:c,g:s,b:l};case 2:return{r:l,g:s,b:u};case 3:return{r:l,g:c,b:s};case 4:return{r:u,g:l,b:s};default:return{r:s,g:l,b:c}}}const O_=`
attribute float psize;
attribute vec3 color;
attribute float valpha;
attribute float shapeType;
uniform float uViewportHeight;
varying vec3 vColor;
varying float vAlpha;
varying float vShapeType;

void main() {
    vColor = color;
    vAlpha = valpha;
    vShapeType = shapeType;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vec4 clipPos = projectionMatrix * mvPosition;
    float clipW = max(1e-6, abs(clipPos.w));
    float pxPerWorld = 0.5 * uViewportHeight * projectionMatrix[1][1] / clipW;
    gl_PointSize = max(1.0, psize * pxPerWorld);
    gl_Position = clipPos;
}
`,B_=`
precision mediump float;
varying vec3 vColor;
varying float vAlpha;
varying float vShapeType;

void main() {
    if (vShapeType > 0.5) {
        vec2 d = gl_PointCoord - vec2(0.5);
        float r2 = dot(d, d);
        if (r2 > 0.25) discard;
    }

    float alpha = clamp(vAlpha, 0.0, 1.0);
    if (alpha <= 0.001) discard;
    gl_FragColor = vec4(vColor, alpha);
}
`;class z_{constructor(e,t={}){this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0;const i=new En;this._geo=i,this._allocateBuffers(this._N);const r=new Yn({vertexShader:O_,fragmentShader:B_,uniforms:{uViewportHeight:{value:1}},transparent:!0,depthWrite:!1,blending:Vi});this._mesh=new Wd(i,r),this._mesh.frustumCulled=!1,e.add(this._mesh),this._mat=r,this._lastBlending=r.blending,this._background=new nt(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null},this._compiledRules=zl([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._pan=new Float32Array(this._N),this._aPos=new Gt(this._pos,3),this._aCol=new Gt(this._col,3),this._aSz=new Gt(this._sz,1),this._aAlpha=new Gt(this._alpha,1),this._aShape=new Gt(this._shape,1);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape])t.setUsage(ju);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const s=Math.max(0,Math.min(e,t));if(s<=0)return 0;const a={count:s,timestampSec:r,pos:this._pos.slice(0,s*3),col:this._col.slice(0,s*3),sz:this._sz.slice(0,s),alpha:this._alpha.slice(0,s),shape:this._shape.slice(0,s),pan:this._pan.slice(0,s)};this._archiveChunks.push(a),this._archivePointCount+=s,this._pruneArchive(i,r);const o=t-s;for(let l=0;l<o;l++){const c=l+s;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c],this._pan[l]=this._pan[c]}return s}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let s=0;s<this._archiveChunks.length&&r<i;s++){const a=this._archiveChunks[s],o=Math.min(a.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=a.pos[l*3],this._pos[(r+l)*3+1]=a.pos[l*3+1],this._pos[(r+l)*3+2]=a.pos[l*3+2],this._col[(r+l)*3]=a.col[l*3],this._col[(r+l)*3+1]=a.col[l*3+1],this._col[(r+l)*3+2]=a.col[l*3+2],this._sz[r+l]=a.sz[l],this._alpha[r+l]=a.alpha[l],this._shape[r+l]=a.shape[l],this._pan[r+l]=a.pan?a.pan[l]:0;r+=o}else for(let s=this._archiveChunks.length-1;s>=0&&r<i;s--){const a=this._archiveChunks[s],o=Math.min(a.count,i-r),l=a.count-o;for(let c=0;c<o;c++){const u=l+c;this._pos[(i-r-o+c)*3]=a.pos[u*3],this._pos[(i-r-o+c)*3+1]=a.pos[u*3+1],this._pos[(i-r-o+c)*3+2]=a.pos[u*3+2],this._col[(i-r-o+c)*3]=a.col[u*3],this._col[(i-r-o+c)*3+1]=a.col[u*3+1],this._col[(i-r-o+c)*3+2]=a.col[u*3+2],this._sz[i-r-o+c]=a.sz[u],this._alpha[i-r-o+c]=a.alpha[u],this._shape[i-r-o+c]=a.shape[u],this._pan[i-r-o+c]=a.pan?a.pan[u]:0}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}clearCanvas(){this.clear()}setViewportHeight(e){var i,r;const t=Math.max(1,Number(e)||1);(r=(i=this._mat)==null?void 0:i.uniforms)!=null&&r.uViewportHeight&&(this._mat.uniforms.uViewportHeight.value=t)}onRulesChanged(e){const t=zl(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){return{amplitude:e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:Number.isFinite(t.pan)?Number(t.pan):e.pan??0,time:Number(t.time)||0,deltaTime:Number(t.deltaTime)||0,spectralCentroid:Number.isFinite(t.spectralCentroid)?Number(t.spectralCentroid):e.spectralCentroid??0,spectralFlux:Number.isFinite(t.spectralFlux)?Number(t.spectralFlux):e.spectralFlux??0,spectralFlatness:Number.isFinite(t.spectralFlatness)?Number(t.spectralFlatness):e.spectralFlatness??0,inharmonicity:Number.isFinite(t.inharmonicity)?Number(t.inharmonicity):e.inharmonicity??0,binMagnitude:Number.isFinite(t.binMagnitude)?lt(t.binMagnitude):0,binFlux:Number.isFinite(t.binFlux)?Number(t.binFlux):0,binPhaseDeviation:Number.isFinite(t.binPhaseDeviation)?lt(t.binPhaseDeviation):0,binEnvelope:Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,canvasWidthUnits:Number(t.canvasWidthUnits)||0,canvasHeightUnits:Number(t.canvasHeightUnits)||0,canvasBoundaryLeft:Number(t.canvasBoundaryLeft)||0,canvasBoundaryRight:Number(t.canvasBoundaryRight)||0,canvasBoundaryTop:Number(t.canvasBoundaryTop)||0,canvasBoundaryBottom:Number(t.canvasBoundaryBottom)||0,audioLengthSec:Number(t.audioLengthSec)||0,binEnergy:lt(Number(t.binEnergy)||0),frequencyHz:Number(t.frequencyHz)||0,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount);if(e===0)return{empty:!0,min:new z,max:new z,center:new z,size:new z};const t=new z(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),i=new z(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let a=0;a<e;a++){const o=this._pos[a*3],l=this._pos[a*3+1],c=this._pos[a*3+2];o<t.x&&(t.x=o),l<t.y&&(t.y=l),c<t.z&&(t.z=c),o>i.x&&(i.x=o),l>i.y&&(i.y=l),c>i.z&&(i.z=c)}const r=t.clone().add(i).multiplyScalar(.5),s=i.clone().sub(t);return{empty:!1,min:t,max:i,center:r,size:s}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),s=1,a=e||{},o=a.inputs||(a.inputs={});let l=0;for(let c=t;c<i&&!(l>=r);c+=s){o.pan=Number.isFinite(this._pan[c])?this._pan[c]:0;const u={x:this._pos[c*3],y:this._pos[c*3+1],z:this._pos[c*3+2],size:this._sz[c],red:this._col[c*3],green:this._col[c*3+1],blue:this._col[c*3+2],opacity:this._alpha[c],r:this._col[c*3],g:this._col[c*3+1],b:this._col[c*3+2],a:this._alpha[c],shapeType:this._shape[c]>.5?"circle":"square"};this._compiledRules.applyLivingRules(a,u),this._pos[c*3]=Number.isFinite(u.x)?u.x:this._pos[c*3],this._pos[c*3+1]=Number.isFinite(u.y)?u.y:this._pos[c*3+1],this._pos[c*3+2]=Number.isFinite(u.z)?u.z:this._pos[c*3+2],this._sz[c]=Number.isFinite(u.size)?Math.max(0,u.size):this._sz[c];const f=Number.isFinite(u.red)?u.red:u.r,h=Number.isFinite(u.green)?u.green:u.g,m=Number.isFinite(u.blue)?u.blue:u.b,v=Number.isFinite(u.opacity)?u.opacity:u.a;let g=Number.isFinite(f)?lt(f):this._col[c*3],p=Number.isFinite(h)?lt(h):this._col[c*3+1],d=Number.isFinite(m)?lt(m):this._col[c*3+2];if(this._compiledRules.usesParticleHsb){const w=os(g,p,d),A=gs(u.hue),_=Number.isFinite(u.saturation)?lt(u.saturation):w.s,C=Number.isFinite(u.brightness)?lt(u.brightness):w.v,T=va(A??w.h,_,C);g=T.r,p=T.g,d=T.b}this._col[c*3]=g,this._col[c*3+1]=p,this._col[c*3+2]=d,this._alpha[c]=Number.isFinite(v)?Math.max(0,Math.min(1,v)):this._alpha[c],this._shape[c]=Hl(u.shapeType),l++}return l}applyBackgroundRules(e){const t=this._background,i=os(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v,backgroundRed:t.r,backgroundGreen:t.g,backgroundBlue:t.b};this._compiledRules.applyBackgroundRules(e,r);let s=Number.isFinite(r.red)?lt(r.red):t.r,a=Number.isFinite(r.green)?lt(r.green):t.g,o=Number.isFinite(r.blue)?lt(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=os(s,a,o),c=gs(r.hue),u=Number.isFinite(r.saturation)?lt(r.saturation):l.s,f=Number.isFinite(r.brightness)?lt(r.brightness):l.v,h=va(c??l.h,u,f);s=h.r,a=h.g,o=h.b}t.setRGB(s,a,o)}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null}}update(e,t,i,r){var ve,Pe,ce,ye,Ce,De,S,F,G,J;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const s=performance.now(),a=Math.max(0,Math.min(1,(s-this._lastUpdateT)/1e3));this._lastUpdateT=s;const o=e.frequencyData,l=Math.min(o.length,this._N),u=(((ve=e.ctx)==null?void 0:ve.sampleRate)??44100)/2,f=b=>b/o.length*u,h=t.persistMode??0,m=t.inputGain??1,v=t.amplitudeThreshold??-48,g=Math.max(0,Math.min(255,Math.round(Math.pow(10,v/20)*255))),p=t.defaultParticleSize??6,d=(t.freqDepthEffect??100)/100,w=(t.zDepth??0)/100,A=Math.max(.2,t.frequencySpread??1),_=Math.max(mr,Math.min(ms,Number(t.lowFrequencyCutoff??mr))),C=Math.max(mr,Math.min(ms,Number(t.highFrequencyCutoff??ms))),T=Math.max(_,C),P=Number(t.particleRenderPercent),I=Number.isFinite(P)?Math.max(1,Math.min(100,Math.floor(P))):100,E=Math.max(0,Math.min(1,t.brightnessFloor??.2)),M=Math.max(0,t.amplitudeToBrightness??1.25),D=t.blendMode??"screen",Y=Number.isFinite(Number(t.defaultBackgroundHue))?Number(t.defaultBackgroundHue):0,q=Number.isFinite(Number(t.defaultBackgroundSaturation))?Number(t.defaultBackgroundSaturation):0,k=Number.isFinite(Number(t.defaultBackgroundLightness))?Number(t.defaultBackgroundLightness):0,Z=!!(e.analyserL&&e.analyserR&&e.getBinPan),j=((Pe=e.getPrevFrequencyData)==null?void 0:Pe.call(e))||null,le=((ce=e.getBinMagnitude)==null?void 0:ce.call(e))||null,$=((ye=e.getBinFlux)==null?void 0:ye.call(e))||null,oe=((Ce=e.getBinPhaseDeviation)==null?void 0:Ce.call(e))||null,he=((De=e.getBinEnvelope)==null?void 0:De.call(e))||null,ue=new Set(((F=(S=this._compiledRules)==null?void 0:S.requiredInputsByTarget)==null?void 0:F.spawnedParticles)||[]),ke=ue.has("spectralCentroid"),je=ue.has("spectralFlux"),te=ue.has("spectralFlatness"),de=ue.has("inharmonicity"),Te=ue.has("binMagnitude")||ue.has("binEnergy"),ge=ue.has("binFlux"),Le=ue.has("binPhaseDeviation"),Be=ue.has("binEnvelope"),ze=I>=100?()=>!0:b=>b*I%100<I;if(D==="alpha"){const b=this._mat;(b.blending!==Ma||b.blendSrc!==gr||b.blendDst!==_r||b.blendEquation!==Hn)&&(b.blending=Ma,b.blendSrc=gr,b.blendDst=_r,b.blendEquation=Hn,b.needsUpdate=!0,this._lastBlending=b.blending)}else{const B={screen:Vi,lighter:Vi,"source-over":si,multiply:si}[D]??Vi;B!==this._lastBlending&&(this._mat.blending=B,this._mat.needsUpdate=!0,this._lastBlending=B)}const st=Number(t.cameraCanvasWidthUnits),Ve=Number(t.cameraCanvasHeightUnits),at=Number.isFinite(st)&&st>0?st:i,L=Number.isFinite(Ve)&&Ve>0?Ve:r,Et=(Y%360+360)%360;this._background.setHSL(Et/360,lt(q/100),lt(k/100));const Ge=at/2,Xe=L/2,we=Number.isFinite(Number(t.cameraCanvasBoundaryLeft))?Number(t.cameraCanvasBoundaryLeft):-Ge,et=Number.isFinite(Number(t.cameraCanvasBoundaryRight))?Number(t.cameraCanvasBoundaryRight):Ge,Re=Number.isFinite(Number(t.cameraCanvasBoundaryTop))?Number(t.cameraCanvasBoundaryTop):Xe,R=Number.isFinite(Number(t.cameraCanvasBoundaryBottom))?Number(t.cameraCanvasBoundaryBottom):-Xe,x=((G=e.audioEl)==null?void 0:G.currentTime)??0,H=((J=e.audioEl)==null?void 0:J.duration)??0;let ie=0;for(let b=0;b<l;b++)o[b]>ie&&(ie=o[b]);const re=Math.max(1,Math.round(ie*.55)),ne=Math.min(g,re);let fe=h===1?this._paintCount:0;const pe=(b,B,N,X=1)=>{if(fe>=this._N&&h===1){const V=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),W=this._archiveAndCompactOldest(V,fe,t,x);fe=Math.max(0,fe-W)}if(fe>=this._N)return;const ae=f(b),ee=F_(ae),Ae=Math.pow(ee,A),Qe=Z?e.getBinPan(b):e.pan??0,dt=ke?L_(o,b):void 0,$e=je?D_(o,j,b):void 0,vt=te?I_(o,b):void 0,Rt=de?N_(o,b):void 0,zt=Te&&le&&b<le.length?lt(le[b]):void 0,hn=ge&&$&&b<$.length?$[b]:void 0,Tt=Le&&oe&&b<oe.length?lt(oe[b]):void 0,Fe=Be&&he&&b<he.length?he[b]:void 0,xt=(Ae*2-1)*Xe,Ct=0,Ut=d>0?-Ae*w*50:0,ht=1+(1-Ae)*d*2,gt=Math.min(1,E+N*M),Ne={x:Ct,y:xt,z:Ut,size:Math.max(2,p*ht*(.35+N*1.35)),red:gt,green:gt,blue:gt,opacity:Math.min(1,(.08+N*1.9)*X),r:gt,g:gt,b:gt,a:Math.min(1,(.08+N*1.9)*X),particleCount:1,shapeType:"square"};t.ruleEngineEnabled!==!1&&this._compiledRules.spawnRuleCount>0&&this.applySpawnRulesToParticle({inputs:this._buildRuleInputs(e,{binEnergy:N,frequencyHz:ae,normFreq:Ae,pan:Qe,spectralCentroid:dt,spectralFlux:$e,spectralFlatness:vt,inharmonicity:Rt,binMagnitude:zt,binFlux:hn,binPhaseDeviation:Tt,binEnvelope:Fe,time:x,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:at,canvasHeightUnits:L,canvasBoundaryLeft:we,canvasBoundaryRight:et,canvasBoundaryTop:Re,canvasBoundaryBottom:R,audioLengthSec:H}),particle:Ne});const Ft=Number.isFinite(Ne.particleCount)?lt(Ne.particleCount):1;if(Ft<=0||Ft<1&&Math.random()>Ft)return;this._pos[fe*3]=Number.isFinite(Ne.x)?Ne.x:Ct,this._pos[fe*3+1]=Number.isFinite(Ne.y)?Ne.y:xt,this._pos[fe*3+2]=Number.isFinite(Ne.z)?Ne.z:Ut,this._sz[fe]=Number.isFinite(Ne.size)?Math.max(0,Ne.size):Math.max(2,p);const fn=Number.isFinite(Ne.red)?Ne.red:Ne.r,jt=Number.isFinite(Ne.green)?Ne.green:Ne.g,Ze=Number.isFinite(Ne.blue)?Ne.blue:Ne.b,Pt=Number.isFinite(Ne.opacity)?Ne.opacity:Ne.a;let An=Number.isFinite(fn)?lt(fn):gt,y=Number.isFinite(jt)?lt(jt):gt,U=Number.isFinite(Ze)?lt(Ze):gt;if(this._compiledRules.usesParticleHsb){const V=os(An,y,U),W=gs(Ne.hue),O=Number.isFinite(Ne.saturation)?lt(Ne.saturation):V.s,se=Number.isFinite(Ne.brightness)?lt(Ne.brightness):V.v,me=va(W??V.h,O,se);An=me.r,y=me.g,U=me.b}this._col[fe*3]=An,this._col[fe*3+1]=y,this._col[fe*3+2]=U,this._alpha[fe]=Number.isFinite(Pt)?Math.max(0,Math.min(1,Pt)):Math.min(1,(.08+N*1.9)*X),this._shape[fe]=Hl(Ne.shapeType),this._pan[fe]=Number.isFinite(Qe)?Math.max(-1,Math.min(1,Qe)):0,fe++};for(let b=0;b<l;b++){const B=f(b);if(B<_||B>T||!ze(b))continue;const N=o[b],ae=(le&&b<le.length?lt(le[b]):N/255)*m;if(!(N<=ne)&&(pe(b,N,ae),fe>=this._N))break}if(fe===0&&ie>0){const b=[];for(let N=0;N<l;N++){const X=f(N);X>=_&&X<=T&&o[N]>0&&ze(N)&&b.push(N)}b.sort((N,X)=>o[X]-o[N]);const B=Math.min(96,b.length);for(let N=0;N<B&&fe<this._N;N++){const X=b[N],ae=o[X],ee=ae/255,Ae=Math.max(.08,ee*m);pe(X,ae,Ae,.85)}}h===1?(this._paintCount=fe,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._pruneArchive(t,x)):(this._paintCount=0,this._visibleCount=fe,this._geo.setDrawRange(0,fe)),t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{time:x,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:at,canvasHeightUnits:L,canvasBoundaryLeft:we,canvasBoundaryRight:et,canvasBoundaryTop:Re,canvasBoundaryBottom:R,audioLengthSec:H})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{time:x,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:at,canvasHeightUnits:L,canvasBoundaryLeft:we,canvasBoundaryRight:et,canvasBoundaryTop:Re,canvasBoundaryBottom:R,audioLengthSec:H})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{time:x,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:at,canvasHeightUnits:L,canvasBoundaryLeft:we,canvasBoundaryRight:et,canvasBoundaryTop:Re,canvasBoundaryBottom:R,audioLengthSec:H})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;this._aPos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose()}}const k_="http://localhost:8000",H_="audio/wav",V_=new Set(["m4a","aac","flac","alac","aiff"]);function G_(n){const e=String(n||"").lastIndexOf(".");return e<0?"":n.slice(e+1).toLowerCase()}function W_(n,e){const t=String(n).replace(/[\\/:*?"<>|]+/g,"_"),i=t.lastIndexOf(".");return i<0?`${t}.${e}`:`${t.slice(0,i)}.${e}`}function X_(n){const e=G_(n==null?void 0:n.name);return e?V_.has(e):!1}async function q_(n){const e=new FormData;e.append("file",n);const t=await fetch(`${k_}/api/audio/convert`,{method:"POST",body:e});if(!t.ok){const s=await t.text().catch(()=>"");throw new Error(s||`Audio conversion failed (${t.status}).`)}const i=await t.blob();if(!i||i.size===0)throw new Error("Converted audio is empty.");const r=W_((n==null?void 0:n.name)||"audio","wav");return new File([i],r,{type:H_})}function zi(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function bt(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:i.setAttribute(r,s);return i}function $_(n){if(!n){console.warn("[AudioPlayer] No container element.");const k=new Audio;return k.crossOrigin="anonymous",{audioEl:k,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=bt("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"});r.textContent="«";const s=bt("div","audio-player__body"),a=bt("div","audio-player__file-row"),o=bt("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});o.style.display="none";const l=bt("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});l.textContent="♫";const c=bt("span","audio-player__file-name",{text:"No file loaded"});a.append(o,l);const u=bt("div","audio-player__transport"),f=bt("button","audio-player__btn audio-player__btn--play",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});f.textContent="▶";const h=bt("button","audio-player__btn",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});h.textContent="■";const m=bt("button","audio-player__btn",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});m.textContent="<<";const v=bt("button","audio-player__btn",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});v.textContent=">>";const g=bt("button","audio-player__btn",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});g.textContent="PNG";const p=bt("button","audio-player__btn",{id:"btn-paint-all","aria-label":"Paint all",disabled:"true",title:"Run through full audio and stop"});p.textContent="PAINT ALL";const d=bt("div","audio-player__speed-wrap"),w=bt("input","audio-player__speed-input",{type:"number",min:"0.1",max:"16",step:"0.1",value:"1","aria-label":"Playback speed multiplier",title:"Playback speed multiplier (0.1 to 16)"}),A=bt("span","audio-player__speed-suffix",{text:"x"});d.append(w,A),u.append(f,h,m,v,g,p,d);const _=bt("div","audio-player__progress-row"),C=bt("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function T(k){C.style.background=`linear-gradient(90deg, var(--color-accent) ${k}%, var(--color-border) ${k}%)`}T(0);const P=bt("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),I=bt("div","audio-player__progress-meta");I.append(c,P),_.append(C,I),s.append(a,u,_),n.append(s,r);function E(k,Z=""){o.disabled=k,f.disabled=k||!e.src,h.disabled=k||!e.src,m.disabled=k||!e.src,v.disabled=k||!e.src,p.disabled=k||!e.src,w.disabled=k||!e.src,k&&Z&&(c.textContent=Z)}function M(k){const Z=Math.max(.1,Math.min(16,Number(k)));Number.isFinite(Z)&&(e.playbackRate=Z,w.value=String(Number(Z.toFixed(2))),n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:Z},bubbles:!0})))}function D(k,Z=(k==null?void 0:k.name)||"Audio loaded"){k&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(k),e.load(),c.textContent=Z,t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active"),C.value="0",T(0),P.textContent="0:00 / –:––",Y(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:k,audioEl:e},bubbles:!0})))}function Y(){f.disabled=!1,h.disabled=!1,m.disabled=!1,v.disabled=!1,p.disabled=!1,w.disabled=!1}o.addEventListener("change",async k=>{const Z=k.target.files[0];if(Z){E(!0,`Loading ${Z.name}...`);try{const j=X_(Z)?await(async()=>(c.textContent=`Converting ${Z.name}...`,q_(Z)))():Z;D(j,j.name)}catch(j){console.warn("[AudioPlayer] conversion failed, using original file:",j),D(Z,Z.name)}finally{E(!1),o.value=""}}}),f.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(k){console.warn("[AudioPlayer] play() failed:",k.message)}}),e.addEventListener("play",()=>{t=!0,f.textContent="⏸︎",f.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,f.textContent="▶",f.classList.remove("audio-player__btn--active")}),h.addEventListener("click",()=>{e.pause(),e.currentTime=0,C.value="0",T(0),P.textContent=`0:00 / ${zi(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),m.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),v.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),g.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),p.addEventListener("click",()=>{p.disabled||n.dispatchEvent(new CustomEvent("player:paintall",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:paintall-state",k=>{var j;const Z=!!((j=k==null?void 0:k.detail)!=null&&j.running);p.disabled=Z||!e.src,w.disabled=Z||!e.src,p.textContent=Z?"PAINTING...":"PAINT ALL"}),w.addEventListener("keydown",k=>{k.key==="Enter"&&(k.preventDefault(),M(w.value),w.blur())});let q=!1;return C.addEventListener("mousedown",()=>{q=!0}),C.addEventListener("touchstart",()=>{q=!0},{passive:!0}),C.addEventListener("input",()=>{const k=parseFloat(C.value);T(k),e.duration&&(P.textContent=`${zi(e.duration*k/100)} / ${zi(e.duration)}`)}),C.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(C.value)/100*e.duration),q=!1}),e.addEventListener("timeupdate",()=>{if(q)return;const k=e.currentTime,Z=e.duration;if(!isFinite(Z)||Z===0)return;const j=k/Z*100;C.value=String(j),T(j),P.textContent=`${zi(k)} / ${zi(Z)}`}),e.addEventListener("loadedmetadata",()=>{P.textContent=`0:00 / ${zi(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),r.textContent=i?"»":"«",r.title=i?"Expand player":"Collapse player"}),{audioEl:e,getIsPlaying:()=>t}}function xa(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function Y_({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const s=xa("div","canvas-wrapper__resize-handle-right"),a=xa("div","canvas-wrapper__resize-handle-bottom"),o=xa("div","canvas-wrapper__resize-handle-corner");n.append(s,a,o);let l=null;function c(h,m,v){h.preventDefault();const g=h.touches?h.touches[0].clientX:h.clientX,p=h.touches?h.touches[0].clientY:h.clientY;l={type:m,startX:g,startY:p,startW:n.clientWidth,startH:n.clientHeight,handle:v},v.classList.add("dragging"),document.body.style.cursor=m==="right"?"ew-resize":m==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function u(h){if(!l)return;const m=h.touches?h.touches[0].clientX:h.clientX,v=h.touches?h.touches[0].clientY:h.clientY,g=m-l.startX,p=v-l.startY,d=160,w=120,A=e.getBoundingClientRect();let _=l.startW,C=l.startH;(l.type==="right"||l.type==="corner")&&(_=Math.max(d,Math.min(l.startW+g,A.width-4))),(l.type==="bottom"||l.type==="corner")&&(C=Math.max(w,Math.min(l.startH+p,window.innerHeight-4)));const T=i>0?_/i:1,P=r>0?C/r:1;i=_,r=C,n.style.width=`${_}px`,n.style.height=`${C}px`,t(_,C,T,P)}function f(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return s.addEventListener("mousedown",h=>c(h,"right",s)),a.addEventListener("mousedown",h=>c(h,"bottom",a)),o.addEventListener("mousedown",h=>c(h,"corner",o)),s.addEventListener("touchstart",h=>c(h,"right",s),{passive:!1}),a.addEventListener("touchstart",h=>c(h,"bottom",a),{passive:!1}),o.addEventListener("touchstart",h=>c(h,"corner",o),{passive:!1}),document.addEventListener("mousemove",u),document.addEventListener("mouseup",f),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",f),window.addEventListener("resize",()=>{if(!n.style.width){const h=e.clientWidth,m=e.clientHeight,v=i>0?h/i:1,g=r>0?m/r:1;i=h,r=m,t(h,m,v,g)}}),{setSize(h,m){const v=i>0?h/i:1,g=r>0?m/r:1;i=h,r=m,n.style.width=`${h}px`,n.style.height=`${m}px`,t(h,m,v,g)},getSize(){return{w:i,h:r}}}}const Bs=document.getElementById("three-canvas"),br=document.getElementById("canvas-wrapper"),Ln=document.getElementById("canvas-col"),mt=new Lc({canvas:Bs,antialias:!0});mt.setPixelRatio(window.devicePixelRatio);mt.setClearColor(0,1);mt.autoClear=!0;const Sr=new Bd,Kc=new Yd(180);Kc.userData.excludeFromPng=!0;Sr.add(Kc);const Dt=new Tc(-1,1,1,-1,.001,5e3),an=new on(55,1,.001,5e3);let Se=Dt;const St=new z(0,0,0),Ro=new z(0,0,420),Vl=Ro.length();for(const n of[Dt,an])n.position.copy(Ro),n.up.set(0,1,0),n.lookAt(St);function Co(){const e=Me.cameraProjection==="perspective"?an:Dt;e!==Se&&(e.position.copy(Se.position),e.quaternion.copy(Se.quaternion),e.up.copy(Se.up),e.zoom=Se.zoom,e.lookAt(St),e.updateProjectionMatrix(),Se=e,jn())}const pt={radius:420,azimuth:0,elevation:0};function jn(){const n=Se.position.x-St.x,e=Se.position.y-St.y,t=Se.position.z-St.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);pt.radius=i,pt.azimuth=Math.atan2(n,t),pt.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function As(){const n=Math.cos(pt.elevation);Se.position.set(St.x+pt.radius*n*Math.sin(pt.azimuth),St.y+pt.radius*Math.sin(pt.elevation),St.z+pt.radius*n*Math.cos(pt.azimuth)),Se.lookAt(St)}function Jc(n){const e=String(n||"orthoXY");return e==="isometric"?{azimuth:Math.PI/4,elevation:Math.asin(1/Math.sqrt(3))}:e==="fortyFive"?{azimuth:Math.PI/4,elevation:Math.PI/4}:e==="topXZ"?{azimuth:0,elevation:Math.PI/2-.001}:e==="orthoYZ"?{azimuth:Math.PI/2,elevation:0}:{azimuth:0,elevation:0}}function Qc(){St.set(0,0,0);const n=Math.max(1,mt.domElement.clientWidth||Ln.clientWidth||window.innerWidth),e=Math.max(1,mt.domElement.clientHeight||Ln.clientHeight||window.innerHeight);Lo(n,e);for(const t of[Dt,an])t.position.copy(Ro),t.up.set(0,1,0),t.rotation.set(0,0,0),t.zoom=1,t.lookAt(St),t.updateProjectionMatrix();Co(),Po(!0),jn()}function Po(n=!1){if(Me.cameraProjection==="perspective")return;const e=String(Me.cameraAxoPreset||"orthoXY"),t=n?Vl:Math.max(40,Number(pt.radius)||Vl),{azimuth:i,elevation:r}=Jc(e);pt.radius=t,pt.azimuth=i,pt.elevation=r,As(),jn()}jn();const qt={active:!1,button:-1,lastX:0,lastY:0};Bs.addEventListener("contextmenu",n=>n.preventDefault());Bs.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(qt.active=!0,qt.button=n.button,qt.lastX=n.clientX,qt.lastY=n.clientY,n.preventDefault())});window.addEventListener("mouseup",()=>{qt.active=!1,qt.button=-1});window.addEventListener("mousemove",n=>{if(!qt.active)return;const e=n.clientX-qt.lastX,t=n.clientY-qt.lastY;if(qt.lastX=n.clientX,qt.lastY=n.clientY,qt.button===0)pt.azimuth-=e*.006,pt.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,pt.elevation-t*.005)),As();else if(qt.button===1){const i=Math.max(1,mt.domElement.clientHeight||Ln.clientHeight||window.innerHeight),r=new z,s=new z,a=new z;Se.updateMatrixWorld();const o=Se.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),s.set(o[4],o[5],o[6]).normalize();let l=.01;if(Se.isOrthographicCamera)l=(Se.top-Se.bottom)/(Math.max(.01,Se.zoom)*i);else{const c=Math.max(.001,Se.position.distanceTo(St)),u=yo.degToRad(Se.fov);l=2*Math.tan(u*.5)*c/i,l/=Math.max(.01,Se.zoom)}a.copy(r).multiplyScalar(-e*l),a.addScaledVector(s,t*l),Se.position.add(a),St.add(a),jn()}else if(qt.button===2){const i=-e*.004,r=-t*.004;Se.rotateOnWorldAxis(new z(0,1,0),i),Se.rotateX(r)}});Bs.addEventListener("wheel",n=>{if(n.preventDefault(),Se.isPerspectiveCamera){const e=new z;Se.getWorldDirection(e);const t=Math.max(2,pt.radius*.08),i=(n.deltaY>0?1:-1)*t;Se.position.addScaledVector(e,i),jn()}else{const e=n.deltaY>0?.92:1.08;Se.zoom=Math.max(.05,Math.min(64,Se.zoom*e)),Se.updateProjectionMatrix()}},{passive:!1});function eu(n){if(!n)return;let e=!1;Number.isFinite(n.x)&&(Se.position.x=n.x,e=!0),Number.isFinite(n.y)&&(Se.position.y=n.y,e=!0),Number.isFinite(n.z)&&(Se.position.z=n.z,e=!0),e&&(Se.lookAt(St),jn()),Number.isFinite(n.zoom)&&(Se.zoom=Math.max(.05,Math.min(64,n.zoom)),Se.updateProjectionMatrix())}function j_(){const n=It.getVisibleBounds();if(n.empty){Qc();return}const e=1.18,t=Math.max(1,Number(window.devicePixelRatio)||1),i=mt.domElement.width/t,r=mt.domElement.height/t,s=Math.max(1,i||Number(Me.canvasWidth)||mt.domElement.clientWidth||Ln.clientWidth||window.innerWidth),a=Math.max(1,r||Number(Me.canvasHeight)||mt.domElement.clientHeight||Ln.clientHeight||window.innerHeight),o=s/a,l=n.size,c=n.center,u=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(St.copy(c),Se.isOrthographicCamera){const{azimuth:f,elevation:h}=Jc(Me.cameraAxoPreset);pt.azimuth=f,pt.elevation=h,pt.radius=Math.max(u*2.2,60),As(),Se.updateMatrixWorld(!0);const m=Se.matrixWorld.elements,v=new z(m[0],m[1],m[2]).normalize(),g=new z(m[4],m[5],m[6]).normalize(),p=[new z(n.min.x,n.min.y,n.min.z),new z(n.min.x,n.min.y,n.max.z),new z(n.min.x,n.max.y,n.min.z),new z(n.min.x,n.max.y,n.max.z),new z(n.max.x,n.min.y,n.min.z),new z(n.max.x,n.min.y,n.max.z),new z(n.max.x,n.max.y,n.min.z),new z(n.max.x,n.max.y,n.max.z)];let d=0,w=0;const A=new z;for(const T of p)A.copy(T).sub(c),d=Math.max(d,Math.abs(A.dot(v))),w=Math.max(w,Math.abs(A.dot(g)));const _=Math.max(d,w*o,u*.35),C=Math.max(w,d/Math.max(.001,o),u*.35);Dt.left=-_*e,Dt.right=_*e,Dt.top=C*e,Dt.bottom=-C*e,Dt.zoom=1,Dt.near=-Math.max(5e3,u*6),Dt.far=Math.max(5e3,u*6),Dt.updateProjectionMatrix()}else{an.lookAt(c),jn();const f=yo.degToRad(an.fov),h=u*e/Math.max(.001,Math.tan(f*.5)),m=2*Math.atan(Math.tan(f*.5)*(an.aspect||o)),v=u*e/Math.max(.001,Math.tan(m*.5));pt.radius=Math.max(v,h,40),As(),an.near=Math.max(.001,pt.radius-u*3),an.far=Math.max(an.near+1,pt.radius+u*6),an.updateProjectionMatrix()}jn()}function Lo(n,e){Dt.left=-n/2,Dt.right=n/2,Dt.top=e/2,Dt.bottom=-e/2,Dt.updateProjectionMatrix(),an.aspect=n/Math.max(1,e),an.updateProjectionMatrix(),mt.setSize(n,e,!1)}const Z_=Ln.clientWidth||window.innerWidth,K_=Ln.clientHeight||window.innerHeight;Lo(Z_,K_);Co();Po();const It=new z_(Sr,{maxParticles:Me.maxParticles??262144}),_s=It.onRulesChanged(Me.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:_s}));class tu{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.binAnalysisNode=null,this._workletReady=!1,this._workletLoadPromise=null,this._workletConfig={enabled:!1,needMagnitude:!1,needFlux:!1,needPhaseDeviation:!1,needEnvelope:!1,attackThreshold:.03,sustainFluxEps:.004,sustainMagThreshold:.08,decayThreshold:.008},this.FFT_SIZE=2048,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binEnvelope=null,this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.ctxState="none"}_ensureWorkletLoaded(){if(!(!this.ctx||this._workletReady)&&!this._workletLoadPromise){const e=new URL("/assets/BinAnalysisWorklet-CiAI5CfO.js",import.meta.url);this._workletLoadPromise=this.ctx.audioWorklet.addModule(e).then(()=>{this.binAnalysisNode=new AudioWorkletNode(this.ctx,"bin-analysis-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{fftSize:this.FFT_SIZE,hopSize:Math.floor(this.FFT_SIZE/4)}}),this.binAnalysisNode.port.onmessage=t=>{const i=t.data||{};i.type==="binMetrics"&&(i.magnitude&&(this._binMagnitude=new Float32Array(i.magnitude)),i.flux&&(this._binFlux=new Float32Array(i.flux)),i.phaseDeviation&&(this._binPhaseDeviation=new Float32Array(i.phaseDeviation)),i.envelope&&(this._binEnvelope=new Float32Array(i.envelope)))},this._workletReady=!0,this._postWorkletConfig()}).catch(t=>{console.warn("[AudioWorklet] Failed to load bin analysis worklet:",t)})}}_postWorkletConfig(){this.binAnalysisNode&&this.binAnalysisNode.port.postMessage({type:"config",config:this._workletConfig})}setRuleInputUsage(e=null){const t=Array.isArray(e==null?void 0:e.spawnedParticles)?e.spawnedParticles:[],i=new Set(t),r=i.has("binMagnitude")||i.has("binEnergy")||i.has("binFlux")||i.has("binEnvelope"),s=i.has("binFlux")||i.has("binEnvelope"),a=i.has("binPhaseDeviation"),o=i.has("binEnvelope");this._workletConfig.enabled=r||s||a||o,this._workletConfig.needMagnitude=r,this._workletConfig.needFlux=s,this._workletConfig.needPhaseDeviation=a,this._workletConfig.needEnvelope=o,this._postWorkletConfig()}init(e){var t,i,r,s,a,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.analyser.connect(this.ctx.destination),this._ensureWorkletLoaded()),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(s=this.analyserL)==null||s.disconnect(),(a=this.analyserR)==null||a.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null;let c=!1;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const u=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));u&&(this.streamNode=u,this.streamSource=this.ctx.createMediaStreamSource(u),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const f of[this.analyserL,this.analyserR])f.fftSize=256;const u=this.source||this.streamSource;u==null||u.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1),this.binAnalysisNode&&(u==null||u.connect(this.binAnalysisNode),c=!0)}catch{}try{const u=this.source||this.streamSource;this.binAnalysisNode&&!c&&(u==null||u.connect(this.binAnalysisNode))}catch{}}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}update(){var A,_,C;if(!this.analyser)return;((A=this.ctx)==null?void 0:A.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((_=this.ctx)==null?void 0:_.state)??"none",this._prevFrequencyDataBins.set(this.frequencyData),this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((C=this.ctx)==null?void 0:C.sampleRate)??44100,i=t/2,r=T=>T/e*i;let s=0,a=0,o=0,l=0,c=0,u=0,f=0,h=0;for(let T=0;T<e;T++){const P=this.frequencyData[T],I=r(T);I<250?(s+=P,a++):I<4e3?(o+=P,l++):(c+=P,u++),P>f&&(f=P,h=T)}this.bass=a?s/a/255:0,this.mid=l?o/l/255:0,this.high=u?c/u/255:0,this.peakFreq=Math.round(r(h)),this.peakByte=f;const m=A_(this.frequencyData,t),v=P_(m,t),g=w_(this.frequencyData,this._prevFrequencyDataBins),p=R_(this.frequencyData),d=C_(this.frequencyData,t);this.spectralCentroid=as(this.spectralCentroid,v,this.featureSmoothingAlpha),this.spectralFlux=as(this.spectralFlux,g,this.featureSmoothingAlpha),this.spectralFlatness=as(this.spectralFlatness,p,this.featureSmoothingAlpha),this.inharmonicity=as(this.inharmonicity,d,this.featureSmoothingAlpha),this._prevFrequencyData.set(this.frequencyData);let w=0;for(const T of this.timeDomainData)w+=((T-128)/128)**2;if(this.amplitude=Math.sqrt(w/this.timeDomainData.length),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let T=0,P=0;for(let I=0;I<this._freqL.length;I++)T+=this._freqL[I],P+=this._freqR[I];this.pan=(P-T)/(T+P+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}getPrevFrequencyData(){return this._prevFrequencyDataBins}getBinMagnitude(){return this._binMagnitude}getBinFlux(){return this._binFlux}getBinPhaseDeviation(){return this._binPhaseDeviation}getBinEnvelope(){return this._binEnvelope}}const it=new tu;it.setRuleInputUsage(_s==null?void 0:_s.requiredInputsByTarget);const Gl=document.getElementById("status-dot"),Wl=document.getElementById("status-text");function ya(n,e){Gl&&(Gl.className=n),Wl&&(Wl.textContent=e)}function nu(){const n=new WebSocket(`ws://${location.hostname}:8000/ws`);n.onopen=()=>ya("open","Backend connected"),n.onclose=()=>{ya("closed","Backend offline"),setTimeout(nu,3e3)},n.onerror=()=>ya("closed","WS error"),n.onmessage=()=>{},Us(e=>{n.readyState===WebSocket.OPEN&&n.send(JSON.stringify({type:"params_update",payload:e}))})}nu();const Dn=document.createElement("div");Dn.id="camera-hud";Dn.style.position="fixed";Dn.style.left="8px";Dn.style.bottom="8px";Dn.style.zIndex="220";Dn.style.display="flex";Dn.style.alignItems="center";Dn.style.gap="6px";const cn=document.createElement("button");cn.type="button";cn.title="Reset camera";cn.textContent="↺";cn.style.width="22px";cn.style.height="22px";cn.style.border="1px solid var(--color-border, #444)";cn.style.borderRadius="6px";cn.style.background="rgba(0,0,0,0.55)";cn.style.color="var(--color-text-muted, #bbb)";cn.style.cursor="pointer";cn.addEventListener("click",Qc);const un=document.createElement("button");un.type="button";un.title="Fit to visible particles";un.textContent="Fit";un.style.height="22px";un.style.padding="0 8px";un.style.border="1px solid var(--color-border, #444)";un.style.borderRadius="6px";un.style.background="rgba(0,0,0,0.55)";un.style.color="var(--color-text-muted, #bbb)";un.style.cursor="pointer";un.addEventListener("click",j_);const dn=document.createElement("button");dn.type="button";dn.title="Clear canvas";dn.textContent="Clean";dn.style.height="22px";dn.style.padding="0 8px";dn.style.border="1px solid var(--color-border, #444)";dn.style.borderRadius="6px";dn.style.background="rgba(0,0,0,0.55)";dn.style.color="var(--color-text-muted, #bbb)";dn.style.cursor="pointer";dn.addEventListener("click",()=>It.clear());const Tn=document.createElement("div");Tn.id="camera-readout";Tn.style.fontFamily="var(--font-mono, monospace)";Tn.style.fontSize="10px";Tn.style.color="var(--color-text-muted, #bbb)";Tn.style.background="rgba(0,0,0,0.35)";Tn.style.padding="4px 6px";Tn.style.borderRadius="4px";Tn.style.pointerEvents="none";Tn.textContent="cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 canv 0 × 0";Dn.append(cn,un,dn,Tn);document.body.appendChild(Dn);let Xl=0,Wi=0,ws="";function ql(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function $l(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function J_(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function Q_(){var e,t;if(ws)return $l(ws);const n=String(((e=it==null?void 0:it.audioEl)==null?void 0:e.currentSrc)||((t=it==null?void 0:it.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return $l(r)}catch{}return"audio"}async function iu(n){const e=n==null?void 0:n.src;if(!e)return null;const t=await fetch(e);return t.ok?t.blob():null}function ev(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.json`}async function tv(){var o;const n=ql(Q_(),"audio"),e=ql(J_(),"preset"),t=`${n} - ${e}.png`,i=Math.max(1,Math.floor(Number(Me.canvasWidth)||mt.domElement.width/Math.max(1,window.devicePixelRatio))),r=Math.max(1,Math.floor(Number(Me.canvasHeight)||mt.domElement.height/Math.max(1,window.devicePixelRatio))),s=document.createElement("canvas"),a=new Lc({canvas:s,antialias:!0,preserveDrawingBuffer:!0});try{const l=a.capabilities.maxTextureSize||8192,c=Math.min(i,l),u=Math.min(r,l),f=Math.max(1,Number(((o=mt.getPixelRatio)==null?void 0:o.call(mt))||window.devicePixelRatio||1)),h=Math.max(1,Math.floor(c/f)),m=Math.max(1,Math.floor(u/f));a.setPixelRatio(f),a.setSize(h,m,!1);let v=Se.clone();Se===Dt||v.isOrthographicCamera?(v=Se.clone(),v.updateProjectionMatrix()):v.isPerspectiveCamera&&(v.aspect=c/Math.max(1,u),v.updateProjectionMatrix());const g=[];Sr.traverse(w=>{var A;(A=w==null?void 0:w.userData)!=null&&A.excludeFromPng&&w.visible&&(g.push(w),w.visible=!1)}),a.setClearColor(It.getBackgroundColor(),1),It.setViewportHeight(a.domElement.height),a.render(Sr,v);for(const w of g)w.visible=!0;const p=await new Promise(w=>s.toBlob(w,"image/png"));if(!p)throw new Error("PNG export failed (empty blob).");const d=document.createElement("a");d.href=URL.createObjectURL(p),d.download=t,document.body.appendChild(d),d.click(),d.remove(),URL.revokeObjectURL(d.href),(c!==i||u!==r)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:i,h:r},exported:{w:c,h:u},maxTextureSize:l})}finally{It.setViewportHeight(mt.domElement.height),a.dispose()}}function Yl(n,e){n.dispatchEvent(new CustomEvent("player:paintall-state",{detail:{running:e},bubbles:!1}))}async function nv(n,e){var o,l,c,u,f,h,m,v,g;if(!((e==null?void 0:e.duration)>0))return;const t=++Wi,i=await iu(e),r=i?URL.createObjectURL(i):e.currentSrc||e.src;if(!r)return;const s=new Audio;s.crossOrigin="anonymous",s.src=r,s.preload="auto",s.currentTime=0,s.muted=!0,s.volume=0,typeof s.preservesPitch=="boolean"&&(s.preservesPitch=!1),s.playbackRate=16,s.style.display="none",document.body.appendChild(s);const a=new tu;a.setRuleInputUsage((o=It.getRuleCompileState())==null?void 0:o.requiredInputsByTarget),Yl(n,!0);try{It.clear(),await new Promise((w,A)=>{const _=()=>{T(),w()},C=()=>{T(),A(new Error("Paint-all audio metadata failed to load."))},T=()=>{s.removeEventListener("loadedmetadata",_),s.removeEventListener("canplay",_),s.removeEventListener("error",C)};s.addEventListener("loadedmetadata",_,{once:!0}),s.addEventListener("canplay",_,{once:!0}),s.addEventListener("error",C,{once:!0}),s.load()}),a.init(s),((l=a.ctx)==null?void 0:l.state)==="suspended"&&await a.ctx.resume(),await s.play();let p=-1,d=0;for(;t===Wi&&!s.ended;){await new Promise(P=>requestAnimationFrame(P)),a.update();const w=mt.domElement.width/window.devicePixelRatio,A=mt.domElement.height/window.devicePixelRatio,_=co(),C={...Me,persistMode:1,cameraState:{x:Se.position.x,y:Se.position.y,z:Se.position.z,zoom:Se.zoom},cameraCanvasWidthUnits:_.w,cameraCanvasHeightUnits:_.h,cameraCanvasBoundaryLeft:_.left,cameraCanvasBoundaryRight:_.right,cameraCanvasBoundaryTop:_.top,cameraCanvasBoundaryBottom:_.bottom};It.update(a,C,w,A),eu(It.getCameraOutput());const T=Number(s.currentTime)||0;if(T>p+1e-4?(p=T,d=0):d++,s.paused&&!s.ended)try{await s.play()}catch{break}if(d>120&&T>=Math.max(0,(s.duration||0)-.25)){s.currentTime=s.duration||T;break}}}finally{s.pause(),s.src="",s.remove(),i&&URL.revokeObjectURL(r);try{(c=a.source)==null||c.disconnect()}catch{}try{(u=a.streamSource)==null||u.disconnect()}catch{}try{(f=a.splitter)==null||f.disconnect()}catch{}try{(h=a.analyserL)==null||h.disconnect()}catch{}try{(m=a.analyserR)==null||m.disconnect()}catch{}try{(v=a.analyser)==null||v.disconnect()}catch{}try{await((g=a.ctx)==null?void 0:g.close())}catch{}Yl(n,!1)}}function co(){let n=0,e=0;if(Se.isOrthographicCamera)n=Math.abs((Se.right-Se.left)/Math.max(.01,Se.zoom)),e=Math.abs((Se.top-Se.bottom)/Math.max(.01,Se.zoom));else{const r=Math.max(.001,Se.position.distanceTo(St)),s=yo.degToRad(Se.fov);e=2*Math.tan(s*.5)*r/Math.max(.01,Se.zoom),n=e*Se.aspect}const t=n*.5,i=e*.5;return{w:n,h:e,left:St.x-t,right:St.x+t,top:St.y+i,bottom:St.y-i}}function ru(){requestAnimationFrame(ru),Xl++,it.update();const n=!!(it.audioEl&&!it.audioEl.paused&&!it.audioEl.ended);if(n&&!it.analyser&&it.audioEl&&it.init(it.audioEl),n){const t=mt.domElement.width/window.devicePixelRatio,i=mt.domElement.height/window.devicePixelRatio,r=co(),s={...Me,cameraState:{x:Se.position.x,y:Se.position.y,z:Se.position.z,zoom:Se.zoom},cameraCanvasWidthUnits:r.w,cameraCanvasHeightUnits:r.h,cameraCanvasBoundaryLeft:r.left,cameraCanvasBoundaryRight:r.right,cameraCanvasBoundaryTop:r.top,cameraCanvasBoundaryBottom:r.bottom};It.update(it,s,t,i),eu(It.getCameraOutput())}const e=It.getBackgroundColor();if(mt.setClearColor(e,1),It.setViewportHeight(mt.domElement.height),mt.render(Sr,Se),Xl%6===0){const t=(Se.rotation.x*180/Math.PI).toFixed(2),i=(Se.rotation.y*180/Math.PI).toFixed(2),r=(Se.rotation.z*180/Math.PI).toFixed(2),s=Se.position.x.toFixed(2),a=Se.position.y.toFixed(2),o=Se.position.z.toFixed(2),l=co(),c=l.w,u=l.h;Tn.textContent=`cam p(${s},${a},${o}) r(${t},${i},${r}) pts ${It.getVisibleCount()} fft ${it.peakByte} amp ${it.amplitude.toFixed(3)} sc ${it.spectralCentroid.toFixed(3)} sf ${it.spectralFlux.toFixed(3)} sfl ${it.spectralFlatness.toFixed(3)} inh ${it.inharmonicity.toFixed(3)} canv ${c.toFixed(2)} × ${u.toFixed(2)}`}}ru();{const n=document.getElementById("audio-player"),{audioEl:e}=$_(n);it.audioEl=e;let t=null;e.addEventListener("play",async()=>{var s;it.init(e),((s=it.ctx)==null?void 0:s.state)==="suspended"&&await it.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var s;Wi++,it.init(e),((s=it.ctx)==null?void 0:s.state)==="suspended"&&await it.ctx.resume()}),n.addEventListener("player:play",()=>{Wi++}),n.addEventListener("player:pause",()=>{Wi++}),n.addEventListener("player:stop",()=>{Wi++}),n.addEventListener("player:savepng",async()=>{await tv()}),n.addEventListener("player:paintall",async()=>{await nv(n,e)}),n.addEventListener("player:playbackrate",s=>{var o;const a=Number((o=s==null?void 0:s.detail)==null?void 0:o.rate);Number.isFinite(a)&&(e.playbackRate=Math.max(.1,Math.min(16,a)))}),n.addEventListener("player:fileloaded",s=>{var o;const a=(o=s==null?void 0:s.detail)==null?void 0:o.file;t=a instanceof File?a:null,ws=(t==null?void 0:t.name)||""});const i=async()=>{try{const s=To(),a=t||await iu(e),o=a?await Kg(a):"",l=Qg({params:s,presetName:"",audioDataUrl:o,audioFileName:(t==null?void 0:t.name)||"project-audio.wav"});t_(l,ev())}catch(s){console.warn("[Project] save failed:",s)}},r=async s=>{var a,o,l;try{s.params&&typeof s.params=="object"&&Fs(s.params);const c=(a=s==null?void 0:s.audio)==null?void 0:a.dataUrl;if(typeof c=="string"&&c.startsWith("data:")){const u=((o=s==null?void 0:s.audio)==null?void 0:o.fileName)||"project-audio.wav",f=Jg(c,u);t=f,ws=(f==null?void 0:f.name)||"",(l=e.src)!=null&&l.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(f),e.load(),it.audioEl=e}}catch(c){console.warn("[Project] load failed:",c)}};n.addEventListener("player:saveproject",i),n.addEventListener("player:loadproject",async s=>{var a;await r(((a=s==null?void 0:s.detail)==null?void 0:a.payload)||{})}),window.addEventListener("seesound:project-save-request",i),window.addEventListener("seesound:project-load-request",async s=>{var a;await r(((a=s==null?void 0:s.detail)==null?void 0:a.payload)||{})})}let ii=null,uo=!1;ii=Y_({wrapper:br,column:Ln,onResize(n,e){if(Lo(n,e),Do(n,e),!uo){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(Me.canvasWidth)!==t||Number(Me.canvasHeight)!==i)&&Fs({canvasWidth:t,canvasHeight:i})}}});function Do(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(Me.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function su(){const e=Math.max(5,Math.min(400,Math.floor(Number(Me.canvasScale)||100)))/100;br.style.transformOrigin="center center",br.style.transform=`scale(${e})`}function au(){var i;const n=((i=ii==null?void 0:ii.getSize)==null?void 0:i.call(ii))||{},e=Math.max(160,Math.floor(n.w||br.clientWidth||Ln.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||br.clientHeight||Ln.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function ou(){if(!ii)return;const n=au(),e=Math.max(160,Math.floor(Number(Me.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(Me.canvasHeight)||n.h));if(e===n.w&&t===n.h){Do(n.w,n.h);return}uo=!0,ii.setSize(e,t),uo=!1}ou();su();{const n=au();(Number(Me.canvasWidth)!==n.w||Number(Me.canvasHeight)!==n.h)&&Fs({canvasWidth:n.w,canvasHeight:n.h}),Do(n.w,n.h)}Us((n,e)=>{if(e==="cameraProjection"&&Co(),(e==="cameraProjection"||e==="cameraAxoPreset")&&Po(),(e==="canvasWidth"||e==="canvasHeight")&&ou(),e==="canvasScale"&&su(),e==="maxParticles"){const t=Math.max(4096,Math.floor(Me.maxParticles||4096));Me.maxParticles!==t&&(Me.maxParticles=t),It.setMaxParticles(t)}if(e==="ruleBlocks"){const t=It.onRulesChanged(Me.ruleBlocks??[]);it.setRuleInputUsage(t==null?void 0:t.requiredInputsByTarget),window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});__(document.getElementById("control-panel"));const jl=Array.isArray(Me.ruleBlocks)?Me.ruleBlocks.length:0,zn=It.getRuleCompileState(),Zl=(zn==null?void 0:zn.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${Ss} compile=${Zl} rules=${jl}`,{schemaVersion:Ss,compileStatus:Zl,compileTimeMs:(zn==null?void 0:zn.compileTimeMs)??0,compileError:(zn==null?void 0:zn.compileError)??null,ruleCount:jl,debug:Gg});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
