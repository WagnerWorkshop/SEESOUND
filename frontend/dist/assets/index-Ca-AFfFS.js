(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const po="171",du=0,Oo=1,hu=2,ic=1,fu=2,Un=3,oi=0,Xt=1,On=2,ri=0,si=1,Gi=2,Bo=3,zo=4,Ma=5,Bn=100,pu=101,mu=102,gu=103,_u=104,vu=200,xu=201,Mu=202,yu=203,_r=204,vr=205,bu=206,Su=207,Eu=208,Tu=209,Au=210,wu=211,Ru=212,Cu=213,Pu=214,ya=0,ba=1,Sa=2,Yi=3,Ea=4,Ta=5,Aa=6,wa=7,rc=0,Lu=1,Nu=2,ai=0,Du=1,Iu=2,Uu=3,Fu=4,Ou=5,Bu=6,zu=7,sc=300,ji=301,Zi=302,Ra=303,Ca=304,ws=306,Pa=1e3,yi=1001,La=1002,vn=1003,ku=1004,Lr=1005,Tn=1006,zs=1007,bi=1008,Gn=1009,ac=1010,oc=1011,xr=1012,mo=1013,Si=1014,zn=1015,Tr=1016,go=1017,_o=1018,Ki=1020,lc=35902,cc=1021,uc=1022,_n=1023,dc=1024,hc=1025,qi=1026,Ji=1027,fc=1028,vo=1029,pc=1030,xo=1031,Mo=1033,ls=33776,cs=33777,us=33778,ds=33779,Na=35840,Da=35841,Ia=35842,Ua=35843,Fa=36196,Oa=37492,Ba=37496,za=37808,ka=37809,Ha=37810,Va=37811,Ga=37812,Wa=37813,Xa=37814,qa=37815,$a=37816,Ya=37817,ja=37818,Za=37819,Ka=37820,Ja=37821,hs=36492,Qa=36494,eo=36495,mc=36283,to=36284,no=36285,io=36286,Hu=3200,Vu=3201,Gu=0,Wu=1,ti="",nn="srgb",Qi="srgb-linear",_s="linear",ct="srgb",Ai=7680,ko=519,Xu=512,qu=513,$u=514,gc=515,Yu=516,ju=517,Zu=518,Ku=519,Ho=35044,Ju=35048,Vo="300 es",kn=2e3,vs=2001;class tr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Go=1234567;const pr=Math.PI/180,Mr=180/Math.PI;function nr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[n&255]+Nt[n>>8&255]+Nt[n>>16&255]+Nt[n>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[t&63|128]+Nt[t>>8&255]+"-"+Nt[t>>16&255]+Nt[t>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function Ze(n,e,t){return Math.max(e,Math.min(t,n))}function yo(n,e){return(n%e+e)%e}function Qu(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function ed(n,e,t){return n!==e?(t-n)/(e-n):0}function mr(n,e,t){return(1-t)*n+t*e}function td(n,e,t,i){return mr(n,e,1-Math.exp(-t*i))}function nd(n,e=1){return e-Math.abs(yo(n,e*2)-e)}function id(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rd(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function sd(n,e){return n+Math.floor(Math.random()*(e-n+1))}function ad(n,e){return n+Math.random()*(e-n)}function od(n){return n*(.5-Math.random())}function ld(n){n!==void 0&&(Go=n);let e=Go+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cd(n){return n*pr}function ud(n){return n*Mr}function dd(n){return(n&n-1)===0&&n!==0}function hd(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function fd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function pd(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*u,o*c);break;case"XZX":n.set(o*u,l*_,l*m,o*c);break;case"YXY":n.set(l*m,o*u,l*_,o*c);break;case"ZYZ":n.set(l*_,l*m,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Hi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ot(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bo={DEG2RAD:pr,RAD2DEG:Mr,generateUUID:nr,clamp:Ze,euclideanModulo:yo,mapLinear:Qu,inverseLerp:ed,lerp:mr,damp:td,pingpong:nd,smoothstep:id,smootherstep:rd,randInt:sd,randFloat:ad,randFloatSpread:od,seededRandom:ld,degToRad:cd,radToDeg:ud,isPowerOfTwo:dd,ceilPowerOfTwo:hd,floorPowerOfTwo:fd,setQuaternionFromProperEuler:pd,normalize:Ot,denormalize:Hi};class ut{constructor(e=0,t=0){ut.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(e,t,i,r,s,a,o,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],m=i[5],_=i[8],g=r[0],p=r[3],h=r[6],S=r[1],E=r[4],v=r[7],R=r[2],w=r[5],C=r[8];return s[0]=a*g+o*S+l*R,s[3]=a*p+o*E+l*w,s[6]=a*h+o*v+l*C,s[1]=c*g+u*S+d*R,s[4]=c*p+u*E+d*w,s[7]=c*h+u*v+d*C,s[2]=f*g+m*S+_*R,s[5]=f*p+m*E+_*w,s[8]=f*h+m*v+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,m=c*s-a*l,_=t*d+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=d*g,e[1]=(r*c-u*i)*g,e[2]=(o*i-r*a)*g,e[3]=f*g,e[4]=(u*t-r*l)*g,e[5]=(r*s-o*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(a*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ks.makeScale(e,t)),this}rotate(e){return this.premultiply(ks.makeRotation(-e)),this}translate(e,t){return this.premultiply(ks.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ks=new Ve;function _c(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function xs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function md(){const n=xs("canvas");return n.style.display="block",n}const Wo={};function Vi(n){n in Wo||(Wo[n]=!0,console.warn(n))}function gd(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function _d(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vd(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xo=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qo=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xd(){const n={enabled:!0,workingColorSpace:Qi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ct&&(r.r=Vn(r.r),r.g=Vn(r.g),r.b=Vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(r.r=$i(r.r),r.g=$i(r.g),r.b=$i(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?_s:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Qi]:{primaries:e,whitePoint:i,transfer:_s,toXYZ:Xo,fromXYZ:qo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:Xo,fromXYZ:qo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),n}const rt=xd();function Vn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $i(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wi;class Md{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{wi===void 0&&(wi=xs("canvas")),wi.width=e.width,wi.height=e.height;const i=wi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=wi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Vn(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Vn(t[i]/255)*255):t[i]=Vn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yd=0;class vc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Hs(r[a].image)):s.push(Hs(r[a]))}else s=Hs(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Hs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Md.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bd=0;class qt extends tr{constructor(e=qt.DEFAULT_IMAGE,t=qt.DEFAULT_MAPPING,i=yi,r=yi,s=Tn,a=bi,o=_n,l=Gn,c=qt.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=nr(),this.name="",this.source=new vc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Pa:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case La:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Pa:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case La:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=sc;qt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,v=(m+1)/2,R=(h+1)/2,w=(u+f)/4,C=(d+g)/4,D=(_+p)/4;return E>v&&E>R?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=w/i,s=C/i):v>R?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=w/r,s=D/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=C/s,r=D/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(d-g)/S,this.z=(f-u)/S,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sd extends tr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new vc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ei extends Sd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class xc extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ed extends qt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],g=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(d!==g||l!==f||c!==m||u!==_){let p=1-o;const h=l*f+c*m+u*_+d*g,S=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const R=Math.sqrt(E),w=Math.atan2(R,h*S);p=Math.sin(p*w)/R,o=Math.sin(o*w)/R}const v=o*S;if(l=l*p+f*v,c=c*p+m*v,u=u*p+_*v,d=d*p+g*v,p===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*d+l*m-c*f,e[t+1]=l*_+u*f+c*d-o*m,e[t+2]=c*_+u*m+o*f-l*d,e[t+3]=u*_-o*d-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"YXZ":this._x=f*u*d+c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"ZXY":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d-f*m*_;break;case"ZYX":this._x=f*u*d-c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d+f*m*_;break;case"YZX":this._x=f*u*d+c*m*_,this._y=c*m*d+f*u*_,this._z=c*u*_-f*m*d,this._w=c*u*d-f*m*_;break;case"XZY":this._x=f*u*d-c*m*_,this._y=c*m*d-f*u*_,this._z=c*u*_+f*m*d,this._w=c*u*d+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],f=i+o+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>d){const m=2*Math.sqrt(1+i-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-i-d);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion($o.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion($o.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Ze(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vs.copy(this).projectOnVector(e),this.sub(Vs)}reflect(e){return this.sub(Vs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ze(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vs=new B,$o=new Ar;class wr{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(s,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Nr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(e.matrixWorld),this.union(Nr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ar),Dr.subVectors(this.max,ar),Ri.subVectors(e.a,ar),Ci.subVectors(e.b,ar),Pi.subVectors(e.c,ar),Yn.subVectors(Ci,Ri),jn.subVectors(Pi,Ci),di.subVectors(Ri,Pi);let t=[0,-Yn.z,Yn.y,0,-jn.z,jn.y,0,-di.z,di.y,Yn.z,0,-Yn.x,jn.z,0,-jn.x,di.z,0,-di.x,-Yn.y,Yn.x,0,-jn.y,jn.x,0,-di.y,di.x,0];return!Gs(t,Ri,Ci,Pi,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Gs(t,Ri,Ci,Pi,Dr))?!1:(Ir.crossVectors(Yn,jn),t=[Ir.x,Ir.y,Ir.z],Gs(t,Ri,Ci,Pi,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new B,new B,new B,new B,new B,new B,new B,new B],hn=new B,Nr=new wr,Ri=new B,Ci=new B,Pi=new B,Yn=new B,jn=new B,di=new B,ar=new B,Dr=new B,Ir=new B,hi=new B;function Gs(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){hi.fromArray(n,s);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),l=e.dot(hi),c=t.dot(hi),u=i.dot(hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Td=new wr,or=new B,Ws=new B;class Rr{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Td.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);const t=or.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(or,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ws.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(Ws)),this.expandByPoint(or.copy(e.center).sub(Ws))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new B,Xs=new B,Ur=new B,Zn=new B,qs=new B,Fr=new B,$s=new B;class So{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xs.copy(e).add(t).multiplyScalar(.5),Ur.copy(t).sub(e).normalize(),Zn.copy(this.origin).sub(Xs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ur),o=Zn.dot(this.direction),l=-Zn.dot(Ur),c=Zn.lengthSq(),u=Math.abs(1-a*a);let d,f,m,_;if(u>0)if(d=a*l-o,f=a*o-l,_=s*u,d>=0)if(f>=-_)if(f<=_){const g=1/u;d*=g,f*=g,m=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;else f<=-_?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c):f<=_?(d=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),m=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),m=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Xs).addScaledVector(Ur,f),m}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const i=Ln.dot(this.direction),r=Ln.dot(Ln)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,i,r,s){qs.subVectors(t,e),Fr.subVectors(i,e),$s.crossVectors(qs,Fr);let a=this.direction.dot($s),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Zn.subVectors(this.origin,e);const l=o*this.direction.dot(Fr.crossVectors(Zn,Fr));if(l<0)return null;const c=o*this.direction.dot(qs.cross(Zn));if(c<0||l+c>a)return null;const u=-o*Zn.dot($s);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,i,r,s,a,o,l,c,u,d,f,m,_,g,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,f,m,_,g,p)}set(e,t,i,r,s,a,o,l,c,u,d,f,m,_,g,p){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=m,h[7]=_,h[11]=g,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),a=1/Li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,m=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-o*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,m=l*d,_=c*u,g=c*d;t[0]=f+g*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=g+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,m=l*d,_=c*u,g=c*d;t[0]=f-g*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=g-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,m=a*d,_=o*u,g=o*d;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*d,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=g-f*d,t[8]=_*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+_,t[10]=f-g*d}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,g=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=f*d+g,t[5]=a*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*u,t[10]=g*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ad,e,wd)}lookAt(e,t,i){const r=this.elements;return $t.subVectors(e,t),$t.lengthSq()===0&&($t.z=1),$t.normalize(),Kn.crossVectors(i,$t),Kn.lengthSq()===0&&(Math.abs(i.z)===1?$t.x+=1e-4:$t.z+=1e-4,$t.normalize(),Kn.crossVectors(i,$t)),Kn.normalize(),Or.crossVectors($t,Kn),r[0]=Kn.x,r[4]=Or.x,r[8]=$t.x,r[1]=Kn.y,r[5]=Or.y,r[9]=$t.y,r[2]=Kn.z,r[6]=Or.z,r[10]=$t.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],h=i[14],S=i[3],E=i[7],v=i[11],R=i[15],w=r[0],C=r[4],D=r[8],b=r[12],y=r[1],L=r[5],K=r[9],G=r[13],z=r[2],Y=r[6],q=r[10],ue=r[14],W=r[3],de=r[7],fe=r[11],Ee=r[15];return s[0]=a*w+o*y+l*z+c*W,s[4]=a*C+o*L+l*Y+c*de,s[8]=a*D+o*K+l*q+c*fe,s[12]=a*b+o*G+l*ue+c*Ee,s[1]=u*w+d*y+f*z+m*W,s[5]=u*C+d*L+f*Y+m*de,s[9]=u*D+d*K+f*q+m*fe,s[13]=u*b+d*G+f*ue+m*Ee,s[2]=_*w+g*y+p*z+h*W,s[6]=_*C+g*L+p*Y+h*de,s[10]=_*D+g*K+p*q+h*fe,s[14]=_*b+g*G+p*ue+h*Ee,s[3]=S*w+E*y+v*z+R*W,s[7]=S*C+E*L+v*Y+R*de,s[11]=S*D+E*K+v*q+R*fe,s[15]=S*b+E*G+v*ue+R*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],h=e[15];return _*(+s*l*d-r*c*d-s*o*f+i*c*f+r*o*m-i*l*m)+g*(+t*l*m-t*c*f+s*a*f-r*a*m+r*c*u-s*l*u)+p*(+t*c*d-t*o*m-s*a*d+i*a*m+s*o*u-i*c*u)+h*(-r*o*u-t*l*d+t*o*f+r*a*d-i*a*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],h=e[15],S=d*p*c-g*f*c+g*l*m-o*p*m-d*l*h+o*f*h,E=_*f*c-u*p*c-_*l*m+a*p*m+u*l*h-a*f*h,v=u*g*c-_*d*c+_*o*m-a*g*m-u*o*h+a*d*h,R=_*d*l-u*g*l-_*o*f+a*g*f+u*o*p-a*d*p,w=t*S+i*E+r*v+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=S*C,e[1]=(g*f*s-d*p*s-g*r*m+i*p*m+d*r*h-i*f*h)*C,e[2]=(o*p*s-g*l*s+g*r*c-i*p*c-o*r*h+i*l*h)*C,e[3]=(d*l*s-o*f*s-d*r*c+i*f*c+o*r*m-i*l*m)*C,e[4]=E*C,e[5]=(u*p*s-_*f*s+_*r*m-t*p*m-u*r*h+t*f*h)*C,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*h-t*l*h)*C,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*m+t*l*m)*C,e[8]=v*C,e[9]=(_*d*s-u*g*s-_*i*m+t*g*m+u*i*h-t*d*h)*C,e[10]=(a*g*s-_*o*s+_*i*c-t*g*c-a*i*h+t*o*h)*C,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*m-t*o*m)*C,e[12]=R*C,e[13]=(u*g*r-_*d*r+_*i*f-t*g*f-u*i*p+t*d*p)*C,e[14]=(_*o*r-a*g*r-_*i*l+t*g*l+a*i*p-t*o*p)*C,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*f+t*o*f)*C,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,f=s*c,m=s*u,_=s*d,g=a*u,p=a*d,h=o*d,S=l*c,E=l*u,v=l*d,R=i.x,w=i.y,C=i.z;return r[0]=(1-(g+h))*R,r[1]=(m+v)*R,r[2]=(_-E)*R,r[3]=0,r[4]=(m-v)*w,r[5]=(1-(f+h))*w,r[6]=(p+S)*w,r[7]=0,r[8]=(_+E)*C,r[9]=(p-S)*C,r[10]=(1-(f+g))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Li.set(r[0],r[1],r[2]).length();const a=Li.set(r[4],r[5],r[6]).length(),o=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],fn.copy(this);const c=1/s,u=1/a,d=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=u,fn.elements[5]*=u,fn.elements[6]*=u,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,t.setFromRotationMatrix(fn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=kn){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),f=(i+r)/(i-r);let m,_;if(o===kn)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===vs)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=kn){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(a-s),f=(t+e)*c,m=(i+r)*u;let _,g;if(o===kn)_=(a+s)*d,g=-2*d;else if(o===vs)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Li=new B,fn=new _t,Ad=new B(0,0,0),wd=new B(1,1,1),Kn=new B,Or=new B,$t=new B,Yo=new _t,jo=new Ar;class Wn{constructor(e=0,t=0,i=0,r=Wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yo,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jo.setFromEuler(this),this.setFromQuaternion(jo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wn.DEFAULT_ORDER="XYZ";class Mc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rd=0;const Zo=new B,Ni=new Ar,Nn=new _t,Br=new B,lr=new B,Cd=new B,Pd=new Ar,Ko=new B(1,0,0),Jo=new B(0,1,0),Qo=new B(0,0,1),el={type:"added"},Ld={type:"removed"},Di={type:"childadded",child:null},Ys={type:"childremoved",child:null};class kt extends tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new B,t=new Wn,i=new Ar,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new Ve}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.multiply(Ni),this}rotateOnWorldAxis(e,t){return Ni.setFromAxisAngle(e,t),this.quaternion.premultiply(Ni),this}rotateX(e){return this.rotateOnAxis(Ko,e)}rotateY(e){return this.rotateOnAxis(Jo,e)}rotateZ(e){return this.rotateOnAxis(Qo,e)}translateOnAxis(e,t){return Zo.copy(e).applyQuaternion(this.quaternion),this.position.add(Zo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ko,e)}translateY(e){return this.translateOnAxis(Jo,e)}translateZ(e){return this.translateOnAxis(Qo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Br.copy(e):Br.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(lr,Br,this.up):Nn.lookAt(Br,lr,this.up),this.quaternion.setFromRotationMatrix(Nn),r&&(Nn.extractRotation(r.matrixWorld),Ni.setFromRotationMatrix(Nn),this.quaternion.premultiply(Ni.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(el),Di.child=e,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),Ys.child=e,this.dispatchEvent(Ys),Ys.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(el),Di.child=e,this.dispatchEvent(Di),Di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,Pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}kt.DEFAULT_UP=new B(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new B,Dn=new B,js=new B,In=new B,Ii=new B,Ui=new B,tl=new B,Zs=new B,Ks=new B,Js=new B,Qs=new xt,ea=new xt,ta=new xt;class gn{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),pn.subVectors(e,t),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){pn.subVectors(r,t),Dn.subVectors(i,t),js.subVectors(e,t);const a=pn.dot(pn),o=pn.dot(Dn),l=pn.dot(js),c=Dn.dot(Dn),u=Dn.dot(js),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,m=(c*l-o*u)*f,_=(a*u-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Qs.setScalar(0),ea.setScalar(0),ta.setScalar(0),Qs.fromBufferAttribute(e,t),ea.fromBufferAttribute(e,i),ta.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qs,s.x),a.addScaledVector(ea,s.y),a.addScaledVector(ta,s.z),a}static isFrontFacing(e,t,i,r){return pn.subVectors(i,t),Dn.subVectors(e,t),pn.cross(Dn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),pn.cross(Dn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return gn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Ii.subVectors(r,i),Ui.subVectors(s,i),Zs.subVectors(e,i);const l=Ii.dot(Zs),c=Ui.dot(Zs);if(l<=0&&c<=0)return t.copy(i);Ks.subVectors(e,r);const u=Ii.dot(Ks),d=Ui.dot(Ks);if(u>=0&&d<=u)return t.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Ii,a);Js.subVectors(e,s);const m=Ii.dot(Js),_=Ui.dot(Js);if(_>=0&&m<=_)return t.copy(s);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ui,o);const p=u*_-m*d;if(p<=0&&d-u>=0&&m-_>=0)return tl.subVectors(s,r),o=(d-u)/(d-u+(m-_)),t.copy(r).addScaledVector(tl,o);const h=1/(p+g+f);return a=g*h,o=f*h,t.copy(i).addScaledVector(Ii,a).addScaledVector(Ui,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const yc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},zr={h:0,s:0,l:0};function na(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=rt.workingColorSpace){if(e=yo(e,1),t=Ze(t,0,1),i=Ze(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=na(a,s,e+1/3),this.g=na(a,s,e),this.b=na(a,s,e-1/3)}return rt.toWorkingColorSpace(this,r),this}setStyle(e,t=nn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=nn){const i=yc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Vn(e.r),this.g=Vn(e.g),this.b=Vn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nn){return rt.fromWorkingColorSpace(Dt.copy(this),e),Math.round(Ze(Dt.r*255,0,255))*65536+Math.round(Ze(Dt.g*255,0,255))*256+Math.round(Ze(Dt.b*255,0,255))}getHexString(e=nn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=rt.workingColorSpace){rt.fromWorkingColorSpace(Dt.copy(this),t);const i=Dt.r,r=Dt.g,s=Dt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=rt.workingColorSpace){return rt.fromWorkingColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=nn){rt.fromWorkingColorSpace(Dt.copy(this),e);const t=Dt.r,i=Dt.g,r=Dt.b;return e!==nn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(zr);const i=mr(Jn.h,zr.h,t),r=mr(Jn.s,zr.s,t),s=mr(Jn.l,zr.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dt=new st;st.NAMES=yc;let Nd=0;class ir extends tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=si,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_r,this.blendDst=vr,this.blendEquation=Bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Yi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ko,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==si&&(i.blending=this.blending),this.side!==oi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==_r&&(i.blendSrc=this.blendSrc),this.blendDst!==vr&&(i.blendDst=this.blendDst),this.blendEquation!==Bn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Yi&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ko&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class bc extends ir{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=rc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new B,kr=new ut;class zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ho,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)kr.fromBufferAttribute(this,t),kr.applyMatrix3(e),this.setXY(t,kr.x,kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Hi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Ot(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Hi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Hi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Hi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Hi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),i=Ot(i,this.array),r=Ot(r,this.array),s=Ot(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ho&&(e.usage=this.usage),e}}class Sc extends zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ec extends zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class xn extends zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Dd=0;const tn=new _t,ia=new kt,Fi=new B,Yt=new wr,cr=new wr,Ct=new B;class Mn extends tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_c(e)?Ec:Sc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,i){return tn.makeTranslation(e,t,i),this.applyMatrix4(tn),this}scale(e,t,i){return tn.makeScale(e,t,i),this.applyMatrix4(tn),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Yt.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,Yt.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,Yt.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(Yt.min),this.boundingBox.expandByPoint(Yt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Yt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];cr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ct.addVectors(Yt.min,cr.min),Yt.expandByPoint(Ct),Ct.addVectors(Yt.max,cr.max),Yt.expandByPoint(Ct)):(Yt.expandByPoint(cr.min),Yt.expandByPoint(cr.max))}Yt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ct.fromBufferAttribute(o,c),l&&(Fi.fromBufferAttribute(e,c),Ct.add(Fi)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new B,l[D]=new B;const c=new B,u=new B,d=new B,f=new ut,m=new ut,_=new ut,g=new B,p=new B;function h(D,b,y){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,y),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,y),u.sub(c),d.sub(c),m.sub(f),_.sub(f);const L=1/(m.x*_.y-_.x*m.y);isFinite(L)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-m.y).multiplyScalar(L),p.copy(d).multiplyScalar(m.x).addScaledVector(u,-_.x).multiplyScalar(L),o[D].add(g),o[b].add(g),o[y].add(g),l[D].add(p),l[b].add(p),l[y].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,b=S.length;D<b;++D){const y=S[D],L=y.start,K=y.count;for(let G=L,z=L+K;G<z;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const E=new B,v=new B,R=new B,w=new B;function C(D){R.fromBufferAttribute(r,D),w.copy(R);const b=o[D];E.copy(b),E.sub(R.multiplyScalar(R.dot(b))).normalize(),v.crossVectors(w,b);const L=v.dot(l[D])<0?-1:1;a.setXYZW(D,E.x,E.y,E.z,L)}for(let D=0,b=S.length;D<b;++D){const y=S[D],L=y.start,K=y.count;for(let G=L,z=L+K;G<z;G+=3)C(e.getX(G+0)),C(e.getX(G+1)),C(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new B,s=new B,a=new B,o=new B,l=new B,c=new B,u=new B,d=new B;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?m=l[g]*o.data.stride+o.offset:m=l[g]*u;for(let h=0;h<u;h++)f[_++]=c[m++]}return new zt(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,m=d.length;f<m;f++)u.push(d[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new _t,fi=new So,Hr=new Rr,il=new B,Vr=new B,Gr=new B,Wr=new B,ra=new B,Xr=new B,rl=new B,qr=new B;class Hn extends kt{constructor(e=new Mn,t=new bc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ra.fromBufferAttribute(d,e),a?Xr.addScaledVector(ra,u):Xr.addScaledVector(ra.sub(t),u))}t.add(Xr)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hr.copy(i.boundingSphere),Hr.applyMatrix4(s),fi.copy(e.ray).recast(e.near),!(Hr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Hr,il)===null||fi.origin.distanceToSquared(il)>(e.far-e.near)**2))&&(nl.copy(s).invert(),fi.copy(e.ray).applyMatrix4(nl),!(i.boundingBox!==null&&fi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=a[p.materialIndex],S=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let v=S,R=E;v<R;v+=3){const w=o.getX(v),C=o.getX(v+1),D=o.getX(v+2);r=$r(this,h,e,i,c,u,d,w,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(o.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const S=o.getX(p),E=o.getX(p+1),v=o.getX(p+2);r=$r(this,a,e,i,c,u,d,S,E,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=f.length;_<g;_++){const p=f[_],h=a[p.materialIndex],S=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let v=S,R=E;v<R;v+=3){const w=v,C=v+1,D=v+2;r=$r(this,h,e,i,c,u,d,w,C,D),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,h=g;p<h;p+=3){const S=p,E=p+1,v=p+2;r=$r(this,a,e,i,c,u,d,S,E,v),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function Id(n,e,t,i,r,s,a,o){let l;if(e.side===Xt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===oi,o),l===null)return null;qr.copy(o),qr.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(qr);return c<t.near||c>t.far?null:{distance:c,point:qr.clone(),object:n}}function $r(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Vr),n.getVertexPosition(l,Gr),n.getVertexPosition(c,Wr);const u=Id(n,e,t,i,Vr,Gr,Wr,rl);if(u){const d=new B;gn.getBarycoord(rl,Vr,Gr,Wr,d),r&&(u.uv=gn.getInterpolatedAttribute(r,o,l,c,d,new ut)),s&&(u.uv1=gn.getInterpolatedAttribute(s,o,l,c,d,new ut)),a&&(u.normal=gn.getInterpolatedAttribute(a,o,l,c,d,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new B,materialIndex:0};gn.getNormal(Vr,Gr,Wr,f.normal),u.face=f,u.barycoord=d}return u}class Cr extends Mn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(u,3)),this.setAttribute("uv",new xn(d,2));function _(g,p,h,S,E,v,R,w,C,D,b){const y=v/C,L=R/D,K=v/2,G=R/2,z=w/2,Y=C+1,q=D+1;let ue=0,W=0;const de=new B;for(let fe=0;fe<q;fe++){const Ee=fe*L-G;for(let ke=0;ke<Y;ke++){const nt=ke*y-K;de[g]=nt*S,de[p]=Ee*E,de[h]=z,c.push(de.x,de.y,de.z),de[g]=0,de[p]=0,de[h]=w>0?1:-1,u.push(de.x,de.y,de.z),d.push(ke/C),d.push(1-fe/D),ue+=1}}for(let fe=0;fe<D;fe++)for(let Ee=0;Ee<C;Ee++){const ke=f+Ee+Y*fe,nt=f+Ee+Y*(fe+1),Q=f+(Ee+1)+Y*(fe+1),le=f+(Ee+1)+Y*fe;l.push(ke,nt,le),l.push(nt,Q,le),W+=6}o.addGroup(m,W,b),m+=W,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Bt(n){const e={};for(let t=0;t<n.length;t++){const i=er(n[t]);for(const r in i)e[r]=i[r]}return e}function Ud(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Tc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const Fd={clone:er,merge:Bt};var Od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xn extends ir{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Od,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=er(e.uniforms),this.uniformsGroups=Ud(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ac extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Qn=new B,sl=new ut,al=new ut;class sn extends Ac{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Mr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(pr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mr*2*Math.atan(Math.tan(pr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z),Qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Qn.x,Qn.y).multiplyScalar(-e/Qn.z)}getViewSize(e,t){return this.getViewBounds(e,sl,al),t.subVectors(al,sl)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(pr*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Oi=-90,Bi=1;class zd extends kt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(Oi,Bi,e,t);r.layers=this.layers,this.add(r);const s=new sn(Oi,Bi,e,t);s.layers=this.layers,this.add(s);const a=new sn(Oi,Bi,e,t);a.layers=this.layers,this.add(a);const o=new sn(Oi,Bi,e,t);o.layers=this.layers,this.add(o);const l=new sn(Oi,Bi,e,t);l.layers=this.layers,this.add(l);const c=new sn(Oi,Bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class wc extends qt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ji,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kd extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new wc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Cr(5,5,5),s=new Xn({name:"CubemapFromEquirect",uniforms:er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:ri});s.uniforms.tEquirect.value=t;const a=new Hn(r,s),o=t.minFilter;return t.minFilter===bi&&(t.minFilter=Tn),new zd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Hd extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sa=new B,Vd=new B,Gd=new Ve;class vi{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=sa.subVectors(i,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(sa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Gd.getNormalMatrix(e),r=this.coplanarPoint(sa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pi=new Rr,Yr=new B;class Rc{constructor(e=new vi,t=new vi,i=new vi,r=new vi,s=new vi,a=new vi){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=kn){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],h=r[12],S=r[13],E=r[14],v=r[15];if(i[0].setComponents(l-s,f-c,p-m,v-h).normalize(),i[1].setComponents(l+s,f+c,p+m,v+h).normalize(),i[2].setComponents(l+a,f+u,p+_,v+S).normalize(),i[3].setComponents(l-a,f-u,p-_,v-S).normalize(),i[4].setComponents(l-o,f-d,p-g,v-E).normalize(),t===kn)i[5].setComponents(l+o,f+d,p+g,v+E).normalize();else if(t===vs)i[5].setComponents(o,d,g,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pi)}intersectsSprite(e){return pi.center.set(0,0,0),pi.radius=.7071067811865476,pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(pi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Yr.x=r.normal.x>0?e.max.x:e.min.x,Yr.y=r.normal.y>0?e.max.y:e.min.y,Yr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Yr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cc extends ir{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ms=new B,ys=new B,ol=new _t,ur=new So,jr=new Rr,aa=new B,ll=new B;class Wd extends kt{constructor(e=new Mn,t=new Cc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Ms.fromBufferAttribute(t,r-1),ys.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Ms.distanceTo(ys);e.setAttribute("lineDistance",new xn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jr.copy(i.boundingSphere),jr.applyMatrix4(r),jr.radius+=s,e.ray.intersectsSphere(jr)===!1)return;ol.copy(r).invert(),ur.copy(e.ray).applyMatrix4(ol);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,f=i.attributes.position;if(u!==null){const m=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const h=u.getX(g),S=u.getX(g+1),E=Zr(this,e,ur,l,h,S);E&&t.push(E)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(m),h=Zr(this,e,ur,l,g,p);h&&t.push(h)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let g=m,p=_-1;g<p;g+=c){const h=Zr(this,e,ur,l,g,g+1);h&&t.push(h)}if(this.isLineLoop){const g=Zr(this,e,ur,l,_-1,m);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zr(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(Ms.fromBufferAttribute(a,r),ys.fromBufferAttribute(a,s),t.distanceSqToSegment(Ms,ys,aa,ll)>i)return;aa.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(aa);if(!(l<e.near||l>e.far))return{distance:l,point:ll.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const cl=new B,ul=new B;class Xd extends Wd{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)cl.fromBufferAttribute(t,r),ul.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+cl.distanceTo(ul);e.setAttribute("lineDistance",new xn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class qd extends ir{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dl=new _t,ro=new So,Kr=new Rr,Jr=new B;class $d extends kt{constructor(e=new Mn,t=new qd){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(r),Kr.radius+=s,e.ray.intersectsSphere(Kr)===!1)return;dl.copy(r).invert(),ro.copy(e.ray).applyMatrix4(dl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,g=m;_<g;_++){const p=c.getX(_);Jr.fromBufferAttribute(d,p),hl(Jr,p,l,r,e,t,this)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,g=m;_<g;_++)Jr.fromBufferAttribute(d,_),hl(Jr,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hl(n,e,t,i,r,s,a){const o=ro.distanceSqToPoint(n);if(o<t){const l=new B;ro.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Qr extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Pc extends qt{constructor(e,t,i,r,s,a,o,l,c,u=qi){if(u!==qi&&u!==Ji)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qi&&(i=Si),i===void 0&&u===Ji&&(i=Ki),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Rs extends Mn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=t/l,m=[],_=[],g=[],p=[];for(let h=0;h<u;h++){const S=h*f-a;for(let E=0;E<c;E++){const v=E*d-s;_.push(v,-S,0),g.push(0,0,1),p.push(E/o),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let S=0;S<o;S++){const E=S+c*h,v=S+c*(h+1),R=S+1+c*(h+1),w=S+1+c*h;m.push(E,v,w),m.push(v,R,w)}this.setIndex(m),this.setAttribute("position",new xn(_,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yd extends ir{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jd extends ir{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Lc extends Ac{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zd extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kd extends Xd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new Mn;r.setAttribute("position",new xn(t,3)),r.setAttribute("color",new xn(i,3));const s=new Cc({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new st,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function fl(n,e,t,i){const r=Jd(i);switch(t){case cc:return n*e;case dc:return n*e;case hc:return n*e*2;case fc:return n*e/r.components*r.byteLength;case vo:return n*e/r.components*r.byteLength;case pc:return n*e*2/r.components*r.byteLength;case xo:return n*e*2/r.components*r.byteLength;case uc:return n*e*3/r.components*r.byteLength;case _n:return n*e*4/r.components*r.byteLength;case Mo:return n*e*4/r.components*r.byteLength;case ls:case cs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case us:case ds:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ua:return Math.max(n,16)*Math.max(e,8)/4;case Na:case Ia:return Math.max(n,8)*Math.max(e,8)/2;case Fa:case Oa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ba:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ka:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Va:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case $a:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Za:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ka:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case hs:case Qa:case eo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case mc:case to:return Math.ceil(n/4)*Math.ceil(e/4)*8;case no:case io:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jd(n){switch(n){case Gn:case ac:return{byteLength:1,components:1};case xr:case oc:case Tr:return{byteLength:2,components:1};case go:case _o:return{byteLength:2,components:4};case Si:case mo:case zn:return{byteLength:4,components:1};case lc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:po}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=po);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Nc(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Qd(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<d.length;m++){const _=d[f],g=d[m];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++f,d[f]=g)}d.length=f+1;for(let m=0,_=d.length;m<_;m++){const g=d[m];n.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var eh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,th=`#ifdef USE_ALPHAHASH
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
#endif`,nh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ih=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,sh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ah=`#ifdef USE_AOMAP
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
#endif`,oh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lh=`#ifdef USE_BATCHING
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
#endif`,ch=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fh=`#ifdef USE_IRIDESCENCE
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
#endif`,ph=`#ifdef USE_BUMPMAP
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
#endif`,mh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,gh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_h=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,xh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Mh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Sh=`#define PI 3.141592653589793
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
} // validated`,Eh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Th=`vec3 transformedNormal = objectNormal;
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
#endif`,Ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ph="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nh=`#ifdef USE_ENVMAP
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
#endif`,Dh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ih=`#ifdef USE_ENVMAP
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
#endif`,Uh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Fh=`#ifdef USE_ENVMAP
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
#endif`,Oh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Bh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hh=`#ifdef USE_GRADIENTMAP
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
}`,Vh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xh=`uniform bool receiveShadow;
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
#endif`,qh=`#ifdef USE_ENVMAP
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
#endif`,$h=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kh=`PhysicalMaterial material;
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
#endif`,Jh=`struct PhysicalMaterial {
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
}`,Qh=`
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
#endif`,ef=`#if defined( RE_IndirectDiffuse )
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
#endif`,tf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,af=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,of=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,uf=`#if defined( USE_POINTS_UV )
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
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ff=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,pf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gf=`#ifdef USE_MORPHTARGETS
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
#endif`,_f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Mf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sf=`#ifdef USE_NORMALMAP
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
#endif`,Ef=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Df=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,If=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ff=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zf=`float getShadowMask() {
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
}`,kf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Vf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gf=`#ifdef USE_SKINNING
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
#endif`,Wf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$f=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yf=`#ifdef USE_TRANSMISSION
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
#endif`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ep=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tp=`uniform sampler2D t2D;
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
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ap=`#include <common>
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
}`,op=`#if DEPTH_PACKING == 3200
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
}`,lp=`#define DISTANCE
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
}`,cp=`#define DISTANCE
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
}`,up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,fp=`uniform vec3 diffuse;
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
}`,pp=`#include <common>
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
}`,mp=`uniform vec3 diffuse;
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
}`,gp=`#define LAMBERT
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
}`,_p=`#define LAMBERT
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
}`,vp=`#define MATCAP
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
}`,xp=`#define MATCAP
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
}`,Mp=`#define NORMAL
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
}`,yp=`#define NORMAL
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
}`,bp=`#define PHONG
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
}`,Sp=`#define PHONG
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
}`,Ep=`#define STANDARD
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
}`,Tp=`#define STANDARD
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
}`,Ap=`#define TOON
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
}`,wp=`#define TOON
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
}`,Rp=`uniform float size;
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
}`,Cp=`uniform vec3 diffuse;
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
}`,Pp=`#include <common>
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
}`,Lp=`uniform vec3 color;
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
}`,Np=`uniform float rotation;
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
}`,Dp=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:eh,alphahash_pars_fragment:th,alphamap_fragment:nh,alphamap_pars_fragment:ih,alphatest_fragment:rh,alphatest_pars_fragment:sh,aomap_fragment:ah,aomap_pars_fragment:oh,batching_pars_vertex:lh,batching_vertex:ch,begin_vertex:uh,beginnormal_vertex:dh,bsdfs:hh,iridescence_fragment:fh,bumpmap_pars_fragment:ph,clipping_planes_fragment:mh,clipping_planes_pars_fragment:gh,clipping_planes_pars_vertex:_h,clipping_planes_vertex:vh,color_fragment:xh,color_pars_fragment:Mh,color_pars_vertex:yh,color_vertex:bh,common:Sh,cube_uv_reflection_fragment:Eh,defaultnormal_vertex:Th,displacementmap_pars_vertex:Ah,displacementmap_vertex:wh,emissivemap_fragment:Rh,emissivemap_pars_fragment:Ch,colorspace_fragment:Ph,colorspace_pars_fragment:Lh,envmap_fragment:Nh,envmap_common_pars_fragment:Dh,envmap_pars_fragment:Ih,envmap_pars_vertex:Uh,envmap_physical_pars_fragment:qh,envmap_vertex:Fh,fog_vertex:Oh,fog_pars_vertex:Bh,fog_fragment:zh,fog_pars_fragment:kh,gradientmap_pars_fragment:Hh,lightmap_pars_fragment:Vh,lights_lambert_fragment:Gh,lights_lambert_pars_fragment:Wh,lights_pars_begin:Xh,lights_toon_fragment:$h,lights_toon_pars_fragment:Yh,lights_phong_fragment:jh,lights_phong_pars_fragment:Zh,lights_physical_fragment:Kh,lights_physical_pars_fragment:Jh,lights_fragment_begin:Qh,lights_fragment_maps:ef,lights_fragment_end:tf,logdepthbuf_fragment:nf,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:sf,logdepthbuf_vertex:af,map_fragment:of,map_pars_fragment:lf,map_particle_fragment:cf,map_particle_pars_fragment:uf,metalnessmap_fragment:df,metalnessmap_pars_fragment:hf,morphinstance_vertex:ff,morphcolor_vertex:pf,morphnormal_vertex:mf,morphtarget_pars_vertex:gf,morphtarget_vertex:_f,normal_fragment_begin:vf,normal_fragment_maps:xf,normal_pars_fragment:Mf,normal_pars_vertex:yf,normal_vertex:bf,normalmap_pars_fragment:Sf,clearcoat_normal_fragment_begin:Ef,clearcoat_normal_fragment_maps:Tf,clearcoat_pars_fragment:Af,iridescence_pars_fragment:wf,opaque_fragment:Rf,packing:Cf,premultiplied_alpha_fragment:Pf,project_vertex:Lf,dithering_fragment:Nf,dithering_pars_fragment:Df,roughnessmap_fragment:If,roughnessmap_pars_fragment:Uf,shadowmap_pars_fragment:Ff,shadowmap_pars_vertex:Of,shadowmap_vertex:Bf,shadowmask_pars_fragment:zf,skinbase_vertex:kf,skinning_pars_vertex:Hf,skinning_vertex:Vf,skinnormal_vertex:Gf,specularmap_fragment:Wf,specularmap_pars_fragment:Xf,tonemapping_fragment:qf,tonemapping_pars_fragment:$f,transmission_fragment:Yf,transmission_pars_fragment:jf,uv_pars_fragment:Zf,uv_pars_vertex:Kf,uv_vertex:Jf,worldpos_vertex:Qf,background_vert:ep,background_frag:tp,backgroundCube_vert:np,backgroundCube_frag:ip,cube_vert:rp,cube_frag:sp,depth_vert:ap,depth_frag:op,distanceRGBA_vert:lp,distanceRGBA_frag:cp,equirect_vert:up,equirect_frag:dp,linedashed_vert:hp,linedashed_frag:fp,meshbasic_vert:pp,meshbasic_frag:mp,meshlambert_vert:gp,meshlambert_frag:_p,meshmatcap_vert:vp,meshmatcap_frag:xp,meshnormal_vert:Mp,meshnormal_frag:yp,meshphong_vert:bp,meshphong_frag:Sp,meshphysical_vert:Ep,meshphysical_frag:Tp,meshtoon_vert:Ap,meshtoon_frag:wp,points_vert:Rp,points_frag:Cp,shadow_vert:Pp,shadow_frag:Lp,sprite_vert:Np,sprite_frag:Dp},ye={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},En={basic:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Bt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Bt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new st(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Bt([ye.points,ye.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Bt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Bt([ye.common,ye.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Bt([ye.sprite,ye.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:Bt([ye.common,ye.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:Bt([ye.lights,ye.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};En.physical={uniforms:Bt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const es={r:0,b:0,g:0},mi=new Wn,Ip=new _t;function Up(n,e,t,i,r,s,a){const o=new st(0);let l=s===!0?0:1,c,u,d=null,f=0,m=null;function _(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function g(E){let v=!1;const R=_(E);R===null?h(o,l):R&&R.isColor&&(h(R,1),v=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,v){const R=_(v);R&&(R.isCubeTexture||R.mapping===ws)?(u===void 0&&(u=new Hn(new Cr(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:er(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),mi.copy(v.backgroundRotation),mi.x*=-1,mi.y*=-1,mi.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(mi)),u.material.toneMapped=rt.getTransfer(R.colorSpace)!==ct,(d!==R||f!==R.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,f=R.version,m=n.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Hn(new Rs(2,2),new Xn({name:"BackgroundMaterial",uniforms:er(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=rt.getTransfer(R.colorSpace)!==ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||f!==R.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,d=R,f=R.version,m=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function h(E,v){E.getRGB(es,Tc(n)),i.buffers.color.setClear(es.r,es.g,es.b,v,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(E,v=1){o.set(E),l=v,h(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(o,l)},render:g,addToRenderList:p,dispose:S}}function Fp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(y,L,K,G,z){let Y=!1;const q=d(G,K,L);s!==q&&(s=q,c(s.object)),Y=m(y,G,K,z),Y&&_(y,G,K,z),z!==null&&e.update(z,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,v(y,L,K,G),z!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return n.createVertexArray()}function c(y){return n.bindVertexArray(y)}function u(y){return n.deleteVertexArray(y)}function d(y,L,K){const G=K.wireframe===!0;let z=i[y.id];z===void 0&&(z={},i[y.id]=z);let Y=z[L.id];Y===void 0&&(Y={},z[L.id]=Y);let q=Y[G];return q===void 0&&(q=f(l()),Y[G]=q),q}function f(y){const L=[],K=[],G=[];for(let z=0;z<t;z++)L[z]=0,K[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:K,attributeDivisors:G,object:y,attributes:{},index:null}}function m(y,L,K,G){const z=s.attributes,Y=L.attributes;let q=0;const ue=K.getAttributes();for(const W in ue)if(ue[W].location>=0){const fe=z[W];let Ee=Y[W];if(Ee===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(Ee=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(Ee=y.instanceColor)),fe===void 0||fe.attribute!==Ee||Ee&&fe.data!==Ee.data)return!0;q++}return s.attributesNum!==q||s.index!==G}function _(y,L,K,G){const z={},Y=L.attributes;let q=0;const ue=K.getAttributes();for(const W in ue)if(ue[W].location>=0){let fe=Y[W];fe===void 0&&(W==="instanceMatrix"&&y.instanceMatrix&&(fe=y.instanceMatrix),W==="instanceColor"&&y.instanceColor&&(fe=y.instanceColor));const Ee={};Ee.attribute=fe,fe&&fe.data&&(Ee.data=fe.data),z[W]=Ee,q++}s.attributes=z,s.attributesNum=q,s.index=G}function g(){const y=s.newAttributes;for(let L=0,K=y.length;L<K;L++)y[L]=0}function p(y){h(y,0)}function h(y,L){const K=s.newAttributes,G=s.enabledAttributes,z=s.attributeDivisors;K[y]=1,G[y]===0&&(n.enableVertexAttribArray(y),G[y]=1),z[y]!==L&&(n.vertexAttribDivisor(y,L),z[y]=L)}function S(){const y=s.newAttributes,L=s.enabledAttributes;for(let K=0,G=L.length;K<G;K++)L[K]!==y[K]&&(n.disableVertexAttribArray(K),L[K]=0)}function E(y,L,K,G,z,Y,q){q===!0?n.vertexAttribIPointer(y,L,K,z,Y):n.vertexAttribPointer(y,L,K,G,z,Y)}function v(y,L,K,G){g();const z=G.attributes,Y=K.getAttributes(),q=L.defaultAttributeValues;for(const ue in Y){const W=Y[ue];if(W.location>=0){let de=z[ue];if(de===void 0&&(ue==="instanceMatrix"&&y.instanceMatrix&&(de=y.instanceMatrix),ue==="instanceColor"&&y.instanceColor&&(de=y.instanceColor)),de!==void 0){const fe=de.normalized,Ee=de.itemSize,ke=e.get(de);if(ke===void 0)continue;const nt=ke.buffer,Q=ke.type,le=ke.bytesPerElement,Ce=Q===n.INT||Q===n.UNSIGNED_INT||de.gpuType===mo;if(de.isInterleavedBufferAttribute){const Me=de.data,Fe=Me.stride,Ne=de.offset;if(Me.isInstancedInterleavedBuffer){for(let Oe=0;Oe<W.locationSize;Oe++)h(W.location+Oe,Me.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Oe=0;Oe<W.locationSize;Oe++)p(W.location+Oe);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Oe=0;Oe<W.locationSize;Oe++)E(W.location+Oe,Ee/W.locationSize,Q,fe,Fe*le,(Ne+Ee/W.locationSize*Oe)*le,Ce)}else{if(de.isInstancedBufferAttribute){for(let Me=0;Me<W.locationSize;Me++)h(W.location+Me,de.meshPerAttribute);y.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Me=0;Me<W.locationSize;Me++)p(W.location+Me);n.bindBuffer(n.ARRAY_BUFFER,nt);for(let Me=0;Me<W.locationSize;Me++)E(W.location+Me,Ee/W.locationSize,Q,fe,Ee*le,Ee/W.locationSize*Me*le,Ce)}}else if(q!==void 0){const fe=q[ue];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(W.location,fe);break;case 3:n.vertexAttrib3fv(W.location,fe);break;case 4:n.vertexAttrib4fv(W.location,fe);break;default:n.vertexAttrib1fv(W.location,fe)}}}}S()}function R(){D();for(const y in i){const L=i[y];for(const K in L){const G=L[K];for(const z in G)u(G[z].object),delete G[z];delete L[K]}delete i[y]}}function w(y){if(i[y.id]===void 0)return;const L=i[y.id];for(const K in L){const G=L[K];for(const z in G)u(G[z].object),delete G[z];delete L[K]}delete i[y.id]}function C(y){for(const L in i){const K=i[L];if(K[y.id]===void 0)continue;const G=K[y.id];for(const z in G)u(G[z].object),delete G[z];delete K[y.id]}}function D(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:D,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:p,disableUnusedAttributes:S}}function Op(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let m=0;for(let _=0;_<d;_++)m+=u[_];t.update(m,i,1)}function l(c,u,d,f){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],u[_],f[_]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g]*f[g];t.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Bp(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(C){return!(C!==_n&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const D=C===Tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!D)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:v,vertexTextures:R,maxSamples:w}}function zp(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new vi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||i!==0||r;return r=f,i=d.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=u(d,f,0)},this.setState=function(d,f,m){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,h=n.get(d);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,E=S*4;let v=h.clippingState||null;l.value=v,v=u(_,f,E,m);for(let R=0;R!==E;++R)v[R]=t[R];h.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,m,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const h=m+g*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,v=m;E!==g;++E,v+=4)a.copy(d[E]).applyMatrix4(S,o),a.normal.toArray(p,v),p[v+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function kp(n){let e=new WeakMap;function t(a,o){return o===Ra?a.mapping=ji:o===Ca&&(a.mapping=Zi),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ra||o===Ca)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new kd(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Wi=4,pl=[.125,.215,.35,.446,.526,.582],Mi=20,oa=new Lc,ml=new st;let la=null,ca=0,ua=0,da=!1;const xi=(1+Math.sqrt(5))/2,zi=1/xi,gl=[new B(-xi,zi,0),new B(xi,zi,0),new B(-zi,0,xi),new B(zi,0,xi),new B(0,xi,-zi),new B(0,xi,zi),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class _l{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la,ca,ua),this._renderer.xr.enabled=da,e.scissorTest=!1,ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ji||e.mapping===Zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget(),ca=this._renderer.getActiveCubeFace(),ua=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Tr,format:_n,colorSpace:Qi,depthBuffer:!1},r=vl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vl(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hp(s)),this._blurMaterial=Vp(s,e,t)}return r}_compileMaterial(e){const t=new Hn(this._lodPlanes[0],e);this._renderer.compile(t,oa)}_sceneToCubeUV(e,t,i,r){const o=new sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(ml),u.toneMapping=ai,u.autoClear=!1;const m=new bc({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),_=new Hn(new Cr,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(ml),g=!0);for(let h=0;h<6;h++){const S=h%3;S===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):S===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const E=this._cubeSize;ts(r,S*E,h>2?E:0,E,E),u.setRenderTarget(r),g&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=d,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ji||e.mapping===Zi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=xl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Hn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ts(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,oa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=gl[(r-s-1)%gl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Hn(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Mi;p>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mi}`);const h=[];let S=0;for(let C=0;C<Mi;++C){const D=C/g,b=Math.exp(-D*D/2);h.push(b),C===0?S+=b:C<p&&(S+=2*b)}for(let C=0;C<h.length;C++)h[C]=h[C]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=h,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:E}=this;f.dTheta.value=_,f.mipInt.value=E-i;const v=this._sizeLods[r],R=3*v*(r>E-Wi?r-E+Wi:0),w=4*(this._cubeSize-v);ts(t,R,w,3*v,2*v),l.setRenderTarget(t),l.render(d,oa)}}function Hp(n){const e=[],t=[],i=[];let r=n;const s=n-Wi+1+pl.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Wi?l=pl[a-n+Wi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,g=3,p=2,h=1,S=new Float32Array(g*_*m),E=new Float32Array(p*_*m),v=new Float32Array(h*_*m);for(let w=0;w<m;w++){const C=w%3*2/3-1,D=w>2?0:-1,b=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];S.set(b,g*_*w),E.set(f,p*_*w);const y=[w,w,w,w,w,w];v.set(y,h*_*w)}const R=new Mn;R.setAttribute("position",new zt(S,g)),R.setAttribute("uv",new zt(E,p)),R.setAttribute("faceIndex",new zt(v,h)),e.push(R),r>Wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function vl(n,e,t){const i=new Ei(n,e,t);return i.texture.mapping=ws,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ts(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Vp(n,e,t){const i=new Float32Array(Mi),r=new B(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function xl(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ml(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Eo(){return`

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
	`}function Gp(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Ra||l===Ca,u=l===ji||l===Zi;if(c||u){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new _l(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return c&&m&&m.height>0||u&&m&&r(m)?(t===null&&(t=new _l(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Wp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Vi("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Xp(n,e,t,i){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const m in f)e.update(f[m],n.ARRAY_BUFFER)}function c(d){const f=[],m=d.index,_=d.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let E=0,v=S.length;E<v;E+=3){const R=S[E+0],w=S[E+1],C=S[E+2];f.push(R,w,w,C,C,R)}}else if(_!==void 0){const S=_.array;g=_.version;for(let E=0,v=S.length/3-1;E<v;E+=3){const R=E+0,w=E+1,C=E+2;f.push(R,w,w,C,C,R)}}else return;const p=new(_c(f)?Ec:Sc)(f,1);p.version=g;const h=s.get(d);h&&e.remove(h),s.set(d,p)}function u(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function qp(n,e,t){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,m){n.drawElements(i,m,s,f*a),t.update(m,i,1)}function c(f,m,_){_!==0&&(n.drawElementsInstanced(i,m,s,f*a,_),t.update(m,i,_))}function u(f,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,f,0,_);let p=0;for(let h=0;h<_;h++)p+=m[h];t.update(p,i,1)}function d(f,m,_,g){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<f.length;h++)c(f[h]/a,m[h],g[h]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,s,f,0,g,0,_);let h=0;for(let S=0;S<_;S++)h+=m[S]*g[S];t.update(h,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function $p(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Yp(n,e,t){const i=new WeakMap,r=new xt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let b=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let E=0;m===!0&&(E=1),_===!0&&(E=2),g===!0&&(E=3);let v=o.attributes.position.count*E,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const w=new Float32Array(v*R*4*d),C=new xc(w,v,R,d);C.type=zn,C.needsUpdate=!0;const D=E*4;for(let y=0;y<d;y++){const L=p[y],K=h[y],G=S[y],z=v*R*4*y;for(let Y=0;Y<L.count;Y++){const q=Y*D;m===!0&&(r.fromBufferAttribute(L,Y),w[z+q+0]=r.x,w[z+q+1]=r.y,w[z+q+2]=r.z,w[z+q+3]=0),_===!0&&(r.fromBufferAttribute(K,Y),w[z+q+4]=r.x,w[z+q+5]=r.y,w[z+q+6]=r.z,w[z+q+7]=0),g===!0&&(r.fromBufferAttribute(G,Y),w[z+q+8]=r.x,w[z+q+9]=r.y,w[z+q+10]=r.z,w[z+q+11]=G.itemSize===4?r.w:1)}}f={count:d,texture:C,size:new ut(v,R)},i.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let m=0;for(let g=0;g<c.length;g++)m+=c[g];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:s}}function jp(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Dc=new qt,yl=new Pc(1,1),Ic=new xc,Uc=new Ed,Fc=new wc,bl=[],Sl=[],El=new Float32Array(16),Tl=new Float32Array(9),Al=new Float32Array(4);function rr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=bl[r];if(s===void 0&&(s=new Float32Array(r),bl[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Tt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Cs(n,e){let t=Sl[e];t===void 0&&(t=new Int32Array(e),Sl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zp(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Kp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Jp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Qp(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function em(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Al.set(i),n.uniformMatrix2fv(this.addr,!1,Al),At(t,i)}}function tm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;Tl.set(i),n.uniformMatrix3fv(this.addr,!1,Tl),At(t,i)}}function nm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Tt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Tt(t,i))return;El.set(i),n.uniformMatrix4fv(this.addr,!1,El),At(t,i)}}function im(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function rm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function am(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function om(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function lm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function um(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function dm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(yl.compareFunction=gc,s=yl):s=Dc,t.setTexture2D(e||s,r)}function hm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Uc,r)}function fm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Fc,r)}function pm(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ic,r)}function mm(n){switch(n){case 5126:return Zp;case 35664:return Kp;case 35665:return Jp;case 35666:return Qp;case 35674:return em;case 35675:return tm;case 35676:return nm;case 5124:case 35670:return im;case 35667:case 35671:return rm;case 35668:case 35672:return sm;case 35669:case 35673:return am;case 5125:return om;case 36294:return lm;case 36295:return cm;case 36296:return um;case 35678:case 36198:case 36298:case 36306:case 35682:return dm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return pm}}function gm(n,e){n.uniform1fv(this.addr,e)}function _m(n,e){const t=rr(e,this.size,2);n.uniform2fv(this.addr,t)}function vm(n,e){const t=rr(e,this.size,3);n.uniform3fv(this.addr,t)}function xm(n,e){const t=rr(e,this.size,4);n.uniform4fv(this.addr,t)}function Mm(n,e){const t=rr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ym(n,e){const t=rr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function bm(n,e){const t=rr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Sm(n,e){n.uniform1iv(this.addr,e)}function Em(n,e){n.uniform2iv(this.addr,e)}function Tm(n,e){n.uniform3iv(this.addr,e)}function Am(n,e){n.uniform4iv(this.addr,e)}function wm(n,e){n.uniform1uiv(this.addr,e)}function Rm(n,e){n.uniform2uiv(this.addr,e)}function Cm(n,e){n.uniform3uiv(this.addr,e)}function Pm(n,e){n.uniform4uiv(this.addr,e)}function Lm(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Dc,s[a])}function Nm(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Uc,s[a])}function Dm(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||Fc,s[a])}function Im(n,e,t){const i=this.cache,r=e.length,s=Cs(t,r);Tt(i,s)||(n.uniform1iv(this.addr,s),At(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ic,s[a])}function Um(n){switch(n){case 5126:return gm;case 35664:return _m;case 35665:return vm;case 35666:return xm;case 35674:return Mm;case 35675:return ym;case 35676:return bm;case 5124:case 35670:return Sm;case 35667:case 35671:return Em;case 35668:case 35672:return Tm;case 35669:case 35673:return Am;case 5125:return wm;case 36294:return Rm;case 36295:return Cm;case 36296:return Pm;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Nm;case 35680:case 36300:case 36308:case 36293:return Dm;case 36289:case 36303:case 36311:case 36292:return Im}}class Fm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=mm(t.type)}}class Om{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Um(t.type)}}class Bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const ha=/(\w+)(\])?(\[|\.)?/g;function wl(n,e){n.seq.push(e),n.map[e.id]=e}function zm(n,e,t){const i=n.name,r=i.length;for(ha.lastIndex=0;;){const s=ha.exec(i),a=ha.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wl(t,c===void 0?new Fm(o,n,e):new Om(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Bm(o),wl(t,d)),t=d}}}class fs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);zm(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Rl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const km=37297;let Hm=0;function Vm(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Cl=new Ve;function Gm(n){rt._getMatrix(Cl,rt.workingColorSpace,n);const e=`mat3( ${Cl.elements.map(t=>t.toFixed(4))} )`;switch(rt.getTransfer(n)){case _s:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Pl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Vm(n.getShaderSource(e),a)}else return r}function Wm(n,e){const t=Gm(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xm(n,e){let t;switch(e){case Du:t="Linear";break;case Iu:t="Reinhard";break;case Uu:t="Cineon";break;case Fu:t="ACESFilmic";break;case Bu:t="AgX";break;case zu:t="Neutral";break;case Ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ns=new B;function qm(){rt.getLuminanceCoefficients(ns);const n=ns.x.toFixed(4),e=ns.y.toFixed(4),t=ns.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function $m(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fr).join(`
`)}function Ym(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function jm(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function fr(n){return n!==""}function Ll(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function so(n){return n.replace(Zm,Jm)}const Km=new Map;function Jm(n,e){let t=Ge[e];if(t===void 0){const i=Km.get(e);if(i!==void 0)t=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return so(t)}const Qm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(n){return n.replace(Qm,eg)}function eg(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Il(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function tg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===fu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function ng(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ji:case Zi:e="ENVMAP_TYPE_CUBE";break;case ws:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ig(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zi:e="ENVMAP_MODE_REFRACTION";break}return e}function rg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case rc:e="ENVMAP_BLENDING_MULTIPLY";break;case Lu:e="ENVMAP_BLENDING_MIX";break;case Nu:e="ENVMAP_BLENDING_ADD";break}return e}function sg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ag(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=tg(t),c=ng(t),u=ig(t),d=rg(t),f=sg(t),m=$m(t),_=Ym(s),g=r.createProgram();let p,h,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fr).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(fr).join(`
`),h.length>0&&(h+=`
`)):(p=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fr).join(`
`),h=[Il(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ai?"#define TONE_MAPPING":"",t.toneMapping!==ai?Ge.tonemapping_pars_fragment:"",t.toneMapping!==ai?Xm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Wm("linearToOutputTexel",t.outputColorSpace),qm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(fr).join(`
`)),a=so(a),a=Ll(a,t),a=Nl(a,t),o=so(o),o=Ll(o,t),o=Nl(o,t),a=Dl(a),o=Dl(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",t.glslVersion===Vo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Vo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=S+p+a,v=S+h+o,R=Rl(r,r.VERTEX_SHADER,E),w=Rl(r,r.FRAGMENT_SHADER,v);r.attachShader(g,R),r.attachShader(g,w),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function C(L){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(g).trim(),G=r.getShaderInfoLog(R).trim(),z=r.getShaderInfoLog(w).trim();let Y=!0,q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,R,w);else{const ue=Pl(r,R,"vertex"),W=Pl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+ue+`
`+W)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(G===""||z==="")&&(q=!1);q&&(L.diagnostics={runnable:Y,programLog:K,vertexShader:{log:G,prefix:p},fragmentShader:{log:z,prefix:h}})}r.deleteShader(R),r.deleteShader(w),D=new fs(r,g),b=jm(r,g)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(g,km)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hm++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=w,this}let og=0;class lg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new cg(e),t.set(e,i)),i}}class cg{constructor(e){this.id=og++,this.code=e,this.usedTimes=0}}function ug(n,e,t,i,r,s,a){const o=new Mc,l=new lg,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,y,L,K,G){const z=K.fog,Y=G.geometry,q=b.isMeshStandardMaterial?K.environment:null,ue=(b.isMeshStandardMaterial?t:e).get(b.envMap||q),W=ue&&ue.mapping===ws?ue.image.height:null,de=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ee=fe!==void 0?fe.length:0;let ke=0;Y.morphAttributes.position!==void 0&&(ke=1),Y.morphAttributes.normal!==void 0&&(ke=2),Y.morphAttributes.color!==void 0&&(ke=3);let nt,Q,le,Ce;if(de){const $e=En[de];nt=$e.vertexShader,Q=$e.fragmentShader}else nt=b.vertexShader,Q=b.fragmentShader,l.update(b),le=l.getVertexShaderID(b),Ce=l.getFragmentShaderID(b);const Me=n.getRenderTarget(),Fe=n.state.buffers.depth.getReversed(),Ne=G.isInstancedMesh===!0,Oe=G.isBatchedMesh===!0,Qe=!!b.map,Be=!!b.matcap,Ke=!!ue,P=!!b.aoMap,gt=!!b.lightMap,Xe=!!b.bumpMap,qe=!!b.normalMap,Le=!!b.displacementMap,at=!!b.emissiveMap,Pe=!!b.metalnessMap,A=!!b.roughnessMap,x=b.anisotropy>0,k=b.clearcoat>0,te=b.dispersion>0,ie=b.iridescence>0,J=b.sheen>0,Re=b.transmission>0,T=x&&!!b.anisotropyMap,O=k&&!!b.clearcoatMap,ee=k&&!!b.clearcoatNormalMap,I=k&&!!b.clearcoatRoughnessMap,Z=ie&&!!b.iridescenceMap,oe=ie&&!!b.iridescenceThicknessMap,_e=J&&!!b.sheenColorMap,ce=J&&!!b.sheenRoughnessMap,Ie=!!b.specularMap,me=!!b.specularColorMap,We=!!b.specularIntensityMap,N=Re&&!!b.transmissionMap,pe=Re&&!!b.thicknessMap,X=!!b.gradientMap,ne=!!b.alphaMap,se=b.alphaTest>0,ve=!!b.alphaHash,Ue=!!b.extensions;let ot=ai;b.toneMapped&&(Me===null||Me.isXRRenderTarget===!0)&&(ot=n.toneMapping);const dt={shaderID:de,shaderType:b.type,shaderName:b.name,vertexShader:nt,fragmentShader:Q,defines:b.defines,customVertexShaderID:le,customFragmentShaderID:Ce,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Oe,batchingColor:Oe&&G._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&G.instanceColor!==null,instancingMorph:Ne&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Me===null?n.outputColorSpace:Me.isXRRenderTarget===!0?Me.texture.colorSpace:Qi,alphaToCoverage:!!b.alphaToCoverage,map:Qe,matcap:Be,envMap:Ke,envMapMode:Ke&&ue.mapping,envMapCubeUVHeight:W,aoMap:P,lightMap:gt,bumpMap:Xe,normalMap:qe,displacementMap:f&&Le,emissiveMap:at,normalMapObjectSpace:qe&&b.normalMapType===Wu,normalMapTangentSpace:qe&&b.normalMapType===Gu,metalnessMap:Pe,roughnessMap:A,anisotropy:x,anisotropyMap:T,clearcoat:k,clearcoatMap:O,clearcoatNormalMap:ee,clearcoatRoughnessMap:I,dispersion:te,iridescence:ie,iridescenceMap:Z,iridescenceThicknessMap:oe,sheen:J,sheenColorMap:_e,sheenRoughnessMap:ce,specularMap:Ie,specularColorMap:me,specularIntensityMap:We,transmission:Re,transmissionMap:N,thicknessMap:pe,gradientMap:X,opaque:b.transparent===!1&&b.blending===si&&b.alphaToCoverage===!1,alphaMap:ne,alphaTest:se,alphaHash:ve,combine:b.combine,mapUv:Qe&&g(b.map.channel),aoMapUv:P&&g(b.aoMap.channel),lightMapUv:gt&&g(b.lightMap.channel),bumpMapUv:Xe&&g(b.bumpMap.channel),normalMapUv:qe&&g(b.normalMap.channel),displacementMapUv:Le&&g(b.displacementMap.channel),emissiveMapUv:at&&g(b.emissiveMap.channel),metalnessMapUv:Pe&&g(b.metalnessMap.channel),roughnessMapUv:A&&g(b.roughnessMap.channel),anisotropyMapUv:T&&g(b.anisotropyMap.channel),clearcoatMapUv:O&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:ee&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:I&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Z&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:ce&&g(b.sheenRoughnessMap.channel),specularMapUv:Ie&&g(b.specularMap.channel),specularColorMapUv:me&&g(b.specularColorMap.channel),specularIntensityMapUv:We&&g(b.specularIntensityMap.channel),transmissionMapUv:N&&g(b.transmissionMap.channel),thicknessMapUv:pe&&g(b.thicknessMap.channel),alphaMapUv:ne&&g(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(qe||x),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(Qe||ne),fog:!!z,useFog:b.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Fe,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:ke,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:ot,decodeVideoTexture:Qe&&b.map.isVideoTexture===!0&&rt.getTransfer(b.map.colorSpace)===ct,decodeVideoTextureEmissive:at&&b.emissiveMap.isVideoTexture===!0&&rt.getTransfer(b.emissiveMap.colorSpace)===ct,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===On,flipSided:b.side===Xt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ue&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&b.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function h(b){const y=[];if(b.shaderID?y.push(b.shaderID):(y.push(b.customVertexShaderID),y.push(b.customFragmentShaderID)),b.defines!==void 0)for(const L in b.defines)y.push(L),y.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(S(y,b),E(y,b),y.push(n.outputColorSpace)),y.push(b.customProgramCacheKey),y.join()}function S(b,y){b.push(y.precision),b.push(y.outputColorSpace),b.push(y.envMapMode),b.push(y.envMapCubeUVHeight),b.push(y.mapUv),b.push(y.alphaMapUv),b.push(y.lightMapUv),b.push(y.aoMapUv),b.push(y.bumpMapUv),b.push(y.normalMapUv),b.push(y.displacementMapUv),b.push(y.emissiveMapUv),b.push(y.metalnessMapUv),b.push(y.roughnessMapUv),b.push(y.anisotropyMapUv),b.push(y.clearcoatMapUv),b.push(y.clearcoatNormalMapUv),b.push(y.clearcoatRoughnessMapUv),b.push(y.iridescenceMapUv),b.push(y.iridescenceThicknessMapUv),b.push(y.sheenColorMapUv),b.push(y.sheenRoughnessMapUv),b.push(y.specularMapUv),b.push(y.specularColorMapUv),b.push(y.specularIntensityMapUv),b.push(y.transmissionMapUv),b.push(y.thicknessMapUv),b.push(y.combine),b.push(y.fogExp2),b.push(y.sizeAttenuation),b.push(y.morphTargetsCount),b.push(y.morphAttributeCount),b.push(y.numDirLights),b.push(y.numPointLights),b.push(y.numSpotLights),b.push(y.numSpotLightMaps),b.push(y.numHemiLights),b.push(y.numRectAreaLights),b.push(y.numDirLightShadows),b.push(y.numPointLightShadows),b.push(y.numSpotLightShadows),b.push(y.numSpotLightShadowsWithMaps),b.push(y.numLightProbes),b.push(y.shadowMapType),b.push(y.toneMapping),b.push(y.numClippingPlanes),b.push(y.numClipIntersection),b.push(y.depthPacking)}function E(b,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const y=_[b.type];let L;if(y){const K=En[y];L=Fd.clone(K.uniforms)}else L=b.uniforms;return L}function R(b,y){let L;for(let K=0,G=u.length;K<G;K++){const z=u[K];if(z.cacheKey===y){L=z,++L.usedTimes;break}}return L===void 0&&(L=new ag(n,y,b,s),u.push(L)),L}function w(b){if(--b.usedTimes===0){const y=u.indexOf(b);u[y]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function D(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:v,acquireProgram:R,releaseProgram:w,releaseShaderCache:C,programs:u,dispose:D}}function dg(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Ul(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Fl(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,f,m,_,g,p){let h=n[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:m,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},n[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=g,h.group=p),e++,h}function o(d,f,m,_,g,p){const h=a(d,f,m,_,g,p);m.transmission>0?i.push(h):m.transparent===!0?r.push(h):t.push(h)}function l(d,f,m,_,g,p){const h=a(d,f,m,_,g,p);m.transmission>0?i.unshift(h):m.transparent===!0?r.unshift(h):t.unshift(h)}function c(d,f){t.length>1&&t.sort(d||hg),i.length>1&&i.sort(f||Ul),r.length>1&&r.sort(f||Ul)}function u(){for(let d=e,f=n.length;d<f;d++){const m=n[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function fg(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Fl,n.set(i,[a])):r>=s.length?(a=new Fl,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function pg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new st};break;case"SpotLight":t={position:new B,direction:new B,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function mg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let gg=0;function _g(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function vg(n){const e=new pg,t=mg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const r=new B,s=new _t,a=new _t;function o(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,_=0,g=0,p=0,h=0,S=0,E=0,v=0,R=0,w=0,C=0;c.sort(_g);for(let b=0,y=c.length;b<y;b++){const L=c[b],K=L.color,G=L.intensity,z=L.distance,Y=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=K.r*G,d+=K.g*G,f+=K.b*G;else if(L.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(L.sh.coefficients[q],G);C++}else if(L.isDirectionalLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ue=L.shadow,W=t.get(L);W.shadowIntensity=ue.intensity,W.shadowBias=ue.bias,W.shadowNormalBias=ue.normalBias,W.shadowRadius=ue.radius,W.shadowMapSize=ue.mapSize,i.directionalShadow[m]=W,i.directionalShadowMap[m]=Y,i.directionalShadowMatrix[m]=L.shadow.matrix,S++}i.directional[m]=q,m++}else if(L.isSpotLight){const q=e.get(L);q.position.setFromMatrixPosition(L.matrixWorld),q.color.copy(K).multiplyScalar(G),q.distance=z,q.coneCos=Math.cos(L.angle),q.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),q.decay=L.decay,i.spot[g]=q;const ue=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,ue.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[g]=ue.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=ue.intensity,W.shadowBias=ue.bias,W.shadowNormalBias=ue.normalBias,W.shadowRadius=ue.radius,W.shadowMapSize=ue.mapSize,i.spotShadow[g]=W,i.spotShadowMap[g]=Y,v++}g++}else if(L.isRectAreaLight){const q=e.get(L);q.color.copy(K).multiplyScalar(G),q.halfWidth.set(L.width*.5,0,0),q.halfHeight.set(0,L.height*.5,0),i.rectArea[p]=q,p++}else if(L.isPointLight){const q=e.get(L);if(q.color.copy(L.color).multiplyScalar(L.intensity),q.distance=L.distance,q.decay=L.decay,L.castShadow){const ue=L.shadow,W=t.get(L);W.shadowIntensity=ue.intensity,W.shadowBias=ue.bias,W.shadowNormalBias=ue.normalBias,W.shadowRadius=ue.radius,W.shadowMapSize=ue.mapSize,W.shadowCameraNear=ue.camera.near,W.shadowCameraFar=ue.camera.far,i.pointShadow[_]=W,i.pointShadowMap[_]=Y,i.pointShadowMatrix[_]=L.shadow.matrix,E++}i.point[_]=q,_++}else if(L.isHemisphereLight){const q=e.get(L);q.skyColor.copy(L.color).multiplyScalar(G),q.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[h]=q,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==m||D.pointLength!==_||D.spotLength!==g||D.rectAreaLength!==p||D.hemiLength!==h||D.numDirectionalShadows!==S||D.numPointShadows!==E||D.numSpotShadows!==v||D.numSpotMaps!==R||D.numLightProbes!==C)&&(i.directional.length=m,i.spot.length=g,i.rectArea.length=p,i.point.length=_,i.hemi.length=h,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=v+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,D.directionalLength=m,D.pointLength=_,D.spotLength=g,D.rectAreaLength=p,D.hemiLength=h,D.numDirectionalShadows=S,D.numPointShadows=E,D.numSpotShadows=v,D.numSpotMaps=R,D.numLightProbes=C,i.version=gg++)}function l(c,u){let d=0,f=0,m=0,_=0,g=0;const p=u.matrixWorldInverse;for(let h=0,S=c.length;h<S;h++){const E=c[h];if(E.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),d++}else if(E.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),v.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const v=i.rectArea[_];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),a.identity(),s.copy(E.matrixWorld),s.premultiply(p),a.extractRotation(s),v.halfWidth.set(E.width*.5,0,0),v.halfHeight.set(0,E.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(E.matrixWorld),v.position.applyMatrix4(p),f++}else if(E.isHemisphereLight){const v=i.hemi[g];v.direction.setFromMatrixPosition(E.matrixWorld),v.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:i}}function Ol(n){const e=new vg(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function xg(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ol(n),e.set(r,[o])):s>=a.length?(o=new Ol(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Mg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,yg=`uniform sampler2D shadow_pass;
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
}`;function bg(n,e,t){let i=new Rc;const r=new ut,s=new ut,a=new xt,o=new Yd({depthPacking:Vu}),l=new jd,c={},u=t.maxTextureSize,d={[oi]:Xt,[Xt]:oi,[On]:On},f=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Mg,fragmentShader:yg}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Mn;_.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Hn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ic;let h=this.type;this.render=function(w,C,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const b=n.getRenderTarget(),y=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),K=n.state;K.setBlending(ri),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const G=h!==Un&&this.type===Un,z=h===Un&&this.type!==Un;for(let Y=0,q=w.length;Y<q;Y++){const ue=w[Y],W=ue.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const de=W.getFrameExtents();if(r.multiply(de),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,W.mapSize.y=s.y)),W.map===null||G===!0||z===!0){const Ee=this.type!==Un?{minFilter:vn,magFilter:vn}:{};W.map!==null&&W.map.dispose(),W.map=new Ei(r.x,r.y,Ee),W.map.texture.name=ue.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const fe=W.getViewportCount();for(let Ee=0;Ee<fe;Ee++){const ke=W.getViewport(Ee);a.set(s.x*ke.x,s.y*ke.y,s.x*ke.z,s.y*ke.w),K.viewport(a),W.updateMatrices(ue,Ee),i=W.getFrustum(),v(C,D,W.camera,ue,this.type)}W.isPointLightShadow!==!0&&this.type===Un&&S(W,D),W.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(b,y,L)};function S(w,C){const D=e.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ei(r.x,r.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(C,null,D,f,g,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(C,null,D,m,g,null)}function E(w,C,D,b){let y=null;const L=D.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)y=L;else if(y=D.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const K=y.uuid,G=C.uuid;let z=c[K];z===void 0&&(z={},c[K]=z);let Y=z[G];Y===void 0&&(Y=y.clone(),z[G]=Y,C.addEventListener("dispose",R)),y=Y}if(y.visible=C.visible,y.wireframe=C.wireframe,b===Un?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:d[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,D.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const K=n.properties.get(y);K.light=D}return y}function v(w,C,D,b,y){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&y===Un)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,w.matrixWorld);const G=e.update(w),z=w.material;if(Array.isArray(z)){const Y=G.groups;for(let q=0,ue=Y.length;q<ue;q++){const W=Y[q],de=z[W.materialIndex];if(de&&de.visible){const fe=E(w,de,b,y);w.onBeforeShadow(n,w,C,D,G,fe,W),n.renderBufferDirect(D,null,G,fe,w,W),w.onAfterShadow(n,w,C,D,G,fe,W)}}}else if(z.visible){const Y=E(w,z,b,y);w.onBeforeShadow(n,w,C,D,G,Y,null),n.renderBufferDirect(D,null,G,Y,w,null),w.onAfterShadow(n,w,C,D,G,Y,null)}}const K=w.children;for(let G=0,z=K.length;G<z;G++)v(K[G],C,D,b,y)}function R(w){w.target.removeEventListener("dispose",R);for(const D in c){const b=c[D],y=w.target.uuid;y in b&&(b[y].dispose(),delete b[y])}}}const Sg={[ya]:ba,[Sa]:Aa,[Ea]:wa,[Yi]:Ta,[ba]:ya,[Aa]:Sa,[wa]:Ea,[Ta]:Yi};function Eg(n,e){function t(){let N=!1;const pe=new xt;let X=null;const ne=new xt(0,0,0,0);return{setMask:function(se){X!==se&&!N&&(n.colorMask(se,se,se,se),X=se)},setLocked:function(se){N=se},setClear:function(se,ve,Ue,ot,dt){dt===!0&&(se*=ot,ve*=ot,Ue*=ot),pe.set(se,ve,Ue,ot),ne.equals(pe)===!1&&(n.clearColor(se,ve,Ue,ot),ne.copy(pe))},reset:function(){N=!1,X=null,ne.set(-1,0,0,0)}}}function i(){let N=!1,pe=!1,X=null,ne=null,se=null;return{setReversed:function(ve){if(pe!==ve){const Ue=e.get("EXT_clip_control");pe?Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.ZERO_TO_ONE_EXT):Ue.clipControlEXT(Ue.LOWER_LEFT_EXT,Ue.NEGATIVE_ONE_TO_ONE_EXT);const ot=se;se=null,this.setClear(ot)}pe=ve},getReversed:function(){return pe},setTest:function(ve){ve?Me(n.DEPTH_TEST):Fe(n.DEPTH_TEST)},setMask:function(ve){X!==ve&&!N&&(n.depthMask(ve),X=ve)},setFunc:function(ve){if(pe&&(ve=Sg[ve]),ne!==ve){switch(ve){case ya:n.depthFunc(n.NEVER);break;case ba:n.depthFunc(n.ALWAYS);break;case Sa:n.depthFunc(n.LESS);break;case Yi:n.depthFunc(n.LEQUAL);break;case Ea:n.depthFunc(n.EQUAL);break;case Ta:n.depthFunc(n.GEQUAL);break;case Aa:n.depthFunc(n.GREATER);break;case wa:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ne=ve}},setLocked:function(ve){N=ve},setClear:function(ve){se!==ve&&(pe&&(ve=1-ve),n.clearDepth(ve),se=ve)},reset:function(){N=!1,X=null,ne=null,se=null,pe=!1}}}function r(){let N=!1,pe=null,X=null,ne=null,se=null,ve=null,Ue=null,ot=null,dt=null;return{setTest:function($e){N||($e?Me(n.STENCIL_TEST):Fe(n.STENCIL_TEST))},setMask:function($e){pe!==$e&&!N&&(n.stencilMask($e),pe=$e)},setFunc:function($e,St,wt){(X!==$e||ne!==St||se!==wt)&&(n.stencilFunc($e,St,wt),X=$e,ne=St,se=wt)},setOp:function($e,St,wt){(ve!==$e||Ue!==St||ot!==wt)&&(n.stencilOp($e,St,wt),ve=$e,Ue=St,ot=wt)},setLocked:function($e){N=$e},setClear:function($e){dt!==$e&&(n.clearStencil($e),dt=$e)},reset:function(){N=!1,pe=null,X=null,ne=null,se=null,ve=null,Ue=null,ot=null,dt=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,h=null,S=null,E=null,v=null,R=null,w=null,C=new st(0,0,0),D=0,b=!1,y=null,L=null,K=null,G=null,z=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ue=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=ue>=1):W.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=ue>=2);let de=null,fe={};const Ee=n.getParameter(n.SCISSOR_BOX),ke=n.getParameter(n.VIEWPORT),nt=new xt().fromArray(Ee),Q=new xt().fromArray(ke);function le(N,pe,X,ne){const se=new Uint8Array(4),ve=n.createTexture();n.bindTexture(N,ve),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ue=0;Ue<X;Ue++)N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY?n.texImage3D(pe,0,n.RGBA,1,1,ne,0,n.RGBA,n.UNSIGNED_BYTE,se):n.texImage2D(pe+Ue,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,se);return ve}const Ce={};Ce[n.TEXTURE_2D]=le(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=le(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=le(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=le(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(n.DEPTH_TEST),a.setFunc(Yi),Xe(!1),qe(Oo),Me(n.CULL_FACE),P(ri);function Me(N){u[N]!==!0&&(n.enable(N),u[N]=!0)}function Fe(N){u[N]!==!1&&(n.disable(N),u[N]=!1)}function Ne(N,pe){return d[N]!==pe?(n.bindFramebuffer(N,pe),d[N]=pe,N===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=pe),N===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=pe),!0):!1}function Oe(N,pe){let X=m,ne=!1;if(N){X=f.get(pe),X===void 0&&(X=[],f.set(pe,X));const se=N.textures;if(X.length!==se.length||X[0]!==n.COLOR_ATTACHMENT0){for(let ve=0,Ue=se.length;ve<Ue;ve++)X[ve]=n.COLOR_ATTACHMENT0+ve;X.length=se.length,ne=!0}}else X[0]!==n.BACK&&(X[0]=n.BACK,ne=!0);ne&&n.drawBuffers(X)}function Qe(N){return _!==N?(n.useProgram(N),_=N,!0):!1}const Be={[Bn]:n.FUNC_ADD,[pu]:n.FUNC_SUBTRACT,[mu]:n.FUNC_REVERSE_SUBTRACT};Be[gu]=n.MIN,Be[_u]=n.MAX;const Ke={[vu]:n.ZERO,[xu]:n.ONE,[Mu]:n.SRC_COLOR,[_r]:n.SRC_ALPHA,[Au]:n.SRC_ALPHA_SATURATE,[Eu]:n.DST_COLOR,[bu]:n.DST_ALPHA,[yu]:n.ONE_MINUS_SRC_COLOR,[vr]:n.ONE_MINUS_SRC_ALPHA,[Tu]:n.ONE_MINUS_DST_COLOR,[Su]:n.ONE_MINUS_DST_ALPHA,[wu]:n.CONSTANT_COLOR,[Ru]:n.ONE_MINUS_CONSTANT_COLOR,[Cu]:n.CONSTANT_ALPHA,[Pu]:n.ONE_MINUS_CONSTANT_ALPHA};function P(N,pe,X,ne,se,ve,Ue,ot,dt,$e){if(N===ri){g===!0&&(Fe(n.BLEND),g=!1);return}if(g===!1&&(Me(n.BLEND),g=!0),N!==Ma){if(N!==p||$e!==b){if((h!==Bn||v!==Bn)&&(n.blendEquation(n.FUNC_ADD),h=Bn,v=Bn),$e)switch(N){case si:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gi:n.blendFunc(n.ONE,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case si:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Gi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Bo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,E=null,R=null,w=null,C.set(0,0,0),D=0,p=N,b=$e}return}se=se||pe,ve=ve||X,Ue=Ue||ne,(pe!==h||se!==v)&&(n.blendEquationSeparate(Be[pe],Be[se]),h=pe,v=se),(X!==S||ne!==E||ve!==R||Ue!==w)&&(n.blendFuncSeparate(Ke[X],Ke[ne],Ke[ve],Ke[Ue]),S=X,E=ne,R=ve,w=Ue),(ot.equals(C)===!1||dt!==D)&&(n.blendColor(ot.r,ot.g,ot.b,dt),C.copy(ot),D=dt),p=N,b=!1}function gt(N,pe){N.side===On?Fe(n.CULL_FACE):Me(n.CULL_FACE);let X=N.side===Xt;pe&&(X=!X),Xe(X),N.blending===si&&N.transparent===!1?P(ri):P(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);const ne=N.stencilWrite;o.setTest(ne),ne&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),at(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Me(n.SAMPLE_ALPHA_TO_COVERAGE):Fe(n.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(N){y!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),y=N)}function qe(N){N!==du?(Me(n.CULL_FACE),N!==L&&(N===Oo?n.cullFace(n.BACK):N===hu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Fe(n.CULL_FACE),L=N}function Le(N){N!==K&&(q&&n.lineWidth(N),K=N)}function at(N,pe,X){N?(Me(n.POLYGON_OFFSET_FILL),(G!==pe||z!==X)&&(n.polygonOffset(pe,X),G=pe,z=X)):Fe(n.POLYGON_OFFSET_FILL)}function Pe(N){N?Me(n.SCISSOR_TEST):Fe(n.SCISSOR_TEST)}function A(N){N===void 0&&(N=n.TEXTURE0+Y-1),de!==N&&(n.activeTexture(N),de=N)}function x(N,pe,X){X===void 0&&(de===null?X=n.TEXTURE0+Y-1:X=de);let ne=fe[X];ne===void 0&&(ne={type:void 0,texture:void 0},fe[X]=ne),(ne.type!==N||ne.texture!==pe)&&(de!==X&&(n.activeTexture(X),de=X),n.bindTexture(N,pe||Ce[N]),ne.type=N,ne.texture=pe)}function k(){const N=fe[de];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function T(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function I(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(N){nt.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),nt.copy(N))}function ce(N){Q.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function Ie(N,pe){let X=c.get(pe);X===void 0&&(X=new WeakMap,c.set(pe,X));let ne=X.get(N);ne===void 0&&(ne=n.getUniformBlockIndex(pe,N.name),X.set(N,ne))}function me(N,pe){const ne=c.get(pe).get(N);l.get(pe)!==ne&&(n.uniformBlockBinding(pe,ne,N.__bindingPointIndex),l.set(pe,ne))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,fe={},d={},f=new WeakMap,m=[],_=null,g=!1,p=null,h=null,S=null,E=null,v=null,R=null,w=null,C=new st(0,0,0),D=0,b=!1,y=null,L=null,K=null,G=null,z=null,nt.set(0,0,n.canvas.width,n.canvas.height),Q.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Me,disable:Fe,bindFramebuffer:Ne,drawBuffers:Oe,useProgram:Qe,setBlending:P,setMaterial:gt,setFlipSided:Xe,setCullFace:qe,setLineWidth:Le,setPolygonOffset:at,setScissorTest:Pe,activeTexture:A,bindTexture:x,unbindTexture:k,compressedTexImage2D:te,compressedTexImage3D:ie,texImage2D:Z,texImage3D:oe,updateUBOMapping:Ie,uniformBlockBinding:me,texStorage2D:ee,texStorage3D:I,texSubImage2D:J,texSubImage3D:Re,compressedTexSubImage2D:T,compressedTexSubImage3D:O,scissor:_e,viewport:ce,reset:We}}function Tg(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ut,u=new WeakMap;let d;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,x){return m?new OffscreenCanvas(A,x):xs("canvas")}function g(A,x,k){let te=1;const ie=Pe(A);if((ie.width>k||ie.height>k)&&(te=k/Math.max(ie.width,ie.height)),te<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const J=Math.floor(te*ie.width),Re=Math.floor(te*ie.height);d===void 0&&(d=_(J,Re));const T=x?_(J,Re):d;return T.width=J,T.height=Re,T.getContext("2d").drawImage(A,0,0,J,Re),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+J+"x"+Re+")."),T}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),A;return A}function p(A){return A.generateMipmaps}function h(A){n.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(A,x,k,te,ie=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=x;if(x===n.RED&&(k===n.FLOAT&&(J=n.R32F),k===n.HALF_FLOAT&&(J=n.R16F),k===n.UNSIGNED_BYTE&&(J=n.R8)),x===n.RED_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.R8UI),k===n.UNSIGNED_SHORT&&(J=n.R16UI),k===n.UNSIGNED_INT&&(J=n.R32UI),k===n.BYTE&&(J=n.R8I),k===n.SHORT&&(J=n.R16I),k===n.INT&&(J=n.R32I)),x===n.RG&&(k===n.FLOAT&&(J=n.RG32F),k===n.HALF_FLOAT&&(J=n.RG16F),k===n.UNSIGNED_BYTE&&(J=n.RG8)),x===n.RG_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RG8UI),k===n.UNSIGNED_SHORT&&(J=n.RG16UI),k===n.UNSIGNED_INT&&(J=n.RG32UI),k===n.BYTE&&(J=n.RG8I),k===n.SHORT&&(J=n.RG16I),k===n.INT&&(J=n.RG32I)),x===n.RGB_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGB8UI),k===n.UNSIGNED_SHORT&&(J=n.RGB16UI),k===n.UNSIGNED_INT&&(J=n.RGB32UI),k===n.BYTE&&(J=n.RGB8I),k===n.SHORT&&(J=n.RGB16I),k===n.INT&&(J=n.RGB32I)),x===n.RGBA_INTEGER&&(k===n.UNSIGNED_BYTE&&(J=n.RGBA8UI),k===n.UNSIGNED_SHORT&&(J=n.RGBA16UI),k===n.UNSIGNED_INT&&(J=n.RGBA32UI),k===n.BYTE&&(J=n.RGBA8I),k===n.SHORT&&(J=n.RGBA16I),k===n.INT&&(J=n.RGBA32I)),x===n.RGB&&k===n.UNSIGNED_INT_5_9_9_9_REV&&(J=n.RGB9_E5),x===n.RGBA){const Re=ie?_s:rt.getTransfer(te);k===n.FLOAT&&(J=n.RGBA32F),k===n.HALF_FLOAT&&(J=n.RGBA16F),k===n.UNSIGNED_BYTE&&(J=Re===ct?n.SRGB8_ALPHA8:n.RGBA8),k===n.UNSIGNED_SHORT_4_4_4_4&&(J=n.RGBA4),k===n.UNSIGNED_SHORT_5_5_5_1&&(J=n.RGB5_A1)}return(J===n.R16F||J===n.R32F||J===n.RG16F||J===n.RG32F||J===n.RGBA16F||J===n.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function v(A,x){let k;return A?x===null||x===Si||x===Ki?k=n.DEPTH24_STENCIL8:x===zn?k=n.DEPTH32F_STENCIL8:x===xr&&(k=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Si||x===Ki?k=n.DEPTH_COMPONENT24:x===zn?k=n.DEPTH_COMPONENT32F:x===xr&&(k=n.DEPTH_COMPONENT16),k}function R(A,x){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==vn&&A.minFilter!==Tn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function w(A){const x=A.target;x.removeEventListener("dispose",w),D(x),x.isVideoTexture&&u.delete(x)}function C(A){const x=A.target;x.removeEventListener("dispose",C),y(x)}function D(A){const x=i.get(A);if(x.__webglInit===void 0)return;const k=A.source,te=f.get(k);if(te){const ie=te[x.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&b(A),Object.keys(te).length===0&&f.delete(k)}i.remove(A)}function b(A){const x=i.get(A);n.deleteTexture(x.__webglTexture);const k=A.source,te=f.get(k);delete te[x.__cacheKey],a.memory.textures--}function y(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(x.__webglFramebuffer[te]))for(let ie=0;ie<x.__webglFramebuffer[te].length;ie++)n.deleteFramebuffer(x.__webglFramebuffer[te][ie]);else n.deleteFramebuffer(x.__webglFramebuffer[te]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[te])}else{if(Array.isArray(x.__webglFramebuffer))for(let te=0;te<x.__webglFramebuffer.length;te++)n.deleteFramebuffer(x.__webglFramebuffer[te]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let te=0;te<x.__webglColorRenderbuffer.length;te++)x.__webglColorRenderbuffer[te]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[te]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const k=A.textures;for(let te=0,ie=k.length;te<ie;te++){const J=i.get(k[te]);J.__webglTexture&&(n.deleteTexture(J.__webglTexture),a.memory.textures--),i.remove(k[te])}i.remove(A)}let L=0;function K(){L=0}function G(){const A=L;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),L+=1,A}function z(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function Y(A,x){const k=i.get(A);if(A.isVideoTexture&&Le(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(k,A,x);return}}t.bindTexture(n.TEXTURE_2D,k.__webglTexture,n.TEXTURE0+x)}function q(A,x){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Q(k,A,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,k.__webglTexture,n.TEXTURE0+x)}function ue(A,x){const k=i.get(A);if(A.version>0&&k.__version!==A.version){Q(k,A,x);return}t.bindTexture(n.TEXTURE_3D,k.__webglTexture,n.TEXTURE0+x)}function W(A,x){const k=i.get(A);if(A.version>0&&k.__version!==A.version){le(k,A,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture,n.TEXTURE0+x)}const de={[Pa]:n.REPEAT,[yi]:n.CLAMP_TO_EDGE,[La]:n.MIRRORED_REPEAT},fe={[vn]:n.NEAREST,[ku]:n.NEAREST_MIPMAP_NEAREST,[Lr]:n.NEAREST_MIPMAP_LINEAR,[Tn]:n.LINEAR,[zs]:n.LINEAR_MIPMAP_NEAREST,[bi]:n.LINEAR_MIPMAP_LINEAR},Ee={[Xu]:n.NEVER,[Ku]:n.ALWAYS,[qu]:n.LESS,[gc]:n.LEQUAL,[$u]:n.EQUAL,[Zu]:n.GEQUAL,[Yu]:n.GREATER,[ju]:n.NOTEQUAL};function ke(A,x){if(x.type===zn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Tn||x.magFilter===zs||x.magFilter===Lr||x.magFilter===bi||x.minFilter===Tn||x.minFilter===zs||x.minFilter===Lr||x.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,de[x.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,de[x.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,de[x.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,fe[x.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,fe[x.minFilter]),x.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Ee[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vn||x.minFilter!==Lr&&x.minFilter!==bi||x.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function nt(A,x){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",w));const te=x.source;let ie=f.get(te);ie===void 0&&(ie={},f.set(te,ie));const J=z(x);if(J!==A.__cacheKey){ie[J]===void 0&&(ie[J]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ie[J].usedTimes++;const Re=ie[A.__cacheKey];Re!==void 0&&(ie[A.__cacheKey].usedTimes--,Re.usedTimes===0&&b(x)),A.__cacheKey=J,A.__webglTexture=ie[J].texture}return k}function Q(A,x,k){let te=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=n.TEXTURE_3D);const ie=nt(A,x),J=x.source;t.bindTexture(te,A.__webglTexture,n.TEXTURE0+k);const Re=i.get(J);if(J.version!==Re.__version||ie===!0){t.activeTexture(n.TEXTURE0+k);const T=rt.getPrimaries(rt.workingColorSpace),O=x.colorSpace===ti?null:rt.getPrimaries(x.colorSpace),ee=x.colorSpace===ti||T===O?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let I=g(x.image,!1,r.maxTextureSize);I=at(x,I);const Z=s.convert(x.format,x.colorSpace),oe=s.convert(x.type);let _e=E(x.internalFormat,Z,oe,x.colorSpace,x.isVideoTexture);ke(te,x);let ce;const Ie=x.mipmaps,me=x.isVideoTexture!==!0,We=Re.__version===void 0||ie===!0,N=J.dataReady,pe=R(x,I);if(x.isDepthTexture)_e=v(x.format===Ji,x.type),We&&(me?t.texStorage2D(n.TEXTURE_2D,1,_e,I.width,I.height):t.texImage2D(n.TEXTURE_2D,0,_e,I.width,I.height,0,Z,oe,null));else if(x.isDataTexture)if(Ie.length>0){me&&We&&t.texStorage2D(n.TEXTURE_2D,pe,_e,Ie[0].width,Ie[0].height);for(let X=0,ne=Ie.length;X<ne;X++)ce=Ie[X],me?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ce.width,ce.height,Z,oe,ce.data):t.texImage2D(n.TEXTURE_2D,X,_e,ce.width,ce.height,0,Z,oe,ce.data);x.generateMipmaps=!1}else me?(We&&t.texStorage2D(n.TEXTURE_2D,pe,_e,I.width,I.height),N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,I.width,I.height,Z,oe,I.data)):t.texImage2D(n.TEXTURE_2D,0,_e,I.width,I.height,0,Z,oe,I.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){me&&We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,_e,Ie[0].width,Ie[0].height,I.depth);for(let X=0,ne=Ie.length;X<ne;X++)if(ce=Ie[X],x.format!==_n)if(Z!==null)if(me){if(N)if(x.layerUpdates.size>0){const se=fl(ce.width,ce.height,x.format,x.type);for(const ve of x.layerUpdates){const Ue=ce.data.subarray(ve*se/ce.data.BYTES_PER_ELEMENT,(ve+1)*se/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,ve,ce.width,ce.height,1,Z,Ue)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,I.depth,Z,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,_e,ce.width,ce.height,I.depth,0,ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?N&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,ce.width,ce.height,I.depth,Z,oe,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,X,_e,ce.width,ce.height,I.depth,0,Z,oe,ce.data)}else{me&&We&&t.texStorage2D(n.TEXTURE_2D,pe,_e,Ie[0].width,Ie[0].height);for(let X=0,ne=Ie.length;X<ne;X++)ce=Ie[X],x.format!==_n?Z!==null?me?N&&t.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,ce.width,ce.height,Z,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,X,_e,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,ce.width,ce.height,Z,oe,ce.data):t.texImage2D(n.TEXTURE_2D,X,_e,ce.width,ce.height,0,Z,oe,ce.data)}else if(x.isDataArrayTexture)if(me){if(We&&t.texStorage3D(n.TEXTURE_2D_ARRAY,pe,_e,I.width,I.height,I.depth),N)if(x.layerUpdates.size>0){const X=fl(I.width,I.height,x.format,x.type);for(const ne of x.layerUpdates){const se=I.data.subarray(ne*X/I.data.BYTES_PER_ELEMENT,(ne+1)*X/I.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ne,I.width,I.height,1,Z,oe,se)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,I.width,I.height,I.depth,Z,oe,I.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,I.width,I.height,I.depth,0,Z,oe,I.data);else if(x.isData3DTexture)me?(We&&t.texStorage3D(n.TEXTURE_3D,pe,_e,I.width,I.height,I.depth),N&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,I.width,I.height,I.depth,Z,oe,I.data)):t.texImage3D(n.TEXTURE_3D,0,_e,I.width,I.height,I.depth,0,Z,oe,I.data);else if(x.isFramebufferTexture){if(We)if(me)t.texStorage2D(n.TEXTURE_2D,pe,_e,I.width,I.height);else{let X=I.width,ne=I.height;for(let se=0;se<pe;se++)t.texImage2D(n.TEXTURE_2D,se,_e,X,ne,0,Z,oe,null),X>>=1,ne>>=1}}else if(Ie.length>0){if(me&&We){const X=Pe(Ie[0]);t.texStorage2D(n.TEXTURE_2D,pe,_e,X.width,X.height)}for(let X=0,ne=Ie.length;X<ne;X++)ce=Ie[X],me?N&&t.texSubImage2D(n.TEXTURE_2D,X,0,0,Z,oe,ce):t.texImage2D(n.TEXTURE_2D,X,_e,Z,oe,ce);x.generateMipmaps=!1}else if(me){if(We){const X=Pe(I);t.texStorage2D(n.TEXTURE_2D,pe,_e,X.width,X.height)}N&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z,oe,I)}else t.texImage2D(n.TEXTURE_2D,0,_e,Z,oe,I);p(x)&&h(te),Re.__version=J.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function le(A,x,k){if(x.image.length!==6)return;const te=nt(A,x),ie=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+k);const J=i.get(ie);if(ie.version!==J.__version||te===!0){t.activeTexture(n.TEXTURE0+k);const Re=rt.getPrimaries(rt.workingColorSpace),T=x.colorSpace===ti?null:rt.getPrimaries(x.colorSpace),O=x.colorSpace===ti||Re===T?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);const ee=x.isCompressedTexture||x.image[0].isCompressedTexture,I=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let ne=0;ne<6;ne++)!ee&&!I?Z[ne]=g(x.image[ne],!0,r.maxCubemapSize):Z[ne]=I?x.image[ne].image:x.image[ne],Z[ne]=at(x,Z[ne]);const oe=Z[0],_e=s.convert(x.format,x.colorSpace),ce=s.convert(x.type),Ie=E(x.internalFormat,_e,ce,x.colorSpace),me=x.isVideoTexture!==!0,We=J.__version===void 0||te===!0,N=ie.dataReady;let pe=R(x,oe);ke(n.TEXTURE_CUBE_MAP,x);let X;if(ee){me&&We&&t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ie,oe.width,oe.height);for(let ne=0;ne<6;ne++){X=Z[ne].mipmaps;for(let se=0;se<X.length;se++){const ve=X[se];x.format!==_n?_e!==null?me?N&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,0,0,ve.width,ve.height,_e,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,0,0,ve.width,ve.height,_e,ce,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se,Ie,ve.width,ve.height,0,_e,ce,ve.data)}}}else{if(X=x.mipmaps,me&&We){X.length>0&&pe++;const ne=Pe(Z[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,pe,Ie,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(I){me?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Z[ne].width,Z[ne].height,_e,ce,Z[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ie,Z[ne].width,Z[ne].height,0,_e,ce,Z[ne].data);for(let se=0;se<X.length;se++){const Ue=X[se].image[ne].image;me?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,0,0,Ue.width,Ue.height,_e,ce,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,Ie,Ue.width,Ue.height,0,_e,ce,Ue.data)}}else{me?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,_e,ce,Z[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Ie,_e,ce,Z[ne]);for(let se=0;se<X.length;se++){const ve=X[se];me?N&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,0,0,_e,ce,ve.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se+1,Ie,_e,ce,ve.image[ne])}}}p(x)&&h(n.TEXTURE_CUBE_MAP),J.__version=ie.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Ce(A,x,k,te,ie,J){const Re=s.convert(k.format,k.colorSpace),T=s.convert(k.type),O=E(k.internalFormat,Re,T,k.colorSpace),ee=i.get(x),I=i.get(k);if(I.__renderTarget=x,!ee.__hasExternalTextures){const Z=Math.max(1,x.width>>J),oe=Math.max(1,x.height>>J);ie===n.TEXTURE_3D||ie===n.TEXTURE_2D_ARRAY?t.texImage3D(ie,J,O,Z,oe,x.depth,0,Re,T,null):t.texImage2D(ie,J,O,Z,oe,0,Re,T,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),qe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,ie,I.__webglTexture,0,Xe(x)):(ie===n.TEXTURE_2D||ie>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,ie,I.__webglTexture,J),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Me(A,x,k){if(n.bindRenderbuffer(n.RENDERBUFFER,A),x.depthBuffer){const te=x.depthTexture,ie=te&&te.isDepthTexture?te.type:null,J=v(x.stencilBuffer,ie),Re=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,T=Xe(x);qe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,T,J,x.width,x.height):k?n.renderbufferStorageMultisample(n.RENDERBUFFER,T,J,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,J,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Re,n.RENDERBUFFER,A)}else{const te=x.textures;for(let ie=0;ie<te.length;ie++){const J=te[ie],Re=s.convert(J.format,J.colorSpace),T=s.convert(J.type),O=E(J.internalFormat,Re,T,J.colorSpace),ee=Xe(x);k&&qe(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ee,O,x.width,x.height):qe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ee,O,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,O,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Fe(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(x.depthTexture);te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Y(x.depthTexture,0);const ie=te.__webglTexture,J=Xe(x);if(x.depthTexture.format===qi)qe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ie,0);else if(x.depthTexture.format===Ji)qe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function Ne(A){const x=i.get(A),k=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const te=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){const ie=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",ie)};te.addEventListener("dispose",ie),x.__depthDisposeCallback=ie}x.__boundDepthTexture=te}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");Fe(x.__webglFramebuffer,A)}else if(k){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=n.createRenderbuffer(),Me(x.__webglDepthbuffer[te],A,!1);else{const ie=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[te];n.bindRenderbuffer(n.RENDERBUFFER,J),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,J)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Me(x.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,ie)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Oe(A,x,k){const te=i.get(A);x!==void 0&&Ce(te.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),k!==void 0&&Ne(A)}function Qe(A){const x=A.texture,k=i.get(A),te=i.get(x);A.addEventListener("dispose",C);const ie=A.textures,J=A.isWebGLCubeRenderTarget===!0,Re=ie.length>1;if(Re||(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=x.version,a.memory.textures++),J){k.__webglFramebuffer=[];for(let T=0;T<6;T++)if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer[T]=[];for(let O=0;O<x.mipmaps.length;O++)k.__webglFramebuffer[T][O]=n.createFramebuffer()}else k.__webglFramebuffer[T]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){k.__webglFramebuffer=[];for(let T=0;T<x.mipmaps.length;T++)k.__webglFramebuffer[T]=n.createFramebuffer()}else k.__webglFramebuffer=n.createFramebuffer();if(Re)for(let T=0,O=ie.length;T<O;T++){const ee=i.get(ie[T]);ee.__webglTexture===void 0&&(ee.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&qe(A)===!1){k.__webglMultisampledFramebuffer=n.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let T=0;T<ie.length;T++){const O=ie[T];k.__webglColorRenderbuffer[T]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,k.__webglColorRenderbuffer[T]);const ee=s.convert(O.format,O.colorSpace),I=s.convert(O.type),Z=E(O.internalFormat,ee,I,O.colorSpace,A.isXRRenderTarget===!0),oe=Xe(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,Z,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+T,n.RENDERBUFFER,k.__webglColorRenderbuffer[T])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=n.createRenderbuffer(),Me(k.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ke(n.TEXTURE_CUBE_MAP,x);for(let T=0;T<6;T++)if(x.mipmaps&&x.mipmaps.length>0)for(let O=0;O<x.mipmaps.length;O++)Ce(k.__webglFramebuffer[T][O],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+T,O);else Ce(k.__webglFramebuffer[T],A,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+T,0);p(x)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let T=0,O=ie.length;T<O;T++){const ee=ie[T],I=i.get(ee);t.bindTexture(n.TEXTURE_2D,I.__webglTexture),ke(n.TEXTURE_2D,ee),Ce(k.__webglFramebuffer,A,ee,n.COLOR_ATTACHMENT0+T,n.TEXTURE_2D,0),p(ee)&&h(n.TEXTURE_2D)}t.unbindTexture()}else{let T=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(T=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(T,te.__webglTexture),ke(T,x),x.mipmaps&&x.mipmaps.length>0)for(let O=0;O<x.mipmaps.length;O++)Ce(k.__webglFramebuffer[O],A,x,n.COLOR_ATTACHMENT0,T,O);else Ce(k.__webglFramebuffer,A,x,n.COLOR_ATTACHMENT0,T,0);p(x)&&h(T),t.unbindTexture()}A.depthBuffer&&Ne(A)}function Be(A){const x=A.textures;for(let k=0,te=x.length;k<te;k++){const ie=x[k];if(p(ie)){const J=S(A),Re=i.get(ie).__webglTexture;t.bindTexture(J,Re),h(J),t.unbindTexture()}}}const Ke=[],P=[];function gt(A){if(A.samples>0){if(qe(A)===!1){const x=A.textures,k=A.width,te=A.height;let ie=n.COLOR_BUFFER_BIT;const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=i.get(A),T=x.length>1;if(T)for(let O=0;O<x.length;O++)t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let O=0;O<x.length;O++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ie|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ie|=n.STENCIL_BUFFER_BIT)),T){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Re.__webglColorRenderbuffer[O]);const ee=i.get(x[O]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ee,0)}n.blitFramebuffer(0,0,k,te,0,0,k,te,ie,n.NEAREST),l===!0&&(Ke.length=0,P.length=0,Ke.push(n.COLOR_ATTACHMENT0+O),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ke.push(J),P.push(J),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,P)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),T)for(let O=0;O<x.length;O++){t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.RENDERBUFFER,Re.__webglColorRenderbuffer[O]);const ee=i.get(x[O]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Re.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+O,n.TEXTURE_2D,ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Xe(A){return Math.min(r.maxSamples,A.samples)}function qe(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Le(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function at(A,x){const k=A.colorSpace,te=A.format,ie=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==Qi&&k!==ti&&(rt.getTransfer(k)===ct?(te!==_n||ie!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),x}function Pe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=K,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=ue,this.setTextureCube=W,this.rebindTextures=Oe,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=qe}function Ag(n,e){function t(i,r=ti){let s;const a=rt.getTransfer(r);if(i===Gn)return n.UNSIGNED_BYTE;if(i===go)return n.UNSIGNED_SHORT_4_4_4_4;if(i===_o)return n.UNSIGNED_SHORT_5_5_5_1;if(i===lc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ac)return n.BYTE;if(i===oc)return n.SHORT;if(i===xr)return n.UNSIGNED_SHORT;if(i===mo)return n.INT;if(i===Si)return n.UNSIGNED_INT;if(i===zn)return n.FLOAT;if(i===Tr)return n.HALF_FLOAT;if(i===cc)return n.ALPHA;if(i===uc)return n.RGB;if(i===_n)return n.RGBA;if(i===dc)return n.LUMINANCE;if(i===hc)return n.LUMINANCE_ALPHA;if(i===qi)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===fc)return n.RED;if(i===vo)return n.RED_INTEGER;if(i===pc)return n.RG;if(i===xo)return n.RG_INTEGER;if(i===Mo)return n.RGBA_INTEGER;if(i===ls||i===cs||i===us||i===ds)if(a===ct)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ls)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ls)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===us)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ds)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Na||i===Da||i===Ia||i===Ua)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Da)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ia)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ua)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Fa||i===Oa||i===Ba)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Fa||i===Oa)return a===ct?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Ba)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===za||i===ka||i===Ha||i===Va||i===Ga||i===Wa||i===Xa||i===qa||i===$a||i===Ya||i===ja||i===Za||i===Ka||i===Ja)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===za)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ka)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ha)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Va)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ga)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Xa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qa)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===$a)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ya)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ja)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Za)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ka)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ja)return a===ct?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hs||i===Qa||i===eo)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===hs)return a===ct?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Qa)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===eo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mc||i===to||i===no||i===io)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hs)return s.COMPRESSED_RED_RGTC1_EXT;if(i===to)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===no)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===io)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ki?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const wg={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),h=this._getHandJoint(c,g);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(wg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Rg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cg=`
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

}`;class Pg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Xn({vertexShader:Rg,fragmentShader:Cg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Hn(new Rs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lg extends tr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,m=null,_=null;const g=new Pg,p=t.getContextAttributes();let h=null,S=null;const E=[],v=[],R=new ut;let w=null;const C=new sn;C.viewport=new xt;const D=new sn;D.viewport=new xt;const b=[C,D],y=new Zd;let L=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let le=E[Q];return le===void 0&&(le=new fa,E[Q]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Q){let le=E[Q];return le===void 0&&(le=new fa,E[Q]=le),le.getGripSpace()},this.getHand=function(Q){let le=E[Q];return le===void 0&&(le=new fa,E[Q]=le),le.getHandSpace()};function G(Q){const le=v.indexOf(Q.inputSource);if(le===-1)return;const Ce=E[le];Ce!==void 0&&(Ce.update(Q.inputSource,Q.frame,c||a),Ce.dispatchEvent({type:Q.type,data:Q.inputSource}))}function z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",Y);for(let Q=0;Q<E.length;Q++){const le=v[Q];le!==null&&(v[Q]=null,E[Q].disconnect(le))}L=null,K=null,g.reset(),e.setRenderTarget(h),m=null,f=null,d=null,r=null,S=null,nt.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",z),r.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new Ei(m.framebufferWidth,m.framebufferHeight,{format:_n,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let le=null,Ce=null,Me=null;p.depth&&(Me=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=p.stencil?Ji:qi,Ce=p.stencil?Ki:Si);const Fe={colorFormat:t.RGBA8,depthFormat:Me,scaleFactor:s};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Ei(f.textureWidth,f.textureHeight,{format:_n,type:Gn,depthTexture:new Pc(f.textureWidth,f.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),nt.setContext(r),nt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function Y(Q){for(let le=0;le<Q.removed.length;le++){const Ce=Q.removed[le],Me=v.indexOf(Ce);Me>=0&&(v[Me]=null,E[Me].disconnect(Ce))}for(let le=0;le<Q.added.length;le++){const Ce=Q.added[le];let Me=v.indexOf(Ce);if(Me===-1){for(let Ne=0;Ne<E.length;Ne++)if(Ne>=v.length){v.push(Ce),Me=Ne;break}else if(v[Ne]===null){v[Ne]=Ce,Me=Ne;break}if(Me===-1)break}const Fe=E[Me];Fe&&Fe.connect(Ce)}}const q=new B,ue=new B;function W(Q,le,Ce){q.setFromMatrixPosition(le.matrixWorld),ue.setFromMatrixPosition(Ce.matrixWorld);const Me=q.distanceTo(ue),Fe=le.projectionMatrix.elements,Ne=Ce.projectionMatrix.elements,Oe=Fe[14]/(Fe[10]-1),Qe=Fe[14]/(Fe[10]+1),Be=(Fe[9]+1)/Fe[5],Ke=(Fe[9]-1)/Fe[5],P=(Fe[8]-1)/Fe[0],gt=(Ne[8]+1)/Ne[0],Xe=Oe*P,qe=Oe*gt,Le=Me/(-P+gt),at=Le*-P;if(le.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(at),Q.translateZ(Le),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Pe=Oe+Le,A=Qe+Le,x=Xe-at,k=qe+(Me-at),te=Be*Qe/A*Pe,ie=Ke*Qe/A*Pe;Q.projectionMatrix.makePerspective(x,k,te,ie,Pe,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function de(Q,le){le===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(le.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let le=Q.near,Ce=Q.far;g.texture!==null&&(g.depthNear>0&&(le=g.depthNear),g.depthFar>0&&(Ce=g.depthFar)),y.near=D.near=C.near=le,y.far=D.far=C.far=Ce,(L!==y.near||K!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),L=y.near,K=y.far),C.layers.mask=Q.layers.mask|2,D.layers.mask=Q.layers.mask|4,y.layers.mask=C.layers.mask|D.layers.mask;const Me=Q.parent,Fe=y.cameras;de(y,Me);for(let Ne=0;Ne<Fe.length;Ne++)de(Fe[Ne],Me);Fe.length===2?W(y,C,D):y.projectionMatrix.copy(C.projectionMatrix),fe(Q,y,Me)};function fe(Q,le,Ce){Ce===null?Q.matrix.copy(le.matrixWorld):(Q.matrix.copy(Ce.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(le.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(le.projectionMatrix),Q.projectionMatrixInverse.copy(le.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Mr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(y)};let Ee=null;function ke(Q,le){if(u=le.getViewerPose(c||a),_=le,u!==null){const Ce=u.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Me=!1;Ce.length!==y.cameras.length&&(y.cameras.length=0,Me=!0);for(let Ne=0;Ne<Ce.length;Ne++){const Oe=Ce[Ne];let Qe=null;if(m!==null)Qe=m.getViewport(Oe);else{const Ke=d.getViewSubImage(f,Oe);Qe=Ke.viewport,Ne===0&&(e.setRenderTargetTextures(S,Ke.colorTexture,f.ignoreDepthValues?void 0:Ke.depthStencilTexture),e.setRenderTarget(S))}let Be=b[Ne];Be===void 0&&(Be=new sn,Be.layers.enable(Ne),Be.viewport=new xt,b[Ne]=Be),Be.matrix.fromArray(Oe.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Oe.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ne===0&&(y.matrix.copy(Be.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),Me===!0&&y.cameras.push(Be)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Ne=d.getDepthInformation(Ce[0]);Ne&&Ne.isValid&&Ne.texture&&g.init(e,Ne,r.renderState)}}for(let Ce=0;Ce<E.length;Ce++){const Me=v[Ce],Fe=E[Ce];Me!==null&&Fe!==void 0&&Fe.update(Me,le,c||a)}Ee&&Ee(Q,le),le.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:le}),_=null}const nt=new Nc;nt.setAnimationLoop(ke),this.setAnimationLoop=function(Q){Ee=Q},this.dispose=function(){}}}const gi=new Wn,Ng=new _t;function Dg(n,e){function t(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function i(p,h){h.color.getRGB(p.fogColor.value,Tc(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function r(p,h,S,E,v){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(p,h):h.isMeshToonMaterial?(s(p,h),d(p,h)):h.isMeshPhongMaterial?(s(p,h),u(p,h)):h.isMeshStandardMaterial?(s(p,h),f(p,h),h.isMeshPhysicalMaterial&&m(p,h,v)):h.isMeshMatcapMaterial?(s(p,h),_(p,h)):h.isMeshDepthMaterial?s(p,h):h.isMeshDistanceMaterial?(s(p,h),g(p,h)):h.isMeshNormalMaterial?s(p,h):h.isLineBasicMaterial?(a(p,h),h.isLineDashedMaterial&&o(p,h)):h.isPointsMaterial?l(p,h,S,E):h.isSpriteMaterial?c(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,t(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===Xt&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,t(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===Xt&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,t(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,t(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const S=e.get(h),E=S.envMap,v=S.envMapRotation;E&&(p.envMap.value=E,gi.copy(v),gi.x*=-1,gi.y*=-1,gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),p.envMapRotation.value.setFromMatrix4(Ng.makeRotationFromEuler(gi)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,p.aoMapTransform))}function a(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform))}function o(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,S,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*S,p.scale.value=E*.5,h.map&&(p.map.value=h.map,t(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,t(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,t(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function u(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function d(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function f(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function m(p,h,S){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Xt&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,h){h.matcap&&(p.matcap.value=h.matcap)}function g(p,h){const S=e.get(h).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ig(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,E){const v=E.program;i.uniformBlockBinding(S,v)}function c(S,E){let v=r[S.id];v===void 0&&(_(S),v=u(S),r[S.id]=v,S.addEventListener("dispose",p));const R=E.program;i.updateUBOMapping(S,R);const w=e.render.frame;s[S.id]!==w&&(f(S),s[S.id]=w)}function u(S){const E=d();S.__bindingPointIndex=E;const v=n.createBuffer(),R=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,v),v}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const E=r[S.id],v=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let w=0,C=v.length;w<C;w++){const D=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,y=D.length;b<y;b++){const L=D[b];if(m(L,w,b,R)===!0){const K=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let Y=0;Y<G.length;Y++){const q=G[Y],ue=g(q);typeof q=="number"||typeof q=="boolean"?(L.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,K+z,L.__data)):q.isMatrix3?(L.__data[0]=q.elements[0],L.__data[1]=q.elements[1],L.__data[2]=q.elements[2],L.__data[3]=0,L.__data[4]=q.elements[3],L.__data[5]=q.elements[4],L.__data[6]=q.elements[5],L.__data[7]=0,L.__data[8]=q.elements[6],L.__data[9]=q.elements[7],L.__data[10]=q.elements[8],L.__data[11]=0):(q.toArray(L.__data,z),z+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,K,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,E,v,R){const w=S.value,C=E+"_"+v;if(R[C]===void 0)return typeof w=="number"||typeof w=="boolean"?R[C]=w:R[C]=w.clone(),!0;{const D=R[C];if(typeof w=="number"||typeof w=="boolean"){if(D!==w)return R[C]=w,!0}else if(D.equals(w)===!1)return D.copy(w),!0}return!1}function _(S){const E=S.uniforms;let v=0;const R=16;for(let C=0,D=E.length;C<D;C++){const b=Array.isArray(E[C])?E[C]:[E[C]];for(let y=0,L=b.length;y<L;y++){const K=b[y],G=Array.isArray(K.value)?K.value:[K.value];for(let z=0,Y=G.length;z<Y;z++){const q=G[z],ue=g(q),W=v%R,de=W%ue.boundary,fe=W+de;v+=de,fe!==0&&R-fe<ue.storage&&(v+=R-fe),K.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=v,v+=ue.storage}}}const w=v%R;return w>0&&(v+=R-w),S.__size=v,S.__cache={},this}function g(S){const E={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(E.boundary=4,E.storage=4):S.isVector2?(E.boundary=8,E.storage=8):S.isVector3||S.isColor?(E.boundary=16,E.storage=12):S.isVector4?(E.boundary=16,E.storage=16):S.isMatrix3?(E.boundary=48,E.storage=48):S.isMatrix4?(E.boundary=64,E.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),E}function p(S){const E=S.target;E.removeEventListener("dispose",p);const v=a.indexOf(E.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function h(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:h}}class Oc{constructor(e={}){const{canvas:t=md(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),g=new Int32Array(4);let p=null,h=null;const S=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=ai,this.toneMappingExposure=1;const v=this;let R=!1,w=0,C=0,D=null,b=-1,y=null;const L=new xt,K=new xt;let G=null;const z=new st(0);let Y=0,q=t.width,ue=t.height,W=1,de=null,fe=null;const Ee=new xt(0,0,q,ue),ke=new xt(0,0,q,ue);let nt=!1;const Q=new Rc;let le=!1,Ce=!1;const Me=new _t,Fe=new _t,Ne=new B,Oe=new xt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function Ke(){return D===null?W:1}let P=i;function gt(M,U){return t.getContext(M,U)}try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${po}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",se,!1),t.addEventListener("webglcontextcreationerror",ve,!1),P===null){const U="webgl2";if(P=gt(U,M),P===null)throw gt(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Xe,qe,Le,at,Pe,A,x,k,te,ie,J,Re,T,O,ee,I,Z,oe,_e,ce,Ie,me,We,N;function pe(){Xe=new Wp(P),Xe.init(),me=new Ag(P,Xe),qe=new Bp(P,Xe,e,me),Le=new Eg(P,Xe),qe.reverseDepthBuffer&&f&&Le.buffers.depth.setReversed(!0),at=new $p(P),Pe=new dg,A=new Tg(P,Xe,Le,Pe,qe,me,at),x=new kp(v),k=new Gp(v),te=new Qd(P),We=new Fp(P,te),ie=new Xp(P,te,at,We),J=new jp(P,ie,te,at),_e=new Yp(P,qe,A),I=new zp(Pe),Re=new ug(v,x,k,Xe,qe,We,I),T=new Dg(v,Pe),O=new fg,ee=new xg(Xe),oe=new Up(v,x,k,Le,J,m,l),Z=new bg(v,J,qe),N=new Ig(P,at,qe,Le),ce=new Op(P,Xe,at),Ie=new qp(P,Xe,at),at.programs=Re.programs,v.capabilities=qe,v.extensions=Xe,v.properties=Pe,v.renderLists=O,v.shadowMap=Z,v.state=Le,v.info=at}pe();const X=new Lg(v,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const M=Xe.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Xe.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(M){M!==void 0&&(W=M,this.setSize(q,ue,!1))},this.getSize=function(M){return M.set(q,ue)},this.setSize=function(M,U,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=M,ue=U,t.width=Math.floor(M*W),t.height=Math.floor(U*W),H===!0&&(t.style.width=M+"px",t.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(q*W,ue*W).floor()},this.setDrawingBufferSize=function(M,U,H){q=M,ue=U,W=H,t.width=Math.floor(M*H),t.height=Math.floor(U*H),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(Ee)},this.setViewport=function(M,U,H,V){M.isVector4?Ee.set(M.x,M.y,M.z,M.w):Ee.set(M,U,H,V),Le.viewport(L.copy(Ee).multiplyScalar(W).round())},this.getScissor=function(M){return M.copy(ke)},this.setScissor=function(M,U,H,V){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,U,H,V),Le.scissor(K.copy(ke).multiplyScalar(W).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(M){Le.setScissorTest(nt=M)},this.setOpaqueSort=function(M){de=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(M=!0,U=!0,H=!0){let V=0;if(M){let F=!1;if(D!==null){const re=D.texture.format;F=re===Mo||re===xo||re===vo}if(F){const re=D.texture.type,xe=re===Gn||re===Si||re===xr||re===Ki||re===go||re===_o,be=oe.getClearColor(),$=oe.getClearAlpha(),he=be.r,Ae=be.g,ae=be.b;xe?(_[0]=he,_[1]=Ae,_[2]=ae,_[3]=$,P.clearBufferuiv(P.COLOR,0,_)):(g[0]=he,g[1]=Ae,g[2]=ae,g[3]=$,P.clearBufferiv(P.COLOR,0,g))}else V|=P.COLOR_BUFFER_BIT}U&&(V|=P.DEPTH_BUFFER_BIT),H&&(V|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",se,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),oe.dispose(),O.dispose(),ee.dispose(),Pe.dispose(),x.dispose(),k.dispose(),J.dispose(),We.dispose(),N.dispose(),Re.dispose(),X.dispose(),X.removeEventListener("sessionstart",Rn),X.removeEventListener("sessionend",Kt),Ht.stop()};function ne(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function se(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const M=at.autoReset,U=Z.enabled,H=Z.autoUpdate,V=Z.needsUpdate,F=Z.type;pe(),at.autoReset=M,Z.enabled=U,Z.autoUpdate=H,Z.needsUpdate=V,Z.type=F}function ve(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Ue(M){const U=M.target;U.removeEventListener("dispose",Ue),ot(U)}function ot(M){dt(M),Pe.remove(M)}function dt(M){const U=Pe.get(M).programs;U!==void 0&&(U.forEach(function(H){Re.releaseProgram(H)}),M.isShaderMaterial&&Re.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,H,V,F,re){U===null&&(U=Qe);const xe=F.isMesh&&F.matrixWorld.determinant()<0,be=li(M,U,H,V,F);Le.setMaterial(V,xe);let $=H.index,he=1;if(V.wireframe===!0){if($=ie.getWireframeAttribute(H),$===void 0)return;he=2}const Ae=H.drawRange,ae=H.attributes.position;let He=Ae.start*he,je=(Ae.start+Ae.count)*he;re!==null&&(He=Math.max(He,re.start*he),je=Math.min(je,(re.start+re.count)*he)),$!==null?(He=Math.max(He,0),je=Math.min(je,$.count)):ae!=null&&(He=Math.max(He,0),je=Math.min(je,ae.count));const mt=je-He;if(mt<0||mt===1/0)return;We.setup(F,V,be,H,$);let ht,Je=ce;if($!==null&&(ht=te.get($),Je=Ie,Je.setIndex(ht)),F.isMesh)V.wireframe===!0?(Le.setLineWidth(V.wireframeLinewidth*Ke()),Je.setMode(P.LINES)):Je.setMode(P.TRIANGLES);else if(F.isLine){let De=V.linewidth;De===void 0&&(De=1),Le.setLineWidth(De*Ke()),F.isLineSegments?Je.setMode(P.LINES):F.isLineLoop?Je.setMode(P.LINE_LOOP):Je.setMode(P.LINE_STRIP)}else F.isPoints?Je.setMode(P.POINTS):F.isSprite&&Je.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Je.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))Je.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const De=F._multiDrawStarts,vt=F._multiDrawCounts,tt=F._multiDrawCount,Lt=$?te.get($).bytesPerElement:1,Sn=Pe.get(V).currentProgram.getUniforms();for(let Ut=0;Ut<tt;Ut++)Sn.setValue(P,"_gl_DrawID",Ut),Je.render(De[Ut]/Lt,vt[Ut])}else if(F.isInstancedMesh)Je.renderInstances(He,mt,F.count);else if(H.isInstancedBufferGeometry){const De=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,vt=Math.min(H.instanceCount,De);Je.renderInstances(He,mt,vt)}else Je.render(He,mt)};function $e(M,U,H){M.transparent===!0&&M.side===On&&M.forceSinglePass===!1?(M.side=Xt,M.needsUpdate=!0,it(M,U,H),M.side=oi,M.needsUpdate=!0,it(M,U,H),M.side=On):it(M,U,H)}this.compile=function(M,U,H=null){H===null&&(H=M),h=ee.get(H),h.init(U),E.push(h),H.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),M!==H&&M.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(h.pushLight(F),F.castShadow&&h.pushShadow(F))}),h.setupLights();const V=new Set;return M.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const re=F.material;if(re)if(Array.isArray(re))for(let xe=0;xe<re.length;xe++){const be=re[xe];$e(be,H,F),V.add(be)}else $e(re,H,F),V.add(re)}),E.pop(),h=null,V},this.compileAsync=function(M,U,H=null){const V=this.compile(M,U,H);return new Promise(F=>{function re(){if(V.forEach(function(xe){Pe.get(xe).currentProgram.isReady()&&V.delete(xe)}),V.size===0){F(M);return}setTimeout(re,10)}Xe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let St=null;function wt(M){St&&St(M)}function Rn(){Ht.stop()}function Kt(){Ht.start()}const Ht=new Nc;Ht.setAnimationLoop(wt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(M){St=M,X.setAnimationLoop(M),M===null?Ht.stop():Ht.start()},X.addEventListener("sessionstart",Rn),X.addEventListener("sessionend",Kt),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(U),U=X.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,U,D),h=ee.get(M,E.length),h.init(U),E.push(h),Fe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Q.setFromProjectionMatrix(Fe),Ce=this.localClippingEnabled,le=I.init(this.clippingPlanes,Ce),p=O.get(M,S.length),p.init(),S.push(p),X.enabled===!0&&X.isPresenting===!0){const re=v.xr.getDepthSensingMesh();re!==null&&Cn(re,U,-1/0,v.sortObjects)}Cn(M,U,0,v.sortObjects),p.finish(),v.sortObjects===!0&&p.sort(de,fe),Be=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Be&&oe.addToRenderList(p,M),this.info.render.frame++,le===!0&&I.beginShadows();const H=h.state.shadowsArray;Z.render(H,M,U),le===!0&&I.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=p.opaque,F=p.transmissive;if(h.setupLights(),U.isArrayCamera){const re=U.cameras;if(F.length>0)for(let xe=0,be=re.length;xe<be;xe++){const $=re[xe];Jt(V,F,M,$)}Be&&oe.render(M);for(let xe=0,be=re.length;xe<be;xe++){const $=re[xe];et(p,M,$,$.viewport)}}else F.length>0&&Jt(V,F,M,U),Be&&oe.render(M),et(p,M,U);D!==null&&(A.updateMultisampleRenderTarget(D),A.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(v,M,U),We.resetDefaultState(),b=-1,y=null,E.pop(),E.length>0?(h=E[E.length-1],le===!0&&I.setGlobalState(v.clippingPlanes,h.state.camera)):h=null,S.pop(),S.length>0?p=S[S.length-1]:p=null};function Cn(M,U,H,V){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)h.pushLight(M),M.castShadow&&h.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Q.intersectsSprite(M)){V&&Oe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Fe);const xe=J.update(M),be=M.material;be.visible&&p.push(M,xe,be,H,Oe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Q.intersectsObject(M))){const xe=J.update(M),be=M.material;if(V&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Oe.copy(M.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Oe.copy(xe.boundingSphere.center)),Oe.applyMatrix4(M.matrixWorld).applyMatrix4(Fe)),Array.isArray(be)){const $=xe.groups;for(let he=0,Ae=$.length;he<Ae;he++){const ae=$[he],He=be[ae.materialIndex];He&&He.visible&&p.push(M,xe,He,H,Oe.z,ae)}}else be.visible&&p.push(M,xe,be,H,Oe.z,null)}}const re=M.children;for(let xe=0,be=re.length;xe<be;xe++)Cn(re[xe],U,H,V)}function et(M,U,H,V){const F=M.opaque,re=M.transmissive,xe=M.transparent;h.setupLightsView(H),le===!0&&I.setGlobalState(v.clippingPlanes,H),V&&Le.viewport(L.copy(V)),F.length>0&&ge(F,U,H),re.length>0&&ge(re,U,H),xe.length>0&&ge(xe,U,H),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function Jt(M,U,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[V.id]===void 0&&(h.state.transmissionRenderTarget[V.id]=new Ei(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?Tr:Gn,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:rt.workingColorSpace}));const re=h.state.transmissionRenderTarget[V.id],xe=V.viewport||L;re.setSize(xe.z,xe.w);const be=v.getRenderTarget();v.setRenderTarget(re),v.getClearColor(z),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),Be&&oe.render(H);const $=v.toneMapping;v.toneMapping=ai;const he=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),h.setupLightsView(V),le===!0&&I.setGlobalState(v.clippingPlanes,V),ge(M,H,V),A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let ae=0,He=U.length;ae<He;ae++){const je=U[ae],mt=je.object,ht=je.geometry,Je=je.material,De=je.group;if(Je.side===On&&mt.layers.test(V.layers)){const vt=Je.side;Je.side=Xt,Je.needsUpdate=!0,ze(mt,H,V,ht,Je,De),Je.side=vt,Je.needsUpdate=!0,Ae=!0}}Ae===!0&&(A.updateMultisampleRenderTarget(re),A.updateRenderTargetMipmap(re))}v.setRenderTarget(be),v.setClearColor(z,Y),he!==void 0&&(V.viewport=he),v.toneMapping=$}function ge(M,U,H){const V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,re=M.length;F<re;F++){const xe=M[F],be=xe.object,$=xe.geometry,he=V===null?xe.material:V,Ae=xe.group;be.layers.test(H.layers)&&ze(be,U,H,$,he,Ae)}}function ze(M,U,H,V,F,re){M.onBeforeRender(v,U,H,V,F,re),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),F.onBeforeRender(v,U,H,V,M,re),F.transparent===!0&&F.side===On&&F.forceSinglePass===!1?(F.side=Xt,F.needsUpdate=!0,v.renderBufferDirect(H,U,V,F,M,re),F.side=oi,F.needsUpdate=!0,v.renderBufferDirect(H,U,V,F,M,re),F.side=On):v.renderBufferDirect(H,U,V,F,M,re),M.onAfterRender(v,U,H,V,F,re)}function it(M,U,H){U.isScene!==!0&&(U=Qe);const V=Pe.get(M),F=h.state.lights,re=h.state.shadowsArray,xe=F.state.version,be=Re.getParameters(M,F.state,re,U,H),$=Re.getProgramCacheKey(be);let he=V.programs;V.environment=M.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(M.isMeshStandardMaterial?k:x).get(M.envMap||V.environment),V.envMapRotation=V.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,he===void 0&&(M.addEventListener("dispose",Ue),he=new Map,V.programs=he);let Ae=he.get($);if(Ae!==void 0){if(V.currentProgram===Ae&&V.lightsStateVersion===xe)return un(M,be),Ae}else be.uniforms=Re.getUniforms(M),M.onBeforeCompile(be,v),Ae=Re.acquireProgram(be,$),he.set($,Ae),V.uniforms=be.uniforms;const ae=V.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(ae.clippingPlanes=I.uniform),un(M,be),V.needsLights=bn(M),V.lightsStateVersion=xe,V.needsLights&&(ae.ambientLightColor.value=F.state.ambient,ae.lightProbe.value=F.state.probe,ae.directionalLights.value=F.state.directional,ae.directionalLightShadows.value=F.state.directionalShadow,ae.spotLights.value=F.state.spot,ae.spotLightShadows.value=F.state.spotShadow,ae.rectAreaLights.value=F.state.rectArea,ae.ltc_1.value=F.state.rectAreaLTC1,ae.ltc_2.value=F.state.rectAreaLTC2,ae.pointLights.value=F.state.point,ae.pointLightShadows.value=F.state.pointShadow,ae.hemisphereLights.value=F.state.hemi,ae.directionalShadowMap.value=F.state.directionalShadowMap,ae.directionalShadowMatrix.value=F.state.directionalShadowMatrix,ae.spotShadowMap.value=F.state.spotShadowMap,ae.spotLightMatrix.value=F.state.spotLightMatrix,ae.spotLightMap.value=F.state.spotLightMap,ae.pointShadowMap.value=F.state.pointShadowMap,ae.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Ae,V.uniformsList=null,Ae}function Rt(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=fs.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function un(M,U){const H=Pe.get(M);H.outputColorSpace=U.outputColorSpace,H.batching=U.batching,H.batchingColor=U.batchingColor,H.instancing=U.instancing,H.instancingColor=U.instancingColor,H.instancingMorph=U.instancingMorph,H.skinning=U.skinning,H.morphTargets=U.morphTargets,H.morphNormals=U.morphNormals,H.morphColors=U.morphColors,H.morphTargetsCount=U.morphTargetsCount,H.numClippingPlanes=U.numClippingPlanes,H.numIntersection=U.numClipIntersection,H.vertexAlphas=U.vertexAlphas,H.vertexTangents=U.vertexTangents,H.toneMapping=U.toneMapping}function li(M,U,H,V,F){U.isScene!==!0&&(U=Qe),A.resetTextureUnits();const re=U.fog,xe=V.isMeshStandardMaterial?U.environment:null,be=D===null?v.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Qi,$=(V.isMeshStandardMaterial?k:x).get(V.envMap||xe),he=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ae=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),ae=!!H.morphAttributes.position,He=!!H.morphAttributes.normal,je=!!H.morphAttributes.color;let mt=ai;V.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(mt=v.toneMapping);const ht=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Je=ht!==void 0?ht.length:0,De=Pe.get(V),vt=h.state.lights;if(le===!0&&(Ce===!0||M!==y)){const Ft=M===y&&V.id===b;I.setState(V,M,Ft)}let tt=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==vt.state.version||De.outputColorSpace!==be||F.isBatchedMesh&&De.batching===!1||!F.isBatchedMesh&&De.batching===!0||F.isBatchedMesh&&De.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&De.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&De.instancing===!1||!F.isInstancedMesh&&De.instancing===!0||F.isSkinnedMesh&&De.skinning===!1||!F.isSkinnedMesh&&De.skinning===!0||F.isInstancedMesh&&De.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&De.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&De.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&De.instancingMorph===!1&&F.morphTexture!==null||De.envMap!==$||V.fog===!0&&De.fog!==re||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==I.numPlanes||De.numIntersection!==I.numIntersection)||De.vertexAlphas!==he||De.vertexTangents!==Ae||De.morphTargets!==ae||De.morphNormals!==He||De.morphColors!==je||De.toneMapping!==mt||De.morphTargetsCount!==Je)&&(tt=!0):(tt=!0,De.__version=V.version);let Lt=De.currentProgram;tt===!0&&(Lt=it(V,U,F));let Sn=!1,Ut=!1,ci=!1;const lt=Lt.getUniforms(),Qt=De.uniforms;if(Le.useProgram(Lt.program)&&(Sn=!0,Ut=!0,ci=!0),V.id!==b&&(b=V.id,Ut=!0),Sn||y!==M){Le.buffers.depth.getReversed()?(Me.copy(M.projectionMatrix),_d(Me),vd(Me),lt.setValue(P,"projectionMatrix",Me)):lt.setValue(P,"projectionMatrix",M.projectionMatrix),lt.setValue(P,"viewMatrix",M.matrixWorldInverse);const Vt=lt.map.cameraPosition;Vt!==void 0&&Vt.setValue(P,Ne.setFromMatrixPosition(M.matrixWorld)),qe.logarithmicDepthBuffer&&lt.setValue(P,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(P,"isOrthographic",M.isOrthographicCamera===!0),y!==M&&(y=M,Ut=!0,ci=!0)}if(F.isSkinnedMesh){lt.setOptional(P,F,"bindMatrix"),lt.setOptional(P,F,"bindMatrixInverse");const Ft=F.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),lt.setValue(P,"boneTexture",Ft.boneTexture,A))}F.isBatchedMesh&&(lt.setOptional(P,F,"batchingTexture"),lt.setValue(P,"batchingTexture",F._matricesTexture,A),lt.setOptional(P,F,"batchingIdTexture"),lt.setValue(P,"batchingIdTexture",F._indirectTexture,A),lt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&lt.setValue(P,"batchingColorTexture",F._colorsTexture,A));const en=H.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&_e.update(F,H,Lt),(Ut||De.receiveShadow!==F.receiveShadow)&&(De.receiveShadow=F.receiveShadow,lt.setValue(P,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Qt.envMap.value=$,Qt.flipEnvMap.value=$.isCubeTexture&&$.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(Qt.envMapIntensity.value=U.environmentIntensity),Ut&&(lt.setValue(P,"toneMappingExposure",v.toneMappingExposure),De.needsLights&&dn(Qt,ci),re&&V.fog===!0&&T.refreshFogUniforms(Qt,re),T.refreshMaterialUniforms(Qt,V,W,ue,h.state.transmissionRenderTarget[M.id]),fs.upload(P,Rt(De),Qt,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(fs.upload(P,Rt(De),Qt,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(P,"center",F.center),lt.setValue(P,"modelViewMatrix",F.modelViewMatrix),lt.setValue(P,"normalMatrix",F.normalMatrix),lt.setValue(P,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Ft=V.uniformsGroups;for(let Vt=0,Bs=Ft.length;Vt<Bs;Vt++){const ui=Ft[Vt];N.update(ui,Lt),N.bind(ui,Lt)}}return Lt}function dn(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function bn(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,U,H){Pe.get(M.texture).__webglTexture=U,Pe.get(M.depthTexture).__webglTexture=H;const V=Pe.get(M);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const H=Pe.get(M);H.__webglFramebuffer=U,H.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,H=0){D=M,w=U,C=H;let V=!0,F=null,re=!1,xe=!1;if(M){const $=Pe.get(M);if($.__useDefaultFramebuffer!==void 0)Le.bindFramebuffer(P.FRAMEBUFFER,null),V=!1;else if($.__webglFramebuffer===void 0)A.setupRenderTarget(M);else if($.__hasExternalTextures)A.rebindTextures(M,Pe.get(M.texture).__webglTexture,Pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const ae=M.depthTexture;if($.__boundDepthTexture!==ae){if(ae!==null&&Pe.has(ae)&&(M.width!==ae.image.width||M.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(M)}}const he=M.texture;(he.isData3DTexture||he.isDataArrayTexture||he.isCompressedArrayTexture)&&(xe=!0);const Ae=Pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?F=Ae[U][H]:F=Ae[U],re=!0):M.samples>0&&A.useMultisampledRTT(M)===!1?F=Pe.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?F=Ae[H]:F=Ae,L.copy(M.viewport),K.copy(M.scissor),G=M.scissorTest}else L.copy(Ee).multiplyScalar(W).floor(),K.copy(ke).multiplyScalar(W).floor(),G=nt;if(Le.bindFramebuffer(P.FRAMEBUFFER,F)&&V&&Le.drawBuffers(M,F),Le.viewport(L),Le.scissor(K),Le.setScissorTest(G),re){const $=Pe.get(M.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,$.__webglTexture,H)}else if(xe){const $=Pe.get(M.texture),he=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,$.__webglTexture,H||0,he)}b=-1},this.readRenderTargetPixels=function(M,U,H,V,F,re,xe){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){Le.bindFramebuffer(P.FRAMEBUFFER,be);try{const $=M.texture,he=$.format,Ae=$.type;if(!qe.textureFormatReadable(he)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-V&&H>=0&&H<=M.height-F&&P.readPixels(U,H,V,F,me.convert(he),me.convert(Ae),re)}finally{const $=D!==null?Pe.get(D).__webglFramebuffer:null;Le.bindFramebuffer(P.FRAMEBUFFER,$)}}},this.readRenderTargetPixelsAsync=async function(M,U,H,V,F,re,xe){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){const $=M.texture,he=$.format,Ae=$.type;if(!qe.textureFormatReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-V&&H>=0&&H<=M.height-F){Le.bindFramebuffer(P.FRAMEBUFFER,be);const ae=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ae),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),P.readPixels(U,H,V,F,me.convert(he),me.convert(Ae),0);const He=D!==null?Pe.get(D).__webglFramebuffer:null;Le.bindFramebuffer(P.FRAMEBUFFER,He);const je=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await gd(P,je,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ae),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(ae),P.deleteSync(je),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,H=0){M.isTexture!==!0&&(Vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const V=Math.pow(2,-H),F=Math.floor(M.image.width*V),re=Math.floor(M.image.height*V),xe=U!==null?U.x:0,be=U!==null?U.y:0;A.setTexture2D(M,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,xe,be,F,re),Le.unbindTexture()};const sr=P.createFramebuffer(),Ti=P.createFramebuffer();this.copyTextureToTexture=function(M,U,H=null,V=null,F=0,re=null){M.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,M=arguments[1],U=arguments[2],re=arguments[3]||0,H=null),re===null&&(F!==0?(Vi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=F,F=0):re=0);let xe,be,$,he,Ae,ae,He,je,mt;const ht=M.isCompressedTexture?M.mipmaps[re]:M.image;if(H!==null)xe=H.max.x-H.min.x,be=H.max.y-H.min.y,$=H.isBox3?H.max.z-H.min.z:1,he=H.min.x,Ae=H.min.y,ae=H.isBox3?H.min.z:0;else{const en=Math.pow(2,-F);xe=Math.floor(ht.width*en),be=Math.floor(ht.height*en),M.isDataArrayTexture?$=ht.depth:M.isData3DTexture?$=Math.floor(ht.depth*en):$=1,he=0,Ae=0,ae=0}V!==null?(He=V.x,je=V.y,mt=V.z):(He=0,je=0,mt=0);const Je=me.convert(U.format),De=me.convert(U.type);let vt;U.isData3DTexture?(A.setTexture3D(U,0),vt=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),vt=P.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),vt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const tt=P.getParameter(P.UNPACK_ROW_LENGTH),Lt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Sn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ut=P.getParameter(P.UNPACK_SKIP_ROWS),ci=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,ht.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ht.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,he),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ae);const lt=M.isDataArrayTexture||M.isData3DTexture,Qt=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const en=Pe.get(M),Ft=Pe.get(U),Vt=Pe.get(en.__renderTarget),Bs=Pe.get(Ft.__renderTarget);Le.bindFramebuffer(P.READ_FRAMEBUFFER,Vt.__webglFramebuffer),Le.bindFramebuffer(P.DRAW_FRAMEBUFFER,Bs.__webglFramebuffer);for(let ui=0;ui<$;ui++)lt&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.get(M).__webglTexture,F,ae+ui),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Pe.get(U).__webglTexture,re,mt+ui)),P.blitFramebuffer(he,Ae,xe,be,He,je,xe,be,P.DEPTH_BUFFER_BIT,P.NEAREST);Le.bindFramebuffer(P.READ_FRAMEBUFFER,null),Le.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(F!==0||M.isRenderTargetTexture||Pe.has(M)){const en=Pe.get(M),Ft=Pe.get(U);Le.bindFramebuffer(P.READ_FRAMEBUFFER,sr),Le.bindFramebuffer(P.DRAW_FRAMEBUFFER,Ti);for(let Vt=0;Vt<$;Vt++)lt?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,en.__webglTexture,F,ae+Vt):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,en.__webglTexture,F),Qt?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ft.__webglTexture,re,mt+Vt):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ft.__webglTexture,re),F!==0?P.blitFramebuffer(he,Ae,xe,be,He,je,xe,be,P.COLOR_BUFFER_BIT,P.NEAREST):Qt?P.copyTexSubImage3D(vt,re,He,je,mt+Vt,he,Ae,xe,be):P.copyTexSubImage2D(vt,re,He,je,he,Ae,xe,be);Le.bindFramebuffer(P.READ_FRAMEBUFFER,null),Le.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Qt?M.isDataTexture||M.isData3DTexture?P.texSubImage3D(vt,re,He,je,mt,xe,be,$,Je,De,ht.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(vt,re,He,je,mt,xe,be,$,Je,ht.data):P.texSubImage3D(vt,re,He,je,mt,xe,be,$,Je,De,ht):M.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,re,He,je,xe,be,Je,De,ht.data):M.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,re,He,je,ht.width,ht.height,Je,ht.data):P.texSubImage2D(P.TEXTURE_2D,re,He,je,xe,be,Je,De,ht);P.pixelStorei(P.UNPACK_ROW_LENGTH,tt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Lt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Sn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,ci),re===0&&U.generateMipmaps&&P.generateMipmap(vt),Le.unbindTexture()},this.copyTextureToTexture3D=function(M,U,H=null,V=null,F=0){return M.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,M=arguments[2],U=arguments[3],F=arguments[4]||0),Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,H,V,F)},this.initRenderTarget=function(M){Pe.get(M).__webglFramebuffer===void 0&&A.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?A.setTextureCube(M,0):M.isData3DTexture?A.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?A.setTexture2DArray(M,0):A.setTexture2D(M,0),Le.unbindTexture()},this.resetState=function(){w=0,C=0,D=null,Le.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=rt._getDrawingBufferColorSpace(e),t.unpackColorSpace=rt._getUnpackColorSpace()}}const Ug=[{id:"amplitude",type:"number",range:[0,1],category:"base"},{id:"binEnergy",type:"number",range:[0,1],category:"base"},{id:"frequencyHz",type:"number",range:[0,22050],category:"base"},{id:"normFreq",type:"number",range:[0,1],category:"base"},{id:"bass",type:"number",range:[0,1],category:"base"},{id:"mid",type:"number",range:[0,1],category:"base"},{id:"high",type:"number",range:[0,1],category:"base"},{id:"peakFreq",type:"number",range:[0,22050],category:"base"},{id:"pan",type:"number",range:[-1,1],category:"base"},{id:"time",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"base"},{id:"deltaTime",type:"number",range:[0,1],category:"base"},{id:"globalRmsEnergy",type:"number",range:[0,1],category:"advanced"},{id:"spectralCentroid",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlux",type:"number",range:[0,1],category:"advanced"},{id:"spectralFlatness",type:"number",range:[0,1],category:"advanced"},{id:"inharmonicity",type:"number",range:[0,1],category:"advanced"},{id:"binMagnitude",type:"number",range:[0,1],category:"advanced"},{id:"binFlux",type:"number",range:[-1,1],category:"advanced"},{id:"binPhaseDeviation",type:"number",range:[0,1],category:"advanced"},{id:"binPhasedeviation",type:"number",range:[0,1],category:"advanced"},{id:"binAttackTime",type:"number",range:[0,1],category:"advanced"},{id:"binEnvelope",type:"number",range:[0,3],category:"advanced"},{id:"canvasWidthPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightPx",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasWidthUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"canvasHeightUnits",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"},{id:"audioLengthSec",type:"number",range:[0,Number.POSITIVE_INFINITY],category:"context"}],Fg=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]}],Og=Object.freeze({r:"red",g:"green",b:"blue",a:"opacity",backgroundRed:"red",backgroundGreen:"green",backgroundBlue:"blue"}),Bg=Object.freeze(new Set(["backgroundRed","backgroundGreen","backgroundBlue"])),Ps=Object.freeze(["spawnedParticles","allParticles","background","camera"]),Bc=Object.freeze(["spawnedOnly","allLivingFrame"]),To=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),zc=Object.freeze(["always",">",">=","<","<=","==","!="]),Ls=Object.freeze({version:1,entries:Object.freeze(Ug.map(n=>Object.freeze({...n})))}),Ns=Object.freeze({version:1,entries:Object.freeze(Fg.map(n=>Object.freeze({...n})))});new Map(Ls.entries.map(n=>[n.id,n]));const zg=new Map(Ns.entries.map(n=>[n.id,n]));function kc(){return Ls}function kg(){return Ns}function Hg(n){return!n||n.type==="always"||n.operator==="always"}function Vg(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function Bl(n,e){if(typeof n!="string")return null;const t=n.trim();if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:]+$/.test(t))return"Expression contains unsupported characters.";if(!Vg(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","PI","E","true","false"]),r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of r)if(!i.has(s))return`Expression references unknown identifier: ${s}`;return null}function Hc(n){return typeof n!="string"?n:Og[n]||n}function Ao(n){return Ps.includes(n==null?void 0:n.target)?n.target:(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function Gg(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:Ps).includes(e)}function Wg(n,e={input:Ls,output:Ns}){var d,f,m,_,g;const t=[],i=[],r=[],s=new Map((((d=e.input)==null?void 0:d.entries)??[]).map(p=>[p.id,p])),a=new Map((((f=e.output)==null?void 0:f.entries)??[]).map(p=>[p.id,p]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};Bc.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=Ao(n);if(Ps.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(m=n.condition)!=null&&m.operator&&!zc.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((_=n.condition)==null?void 0:_.expression)!==void 0){const p=Bl(n.condition.expression,s);p&&t.push(`Condition expression invalid: ${p}`)}const l=(g=n.condition)==null?void 0:g.input;l&&!s.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],u=new Map;return c.forEach((p,h)=>{const S=Hc(p==null?void 0:p.output);if(!S||!a.has(S)){t.push(`Unknown action output at index ${h}: ${String(S)}`);return}const E=a.get(S);if(Gg(E,o)||t.push(`Output ${S} is not valid for target ${o} at index ${h}`),p!=null&&p.operator&&!To.includes(p.operator)&&t.push(`Unknown action operator at index ${h}: ${String(p.operator)}`),E.type==="enum"&&(p==null?void 0:p.value)!==void 0&&!E.values.includes(p.value)&&t.push(`Invalid enum value for ${S} at index ${h}: ${String(p.value)}. Allowed: ${E.values.join("|")}`),(p==null?void 0:p.operator)==="set"){const v=u.get(S);v!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:S,overriddenActionIndex:v,winningActionIndex:h,resolution:"latter-executes"}),i.push(`Contradiction on ${S}: action ${h} overrides action ${v}.`)),u.set(S,h)}if(p!=null&&p.input&&!s.has(p.input)&&t.push(`Unknown action input at index ${h}: ${p.input}`),(p==null?void 0:p.expression)!==void 0){const v=Bl(p.expression,s);v&&t.push(`Action expression invalid at index ${h}: ${v}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function Xg(n){const e=Array.isArray(n)?n:[],t=new Map,i=new Set,r=[];return e.forEach((a,o)=>{if(!(a!=null&&a.enabled))return;const l=a.scope||"spawnedOnly",c=a.id||`rule-${o}`,u=Array.isArray(a.actions)?a.actions:[];Hg(a.condition)&&u.forEach(f=>{if((f==null?void 0:f.operator)!=="set"||!zg.has(f==null?void 0:f.output))return;const m=Ao(a),_=`${m}:${l}:${f.output}`,g=t.get(_);g&&(i.add(g.ruleId),i.add(c),r.push({color:"red",type:"crossRuleConflict",scope:l,target:m,output:f.output,overriddenRuleId:g.ruleId,winningRuleId:c,resolution:"latter-executes"})),t.set(_,{ruleId:c,index:o})})}),{rules:e.map((a,o)=>{const l=(a==null?void 0:a.id)||`rule-${o}`;return{...a,uiState:i.has(l)?"red":"normal"}}),notes:r,redRuleIds:[...i]}}function Vc(n,e={input:Ls,output:Ns}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((s,a)=>{const o={id:typeof(s==null?void 0:s.id)=="string"&&s.id.trim()?s.id.trim():`rule-${a}`,group:typeof(s==null?void 0:s.group)=="string"?s.group:"",subgroup:typeof(s==null?void 0:s.subgroup)=="string"?s.subgroup:"",enabled:(s==null?void 0:s.enabled)!==!1,target:Ao(s),scope:Bc.includes(s==null?void 0:s.scope)?s.scope:"spawnedOnly",condition:s!=null&&s.condition&&typeof s.condition=="object"?{...s.condition}:{operator:"always"},actions:Array.isArray(s==null?void 0:s.actions)?s.actions.map(c=>({...c})):[],order:Number.isFinite(s==null?void 0:s.order)?Number(s.order):a};o.condition.operator||(o.condition.operator="always"),zc.includes(o.condition.operator)||(o.condition.operator="always"),o.scope=o.target==="spawnedParticles"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(c=>c&&typeof c=="object").map(c=>{const u=c.output;return Bg.has(u)&&!(s!=null&&s.target)&&(o.target="background",o.scope="allLivingFrame"),{operator:To.includes(c.operator)?c.operator:"set",output:Hc(u),value:c.value,input:c.input,expression:c.expression}});const l=Wg(o,e);l.ok?i.push(o):r.push({id:o.id,index:a,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const Ds="http://localhost:8000",Gc="seesound_user_defaults_v4",Wc="seesound_disabled_v4",bs=1,qg={logCompilerStatus:!1,logCompilerTiming:!1},zl=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:bs}),kl=[{id:"inputGain",label:"Input"},{id:"inputProcessing",label:"Input Processing"},{id:"geometry",label:"Geometry"},{id:"mixing",label:"Mixing"}];function It({key:n,label:e,min:t,max:i,step:r,def:s,unit:a,desc:o}){return{key:n,group:"inputProcessing",label:e,min:t,max:i,step:r,default:s,unit:a,desc:o,canDisable:!1}}const yr=[{key:"inputGain",group:"inputGain",label:"Input Gain",min:0,max:3,step:.01,default:1,unit:"×",desc:"Scales every amplitude value before processing. 1× = unchanged.",canDisable:!1},{key:"amplitudeThreshold",group:"inputGain",label:"Amplitude Threshold",min:-96,max:0,step:1,default:-48,unit:"dB",desc:"Hard noise gate: any bin quieter than this level is hidden.",canDisable:!0},{key:"freqNormMin",group:"inputProcessing",label:"Freq Norm Min",min:16,max:2e4,step:1,default:40,unit:"Hz",desc:"Lower bound for log2-based frequency normalization into normFreq.",canDisable:!1},{key:"freqNormMax",group:"inputProcessing",label:"Freq Norm Max",min:16,max:2e4,step:1,default:12e3,unit:"Hz",desc:"Upper bound for log2-based frequency normalization into normFreq.",canDisable:!1},It({key:"binMagnitudeNormMin",label:"Per-Bin Magnitude Min",min:-120,max:0,step:1,def:-70,unit:"dBFS",desc:"Normalizes the absolute volume of the individual frequency bin. Sets the noise floor (Min) and the peak ceiling (Max). Measurement: decibels relative to full scale (dBFS)."}),It({key:"binMagnitudeNormMax",label:"Per-Bin Magnitude Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalizes the absolute volume of the individual frequency bin. Sets the noise floor (Min) and the peak ceiling (Max). Measurement: decibels relative to full scale (dBFS)."}),It({key:"binFluxNormMin",label:"Per-Bin Spectral Flux Min",min:0,max:2,step:.001,def:0,unit:"delta",desc:"Normalizes the attack sharpness of the specific bin. 0 is a sustained note; high values are sharp percussive hits within this frequency. Measurement: linear amplitude delta per frame."}),It({key:"binFluxNormMax",label:"Per-Bin Spectral Flux Max",min:0,max:2,step:.001,def:.5,unit:"delta",desc:"Normalizes the attack sharpness of the specific bin. 0 is a sustained note; high values are sharp percussive hits within this frequency. Measurement: linear amplitude delta per frame."}),It({key:"binPhaseDeviationNormMin",label:"Per-Bin Phase Deviation Min",min:0,max:3.14,step:.001,def:0,unit:"rad",desc:"Normalizes the noisiness of the bin. 0.0 represents a pure tonal frequency. 3.14 represents chaotic, unpitched noise. Measurement: radians."}),It({key:"binPhaseDeviationNormMax",label:"Per-Bin Phase Deviation Max",min:0,max:3.14,step:.001,def:3.14,unit:"rad",desc:"Normalizes the noisiness of the bin. 0.0 represents a pure tonal frequency. 3.14 represents chaotic, unpitched noise. Measurement: radians."}),It({key:"binAttackTimeNormMin",label:"Per-Bin Attack Time Min",min:0,max:2e3,step:1,def:5,unit:"ms",desc:"Normalizes the time it takes for a frequency bin to reach its peak amplitude. Separates fast strikes from slow atmospheric swells. Measurement: milliseconds (ms)."}),It({key:"binAttackTimeNormMax",label:"Per-Bin Attack Time Max",min:0,max:2e3,step:1,def:500,unit:"ms",desc:"Normalizes the time it takes for a frequency bin to reach its peak amplitude. Separates fast strikes from slow atmospheric swells. Measurement: milliseconds (ms)."}),It({key:"globalRmsNormMin",label:"Global RMS Energy Min",min:-120,max:0,step:1,def:-60,unit:"dBFS",desc:"Normalizes the total average acoustic power of the entire audio frame. Used to drive global lighting or macro-camera movements. Measurement: decibels relative to full scale (dBFS)."}),It({key:"globalRmsNormMax",label:"Global RMS Energy Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalizes the total average acoustic power of the entire audio frame. Used to drive global lighting or macro-camera movements. Measurement: decibels relative to full scale (dBFS)."}),It({key:"spectralCentroidNormMin",label:"Spectral Centroid Min",min:16,max:22050,step:1,def:150,unit:"Hz",desc:"Normalizes the center of mass of the sound. Low values mean a bass-heavy, dark frame; high values mean a treble-heavy, bright frame. Measurement: Hertz (Hz)."}),It({key:"spectralCentroidNormMax",label:"Spectral Centroid Max",min:16,max:22050,step:1,def:8e3,unit:"Hz",desc:"Normalizes the center of mass of the sound. Low values mean a bass-heavy, dark frame; high values mean a treble-heavy, bright frame. Measurement: Hertz (Hz)."}),It({key:"globalSpectralFluxNormMin",label:"Global Spectral Flux Min",min:0,max:200,step:.1,def:0,unit:"AU",desc:"Normalizes the total energy change across all frequencies. Spikes indicate major rhythmic beats or structural song changes. Measurement: aggregate energy delta (engine arbitrary units)."}),It({key:"globalSpectralFluxNormMax",label:"Global Spectral Flux Max",min:0,max:200,step:.1,def:100,unit:"AU",desc:"Normalizes the total energy change across all frequencies. Spikes indicate major rhythmic beats or structural song changes. Measurement: aggregate energy delta (engine arbitrary units)."}),It({key:"spectralFlatnessNormMin",label:"Spectral Flatness Min",min:0,max:1,step:.001,def:0,unit:"ratio",desc:"Normalizes the global ratio of noise to tone. 0.0 indicates a highly pitched, melodic frame; 1.0 indicates broadband white noise or dense drum washes. Measurement: ratio (0.0 to 1.0)."}),It({key:"spectralFlatnessNormMax",label:"Spectral Flatness Max",min:0,max:1,step:.001,def:1,unit:"ratio",desc:"Normalizes the global ratio of noise to tone. 0.0 indicates a highly pitched, melodic frame; 1.0 indicates broadband white noise or dense drum washes. Measurement: ratio (0.0 to 1.0)."}),{key:"defaultParticleSize",group:"geometry",label:"Particle Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"defaultBackgroundHue",group:"geometry",label:"Default Background Hue",min:0,max:360,step:1,default:0,unit:"deg",desc:"Base background hue used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundSaturation",group:"geometry",label:"Default Background Saturation",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background saturation used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundLightness",group:"geometry",label:"Default Background Lightness",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background lightness used before background rules are applied.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Max Particle Capacity",min:4096,max:8e6,step:1024,default:262144,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particleRenderPercent",group:"geometry",label:"Particle Render %",min:1,max:100,step:1,default:100,unit:"%",desc:"Bin thinning: only this percentage of FFT bins can spawn particles each frame (evenly distributed by bin index).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Alpha",value:"alpha"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Ortho YZ",value:"orthoYZ"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]}];function Xc(){try{return JSON.parse(localStorage.getItem(Gc)||"{}")}catch{return{}}}function $g(){try{return new Set(JSON.parse(localStorage.getItem(Wc)||"[]"))}catch{return new Set}}function Pr(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=Vc(i);return t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:zl.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):zl.ruleSchemaVersion,r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function Yg(){const n=Pr(Xc()),e={};for(const t of yr)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.tonicHz=n.tonicHz??261.63,e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e}const Se=Yg(),Zt=$g(),ao=new Set;function Is(n){return ao.add(n),()=>ao.delete(n)}function br(n,e){for(const t of ao)t(Se,n,e)}function mn(n,e){Se[n]=e,br(n,e)}function Us(n){const e=Pr(n);for(const[t,i]of Object.entries(e))Se[t]=i,br(t,i);br("*",e)}function jg(){for(const n of yr)Se[n.key]=n.default;Se.tonicHz=261.63,Se.ruleBlocks=[],Se.ruleEngineEnabled=!0,Se.ruleSchemaVersion=bs,br("*",null)}function Ss(n,e){try{const t=Xc();t[n]=e,localStorage.setItem(Gc,JSON.stringify(t))}catch{}}function Zg(n){Zt.has(n)?Zt.delete(n):Zt.add(n);try{localStorage.setItem(Wc,JSON.stringify([...Zt]))}catch{}br("disabled",n)}function wo(){const n=Pr(Se);return{...Se,...n,_disabled:[...Zt]}}async function qc(){try{const n=await fetch(`${Ds}/api/presets`,{cache:"no-store"});return n.ok?(await n.json()).presets??[]:[]}catch{return[]}}async function $c(n,e){const t=Pr(e);return fetch(`${Ds}/api/presets`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n,params:t})}).then(i=>i.json())}async function Yc(n){const e=await fetch(`${Ds}/api/presets/${encodeURIComponent(n)}`,{cache:"no-store"});if(!e.ok)return null;const t=await e.json();return t!=null&&t.params?{...t,params:Pr(t.params)}:t}async function jc(n){return fetch(`${Ds}/api/presets/${encodeURIComponent(n)}`,{method:"DELETE"}).then(e=>e.json())}const Kg=1;function Jg(n){let e="";for(let i=0;i<n.length;i+=32768){const r=n.subarray(i,i+32768);e+=String.fromCharCode(...r)}return btoa(e)}function Qg(n){const e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}async function e_(n){const e=new Uint8Array(await n.arrayBuffer());return`data:${n.type||"application/octet-stream"};base64,${Jg(e)}`}function t_(n,e="audio.bin"){if(typeof n!="string"||!n.startsWith("data:"))throw new Error("Invalid embedded audio payload.");const t=n.indexOf(",");if(t<0)throw new Error("Malformed data URL.");const i=n.slice(0,t),r=n.slice(t+1),s=i.match(/^data:([^;]+);base64$/),a=(s==null?void 0:s[1])||"application/octet-stream",o=Qg(r);return new File([o],e,{type:a})}function n_({params:n,presetName:e="",audioDataUrl:t="",audioFileName:i=""}){return{schemaVersion:Kg,createdAt:new Date().toISOString(),presetName:String(e||""),params:n&&typeof n=="object"?n:{},audio:t?{fileName:i||"audio.bin",dataUrl:t}:null}}function i_(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return e}function r_(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function j(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:r==="title"?i.title=s:i.setAttribute(r,s);return i}function _i(n,e){return n.isDropdown||n.isToggle||Number.isInteger(n.step)?String(e):Number(e).toFixed(2)}let dr=null;function Ro(n){const e=j("button","cp-info-btn",{text:"ⓘ","aria-label":`Info: ${n.label}`});let t;return n.isDropdown?t=n.dropdownGroups?n.dropdownGroups.flatMap(i=>i.options.map(r=>r.label)).join(", "):(n.dropdownOptions??[]).map(i=>i.label).join(", "):n.isToggle?t=(n.toggleLabels??["Off","On"]).join(" / "):t=`${n.min}–${n.max}${n.unit?" "+n.unit:""}`,e.addEventListener("click",i=>{if(i.stopPropagation(),dr&&(dr.remove(),dr=null),e.classList.contains("active")){e.classList.remove("active");return}const r=j("div","cp-info-popup");r.innerHTML=`
      <div class="cp-info-title">${n.label}</div>
      <div class="cp-info-desc">${n.desc}</div>
      <div class="cp-info-meta">
        ${n.isToggle?"Options":"Range"}: ${t}
        ${!n.isToggle&&n.neutralValue!==void 0?` · Neutral: ${n.neutralValue}`:""}
        ${n.isToggle?"":` · Default: ${n.default}${n.unit?" "+n.unit:""}`}
      </div>`;const s=e.getBoundingClientRect();r.style.top=`${s.bottom+6}px`,r.style.left=`${Math.min(s.left,window.innerWidth-280)}px`,document.body.appendChild(r),e.classList.add("active"),dr=r,r.addEventListener("click",a=>a.stopPropagation()),requestAnimationFrame(()=>{const a=()=>{r.remove(),e.classList.remove("active"),dr=null,document.removeEventListener("click",a),document.removeEventListener("keydown",o)},o=l=>{l.key==="Escape"&&a()};document.addEventListener("click",a),document.addEventListener("keydown",o)})}),e}function Co(n,e){const t=j("button","cp-bypass-btn"),i=()=>{const r=Zt.has(n.key);t.textContent=r?"○":"●",t.title=r?`${n.label} is bypassed — click to enable`:`Click to bypass ${n.label}`,e.classList.toggle("cp-row-disabled",r)};return i(),t.addEventListener("click",()=>{Zg(n.key),i(),s_(n)}),t}const an=new Map;function s_(n,e){var t;(t=an.get(n.key))==null||t(Se[n.key])}function a_(n){const e=j("div","cp-row");e.classList.toggle("cp-row-disabled",Zt.has(n.key)),n.canDisable&&e.appendChild(Co(n,e));const t=j("label","cp-label",{text:n.label,title:n.desc});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=j("div","cp-slider-wrap"),r=j("input","cp-slider",{id:`cp-${n.key}`,type:"range",min:n.min,max:n.max,step:n.step,value:Se[n.key]}),s=j("input","cp-val-input",{type:"number",step:n.step,value:_i(n,Se[n.key]),title:`Current value${n.unit?" ("+n.unit+")":""}`}),a=(()=>{try{return JSON.parse(localStorage.getItem("seesound_user_defaults_v3")||"{}")}catch{return{}}})(),o=j("input","cp-def-input",{type:"number",step:n.step,value:_i(n,a[n.key]??n.default),title:"Saved default — press Enter to save"}),l=j("button","cp-star-btn",{text:"★",title:"Save current value as session default"});let c=Number(Se[n.key]);r.addEventListener("input",()=>{const d=parseFloat(r.value);mn(n.key,d),s.value=_i(n,d),updateTrack(d)}),s.addEventListener("change",()=>{const d=parseFloat(s.value);isNaN(d)||(mn(n.key,d),r.value=String(Math.min(n.max,Math.max(n.min,d))),updateTrack(d))}),s.addEventListener("keydown",d=>{d.key==="Escape"&&(s.value=_i(n,Se[n.key]))}),o.addEventListener("keydown",d=>{if(d.key==="Enter"){const f=parseFloat(o.value);isNaN(f)||Ss(n.key,f),o.blur()}d.key==="Escape"&&o.blur()}),o.addEventListener("blur",()=>{o.value=_i(n,parseFloat(o.value)||(a[n.key]??n.default))}),l.addEventListener("click",()=>{Ss(n.key,Se[n.key]),o.value=_i(n,Se[n.key])});let u=null;return n.key==="defaultParticleSize"&&(u=j("button","cp-preset-btn cp-rule-mini",{text:"Apply All",title:"Scale all current particles by new/old default size"}),u.addEventListener("click",()=>{const d=Number(Se[n.key]),f=Number(c);!Number.isFinite(d)||!Number.isFinite(f)||f<=0||d<=0||(window.dispatchEvent(new CustomEvent("seesound:particle-size-apply-all",{detail:{oldDefaultSize:f,newDefaultSize:d}})),c=d)})),an.set(n.key,d=>{r.value=String(Math.min(n.max,Math.max(n.min,d))),s.value=_i(n,d),updateTrack(d),c=Number(d),e.classList.toggle("cp-row-disabled",Zt.has(n.key))}),i.append(r,s,o,l,...u?[u]:[],Ro(n)),e.appendChild(i),e}function o_(n){const e=j("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",Zt.has(n.key)),n.canDisable&&e.appendChild(Co(n,e));const t=j("label","cp-label",{text:n.label});t.setAttribute("for",`cp-${n.key}`),e.appendChild(t);const i=j("select","cp-dropdown",{id:`cp-${n.key}`});if(n.dropdownGroups)for(const s of n.dropdownGroups){const a=j("optgroup","",{label:s.label});for(const o of s.options){const l=j("option","",{value:o.value,text:o.label});String(o.value)===String(Se[n.key])&&(l.selected=!0),a.appendChild(l)}i.appendChild(a)}else for(const s of n.dropdownOptions??[]){const a=j("option","",{value:s.value,text:s.label});String(s.value)===String(Se[n.key])&&(a.selected=!0),i.appendChild(a)}i.addEventListener("change",()=>{const s=i.value,a=Number(s);mn(n.key,s!==""&&!isNaN(a)?a:s)});const r=j("button","cp-star-btn",{text:"★",title:"Save as default"});return r.addEventListener("click",()=>Ss(n.key,Se[n.key])),an.set(n.key,s=>{i.value=String(s),e.classList.toggle("cp-row-disabled",Zt.has(n.key))}),e.append(i,r,Ro(n)),e}function l_(n){const e=j("div","cp-row cp-toggle-row");e.classList.toggle("cp-row-disabled",Zt.has(n.key)),n.canDisable&&e.appendChild(Co(n,e));const t=j("label","cp-label",{text:n.label,title:n.desc});e.appendChild(t);const i=n.toggleLabels??["Off","On"],r=j("div","cp-seg-group"),s=Number(Se[n.key]),a=i.map((l,c)=>{const u=j("button","cp-seg-btn",{text:l});return s===c&&u.classList.add("active"),u.addEventListener("click",()=>{Zt.has(n.key)||(mn(n.key,c),a.forEach((d,f)=>d.classList.toggle("active",f===c)))}),u});r.append(...a);const o=j("button","cp-star-btn",{text:"★",title:"Save as default"});return o.addEventListener("click",()=>Ss(n.key,Se[n.key])),an.set(n.key,l=>{const c=Number(l);a.forEach((u,d)=>u.classList.toggle("active",d===c)),e.classList.toggle("cp-row-disabled",Zt.has(n.key))}),e.append(r,o,Ro(n)),e}function c_(){const n=j("div","cp-preset-bar"),e="rule__";function t(){const v=document.activeElement;v instanceof HTMLElement&&v.closest(".cp-body")&&v.blur()}const i=j("div","cp-preset-row"),r=j("span","cp-preset-label",{text:"PROJECT"}),s=j("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save project (Ctrl+S / Ctrl+Shift+S)"}),a=j("button","cp-preset-btn",{text:"🗁",title:"Load project"}),o=j("input","",{type:"file",accept:".json,.seesound-project,.seesound-project.json"});o.style.display="none",i.append(r,s,a);const l=j("div","cp-preset-row");j("span","cp-preset-label",{text:"Preset"});const c=j("select","cp-preset-sel"),u=j("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset"}),d=j("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});l.append(c,u,d);const f=j("div","cp-preset-row"),m=j("input","cp-preset-name",{type:"text",placeholder:"preset_title"}),_=j("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save current rule preset (Ctrl+P)"});f.append(m,_),n.append(i,l,f,o);let g=[];async function p(){var b;t();const v=m.value.trim(),R=String(c.value||"").trim(),w=v||R;if(!w)return alert("Enter or select a preset name first."),m.focus(),!1;if(!v&&R&&(m.value=R),g.includes(w)&&!confirm(`Overwrite preset "${w}"?`))return!1;const C=((b=jt==null?void 0:jt.serialize)==null?void 0:b.call(jt))??(Array.isArray(Se.ruleBlocks)?Se.ruleBlocks:[]),D=wo();return D.ruleBlocks=C,await $c(w,D),await h(),c.value=w,!0}async function h(){g=(await qc()).filter(w=>!String(w||"").startsWith(e));const R=c.value;c.innerHTML='<option value="">select preset</option>';for(const w of g){const C=j("option","",{value:w,text:w});c.appendChild(C)}R&&g.includes(R)&&(c.value=R)}c.addEventListener("change",()=>{c.value&&(m.value=c.value)}),u.addEventListener("click",async()=>{var R;if(!c.value)return;const v=await Yc(c.value);if(v!=null&&v.params){Us(v.params);for(const w of yr)(R=an.get(w.key))==null||R(Se[w.key]);jt==null||jt.replaceFromRuleBlocks(Array.isArray(Se.ruleBlocks)?Se.ruleBlocks:[])}}),d.addEventListener("click",async()=>{c.value&&confirm(`Delete preset "${c.value}"?`)&&(await jc(c.value),await h(),m.value="")}),_.addEventListener("click",async()=>{await p()}),s.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:project-save-request"))}),a.addEventListener("click",()=>{o.click()}),o.addEventListener("change",async v=>{var w;const R=(w=v.target.files)==null?void 0:w[0];if(R)try{const C=await R.text(),D=i_(C);window.dispatchEvent(new CustomEvent("seesound:project-load-request",{detail:{payload:D,fileName:R.name}}))}catch(C){console.warn("[Project] load parse failed:",C),alert("Failed to load project file.")}finally{o.value=""}}),m.addEventListener("keydown",v=>{v.key==="Enter"&&_.click()});const S=window.__seesoundShortcutAbort;S&&typeof S.abort=="function"&&S.abort();const E=new AbortController;return window.__seesoundShortcutAbort=E,document.addEventListener("keydown",async v=>{if(v.defaultPrevented||v.altKey||!(v.ctrlKey||v.metaKey))return;const R=String(v.key||"").toLowerCase();if(R==="s"){v.preventDefault(),v.stopPropagation(),window.dispatchEvent(new CustomEvent("seesound:project-save-request"));return}R==="p"&&!v.shiftKey&&(v.preventDefault(),v.stopPropagation(),await p())},{signal:E.signal}),h(),n}function u_(){const n=j("div","cp-canvas-size"),e=j("div","cp-canvas-size-title",{text:"Canvas Size"}),t=j("div","cp-canvas-size-row"),i=j("div","cp-canvas-size-row"),r=j("label","cp-canvas-size-label",{text:"↔"}),s=j("input","cp-canvas-size-input",{type:"number",step:"1",min:"160",value:String(Math.max(160,Number(Se.canvasWidth??0)||160))}),a=j("label","cp-canvas-size-label",{text:"↕"}),o=j("input","cp-canvas-size-input",{type:"number",step:"1",min:"120",value:String(Math.max(120,Number(Se.canvasHeight??0)||120))}),l=j("label","cp-canvas-size-label",{text:"%"}),c=j("input","cp-canvas-size-input",{type:"number",step:"1",min:"5",max:"400",value:String(Math.max(5,Math.min(400,Math.floor(Number(Se.canvasScale??100)||100))))}),u=j("button","cp-preset-btn cp-rule-mini",{text:"Apply"}),d=j("div","cp-canvas-size-label",{text:"BG HSL"}),f=j("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"360",value:String(Math.max(0,Math.min(360,Math.floor(Number(Se.defaultBackgroundHue??0)||0))))}),m=j("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"100",value:String(Math.max(0,Math.min(100,Math.floor(Number(Se.defaultBackgroundSaturation??0)||0))))}),_=j("input","cp-canvas-size-input",{type:"number",step:"1",min:"0",max:"100",value:String(Math.max(0,Math.min(100,Math.floor(Number(Se.defaultBackgroundLightness??0)||0))))}),g={w:0,h:0,s:100};function p(v,R,w,C){const D=Number(v);return Number.isFinite(D)?Math.max(R,Math.min(w,Math.floor(D))):C}function h(){const v=Number(Se.canvasWidth),R=Number(Se.canvasHeight),w=Number(Se.canvasScale),C=Number.isFinite(v)&&v>0?v:g.w,D=Number.isFinite(R)&&R>0?R:g.h,b=Number.isFinite(w)&&w>0?w:g.s;document.activeElement!==s&&(s.value=String(Math.max(160,Math.floor(C||160)))),document.activeElement!==o&&(o.value=String(Math.max(120,Math.floor(D||120)))),document.activeElement!==c&&(c.value=String(Math.max(5,Math.min(400,Math.floor(b||100))))),document.activeElement!==f&&(f.value=String(p(Se.defaultBackgroundHue,0,360,0))),document.activeElement!==m&&(m.value=String(p(Se.defaultBackgroundSaturation,0,100,0))),document.activeElement!==_&&(_.value=String(p(Se.defaultBackgroundLightness,0,100,0)))}function S(){const v=Math.max(160,Math.floor(Number(s.value)||160)),R=Math.max(120,Math.floor(Number(o.value)||120)),w=Math.max(5,Math.min(400,Math.floor(Number(c.value)||100)));mn("canvasWidth",v),mn("canvasHeight",R),mn("canvasScale",w)}function E(){mn("defaultBackgroundHue",p(f.value,0,360,0)),mn("defaultBackgroundSaturation",p(m.value,0,100,0)),mn("defaultBackgroundLightness",p(_.value,0,100,0))}return s.addEventListener("change",S),o.addEventListener("change",S),s.addEventListener("keydown",v=>{v.key==="Enter"&&(v.preventDefault(),S(),s.blur())}),o.addEventListener("keydown",v=>{v.key==="Enter"&&(v.preventDefault(),S(),o.blur())}),c.addEventListener("change",S),c.addEventListener("keydown",v=>{v.key==="Enter"&&(v.preventDefault(),S(),c.blur())}),f.addEventListener("change",E),m.addEventListener("change",E),_.addEventListener("change",E),f.addEventListener("keydown",v=>{v.key==="Enter"&&(v.preventDefault(),E(),f.blur())}),m.addEventListener("keydown",v=>{v.key==="Enter"&&(v.preventDefault(),E(),m.blur())}),_.addEventListener("keydown",v=>{v.key==="Enter"&&(v.preventDefault(),E(),_.blur())}),u.addEventListener("click",S),an.set("canvasWidth",()=>h()),an.set("canvasHeight",()=>h()),an.set("canvasScale",()=>h()),an.set("defaultBackgroundHue",()=>h()),an.set("defaultBackgroundSaturation",()=>h()),an.set("defaultBackgroundLightness",()=>h()),Is((v,R)=>{(R==="canvasWidth"||R==="canvasHeight"||R==="canvasScale"||R==="defaultBackgroundHue"||R==="defaultBackgroundSaturation"||R==="defaultBackgroundLightness")&&h()}),window.addEventListener("seesound:canvas-size",v=>{var R,w,C;g.w=Number((R=v==null?void 0:v.detail)==null?void 0:R.w)||g.w,g.h=Number((w=v==null?void 0:v.detail)==null?void 0:w.h)||g.h,g.s=Number((C=v==null?void 0:v.detail)==null?void 0:C.s)||g.s,h()}),t.append(r,s,a,o,l,c,u),i.append(d,f,m,_),n.append(e,t,i),h(),n}function d_(n,e,t){const i=j("div",`cp-group${t?" cp-open":""}`),r=j("button","cp-group-header");r.innerHTML=`<span class="cp-group-chevron">${t?"▾":"▸"}</span><span>${n.label}</span><span class="cp-group-count">${e.length}</span>`;const s=j("div","cp-group-body");s.style.display=t?"":"none";for(const o of e)o.isDropdown?s.appendChild(o_(o)):o.isToggle?s.appendChild(l_(o)):s.appendChild(a_(o));let a=t;return r.setAttribute("aria-expanded",String(a)),r.addEventListener("click",()=>{a=!a,i.classList.toggle("cp-open",a),s.style.display=a?"":"none",r.setAttribute("aria-expanded",String(a));const o=r.querySelector(".cp-group-chevron");o&&(o.textContent=a?"▾":"▸")}),i.append(r,s),i}const ii=kc().entries.map(n=>n.id),Po=kg().entries,h_=Po.map(n=>n.id),f_=new Map(Po.map(n=>[n.id,n])),p_=["always",">",">=","<","<=","==","!="],oo=[...Ps],Zc=[...To];let jt=null;function gr(n=0){return`rule-${Math.max(1,Math.floor(n)+1)}`}function Kc(){return`rule-ui-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`}function Hl(n=0){return{id:gr(n),group:"",subgroup:"",enabled:!0,target:"spawnedParticles",condition:{operator:"always"},actions:[{operator:"set",output:"opacity",value:1}],order:n}}function m_(n){return n==="shapeType"}function lo(n){const e=String((n==null?void 0:n.context)||"").toLowerCase();if(e.includes("background"))return"background";if(e.includes("camera"))return"camera";if(e.includes("particle"))return"spawnedParticles";const t=typeof(n==null?void 0:n.target)=="string"?n.target:"";return oo.includes(t)?t:(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function co(n){return Po.filter(e=>!Array.isArray(e.targets)||e.targets.includes(n)).map(e=>e.id)}function pa(n){const e=co(n.target);if(e.length===0){n.actionOutput="opacity";return}e.includes(n.actionOutput)||(n.actionOutput=e[0])}function g_(n,e,t){n.innerHTML="";for(const i of e){const r=j("option","",{value:i.value,text:i.label});String(i.value)===String(t)&&(r.selected=!0),n.appendChild(r)}}function ma(n,e){const t={operator:n.conditionEnabled?n.conditionOp:"always"};n.conditionEnabled&&n.conditionOp!=="always"&&(t.input=n.conditionInput,n.conditionRhsMode==="input"?t.valueInput=n.conditionRhsInput:t.value=Number(n.conditionRhsLiteral));const i={operator:n.actionOp,output:n.actionOutput},r=String(n.actionValueText??"").trim();if(m_(n.actionOutput))i.value=r==="circle"?"circle":"square";else{const s=Number(r);r&&Number.isFinite(s)?i.value=s:ii.includes(r)?i.input=r:i.expression=r||"0"}return{id:n.id,group:n.group,subgroup:n.subgroup,enabled:!!n.enabled,target:n.target,condition:t,actions:[i],order:e}}function hr(n,e){var a,o,l,c,u;const t=Array.isArray(n.actions)&&n.actions[0]?n.actions[0]:{operator:"set",output:"opacity",value:1},i=((a=n.condition)==null?void 0:a.operator)||"always",r=i!=="always",s=typeof t.expression=="string"&&t.expression.trim()?t.expression.trim():typeof t.input=="string"&&t.input.trim()?t.input.trim():t.value==="circle"||t.value==="square"?t.value:Number.isFinite(Number(t.value))?String(Number(t.value)):"1";return{_uid:typeof n._uid=="string"&&n._uid?n._uid:Kc(),id:typeof n.id=="string"&&n.id.trim()?n.id.trim():gr(e),group:typeof n.group=="string"?n.group:"",subgroup:typeof n.subgroup=="string"?n.subgroup:"",enabled:n.enabled!==!1,target:lo(n),conditionEnabled:r,conditionOp:i,conditionInput:ii.includes((o=n.condition)==null?void 0:o.input)?n.condition.input:"amplitude",conditionRhsMode:(l=n.condition)!=null&&l.valueInput?"input":"literal",conditionRhsInput:ii.includes((c=n.condition)==null?void 0:c.valueInput)?n.condition.valueInput:"amplitude",conditionRhsLiteral:Number.isFinite(Number((u=n.condition)==null?void 0:u.value))?Number(n.condition.value):.5,actionOutput:h_.includes(t.output)?t.output:"opacity",actionOp:Zc.includes(t.operator)?t.operator:"set",actionValueText:s,uiState:n.uiState||"normal",order:Number.isFinite(n.order)?Number(n.order):e}}function Vl(n,e){var f,m;const t=String(n.actionValueText||"").trim();let i=0;if(ii.includes(t))i=Number(e==null?void 0:e[t])||0;else{const _=Number(t);i=Number.isFinite(_)?_:0}const r=f_.get(n.actionOutput),s=Number((f=r==null?void 0:r.range)==null?void 0:f[0]),a=Number((m=r==null?void 0:r.range)==null?void 0:m[1]),o=Number.isFinite(s),l=Number.isFinite(a);let c=1;o&&l?c=(s+a)*.5:o&&!l?c=s===0?1:s:!o&&l&&(c=a===0?-1:a);let u=c,d=u;switch(n.actionOp){case"set":d=i;break;case"add":d=u+i;break;case"subtract":d=u-i;break;case"multiply":d=u*i;break;case"divide":d=Math.abs(i)>1e-6?u/i:u;break;case"clamp":d=Math.max(-Math.abs(i),Math.min(Math.abs(i),u));break;default:d=u;break}return{inValue:u,outValue:d}}function is(n){const e=Number(n);return Number.isFinite(e)?e.toFixed(3):"0.000"}function __(n){return`When ${!n.conditionEnabled||n.conditionOp==="always"?"always":`${n.conditionInput} ${n.conditionOp} ${n.conditionRhsMode==="input"?n.conditionRhsInput:Number(n.conditionRhsLiteral).toFixed(2)}`}, ${n.actionOp} ${n.actionOutput} using ${String(n.actionValueText||"0")}`}function ei(n,e,t="cp-rule-input"){const i=j("select",t);for(const r of n){const s=j("option","",{value:r.value,text:r.label});String(r.value)===String(e)&&(s.selected=!0),i.appendChild(s)}return i}function v_(n,e="0.01",t="cp-rule-input cp-rule-num"){return j("input",t,{type:"number",value:String(n),step:e})}function x_(n){if(!n)return null;const e=j("div","cp-rule-section"),t=j("div","cp-rule-header"),i=j("span","cp-rule-title",{text:"Rule Builder"}),r=j("span","cp-rule-status cp-rule-status-stale",{text:"stale"});t.append(i,r);const s=j("div","cp-rule-error"),a=j("div","cp-rule-rows"),o=j("div","cp-rule-preset"),l=j("select","cp-preset-sel"),c=j("input","cp-preset-name",{type:"text",placeholder:"single_rule_preset"}),u=j("button","cp-preset-btn cp-preset-save",{text:"🖫",title:"Save selected rule as preset"}),d=j("button","cp-preset-btn",{text:"🗁",title:"Load selected rule preset (append)"}),f=j("button","cp-preset-btn cp-preset-del",{text:"🗙",title:"Delete selected rule preset"});o.append(l,d,f,c,u);const m=j("div","cp-rule-actions"),_=j("button","cp-preset-btn cp-rule-add",{text:"+"});m.appendChild(_),e.append(t,s,o,a,m),n.appendChild(e);let g=(Array.isArray(Se.ruleBlocks)?Se.ruleBlocks:[]).map(hr),p=!1,h=-1,S=[],E=-1;const v=new Map,R=[],w=new Set,C=new Set,D=new Set,b=new Set;let y="",L="spawnedParticles";const K="rule__";let G=[],z=Object.create(null);function Y(){const T=document.activeElement;T instanceof HTMLElement&&T.closest(".cp-rule-section")&&T.blur()}function q(T){const O=new Set(g.map(Z=>String(Z.id||"").trim()).filter(Boolean)),ee=String(T||"").trim()||gr(g.length);if(!O.has(ee))return ee;let I=2;for(;O.has(`${ee}-${I}`);)I++;return`${ee}-${I}`}function ue(T){if(T<0||T>=g.length)return;const O=g[T],ee={...O,_uid:Kc(),id:q(O.id||gr(g.length)),uiState:"normal"};g.splice(T+1,0,ee),de()}function W(T){const O=(T==null?void 0:T.compileStatus)||"stale";r.textContent=O,r.className=`cp-rule-status cp-rule-status-${O.replace(/[^a-z0-9-]/gi,"-")}`,s.textContent=T!=null&&T.compileError?`Compile error: ${T.compileError}${T.compileLine?` (line ${T.compileLine})`:""}`:Array.isArray(T==null?void 0:T.rejected)&&T.rejected.length>0?`Rejected rules: ${T.rejected.map(ee=>ee.id).join(", ")}`:""}function de(){const T=new Set(g.map(Z=>Z._uid));for(const Z of[...b])T.has(Z)||b.delete(Z);for(const Z of[...D])T.has(Z)||D.delete(Z);for(const Z of g)pa(Z);const O=g.map((Z,oe)=>ma(Z,oe)),ee=Xg(O),I=new Set(ee.redRuleIds);g=g.map(Z=>({...Z,uiState:I.has(Z.id)?"red":"normal"})),p=!0,mn("ruleBlocks",ee.rules),p=!1,W({compileStatus:"stale",compileError:null}),ie()}function fe(T){return O=>{T(O)!==!1&&de()}}function Ee(T){return String(T||"").trim()}function ke(T,O=""){const ee=Ee(T);ee&&(v.has(ee)||v.set(ee,new Set),O!==void 0&&v.get(ee).add(Ee(O)))}function nt(){for(const T of g){const O=Ee(T.group);O&&(ke(O,Ee(T.subgroup)),R.includes(O)||R.push(O))}}function Q(T){const O=T instanceof Element?T:null;return O?!!O.closest("input,select,button,textarea,label,.cp-rule-slot-add"):!1}function le(T){T<0||T>=g.length||(b.clear(),b.add(g[T]._uid),E=T,y="")}function Ce(T){if(T<0||T>=g.length)return;if(E<0||E>=g.length){le(T);return}const O=Math.min(E,T),ee=Math.max(E,T);b.clear();for(let I=O;I<=ee;I++)b.add(g[I]._uid);y=""}function Me(T){if(T<0||T>=g.length)return;const O=g[T]._uid;b.has(O)?b.delete(O):b.add(O),E=T,y=""}function Fe(T,O){if(T<0||T>=g.length)return;const ee=!!(O.ctrlKey||O.metaKey);O.shiftKey?Ce(T):ee?Me(T):le(T),ie()}function Ne(T){const O=T instanceof Element?T:null;return O?!!O.closest('input,textarea,select,[contenteditable="true"]'):!1}function Oe(T){const O=[...new Set((T||[]).filter(ee=>ee>=0&&ee<g.length))].sort((ee,I)=>ee-I);if(O.length===0)return!1;for(let ee=O.length-1;ee>=0;ee--)g.splice(O[ee],1);return b.clear(),y="",!0}function Qe(){const T=Be();j("div","cp-rule-context-board");const O=[{key:"spawnedParticles",label:"Particles",includes:new Set(["spawnedParticles","allParticles"])},{key:"background",label:"Background",includes:new Set(["background"])},{key:"camera",label:"Camera",includes:new Set(["camera"])}];O.some(I=>I.key===L)||(L="spawnedParticles");for(const I of O){for(let Z=0;Z<g.length;Z++){const oe=lo(g[Z]);I.includes.has(oe)}Oe(T),j("div","cp-group cp-rule-context-group")}L===group.key&&gHeader.classList.add("cp-rule-group-header-selected"),gHeader.addEventListener("click",()=>{L=group.key,ie()}),C.delete(key),y="",removedRules&&de();const ee=j("div","cp-group-body cp-rule-group-body");if(ee.appendChild(k(indices,group.key,"")),te(ee,group.key,""),y){const I=y,Z=[];for(let _e=0;_e<g.length;_e++)Ee(g[_e].group)===I&&Z.push(_e);const oe=Oe(Z);at(g.length,L,""),orderIdx>=0&&R.splice(orderIdx,1),w.delete(I);for(const _e of[...C])_e.startsWith(`${I}::`)&&C.delete(_e);return y="",oe?de():ie(),!0}return!1}function Be(){const T=[];for(let O=0;O<g.length;O++)b.has(g[O]._uid)&&T.push(O);return T}function Ke(T){return T.startsWith(K)?T.slice(K.length):T}async function P(){G=(await qc()).filter(ee=>String(ee||"").startsWith(K));const O=String(l.value||"");l.innerHTML='<option value="">rule presets</option>';for(const ee of G){const I=j("option","",{value:ee,text:Ke(ee)});l.appendChild(I)}O&&G.includes(O)&&(l.value=O)}async function gt(){Y();const T=Be();if(T.length<1){alert("Select one or more rules to save as a rule preset.");return}const O=String(c.value||Ke(String(l.value||""))).trim();if(!O){alert("Enter a single-rule preset name first."),c.focus();return}const ee=`${K}${O}`;if(G.includes(ee)&&!confirm(`Overwrite single-rule preset "${O}"?`))return;const I=T.map((oe,_e)=>ma(g[oe],_e)),Z=wo();Z.ruleBlocks=I,await $c(ee,Z),await P(),l.value=ee,c.value=O}async function Xe(T){var I;if(!T)return;const O=await Yc(T),ee=Array.isArray((I=O==null?void 0:O.params)==null?void 0:I.ruleBlocks)?O.params.ruleBlocks:[];if(ee.length===0){alert("Selected rule preset has no rule block.");return}for(const Z of ee)g.push(hr(Z,g.length));de()}function qe(T,O="",ee=""){let I=S.map(me=>g.findIndex(We=>We._uid===me)).filter(me=>me>=0).sort((me,We)=>me-We);if(I.length===0&&(I=Be()),I.length===0&&h>=0&&h<g.length&&(I=[h]),I.length===0)return;const Z=new Set(I);if(T>=0&&T<=g.length){const me=T-1;if(Z.has(T)||me>=0&&Z.has(me)){h=-1,S=[];return}}const oe=I.map(me=>g[me]);for(let me=I.length-1;me>=0;me--)g.splice(I[me],1);let _e=Math.max(0,Math.min(g.length,T));for(const me of I)me<_e&&_e--;const ce=Ee(O),Ie=Ee(ee);for(const me of oe)oo.includes(ce)?(me.target=ce,me.group="",me.subgroup=""):(me.group=ce,me.subgroup=Ie);g.splice(_e,0,...oe),ke(ce,Ie),b.clear();for(const me of oe)b.add(me._uid);E=g.findIndex(me=>me._uid===oe[oe.length-1]._uid),h=-1,S=[],de()}function Le(T,O="",ee=""){qe(T,O,ee)}function at(T,O="",ee=""){const I=hr(Hl(g.length),g.length),Z=Ee(O);oo.includes(Z)?(I.target=Z,I.group="",I.subgroup=""):(I.group=Z,I.subgroup=Ee(ee));const oe=Math.max(0,Math.min(g.length,T));g.splice(oe,0,I),ke(I.group,I.subgroup),de()}function Pe(T,O){if(T<0||T>=g.length)return;const ee=Ee(g[T].group),I=[];for(let ce=0;ce<g.length;ce++)Ee(g[ce].group)===ee&&I.push(ce);const Z=I.indexOf(T);if(Z<0)return;const oe=Z+O;if(oe<0||oe>=I.length)return;const _e=I[oe];[g[T],g[_e]]=[g[_e],g[T]],de()}function A(T,O){const ee=b.has(T._uid),I=j("div",`cp-rule-row${T.uiState==="red"?" cp-rule-row-red":""}${ee?" cp-rule-row-selected":""}`);I.draggable=!0,I.dataset.ruleIndex=String(O),I.dataset.ruleUid=T._uid,I.addEventListener("click",$=>{if(Q($.target))return;const he=$.target instanceof Element?$.target:null;!he||!(he===I||he.classList.contains("cp-rule-row-top")||he.classList.contains("cp-rule-body")||he.classList.contains("cp-rule-line"))||Fe(O,$)}),I.addEventListener("dragstart",$=>{b.has(T._uid)||le(O),S=Be().map(he=>g[he]._uid),h=O,$.dataTransfer&&($.dataTransfer.effectAllowed="move",$.dataTransfer.setData("text/plain",T._uid)),I.classList.add("cp-rule-row-dragging")}),I.addEventListener("dragend",()=>{h=-1,S=[],I.classList.remove("cp-rule-row-dragging")});const Z=j("div","cp-rule-row-top"),oe=D.has(T._uid),_e=j("button","cp-preset-btn cp-rule-mini cp-rule-fold-btn",{type:"button",text:oe?"▸":"▾",title:oe?"Expand rule":"Collapse rule"});_e.addEventListener("click",$=>{$.preventDefault(),$.stopPropagation(),D.has(T._uid)?D.delete(T._uid):D.add(T._uid),ie()});const ce=j("span","cp-rule-index",{text:`#${O+1}`}),Ie=j("input","cp-rule-input cp-rule-name",{type:"text",value:T.id,placeholder:"rule name"}),me=j("input","cp-rule-toggle",{type:"checkbox"});me.checked=!!T.enabled,me.addEventListener("change",fe(()=>(T.enabled=me.checked,!0))),Ie.addEventListener("keydown",fe($=>{if($.key!=="Enter")return!1;$.preventDefault();const he=String(Ie.value||"").trim();return T.id=he||gr(O),Ie.value=T.id,Ie.blur(),!0}));const We=j("button","cp-preset-btn cp-rule-mini",{text:"Move Up"}),N=j("button","cp-preset-btn cp-rule-mini",{text:"↓"}),pe=j("button","cp-preset-btn cp-rule-mini",{text:"⧉"});pe.title="Duplicate rule";const X=j("button","cp-preset-btn cp-rule-mini cp-preset-del",{text:"🗙"});We.textContent="↑",We.addEventListener("click",()=>Pe(O,-1)),N.addEventListener("click",()=>Pe(O,1)),pe.addEventListener("click",()=>ue(O)),X.addEventListener("click",()=>{const $=Be();if($.length>1&&b.has(T._uid)){for(let he=$.length-1;he>=0;he--)g.splice($[he],1);b.clear(),de();return}g.splice(O,1),b.delete(T._uid),D.delete(T._uid),de()}),Z.append(_e,ce,Ie,me,We,N,pe,X);const ne=j("div","cp-rule-line");ne.appendChild(j("span","cp-rule-k",{text:"Condition"}));const se=j("button","cp-preset-btn cp-rule-mini",{type:"button",text:"+ Condition"}),ve=j("button","cp-preset-btn cp-rule-mini cp-preset-del",{type:"button",text:"Remove"}),Ue=ei(p_.map($=>({value:$,label:$})),T.conditionOp),ot=ei(ii.map($=>({value:$,label:$})),T.conditionInput),dt=ei([{value:"literal",label:"literal"},{value:"input",label:"input"}],T.conditionRhsMode),$e=v_(T.conditionRhsLiteral),St=ei(ii.map($=>({value:$,label:$})),T.conditionRhsInput),wt=()=>{const $=!!T.conditionEnabled;se.style.display=$?"none":"",ve.style.display=$?"":"none",Ue.style.display=$?"":"none";const he=Ue.value==="always";ot.style.display=$&&!he?"":"none",dt.style.display=$&&!he?"":"none",$e.style.display=$&&!he&&dt.value==="literal"?"":"none",St.style.display=$&&!he&&dt.value==="input"?"":"none",$||(T.conditionOp="always")};se.addEventListener("click",fe(()=>(T.conditionEnabled=!0,T.conditionOp||(T.conditionOp=">"),Ue.value=T.conditionOp,wt(),!0))),ve.addEventListener("click",fe(()=>(T.conditionEnabled=!1,T.conditionOp="always",Ue.value="always",wt(),!0))),Ue.addEventListener("change",fe(()=>(T.conditionOp=Ue.value,wt(),!0))),ot.addEventListener("change",fe(()=>(T.conditionInput=ot.value,!0))),dt.addEventListener("change",fe(()=>(T.conditionRhsMode=dt.value,wt(),!0))),$e.addEventListener("keydown",fe($=>$.key!=="Enter"?!1:($.preventDefault(),T.conditionRhsLiteral=Number($e.value),$e.blur(),!0))),St.addEventListener("change",fe(()=>(T.conditionRhsInput=St.value,!0))),ne.append(se,ve,Ue,ot,dt,$e,St),wt();const Rn=j("div","cp-rule-line");Rn.appendChild(j("span","cp-rule-k",{text:"Action"})),pa(T);const Kt=ei(co(T.target).map($=>({value:$,label:$})),T.actionOutput),Ht=ei(Zc.map($=>({value:$,label:$})),T.actionOp),Cn=j("div","cp-rule-expr-wrap"),et=j("textarea","cp-rule-input cp-rule-expr",{placeholder:"value / expression / input id"});et.value=T.actionValueText||"";const Jt=ei([{value:"",label:"choose input..."},...ii.map($=>({value:$,label:$}))],"","cp-rule-input cp-rule-tag"),ge=ei([{value:"",label:"shape..."},{value:"square",label:"square"},{value:"circle",label:"circle"}],"","cp-rule-input cp-rule-tag"),ze=j("div","cp-rule-expr-suggest");Cn.append(et,Jt,ge,ze);const it=()=>{pa(T);const $=co(T.target).map(Ae=>({value:Ae,label:Ae}));g_(Kt,$,T.actionOutput);const he=Kt.value==="shapeType";ge.style.display=he?"":"none",he?et.placeholder!=="shape: square or circle"&&(et.placeholder="shape: square or circle"):et.placeholder!=="value / expression / input id"&&(et.placeholder="value / expression / input id"),he&&(ze.style.display="none",ze.innerHTML="")},Rt=[...new Set([...ii,"clamp","lerp","smoothstep","pow","min","max","abs","PI","E"])];function un(){const $=String(et.value||""),he=Number.isFinite(et.selectionStart)?et.selectionStart:$.length,ae=$.slice(0,he).match(/([A-Za-z_][A-Za-z0-9_]*)$/);return{token:ae?ae[1]:"",start:ae?he-ae[1].length:he,end:he}}function li($){const he=String(et.value||""),Ae=un(),ae=`${he.slice(0,Ae.start)}${$}${he.slice(Ae.end)}`;et.value=ae,T.actionExpression=ae;const He=Ae.start+$.length;et.focus(),et.setSelectionRange(He,He),dn()}function dn(){if(Kt.value==="shapeType"){ze.style.display="none",ze.innerHTML="";return}const $=un(),he=String($.token||"").toLowerCase();if(!he){ze.style.display="none",ze.innerHTML="";return}const Ae=Rt.filter(ae=>ae.toLowerCase().startsWith(he)&&ae.toLowerCase()!==he).slice(0,8);if(Ae.length===0){ze.style.display="none",ze.innerHTML="";return}ze.innerHTML="";for(const ae of Ae){const He=j("button","cp-rule-expr-suggest-btn",{type:"button",text:ae});He.addEventListener("mousedown",je=>{je.preventDefault()}),He.addEventListener("click",je=>{je.preventDefault(),li(ae)}),ze.appendChild(He)}ze.style.display="flex"}function bn(){et.style.height="auto",et.style.height=`${Math.max(24,et.scrollHeight)}px`}Kt.addEventListener("change",fe(()=>(T.actionOutput=Kt.value,it(),!0))),Ht.addEventListener("change",fe(()=>(T.actionOp=Ht.value,!0))),et.addEventListener("input",()=>{T.actionValueText=et.value,bn(),dn()}),Jt.addEventListener("change",fe(()=>Jt.value?(et.value=Jt.value,T.actionValueText=Jt.value,bn(),Jt.value="",!0):!1)),ge.addEventListener("change",fe(()=>ge.value?(et.value=ge.value,T.actionValueText=ge.value,ge.value="",!0):!1)),et.addEventListener("click",dn),et.addEventListener("focus",bn),et.addEventListener("keyup",dn),et.addEventListener("keydown",fe($=>$.key==="Enter"&&($.ctrlKey||$.metaKey)?($.preventDefault(),T.actionValueText=et.value,et.blur(),!0):!1)),et.addEventListener("blur",()=>{T.actionValueText=et.value,setTimeout(()=>{ze.style.display="none"},120),de()}),Rn.append(Kt,Ht,Cn),it(),bn();const sr=j("div","cp-rule-summary",{text:__(T)}),Ti=j("div","cp-rule-live"),M=j("span","cp-rule-live-chip cp-rule-live-chip-in"),U=j("span","cp-rule-live-key",{text:"in"}),H=j("span","cp-rule-live-value");H.dataset.ruleUid=T._uid,H.dataset.probeKind="in",M.append(U,H);const V=j("span","cp-rule-live-chip cp-rule-live-chip-out"),F=j("span","cp-rule-live-key",{text:"out"}),re=j("span","cp-rule-live-value");re.dataset.ruleUid=T._uid,re.dataset.probeKind="out",V.append(F,re),Ti.append(M,V);const xe=Vl(T,z);H.textContent=is(xe.inValue),re.textContent=is(xe.outValue);const be=j("div","cp-rule-body");return be.append(ne,Rn,Ti,sr),oe&&(be.style.display="none"),I.append(Z,be),I}function x(T,O="",ee=""){const I=j("div","cp-rule-slot"),Z=j("button","cp-rule-slot-add",{type:"button",text:"+"});return Z.title="Add rule here",Z.addEventListener("click",oe=>{oe.preventDefault(),oe.stopPropagation(),at(T,O,ee)}),I.addEventListener("dragover",oe=>{oe.preventDefault(),I.classList.add("cp-rule-slot-active")}),I.addEventListener("dragleave",()=>{I.classList.remove("cp-rule-slot-active")}),I.addEventListener("drop",oe=>{oe.preventDefault(),oe.stopPropagation(),I.classList.remove("cp-rule-slot-active"),Le(T,O,ee)}),I.appendChild(Z),I}function k(T,O="",ee=""){const I=j("div","cp-rule-lane");if(T.length===0)return I.appendChild(x(g.length,O,ee)),I;I.appendChild(x(T[0],O,ee));for(const Z of T)I.appendChild(A(g[Z],Z)),I.appendChild(x(Z+1,O,ee));return I}function te(T,O="",ee=""){T.addEventListener("dragover",I=>{I.preventDefault(),T.classList.add("cp-rule-dropzone-active")}),T.addEventListener("dragleave",()=>{T.classList.remove("cp-rule-dropzone-active")}),T.addEventListener("drop",I=>{I.preventDefault(),I.stopPropagation(),T.classList.remove("cp-rule-dropzone-active"),Le(g.length,O,ee)})}function ie(){a.innerHTML="";const T=j("div","cp-rule-context-groups"),O=[{key:"spawnedParticles",label:"Particles",includes:new Set(["spawnedParticles","allParticles"])},{key:"background",label:"Background"},{key:"camera",label:"Camera"}];O.some(ee=>ee.key===L)||(L="spawnedParticles");for(const ee of O){const I=[];for(let ce=0;ce<g.length;ce++){const Ie=lo(g[ce]);(ee.includes?ee.includes.has(Ie):Ie===ee.key)&&I.push(ce)}const Z=j("div",`cp-group cp-open cp-rule-context-group${L===ee.key?" cp-rule-group-selected":""}`),oe=j("div","cp-group-header");oe.addEventListener("click",()=>{L=ee.key,ie()}),oe.append(j("span","cp-group-chevron",{text:"▾"}),j("span","",{text:ee.label}),j("span","cp-group-count",{text:String(I.length)}));const _e=j("div","cp-group-body cp-rule-group-body");_e.appendChild(k(I,ee.key,"")),te(_e,ee.key,""),Z.append(oe,_e),T.appendChild(Z)}a.appendChild(T)}_.addEventListener("click",()=>{at(g.length,L,"")}),l.addEventListener("change",()=>{const T=String(l.value||"");T&&(c.value=Ke(T))}),u.addEventListener("click",async()=>{await gt()}),d.addEventListener("click",async()=>{await Xe(String(l.value||""))}),f.addEventListener("click",async()=>{const T=String(l.value||"");if(!T)return;const O=Ke(T);confirm(`Delete single-rule preset "${O}"?`)&&(await jc(T),await P(),c.value="")});const J=window.__seesoundRuleDeleteAbort;J&&typeof J.abort=="function"&&J.abort();const Re=new AbortController;return window.__seesoundRuleDeleteAbort=Re,document.addEventListener("keydown",T=>{T.defaultPrevented||(T.key==="Delete"||T.key==="Backspace")&&(Ne(T.target)||Qe()&&(T.preventDefault(),T.stopPropagation()))},{signal:Re.signal}),jt={serialize:()=>g.map((T,O)=>ma(T,O)),addRow:T=>{g.push(hr(T||Hl(g.length),g.length)),de()},replaceFromRuleBlocks:T=>{g=(Array.isArray(T)?T:[]).map(hr),v.clear(),R.length=0,w.clear(),C.clear(),D.clear(),b.clear(),y="",E=-1,h=-1,S=[],nt(),ie(),W({compileStatus:"stale",compileError:null})},renderCompileStatus:W},Is((T,O)=>{O!=="ruleBlocks"||p||jt==null||jt.replaceFromRuleBlocks(Array.isArray(Se.ruleBlocks)?Se.ruleBlocks:[])}),ie(),window.addEventListener("seesound:rule-probe",T=>{var ee;z=((ee=T==null?void 0:T.detail)==null?void 0:ee.inputs)||Object.create(null);const O=a.querySelectorAll(".cp-rule-live-value[data-rule-uid]");for(const I of O){const Z=I.getAttribute("data-rule-uid"),oe=I.getAttribute("data-probe-kind"),_e=g.find(Ie=>Ie._uid===Z);if(!_e)continue;const ce=Vl(_e,z);I.textContent=is(oe==="out"?ce.outValue:ce.inValue)}}),P(),de(),window.addEventListener("seesound:rule-compile-state",T=>W(T.detail||{})),jt}function M_(n){if(!n){console.warn("[ControlPanel] No container element found.");return}const e="seesound_settings_panel_width_v1";function t(g){const h=Math.max(220,Math.floor(window.innerWidth*.7));return Math.max(220,Math.min(h,Math.floor(Number(g)||220)))}let i=(()=>{try{const g=Number(localStorage.getItem(e));if(Number.isFinite(g)&&g>0)return t(g)}catch{}return t(n.getBoundingClientRect().width||280)})();function r(g,p=!1){const h=t(g),S=p?28:h;document.documentElement.style.setProperty("--panel-width",`${S}px`),window.dispatchEvent(new CustomEvent("seesound:panel-width",{detail:{width:S,expandedWidth:h,collapsed:!!p}}))}n.style.width=`${i}px`,r(i,!1);const s=j("div","cp-header"),a=j("div","cp-resize-handle",{title:"Drag to resize settings"}),o=j("button","cp-collapse-btn",{text:"»",title:"Collapse panel"}),l=j("span","cp-title",{text:"Parameters"}),c=j("button","cp-reset-btn",{text:"↺",title:"Reset all to factory defaults"});s.append(o,l,c);const u=j("div","cp-body");u.appendChild(c_()),u.appendChild(u_());for(let g=0;g<kl.length;g++){const p=kl[g],h=yr.filter(S=>S.group===p.id&&S.key!=="canvasWidth"&&S.key!=="canvasHeight"&&S.key!=="canvasScale"&&S.key!=="defaultBackgroundHue"&&S.key!=="defaultBackgroundSaturation"&&S.key!=="defaultBackgroundLightness");h.length!==0&&u.appendChild(d_(p,h,g<3))}x_(u),n.append(a,s,u);let d=!1;o.addEventListener("click",()=>{d=!d,n.classList.toggle("cp-collapsed",d),d?(i=t(n.getBoundingClientRect().width||i),n.style.width="28px",r(i,!0)):(n.style.width=`${i}px`,r(i,!1)),o.textContent=d?"«":"»",l.style.display=d?"none":"",c.style.display=d?"none":"",u.style.display=d?"none":""});const f=window.__seesoundPanelResizeAbort;f&&typeof f.abort=="function"&&f.abort();const m=new AbortController;window.__seesoundPanelResizeAbort=m;let _=null;a.addEventListener("mousedown",g=>{d||(_={startX:g.clientX,startWidth:n.getBoundingClientRect().width},g.preventDefault())},{signal:m.signal}),window.addEventListener("mousemove",g=>{if(!_||d)return;const p=_.startX-g.clientX,h=t(_.startWidth+p);i=h,n.style.width=`${h}px`,r(h,!1)},{signal:m.signal}),window.addEventListener("mouseup",()=>{if(_){_=null;try{localStorage.setItem(e,String(i))}catch{}}},{signal:m.signal}),window.addEventListener("resize",()=>{d||(i=t(i),n.style.width=`${i}px`,r(i,!1))},{signal:m.signal}),c.addEventListener("click",()=>{var g;if(confirm("Reset all parameters to factory defaults?")){jg();for(const p of yr)(g=an.get(p.key))==null||g(Se[p.key])}})}const Jc=()=>{},ps=()=>{},y_=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs});function rs(n){for(const e of n||[]){const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness")return!0}return!1}function Gl(n,e){for(const t of n||[]){const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const b_=new Set([">",">=","<","<=","==","!="]);let ss={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",requiredInputsByTarget:{spawnedParticles:[],allParticles:[],background:[],camera:[]},requiredInputs:[],applySpawnRules:Jc,applyLivingRules:ps}};function Wl(n,e){if(typeof n!="string"||!n.trim())return[];const t=new Set,i=n.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const r of i)e.has(r)&&t.add(r);return[...t]}function as(n,e){const t=new Set;for(const i of n||[]){if(!(i!=null&&i.enabled))continue;const r=i.condition||{};typeof r.input=="string"&&e.has(r.input)&&t.add(r.input),typeof r.valueInput=="string"&&e.has(r.valueInput)&&t.add(r.valueInput);for(const a of Wl(r.expression,e))t.add(a);const s=Array.isArray(i.actions)?i.actions:[];for(const a of s){typeof(a==null?void 0:a.input)=="string"&&e.has(a.input)&&t.add(a.input);for(const o of Wl(a==null?void 0:a.expression,e))t.add(o)}}return[...t]}function Qc(n){return JSON.stringify(n)}function S_(n){return typeof n.expression=="string"&&n.expression.trim()?`(${n.expression})`:typeof n.input=="string"&&n.input.trim()?n.input:Qc(n.value)}function E_(n){if(!n||n.operator==="always")return"true";if(typeof n.expression=="string"&&n.expression.trim())return`(${n.expression})`;if(!b_.has(n.operator))return"false";const e=typeof n.input=="string"?n.input:"0",t=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Qc(n.value??0);return`((${e}) ${n.operator} (${t}))`}function T_(n){const e=n.output,t=S_(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function Es(n,e,t,i){const r=[],s=[];r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const a of t)a==="deltaTime"||a==="time"||r.push(`  const ${a} = Number.isFinite(i.${a}) ? i.${a} : 0;`);return e.forEach(a=>{if(!a.enabled)return;const o=E_(a.condition);r.push(`  // rule ${a.id}`),r.push(`  if (${o}) {`),s.push({ruleId:a.id,functionName:n,sourceLine:r.length+1});for(const l of a.actions??[])r.push(`    ${T_(l)}`);r.push("  }")}),r.push("}"),{source:r.join(`
`),lineMap:s}}function A_(n,e){return Es("applySpawnRules",n,e,!1)}function w_(n,e){return Es("applyLivingRules",n,e,!0)}function R_(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function Xl(n,e){const t=performance.now(),i=Vc(n,e),s=[...i.ruleBlocks].sort((v,R)=>(v.order??0)-(R.order??0)),a=s.filter(v=>v.target==="spawnedParticles"),o=s.filter(v=>v.target==="allParticles"),l=s.filter(v=>v.target==="background"),c=s.filter(v=>v.target==="camera"),u=R_(s);if(ss.hash===u)return ss.result;const d=kc().entries.map(v=>v.id),f=new Set(d),m={spawnedParticles:as(a,f),allParticles:as(o,f),background:as(l,f),camera:as(c,f)},_=[...new Set([...m.spawnedParticles,...m.allParticles,...m.background,...m.camera])],g=A_(a,d),p=w_(o,d),h=Es("applyBackgroundRules",l,d,!0),S=Es("applyCameraRules",c,d,!0),E=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",g.source,p.source,h.source,S.source,"return { applySpawnRules, applyLivingRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const R=new Function("helpers",E)(y_),w={hash:u,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:rs([...a,...o]),usesBackgroundHsb:rs(l),usesLivingShapeType:Gl(o,"shapeType"),rejected:i.rejected,requiredInputsByTarget:m,requiredInputs:_,lineMap:[...g.lineMap,...p.lineMap,...h.lineMap,...S.lineMap],source:E,applySpawnRules:typeof R.applySpawnRules=="function"?R.applySpawnRules:Jc,applyLivingRules:typeof R.applyLivingRules=="function"?R.applyLivingRules:ps,applyBackgroundRules:typeof R.applyBackgroundRules=="function"?R.applyBackgroundRules:ps,applyCameraRules:typeof R.applyCameraRules=="function"?R.applyCameraRules:ps};return ss={hash:u,result:w},w}catch(v){const R=Number.isFinite(v==null?void 0:v.lineNumber)?Number(v.lineNumber):null;return{...ss.result,hash:u,compileStatus:"error",compileError:(v==null?void 0:v.message)||String(v),compileLine:R,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,backgroundRuleCount:l.length,cameraRuleCount:c.length,usesParticleHsb:rs([...a,...o]),usesBackgroundHsb:rs(l),usesLivingShapeType:Gl(o,"shapeType"),requiredInputsByTarget:m,requiredInputs:_,lineMap:[...g.lineMap,...p.lineMap,...h.lineMap,...S.lineMap],source:E,rejected:i.rejected}}}function qn(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function Fs(n,e,t=2){const i=Math.max(0,Math.min(e-1,Math.floor(n))),r=Math.max(1,Math.floor(t));return{start:Math.max(0,i-r),end:Math.min(e-1,i+r),center:i}}function C_(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,s=0;for(let a=0;a<t;a++){const o=Math.max(0,n[a]/255),l=a/Math.max(1,t-1)*i;r+=l*o,s+=o}return s<=1e-9?0:r/s}function P_(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const s=Math.max(0,n[r]/255),a=Math.max(0,e[r]/255),o=s-a;o>0&&(i+=o)}return qn(i/t)}function L_(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let a=0;a<n.length;a++){const o=Math.max(0,n[a]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),s=i/n.length;return qn(r/Math.max(s,e))}function N_(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,s=[];for(let u=1;u<t-1;u++){const d=n[u];if(!(d<r)&&d>=n[u-1]&&d>=n[u+1]){const f=u/Math.max(1,t-1)*i;s.push({i:u,hz:f,mag:d/255})}}if(s.length<2)return 0;s.sort((u,d)=>d.mag-u.mag);const a=s.slice(0,6),o=Math.max(20,a[0].hz);let l=0,c=0;for(let u=1;u<a.length;u++){const d=a[u],m=Math.max(1,Math.round(d.hz/o))*o,_=Math.abs(d.hz-m)/Math.max(m,1e-9);l+=_*d.mag,c+=d.mag}return c<=1e-9?0:qn(l/c*2)}function D_(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return qn((Number.isFinite(n)?n:0)/t)}function I_(n,e,t=3){if(!n||!n.length)return 0;const i=n.length,{start:r,end:s}=Fs(e,i,t);let a=0,o=0;for(let l=r;l<=s;l++){const c=Math.max(0,n[l]/255);a+=l*c,o+=c}return o<=1e-9?qn((Math.floor(e)||0)/Math.max(1,i-1)):qn(a/o/Math.max(1,i-1))}function U_(n,e,t,i=2){if(!n||!e||!n.length||!e.length)return 0;const r=Math.min(n.length,e.length),{start:s,end:a}=Fs(t,r,i);let o=0,l=0;for(let c=s;c<=a;c++){const u=Math.max(0,n[c]/255),d=Math.max(0,e[c]/255),f=u-d;f>0&&(o+=f),l++}return l<=0?0:qn(o/l)}function F_(n,e,t=3){if(!n||!n.length)return 0;const i=1e-12,{start:r,end:s}=Fs(e,n.length,t);let a=0,o=0,l=0;for(let d=r;d<=s;d++){const f=Math.max(0,n[d]/255),m=f*f+i;a+=Math.log(m),o+=m,l++}if(l<=0||o<=0)return 0;const c=Math.exp(a/l),u=o/l;return qn(c/Math.max(u,i))}function O_(n,e,t=3){if(!n||n.length<3)return 0;const i=n.length,{start:r,end:s}=Fs(e,i,t);let a=0,o=0;const l=Math.max(r+1,1),c=Math.min(s-1,i-2);for(let u=l;u<=c;u++){const d=Math.max(0,n[u-1]/255),f=Math.max(0,n[u]/255),m=Math.max(0,n[u+1]/255),_=Math.abs(d-2*f+m);a+=_,o++}return o<=0?0:qn(a/o*1.5)}const Lo=16,uo=2e4,ql=Math.log2(Lo),B_=Math.log2(uo);function ga(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,Lo))-ql)/(B_-ql)))}function Gt(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return Number.isFinite(s)?!Number.isFinite(i)||!Number.isFinite(r)||r<=i?Ye(s):Ye((s-i)/(r-i)):0}function $l(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function Ye(n){return Math.max(0,Math.min(1,n))}function ms(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function os(n,e,t){const i=Ye(n),r=Ye(e),s=Ye(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return{h:c,s:u,v:a}}function _a(n,e,t){const i=ms(n)??0,r=Ye(e),s=Ye(t),a=Math.floor(i*6),o=i*6-a,l=s*(1-r),c=s*(1-o*r),u=s*(1-(1-o)*r);switch(a%6){case 0:return{r:s,g:u,b:l};case 1:return{r:c,g:s,b:l};case 2:return{r:l,g:s,b:u};case 3:return{r:l,g:c,b:s};case 4:return{r:u,g:l,b:s};default:return{r:s,g:l,b:c}}}const z_=`
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
`,k_=`
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
`;class H_{constructor(e,t={}){this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0;const i=new Mn;this._geo=i,this._allocateBuffers(this._N);const r=new Xn({vertexShader:z_,fragmentShader:k_,uniforms:{uViewportHeight:{value:1}},transparent:!0,depthWrite:!1,blending:Gi});this._mesh=new $d(i,r),this._mesh.frustumCulled=!1,e.add(this._mesh),this._mat=r,this._lastBlending=r.blending,this._background=new st(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null},this._compiledRules=Xl([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._pan=new Float32Array(this._N),this._aPos=new zt(this._pos,3),this._aCol=new zt(this._col,3),this._aSz=new zt(this._sz,1),this._aAlpha=new zt(this._alpha,1),this._aShape=new zt(this._shape,1);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape])t.setUsage(Ju);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const s=Math.max(0,Math.min(e,t));if(s<=0)return 0;const a={count:s,timestampSec:r,pos:this._pos.slice(0,s*3),col:this._col.slice(0,s*3),sz:this._sz.slice(0,s),alpha:this._alpha.slice(0,s),shape:this._shape.slice(0,s),pan:this._pan.slice(0,s)};this._archiveChunks.push(a),this._archivePointCount+=s,this._pruneArchive(i,r);const o=t-s;for(let l=0;l<o;l++){const c=l+s;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c],this._pan[l]=this._pan[c]}return s}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let s=0;s<this._archiveChunks.length&&r<i;s++){const a=this._archiveChunks[s],o=Math.min(a.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=a.pos[l*3],this._pos[(r+l)*3+1]=a.pos[l*3+1],this._pos[(r+l)*3+2]=a.pos[l*3+2],this._col[(r+l)*3]=a.col[l*3],this._col[(r+l)*3+1]=a.col[l*3+1],this._col[(r+l)*3+2]=a.col[l*3+2],this._sz[r+l]=a.sz[l],this._alpha[r+l]=a.alpha[l],this._shape[r+l]=a.shape[l],this._pan[r+l]=a.pan?a.pan[l]:0;r+=o}else for(let s=this._archiveChunks.length-1;s>=0&&r<i;s--){const a=this._archiveChunks[s],o=Math.min(a.count,i-r),l=a.count-o;for(let c=0;c<o;c++){const u=l+c;this._pos[(i-r-o+c)*3]=a.pos[u*3],this._pos[(i-r-o+c)*3+1]=a.pos[u*3+1],this._pos[(i-r-o+c)*3+2]=a.pos[u*3+2],this._col[(i-r-o+c)*3]=a.col[u*3],this._col[(i-r-o+c)*3+1]=a.col[u*3+1],this._col[(i-r-o+c)*3+2]=a.col[u*3+2],this._sz[i-r-o+c]=a.sz[u],this._alpha[i-r-o+c]=a.alpha[u],this._shape[i-r-o+c]=a.shape[u],this._pan[i-r-o+c]=a.pan?a.pan[u]:0}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}clearCanvas(){this.clear()}scaleAllParticleSizes(e){const t=Number(e);if(!(!Number.isFinite(t)||t<=0)){for(let i=0;i<this._visibleCount;i++)this._sz[i]=Math.max(0,this._sz[i]*t);for(const i of this._archiveChunks){const r=Math.max(0,Number(i==null?void 0:i.count)||0);if(i!=null&&i.sz)for(let s=0;s<r;s++)i.sz[s]=Math.max(0,i.sz[s]*t)}this._aSz.needsUpdate=!0}}setViewportHeight(e){var i,r;const t=Math.max(1,Number(e)||1);(r=(i=this._mat)==null?void 0:i.uniforms)!=null&&r.uViewportHeight&&(this._mat.uniforms.uViewportHeight.value=t)}onRulesChanged(e){const t=Xl(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){return{amplitude:Number.isFinite(t.amplitude)?Number(t.amplitude):e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:Number.isFinite(t.pan)?Number(t.pan):e.pan??0,time:Number(t.time)||0,deltaTime:Number(t.deltaTime)||0,globalRmsEnergy:Number.isFinite(t.globalRmsEnergy)?Number(t.globalRmsEnergy):e.amplitude??0,spectralCentroid:Number.isFinite(t.spectralCentroid)?Number(t.spectralCentroid):e.spectralCentroid??0,spectralFlux:Number.isFinite(t.spectralFlux)?Number(t.spectralFlux):e.spectralFlux??0,spectralFlatness:Number.isFinite(t.spectralFlatness)?Number(t.spectralFlatness):e.spectralFlatness??0,inharmonicity:Number.isFinite(t.inharmonicity)?Number(t.inharmonicity):e.inharmonicity??0,binMagnitude:Number.isFinite(t.binMagnitude)?Ye(t.binMagnitude):0,binFlux:Number.isFinite(t.binFlux)?Number(t.binFlux):0,binPhaseDeviation:Number.isFinite(t.binPhaseDeviation)?Ye(t.binPhaseDeviation):0,binPhasedeviation:Number.isFinite(t.binPhasedeviation)?Ye(t.binPhasedeviation):Number.isFinite(t.binPhaseDeviation)?Ye(t.binPhaseDeviation):0,binAttackTime:Number.isFinite(t.binAttackTime)?Ye(t.binAttackTime):0,binEnvelope:Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):Number.isFinite(t.binAttackTime)?Number(t.binAttackTime):0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,canvasWidthUnits:Number(t.canvasWidthUnits)||0,canvasHeightUnits:Number(t.canvasHeightUnits)||0,canvasBoundaryLeft:Number(t.canvasBoundaryLeft)||0,canvasBoundaryRight:Number(t.canvasBoundaryRight)||0,canvasBoundaryTop:Number(t.canvasBoundaryTop)||0,canvasBoundaryBottom:Number(t.canvasBoundaryBottom)||0,audioLengthSec:Number(t.audioLengthSec)||0,binEnergy:Ye(Number(t.binEnergy)||0),frequencyHz:Number(t.frequencyHz)||0,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount);if(e===0)return{empty:!0,min:new B,max:new B,center:new B,size:new B};const t=new B(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),i=new B(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let a=0;a<e;a++){const o=this._pos[a*3],l=this._pos[a*3+1],c=this._pos[a*3+2];o<t.x&&(t.x=o),l<t.y&&(t.y=l),c<t.z&&(t.z=c),o>i.x&&(i.x=o),l>i.y&&(i.y=l),c>i.z&&(i.z=c)}const r=t.clone().add(i).multiplyScalar(.5),s=i.clone().sub(t);return{empty:!1,min:t,max:i,center:r,size:s}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),s=1,a=e||{},o=a.inputs||(a.inputs={});let l=0;for(let c=t;c<i&&!(l>=r);c+=s){o.pan=Number.isFinite(this._pan[c])?this._pan[c]:0;const u={x:this._pos[c*3],y:this._pos[c*3+1],z:this._pos[c*3+2],size:this._sz[c],red:this._col[c*3],green:this._col[c*3+1],blue:this._col[c*3+2],opacity:this._alpha[c],r:this._col[c*3],g:this._col[c*3+1],b:this._col[c*3+2],a:this._alpha[c],shapeType:this._shape[c]>.5?"circle":"square"};this._compiledRules.applyLivingRules(a,u),this._pos[c*3]=Number.isFinite(u.x)?u.x:this._pos[c*3],this._pos[c*3+1]=Number.isFinite(u.y)?u.y:this._pos[c*3+1],this._pos[c*3+2]=Number.isFinite(u.z)?u.z:this._pos[c*3+2],this._sz[c]=Number.isFinite(u.size)?Math.max(0,u.size):this._sz[c];const d=Number.isFinite(u.red)?u.red:u.r,f=Number.isFinite(u.green)?u.green:u.g,m=Number.isFinite(u.blue)?u.blue:u.b,_=Number.isFinite(u.opacity)?u.opacity:u.a;let g=Number.isFinite(d)?Ye(d):this._col[c*3],p=Number.isFinite(f)?Ye(f):this._col[c*3+1],h=Number.isFinite(m)?Ye(m):this._col[c*3+2];if(this._compiledRules.usesParticleHsb){const S=os(g,p,h),E=ms(u.hue),v=Number.isFinite(u.saturation)?Ye(u.saturation):S.s,R=Number.isFinite(u.brightness)?Ye(u.brightness):S.v,w=_a(E??S.h,v,R);g=w.r,p=w.g,h=w.b}this._col[c*3]=g,this._col[c*3+1]=p,this._col[c*3+2]=h,this._alpha[c]=Number.isFinite(_)?Math.max(0,Math.min(1,_)):this._alpha[c],this._shape[c]=$l(u.shapeType),l++}return l}applyBackgroundRules(e){const t=this._background,i=os(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v,backgroundRed:t.r,backgroundGreen:t.g,backgroundBlue:t.b};this._compiledRules.applyBackgroundRules(e,r);let s=Number.isFinite(r.red)?Ye(r.red):t.r,a=Number.isFinite(r.green)?Ye(r.green):t.g,o=Number.isFinite(r.blue)?Ye(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=os(s,a,o),c=ms(r.hue),u=Number.isFinite(r.saturation)?Ye(r.saturation):l.s,d=Number.isFinite(r.brightness)?Ye(r.brightness):l.v,f=_a(c??l.h,u,d);s=f.r,a=f.g,o=f.b}t.setRGB(s,a,o)}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null}}update(e,t,i,r){var Ue,ot,dt,$e,St,wt,Rn,Kt,Ht,Cn,et,Jt;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const s=performance.now(),a=Math.max(0,Math.min(1,(s-this._lastUpdateT)/1e3));this._lastUpdateT=s;const o=e.frequencyData,l=Math.min(o.length,this._N),u=(((Ue=e.ctx)==null?void 0:Ue.sampleRate)??44100)/2,d=ge=>ge/o.length*u,f=t.persistMode??0,m=t.inputGain??1,_=t.amplitudeThreshold??-48,g=Math.max(0,Math.min(255,Math.round(Math.pow(10,_/20)*255))),p=t.defaultParticleSize??6,h=Math.max(Lo,Math.min(uo,Number(t.freqNormMin??40))),S=Math.max(h+1,Math.min(uo,Number(t.freqNormMax??12e3))),E=ga(h),v=ga(S),R=Number(t.binMagnitudeNormMin??-70),w=Number(t.binMagnitudeNormMax??0),C=Number(t.binFluxNormMin??0),D=Number(t.binFluxNormMax??.5),b=Number(t.binPhaseDeviationNormMin??0),y=Number(t.binPhaseDeviationNormMax??Math.PI),L=Number(t.binAttackTimeNormMin??5),K=Number(t.binAttackTimeNormMax??500),G=Number(t.globalRmsNormMin??-60),z=Number(t.globalRmsNormMax??0),Y=Number(t.spectralCentroidNormMin??150),q=Number(t.spectralCentroidNormMax??8e3),ue=Number(t.globalSpectralFluxNormMin??0),W=Number(t.globalSpectralFluxNormMax??100),de=Number(t.spectralFlatnessNormMin??0),fe=Number(t.spectralFlatnessNormMax??1),Ee=Number(t.particleRenderPercent),ke=Number.isFinite(Ee)?Math.max(1,Math.min(100,Math.floor(Ee))):100,nt=t.blendMode??"screen",Q=Number.isFinite(Number(t.defaultBackgroundHue))?Number(t.defaultBackgroundHue):0,le=Number.isFinite(Number(t.defaultBackgroundSaturation))?Number(t.defaultBackgroundSaturation):0,Ce=Number.isFinite(Number(t.defaultBackgroundLightness))?Number(t.defaultBackgroundLightness):0,Me=!!(e.analyserL&&e.analyserR&&e.getBinPan),Fe=((ot=e.getPrevFrequencyData)==null?void 0:ot.call(e))||null,Ne=((dt=e.getBinMagnitude)==null?void 0:dt.call(e))||null,Oe=(($e=e.getBinFlux)==null?void 0:$e.call(e))||null,Qe=((St=e.getBinPhaseDeviation)==null?void 0:St.call(e))||null,Be=((wt=e.getBinEnvelope)==null?void 0:wt.call(e))||null,Ke=((Rn=e.getBinAttackTime)==null?void 0:Rn.call(e))||null,P=new Set(((Ht=(Kt=this._compiledRules)==null?void 0:Kt.requiredInputsByTarget)==null?void 0:Ht.spawnedParticles)||[]),gt=new Set(((Cn=this._compiledRules)==null?void 0:Cn.requiredInputs)||[]),Xe=P.has("spectralCentroid"),qe=P.has("spectralFlux"),Le=P.has("spectralFlatness"),at=P.has("inharmonicity"),Pe=gt.has("binMagnitude")||gt.has("binEnergy"),A=gt.has("binFlux"),x=gt.has("binPhaseDeviation")||gt.has("binPhasedeviation"),k=gt.has("binAttackTime"),te=gt.has("binEnvelope"),ie=ke>=100?()=>!0:ge=>ge*ke%100<ke;if(nt==="alpha"){const ge=this._mat;(ge.blending!==Ma||ge.blendSrc!==_r||ge.blendDst!==vr||ge.blendEquation!==Bn)&&(ge.blending=Ma,ge.blendSrc=_r,ge.blendDst=vr,ge.blendEquation=Bn,ge.needsUpdate=!0,this._lastBlending=ge.blending)}else{const ze={screen:Gi,lighter:Gi,"source-over":si,multiply:si}[nt]??Gi;ze!==this._lastBlending&&(this._mat.blending=ze,this._mat.needsUpdate=!0,this._lastBlending=ze)}const J=Number(t.cameraCanvasWidthUnits),Re=Number(t.cameraCanvasHeightUnits),T=Number.isFinite(J)&&J>0?J:i,O=Number.isFinite(Re)&&Re>0?Re:r,ee=(Q%360+360)%360;this._background.setHSL(ee/360,Ye(le/100),Ye(Ce/100));const I=T/2,Z=O/2,oe=Number.isFinite(Number(t.cameraCanvasBoundaryLeft))?Number(t.cameraCanvasBoundaryLeft):-I,_e=Number.isFinite(Number(t.cameraCanvasBoundaryRight))?Number(t.cameraCanvasBoundaryRight):I,ce=Number.isFinite(Number(t.cameraCanvasBoundaryTop))?Number(t.cameraCanvasBoundaryTop):Z,Ie=Number.isFinite(Number(t.cameraCanvasBoundaryBottom))?Number(t.cameraCanvasBoundaryBottom):-Z,me=((et=e.audioEl)==null?void 0:et.currentTime)??0,We=((Jt=e.audioEl)==null?void 0:Jt.duration)??0,N={binMagnitude:0,binFlux:0,binPhaseDeviation:0,binPhasedeviation:0,binAttackTime:0,binEnvelope:0,globalRmsEnergy:Gt(e.rmsDbfs,G,z),spectralCentroid:Gt(e.spectralCentroidHz,Y,q),spectralFlux:Gt(e.spectralFluxAU,ue,W),spectralFlatness:Gt(e.spectralFlatnessRatio,de,fe),inharmonicity:Ye(e.inharmonicity)};if(N.amplitude=N.globalRmsEnergy,Pe&&Ne&&Ne.length>0){let ge=0;for(let ze=0;ze<Ne.length;ze++)ge+=Gt(Ne[ze],R,w);N.binMagnitude=ge/Ne.length}if(A&&Oe&&Oe.length>0){let ge=0;for(let ze=0;ze<Oe.length;ze++)ge+=Gt(Oe[ze],C,D);N.binFlux=ge/Oe.length}if(x&&Qe&&Qe.length>0){let ge=0;for(let it=0;it<Qe.length;it++)ge+=Gt(Qe[it],b,y);const ze=ge/Qe.length;N.binPhaseDeviation=ze,N.binPhasedeviation=ze}if(k&&Ke&&Ke.length>0){let ge=0;for(let ze=0;ze<Ke.length;ze++)ge+=Gt(Ke[ze],L,K);N.binAttackTime=ge/Ke.length}if(te&&Be&&Be.length>0){let ge=0;for(let ze=0;ze<Be.length;ze++)ge+=Be[ze];N.binEnvelope=ge/Be.length}let pe=0;for(let ge=0;ge<l;ge++)o[ge]>pe&&(pe=o[ge]);const X=Math.max(1,Math.round(pe*.55)),ne=Math.min(g,X);let se=f===1?this._paintCount:0;const ve=(ge,ze,it,Rt=1)=>{if(se>=this._N&&f===1){const Lt=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),Sn=this._archiveAndCompactOldest(Lt,se,t,me);se=Math.max(0,se-Sn)}if(se>=this._N)return;const un=d(ge),li=ga(un),dn=Gt(li,E,v),bn=Me?e.getBinPan(ge):e.pan??0,sr=Xe?Ye(I_(o,ge)):void 0,Ti=qe?Ye(U_(o,Fe,ge)):void 0,M=Le?Ye(F_(o,ge)):void 0,U=at?Ye(O_(o,ge)):void 0,H=Pe&&Ne&&ge<Ne.length?Gt(Ne[ge],R,w):void 0,V=A&&Oe&&ge<Oe.length?Gt(Oe[ge],C,D):void 0,F=x&&Qe&&ge<Qe.length?Gt(Qe[ge],b,y):void 0,re=k&&Ke&&ge<Ke.length?Gt(Ke[ge],L,K):void 0,xe=te&&Be&&ge<Be.length?Gt(Be[ge]/3,0,1):void 0,be=(dn*2-1)*Z,$=0,he=0,Ae=Ye(it),ae={x:$,y:be,z:he,size:Math.max(1,p*(.5+it*1.5)),red:Ae,green:Ae,blue:Ae,opacity:Math.min(1,(.08+it*1.9)*Rt),r:Ae,g:Ae,b:Ae,a:Math.min(1,(.08+it*1.9)*Rt),particleCount:1,shapeType:"square"};t.ruleEngineEnabled!==!1&&this._compiledRules.spawnRuleCount>0&&this.applySpawnRulesToParticle({inputs:this._buildRuleInputs(e,{binEnergy:it,frequencyHz:un,normFreq:dn,pan:bn,spectralCentroid:sr,spectralFlux:Ti,spectralFlatness:M,inharmonicity:U,binMagnitude:H,binFlux:V,binPhaseDeviation:F,binAttackTime:re,binEnvelope:xe,globalRmsEnergy:N.globalRmsEnergy,amplitude:N.amplitude,time:me,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:T,canvasHeightUnits:O,canvasBoundaryLeft:oe,canvasBoundaryRight:_e,canvasBoundaryTop:ce,canvasBoundaryBottom:Ie,audioLengthSec:We}),particle:ae});const He=Number.isFinite(ae.particleCount)?Ye(ae.particleCount):1;if(He<=0||He<1&&Math.random()>He)return;this._pos[se*3]=Number.isFinite(ae.x)?ae.x:$,this._pos[se*3+1]=Number.isFinite(ae.y)?ae.y:be,this._pos[se*3+2]=Number.isFinite(ae.z)?ae.z:he,this._sz[se]=Number.isFinite(ae.size)?Math.max(0,ae.size):Math.max(2,p);const je=Number.isFinite(ae.red)?ae.red:ae.r,mt=Number.isFinite(ae.green)?ae.green:ae.g,ht=Number.isFinite(ae.blue)?ae.blue:ae.b,Je=Number.isFinite(ae.opacity)?ae.opacity:ae.a;let De=Number.isFinite(je)?Ye(je):Ae,vt=Number.isFinite(mt)?Ye(mt):Ae,tt=Number.isFinite(ht)?Ye(ht):Ae;if(this._compiledRules.usesParticleHsb){const Lt=os(De,vt,tt),Sn=ms(ae.hue),Ut=Number.isFinite(ae.saturation)?Ye(ae.saturation):Lt.s,ci=Number.isFinite(ae.brightness)?Ye(ae.brightness):Lt.v,lt=_a(Sn??Lt.h,Ut,ci);De=lt.r,vt=lt.g,tt=lt.b}this._col[se*3]=De,this._col[se*3+1]=vt,this._col[se*3+2]=tt,this._alpha[se]=Number.isFinite(Je)?Math.max(0,Math.min(1,Je)):Math.min(1,(.08+it*1.9)*Rt),this._shape[se]=$l(ae.shapeType),this._pan[se]=Number.isFinite(bn)?Math.max(-1,Math.min(1,bn)):0,se++};for(let ge=0;ge<l;ge++){if(d(ge),!ie(ge))continue;const ze=o[ge],Rt=(Ne&&ge<Ne.length?Ye(Ne[ge]):ze/255)*m;if(!(ze<=ne)&&(ve(ge,ze,Rt),se>=this._N))break}if(se===0&&pe>0){const ge=[];for(let it=0;it<l;it++){const Rt=d(it);Rt>=lowCut&&Rt<=highCut&&o[it]>0&&ie(it)&&ge.push(it)}ge.sort((it,Rt)=>o[Rt]-o[it]);const ze=Math.min(96,ge.length);for(let it=0;it<ze&&se<this._N;it++){const Rt=ge[it],un=o[Rt],li=un/255,dn=Math.max(.08,li*m);ve(Rt,un,dn,.85)}}f===1?(this._paintCount=se,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._pruneArchive(t,me)):(this._paintCount=0,this._visibleCount=se,this._geo.setDrawRange(0,se)),t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{...N,time:me,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:T,canvasHeightUnits:O,canvasBoundaryLeft:oe,canvasBoundaryRight:_e,canvasBoundaryTop:ce,canvasBoundaryBottom:Ie,audioLengthSec:We})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{...N,time:me,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:T,canvasHeightUnits:O,canvasBoundaryLeft:oe,canvasBoundaryRight:_e,canvasBoundaryTop:ce,canvasBoundaryBottom:Ie,audioLengthSec:We})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{...N,time:me,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,canvasWidthUnits:T,canvasHeightUnits:O,canvasBoundaryLeft:oe,canvasBoundaryRight:_e,canvasBoundaryTop:ce,canvasBoundaryBottom:Ie,audioLengthSec:We})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;this._aPos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose()}}const V_="http://localhost:8000",G_="audio/wav",W_=new Set(["m4a","aac","flac","alac","aiff"]);function X_(n){const e=String(n||"").lastIndexOf(".");return e<0?"":n.slice(e+1).toLowerCase()}function q_(n,e){const t=String(n).replace(/[\\/:*?"<>|]+/g,"_"),i=t.lastIndexOf(".");return i<0?`${t}.${e}`:`${t.slice(0,i)}.${e}`}function $_(n){const e=X_(n==null?void 0:n.name);return e?W_.has(e):!1}async function Y_(n){const e=new FormData;e.append("file",n);const t=await fetch(`${V_}/api/audio/convert`,{method:"POST",body:e});if(!t.ok){const s=await t.text().catch(()=>"");throw new Error(s||`Audio conversion failed (${t.status}).`)}const i=await t.blob();if(!i||i.size===0)throw new Error("Converted audio is empty.");const r=q_((n==null?void 0:n.name)||"audio","wav");return new File([i],r,{type:G_})}function ki(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function yt(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:i.setAttribute(r,s);return i}function j_(n){if(!n){console.warn("[AudioPlayer] No container element.");const z=new Audio;return z.crossOrigin="anonymous",{audioEl:z,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=yt("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"});r.textContent="«";const s=yt("div","audio-player__body"),a=yt("div","audio-player__file-row"),o=yt("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});o.style.display="none";const l=yt("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});l.textContent="♫";const c=yt("span","audio-player__file-name",{text:"No file loaded"});a.append(o,l);const u=yt("div","audio-player__transport"),d=yt("button","audio-player__btn audio-player__btn--play",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});d.textContent="▶";const f=yt("button","audio-player__btn",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});f.textContent="■";const m=yt("button","audio-player__btn",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});m.textContent="<<";const _=yt("button","audio-player__btn",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});_.textContent=">>";const g=yt("button","audio-player__btn",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});g.textContent="PNG";const p=yt("button","audio-player__btn",{id:"btn-paint-all","aria-label":"Paint all",disabled:"true",title:"Run through full audio and stop"});p.textContent="PAINT ALL";const h=yt("div","audio-player__speed-wrap"),S=yt("input","audio-player__speed-input",{type:"number",min:"0.1",max:"16",step:"0.1",value:"1","aria-label":"Playback speed multiplier",title:"Playback speed multiplier (0.1 to 16)"}),E=yt("span","audio-player__speed-suffix",{text:"x"});h.append(S,E),u.append(d,f,m,_,g,p,h);const v=yt("div","audio-player__progress-row"),R=yt("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function w(z){R.style.background=`linear-gradient(90deg, var(--color-accent) ${z}%, var(--color-border) ${z}%)`}w(0);const C=yt("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),D=yt("div","audio-player__progress-meta");D.append(c,C),v.append(R,D),s.append(a,u,v),n.append(s,r);function b(z,Y=""){o.disabled=z,d.disabled=z||!e.src,f.disabled=z||!e.src,m.disabled=z||!e.src,_.disabled=z||!e.src,p.disabled=z||!e.src,S.disabled=z||!e.src,z&&Y&&(c.textContent=Y)}function y(z){const Y=Math.max(.1,Math.min(16,Number(z)));Number.isFinite(Y)&&(e.playbackRate=Y,S.value=String(Number(Y.toFixed(2))),n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:Y},bubbles:!0})))}function L(z,Y=(z==null?void 0:z.name)||"Audio loaded"){z&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(z),e.load(),c.textContent=Y,t=!1,d.textContent="▶",d.classList.remove("audio-player__btn--active"),R.value="0",w(0),C.textContent="0:00 / –:––",K(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:z,audioEl:e},bubbles:!0})))}function K(){d.disabled=!1,f.disabled=!1,m.disabled=!1,_.disabled=!1,p.disabled=!1,S.disabled=!1}o.addEventListener("change",async z=>{const Y=z.target.files[0];if(Y){b(!0,`Loading ${Y.name}...`);try{const q=$_(Y)?await(async()=>(c.textContent=`Converting ${Y.name}...`,Y_(Y)))():Y;L(q,q.name)}catch(q){console.warn("[AudioPlayer] conversion failed, using original file:",q),L(Y,Y.name)}finally{b(!1),o.value=""}}}),d.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(z){console.warn("[AudioPlayer] play() failed:",z.message)}}),e.addEventListener("play",()=>{t=!0,d.textContent="⏸︎",d.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,d.textContent="▶",d.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,d.textContent="▶",d.classList.remove("audio-player__btn--active")}),f.addEventListener("click",()=>{e.pause(),e.currentTime=0,R.value="0",w(0),C.textContent=`0:00 / ${ki(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),m.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),_.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),g.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),p.addEventListener("click",()=>{p.disabled||n.dispatchEvent(new CustomEvent("player:paintall",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:paintall-state",z=>{var q;const Y=!!((q=z==null?void 0:z.detail)!=null&&q.running);p.disabled=Y||!e.src,S.disabled=Y||!e.src,p.textContent=Y?"PAINTING...":"PAINT ALL"}),S.addEventListener("keydown",z=>{z.key==="Enter"&&(z.preventDefault(),y(S.value),S.blur())});let G=!1;return R.addEventListener("mousedown",()=>{G=!0}),R.addEventListener("touchstart",()=>{G=!0},{passive:!0}),R.addEventListener("input",()=>{const z=parseFloat(R.value);w(z),e.duration&&(C.textContent=`${ki(e.duration*z/100)} / ${ki(e.duration)}`)}),R.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(R.value)/100*e.duration),G=!1}),e.addEventListener("timeupdate",()=>{if(G)return;const z=e.currentTime,Y=e.duration;if(!isFinite(Y)||Y===0)return;const q=z/Y*100;R.value=String(q),w(q),C.textContent=`${ki(z)} / ${ki(Y)}`}),e.addEventListener("loadedmetadata",()=>{C.textContent=`0:00 / ${ki(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),r.textContent=i?"»":"«",r.title=i?"Expand player":"Collapse player"}),{audioEl:e,getIsPlaying:()=>t}}function va(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function Z_({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const s=va("div","canvas-wrapper__resize-handle-right"),a=va("div","canvas-wrapper__resize-handle-bottom"),o=va("div","canvas-wrapper__resize-handle-corner");n.append(s,a,o);let l=null;function c(f,m,_){f.preventDefault();const g=f.touches?f.touches[0].clientX:f.clientX,p=f.touches?f.touches[0].clientY:f.clientY;l={type:m,startX:g,startY:p,startW:n.clientWidth,startH:n.clientHeight,handle:_},_.classList.add("dragging"),document.body.style.cursor=m==="right"?"ew-resize":m==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function u(f){if(!l)return;const m=f.touches?f.touches[0].clientX:f.clientX,_=f.touches?f.touches[0].clientY:f.clientY,g=m-l.startX,p=_-l.startY,h=160,S=120,E=e.getBoundingClientRect();let v=l.startW,R=l.startH;(l.type==="right"||l.type==="corner")&&(v=Math.max(h,Math.min(l.startW+g,E.width-4))),(l.type==="bottom"||l.type==="corner")&&(R=Math.max(S,Math.min(l.startH+p,window.innerHeight-4)));const w=i>0?v/i:1,C=r>0?R/r:1;i=v,r=R,n.style.width=`${v}px`,n.style.height=`${R}px`,t(v,R,w,C)}function d(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return s.addEventListener("mousedown",f=>c(f,"right",s)),a.addEventListener("mousedown",f=>c(f,"bottom",a)),o.addEventListener("mousedown",f=>c(f,"corner",o)),s.addEventListener("touchstart",f=>c(f,"right",s),{passive:!1}),a.addEventListener("touchstart",f=>c(f,"bottom",a),{passive:!1}),o.addEventListener("touchstart",f=>c(f,"corner",o),{passive:!1}),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),window.addEventListener("resize",()=>{if(!n.style.width){const f=e.clientWidth,m=e.clientHeight,_=i>0?f/i:1,g=r>0?m/r:1;i=f,r=m,t(f,m,_,g)}}),{setSize(f,m){const _=i>0?f/i:1,g=r>0?m/r:1;i=f,r=m,n.style.width=`${f}px`,n.style.height=`${m}px`,t(f,m,_,g)},getSize(){return{w:i,h:r}}}}const Os=document.getElementById("three-canvas"),Sr=document.getElementById("canvas-wrapper"),An=document.getElementById("canvas-col"),pt=new Oc({canvas:Os,antialias:!0});pt.setPixelRatio(window.devicePixelRatio);pt.setClearColor(0,1);pt.autoClear=!0;const Er=new Hd,eu=new Kd(180);eu.userData.excludeFromPng=!0;Er.add(eu);const Pt=new Lc(-1,1,1,-1,.001,5e3),rn=new sn(55,1,.001,5e3);let Te=Pt;const bt=new B(0,0,0),No=new B(0,0,420),Yl=No.length();for(const n of[Pt,rn])n.position.copy(No),n.up.set(0,1,0),n.lookAt(bt);function Do(){const e=Se.cameraProjection==="perspective"?rn:Pt;e!==Te&&(e.position.copy(Te.position),e.quaternion.copy(Te.quaternion),e.up.copy(Te.up),e.zoom=Te.zoom,e.lookAt(bt),e.updateProjectionMatrix(),Te=e,$n())}const ft={radius:420,azimuth:0,elevation:0};function $n(){const n=Te.position.x-bt.x,e=Te.position.y-bt.y,t=Te.position.z-bt.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);ft.radius=i,ft.azimuth=Math.atan2(n,t),ft.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function Ts(){const n=Math.cos(ft.elevation);Te.position.set(bt.x+ft.radius*n*Math.sin(ft.azimuth),bt.y+ft.radius*Math.sin(ft.elevation),bt.z+ft.radius*n*Math.cos(ft.azimuth)),Te.lookAt(bt)}function tu(n){const e=String(n||"orthoXY");return e==="isometric"?{azimuth:Math.PI/4,elevation:Math.asin(1/Math.sqrt(3))}:e==="fortyFive"?{azimuth:Math.PI/4,elevation:Math.PI/4}:e==="topXZ"?{azimuth:0,elevation:Math.PI/2-.001}:e==="orthoYZ"?{azimuth:Math.PI/2,elevation:0}:{azimuth:0,elevation:0}}function nu(){bt.set(0,0,0);const n=Math.max(1,pt.domElement.clientWidth||An.clientWidth||window.innerWidth),e=Math.max(1,pt.domElement.clientHeight||An.clientHeight||window.innerHeight);Uo(n,e);for(const t of[Pt,rn])t.position.copy(No),t.up.set(0,1,0),t.rotation.set(0,0,0),t.zoom=1,t.lookAt(bt),t.updateProjectionMatrix();Do(),Io(!0),$n()}function Io(n=!1){if(Se.cameraProjection==="perspective")return;const e=String(Se.cameraAxoPreset||"orthoXY"),t=n?Yl:Math.max(40,Number(ft.radius)||Yl),{azimuth:i,elevation:r}=tu(e);ft.radius=t,ft.azimuth=i,ft.elevation=r,Ts(),$n()}$n();const Wt={active:!1,button:-1,lastX:0,lastY:0};Os.addEventListener("contextmenu",n=>n.preventDefault());Os.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(Wt.active=!0,Wt.button=n.button,Wt.lastX=n.clientX,Wt.lastY=n.clientY,n.preventDefault())});window.addEventListener("mouseup",()=>{Wt.active=!1,Wt.button=-1});window.addEventListener("mousemove",n=>{if(!Wt.active)return;const e=n.clientX-Wt.lastX,t=n.clientY-Wt.lastY;if(Wt.lastX=n.clientX,Wt.lastY=n.clientY,Wt.button===0)ft.azimuth-=e*.006,ft.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,ft.elevation-t*.005)),Ts();else if(Wt.button===1){const i=Math.max(1,pt.domElement.clientHeight||An.clientHeight||window.innerHeight),r=new B,s=new B,a=new B;Te.updateMatrixWorld();const o=Te.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),s.set(o[4],o[5],o[6]).normalize();let l=.01;if(Te.isOrthographicCamera)l=(Te.top-Te.bottom)/(Math.max(.01,Te.zoom)*i);else{const c=Math.max(.001,Te.position.distanceTo(bt)),u=bo.degToRad(Te.fov);l=2*Math.tan(u*.5)*c/i,l/=Math.max(.01,Te.zoom)}a.copy(r).multiplyScalar(-e*l),a.addScaledVector(s,t*l),Te.position.add(a),bt.add(a),$n()}else if(Wt.button===2){const i=-e*.004,r=-t*.004;Te.rotateOnWorldAxis(new B(0,1,0),i),Te.rotateX(r)}});Os.addEventListener("wheel",n=>{if(n.preventDefault(),Te.isPerspectiveCamera){const e=new B;Te.getWorldDirection(e);const t=Math.max(2,ft.radius*.08),i=(n.deltaY>0?1:-1)*t;Te.position.addScaledVector(e,i),$n()}else{const e=n.deltaY>0?.92:1.08;Te.zoom=Math.max(.05,Math.min(64,Te.zoom*e)),Te.updateProjectionMatrix()}},{passive:!1});function iu(n){if(!n)return;let e=!1;Number.isFinite(n.x)&&(Te.position.x=n.x,e=!0),Number.isFinite(n.y)&&(Te.position.y=n.y,e=!0),Number.isFinite(n.z)&&(Te.position.z=n.z,e=!0),e&&(Te.lookAt(bt),$n()),Number.isFinite(n.zoom)&&(Te.zoom=Math.max(.05,Math.min(64,n.zoom)),Te.updateProjectionMatrix())}function K_(){const n=Et.getVisibleBounds();if(n.empty){nu();return}const e=1.18,t=Math.max(1,Number(window.devicePixelRatio)||1),i=pt.domElement.width/t,r=pt.domElement.height/t,s=Math.max(1,i||Number(Se.canvasWidth)||pt.domElement.clientWidth||An.clientWidth||window.innerWidth),a=Math.max(1,r||Number(Se.canvasHeight)||pt.domElement.clientHeight||An.clientHeight||window.innerHeight),o=s/a,l=n.size,c=n.center,u=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(bt.copy(c),Te.isOrthographicCamera){const{azimuth:d,elevation:f}=tu(Se.cameraAxoPreset);ft.azimuth=d,ft.elevation=f,ft.radius=Math.max(u*2.2,60),Ts(),Te.updateMatrixWorld(!0);const m=Te.matrixWorld.elements,_=new B(m[0],m[1],m[2]).normalize(),g=new B(m[4],m[5],m[6]).normalize(),p=[new B(n.min.x,n.min.y,n.min.z),new B(n.min.x,n.min.y,n.max.z),new B(n.min.x,n.max.y,n.min.z),new B(n.min.x,n.max.y,n.max.z),new B(n.max.x,n.min.y,n.min.z),new B(n.max.x,n.min.y,n.max.z),new B(n.max.x,n.max.y,n.min.z),new B(n.max.x,n.max.y,n.max.z)];let h=0,S=0;const E=new B;for(const w of p)E.copy(w).sub(c),h=Math.max(h,Math.abs(E.dot(_))),S=Math.max(S,Math.abs(E.dot(g)));const v=Math.max(h,S*o,u*.35),R=Math.max(S,h/Math.max(.001,o),u*.35);Pt.left=-v*e,Pt.right=v*e,Pt.top=R*e,Pt.bottom=-R*e,Pt.zoom=1,Pt.near=-Math.max(5e3,u*6),Pt.far=Math.max(5e3,u*6),Pt.updateProjectionMatrix()}else{rn.lookAt(c),$n();const d=bo.degToRad(rn.fov),f=u*e/Math.max(.001,Math.tan(d*.5)),m=2*Math.atan(Math.tan(d*.5)*(rn.aspect||o)),_=u*e/Math.max(.001,Math.tan(m*.5));ft.radius=Math.max(_,f,40),Ts(),rn.near=Math.max(.001,ft.radius-u*3),rn.far=Math.max(rn.near+1,ft.radius+u*6),rn.updateProjectionMatrix()}$n()}function Uo(n,e){Pt.left=-n/2,Pt.right=n/2,Pt.top=e/2,Pt.bottom=-e/2,Pt.updateProjectionMatrix(),rn.aspect=n/Math.max(1,e),rn.updateProjectionMatrix(),pt.setSize(n,e,!1)}const J_=An.clientWidth||window.innerWidth,Q_=An.clientHeight||window.innerHeight;Uo(J_,Q_);Do();Io();const Et=new H_(Er,{maxParticles:Se.maxParticles??262144}),gs=Et.onRulesChanged(Se.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:gs}));window.addEventListener("seesound:particle-size-apply-all",n=>{var i,r;const e=Number((i=n==null?void 0:n.detail)==null?void 0:i.oldDefaultSize),t=Number((r=n==null?void 0:n.detail)==null?void 0:r.newDefaultSize);!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0||Et.scaleAllParticleSizes(t/e)});class ru{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.binAnalysisNode=null,this._workletReady=!1,this._workletLoadPromise=null,this._workletConfig={enabled:!1,needMagnitude:!1,needFlux:!1,needPhaseDeviation:!1,needEnvelope:!1,needAttackTime:!1,attackThreshold:5e-4,sustainFluxEps:.004,sustainMagThreshold:.08,decayThreshold:.008},this.FFT_SIZE=2048,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binEnvelope=null,this._binAttackTime=null,this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.rmsDbfs=-96,this.spectralCentroidHz=0,this.spectralFluxAU=0,this.spectralFlatnessRatio=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.ctxState="none"}_ensureWorkletLoaded(){if(!(!this.ctx||this._workletReady)&&!this._workletLoadPromise){const e=new URL("/assets/BinAnalysisWorklet-CiRiNzPi.js",import.meta.url);this._workletLoadPromise=this.ctx.audioWorklet.addModule(e).then(()=>{this.binAnalysisNode=new AudioWorkletNode(this.ctx,"bin-analysis-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{fftSize:this.FFT_SIZE,hopSize:Math.floor(this.FFT_SIZE/4)}}),this.binAnalysisNode.port.onmessage=t=>{const i=t.data||{};i.type==="binMetrics"&&(i.magnitude&&(this._binMagnitude=new Float32Array(i.magnitude)),i.flux&&(this._binFlux=new Float32Array(i.flux)),i.phaseDeviation&&(this._binPhaseDeviation=new Float32Array(i.phaseDeviation)),i.envelope&&(this._binEnvelope=new Float32Array(i.envelope)),i.attackTime&&(this._binAttackTime=new Float32Array(i.attackTime)))},this._workletReady=!0,this._postWorkletConfig()}).catch(t=>{console.warn("[AudioWorklet] Failed to load bin analysis worklet:",t)})}}_postWorkletConfig(){this.binAnalysisNode&&this.binAnalysisNode.port.postMessage({type:"config",config:this._workletConfig})}setRuleInputUsage(e=null){const t=new Set([...Array.isArray(e==null?void 0:e.spawnedParticles)?e.spawnedParticles:[],...Array.isArray(e==null?void 0:e.allParticles)?e.allParticles:[],...Array.isArray(e==null?void 0:e.background)?e.background:[],...Array.isArray(e==null?void 0:e.camera)?e.camera:[]]),i=t.has("binMagnitude")||t.has("binEnergy")||t.has("binFlux")||t.has("binEnvelope"),r=t.has("binFlux")||t.has("binEnvelope")||t.has("binAttackTime"),s=t.has("binPhaseDeviation")||t.has("binPhasedeviation"),a=t.has("binEnvelope"),o=t.has("binAttackTime");this._workletConfig.enabled=i||r||s||a||o,this._workletConfig.needMagnitude=i,this._workletConfig.needFlux=r,this._workletConfig.needPhaseDeviation=s,this._workletConfig.needEnvelope=a,this._workletConfig.needAttackTime=o,this._postWorkletConfig()}init(e){var t,i,r,s,a,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.analyser.connect(this.ctx.destination),this._ensureWorkletLoaded()),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(s=this.analyserL)==null||s.disconnect(),(a=this.analyserR)==null||a.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null;let c=!1;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const u=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));u&&(this.streamNode=u,this.streamSource=this.ctx.createMediaStreamSource(u),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const d of[this.analyserL,this.analyserR])d.fftSize=256;const u=this.source||this.streamSource;u==null||u.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1),this.binAnalysisNode&&(u==null||u.connect(this.binAnalysisNode),c=!0)}catch{}try{const u=this.source||this.streamSource;this.binAnalysisNode&&!c&&(u==null||u.connect(this.binAnalysisNode))}catch{}}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}update(){var v,R,w;if(!this.analyser)return;((v=this.ctx)==null?void 0:v.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((R=this.ctx)==null?void 0:R.state)??"none",this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((w=this.ctx)==null?void 0:w.sampleRate)??44100,i=t/2,r=C=>C/e*i;let s=0,a=0,o=0,l=0,c=0,u=0,d=0,f=0;for(let C=0;C<e;C++){const D=this.frequencyData[C],b=r(C);b<250?(s+=D,a++):b<4e3?(o+=D,l++):(c+=D,u++),D>d&&(d=D,f=C)}this.bass=a?s/a/255:0,this.mid=l?o/l/255:0,this.high=u?c/u/255:0,this.peakFreq=Math.round(r(f)),this.peakByte=d;const m=C_(this.frequencyData,t),g=P_(this.frequencyData,this._prevFrequencyDataBins)*100,p=L_(this.frequencyData),h=N_(this.frequencyData,t),S=Math.max(0,Math.min(1,this.featureSmoothingAlpha));this.spectralCentroidHz+=(m-this.spectralCentroidHz)*S,this.spectralFluxAU+=(g-this.spectralFluxAU)*S,this.spectralFlatnessRatio+=(p-this.spectralFlatnessRatio)*S,this.inharmonicity+=(h-this.inharmonicity)*S,this.spectralCentroid=D_(this.spectralCentroidHz,t),this.spectralFlux=Math.max(0,Math.min(1,this.spectralFluxAU/100)),this.spectralFlatness=Math.max(0,Math.min(1,this.spectralFlatnessRatio)),this._prevFrequencyDataBins.set(this.frequencyData),this._prevFrequencyData.set(this.frequencyData);let E=0;for(const C of this.timeDomainData)E+=((C-128)/128)**2;if(this.amplitude=Math.sqrt(E/this.timeDomainData.length),this.rmsDbfs=20*Math.log10(Math.max(1e-6,this.amplitude)),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let C=0,D=0;for(let b=0;b<this._freqL.length;b++)C+=this._freqL[b],D+=this._freqR[b];this.pan=(D-C)/(C+D+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}getPrevFrequencyData(){return this._prevFrequencyDataBins}getBinMagnitude(){return this._binMagnitude}getBinFlux(){return this._binFlux}getBinPhaseDeviation(){return this._binPhaseDeviation}getBinEnvelope(){return this._binEnvelope}getBinAttackTime(){return this._binAttackTime}}const we=new ru;we.setRuleInputUsage(gs==null?void 0:gs.requiredInputsByTarget);const jl=document.getElementById("status-dot"),Zl=document.getElementById("status-text");function xa(n,e){jl&&(jl.className=n),Zl&&(Zl.textContent=e)}function su(){const n=new WebSocket(`ws://${location.hostname}:8000/ws`);n.onopen=()=>xa("open","Backend connected"),n.onclose=()=>{xa("closed","Backend offline"),setTimeout(su,3e3)},n.onerror=()=>xa("closed","WS error"),n.onmessage=()=>{},Is(e=>{n.readyState===WebSocket.OPEN&&n.send(JSON.stringify({type:"params_update",payload:e}))})}su();const wn=document.createElement("div");wn.id="camera-hud";wn.style.position="fixed";wn.style.left="8px";wn.style.bottom="8px";wn.style.zIndex="220";wn.style.display="flex";wn.style.alignItems="center";wn.style.gap="6px";const on=document.createElement("button");on.type="button";on.title="Reset camera";on.textContent="↺";on.style.width="22px";on.style.height="22px";on.style.border="1px solid var(--color-border, #444)";on.style.borderRadius="6px";on.style.background="rgba(0,0,0,0.55)";on.style.color="var(--color-text-muted, #bbb)";on.style.cursor="pointer";on.addEventListener("click",nu);const ln=document.createElement("button");ln.type="button";ln.title="Fit to visible particles";ln.textContent="Fit";ln.style.height="22px";ln.style.padding="0 8px";ln.style.border="1px solid var(--color-border, #444)";ln.style.borderRadius="6px";ln.style.background="rgba(0,0,0,0.55)";ln.style.color="var(--color-text-muted, #bbb)";ln.style.cursor="pointer";ln.addEventListener("click",K_);const cn=document.createElement("button");cn.type="button";cn.title="Clear canvas";cn.textContent="Clean";cn.style.height="22px";cn.style.padding="0 8px";cn.style.border="1px solid var(--color-border, #444)";cn.style.borderRadius="6px";cn.style.background="rgba(0,0,0,0.55)";cn.style.color="var(--color-text-muted, #bbb)";cn.style.cursor="pointer";cn.addEventListener("click",()=>Et.clear());const yn=document.createElement("div");yn.id="camera-readout";yn.style.fontFamily="var(--font-mono, monospace)";yn.style.fontSize="10px";yn.style.color="var(--color-text-muted, #bbb)";yn.style.background="rgba(0,0,0,0.35)";yn.style.padding="4px 6px";yn.style.borderRadius="4px";yn.style.pointerEvents="none";yn.textContent="cam p(0.00,0.00,10.00) r(0.00,0.00,0.00) pts 0 fft 0 amp 0.000 sc 0.000 sf 0.000 sfl 0.000 inh 0.000 canv 0 × 0";wn.append(on,ln,cn,yn);document.body.appendChild(wn);let Kl=0,Xi=0,As="";function Jl(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function Ql(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function ev(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function tv(){var e,t;if(As)return Ql(As);const n=String(((e=we==null?void 0:we.audioEl)==null?void 0:e.currentSrc)||((t=we==null?void 0:we.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return Ql(r)}catch{}return"audio"}async function au(n){const e=n==null?void 0:n.src;if(!e)return null;const t=await fetch(e);return t.ok?t.blob():null}function nv(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}.json`}async function iv(){var o;const n=Jl(tv(),"audio"),e=Jl(ev(),"preset"),t=`${n} - ${e}.png`,i=Math.max(1,Math.floor(Number(Se.canvasWidth)||pt.domElement.width/Math.max(1,window.devicePixelRatio))),r=Math.max(1,Math.floor(Number(Se.canvasHeight)||pt.domElement.height/Math.max(1,window.devicePixelRatio))),s=document.createElement("canvas"),a=new Oc({canvas:s,antialias:!0,preserveDrawingBuffer:!0});try{const l=a.capabilities.maxTextureSize||8192,c=Math.min(i,l),u=Math.min(r,l),d=Math.max(1,Number(((o=pt.getPixelRatio)==null?void 0:o.call(pt))||window.devicePixelRatio||1)),f=Math.max(1,Math.floor(c/d)),m=Math.max(1,Math.floor(u/d));a.setPixelRatio(d),a.setSize(f,m,!1);let _=Te.clone();Te===Pt||_.isOrthographicCamera?(_=Te.clone(),_.updateProjectionMatrix()):_.isPerspectiveCamera&&(_.aspect=c/Math.max(1,u),_.updateProjectionMatrix());const g=[];Er.traverse(S=>{var E;(E=S==null?void 0:S.userData)!=null&&E.excludeFromPng&&S.visible&&(g.push(S),S.visible=!1)}),a.setClearColor(Et.getBackgroundColor(),1),Et.setViewportHeight(a.domElement.height),a.render(Er,_);for(const S of g)S.visible=!0;const p=await new Promise(S=>s.toBlob(S,"image/png"));if(!p)throw new Error("PNG export failed (empty blob).");const h=document.createElement("a");h.href=URL.createObjectURL(p),h.download=t,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(h.href),(c!==i||u!==r)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:i,h:r},exported:{w:c,h:u},maxTextureSize:l})}finally{Et.setViewportHeight(pt.domElement.height),a.dispose()}}function ec(n,e){n.dispatchEvent(new CustomEvent("player:paintall-state",{detail:{running:e},bubbles:!1}))}async function rv(n,e){var o,l,c,u,d,f,m,_,g;if(!((e==null?void 0:e.duration)>0))return;const t=++Xi,i=await au(e),r=i?URL.createObjectURL(i):e.currentSrc||e.src;if(!r)return;const s=new Audio;s.crossOrigin="anonymous",s.src=r,s.preload="auto",s.currentTime=0,s.muted=!0,s.volume=0,typeof s.preservesPitch=="boolean"&&(s.preservesPitch=!1),s.playbackRate=16,s.style.display="none",document.body.appendChild(s);const a=new ru;a.setRuleInputUsage((o=Et.getRuleCompileState())==null?void 0:o.requiredInputsByTarget),ec(n,!0);try{Et.clear(),await new Promise((S,E)=>{const v=()=>{w(),S()},R=()=>{w(),E(new Error("Paint-all audio metadata failed to load."))},w=()=>{s.removeEventListener("loadedmetadata",v),s.removeEventListener("canplay",v),s.removeEventListener("error",R)};s.addEventListener("loadedmetadata",v,{once:!0}),s.addEventListener("canplay",v,{once:!0}),s.addEventListener("error",R,{once:!0}),s.load()}),a.init(s),((l=a.ctx)==null?void 0:l.state)==="suspended"&&await a.ctx.resume(),await s.play();let p=-1,h=0;for(;t===Xi&&!s.ended;){await new Promise(C=>requestAnimationFrame(C)),a.update();const S=pt.domElement.width/window.devicePixelRatio,E=pt.domElement.height/window.devicePixelRatio,v=ho(),R={...Se,persistMode:1,cameraState:{x:Te.position.x,y:Te.position.y,z:Te.position.z,zoom:Te.zoom},cameraCanvasWidthUnits:v.w,cameraCanvasHeightUnits:v.h,cameraCanvasBoundaryLeft:v.left,cameraCanvasBoundaryRight:v.right,cameraCanvasBoundaryTop:v.top,cameraCanvasBoundaryBottom:v.bottom};Et.update(a,R,S,E),iu(Et.getCameraOutput());const w=Number(s.currentTime)||0;if(w>p+1e-4?(p=w,h=0):h++,s.paused&&!s.ended)try{await s.play()}catch{break}if(h>120&&w>=Math.max(0,(s.duration||0)-.25)){s.currentTime=s.duration||w;break}}}finally{s.pause(),s.src="",s.remove(),i&&URL.revokeObjectURL(r);try{(c=a.source)==null||c.disconnect()}catch{}try{(u=a.streamSource)==null||u.disconnect()}catch{}try{(d=a.splitter)==null||d.disconnect()}catch{}try{(f=a.analyserL)==null||f.disconnect()}catch{}try{(m=a.analyserR)==null||m.disconnect()}catch{}try{(_=a.analyser)==null||_.disconnect()}catch{}try{await((g=a.ctx)==null?void 0:g.close())}catch{}ec(n,!1)}}function ho(){let n=0,e=0;if(Te.isOrthographicCamera)n=Math.abs((Te.right-Te.left)/Math.max(.01,Te.zoom)),e=Math.abs((Te.top-Te.bottom)/Math.max(.01,Te.zoom));else{const r=Math.max(.001,Te.position.distanceTo(bt)),s=bo.degToRad(Te.fov);e=2*Math.tan(s*.5)*r/Math.max(.01,Te.zoom),n=e*Te.aspect}const t=n*.5,i=e*.5;return{w:n,h:e,left:bt.x-t,right:bt.x+t,top:bt.y+i,bottom:bt.y-i}}function ou(){var t,i,r,s,a,o,l,c,u,d,f,m,_,g,p;requestAnimationFrame(ou),Kl++,we.update();const n=!!(we.audioEl&&!we.audioEl.paused&&!we.audioEl.ended);if(n&&!we.analyser&&we.audioEl&&we.init(we.audioEl),n){const h=pt.domElement.width/window.devicePixelRatio,S=pt.domElement.height/window.devicePixelRatio,E=ho(),v={...Se,cameraState:{x:Te.position.x,y:Te.position.y,z:Te.position.z,zoom:Te.zoom},cameraCanvasWidthUnits:E.w,cameraCanvasHeightUnits:E.h,cameraCanvasBoundaryLeft:E.left,cameraCanvasBoundaryRight:E.right,cameraCanvasBoundaryTop:E.top,cameraCanvasBoundaryBottom:E.bottom};Et.update(we,v,h,S),iu(Et.getCameraOutput());const R=((i=(t=we.getBinMagnitude)==null?void 0:t.call(we))==null?void 0:i[0])??0,w=we.peakFreq??0,C=(r=we.ctx)!=null&&r.sampleRate?we.ctx.sampleRate*.5:22050;window.dispatchEvent(new CustomEvent("seesound:rule-probe",{detail:{inputs:{amplitude:we.amplitude??0,globalRmsEnergy:we.rmsDbfs??-96,binEnergy:R,frequencyHz:w,normFreq:Math.max(0,Math.min(1,w/Math.max(1e-6,C))),bass:we.bass??0,mid:we.mid??0,high:we.high??0,peakFreq:w,pan:we.pan??0,spectralCentroid:we.spectralCentroidHz??0,spectralFlux:we.spectralFluxAU??0,spectralFlatness:we.spectralFlatnessRatio??0,inharmonicity:we.inharmonicity??0,binMagnitude:R,binFlux:((a=(s=we.getBinFlux)==null?void 0:s.call(we))==null?void 0:a[0])??0,binPhaseDeviation:((l=(o=we.getBinPhaseDeviation)==null?void 0:o.call(we))==null?void 0:l[0])??0,binPhasedeviation:((u=(c=we.getBinPhaseDeviation)==null?void 0:c.call(we))==null?void 0:u[0])??0,binAttackTime:((f=(d=we.getBinAttackTime)==null?void 0:d.call(we))==null?void 0:f[0])??0,binEnvelope:((_=(m=we.getBinEnvelope)==null?void 0:m.call(we))==null?void 0:_[0])??0,time:((g=we.audioEl)==null?void 0:g.currentTime)??0,deltaTime:1/60,canvasWidthPx:h,canvasHeightPx:S,canvasWidthUnits:E.w,canvasHeightUnits:E.h,audioLengthSec:((p=we.audioEl)==null?void 0:p.duration)??0}}}))}const e=Et.getBackgroundColor();if(pt.setClearColor(e,1),Et.setViewportHeight(pt.domElement.height),pt.render(Er,Te),Kl%6===0){const h=(Te.rotation.x*180/Math.PI).toFixed(2),S=(Te.rotation.y*180/Math.PI).toFixed(2),E=(Te.rotation.z*180/Math.PI).toFixed(2),v=Te.position.x.toFixed(2),R=Te.position.y.toFixed(2),w=Te.position.z.toFixed(2),C=ho(),D=C.w,b=C.h;yn.textContent=`cam p(${v},${R},${w}) r(${h},${S},${E}) pts ${Et.getVisibleCount()} fft ${we.peakByte} amp ${we.amplitude.toFixed(3)} sc ${we.spectralCentroid.toFixed(3)} sf ${we.spectralFlux.toFixed(3)} sfl ${we.spectralFlatness.toFixed(3)} inh ${we.inharmonicity.toFixed(3)} canv ${D.toFixed(2)} × ${b.toFixed(2)}`}}ou();{const n=document.getElementById("audio-player"),{audioEl:e}=j_(n);we.audioEl=e;let t=null;e.addEventListener("play",async()=>{var s;we.init(e),((s=we.ctx)==null?void 0:s.state)==="suspended"&&await we.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var s;Xi++,we.init(e),((s=we.ctx)==null?void 0:s.state)==="suspended"&&await we.ctx.resume()}),n.addEventListener("player:play",()=>{Xi++}),n.addEventListener("player:pause",()=>{Xi++}),n.addEventListener("player:stop",()=>{Xi++}),n.addEventListener("player:savepng",async()=>{await iv()}),n.addEventListener("player:paintall",async()=>{await rv(n,e)}),n.addEventListener("player:playbackrate",s=>{var o;const a=Number((o=s==null?void 0:s.detail)==null?void 0:o.rate);Number.isFinite(a)&&(e.playbackRate=Math.max(.1,Math.min(16,a)))}),n.addEventListener("player:fileloaded",s=>{var o;const a=(o=s==null?void 0:s.detail)==null?void 0:o.file;t=a instanceof File?a:null,As=(t==null?void 0:t.name)||""});const i=async()=>{try{const s=wo(),a=t||await au(e),o=a?await e_(a):"",l=n_({params:s,presetName:"",audioDataUrl:o,audioFileName:(t==null?void 0:t.name)||"project-audio.wav"});r_(l,nv())}catch(s){console.warn("[Project] save failed:",s)}},r=async s=>{var a,o,l;try{s.params&&typeof s.params=="object"&&Us(s.params);const c=(a=s==null?void 0:s.audio)==null?void 0:a.dataUrl;if(typeof c=="string"&&c.startsWith("data:")){const u=((o=s==null?void 0:s.audio)==null?void 0:o.fileName)||"project-audio.wav",d=t_(c,u);t=d,As=(d==null?void 0:d.name)||"",(l=e.src)!=null&&l.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(d),e.load(),we.audioEl=e}}catch(c){console.warn("[Project] load failed:",c)}};n.addEventListener("player:saveproject",i),n.addEventListener("player:loadproject",async s=>{var a;await r(((a=s==null?void 0:s.detail)==null?void 0:a.payload)||{})}),window.addEventListener("seesound:project-save-request",i),window.addEventListener("seesound:project-load-request",async s=>{var a;await r(((a=s==null?void 0:s.detail)==null?void 0:a.payload)||{})})}let ni=null,fo=!1;ni=Z_({wrapper:Sr,column:An,onResize(n,e){if(Uo(n,e),Fo(n,e),!fo){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(Se.canvasWidth)!==t||Number(Se.canvasHeight)!==i)&&Us({canvasWidth:t,canvasHeight:i})}}});function Fo(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(Se.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function lu(){const e=Math.max(5,Math.min(400,Math.floor(Number(Se.canvasScale)||100)))/100;Sr.style.transformOrigin="center center",Sr.style.transform=`scale(${e})`}function cu(){var i;const n=((i=ni==null?void 0:ni.getSize)==null?void 0:i.call(ni))||{},e=Math.max(160,Math.floor(n.w||Sr.clientWidth||An.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||Sr.clientHeight||An.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function uu(){if(!ni)return;const n=cu(),e=Math.max(160,Math.floor(Number(Se.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(Se.canvasHeight)||n.h));if(e===n.w&&t===n.h){Fo(n.w,n.h);return}fo=!0,ni.setSize(e,t),fo=!1}uu();lu();{const n=cu();(Number(Se.canvasWidth)!==n.w||Number(Se.canvasHeight)!==n.h)&&Us({canvasWidth:n.w,canvasHeight:n.h}),Fo(n.w,n.h)}Is((n,e)=>{if(e==="cameraProjection"&&Do(),(e==="cameraProjection"||e==="cameraAxoPreset")&&Io(),(e==="canvasWidth"||e==="canvasHeight")&&uu(),e==="canvasScale"&&lu(),e==="maxParticles"){const t=Math.max(4096,Math.floor(Se.maxParticles||4096));Se.maxParticles!==t&&(Se.maxParticles=t),Et.setMaxParticles(t)}if(e==="ruleBlocks"){const t=Et.onRulesChanged(Se.ruleBlocks??[]);we.setRuleInputUsage(t==null?void 0:t.requiredInputsByTarget),window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});M_(document.getElementById("control-panel"));const tc=Array.isArray(Se.ruleBlocks)?Se.ruleBlocks.length:0,Fn=Et.getRuleCompileState(),nc=(Fn==null?void 0:Fn.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${bs} compile=${nc} rules=${tc}`,{schemaVersion:bs,compileStatus:nc,compileTimeMs:(Fn==null?void 0:Fn.compileTimeMs)??0,compileError:(Fn==null?void 0:Fn.compileError)??null,ruleCount:tc,debug:qg});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
