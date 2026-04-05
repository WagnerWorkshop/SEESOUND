(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rl="171",rp=0,Gl=1,ap=2,Pu=1,sp=2,ii=3,Ci=0,mn=1,si=2,Wn=0,wi=1,yi=2,Wl=3,Xl=4,so=5,oi=100,op=101,lp=102,cp=103,up=104,dp=200,pp=201,hp=202,fp=203,Qr=204,ea=205,mp=206,gp=207,vp=208,bp=209,_p=210,xp=211,yp=212,Mp=213,Sp=214,oo=0,lo=1,co=2,_r=3,uo=4,po=5,ho=6,fo=7,Ru=0,wp=1,Ep=2,Ei=0,Cp=1,Tp=2,Ap=3,Pp=4,Rp=5,Np=6,Lp=7,Nu=300,xr=301,yr=302,mo=303,go=304,fs=306,vo=1e3,ki=1001,bo=1002,Mn=1003,Fp=1004,ma=1005,Hn=1006,As=1007,Bi=1008,di=1009,Lu=1010,Fu=1011,ta=1012,al=1013,Gi=1014,li=1015,Xn=1016,sl=1017,ol=1018,Mr=1020,Du=35902,Iu=1021,Uu=1022,Un=1023,Ou=1024,ku=1025,gr=1026,Sr=1027,Bu=1028,ll=1029,zu=1030,cl=1031,ul=1033,Ya=33776,ja=33777,$a=33778,Za=33779,_o=35840,xo=35841,yo=35842,Mo=35843,So=36196,wo=37492,Eo=37496,Co=37808,To=37809,Ao=37810,Po=37811,Ro=37812,No=37813,Lo=37814,Fo=37815,Do=37816,Io=37817,Uo=37818,Oo=37819,ko=37820,Bo=37821,Ka=36492,zo=36494,Vo=36495,Vu=36283,Ho=36284,Go=36285,Wo=36286,Dp=3200,Hu=3201,Ip=0,Up=1,Mi="",yn="srgb",wr="srgb-linear",ts="linear",wt="srgb",qi=7680,ql=519,Op=512,kp=513,Bp=514,Gu=515,zp=516,Vp=517,Hp=518,Gp=519,Yl=35044,Wp=35048,jl="300 es",ci=2e3,ns=2001;class Nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $l=1234567;const $r=Math.PI/180,na=180/Math.PI;function Lr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function dl(n,e){return(n%e+e)%e}function Xp(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function qp(n,e,t){return n!==e?(t-n)/(e-n):0}function Zr(n,e,t){return(1-t)*n+t*e}function Yp(n,e,t,i){return Zr(n,e,1-Math.exp(-t*i))}function jp(n,e=1){return e-Math.abs(dl(n,e*2)-e)}function $p(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Zp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function Kp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function Jp(n,e){return n+Math.random()*(e-n)}function Qp(n){return n*(.5-Math.random())}function eh(n){n!==void 0&&($l=n);let e=$l+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function th(n){return n*$r}function nh(n){return n*na}function ih(n){return(n&n-1)===0&&n!==0}function rh(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ah(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function sh(n,e,t,i,r){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),u=s((e+i)/2),d=a((e-i)/2),p=s((e-i)/2),h=a((i-e)/2),g=s((i-e)/2);switch(r){case"XYX":n.set(o*u,l*d,l*p,o*c);break;case"YZY":n.set(l*p,o*u,l*d,o*c);break;case"ZXZ":n.set(l*d,l*p,o*u,o*c);break;case"XZX":n.set(o*u,l*g,l*h,o*c);break;case"YXY":n.set(l*h,o*u,l*g,o*c);break;case"ZYZ":n.set(l*g,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function on(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pl={DEG2RAD:$r,RAD2DEG:na,generateUUID:Lr,clamp:mt,euclideanModulo:dl,mapLinear:Xp,inverseLerp:qp,lerp:Zr,damp:Yp,pingpong:jp,smoothstep:$p,smootherstep:Zp,randInt:Kp,randFloat:Jp,randFloatSpread:Qp,seededRandom:eh,degToRad:th,radToDeg:nh,isPowerOfTwo:ih,ceilPowerOfTwo:rh,floorPowerOfTwo:ah,setQuaternionFromProperEuler:sh,normalize:on,denormalize:cr};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*r+e.x,this.y=a*r+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,i,r,a,s,o,l,c){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c)}set(e,t,i,r,a,s,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=a,u[5]=l,u[6]=i,u[7]=s,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],p=i[2],h=i[5],g=i[8],b=r[0],m=r[3],f=r[6],y=r[1],v=r[4],x=r[7],R=r[2],w=r[5],T=r[8];return a[0]=s*b+o*y+l*R,a[3]=s*m+o*v+l*w,a[6]=s*f+o*x+l*T,a[1]=c*b+u*y+d*R,a[4]=c*m+u*v+d*w,a[7]=c*f+u*x+d*T,a[2]=p*b+h*y+g*R,a[5]=p*m+h*v+g*w,a[8]=p*f+h*x+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*s*u-t*o*c-i*a*u+i*o*l+r*a*c-r*s*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*s-o*c,p=o*l-u*a,h=c*a-s*l,g=t*d+i*p+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/g;return e[0]=d*b,e[1]=(r*c-u*i)*b,e[2]=(o*i-r*s)*b,e[3]=p*b,e[4]=(u*t-r*l)*b,e[5]=(r*a-o*t)*b,e[6]=h*b,e[7]=(i*l-c*t)*b,e[8]=(s*t-i*a)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-r*c,r*l,-r*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ps.makeScale(e,t)),this}rotate(e){return this.premultiply(Ps.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ps.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ps=new et;function Wu(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function is(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function oh(){const n=is("canvas");return n.style.display="block",n}const Zl={};function ur(n){n in Zl||(Zl[n]=!0,console.warn(n))}function lh(n,e,t){return new Promise(function(i,r){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function ch(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uh(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Kl=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dh(){const n={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===wt&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===wt&&(r.r=vr(r.r),r.g=vr(r.g),r.b=vr(r.b))),r},fromWorkingColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},toWorkingColorSpace:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?ts:this.spaces[r].transfer},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[wr]:{primaries:e,whitePoint:i,transfer:ts,toXYZ:Kl,fromXYZ:Jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:wt,toXYZ:Kl,fromXYZ:Jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),n}const xt=dh();function ui(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function vr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Yi;class ph{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Yi===void 0&&(Yi=is("canvas")),Yi.width=e.width,Yi.height=e.height;const i=Yi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Yi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=is("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=ui(a[s]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ui(t[i]/255)*255):t[i]=ui(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hh=0;class Xu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=Lr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(Rs(r[s].image)):a.push(Rs(r[s]))}else a=Rs(r);i.url=a}return t||(e.images[this.uuid]=i),i}}function Rs(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ph.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fh=0;class gn extends Nr{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,i=ki,r=ki,a=Hn,s=Bi,o=Un,l=di,c=gn.DEFAULT_ANISOTROPY,u=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fh++}),this.uuid=Lr(),this.name="",this.source=new Xu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Nu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case ki:e.x=e.x<0?0:1;break;case bo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case ki:e.y=e.y<0?0:1;break;case bo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Nu;gn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,a;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],h=l[5],g=l[9],b=l[2],m=l[6],f=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,x=(h+1)/2,R=(f+1)/2,w=(u+p)/4,T=(d+b)/4,A=(g+m)/4;return v>x&&v>R?v<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(v),r=w/i,a=T/i):x>R?x<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(x),i=w/r,a=A/r):R<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(R),i=T/a,r=A/a),this.set(i,r,a,t),this}let y=Math.sqrt((m-g)*(m-g)+(d-b)*(d-b)+(p-u)*(p-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-b)/y,this.z=(p-u)/y,this.w=Math.acos((c+h+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mh extends Nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new gn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends mh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class qu extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gh extends gn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ca{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,a,s,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const p=a[s+0],h=a[s+1],g=a[s+2],b=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=h,e[t+2]=g,e[t+3]=b;return}if(d!==b||l!==p||c!==h||u!==g){let m=1-o;const f=l*p+c*h+u*g+d*b,y=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const R=Math.sqrt(v),w=Math.atan2(R,f*y);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const x=o*y;if(l=l*m+p*x,c=c*m+h*x,u=u*m+g*x,d=d*m+b*x,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=R,c*=R,u*=R,d*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,a,s){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=a[s],p=a[s+1],h=a[s+2],g=a[s+3];return e[t]=o*g+u*d+l*h-c*p,e[t+1]=l*g+u*p+c*d-o*h,e[t+2]=c*g+u*h+o*p-l*d,e[t+3]=u*g-o*d-l*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(a/2),p=l(i/2),h=l(r/2),g=l(a/2);switch(s){case"XYZ":this._x=p*u*d+c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d-p*h*g;break;case"YXZ":this._x=p*u*d+c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d+p*h*g;break;case"ZXY":this._x=p*u*d-c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d-p*h*g;break;case"ZYX":this._x=p*u*d-c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d+p*h*g;break;case"YZX":this._x=p*u*d+c*h*g,this._y=c*h*d+p*u*g,this._z=c*u*g-p*h*d,this._w=c*u*d-p*h*g;break;case"XZY":this._x=p*u*d-c*h*g,this._y=c*h*d-p*u*g,this._z=c*u*g+p*h*d,this._w=c*u*d+p*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=i+o+d;if(p>0){const h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(u-l)*h,this._y=(a-c)*h,this._z=(s-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+s)/h,this._z=(a+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(a-c)/h,this._x=(r+s)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(s-r)/h,this._x=(a+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+s*o+r*c-a*l,this._y=r*u+s*l+a*o-i*c,this._z=a*u+s*c+i*l-r*o,this._w=s*u-i*o-r*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=r,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*i+t*this._x,this._y=h*r+t*this._y,this._z=h*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=s*d+this._w*p,this._x=i*d+this._x*p,this._y=r*d+this._y*p,this._z=a*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,i=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*r,this.y=a[1]*t+a[4]*i+a[7]*r,this.z=a[2]*t+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*r-o*i),u=2*(o*t-a*r),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*u,this.y=i+l*u+o*c-a*d,this.z=r+l*d+a*u-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r,this.y=a[1]*t+a[5]*i+a[9]*r,this.z=a[2]*t+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(mt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=r*l-a*o,this.y=a*s-i*l,this.z=i*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new H,Ql=new ca;class ua{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Nn):Nn.fromBufferAttribute(a,s),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ga.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ga.copy(i.boundingBox)),ga.applyMatrix4(e.matrixWorld),this.union(ga)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(kr),va.subVectors(this.max,kr),ji.subVectors(e.a,kr),$i.subVectors(e.b,kr),Zi.subVectors(e.c,kr),hi.subVectors($i,ji),fi.subVectors(Zi,$i),Ai.subVectors(ji,Zi);let t=[0,-hi.z,hi.y,0,-fi.z,fi.y,0,-Ai.z,Ai.y,hi.z,0,-hi.x,fi.z,0,-fi.x,Ai.z,0,-Ai.x,-hi.y,hi.x,0,-fi.y,fi.x,0,-Ai.y,Ai.x,0];return!Ls(t,ji,$i,Zi,va)||(t=[1,0,0,0,1,0,0,0,1],!Ls(t,ji,$i,Zi,va))?!1:(ba.crossVectors(hi,fi),t=[ba.x,ba.y,ba.z],Ls(t,ji,$i,Zi,va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Kn=[new H,new H,new H,new H,new H,new H,new H,new H],Nn=new H,ga=new ua,ji=new H,$i=new H,Zi=new H,hi=new H,fi=new H,Ai=new H,kr=new H,va=new H,ba=new H,Pi=new H;function Ls(n,e,t,i,r){for(let a=0,s=n.length-3;a<=s;a+=3){Pi.fromArray(n,a);const o=r.x*Math.abs(Pi.x)+r.y*Math.abs(Pi.y)+r.z*Math.abs(Pi.z),l=e.dot(Pi),c=t.dot(Pi),u=i.dot(Pi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const vh=new ua,Br=new H,Fs=new H;class da{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vh.setFromPoints(e).getCenter(i);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Br.subVectors(e,this.center);const t=Br.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Br,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Br.copy(e.center).add(Fs)),this.expandByPoint(Br.copy(e.center).sub(Fs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new H,Ds=new H,_a=new H,mi=new H,Is=new H,xa=new H,Us=new H;class hl{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,t),Jn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ds.copy(e).add(t).multiplyScalar(.5),_a.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ds);const a=e.distanceTo(t)*.5,s=-this.direction.dot(_a),o=mi.dot(this.direction),l=-mi.dot(_a),c=mi.lengthSq(),u=Math.abs(1-s*s);let d,p,h,g;if(u>0)if(d=s*l-o,p=s*o-l,g=a*u,d>=0)if(p>=-g)if(p<=g){const b=1/u;d*=b,p*=b,h=d*(d+s*p+2*o)+p*(s*d+p+2*l)+c}else p=a,d=Math.max(0,-(s*p+o)),h=-d*d+p*(p+2*l)+c;else p=-a,d=Math.max(0,-(s*p+o)),h=-d*d+p*(p+2*l)+c;else p<=-g?(d=Math.max(0,-(-s*a+o)),p=d>0?-a:Math.min(Math.max(-a,-l),a),h=-d*d+p*(p+2*l)+c):p<=g?(d=0,p=Math.min(Math.max(-a,-l),a),h=p*(p+2*l)+c):(d=Math.max(0,-(s*a+o)),p=d>0?a:Math.min(Math.max(-a,-l),a),h=-d*d+p*(p+2*l)+c);else p=s>0?-a:a,d=Math.max(0,-(s*p+o)),h=-d*d+p*(p+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ds).addScaledVector(_a,p),h}intersectSphere(e,t){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,a,s,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(i=(e.min.x-p.x)*c,r=(e.max.x-p.x)*c):(i=(e.max.x-p.x)*c,r=(e.min.x-p.x)*c),u>=0?(a=(e.min.y-p.y)*u,s=(e.max.y-p.y)*u):(a=(e.max.y-p.y)*u,s=(e.min.y-p.y)*u),i>s||a>r||((a>i||isNaN(i))&&(i=a),(s<r||isNaN(r))&&(r=s),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,t,i,r,a){Is.subVectors(t,e),xa.subVectors(i,e),Us.crossVectors(Is,xa);let s=this.direction.dot(Us),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;mi.subVectors(this.origin,e);const l=o*this.direction.dot(xa.crossVectors(mi,xa));if(l<0)return null;const c=o*this.direction.dot(Is.cross(mi));if(c<0||l+c>s)return null;const u=-o*mi.dot(Us);return u<0?null:this.at(u/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(e,t,i,r,a,s,o,l,c,u,d,p,h,g,b,m){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,a,s,o,l,c,u,d,p,h,g,b,m)}set(e,t,i,r,a,s,o,l,c,u,d,p,h,g,b,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=a,f[5]=s,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=p,f[3]=h,f[7]=g,f[11]=b,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ki.setFromMatrixColumn(e,0).length(),a=1/Ki.setFromMatrixColumn(e,1).length(),s=1/Ki.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const p=s*u,h=s*d,g=o*u,b=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=h+g*c,t[5]=p-b*c,t[9]=-o*l,t[2]=b-p*c,t[6]=g+h*c,t[10]=s*l}else if(e.order==="YXZ"){const p=l*u,h=l*d,g=c*u,b=c*d;t[0]=p+b*o,t[4]=g*o-h,t[8]=s*c,t[1]=s*d,t[5]=s*u,t[9]=-o,t[2]=h*o-g,t[6]=b+p*o,t[10]=s*l}else if(e.order==="ZXY"){const p=l*u,h=l*d,g=c*u,b=c*d;t[0]=p-b*o,t[4]=-s*d,t[8]=g+h*o,t[1]=h+g*o,t[5]=s*u,t[9]=b-p*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const p=s*u,h=s*d,g=o*u,b=o*d;t[0]=l*u,t[4]=g*c-h,t[8]=p*c+b,t[1]=l*d,t[5]=b*c+p,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const p=s*l,h=s*c,g=o*l,b=o*c;t[0]=l*u,t[4]=b-p*d,t[8]=g*d+h,t[1]=d,t[5]=s*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*d+g,t[10]=p-b*d}else if(e.order==="XZY"){const p=s*l,h=s*c,g=o*l,b=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+b,t[5]=s*u,t[9]=h*d-g,t[2]=g*d-h,t[6]=o*u,t[10]=b*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bh,e,_h)}lookAt(e,t,i){const r=this.elements;return _n.subVectors(e,t),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),gi.crossVectors(i,_n),gi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),gi.crossVectors(i,_n)),gi.normalize(),ya.crossVectors(_n,gi),r[0]=gi.x,r[4]=ya.x,r[8]=_n.x,r[1]=gi.y,r[5]=ya.y,r[9]=_n.y,r[2]=gi.z,r[6]=ya.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],p=i[9],h=i[13],g=i[2],b=i[6],m=i[10],f=i[14],y=i[3],v=i[7],x=i[11],R=i[15],w=r[0],T=r[4],A=r[8],C=r[12],_=r[1],L=r[5],I=r[9],G=r[13],q=r[2],$=r[6],J=r[10],ue=r[14],W=r[3],de=r[7],j=r[11],te=r[15];return a[0]=s*w+o*_+l*q+c*W,a[4]=s*T+o*L+l*$+c*de,a[8]=s*A+o*I+l*J+c*j,a[12]=s*C+o*G+l*ue+c*te,a[1]=u*w+d*_+p*q+h*W,a[5]=u*T+d*L+p*$+h*de,a[9]=u*A+d*I+p*J+h*j,a[13]=u*C+d*G+p*ue+h*te,a[2]=g*w+b*_+m*q+f*W,a[6]=g*T+b*L+m*$+f*de,a[10]=g*A+b*I+m*J+f*j,a[14]=g*C+b*G+m*ue+f*te,a[3]=y*w+v*_+x*q+R*W,a[7]=y*T+v*L+x*$+R*de,a[11]=y*A+v*I+x*J+R*j,a[15]=y*C+v*G+x*ue+R*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],h=e[14],g=e[3],b=e[7],m=e[11],f=e[15];return g*(+a*l*d-r*c*d-a*o*p+i*c*p+r*o*h-i*l*h)+b*(+t*l*h-t*c*p+a*s*p-r*s*h+r*c*u-a*l*u)+m*(+t*c*d-t*o*h-a*s*d+i*s*h+a*o*u-i*c*u)+f*(-r*o*u-t*l*d+t*o*p+r*s*d-i*s*p+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],h=e[11],g=e[12],b=e[13],m=e[14],f=e[15],y=d*m*c-b*p*c+b*l*h-o*m*h-d*l*f+o*p*f,v=g*p*c-u*m*c-g*l*h+s*m*h+u*l*f-s*p*f,x=u*b*c-g*d*c+g*o*h-s*b*h-u*o*f+s*d*f,R=g*d*l-u*b*l-g*o*p+s*b*p+u*o*m-s*d*m,w=t*y+i*v+r*x+a*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=y*T,e[1]=(b*p*a-d*m*a-b*r*h+i*m*h+d*r*f-i*p*f)*T,e[2]=(o*m*a-b*l*a+b*r*c-i*m*c-o*r*f+i*l*f)*T,e[3]=(d*l*a-o*p*a-d*r*c+i*p*c+o*r*h-i*l*h)*T,e[4]=v*T,e[5]=(u*m*a-g*p*a+g*r*h-t*m*h-u*r*f+t*p*f)*T,e[6]=(g*l*a-s*m*a-g*r*c+t*m*c+s*r*f-t*l*f)*T,e[7]=(s*p*a-u*l*a+u*r*c-t*p*c-s*r*h+t*l*h)*T,e[8]=x*T,e[9]=(g*d*a-u*b*a-g*i*h+t*b*h+u*i*f-t*d*f)*T,e[10]=(s*b*a-g*o*a+g*i*c-t*b*c-s*i*f+t*o*f)*T,e[11]=(u*o*a-s*d*a-u*i*c+t*d*c+s*i*h-t*o*h)*T,e[12]=R*T,e[13]=(u*b*r-g*d*r+g*i*p-t*b*p-u*i*m+t*d*m)*T,e[14]=(g*o*r-s*b*r-g*i*l+t*b*l+s*i*m-t*o*m)*T,e[15]=(s*d*r-u*o*r+u*i*l-t*d*l-s*i*p+t*o*p)*T,this}scale(e){const t=this.elements,i=e.x,r=e.y,a=e.z;return t[0]*=i,t[4]*=r,t[8]*=a,t[1]*=i,t[5]*=r,t[9]*=a,t[2]*=i,t[6]*=r,t[10]*=a,t[3]*=i,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,u=a*o;return this.set(c*s+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*s,0,c*l-r*o,u*l+r*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,a,s){return this.set(1,i,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,u=s+s,d=o+o,p=a*c,h=a*u,g=a*d,b=s*u,m=s*d,f=o*d,y=l*c,v=l*u,x=l*d,R=i.x,w=i.y,T=i.z;return r[0]=(1-(b+f))*R,r[1]=(h+x)*R,r[2]=(g-v)*R,r[3]=0,r[4]=(h-x)*w,r[5]=(1-(p+f))*w,r[6]=(m+y)*w,r[7]=0,r[8]=(g+v)*T,r[9]=(m-y)*T,r[10]=(1-(p+b))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let a=Ki.set(r[0],r[1],r[2]).length();const s=Ki.set(r[4],r[5],r[6]).length(),o=Ki.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],Ln.copy(this);const c=1/a,u=1/s,d=1/o;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=u,Ln.elements[5]*=u,Ln.elements[6]*=u,Ln.elements[8]*=d,Ln.elements[9]*=d,Ln.elements[10]*=d,t.setFromRotationMatrix(Ln),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,r,a,s,o=ci){const l=this.elements,c=2*a/(t-e),u=2*a/(i-r),d=(t+e)/(t-e),p=(i+r)/(i-r);let h,g;if(o===ci)h=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===ns)h=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,a,s,o=ci){const l=this.elements,c=1/(t-e),u=1/(i-r),d=1/(s-a),p=(t+e)*c,h=(i+r)*u;let g,b;if(o===ci)g=(s+a)*d,b=-2*d;else if(o===ns)g=a*d,b=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=b,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ki=new H,Ln=new Ft,bh=new H(0,0,0),_h=new H(1,1,1),gi=new H,ya=new H,_n=new H,ec=new Ft,tc=new ca;class pi{constructor(e=0,t=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],p=r[6],h=r[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Yu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xh=0;const nc=new H,Ji=new ca,Qn=new Ft,Ma=new H,zr=new H,yh=new H,Mh=new ca,ic=new H(1,0,0),rc=new H(0,1,0),ac=new H(0,0,1),sc={type:"added"},Sh={type:"removed"},Qi={type:"childadded",child:null},Os={type:"childremoved",child:null};class un extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=Lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=un.DEFAULT_UP.clone();const e=new H,t=new pi,i=new ca,r=new H(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new et}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ma.copy(e):Ma.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(zr,Ma,this.up):Qn.lookAt(Ma,zr,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Ji.setFromRotationMatrix(Qn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Sh),Os.child=e,this.dispatchEvent(Os),Os.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const s=this.children[i].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,e,yh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),u=s(e.images),d=s(e.shapes),p=s(e.skeletons),h=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),p.length>0&&(i.skeletons=p),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function s(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}un.DEFAULT_UP=new H(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new H,ei=new H,ks=new H,ti=new H,er=new H,tr=new H,oc=new H,Bs=new H,zs=new H,Vs=new H,Hs=new It,Gs=new It,Ws=new It;class In{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Fn.subVectors(e,t),r.cross(Fn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,i,r,a){Fn.subVectors(r,t),ei.subVectors(i,t),ks.subVectors(e,t);const s=Fn.dot(Fn),o=Fn.dot(ei),l=Fn.dot(ks),c=ei.dot(ei),u=ei.dot(ks),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const p=1/d,h=(c*l-o*u)*p,g=(s*u-o*l)*p;return a.set(1-h-g,g,h)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,t,i,r,a,s,o,l){return this.getBarycoord(e,t,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,ti.x),l.addScaledVector(s,ti.y),l.addScaledVector(o,ti.z),l)}static getInterpolatedAttribute(e,t,i,r,a,s){return Hs.setScalar(0),Gs.setScalar(0),Ws.setScalar(0),Hs.fromBufferAttribute(e,t),Gs.fromBufferAttribute(e,i),Ws.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(Hs,a.x),s.addScaledVector(Gs,a.y),s.addScaledVector(Ws,a.z),s}static isFrontFacing(e,t,i,r){return Fn.subVectors(i,t),ei.subVectors(e,t),Fn.cross(ei).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Fn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return In.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,a){return In.getInterpolation(e,this.a,this.b,this.c,t,i,r,a)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,a=this.c;let s,o;er.subVectors(r,i),tr.subVectors(a,i),Bs.subVectors(e,i);const l=er.dot(Bs),c=tr.dot(Bs);if(l<=0&&c<=0)return t.copy(i);zs.subVectors(e,r);const u=er.dot(zs),d=tr.dot(zs);if(u>=0&&d<=u)return t.copy(r);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return s=l/(l-u),t.copy(i).addScaledVector(er,s);Vs.subVectors(e,a);const h=er.dot(Vs),g=tr.dot(Vs);if(g>=0&&h<=g)return t.copy(a);const b=h*c-l*g;if(b<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(tr,o);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return oc.subVectors(a,r),o=(d-u)/(d-u+(h-g)),t.copy(r).addScaledVector(oc,o);const f=1/(m+b+p);return s=b*f,o=p*f,t.copy(i).addScaledVector(er,s).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ju={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Sa={h:0,s:0,l:0};function Xs(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class rt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,xt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=xt.workingColorSpace){return this.r=e,this.g=t,this.b=i,xt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=xt.workingColorSpace){if(e=dl(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Xs(s,a,e+1/3),this.g=Xs(s,a,e),this.b=Xs(s,a,e-1/3)}return xt.toWorkingColorSpace(this,r),this}setStyle(e,t=yn){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yn){const i=ju[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ui(e.r),this.g=ui(e.g),this.b=ui(e.b),this}copyLinearToSRGB(e){return this.r=vr(e.r),this.g=vr(e.g),this.b=vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return xt.fromWorkingColorSpace(Qt.copy(this),e),Math.round(mt(Qt.r*255,0,255))*65536+Math.round(mt(Qt.g*255,0,255))*256+Math.round(mt(Qt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=xt.workingColorSpace){xt.fromWorkingColorSpace(Qt.copy(this),t);const i=Qt.r,r=Qt.g,a=Qt.b,s=Math.max(i,r,a),o=Math.min(i,r,a);let l,c;const u=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=u<=.5?d/(s+o):d/(2-s-o),s){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=xt.workingColorSpace){return xt.fromWorkingColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=yn){xt.fromWorkingColorSpace(Qt.copy(this),e);const t=Qt.r,i=Qt.g,r=Qt.b;return e!==yn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Sa);const i=Zr(vi.h,Sa.h,t),r=Zr(vi.s,Sa.s,t),a=Zr(vi.l,Sa.l,t);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*r,this.g=a[1]*t+a[4]*i+a[7]*r,this.b=a[2]*t+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new rt;rt.NAMES=ju;let wh=0;class Fr extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=Lr(),this.name="",this.type="Material",this.blending=wi,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qr,this.blendDst=ea,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=_r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(i.blending=this.blending),this.side!==Ci&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Qr&&(i.blendSrc=this.blendSrc),this.blendDst!==ea&&(i.blendDst=this.blendDst),this.blendEquation!==oi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==_r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fl extends Fr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Ru,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ot=new H,wa=new st;class Kt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yl,this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)wa.fromBufferAttribute(this,t),wa.applyMatrix3(e),this.setXY(t,wa.x,wa.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=cr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cr(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cr(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cr(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,a){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),r=on(r,this.array),a=on(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yl&&(e.usage=this.usage),e}}class $u extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zu extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class dn extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Eh=0;const En=new Ft,qs=new un,nr=new H,xn=new ua,Vr=new ua,Yt=new H;class vn extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wu(e)?Zu:$u)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new et().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,i){return En.makeTranslation(e,t,i),this.applyMatrix4(En),this}scale(e,t,i){return En.makeScale(e,t,i),this.applyMatrix4(En),this}lookAt(e){return qs.lookAt(e),qs.updateMatrix(),this.applyMatrix4(qs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];i.push(s.x,s.y,s.z||0)}this.setAttribute("position",new dn(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ua);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const a=t[i];xn.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Vr.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(xn.min,Vr.min),xn.expandByPoint(Yt),Yt.addVectors(xn.max,Vr.max),xn.expandByPoint(Yt)):(xn.expandByPoint(Vr.min),xn.expandByPoint(Vr.max))}xn.getCenter(i);let r=0;for(let a=0,s=e.count;a<s;a++)Yt.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Yt.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(e,c),Yt.add(nr)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let A=0;A<i.count;A++)o[A]=new H,l[A]=new H;const c=new H,u=new H,d=new H,p=new st,h=new st,g=new st,b=new H,m=new H;function f(A,C,_){c.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,_),p.fromBufferAttribute(a,A),h.fromBufferAttribute(a,C),g.fromBufferAttribute(a,_),u.sub(c),d.sub(c),h.sub(p),g.sub(p);const L=1/(h.x*g.y-g.x*h.y);isFinite(L)&&(b.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(L),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(L),o[A].add(b),o[C].add(b),o[_].add(b),l[A].add(m),l[C].add(m),l[_].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,C=y.length;A<C;++A){const _=y[A],L=_.start,I=_.count;for(let G=L,q=L+I;G<q;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const v=new H,x=new H,R=new H,w=new H;function T(A){R.fromBufferAttribute(r,A),w.copy(R);const C=o[A];v.copy(C),v.sub(R.multiplyScalar(R.dot(C))).normalize(),x.crossVectors(w,C);const L=x.dot(l[A])<0?-1:1;s.setXYZW(A,v.x,v.y,v.z,L)}for(let A=0,C=y.length;A<C;++A){const _=y[A],L=_.start,I=_.count;for(let G=L,q=L+I;G<q;G+=3)T(e.getX(G+0)),T(e.getX(G+1)),T(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,h=i.count;p<h;p++)i.setXYZ(p,0,0,0);const r=new H,a=new H,s=new H,o=new H,l=new H,c=new H,u=new H,d=new H;if(e)for(let p=0,h=e.count;p<h;p+=3){const g=e.getX(p+0),b=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,b),s.fromBufferAttribute(t,m),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(b,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let p=0,h=t.count;p<h;p+=3)r.fromBufferAttribute(t,p+0),a.fromBufferAttribute(t,p+1),s.fromBufferAttribute(t,p+2),u.subVectors(s,a),d.subVectors(r,a),u.cross(d),i.setXYZ(p+0,u.x,u.y,u.z),i.setXYZ(p+1,u.x,u.y,u.z),i.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let h=0,g=0;for(let b=0,m=l.length;b<m;b++){o.isInterleavedBufferAttribute?h=l[b]*o.data.stride+o.offset:h=l[b]*u;for(let f=0;f<u;f++)p[g++]=c[h++]}return new Kt(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],h=e(p,i);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const a=e.morphAttributes;for(const c in a){const u=[],d=a[c];for(let p=0,h=d.length;p<h;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,u=s.length;c<u;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new Ft,Ri=new hl,Ea=new da,cc=new H,Ca=new H,Ta=new H,Aa=new H,Ys=new H,Pa=new H,uc=new H,Ra=new H;class Gn extends un{constructor(e=new vn,t=new fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){Pa.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const u=o[l],d=a[l];u!==0&&(Ys.fromBufferAttribute(d,e),s?Pa.addScaledVector(Ys,u):Pa.addScaledVector(Ys.sub(t),u))}t.add(Pa)}return t}raycast(e,t){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(a),Ri.copy(e.ray).recast(e.near),!(Ea.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ea,cc)===null||Ri.origin.distanceToSquared(cc)>(e.far-e.near)**2))&&(lc.copy(a).invert(),Ri.copy(e.ray).applyMatrix4(lc),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,i){let r;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,u=a.attributes.uv1,d=a.attributes.normal,p=a.groups,h=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,b=p.length;g<b;g++){const m=p[g],f=s[m.materialIndex],y=Math.max(m.start,h.start),v=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let x=y,R=v;x<R;x+=3){const w=o.getX(x),T=o.getX(x+1),A=o.getX(x+2);r=Na(this,f,e,i,c,u,d,w,T,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),b=Math.min(o.count,h.start+h.count);for(let m=g,f=b;m<f;m+=3){const y=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);r=Na(this,s,e,i,c,u,d,y,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,b=p.length;g<b;g++){const m=p[g],f=s[m.materialIndex],y=Math.max(m.start,h.start),v=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let x=y,R=v;x<R;x+=3){const w=x,T=x+1,A=x+2;r=Na(this,f,e,i,c,u,d,w,T,A),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,h.start),b=Math.min(l.count,h.start+h.count);for(let m=g,f=b;m<f;m+=3){const y=m,v=m+1,x=m+2;r=Na(this,s,e,i,c,u,d,y,v,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ch(n,e,t,i,r,a,s,o){let l;if(e.side===mn?l=i.intersectTriangle(s,a,r,!0,o):l=i.intersectTriangle(r,a,s,e.side===Ci,o),l===null)return null;Ra.copy(o),Ra.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Ra);return c<t.near||c>t.far?null:{distance:c,point:Ra.clone(),object:n}}function Na(n,e,t,i,r,a,s,o,l,c){n.getVertexPosition(o,Ca),n.getVertexPosition(l,Ta),n.getVertexPosition(c,Aa);const u=Ch(n,e,t,i,Ca,Ta,Aa,uc);if(u){const d=new H;In.getBarycoord(uc,Ca,Ta,Aa,d),r&&(u.uv=In.getInterpolatedAttribute(r,o,l,c,d,new st)),a&&(u.uv1=In.getInterpolatedAttribute(a,o,l,c,d,new st)),s&&(u.normal=In.getInterpolatedAttribute(s,o,l,c,d,new H),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const p={a:o,b:l,c,normal:new H,materialIndex:0};In.getNormal(Ca,Ta,Aa,p.normal),u.face=p,u.barycoord=d}return u}class pa extends vn{constructor(e=1,t=1,i=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],u=[],d=[];let p=0,h=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,r,s,2),g("x","z","y",1,-1,e,i,-t,r,s,3),g("x","y","z",1,-1,e,t,i,r,a,4),g("x","y","z",-1,-1,e,t,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new dn(c,3)),this.setAttribute("normal",new dn(u,3)),this.setAttribute("uv",new dn(d,2));function g(b,m,f,y,v,x,R,w,T,A,C){const _=x/T,L=R/A,I=x/2,G=R/2,q=w/2,$=T+1,J=A+1;let ue=0,W=0;const de=new H;for(let j=0;j<J;j++){const te=j*L-G;for(let Ee=0;Ee<$;Ee++){const tt=Ee*_-I;de[b]=tt*y,de[m]=te*v,de[f]=q,c.push(de.x,de.y,de.z),de[b]=0,de[m]=0,de[f]=w>0?1:-1,u.push(de.x,de.y,de.z),d.push(Ee/T),d.push(1-j/A),ue+=1}}for(let j=0;j<A;j++)for(let te=0;te<T;te++){const Ee=p+te+$*j,tt=p+te+$*(j+1),ne=p+(te+1)+$*(j+1),fe=p+(te+1)+$*j;l.push(Ee,tt,fe),l.push(tt,ne,fe),W+=6}o.addGroup(h,W,C),h+=W,p+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Er(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=Er(n[t]);for(const r in i)e[r]=i[r]}return e}function Th(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ku(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:xt.workingColorSpace}const ia={clone:Er,merge:ln};var Ah=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Fr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ah,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Er(e.uniforms),this.uniformsGroups=Th(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Ju extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const bi=new H,dc=new st,pc=new st;class Tn extends Ju{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(bi.x,bi.y).multiplyScalar(-e/bi.z),bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(bi.x,bi.y).multiplyScalar(-e/bi.z)}getViewSize(e,t){return this.getViewBounds(e,dc,pc),t.subVectors(pc,dc)}setViewOffset(e,t,i,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($r*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*r/l,t-=s.offsetY*i/c,r*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ir=-90,rr=1;class Rh extends un{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(ir,rr,e,t);r.layers=this.layers,this.add(r);const a=new Tn(ir,rr,e,t);a.layers=this.layers,this.add(a);const s=new Tn(ir,rr,e,t);s.layers=this.layers,this.add(s);const o=new Tn(ir,rr,e,t);o.layers=this.layers,this.add(o);const l=new Tn(ir,rr,e,t);l.layers=this.layers,this.add(l);const c=new Tn(ir,rr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,a),e.setRenderTarget(i,1,r),e.render(t,s),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=b,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(d,p,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Qu extends gn{constructor(e,t,i,r,a,s,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,i,r,a,s,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Nh extends Pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Qu(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Hn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pa(5,5,5),a=new rn({name:"CubemapFromEquirect",uniforms:Er(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Wn});a.uniforms.tEquirect.value=t;const s=new Gn(r,a),o=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Hn),new Rh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,r){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,r);e.setRenderTarget(a)}}class Lh extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const js=new H,Fh=new H,Dh=new et;class Ii{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=js.subVectors(i,t).cross(Fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(js),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Dh.getNormalMatrix(e),r=this.coplanarPoint(js).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new da,La=new H;class ed{constructor(e=new Ii,t=new Ii,i=new Ii,r=new Ii,a=new Ii,s=new Ii){this.planes=[e,t,i,r,a,s]}set(e,t,i,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,r=e.elements,a=r[0],s=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],p=r[7],h=r[8],g=r[9],b=r[10],m=r[11],f=r[12],y=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-a,p-c,m-h,x-f).normalize(),i[1].setComponents(l+a,p+c,m+h,x+f).normalize(),i[2].setComponents(l+s,p+u,m+g,x+y).normalize(),i[3].setComponents(l-s,p-u,m-g,x-y).normalize(),i[4].setComponents(l-o,p-d,m-b,x-v).normalize(),t===ci)i[5].setComponents(l+o,p+d,m+b,x+v).normalize();else if(t===ns)i[5].setComponents(o,d,b,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(La.x=r.normal.x>0?e.max.x:e.min.x,La.y=r.normal.y>0?e.max.y:e.min.y,La.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(La)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ms extends Fr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rs=new H,as=new H,hc=new Ft,Hr=new hl,Fa=new da,$s=new H,fc=new H;class Ih extends un{constructor(e=new vn,t=new ms){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,a=t.count;r<a;r++)rs.fromBufferAttribute(t,r-1),as.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=rs.distanceTo(as);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(r),Fa.radius+=a,e.ray.intersectsSphere(Fa)===!1)return;hc.copy(r).invert(),Hr.copy(e.ray).applyMatrix4(hc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=i.index,p=i.attributes.position;if(u!==null){const h=Math.max(0,s.start),g=Math.min(u.count,s.start+s.count);for(let b=h,m=g-1;b<m;b+=c){const f=u.getX(b),y=u.getX(b+1),v=Da(this,e,Hr,l,f,y);v&&t.push(v)}if(this.isLineLoop){const b=u.getX(g-1),m=u.getX(h),f=Da(this,e,Hr,l,b,m);f&&t.push(f)}}else{const h=Math.max(0,s.start),g=Math.min(p.count,s.start+s.count);for(let b=h,m=g-1;b<m;b+=c){const f=Da(this,e,Hr,l,b,b+1);f&&t.push(f)}if(this.isLineLoop){const b=Da(this,e,Hr,l,g-1,h);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Da(n,e,t,i,r,a){const s=n.geometry.attributes.position;if(rs.fromBufferAttribute(s,r),as.fromBufferAttribute(s,a),t.distanceSqToSegment(rs,as,$s,fc)>i)return;$s.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo($s);if(!(l<e.near||l>e.far))return{distance:l,point:fc.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const mc=new H,gc=new H;class ml extends Ih{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,a=t.count;r<a;r+=2)mc.fromBufferAttribute(t,r),gc.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+mc.distanceTo(gc);e.setAttribute("lineDistance",new dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Uh extends Fr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vc=new Ft,Xo=new hl,Ia=new da,Ua=new H;class Oh extends un{constructor(e=new vn,t=new Uh){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Ia.radius+=a,e.ray.intersectsSphere(Ia)===!1)return;vc.copy(r).invert(),Xo.copy(e.ray).applyMatrix4(vc);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const p=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let g=p,b=h;g<b;g++){const m=c.getX(g);Ua.fromBufferAttribute(d,m),bc(Ua,m,l,r,e,t,this)}}else{const p=Math.max(0,s.start),h=Math.min(d.count,s.start+s.count);for(let g=p,b=h;g<b;g++)Ua.fromBufferAttribute(d,g),bc(Ua,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function bc(n,e,t,i,r,a,s){const o=Xo.distanceSqToPoint(n);if(o<t){const l=new H;Xo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class qr extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}}class td extends gn{constructor(e,t,i,r,a,s,o,l,c,u=gr){if(u!==gr&&u!==Sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===gr&&(i=Gi),i===void 0&&u===Sr&&(i=Mr),super(null,r,a,s,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Mn,this.minFilter=l!==void 0?l:Mn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gs extends vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,p=t/l,h=[],g=[],b=[],m=[];for(let f=0;f<u;f++){const y=f*p-s;for(let v=0;v<c;v++){const x=v*d-a;g.push(x,-y,0),b.push(0,0,1),m.push(v/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<o;y++){const v=y+c*f,x=y+c*(f+1),R=y+1+c*(f+1),w=y+1+c*f;h.push(v,x,w),h.push(x,R,w)}this.setIndex(h),this.setAttribute("position",new dn(g,3)),this.setAttribute("normal",new dn(b,3)),this.setAttribute("uv",new dn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.width,e.height,e.widthSegments,e.heightSegments)}}class nd extends Fr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Dp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kh extends Fr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gl extends Ju{constructor(e=-1,t=1,i=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Bh extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=_c();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function _c(){return performance.now()}class Vh extends ml{constructor(e=10,t=10,i=4473924,r=8947848){i=new rt(i),r=new rt(r);const a=t/2,s=e/t,o=e/2,l=[],c=[];for(let p=0,h=0,g=-o;p<=t;p++,g+=s){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const b=p===a?i:r;b.toArray(c,h),h+=3,b.toArray(c,h),h+=3,b.toArray(c,h),h+=3,b.toArray(c,h),h+=3}const u=new vn;u.setAttribute("position",new dn(l,3)),u.setAttribute("color",new dn(c,3));const d=new ms({vertexColors:!0,toneMapped:!1});super(u,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hh extends ml{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new vn;r.setAttribute("position",new dn(t,3)),r.setAttribute("color",new dn(i,3));const a=new ms({vertexColors:!0,toneMapped:!1});super(r,a),this.type="AxesHelper"}setColors(e,t,i){const r=new rt,a=this.geometry.attributes.color.array;return r.set(e),r.toArray(a,0),r.toArray(a,3),r.set(t),r.toArray(a,6),r.toArray(a,9),r.set(i),r.toArray(a,12),r.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function xc(n,e,t,i){const r=Gh(i);switch(t){case Iu:return n*e;case Ou:return n*e;case ku:return n*e*2;case Bu:return n*e/r.components*r.byteLength;case ll:return n*e/r.components*r.byteLength;case zu:return n*e*2/r.components*r.byteLength;case cl:return n*e*2/r.components*r.byteLength;case Uu:return n*e*3/r.components*r.byteLength;case Un:return n*e*4/r.components*r.byteLength;case ul:return n*e*4/r.components*r.byteLength;case Ya:case ja:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case $a:case Za:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case xo:case Mo:return Math.max(n,16)*Math.max(e,8)/4;case _o:case yo:return Math.max(n,8)*Math.max(e,8)/2;case So:case wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Co:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Po:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case No:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Fo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Do:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Io:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Uo:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Oo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ko:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Bo:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Ka:case zo:case Vo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Vu:case Ho:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Go:case Wo:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gh(n){switch(n){case di:case Lu:return{byteLength:1,components:1};case ta:case Fu:case Xn:return{byteLength:2,components:1};case sl:case ol:return{byteLength:2,components:4};case Gi:case al:case li:return{byteLength:4,components:1};case Du:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function id(){let n=null,e=!1,t=null,i=null;function r(a,s){t(a,s),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function Wh(n){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,p=n.createBuffer();n.bindBuffer(l,p),n.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=n.HALF_FLOAT:h=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=n.SHORT;else if(c instanceof Uint32Array)h=n.UNSIGNED_INT;else if(c instanceof Int32Array)h=n.INT;else if(c instanceof Int8Array)h=n.BYTE;else if(c instanceof Uint8Array)h=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let p=0;for(let h=1;h<d.length;h++){const g=d[p],b=d[h];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++p,d[p]=b)}d.length=p+1;for(let h=0,g=d.length;h<g;h++){const b=d[h];n.bufferSubData(c,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:a,update:s}}var Xh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,qh=`#ifdef USE_ALPHAHASH
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
#endif`,Yh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$h=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Zh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
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
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
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
#endif`,ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,sf=`#ifdef USE_BUMPMAP
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
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mf=`#define PI 3.141592653589793
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
} // validated`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vf=`vec3 transformedNormal = objectNormal;
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
#endif`,bf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
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
#endif`,kf=`#ifdef USE_ENVMAP
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
#endif`,Bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gf=`PhysicalMaterial material;
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
#endif`,Wf=`struct PhysicalMaterial {
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
}`,Xf=`
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
#endif`,qf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$f=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
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
#endif`,am=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sm=`#ifdef USE_MORPHNORMALS
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fm=`#ifdef USE_NORMALMAP
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
#endif`,bm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_m=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ym=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Mm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Sm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Em=`float roughnessFactor = roughness;
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
#endif`,Pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rm=`float getShadowMask() {
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
#endif`,Fm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bm=`#ifdef USE_TRANSMISSION
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ag=`#include <common>
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
}`,sg=`uniform vec3 diffuse;
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
}`,pg=`#define NORMAL
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
}`,hg=`#define PHONG
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
}`,fg=`#define PHONG
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
}`,bg=`#define TOON
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
}`,_g=`uniform float size;
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
}`,xg=`uniform vec3 diffuse;
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
}`,yg=`#include <common>
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
}`,Sg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Xh,alphahash_pars_fragment:qh,alphamap_fragment:Yh,alphamap_pars_fragment:jh,alphatest_fragment:$h,alphatest_pars_fragment:Zh,aomap_fragment:Kh,aomap_pars_fragment:Jh,batching_pars_vertex:Qh,batching_vertex:ef,begin_vertex:tf,beginnormal_vertex:nf,bsdfs:rf,iridescence_fragment:af,bumpmap_pars_fragment:sf,clipping_planes_fragment:of,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:pf,color_pars_vertex:hf,color_vertex:ff,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:vf,displacementmap_pars_vertex:bf,displacementmap_vertex:_f,emissivemap_fragment:xf,emissivemap_pars_fragment:yf,colorspace_fragment:Mf,colorspace_pars_fragment:Sf,envmap_fragment:wf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Cf,envmap_pars_vertex:Tf,envmap_physical_pars_fragment:kf,envmap_vertex:Af,fog_vertex:Pf,fog_pars_vertex:Rf,fog_fragment:Nf,fog_pars_fragment:Lf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Df,lights_lambert_fragment:If,lights_lambert_pars_fragment:Uf,lights_pars_begin:Of,lights_toon_fragment:Bf,lights_toon_pars_fragment:zf,lights_phong_fragment:Vf,lights_phong_pars_fragment:Hf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Wf,lights_fragment_begin:Xf,lights_fragment_maps:qf,lights_fragment_end:Yf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:$f,logdepthbuf_pars_vertex:Zf,logdepthbuf_vertex:Kf,map_fragment:Jf,map_pars_fragment:Qf,map_particle_fragment:em,map_particle_pars_fragment:tm,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:rm,morphcolor_vertex:am,morphnormal_vertex:sm,morphtarget_pars_vertex:om,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:um,normal_pars_fragment:dm,normal_pars_vertex:pm,normal_vertex:hm,normalmap_pars_fragment:fm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:bm,opaque_fragment:_m,packing:xm,premultiplied_alpha_fragment:ym,project_vertex:Mm,dithering_fragment:Sm,dithering_pars_fragment:wm,roughnessmap_fragment:Em,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Tm,shadowmap_pars_vertex:Am,shadowmap_vertex:Pm,shadowmask_pars_fragment:Rm,skinbase_vertex:Nm,skinning_pars_vertex:Lm,skinning_vertex:Fm,skinnormal_vertex:Dm,specularmap_fragment:Im,specularmap_pars_fragment:Um,tonemapping_fragment:Om,tonemapping_pars_fragment:km,transmission_fragment:Bm,transmission_pars_fragment:zm,uv_pars_fragment:Vm,uv_pars_vertex:Hm,uv_vertex:Gm,worldpos_vertex:Wm,background_vert:Xm,background_frag:qm,backgroundCube_vert:Ym,backgroundCube_frag:jm,cube_vert:$m,cube_frag:Zm,depth_vert:Km,depth_frag:Jm,distanceRGBA_vert:Qm,distanceRGBA_frag:eg,equirect_vert:tg,equirect_frag:ng,linedashed_vert:ig,linedashed_frag:rg,meshbasic_vert:ag,meshbasic_frag:sg,meshlambert_vert:og,meshlambert_frag:lg,meshmatcap_vert:cg,meshmatcap_frag:ug,meshnormal_vert:dg,meshnormal_frag:pg,meshphong_vert:hg,meshphong_frag:fg,meshphysical_vert:mg,meshphysical_frag:gg,meshtoon_vert:vg,meshtoon_frag:bg,points_vert:_g,points_frag:xg,shadow_vert:yg,shadow_frag:Mg,sprite_vert:Sg,sprite_frag:wg},we={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},Vn={basic:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:ln([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:ln([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new rt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:ln([we.points,we.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:ln([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:ln([we.common,we.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:ln([we.sprite,we.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:ln([we.common,we.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:ln([we.lights,we.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Vn.physical={uniforms:ln([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Oa={r:0,b:0,g:0},Li=new pi,Eg=new Ft;function Cg(n,e,t,i,r,a,s){const o=new rt(0);let l=a===!0?0:1,c,u,d=null,p=0,h=null;function g(v){let x=v.isScene===!0?v.background:null;return x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x)),x}function b(v){let x=!1;const R=g(v);R===null?f(o,l):R&&R.isColor&&(f(R,1),x=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(n.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(v,x){const R=g(x);R&&(R.isCubeTexture||R.mapping===fs)?(u===void 0&&(u=new Gn(new pa(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Er(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Li.copy(x.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Li)),u.material.toneMapped=xt.getTransfer(R.colorSpace)!==wt,(d!==R||p!==R.version||h!==n.toneMapping)&&(u.material.needsUpdate=!0,d=R,p=R.version,h=n.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(c===void 0&&(c=new Gn(new gs(2,2),new rn({name:"BackgroundMaterial",uniforms:Er(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=R,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=xt.getTransfer(R.colorSpace)!==wt,R.matrixAutoUpdate===!0&&R.updateMatrix(),c.material.uniforms.uvTransform.value.copy(R.matrix),(d!==R||p!==R.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,d=R,p=R.version,h=n.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function f(v,x){v.getRGB(Oa,Ku(n)),i.buffers.color.setClear(Oa.r,Oa.g,Oa.b,x,s)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(v,x=1){o.set(v),l=x,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,f(o,l)},render:b,addToRenderList:m,dispose:y}}function Tg(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=p(null);let a=r,s=!1;function o(_,L,I,G,q){let $=!1;const J=d(G,I,L);a!==J&&(a=J,c(a.object)),$=h(_,G,I,q),$&&g(_,G,I,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,x(_,L,I,G),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function c(_){return n.bindVertexArray(_)}function u(_){return n.deleteVertexArray(_)}function d(_,L,I){const G=I.wireframe===!0;let q=i[_.id];q===void 0&&(q={},i[_.id]=q);let $=q[L.id];$===void 0&&($={},q[L.id]=$);let J=$[G];return J===void 0&&(J=p(l()),$[G]=J),J}function p(_){const L=[],I=[],G=[];for(let q=0;q<t;q++)L[q]=0,I[q]=0,G[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:G,object:_,attributes:{},index:null}}function h(_,L,I,G){const q=a.attributes,$=L.attributes;let J=0;const ue=I.getAttributes();for(const W in ue)if(ue[W].location>=0){const j=q[W];let te=$[W];if(te===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(te=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(te=_.instanceColor)),j===void 0||j.attribute!==te||te&&j.data!==te.data)return!0;J++}return a.attributesNum!==J||a.index!==G}function g(_,L,I,G){const q={},$=L.attributes;let J=0;const ue=I.getAttributes();for(const W in ue)if(ue[W].location>=0){let j=$[W];j===void 0&&(W==="instanceMatrix"&&_.instanceMatrix&&(j=_.instanceMatrix),W==="instanceColor"&&_.instanceColor&&(j=_.instanceColor));const te={};te.attribute=j,j&&j.data&&(te.data=j.data),q[W]=te,J++}a.attributes=q,a.attributesNum=J,a.index=G}function b(){const _=a.newAttributes;for(let L=0,I=_.length;L<I;L++)_[L]=0}function m(_){f(_,0)}function f(_,L){const I=a.newAttributes,G=a.enabledAttributes,q=a.attributeDivisors;I[_]=1,G[_]===0&&(n.enableVertexAttribArray(_),G[_]=1),q[_]!==L&&(n.vertexAttribDivisor(_,L),q[_]=L)}function y(){const _=a.newAttributes,L=a.enabledAttributes;for(let I=0,G=L.length;I<G;I++)L[I]!==_[I]&&(n.disableVertexAttribArray(I),L[I]=0)}function v(_,L,I,G,q,$,J){J===!0?n.vertexAttribIPointer(_,L,I,q,$):n.vertexAttribPointer(_,L,I,G,q,$)}function x(_,L,I,G){b();const q=G.attributes,$=I.getAttributes(),J=L.defaultAttributeValues;for(const ue in $){const W=$[ue];if(W.location>=0){let de=q[ue];if(de===void 0&&(ue==="instanceMatrix"&&_.instanceMatrix&&(de=_.instanceMatrix),ue==="instanceColor"&&_.instanceColor&&(de=_.instanceColor)),de!==void 0){const j=de.normalized,te=de.itemSize,Ee=e.get(de);if(Ee===void 0)continue;const tt=Ee.buffer,ne=Ee.type,fe=Ee.bytesPerElement,Ce=ne===n.INT||ne===n.UNSIGNED_INT||de.gpuType===al;if(de.isInterleavedBufferAttribute){const ve=de.data,Re=ve.stride,Oe=de.offset;if(ve.isInstancedInterleavedBuffer){for(let Be=0;Be<W.locationSize;Be++)f(W.location+Be,ve.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Be=0;Be<W.locationSize;Be++)m(W.location+Be);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let Be=0;Be<W.locationSize;Be++)v(W.location+Be,te/W.locationSize,ne,j,Re*fe,(Oe+te/W.locationSize*Be)*fe,Ce)}else{if(de.isInstancedBufferAttribute){for(let ve=0;ve<W.locationSize;ve++)f(W.location+ve,de.meshPerAttribute);_.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ve=0;ve<W.locationSize;ve++)m(W.location+ve);n.bindBuffer(n.ARRAY_BUFFER,tt);for(let ve=0;ve<W.locationSize;ve++)v(W.location+ve,te/W.locationSize,ne,j,te*fe,te/W.locationSize*ve*fe,Ce)}}else if(J!==void 0){const j=J[ue];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(W.location,j);break;case 3:n.vertexAttrib3fv(W.location,j);break;case 4:n.vertexAttrib4fv(W.location,j);break;default:n.vertexAttrib1fv(W.location,j)}}}}y()}function R(){A();for(const _ in i){const L=i[_];for(const I in L){const G=L[I];for(const q in G)u(G[q].object),delete G[q];delete L[I]}delete i[_]}}function w(_){if(i[_.id]===void 0)return;const L=i[_.id];for(const I in L){const G=L[I];for(const q in G)u(G[q].object),delete G[q];delete L[I]}delete i[_.id]}function T(_){for(const L in i){const I=i[L];if(I[_.id]===void 0)continue;const G=I[_.id];for(const q in G)u(G[q].object),delete G[q];delete I[_.id]}}function A(){C(),s=!0,a!==r&&(a=r,c(a.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:A,resetDefaultState:C,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:b,enableAttribute:m,disableUnusedAttributes:y}}function Ag(n,e,t){let i;function r(c){i=c}function a(c,u){n.drawArrays(i,c,u),t.update(u,i,1)}function s(c,u,d){d!==0&&(n.drawArraysInstanced(i,c,u,d),t.update(u,i,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];t.update(h,i,1)}function l(c,u,d,p){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)s(c[g],u[g],p[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,p,0,d);let g=0;for(let b=0;b<d;b++)g+=u[b]*p[b];t.update(g,i,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Pg(n,e,t,i){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(T){return!(T!==Un&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const A=T===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==di&&i.convert(T)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==li&&!A)}function l(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,w=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:h,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:R,maxSamples:w}}function Rg(n){const e=this;let t=null,i=0,r=!1,a=!1;const s=new Ii,o=new et,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const h=d.length!==0||p||i!==0||r;return r=p,i=d.length,h},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,h){const g=d.clippingPlanes,b=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||g===null||g.length===0||a&&!m)a?u(null):c();else{const y=a?0:i,v=y*4;let x=f.clippingState||null;l.value=x,x=u(g,p,v,h);for(let R=0;R!==v;++R)x[R]=t[R];f.clippingState=x,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,p,h,g){const b=d!==null?d.length:0;let m=null;if(b!==0){if(m=l.value,g!==!0||m===null){const f=h+b*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,x=h;v!==b;++v,x+=4)s.copy(d[v]).applyMatrix4(y,o),s.normal.toArray(m,x),m[x+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function Ng(n){let e=new WeakMap;function t(s,o){return o===mo?s.mapping=xr:o===go&&(s.mapping=yr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===mo||o===go)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Nh(l.height);return c.fromEquirectangularTexture(n,s),e.set(s,c),s.addEventListener("dispose",r),t(c.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const pr=4,yc=[.125,.215,.35,.446,.526,.582],Oi=20,Zs=new gl,Mc=new rt;let Ks=null,Js=0,Qs=0,eo=!1;const Ui=(1+Math.sqrt(5))/2,ar=1/Ui,Sc=[new H(-Ui,ar,0),new H(Ui,ar,0),new H(-ar,0,Ui),new H(ar,0,Ui),new H(0,Ui,-ar),new H(0,Ui,ar),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class wc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ks=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ks,Js,Qs),this._renderer.xr.enabled=eo,e.scissorTest=!1,ka(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ks=this._renderer.getRenderTarget(),Js=this._renderer.getActiveCubeFace(),Qs=this._renderer.getActiveMipmapLevel(),eo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Xn,format:Un,colorSpace:wr,depthBuffer:!1},r=Ec(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ec(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lg(a)),this._blurMaterial=Fg(a,e,t)}return r}_compileMaterial(e){const t=new Gn(this._lodPlanes[0],e);this._renderer.compile(t,Zs)}_sceneToCubeUV(e,t,i,r){const o=new Tn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Mc),u.toneMapping=Ei,u.autoClear=!1;const h=new fl({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Gn(new pa,h);let b=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,b=!0):(h.color.copy(Mc),b=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):y===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const v=this._cubeSize;ka(r,y*v,f>2?v:0,v,v),u.setRenderTarget(r),b&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===xr||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cc());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new Gn(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;ka(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Zs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Sc[(r-a-1)%Sc.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,r,"latitudinal",a),this._halfBlur(s,e,i,i,r,"longitudinal",a)}_halfBlur(e,t,i,r,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Gn(this._lodPlanes[r],c),p=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*h):2*Math.PI/(2*Oi-1),b=a/g,m=isFinite(a)?1+Math.floor(u*b):Oi;m>Oi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Oi}`);const f=[];let y=0;for(let T=0;T<Oi;++T){const A=T/b,C=Math.exp(-A*A/2);f.push(C),T===0?y+=C:T<m&&(y+=2*C)}for(let T=0;T<f.length;T++)f[T]=f[T]/y;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=f,p.latitudinal.value=s==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:v}=this;p.dTheta.value=g,p.mipInt.value=v-i;const x=this._sizeLods[r],R=3*x*(r>v-pr?r-v+pr:0),w=4*(this._cubeSize-x);ka(t,R,w,3*x,2*x),l.setRenderTarget(t),l.render(d,Zs)}}function Lg(n){const e=[],t=[],i=[];let r=n;const a=n-pr+1+yc.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let l=1/o;s>n-pr?l=yc[s-n+pr-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,b=3,m=2,f=1,y=new Float32Array(b*g*h),v=new Float32Array(m*g*h),x=new Float32Array(f*g*h);for(let w=0;w<h;w++){const T=w%3*2/3-1,A=w>2?0:-1,C=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];y.set(C,b*g*w),v.set(p,m*g*w);const _=[w,w,w,w,w,w];x.set(_,f*g*w)}const R=new vn;R.setAttribute("position",new Kt(y,b)),R.setAttribute("uv",new Kt(v,m)),R.setAttribute("faceIndex",new Kt(x,f)),e.push(R),r>pr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ec(n,e,t){const i=new Pn(n,e,t);return i.texture.mapping=fs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ka(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Fg(n,e,t){const i=new Float32Array(Oi),r=new H(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Oi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vl(),fragmentShader:`

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
	`}function Dg(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===mo||l===go,u=l===xr||l===yr;if(c||u){let d=e.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return t===null&&(t=new wc(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(t===null&&(t=new wc(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Ig(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&ur("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ug(n,e,t,i){const r={},a=new WeakMap;function s(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);p.removeEventListener("dispose",s),delete r[p.id];const h=a.get(p);h&&(e.remove(h),a.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return r[p.id]===!0||(p.addEventListener("dispose",s),r[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const h in p)e.update(p[h],n.ARRAY_BUFFER)}function c(d){const p=[],h=d.index,g=d.attributes.position;let b=0;if(h!==null){const y=h.array;b=h.version;for(let v=0,x=y.length;v<x;v+=3){const R=y[v+0],w=y[v+1],T=y[v+2];p.push(R,w,w,T,T,R)}}else if(g!==void 0){const y=g.array;b=g.version;for(let v=0,x=y.length/3-1;v<x;v+=3){const R=v+0,w=v+1,T=v+2;p.push(R,w,w,T,T,R)}}else return;const m=new(Wu(p)?Zu:$u)(p,1);m.version=b;const f=a.get(d);f&&e.remove(f),a.set(d,m)}function u(d){const p=a.get(d);if(p){const h=d.index;h!==null&&p.version<h.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Og(n,e,t){let i;function r(p){i=p}let a,s;function o(p){a=p.type,s=p.bytesPerElement}function l(p,h){n.drawElements(i,h,a,p*s),t.update(h,i,1)}function c(p,h,g){g!==0&&(n.drawElementsInstanced(i,h,a,p*s,g),t.update(h,i,g))}function u(p,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,a,p,0,g);let m=0;for(let f=0;f<g;f++)m+=h[f];t.update(m,i,1)}function d(p,h,g,b){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<p.length;f++)c(p[f]/s,h[f],b[f]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,a,p,0,b,0,g);let f=0;for(let y=0;y<g;y++)f+=h[y]*b[y];t.update(f,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function kg(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Bg(n,e,t){const i=new WeakMap,r=new It;function a(s,o,l){const c=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let p=i.get(o);if(p===void 0||p.count!==d){let C=function(){T.dispose(),i.delete(o),o.removeEventListener("dispose",C)};p!==void 0&&p.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;h===!0&&(v=1),g===!0&&(v=2),b===!0&&(v=3);let x=o.attributes.position.count*v,R=1;x>e.maxTextureSize&&(R=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);const w=new Float32Array(x*R*4*d),T=new qu(w,x,R,d);T.type=li,T.needsUpdate=!0;const A=v*4;for(let _=0;_<d;_++){const L=m[_],I=f[_],G=y[_],q=x*R*4*_;for(let $=0;$<L.count;$++){const J=$*A;h===!0&&(r.fromBufferAttribute(L,$),w[q+J+0]=r.x,w[q+J+1]=r.y,w[q+J+2]=r.z,w[q+J+3]=0),g===!0&&(r.fromBufferAttribute(I,$),w[q+J+4]=r.x,w[q+J+5]=r.y,w[q+J+6]=r.z,w[q+J+7]=0),b===!0&&(r.fromBufferAttribute(G,$),w[q+J+8]=r.x,w[q+J+9]=r.y,w[q+J+10]=r.z,w[q+J+11]=G.itemSize===4?r.w:1)}}p={count:d,texture:T,size:new st(x,R)},i.set(o,p),o.addEventListener("dispose",C)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,t);else{let h=0;for(let b=0;b<c.length;b++)h+=c[b];const g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:a}}function zg(n,e,t,i){let r=new WeakMap;function a(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==c&&(p.update(),r.set(p,c))}return d}function s(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}const rd=new gn,Ac=new td(1,1),ad=new qu,sd=new gh,od=new Qu,Pc=[],Rc=[],Nc=new Float32Array(16),Lc=new Float32Array(9),Fc=new Float32Array(4);function Dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let a=Pc[r];if(a===void 0&&(a=new Float32Array(r),Pc[r]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,n[s].toArray(a,o)}return a}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Xt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function vs(n,e){let t=Rc[e];t===void 0&&(t=new Int32Array(e),Rc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Vg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Hg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),Xt(t,e)}}function Gg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),Xt(t,e)}}function Wg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),Xt(t,e)}}function Xg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Fc.set(i),n.uniformMatrix2fv(this.addr,!1,Fc),Xt(t,i)}}function qg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Lc.set(i),n.uniformMatrix3fv(this.addr,!1,Lc),Xt(t,i)}}function Yg(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,i))return;Nc.set(i),n.uniformMatrix4fv(this.addr,!1,Nc),Xt(t,i)}}function jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $g(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),Xt(t,e)}}function Zg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),Xt(t,e)}}function Kg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),Xt(t,e)}}function Jg(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Qg(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),Xt(t,e)}}function e0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),Xt(t,e)}}function t0(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),Xt(t,e)}}function n0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let a;this.type===n.SAMPLER_2D_SHADOW?(Ac.compareFunction=Gu,a=Ac):a=rd,t.setTexture2D(e||a,r)}function i0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sd,r)}function r0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||od,r)}function a0(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||ad,r)}function s0(n){switch(n){case 5126:return Vg;case 35664:return Hg;case 35665:return Gg;case 35666:return Wg;case 35674:return Xg;case 35675:return qg;case 35676:return Yg;case 5124:case 35670:return jg;case 35667:case 35671:return $g;case 35668:case 35672:return Zg;case 35669:case 35673:return Kg;case 5125:return Jg;case 36294:return Qg;case 36295:return e0;case 36296:return t0;case 35678:case 36198:case 36298:case 36306:case 35682:return n0;case 35679:case 36299:case 36307:return i0;case 35680:case 36300:case 36308:case 36293:return r0;case 36289:case 36303:case 36311:case 36292:return a0}}function o0(n,e){n.uniform1fv(this.addr,e)}function l0(n,e){const t=Dr(e,this.size,2);n.uniform2fv(this.addr,t)}function c0(n,e){const t=Dr(e,this.size,3);n.uniform3fv(this.addr,t)}function u0(n,e){const t=Dr(e,this.size,4);n.uniform4fv(this.addr,t)}function d0(n,e){const t=Dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function p0(n,e){const t=Dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function h0(n,e){const t=Dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f0(n,e){n.uniform1iv(this.addr,e)}function m0(n,e){n.uniform2iv(this.addr,e)}function g0(n,e){n.uniform3iv(this.addr,e)}function v0(n,e){n.uniform4iv(this.addr,e)}function b0(n,e){n.uniform1uiv(this.addr,e)}function _0(n,e){n.uniform2uiv(this.addr,e)}function x0(n,e){n.uniform3uiv(this.addr,e)}function y0(n,e){n.uniform4uiv(this.addr,e)}function M0(n,e,t){const i=this.cache,r=e.length,a=vs(t,r);Wt(i,a)||(n.uniform1iv(this.addr,a),Xt(i,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||rd,a[s])}function S0(n,e,t){const i=this.cache,r=e.length,a=vs(t,r);Wt(i,a)||(n.uniform1iv(this.addr,a),Xt(i,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||sd,a[s])}function w0(n,e,t){const i=this.cache,r=e.length,a=vs(t,r);Wt(i,a)||(n.uniform1iv(this.addr,a),Xt(i,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||od,a[s])}function E0(n,e,t){const i=this.cache,r=e.length,a=vs(t,r);Wt(i,a)||(n.uniform1iv(this.addr,a),Xt(i,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||ad,a[s])}function C0(n){switch(n){case 5126:return o0;case 35664:return l0;case 35665:return c0;case 35666:return u0;case 35674:return d0;case 35675:return p0;case 35676:return h0;case 5124:case 35670:return f0;case 35667:case 35671:return m0;case 35668:case 35672:return g0;case 35669:case 35673:return v0;case 5125:return b0;case 36294:return _0;case 36295:return x0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return w0;case 36289:case 36303:case 36311:case 36292:return E0}}class T0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=s0(t.type)}}class A0{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=C0(t.type)}}class P0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],i)}}}const to=/(\w+)(\])?(\[|\.)?/g;function Dc(n,e){n.seq.push(e),n.map[e.id]=e}function R0(n,e,t){const i=n.name,r=i.length;for(to.lastIndex=0;;){const a=to.exec(i),s=to.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===r){Dc(t,c===void 0?new T0(o,n,e):new A0(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new P0(o),Dc(t,d)),t=d}}}class Ja{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);R0(a,s,this)}}setValue(e,t,i,r){const a=this.map[t];a!==void 0&&a.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&i.push(s)}return i}}function Ic(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const N0=37297;let L0=0;function F0(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}const Uc=new et;function D0(n){xt._getMatrix(Uc,xt.workingColorSpace,n);const e=`mat3( ${Uc.elements.map(t=>t.toFixed(4))} )`;switch(xt.getTransfer(n)){case ts:return[e,"LinearTransferOETF"];case wt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Oc(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+F0(n.getShaderSource(e),s)}else return r}function I0(n,e){const t=D0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function U0(n,e){let t;switch(e){case Cp:t="Linear";break;case Tp:t="Reinhard";break;case Ap:t="Cineon";break;case Pp:t="ACESFilmic";break;case Np:t="AgX";break;case Lp:t="Neutral";break;case Rp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ba=new H;function O0(){xt.getLuminanceCoefficients(Ba);const n=Ba.x.toFixed(4),e=Ba.y.toFixed(4),t=Ba.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function B0(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function z0(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=n.getActiveAttrib(e,r),s=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:n.getAttribLocation(e,s),locationSize:o}}return t}function Yr(n){return n!==""}function kc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V0=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(n){return n.replace(V0,G0)}const H0=new Map;function G0(n,e){let t=it[e];if(t===void 0){const i=H0.get(e);if(i!==void 0)t=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return qo(t)}const W0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(n){return n.replace(W0,X0)}function X0(n,e,t,i){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Vc(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function q0(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Pu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sp?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function Y0(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case fs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j0(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function $0(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Ru:e="ENVMAP_BLENDING_MULTIPLY";break;case wp:e="ENVMAP_BLENDING_MIX";break;case Ep:e="ENVMAP_BLENDING_ADD";break}return e}function Z0(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function K0(n,e,t,i){const r=n.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=q0(t),c=Y0(t),u=j0(t),d=$0(t),p=Z0(t),h=k0(t),g=B0(a),b=r.createProgram();let m,f,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Yr).join(`
`),f.length>0&&(f+=`
`)):(m=[Vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),f=[Vc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?it.tonemapping_pars_fragment:"",t.toneMapping!==Ei?U0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),O0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),s=qo(s),s=kc(s,t),s=Bc(s,t),o=qo(o),o=kc(o,t),o=Bc(o,t),s=zc(s),o=zc(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=y+m+s,x=y+f+o,R=Ic(r,r.VERTEX_SHADER,v),w=Ic(r,r.FRAGMENT_SHADER,x);r.attachShader(b,R),r.attachShader(b,w),t.index0AttributeName!==void 0?r.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function T(L){if(n.debug.checkShaderErrors){const I=r.getProgramInfoLog(b).trim(),G=r.getShaderInfoLog(R).trim(),q=r.getShaderInfoLog(w).trim();let $=!0,J=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,b,R,w);else{const ue=Oc(r,R,"vertex"),W=Oc(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+I+`
`+ue+`
`+W)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(G===""||q==="")&&(J=!1);J&&(L.diagnostics={runnable:$,programLog:I,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:f}})}r.deleteShader(R),r.deleteShader(w),A=new Ja(r,b),C=z0(r,b)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=r.getProgramParameter(b,N0)),_},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=L0++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=R,this.fragmentShader=w,this}let J0=0;class Q0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new ev(e),t.set(e,i)),i}}class ev{constructor(e){this.id=J0++,this.code=e,this.usedTimes=0}}function tv(n,e,t,i,r,a,s){const o=new Yu,l=new Q0,c=new Set,u=[],d=r.logarithmicDepthBuffer,p=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(C){return c.add(C),C===0?"uv":`uv${C}`}function m(C,_,L,I,G){const q=I.fog,$=G.geometry,J=C.isMeshStandardMaterial?I.environment:null,ue=(C.isMeshStandardMaterial?t:e).get(C.envMap||J),W=ue&&ue.mapping===fs?ue.image.height:null,de=g[C.type];C.precision!==null&&(h=r.getMaxPrecision(C.precision),h!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",h,"instead."));const j=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,te=j!==void 0?j.length:0;let Ee=0;$.morphAttributes.position!==void 0&&(Ee=1),$.morphAttributes.normal!==void 0&&(Ee=2),$.morphAttributes.color!==void 0&&(Ee=3);let tt,ne,fe,Ce;if(de){const Z=Vn[de];tt=Z.vertexShader,ne=Z.fragmentShader}else tt=C.vertexShader,ne=C.fragmentShader,l.update(C),fe=l.getVertexShaderID(C),Ce=l.getFragmentShaderID(C);const ve=n.getRenderTarget(),Re=n.state.buffers.depth.getReversed(),Oe=G.isInstancedMesh===!0,Be=G.isBatchedMesh===!0,ot=!!C.map,Ye=!!C.matcap,dt=!!ue,F=!!C.aoMap,Ct=!!C.lightMap,Ke=!!C.bumpMap,Je=!!C.normalMap,Ie=!!C.displacementMap,ct=!!C.emissiveMap,Le=!!C.metalnessMap,P=!!C.roughnessMap,S=C.anisotropy>0,z=C.clearcoat>0,ie=C.dispersion>0,ae=C.iridescence>0,ee=C.sheen>0,ce=C.transmission>0,pe=S&&!!C.anisotropyMap,xe=z&&!!C.clearcoatMap,$e=z&&!!C.clearcoatNormalMap,he=z&&!!C.clearcoatRoughnessMap,Pe=ae&&!!C.iridescenceMap,De=ae&&!!C.iridescenceThicknessMap,ke=ee&&!!C.sheenColorMap,Te=ee&&!!C.sheenRoughnessMap,Qe=!!C.specularMap,We=!!C.specularColorMap,vt=!!C.specularIntensityMap,O=ce&&!!C.transmissionMap,ye=ce&&!!C.thicknessMap,Q=!!C.gradientMap,se=!!C.alphaMap,Me=C.alphaTest>0,_e=!!C.alphaHash,M=!!C.extensions;let N=Ei;C.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(N=n.toneMapping);const k={shaderID:de,shaderType:C.type,shaderName:C.name,vertexShader:tt,fragmentShader:ne,defines:C.defines,customVertexShaderID:fe,customFragmentShaderID:Ce,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:h,batching:Be,batchingColor:Be&&G._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&G.instanceColor!==null,instancingMorph:Oe&&G.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:wr,alphaToCoverage:!!C.alphaToCoverage,map:ot,matcap:Ye,envMap:dt,envMapMode:dt&&ue.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:Ct,bumpMap:Ke,normalMap:Je,displacementMap:p&&Ie,emissiveMap:ct,normalMapObjectSpace:Je&&C.normalMapType===Up,normalMapTangentSpace:Je&&C.normalMapType===Ip,metalnessMap:Le,roughnessMap:P,anisotropy:S,anisotropyMap:pe,clearcoat:z,clearcoatMap:xe,clearcoatNormalMap:$e,clearcoatRoughnessMap:he,dispersion:ie,iridescence:ae,iridescenceMap:Pe,iridescenceThicknessMap:De,sheen:ee,sheenColorMap:ke,sheenRoughnessMap:Te,specularMap:Qe,specularColorMap:We,specularIntensityMap:vt,transmission:ce,transmissionMap:O,thicknessMap:ye,gradientMap:Q,opaque:C.transparent===!1&&C.blending===wi&&C.alphaToCoverage===!1,alphaMap:se,alphaTest:Me,alphaHash:_e,combine:C.combine,mapUv:ot&&b(C.map.channel),aoMapUv:F&&b(C.aoMap.channel),lightMapUv:Ct&&b(C.lightMap.channel),bumpMapUv:Ke&&b(C.bumpMap.channel),normalMapUv:Je&&b(C.normalMap.channel),displacementMapUv:Ie&&b(C.displacementMap.channel),emissiveMapUv:ct&&b(C.emissiveMap.channel),metalnessMapUv:Le&&b(C.metalnessMap.channel),roughnessMapUv:P&&b(C.roughnessMap.channel),anisotropyMapUv:pe&&b(C.anisotropyMap.channel),clearcoatMapUv:xe&&b(C.clearcoatMap.channel),clearcoatNormalMapUv:$e&&b(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&b(C.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&b(C.iridescenceMap.channel),iridescenceThicknessMapUv:De&&b(C.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&b(C.sheenColorMap.channel),sheenRoughnessMapUv:Te&&b(C.sheenRoughnessMap.channel),specularMapUv:Qe&&b(C.specularMap.channel),specularColorMapUv:We&&b(C.specularColorMap.channel),specularIntensityMapUv:vt&&b(C.specularIntensityMap.channel),transmissionMapUv:O&&b(C.transmissionMap.channel),thicknessMapUv:ye&&b(C.thicknessMap.channel),alphaMapUv:se&&b(C.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Je||S),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(ot||se),fog:!!q,useFog:C.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:C.flatShading===!0,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:Re,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:Ee,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:C.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:N,decodeVideoTexture:ot&&C.map.isVideoTexture===!0&&xt.getTransfer(C.map.colorSpace)===wt,decodeVideoTextureEmissive:ct&&C.emissiveMap.isVideoTexture===!0&&xt.getTransfer(C.emissiveMap.colorSpace)===wt,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===si,flipSided:C.side===mn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:M&&C.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(M&&C.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return k.vertexUv1s=c.has(1),k.vertexUv2s=c.has(2),k.vertexUv3s=c.has(3),c.clear(),k}function f(C){const _=[];if(C.shaderID?_.push(C.shaderID):(_.push(C.customVertexShaderID),_.push(C.customFragmentShaderID)),C.defines!==void 0)for(const L in C.defines)_.push(L),_.push(C.defines[L]);return C.isRawShaderMaterial===!1&&(y(_,C),v(_,C),_.push(n.outputColorSpace)),_.push(C.customProgramCacheKey),_.join()}function y(C,_){C.push(_.precision),C.push(_.outputColorSpace),C.push(_.envMapMode),C.push(_.envMapCubeUVHeight),C.push(_.mapUv),C.push(_.alphaMapUv),C.push(_.lightMapUv),C.push(_.aoMapUv),C.push(_.bumpMapUv),C.push(_.normalMapUv),C.push(_.displacementMapUv),C.push(_.emissiveMapUv),C.push(_.metalnessMapUv),C.push(_.roughnessMapUv),C.push(_.anisotropyMapUv),C.push(_.clearcoatMapUv),C.push(_.clearcoatNormalMapUv),C.push(_.clearcoatRoughnessMapUv),C.push(_.iridescenceMapUv),C.push(_.iridescenceThicknessMapUv),C.push(_.sheenColorMapUv),C.push(_.sheenRoughnessMapUv),C.push(_.specularMapUv),C.push(_.specularColorMapUv),C.push(_.specularIntensityMapUv),C.push(_.transmissionMapUv),C.push(_.thicknessMapUv),C.push(_.combine),C.push(_.fogExp2),C.push(_.sizeAttenuation),C.push(_.morphTargetsCount),C.push(_.morphAttributeCount),C.push(_.numDirLights),C.push(_.numPointLights),C.push(_.numSpotLights),C.push(_.numSpotLightMaps),C.push(_.numHemiLights),C.push(_.numRectAreaLights),C.push(_.numDirLightShadows),C.push(_.numPointLightShadows),C.push(_.numSpotLightShadows),C.push(_.numSpotLightShadowsWithMaps),C.push(_.numLightProbes),C.push(_.shadowMapType),C.push(_.toneMapping),C.push(_.numClippingPlanes),C.push(_.numClipIntersection),C.push(_.depthPacking)}function v(C,_){o.disableAll(),_.supportsVertexTextures&&o.enable(0),_.instancing&&o.enable(1),_.instancingColor&&o.enable(2),_.instancingMorph&&o.enable(3),_.matcap&&o.enable(4),_.envMap&&o.enable(5),_.normalMapObjectSpace&&o.enable(6),_.normalMapTangentSpace&&o.enable(7),_.clearcoat&&o.enable(8),_.iridescence&&o.enable(9),_.alphaTest&&o.enable(10),_.vertexColors&&o.enable(11),_.vertexAlphas&&o.enable(12),_.vertexUv1s&&o.enable(13),_.vertexUv2s&&o.enable(14),_.vertexUv3s&&o.enable(15),_.vertexTangents&&o.enable(16),_.anisotropy&&o.enable(17),_.alphaHash&&o.enable(18),_.batching&&o.enable(19),_.dispersion&&o.enable(20),_.batchingColor&&o.enable(21),C.push(o.mask),o.disableAll(),_.fog&&o.enable(0),_.useFog&&o.enable(1),_.flatShading&&o.enable(2),_.logarithmicDepthBuffer&&o.enable(3),_.reverseDepthBuffer&&o.enable(4),_.skinning&&o.enable(5),_.morphTargets&&o.enable(6),_.morphNormals&&o.enable(7),_.morphColors&&o.enable(8),_.premultipliedAlpha&&o.enable(9),_.shadowMapEnabled&&o.enable(10),_.doubleSided&&o.enable(11),_.flipSided&&o.enable(12),_.useDepthPacking&&o.enable(13),_.dithering&&o.enable(14),_.transmission&&o.enable(15),_.sheen&&o.enable(16),_.opaque&&o.enable(17),_.pointsUvs&&o.enable(18),_.decodeVideoTexture&&o.enable(19),_.decodeVideoTextureEmissive&&o.enable(20),_.alphaToCoverage&&o.enable(21),C.push(o.mask)}function x(C){const _=g[C.type];let L;if(_){const I=Vn[_];L=ia.clone(I.uniforms)}else L=C.uniforms;return L}function R(C,_){let L;for(let I=0,G=u.length;I<G;I++){const q=u[I];if(q.cacheKey===_){L=q,++L.usedTimes;break}}return L===void 0&&(L=new K0(n,_,C,a),u.push(L)),L}function w(C){if(--C.usedTimes===0){const _=u.indexOf(C);u[_]=u[u.length-1],u.pop(),C.destroy()}}function T(C){l.remove(C)}function A(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:R,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:A}}function nv(){let n=new WeakMap;function e(s){return n.has(s)}function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function i(s){n.delete(s)}function r(s,o,l){n.get(s)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:a}}function iv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Gc(){const n=[];let e=0;const t=[],i=[],r=[];function a(){e=0,t.length=0,i.length=0,r.length=0}function s(d,p,h,g,b,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:p,material:h,groupOrder:g,renderOrder:d.renderOrder,z:b,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=h,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=b,f.group=m),e++,f}function o(d,p,h,g,b,m){const f=s(d,p,h,g,b,m);h.transmission>0?i.push(f):h.transparent===!0?r.push(f):t.push(f)}function l(d,p,h,g,b,m){const f=s(d,p,h,g,b,m);h.transmission>0?i.unshift(f):h.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,p){t.length>1&&t.sort(d||iv),i.length>1&&i.sort(p||Hc),r.length>1&&r.sort(p||Hc)}function u(){for(let d=e,p=n.length;d<p;d++){const h=n[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:i,transparent:r,init:a,push:o,unshift:l,finish:u,sort:c}}function rv(){let n=new WeakMap;function e(i,r){const a=n.get(i);let s;return a===void 0?(s=new Gc,n.set(i,[s])):r>=a.length?(s=new Gc,a.push(s)):s=a[r],s}function t(){n=new WeakMap}return{get:e,dispose:t}}function av(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new rt};break;case"SpotLight":t={position:new H,direction:new H,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function sv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ov=0;function lv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cv(n){const e=new av,t=sv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const r=new H,a=new Ft,s=new Ft;function o(c){let u=0,d=0,p=0;for(let C=0;C<9;C++)i.probe[C].set(0,0,0);let h=0,g=0,b=0,m=0,f=0,y=0,v=0,x=0,R=0,w=0,T=0;c.sort(lv);for(let C=0,_=c.length;C<_;C++){const L=c[C],I=L.color,G=L.intensity,q=L.distance,$=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=I.r*G,d+=I.g*G,p+=I.b*G;else if(L.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(L.sh.coefficients[J],G);T++}else if(L.isDirectionalLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ue=L.shadow,W=t.get(L);W.shadowIntensity=ue.intensity,W.shadowBias=ue.bias,W.shadowNormalBias=ue.normalBias,W.shadowRadius=ue.radius,W.shadowMapSize=ue.mapSize,i.directionalShadow[h]=W,i.directionalShadowMap[h]=$,i.directionalShadowMatrix[h]=L.shadow.matrix,y++}i.directional[h]=J,h++}else if(L.isSpotLight){const J=e.get(L);J.position.setFromMatrixPosition(L.matrixWorld),J.color.copy(I).multiplyScalar(G),J.distance=q,J.coneCos=Math.cos(L.angle),J.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),J.decay=L.decay,i.spot[b]=J;const ue=L.shadow;if(L.map&&(i.spotLightMap[R]=L.map,R++,ue.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[b]=ue.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=ue.intensity,W.shadowBias=ue.bias,W.shadowNormalBias=ue.normalBias,W.shadowRadius=ue.radius,W.shadowMapSize=ue.mapSize,i.spotShadow[b]=W,i.spotShadowMap[b]=$,x++}b++}else if(L.isRectAreaLight){const J=e.get(L);J.color.copy(I).multiplyScalar(G),J.halfWidth.set(L.width*.5,0,0),J.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=J,m++}else if(L.isPointLight){const J=e.get(L);if(J.color.copy(L.color).multiplyScalar(L.intensity),J.distance=L.distance,J.decay=L.decay,L.castShadow){const ue=L.shadow,W=t.get(L);W.shadowIntensity=ue.intensity,W.shadowBias=ue.bias,W.shadowNormalBias=ue.normalBias,W.shadowRadius=ue.radius,W.shadowMapSize=ue.mapSize,W.shadowCameraNear=ue.camera.near,W.shadowCameraFar=ue.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,v++}i.point[g]=J,g++}else if(L.isHemisphereLight){const J=e.get(L);J.skyColor.copy(L.color).multiplyScalar(G),J.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[f]=J,f++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=p;const A=i.hash;(A.directionalLength!==h||A.pointLength!==g||A.spotLength!==b||A.rectAreaLength!==m||A.hemiLength!==f||A.numDirectionalShadows!==y||A.numPointShadows!==v||A.numSpotShadows!==x||A.numSpotMaps!==R||A.numLightProbes!==T)&&(i.directional.length=h,i.spot.length=b,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+R-w,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,A.directionalLength=h,A.pointLength=g,A.spotLength=b,A.rectAreaLength=m,A.hemiLength=f,A.numDirectionalShadows=y,A.numPointShadows=v,A.numSpotShadows=x,A.numSpotMaps=R,A.numLightProbes=T,i.version=ov++)}function l(c,u){let d=0,p=0,h=0,g=0,b=0;const m=u.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){const v=c[f];if(v.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(v.isSpotLight){const x=i.spot[h];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(v.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),s.identity(),a.copy(v.matrixWorld),a.premultiply(m),s.extractRotation(a),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(s),x.halfHeight.applyMatrix4(s),g++}else if(v.isPointLight){const x=i.point[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),p++}else if(v.isHemisphereLight){const x=i.hemi[b];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),b++}}}return{setup:o,setupView:l,state:i}}function Wc(n){const e=new cv(n),t=[],i=[];function r(u){c.camera=u,t.length=0,i.length=0}function a(u){t.push(u)}function s(u){i.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function uv(n){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new Wc(n),e.set(r,[o])):a>=s.length?(o=new Wc(n),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const dv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pv=`uniform sampler2D shadow_pass;
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
}`;function hv(n,e,t){let i=new ed;const r=new st,a=new st,s=new It,o=new nd({depthPacking:Hu}),l=new kh,c={},u=t.maxTextureSize,d={[Ci]:mn,[mn]:Ci,[si]:si},p=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:dv,fragmentShader:pv}),h=p.clone();h.defines.HORIZONTAL_PASS=1;const g=new vn;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Gn(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pu;let f=this.type;this.render=function(w,T,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const C=n.getRenderTarget(),_=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Wn),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const G=f!==ii&&this.type===ii,q=f===ii&&this.type!==ii;for(let $=0,J=w.length;$<J;$++){const ue=w[$],W=ue.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const de=W.getFrameExtents();if(r.multiply(de),a.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(a.x=Math.floor(u/de.x),r.x=a.x*de.x,W.mapSize.x=a.x),r.y>u&&(a.y=Math.floor(u/de.y),r.y=a.y*de.y,W.mapSize.y=a.y)),W.map===null||G===!0||q===!0){const te=this.type!==ii?{minFilter:Mn,magFilter:Mn}:{};W.map!==null&&W.map.dispose(),W.map=new Pn(r.x,r.y,te),W.map.texture.name=ue.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const j=W.getViewportCount();for(let te=0;te<j;te++){const Ee=W.getViewport(te);s.set(a.x*Ee.x,a.y*Ee.y,a.x*Ee.z,a.y*Ee.w),I.viewport(s),W.updateMatrices(ue,te),i=W.getFrustum(),x(T,A,W.camera,ue,this.type)}W.isPointLightShadow!==!0&&this.type===ii&&y(W,A),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(C,_,L)};function y(w,T){const A=e.update(b);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pn(r.x,r.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,A,p,b,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,A,h,b,null)}function v(w,T,A,C){let _=null;const L=A.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)_=L;else if(_=A.isPointLight===!0?l:o,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const I=_.uuid,G=T.uuid;let q=c[I];q===void 0&&(q={},c[I]=q);let $=q[G];$===void 0&&($=_.clone(),q[G]=$,T.addEventListener("dispose",R)),_=$}if(_.visible=T.visible,_.wireframe=T.wireframe,C===ii?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:d[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,A.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const I=n.properties.get(_);I.light=A}return _}function x(w,T,A,C,_){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===ii)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,w.matrixWorld);const G=e.update(w),q=w.material;if(Array.isArray(q)){const $=G.groups;for(let J=0,ue=$.length;J<ue;J++){const W=$[J],de=q[W.materialIndex];if(de&&de.visible){const j=v(w,de,C,_);w.onBeforeShadow(n,w,T,A,G,j,W),n.renderBufferDirect(A,null,G,j,w,W),w.onAfterShadow(n,w,T,A,G,j,W)}}}else if(q.visible){const $=v(w,q,C,_);w.onBeforeShadow(n,w,T,A,G,$,null),n.renderBufferDirect(A,null,G,$,w,null),w.onAfterShadow(n,w,T,A,G,$,null)}}const I=w.children;for(let G=0,q=I.length;G<q;G++)x(I[G],T,A,C,_)}function R(w){w.target.removeEventListener("dispose",R);for(const A in c){const C=c[A],_=w.target.uuid;_ in C&&(C[_].dispose(),delete C[_])}}}const fv={[oo]:lo,[co]:ho,[uo]:fo,[_r]:po,[lo]:oo,[ho]:co,[fo]:uo,[po]:_r};function mv(n,e){function t(){let O=!1;const ye=new It;let Q=null;const se=new It(0,0,0,0);return{setMask:function(Me){Q!==Me&&!O&&(n.colorMask(Me,Me,Me,Me),Q=Me)},setLocked:function(Me){O=Me},setClear:function(Me,_e,M,N,k){k===!0&&(Me*=N,_e*=N,M*=N),ye.set(Me,_e,M,N),se.equals(ye)===!1&&(n.clearColor(Me,_e,M,N),se.copy(ye))},reset:function(){O=!1,Q=null,se.set(-1,0,0,0)}}}function i(){let O=!1,ye=!1,Q=null,se=null,Me=null;return{setReversed:function(_e){if(ye!==_e){const M=e.get("EXT_clip_control");ye?M.clipControlEXT(M.LOWER_LEFT_EXT,M.ZERO_TO_ONE_EXT):M.clipControlEXT(M.LOWER_LEFT_EXT,M.NEGATIVE_ONE_TO_ONE_EXT);const N=Me;Me=null,this.setClear(N)}ye=_e},getReversed:function(){return ye},setTest:function(_e){_e?ve(n.DEPTH_TEST):Re(n.DEPTH_TEST)},setMask:function(_e){Q!==_e&&!O&&(n.depthMask(_e),Q=_e)},setFunc:function(_e){if(ye&&(_e=fv[_e]),se!==_e){switch(_e){case oo:n.depthFunc(n.NEVER);break;case lo:n.depthFunc(n.ALWAYS);break;case co:n.depthFunc(n.LESS);break;case _r:n.depthFunc(n.LEQUAL);break;case uo:n.depthFunc(n.EQUAL);break;case po:n.depthFunc(n.GEQUAL);break;case ho:n.depthFunc(n.GREATER);break;case fo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}se=_e}},setLocked:function(_e){O=_e},setClear:function(_e){Me!==_e&&(ye&&(_e=1-_e),n.clearDepth(_e),Me=_e)},reset:function(){O=!1,Q=null,se=null,Me=null,ye=!1}}}function r(){let O=!1,ye=null,Q=null,se=null,Me=null,_e=null,M=null,N=null,k=null;return{setTest:function(Z){O||(Z?ve(n.STENCIL_TEST):Re(n.STENCIL_TEST))},setMask:function(Z){ye!==Z&&!O&&(n.stencilMask(Z),ye=Z)},setFunc:function(Z,le,B){(Q!==Z||se!==le||Me!==B)&&(n.stencilFunc(Z,le,B),Q=Z,se=le,Me=B)},setOp:function(Z,le,B){(_e!==Z||M!==le||N!==B)&&(n.stencilOp(Z,le,B),_e=Z,M=le,N=B)},setLocked:function(Z){O=Z},setClear:function(Z){k!==Z&&(n.clearStencil(Z),k=Z)},reset:function(){O=!1,ye=null,Q=null,se=null,Me=null,_e=null,M=null,N=null,k=null}}}const a=new t,s=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},p=new WeakMap,h=[],g=null,b=!1,m=null,f=null,y=null,v=null,x=null,R=null,w=null,T=new rt(0,0,0),A=0,C=!1,_=null,L=null,I=null,G=null,q=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,ue=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(W)[1]),J=ue>=1):W.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),J=ue>=2);let de=null,j={};const te=n.getParameter(n.SCISSOR_BOX),Ee=n.getParameter(n.VIEWPORT),tt=new It().fromArray(te),ne=new It().fromArray(Ee);function fe(O,ye,Q,se){const Me=new Uint8Array(4),_e=n.createTexture();n.bindTexture(O,_e),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let M=0;M<Q;M++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ye,0,n.RGBA,1,1,se,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(ye+M,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return _e}const Ce={};Ce[n.TEXTURE_2D]=fe(n.TEXTURE_2D,n.TEXTURE_2D,1),Ce[n.TEXTURE_CUBE_MAP]=fe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ce[n.TEXTURE_2D_ARRAY]=fe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ce[n.TEXTURE_3D]=fe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),s.setFunc(_r),Ke(!1),Je(Gl),ve(n.CULL_FACE),F(Wn);function ve(O){u[O]!==!0&&(n.enable(O),u[O]=!0)}function Re(O){u[O]!==!1&&(n.disable(O),u[O]=!1)}function Oe(O,ye){return d[O]!==ye?(n.bindFramebuffer(O,ye),d[O]=ye,O===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ye),O===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ye),!0):!1}function Be(O,ye){let Q=h,se=!1;if(O){Q=p.get(ye),Q===void 0&&(Q=[],p.set(ye,Q));const Me=O.textures;if(Q.length!==Me.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let _e=0,M=Me.length;_e<M;_e++)Q[_e]=n.COLOR_ATTACHMENT0+_e;Q.length=Me.length,se=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,se=!0);se&&n.drawBuffers(Q)}function ot(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const Ye={[oi]:n.FUNC_ADD,[op]:n.FUNC_SUBTRACT,[lp]:n.FUNC_REVERSE_SUBTRACT};Ye[cp]=n.MIN,Ye[up]=n.MAX;const dt={[dp]:n.ZERO,[pp]:n.ONE,[hp]:n.SRC_COLOR,[Qr]:n.SRC_ALPHA,[_p]:n.SRC_ALPHA_SATURATE,[vp]:n.DST_COLOR,[mp]:n.DST_ALPHA,[fp]:n.ONE_MINUS_SRC_COLOR,[ea]:n.ONE_MINUS_SRC_ALPHA,[bp]:n.ONE_MINUS_DST_COLOR,[gp]:n.ONE_MINUS_DST_ALPHA,[xp]:n.CONSTANT_COLOR,[yp]:n.ONE_MINUS_CONSTANT_COLOR,[Mp]:n.CONSTANT_ALPHA,[Sp]:n.ONE_MINUS_CONSTANT_ALPHA};function F(O,ye,Q,se,Me,_e,M,N,k,Z){if(O===Wn){b===!0&&(Re(n.BLEND),b=!1);return}if(b===!1&&(ve(n.BLEND),b=!0),O!==so){if(O!==m||Z!==C){if((f!==oi||x!==oi)&&(n.blendEquation(n.FUNC_ADD),f=oi,x=oi),Z)switch(O){case wi:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yi:n.blendFunc(n.ONE,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case wi:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case yi:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Xl:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,v=null,R=null,w=null,T.set(0,0,0),A=0,m=O,C=Z}return}Me=Me||ye,_e=_e||Q,M=M||se,(ye!==f||Me!==x)&&(n.blendEquationSeparate(Ye[ye],Ye[Me]),f=ye,x=Me),(Q!==y||se!==v||_e!==R||M!==w)&&(n.blendFuncSeparate(dt[Q],dt[se],dt[_e],dt[M]),y=Q,v=se,R=_e,w=M),(N.equals(T)===!1||k!==A)&&(n.blendColor(N.r,N.g,N.b,k),T.copy(N),A=k),m=O,C=!1}function Ct(O,ye){O.side===si?Re(n.CULL_FACE):ve(n.CULL_FACE);let Q=O.side===mn;ye&&(Q=!Q),Ke(Q),O.blending===wi&&O.transparent===!1?F(Wn):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),s.setFunc(O.depthFunc),s.setTest(O.depthTest),s.setMask(O.depthWrite),a.setMask(O.colorWrite);const se=O.stencilWrite;o.setTest(se),se&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),ct(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Re(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(O){_!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),_=O)}function Je(O){O!==rp?(ve(n.CULL_FACE),O!==L&&(O===Gl?n.cullFace(n.BACK):O===ap?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Re(n.CULL_FACE),L=O}function Ie(O){O!==I&&(J&&n.lineWidth(O),I=O)}function ct(O,ye,Q){O?(ve(n.POLYGON_OFFSET_FILL),(G!==ye||q!==Q)&&(n.polygonOffset(ye,Q),G=ye,q=Q)):Re(n.POLYGON_OFFSET_FILL)}function Le(O){O?ve(n.SCISSOR_TEST):Re(n.SCISSOR_TEST)}function P(O){O===void 0&&(O=n.TEXTURE0+$-1),de!==O&&(n.activeTexture(O),de=O)}function S(O,ye,Q){Q===void 0&&(de===null?Q=n.TEXTURE0+$-1:Q=de);let se=j[Q];se===void 0&&(se={type:void 0,texture:void 0},j[Q]=se),(se.type!==O||se.texture!==ye)&&(de!==Q&&(n.activeTexture(Q),de=Q),n.bindTexture(O,ye||Ce[O]),se.type=O,se.texture=ye)}function z(){const O=j[de];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function ie(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function $e(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pe(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ke(O){tt.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),tt.copy(O))}function Te(O){ne.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),ne.copy(O))}function Qe(O,ye){let Q=c.get(ye);Q===void 0&&(Q=new WeakMap,c.set(ye,Q));let se=Q.get(O);se===void 0&&(se=n.getUniformBlockIndex(ye,O.name),Q.set(O,se))}function We(O,ye){const se=c.get(ye).get(O);l.get(ye)!==se&&(n.uniformBlockBinding(ye,se,O.__bindingPointIndex),l.set(ye,se))}function vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},de=null,j={},d={},p=new WeakMap,h=[],g=null,b=!1,m=null,f=null,y=null,v=null,x=null,R=null,w=null,T=new rt(0,0,0),A=0,C=!1,_=null,L=null,I=null,G=null,q=null,tt.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:ve,disable:Re,bindFramebuffer:Oe,drawBuffers:Be,useProgram:ot,setBlending:F,setMaterial:Ct,setFlipSided:Ke,setCullFace:Je,setLineWidth:Ie,setPolygonOffset:ct,setScissorTest:Le,activeTexture:P,bindTexture:S,unbindTexture:z,compressedTexImage2D:ie,compressedTexImage3D:ae,texImage2D:Pe,texImage3D:De,updateUBOMapping:Qe,uniformBlockBinding:We,texStorage2D:$e,texStorage3D:he,texSubImage2D:ee,texSubImage3D:ce,compressedTexSubImage2D:pe,compressedTexSubImage3D:xe,scissor:ke,viewport:Te,reset:vt}}function gv(n,e,t,i,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new st,u=new WeakMap;let d;const p=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,S){return h?new OffscreenCanvas(P,S):is("canvas")}function b(P,S,z){let ie=1;const ae=Le(P);if((ae.width>z||ae.height>z)&&(ie=z/Math.max(ae.width,ae.height)),ie<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ee=Math.floor(ie*ae.width),ce=Math.floor(ie*ae.height);d===void 0&&(d=g(ee,ce));const pe=S?g(ee,ce):d;return pe.width=ee,pe.height=ce,pe.getContext("2d").drawImage(P,0,0,ee,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ee+"x"+ce+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),P;return P}function m(P){return P.generateMipmaps}function f(P){n.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?n.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function v(P,S,z,ie,ae=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ee=S;if(S===n.RED&&(z===n.FLOAT&&(ee=n.R32F),z===n.HALF_FLOAT&&(ee=n.R16F),z===n.UNSIGNED_BYTE&&(ee=n.R8)),S===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.R8UI),z===n.UNSIGNED_SHORT&&(ee=n.R16UI),z===n.UNSIGNED_INT&&(ee=n.R32UI),z===n.BYTE&&(ee=n.R8I),z===n.SHORT&&(ee=n.R16I),z===n.INT&&(ee=n.R32I)),S===n.RG&&(z===n.FLOAT&&(ee=n.RG32F),z===n.HALF_FLOAT&&(ee=n.RG16F),z===n.UNSIGNED_BYTE&&(ee=n.RG8)),S===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.RG8UI),z===n.UNSIGNED_SHORT&&(ee=n.RG16UI),z===n.UNSIGNED_INT&&(ee=n.RG32UI),z===n.BYTE&&(ee=n.RG8I),z===n.SHORT&&(ee=n.RG16I),z===n.INT&&(ee=n.RG32I)),S===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.RGB8UI),z===n.UNSIGNED_SHORT&&(ee=n.RGB16UI),z===n.UNSIGNED_INT&&(ee=n.RGB32UI),z===n.BYTE&&(ee=n.RGB8I),z===n.SHORT&&(ee=n.RGB16I),z===n.INT&&(ee=n.RGB32I)),S===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(ee=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(ee=n.RGBA16UI),z===n.UNSIGNED_INT&&(ee=n.RGBA32UI),z===n.BYTE&&(ee=n.RGBA8I),z===n.SHORT&&(ee=n.RGBA16I),z===n.INT&&(ee=n.RGBA32I)),S===n.RGB&&z===n.UNSIGNED_INT_5_9_9_9_REV&&(ee=n.RGB9_E5),S===n.RGBA){const ce=ae?ts:xt.getTransfer(ie);z===n.FLOAT&&(ee=n.RGBA32F),z===n.HALF_FLOAT&&(ee=n.RGBA16F),z===n.UNSIGNED_BYTE&&(ee=ce===wt?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT_4_4_4_4&&(ee=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(ee=n.RGB5_A1)}return(ee===n.R16F||ee===n.R32F||ee===n.RG16F||ee===n.RG32F||ee===n.RGBA16F||ee===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function x(P,S){let z;return P?S===null||S===Gi||S===Mr?z=n.DEPTH24_STENCIL8:S===li?z=n.DEPTH32F_STENCIL8:S===ta&&(z=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===Mr?z=n.DEPTH_COMPONENT24:S===li?z=n.DEPTH_COMPONENT32F:S===ta&&(z=n.DEPTH_COMPONENT16),z}function R(P,S){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Mn&&P.minFilter!==Hn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function w(P){const S=P.target;S.removeEventListener("dispose",w),A(S),S.isVideoTexture&&u.delete(S)}function T(P){const S=P.target;S.removeEventListener("dispose",T),_(S)}function A(P){const S=i.get(P);if(S.__webglInit===void 0)return;const z=P.source,ie=p.get(z);if(ie){const ae=ie[S.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&C(P),Object.keys(ie).length===0&&p.delete(z)}i.remove(P)}function C(P){const S=i.get(P);n.deleteTexture(S.__webglTexture);const z=P.source,ie=p.get(z);delete ie[S.__cacheKey],s.memory.textures--}function _(P){const S=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(S.__webglFramebuffer[ie]))for(let ae=0;ae<S.__webglFramebuffer[ie].length;ae++)n.deleteFramebuffer(S.__webglFramebuffer[ie][ae]);else n.deleteFramebuffer(S.__webglFramebuffer[ie]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ie])}else{if(Array.isArray(S.__webglFramebuffer))for(let ie=0;ie<S.__webglFramebuffer.length;ie++)n.deleteFramebuffer(S.__webglFramebuffer[ie]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ie=0;ie<S.__webglColorRenderbuffer.length;ie++)S.__webglColorRenderbuffer[ie]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ie]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=P.textures;for(let ie=0,ae=z.length;ie<ae;ie++){const ee=i.get(z[ie]);ee.__webglTexture&&(n.deleteTexture(ee.__webglTexture),s.memory.textures--),i.remove(z[ie])}i.remove(P)}let L=0;function I(){L=0}function G(){const P=L;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),L+=1,P}function q(P){const S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function $(P,S){const z=i.get(P);if(P.isVideoTexture&&Ie(P),P.isRenderTargetTexture===!1&&P.version>0&&z.__version!==P.version){const ie=P.image;if(ie===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(z,P,S);return}}t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+S)}function J(P,S){const z=i.get(P);if(P.version>0&&z.__version!==P.version){ne(z,P,S);return}t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+S)}function ue(P,S){const z=i.get(P);if(P.version>0&&z.__version!==P.version){ne(z,P,S);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+S)}function W(P,S){const z=i.get(P);if(P.version>0&&z.__version!==P.version){fe(z,P,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+S)}const de={[vo]:n.REPEAT,[ki]:n.CLAMP_TO_EDGE,[bo]:n.MIRRORED_REPEAT},j={[Mn]:n.NEAREST,[Fp]:n.NEAREST_MIPMAP_NEAREST,[ma]:n.NEAREST_MIPMAP_LINEAR,[Hn]:n.LINEAR,[As]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},te={[Op]:n.NEVER,[Gp]:n.ALWAYS,[kp]:n.LESS,[Gu]:n.LEQUAL,[Bp]:n.EQUAL,[Hp]:n.GEQUAL,[zp]:n.GREATER,[Vp]:n.NOTEQUAL};function Ee(P,S){if(S.type===li&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Hn||S.magFilter===As||S.magFilter===ma||S.magFilter===Bi||S.minFilter===Hn||S.minFilter===As||S.minFilter===ma||S.minFilter===Bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,de[S.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,de[S.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,de[S.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,j[S.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,j[S.minFilter]),S.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Mn||S.minFilter!==ma&&S.minFilter!==Bi||S.type===li&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function tt(P,S){let z=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",w));const ie=S.source;let ae=p.get(ie);ae===void 0&&(ae={},p.set(ie,ae));const ee=q(S);if(ee!==P.__cacheKey){ae[ee]===void 0&&(ae[ee]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ae[ee].usedTimes++;const ce=ae[P.__cacheKey];ce!==void 0&&(ae[P.__cacheKey].usedTimes--,ce.usedTimes===0&&C(S)),P.__cacheKey=ee,P.__webglTexture=ae[ee].texture}return z}function ne(P,S,z){let ie=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ie=n.TEXTURE_3D);const ae=tt(P,S),ee=S.source;t.bindTexture(ie,P.__webglTexture,n.TEXTURE0+z);const ce=i.get(ee);if(ee.version!==ce.__version||ae===!0){t.activeTexture(n.TEXTURE0+z);const pe=xt.getPrimaries(xt.workingColorSpace),xe=S.colorSpace===Mi?null:xt.getPrimaries(S.colorSpace),$e=S.colorSpace===Mi||pe===xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let he=b(S.image,!1,r.maxTextureSize);he=ct(S,he);const Pe=a.convert(S.format,S.colorSpace),De=a.convert(S.type);let ke=v(S.internalFormat,Pe,De,S.colorSpace,S.isVideoTexture);Ee(ie,S);let Te;const Qe=S.mipmaps,We=S.isVideoTexture!==!0,vt=ce.__version===void 0||ae===!0,O=ee.dataReady,ye=R(S,he);if(S.isDepthTexture)ke=x(S.format===Sr,S.type),vt&&(We?t.texStorage2D(n.TEXTURE_2D,1,ke,he.width,he.height):t.texImage2D(n.TEXTURE_2D,0,ke,he.width,he.height,0,Pe,De,null));else if(S.isDataTexture)if(Qe.length>0){We&&vt&&t.texStorage2D(n.TEXTURE_2D,ye,ke,Qe[0].width,Qe[0].height);for(let Q=0,se=Qe.length;Q<se;Q++)Te=Qe[Q],We?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Te.width,Te.height,Pe,De,Te.data):t.texImage2D(n.TEXTURE_2D,Q,ke,Te.width,Te.height,0,Pe,De,Te.data);S.generateMipmaps=!1}else We?(vt&&t.texStorage2D(n.TEXTURE_2D,ye,ke,he.width,he.height),O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he.width,he.height,Pe,De,he.data)):t.texImage2D(n.TEXTURE_2D,0,ke,he.width,he.height,0,Pe,De,he.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){We&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,ke,Qe[0].width,Qe[0].height,he.depth);for(let Q=0,se=Qe.length;Q<se;Q++)if(Te=Qe[Q],S.format!==Un)if(Pe!==null)if(We){if(O)if(S.layerUpdates.size>0){const Me=xc(Te.width,Te.height,S.format,S.type);for(const _e of S.layerUpdates){const M=Te.data.subarray(_e*Me/Te.data.BYTES_PER_ELEMENT,(_e+1)*Me/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,_e,Te.width,Te.height,1,Pe,M)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,he.depth,Pe,Te.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,ke,Te.width,Te.height,he.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?O&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,Te.width,Te.height,he.depth,Pe,De,Te.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,ke,Te.width,Te.height,he.depth,0,Pe,De,Te.data)}else{We&&vt&&t.texStorage2D(n.TEXTURE_2D,ye,ke,Qe[0].width,Qe[0].height);for(let Q=0,se=Qe.length;Q<se;Q++)Te=Qe[Q],S.format!==Un?Pe!==null?We?O&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,Te.width,Te.height,Pe,Te.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,ke,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Te.width,Te.height,Pe,De,Te.data):t.texImage2D(n.TEXTURE_2D,Q,ke,Te.width,Te.height,0,Pe,De,Te.data)}else if(S.isDataArrayTexture)if(We){if(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ye,ke,he.width,he.height,he.depth),O)if(S.layerUpdates.size>0){const Q=xc(he.width,he.height,S.format,S.type);for(const se of S.layerUpdates){const Me=he.data.subarray(se*Q/he.data.BYTES_PER_ELEMENT,(se+1)*Q/he.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,se,he.width,he.height,1,Pe,De,Me)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Pe,De,he.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,ke,he.width,he.height,he.depth,0,Pe,De,he.data);else if(S.isData3DTexture)We?(vt&&t.texStorage3D(n.TEXTURE_3D,ye,ke,he.width,he.height,he.depth),O&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Pe,De,he.data)):t.texImage3D(n.TEXTURE_3D,0,ke,he.width,he.height,he.depth,0,Pe,De,he.data);else if(S.isFramebufferTexture){if(vt)if(We)t.texStorage2D(n.TEXTURE_2D,ye,ke,he.width,he.height);else{let Q=he.width,se=he.height;for(let Me=0;Me<ye;Me++)t.texImage2D(n.TEXTURE_2D,Me,ke,Q,se,0,Pe,De,null),Q>>=1,se>>=1}}else if(Qe.length>0){if(We&&vt){const Q=Le(Qe[0]);t.texStorage2D(n.TEXTURE_2D,ye,ke,Q.width,Q.height)}for(let Q=0,se=Qe.length;Q<se;Q++)Te=Qe[Q],We?O&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,Pe,De,Te):t.texImage2D(n.TEXTURE_2D,Q,ke,Pe,De,Te);S.generateMipmaps=!1}else if(We){if(vt){const Q=Le(he);t.texStorage2D(n.TEXTURE_2D,ye,ke,Q.width,Q.height)}O&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Pe,De,he)}else t.texImage2D(n.TEXTURE_2D,0,ke,Pe,De,he);m(S)&&f(ie),ce.__version=ee.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function fe(P,S,z){if(S.image.length!==6)return;const ie=tt(P,S),ae=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+z);const ee=i.get(ae);if(ae.version!==ee.__version||ie===!0){t.activeTexture(n.TEXTURE0+z);const ce=xt.getPrimaries(xt.workingColorSpace),pe=S.colorSpace===Mi?null:xt.getPrimaries(S.colorSpace),xe=S.colorSpace===Mi||ce===pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const $e=S.isCompressedTexture||S.image[0].isCompressedTexture,he=S.image[0]&&S.image[0].isDataTexture,Pe=[];for(let se=0;se<6;se++)!$e&&!he?Pe[se]=b(S.image[se],!0,r.maxCubemapSize):Pe[se]=he?S.image[se].image:S.image[se],Pe[se]=ct(S,Pe[se]);const De=Pe[0],ke=a.convert(S.format,S.colorSpace),Te=a.convert(S.type),Qe=v(S.internalFormat,ke,Te,S.colorSpace),We=S.isVideoTexture!==!0,vt=ee.__version===void 0||ie===!0,O=ae.dataReady;let ye=R(S,De);Ee(n.TEXTURE_CUBE_MAP,S);let Q;if($e){We&&vt&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Qe,De.width,De.height);for(let se=0;se<6;se++){Q=Pe[se].mipmaps;for(let Me=0;Me<Q.length;Me++){const _e=Q[Me];S.format!==Un?ke!==null?We?O&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,_e.width,_e.height,ke,_e.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,Qe,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,0,0,_e.width,_e.height,ke,Te,_e.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me,Qe,_e.width,_e.height,0,ke,Te,_e.data)}}}else{if(Q=S.mipmaps,We&&vt){Q.length>0&&ye++;const se=Le(Pe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ye,Qe,se.width,se.height)}for(let se=0;se<6;se++)if(he){We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe[se].width,Pe[se].height,ke,Te,Pe[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,Pe[se].width,Pe[se].height,0,ke,Te,Pe[se].data);for(let Me=0;Me<Q.length;Me++){const M=Q[Me].image[se].image;We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,M.width,M.height,ke,Te,M.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,Qe,M.width,M.height,0,ke,Te,M.data)}}else{We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ke,Te,Pe[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Qe,ke,Te,Pe[se]);for(let Me=0;Me<Q.length;Me++){const _e=Q[Me];We?O&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,0,0,ke,Te,_e.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,Me+1,Qe,ke,Te,_e.image[se])}}}m(S)&&f(n.TEXTURE_CUBE_MAP),ee.__version=ae.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function Ce(P,S,z,ie,ae,ee){const ce=a.convert(z.format,z.colorSpace),pe=a.convert(z.type),xe=v(z.internalFormat,ce,pe,z.colorSpace),$e=i.get(S),he=i.get(z);if(he.__renderTarget=S,!$e.__hasExternalTextures){const Pe=Math.max(1,S.width>>ee),De=Math.max(1,S.height>>ee);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ee,xe,Pe,De,S.depth,0,ce,pe,null):t.texImage2D(ae,ee,xe,Pe,De,0,ce,pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),Je(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,ae,he.__webglTexture,0,Ke(S)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,ae,he.__webglTexture,ee),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(P,S,z){if(n.bindRenderbuffer(n.RENDERBUFFER,P),S.depthBuffer){const ie=S.depthTexture,ae=ie&&ie.isDepthTexture?ie.type:null,ee=x(S.stencilBuffer,ae),ce=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pe=Ke(S);Je(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pe,ee,S.width,S.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,pe,ee,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ee,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,P)}else{const ie=S.textures;for(let ae=0;ae<ie.length;ae++){const ee=ie[ae],ce=a.convert(ee.format,ee.colorSpace),pe=a.convert(ee.type),xe=v(ee.internalFormat,ce,pe,ee.colorSpace),$e=Ke(S);z&&Je(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,xe,S.width,S.height):Je(S)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,$e,xe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,xe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(P,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ie=i.get(S.depthTexture);ie.__renderTarget=S,(!ie.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$(S.depthTexture,0);const ae=ie.__webglTexture,ee=Ke(S);if(S.depthTexture.format===gr)Je(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(S.depthTexture.format===Sr)Je(S)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Oe(P){const S=i.get(P),z=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){const ie=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ie){const ae=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ie.removeEventListener("dispose",ae)};ie.addEventListener("dispose",ae),S.__depthDisposeCallback=ae}S.__boundDepthTexture=ie}if(P.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Re(S.__webglFramebuffer,P)}else if(z){S.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ie]),S.__webglDepthbuffer[ie]===void 0)S.__webglDepthbuffer[ie]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[ie],P,!1);else{const ae=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ee=S.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,ee),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ee)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,P,!1);else{const ie=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ie,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(P,S,z){const ie=i.get(P);S!==void 0&&Ce(ie.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&Oe(P)}function ot(P){const S=P.texture,z=i.get(P),ie=i.get(S);P.addEventListener("dispose",T);const ae=P.textures,ee=P.isWebGLCubeRenderTarget===!0,ce=ae.length>1;if(ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=S.version,s.memory.textures++),ee){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let xe=0;xe<S.mipmaps.length;xe++)z.__webglFramebuffer[pe][xe]=n.createFramebuffer()}else z.__webglFramebuffer[pe]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<S.mipmaps.length;pe++)z.__webglFramebuffer[pe]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ce)for(let pe=0,xe=ae.length;pe<xe;pe++){const $e=i.get(ae[pe]);$e.__webglTexture===void 0&&($e.__webglTexture=n.createTexture(),s.memory.textures++)}if(P.samples>0&&Je(P)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<ae.length;pe++){const xe=ae[pe];z.__webglColorRenderbuffer[pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const $e=a.convert(xe.format,xe.colorSpace),he=a.convert(xe.type),Pe=v(xe.internalFormat,$e,he,xe.colorSpace,P.isXRRenderTarget===!0),De=Ke(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,Pe,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pe,n.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(z.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Ee(n.TEXTURE_CUBE_MAP,S);for(let pe=0;pe<6;pe++)if(S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Ce(z.__webglFramebuffer[pe][xe],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else Ce(z.__webglFramebuffer[pe],P,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(S)&&f(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){for(let pe=0,xe=ae.length;pe<xe;pe++){const $e=ae[pe],he=i.get($e);t.bindTexture(n.TEXTURE_2D,he.__webglTexture),Ee(n.TEXTURE_2D,$e),Ce(z.__webglFramebuffer,P,$e,n.COLOR_ATTACHMENT0+pe,n.TEXTURE_2D,0),m($e)&&f(n.TEXTURE_2D)}t.unbindTexture()}else{let pe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(pe,ie.__webglTexture),Ee(pe,S),S.mipmaps&&S.mipmaps.length>0)for(let xe=0;xe<S.mipmaps.length;xe++)Ce(z.__webglFramebuffer[xe],P,S,n.COLOR_ATTACHMENT0,pe,xe);else Ce(z.__webglFramebuffer,P,S,n.COLOR_ATTACHMENT0,pe,0);m(S)&&f(pe),t.unbindTexture()}P.depthBuffer&&Oe(P)}function Ye(P){const S=P.textures;for(let z=0,ie=S.length;z<ie;z++){const ae=S[z];if(m(ae)){const ee=y(P),ce=i.get(ae).__webglTexture;t.bindTexture(ee,ce),f(ee),t.unbindTexture()}}}const dt=[],F=[];function Ct(P){if(P.samples>0){if(Je(P)===!1){const S=P.textures,z=P.width,ie=P.height;let ae=n.COLOR_BUFFER_BIT;const ee=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=i.get(P),pe=S.length>1;if(pe)for(let xe=0;xe<S.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let xe=0;xe<S.length;xe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ce.__webglColorRenderbuffer[xe]);const $e=i.get(S[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,$e,0)}n.blitFramebuffer(0,0,z,ie,0,0,z,ie,ae,n.NEAREST),l===!0&&(dt.length=0,F.length=0,dt.push(n.COLOR_ATTACHMENT0+xe),P.depthBuffer&&P.resolveDepthBuffer===!1&&(dt.push(ee),F.push(ee),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,dt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pe)for(let xe=0;xe<S.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ce.__webglColorRenderbuffer[xe]);const $e=i.get(S[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ce.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,$e,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const S=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function Ke(P){return Math.min(r.maxSamples,P.samples)}function Je(P){const S=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Ie(P){const S=s.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function ct(P,S){const z=P.colorSpace,ie=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||z!==wr&&z!==Mi&&(xt.getTransfer(z)===wt?(ie!==Un||ae!==di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function Le(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=I,this.setTexture2D=$,this.setTexture2DArray=J,this.setTexture3D=ue,this.setTextureCube=W,this.rebindTextures=Be,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=Ye,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=Oe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Je}function vv(n,e){function t(i,r=Mi){let a;const s=xt.getTransfer(r);if(i===di)return n.UNSIGNED_BYTE;if(i===sl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ol)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Du)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Lu)return n.BYTE;if(i===Fu)return n.SHORT;if(i===ta)return n.UNSIGNED_SHORT;if(i===al)return n.INT;if(i===Gi)return n.UNSIGNED_INT;if(i===li)return n.FLOAT;if(i===Xn)return n.HALF_FLOAT;if(i===Iu)return n.ALPHA;if(i===Uu)return n.RGB;if(i===Un)return n.RGBA;if(i===Ou)return n.LUMINANCE;if(i===ku)return n.LUMINANCE_ALPHA;if(i===gr)return n.DEPTH_COMPONENT;if(i===Sr)return n.DEPTH_STENCIL;if(i===Bu)return n.RED;if(i===ll)return n.RED_INTEGER;if(i===zu)return n.RG;if(i===cl)return n.RG_INTEGER;if(i===ul)return n.RGBA_INTEGER;if(i===Ya||i===ja||i===$a||i===Za)if(s===wt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===Ya)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===Ya)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ja)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===_o||i===xo||i===yo||i===Mo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===_o)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xo)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yo)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Mo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===So||i===wo||i===Eo)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===So||i===wo)return s===wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Eo)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Co||i===To||i===Ao||i===Po||i===Ro||i===No||i===Lo||i===Fo||i===Do||i===Io||i===Uo||i===Oo||i===ko||i===Bo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Co)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===To)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ao)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Po)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ro)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===No)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Lo)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Fo)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Do)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Io)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uo)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oo)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ko)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Bo)return s===wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===zo||i===Vo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===Ka)return s===wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===zo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Vu||i===Ho||i===Go||i===Wo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===Ka)return a.COMPRESSED_RED_RGTC1_EXT;if(i===Ho)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Go)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const bv={type:"move"};class no{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,i),f=this._getHandJoint(c,b);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&p>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new qr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const _v=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xv=`
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

}`;class yv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new gn,a=e.properties.get(r);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new rn({vertexShader:_v,fragmentShader:xv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Gn(new gs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Mv extends Nr{constructor(e,t){super();const i=this;let r=null,a=1,s=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,h=null,g=null;const b=new yv,m=t.getContextAttributes();let f=null,y=null;const v=[],x=[],R=new st;let w=null;const T=new Tn;T.viewport=new It;const A=new Tn;A.viewport=new It;const C=[T,A],_=new Bh;let L=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let fe=v[ne];return fe===void 0&&(fe=new no,v[ne]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ne){let fe=v[ne];return fe===void 0&&(fe=new no,v[ne]=fe),fe.getGripSpace()},this.getHand=function(ne){let fe=v[ne];return fe===void 0&&(fe=new no,v[ne]=fe),fe.getHandSpace()};function G(ne){const fe=x.indexOf(ne.inputSource);if(fe===-1)return;const Ce=v[fe];Ce!==void 0&&(Ce.update(ne.inputSource,ne.frame,c||s),Ce.dispatchEvent({type:ne.type,data:ne.inputSource}))}function q(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",$);for(let ne=0;ne<v.length;ne++){const fe=x[ne];fe!==null&&(x[ne]=null,v[ne].disconnect(fe))}L=null,I=null,b.reset(),e.setRenderTarget(f),h=null,p=null,d=null,r=null,y=null,tt.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",q),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0){const fe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};h=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Pn(h.framebufferWidth,h.framebufferHeight,{format:Un,type:di,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let fe=null,Ce=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=m.stencil?Sr:gr,Ce=m.stencil?Mr:Gi);const Re={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:a};d=new XRWebGLBinding(r,t),p=d.createProjectionLayer(Re),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),y=new Pn(p.textureWidth,p.textureHeight,{format:Un,type:di,depthTexture:new td(p.textureWidth,p.textureHeight,Ce,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await r.requestReferenceSpace(o),tt.setContext(r),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function $(ne){for(let fe=0;fe<ne.removed.length;fe++){const Ce=ne.removed[fe],ve=x.indexOf(Ce);ve>=0&&(x[ve]=null,v[ve].disconnect(Ce))}for(let fe=0;fe<ne.added.length;fe++){const Ce=ne.added[fe];let ve=x.indexOf(Ce);if(ve===-1){for(let Oe=0;Oe<v.length;Oe++)if(Oe>=x.length){x.push(Ce),ve=Oe;break}else if(x[Oe]===null){x[Oe]=Ce,ve=Oe;break}if(ve===-1)break}const Re=v[ve];Re&&Re.connect(Ce)}}const J=new H,ue=new H;function W(ne,fe,Ce){J.setFromMatrixPosition(fe.matrixWorld),ue.setFromMatrixPosition(Ce.matrixWorld);const ve=J.distanceTo(ue),Re=fe.projectionMatrix.elements,Oe=Ce.projectionMatrix.elements,Be=Re[14]/(Re[10]-1),ot=Re[14]/(Re[10]+1),Ye=(Re[9]+1)/Re[5],dt=(Re[9]-1)/Re[5],F=(Re[8]-1)/Re[0],Ct=(Oe[8]+1)/Oe[0],Ke=Be*F,Je=Be*Ct,Ie=ve/(-F+Ct),ct=Ie*-F;if(fe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ct),ne.translateZ(Ie),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Re[10]===-1)ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Le=Be+Ie,P=ot+Ie,S=Ke-ct,z=Je+(ve-ct),ie=Ye*ot/P*Le,ae=dt*ot/P*Le;ne.projectionMatrix.makePerspective(S,z,ie,ae,Le,P),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function de(ne,fe){fe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(fe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let fe=ne.near,Ce=ne.far;b.texture!==null&&(b.depthNear>0&&(fe=b.depthNear),b.depthFar>0&&(Ce=b.depthFar)),_.near=A.near=T.near=fe,_.far=A.far=T.far=Ce,(L!==_.near||I!==_.far)&&(r.updateRenderState({depthNear:_.near,depthFar:_.far}),L=_.near,I=_.far),T.layers.mask=ne.layers.mask|2,A.layers.mask=ne.layers.mask|4,_.layers.mask=T.layers.mask|A.layers.mask;const ve=ne.parent,Re=_.cameras;de(_,ve);for(let Oe=0;Oe<Re.length;Oe++)de(Re[Oe],ve);Re.length===2?W(_,T,A):_.projectionMatrix.copy(T.projectionMatrix),j(ne,_,ve)};function j(ne,fe,Ce){Ce===null?ne.matrix.copy(fe.matrixWorld):(ne.matrix.copy(Ce.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(fe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(fe.projectionMatrix),ne.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=na*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function(ne){l=ne,p!==null&&(p.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(_)};let te=null;function Ee(ne,fe){if(u=fe.getViewerPose(c||s),g=fe,u!==null){const Ce=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let ve=!1;Ce.length!==_.cameras.length&&(_.cameras.length=0,ve=!0);for(let Oe=0;Oe<Ce.length;Oe++){const Be=Ce[Oe];let ot=null;if(h!==null)ot=h.getViewport(Be);else{const dt=d.getViewSubImage(p,Be);ot=dt.viewport,Oe===0&&(e.setRenderTargetTextures(y,dt.colorTexture,p.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(y))}let Ye=C[Oe];Ye===void 0&&(Ye=new Tn,Ye.layers.enable(Oe),Ye.viewport=new It,C[Oe]=Ye),Ye.matrix.fromArray(Be.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Be.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ot.x,ot.y,ot.width,ot.height),Oe===0&&(_.matrix.copy(Ye.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ve===!0&&_.cameras.push(Ye)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Oe=d.getDepthInformation(Ce[0]);Oe&&Oe.isValid&&Oe.texture&&b.init(e,Oe,r.renderState)}}for(let Ce=0;Ce<v.length;Ce++){const ve=x[Ce],Re=v[Ce];ve!==null&&Re!==void 0&&Re.update(ve,fe,c||s)}te&&te(ne,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const tt=new id;tt.setAnimationLoop(Ee),this.setAnimationLoop=function(ne){te=ne},this.dispose=function(){}}}const Fi=new pi,Sv=new Ft;function wv(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Ku(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),u(m,f)):f.isMeshStandardMaterial?(a(m,f),p(m,f),f.isMeshPhysicalMaterial&&h(m,f,x)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),b(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,y,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),v=y.envMap,x=y.envMapRotation;v&&(m.envMap.value=v,Fi.copy(x),Fi.x*=-1,Fi.y*=-1,Fi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Fi.y*=-1,Fi.z*=-1),m.envMapRotation.value.setFromMatrix4(Sv.makeRotationFromEuler(Fi)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function p(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function h(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function b(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Ev(n,e,t,i){let r={},a={},s=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){const x=v.program;i.uniformBlockBinding(y,x)}function c(y,v){let x=r[y.id];x===void 0&&(g(y),x=u(y),r[y.id]=x,y.addEventListener("dispose",m));const R=v.program;i.updateUBOMapping(y,R);const w=e.render.frame;a[y.id]!==w&&(p(y),a[y.id]=w)}function u(y){const v=d();y.__bindingPointIndex=v;const x=n.createBuffer(),R=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,R,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,x),x}function d(){for(let y=0;y<o;y++)if(s.indexOf(y)===-1)return s.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){const v=r[y.id],x=y.uniforms,R=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,T=x.length;w<T;w++){const A=Array.isArray(x[w])?x[w]:[x[w]];for(let C=0,_=A.length;C<_;C++){const L=A[C];if(h(L,w,C,R)===!0){const I=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let q=0;for(let $=0;$<G.length;$++){const J=G[$],ue=b(J);typeof J=="number"||typeof J=="boolean"?(L.__data[0]=J,n.bufferSubData(n.UNIFORM_BUFFER,I+q,L.__data)):J.isMatrix3?(L.__data[0]=J.elements[0],L.__data[1]=J.elements[1],L.__data[2]=J.elements[2],L.__data[3]=0,L.__data[4]=J.elements[3],L.__data[5]=J.elements[4],L.__data[6]=J.elements[5],L.__data[7]=0,L.__data[8]=J.elements[6],L.__data[9]=J.elements[7],L.__data[10]=J.elements[8],L.__data[11]=0):(J.toArray(L.__data,q),q+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,I,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(y,v,x,R){const w=y.value,T=v+"_"+x;if(R[T]===void 0)return typeof w=="number"||typeof w=="boolean"?R[T]=w:R[T]=w.clone(),!0;{const A=R[T];if(typeof w=="number"||typeof w=="boolean"){if(A!==w)return R[T]=w,!0}else if(A.equals(w)===!1)return A.copy(w),!0}return!1}function g(y){const v=y.uniforms;let x=0;const R=16;for(let T=0,A=v.length;T<A;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,L=C.length;_<L;_++){const I=C[_],G=Array.isArray(I.value)?I.value:[I.value];for(let q=0,$=G.length;q<$;q++){const J=G[q],ue=b(J),W=x%R,de=W%ue.boundary,j=W+de;x+=de,j!==0&&R-j<ue.storage&&(x+=R-j),I.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=x,x+=ue.storage}}}const w=x%R;return w>0&&(x+=R-w),y.__size=x,y.__cache={},this}function b(y){const v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),v}function m(y){const v=y.target;v.removeEventListener("dispose",m);const x=s.indexOf(v.__bindingPointIndex);s.splice(x,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete a[v.id]}function f(){for(const y in r)n.deleteBuffer(r[y]);s=[],r={},a={}}return{bind:l,update:c,dispose:f}}class ld{constructor(e={}){const{canvas:t=oh(),context:i=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=s;const g=new Uint32Array(4),b=new Int32Array(4);let m=null,f=null;const y=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=Ei,this.toneMappingExposure=1;const x=this;let R=!1,w=0,T=0,A=null,C=-1,_=null;const L=new It,I=new It;let G=null;const q=new rt(0);let $=0,J=t.width,ue=t.height,W=1,de=null,j=null;const te=new It(0,0,J,ue),Ee=new It(0,0,J,ue);let tt=!1;const ne=new ed;let fe=!1,Ce=!1;const ve=new Ft,Re=new Ft,Oe=new H,Be=new It,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ye=!1;function dt(){return A===null?W:1}let F=i;function Ct(E,U){return t.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${rl}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Me,!1),t.addEventListener("webglcontextcreationerror",_e,!1),F===null){const U="webgl2";if(F=Ct(U,E),F===null)throw Ct(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ke,Je,Ie,ct,Le,P,S,z,ie,ae,ee,ce,pe,xe,$e,he,Pe,De,ke,Te,Qe,We,vt,O;function ye(){Ke=new Ig(F),Ke.init(),We=new vv(F,Ke),Je=new Pg(F,Ke,e,We),Ie=new mv(F,Ke),Je.reverseDepthBuffer&&p&&Ie.buffers.depth.setReversed(!0),ct=new kg(F),Le=new nv,P=new gv(F,Ke,Ie,Le,Je,We,ct),S=new Ng(x),z=new Dg(x),ie=new Wh(F),vt=new Tg(F,ie),ae=new Ug(F,ie,ct,vt),ee=new zg(F,ae,ie,ct),ke=new Bg(F,Je,P),he=new Rg(Le),ce=new tv(x,S,z,Ke,Je,vt,he),pe=new wv(x,Le),xe=new rv,$e=new uv(Ke),De=new Cg(x,S,z,Ie,ee,h,l),Pe=new hv(x,ee,Je),O=new Ev(F,ct,Je,Ie),Te=new Ag(F,Ke,ct),Qe=new Og(F,Ke,ct),ct.programs=ce.programs,x.capabilities=Je,x.extensions=Ke,x.properties=Le,x.renderLists=xe,x.shadowMap=Pe,x.state=Ie,x.info=ct}ye();const Q=new Mv(x,F);this.xr=Q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=Ke.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ke.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(J,ue,!1))},this.getSize=function(E){return E.set(J,ue)},this.setSize=function(E,U,X=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}J=E,ue=U,t.width=Math.floor(E*W),t.height=Math.floor(U*W),X===!0&&(t.style.width=E+"px",t.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(J*W,ue*W).floor()},this.setDrawingBufferSize=function(E,U,X){J=E,ue=U,W=X,t.width=Math.floor(E*X),t.height=Math.floor(U*X),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(te)},this.setViewport=function(E,U,X,Y){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,U,X,Y),Ie.viewport(L.copy(te).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,U,X,Y){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,U,X,Y),Ie.scissor(I.copy(Ee).multiplyScalar(W).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(E){Ie.setScissorTest(tt=E)},this.setOpaqueSort=function(E){de=E},this.setTransparentSort=function(E){j=E},this.getClearColor=function(E){return E.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(E=!0,U=!0,X=!0){let Y=0;if(E){let V=!1;if(A!==null){const oe=A.texture.format;V=oe===ul||oe===cl||oe===ll}if(V){const oe=A.texture.type,Se=oe===di||oe===Gi||oe===ta||oe===Mr||oe===sl||oe===ol,Ne=De.getClearColor(),Ue=De.getClearAlpha(),je=Ne.r,qe=Ne.g,ze=Ne.b;Se?(g[0]=je,g[1]=qe,g[2]=ze,g[3]=Ue,F.clearBufferuiv(F.COLOR,0,g)):(b[0]=je,b[1]=qe,b[2]=ze,b[3]=Ue,F.clearBufferiv(F.COLOR,0,b))}else Y|=F.COLOR_BUFFER_BIT}U&&(Y|=F.DEPTH_BUFFER_BIT),X&&(Y|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Me,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),De.dispose(),xe.dispose(),$e.dispose(),Le.dispose(),S.dispose(),z.dispose(),ee.dispose(),vt.dispose(),O.dispose(),ce.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",me),Q.removeEventListener("sessionend",ge),Xe.stop()};function se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Me(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const E=ct.autoReset,U=Pe.enabled,X=Pe.autoUpdate,Y=Pe.needsUpdate,V=Pe.type;ye(),ct.autoReset=E,Pe.enabled=U,Pe.autoUpdate=X,Pe.needsUpdate=Y,Pe.type=V}function _e(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function M(E){const U=E.target;U.removeEventListener("dispose",M),N(U)}function N(E){k(E),Le.remove(E)}function k(E){const U=Le.get(E).programs;U!==void 0&&(U.forEach(function(X){ce.releaseProgram(X)}),E.isShaderMaterial&&ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,X,Y,V,oe){U===null&&(U=ot);const Se=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Et(E,U,X,Y,V);Ie.setMaterial(Y,Se);let Ue=X.index,je=1;if(Y.wireframe===!0){if(Ue=ae.getWireframeAttribute(X),Ue===void 0)return;je=2}const qe=X.drawRange,ze=X.attributes.position;let _t=qe.start*je,Mt=(qe.start+qe.count)*je;oe!==null&&(_t=Math.max(_t,oe.start*je),Mt=Math.min(Mt,(oe.start+oe.count)*je)),Ue!==null?(_t=Math.max(_t,0),Mt=Math.min(Mt,Ue.count)):ze!=null&&(_t=Math.max(_t,0),Mt=Math.min(Mt,ze.count));const Ut=Mt-_t;if(Ut<0||Ut===1/0)return;vt.setup(V,Y,Ne,X,Ue);let Nt,yt=Te;if(Ue!==null&&(Nt=ie.get(Ue),yt=Qe,yt.setIndex(Nt)),V.isMesh)Y.wireframe===!0?(Ie.setLineWidth(Y.wireframeLinewidth*dt()),yt.setMode(F.LINES)):yt.setMode(F.TRIANGLES);else if(V.isLine){let Ve=Y.linewidth;Ve===void 0&&(Ve=1),Ie.setLineWidth(Ve*dt()),V.isLineSegments?yt.setMode(F.LINES):V.isLineLoop?yt.setMode(F.LINE_LOOP):yt.setMode(F.LINE_STRIP)}else V.isPoints?yt.setMode(F.POINTS):V.isSprite&&yt.setMode(F.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)yt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))yt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ve=V._multiDrawStarts,Zt=V._multiDrawCounts,St=V._multiDrawCount,Rn=Ue?ie.get(Ue).bytesPerElement:1,Xi=Le.get(Y).currentProgram.getUniforms();for(let bn=0;bn<St;bn++)Xi.setValue(F,"_gl_DrawID",bn),yt.render(Ve[bn]/Rn,Zt[bn])}else if(V.isInstancedMesh)yt.renderInstances(_t,Ut,V.count);else if(X.isInstancedBufferGeometry){const Ve=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Zt=Math.min(X.instanceCount,Ve);yt.renderInstances(_t,Ut,Zt)}else yt.render(_t,Ut)};function Z(E,U,X){E.transparent===!0&&E.side===si&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,lt(E,U,X),E.side=Ci,E.needsUpdate=!0,lt(E,U,X),E.side=si):lt(E,U,X)}this.compile=function(E,U,X=null){X===null&&(X=E),f=$e.get(X),f.init(U),v.push(f),X.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),E!==X&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(f.pushLight(V),V.castShadow&&f.pushShadow(V))}),f.setupLights();const Y=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const oe=V.material;if(oe)if(Array.isArray(oe))for(let Se=0;Se<oe.length;Se++){const Ne=oe[Se];Z(Ne,X,V),Y.add(Ne)}else Z(oe,X,V),Y.add(oe)}),v.pop(),f=null,Y},this.compileAsync=function(E,U,X=null){const Y=this.compile(E,U,X);return new Promise(V=>{function oe(){if(Y.forEach(function(Se){Le.get(Se).currentProgram.isReady()&&Y.delete(Se)}),Y.size===0){V(E);return}setTimeout(oe,10)}Ke.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let le=null;function B(E){le&&le(E)}function me(){Xe.stop()}function ge(){Xe.start()}const Xe=new id;Xe.setAnimationLoop(B),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(E){le=E,Q.setAnimationLoop(E),E===null?Xe.stop():Xe.start()},Q.addEventListener("sessionstart",me),Q.addEventListener("sessionend",ge),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(U),U=Q.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,A),f=$e.get(E,v.length),f.init(U),v.push(f),Re.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ne.setFromProjectionMatrix(Re),Ce=this.localClippingEnabled,fe=he.init(this.clippingPlanes,Ce),m=xe.get(E,y.length),m.init(),y.push(m),Q.enabled===!0&&Q.isPresenting===!0){const oe=x.xr.getDepthSensingMesh();oe!==null&&Ze(oe,U,-1/0,x.sortObjects)}Ze(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(de,j),Ye=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ye&&De.addToRenderList(m,E),this.info.render.frame++,fe===!0&&he.beginShadows();const X=f.state.shadowsArray;Pe.render(X,E,U),fe===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,V=m.transmissive;if(f.setupLights(),U.isArrayCamera){const oe=U.cameras;if(V.length>0)for(let Se=0,Ne=oe.length;Se<Ne;Se++){const Ue=oe[Se];at(Y,V,E,Ue)}Ye&&De.render(E);for(let Se=0,Ne=oe.length;Se<Ne;Se++){const Ue=oe[Se];nt(m,E,Ue,Ue.viewport)}}else V.length>0&&at(Y,V,E,U),Ye&&De.render(E),nt(m,E,U);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(x,E,U),vt.resetDefaultState(),C=-1,_=null,v.pop(),v.length>0?(f=v[v.length-1],fe===!0&&he.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Ze(E,U,X,Y){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ne.intersectsSprite(E)){Y&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const Se=ee.update(E),Ne=E.material;Ne.visible&&m.push(E,Se,Ne,X,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ne.intersectsObject(E))){const Se=ee.update(E),Ne=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Be.copy(Se.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(Ne)){const Ue=Se.groups;for(let je=0,qe=Ue.length;je<qe;je++){const ze=Ue[je],_t=Ne[ze.materialIndex];_t&&_t.visible&&m.push(E,Se,_t,X,Be.z,ze)}}else Ne.visible&&m.push(E,Se,Ne,X,Be.z,null)}}const oe=E.children;for(let Se=0,Ne=oe.length;Se<Ne;Se++)Ze(oe[Se],U,X,Y)}function nt(E,U,X,Y){const V=E.opaque,oe=E.transmissive,Se=E.transparent;f.setupLightsView(X),fe===!0&&he.setGlobalState(x.clippingPlanes,X),Y&&Ie.viewport(L.copy(Y)),V.length>0&&He(V,U,X),oe.length>0&&He(oe,U,X),Se.length>0&&He(Se,U,X),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function at(E,U,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Pn(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?Xn:di,minFilter:Bi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xt.workingColorSpace}));const oe=f.state.transmissionRenderTarget[Y.id],Se=Y.viewport||L;oe.setSize(Se.z,Se.w);const Ne=x.getRenderTarget();x.setRenderTarget(oe),x.getClearColor(q),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Ye&&De.render(X);const Ue=x.toneMapping;x.toneMapping=Ei;const je=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),fe===!0&&he.setGlobalState(x.clippingPlanes,Y),He(E,X,Y),P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let ze=0,_t=U.length;ze<_t;ze++){const Mt=U[ze],Ut=Mt.object,Nt=Mt.geometry,yt=Mt.material,Ve=Mt.group;if(yt.side===si&&Ut.layers.test(Y.layers)){const Zt=yt.side;yt.side=mn,yt.needsUpdate=!0,ut(Ut,X,Y,Nt,yt,Ve),yt.side=Zt,yt.needsUpdate=!0,qe=!0}}qe===!0&&(P.updateMultisampleRenderTarget(oe),P.updateRenderTargetMipmap(oe))}x.setRenderTarget(Ne),x.setClearColor(q,$),je!==void 0&&(Y.viewport=je),x.toneMapping=Ue}function He(E,U,X){const Y=U.isScene===!0?U.overrideMaterial:null;for(let V=0,oe=E.length;V<oe;V++){const Se=E[V],Ne=Se.object,Ue=Se.geometry,je=Y===null?Se.material:Y,qe=Se.group;Ne.layers.test(X.layers)&&ut(Ne,U,X,Ue,je,qe)}}function ut(E,U,X,Y,V,oe){E.onBeforeRender(x,U,X,Y,V,oe),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(x,U,X,Y,E,oe),V.transparent===!0&&V.side===si&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,x.renderBufferDirect(X,U,Y,V,E,oe),V.side=Ci,V.needsUpdate=!0,x.renderBufferDirect(X,U,Y,V,E,oe),V.side=si):x.renderBufferDirect(X,U,Y,V,E,oe),E.onAfterRender(x,U,X,Y,V,oe)}function lt(E,U,X){U.isScene!==!0&&(U=ot);const Y=Le.get(E),V=f.state.lights,oe=f.state.shadowsArray,Se=V.state.version,Ne=ce.getParameters(E,V.state,oe,U,X),Ue=ce.getProgramCacheKey(Ne);let je=Y.programs;Y.environment=E.isMeshStandardMaterial?U.environment:null,Y.fog=U.fog,Y.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,je===void 0&&(E.addEventListener("dispose",M),je=new Map,Y.programs=je);let qe=je.get(Ue);if(qe!==void 0){if(Y.currentProgram===qe&&Y.lightsStateVersion===Se)return bt(E,Ne),qe}else Ne.uniforms=ce.getUniforms(E),E.onBeforeCompile(Ne,x),qe=ce.acquireProgram(Ne,Ue),je.set(Ue,qe),Y.uniforms=Ne.uniforms;const ze=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=he.uniform),bt(E,Ne),Y.needsLights=Dt(E),Y.lightsStateVersion=Se,Y.needsLights&&(ze.ambientLightColor.value=V.state.ambient,ze.lightProbe.value=V.state.probe,ze.directionalLights.value=V.state.directional,ze.directionalLightShadows.value=V.state.directionalShadow,ze.spotLights.value=V.state.spot,ze.spotLightShadows.value=V.state.spotShadow,ze.rectAreaLights.value=V.state.rectArea,ze.ltc_1.value=V.state.rectAreaLTC1,ze.ltc_2.value=V.state.rectAreaLTC2,ze.pointLights.value=V.state.point,ze.pointLightShadows.value=V.state.pointShadow,ze.hemisphereLights.value=V.state.hemi,ze.directionalShadowMap.value=V.state.directionalShadowMap,ze.directionalShadowMatrix.value=V.state.directionalShadowMatrix,ze.spotShadowMap.value=V.state.spotShadowMap,ze.spotLightMatrix.value=V.state.spotLightMatrix,ze.spotLightMap.value=V.state.spotLightMap,ze.pointShadowMap.value=V.state.pointShadowMap,ze.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=qe,Y.uniformsList=null,qe}function pt(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=Ja.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function bt(E,U){const X=Le.get(E);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function Et(E,U,X,Y,V){U.isScene!==!0&&(U=ot),P.resetTextureUnits();const oe=U.fog,Se=Y.isMeshStandardMaterial?U.environment:null,Ne=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:wr,Ue=(Y.isMeshStandardMaterial?z:S).get(Y.envMap||Se),je=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,qe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!X.morphAttributes.position,_t=!!X.morphAttributes.normal,Mt=!!X.morphAttributes.color;let Ut=Ei;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Ut=x.toneMapping);const Nt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=Nt!==void 0?Nt.length:0,Ve=Le.get(Y),Zt=f.state.lights;if(fe===!0&&(Ce===!0||E!==_)){const sn=E===_&&Y.id===C;he.setState(Y,E,sn)}let St=!1;Y.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Zt.state.version||Ve.outputColorSpace!==Ne||V.isBatchedMesh&&Ve.batching===!1||!V.isBatchedMesh&&Ve.batching===!0||V.isBatchedMesh&&Ve.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ve.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ve.instancing===!1||!V.isInstancedMesh&&Ve.instancing===!0||V.isSkinnedMesh&&Ve.skinning===!1||!V.isSkinnedMesh&&Ve.skinning===!0||V.isInstancedMesh&&Ve.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ve.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ve.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ve.instancingMorph===!1&&V.morphTexture!==null||Ve.envMap!==Ue||Y.fog===!0&&Ve.fog!==oe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==he.numPlanes||Ve.numIntersection!==he.numIntersection)||Ve.vertexAlphas!==je||Ve.vertexTangents!==qe||Ve.morphTargets!==ze||Ve.morphNormals!==_t||Ve.morphColors!==Mt||Ve.toneMapping!==Ut||Ve.morphTargetsCount!==yt)&&(St=!0):(St=!0,Ve.__version=Y.version);let Rn=Ve.currentProgram;St===!0&&(Rn=lt(Y,U,V));let Xi=!1,bn=!1,Or=!1;const Tt=Rn.getUniforms(),Sn=Ve.uniforms;if(Ie.useProgram(Rn.program)&&(Xi=!0,bn=!0,Or=!0),Y.id!==C&&(C=Y.id,bn=!0),Xi||_!==E){Ie.buffers.depth.getReversed()?(ve.copy(E.projectionMatrix),ch(ve),uh(ve),Tt.setValue(F,"projectionMatrix",ve)):Tt.setValue(F,"projectionMatrix",E.projectionMatrix),Tt.setValue(F,"viewMatrix",E.matrixWorldInverse);const pn=Tt.map.cameraPosition;pn!==void 0&&pn.setValue(F,Oe.setFromMatrixPosition(E.matrixWorld)),Je.logarithmicDepthBuffer&&Tt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Tt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,bn=!0,Or=!0)}if(V.isSkinnedMesh){Tt.setOptional(F,V,"bindMatrix"),Tt.setOptional(F,V,"bindMatrixInverse");const sn=V.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Tt.setValue(F,"boneTexture",sn.boneTexture,P))}V.isBatchedMesh&&(Tt.setOptional(F,V,"batchingTexture"),Tt.setValue(F,"batchingTexture",V._matricesTexture,P),Tt.setOptional(F,V,"batchingIdTexture"),Tt.setValue(F,"batchingIdTexture",V._indirectTexture,P),Tt.setOptional(F,V,"batchingColorTexture"),V._colorsTexture!==null&&Tt.setValue(F,"batchingColorTexture",V._colorsTexture,P));const wn=X.morphAttributes;if((wn.position!==void 0||wn.normal!==void 0||wn.color!==void 0)&&ke.update(V,X,Rn),(bn||Ve.receiveShadow!==V.receiveShadow)&&(Ve.receiveShadow=V.receiveShadow,Tt.setValue(F,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Sn.envMap.value=Ue,Sn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&U.environment!==null&&(Sn.envMapIntensity.value=U.environmentIntensity),bn&&(Tt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ve.needsLights&&be(Sn,Or),oe&&Y.fog===!0&&pe.refreshFogUniforms(Sn,oe),pe.refreshMaterialUniforms(Sn,Y,W,ue,f.state.transmissionRenderTarget[E.id]),Ja.upload(F,pt(Ve),Sn,P)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ja.upload(F,pt(Ve),Sn,P),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Tt.setValue(F,"center",V.center),Tt.setValue(F,"modelViewMatrix",V.modelViewMatrix),Tt.setValue(F,"normalMatrix",V.normalMatrix),Tt.setValue(F,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const sn=Y.uniformsGroups;for(let pn=0,Ts=sn.length;pn<Ts;pn++){const Ti=sn[pn];O.update(Ti,Rn),O.bind(Ti,Rn)}}return Rn}function be(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function Dt(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,U,X){Le.get(E.texture).__webglTexture=U,Le.get(E.depthTexture).__webglTexture=X;const Y=Le.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const X=Le.get(E);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,X=0){A=E,w=U,T=X;let Y=!0,V=null,oe=!1,Se=!1;if(E){const Ue=Le.get(E);if(Ue.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(F.FRAMEBUFFER,null),Y=!1;else if(Ue.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(Ue.__hasExternalTextures)P.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ze=E.depthTexture;if(Ue.__boundDepthTexture!==ze){if(ze!==null&&Le.has(ze)&&(E.width!==ze.image.width||E.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}const je=E.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Se=!0);const qe=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qe[U])?V=qe[U][X]:V=qe[U],oe=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?V=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(qe)?V=qe[X]:V=qe,L.copy(E.viewport),I.copy(E.scissor),G=E.scissorTest}else L.copy(te).multiplyScalar(W).floor(),I.copy(Ee).multiplyScalar(W).floor(),G=tt;if(Ie.bindFramebuffer(F.FRAMEBUFFER,V)&&Y&&Ie.drawBuffers(E,V),Ie.viewport(L),Ie.scissor(I),Ie.setScissorTest(G),oe){const Ue=Le.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ue.__webglTexture,X)}else if(Se){const Ue=Le.get(E.texture),je=U||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ue.__webglTexture,X||0,je)}C=-1},this.readRenderTargetPixels=function(E,U,X,Y,V,oe,Se){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){Ie.bindFramebuffer(F.FRAMEBUFFER,Ne);try{const Ue=E.texture,je=Ue.format,qe=Ue.type;if(!Je.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-Y&&X>=0&&X<=E.height-V&&F.readPixels(U,X,Y,V,We.convert(je),We.convert(qe),oe)}finally{const Ue=A!==null?Le.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(F.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,U,X,Y,V,oe,Se){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Se!==void 0&&(Ne=Ne[Se]),Ne){const Ue=E.texture,je=Ue.format,qe=Ue.type;if(!Je.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-Y&&X>=0&&X<=E.height-V){Ie.bindFramebuffer(F.FRAMEBUFFER,Ne);const ze=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ze),F.bufferData(F.PIXEL_PACK_BUFFER,oe.byteLength,F.STREAM_READ),F.readPixels(U,X,Y,V,We.convert(je),We.convert(qe),0);const _t=A!==null?Le.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(F.FRAMEBUFFER,_t);const Mt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await lh(F,Mt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ze),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,oe),F.deleteBuffer(ze),F.deleteSync(Mt),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,X=0){E.isTexture!==!0&&(ur("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-X),V=Math.floor(E.image.width*Y),oe=Math.floor(E.image.height*Y),Se=U!==null?U.x:0,Ne=U!==null?U.y:0;P.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,Se,Ne,V,oe),Ie.unbindTexture()};const qt=F.createFramebuffer(),an=F.createFramebuffer();this.copyTextureToTexture=function(E,U,X=null,Y=null,V=0,oe=null){E.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],U=arguments[2],oe=arguments[3]||0,X=null),oe===null&&(V!==0?(ur("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),oe=V,V=0):oe=0);let Se,Ne,Ue,je,qe,ze,_t,Mt,Ut;const Nt=E.isCompressedTexture?E.mipmaps[oe]:E.image;if(X!==null)Se=X.max.x-X.min.x,Ne=X.max.y-X.min.y,Ue=X.isBox3?X.max.z-X.min.z:1,je=X.min.x,qe=X.min.y,ze=X.isBox3?X.min.z:0;else{const wn=Math.pow(2,-V);Se=Math.floor(Nt.width*wn),Ne=Math.floor(Nt.height*wn),E.isDataArrayTexture?Ue=Nt.depth:E.isData3DTexture?Ue=Math.floor(Nt.depth*wn):Ue=1,je=0,qe=0,ze=0}Y!==null?(_t=Y.x,Mt=Y.y,Ut=Y.z):(_t=0,Mt=0,Ut=0);const yt=We.convert(U.format),Ve=We.convert(U.type);let Zt;U.isData3DTexture?(P.setTexture3D(U,0),Zt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(P.setTexture2DArray(U,0),Zt=F.TEXTURE_2D_ARRAY):(P.setTexture2D(U,0),Zt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);const St=F.getParameter(F.UNPACK_ROW_LENGTH),Rn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Xi=F.getParameter(F.UNPACK_SKIP_PIXELS),bn=F.getParameter(F.UNPACK_SKIP_ROWS),Or=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Nt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Nt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,je),F.pixelStorei(F.UNPACK_SKIP_ROWS,qe),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ze);const Tt=E.isDataArrayTexture||E.isData3DTexture,Sn=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const wn=Le.get(E),sn=Le.get(U),pn=Le.get(wn.__renderTarget),Ts=Le.get(sn.__renderTarget);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,pn.__webglFramebuffer),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ts.__webglFramebuffer);for(let Ti=0;Ti<Ue;Ti++)Tt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(E).__webglTexture,V,ze+Ti),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Le.get(U).__webglTexture,oe,Ut+Ti)),F.blitFramebuffer(je,qe,Se,Ne,_t,Mt,Se,Ne,F.DEPTH_BUFFER_BIT,F.NEAREST);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||Le.has(E)){const wn=Le.get(E),sn=Le.get(U);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,qt),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,an);for(let pn=0;pn<Ue;pn++)Tt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,wn.__webglTexture,V,ze+pn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wn.__webglTexture,V),Sn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,sn.__webglTexture,oe,Ut+pn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,sn.__webglTexture,oe),V!==0?F.blitFramebuffer(je,qe,Se,Ne,_t,Mt,Se,Ne,F.COLOR_BUFFER_BIT,F.NEAREST):Sn?F.copyTexSubImage3D(Zt,oe,_t,Mt,Ut+pn,je,qe,Se,Ne):F.copyTexSubImage2D(Zt,oe,_t,Mt,je,qe,Se,Ne);Ie.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Sn?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Zt,oe,_t,Mt,Ut,Se,Ne,Ue,yt,Ve,Nt.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(Zt,oe,_t,Mt,Ut,Se,Ne,Ue,yt,Nt.data):F.texSubImage3D(Zt,oe,_t,Mt,Ut,Se,Ne,Ue,yt,Ve,Nt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,oe,_t,Mt,Se,Ne,yt,Ve,Nt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,oe,_t,Mt,Nt.width,Nt.height,yt,Nt.data):F.texSubImage2D(F.TEXTURE_2D,oe,_t,Mt,Se,Ne,yt,Ve,Nt);F.pixelStorei(F.UNPACK_ROW_LENGTH,St),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Rn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Xi),F.pixelStorei(F.UNPACK_SKIP_ROWS,bn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Or),oe===0&&U.generateMipmaps&&F.generateMipmap(Zt),Ie.unbindTexture()},this.copyTextureToTexture3D=function(E,U,X=null,Y=null,V=0){return E.isTexture!==!0&&(ur("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],U=arguments[3],V=arguments[4]||0),ur('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,X,Y,V)},this.initRenderTarget=function(E){Le.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),Ie.unbindTexture()},this.resetState=function(){w=0,T=0,A=null,Ie.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=xt._getDrawingBufferColorSpace(e),t.unpackColorSpace=xt._getUnpackColorSpace()}}const cd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ir{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Cv=new gl(-1,1,1,-1,0,1);class Tv extends vn{constructor(){super(),this.setAttribute("position",new dn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new dn([0,2,0,0,2,0],2))}}const Av=new Tv;class bl{constructor(e){this._mesh=new Gn(Av,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Pv extends Ir{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ia.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new bl(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Xc extends Ir{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class Rv extends Ir{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Nv{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new st);this._width=i.width,this._height=i.height,t=new Pn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Pv(cd),this.copyPass.material.blending=Wn,this.clock=new zh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),s.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Xc!==void 0&&(s instanceof Xc?i=!0:s instanceof Rv&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new st);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Lv extends Ir{constructor(e,t,i=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new rt}render(e,t,i){const r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const Fv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new rt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Cr extends Ir{constructor(e,t,i,r){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new st(e.x,e.y):new st(256,256),this.clearColor=new rt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Pn(a,s,{type:Xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new Pn(a,s,{type:Xn});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const h=new Pn(a,s,{type:Xn});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),a=Math.round(a/2),s=Math.round(s/2)}const o=Fv;this.highPassUniforms=ia.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new st(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=cd;this.copyUniforms=ia.clone(u.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:yi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new rt,this.oldClearAlpha=1,this.basic=new fl,this.fsQuad=new bl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(i,r);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(i,r),this.renderTargetsVertical[a].setSize(i,r),this.separableBlurMaterials[a].uniforms.invSize.value=new st(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,t,i,r,a){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Cr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=s}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new st(.5,.5)},direction:{value:new st(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}}Cr.BlurDirectionX=new st(1,0);Cr.BlurDirectionY=new st(0,1);const Dv={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class Iv extends Ir{constructor(e,t,i){super(),this.scene=e,this.camera=t;const r=i.focus!==void 0?i.focus:1,a=i.aperture!==void 0?i.aperture:.025,s=i.maxblur!==void 0?i.maxblur:1;this.renderTargetDepth=new Pn(1,1,{minFilter:Mn,magFilter:Mn,type:Xn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new nd,this.materialDepth.depthPacking=Hu,this.materialDepth.blending=Wn;const o=Dv,l=ia.clone(o.uniforms);l.tDepth.value=this.renderTargetDepth.texture,l.focus.value=r,l.aspect.value=t.aspect,l.aperture.value=a,l.maxblur.value=s,l.nearClip.value=t.near,l.farClip.value=t.far,this.materialBokeh=new rn({defines:Object.assign({},o.defines),uniforms:l,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=l,this.fsQuad=new bl(this.materialBokeh),this._oldClearColor=new rt}render(e,t,i){this.scene.overrideMaterial=this.materialDepth,e.getClearColor(this._oldClearColor);const r=e.getClearAlpha(),a=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this.renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=i.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this.fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(r),e.autoClear=a}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this.renderTargetDepth.setSize(e,t)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}class Uv{parse(e){let t="",i=0,r=0,a=0;const s=new H,o=new rt,l=new H,c=new st,u=[];function d(g){let b=0,m=0,f=0;const y=g.geometry,v=new et,x=y.getAttribute("position"),R=y.getAttribute("normal"),w=y.getAttribute("uv"),T=y.getIndex();if(t+="o "+g.name+`
`,g.material&&g.material.name&&(t+="usemtl "+g.material.name+`
`),x!==void 0)for(let A=0,C=x.count;A<C;A++,b++)s.fromBufferAttribute(x,A),s.applyMatrix4(g.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z+`
`;if(w!==void 0)for(let A=0,C=w.count;A<C;A++,f++)c.fromBufferAttribute(w,A),t+="vt "+c.x+" "+c.y+`
`;if(R!==void 0){v.getNormalMatrix(g.matrixWorld);for(let A=0,C=R.count;A<C;A++,m++)l.fromBufferAttribute(R,A),l.applyMatrix3(v).normalize(),t+="vn "+l.x+" "+l.y+" "+l.z+`
`}if(T!==null)for(let A=0,C=T.count;A<C;A+=3){for(let _=0;_<3;_++){const L=T.getX(A+_)+1;u[_]=i+L+(R||w?"/"+(w?r+L:"")+(R?"/"+(a+L):""):"")}t+="f "+u.join(" ")+`
`}else for(let A=0,C=x.count;A<C;A+=3){for(let _=0;_<3;_++){const L=A+_+1;u[_]=i+L+(R||w?"/"+(w?r+L:"")+(R?"/"+(a+L):""):"")}t+="f "+u.join(" ")+`
`}i+=b,r+=f,a+=m}function p(g){let b=0;const m=g.geometry,f=g.type,y=m.getAttribute("position");if(t+="o "+g.name+`
`,y!==void 0)for(let v=0,x=y.count;v<x;v++,b++)s.fromBufferAttribute(y,v),s.applyMatrix4(g.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z+`
`;if(f==="Line"){t+="l ";for(let v=1,x=y.count;v<=x;v++)t+=i+v+" ";t+=`
`}if(f==="LineSegments")for(let v=1,x=v+1,R=y.count;v<R;v+=2,x=v+1)t+="l "+(i+v)+" "+(i+x)+`
`;i+=b}function h(g){let b=0;const m=g.geometry,f=m.getAttribute("position"),y=m.getAttribute("color");if(t+="o "+g.name+`
`,f!==void 0){for(let v=0,x=f.count;v<x;v++,b++)s.fromBufferAttribute(f,v),s.applyMatrix4(g.matrixWorld),t+="v "+s.x+" "+s.y+" "+s.z,y!==void 0&&(o.fromBufferAttribute(y,v),xt.fromWorkingColorSpace(o,yn),t+=" "+o.r+" "+o.g+" "+o.b),t+=`
`;t+="p ";for(let v=1,x=f.count;v<=x;v++)t+=i+v+" ";t+=`
`}i+=b}return e.traverse(function(g){g.isMesh===!0&&d(g),g.isLine===!0&&p(g),g.isPoints===!0&&h(g)}),t}}const Ov="bass-mid-high spacing",kv={inputGain:.77,freqNormMin:20,freqNormMax:6e3,fftSize:16384,binMagnitudeNormMin:-120,binMagnitudeNormMax:-25,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:60,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"hue",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",input:"normFreq"}],order:0},{id:"saturateion",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",input:"binRMSEnergy"}],order:1},{id:"x bass",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"(bass-0.5)*5000"}],order:2},{id:"y mid",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(mid-0.5)*5000"}],order:3},{id:"y mid-2",group:"SPACING",subgroup:"y coordinate",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(normFreq+0.5)"}],order:4},{id:"z high",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"(high-0.5)*5000"}],order:5},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:6},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",input:"binMagnitude"}],order:7},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 4"}],order:8},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:9}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Bv={name:Ov,params:kv},zv="dob elkülönítve--history",Vv={inputGain:.78,freqNormMin:64,freqNormMax:16e3,fftSize:16384,binMagnitudeNormMin:-120,binMagnitudeNormMax:-15,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:40,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:0},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:1},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:2},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:3},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:4},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:5},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:6},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:7},{id:"ear correction",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"opacity",expression:"(normFreq) * 2"}],order:8},{id:"ear correction-2",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"opacity",expression:"(normFreq) * 1"}],order:9},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",input:"binMagnitude"}],order:10},{id:"green",group:"Appearance",subgroup:"color",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",input:"pan"}],order:11},{id:"red",group:"Appearance",subgroup:"color",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"red",input:"inharmonicity"}],order:12},{id:"blue",group:"Appearance",subgroup:"color",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",value:1}],order:13},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:14},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 2"}],order:15},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:16}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Hv={name:zv,params:Vv},Gv="experiment",Wv={inputGain:.77,freqNormMin:20,freqNormMax:6e3,fftSize:16384,binMagnitudeNormMin:-120,binMagnitudeNormMax:-25,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:60,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"alpha",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"x-set",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",expression:"1 / max(1e-6, (binMagnitude))"}],order:0},{id:"x-set-2",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"spectralFlux"}],order:1},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:2},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:3},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1"}],order:4},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:5},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:6},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:7},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:8},{id:"ear correction",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"opacity",expression:"(normFreq) * 2"}],order:9},{id:"ear correction-2",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"opacity",expression:"(normFreq) * 1"}],order:10},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",input:"binMagnitude"}],order:11},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"(normFreq) * 360000"}],order:12},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:13},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 2"}],order:14},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:15}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Xv={name:Gv,params:Wv},qv="experiment2",Yv={inputGain:.79,freqNormMin:64,freqNormMax:5e3,fftSize:16384,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"hsv pitch",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hsv",expression:"hsv((notePitchClass/12)*360, 90, 65)"}],order:0},{id:"x-set-time",group:"SPACING / x coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"(time/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"y-set-norm-frequency",group:"SPACING / y coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(zeroCrossingRate*20-0.5)*canvasHeightPx"}],order:2},{id:"amplitude brightness",group:"Appearance / brightness",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*2"}],order:3},{id:"thinning",group:"Appearance / brightness",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*2"}],order:4},{id:"background saturation",group:"Default / background color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:5},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:7},{id:"luma",group:"",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",expression:"normFreq*255"}],order:8},{id:"z stereo",group:"SPACING / group-1",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"(pan)*canvasHeightPx"}],order:9}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"camera",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},jv={name:qv,params:Yv},$v="holistic 3d",Zv={inputGain:.3,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:2e3,canvasScale:40,maxParticles:262144,blendMode:"screen",cameraProjection:"perspective",cameraAxoPreset:"topXZ",persistMode:1,ruleBlocks:[{id:"brightness",group:"Appearance",subgroup:"brightness",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"hue",expression:"(spectralCentroid) * 255"}],order:0},{id:"ear correction",group:"Appearance",subgroup:"brightness",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"opacity",expression:"(normFreq) * 2"}],order:1},{id:"ear correction-2",group:"Appearance",subgroup:"brightness",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"opacity",expression:"(normFreq) * 1"}],order:2},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",input:"binMagnitude"}],order:3},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"10 / max(1e-6, (spectralFlatness))"}],order:4},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(spectralCentroid) * 10"}],order:5},{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:6},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:7},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"1 / max(1e-6, (normFreq))"}],order:8},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:9},{id:"stereo x",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"pan"}],order:10},{id:"multiply by canv width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:11},{id:"inv. multiply freq",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"2000 / max(1e-6, (frequencyHz))"}],order:12},{id:"y freq",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:13},{id:"y - 0.5",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.35}],order:14},{id:"mult by canv height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1.8"}],order:15},{id:"z amp",group:"SPACING",subgroup:"z coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"-spectralFlatness * spectralCentroid * 10000"}],order:16},{id:"z-5000",group:"SPACING",subgroup:"z coordinate",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"z",value:2500}],order:17}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],freqNormMin:100,freqNormMax:2e3,binFluxNormMin:0,binPhaseDeviationNormMin:0,spectralFlatnessNormMax:1,binMagnitudeNormMin:-70,binAttackTimeNormMax:500,spectralFlatnessNormMin:0,globalRmsNormMin:-60,globalSpectralFluxNormMax:100,spectralCentroidNormMin:150,binPhaseDeviationNormMax:3.14,globalRmsNormMax:0,globalSpectralFluxNormMin:0,binMagnitudeNormMax:0,spectralCentroidNormMax:8e3,binFluxNormMax:.5,binAttackTimeNormMin:5,fftSize:2048,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,cameraAngleOfView:55,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Kv={name:$v,params:Zv},Jv="linear basic scriabin colors",Qv={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:40,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"rule-16",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hsv",expression:"hsv((notePitchClass/12)*360, 90, 65)"}],order:0},{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:1},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:2},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:3},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:4},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:5},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:6},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:7},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:8},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*2"}],order:9},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"(normFreq) * 360000"}],order:10},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:11},{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:12},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:13},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:14},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:15}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],_disabled:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},eb={name:Jv,params:Qv},tb="linear basic",nb={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:40,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:0},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:1},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:2},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:3},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:4},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:5},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:6},{id:"amplitude brightness",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",input:"binMagnitude"}],order:7},{id:"thinning",group:"Appearance",subgroup:"brightness",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*2"}],order:8},{id:"hue",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"(normFreq) * 360000"}],order:9},{id:"saturation",group:"Appearance",subgroup:"color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"(binMagnitude) * 10"}],order:10},{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:11},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:12},{id:"soft",group:"Appearance",subgroup:"size",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:13},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:14}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},ib={name:tb,params:nb},rb="linear colors",ab={inputGain:.79,freqNormMin:64,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:3e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"hsv pitch",group:"",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hsv",expression:"hsv((notePitchClass/12)*360, 90, 65)"}],order:0},{id:"x-set-time",group:"SPACING / x coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"(time/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"y-set-norm-frequency",group:"SPACING / y coordinate",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:2},{id:"amplitude brightness",group:"Appearance / brightness",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*2"}],order:3},{id:"thinning",group:"Appearance / brightness",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",input:"binMagnitude"}],order:4},{id:"background saturation",group:"Default / background color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:5},{id:"soft",group:"Appearance / size",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) * 6"}],order:6},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:7},{id:"luma",group:"",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",expression:"normFreq*255"}],order:8}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},sb={name:rb,params:ab},ob="linear timbre colors",lb={inputGain:1.37,freqNormMin:16,freqNormMax:1e4,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:70,binAttackTimeNormMax:748,globalRmsNormMin:-63,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:2751488,particlesByFrame:5e3,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"topXZ",persistMode:1,ruleBlocks:[{id:"z-set-norm-frequency",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"-(normFreq*1.4-0.9)*canvasHeightPx"}],order:0},{id:"bass z norm freq",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"z",expression:"(normFreq*3.5-0.5)*canvasHeightPx"}],order:1},{id:"x-set-time",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"((time)/audioLengthSec-0.5)*canvasWidthPx"}],order:2},{id:"y magnitude",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"binMagnitude*canvasHeightPx*0.5"}],order:3},{id:"bass z norm freq-2",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"y",expression:"-binMagnitude*canvasHeightPx*0.5"}],order:4},{id:"hue",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"red",expression:"binAttackTime*10"}],order:5},{id:"hue-3",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"binFlux*10"}],order:6},{id:"hue-2",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",input:"binPhaseDeviation"}],order:7},{id:"bass red",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"hue",input:"binFlux"}],order:8},{id:"red",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"red",input:"spectralCentroid"}],order:9},{id:"green",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",expression:"1-pow(binPhaseDeviation, 0.3)"}],order:10},{id:"blue",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"pow(binPhaseDeviation, 0.3)"}],order:11},{id:"luma",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:12},{id:"size",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:">",input:"frequencyHz",value:100},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) *2"}],order:13},{id:"bass bigger",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"size",expression:"pow((binMagnitude+1), 6)"}],order:14},{id:"bass transparent",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"opacity",expression:"pow(binMagnitude, 3)"}],order:15},{id:"shape",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:16},{id:"amplitude brightness",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:">",input:"frequencyHz",value:100},actions:[{operator:"set",output:"brightness",expression:"(binRMSEnergy)*(1+binPhaseDeviation*3)"}],order:17},{id:"brightness bass",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<=",input:"frequencyHz",value:100},actions:[{operator:"set",output:"brightness",expression:"(binRMSEnergy)*(1+binPhaseDeviation*3)*0.25"}],order:18},{id:"thinning",group:"count",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"0.2*binMagnitude"}],order:19},{id:"saturation",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"pow((binPhaseDeviation+1-spectralRolloff)*0.5, 1.4)"}],order:20}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::count","spawnedParticles::Appearance","spawnedParticles::SPACING"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},cb={name:ob,params:lb},ub="pan frequency perceptual timbre",db={inputGain:.91,freqNormMin:20,freqNormMax:4e3,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"y-set-norm-frequency",group:"LINEAR SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:0},{id:"x-set-time",group:"LINEAR SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"(time/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"z coordinate",group:"LINEAR SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"normFreq-1-time"}],order:2},{id:"hue",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",input:"binPhaseDeviation"}],order:3},{id:"red",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"red",input:"notePitchClass"}],order:4},{id:"green",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",input:"mid"}],order:5},{id:"blue",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",input:"bass"}],order:6},{id:"luma",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:7},{id:"size",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) *2"}],order:8},{id:"shape",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:9},{id:"amplitude brightness",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*1.5"}],order:10},{id:"thinning",group:"count",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",input:"binMagnitude"}],order:11},{id:"saturation",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"1-spectralRolloff"}],order:12}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::count","spawnedParticles::Appearance"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"SPACING",selectedGroupName:"SPACING",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},pb={name:ub,params:db},hb="rule__default rules",fb={inputGain:.3,defaultParticleSize:8.5,canvasWidth:4e3,canvasHeight:1500,canvasScale:30,maxParticles:1999872,blendMode:"screen",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"background hue",group:"Default",subgroup:"background color",enabled:!1,target:"background",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"hue",value:50}],order:0},{id:"background saturation",group:"Default",subgroup:"background color",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",value:50}],order:1},{id:"shape",group:"Default",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"allLivingFrame",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:2}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],freqNormMin:64,freqNormMax:12e3,binFluxNormMin:0,binPhaseDeviationNormMin:0,spectralFlatnessNormMax:1,binMagnitudeNormMin:-70,binAttackTimeNormMax:500,spectralFlatnessNormMin:0,globalRmsNormMin:-60,globalSpectralFluxNormMax:100,spectralCentroidNormMin:150,binPhaseDeviationNormMax:3.14,globalRmsNormMax:0,globalSpectralFluxNormMin:0,binMagnitudeNormMax:0,spectralCentroidNormMax:8e3,binFluxNormMax:.5,binAttackTimeNormMin:5,fftSize:2048,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,cameraAngleOfView:55,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},mb={name:hb,params:fb},gb="rule__linear space",vb={inputGain:.3,defaultParticleSize:1,canvasWidth:1256,canvasHeight:701,maxParticles:1999872,blendMode:"screen",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"x-set-time",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",input:"time"}],order:0},{id:"x-divide-by-audio-length",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"divide",output:"x",expression:"(audioLengthSec) * 1.12"}],order:1},{id:"y-set-norm-frequency",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",input:"normFreq"}],order:2},{id:"y-center-around-zero",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"y",value:.5}],order:3},{id:"y-scale-to-canvas-height",group:"SPACING",subgroup:"y coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"y",expression:"(canvasHeightPx) * 1"}],order:4},{id:"x-center-around-zero",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"subtract",output:"x",value:.5}],order:5},{id:"x-scale-to-canvas-width",group:"SPACING",subgroup:"x coordinate",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"x",expression:"(canvasWidthPx) * 1"}],order:6}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],freqNormMin:64,freqNormMax:2e4,binFluxNormMin:0,binPhaseDeviationNormMin:0,spectralFlatnessNormMax:1,binMagnitudeNormMin:-70,binAttackTimeNormMax:500,spectralFlatnessNormMin:0,globalRmsNormMin:-60,globalSpectralFluxNormMax:100,spectralCentroidNormMin:150,binPhaseDeviationNormMax:3.14,globalRmsNormMax:0,globalSpectralFluxNormMin:0,binMagnitudeNormMax:0,spectralCentroidNormMax:8e3,binFluxNormMax:.5,binAttackTimeNormMin:5,fftSize:2048,canvasScale:100,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,cameraAngleOfView:55,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},bb={name:gb,params:vb},_b="textured timbre colors",xb={inputGain:.91,freqNormMin:16,freqNormMax:2e4,fftSize:16384,binMagnitudeNormMin:-90,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:1,canvasWidth:2e3,canvasHeight:1e3,canvasScale:55,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:1999872,particlesByFrame:5e3,blendMode:"source-over",cameraProjection:"axonometric",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"y-set-norm-frequency",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(normFreq-0.5)*canvasHeightPx"}],order:0},{id:"x-set-time",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"((time+10*binMagnitude)/audioLengthSec-0.5)*canvasWidthPx"}],order:1},{id:"z coordinate",group:"SPACING",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"normFreq-1-time"}],order:2},{id:"hue",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",input:"binPhaseDeviation"}],order:3},{id:"red",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"red",input:"spectralCentroid"}],order:4},{id:"green",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"blue",expression:"1-pow(binPhaseDeviation, 0.3)"}],order:5},{id:"blue",group:"color",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"green",expression:"pow(binPhaseDeviation, 0.3)"}],order:6},{id:"luma",group:"color",subgroup:"",enabled:!1,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"luma",value:255}],order:7},{id:"size",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"multiply",output:"size",expression:"(binMagnitude) *2"}],order:8},{id:"shape",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"shapeType",value:"circle"}],order:9},{id:"amplitude brightness",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"brightness",expression:"binMagnitude*1.5"}],order:10},{id:"thinning",group:"count",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"particleCount",expression:"binMagnitude*0.5"}],order:11},{id:"saturation",group:"Appearance",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"1-spectralRolloff"}],order:12}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[{id:"palette-1",name:"Palette 1",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]},{id:"palette-4",name:"Palette 4",type:"discrete",colors:[[254,0,0],[255,120,1],[255,220,0],[151,255,2],[1,255,80],[1,255,220],[0,160,255],[40,80,255],[120,0,255],[220,0,255],[254,0,149],[255,0,60]]}],ruleUiState:{collapsedGroups:["spawnedParticles::Appearance / brightness","spawnedParticles::Appearance / size","spawnedParticles::Default","spawnedParticles::Appearance"],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"color",selectedGroupName:"color",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},yb={name:_b,params:xb},Mb="timbral constellation abstract clustering",Sb={inputGain:1,defaultParticleSize:2,canvasWidth:2400,canvasHeight:1400,canvasScale:52,maxParticles:2e6,blendMode:"screen",cameraProjection:"perspective",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"gatekeeper-low-bin-magnitude",group:"GATE",subgroup:"gatekeeper",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"<",input:"binMagnitude",value:.1},actions:[{operator:"set",output:"opacity",value:0},{operator:"set",output:"particleCount",value:0}],order:0},{id:"x-from-bin-flux",group:"SPATIAL",subgroup:"X",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"binFlux * (canvasWidthPx) * 0.45"}],order:1},{id:"y-from-bin-phase-deviation",group:"SPATIAL",subgroup:"Y",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(binPhaseDeviation - 0.5) * (canvasHeightPx) * 0.95"}],order:2},{id:"z-depth-from-normfreq",group:"SPATIAL",subgroup:"Z",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"(1 - normFreq) * max(canvasWidthPx, canvasHeightPx) * 0.32"}],order:3},{id:"hue-from-bin-flux",group:"COLOR",subgroup:"HUE",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"clamp((binFlux + 1) * 0.5, 0, 1)"}],order:4},{id:"saturation-invert-phase-deviation",group:"COLOR",subgroup:"SATURATION",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"clamp(1 - binPhaseDeviation, 0, 1)"}],order:5},{id:"size-from-bin-magnitude",group:"APPEARANCE",subgroup:"SIZE",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"size",expression:"0.2 + binMagnitude * 6"}],order:6},{id:"opacity-from-bin-magnitude",group:"APPEARANCE",subgroup:"OPACITY",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"opacity",expression:"clamp(binMagnitude * 1.35, 0, 1)"}],order:7}],ruleEngineEnabled:!0,ruleSchemaVersion:1,_disabled:[],freqNormMin:64,freqNormMax:2e4,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,globalRmsNormMin:-60,globalRmsNormMax:0,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,binAttackTimeNormMin:5,binAttackTimeNormMax:500,fftSize:2048,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""},fluxWindowFrames:10,particlesByFrame:1e3,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,cameraAngleOfView:55,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},wb={name:Mb,params:Sb},Eb="timbral constellation",Cb={inputGain:1,freqNormMin:64,freqNormMax:2e4,fftSize:2048,binMagnitudeNormMin:-70,binMagnitudeNormMax:0,binFluxNormMin:0,binFluxNormMax:.5,binPhaseDeviationNormMin:0,binPhaseDeviationNormMax:3.14,binAttackTimeNormMin:5,binAttackTimeNormMax:500,globalRmsNormMin:-60,globalRmsNormMax:0,spectralCentroidNormMin:150,spectralCentroidNormMax:8e3,globalSpectralFluxNormMin:0,globalSpectralFluxNormMax:100,spectralFlatnessNormMin:0,spectralFlatnessNormMax:1,defaultParticleSize:2,canvasWidth:2400,canvasHeight:1400,canvasScale:52,defaultBackgroundHue:0,defaultBackgroundSaturation:0,defaultBackgroundLightness:0,maxParticles:2e6,particlesByFrame:1e3,blendMode:"alpha",cameraProjection:"perspective",cameraAxoPreset:"orthoXY",persistMode:1,ruleBlocks:[{id:"x-from-bin-flux",group:"SPATIAL / X",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"x",expression:"binFlux * (canvasWidthPx)"}],order:0},{id:"y-from-bin-phase-deviation",group:"SPATIAL / Y",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"y",expression:"(binPhaseDeviation - 0.5) * (canvasHeightPx) * 0.95"}],order:1},{id:"z-depth-from-normfreq",group:"SPATIAL / Z",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"z",expression:"deltaTime*10*canvasHeightPx"}],order:2},{id:"hue-from-bin-flux",group:"COLOR / HUE",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"hue",expression:"clamp((normFreq), 0, 1)"}],order:3},{id:"saturation-invert-phase-deviation",group:"COLOR / SATURATION",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"saturation",expression:"clamp(1 - binPhaseDeviation, 0, 1)"}],order:4},{id:"size-from-bin-magnitude",group:"APPEARANCE / SIZE",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"size",expression:"0.2 + binMagnitude * 6"}],order:5},{id:"opacity-from-bin-magnitude",group:"APPEARANCE / OPACITY",subgroup:"",enabled:!0,target:"spawnedParticles",scope:"spawnedOnly",condition:{operator:"always"},actions:[{operator:"set",output:"opacity",expression:"clamp(binMagnitude * 1.35, 0, 1)"}],order:6}],ruleEngineEnabled:!0,ruleSchemaVersion:1,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:"",standaloneGroups:[]},_disabled:[],cameraAngleOfView:104,fluxWindowFrames:10,cameraPosX:0,cameraPosY:0,cameraPosZ:420,cameraTargetX:0,cameraTargetY:0,cameraTargetZ:0,postProcessEnabled:1,bloomEnabled:1,bloomStrength:1.15,bloomRadius:.7,bloomThreshold:.18,bokehEnabled:1,bokehFocus:380,bokehAperture:12e-5,bokehMaxBlur:.01},Tb={name:Eb,params:Cb},Ab={menu:{file:"File",view:"View",settings:"Settings",rules:"Rules",collapse:"Collapse"},file:{project:"Project",projectNew:"New Project",projectLoad:"Load",projectSave:"Save",projectSaveAs:"Save As",presets:"Presets",presetLoad:"Load",presetSave:"Save",presetSaveProject:"Save",presetSaveLocal:"Save Local",presetRemove:"Remove",presetSelectPlaceholder:"Select preset",presetNamePlaceholder:"Preset name",export:"Export",exportImage:"PNG",exportImageNoBg:"PNG transparent",exportVideo:"Video",exportObj:"OBJ"},view:{canvasSize:"Canvas Size",width:"Width",height:"Height",canvasZoom:"Canvas Zoom %",backgroundColor:"Background Color",cameraPosition:"Camera Position",cameraTarget:"Camera Target",cameraReset:"Reset Camera",cameraFit:"Fit",cameraClean:"Clean",projection:"Projection",projectionAxo:"Axonometry",projectionPerspective:"Perspective",axoPreset:"Axo Preset",axoIsometric:"Isometry",axoOrthoXY:"Orthogonal XY",axoOrthoXZ:"Orthogonal XZ",axoOrthoYZ:"Orthogonal YZ",angleOfView:"Angle Of View",blending:"Blending",postProcessing:"Post-Processing",postProcessingEnabled:"Enable Post-Processing",bloomEnabled:"Bloom Enabled",bloomStrength:"Bloom Strength",bloomRadius:"Bloom Radius",bloomThreshold:"Bloom Threshold",bokehEnabled:"Bokeh Enabled",bokehFocus:"Bokeh Focus",bokehAperture:"Bokeh Aperture",bokehMaxBlur:"Bokeh Max Blur",guides:"Guides",guideAxes:"Origin Axes",guideCoordinates:"Coordinate Guides"},settings:{sensitivity:"Sensitivity",audioResolution:"Audio Resolution",particleDefaultSize:"Particle Default Size",particleCapacity:"Particle Capacity",spawnRate:"Spawn Rate",activityInterval:"Activity Interval",frequencyRange:"Frequency Range",volume:"Volume",instability:"Instability",attackSharpness:"Attack Sharpness",energy:"Energy",sharpness:"Sharpness",activity:"Activity",noisiness:"Noisiness",sliders:"Sliders",normalizationRanges:"Normalization Ranges",resetDefaults:"Reset Defaults"},rules:{title:"Rules",condition:"Condition",addCondition:"If",when:"When",selectValue:"Select value",removeCondition:"Remove condition",always:"always",expression:"Expression",detailVariable:"Detail Variable",overallVariable:"Overall Variable",targetParticles:"Particles",targetLines:"Lines",targetBackground:"Background",targetCamera:"Camera",undefined:"undefined",insertVariable:"Insert variable...",detailVariables:"Detail Variables",overallVariables:"Overall Variables",mathPlaceholder:"Type math or number and add",addMath:"Add Math",clearTokens:"Clear",tokenEditorPlaceholder:"Build expression with variables and math actions",insertHere:"Insert",insertToken:"Insert token...",number:"Number",mathActions:"Math Actions",mathValue:"Value",mathAdd:"Add",mathSubtract:"Subtract",mathMultiply:"Multiply",mathDivide:"Divide",mathParentheses:"Parentheses"}},Pb=[{id:"binMagnitude",group:"detail",label:"Detail Volume",legacyName:"binMagnitude",description:"Per-frequency volume of the current bin."},{id:"binRMSEnergy",group:"detail",label:"Detail Energy",legacyName:"binRMSEnergy",description:"Per-frequency RMS energy for the current bin."},{id:"frequencyHz",group:"detail",label:"Frequency Hz",legacyName:"frequencyHz",description:"Physical frequency measured in Hz."},{id:"normFreq",group:"detail",label:"Frequency Normalized",legacyName:"normFreq",description:"Physical frequency normalized into a 0-1 range."},{id:"notePitchClass",group:"detail",label:"Musical Note",legacyName:"notePitchClass",description:"High value means a higher note within the chromatic scale."},{id:"pan",group:"detail",label:"Pan",legacyName:"pan",description:"Left-to-right stereo value."},{id:"octave",group:"detail",label:"Octave",legacyName:"octave",description:"High value means a higher register."},{id:"binAttackTime",group:"detail",label:"Attack Sharpness",legacyName:"binAttackTime",description:"High value means a very fast, snappy start to the sound."},{id:"binEnvelope",group:"detail",label:"Envelope",legacyName:"binEnvelope",description:"High value means the sound is currently at its loudest point in its cycle."},{id:"binEnvelopeState",group:"detail",label:"Envelope State",legacyName:"binEnvelopeState",description:"Current ADSR phase of a specific frequency bin."},{id:"binFlux",group:"detail",label:"Activity",legacyName:"binFlux",description:"High value means the sound or tone is changing rapidly."},{id:"binPhase",group:"detail",label:"Phase",legacyName:"binPhase",description:"High value means the wave is at the top of its cycle."},{id:"binPhaseDeviation",group:"detail",label:"Instability",legacyName:"binPhaseDeviation",description:"High value means phase is shifting unpredictably."},{id:"amplitude",group:"overall",label:"Volume",legacyName:"amplitude",description:"Volume of the current frame."},{id:"high",group:"overall",label:"High Tones",legacyName:"high",description:"Volume of the high frequency range."},{id:"mid",group:"overall",label:"Mid Tones",legacyName:"mid",description:"Volume of the mid frequency range."},{id:"bass",group:"overall",label:"Low Tones",legacyName:"bass",description:"Volume of the low frequency range."},{id:"deltaTime",group:"overall",label:"Delta Time",legacyName:"deltaTime",description:"Elapsed time between current frame and previous frame."},{id:"peakFreq",group:"overall",label:"Peak Frequency",legacyName:"peakFreq",description:"How high the loudest detected frequency is."},{id:"time",group:"overall",label:"Current Time",legacyName:"time",description:"Timestamp of the audio file."},{id:"chromagram",group:"overall",label:"Complexity",legacyName:"chromagram",description:"High value means a rich multi-note harmonic profile."},{id:"globalRmsEnergy",group:"overall",label:"Energy",legacyName:"globalRmsEnergy",description:"Average volume of the current frame."},{id:"inharmonicity",group:"overall",label:"Dissonance",legacyName:"inharmonicity",description:"High value means overtones are out of tune with the fundamental."},{id:"peakAmplitude",group:"overall",label:"Peak Volume",legacyName:"peakAmplitude",description:"High value means the loudest point is near maximum."},{id:"spectralCentroid",group:"overall",label:"Sharpness",legacyName:"spectralCentroid",description:"High value means a high-frequency dominant sound."},{id:"spectralFlatness",group:"overall",label:"Noisiness",legacyName:"spectralFlatness",description:"High value means noisy; low value means pure tone."},{id:"spectralFlux",group:"overall",label:"Activity",legacyName:"spectralFlux",description:"High value means sound is changing rapidly."},{id:"spectralRolloff",group:"overall",label:"Brightness",legacyName:"spectralRolloff",description:"High value means the sound includes many high frequencies."},{id:"spectralSkewness",group:"overall",label:"Imbalance",legacyName:"spectralSkewness",description:"High value means energy is weighted toward one end of the spectrum."},{id:"spectralSpread",group:"overall",label:"Spread",legacyName:"spectralSpread",description:"High value means the sound covers a wide frequency spread."},{id:"zeroCrossingRate",group:"overall",label:"Rattle",legacyName:"zeroCrossingRate",description:"High value means sharp high-frequency clatter."},{id:"canvasHeightPx",group:"overall",label:"Canvas Height",legacyName:"canvasHeightPx",description:"Canvas height measured in pixels."},{id:"canvasWidthPx",group:"overall",label:"Canvas Width",legacyName:"canvasWidthPx",description:"Canvas width measured in pixels."},{id:"audioLengthSec",group:"overall",label:"Audio Length",legacyName:"audioLengthSec",description:"Audio file length measured in seconds."}],Rb={uiText:Ab,ruleVariables:Pb},ud=Rb,Ur=Object.freeze(ud.ruleVariables||[]),re=Object.freeze(ud.uiText||{});function Tr(n){return Ur.filter(e=>e.group===n)}function Yo(n){return Ur.find(e=>e.id===n)||null}const Nb=Object.freeze({binMagnitude:[0,1],binPhase:[0,1],binFlux:[-1,1],binPhaseDeviation:[0,1],binAttackTime:[0,1],binEnvelope:[0,3],binEnvelopeState:[0,3],binRMSEnergy:[0,1],frequencyHz:[0,22050],notePitchClass:[0,11],octave:[-2,12],normFreq:[0,1],pan:[-1,1],amplitude:[0,1],bass:[0,1],mid:[0,1],high:[0,1],peakFreq:[0,22050],globalRmsEnergy:[0,1],peakAmplitude:[0,1],zeroCrossingRate:[0,1],spectralCentroid:[0,1],spectralFlux:[0,1],spectralFlatness:[0,1],spectralRolloff:[0,1],spectralSpread:[0,1],spectralSkewness:[0,1],chromagram:[0,1],inharmonicity:[0,1],time:[0,Number.POSITIVE_INFINITY],deltaTime:[0,1],canvasWidthPx:[0,Number.POSITIVE_INFINITY],canvasHeightPx:[0,Number.POSITIVE_INFINITY],audioLengthSec:[0,Number.POSITIVE_INFINITY]}),Lb=Ur.map(n=>({id:n.id,type:"number",range:Nb[n.id]||[0,1],category:n.group,label:n.label,legacyName:n.legacyName,description:n.description})),Fb=[{id:"x",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"y",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"z",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles","camera"]},{id:"zoom",type:"number",range:[.05,32],targets:["camera"]},{id:"targetX",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetY",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"targetZ",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["camera"]},{id:"angleOfView",type:"number",range:[20,120],targets:["camera"]},{id:"size",type:"number",range:[0,Number.POSITIVE_INFINITY],targets:["spawnedParticles","allParticles"]},{id:"red",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"green",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"blue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"luma",type:"number",range:[0,255],targets:["spawnedParticles","allParticles","lines","background"]},{id:"rgb",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"hue",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"saturation",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"brightness",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines","background"]},{id:"hsv",type:"vector",size:3,targets:["spawnedParticles","allParticles","lines","background"]},{id:"opacity",type:"number",range:[0,1],targets:["spawnedParticles","allParticles","lines"]},{id:"particleCount",type:"number",range:[0,1],targets:["spawnedParticles"]},{id:"shapeType",type:"enum",values:["square","circle"],targets:["spawnedParticles","allParticles"]},{id:"xStart",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"xEnd",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"yStart",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"yEnd",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"zStart",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"zEnd",type:"number",range:[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY],targets:["lines"]},{id:"thickness",type:"number",range:[0,64],targets:["lines"]},{id:"lineCount",type:"number",range:[0,1],targets:["lines"]}],_l=Object.freeze(["spawnedParticles","allParticles","lines","background","camera"]),dd=Object.freeze(["spawnedOnly","allLivingFrame"]),pd=Object.freeze(["set","add","subtract","multiply","divide","clamp"]),hd=Object.freeze(["always",">",">=","<","<=","==","!="]),bs=Object.freeze({version:1,entries:Object.freeze(Lb.map(n=>Object.freeze({...n})))}),xl=Object.freeze({version:1,entries:Object.freeze(Fb.map(n=>Object.freeze({...n})))});new Map(bs.entries.map(n=>[n.id,n]));new Map(xl.entries.map(n=>[n.id,n]));function Db(){return bs}function Ib(n){let e=0;for(let t=0;t<n.length;t++){const i=n[t];if(i==="("&&e++,i===")"&&(e--,e<0))return!1}return e===0}function Ub(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function qc(n,e){if(typeof n!="string")return null;const t=Ub(n);if(!t)return"Expression cannot be empty.";if(!/^[0-9A-Za-z_+\-*/%().,\s<>!=&|?:\[\]'\"]+$/.test(t))return"Expression contains unsupported characters.";if(!Ib(t))return"Expression has unbalanced parentheses.";const i=new Set([...e.keys(),"clamp","lerp","smoothstep","pow","min","max","abs","palette","gradient","matchLuma","rgb","hsv","PI","E","true","false"]),a=t.replace(/'[^'\\]*(?:\\.[^'\\]*)*'/g," ").replace(/"[^"\\]*(?:\\.[^"\\]*)*"/g," ").match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const s of a)if(!i.has(s))return`Expression references unknown identifier: ${s}`;return null}function fd(n){return _l.includes(n==null?void 0:n.target)?n.target:String((n==null?void 0:n.context)||"").toLowerCase().includes("line")?"lines":(n==null?void 0:n.scope)==="spawnedOnly"?"spawnedParticles":(n==null?void 0:n.scope)==="allLivingFrame"?"allParticles":"spawnedParticles"}function Ob(n,e){return(Array.isArray(n==null?void 0:n.targets)?n.targets:_l).includes(e)}function kb(n,e={input:bs,output:xl}){var d,p,h,g,b;const t=[],i=[],r=[],a=new Map((((d=e.input)==null?void 0:d.entries)??[]).map(m=>[m.id,m])),s=new Map((((p=e.output)==null?void 0:p.entries)??[]).map(m=>[m.id,m]));if(!n||typeof n!="object")return{ok:!1,errors:["Rule must be an object."],warnings:i,contradictions:r};dd.includes(n.scope)||t.push(`Unknown scope: ${String(n.scope)}`);const o=fd(n);if(_l.includes(o)||t.push(`Unknown target: ${String(n==null?void 0:n.target)}`),(h=n.condition)!=null&&h.operator&&!hd.includes(n.condition.operator)&&t.push(`Unknown condition operator: ${String(n.condition.operator)}`),((g=n.condition)==null?void 0:g.expression)!==void 0){const m=qc(n.condition.expression,a);m&&t.push(`Condition expression invalid: ${m}`)}const l=(b=n.condition)==null?void 0:b.input;l&&!a.has(l)&&t.push(`Unknown condition input: ${l}`);const c=Array.isArray(n.actions)?n.actions:[],u=new Map;return c.forEach((m,f)=>{const y=m==null?void 0:m.output;if(!y||!s.has(y)){t.push(`Unknown action output at index ${f}: ${String(y)}`);return}const v=s.get(y);if(Ob(v,o)||t.push(`Output ${y} is not valid for target ${o} at index ${f}`),m!=null&&m.operator&&!pd.includes(m.operator)&&t.push(`Unknown action operator at index ${f}: ${String(m.operator)}`),v.type==="enum"&&(m==null?void 0:m.value)!==void 0&&!v.values.includes(m.value)&&t.push(`Invalid enum value for ${y} at index ${f}: ${String(m.value)}. Allowed: ${v.values.join("|")}`),(m==null?void 0:m.operator)==="set"){const R=u.get(y);R!==void 0&&(r.push({type:"sameRuleSetConflict",color:"red",output:y,overriddenActionIndex:R,winningActionIndex:f,resolution:"latter-executes"}),i.push(`Contradiction on ${y}: action ${f} overrides action ${R}.`)),u.set(y,f)}const x=m==null?void 0:m.input;if(x&&!a.has(x)&&t.push(`Unknown action input at index ${f}: ${x}`),(m==null?void 0:m.expression)!==void 0){const R=qc(m.expression,a);R&&t.push(`Action expression invalid at index ${f}: ${R}`)}}),{ok:t.length===0,errors:t,warnings:i,contradictions:r}}function md(n,e={input:bs,output:xl}){const t=Array.isArray(n)?n:[],i=[],r=[];return t.forEach((a,s)=>{var c,u,d;const o={id:typeof(a==null?void 0:a.id)=="string"&&a.id.trim()?a.id.trim():`rule-${s}`,group:typeof(a==null?void 0:a.group)=="string"?a.group:"",subgroup:typeof(a==null?void 0:a.subgroup)=="string"?a.subgroup:"",enabled:(a==null?void 0:a.enabled)!==!1,target:fd(a),scope:dd.includes(a==null?void 0:a.scope)?a.scope:"spawnedOnly",condition:a!=null&&a.condition&&typeof a.condition=="object"?{...a.condition}:{operator:"always"},actions:Array.isArray(a==null?void 0:a.actions)?a.actions.map(p=>({...p})):[],order:Number.isFinite(a==null?void 0:a.order)?Number(a.order):s};o.condition.operator||(o.condition.operator="always"),hd.includes(o.condition.operator)||(o.condition.operator="always"),(c=o.condition)!=null&&c.input&&(o.condition.input=String(o.condition.input)),(u=o.condition)!=null&&u.valueInput&&(o.condition.valueInput=String(o.condition.valueInput)),typeof((d=o.condition)==null?void 0:d.expression)=="string"&&(o.condition.expression=o.condition.expression),o.scope=o.target==="spawnedParticles"||o.target==="lines"?"spawnedOnly":"allLivingFrame",o.actions=o.actions.filter(p=>p&&typeof p=="object").map(p=>({operator:pd.includes(p.operator)?p.operator:"set",output:p.output,value:p.value,input:p.input,expression:p.expression}));const l=kb(o,e);l.ok?i.push(o):r.push({id:o.id,index:s,errors:l.errors})}),{ruleBlocks:i,rejected:r}}const Bb="seesound_user_defaults_v4",gd="seesound_disabled_v4",vd="seesound_user_presets_v1",bd="seesound_hidden_root_presets_v1",zb=Object.assign({"../../../presets/bass-mid-high spacing.json":Bv,"../../../presets/dob elkülönítve--history.json":Hv,"../../../presets/experiment.json":Xv,"../../../presets/experiment2.json":jv,"../../../presets/holistic 3d.json":Kv,"../../../presets/linear basic scriabin colors.json":eb,"../../../presets/linear basic.json":ib,"../../../presets/linear colors.json":sb,"../../../presets/linear timbre colors.json":cb,"../../../presets/pan frequency perceptual timbre.json":pb,"../../../presets/rule__default rules.json":mb,"../../../presets/rule__linear space.json":bb,"../../../presets/textured timbre colors.json":yb,"../../../presets/timbral constellation abstract clustering.json":wb,"../../../presets/timbral constellation.json":Tb}),ss=1,Vb={logCompilerStatus:!1,logCompilerTiming:!1},ra=Object.freeze({ruleBlocks:[],ruleEngineEnabled:!0,ruleSchemaVersion:ss,palettes:[],ruleUiState:{collapsedGroups:[],collapsedSubgroups:[],collapsedRules:[],standaloneGroups:[],selectedContextGroup:"spawnedParticles",selectedGroupPath:"",selectedGroupName:"",selectedSubgroup:""}});function _s(n){const e=n&&typeof n=="object"?n:{};return{collapsedGroups:Array.isArray(e.collapsedGroups)?e.collapsedGroups.map(t=>String(t||"").trim()).filter(Boolean):[],collapsedSubgroups:[],collapsedRules:Array.isArray(e.collapsedRules)?e.collapsedRules.map(t=>String(t||"").trim()).filter(Boolean):[],selectedContextGroup:String(e.selectedContextGroup||"spawnedParticles"),selectedGroupPath:String(e.selectedGroupPath||e.selectedGroupName||""),selectedGroupName:String(e.selectedGroupPath||e.selectedGroupName||""),selectedSubgroup:"",standaloneGroups:Array.isArray(e.standaloneGroups)?e.standaloneGroups.map(t=>String(t||"").trim()).filter(Boolean):[]}}function yl(n){return Array.isArray(n)?n.map((e,t)=>{if(!e||typeof e!="object")return null;const i=typeof e.id=="string"&&e.id.trim()?e.id.trim():`palette-${t+1}`,r=e.type==="continuous"||e.type==="discrete"?e.type:"discrete",a=Array.isArray(e.colors)?e.colors:[];return{...e,id:i,type:r,colors:a}}).filter(Boolean):[]}function en({key:n,label:e,min:t,max:i,step:r,def:a,unit:s,desc:o}){return{key:n,group:"inputProcessing",label:e,min:t,max:i,step:r,default:a,unit:s,desc:o,canDisable:!1}}const Ml=[{key:"inputGain",group:"inputGain",label:"Sensitivity",min:0,max:3,step:.01,default:1,unit:"×",desc:"Global input gain scaler applied before analysis and spawning.",canDisable:!1},{key:"freqNormMin",group:"inputProcessing",label:"Frequency Range Min",min:16,max:2e4,step:1,default:40,unit:"Hz",desc:"Lower bound for frequency normalization.",canDisable:!1},{key:"freqNormMax",group:"inputProcessing",label:"Frequency Range Max",min:16,max:2e4,step:1,default:12e3,unit:"Hz",desc:"Upper bound for frequency normalization.",canDisable:!1},{key:"fftSize",group:"inputProcessing",label:"Audio Resolution",default:2048,unit:"",desc:"FFT analysis size. Higher values increase frequency detail.",isDropdown:!0,dropdownOptions:[{label:"512",value:512},{label:"1024",value:1024},{label:"2048",value:2048},{label:"4096",value:4096},{label:"8192",value:8192},{label:"16384",value:16384}],canDisable:!1},{key:"fluxWindowFrames",group:"inputProcessing",label:"Activity Interval",min:1,max:64,step:1,default:10,unit:"frames",desc:"Rolling frame window used to smooth activity detection.",canDisable:!1},en({key:"binMagnitudeNormMin",label:"Volume Min",min:-120,max:0,step:1,def:-70,unit:"dBFS",desc:"Normalization lower bound for per-bin volume."}),en({key:"binMagnitudeNormMax",label:"Volume Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for per-bin volume."}),en({key:"binFluxNormMin",label:"Activity Detail Min",min:0,max:2,step:.001,def:0,unit:"delta",desc:"Normalization lower bound for per-frequency activity."}),en({key:"binFluxNormMax",label:"Activity Detail Max",min:0,max:2,step:.001,def:.5,unit:"delta",desc:"Normalization upper bound for per-frequency activity."}),en({key:"binPhaseDeviationNormMin",label:"Instability Min",min:0,max:3.14,step:.001,def:0,unit:"rad",desc:"Normalization lower bound for per-bin instability."}),en({key:"binPhaseDeviationNormMax",label:"Instability Max",min:0,max:3.14,step:.001,def:3.14,unit:"rad",desc:"Normalization upper bound for per-bin instability."}),en({key:"binAttackTimeNormMin",label:"Attack Sharpness Min",min:0,max:2e3,step:1,def:5,unit:"ms",desc:"Normalization lower bound for per-bin attack sharpness."}),en({key:"binAttackTimeNormMax",label:"Attack Sharpness Max",min:0,max:2e3,step:1,def:500,unit:"ms",desc:"Normalization upper bound for per-bin attack sharpness."}),en({key:"globalRmsNormMin",label:"Energy Min",min:-120,max:0,step:1,def:-60,unit:"dBFS",desc:"Normalization lower bound for frame energy."}),en({key:"globalRmsNormMax",label:"Energy Max",min:-120,max:0,step:1,def:0,unit:"dBFS",desc:"Normalization upper bound for frame energy."}),en({key:"spectralCentroidNormMin",label:"Sharpness Min",min:16,max:22050,step:1,def:150,unit:"Hz",desc:"Normalization lower bound for spectral sharpness."}),en({key:"spectralCentroidNormMax",label:"Sharpness Max",min:16,max:22050,step:1,def:8e3,unit:"Hz",desc:"Normalization upper bound for spectral sharpness."}),en({key:"globalSpectralFluxNormMin",label:"Activity Global Min",min:0,max:200,step:.1,def:0,unit:"AU",desc:"Normalization lower bound for frame-level activity."}),en({key:"globalSpectralFluxNormMax",label:"Activity Global Max",min:0,max:200,step:.1,def:100,unit:"AU",desc:"Normalization upper bound for frame-level activity."}),en({key:"spectralFlatnessNormMin",label:"Noisiness Min",min:0,max:1,step:.001,def:0,unit:"ratio",desc:"Normalization lower bound for spectral noisiness."}),en({key:"spectralFlatnessNormMax",label:"Noisiness Max",min:0,max:1,step:.001,def:1,unit:"ratio",desc:"Normalization upper bound for spectral noisiness."}),{key:"defaultParticleSize",group:"geometry",label:"Particle Default Size",min:1,max:40,step:.5,default:6,unit:"px",desc:"Base diameter of every particle before per-frequency size scaling.",canDisable:!1},{key:"canvasWidth",group:"geometry",label:"Canvas Width",min:160,max:12e3,step:1,default:0,unit:"u",desc:"Explicit canvas width in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasHeight",group:"geometry",label:"Canvas Height",min:120,max:8e3,step:1,default:0,unit:"u",desc:"Explicit canvas height in Three.js world units. 0 keeps automatic sizing.",canDisable:!1},{key:"canvasScale",group:"geometry",label:"Canvas Scale",min:5,max:400,step:1,default:100,unit:"%",desc:"Display zoom of the canvas on screen. Does not change render resolution.",canDisable:!1},{key:"defaultBackgroundHue",group:"geometry",label:"Default Background Hue",min:0,max:360,step:1,default:0,unit:"deg",desc:"Base background hue used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundSaturation",group:"geometry",label:"Default Background Saturation",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background saturation used before background rules are applied.",canDisable:!1},{key:"defaultBackgroundLightness",group:"geometry",label:"Default Background Lightness",min:0,max:100,step:1,default:0,unit:"%",desc:"Base background lightness used before background rules are applied.",canDisable:!1},{key:"maxParticles",group:"geometry",label:"Particle Capacity",min:1e5,max:5e6,step:1e3,default:1e6,unit:"",desc:"Maximum total particle slots in GPU buffers. Higher values allow longer painting trails.",canDisable:!1},{key:"particlesByFrame",group:"geometry",label:"Spawn Rate",min:100,max:5e3,step:1,default:1e3,unit:"N",desc:"Number of log-frequency spawn buckets per frame. Step ratio is k = (freqMax / freqMin)^(1/N).",canDisable:!1},{key:"blendMode",group:"mixing",label:"Blend Mode",default:"screen",unit:"",desc:"WebGL blending mode.",isDropdown:!0,neutralValue:"source-over",dropdownOptions:[{label:"Screen (Add)",value:"screen"},{label:"Normal",value:"source-over"},{label:"Alpha",value:"alpha"},{label:"Multiply",value:"multiply"}]},{key:"cameraProjection",group:"mixing",label:"Camera Projection",default:"axonometric",unit:"",desc:"Choose between axonometric (orthographic) and perspective camera projection.",isDropdown:!0,dropdownOptions:[{label:"Axonometric",value:"axonometric"},{label:"Perspective",value:"perspective"}]},{key:"cameraAxoPreset",group:"mixing",label:"Axo Default View",default:"orthoXY",unit:"",desc:"Default axonometric camera orientation preset.",isDropdown:!0,dropdownOptions:[{label:"Ortho XY",value:"orthoXY"},{label:"Ortho YZ",value:"orthoYZ"},{label:"Isometric",value:"isometric"},{label:"45°",value:"fortyFive"},{label:"Top (XZ)",value:"topXZ"}]},{key:"cameraPosX",group:"mixing",label:"Camera Position X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position X in world units.",canDisable:!1},{key:"cameraPosY",group:"mixing",label:"Camera Position Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera position Y in world units.",canDisable:!1},{key:"cameraPosZ",group:"mixing",label:"Camera Position Z",min:-5e3,max:5e3,step:1,default:420,unit:"u",desc:"Camera position Z in world units.",canDisable:!1},{key:"cameraTargetX",group:"mixing",label:"Camera Target X",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target X in world units.",canDisable:!1},{key:"cameraTargetY",group:"mixing",label:"Camera Target Y",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Y in world units.",canDisable:!1},{key:"cameraTargetZ",group:"mixing",label:"Camera Target Z",min:-5e3,max:5e3,step:1,default:0,unit:"u",desc:"Camera target Z in world units.",canDisable:!1},{key:"cameraAngleOfView",group:"mixing",label:"Angle Of View",min:20,max:120,step:1,default:55,unit:"deg",desc:"Perspective camera field of view in degrees.",canDisable:!1},{key:"postProcessEnabled",group:"mixing",label:"Post-Processing",min:0,max:1,step:1,default:1,unit:"",desc:"Master switch for all post-processing effects.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomEnabled",group:"mixing",label:"Bloom Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Unreal Bloom pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bloomStrength",group:"mixing",label:"Bloom Strength",min:0,max:4,step:.01,default:1.15,unit:"",desc:"Bloom intensity multiplier.",canDisable:!1},{key:"bloomRadius",group:"mixing",label:"Bloom Radius",min:0,max:2,step:.01,default:.7,unit:"",desc:"Bloom spread radius.",canDisable:!1},{key:"bloomThreshold",group:"mixing",label:"Bloom Threshold",min:0,max:1,step:.01,default:.18,unit:"",desc:"Luminance threshold before bloom is applied.",canDisable:!1},{key:"bokehEnabled",group:"mixing",label:"Bokeh Enabled",min:0,max:1,step:1,default:1,unit:"",desc:"Enable Bokeh depth-of-field pass.",isToggle:!0,toggleLabels:["Off","On"]},{key:"bokehFocus",group:"mixing",label:"Bokeh Focus",min:1,max:5e3,step:1,default:380,unit:"u",desc:"Bokeh focus distance.",canDisable:!1},{key:"bokehAperture",group:"mixing",label:"Bokeh Aperture",min:0,max:.001,step:1e-5,default:12e-5,unit:"",desc:"Bokeh aperture value.",canDisable:!1},{key:"bokehMaxBlur",group:"mixing",label:"Bokeh Max Blur",min:0,max:.1,step:5e-4,default:.01,unit:"",desc:"Maximum blur amount for bokeh pass.",canDisable:!1},{key:"persistMode",group:"mixing",label:"Persistence",min:0,max:1,step:1,default:0,unit:"",desc:"Momentary: canvas fades each frame. Painting: marks accumulate.",isToggle:!0,toggleLabels:["Momentary","Painting"]},{key:"originSignEnabled",group:"mixing",label:"Origin Axes",min:0,max:1,step:1,default:1,unit:"",desc:"Show/hide origin axes guide.",isToggle:!0,toggleLabels:["Off","On"]},{key:"coordinateGuidesEnabled",group:"mixing",label:"Coordinate Guides",min:0,max:1,step:1,default:1,unit:"",desc:"Show/hide coordinate guide grids.",isToggle:!0,toggleLabels:["Off","On"]}];function Hb(){try{return JSON.parse(localStorage.getItem(Bb)||"{}")}catch{return{}}}function Gb(){try{return new Set(JSON.parse(localStorage.getItem(gd)||"[]"))}catch{return new Set}}function Wi(n){const e=n&&typeof n=="object"?n:{},t={...e},i=Array.isArray(e.ruleBlocks)?e.ruleBlocks:[],r=md(i);return t.ruleBlocks=r.ruleBlocks,t.ruleEngineEnabled=typeof e.ruleEngineEnabled=="boolean"?e.ruleEngineEnabled:ra.ruleEngineEnabled,t.ruleSchemaVersion=Number.isFinite(e.ruleSchemaVersion)?Number(e.ruleSchemaVersion):ra.ruleSchemaVersion,t.palettes=yl(e.palettes),t.ruleUiState=_s(e.ruleUiState),r.rejected.length>0&&console.warn("[RuleEngine] Rejected malformed ruleBlocks during migration",r.rejected),t}function Wb(){const n=Wi(Hb()),e={};for(const t of Ml)e[t.key]=Object.prototype.hasOwnProperty.call(n,t.key)?n[t.key]:t.default;return e.ruleBlocks=n.ruleBlocks,e.ruleEngineEnabled=n.ruleEngineEnabled,e.ruleSchemaVersion=n.ruleSchemaVersion,e.palettes=yl(n.palettes),e.ruleUiState=_s(n.ruleUiState),e}const K=Wb(),Kr=Gb(),ri=[],xs=[],Yc=300;let aa=!1;function Xb(n){return JSON.parse(JSON.stringify(n))}function Sl(){return{params:Xb(K),disabled:[...Kr]}}function qb(n,e){if(!n||!e||JSON.stringify(n.params)!==JSON.stringify(e.params))return!1;const t=Array.isArray(n.disabled)?[...n.disabled].sort():[],i=Array.isArray(e.disabled)?[...e.disabled].sort():[];return JSON.stringify(t)===JSON.stringify(i)}function _d(n){const e=Wi((n&&typeof n=="object"?n.params:{})||{});for(const i of Object.keys(K))delete K[i];for(const[i,r]of Object.entries(e))K[i]=r,Vi(i,r);const t=new Set(Array.isArray(n==null?void 0:n.disabled)?n.disabled:[]);Kr.clear();for(const i of t)Kr.add(i);try{localStorage.setItem(gd,JSON.stringify([...Kr]))}catch{}Vi("disabled",null),Vi("*",e)}function wl(){if(aa)return;const n=Sl(),e=ri[ri.length-1];e&&qb(e,n)||(ri.push(n),ri.length>Yc&&ri.splice(0,ri.length-Yc),xs.length=0)}function Yb(){return ri.length>0}function jb(){return xs.length>0}function $b(){if(!Yb())return!1;const n=ri.pop(),e=Sl();xs.push(e),aa=!0;try{_d(n)}finally{aa=!1}return!0}function Zb(){if(!jb())return!1;const n=xs.pop(),e=Sl();ri.push(e),aa=!0;try{_d(n)}finally{aa=!1}return!0}const jo=new Set;function ys(n){return jo.add(n),()=>jo.delete(n)}function Vi(n,e){for(const t of jo)try{t(K,n,e)}catch(i){console.warn("[ParamStore] subscriber error:",i)}}function nn(n,e){wl(),K[n]=e,Vi(n,e)}function $t(n){wl();const e=n&&typeof n=="object"?n:{},t=Wi({...K,...e}),i=Object.create(null),r=Object.keys(e);for(const l of r){const c=t[l];Object.is(K[l],c)||(K[l]=c,i[l]=c)}const a=["ruleBlocks","ruleEngineEnabled","ruleSchemaVersion","palettes","ruleUiState"];if(a.some(l=>Object.prototype.hasOwnProperty.call(e,l)))for(const l of a){const c=t[l];Object.is(K[l],c)||(K[l]=c,i[l]=c)}const o=Object.entries(i);if(o.length!==0){for(const[l,c]of o)Vi(l,c);Vi("*",i)}}function xd(){wl();for(const n of Ml)K[n.key]=n.default;K.ruleBlocks=[],K.ruleEngineEnabled=!0,K.ruleSchemaVersion=ss,K.palettes=[],K.ruleUiState=_s(ra.ruleUiState),Vi("*",null)}function os(){const n=Wi(K);return{...K,...n,_disabled:[...Kr]}}function Kb(n){const e=String(n||"").replace(/\\/g,"/");return e.slice(e.lastIndexOf("/")+1).replace(/\.json$/i,"")}function Ms(){try{const n=JSON.parse(localStorage.getItem(bd)||"[]");return Array.isArray(n)?new Set(n.map(e=>String(e||"").trim()).filter(Boolean)):new Set}catch{return new Set}}function yd(n){try{localStorage.setItem(bd,JSON.stringify([...n]))}catch{}}function Ss(){try{const n=JSON.parse(localStorage.getItem(vd)||"[]");if(!Array.isArray(n))return new Map;const e=new Map;for(const t of n){const i=String((t==null?void 0:t.name)||"").trim();i&&e.set(i,{name:i,params:Ar(t==null?void 0:t.params)})}return e}catch{return new Map}}function Md(n){try{const e=[...n.values()].map(t=>({name:t.name,params:Ar(t.params)}));localStorage.setItem(vd,JSON.stringify(e))}catch{}}let za=null;function El(){if(za)return za;const n=new Map;for(const[e,t]of Object.entries(zb)){const i=t&&typeof t=="object"?t:{},r=String(i.name||Kb(e)).trim();r&&n.set(r,{name:r,params:Ar(i.params)})}return za=n,za}function Jb(n){return Array.isArray(n==null?void 0:n.dropdownOptions)?n.dropdownOptions.map(e=>e.value):Array.isArray(n==null?void 0:n.dropdownGroups)?n.dropdownGroups.flatMap(e=>(e.options||[]).map(t=>t.value)):[]}function Qb(n,e){if(n==null)return e;if(typeof n=="boolean")return n?1:0;if(typeof n=="string"){const i=n.trim().toLowerCase();if(i==="painting"||i==="paint"||i==="on"||i==="true")return 1;if(i==="momentary"||i==="off"||i==="false")return 0}const t=Number(n);return Number.isFinite(t)?t>=.5?1:0:e}function e1(n,e){if(e==null)return;if(n!=null&&n.isToggle)return Qb(e,n.default);if(n!=null&&n.isDropdown){const r=Jb(n).find(a=>String(a)===String(e));return r!==void 0?r:e}const t=Number(e);return Number.isFinite(t)?t:e}function Ar(n){try{const e=n&&typeof n=="object"?n:{},t={...e};for(const i of Ml){if(!Object.prototype.hasOwnProperty.call(e,i.key)||e[i.key]===void 0||e[i.key]===null){t[i.key]=i.default;continue}t[i.key]=e1(i,e[i.key])}return Object.prototype.hasOwnProperty.call(e,"ruleBlocks")||(t.ruleBlocks=[]),(!Object.prototype.hasOwnProperty.call(e,"ruleEngineEnabled")||typeof e.ruleEngineEnabled!="boolean")&&(t.ruleEngineEnabled=ra.ruleEngineEnabled),!Object.prototype.hasOwnProperty.call(e,"ruleSchemaVersion")||!Number.isFinite(Number(e.ruleSchemaVersion))?t.ruleSchemaVersion=ra.ruleSchemaVersion:t.ruleSchemaVersion=Number(e.ruleSchemaVersion),t.palettes=yl(e.palettes),t.ruleUiState=_s(e.ruleUiState),Array.isArray(e._disabled)&&(t._disabled=[...e._disabled]),Wi(t)}catch(e){return console.warn("[Preset] canonicalization failed, falling back to raw payload:",e),Wi(n&&typeof n=="object"?n:{})}}async function Sd(){const n=Ms(),e=[...El().keys()].filter(i=>!n.has(i)),t=[...Ss().keys()];return[...new Set([...e,...t])].sort((i,r)=>i.localeCompare(r))}async function $o(n,e){const t=String(n||"").trim();if(!t)return{ok:!1,error:"Preset name is required."};const i=Ar(e),r=Ss();r.set(t,{name:t,params:i}),Md(r);const a=Ms();return a.delete(t)&&yd(a),{ok:!0,name:t,source:"localStorage"}}async function t1(n){const e=String(n||"").trim();if(!e)return null;const t=Ss();if(t.has(e)){const s=t.get(e);return{name:s.name,params:Ar(s.params)}}if(Ms().has(e))return null;const r=El();if(!r.has(e))return null;const a=r.get(e);try{return{name:a.name,params:Ar(a.params)}}catch(s){return console.warn("[Preset] load normalization failed, applying raw params:",s),{name:a.name,params:Wi(a.params)}}}async function n1(n){const e=String(n||"").trim();if(!e)return{ok:!1,deleted:!1};const t=Ss();if(t.delete(e))return Md(t),{ok:!0,deleted:!0,source:"localStorage"};if(El().has(e)){const i=Ms();return i.add(e),yd(i),{ok:!0,deleted:!0,source:"hidden-root"}}return{ok:!1,deleted:!1}}var xi;(function(n){n.Range="range",n.Steps="steps",n.Positions="positions",n.Count="count",n.Values="values"})(xi||(xi={}));var cn;(function(n){n[n.None=-1]="None",n[n.NoValue=0]="NoValue",n[n.LargeValue=1]="LargeValue",n[n.SmallValue=2]="SmallValue"})(cn||(cn={}));function i1(n){return ls(n)&&typeof n.from=="function"}function ls(n){return typeof n=="object"&&typeof n.to=="function"}function jc(n){n.parentElement.removeChild(n)}function Zo(n){return n!=null}function $c(n){n.preventDefault()}function r1(n){return n.filter(function(e){return this[e]?!1:this[e]=!0},{})}function a1(n,e){return Math.round(n/e)*e}function s1(n,e){var t=n.getBoundingClientRect(),i=n.ownerDocument,r=i.documentElement,a=wd(i);return/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)&&(a.x=0),e?t.top+a.y-r.clientTop:t.left+a.x-r.clientLeft}function On(n){return typeof n=="number"&&!isNaN(n)&&isFinite(n)}function Zc(n,e,t){t>0&&(tn(n,e),setTimeout(function(){Qa(n,e)},t))}function Kc(n){return Math.max(Math.min(n,100),0)}function ws(n){return Array.isArray(n)?n:[n]}function o1(n){n=String(n);var e=n.split(".");return e.length>1?e[1].length:0}function tn(n,e){n.classList&&!/\s/.test(e)?n.classList.add(e):n.className+=" "+e}function Qa(n,e){n.classList&&!/\s/.test(e)?n.classList.remove(e):n.className=n.className.replace(new RegExp("(^|\\b)"+e.split(" ").join("|")+"(\\b|$)","gi")," ")}function l1(n,e){return n.classList?n.classList.contains(e):new RegExp("\\b"+e+"\\b").test(n.className)}function wd(n){var e=window.pageXOffset!==void 0,t=(n.compatMode||"")==="CSS1Compat",i=e?window.pageXOffset:t?n.documentElement.scrollLeft:n.body.scrollLeft,r=e?window.pageYOffset:t?n.documentElement.scrollTop:n.body.scrollTop;return{x:i,y:r}}function c1(){return window.navigator.pointerEnabled?{start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled?{start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}:{start:"mousedown touchstart",move:"mousemove touchmove",end:"mouseup touchend"}}function u1(){var n=!1;try{var e=Object.defineProperty({},"passive",{get:function(){n=!0}});window.addEventListener("test",null,e)}catch{}return n}function d1(){return window.CSS&&CSS.supports&&CSS.supports("touch-action","none")}function Cl(n,e){return 100/(e-n)}function Ko(n,e,t){return e*100/(n[t+1]-n[t])}function p1(n,e){return Ko(n,n[0]<0?e+Math.abs(n[0]):e-n[0],0)}function h1(n,e){return e*(n[1]-n[0])/100+n[0]}function sa(n,e){for(var t=1;n>=e[t];)t+=1;return t}function f1(n,e,t){if(t>=n.slice(-1)[0])return 100;var i=sa(t,n),r=n[i-1],a=n[i],s=e[i-1],o=e[i];return s+p1([r,a],t)/Cl(s,o)}function m1(n,e,t){if(t>=100)return n.slice(-1)[0];var i=sa(t,e),r=n[i-1],a=n[i],s=e[i-1],o=e[i];return h1([r,a],(t-s)*Cl(s,o))}function g1(n,e,t,i){if(i===100)return i;var r=sa(i,n),a=n[r-1],s=n[r];return t?i-a>(s-a)/2?s:a:e[r-1]?n[r-1]+a1(i-n[r-1],e[r-1]):i}var Ed=function(){function n(e,t,i){this.xPct=[],this.xVal=[],this.xSteps=[],this.xNumSteps=[],this.xHighestCompleteStep=[],this.xSteps=[i||!1],this.xNumSteps=[!1],this.snap=t;var r,a=[];for(Object.keys(e).forEach(function(s){a.push([ws(e[s]),s])}),a.sort(function(s,o){return s[0][0]-o[0][0]}),r=0;r<a.length;r++)this.handleEntryPoint(a[r][1],a[r][0]);for(this.xNumSteps=this.xSteps.slice(0),r=0;r<this.xNumSteps.length;r++)this.handleStepPoint(r,this.xNumSteps[r])}return n.prototype.getDistance=function(e){for(var t=[],i=0;i<this.xNumSteps.length-1;i++)t[i]=Ko(this.xVal,e,i);return t},n.prototype.getAbsoluteDistance=function(e,t,i){var r=0;if(e<this.xPct[this.xPct.length-1])for(;e>this.xPct[r+1];)r++;else e===this.xPct[this.xPct.length-1]&&(r=this.xPct.length-2);!i&&e===this.xPct[r+1]&&r++,t===null&&(t=[]);var a,s=1,o=t[r],l=0,c=0,u=0,d=0;for(i?a=(e-this.xPct[r])/(this.xPct[r+1]-this.xPct[r]):a=(this.xPct[r+1]-e)/(this.xPct[r+1]-this.xPct[r]);o>0;)l=this.xPct[r+1+d]-this.xPct[r+d],t[r+d]*s+100-a*100>100?(c=l*a,s=(o-100*a)/t[r+d],a=1):(c=t[r+d]*l/100*s,s=0),i?(u=u-c,this.xPct.length+d>=1&&d--):(u=u+c,this.xPct.length-d>=1&&d++),o=t[r+d]*s;return e+u},n.prototype.toStepping=function(e){return e=f1(this.xVal,this.xPct,e),e},n.prototype.fromStepping=function(e){return m1(this.xVal,this.xPct,e)},n.prototype.getStep=function(e){return e=g1(this.xPct,this.xSteps,this.snap,e),e},n.prototype.getDefaultStep=function(e,t,i){var r=sa(e,this.xPct);return(e===100||t&&e===this.xPct[r-1])&&(r=Math.max(r-1,1)),(this.xVal[r]-this.xVal[r-1])/i},n.prototype.getNearbySteps=function(e){var t=sa(e,this.xPct);return{stepBefore:{startValue:this.xVal[t-2],step:this.xNumSteps[t-2],highestStep:this.xHighestCompleteStep[t-2]},thisStep:{startValue:this.xVal[t-1],step:this.xNumSteps[t-1],highestStep:this.xHighestCompleteStep[t-1]},stepAfter:{startValue:this.xVal[t],step:this.xNumSteps[t],highestStep:this.xHighestCompleteStep[t]}}},n.prototype.countStepDecimals=function(){var e=this.xNumSteps.map(o1);return Math.max.apply(null,e)},n.prototype.hasNoSize=function(){return this.xVal[0]===this.xVal[this.xVal.length-1]},n.prototype.convert=function(e){return this.getStep(this.toStepping(e))},n.prototype.handleEntryPoint=function(e,t){var i;if(e==="min"?i=0:e==="max"?i=100:i=parseFloat(e),!On(i)||!On(t[0]))throw new Error("noUiSlider: 'range' value isn't numeric.");this.xPct.push(i),this.xVal.push(t[0]);var r=Number(t[1]);i?this.xSteps.push(isNaN(r)?!1:r):isNaN(r)||(this.xSteps[0]=r),this.xHighestCompleteStep.push(0)},n.prototype.handleStepPoint=function(e,t){if(t){if(this.xVal[e]===this.xVal[e+1]){this.xSteps[e]=this.xHighestCompleteStep[e]=this.xVal[e];return}this.xSteps[e]=Ko([this.xVal[e],this.xVal[e+1]],t,0)/Cl(this.xPct[e],this.xPct[e+1]);var i=(this.xVal[e+1]-this.xVal[e])/this.xNumSteps[e],r=Math.ceil(Number(i.toFixed(3))-1),a=this.xVal[e]+this.xNumSteps[e]*r;this.xHighestCompleteStep[e]=a}},n}(),Jc={to:function(n){return n===void 0?"":n.toFixed(2)},from:Number},Cd={target:"target",base:"base",origin:"origin",handle:"handle",handleLower:"handle-lower",handleUpper:"handle-upper",touchArea:"touch-area",horizontal:"horizontal",vertical:"vertical",background:"background",connect:"connect",connects:"connects",ltr:"ltr",rtl:"rtl",textDirectionLtr:"txt-dir-ltr",textDirectionRtl:"txt-dir-rtl",draggable:"draggable",drag:"state-drag",tap:"state-tap",active:"active",tooltip:"tooltip",pips:"pips",pipsHorizontal:"pips-horizontal",pipsVertical:"pips-vertical",marker:"marker",markerHorizontal:"marker-horizontal",markerVertical:"marker-vertical",markerNormal:"marker-normal",markerLarge:"marker-large",markerSub:"marker-sub",value:"value",valueHorizontal:"value-horizontal",valueVertical:"value-vertical",valueNormal:"value-normal",valueLarge:"value-large",valueSub:"value-sub"},_i={tooltips:".__tooltips",aria:".__aria"};function v1(n,e){if(!On(e))throw new Error("noUiSlider: 'step' is not numeric.");n.singleStep=e}function b1(n,e){if(!On(e))throw new Error("noUiSlider: 'keyboardPageMultiplier' is not numeric.");n.keyboardPageMultiplier=e}function _1(n,e){if(!On(e))throw new Error("noUiSlider: 'keyboardMultiplier' is not numeric.");n.keyboardMultiplier=e}function x1(n,e){if(!On(e))throw new Error("noUiSlider: 'keyboardDefaultStep' is not numeric.");n.keyboardDefaultStep=e}function y1(n,e){if(typeof e!="object"||Array.isArray(e))throw new Error("noUiSlider: 'range' is not an object.");if(e.min===void 0||e.max===void 0)throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");n.spectrum=new Ed(e,n.snap||!1,n.singleStep)}function M1(n,e){if(e=ws(e),!Array.isArray(e)||!e.length)throw new Error("noUiSlider: 'start' option is incorrect.");n.handles=e.length,n.start=e}function S1(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'snap' option must be a boolean.");n.snap=e}function w1(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'animate' option must be a boolean.");n.animate=e}function E1(n,e){if(typeof e!="number")throw new Error("noUiSlider: 'animationDuration' option must be a number.");n.animationDuration=e}function Td(n,e){var t=[!1],i;if(e==="lower"?e=[!0,!1]:e==="upper"&&(e=[!1,!0]),e===!0||e===!1){for(i=1;i<n.handles;i++)t.push(e);t.push(!1)}else{if(!Array.isArray(e)||!e.length||e.length!==n.handles+1)throw new Error("noUiSlider: 'connect' option doesn't match handle count.");t=e}n.connect=t}function C1(n,e){switch(e){case"horizontal":n.ort=0;break;case"vertical":n.ort=1;break;default:throw new Error("noUiSlider: 'orientation' option is invalid.")}}function Ad(n,e){if(!On(e))throw new Error("noUiSlider: 'margin' option must be numeric.");e!==0&&(n.margin=n.spectrum.getDistance(e))}function T1(n,e){if(!On(e))throw new Error("noUiSlider: 'limit' option must be numeric.");if(n.limit=n.spectrum.getDistance(e),!n.limit||n.handles<2)throw new Error("noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles.")}function A1(n,e){var t;if(!On(e)&&!Array.isArray(e))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(Array.isArray(e)&&!(e.length===2||On(e[0])||On(e[1])))throw new Error("noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers.");if(e!==0){for(Array.isArray(e)||(e=[e,e]),n.padding=[n.spectrum.getDistance(e[0]),n.spectrum.getDistance(e[1])],t=0;t<n.spectrum.xNumSteps.length-1;t++)if(n.padding[0][t]<0||n.padding[1][t]<0)throw new Error("noUiSlider: 'padding' option must be a positive number(s).");var i=e[0]+e[1],r=n.spectrum.xVal[0],a=n.spectrum.xVal[n.spectrum.xVal.length-1];if(i/(a-r)>1)throw new Error("noUiSlider: 'padding' option must not exceed 100% of the range.")}}function P1(n,e){switch(e){case"ltr":n.dir=0;break;case"rtl":n.dir=1;break;default:throw new Error("noUiSlider: 'direction' option was not recognized.")}}function R1(n,e){if(typeof e!="string")throw new Error("noUiSlider: 'behaviour' must be a string containing options.");var t=e.indexOf("tap")>=0,i=e.indexOf("drag")>=0,r=e.indexOf("fixed")>=0,a=e.indexOf("snap")>=0,s=e.indexOf("hover")>=0,o=e.indexOf("unconstrained")>=0,l=e.indexOf("invert-connects")>=0,c=e.indexOf("drag-all")>=0,u=e.indexOf("smooth-steps")>=0;if(r){if(n.handles!==2)throw new Error("noUiSlider: 'fixed' behaviour must be used with 2 handles");Ad(n,n.start[1]-n.start[0])}if(l&&n.handles!==2)throw new Error("noUiSlider: 'invert-connects' behaviour must be used with 2 handles");if(o&&(n.margin||n.limit))throw new Error("noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit");n.events={tap:t||a,drag:i,dragAll:c,smoothSteps:u,fixed:r,snap:a,hover:s,unconstrained:o,invertConnects:l}}function N1(n,e){if(e!==!1)if(e===!0||ls(e)){n.tooltips=[];for(var t=0;t<n.handles;t++)n.tooltips.push(e)}else{if(e=ws(e),e.length!==n.handles)throw new Error("noUiSlider: must pass a formatter for all handles.");e.forEach(function(i){if(typeof i!="boolean"&&!ls(i))throw new Error("noUiSlider: 'tooltips' must be passed a formatter or 'false'.")}),n.tooltips=e}}function L1(n,e){if(e.length!==n.handles)throw new Error("noUiSlider: must pass a attributes for all handles.");n.handleAttributes=e}function F1(n,e){if(!ls(e))throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");n.ariaFormat=e}function D1(n,e){if(!i1(e))throw new Error("noUiSlider: 'format' requires 'to' and 'from' methods.");n.format=e}function I1(n,e){if(typeof e!="boolean")throw new Error("noUiSlider: 'keyboardSupport' option must be a boolean.");n.keyboardSupport=e}function U1(n,e){n.documentElement=e}function O1(n,e){if(typeof e!="string"&&e!==!1)throw new Error("noUiSlider: 'cssPrefix' must be a string or `false`.");n.cssPrefix=e}function k1(n,e){if(typeof e!="object")throw new Error("noUiSlider: 'cssClasses' must be an object.");typeof n.cssPrefix=="string"?(n.cssClasses={},Object.keys(e).forEach(function(t){n.cssClasses[t]=n.cssPrefix+e[t]})):n.cssClasses=e}function Pd(n){var e={margin:null,limit:null,padding:null,animate:!0,animationDuration:300,ariaFormat:Jc,format:Jc},t={step:{r:!1,t:v1},keyboardPageMultiplier:{r:!1,t:b1},keyboardMultiplier:{r:!1,t:_1},keyboardDefaultStep:{r:!1,t:x1},start:{r:!0,t:M1},connect:{r:!0,t:Td},direction:{r:!0,t:P1},snap:{r:!1,t:S1},animate:{r:!1,t:w1},animationDuration:{r:!1,t:E1},range:{r:!0,t:y1},orientation:{r:!1,t:C1},margin:{r:!1,t:Ad},limit:{r:!1,t:T1},padding:{r:!1,t:A1},behaviour:{r:!0,t:R1},ariaFormat:{r:!1,t:F1},format:{r:!1,t:D1},tooltips:{r:!1,t:N1},keyboardSupport:{r:!0,t:I1},documentElement:{r:!1,t:U1},cssPrefix:{r:!0,t:O1},cssClasses:{r:!0,t:k1},handleAttributes:{r:!1,t:L1}},i={connect:!1,direction:"ltr",behaviour:"tap",orientation:"horizontal",keyboardSupport:!0,cssPrefix:"noUi-",cssClasses:Cd,keyboardPageMultiplier:5,keyboardMultiplier:1,keyboardDefaultStep:10};n.format&&!n.ariaFormat&&(n.ariaFormat=n.format),Object.keys(t).forEach(function(l){if(!Zo(n[l])&&i[l]===void 0){if(t[l].r)throw new Error("noUiSlider: '"+l+"' is required.");return}t[l].t(e,Zo(n[l])?n[l]:i[l])}),e.pips=n.pips;var r=document.createElement("div"),a=r.style.msTransform!==void 0,s=r.style.transform!==void 0;e.transformRule=s?"transform":a?"msTransform":"webkitTransform";var o=[["left","top"],["right","bottom"]];return e.style=o[e.dir][e.ort],e}function B1(n,e,t){var i=c1(),r=d1(),a=r&&u1(),s=n,o,l,c,u,d,p,h=e.spectrum,g=[],b=[],m=[],f=0,y={},v=!1,x=n.ownerDocument,R=e.documentElement||x.documentElement,w=x.body,T=x.dir==="rtl"||e.ort===1?0:100;function A(M,N){var k=x.createElement("div");return N&&tn(k,N),M.appendChild(k),k}function C(M,N){var k=A(M,e.cssClasses.origin),Z=A(k,e.cssClasses.handle);if(A(Z,e.cssClasses.touchArea),Z.setAttribute("data-handle",String(N)),e.keyboardSupport&&(Z.setAttribute("tabindex","0"),Z.addEventListener("keydown",function(B){return Ie(B,N)})),e.handleAttributes!==void 0){var le=e.handleAttributes[N];Object.keys(le).forEach(function(B){Z.setAttribute(B,le[B])})}return Z.setAttribute("role","slider"),Z.setAttribute("aria-orientation",e.ort?"vertical":"horizontal"),N===0?tn(Z,e.cssClasses.handleLower):N===e.handles-1&&tn(Z,e.cssClasses.handleUpper),k.handle=Z,k}function _(M,N){return N?A(M,e.cssClasses.connect):!1}function L(M,N){l=A(N,e.cssClasses.connects),c=[],u=[],u.push(_(l,M[0]));for(var k=0;k<e.handles;k++)c.push(C(N,k)),m[k]=k,u.push(_(l,M[k+1]))}function I(M){tn(M,e.cssClasses.target),e.dir===0?tn(M,e.cssClasses.ltr):tn(M,e.cssClasses.rtl),e.ort===0?tn(M,e.cssClasses.horizontal):tn(M,e.cssClasses.vertical);var N=getComputedStyle(M).direction;return N==="rtl"?tn(M,e.cssClasses.textDirectionRtl):tn(M,e.cssClasses.textDirectionLtr),A(M,e.cssClasses.base)}function G(M,N){return!e.tooltips||!e.tooltips[N]?!1:A(M.firstChild,e.cssClasses.tooltip)}function q(){return s.hasAttribute("disabled")}function $(M){var N=c[M];return N.hasAttribute("disabled")}function J(M){M!=null?(c[M].setAttribute("disabled",""),c[M].handle.removeAttribute("tabindex")):(s.setAttribute("disabled",""),c.forEach(function(N){N.handle.removeAttribute("tabindex")}))}function ue(M){M!=null?(c[M].removeAttribute("disabled"),c[M].handle.setAttribute("tabindex","0")):(s.removeAttribute("disabled"),c.forEach(function(N){N.removeAttribute("disabled"),N.handle.setAttribute("tabindex","0")}))}function W(){p&&(S("update"+_i.tooltips),p.forEach(function(M){M&&jc(M)}),p=null)}function de(){W(),p=c.map(G),Le("update"+_i.tooltips,function(M,N,k){if(!(!p||!e.tooltips)&&p[N]!==!1){var Z=M[N];e.tooltips[N]!==!0&&(Z=e.tooltips[N].to(k[N])),p[N].innerHTML=Z}})}function j(){S("update"+_i.aria),Le("update"+_i.aria,function(M,N,k,Z,le){m.forEach(function(B){var me=c[B],ge=ie(b,B,0,!0,!0,!0),Xe=ie(b,B,100,!0,!0,!0),Ze=le[B],nt=String(e.ariaFormat.to(k[B]));ge=h.fromStepping(ge).toFixed(1),Xe=h.fromStepping(Xe).toFixed(1),Ze=h.fromStepping(Ze).toFixed(1),me.children[0].setAttribute("aria-valuemin",ge),me.children[0].setAttribute("aria-valuemax",Xe),me.children[0].setAttribute("aria-valuenow",Ze),me.children[0].setAttribute("aria-valuetext",nt)})})}function te(M){if(M.mode===xi.Range||M.mode===xi.Steps)return h.xVal;if(M.mode===xi.Count){if(M.values<2)throw new Error("noUiSlider: 'values' (>= 2) required for mode 'count'.");for(var N=M.values-1,k=100/N,Z=[];N--;)Z[N]=N*k;return Z.push(100),Ee(Z,M.stepped)}return M.mode===xi.Positions?Ee(M.values,M.stepped):M.mode===xi.Values?M.stepped?M.values.map(function(le){return h.fromStepping(h.getStep(h.toStepping(le)))}):M.values:[]}function Ee(M,N){return M.map(function(k){return h.fromStepping(N?h.getStep(k):k)})}function tt(M){function N(Ze,nt){return Number((Ze+nt).toFixed(7))}var k=te(M),Z={},le=h.xVal[0],B=h.xVal[h.xVal.length-1],me=!1,ge=!1,Xe=0;return k=r1(k.slice().sort(function(Ze,nt){return Ze-nt})),k[0]!==le&&(k.unshift(le),me=!0),k[k.length-1]!==B&&(k.push(B),ge=!0),k.forEach(function(Ze,nt){var at,He,ut,lt=Ze,pt=k[nt+1],bt,Et,be,Dt,qt,an,E,U=M.mode===xi.Steps;for(U&&(at=h.xNumSteps[nt]),at||(at=pt-lt),pt===void 0&&(pt=lt),at=Math.max(at,1e-7),He=lt;He<=pt;He=N(He,at)){for(bt=h.toStepping(He),Et=bt-Xe,qt=Et/(M.density||1),an=Math.round(qt),E=Et/an,ut=1;ut<=an;ut+=1)be=Xe+ut*E,Z[be.toFixed(5)]=[h.fromStepping(be),0];Dt=k.indexOf(He)>-1?cn.LargeValue:U?cn.SmallValue:cn.NoValue,!nt&&me&&He!==pt&&(Dt=0),He===pt&&ge||(Z[bt.toFixed(5)]=[He,Dt]),Xe=bt}}),Z}function ne(M,N,k){var Z,le,B=x.createElement("div"),me=(Z={},Z[cn.None]="",Z[cn.NoValue]=e.cssClasses.valueNormal,Z[cn.LargeValue]=e.cssClasses.valueLarge,Z[cn.SmallValue]=e.cssClasses.valueSub,Z),ge=(le={},le[cn.None]="",le[cn.NoValue]=e.cssClasses.markerNormal,le[cn.LargeValue]=e.cssClasses.markerLarge,le[cn.SmallValue]=e.cssClasses.markerSub,le),Xe=[e.cssClasses.valueHorizontal,e.cssClasses.valueVertical],Ze=[e.cssClasses.markerHorizontal,e.cssClasses.markerVertical];tn(B,e.cssClasses.pips),tn(B,e.ort===0?e.cssClasses.pipsHorizontal:e.cssClasses.pipsVertical);function nt(He,ut){var lt=ut===e.cssClasses.value,pt=lt?Xe:Ze,bt=lt?me:ge;return ut+" "+pt[e.ort]+" "+bt[He]}function at(He,ut,lt){if(lt=N?N(ut,lt):lt,lt!==cn.None){var pt=A(B,!1);pt.className=nt(lt,e.cssClasses.marker),pt.style[e.style]=He+"%",lt>cn.NoValue&&(pt=A(B,!1),pt.className=nt(lt,e.cssClasses.value),pt.setAttribute("data-value",String(ut)),pt.style[e.style]=He+"%",pt.innerHTML=String(k.to(ut)))}}return Object.keys(M).forEach(function(He){at(He,M[He][0],M[He][1])}),B}function fe(){d&&(jc(d),d=null)}function Ce(M){fe();var N=tt(M),k=M.filter,Z=M.format||{to:function(le){return String(Math.round(le))}};return d=s.appendChild(ne(N,k,Z)),d}function ve(){var M=o.getBoundingClientRect(),N="offset"+["Width","Height"][e.ort];return e.ort===0?M.width||o[N]:M.height||o[N]}function Re(M,N,k,Z){var le=function(me){var ge=Oe(me,Z.pageOffset,Z.target||N);if(!ge||q()&&!Z.doNotReject||l1(s,e.cssClasses.tap)&&!Z.doNotReject||M===i.start&&ge.buttons!==void 0&&ge.buttons>1||Z.hover&&ge.buttons)return!1;a||ge.preventDefault(),ge.calcPoint=ge.points[e.ort],k(ge,Z)},B=[];return M.split(" ").forEach(function(me){N.addEventListener(me,le,a?{passive:!0}:!1),B.push([me,le])}),B}function Oe(M,N,k){var Z=M.type.indexOf("touch")===0,le=M.type.indexOf("mouse")===0,B=M.type.indexOf("pointer")===0,me=0,ge=0;if(M.type.indexOf("MSPointer")===0&&(B=!0),M.type==="mousedown"&&!M.buttons&&!M.touches)return!1;if(Z){var Xe=function(at){var He=at.target;return He===k||k.contains(He)||M.composed&&M.composedPath().shift()===k};if(M.type==="touchstart"){var Ze=Array.prototype.filter.call(M.touches,Xe);if(Ze.length>1)return!1;me=Ze[0].pageX,ge=Ze[0].pageY}else{var nt=Array.prototype.find.call(M.changedTouches,Xe);if(!nt)return!1;me=nt.pageX,ge=nt.pageY}}return N=N||wd(x),(le||B)&&(me=M.clientX+N.x,ge=M.clientY+N.y),M.pageOffset=N,M.points=[me,ge],M.cursor=le||B,M}function Be(M){var N=M-s1(o,e.ort),k=N*100/ve();return k=Kc(k),e.dir?100-k:k}function ot(M){var N=100,k=!1;return c.forEach(function(Z,le){if(!$(le)){var B=b[le],me=Math.abs(B-M),ge=me===100&&N===100,Xe=me<N,Ze=me<=N&&M>B;(Xe||Ze||ge)&&(k=le,N=me)}}),k}function Ye(M,N){M.type==="mouseout"&&M.target.nodeName==="HTML"&&M.relatedTarget===null&&F(M,N)}function dt(M,N){if(navigator.appVersion.indexOf("MSIE 9")===-1&&M.buttons===0&&N.buttonsProperty!==0)return F(M,N);var k=(e.dir?-1:1)*(M.calcPoint-N.startCalcPoint),Z=k*100/N.baseSize;ee(k>0,Z,N.locations,N.handleNumbers,N.connect)}function F(M,N){N.handle&&(Qa(N.handle,e.cssClasses.active),f-=1),N.listeners.forEach(function(k){R.removeEventListener(k[0],k[1])}),f===0&&(Qa(s,e.cssClasses.drag),xe(),M.cursor&&(w.style.cursor="",w.removeEventListener("selectstart",$c))),e.events.smoothSteps&&(N.handleNumbers.forEach(function(k){$e(k,b[k],!0,!0,!1,!1)}),N.handleNumbers.forEach(function(k){z("update",k)})),N.handleNumbers.forEach(function(k){z("change",k),z("set",k),z("end",k)})}function Ct(M,N){if(!N.handleNumbers.some($)){var k;if(N.handleNumbers.length===1){var Z=c[N.handleNumbers[0]];k=Z.children[0],f+=1,tn(k,e.cssClasses.active)}M.stopPropagation();var le=[],B=Re(i.move,R,dt,{target:M.target,handle:k,connect:N.connect,listeners:le,startCalcPoint:M.calcPoint,baseSize:ve(),pageOffset:M.pageOffset,handleNumbers:N.handleNumbers,buttonsProperty:M.buttons,locations:b.slice()}),me=Re(i.end,R,F,{target:M.target,handle:k,listeners:le,doNotReject:!0,handleNumbers:N.handleNumbers}),ge=Re("mouseout",R,Ye,{target:M.target,handle:k,listeners:le,doNotReject:!0,handleNumbers:N.handleNumbers});le.push.apply(le,B.concat(me,ge)),M.cursor&&(w.style.cursor=getComputedStyle(M.target).cursor,c.length>1&&tn(s,e.cssClasses.drag),w.addEventListener("selectstart",$c,!1)),N.handleNumbers.forEach(function(Xe){z("start",Xe)})}}function Ke(M){M.stopPropagation();var N=Be(M.calcPoint),k=ot(N);k!==!1&&(e.events.snap||Zc(s,e.cssClasses.tap,e.animationDuration),$e(k,N,!0,!0),xe(),z("slide",k,!0),z("update",k,!0),e.events.snap?Ct(M,{handleNumbers:[k]}):(z("change",k,!0),z("set",k,!0)))}function Je(M){var N=Be(M.calcPoint),k=h.getStep(N),Z=h.fromStepping(k);Object.keys(y).forEach(function(le){le.split(".")[0]==="hover"&&y[le].forEach(function(B){B.call(_e,Z)})})}function Ie(M,N){if(q()||$(N))return!1;var k=["Left","Right"],Z=["Down","Up"],le=["PageDown","PageUp"],B=["Home","End"];e.dir&&!e.ort?k.reverse():e.ort&&!e.dir&&(Z.reverse(),le.reverse());var me=M.key.replace("Arrow",""),ge=me===le[0],Xe=me===le[1],Ze=me===Z[0]||me===k[0]||ge,nt=me===Z[1]||me===k[1]||Xe,at=me===B[0],He=me===B[1];if(!Ze&&!nt&&!at&&!He)return!0;M.preventDefault();var ut;if(nt||Ze){var lt=Ze?0:1,pt=vt(N),bt=pt[lt];if(bt===null)return!1;bt===!1&&(bt=h.getDefaultStep(b[N],Ze,e.keyboardDefaultStep)),Xe||ge?bt*=e.keyboardPageMultiplier:bt*=e.keyboardMultiplier,bt=Math.max(bt,1e-7),bt=(Ze?-1:1)*bt,ut=g[N]+bt}else He?ut=e.spectrum.xVal[e.spectrum.xVal.length-1]:ut=e.spectrum.xVal[0];return $e(N,h.toStepping(ut),!0,!0),z("slide",N),z("update",N),z("change",N),z("set",N),!1}function ct(M){M.fixed||c.forEach(function(N,k){Re(i.start,N.children[0],Ct,{handleNumbers:[k]})}),M.tap&&Re(i.start,o,Ke,{}),M.hover&&Re(i.move,o,Je,{hover:!0}),M.drag&&u.forEach(function(N,k){if(!(N===!1||k===0||k===u.length-1)){var Z=c[k-1],le=c[k],B=[N],me=[Z,le],ge=[k-1,k];tn(N,e.cssClasses.draggable),M.fixed&&(B.push(Z.children[0]),B.push(le.children[0])),M.dragAll&&(me=c,ge=m),B.forEach(function(Xe){Re(i.start,Xe,Ct,{handles:me,handleNumbers:ge,connect:N})})}})}function Le(M,N){y[M]=y[M]||[],y[M].push(N),M.split(".")[0]==="update"&&c.forEach(function(k,Z){z("update",Z)})}function P(M){return M===_i.aria||M===_i.tooltips}function S(M){var N=M&&M.split(".")[0],k=N?M.substring(N.length):M;Object.keys(y).forEach(function(Z){var le=Z.split(".")[0],B=Z.substring(le.length);(!N||N===le)&&(!k||k===B)&&(!P(B)||k===B)&&delete y[Z]})}function z(M,N,k){Object.keys(y).forEach(function(Z){var le=Z.split(".")[0];M===le&&y[Z].forEach(function(B){B.call(_e,g.map(e.format.to),N,g.slice(),k||!1,b.slice(),_e)})})}function ie(M,N,k,Z,le,B,me){var ge;return c.length>1&&!e.events.unconstrained&&(Z&&N>0&&(ge=h.getAbsoluteDistance(M[N-1],e.margin,!1),k=Math.max(k,ge)),le&&N<c.length-1&&(ge=h.getAbsoluteDistance(M[N+1],e.margin,!0),k=Math.min(k,ge))),c.length>1&&e.limit&&(Z&&N>0&&(ge=h.getAbsoluteDistance(M[N-1],e.limit,!1),k=Math.min(k,ge)),le&&N<c.length-1&&(ge=h.getAbsoluteDistance(M[N+1],e.limit,!0),k=Math.max(k,ge))),e.padding&&(N===0&&(ge=h.getAbsoluteDistance(0,e.padding[0],!1),k=Math.max(k,ge)),N===c.length-1&&(ge=h.getAbsoluteDistance(100,e.padding[1],!0),k=Math.min(k,ge))),me||(k=h.getStep(k)),k=Kc(k),k===M[N]&&!B?!1:k}function ae(M,N){var k=e.ort;return(k?N:M)+", "+(k?M:N)}function ee(M,N,k,Z,le){var B=k.slice(),me=Z[0],ge=e.events.smoothSteps,Xe=[!M,M],Ze=[M,!M];Z=Z.slice(),M&&Z.reverse(),Z.length>1?Z.forEach(function(at,He){var ut=ie(B,at,B[at]+N,Xe[He],Ze[He],!1,ge);ut===!1?N=0:(N=ut-B[at],B[at]=ut)}):Xe=Ze=[!0];var nt=!1;Z.forEach(function(at,He){nt=$e(at,k[at]+N,Xe[He],Ze[He],!1,ge)||nt}),nt&&(Z.forEach(function(at){z("update",at),z("slide",at)}),le!=null&&z("drag",me))}function ce(M,N){return e.dir?100-M-N:M}function pe(M,N){b[M]=N,g[M]=h.fromStepping(N);var k=ce(N,0)-T,Z="translate("+ae(k+"%","0")+")";if(c[M].style[e.transformRule]=Z,e.events.invertConnects&&b.length>1){var le=b.every(function(B,me,ge){return me===0||B>=ge[me-1]});if(v!==!le){se();return}}he(M),he(M+1),v&&(he(M-1),he(M+2))}function xe(){m.forEach(function(M){var N=b[M]>50?-1:1,k=3+(c.length+N*M);c[M].style.zIndex=String(k)})}function $e(M,N,k,Z,le,B){return le||(N=ie(b,M,N,k,Z,!1,B)),N===!1?!1:(pe(M,N),!0)}function he(M){if(u[M]){var N=b.slice();v&&N.sort(function(ge,Xe){return ge-Xe});var k=0,Z=100;M!==0&&(k=N[M-1]),M!==u.length-1&&(Z=N[M]);var le=Z-k,B="translate("+ae(ce(k,le)+"%","0")+")",me="scale("+ae(le/100,"1")+")";u[M].style[e.transformRule]=B+" "+me}}function Pe(M,N){return M===null||M===!1||M===void 0||(typeof M=="number"&&(M=String(M)),M=e.format.from(M),M!==!1&&(M=h.toStepping(M)),M===!1||isNaN(M))?b[N]:M}function De(M,N,k){var Z=ws(M),le=b[0]===void 0;N=N===void 0?!0:N,e.animate&&!le&&Zc(s,e.cssClasses.tap,e.animationDuration),m.forEach(function(ge){$e(ge,Pe(Z[ge],ge),!0,!1,k)});var B=m.length===1?0:1;if(le&&h.hasNoSize()&&(k=!0,b[0]=0,m.length>1)){var me=100/(m.length-1);m.forEach(function(ge){b[ge]=ge*me})}for(;B<m.length;++B)m.forEach(function(ge){$e(ge,b[ge],!0,!0,k)});xe(),m.forEach(function(ge){z("update",ge),Z[ge]!==null&&N&&z("set",ge)})}function ke(M){De(e.start,M)}function Te(M,N,k,Z){if(M=Number(M),!(M>=0&&M<m.length))throw new Error("noUiSlider: invalid handle number, got: "+M);$e(M,Pe(N,M),!0,!0,Z),z("update",M),k&&z("set",M)}function Qe(M){if(M===void 0&&(M=!1),M)return g.length===1?g[0]:g.slice(0);var N=g.map(e.format.to);return N.length===1?N[0]:N}function We(){for(S(_i.aria),S(_i.tooltips),Object.keys(e.cssClasses).forEach(function(M){Qa(s,e.cssClasses[M])});s.firstChild;)s.removeChild(s.firstChild);delete s.noUiSlider}function vt(M){var N=b[M],k=h.getNearbySteps(N),Z=g[M],le=k.thisStep.step,B=null;if(e.snap)return[Z-k.stepBefore.startValue||null,k.stepAfter.startValue-Z||null];le!==!1&&Z+le>k.stepAfter.startValue&&(le=k.stepAfter.startValue-Z),Z>k.thisStep.startValue?B=k.thisStep.step:k.stepBefore.step===!1?B=!1:B=Z-k.stepBefore.highestStep,N===100?le=null:N===0&&(B=null);var me=h.countStepDecimals();return le!==null&&le!==!1&&(le=Number(le.toFixed(me))),B!==null&&B!==!1&&(B=Number(B.toFixed(me))),[B,le]}function O(){return m.map(vt)}function ye(M,N){var k=Qe(),Z=["margin","limit","padding","range","animate","snap","step","format","pips","tooltips","connect"];Z.forEach(function(B){M[B]!==void 0&&(t[B]=M[B])});var le=Pd(t);Z.forEach(function(B){M[B]!==void 0&&(e[B]=le[B])}),h=le.spectrum,e.margin=le.margin,e.limit=le.limit,e.padding=le.padding,e.pips?Ce(e.pips):fe(),e.tooltips?de():W(),b=[],De(Zo(M.start)?M.start:k,N),M.connect&&Q()}function Q(){for(;l.firstChild;)l.removeChild(l.firstChild);for(var M=0;M<=e.handles;M++)u[M]=_(l,e.connect[M]),he(M);ct({drag:e.events.drag,fixed:!0})}function se(){v=!v,Td(e,e.connect.map(function(M){return!M})),Q()}function Me(){o=I(s),L(e.connect,o),ct(e.events),De(e.start),e.pips&&Ce(e.pips),e.tooltips&&de(),j()}Me();var _e={destroy:We,steps:O,on:Le,off:S,get:Qe,set:De,setHandle:Te,reset:ke,disable:J,enable:ue,__moveHandles:function(M,N,k){ee(M,N,b,k)},options:t,updateOptions:ye,target:s,removePips:fe,removeTooltips:W,getPositions:function(){return b.slice()},getTooltips:function(){return p},getOrigins:function(){return c},pips:Ce};return _e}function z1(n,e){if(!n||!n.nodeName)throw new Error("noUiSlider: create requires a single element, got: "+n);if(n.noUiSlider)throw new Error("noUiSlider: Slider was already initialized.");var t=Pd(e),i=B1(n,t,e);return n.noUiSlider=i,i}const V1={__spectrum:Ed,cssClasses:Cd,create:z1},H1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.06935 5.25839C2 5.62595 2 6.06722 2 6.94975V9.25H21.9531C21.8809 8.20117 21.6973 7.51276 21.2305 6.99383C21.1598 6.91514 21.0849 6.84024 21.0062 6.76946C20.1506 6 18.8345 6 16.2021 6H15.8284C14.6747 6 14.0979 6 13.5604 5.84678C13.2651 5.7626 12.9804 5.64471 12.7121 5.49543C12.2237 5.22367 11.8158 4.81578 11 4L10.4497 3.44975C10.1763 3.17633 10.0396 3.03961 9.89594 2.92051C9.27652 2.40704 8.51665 2.09229 7.71557 2.01738C7.52976 2 7.33642 2 6.94975 2C6.06722 2 5.62595 2 5.25839 2.06935C3.64031 2.37464 2.37464 3.64031 2.06935 5.25839ZM21.9978 10.75H2V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V11.7979C22 11.4227 21.9978 10.75 21.9978 10.75Z" fill="#1C274C"/>\r
</svg>`,G1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z" fill="#1C274C"/>\r
</svg>`,W1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="#1C274C"/>\r
</svg>`,X1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4277 2C11.3139 2 10.2995 2.6007 8.27081 3.80211L7.58466 4.20846C5.55594 5.40987 4.54158 6.01057 3.98466 7C3.42773 7.98943 3.42773 9.19084 3.42773 11.5937V12.4063C3.42773 14.8092 3.42773 16.0106 3.98466 17C4.54158 17.9894 5.55594 18.5901 7.58466 19.7915L8.27081 20.1979C10.2995 21.3993 11.3139 22 12.4277 22C13.5416 22 14.5559 21.3993 16.5847 20.1979L17.2708 19.7915C19.2995 18.5901 20.3139 17.9894 20.8708 17C21.4277 16.0106 21.4277 14.8092 21.4277 12.4063V11.5937C21.4277 9.19084 21.4277 7.98943 20.8708 7C20.3139 6.01057 19.2995 5.40987 17.2708 4.20846L16.5847 3.80211C14.5559 2.6007 13.5416 2 12.4277 2ZM8.67773 12C8.67773 9.92893 10.3567 8.25 12.4277 8.25C14.4988 8.25 16.1777 9.92893 16.1777 12C16.1777 14.0711 14.4988 15.75 12.4277 15.75C10.3567 15.75 8.67773 14.0711 8.67773 12Z" fill="#1C274C"/>\r
</svg>`,Jo=`<?xml version="1.0" encoding="utf-8"?>
\r<!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<g id="Menu / Close_LG">\r
<path id="Vector" d="M21 21L12 12M12 12L3 3M12 12L21.0001 3M12 12L3 21.0001" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\r
</g>\r
</svg>`,q1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7713 22 14 22H10C6.22878 22 4.34315 22 3.17157 20.8284C2.19725 19.8541 2.03321 18.3859 2.00559 15.7501H10.6937L8.43392 17.3935C8.09893 17.6371 8.02487 18.1062 8.26849 18.4412C8.51212 18.7762 8.98118 18.8502 9.31617 18.6066L13.4412 15.6066C13.6352 15.4655 13.75 15.24 13.75 15.0001C13.75 14.7601 13.6352 14.5346 13.4412 14.3935L9.31617 11.3935C8.98118 11.1499 8.51212 11.2239 8.26849 11.5589C8.02487 11.8939 8.09893 12.363 8.43392 12.6066L10.6937 14.2501H2.00001L2 14L2.00003 6.94975C2.00003 6.06725 2.00003 5.62594 2.06938 5.25839C2.37467 3.64031 3.64033 2.37464 5.25841 2.06935C5.62597 2 6.06724 2 6.94977 2C7.33644 2 7.52978 2 7.71559 2.01738C8.51667 2.09229 9.27654 2.40704 9.89596 2.92051C10.0396 3.03961 10.1763 3.17633 10.4498 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9805 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6748 6 15.8284 6H16.2021C18.8345 6 20.1507 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2306 6.99383C22 7.84935 22 9.16554 22 11.7979Z" fill="#1C274C"/>\r
</svg>`,Y1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 3H5.75C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H6V15C6 13.7574 7.00736 12.75 8.25 12.75H15.75C16.9926 12.75 18 13.7574 18 15V21H18.25C19.7688 21 21 19.7688 21 18.25V8.28553C21 7.42358 20.6576 6.59693 20.0481 5.98744L18.0126 3.9519C17.4114 3.35079 16.5991 3.00947 15.75 3.00019V7.5C15.75 8.74264 14.7426 9.75 13.5 9.75H9C7.75736 9.75 6.75 8.74264 6.75 7.5V3Z" fill="#212121"/>
<path d="M14.25 3V7.5C14.25 7.91421 13.9142 8.25 13.5 8.25H9C8.58579 8.25 8.25 7.91421 8.25 7.5V3H14.25Z" fill="#212121"/>
<path d="M16.5 21V15C16.5 14.5858 16.1642 14.25 15.75 14.25H8.25C7.83579 14.25 7.5 14.5858 7.5 15V21H16.5Z" fill="#212121"/>
</svg>`,j1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 11.0975V16.0909C21 19.1875 21 20.7358 20.2659 21.4123C19.9158 21.735 19.4739 21.9377 19.0031 21.9915C18.016 22.1045 16.8633 21.0849 14.5578 19.0458C13.5388 18.1445 13.0292 17.6938 12.4397 17.5751C12.1494 17.5166 11.8506 17.5166 11.5603 17.5751C10.9708 17.6938 10.4612 18.1445 9.44216 19.0458C7.13673 21.0849 5.98402 22.1045 4.99692 21.9915C4.52615 21.9377 4.08421 21.735 3.73411 21.4123C3 20.7358 3 19.1875 3 16.0909V11.0975C3 6.80891 3 4.6646 4.31802 3.3323C5.63604 2 7.75736 2 12 2C16.2426 2 18.364 2 19.682 3.3323C21 4.6646 21 6.80891 21 11.0975ZM8.25 6C8.25 5.58579 8.58579 5.25 9 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H9C8.58579 6.75 8.25 6.41421 8.25 6Z" fill="#1C274D"/>\r
</svg>`,$1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.75 3H5.75C4.23122 3 3 4.23122 3 5.75V18.25C3 19.7688 4.23122 21 5.75 21H6V15C6 13.7574 7.00736 12.75 8.25 12.75H15.6031L17.3907 10.9624C18.0317 10.3214 18.8742 10.0004 19.713 10H19.7151C20.1521 10.0002 20.59 10.0874 21 10.2615V8.28553C21 7.42358 20.6576 6.59693 20.0481 5.98744L18.0126 3.9519C17.4114 3.35079 16.5991 3.00947 15.75 3.00019V7.5C15.75 8.74264 14.7426 9.75 13.5 9.75H9C7.75736 9.75 6.75 8.74264 6.75 7.5V3Z" fill="#212121"/>
<path d="M14.1031 14.25L11.4883 16.8648C11.016 17.3371 10.681 17.9288 10.519 18.5768L10.0613 20.4075C10.011 20.6088 9.99129 20.8075 9.99852 21H7.5V15C7.5 14.5858 7.83579 14.25 8.25 14.25H14.1031Z" fill="#212121"/>
<path d="M14.25 3V7.5C14.25 7.91421 13.9142 8.25 13.5 8.25H9C8.58579 8.25 8.25 7.91421 8.25 7.5V3H14.25Z" fill="#212121"/>
<path d="M19.7152 11H19.7131C19.1285 11.0003 18.5439 11.2234 18.0979 11.6695L12.1955 17.5719C11.8513 17.916 11.6072 18.3472 11.4892 18.8194L11.0315 20.6501C10.8325 21.4462 11.5536 22.1674 12.3497 21.9683L14.1804 21.5106C14.6526 21.3926 15.0838 21.1485 15.4279 20.8043L21.3303 14.9019C22.223 14.0093 22.223 12.5621 21.3303 11.6695C20.8843 11.2234 20.2998 11.0003 19.7152 11Z" fill="#212121"/>
</svg>`,Z1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2.75 6.16667C2.75 5.70644 3.09538 5.33335 3.52143 5.33335L6.18567 5.3329C6.71502 5.31841 7.18202 4.95482 7.36214 4.41691C7.36688 4.40277 7.37232 4.38532 7.39185 4.32203L7.50665 3.94993C7.5769 3.72179 7.6381 3.52303 7.72375 3.34536C8.06209 2.64349 8.68808 2.1561 9.41147 2.03132C9.59457 1.99973 9.78848 1.99987 10.0111 2.00002H13.4891C13.7117 1.99987 13.9056 1.99973 14.0887 2.03132C14.8121 2.1561 15.4381 2.64349 15.7764 3.34536C15.8621 3.52303 15.9233 3.72179 15.9935 3.94993L16.1083 4.32203C16.1279 4.38532 16.1333 4.40277 16.138 4.41691C16.3182 4.95482 16.8778 5.31886 17.4071 5.33335H19.9786C20.4046 5.33335 20.75 5.70644 20.75 6.16667C20.75 6.62691 20.4046 7 19.9786 7H3.52143C3.09538 7 2.75 6.62691 2.75 6.16667Z" fill="#1C274C"/>\r
<path d="M11.6068 21.9998H12.3937C15.1012 21.9998 16.4549 21.9998 17.3351 21.1366C18.2153 20.2734 18.3054 18.8575 18.4855 16.0256L18.745 11.945C18.8427 10.4085 18.8916 9.6402 18.45 9.15335C18.0084 8.6665 17.2628 8.6665 15.7714 8.6665H8.22905C6.73771 8.6665 5.99204 8.6665 5.55047 9.15335C5.10891 9.6402 5.15777 10.4085 5.25549 11.945L5.515 16.0256C5.6951 18.8575 5.78515 20.2734 6.66534 21.1366C7.54553 21.9998 8.89927 21.9998 11.6068 21.9998Z" fill="#1C274C"/>\r
</svg>`,Rd=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447ZM16 10C17.1046 10 18 9.10457 18 8C18 6.89543 17.1046 6 16 6C14.8954 6 14 6.89543 14 8C14 9.10457 14.8954 10 16 10ZM6.32092 13.1038C6.94501 12.5241 7.91991 12.5566 8.50397 13.1766L11.1515 15.9869C11.9509 16.8356 13.2596 16.9499 14.1941 16.2527C14.8073 15.7953 15.661 15.8473 16.2141 16.3757L18.4819 18.5423C18.7814 18.8284 19.2562 18.8176 19.5423 18.5181C19.8284 18.2186 19.8176 17.7438 19.5181 17.4577L17.2503 15.2911C16.1679 14.257 14.4971 14.1553 13.2972 15.0504C12.9735 15.2919 12.5202 15.2523 12.2433 14.9584L9.59579 12.1481C8.44651 10.9281 6.52816 10.8641 5.3001 12.0047L4.4896 12.7575C4.1861 13.0394 4.16858 13.5139 4.45047 13.8174C4.73236 14.1209 5.20691 14.1385 5.51041 13.8566L6.32092 13.1038Z" fill="#1C274C"/>\r
</svg>`,K1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#1C274C" stroke-width="1.5"/>\r
<circle cx="16" cy="8" r="2" stroke="#1C274C" stroke-width="1.5"/>\r
<path d="M5 13.307L5.81051 12.5542C6.73658 11.6941 8.18321 11.7424 9.04988 12.6623L11.6974 15.4727C12.2356 16.0439 13.1166 16.1209 13.7457 15.6516C14.6522 14.9753 15.9144 15.0522 16.7322 15.8334L19 18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>\r
</svg>`,J1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M8.50989 2.00001H15.49C15.7225 1.99995 15.9007 1.99991 16.0565 2.01515C17.1643 2.12352 18.0711 2.78958 18.4556 3.68678H5.54428C5.92879 2.78958 6.83555 2.12352 7.94337 2.01515C8.09917 1.99991 8.27741 1.99995 8.50989 2.00001Z" fill="#1C274C"/>\r
<path d="M6.31052 4.72312C4.91989 4.72312 3.77963 5.56287 3.3991 6.67691C3.39117 6.70013 3.38356 6.72348 3.37629 6.74693C3.77444 6.62636 4.18881 6.54759 4.60827 6.49382C5.68865 6.35531 7.05399 6.35538 8.64002 6.35547H15.5321C17.1181 6.35538 18.4835 6.35531 19.5639 6.49382C19.9833 6.54759 20.3977 6.62636 20.7958 6.74693C20.7886 6.72348 20.781 6.70013 20.773 6.67691C20.3925 5.56287 19.2522 4.72312 17.8616 4.72312H6.31052Z" fill="#1C274C"/>\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3276 7.54204H8.67239C5.29758 7.54204 3.61017 7.54204 2.66232 8.52887C1.71447 9.5157 1.93748 11.0403 2.38351 14.0896L2.80648 16.9811C3.15626 19.3724 3.33115 20.568 4.22834 21.284C5.12553 22 6.4488 22 9.09534 22H14.9046C17.5512 22 18.8745 22 19.7717 21.284C20.6689 20.568 20.8437 19.3724 21.1935 16.9811L21.6165 14.0896C22.0625 11.0404 22.2855 9.51569 21.3377 8.52887C20.3898 7.54204 18.7024 7.54204 15.3276 7.54204ZM14.5812 15.7942C15.1396 15.4481 15.1396 14.5519 14.5812 14.2058L11.2096 12.1156C10.6669 11.7792 10 12.2171 10 12.9099V17.0901C10 17.7829 10.6669 18.2208 11.2096 17.8844L14.5812 15.7942Z" fill="#1C274C"/>\r
</svg>`,Q1=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M17.5777 4.43152L15.5777 3.38197C13.8221 2.46066 12.9443 2 12 2C11.0557 2 10.1779 2.46066 8.42229 3.38197L6.42229 4.43152C4.64855 5.36234 3.6059 5.9095 2.95969 6.64132L12 11.1615L21.0403 6.64132C20.3941 5.9095 19.3515 5.36234 17.5777 4.43152Z" fill="#1C274C"/>\r
<path d="M21.7484 7.96435L12.75 12.4635V21.904C13.4679 21.7252 14.2848 21.2965 15.5777 20.618L17.5777 19.5685C19.7294 18.4393 20.8052 17.8748 21.4026 16.8603C22 15.8458 22 14.5833 22 12.0585V11.9415C22 10.0489 22 8.86558 21.7484 7.96435Z" fill="#1C274C"/>\r
<path d="M11.25 21.904V12.4635L2.25164 7.96434C2 8.86557 2 10.0489 2 11.9415V12.0585C2 14.5833 2 15.8458 2.5974 16.8603C3.19479 17.8748 4.27063 18.4393 6.42229 19.5685L8.42229 20.618C9.71524 21.2965 10.5321 21.7252 11.25 21.904Z" fill="#1C274C"/>\r
</svg>`,e_=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">\r
  <path fill="#000000" fill-rule="evenodd" d="M9 17a1 1 0 102 0v-6h6a1 1 0 100-2h-6V3a1 1 0 10-2 0v6H3a1 1 0 000 2h6v6z"/>\r
</svg>`,Qc=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M11.4096 5.50506C13.0796 3.83502 13.9146 3 14.9522 3C15.9899 3 16.8249 3.83502 18.4949 5.50506C20.165 7.1751 21 8.01013 21 9.04776C21 10.0854 20.165 10.9204 18.4949 12.5904L14.3017 16.7837L7.21634 9.69828L11.4096 5.50506Z" fill="#1C274C"/>\r
<path d="M6.1557 10.759L13.2411 17.8443L12.5904 18.4949C12.2127 18.8727 11.8777 19.2077 11.5734 19.5H21C21.4142 19.5 21.75 19.8358 21.75 20.25C21.75 20.6642 21.4142 21 21 21H9C7.98423 20.9747 7.1494 20.1393 5.50506 18.4949C3.83502 16.8249 3 15.9899 3 14.9522C3 13.9146 3.83502 13.0796 5.50506 11.4096L6.1557 10.759Z" fill="#1C274C"/>\r
</svg>`,t_=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M4.85355 2.14645C5.04882 2.34171 5.04882 2.65829 4.85355 2.85355L3.70711 4H9C11.4853 4 13.5 6.01472 13.5 8.5C13.5 10.9853 11.4853 13 9 13H5C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12H9C10.933 12 12.5 10.433 12.5 8.5C12.5 6.567 10.933 5 9 5H3.70711L4.85355 6.14645C5.04882 6.34171 5.04882 6.65829 4.85355 6.85355C4.65829 7.04882 4.34171 7.04882 4.14645 6.85355L2.14645 4.85355C1.95118 4.65829 1.95118 4.34171 2.14645 4.14645L4.14645 2.14645C4.34171 1.95118 4.65829 1.95118 4.85355 2.14645Z"
    fill="#000000"
  />
</svg>`,n_=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.25 4C20.3211 4 22 5.67893 22 7.75V16.25C22 18.3211 20.3211 20 18.25 20H5.75C3.67893 20 2 18.3211 2 16.25V7.75C2 5.67893 3.67893 4 5.75 4H18.25ZM18.25 5.5H5.75C4.50736 5.5 3.5 6.50736 3.5 7.75V16.25C3.5 17.4926 4.50736 18.5 5.75 18.5H18.25C19.4926 18.5 20.5 17.4926 20.5 16.25V7.75C20.5 6.50736 19.4926 5.5 18.25 5.5ZM18.25 13C18.6642 13 19 13.3358 19 13.75V15C19 16.1046 18.1046 17 17 17H15.75C15.3358 17 15 16.6642 15 16.25C15 15.8358 15.3358 15.5 15.75 15.5H17C17.2761 15.5 17.5 15.2761 17.5 15V13.75C17.5 13.3358 17.8358 13 18.25 13ZM5.75 13C6.16421 13 6.5 13.3358 6.5 13.75V15C6.5 15.2761 6.72386 15.5 7 15.5H8.25C8.66421 15.5 9 15.8358 9 16.25C9 16.6642 8.66421 17 8.25 17H7C5.89543 17 5 16.1046 5 15V13.75C5 13.3358 5.33579 13 5.75 13ZM7 7H8.25C8.66421 7 9 7.33579 9 7.75C9 8.1297 8.71785 8.44349 8.35177 8.49315L8.25 8.5H7C6.75454 8.5 6.55039 8.67688 6.50806 8.91012L6.5 9V10.25C6.5 10.6642 6.16421 11 5.75 11C5.3703 11 5.05651 10.7178 5.00685 10.3518L5 10.25V9C5 7.94564 5.81588 7.08183 6.85074 7.00549L7 7ZM17 7C18.1046 7 19 7.89543 19 9V10.25C19 10.6642 18.6642 11 18.25 11C17.8358 11 17.5 10.6642 17.5 10.25V9C17.5 8.72386 17.2761 8.5 17 8.5H15.75C15.3358 8.5 15 8.16421 15 7.75C15 7.33579 15.3358 7 15.75 7H17Z" fill="#212121"/>
</svg>`,ht="__none__",eu=Object.freeze(["always",">",">=","<","<=","==","!="]),tu=Object.freeze([{id:"file",label:re.menu.file},{id:"view",label:re.menu.view},{id:"settings",label:re.menu.settings},{id:"rules",label:re.menu.rules}]),i_=Object.freeze([512,1024,2048,4096,8192,16384]),r_=Object.freeze([{key:"inputGain",label:re.settings.sensitivity,min:0,max:3,step:.01,tooltip:"Technical term: Input Gain. Scales all amplitude before analysis."},{key:"defaultParticleSize",label:re.settings.particleDefaultSize,min:1,max:40,step:.5,tooltip:"Technical term: Particle Size. Base sprite diameter in pixels."},{key:"maxParticles",label:re.settings.particleCapacity,min:1e5,max:5e6,step:5e4,tooltip:"Technical term: Max Particle Capacity. Total GPU particle slots."},{key:"particlesByFrame",label:re.settings.spawnRate,min:100,max:5e3,step:1,tooltip:"Technical term: Particles By Frame. Number of log-frequency spawn buckets per frame."},{key:"fluxWindowFrames",label:re.settings.activityInterval,min:1,max:64,step:1,tooltip:"Technical term: Flux Window Frames. Rolling frame window for activity averaging."}]),a_=Object.freeze([{id:"frequencyRange",syncKeys:["freqNormMin","freqNormMax"],label:re.settings.frequencyRange,min:16,max:2e4,step:1,unit:"Hz",tooltip:"Technical terms: Freq Norm Min / Freq Norm Max. Physical frequency normalization range.",get:()=>({min:Number(K.freqNormMin??40),max:Number(K.freqNormMax??12e3)}),set:(n,e)=>$t({freqNormMin:n,freqNormMax:e})},{id:"volumeRange",syncKeys:["binMagnitudeNormMin","binMagnitudeNormMax"],label:re.settings.volume,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Per-Bin Magnitude Min / Max. Per-frequency volume normalization.",get:()=>({min:Number(K.binMagnitudeNormMin??-70),max:Number(K.binMagnitudeNormMax??0)}),set:(n,e)=>$t({binMagnitudeNormMin:n,binMagnitudeNormMax:e})},{id:"instabilityRange",syncKeys:["binPhaseDeviationNormMin","binPhaseDeviationNormMax"],label:re.settings.instability,min:0,max:Math.PI,step:.001,unit:"rad",tooltip:"Technical terms: Per-Bin Phase Deviation Min / Max. Phase instability normalization.",get:()=>({min:Number(K.binPhaseDeviationNormMin??0),max:Number(K.binPhaseDeviationNormMax??Math.PI)}),set:(n,e)=>$t({binPhaseDeviationNormMin:n,binPhaseDeviationNormMax:e})},{id:"attackSharpnessRange",syncKeys:["binAttackTimeNormMin","binAttackTimeNormMax"],label:re.settings.attackSharpness,min:0,max:2e3,step:1,unit:"ms",tooltip:"Technical terms: Per-Bin Attack Time Min / Max. Attack-time normalization.",get:()=>({min:Number(K.binAttackTimeNormMin??5),max:Number(K.binAttackTimeNormMax??500)}),set:(n,e)=>$t({binAttackTimeNormMin:n,binAttackTimeNormMax:e})},{id:"energyRange",syncKeys:["globalRmsNormMin","globalRmsNormMax"],label:re.settings.energy,min:-120,max:0,step:1,unit:"dBFS",tooltip:"Technical terms: Global RMS Energy Min / Max. Frame-wide RMS normalization.",get:()=>({min:Number(K.globalRmsNormMin??-60),max:Number(K.globalRmsNormMax??0)}),set:(n,e)=>$t({globalRmsNormMin:n,globalRmsNormMax:e})},{id:"sharpnessRange",syncKeys:["spectralCentroidNormMin","spectralCentroidNormMax"],label:re.settings.sharpness,min:16,max:22050,step:1,unit:"Hz",tooltip:"Technical terms: Spectral Centroid Min / Max. Spectral sharpness normalization.",get:()=>({min:Number(K.spectralCentroidNormMin??150),max:Number(K.spectralCentroidNormMax??8e3)}),set:(n,e)=>$t({spectralCentroidNormMin:n,spectralCentroidNormMax:e})},{id:"activityRange",syncKeys:["globalSpectralFluxNormMin","globalSpectralFluxNormMax","binFluxNormMin","binFluxNormMax"],label:re.settings.activity,min:0,max:200,step:.1,unit:"AU",tooltip:"Technical terms: Per-Bin Spectral Flux Min / Max and Global Spectral Flux Min / Max. Controls both detail and global activity ranges.",get:()=>({min:Number(K.globalSpectralFluxNormMin??0),max:Number(K.globalSpectralFluxNormMax??100)}),set:(n,e)=>{$t({globalSpectralFluxNormMin:n,globalSpectralFluxNormMax:e,binFluxNormMin:n/100,binFluxNormMax:e/100})}},{id:"noisinessRange",syncKeys:["spectralFlatnessNormMin","spectralFlatnessNormMax"],label:re.settings.noisiness,min:0,max:1,step:.001,unit:"ratio",tooltip:"Technical terms: Spectral Flatness Min / Max. Noise-vs-tone normalization.",get:()=>({min:Number(K.spectralFlatnessNormMin??0),max:Number(K.spectralFlatnessNormMax??1)}),set:(n,e)=>$t({spectralFlatnessNormMin:n,spectralFlatnessNormMax:e})}]),s_=Object.freeze([{target:"spawnedParticles",section:"Particles",subgroup:"Position",output:"x",label:"X"},{target:"spawnedParticles",section:"Particles",subgroup:"Position",output:"y",label:"Y"},{target:"spawnedParticles",section:"Particles",subgroup:"Position",output:"z",label:"Z"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"size",label:"Size"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"shapeType",label:"Shape",type:"enum",options:["circle","square"]},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"particleCount",label:"Particle Count"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"red",label:"Red"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"green",label:"Green"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"spawnedParticles",section:"Particles",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"lines",section:"Lines",subgroup:"Position",output:"xStart",label:"X Start"},{target:"lines",section:"Lines",subgroup:"Position",output:"xEnd",label:"X End"},{target:"lines",section:"Lines",subgroup:"Position",output:"yStart",label:"Y Start"},{target:"lines",section:"Lines",subgroup:"Position",output:"yEnd",label:"Y End"},{target:"lines",section:"Lines",subgroup:"Position",output:"zStart",label:"Z Start"},{target:"lines",section:"Lines",subgroup:"Position",output:"zEnd",label:"Z End"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"thickness",label:"Thickness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"lineCount",label:"Line Count"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"red",label:"Red"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"green",label:"Green"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"luma",label:"Luma"},{target:"lines",section:"Lines",subgroup:"Appearance",output:"opacity",label:"Opacity"},{target:"background",section:"Background",subgroup:"Appearance",output:"red",label:"Red"},{target:"background",section:"Background",subgroup:"Appearance",output:"green",label:"Green"},{target:"background",section:"Background",subgroup:"Appearance",output:"blue",label:"Blue"},{target:"background",section:"Background",subgroup:"Appearance",output:"hue",label:"Hue"},{target:"background",section:"Background",subgroup:"Appearance",output:"saturation",label:"Saturation"},{target:"background",section:"Background",subgroup:"Appearance",output:"brightness",label:"Brightness"},{target:"camera",section:"Camera",subgroup:"Position",output:"x",label:"Position X"},{target:"camera",section:"Camera",subgroup:"Position",output:"y",label:"Position Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"z",label:"Position Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetX",label:"Target X"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetY",label:"Target Y"},{target:"camera",section:"Camera",subgroup:"Position",output:"targetZ",label:"Target Z"},{target:"camera",section:"Camera",subgroup:"Position",output:"angleOfView",label:"Angle Of View"}]),Nd=new Set(Ur.map(n=>n.id));new RegExp(`\\b(${Ur.map(n=>n.id.replace(/[.*+?^${}()|[\\]\\]/g,"\\$&")).sort((n,e)=>e.length-n.length).join("|")})\\b`,"g");const nu=Object.freeze({file:H1,view:G1,settings:W1,rules:X1}),Vt=Object.freeze({load:q1,save:Y1,savePreset:j1,saveAs:$1,remove:Z1,exportImage:Rd,exportImageNoBg:K1,exportVideo:J1,exportObj:Q1,reset:t_,fit:n_,add:e_,clear:Qc,clean:Qc,close:Jo}),Ld=Object.freeze([{value:"math:add",label:re.rules.mathAdd},{value:"math:subtract",label:re.rules.mathSubtract},{value:"math:multiply",label:re.rules.mathMultiply},{value:"math:divide",label:re.rules.mathDivide},{value:"math:parentheses",label:re.rules.mathParentheses},{value:"math:power",label:"Power"},{value:"math:clamp",label:"Clamp"},{value:"math:average",label:"Average"}]);function o_(){return{all:[],byKey:new Map}}function zt(n,e,t=null){if(!(!n||typeof e!="function")){if(!Array.isArray(t)||t.length===0){n.all.push(e);return}for(const i of t){const r=String(i||"").trim();r&&(n.byKey.has(r)||n.byKey.set(r,[]),n.byKey.get(r).push(e))}}}function iu(n){for(const e of n)try{e()}catch{}}function ru(n,e=[],t=!1){var r;const i=new Set(t?(n==null?void 0:n.all)||[]:[]);for(const a of Array.isArray(e)?e:[]){const s=String(a||"").trim();if(!s)continue;const o=(r=n==null?void 0:n.byKey)==null?void 0:r.get(s);if(o)for(const l of o)i.add(l)}return[...i]}function D(n,e="",t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,a]of Object.entries(t))r==="text"?i.textContent=a:r==="html"?i.innerHTML=a:a!=null&&i.setAttribute(r,String(a));return i}function kn(n,e,t){const i=Number(n);return Number.isFinite(i)?Math.max(e,Math.min(t,i)):e}function l_(n,e,t){const i=kn(Math.round(n),0,255).toString(16).padStart(2,"0"),r=kn(Math.round(e),0,255).toString(16).padStart(2,"0"),a=kn(Math.round(t),0,255).toString(16).padStart(2,"0");return`#${i}${r}${a}`}function c_(n,e,t){const i=(Number(n)%360+360)%360,r=kn(Number(e)/100,0,1),a=kn(Number(t)/100,0,1),s=(1-Math.abs(2*a-1))*r,o=s*(1-Math.abs(i/60%2-1)),l=a-s/2;let c=0,u=0,d=0;return i<60?(c=s,u=o,d=0):i<120?(c=o,u=s,d=0):i<180?(c=0,u=s,d=o):i<240?(c=0,u=o,d=s):i<300?(c=o,u=0,d=s):(c=s,u=0,d=o),{r:Math.round((c+l)*255),g:Math.round((u+l)*255),b:Math.round((d+l)*255)}}function u_(n){const e=String(n||"").trim().replace(/^#/,"");if(!/^[0-9a-fA-F]{6}$/.test(e))return{h:0,s:0,l:0};const t=parseInt(e.slice(0,2),16)/255,i=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,a=Math.max(t,i,r),s=Math.min(t,i,r),o=a-s;let l=0;o>0&&(a===t?l=60*((i-r)/o%6):a===i?l=60*((r-t)/o+2):l=60*((t-i)/o+4)),l<0&&(l+=360);const c=(a+s)/2,u=o===0?0:o/(1-Math.abs(2*c-1));return{h:l,s:u*100,l:c*100}}function Ht(n,e,t){if(!n||!e)return;const i=String(t||n.textContent||"").trim();n.textContent="",n.append(D("span","cp-btn-icon",{html:e}),D("span","cp-btn-label",{text:i})),n.setAttribute("aria-label",i)}function Tl(n){const e=String(n||""),t=Yo(e);return{type:"pill",label:(t==null?void 0:t.label)||e,code:e}}function Al(n=0){const e=Number(n);return{type:"number",value:Number.isFinite(e)?e:0}}function kt(n){return{type:"op",code:String(n||"")}}function Dn(){return{type:"slot"}}function d_(n){return n==="math:add"?[kt(" + ")]:n==="math:subtract"?[kt(" - ")]:n==="math:multiply"?[kt(" * ")]:n==="math:divide"?[kt(" / ")]:n==="math:parentheses"?[kt("("),Dn(),kt(")")]:n==="math:power"?[kt("pow("),Dn(),kt(", "),Dn(),kt(")")]:n==="math:clamp"?[kt("clamp("),Dn(),kt(", "),Dn(),kt(", "),Dn(),kt(")")]:n==="math:average"?[kt("avg("),Dn(),kt(", "),Dn(),kt(")")]:[Dn()]}function au(n){return!n||typeof n!="object"?null:n.type==="pill"?Tl(n.code):n.type==="number"?Al(n.value):n.type==="op"?kt(n.code):n.type==="slot"?Dn():null}function Fd(n){const e=[];for(const t of Array.isArray(n)?n:[])if(!(!t||typeof t!="object")){if(t.type==="pill"){e.push(String(t.code||""));continue}if(t.type==="number"){const i=Number(t.value);e.push(Number.isFinite(i)?String(i):"0");continue}t.type==="op"&&e.push(String(t.code||""))}return e.join("")}function p_(n){const e=String(n||"");if(!e.trim())return[];const t=new Set(Ur.map(s=>s.id)),i=/([A-Za-z_][A-Za-z0-9_]*|\d+(?:\.\d+)?|[()+\-*/])/g,r=[];let a=0;for(const s of e.matchAll(i)){const o=Number(s.index);if(o>a){const c=e.slice(a,o);c.trim()&&r.push(kt(c))}const l=String(s[0]||"");t.has(l)?r.push(Tl(l)):/^\d+(?:\.\d+)?$/.test(l)?r.push(Al(Number(l))):r.push(kt(["+","-","*","/"].includes(l)?` ${l} `:l)),a=o+l.length}if(a<e.length){const s=e.slice(a);s.trim()&&r.push(kt(s))}return r.length||r.push(Dn()),r}function h_(n=""){const e=D("select","cp-input-select cp-rule-token-insert-select");e.appendChild(D("option","",{value:"",text:re.rules.insertToken}));const t=document.createElement("optgroup");t.label=re.rules.detailVariables;for(const s of Tr("detail"))t.appendChild(D("option","",{value:`var:${s.id}`,text:s.label}));const i=document.createElement("optgroup");i.label=re.rules.overallVariables;for(const s of Tr("overall"))i.appendChild(D("option","",{value:`var:${s.id}`,text:s.label}));const r=document.createElement("optgroup");r.label=re.rules.number,r.appendChild(D("option","",{value:"number",text:re.rules.number}));const a=document.createElement("optgroup");a.label=re.rules.mathActions;for(const s of Ld)a.appendChild(D("option","",{value:s.value,text:s.label}));return e.append(t,i,r,a),n&&(e.value=n),e}function f_(n=""){const e=D("select","cp-input-select cp-rule-token-action-select cp-rule-token-value-select");e.appendChild(D("option","",{value:"",text:re.rules.insertVariable}));const t=document.createElement("optgroup");t.label=re.rules.detailVariables;for(const a of Tr("detail"))t.appendChild(D("option","",{value:`var:${a.id}`,text:a.label}));const i=document.createElement("optgroup");i.label=re.rules.overallVariables;for(const a of Tr("overall"))i.appendChild(D("option","",{value:`var:${a.id}`,text:a.label}));const r=document.createElement("optgroup");return r.label=re.rules.number,r.appendChild(D("option","",{value:"number",text:re.rules.number})),e.append(t,i,r),n&&(e.value=n),e}function m_(n=""){const e=D("select","cp-input-select cp-rule-token-action-select cp-rule-token-math-select");e.appendChild(D("option","",{value:"",text:re.rules.mathActions}));for(const t of Ld)e.appendChild(D("option","",{value:t.value,text:t.label}));return n&&(e.value=n),e}function Dd(n){const e=String(n||"");return e?e.startsWith("var:")?[Tl(e.slice(4))]:e==="number"?[Al(0)]:e.startsWith("math:")?d_(e):[]:[]}function g_(n){return(Array.isArray(n)?n:[]).some(e=>(e==null?void 0:e.type)==="slot")}function zn(n){var a,s;if(!(n!=null&&n.tokenEditor))return;const e=n.tokenEditor;e.innerHTML="";const t=Array.isArray(n.tokens)?n.tokens:[];(!Number.isInteger(n.pendingInsertIndex)||n.pendingInsertIndex<0||n.pendingInsertIndex>t.length)&&(n.pendingInsertIndex=null);const i=(o,l)=>{var h;const c=Number(o),u=Number(l);if(!Number.isInteger(c)||!Number.isInteger(u)||c<0||c>=n.tokens.length||u<0||u>n.tokens.length)return;const[d]=n.tokens.splice(c,1);let p=u;c<u&&(p-=1),n.tokens.splice(p,0,d),n.dragTokenIndex=null,zn(n),(h=n.onExpressionChanged)==null||h.call(n)},r=o=>{const l=D("div","cp-rule-token-gap"),c=D("button","cp-rule-token-gap-btn",{type:"button"});Ht(c,Vt.add,re.rules.insertHere),c.classList.toggle("is-armed",n.pendingInsertIndex===o),c.addEventListener("click",()=>{n.pendingInsertIndex=o,zn(n)}),l.addEventListener("dragover",u=>{Number.isInteger(n.dragTokenIndex)&&u.preventDefault()}),l.addEventListener("drop",u=>{Number.isInteger(n.dragTokenIndex)&&(u.preventDefault(),i(n.dragTokenIndex,o))}),l.appendChild(c),e.appendChild(l)};r(0),t.length===0&&e.appendChild(D("span","cp-rule-token-placeholder",{text:re.rules.tokenEditorPlaceholder}));for(let o=0;o<t.length;o++){const l=au(t[o]);if(!l)continue;if(n.tokens[o]=l,l.type==="slot"){const u=D("button","cp-rule-token-slot",{type:"button",text:re.rules.selectValue});if(u.draggable=!0,u.addEventListener("dragstart",d=>{var p;n.dragTokenIndex=o,(p=d.dataTransfer)==null||p.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.addEventListener("click",()=>{n.insertContext={mode:"replace",index:o},zn(n)}),e.appendChild(u),((a=n.insertContext)==null?void 0:a.mode)==="replace"&&((s=n.insertContext)==null?void 0:s.index)===o){const d=h_();d.classList.add("cp-rule-token-picker"),d.addEventListener("change",()=>{var h;const p=Dd(d.value).map(au).filter(Boolean);p.length&&(n.tokens.splice(o,1,...p),n.insertContext=null,zn(n),(h=n.onExpressionChanged)==null||h.call(n))}),e.appendChild(d),requestAnimationFrame(()=>d.focus())}r(o+1);continue}if(l.type==="pill"){const u=D("button","cp-rule-token-pill",{type:"button",title:l.code});u.draggable=!0,u.addEventListener("dragstart",d=>{var p;n.dragTokenIndex=o,(p=d.dataTransfer)==null||p.setData("text/plain",String(o)),d.dataTransfer&&(d.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null}),u.append(D("span","cp-rule-token-pill-label",{text:l.label}),D("span","cp-rule-token-pill-remove",{html:Jo})),u.addEventListener("click",()=>{var d;n.tokens.splice(o,1),zn(n),(d=n.onExpressionChanged)==null||d.call(n)}),e.appendChild(u),r(o+1);continue}if(l.type==="number"){const u=D("div","cp-rule-token-number-wrap");u.draggable=!0,u.addEventListener("dragstart",h=>{var g;n.dragTokenIndex=o,(g=h.dataTransfer)==null||g.setData("text/plain",String(o)),h.dataTransfer&&(h.dataTransfer.effectAllowed="move")}),u.addEventListener("dragend",()=>{n.dragTokenIndex=null});const d=D("input","cp-input-number cp-rule-token-number",{type:"number",step:.001,value:String(l.value??0)});d.addEventListener("change",()=>{var h;l.value=Number(d.value),(h=n.onExpressionChanged)==null||h.call(n)});const p=D("button","cp-rule-token-number-remove",{type:"button",title:"Remove token"});p.appendChild(D("span","cp-rule-token-pill-remove",{html:Jo})),p.addEventListener("click",h=>{var g;h.preventDefault(),h.stopPropagation(),n.tokens.splice(o,1),zn(n),(g=n.onExpressionChanged)==null||g.call(n)}),u.append(d,p),e.appendChild(u),r(o+1);continue}const c=D("button","cp-rule-token-math",{type:"button",text:l.code.trim()||l.code});c.draggable=!0,c.addEventListener("dragstart",u=>{var d;n.dragTokenIndex=o,(d=u.dataTransfer)==null||d.setData("text/plain",String(o)),u.dataTransfer&&(u.dataTransfer.effectAllowed="move")}),c.addEventListener("dragend",()=>{n.dragTokenIndex=null}),c.addEventListener("click",()=>{var u;n.tokens.splice(o,1),zn(n),(u=n.onExpressionChanged)==null||u.call(n)}),e.appendChild(c),r(o+1)}}function v_(n){return nu[n]||nu.rules}function b_(n,e){const t=D("div","cp-setting-row cp-setting-range"),i=D("div","cp-setting-label-wrap"),r=D("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const a=D("div","cp-setting-range-controls"),s=D("div","cp-range-container cp-range-slider"),o=D("input","cp-input-number",{type:"number",step:n.step}),l=D("input","cp-input-number",{type:"number",step:n.step});V1.create(s,{start:[n.min,n.max],connect:!0,range:{min:n.min,max:n.max},step:n.step,behaviour:"tap-drag"});const c=s.noUiSlider;let u=!0;const d=(g,b)=>{o.value=String(g),l.value=String(b)};c.on("update",g=>{const b=Number(g[0]),m=Number(g[1]);d(b,m),!u&&n.set(b,m)});const p=()=>{let g=Number(o.value),b=Number(l.value);if(Number.isFinite(g)||(g=n.min),Number.isFinite(b)||(b=n.max),g=kn(g,n.min,n.max),b=kn(b,n.min,n.max),g>b){const m=g;g=b,b=m}u=!0,c.set([g,b]),u=!1,d(g,b),n.set(g,b)};o.addEventListener("input",p),l.addEventListener("input",p),o.addEventListener("change",p),l.addEventListener("change",p);const h=()=>{const g=n.get();u=!0,c.set([g.min,g.max]),u=!1,d(g.min,g.max)};return a.append(s,o,l),t.append(i,a),zt(e,h,n.syncKeys),h(),u=!1,t}function __(n,e){const t=D("div","cp-setting-row"),i=D("div","cp-setting-label-wrap"),r=D("label","cp-setting-label",{text:n.label,title:n.tooltip});i.appendChild(r);const a=D("div","cp-setting-controls"),s=D("input","cp-input-range",{type:"range",min:n.min,max:n.max,step:n.step}),o=D("input","cp-input-number",{type:"number",step:n.step,min:n.min,max:n.max}),l=u=>{const d=kn(u,n.min,n.max);nn(n.key,d)};s.addEventListener("input",()=>l(Number(s.value))),o.addEventListener("change",()=>l(Number(o.value)));const c=()=>{const u=Number(K[n.key]);s.value=String(Number.isFinite(u)?u:n.min),o.value=String(Number.isFinite(u)?u:n.min)};return a.append(s,o),t.append(i,a),zt(e,c,[n.key]),c(),t}function br(n,e){const t=document.createDocumentFragment();for(const i of n){const r=D("option","",{value:i.value,text:i.label});i.title&&(r.title=i.title),String(i.value)===String(e)&&(r.selected=!0),t.appendChild(r)}return t}function su(n=ht){const e=D("select","cp-input-select");e.appendChild(D("option","",{value:ht,text:re.rules.selectValue}));const t=document.createElement("optgroup");t.label=re.rules.detailVariables;for(const r of Tr("detail"))t.appendChild(D("option","",{value:r.id,text:r.label}));const i=document.createElement("optgroup");i.label=re.rules.overallVariables;for(const r of Tr("overall"))i.appendChild(D("option","",{value:r.id,text:r.label}));return e.append(t,i),n&&n!==ht&&(e.value=n),e}function x_(n){const e=D("div","cp-menu-pane-inner"),t=(I="")=>{const G=String(I||"").trim();return G?/\.ssp\.json$/i.test(G)?G.replace(/\.ssp\.json$/i,""):G.replace(/\.[^./\\]+$/g,""):""},i=D("section","cp-section"),r=D("div","cp-section-title-row"),a=D("h3","cp-section-title",{text:re.file.project}),s=D("span","cp-project-name"),o=re.file.projectNew||"New Project",l=(I={})=>{const G=String((I==null?void 0:I.projectName)||"").trim(),q=String((I==null?void 0:I.fileName)||"").trim(),$=G||t(q)||o;s.textContent=$,s.title=$};l(),r.append(a,s),i.appendChild(r);const c=D("div","cp-button-grid"),u=D("button","cp-btn",{text:re.file.projectLoad}),d=D("button","cp-btn",{text:re.file.projectSave}),p=D("button","cp-btn",{text:re.file.projectSaveAs});Ht(u,Vt.load,re.file.projectLoad),Ht(d,Vt.save,re.file.projectSave),Ht(p,Vt.saveAs,re.file.projectSaveAs),c.append(u,d,p),i.appendChild(c),u.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-open-request"))),d.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-request"))),p.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:project-save-as-request"))),window.addEventListener("seesound:project-file-state",I=>{l((I==null?void 0:I.detail)||{})}),window.addEventListener("seesound:project-loaded",I=>{l((I==null?void 0:I.detail)||{})}),window.addEventListener("seesound:project-autosaved",I=>{l((I==null?void 0:I.detail)||{})});const h=D("section","cp-section cp-preset-bar");h.appendChild(D("h3","cp-section-title",{text:re.file.presets}));const g=D("div","cp-preset-row"),b=D("select","cp-input-select cp-preset-sel"),m=D("input","cp-input-text cp-preset-name",{type:"text",placeholder:re.file.presetNamePlaceholder}),f=D("button","cp-btn",{text:re.file.presetLoad}),y=D("button","cp-btn",{text:re.file.presetSaveProject||re.file.presetSave}),v=D("button","cp-btn",{text:re.file.presetSaveLocal||"Save Local"}),x=D("button","cp-btn cp-btn-danger",{text:re.file.presetRemove});Ht(f,Vt.load,re.file.presetLoad),Ht(y,Vt.save,re.file.presetSaveProject||re.file.presetSave),Ht(v,Vt.saveAs,re.file.presetSaveLocal||"Save Local"),Ht(x,Vt.remove,re.file.presetRemove),g.append(b,f,x,m,y,v),h.appendChild(g);async function R(){const I=await Sd(),G=String(b.value||"");b.innerHTML="",b.appendChild(D("option","",{value:"",text:re.file.presetSelectPlaceholder}));for(const q of I)b.appendChild(D("option","",{value:q,text:q}));G&&I.includes(G)&&(b.value=G)}b.addEventListener("change",()=>{b.value&&(m.value=b.value)}),f.addEventListener("click",async()=>{const I=String(b.value||"").trim();if(!I)return;const G=await t1(I);G!=null&&G.params&&$t(G.params)}),y.addEventListener("click",async()=>{const I=String(m.value||"").trim(),G=String(b.value||"").trim(),q=I||G;q&&(window.dispatchEvent(new CustomEvent("seesound:project-preset-save-request",{detail:{name:q,params:os()}})),m.value=q)}),v.addEventListener("click",async()=>{const I=String(m.value||"").trim(),G=String(b.value||"").trim(),q=I||G;q&&(await $o(q,os()),await R(),b.value=q,m.value=q,window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),x.addEventListener("click",async()=>{const I=String(b.value||"").trim();I&&(await n1(I),m.value="",await R(),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))}),window.addEventListener("seesound:preset-library-changed",()=>{R()});const w=D("section","cp-section");w.appendChild(D("h3","cp-section-title",{text:re.file.export}));const T=D("div","cp-button-grid"),A=D("button","cp-btn",{text:re.file.exportImage}),C=D("button","cp-btn",{text:re.file.exportImageNoBg}),_=D("button","cp-btn",{text:re.file.exportVideo}),L=D("button","cp-btn",{text:re.file.exportObj});Ht(A,Vt.exportImage,re.file.exportImage),Ht(C,Vt.exportImageNoBg,re.file.exportImageNoBg),Ht(_,Vt.exportVideo,re.file.exportVideo),Ht(L,Vt.exportObj,re.file.exportObj),T.append(A,C,_,L),w.appendChild(T),A.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image"))),C.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-image-no-bg"))),_.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-video-toggle"))),L.addEventListener("click",()=>window.dispatchEvent(new CustomEvent("seesound:export-obj"))),e.append(i,h,w),n.appendChild(e),R()}function y_(n,e){const t=D("div","cp-menu-pane-inner"),i=D("section","cp-section");i.appendChild(D("h3","cp-section-title",{text:re.view.canvasSize}));const r=D("input","cp-input-number",{type:"number",min:160,step:1}),a=D("input","cp-input-number",{type:"number",min:120,step:1}),s=D("div","cp-inline-pair");s.append(D("label","cp-setting-label",{text:re.view.width}),r,D("label","cp-setting-label",{text:re.view.height}),a),i.appendChild(s);const o=D("input","cp-input-range",{type:"range",min:5,max:400,step:1}),l=D("input","cp-input-number",{type:"number",min:5,max:400,step:1}),c=D("div","cp-setting-row"),u=D("div","cp-setting-label-wrap");u.appendChild(D("label","cp-setting-label",{text:re.view.canvasZoom}));const d=D("div","cp-setting-controls");d.append(o,l),c.append(u,d),i.appendChild(c);const p=D("section","cp-section");p.appendChild(D("h3","cp-section-title",{text:re.view.backgroundColor}));const h=D("input","cp-input-color",{type:"color"});p.appendChild(h);const g=D("section","cp-section");g.appendChild(D("h3","cp-section-title",{text:re.view.cameraPosition}));const b=D("input","cp-input-number",{type:"number",step:1}),m=D("input","cp-input-number",{type:"number",step:1}),f=D("input","cp-input-number",{type:"number",step:1}),y=D("div","cp-inline-triplet");y.append(b,m,f),g.appendChild(y),g.appendChild(D("h3","cp-section-title",{text:re.view.cameraTarget}));const v=D("input","cp-input-number",{type:"number",step:1}),x=D("input","cp-input-number",{type:"number",step:1}),R=D("input","cp-input-number",{type:"number",step:1}),w=D("div","cp-inline-triplet");w.append(v,x,R),g.appendChild(w);const T=D("div","cp-button-grid"),A=D("button","cp-btn",{text:re.view.cameraReset}),C=D("button","cp-btn",{text:re.view.cameraFit}),_=D("button","cp-btn",{text:re.view.cameraClean});Ht(A,Vt.reset,re.view.cameraReset),Ht(C,Vt.fit,re.view.cameraFit),Ht(_,Vt.clean,re.view.cameraClean),T.append(A,C,_),g.appendChild(T);const L=D("section","cp-section");L.appendChild(D("h3","cp-section-title",{text:re.view.projection}));const I=D("select","cp-input-select");I.appendChild(br([{value:"axonometric",label:re.view.projectionAxo},{value:"perspective",label:re.view.projectionPerspective}],K.cameraProjection));const G=D("select","cp-input-select");G.appendChild(br([{value:"orthoXY",label:re.view.axoOrthoXY},{value:"topXZ",label:re.view.axoOrthoXZ},{value:"orthoYZ",label:re.view.axoOrthoYZ},{value:"isometric",label:re.view.axoIsometric}],K.cameraAxoPreset)),L.append(I,G);const q=D("section","cp-section");q.appendChild(D("h3","cp-section-title",{text:re.view.angleOfView}));const $=D("input","cp-input-range",{type:"range",min:20,max:120,step:1}),J=D("input","cp-input-number",{type:"number",min:20,max:120,step:1}),ue=D("div","cp-setting-controls");ue.append($,J),q.appendChild(ue);const W=D("section","cp-section");W.appendChild(D("h3","cp-section-title",{text:re.view.blending}));const de=D("select","cp-input-select");de.appendChild(br([{value:"source-over",label:"Normal"},{value:"screen",label:"Screen"},{value:"alpha",label:"Alpha"},{value:"multiply",label:"Multiply"}],K.blendMode)),W.appendChild(de);const j=D("section","cp-section");j.appendChild(D("h3","cp-section-title",{text:re.view.postProcessing}));const te=D("input","cp-input-toggle",{type:"checkbox"}),Ee=D("input","cp-input-toggle",{type:"checkbox"}),tt=D("input","cp-input-toggle",{type:"checkbox"}),ne=D("label","cp-toggle-row");ne.append(te,D("span","cp-setting-label",{text:re.view.postProcessingEnabled}));const fe=D("label","cp-toggle-row");fe.append(Ee,D("span","cp-setting-label",{text:re.view.bloomEnabled}));const Ce=D("label","cp-toggle-row");Ce.append(tt,D("span","cp-setting-label",{text:re.view.bokehEnabled}));const ve=D("input","cp-input-range",{type:"range",min:0,max:4,step:.01}),Re=D("input","cp-input-number",{type:"number",min:0,max:4,step:.01}),Oe=D("div","cp-setting-row");Oe.append(D("label","cp-setting-label",{text:re.view.bloomStrength}),(()=>{const B=D("div","cp-setting-controls");return B.append(ve,Re),B})());const Be=D("input","cp-input-range",{type:"range",min:0,max:2,step:.01}),ot=D("input","cp-input-number",{type:"number",min:0,max:2,step:.01}),Ye=D("div","cp-setting-row");Ye.append(D("label","cp-setting-label",{text:re.view.bloomRadius}),(()=>{const B=D("div","cp-setting-controls");return B.append(Be,ot),B})());const dt=D("input","cp-input-range",{type:"range",min:0,max:1,step:.01}),F=D("input","cp-input-number",{type:"number",min:0,max:1,step:.01}),Ct=D("div","cp-setting-row");Ct.append(D("label","cp-setting-label",{text:re.view.bloomThreshold}),(()=>{const B=D("div","cp-setting-controls");return B.append(dt,F),B})());const Ke=D("input","cp-input-range",{type:"range",min:1,max:5e3,step:1}),Je=D("input","cp-input-number",{type:"number",min:1,max:5e3,step:1}),Ie=D("div","cp-setting-row");Ie.append(D("label","cp-setting-label",{text:re.view.bokehFocus}),(()=>{const B=D("div","cp-setting-controls");return B.append(Ke,Je),B})());const ct=D("input","cp-input-range",{type:"range",min:0,max:.001,step:1e-5}),Le=D("input","cp-input-number",{type:"number",min:0,max:.001,step:1e-5}),P=D("div","cp-setting-row");P.append(D("label","cp-setting-label",{text:re.view.bokehAperture}),(()=>{const B=D("div","cp-setting-controls");return B.append(ct,Le),B})());const S=D("input","cp-input-range",{type:"range",min:0,max:.1,step:5e-4}),z=D("input","cp-input-number",{type:"number",min:0,max:.1,step:5e-4}),ie=D("div","cp-setting-row");ie.append(D("label","cp-setting-label",{text:re.view.bokehMaxBlur}),(()=>{const B=D("div","cp-setting-controls");return B.append(S,z),B})()),j.append(ne,fe,Oe,Ye,Ct,Ce,Ie,P,ie);const ae=D("section","cp-section");ae.appendChild(D("h3","cp-section-title",{text:re.view.guides}));const ee=D("input","cp-input-toggle",{type:"checkbox"}),ce=D("input","cp-input-toggle",{type:"checkbox"}),pe=D("label","cp-inline-pair");pe.append(ee,D("span","cp-setting-label",{text:re.view.guideAxes}));const xe=D("label","cp-inline-pair");xe.append(ce,D("span","cp-setting-label",{text:re.view.guideCoordinates})),ae.append(pe,xe),r.addEventListener("change",()=>{const B=Math.max(160,Math.floor(Number(r.value)||160));nn("canvasWidth",B)}),a.addEventListener("change",()=>{const B=Math.max(120,Math.floor(Number(a.value)||120));nn("canvasHeight",B)});const $e=B=>{const me=kn(B,5,400);nn("canvasScale",Math.floor(me))};o.addEventListener("input",()=>$e(Number(o.value))),l.addEventListener("change",()=>$e(Number(l.value))),h.addEventListener("input",()=>{const B=u_(h.value);$t({defaultBackgroundHue:Math.round(B.h),defaultBackgroundSaturation:Math.round(B.s),defaultBackgroundLightness:Math.round(B.l)})});const he=()=>{b.value=String(Number(K.cameraPosX??0)),m.value=String(Number(K.cameraPosY??0)),f.value=String(Number(K.cameraPosZ??420)),v.value=String(Number(K.cameraTargetX??0)),x.value=String(Number(K.cameraTargetY??0)),R.value=String(Number(K.cameraTargetZ??0))},Pe=()=>{$t({cameraPosX:Number(b.value)||0,cameraPosY:Number(m.value)||0,cameraPosZ:Number(f.value)||0,cameraTargetX:Number(v.value)||0,cameraTargetY:Number(x.value)||0,cameraTargetZ:Number(R.value)||0})};for(const B of[b,m,f,v,x,R])B.addEventListener("change",Pe);A.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-reset-camera"))}),C.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-fit-camera"))}),_.addEventListener("click",()=>{window.dispatchEvent(new CustomEvent("seesound:view-clean-canvas"))}),I.addEventListener("change",()=>nn("cameraProjection",I.value)),G.addEventListener("change",()=>nn("cameraAxoPreset",G.value)),de.addEventListener("change",()=>nn("blendMode",de.value)),te.addEventListener("change",()=>nn("postProcessEnabled",te.checked?1:0)),Ee.addEventListener("change",()=>nn("bloomEnabled",Ee.checked?1:0)),tt.addEventListener("change",()=>nn("bokehEnabled",tt.checked?1:0));const De=({slider:B,number:me,key:ge,min:Xe,max:Ze})=>{const nt=at=>{const He=kn(at,Xe,Ze);nn(ge,He)};B.addEventListener("input",()=>nt(Number(B.value))),me.addEventListener("change",()=>nt(Number(me.value)))};De({slider:ve,number:Re,key:"bloomStrength",min:0,max:4}),De({slider:Be,number:ot,key:"bloomRadius",min:0,max:2}),De({slider:dt,number:F,key:"bloomThreshold",min:0,max:1}),De({slider:Ke,number:Je,key:"bokehFocus",min:1,max:5e3}),De({slider:ct,number:Le,key:"bokehAperture",min:0,max:.001}),De({slider:S,number:z,key:"bokehMaxBlur",min:0,max:.1});const ke=B=>{nn("cameraAngleOfView",kn(B,20,120))};$.addEventListener("input",()=>ke(Number($.value))),J.addEventListener("change",()=>ke(Number(J.value))),ee.addEventListener("change",()=>{nn("originSignEnabled",ee.checked?1:0)}),ce.addEventListener("change",()=>{nn("coordinateGuidesEnabled",ce.checked?1:0)}),window.addEventListener("seesound:origin-sign-state",B=>{var ge;const me=(ge=B==null?void 0:B.detail)==null?void 0:ge.enabled;typeof me=="boolean"&&(ee.checked=me)}),window.addEventListener("seesound:coordinate-guide-state",B=>{var ge;const me=(ge=B==null?void 0:B.detail)==null?void 0:ge.enabled;typeof me=="boolean"&&(ce.checked=me)});const Te=()=>{r.value=String(Number(K.canvasWidth??0)||0),a.value=String(Number(K.canvasHeight??0)||0)},Qe=()=>{const B=Math.max(5,Math.min(400,Math.floor(Number(K.canvasScale)||100)));o.value=String(B),l.value=String(B)},We=()=>{const B=c_(Number(K.defaultBackgroundHue??0),Number(K.defaultBackgroundSaturation??0),Number(K.defaultBackgroundLightness??0));h.value=l_(B.r,B.g,B.b)},vt=()=>{I.value=String(K.cameraProjection||"axonometric"),G.value=String(K.cameraAxoPreset||"orthoXY");const B=I.value==="perspective";q.style.display=B?"":"none"},O=()=>{de.value=String(K.blendMode||"screen")},ye=()=>{const B=Number(K.cameraAngleOfView??55);$.value=String(B),J.value=String(B)},Q=()=>{te.checked=Number(K.postProcessEnabled??1)>=.5,Ee.checked=Number(K.bloomEnabled??1)>=.5,tt.checked=Number(K.bokehEnabled??1)>=.5},se=()=>{ee.checked=Number(K.originSignEnabled??1)>=.5,ce.checked=Number(K.coordinateGuidesEnabled??1)>=.5},Me=()=>{const B=Number(K.bloomStrength??1.15);ve.value=String(B),Re.value=String(B)},_e=()=>{const B=Number(K.bloomRadius??.7);Be.value=String(B),ot.value=String(B)},M=()=>{const B=Number(K.bloomThreshold??.18);dt.value=String(B),F.value=String(B)},N=()=>{const B=Number(K.bokehFocus??380);Ke.value=String(B),Je.value=String(B)},k=()=>{const B=Number(K.bokehAperture??12e-5);ct.value=String(B),Le.value=String(B)},Z=()=>{const B=Number(K.bokehMaxBlur??.01);S.value=String(B),z.value=String(B)},le=()=>{he()};zt(e,Te,["canvasWidth","canvasHeight"]),zt(e,Qe,["canvasScale"]),zt(e,We,["defaultBackgroundHue","defaultBackgroundSaturation","defaultBackgroundLightness"]),zt(e,vt,["cameraProjection","cameraAxoPreset"]),zt(e,O,["blendMode"]),zt(e,ye,["cameraAngleOfView"]),zt(e,Q,["postProcessEnabled","bloomEnabled","bokehEnabled"]),zt(e,se,["originSignEnabled","coordinateGuidesEnabled"]),zt(e,Me,["bloomStrength"]),zt(e,_e,["bloomRadius"]),zt(e,M,["bloomThreshold"]),zt(e,N,["bokehFocus"]),zt(e,k,["bokehAperture"]),zt(e,Z,["bokehMaxBlur"]),zt(e,le,["cameraPosX","cameraPosY","cameraPosZ","cameraTargetX","cameraTargetY","cameraTargetZ"]),window.addEventListener("seesound:camera-state",B=>{var pt,bt,Et,be,Dt,qt;const me=(B==null?void 0:B.detail)||{},ge=Number((pt=me.position)==null?void 0:pt.x),Xe=Number((bt=me.position)==null?void 0:bt.y),Ze=Number((Et=me.position)==null?void 0:Et.z),nt=Number((be=me.target)==null?void 0:be.x),at=Number((Dt=me.target)==null?void 0:Dt.y),He=Number((qt=me.target)==null?void 0:qt.z),ut=Number(me.fov),lt=String(me.projection||"");Number.isFinite(ge)&&(b.value=String(ge)),Number.isFinite(Xe)&&(m.value=String(Xe)),Number.isFinite(Ze)&&(f.value=String(Ze)),Number.isFinite(nt)&&(v.value=String(nt)),Number.isFinite(at)&&(x.value=String(at)),Number.isFinite(He)&&(R.value=String(He)),Number.isFinite(ut)&&($.value=String(ut),J.value=String(ut)),(lt==="perspective"||lt==="axonometric")&&(I.value=lt,q.style.display=lt==="perspective"?"":"none")}),Te(),Qe(),We(),vt(),O(),ye(),Q(),se(),Me(),_e(),M(),N(),k(),Z(),le(),t.append(i,p,g,L,q,W,j,ae),n.appendChild(t)}function M_(n,e){const t=D("div","cp-menu-pane-inner"),i=D("section","cp-section");i.appendChild(D("h3","cp-section-title",{text:re.settings.sliders}));const r=D("div","cp-setting-row"),a=D("div","cp-setting-label-wrap");a.appendChild(D("label","cp-setting-label",{text:re.settings.audioResolution,title:"Technical term: FFT Size. Frequency-domain analysis resolution."}));const s=D("select","cp-input-select");s.appendChild(br(i_.map(u=>({value:u,label:String(u)})),K.fftSize)),s.addEventListener("change",()=>{nn("fftSize",Number(s.value))}),r.append(a,s),i.appendChild(r);for(const u of r_)i.appendChild(__(u,e));const o=D("button","cp-btn cp-btn-wide",{text:re.settings.resetDefaults});Ht(o,Vt.reset,re.settings.resetDefaults),o.addEventListener("click",()=>{xd()}),i.appendChild(o);const l=D("section","cp-section");l.appendChild(D("h3","cp-section-title",{text:re.settings.normalizationRanges}));for(const u of a_)l.appendChild(b_(u,e));const c=()=>{s.value=String(K.fftSize||2048)};zt(e,c,["fftSize"]),c(),t.append(i,l),n.appendChild(t)}function ou(n){var a;const e=n.definition.output;if(n.definition.type==="enum")return{operator:"set",output:e,value:n.enumValue||((a=n.definition.options)==null?void 0:a[0])||"square"};const t=n.definition.type==="enum"?"":Fd(n.tokens);if(n.definition.type!=="enum"&&g_(n.tokens))return null;n.expression=t;const i=String(t||"").trim();if(!i)return null;const r=Number(i);return Number.isFinite(r)&&/^[-+]?\d+(\.\d+)?$/.test(i)?{operator:"set",output:e,value:r}:Nd.has(i)?{operator:"set",output:e,input:i}:{operator:"set",output:e,expression:i}}function S_(n,e){var f;const t=D("div","cp-menu-pane-inner"),i=D("div","cp-rules-wrapper");t.appendChild(i);const r=new Map,a=[];function s(y,v){return`${y}:${v}`}function o(y,v=""){const x=[r.get(s(y,"red")),r.get(s(y,"green")),r.get(s(y,"blue"))].filter(Boolean),R=r.get(s(y,"hue"));if(!R||x.length===0)return;if(v==="red"||v==="green"||v==="blue"){const A=r.get(s(y,v));if(A){for(const C of x)C.enabled=!!A.enabled;A.enabled&&String(A.expression||"").trim()&&(R.enabled=!1)}}if(v==="hue"&&R.enabled&&String(R.expression||"").trim())for(const A of x)A.enabled=!1;const w=x.some(A=>A.enabled&&String(A.expression||"").trim()),T=R.enabled&&String(R.expression||"").trim();if(w&&T)if(v==="hue")for(const A of x)A.enabled=!1;else R.enabled=!1;for(const A of x)A.toggle&&(A.toggle.checked=A.enabled);R.toggle&&(R.toggle.checked=R.enabled)}function l(y){if(!y.conditionEnabled||y.conditionOperator==="always")return{operator:"always"};const v=String(y.conditionDetail||ht),x=String(y.conditionOverall||ht),R=v!==ht?v:x!==ht?x:"";if(!R)return{operator:"always"};const w=String(y.conditionValueInput||ht);return w&&w!==ht?{operator:y.conditionOperator,input:R,valueInput:w}:{operator:y.conditionOperator,input:R,value:Number(y.conditionValue)||0}}let c=!1,u=!1;function d(y,v=!1){if(!y||!v&&!y.enabled||!v&&y.conditionEnabled&&!(y.conditionDetail!==ht||y.conditionOverall!==ht))return;const x=ou(y);!v&&y.enabled&&!x||p()}function p(){if(c)return;o("spawnedParticles"),o("lines"),o("background");const y=[];for(let v=0;v<a.length;v++){const x=a[v],R=ou(x);R&&y.push({id:`${x.definition.target}-${x.definition.output}`,group:`${x.definition.section}/${x.definition.subgroup}`,subgroup:"",enabled:!!x.enabled,target:x.definition.target,condition:l(x),actions:[R],order:v})}u=!0,nn("ruleBlocks",y)}function h(y){var v,x,R,w,T,A;c=!0;try{for(const _ of a)_.enabled=!1,_.conditionEnabled=!1,_.conditionOperator="always",_.conditionDetail=ht,_.conditionOverall=ht,_.conditionValue=0,_.conditionValueInput=ht,_.expression="",_.tokens=[],_.insertContext=null,_.pendingInsertIndex=null,_.enumValue=((v=_.definition.options)==null?void 0:v[0])||"square";const C=Array.isArray(y)?y:[];for(const _ of C){const L=String((_==null?void 0:_.target)||""),I=Array.isArray(_==null?void 0:_.actions)?_.actions[0]:null,G=String((I==null?void 0:I.output)||""),q=s(L,G),$=r.get(q);if(!$)continue;$.enabled=_.enabled!==!1;const J=String(((x=_==null?void 0:_.condition)==null?void 0:x.operator)||"always");$.conditionOperator=eu.includes(J)?J:"always",$.conditionValue=Number(((R=_==null?void 0:_.condition)==null?void 0:R.value)??0);const ue=String(((w=_==null?void 0:_.condition)==null?void 0:w.valueInput)||"");$.conditionValueInput=Nd.has(ue)?ue:ht;const W=String(((T=_==null?void 0:_.condition)==null?void 0:T.input)||""),de=Yo(W);(de==null?void 0:de.group)==="detail"?($.conditionDetail=W,$.conditionOverall=ht):(de==null?void 0:de.group)==="overall"&&($.conditionOverall=W,$.conditionDetail=ht),$.conditionEnabled=$.conditionOperator!=="always"&&!!W,$.definition.type==="enum"?$.enumValue=String((I==null?void 0:I.value)||$.enumValue):typeof(I==null?void 0:I.expression)=="string"?$.expression=I.expression:typeof(I==null?void 0:I.input)=="string"?$.expression=I.input:(I==null?void 0:I.value)!==void 0&&(I==null?void 0:I.value)!==null&&($.expression=String(I.value)),$.tokens=p_($.expression)}o("spawnedParticles"),o("lines"),o("background");for(const _ of a)_.toggle&&(_.toggle.checked=_.enabled),(A=_.syncConditionUi)==null||A.call(_),_.enumSelect&&(_.enumSelect.value=_.enumValue),zn(_)}finally{c=!1}}let g="",b="";for(const y of s_){y.section!==g&&(g=y.section,b="",i.appendChild(D("h3","cp-section-title cp-rule-section-title",{text:g}))),y.subgroup!==b&&(b=y.subgroup,i.appendChild(D("h4","cp-rule-subgroup-title",{text:b})));const v={definition:y,enabled:!1,conditionEnabled:!1,conditionOperator:"always",conditionDetail:ht,conditionOverall:ht,conditionValue:0,conditionValueInput:ht,expression:"",tokens:[],insertContext:null,pendingInsertIndex:null,dragTokenIndex:null,enumValue:((f=y.options)==null?void 0:f[0])||"square",toggle:null,conditionRow:null,syncConditionUi:null,tokenEditor:null,onExpressionChanged:null,enumSelect:null,actionSelect:null},x=D("article","cp-rule-card"),R=D("div","cp-rule-card-header"),w=D("input","cp-input-toggle",{type:"checkbox"}),T=D("div","cp-rule-card-title",{text:y.label});R.append(w,T);const A=D("div","cp-rule-card-condition-builder"),C=D("button","cp-btn cp-rule-condition-add",{type:"button",text:re.rules.addCondition});Ht(C,Vt.add,re.rules.addCondition);const _=D("div","cp-rule-condition-sentence"),L=D("span","cp-rule-condition-when",{text:re.rules.when}),I=su(ht),G=D("select","cp-input-select cp-rule-condition-operator");G.appendChild(br(eu.filter(te=>te!=="always").map(te=>({value:te,label:te})),">"));const q=D("input","cp-input-number",{type:"number",step:.001,value:"0"}),$=su(ht);$.classList.add("cp-rule-condition-value-input");const J=D("button","cp-btn cp-btn-danger cp-rule-condition-remove",{type:"button",text:re.rules.removeCondition});Ht(J,Vt.clear,re.rules.removeCondition),_.append(L,I,G,q,$,J),A.append(C,_);const ue=D("div","cp-rule-card-expression");let W=null,de=null,j=null;if(y.type==="enum")W=D("select","cp-input-select"),W.appendChild(br(y.options.map(te=>({value:te,label:te})),v.enumValue)),ue.appendChild(W);else{const te=D("div","cp-rule-token-row"),Ee=f_("");j=m_(""),de=D("div","cp-rule-token-editor",{role:"list",tabindex:"0"}),te.append(Ee,j),ue.append(te,de);const tt=()=>{if(v.expression=Fd(v.tokens),(y.output==="red"||y.output==="green"||y.output==="blue")&&o(y.target,y.output),y.output==="hue"&&o(y.target,"hue"),v.enabled&&!String(v.expression||"").trim()){v.enabled=!1,v.toggle&&(v.toggle.checked=!1),p();return}d(v)};v.onExpressionChanged=tt;const ne=(fe,Ce)=>{const ve=Dd(fe);if(ve.length){if(!Number.isInteger(v.pendingInsertIndex)){Ce&&(Ce.value="");return}v.tokens.splice(v.pendingInsertIndex,0,...ve),v.pendingInsertIndex=null,Ce&&(Ce.value=""),zn(v),tt()}};Ee.addEventListener("change",()=>{ne(String(Ee.value||""),Ee)}),j.addEventListener("change",()=>{ne(String(j.value||""),j)})}x.append(R,A,ue),i.appendChild(x),v.toggle=w,v.conditionRow=A,v.tokenEditor=de,v.enumSelect=W,v.actionSelect=j,v.syncConditionUi=()=>{if(C.style.display=v.conditionEnabled?"none":"",_.style.display=v.conditionEnabled?"":"none",!v.conditionEnabled)return;G.value=v.conditionOperator==="always"?">":v.conditionOperator;const te=v.conditionDetail!==ht?v.conditionDetail:v.conditionOverall;I.value=te||ht,q.value=String(Number(v.conditionValue||0)),$.value=v.conditionValueInput||ht},v.syncConditionUi(),r.set(s(y.target,y.output),v),a.push(v),w.addEventListener("change",()=>{if(v.enabled=w.checked,(y.output==="red"||y.output==="green"||y.output==="blue")&&o(y.target,y.output),y.output==="hue"&&o(y.target,"hue"),!v.enabled){p();return}d(v)}),C.addEventListener("click",()=>{var te;v.conditionEnabled=!0,v.conditionOperator==="always"&&(v.conditionOperator=">"),(te=v.syncConditionUi)==null||te.call(v),d(v)}),G.addEventListener("change",()=>{v.conditionEnabled=!0,v.conditionOperator=G.value,d(v)}),I.addEventListener("change",()=>{const te=String(I.value||ht);if(v.conditionEnabled=!0,v.conditionDetail=ht,v.conditionOverall=ht,te!==ht){const Ee=Yo(te);(Ee==null?void 0:Ee.group)==="detail"?v.conditionDetail=te:(Ee==null?void 0:Ee.group)==="overall"&&(v.conditionOverall=te)}d(v)}),q.addEventListener("change",()=>{v.conditionEnabled=!0,v.conditionValue=Number(q.value)||0,v.conditionValueInput=ht,d(v)}),$.addEventListener("change",()=>{v.conditionEnabled=!0;const te=String($.value||ht);v.conditionValueInput=te!==ht?te:ht,d(v)}),J.addEventListener("click",()=>{var te;v.conditionEnabled=!1,v.conditionOperator="always",v.conditionDetail=ht,v.conditionOverall=ht,v.conditionValue=0,v.conditionValueInput=ht,(te=v.syncConditionUi)==null||te.call(v),d(v,!0)}),W&&W.addEventListener("change",()=>{v.enumValue=W.value,d(v)}),y.type!=="enum"&&zn(v)}const m=()=>{if(u){u=!1;return}h(Array.isArray(K.ruleBlocks)?K.ruleBlocks:[])};zt(e,m,["ruleBlocks"]),m(),n.appendChild(t)}function w_(n){const e=D("button","cp-menu-button",{type:"button","data-menu-id":n.id,"aria-label":n.label,title:n.label}),t=D("span","cp-menu-icon",{html:v_(n.id)}),i=D("span","cp-menu-label",{text:n.label});return e.append(t,i),e}function E_(n){const e=D("section","cp-menu-pane",{"data-menu-id":n.id}),t=D("div","cp-menu-pane-header");t.appendChild(D("h2","cp-menu-pane-title",{text:n.label}));const i=D("button","cp-btn cp-menu-collapse",{type:"button",text:re.menu.collapse});Ht(i,Vt.close,re.menu.collapse),t.appendChild(i);const r=D("div","cp-menu-pane-body");return e.append(t,r),{pane:e,body:r,closeButton:i}}function C_(n){if(!n)return;n.innerHTML="",n.className="",n.classList.add("cp-shell");const e=D("div","cp-shell-root"),t=D("nav","cp-menu-rail"),i=D("div","cp-menu-stack"),r=o_(),a=new Map,s=new Map;for(const y of tu){const v=w_(y);a.set(y.id,v),t.appendChild(v);const x=E_(y);s.set(y.id,x),i.appendChild(x.pane)}e.append(t,i),n.appendChild(e),x_(s.get("file").body),y_(s.get("view").body,r),M_(s.get("settings").body,r),S_(s.get("rules").body,r);let o=null,l="settings",c=!1,u=!1,d=null;const p=()=>{d!==null&&(window.clearTimeout(d),d=null)},h=()=>{p(),!(o||c||u)&&(d=window.setTimeout(()=>{d=null,!(o||c||u)&&(l=null,b())},100))};function g(){return o||(c||u?l:null)}function b(){const y=g();for(const[v,x]of a.entries()){const R=y===v,w=o===v;x.classList.toggle("is-active",R),x.classList.toggle("is-pinned",w),x.setAttribute("aria-expanded",R?"true":"false")}for(const[v,x]of s.entries()){const R=y===v;x.pane.classList.toggle("is-active",R)}n.classList.toggle("is-open",!!y)}t.addEventListener("mouseenter",()=>{p(),c=!0,b()}),t.addEventListener("mouseleave",()=>{c=!1,h()});for(const y of tu){const v=a.get(y.id),x=s.get(y.id);v.addEventListener("mouseenter",()=>{p(),l=y.id,b()}),v.addEventListener("click",()=>{o===y.id?(o=null,l=c?y.id:null):(o=y.id,l=y.id),b()}),x.pane.addEventListener("mouseenter",()=>{p(),u=!0,l=y.id,b()}),x.pane.addEventListener("mouseleave",()=>{u=!1,h()}),x.closeButton.addEventListener("click",()=>{o=null,l=null,b()})}const m=()=>{iu(ru(r,[],!0))},f=y=>{const v=ru(r,y,!1);v.length&&iu(v)};ys((y,v,x)=>{if(!v){m();return}if(v==="*"){if(x&&typeof x=="object"&&!Array.isArray(x))return;m();return}f([v])}),l="settings",b(),m()}function T_(n,e,t){return Math.min(t,Math.max(e,n))}function Di(n){const e=Number(n);return Number.isFinite(e)?Math.round(T_(e,0,255)):0}function A_(n,e,t,i){const r=Di(n),a=Di(e),s=Di(t),o=Di(i),l=.299*r+.587*a+.114*s;if(l<=1e-9)return[o,o,o];const c=o/l;let u=r*c,d=a*c,p=s*c;const h=Math.max(u,d,p);if(h>255){const g=(255-o)/Math.max(1e-9,h-o);u=o+g*(u-o),d=o+g*(d-o),p=o+g*(p-o)}return[Di(u),Di(d),Di(p)]}const Id=()=>{},hr=()=>{};function fn(n){const e=Number(n);return Number.isFinite(e)?Math.max(0,Math.min(1,e)):0}function ft(n){const e=Number(n);return Number.isFinite(e)?Math.abs(e)>1?fn(e/255):fn(e):0}function Ud(n){if(typeof n!="string")return null;const e=/^#?([0-9a-f]{6})$/i.exec(n.trim());if(!e)return null;const t=e[1],i=parseInt(t.slice(0,2),16)/255,r=parseInt(t.slice(2,4),16)/255,a=parseInt(t.slice(4,6),16)/255;return[fn(i),fn(r),fn(a)]}function P_(n){if(Array.isArray(n))return n.length<3?null:[ft(n[0]),ft(n[1]),ft(n[2])];if(typeof n=="string"){const e=Ud(n);if(e)return e;const t=n.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i));if(t.length>=3)return[ft(t[0]),ft(t[1]),ft(t[2])]}if(n&&typeof n=="object"){if(Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b))return[ft(n.r),ft(n.g),ft(n.b)];if(Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v))return[ft(n.h),ft(n.s),ft(n.v)];if(Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness))return[ft(n.hue),ft(n.saturation),ft(n.brightness)]}return null}function R_(n,e,t){const i=Number(n),a=((Number.isFinite(i)?Math.abs(i)>1?i/360:i:0)%1+1)%1,s=fn(e),o=fn(t),l=Math.floor(a*6),c=a*6-l,u=o*(1-s),d=o*(1-c*s),p=o*(1-(1-c)*s);switch(l%6){case 0:return[o,p,u];case 1:return[d,o,u];case 2:return[u,o,p];case 3:return[u,d,o];case 4:return[p,u,o];default:return[o,u,d]}}function N_(n,e,t){const i=fn(n),r=fn(e),a=fn(t),s=Math.max(i,r,a),o=Math.min(i,r,a),l=s-o;let c=0;l>1e-6&&(s===i?c=(r-a)/l%6:s===r?c=(a-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=s<=1e-6?0:l/s;return[c,u,s]}function es(n){return Array.isArray(n)?n.length<3?null:[ft(n[0]),ft(n[1]),ft(n[2])]:typeof n=="string"?Ud(n):!n||typeof n!="object"?null:Array.isArray(n.rgb)&&n.rgb.length>=3?[ft(n.rgb[0]),ft(n.rgb[1]),ft(n.rgb[2])]:Number.isFinite(n.r)||Number.isFinite(n.g)||Number.isFinite(n.b)?[ft(n.r),ft(n.g),ft(n.b)]:Number.isFinite(n.h)||Number.isFinite(n.s)||Number.isFinite(n.v)?[ft(n.h),ft(n.s),ft(n.v)]:Number.isFinite(n.hue)||Number.isFinite(n.saturation)||Number.isFinite(n.brightness)?[ft(n.hue),ft(n.saturation),ft(n.brightness)]:null}function Od(n,e){var i;const t=Array.isArray((i=n==null?void 0:n.params)==null?void 0:i.palettes)?n.params.palettes:[];if(t.length===0)return null;if(typeof e=="string")return t.find(r=>r&&r.id===e)||null;if(Number.isFinite(e)){const r=Math.max(0,Math.floor(e));return t[r]||null}return null}function L_(n,e,t){const i=Od(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;const r=i.colors.length,s=((Number.isFinite(t)?Math.floor(t):0)%r+r)%r;return es(i.colors[s])}function F_(n,e,t){const i=Od(n,e);if(!i||!Array.isArray(i.colors)||i.colors.length===0)return null;if(i.colors.length===1)return es(i.colors[0]);const a=fn(t)*(i.colors.length-1),s=Math.floor(a),o=Math.min(i.colors.length-1,s+1),l=a-s,c=es(i.colors[s]),u=es(i.colors[o]);return!c&&!u?null:c?u?[fn(c[0]+(u[0]-c[0])*l),fn(c[1]+(u[1]-c[1])*l),fn(c[2]+(u[2]-c[2])*l)]:c:u}const D_=Object.freeze({clamp:(n,e,t)=>Math.max(e,Math.min(t,n)),lerp:(n,e,t)=>n+(e-n)*t,smoothstep:(n,e,t)=>{const i=Math.max(0,Math.min(1,(t-n)/Math.max(1e-9,e-n)));return i*i*(3-2*i)},pow:Math.pow,min:Math.min,max:Math.max,abs:Math.abs,rgb:(n,e,t)=>[ft(n),ft(e),ft(t)],hsv:(n,e,t)=>[ft(n),ft(e),ft(t)],palette:(n,e,t)=>L_(n,e,t),gradient:(n,e,t)=>F_(n,e,t),matchLuma:(n,e,t,i)=>{const[r,a,s]=A_(n,e,t,i);return[r/255,a/255,s/255]},hsvToRgbColor:(n,e,t)=>R_(n,e,t),rgbToHsvColor:(n,e,t)=>N_(n,e,t),toColorVector:n=>P_(n)});function Es(n){if(typeof n!="string")return"";let e=n.trim();return e?(e=e.replace(/×/g,"*").replace(/÷/g,"/"),e=e.replace(/\band\b/gi,"&&"),e=e.replace(/\bor\b/gi,"||"),e=e.replace(/\bnot\b/gi,"!"),e):""}function sr(n){for(const e of n||[]){const t=Array.isArray(e==null?void 0:e.actions)?e.actions:[];for(const i of t)if((i==null?void 0:i.output)==="hue"||(i==null?void 0:i.output)==="saturation"||(i==null?void 0:i.output)==="brightness"||(i==null?void 0:i.output)==="hsv")return!0}return!1}function lu(n,e){for(const t of n||[]){const i=Array.isArray(t==null?void 0:t.actions)?t.actions:[];for(const r of i)if((r==null?void 0:r.output)===e)return!0}return!1}const I_=new Set([">",">=","<","<=","==","!="]);let Va={hash:null,result:{hash:null,compileStatus:"bootstrap-pending",compileError:null,compileTimeMs:0,lineMap:[],source:"",requiredInputsByTarget:{spawnedParticles:[],allParticles:[],lines:[],background:[],camera:[]},requiredInputs:[],applySpawnRules:Id,applyLivingRules:hr,applyLineRules:hr}};function cu(n,e){const t=Es(n);if(!t)return[];const i=new Set,r=t.match(/\b[A-Za-z_][A-Za-z0-9_]*\b/g)??[];for(const a of r)e.has(a)&&i.add(a);return[...i]}function Gr(n,e){const t=new Set;for(const i of n||[]){if(!(i!=null&&i.enabled))continue;const r=i.condition||{};typeof r.input=="string"&&e.has(r.input)&&t.add(r.input),typeof r.valueInput=="string"&&e.has(r.valueInput)&&t.add(r.valueInput);for(const s of cu(r.expression,e))t.add(s);const a=Array.isArray(i.actions)?i.actions:[];for(const s of a){typeof(s==null?void 0:s.input)=="string"&&e.has(s.input)&&t.add(s.input);for(const o of cu(s==null?void 0:s.expression,e))t.add(o)}}return[...t]}function Pl(n){return JSON.stringify(n)}function kd(n){const e=Es(n.expression);return e?`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Pl(n.value)}function U_(n){if(typeof n!="string"||!n)return!1;let e=0,t=0,i=!1,r=!1;for(let a=0;a<n.length;a++){const s=n[a],o=a>0?n[a-1]:"";if(!r&&s==="'"&&o!=="\\"){i=!i;continue}if(!i&&s==='"'&&o!=="\\"){r=!r;continue}if(!(i||r)){if(s==="(")e++;else if(s===")")e=Math.max(0,e-1);else if(s==="[")t++;else if(s==="]")t=Math.max(0,t-1);else if(s===","&&e===0&&t===0)return!0}}return!1}function O_(n){const e=Es(n.expression);return e?U_(e)?`[${e}]`:`(${e})`:typeof n.input=="string"&&n.input.trim()?n.input:Pl(n.value)}function uu(n,e){const t=O_(n),[i,r,a]=e;switch(n.operator){case"set":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = __vec[0]; target.${r} = __vec[1]; target.${a} = __vec[2]; }`].join(" ");case"add":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) + __vec[0]; target.${r} = (target.${r} ?? 0) + __vec[1]; target.${a} = (target.${a} ?? 0) + __vec[2]; }`].join(" ");case"subtract":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) - __vec[0]; target.${r} = (target.${r} ?? 0) - __vec[1]; target.${a} = (target.${a} ?? 0) - __vec[2]; }`].join(" ");case"multiply":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = (target.${i} ?? 0) * __vec[0]; target.${r} = (target.${r} ?? 0) * __vec[1]; target.${a} = (target.${a} ?? 0) * __vec[2]; }`].join(" ");case"divide":return[`const __vec = toColorVector(${t});`,`if (__vec) { if (__vec[0] !== 0) target.${i} = (target.${i} ?? 0) / __vec[0]; if (__vec[1] !== 0) target.${r} = (target.${r} ?? 0) / __vec[1]; if (__vec[2] !== 0) target.${a} = (target.${a} ?? 0) / __vec[2]; }`].join(" ");case"clamp":return[`const __vec = toColorVector(${t});`,`if (__vec) { target.${i} = clamp((target.${i} ?? 0), -Math.abs(__vec[0]), Math.abs(__vec[0])); target.${r} = clamp((target.${r} ?? 0), -Math.abs(__vec[1]), Math.abs(__vec[1])); target.${a} = clamp((target.${a} ?? 0), -Math.abs(__vec[2]), Math.abs(__vec[2])); }`].join(" ");default:return""}}function k_(n){const e=kd(n),t=["const __r = Number.isFinite(target.red) ? target.red : target.r;","const __g = Number.isFinite(target.green) ? target.green : target.g;","const __b = Number.isFinite(target.blue) ? target.blue : target.b;","const __hasRgb = Number.isFinite(__r) || Number.isFinite(__g) || Number.isFinite(__b);","const __hIn = Number.isFinite(target.hue) ? target.hue : target.h;","const __sIn = Number.isFinite(target.saturation) ? target.saturation : target.s;","const __vIn = Number.isFinite(target.brightness) ? target.brightness : target.v;","let __baseRgb = null;","if (__hasRgb) {","__baseRgb = [Number.isFinite(__r) ? __r : 0, Number.isFinite(__g) ? __g : 0, Number.isFinite(__b) ? __b : 0];","} else if (Number.isFinite(__hIn) || Number.isFinite(__sIn) || Number.isFinite(__vIn)) {","const __h = Number.isFinite(__hIn) ? __hIn : 0;","const __s = Number.isFinite(__sIn) ? __sIn : 0;","const __v = Number.isFinite(__vIn) ? __vIn : 0;","__baseRgb = hsvToRgbColor(__h, __s, __v);","}","if (!__baseRgb) __baseRgb = [0, 0, 0];","const __baseR255 = __baseRgb[0] * 255;","const __baseG255 = __baseRgb[1] * 255;","const __baseB255 = __baseRgb[2] * 255;","const __baseLuma = (0.299 * __baseR255) + (0.587 * __baseG255) + (0.114 * __baseB255);"].join(" "),i=["const __matched = matchLuma(__baseR255, __baseG255, __baseB255, __nextLuma);","if (__matched) {","target.red = __matched[0]; target.green = __matched[1]; target.blue = __matched[2];","target.r = __matched[0]; target.g = __matched[1]; target.b = __matched[2];","const __hsv = rgbToHsvColor(__matched[0], __matched[1], __matched[2]);","if (__hsv) {","target.hue = __hsv[0]; target.saturation = __hsv[1]; target.brightness = __hsv[2];","target.h = __hsv[0]; target.s = __hsv[1]; target.v = __hsv[2];","}","}"].join(" ");switch(n.operator){case"set":return[t,`const __nextLuma = Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"add":return[t,`const __nextLuma = __baseLuma + Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"subtract":return[t,`const __nextLuma = __baseLuma - Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"multiply":return[t,`const __nextLuma = __baseLuma * Number(${e});`,"if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"divide":return[t,`const __divisor = Number(${e});`,"const __nextLuma = Math.abs(__divisor) > 1e-6 ? (__baseLuma / __divisor) : __baseLuma;","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");case"clamp":return[t,`const __bound = Math.abs(Number(${e}));`,"const __nextLuma = clamp(__baseLuma, -__bound, __bound);","if (Number.isFinite(__nextLuma)) {",i,"}"].join(" ");default:return""}}function B_(n){if(!n||n.operator==="always")return"true";const e=Es(n.expression);if(e)return`(${e})`;if(!I_.has(n.operator))return"false";const t=typeof n.input=="string"?n.input:"0",i=typeof n.valueInput=="string"&&n.valueInput?n.valueInput:Pl(n.value??0);return`((${t}) ${n.operator} (${i}))`}function z_(n){const e=n.output;if(e==="rgb")return uu(n,["red","green","blue"]);if(e==="hsv")return uu(n,["hue","saturation","brightness"]);if(e==="luma")return k_(n);const t=kd(n);switch(n.operator){case"set":return`target.${e} = ${t};`;case"add":return`target.${e} = (target.${e} ?? 0) + (${t});`;case"subtract":return`target.${e} = (target.${e} ?? 0) - (${t});`;case"multiply":return`target.${e} = (target.${e} ?? 0) * (${t});`;case"divide":return`if ((${t}) !== 0) target.${e} = (target.${e} ?? 0) / (${t});`;case"clamp":return`target.${e} = clamp((target.${e} ?? 0), -Math.abs(${t}), Math.abs(${t}));`;default:return""}}function Jr(n,e,t,i){const r=[],a=[];r.push(`function ${n}(ctx${i?", particle":""}) {`),r.push(`  const target = ${i?"(particle ?? ctx?.particle ?? ctx)":"(ctx?.particle ?? ctx)"};`),r.push("  if (!target) return;"),r.push("  const i = (ctx && (ctx.inputs || ctx)) || {};"),r.push("  const palette = (id, index) => helpers.palette(ctx, id, index);"),r.push("  const gradient = (id, value) => helpers.gradient(ctx, id, value);"),r.push("  const matchLuma = (r, g, b, targetLuma) => helpers.matchLuma(r, g, b, targetLuma);"),r.push("  const rgb = (r, g, b) => helpers.rgb(r, g, b);"),r.push("  const hsv = (h, s, v) => helpers.hsv(h, s, v);"),r.push("  const hsvToRgbColor = (h, s, v) => helpers.hsvToRgbColor(h, s, v);"),r.push("  const rgbToHsvColor = (r, g, b) => helpers.rgbToHsvColor(r, g, b);"),r.push("  const toColorVector = (value) => helpers.toColorVector(value);"),r.push("  const deltaTime = Number.isFinite(i.deltaTime) ? i.deltaTime : 0;"),r.push("  const time = Number.isFinite(i.time) ? i.time : 0;");for(const s of t)s==="deltaTime"||s==="time"||r.push(`  const ${s} = Number.isFinite(i.${s}) ? i.${s} : 0;`);return e.forEach(s=>{if(!s.enabled)return;const o=B_(s.condition);r.push(`  // rule ${s.id}`),r.push(`  if (${o}) {`),a.push({ruleId:s.id,functionName:n,sourceLine:r.length+1});for(const l of s.actions??[])r.push(`    ${z_(l)}`);r.push("  }")}),r.push("}"),{source:r.join(`
`),lineMap:a}}function V_(n,e){return Jr("applySpawnRules",n,e,!1)}function H_(n,e){return Jr("applyLivingRules",n,e,!0)}function G_(n){const e=JSON.stringify(n??[]);let t=2166136261;for(let i=0;i<e.length;i++)t^=e.charCodeAt(i),t=Math.imul(t,16777619);return(t>>>0).toString(16)}function du(n,e){const t=performance.now(),i=md(n,e),a=[...i.ruleBlocks].sort((w,T)=>(w.order??0)-(T.order??0)),s=a.filter(w=>w.target==="spawnedParticles"),o=a.filter(w=>w.target==="allParticles"),l=a.filter(w=>w.target==="lines"),c=a.filter(w=>w.target==="background"),u=a.filter(w=>w.target==="camera"),d=G_(a);if(Va.hash===d)return Va.result;const p=Db().entries.map(w=>w.id),h=new Set(p),g={spawnedParticles:Gr(s,h),allParticles:Gr(o,h),lines:Gr(l,h),background:Gr(c,h),camera:Gr(u,h)},b=[...new Set([...g.spawnedParticles,...g.allParticles,...g.lines,...g.background,...g.camera])],m=V_(s,p),f=H_(o,p),y=Jr("applyLineRules",l,p,!0),v=Jr("applyBackgroundRules",c,p,!0),x=Jr("applyCameraRules",u,p,!0),R=["'use strict';","const { clamp, lerp, smoothstep, pow, min, max, abs } = helpers;",m.source,f.source,y.source,v.source,x.source,"return { applySpawnRules, applyLivingRules, applyLineRules, applyBackgroundRules, applyCameraRules };"].join(`

`);try{const T=new Function("helpers",R)(D_),A={hash:d,compileStatus:i.rejected.length>0?"compiled-with-rejections":"compiled",compileError:null,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:s.length,livingRuleCount:o.length,lineRuleCount:l.length,backgroundRuleCount:c.length,cameraRuleCount:u.length,usesParticleHsb:sr([...s,...o]),usesLineHsb:sr(l),usesBackgroundHsb:sr(c),usesLivingShapeType:lu(o,"shapeType"),rejected:i.rejected,requiredInputsByTarget:g,requiredInputs:b,lineMap:[...m.lineMap,...f.lineMap,...y.lineMap,...v.lineMap,...x.lineMap],source:R,applySpawnRules:typeof T.applySpawnRules=="function"?T.applySpawnRules:Id,applyLivingRules:typeof T.applyLivingRules=="function"?T.applyLivingRules:hr,applyLineRules:typeof T.applyLineRules=="function"?T.applyLineRules:hr,applyBackgroundRules:typeof T.applyBackgroundRules=="function"?T.applyBackgroundRules:hr,applyCameraRules:typeof T.applyCameraRules=="function"?T.applyCameraRules:hr};return Va={hash:d,result:A},A}catch(w){const T=Number.isFinite(w==null?void 0:w.lineNumber)?Number(w.lineNumber):null;return{...Va.result,hash:d,compileStatus:"error",compileError:(w==null?void 0:w.message)||String(w),compileLine:T,compileTimeMs:Math.max(0,performance.now()-t),spawnRuleCount:s.length,livingRuleCount:o.length,lineRuleCount:l.length,backgroundRuleCount:c.length,cameraRuleCount:u.length,usesParticleHsb:sr([...s,...o]),usesLineHsb:sr(l),usesBackgroundHsb:sr(c),usesLivingShapeType:lu(o,"shapeType"),requiredInputsByTarget:g,requiredInputs:b,lineMap:[...m.lineMap,...f.lineMap,...y.lineMap,...v.lineMap,...x.lineMap],source:R,rejected:i.rejected}}}const Rl=16,Qo=2e4,pu=Math.log2(Rl),W_=Math.log2(Qo),X_=100,q_=5e3;function Ha(n){return Math.min(1,Math.max(0,(Math.log2(Math.max(n,Rl))-pu)/(W_-pu)))}function jt(n,e,t){const i=Number(e),r=Number(t),a=Number(n);return Number.isFinite(a)?!Number.isFinite(i)||!Number.isFinite(r)||r<=i?Ge(a):Ge((a-i)/(r-i)):0}function hu(n){return n==="circle"?1:n==="square"?0:Number.isFinite(n)&&n>.5?1:0}function Ge(n){return Math.max(0,Math.min(1,n))}function jr(n){return Number.isFinite(n)?((Math.abs(n)>1?n/360:n)%1+1)%1:null}function Bd(n){const e=Number(n);return!Number.isFinite(e)||e<=0?null:69+12*Math.log2(e/440)}function Y_(n){const e=Bd(n);return Number.isFinite(e)?(Math.round(e)%12+12)%12:0}function j_(n){const e=Bd(n);return Number.isFinite(e)?Math.floor(Math.round(e)/12)-1:-1}function Wr(n,e,t){const i=Ge(n),r=Ge(e),a=Ge(t),s=Math.max(i,r,a),o=Math.min(i,r,a),l=s-o;let c=0;l>1e-6&&(s===i?c=(r-a)/l%6:s===r?c=(a-i)/l+2:c=(i-r)/l+4,c/=6,c<0&&(c+=1));const u=s<=1e-6?0:l/s;return{h:c,s:u,v:s}}function Ga(n,e,t){const i=jr(n)??0,r=Ge(e),a=Ge(t),s=Math.floor(i*6),o=i*6-s,l=a*(1-r),c=a*(1-o*r),u=a*(1-(1-o)*r);switch(s%6){case 0:return{r:a,g:u,b:l};case 1:return{r:c,g:a,b:l};case 2:return{r:l,g:a,b:u};case 3:return{r:l,g:c,b:a};case 4:return{r:u,g:l,b:a};default:return{r:a,g:l,b:c}}}const $_=`
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
`,Z_=`
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
`;class K_{constructor(e,t={}){this._N=Math.max(1,Math.floor(t.maxParticles??1024)),this._visibleCount=0,this._paintCount=0,this._lineVisibleCount=0;const i=new vn,r=new vn;this._geo=i,this._lineGeo=r,this._allocateBuffers(this._N);const a=new rn({vertexShader:$_,fragmentShader:Z_,uniforms:{uViewportHeight:{value:1}},transparent:!0,depthWrite:!1,blending:yi});this._mesh=new Oh(i,a),this._mesh.frustumCulled=!1;const s=new ms({vertexColors:!0,transparent:!0,opacity:.9,blending:yi,depthWrite:!1});this._lineMesh=new ml(r,s),this._lineMesh.frustumCulled=!1,e.add(this._mesh),e.add(this._lineMesh),this._mat=a,this._lineMat=s,this._lastBlending=a.blending,this._background=new rt(0,0,0),this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._compiledRules=du([]),this._ruleCompileState=this._compiledRules,this._frameCounter=0,this._lastUpdateT=performance.now(),this._archiveChunks=[],this._archivePointCount=0,this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1))}_allocateBuffers(e){this._N=Math.max(1,Math.floor(e)),this._archiveOffloadBatch=Math.max(256,Math.floor(this._N*.1)),this._pos=new Float32Array(this._N*3),this._col=new Float32Array(this._N*3),this._sz=new Float32Array(this._N),this._alpha=new Float32Array(this._N),this._shape=new Float32Array(this._N),this._pan=new Float32Array(this._N),this._binRms=new Float32Array(this._N),this._linePos=new Float32Array(this._N*2*3),this._lineCol=new Float32Array(this._N*2*3),this._lineThickness=new Float32Array(this._N),this._lineAlpha=new Float32Array(this._N),this._aPos=new Kt(this._pos,3),this._aCol=new Kt(this._col,3),this._aSz=new Kt(this._sz,1),this._aAlpha=new Kt(this._alpha,1),this._aShape=new Kt(this._shape,1),this._aLinePos=new Kt(this._linePos,3),this._aLineCol=new Kt(this._lineCol,3);for(const t of[this._aPos,this._aCol,this._aSz,this._aAlpha,this._aShape,this._aLinePos,this._aLineCol])t.setUsage(Wp);this._geo.setAttribute("position",this._aPos),this._geo.setAttribute("color",this._aCol),this._geo.setAttribute("vcolor",this._aCol),this._geo.setAttribute("psize",this._aSz),this._geo.setAttribute("valpha",this._aAlpha),this._geo.setAttribute("shapeType",this._aShape),this._lineGeo.setAttribute("position",this._aLinePos),this._lineGeo.setAttribute("color",this._aLineCol),this.clear()}_pruneArchive(e,t){const i=Math.max(0,Math.floor((e==null?void 0:e.archiveMaxPoints)??15e5)),r=Math.max(0,Number((e==null?void 0:e.archiveMaxAgeSec)??0));for(;this._archivePointCount>i&&this._archiveChunks.length>0;){const a=this._archiveChunks.shift();this._archivePointCount-=a.count}if(r>0)for(;this._archiveChunks.length>0&&!(t-this._archiveChunks[0].timestampSec<=r);){const s=this._archiveChunks.shift();this._archivePointCount-=s.count}this._archivePointCount<0&&(this._archivePointCount=0)}_archiveAndCompactOldest(e,t,i,r){const a=Math.max(0,Math.min(e,t));if(a<=0)return 0;const s={count:a,timestampSec:r,pos:this._pos.slice(0,a*3),col:this._col.slice(0,a*3),sz:this._sz.slice(0,a),alpha:this._alpha.slice(0,a),shape:this._shape.slice(0,a),pan:this._pan.slice(0,a),binRms:this._binRms.slice(0,a)};this._archiveChunks.push(s),this._archivePointCount+=a,this._pruneArchive(i,r);const o=t-a;for(let l=0;l<o;l++){const c=l+a;this._pos[l*3]=this._pos[c*3],this._pos[l*3+1]=this._pos[c*3+1],this._pos[l*3+2]=this._pos[c*3+2],this._col[l*3]=this._col[c*3],this._col[l*3+1]=this._col[c*3+1],this._col[l*3+2]=this._col[c*3+2],this._sz[l]=this._sz[c],this._alpha[l]=this._alpha[c],this._shape[l]=this._shape[c],this._pan[l]=this._pan[c],this._binRms[l]=this._binRms[c]}return a}rehydrateArchivedToActive(e={}){if(this._archiveChunks.length===0)return{rehydrated:0,mode:e.mode??"latest"};const t=e.mode==="oldest"?"oldest":"latest",i=Math.max(0,Math.min(this._N,Math.floor(e.maxPoints??this._N)));if(i<=0)return{rehydrated:0,mode:t};let r=0;if(t==="oldest")for(let a=0;a<this._archiveChunks.length&&r<i;a++){const s=this._archiveChunks[a],o=Math.min(s.count,i-r);for(let l=0;l<o;l++)this._pos[(r+l)*3]=s.pos[l*3],this._pos[(r+l)*3+1]=s.pos[l*3+1],this._pos[(r+l)*3+2]=s.pos[l*3+2],this._col[(r+l)*3]=s.col[l*3],this._col[(r+l)*3+1]=s.col[l*3+1],this._col[(r+l)*3+2]=s.col[l*3+2],this._sz[r+l]=s.sz[l],this._alpha[r+l]=s.alpha[l],this._shape[r+l]=s.shape[l],this._pan[r+l]=s.pan?s.pan[l]:0,this._binRms[r+l]=s.binRms?s.binRms[l]:0;r+=o}else for(let a=this._archiveChunks.length-1;a>=0&&r<i;a--){const s=this._archiveChunks[a],o=Math.min(s.count,i-r),l=s.count-o;for(let c=0;c<o;c++){const u=l+c;this._pos[(i-r-o+c)*3]=s.pos[u*3],this._pos[(i-r-o+c)*3+1]=s.pos[u*3+1],this._pos[(i-r-o+c)*3+2]=s.pos[u*3+2],this._col[(i-r-o+c)*3]=s.col[u*3],this._col[(i-r-o+c)*3+1]=s.col[u*3+1],this._col[(i-r-o+c)*3+2]=s.col[u*3+2],this._sz[i-r-o+c]=s.sz[u],this._alpha[i-r-o+c]=s.alpha[u],this._shape[i-r-o+c]=s.shape[u],this._pan[i-r-o+c]=s.pan?s.pan[u]:0,this._binRms[i-r-o+c]=s.binRms?s.binRms[u]:0}r+=o}return this._paintCount=r,this._visibleCount=r,this._geo.setDrawRange(0,r),this._lineVisibleCount=0,this._lineGeo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0,{rehydrated:r,mode:t}}getArchiveStats(){return{activePoints:this._visibleCount,archivedPoints:this._archivePointCount,archivedChunks:this._archiveChunks.length}}setMaxParticles(e){const t=Math.max(1,Math.floor(e||1));t!==this._N&&this._allocateBuffers(t)}clear(){this._paintCount=0,this._visibleCount=0,this._lineVisibleCount=0,this._archiveChunks=[],this._archivePointCount=0,this._geo.setDrawRange(0,0),this._lineGeo.setDrawRange(0,0),this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}clearCanvas(){this.clear()}scaleAllParticleSizes(e){const t=Number(e);if(!(!Number.isFinite(t)||t<=0)){for(let i=0;i<this._visibleCount;i++)this._sz[i]=Math.max(0,this._sz[i]*t);for(const i of this._archiveChunks){const r=Math.max(0,Number(i==null?void 0:i.count)||0);if(i!=null&&i.sz)for(let a=0;a<r;a++)i.sz[a]=Math.max(0,i.sz[a]*t)}this._aSz.needsUpdate=!0}}setViewportHeight(e){var i,r;const t=Math.max(1,Number(e)||1);(r=(i=this._mat)==null?void 0:i.uniforms)!=null&&r.uViewportHeight&&(this._mat.uniforms.uViewportHeight.value=t)}onRulesChanged(e){const t=du(e);return this._compiledRules=t,this._ruleCompileState=t,t}getRuleCompileState(){return this._ruleCompileState}getBackgroundColor(){return this._background}getCameraOutput(){return this._cameraOutput}_buildRuleInputs(e,t={}){const i=Number(t.frequencyHz)||0,r=Y_(i),a=j_(i);return{amplitude:Number.isFinite(t.amplitude)?Number(t.amplitude):e.amplitude??0,bass:e.bass??0,mid:e.mid??0,high:e.high??0,peakFreq:e.peakFreq??0,pan:Number.isFinite(t.pan)?Number(t.pan):e.pan??0,time:Number(t.time)||0,deltaTime:Number.isFinite(Number(t.deltaTime))&&Number(t.deltaTime)>0?Number(t.deltaTime):1/60,globalRmsEnergy:Number.isFinite(t.globalRmsEnergy)?Number(t.globalRmsEnergy):e.amplitude??0,spectralCentroid:Number.isFinite(t.spectralCentroid)?Number(t.spectralCentroid):e.spectralCentroid??0,spectralFlux:Number.isFinite(t.spectralFlux)?Number(t.spectralFlux):e.spectralFlux??0,spectralFlatness:Number.isFinite(t.spectralFlatness)?Number(t.spectralFlatness):e.spectralFlatness??0,inharmonicity:Number.isFinite(t.inharmonicity)?Number(t.inharmonicity):e.inharmonicity??0,peakAmplitude:Number.isFinite(t.peakAmplitude)?Number(t.peakAmplitude):e.peakAmplitude??0,zeroCrossingRate:Number.isFinite(t.zeroCrossingRate)?Number(t.zeroCrossingRate):e.zeroCrossingRate??0,spectralRolloff:Number.isFinite(t.spectralRolloff)?Number(t.spectralRolloff):e.spectralRolloff??0,spectralSpread:Number.isFinite(t.spectralSpread)?Number(t.spectralSpread):e.spectralSpread??0,spectralSkewness:Number.isFinite(t.spectralSkewness)?Number(t.spectralSkewness):e.spectralSkewness??0,chromagram:Number.isFinite(t.chromagram)?Number(t.chromagram):e.chromagram??0,binMagnitude:Number.isFinite(t.binMagnitude)?Ge(t.binMagnitude):0,binPhase:Number.isFinite(t.binPhase)?Ge(t.binPhase):0,binFlux:Number.isFinite(t.binFlux)?Number(t.binFlux):0,binPhaseDeviation:Number.isFinite(t.binPhaseDeviation)?Ge(t.binPhaseDeviation):0,binAttackTime:Number.isFinite(t.binAttackTime)?Ge(t.binAttackTime):0,binEnvelope:Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):Number.isFinite(t.binAttackTime)?Number(t.binAttackTime):0,binEnvelopeState:Number.isFinite(t.binEnvelopeState)?Number(t.binEnvelopeState):Number.isFinite(t.binEnvelope)?Number(t.binEnvelope):0,binRMSEnergy:Number.isFinite(t.binRMSEnergy)?Ge(t.binRMSEnergy):Number.isFinite(t.globalRmsEnergy)?Ge(t.globalRmsEnergy):0,canvasWidthPx:Number(t.canvasWidthPx)||0,canvasHeightPx:Number(t.canvasHeightPx)||0,audioLengthSec:Number(t.audioLengthSec)||0,frequencyHz:i,notePitchClass:r,octave:a,normFreq:Number(t.normFreq)||0}}getVisibleBounds(){const e=Math.max(0,this._visibleCount);if(e===0)return{empty:!0,min:new H,max:new H,center:new H,size:new H};const t=new H(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),i=new H(Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY);for(let s=0;s<e;s++){const o=this._pos[s*3],l=this._pos[s*3+1],c=this._pos[s*3+2];o<t.x&&(t.x=o),l<t.y&&(t.y=l),c<t.z&&(t.z=c),o>i.x&&(i.x=o),l>i.y&&(i.y=l),c>i.z&&(i.z=c)}const r=t.clone().add(i).multiplyScalar(.5),a=i.clone().sub(t);return{empty:!1,min:t,max:i,center:r,size:a}}applySpawnRulesToParticle(e){this._compiledRules.applySpawnRules(e)}applyLivingRulesToRange(e,t,i){const r=Math.max(0,i-t),a=1,s=e||{},o=s.inputs||(s.inputs={});let l=0;for(let c=t;c<i&&!(l>=r);c+=a){o.pan=Number.isFinite(this._pan[c])?this._pan[c]:0,o.binRMSEnergy=Number.isFinite(this._binRms[c])?this._binRms[c]:0;const u={x:this._pos[c*3],y:this._pos[c*3+1],z:this._pos[c*3+2],size:this._sz[c],red:this._col[c*3],green:this._col[c*3+1],blue:this._col[c*3+2],opacity:this._alpha[c],shapeType:this._shape[c]>.5?"circle":"square"};this._compiledRules.applyLivingRules(s,u),this._pos[c*3]=Number.isFinite(u.x)?u.x:this._pos[c*3],this._pos[c*3+1]=Number.isFinite(u.y)?u.y:this._pos[c*3+1],this._pos[c*3+2]=Number.isFinite(u.z)?u.z:this._pos[c*3+2],this._sz[c]=Number.isFinite(u.size)?Math.max(0,u.size):this._sz[c];let d=Number.isFinite(u.red)?Ge(u.red):this._col[c*3],p=Number.isFinite(u.green)?Ge(u.green):this._col[c*3+1],h=Number.isFinite(u.blue)?Ge(u.blue):this._col[c*3+2];if(this._compiledRules.usesParticleHsb){const g=Wr(d,p,h),b=jr(u.hue),m=Number.isFinite(u.saturation)?Ge(u.saturation):g.s,f=Number.isFinite(u.brightness)?Ge(u.brightness):g.v,y=Ga(b??g.h,m,f);d=y.r,p=y.g,h=y.b}this._col[c*3]=d,this._col[c*3+1]=p,this._col[c*3+2]=h,this._alpha[c]=Number.isFinite(u.opacity)?Math.max(0,Math.min(1,u.opacity)):this._alpha[c],this._shape[c]=hu(u.shapeType),this._binRms[c]=Number.isFinite(o.binRMSEnergy)?Ge(o.binRMSEnergy):this._binRms[c],l++}return l}applyBackgroundRules(e){const t=this._background,i=Wr(t.r,t.g,t.b),r={red:t.r,green:t.g,blue:t.b,hue:i.h,saturation:i.s,brightness:i.v};this._compiledRules.applyBackgroundRules(e,r);let a=Number.isFinite(r.red)?Ge(r.red):t.r,s=Number.isFinite(r.green)?Ge(r.green):t.g,o=Number.isFinite(r.blue)?Ge(r.blue):t.b;if(this._compiledRules.usesBackgroundHsb){const l=Wr(a,s,o),c=jr(r.hue),u=Number.isFinite(r.saturation)?Ge(r.saturation):l.s,d=Number.isFinite(r.brightness)?Ge(r.brightness):l.v,p=Ga(c??l.h,u,d);a=p.r,s=p.g,o=p.b}t.setRGB(a,s,o)}applyLineRules(e,t){this._compiledRules.applyLineRules(e,t)}applyCameraRules(e,t){const i={x:(t==null?void 0:t.x)??0,y:(t==null?void 0:t.y)??0,z:(t==null?void 0:t.z)??0,zoom:(t==null?void 0:t.zoom)??1,targetX:(t==null?void 0:t.targetX)??0,targetY:(t==null?void 0:t.targetY)??0,targetZ:(t==null?void 0:t.targetZ)??0,angleOfView:(t==null?void 0:t.angleOfView)??55};this._compiledRules.applyCameraRules(e,i),this._cameraOutput={x:Number.isFinite(i.x)?i.x:null,y:Number.isFinite(i.y)?i.y:null,z:Number.isFinite(i.z)?i.z:null,zoom:Number.isFinite(i.zoom)?i.zoom:null,targetX:Number.isFinite(i.targetX)?i.targetX:null,targetY:Number.isFinite(i.targetY)?i.targetY:null,targetZ:Number.isFinite(i.targetZ)?i.targetZ:null,angleOfView:Number.isFinite(i.angleOfView)?i.angleOfView:null}}update(e,t,i,r){var Te,Qe,We,vt,O,ye,Q,se,Me,_e;if(!e.analyser||!(i>0)||!(r>0))return;this._frameCounter++;const a=performance.now(),s=Math.max(0,Math.min(1,(a-this._lastUpdateT)/1e3));this._lastUpdateT=a;const o=e.frequencyData,l=Math.min(o.length,this._N),u=(((Te=e.ctx)==null?void 0:Te.sampleRate)??44100)/2,d=t.persistMode??0,p=t.inputGain??1,h=t.defaultParticleSize??6,g=Math.max(Rl,Math.min(Qo,Number(t.freqNormMin??40))),b=Math.max(g+1,Math.min(Qo,Number(t.freqNormMax??12e3))),m=Ha(g),f=Ha(b),y=Number(t.binMagnitudeNormMin??-70),v=Number(t.binMagnitudeNormMax??0),x=Number(t.binFluxNormMin??0),R=Number(t.binFluxNormMax??.5),w=Number(t.binPhaseDeviationNormMin??0),T=Number(t.binPhaseDeviationNormMax??Math.PI),A=Number(t.binAttackTimeNormMin??5),C=Number(t.binAttackTimeNormMax??500),_=Number(t.globalRmsNormMin??-60),L=Number(t.globalRmsNormMax??0),I=Number(t.spectralCentroidNormMin??150),G=Number(t.spectralCentroidNormMax??8e3),q=Number(t.globalSpectralFluxNormMin??0),$=Number(t.globalSpectralFluxNormMax??100),J=Number(t.spectralFlatnessNormMin??0),ue=Number(t.spectralFlatnessNormMax??1),W=Number(t.particlesByFrame),de=Number.isFinite(W)?Math.max(X_,Math.min(q_,Math.round(W))):1e3,j=Math.max(1,de),te=Math.pow(b/Math.max(g,1e-6),1/j),Ee=Number.isFinite(te)&&te>1?te:1,tt=t.blendMode??"screen",ne=Number.isFinite(Number(t.defaultBackgroundHue))?Number(t.defaultBackgroundHue):0,fe=Number.isFinite(Number(t.defaultBackgroundSaturation))?Number(t.defaultBackgroundSaturation):0,Ce=Number.isFinite(Number(t.defaultBackgroundLightness))?Number(t.defaultBackgroundLightness):0,ve=!!(e.analyserL&&e.analyserR&&e.getBinPan),Re=((Qe=e.getBinMagnitude)==null?void 0:Qe.call(e))||null,Oe=((We=e.getBinFlux)==null?void 0:We.call(e))||null,Be=((vt=e.getBinPhaseDeviation)==null?void 0:vt.call(e))||null,ot=((O=e.getBinPhase)==null?void 0:O.call(e))||null,Ye=((ye=e.getBinEnvelope)==null?void 0:ye.call(e))||null,dt=((Q=e.getBinAttackTime)==null?void 0:Q.call(e))||null,F=new Set(((se=this._compiledRules)==null?void 0:se.requiredInputs)||[]),Ct=F.has("binMagnitude"),Ke=F.has("binPhase"),Je=F.has("binFlux"),Ie=F.has("binPhaseDeviation"),ct=F.has("binAttackTime"),Le=F.has("binEnvelope")||F.has("binEnvelopeState");if(tt==="alpha"){const M=this._mat;(M.blending!==so||M.blendSrc!==Qr||M.blendDst!==ea||M.blendEquation!==oi)&&(M.blending=so,M.blendSrc=Qr,M.blendDst=ea,M.blendEquation=oi,M.needsUpdate=!0,this._lastBlending=M.blending),M.depthWrite&&(M.depthWrite=!1,M.needsUpdate=!0)}else{const N={screen:yi,lighter:yi,"source-over":wi,multiply:wi}[tt]??yi;N!==this._lastBlending&&(this._mat.blending=N,this._mat.needsUpdate=!0,this._lastBlending=N);const k=tt==="source-over";this._mat.depthWrite!==k&&(this._mat.depthWrite=k,this._mat.needsUpdate=!0)}this._lineMat.blending!==this._mat.blending&&(this._lineMat.blending=this._mat.blending,this._lineMat.needsUpdate=!0),this._lineMat.depthWrite&&(this._lineMat.depthWrite=!1,this._lineMat.needsUpdate=!0),Number(t.cameraCanvasWidthUnits);const P=Number(t.cameraCanvasHeightUnits),S=Number.isFinite(P)&&P>0?P:r,z=(ne%360+360)%360;this._background.setHSL(z/360,Ge(fe/100),Ge(Ce/100));const ie=S/2,ae=((Me=e.audioEl)==null?void 0:Me.currentTime)??0,ee=((_e=e.audioEl)==null?void 0:_e.duration)??0,ce={binMagnitude:0,binPhase:0,binFlux:0,binPhaseDeviation:0,binAttackTime:0,binEnvelope:0,binEnvelopeState:0,globalRmsEnergy:jt(e.rmsDbfs,_,L),binRMSEnergy:jt(e.rmsDbfs,_,L),spectralCentroid:jt(e.spectralCentroidHz,I,G),spectralFlux:jt(e.spectralFluxAU,q,$),spectralFlatness:jt(e.spectralFlatnessRatio,J,ue),inharmonicity:Ge(e.inharmonicity),peakAmplitude:Ge(e.peakAmplitude),zeroCrossingRate:Ge(e.zeroCrossingRate),spectralRolloff:Ge(e.spectralRolloff),spectralSpread:Ge(e.spectralSpread),spectralSkewness:Ge(e.spectralSkewness),chromagram:Ge(e.chromagram)};if(ce.amplitude=ce.globalRmsEnergy,Ct&&Re&&Re.length>0){let M=0;for(let N=0;N<Re.length;N++)M+=jt(Re[N],y,v);ce.binMagnitude=M/Re.length}if(Je&&Oe&&Oe.length>0){let M=0;for(let N=0;N<Oe.length;N++)M+=jt(Oe[N],x,R);ce.binFlux=M/Oe.length}if(Ie&&Be&&Be.length>0){let M=0;for(let N=0;N<Be.length;N++)M+=jt(Be[N],w,T);ce.binPhaseDeviation=M/Be.length}if(ct&&dt&&dt.length>0){let M=0;for(let N=0;N<dt.length;N++)M+=jt(dt[N],A,C);ce.binAttackTime=M/dt.length}if(Le&&Ye&&Ye.length>0){let M=0;for(let N=0;N<Ye.length;N++)M+=Ye[N];ce.binEnvelope=M/Ye.length,ce.binEnvelopeState=ce.binEnvelope}if(Ke&&ot&&ot.length>0){let M=0;for(let N=0;N<ot.length;N++)M+=jt(ot[N],-Math.PI,Math.PI);ce.binPhase=M/ot.length}let pe=d===1?this._paintCount:0,xe=d===1?this._lineVisibleCount:0;const $e=(M,N=1)=>{if(pe>=this._N&&d===1){const U=Math.max(1,Math.floor(t.archiveOffloadBatch??this._archiveOffloadBatch)),X=this._archiveAndCompactOldest(U,pe,t,ae);pe=Math.max(0,pe-X)}if(pe>=this._N)return;const k=M.hz,Z=Ha(k),le=jt(Z,m,f),B=Number.isFinite(M.binPan)?M.binPan:e.pan??0;Number.isFinite(M.byte)&&M.byte;const me=Number.isFinite(M.energy)?M.energy:0,ge=Number.isFinite(M.binMagnitude)?M.binMagnitude:void 0,Xe=Number.isFinite(M.binPhase)?M.binPhase:void 0,Ze=Number.isFinite(M.binFlux)?M.binFlux:void 0,nt=Number.isFinite(M.binPhaseDeviation)?M.binPhaseDeviation:void 0,at=Number.isFinite(M.binAttackTime)?M.binAttackTime:void 0,He=Number.isFinite(M.binEnvelope)?M.binEnvelope:void 0,ut=Number.isFinite(M.binRMSEnergy)?M.binRMSEnergy:void 0,lt=(le*2-1)*ie,pt=0,bt=0,Et=Ge(me),be={x:pt,y:lt,z:bt,size:Math.max(1,h*(.5+me*1.5)),red:Et,green:Et,blue:Et,opacity:Math.min(1,(.08+me*1.9)*N),particleCount:1,shapeType:"square"};t.ruleEngineEnabled!==!1&&this._compiledRules.spawnRuleCount>0&&this.applySpawnRulesToParticle({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:k,normFreq:le,pan:B,spectralCentroid:ce.spectralCentroid,spectralFlux:ce.spectralFlux,spectralFlatness:ce.spectralFlatness,inharmonicity:ce.inharmonicity,peakAmplitude:ce.peakAmplitude,zeroCrossingRate:ce.zeroCrossingRate,spectralRolloff:ce.spectralRolloff,spectralSpread:ce.spectralSpread,spectralSkewness:ce.spectralSkewness,chromagram:ce.chromagram,binMagnitude:ge,binPhase:Xe,binFlux:Ze,binPhaseDeviation:nt,binAttackTime:at,binEnvelope:He,binEnvelopeState:He,binRMSEnergy:ut,globalRmsEnergy:ce.globalRmsEnergy,amplitude:ce.amplitude,time:ae,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ee}),particle:be});const Dt=Number.isFinite(be.particleCount)?Ge(be.particleCount):1;if(Dt<=0||Dt<1&&Math.random()>Dt)return;this._pos[pe*3]=Number.isFinite(be.x)?be.x:pt,this._pos[pe*3+1]=Number.isFinite(be.y)?be.y:lt,this._pos[pe*3+2]=Number.isFinite(be.z)?be.z:bt,this._sz[pe]=Number.isFinite(be.size)?Math.max(0,be.size):Math.max(2,h);let qt=Number.isFinite(be.red)?Ge(be.red):Et,an=Number.isFinite(be.green)?Ge(be.green):Et,E=Number.isFinite(be.blue)?Ge(be.blue):Et;if(this._compiledRules.usesParticleHsb){const U=Wr(qt,an,E),X=jr(be.hue),Y=Number.isFinite(be.saturation)?Ge(be.saturation):U.s,V=Number.isFinite(be.brightness)?Ge(be.brightness):U.v,oe=Ga(X??U.h,Y,V);qt=oe.r,an=oe.g,E=oe.b}this._col[pe*3]=qt,this._col[pe*3+1]=an,this._col[pe*3+2]=E,this._alpha[pe]=Number.isFinite(be.opacity)?Math.max(0,Math.min(1,be.opacity)):Math.min(1,(.08+me*1.9)*N),this._shape[pe]=hu(be.shapeType),this._pan[pe]=Number.isFinite(B)?Math.max(-1,Math.min(1,B)):0,this._binRms[pe]=Number.isFinite(ut)?Ge(ut):0,pe++},he=(M,N=1)=>{if(xe>=this._N)return;const k=M.hz,Z=Ha(k),le=jt(Z,m,f),B=Number.isFinite(M.binPan)?M.binPan:e.pan??0,me=Number.isFinite(M.energy)?M.energy:0,ge=Number.isFinite(M.binMagnitude)?M.binMagnitude:void 0,Xe=Number.isFinite(M.binPhase)?M.binPhase:void 0,Ze=Number.isFinite(M.binFlux)?M.binFlux:void 0,nt=Number.isFinite(M.binPhaseDeviation)?M.binPhaseDeviation:void 0,at=Number.isFinite(M.binAttackTime)?M.binAttackTime:void 0,He=Number.isFinite(M.binEnvelope)?M.binEnvelope:void 0,ut=Number.isFinite(M.binRMSEnergy)?M.binRMSEnergy:void 0,lt=(le*2-1)*ie,pt=0,bt=0,Et=Ge(me),be={xStart:pt,yStart:lt,zStart:bt,xEnd:pt,yEnd:lt+Math.max(1,ie*.12*me),zEnd:bt,thickness:1,lineCount:0,red:Et,green:Et,blue:Et,opacity:Math.min(1,(.08+me*1.4)*N)};t.ruleEngineEnabled!==!1&&this._compiledRules.lineRuleCount>0&&this.applyLineRules({params:t,inputs:this._buildRuleInputs(e,{frequencyHz:k,normFreq:le,pan:B,spectralCentroid:ce.spectralCentroid,spectralFlux:ce.spectralFlux,spectralFlatness:ce.spectralFlatness,inharmonicity:ce.inharmonicity,peakAmplitude:ce.peakAmplitude,zeroCrossingRate:ce.zeroCrossingRate,spectralRolloff:ce.spectralRolloff,spectralSpread:ce.spectralSpread,spectralSkewness:ce.spectralSkewness,chromagram:ce.chromagram,binMagnitude:ge,binPhase:Xe,binFlux:Ze,binPhaseDeviation:nt,binAttackTime:at,binEnvelope:He,binEnvelopeState:He,binRMSEnergy:ut,globalRmsEnergy:ce.globalRmsEnergy,amplitude:ce.amplitude,time:ae,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ee})},be);const Dt=Number.isFinite(be.lineCount)?Ge(be.lineCount):0;if(Dt<=0||Dt<1&&Math.random()>Dt)return;let qt=Number.isFinite(be.red)?Ge(be.red):Et,an=Number.isFinite(be.green)?Ge(be.green):Et,E=Number.isFinite(be.blue)?Ge(be.blue):Et;if(this._compiledRules.usesLineHsb){const Se=Wr(qt,an,E),Ne=jr(be.hue),Ue=Number.isFinite(be.saturation)?Ge(be.saturation):Se.s,je=Number.isFinite(be.brightness)?Ge(be.brightness):Se.v,qe=Ga(Ne??Se.h,Ue,je);qt=qe.r,an=qe.g,E=qe.b}const U=Number.isFinite(be.opacity)?Math.max(0,Math.min(1,be.opacity)):.4,X=qt*U,Y=an*U,V=E*U,oe=xe*6;this._linePos[oe]=Number.isFinite(be.xStart)?be.xStart:pt,this._linePos[oe+1]=Number.isFinite(be.yStart)?be.yStart:lt,this._linePos[oe+2]=Number.isFinite(be.zStart)?be.zStart:bt,this._linePos[oe+3]=Number.isFinite(be.xEnd)?be.xEnd:pt,this._linePos[oe+4]=Number.isFinite(be.yEnd)?be.yEnd:lt,this._linePos[oe+5]=Number.isFinite(be.zEnd)?be.zEnd:bt,this._lineCol[oe]=X,this._lineCol[oe+1]=Y,this._lineCol[oe+2]=V,this._lineCol[oe+3]=X,this._lineCol[oe+4]=Y,this._lineCol[oe+5]=V,this._lineThickness[xe]=Number.isFinite(be.thickness)?Math.max(0,be.thickness):1,this._lineAlpha[xe]=U,xe++},Pe=o.length/Math.max(1e-6,u),De=M=>{const N=Math.floor(M*Pe);return Math.max(0,Math.min(l-1,N))};let ke=g;for(let M=0;M<j;M++){const N=M===j-1?b:Math.min(b,ke*Ee),k=Math.sqrt(Math.max(g,ke)*Math.max(g,N)),Z=De(ke),le=De(N);if(le<Z){ke=N;continue}let B=0,me=0,ge=0,Xe=0,Ze=0,nt=0,at=0,He=0,ut=0,lt=0,pt=0;for(let be=Z;be<=le;be++){const Dt=o[be],qt=Re&&be<Re.length?jt(Re[be],y,v):Dt/255;ge+=qt,Ct&&(nt+=qt),Ke&&ot&&be<ot.length&&(at+=jt(ot[be],-Math.PI,Math.PI)),Je&&Oe&&be<Oe.length&&(He+=jt(Oe[be],x,R)),Ie&&Be&&be<Be.length&&(ut+=jt(Be[be],w,T)),ct&&dt&&be<dt.length&&(lt+=jt(dt[be],A,C)),Le&&Ye&&be<Ye.length&&(pt+=jt(Ye[be]/3,0,1));const an=ve?e.getBinPan(be):e.pan??0,E=Math.max(1,Dt);Xe+=an*E,Ze+=E,Dt>me&&(me=Dt),B++}if(B<=0||me<=1)continue;const bt=ge/B,Et=bt*p;if($e({hz:k,byte:me,energy:Et,binPan:Ze>0?Xe/Ze:0,binRMSEnergy:Ge(bt),binMagnitude:Ct?nt/B:void 0,binPhase:Ke?at/B:void 0,binFlux:Je?He/B:void 0,binPhaseDeviation:Ie?ut/B:void 0,binAttackTime:ct?lt/B:void 0,binEnvelope:Le?pt/B:void 0}),he({hz:k,energy:Et,binPan:Ze>0?Xe/Ze:0,binRMSEnergy:Ge(bt),binMagnitude:Ct?nt/B:void 0,binPhase:Ke?at/B:void 0,binFlux:Je?He/B:void 0,binPhaseDeviation:Ie?ut/B:void 0,binAttackTime:ct?lt/B:void 0,binEnvelope:Le?pt/B:void 0}),ke=N,pe>=this._N)break}d===1?(this._paintCount=pe,this._visibleCount=this._paintCount,this._geo.setDrawRange(0,this._paintCount),this._lineVisibleCount=xe,this._lineGeo.setDrawRange(0,this._lineVisibleCount*2),this._pruneArchive(t,ae)):(this._paintCount=0,this._visibleCount=pe,this._geo.setDrawRange(0,pe),this._lineVisibleCount=xe,this._lineGeo.setDrawRange(0,xe*2)),t.ruleEngineEnabled!==!1&&this._compiledRules.livingRuleCount>0&&this._visibleCount>0&&this.applyLivingRulesToRange({params:t,inputs:this._buildRuleInputs(e,{...ce,time:ae,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ee})},0,this._visibleCount),t.ruleEngineEnabled!==!1&&this._compiledRules.backgroundRuleCount>0&&this.applyBackgroundRules({params:t,inputs:this._buildRuleInputs(e,{...ce,time:ae,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ee})}),t.ruleEngineEnabled!==!1&&this._compiledRules.cameraRuleCount>0?this.applyCameraRules({params:t,inputs:this._buildRuleInputs(e,{...ce,time:ae,deltaTime:s,canvasWidthPx:i,canvasHeightPx:r,audioLengthSec:ee})},t.cameraState||null):this._cameraOutput={x:null,y:null,z:null,zoom:null,targetX:null,targetY:null,targetZ:null,angleOfView:null},this._aPos.needsUpdate=!0,this._aCol.needsUpdate=!0,this._aSz.needsUpdate=!0,this._aAlpha.needsUpdate=!0,this._aShape.needsUpdate=!0,this._aLinePos.needsUpdate=!0,this._aLineCol.needsUpdate=!0}setBlendMode(e){this._mat.blending=e,this._mat.needsUpdate=!0,this._lineMat.blending=e,this._lineMat.needsUpdate=!0}getVisibleCount(){return this._visibleCount}getLineVisibleCount(){return this._lineVisibleCount}rescale(e,t){for(let i=0;i<this._N;i++)this._pos[i*3]*=e,this._pos[i*3+1]*=t;for(let i=0;i<this._N;i++){const r=i*6;this._linePos[r]*=e,this._linePos[r+1]*=t,this._linePos[r+3]*=e,this._linePos[r+4]*=t}this._aPos.needsUpdate=!0,this._aLinePos.needsUpdate=!0}dispose(){this._mesh.geometry.dispose(),this._mat.dispose(),this._lineMesh.geometry.dispose(),this._lineMat.dispose()}}function J_(){return window.AudioContext||window.webkitAudioContext}async function Q_(n){if(!n)throw new Error("No file provided for decoding.");const e=J_();if(!e)throw new Error("Web Audio API is not supported in this browser.");const t=new e;try{const i=await n.arrayBuffer(),r=await t.decodeAudioData(i.slice(0));if(!r||!Number.isFinite(r.duration)||r.duration<=0)throw new Error("Audio decode produced no playable data.");return n}finally{try{await t.close()}catch{}}}const fu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M12.75 12.508L21.25 9.108V14.7609C20.7449 14.4375 20.1443 14.25 19.5 14.25C17.7051 14.25 16.25 15.7051 16.25 17.5C16.25 19.2949 17.7051 20.75 19.5 20.75C21.2949 20.75 22.75 19.2949 22.75 17.5C22.75 17.5 22.75 17.5 22.75 17.5L22.75 7.94625C22.75 6.80342 22.75 5.84496 22.6696 5.08131C22.6582 4.97339 22.6448 4.86609 22.63 4.76597C22.5525 4.24426 22.4156 3.75757 22.1514 3.35115C22.0193 3.14794 21.8553 2.96481 21.6511 2.80739C21.6128 2.77788 21.573 2.74927 21.5319 2.7216L21.5236 2.71608C20.8164 2.2454 20.0213 2.27906 19.2023 2.48777C18.4102 2.68961 17.4282 3.10065 16.224 3.60469L14.13 4.48115C13.5655 4.71737 13.0873 4.91751 12.712 5.1248C12.3126 5.34535 11.9686 5.60548 11.7106 5.99311C11.4527 6.38075 11.3455 6.7985 11.2963 7.25204C11.25 7.67831 11.25 8.19671 11.25 8.80858V16.7609C10.7448 16.4375 10.1443 16.25 9.5 16.25C7.70507 16.25 6.25 17.7051 6.25 19.5C6.25 21.2949 7.70507 22.75 9.5 22.75C11.2949 22.75 12.75 21.2949 12.75 19.5C12.75 19.5 12.75 19.5 12.75 19.5L12.75 12.508Z" fill="#1C274C"/>\r
<path d="M7.75 2C7.75 1.58579 7.41421 1.25 7 1.25C6.58579 1.25 6.25 1.58579 6.25 2V7.76091C5.74485 7.4375 5.14432 7.25 4.5 7.25C2.70507 7.25 1.25 8.70507 1.25 10.5C1.25 12.2949 2.70507 13.75 4.5 13.75C6.29493 13.75 7.75 12.2949 7.75 10.5V5.0045C8.44852 5.50913 9.27955 5.75 10 5.75C10.4142 5.75 10.75 5.41421 10.75 5C10.75 4.58579 10.4142 4.25 10 4.25C9.54565 4.25 8.9663 4.07389 8.51159 3.69837C8.0784 3.34061 7.75 2.79785 7.75 2Z" fill="#1C274C"/>\r
</svg>`,mu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z" fill="#1C274C"/>\r
</svg>`,ex=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z" fill="#1C274C"/>\r
<path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z" fill="#1C274C"/>\r
</svg>`,gu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" fill="#1C274C"/>\r
</svg>`,tx=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M21.9998 17.5737L21.9998 6.42632C21.9998 4.57895 20.3991 3.41122 19.0966 4.30838L13 8.76844L13 7.12303C13 5.50658 11.5327 4.48482 10.3388 5.26983L2.92136 10.1468C1.69288 10.9545 1.69288 13.0455 2.92135 13.8532L10.3388 18.7302C11.5327 19.5152 13 18.4934 13 16.877V15.2316L19.0966 19.6916C20.3991 20.5888 21.9998 19.4211 21.9998 17.5737Z" fill="#1C274C"/>\r
</svg>`,nx=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M2 17.5737L2 6.42632C2 4.57895 3.60064 3.41122 4.90312 4.30838L10.9998 8.76844L10.9998 7.12303C10.9998 5.50658 12.467 4.48482 13.661 5.26983L21.0784 10.1468C22.3069 10.9545 22.3069 13.0455 21.0784 13.8532L13.661 18.7302C12.467 19.5152 10.9998 18.4934 10.9998 16.877V15.2316L4.90313 19.6916C3.60065 20.5888 2 19.4211 2 17.5737Z" fill="#1C274C"/>\r
</svg>`,vu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.5V11.5C2 8.21252 2 6.56878 2.90796 5.46243C3.07418 5.25989 3.25989 5.07418 3.46243 4.90796C4.56878 4 6.21252 4 9.5 4C12.7875 4 14.4312 4 15.5376 4.90796C15.7401 5.07418 15.9258 5.25989 16.092 5.46243C16.7936 6.3173 16.9531 7.49303 16.9893 9.50002L17.6584 9.17082C19.6042 8.19788 20.5772 7.7114 21.2886 8.15107C22 8.59075 22 9.67853 22 11.8541V12.1459C22 14.3215 22 15.4093 21.2886 15.8489C20.5772 16.2886 19.6042 15.8021 17.6584 14.8292L16.9893 14.5C16.9531 16.507 16.7936 17.6827 16.092 18.5376C15.9258 18.7401 15.7401 18.9258 15.5376 19.092C14.4312 20 12.7875 20 9.5 20C6.21252 20 4.56878 20 3.46243 19.092C3.25989 18.9258 3.07418 18.7401 2.90796 18.5376C2 17.4312 2 15.7875 2 12.5ZM13.5607 9.56066C14.1464 8.97487 14.1464 8.02513 13.5607 7.43934C12.9749 6.85355 12.0251 6.85355 11.4393 7.43934C10.8536 8.02513 10.8536 8.97487 11.4393 9.56066C12.0251 10.1464 12.9749 10.1464 13.5607 9.56066Z" fill="#1C274C"/>\r
</svg>`,bu=`<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->\r
<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\r
<path d="M6 4.5C6 3.56538 6 3.09808 6.20096 2.75C6.33261 2.52197 6.52197 2.33261 6.75 2.20096C7.09808 2 7.56538 2 8.5 2H15.5C16.4346 2 16.9019 2 17.25 2.20096C17.478 2.33261 17.6674 2.52197 17.799 2.75C18 3.09808 18 3.56538 18 4.5C18 5.43462 18 5.90192 17.799 6.25C17.6674 6.47803 17.478 6.66739 17.25 6.79904C16.9019 7 16.4346 7 15.5 7H8.5C7.56538 7 7.09808 7 6.75 6.79904C6.52197 6.66739 6.33261 6.47803 6.20096 6.25C6 5.90192 6 5.43462 6 4.5Z" fill="#1C274C"/>\r
<path d="M5.00214 3.93909C4.84746 4.07647 4.75 4.27687 4.75 4.50002C4.75 4.72318 4.84746 4.92357 5.00214 5.06095C4.99998 4.89619 4.99999 4.72205 5 4.54025V4.4598C4.99999 4.278 4.99998 4.10385 5.00214 3.93909Z" fill="#1C274C"/>\r
<path d="M10 16V20C10 20.9428 10 21.4142 10.2929 21.7071C10.5858 22 11.0572 22 12 22C12.9428 22 13.4142 22 13.7071 21.7071C14 21.4142 14 20.9428 14 20V16C14 15.0572 14 14.5858 13.7071 14.2929C13.4142 14 12.9428 14 12 14C11.0572 14 10.5858 14 10.2929 14.2929C10 14.5858 10 15.0572 10 16Z" fill="#1C274C"/>\r
<path d="M18.9944 5.25H19.0453C19.4999 5.25 19.8051 5.25037 20.0416 5.26579C20.2718 5.2808 20.3843 5.30776 20.4583 5.3369C20.781 5.46395 21.0364 5.71937 21.1635 6.04208C21.1926 6.11609 21.2196 6.22858 21.2346 6.45878C21.25 6.6953 21.2504 7.00044 21.2504 7.4551C21.2504 8.29243 21.2398 8.52185 21.179 8.69392C21.0747 8.98918 20.8634 9.23455 20.5869 9.38148C20.4257 9.4671 20.2004 9.5116 19.3724 9.63581L15.249 10.2543C14.4763 10.3702 13.8277 10.4675 13.3152 10.6116C12.7721 10.7643 12.2916 10.9923 11.9166 11.4278C11.5334 11.8727 11.3753 12.4055 11.3071 13.0062C11.5113 12.9999 11.727 13 11.9458 13H12.0546C12.3196 13 12.5799 12.9999 12.8208 13.011C12.8708 12.6902 12.9482 12.5286 13.0532 12.4067C13.1626 12.2796 13.3307 12.1654 13.7212 12.0556C14.1321 11.94 14.6865 11.8555 15.5182 11.7307L19.714 11.1014C20.3648 11.0044 20.8716 10.9288 21.2907 10.7061C21.8991 10.3829 22.3639 9.84304 22.5934 9.19346C22.7514 8.74599 22.751 8.23353 22.7504 7.57559L22.7504 7.43098C22.7504 7.00661 22.7504 6.65233 22.7314 6.3612C22.7116 6.05823 22.6691 5.77171 22.5592 5.49258C22.2797 4.78261 21.7177 4.22069 21.0078 3.94117C20.7286 3.83128 20.4421 3.78872 20.1392 3.76897C19.848 3.74999 19.4937 3.74999 19.0694 3.75H18.9944C19.0002 3.96867 19.0002 4.20681 19.0002 4.45976V4.54024C19.0002 4.7932 19.0002 5.03133 18.9944 5.25Z" fill="#1C274C"/>\r
</svg>`;function or(n){if(!isFinite(n)||n<0)return"–:––";const e=Math.floor(n/60),t=String(Math.floor(n%60)).padStart(2,"0");return`${e}:${t}`}function Lt(n,e,t={}){const i=document.createElement(n);e&&(i.className=e);for(const[r,a]of Object.entries(t))r==="text"?i.textContent=a:r==="html"?i.innerHTML=a:i.setAttribute(r,a);return i}function Cn(n,e,t){!n||!e||(n.innerHTML="",n.append(Lt("span","audio-player__icon",{html:e})),t&&n.setAttribute("aria-label",t))}function ix(n){if(!n){console.warn("[AudioPlayer] No container element.");const j=new Audio;return j.crossOrigin="anonymous",{audioEl:j,getIsPlaying:()=>!1}}const e=new Audio;e.crossOrigin="anonymous";let t=!1,i=!1;const r=Lt("button","audio-player__collapse-btn",{"aria-label":"Collapse audio player",title:"Collapse player"}),a=document.getElementById("app");function s(j){r.classList.toggle("audio-player__collapse-btn--icon",j),j?(Cn(r,fu,"Expand player"),r.title="Expand player"):(r.textContent="«",r.setAttribute("aria-label","Collapse audio player"),r.title="Collapse player"),a&&a.classList.toggle("audio-player-collapsed",j)}s(!1);const o=Lt("div","audio-player__body"),l=Lt("div","audio-player__file-row"),c=Lt("input","",{type:"file",accept:"audio/*",id:"audio-file-input"});c.style.display="none";const u=Lt("label","audio-player__file-label",{for:"audio-file-input",title:"Open audio file"});Cn(u,fu,"Open audio file");const d=Lt("span","audio-player__file-name",{text:"No file loaded"});l.append(c,u);const p=Lt("div","audio-player__transport"),h=Lt("button","audio-player__btn audio-player__btn--play",{id:"btn-play-pause","aria-label":"Play",disabled:"true"});Cn(h,mu,"Play");const g=Lt("button","audio-player__btn",{id:"btn-stop","aria-label":"Stop",disabled:"true",title:"Stop (return to start)"});Cn(g,gu,"Stop");const b=Lt("button","audio-player__btn",{id:"btn-back","aria-label":"−10 seconds",disabled:"true",title:"−10 s"});Cn(b,tx,"−10 seconds");const m=Lt("button","audio-player__btn",{id:"btn-fwd","aria-label":"+10 seconds",disabled:"true",title:"+10 s"});Cn(m,nx,"+10 seconds");const f=Lt("button","audio-player__btn",{id:"btn-png","aria-label":"Save PNG",title:"Save canvas as PNG"});Cn(f,Rd,"Save PNG");const y=Lt("button","audio-player__btn",{id:"btn-record","aria-label":"Record video",disabled:"true",title:"Record canvas and audio"});Cn(y,vu,"Record video");const v=Lt("button","audio-player__btn",{id:"btn-paint-all","aria-label":"Paint all",disabled:"true",title:"Run through full audio and stop"});Cn(v,bu,"Paint all");const x=Lt("div","audio-player__speed-wrap"),R=Lt("input","audio-player__speed-input",{type:"number",min:"0.1",max:"16",step:"0.1",value:"1","aria-label":"Playback speed multiplier",title:"Playback speed multiplier (0.1 to 16)"}),w=Lt("span","audio-player__speed-suffix",{text:"x"});x.append(R,w),p.append(b,h,g,m,f,y,v,x);const T=Lt("div","audio-player__progress-row"),A=Lt("input","audio-player__seek",{type:"range",min:"0",max:"100",step:"0.01",value:"0",id:"audio-seek","aria-label":"Seek position"});function C(j){A.style.background=`linear-gradient(90deg, var(--color-accent) ${j}%, var(--color-border) ${j}%)`}C(0);const _=Lt("div","audio-player__timestamp",{id:"audio-time",text:"–:–– / –:––","aria-live":"polite"}),L=Lt("div","audio-player__progress-meta");L.append(d,_),T.append(A,L),o.append(l,p,T),n.append(r,o);function I(j){Cn(h,j?ex:mu,j?"Pause":"Play")}function G(j){Cn(y,j?gu:vu,j?"Stop recording":"Record video")}function q(){Cn(v,bu,"Paint all")}function $(j,te=""){c.disabled=j,h.disabled=j||!e.src,g.disabled=j||!e.src,b.disabled=j||!e.src,m.disabled=j||!e.src,y.disabled=j||!e.src,v.disabled=j||!e.src,R.disabled=j||!e.src,j&&te&&(d.textContent=te)}function J(j){const te=Math.max(.1,Math.min(16,Number(j)));Number.isFinite(te)&&(e.playbackRate=te,R.value=String(Number(te.toFixed(2))),n.dispatchEvent(new CustomEvent("player:playbackrate",{detail:{rate:te},bubbles:!0})))}function ue(j,te=(j==null?void 0:j.name)||"Audio loaded"){j&&(e.src.startsWith("blob:")&&URL.revokeObjectURL(e.src),e.src=URL.createObjectURL(j),e.load(),d.textContent=te,t=!1,I(!1),h.classList.remove("audio-player__btn--active"),A.value="0",C(0),_.textContent="0:00 / –:––",W(),n.dispatchEvent(new CustomEvent("player:fileloaded",{detail:{file:j,audioEl:e},bubbles:!0})))}function W(){h.disabled=!1,g.disabled=!1,b.disabled=!1,m.disabled=!1,y.disabled=!1,v.disabled=!1,R.disabled=!1}c.addEventListener("change",async j=>{const te=j.target.files[0];if(te){$(!0,`Loading ${te.name}...`);try{d.textContent=`Decoding ${te.name}...`;const Ee=await Q_(te);ue(Ee,Ee.name)}catch(Ee){console.warn("[AudioPlayer] decode failed:",Ee),d.textContent="Decode failed. Try another file."}finally{$(!1),c.value=""}}}),h.addEventListener("click",async()=>{if(n.dispatchEvent(new CustomEvent("player:playpause",{detail:{audioEl:e},bubbles:!0})),t)e.pause();else try{await e.play()}catch(j){console.warn("[AudioPlayer] play() failed:",j.message)}}),e.addEventListener("play",()=>{t=!0,I(!0),h.classList.add("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:play",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("pause",()=>{t=!1,I(!1),h.classList.remove("audio-player__btn--active"),n.dispatchEvent(new CustomEvent("player:pause",{detail:{audioEl:e},bubbles:!0}))}),e.addEventListener("ended",()=>{t=!1,I(!1),h.classList.remove("audio-player__btn--active")}),g.addEventListener("click",()=>{e.pause(),e.currentTime=0,A.value="0",C(0),_.textContent=`0:00 / ${or(e.duration)}`,n.dispatchEvent(new CustomEvent("player:stop",{detail:{audioEl:e},bubbles:!0}))}),b.addEventListener("click",()=>{e.currentTime=Math.max(0,e.currentTime-10)}),m.addEventListener("click",()=>{e.currentTime=Math.min(e.duration||0,e.currentTime+10)}),f.addEventListener("click",()=>{n.dispatchEvent(new CustomEvent("player:savepng",{detail:{audioEl:e},bubbles:!0}))}),y.addEventListener("click",()=>{y.disabled||n.dispatchEvent(new CustomEvent("player:recordvideo-toggle",{detail:{audioEl:e},bubbles:!0}))}),v.addEventListener("click",()=>{v.disabled||n.dispatchEvent(new CustomEvent("player:paintall",{detail:{audioEl:e},bubbles:!0}))}),n.addEventListener("player:paintall-state",j=>{var Ee;const te=!!((Ee=j==null?void 0:j.detail)!=null&&Ee.running);v.disabled=te||!e.src,y.disabled=te||!e.src,R.disabled=te||!e.src,q(),v.classList.toggle("audio-player__btn--active",te)}),n.addEventListener("player:recordvideo-state",j=>{var Ee;const te=!!((Ee=j==null?void 0:j.detail)!=null&&Ee.running);G(te),y.classList.toggle("audio-player__btn--active",te),v.disabled=te||!e.src,!te&&!v.disabled&&e.src&&(y.disabled=!1),R.disabled=te||!e.src}),R.addEventListener("keydown",j=>{j.key==="Enter"&&(j.preventDefault(),J(R.value),R.blur())});let de=!1;return A.addEventListener("mousedown",()=>{de=!0}),A.addEventListener("touchstart",()=>{de=!0},{passive:!0}),A.addEventListener("input",()=>{const j=parseFloat(A.value);C(j),e.duration&&(_.textContent=`${or(e.duration*j/100)} / ${or(e.duration)}`)}),A.addEventListener("change",()=>{e.duration&&(e.currentTime=parseFloat(A.value)/100*e.duration),de=!1}),e.addEventListener("timeupdate",()=>{if(de)return;const j=e.currentTime,te=e.duration;if(!isFinite(te)||te===0)return;const Ee=j/te*100;A.value=String(Ee),C(Ee),_.textContent=`${or(j)} / ${or(te)}`}),e.addEventListener("loadedmetadata",()=>{_.textContent=`0:00 / ${or(e.duration)}`,n.dispatchEvent(new CustomEvent("player:metadata",{detail:{duration:e.duration},bubbles:!0}))}),r.addEventListener("click",()=>{i=!i,n.classList.toggle("audio-player--collapsed",i),s(i)}),{audioEl:e,getIsPlaying:()=>t}}function io(n,e){const t=document.createElement(n);return e&&(t.className=e),t}function rx({wrapper:n,column:e,onResize:t}){if(!n||!e){console.warn("[CanvasResizer] wrapper or column element missing.");return}let i=n.clientWidth||e.clientWidth,r=n.clientHeight||e.clientHeight;const a=io("div","canvas-wrapper__resize-handle-right"),s=io("div","canvas-wrapper__resize-handle-bottom"),o=io("div","canvas-wrapper__resize-handle-corner");n.append(a,s,o);let l=null;function c(p,h,g){p.preventDefault();const b=p.touches?p.touches[0].clientX:p.clientX,m=p.touches?p.touches[0].clientY:p.clientY;l={type:h,startX:b,startY:m,startW:n.clientWidth,startH:n.clientHeight,handle:g},g.classList.add("dragging"),document.body.style.cursor=h==="right"?"ew-resize":h==="bottom"?"ns-resize":"nwse-resize",document.body.style.userSelect="none"}function u(p){if(!l)return;const h=p.touches?p.touches[0].clientX:p.clientX,g=p.touches?p.touches[0].clientY:p.clientY,b=h-l.startX,m=g-l.startY,f=160,y=120,v=e.getBoundingClientRect();let x=l.startW,R=l.startH;(l.type==="right"||l.type==="corner")&&(x=Math.max(f,Math.min(l.startW+b,v.width-4))),(l.type==="bottom"||l.type==="corner")&&(R=Math.max(y,Math.min(l.startH+m,window.innerHeight-4)));const w=i>0?x/i:1,T=r>0?R/r:1;i=x,r=R,n.style.width=`${x}px`,n.style.height=`${R}px`,t(x,R,w,T)}function d(){l&&(l.handle.classList.remove("dragging"),l=null,document.body.style.cursor="",document.body.style.userSelect="")}return a.addEventListener("mousedown",p=>c(p,"right",a)),s.addEventListener("mousedown",p=>c(p,"bottom",s)),o.addEventListener("mousedown",p=>c(p,"corner",o)),a.addEventListener("touchstart",p=>c(p,"right",a),{passive:!1}),s.addEventListener("touchstart",p=>c(p,"bottom",s),{passive:!1}),o.addEventListener("touchstart",p=>c(p,"corner",o),{passive:!1}),document.addEventListener("mousemove",u),document.addEventListener("mouseup",d),document.addEventListener("touchmove",u,{passive:!1}),document.addEventListener("touchend",d),window.addEventListener("resize",()=>{if(!n.style.width){const p=e.clientWidth,h=e.clientHeight,g=i>0?p/i:1,b=r>0?h/r:1;i=p,r=h,t(p,h,g,b)}}),{setSize(p,h){const g=i>0?p/i:1,b=r>0?h/r:1;i=p,r=h,n.style.width=`${p}px`,n.style.height=`${h}px`,t(p,h,g,b)},getSize(){return{w:i,h:r}}}}const zd=1,dr=".ssp.json";function ax({params:n,presetName:e="",presetLibrary:t=[],projectName:i=""}){return{schemaVersion:zd,createdAt:new Date().toISOString(),updatedAt:new Date().toISOString(),projectName:String(i||""),presetName:String(e||""),params:n&&typeof n=="object"?n:{},presetLibrary:Array.isArray(t)?t:[]}}function _u(n){const e=JSON.parse(String(n||"{}"));if(!e||typeof e!="object")throw new Error("Project file is invalid.");if(!e.params||typeof e.params!="object")throw new Error("Project file has no params object.");return{schemaVersion:Number.isFinite(Number(e.schemaVersion))?Number(e.schemaVersion):zd,createdAt:e.createdAt||null,updatedAt:e.updatedAt||null,projectName:String(e.projectName||""),presetName:String(e.presetName||""),params:e.params,presetLibrary:Array.isArray(e.presetLibrary)?e.presetLibrary:[]}}function sx(n,e="seesound-project.json"){const t=new Blob([JSON.stringify(n,null,2)],{type:"application/json"}),i=URL.createObjectURL(t),r=document.createElement("a");r.href=i,r.download=e,document.body.appendChild(r),r.click(),r.remove(),URL.revokeObjectURL(i)}function Zn(n){return Math.max(0,Math.min(1,Number.isFinite(n)?n:0))}function Nl(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2;let r=0,a=0;for(let s=0;s<t;s++){const o=Math.max(0,n[s]/255),l=s/Math.max(1,t-1)*i;r+=l*o,a+=o}return a<=1e-9?0:r/a}function ox(n,e){if(!n||!e)return 0;const t=Math.min(n.length,e.length);if(t<=0)return 0;let i=0;for(let r=0;r<t;r++){const a=Math.max(0,n[r]/255),s=Math.max(0,e[r]/255),o=a-s;o>0&&(i+=o)}return Zn(i/t)}function lx(n){if(!n||!n.length)return 0;const e=1e-12;let t=0,i=0;for(let s=0;s<n.length;s++){const o=Math.max(0,n[s]/255),l=o*o+e;t+=Math.log(l),i+=l}if(i<=0)return 0;const r=Math.exp(t/n.length),a=i/n.length;return Zn(r/Math.max(a,e))}function cx(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=8,a=[];for(let u=1;u<t-1;u++){const d=n[u];if(!(d<r)&&d>=n[u-1]&&d>=n[u+1]){const p=u/Math.max(1,t-1)*i;a.push({i:u,hz:p,mag:d/255})}}if(a.length<2)return 0;a.sort((u,d)=>d.mag-u.mag);const s=a.slice(0,6),o=Math.max(20,s[0].hz);let l=0,c=0;for(let u=1;u<s.length;u++){const d=s[u],h=Math.max(1,Math.round(d.hz/o))*o,g=Math.abs(d.hz-h)/Math.max(h,1e-9);l+=g*d.mag,c+=d.mag}return c<=1e-9?0:Zn(l/c*2)}function ux(n){if(!n||!n.length)return 0;let e=0;for(let t=0;t<n.length;t++)n[t]>e&&(e=n[t]);return Zn(e/255)}function dx(n){if(!n||n.length<2)return 0;let e=0,t=n[0]-128>=0?1:-1;for(let i=1;i<n.length;i++){const r=n[i]-128>=0?1:-1;r!==t&&e++,t=r}return Zn(e/Math.max(1,n.length-1))}function px(n,e,t=.85){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,a=Math.max(0,Math.min(1,Number.isFinite(t)?t:.85));let s=0;for(let c=0;c<i;c++)s+=Math.max(0,n[c]/255);if(s<=1e-9)return 0;const o=s*a;let l=0;for(let c=0;c<i;c++)if(l+=Math.max(0,n[c]/255),l>=o){const u=c/Math.max(1,i-1)*r;return Zn(u/Math.max(1,r))}return 1}function Vd(n,e,t=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const i=n.length,r=e/2,a=Number.isFinite(t)?t:Nl(n,e);let s=0,o=0;for(let c=0;c<i;c++){const u=Math.max(0,n[c]/255),p=c/Math.max(1,i-1)*r-a;o+=p*p*u,s+=u}if(s<=1e-9)return 0;const l=Math.sqrt(o/s);return Zn(l/Math.max(1,r))}function hx(n,e,t=null,i=null){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const r=n.length,a=e/2,s=Number.isFinite(t)?t:Nl(n,e),o=Number.isFinite(i)?Math.max(1e-6,Number(i)*a):Math.max(1e-6,Vd(n,e,s)*a);let l=0,c=0;for(let d=0;d<r;d++){const p=Math.max(0,n[d]/255),g=(d/Math.max(1,r-1)*a-s)/o;c+=g*g*g*p,l+=p}if(l<=1e-9)return 0;const u=c/l;return Zn((u+2)/4)}function fx(n,e){if(!n||!n.length||!Number.isFinite(e)||e<=0)return 0;const t=n.length,i=e/2,r=new Float32Array(12);let a=0;for(let o=1;o<t;o++){const l=Math.max(0,n[o]/255);if(l<=0)continue;const c=o/Math.max(1,t-1)*i;if(c<20)continue;const u=69+12*Math.log2(c/440),d=(Math.round(u)%12+12)%12;r[d]+=l,a+=l}if(a<=1e-9)return 0;let s=0;for(let o=0;o<12;o++)r[o]>s&&(s=r[o]);return Zn(s/a)}function mx(n,e){const t=Math.max(1,(Number.isFinite(e)?e:44100)/2);return Zn((Number.isFinite(n)?n:0)/t)}const Pr=document.getElementById("three-canvas"),oa=document.getElementById("canvas-wrapper"),Yn=document.getElementById("canvas-col"),Pt=new ld({canvas:Pr,antialias:!0});Pt.setPixelRatio(window.devicePixelRatio);Pt.setClearColor(0,1);Pt.autoClear=!0;const jn=new Lh,Ll=250,ha=new Hh(Ll);let cs=!0;ha.userData.excludeFromPng=!0;ha.userData.excludeFromVideo=!0;ha.userData.excludeFromObj=!0;jn.add(ha);const Fl=new qr;let us=!0;function Dl(){const n=new Vh(Ll*2,10,3462041,3621201);return n.material.transparent=!0,n.material.opacity=.16,n.userData.excludeFromPng=!0,n.userData.excludeFromVideo=!0,n.userData.excludeFromObj=!0,n}const gx=Dl(),Hd=Dl();Hd.rotation.x=Math.PI/2;const Gd=Dl();Gd.rotation.z=Math.PI/2;Fl.add(gx,Hd,Gd);jn.add(Fl);function vx(){window.dispatchEvent(new CustomEvent("seesound:origin-sign-state",{detail:{enabled:cs,size:Ll}}))}function bx(){window.dispatchEvent(new CustomEvent("seesound:coordinate-guide-state",{detail:{enabled:us}}))}window.addEventListener("seesound:origin-sign-toggle",n=>{var i;const e=(i=n==null?void 0:n.detail)==null?void 0:i.enabled;$t({originSignEnabled:(typeof e=="boolean"?e:!cs)?1:0})});window.addEventListener("seesound:coordinate-guide-toggle",n=>{var i;const e=(i=n==null?void 0:n.detail)==null?void 0:i.enabled;$t({coordinateGuidesEnabled:(typeof e=="boolean"?e:!us)?1:0})});function Wd(){cs=Number(K.originSignEnabled??1)>=.5,us=Number(K.coordinateGuidesEnabled??1)>=.5,ha.visible=cs,Fl.visible=us,vx(),bx()}Wd();const Gt=new gl(-1,1,1,-1,.001,5e3),Bt=new Tn(55,1,.001,5e3);let Fe=Gt;const gt=new H(0,0,0),Il=new H(0,0,420),xu=Il.length();for(const n of[Gt,Bt])n.position.copy(Il),n.up.set(0,1,0),n.lookAt(gt);const fa=new Nv(Pt),Xd=new Lv(jn,Fe),fr=new Cr(new st(1,1),1.15,.7,.18),Hi=new Iv(jn,Fe,{focus:380,aperture:12e-5,maxblur:.01,width:1,height:1});fa.addPass(Xd);fa.addPass(fr);fa.addPass(Hi);function lr(n,e,t,i){const r=Number(n);return Number.isFinite(r)?Math.max(e,Math.min(t,r)):i}function ro(n,e=!0){if(n==null)return e;if(typeof n=="boolean")return n;const t=Number(n);if(Number.isFinite(t))return t>=.5;const i=String(n).trim().toLowerCase();return i==="on"||i==="true"?!0:i==="off"||i==="false"?!1:e}function qd(){var s;const n=ro(K.postProcessEnabled,!0),e=n&&ro(K.bloomEnabled,!0),t=n&&ro(K.bokehEnabled,!0);fr.enabled=e,fr.strength=lr(K.bloomStrength,0,4,1.15),fr.radius=lr(K.bloomRadius,0,2,.7),fr.threshold=lr(K.bloomThreshold,0,1,.18),Hi.enabled=t;const i=lr(K.bokehFocus,1,5e3,380),r=lr(K.bokehAperture,0,.001,12e-5),a=lr(K.bokehMaxBlur,0,.1,.01);if((s=Hi.materialBokeh)!=null&&s.uniforms){const o=Hi.materialBokeh.uniforms;o.focus&&(o.focus.value=i),o.aperture&&(o.aperture.value=r),o.maxblur&&(o.maxblur.value=a)}}function Ul(){const e=K.cameraProjection==="perspective"?Bt:Gt;e!==Fe&&(e.position.copy(Fe.position),e.quaternion.copy(Fe.quaternion),e.up.copy(Fe.up),e.zoom=Fe.zoom,e.lookAt(gt),e.updateProjectionMatrix(),Fe=e,Xd.camera=e,Hi.camera=e,$n())}const At={radius:420,azimuth:0,elevation:0};function $n(){const n=Fe.position.x-gt.x,e=Fe.position.y-gt.y,t=Fe.position.z-gt.z,i=Math.max(.001,Math.sqrt(n*n+e*e+t*t)||1);At.radius=i,At.azimuth=Math.atan2(n,t),At.elevation=Math.asin(Math.max(-1,Math.min(1,e/i)))}function ds(){const n=Math.cos(At.elevation);Fe.position.set(gt.x+At.radius*n*Math.sin(At.azimuth),gt.y+At.radius*Math.sin(At.elevation),gt.z+At.radius*n*Math.cos(At.azimuth)),Fe.lookAt(gt)}function Yd(n){const e=String(n||"orthoXY");return e==="isometric"?{azimuth:Math.PI/4,elevation:Math.asin(1/Math.sqrt(3))}:e==="fortyFive"?{azimuth:Math.PI/4,elevation:Math.PI/4}:e==="topXZ"?{azimuth:0,elevation:Math.PI/2-.001}:e==="orthoYZ"?{azimuth:Math.PI/2,elevation:0}:{azimuth:0,elevation:0}}function jd(){gt.set(0,0,0);const n=Math.max(1,Pt.domElement.clientWidth||Yn.clientWidth||window.innerWidth),e=Math.max(1,Pt.domElement.clientHeight||Yn.clientHeight||window.innerHeight);kl(n,e);for(const t of[Gt,Bt])t.position.copy(Il),t.up.set(0,1,0),t.rotation.set(0,0,0),t.zoom=1,t.lookAt(gt),t.updateProjectionMatrix();Ul(),Ol(!0),$n()}function Ol(n=!1){const e=String(K.cameraAxoPreset||"orthoXY"),t=n?xu:Math.max(40,Number(At.radius)||xu),{azimuth:i,elevation:r}=Yd(e);At.radius=t,At.azimuth=i,At.elevation=r,ds(),$n()}function $d(){const n=Number(K.cameraPosX),e=Number(K.cameraPosY),t=Number(K.cameraPosZ),i=Number(K.cameraTargetX),r=Number(K.cameraTargetY),a=Number(K.cameraTargetZ),s=Number(K.cameraAngleOfView);Number.isFinite(i)&&(gt.x=i),Number.isFinite(r)&&(gt.y=r),Number.isFinite(a)&&(gt.z=a);const o=l=>{Number.isFinite(n)&&(l.position.x=n),Number.isFinite(e)&&(l.position.y=e),Number.isFinite(t)&&(l.position.z=t),l.lookAt(gt)};o(Gt),o(Bt),Number.isFinite(s)&&(Bt.fov=Math.max(20,Math.min(120,s)),Bt.updateProjectionMatrix()),$n()}$n();const hn={active:!1,button:-1,lastX:0,lastY:0};Pr.addEventListener("contextmenu",n=>n.preventDefault());Pr.addEventListener("mousedown",n=>{n.button!==0&&n.button!==1&&n.button!==2||(hn.active=!0,hn.button=n.button,hn.lastX=n.clientX,hn.lastY=n.clientY,n.preventDefault())});window.addEventListener("mouseup",()=>{hn.active=!1,hn.button=-1});window.addEventListener("mousemove",n=>{if(!hn.active)return;const e=n.clientX-hn.lastX,t=n.clientY-hn.lastY;if(hn.lastX=n.clientX,hn.lastY=n.clientY,hn.button===0)At.azimuth-=e*.006,At.elevation=Math.max(-Math.PI*.49,Math.min(Math.PI*.49,At.elevation-t*.005)),ds();else if(hn.button===1){const i=Math.max(1,Pt.domElement.clientHeight||Yn.clientHeight||window.innerHeight),r=new H,a=new H,s=new H;Fe.updateMatrixWorld();const o=Fe.matrixWorld.elements;r.set(o[0],o[1],o[2]).normalize(),a.set(o[4],o[5],o[6]).normalize();let l=.01;if(Fe.isOrthographicCamera)l=(Fe.top-Fe.bottom)/(Math.max(.01,Fe.zoom)*i);else{const c=Math.max(.001,Fe.position.distanceTo(gt)),u=pl.degToRad(Fe.fov);l=2*Math.tan(u*.5)*c/i,l/=Math.max(.01,Fe.zoom)}s.copy(r).multiplyScalar(-e*l),s.addScaledVector(a,t*l),Fe.position.add(s),gt.add(s),$n()}else if(hn.button===2){const i=-e*.004,r=-t*.004;Fe.rotateOnWorldAxis(new H(0,1,0),i),Fe.rotateX(r)}});Pr.addEventListener("wheel",n=>{if(n.preventDefault(),Fe.isPerspectiveCamera){const e=new H;Fe.getWorldDirection(e);const t=Math.max(2,At.radius*.08),i=(n.deltaY>0?1:-1)*t;Fe.position.addScaledVector(e,i),$n()}else{const e=n.deltaY>0?.92:1.08;Fe.zoom=Math.max(.05,Math.min(64,Fe.zoom*e)),Fe.updateProjectionMatrix()}},{passive:!1});function Zd(n){if(!n)return;let e=!1,t=!1;Number.isFinite(n.x)&&(Fe.position.x=n.x,e=!0),Number.isFinite(n.y)&&(Fe.position.y=n.y,e=!0),Number.isFinite(n.z)&&(Fe.position.z=n.z,e=!0),Number.isFinite(n.targetX)&&(gt.x=n.targetX,t=!0),Number.isFinite(n.targetY)&&(gt.y=n.targetY,t=!0),Number.isFinite(n.targetZ)&&(gt.z=n.targetZ,t=!0),(e||t)&&(Fe.lookAt(gt),$n()),Number.isFinite(n.zoom)&&(Fe.zoom=Math.max(.05,Math.min(64,n.zoom)),Fe.updateProjectionMatrix()),Number.isFinite(n.angleOfView)&&(Bt.fov=Math.max(20,Math.min(120,n.angleOfView)),Bt.updateProjectionMatrix())}function _x(){const n=Rt.getVisibleBounds();if(n.empty){jd();return}const e=1.18,t=Math.max(1,Number(window.devicePixelRatio)||1),i=Pt.domElement.width/t,r=Pt.domElement.height/t,a=Math.max(1,i||Number(K.canvasWidth)||Pt.domElement.clientWidth||Yn.clientWidth||window.innerWidth),s=Math.max(1,r||Number(K.canvasHeight)||Pt.domElement.clientHeight||Yn.clientHeight||window.innerHeight),o=a/s,l=n.size,c=n.center,u=Math.max(1,Math.sqrt(l.x*l.x+l.y*l.y+l.z*l.z)*.5);if(gt.copy(c),Fe.isOrthographicCamera){const{azimuth:d,elevation:p}=Yd(K.cameraAxoPreset);At.azimuth=d,At.elevation=p,At.radius=Math.max(u*2.2,60),ds(),Fe.updateMatrixWorld(!0);const h=Fe.matrixWorld.elements,g=new H(h[0],h[1],h[2]).normalize(),b=new H(h[4],h[5],h[6]).normalize(),m=[new H(n.min.x,n.min.y,n.min.z),new H(n.min.x,n.min.y,n.max.z),new H(n.min.x,n.max.y,n.min.z),new H(n.min.x,n.max.y,n.max.z),new H(n.max.x,n.min.y,n.min.z),new H(n.max.x,n.min.y,n.max.z),new H(n.max.x,n.max.y,n.min.z),new H(n.max.x,n.max.y,n.max.z)];let f=0,y=0;const v=new H;for(const w of m)v.copy(w).sub(c),f=Math.max(f,Math.abs(v.dot(g))),y=Math.max(y,Math.abs(v.dot(b)));const x=Math.max(f,y*o,u*.35),R=Math.max(y,f/Math.max(.001,o),u*.35);Gt.left=-x*e,Gt.right=x*e,Gt.top=R*e,Gt.bottom=-R*e,Gt.zoom=1,Gt.near=-Math.max(5e3,u*6),Gt.far=Math.max(5e3,u*6),Gt.updateProjectionMatrix()}else{Bt.lookAt(c),$n();const d=pl.degToRad(Bt.fov),p=u*e/Math.max(.001,Math.tan(d*.5)),h=2*Math.atan(Math.tan(d*.5)*(Bt.aspect||o)),g=u*e/Math.max(.001,Math.tan(h*.5));At.radius=Math.max(g,p,40),ds(),Bt.near=Math.max(.001,At.radius-u*3),Bt.far=Math.max(Bt.near+1,At.radius+u*6),Bt.updateProjectionMatrix()}$n()}function kl(n,e){var t,i;Gt.left=-n/2,Gt.right=n/2,Gt.top=e/2,Gt.bottom=-e/2,Gt.updateProjectionMatrix(),Bt.aspect=n/Math.max(1,e),Bt.updateProjectionMatrix(),Pt.setSize(n,e,!1),fa.setSize(n,e),fr.setSize(n,e),(i=(t=Hi.materialBokeh)==null?void 0:t.uniforms)!=null&&i.aspect&&(Hi.materialBokeh.uniforms.aspect.value=n/Math.max(1,e))}const xx=Yn.clientWidth||window.innerWidth,yx=Yn.clientHeight||window.innerHeight;kl(xx,yx);Ul();Ol();$d();qd();const Rt=new K_(jn,{maxParticles:K.maxParticles??262144}),qn=Rt.onRulesChanged(K.ruleBlocks??[]);window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:qn}));function Mx(n=null){return new Set([...Array.isArray(n==null?void 0:n.spawnedParticles)?n.spawnedParticles:[],...Array.isArray(n==null?void 0:n.allParticles)?n.allParticles:[],...Array.isArray(n==null?void 0:n.lines)?n.lines:[],...Array.isArray(n==null?void 0:n.background)?n.background:[],...Array.isArray(n==null?void 0:n.camera)?n.camera:[]])}function Bl(n=null){const e=Mx(n),t=new Set(["amplitude","bass","mid","high","peakFreq","pan","time","deltaTime","frequencyHz","normFreq","canvasWidthPx","canvasHeightPx","audioLengthSec"]),i=e.has("binMagnitude")||e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState"),r=e.has("binFlux")||e.has("binEnvelope")||e.has("binEnvelopeState")||e.has("binAttackTime"),a=e.has("binPhaseDeviation"),s=e.has("binEnvelope")||e.has("binEnvelopeState"),o=e.has("binPhase"),l=e.has("binAttackTime"),c=e.has("globalRmsEnergy")||e.has("binRMSEnergy")||e.has("amplitude"),u=e.has("spectralCentroid"),d=e.has("spectralFlux"),p=e.has("spectralFlatness"),h=e.has("inharmonicity"),g=e.has("peakAmplitude"),b=e.has("zeroCrossingRate"),m=e.has("spectralRolloff"),f=e.has("spectralSpread"),y=e.has("spectralSkewness"),v=e.has("chromagram"),x=new Set(t);return c&&x.add("globalRmsEnergy"),u&&x.add("spectralCentroid"),d&&x.add("spectralFlux"),p&&x.add("spectralFlatness"),h&&x.add("inharmonicity"),g&&x.add("peakAmplitude"),b&&x.add("zeroCrossingRate"),m&&x.add("spectralRolloff"),f&&x.add("spectralSpread"),y&&x.add("spectralSkewness"),v&&x.add("chromagram"),i&&x.add("binMagnitude"),r&&x.add("binFlux"),a&&x.add("binPhaseDeviation"),o&&x.add("binPhase"),s&&x.add("binEnvelope"),s&&x.add("binEnvelopeState"),l&&x.add("binAttackTime"),c&&x.add("binRMSEnergy"),{used:e,calculatedInputs:x,worklet:{enabled:i||r||a||s||l||o,needMagnitude:i,needFlux:r,needPhaseDeviation:a,needPhase:o,needEnvelope:s,needAttackTime:l},engine:{needRms:c,needSpectralCentroid:u,needGlobalSpectralFlux:d,needSpectralFlatness:p,needInharmonicity:h,needPeakAmplitude:g,needZeroCrossingRate:b,needSpectralRolloff:m,needSpectralSpread:f,needSpectralSkewness:y,needChromagram:v},backend:{calc_fft:!0,calc_magnitude:i||r||u||p||d,calc_magnitude_dbfs:i||c,calc_phase:a||o,calc_phase_deviation:a,calc_local_spectral_flux:r||s,calc_envelope_state:s,calc_rms_energy:c,calc_peak_amplitude:g,calc_zero_crossing_rate:b,calc_spectral_centroid:u,calc_global_spectral_flux:d,calc_spectral_flatness:p,calc_spectral_rolloff:m,calc_spectral_spread:f,calc_spectral_skewness:y,calc_spectral_kurtosis:e.has("spectralKurtosis"),calc_mfcc:e.has("mfcc"),calc_chromagram:v}}}function Sx(n={}){const e=t=>Math.pow(10,Number(t)/20);return{scalar:{center_frequency_hz:{min_value:Number(n.freqNormMin??40),max_value:Number(n.freqNormMax??12e3)},magnitude_dbfs:{min_value:Number(n.binMagnitudeNormMin??-70),max_value:Number(n.binMagnitudeNormMax??0)},magnitude_linear:{min_value:e(Number(n.binMagnitudeNormMin??-70)),max_value:e(Number(n.binMagnitudeNormMax??0))},phase_deviation:{min_value:Number(n.binPhaseDeviationNormMin??0),max_value:Number(n.binPhaseDeviationNormMax??Math.PI)},spectral_flux:{min_value:Number(n.binFluxNormMin??0),max_value:Number(n.binFluxNormMax??.5)},rms_energy:{min_value:e(Number(n.globalRmsNormMin??-60)),max_value:e(Number(n.globalRmsNormMax??0))},spectral_centroid_hz:{min_value:Number(n.spectralCentroidNormMin??150),max_value:Number(n.spectralCentroidNormMax??8e3)},global_spectral_flux:{min_value:Number(n.globalSpectralFluxNormMin??0),max_value:Number(n.globalSpectralFluxNormMax??100)},spectral_flatness:{min_value:Number(n.spectralFlatnessNormMin??0),max_value:Number(n.spectralFlatnessNormMax??1)}},vector:{}}}function Bn(n,e,t){const i=Number(e),r=Number(t),a=Number(n);return!Number.isFinite(a)||!Number.isFinite(i)||!Number.isFinite(r)||r<=i?0:Math.max(0,Math.min(1,(a-i)/(r-i)))}const ao=Object.freeze([512,1024,2048,4096,8192,16384]);function ps(n){const e=Number(n);if(!Number.isFinite(e))return 2048;let t=ao[0],i=Math.abs(e-t);for(let r=1;r<ao.length;r++){const a=ao[r],s=Math.abs(e-a);s<i&&(t=a,i=s)}return t}function el(n){const e=Math.floor(Number(n));return Number.isFinite(e)?Math.max(1,Math.min(64,e)):10}function wx(n={},e=null){const t=Bl(e),i=ps(n.fftSize);return{sample_rate:44100,fft_size:i,hop_size:Math.max(64,Math.floor(i/4)),rolloff_percent:.85,n_mfcc:13,...t.backend,normalize_features:!0,normalization_bounds:Sx(n)}}function zl(n=null){const e=Bl(n);window.dispatchEvent(new CustomEvent("seesound:calculated-rule-inputs",{detail:{calculatedInputs:[...e.calculatedInputs]}}))}zl(qn==null?void 0:qn.requiredInputsByTarget);window.addEventListener("seesound:particle-size-apply-all",n=>{var i,r;const e=Number((i=n==null?void 0:n.detail)==null?void 0:i.oldDefaultSize),t=Number((r=n==null?void 0:n.detail)==null?void 0:r.newDefaultSize);!Number.isFinite(e)||!Number.isFinite(t)||e<=0||t<=0||Rt.scaleAllParticleSizes(t/e)});class Kd{constructor(){this.ctx=null,this.analyser=null,this.source=null,this.streamSource=null,this.streamNode=null,this.audioEl=null,this.splitter=null,this.analyserL=null,this.analyserR=null,this.binAnalysisNode=null,this._workletConnected=!1,this._workletReady=!1,this._workletLoadPromise=null,this._workletConfig={enabled:!1,needMagnitude:!1,needFlux:!1,needPhaseDeviation:!1,needPhase:!1,needEnvelope:!1,needAttackTime:!1,fluxWindowFrames:el(K.fluxWindowFrames),attackThreshold:5e-4,sustainFluxEps:.004,sustainMagThreshold:.08,decayThreshold:.008},this._calcUsage={needRms:!0,needSpectralCentroid:!1,needGlobalSpectralFlux:!1,needSpectralFlatness:!1,needInharmonicity:!1,needPeakAmplitude:!1,needZeroCrossingRate:!1,needSpectralRolloff:!1,needSpectralSpread:!1,needSpectralSkewness:!1,needChromagram:!1},this.FFT_SIZE=ps(K.fftSize),this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._freqL=new Uint8Array(128),this._freqR=new Uint8Array(128),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.featureSmoothingAlpha=.2,this.bass=0,this.mid=0,this.high=0,this.amplitude=0,this.peakFreq=0,this.peakByte=0,this.pan=0,this.rmsDbfs=-96,this.spectralCentroidHz=0,this.spectralFluxAU=0,this.spectralFlatnessRatio=0,this.spectralCentroid=0,this.spectralFlux=0,this.spectralFlatness=0,this.inharmonicity=0,this.peakAmplitude=0,this.zeroCrossingRate=0,this.spectralRolloff=0,this.spectralSpread=0,this.spectralSkewness=0,this.chromagram=0,this.ctxState="none"}_createBinAnalysisNode(){if(!this.ctx)return null;const e=new AudioWorkletNode(this.ctx,"bin-analysis-processor",{numberOfInputs:1,numberOfOutputs:0,processorOptions:{fftSize:this.FFT_SIZE,hopSize:Math.floor(this.FFT_SIZE/4),fluxWindowFrames:this._workletConfig.fluxWindowFrames}});return e.port.onmessage=t=>{const i=t.data||{};i.type==="binMetrics"&&(i.magnitude&&(this._binMagnitude=i.magnitude instanceof Float32Array?i.magnitude:new Float32Array(i.magnitude)),i.flux&&(this._binFlux=i.flux instanceof Float32Array?i.flux:new Float32Array(i.flux)),i.phaseDeviation&&(this._binPhaseDeviation=i.phaseDeviation instanceof Float32Array?i.phaseDeviation:new Float32Array(i.phaseDeviation)),i.phase&&(this._binPhase=i.phase instanceof Float32Array?i.phase:new Float32Array(i.phase)),i.envelope&&(this._binEnvelope=i.envelope instanceof Float32Array?i.envelope:new Float32Array(i.envelope)),i.attackTime&&(this._binAttackTime=i.attackTime instanceof Float32Array?i.attackTime:new Float32Array(i.attackTime)))},e}_ensureWorkletLoaded(){if(!(!this.ctx||this._workletReady)&&!this._workletLoadPromise){const e=new URL("/assets/BinAnalysisWorklet-C6EfNb8V.js",import.meta.url);this._workletLoadPromise=this.ctx.audioWorklet.addModule(e).then(()=>{this.binAnalysisNode=this._createBinAnalysisNode(),this._workletReady=!0,this._connectSourceToWorklet(),this._postWorkletConfig()}).catch(t=>{console.warn("[AudioWorklet] Failed to load bin analysis worklet:",t)})}}_postWorkletConfig(){this.binAnalysisNode&&this.binAnalysisNode.port.postMessage({type:"config",config:this._workletConfig})}_connectSourceToWorklet(){if(!this.binAnalysisNode)return!1;const e=this.source||this.streamSource;if(!e)return!1;if(this._workletConnected)return!0;try{return e.connect(this.binAnalysisNode),this._workletConnected=!0,!0}catch{return!1}}setRuleInputUsage(e=null){const t=Bl(e);this._workletConfig.enabled=t.worklet.enabled,this._workletConfig.needMagnitude=t.worklet.needMagnitude,this._workletConfig.needFlux=t.worklet.needFlux,this._workletConfig.needPhaseDeviation=t.worklet.needPhaseDeviation,this._workletConfig.needPhase=t.worklet.needPhase,this._workletConfig.needEnvelope=t.worklet.needEnvelope,this._workletConfig.needAttackTime=t.worklet.needAttackTime,this._calcUsage=t.engine,this._postWorkletConfig()}setFftSize(e){var i,r;const t=ps(e);if(t!==this.FFT_SIZE){if(this.FFT_SIZE=t,this.frequencyData=new Uint8Array(this.FFT_SIZE/2),this.timeDomainData=new Uint8Array(this.FFT_SIZE),this._prevFrequencyData=new Uint8Array(this.FFT_SIZE/2),this._prevFrequencyDataBins=new Uint8Array(this.FFT_SIZE/2),this._binMagnitude=null,this._binFlux=null,this._binPhaseDeviation=null,this._binPhase=null,this._binEnvelope=null,this._binAttackTime=null,this.analyser&&(this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0),this.binAnalysisNode){try{(i=this.source)==null||i.disconnect(this.binAnalysisNode)}catch{}try{(r=this.streamSource)==null||r.disconnect(this.binAnalysisNode)}catch{}try{this.binAnalysisNode.disconnect()}catch{}this.binAnalysisNode=null,this._workletConnected=!1}this.ctx&&this._workletReady&&(this.binAnalysisNode=this._createBinAnalysisNode(),this._connectSourceToWorklet(),this._postWorkletConfig())}}setFluxWindowFrames(e){const t=el(e);t!==this._workletConfig.fluxWindowFrames&&(this._workletConfig.fluxWindowFrames=t,this._postWorkletConfig())}init(e){var t,i,r,a,s,o,l;if(this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=this.FFT_SIZE,this.analyser.smoothingTimeConstant=0,this.analyser.connect(this.ctx.destination),this._ensureWorkletLoaded()),this.audioEl!==e||!this.source&&!this.streamSource){(t=this.source)==null||t.disconnect(),(i=this.streamSource)==null||i.disconnect(),(r=this.splitter)==null||r.disconnect(),(a=this.analyserL)==null||a.disconnect(),(s=this.analyserR)==null||s.disconnect(),this.audioEl=e,this.source=null,this.streamSource=null,this.streamNode=null,this._workletConnected=!1;try{this.source=this.ctx.createMediaElementSource(e),this.source.connect(this.analyser)}catch{const c=((o=e.captureStream)==null?void 0:o.call(e))||((l=e.mozCaptureStream)==null?void 0:l.call(e));c&&(this.streamNode=c,this.streamSource=this.ctx.createMediaStreamSource(c),this.streamSource.connect(this.analyser))}try{this.splitter=this.ctx.createChannelSplitter(2),this.analyserL=this.ctx.createAnalyser(),this.analyserR=this.ctx.createAnalyser();for(const u of[this.analyserL,this.analyserR])u.fftSize=256;const c=this.source||this.streamSource;c==null||c.connect(this.splitter),this.splitter.connect(this.analyserL,0),this.splitter.connect(this.analyserR,1),this._connectSourceToWorklet()}catch{}this._connectSourceToWorklet()}this.ctx.state==="suspended"&&this.ctx.resume(),this.ctxState=this.ctx.state}update(){var b,m,f;if(!this.analyser)return;((b=this.ctx)==null?void 0:b.state)==="suspended"&&this.audioEl&&!this.audioEl.paused&&this.ctx.resume(),this.ctxState=((m=this.ctx)==null?void 0:m.state)??"none",this.analyser.getByteFrequencyData(this.frequencyData),this.analyser.getByteTimeDomainData(this.timeDomainData);const e=this.frequencyData.length,t=((f=this.ctx)==null?void 0:f.sampleRate)??44100,i=t/2,r=y=>y/e*i;let a=0,s=0,o=0,l=0,c=0,u=0,d=0,p=0;for(let y=0;y<e;y++){const v=this.frequencyData[y],x=r(y);x<250?(a+=v,s++):x<4e3?(o+=v,l++):(c+=v,u++),v>d&&(d=v,p=y)}this.bass=s?a/s/255:0,this.mid=l?o/l/255:0,this.high=u?c/u/255:0,this.peakFreq=Math.round(r(p)),this.peakByte=d;const h=Math.max(0,Math.min(1,this.featureSmoothingAlpha));if(this._calcUsage.needSpectralCentroid){const y=Nl(this.frequencyData,t);this.spectralCentroidHz+=(y-this.spectralCentroidHz)*h,this.spectralCentroid=mx(this.spectralCentroidHz,t)}else this.spectralCentroidHz=0,this.spectralCentroid=0;if(this._calcUsage.needGlobalSpectralFlux){const v=ox(this.frequencyData,this._prevFrequencyDataBins)*100;this.spectralFluxAU+=(v-this.spectralFluxAU)*h,this.spectralFlux=Math.max(0,Math.min(1,this.spectralFluxAU/100))}else this.spectralFluxAU=0,this.spectralFlux=0;if(this._calcUsage.needSpectralFlatness){const y=lx(this.frequencyData);this.spectralFlatnessRatio+=(y-this.spectralFlatnessRatio)*h,this.spectralFlatness=Math.max(0,Math.min(1,this.spectralFlatnessRatio))}else this.spectralFlatnessRatio=0,this.spectralFlatness=0;if(this._calcUsage.needInharmonicity){const y=cx(this.frequencyData,t);this.inharmonicity+=(y-this.inharmonicity)*h}else this.inharmonicity=0;if(this._calcUsage.needPeakAmplitude?this.peakAmplitude+=(ux(this.frequencyData)-this.peakAmplitude)*h:this.peakAmplitude=0,this._calcUsage.needZeroCrossingRate?this.zeroCrossingRate+=(dx(this.timeDomainData)-this.zeroCrossingRate)*h:this.zeroCrossingRate=0,this._calcUsage.needSpectralRolloff?this.spectralRolloff+=(px(this.frequencyData,t,.85)-this.spectralRolloff)*h:this.spectralRolloff=0,this._calcUsage.needSpectralSpread||this._calcUsage.needSpectralSkewness){const y=Vd(this.frequencyData,t,this.spectralCentroidHz);if(this._calcUsage.needSpectralSpread?this.spectralSpread+=(y-this.spectralSpread)*h:this.spectralSpread=0,this._calcUsage.needSpectralSkewness){const v=hx(this.frequencyData,t,this.spectralCentroidHz,y);this.spectralSkewness+=(v-this.spectralSkewness)*h}else this.spectralSkewness=0}else this.spectralSpread=0,this.spectralSkewness=0;this._calcUsage.needChromagram?this.chromagram+=(fx(this.frequencyData,t)-this.chromagram)*h:this.chromagram=0,this._prevFrequencyDataBins.set(this.frequencyData),this._prevFrequencyData.set(this.frequencyData);let g=0;for(const y of this.timeDomainData)g+=((y-128)/128)**2;if(this.amplitude=Math.sqrt(g/this.timeDomainData.length),this.rmsDbfs=20*Math.log10(Math.max(1e-6,this.amplitude)),this.analyserL&&this.analyserR){this.analyserL.getByteFrequencyData(this._freqL),this.analyserR.getByteFrequencyData(this._freqR);let y=0,v=0;for(let x=0;x<this._freqL.length;x++)y+=this._freqL[x],v+=this._freqR[x];this.pan=(v-y)/(y+v+1)}}getBinPan(e){if(!this.analyserL||!this.analyserR)return this.pan;const t=Math.min(e,this._freqL.length-1),i=this._freqL[t],r=this._freqR[t];return(r-i)/(i+r+1)}getPrevFrequencyData(){return this._prevFrequencyDataBins}getBinMagnitude(){return this._binMagnitude}getBinFlux(){return this._binFlux}getBinPhaseDeviation(){return this._binPhaseDeviation}getBinPhase(){return this._binPhase}getBinEnvelope(){return this._binEnvelope}getBinAttackTime(){return this._binAttackTime}}const Ae=new Kd;Ae.setRuleInputUsage(qn==null?void 0:qn.requiredInputsByTarget);function Jd(){const n=new WebSocket(`ws://${location.hostname}:8000/ws`);n.onopen=()=>{},n.onclose=()=>{setTimeout(Jd,3e3)},n.onerror=()=>{},n.onmessage=()=>{},ys(e=>{var t;if(n.readyState===WebSocket.OPEN){const i=(t=Rt.getRuleCompileState)==null?void 0:t.call(Rt),r=(i==null?void 0:i.requiredInputsByTarget)||(qn==null?void 0:qn.requiredInputsByTarget)||null,a={...e,audio_analysis_config:wx(e,r)};n.send(JSON.stringify({type:"params_update",payload:a}))}})}Jd();window.addEventListener("seesound:view-reset-camera",()=>{jd()});window.addEventListener("seesound:view-fit-camera",()=>{_x()});window.addEventListener("seesound:view-clean-canvas",()=>{Rt.clear()});let yu=0,zi=0,tl="",An=null,Wa=null,Xa=[],qa=null,Xr=null,mr=[];function Rr(n,e="untitled"){return String(n||"").trim().replace(/[\\/:*?"<>|]/g,"-").replace(/\s+/g," ").replace(/\.+$/g,"").trim()||e}function hs(n){return String(n||"").trim().replace(/\.[^./\\]+$/g,"")}function Ex(n){const e=String(n||"").trim();return e?/\.ssp\.json$/i.test(e)?e.replace(/\.ssp\.json$/i,""):hs(e):""}function Cs(){const n=document.querySelector(".cp-preset-bar .cp-preset-sel"),e=document.querySelector(".cp-preset-bar .cp-preset-name"),t=String((n==null?void 0:n.value)||"").trim();return String((e==null?void 0:e.value)||"").trim()||t||"preset"}function Vl(){var e,t;if(tl)return hs(tl);const n=String(((e=Ae==null?void 0:Ae.audioEl)==null?void 0:e.currentSrc)||((t=Ae==null?void 0:Ae.audioEl)==null?void 0:t.src)||"").trim();if(!n)return"audio";try{const i=new URL(n,window.location.href),r=decodeURIComponent((i.pathname.split("/").pop()||"").trim());if(r)return hs(r)}catch{}return"audio"}async function Cx(n){const e=n==null?void 0:n.src;if(!e)return null;const t=await fetch(e);return t.ok?t.blob():null}function ni(){return`seesound-project-${new Date().toISOString().replace(/[:.]/g,"-").slice(0,19)}${dr}`}async function nl(n={}){var c;const e=(n==null?void 0:n.transparent)===!0,t=Rr(Vl(),"audio"),i=Rr(Cs(),"preset"),r=e?`${t} - ${i} - no-bg.png`:`${t} - ${i}.png`,a=Math.max(1,Math.floor(Number(K.canvasWidth)||Pt.domElement.width/Math.max(1,window.devicePixelRatio))),s=Math.max(1,Math.floor(Number(K.canvasHeight)||Pt.domElement.height/Math.max(1,window.devicePixelRatio))),o=document.createElement("canvas"),l=new ld({canvas:o,antialias:!0,preserveDrawingBuffer:!0});try{const u=l.capabilities.maxTextureSize||8192,d=Math.min(a,u),p=Math.min(s,u),h=Math.max(1,Number(((c=Pt.getPixelRatio)==null?void 0:c.call(Pt))||window.devicePixelRatio||1)),g=Math.max(1,Math.floor(d/h)),b=Math.max(1,Math.floor(p/h));l.setPixelRatio(h),l.setSize(g,b,!1);let m=Fe.clone();Fe===Gt||m.isOrthographicCamera?(m=Fe.clone(),m.updateProjectionMatrix()):m.isPerspectiveCamera&&(m.aspect=d/Math.max(1,p),m.updateProjectionMatrix());const f=[];jn.traverse(x=>{var R;(R=x==null?void 0:x.userData)!=null&&R.excludeFromPng&&x.visible&&(f.push(x),x.visible=!1)}),e?l.setClearColor(0,0):l.setClearColor(Rt.getBackgroundColor(),1),Rt.setViewportHeight(l.domElement.height),l.render(jn,m);for(const x of f)x.visible=!0;const y=await new Promise(x=>o.toBlob(x,"image/png"));if(!y)throw new Error("PNG export failed (empty blob).");const v=document.createElement("a");v.href=URL.createObjectURL(y),v.download=r,document.body.appendChild(v),v.click(),v.remove(),URL.revokeObjectURL(v.href),(d!==a||p!==s)&&console.warn("[PNG] Export size clamped by GPU limits.",{requested:{w:a,h:s},exported:{w:d,h:p},maxTextureSize:u})}finally{Rt.setViewportHeight(Pt.domElement.height),l.dispose()}}async function Tx(){await nl({transparent:!0})}function Ax(){const n=Rr(Vl(),"audio"),e=Rr(Cs(),"preset"),t=new Uv,i=[];jn.traverse(r=>{var a;(a=r==null?void 0:r.userData)!=null&&a.excludeFromObj&&r.visible&&(i.push(r),r.visible=!1)});try{const r=t.parse(jn),a=new Blob([r],{type:"text/plain;charset=utf-8"}),s=URL.createObjectURL(a),o=document.createElement("a");o.href=s,o.download=`${n} - ${e}.obj`,document.body.appendChild(o),o.click(),o.remove(),URL.revokeObjectURL(s)}finally{for(const r of i)r.visible=!0}}function Mu(n,e){n.dispatchEvent(new CustomEvent("player:paintall-state",{detail:{running:e},bubbles:!1}))}function la(n,e){n.dispatchEvent(new CustomEvent("player:recordvideo-state",{detail:{running:e},bubbles:!1}))}async function Px(n){var a;if(!n)return{track:null,cleanup:null};try{if(typeof n.captureStream=="function"){const o=n.captureStream().getAudioTracks()[0]||null;if(o)return{track:o,cleanup:null}}}catch{}Ae.init(n),((a=Ae.ctx)==null?void 0:a.state)==="suspended"&&await Ae.ctx.resume();const e=Ae.source||Ae.streamSource;if(!e||!Ae.ctx)return{track:null,cleanup:null};const t=Ae.ctx.createMediaStreamDestination();return e.connect(t),{track:t.stream.getAudioTracks()[0]||null,cleanup:()=>{try{e.disconnect(t)}catch{}try{t.disconnect()}catch{}}}}async function Su(n,e){if(An||!(e!=null&&e.src))return;if(typeof MediaRecorder>"u"||typeof Pr.captureStream!="function"){alert("Video recording is not supported in this browser.");return}mr=[],jn.traverse(c=>{var u;(u=c==null?void 0:c.userData)!=null&&u.excludeFromVideo&&c.visible&&(mr.push(c),c.visible=!1)});const t=Pr.captureStream(60),i=new MediaStream;for(const c of t.getVideoTracks())i.addTrack(c);const{track:r,cleanup:a}=await Px(e);qa=a,r&&i.addTrack(r);const o=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(c=>{var u;return(u=MediaRecorder.isTypeSupported)==null?void 0:u.call(MediaRecorder,c)})||"",l=new MediaRecorder(i,o?{mimeType:o}:void 0);if(Xa=[],Wa=i,An=l,l.ondataavailable=c=>{c.data&&c.data.size>0&&Xa.push(c.data)},l.onstop=()=>{const c=Xa;Xa=[];const u=new Blob(c,{type:l.mimeType||"video/webm"});if(u.size>0){const d=Rr(Vl(),"audio"),p=Rr(Cs(),"preset"),h=document.createElement("a");h.href=URL.createObjectURL(u),h.download=`${d} - ${p}.webm`,document.body.appendChild(h),h.click(),h.remove(),URL.revokeObjectURL(h.href)}if(Wa)for(const d of Wa.getTracks())try{d.stop()}catch{}if(Wa=null,typeof qa=="function")try{qa()}catch{}qa=null,Xr&&(e.removeEventListener("ended",Xr),Xr=null);for(const d of mr)d.visible=!0;mr=[],An=null,la(n,!1)},e.paused)try{await e.play()}catch{}Xr=()=>{An&&An.state!=="inactive"&&An.stop()},e.addEventListener("ended",Xr,{once:!0}),l.start(200),la(n,!0)}function wu(n){if(An)try{An.state!=="inactive"&&An.stop()}catch{for(const e of mr)e.visible=!0;mr=[],An=null,la(n,!1)}}async function Rx(n,e){var l,c,u,d,p,h,g,b,m;if(!e||!(e.duration>0)&&(await new Promise(f=>{if(e.duration>0){f();return}const y=()=>{v(),f()},v=()=>{e.removeEventListener("loadedmetadata",y),e.removeEventListener("canplay",y),e.removeEventListener("error",y)};e.addEventListener("loadedmetadata",y,{once:!0}),e.addEventListener("canplay",y,{once:!0}),e.addEventListener("error",y,{once:!0})}),!(e.duration>0)))return;const t=!e.paused&&!e.ended;t&&e.pause();const i=++zi,r=await Cx(e),a=r?URL.createObjectURL(r):e.currentSrc||e.src;if(!a)return;const s=new Audio;s.crossOrigin="anonymous",s.src=a,s.preload="auto",s.currentTime=0,s.muted=!0,s.volume=0,typeof s.preservesPitch=="boolean"&&(s.preservesPitch=!1),s.playbackRate=16,s.style.display="none",document.body.appendChild(s);const o=new Kd;o.setRuleInputUsage((l=Rt.getRuleCompileState())==null?void 0:l.requiredInputsByTarget),Mu(n,!0);try{Rt.clear(),await new Promise((w,T)=>{const A=()=>{_(),w()},C=()=>{_(),T(new Error("Paint-all audio metadata failed to load."))},_=()=>{s.removeEventListener("loadedmetadata",A),s.removeEventListener("canplay",A),s.removeEventListener("error",C)};s.addEventListener("loadedmetadata",A,{once:!0}),s.addEventListener("canplay",A,{once:!0}),s.addEventListener("error",C,{once:!0}),s.load()}),o.init(s),((c=o.ctx)==null?void 0:c.state)==="suspended"&&await o.ctx.resume(),await s.play();const f=performance.now(),y=3*60*1e3;let v=-1,x=0,R=0;for(;i===zi&&!s.ended;){if(performance.now()-f>y){console.warn("[PaintAll] Aborting due to timeout.");break}await new Promise(L=>requestAnimationFrame(L)),o.update();const w=Pt.domElement.width/window.devicePixelRatio,T=Pt.domElement.height/window.devicePixelRatio,A=Qd(),C={...K,persistMode:1,cameraState:{x:Fe.position.x,y:Fe.position.y,z:Fe.position.z,zoom:Fe.zoom,targetX:gt.x,targetY:gt.y,targetZ:gt.z,angleOfView:Bt.fov},cameraCanvasWidthUnits:A.w,cameraCanvasHeightUnits:A.h};Rt.update(o,C,w,T),Zd(Rt.getCameraOutput());const _=Number(s.currentTime)||0;if(_>v+1e-4?(v=_,x=0):x++,s.paused&&!s.ended)try{await s.play()}catch{break}if(x>120){const L=Number(s.duration)||0;if(L>0&&_>=Math.max(0,L-.25)){s.currentTime=L;break}if(L>0&&R<12){const I=Math.max(.15,L/240);s.currentTime=Math.min(L,_+I),R++,x=0;continue}console.warn("[PaintAll] Aborting due to persistent playback stall.");break}}}finally{s.pause(),s.src="",s.remove(),r&&URL.revokeObjectURL(a);try{(u=o.source)==null||u.disconnect()}catch{}try{(d=o.streamSource)==null||d.disconnect()}catch{}try{(p=o.splitter)==null||p.disconnect()}catch{}try{(h=o.analyserL)==null||h.disconnect()}catch{}try{(g=o.analyserR)==null||g.disconnect()}catch{}try{(b=o.analyser)==null||b.disconnect()}catch{}try{await((m=o.ctx)==null?void 0:m.close())}catch{}if(Mu(n,!1),t&&i===zi)try{await e.play()}catch{}}}function Qd(){let n=0,e=0;if(Fe.isOrthographicCamera)n=Math.abs((Fe.right-Fe.left)/Math.max(.01,Fe.zoom)),e=Math.abs((Fe.top-Fe.bottom)/Math.max(.01,Fe.zoom));else{const r=Math.max(.001,Fe.position.distanceTo(gt)),a=pl.degToRad(Fe.fov);e=2*Math.tan(a*.5)*r/Math.max(.01,Fe.zoom),n=e*Fe.aspect}const t=n*.5,i=e*.5;return{w:n,h:e,left:gt.x-t,right:gt.x+t,top:gt.y+i,bottom:gt.y-i}}function ep(){var t,i,r,a,s,o,l,c,u;requestAnimationFrame(ep),yu++,Ae.update();const n=!!(Ae.audioEl&&!Ae.audioEl.paused&&!Ae.audioEl.ended);if(n&&!Ae.analyser&&Ae.audioEl&&Ae.init(Ae.audioEl),n){const d=Pt.domElement.width/window.devicePixelRatio,p=Pt.domElement.height/window.devicePixelRatio,h=Qd(),g={...K,cameraState:{x:Fe.position.x,y:Fe.position.y,z:Fe.position.z,zoom:Fe.zoom,targetX:gt.x,targetY:gt.y,targetZ:gt.z,angleOfView:Bt.fov},cameraCanvasWidthUnits:h.w,cameraCanvasHeightUnits:h.h};Rt.update(Ae,g,d,p),Zd(Rt.getCameraOutput());const b=((t=Ae.getBinMagnitude)==null?void 0:t.call(Ae))||null,m=((i=Ae.getBinFlux)==null?void 0:i.call(Ae))||null,f=((r=Ae.getBinPhaseDeviation)==null?void 0:r.call(Ae))||null,y=((a=Ae.getBinPhase)==null?void 0:a.call(Ae))||null,v=((s=Ae.getBinAttackTime)==null?void 0:s.call(Ae))||null,x=((o=Ae.getBinEnvelope)==null?void 0:o.call(Ae))||null,R=Ae.peakFreq??0,w=(l=Ae.ctx)!=null&&l.sampleRate?Ae.ctx.sampleRate*.5:22050,T=Bn(Ae.rmsDbfs,K.globalRmsNormMin??-60,K.globalRmsNormMax??0),A=Bn(Ae.spectralCentroidHz,K.spectralCentroidNormMin??150,K.spectralCentroidNormMax??8e3),C=Bn(Ae.spectralFluxAU,K.globalSpectralFluxNormMin??0,K.globalSpectralFluxNormMax??100),_=Bn(Ae.spectralFlatnessRatio,K.spectralFlatnessNormMin??0,K.spectralFlatnessNormMax??1),L=(W,de)=>{if(!W||!W.length)return 0;let j=0;for(let te=0;te<W.length;te++)j+=de(W[te]);return j/W.length},I=L(b,W=>Bn(W,K.binMagnitudeNormMin??-70,K.binMagnitudeNormMax??0)),G=L(m,W=>Bn(W,K.binFluxNormMin??0,K.binFluxNormMax??.5)),q=L(f,W=>Bn(W,K.binPhaseDeviationNormMin??0,K.binPhaseDeviationNormMax??Math.PI)),$=L(y,W=>Bn(W,-Math.PI,Math.PI)),J=L(v,W=>Bn(W,K.binAttackTimeNormMin??5,K.binAttackTimeNormMax??500)),ue=L(x,W=>Bn(W,0,3));window.dispatchEvent(new CustomEvent("seesound:rule-probe",{detail:{inputs:{amplitude:T,globalRmsEnergy:T,frequencyHz:R,normFreq:Math.max(0,Math.min(1,R/Math.max(1e-6,w))),bass:Ae.bass??0,mid:Ae.mid??0,high:Ae.high??0,peakFreq:R,pan:Ae.pan??0,spectralCentroid:A,spectralFlux:C,spectralFlatness:_,inharmonicity:Ae.inharmonicity??0,peakAmplitude:Ae.peakAmplitude??0,zeroCrossingRate:Ae.zeroCrossingRate??0,spectralRolloff:Ae.spectralRolloff??0,spectralSpread:Ae.spectralSpread??0,spectralSkewness:Ae.spectralSkewness??0,chromagram:Ae.chromagram??0,binMagnitude:I,binPhase:$,binFlux:G,binPhaseDeviation:q,binAttackTime:J,binEnvelope:ue,binEnvelopeState:ue,binRMSEnergy:T,time:((c=Ae.audioEl)==null?void 0:c.currentTime)??0,deltaTime:1/60,canvasWidthPx:d,canvasHeightPx:p,audioLengthSec:((u=Ae.audioEl)==null?void 0:u.duration)??0}}}))}const e=Rt.getBackgroundColor();Pt.setClearColor(e,1),Rt.setViewportHeight(Pt.domElement.height),fa.render(),yu%6===0&&window.dispatchEvent(new CustomEvent("seesound:camera-state",{detail:{position:{x:Fe.position.x,y:Fe.position.y,z:Fe.position.z},target:{x:gt.x,y:gt.y,z:gt.z},fov:Bt.fov,projection:K.cameraProjection==="perspective"?"perspective":"axonometric"}}))}ep();{const n=document.getElementById("audio-player"),{audioEl:e}=ix(n);Ae.audioEl=e;let t=null;e.addEventListener("play",async()=>{var w;Ae.init(e),((w=Ae.ctx)==null?void 0:w.state)==="suspended"&&await Ae.ctx.resume()}),e.addEventListener("pause",()=>{}),e.addEventListener("ended",()=>{}),n.addEventListener("player:playpause",async()=>{var w;zi++,Ae.init(e),((w=Ae.ctx)==null?void 0:w.state)==="suspended"&&await Ae.ctx.resume()}),n.addEventListener("player:play",()=>{zi++}),n.addEventListener("player:pause",()=>{zi++}),n.addEventListener("player:stop",()=>{zi++}),n.addEventListener("player:savepng",async()=>{await nl()}),n.addEventListener("player:paintall",async()=>{try{await Rx(n,e)}catch(w){console.warn("[PaintAll] failed:",w),alert("Paint-all failed before completion. Check console for details.")}}),n.addEventListener("player:recordvideo-toggle",async()=>{if(An){wu(n);return}try{await Su(n,e)}catch(w){console.warn("[Recorder] start failed:",w),alert("Failed to start recording."),la(n,!1)}}),window.addEventListener("seesound:export-image",async()=>{await nl()}),window.addEventListener("seesound:export-image-no-bg",async()=>{await Tx()}),window.addEventListener("seesound:export-video-toggle",async()=>{if(An){wu(n);return}try{await Su(n,e)}catch(w){console.warn("[Recorder] start failed:",w),alert("Failed to start recording."),la(n,!1)}}),window.addEventListener("seesound:export-obj",()=>{Ax()}),n.addEventListener("player:playbackrate",w=>{var A;const T=Number((A=w==null?void 0:w.detail)==null?void 0:A.rate);Number.isFinite(T)&&(e.playbackRate=Math.max(.1,Math.min(16,T)))}),n.addEventListener("player:fileloaded",w=>{var A;const T=(A=w==null?void 0:w.detail)==null?void 0:A.file;t=T instanceof File?T:null,tl=(t==null?void 0:t.name)||""});let i=null,r="",a=null,s=!1,o=[];const l=w=>{if(!Array.isArray(w))return[];const T=[];for(const A of w){const C=String((A==null?void 0:A.name)||"").trim(),_=A==null?void 0:A.params;!C||!_||typeof _!="object"||T.push({name:C,params:_})}return T},c=({name:w,params:T})=>{const A=String(w||"").trim();if(!A||!T||typeof T!="object")return!1;const C=l(o),_=C.findIndex(I=>I.name===A),L={name:A,params:T};return _>=0?C[_]=L:C.push(L),o=C,!0},u=()=>{window.dispatchEvent(new CustomEvent("seesound:project-file-state",{detail:{fileName:String(r||"").trim(),projectName:Ex(r)}}))},d=async()=>{(await Sd()).filter(A=>!String(A||"").startsWith("rule__")).length>0||(await $o("default",os()),window.dispatchEvent(new CustomEvent("seesound:preset-library-changed")))},p=async w=>{if(Array.isArray(w)){for(const T of w){const A=String((T==null?void 0:T.name)||"").trim(),C=T==null?void 0:T.params;!A||!C||typeof C!="object"||await $o(A,C)}window.dispatchEvent(new CustomEvent("seesound:preset-library-changed"))}},h=async(w,T)=>{const A=await w.createWritable();await A.write(JSON.stringify(T,null,2)),await A.close()},g=async()=>{const w=os(),T=Cs();return ax({params:w,presetName:T,presetLibrary:l(o),projectName:hs(r||ni())})},b=async({forceDownload:w=!1}={})=>{try{const T=await g();if(!w&&i){await h(i,T),window.dispatchEvent(new CustomEvent("seesound:project-autosaved",{detail:{fileName:r||ni()}})),u();return}sx(T,ni())}catch(T){console.warn("[Project] save failed:",T)}},m=()=>{!i||s||(a&&clearTimeout(a),a=setTimeout(async()=>{a=null,await b({forceDownload:!1})},450))},f=async w=>{try{s=!0,w.params&&typeof w.params=="object"&&$t(w.params),o=l(w==null?void 0:w.presetLibrary),Array.isArray(w.presetLibrary)&&await p(w.presetLibrary),await d(),window.dispatchEvent(new CustomEvent("seesound:project-loaded",{detail:{fileName:r,presetName:String((w==null?void 0:w.presetName)||"")}}))}catch(T){console.warn("[Project] load failed:",T)}finally{s=!1}},y=async()=>{if(typeof window.showOpenFilePicker!="function")return!1;try{const[w]=await window.showOpenFilePicker({multiple:!1,excludeAcceptAllOption:!1,types:[{description:"SEESOUND Project",accept:{"application/json":[dr,".json"]}}]});if(!w)return!1;const T=await w.getFile(),A=await T.text(),C=_u(A);return i=w,r=String(T.name||"").trim(),await f(C),u(),!0}catch{return!1}},v=async()=>new Promise(w=>{const T=document.createElement("input");T.type="file",T.accept=`${dr},.json`,T.style.display="none",T.addEventListener("change",async()=>{var A;try{const C=(A=T.files)==null?void 0:A[0];if(!C){w(!1);return}const _=await C.text(),L=_u(_);i=null,r=String(C.name||"").trim(),await f(L),u(),w(!0)}catch{w(!1)}finally{T.remove()}},{once:!0}),document.body.appendChild(T),T.click()}),x=async(w="",T=!0)=>{if(typeof window.showSaveFilePicker!="function")return!1;try{const A=String(w||"").trim()||ni(),C=await window.showSaveFilePicker({suggestedName:A,types:[{description:"SEESOUND Project",accept:{"application/json":[dr,".json"]}}]});return C?(T&&(xd(),await d(),o=[]),i=C,r=String(C.name||A).trim(),await b({forceDownload:!1}),u(),!0):!1}catch{return!1}},R=async(w="")=>{if(typeof window.showSaveFilePicker!="function")return!1;try{const T=String(w||"").trim()||ni(),A=await window.showSaveFilePicker({suggestedName:T,types:[{description:"SEESOUND Project",accept:{"application/json":[dr,".json"]}}]});return A?(i=A,r=String(A.name||T).trim(),await b({forceDownload:!1}),u(),!0):!1}catch{return!1}};n.addEventListener("player:saveproject",async()=>{if(i){await b({forceDownload:!1});return}await R(ni())||await b({forceDownload:!0})}),n.addEventListener("player:loadproject",async w=>{var T;await f(((T=w==null?void 0:w.detail)==null?void 0:T.payload)||{})}),window.addEventListener("seesound:project-save-request",async()=>{if(i){await b({forceDownload:!1});return}await R(ni())||await b({forceDownload:!0})}),window.addEventListener("seesound:project-save-as-request",async()=>{const w=r?`${r}${dr}`:ni();await R(w)||await b({forceDownload:!0})}),window.addEventListener("seesound:project-load-request",async w=>{const T=(w==null?void 0:w.detail)||{},A=String(T.fileName||"").trim();A&&(r=A,u()),await f(T.payload||{}),!i&&typeof window.showSaveFilePicker=="function"&&window.confirm("Attach this project to an autosave file now?")&&await x(String(T.fileName||ni()),!1)}),window.addEventListener("seesound:project-open-request",async()=>{await y()||await v()}),window.addEventListener("seesound:project-new-request",async()=>{await x()}),window.addEventListener("seesound:preset-library-changed",()=>{m()}),window.addEventListener("seesound:project-preset-save-request",async w=>{var C,_;const T=String(((C=w==null?void 0:w.detail)==null?void 0:C.name)||"").trim(),A=(_=w==null?void 0:w.detail)==null?void 0:_.params;c({name:T,params:A})&&(m(),window.dispatchEvent(new CustomEvent("seesound:project-preset-library-changed")))}),ys((w,T)=>{!T||T==="*"||s||((T==="originSignEnabled"||T==="coordinateGuidesEnabled")&&Wd(),m())}),u()}let Si=null,il=!1;Si=rx({wrapper:oa,column:Yn,onResize(n,e){if(kl(n,e),Hl(n,e),!il){const t=Math.max(160,Math.floor(n||160)),i=Math.max(120,Math.floor(e||120));(Number(K.canvasWidth)!==t||Number(K.canvasHeight)!==i)&&$t({canvasWidth:t,canvasHeight:i})}}});function Hl(n,e){const t=Math.max(5,Math.min(400,Math.floor(Number(K.canvasScale)||100)));window.dispatchEvent(new CustomEvent("seesound:canvas-size",{detail:{w:n,h:e,s:t}}))}function Nx(n){const e=n instanceof Element?n:null;return e?!!e.closest('input,textarea,select,[contenteditable="true"]'):!1}window.addEventListener("keydown",n=>{if(n.defaultPrevented||!(n.ctrlKey||n.metaKey)||n.altKey||Nx(n.target))return;const e=String(n.key||"").toLowerCase();if(e==="z"&&!n.shiftKey){if(!$b())return;n.preventDefault(),n.stopPropagation();return}if(e==="y"||e==="z"&&n.shiftKey){if(!Zb())return;n.preventDefault(),n.stopPropagation()}});function tp(){const e=Math.max(5,Math.min(400,Math.floor(Number(K.canvasScale)||100)))/100;oa.style.transformOrigin="center center",oa.style.transform=`scale(${e})`}function np(){var i;const n=((i=Si==null?void 0:Si.getSize)==null?void 0:i.call(Si))||{},e=Math.max(160,Math.floor(n.w||oa.clientWidth||Yn.clientWidth||window.innerWidth)),t=Math.max(120,Math.floor(n.h||oa.clientHeight||Yn.clientHeight||Math.round(window.innerHeight*.7)));return{w:e,h:t}}function ip(){if(!Si)return;const n=np(),e=Math.max(160,Math.floor(Number(K.canvasWidth)||n.w)),t=Math.max(120,Math.floor(Number(K.canvasHeight)||n.h));if(e===n.w&&t===n.h){Hl(n.w,n.h);return}il=!0,Si.setSize(e,t),il=!1}ip();tp();{const n=np();(Number(K.canvasWidth)!==n.w||Number(K.canvasHeight)!==n.h)&&$t({canvasWidth:n.w,canvasHeight:n.h}),Hl(n.w,n.h)}ys((n,e)=>{if(e==="cameraProjection"&&Ul(),(e==="cameraProjection"||e==="cameraAxoPreset")&&Ol(),(e==="cameraProjection"||e==="cameraPosX"||e==="cameraPosY"||e==="cameraPosZ"||e==="cameraTargetX"||e==="cameraTargetY"||e==="cameraTargetZ"||e==="cameraAngleOfView")&&$d(),(e==="postProcessEnabled"||e==="bloomEnabled"||e==="bloomStrength"||e==="bloomRadius"||e==="bloomThreshold"||e==="bokehEnabled"||e==="bokehFocus"||e==="bokehAperture"||e==="bokehMaxBlur")&&qd(),(e==="canvasWidth"||e==="canvasHeight")&&ip(),e==="canvasScale"&&tp(),e==="maxParticles"){const t=Math.max(4096,Math.floor(K.maxParticles||4096));K.maxParticles!==t&&(K.maxParticles=t),Rt.setMaxParticles(t)}if(e==="fftSize"){const t=ps(K.fftSize);if(K.fftSize!==t){$t({fftSize:t});return}Ae.setFftSize(t)}if(e==="fluxWindowFrames"){const t=el(K.fluxWindowFrames);if(K.fluxWindowFrames!==t){$t({fluxWindowFrames:t});return}Ae.setFluxWindowFrames(t)}if(e==="ruleBlocks"){const t=Rt.onRulesChanged(K.ruleBlocks??[]);Ae.setRuleInputUsage(t==null?void 0:t.requiredInputsByTarget),zl(t==null?void 0:t.requiredInputsByTarget),window.dispatchEvent(new CustomEvent("seesound:rule-compile-state",{detail:t}))}});C_(document.getElementById("control-panel"));var Tu,Au;zl((Au=(Tu=Rt.getRuleCompileState)==null?void 0:Tu.call(Rt))==null?void 0:Au.requiredInputsByTarget);const Eu=Array.isArray(K.ruleBlocks)?K.ruleBlocks.length:0,ai=Rt.getRuleCompileState(),Cu=(ai==null?void 0:ai.compileStatus)??"bootstrap-pending";console.info(`[RuleEngine] schema=v${ss} compile=${Cu} rules=${Eu}`,{schemaVersion:ss,compileStatus:Cu,compileTimeMs:(ai==null?void 0:ai.compileTimeMs)??0,compileError:(ai==null?void 0:ai.compileError)??null,ruleCount:Eu,debug:Vb});console.log("%c SEESOUND v1.0 ready ","background:#111;color:#4ade80;padding:4px 8px;border-radius:4px;font-weight:bold");
