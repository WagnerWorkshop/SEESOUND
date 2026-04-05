(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="171",rh=0,Gl=1,sh=2,Ru=1,ah=2,ii=3,Ci=0,mn=1,ai=2,Wn=0,Ei=1,Si=2,Wl=3,Xl=4,oo=5,oi=100,oh=101,lh=102,ch=103,uh=104,dh=200,hh=201,fh=202,ph=203,Qr=204,es=205,mh=206,gh=207,vh=208,_h=209,xh=210,bh=211,Sh=212,Mh=213,yh=214,lo=0,co=1,uo=2,xr=3,ho=4,fo=5,po=6,mo=7,Pu=0,Eh=1,wh=2,wi=0,Ch=1,Th=2,Ah=3,Rh=4,Ph=5,Nh=6,Lh=7,Nu=300,br=301,Sr=302,go=303,vo=304,ma=306,_o=1e3,Bi=1001,xo=1002,Mn=1003,Dh=1004,ms=1005,Hn=1006,Ra=1007,ki=1008,di=1009,Lu=1010,Du=1011,ts=1012,sl=1013,Gi=1014,li=1015,Xn=1016,al=1017,ol=1018,Mr=1020,Fu=35902,Iu=1021,Uu=1022,Un=1023,Ou=1024,Bu=1025,gr=1026,yr=1027,ku=1028,ll=1029,zu=1030,cl=1031,ul=1033,js=33776,Ys=33777,$s=33778,Zs=33779,bo=35840,So=35841,Mo=35842,yo=35843,Eo=36196,wo=37492,Co=37496,To=37808,Ao=37809,Ro=37810,Po=37811,No=37812,Lo=37813,Do=37814,Fo=37815,Io=37816,Uo=37817,Oo=37818,Bo=37819,ko=37820,zo=37821,Ks=36492,Vo=36494,Ho=36495,Vu=36283,Go=36284,Wo=36285,Xo=36286,Fh=3200,Hu=3201,Ih=0,Uh=1,Mi="",Sn="srgb",Er="srgb-linear",ta="linear",Et="srgb",qi=7680,ql=519,Oh=512,Bh=513,kh=514,Gu=515,zh=516,Vh=517,Hh=518,Gh=519,jl=35044,Wh=35048,Yl="300 es",ci=2e3,na=2001;class Nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const $r=Math.PI/180,ns=180/Math.PI;function Lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function dl(n,e){return(n%e+e)%e}function Xh(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function qh(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function jh(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function Yh(n,e=1){return e-Math.abs(dl(n,e*2)-e)}function $h(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Zh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kh(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Jh(n,e){return n+Math.random()*(e-n)}function Qh(n){return n*(.5-Math.random())}function ef(n){n!==void 0&&($l=n);let e=$l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tf(n){return n*$r}function nf(n){return n*ns}function rf(n){return(n&n-1)===0&&n!==0}function sf(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function af(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function of(n,e,t,i,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),h=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*h,o*c);break;case"YZY":n.set(l*h,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*h,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*f,o*c);break;case"YXY":n.set(l*f,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const hl={DEG2RAD:$r,RAD2DEG:ns,generateUUID:Lr,clamp:mt,euclideanModulo:dl,mapLinear:Xh,inverseLerp:qh,lerp:Zr,damp:jh,pingpong:Yh,smoothstep:$h,smootherstep:Zh,randInt:Kh,randFloat:Jh,randFloatSpread:Qh,seededRandom:ef,degToRad:tf,radToDeg:nf,isPowerOfTwo:rf,ceilPowerOfTwo:sf,floorPowerOfTwo:af,setQuaternionFromProperEuler:of,normalize:on,denormalize:cr};class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class tt{constructor(e,t,i,r,s,a,o,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],h=i[2],f=i[5],g=i[8],_=r[0],m=r[3],p=r[6],S=r[1],v=r[4],b=r[7],R=r[2],E=r[5],T=r[8];return s[0]=a*_+o*S+l*R,s[3]=a*m+o*v+l*E,s[6]=a*p+o*b+l*T,s[1]=c*_+u*S+d*R,s[4]=c*m+u*v+d*E,s[7]=c*p+u*b+d*T,s[2]=h*_+f*S+g*R,s[5]=h*m+f*v+g*E,s[8]=h*p+f*b+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,f=c*s-a*l,g=t*d+i*h+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(a*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Pa.makeScale(e,t)),this}rotate(e){return this.premultiply(Pa.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pa=new tt;function Wu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lf(){const n=ia("canvas");return n.style.display="block",n}const Zl={};function ur(n){n in Zl||(Zl[n]=!0,console.warn(n))}function cf(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function uf(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function df(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kl=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hf(){const n={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Et&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Et&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?ta:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Er]:{primaries:e,whitePoint:i,transfer:ta,toXYZ:Kl,fromXYZ:Jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Sn},outputColorSpaceConfig:{drawingBufferColorSpace:Sn}},[Sn]:{primaries:e,whitePoint:i,transfer:Et,toXYZ:Kl,fromXYZ:Jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Sn}}}),n}const bt=hf();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let ji;class ff{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ji===void 0&&(ji=ia("canvas")),ji.width=e.width,ji.height=e.height;const i=ji.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ji}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ui(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pf=0;class Xu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Na(r[a].image)):s.push(Na(r[a]))}else s=Na(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ff.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mf=0;class gn extends Nr{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,i=Bi,r=Bi,s=Hn,a=ki,o=Un,l=di,c=gn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Lr(),this.name="",this.source=new Xu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _o:e.x=e.x-Math.floor(e.x);break;case Bi:e.x=e.x<0?0:1;break;case xo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _o:e.y=e.y-Math.floor(e.y);break;case Bi:e.y=e.y<0?0:1;break;case xo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Nu;gn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(f+1)/2,R=(p+1)/2,E=(u+h)/4,T=(d+_)/4,A=(g+m)/4;return v>b&&v>R?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=T/i):b>R?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=E/r,s=A/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=A/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-_)/S,this.z=(h-u)/S,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gf extends Nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends gf{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class qu extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vf extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=Bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=h,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==f||u!==g){let m=1-o;const p=l*h+c*f+u*g+d*_,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){const R=Math.sqrt(v),E=Math.atan2(R,p*S);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}const b=o*S;if(l=l*m+h*b,c=c*m+f*b,u=u*m+g*b,d=d*m+_*b,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*f-c*h,e[t+1]=l*g+u*h+c*d-o*f,e[t+2]=c*g+u*f+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),h=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"YXZ":this._x=h*u*d+c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"ZXY":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d-h*f*g;break;case"ZYX":this._x=h*u*d-c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d+h*f*g;break;case"YZX":this._x=h*u*d+c*f*g,this._y=c*f*d+h*u*g,this._z=c*u*g-h*f*d,this._w=c*u*d-h*f*g;break;case"XZY":this._x=h*u*d-c*f*g,this._y=c*f*d-h*u*g,this._z=c*u*g+h*f*d,this._w=c*u*d+h*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=i+o+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return La.copy(this).projectOnVector(e),this.sub(La)}reflect(e){return this.sub(La.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new H,Ql=new cs;class us{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gs.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gs.copy(i.boundingBox)),gs.applyMatrix4(e.matrixWorld),this.union(gs)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Br),vs.subVectors(this.max,Br),Yi.subVectors(e.a,Br),$i.subVectors(e.b,Br),Zi.subVectors(e.c,Br),fi.subVectors($i,Yi),pi.subVectors(Zi,$i),Ai.subVectors(Yi,Zi);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ai.z,Ai.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ai.z,0,-Ai.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ai.y,Ai.x,0];return!Da(t,Yi,$i,Zi,vs)||(t=[1,0,0,0,1,0,0,0,1],!Da(t,Yi,$i,Zi,vs))?!1:(_s.crossVectors(fi,pi),t=[_s.x,_s.y,_s.z],Da(t,Yi,$i,Zi,vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new H,new H,new H,new H,new H,new H,new H,new H],Nn=new H,gs=new us,Yi=new H,$i=new H,Zi=new H,fi=new H,pi=new H,Ai=new H,Br=new H,vs=new H,_s=new H,Ri=new H;function Da(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Ri.fromArray(n,s);const o=r.x*Math.abs(Ri.x)+r.y*Math.abs(Ri.y)+r.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),u=i.dot(Ri);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const _f=new us,kr=new H,Fa=new H;class ds{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_f.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;kr.subVectors(e,this.center);const t=kr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(kr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(kr.copy(e.center).add(Fa)),this.expandByPoint(kr.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new H,Ia=new H,xs=new H,mi=new H,Ua=new H,bs=new H,Oa=new H;class fl{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ia.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ia);const s=e.distanceTo(t)*.5,a=-this.direction.dot(xs),o=mi.dot(this.direction),l=-mi.dot(xs),c=mi.lengthSq(),u=Math.abs(1-a*a);let d,h,f,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ia).addScaledVector(xs,h),f}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,s){Ua.subVectors(t,e),bs.subVectors(i,e),Oa.crossVectors(Ua,bs);let a=this.direction.dot(Oa),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(bs.crossVectors(mi,bs));if(l<0)return null;const c=o*this.direction.dot(Ua.cross(mi));if(c<0||l+c>a)return null;const u=-o*mi.dot(Oa);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,i,r,s,a,o,l,c,u,d,h,f,g,_,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,u,d,h,f,g,_,m)}set(e,t,i,r,s,a,o,l,c,u,d,h,f,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),s=1/Ki.setFromMatrixColumn(e,1).length(),a=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=f*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,f=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,f=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-f,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+f,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xf,e,bf)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),gi.crossVectors(i,xn),gi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),gi.crossVectors(i,xn)),gi.normalize(),Ss.crossVectors(xn,gi),r[0]=gi.x,r[4]=Ss.x,r[8]=xn.x,r[1]=gi.y,r[5]=Ss.y,r[9]=xn.y,r[2]=gi.z,r[6]=Ss.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],h=i[9],f=i[13],g=i[2],_=i[6],m=i[10],p=i[14],S=i[3],v=i[7],b=i[11],R=i[15],E=r[0],T=r[4],A=r[8],C=r[12],x=r[1],L=r[5],W=r[9],j=r[13],Q=r[2],Z=r[6],K=r[10],ce=r[14],G=r[3],q=r[7],U=r[11],X=r[15];return s[0]=a*E+o*x+l*Q+c*G,s[4]=a*T+o*L+l*Z+c*q,s[8]=a*A+o*W+l*K+c*U,s[12]=a*C+o*j+l*ce+c*X,s[1]=u*E+d*x+h*Q+f*G,s[5]=u*T+d*L+h*Z+f*q,s[9]=u*A+d*W+h*K+f*U,s[13]=u*C+d*j+h*ce+f*X,s[2]=g*E+_*x+m*Q+p*G,s[6]=g*T+_*L+m*Z+p*q,s[10]=g*A+_*W+m*K+p*U,s[14]=g*C+_*j+m*ce+p*X,s[3]=S*E+v*x+b*Q+R*G,s[7]=S*T+v*L+b*Z+R*q,s[11]=S*A+v*W+b*K+R*U,s[15]=S*C+v*j+b*ce+R*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],f=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*o*h+i*c*h+r*o*f-i*l*f)+_*(+t*l*f-t*c*h+s*a*h-r*a*f+r*c*u-s*l*u)+m*(+t*c*d-t*o*f-s*a*d+i*a*f+s*o*u-i*c*u)+p*(-r*o*u-t*l*d+t*o*h+r*a*d-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],f=e[11],g=e[12],_=e[13],m=e[14],p=e[15],S=d*m*c-_*h*c+_*l*f-o*m*f-d*l*p+o*h*p,v=g*h*c-u*m*c-g*l*f+a*m*f+u*l*p-a*h*p,b=u*_*c-g*d*c+g*o*f-a*_*f-u*o*p+a*d*p,R=g*d*l-u*_*l-g*o*h+a*_*h+u*o*m-a*d*m,E=t*S+i*v+r*b+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=S*T,e[1]=(_*h*s-d*m*s-_*r*f+i*m*f+d*r*p-i*h*p)*T,e[2]=(o*m*s-_*l*s+_*r*c-i*m*c-o*r*p+i*l*p)*T,e[3]=(d*l*s-o*h*s-d*r*c+i*h*c+o*r*f-i*l*f)*T,e[4]=v*T,e[5]=(u*m*s-g*h*s+g*r*f-t*m*f-u*r*p+t*h*p)*T,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*T,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*f+t*l*f)*T,e[8]=b*T,e[9]=(g*d*s-u*_*s-g*i*f+t*_*f+u*i*p-t*d*p)*T,e[10]=(a*_*s-g*o*s+g*i*c-t*_*c-a*i*p+t*o*p)*T,e[11]=(u*o*s-a*d*s-u*i*c+t*d*c+a*i*f-t*o*f)*T,e[12]=R*T,e[13]=(u*_*r-g*d*r+g*i*h-t*_*h-u*i*m+t*d*m)*T,e[14]=(g*o*r-a*_*r-g*i*l+t*_*l+a*i*m-t*o*m)*T,e[15]=(a*d*r-u*o*r+u*i*l-t*d*l-a*i*h+t*o*h)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,f=s*u,g=s*d,_=a*u,m=a*d,p=o*d,S=l*c,v=l*u,b=l*d,R=i.x,E=i.y,T=i.z;return r[0]=(1-(_+p))*R,r[1]=(f+b)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(f-b)*E,r[5]=(1-(h+p))*E,r[6]=(m+S)*E,r[7]=0,r[8]=(g+v)*T,r[9]=(m-S)*T,r[10]=(1-(h+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ki.set(r[0],r[1],r[2]).length();const a=Ki.set(r[4],r[5],r[6]).length(),o=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/s,u=1/a,d=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ci){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let f,g;if(o===ci)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===na)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ci){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(a-s),h=(t+e)*c,f=(i+r)*u;let g,_;if(o===ci)g=(a+s)*d,_=-2*d;else if(o===na)g=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new H,Ln=new Dt,xf=new H(0,0,0),bf=new H(1,1,1),gi=new H,Ss=new H,xn=new H,ec=new Dt,tc=new cs;class hi{constructor(e=0,t=0,i=0,r=hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-mt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hi.DEFAULT_ORDER="XYZ";class ju{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sf=0;const nc=new H,Ji=new cs,Qn=new Dt,Ms=new H,zr=new H,Mf=new H,yf=new cs,ic=new H(1,0,0),rc=new H(0,1,0),sc=new H(0,0,1),ac={type:"added"},Ef={type:"removed"},Qi={type:"childadded",child:null},Ba={type:"childremoved",child:null};class un extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new H,t=new hi,i=new cs,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new tt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(sc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ms.copy(e):Ms.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(zr,Ms,this.up):Qn.lookAt(Ms,zr,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ac),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ef),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ac),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,Mf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new H(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Dn=new H,ei=new H,ka=new H,ti=new H,er=new H,tr=new H,oc=new H,za=new H,Va=new H,Ha=new H,Ga=new It,Wa=new It,Xa=new It;class In{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Dn.subVectors(e,t),r.cross(Dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Dn.subVectors(r,t),ei.subVectors(i,t),ka.subVectors(e,t);const a=Dn.dot(Dn),o=Dn.dot(ei),l=Dn.dot(ka),c=ei.dot(ei),u=ei.dot(ka),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(a,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ga.setScalar(0),Wa.setScalar(0),Xa.setScalar(0),Ga.fromBufferAttribute(e,t),Wa.fromBufferAttribute(e,i),Xa.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ga,s.x),a.addScaledVector(Wa,s.y),a.addScaledVector(Xa,s.z),a}static isFrontFacing(e,t,i,r){return Dn.subVectors(i,t),ei.subVectors(e,t),Dn.cross(ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Dn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Dn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;er.subVectors(r,i),tr.subVectors(s,i),za.subVectors(e,i);const l=er.dot(za),c=tr.dot(za);if(l<=0&&c<=0)return t.copy(i);Va.subVectors(e,r);const u=er.dot(Va),d=tr.dot(Va);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(er,a);Ha.subVectors(e,s);const f=er.dot(Ha),g=tr.dot(Ha);if(g>=0&&f<=g)return t.copy(s);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(tr,o);const m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return oc.subVectors(s,r),o=(d-u)/(d-u+(f-g)),t.copy(r).addScaledVector(oc,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(i).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},ys={h:0,s:0,l:0};function qa(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=bt.workingColorSpace){return this.r=e,this.g=t,this.b=i,bt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=bt.workingColorSpace){if(e=dl(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=qa(a,s,e+1/3),this.g=qa(a,s,e),this.b=qa(a,s,e-1/3)}return bt.toWorkingColorSpace(this,r),this}setStyle(e,t=Sn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Sn){const i=Yu[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Sn){return bt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(mt(Qt.r*255,0,255))*65536+Math.round(mt(Qt.g*255,0,255))*256+Math.round(mt(Qt.b*255,0,255))}getHexString(e=Sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,s=Qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Sn){bt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==Sn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(ys);const i=Zr(vi.h,ys.h,t),r=Zr(vi.s,ys.s,t),s=Zr(vi.l,ys.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new rt;rt.NAMES=Yu;let wf=0;class Dr extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wf++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=Ei,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=es,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ei&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qr&&(i.blendSrc=this.blendSrc),this.blendDst!==es&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pl extends Dr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hi,this.combine=Pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new H,Es=new at;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=jl,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix3(e),this.setXY(t,Es.x,Es.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==jl&&(e.usage=this.usage),e}}class $u extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zu extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dn extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Cf=0;const wn=new Dt,ja=new un,nr=new H,bn=new us,Vr=new us,Yt=new H;class vn extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cf++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Zu:$u)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,t,i){return wn.makeTranslation(e,t,i),this.applyMatrix4(wn),this}scale(e,t,i){return wn.makeScale(e,t,i),this.applyMatrix4(wn),this}lookAt(e){return ja.lookAt(e),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(bn.min,Vr.min),bn.expandByPoint(Yt),Yt.addVectors(bn.max,Vr.max),bn.expandByPoint(Yt)):(bn.expandByPoint(Vr.min),bn.expandByPoint(Vr.max))}bn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(e,c),Yt.add(nr)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new H,l[A]=new H;const c=new H,u=new H,d=new H,h=new at,f=new at,g=new at,_=new H,m=new H;function p(A,C,x){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,x),h.fromBufferAttribute(s,A),f.fromBufferAttribute(s,C),g.fromBufferAttribute(s,x),u.sub(c),d.sub(c),f.sub(h),g.sub(h);const L=1/(f.x*g.y-g.x*f.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(L),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(L),o[A].add(_),o[C].add(_),o[x].add(_),l[A].add(m),l[C].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let A=0,C=S.length;A<C;++A){const x=S[A],L=x.start,W=x.count;for(let j=L,Q=L+W;j<Q;j+=3)p(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const v=new H,b=new H,R=new H,E=new H;function T(A){R.fromBufferAttribute(r,A),E.copy(R);const C=o[A];v.copy(C),v.sub(R.multiplyScalar(R.dot(C))).normalize(),b.crossVectors(E,C);const L=b.dot(l[A])<0?-1:1;a.setXYZW(A,v.x,v.y,v.z,L)}for(let A=0,C=S.length;A<C;++A){const x=S[A],L=x.start,W=x.count;for(let j=L,Q=L+W;j<Q;j+=3)T(e.getX(j+0)),T(e.getX(j+1)),T(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,f=i.count;h<f;h++)i.setXYZ(h,0,0,0);const r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let h=0,f=e.count;h<f;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,f=t.count;h<f;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let f=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let p=0;p<u;p++)h[g++]=c[f++]}return new Kt(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=e(h,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new Dt,Pi=new fl,ws=new ds,cc=new H,Cs=new H,Ts=new H,As=new H,Ya=new H,Rs=new H,uc=new H,Ps=new H;class Gn extends un{constructor(e=new vn,t=new pl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Rs.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Ya.fromBufferAttribute(d,e),a?Rs.addScaledVector(Ya,u):Rs.addScaledVector(Ya.sub(t),u))}t.add(Rs)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ws.copy(i.boundingSphere),ws.applyMatrix4(s),Pi.copy(e.ray).recast(e.near),!(ws.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(ws,cc)===null||Pi.origin.distanceToSquared(cc)>(e.far-e.near)**2))&&(lc.copy(s).invert(),Pi.copy(e.ray).applyMatrix4(lc),!(i.boundingBox!==null&&Pi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,R=v;b<R;b+=3){const E=o.getX(b),T=o.getX(b+1),A=o.getX(b+2);r=Ns(this,p,e,i,c,u,d,E,T,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=o.getX(m),v=o.getX(m+1),b=o.getX(m+2);r=Ns(this,a,e,i,c,u,d,S,v,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],S=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let b=S,R=v;b<R;b+=3){const E=b,T=b+1,A=b+2;r=Ns(this,p,e,i,c,u,d,E,T,A),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const S=m,v=m+1,b=m+2;r=Ns(this,a,e,i,c,u,d,S,v,b),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Tf(n,e,t,i,r,s,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ci,o),l===null)return null;Ps.copy(o),Ps.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ps);return c<t.near||c>t.far?null:{distance:c,point:Ps.clone(),object:n}}function Ns(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Cs),n.getVertexPosition(l,Ts),n.getVertexPosition(c,As);const u=Tf(n,e,t,i,Cs,Ts,As,uc);if(u){const d=new H;In.getBarycoord(uc,Cs,Ts,As,d),r&&(u.uv=In.getInterpolatedAttribute(r,o,l,c,d,new at)),s&&(u.uv1=In.getInterpolatedAttribute(s,o,l,c,d,new at)),a&&(u.normal=In.getInterpolatedAttribute(a,o,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new H,materialIndex:0};In.getNormal(Cs,Ts,As,h.normal),u.face=h,u.barycoord=d}return u}class hs extends vn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(d,2));function g(_,m,p,S,v,b,R,E,T,A,C){const x=b/T,L=R/A,W=b/2,j=R/2,Q=E/2,Z=T+1,K=A+1;let ce=0,G=0;const q=new H;for(let U=0;U<K;U++){const X=U*L-j;for(let me=0;me<Z;me++){const $e=me*x-W;q[_]=$e*S,q[m]=X*v,q[p]=Q,c.push(q.x,q.y,q.z),q[_]=0,q[m]=0,q[p]=E>0?1:-1,u.push(q.x,q.y,q.z),d.push(me/T),d.push(1-U/A),ce+=1}}for(let U=0;U<A;U++)for(let X=0;X<T;X++){const me=h+X+Z*U,$e=h+X+Z*(U+1),ie=h+(X+1)+Z*(U+1),fe=h+(X+1)+Z*U;l.push(me,$e,fe),l.push($e,ie,fe),G+=6}o.addGroup(f,G,C),f+=G,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=wr(n[t]);for(const r in i)e[r]=i[r]}return e}function Af(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ku(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const is={clone:wr,merge:ln};var Rf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Pf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Dr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rf,this.fragmentShader=Pf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wr(e.uniforms),this.uniformsGroups=Af(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ju extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _i=new H,dc=new at,hc=new at;class Tn extends Ju{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ns*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ns*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_i.x,_i.y).multiplyScalar(-e/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_i.x,_i.y).multiplyScalar(-e/_i.z)}getViewSize(e,t){return this.getViewBounds(e,dc,hc),t.subVectors(hc,dc)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class Nf extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(ir,rr,e,t);r.layers=this.layers,this.add(r);const s=new Tn(ir,rr,e,t);s.layers=this.layers,this.add(s);const a=new Tn(ir,rr,e,t);a.layers=this.layers,this.add(a);const o=new Tn(ir,rr,e,t);o.layers=this.layers,this.add(o);const l=new Tn(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new Tn(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,h,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qu extends gn{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:br,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Lf extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new hs(5,5,5),s=new rn({name:"CubemapFromEquirect",uniforms:wr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Wn});s.uniforms.tEquirect.value=t;const a=new Gn(r,s),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=Hn),new Nf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}class Df extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hi,this.environmentIntensity=1,this.environmentRotation=new hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $a=new H,Ff=new H,If=new tt;class Ii{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=$a.subVectors(i,t).cross(Ff.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($a),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||If.getNormalMatrix(e),r=this.coplanarPoint($a).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new ds,Ls=new H;class ed{constructor(e=new Ii,t=new Ii,i=new Ii,r=new Ii,s=new Ii,a=new Ii){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],h=r[7],f=r[8],g=r[9],_=r[10],m=r[11],p=r[12],S=r[13],v=r[14],b=r[15];if(i[0].setComponents(l-s,h-c,m-f,b-p).normalize(),i[1].setComponents(l+s,h+c,m+f,b+p).normalize(),i[2].setComponents(l+a,h+u,m+g,b+S).normalize(),i[3].setComponents(l-a,h-u,m-g,b-S).normalize(),i[4].setComponents(l-o,h-d,m-_,b-v).normalize(),t===ci)i[5].setComponents(l+o,h+d,m+_,b+v).normalize();else if(t===na)i[5].setComponents(o,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ls.x=r.normal.x>0?e.max.x:e.min.x,Ls.y=r.normal.y>0?e.max.y:e.min.y,Ls.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ls)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ga extends Dr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ra=new H,sa=new H,fc=new Dt,Hr=new fl,Ds=new ds,Za=new H,pc=new H;class Uf extends un{constructor(e=new vn,t=new ga){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ra.fromBufferAttribute(t,r-1),sa.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ra.distanceTo(sa);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(r),Ds.radius+=s,e.ray.intersectsSphere(Ds)===!1)return;fc.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(fc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=u.getX(_),S=u.getX(_+1),v=Fs(this,e,Hr,l,p,S);v&&t.push(v)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(f),p=Fs(this,e,Hr,l,_,m);p&&t.push(p)}}else{const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,m=g-1;_<m;_+=c){const p=Fs(this,e,Hr,l,_,_+1);p&&t.push(p)}if(this.isLineLoop){const _=Fs(this,e,Hr,l,g-1,f);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Fs(n,e,t,i,r,s){const a=n.geometry.attributes.position;if(ra.fromBufferAttribute(a,r),sa.fromBufferAttribute(a,s),t.distanceSqToSegment(ra,sa,Za,pc)>i)return;Za.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Za);if(!(l<e.near||l>e.far))return{distance:l,point:pc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const mc=new H,gc=new H;class ml extends Uf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)mc.fromBufferAttribute(t,r),gc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+mc.distanceTo(gc);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Of extends Dr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vc=new Dt,qo=new fl,Is=new ds,Us=new H;class Bf extends un{constructor(e=new vn,t=new Of){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Is.copy(i.boundingSphere),Is.applyMatrix4(r),Is.radius+=s,e.ray.intersectsSphere(Is)===!1)return;vc.copy(r).invert(),qo.copy(e.ray).applyMatrix4(vc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const h=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=h,_=f;g<_;g++){const m=c.getX(g);Us.fromBufferAttribute(d,m),_c(Us,m,l,r,e,t,this)}}else{const h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)Us.fromBufferAttribute(d,g),_c(Us,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _c(n,e,t,i,r,s,a){const o=qo.distanceSqToPoint(n);if(o<t){const l=new H;qo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class qr extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}class td extends gn{constructor(e,t,i,r,s,a,o,l,c,u=gr){if(u!==gr&&u!==yr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gr&&(i=Gi),i===void 0&&u===yr&&(i=Mr),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class va extends vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const S=p*h-a;for(let v=0;v<c;v++){const b=v*d-s;g.push(b,-S,0),_.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<o;S++){const v=S+c*p,b=S+c*(p+1),R=S+1+c*(p+1),E=S+1+c*p;f.push(v,b,E),f.push(b,R,E)}this.setIndex(f),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(_,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.widthSegments,e.heightSegments)}}class nd extends Dr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kf extends Dr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gl extends Ju{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class zf extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=xc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function xc(){return performance.now()}class Hf extends ml{constructor(e=10,t=10,i=4473924,r=8947848){i=new rt(i),r=new rt(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,f=0,g=-o;h<=t;h++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=h===s?i:r;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const u=new vn;u.setAttribute("position",new dn(l,3)),u.setAttribute("color",new dn(c,3));const d=new ga({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Gf extends ml{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new vn;r.setAttribute("position",new dn(t,3)),r.setAttribute("color",new dn(i,3));const s=new ga({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new rt,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function bc(n,e,t,i){const r=Wf(i);switch(t){case Iu:return n*e;case Ou:return n*e;case Bu:return n*e*2;case ku:return n*e/r.components*r.byteLength;case ll:return n*e/r.components*r.byteLength;case zu:return n*e*2/r.components*r.byteLength;case cl:return n*e*2/r.components*r.byteLength;case Uu:return n*e*3/r.components*r.byteLength;case Un:return n*e*4/r.components*r.byteLength;case ul:return n*e*4/r.components*r.byteLength;case js:case Ys:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $s:case Zs:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case So:case yo:return Math.max(n,16)*Math.max(e,8)/4;case bo:case Mo:return Math.max(n,8)*Math.max(e,8)/2;case Eo:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ro:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case No:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Do:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Io:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case zo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ks:case Vo:case Ho:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vu:case Go:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Wo:case Xo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wf(n){switch(n){case di:case Lu:return{byteLength:1,components:1};case ts:case Du:case Xn:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case Gi:case sl:case li:return{byteLength:4,components:1};case Fu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function id(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Xf(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){const g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jf=`#ifdef USE_ALPHAHASH
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
#endif`,Yf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Jf=`#ifdef USE_AOMAP
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
#endif`,Qf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ep=`#ifdef USE_BATCHING
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
#endif`,tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,ap=`#ifdef USE_BUMPMAP
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
#endif`,op=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,_p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mp="gl_FragColor = linearToOutputTexel( gl_FragColor );",yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,wp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dp=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ip=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Op=`uniform bool receiveShadow;
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
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,kp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
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
#endif`,Wp=`struct PhysicalMaterial {
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
}`,Xp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tm=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,om=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,Dm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Im=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,Jm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,tg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ig=`uniform float scale;
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
}`,rg=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,og=`#define LAMBERT
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
}`,lg=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,ug=`#define MATCAP
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
}`,dg=`#define NORMAL
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
}`,hg=`#define NORMAL
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
}`,fg=`#define PHONG
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
}`,pg=`#define PHONG
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
}`,mg=`#define STANDARD
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
}`,gg=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,_g=`#define TOON
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
}`,xg=`uniform float size;
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
}`,bg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,Mg=`uniform vec3 color;
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
}`,yg=`uniform float rotation;
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
}`,Eg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:qf,alphahash_pars_fragment:jf,alphamap_fragment:Yf,alphamap_pars_fragment:$f,alphatest_fragment:Zf,alphatest_pars_fragment:Kf,aomap_fragment:Jf,aomap_pars_fragment:Qf,batching_pars_vertex:ep,batching_vertex:tp,begin_vertex:np,beginnormal_vertex:ip,bsdfs:rp,iridescence_fragment:sp,bumpmap_pars_fragment:ap,clipping_planes_fragment:op,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:up,color_fragment:dp,color_pars_fragment:hp,color_pars_vertex:fp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:vp,displacementmap_pars_vertex:_p,displacementmap_vertex:xp,emissivemap_fragment:bp,emissivemap_pars_fragment:Sp,colorspace_fragment:Mp,colorspace_pars_fragment:yp,envmap_fragment:Ep,envmap_common_pars_fragment:wp,envmap_pars_fragment:Cp,envmap_pars_vertex:Tp,envmap_physical_pars_fragment:Bp,envmap_vertex:Ap,fog_vertex:Rp,fog_pars_vertex:Pp,fog_fragment:Np,fog_pars_fragment:Lp,gradientmap_pars_fragment:Dp,lightmap_pars_fragment:Fp,lights_lambert_fragment:Ip,lights_lambert_pars_fragment:Up,lights_pars_begin:Op,lights_toon_fragment:kp,lights_toon_pars_fragment:zp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Hp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:jp,logdepthbuf_fragment:Yp,logdepthbuf_pars_fragment:$p,logdepthbuf_pars_vertex:Zp,logdepthbuf_vertex:Kp,map_fragment:Jp,map_pars_fragment:Qp,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:rm,morphcolor_vertex:sm,morphnormal_vertex:am,morphtarget_pars_vertex:om,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:hm,normal_vertex:fm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:_m,opaque_fragment:xm,packing:bm,premultiplied_alpha_fragment:Sm,project_vertex:Mm,dithering_fragment:ym,dithering_pars_fragment:Em,roughnessmap_fragment:wm,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Am,shadowmap_vertex:Rm,shadowmask_pars_fragment:Pm,skinbase_vertex:Nm,skinning_pars_vertex:Lm,skinning_vertex:Dm,skinnormal_vertex:Fm,specularmap_fragment:Im,specularmap_pars_fragment:Um,tonemapping_fragment:Om,tonemapping_pars_fragment:Bm,transmission_fragment:km,transmission_pars_fragment:zm,uv_pars_fragment:Vm,uv_pars_vertex:Hm,uv_vertex:Gm,worldpos_vertex:Wm,background_vert:Xm,background_frag:qm,backgroundCube_vert:jm,backgroundCube_frag:Ym,cube_vert:$m,cube_frag:Zm,depth_vert:Km,depth_frag:Jm,distanceRGBA_vert:Qm,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:sg,meshbasic_frag:ag,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:hg,meshphong_vert:fg,meshphong_frag:pg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:vg,meshtoon_frag:_g,points_vert:xg,points_frag:bg,shadow_vert:Sg,shadow_frag:Mg,sprite_vert:yg,sprite_frag:Eg},Ce={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Vn={basic:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ln([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ln([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ln([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new rt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ln([Ce.points,Ce.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ln([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ln([Ce.common,Ce.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ln([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ln([Ce.sprite,Ce.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:ln([Ce.common,Ce.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:ln([Ce.lights,Ce.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Vn.physical={uniforms:ln([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Os={r:0,b:0,g:0},Li=new hi,wg=new Dt;function Cg(n,e,t,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function g(v){let b=v.isScene===!0?v.background:null;return b&&b.isTexture&&(b=(v.backgroundBlurriness>0?t:e).get(b)),b}function _(v){let b=!1;const R=g(v);R===null?p(o,l):R&&R.isColor&&(p(R,1),b=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,b){const R=g(b);R&&(R.isCubeTexture||R.mapping===ma)?(u===void 0&&(u=new Gn(new hs(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:wr(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(b.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Li)),u.material.toneMapped=bt.getTransfer(R.colorSpace)!==Et,(d!==R||h!==R.version||f!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,h=R.version,f=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Gn(new va(2,2),new rn({name:"BackgroundMaterial",uniforms:wr(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=bt.getTransfer(R.colorSpace)!==Et,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||h!==R.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=R,h=R.version,f=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,b){v.getRGB(Os,Ku(n)),i.buffers.color.setClear(Os.r,Os.g,Os.b,b,a)}function S(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(v,b=1){o.set(v),l=b,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(o,l)},render:_,addToRenderList:m,dispose:S}}function Tg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function o(x,L,W,j,Q){let Z=!1;const K=d(j,W,L);s!==K&&(s=K,c(s.object)),Z=f(x,j,W,Q),Z&&g(x,j,W,Q),Q!==null&&e.update(Q,n.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,b(x,L,W,j),Q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function u(x){return n.deleteVertexArray(x)}function d(x,L,W){const j=W.wireframe===!0;let Q=i[x.id];Q===void 0&&(Q={},i[x.id]=Q);let Z=Q[L.id];Z===void 0&&(Z={},Q[L.id]=Z);let K=Z[j];return K===void 0&&(K=h(l()),Z[j]=K),K}function h(x){const L=[],W=[],j=[];for(let Q=0;Q<t;Q++)L[Q]=0,W[Q]=0,j[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:W,attributeDivisors:j,object:x,attributes:{},index:null}}function f(x,L,W,j){const Q=s.attributes,Z=L.attributes;let K=0;const ce=W.getAttributes();for(const G in ce)if(ce[G].location>=0){const U=Q[G];let X=Z[G];if(X===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(X=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(X=x.instanceColor)),U===void 0||U.attribute!==X||X&&U.data!==X.data)return!0;K++}return s.attributesNum!==K||s.index!==j}function g(x,L,W,j){const Q={},Z=L.attributes;let K=0;const ce=W.getAttributes();for(const G in ce)if(ce[G].location>=0){let U=Z[G];U===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(U=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(U=x.instanceColor));const X={};X.attribute=U,U&&U.data&&(X.data=U.data),Q[G]=X,K++}s.attributes=Q,s.attributesNum=K,s.index=j}function _(){const x=s.newAttributes;for(let L=0,W=x.length;L<W;L++)x[L]=0}function m(x){p(x,0)}function p(x,L){const W=s.newAttributes,j=s.enabledAttributes,Q=s.attributeDivisors;W[x]=1,j[x]===0&&(n.enableVertexAttribArray(x),j[x]=1),Q[x]!==L&&(n.vertexAttribDivisor(x,L),Q[x]=L)}function S(){const x=s.newAttributes,L=s.enabledAttributes;for(let W=0,j=L.length;W<j;W++)L[W]!==x[W]&&(n.disableVertexAttribArray(W),L[W]=0)}function v(x,L,W,j,Q,Z,K){K===!0?n.vertexAttribIPointer(x,L,W,Q,Z):n.vertexAttribPointer(x,L,W,j,Q,Z)}function b(x,L,W,j){_();const Q=j.attributes,Z=W.getAttributes(),K=L.defaultAttributeValues;for(const ce in Z){const G=Z[ce];if(G.location>=0){let q=Q[ce];if(q===void 0&&(ce==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),ce==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){const U=q.normalized,X=q.itemSize,me=e.get(q);if(me===void 0)continue;const $e=me.buffer,ie=me.type,fe=me.bytesPerElement,ye=ie===n.INT||ie===n.UNSIGNED_INT||q.gpuType===sl;if(q.isInterleavedBufferAttribute){const _e=q.data,Te=_e.stride,Oe=q.offset;if(_e.isInstancedInterleavedBuffer){for(let ke=0;ke<G.locationSize;ke++)p(G.location+ke,_e.meshPerAttribute);x.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let ke=0;ke<G.locationSize;ke++)m(G.location+ke);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let ke=0;ke<G.locationSize;ke++)v(G.location+ke,X/G.locationSize,ie,U,Te*fe,(Oe+X/G.locationSize*ke)*fe,ye)}else{if(q.isInstancedBufferAttribute){for(let _e=0;_e<G.locationSize;_e++)p(G.location+_e,q.meshPerAttribute);x.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let _e=0;_e<G.locationSize;_e++)m(G.location+_e);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let _e=0;_e<G.locationSize;_e++)v(G.location+_e,X/G.locationSize,ie,U,X*fe,X/G.locationSize*_e*fe,ye)}}else if(K!==void 0){const U=K[ce];if(U!==void 0)switch(U.length){case 2:n.vertexAttrib2fv(G.location,U);break;case 3:n.vertexAttrib3fv(G.location,U);break;case 4:n.vertexAttrib4fv(G.location,U);break;default:n.vertexAttrib1fv(G.location,U)}}}}S()}function R(){A();for(const x in i){const L=i[x];for(const W in L){const j=L[W];for(const Q in j)u(j[Q].object),delete j[Q];delete L[W]}delete i[x]}}function E(x){if(i[x.id]===void 0)return;const L=i[x.id];for(const W in L){const j=L[W];for(const Q in j)u(j[Q].object),delete j[Q];delete L[W]}delete i[x.id]}function T(x){for(const L in i){const W=i[L];if(W[x.id]===void 0)continue;const j=W[x.id];for(const Q in j)u(j[Q].object),delete j[Q];delete W[x.id]}}function A(){C(),a=!0,s!==r&&(s=r,c(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function Ag(n,e,t){let i;function r(c){i=c}function s(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function a(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let f=0;for(let g=0;g<d;g++)f+=u[g];t.update(f,i,1)}function l(c,u,d,h){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Rg(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==Un&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==di&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==li&&!A)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:v,maxFragmentUniforms:b,vertexTextures:R,maxSamples:E}}function Pg(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Ii,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||i!==0||r;return r=h,i=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,f){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:i,v=S*4;let b=p.clippingState||null;l.value=b,b=u(g,h,v,f);for(let R=0;R!==v;++R)b[R]=t[R];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,h,f,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=f+_*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,b=f;v!==_;++v,b+=4)a.copy(d[v]).applyMatrix4(S,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ng(n){let e=new WeakMap;function t(a,o){return o===go?a.mapping=br:o===vo&&(a.mapping=Sr),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===go||o===vo)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Lf(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const hr=4,Sc=[.125,.215,.35,.446,.526,.582],Oi=20,Ka=new gl,Mc=new rt;let Ja=null,Qa=0,eo=0,to=!1;const Ui=(1+Math.sqrt(5))/2,sr=1/Ui,yc=[new H(-Ui,sr,0),new H(Ui,sr,0),new H(-sr,0,Ui),new H(sr,0,Ui),new H(0,Ui,-sr),new H(0,Ui,sr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class Ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ja,Qa,eo),this._renderer.xr.enabled=to,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===br||e.mapping===Sr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ja=this._renderer.getRenderTarget(),Qa=this._renderer.getActiveCubeFace(),eo=this._renderer.getActiveMipmapLevel(),to=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Xn,format:Un,colorSpace:Er,depthBuffer:!1},r=wc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(s)),this._blurMaterial=Dg(s,e,t)}return r}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,Ka)}_sceneToCubeUV(e,t,i,r){const o=new Tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Mc),u.toneMapping=wi,u.autoClear=!1;const f=new pl({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Gn(new hs,f);let _=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,_=!0):(f.color.copy(Mc),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):S===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));const v=this._cubeSize;Bs(r,S*v,p>2?v:0,v,v),u.setRenderTarget(r),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===br||e.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Gn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Bs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ka)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yc[(r-s-1)%yc.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Gn(this._lodPlanes[r],c),h=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Oi-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Oi;m>Oi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const p=[];let S=0;for(let T=0;T<Oi;++T){const A=T/_,C=Math.exp(-A*A/2);p.push(C),T===0?S+=C:T<m&&(S+=2*C)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=p,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const b=this._sizeLods[r],R=3*b*(r>v-hr?r-v+hr:0),E=4*(this._cubeSize-b);Bs(t,R,E,3*b,2*b),l.setRenderTarget(t),l.render(d,Ka)}}function Lg(n){const e=[],t=[],i=[];let r=n;const s=n-hr+1+Sc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-hr?l=Sc[a-n+hr-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,g=6,_=3,m=2,p=1,S=new Float32Array(_*g*f),v=new Float32Array(m*g*f),b=new Float32Array(p*g*f);for(let E=0;E<f;E++){const T=E%3*2/3-1,A=E>2?0:-1,C=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];S.set(C,_*g*E),v.set(h,m*g*E);const x=[E,E,E,E,E,E];b.set(x,p*g*E)}const R=new vn;R.setAttribute("position",new Kt(S,_)),R.setAttribute("uv",new Kt(v,m)),R.setAttribute("faceIndex",new Kt(b,p)),e.push(R),r>hr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function wc(n,e,t){const i=new Rn(n,e,t);return i.texture.mapping=ma,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Dg(n,e,t){const i=new Float32Array(Oi),r=new H(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Cc(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Tc(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function vl(){return`

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
	`}function Fg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===go||l===vo,u=l===br||l===Sr;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new Ec(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new Ec(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Ig(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ur("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ug(n,e,t,i){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const f=s.get(h);f&&(e.remove(f),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const f in h)e.update(h[f],n.ARRAY_BUFFER)}function c(d){const h=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let v=0,b=S.length;v<b;v+=3){const R=S[v+0],E=S[v+1],T=S[v+2];h.push(R,E,E,T,T,R)}}else if(g!==void 0){const S=g.array;_=g.version;for(let v=0,b=S.length/3-1;v<b;v+=3){const R=v+0,E=v+1,T=v+2;h.push(R,E,E,T,T,R)}}else return;const m=new(Wu(h)?Zu:$u)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Og(n,e,t){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){n.drawElements(i,f,s,h*a),t.update(f,i,1)}function c(h,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,h*a,g),t.update(f,i,g))}function u(h,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(h,f,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<h.length;p++)c(h[p]/a,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,h,0,_,0,g);let p=0;for(let S=0;S<g;S++)p+=f[S]*_[S];t.update(p,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Bg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function kg(n,e,t){const i=new WeakMap,r=new It;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=i.get(o);if(h===void 0||h.count!==d){let C=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",C)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let v=0;f===!0&&(v=1),g===!0&&(v=2),_===!0&&(v=3);let b=o.attributes.position.count*v,R=1;b>e.maxTextureSize&&(R=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const E=new Float32Array(b*R*4*d),T=new qu(E,b,R,d);T.type=li,T.needsUpdate=!0;const A=v*4;for(let x=0;x<d;x++){const L=m[x],W=p[x],j=S[x],Q=b*R*4*x;for(let Z=0;Z<L.count;Z++){const K=Z*A;f===!0&&(r.fromBufferAttribute(L,Z),E[Q+K+0]=r.x,E[Q+K+1]=r.y,E[Q+K+2]=r.z,E[Q+K+3]=0),g===!0&&(r.fromBufferAttribute(W,Z),E[Q+K+4]=r.x,E[Q+K+5]=r.y,E[Q+K+6]=r.z,E[Q+K+7]=0),_===!0&&(r.fromBufferAttribute(j,Z),E[Q+K+8]=r.x,E[Q+K+9]=r.y,E[Q+K+10]=r.z,E[Q+K+11]=j.itemSize===4?r.w:1)}}h={count:d,texture:T,size:new at(b,R)},i.set(o,h),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function zg(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const rd=new gn,Ac=new td(1,1),sd=new qu,ad=new vf,od=new Qu,Rc=[],Pc=[],Nc=new Float32Array(16),Lc=new Float32Array(9),Dc=new Float32Array(4);function Fr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Rc[r];if(s===void 0&&(s=new Float32Array(r),Rc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Xt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function qt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=Pc[e];t===void 0&&(t=new Int32Array(e),Pc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2fv(this.addr,e),qt(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Xt(t,e))return;n.uniform3fv(this.addr,e),qt(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4fv(this.addr,e),qt(t,e)}}function Xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Dc.set(i),n.uniformMatrix2fv(this.addr,!1,Dc),qt(t,i)}}function qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Lc.set(i),n.uniformMatrix3fv(this.addr,!1,Lc),qt(t,i)}}function jg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Xt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),qt(t,e)}else{if(Xt(t,i))return;Nc.set(i),n.uniformMatrix4fv(this.addr,!1,Nc),qt(t,i)}}function Yg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2iv(this.addr,e),qt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3iv(this.addr,e),qt(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4iv(this.addr,e),qt(t,e)}}function Jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Xt(t,e))return;n.uniform2uiv(this.addr,e),qt(t,e)}}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Xt(t,e))return;n.uniform3uiv(this.addr,e),qt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Xt(t,e))return;n.uniform4uiv(this.addr,e),qt(t,e)}}function n0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ac.compareFunction=Gu,s=Ac):s=rd,t.setTexture2D(e||s,r)}function i0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ad,r)}function r0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||od,r)}function s0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||sd,r)}function a0(n){switch(n){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return jg;case 5124:case 35670:return Yg;case 35667:case 35671:return $g;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return s0}}function o0(n,e){n.uniform1fv(this.addr,e)}function l0(n,e){const t=Fr(e,this.size,2);n.uniform2fv(this.addr,t)}function c0(n,e){const t=Fr(e,this.size,3);n.uniform3fv(this.addr,t)}function u0(n,e){const t=Fr(e,this.size,4);n.uniform4fv(this.addr,t)}function d0(n,e){const t=Fr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function h0(n,e){const t=Fr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function f0(n,e){const t=Fr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function p0(n,e){n.uniform1iv(this.addr,e)}function m0(n,e){n.uniform2iv(this.addr,e)}function g0(n,e){n.uniform3iv(this.addr,e)}function v0(n,e){n.uniform4iv(this.addr,e)}function _0(n,e){n.uniform1uiv(this.addr,e)}function x0(n,e){n.uniform2uiv(this.addr,e)}function b0(n,e){n.uniform3uiv(this.addr,e)}function S0(n,e){n.uniform4uiv(this.addr,e)}function M0(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||rd,s[a])}function y0(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ad,s[a])}function E0(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||od,s[a])}function w0(n,e,t){const i=this.cache,r=e.length,s=_a(t,r);Xt(i,s)||(n.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||sd,s[a])}function C0(n){switch(n){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return u0;case 35674:return d0;case 35675:return h0;case 35676:return f0;case 5124:case 35670:return p0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return v0;case 5125:return _0;case 36294:return x0;case 36295:return b0;case 36296:return S0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return E0;case 36289:case 36303:case 36311:case 36292:return w0}}class T0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=a0(t.type)}}class A0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C0(t.type)}}class R0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const no=/(\w+)(\])?(\[|\.)?/g;function Fc(n,e){n.seq.push(e),n.map[e.id]=e}function P0(n,e,t){const i=n.name,r=i.length;for(no.lastIndex=0;;){const s=no.exec(i),a=no.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Fc(t,c===void 0?new T0(o,n,e):new A0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new R0(o),Fc(t,d)),t=d}}}class Js{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);P0(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Ic(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const N0=37297;let L0=0;function D0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}const Uc=new tt;function F0(n){bt._getMatrix(Uc,bt.workingColorSpace,n);const e=`mat3( ${Uc.elements.map(t=>t.toFixed(4))} )`;switch(bt.getTransfer(n)){case ta:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Oc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+D0(n.getShaderSource(e),a)}else return r}function I0(n,e){const t=F0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(n,e){let t;switch(e){case Ch:t="Linear";break;case Th:t="Reinhard";break;case Ah:t="Cineon";break;case Rh:t="ACESFilmic";break;case Nh:t="AgX";break;case Lh:t="Neutral";break;case Ph:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ks=new H;function O0(){bt.getLuminanceCoefficients(ks);const n=ks.x.toFixed(4),e=ks.y.toFixed(4),t=ks.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jr).join(`
`)}function k0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function z0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function jr(n){return n!==""}function Bc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(n){return n.replace(V0,G0)}const H0=new Map;function G0(n,e){let t=it[e];if(t===void 0){const i=H0.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jo(t)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(n){return n.replace(W0,X0)}function X0(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function q0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ru?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ah?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function j0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case br:case Sr:e="ENVMAP_TYPE_CUBE";break;case ma:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:e="ENVMAP_MODE_REFRACTION";break}return e}function $0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Pu:e="ENVMAP_BLENDING_MULTIPLY";break;case Eh:e="ENVMAP_BLENDING_MIX";break;case wh:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function K0(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=q0(t),c=j0(t),u=Y0(t),d=$0(t),h=Z0(t),f=B0(t),g=k0(s),_=r.createProgram();let m,p,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(jr).join(`
`),p.length>0&&(p+=`
`)):(m=[Vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jr).join(`
`),p=[Vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?it.tonemapping_pars_fragment:"",t.toneMapping!==wi?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),O0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jr).join(`
`)),a=jo(a),a=Bc(a,t),a=kc(a,t),o=jo(o),o=Bc(o,t),o=kc(o,t),a=zc(a),o=zc(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=S+m+a,b=S+p+o,R=Ic(r,r.VERTEX_SHADER,v),E=Ic(r,r.FRAGMENT_SHADER,b);r.attachShader(_,R),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(L){if(n.debug.checkShaderErrors){const W=r.getProgramInfoLog(_).trim(),j=r.getShaderInfoLog(R).trim(),Q=r.getShaderInfoLog(E).trim();let Z=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(Z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,R,E);else{const ce=Oc(r,R,"vertex"),G=Oc(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+W+`
`+ce+`
`+G)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(j===""||Q==="")&&(K=!1);K&&(L.diagnostics={runnable:Z,programLog:W,vertexShader:{log:j,prefix:m},fragmentShader:{log:Q,prefix:p}})}r.deleteShader(R),r.deleteShader(E),A=new Js(r,_),C=z0(r,_)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(_,N0)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=E,this}let J0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ev(e),t.set(e,i)),i}}class ev{constructor(e){this.id=J0++,this.code=e,this.usedTimes=0}}function tv(n,e,t,i,r,s,a){const o=new ju,l=new Q0,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let f=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(C){return c.add(C),C===0?"uv":`uv${C}`}function m(C,x,L,W,j){const Q=W.fog,Z=j.geometry,K=C.isMeshStandardMaterial?W.environment:null,ce=(C.isMeshStandardMaterial?t:e).get(C.envMap||K),G=ce&&ce.mapping===ma?ce.image.height:null,q=g[C.type];C.precision!==null&&(f=r.getMaxPrecision(C.precision),f!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",f,"instead."));const U=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,X=U!==void 0?U.length:0;let me=0;Z.morphAttributes.position!==void 0&&(me=1),Z.morphAttributes.normal!==void 0&&(me=2),Z.morphAttributes.color!==void 0&&(me=3);let $e,ie,fe,ye;if(q){const J=Vn[q];$e=J.vertexShader,ie=J.fragmentShader}else $e=C.vertexShader,ie=C.fragmentShader,l.update(C),fe=l.getVertexShaderID(C),ye=l.getFragmentShaderID(C);const _e=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Oe=j.isInstancedMesh===!0,ke=j.isBatchedMesh===!0,ot=!!C.map,je=!!C.matcap,dt=!!ce,D=!!C.aoMap,Ct=!!C.lightMap,Je=!!C.bumpMap,Qe=!!C.normalMap,Ie=!!C.displacementMap,ct=!!C.emissiveMap,Le=!!C.metalnessMap,P=!!C.roughnessMap,y=C.anisotropy>0,z=C.clearcoat>0,se=C.dispersion>0,ae=C.iridescence>0,ne=C.sheen>0,de=C.transmission>0,he=y&&!!C.anisotropyMap,Se=z&&!!C.clearcoatMap,Ze=z&&!!C.clearcoatNormalMap,pe=z&&!!C.clearcoatRoughnessMap,Pe=ae&&!!C.iridescenceMap,Fe=ae&&!!C.iridescenceThicknessMap,Be=ne&&!!C.sheenColorMap,Ae=ne&&!!C.sheenRoughnessMap,et=!!C.specularMap,We=!!C.specularColorMap,vt=!!C.specularIntensityMap,O=de&&!!C.transmissionMap,Me=de&&!!C.thicknessMap,te=!!C.gradientMap,oe=!!C.alphaMap,Ee=C.alphaTest>0,be=!!C.alphaHash,M=!!C.extensions;let N=wi;C.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(N=n.toneMapping);const B={shaderID:q,shaderType:C.type,shaderName:C.name,vertexShader:$e,fragmentShader:ie,defines:C.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:f,batching:ke,batchingColor:ke&&j._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&j.instanceColor!==null,instancingMorph:Oe&&j.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:_e===null?n.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Er,alphaToCoverage:!!C.alphaToCoverage,map:ot,matcap:je,envMap:dt,envMapMode:dt&&ce.mapping,envMapCubeUVHeight:G,aoMap:D,lightMap:Ct,bumpMap:Je,normalMap:Qe,displacementMap:h&&Ie,emissiveMap:ct,normalMapObjectSpace:Qe&&C.normalMapType===Uh,normalMapTangentSpace:Qe&&C.normalMapType===Ih,metalnessMap:Le,roughnessMap:P,anisotropy:y,anisotropyMap:he,clearcoat:z,clearcoatMap:Se,clearcoatNormalMap:Ze,clearcoatRoughnessMap:pe,dispersion:se,iridescence:ae,iridescenceMap:Pe,iridescenceThicknessMap:Fe,sheen:ne,sheenColorMap:Be,sheenRoughnessMap:Ae,specularMap:et,specularColorMap:We,specularIntensityMap:vt,transmission:de,transmissionMap:O,thicknessMap:Me,gradientMap:te,opaque:C.transparent===!1&&C.blending===Ei&&C.alphaToCoverage===!1,alphaMap:oe,alphaTest:Ee,alphaHash:be,combine:C.combine,mapUv:ot&&_(C.map.channel),aoMapUv:D&&_(C.aoMap.channel),lightMapUv:Ct&&_(C.lightMap.channel),bumpMapUv:Je&&_(C.bumpMap.channel),normalMapUv:Qe&&_(C.normalMap.channel),displacementMapUv:Ie&&_(C.displacementMap.channel),emissiveMapUv:ct&&_(C.emissiveMap.channel),metalnessMapUv:Le&&_(C.metalnessMap.channel),roughnessMapUv:P&&_(C.roughnessMap.channel),anisotropyMapUv:he&&_(C.anisotropyMap.channel),clearcoatMapUv:Se&&_(C.clearcoatMap.channel),clearcoatNormalMapUv:Ze&&_(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&_(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&_(C.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&_(C.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&_(C.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&_(C.sheenRoughnessMap.channel),specularMapUv:et&&_(C.specularMap.channel),specularColorMapUv:We&&_(C.specularColorMap.channel),specularIntensityMapUv:vt&&_(C.specularIntensityMap.channel),transmissionMapUv:O&&_(C.transmissionMap.channel),thicknessMapUv:Me&&_(C.thicknessMap.channel),alphaMapUv:oe&&_(C.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Qe||y),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!Z.attributes.uv&&(ot||oe),fog:!!Q,useFog:C.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Te,skinning:j.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:me,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:N,decodeVideoTexture:ot&&C.map.isVideoTexture===!0&&bt.getTransfer(C.map.colorSpace)===Et,decodeVideoTextureEmissive:ct&&C.emissiveMap.isVideoTexture===!0&&bt.getTransfer(C.emissiveMap.colorSpace)===Et,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===ai,flipSided:C.side===mn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:M&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M&&C.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return B.vertexUv1s=c.has(1),B.vertexUv2s=c.has(2),B.vertexUv3s=c.has(3),c.clear(),B}function p(C){const x=[];if(C.shaderID?x.push(C.shaderID):(x.push(C.customVertexShaderID),x.push(C.customFragmentShaderID)),C.defines!==void 0)for(const L in C.defines)x.push(L),x.push(C.defines[L]);return C.isRawShaderMaterial===!1&&(S(x,C),v(x,C),x.push(n.outputColorSpace)),x.push(C.customProgramCacheKey),x.join()}function S(C,x){C.push(x.precision),C.push(x.outputColorSpace),C.push(x.envMapMode),C.push(x.envMapCubeUVHeight),C.push(x.mapUv),C.push(x.alphaMapUv),C.push(x.lightMapUv),C.push(x.aoMapUv),C.push(x.bumpMapUv),C.push(x.normalMapUv),C.push(x.displacementMapUv),C.push(x.emissiveMapUv),C.push(x.metalnessMapUv),C.push(x.roughnessMapUv),C.push(x.anisotropyMapUv),C.push(x.clearcoatMapUv),C.push(x.clearcoatNormalMapUv),C.push(x.clearcoatRoughnessMapUv),C.push(x.iridescenceMapUv),C.push(x.iridescenceThicknessMapUv),C.push(x.sheenColorMapUv),C.push(x.sheenRoughnessMapUv),C.push(x.specularMapUv),C.push(x.specularColorMapUv),C.push(x.specularIntensityMapUv),C.push(x.transmissionMapUv),C.push(x.thicknessMapUv),C.push(x.combine),C.push(x.fogExp2),C.push(x.sizeAttenuation),C.push(x.morphTargetsCount),C.push(x.morphAttributeCount),C.push(x.numDirLights),C.push(x.numPointLights),C.push(x.numSpotLights),C.push(x.numSpotLightMaps),C.push(x.numHemiLights),C.push(x.numRectAreaLights),C.push(x.numDirLightShadows),C.push(x.numPointLightShadows),C.push(x.numSpotLightShadows),C.push(x.numSpotLightShadowsWithMaps),C.push(x.numLightProbes),C.push(x.shadowMapType),C.push(x.toneMapping),C.push(x.numClippingPlanes),C.push(x.numClipIntersection),C.push(x.depthPacking)}function v(C,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),C.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),C.push(o.mask)}function b(C){const x=g[C.type];let L;if(x){const W=Vn[x];L=is.clone(W.uniforms)}else L=C.uniforms;return L}function R(C,x){let L;for(let W=0,j=u.length;W<j;W++){const Q=u[W];if(Q.cacheKey===x){L=Q,++L.usedTimes;break}}return L===void 0&&(L=new K0(n,x,C,s),u.push(L)),L}function E(C){if(--C.usedTimes===0){const x=u.indexOf(C);u[x]=u[u.length-1],u.pop(),C.destroy()}}function T(C){l.remove(C)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:R,releaseProgram:E,releaseShaderCache:T,programs:u,dispose:A}}function nv(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function iv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,h,f,g,_,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:h,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=h,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function o(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,h,f,g,_,m){const p=a(d,h,f,g,_,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,h){t.length>1&&t.sort(d||iv),i.length>1&&i.sort(h||Hc),r.length>1&&r.sort(h||Hc)}function u(){for(let d=e,h=n.length;d<h;d++){const f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function rv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Gc,n.set(i,[a])):r>=s.length?(a=new Gc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function sv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new rt};break;case"SpotLight":t={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ov=0;function lv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cv(n){const e=new sv,t=av(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,s=new Dt,a=new Dt;function o(c){let u=0,d=0,h=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,S=0,v=0,b=0,R=0,E=0,T=0;c.sort(lv);for(let C=0,x=c.length;C<x;C++){const L=c[C],W=L.color,j=L.intensity,Q=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=W.r*j,d+=W.g*j,h+=W.b*j;else if(L.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(L.sh.coefficients[K],j);T++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ce=L.shadow,G=t.get(L);G.shadowIntensity=ce.intensity,G.shadowBias=ce.bias,G.shadowNormalBias=ce.normalBias,G.shadowRadius=ce.radius,G.shadowMapSize=ce.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=Z,i.directionalShadowMatrix[f]=L.shadow.matrix,S++}i.directional[f]=K,f++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(W).multiplyScalar(j),K.distance=Q,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,i.spot[_]=K;const ce=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,ce.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[_]=ce.matrix,L.castShadow){const G=t.get(L);G.shadowIntensity=ce.intensity,G.shadowBias=ce.bias,G.shadowNormalBias=ce.normalBias,G.shadowRadius=ce.radius,G.shadowMapSize=ce.mapSize,i.spotShadow[_]=G,i.spotShadowMap[_]=Z,b++}_++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(W).multiplyScalar(j),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=K,m++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity),K.distance=L.distance,K.decay=L.decay,L.castShadow){const ce=L.shadow,G=t.get(L);G.shadowIntensity=ce.intensity,G.shadowBias=ce.bias,G.shadowNormalBias=ce.normalBias,G.shadowRadius=ce.radius,G.shadowMapSize=ce.mapSize,G.shadowCameraNear=ce.camera.near,G.shadowCameraFar=ce.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=K,g++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(j),K.groundColor.copy(L.groundColor).multiplyScalar(j),i.hemi[p]=K,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=h;const A=i.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==_||A.rectAreaLength!==m||A.hemiLength!==p||A.numDirectionalShadows!==S||A.numPointShadows!==v||A.numSpotShadows!==b||A.numSpotMaps!==R||A.numLightProbes!==T)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=b+R-E,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=T,A.directionalLength=f,A.pointLength=g,A.spotLength=_,A.rectAreaLength=m,A.hemiLength=p,A.numDirectionalShadows=S,A.numPointShadows=v,A.numSpotShadows=b,A.numSpotMaps=R,A.numLightProbes=T,i.version=ov++)}function l(c,u){let d=0,h=0,f=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,S=c.length;p<S;p++){const v=c[p];if(v.isDirectionalLight){const b=i.directional[d];b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),d++}else if(v.isSpotLight){const b=i.spot[f];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(v.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),b.halfWidth.set(v.width*.5,0,0),b.halfHeight.set(0,v.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const b=i.point[h];b.position.setFromMatrixPosition(v.matrixWorld),b.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(v.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:i}}function Wc(n){const e=new cv(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function s(u){t.push(u)}function a(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function uv(n){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Wc(n),e.set(r,[o])):s>=a.length?(o=new Wc(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hv=`uniform sampler2D shadow_pass;
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
}`;function fv(n,e,t){let i=new ed;const r=new at,s=new at,a=new It,o=new nd({depthPacking:Hu}),l=new kf,c={},u=t.maxTextureSize,d={[Ci]:mn,[mn]:Ci,[ai]:ai},h=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:dv,fragmentShader:hv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Gn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ru;let p=this.type;this.render=function(E,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const C=n.getRenderTarget(),x=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Wn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const j=p!==ii&&this.type===ii,Q=p===ii&&this.type!==ii;for(let Z=0,K=E.length;Z<K;Z++){const ce=E[Z],G=ce.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const q=G.getFrameExtents();if(r.multiply(q),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,G.mapSize.y=s.y)),G.map===null||j===!0||Q===!0){const X=this.type!==ii?{minFilter:Mn,magFilter:Mn}:{};G.map!==null&&G.map.dispose(),G.map=new Rn(r.x,r.y,X),G.map.texture.name=ce.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const U=G.getViewportCount();for(let X=0;X<U;X++){const me=G.getViewport(X);a.set(s.x*me.x,s.y*me.y,s.x*me.z,s.y*me.w),W.viewport(a),G.updateMatrices(ce,X),i=G.getFrustum(),b(T,A,G.camera,ce,this.type)}G.isPointLightShadow!==!0&&this.type===ii&&S(G,A),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(C,x,L)};function S(E,T){const A=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rn(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(T,null,A,h,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(T,null,A,f,_,null)}function v(E,T,A,C){let x=null;const L=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)x=L;else if(x=A.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const W=x.uuid,j=T.uuid;let Q=c[W];Q===void 0&&(Q={},c[W]=Q);let Z=Q[j];Z===void 0&&(Z=x.clone(),Q[j]=Z,T.addEventListener("dispose",R)),x=Z}if(x.visible=T.visible,x.wireframe=T.wireframe,C===ii?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,A.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const W=n.properties.get(x);W.light=A}return x}function b(E,T,A,C,x){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===ii)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);const j=e.update(E),Q=E.material;if(Array.isArray(Q)){const Z=j.groups;for(let K=0,ce=Z.length;K<ce;K++){const G=Z[K],q=Q[G.materialIndex];if(q&&q.visible){const U=v(E,q,C,x);E.onBeforeShadow(n,E,T,A,j,U,G),n.renderBufferDirect(A,null,j,U,E,G),E.onAfterShadow(n,E,T,A,j,U,G)}}}else if(Q.visible){const Z=v(E,Q,C,x);E.onBeforeShadow(n,E,T,A,j,Z,null),n.renderBufferDirect(A,null,j,Z,E,null),E.onAfterShadow(n,E,T,A,j,Z,null)}}const W=E.children;for(let j=0,Q=W.length;j<Q;j++)b(W[j],T,A,C,x)}function R(E){E.target.removeEventListener("dispose",R);for(const A in c){const C=c[A],x=E.target.uuid;x in C&&(C[x].dispose(),delete C[x])}}}const pv={[lo]:co,[uo]:po,[ho]:mo,[xr]:fo,[co]:lo,[po]:uo,[mo]:ho,[fo]:xr};function mv(n,e){function t(){let O=!1;const Me=new It;let te=null;const oe=new It(0,0,0,0);return{setMask:function(Ee){te!==Ee&&!O&&(n.colorMask(Ee,Ee,Ee,Ee),te=Ee)},setLocked:function(Ee){O=Ee},setClear:function(Ee,be,M,N,B){B===!0&&(Ee*=N,be*=N,M*=N),Me.set(Ee,be,M,N),oe.equals(Me)===!1&&(n.clearColor(Ee,be,M,N),oe.copy(Me))},reset:function(){O=!1,te=null,oe.set(-1,0,0,0)}}}function i(){let O=!1,Me=!1,te=null,oe=null,Ee=null;return{setReversed:function(be){if(Me!==be){const M=e.get("EXT_clip_control");Me?M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT):M.clipControlEXT(M.LOWER_LEFT_EXT,M.NEGATIVE_ONE_TO_ONE_EXT);const N=Ee;Ee=null,this.setClear(N)}Me=be},getReversed:function(){return Me},setTest:function(be){be?_e(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(be){te!==be&&!O&&(n.depthMask(be),te=be)},setFunc:function(be){if(Me&&(be=pv[be]),oe!==be){switch(be){case lo:n.depthFunc(n.NEVER);break;case co:n.depthFunc(n.ALWAYS);break;case uo:n.depthFunc(n.LESS);break;case xr:n.depthFunc(n.LEQUAL);break;case ho:n.depthFunc(n.EQUAL);break;case fo:n.depthFunc(n.GEQUAL);break;case po:n.depthFunc(n.GREATER);break;case mo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}oe=be}},setLocked:function(be){O=be},setClear:function(be){Ee!==be&&(Me&&(be=1-be),n.clearDepth(be),Ee=be)},reset:function(){O=!1,te=null,oe=null,Ee=null,Me=!1}}}function r(){let O=!1,Me=null,te=null,oe=null,Ee=null,be=null,M=null,N=null,B=null;return{setTest:function(J){O||(J?_e(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(J){Me!==J&&!O&&(n.stencilMask(J),Me=J)},setFunc:function(J,ue,k){(te!==J||oe!==ue||Ee!==k)&&(n.stencilFunc(J,ue,k),te=J,oe=ue,Ee=k)},setOp:function(J,ue,k){(be!==J||M!==ue||N!==k)&&(n.stencilOp(J,ue,k),be=J,M=ue,N=k)},setLocked:function(J){O=J},setClear:function(J){B!==J&&(n.clearStencil(J),B=J)},reset:function(){O=!1,Me=null,te=null,oe=null,Ee=null,be=null,M=null,N=null,B=null}}}const s=new t,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,b=null,R=null,E=null,T=new rt(0,0,0),A=0,C=!1,x=null,L=null,W=null,j=null,Q=null;const Z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,ce=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(G)[1]),K=ce>=1):G.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),K=ce>=2);let q=null,U={};const X=n.getParameter(n.SCISSOR_BOX),me=n.getParameter(n.VIEWPORT),$e=new It().fromArray(X),ie=new It().fromArray(me);function fe(O,Me,te,oe){const Ee=new Uint8Array(4),be=n.createTexture();n.bindTexture(O,be),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let M=0;M<te;M++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(Me,0,n.RGBA,1,1,oe,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Me+M,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return be}const ye={};ye[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(n.DEPTH_TEST),a.setFunc(xr),Je(!1),Qe(Gl),_e(n.CULL_FACE),D(Wn);function _e(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Te(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Oe(O,Me){return d[O]!==Me?(n.bindFramebuffer(O,Me),d[O]=Me,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=Me),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=Me),!0):!1}function ke(O,Me){let te=f,oe=!1;if(O){te=h.get(Me),te===void 0&&(te=[],h.set(Me,te));const Ee=O.textures;if(te.length!==Ee.length||te[0]!==n.COLOR_ATTACHMENT0){for(let be=0,M=Ee.length;be<M;be++)te[be]=n.COLOR_ATTACHMENT0+be;te.length=Ee.length,oe=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,oe=!0);oe&&n.drawBuffers(te)}function ot(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const je={[oi]:n.FUNC_ADD,[oh]:n.FUNC_SUBTRACT,[lh]:n.FUNC_REVERSE_SUBTRACT};je[ch]=n.MIN,je[uh]=n.MAX;const dt={[dh]:n.ZERO,[hh]:n.ONE,[fh]:n.SRC_COLOR,[Qr]:n.SRC_ALPHA,[xh]:n.SRC_ALPHA_SATURATE,[vh]:n.DST_COLOR,[mh]:n.DST_ALPHA,[ph]:n.ONE_MINUS_SRC_COLOR,[es]:n.ONE_MINUS_SRC_ALPHA,[_h]:n.ONE_MINUS_DST_COLOR,[gh]:n.ONE_MINUS_DST_ALPHA,[bh]:n.CONSTANT_COLOR,[Sh]:n.ONE_MINUS_CONSTANT_COLOR,[Mh]:n.CONSTANT_ALPHA,[yh]:n.ONE_MINUS_CONSTANT_ALPHA};function D(O,Me,te,oe,Ee,be,M,N,B,J){if(O===Wn){_===!0&&(Te(n.BLEND),_=!1);return}if(_===!1&&(_e(n.BLEND),_=!0),O!==oo){if(O!==m||J!==C){if((p!==oi||b!==oi)&&(n.blendEquation(n.FUNC_ADD),p=oi,b=oi),J)switch(O){case Ei:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Si:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ei:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Si:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,v=null,R=null,E=null,T.set(0,0,0),A=0,m=O,C=J}return}Ee=Ee||Me,be=be||te,M=M||oe,(Me!==p||Ee!==b)&&(n.blendEquationSeparate(je[Me],je[Ee]),p=Me,b=Ee),(te!==S||oe!==v||be!==R||M!==E)&&(n.blendFuncSeparate(dt[te],dt[oe],dt[be],dt[M]),S=te,v=oe,R=be,E=M),(N.equals(T)===!1||B!==A)&&(n.blendColor(N.r,N.g,N.b,B),T.copy(N),A=B),m=O,C=!1}function Ct(O,Me){O.side===ai?Te(n.CULL_FACE):_e(n.CULL_FACE);let te=O.side===mn;Me&&(te=!te),Je(te),O.blending===Ei&&O.transparent===!1?D(Wn):D(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),s.setMask(O.colorWrite);const oe=O.stencilWrite;o.setTest(oe),oe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ct(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(O){x!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),x=O)}function Qe(O){O!==rh?(_e(n.CULL_FACE),O!==L&&(O===Gl?n.cullFace(n.BACK):O===sh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),L=O}function Ie(O){O!==W&&(K&&n.lineWidth(O),W=O)}function ct(O,Me,te){O?(_e(n.POLYGON_OFFSET_FILL),(j!==Me||Q!==te)&&(n.polygonOffset(Me,te),j=Me,Q=te)):Te(n.POLYGON_OFFSET_FILL)}function Le(O){O?_e(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function P(O){O===void 0&&(O=n.TEXTURE0+Z-1),q!==O&&(n.activeTexture(O),q=O)}function y(O,Me,te){te===void 0&&(q===null?te=n.TEXTURE0+Z-1:te=q);let oe=U[te];oe===void 0&&(oe={type:void 0,texture:void 0},U[te]=oe),(oe.type!==O||oe.texture!==Me)&&(q!==te&&(n.activeTexture(te),q=te),n.bindTexture(O,Me||ye[O]),oe.type=O,oe.texture=Me)}function z(){const O=U[q];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function se(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ne(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Se(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Fe(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Be(O){$e.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),$e.copy(O))}function Ae(O){ie.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ie.copy(O))}function et(O,Me){let te=c.get(Me);te===void 0&&(te=new WeakMap,c.set(Me,te));let oe=te.get(O);oe===void 0&&(oe=n.getUniformBlockIndex(Me,O.name),te.set(O,oe))}function We(O,Me){const oe=c.get(Me).get(O);l.get(Me)!==oe&&(n.uniformBlockBinding(Me,oe,O.__bindingPointIndex),l.set(Me,oe))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},q=null,U={},d={},h=new WeakMap,f=[],g=null,_=!1,m=null,p=null,S=null,v=null,b=null,R=null,E=null,T=new rt(0,0,0),A=0,C=!1,x=null,L=null,W=null,j=null,Q=null,$e.set(0,0,n.canvas.width,n.canvas.height),ie.set(0,0,n.canvas.width,n.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:_e,disable:Te,bindFramebuffer:Oe,drawBuffers:ke,useProgram:ot,setBlending:D,setMaterial:Ct,setFlipSided:Je,setCullFace:Qe,setLineWidth:Ie,setPolygonOffset:ct,setScissorTest:Le,activeTexture:P,bindTexture:y,unbindTexture:z,compressedTexImage2D:se,compressedTexImage3D:ae,texImage2D:Pe,texImage3D:Fe,updateUBOMapping:et,uniformBlockBinding:We,texStorage2D:Ze,texStorage3D:pe,texSubImage2D:ne,texSubImage3D:de,compressedTexSubImage2D:he,compressedTexSubImage3D:Se,scissor:Be,viewport:Ae,reset:vt}}function gv(n,e,t,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,y){return f?new OffscreenCanvas(P,y):ia("canvas")}function _(P,y,z){let se=1;const ae=Le(P);if((ae.width>z||ae.height>z)&&(se=z/Math.max(ae.width,ae.height)),se<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ne=Math.floor(se*ae.width),de=Math.floor(se*ae.height);d===void 0&&(d=g(ne,de));const he=y?g(ne,de):d;return he.width=ne,he.height=de,he.getContext("2d").drawImage(P,0,0,ne,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ne+"x"+de+")."),he}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function m(P){return P.generateMipmaps}function p(P){n.generateMipmap(P)}function S(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,y,z,se,ae=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=y;if(y===n.RED&&(z===n.FLOAT&&(ne=n.R32F),z===n.HALF_FLOAT&&(ne=n.R16F),z===n.UNSIGNED_BYTE&&(ne=n.R8)),y===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.R8UI),z===n.UNSIGNED_SHORT&&(ne=n.R16UI),z===n.UNSIGNED_INT&&(ne=n.R32UI),z===n.BYTE&&(ne=n.R8I),z===n.SHORT&&(ne=n.R16I),z===n.INT&&(ne=n.R32I)),y===n.RG&&(z===n.FLOAT&&(ne=n.RG32F),z===n.HALF_FLOAT&&(ne=n.RG16F),z===n.UNSIGNED_BYTE&&(ne=n.RG8)),y===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.RG8UI),z===n.UNSIGNED_SHORT&&(ne=n.RG16UI),z===n.UNSIGNED_INT&&(ne=n.RG32UI),z===n.BYTE&&(ne=n.RG8I),z===n.SHORT&&(ne=n.RG16I),z===n.INT&&(ne=n.RG32I)),y===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.RGB8UI),z===n.UNSIGNED_SHORT&&(ne=n.RGB16UI),z===n.UNSIGNED_INT&&(ne=n.RGB32UI),z===n.BYTE&&(ne=n.RGB8I),z===n.SHORT&&(ne=n.RGB16I),z===n.INT&&(ne=n.RGB32I)),y===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(ne=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(ne=n.RGBA16UI),z===n.UNSIGNED_INT&&(ne=n.RGBA32UI),z===n.BYTE&&(ne=n.RGBA8I),z===n.SHORT&&(ne=n.RGBA16I),z===n.INT&&(ne=n.RGBA32I)),y===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(ne=n.RGB9_E5),y===n.RGBA){const de=ae?ta:bt.getTransfer(se);z===n.FLOAT&&(ne=n.RGBA32F),z===n.HALF_FLOAT&&(ne=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ne=de===Et?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(P,y){let z;return P?y===null||y===Gi||y===Mr?z=n.DEPTH24_STENCIL8:y===li?z=n.DEPTH32F_STENCIL8:y===ts&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Gi||y===Mr?z=n.DEPTH_COMPONENT24:y===li?z=n.DEPTH_COMPONENT32F:y===ts&&(z=n.DEPTH_COMPONENT16),z}function R(P,y){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Mn&&P.minFilter!==Hn?Math.log2(Math.max(y.width,y.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?y.mipmaps.length:1}function E(P){const y=P.target;y.removeEventListener("dispose",E),A(y),y.isVideoTexture&&u.delete(y)}function T(P){const y=P.target;y.removeEventListener("dispose",T),x(y)}function A(P){const y=i.get(P);if(y.__webglInit===void 0)return;const z=P.source,se=h.get(z);if(se){const ae=se[y.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&C(P),Object.keys(se).length===0&&h.delete(z)}i.remove(P)}function C(P){const y=i.get(P);n.deleteTexture(y.__webglTexture);const z=P.source,se=h.get(z);delete se[y.__cacheKey],a.memory.textures--}function x(P){const y=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(y.__webglFramebuffer[se]))for(let ae=0;ae<y.__webglFramebuffer[se].length;ae++)n.deleteFramebuffer(y.__webglFramebuffer[se][ae]);else n.deleteFramebuffer(y.__webglFramebuffer[se]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[se])}else{if(Array.isArray(y.__webglFramebuffer))for(let se=0;se<y.__webglFramebuffer.length;se++)n.deleteFramebuffer(y.__webglFramebuffer[se]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let se=0;se<y.__webglColorRenderbuffer.length;se++)y.__webglColorRenderbuffer[se]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[se]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const z=P.textures;for(let se=0,ae=z.length;se<ae;se++){const ne=i.get(z[se]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(z[se])}i.remove(P)}let L=0;function W(){L=0}function j(){const P=L;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function Q(P){const y=[];return y.push(P.wrapS),y.push(P.wrapT),y.push(P.wrapR||0),y.push(P.magFilter),y.push(P.minFilter),y.push(P.anisotropy),y.push(P.internalFormat),y.push(P.format),y.push(P.type),y.push(P.generateMipmaps),y.push(P.premultiplyAlpha),y.push(P.flipY),y.push(P.unpackAlignment),y.push(P.colorSpace),y.join()}function Z(P,y){const z=i.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const se=P.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(z,P,y);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+y)}function K(P,y){const z=i.get(P);if(P.version>0&&z.__version!==P.version){ie(z,P,y);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+y)}function ce(P,y){const z=i.get(P);if(P.version>0&&z.__version!==P.version){ie(z,P,y);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+y)}function G(P,y){const z=i.get(P);if(P.version>0&&z.__version!==P.version){fe(z,P,y);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+y)}const q={[_o]:n.REPEAT,[Bi]:n.CLAMP_TO_EDGE,[xo]:n.MIRRORED_REPEAT},U={[Mn]:n.NEAREST,[Dh]:n.NEAREST_MIPMAP_NEAREST,[ms]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[Ra]:n.LINEAR_MIPMAP_NEAREST,[ki]:n.LINEAR_MIPMAP_LINEAR},X={[Oh]:n.NEVER,[Gh]:n.ALWAYS,[Bh]:n.LESS,[Gu]:n.LEQUAL,[kh]:n.EQUAL,[Hh]:n.GEQUAL,[zh]:n.GREATER,[Vh]:n.NOTEQUAL};function me(P,y){if(y.type===li&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Hn||y.magFilter===Ra||y.magFilter===ms||y.magFilter===ki||y.minFilter===Hn||y.minFilter===Ra||y.minFilter===ms||y.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,q[y.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,q[y.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,q[y.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,U[y.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,U[y.minFilter]),y.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,X[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Mn||y.minFilter!==ms&&y.minFilter!==ki||y.type===li&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function $e(P,y){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,y.addEventListener("dispose",E));const se=y.source;let ae=h.get(se);ae===void 0&&(ae={},h.set(se,ae));const ne=Q(y);if(ne!==P.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ae[ne].usedTimes++;const de=ae[P.__cacheKey];de!==void 0&&(ae[P.__cacheKey].usedTimes--,de.usedTimes===0&&C(y)),P.__cacheKey=ne,P.__webglTexture=ae[ne].texture}return z}function ie(P,y,z){let se=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(se=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(se=n.TEXTURE_3D);const ae=$e(P,y),ne=y.source;t.bindTexture(se,P.__webglTexture,n.TEXTURE0+z);const de=i.get(ne);if(ne.version!==de.__version||ae===!0){t.activeTexture(n.TEXTURE0+z);const he=bt.getPrimaries(bt.workingColorSpace),Se=y.colorSpace===Mi?null:bt.getPrimaries(y.colorSpace),Ze=y.colorSpace===Mi||he===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let pe=_(y.image,!1,r.maxTextureSize);pe=ct(y,pe);const Pe=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type);let Be=v(y.internalFormat,Pe,Fe,y.colorSpace,y.isVideoTexture);me(se,y);let Ae;const et=y.mipmaps,We=y.isVideoTexture!==!0,vt=de.__version===void 0||ae===!0,O=ne.dataReady,Me=R(y,pe);if(y.isDepthTexture)Be=b(y.format===yr,y.type),vt&&(We?t.texStorage2D(n.TEXTURE_2D,1,Be,pe.width,pe.height):t.texImage2D(n.TEXTURE_2D,0,Be,pe.width,pe.height,0,Pe,Fe,null));else if(y.isDataTexture)if(et.length>0){We&&vt&&t.texStorage2D(n.TEXTURE_2D,Me,Be,et[0].width,et[0].height);for(let te=0,oe=et.length;te<oe;te++)Ae=et[te],We?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ae.width,Ae.height,Pe,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,te,Be,Ae.width,Ae.height,0,Pe,Fe,Ae.data);y.generateMipmaps=!1}else We?(vt&&t.texStorage2D(n.TEXTURE_2D,Me,Be,pe.width,pe.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,pe.width,pe.height,Pe,Fe,pe.data)):t.texImage2D(n.TEXTURE_2D,0,Be,pe.width,pe.height,0,Pe,Fe,pe.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){We&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Be,et[0].width,et[0].height,pe.depth);for(let te=0,oe=et.length;te<oe;te++)if(Ae=et[te],y.format!==Un)if(Pe!==null)if(We){if(O)if(y.layerUpdates.size>0){const Ee=bc(Ae.width,Ae.height,y.format,y.type);for(const be of y.layerUpdates){const M=Ae.data.subarray(be*Ee/Ae.data.BYTES_PER_ELEMENT,(be+1)*Ee/Ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,be,Ae.width,Ae.height,1,Pe,M)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ae.width,Ae.height,pe.depth,Pe,Ae.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Be,Ae.width,Ae.height,pe.depth,0,Ae.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,Ae.width,Ae.height,pe.depth,Pe,Fe,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Be,Ae.width,Ae.height,pe.depth,0,Pe,Fe,Ae.data)}else{We&&vt&&t.texStorage2D(n.TEXTURE_2D,Me,Be,et[0].width,et[0].height);for(let te=0,oe=et.length;te<oe;te++)Ae=et[te],y.format!==Un?Pe!==null?We?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,Ae.width,Ae.height,Pe,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Be,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Ae.width,Ae.height,Pe,Fe,Ae.data):t.texImage2D(n.TEXTURE_2D,te,Be,Ae.width,Ae.height,0,Pe,Fe,Ae.data)}else if(y.isDataArrayTexture)if(We){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Be,pe.width,pe.height,pe.depth),O)if(y.layerUpdates.size>0){const te=bc(pe.width,pe.height,y.format,y.type);for(const oe of y.layerUpdates){const Ee=pe.data.subarray(oe*te/pe.data.BYTES_PER_ELEMENT,(oe+1)*te/pe.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,oe,pe.width,pe.height,1,Pe,Fe,Ee)}y.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Pe,Fe,pe.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Be,pe.width,pe.height,pe.depth,0,Pe,Fe,pe.data);else if(y.isData3DTexture)We?(vt&&t.texStorage3D(n.TEXTURE_3D,Me,Be,pe.width,pe.height,pe.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Pe,Fe,pe.data)):t.texImage3D(n.TEXTURE_3D,0,Be,pe.width,pe.height,pe.depth,0,Pe,Fe,pe.data);else if(y.isFramebufferTexture){if(vt)if(We)t.texStorage2D(n.TEXTURE_2D,Me,Be,pe.width,pe.height);else{let te=pe.width,oe=pe.height;for(let Ee=0;Ee<Me;Ee++)t.texImage2D(n.TEXTURE_2D,Ee,Be,te,oe,0,Pe,Fe,null),te>>=1,oe>>=1}}else if(et.length>0){if(We&&vt){const te=Le(et[0]);t.texStorage2D(n.TEXTURE_2D,Me,Be,te.width,te.height)}for(let te=0,oe=et.length;te<oe;te++)Ae=et[te],We?O&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,Pe,Fe,Ae):t.texImage2D(n.TEXTURE_2D,te,Be,Pe,Fe,Ae);y.generateMipmaps=!1}else if(We){if(vt){const te=Le(pe);t.texStorage2D(n.TEXTURE_2D,Me,Be,te.width,te.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,Fe,pe)}else t.texImage2D(n.TEXTURE_2D,0,Be,Pe,Fe,pe);m(y)&&p(se),de.__version=ne.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function fe(P,y,z){if(y.image.length!==6)return;const se=$e(P,y),ae=y.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+z);const ne=i.get(ae);if(ae.version!==ne.__version||se===!0){t.activeTexture(n.TEXTURE0+z);const de=bt.getPrimaries(bt.workingColorSpace),he=y.colorSpace===Mi?null:bt.getPrimaries(y.colorSpace),Se=y.colorSpace===Mi||de===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const Ze=y.isCompressedTexture||y.image[0].isCompressedTexture,pe=y.image[0]&&y.image[0].isDataTexture,Pe=[];for(let oe=0;oe<6;oe++)!Ze&&!pe?Pe[oe]=_(y.image[oe],!0,r.maxCubemapSize):Pe[oe]=pe?y.image[oe].image:y.image[oe],Pe[oe]=ct(y,Pe[oe]);const Fe=Pe[0],Be=s.convert(y.format,y.colorSpace),Ae=s.convert(y.type),et=v(y.internalFormat,Be,Ae,y.colorSpace),We=y.isVideoTexture!==!0,vt=ne.__version===void 0||se===!0,O=ae.dataReady;let Me=R(y,Fe);me(n.TEXTURE_CUBE_MAP,y);let te;if(Ze){We&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,et,Fe.width,Fe.height);for(let oe=0;oe<6;oe++){te=Pe[oe].mipmaps;for(let Ee=0;Ee<te.length;Ee++){const be=te[Ee];y.format!==Un?Be!==null?We?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,0,0,be.width,be.height,Be,be.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,et,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,0,0,be.width,be.height,Be,Ae,be.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee,et,be.width,be.height,0,Be,Ae,be.data)}}}else{if(te=y.mipmaps,We&&vt){te.length>0&&Me++;const oe=Le(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,et,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(pe){We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Pe[oe].width,Pe[oe].height,Be,Ae,Pe[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,et,Pe[oe].width,Pe[oe].height,0,Be,Ae,Pe[oe].data);for(let Ee=0;Ee<te.length;Ee++){const M=te[Ee].image[oe].image;We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,0,0,M.width,M.height,Be,Ae,M.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,et,M.width,M.height,0,Be,Ae,M.data)}}else{We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Be,Ae,Pe[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,et,Be,Ae,Pe[oe]);for(let Ee=0;Ee<te.length;Ee++){const be=te[Ee];We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,0,0,Be,Ae,be.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ee+1,et,Be,Ae,be.image[oe])}}}m(y)&&p(n.TEXTURE_CUBE_MAP),ne.__version=ae.version,y.onUpdate&&y.onUpdate(y)}P.__version=y.version}function ye(P,y,z,se,ae,ne){const de=s.convert(z.format,z.colorSpace),he=s.convert(z.type),Se=v(z.internalFormat,de,he,z.colorSpace),Ze=i.get(y),pe=i.get(z);if(pe.__renderTarget=y,!Ze.__hasExternalTextures){const Pe=Math.max(1,y.width>>ne),Fe=Math.max(1,y.height>>ne);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ne,Se,Pe,Fe,y.depth,0,de,he,null):t.texImage2D(ae,ne,Se,Pe,Fe,0,de,he,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Qe(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,se,ae,pe.__webglTexture,0,Je(y)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,se,ae,pe.__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(P,y,z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),y.depthBuffer){const se=y.depthTexture,ae=se&&se.isDepthTexture?se.type:null,ne=b(y.stencilBuffer,ae),de=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,he=Je(y);Qe(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,ne,y.width,y.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ne,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,ne,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,P)}else{const se=y.textures;for(let ae=0;ae<se.length;ae++){const ne=se[ae],de=s.convert(ne.format,ne.colorSpace),he=s.convert(ne.type),Se=v(ne.internalFormat,de,he,ne.colorSpace),Ze=Je(y);z&&Qe(y)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ze,Se,y.width,y.height):Qe(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ze,Se,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Se,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(P,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const se=i.get(y.depthTexture);se.__renderTarget=y,(!se.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Z(y.depthTexture,0);const ae=se.__webglTexture,ne=Je(y);if(y.depthTexture.format===gr)Qe(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(y.depthTexture.format===yr)Qe(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,ne):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const y=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==P.depthTexture){const se=P.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),se){const ae=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,se.removeEventListener("dispose",ae)};se.addEventListener("dispose",ae),y.__depthDisposeCallback=ae}y.__boundDepthTexture=se}if(P.depthTexture&&!y.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Te(y.__webglFramebuffer,P)}else if(z){y.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[se]),y.__webglDepthbuffer[se]===void 0)y.__webglDepthbuffer[se]=n.createRenderbuffer(),_e(y.__webglDepthbuffer[se],P,!1);else{const ae=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ne=y.__webglDepthbuffer[se];n.bindRenderbuffer(n.RENDERBUFFER,ne),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ne)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),_e(y.__webglDepthbuffer,P,!1);else{const se=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,se,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(P,y,z){const se=i.get(P);y!==void 0&&ye(se.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Oe(P)}function ot(P){const y=P.texture,z=i.get(P),se=i.get(y);P.addEventListener("dispose",T);const ae=P.textures,ne=P.isWebGLCubeRenderTarget===!0,de=ae.length>1;if(de||(se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture()),se.__version=y.version,a.memory.textures++),ne){z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer[he]=[];for(let Se=0;Se<y.mipmaps.length;Se++)z.__webglFramebuffer[he][Se]=n.createFramebuffer()}else z.__webglFramebuffer[he]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){z.__webglFramebuffer=[];for(let he=0;he<y.mipmaps.length;he++)z.__webglFramebuffer[he]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(de)for(let he=0,Se=ae.length;he<Se;he++){const Ze=i.get(ae[he]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&Qe(P)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const Se=ae[he];z.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[he]);const Ze=s.convert(Se.format,Se.colorSpace),pe=s.convert(Se.type),Pe=v(Se.internalFormat,Ze,pe,Se.colorSpace,P.isXRRenderTarget===!0),Fe=Je(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,z.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,se.__webglTexture),me(n.TEXTURE_CUBE_MAP,y);for(let he=0;he<6;he++)if(y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)ye(z.__webglFramebuffer[he][Se],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,Se);else ye(z.__webglFramebuffer[he],P,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(y)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let he=0,Se=ae.length;he<Se;he++){const Ze=ae[he],pe=i.get(Ze);t.bindTexture(n.TEXTURE_2D,pe.__webglTexture),me(n.TEXTURE_2D,Ze),ye(z.__webglFramebuffer,P,Ze,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),m(Ze)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let he=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(he=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(he,se.__webglTexture),me(he,y),y.mipmaps&&y.mipmaps.length>0)for(let Se=0;Se<y.mipmaps.length;Se++)ye(z.__webglFramebuffer[Se],P,y,n.COLOR_ATTACHMENT0,he,Se);else ye(z.__webglFramebuffer,P,y,n.COLOR_ATTACHMENT0,he,0);m(y)&&p(he),t.unbindTexture()}P.depthBuffer&&Oe(P)}function je(P){const y=P.textures;for(let z=0,se=y.length;z<se;z++){const ae=y[z];if(m(ae)){const ne=S(P),de=i.get(ae).__webglTexture;t.bindTexture(ne,de),p(ne),t.unbindTexture()}}}const dt=[],D=[];function Ct(P){if(P.samples>0){if(Qe(P)===!1){const y=P.textures,z=P.width,se=P.height;let ae=n.COLOR_BUFFER_BIT;const ne=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(P),he=y.length>1;if(he)for(let Se=0;Se<y.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let Se=0;Se<y.length;Se++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),he){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[Se]);const Ze=i.get(y[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ze,0)}n.blitFramebuffer(0,0,z,se,0,0,z,se,ae,n.NEAREST),l===!0&&(dt.length=0,D.length=0,dt.push(n.COLOR_ATTACHMENT0+Se),P.depthBuffer&&P.resolveDepthBuffer===!1&&(dt.push(ne),D.push(ne),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Se=0;Se<y.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,de.__webglColorRenderbuffer[Se]);const Ze=i.get(y[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Ze,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const y=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function Je(P){return Math.min(r.maxSamples,P.samples)}function Qe(P){const y=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ie(P){const y=a.render.frame;u.get(P)!==y&&(u.set(P,y),P.update())}function ct(P,y){const z=P.colorSpace,se=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==Er&&z!==Mi&&(bt.getTransfer(z)===Et?(se!==Un||ae!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),y}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=j,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=K,this.setTexture3D=ce,this.setTextureCube=G,this.rebindTextures=ke,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Qe}function vv(n,e){function t(i,r=Mi){let s;const a=bt.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Fu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lu)return n.BYTE;if(i===Du)return n.SHORT;if(i===ts)return n.UNSIGNED_SHORT;if(i===sl)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===Iu)return n.ALPHA;if(i===Uu)return n.RGB;if(i===Un)return n.RGBA;if(i===Ou)return n.LUMINANCE;if(i===Bu)return n.LUMINANCE_ALPHA;if(i===gr)return n.DEPTH_COMPONENT;if(i===yr)return n.DEPTH_STENCIL;if(i===ku)return n.RED;if(i===ll)return n.RED_INTEGER;if(i===zu)return n.RG;if(i===cl)return n.RG_INTEGER;if(i===ul)return n.RGBA_INTEGER;if(i===js||i===Ys||i===$s||i===Zs)if(a===Et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ys)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$s)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Zs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bo||i===So||i===Mo||i===yo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===bo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===So)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Mo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eo||i===wo||i===Co)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Eo||i===wo)return a===Et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Co)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===To||i===Ao||i===Ro||i===Po||i===No||i===Lo||i===Do||i===Fo||i===Io||i===Uo||i===Oo||i===Bo||i===ko||i===zo)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===To)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ao)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ro)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Po)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===No)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lo)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Do)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fo)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Io)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Uo)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Oo)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bo)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ko)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zo)return a===Et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ks||i===Vo||i===Ho)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ks)return a===Et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ho)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vu||i===Go||i===Wo||i===Xo)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ks)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Go)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const _v={type:"move"};class io{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&h>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_v)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bv=`
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

}`;class Sv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new gn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rn({vertexShader:xv,fragmentShader:bv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new va(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mv extends Nr{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,g=null;const _=new Sv,m=t.getContextAttributes();let p=null,S=null;const v=[],b=[],R=new at;let E=null;const T=new Tn;T.viewport=new It;const A=new Tn;A.viewport=new It;const C=[T,A],x=new zf;let L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let fe=v[ie];return fe===void 0&&(fe=new io,v[ie]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ie){let fe=v[ie];return fe===void 0&&(fe=new io,v[ie]=fe),fe.getGripSpace()},this.getHand=function(ie){let fe=v[ie];return fe===void 0&&(fe=new io,v[ie]=fe),fe.getHandSpace()};function j(ie){const fe=b.indexOf(ie.inputSource);if(fe===-1)return;const ye=v[fe];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,c||a),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function Q(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",Z);for(let ie=0;ie<v.length;ie++){const fe=b[ie];fe!==null&&(b[ie]=null,v[ie].disconnect(fe))}L=null,W=null,_.reset(),e.setRenderTarget(p),f=null,h=null,d=null,r=null,S=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Rn(f.framebufferWidth,f.framebufferHeight,{format:Un,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,ye=null,_e=null;m.depth&&(_e=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?yr:gr,ye=m.stencil?Mr:Gi);const Te={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(Te),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Rn(h.textureWidth,h.textureHeight,{format:Un,type:di,depthTexture:new td(h.textureWidth,h.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Z(ie){for(let fe=0;fe<ie.removed.length;fe++){const ye=ie.removed[fe],_e=b.indexOf(ye);_e>=0&&(b[_e]=null,v[_e].disconnect(ye))}for(let fe=0;fe<ie.added.length;fe++){const ye=ie.added[fe];let _e=b.indexOf(ye);if(_e===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=b.length){b.push(ye),_e=Oe;break}else if(b[Oe]===null){b[Oe]=ye,_e=Oe;break}if(_e===-1)break}const Te=v[_e];Te&&Te.connect(ye)}}const K=new H,ce=new H;function G(ie,fe,ye){K.setFromMatrixPosition(fe.matrixWorld),ce.setFromMatrixPosition(ye.matrixWorld);const _e=K.distanceTo(ce),Te=fe.projectionMatrix.elements,Oe=ye.projectionMatrix.elements,ke=Te[14]/(Te[10]-1),ot=Te[14]/(Te[10]+1),je=(Te[9]+1)/Te[5],dt=(Te[9]-1)/Te[5],D=(Te[8]-1)/Te[0],Ct=(Oe[8]+1)/Oe[0],Je=ke*D,Qe=ke*Ct,Ie=_e/(-D+Ct),ct=Ie*-D;if(fe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ct),ie.translateZ(Ie),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Te[10]===-1)ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Le=ke+Ie,P=ot+Ie,y=Je-ct,z=Qe+(_e-ct),se=je*ot/P*Le,ae=dt*ot/P*Le;ie.projectionMatrix.makePerspective(y,z,se,ae,Le,P),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function q(ie,fe){fe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(fe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let fe=ie.near,ye=ie.far;_.texture!==null&&(_.depthNear>0&&(fe=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),x.near=A.near=T.near=fe,x.far=A.far=T.far=ye,(L!==x.near||W!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),L=x.near,W=x.far),T.layers.mask=ie.layers.mask|2,A.layers.mask=ie.layers.mask|4,x.layers.mask=T.layers.mask|A.layers.mask;const _e=ie.parent,Te=x.cameras;q(x,_e);for(let Oe=0;Oe<Te.length;Oe++)q(Te[Oe],_e);Te.length===2?G(x,T,A):x.projectionMatrix.copy(T.projectionMatrix),U(ie,x,_e)};function U(ie,fe,ye){ye===null?ie.matrix.copy(fe.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(fe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(fe.projectionMatrix),ie.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=ns*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let X=null;function me(ie,fe){if(u=fe.getViewerPose(c||a),g=fe,u!==null){const ye=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let _e=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,_e=!0);for(let Oe=0;Oe<ye.length;Oe++){const ke=ye[Oe];let ot=null;if(f!==null)ot=f.getViewport(ke);else{const dt=d.getViewSubImage(h,ke);ot=dt.viewport,Oe===0&&(e.setRenderTargetTextures(S,dt.colorTexture,h.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(S))}let je=C[Oe];je===void 0&&(je=new Tn,je.layers.enable(Oe),je.viewport=new It,C[Oe]=je),je.matrix.fromArray(ke.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(ke.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(ot.x,ot.y,ot.width,ot.height),Oe===0&&(x.matrix.copy(je.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),_e===!0&&x.cameras.push(je)}const Te=r.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Oe=d.getDepthInformation(ye[0]);Oe&&Oe.isValid&&Oe.texture&&_.init(e,Oe,r.renderState)}}for(let ye=0;ye<v.length;ye++){const _e=b[ye],Te=v[ye];_e!==null&&Te!==void 0&&Te.update(_e,fe,c||a)}X&&X(ie,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const $e=new id;$e.setAnimationLoop(me),this.setAnimationLoop=function(ie){X=ie},this.dispose=function(){}}}const Di=new hi,yv=new Dt;function Ev(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ku(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,v,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,S,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),v=S.envMap,b=S.envMapRotation;v&&(m.envMap.value=v,Di.copy(b),Di.x*=-1,Di.y*=-1,Di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(yv.makeRotationFromEuler(Di)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function wv(n,e,t,i){let r={},s={},a=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,v){const b=v.program;i.uniformBlockBinding(S,b)}function c(S,v){let b=r[S.id];b===void 0&&(g(S),b=u(S),r[S.id]=b,S.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(S,R);const E=e.render.frame;s[S.id]!==E&&(h(S),s[S.id]=E)}function u(S){const v=d();S.__bindingPointIndex=v;const b=n.createBuffer(),R=S.__size,E=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,R,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,b),b}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const v=r[S.id],b=S.uniforms,R=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,T=b.length;E<T;E++){const A=Array.isArray(b[E])?b[E]:[b[E]];for(let C=0,x=A.length;C<x;C++){const L=A[C];if(f(L,E,C,R)===!0){const W=L.__offset,j=Array.isArray(L.value)?L.value:[L.value];let Q=0;for(let Z=0;Z<j.length;Z++){const K=j[Z],ce=_(K);typeof K=="number"||typeof K=="boolean"?(L.__data[0]=K,n.bufferSubData(n.UNIFORM_BUFFER,W+Q,L.__data)):K.isMatrix3?(L.__data[0]=K.elements[0],L.__data[1]=K.elements[1],L.__data[2]=K.elements[2],L.__data[3]=0,L.__data[4]=K.elements[3],L.__data[5]=K.elements[4],L.__data[6]=K.elements[5],L.__data[7]=0,L.__data[8]=K.elements[6],L.__data[9]=K.elements[7],L.__data[10]=K.elements[8],L.__data[11]=0):(K.toArray(L.__data,Q),Q+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,W,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(S,v,b,R){const E=S.value,T=v+"_"+b;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const A=R[T];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return R[T]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(S){const v=S.uniforms;let b=0;const R=16;for(let T=0,A=v.length;T<A;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,L=C.length;x<L;x++){const W=C[x],j=Array.isArray(W.value)?W.value:[W.value];for(let Q=0,Z=j.length;Q<Z;Q++){const K=j[Q],ce=_(K),G=b%R,q=G%ce.boundary,U=G+q;b+=q,U!==0&&R-U<ce.storage&&(b+=R-U),W.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=ce.storage}}}const E=b%R;return E>0&&(b+=R-E),S.__size=b,S.__cache={},this}function _(S){const v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){const v=S.target;v.removeEventListener("dispose",m);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}class ld{constructor(e={}){const{canvas:t=lf(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const S=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Sn,this.toneMapping=wi,this.toneMappingExposure=1;const b=this;let R=!1,E=0,T=0,A=null,C=-1,x=null;const L=new It,W=new It;let j=null;const Q=new rt(0);let Z=0,K=t.width,ce=t.height,G=1,q=null,U=null;const X=new It(0,0,K,ce),me=new It(0,0,K,ce);let $e=!1;const ie=new ed;let fe=!1,ye=!1;const _e=new Dt,Te=new Dt,Oe=new H,ke=new It,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function dt(){return A===null?G:1}let D=i;function Ct(w,I){return t.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",oe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",be,!1),D===null){const I="webgl2";if(D=Ct(I,w),D===null)throw Ct(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Je,Qe,Ie,ct,Le,P,y,z,se,ae,ne,de,he,Se,Ze,pe,Pe,Fe,Be,Ae,et,We,vt,O;function Me(){Je=new Ig(D),Je.init(),We=new vv(D,Je),Qe=new Rg(D,Je,e,We),Ie=new mv(D,Je),Qe.reverseDepthBuffer&&h&&Ie.buffers.depth.setReversed(!0),ct=new Bg(D),Le=new nv,P=new gv(D,Je,Ie,Le,Qe,We,ct),y=new Ng(b),z=new Fg(b),se=new Xf(D),vt=new Tg(D,se),ae=new Ug(D,se,ct,vt),ne=new zg(D,ae,se,ct),Be=new kg(D,Qe,P),pe=new Pg(Le),de=new tv(b,y,z,Je,Qe,vt,pe),he=new Ev(b,Le),Se=new rv,Ze=new uv(Je),Fe=new Cg(b,y,z,Ie,ne,f,l),Pe=new fv(b,ne,Qe),O=new wv(D,ct,Qe,Ie),Ae=new Ag(D,Je,ct),et=new Og(D,Je,ct),ct.programs=de.programs,b.capabilities=Qe,b.extensions=Je,b.properties=Le,b.renderLists=Se,b.shadowMap=Pe,b.state=Ie,b.info=ct}Me();const te=new Mv(b,D);this.xr=te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=Je.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Je.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(K,ce,!1))},this.getSize=function(w){return w.set(K,ce)},this.setSize=function(w,I,Y=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,ce=I,t.width=Math.floor(w*G),t.height=Math.floor(I*G),Y===!0&&(t.style.width=w+"px",t.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(K*G,ce*G).floor()},this.setDrawingBufferSize=function(w,I,Y){K=w,ce=I,G=Y,t.width=Math.floor(w*Y),t.height=Math.floor(I*Y),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(X)},this.setViewport=function(w,I,Y,$){w.isVector4?X.set(w.x,w.y,w.z,w.w):X.set(w,I,Y,$),Ie.viewport(L.copy(X).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(me)},this.setScissor=function(w,I,Y,$){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,I,Y,$),Ie.scissor(W.copy(me).multiplyScalar(G).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(w){Ie.setScissorTest($e=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){U=w},this.getClearColor=function(w){return w.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(w=!0,I=!0,Y=!0){let $=0;if(w){let V=!1;if(A!==null){const le=A.texture.format;V=le===ul||le===cl||le===ll}if(V){const le=A.texture.type,we=le===di||le===Gi||le===ts||le===Mr||le===al||le===ol,Ne=Fe.getClearColor(),Ue=Fe.getClearAlpha(),Ye=Ne.r,qe=Ne.g,ze=Ne.b;we?(g[0]=Ye,g[1]=qe,g[2]=ze,g[3]=Ue,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=Ye,_[1]=qe,_[2]=ze,_[3]=Ue,D.clearBufferiv(D.COLOR,0,_))}else $|=D.COLOR_BUFFER_BIT}I&&($|=D.DEPTH_BUFFER_BIT),Y&&($|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",oe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",be,!1),Fe.dispose(),Se.dispose(),Ze.dispose(),Le.dispose(),y.dispose(),z.dispose(),ne.dispose(),vt.dispose(),O.dispose(),de.dispose(),te.dispose(),te.removeEventListener("sessionstart",ge),te.removeEventListener("sessionend",ve),Xe.stop()};function oe(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=ct.autoReset,I=Pe.enabled,Y=Pe.autoUpdate,$=Pe.needsUpdate,V=Pe.type;Me(),ct.autoReset=w,Pe.enabled=I,Pe.autoUpdate=Y,Pe.needsUpdate=$,Pe.type=V}function be(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function M(w){const I=w.target;I.removeEventListener("dispose",M),N(I)}function N(w){B(w),Le.remove(w)}function B(w){const I=Le.get(w).programs;I!==void 0&&(I.forEach(function(Y){de.releaseProgram(Y)}),w.isShaderMaterial&&de.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,Y,$,V,le){I===null&&(I=ot);const we=V.isMesh&&V.matrixWorld.determinant()<0,Ne=wt(w,I,Y,$,V);Ie.setMaterial($,we);let Ue=Y.index,Ye=1;if($.wireframe===!0){if(Ue=ae.getWireframeAttribute(Y),Ue===void 0)return;Ye=2}const qe=Y.drawRange,ze=Y.attributes.position;let xt=qe.start*Ye,Mt=(qe.start+qe.count)*Ye;le!==null&&(xt=Math.max(xt,le.start*Ye),Mt=Math.min(Mt,(le.start+le.count)*Ye)),Ue!==null?(xt=Math.max(xt,0),Mt=Math.min(Mt,Ue.count)):ze!=null&&(xt=Math.max(xt,0),Mt=Math.min(Mt,ze.count));const Ut=Mt-xt;if(Ut<0||Ut===1/0)return;vt.setup(V,$,Ne,Y,Ue);let Nt,St=Ae;if(Ue!==null&&(Nt=se.get(Ue),St=et,St.setIndex(Nt)),V.isMesh)$.wireframe===!0?(Ie.setLineWidth($.wireframeLinewidth*dt()),St.setMode(D.LINES)):St.setMode(D.TRIANGLES);else if(V.isLine){let Ve=$.linewidth;Ve===void 0&&(Ve=1),Ie.setLineWidth(Ve*dt()),V.isLineSegments?St.setMode(D.LINES):V.isLineLoop?St.setMode(D.LINE_LOOP):St.setMode(D.LINE_STRIP)}else V.isPoints?St.setMode(D.POINTS):V.isSprite&&St.setMode(D.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)St.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))St.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ve=V._multiDrawStarts,Zt=V._multiDrawCounts,yt=V._multiDrawCount,Pn=Ue?se.get(Ue).bytesPerElement:1,Xi=Le.get($).currentProgram.getUniforms();for(let _n=0;_n<yt;_n++)Xi.setValue(D,"_gl_DrawID",_n),St.render(Ve[_n]/Pn,Zt[_n])}else if(V.isInstancedMesh)St.renderInstances(xt,Ut,V.count);else if(Y.isInstancedBufferGeometry){const Ve=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Zt=Math.min(Y.instanceCount,Ve);St.renderInstances(xt,Ut,Zt)}else St.render(xt,Ut)};function J(w,I,Y){w.transparent===!0&&w.side===ai&&w.forceSinglePass===!1?(w.side=mn,w.needsUpdate=!0,lt(w,I,Y),w.side=Ci,w.needsUpdate=!0,lt(w,I,Y),w.side=ai):lt(w,I,Y)}this.compile=function(w,I,Y=null){Y===null&&(Y=w),p=Ze.get(Y),p.init(I),v.push(p),Y.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),w!==Y&&w.traverseVisible(function(V){V.isLight&&V.layers.test(I.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights();const $=new Set;return w.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const le=V.material;if(le)if(Array.isArray(le))for(let we=0;we<le.length;we++){const Ne=le[we];J(Ne,Y,V),$.add(Ne)}else J(le,Y,V),$.add(le)}),v.pop(),p=null,$},this.compileAsync=function(w,I,Y=null){const $=this.compile(w,I,Y);return new Promise(V=>{function le(){if($.forEach(function(we){Le.get(we).currentProgram.isReady()&&$.delete(we)}),$.size===0){V(w);return}setTimeout(le,10)}Je.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let ue=null;function k(w){ue&&ue(w)}function ge(){Xe.stop()}function ve(){Xe.start()}const Xe=new id;Xe.setAnimationLoop(k),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(w){ue=w,te.setAnimationLoop(w),w===null?Xe.stop():Xe.start()},te.addEventListener("sessionstart",ge),te.addEventListener("sessionend",ve),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera(I),I=te.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,I,A),p=Ze.get(w,v.length),p.init(I),v.push(p),Te.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ie.setFromProjectionMatrix(Te),ye=this.localClippingEnabled,fe=pe.init(this.clippingPlanes,ye),m=Se.get(w,S.length),m.init(),S.push(m),te.enabled===!0&&te.isPresenting===!0){const le=b.xr.getDepthSensingMesh();le!==null&&Ke(le,I,-1/0,b.sortObjects)}Ke(w,I,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(q,U),je=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,je&&Fe.addToRenderList(m,w),this.info.render.frame++,fe===!0&&pe.beginShadows();const Y=p.state.shadowsArray;Pe.render(Y,w,I),fe===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=m.opaque,V=m.transmissive;if(p.setupLights(),I.isArrayCamera){const le=I.cameras;if(V.length>0)for(let we=0,Ne=le.length;we<Ne;we++){const Ue=le[we];st($,V,w,Ue)}je&&Fe.render(w);for(let we=0,Ne=le.length;we<Ne;we++){const Ue=le[we];nt(m,w,Ue,Ue.viewport)}}else V.length>0&&st($,V,w,I),je&&Fe.render(w),nt(m,w,I);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(b,w,I),vt.resetDefaultState(),C=-1,x=null,v.pop(),v.length>0?(p=v[v.length-1],fe===!0&&pe.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ke(w,I,Y,$){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)Y=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ie.intersectsSprite(w)){$&&ke.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const we=ne.update(w),Ne=w.material;Ne.visible&&m.push(w,we,Ne,Y,ke.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ie.intersectsObject(w))){const we=ne.update(w),Ne=w.material;if($&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ke.copy(w.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),ke.copy(we.boundingSphere.center)),ke.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Ne)){const Ue=we.groups;for(let Ye=0,qe=Ue.length;Ye<qe;Ye++){const ze=Ue[Ye],xt=Ne[ze.materialIndex];xt&&xt.visible&&m.push(w,we,xt,Y,ke.z,ze)}}else Ne.visible&&m.push(w,we,Ne,Y,ke.z,null)}}const le=w.children;for(let we=0,Ne=le.length;we<Ne;we++)Ke(le[we],I,Y,$)}function nt(w,I,Y,$){const V=w.opaque,le=w.transmissive,we=w.transparent;p.setupLightsView(Y),fe===!0&&pe.setGlobalState(b.clippingPlanes,Y),$&&Ie.viewport(L.copy($)),V.length>0&&He(V,I,Y),le.length>0&&He(le,I,Y),we.length>0&&He(we,I,Y),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function st(w,I,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Rn(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?Xn:di,minFilter:ki,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const le=p.state.transmissionRenderTarget[$.id],we=$.viewport||L;le.setSize(we.z,we.w);const Ne=b.getRenderTarget();b.setRenderTarget(le),b.getClearColor(Q),Z=b.getClearAlpha(),Z<1&&b.setClearColor(16777215,.5),b.clear(),je&&Fe.render(Y);const Ue=b.toneMapping;b.toneMapping=wi;const Ye=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),fe===!0&&pe.setGlobalState(b.clippingPlanes,$),He(w,Y,$),P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le),Je.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ze=0,xt=I.length;ze<xt;ze++){const Mt=I[ze],Ut=Mt.object,Nt=Mt.geometry,St=Mt.material,Ve=Mt.group;if(St.side===ai&&Ut.layers.test($.layers)){const Zt=St.side;St.side=mn,St.needsUpdate=!0,ut(Ut,Y,$,Nt,St,Ve),St.side=Zt,St.needsUpdate=!0,qe=!0}}qe===!0&&(P.updateMultisampleRenderTarget(le),P.updateRenderTargetMipmap(le))}b.setRenderTarget(Ne),b.setClearColor(Q,Z),Ye!==void 0&&($.viewport=Ye),b.toneMapping=Ue}function He(w,I,Y){const $=I.isScene===!0?I.overrideMaterial:null;for(let V=0,le=w.length;V<le;V++){const we=w[V],Ne=we.object,Ue=we.geometry,Ye=$===null?we.material:$,qe=we.group;Ne.layers.test(Y.layers)&&ut(Ne,I,Y,Ue,Ye,qe)}}function ut(w,I,Y,$,V,le){w.onBeforeRender(b,I,Y,$,V,le),w.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),V.onBeforeRender(b,I,Y,$,w,le),V.transparent===!0&&V.side===ai&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,b.renderBufferDirect(Y,I,$,V,w,le),V.side=Ci,V.needsUpdate=!0,b.renderBufferDirect(Y,I,$,V,w,le),V.side=ai):b.renderBufferDirect(Y,I,$,V,w,le),w.onAfterRender(b,I,Y,$,V,le)}function lt(w,I,Y){I.isScene!==!0&&(I=ot);const $=Le.get(w),V=p.state.lights,le=p.state.shadowsArray,we=V.state.version,Ne=de.getParameters(w,V.state,le,I,Y),Ue=de.getProgramCacheKey(Ne);let Ye=$.programs;$.environment=w.isMeshStandardMaterial?I.environment:null,$.fog=I.fog,$.envMap=(w.isMeshStandardMaterial?z:y).get(w.envMap||$.environment),$.envMapRotation=$.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Ye===void 0&&(w.addEventListener("dispose",M),Ye=new Map,$.programs=Ye);let qe=Ye.get(Ue);if(qe!==void 0){if($.currentProgram===qe&&$.lightsStateVersion===we)return _t(w,Ne),qe}else Ne.uniforms=de.getUniforms(w),w.onBeforeCompile(Ne,b),qe=de.acquireProgram(Ne,Ue),Ye.set(Ue,qe),$.uniforms=Ne.uniforms;const ze=$.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=pe.uniform),_t(w,Ne),$.needsLights=Ft(w),$.lightsStateVersion=we,$.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),$.currentProgram=qe,$.uniformsList=null,qe}function ht(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Js.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function _t(w,I){const Y=Le.get(w);Y.outputColorSpace=I.outputColorSpace,Y.batching=I.batching,Y.batchingColor=I.batchingColor,Y.instancing=I.instancing,Y.instancingColor=I.instancingColor,Y.instancingMorph=I.instancingMorph,Y.skinning=I.skinning,Y.morphTargets=I.morphTargets,Y.morphNormals=I.morphNormals,Y.morphColors=I.morphColors,Y.morphTargetsCount=I.morphTargetsCount,Y.numClippingPlanes=I.numClippingPlanes,Y.numIntersection=I.numClipIntersection,Y.vertexAlphas=I.vertexAlphas,Y.vertexTangents=I.vertexTangents,Y.toneMapping=I.toneMapping}function wt(w,I,Y,$,V){I.isScene!==!0&&(I=ot),P.resetTextureUnits();const le=I.fog,we=$.isMeshStandardMaterial?I.environment:null,Ne=A===null?b.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Er,Ue=($.isMeshStandardMaterial?z:y).get($.envMap||we),Ye=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qe=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),ze=!!Y.morphAttributes.position,xt=!!Y.morphAttributes.normal,Mt=!!Y.morphAttributes.color;let Ut=wi;$.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ut=b.toneMapping);const Nt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,St=Nt!==void 0?Nt.length:0,Ve=Le.get($),Zt=p.state.lights;if(fe===!0&&(ye===!0||w!==x)){const an=w===x&&$.id===C;pe.setState($,w,an)}let yt=!1;$.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Zt.state.version||Ve.outputColorSpace!==Ne||V.isBatchedMesh&&Ve.batching===!1||!V.isBatchedMesh&&Ve.batching===!0||V.isBatchedMesh&&Ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ve.instancing===!1||!V.isInstancedMesh&&Ve.instancing===!0||V.isSkinnedMesh&&Ve.skinning===!1||!V.isSkinnedMesh&&Ve.skinning===!0||V.isInstancedMesh&&Ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ve.instancingMorph===!1&&V.morphTexture!==null||Ve.envMap!==Ue||$.fog===!0&&Ve.fog!==le||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==pe.numPlanes||Ve.numIntersection!==pe.numIntersection)||Ve.vertexAlphas!==Ye||Ve.vertexTangents!==qe||Ve.morphTargets!==ze||Ve.morphNormals!==xt||Ve.morphColors!==Mt||Ve.toneMapping!==Ut||Ve.morphTargetsCount!==St)&&(yt=!0):(yt=!0,Ve.__version=$.version);let Pn=Ve.currentProgram;yt===!0&&(Pn=lt($,I,V));let Xi=!1,_n=!1,Or=!1;const Tt=Pn.getUniforms(),yn=Ve.uniforms;if(Ie.useProgram(Pn.program)&&(Xi=!0,_n=!0,Or=!0),$.id!==C&&(C=$.id,_n=!0),Xi||x!==w){Ie.buffers.depth.getReversed()?(_e.copy(w.projectionMatrix),uf(_e),df(_e),Tt.setValue(D,"projectionMatrix",_e)):Tt.setValue(D,"projectionMatrix",w.projectionMatrix),Tt.setValue(D,"viewMatrix",w.matrixWorldInverse);const hn=Tt.map.cameraPosition;hn!==void 0&&hn.setValue(D,Oe.setFromMatrixPosition(w.matrixWorld)),Qe.logarithmicDepthBuffer&&Tt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Tt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),x!==w&&(x=w,_n=!0,Or=!0)}if(V.isSkinnedMesh){Tt.setOptional(D,V,"bindMatrix"),Tt.setOptional(D,V,"bindMatrixInverse");const an=V.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Tt.setValue(D,"boneTexture",an.boneTexture,P))}V.isBatchedMesh&&(Tt.setOptional(D,V,"batchingTexture"),Tt.setValue(D,"batchingTexture",V._matricesTexture,P),Tt.setOptional(D,V,"batchingIdTexture"),Tt.setValue(D,"batchingIdTexture",V._indirectTexture,P),Tt.setOptional(D,V,"batchingColorTexture"),V._colorsTexture!==null&&Tt.setValue(D,"batchingColorTexture",V._colorsTexture,P));const En=Y.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&Be.update(V,Y,Pn),(_n||Ve.receiveShadow!==V.receiveShadow)&&(Ve.receiveShadow=V.receiveShadow,Tt.setValue(D,"receiveShadow",V.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(yn.envMap.value=Ue,yn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&I.environment!==null&&(yn.envMapIntensity.value=I.environmentIntensity),_n&&(Tt.setValue(D,"toneMappingExposure",b.toneMappingExposure),Ve.needsLights&&xe(yn,Or),le&&$.fog===!0&&he.refreshFogUniforms(yn,le),he.refreshMaterialUniforms(yn,$,G,ce,p.state.transmissionRenderTarget[w.id]),Js.upload(D,ht(Ve),yn,P)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Js.upload(D,ht(Ve),yn,P),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Tt.setValue(D,"center",V.center),Tt.setValue(D,"modelViewMatrix",V.modelViewMatrix),Tt.setValue(D,"normalMatrix",V.normalMatrix),Tt.setValue(D,"modelMatrix",V.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const an=$.uniformsGroups;for(let hn=0,Aa=an.length;hn<Aa;hn++){const Ti=an[hn];O.update(Ti,Pn),O.bind(Ti,Pn)}}return Pn}function xe(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Ft(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,I,Y){Le.get(w.texture).__webglTexture=I,Le.get(w.depthTexture).__webglTexture=Y;const $=Le.get(w);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||Je.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const Y=Le.get(w);Y.__webglFramebuffer=I,Y.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,Y=0){A=w,E=I,T=Y;let $=!0,V=null,le=!1,we=!1;if(w){const Ue=Le.get(w);if(Ue.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(D.FRAMEBUFFER,null),$=!1;else if(Ue.__webglFramebuffer===void 0)P.setupRenderTarget(w);else if(Ue.__hasExternalTextures)P.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ze=w.depthTexture;if(Ue.__boundDepthTexture!==ze){if(ze!==null&&Le.has(ze)&&(w.width!==ze.image.width||w.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(w)}}const Ye=w.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(we=!0);const qe=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(qe[I])?V=qe[I][Y]:V=qe[I],le=!0):w.samples>0&&P.useMultisampledRTT(w)===!1?V=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[Y]:V=qe,L.copy(w.viewport),W.copy(w.scissor),j=w.scissorTest}else L.copy(X).multiplyScalar(G).floor(),W.copy(me).multiplyScalar(G).floor(),j=$e;if(Ie.bindFramebuffer(D.FRAMEBUFFER,V)&&$&&Ie.drawBuffers(w,V),Ie.viewport(L),Ie.scissor(W),Ie.setScissorTest(j),le){const Ue=Le.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+I,Ue.__webglTexture,Y)}else if(we){const Ue=Le.get(w.texture),Ye=I||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,Ye)}C=-1},this.readRenderTargetPixels=function(w,I,Y,$,V,le,we){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne){Ie.bindFramebuffer(D.FRAMEBUFFER,Ne);try{const Ue=w.texture,Ye=Ue.format,qe=Ue.type;if(!Qe.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-$&&Y>=0&&Y<=w.height-V&&D.readPixels(I,Y,$,V,We.convert(Ye),We.convert(qe),le)}finally{const Ue=A!==null?Le.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(w,I,Y,$,V,le,we){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&we!==void 0&&(Ne=Ne[we]),Ne){const Ue=w.texture,Ye=Ue.format,qe=Ue.type;if(!Qe.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-$&&Y>=0&&Y<=w.height-V){Ie.bindFramebuffer(D.FRAMEBUFFER,Ne);const ze=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.bufferData(D.PIXEL_PACK_BUFFER,le.byteLength,D.STREAM_READ),D.readPixels(I,Y,$,V,We.convert(Ye),We.convert(qe),0);const xt=A!==null?Le.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(D.FRAMEBUFFER,xt);const Mt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await cf(D,Mt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ze),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,le),D.deleteBuffer(ze),D.deleteSync(Mt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,Y=0){w.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const $=Math.pow(2,-Y),V=Math.floor(w.image.width*$),le=Math.floor(w.image.height*$),we=I!==null?I.x:0,Ne=I!==null?I.y:0;P.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,we,Ne,V,le),Ie.unbindTexture()};const jt=D.createFramebuffer(),sn=D.createFramebuffer();this.copyTextureToTexture=function(w,I,Y=null,$=null,V=0,le=null){w.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,w=arguments[1],I=arguments[2],le=arguments[3]||0,Y=null),le===null&&(V!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=V,V=0):le=0);let we,Ne,Ue,Ye,qe,ze,xt,Mt,Ut;const Nt=w.isCompressedTexture?w.mipmaps[le]:w.image;if(Y!==null)we=Y.max.x-Y.min.x,Ne=Y.max.y-Y.min.y,Ue=Y.isBox3?Y.max.z-Y.min.z:1,Ye=Y.min.x,qe=Y.min.y,ze=Y.isBox3?Y.min.z:0;else{const En=Math.pow(2,-V);we=Math.floor(Nt.width*En),Ne=Math.floor(Nt.height*En),w.isDataArrayTexture?Ue=Nt.depth:w.isData3DTexture?Ue=Math.floor(Nt.depth*En):Ue=1,Ye=0,qe=0,ze=0}$!==null?(xt=$.x,Mt=$.y,Ut=$.z):(xt=0,Mt=0,Ut=0);const St=We.convert(I.format),Ve=We.convert(I.type);let Zt;I.isData3DTexture?(P.setTexture3D(I,0),Zt=D.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(P.setTexture2DArray(I,0),Zt=D.TEXTURE_2D_ARRAY):(P.setTexture2D(I,0),Zt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,I.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,I.unpackAlignment);const yt=D.getParameter(D.UNPACK_ROW_LENGTH),Pn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Xi=D.getParameter(D.UNPACK_SKIP_PIXELS),_n=D.getParameter(D.UNPACK_SKIP_ROWS),Or=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ye),D.pixelStorei(D.UNPACK_SKIP_ROWS,qe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze);const Tt=w.isDataArrayTexture||w.isData3DTexture,yn=I.isDataArrayTexture||I.isData3DTexture;if(w.isDepthTexture){const En=Le.get(w),an=Le.get(I),hn=Le.get(En.__renderTarget),Aa=Le.get(an.__renderTarget);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,hn.__webglFramebuffer),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let Ti=0;Ti<Ue;Ti++)Tt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.get(w).__webglTexture,V,ze+Ti),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.get(I).__webglTexture,le,Ut+Ti)),D.blitFramebuffer(Ye,qe,we,Ne,xt,Mt,we,Ne,D.DEPTH_BUFFER_BIT,D.NEAREST);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(V!==0||w.isRenderTargetTexture||Le.has(w)){const En=Le.get(w),an=Le.get(I);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,jt),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,sn);for(let hn=0;hn<Ue;hn++)Tt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,En.__webglTexture,V,ze+hn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,En.__webglTexture,V),yn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,an.__webglTexture,le,Ut+hn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,an.__webglTexture,le),V!==0?D.blitFramebuffer(Ye,qe,we,Ne,xt,Mt,we,Ne,D.COLOR_BUFFER_BIT,D.NEAREST):yn?D.copyTexSubImage3D(Zt,le,xt,Mt,Ut+hn,Ye,qe,we,Ne):D.copyTexSubImage2D(Zt,le,xt,Mt,Ye,qe,we,Ne);Ie.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else yn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(Zt,le,xt,Mt,Ut,we,Ne,Ue,St,Ve,Nt.data):I.isCompressedArrayTexture?D.compressedTexSubImage3D(Zt,le,xt,Mt,Ut,we,Ne,Ue,St,Nt.data):D.texSubImage3D(Zt,le,xt,Mt,Ut,we,Ne,Ue,St,Ve,Nt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,le,xt,Mt,we,Ne,St,Ve,Nt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,le,xt,Mt,Nt.width,Nt.height,St,Nt.data):D.texSubImage2D(D.TEXTURE_2D,le,xt,Mt,we,Ne,St,Ve,Nt);D.pixelStorei(D.UNPACK_ROW_LENGTH,yt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Xi),D.pixelStorei(D.UNPACK_SKIP_ROWS,_n),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Or),le===0&&I.generateMipmaps&&D.generateMipmap(Zt),Ie.unbindTexture()},this.copyTextureToTexture3D=function(w,I,Y=null,$=null,V=0){return w.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,w=arguments[2],I=arguments[3],V=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,I,Y,$,V)},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&P.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?P.setTextureCube(w,0):w.isData3DTexture?P.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?P.setTexture2DArray(w,0):P.setTexture2D(w,0),Ie.unbindTexture()},this.resetState=function(){E=0,T=0,A=null,Ie.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=bt._getDrawingBufferColorSpace(e),t.unpackColorSpace=bt._getUnpackColorSpace()}}const cd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cv=new gl(-1,1,1,-1,0,1);class Tv extends vn{constructor(){super(),this.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dn([0,2,0,0,2,0],2))}}const Av=new Tv;class _l{constructor(e){this._mesh=new Gn(Av,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rv extends Ir{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=is.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new _l(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xc extends Ir{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Pv extends Ir{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Nv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new at);this._width=i.width,this._height=i.height,t=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rv(cd),this.copyPass.material.blending=Wn,this.clock=new Vf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xc!==void 0&&(a instanceof Xc?i=!0:a instanceof Pv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lv extends Ir{constructor(e,t,i=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Dv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Cr extends Ir{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new at(e.x,e.y):new at(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(s,a,{type:Xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const h=new Rn(s,a,{type:Xn});h.texture.name="UnrealBloomPass.h"+d,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const f=new Rn(s,a,{type:Xn});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=Dv;this.highPassUniforms=is.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new at(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=cd;this.copyUniforms=is.clone(u.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Si,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new pl,this.fsQuad=new _l(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new at(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Cr.BlurDirectionX=new at(1,0);Cr.BlurDirectionY=new at(0,1);const Fv={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class Iv extends Ir{constructor(e,t,i){super(),this.scene=e,this.camera=t;const r=i.focus!==void 0?i.focus:1,s=i.aperture!==void 0?i.aperture:.025,a=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Rn(1,1,{minFilter:Mn,magFilter:Mn,type:Xn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new nd,this.materialDepth.depthPacking=Hu,this.materialDepth.blending=Wn;const o=Fv,l=is.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=r,l.aspect.value=t.aspect,l.aperture.value=s,l.maxblur.value=a,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new rn({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new _l(this.materialBokeh),this._oldClearColor=new rt}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),s=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=s}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}class Uv{parse(e){let t="",i=0,r=0,s=0;const a=new H,o=new rt,l=new H,c=new at,u=[];function d(g){let _=0,m=0,p=0;const S=g.geometry,v=new tt,b=S.getAttribute("position"),R=S.getAttribute("normal"),E=S.getAttribute("uv"),T=S.getIndex();if(t+="o "+g.name+`
`,g.material&&g.material.name&&(t+="usemtl "+g.material.name+`
`),b!==void 0)for(let A=0,C=b.count;A<C;A++,_++)a.fromBufferAttribute(b,A),a.applyMatrix4(g.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z+`
`;if(E!==void 0)for(let A=0,C=E.count;A<C;A++,p++)c.fromBufferAttribute(E,A),t+="vt "+c.x+" "+c.y+`
`;if(R!==void 0){v.getNormalMatrix(g.matrixWorld);for(let A=0,C=R.count;A<C;A++,m++)l.fromBufferAttribute(R,A),l.applyMatrix3(v).normalize(),t+="vn "+l.x+" "+l.y+" "+l.z+`
`}if(T!==null)for(let A=0,C=T.count;A<C;A+=3){for(let x=0;x<3;x++){const L=T.getX(A+x)+1;u[x]=i+L+(R||E?"/"+(E?r+L:"")+(R?"/"+(s+L):""):"")}t+="f "+u.join(" ")+`
`}else for(let A=0,C=b.count;A<C;A+=3){for(let x=0;x<3;x++){const L=A+x+1;u[x]=i+L+(R||E?"/"+(E?r+L:"")+(R?"/"+(s+L):""):"")}t+="f "+u.join(" ")+`
`}i+=_,r+=p,s+=m}function h(g){let _=0;const m=g.geometry,p=g.type,S=m.getAttribute("position");if(t+="o "+g.name+`
`,S!==void 0)for(let v=0,b=S.count;v<b;v++,_++)a.fromBufferAttribute(S,v),a.applyMatrix4(g.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z+`
`;if(p==="Line"){t+="l ";for(let v=1,b=S.count;v<=b;v++)t+=i+v+" ";t+=`
`}if(p==="LineSegments")for(let v=1,b=v+1,R=S.count;v<R;v+=2,b=v+1)t+="l "+(i+v)+" "+(i+b)+`
`;i+=_}function f(g){let _=0;const m=g.geometry,p=m.getAttribute("position"),S=m.getAttribute("color");if(t+="o "+g.name+`
`,p!==void 0){for(let v=0,b=p.count;v<b;v++,_++)a.fromBufferAttribute(p,v),a.applyMatrix4(g.matrixWorld),t+="v "+a.x+" "+a.y+" "+a.z,S!==void 0&&(o.fromBufferAttribute(S,v),bt.fromWorkingColorSpace(o,Sn),t+=" "+o.r+" "+o.g+" "+o.b),t+=`
`;t+="p ";for(let v=1,b=p.count;v<=b;v++)t+=i+v+" ";t+=`
`}i+=_}return e.traverse(function(g){g.isMesh===!0&&d(g),g.isLine===!0&&h(g),g.isPoints===!0&&f(g)}),t}}const Ov="textured timbre colors",Bv={inputGain:.91,freqNormMin:16,freqNormMax:2e4,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,particlesByFrame:5e3,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"y-set-norm-frequency",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:0},{id:"x-set-time",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"((time+10*binMagnitude)/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"z coordinate",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"normFreq-1-time"}],order:2},{id:"hue",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",input:"binPhaseDeviation"}],order:3},{id:"red",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"red",input:"spectralCentroid"}],order:4},{id:"green",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",expression:"1-pow(binPhaseDeviation, 0.3)"}],order:5},{id:"blue",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"pow(binPhaseDeviation, 0.3)"}],order:6},{id:"luma",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:7},{id:"size",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) *2"}],order:8},{id:"shape",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:9},{id:"amplitude brightness",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*1.5"}],order:10},{id:"thinning",group:"count",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*0.5"}],order:11},{id:"saturation",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"1-spectralRolloff"}],order:12}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::Appearance"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"color",selectedGroupName:"color",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},kv={name:Ov,params:Bv},zv={menu:{file:"File",view:"View",settings:"Settings",rules:"Rules",collapse:"Collapse"},file:{project:"Project",projectNew:"New Project",projectLoad:"Load",projectSave:"Save",projectSaveAs:"Save As",presets:"Presets",presetLoad:"Load",presetUpload:"Upload",presetSave:"Save",presetSaveProject:"Save",presetSaveLocal:"Save Local",presetRemove:"Remove",presetSelectPlaceholder:"Select preset",presetNamePlaceholder:"Preset name",export:"Export",exportImage:"PNG",exportImageNoBg:"PNG transparent",exportVideo:"Video",exportObj:"OBJ"},view:{canvasSize:"Canvas Size",width:"Width",height:"Height",canvasZoom:"Canvas Zoom %",backgroundColor:"Background Color",cameraPosition:"Camera Position",cameraTarget:"Camera Target",cameraReset:"Reset Camera",cameraFit:"Fit",cameraClean:"Clean",projection:"Projection",projectionAxo:"Axonometry",projectionPerspective:"Perspective",axoPreset:"Axo Preset",axoIsometric:"Isometry",axoOrthoXY:"Orthogonal XY",axoOrthoXZ:"Orthogonal XZ",axoOrthoYZ:"Orthogonal YZ",angleOfView:"Angle Of View",blending:"Blending",postProcessing:"Post-Processing",postProcessingEnabled:"Enable Post-Processing",bloomEnabled:"Bloom Enabled",bloomStrength:"Bloom Strength",bloomRadius:"Bloom Radius",bloomThreshold:"Bloom Threshold",bokehEnabled:"Bokeh Enabled",bokehFocus:"Bokeh Focus",bokehAperture:"Bokeh Aperture",bokehMaxBlur:"Bokeh Max Blur",guides:"Guides",guideAxes:"Origin Axes",guideCoordinates:"Coordinate Guides"},settings:{sensitivity:"Sensitivity",audioResolution:"Audio Resolution",particleDefaultSize:"Particle Default Size",particleCapacity:"Particle Capacity",spawnRate:"Spawn Rate",activityInterval:"Activity Interval",frequencyRange:"Frequency Range",volume:"Volume",instability:"Instability",attackSharpness:"Attack Sharpness",energy:"Energy",sharpness:"Sharpness",activity:"Activity",noisiness:"Noisiness",sliders:"Sliders",normalizationRanges:"Normalization Ranges",resetDefaults:"Reset Defaults"},rules:{title:"Rules",condition:"Condition",addCondition:"If",when:"When",selectValue:"Select value",removeCondition:"Remove condition",always:"always",expression:"Expression",detailVariable:"Detail Variable",overallVariable:"Overall Variable",targetParticles:"Particles",targetLines:"Lines",targetBackground:"Background",targetCamera:"Camera",undefined:"undefined",insertVariable:"Insert variable...",detailVariables:"Detail Variables",overallVariables:"Overall Variables",mathPlaceholder:"Type math or number and add",addMath:"Add Math",clearTokens:"Clear",tokenEditorPlaceholder:"Build expression with variables and math actions",insertHere:"Insert",insertToken:"Insert token...",number:"Number",mathActions:"Math Actions",mathValue:"Value",mathAdd:"Add",mathSubtract:"Subtract",mathMultiply:"Multiply",mathDivide:"Divide",mathParentheses:"Parentheses"}},Vv=[{id:"binMagnitude",group:"detail",label:"Detail Volume",legacyName:"binMagnitude",description:"Per-frequency volume of the current bin."},{id:"binRMSEnergy",group:"detail",label:"Detail Energy",legacyName:"binRMSEnergy",description:"Per-frequency RMS energy for the current bin."},{id:"frequencyHz",group:"detail",label:"Frequency Hz",legacyName:"frequencyHz",description:"Physical frequency measured in Hz."},{id:"normFreq",group:"detail",label:"Frequency Normalized",legacyName:"normFreq",description:"Physical frequency normalized into a 0-1 range."},{id:"notePitchClass",group:"detail",label:"Musical Note",legacyName:"notePitchClass",description:"High value means a higher note within the chromatic scale."},{id:"pan",group:"detail",label:"Pan",legacyName:"pan",description:"Left-to-right stereo value."},{id:"octave",group:"detail",label:"Octave",legacyName:"octave",description:"High value means a higher register."},{id:"binAttackTime",group:"detail",label:"Attack Sharpness",legacyName:"binAttackTime",description:"High value means a very fast, snappy start to the sound."},{id:"binEnvelope",group:"detail",label:"Envelope",legacyName:"binEnvelope",description:"High value means the sound is currently at its loudest point in its cycle."},{id:"binEnvelopeState",group:"detail",label:"Envelope State",legacyName:"binEnvelopeState",description:"Current ADSR phase of a specific frequency bin."},{id:"binFlux",group:"detail",label:"Activity",legacyName:"binFlux",description:"High value means the sound or tone is changing rapidly."},{id:"binPhase",group:"detail",label:"Phase",legacyName:"binPhase",description:"High value means the wave is at the top of its cycle."},{id:"binPhaseDeviation",group:"detail",label:"Instability",legacyName:"binPhaseDeviation",description:"High value means phase is shifting unpredictably."},{id:"amplitude",group:"overall",label:"Volume",legacyName:"amplitude",description:"Volume of the current frame."},{id:"high",group:"overall",label:"High Tones",legacyName:"high",description:"Volume of the high frequency range."},{id:"mid",group:"overall",label:"Mid Tones",legacyName:"mid",description:"Volume of the mid frequency range."},{id:"bass",group:"overall",label:"Low Tones",legacyName:"bass",description:"Volume of the low frequency range."},{id:"deltaTime",group:"overall",label:"Delta Time",legacyName:"deltaTime",description:"Elapsed time between current frame and previous frame."},{id:"peakFreq",group:"overall",label:"Peak Frequency",legacyName:"peakFreq",description:"How high the loudest detected frequency is."},{id:"time",group:"overall",label:"Current Time",legacyName:"time",description:"Timestamp of the audio file."},{id:"chromagram",group:"overall",label:"Complexity",legacyName:"chromagram",description:"High value means a rich multi-note harmonic profile."},{id:"globalRmsEnergy",group:"overall",label:"Energy",legacyName:"globalRmsEnergy",description:"Average volume of the current frame."},{id:"inharmonicity",group:"overall",label:"Dissonance",legacyName:"inharmonicity",description:"High value means overtones are out of tune with the fundamental."},{id:"peakAmplitude",group:"overall",label:"Peak Volume",legacyName:"peakAmplitude",description:"High value means the loudest point is near maximum."},{id:"spectralCentroid",group:"overall",label:"Sharpness",legacyName:"spectralCentroid",description:"High value means a high-frequency dominant sound."},{id:"spectralFlatness",group:"overall",label:"Noisiness",legacyName:"spectralFlatness",description:"High value means noisy; low value means pure tone."},{id:"spectralFlux",group:"overall",label:"Activity",legacyName:"spectralFlux",description:"High value means sound is changing rapidly."},{id:"spectralRolloff",group:"overall",label:"Brightness",legacyName:"spectralRolloff",description:"High value means the sound includes many high frequencies."},{id:"spectralSkewness",group:"overall",label:"Imbalance",legacyName:"spectralSkewness",description:"High value means energy is weighted toward one end of the spectrum."},{id:"spectralSpread",group:"overall",label:"Spread",legacyName:"spectralSpread",description:"High value means the sound covers a wide frequency spread."},{id:"zeroCrossingRate",group:"overall",label:"Rattle",legacyName:"zeroCrossingRate",description:"High value means sharp high-frequency clatter."},{id:"canvasHeightPx",group:"overall",label:"Canvas Height",legacyName:"canvasHeightPx",description:"Canvas height measured in pixels."},{id:"canvasWidthPx",group:"overall",label:"Canvas Width",legacyName:"canvasWidthPx",description:"Canvas width measured in pixels."},{id:"audioLengthSec",group:"overall",label:"Audio Length",legacyName:"audioLengthSec",description:"Audio file length measured in seconds."}],Hv={uiText:zv,ruleVariables:Vv},ud=Hv,Ur=Object.freeze(ud.ruleVariables||[]),re=Object.freeze(ud.uiText||{});function Tr(n){return Ur.filter(e=>e.group===n)}function Yo(n){return Ur.find(e=>e.id===n)||null}const Gv=Object.freeze({binMagnitude:[0,1],binPhase:[0,1],binFlux:[-1,1],binPhaseDeviation:[0,1],binAttackTime:[0,1],binEnvelope:[0,3],binEnvelopeState:[0,3],binRMSEnergy:[0,1],frequencyHz:[0,22050],notePitchClass:[0,11],octave:[-2,12],normFreq:[0,1],pan:[-1,1],amplitude:[0,1],bass:[0,1],mid:[0,1],high:[0,1],peakFreq:[0,22050],globalRmsEnergy:[0,1],peakAmplitude:[0,1],zeroCrossingRate:[0,1],spectralCentroid:[0,1],spectralFlux:[0,1],spectralFlatness:[0,1],spectralRolloff:[0,1],spectralSpread:[0,1],spectralSkewness:[0,1],chromagram:[0,1],inharmonicity:[0,1],time:[0,Number.POSITIVE_INFINITY],deltaTime:[0,1],canvasWidthPx:[0,Number.POSITIVE_INFINITY],canvasHeightPx:[0,Number.POSITIVE_INFINITY],audioLengthSec:[0,Number.POSITIVE_INFINITY]}),Wv=Ur.map(n=>({id:n.id,type:"number",range:Gv[n.id]||[0,1],category:n.group,label:n.label,legacyName:n.legacyName,description:n.description})),Xv=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"targetX",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetY",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetZ",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"angleOfView",type:"number",range:[20,120],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"luma",type:"number",range:[0,255],targets:["spawnedParticles","allParticles","lines","background"]},{id:"rgb",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"hsv",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]},{id:"xStart",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"xEnd",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"yStart",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"yEnd",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"zStart",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"zEnd",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"thickness",type:"number",range:[0,64],targets:["lines"]},{id:"lineCount",type:"number",range:[0,1],targets:["lines"]}],xl=Object.freeze(["spawnedParticles","allParticles","lines","background","camera"]),dd=Object.freeze(["spawnedOnly","allLivingFrame"]),hd=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),fd=Object.freeze(["always",">",">=","<","<=","==","!="]),xa=Object.freeze({version:1,entries:Object.freeze(Wv.map(n=>Object.freeze({...n})))}),bl=Object.freeze({version:1,entries:Object.freeze(Xv.map(n=>Object.freeze({...n})))});new Map(xa.entries.map(n=>[n.id,n]));new Map(bl.entries.map(n=>[n.id,n]));function qv(){return xa}function jv(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function Yv(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function qc(n,e){if(typeof n!="string")return null;const t=Yv(n);if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:\[\]'\"]+$/.test(t))return"Expression contains unsupported characters.";if(!jv(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","palette","gradient","matchLuma","rgb","hsv","PI","E","true","false"]),s=t.replace(/'[^'\\]*(?:\\.[^'\\]*)*'/g," ").replace(/"[^"\\]*(?:\\.[^"\\]*)*"/g," ").match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const a of s)if(!i.has(a))return`Expression references unknown identifier: ${a}`;return null}function pd(n){return xl.includes(n==null?void 0:n.target)?n.target:String((n==null?void 0:n.context)||"").toLowerCase().includes("line")?"lines":(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function $v(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:xl).includes(e)}function Zv(n,e={input:xa,output:bl}){var d,h,f,g,_;const t=[],i=[],r=[],s=new Map((((d=e.input)==null?void 0:d.entries)??[]).map(m=>[m.id,m])),a=new Map((((h=e.output)==null?void 0:h.entries)??[]).map(m=>[m.id,m]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};dd.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=pd(n);if(xl.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(f=n.condition)!=null&&f.operator&&!fd.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((g=n.condition)==null?void 0:g.expression)!==void 0){const m=qc(n.condition.expression,s);m&&t.push(`Condition expression invalid: ${m}`)}const l=(_=n.condition)==null?void 0:_.input;l&&!s.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],u=new Map;return c.forEach((m,p)=>{const S=m==null?void 0:m.output;if(!S||!a.has(S)){t.push(`Unknown action output at index ${p}: ${String(S)}`);return}const v=a.get(S);if($v(v,o)||t.push(`Output ${S} is not valid for target ${o} at index ${p}`),m!=null&&m.operator&&!hd.includes(m.operator)&&t.push(`Unknown action operator at index ${p}: ${String(m.operator)}`),v.type==="enum"&&(m==null?void 0:m.value)!==void 0&&!v.values.includes(m.value)&&t.push(`Invalid enum value for ${S} at index ${p}: ${String(m.value)}. Allowed: ${v.values.join("|")}`),(m==null?void 0:m.operator)==="set"){const R=u.get(S);R!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:S,overriddenActionIndex:R,winningActionIndex:p,resolution:"latter-executes"}),i.push(`Contradiction on ${S}: action ${p} overrides action ${R}.`)),u.set(S,p)}const b=m==null?void 0:m.input;if(b&&!s.has(b)&&t.push(`Unknown action input at index ${p}: ${b}`),(m==null?void 0:m.expression)!==void 0){const R=qc(m.expression,s);R&&t.push(`Action expression invalid at index ${p}: ${R}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function md(n,e={input:xa,output:bl}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((s,a)=>{var c,u,d;const o={id:typeof(s==null?void 0:s.id)=="string"&&s.id.trim()?s.id.trim():`rule-${a}`,group:typeof(s==null?void 0:s.group)=="string"?s.group:"",subgroup:typeof(s==null?void 0:s.subgroup)=="string"?s.subgroup:"",enabled:(s==null?void 0:s.enabled)!==!1,target:pd(s),scope:dd.includes(s==null?void 0:s.scope)?s.scope:"spawnedOnly",condition:s!=null&&s.condition&&typeof s.condition=="object"?{...s.condition}:{operator:"always"},actions:Array.isArray(s==null?void 0:s.actions)?s.actions.map(h=>({...h})):[],order:Number.isFinite(s==null?void 0:s.order)?Number(s.order):a};o.condition.operator||(o.condition.operator="always"),fd.includes(o.condition.operator)||(o.condition.operator="always"),(c=o.condition)!=null&&c.input&&(o.condition.input=String(o.condition.input)),(u=o.condition)!=null&&u.valueInput&&(o.condition.valueInput=String(o.condition.valueInput)),typeof((d=o.condition)==null?void 0:d.expression)=="string"&&(o.condition.expression=o.condition.expression),o.scope=o.target==="spawnedParticles"||o.target==="lines"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(h=>h&&typeof h=="object").map(h=>({operator:hd.includes(h.operator)?h.operator:"set",output:h.output,value:h.value,input:h.input,expression:h.expression}));const l=Zv(o,e);l.ok?i.push(o):r.push({id:o.id,index:a,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const Kv="seesound_user_defaults_v4",gd="seesound_disabled_v4",vd="seesound_user_presets_v1",_d="seesound_hidden_root_presets_v1",Jv=Object.assign({"../../../presets/linear textured.json":kv}),aa=1,Qv={logCompilerStatus:!1,logCompilerTiming:!1},rs=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:aa,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],standaloneGroups:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""}});function ba(n){const e=n&&typeof n=="object"?n:{};return{collapsedGroups:Array.isArray(e.collapsedGroups)?e.collapsedGroups.map(t=>String(t||"").trim()).filter(Boolean):[],collapsedSubgroups:[],collapsedRules:Array.isArray(e.collapsedRules)?e.collapsedRules.map(t=>String(t||"").trim()).filter(Boolean):[],selectedContextGroup:String(e.selectedContextGroup||"spawnedParticles"),selectedGroupPath:String(e.selectedGroupPath||e.selectedGroupName||""),selectedGroupName:String(e.selectedGroupPath||e.selectedGroupName||""),selectedSubgroup:"",standaloneGroups:Array.isArray(e.standaloneGroups)?e.standaloneGroups.map(t=>String(t||"").trim()).filter(Boolean):[]}}function Sl(n){return Array.isArray(n)?n.map((e,t)=>{if(!e||typeof e!="object")return null;const i=typeof e.id=="string"&&e.id.trim()?e.id.trim():`palette-${t+1}`,r=e.type==="continuous"||e.type==="discrete"?e.type:"discrete",s=Array.isArray(e.colors)?e.colors:[];return{...e,id:i,type:r,colors:s}}).filter(Boolean):[]}function en({key:n,label:e,min:t,max:i,step:r,def:s,unit:a,desc:o}){return{key:n,group:"inputProcessing",label:e,min:t,max:i,step:r,default:s,unit:a,desc:o,canDisable:!1}}const Ml=[{key:"inputGain",group:"inputGain",label:"Sensitivity",min:0,max:3,step:.01,default:1,unit:"×",desc:"Global input gain scaler applied before analysis and spawning.",canDisable:!1},{key:"freqNormMin",group:"inputProcessing",label:"Frequency Range Min",min:16,max:2e4,step:1,default:40,unit:"Hz",desc:"Lower bound for frequency normalization.",canDisable:!1},{key:"freqNormMax",group:"inputProcessing",label:"Frequency Range Max",min:16,max:2e4,step:1,default:12e3,unit:"Hz",desc:"Upper bound for frequency normalization.",canDisable:!1},{key:"fftSize",group:"inputProcessing",label:"Audio Resolution",default:2048,unit:"",desc:"FFT analysis size. Higher values increase frequency detail.",isDropdown:!0,dropdownOptions:[{label:"512",value:512},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096},{label:"8192",value:8192},{label:"16384",value:16384}],canDisable:!1},{key:"fluxWindowFrames",group:"inputProcessing",label:"Activity Interval",min:1,max:64,step:1,default:10,unit:"frames",desc:"Rolling frame window used to smooth activity detection.",canDisable:!1},en({key:"binMagnitudeNormMin",label:"Volume Min",min:-120,max:0,step:1,def:-70,unit:"dBFS",desc:"Normalization lower bound for per-bin volume."}),en({key:"binMagnitudeNormMax",label:"Volume Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for per-bin volume."}),en({key:"binFluxNormMin",label:"Activity Detail Min",min:0,max:2,step:.001,def:0,unit:"delta",desc:"Normalization lower bound for per-frequency activity."}),en({key:"binFluxNormMax",label:"Activity Detail Max",min:0,max:2,step:.001,def:.5,unit:"delta",desc:"Normalization upper bound for per-frequency activity."}),en({key:"binPhaseDeviationNormMin",label:"Instability Min",min:0,max:3.14,step:.001,def:0,unit:"rad",desc:"Normalization lower bound for per-bin instability."}),en({key:"binPhaseDeviationNormMax",label:"Instability Max",min:0,max:3.14,step:.001,def:3.14,unit:"rad",desc:"Normalization upper bound for per-bin instability."}),en({key:"binAttackTimeNormMin",label:"Attack Sharpness Min",min:0,max:2e3,step:1,def:5,unit:"ms",desc:"Normalization lower bound for per-bin attack sharpness."}),en({key:"binAttackTimeNormMax",label:"Attack Sharpness Max",min:0,max:2e3,step:1,def:500,unit:"ms",desc:"Normalization upper bound for per-bin attack sharpness."}),en({key:"globalRmsNormMin",label:"Energy Min",min:-120,max:0,step:1,def:-60,unit:"dBFS",desc:"Normalization lower bound for frame energy."}),en({key:"globalRmsNormMax",label:"Energy Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for frame energy."}),en({key:"spectralCentroidNormMin",label:"Sharpness Min",min:16,max:22050,step:1,def:150,unit:"Hz",desc:"Normalization lower bound for spectral sharpness."}),en({key:"spectralCentroidNormMax",label:"Sharpness Max",min:16,max:22050,step:1,def:8e3,unit:"Hz",desc:"Normalization upper bound for spectral sharpness."}),en({key:"globalSpectralFluxNormMin",label:"Activity Global Min",min:0,max:200,step:.1,def:0,unit:"AU",desc:"Normalization lower bound for frame-level activity."}),en({key:"globalSpectralFluxNormMax",label:"Activity Global Max",min:0,max:200,step:.1,def:100,unit:"AU",desc:"Normalization upper bound for frame-level activity."}),en({key:"spectralFlatnessNormMin",label:"Noisiness Min",min:0,max:1,step:.001,def:0,unit:"ratio",desc:"Normalization lower bound for spectral noisiness."}),en({key:"spectralFlatnessNormMax",label:"Noisiness Max",min:0,max:1,step:.001,def:1,unit:"ratio",desc:"Normalization upper bound for spectral noisiness."}),{key:"defaultParticleSize",group:"geometry",label:"Particle Default Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"defaultBackgroundHue",group:"geometry",label:"Default Background Hue",min:0,max:360,step:1,default:0,unit:"deg",desc:"Base background hue used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundSaturation",group:"geometry",label:"Default Background Saturation",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background saturation used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundLightness",group:"geometry",label:"Default Background Lightness",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background lightness used before background rules are applied.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Particle Capacity",min:1e5,max:5e6,step:1e3,default:1e6,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particlesByFrame",group:"geometry",label:"Spawn Rate",min:100,max:5e3,step:1,default:1e3,unit:"N",desc:"Number of log-frequency spawn buckets per frame. Step ratio is k = (freqMax / freqMin)^(1/N).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Alpha",value:"alpha"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Ortho YZ",value:"orthoYZ"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"cameraPosX",group:"mixing",label:"Camera Position X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position X in world units.",canDisable:!1},{key:"cameraPosY",group:"mixing",label:"Camera Position Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position Y in world units.",canDisable:!1},{key:"cameraPosZ",group:"mixing",label:"Camera Position Z",min:-5e3,max:5e3,step:1,default:420,unit:"u",desc:"Camera position Z in world units.",canDisable:!1},{key:"cameraTargetX",group:"mixing",label:"Camera Target X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target X in world units.",canDisable:!1},{key:"cameraTargetY",group:"mixing",label:"Camera Target Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Y in world units.",canDisable:!1},{key:"cameraTargetZ",group:"mixing",label:"Camera Target Z",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Z in world units.",canDisable:!1},{key:"cameraAngleOfView",group:"mixing",label:"Angle Of View",min:20,max:120,step:1,default:55,unit:"deg",desc:"Perspective camera field of view in degrees.",canDisable:!1},{key:"postProcessEnabled",group:"mixing",label:"Post-Processing",min:0,max:1,step:1,default:1,unit:"",desc:"Master switch for all post-processing effects.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomEnabled",group:"mixing",label:"Bloom Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Unreal Bloom pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomStrength",group:"mixing",label:"Bloom Strength",min:0,max:4,step:.01,default:1.15,unit:"",desc:"Bloom intensity multiplier.",canDisable:!1},{key:"bloomRadius",group:"mixing",label:"Bloom Radius",min:0,max:2,step:.01,default:.7,unit:"",desc:"Bloom spread radius.",canDisable:!1},{key:"bloomThreshold",group:"mixing",label:"Bloom Threshold",min:0,max:1,step:.01,default:.18,unit:"",desc:"Luminance threshold before bloom is applied.",canDisable:!1},{key:"bokehEnabled",group:"mixing",label:"Bokeh Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Bokeh depth-of-field pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bokehFocus",group:"mixing",label:"Bokeh Focus",min:1,max:5e3,step:1,default:380,unit:"u",desc:"Bokeh focus distance.",canDisable:!1},{key:"bokehAperture",group:"mixing",label:"Bokeh Aperture",min:0,max:.001,step:1e-5,default:12e-5,unit:"",desc:"Bokeh aperture value.",canDisable:!1},{key:"bokehMaxBlur",group:"mixing",label:"Bokeh Max Blur",min:0,max:.1,step:5e-4,default:.01,unit:"",desc:"Maximum blur amount for bokeh pass.",canDisable:!1},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]},{key:"originSignEnabled",group:"mixing",label:"Origin Axes",min:0,max:1,step:1,default:1,unit:"",desc:"Show/hide origin axes guide.",isToggle:!0,toggleLabels:["Off","On"]},{key:"coordinateGuidesEnabled",group:"mixing",label:"Coordinate Guides",min:0,max:1,step:1,default:1,unit:"",desc:"Show/hide coordinate guide grids.",isToggle:!0,toggleLabels:["Off","On"]}];function e_(){try{return JSON.parse(localStorage.getItem(Kv)||"{}")}catch{return{}}}function t_(){try{return new Set(JSON.parse(localStorage.getItem(gd)||"[]"))}catch{return new Set}}function Wi(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=md(i);return t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:rs.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):rs.ruleSchemaVersion,t.palettes=Sl(e.palettes),t.ruleUiState=ba(e.ruleUiState),r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function n_(){const n=Wi(e_()),e={};for(const t of Ml)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e.palettes=Sl(n.palettes),e.ruleUiState=ba(n.ruleUiState),e}const ee=n_(),Kr=t_(),ri=[],Sa=[],jc=300;let ss=!1;function i_(n){return JSON.parse(JSON.stringify(n))}function yl(){return{params:i_(ee),disabled:[...Kr]}}function r_(n,e){if(!n||!e||JSON.stringify(n.params)!==JSON.stringify(e.params))return!1;const t=Array.isArray(n.disabled)?[...n.disabled].sort():[],i=Array.isArray(e.disabled)?[...e.disabled].sort():[];return JSON.stringify(t)===JSON.stringify(i)}function xd(n){const e=Wi((n&&typeof n=="object"?n.params:{})||{});for(const i of Object.keys(ee))delete ee[i];for(const[i,r]of Object.entries(e))ee[i]=r,Vi(i,r);const t=new Set(Array.isArray(n==null?void 0:n.disabled)?n.disabled:[]);Kr.clear();for(const i of t)Kr.add(i);try{localStorage.setItem(gd,JSON.stringify([...Kr]))}catch{}Vi("disabled",null),Vi("*",e)}function El(){if(ss)return;const n=yl(),e=ri[ri.length-1];e&&r_(e,n)||(ri.push(n),ri.length>jc&&ri.splice(0,ri.length-jc),Sa.length=0)}function s_(){return ri.length>0}function a_(){return Sa.length>0}function o_(){if(!s_())return!1;const n=ri.pop(),e=yl();Sa.push(e),ss=!0;try{xd(n)}finally{ss=!1}return!0}function l_(){if(!a_())return!1;const n=Sa.pop(),e=yl();ri.push(e),ss=!0;try{xd(n)}finally{ss=!1}return!0}const $o=new Set;function Ma(n){return $o.add(n),()=>$o.delete(n)}function Vi(n,e){for(const t of $o)try{t(ee,n,e)}catch(i){console.warn("[ParamStore] subscriber error:",i)}}function nn(n,e){El(),ee[n]=e,Vi(n,e)}function Gt(n){El();const e=n&&typeof n=="object"?n:{},t=Wi({...ee,...e}),i=Object.create(null),r=Object.keys(e);for(const l of r){const c=t[l];Object.is(ee[l],c)||(ee[l]=c,i[l]=c)}const s=["ruleBlocks","ruleEngineEnabled","ruleSchemaVersion","palettes","ruleUiState"];if(s.some(l=>Object.prototype.hasOwnProperty.call(e,l)))for(const l of s){const c=t[l];Object.is(ee[l],c)||(ee[l]=c,i[l]=c)}const o=Object.entries(i);if(o.length!==0){for(const[l,c]of o)Vi(l,c);Vi("*",i)}}function bd(){El();for(const n of Ml)ee[n.key]=n.default;ee.ruleBlocks=[],ee.ruleEngineEnabled=!0,ee.ruleSchemaVersion=aa,ee.palettes=[],ee.ruleUiState=ba(rs.ruleUiState),Vi("*",null)}function oa(){const n=Wi(ee);return{...ee,...n,_disabled:[...Kr]}}function c_(n){const e=String(n||"").replace(/\\/g,"/");return e.slice(e.lastIndexOf("/")+1).replace(/\.json$/i,"")}function ya(){try{const n=JSON.parse(localStorage.getItem(_d)||"[]");return Array.isArray(n)?new Set(n.map(e=>String(e||"").trim()).filter(Boolean)):new Set}catch{return new Set}}function Sd(n){try{localStorage.setItem(_d,JSON.stringify([...n]))}catch{}}function Ea(){try{const n=JSON.parse(localStorage.getItem(vd)||"[]");if(!Array.isArray(n))return new Map;const e=new Map;for(const t of n){const i=String((t==null?void 0:t.name)||"").trim();i&&e.set(i,{name:i,params:Ar(t==null?void 0:t.params)})}return e}catch{return new Map}}function Md(n){try{const e=[...n.values()].map(t=>({name:t.name,params:Ar(t.params)}));localStorage.setItem(vd,JSON.stringify(e))}catch{}}let zs=null;function wl(){if(zs)return zs;const n=new Map;for(const[e,t]of Object.entries(Jv)){const i=t&&typeof t=="object"?t:{},r=String(i.name||c_(e)).trim();r&&n.set(r,{name:r,params:Ar(i.params)})}return zs=n,zs}function u_(n){return Array.isArray(n==null?void 0:n.dropdownOptions)?n.dropdownOptions.map(e=>e.value):Array.isArray(n==null?void 0:n.dropdownGroups)?n.dropdownGroups.flatMap(e=>(e.options||[]).map(t=>t.value)):[]}function d_(n,e){if(n==null)return e;if(typeof n=="boolean")return n?1:0;if(typeof n=="string"){const i=n.trim().toLowerCase();if(i==="painting"||i==="paint"||i==="on"||i==="true")return 1;if(i==="momentary"||i==="off"||i==="false")return 0}const t=Number(n);return Number.isFinite(t)?t>=.5?1:0:e}function h_(n,e){if(e==null)return;if(n!=null&&n.isToggle)return d_(e,n.default);if(n!=null&&n.isDropdown){const r=u_(n).find(s=>String(s)===String(e));return r!==void 0?r:e}const t=Number(e);return Number.isFinite(t)?t:e}function Ar(n){try{const e=n&&typeof n=="object"?n:{},t={...e};for(const i of Ml){if(!Object.prototype.hasOwnProperty.call(e,i.key)||e[i.key]===void 0||e[i.key]===null){t[i.key]=i.default;continue}t[i.key]=h_(i,e[i.key])}return Object.prototype.hasOwnProperty.call(e,"ruleBlocks")||(t.ruleBlocks=[]),(!Object.prototype.hasOwnProperty.call(e,"ruleEngineEnabled")||typeof e.ruleEngineEnabled!="boolean")&&(t.ruleEngineEnabled=rs.ruleEngineEnabled),!Object.prototype.hasOwnProperty.call(e,"ruleSchemaVersion")||!Number.isFinite(Number(e.ruleSchemaVersion))?t.ruleSchemaVersion=rs.ruleSchemaVersion:t.ruleSchemaVersion=Number(e.ruleSchemaVersion),t.palettes=Sl(e.palettes),t.ruleUiState=ba(e.ruleUiState),Array.isArray(e._disabled)&&(t._disabled=[...e._disabled]),Wi(t)}catch(e){return console.warn("[Preset] canonicalization failed, falling back to raw payload:",e),Wi(n&&typeof n=="object"?n:{})}}async function yd(){const n=ya(),e=[...wl().keys()].filter(i=>!n.has(i)),t=[...Ea().keys()];return[...new Set([...e,...t])].sort((i,r)=>i.localeCompare(r))}async function la(n,e){const t=String(n||"").trim();if(!t)return{ok:!1,error:"Preset name is required."};const i=Ar(e),r=Ea();r.set(t,{name:t,params:i}),Md(r);const s=ya();return s.delete(t)&&Sd(s),{ok:!0,name:t,source:"localStorage"}}async function f_(n){const e=String(n||"").trim();if(!e)return null;const t=Ea();if(t.has(e)){const a=t.get(e);return{name:a.name,params:Ar(a.params)}}if(ya().has(e))return null;const r=wl();if(!r.has(e))return null;const s=r.get(e);try{return{name:s.name,params:Ar(s.params)}}catch(a){return console.warn("[Preset] load normalization failed, applying raw params:",a),{name:s.name,params:Wi(s.params)}}}async function p_(n){const e=String(n||"").trim();if(!e)return{ok:!1,deleted:!1};const t=Ea();if(t.delete(e))return Md(t),{ok:!0,deleted:!0,source:"localStorage"};if(wl().has(e)){const i=ya();return i.add(e),Sd(i),{ok:!0,deleted:!0,source:"hidden-root"}}return{ok:!1,deleted:!1}}var bi;(function(n){n.Range="range",n.Steps="steps",n.Positions="positions",n.Count="count",n.Values="values"})(bi||(bi={}));var cn;(function(n){n[n.None=-1]="None",n[n.NoValue=0]="NoValue",n[n.LargeValue=1]="LargeValue",n[n.SmallValue=2]="SmallValue"})(cn||(cn={}));function m_(n){return ca(n)&&typeof n.from=="function"}function ca(n){return typeof n=="object"&&typeof n.to=="function"}function Yc(n){n.parentElement.removeChild(n)}function Zo(n){return n!=null}function $c(n){n.preventDefault()}function g_(n){return n.filter(function(e){return this[e]?!1:this[e]=!0},{})}function v_(n,e){return Math.round(n/e)*e}function __(n,e){var t=n.getBoundingClientRect(),i=n.ownerDocument,r=i.documentElement,s=Ed(i);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(s.x=0),e?t.top+s.y-r.clientTop:t.left+s.x-r.clientLeft}function On(n){return typeof n=="number"&&!isNaN(n)&&isFinite(n)}function Zc(n,e,t){t>0&&(tn(n,e),setTimeout(function(){Qs(n,e)},t))}function Kc(n){return Math.max(Math.min(n,100),0)}function wa(n){return Array.isArray(n)?n:[n]}function x_(n){n=String(n);var e=n.split(".");return e.length>1?e[1].length:0}function tn(n,e){n.classList&&!/\s/.test(e)?n.classList.add(e):n.className+=" "+e}function Qs(n,e){n.classList&&!/\s/.test(e)?n.classList.remove(e):n.className=n.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function b_(n,e){return n.classList?n.classList.contains(e):new RegExp("\\b"+e+"\\b").test(n.className)}function Ed(n){var e=window.pageXOffset!==void 0,t=(n.compatMode||"")==="CSS1Compat",i=e?window.pageXOffset:t?n.documentElement.scrollLeft:n.body.scrollLeft,r=e?window.pageYOffset:t?n.documentElement.scrollTop:n.body.scrollTop;return{x:i,y:r}}function S_(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function M_(){var n=!1;try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,e)}catch{}return n}function y_(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Cl(n,e){return 100/(e-n)}function Ko(n,e,t){return e*100/(n[t+1]-n[t])}function E_(n,e){return Ko(n,n[0]<0?e+Math.abs(n[0]):e-n[0],0)}function w_(n,e){return e*(n[1]-n[0])/100+n[0]}function as(n,e){for(var t=1;n>=e[t];)t+=1;return t}function C_(n,e,t){if(t>=n.slice(-1)[0])return 100;var i=as(t,n),r=n[i-1],s=n[i],a=e[i-1],o=e[i];return a+E_([r,s],t)/Cl(a,o)}function T_(n,e,t){if(t>=100)return n.slice(-1)[0];var i=as(t,e),r=n[i-1],s=n[i],a=e[i-1],o=e[i];return w_([r,s],(t-a)*Cl(a,o))}function A_(n,e,t,i){if(i===100)return i;var r=as(i,n),s=n[r-1],a=n[r];return t?i-s>(a-s)/2?a:s:e[r-1]?n[r-1]+v_(i-n[r-1],e[r-1]):i}var wd=function(){function n(e,t,i){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.snap=t;var r,s=[];for(Object.keys(e).forEach(function(a){s.push([wa(e[a]),a])}),s.sort(function(a,o){return a[0][0]-o[0][0]}),r=0;r<s.length;r++)this.handleEntryPoint(s[r][1],s[r][0]);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)this.handleStepPoint(r,this.xNumSteps[r])}return n.prototype.getDistance=function(e){for(var t=[],i=0;i<this.xNumSteps.length-1;i++)t[i]=Ko(this.xVal,e,i);return t},n.prototype.getAbsoluteDistance=function(e,t,i){var r=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[r+1];)r++;else e===this.xPct[this.xPct.length-1]&&(r=this.xPct.length-2);!i&&e===this.xPct[r+1]&&r++,t===null&&(t=[]);var s,a=1,o=t[r],l=0,c=0,u=0,d=0;for(i?s=(e-this.xPct[r])/(this.xPct[r+1]-this.xPct[r]):s=(this.xPct[r+1]-e)/(this.xPct[r+1]-this.xPct[r]);o>0;)l=this.xPct[r+1+d]-this.xPct[r+d],t[r+d]*a+100-s*100>100?(c=l*s,a=(o-100*s)/t[r+d],s=1):(c=t[r+d]*l/100*a,a=0),i?(u=u-c,this.xPct.length+d>=1&&d--):(u=u+c,this.xPct.length-d>=1&&d++),o=t[r+d]*a;return e+u},n.prototype.toStepping=function(e){return e=C_(this.xVal,this.xPct,e),e},n.prototype.fromStepping=function(e){return T_(this.xVal,this.xPct,e)},n.prototype.getStep=function(e){return e=A_(this.xPct,this.xSteps,this.snap,e),e},n.prototype.getDefaultStep=function(e,t,i){var r=as(e,this.xPct);return(e===100||t&&e===this.xPct[r-1])&&(r=Math.max(r-1,1)),(this.xVal[r]-this.xVal[r-1])/i},n.prototype.getNearbySteps=function(e){var t=as(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},n.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(x_);return Math.max.apply(null,e)},n.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},n.prototype.convert=function(e){return this.getStep(this.toStepping(e))},n.prototype.handleEntryPoint=function(e,t){var i;if(e==="min"?i=0:e==="max"?i=100:i=parseFloat(e),!On(i)||!On(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(i),this.xVal.push(t[0]);var r=Number(t[1]);i?this.xSteps.push(isNaN(r)?!1:r):isNaN(r)||(this.xSteps[0]=r),this.xHighestCompleteStep.push(0)},n.prototype.handleStepPoint=function(e,t){if(t){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=Ko([this.xVal[e],this.xVal[e+1]],t,0)/Cl(this.xPct[e],this.xPct[e+1]);var i=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],r=Math.ceil(Number(i.toFixed(3))-1),s=this.xVal[e]+this.xNumSteps[e]*r;this.xHighestCompleteStep[e]=s}},n}(),Jc={to:function(n){return n===void 0?"":n.toFixed(2)},from:Number},Cd={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},xi={tooltips:".__tooltips",aria:".__aria"};function R_(n,e){if(!On(e))throw new Error("noUiSlider: 'step' is not numeric.");n.singleStep=e}function P_(n,e){if(!On(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");n.keyboardPageMultiplier=e}function N_(n,e){if(!On(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");n.keyboardMultiplier=e}function L_(n,e){if(!On(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");n.keyboardDefaultStep=e}function D_(n,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");n.spectrum=new wd(e,n.snap||!1,n.singleStep)}function F_(n,e){if(e=wa(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");n.handles=e.length,n.start=e}function I_(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");n.snap=e}function U_(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");n.animate=e}function O_(n,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");n.animationDuration=e}function Td(n,e){var t=[!1],i;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(i=1;i<n.handles;i++)t.push(e);t.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==n.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");t=e}n.connect=t}function B_(n,e){switch(e){case"horizontal":n.ort=0;break;case"vertical":n.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Ad(n,e){if(!On(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(n.margin=n.spectrum.getDistance(e))}function k_(n,e){if(!On(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(n.limit=n.spectrum.getDistance(e),!n.limit||n.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function z_(n,e){var t;if(!On(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||On(e[0])||On(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),n.padding=[n.spectrum.getDistance(e[0]),n.spectrum.getDistance(e[1])],t=0;t<n.spectrum.xNumSteps.length-1;t++)if(n.padding[0][t]<0||n.padding[1][t]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=e[0]+e[1],r=n.spectrum.xVal[0],s=n.spectrum.xVal[n.spectrum.xVal.length-1];if(i/(s-r)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function V_(n,e){switch(e){case"ltr":n.dir=0;break;case"rtl":n.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function H_(n,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var t=e.indexOf("tap")>=0,i=e.indexOf("drag")>=0,r=e.indexOf("fixed")>=0,s=e.indexOf("snap")>=0,a=e.indexOf("hover")>=0,o=e.indexOf("unconstrained")>=0,l=e.indexOf("invert-connects")>=0,c=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(r){if(n.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Ad(n,n.start[1]-n.start[0])}if(l&&n.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(o&&(n.margin||n.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");n.events={tap:t||s,drag:i,dragAll:c,smoothSteps:u,fixed:r,snap:s,hover:a,unconstrained:o,invertConnects:l}}function G_(n,e){if(e!==!1)if(e===!0||ca(e)){n.tooltips=[];for(var t=0;t<n.handles;t++)n.tooltips.push(e)}else{if(e=wa(e),e.length!==n.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(i){if(typeof i!="boolean"&&!ca(i))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),n.tooltips=e}}function W_(n,e){if(e.length!==n.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");n.handleAttributes=e}function X_(n,e){if(!ca(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");n.ariaFormat=e}function q_(n,e){if(!m_(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");n.format=e}function j_(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");n.keyboardSupport=e}function Y_(n,e){n.documentElement=e}function $_(n,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");n.cssPrefix=e}function Z_(n,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof n.cssPrefix=="string"?(n.cssClasses={},Object.keys(e).forEach(function(t){n.cssClasses[t]=n.cssPrefix+e[t]})):n.cssClasses=e}function Rd(n){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Jc,format:Jc},t={step:{r:!1,t:R_},keyboardPageMultiplier:{r:!1,t:P_},keyboardMultiplier:{r:!1,t:N_},keyboardDefaultStep:{r:!1,t:L_},start:{r:!0,t:F_},connect:{r:!0,t:Td},direction:{r:!0,t:V_},snap:{r:!1,t:I_},animate:{r:!1,t:U_},animationDuration:{r:!1,t:O_},range:{r:!0,t:D_},orientation:{r:!1,t:B_},margin:{r:!1,t:Ad},limit:{r:!1,t:k_},padding:{r:!1,t:z_},behaviour:{r:!0,t:H_},ariaFormat:{r:!1,t:X_},format:{r:!1,t:q_},tooltips:{r:!1,t:G_},keyboardSupport:{r:!0,t:j_},documentElement:{r:!1,t:Y_},cssPrefix:{r:!0,t:$_},cssClasses:{r:!0,t:Z_},handleAttributes:{r:!1,t:W_}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Cd,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};n.format&&!n.ariaFormat&&(n.ariaFormat=n.format),Object.keys(t).forEach(function(l){if(!Zo(n[l])&&i[l]===void 0){if(t[l].r)throw new Error("noUiSlider: '"+l+"' is required.");return}t[l].t(e,Zo(n[l])?n[l]:i[l])}),e.pips=n.pips;var r=document.createElement("div"),s=r.style.msTransform!==void 0,a=r.style.transform!==void 0;e.transformRule=a?"transform":s?"msTransform":"webkitTransform";var o=[["left","top"],["right","bottom"]];return e.style=o[e.dir][e.ort],e}function K_(n,e,t){var i=S_(),r=y_(),s=r&&M_(),a=n,o,l,c,u,d,h,f=e.spectrum,g=[],_=[],m=[],p=0,S={},v=!1,b=n.ownerDocument,R=e.documentElement||b.documentElement,E=b.body,T=b.dir==="rtl"||e.ort===1?0:100;function A(M,N){var B=b.createElement("div");return N&&tn(B,N),M.appendChild(B),B}function C(M,N){var B=A(M,e.cssClasses.origin),J=A(B,e.cssClasses.handle);if(A(J,e.cssClasses.touchArea),J.setAttribute("data-handle",String(N)),e.keyboardSupport&&(J.setAttribute("tabindex","0"),J.addEventListener("keydown",function(k){return Ie(k,N)})),e.handleAttributes!==void 0){var ue=e.handleAttributes[N];Object.keys(ue).forEach(function(k){J.setAttribute(k,ue[k])})}return J.setAttribute("role","slider"),J.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),N===0?tn(J,e.cssClasses.handleLower):N===e.handles-1&&tn(J,e.cssClasses.handleUpper),B.handle=J,B}function x(M,N){return N?A(M,e.cssClasses.connect):!1}function L(M,N){l=A(N,e.cssClasses.connects),c=[],u=[],u.push(x(l,M[0]));for(var B=0;B<e.handles;B++)c.push(C(N,B)),m[B]=B,u.push(x(l,M[B+1]))}function W(M){tn(M,e.cssClasses.target),e.dir===0?tn(M,e.cssClasses.ltr):tn(M,e.cssClasses.rtl),e.ort===0?tn(M,e.cssClasses.horizontal):tn(M,e.cssClasses.vertical);var N=getComputedStyle(M).direction;return N==="rtl"?tn(M,e.cssClasses.textDirectionRtl):tn(M,e.cssClasses.textDirectionLtr),A(M,e.cssClasses.base)}function j(M,N){return!e.tooltips||!e.tooltips[N]?!1:A(M.firstChild,e.cssClasses.tooltip)}function Q(){return a.hasAttribute("disabled")}function Z(M){var N=c[M];return N.hasAttribute("disabled")}function K(M){M!=null?(c[M].setAttribute("disabled",""),c[M].handle.removeAttribute("tabindex")):(a.setAttribute("disabled",""),c.forEach(function(N){N.handle.removeAttribute("tabindex")}))}function ce(M){M!=null?(c[M].removeAttribute("disabled"),c[M].handle.setAttribute("tabindex","0")):(a.removeAttribute("disabled"),c.forEach(function(N){N.removeAttribute("disabled"),N.handle.setAttribute("tabindex","0")}))}function G(){h&&(y("update"+xi.tooltips),h.forEach(function(M){M&&Yc(M)}),h=null)}function q(){G(),h=c.map(j),Le("update"+xi.tooltips,function(M,N,B){if(!(!h||!e.tooltips)&&h[N]!==!1){var J=M[N];e.tooltips[N]!==!0&&(J=e.tooltips[N].to(B[N])),h[N].innerHTML=J}})}function U(){y("update"+xi.aria),Le("update"+xi.aria,function(M,N,B,J,ue){m.forEach(function(k){var ge=c[k],ve=se(_,k,0,!0,!0,!0),Xe=se(_,k,100,!0,!0,!0),Ke=ue[k],nt=String(e.ariaFormat.to(B[k]));ve=f.fromStepping(ve).toFixed(1),Xe=f.fromStepping(Xe).toFixed(1),Ke=f.fromStepping(Ke).toFixed(1),ge.children[0].setAttribute("aria-valuemin",ve),ge.children[0].setAttribute("aria-valuemax",Xe),ge.children[0].setAttribute("aria-valuenow",Ke),ge.children[0].setAttribute("aria-valuetext",nt)})})}function X(M){if(M.mode===bi.Range||M.mode===bi.Steps)return f.xVal;if(M.mode===bi.Count){if(M.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var N=M.values-1,B=100/N,J=[];N--;)J[N]=N*B;return J.push(100),me(J,M.stepped)}return M.mode===bi.Positions?me(M.values,M.stepped):M.mode===bi.Values?M.stepped?M.values.map(function(ue){return f.fromStepping(f.getStep(f.toStepping(ue)))}):M.values:[]}function me(M,N){return M.map(function(B){return f.fromStepping(N?f.getStep(B):B)})}function $e(M){function N(Ke,nt){return Number((Ke+nt).toFixed(7))}var B=X(M),J={},ue=f.xVal[0],k=f.xVal[f.xVal.length-1],ge=!1,ve=!1,Xe=0;return B=g_(B.slice().sort(function(Ke,nt){return Ke-nt})),B[0]!==ue&&(B.unshift(ue),ge=!0),B[B.length-1]!==k&&(B.push(k),ve=!0),B.forEach(function(Ke,nt){var st,He,ut,lt=Ke,ht=B[nt+1],_t,wt,xe,Ft,jt,sn,w,I=M.mode===bi.Steps;for(I&&(st=f.xNumSteps[nt]),st||(st=ht-lt),ht===void 0&&(ht=lt),st=Math.max(st,1e-7),He=lt;He<=ht;He=N(He,st)){for(_t=f.toStepping(He),wt=_t-Xe,jt=wt/(M.density||1),sn=Math.round(jt),w=wt/sn,ut=1;ut<=sn;ut+=1)xe=Xe+ut*w,J[xe.toFixed(5)]=[f.fromStepping(xe),0];Ft=B.indexOf(He)>-1?cn.LargeValue:I?cn.SmallValue:cn.NoValue,!nt&&ge&&He!==ht&&(Ft=0),He===ht&&ve||(J[_t.toFixed(5)]=[He,Ft]),Xe=_t}}),J}function ie(M,N,B){var J,ue,k=b.createElement("div"),ge=(J={},J[cn.None]="",J[cn.NoValue]=e.cssClasses.valueNormal,J[cn.LargeValue]=e.cssClasses.valueLarge,J[cn.SmallValue]=e.cssClasses.valueSub,J),ve=(ue={},ue[cn.None]="",ue[cn.NoValue]=e.cssClasses.markerNormal,ue[cn.LargeValue]=e.cssClasses.markerLarge,ue[cn.SmallValue]=e.cssClasses.markerSub,ue),Xe=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],Ke=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];tn(k,e.cssClasses.pips),tn(k,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function nt(He,ut){var lt=ut===e.cssClasses.value,ht=lt?Xe:Ke,_t=lt?ge:ve;return ut+" "+ht[e.ort]+" "+_t[He]}function st(He,ut,lt){if(lt=N?N(ut,lt):lt,lt!==cn.None){var ht=A(k,!1);ht.className=nt(lt,e.cssClasses.marker),ht.style[e.style]=He+"%",lt>cn.NoValue&&(ht=A(k,!1),ht.className=nt(lt,e.cssClasses.value),ht.setAttribute("data-value",String(ut)),ht.style[e.style]=He+"%",ht.innerHTML=String(B.to(ut)))}}return Object.keys(M).forEach(function(He){st(He,M[He][0],M[He][1])}),k}function fe(){d&&(Yc(d),d=null)}function ye(M){fe();var N=$e(M),B=M.filter,J=M.format||{to:function(ue){return String(Math.round(ue))}};return d=a.appendChild(ie(N,B,J)),d}function _e(){var M=o.getBoundingClientRect(),N="offset"+["Width","Height"][e.ort];return e.ort===0?M.width||o[N]:M.height||o[N]}function Te(M,N,B,J){var ue=function(ge){var ve=Oe(ge,J.pageOffset,J.target||N);if(!ve||Q()&&!J.doNotReject||b_(a,e.cssClasses.tap)&&!J.doNotReject||M===i.start&&ve.buttons!==void 0&&ve.buttons>1||J.hover&&ve.buttons)return!1;s||ve.preventDefault(),ve.calcPoint=ve.points[e.ort],B(ve,J)},k=[];return M.split(" ").forEach(function(ge){N.addEventListener(ge,ue,s?{passive:!0}:!1),k.push([ge,ue])}),k}function Oe(M,N,B){var J=M.type.indexOf("touch")===0,ue=M.type.indexOf("mouse")===0,k=M.type.indexOf("pointer")===0,ge=0,ve=0;if(M.type.indexOf("MSPointer")===0&&(k=!0),M.type==="mousedown"&&!M.buttons&&!M.touches)return!1;if(J){var Xe=function(st){var He=st.target;return He===B||B.contains(He)||M.composed&&M.composedPath().shift()===B};if(M.type==="touchstart"){var Ke=Array.prototype.filter.call(M.touches,Xe);if(Ke.length>1)return!1;ge=Ke[0].pageX,ve=Ke[0].pageY}else{var nt=Array.prototype.find.call(M.changedTouches,Xe);if(!nt)return!1;ge=nt.pageX,ve=nt.pageY}}return N=N||Ed(b),(ue||k)&&(ge=M.clientX+N.x,ve=M.clientY+N.y),M.pageOffset=N,M.points=[ge,ve],M.cursor=ue||k,M}function ke(M){var N=M-__(o,e.ort),B=N*100/_e();return B=Kc(B),e.dir?100-B:B}function ot(M){var N=100,B=!1;return c.forEach(function(J,ue){if(!Z(ue)){var k=_[ue],ge=Math.abs(k-M),ve=ge===100&&N===100,Xe=ge<N,Ke=ge<=N&&M>k;(Xe||Ke||ve)&&(B=ue,N=ge)}}),B}function je(M,N){M.type==="mouseout"&&M.target.nodeName==="HTML"&&M.relatedTarget===null&&D(M,N)}function dt(M,N){if(navigator.appVersion.indexOf("MSIE 9")===-1&&M.buttons===0&&N.buttonsProperty!==0)return D(M,N);var B=(e.dir?-1:1)*(M.calcPoint-N.startCalcPoint),J=B*100/N.baseSize;ne(B>0,J,N.locations,N.handleNumbers,N.connect)}function D(M,N){N.handle&&(Qs(N.handle,e.cssClasses.active),p-=1),N.listeners.forEach(function(B){R.removeEventListener(B[0],B[1])}),p===0&&(Qs(a,e.cssClasses.drag),Se(),M.cursor&&(E.style.cursor="",E.removeEventListener("selectstart",$c))),e.events.smoothSteps&&(N.handleNumbers.forEach(function(B){Ze(B,_[B],!0,!0,!1,!1)}),N.handleNumbers.forEach(function(B){z("update",B)})),N.handleNumbers.forEach(function(B){z("change",B),z("set",B),z("end",B)})}function Ct(M,N){if(!N.handleNumbers.some(Z)){var B;if(N.handleNumbers.length===1){var J=c[N.handleNumbers[0]];B=J.children[0],p+=1,tn(B,e.cssClasses.active)}M.stopPropagation();var ue=[],k=Te(i.move,R,dt,{target:M.target,handle:B,connect:N.connect,listeners:ue,startCalcPoint:M.calcPoint,baseSize:_e(),pageOffset:M.pageOffset,handleNumbers:N.handleNumbers,buttonsProperty:M.buttons,locations:_.slice()}),ge=Te(i.end,R,D,{target:M.target,handle:B,listeners:ue,doNotReject:!0,handleNumbers:N.handleNumbers}),ve=Te("mouseout",R,je,{target:M.target,handle:B,listeners:ue,doNotReject:!0,handleNumbers:N.handleNumbers});ue.push.apply(ue,k.concat(ge,ve)),M.cursor&&(E.style.cursor=getComputedStyle(M.target).cursor,c.length>1&&tn(a,e.cssClasses.drag),E.addEventListener("selectstart",$c,!1)),N.handleNumbers.forEach(function(Xe){z("start",Xe)})}}function Je(M){M.stopPropagation();var N=ke(M.calcPoint),B=ot(N);B!==!1&&(e.events.snap||Zc(a,e.cssClasses.tap,e.animationDuration),Ze(B,N,!0,!0),Se(),z("slide",B,!0),z("update",B,!0),e.events.snap?Ct(M,{handleNumbers:[B]}):(z("change",B,!0),z("set",B,!0)))}function Qe(M){var N=ke(M.calcPoint),B=f.getStep(N),J=f.fromStepping(B);Object.keys(S).forEach(function(ue){ue.split(".")[0]==="hover"&&S[ue].forEach(function(k){k.call(be,J)})})}function Ie(M,N){if(Q()||Z(N))return!1;var B=["Left","Right"],J=["Down","Up"],ue=["PageDown","PageUp"],k=["Home","End"];e.dir&&!e.ort?B.reverse():e.ort&&!e.dir&&(J.reverse(),ue.reverse());var ge=M.key.replace("Arrow",""),ve=ge===ue[0],Xe=ge===ue[1],Ke=ge===J[0]||ge===B[0]||ve,nt=ge===J[1]||ge===B[1]||Xe,st=ge===k[0],He=ge===k[1];if(!Ke&&!nt&&!st&&!He)return!0;M.preventDefault();var ut;if(nt||Ke){var lt=Ke?0:1,ht=vt(N),_t=ht[lt];if(_t===null)return!1;_t===!1&&(_t=f.getDefaultStep(_[N],Ke,e.keyboardDefaultStep)),Xe||ve?_t*=e.keyboardPageMultiplier:_t*=e.keyboardMultiplier,_t=Math.max(_t,1e-7),_t=(Ke?-1:1)*_t,ut=g[N]+_t}else He?ut=e.spectrum.xVal[e.spectrum.xVal.length-1]:ut=e.spectrum.xVal[0];return Ze(N,f.toStepping(ut),!0,!0),z("slide",N),z("update",N),z("change",N),z("set",N),!1}function ct(M){M.fixed||c.forEach(function(N,B){Te(i.start,N.children[0],Ct,{handleNumbers:[B]})}),M.tap&&Te(i.start,o,Je,{}),M.hover&&Te(i.move,o,Qe,{hover:!0}),M.drag&&u.forEach(function(N,B){if(!(N===!1||B===0||B===u.length-1)){var J=c[B-1],ue=c[B],k=[N],ge=[J,ue],ve=[B-1,B];tn(N,e.cssClasses.draggable),M.fixed&&(k.push(J.children[0]),k.push(ue.children[0])),M.dragAll&&(ge=c,ve=m),k.forEach(function(Xe){Te(i.start,Xe,Ct,{handles:ge,handleNumbers:ve,connect:N})})}})}function Le(M,N){S[M]=S[M]||[],S[M].push(N),M.split(".")[0]==="update"&&c.forEach(function(B,J){z("update",J)})}function P(M){return M===xi.aria||M===xi.tooltips}function y(M){var N=M&&M.split(".")[0],B=N?M.substring(N.length):M;Object.keys(S).forEach(function(J){var ue=J.split(".")[0],k=J.substring(ue.length);(!N||N===ue)&&(!B||B===k)&&(!P(k)||B===k)&&delete S[J]})}function z(M,N,B){Object.keys(S).forEach(function(J){var ue=J.split(".")[0];M===ue&&S[J].forEach(function(k){k.call(be,g.map(e.format.to),N,g.slice(),B||!1,_.slice(),be)})})}function se(M,N,B,J,ue,k,ge){var ve;return c.length>1&&!e.events.unconstrained&&(J&&N>0&&(ve=f.getAbsoluteDistance(M[N-1],e.margin,!1),B=Math.max(B,ve)),ue&&N<c.length-1&&(ve=f.getAbsoluteDistance(M[N+1],e.margin,!0),B=Math.min(B,ve))),c.length>1&&e.limit&&(J&&N>0&&(ve=f.getAbsoluteDistance(M[N-1],e.limit,!1),B=Math.min(B,ve)),ue&&N<c.length-1&&(ve=f.getAbsoluteDistance(M[N+1],e.limit,!0),B=Math.max(B,ve))),e.padding&&(N===0&&(ve=f.getAbsoluteDistance(0,e.padding[0],!1),B=Math.max(B,ve)),N===c.length-1&&(ve=f.getAbsoluteDistance(100,e.padding[1],!0),B=Math.min(B,ve))),ge||(B=f.getStep(B)),B=Kc(B),B===M[N]&&!k?!1:B}function ae(M,N){var B=e.ort;return(B?N:M)+", "+(B?M:N)}function ne(M,N,B,J,ue){var k=B.slice(),ge=J[0],ve=e.events.smoothSteps,Xe=[!M,M],Ke=[M,!M];J=J.slice(),M&&J.reverse(),J.length>1?J.forEach(function(st,He){var ut=se(k,st,k[st]+N,Xe[He],Ke[He],!1,ve);ut===!1?N=0:(N=ut-k[st],k[st]=ut)}):Xe=Ke=[!0];var nt=!1;J.forEach(function(st,He){nt=Ze(st,B[st]+N,Xe[He],Ke[He],!1,ve)||nt}),nt&&(J.forEach(function(st){z("update",st),z("slide",st)}),ue!=null&&z("drag",ge))}function de(M,N){return e.dir?100-M-N:M}function he(M,N){_[M]=N,g[M]=f.fromStepping(N);var B=de(N,0)-T,J="translate("+ae(B+"%","0")+")";if(c[M].style[e.transformRule]=J,e.events.invertConnects&&_.length>1){var ue=_.every(function(k,ge,ve){return ge===0||k>=ve[ge-1]});if(v!==!ue){oe();return}}pe(M),pe(M+1),v&&(pe(M-1),pe(M+2))}function Se(){m.forEach(function(M){var N=_[M]>50?-1:1,B=3+(c.length+N*M);c[M].style.zIndex=String(B)})}function Ze(M,N,B,J,ue,k){return ue||(N=se(_,M,N,B,J,!1,k)),N===!1?!1:(he(M,N),!0)}function pe(M){if(u[M]){var N=_.slice();v&&N.sort(function(ve,Xe){return ve-Xe});var B=0,J=100;M!==0&&(B=N[M-1]),M!==u.length-1&&(J=N[M]);var ue=J-B,k="translate("+ae(de(B,ue)+"%","0")+")",ge="scale("+ae(ue/100,"1")+")";u[M].style[e.transformRule]=k+" "+ge}}function Pe(M,N){return M===null||M===!1||M===void 0||(typeof M=="number"&&(M=String(M)),M=e.format.from(M),M!==!1&&(M=f.toStepping(M)),M===!1||isNaN(M))?_[N]:M}function Fe(M,N,B){var J=wa(M),ue=_[0]===void 0;N=N===void 0?!0:N,e.animate&&!ue&&Zc(a,e.cssClasses.tap,e.animationDuration),m.forEach(function(ve){Ze(ve,Pe(J[ve],ve),!0,!1,B)});var k=m.length===1?0:1;if(ue&&f.hasNoSize()&&(B=!0,_[0]=0,m.length>1)){var ge=100/(m.length-1);m.forEach(function(ve){_[ve]=ve*ge})}for(;k<m.length;++k)m.forEach(function(ve){Ze(ve,_[ve],!0,!0,B)});Se(),m.forEach(function(ve){z("update",ve),J[ve]!==null&&N&&z("set",ve)})}function Be(M){Fe(e.start,M)}function Ae(M,N,B,J){if(M=Number(M),!(M>=0&&M<m.length))throw new Error("noUiSlider: invalid handle number, got: "+M);Ze(M,Pe(N,M),!0,!0,J),z("update",M),B&&z("set",M)}function et(M){if(M===void 0&&(M=!1),M)return g.length===1?g[0]:g.slice(0);var N=g.map(e.format.to);return N.length===1?N[0]:N}function We(){for(y(xi.aria),y(xi.tooltips),Object.keys(e.cssClasses).forEach(function(M){Qs(a,e.cssClasses[M])});a.firstChild;)a.removeChild(a.firstChild);delete a.noUiSlider}function vt(M){var N=_[M],B=f.getNearbySteps(N),J=g[M],ue=B.thisStep.step,k=null;if(e.snap)return[J-B.stepBefore.startValue||null,B.stepAfter.startValue-J||null];ue!==!1&&J+ue>B.stepAfter.startValue&&(ue=B.stepAfter.startValue-J),J>B.thisStep.startValue?k=B.thisStep.step:B.stepBefore.step===!1?k=!1:k=J-B.stepBefore.highestStep,N===100?ue=null:N===0&&(k=null);var ge=f.countStepDecimals();return ue!==null&&ue!==!1&&(ue=Number(ue.toFixed(ge))),k!==null&&k!==!1&&(k=Number(k.toFixed(ge))),[k,ue]}function O(){return m.map(vt)}function Me(M,N){var B=et(),J=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];J.forEach(function(k){M[k]!==void 0&&(t[k]=M[k])});var ue=Rd(t);J.forEach(function(k){M[k]!==void 0&&(e[k]=ue[k])}),f=ue.spectrum,e.margin=ue.margin,e.limit=ue.limit,e.padding=ue.padding,e.pips?ye(e.pips):fe(),e.tooltips?q():G(),_=[],Fe(Zo(M.start)?M.start:B,N),M.connect&&te()}function te(){for(;l.firstChild;)l.removeChild(l.firstChild);for(var M=0;M<=e.handles;M++)u[M]=x(l,e.connect[M]),pe(M);ct({drag:e.events.drag,fixed:!0})}function oe(){v=!v,Td(e,e.connect.map(function(M){return!M})),te()}function Ee(){o=W(a),L(e.connect,o),ct(e.events),Fe(e.start),e.pips&&ye(e.pips),e.tooltips&&q(),U()}Ee();var be={destroy:We,steps:O,on:Le,off:y,get:et,set:Fe,setHandle:Ae,reset:Be,disable:K,enable:ce,__moveHandles:function(M,N,B){ne(M,N,_,B)},options:t,updateOptions:Me,target:a,removePips:fe,removeTooltips:G,getPositions:function(){return _.slice()},getTooltips:function(){return h},getOrigins:function(){return c},pips:ye};return be}function J_(n,e){if(!n||!n.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+n);if(n.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var t=Rd(e),i=K_(n,t,e);return n.noUiSlider=i,i}const Q_={__spectrum:wd,cssClasses:Cd,create:J_},e1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V9.25H21.9531C21.8809 8.20117 21.6973 7.51276 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839ZM21.9978 10.75H2V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V11.7979C22 11.4227 21.9978 10.75 21.9978 10.75Z" fill="#1C274C"/>\r
</svg>`,t1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="#1C274C"/>\r
</svg>`,n1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="#1C274C"/>\r
</svg>`,i1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4277 2C11.3139 2 10.2995 2.6007 8.27081 3.80211L7.58466 4.20846C5.55594 5.40987 4.54158 6.01057 3.98466 7C3.42773 7.98943 3.42773 9.19084 3.42773 11.5937V12.4063C3.42773 14.8092 3.42773 16.0106 3.98466 17C4.54158 17.9894 5.55594 18.5901 7.58466 19.7915L8.27081 20.1979C10.2995 21.3993 11.3139 22 12.4277 22C13.5416 22 14.5559 21.3993 16.5847 20.1979L17.2708 19.7915C19.2995 18.5901 20.3139 17.9894 20.8708 17C21.4277 16.0106 21.4277 14.8092 21.4277 12.4063V11.5937C21.4277 9.19084 21.4277 7.98943 20.8708 7C20.3139 6.01057 19.2995 5.40987 17.2708 4.20846L16.5847 3.80211C14.5559 2.6007 13.5416 2 12.4277 2ZM8.67773 12C8.67773 9.92893 10.3567 8.25 12.4277 8.25C14.4988 8.25 16.1777 9.92893 16.1777 12C16.1777 14.0711 14.4988 15.75 12.4277 15.75C10.3567 15.75 8.67773 14.0711 8.67773 12Z" fill="#1C274C"/>\r
</svg>`,Jo=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g id="Menu / Close_LG">\r
<path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
</g>\r
</svg>`,r1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7713 22 14 22H10C6.22878 22 4.34315 22 3.17157 20.8284C2.19725 19.8541 2.03321 18.3859 2.00559 15.7501H10.6937L8.43392 17.3935C8.09893 17.6371 8.02487 18.1062 8.26849 18.4412C8.51212 18.7762 8.98118 18.8502 9.31617 18.6066L13.4412 15.6066C13.6352 15.4655 13.75 15.24 13.75 15.0001C13.75 14.7601 13.6352 14.5346 13.4412 14.3935L9.31617 11.3935C8.98118 11.1499 8.51212 11.2239 8.26849 11.5589C8.02487 11.8939 8.09893 12.363 8.43392 12.6066L10.6937 14.2501H2.00001L2 14L2.00003 6.94975C2.00003 6.06725 2.00003 5.62594 2.06938 5.25839C2.37467 3.64031 3.64033 2.37464 5.25841 2.06935C5.62597 2 6.06724 2 6.94977 2C7.33644 2 7.52978 2 7.71559 2.01738C8.51667 2.09229 9.27654 2.40704 9.89596 2.92051C10.0396 3.03961 10.1763 3.17633 10.4498 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9805 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6748 6 15.8284 6H16.2021C18.8345 6 20.1507 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2306 6.99383C22 7.84935 22 9.16554 22 11.7979Z" fill="#1C274C"/>\r
</svg>`,s1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 3H5.75C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H6V15C6 13.7574 7.00736 12.75 8.25 12.75H15.75C16.9926 12.75 18 13.7574 18 15V21H18.25C19.7688 21 21 19.7688 21 18.25V8.28553C21 7.42358 20.6576 6.59693 20.0481 5.98744L18.0126 3.9519C17.4114 3.35079 16.5991 3.00947 15.75 3.00019V7.5C15.75 8.74264 14.7426 9.75 13.5 9.75H9C7.75736 9.75 6.75 8.74264 6.75 7.5V3Z" fill="#212121"/>
<path d="M14.25 3V7.5C14.25 7.91421 13.9142 8.25 13.5 8.25H9C8.58579 8.25 8.25 7.91421 8.25 7.5V3H14.25Z" fill="#212121"/>
<path d="M16.5 21V15C16.5 14.5858 16.1642 14.25 15.75 14.25H8.25C7.83579 14.25 7.5 14.5858 7.5 15V21H16.5Z" fill="#212121"/>
</svg>`,a1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.0975V16.0909C21 19.1875 21 20.7358 20.2659 21.4123C19.9158 21.735 19.4739 21.9377 19.0031 21.9915C18.016 22.1045 16.8633 21.0849 14.5578 19.0458C13.5388 18.1445 13.0292 17.6938 12.4397 17.5751C12.1494 17.5166 11.8506 17.5166 11.5603 17.5751C10.9708 17.6938 10.4612 18.1445 9.44216 19.0458C7.13673 21.0849 5.98402 22.1045 4.99692 21.9915C4.52615 21.9377 4.08421 21.735 3.73411 21.4123C3 20.7358 3 19.1875 3 16.0909V11.0975C3 6.80891 3 4.6646 4.31802 3.3323C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.3323C21 4.6646 21 6.80891 21 11.0975ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6Z" fill="#1C274D"/>\r
</svg>`,o1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 3H5.75C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H6V15C6 13.7574 7.00736 12.75 8.25 12.75H15.6031L17.3907 10.9624C18.0317 10.3214 18.8742 10.0004 19.713 10H19.7151C20.1521 10.0002 20.59 10.0874 21 10.2615V8.28553C21 7.42358 20.6576 6.59693 20.0481 5.98744L18.0126 3.9519C17.4114 3.35079 16.5991 3.00947 15.75 3.00019V7.5C15.75 8.74264 14.7426 9.75 13.5 9.75H9C7.75736 9.75 6.75 8.74264 6.75 7.5V3Z" fill="#212121"/>
<path d="M14.1031 14.25L11.4883 16.8648C11.016 17.3371 10.681 17.9288 10.519 18.5768L10.0613 20.4075C10.011 20.6088 9.99129 20.8075 9.99852 21H7.5V15C7.5 14.5858 7.83579 14.25 8.25 14.25H14.1031Z" fill="#212121"/>
<path d="M14.25 3V7.5C14.25 7.91421 13.9142 8.25 13.5 8.25H9C8.58579 8.25 8.25 7.91421 8.25 7.5V3H14.25Z" fill="#212121"/>
<path d="M19.7152 11H19.7131C19.1285 11.0003 18.5439 11.2234 18.0979 11.6695L12.1955 17.5719C11.8513 17.916 11.6072 18.3472 11.4892 18.8194L11.0315 20.6501C10.8325 21.4462 11.5536 22.1674 12.3497 21.9683L14.1804 21.5106C14.6526 21.3926 15.0838 21.1485 15.4279 20.8043L21.3303 14.9019C22.223 14.0093 22.223 12.5621 21.3303 11.6695C20.8843 11.2234 20.2998 11.0003 19.7152 11Z" fill="#212121"/>
</svg>`,l1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.5535 2.49392C12.4114 2.33852 12.2106 2.25 12 2.25C11.7894 2.25 11.5886 2.33852 11.4465 2.49392L7.44648 6.86892C7.16698 7.17462 7.18822 7.64902 7.49392 7.92852C7.79963 8.20802 8.27402 8.18678 8.55352 7.88108L11.25 4.9318V16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16V4.9318L15.4465 7.88108C15.726 8.18678 16.2004 8.20802 16.5061 7.92852C16.8118 7.64902 16.833 7.17462 16.5535 6.86892L12.5535 2.49392Z" fill="#1C274C"/>\r
<path d="M3.75 15C3.75 14.5858 3.41422 14.25 3 14.25C2.58579 14.25 2.25 14.5858 2.25 15V15.0549C2.24998 16.4225 2.24996 17.5248 2.36652 18.3918C2.48754 19.2919 2.74643 20.0497 3.34835 20.6516C3.95027 21.2536 4.70814 21.5125 5.60825 21.6335C6.47522 21.75 7.57754 21.75 8.94513 21.75H15.0549C16.4225 21.75 17.5248 21.75 18.3918 21.6335C19.2919 21.5125 20.0497 21.2536 20.6517 20.6516C21.2536 20.0497 21.5125 19.2919 21.6335 18.3918C21.75 17.5248 21.75 16.4225 21.75 15.0549V15C21.75 14.5858 21.4142 14.25 21 14.25C20.5858 14.25 20.25 14.5858 20.25 15C20.25 16.4354 20.2484 17.4365 20.1469 18.1919C20.0482 18.9257 19.8678 19.3142 19.591 19.591C19.3142 19.8678 18.9257 20.0482 18.1919 20.1469C17.4365 20.2484 16.4354 20.25 15 20.25H9C7.56459 20.25 6.56347 20.2484 5.80812 20.1469C5.07435 20.0482 4.68577 19.8678 4.40901 19.591C4.13225 19.3142 3.9518 18.9257 3.85315 18.1919C3.75159 17.4365 3.75 16.4354 3.75 15Z" fill="#1C274C"/>\r
</svg>`,c1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z" fill="#1C274C"/>\r
<path d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z" fill="#1C274C"/>\r
</svg>`,Pd=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10ZM6.32092 13.1038C6.94501 12.5241 7.91991 12.5566 8.50397 13.1766L11.1515 15.9869C11.9509 16.8356 13.2596 16.9499 14.1941 16.2527C14.8073 15.7953 15.661 15.8473 16.2141 16.3757L18.4819 18.5423C18.7814 18.8284 19.2562 18.8176 19.5423 18.5181C19.8284 18.2186 19.8176 17.7438 19.5181 17.4577L17.2503 15.2911C16.1679 14.257 14.4971 14.1553 13.2972 15.0504C12.9735 15.2919 12.5202 15.2523 12.2433 14.9584L9.59579 12.1481C8.44651 10.9281 6.52816 10.8641 5.3001 12.0047L4.4896 12.7575C4.1861 13.0394 4.16858 13.5139 4.45047 13.8174C4.73236 14.1209 5.20691 14.1385 5.51041 13.8566L6.32092 13.1038Z" fill="#1C274C"/>\r
</svg>`,u1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" stroke-width="1.5"/>\r
<circle cx="16" cy="8" r="2" stroke="#1C274C" stroke-width="1.5"/>\r
<path d="M5 13.307L5.81051 12.5542C6.73658 11.6941 8.18321 11.7424 9.04988 12.6623L11.6974 15.4727C12.2356 16.0439 13.1166 16.1209 13.7457 15.6516C14.6522 14.9753 15.9144 15.0522 16.7322 15.8334L19 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\r
</svg>`,d1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.50989 2.00001H15.49C15.7225 1.99995 15.9007 1.99991 16.0565 2.01515C17.1643 2.12352 18.0711 2.78958 18.4556 3.68678H5.54428C5.92879 2.78958 6.83555 2.12352 7.94337 2.01515C8.09917 1.99991 8.27741 1.99995 8.50989 2.00001Z" fill="#1C274C"/>\r
<path d="M6.31052 4.72312C4.91989 4.72312 3.77963 5.56287 3.3991 6.67691C3.39117 6.70013 3.38356 6.72348 3.37629 6.74693C3.77444 6.62636 4.18881 6.54759 4.60827 6.49382C5.68865 6.35531 7.05399 6.35538 8.64002 6.35547H15.5321C17.1181 6.35538 18.4835 6.35531 19.5639 6.49382C19.9833 6.54759 20.3977 6.62636 20.7958 6.74693C20.7886 6.72348 20.781 6.70013 20.773 6.67691C20.3925 5.56287 19.2522 4.72312 17.8616 4.72312H6.31052Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3276 7.54204H8.67239C5.29758 7.54204 3.61017 7.54204 2.66232 8.52887C1.71447 9.5157 1.93748 11.0403 2.38351 14.0896L2.80648 16.9811C3.15626 19.3724 3.33115 20.568 4.22834 21.284C5.12553 22 6.4488 22 9.09534 22H14.9046C17.5512 22 18.8745 22 19.7717 21.284C20.6689 20.568 20.8437 19.3724 21.1935 16.9811L21.6165 14.0896C22.0625 11.0404 22.2855 9.51569 21.3377 8.52887C20.3898 7.54204 18.7024 7.54204 15.3276 7.54204ZM14.5812 15.7942C15.1396 15.4481 15.1396 14.5519 14.5812 14.2058L11.2096 12.1156C10.6669 11.7792 10 12.2171 10 12.9099V17.0901C10 17.7829 10.6669 18.2208 11.2096 17.8844L14.5812 15.7942Z" fill="#1C274C"/>\r
</svg>`,h1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L6.42229 4.43152C4.64855 5.36234 3.6059 5.9095 2.95969 6.64132L12 11.1615L21.0403 6.64132C20.3941 5.9095 19.3515 5.36234 17.5777 4.43152Z" fill="#1C274C"/>\r
<path d="M21.7484 7.96435L12.75 12.4635V21.904C13.4679 21.7252 14.2848 21.2965 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C22 15.8458 22 14.5833 22 12.0585V11.9415C22 10.0489 22 8.86558 21.7484 7.96435Z" fill="#1C274C"/>\r
<path d="M11.25 21.904V12.4635L2.25164 7.96434C2 8.86557 2 10.0489 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27063 18.4393 6.42229 19.5685L8.42229 20.618C9.71524 21.2965 10.5321 21.7252 11.25 21.904Z" fill="#1C274C"/>\r
</svg>`,f1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">\r
  <path fill="#000000" fill-rule="evenodd" d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>\r
</svg>`,Qc=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M11.4096 5.50506C13.0796 3.83502 13.9146 3 14.9522 3C15.9899 3 16.8249 3.83502 18.4949 5.50506C20.165 7.1751 21 8.01013 21 9.04776C21 10.0854 20.165 10.9204 18.4949 12.5904L14.3017 16.7837L7.21634 9.69828L11.4096 5.50506Z" fill="#1C274C"/>\r
<path d="M6.1557 10.759L13.2411 17.8443L12.5904 18.4949C12.2127 18.8727 11.8777 19.2077 11.5734 19.5H21C21.4142 19.5 21.75 19.8358 21.75 20.25C21.75 20.6642 21.4142 21 21 21H9C7.98423 20.9747 7.1494 20.1393 5.50506 18.4949C3.83502 16.8249 3 15.9899 3 14.9522C3 13.9146 3.83502 13.0796 5.50506 11.4096L6.1557 10.759Z" fill="#1C274C"/>\r
</svg>`,p1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z"
    fill="#000000"
  />
</svg>`,m1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.25 4C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4H18.25ZM18.25 5.5H5.75C4.50736 5.5 3.5 6.50736 3.5 7.75V16.25C3.5 17.4926 4.50736 18.5 5.75 18.5H18.25C19.4926 18.5 20.5 17.4926 20.5 16.25V7.75C20.5 6.50736 19.4926 5.5 18.25 5.5ZM18.25 13C18.6642 13 19 13.3358 19 13.75V15C19 16.1046 18.1046 17 17 17H15.75C15.3358 17 15 16.6642 15 16.25C15 15.8358 15.3358 15.5 15.75 15.5H17C17.2761 15.5 17.5 15.2761 17.5 15V13.75C17.5 13.3358 17.8358 13 18.25 13ZM5.75 13C6.16421 13 6.5 13.3358 6.5 13.75V15C6.5 15.2761 6.72386 15.5 7 15.5H8.25C8.66421 15.5 9 15.8358 9 16.25C9 16.6642 8.66421 17 8.25 17H7C5.89543 17 5 16.1046 5 15V13.75C5 13.3358 5.33579 13 5.75 13ZM7 7H8.25C8.66421 7 9 7.33579 9 7.75C9 8.1297 8.71785 8.44349 8.35177 8.49315L8.25 8.5H7C6.75454 8.5 6.55039 8.67688 6.50806 8.91012L6.5 9V10.25C6.5 10.6642 6.16421 11 5.75 11C5.3703 11 5.05651 10.7178 5.00685 10.3518L5 10.25V9C5 7.94564 5.81588 7.08183 6.85074 7.00549L7 7ZM17 7C18.1046 7 19 7.89543 19 9V10.25C19 10.6642 18.6642 11 18.25 11C17.8358 11 17.5 10.6642 17.5 10.25V9C17.5 8.72386 17.2761 8.5 17 8.5H15.75C15.3358 8.5 15 8.16421 15 7.75C15 7.33579 15.3358 7 15.75 7H17Z" fill="#212121"/>
</svg>`,ft="__none__",eu=Object.freeze(["always",">",">=","<","<=","==","!="]),tu=Object.freeze([{id:"file",label:re.menu.file},{id:"view",label:re.menu.view},{id:"settings",label:re.menu.settings},{id:"rules",label:re.menu.rules}]),g1=Object.freeze([512,1024,2048,4096,8192,16384]),v1=Object.freeze([{key:"inputGain",label:re.settings.sensitivity,min:0,max:3,step:.01,tooltip:"Technical term: Input Gain. Scales all amplitude before analysis."},{key:"defaultParticleSize",label:re.settings.particleDefaultSize,min:1,max:40,step:.5,tooltip:"Technical term: Particle Size. Base sprite diameter in pixels."},{key:"maxParticles",label:re.settings.particleCapacity,min:1e5,max:5e6,step:5e4,tooltip:"Technical term: Max Particle Capacity. Total GPU particle slots."},{key:"particlesByFrame",label:re.settings.spawnRate,min:100,max:5e3,step:1,tooltip:"Technical term: Particles By Frame. Number of log-frequency spawn buckets per frame."},{key:"fluxWindowFrames",label:re.settings.activityInterval,min:1,max:64,step:1,tooltip:"Technical term: Flux Window Frames. Rolling frame window for activity averaging."}]),_1=Object.freeze([{id:"frequencyRange",syncKeys:["freqNormMin","freqNormMax"],label:re.settings.frequencyRange,min:16,max:2e4,step:1,unit:"Hz",tooltip:"Technical terms: Freq Norm Min / Freq Norm Max. Physical frequency normalization range.",get:()=>({min:Number(ee.freqNormMin??40),max:Number(ee.freqNormMax??12e3)}),set:(n,e)=>Gt({freqNormMin:n,freqNormMax:e})},{id:"volumeRange",syncKeys:["binMagnitudeNormMin","binMagnitudeNormMax"],label:re.settings.volume,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Per-Bin Magnitude Min / Max. Per-frequency volume normalization.",get:()=>({min:Number(ee.binMagnitudeNormMin??-70),max:Number(ee.binMagnitudeNormMax??0)}),set:(n,e)=>Gt({binMagnitudeNormMin:n,binMagnitudeNormMax:e})},{id:"instabilityRange",syncKeys:["binPhaseDeviationNormMin","binPhaseDeviationNormMax"],label:re.settings.instability,min:0,max:Math.PI,step:.001,unit:"rad",tooltip:"Technical terms: Per-Bin Phase Deviation Min / Max. Phase instability normalization.",get:()=>({min:Number(ee.binPhaseDeviationNormMin??0),max:Number(ee.binPhaseDeviationNormMax??Math.PI)}),set:(n,e)=>Gt({binPhaseDeviationNormMin:n,binPhaseDeviationNormMax:e})},{id:"attackSharpnessRange",syncKeys:["binAttackTimeNormMin","binAttackTimeNormMax"],label:re.settings.attackSharpness,min:0,max:2e3,step:1,unit:"ms",tooltip:"Technical terms: Per-Bin Attack Time Min / Max. Attack-time normalization.",get:()=>({min:Number(ee.binAttackTimeNormMin??5),max:Number(ee.binAttackTimeNormMax??500)}),set:(n,e)=>Gt({binAttackTimeNormMin:n,binAttackTimeNormMax:e})},{id:"energyRange",syncKeys:["globalRmsNormMin","globalRmsNormMax"],label:re.settings.energy,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Global RMS Energy Min / Max. Frame-wide RMS normalization.",get:()=>({min:Number(ee.globalRmsNormMin??-60),max:Number(ee.globalRmsNormMax??0)}),set:(n,e)=>Gt({globalRmsNormMin:n,globalRmsNormMax:e})},{id:"sharpnessRange",syncKeys:["spectralCentroidNormMin","spectralCentroidNormMax"],label:re.settings.sharpness,min:16,max:22050,step:1,unit:"Hz",tooltip:"Technical terms: Spectral Centroid Min / Max. Spectral sharpness normalization.",get:()=>({min:Number(ee.spectralCentroidNormMin??150),max:Number(ee.spectralCentroidNormMax??8e3)}),set:(n,e)=>Gt({spectralCentroidNormMin:n,spectralCentroidNormMax:e})},{id:"activityRange",syncKeys:["globalSpectralFluxNormMin","globalSpectralFluxNormMax","binFluxNormMin","binFluxNormMax"],label:re.settings.activity,min:0,max:200,step:.1,unit:"AU",tooltip:"Technical terms: Per-Bin Spectral Flux Min / Max and Global Spectral Flux Min / Max. Controls both detail and global activity ranges.",get:()=>({min:Number(ee.globalSpectralFluxNormMin??0),max:Number(ee.globalSpectralFluxNormMax??100)}),set:(n,e)=>{Gt({globalSpectralFluxNormMin:n,globalSpectralFluxNormMax:e,binFluxNormMin:n/100,binFluxNormMax:e/100})}},{id:"noisinessRange",syncKeys:["spectralFlatnessNormMin","spectralFlatnessNormMax"],label:re.settings.noisiness,min:0,max:1,step:.001,unit:"ratio",tooltip:"Technical terms: Spectral Flatness Min / Max. Noise-vs-tone normalization.",get:()=>({min:Number(ee.spectralFlatnessNormMin??0),max:Number(ee.spectralFlatnessNormMax??1)}),set:(n,e)=>Gt({spectralFlatnessNormMin:n,spectralFlatnessNormMax:e})}]),x1=Object.freeze([{target:"spawnedParticles",section:"Particles",subgroup:"Position",output:"x",label:"X"},{target:"spawnedParticles",section:"Particles",subgroup:"Position",output:"y",label:"Y"},{target:"spawnedParticles",section:"Particles",subgroup:"Position",output:"z",label:"Z"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"size",label:"Size"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"shapeType",label:"Shape",type:"enum",options:["circle","square"]},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"particleCount",label:"Particle Count"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"red",label:"Red"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"green",label:"Green"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"lines",section:"Lines",subgroup:"Position",output:"xStart",label:"X Start"},{target:"lines",section:"Lines",subgroup:"Position",output:"xEnd",label:"X End"},{target:"lines",section:"Lines",subgroup:"Position",output:"yStart",label:"Y Start"},{target:"lines",section:"Lines",subgroup:"Position",output:"yEnd",label:"Y End"},{target:"lines",section:"Lines",subgroup:"Position",output:"zStart",label:"Z Start"},{target:"lines",section:"Lines",subgroup:"Position",output:"zEnd",label:"Z End"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"thickness",label:"Thickness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"lineCount",label:"Line Count"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"red",label:"Red"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"green",label:"Green"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"background",section:"Background",subgroup:"Appearance",output:"red",label:"Red"},{target:"background",section:"Background",subgroup:"Appearance",output:"green",label:"Green"},{target:"background",section:"Background",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"background",section:"Background",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"background",section:"Background",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"background",section:"Background",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"camera",section:"Camera",subgroup:"Position",output:"x",label:"Position X"},{target:"camera",section:"Camera",subgroup:"Position",output:"y",label:"Position Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"z",label:"Position Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetX",label:"Target X"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetY",label:"Target Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetZ",label:"Target Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"angleOfView",label:"Angle Of View"}]),Nd=new Set(Ur.map(n=>n.id));new RegExp(`\\b(${Ur.map(n=>n.id.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&")).sort((n,e)=>e.length-n.length).join("|")})\\b`,"g");const nu=Object.freeze({file:e1,view:t1,settings:n1,rules:i1}),kt=Object.freeze({load:r1,save:s1,savePreset:a1,saveAs:o1,upload:l1,remove:c1,exportImage:Pd,exportImageNoBg:u1,exportVideo:d1,exportObj:h1,reset:p1,fit:m1,add:f1,clear:Qc,clean:Qc,close:Jo}),Ld=Object.freeze([{value:"math:add",label:re.rules.mathAdd},{value:"math:subtract",label:re.rules.mathSubtract},{value:"math:multiply",label:re.rules.mathMultiply},{value:"math:divide",label:re.rules.mathDivide},{value:"math:parentheses",label:re.rules.mathParentheses},{value:"math:power",label:"Power"},{value:"math:clamp",label:"Clamp"},{value:"math:average",label:"Average"}]);function b1(){return{all:[],byKey:new Map}}function Ht(n,e,t=null){if(!(!n||typeof e!="function")){if(!Array.isArray(t)||t.length===0){n.all.push(e);return}for(const i of t){const r=String(i||"").trim();r&&(n.byKey.has(r)||n.byKey.set(r,[]),n.byKey.get(r).push(e))}}}function iu(n){for(const e of n)try{e()}catch{}}function ru(n,e=[],t=!1){var r;const i=new Set(t?(n==null?void 0:n.all)||[]:[]);for(const s of Array.isArray(e)?e:[]){const a=String(s||"").trim();if(!a)continue;const o=(r=n==null?void 0:n.byKey)==null?void 0:r.get(a);if(o)for(const l of o)i.add(l)}return[...i]}function F(n,e="",t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:s!=null&&i.setAttribute(r,String(s));return i}function Bn(n,e,t){const i=Number(n);return Number.isFinite(i)?Math.max(e,Math.min(t,i)):e}function S1(n,e,t){const i=Bn(Math.round(n),0,255).toString(16).padStart(2,"0"),r=Bn(Math.round(e),0,255).toString(16).padStart(2,"0"),s=Bn(Math.round(t),0,255).toString(16).padStart(2,"0");return`#${i}${r}${s}`}function M1(n,e,t){const i=(Number(n)%360+360)%360,r=Bn(Number(e)/100,0,1),s=Bn(Number(t)/100,0,1),a=(1-Math.abs(2*s-1))*r,o=a*(1-Math.abs(i/60%2-1)),l=s-a/2;let c=0,u=0,d=0;return i<60?(c=a,u=o,d=0):i<120?(c=o,u=a,d=0):i<180?(c=0,u=a,d=o):i<240?(c=0,u=o,d=a):i<300?(c=o,u=0,d=a):(c=a,u=0,d=o),{r:Math.round((c+l)*255),g:Math.round((u+l)*255),b:Math.round((d+l)*255)}}function y1(n){const e=String(n||"").trim().replace(/^#/,"");if(!/^[0-9a-fA-F]{6}$/.test(e))return{h:0,s:0,l:0};const t=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,s=Math.max(t,i,r),a=Math.min(t,i,r),o=s-a;let l=0;o>0&&(s===t?l=60*((i-r)/o%6):s===i?l=60*((r-t)/o+2):l=60*((t-i)/o+4)),l<0&&(l+=360);const c=(s+a)/2,u=o===0?0:o/(1-Math.abs(2*c-1));return{h:l,s:u*100,l:c*100}}function zt(n,e,t){if(!n||!e)return;const i=String(t||n.textContent||"").trim();n.textContent="",n.append(F("span","cp-btn-icon",{html:e}),F("span","cp-btn-label",{text:i})),n.setAttribute("aria-label",i)}function Tl(n){const e=String(n||""),t=Yo(e);return{type:"pill",label:(t==null?void 0:t.label)||e,code:e}}function Al(n=0){const e=Number(n);return{type:"number",value:Number.isFinite(e)?e:0}}function Bt(n){return{type:"op",code:String(n||"")}}function Fn(){return{type:"slot"}}function E1(n){return n==="math:add"?[Bt(" + ")]:n==="math:subtract"?[Bt(" - ")]:n==="math:multiply"?[Bt(" * ")]:n==="math:divide"?[Bt(" / ")]:n==="math:parentheses"?[Bt("("),Fn(),Bt(")")]:n==="math:power"?[Bt("pow("),Fn(),Bt(", "),Fn(),Bt(")")]:n==="math:clamp"?[Bt("clamp("),Fn(),Bt(", "),Fn(),Bt(", "),Fn(),Bt(")")]:n==="math:average"?[Bt("avg("),Fn(),Bt(", "),Fn(),Bt(")")]:[Fn()]}function su(n){return!n||typeof n!="object"?null:n.type==="pill"?Tl(n.code):n.type==="number"?Al(n.value):n.type==="op"?Bt(n.code):n.type==="slot"?Fn():null}function Dd(n){const e=[];for(const t of Array.isArray(n)?n:[])if(!(!t||typeof t!="object")){if(t.type==="pill"){e.push(String(t.code||""));continue}if(t.type==="number"){const i=Number(t.value);e.push(Number.isFinite(i)?String(i):"0");continue}t.type==="op"&&e.push(String(t.code||""))}return e.join("")}function w1(n){const e=String(n||"");if(!e.trim())return[];const t=new Set(Ur.map(a=>a.id)),i=/([A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[()+\-*/])/g,r=[];let s=0;for(const a of e.matchAll(i)){const o=Number(a.index);if(o>s){const c=e.slice(s,o);c.trim()&&r.push(Bt(c))}const l=String(a[0]||"");t.has(l)?r.push(Tl(l)):/^\d+(?:\.\d+)?$/.test(l)?r.push(Al(Number(l))):r.push(Bt(["+","-","*","/"].includes(l)?` ${l} `:l)),s=o+l.length}if(s<e.length){const a=e.slice(s);a.trim()&&r.push(Bt(a))}return r.length||r.push(Fn()),r}function C1(n=""){const e=F("select","cp-input-select cp-rule-token-insert-select");e.appendChild(F("option","",{value:"",text:re.rules.insertToken}));const t=document.createElement("optgroup");t.label=re.rules.detailVariables;for(const a of Tr("detail"))t.appendChild(F("option","",{value:`var:${a.id}`,text:a.label}));const i=document.createElement("optgroup");i.label=re.rules.overallVariables;for(const a of Tr("overall"))i.appendChild(F("option","",{value:`var:${a.id}`,text:a.label}));const r=document.createElement("optgroup");r.label=re.rules.number,r.appendChild(F("option","",{value:"number",text:re.rules.number}));const s=document.createElement("optgroup");s.label=re.rules.mathActions;for(const a of Ld)s.appendChild(F("option","",{value:a.value,text:a.label}));return e.append(t,i,r,s),n&&(e.value=n),e}function T1(n=""){const e=F("select","cp-input-select cp-rule-token-action-select cp-rule-token-value-select");e.appendChild(F("option","",{value:"",text:re.rules.insertVariable}));const t=document.createElement("optgroup");t.label=re.rules.detailVariables;for(const s of Tr("detail"))t.appendChild(F("option","",{value:`var:${s.id}`,text:s.label}));const i=document.createElement("optgroup");i.label=re.rules.overallVariables;for(const s of Tr("overall"))i.appendChild(F("option","",{value:`var:${s.id}`,text:s.label}));const r=document.createElement("optgroup");return r.label=re.rules.number,r.appendChild(F("option","",{value:"number",text:re.rules.number})),e.append(t,i,r),n&&(e.value=n),e}function A1(n=""){const e=F("select","cp-input-select cp-rule-token-action-select cp-rule-token-math-select");e.appendChild(F("option","",{value:"",text:re.rules.mathActions}));for(const t of Ld)e.appendChild(F("option","",{value:t.value,text:t.label}));return n&&(e.value=n),e}function Fd(n){const e=String(n||"");return e?e.startsWith("var:")?[Tl(e.slice(4))]:e==="number"?[Al(0)]:e.startsWith("math:")?E1(e):[]:[]}function R1(n){return(Array.isArray(n)?n:[]).some(e=>(e==null?void 0:e.type)==="slot")}function zn(n){var s,a;if(!(n!=null&&n.tokenEditor))return;const e=n.tokenEditor;e.innerHTML="";const t=Array.isArray(n.tokens)?n.tokens:[];(!Number.isInteger(n.pendingInsertIndex)||n.pendingInsertIndex<0||n.pendingInsertIndex>t.length)&&(n.pendingInsertIndex=null);const i=(o,l)=>{var f;const c=Number(o),u=Number(l);if(!Number.isInteger(c)||!Number.isInteger(u)||c<0||c>=n.tokens.length||u<0||u>n.tokens.length)return;const[d]=n.tokens.splice(c,1);let h=u;c<u&&(h-=1),n.tokens.splice(h,0,d),n.dragTokenIndex=null,zn(n),(f=n.onExpressionChanged)==null||f.call(n)},r=o=>{const l=F("div","cp-rule-token-gap"),c=F("button","cp-rule-token-gap-btn",{type:"button"});zt(c,kt.add,re.rules.insertHere),c.classList.toggle("is-armed",n.pendingInsertIndex===o),c.addEventListener("click",()=>{n.pendingInsertIndex=o,zn(n)}),l.addEventListener("dragover",u=>{Number.isInteger(n.dragTokenIndex)&&u.preventDefault()}),l.addEventListener("drop",u=>{Number.isInteger(n.dragTokenIndex)&&(u.preventDefault(),i(n.dragTokenIndex,o))}),l.appendChild(c),e.appendChild(l)};r(0),t.length===0&&e.appendChild(F("span","cp-rule-token-placeholder",{text:re.rules.tokenEditorPlaceholder}));for(let o=0;o<t.length;o++){const l=su(t[o]);if(!l)continue;if(n.tokens[o]=l,l.type==="slot"){const u=F("button","cp-rule-token-slot",{type:"button",text:re.rules.selectValue});if(u.draggable=!0,u.addEventListener("dragstart",d=>{var h;n.dragTokenIndex=o,(h=d.dataTransfer)==null||h.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.addEventListener("click",()=>{n.insertContext={mode:"replace",index:o},zn(n)}),e.appendChild(u),((s=n.insertContext)==null?void 0:s.mode)==="replace"&&((a=n.insertContext)==null?void 0:a.index)===o){const d=C1();d.classList.add("cp-rule-token-picker"),d.addEventListener("change",()=>{var f;const h=Fd(d.value).map(su).filter(Boolean);h.length&&(n.tokens.splice(o,1,...h),n.insertContext=null,zn(n),(f=n.onExpressionChanged)==null||f.call(n))}),e.appendChild(d),requestAnimationFrame(()=>d.focus())}r(o+1);continue}if(l.type==="pill"){const u=F("button","cp-rule-token-pill",{type:"button",title:l.code});u.draggable=!0,u.addEventListener("dragstart",d=>{var h;n.dragTokenIndex=o,(h=d.dataTransfer)==null||h.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.append(F("span","cp-rule-token-pill-label",{text:l.label}),F("span","cp-rule-token-pill-remove",{html:Jo})),u.addEventListener("click",()=>{var d;n.tokens.splice(o,1),zn(n),(d=n.onExpressionChanged)==null||d.call(n)}),e.appendChild(u),r(o+1);continue}if(l.type==="number"){const u=F("div","cp-rule-token-number-wrap");u.draggable=!0,u.addEventListener("dragstart",f=>{var g;n.dragTokenIndex=o,(g=f.dataTransfer)==null||g.setData("text/plain",String(o)),f.dataTransfer&&(f.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null});const d=F("input","cp-input-number cp-rule-token-number",{type:"number",step:.001,value:String(l.value??0)});d.addEventListener("change",()=>{var f;l.value=Number(d.value),(f=n.onExpressionChanged)==null||f.call(n)});const h=F("button","cp-rule-token-number-remove",{type:"button",title:"Remove token"});h.appendChild(F("span","cp-rule-token-pill-remove",{html:Jo})),h.addEventListener("click",f=>{var g;f.preventDefault(),f.stopPropagation(),n.tokens.splice(o,1),zn(n),(g=n.onExpressionChanged)==null||g.call(n)}),u.append(d,h),e.appendChild(u),r(o+1);continue}const c=F("button","cp-rule-token-math",{type:"button",text:l.code.trim()||l.code});c.draggable=!0,c.addEventListener("dragstart",u=>{var d;n.dragTokenIndex=o,(d=u.dataTransfer)==null||d.setData("text/plain",String(o)),u.dataTransfer&&(u.dataTransfer.effectAllowed="move")}),c.addEventListener("dragend",()=>{n.dragTokenIndex=null}),c.addEventListener("click",()=>{var u;n.tokens.splice(o,1),zn(n),(u=n.onExpressionChanged)==null||u.call(n)}),e.appendChild(c),r(o+1)}}function P1(n){return nu[n]||nu.rules}function N1(n,e){const t=F("div","cp-setting-row cp-setting-range"),i=F("div","cp-setting-label-wrap"),r=F("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const s=F("div","cp-setting-range-controls"),a=F("div","cp-range-container cp-range-slider"),o=F("input","cp-input-number",{type:"number",step:n.step}),l=F("input","cp-input-number",{type:"number",step:n.step});Q_.create(a,{start:[n.min,n.max],connect:!0,range:{min:n.min,max:n.max},step:n.step,behaviour:"tap-drag"});const c=a.noUiSlider;let u=!0;const d=(g,_)=>{o.value=String(g),l.value=String(_)};c.on("update",g=>{const _=Number(g[0]),m=Number(g[1]);d(_,m),!u&&n.set(_,m)});const h=()=>{let g=Number(o.value),_=Number(l.value);if(Number.isFinite(g)||(g=n.min),Number.isFinite(_)||(_=n.max),g=Bn(g,n.min,n.max),_=Bn(_,n.min,n.max),g>_){const m=g;g=_,_=m}u=!0,c.set([g,_]),u=!1,d(g,_),n.set(g,_)};o.addEventListener("input",h),l.addEventListener("input",h),o.addEventListener("change",h),l.addEventListener("change",h);const f=()=>{const g=n.get();u=!0,c.set([g.min,g.max]),u=!1,d(g.min,g.max)};return s.append(a,o,l),t.append(i,s),Ht(e,f,n.syncKeys),f(),u=!1,t}function L1(n,e){const t=F("div","cp-setting-row"),i=F("div","cp-setting-label-wrap"),r=F("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const s=F("div","cp-setting-controls"),a=F("input","cp-input-range",{type:"range",min:n.min,max:n.max,step:n.step}),o=F("input","cp-input-number",{type:"number",step:n.step,min:n.min,max:n.max}),l=u=>{const d=Bn(u,n.min,n.max);nn(n.key,d)};a.addEventListener("input",()=>l(Number(a.value))),o.addEventListener("change",()=>l(Number(o.value)));const c=()=>{const u=Number(ee[n.key]);a.value=String(Number.isFinite(u)?u:n.min),o.value=String(Number.isFinite(u)?u:n.min)};return s.append(a,o),t.append(i,s),Ht(e,c,[n.key]),c(),t}function _r(n,e){const t=document.createDocumentFragment();for(const i of n){const r=F("option","",{value:i.value,text:i.label});i.title&&(r.title=i.title),String(i.value)===String(e)&&(r.selected=!0),t.appendChild(r)}return t}function au(n=ft){const e=F("select","cp-input-select");e.appendChild(F("option","",{value:ft,text:re.rules.selectValue}));const t=document.createElement("optgroup");t.label=re.rules.detailVariables;for(const r of Tr("detail"))t.appendChild(F("option","",{value:r.id,text:r.label}));const i=document.createElement("optgroup");i.label=re.rules.overallVariables;for(const r of Tr("overall"))i.appendChild(F("option","",{value:r.id,text:r.label}));return e.append(t,i),n&&n!==ft&&(e.value=n),e}function D1(n){const e=F("div","cp-menu-pane-inner"),t=".ssp-preset.json",i=(q="")=>{const U=String(q||"").trim();return U?/\.ssp-preset\.json$/i.test(U)?U.replace(/\.ssp-preset\.json$/i,""):U.replace(/\.[^./\\]+$/g,""):""},r=(q,U)=>({schemaVersion:1,name:String(q||"").trim(),params:U&&typeof U=="object"?U:{},updatedAt:new Date().toISOString()}),s=(q,U="")=>{const X=JSON.parse(String(q||"{}"));if(!X||typeof X!="object")throw new Error("Preset file is invalid.");const me=String((X==null?void 0:X.name)||"").trim()||i(U);return X!=null&&X.params&&typeof X.params=="object"?{name:me,params:X.params}:{name:me,params:X}},a=async(q,U)=>{const X=String(q||"").trim(),me=`${X||"seesound-preset"}${t}`,$e=r(X,U);if(typeof window.showSaveFilePicker=="function")try{const _e=await window.showSaveFilePicker({suggestedName:me,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Preset",accept:{"application/json":[t,".json"]}}]});if(!_e)return!1;const Te=await _e.createWritable();return await Te.write(JSON.stringify($e,null,2)),await Te.close(),!0}catch{return!1}const ie=new Blob([JSON.stringify($e,null,2)],{type:"application/json"}),fe=URL.createObjectURL(ie),ye=document.createElement("a");return ye.href=fe,ye.download=me,document.body.appendChild(ye),ye.click(),ye.remove(),URL.revokeObjectURL(fe),!0},o=async()=>{if(typeof window.showOpenFilePicker=="function")try{const[q]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Preset",accept:{"application/json":[t,".json"]}}]});if(!q)return null;const U=await q.getFile(),X=await U.text();return s(X,U.name)}catch{return null}return new Promise(q=>{const U=document.createElement("input");U.type="file",U.accept=`${t},.json`,U.style.display="none",U.addEventListener("change",async()=>{var X;try{const me=(X=U.files)==null?void 0:X[0];if(!me){q(null);return}const $e=await me.text();q(s($e,me.name))}catch{q(null)}finally{U.remove()}},{once:!0}),document.body.appendChild(U),U.click()})},l=(q="")=>{const U=String(q||"").trim();return U?/\.ssp\.json$/i.test(U)?U.replace(/\.ssp\.json$/i,""):U.replace(/\.[^./\\]+$/g,""):""},c=F("section","cp-section"),u=F("div","cp-section-title-row"),d=F("h3","cp-section-title",{text:re.file.project}),h=F("span","cp-project-name"),f=re.file.projectNew||"New Project",g=(q={})=>{const U=String((q==null?void 0:q.projectName)||"").trim(),X=String((q==null?void 0:q.fileName)||"").trim(),me=U||l(X)||f;h.textContent=me,h.title=me};g(),u.append(d,h),c.appendChild(u);const _=F("div","cp-button-grid"),m=F("button","cp-btn",{text:re.file.projectLoad}),p=F("button","cp-btn",{text:re.file.projectSave}),S=F("button","cp-btn",{text:re.file.projectSaveAs});zt(m,kt.load,re.file.projectLoad),zt(p,kt.save,re.file.projectSave),zt(S,kt.saveAs,re.file.projectSaveAs),_.append(m,p,S),c.appendChild(_),m.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-open-request"))),p.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-request"))),S.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-as-request"))),window.addEventListener("seesound:project-file-state",q=>{g((q==null?void 0:q.detail)||{})}),window.addEventListener("seesound:project-loaded",q=>{g((q==null?void 0:q.detail)||{})}),window.addEventListener("seesound:project-autosaved",q=>{g((q==null?void 0:q.detail)||{})});const v=F("section","cp-section cp-preset-bar");v.appendChild(F("h3","cp-section-title",{text:re.file.presets}));const b=F("div","cp-preset-row"),R=F("select","cp-input-select cp-preset-sel"),E=F("input","cp-input-text cp-preset-name",{type:"text",placeholder:re.file.presetNamePlaceholder}),T=F("button","cp-btn",{text:re.file.presetLoad}),A=F("button","cp-btn",{text:re.file.presetUpload||"Upload"}),C=F("button","cp-btn",{text:re.file.presetSaveProject||re.file.presetSave}),x=F("button","cp-btn",{text:re.file.presetSaveLocal||"Save Local"}),L=F("button","cp-btn cp-btn-danger",{text:re.file.presetRemove});zt(T,kt.load,re.file.presetLoad),zt(A,kt.upload,re.file.presetUpload||"Upload"),zt(C,kt.save,re.file.presetSaveProject||re.file.presetSave),zt(x,kt.saveAs,re.file.presetSaveLocal||"Save Local"),zt(L,kt.remove,re.file.presetRemove),b.append(R,T,A,L,E,C,x),v.appendChild(b);async function W(){const q=await yd(),U=String(R.value||"");R.innerHTML="",R.appendChild(F("option","",{value:"",text:re.file.presetSelectPlaceholder}));for(const X of q)R.appendChild(F("option","",{value:X,text:X}));U&&q.includes(U)&&(R.value=U)}R.addEventListener("change",()=>{R.value&&(E.value=R.value)}),T.addEventListener("click",async()=>{const q=String(R.value||"").trim();if(!q)return;const U=await f_(q);U!=null&&U.params&&Gt(U.params)}),A.addEventListener("click",async()=>{const q=await o();if(!(q!=null&&q.params)||typeof q.params!="object")return;const U=String(q.name||"").trim();Gt(q.params),U&&(await la(U,q.params),await W(),R.value=U,E.value=U,window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),C.addEventListener("click",async()=>{const q=String(E.value||"").trim(),U=String(R.value||"").trim(),X=q||U;if(!X)return;const me=oa();window.dispatchEvent(new CustomEvent("seesound:project-preset-save-request",{detail:{name:X,params:me}})),await la(X,me),await W(),R.value=X,E.value=X,window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}),x.addEventListener("click",async()=>{const q=String(E.value||"").trim(),U=String(R.value||"").trim(),X=q||U;!X||!await a(X,oa())||(E.value=X)}),L.addEventListener("click",async()=>{const q=String(R.value||"").trim();q&&(await p_(q),E.value="",await W(),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),window.addEventListener("seesound:preset-library-changed",()=>{W()});const j=F("section","cp-section");j.appendChild(F("h3","cp-section-title",{text:re.file.export}));const Q=F("div","cp-button-grid"),Z=F("button","cp-btn",{text:re.file.exportImage}),K=F("button","cp-btn",{text:re.file.exportImageNoBg}),ce=F("button","cp-btn",{text:re.file.exportVideo}),G=F("button","cp-btn",{text:re.file.exportObj});zt(Z,kt.exportImage,re.file.exportImage),zt(K,kt.exportImageNoBg,re.file.exportImageNoBg),zt(ce,kt.exportVideo,re.file.exportVideo),zt(G,kt.exportObj,re.file.exportObj),Q.append(Z,K,ce,G),j.appendChild(Q),Z.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image"))),K.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image-no-bg"))),ce.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-video-toggle"))),G.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-obj"))),e.append(c,v,j),n.appendChild(e),W()}function F1(n,e){const t=F("div","cp-menu-pane-inner"),i=F("section","cp-section");i.appendChild(F("h3","cp-section-title",{text:re.view.canvasSize}));const r=F("input","cp-input-number",{type:"number",min:160,step:1}),s=F("input","cp-input-number",{type:"number",min:120,step:1}),a=F("div","cp-inline-pair");a.append(F("label","cp-setting-label",{text:re.view.width}),r,F("label","cp-setting-label",{text:re.view.height}),s),i.appendChild(a);const o=F("input","cp-input-range",{type:"range",min:5,max:400,step:1}),l=F("input","cp-input-number",{type:"number",min:5,max:400,step:1}),c=F("div","cp-setting-row"),u=F("div","cp-setting-label-wrap");u.appendChild(F("label","cp-setting-label",{text:re.view.canvasZoom}));const d=F("div","cp-setting-controls");d.append(o,l),c.append(u,d),i.appendChild(c);const h=F("section","cp-section");h.appendChild(F("h3","cp-section-title",{text:re.view.backgroundColor}));const f=F("input","cp-input-color",{type:"color"});h.appendChild(f);const g=F("section","cp-section");g.appendChild(F("h3","cp-section-title",{text:re.view.cameraPosition}));const _=F("input","cp-input-number",{type:"number",step:1}),m=F("input","cp-input-number",{type:"number",step:1}),p=F("input","cp-input-number",{type:"number",step:1}),S=F("div","cp-inline-triplet");S.append(_,m,p),g.appendChild(S),g.appendChild(F("h3","cp-section-title",{text:re.view.cameraTarget}));const v=F("input","cp-input-number",{type:"number",step:1}),b=F("input","cp-input-number",{type:"number",step:1}),R=F("input","cp-input-number",{type:"number",step:1}),E=F("div","cp-inline-triplet");E.append(v,b,R),g.appendChild(E);const T=F("div","cp-button-grid"),A=F("button","cp-btn",{text:re.view.cameraReset}),C=F("button","cp-btn",{text:re.view.cameraFit}),x=F("button","cp-btn",{text:re.view.cameraClean});zt(A,kt.reset,re.view.cameraReset),zt(C,kt.fit,re.view.cameraFit),zt(x,kt.clean,re.view.cameraClean),T.append(A,C,x),g.appendChild(T);const L=F("section","cp-section");L.appendChild(F("h3","cp-section-title",{text:re.view.projection}));const W=F("select","cp-input-select");W.appendChild(_r([{value:"axonometric",label:re.view.projectionAxo},{value:"perspective",label:re.view.projectionPerspective}],ee.cameraProjection));const j=F("select","cp-input-select");j.appendChild(_r([{value:"orthoXY",label:re.view.axoOrthoXY},{value:"topXZ",label:re.view.axoOrthoXZ},{value:"orthoYZ",label:re.view.axoOrthoYZ},{value:"isometric",label:re.view.axoIsometric}],ee.cameraAxoPreset)),L.append(W,j);const Q=F("section","cp-section");Q.appendChild(F("h3","cp-section-title",{text:re.view.angleOfView}));const Z=F("input","cp-input-range",{type:"range",min:20,max:120,step:1}),K=F("input","cp-input-number",{type:"number",min:20,max:120,step:1}),ce=F("div","cp-setting-controls");ce.append(Z,K),Q.appendChild(ce);const G=F("section","cp-section");G.appendChild(F("h3","cp-section-title",{text:re.view.blending}));const q=F("select","cp-input-select");q.appendChild(_r([{value:"source-over",label:"Normal"},{value:"screen",label:"Screen"},{value:"alpha",label:"Alpha"},{value:"multiply",label:"Multiply"}],ee.blendMode)),G.appendChild(q);const U=F("section","cp-section");U.appendChild(F("h3","cp-section-title",{text:re.view.postProcessing}));const X=F("input","cp-input-toggle",{type:"checkbox"}),me=F("input","cp-input-toggle",{type:"checkbox"}),$e=F("input","cp-input-toggle",{type:"checkbox"}),ie=F("label","cp-toggle-row");ie.append(X,F("span","cp-setting-label",{text:re.view.postProcessingEnabled}));const fe=F("label","cp-toggle-row");fe.append(me,F("span","cp-setting-label",{text:re.view.bloomEnabled}));const ye=F("label","cp-toggle-row");ye.append($e,F("span","cp-setting-label",{text:re.view.bokehEnabled}));const _e=F("input","cp-input-range",{type:"range",min:0,max:4,step:.01}),Te=F("input","cp-input-number",{type:"number",min:0,max:4,step:.01}),Oe=F("div","cp-setting-row");Oe.append(F("label","cp-setting-label",{text:re.view.bloomStrength}),(()=>{const k=F("div","cp-setting-controls");return k.append(_e,Te),k})());const ke=F("input","cp-input-range",{type:"range",min:0,max:2,step:.01}),ot=F("input","cp-input-number",{type:"number",min:0,max:2,step:.01}),je=F("div","cp-setting-row");je.append(F("label","cp-setting-label",{text:re.view.bloomRadius}),(()=>{const k=F("div","cp-setting-controls");return k.append(ke,ot),k})());const dt=F("input","cp-input-range",{type:"range",min:0,max:1,step:.01}),D=F("input","cp-input-number",{type:"number",min:0,max:1,step:.01}),Ct=F("div","cp-setting-row");Ct.append(F("label","cp-setting-label",{text:re.view.bloomThreshold}),(()=>{const k=F("div","cp-setting-controls");return k.append(dt,D),k})());const Je=F("input","cp-input-range",{type:"range",min:1,max:5e3,step:1}),Qe=F("input","cp-input-number",{type:"number",min:1,max:5e3,step:1}),Ie=F("div","cp-setting-row");Ie.append(F("label","cp-setting-label",{text:re.view.bokehFocus}),(()=>{const k=F("div","cp-setting-controls");return k.append(Je,Qe),k})());const ct=F("input","cp-input-range",{type:"range",min:0,max:.001,step:1e-5}),Le=F("input","cp-input-number",{type:"number",min:0,max:.001,step:1e-5}),P=F("div","cp-setting-row");P.append(F("label","cp-setting-label",{text:re.view.bokehAperture}),(()=>{const k=F("div","cp-setting-controls");return k.append(ct,Le),k})());const y=F("input","cp-input-range",{type:"range",min:0,max:.1,step:5e-4}),z=F("input","cp-input-number",{type:"number",min:0,max:.1,step:5e-4}),se=F("div","cp-setting-row");se.append(F("label","cp-setting-label",{text:re.view.bokehMaxBlur}),(()=>{const k=F("div","cp-setting-controls");return k.append(y,z),k})()),U.append(ie,fe,Oe,je,Ct,ye,Ie,P,se);const ae=F("section","cp-section");ae.appendChild(F("h3","cp-section-title",{text:re.view.guides}));const ne=F("input","cp-input-toggle",{type:"checkbox"}),de=F("input","cp-input-toggle",{type:"checkbox"}),he=F("label","cp-inline-pair");he.append(ne,F("span","cp-setting-label",{text:re.view.guideAxes}));const Se=F("label","cp-inline-pair");Se.append(de,F("span","cp-setting-label",{text:re.view.guideCoordinates})),ae.append(he,Se),r.addEventListener("change",()=>{const k=Math.max(160,Math.floor(Number(r.value)||160));nn("canvasWidth",k)}),s.addEventListener("change",()=>{const k=Math.max(120,Math.floor(Number(s.value)||120));nn("canvasHeight",k)});const Ze=k=>{const ge=Bn(k,5,400);nn("canvasScale",Math.floor(ge))};o.addEventListener("input",()=>Ze(Number(o.value))),l.addEventListener("change",()=>Ze(Number(l.value))),f.addEventListener("input",()=>{const k=y1(f.value);Gt({defaultBackgroundHue:Math.round(k.h),defaultBackgroundSaturation:Math.round(k.s),defaultBackgroundLightness:Math.round(k.l)})});const pe=()=>{_.value=String(Number(ee.cameraPosX??0)),m.value=String(Number(ee.cameraPosY??0)),p.value=String(Number(ee.cameraPosZ??420)),v.value=String(Number(ee.cameraTargetX??0)),b.value=String(Number(ee.cameraTargetY??0)),R.value=String(Number(ee.cameraTargetZ??0))},Pe=()=>{Gt({cameraPosX:Number(_.value)||0,cameraPosY:Number(m.value)||0,cameraPosZ:Number(p.value)||0,cameraTargetX:Number(v.value)||0,cameraTargetY:Number(b.value)||0,cameraTargetZ:Number(R.value)||0})};for(const k of[_,m,p,v,b,R])k.addEventListener("change",Pe);A.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-reset-camera"))}),C.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-fit-camera"))}),x.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-clean-canvas"))}),W.addEventListener("change",()=>nn("cameraProjection",W.value)),j.addEventListener("change",()=>nn("cameraAxoPreset",j.value)),q.addEventListener("change",()=>nn("blendMode",q.value)),X.addEventListener("change",()=>nn("postProcessEnabled",X.checked?1:0)),me.addEventListener("change",()=>nn("bloomEnabled",me.checked?1:0)),$e.addEventListener("change",()=>nn("bokehEnabled",$e.checked?1:0));const Fe=({slider:k,number:ge,key:ve,min:Xe,max:Ke})=>{const nt=st=>{const He=Bn(st,Xe,Ke);nn(ve,He)};k.addEventListener("input",()=>nt(Number(k.value))),ge.addEventListener("change",()=>nt(Number(ge.value)))};Fe({slider:_e,number:Te,key:"bloomStrength",min:0,max:4}),Fe({slider:ke,number:ot,key:"bloomRadius",min:0,max:2}),Fe({slider:dt,number:D,key:"bloomThreshold",min:0,max:1}),Fe({slider:Je,number:Qe,key:"bokehFocus",min:1,max:5e3}),Fe({slider:ct,number:Le,key:"bokehAperture",min:0,max:.001}),Fe({slider:y,number:z,key:"bokehMaxBlur",min:0,max:.1});const Be=k=>{nn("cameraAngleOfView",Bn(k,20,120))};Z.addEventListener("input",()=>Be(Number(Z.value))),K.addEventListener("change",()=>Be(Number(K.value))),ne.addEventListener("change",()=>{nn("originSignEnabled",ne.checked?1:0)}),de.addEventListener("change",()=>{nn("coordinateGuidesEnabled",de.checked?1:0)}),window.addEventListener("seesound:origin-sign-state",k=>{var ve;const ge=(ve=k==null?void 0:k.detail)==null?void 0:ve.enabled;typeof ge=="boolean"&&(ne.checked=ge)}),window.addEventListener("seesound:coordinate-guide-state",k=>{var ve;const ge=(ve=k==null?void 0:k.detail)==null?void 0:ve.enabled;typeof ge=="boolean"&&(de.checked=ge)});const Ae=()=>{r.value=String(Number(ee.canvasWidth??0)||0),s.value=String(Number(ee.canvasHeight??0)||0)},et=()=>{const k=Math.max(5,Math.min(400,Math.floor(Number(ee.canvasScale)||100)));o.value=String(k),l.value=String(k)},We=()=>{const k=M1(Number(ee.defaultBackgroundHue??0),Number(ee.defaultBackgroundSaturation??0),Number(ee.defaultBackgroundLightness??0));f.value=S1(k.r,k.g,k.b)},vt=()=>{W.value=String(ee.cameraProjection||"axonometric"),j.value=String(ee.cameraAxoPreset||"orthoXY");const k=W.value==="perspective";Q.style.display=k?"":"none"},O=()=>{q.value=String(ee.blendMode||"screen")},Me=()=>{const k=Number(ee.cameraAngleOfView??55);Z.value=String(k),K.value=String(k)},te=()=>{X.checked=Number(ee.postProcessEnabled??1)>=.5,me.checked=Number(ee.bloomEnabled??1)>=.5,$e.checked=Number(ee.bokehEnabled??1)>=.5},oe=()=>{ne.checked=Number(ee.originSignEnabled??1)>=.5,de.checked=Number(ee.coordinateGuidesEnabled??1)>=.5},Ee=()=>{const k=Number(ee.bloomStrength??1.15);_e.value=String(k),Te.value=String(k)},be=()=>{const k=Number(ee.bloomRadius??.7);ke.value=String(k),ot.value=String(k)},M=()=>{const k=Number(ee.bloomThreshold??.18);dt.value=String(k),D.value=String(k)},N=()=>{const k=Number(ee.bokehFocus??380);Je.value=String(k),Qe.value=String(k)},B=()=>{const k=Number(ee.bokehAperture??12e-5);ct.value=String(k),Le.value=String(k)},J=()=>{const k=Number(ee.bokehMaxBlur??.01);y.value=String(k),z.value=String(k)},ue=()=>{pe()};Ht(e,Ae,["canvasWidth","canvasHeight"]),Ht(e,et,["canvasScale"]),Ht(e,We,["defaultBackgroundHue","defaultBackgroundSaturation","defaultBackgroundLightness"]),Ht(e,vt,["cameraProjection","cameraAxoPreset"]),Ht(e,O,["blendMode"]),Ht(e,Me,["cameraAngleOfView"]),Ht(e,te,["postProcessEnabled","bloomEnabled","bokehEnabled"]),Ht(e,oe,["originSignEnabled","coordinateGuidesEnabled"]),Ht(e,Ee,["bloomStrength"]),Ht(e,be,["bloomRadius"]),Ht(e,M,["bloomThreshold"]),Ht(e,N,["bokehFocus"]),Ht(e,B,["bokehAperture"]),Ht(e,J,["bokehMaxBlur"]),Ht(e,ue,["cameraPosX","cameraPosY","cameraPosZ","cameraTargetX","cameraTargetY","cameraTargetZ"]),window.addEventListener("seesound:camera-state",k=>{var ht,_t,wt,xe,Ft,jt;const ge=(k==null?void 0:k.detail)||{},ve=Number((ht=ge.position)==null?void 0:ht.x),Xe=Number((_t=ge.position)==null?void 0:_t.y),Ke=Number((wt=ge.position)==null?void 0:wt.z),nt=Number((xe=ge.target)==null?void 0:xe.x),st=Number((Ft=ge.target)==null?void 0:Ft.y),He=Number((jt=ge.target)==null?void 0:jt.z),ut=Number(ge.fov),lt=String(ge.projection||"");Number.isFinite(ve)&&(_.value=String(ve)),Number.isFinite(Xe)&&(m.value=String(Xe)),Number.isFinite(Ke)&&(p.value=String(Ke)),Number.isFinite(nt)&&(v.value=String(nt)),Number.isFinite(st)&&(b.value=String(st)),Number.isFinite(He)&&(R.value=String(He)),Number.isFinite(ut)&&(Z.value=String(ut),K.value=String(ut)),(lt==="perspective"||lt==="axonometric")&&(W.value=lt,Q.style.display=lt==="perspective"?"":"none")}),Ae(),et(),We(),vt(),O(),Me(),te(),oe(),Ee(),be(),M(),N(),B(),J(),ue(),t.append(i,h,g,L,Q,G,U,ae),n.appendChild(t)}function I1(n,e){const t=F("div","cp-menu-pane-inner"),i=F("section","cp-section");i.appendChild(F("h3","cp-section-title",{text:re.settings.sliders}));const r=F("div","cp-setting-row"),s=F("div","cp-setting-label-wrap");s.appendChild(F("label","cp-setting-label",{text:re.settings.audioResolution,title:"Technical term: FFT Size. Frequency-domain analysis resolution."}));const a=F("select","cp-input-select");a.appendChild(_r(g1.map(u=>({value:u,label:String(u)})),ee.fftSize)),a.addEventListener("change",()=>{nn("fftSize",Number(a.value))}),r.append(s,a),i.appendChild(r);for(const u of v1)i.appendChild(L1(u,e));const o=F("button","cp-btn cp-btn-wide",{text:re.settings.resetDefaults});zt(o,kt.reset,re.settings.resetDefaults),o.addEventListener("click",()=>{bd()}),i.appendChild(o);const l=F("section","cp-section");l.appendChild(F("h3","cp-section-title",{text:re.settings.normalizationRanges}));for(const u of _1)l.appendChild(N1(u,e));const c=()=>{a.value=String(ee.fftSize||2048)};Ht(e,c,["fftSize"]),c(),t.append(i,l),n.appendChild(t)}function ou(n){var s;const e=n.definition.output;if(n.definition.type==="enum")return{operator:"set",output:e,value:n.enumValue||((s=n.definition.options)==null?void 0:s[0])||"square"};const t=n.definition.type==="enum"?"":Dd(n.tokens);if(n.definition.type!=="enum"&&R1(n.tokens))return null;n.expression=t;const i=String(t||"").trim();if(!i)return null;const r=Number(i);return Number.isFinite(r)&&/^[-+]?\d+(\.\d+)?$/.test(i)?{operator:"set",output:e,value:r}:Nd.has(i)?{operator:"set",output:e,input:i}:{operator:"set",output:e,expression:i}}function U1(n,e){var p;const t=F("div","cp-menu-pane-inner"),i=F("div","cp-rules-wrapper");t.appendChild(i);const r=new Map,s=[];function a(S,v){return`${S}:${v}`}function o(S,v=""){const b=[r.get(a(S,"red")),r.get(a(S,"green")),r.get(a(S,"blue"))].filter(Boolean),R=r.get(a(S,"hue"));if(!R||b.length===0)return;if(v==="red"||v==="green"||v==="blue"){const A=r.get(a(S,v));if(A){for(const C of b)C.enabled=!!A.enabled;A.enabled&&String(A.expression||"").trim()&&(R.enabled=!1)}}if(v==="hue"&&R.enabled&&String(R.expression||"").trim())for(const A of b)A.enabled=!1;const E=b.some(A=>A.enabled&&String(A.expression||"").trim()),T=R.enabled&&String(R.expression||"").trim();if(E&&T)if(v==="hue")for(const A of b)A.enabled=!1;else R.enabled=!1;for(const A of b)A.toggle&&(A.toggle.checked=A.enabled);R.toggle&&(R.toggle.checked=R.enabled)}function l(S){if(!S.conditionEnabled||S.conditionOperator==="always")return{operator:"always"};const v=String(S.conditionDetail||ft),b=String(S.conditionOverall||ft),R=v!==ft?v:b!==ft?b:"";if(!R)return{operator:"always"};const E=String(S.conditionValueInput||ft);return E&&E!==ft?{operator:S.conditionOperator,input:R,valueInput:E}:{operator:S.conditionOperator,input:R,value:Number(S.conditionValue)||0}}let c=!1,u=!1;function d(S,v=!1){if(!S||!v&&!S.enabled||!v&&S.conditionEnabled&&!(S.conditionDetail!==ft||S.conditionOverall!==ft))return;const b=ou(S);!v&&S.enabled&&!b||h()}function h(){if(c)return;o("spawnedParticles"),o("lines"),o("background");const S=[];for(let v=0;v<s.length;v++){const b=s[v],R=ou(b);R&&S.push({id:`${b.definition.target}-${b.definition.output}`,group:`${b.definition.section}/${b.definition.subgroup}`,subgroup:"",enabled:!!b.enabled,target:b.definition.target,condition:l(b),actions:[R],order:v})}u=!0,nn("ruleBlocks",S)}function f(S){var v,b,R,E,T,A;c=!0;try{for(const x of s)x.enabled=!1,x.conditionEnabled=!1,x.conditionOperator="always",x.conditionDetail=ft,x.conditionOverall=ft,x.conditionValue=0,x.conditionValueInput=ft,x.expression="",x.tokens=[],x.insertContext=null,x.pendingInsertIndex=null,x.enumValue=((v=x.definition.options)==null?void 0:v[0])||"square";const C=Array.isArray(S)?S:[];for(const x of C){const L=String((x==null?void 0:x.target)||""),W=Array.isArray(x==null?void 0:x.actions)?x.actions[0]:null,j=String((W==null?void 0:W.output)||""),Q=a(L,j),Z=r.get(Q);if(!Z)continue;Z.enabled=x.enabled!==!1;const K=String(((b=x==null?void 0:x.condition)==null?void 0:b.operator)||"always");Z.conditionOperator=eu.includes(K)?K:"always",Z.conditionValue=Number(((R=x==null?void 0:x.condition)==null?void 0:R.value)??0);const ce=String(((E=x==null?void 0:x.condition)==null?void 0:E.valueInput)||"");Z.conditionValueInput=Nd.has(ce)?ce:ft;const G=String(((T=x==null?void 0:x.condition)==null?void 0:T.input)||""),q=Yo(G);(q==null?void 0:q.group)==="detail"?(Z.conditionDetail=G,Z.conditionOverall=ft):(q==null?void 0:q.group)==="overall"&&(Z.conditionOverall=G,Z.conditionDetail=ft),Z.conditionEnabled=Z.conditionOperator!=="always"&&!!G,Z.definition.type==="enum"?Z.enumValue=String((W==null?void 0:W.value)||Z.enumValue):typeof(W==null?void 0:W.expression)=="string"?Z.expression=W.expression:typeof(W==null?void 0:W.input)=="string"?Z.expression=W.input:(W==null?void 0:W.value)!==void 0&&(W==null?void 0:W.value)!==null&&(Z.expression=String(W.value)),Z.tokens=w1(Z.expression)}o("spawnedParticles"),o("lines"),o("background");for(const x of s)x.toggle&&(x.toggle.checked=x.enabled),(A=x.syncConditionUi)==null||A.call(x),x.enumSelect&&(x.enumSelect.value=x.enumValue),zn(x)}finally{c=!1}}let g="",_="";for(const S of x1){S.section!==g&&(g=S.section,_="",i.appendChild(F("h3","cp-section-title cp-rule-section-title",{text:g}))),S.subgroup!==_&&(_=S.subgroup,i.appendChild(F("h4","cp-rule-subgroup-title",{text:_})));const v={definition:S,enabled:!1,conditionEnabled:!1,conditionOperator:"always",conditionDetail:ft,conditionOverall:ft,conditionValue:0,conditionValueInput:ft,expression:"",tokens:[],insertContext:null,pendingInsertIndex:null,dragTokenIndex:null,enumValue:((p=S.options)==null?void 0:p[0])||"square",toggle:null,conditionRow:null,syncConditionUi:null,tokenEditor:null,onExpressionChanged:null,enumSelect:null,actionSelect:null},b=F("article","cp-rule-card"),R=F("div","cp-rule-card-header"),E=F("input","cp-input-toggle",{type:"checkbox"}),T=F("div","cp-rule-card-title",{text:S.label});R.append(E,T);const A=F("div","cp-rule-card-condition-builder"),C=F("button","cp-btn cp-rule-condition-add",{type:"button",text:re.rules.addCondition});zt(C,kt.add,re.rules.addCondition);const x=F("div","cp-rule-condition-sentence"),L=F("span","cp-rule-condition-when",{text:re.rules.when}),W=au(ft),j=F("select","cp-input-select cp-rule-condition-operator");j.appendChild(_r(eu.filter(X=>X!=="always").map(X=>({value:X,label:X})),">"));const Q=F("input","cp-input-number",{type:"number",step:.001,value:"0"}),Z=au(ft);Z.classList.add("cp-rule-condition-value-input");const K=F("button","cp-btn cp-btn-danger cp-rule-condition-remove",{type:"button",text:re.rules.removeCondition});zt(K,kt.clear,re.rules.removeCondition),x.append(L,W,j,Q,Z,K),A.append(C,x);const ce=F("div","cp-rule-card-expression");let G=null,q=null,U=null;if(S.type==="enum")G=F("select","cp-input-select"),G.appendChild(_r(S.options.map(X=>({value:X,label:X})),v.enumValue)),ce.appendChild(G);else{const X=F("div","cp-rule-token-row"),me=T1("");U=A1(""),q=F("div","cp-rule-token-editor",{role:"list",tabindex:"0"}),X.append(me,U),ce.append(X,q);const $e=()=>{if(v.expression=Dd(v.tokens),(S.output==="red"||S.output==="green"||S.output==="blue")&&o(S.target,S.output),S.output==="hue"&&o(S.target,"hue"),v.enabled&&!String(v.expression||"").trim()){v.enabled=!1,v.toggle&&(v.toggle.checked=!1),h();return}d(v)};v.onExpressionChanged=$e;const ie=(fe,ye)=>{const _e=Fd(fe);if(_e.length){if(!Number.isInteger(v.pendingInsertIndex)){ye&&(ye.value="");return}v.tokens.splice(v.pendingInsertIndex,0,..._e),v.pendingInsertIndex=null,ye&&(ye.value=""),zn(v),$e()}};me.addEventListener("change",()=>{ie(String(me.value||""),me)}),U.addEventListener("change",()=>{ie(String(U.value||""),U)})}b.append(R,A,ce),i.appendChild(b),v.toggle=E,v.conditionRow=A,v.tokenEditor=q,v.enumSelect=G,v.actionSelect=U,v.syncConditionUi=()=>{if(C.style.display=v.conditionEnabled?"none":"",x.style.display=v.conditionEnabled?"":"none",!v.conditionEnabled)return;j.value=v.conditionOperator==="always"?">":v.conditionOperator;const X=v.conditionDetail!==ft?v.conditionDetail:v.conditionOverall;W.value=X||ft,Q.value=String(Number(v.conditionValue||0)),Z.value=v.conditionValueInput||ft},v.syncConditionUi(),r.set(a(S.target,S.output),v),s.push(v),E.addEventListener("change",()=>{if(v.enabled=E.checked,(S.output==="red"||S.output==="green"||S.output==="blue")&&o(S.target,S.output),S.output==="hue"&&o(S.target,"hue"),!v.enabled){h();return}d(v)}),C.addEventListener("click",()=>{var X;v.conditionEnabled=!0,v.conditionOperator==="always"&&(v.conditionOperator=">"),(X=v.syncConditionUi)==null||X.call(v),d(v)}),j.addEventListener("change",()=>{v.conditionEnabled=!0,v.conditionOperator=j.value,d(v)}),W.addEventListener("change",()=>{const X=String(W.value||ft);if(v.conditionEnabled=!0,v.conditionDetail=ft,v.conditionOverall=ft,X!==ft){const me=Yo(X);(me==null?void 0:me.group)==="detail"?v.conditionDetail=X:(me==null?void 0:me.group)==="overall"&&(v.conditionOverall=X)}d(v)}),Q.addEventListener("change",()=>{v.conditionEnabled=!0,v.conditionValue=Number(Q.value)||0,v.conditionValueInput=ft,d(v)}),Z.addEventListener("change",()=>{v.conditionEnabled=!0;const X=String(Z.value||ft);v.conditionValueInput=X!==ft?X:ft,d(v)}),K.addEventListener("click",()=>{var X;v.conditionEnabled=!1,v.conditionOperator="always",v.conditionDetail=ft,v.conditionOverall=ft,v.conditionValue=0,v.conditionValueInput=ft,(X=v.syncConditionUi)==null||X.call(v),d(v,!0)}),G&&G.addEventListener("change",()=>{v.enumValue=G.value,d(v)}),S.type!=="enum"&&zn(v)}const m=()=>{if(u){u=!1;return}f(Array.isArray(ee.ruleBlocks)?ee.ruleBlocks:[])};Ht(e,m,["ruleBlocks"]),m(),n.appendChild(t)}function O1(n){const e=F("button","cp-menu-button",{type:"button","data-menu-id":n.id,"aria-label":n.label,title:n.label}),t=F("span","cp-menu-icon",{html:P1(n.id)}),i=F("span","cp-menu-label",{text:n.label});return e.append(t,i),e}function B1(n){const e=F("section","cp-menu-pane",{"data-menu-id":n.id}),t=F("div","cp-menu-pane-header");t.appendChild(F("h2","cp-menu-pane-title",{text:n.label}));const i=F("button","cp-btn cp-menu-collapse",{type:"button",text:re.menu.collapse});zt(i,kt.close,re.menu.collapse),t.appendChild(i);const r=F("div","cp-menu-pane-body");return e.append(t,r),{pane:e,body:r,closeButton:i}}function k1(n){if(!n)return;n.innerHTML="",n.className="",n.classList.add("cp-shell");const e=F("div","cp-shell-root"),t=F("nav","cp-menu-rail"),i=F("div","cp-menu-stack"),r=b1(),s=new Map,a=new Map;for(const S of tu){const v=O1(S);s.set(S.id,v),t.appendChild(v);const b=B1(S);a.set(S.id,b),i.appendChild(b.pane)}e.append(t,i),n.appendChild(e),D1(a.get("file").body),F1(a.get("view").body,r),I1(a.get("settings").body,r),U1(a.get("rules").body,r);let o=null,l="settings",c=!1,u=!1,d=null;const h=()=>{d!==null&&(window.clearTimeout(d),d=null)},f=()=>{h(),!(o||c||u)&&(d=window.setTimeout(()=>{d=null,!(o||c||u)&&(l=null,_())},100))};function g(){return o||(c||u?l:null)}function _(){const S=g();for(const[v,b]of s.entries()){const R=S===v,E=o===v;b.classList.toggle("is-active",R),b.classList.toggle("is-pinned",E),b.setAttribute("aria-expanded",R?"true":"false")}for(const[v,b]of a.entries()){const R=S===v;b.pane.classList.toggle("is-active",R)}n.classList.toggle("is-open",!!S)}t.addEventListener("mouseenter",()=>{h(),c=!0,_()}),t.addEventListener("mouseleave",()=>{c=!1,f()});for(const S of tu){const v=s.get(S.id),b=a.get(S.id);v.addEventListener("mouseenter",()=>{h(),l=S.id,_()}),v.addEventListener("click",()=>{o===S.id?(o=null,l=c?S.id:null):(o=S.id,l=S.id),_()}),b.pane.addEventListener("mouseenter",()=>{h(),u=!0,l=S.id,_()}),b.pane.addEventListener("mouseleave",()=>{u=!1,f()}),b.closeButton.addEventListener("click",()=>{o=null,l=null,_()})}const m=()=>{iu(ru(r,[],!0))},p=S=>{const v=ru(r,S,!1);v.length&&iu(v)};Ma((S,v,b)=>{if(!v){m();return}if(v==="*"){if(b&&typeof b=="object"&&!Array.isArray(b))return;m();return}p([v])}),l="settings",_(),m()}function z1(n,e,t){return Math.min(t,Math.max(e,n))}function Fi(n){const e=Number(n);return Number.isFinite(e)?Math.round(z1(e,0,255)):0}function V1(n,e,t,i){const r=Fi(n),s=Fi(e),a=Fi(t),o=Fi(i),l=.299*r+.587*s+.114*a;if(l<=1e-9)return[o,o,o];const c=o/l;let u=r*c,d=s*c,h=a*c;const f=Math.max(u,d,h);if(f>255){const g=(255-o)/Math.max(1e-9,f-o);u=o+g*(u-o),d=o+g*(d-o),h=o+g*(h-o)}return[Fi(u),Fi(d),Fi(h)]}const Id=()=>{},fr=()=>{};function pn(n){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}function pt(n){const e=Number(n);return Number.isFinite(e)?Math.abs(e)>1?pn(e/255):pn(e):0}function Ud(n){if(typeof n!="string")return null;const e=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!e)return null;const t=e[1],i=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,s=parseInt(t.slice(4,6),16)/255;return[pn(i),pn(r),pn(s)]}function H1(n){if(Array.isArray(n))return n.length<3?null:[pt(n[0]),pt(n[1]),pt(n[2])];if(typeof n=="string"){const e=Ud(n);if(e)return e;const t=n.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i));if(t.length>=3)return[pt(t[0]),pt(t[1]),pt(t[2])]}if(n&&typeof n=="object"){if(Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b))return[pt(n.r),pt(n.g),pt(n.b)];if(Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v))return[pt(n.h),pt(n.s),pt(n.v)];if(Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness))return[pt(n.hue),pt(n.saturation),pt(n.brightness)]}return null}function G1(n,e,t){const i=Number(n),s=((Number.isFinite(i)?Math.abs(i)>1?i/360:i:0)%1+1)%1,a=pn(e),o=pn(t),l=Math.floor(s*6),c=s*6-l,u=o*(1-a),d=o*(1-c*a),h=o*(1-(1-c)*a);switch(l%6){case 0:return[o,h,u];case 1:return[d,o,u];case 2:return[u,o,h];case 3:return[u,d,o];case 4:return[h,u,o];default:return[o,u,d]}}function W1(n,e,t){const i=pn(n),r=pn(e),s=pn(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return[c,u,a]}function ea(n){return Array.isArray(n)?n.length<3?null:[pt(n[0]),pt(n[1]),pt(n[2])]:typeof n=="string"?Ud(n):!n||typeof n!="object"?null:Array.isArray(n.rgb)&&n.rgb.length>=3?[pt(n.rgb[0]),pt(n.rgb[1]),pt(n.rgb[2])]:Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b)?[pt(n.r),pt(n.g),pt(n.b)]:Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v)?[pt(n.h),pt(n.s),pt(n.v)]:Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness)?[pt(n.hue),pt(n.saturation),pt(n.brightness)]:null}function Od(n,e){var i;const t=Array.isArray((i=n==null?void 0:n.params)==null?void 0:i.palettes)?n.params.palettes:[];if(t.length===0)return null;if(typeof e=="string")return t.find(r=>r&&r.id===e)||null;if(Number.isFinite(e)){const r=Math.max(0,Math.floor(e));return t[r]||null}return null}function X1(n,e,t){const i=Od(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;const r=i.colors.length,a=((Number.isFinite(t)?Math.floor(t):0)%r+r)%r;return ea(i.colors[a])}function q1(n,e,t){const i=Od(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;if(i.colors.length===1)return ea(i.colors[0]);const s=pn(t)*(i.colors.length-1),a=Math.floor(s),o=Math.min(i.colors.length-1,a+1),l=s-a,c=ea(i.colors[a]),u=ea(i.colors[o]);return!c&&!u?null:c?u?[pn(c[0]+(u[0]-c[0])*l),pn(c[1]+(u[1]-c[1])*l),pn(c[2]+(u[2]-c[2])*l)]:c:u}const j1=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs,rgb:(n,e,t)=>[pt(n),pt(e),pt(t)],hsv:(n,e,t)=>[pt(n),pt(e),pt(t)],palette:(n,e,t)=>X1(n,e,t),gradient:(n,e,t)=>q1(n,e,t),matchLuma:(n,e,t,i)=>{const[r,s,a]=V1(n,e,t,i);return[r/255,s/255,a/255]},hsvToRgbColor:(n,e,t)=>G1(n,e,t),rgbToHsvColor:(n,e,t)=>W1(n,e,t),toColorVector:n=>H1(n)});function Ca(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function ar(n){for(const e of n||[]){const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness"||(i==null?void 0:i.output)==="hsv")return!0}return!1}function lu(n,e){for(const t of n||[]){const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const Y1=new Set([">",">=","<","<=","==","!="]);let Vs={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",requiredInputsByTarget:{spawnedParticles:[],allParticles:[],lines:[],background:[],camera:[]},requiredInputs:[],applySpawnRules:Id,applyLivingRules:fr,applyLineRules:fr}};function cu(n,e){const t=Ca(n);if(!t)return[];const i=new Set,r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of r)e.has(s)&&i.add(s);return[...i]}function Gr(n,e){const t=new Set;for(const i of n||[]){if(!(i!=null&&i.enabled))continue;const r=i.condition||{};typeof r.input=="string"&&e.has(r.input)&&t.add(r.input),typeof r.valueInput=="string"&&e.has(r.valueInput)&&t.add(r.valueInput);for(const a of cu(r.expression,e))t.add(a);const s=Array.isArray(i.actions)?i.actions:[];for(const a of s){typeof(a==null?void 0:a.input)=="string"&&e.has(a.input)&&t.add(a.input);for(const o of cu(a==null?void 0:a.expression,e))t.add(o)}}return[...t]}function Rl(n){return JSON.stringify(n)}function Bd(n){const e=Ca(n.expression);return e?`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Rl(n.value)}function $1(n){if(typeof n!="string"||!n)return!1;let e=0,t=0,i=!1,r=!1;for(let s=0;s<n.length;s++){const a=n[s],o=s>0?n[s-1]:"";if(!r&&a==="'"&&o!=="\\"){i=!i;continue}if(!i&&a==='"'&&o!=="\\"){r=!r;continue}if(!(i||r)){if(a==="(")e++;else if(a===")")e=Math.max(0,e-1);else if(a==="[")t++;else if(a==="]")t=Math.max(0,t-1);else if(a===","&&e===0&&t===0)return!0}}return!1}function Z1(n){const e=Ca(n.expression);return e?$1(e)?`[${e}]`:`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Rl(n.value)}function uu(n,e){const t=Z1(n),[i,r,s]=e;switch(n.operator){case"set":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = __vec[0]; target.${r} = __vec[1]; target.${s} = __vec[2]; }`].join(" ");case"add":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) + __vec[0]; target.${r} = (target.${r} ?? 0) + __vec[1]; target.${s} = (target.${s} ?? 0) + __vec[2]; }`].join(" ");case"subtract":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) - __vec[0]; target.${r} = (target.${r} ?? 0) - __vec[1]; target.${s} = (target.${s} ?? 0) - __vec[2]; }`].join(" ");case"multiply":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) * __vec[0]; target.${r} = (target.${r} ?? 0) * __vec[1]; target.${s} = (target.${s} ?? 0) * __vec[2]; }`].join(" ");case"divide":return[`const __vec = toColorVector(${t});`,`if (__vec) { if (__vec[0] !== 0) target.${i} = (target.${i} ?? 0) / __vec[0]; if (__vec[1] !== 0) target.${r} = (target.${r} ?? 0) / __vec[1]; if (__vec[2] !== 0) target.${s} = (target.${s} ?? 0) / __vec[2]; }`].join(" ");case"clamp":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = clamp((target.${i} ?? 0), -Math.abs(__vec[0]), Math.abs(__vec[0])); target.${r} = clamp((target.${r} ?? 0), -Math.abs(__vec[1]), Math.abs(__vec[1])); target.${s} = clamp((target.${s} ?? 0), -Math.abs(__vec[2]), Math.abs(__vec[2])); }`].join(" ");default:return""}}function K1(n){const e=Bd(n),t=["const __r = Number.isFinite(target.red) ? target.red : target.r;","const __g = Number.isFinite(target.green) ? target.green : target.g;","const __b = Number.isFinite(target.blue) ? target.blue : target.b;","const __hasRgb = Number.isFinite(__r) || Number.isFinite(__g) || Number.isFinite(__b);","const __hIn = Number.isFinite(target.hue) ? target.hue : target.h;","const __sIn = Number.isFinite(target.saturation) ? target.saturation : target.s;","const __vIn = Number.isFinite(target.brightness) ? target.brightness : target.v;","let __baseRgb = null;","if (__hasRgb) {","__baseRgb = [Number.isFinite(__r) ? __r : 0, Number.isFinite(__g) ? __g : 0, Number.isFinite(__b) ? __b : 0];","} else if (Number.isFinite(__hIn) || Number.isFinite(__sIn) || Number.isFinite(__vIn)) {","const __h = Number.isFinite(__hIn) ? __hIn : 0;","const __s = Number.isFinite(__sIn) ? __sIn : 0;","const __v = Number.isFinite(__vIn) ? __vIn : 0;","__baseRgb = hsvToRgbColor(__h, __s, __v);","}","if (!__baseRgb) __baseRgb = [0, 0, 0];","const __baseR255 = __baseRgb[0] * 255;","const __baseG255 = __baseRgb[1] * 255;","const __baseB255 = __baseRgb[2] * 255;","const __baseLuma = (0.299 * __baseR255) + (0.587 * __baseG255) + (0.114 * __baseB255);"].join(" "),i=["const __matched = matchLuma(__baseR255, __baseG255, __baseB255, __nextLuma);","if (__matched) {","target.red = __matched[0]; target.green = __matched[1]; target.blue = __matched[2];","target.r = __matched[0]; target.g = __matched[1]; target.b = __matched[2];","const __hsv = rgbToHsvColor(__matched[0], __matched[1], __matched[2]);","if (__hsv) {","target.hue = __hsv[0]; target.saturation = __hsv[1]; target.brightness = __hsv[2];","target.h = __hsv[0]; target.s = __hsv[1]; target.v = __hsv[2];","}","}"].join(" ");switch(n.operator){case"set":return[t,`const __nextLuma = Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"add":return[t,`const __nextLuma = __baseLuma + Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"subtract":return[t,`const __nextLuma = __baseLuma - Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"multiply":return[t,`const __nextLuma = __baseLuma * Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"divide":return[t,`const __divisor = Number(${e});`,"const __nextLuma = Math.abs(__divisor) > 1e-6 ? (__baseLuma / __divisor) : __baseLuma;","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"clamp":return[t,`const __bound = Math.abs(Number(${e}));`,"const __nextLuma = clamp(__baseLuma, -__bound, __bound);","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");default:return""}}function J1(n){if(!n||n.operator==="always")return"true";const e=Ca(n.expression);if(e)return`(${e})`;if(!Y1.has(n.operator))return"false";const t=typeof n.input=="string"?n.input:"0",i=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Rl(n.value??0);return`((${t}) ${n.operator} (${i}))`}function Q1(n){const e=n.output;if(e==="rgb")return uu(n,["red","green","blue"]);if(e==="hsv")return uu(n,["hue","saturation","brightness"]);if(e==="luma")return K1(n);const t=Bd(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function Jr(n,e,t,i){const r=[],s=[];r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const palette = (id, index) => helpers.palette(ctx, id, index);"),r.push("  const gradient = (id, value) => helpers.gradient(ctx, id, value);"),r.push("  const matchLuma = (r, g, b, targetLuma) => helpers.matchLuma(r, g, b, targetLuma);"),r.push("  const rgb = (r, g, b) => helpers.rgb(r, g, b);"),r.push("  const hsv = (h, s, v) => helpers.hsv(h, s, v);"),r.push("  const hsvToRgbColor = (h, s, v) => helpers.hsvToRgbColor(h, s, v);"),r.push("  const rgbToHsvColor = (r, g, b) => helpers.rgbToHsvColor(r, g, b);"),r.push("  const toColorVector = (value) => helpers.toColorVector(value);"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const a of t)a==="deltaTime"||a==="time"||r.push(`  const ${a} = Number.isFinite(i.${a}) ? i.${a} : 0;`);return e.forEach(a=>{if(!a.enabled)return;const o=J1(a.condition);r.push(`  // rule ${a.id}`),r.push(`  if (${o}) {`),s.push({ruleId:a.id,functionName:n,sourceLine:r.length+1});for(const l of a.actions??[])r.push(`    ${Q1(l)}`);r.push("  }")}),r.push("}"),{source:r.join(`
`),lineMap:s}}function ex(n,e){return Jr("applySpawnRules",n,e,!1)}function tx(n,e){return Jr("applyLivingRules",n,e,!0)}function nx(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function du(n,e){const t=performance.now(),i=md(n,e),s=[...i.ruleBlocks].sort((E,T)=>(E.order??0)-(T.order??0)),a=s.filter(E=>E.target==="spawnedParticles"),o=s.filter(E=>E.target==="allParticles"),l=s.filter(E=>E.target==="lines"),c=s.filter(E=>E.target==="background"),u=s.filter(E=>E.target==="camera"),d=nx(s);if(Vs.hash===d)return Vs.result;const h=qv().entries.map(E=>E.id),f=new Set(h),g={spawnedParticles:Gr(a,f),allParticles:Gr(o,f),lines:Gr(l,f),background:Gr(c,f),camera:Gr(u,f)},_=[...new Set([...g.spawnedParticles,...g.allParticles,...g.lines,...g.background,...g.camera])],m=ex(a,h),p=tx(o,h),S=Jr("applyLineRules",l,h,!0),v=Jr("applyBackgroundRules",c,h,!0),b=Jr("applyCameraRules",u,h,!0),R=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",m.source,p.source,S.source,v.source,b.source,"return { applySpawnRules, applyLivingRules, applyLineRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const T=new Function("helpers",R)(j1),A={hash:d,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,lineRuleCount:l.length,backgroundRuleCount:c.length,cameraRuleCount:u.length,usesParticleHsb:ar([...a,...o]),usesLineHsb:ar(l),usesBackgroundHsb:ar(c),usesLivingShapeType:lu(o,"shapeType"),rejected:i.rejected,requiredInputsByTarget:g,requiredInputs:_,lineMap:[...m.lineMap,...p.lineMap,...S.lineMap,...v.lineMap,...b.lineMap],source:R,applySpawnRules:typeof T.applySpawnRules=="function"?T.applySpawnRules:Id,applyLivingRules:typeof T.applyLivingRules=="function"?T.applyLivingRules:fr,applyLineRules:typeof T.applyLineRules=="function"?T.applyLineRules:fr,applyBackgroundRules:typeof T.applyBackgroundRules=="function"?T.applyBackgroundRules:fr,applyCameraRules:typeof T.applyCameraRules=="function"?T.applyCameraRules:fr};return Vs={hash:d,result:A},A}catch(E){const T=Number.isFinite(E==null?void 0:E.lineNumber)?Number(E.lineNumber):null;return{...Vs.result,hash:d,compileStatus:"error",compileError:(E==null?void 0:E.message)||String(E),compileLine:T,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:a.length,livingRuleCount:o.length,lineRuleCount:l.length,backgroundRuleCount:c.length,cameraRuleCount:u.length,usesParticleHsb:ar([...a,...o]),usesLineHsb:ar(l),usesBackgroundHsb:ar(c),usesLivingShapeType:lu(o,"shapeType"),requiredInputsByTarget:g,requiredInputs:_,lineMap:[...m.lineMap,...p.lineMap,...S.lineMap,...v.lineMap,...b.lineMap],source:R,rejected:i.rejected}}}const Pl=16,Qo=2e4,hu=Math.log2(Pl),ix=Math.log2(Qo),rx=100,sx=5e3;function Hs(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,Pl))-hu)/(ix-hu)))}function $t(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return Number.isFinite(s)?!Number.isFinite(i)||!Number.isFinite(r)||r<=i?Ge(s):Ge((s-i)/(r-i)):0}function fu(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function Ge(n){return Math.max(0,Math.min(1,n))}function Yr(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function kd(n){const e=Number(n);return!Number.isFinite(e)||e<=0?null:69+12*Math.log2(e/440)}function ax(n){const e=kd(n);return Number.isFinite(e)?(Math.round(e)%12+12)%12:0}function ox(n){const e=kd(n);return Number.isFinite(e)?Math.floor(Math.round(e)/12)-1:-1}function Wr(n,e,t){const i=Ge(n),r=Ge(e),s=Ge(t),a=Math.max(i,r,s),o=Math.min(i,r,s),l=a-o;let c=0;l>1e-6&&(a===i?c=(r-s)/l%6:a===r?c=(s-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=a<=1e-6?0:l/a;return{h:c,s:u,v:a}}function Gs(n,e,t){const i=Yr(n)??0,r=Ge(e),s=Ge(t),a=Math.floor(i*6),o=i*6-a,l=s*(1-r),c=s*(1-o*r),u=s*(1-(1-o)*r);switch(a%6){case 0:return{r:s,g:u,b:l};case 1:return{r:c,g:s,b:l};case 2:return{r:l,g:s,b:u};case 3:return{r:l,g:c,b:s};case 4:return{r:u,g:l,b:s};default:return{r:s,g:l,b:c}}}const lx=`
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
`,cx=`
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
`;class ux{constructor(e,t={}){this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0,this._lineVisibleCount=0;const i=new vn,r=new vn;this._geo=i,this._lineGeo=r,this._allocateBuffers(this._N);const s=new rn({vertexShader:lx,fragmentShader:cx,uniforms:{uViewportHeight:{value:1}},transparent:!0,depthWrite:!1,blending:Si});this._mesh=new Bf(i,s),this._mesh.frustumCulled=!1;const a=new ga({vertexColors:!0,transparent:!0,opacity:.9,blending:Si,depthWrite:!1});this._lineMesh=new ml(r,a),this._lineMesh.frustumCulled=!1,e.add(this._mesh),e.add(this._lineMesh),this._mat=s,this._lineMat=a,this._lastBlending=s.blending,this._background=new rt(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._compiledRules=du([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._pan=new Float32Array(this._N),this._binRms=new Float32Array(this._N),this._linePos=new Float32Array(this._N*2*3),this._lineCol=new Float32Array(this._N*2*3),this._lineThickness=new Float32Array(this._N),this._lineAlpha=new Float32Array(this._N),this._aPos=new Kt(this._pos,3),this._aCol=new Kt(this._col,3),this._aSz=new Kt(this._sz,1),this._aAlpha=new Kt(this._alpha,1),this._aShape=new Kt(this._shape,1),this._aLinePos=new Kt(this._linePos,3),this._aLineCol=new Kt(this._lineCol,3);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape,this._aLinePos,this._aLineCol])t.setUsage(Wh);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this._lineGeo.setAttribute("position",this._aLinePos),this._lineGeo.setAttribute("color",this._aLineCol),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const s=Math.max(0,Math.min(e,t));if(s<=0)return 0;const a={count:s,timestampSec:r,pos:this._pos.slice(0,s*3),col:this._col.slice(0,s*3),sz:this._sz.slice(0,s),alpha:this._alpha.slice(0,s),shape:this._shape.slice(0,s),pan:this._pan.slice(0,s),binRms:this._binRms.slice(0,s)};this._archiveChunks.push(a),this._archivePointCount+=s,this._pruneArchive(i,r);const o=t-s;for(let l=0;l<o;l++){const c=l+s;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c],this._pan[l]=this._pan[c],this._binRms[l]=this._binRms[c]}return s}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let s=0;s<this._archiveChunks.length&&r<i;s++){const a=this._archiveChunks[s],o=Math.min(a.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=a.pos[l*3],this._pos[(r+l)*3+1]=a.pos[l*3+1],this._pos[(r+l)*3+2]=a.pos[l*3+2],this._col[(r+l)*3]=a.col[l*3],this._col[(r+l)*3+1]=a.col[l*3+1],this._col[(r+l)*3+2]=a.col[l*3+2],this._sz[r+l]=a.sz[l],this._alpha[r+l]=a.alpha[l],this._shape[r+l]=a.shape[l],this._pan[r+l]=a.pan?a.pan[l]:0,this._binRms[r+l]=a.binRms?a.binRms[l]:0;r+=o}else for(let s=this._archiveChunks.length-1;s>=0&&r<i;s--){const a=this._archiveChunks[s],o=Math.min(a.count,i-r),l=a.count-o;for(let c=0;c<o;c++){const u=l+c;this._pos[(i-r-o+c)*3]=a.pos[u*3],this._pos[(i-r-o+c)*3+1]=a.pos[u*3+1],this._pos[(i-r-o+c)*3+2]=a.pos[u*3+2],this._col[(i-r-o+c)*3]=a.col[u*3],this._col[(i-r-o+c)*3+1]=a.col[u*3+1],this._col[(i-r-o+c)*3+2]=a.col[u*3+2],this._sz[i-r-o+c]=a.sz[u],this._alpha[i-r-o+c]=a.alpha[u],this._shape[i-r-o+c]=a.shape[u],this._pan[i-r-o+c]=a.pan?a.pan[u]:0,this._binRms[i-r-o+c]=a.binRms?a.binRms[u]:0}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._lineVisibleCount=0,this._lineGeo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._lineVisibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._lineGeo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}clearCanvas(){this.clear()}scaleAllParticleSizes(e){const t=Number(e);if(!(!Number.isFinite(t)||t<=0)){for(let i=0;i<this._visibleCount;i++)this._sz[i]=Math.max(0,this._sz[i]*t);for(const i of this._archiveChunks){const r=Math.max(0,Number(i==null?void 0:i.count)||0);if(i!=null&&i.sz)for(let s=0;s<r;s++)i.sz[s]=Math.max(0,i.sz[s]*t)}this._aSz.needsUpdate=!0}}setViewportHeight(e){var i,r;const t=Math.max(1,Number(e)||1);(r=(i=this._mat)==null?void 0:i.uniforms)!=null&&r.uViewportHeight&&(this._mat.uniforms.uViewportHeight.value=t)}onRulesChanged(e){const t=du(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){const i=Number(t.frequencyHz)||0,r=ax(i),s=ox(i);return{amplitude:Number.isFinite(t.amplitude)?Number(t.amplitude):e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:Number.isFinite(t.pan)?Number(t.pan):e.pan??0,time:Number(t.time)||0,deltaTime:Number.isFinite(Number(t.deltaTime))&&Number(t.deltaTime)>0?Number(t.deltaTime):1/60,globalRmsEnergy:Number.isFinite(t.globalRmsEnergy)?Number(t.globalRmsEnergy):e.amplitude??0,spectralCentroid:Number.isFinite(t.spectralCentroid)?Number(t.spectralCentroid):e.spectralCentroid??0,spectralFlux:Number.isFinite(t.spectralFlux)?Number(t.spectralFlux):e.spectralFlux??0,spectralFlatness:Number.isFinite(t.spectralFlatness)?Number(t.spectralFlatness):e.spectralFlatness??0,inharmonicity:Number.isFinite(t.inharmonicity)?Number(t.inharmonicity):e.inharmonicity??0,peakAmplitude:Number.isFinite(t.peakAmplitude)?Number(t.peakAmplitude):e.peakAmplitude??0,zeroCrossingRate:Number.isFinite(t.zeroCrossingRate)?Number(t.zeroCrossingRate):e.zeroCrossingRate??0,spectralRolloff:Number.isFinite(t.spectralRolloff)?Number(t.spectralRolloff):e.spectralRolloff??0,spectralSpread:Number.isFinite(t.spectralSpread)?Number(t.spectralSpread):e.spectralSpread??0,spectralSkewness:Number.isFinite(t.spectralSkewness)?Number(t.spectralSkewness):e.spectralSkewness??0,chromagram:Number.isFinite(t.chromagram)?Number(t.chromagram):e.chromagram??0,binMagnitude:Number.isFinite(t.binMagnitude)?Ge(t.binMagnitude):0,binPhase:Number.isFinite(t.binPhase)?Ge(t.binPhase):0,binFlux:Number.isFinite(t.binFlux)?Number(t.binFlux):0,binPhaseDeviation:Number.isFinite(t.binPhaseDeviation)?Ge(t.binPhaseDeviation):0,binAttackTime:Number.isFinite(t.binAttackTime)?Ge(t.binAttackTime):0,binEnvelope:Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):Number.isFinite(t.binAttackTime)?Number(t.binAttackTime):0,binEnvelopeState:Number.isFinite(t.binEnvelopeState)?Number(t.binEnvelopeState):Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):0,binRMSEnergy:Number.isFinite(t.binRMSEnergy)?Ge(t.binRMSEnergy):Number.isFinite(t.globalRmsEnergy)?Ge(t.globalRmsEnergy):0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,audioLengthSec:Number(t.audioLengthSec)||0,frequencyHz:i,notePitchClass:r,octave:s,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount);if(e===0)return{empty:!0,min:new H,max:new H,center:new H,size:new H};const t=new H(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),i=new H(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let a=0;a<e;a++){const o=this._pos[a*3],l=this._pos[a*3+1],c=this._pos[a*3+2];o<t.x&&(t.x=o),l<t.y&&(t.y=l),c<t.z&&(t.z=c),o>i.x&&(i.x=o),l>i.y&&(i.y=l),c>i.z&&(i.z=c)}const r=t.clone().add(i).multiplyScalar(.5),s=i.clone().sub(t);return{empty:!1,min:t,max:i,center:r,size:s}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),s=1,a=e||{},o=a.inputs||(a.inputs={});let l=0;for(let c=t;c<i&&!(l>=r);c+=s){o.pan=Number.isFinite(this._pan[c])?this._pan[c]:0,o.binRMSEnergy=Number.isFinite(this._binRms[c])?this._binRms[c]:0;const u={x:this._pos[c*3],y:this._pos[c*3+1],z:this._pos[c*3+2],size:this._sz[c],red:this._col[c*3],green:this._col[c*3+1],blue:this._col[c*3+2],opacity:this._alpha[c],shapeType:this._shape[c]>.5?"circle":"square"};this._compiledRules.applyLivingRules(a,u),this._pos[c*3]=Number.isFinite(u.x)?u.x:this._pos[c*3],this._pos[c*3+1]=Number.isFinite(u.y)?u.y:this._pos[c*3+1],this._pos[c*3+2]=Number.isFinite(u.z)?u.z:this._pos[c*3+2],this._sz[c]=Number.isFinite(u.size)?Math.max(0,u.size):this._sz[c];let d=Number.isFinite(u.red)?Ge(u.red):this._col[c*3],h=Number.isFinite(u.green)?Ge(u.green):this._col[c*3+1],f=Number.isFinite(u.blue)?Ge(u.blue):this._col[c*3+2];if(this._compiledRules.usesParticleHsb){const g=Wr(d,h,f),_=Yr(u.hue),m=Number.isFinite(u.saturation)?Ge(u.saturation):g.s,p=Number.isFinite(u.brightness)?Ge(u.brightness):g.v,S=Gs(_??g.h,m,p);d=S.r,h=S.g,f=S.b}this._col[c*3]=d,this._col[c*3+1]=h,this._col[c*3+2]=f,this._alpha[c]=Number.isFinite(u.opacity)?Math.max(0,Math.min(1,u.opacity)):this._alpha[c],this._shape[c]=fu(u.shapeType),this._binRms[c]=Number.isFinite(o.binRMSEnergy)?Ge(o.binRMSEnergy):this._binRms[c],l++}return l}applyBackgroundRules(e){const t=this._background,i=Wr(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v};this._compiledRules.applyBackgroundRules(e,r);let s=Number.isFinite(r.red)?Ge(r.red):t.r,a=Number.isFinite(r.green)?Ge(r.green):t.g,o=Number.isFinite(r.blue)?Ge(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=Wr(s,a,o),c=Yr(r.hue),u=Number.isFinite(r.saturation)?Ge(r.saturation):l.s,d=Number.isFinite(r.brightness)?Ge(r.brightness):l.v,h=Gs(c??l.h,u,d);s=h.r,a=h.g,o=h.b}t.setRGB(s,a,o)}applyLineRules(e,t){this._compiledRules.applyLineRules(e,t)}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1,targetX:(t==null?void 0:t.targetX)??0,targetY:(t==null?void 0:t.targetY)??0,targetZ:(t==null?void 0:t.targetZ)??0,angleOfView:(t==null?void 0:t.angleOfView)??55};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null,targetX:Number.isFinite(i.targetX)?i.targetX:null,targetY:Number.isFinite(i.targetY)?i.targetY:null,targetZ:Number.isFinite(i.targetZ)?i.targetZ:null,angleOfView:Number.isFinite(i.angleOfView)?i.angleOfView:null}}update(e,t,i,r){var Ae,et,We,vt,O,Me,te,oe,Ee,be;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const s=performance.now(),a=Math.max(0,Math.min(1,(s-this._lastUpdateT)/1e3));this._lastUpdateT=s;const o=e.frequencyData,l=Math.min(o.length,this._N),u=(((Ae=e.ctx)==null?void 0:Ae.sampleRate)??44100)/2,d=t.persistMode??0,h=t.inputGain??1,f=t.defaultParticleSize??6,g=Math.max(Pl,Math.min(Qo,Number(t.freqNormMin??40))),_=Math.max(g+1,Math.min(Qo,Number(t.freqNormMax??12e3))),m=Hs(g),p=Hs(_),S=Number(t.binMagnitudeNormMin??-70),v=Number(t.binMagnitudeNormMax??0),b=Number(t.binFluxNormMin??0),R=Number(t.binFluxNormMax??.5),E=Number(t.binPhaseDeviationNormMin??0),T=Number(t.binPhaseDeviationNormMax??Math.PI),A=Number(t.binAttackTimeNormMin??5),C=Number(t.binAttackTimeNormMax??500),x=Number(t.globalRmsNormMin??-60),L=Number(t.globalRmsNormMax??0),W=Number(t.spectralCentroidNormMin??150),j=Number(t.spectralCentroidNormMax??8e3),Q=Number(t.globalSpectralFluxNormMin??0),Z=Number(t.globalSpectralFluxNormMax??100),K=Number(t.spectralFlatnessNormMin??0),ce=Number(t.spectralFlatnessNormMax??1),G=Number(t.particlesByFrame),q=Number.isFinite(G)?Math.max(rx,Math.min(sx,Math.round(G))):1e3,U=Math.max(1,q),X=Math.pow(_/Math.max(g,1e-6),1/U),me=Number.isFinite(X)&&X>1?X:1,$e=t.blendMode??"screen",ie=Number.isFinite(Number(t.defaultBackgroundHue))?Number(t.defaultBackgroundHue):0,fe=Number.isFinite(Number(t.defaultBackgroundSaturation))?Number(t.defaultBackgroundSaturation):0,ye=Number.isFinite(Number(t.defaultBackgroundLightness))?Number(t.defaultBackgroundLightness):0,_e=!!(e.analyserL&&e.analyserR&&e.getBinPan),Te=((et=e.getBinMagnitude)==null?void 0:et.call(e))||null,Oe=((We=e.getBinFlux)==null?void 0:We.call(e))||null,ke=((vt=e.getBinPhaseDeviation)==null?void 0:vt.call(e))||null,ot=((O=e.getBinPhase)==null?void 0:O.call(e))||null,je=((Me=e.getBinEnvelope)==null?void 0:Me.call(e))||null,dt=((te=e.getBinAttackTime)==null?void 0:te.call(e))||null,D=new Set(((oe=this._compiledRules)==null?void 0:oe.requiredInputs)||[]),Ct=D.has("binMagnitude"),Je=D.has("binPhase"),Qe=D.has("binFlux"),Ie=D.has("binPhaseDeviation"),ct=D.has("binAttackTime"),Le=D.has("binEnvelope")||D.has("binEnvelopeState");if($e==="alpha"){const M=this._mat;(M.blending!==oo||M.blendSrc!==Qr||M.blendDst!==es||M.blendEquation!==oi)&&(M.blending=oo,M.blendSrc=Qr,M.blendDst=es,M.blendEquation=oi,M.needsUpdate=!0,this._lastBlending=M.blending),M.depthWrite&&(M.depthWrite=!1,M.needsUpdate=!0)}else{const N={screen:Si,lighter:Si,"source-over":Ei,multiply:Ei}[$e]??Si;N!==this._lastBlending&&(this._mat.blending=N,this._mat.needsUpdate=!0,this._lastBlending=N);const B=$e==="source-over";this._mat.depthWrite!==B&&(this._mat.depthWrite=B,this._mat.needsUpdate=!0)}this._lineMat.blending!==this._mat.blending&&(this._lineMat.blending=this._mat.blending,this._lineMat.needsUpdate=!0),this._lineMat.depthWrite&&(this._lineMat.depthWrite=!1,this._lineMat.needsUpdate=!0),Number(t.cameraCanvasWidthUnits);const P=Number(t.cameraCanvasHeightUnits),y=Number.isFinite(P)&&P>0?P:r,z=(ie%360+360)%360;this._background.setHSL(z/360,Ge(fe/100),Ge(ye/100));const se=y/2,ae=((Ee=e.audioEl)==null?void 0:Ee.currentTime)??0,ne=((be=e.audioEl)==null?void 0:be.duration)??0,de={binMagnitude:0,binPhase:0,binFlux:0,binPhaseDeviation:0,binAttackTime:0,binEnvelope:0,binEnvelopeState:0,globalRmsEnergy:$t(e.rmsDbfs,x,L),binRMSEnergy:$t(e.rmsDbfs,x,L),spectralCentroid:$t(e.spectralCentroidHz,W,j),spectralFlux:$t(e.spectralFluxAU,Q,Z),spectralFlatness:$t(e.spectralFlatnessRatio,K,ce),inharmonicity:Ge(e.inharmonicity),peakAmplitude:Ge(e.peakAmplitude),zeroCrossingRate:Ge(e.zeroCrossingRate),spectralRolloff:Ge(e.spectralRolloff),spectralSpread:Ge(e.spectralSpread),spectralSkewness:Ge(e.spectralSkewness),chromagram:Ge(e.chromagram)};if(de.amplitude=de.globalRmsEnergy,Ct&&Te&&Te.length>0){let M=0;for(let N=0;N<Te.length;N++)M+=$t(Te[N],S,v);de.binMagnitude=M/Te.length}if(Qe&&Oe&&Oe.length>0){let M=0;for(let N=0;N<Oe.length;N++)M+=$t(Oe[N],b,R);de.binFlux=M/Oe.length}if(Ie&&ke&&ke.length>0){let M=0;for(let N=0;N<ke.length;N++)M+=$t(ke[N],E,T);de.binPhaseDeviation=M/ke.length}if(ct&&dt&&dt.length>0){let M=0;for(let N=0;N<dt.length;N++)M+=$t(dt[N],A,C);de.binAttackTime=M/dt.length}if(Le&&je&&je.length>0){let M=0;for(let N=0;N<je.length;N++)M+=je[N];de.binEnvelope=M/je.length,de.binEnvelopeState=de.binEnvelope}if(Je&&ot&&ot.length>0){let M=0;for(let N=0;N<ot.length;N++)M+=$t(ot[N],-Math.PI,Math.PI);de.binPhase=M/ot.length}let he=d===1?this._paintCount:0,Se=d===1?this._lineVisibleCount:0;const Ze=(M,N=1)=>{if(he>=this._N&&d===1){const I=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),Y=this._archiveAndCompactOldest(I,he,t,ae);he=Math.max(0,he-Y)}if(he>=this._N)return;const B=M.hz,J=Hs(B),ue=$t(J,m,p),k=Number.isFinite(M.binPan)?M.binPan:e.pan??0;Number.isFinite(M.byte)&&M.byte;const ge=Number.isFinite(M.energy)?M.energy:0,ve=Number.isFinite(M.binMagnitude)?M.binMagnitude:void 0,Xe=Number.isFinite(M.binPhase)?M.binPhase:void 0,Ke=Number.isFinite(M.binFlux)?M.binFlux:void 0,nt=Number.isFinite(M.binPhaseDeviation)?M.binPhaseDeviation:void 0,st=Number.isFinite(M.binAttackTime)?M.binAttackTime:void 0,He=Number.isFinite(M.binEnvelope)?M.binEnvelope:void 0,ut=Number.isFinite(M.binRMSEnergy)?M.binRMSEnergy:void 0,lt=(ue*2-1)*se,ht=0,_t=0,wt=Ge(ge),xe={x:ht,y:lt,z:_t,size:Math.max(1,f*(.5+ge*1.5)),red:wt,green:wt,blue:wt,opacity:Math.min(1,(.08+ge*1.9)*N),particleCount:1,shapeType:"square"};t.ruleEngineEnabled!==!1&&this._compiledRules.spawnRuleCount>0&&this.applySpawnRulesToParticle({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:B,normFreq:ue,pan:k,spectralCentroid:de.spectralCentroid,spectralFlux:de.spectralFlux,spectralFlatness:de.spectralFlatness,inharmonicity:de.inharmonicity,peakAmplitude:de.peakAmplitude,zeroCrossingRate:de.zeroCrossingRate,spectralRolloff:de.spectralRolloff,spectralSpread:de.spectralSpread,spectralSkewness:de.spectralSkewness,chromagram:de.chromagram,binMagnitude:ve,binPhase:Xe,binFlux:Ke,binPhaseDeviation:nt,binAttackTime:st,binEnvelope:He,binEnvelopeState:He,binRMSEnergy:ut,globalRmsEnergy:de.globalRmsEnergy,amplitude:de.amplitude,time:ae,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne}),particle:xe});const Ft=Number.isFinite(xe.particleCount)?Ge(xe.particleCount):1;if(Ft<=0||Ft<1&&Math.random()>Ft)return;this._pos[he*3]=Number.isFinite(xe.x)?xe.x:ht,this._pos[he*3+1]=Number.isFinite(xe.y)?xe.y:lt,this._pos[he*3+2]=Number.isFinite(xe.z)?xe.z:_t,this._sz[he]=Number.isFinite(xe.size)?Math.max(0,xe.size):Math.max(2,f);let jt=Number.isFinite(xe.red)?Ge(xe.red):wt,sn=Number.isFinite(xe.green)?Ge(xe.green):wt,w=Number.isFinite(xe.blue)?Ge(xe.blue):wt;if(this._compiledRules.usesParticleHsb){const I=Wr(jt,sn,w),Y=Yr(xe.hue),$=Number.isFinite(xe.saturation)?Ge(xe.saturation):I.s,V=Number.isFinite(xe.brightness)?Ge(xe.brightness):I.v,le=Gs(Y??I.h,$,V);jt=le.r,sn=le.g,w=le.b}this._col[he*3]=jt,this._col[he*3+1]=sn,this._col[he*3+2]=w,this._alpha[he]=Number.isFinite(xe.opacity)?Math.max(0,Math.min(1,xe.opacity)):Math.min(1,(.08+ge*1.9)*N),this._shape[he]=fu(xe.shapeType),this._pan[he]=Number.isFinite(k)?Math.max(-1,Math.min(1,k)):0,this._binRms[he]=Number.isFinite(ut)?Ge(ut):0,he++},pe=(M,N=1)=>{if(Se>=this._N)return;const B=M.hz,J=Hs(B),ue=$t(J,m,p),k=Number.isFinite(M.binPan)?M.binPan:e.pan??0,ge=Number.isFinite(M.energy)?M.energy:0,ve=Number.isFinite(M.binMagnitude)?M.binMagnitude:void 0,Xe=Number.isFinite(M.binPhase)?M.binPhase:void 0,Ke=Number.isFinite(M.binFlux)?M.binFlux:void 0,nt=Number.isFinite(M.binPhaseDeviation)?M.binPhaseDeviation:void 0,st=Number.isFinite(M.binAttackTime)?M.binAttackTime:void 0,He=Number.isFinite(M.binEnvelope)?M.binEnvelope:void 0,ut=Number.isFinite(M.binRMSEnergy)?M.binRMSEnergy:void 0,lt=(ue*2-1)*se,ht=0,_t=0,wt=Ge(ge),xe={xStart:ht,yStart:lt,zStart:_t,xEnd:ht,yEnd:lt+Math.max(1,se*.12*ge),zEnd:_t,thickness:1,lineCount:0,red:wt,green:wt,blue:wt,opacity:Math.min(1,(.08+ge*1.4)*N)};t.ruleEngineEnabled!==!1&&this._compiledRules.lineRuleCount>0&&this.applyLineRules({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:B,normFreq:ue,pan:k,spectralCentroid:de.spectralCentroid,spectralFlux:de.spectralFlux,spectralFlatness:de.spectralFlatness,inharmonicity:de.inharmonicity,peakAmplitude:de.peakAmplitude,zeroCrossingRate:de.zeroCrossingRate,spectralRolloff:de.spectralRolloff,spectralSpread:de.spectralSpread,spectralSkewness:de.spectralSkewness,chromagram:de.chromagram,binMagnitude:ve,binPhase:Xe,binFlux:Ke,binPhaseDeviation:nt,binAttackTime:st,binEnvelope:He,binEnvelopeState:He,binRMSEnergy:ut,globalRmsEnergy:de.globalRmsEnergy,amplitude:de.amplitude,time:ae,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne})},xe);const Ft=Number.isFinite(xe.lineCount)?Ge(xe.lineCount):0;if(Ft<=0||Ft<1&&Math.random()>Ft)return;let jt=Number.isFinite(xe.red)?Ge(xe.red):wt,sn=Number.isFinite(xe.green)?Ge(xe.green):wt,w=Number.isFinite(xe.blue)?Ge(xe.blue):wt;if(this._compiledRules.usesLineHsb){const we=Wr(jt,sn,w),Ne=Yr(xe.hue),Ue=Number.isFinite(xe.saturation)?Ge(xe.saturation):we.s,Ye=Number.isFinite(xe.brightness)?Ge(xe.brightness):we.v,qe=Gs(Ne??we.h,Ue,Ye);jt=qe.r,sn=qe.g,w=qe.b}const I=Number.isFinite(xe.opacity)?Math.max(0,Math.min(1,xe.opacity)):.4,Y=jt*I,$=sn*I,V=w*I,le=Se*6;this._linePos[le]=Number.isFinite(xe.xStart)?xe.xStart:ht,this._linePos[le+1]=Number.isFinite(xe.yStart)?xe.yStart:lt,this._linePos[le+2]=Number.isFinite(xe.zStart)?xe.zStart:_t,this._linePos[le+3]=Number.isFinite(xe.xEnd)?xe.xEnd:ht,this._linePos[le+4]=Number.isFinite(xe.yEnd)?xe.yEnd:lt,this._linePos[le+5]=Number.isFinite(xe.zEnd)?xe.zEnd:_t,this._lineCol[le]=Y,this._lineCol[le+1]=$,this._lineCol[le+2]=V,this._lineCol[le+3]=Y,this._lineCol[le+4]=$,this._lineCol[le+5]=V,this._lineThickness[Se]=Number.isFinite(xe.thickness)?Math.max(0,xe.thickness):1,this._lineAlpha[Se]=I,Se++},Pe=o.length/Math.max(1e-6,u),Fe=M=>{const N=Math.floor(M*Pe);return Math.max(0,Math.min(l-1,N))};let Be=g;for(let M=0;M<U;M++){const N=M===U-1?_:Math.min(_,Be*me),B=Math.sqrt(Math.max(g,Be)*Math.max(g,N)),J=Fe(Be),ue=Fe(N);if(ue<J){Be=N;continue}let k=0,ge=0,ve=0,Xe=0,Ke=0,nt=0,st=0,He=0,ut=0,lt=0,ht=0;for(let xe=J;xe<=ue;xe++){const Ft=o[xe],jt=Te&&xe<Te.length?$t(Te[xe],S,v):Ft/255;ve+=jt,Ct&&(nt+=jt),Je&&ot&&xe<ot.length&&(st+=$t(ot[xe],-Math.PI,Math.PI)),Qe&&Oe&&xe<Oe.length&&(He+=$t(Oe[xe],b,R)),Ie&&ke&&xe<ke.length&&(ut+=$t(ke[xe],E,T)),ct&&dt&&xe<dt.length&&(lt+=$t(dt[xe],A,C)),Le&&je&&xe<je.length&&(ht+=$t(je[xe]/3,0,1));const sn=_e?e.getBinPan(xe):e.pan??0,w=Math.max(1,Ft);Xe+=sn*w,Ke+=w,Ft>ge&&(ge=Ft),k++}if(k<=0||ge<=1)continue;const _t=ve/k,wt=_t*h;if(Ze({hz:B,byte:ge,energy:wt,binPan:Ke>0?Xe/Ke:0,binRMSEnergy:Ge(_t),binMagnitude:Ct?nt/k:void 0,binPhase:Je?st/k:void 0,binFlux:Qe?He/k:void 0,binPhaseDeviation:Ie?ut/k:void 0,binAttackTime:ct?lt/k:void 0,binEnvelope:Le?ht/k:void 0}),pe({hz:B,energy:wt,binPan:Ke>0?Xe/Ke:0,binRMSEnergy:Ge(_t),binMagnitude:Ct?nt/k:void 0,binPhase:Je?st/k:void 0,binFlux:Qe?He/k:void 0,binPhaseDeviation:Ie?ut/k:void 0,binAttackTime:ct?lt/k:void 0,binEnvelope:Le?ht/k:void 0}),Be=N,he>=this._N)break}d===1?(this._paintCount=he,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._lineVisibleCount=Se,this._lineGeo.setDrawRange(0,this._lineVisibleCount*2),this._pruneArchive(t,ae)):(this._paintCount=0,this._visibleCount=he,this._geo.setDrawRange(0,he),this._lineVisibleCount=Se,this._lineGeo.setDrawRange(0,Se*2)),t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{...de,time:ae,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{...de,time:ae,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{...de,time:ae,deltaTime:a,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ne})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0,this._lineMat.blending=e,this._lineMat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}getLineVisibleCount(){return this._lineVisibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;for(let i=0;i<this._N;i++){const r=i*6;this._linePos[r]*=e,this._linePos[r+1]*=t,this._linePos[r+3]*=e,this._linePos[r+4]*=t}this._aPos.needsUpdate=!0,this._aLinePos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose(),this._lineMesh.geometry.dispose(),this._lineMat.dispose()}}function dx(){return window.AudioContext||window.webkitAudioContext}async function hx(n){if(!n)throw new Error("No file provided for decoding.");const e=dx();if(!e)throw new Error("Web Audio API is not supported in this browser.");const t=new e;try{const i=await n.arrayBuffer(),r=await t.decodeAudioData(i.slice(0));if(!r||!Number.isFinite(r.duration)||r.duration<=0)throw new Error("Audio decode produced no playable data.");return n}finally{try{await t.close()}catch{}}}const pu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.75 12.508L21.25 9.108V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.5 22.75 17.5 22.75 17.5L22.75 7.94625C22.75 6.80342 22.75 5.84496 22.6696 5.08131C22.6582 4.97339 22.6448 4.86609 22.63 4.76597C22.5525 4.24426 22.4156 3.75757 22.1514 3.35115C22.0193 3.14794 21.8553 2.96481 21.6511 2.80739C21.6128 2.77788 21.573 2.74927 21.5319 2.7216L21.5236 2.71608C20.8164 2.2454 20.0213 2.27906 19.2023 2.48777C18.4102 2.68961 17.4282 3.10065 16.224 3.60469L14.13 4.48115C13.5655 4.71737 13.0873 4.91751 12.712 5.1248C12.3126 5.34535 11.9686 5.60548 11.7106 5.99311C11.4527 6.38075 11.3455 6.7985 11.2963 7.25204C11.25 7.67831 11.25 8.19671 11.25 8.80858V16.7609C10.7448 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.5 12.75 19.5 12.75 19.5L12.75 12.508Z" fill="#1C274C"/>\r
<path d="M7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2V7.76091C5.74485 7.4375 5.14432 7.25 4.5 7.25C2.70507 7.25 1.25 8.70507 1.25 10.5C1.25 12.2949 2.70507 13.75 4.5 13.75C6.29493 13.75 7.75 12.2949 7.75 10.5V5.0045C8.44852 5.50913 9.27955 5.75 10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.54565 4.25 8.9663 4.07389 8.51159 3.69837C8.0784 3.34061 7.75 2.79785 7.75 2Z" fill="#1C274C"/>\r
</svg>`,mu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#1C274C"/>\r
</svg>`,fx=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#1C274C"/>\r
<path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#1C274C"/>\r
</svg>`,gu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="#1C274C"/>\r
</svg>`,px=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M21.9998 17.5737L21.9998 6.42632C21.9998 4.57895 20.3991 3.41122 19.0966 4.30838L13 8.76844L13 7.12303C13 5.50658 11.5327 4.48482 10.3388 5.26983L2.92136 10.1468C1.69288 10.9545 1.69288 13.0455 2.92135 13.8532L10.3388 18.7302C11.5327 19.5152 13 18.4934 13 16.877V15.2316L19.0966 19.6916C20.3991 20.5888 21.9998 19.4211 21.9998 17.5737Z" fill="#1C274C"/>\r
</svg>`,mx=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 17.5737L2 6.42632C2 4.57895 3.60064 3.41122 4.90312 4.30838L10.9998 8.76844L10.9998 7.12303C10.9998 5.50658 12.467 4.48482 13.661 5.26983L21.0784 10.1468C22.3069 10.9545 22.3069 13.0455 21.0784 13.8532L13.661 18.7302C12.467 19.5152 10.9998 18.4934 10.9998 16.877V15.2316L4.90313 19.6916C3.60065 20.5888 2 19.4211 2 17.5737Z" fill="#1C274C"/>\r
</svg>`,vu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.5V11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C16.7936 6.3173 16.9531 7.49303 16.9893 9.50002L17.6584 9.17082C19.6042 8.19788 20.5772 7.7114 21.2886 8.15107C22 8.59075 22 9.67853 22 11.8541V12.1459C22 14.3215 22 15.4093 21.2886 15.8489C20.5772 16.2886 19.6042 15.8021 17.6584 14.8292L16.9893 14.5C16.9531 16.507 16.7936 17.6827 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5ZM13.5607 9.56066C14.1464 8.97487 14.1464 8.02513 13.5607 7.43934C12.9749 6.85355 12.0251 6.85355 11.4393 7.43934C10.8536 8.02513 10.8536 8.97487 11.4393 9.56066C12.0251 10.1464 12.9749 10.1464 13.5607 9.56066Z" fill="#1C274C"/>\r
</svg>`,_u=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 4.5C6 3.56538 6 3.09808 6.20096 2.75C6.33261 2.52197 6.52197 2.33261 6.75 2.20096C7.09808 2 7.56538 2 8.5 2H15.5C16.4346 2 16.9019 2 17.25 2.20096C17.478 2.33261 17.6674 2.52197 17.799 2.75C18 3.09808 18 3.56538 18 4.5C18 5.43462 18 5.90192 17.799 6.25C17.6674 6.47803 17.478 6.66739 17.25 6.79904C16.9019 7 16.4346 7 15.5 7H8.5C7.56538 7 7.09808 7 6.75 6.79904C6.52197 6.66739 6.33261 6.47803 6.20096 6.25C6 5.90192 6 5.43462 6 4.5Z" fill="#1C274C"/>\r
<path d="M5.00214 3.93909C4.84746 4.07647 4.75 4.27687 4.75 4.50002C4.75 4.72318 4.84746 4.92357 5.00214 5.06095C4.99998 4.89619 4.99999 4.72205 5 4.54025V4.4598C4.99999 4.278 4.99998 4.10385 5.00214 3.93909Z" fill="#1C274C"/>\r
<path d="M10 16V20C10 20.9428 10 21.4142 10.2929 21.7071C10.5858 22 11.0572 22 12 22C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20V16C14 15.0572 14 14.5858 13.7071 14.2929C13.4142 14 12.9428 14 12 14C11.0572 14 10.5858 14 10.2929 14.2929C10 14.5858 10 15.0572 10 16Z" fill="#1C274C"/>\r
<path d="M18.9944 5.25H19.0453C19.4999 5.25 19.8051 5.25037 20.0416 5.26579C20.2718 5.2808 20.3843 5.30776 20.4583 5.3369C20.781 5.46395 21.0364 5.71937 21.1635 6.04208C21.1926 6.11609 21.2196 6.22858 21.2346 6.45878C21.25 6.6953 21.2504 7.00044 21.2504 7.4551C21.2504 8.29243 21.2398 8.52185 21.179 8.69392C21.0747 8.98918 20.8634 9.23455 20.5869 9.38148C20.4257 9.4671 20.2004 9.5116 19.3724 9.63581L15.249 10.2543C14.4763 10.3702 13.8277 10.4675 13.3152 10.6116C12.7721 10.7643 12.2916 10.9923 11.9166 11.4278C11.5334 11.8727 11.3753 12.4055 11.3071 13.0062C11.5113 12.9999 11.727 13 11.9458 13H12.0546C12.3196 13 12.5799 12.9999 12.8208 13.011C12.8708 12.6902 12.9482 12.5286 13.0532 12.4067C13.1626 12.2796 13.3307 12.1654 13.7212 12.0556C14.1321 11.94 14.6865 11.8555 15.5182 11.7307L19.714 11.1014C20.3648 11.0044 20.8716 10.9288 21.2907 10.7061C21.8991 10.3829 22.3639 9.84304 22.5934 9.19346C22.7514 8.74599 22.751 8.23353 22.7504 7.57559L22.7504 7.43098C22.7504 7.00661 22.7504 6.65233 22.7314 6.3612C22.7116 6.05823 22.6691 5.77171 22.5592 5.49258C22.2797 4.78261 21.7177 4.22069 21.0078 3.94117C20.7286 3.83128 20.4421 3.78872 20.1392 3.76897C19.848 3.74999 19.4937 3.74999 19.0694 3.75H18.9944C19.0002 3.96867 19.0002 4.20681 19.0002 4.45976V4.54024C19.0002 4.7932 19.0002 5.03133 18.9944 5.25Z" fill="#1C274C"/>\r
</svg>`;function or(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function Lt(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,s]of Object.entries(t))r==="text"?i.textContent=s:r==="html"?i.innerHTML=s:i.setAttribute(r,s);return i}function Cn(n,e,t){!n||!e||(n.innerHTML="",n.append(Lt("span","audio-player__icon",{html:e})),t&&n.setAttribute("aria-label",t))}function gx(n){if(!n){console.warn("[AudioPlayer] No container element.");const U=new Audio;return U.crossOrigin="anonymous",{audioEl:U,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=Lt("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"}),s=document.getElementById("app");function a(U){r.classList.toggle("audio-player__collapse-btn--icon",U),U?(Cn(r,pu,"Expand player"),r.title="Expand player"):(r.textContent="«",r.setAttribute("aria-label","Collapse audio player"),r.title="Collapse player"),s&&s.classList.toggle("audio-player-collapsed",U)}a(!1);const o=Lt("div","audio-player__body"),l=Lt("div","audio-player__file-row"),c=Lt("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});c.style.display="none";const u=Lt("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});Cn(u,pu,"Open audio file");const d=Lt("span","audio-player__file-name",{text:"No file loaded"});l.append(c,u);const h=Lt("div","audio-player__transport"),f=Lt("button","audio-player__btn audio-player__btn--play",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});Cn(f,mu,"Play");const g=Lt("button","audio-player__btn",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});Cn(g,gu,"Stop");const _=Lt("button","audio-player__btn",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});Cn(_,px,"−10 seconds");const m=Lt("button","audio-player__btn",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});Cn(m,mx,"+10 seconds");const p=Lt("button","audio-player__btn",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});Cn(p,Pd,"Save PNG");const S=Lt("button","audio-player__btn",{id:"btn-record","aria-label":"Record video",disabled:"true",title:"Record canvas and audio"});Cn(S,vu,"Record video");const v=Lt("button","audio-player__btn",{id:"btn-paint-all","aria-label":"Paint all",disabled:"true",title:"Run through full audio and stop"});Cn(v,_u,"Paint all");const b=Lt("div","audio-player__speed-wrap"),R=Lt("input","audio-player__speed-input",{type:"number",min:"0.1",max:"16",step:"0.1",value:"1","aria-label":"Playback speed multiplier",title:"Playback speed multiplier (0.1 to 16)"}),E=Lt("span","audio-player__speed-suffix",{text:"x"});b.append(R,E),h.append(_,f,g,m,p,S,v,b);const T=Lt("div","audio-player__progress-row"),A=Lt("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function C(U){A.style.background=`linear-gradient(90deg, var(--color-accent) ${U}%, var(--color-border) ${U}%)`}C(0);const x=Lt("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),L=Lt("div","audio-player__progress-meta");L.append(d,x),T.append(A,L),o.append(l,h,T),n.append(r,o);function W(U){Cn(f,U?fx:mu,U?"Pause":"Play")}function j(U){Cn(S,U?gu:vu,U?"Stop recording":"Record video")}function Q(){Cn(v,_u,"Paint all")}function Z(U,X=""){c.disabled=U,f.disabled=U||!e.src,g.disabled=U||!e.src,_.disabled=U||!e.src,m.disabled=U||!e.src,S.disabled=U||!e.src,v.disabled=U||!e.src,R.disabled=U||!e.src,U&&X&&(d.textContent=X)}function K(U){const X=Math.max(.1,Math.min(16,Number(U)));Number.isFinite(X)&&(e.playbackRate=X,R.value=String(Number(X.toFixed(2))),n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:X},bubbles:!0})))}function ce(U,X=(U==null?void 0:U.name)||"Audio loaded"){U&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(U),e.load(),d.textContent=X,t=!1,W(!1),f.classList.remove("audio-player__btn--active"),A.value="0",C(0),x.textContent="0:00 / –:––",G(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:U,audioEl:e},bubbles:!0})))}function G(){f.disabled=!1,g.disabled=!1,_.disabled=!1,m.disabled=!1,S.disabled=!1,v.disabled=!1,R.disabled=!1}c.addEventListener("change",async U=>{const X=U.target.files[0];if(X){Z(!0,`Loading ${X.name}...`);try{d.textContent=`Decoding ${X.name}...`;const me=await hx(X);ce(me,me.name)}catch(me){console.warn("[AudioPlayer] decode failed:",me),d.textContent="Decode failed. Try another file."}finally{Z(!1),c.value=""}}}),f.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(U){console.warn("[AudioPlayer] play() failed:",U.message)}}),e.addEventListener("play",()=>{t=!0,W(!0),f.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,W(!1),f.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,W(!1),f.classList.remove("audio-player__btn--active")}),g.addEventListener("click",()=>{e.pause(),e.currentTime=0,A.value="0",C(0),x.textContent=`0:00 / ${or(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),_.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),m.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),p.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),S.addEventListener("click",()=>{S.disabled||n.dispatchEvent(new CustomEvent("player:recordvideo-toggle",{detail:{audioEl:e},bubbles:!0}))}),v.addEventListener("click",()=>{v.disabled||n.dispatchEvent(new CustomEvent("player:paintall",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:paintall-state",U=>{var me;const X=!!((me=U==null?void 0:U.detail)!=null&&me.running);v.disabled=X||!e.src,S.disabled=X||!e.src,R.disabled=X||!e.src,Q(),v.classList.toggle("audio-player__btn--active",X)}),n.addEventListener("player:recordvideo-state",U=>{var me;const X=!!((me=U==null?void 0:U.detail)!=null&&me.running);j(X),S.classList.toggle("audio-player__btn--active",X),v.disabled=X||!e.src,!X&&!v.disabled&&e.src&&(S.disabled=!1),R.disabled=X||!e.src}),R.addEventListener("keydown",U=>{U.key==="Enter"&&(U.preventDefault(),K(R.value),R.blur())});let q=!1;return A.addEventListener("mousedown",()=>{q=!0}),A.addEventListener("touchstart",()=>{q=!0},{passive:!0}),A.addEventListener("input",()=>{const U=parseFloat(A.value);C(U),e.duration&&(x.textContent=`${or(e.duration*U/100)} / ${or(e.duration)}`)}),A.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(A.value)/100*e.duration),q=!1}),e.addEventListener("timeupdate",()=>{if(q)return;const U=e.currentTime,X=e.duration;if(!isFinite(X)||X===0)return;const me=U/X*100;A.value=String(me),C(me),x.textContent=`${or(U)} / ${or(X)}`}),e.addEventListener("loadedmetadata",()=>{x.textContent=`0:00 / ${or(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),a(i)}),{audioEl:e,getIsPlaying:()=>t}}function ro(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function vx({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const s=ro("div","canvas-wrapper__resize-handle-right"),a=ro("div","canvas-wrapper__resize-handle-bottom"),o=ro("div","canvas-wrapper__resize-handle-corner");n.append(s,a,o);let l=null;function c(h,f,g){h.preventDefault();const _=h.touches?h.touches[0].clientX:h.clientX,m=h.touches?h.touches[0].clientY:h.clientY;l={type:f,startX:_,startY:m,startW:n.clientWidth,startH:n.clientHeight,handle:g},g.classList.add("dragging"),document.body.style.cursor=f==="right"?"ew-resize":f==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function u(h){if(!l)return;const f=h.touches?h.touches[0].clientX:h.clientX,g=h.touches?h.touches[0].clientY:h.clientY,_=f-l.startX,m=g-l.startY,p=160,S=120,v=e.getBoundingClientRect();let b=l.startW,R=l.startH;(l.type==="right"||l.type==="corner")&&(b=Math.max(p,Math.min(l.startW+_,v.width-4))),(l.type==="bottom"||l.type==="corner")&&(R=Math.max(S,Math.min(l.startH+m,window.innerHeight-4)));const E=i>0?b/i:1,T=r>0?R/r:1;i=b,r=R,n.style.width=`${b}px`,n.style.height=`${R}px`,t(b,R,E,T)}function d(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return s.addEventListener("mousedown",h=>c(h,"right",s)),a.addEventListener("mousedown",h=>c(h,"bottom",a)),o.addEventListener("mousedown",h=>c(h,"corner",o)),s.addEventListener("touchstart",h=>c(h,"right",s),{passive:!1}),a.addEventListener("touchstart",h=>c(h,"bottom",a),{passive:!1}),o.addEventListener("touchstart",h=>c(h,"corner",o),{passive:!1}),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),window.addEventListener("resize",()=>{if(!n.style.width){const h=e.clientWidth,f=e.clientHeight,g=i>0?h/i:1,_=r>0?f/r:1;i=h,r=f,t(h,f,g,_)}}),{setSize(h,f){const g=i>0?h/i:1,_=r>0?f/r:1;i=h,r=f,n.style.width=`${h}px`,n.style.height=`${f}px`,t(h,f,g,_)},getSize(){return{w:i,h:r}}}}const zd=1,dr=".ssp.json";function _x({params:n,presetName:e="",presetLibrary:t=[],projectName:i=""}){return{schemaVersion:zd,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),projectName:String(i||""),presetName:String(e||""),params:n&&typeof n=="object"?n:{},presetLibrary:Array.isArray(t)?t:[]}}function xu(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return{schemaVersion:Number.isFinite(Number(e.schemaVersion))?Number(e.schemaVersion):zd,createdAt:e.createdAt||null,updatedAt:e.updatedAt||null,projectName:String(e.projectName||""),presetName:String(e.presetName||""),params:e.params,presetLibrary:Array.isArray(e.presetLibrary)?e.presetLibrary:[]}}function xx(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function Zn(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function Nl(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,s=0;for(let a=0;a<t;a++){const o=Math.max(0,n[a]/255),l=a/Math.max(1,t-1)*i;r+=l*o,s+=o}return s<=1e-9?0:r/s}function bx(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const s=Math.max(0,n[r]/255),a=Math.max(0,e[r]/255),o=s-a;o>0&&(i+=o)}return Zn(i/t)}function Sx(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let a=0;a<n.length;a++){const o=Math.max(0,n[a]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),s=i/n.length;return Zn(r/Math.max(s,e))}function Mx(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,s=[];for(let u=1;u<t-1;u++){const d=n[u];if(!(d<r)&&d>=n[u-1]&&d>=n[u+1]){const h=u/Math.max(1,t-1)*i;s.push({i:u,hz:h,mag:d/255})}}if(s.length<2)return 0;s.sort((u,d)=>d.mag-u.mag);const a=s.slice(0,6),o=Math.max(20,a[0].hz);let l=0,c=0;for(let u=1;u<a.length;u++){const d=a[u],f=Math.max(1,Math.round(d.hz/o))*o,g=Math.abs(d.hz-f)/Math.max(f,1e-9);l+=g*d.mag,c+=d.mag}return c<=1e-9?0:Zn(l/c*2)}function yx(n){if(!n||!n.length)return 0;let e=0;for(let t=0;t<n.length;t++)n[t]>e&&(e=n[t]);return Zn(e/255)}function Ex(n){if(!n||n.length<2)return 0;let e=0,t=n[0]-128>=0?1:-1;for(let i=1;i<n.length;i++){const r=n[i]-128>=0?1:-1;r!==t&&e++,t=r}return Zn(e/Math.max(1,n.length-1))}function wx(n,e,t=.85){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Math.max(0,Math.min(1,Number.isFinite(t)?t:.85));let a=0;for(let c=0;c<i;c++)a+=Math.max(0,n[c]/255);if(a<=1e-9)return 0;const o=a*s;let l=0;for(let c=0;c<i;c++)if(l+=Math.max(0,n[c]/255),l>=o){const u=c/Math.max(1,i-1)*r;return Zn(u/Math.max(1,r))}return 1}function Vd(n,e,t=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,s=Number.isFinite(t)?t:Nl(n,e);let a=0,o=0;for(let c=0;c<i;c++){const u=Math.max(0,n[c]/255),h=c/Math.max(1,i-1)*r-s;o+=h*h*u,a+=u}if(a<=1e-9)return 0;const l=Math.sqrt(o/a);return Zn(l/Math.max(1,r))}function Cx(n,e,t=null,i=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const r=n.length,s=e/2,a=Number.isFinite(t)?t:Nl(n,e),o=Number.isFinite(i)?Math.max(1e-6,Number(i)*s):Math.max(1e-6,Vd(n,e,a)*s);let l=0,c=0;for(let d=0;d<r;d++){const h=Math.max(0,n[d]/255),g=(d/Math.max(1,r-1)*s-a)/o;c+=g*g*g*h,l+=h}if(l<=1e-9)return 0;const u=c/l;return Zn((u+2)/4)}function Tx(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=new Float32Array(12);let s=0;for(let o=1;o<t;o++){const l=Math.max(0,n[o]/255);if(l<=0)continue;const c=o/Math.max(1,t-1)*i;if(c<20)continue;const u=69+12*Math.log2(c/440),d=(Math.round(u)%12+12)%12;r[d]+=l,s+=l}if(s<=1e-9)return 0;let a=0;for(let o=0;o<12;o++)r[o]>a&&(a=r[o]);return Zn(a/s)}function Ax(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return Zn((Number.isFinite(n)?n:0)/t)}const Rr=document.getElementById("three-canvas"),os=document.getElementById("canvas-wrapper"),jn=document.getElementById("canvas-col"),Rt=new ld({canvas:Rr,antialias:!0});Rt.setPixelRatio(window.devicePixelRatio);Rt.setClearColor(0,1);Rt.autoClear=!0;const Yn=new Df,Ll=250,fs=new Gf(Ll);let ua=!0;fs.userData.excludeFromPng=!0;fs.userData.excludeFromVideo=!0;fs.userData.excludeFromObj=!0;Yn.add(fs);const Dl=new qr;let da=!0;function Fl(){const n=new Hf(Ll*2,10,3462041,3621201);return n.material.transparent=!0,n.material.opacity=.16,n.userData.excludeFromPng=!0,n.userData.excludeFromVideo=!0,n.userData.excludeFromObj=!0,n}const Rx=Fl(),Hd=Fl();Hd.rotation.x=Math.PI/2;const Gd=Fl();Gd.rotation.z=Math.PI/2;Dl.add(Rx,Hd,Gd);Yn.add(Dl);function Px(){window.dispatchEvent(new CustomEvent("seesound:origin-sign-state",{detail:{enabled:ua,size:Ll}}))}function Nx(){window.dispatchEvent(new CustomEvent("seesound:coordinate-guide-state",{detail:{enabled:da}}))}window.addEventListener("seesound:origin-sign-toggle",n=>{var i;const e=(i=n==null?void 0:n.detail)==null?void 0:i.enabled;Gt({originSignEnabled:(typeof e=="boolean"?e:!ua)?1:0})});window.addEventListener("seesound:coordinate-guide-toggle",n=>{var i;const e=(i=n==null?void 0:n.detail)==null?void 0:i.enabled;Gt({coordinateGuidesEnabled:(typeof e=="boolean"?e:!da)?1:0})});function Wd(){ua=Number(ee.originSignEnabled??1)>=.5,da=Number(ee.coordinateGuidesEnabled??1)>=.5,fs.visible=ua,Dl.visible=da,Px(),Nx()}Wd();const Wt=new gl(-1,1,1,-1,.001,5e3),Vt=new Tn(55,1,.001,5e3);let De=Wt;const gt=new H(0,0,0),Il=new H(0,0,420),bu=Il.length();for(const n of[Wt,Vt])n.position.copy(Il),n.up.set(0,1,0),n.lookAt(gt);const ps=new Nv(Rt),Xd=new Lv(Yn,De),pr=new Cr(new at(1,1),1.15,.7,.18),Hi=new Iv(Yn,De,{focus:380,aperture:12e-5,maxblur:.01,width:1,height:1});ps.addPass(Xd);ps.addPass(pr);ps.addPass(Hi);function lr(n,e,t,i){const r=Number(n);return Number.isFinite(r)?Math.max(e,Math.min(t,r)):i}function so(n,e=!0){if(n==null)return e;if(typeof n=="boolean")return n;const t=Number(n);if(Number.isFinite(t))return t>=.5;const i=String(n).trim().toLowerCase();return i==="on"||i==="true"?!0:i==="off"||i==="false"?!1:e}function qd(){var a;const n=so(ee.postProcessEnabled,!0),e=n&&so(ee.bloomEnabled,!0),t=n&&so(ee.bokehEnabled,!0);pr.enabled=e,pr.strength=lr(ee.bloomStrength,0,4,1.15),pr.radius=lr(ee.bloomRadius,0,2,.7),pr.threshold=lr(ee.bloomThreshold,0,1,.18),Hi.enabled=t;const i=lr(ee.bokehFocus,1,5e3,380),r=lr(ee.bokehAperture,0,.001,12e-5),s=lr(ee.bokehMaxBlur,0,.1,.01);if((a=Hi.materialBokeh)!=null&&a.uniforms){const o=Hi.materialBokeh.uniforms;o.focus&&(o.focus.value=i),o.aperture&&(o.aperture.value=r),o.maxblur&&(o.maxblur.value=s)}}function Ul(){const e=ee.cameraProjection==="perspective"?Vt:Wt;e!==De&&(e.position.copy(De.position),e.quaternion.copy(De.quaternion),e.up.copy(De.up),e.zoom=De.zoom,e.lookAt(gt),e.updateProjectionMatrix(),De=e,Xd.camera=e,Hi.camera=e,$n())}const At={radius:420,azimuth:0,elevation:0};function $n(){const n=De.position.x-gt.x,e=De.position.y-gt.y,t=De.position.z-gt.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);At.radius=i,At.azimuth=Math.atan2(n,t),At.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function ha(){const n=Math.cos(At.elevation);De.position.set(gt.x+At.radius*n*Math.sin(At.azimuth),gt.y+At.radius*Math.sin(At.elevation),gt.z+At.radius*n*Math.cos(At.azimuth)),De.lookAt(gt)}function jd(n){const e=String(n||"orthoXY");return e==="isometric"?{azimuth:Math.PI/4,elevation:Math.asin(1/Math.sqrt(3))}:e==="fortyFive"?{azimuth:Math.PI/4,elevation:Math.PI/4}:e==="topXZ"?{azimuth:0,elevation:Math.PI/2-.001}:e==="orthoYZ"?{azimuth:Math.PI/2,elevation:0}:{azimuth:0,elevation:0}}function Yd(){gt.set(0,0,0);const n=Math.max(1,Rt.domElement.clientWidth||jn.clientWidth||window.innerWidth),e=Math.max(1,Rt.domElement.clientHeight||jn.clientHeight||window.innerHeight);Bl(n,e);for(const t of[Wt,Vt])t.position.copy(Il),t.up.set(0,1,0),t.rotation.set(0,0,0),t.zoom=1,t.lookAt(gt),t.updateProjectionMatrix();Ul(),Ol(!0),$n()}function Ol(n=!1){const e=String(ee.cameraAxoPreset||"orthoXY"),t=n?bu:Math.max(40,Number(At.radius)||bu),{azimuth:i,elevation:r}=jd(e);At.radius=t,At.azimuth=i,At.elevation=r,ha(),$n()}function $d(){const n=Number(ee.cameraPosX),e=Number(ee.cameraPosY),t=Number(ee.cameraPosZ),i=Number(ee.cameraTargetX),r=Number(ee.cameraTargetY),s=Number(ee.cameraTargetZ),a=Number(ee.cameraAngleOfView);Number.isFinite(i)&&(gt.x=i),Number.isFinite(r)&&(gt.y=r),Number.isFinite(s)&&(gt.z=s);const o=l=>{Number.isFinite(n)&&(l.position.x=n),Number.isFinite(e)&&(l.position.y=e),Number.isFinite(t)&&(l.position.z=t),l.lookAt(gt)};o(Wt),o(Vt),Number.isFinite(a)&&(Vt.fov=Math.max(20,Math.min(120,a)),Vt.updateProjectionMatrix()),$n()}$n();const fn={active:!1,button:-1,lastX:0,lastY:0};Rr.addEventListener("contextmenu",n=>n.preventDefault());Rr.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(fn.active=!0,fn.button=n.button,fn.lastX=n.clientX,fn.lastY=n.clientY,n.preventDefault())});window.addEventListener("mouseup",()=>{fn.active=!1,fn.button=-1});window.addEventListener("mousemove",n=>{if(!fn.active)return;const e=n.clientX-fn.lastX,t=n.clientY-fn.lastY;if(fn.lastX=n.clientX,fn.lastY=n.clientY,fn.button===0)At.azimuth-=e*.006,At.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,At.elevation-t*.005)),ha();else if(fn.button===1){const i=Math.max(1,Rt.domElement.clientHeight||jn.clientHeight||window.innerHeight),r=new H,s=new H,a=new H;De.updateMatrixWorld();const o=De.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),s.set(o[4],o[5],o[6]).normalize();let l=.01;if(De.isOrthographicCamera)l=(De.top-De.bottom)/(Math.max(.01,De.zoom)*i);else{const c=Math.max(.001,De.position.distanceTo(gt)),u=hl.degToRad(De.fov);l=2*Math.tan(u*.5)*c/i,l/=Math.max(.01,De.zoom)}a.copy(r).multiplyScalar(-e*l),a.addScaledVector(s,t*l),De.position.add(a),gt.add(a),$n()}else if(fn.button===2){const i=-e*.004,r=-t*.004;De.rotateOnWorldAxis(new H(0,1,0),i),De.rotateX(r)}});Rr.addEventListener("wheel",n=>{if(n.preventDefault(),De.isPerspectiveCamera){const e=new H;De.getWorldDirection(e);const t=Math.max(2,At.radius*.08),i=(n.deltaY>0?1:-1)*t;De.position.addScaledVector(e,i),$n()}else{const e=n.deltaY>0?.92:1.08;De.zoom=Math.max(.05,Math.min(64,De.zoom*e)),De.updateProjectionMatrix()}},{passive:!1});function Zd(n){if(!n)return;let e=!1,t=!1;Number.isFinite(n.x)&&(De.position.x=n.x,e=!0),Number.isFinite(n.y)&&(De.position.y=n.y,e=!0),Number.isFinite(n.z)&&(De.position.z=n.z,e=!0),Number.isFinite(n.targetX)&&(gt.x=n.targetX,t=!0),Number.isFinite(n.targetY)&&(gt.y=n.targetY,t=!0),Number.isFinite(n.targetZ)&&(gt.z=n.targetZ,t=!0),(e||t)&&(De.lookAt(gt),$n()),Number.isFinite(n.zoom)&&(De.zoom=Math.max(.05,Math.min(64,n.zoom)),De.updateProjectionMatrix()),Number.isFinite(n.angleOfView)&&(Vt.fov=Math.max(20,Math.min(120,n.angleOfView)),Vt.updateProjectionMatrix())}function Lx(){const n=Pt.getVisibleBounds();if(n.empty){Yd();return}const e=1.18,t=Math.max(1,Number(window.devicePixelRatio)||1),i=Rt.domElement.width/t,r=Rt.domElement.height/t,s=Math.max(1,i||Number(ee.canvasWidth)||Rt.domElement.clientWidth||jn.clientWidth||window.innerWidth),a=Math.max(1,r||Number(ee.canvasHeight)||Rt.domElement.clientHeight||jn.clientHeight||window.innerHeight),o=s/a,l=n.size,c=n.center,u=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(gt.copy(c),De.isOrthographicCamera){const{azimuth:d,elevation:h}=jd(ee.cameraAxoPreset);At.azimuth=d,At.elevation=h,At.radius=Math.max(u*2.2,60),ha(),De.updateMatrixWorld(!0);const f=De.matrixWorld.elements,g=new H(f[0],f[1],f[2]).normalize(),_=new H(f[4],f[5],f[6]).normalize(),m=[new H(n.min.x,n.min.y,n.min.z),new H(n.min.x,n.min.y,n.max.z),new H(n.min.x,n.max.y,n.min.z),new H(n.min.x,n.max.y,n.max.z),new H(n.max.x,n.min.y,n.min.z),new H(n.max.x,n.min.y,n.max.z),new H(n.max.x,n.max.y,n.min.z),new H(n.max.x,n.max.y,n.max.z)];let p=0,S=0;const v=new H;for(const E of m)v.copy(E).sub(c),p=Math.max(p,Math.abs(v.dot(g))),S=Math.max(S,Math.abs(v.dot(_)));const b=Math.max(p,S*o,u*.35),R=Math.max(S,p/Math.max(.001,o),u*.35);Wt.left=-b*e,Wt.right=b*e,Wt.top=R*e,Wt.bottom=-R*e,Wt.zoom=1,Wt.near=-Math.max(5e3,u*6),Wt.far=Math.max(5e3,u*6),Wt.updateProjectionMatrix()}else{Vt.lookAt(c),$n();const d=hl.degToRad(Vt.fov),h=u*e/Math.max(.001,Math.tan(d*.5)),f=2*Math.atan(Math.tan(d*.5)*(Vt.aspect||o)),g=u*e/Math.max(.001,Math.tan(f*.5));At.radius=Math.max(g,h,40),ha(),Vt.near=Math.max(.001,At.radius-u*3),Vt.far=Math.max(Vt.near+1,At.radius+u*6),Vt.updateProjectionMatrix()}$n()}function Bl(n,e){var t,i;Wt.left=-n/2,Wt.right=n/2,Wt.top=e/2,Wt.bottom=-e/2,Wt.updateProjectionMatrix(),Vt.aspect=n/Math.max(1,e),Vt.updateProjectionMatrix(),Rt.setSize(n,e,!1),ps.setSize(n,e),pr.setSize(n,e),(i=(t=Hi.materialBokeh)==null?void 0:t.uniforms)!=null&&i.aspect&&(Hi.materialBokeh.uniforms.aspect.value=n/Math.max(1,e))}const Dx=jn.clientWidth||window.innerWidth,Fx=jn.clientHeight||window.innerHeight;Bl(Dx,Fx);Ul();Ol();$d();qd();const Pt=new ux(Yn,{maxParticles:ee.maxParticles??262144}),qn=Pt.onRulesChanged(ee.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:qn}));function Ix(n=null){return new Set([...Array.isArray(n==null?void 0:n.spawnedParticles)?n.spawnedParticles:[],...Array.isArray(n==null?void 0:n.allParticles)?n.allParticles:[],...Array.isArray(n==null?void 0:n.lines)?n.lines:[],...Array.isArray(n==null?void 0:n.background)?n.background:[],...Array.isArray(n==null?void 0:n.camera)?n.camera:[]])}function kl(n=null){const e=Ix(n),t=new Set(["amplitude","bass","mid","high","peakFreq","pan","time","deltaTime","frequencyHz","normFreq","canvasWidthPx","canvasHeightPx","audioLengthSec"]),i=e.has("binMagnitude")||e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState"),r=e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState")||e.has("binAttackTime"),s=e.has("binPhaseDeviation"),a=e.has("binEnvelope")||e.has("binEnvelopeState"),o=e.has("binPhase"),l=e.has("binAttackTime"),c=e.has("globalRmsEnergy")||e.has("binRMSEnergy")||e.has("amplitude"),u=e.has("spectralCentroid"),d=e.has("spectralFlux"),h=e.has("spectralFlatness"),f=e.has("inharmonicity"),g=e.has("peakAmplitude"),_=e.has("zeroCrossingRate"),m=e.has("spectralRolloff"),p=e.has("spectralSpread"),S=e.has("spectralSkewness"),v=e.has("chromagram"),b=new Set(t);return c&&b.add("globalRmsEnergy"),u&&b.add("spectralCentroid"),d&&b.add("spectralFlux"),h&&b.add("spectralFlatness"),f&&b.add("inharmonicity"),g&&b.add("peakAmplitude"),_&&b.add("zeroCrossingRate"),m&&b.add("spectralRolloff"),p&&b.add("spectralSpread"),S&&b.add("spectralSkewness"),v&&b.add("chromagram"),i&&b.add("binMagnitude"),r&&b.add("binFlux"),s&&b.add("binPhaseDeviation"),o&&b.add("binPhase"),a&&b.add("binEnvelope"),a&&b.add("binEnvelopeState"),l&&b.add("binAttackTime"),c&&b.add("binRMSEnergy"),{used:e,calculatedInputs:b,worklet:{enabled:i||r||s||a||l||o,needMagnitude:i,needFlux:r,needPhaseDeviation:s,needPhase:o,needEnvelope:a,needAttackTime:l},engine:{needRms:c,needSpectralCentroid:u,needGlobalSpectralFlux:d,needSpectralFlatness:h,needInharmonicity:f,needPeakAmplitude:g,needZeroCrossingRate:_,needSpectralRolloff:m,needSpectralSpread:p,needSpectralSkewness:S,needChromagram:v},backend:{calc_fft:!0,calc_magnitude:i||r||u||h||d,calc_magnitude_dbfs:i||c,calc_phase:s||o,calc_phase_deviation:s,calc_local_spectral_flux:r||a,calc_envelope_state:a,calc_rms_energy:c,calc_peak_amplitude:g,calc_zero_crossing_rate:_,calc_spectral_centroid:u,calc_global_spectral_flux:d,calc_spectral_flatness:h,calc_spectral_rolloff:m,calc_spectral_spread:p,calc_spectral_skewness:S,calc_spectral_kurtosis:e.has("spectralKurtosis"),calc_mfcc:e.has("mfcc"),calc_chromagram:v}}}function Ux(n={}){const e=t=>Math.pow(10,Number(t)/20);return{scalar:{center_frequency_hz:{min_value:Number(n.freqNormMin??40),max_value:Number(n.freqNormMax??12e3)},magnitude_dbfs:{min_value:Number(n.binMagnitudeNormMin??-70),max_value:Number(n.binMagnitudeNormMax??0)},magnitude_linear:{min_value:e(Number(n.binMagnitudeNormMin??-70)),max_value:e(Number(n.binMagnitudeNormMax??0))},phase_deviation:{min_value:Number(n.binPhaseDeviationNormMin??0),max_value:Number(n.binPhaseDeviationNormMax??Math.PI)},spectral_flux:{min_value:Number(n.binFluxNormMin??0),max_value:Number(n.binFluxNormMax??.5)},rms_energy:{min_value:e(Number(n.globalRmsNormMin??-60)),max_value:e(Number(n.globalRmsNormMax??0))},spectral_centroid_hz:{min_value:Number(n.spectralCentroidNormMin??150),max_value:Number(n.spectralCentroidNormMax??8e3)},global_spectral_flux:{min_value:Number(n.globalSpectralFluxNormMin??0),max_value:Number(n.globalSpectralFluxNormMax??100)},spectral_flatness:{min_value:Number(n.spectralFlatnessNormMin??0),max_value:Number(n.spectralFlatnessNormMax??1)}},vector:{}}}function kn(n,e,t){const i=Number(e),r=Number(t),s=Number(n);return!Number.isFinite(s)||!Number.isFinite(i)||!Number.isFinite(r)||r<=i?0:Math.max(0,Math.min(1,(s-i)/(r-i)))}const ao=Object.freeze([512,1024,2048,4096,8192,16384]);function fa(n){const e=Number(n);if(!Number.isFinite(e))return 2048;let t=ao[0],i=Math.abs(e-t);for(let r=1;r<ao.length;r++){const s=ao[r],a=Math.abs(e-s);a<i&&(t=s,i=a)}return t}function el(n){const e=Math.floor(Number(n));return Number.isFinite(e)?Math.max(1,Math.min(64,e)):10}function Ox(n={},e=null){const t=kl(e),i=fa(n.fftSize);return{sample_rate:44100,fft_size:i,hop_size:Math.max(64,Math.floor(i/4)),rolloff_percent:.85,n_mfcc:13,...t.backend,normalize_features:!0,normalization_bounds:Ux(n)}}function zl(n=null){const e=kl(n);window.dispatchEvent(new CustomEvent("seesound:calculated-rule-inputs",{detail:{calculatedInputs:[...e.calculatedInputs]}}))}zl(qn==null?void 0:qn.requiredInputsByTarget);window.addEventListener("seesound:particle-size-apply-all",n=>{var i,r;const e=Number((i=n==null?void 0:n.detail)==null?void 0:i.oldDefaultSize),t=Number((r=n==null?void 0:n.detail)==null?void 0:r.newDefaultSize);!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0||Pt.scaleAllParticleSizes(t/e)});class Kd{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.binAnalysisNode=null,this._workletConnected=!1,this._workletReady=!1,this._workletLoadPromise=null,this._workletConfig={enabled:!1,needMagnitude:!1,needFlux:!1,needPhaseDeviation:!1,needPhase:!1,needEnvelope:!1,needAttackTime:!1,fluxWindowFrames:el(ee.fluxWindowFrames),attackThreshold:5e-4,sustainFluxEps:.004,sustainMagThreshold:.08,decayThreshold:.008},this._calcUsage={needRms:!0,needSpectralCentroid:!1,needGlobalSpectralFlux:!1,needSpectralFlatness:!1,needInharmonicity:!1,needPeakAmplitude:!1,needZeroCrossingRate:!1,needSpectralRolloff:!1,needSpectralSpread:!1,needSpectralSkewness:!1,needChromagram:!1},this.FFT_SIZE=fa(ee.fftSize),this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.rmsDbfs=-96,this.spectralCentroidHz=0,this.spectralFluxAU=0,this.spectralFlatnessRatio=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.peakAmplitude=0,this.zeroCrossingRate=0,this.spectralRolloff=0,this.spectralSpread=0,this.spectralSkewness=0,this.chromagram=0,this.ctxState="none"}_createBinAnalysisNode(){if(!this.ctx)return null;const e=new AudioWorkletNode(this.ctx,"bin-analysis-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{fftSize:this.FFT_SIZE,hopSize:Math.floor(this.FFT_SIZE/4),fluxWindowFrames:this._workletConfig.fluxWindowFrames}});return e.port.onmessage=t=>{const i=t.data||{};i.type==="binMetrics"&&(i.magnitude&&(this._binMagnitude=i.magnitude instanceof Float32Array?i.magnitude:new Float32Array(i.magnitude)),i.flux&&(this._binFlux=i.flux instanceof Float32Array?i.flux:new Float32Array(i.flux)),i.phaseDeviation&&(this._binPhaseDeviation=i.phaseDeviation instanceof Float32Array?i.phaseDeviation:new Float32Array(i.phaseDeviation)),i.phase&&(this._binPhase=i.phase instanceof Float32Array?i.phase:new Float32Array(i.phase)),i.envelope&&(this._binEnvelope=i.envelope instanceof Float32Array?i.envelope:new Float32Array(i.envelope)),i.attackTime&&(this._binAttackTime=i.attackTime instanceof Float32Array?i.attackTime:new Float32Array(i.attackTime)))},e}_ensureWorkletLoaded(){if(!(!this.ctx||this._workletReady)&&!this._workletLoadPromise){const e=new URL("/assets/BinAnalysisWorklet-C6EfNb8V.js",import.meta.url);this._workletLoadPromise=this.ctx.audioWorklet.addModule(e).then(()=>{this.binAnalysisNode=this._createBinAnalysisNode(),this._workletReady=!0,this._connectSourceToWorklet(),this._postWorkletConfig()}).catch(t=>{console.warn("[AudioWorklet] Failed to load bin analysis worklet:",t)})}}_postWorkletConfig(){this.binAnalysisNode&&this.binAnalysisNode.port.postMessage({type:"config",config:this._workletConfig})}_connectSourceToWorklet(){if(!this.binAnalysisNode)return!1;const e=this.source||this.streamSource;if(!e)return!1;if(this._workletConnected)return!0;try{return e.connect(this.binAnalysisNode),this._workletConnected=!0,!0}catch{return!1}}setRuleInputUsage(e=null){const t=kl(e);this._workletConfig.enabled=t.worklet.enabled,this._workletConfig.needMagnitude=t.worklet.needMagnitude,this._workletConfig.needFlux=t.worklet.needFlux,this._workletConfig.needPhaseDeviation=t.worklet.needPhaseDeviation,this._workletConfig.needPhase=t.worklet.needPhase,this._workletConfig.needEnvelope=t.worklet.needEnvelope,this._workletConfig.needAttackTime=t.worklet.needAttackTime,this._calcUsage=t.engine,this._postWorkletConfig()}setFftSize(e){var i,r;const t=fa(e);if(t!==this.FFT_SIZE){if(this.FFT_SIZE=t,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.analyser&&(this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0),this.binAnalysisNode){try{(i=this.source)==null||i.disconnect(this.binAnalysisNode)}catch{}try{(r=this.streamSource)==null||r.disconnect(this.binAnalysisNode)}catch{}try{this.binAnalysisNode.disconnect()}catch{}this.binAnalysisNode=null,this._workletConnected=!1}this.ctx&&this._workletReady&&(this.binAnalysisNode=this._createBinAnalysisNode(),this._connectSourceToWorklet(),this._postWorkletConfig())}}setFluxWindowFrames(e){const t=el(e);t!==this._workletConfig.fluxWindowFrames&&(this._workletConfig.fluxWindowFrames=t,this._postWorkletConfig())}init(e){var t,i,r,s,a,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.analyser.connect(this.ctx.destination),this._ensureWorkletLoaded()),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(s=this.analyserL)==null||s.disconnect(),(a=this.analyserR)==null||a.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null,this._workletConnected=!1;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const c=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));c&&(this.streamNode=c,this.streamSource=this.ctx.createMediaStreamSource(c),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const u of[this.analyserL,this.analyserR])u.fftSize=256;const c=this.source||this.streamSource;c==null||c.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1),this._connectSourceToWorklet()}catch{}this._connectSourceToWorklet()}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}update(){var _,m,p;if(!this.analyser)return;((_=this.ctx)==null?void 0:_.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((m=this.ctx)==null?void 0:m.state)??"none",this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((p=this.ctx)==null?void 0:p.sampleRate)??44100,i=t/2,r=S=>S/e*i;let s=0,a=0,o=0,l=0,c=0,u=0,d=0,h=0;for(let S=0;S<e;S++){const v=this.frequencyData[S],b=r(S);b<250?(s+=v,a++):b<4e3?(o+=v,l++):(c+=v,u++),v>d&&(d=v,h=S)}this.bass=a?s/a/255:0,this.mid=l?o/l/255:0,this.high=u?c/u/255:0,this.peakFreq=Math.round(r(h)),this.peakByte=d;const f=Math.max(0,Math.min(1,this.featureSmoothingAlpha));if(this._calcUsage.needSpectralCentroid){const S=Nl(this.frequencyData,t);this.spectralCentroidHz+=(S-this.spectralCentroidHz)*f,this.spectralCentroid=Ax(this.spectralCentroidHz,t)}else this.spectralCentroidHz=0,this.spectralCentroid=0;if(this._calcUsage.needGlobalSpectralFlux){const v=bx(this.frequencyData,this._prevFrequencyDataBins)*100;this.spectralFluxAU+=(v-this.spectralFluxAU)*f,this.spectralFlux=Math.max(0,Math.min(1,this.spectralFluxAU/100))}else this.spectralFluxAU=0,this.spectralFlux=0;if(this._calcUsage.needSpectralFlatness){const S=Sx(this.frequencyData);this.spectralFlatnessRatio+=(S-this.spectralFlatnessRatio)*f,this.spectralFlatness=Math.max(0,Math.min(1,this.spectralFlatnessRatio))}else this.spectralFlatnessRatio=0,this.spectralFlatness=0;if(this._calcUsage.needInharmonicity){const S=Mx(this.frequencyData,t);this.inharmonicity+=(S-this.inharmonicity)*f}else this.inharmonicity=0;if(this._calcUsage.needPeakAmplitude?this.peakAmplitude+=(yx(this.frequencyData)-this.peakAmplitude)*f:this.peakAmplitude=0,this._calcUsage.needZeroCrossingRate?this.zeroCrossingRate+=(Ex(this.timeDomainData)-this.zeroCrossingRate)*f:this.zeroCrossingRate=0,this._calcUsage.needSpectralRolloff?this.spectralRolloff+=(wx(this.frequencyData,t,.85)-this.spectralRolloff)*f:this.spectralRolloff=0,this._calcUsage.needSpectralSpread||this._calcUsage.needSpectralSkewness){const S=Vd(this.frequencyData,t,this.spectralCentroidHz);if(this._calcUsage.needSpectralSpread?this.spectralSpread+=(S-this.spectralSpread)*f:this.spectralSpread=0,this._calcUsage.needSpectralSkewness){const v=Cx(this.frequencyData,t,this.spectralCentroidHz,S);this.spectralSkewness+=(v-this.spectralSkewness)*f}else this.spectralSkewness=0}else this.spectralSpread=0,this.spectralSkewness=0;this._calcUsage.needChromagram?this.chromagram+=(Tx(this.frequencyData,t)-this.chromagram)*f:this.chromagram=0,this._prevFrequencyDataBins.set(this.frequencyData),this._prevFrequencyData.set(this.frequencyData);let g=0;for(const S of this.timeDomainData)g+=((S-128)/128)**2;if(this.amplitude=Math.sqrt(g/this.timeDomainData.length),this.rmsDbfs=20*Math.log10(Math.max(1e-6,this.amplitude)),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let S=0,v=0;for(let b=0;b<this._freqL.length;b++)S+=this._freqL[b],v+=this._freqR[b];this.pan=(v-S)/(S+v+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}getPrevFrequencyData(){return this._prevFrequencyDataBins}getBinMagnitude(){return this._binMagnitude}getBinFlux(){return this._binFlux}getBinPhaseDeviation(){return this._binPhaseDeviation}getBinPhase(){return this._binPhase}getBinEnvelope(){return this._binEnvelope}getBinAttackTime(){return this._binAttackTime}}const Re=new Kd;Re.setRuleInputUsage(qn==null?void 0:qn.requiredInputsByTarget);function Jd(){const n=new WebSocket(`ws://${location.hostname}:8000/ws`);n.onopen=()=>{},n.onclose=()=>{setTimeout(Jd,3e3)},n.onerror=()=>{},n.onmessage=()=>{},Ma(e=>{var t;if(n.readyState===WebSocket.OPEN){const i=(t=Pt.getRuleCompileState)==null?void 0:t.call(Pt),r=(i==null?void 0:i.requiredInputsByTarget)||(qn==null?void 0:qn.requiredInputsByTarget)||null,s={...e,audio_analysis_config:Ox(e,r)};n.send(JSON.stringify({type:"params_update",payload:s}))}})}Jd();window.addEventListener("seesound:view-reset-camera",()=>{Yd()});window.addEventListener("seesound:view-fit-camera",()=>{Lx()});window.addEventListener("seesound:view-clean-canvas",()=>{Pt.clear()});let Su=0,zi=0,tl="",An=null,Ws=null,Xs=[],qs=null,Xr=null,mr=[];function Pr(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function pa(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function Bx(n){const e=String(n||"").trim();return e?/\.ssp\.json$/i.test(e)?e.replace(/\.ssp\.json$/i,""):pa(e):""}function Ta(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function Vl(){var e,t;if(tl)return pa(tl);const n=String(((e=Re==null?void 0:Re.audioEl)==null?void 0:e.currentSrc)||((t=Re==null?void 0:Re.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return pa(r)}catch{}return"audio"}async function kx(n){const e=n==null?void 0:n.src;if(!e)return null;const t=await fetch(e);return t.ok?t.blob():null}function ni(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}${dr}`}async function nl(n={}){var c;const e=(n==null?void 0:n.transparent)===!0,t=Pr(Vl(),"audio"),i=Pr(Ta(),"preset"),r=e?`${t} - ${i} - no-bg.png`:`${t} - ${i}.png`,s=Math.max(1,Math.floor(Number(ee.canvasWidth)||Rt.domElement.width/Math.max(1,window.devicePixelRatio))),a=Math.max(1,Math.floor(Number(ee.canvasHeight)||Rt.domElement.height/Math.max(1,window.devicePixelRatio))),o=document.createElement("canvas"),l=new ld({canvas:o,antialias:!0,preserveDrawingBuffer:!0});try{const u=l.capabilities.maxTextureSize||8192,d=Math.min(s,u),h=Math.min(a,u),f=Math.max(1,Number(((c=Rt.getPixelRatio)==null?void 0:c.call(Rt))||window.devicePixelRatio||1)),g=Math.max(1,Math.floor(d/f)),_=Math.max(1,Math.floor(h/f));l.setPixelRatio(f),l.setSize(g,_,!1);let m=De.clone();De===Wt||m.isOrthographicCamera?(m=De.clone(),m.updateProjectionMatrix()):m.isPerspectiveCamera&&(m.aspect=d/Math.max(1,h),m.updateProjectionMatrix());const p=[];Yn.traverse(b=>{var R;(R=b==null?void 0:b.userData)!=null&&R.excludeFromPng&&b.visible&&(p.push(b),b.visible=!1)}),e?l.setClearColor(0,0):l.setClearColor(Pt.getBackgroundColor(),1),Pt.setViewportHeight(l.domElement.height),l.render(Yn,m);for(const b of p)b.visible=!0;const S=await new Promise(b=>o.toBlob(b,"image/png"));if(!S)throw new Error("PNG export failed (empty blob).");const v=document.createElement("a");v.href=URL.createObjectURL(S),v.download=r,document.body.appendChild(v),v.click(),v.remove(),URL.revokeObjectURL(v.href),(d!==s||h!==a)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:s,h:a},exported:{w:d,h},maxTextureSize:u})}finally{Pt.setViewportHeight(Rt.domElement.height),l.dispose()}}async function zx(){await nl({transparent:!0})}function Vx(){const n=Pr(Vl(),"audio"),e=Pr(Ta(),"preset"),t=new Uv,i=[];Yn.traverse(r=>{var s;(s=r==null?void 0:r.userData)!=null&&s.excludeFromObj&&r.visible&&(i.push(r),r.visible=!1)});try{const r=t.parse(Yn),s=new Blob([r],{type:"text/plain;charset=utf-8"}),a=URL.createObjectURL(s),o=document.createElement("a");o.href=a,o.download=`${n} - ${e}.obj`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(a)}finally{for(const r of i)r.visible=!0}}function Mu(n,e){n.dispatchEvent(new CustomEvent("player:paintall-state",{detail:{running:e},bubbles:!1}))}function ls(n,e){n.dispatchEvent(new CustomEvent("player:recordvideo-state",{detail:{running:e},bubbles:!1}))}async function Hx(n){var s;if(!n)return{track:null,cleanup:null};try{if(typeof n.captureStream=="function"){const o=n.captureStream().getAudioTracks()[0]||null;if(o)return{track:o,cleanup:null}}}catch{}Re.init(n),((s=Re.ctx)==null?void 0:s.state)==="suspended"&&await Re.ctx.resume();const e=Re.source||Re.streamSource;if(!e||!Re.ctx)return{track:null,cleanup:null};const t=Re.ctx.createMediaStreamDestination();return e.connect(t),{track:t.stream.getAudioTracks()[0]||null,cleanup:()=>{try{e.disconnect(t)}catch{}try{t.disconnect()}catch{}}}}async function yu(n,e){if(An||!(e!=null&&e.src))return;if(typeof MediaRecorder>"u"||typeof Rr.captureStream!="function"){alert("Video recording is not supported in this browser.");return}mr=[],Yn.traverse(c=>{var u;(u=c==null?void 0:c.userData)!=null&&u.excludeFromVideo&&c.visible&&(mr.push(c),c.visible=!1)});const t=Rr.captureStream(60),i=new MediaStream;for(const c of t.getVideoTracks())i.addTrack(c);const{track:r,cleanup:s}=await Hx(e);qs=s,r&&i.addTrack(r);const o=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(c=>{var u;return(u=MediaRecorder.isTypeSupported)==null?void 0:u.call(MediaRecorder,c)})||"",l=new MediaRecorder(i,o?{mimeType:o}:void 0);if(Xs=[],Ws=i,An=l,l.ondataavailable=c=>{c.data&&c.data.size>0&&Xs.push(c.data)},l.onstop=()=>{const c=Xs;Xs=[];const u=new Blob(c,{type:l.mimeType||"video/webm"});if(u.size>0){const d=Pr(Vl(),"audio"),h=Pr(Ta(),"preset"),f=document.createElement("a");f.href=URL.createObjectURL(u),f.download=`${d} - ${h}.webm`,document.body.appendChild(f),f.click(),f.remove(),URL.revokeObjectURL(f.href)}if(Ws)for(const d of Ws.getTracks())try{d.stop()}catch{}if(Ws=null,typeof qs=="function")try{qs()}catch{}qs=null,Xr&&(e.removeEventListener("ended",Xr),Xr=null);for(const d of mr)d.visible=!0;mr=[],An=null,ls(n,!1)},e.paused)try{await e.play()}catch{}Xr=()=>{An&&An.state!=="inactive"&&An.stop()},e.addEventListener("ended",Xr,{once:!0}),l.start(200),ls(n,!0)}function Eu(n){if(An)try{An.state!=="inactive"&&An.stop()}catch{for(const e of mr)e.visible=!0;mr=[],An=null,ls(n,!1)}}async function Gx(n,e){var l,c,u,d,h,f,g,_,m;if(!e||!(e.duration>0)&&(await new Promise(p=>{if(e.duration>0){p();return}const S=()=>{v(),p()},v=()=>{e.removeEventListener("loadedmetadata",S),e.removeEventListener("canplay",S),e.removeEventListener("error",S)};e.addEventListener("loadedmetadata",S,{once:!0}),e.addEventListener("canplay",S,{once:!0}),e.addEventListener("error",S,{once:!0})}),!(e.duration>0)))return;const t=!e.paused&&!e.ended;t&&e.pause();const i=++zi,r=await kx(e),s=r?URL.createObjectURL(r):e.currentSrc||e.src;if(!s)return;const a=new Audio;a.crossOrigin="anonymous",a.src=s,a.preload="auto",a.currentTime=0,a.muted=!0,a.volume=0,typeof a.preservesPitch=="boolean"&&(a.preservesPitch=!1),a.playbackRate=16,a.style.display="none",document.body.appendChild(a);const o=new Kd;o.setRuleInputUsage((l=Pt.getRuleCompileState())==null?void 0:l.requiredInputsByTarget),Mu(n,!0);try{Pt.clear(),await new Promise((E,T)=>{const A=()=>{x(),E()},C=()=>{x(),T(new Error("Paint-all audio metadata failed to load."))},x=()=>{a.removeEventListener("loadedmetadata",A),a.removeEventListener("canplay",A),a.removeEventListener("error",C)};a.addEventListener("loadedmetadata",A,{once:!0}),a.addEventListener("canplay",A,{once:!0}),a.addEventListener("error",C,{once:!0}),a.load()}),o.init(a),((c=o.ctx)==null?void 0:c.state)==="suspended"&&await o.ctx.resume(),await a.play();const p=performance.now(),S=3*60*1e3;let v=-1,b=0,R=0;for(;i===zi&&!a.ended;){if(performance.now()-p>S){console.warn("[PaintAll] Aborting due to timeout.");break}await new Promise(L=>requestAnimationFrame(L)),o.update();const E=Rt.domElement.width/window.devicePixelRatio,T=Rt.domElement.height/window.devicePixelRatio,A=Qd(),C={...ee,persistMode:1,cameraState:{x:De.position.x,y:De.position.y,z:De.position.z,zoom:De.zoom,targetX:gt.x,targetY:gt.y,targetZ:gt.z,angleOfView:Vt.fov},cameraCanvasWidthUnits:A.w,cameraCanvasHeightUnits:A.h};Pt.update(o,C,E,T),Zd(Pt.getCameraOutput());const x=Number(a.currentTime)||0;if(x>v+1e-4?(v=x,b=0):b++,a.paused&&!a.ended)try{await a.play()}catch{break}if(b>120){const L=Number(a.duration)||0;if(L>0&&x>=Math.max(0,L-.25)){a.currentTime=L;break}if(L>0&&R<12){const W=Math.max(.15,L/240);a.currentTime=Math.min(L,x+W),R++,b=0;continue}console.warn("[PaintAll] Aborting due to persistent playback stall.");break}}}finally{a.pause(),a.src="",a.remove(),r&&URL.revokeObjectURL(s);try{(u=o.source)==null||u.disconnect()}catch{}try{(d=o.streamSource)==null||d.disconnect()}catch{}try{(h=o.splitter)==null||h.disconnect()}catch{}try{(f=o.analyserL)==null||f.disconnect()}catch{}try{(g=o.analyserR)==null||g.disconnect()}catch{}try{(_=o.analyser)==null||_.disconnect()}catch{}try{await((m=o.ctx)==null?void 0:m.close())}catch{}if(Mu(n,!1),t&&i===zi)try{await e.play()}catch{}}}function Qd(){let n=0,e=0;if(De.isOrthographicCamera)n=Math.abs((De.right-De.left)/Math.max(.01,De.zoom)),e=Math.abs((De.top-De.bottom)/Math.max(.01,De.zoom));else{const r=Math.max(.001,De.position.distanceTo(gt)),s=hl.degToRad(De.fov);e=2*Math.tan(s*.5)*r/Math.max(.01,De.zoom),n=e*De.aspect}const t=n*.5,i=e*.5;return{w:n,h:e,left:gt.x-t,right:gt.x+t,top:gt.y+i,bottom:gt.y-i}}function eh(){var t,i,r,s,a,o,l,c,u;requestAnimationFrame(eh),Su++,Re.update();const n=!!(Re.audioEl&&!Re.audioEl.paused&&!Re.audioEl.ended);if(n&&!Re.analyser&&Re.audioEl&&Re.init(Re.audioEl),n){const d=Rt.domElement.width/window.devicePixelRatio,h=Rt.domElement.height/window.devicePixelRatio,f=Qd(),g={...ee,cameraState:{x:De.position.x,y:De.position.y,z:De.position.z,zoom:De.zoom,targetX:gt.x,targetY:gt.y,targetZ:gt.z,angleOfView:Vt.fov},cameraCanvasWidthUnits:f.w,cameraCanvasHeightUnits:f.h};Pt.update(Re,g,d,h),Zd(Pt.getCameraOutput());const _=((t=Re.getBinMagnitude)==null?void 0:t.call(Re))||null,m=((i=Re.getBinFlux)==null?void 0:i.call(Re))||null,p=((r=Re.getBinPhaseDeviation)==null?void 0:r.call(Re))||null,S=((s=Re.getBinPhase)==null?void 0:s.call(Re))||null,v=((a=Re.getBinAttackTime)==null?void 0:a.call(Re))||null,b=((o=Re.getBinEnvelope)==null?void 0:o.call(Re))||null,R=Re.peakFreq??0,E=(l=Re.ctx)!=null&&l.sampleRate?Re.ctx.sampleRate*.5:22050,T=kn(Re.rmsDbfs,ee.globalRmsNormMin??-60,ee.globalRmsNormMax??0),A=kn(Re.spectralCentroidHz,ee.spectralCentroidNormMin??150,ee.spectralCentroidNormMax??8e3),C=kn(Re.spectralFluxAU,ee.globalSpectralFluxNormMin??0,ee.globalSpectralFluxNormMax??100),x=kn(Re.spectralFlatnessRatio,ee.spectralFlatnessNormMin??0,ee.spectralFlatnessNormMax??1),L=(G,q)=>{if(!G||!G.length)return 0;let U=0;for(let X=0;X<G.length;X++)U+=q(G[X]);return U/G.length},W=L(_,G=>kn(G,ee.binMagnitudeNormMin??-70,ee.binMagnitudeNormMax??0)),j=L(m,G=>kn(G,ee.binFluxNormMin??0,ee.binFluxNormMax??.5)),Q=L(p,G=>kn(G,ee.binPhaseDeviationNormMin??0,ee.binPhaseDeviationNormMax??Math.PI)),Z=L(S,G=>kn(G,-Math.PI,Math.PI)),K=L(v,G=>kn(G,ee.binAttackTimeNormMin??5,ee.binAttackTimeNormMax??500)),ce=L(b,G=>kn(G,0,3));window.dispatchEvent(new CustomEvent("seesound:rule-probe",{detail:{inputs:{amplitude:T,globalRmsEnergy:T,frequencyHz:R,normFreq:Math.max(0,Math.min(1,R/Math.max(1e-6,E))),bass:Re.bass??0,mid:Re.mid??0,high:Re.high??0,peakFreq:R,pan:Re.pan??0,spectralCentroid:A,spectralFlux:C,spectralFlatness:x,inharmonicity:Re.inharmonicity??0,peakAmplitude:Re.peakAmplitude??0,zeroCrossingRate:Re.zeroCrossingRate??0,spectralRolloff:Re.spectralRolloff??0,spectralSpread:Re.spectralSpread??0,spectralSkewness:Re.spectralSkewness??0,chromagram:Re.chromagram??0,binMagnitude:W,binPhase:Z,binFlux:j,binPhaseDeviation:Q,binAttackTime:K,binEnvelope:ce,binEnvelopeState:ce,binRMSEnergy:T,time:((c=Re.audioEl)==null?void 0:c.currentTime)??0,deltaTime:1/60,canvasWidthPx:d,canvasHeightPx:h,audioLengthSec:((u=Re.audioEl)==null?void 0:u.duration)??0}}}))}const e=Pt.getBackgroundColor();Rt.setClearColor(e,1),Pt.setViewportHeight(Rt.domElement.height),ps.render(),Su%6===0&&window.dispatchEvent(new CustomEvent("seesound:camera-state",{detail:{position:{x:De.position.x,y:De.position.y,z:De.position.z},target:{x:gt.x,y:gt.y,z:gt.z},fov:Vt.fov,projection:ee.cameraProjection==="perspective"?"perspective":"axonometric"}}))}eh();{const n=document.getElementById("audio-player"),{audioEl:e}=gx(n);Re.audioEl=e;let t=null;e.addEventListener("play",async()=>{var E;Re.init(e),((E=Re.ctx)==null?void 0:E.state)==="suspended"&&await Re.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var E;zi++,Re.init(e),((E=Re.ctx)==null?void 0:E.state)==="suspended"&&await Re.ctx.resume()}),n.addEventListener("player:play",()=>{zi++}),n.addEventListener("player:pause",()=>{zi++}),n.addEventListener("player:stop",()=>{zi++}),n.addEventListener("player:savepng",async()=>{await nl()}),n.addEventListener("player:paintall",async()=>{try{await Gx(n,e)}catch(E){console.warn("[PaintAll] failed:",E),alert("Paint-all failed before completion. Check console for details.")}}),n.addEventListener("player:recordvideo-toggle",async()=>{if(An){Eu(n);return}try{await yu(n,e)}catch(E){console.warn("[Recorder] start failed:",E),alert("Failed to start recording."),ls(n,!1)}}),window.addEventListener("seesound:export-image",async()=>{await nl()}),window.addEventListener("seesound:export-image-no-bg",async()=>{await zx()}),window.addEventListener("seesound:export-video-toggle",async()=>{if(An){Eu(n);return}try{await yu(n,e)}catch(E){console.warn("[Recorder] start failed:",E),alert("Failed to start recording."),ls(n,!1)}}),window.addEventListener("seesound:export-obj",()=>{Vx()}),n.addEventListener("player:playbackrate",E=>{var A;const T=Number((A=E==null?void 0:E.detail)==null?void 0:A.rate);Number.isFinite(T)&&(e.playbackRate=Math.max(.1,Math.min(16,T)))}),n.addEventListener("player:fileloaded",E=>{var A;const T=(A=E==null?void 0:E.detail)==null?void 0:A.file;t=T instanceof File?T:null,tl=(t==null?void 0:t.name)||""});let i=null,r="",s=null,a=!1,o=[];const l=E=>{if(!Array.isArray(E))return[];const T=[];for(const A of E){const C=String((A==null?void 0:A.name)||"").trim(),x=A==null?void 0:A.params;!C||!x||typeof x!="object"||T.push({name:C,params:x})}return T},c=({name:E,params:T})=>{const A=String(E||"").trim();if(!A||!T||typeof T!="object")return!1;const C=l(o),x=C.findIndex(W=>W.name===A),L={name:A,params:T};return x>=0?C[x]=L:C.push(L),o=C,!0},u=()=>{window.dispatchEvent(new CustomEvent("seesound:project-file-state",{detail:{fileName:String(r||"").trim(),projectName:Bx(r)}}))},d=async()=>{(await yd()).filter(A=>!String(A||"").startsWith("rule__")).length>0||(await la("default",oa()),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))},h=async E=>{if(Array.isArray(E)){for(const T of E){const A=String((T==null?void 0:T.name)||"").trim(),C=T==null?void 0:T.params;!A||!C||typeof C!="object"||await la(A,C)}window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}},f=async(E,T)=>{const A=await E.createWritable();await A.write(JSON.stringify(T,null,2)),await A.close()},g=async()=>{const E=oa(),T=Ta();return _x({params:E,presetName:T,presetLibrary:l(o),projectName:pa(r||ni())})},_=async({forceDownload:E=!1}={})=>{try{const T=await g();if(!E&&i){await f(i,T),window.dispatchEvent(new CustomEvent("seesound:project-autosaved",{detail:{fileName:r||ni()}})),u();return}xx(T,ni())}catch(T){console.warn("[Project] save failed:",T)}},m=()=>{!i||a||(s&&clearTimeout(s),s=setTimeout(async()=>{s=null,await _({forceDownload:!1})},450))},p=async E=>{try{a=!0,E.params&&typeof E.params=="object"&&Gt(E.params),o=l(E==null?void 0:E.presetLibrary),Array.isArray(E.presetLibrary)&&await h(E.presetLibrary),await d(),window.dispatchEvent(new CustomEvent("seesound:project-loaded",{detail:{fileName:r,presetName:String((E==null?void 0:E.presetName)||"")}}))}catch(T){console.warn("[Project] load failed:",T)}finally{a=!1}},S=async()=>{if(typeof window.showOpenFilePicker!="function")return!1;try{const[E]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Project",accept:{"application/json":[dr,".json"]}}]});if(!E)return!1;const T=await E.getFile(),A=await T.text(),C=xu(A);return i=E,r=String(T.name||"").trim(),await p(C),u(),!0}catch{return!1}},v=async()=>new Promise(E=>{const T=document.createElement("input");T.type="file",T.accept=`${dr},.json`,T.style.display="none",T.addEventListener("change",async()=>{var A;try{const C=(A=T.files)==null?void 0:A[0];if(!C){E(!1);return}const x=await C.text(),L=xu(x);i=null,r=String(C.name||"").trim(),await p(L),u(),E(!0)}catch{E(!1)}finally{T.remove()}},{once:!0}),document.body.appendChild(T),T.click()}),b=async(E="",T=!0)=>{if(typeof window.showSaveFilePicker!="function")return!1;try{const A=String(E||"").trim()||ni(),C=await window.showSaveFilePicker({suggestedName:A,types:[{description:"SEESOUND Project",accept:{"application/json":[dr,".json"]}}]});return C?(T&&(bd(),await d(),o=[]),i=C,r=String(C.name||A).trim(),await _({forceDownload:!1}),u(),!0):!1}catch{return!1}},R=async(E="")=>{if(typeof window.showSaveFilePicker!="function")return!1;try{const T=String(E||"").trim()||ni(),A=await window.showSaveFilePicker({suggestedName:T,types:[{description:"SEESOUND Project",accept:{"application/json":[dr,".json"]}}]});return A?(i=A,r=String(A.name||T).trim(),await _({forceDownload:!1}),u(),!0):!1}catch{return!1}};n.addEventListener("player:saveproject",async()=>{if(i){await _({forceDownload:!1});return}await R(ni())||await _({forceDownload:!0})}),n.addEventListener("player:loadproject",async E=>{var T;await p(((T=E==null?void 0:E.detail)==null?void 0:T.payload)||{})}),window.addEventListener("seesound:project-save-request",async()=>{if(i){await _({forceDownload:!1});return}await R(ni())||await _({forceDownload:!0})}),window.addEventListener("seesound:project-save-as-request",async()=>{const E=r?`${r}${dr}`:ni();await R(E)||await _({forceDownload:!0})}),window.addEventListener("seesound:project-load-request",async E=>{const T=(E==null?void 0:E.detail)||{},A=String(T.fileName||"").trim();A&&(r=A,u()),await p(T.payload||{}),!i&&typeof window.showSaveFilePicker=="function"&&window.confirm("Attach this project to an autosave file now?")&&await b(String(T.fileName||ni()),!1)}),window.addEventListener("seesound:project-open-request",async()=>{await S()||await v()}),window.addEventListener("seesound:project-new-request",async()=>{await b()}),window.addEventListener("seesound:preset-library-changed",()=>{m()}),window.addEventListener("seesound:project-preset-save-request",async E=>{var C,x;const T=String(((C=E==null?void 0:E.detail)==null?void 0:C.name)||"").trim(),A=(x=E==null?void 0:E.detail)==null?void 0:x.params;c({name:T,params:A})&&(m(),window.dispatchEvent(new CustomEvent("seesound:project-preset-library-changed")))}),Ma((E,T)=>{!T||T==="*"||a||((T==="originSignEnabled"||T==="coordinateGuidesEnabled")&&Wd(),m())}),u()}let yi=null,il=!1;yi=vx({wrapper:os,column:jn,onResize(n,e){if(Bl(n,e),Hl(n,e),!il){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(ee.canvasWidth)!==t||Number(ee.canvasHeight)!==i)&&Gt({canvasWidth:t,canvasHeight:i})}}});function Hl(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(ee.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function Wx(n){const e=n instanceof Element?n:null;return e?!!e.closest('input,textarea,select,[contenteditable="true"]'):!1}window.addEventListener("keydown",n=>{if(n.defaultPrevented||!(n.ctrlKey||n.metaKey)||n.altKey||Wx(n.target))return;const e=String(n.key||"").toLowerCase();if(e==="z"&&!n.shiftKey){if(!o_())return;n.preventDefault(),n.stopPropagation();return}if(e==="y"||e==="z"&&n.shiftKey){if(!l_())return;n.preventDefault(),n.stopPropagation()}});function th(){const e=Math.max(5,Math.min(400,Math.floor(Number(ee.canvasScale)||100)))/100;os.style.transformOrigin="center center",os.style.transform=`scale(${e})`}function nh(){var i;const n=((i=yi==null?void 0:yi.getSize)==null?void 0:i.call(yi))||{},e=Math.max(160,Math.floor(n.w||os.clientWidth||jn.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||os.clientHeight||jn.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function ih(){if(!yi)return;const n=nh(),e=Math.max(160,Math.floor(Number(ee.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(ee.canvasHeight)||n.h));if(e===n.w&&t===n.h){Hl(n.w,n.h);return}il=!0,yi.setSize(e,t),il=!1}ih();th();{const n=nh();(Number(ee.canvasWidth)!==n.w||Number(ee.canvasHeight)!==n.h)&&Gt({canvasWidth:n.w,canvasHeight:n.h}),Hl(n.w,n.h)}Ma((n,e)=>{if(e==="cameraProjection"&&Ul(),(e==="cameraProjection"||e==="cameraAxoPreset")&&Ol(),(e==="cameraProjection"||e==="cameraPosX"||e==="cameraPosY"||e==="cameraPosZ"||e==="cameraTargetX"||e==="cameraTargetY"||e==="cameraTargetZ"||e==="cameraAngleOfView")&&$d(),(e==="postProcessEnabled"||e==="bloomEnabled"||e==="bloomStrength"||e==="bloomRadius"||e==="bloomThreshold"||e==="bokehEnabled"||e==="bokehFocus"||e==="bokehAperture"||e==="bokehMaxBlur")&&qd(),(e==="canvasWidth"||e==="canvasHeight")&&ih(),e==="canvasScale"&&th(),e==="maxParticles"){const t=Math.max(4096,Math.floor(ee.maxParticles||4096));ee.maxParticles!==t&&(ee.maxParticles=t),Pt.setMaxParticles(t)}if(e==="fftSize"){const t=fa(ee.fftSize);if(ee.fftSize!==t){Gt({fftSize:t});return}Re.setFftSize(t)}if(e==="fluxWindowFrames"){const t=el(ee.fluxWindowFrames);if(ee.fluxWindowFrames!==t){Gt({fluxWindowFrames:t});return}Re.setFluxWindowFrames(t)}if(e==="ruleBlocks"){const t=Pt.onRulesChanged(ee.ruleBlocks??[]);Re.setRuleInputUsage(t==null?void 0:t.requiredInputsByTarget),zl(t==null?void 0:t.requiredInputsByTarget),window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});k1(document.getElementById("control-panel"));var Tu,Au;zl((Au=(Tu=Pt.getRuleCompileState)==null?void 0:Tu.call(Pt))==null?void 0:Au.requiredInputsByTarget);const wu=Array.isArray(ee.ruleBlocks)?ee.ruleBlocks.length:0,si=Pt.getRuleCompileState(),Cu=(si==null?void 0:si.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${aa} compile=${Cu} rules=${wu}`,{schemaVersion:aa,compileStatus:Cu,compileTimeMs:(si==null?void 0:si.compileTimeMs)??0,compileError:(si==null?void 0:si.compileError)??null,ruleCount:wu,debug:Qv});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
